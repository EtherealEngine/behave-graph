export namespace EasingFunctions {
    function linear(t: any): any;
    function quadratic(t: any): number;
    function cubic(t: any): number;
    function quartric(t: any): number;
    function quintic(t: any): number;
    function sine(t: any): number;
    function exponential(t: any): number;
    function circle(t: any): number;
    function back(t: any): number;
    function elastic(t: any): number;
    function bounce(t: any): number;
}
export namespace EasingModes {
    export function _in(easing: any): any;
    export { _in as in };
    export function out(easing: any): (t: any) => number;
    export function inOut(easing: any): (t: any) => number;
}
