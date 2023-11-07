import { Assert } from '../../../Diagnostics/Assert.js';
import { makeEventNodeDefinition, NodeCategory } from '../../../Nodes/NodeDefinitions.js';
const makeInitialState = () => ({
    onTickEvent: undefined
});
export const LifecycleOnTick = makeEventNodeDefinition({
    typeName: 'lifecycle/onTick',
    label: 'On Tick',
    category: NodeCategory.Event,
    in: {},
    out: {
        flow: 'flow',
        deltaSeconds: 'float'
    },
    initialState: makeInitialState(),
    init: ({ state, commit, write, graph: { getDependency } }) => {
        Assert.mustBeTrue(state.onTickEvent === undefined);
        let lastTickTime = Date.now();
        const onTickEvent = () => {
            const currentTime = Date.now();
            const deltaSeconds = (currentTime - lastTickTime) * 0.001;
            write('deltaSeconds', deltaSeconds);
            commit('flow');
            lastTickTime = currentTime;
        };
        const lifecycleEventEmitter = getDependency('ILifecycleEventEmitter');
        lifecycleEventEmitter?.tickEvent.addListener(onTickEvent);
        return {
            onTickEvent
        };
    },
    dispose: ({ state: { onTickEvent }, graph: { getDependency } }) => {
        Assert.mustBeTrue(onTickEvent !== undefined);
        const lifecycleEventEmitter = getDependency('ILifecycleEventEmitter');
        if (onTickEvent)
            lifecycleEventEmitter?.tickEvent.removeListener(onTickEvent);
        return {};
    }
});
//# sourceMappingURL=LifecycleOnTick.js.map
//# sourceMappingURL=LifecycleOnTick.js.map