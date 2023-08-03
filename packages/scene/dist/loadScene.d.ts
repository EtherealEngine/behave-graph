import { Group } from 'three';
import { GLTF } from 'three-stdlib';
import { IScene } from './Abstractions/IScene.js';
import { ObjectMap } from './buildScene.js';
export declare function buildGraph(object: Group): ObjectMap;
type ThreeSceneReturn = {
    scene: IScene;
    gltf: GLTF & ObjectMap;
};
/**
 * Loads a gltf, and corresponding IScene from a url
 * @param url
 * @param onProgress invoked on progress of loading the gltf
 * @returns
 */
export declare const loadGltfAndBuildScene: (url: string, onProgress?: ((progress: number) => void) | undefined) => Promise<ThreeSceneReturn>;
export {};
