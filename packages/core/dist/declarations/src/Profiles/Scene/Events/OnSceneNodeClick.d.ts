import { Graph } from "../../../Graphs/Graph.js";
import { EventNode } from "../../../Nodes/EventNode.js";
import { NodeDescription } from "../../../Nodes/Registry/NodeDescription.js";
export declare class OnSceneNodeClick extends EventNode {
    static Description: NodeDescription;
    constructor(description: NodeDescription, graph: Graph);
}
