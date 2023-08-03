import { CustomEvent } from '../Events/CustomEvent.js';
import { Metadata } from '../Metadata.js';
import { NodeConfiguration } from '../Nodes/Node.js';
import { Dependencies } from '../Nodes/NodeDefinitions.js';
import { INode } from '../Nodes/NodeInstance.js';
import { IRegistry } from '../Registry.js';
import { ValueTypeMap } from '../Values/ValueTypeMap.js';
import { Variable } from '../Values/Variables/Variable.js';
export interface IGraph {
    readonly variables: {
        [id: string]: Variable;
    };
    readonly customEvents: {
        [id: string]: CustomEvent;
    };
    readonly values: ValueTypeMap;
    readonly getDependency: <T>(id: string) => T | undefined;
}
export type GraphNodes = {
    [id: string]: INode;
};
export type GraphVariables = {
    [id: string]: Variable;
};
export type GraphCustomEvents = {
    [id: string]: CustomEvent;
};
export type GraphInstance = {
    name: string;
    metadata: Metadata;
    nodes: GraphNodes;
    customEvents: GraphCustomEvents;
    variables: GraphVariables;
};
export declare const createNode: ({ graph, registry, nodeTypeName, nodeConfiguration }: {
    graph: IGraph;
    registry: IRegistry;
    nodeTypeName: string;
    nodeConfiguration?: NodeConfiguration | undefined;
}) => INode;
export declare const makeGraphApi: ({ variables, customEvents, values, dependencies }: {
    customEvents?: GraphCustomEvents | undefined;
    variables?: GraphVariables | undefined;
    values: ValueTypeMap;
    dependencies: Dependencies;
}) => IGraph;
