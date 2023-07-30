import { IGraph } from '../Graphs/Graph.js';
import { Socket } from '../Sockets/Socket.js';
import { NodeConfiguration } from './Node.js';
import { INodeDefinition, SocketsDefinition } from './NodeDefinitions.js';
import { INode, NodeType } from './NodeInstance.js';
export declare function makeOrGenerateSockets(socketConfigOrFactory: SocketsDefinition, nodeConfig: NodeConfiguration, graph: IGraph): Socket[];
export declare const makeCommonProps: (nodeType: NodeType, { typeName, in: inputs, out, otherTypeNames, category, configuration: nodeDefinitionConfiguration, helpDescription, label }: Pick<INodeDefinition, 'typeName' | 'in' | 'out' | 'otherTypeNames' | 'category' | 'configuration' | 'helpDescription' | 'label'>, configuration: NodeConfiguration, graph: IGraph) => INode;
