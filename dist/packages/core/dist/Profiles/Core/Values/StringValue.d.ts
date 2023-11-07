export namespace StringValue {
    const name: string;
    function creator(): string;
    function deserialize(value: any): any;
    function serialize(value: any): any;
    function lerp(start: any, end: any, t: any): any;
    function equals(a: any, b: any): boolean;
    function clone(value: any): any;
}
