import { DRACOLoader, GLTFLoader } from 'three-stdlib';
import { buildScene } from './buildScene.js';
// Taken from react-three-fiber
// Collects nodes and materials from a THREE.Object3D
export function buildGraph(object) {
    const data = { nodes: {}, materials: {} };
    if (object) {
        object.traverse((obj) => {
            if (obj.name)
                data.nodes[obj.name] = obj;
            if (obj.material && !data.materials[obj.material.name])
                data.materials[obj.material.name] = obj.material;
        });
    }
    return data;
}
/**
 * Loads a gltf, and corresponding IScene from a url
 * @param url
 * @param onProgress invoked on progress of loading the gltf
 * @returns
 */
export const loadGltfAndBuildScene = (url, onProgress) => {
    const loader = new GLTFLoader();
    // Optional: Provide a DRACOLoader instance to decode compressed mesh data
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.4.3/');
    loader.setDRACOLoader(dracoLoader);
    // Load a glTF resource
    // eslint-disable-next-line promise/avoid-new
    const result = new Promise((resolve, reject) => {
        loader.load(
        // resource URL
        url, 
        // called when the resource is loaded
        function (gltf) {
            Object.assign(gltf, buildGraph(gltf.scene));
            const asObjectMap = gltf;
            const scene = buildScene({
                gltf: asObjectMap,
                setOnClickListeners: undefined,
                setActiveAnimations: undefined
            });
            resolve({
                scene,
                gltf: asObjectMap
            });
        }, 
        // called while loading is progressing
        function (xhr) {
            const progress = (xhr.loaded / xhr.total) * 100;
            if (onProgress)
                onProgress(progress);
        }, 
        // called when loading has errors
        function (error) {
            reject(error);
        });
    });
    return result;
};
//# sourceMappingURL=loadScene.js.map