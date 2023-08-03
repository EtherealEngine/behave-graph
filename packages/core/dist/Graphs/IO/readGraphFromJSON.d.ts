import { IRegistry } from '../../Registry.js';
import { GraphInstance } from '../Graph.js';
import { GraphJSON } from './GraphJSON.js';
export declare function readGraphFromJSON({ graphJson, registry }: {
    graphJson: GraphJSON;
    registry: IRegistry;
}): GraphInstance;
