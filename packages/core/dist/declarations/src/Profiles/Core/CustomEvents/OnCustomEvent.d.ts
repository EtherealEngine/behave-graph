import { NodeConfiguration } from "../../../Nodes/Node.js";
import { Engine } from "../../../Execution/Engine.js";
import { Graph } from "../../../Graphs/Graph.js";
import { EventNode2 } from "../../../Nodes/EventNode.js";
import { NodeDescription, NodeDescription2 } from "../../../Nodes/Registry/NodeDescription.js";
export declare class OnCustomEvent extends EventNode2 {
    static Description: NodeDescription2;
    private readonly customEvent;
    constructor(description: NodeDescription, graph: Graph, configuration: NodeConfiguration);
    private onCustomEvent;
    init(engine: Engine): void;
    dispose(engine: Engine): void;
}
