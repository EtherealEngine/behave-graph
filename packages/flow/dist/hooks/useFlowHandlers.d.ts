import { MouseEvent as ReactMouseEvent } from 'react';
import { Connection, Node, OnConnectStartParams, XYPosition } from 'reactflow';
import { useBehaveGraphFlow } from './useBehaveGraphFlow.js';
import { NodeSpecGenerator } from './useNodeSpecGenerator.js';
type BehaveGraphFlow = ReturnType<typeof useBehaveGraphFlow>;
export declare const useFlowHandlers: ({ onEdgesChange, onNodesChange, nodes, specGenerator }: Pick<{
    nodes: Node<any, string | undefined>[];
    edges: import("reactflow").Edge<any>[];
    onEdgesChange: (changes: import("reactflow").EdgeChange[]) => void;
    onNodesChange: (changes: import("reactflow").NodeChange[]) => void;
    setGraphJson: (graphJson: import("@behave-graph/core").GraphJSON) => void;
    graphJson: import("@behave-graph/core").GraphJSON | undefined;
    nodeTypes: import("reactflow").NodeTypes | undefined;
}, "onNodesChange" | "onEdgesChange"> & {
    nodes: Node[];
    specGenerator: NodeSpecGenerator | undefined;
}) => {
    onConnect: (connection: Connection) => void;
    handleStartConnect: (e: ReactMouseEvent, params: OnConnectStartParams) => void;
    handleStopConnect: (e: MouseEvent) => void;
    handlePaneClick: () => void;
    handlePaneContextMenu: (e: ReactMouseEvent) => void;
    lastConnectStart: OnConnectStartParams | undefined;
    nodePickerVisibility: XYPosition | undefined;
    handleAddNode: (nodeType: string, position: XYPosition) => void;
    closeNodePicker: () => void;
    nodePickFilters: import("../index.js").NodePickerFilters | undefined;
};
export {};
