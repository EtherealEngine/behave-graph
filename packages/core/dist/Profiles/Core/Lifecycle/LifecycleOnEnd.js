import { Assert } from '../../../Diagnostics/Assert.js';
import { makeEventNodeDefinition, NodeCategory } from '../../../Nodes/NodeDefinitions.js';
const makeInitialState = () => ({
    onEndEvent: undefined
});
export const LifecycleOnEnd = makeEventNodeDefinition({
    typeName: 'flow/lifecycle/onEnd',
    label: 'On End',
    category: NodeCategory.Event,
    in: {},
    out: {
        flow: 'flow'
    },
    initialState: makeInitialState(),
    init: ({ state, commit, graph: { getDependency } }) => {
        Assert.mustBeTrue(state.onEndEvent === undefined);
        const onEndEvent = () => {
            commit('flow');
        };
        const lifecycleEventEmitter = getDependency('ILifecycleEventEmitter');
        lifecycleEventEmitter?.endEvent.addListener(onEndEvent);
        return {
            onEndEvent
        };
    },
    dispose: ({ state: { onEndEvent }, graph: { getDependency } }) => {
        Assert.mustBeTrue(onEndEvent !== undefined);
        const lifecycleEventEmitter = getDependency('ILifecycleEventEmitter');
        if (onEndEvent)
            lifecycleEventEmitter?.endEvent.removeListener(onEndEvent);
        return {};
    }
});
//# sourceMappingURL=LifecycleOnEnd.js.map