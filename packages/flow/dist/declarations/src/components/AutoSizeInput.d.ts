import { FC, HTMLProps } from "react";
export type AutoSizeInputProps = HTMLProps<HTMLInputElement> & {
    minWidth?: number;
};
export declare const AutoSizeInput: FC<AutoSizeInputProps>;
