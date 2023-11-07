import React from 'react';
import { NodeSpecJSON } from 'packages/core/src/Graphs/IO/NodeSpecJSON';
type NodeProps = {
    spec: NodeSpecJSON;
};
declare const Node: ({ spec }: NodeProps) => React.JSX.Element;
export default Node;
