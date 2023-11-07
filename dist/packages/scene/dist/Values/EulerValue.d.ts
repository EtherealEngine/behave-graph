export namespace EulerValue {
    const name: string;
    function creator(): Vec3;
    function deserialize(value: any): Vec3;
    function serialize(value: any): any[];
    function lerp(start: any, end: any, t: any): Vec3;
    function equals(a: any, b: any): boolean;
    function clone(value: any): any;
}
import { Vec3 } from './Internal/Vec3.js';
