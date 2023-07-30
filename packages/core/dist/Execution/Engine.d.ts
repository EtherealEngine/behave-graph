import { EventEmitter } from '../Events/EventEmitter.js';
import { GraphNodes } from '../Graphs/Graph.js';
import { IAsyncNode, IEventNode, INode } from '../Nodes/NodeInstance.js';
export declare class Engine {
    readonly nodes: GraphNodes;
    private readonly fiberQueue;
    readonly asyncNodes: IAsyncNode[];
    readonly eventNodes: IEventNode[];
    readonly onNodeExecutionStart: EventEmitter<INode>;
    readonly onNodeExecutionEnd: EventEmitter<INode>;
    executionSteps: number;
    constructor(nodes: GraphNodes);
    dispose(): void;
    commitToNewFiber(node: INode, outputFlowSocketName: string, fiberCompletedListener?: (() => void) | undefined): void;
    executeAllSync(limitInSeconds?: number, limitInSteps?: number): number;
    executeAllAsync(limitInSeconds?: number, limitInSteps?: number): Promise<number>;
}
