import { Engine } from "../../../Execution/Engine.js";
import { Graph } from "../../../Graphs/Graph.js";
import { AsyncNode } from "../../../Nodes/AsyncNode.js";
import { NodeDescription } from "../../../Nodes/Registry/NodeDescription.js";
export declare class Debounce extends AsyncNode {
    static Description: NodeDescription;
    constructor(description: NodeDescription, graph: Graph);
    private triggerVersion;
    triggered(engine: Engine, triggeringSocketName: string, finished: () => void): void;
    dispose(): void;
}
