export declare const GetSceneProperty: (valueTypeNames: string[]) => import("@behave-graph/core").IFunctionNodeDefinition<{
    jsonPath: (_: import("@behave-graph/core").NodeConfiguration, graphApi: import("@behave-graph/core").IGraph) => {
        valueType: string;
        choices: import("@behave-graph/core").Choices | undefined;
    };
}, {
    value: string;
}, import("@behave-graph/core").NodeConfigurationDescription>[];
