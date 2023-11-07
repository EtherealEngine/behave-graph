import { FlowNode, Graph, ILogger, NodeDescription } from '@behave-graph/core';
export declare class LogObject extends FlowNode {
    private readonly logger;
    static Description: (logger: ILogger) => NodeDescription;
    constructor(description: NodeDescription, graph: Graph, logger: ILogger);
    triggered(fiber: any): void;
}
