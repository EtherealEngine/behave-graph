export namespace Mat4Value {
    const name: string;
    function creator(): Mat4;
    function deserialize(value: any): Mat4;
    function serialize(value: any): any;
    function lerp(start: any, end: any, t: any): Mat4;
    function equals(a: any, b: any): boolean;
    function clone(value: any): any;
}
import { Mat4 } from './Internal/Mat4.js';
