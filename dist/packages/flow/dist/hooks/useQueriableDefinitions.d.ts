export function toQueryableDefinitions(definitionsMap: any): {
    get: (id: any) => any;
    getAll: () => any[];
    getAllNames: () => string[];
    contains: (id: any) => boolean;
};
export function useQueryableDefinitions(definitionsMap: any): {
    get: (id: any) => any;
    getAll: () => any[];
    getAllNames: () => string[];
    contains: (id: any) => boolean;
};
