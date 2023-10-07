import { useCallback } from 'react';
import { useReactFlow } from 'reactflow';

export const useAddNodeSocket = (
  id: string,
  type: 'inputs' | 'outputs' | 'both'
) => {
  const instance = useReactFlow();

  return useCallback(() => {
    instance.setNodes((nodes) =>
      nodes.map((n) => {
        if (n.id !== id) return n;

        let newConfiguration;
        switch (type) {
          case 'inputs':
            newConfiguration = {
              numInputs: (n.data.configuration?.numInputs ?? 0) + 1
            };
            break;

          case 'outputs':
            newConfiguration = {
              numOutputs: (n.data.configuration?.numOutputs ?? 0) + 1
            };
            break;
          case 'both':
            newConfiguration = {
              numCases: (n.data.configuration?.numCases ?? 0) + 1
            };
            break;
        }
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
      })
    );
  }, [instance, id, type]);
};
