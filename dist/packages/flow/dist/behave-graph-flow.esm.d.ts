export function AutoSizeInput(_ref: any): React$1.FunctionComponentElement<{
    children?: React$1.ReactNode;
}>;
export function ClearModal(_ref: any): React$1.FunctionComponentElement<any>;
export function Flow(_ref: any): React$1.DetailedReactHTMLElement<React$1.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export function HelpModal(_ref: any): React$1.FunctionComponentElement<any>;
export function LoadModal(_ref: any): React$1.FunctionComponentElement<any>;
export function Modal(_ref: any): React$1.FunctionComponentElement<{
    children?: React$1.ReactNode;
}> | null;
export function Node(_ref: any): React$1.FunctionComponentElement<any>;
export function SaveModal(_ref: any): React$1.FunctionComponentElement<any>;
export function autoLayout(nodes: any, edges: any): void;
export function behaveToFlow(graph: any): any[][];
export function calculateNewEdge(originNode: any, destinationNodeType: any, destinationNodeId: any, connection: any): {
    id: string;
    source: any;
    sourceHandle: any;
    target: any;
    targetHandle: any;
};
export namespace categoryColorMap {
    const Event: string;
    const Logic: string;
    const Variable: string;
    const Query: string;
    const Action: string;
    const Flow: string;
    const Time: string;
    const None: string;
}
export namespace colors {
    const red: string[];
    const green: string[];
    const lime: string[];
    const purple: string[];
    const blue: string[];
    const gray: string[];
    const white: string[];
}
export var customNodeTypes: any;
export function flowToBehave(nodes: any, edges: any): {
    nodes: never[];
    variables: never[];
    customEvents: never[];
};
export function getNodePickerFilters(nodes: any, params: any): {
    handleType: string;
    valueType: any;
} | undefined;
export function getNodeSpecJSON(): any;
export function getSocketsByNodeTypeAndHandleType(nodes: any, nodeType: any, handleType: any): any;
export function hasPositionMetaData(graph: any): any;
export function isHandleConnected(edges: any, nodeId: any, handleId: any, type: any): any;
export function isValidConnection(connection: any, instance: any): boolean;
export function sleep(durationInSeconds: any): Promise<any>;
export function useChangeNodeData(id: any): (key: any, value: any) => void;
export function useOnPressKey(key: any, callback: any): void;
export namespace valueTypeColorMap {
    const flow: string;
    const number: string;
    const float: string;
    const integer: string;
    const boolean: string;
    const string: string;
}
import React$1 from 'react';
