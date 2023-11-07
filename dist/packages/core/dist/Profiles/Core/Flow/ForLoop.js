import { makeFlowNodeDefinition, NodeCategory } from '../../../Nodes/NodeDefinitions.js';
export const ForLoop = makeFlowNodeDefinition({
    typeName: 'flow/forLoop',
    category: NodeCategory.Flow,
    label: 'For Loop',
    in: {
        flow: 'flow',
        startIndex: 'integer',
        endIndex: 'integer'
    },
    out: {
        loopBody: 'flow',
        index: 'integer',
        completed: 'flow'
    },
    initialState: undefined,
    triggered: ({ read, write, commit }) => {
        const startIndex = read('startIndex');
        const endIndex = read('endIndex');
        const loopBodyIteration = (i) => {
            if (i < endIndex) {
                write('index', i);
                commit('loopBody', () => {
                    loopBodyIteration(i + BigInt(1));
                });
            }
            else {
                commit('completed');
            }
        };
        loopBodyIteration(startIndex);
    }
});
//# sourceMappingURL=ForLoop.js.map
//# sourceMappingURL=ForLoop.js.map