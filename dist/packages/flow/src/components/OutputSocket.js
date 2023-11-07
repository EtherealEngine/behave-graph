import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import React from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';
import { colors, valueTypeColorMap } from '../util/colors.js';
import { isValidConnection } from '../util/isValidConnection.js';
export default function OutputSocket({ specGenerator, connected, valueType, name }) {
    const instance = useReactFlow();
    const isFlowSocket = valueType === 'flow';
    let colorName = valueTypeColorMap[valueType];
    if (colorName === undefined) {
        colorName = 'red';
    }
    // @ts-ignore
    const [backgroundColor, borderColor] = colors[colorName];
    const showName = isFlowSocket === false || name !== 'flow';
    return (<div className="flex grow items-center justify-end h-7">
      {showName && <div className="capitalize">{name}</div>}
      {isFlowSocket && (<FontAwesomeIcon icon={faCaretRight} color="#ffffff" size="lg" className="ml-1"/>)}

      <Handle id={name} type="source" position={Position.Right} className={cx(borderColor, connected ? backgroundColor : 'bg-gray-800')} isValidConnection={(connection) => isValidConnection(connection, instance, specGenerator)}/>
    </div>);
}
//# sourceMappingURL=OutputSocket.js.map