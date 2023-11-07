export const OnSceneNodeClick: import("@behave-graph/core").IEventNodeDefinition<{
    jsonPath: (_: import("@behave-graph/core").NodeConfiguration, graphApi: import("@behave-graph/core").IGraph) => {
        valueType: string;
        choices: any;
    };
}, {
    flow: string;
}, import("@behave-graph/core").NodeConfigurationDescription, {}>;
