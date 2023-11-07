import { NodeSpecJSON } from '@behave-graph/core';
import React, { PropsWithChildren } from 'react';
type NodeProps = {
    title: string;
    category?: NodeSpecJSON['category'];
    selected: boolean;
};
declare const NodeContainer: React.FC<PropsWithChildren<NodeProps>>;
export default NodeContainer;
