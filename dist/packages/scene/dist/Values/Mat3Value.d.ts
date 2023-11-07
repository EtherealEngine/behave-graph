export namespace Mat3Value {
    const name: string;
    function creator(): Mat3;
    function deserialize(value: any): Mat3;
    function serialize(value: any): any;
    function lerp(start: any, end: any, t: any): Mat3;
    function equals(a: any, b: any): boolean;
    function clone(value: any): any;
}
import { Mat3 } from './Internal/Mat3.js';
