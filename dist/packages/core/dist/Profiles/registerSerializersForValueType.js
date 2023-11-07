import { makeInNOutFunctionDesc } from '../Nodes/FunctionNode.js';
import { toCamelCase } from '../toCamelCase.js';
export function getStringConversionsForValueType({ values, valueTypeName }) {
    const camelCaseValueTypeName = toCamelCase(valueTypeName);
    return [
        makeInNOutFunctionDesc({
            name: `math/to${camelCaseValueTypeName}/string`,
            label: `To ${camelCaseValueTypeName}`,
            in: ['string'],
            out: valueTypeName,
            exec: (a) => values[valueTypeName]?.deserialize(a)
        }),
        makeInNOutFunctionDesc({
            name: `math/toString/${valueTypeName}`,
            label: 'To String',
            in: [valueTypeName],
            out: 'string',
            exec: (a) => `${values[valueTypeName]?.serialize(a)}`
        })
    ];
}
//# sourceMappingURL=registerSerializersForValueType.js.map
//# sourceMappingURL=registerSerializersForValueType.js.map