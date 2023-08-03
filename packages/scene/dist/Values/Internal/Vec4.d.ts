import { Mat3 } from './Mat3.js';
import { Mat4 } from './Mat4.js';
import { Vec3 } from './Vec3.js';
export type Vec4JSON = number[];
export declare class Vec4 {
    x: number;
    y: number;
    z: number;
    w: number;
    constructor(x?: number, y?: number, z?: number, w?: number);
    clone(result?: Vec4): Vec4;
    set(x: number, y: number, z: number, w: number): this;
}
export declare function vec4Equals(a: Vec4, b: Vec4, tolerance?: number): boolean;
export declare function vec4Add(a: Vec4, b: Vec4, result?: Vec4): Vec4;
export declare function vec4Subtract(a: Vec4, b: Vec4, result?: Vec4): Vec4;
export declare function vec4MultiplyByScalar(a: Vec4, b: number, result?: Vec4): Vec4;
export declare function vec4Negate(a: Vec4, result?: Vec4): Vec4;
export declare function vec4Length(a: Vec4): number;
export declare function vec4Normalize(a: Vec4, result?: Vec4): Vec4;
export declare function vec4Dot(a: Vec4, b: Vec4): number;
export declare function vec4Mix(a: Vec4, b: Vec4, t: number, result?: Vec4): Vec4;
export declare function vec4FromArray(array: Float32Array | number[], offset?: number, result?: Vec4): Vec4;
export declare function vec4ToArray(a: Vec4, array: Float32Array | number[], offset?: number): void;
export declare function vec4ToString(a: Vec4): string;
export declare function vec4Parse(text: string, result?: Vec4): Vec4;
export declare function quatConjugate(a: Vec4, result?: Vec4): Vec4;
export declare function quatMultiply(a: Vec4, b: Vec4, result?: Vec4): Vec4;
export declare function quatSlerp(a: Vec4, b: Vec4, t: number, result?: Vec4): Vec4;
/**
 * Calculate the exponential of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {quat} out
 */
export declare function quatExp(a: Vec4, result?: Vec4): Vec4;
export declare function quatLn(a: Vec4, result?: Vec4): Vec4;
export declare function quatPow(a: Vec4, b: number, result?: Vec4): Vec4;
export declare function eulerToQuat(euler: Vec3, result?: Vec4): Vec4;
export declare function angleAxisToQuat(angle: number, axis: Vec3, result?: Vec4): Vec4;
export declare function quatToAngleAxis(q: Vec4, result?: Vec3): [angle: number, axis: Vec3];
export declare function mat4ToQuat(m: Mat4, result?: Vec4): Vec4;
export declare function mat3ToQuat(m: Mat3, result?: Vec4): Vec4;
