export const getSocketsByNodeTypeAndHandleType = (specGenerator, nodeType, nodeConfiguration, handleType) => {
    if (nodeType === undefined)
        return [];
    const nodeSpec = specGenerator.getNodeSpec(nodeType, nodeConfiguration);
    return handleType === 'source' ? nodeSpec.outputs : nodeSpec.inputs;
};
//# sourceMappingURL=getSocketsByNodeTypeAndHandleType.js.map
//# sourceMappingURL=getSocketsByNodeTypeAndHandleType.js.map