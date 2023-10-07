import { Link } from "../Nodes/Link.js";
import { Node } from "../Nodes/Node.js";
import { Engine } from "./Engine.js";
export declare class Fiber {
    engine: Engine;
    nextEval: Link | null;
    private readonly fiberCompletedListenerStack;
    private readonly graph;
    executionSteps: number;
    constructor(engine: Engine, nextEval: Link | null, fiberCompletedListener?: (() => void) | undefined);
    commit(node: Node, outputSocketName: string, fiberCompletedListener?: (() => void) | undefined): void;
    executeStep(): void;
    isCompleted(): boolean;
}
