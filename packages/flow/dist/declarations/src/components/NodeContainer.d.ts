import { NodeSpecJSON } from "@behave-graph/core";
import { PropsWithChildren } from "react";
type NodeProps = {
    title: string;
    category?: NodeSpecJSON["category"];
    selected: boolean;
};
export default function NodeContainer({ title, category, selected, children }: PropsWithChildren<NodeProps>): import("react/jsx-runtime").JSX.Element;
export {};
