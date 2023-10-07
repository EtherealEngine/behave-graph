"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasPositionMetaData = void 0;
const hasPositionMetaData = (graph) => {
    if (graph.nodes === undefined)
        return false;
    return graph.nodes.some((node) => node.metadata?.positionX !== undefined ||
        node.metadata?.positionY !== undefined);
};
exports.hasPositionMetaData = hasPositionMetaData;
