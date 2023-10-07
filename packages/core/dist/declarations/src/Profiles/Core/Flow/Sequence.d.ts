import { NodeConfiguration } from "../../../Nodes/Node.js";
import { Fiber } from "../../../Execution/Fiber.js";
import { Graph } from "../../../Graphs/Graph.js";
import { FlowNode } from "../../../Nodes/FlowNode.js";
import { NodeDescription, NodeDescription2 } from "../../../Nodes/Registry/NodeDescription.js";
export declare class Sequence extends FlowNode {
    static Description: NodeDescription2;
    constructor(description: NodeDescription, graph: Graph, configuration: NodeConfiguration);
    triggered(fiber: Fiber, triggeringSocketName: string): void;
}
