"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHandleConnected = void 0;
const isHandleConnected = (edges, nodeId, handleId, type) => {
    return edges.some((edge) => edge[type] === nodeId && edge[`${type}Handle`] === handleId);
};
exports.isHandleConnected = isHandleConnected;
