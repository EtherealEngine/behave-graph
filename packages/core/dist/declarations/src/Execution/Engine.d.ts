import { EventEmitter } from "../Events/EventEmitter.js";
import { Graph } from "../Graphs/Graph.js";
import { AsyncNode } from "../Nodes/AsyncNode.js";
import { EventNode } from "../Nodes/EventNode.js";
import { Node } from "../Nodes/Node.js";
export declare class Engine {
    readonly graph: Graph;
    private readonly fiberQueue;
    readonly asyncNodes: AsyncNode[];
    readonly eventNodes: EventNode[];
    readonly onNodeExecutionStart: EventEmitter<Node>;
    readonly onNodeExecutionEnd: EventEmitter<Node>;
    executionSteps: number;
    constructor(graph: Graph);
    dispose(): void;
    commitToNewFiber(node: Node, outputFlowSocketName: string, fiberCompletedListener?: (() => void) | undefined): void;
    executeAllSync(limitInSeconds?: number, limitInSteps?: number): number;
    executeAllAsync(limitInSeconds?: number, limitInSteps?: number): Promise<number>;
}
