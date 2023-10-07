"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const reactflow_1 = require("reactflow");
const useOnPressKey_1 = require("../hooks/useOnPressKey");
const node_spec_json_1 = __importDefault(require("behave-graph/dist/node-spec.json"));
const specJSON = node_spec_json_1.default;
const nodes = specJSON;
const NodePicker = ({ position, onPickNode, onClose, filters, }) => {
    const [search, setSearch] = (0, react_1.useState)("");
    const instance = (0, reactflow_1.useReactFlow)();
    (0, useOnPressKey_1.useOnPressKey)("Escape", onClose);
    let filtered = nodes;
    if (filters !== undefined) {
        filtered = filtered.filter((node) => {
            const sockets = filters?.handleType === "source" ? node.outputs : node.inputs;
            return sockets.some((socket) => socket.valueType === filters?.valueType);
        });
    }
    filtered = filtered.filter((node) => {
        const term = search.toLowerCase();
        return node.type.toLowerCase().includes(term);
    });
    return ((0, jsx_runtime_1.jsxs)("div", { className: "node-picker absolute z-10 text-sm text-white bg-gray-800 border rounded border-gray-500", style: { top: position.y, left: position.x }, children: [(0, jsx_runtime_1.jsx)("div", { className: "bg-gray-500 p-2", children: "Add Node" }), (0, jsx_runtime_1.jsx)("div", { className: "p-2", children: (0, jsx_runtime_1.jsx)("input", { type: "text", autoFocus: true, placeholder: "Type to filter", className: " bg-gray-600 disabled:bg-gray-700 w-full py-1 px-2", value: search, onChange: (e) => setSearch(e.target.value) }) }), (0, jsx_runtime_1.jsx)("div", { className: "max-h-48 overflow-y-scroll", children: filtered.map(({ type }) => ((0, jsx_runtime_1.jsx)("div", { className: "p-2 cursor-pointer border-b border-gray-600", onClick: () => onPickNode(type, instance.project(position)), children: type }, type))) })] }));
};
exports.default = NodePicker;
