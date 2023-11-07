export const Log: import("../../../Nodes/NodeDefinitions.js").IFlowNodeDefinition<{
    flow: string;
    text: string;
    severity: {
        valueType: string;
        defaultValue: string;
        choices: string[];
        label: string;
    };
}, {
    flow: string;
}, import("../../../index.js").NodeConfigurationDescription, undefined>;
