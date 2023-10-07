import { FC } from "react";
export type ClearModalProps = {
    open?: boolean;
    onClose: () => void;
};
export declare const ClearModal: FC<ClearModalProps>;
