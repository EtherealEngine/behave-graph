export function vec4Equals(a: any, b: any, tolerance?: number): boolean;
export function vec4Add(a: any, b: any, result?: Vec4): Vec4;
export function vec4Subtract(a: any, b: any, result?: Vec4): Vec4;
export function vec4MultiplyByScalar(a: any, b: any, result?: Vec4): Vec4;
export function vec4Negate(a: any, result?: Vec4): Vec4;
export function vec4Length(a: any): number;
export function vec4Normalize(a: any, result?: Vec4): Vec4;
export function vec4Dot(a: any, b: any): number;
export function vec4Mix(a: any, b: any, t: any, result?: Vec4): Vec4;
export function vec4FromArray(array: any, offset?: number, result?: Vec4): Vec4;
export function vec4ToArray(a: any, array: any, offset?: number): void;
export function vec4ToString(a: any): string;
export function vec4Parse(text: any, result?: Vec4): Vec4;
export function quatConjugate(a: any, result?: Vec4): Vec4;
export function quatMultiply(a: any, b: any, result?: Vec4): Vec4;
export function quatSlerp(a: any, b: any, t: any, result?: Vec4): any;
/**
 * Calculate the exponential of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {quat} out
 */
export function quatExp(a: ReadonlyQuat, result?: Vec4): quat;
export function quatLn(a: any, result?: Vec4): Vec4;
export function quatPow(a: any, b: any, result?: Vec4): Vec4;
export function eulerToQuat(euler: any, result?: Vec4): Vec4;
export function angleAxisToQuat(angle: any, axis: any, result?: Vec4): Vec4;
export function quatToAngleAxis(q: any, result?: Vec3): (number | Vec3)[];
export function mat4ToQuat(m: any, result?: Vec4): Vec4;
export function mat3ToQuat(m: any, result?: Vec4): Vec4;
export class Vec4 {
    constructor(x?: number, y?: number, z?: number, w?: number);
    x: number;
    y: number;
    z: number;
    w: number;
    clone(result?: Vec4): Vec4;
    set(x: any, y: any, z: any, w: any): Vec4;
}
import { Vec3 } from './Vec3.js';
