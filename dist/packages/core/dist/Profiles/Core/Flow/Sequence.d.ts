export const Sequence: import("../../../Nodes/NodeDefinitions.js").IFlowNodeDefinition<{
    flow: string;
}, (configuration: import("../../../index.js").NodeConfiguration) => {
    key: string;
    valueType: string;
}[], {
    numOutputs: {
        valueType: string;
        defaultValue: number;
    };
}, undefined>;
