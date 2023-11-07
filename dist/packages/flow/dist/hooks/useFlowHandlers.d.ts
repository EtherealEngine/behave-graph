export function useFlowHandlers({ onEdgesChange, onNodesChange, nodes, specGenerator }: {
    onEdgesChange: any;
    onNodesChange: any;
    nodes: any;
    specGenerator: any;
}): {
    onConnect: (connection: any) => void;
    handleStartConnect: (e: any, params: any) => void;
    handleStopConnect: (e: any) => void;
    handlePaneClick: () => void;
    handlePaneContextMenu: (e: any) => void;
    lastConnectStart: undefined;
    nodePickerVisibility: undefined;
    handleAddNode: (nodeType: any, position: any) => void;
    closeNodePicker: () => void;
    nodePickFilters: import("../index.js").NodePickerFilters | undefined;
};
