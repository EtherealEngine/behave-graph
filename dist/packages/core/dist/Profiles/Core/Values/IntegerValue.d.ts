export namespace IntegerValue {
    const name: string;
    function creator(): bigint;
    function deserialize(value: any): bigint;
    function serialize(value: any): any;
    function lerp(start: any, end: any, t: any): bigint;
    function equals(a: any, b: any): boolean;
    function clone(value: any): any;
}
