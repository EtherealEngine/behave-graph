import { NodeSpecJSON } from '@behave-graph/core';
import React from 'react';
import { NodeProps as FlowNodeProps } from 'reactflow';
type NodeProps = FlowNodeProps & {
    spec: NodeSpecJSON;
    allSpecs: NodeSpecJSON[];
};
export declare const Node: React.FC<NodeProps>;
export {};
