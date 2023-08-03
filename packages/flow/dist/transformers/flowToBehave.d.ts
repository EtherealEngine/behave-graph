import { GraphJSON, NodeSpecJSON } from '@behave-graph/core';
import { Edge, Node } from 'reactflow';
export declare const flowToBehave: (nodes: Node[], edges: Edge[], nodeSpecJSON: NodeSpecJSON[]) => GraphJSON;
