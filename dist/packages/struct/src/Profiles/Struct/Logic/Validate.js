import { FunctionDesc } from '@behave-graph/core';
export const makeValidate = (validatorFactory) => {
    return new FunctionDesc({
        name: 'logic/validate/object',
        category: 'Logic',
        label: 'Validate',
        helpDescription: `Validate data using passed schema. See [Ajv's validate](https://ajv.js.org/api.html#ajv-validate-schemaorref-object-string-data-any-boolean)`,
        in: [
            {
                schema: 'object'
            },
            {
                data: 'object'
            }
        ],
        out: [
            {
                result: 'boolean'
            },
            {
                errors: 'list'
            }
        ],
        exec: (schema, data) => {
            const validator = validatorFactory();
            const result = validator.validate(schema, data);
            return {
                result,
                errors: validator.errors || []
            };
        }
    });
};
//# sourceMappingURL=Validate.js.map