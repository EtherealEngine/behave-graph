import { faDownload, faPause, faPlay, faQuestion, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import React from 'react';
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
    return (<>
      <Controls>
        <ControlButton title="Help" onClick={() => setHelpModalOpen(true)}>
          <FontAwesomeIcon icon={faQuestion}/>
        </ControlButton>
        <ControlButton title="Load" onClick={() => setLoadModalOpen(true)}>
          <FontAwesomeIcon icon={faUpload}/>
        </ControlButton>
        <ControlButton title="Save" onClick={() => setSaveModalOpen(true)}>
          <FontAwesomeIcon icon={faDownload}/>
        </ControlButton>
        <ControlButton title="Clear" onClick={() => setClearModalOpen(true)}>
          <FontAwesomeIcon icon={faTrash}/>
        </ControlButton>
        <ControlButton title="Run" onClick={togglePlay}>
          <FontAwesomeIcon icon={playing ? faPause : faPlay}/>
        </ControlButton>
      </Controls>
      <LoadModal open={loadModalOpen} onClose={() => setLoadModalOpen(false)} setBehaviorGraph={setBehaviorGraph} examples={examples}/>
      {specGenerator && (<SaveModal open={saveModalOpen} specGenerator={specGenerator} onClose={() => setSaveModalOpen(false)}/>)}
      <HelpModal open={helpModalOpen} onClose={() => setHelpModalOpen(false)}/>
      <ClearModal open={clearModalOpen} onClose={() => setClearModalOpen(false)}/>
    </>);
};
export default CustomControls;
//# sourceMappingURL=Controls.js.map