"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useChangeNodeData = void 0;
const react_1 = require("react");
const reactflow_1 = require("reactflow");
const useChangeNodeData = (id) => {
    const instance = (0, reactflow_1.useReactFlow)();
    return (0, react_1.useCallback)((key, value) => {
        instance.setNodes((nodes) => nodes.map((n) => {
            if (n.id !== id)
                return n;
            return {
                ...n,
                data: {
                    ...n.data,
                    [key]: value
                }
            };
        }));
    }, [instance, id]);
};
exports.useChangeNodeData = useChangeNodeData;
