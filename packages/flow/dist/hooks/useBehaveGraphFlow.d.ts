import { GraphJSON } from '@behave-graph/core';
import { NodeSpecGenerator } from './useNodeSpecGenerator.js';
export declare const fetchBehaviorGraphJson: (url: string) => Promise<GraphJSON>;
/**
 * Hook that returns the nodes and edges for react-flow, and the graphJson for the behave-graph.
 * If nodes or edges are changes, the graph json is updated automatically.
 * The graph json can be set manually, in which case the nodes and edges are updated to match the graph json.
 * @param param0
 * @returns
 */
export declare const useBehaveGraphFlow: ({ initialGraphJson, specGenerator }: {
    initialGraphJson: GraphJSON;
    specGenerator: NodeSpecGenerator | undefined;
}) => {
    nodes: import("reactflow").Node<any, string | undefined>[];
    edges: import("reactflow").Edge<any>[];
    onEdgesChange: (changes: import("reactflow").EdgeChange[]) => void;
    onNodesChange: (changes: import("reactflow").NodeChange[]) => void;
    setGraphJson: (graphJson: GraphJSON) => void;
    graphJson: GraphJSON | undefined;
    nodeTypes: import("reactflow").NodeTypes | undefined;
};
