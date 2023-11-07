import { Node, OnConnectStartParams } from 'reactflow';
import { NodeSpecGenerator } from '../hooks/useNodeSpecGenerator.js';
export declare const calculateNewEdge: (originNode: Node, destinationNodeType: string, destinationNodeId: string, connection: OnConnectStartParams, specGenerator: NodeSpecGenerator) => {
    id: string;
    source: string;
    sourceHandle: string | null;
    target: string;
    targetHandle: string | undefined;
} | {
    id: string;
    target: string;
    targetHandle: string | null;
    source: string;
    sourceHandle: string | undefined;
};
