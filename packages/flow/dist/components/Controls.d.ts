import { GraphJSON, NodeSpecJSON } from '@behave-graph/core';
import React from 'react';
import { Examples } from './modals/LoadModal.js';
export type CustomControlsProps = {
    playing: boolean;
    togglePlay: () => void;
    setBehaviorGraph: (value: GraphJSON) => void;
    examples: Examples;
    specJson: NodeSpecJSON[] | undefined;
};
export declare const CustomControls: React.FC<CustomControlsProps>;
export default CustomControls;
