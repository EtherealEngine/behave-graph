export function toVector3(value: any): Vector3 | null;
export function toVector4(value: any): Vector4 | null;
export function toQuat(value: any): Quaternion | null;
export function toJsonPathString({ index, property, resource: resourceType }: {
    index: any;
    property: any;
    resource: any;
}, short: any): string | undefined;
export function parseJsonPath(jsonPath: any, short?: boolean): {
    resource: string;
    index: number;
    property: string;
};
export function applyPropertyToModel({ resource, index, property }: {
    resource: any;
    index: any;
    property: any;
}, gltf: any, value: any, properties: any, setActiveAnimations: any): void;
export function generateSettableChoices(properties: any): any[];
export function generateRaycastableChoices(properties: any): any[];
export function extractProperties(gltf: any): {
    nodes: {
        options: any;
        properties: string[];
    };
    materials: {
        options: any;
        properties: string[];
    };
    animations: {
        options: any;
        properties: string[];
    };
};
export function buildScene({ gltf, setOnClickListeners, setActiveAnimations }: {
    gltf: any;
    setOnClickListeners: any;
    setActiveAnimations: any;
}): {
    getProperty: (jsonPath: any, valueTypeName: any) => void;
    setProperty: (jsonPath: any, valueTypeName: any, value: any) => void;
    getProperties: () => any[];
    getRaycastableProperties: () => any[];
    addOnClickedListener: (jsonPath: any, callback: any) => void;
    removeOnClickedListener: (jsonPath: any, callback: any) => void;
    addOnSceneChangedListener: (listener: any) => void;
    removeOnSceneChangedListener: (listener: any) => void;
};
import { Vector3 } from 'three';
import { Vector4 } from 'three';
import { Quaternion } from 'three';
