import { GraphJSON } from '@behave-graph/core';
import React from 'react';
import { Examples } from './modals/LoadModal.js';
import { NodeSpecGenerator } from '../hooks/useNodeSpecGenerator.js';
export type CustomControlsProps = {
    playing: boolean;
    togglePlay: () => void;
    setBehaviorGraph: (value: GraphJSON) => void;
    examples: Examples;
    specGenerator: NodeSpecGenerator | undefined;
};
export declare const CustomControls: React.FC<CustomControlsProps>;
export default CustomControls;
