export function fetchBehaviorGraphJson(url: any): Promise<any>;
export function useBehaveGraphFlow({ initialGraphJson, specGenerator }: {
    initialGraphJson: any;
    specGenerator: any;
}): {
    nodes: import("reactflow").Node<any, string | undefined>[];
    edges: import("reactflow").Edge<any>[];
    onEdgesChange: (changes: import("reactflow").EdgeChange[]) => void;
    onNodesChange: (changes: import("reactflow").NodeChange[]) => void;
    setGraphJson: (graphJson: any) => void;
    graphJson: undefined;
    nodeTypes: import("reactflow").NodeTypes | undefined;
};
