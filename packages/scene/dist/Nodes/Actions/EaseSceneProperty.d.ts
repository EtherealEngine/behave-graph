import { AsyncNode, Engine, IGraph, ILifecycleEventEmitter, NodeDescription } from 'ee-behave-graph-core';
import { IScene } from '../../Abstractions/IScene.js';
export declare class EaseSceneProperty extends AsyncNode {
    readonly valueTypeName: string;
    private readonly scene;
    private readonly lifecycleEventEmitter;
    static GetDescriptions(scene: IScene, lifecycleEventEmitter: ILifecycleEventEmitter, ...valueTypeNames: string[]): NodeDescription[];
    constructor(description: NodeDescription, graph: IGraph, valueTypeName: string, scene: IScene, lifecycleEventEmitter: ILifecycleEventEmitter);
    private initialValue;
    private targetValue;
    private duration;
    private elapsedDuration;
    private easing;
    private startTime;
    private onTick;
    triggered(engine: Engine, triggeringSocketName: string, finished: () => void): void;
    dispose(): void;
}
