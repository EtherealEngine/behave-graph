"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flow = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const reactflow_1 = __importStar(require("reactflow"));
const uuid_1 = require("uuid");
const behaveToFlow_1 = require("../transformers/behaveToFlow");
const calculateNewEdge_1 = require("../util/calculateNewEdge");
const customNodeTypes_1 = require("../util/customNodeTypes");
const Controls_1 = __importDefault(require("./Controls"));
const NodePicker_1 = __importDefault(require("./NodePicker"));
const getPickerFilters_1 = require("../util/getPickerFilters");
const Flow = ({ graph }) => {
    const [nodePickerVisibility, setNodePickerVisibility] = (0, react_1.useState)();
    const [lastConnectStart, setLastConnectStart] = (0, react_1.useState)();
    const [initialNodes, initialEdges] = (0, react_1.useMemo)(() => (0, behaveToFlow_1.behaveToFlow)(graph), [graph]);
    const [nodes, , onNodesChange] = (0, reactflow_1.useNodesState)(initialNodes);
    const [edges, , onEdgesChange] = (0, reactflow_1.useEdgesState)(initialEdges);
    const onConnect = (0, react_1.useCallback)((connection) => {
        if (connection.source === null)
            return;
        if (connection.target === null)
            return;
        const newEdge = {
            id: (0, uuid_1.v4)(),
            source: connection.source,
            target: connection.target,
            sourceHandle: connection.sourceHandle,
            targetHandle: connection.targetHandle,
        };
        onEdgesChange([
            {
                type: "add",
                item: newEdge,
            },
        ]);
    }, [onEdgesChange]);
    const handleAddNode = (0, react_1.useCallback)((nodeType, position) => {
        closeNodePicker();
        const newNode = {
            id: (0, uuid_1.v4)(),
            type: nodeType,
            position,
            data: {},
        };
        onNodesChange([
            {
                type: "add",
                item: newNode,
            },
        ]);
        if (lastConnectStart === undefined)
            return;
        const originNode = nodes.find((node) => node.id === lastConnectStart.nodeId);
        if (originNode === undefined)
            return;
        onEdgesChange([
            {
                type: "add",
                item: (0, calculateNewEdge_1.calculateNewEdge)(originNode, nodeType, newNode.id, lastConnectStart),
            },
        ]);
    }, [lastConnectStart, nodes, onEdgesChange, onNodesChange]);
    const handleStartConnect = (e, params) => {
        setLastConnectStart(params);
    };
    const handleStopConnect = (e) => {
        const element = e.target;
        if (element.classList.contains("react-flow__pane")) {
            setNodePickerVisibility({ x: e.clientX, y: e.clientY });
        }
        else {
            setLastConnectStart(undefined);
        }
    };
    const closeNodePicker = () => {
        setLastConnectStart(undefined);
        setNodePickerVisibility(undefined);
    };
    const handlePaneClick = () => closeNodePicker();
    const handlePaneContextMenu = (e) => {
        e.preventDefault();
        setNodePickerVisibility({ x: e.clientX, y: e.clientY });
    };
    return ((0, jsx_runtime_1.jsxs)(reactflow_1.default, { nodeTypes: customNodeTypes_1.customNodeTypes, nodes: nodes, edges: edges, onNodesChange: onNodesChange, onEdgesChange: onEdgesChange, onConnect: onConnect, onConnectStart: handleStartConnect, onConnectEnd: handleStopConnect, fitView: true, fitViewOptions: { maxZoom: 1 }, onPaneClick: handlePaneClick, onPaneContextMenu: handlePaneContextMenu, children: [(0, jsx_runtime_1.jsx)(Controls_1.default, {}), (0, jsx_runtime_1.jsx)(reactflow_1.Background, { variant: reactflow_1.BackgroundVariant.Lines, color: "#2a2b2d", style: { backgroundColor: "#1E1F22" } }), nodePickerVisibility && ((0, jsx_runtime_1.jsx)(NodePicker_1.default, { position: nodePickerVisibility, filters: (0, getPickerFilters_1.getNodePickerFilters)(nodes, lastConnectStart), onPickNode: handleAddNode, onClose: closeNodePicker }))] }));
};
exports.Flow = Flow;
