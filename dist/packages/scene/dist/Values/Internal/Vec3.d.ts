export function vec3Equals(a: any, b: any, tolerance?: number): boolean;
export function vec3Add(a: any, b: any, result?: Vec3): Vec3;
export function vec3Subtract(a: any, b: any, result?: Vec3): Vec3;
export function vec3MultiplyByScalar(a: any, b: any, result?: Vec3): Vec3;
export function vec3Negate(a: any, result?: Vec3): Vec3;
export function vec3Length(a: any): number;
export function vec3Normalize(a: any, result?: Vec3): Vec3;
export function vec3Dot(a: any, b: any): number;
export function vec3Cross(a: any, b: any, result?: Vec3): Vec3;
export function vec3Mix(a: any, b: any, t: any, result?: Vec3): Vec3;
export function vec3FromArray(array: any, offset?: number, result?: Vec3): Vec3;
export function vec3ToArray(a: any, array: any, offset?: number): void;
export function vec3ToString(a: any): string;
export function vec3Parse(text: any, result?: Vec3): Vec3;
export function hslToRGB(hsl: any, result?: Vec3): Vec3;
export function rgbToHSL(rgb: any, result?: Vec3): Vec3;
export function hexToRGB(hex: any, result?: Vec3): Vec3;
export function rgbToHex(rgb: any): number;
export function mat3ToEuler(m: any, result?: Vec3): Vec3;
export function mat4ToEuler(m: any, result?: Vec3): Vec3;
export function quatToEuler(q: any, result?: Vec3): Vec3;
export class Vec3 {
    constructor(x?: number, y?: number, z?: number);
    x: number;
    y: number;
    z: number;
    clone(result?: Vec3): Vec3;
    set(x: any, y: any, z: any): Vec3;
}
