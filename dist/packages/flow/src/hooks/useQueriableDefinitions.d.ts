import { IQueryableRegistry } from '@behave-graph/core';
export declare const toQueryableDefinitions: <T>(definitionsMap: {
    [id: string]: T;
}) => IQueryableRegistry<T>;
export declare const useQueryableDefinitions: <T>(definitionsMap: {
    [id: string]: T;
}) => IQueryableRegistry<T>;
