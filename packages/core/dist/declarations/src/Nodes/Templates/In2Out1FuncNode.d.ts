import { Graph } from "../../Graphs/Graph.js";
import { ImmediateNode } from "../ImmediateNode.js";
import { NodeDescription } from "../Registry/NodeDescription.js";
export declare class In2Out1FuncNode<In1, In2, Out1> extends ImmediateNode {
    readonly evalFunc: (a: In1, b: In2) => Out1;
    readonly inputNames: string[];
    constructor(description: NodeDescription, graph: Graph, inputValueTypes: string[], outputValueType: string, evalFunc: (a: In1, b: In2) => Out1, inputNames?: string[]);
}
