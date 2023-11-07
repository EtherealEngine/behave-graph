export const DoN: import("../../../Nodes/NodeDefinitions.js").IFlowNodeDefinition<{
    flow: string;
    n: {
        valueType: string;
        defaultValue: number;
    };
    reset: string;
}, {
    flow: string;
    count: string;
}, import("../../../index.js").NodeConfigurationDescription, {
    count: number;
}>;
