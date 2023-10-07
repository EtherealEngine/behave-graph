"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const reactflow_1 = require("reactflow");
const InputSocket_1 = __importDefault(require("./InputSocket"));
const NodeContainer_1 = __importDefault(require("./NodeContainer"));
const OutputSocket_1 = __importDefault(require("./OutputSocket"));
const useChangeNodeData_1 = require("../hooks/useChangeNodeData");
const isHandleConnected_1 = require("../util/isHandleConnected");
const getPairs = (arr1, arr2) => {
    const max = Math.max(arr1.length, arr2.length);
    const pairs = [];
    for (let i = 0; i < max; i++) {
        const pair = [arr1[i], arr2[i]];
        pairs.push(pair);
    }
    return pairs;
};
const Node = ({ id, data, spec, selected }) => {
    const edges = (0, reactflow_1.useEdges)();
    const handleChange = (0, useChangeNodeData_1.useChangeNodeData)(id);
    const pairs = getPairs(spec.inputs, spec.outputs);
    return ((0, jsx_runtime_1.jsx)(NodeContainer_1.default, { title: spec.label, category: spec.category, selected: selected, children: pairs.map(([input, output], ix) => ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row justify-between gap-8 relative px-2", children: [input && ((0, jsx_runtime_1.jsx)(InputSocket_1.default, { ...input, value: data[input.name] ?? input.defaultValue, onChange: handleChange, connected: (0, isHandleConnected_1.isHandleConnected)(edges, id, input.name, 'target') })), output && ((0, jsx_runtime_1.jsx)(OutputSocket_1.default, { ...output, connected: (0, isHandleConnected_1.isHandleConnected)(edges, id, output.name, 'source') }))] }, ix))) }));
};
exports.Node = Node;
