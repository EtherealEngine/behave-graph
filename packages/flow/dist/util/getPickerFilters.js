import { getSocketsByNodeTypeAndHandleType } from './getSocketsByNodeTypeAndHandleType.js';
export const getNodePickerFilters = (nodes, params, specJSON) => {
    if (params === undefined)
        return;
    const originNode = nodes.find((node) => node.id === params.nodeId);
    if (originNode === undefined)
        return;
    const sockets = specJSON
        ? getSocketsByNodeTypeAndHandleType(specJSON, originNode.type, params.handleType)
        : undefined;
    const socket = sockets?.find((socket) => socket.name === params.handleId);
    if (socket === undefined)
        return;
    return {
        handleType: params.handleType === 'source' ? 'target' : 'source',
        valueType: socket.valueType
    };
};
//# sourceMappingURL=getPickerFilters.js.map