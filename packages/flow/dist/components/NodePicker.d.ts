import { NodeSpecJSON } from '@behave-graph/core';
import React from 'react';
import { XYPosition } from 'reactflow';
export type NodePickerFilters = {
    handleType: 'source' | 'target';
    valueType: string;
};
type NodePickerProps = {
    position: XYPosition;
    filters?: NodePickerFilters;
    onPickNode: (type: string, position: XYPosition) => void;
    onClose: () => void;
    specJSON: NodeSpecJSON[] | undefined;
};
export declare const NodePicker: React.FC<NodePickerProps>;
export {};
