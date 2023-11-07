import { NodeSpecJSON } from 'packages/core/src/Graphs/IO/NodeSpecJSON';
import { NodeDescription } from 'packages/core/src/Nodes/Registry/NodeDescription';
import { Socket } from 'packages/core/src/Sockets/Socket';
import React from 'react';
declare const NodePreview: ({ description, inputs, outputs, spec }: Props) => React.JSX.Element;
export type Props = {
    description: NodeDescription;
    inputs: Socket[];
    outputs: Socket[];
    spec: NodeSpecJSON;
};
export default NodePreview;
