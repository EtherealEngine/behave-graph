import { makeInNOutFunctionDesc, NodeCategory } from '@behave-graph/core';
import { assocPath, equals, mergeDeepRight, path } from 'rambdax';
export const Constant = makeInNOutFunctionDesc({
    name: 'logic/object',
    category: NodeCategory.Logic,
    label: 'Object',
    in: ['object'],
    out: 'object',
    exec: (a) => a
});
export const Equal = makeInNOutFunctionDesc({
    name: 'logic/equal/object',
    category: NodeCategory.Logic,
    label: '=',
    in: ['object', 'object'],
    out: 'boolean',
    exec: (a, b) => equals(a, b)
});
export const AssocPath = makeInNOutFunctionDesc({
    name: 'logic/assocPath/object',
    category: NodeCategory.Logic,
    label: 'Assoc Path',
    in: [
        {
            path: 'string'
        },
        {
            newValue: 'object'
        },
        {
            obj: 'object'
        }
    ],
    out: 'object',
    exec: (pathStr, newValue, obj) => {
        const path = pathStr.split('.');
        return assocPath(path, newValue, obj);
    }
});
export const MergeDeep = makeInNOutFunctionDesc({
    name: 'logic/mergeDeep/object',
    category: NodeCategory.Logic,
    label: 'Merge Deep',
    in: ['object', 'object'],
    out: 'object',
    exec: (a, b) => mergeDeepRight(a, b)
});
export const Path = makeInNOutFunctionDesc({
    name: 'logic/path/object',
    category: NodeCategory.Logic,
    label: 'Path',
    in: [
        {
            pathToSearch: 'string'
        },
        {
            obj: 'object'
        }
    ],
    out: 'object',
    exec: (pathToSearch, obj) => path(pathToSearch, obj)
});
export const PathAsString = makeInNOutFunctionDesc({
    name: 'logic/path/string',
    category: NodeCategory.Logic,
    label: 'Path',
    in: [
        {
            pathToSearch: 'string'
        },
        {
            obj: 'object'
        }
    ],
    out: 'string',
    exec: (pathToSearch, obj) => path(pathToSearch, obj)
});
export const PathAsInteger = makeInNOutFunctionDesc({
    name: 'logic/path/integer',
    category: NodeCategory.Logic,
    label: 'Path',
    in: [
        {
            pathToSearch: 'string'
        },
        {
            obj: 'object'
        }
    ],
    out: 'integer',
    exec: (pathToSearch, obj) => path(pathToSearch, obj)
});
//# sourceMappingURL=ObjectNodes.js.map