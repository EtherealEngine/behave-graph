import { NodeSpecJSON, OutputSocketSpecJSON } from '@behave-graph/core';
export type OutputSocketProps = {
    connected: boolean;
    specJSON: NodeSpecJSON[];
} & OutputSocketSpecJSON;
export default function OutputSocket({ specJSON, connected, valueType, name }: OutputSocketProps): import("react/jsx-runtime").JSX.Element;
