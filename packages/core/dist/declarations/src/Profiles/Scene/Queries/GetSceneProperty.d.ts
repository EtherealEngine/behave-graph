import { Graph } from "../../../Graphs/Graph.js";
import { ImmediateNode } from "../../../Nodes/ImmediateNode.js";
import { NodeDescription } from "../../../Nodes/Registry/NodeDescription.js";
import { IScene } from "../Abstractions/IScene.js";
export declare class GetSceneProperty extends ImmediateNode {
    readonly valueTypeName: string;
    private readonly scene;
    static GetDescriptions(scene: IScene, ...valueTypeNames: string[]): NodeDescription[];
    constructor(description: NodeDescription, graph: Graph, valueTypeName: string, scene: IScene);
}
