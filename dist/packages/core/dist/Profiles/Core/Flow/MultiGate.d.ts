export const MultiGate: import("../../../Nodes/NodeDefinitions.js").IFlowNodeDefinition<{
    flow: string;
    reset: string;
    loop: string;
    startIndex: string;
}, {
    1: string;
    2: string;
    3: string;
}, import("../../../index.js").NodeConfigurationDescription, {
    isInitialized: boolean;
    nextIndex: number;
}>;
