import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Modal } from './Modal.js';
export const HelpModal = ({ open = false, onClose }) => {
    return (_jsxs(Modal, { title: "Help", actions: [{ label: 'Close', onClick: onClose }], open: open, onClose: onClose, children: [_jsx("p", { className: "mb-2", children: "Right click anywhere to add a new node." }), _jsx("p", { className: "mb-2", children: "Drag a connection into empty space to add a new node and connect it to the source." }), _jsx("p", { className: "mb-2", children: "Click and drag on a socket to connect to another socket of the same type." }), _jsx("p", { children: "Left click to select nodes or connections, backspace to delete selected nodes or connections." })] }));
};
//# sourceMappingURL=HelpModal.js.map