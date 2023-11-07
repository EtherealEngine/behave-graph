import { FlowNode, IGraph, ILogger, NodeDescription } from '@behave-graph/core';
export declare class LogObject extends FlowNode {
    private readonly logger;
    static Description: (logger: ILogger) => NodeDescription;
    constructor(description: NodeDescription, graph: IGraph, logger: ILogger);
    triggered(fiber: any): void;
}
