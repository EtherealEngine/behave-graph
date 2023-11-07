import { ValidateFunction } from 'ajv';
export type IValidatorFactory = () => ValidateFunction;
export declare const makeValidate: (validatorFactory: IValidatorFactory) => import("@behave-graph/core").IFunctionNodeDefinition<{
    schema: string;
    data: string;
}, {
    result: string;
    errors: string;
}, import("@behave-graph/core").NodeConfigurationDescription>;
