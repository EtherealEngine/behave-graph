import { FC } from "react";
export type LoadModalProps = {
    open?: boolean;
    onClose: () => void;
};
export declare const LoadModal: FC<LoadModalProps>;
