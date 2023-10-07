import { InputSocketSpecJSON } from '@behave-graph/core';
import React from 'react';
import { NodeSpecGenerator } from '../hooks/useNodeSpecGenerator.js';
export type InputSocketProps = {
    connected: boolean;
    value: any | undefined;
    onChange: (key: string, value: any) => void;
    specGenerator: NodeSpecGenerator;
} & InputSocketSpecJSON;
declare const InputSocket: React.FC<InputSocketProps>;
export default InputSocket;
