import { InputSocketSpecJSON, NodeSpecJSON } from '@behave-graph/core';
import React from 'react';
export type InputSocketProps = {
    connected: boolean;
    value: any | undefined;
    onChange: (key: string, value: any) => void;
    specJSON: NodeSpecJSON[];
} & InputSocketSpecJSON;
declare const InputSocket: React.FC<InputSocketProps>;
export default InputSocket;
