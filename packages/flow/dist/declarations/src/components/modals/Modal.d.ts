import { FC, PropsWithChildren } from 'react';
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
export declare const Modal: FC<PropsWithChildren<ModalProps>>;
