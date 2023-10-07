"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpModal = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Modal_1 = require("./Modal");
const HelpModal = ({ open = false, onClose }) => {
    return ((0, jsx_runtime_1.jsxs)(Modal_1.Modal, { title: "Help", actions: [{ label: "Close", onClick: onClose }], open: open, onClose: onClose, children: [(0, jsx_runtime_1.jsx)("p", { className: "mb-2", children: "Right click anywhere to add a new node." }), (0, jsx_runtime_1.jsx)("p", { className: "mb-2", children: "Drag a connection into empty space to add a new node and connect it to the source." }), (0, jsx_runtime_1.jsx)("p", { className: "mb-2", children: "Click and drag on a socket to connect to another socket of the same type." }), (0, jsx_runtime_1.jsx)("p", { children: "Left click to select nodes or connections, backspace to delete selected nodes or connections." })] }));
};
exports.HelpModal = HelpModal;
