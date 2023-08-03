import { makeInNOutFunctionDesc } from '../../../Nodes/FunctionNode.js';
export const Constant = makeInNOutFunctionDesc({
    name: 'logic/string',
    label: 'String',
    in: ['string'],
    out: 'string',
    exec: (a) => a
});
export const Concat = makeInNOutFunctionDesc({
    name: 'logic/concat/string',
    label: 'Concat',
    in: ['string', 'string'],
    out: 'string',
    exec: (a, b) => a.concat(b)
});
export const Includes = makeInNOutFunctionDesc({
    name: 'logic/includes/string',
    label: 'Includes',
    in: ['string', 'string'],
    out: 'boolean',
    exec: (a, b) => a.includes(b)
});
export const Length = makeInNOutFunctionDesc({
    name: 'logic/length/string',
    label: 'Length',
    in: ['string'],
    out: 'integer',
    exec: (a) => BigInt(a.length)
});
export const Equal = makeInNOutFunctionDesc({
    name: 'math/equal/string',
    label: '=',
    in: ['string', 'string'],
    out: 'boolean',
    exec: (a, b) => a === b
});
//# sourceMappingURL=StringNodes.js.map