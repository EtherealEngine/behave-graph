import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEdges } from 'reactflow';
import { useChangeNodeData } from '../hooks/useChangeNodeData.js';
import { isHandleConnected } from '../util/isHandleConnected.js';
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
export const Node = ({ id, data, spec, selected, allSpecs }) => {
    const edges = useEdges();
    const handleChange = useChangeNodeData(id);
    const pairs = getPairs(spec.inputs, spec.outputs);
    return (_jsx(NodeContainer, { title: spec.label, category: spec.category, selected: selected, children: pairs.map(([input, output], ix) => (_jsxs("div", { className: "flex flex-row justify-between gap-8 relative px-2", children: [input && (_jsx(InputSocket, { ...input, specJSON: allSpecs, value: data[input.name] ?? input.defaultValue, onChange: handleChange, connected: isHandleConnected(edges, id, input.name, 'target') })), output && (_jsx(OutputSocket, { ...output, specJSON: allSpecs, connected: isHandleConnected(edges, id, output.name, 'source') }))] }, ix))) }));
};
//# sourceMappingURL=Node.js.map