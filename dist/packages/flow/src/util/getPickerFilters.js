"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNodePickerFilters = void 0;
const getNodeSpecJSON_1 = require("./getNodeSpecJSON");
const getSocketsByNodeTypeAndHandleType_1 = require("./getSocketsByNodeTypeAndHandleType");
const specJSON = (0, getNodeSpecJSON_1.getNodeSpecJSON)();
const getNodePickerFilters = (nodes, params) => {
    if (params === undefined)
        return;
    const originNode = nodes.find((node) => node.id === params.nodeId);
    if (originNode === undefined)
        return;
    const sockets = (0, getSocketsByNodeTypeAndHandleType_1.getSocketsByNodeTypeAndHandleType)(specJSON, originNode.type, params.handleType);
    const socket = sockets?.find((socket) => socket.name === params.handleId);
    if (socket === undefined)
        return;
    return {
        handleType: params.handleType === 'source' ? 'target' : 'source',
        valueType: socket.valueType
    };
};
exports.getNodePickerFilters = getNodePickerFilters;
