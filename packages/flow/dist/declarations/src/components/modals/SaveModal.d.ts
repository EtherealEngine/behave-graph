import { FC } from "react";
export type SaveModalProps = {
    open?: boolean;
    onClose: () => void;
};
export declare const SaveModal: FC<SaveModalProps>;
