import { useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { calculateNewEdge } from '../util/calculateNewEdge.js';
import { getNodePickerFilters } from '../util/getPickerFilters.js';
const useNodePickFilters = ({ nodes, lastConnectStart, specJSON }) => {
    const [nodePickFilters, setNodePickFilters] = useState(getNodePickerFilters(nodes, lastConnectStart, specJSON));
    useEffect(() => {
        setNodePickFilters(getNodePickerFilters(nodes, lastConnectStart, specJSON));
    }, [nodes, lastConnectStart, specJSON]);
    return nodePickFilters;
};
export const useFlowHandlers = ({ onEdgesChange, onNodesChange, nodes, specJSON }) => {
    const [lastConnectStart, setLastConnectStart] = useState();
    const [nodePickerVisibility, setNodePickerVisibility] = useState();
    const onConnect = useCallback((connection) => {
        if (connection.source === null)
            return;
        if (connection.target === null)
            return;
        const newEdge = {
            id: uuidv4(),
            source: connection.source,
            target: connection.target,
            sourceHandle: connection.sourceHandle,
            targetHandle: connection.targetHandle
        };
        onEdgesChange([
            {
                type: 'add',
                item: newEdge
            }
        ]);
    }, [onEdgesChange]);
    const closeNodePicker = useCallback(() => {
        setLastConnectStart(undefined);
        setNodePickerVisibility(undefined);
    }, []);
    const handleAddNode = useCallback((nodeType, position) => {
        closeNodePicker();
        const newNode = {
            id: uuidv4(),
            type: nodeType,
            position,
            data: {}
        };
        onNodesChange([
            {
                type: 'add',
                item: newNode
            }
        ]);
        if (lastConnectStart === undefined)
            return;
        // add an edge if we started on a socket
        const originNode = nodes.find((node) => node.id === lastConnectStart.nodeId);
        if (originNode === undefined)
            return;
        if (!specJSON)
            return;
        onEdgesChange([
            {
                type: 'add',
                item: calculateNewEdge(originNode, nodeType, newNode.id, lastConnectStart, specJSON)
            }
        ]);
    }, [
        closeNodePicker,
        lastConnectStart,
        nodes,
        onEdgesChange,
        onNodesChange,
        specJSON
    ]);
    const handleStartConnect = useCallback((e, params) => {
        setLastConnectStart(params);
    }, []);
    const handleStopConnect = useCallback((e) => {
        const element = e.target;
        if (element.classList.contains('react-flow__pane')) {
            setNodePickerVisibility({ x: e.clientX, y: e.clientY });
        }
        else {
            setLastConnectStart(undefined);
        }
    }, []);
    const handlePaneClick = useCallback(() => closeNodePicker(), [closeNodePicker]);
    const handlePaneContextMenu = useCallback((e) => {
        e.preventDefault();
        setNodePickerVisibility({ x: e.clientX, y: e.clientY });
    }, []);
    const nodePickFilters = useNodePickFilters({
        nodes,
        lastConnectStart,
        specJSON
    });
    return {
        onConnect,
        handleStartConnect,
        handleStopConnect,
        handlePaneClick,
        handlePaneContextMenu,
        lastConnectStart,
        nodePickerVisibility,
        handleAddNode,
        closeNodePicker,
        nodePickFilters
    };
};
//# sourceMappingURL=useFlowHandlers.js.map