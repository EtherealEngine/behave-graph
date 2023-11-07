import { Node, OnConnectStartParams } from 'reactflow';
import { NodePickerFilters } from '../components/NodePicker.js';
import { NodeSpecGenerator } from '../hooks/useNodeSpecGenerator.js';
export declare const getNodePickerFilters: (nodes: Node[], params: OnConnectStartParams | undefined, specGenerator: NodeSpecGenerator | undefined) => NodePickerFilters | undefined;
