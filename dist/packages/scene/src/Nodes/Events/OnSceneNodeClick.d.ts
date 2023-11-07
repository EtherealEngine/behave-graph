type State = {
    jsonPath?: string | undefined;
    handleNodeClick?: ((jsonPath: string) => void) | undefined;
};
export declare const OnSceneNodeClick: import("@behave-graph/core").IEventNodeDefinition<{
    jsonPath: (_: import("@behave-graph/core").NodeConfiguration, graphApi: import("@behave-graph/core").IGraph) => {
        valueType: string;
        choices: import("@behave-graph/core").Choices | undefined;
    };
}, {
    flow: string;
}, import("@behave-graph/core").NodeConfigurationDescription, State>;
export {};
