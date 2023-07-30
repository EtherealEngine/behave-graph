export declare const SetSceneProperty: (valueTypeNames: string[]) => import("ee-behave-graph-core").IFlowNodeDefinition<{
    jsonPath: (_: import("ee-behave-graph-core").NodeConfiguration, graphApi: import("ee-behave-graph-core").IGraph) => {
        valueType: string;
        choices: import("ee-behave-graph-core").Choices | undefined;
    };
    value: string;
    flow: string;
}, {
    flow: string;
}, import("ee-behave-graph-core").NodeConfigurationDescription, undefined>[];
