export const VariableSet: import("../../../Nodes/NodeDefinitions.js").IFlowNodeDefinition<(configuration: import("../../../index.js").NodeConfiguration, graph: import("../../../index.js").IGraph) => ({
    key: string;
    valueType: string;
    label?: undefined;
} | {
    key: string;
    valueType: string;
    label: string;
})[], {
    flow: string;
}, {
    variableId: {
        valueType: string;
    };
}, undefined>;
