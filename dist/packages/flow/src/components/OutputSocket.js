"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const reactflow_1 = require("reactflow");
const classnames_1 = __importDefault(require("classnames"));
const colors_1 = require("../util/colors");
const isValidConnection_1 = require("../util/isValidConnection");
function OutputSocket({ connected, valueType, name, }) {
    const instance = (0, reactflow_1.useReactFlow)();
    const isFlowSocket = valueType === "flow";
    let colorName = colors_1.valueTypeColorMap[valueType];
    if (colorName === undefined) {
        colorName = "red";
    }
    const [backgroundColor, borderColor] = colors_1.colors[colorName];
    const showName = isFlowSocket === false || name !== "flow";
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex grow items-center justify-end h-7", children: [showName && (0, jsx_runtime_1.jsx)("div", { className: "capitalize", children: name }), isFlowSocket && ((0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCaretRight, color: "#ffffff", size: "lg", className: "ml-1" })), (0, jsx_runtime_1.jsx)(reactflow_1.Handle, { id: name, type: "source", position: reactflow_1.Position.Right, className: (0, classnames_1.default)(borderColor, connected ? backgroundColor : "bg-gray-800"), isValidConnection: (connection) => (0, isValidConnection_1.isValidConnection)(connection, instance) })] }));
}
exports.default = OutputSocket;
