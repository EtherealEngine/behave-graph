import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEdges } from 'reactflow';
import { useChangeNodeData } from '../hooks/useChangeNodeData.js';
import { useAddNodeSocket } from '../hooks/useAddNodeSocket.js';
import { isHandleConnected } from '../util/isHandleConnected.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import InputSocket from './InputSocket.js';
import NodeContainer from './NodeContainer.js';
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
export const Node = ({ id, data, spec, selected, specGenerator }) => {
    const edges = useEdges();
    const handleChange = useChangeNodeData(id);
    const pairs = getPairs(spec.inputs, spec.outputs);
    const canAddInputs = spec.configuration.find((config) => config.name === 'numInputs' && config.valueType === 'number');
    const canAddOutputs = spec.configuration.find((config) => config.name === 'numOutputs' && config.valueType === 'number');
    const canAddBoth = spec.configuration.find((config) => config.name === 'numCases' && config.valueType === 'number');
    let handleAddNodeSocket;
    if (canAddInputs) {
        handleAddNodeSocket = useAddNodeSocket(id, 'inputs', canAddInputs.defaultValue);
    }
    else if (canAddOutputs) {
        handleAddNodeSocket = useAddNodeSocket(id, 'outputs', canAddOutputs.defaultValue);
    }
    else if (canAddBoth) {
        handleAddNodeSocket = useAddNodeSocket(id, 'both', canAddBoth.defaultValue);
    }
    return (_jsxs(NodeContainer, { title: spec.label, category: spec.category, selected: selected, children: [pairs.map(([input, output], ix) => (_jsxs("div", { className: "flex flex-row justify-between gap-8 relative px-2", children: [input && (_jsx(InputSocket, { ...input, specGenerator: specGenerator, value: data.values?.[input.name] ?? input.defaultValue, onChange: handleChange, connected: isHandleConnected(edges, id, input.name, 'target') })), output && (_jsx(OutputSocket, { ...output, specGenerator: specGenerator, connected: isHandleConnected(edges, id, output.name, 'source') }))] }, ix))), handleAddNodeSocket && (_jsx("div", { className: "flex flex-row self-center", children: _jsxs("button", { style: { backgroundColor: 'transparent' }, onClick: handleAddNodeSocket, children: [_jsx(FontAwesomeIcon, { icon: faCirclePlus, color: "#ffffff" }), ' Add socket'] }) }))] }));
};
//# sourceMappingURL=Node.js.map