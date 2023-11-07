import { makeFlowNodeDefinition, NodeCategory } from '../../../Nodes/NodeDefinitions.js';
export const Log = makeFlowNodeDefinition({
    typeName: 'debug/log',
    category: NodeCategory.Action,
    label: 'Debug Log',
    in: {
        flow: 'flow',
        text: 'string',
        severity: {
            valueType: 'string',
            defaultValue: 'info',
            choices: ['verbose', 'info', 'warning', 'error'],
            label: 'severity'
        }
    },
    out: { flow: 'flow' },
    initialState: undefined,
    triggered: ({ read, commit, graph: { getDependency } }) => {
        const logger = getDependency('ILogger');
        logger?.log(read('severity'), read('text'));
        commit('flow');
    }
});
//# sourceMappingURL=DebugLog.js.map