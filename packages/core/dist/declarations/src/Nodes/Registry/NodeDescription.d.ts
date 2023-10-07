import { Graph } from "../../Graphs/Graph.js";
import { Node, NodeConfiguration } from "../Node.js";
import { NodeCategory } from "./NodeCategory.js";
export type NodeFactory = (entry: NodeDescription, graph: Graph, config: NodeConfiguration) => Node;
export type NodeConfigurationDescription = {
    [key: string]: {
        valueType: string;
        defaultValue?: any;
    };
};
export declare function getNodeDescriptions(importWildcard: any): NodeDescription[];
export declare class NodeDescription {
    readonly typeName: string;
    readonly category: NodeCategory;
    readonly label: string;
    readonly factory: NodeFactory;
    readonly otherTypeNames: string[];
    readonly helpDescription: string;
    readonly configuration: NodeConfigurationDescription;
    constructor(typeName: string, category: NodeCategory, label: string, factory: NodeFactory, otherTypeNames?: string[], helpDescription?: string, configuration?: NodeConfigurationDescription);
}
export declare class NodeDescription2 extends NodeDescription {
    properties: {
        typeName: string;
        category: NodeCategory;
        label?: string;
        configuration?: NodeConfigurationDescription;
        factory: NodeFactory;
        otherTypeNames?: string[];
        helpDescription?: string;
    };
    constructor(properties: {
        typeName: string;
        category: NodeCategory;
        label?: string;
        configuration?: NodeConfigurationDescription;
        factory: NodeFactory;
        otherTypeNames?: string[];
        helpDescription?: string;
    });
}
