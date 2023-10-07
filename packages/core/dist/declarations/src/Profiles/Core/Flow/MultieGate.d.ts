import { Fiber } from "../../../Execution/Fiber.js";
import { Graph } from "../../../Graphs/Graph.js";
import { FlowNode } from "../../../Nodes/FlowNode.js";
import { NodeDescription } from "../../../Nodes/Registry/NodeDescription.js";
export declare class MultiGate extends FlowNode {
    static Description: NodeDescription;
    constructor(description: NodeDescription, graph: Graph);
    private isInitialized;
    private nextIndex;
    triggered(fiber: Fiber, triggeringSocketName: string): void;
}
