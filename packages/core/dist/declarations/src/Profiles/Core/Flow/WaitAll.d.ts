import { Fiber } from "../../../Execution/Fiber.js";
import { Graph } from "../../../Graphs/Graph.js";
import { FlowNode } from "../../../Nodes/FlowNode.js";
import { NodeDescription, NodeDescription2 } from "../../../Nodes/Registry/NodeDescription.js";
export declare class WaitAll extends FlowNode {
    private numInputs;
    static Description: NodeDescription2;
    private isOn;
    constructor(description: NodeDescription, graph: Graph, numInputs: number);
    private triggeredMap;
    private triggeredCount;
    private outputTriggered;
    private reset;
    triggered(fiber: Fiber, triggeringSocketName: string): void;
}
