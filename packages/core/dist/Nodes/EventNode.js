import { Assert } from '../Diagnostics/Assert.js';
import { Node } from './Node.js';
import { NodeType } from './NodeInstance.js';
// no flow inputs, always evaluated on startup
export class EventNode extends Node {
    constructor(description, graph, inputs = [], outputs = [], configuration = {}) {
        super({
            ...description,
            description: {
                ...description,
                category: description.category
            },
            inputs,
            outputs,
            graph,
            configuration,
            nodeType: NodeType.Event
        });
        // no input flow sockets allowed.
        Assert.mustBeTrue(!this.inputs.some((socket) => socket.valueTypeName === 'flow'));
        // must have at least one output flow socket
        Assert.mustBeTrue(this.outputs.some((socket) => socket.valueTypeName === 'flow'));
    }
    // eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
    init(engine) {
        throw new Error('not implemented');
    }
    // eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
    dispose(engine) {
        throw new Error('not implemented');
    }
}
export class EventNode2 extends EventNode {
    constructor(props) {
        super(props.description, props.graph, props.inputs, props.outputs, props.configuration);
    }
}
export class EventNodeInstance extends Node {
    constructor(nodeProps) {
        super({ ...nodeProps, nodeType: NodeType.Event });
        this.init = (engine) => {
            this.state = this.initInner({
                read: this.readInput,
                write: this.writeOutput,
                state: this.state,
                outputSocketKeys: this.outputSocketKeys,
                commit: (outFlowname, fiberCompletedListener) => {
                    engine.commitToNewFiber(this, outFlowname, fiberCompletedListener);
                    engine.executeAllSync(1);
                },
                configuration: this.configuration,
                graph: this.graph
            });
        };
        this.initInner = nodeProps.init;
        this.disposeInner = nodeProps.dispose;
        this.state = nodeProps.initialState;
        this.outputSocketKeys = nodeProps.outputs.map((s) => s.name);
    }
    dispose() {
        this.disposeInner({
            state: this.state,
            graph: this.graph
        });
    }
}
//# sourceMappingURL=EventNode.js.map