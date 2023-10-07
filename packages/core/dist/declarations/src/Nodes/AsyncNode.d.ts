import { Engine } from "../Execution/Engine.js";
import { Graph } from "../Graphs/Graph.js";
import { Socket } from "../Sockets/Socket.js";
import { Node, NodeConfiguration } from "./Node.js";
import { NodeDescription } from "./Registry/NodeDescription.js";
export declare class AsyncNode extends Node {
    constructor(description: NodeDescription, graph: Graph, inputs?: Socket[], outputs?: Socket[], configuration?: NodeConfiguration);
    triggered(engine: Engine, triggeringSocketName: string, finished: () => void): void;
    dispose(): void;
}
export declare class AsyncNode2 extends AsyncNode {
    constructor(props: {
        description: NodeDescription;
        graph: Graph;
        inputs?: Socket[];
        outputs?: Socket[];
    });
}
