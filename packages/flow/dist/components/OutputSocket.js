import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import { Handle, Position, useReactFlow } from 'reactflow';
import { colors, valueTypeColorMap } from '../util/colors.js';
import { isValidConnection } from '../util/isValidConnection.js';
export default function OutputSocket({ specJSON, connected, valueType, name }) {
    const instance = useReactFlow();
    const isFlowSocket = valueType === 'flow';
    let colorName = valueTypeColorMap[valueType];
    if (colorName === undefined) {
        colorName = 'red';
    }
    // @ts-ignore
    const [backgroundColor, borderColor] = colors[colorName];
    const showName = isFlowSocket === false || name !== 'flow';
    return (_jsxs("div", { className: "flex grow items-center justify-end h-7", children: [showName && _jsx("div", { className: "capitalize", children: name }), isFlowSocket && (_jsx(FontAwesomeIcon, { icon: faCaretRight, color: "#ffffff", size: "lg", className: "ml-1" })), _jsx(Handle, { id: name, type: "source", position: Position.Right, className: cx(borderColor, connected ? backgroundColor : 'bg-gray-800'), isValidConnection: (connection) => isValidConnection(connection, instance, specJSON) })] }));
}
//# sourceMappingURL=OutputSocket.js.map