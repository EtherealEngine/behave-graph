import { NodeSpecJSON } from '@behave-graph/core';
import React from 'react';
import { NodeProps as FlowNodeProps } from 'reactflow';
import { NodeSpecGenerator } from '../hooks/useNodeSpecGenerator.js';
type NodeProps = FlowNodeProps & {
    spec: NodeSpecJSON;
    specGenerator: NodeSpecGenerator;
};
export declare const Node: React.FC<NodeProps>;
export {};
