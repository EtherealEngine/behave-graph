export class Fiber {
    constructor(engine: any, nextEval: any, fiberCompletedListener?: undefined);
    engine: any;
    nextEval: any;
    fiberCompletedListenerStack: any[];
    executionSteps: number;
    nodes: any;
    commit(node: any, outputSocketName: any, fiberCompletedListener?: undefined): void;
    executeStep(): void;
    isCompleted(): boolean;
}
