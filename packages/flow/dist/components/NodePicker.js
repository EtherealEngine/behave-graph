import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useReactFlow } from 'reactflow';
import { useOnPressKey } from '../hooks/useOnPressKey.js';
export const NodePicker = ({ position, onPickNode, onClose, filters, specJSON }) => {
    const [search, setSearch] = useState('');
    const instance = useReactFlow();
    useOnPressKey('Escape', onClose);
    if (!specJSON)
        return null;
    let filtered = specJSON;
    if (filters !== undefined) {
        filtered = filtered?.filter((node) => {
            const sockets = filters?.handleType === 'source' ? node.outputs : node.inputs;
            return sockets.some((socket) => socket.valueType === filters?.valueType);
        });
    }
    filtered =
        filtered?.filter((node) => {
            const term = search.toLowerCase();
            return node.type.toLowerCase().includes(term);
        }) || [];
    return (_jsxs("div", { className: "node-picker absolute z-10 text-sm text-white bg-gray-800 border rounded border-gray-500", style: { top: position.y, left: position.x }, children: [_jsx("div", { className: "bg-gray-500 p-2", children: "Add Node" }), _jsx("div", { className: "p-2", children: _jsx("input", { type: "text", autoFocus: true, placeholder: "Type to filter", className: " bg-gray-600 disabled:bg-gray-700 w-full py-1 px-2", value: search, onChange: (e) => setSearch(e.target.value) }) }), _jsx("div", { className: "max-h-48 overflow-y-scroll", children: filtered.map(({ type }) => (_jsx("div", { className: "p-2 cursor-pointer border-b border-gray-600", onClick: () => onPickNode(type, instance.project(position)), children: type }, type))) })] }));
};
//# sourceMappingURL=NodePicker.js.map