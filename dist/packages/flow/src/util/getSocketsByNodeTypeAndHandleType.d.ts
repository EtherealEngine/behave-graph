import { NodeConfigurationJSON } from '@behave-graph/core';
import { NodeSpecGenerator } from '../hooks/useNodeSpecGenerator.js';
export declare const getSocketsByNodeTypeAndHandleType: (specGenerator: NodeSpecGenerator, nodeType: string | undefined, nodeConfiguration: NodeConfigurationJSON, handleType: 'source' | 'target' | null) => import("@behave-graph/core").OutputSocketSpecJSON[];
