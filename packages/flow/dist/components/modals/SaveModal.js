import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo, useRef, useState } from 'react';
import { useEdges, useNodes } from 'reactflow';
import { flowToBehave } from '../../transformers/flowToBehave.js';
import { Modal } from './Modal.js';
export const SaveModal = ({ open = false, onClose, specJson }) => {
    const ref = useRef(null);
    const [copied, setCopied] = useState(false);
    const edges = useEdges();
    const nodes = useNodes();
    const flow = useMemo(() => flowToBehave(nodes, edges, specJson), [nodes, edges, specJson]);
    const jsonString = JSON.stringify(flow, null, 2);
    const handleCopy = () => {
        ref.current?.select();
        document.execCommand('copy');
        ref.current?.blur();
        setCopied(true);
        setInterval(() => {
            setCopied(false);
        }, 1000);
    };
    return (_jsx(Modal, { title: "Save Graph", actions: [
            { label: 'Cancel', onClick: onClose },
            { label: copied ? 'Copied' : 'Copy', onClick: handleCopy }
        ], open: open, onClose: onClose, children: _jsx("textarea", { ref: ref, className: "border border-gray-300 w-full p-2 h-32", defaultValue: jsonString }) }));
};
//# sourceMappingURL=SaveModal.js.map