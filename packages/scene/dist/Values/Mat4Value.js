import { Mat4, mat4Equals, mat4Mix, mat4Parse } from './Internal/Mat4.js';
export const Mat4Value = {
    name: 'mat4',
    creator: () => new Mat4(),
    deserialize: (value) => typeof value === 'string' ? mat4Parse(value) : new Mat4(value),
    serialize: (value) => value.elements,
    lerp: (start, end, t) => mat4Mix(start, end, t),
    equals: (a, b) => mat4Equals(a, b),
    clone: (value) => value.clone()
};
//# sourceMappingURL=Mat4Value.js.map