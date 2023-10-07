import { OutputSocketSpecJSON } from "@behave-graph/core";
export type OutputSocketProps = {
    connected: boolean;
} & OutputSocketSpecJSON;
export default function OutputSocket({ connected, valueType, name, }: OutputSocketProps): import("react/jsx-runtime").JSX.Element;
