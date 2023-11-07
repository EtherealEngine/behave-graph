import { Assert } from '../Diagnostics/Assert.js';
import { Node } from './Node.js';
import { NodeType } from './NodeInstance.js';
export class FlowNode extends Node {
    constructor(description, graph, inputs = [], outputs = [], configuration = {}) {
        // determine if this is an eval node
        super({
            description: {
                ...description,
                category: description.category
            },
            inputs,
            outputs,
            graph,
            configuration,
            nodeType: NodeType.Flow
        });
        // must have at least one input flow socket
        Assert.mustBeTrue(this.inputs.some((socket) => socket.valueTypeName === 'flow'));
    }
    // eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
    triggered(fiber, triggeringSocketName) {
        throw new Error('not implemented');
    }
}
export class FlowNode2 extends FlowNode {
    constructor(props) {
        super(props.description, props.graph, props.inputs, props.outputs, props.configuration);
    }
}
export class FlowNodeInstance extends Node {
    constructor(nodeProps) {
        super({ ...nodeProps, nodeType: NodeType.Flow });
        this.triggered = (fiber, triggeringSocketName) => {
            this.state = this.triggeredInner({
                commit: (outFlowName, fiberCompletedListener) => fiber.commit(this, outFlowName, fiberCompletedListener),
                read: this.readInput,
                write: this.writeOutput,
                graph: this.graph,
                state: this.state,
                configuration: this.configuration,
                outputSocketKeys: this.outputSocketKeys,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                triggeringSocketName
            });
        };
        this.triggeredInner = nodeProps.triggered;
        this.state = nodeProps.initialState;
        this.outputSocketKeys = nodeProps.outputs.map((s) => s.name);
    }
}
//# sourceMappingURL=FlowNode.js.map
//# sourceMappingURL=FlowNode.js.map