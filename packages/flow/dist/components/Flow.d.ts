import { GraphJSON, IRegistry } from '@behave-graph/core';
import React from 'react';
import { Examples } from './modals/LoadModal.js';
type FlowProps = {
    initialGraph: GraphJSON;
    registry: IRegistry;
    examples: Examples;
};
export declare const Flow: React.FC<FlowProps>;
export {};
