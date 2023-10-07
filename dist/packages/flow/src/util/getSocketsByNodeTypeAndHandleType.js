"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSocketsByNodeTypeAndHandleType = void 0;
const getSocketsByNodeTypeAndHandleType = (nodes, nodeType, handleType) => {
    const nodeSpec = nodes.find((node) => node.type === nodeType);
    if (nodeSpec === undefined)
        return;
    return handleType === 'source' ? nodeSpec.outputs : nodeSpec.inputs;
};
exports.getSocketsByNodeTypeAndHandleType = getSocketsByNodeTypeAndHandleType;
