import { IGraph } from '../Graphs/Graph.js';
import { Socket } from '../Sockets/Socket.js';
import { INode, NodeType } from './NodeInstance.js';
import { INodeDescription } from './Registry/NodeDescription.js';
export type NodeConfiguration = {
    [key: string]: any;
};
export declare abstract class Node<TNodeType extends NodeType> implements INode {
    readonly inputs: Socket[];
    readonly outputs: Socket[];
    readonly description: INodeDescription;
    nodeType: TNodeType;
    readonly otherTypeNames: string[] | undefined;
    graph: IGraph;
    label?: string;
    metadata: any;
    readonly configuration: NodeConfiguration;
    constructor(node: Omit<INode, 'nodeType' | 'id'> & {
        nodeType: TNodeType;
    });
    readInput: <T>(inputName: string) => T;
    writeOutput: <T>(outputName: string, value: T) => void;
}
