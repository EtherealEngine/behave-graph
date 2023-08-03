export const hasPositionMetaData = (graph) => {
    if (graph.nodes === undefined)
        return false;
    return graph.nodes.some((node) => node.metadata?.positionX !== undefined ||
        node.metadata?.positionY !== undefined);
};
//# sourceMappingURL=hasPositionMetaData.js.map