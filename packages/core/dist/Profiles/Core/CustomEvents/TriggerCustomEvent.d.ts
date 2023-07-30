import { Fiber } from '../../../Execution/Fiber.js';
import { IGraph } from '../../../Graphs/Graph.js';
import { FlowNode2 } from '../../../Nodes/FlowNode.js';
import { NodeConfiguration } from '../../../Nodes/Node.js';
import { NodeDescription, NodeDescription2 } from '../../../Nodes/Registry/NodeDescription.js';
export declare class TriggerCustomEvent extends FlowNode2 {
    static Description: NodeDescription2;
    private readonly customEvent;
    constructor(description: NodeDescription, graph: IGraph, configuration: NodeConfiguration);
    triggered(fiber: Fiber, triggeringSocketName: string): void;
}
