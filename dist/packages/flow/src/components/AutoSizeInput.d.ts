import React from 'react';
import { HTMLProps } from 'react';
export type AutoSizeInputProps = HTMLProps<HTMLInputElement> & {
    minWidth?: number;
};
export declare const AutoSizeInput: React.FC<AutoSizeInputProps>;
