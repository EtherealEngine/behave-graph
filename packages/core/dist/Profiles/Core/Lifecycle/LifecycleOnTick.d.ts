type State = {
    onTickEvent?: (() => void) | undefined;
};
export declare const LifecycleOnTick: import("../../../Nodes/NodeDefinitions.js").IEventNodeDefinition<{}, {
    flow: string;
    deltaSeconds: string;
}, import("../../../index.js").NodeConfigurationDescription, State>;
export {};
