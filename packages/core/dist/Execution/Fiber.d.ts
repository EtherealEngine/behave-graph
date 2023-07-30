import { Link } from '../Nodes/Link.js';
import { INode } from '../Nodes/NodeInstance.js';
import { Engine } from './Engine.js';
export declare class Fiber {
    engine: Engine;
    nextEval: Link | null;
    private readonly fiberCompletedListenerStack;
    private readonly nodes;
    executionSteps: number;
    constructor(engine: Engine, nextEval: Link | null, fiberCompletedListener?: (() => void) | undefined);
    commit(node: INode, outputSocketName: string, fiberCompletedListener?: (() => void) | undefined): void;
    executeStep(): void;
    isCompleted(): boolean;
}
