export function vec2Equals(a: any, b: any, tolerance?: number): boolean;
export function vec2Add(a: any, b: any, result?: Vec2): Vec2;
export function vec2Subtract(a: any, b: any, result?: Vec2): Vec2;
export function vec2MultiplyByScalar(a: any, b: any, result?: Vec2): Vec2;
export function vec2Negate(a: any, result?: Vec2): Vec2;
export function vec2Length(a: any): number;
export function vec2Normalize(a: any, result?: Vec2): Vec2;
export function vec2Dot(a: any, b: any): number;
export function vec2Mix(a: any, b: any, t: any, result?: Vec2): Vec2;
export function vec2FromArray(array: any, offset?: number, result?: Vec2): Vec2;
export function vec2ToArray(a: any, array: any, offset?: number): void;
export function vec2ToString(a: any): string;
export function vec2Parse(text: any, result?: Vec2): Vec2;
export class Vec2 {
    constructor(x?: number, y?: number);
    x: number;
    y: number;
    clone(result?: Vec2): Vec2;
    set(x: any, y: any): Vec2;
}
