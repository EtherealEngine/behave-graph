export class Engine {
    constructor(nodes: any);
    nodes: any;
    fiberQueue: any[];
    asyncNodes: any[];
    eventNodes: any[];
    onNodeExecutionStart: EventEmitter<any>;
    onNodeExecutionEnd: EventEmitter<any>;
    executionSteps: number;
    dispose(): void;
    commitToNewFiber(node: any, outputFlowSocketName: any, fiberCompletedListener?: undefined): void;
    executeAllSync(limitInSeconds?: number, limitInSteps?: number): number;
    executeAllAsync(limitInSeconds?: number, limitInSteps?: number): Promise<number>;
}
import { EventEmitter } from '../Events/EventEmitter.js';
