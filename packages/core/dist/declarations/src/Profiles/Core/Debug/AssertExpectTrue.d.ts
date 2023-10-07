import { Fiber } from "../../../Execution/Fiber.js";
import { Graph } from "../../../Graphs/Graph.js";
import { FlowNode } from "../../../Nodes/FlowNode.js";
import { NodeDescription } from "../../../Nodes/Registry/NodeDescription.js";
export declare class ExpectTrue extends FlowNode {
    static Description: NodeDescription;
    constructor(description: NodeDescription, graph: Graph);
    triggered(fiber: Fiber, triggeredSocketName: string): void;
}
