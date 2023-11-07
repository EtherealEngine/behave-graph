export namespace FloatValue {
    const name: string;
    function creator(): number;
    function deserialize(value: any): any;
    function serialize(value: any): any;
    function lerp(start: any, end: any, t: any): number;
    function equals(a: any, b: any): boolean;
    function clone(value: any): any;
}
