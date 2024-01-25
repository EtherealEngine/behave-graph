import { INode } from '../../Nodes/NodeInstance.js';
import { IRegistry } from '../../Registry.js';
import { ValueTypeMap } from '../../Values/ValueTypeMap.js';
import { GraphCustomEvents, GraphInstance, GraphVariables, IGraph } from '../Graph.js';
import { CustomEventJSON, FlowsJSON, GraphJSON, NodeJSON, NodeParametersJSON, VariableJSON } from './GraphJSON.js';
export declare function readGraphFromJSON({ graphJson, registry }: {
    graphJson: GraphJSON;
    registry: IRegistry;
}): GraphInstance;
export declare function readNodeJSON({ graph, registry, nodeJson }: {
    graph: IGraph;
    registry: IRegistry;
    nodeJson: NodeJSON;
}): INode;
export declare function readNodeParameterJSON(valuesRegistry: ValueTypeMap, node: INode, parametersJson: NodeParametersJSON): void;
export declare function readNodeFlowsJSON(node: INode, flowsJson: FlowsJSON): void;
export declare function readVariablesJSON(valuesRegistry: ValueTypeMap, variablesJson: VariableJSON[]): GraphVariables;
export declare function readCustomEventsJSON(valuesRegistry: ValueTypeMap, customEventsJson: CustomEventJSON[]): GraphCustomEvents;
