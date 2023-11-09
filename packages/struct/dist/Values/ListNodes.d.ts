import { SocketsList } from '@behave-graph/core';
export declare const Constant: import("@behave-graph/core").IFunctionNodeDefinition<() => SocketsList, () => SocketsList, import("@behave-graph/core").NodeConfigurationDescription>;
export declare const Equal: import("@behave-graph/core").IFunctionNodeDefinition<() => SocketsList, () => SocketsList, import("@behave-graph/core").NodeConfigurationDescription>;
export declare const Concat: import("@behave-graph/core").IFunctionNodeDefinition<(_: import("@behave-graph/core").NodeConfiguration) => SocketsList, {
    result: string;
}, import("@behave-graph/core").NodeConfigurationDescription>;
export declare const ListLoop: import("@behave-graph/core").IFlowNodeDefinition<{
    flow: string;
    list: string;
    startIndex: string;
    endIndex: string;
}, {
    loopBody: string;
    index: string;
    value: string;
    completed: string;
}, import("@behave-graph/core").NodeConfigurationDescription, undefined>;
export declare const getIndex: import("@behave-graph/core").IFunctionNodeDefinition<{
    list: string;
    index: string;
}, {
    index: string;
    value: string;
}, import("@behave-graph/core").NodeConfigurationDescription>;
export declare const getLength: import("@behave-graph/core").IFunctionNodeDefinition<{
    list: string;
}, {
    length: string;
}, import("@behave-graph/core").NodeConfigurationDescription>;
