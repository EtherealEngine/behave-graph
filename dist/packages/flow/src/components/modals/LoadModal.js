"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadModal = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const reactflow_1 = require("reactflow");
const behaveToFlow_1 = require("../../transformers/behaveToFlow");
const autoLayout_1 = require("../../util/autoLayout");
const hasPositionMetaData_1 = require("../../util/hasPositionMetaData");
const Modal_1 = require("./Modal");
const Branch_json_1 = __importDefault(require("behave-graph/dist/graphs/core/flow/Branch.json"));
const Delay_json_1 = __importDefault(require("behave-graph/dist/graphs/core/async/Delay.json"));
const HelloWorld_json_1 = __importDefault(require("behave-graph/dist/graphs/core//HelloWorld.json"));
const Polynomial_json_1 = __importDefault(require("behave-graph/dist/graphs/core/logic/Polynomial.json"));
const SetGet_json_1 = __importDefault(require("behave-graph/dist/graphs/core/variables/SetGet.json"));
const examples = {
    branch: Branch_json_1.default,
    delay: Delay_json_1.default,
    helloWorld: HelloWorld_json_1.default,
    polynomial: Polynomial_json_1.default,
    setGet: SetGet_json_1.default,
};
const LoadModal = ({ open = false, onClose }) => {
    const [value, setValue] = (0, react_1.useState)();
    const [selected, setSelected] = (0, react_1.useState)("");
    const instance = (0, reactflow_1.useReactFlow)();
    const handleLoad = () => {
        let graph;
        if (value !== undefined) {
            graph = JSON.parse(value);
        }
        else if (selected !== "") {
            graph = examples[selected];
        }
        if (graph === undefined)
            return;
        const [nodes, edges] = (0, behaveToFlow_1.behaveToFlow)(graph);
        if ((0, hasPositionMetaData_1.hasPositionMetaData)(graph) === false) {
            (0, autoLayout_1.autoLayout)(nodes, edges);
        }
        instance.setNodes(nodes);
        instance.setEdges(edges);
        setTimeout(() => {
            instance.fitView();
        }, 100);
        handleClose();
    };
    const handleClose = () => {
        setValue(undefined);
        setSelected("");
        onClose();
    };
    return ((0, jsx_runtime_1.jsxs)(Modal_1.Modal, { title: "Load Graph", actions: [
            { label: "Cancel", onClick: handleClose },
            { label: "Load", onClick: handleLoad },
        ], open: open, onClose: onClose, children: [(0, jsx_runtime_1.jsx)("textarea", { autoFocus: true, className: "border border-gray-300 w-full p-2 h-32 align-top", placeholder: "Paste JSON here", value: value, onChange: (e) => setValue(e.currentTarget.value) }), (0, jsx_runtime_1.jsx)("div", { className: "p-4 text-center text-gray-800", children: "or" }), (0, jsx_runtime_1.jsxs)("select", { className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-3", onChange: (e) => setSelected(e.target.value), value: selected, children: [(0, jsx_runtime_1.jsx)("option", { disabled: true, value: "", children: "Select an example" }), (0, jsx_runtime_1.jsx)("option", { value: "branch", children: "Branch" }), (0, jsx_runtime_1.jsx)("option", { value: "delay", children: "Delay" }), (0, jsx_runtime_1.jsx)("option", { value: "helloWorld", children: "Hello World" }), (0, jsx_runtime_1.jsx)("option", { value: "polynomial", children: "Polynomial" }), (0, jsx_runtime_1.jsx)("option", { value: "setGet", children: "Set/Get" })] })] }));
};
exports.LoadModal = LoadModal;
