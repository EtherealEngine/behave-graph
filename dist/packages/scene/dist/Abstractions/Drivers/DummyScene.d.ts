export class DummyScene {
    onSceneChanged: EventEmitter<any>;
    valueRegistry: {
        [k: string]: import("@behave-graph/core").ValueType<any, any>;
    };
    getProperty(jsonPath: any, valueTypeName: any): any;
    setProperty(): void;
    addOnClickedListener(jsonPath: any, callback: any): void;
    removeOnClickedListener(jsonPath: any, callback: any): void;
    getQueryableProperties(): never[];
    getRaycastableProperties(): never[];
    getProperties(): never[];
    addOnSceneChangedListener(): void;
    removeOnSceneChangedListener(): void;
}
import { EventEmitter } from '@behave-graph/core';
