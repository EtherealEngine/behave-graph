import { GraphJSON } from '@behave-graph/core';
import React from 'react';
import { NodeSpecGenerator } from '../hooks/useNodeSpecGenerator.js';
import { Examples } from './modals/LoadModal.js';
export type CustomControlsProps = {
    playing: boolean;
    togglePlay: () => void;
    setBehaviorGraph: (value: GraphJSON) => void;
    examples: Examples;
    specGenerator: NodeSpecGenerator | undefined;
};
export declare const CustomControls: React.FC<CustomControlsProps>;
export default CustomControls;
