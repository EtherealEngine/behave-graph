import React from 'react';
import { NodeSpecGenerator } from '../../hooks/useNodeSpecGenerator.js';
export type SaveModalProps = {
    open?: boolean;
    onClose: () => void;
    specGenerator: NodeSpecGenerator;
};
export declare const SaveModal: React.FC<SaveModalProps>;
