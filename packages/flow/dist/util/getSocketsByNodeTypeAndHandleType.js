export const getSocketsByNodeTypeAndHandleType = (nodes, nodeType, handleType) => {
    const nodeSpec = nodes.find((node) => node.type === nodeType);
    if (nodeSpec === undefined)
        return;
    return handleType === 'source' ? nodeSpec.outputs : nodeSpec.inputs;
};
//# sourceMappingURL=getSocketsByNodeTypeAndHandleType.js.map