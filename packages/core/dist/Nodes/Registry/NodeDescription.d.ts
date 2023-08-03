import { IGraph } from '../../Graphs/Graph.js';
import { IHasNodeFactory, INodeDefinition, NodeFactory } from '../NodeDefinitions.js';
import { INode } from '../NodeInstance.js';
import { NodeConfiguration } from './../Node.js';
import { NodeCategory } from './NodeCategory.js';
export type NodeConfigurationDescription = {
    [key: string]: {
        valueType: string;
        defaultValue?: any;
    };
};
export declare function getNodeDescriptions(importWildcard: {
    [key: string]: INodeDefinition;
}): INodeDefinition[];
export interface INodeDescription {
    readonly typeName: string;
    readonly category: NodeCategory | string;
    readonly label: string;
    readonly otherTypeNames: string[];
    readonly helpDescription: string;
    readonly configuration: NodeConfigurationDescription;
}
export type NodeFactoryWithDescription = (entry: NodeDescription, graph: IGraph, config: NodeConfiguration) => INode;
export declare class NodeDescription implements INodeDescription, IHasNodeFactory {
    readonly typeName: string;
    readonly category: NodeCategory | string;
    readonly label: string;
    readonly otherTypeNames: string[];
    readonly helpDescription: string;
    readonly configuration: NodeConfigurationDescription;
    nodeFactory: NodeFactory;
    constructor(typeName: string, category: NodeCategory | string, label: string, factory: NodeFactoryWithDescription, otherTypeNames?: string[], helpDescription?: string, configuration?: NodeConfigurationDescription);
}
export declare class NodeDescription2 extends NodeDescription {
    properties: {
        typeName: string;
        category: NodeCategory | string;
        label?: string;
        configuration?: NodeConfigurationDescription;
        factory: NodeFactoryWithDescription;
        otherTypeNames?: string[];
        helpDescription?: string;
    };
    constructor(properties: {
        typeName: string;
        category: NodeCategory | string;
        label?: string;
        configuration?: NodeConfigurationDescription;
        factory: NodeFactoryWithDescription;
        otherTypeNames?: string[];
        helpDescription?: string;
    });
}
