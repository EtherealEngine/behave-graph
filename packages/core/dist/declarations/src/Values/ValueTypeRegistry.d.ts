import { ValueType } from "./ValueType.js";
export declare class ValueTypeRegistry {
    private readonly valueTypeNameToValueType;
    register(...valueTypes: Array<ValueType>): void;
    get(valueTypeName: string): ValueType;
    getAllNames(): string[];
}
