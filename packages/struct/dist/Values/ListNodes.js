import { makeFunctionNodeDefinition, makeInNOutFunctionDesc, NodeCategory, sequence } from '@behave-graph/core';
import { concat, equals } from 'rambdax';
export const Constant = makeInNOutFunctionDesc({
    name: 'logic/list',
    category: NodeCategory.Logic,
    label: 'List',
    in: ['list'],
    out: 'list',
    exec: (a) => a
});
export const Equal = makeInNOutFunctionDesc({
    name: 'logic/equal/list',
    category: NodeCategory.Logic,
    label: '=',
    in: ['list', 'list'],
    out: 'boolean',
    exec: (a, b) => equals(a, b)
});
export const Concat = makeFunctionNodeDefinition({
    typeName: 'logic/concat/list',
    category: NodeCategory.Logic,
    configuration: {
        numInputs: {
            valueType: 'number',
            defaultValue: 2
        }
    },
    label: 'Concat',
    in: (_) => {
        const sockets = [];
        const componentName = (index) => {
            return {
                key: `list${index}`,
                valueType: 'list'
            };
        };
        for (const index of sequence(1, (_.numInputs ?? Concat.configuration?.numInputs.defaultValue) + 1)) {
            sockets.push({ ...componentName(index) });
        }
        return sockets;
    },
    out: {
        result: 'list'
    },
    exec: ({ read, write, configuration }) => {
        let listToConcat = [];
        for (const index of sequence(1, (configuration.numInputs ??
            Concat.configuration?.numInputs.defaultValue) + 1)) {
            const list = read(`componentName${index}`);
            listToConcat = concat(listToConcat, list);
        }
        write('result', listToConcat);
    }
});
//# sourceMappingURL=ListNodes.js.map