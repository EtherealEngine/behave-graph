import { jsx as _jsx } from "react/jsx-runtime";
import { useReactFlow } from 'reactflow';
import { Modal } from './Modal.js';
export const ClearModal = ({ open = false, onClose }) => {
    const instance = useReactFlow();
    const handleClear = () => {
        instance.setNodes([]);
        instance.setEdges([]);
        // TODO better way to call fit vew after edges render
        setTimeout(() => {
            instance.fitView();
        }, 100);
        onClose();
    };
    return (_jsx(Modal, { title: "Clear Graph", actions: [
            { label: 'Cancel', onClick: onClose },
            { label: 'Clear', onClick: handleClear }
        ], open: open, onClose: onClose, children: _jsx("p", { children: "Are you sure?" }) }));
};
//# sourceMappingURL=ClearModal.js.map
//# sourceMappingURL=ClearModal.js.map