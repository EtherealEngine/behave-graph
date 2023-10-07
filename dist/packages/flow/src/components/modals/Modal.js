"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useOnPressKey_1 = require("../../hooks/useOnPressKey");
const Modal = ({ open = false, onClose, title, children, actions }) => {
    (0, useOnPressKey_1.useOnPressKey)('Escape', onClose);
    if (open === false)
        return null;
    const actionColors = {
        primary: 'bg-teal-400 hover:bg-teal-500',
        secondary: 'bg-gray-400 hover:bg-gray-500'
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "z-[19] fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full", onClick: onClose }), (0, jsx_runtime_1.jsxs)("div", { className: "z-20 relative top-20 mx-auto border w-96 shadow-lg bg-white text-sm rounded-md", children: [(0, jsx_runtime_1.jsx)("div", { className: "p-3 border-b", children: (0, jsx_runtime_1.jsx)("h2", { className: "text-lg text-center font-bold", children: title }) }), (0, jsx_runtime_1.jsx)("div", { className: "p-3", children: children }), (0, jsx_runtime_1.jsx)("div", { className: "flex gap-3 p-3 border-t", children: actions.map((action, ix) => ((0, jsx_runtime_1.jsx)("button", { className: 'text-white p-2 w-full cursor-pointer ' +
                                (ix === actions.length - 1
                                    ? actionColors.primary
                                    : actionColors.secondary), onClick: action.onClick, children: action.label }, ix))) })] })] }));
};
exports.Modal = Modal;
