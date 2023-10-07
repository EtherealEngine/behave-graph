import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Background, BackgroundVariant, ReactFlow } from 'reactflow';
import { useBehaveGraphFlow } from '../hooks/useBehaveGraphFlow.js';
import { useFlowHandlers } from '../hooks/useFlowHandlers.js';
import { useGraphRunner } from '../hooks/useGraphRunner.js';
import { useNodeSpecGenerator } from '../hooks/useNodeSpecGenerator.js';
import CustomControls from './Controls.js';
import { NodePicker } from './NodePicker.js';
export const Flow = ({ initialGraph: graph, registry, examples }) => {
    const specGenerator = useNodeSpecGenerator(registry);
    const { nodes, edges, onNodesChange, onEdgesChange, graphJson, setGraphJson, nodeTypes } = useBehaveGraphFlow({
        initialGraphJson: graph,
        specGenerator
    });
    const { onConnect, handleStartConnect, handleStopConnect, handlePaneClick, handlePaneContextMenu, nodePickerVisibility, handleAddNode, lastConnectStart, closeNodePicker, nodePickFilters } = useFlowHandlers({
        nodes,
        onEdgesChange,
        onNodesChange,
        specGenerator
    });
    const { togglePlay, playing } = useGraphRunner({
        graphJson,
        registry
    });
    return (_jsxs(ReactFlow, { nodeTypes: nodeTypes, nodes: nodes, edges: edges, onNodesChange: onNodesChange, onEdgesChange: onEdgesChange, onConnect: onConnect, 
        // @ts-ignore
        onConnectStart: handleStartConnect, 
        // @ts-ignore
        onConnectEnd: handleStopConnect, fitView: true, fitViewOptions: { maxZoom: 1 }, onPaneClick: handlePaneClick, onPaneContextMenu: handlePaneContextMenu, children: [_jsx(CustomControls, { playing: playing, togglePlay: togglePlay, setBehaviorGraph: setGraphJson, examples: examples, specGenerator: specGenerator }), _jsx(Background, { variant: BackgroundVariant.Lines, color: "#2a2b2d", style: { backgroundColor: '#1E1F22' } }), nodePickerVisibility && (_jsx(NodePicker, { position: nodePickerVisibility, filters: nodePickFilters, onPickNode: handleAddNode, onClose: closeNodePicker, specJSON: specGenerator?.getAllNodeSpecs() }))] }));
};
//# sourceMappingURL=Flow.js.map