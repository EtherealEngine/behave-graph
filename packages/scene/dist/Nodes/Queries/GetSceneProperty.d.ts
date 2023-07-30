export declare const GetSceneProperty: (valueTypeNames: string[]) => import("ee-behave-graph-core").IFunctionNodeDefinition<{
    jsonPath: (_: import("ee-behave-graph-core").NodeConfiguration, graphApi: import("ee-behave-graph-core").IGraph) => {
        valueType: string;
        choices: import("ee-behave-graph-core").Choices | undefined;
    };
}, {
    value: string;
}, import("ee-behave-graph-core").NodeConfigurationDescription>[];
