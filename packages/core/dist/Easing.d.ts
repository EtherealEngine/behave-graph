export type Easing = (t: number) => number;
export declare const EasingFunctions: {
    [name: string]: Easing;
};
export declare const EasingModes: {
    [name: string]: (easing: Easing) => Easing;
};
