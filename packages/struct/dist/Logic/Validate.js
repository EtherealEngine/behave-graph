import { makeFunctionNodeDefinition, NodeCategory } from '@behave-graph/core';
export const makeValidate = (validatorFactory) => {
    return makeFunctionNodeDefinition({
        typeName: 'logic/validate/object',
        category: NodeCategory.Logic,
        label: 'Validate',
        in: {
            schema: 'object',
            data: 'object'
        },
        out: {
            result: 'boolean',
            errors: 'list'
        },
        exec: ({ read, write }) => {
            const schema = read('schema');
            const data = read('data');
            const validator = validatorFactory();
            const result = validator(schema, data);
            write('result', result);
            write('errors', validator.errors || []);
        }
    });
};
//# sourceMappingURL=Validate.js.map