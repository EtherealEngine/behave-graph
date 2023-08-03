import { NodeSpecJSON } from '@behave-graph/core';
import { Node, OnConnectStartParams } from 'reactflow';
export declare const calculateNewEdge: (originNode: Node, destinationNodeType: string, destinationNodeId: string, connection: OnConnectStartParams, specJSON: NodeSpecJSON[]) => {
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
