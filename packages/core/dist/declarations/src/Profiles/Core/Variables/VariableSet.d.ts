import { Fiber } from "../../../Execution/Fiber.js";
import { Graph } from "../../../Graphs/Graph.js";
import { FlowNode } from "../../../Nodes/FlowNode.js";
import { NodeConfiguration } from "../../../Nodes/Node.js";
import { NodeDescription, NodeDescription2 } from "../../../Nodes/Registry/NodeDescription.js";
export declare class VariableSet extends FlowNode {
    static Description: NodeDescription2;
    static GetDescription(graph: Graph, variableId: string): NodeDescription;
    private readonly variable;
    constructor(description: NodeDescription, graph: Graph, configuration: NodeConfiguration);
    triggered(fiber: Fiber, triggeredSocketName: string): void;
}
