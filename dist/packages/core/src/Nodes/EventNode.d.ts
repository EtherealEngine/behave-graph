import { Engine } from '../Execution/Engine.js';
import { IGraph } from '../Graphs/Graph.js';
import { Socket } from '../Sockets/Socket.js';
import { Node, NodeConfiguration } from './Node.js';
import { IEventNodeDefinition } from './NodeDefinitions.js';
import { IEventNode, INode, NodeType } from './NodeInstance.js';
import { NodeDescription } from './Registry/NodeDescription.js';
export declare class EventNode extends Node<NodeType.Event> implements IEventNode {
    constructor(description: NodeDescription, graph: IGraph, inputs?: Socket[], outputs?: Socket[], configuration?: NodeConfiguration);
    init(engine: Engine): void;
    dispose(engine: Engine): void;
}
export declare class EventNode2 extends EventNode {
    constructor(props: {
        description: NodeDescription;
        graph: IGraph;
        inputs?: Socket[];
        outputs?: Socket[];
        configuration?: NodeConfiguration;
    });
}
export declare class EventNodeInstance<TEventNodeDef extends IEventNodeDefinition> extends Node<NodeType.Event> implements IEventNode {
    private initInner;
    private disposeInner;
    private state;
    private readonly outputSocketKeys;
    constructor(nodeProps: Omit<INode, 'nodeType'> & Pick<TEventNodeDef, 'init' | 'dispose' | 'initialState'>);
    init: (engine: Engine) => any;
    dispose(): void;
}
