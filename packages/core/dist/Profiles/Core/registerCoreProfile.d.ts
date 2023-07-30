import { NodeDefinition } from '../../Nodes/Registry/NodeDefinitionsMap.js';
import { IRegistry } from '../../Registry.js';
import { ValueTypeMap } from '../../Values/ValueTypeMap.js';
export declare const getCoreValuesMap: () => ValueTypeMap;
export declare const getCoreNodesMap: () => Record<string, NodeDefinition>;
export declare const registerCoreProfile: (registry: IRegistry) => IRegistry;
