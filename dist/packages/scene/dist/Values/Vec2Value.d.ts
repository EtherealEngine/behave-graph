export namespace Vec2Value {
    const name: string;
    function creator(): Vec2;
    function deserialize(value: any): Vec2;
    function serialize(value: any): any[];
    function lerp(start: any, end: any, t: any): Vec2;
    function equals(a: any, b: any): boolean;
    function clone(value: any): any;
}
import { Vec2 } from './Internal/Vec2.js';
