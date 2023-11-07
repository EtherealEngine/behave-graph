export const Easing: import("../../../Nodes/NodeDefinitions.js").IFunctionNodeDefinition<{
    easingFunction: {
        valueType: string;
        name: string;
        defaultValue: string;
        options: string[];
    };
    easingMode: {
        valueType: string;
        name: string;
        defaultValue: string;
        options: string[];
    };
    t: string;
}, {
    t: string;
}, import("../../../index.js").NodeConfigurationDescription>;
