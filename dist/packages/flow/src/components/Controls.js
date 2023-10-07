"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("@behave-graph/core");
const react_1 = require("react");
const ClearModal_1 = require("./modals/ClearModal");
const HelpModal_1 = require("./modals/HelpModal");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const LoadModal_1 = require("./modals/LoadModal");
const SaveModal_1 = require("./modals/SaveModal");
const flowToBehave_1 = require("../transformers/flowToBehave");
const reactflow_1 = require("reactflow");
const sleep_1 = require("../util/sleep");
const CustomControls = () => {
    const [loadModalOpen, setLoadModalOpen] = (0, react_1.useState)(false);
    const [saveModalOpen, setSaveModalOpen] = (0, react_1.useState)(false);
    const [helpModalOpen, setHelpModalOpen] = (0, react_1.useState)(false);
    const [clearModalOpen, setClearModalOpen] = (0, react_1.useState)(false);
    const instance = (0, reactflow_1.useReactFlow)();
    const handleRun = async () => {
        const registry = new core_1.Registry();
        const logger = new core_1.DefaultLogger();
        const manualLifecycleEventEmitter = new core_1.ManualLifecycleEventEmitter();
        (0, core_1.registerCoreProfile)(registry, logger, manualLifecycleEventEmitter);
        (0, core_1.registerSceneProfile)(registry);
        const nodes = instance.getNodes();
        const edges = instance.getEdges();
        const graphJson = (0, flowToBehave_1.flowToBehave)(nodes, edges);
        const graph = (0, core_1.readGraphFromJSON)(graphJson, registry);
        const engine = new core_1.Engine(graph);
        if (manualLifecycleEventEmitter.startEvent.listenerCount > 0) {
            manualLifecycleEventEmitter.startEvent.emit();
            await engine.executeAllAsync(5);
        }
        if (manualLifecycleEventEmitter.tickEvent.listenerCount > 0) {
            const iterations = 20;
            const tickDuration = 0.01;
            for (let tick = 0; tick < iterations; tick++) {
                manualLifecycleEventEmitter.tickEvent.emit();
                engine.executeAllSync(tickDuration);
                await (0, sleep_1.sleep)(tickDuration);
            }
        }
        if (manualLifecycleEventEmitter.endEvent.listenerCount > 0) {
            manualLifecycleEventEmitter.endEvent.emit();
            await engine.executeAllAsync(5);
        }
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(reactflow_1.Controls, { children: [(0, jsx_runtime_1.jsx)(reactflow_1.ControlButton, { title: "Help", onClick: () => setHelpModalOpen(true), children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faQuestion }) }), (0, jsx_runtime_1.jsx)(reactflow_1.ControlButton, { title: "Load", onClick: () => setLoadModalOpen(true), children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faUpload }) }), (0, jsx_runtime_1.jsx)(reactflow_1.ControlButton, { title: "Save", onClick: () => setSaveModalOpen(true), children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faDownload }) }), (0, jsx_runtime_1.jsx)(reactflow_1.ControlButton, { title: "Clear", onClick: () => setClearModalOpen(true), children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faTrash }) }), (0, jsx_runtime_1.jsx)(reactflow_1.ControlButton, { title: "Run", onClick: () => handleRun(), children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faPlay }) })] }), (0, jsx_runtime_1.jsx)(LoadModal_1.LoadModal, { open: loadModalOpen, onClose: () => setLoadModalOpen(false) }), (0, jsx_runtime_1.jsx)(SaveModal_1.SaveModal, { open: saveModalOpen, onClose: () => setSaveModalOpen(false) }), (0, jsx_runtime_1.jsx)(HelpModal_1.HelpModal, { open: helpModalOpen, onClose: () => setHelpModalOpen(false) }), (0, jsx_runtime_1.jsx)(ClearModal_1.ClearModal, { open: clearModalOpen, onClose: () => setClearModalOpen(false) })] }));
};
exports.default = CustomControls;
