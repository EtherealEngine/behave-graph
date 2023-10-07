import { Graph } from "../../../Graphs/Graph.js";
import { ImmediateNode } from "../../../Nodes/ImmediateNode.js";
import { NodeDescription } from "../../../Nodes/Registry/NodeDescription.js";
export declare class VecElements<T> extends ImmediateNode {
    constructor(description: NodeDescription, graph: Graph, valueTypeName: string, elementNames: string[] | undefined, toArray: (value: T, array: number[], offset: number) => void);
}
