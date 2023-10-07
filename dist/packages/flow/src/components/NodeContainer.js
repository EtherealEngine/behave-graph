"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const colors_1 = require("../util/colors");
function NodeContainer({ title, category = "None", selected, children }) {
    let colorName = colors_1.categoryColorMap[category];
    if (colorName === undefined) {
        colorName = "red";
    }
    let [backgroundColor, borderColor, textColor] = colors_1.colors[colorName];
    if (selected) {
        borderColor = "border-gray-800";
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)("rounded text-white text-sm bg-gray-800 min-w-[120px]", selected && "outline outline-1"), children: [(0, jsx_runtime_1.jsx)("div", { className: `${backgroundColor} ${textColor} px-2 py-1 rounded-t`, children: title }), (0, jsx_runtime_1.jsx)("div", { className: `flex flex-col gap-2 py-2 border-l border-r border-b ${borderColor} `, children: children })] }));
}
exports.default = NodeContainer;
