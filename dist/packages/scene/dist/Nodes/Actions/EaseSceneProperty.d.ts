export class EaseSceneProperty extends AsyncNode {
    static GetDescriptions(scene: any, lifecycleEventEmitter: any, ...valueTypeNames: any[]): NodeDescription[];
    constructor(description: any, graph: any, valueTypeName: any, scene: any, lifecycleEventEmitter: any);
    valueTypeName: any;
    scene: any;
    lifecycleEventEmitter: any;
    initialValue: any;
    targetValue: any;
    duration: number;
    elapsedDuration: number;
    easing: import("@behave-graph/core").Easing;
    startTime: number;
    onTick: (() => void) | undefined;
    triggered(engine: any, triggeringSocketName: any, finished: any): void;
}
import { AsyncNode } from '@behave-graph/core';
import { NodeDescription } from '@behave-graph/core';
