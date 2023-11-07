import { NodeSpecJSON } from '@behave-graph/core';
export type color = 'red' | 'green' | 'lime' | 'purple' | 'blue' | 'gray' | 'white';
export declare const colors: Record<color, [string, string, string]>;
export declare const valueTypeColorMap: Record<string, string>;
export declare const categoryColorMap: Record<NodeSpecJSON['category'], color>;
