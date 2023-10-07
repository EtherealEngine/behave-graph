import { EventEmitter } from "../../../../Events/EventEmitter.js";
import { IScene } from "../IScene.js";
export declare class DummyScene implements IScene {
    onSceneChanged: EventEmitter<void>;
    private valueRegistry;
    constructor();
    getProperty(jsonPath: string, valueTypeName: string): any;
    setProperty(): void;
    addOnClickedListener(jsonPath: string, callback: (jsonPath: string) => void): void;
}
