export type Vec2JSON = number[];
export declare class Vec2 {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    clone(result?: Vec2): Vec2;
    set(x: number, y: number): this;
}
export declare function vec2Equals(a: Vec2, b: Vec2, tolerance?: number): boolean;
export declare function vec2Add(a: Vec2, b: Vec2, result?: Vec2): Vec2;
export declare function vec2Subtract(a: Vec2, b: Vec2, result?: Vec2): Vec2;
export declare function vec2MultiplyByScalar(a: Vec2, b: number, result?: Vec2): Vec2;
export declare function vec2Negate(a: Vec2, result?: Vec2): Vec2;
export declare function vec2Length(a: Vec2): number;
export declare function vec2Normalize(a: Vec2, result?: Vec2): Vec2;
export declare function vec2Dot(a: Vec2, b: Vec2): number;
export declare function vec2Mix(a: Vec2, b: Vec2, t: number, result?: Vec2): Vec2;
export declare function vec2FromArray(array: Float32Array | number[], offset?: number, result?: Vec2): Vec2;
export declare function vec2ToArray(a: Vec2, array: Float32Array | number[], offset?: number): void;
export declare function vec2ToString(a: Vec2): string;
export declare function vec2Parse(text: string, result?: Vec2): Vec2;
