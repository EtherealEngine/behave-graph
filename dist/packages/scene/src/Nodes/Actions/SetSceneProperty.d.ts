export declare const SetSceneProperty: (valueTypeNames: string[]) => import("@behave-graph/core").IFlowNodeDefinition<{
    jsonPath: (_: import("@behave-graph/core").NodeConfiguration, graphApi: import("@behave-graph/core").IGraph) => {
        valueType: string;
        choices: import("@behave-graph/core").Choices | undefined;
    };
    value: string;
    flow: string;
}, {
    flow: string;
}, import("@behave-graph/core").NodeConfigurationDescription, undefined>[];
