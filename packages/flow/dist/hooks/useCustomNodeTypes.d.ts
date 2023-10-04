import { NodeTypes } from 'reactflow';
import { NodeSpecGenerator } from './useNodeSpecGenerator.js';
export declare const useCustomNodeTypes: ({ specGenerator }: {
    specGenerator: NodeSpecGenerator | undefined;
}) => NodeTypes | undefined;
