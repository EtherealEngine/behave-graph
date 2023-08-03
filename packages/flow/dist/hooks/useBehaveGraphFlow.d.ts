import { GraphJSON, NodeSpecJSON } from '@behave-graph/core';
export declare const fetchBehaviorGraphJson: (url: string) => Promise<GraphJSON>;
/**
 * Hook that returns the nodes and edges for react-flow, and the graphJson for the behave-graph.
 * If nodes or edges are changes, the graph json is updated automatically.
 * The graph json can be set manually, in which case the nodes and edges are updated to match the graph json.
 * @param param0
 * @returns
 */
export declare const useBehaveGraphFlow: ({ initialGraphJson, specJson }: {
    initialGraphJson: GraphJSON;
    specJson: NodeSpecJSON[] | undefined;
}) => {
    nodes: import("reactflow").Node<any, string | undefined>[];
    edges: import("reactflow").Edge<any>[];
    onEdgesChange: (changes: import("reactflow").EdgeChange[]) => void;
    onNodesChange: (changes: import("reactflow").NodeChange[]) => void;
    setGraphJson: (graphJson: GraphJSON) => void;
    graphJson: GraphJSON | undefined;
    nodeTypes: import("reactflow").NodeTypes | undefined;
};
