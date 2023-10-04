import { IRegistry } from '../../Registry.js';
import { NodeConfigurationJSON } from './GraphJSON.js';
import { NodeSpecJSON } from './NodeSpecJSON.js';
export declare function writeNodeSpecToJSON(registry: IRegistry, nodeTypeName: string, configuration: NodeConfigurationJSON): NodeSpecJSON;
export declare function writeDefaultNodeSpecsToJSON(registry: IRegistry): NodeSpecJSON[];
