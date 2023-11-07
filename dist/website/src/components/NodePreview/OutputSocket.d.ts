import React from 'react';
import { OutputSocketSpecJSON } from 'packages/core/src/Graphs/IO/NodeSpecJSON';
export type OutputSocketProps = OutputSocketSpecJSON;
export default function OutputSocket({ valueType, name }: OutputSocketProps): React.JSX.Element;
