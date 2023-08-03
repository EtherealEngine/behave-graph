import { NodeSpecJSON } from '@behave-graph/core';
import React from 'react';
export type SaveModalProps = {
    open?: boolean;
    onClose: () => void;
    specJson: NodeSpecJSON[];
};
export declare const SaveModal: React.FC<SaveModalProps>;
