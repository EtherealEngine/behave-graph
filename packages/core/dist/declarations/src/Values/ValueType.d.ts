export declare class ValueType<TValue = any, TJson = any> {
    readonly name: string;
    readonly creator: () => TValue;
    readonly deserialize: (value: TJson) => TValue;
    readonly serialize: (value: TValue) => TJson;
    readonly lerp: (start: TValue, end: TValue, t: number) => TValue;
    constructor(name: string, creator: () => TValue, deserialize: (value: TJson) => TValue, serialize: (value: TValue) => TJson, lerp: (start: TValue, end: TValue, t: number) => TValue);
}
