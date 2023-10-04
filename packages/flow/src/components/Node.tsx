import { NodeSpecJSON, createNode } from '@behave-graph/core';
import React from 'react';
import { NodeProps as FlowNodeProps, useEdges } from 'reactflow';

import {
  useChangeNodeConfig,
  useChangeNodeData
} from '../hooks/useChangeNodeData.js';
import { NodeSpecGenerator } from '../hooks/useNodeSpecGenerator.js';
import { isHandleConnected } from '../util/isHandleConnected.js';
import InputSocket from './InputSocket.js';
import NodeContainer from './NodeContainer.js';
import OutputSocket from './OutputSocket.js';

type NodeProps = FlowNodeProps & {
  spec: NodeSpecJSON;
  specGenerator: NodeSpecGenerator;
};

const getPairs = <T, U>(arr1: T[], arr2: U[]) => {
  const max = Math.max(arr1.length, arr2.length);
  const pairs = [];
  for (let i = 0; i < max; i++) {
    const pair: [T | undefined, U | undefined] = [arr1[i], arr2[i]];
    pairs.push(pair);
  }
  return pairs;
};

export const Node: React.FC<NodeProps> = ({
  id,
  data,
  spec,
  selected,
  specGenerator
}: NodeProps) => {
  const edges = useEdges();
  const handleChange = useChangeNodeData(id);
  const handleConfigChange = useChangeNodeConfig(id);

  const pairs = getPairs(spec.inputs, spec.outputs);
  const configuration = spec.configuration;

  console.log(
    'DEBUG node',
    spec.label,
    configuration,
    data.configuration,
    Object.entries(configuration)
  );
  return (
    <NodeContainer
      title={spec.label}
      category={spec.category}
      selected={selected}
    >
      {pairs.map(([input, output], ix) => (
        <div
          key={ix}
          className="flex flex-row justify-between gap-8 relative px-2"
          // className={styles.container}
        >
          {input && (
            <InputSocket
              {...input}
              specGenerator={specGenerator}
              value={data.values[input.name] ?? input.defaultValue}
              onChange={handleChange}
              connected={isHandleConnected(edges, id, input.name, 'target')}
            />
          )}
          {output && (
            <OutputSocket
              {...output}
              specGenerator={specGenerator}
              connected={isHandleConnected(edges, id, output.name, 'source')}
            />
          )}
        </div>
      ))}
      {Object.keys(configuration).length > 0 &&
        Object.entries(configuration).map(([name, config], ix) => (
          <div
            key={ix}
            className="flex flex-row justify-between gap-8 relative px-2"
            // className={styles.container}
          >
            {config && (
              <InputSocket
                {...config}
                name={name}
                defaultValue={config.defaultValue}
                specGenerator={specGenerator}
                value={data.configuration[name]}
                onChange={(name, value) => {
                  console.log('DEBUG changed value to ', value);
                  handleConfigChange(name, value);
                }}
                connected={isHandleConnected(edges, id, name, 'target')}
              />
            )}
          </div>
        ))}
    </NodeContainer>
  );
};
