import { createNode, makeGraphApi } from '../Graph.js';
function toChoices(valueChoices) {
    return valueChoices?.map((choice) => {
        if (typeof choice === 'string')
            return { text: choice, value: choice };
        return choice;
    });
}
// create JSON specs for a single node based on given configuration
export function writeNodeSpecToJSON(registry, nodeTypeName, configuration) {
    const graph = makeGraphApi({
        ...registry,
        customEvents: {},
        variables: {}
    });
    const node = createNode({
        graph,
        registry,
        nodeTypeName,
        nodeConfiguration: configuration,
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
    return nodeSpecJSON;
}
// create JSON specs for all nodes with empty configuration
export function writeDefaultNodeSpecsToJSON(registry) {
    const nodeSpecsJSON = [];
    Object.keys(registry.nodes).forEach((nodeTypeName) => {
        nodeSpecsJSON.push(writeNodeSpecToJSON(registry, nodeTypeName, {}));
    });
    return nodeSpecsJSON;
}
//# sourceMappingURL=writeNodeSpecsToJSON.js.map