import React from 'react';
import NodeContainer from './NodeContainer.js';
import InputSocket from './InputSocket.js';
import OutputSocket from './OutputSocket.js';
const getPairs = (arr1, arr2) => {
    const max = Math.max(arr1.length, arr2.length);
    const pairs = [];
    for (let i = 0; i < max; i++) {
        const pair = [arr1[i], arr2[i]];
        pairs.push(pair);
    }
    return pairs;
};
const Node = ({ spec }) => {
    const pairs = getPairs(spec.inputs, spec.outputs);
    return (<NodeContainer title={spec.label} category={spec.category}>
      {pairs.map(([input, output], ix) => (<div key={ix} style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: '0.5rem',
                padding: '0.5rem',
                position: 'relative'
            }}>
          {input && <InputSocket {...input} value={input.defaultValue}/>}
          {output && <OutputSocket {...output}/>}
        </div>))}
    </NodeContainer>);
};
export default Node;
//# sourceMappingURL=Node.js.map