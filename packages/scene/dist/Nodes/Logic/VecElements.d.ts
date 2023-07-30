import { FunctionNode, IGraph, NodeDescription } from 'ee-behave-graph-core';
export declare class VecElements<T> extends FunctionNode {
    constructor(description: NodeDescription, graph: IGraph, valueTypeName: string, elementNames: string[] | undefined, toArray: (value: T, array: number[], offset: number) => void);
}
