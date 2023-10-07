import { Graph } from "../../Graphs/Graph.js";
import { ImmediateNode } from "../ImmediateNode.js";
import { NodeDescription } from "../Registry/NodeDescription.js";
export declare class In0Out1FuncNode<Out1> extends ImmediateNode {
    readonly evalFunc: () => Out1;
    constructor(description: NodeDescription, graph: Graph, outputValueType: string, evalFunc: () => Out1);
}
