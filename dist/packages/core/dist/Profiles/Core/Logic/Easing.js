import { EasingFunctions, EasingModes } from '../../../Easing.js';
import { makeFunctionNodeDefinition, NodeCategory } from '../../../Nodes/NodeDefinitions.js';
export const Easing = makeFunctionNodeDefinition({
    typeName: 'math/easing',
    category: NodeCategory.Logic,
    label: 'Easing',
    in: {
        easingFunction: {
            valueType: 'string',
            name: 'easingFunction',
            defaultValue: 'linear',
            options: Object.keys(EasingFunctions)
        },
        easingMode: {
            valueType: 'string',
            name: 'easingMode',
            defaultValue: 'inOut',
            options: Object.keys(EasingModes)
        },
        t: 'float'
    },
    out: {
        t: 'float'
    },
    exec: ({ read, write }) => {
        const easingFunction = EasingFunctions[read('easingFunction')];
        const easingMode = EasingModes[read('easingMode')];
        const easing = easingMode(easingFunction);
        const inputT = read('t');
        write('t', easing(inputT));
    }
});
//# sourceMappingURL=Easing.js.map
//# sourceMappingURL=Easing.js.map