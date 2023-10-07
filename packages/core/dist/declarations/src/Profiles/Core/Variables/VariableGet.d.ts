import { Graph } from "../../../Graphs/Graph.js";
import { ImmediateNode } from "../../../Nodes/ImmediateNode.js";
import { NodeConfiguration } from "../../../Nodes/Node.js";
import { NodeDescription, NodeDescription2 } from "../../../Nodes/Registry/NodeDescription.js";
export declare class VariableGet extends ImmediateNode {
    static Description: NodeDescription2;
    constructor(description: NodeDescription, graph: Graph, configuration: NodeConfiguration);
}
