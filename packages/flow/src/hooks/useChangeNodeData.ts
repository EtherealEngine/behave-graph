import { useCallback } from 'react';
import { useReactFlow } from 'reactflow';

export const useChangeNodeData = (id: string) => {
  const instance = useReactFlow();

  return useCallback(
    (key: string, value: any) => {
      instance.setNodes((nodes) =>
        nodes.map((n) => {
          if (n.id !== id) return n;
          return {
            ...n,
            data: {
              ...n.data,
              values: {
                ...n.data.values,
                [key]: value
              },
            },
          };
        })
      );
    },
    [instance, id]
  );
};

export const useChangeNodeConfig = (id: string) => {
  const instance = useReactFlow();

  return useCallback(
    (key: string, value: any) => {
      console.log('DEBUG changing config', key, value);
      instance.setNodes((nodes) =>
        nodes.map((n) => {
          if (n.id !== id) return n;
          return {
            ...n,
            data: {
              ...n.data,
              [key]: value
            }
          };
        })
      );
    },
    [instance, id]
  );
};
