import { Fiber } from '../Execution/Fiber.js';
import { IGraph } from '../Graphs/Graph.js';
import { Socket } from '../Sockets/Socket.js';
import { Node, NodeConfiguration } from './Node.js';
import { IFlowNodeDefinition } from './NodeDefinitions.js';
import { IFlowNode, INode, NodeType } from './NodeInstance.js';
import { NodeDescription } from './Registry/NodeDescription.js';
export declare class FlowNode extends Node<NodeType.Flow> implements IFlowNode {
    constructor(description: NodeDescription, graph: IGraph, inputs?: Socket[], outputs?: Socket[], configuration?: NodeConfiguration);
    triggered(fiber: Fiber, triggeringSocketName: string): void;
}
export declare class FlowNode2 extends FlowNode {
    constructor(props: {
        description: NodeDescription;
        graph: IGraph;
        inputs?: Socket[];
        outputs?: Socket[];
        configuration?: NodeConfiguration;
    });
}
export declare class FlowNodeInstance<TFlowNodeDefinition extends IFlowNodeDefinition> extends Node<NodeType.Flow> implements IFlowNode {
    private triggeredInner;
    private state;
    private readonly outputSocketKeys;
    constructor(nodeProps: Omit<INode, 'nodeType'> & Pick<TFlowNodeDefinition, 'triggered' | 'initialState'>);
    triggered: (fiber: Fiber, triggeringSocketName: string) => void;
}
