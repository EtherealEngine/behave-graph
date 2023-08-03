import { NodeSpecJSON } from '@behave-graph/core';
import { NodeTypes } from 'reactflow';
export declare const useCustomNodeTypes: ({ specJson }: {
    specJson: NodeSpecJSON[] | undefined;
}) => NodeTypes | undefined;
