import { IRegistry } from '../../Registry.js';
import { NodeConfigurationJSON, VariableJSON } from './GraphJSON.js';
import { NodeSpecJSON } from './NodeSpecJSON.js';
export declare function writeNodeSpecToJSON(registry: IRegistry, nodeTypeName: string, configuration: NodeConfigurationJSON, variableJson?: VariableJSON[]): NodeSpecJSON;
export declare function writeDefaultNodeSpecsToJSON(registry: IRegistry): NodeSpecJSON[];
