import { NodeSpecJSON } from 'packages/core/src/Graphs/IO/NodeSpecJSON';
import React, { PropsWithChildren } from 'react';
type NodeProps = {
    title: string;
    category?: NodeSpecJSON['category'];
};
export default function NodeContainer({ title, category, children }: PropsWithChildren<NodeProps>): React.JSX.Element;
export {};
