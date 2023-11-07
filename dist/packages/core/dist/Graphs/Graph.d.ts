export function createNode({ graph, registry, nodeTypeName, nodeConfiguration }: {
    graph: any;
    registry: any;
    nodeTypeName: any;
    nodeConfiguration?: {} | undefined;
}): any;
export function makeGraphApi({ variables, customEvents, values, dependencies }: {
    variables?: {} | undefined;
    customEvents?: {} | undefined;
    values: any;
    dependencies?: {} | undefined;
}): {
    variables: {};
    customEvents: {};
    values: any;
    getDependency: (id: any) => any;
};
