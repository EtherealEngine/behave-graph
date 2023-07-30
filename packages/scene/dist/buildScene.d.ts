import { Choices } from 'ee-behave-graph-core';
import { Material, Object3D, Quaternion, Vector3, Vector4 } from 'three';
import { GLTF } from 'three-stdlib';
import { IScene } from './Abstractions/IScene.js';
import { GLTFJson } from './GLTFJson.js';
import { Vec3 } from './Values/Internal/Vec3.js';
import { Vec4 } from './Values/Internal/Vec4.js';
declare enum Resource {
    nodes = "nodes",
    materials = "materials",
    animations = "animations"
}
export declare function toVector3(value: Vec3): Vector3;
export declare function toVector4(value: Vec4): Vector4;
export declare function toQuat(value: Vec4): Quaternion;
export declare type ObjectMap = {
    nodes: {
        [name: string]: Object3D;
    };
    materials: {
        [name: string]: Material;
    };
};
export type Optional<T> = {
    [K in keyof T]: T[K] | undefined;
};
export type Path = {
    resource: Resource;
    index: number;
    property: string;
};
export declare function toJsonPathString({ index, property, resource: resourceType }: Optional<Path>, short: boolean): string | undefined;
export declare function parseJsonPath(jsonPath: string, short?: boolean): Path;
export declare function applyPropertyToModel({ resource, index, property }: Path, gltf: GLTF & ObjectMap, value: any, properties: Properties, setActiveAnimations: ((animation: string, active: boolean) => void) | undefined): void;
export type ResourceOption = {
    name: string;
    index: number;
};
export type ResourceProperties = {
    options: ResourceOption[];
    properties: string[];
};
type Properties = {
    [key in Resource]?: ResourceProperties;
};
export type ParsableScene = GLTF & ObjectMap & {
    json?: GLTFJson;
};
export declare const extractProperties: (gltf: ParsableScene) => Properties;
export declare function generateSettableChoices(properties: Properties): Choices;
export declare function generateRaycastableChoices(properties: Properties): Choices;
export type OnClickCallback = (jsonPath: string) => void;
export type OnClickListener = {
    path: Path;
    elementName: string;
    callbacks: OnClickCallback[];
};
export type OnClickListeners = {
    [jsonPath: string]: OnClickListener;
};
export declare const buildScene: ({ gltf, setOnClickListeners, setActiveAnimations }: {
    gltf: GLTF & ObjectMap;
    setOnClickListeners: ((cb: (existing: OnClickListeners) => OnClickListeners) => void) | undefined;
    setActiveAnimations: ((animation: string, active: boolean) => void) | undefined;
}) => IScene;
export {};
