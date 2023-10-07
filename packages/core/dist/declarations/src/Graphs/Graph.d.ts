import { CustomEvent } from "../Events/CustomEvent.js";
import { Metadata } from "../Metadata.js";
import { Node, NodeConfiguration } from "../Nodes/Node.js";
import { Registry } from "../Registry.js";
import { Variable } from "../Variables/Variable.js";
export declare class Graph {
    readonly registry: Registry;
    name: string;
    readonly nodes: {
        [id: string]: Node;
    };
    readonly variables: {
        [id: string]: Variable;
    };
    readonly customEvents: {
        [id: string]: CustomEvent;
    };
    metadata: Metadata;
    version: number;
    constructor(registry: Registry);
    createNode(nodeTypeName: string, nodeId?: string, nodeConfiguration?: NodeConfiguration): Node;
}
