import React from 'react';
import { PropsWithChildren } from 'react';
export type ModalAction = {
    label: string;
    onClick: () => void;
};
export type ModalProps = {
    open?: boolean;
    onClose: () => void;
    title: string;
    actions: ModalAction[];
};
export declare const Modal: React.FC<PropsWithChildren<ModalProps>>;
