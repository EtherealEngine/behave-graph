import { GraphJSON } from '@behave-graph/core';
import React from 'react';
export type Examples = {
    [key: string]: GraphJSON;
};
export type LoadModalProps = {
    open?: boolean;
    onClose: () => void;
    setBehaviorGraph: (value: GraphJSON) => void;
    examples: Examples;
};
export declare const LoadModal: React.FC<LoadModalProps>;
