import { Logger } from '../index.js';
export const createNode = ({ graph, registry, nodeTypeName, nodeConfiguration = {} }) => {
    let nodeDefinition = undefined;
    if (registry.nodes[nodeTypeName]) {
        nodeDefinition = registry.nodes[nodeTypeName];
    }
    if (nodeDefinition === undefined) {
        Logger.verbose('known nodes: ' + Object.keys(registry.nodes).join(', '));
        throw new Error(`no registered node descriptions with the typeName ${nodeTypeName}`);
    }
    const node = nodeDefinition.nodeFactory(graph, nodeConfiguration);
    node.inputs.forEach((socket) => {
        if (socket.valueTypeName !== 'flow' && socket.value === undefined) {
            socket.value = registry.values[socket.valueTypeName]?.creator();
        }
    });
    return node;
};
export const makeGraphApi = ({ variables = {}, customEvents = {}, values, dependencies = {} }) => ({
    variables,
    customEvents,
    values,
    getDependency: (id) => {
        const result = dependencies[id];
        if (!result)
            console.error(`Dependency not found ${id}.  Did you register it? Existing dependencies: ${Object.keys(dependencies)}`);
        return result;
    }
});
//# sourceMappingURL=Graph.js.map
//# sourceMappingURL=Graph.js.map