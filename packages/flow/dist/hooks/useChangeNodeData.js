import { useCallback } from 'react';
import { useReactFlow } from 'reactflow';
export const useChangeNodeData = (id) => {
    const instance = useReactFlow();
    return useCallback((key, value) => {
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
//# sourceMappingURL=useChangeNodeData.js.map