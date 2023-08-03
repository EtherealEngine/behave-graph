import { NodeSpecJSON } from '@behave-graph/core';
import { Node, OnConnectStartParams } from 'reactflow';
import { NodePickerFilters } from '../components/NodePicker.js';
export declare const getNodePickerFilters: (nodes: Node[], params: OnConnectStartParams | undefined, specJSON: NodeSpecJSON[] | undefined) => NodePickerFilters | undefined;
