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
const AutoSizeInput_1 = require("./AutoSizeInput");
function InputSocket({ connected, value, onChange, name, valueType, defaultValue, }) {
    const instance = (0, reactflow_1.useReactFlow)();
    const isFlowSocket = valueType === "flow";
    let colorName = colors_1.valueTypeColorMap[valueType];
    if (colorName === undefined) {
        colorName = "red";
    }
    const [backgroundColor, borderColor] = colors_1.colors[colorName];
    const showName = isFlowSocket === false || name !== "flow";
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex grow items-center justify-start h-7", children: [isFlowSocket && ((0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCaretRight, color: "#ffffff", size: "lg" })), showName && (0, jsx_runtime_1.jsx)("div", { className: "capitalize mr-2", children: name }), isFlowSocket === false && connected === false && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [valueType === "string" && ((0, jsx_runtime_1.jsx)(AutoSizeInput_1.AutoSizeInput, { type: "text", className: " bg-gray-600 disabled:bg-gray-700 py-1 px-2 nodrag", value: String(value) ?? defaultValue ?? "", onChange: (e) => onChange(name, e.currentTarget.value) })), valueType === "number" && ((0, jsx_runtime_1.jsx)(AutoSizeInput_1.AutoSizeInput, { type: "number", className: " bg-gray-600 disabled:bg-gray-700 py-1 px-2 nodrag", value: String(value) ?? defaultValue ?? "", onChange: (e) => onChange(name, e.currentTarget.value) })), valueType === "float" && ((0, jsx_runtime_1.jsx)(AutoSizeInput_1.AutoSizeInput, { type: "number", className: " bg-gray-600 disabled:bg-gray-700 py-1 px-2 nodrag", value: String(value) ?? defaultValue ?? "", onChange: (e) => onChange(name, e.currentTarget.value) })), valueType === "integer" && ((0, jsx_runtime_1.jsx)(AutoSizeInput_1.AutoSizeInput, { type: "number", className: " bg-gray-600 disabled:bg-gray-700 py-1 px-2 nodrag", value: String(value) ?? defaultValue ?? "", onChange: (e) => onChange(name, e.currentTarget.value) })), valueType === "boolean" && ((0, jsx_runtime_1.jsx)("input", { type: "checkbox", className: " bg-gray-600 disabled:bg-gray-700 py-1 px-2 nodrag", value: String(value) ?? defaultValue ?? "", onChange: (e) => onChange(name, e.currentTarget.checked) }))] })), (0, jsx_runtime_1.jsx)(reactflow_1.Handle, { id: name, type: "target", position: reactflow_1.Position.Left, className: (0, classnames_1.default)(borderColor, connected ? backgroundColor : "bg-gray-800"), isValidConnection: (connection) => (0, isValidConnection_1.isValidConnection)(connection, instance) })] }));
}
exports.default = InputSocket;
