import { OutputSocketSpecJSON } from '@behave-graph/core';
import React from 'react';
import { NodeSpecGenerator } from '../hooks/useNodeSpecGenerator.js';
export type OutputSocketProps = {
    connected: boolean;
    specGenerator: NodeSpecGenerator;
} & OutputSocketSpecJSON;
export default function OutputSocket({ specGenerator, connected, valueType, name }: OutputSocketProps): React.JSX.Element;
