"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidConnection = void 0;
const getNodeSpecJSON_1 = require("./getNodeSpecJSON");
const getSocketsByNodeTypeAndHandleType_1 = require("./getSocketsByNodeTypeAndHandleType");
const isHandleConnected_1 = require("./isHandleConnected");
const specJSON = (0, getNodeSpecJSON_1.getNodeSpecJSON)();
const isValidConnection = (connection, instance) => {
    if (connection.source === null || connection.target === null)
        return false;
    const sourceNode = instance.getNode(connection.source);
    const targetNode = instance.getNode(connection.target);
    const edges = instance.getEdges();
    if (sourceNode === undefined || targetNode === undefined)
        return false;
    const sourceSockets = (0, getSocketsByNodeTypeAndHandleType_1.getSocketsByNodeTypeAndHandleType)(specJSON, sourceNode.type, 'source');
    const sourceSocket = sourceSockets?.find((socket) => socket.name === connection.sourceHandle);
    const targetSockets = (0, getSocketsByNodeTypeAndHandleType_1.getSocketsByNodeTypeAndHandleType)(specJSON, targetNode.type, 'target');
    const targetSocket = targetSockets?.find((socket) => socket.name === connection.targetHandle);
    if (sourceSocket === undefined || targetSocket === undefined)
        return false;
    if (targetSocket.valueType !== 'flow' &&
        (0, isHandleConnected_1.isHandleConnected)(edges, targetNode.id, targetSocket.name, 'target')) {
        return false;
    }
    return sourceSocket.valueType === targetSocket.valueType;
};
exports.isValidConnection = isValidConnection;
