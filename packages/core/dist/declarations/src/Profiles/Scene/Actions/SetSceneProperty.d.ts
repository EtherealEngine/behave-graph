import { Fiber } from "../../../Execution/Fiber.js";
import { Graph } from "../../../Graphs/Graph.js";
import { FlowNode } from "../../../Nodes/FlowNode.js";
import { NodeDescription } from "../../../Nodes/Registry/NodeDescription.js";
import { IScene } from "../Abstractions/IScene.js";
export declare class SetSceneProperty extends FlowNode {
    readonly valueTypeName: string;
    private readonly scene;
    static GetDescriptions(scene: IScene, ...valueTypeNames: string[]): NodeDescription[];
    constructor(description: NodeDescription, graph: Graph, valueTypeName: string, scene: IScene);
    triggered(fiber: Fiber, triggeringSocketName: string): void;
}
