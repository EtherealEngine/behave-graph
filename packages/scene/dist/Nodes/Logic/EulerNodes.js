import { makeInNOutFunctionDesc } from '@behave-graph/core';
import { mat3ToEuler, mat4ToEuler, quatToEuler, Vec3, vec3Add, vec3Equals, vec3Mix, vec3MultiplyByScalar, vec3Negate, vec3Subtract } from '../../Values/Internal/Vec3.js';
export const Constant = makeInNOutFunctionDesc({
    name: 'math/euler/constant',
    label: 'Euler',
    in: ['euler'],
    out: 'euler',
    exec: (a) => a
});
export const Create = makeInNOutFunctionDesc({
    name: 'math/float/convert/toEuler',
    label: 'Float to Euler',
    in: [{ x: 'float' }, { y: 'float' }, { z: 'float' }],
    out: 'euler',
    exec: (x, y, z) => new Vec3(x, y, z)
});
export const Elements = makeInNOutFunctionDesc({
    name: 'math/euler/convert/toFloat',
    label: 'Euler to Float',
    in: ['euler'],
    out: [{ x: 'float' }, { y: 'float' }, { z: 'float' }],
    exec: (a) => {
        return { x: a.x, y: a.y, z: a.z };
    }
});
export const Add = makeInNOutFunctionDesc({
    name: 'math/euler/basic/add',
    label: '+',
    in: ['euler', 'euler'],
    out: 'euler',
    exec: vec3Add
});
export const Subtract = makeInNOutFunctionDesc({
    name: 'math/euler/basic/subtract',
    label: '-',
    in: ['euler', 'euler'],
    out: 'euler',
    exec: vec3Subtract
});
export const Negate = makeInNOutFunctionDesc({
    name: 'math/euler/negate',
    label: '-',
    in: ['euler'],
    out: 'euler',
    exec: vec3Negate
});
export const Scale = makeInNOutFunctionDesc({
    name: 'math/euler/basic/scale',
    label: '×',
    in: ['euler', 'float'],
    out: 'euler',
    exec: vec3MultiplyByScalar
});
export const Mix = makeInNOutFunctionDesc({
    name: 'math/euler/basic/mix',
    label: '÷',
    in: [{ a: 'euler' }, { b: 'euler' }, { t: 'float' }],
    out: 'euler',
    exec: (a, b, t) => {
        console.warn('TODO: this is not shortest path');
        return vec3Mix(a, b, t);
    }
});
export const Mat3ToEuler = makeInNOutFunctionDesc({
    name: 'math/mat3/convert/toEuler',
    label: 'To Euler',
    in: ['mat3'],
    out: 'euler',
    exec: mat3ToEuler
});
export const Mat4ToEuler = makeInNOutFunctionDesc({
    name: 'math/mat4/convert/toEuler',
    label: 'To Euler',
    in: ['mat4'],
    out: 'euler',
    exec: mat4ToEuler
});
export const QuatToEuler = makeInNOutFunctionDesc({
    name: 'math/quat/convert/toEuler',
    label: 'To Euler',
    in: ['quat'],
    out: 'euler',
    exec: quatToEuler
});
export const Equal = makeInNOutFunctionDesc({
    name: 'math/euler/compare/equal',
    label: '=',
    in: [{ a: 'euler' }, { b: 'euler' }, { tolerance: 'float' }],
    out: 'boolean',
    exec: vec3Equals
});
//# sourceMappingURL=EulerNodes.js.map