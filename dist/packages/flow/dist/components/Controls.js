import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { faDownload, faPause, faPlay, faQuestion, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { ControlButton, Controls } from 'reactflow';
import { ClearModal } from './modals/ClearModal.js';
import { HelpModal } from './modals/HelpModal.js';
import { LoadModal } from './modals/LoadModal.js';
import { SaveModal } from './modals/SaveModal.js';
export const CustomControls = ({ playing, togglePlay, setBehaviorGraph, examples, specGenerator }) => {
    const [loadModalOpen, setLoadModalOpen] = useState(false);
    const [saveModalOpen, setSaveModalOpen] = useState(false);
    const [helpModalOpen, setHelpModalOpen] = useState(false);
    const [clearModalOpen, setClearModalOpen] = useState(false);
    return (_jsxs(_Fragment, { children: [_jsxs(Controls, { children: [_jsx(ControlButton, { title: "Help", onClick: () => setHelpModalOpen(true), children: _jsx(FontAwesomeIcon, { icon: faQuestion }) }), _jsx(ControlButton, { title: "Load", onClick: () => setLoadModalOpen(true), children: _jsx(FontAwesomeIcon, { icon: faUpload }) }), _jsx(ControlButton, { title: "Save", onClick: () => setSaveModalOpen(true), children: _jsx(FontAwesomeIcon, { icon: faDownload }) }), _jsx(ControlButton, { title: "Clear", onClick: () => setClearModalOpen(true), children: _jsx(FontAwesomeIcon, { icon: faTrash }) }), _jsx(ControlButton, { title: "Run", onClick: togglePlay, children: _jsx(FontAwesomeIcon, { icon: playing ? faPause : faPlay }) })] }), _jsx(LoadModal, { open: loadModalOpen, onClose: () => setLoadModalOpen(false), setBehaviorGraph: setBehaviorGraph, examples: examples }), specGenerator && (_jsx(SaveModal, { open: saveModalOpen, specGenerator: specGenerator, onClose: () => setSaveModalOpen(false) })), _jsx(HelpModal, { open: helpModalOpen, onClose: () => setHelpModalOpen(false) }), _jsx(ClearModal, { open: clearModalOpen, onClose: () => setClearModalOpen(false) })] }));
};
export default CustomControls;
//# sourceMappingURL=Controls.js.map
//# sourceMappingURL=Controls.js.map