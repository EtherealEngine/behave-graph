import { Graph } from "../Graphs/Graph.js";
import { Socket } from "../Sockets/Socket.js";
import { Node, NodeConfiguration } from "./Node.js";
import { NodeDescription } from "./Registry/NodeDescription.js";
export declare class ImmediateNode extends Node {
    readonly exec: () => void;
    constructor(description: NodeDescription, graph: Graph, inputs: Socket[] | undefined, outputs: Socket[] | undefined, exec: () => void, configuration?: NodeConfiguration);
}
export declare class ImmediateNode2 extends ImmediateNode {
    constructor(props: {
        description: NodeDescription;
        graph: Graph;
        inputs?: Socket[];
        outputs?: Socket[];
        exec: () => void;
    });
}
