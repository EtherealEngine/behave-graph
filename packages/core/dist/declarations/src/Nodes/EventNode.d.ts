import { Engine } from "../Execution/Engine.js";
import { Graph } from "../Graphs/Graph.js";
import { Socket } from "../Sockets/Socket.js";
import { Node, NodeConfiguration } from "./Node.js";
import { NodeDescription } from "./Registry/NodeDescription.js";
export declare class EventNode extends Node {
    constructor(description: NodeDescription, graph: Graph, inputs?: Socket[], outputs?: Socket[], configuration?: NodeConfiguration);
    init(engine: Engine): void;
    dispose(engine: Engine): void;
}
export declare class EventNode2 extends EventNode {
    constructor(props: {
        description: NodeDescription;
        graph: Graph;
        inputs?: Socket[];
        outputs?: Socket[];
        configuration?: NodeConfiguration;
    });
}
