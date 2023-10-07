import { Engine } from "../../../Execution/Engine.js";
import { Graph } from "../../../Graphs/Graph.js";
import { EventNode } from "../../../Nodes/EventNode.js";
import { NodeDescription } from "../../../Nodes/Registry/NodeDescription.js";
import { ILifecycleEventEmitter } from "../Abstractions/ILifecycleEventEmitter.js";
export declare class LifecycleOnEnd extends EventNode {
    private readonly lifecycleEventEmitter;
    static Description: (lifecycleEventEmitter: ILifecycleEventEmitter) => NodeDescription;
    constructor(description: NodeDescription, graph: Graph, lifecycleEventEmitter: ILifecycleEventEmitter);
    private onEndEvent;
    init(engine: Engine): void;
    dispose(engine: Engine): void;
}
