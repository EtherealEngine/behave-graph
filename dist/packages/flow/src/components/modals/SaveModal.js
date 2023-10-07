"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveModal = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const reactflow_1 = require("reactflow");
const flowToBehave_1 = require("../../transformers/flowToBehave");
const Modal_1 = require("./Modal");
const SaveModal = ({ open = false, onClose }) => {
    const ref = (0, react_1.useRef)(null);
    const [copied, setCopied] = (0, react_1.useState)(false);
    const edges = (0, reactflow_1.useEdges)();
    const nodes = (0, reactflow_1.useNodes)();
    const flow = (0, react_1.useMemo)(() => (0, flowToBehave_1.flowToBehave)(nodes, edges), [nodes, edges]);
    const jsonString = JSON.stringify(flow, null, 2);
    const handleCopy = () => {
        ref.current?.select();
        document.execCommand("copy");
        ref.current?.blur();
        setCopied(true);
        setInterval(() => {
            setCopied(false);
        }, 1000);
    };
    return ((0, jsx_runtime_1.jsx)(Modal_1.Modal, { title: "Save Graph", actions: [
            { label: "Cancel", onClick: onClose },
            { label: copied ? "Copied" : "Copy", onClick: handleCopy },
        ], open: open, onClose: onClose, children: (0, jsx_runtime_1.jsx)("textarea", { ref: ref, className: "border border-gray-300 w-full p-2 h-32", defaultValue: jsonString }) }));
};
exports.SaveModal = SaveModal;
