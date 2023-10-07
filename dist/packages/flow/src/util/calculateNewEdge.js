"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateNewEdge = void 0;
const uuid_1 = require("uuid");
const getNodeSpecJSON_1 = require("./getNodeSpecJSON");
const getSocketsByNodeTypeAndHandleType_1 = require("./getSocketsByNodeTypeAndHandleType");
const specJSON = (0, getNodeSpecJSON_1.getNodeSpecJSON)();
const calculateNewEdge = (originNode, destinationNodeType, destinationNodeId, connection) => {
    const sockets = (0, getSocketsByNodeTypeAndHandleType_1.getSocketsByNodeTypeAndHandleType)(specJSON, originNode.type, connection.handleType);
    const originSocket = sockets?.find((socket) => socket.name === connection.handleId);
    const newSockets = (0, getSocketsByNodeTypeAndHandleType_1.getSocketsByNodeTypeAndHandleType)(specJSON, destinationNodeType, connection.handleType === 'source' ? 'target' : 'source');
    const newSocket = newSockets?.find((socket) => socket.valueType === originSocket?.valueType);
    if (connection.handleType === 'source') {
        return {
            id: (0, uuid_1.v4)(),
            source: connection.nodeId ?? '',
            sourceHandle: connection.handleId,
            target: destinationNodeId,
            targetHandle: newSocket?.name
        };
    }
    return {
        id: (0, uuid_1.v4)(),
        target: connection.nodeId ?? '',
        targetHandle: connection.handleId,
        source: destinationNodeId,
        sourceHandle: newSocket?.name
    };
};
exports.calculateNewEdge = calculateNewEdge;
