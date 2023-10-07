import { Fiber } from "../Execution/Fiber.js";
import { Graph } from "../Graphs/Graph.js";
import { Socket } from "../Sockets/Socket.js";
import { Node, NodeConfiguration } from "./Node.js";
import { NodeDescription } from "./Registry/NodeDescription.js";
export declare class FlowNode extends Node {
    constructor(description: NodeDescription, graph: Graph, inputs?: Socket[], outputs?: Socket[], configuration?: NodeConfiguration);
    triggered(fiber: Fiber, triggeringSocketName: string): void;
}
export declare class FlowNode2 extends FlowNode {
    constructor(props: {
        description: NodeDescription;
        graph: Graph;
        inputs?: Socket[];
        outputs?: Socket[];
        configuration?: NodeConfiguration;
    });
}
