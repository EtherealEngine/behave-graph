import { GraphJSON } from '@behave-graph/core';
import { Edge, Node } from 'reactflow';
import { NodeSpecGenerator } from '../hooks/useNodeSpecGenerator.js';
export declare const flowToBehave: (nodes: Node[], edges: Edge[], specGenerator: NodeSpecGenerator) => GraphJSON;
