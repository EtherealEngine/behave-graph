import { EventEmitter } from '@behave-graph/core';
import { Quaternion, Vector3, Vector4 } from 'three';
import { Vec3 } from './Values/Internal/Vec3.js';
import { Vec4 } from './Values/Internal/Vec4.js';
var Resource;
(function (Resource) {
    Resource["nodes"] = "nodes";
    Resource["materials"] = "materials";
    Resource["animations"] = "animations";
})(Resource || (Resource = {}));
function toVec3(value) {
    if (!value)
        return null;
    return new Vec3(value.x, value.y, value.z);
}
function toVec4(value) {
    if (!value)
        return null;
    return new Vec4(value.x, value.y, value.z, value.w);
}
export function toVector3(value) {
    return new Vector3(value.x, value.y, value.z);
}
export function toVector4(value) {
    return new Vector4(value.x, value.y, value.z, value.w);
}
export function toQuat(value) {
    return new Quaternion(value.x, value.y, value.z, value.w);
}
const shortPathRegEx = /^\/?(?<resource>[^/]+)\/(?<index>\d+)$/;
const jsonPathRegEx = /^\/?(?<resource>[^/]+)\/(?<index>\d+)\/(?<property>[^/]+)$/;
export function toJsonPathString({ index, property, resource: resourceType }, short) {
    if (short) {
        if (!resourceType || typeof index === undefined)
            return;
        return `${resourceType}/${index}`;
    }
    else {
        if (!resourceType || typeof index === undefined || !property)
            return;
        return `${resourceType}/${index}/${property}`;
    }
}
export function parseJsonPath(jsonPath, short = false) {
    // hack = for now we see if there are 2 segments to know if its short
    const regex = short ? shortPathRegEx : jsonPathRegEx;
    const matches = regex.exec(jsonPath);
    if (matches === null)
        throw new Error(`can not parse jsonPath: ${jsonPath}`);
    if (matches.groups === undefined)
        throw new Error(`can not parse jsonPath (no groups): ${jsonPath}`);
    return {
        resource: matches.groups.resource,
        index: +matches.groups.index,
        property: matches.groups.property
    };
}
export function applyPropertyToModel({ resource, index, property }, gltf, value, properties, setActiveAnimations) {
    const nodeName = getResourceName({ resource, index }, properties);
    if (!nodeName)
        throw new Error(`could not get node at index ${index}`);
    if (resource === Resource.nodes) {
        const node = gltf.nodes[nodeName];
        if (!node) {
            console.error(`no node at path ${nodeName}`);
            return;
        }
        applyNodeModifier(property, node, value);
        return;
    }
    if (resource === Resource.materials) {
        const node = gltf.materials[nodeName];
        if (!node) {
            console.error(`no node at path ${nodeName}`);
            return;
        }
        applyMaterialModifier(property, node, value);
        return;
    }
    if (resource === Resource.animations) {
        if (!setActiveAnimations) {
            console.error('cannot apply animation property without setActiveAnimations');
            return;
        }
        setActiveAnimations(nodeName, value);
        return;
    }
    console.error(`unknown resource type ${resource}`);
}
const getResourceName = ({ resource, index }, properties) => {
    return properties[resource]?.options[index].name;
};
const getPropertyFromModel = ({ resource, index, property }, gltf, properties) => {
    if (resource === Resource.nodes) {
        const nodeName = getResourceName({ resource, index }, properties);
        if (!nodeName)
            throw new Error(`could not get node at index ${index}`);
        const node = gltf.nodes[nodeName];
        if (!node) {
            console.error(`no node at path ${nodeName}`);
            return;
        }
        getPropertyValue(property, node);
        return;
    }
};
function applyNodeModifier(property, objectRef, value) {
    switch (property) {
        case 'visible': {
            objectRef.visible = value;
            break;
        }
        case 'translation': {
            const v = value;
            objectRef.position.set(v.x, v.y, v.z);
            break;
        }
        case 'scale': {
            const v = value;
            console.log(v.x);
            objectRef.scale.set(v.x, v.y, v.z);
            break;
        }
        case 'rotation': {
            const v = value;
            objectRef.quaternion.set(v.x, v.y, v.z, v.w);
            break;
        }
    }
}
function applyMaterialModifier(property, materialRef, value) {
    switch (property) {
        case 'color': {
            const basic = materialRef;
            if (basic.color) {
                const v = value;
                basic.color.setRGB(v.x, v.y, v.z);
                basic.needsUpdate = true;
            }
            break;
        }
    }
}
function getPropertyValue(property, objectRef) {
    switch (property) {
        case 'visible': {
            return objectRef.visible;
        }
        case 'translation': {
            return toVec3(objectRef.position);
        }
        case 'scale': {
            return toVec3(objectRef.scale);
        }
        case 'rotation': {
            return toVec4(objectRef.quaternion);
        }
        default:
            throw new Error(`unrecognized property: ${property}`);
    }
}
export const extractProperties = (gltf) => {
    const nodeProperties = [
        'visible',
        'translation',
        'scale',
        'rotation',
        'color'
    ];
    const animationProperties = ['playing'];
    const materialProperties = ['color'];
    const gltfJson = gltf.parser.json;
    const nodeOptions = gltfJson.nodes?.map(({ name }, index) => ({
        name: name || index.toString(),
        index
    }));
    const materialOptions = gltfJson.materials?.map(({ name }, index) => ({
        name: name || index.toString(),
        index
    }));
    const animationOptions = gltf.animations?.map(({ name }, index) => ({
        name: name || index.toString(),
        index
    }));
    const properties = {};
    properties.nodes = { options: nodeOptions, properties: nodeProperties };
    if (materialOptions) {
        properties.materials = {
            options: materialOptions,
            properties: materialProperties
        };
    }
    if (animationOptions) {
        properties.animations = {
            options: animationOptions,
            properties: animationProperties
        };
    }
    return properties;
};
function createPropertyChoice(resource, name, property, index) {
    return {
        text: `${resource}/${name}/${property}`,
        value: `${resource}/${index}/${property}`
    };
}
function generateChoicesForProperty(property, resource) {
    if (!property)
        return [];
    const choices = [];
    property.options.forEach(({ index, name }) => {
        property.properties.forEach((property) => {
            choices.push(createPropertyChoice(resource, name, property, index));
        });
    });
    return choices;
}
export function generateSettableChoices(properties) {
    const choices = [
        ...generateChoicesForProperty(properties.nodes, Resource.nodes),
        ...generateChoicesForProperty(properties.materials, Resource.materials),
        ...generateChoicesForProperty(properties.animations, Resource.animations)
    ];
    return choices;
}
export function generateRaycastableChoices(properties) {
    const choices = [];
    properties.nodes?.options.forEach(({ index, name }) => {
        choices.push({
            text: `nodes/${name}`,
            value: `nodes/${index}`
        });
    });
    return choices;
}
export const buildScene = ({ gltf, setOnClickListeners, setActiveAnimations }) => {
    const properties = extractProperties(gltf);
    const onSceneChanged = new EventEmitter();
    const addOnClickedListener = (jsonPath, callback) => {
        if (!setOnClickListeners)
            return;
        const path = parseJsonPath(jsonPath, true);
        setOnClickListeners((existing) => {
            const listenersForPath = existing[jsonPath] || {
                path,
                elementName: getResourceName({ resource: path.resource, index: path.index }, properties),
                callbacks: []
            };
            const updatedListeners = {
                ...listenersForPath,
                callbacks: [...listenersForPath.callbacks, callback]
            };
            const result = {
                ...existing,
                [jsonPath]: updatedListeners
            };
            return result;
        });
    };
    const removeOnClickedListener = (jsonPath, callback) => {
        if (!setOnClickListeners)
            return;
        setOnClickListeners((existing) => {
            const listenersForPath = existing[jsonPath];
            if (!listenersForPath)
                return existing;
            const updatedCallbacks = listenersForPath.callbacks.filter((x) => x !== callback);
            if (updatedCallbacks.length > 0) {
                const updatedListeners = {
                    ...listenersForPath,
                    callback: updatedCallbacks
                };
                return {
                    ...existing,
                    [jsonPath]: updatedListeners
                };
            }
            const result = {
                ...existing
            };
            delete result[jsonPath];
            return result;
        });
    };
    const getProperty = (jsonPath, valueTypeName) => {
        const path = parseJsonPath(jsonPath);
        return getPropertyFromModel(path, gltf, properties);
    };
    const setProperty = (jsonPath, valueTypeName, value) => {
        const path = parseJsonPath(jsonPath);
        applyPropertyToModel(path, gltf, value, properties, setActiveAnimations);
        onSceneChanged.emit();
    };
    const settableChoices = generateSettableChoices(properties);
    const raycastableChoices = generateRaycastableChoices(properties);
    const addOnSceneChangedListener = (listener) => {
        onSceneChanged.addListener(listener);
    };
    const removeOnSceneChangedListener = (listener) => {
        onSceneChanged.removeListener(listener);
    };
    const scene = {
        getProperty,
        setProperty,
        getProperties: () => settableChoices,
        getRaycastableProperties: () => raycastableChoices,
        addOnClickedListener,
        removeOnClickedListener,
        addOnSceneChangedListener,
        removeOnSceneChangedListener
    };
    return scene;
};
//# sourceMappingURL=buildScene.js.map