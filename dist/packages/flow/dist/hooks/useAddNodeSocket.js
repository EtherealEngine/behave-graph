import { useCallback } from 'react';
import { useReactFlow } from 'reactflow';
export const useAddNodeSocket = (id, type, defaultValue) => {
    const instance = useReactFlow();
    return useCallback(() => {
        instance.setNodes((nodes) => nodes.map((n) => {
            if (n.id !== id)
                return n;
            let newConfiguration;
            switch (type) {
                case 'inputs':
                    newConfiguration = {
                        numInputs: (n.data.configuration?.numInputs ?? defaultValue) + 1
                    };
                    break;
                case 'outputs':
                    newConfiguration = {
                        numOutputs: (n.data.configuration?.numOutputs ?? defaultValue) + 1
                    };
                    break;
                case 'both':
                    newConfiguration = {
                        numCases: (n.data.configuration?.numCases ?? defaultValue) + 1
                    };
                    break;
            }
            console.log('DEBUG in callback ', n.data.configuration, newConfiguration, {
                ...n.data.configuration,
                ...newConfiguration
            });
            return {
                ...n,
                data: {
                    ...n.data,
                    configuration: {
                        ...n.data.configuration,
                        ...newConfiguration
                    }
                }
            };
        }));
    }, [instance, id, type]);
};
//# sourceMappingURL=useAddNodeSocket.js.map
//# sourceMappingURL=useAddNodeSocket.js.map