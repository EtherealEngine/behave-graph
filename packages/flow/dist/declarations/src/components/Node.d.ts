import { NodeProps as FlowNodeProps } from "reactflow";
import { NodeSpecJSON } from "@behave-graph/core";
type NodeProps = FlowNodeProps & {
    spec: NodeSpecJSON;
};
export declare const Node: ({ id, data, spec, selected }: NodeProps) => import("react/jsx-runtime").JSX.Element;
export {};
