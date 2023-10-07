"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClearModal = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const reactflow_1 = require("reactflow");
const Modal_1 = require("./Modal");
const ClearModal = ({ open = false, onClose }) => {
    const instance = (0, reactflow_1.useReactFlow)();
    const handleClear = () => {
        instance.setNodes([]);
        instance.setEdges([]);
        setTimeout(() => {
            instance.fitView();
        }, 100);
        onClose();
    };
    return ((0, jsx_runtime_1.jsx)(Modal_1.Modal, { title: "Clear Graph", actions: [
            { label: "Cancel", onClick: onClose },
            { label: "Clear", onClick: handleClear },
        ], open: open, onClose: onClose, children: (0, jsx_runtime_1.jsx)("p", { children: "Are you sure?" }) }));
};
exports.ClearModal = ClearModal;
