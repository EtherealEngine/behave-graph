import { createNode, makeGraphApi } from '../Graph.js';
function toChoices(valueChoices) {
    return valueChoices?.map((choice) => {
        if (typeof choice === 'string')
            return { text: choice, value: choice };
        return choice;
    });
}
export function writeNodeSpecsToJSON(registry) {
    const nodeSpecsJSON = [];
    // const graph = new Graph(registry);
    const graph = makeGraphApi({
        ...registry,
        customEvents: {},
        variables: {}
    });
    Object.keys(registry.nodes).forEach((nodeTypeName) => {
        const node = createNode({
            graph,
            registry,
            nodeTypeName
        });
        const nodeSpecJSON = {
            type: nodeTypeName,
            category: node.description.category,
            label: node.description.label,
            inputs: [],
            outputs: [],
            configuration: []
        };
        node.inputs.forEach((inputSocket) => {
            const valueType = inputSocket.valueTypeName === 'flow'
                ? undefined
                : registry.values[inputSocket.valueTypeName];
            let defaultValue = inputSocket.value;
            if (valueType !== undefined) {
                defaultValue = valueType.serialize(defaultValue);
            }
            if (defaultValue === undefined && valueType !== undefined) {
                defaultValue = valueType.serialize(valueType.creator());
            }
            const socketSpecJSON = {
                name: inputSocket.name,
                valueType: inputSocket.valueTypeName,
                defaultValue,
                choices: toChoices(inputSocket.valueChoices)
            };
            nodeSpecJSON.inputs.push(socketSpecJSON);
        });
        node.outputs.forEach((outputSocket) => {
            const socketSpecJSON = {
                name: outputSocket.name,
                valueType: outputSocket.valueTypeName
            };
            nodeSpecJSON.outputs.push(socketSpecJSON);
        });
        nodeSpecsJSON.push(nodeSpecJSON);
    });
    return nodeSpecsJSON;
}
//# sourceMappingURL=writeNodeSpecsToJSON.js.map