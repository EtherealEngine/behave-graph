import { InputSocketSpecJSON } from "@behave-graph/core";
export type InputSocketProps = {
    connected: boolean;
    value: any | undefined;
    onChange: (key: string, value: any) => void;
} & InputSocketSpecJSON;
export default function InputSocket({ connected, value, onChange, name, valueType, defaultValue, }: InputSocketProps): import("react/jsx-runtime").JSX.Element;
