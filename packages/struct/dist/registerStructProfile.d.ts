import { IRegistry, NodeDefinition, ValueType, ValueTypeMap } from '@behave-graph/core';
export declare const getStructValuesMap: () => ValueTypeMap;
export declare const getStructStringConversions: (values: Record<string, ValueType>) => NodeDefinition[];
export declare const getStructNodesMap: () => Record<string, NodeDefinition>;
export declare const registerStructProfile: (registry: IRegistry) => IRegistry;
