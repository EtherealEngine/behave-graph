import React from 'react';
import { InputSocketSpecJSON } from 'packages/core/src/Graphs/IO/NodeSpecJSON';
export type InputSocketProps = {
    value: any | undefined;
    onChange: (key: string, value: any) => void;
} & InputSocketSpecJSON;
export default function InputSocket({ value, onChange, name, valueType, defaultValue }: InputSocketProps): React.JSX.Element;
