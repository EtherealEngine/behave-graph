import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useOnPressKey } from '../../hooks/useOnPressKey.js';
export const Modal = ({ open = false, onClose, title, children, actions }) => {
    useOnPressKey('Escape', onClose);
    if (open === false)
        return null;
    const actionColors = {
        primary: 'bg-teal-400 hover:bg-teal-500',
        secondary: 'bg-gray-400 hover:bg-gray-500'
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "z-[19] fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full", onClick: onClose }), _jsxs("div", { className: "z-20 relative top-20 mx-auto border w-96 shadow-lg bg-white text-sm rounded-md", children: [_jsx("div", { className: "p-3 border-b", children: _jsx("h2", { className: "text-lg text-center font-bold", children: title }) }), _jsx("div", { className: "p-3", children: children }), _jsx("div", { className: "flex gap-3 p-3 border-t", children: actions.map((action, ix) => (_jsx("button", { className: 'text-white p-2 w-full cursor-pointer ' +
                                (ix === actions.length - 1
                                    ? actionColors.primary
                                    : actionColors.secondary), onClick: action.onClick, children: action.label }, ix))) })] })] }));
};
//# sourceMappingURL=Modal.js.map