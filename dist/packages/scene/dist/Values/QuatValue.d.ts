export namespace QuatValue {
    const name: string;
    function creator(): Vec4;
    function deserialize(value: any): Vec4;
    function serialize(value: any): any[];
    function lerp(start: any, end: any, t: any): Vec4;
    function equals(a: any, b: any): boolean;
    function clone(value: any): any;
}
import { Vec4 } from './Internal/Vec4.js';
