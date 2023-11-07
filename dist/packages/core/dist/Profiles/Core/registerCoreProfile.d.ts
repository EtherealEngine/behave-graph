export const getCoreValuesMap: () => {
    [k: string]: import("../../index.js").ValueType<any, any>;
};
export const getCoreNodesMap: () => {
    [k: string]: import("../../index.js").INodeDefinition<import("../../index.js").SocketsDefinition, import("../../index.js").SocketsDefinition, import("../../Nodes/Registry/NodeDescription.js").NodeConfigurationDescription> | import("../../index.js").IFunctionNodeDefinition<{}, (configuration: import("../../index.js").NodeConfiguration, graph: import("../../index.js").IGraph) => import("../../index.js").SocketsList, import("../../Nodes/Registry/NodeDescription.js").NodeConfigurationDescription> | import("../../index.js").IFlowNodeDefinition<(configuration: import("../../index.js").NodeConfiguration, graph: import("../../index.js").IGraph) => import("../../index.js").SocketsList, {
        flow: string;
    }, {
        variableId: {
            valueType: string;
        };
    }, undefined> | import("../../index.js").IFunctionNodeDefinition<{
        easingFunction: {
            valueType: string;
            name: string;
            defaultValue: string;
            options: string[];
        };
        easingMode: {
            valueType: string;
            name: string;
            defaultValue: string;
            options: string[];
        };
        t: string;
    }, {
        t: string;
    }, import("../../Nodes/Registry/NodeDescription.js").NodeConfigurationDescription> | import("../../index.js").IFlowNodeDefinition<{
        flow: string;
        text: string;
        severity: {
            valueType: string;
            defaultValue: string;
            choices: string[];
            label: string;
        };
    }, {
        flow: string;
    }, import("../../Nodes/Registry/NodeDescription.js").NodeConfigurationDescription, undefined> | import("../../index.js").IFlowNodeDefinition<() => {
        key: string;
        valueType: string;
    }[], {
        flow: string;
    }, import("../../Nodes/Registry/NodeDescription.js").NodeConfigurationDescription, undefined> | import("../../index.js").IEventNodeDefinition<{}, {
        flow: string;
    }, import("../../Nodes/Registry/NodeDescription.js").NodeConfigurationDescription, {
        onStartEvent?: (() => void) | undefined;
    }> | import("../../index.js").IEventNodeDefinition<{}, {
        flow: string;
    }, import("../../Nodes/Registry/NodeDescription.js").NodeConfigurationDescription, {
        onEndEvent?: (() => void) | undefined;
    }> | import("../../index.js").IEventNodeDefinition<{}, {
        flow: string;
        deltaSeconds: string;
    }, import("../../Nodes/Registry/NodeDescription.js").NodeConfigurationDescription, {
        onTickEvent?: (() => void) | undefined;
    }> | import("../../index.js").IFlowNodeDefinition<{
        flow: string;
        condition: string;
    }, {
        true: string;
        false: string;
    }, import("../../Nodes/Registry/NodeDescription.js").NodeConfigurationDescription, undefined> | import("../../index.js").IFlowNodeDefinition<{
        flow: string;
    }, {
        on: string;
        off: string;
        isOn: string;
    }, import("../../Nodes/Registry/NodeDescription.js").NodeConfigurationDescription, {
        isOn: boolean;
    }> | import("../../index.js").IFlowNodeDefinition<{
        flow: string;
        startIndex: string;
        endIndex: string;
    }, {
        loopBody: string;
        index: string;
        completed: string;
    }, import("../../Nodes/Registry/NodeDescription.js").NodeConfigurationDescription, undefined> | import("../../index.js").IFlowNodeDefinition<{
        flow: string;
    }, (configuration: import("../../index.js").NodeConfiguration) => import("../../index.js").SocketsList, {
        numOutputs: {
            valueType: string;
            defaultValue: number;
        };
    }, undefined> | import("../../index.js").IFlowNodeDefinition<(configuration: import("../../index.js").NodeConfiguration) => import("../../index.js").SocketsList, (configuration: import("../../index.js").NodeConfiguration) => import("../../index.js").SocketsList, {
        numCases: {
            valueType: string;
        };
    }, undefined> | import("../../Nodes/Registry/NodeDescription.js").NodeDescription | import("../../index.js").IFlowNodeDefinition<{
        flow: string;
        reset: string;
    }, {
        flow: string;
    }, import("../../Nodes/Registry/NodeDescription.js").NodeConfigurationDescription, {
        firedOnce: boolean;
    }> | import("../../index.js").IFlowNodeDefinition<{
        flow: string;
        open: string;
        close: string;
        toggle: string;
        startClosed: string;
    }, {
        flow: string;
    }, import("../../Nodes/Registry/NodeDescription.js").NodeConfigurationDescription, {
        isInitialized: boolean;
        isClosed: boolean;
    }> | import("../../index.js").IFlowNodeDefinition<{
        flow: string;
        reset: string;
        loop: string;
        startIndex: string;
    }, {
        1: string;
        2: string;
        3: string;
    }, import("../../Nodes/Registry/NodeDescription.js").NodeConfigurationDescription, {
        isInitialized: boolean;
        nextIndex: number;
    }> | import("../../index.js").IFlowNodeDefinition<{
        flow: string;
        reset: string;
    }, {
        flow: string;
        count: string;
    }, import("../../Nodes/Registry/NodeDescription.js").NodeConfigurationDescription, {
        count: number;
    }>;
};
export function registerCoreProfile(registry: any): {
    values: any;
    nodes: any;
    dependencies: any;
};
