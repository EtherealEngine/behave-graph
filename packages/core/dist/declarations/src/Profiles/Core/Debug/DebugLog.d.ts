import { Fiber } from "../../../Execution/Fiber.js";
import { Graph } from "../../../Graphs/Graph.js";
import { FlowNode } from "../../../Nodes/FlowNode.js";
import { NodeDescription } from "../../../Nodes/Registry/NodeDescription.js";
import { ILogger } from "../Abstractions/ILogger.js";
export declare class Log extends FlowNode {
    private readonly logger;
    static Description: (logger: ILogger) => NodeDescription;
    constructor(description: NodeDescription, graph: Graph, logger: ILogger);
    triggered(fiber: Fiber, triggeredSocketName: string): void;
}
