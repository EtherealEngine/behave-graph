export function readGraphFromJSON({ graphJson, registry }: {
    graphJson: any;
    registry: any;
}): {
    name: any;
    metadata: any;
    nodes: {};
    customEvents: {};
    variables: {};
};
