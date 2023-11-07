export function calculateNewEdge(originNode: any, destinationNodeType: any, destinationNodeId: any, connection: any, specGenerator: any): {
    id: string;
    source: any;
    sourceHandle: any;
    target: any;
    targetHandle: string | undefined;
} | {
    id: string;
    target: any;
    targetHandle: any;
    source: any;
    sourceHandle: string | undefined;
};
