type State = {
    onStartEvent?: (() => void) | undefined;
};
export declare const LifecycleOnStart: import("../../../Nodes/NodeDefinitions.js").IEventNodeDefinition<{}, {
    flow: string;
}, import("../../../index.js").NodeConfigurationDescription, State>;
export {};
