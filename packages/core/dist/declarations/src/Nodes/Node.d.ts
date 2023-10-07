import { Graph } from "../Graphs/Graph.js";
import { Metadata } from "../Metadata.js";
import { Socket } from "../Sockets/Socket.js";
import { NodeDescription } from "./Registry/NodeDescription.js";
export type NodeConfiguration = {
    [key: string]: any;
};
export declare class Node {
    readonly description: NodeDescription;
    readonly graph: Graph;
    readonly inputs: Socket[];
    readonly outputs: Socket[];
    readonly configuration: NodeConfiguration;
    id: string;
    label: string;
    metadata: Metadata;
    constructor(description: NodeDescription, graph: Graph, inputs?: Socket[], outputs?: Socket[], configuration?: NodeConfiguration);
    readInput<T>(inputName: string): T;
    writeOutput<T>(outputName: string, value: T): void;
}
