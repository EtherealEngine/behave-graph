import { IRegistry, NodeDefinition, ValueType, ValueTypeMap } from '@behave-graph/core';
export declare const getSceneValuesMap: () => ValueTypeMap;
export declare const getSceneStringConversions: (values: Record<string, ValueType>) => NodeDefinition[];
export declare const getSceneNodesMap: () => Record<string, NodeDefinition>;
export declare const registerSceneProfile: (registry: IRegistry) => IRegistry;
