export function mat2SetColumn3(m: any, columnIndex: any, column: any, result?: Mat2): Mat2;
export function mat2SetRow3(m: any, rowIndex: any, row: any, result?: Mat2): Mat2;
export function column3ToMat2(a: any, b: any, c: any, result?: Mat2): Mat2;
export function mat2Equals(a: any, b: any, tolerance?: number): boolean;
export function mat2Add(a: any, b: any, result?: Mat2): Mat2;
export function mat2Subtract(a: any, b: any, result?: Mat2): Mat2;
export function mat2MultiplyByScalar(a: any, b: any, result?: Mat2): Mat2;
export function mat2Negate(a: any, result?: Mat2): Mat2;
export function mat2Multiply(a: any, b: any, result?: Mat2): void;
export function mat2Determinant(m: any): void;
export function mat2Transpose(m: any, result?: Mat2): Mat2;
export function mat2Inverse(m: any, result?: Mat2): void;
export function mat2Mix(a: any, b: any, t: any, result?: Mat2): Mat2;
export function mat2FromArray(array: any, offset?: number, result?: Mat2): Mat2;
export function mat2ToArray(a: any, array: any, offset?: number): void;
export function mat2ToString(a: any): string;
export function mat2Parse(text: any, result?: Mat2): Mat2;
export function scale2ToMat2(s: any, result?: Mat2): Mat2;
export function mat2ToScale2(m: any, result?: Vec2): Vec2;
export function mat3ToMat2(a: any, result?: Mat2): Mat2;
export class Mat2 {
    constructor(elements?: number[]);
    elements: number[];
    clone(result?: Mat2): Mat2;
    set(elements: any): Mat2;
}
import { Vec2 } from './Vec2.js';
