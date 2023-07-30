import { EventEmitter } from 'ee-behave-graph-core';

import { IScene } from '../IScene.js';
export declare class DummyScene implements IScene {
  onSceneChanged: EventEmitter<void>;
  private valueRegistry;
  constructor();
  getProperty(jsonPath: string, valueTypeName: string): any;
  setProperty(): void;
  addOnClickedListener(
    jsonPath: string,
    callback: (jsonPath: string) => void
  ): void;
  removeOnClickedListener(
    jsonPath: string,
    callback: (jsonPath: string) => void
  ): void;
  getQueryableProperties(): never[];
  getRaycastableProperties(): never[];
  getProperties(): never[];
  addOnSceneChangedListener(): void;
  removeOnSceneChangedListener(): void;
}
