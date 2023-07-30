type State = {
    jsonPath?: string | undefined;
    handleNodeClick?: ((jsonPath: string) => void) | undefined;
};
export declare const OnSceneNodeClick: import("ee-behave-graph-core").IEventNodeDefinition<{
    jsonPath: (_: import("ee-behave-graph-core").NodeConfiguration, graphApi: import("ee-behave-graph-core").IGraph) => {
        valueType: string;
        choices: import("ee-behave-graph-core").Choices | undefined;
    };
}, {
    flow: string;
}, import("ee-behave-graph-core").NodeConfigurationDescription, State>;
export {};
