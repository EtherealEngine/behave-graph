import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import { Handle, Position, useReactFlow } from 'reactflow';
import { colors, valueTypeColorMap } from '../util/colors.js';
import { isValidConnection } from '../util/isValidConnection.js';
import { AutoSizeInput } from './AutoSizeInput.js';
const InputFieldForValue = ({ choices, value, defaultValue, onChange, name, valueType }) => {
    const showChoices = choices?.length;
    const inputVal = String(value) ?? defaultValue ?? '';
    if (showChoices)
        return (_jsx("select", { className: "bg-gray-600 disabled:bg-gray-700 py-1 px-2 nodrag", value: value ?? defaultValue ?? '', onChange: (e) => onChange(name, e.currentTarget.value), children: _jsx(_Fragment, { children: choices.map((choice) => (_jsx("option", { value: choice.value, children: choice.text }, choice.text))) }) }));
    return (_jsxs(_Fragment, { children: [valueType === 'string' && (_jsx(AutoSizeInput, { type: "text", className: "bg-gray-600 disabled:bg-gray-700 py-1 px-2 nodrag", value: inputVal, onChange: (e) => onChange(name, e.currentTarget.value) })), valueType === 'number' && (_jsx(AutoSizeInput, { type: "number", className: " bg-gray-600 disabled:bg-gray-700 py-1 px-2 nodrag", value: inputVal, onChange: (e) => onChange(name, e.currentTarget.value) })), valueType === 'float' && (_jsx(AutoSizeInput, { type: "number", className: " bg-gray-600 disabled:bg-gray-700 py-1 px-2 nodrag", value: inputVal, onChange: (e) => onChange(name, e.currentTarget.value) })), valueType === 'integer' && (_jsx(AutoSizeInput, { type: "number", className: " bg-gray-600 disabled:bg-gray-700 py-1 px-2 nodrag", value: inputVal, onChange: (e) => onChange(name, e.currentTarget.value) })), valueType === 'boolean' && (_jsx("input", { type: "checkbox", className: " bg-gray-600 disabled:bg-gray-700 py-1 px-2 nodrag", value: inputVal, onChange: (e) => onChange(name, e.currentTarget.checked) }))] }));
};
const InputSocket = ({ connected, specGenerator, ...rest }) => {
    const { value, name, valueType, defaultValue, choices } = rest;
    const instance = useReactFlow();
    const isFlowSocket = valueType === 'flow';
    let colorName = valueTypeColorMap[valueType];
    if (colorName === undefined) {
        colorName = 'red';
    }
    const inputVal = String(value) ?? defaultValue ?? '';
    // @ts-ignore
    const [backgroundColor, borderColor] = colors[colorName];
    const showName = isFlowSocket === false || name !== 'flow';
    return (_jsxs("div", { className: "flex grow items-center justify-start h-7", children: [isFlowSocket && (_jsx(FontAwesomeIcon, { icon: faCaretRight, color: "#ffffff", size: "lg" })), showName && _jsx("div", { className: "capitalize mr-2", children: name }), !isFlowSocket && !connected && _jsx(InputFieldForValue, { ...rest }), _jsx(Handle, { id: name, type: "target", position: Position.Left, className: cx(borderColor, connected ? backgroundColor : 'bg-gray-800'), isValidConnection: (connection) => isValidConnection(connection, instance, specGenerator) })] }));
};
export default InputSocket;
//# sourceMappingURL=InputSocket.js.map