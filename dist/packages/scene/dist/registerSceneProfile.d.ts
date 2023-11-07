export const getSceneValuesMap: () => {
    [k: string]: import("@behave-graph/core").ValueType<any, any>;
};
export function getSceneStringConversions(values: any): import("@behave-graph/core").IFunctionNodeDefinition<() => import("@behave-graph/core").SocketsList, () => import("@behave-graph/core").SocketsList, import("@behave-graph/core").NodeConfigurationDescription>[];
export const getSceneNodesMap: () => {
    [k: string]: import("@behave-graph/core").INodeDefinition<import("@behave-graph/core").SocketsDefinition, import("@behave-graph/core").SocketsDefinition, import("@behave-graph/core").NodeConfigurationDescription> | import("@behave-graph/core").IEventNodeDefinition<{
        jsonPath: (_: import("@behave-graph/core").NodeConfiguration, graphApi: import("@behave-graph/core").IGraph) => {
            valueType: string;
            choices: import("@behave-graph/core").Choices | undefined;
        };
    }, {
        flow: string;
    }, import("@behave-graph/core").NodeConfigurationDescription, {
        jsonPath?: string | undefined;
        handleNodeClick?: ((jsonPath: string) => void) | undefined;
    }> | import("@behave-graph/core").IFlowNodeDefinition<{
        jsonPath: (_: import("@behave-graph/core").NodeConfiguration, graphApi: import("@behave-graph/core").IGraph) => {
            valueType: string;
            choices: import("@behave-graph/core").Choices | undefined;
        };
        value: string;
        flow: string;
    }, {
        flow: string;
    }, import("@behave-graph/core").NodeConfigurationDescription, undefined> | import("@behave-graph/core").IFunctionNodeDefinition<{
        jsonPath: (_: import("@behave-graph/core").NodeConfiguration, graphApi: import("@behave-graph/core").IGraph) => {
            valueType: string;
            choices: import("@behave-graph/core").Choices | undefined;
        };
    }, {
        value: string;
    }, import("@behave-graph/core").NodeConfigurationDescription>;
};
export function registerSceneProfile(registry: any): {
    values: any;
    nodes: any;
    dependencies: any;
};
