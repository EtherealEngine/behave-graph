import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from 'react';
import { useReactFlow } from 'reactflow';
import { Modal } from './Modal.js';
export const LoadModal = ({ open = false, onClose, setBehaviorGraph, examples }) => {
    const [value, setValue] = useState();
    const [selected, setSelected] = useState('');
    const instance = useReactFlow();
    useEffect(() => {
        if (selected) {
            setValue(JSON.stringify(examples[selected], null, 2));
        }
    }, [selected, examples]);
    const handleLoad = useCallback(() => {
        let graph;
        if (value !== undefined) {
            graph = JSON.parse(value);
        }
        else if (selected !== '') {
            graph = examples[selected];
        }
        if (graph === undefined)
            return;
        setBehaviorGraph(graph);
        // TODO better way to call fit vew after edges render
        setTimeout(() => {
            instance.fitView();
        }, 100);
        handleClose();
    }, [setBehaviorGraph, value, instance]);
    const handleClose = () => {
        setValue(undefined);
        setSelected('');
        onClose();
    };
    return (_jsxs(Modal, { title: "Load Graph", actions: [
            { label: 'Cancel', onClick: handleClose },
            { label: 'Load', onClick: handleLoad }
        ], open: open, onClose: onClose, children: [_jsx("textarea", { autoFocus: true, className: "border border-gray-300 w-full p-2 h-32 align-top", placeholder: "Paste JSON here", value: value, onChange: (e) => setValue(e.currentTarget.value) }), _jsx("div", { className: "p-4 text-center text-gray-800", children: "or" }), _jsxs("select", { className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-3", onChange: (e) => setSelected(e.target.value), value: selected, children: [_jsx("option", { disabled: true, value: "", children: "Select an example" }), Object.keys(examples).map((key) => (_jsx("option", { value: key, children: key }, key)))] })] }));
};
//# sourceMappingURL=LoadModal.js.map
//# sourceMappingURL=LoadModal.js.map