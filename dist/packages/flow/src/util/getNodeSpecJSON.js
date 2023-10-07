"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNodeSpecJSON = void 0;
const core_1 = require("@behave-graph/core");
let nodeSpecJSON = undefined;
const getNodeSpecJSON = () => {
    if (nodeSpecJSON === undefined) {
        const registry = new core_1.Registry();
        (0, core_1.registerCoreProfile)(registry);
        (0, core_1.registerSceneProfile)(registry);
        nodeSpecJSON = (0, core_1.writeNodeSpecsToJSON)(registry);
    }
    return nodeSpecJSON;
};
exports.getNodeSpecJSON = getNodeSpecJSON;
