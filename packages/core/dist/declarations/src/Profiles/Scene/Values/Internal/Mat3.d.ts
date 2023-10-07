import { Mat4 } from "./Mat4.js";
import { Vec2 } from "./Vec2.js";
import { Vec3 } from "./Vec3.js";
import { Vec4 } from "./Vec4.js";
export type Mat3JSON = number[];
export declare class Mat3 {
    elements: number[];
    constructor(elements?: number[]);
    clone(result?: Mat3): Mat3;
    set(elements: number[]): this;
}
export declare function mat3SetColumn3(m: Mat3, columnIndex: number, column: Vec3, result?: Mat3): Mat3;
export declare function mat3SetRow3(m: Mat3, rowIndex: number, row: Vec3, result?: Mat3): Mat3;
export declare function column3ToMat3(a: Vec3, b: Vec3, c: Vec3, result?: Mat3): Mat3;
export declare function mat3Equals(a: Mat3, b: Mat3, tolerance?: number): boolean;
export declare function mat3Add(a: Mat3, b: Mat3, result?: Mat3): Mat3;
export declare function mat3Subtract(a: Mat3, b: Mat3, result?: Mat3): Mat3;
export declare function mat3MultiplyByScalar(a: Mat3, b: number, result?: Mat3): Mat3;
export declare function mat3Negate(a: Mat3, result?: Mat3): Mat3;
export declare function mat3Multiply(a: Mat3, b: Mat3, result?: Mat3): Mat3;
export declare function mat3Determinant(m: Mat3): number;
export declare function mat3Transpose(m: Mat3, result?: Mat3): Mat3;
export declare function mat3Inverse(m: Mat3, result?: Mat3): Mat3;
export declare function mat3Mix(a: Mat3, b: Mat3, t: number, result?: Mat3): Mat3;
export declare function mat3FromArray(array: Float32Array | number[], offset?: number, result?: Mat3): Mat3;
export declare function mat3ToArray(a: Mat3, array: Float32Array | number[], offset?: number): void;
export declare function mat3ToString(a: Mat3): string;
export declare function mat3Parse(text: string, result?: Mat3): Mat3;
export declare function eulerToMat3(euler: Vec3, result?: Mat3): Mat3;
export declare function quatToMat3(q: Vec4, result?: Mat3): Mat3;
export declare function scale2ToMat3(s: Vec2, result?: Mat3): Mat3;
export declare function mat3ToScale2(m: Mat4, result?: Vec2): Vec2;
export declare function translation2ToMat3(t: Vec2, result?: Mat3): Mat3;
export declare function mat3ToTranslation2(m: Mat3, result?: Vec2): Vec2;
export declare function scale3ToMat3(s: Vec3, result?: Mat3): Mat3;
export declare function mat3ToScale3(m: Mat4, result?: Vec3): Vec3;
export declare function mat4ToMat3(a: Mat4, result?: Mat3): Mat3;
