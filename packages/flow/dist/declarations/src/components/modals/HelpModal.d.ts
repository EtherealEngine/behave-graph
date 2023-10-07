import { FC } from "react";
export type HelpModalProps = {
    open?: boolean;
    onClose: () => void;
};
export declare const HelpModal: FC<HelpModalProps>;
