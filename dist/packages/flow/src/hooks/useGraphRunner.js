import { Engine, readGraphFromJSON } from '@behave-graph/core';
import { useCallback, useEffect, useState } from 'react';
/** Runs the behavior graph by building the execution
 * engine and triggering start on the lifecycle event emitter.
 */
export const useGraphRunner = ({ graphJson, autoRun = false, registry }) => {
    const [engine, setEngine] = useState();
    const [run, setRun] = useState(autoRun);
    const play = useCallback(() => {
        setRun(true);
    }, []);
    const pause = useCallback(() => {
        setRun(false);
    }, []);
    const togglePlay = useCallback(() => {
        setRun((existing) => !existing);
    }, []);
    useEffect(() => {
        if (!graphJson || !registry.values || !run || !registry.dependencies)
            return;
        let graphNodes;
        try {
            graphNodes = readGraphFromJSON({
                graphJson,
                registry
            }).nodes;
        }
        catch (e) {
            console.error(e);
            return;
        }
        const engine = new Engine(graphNodes);
        setEngine(engine);
        return () => {
            engine.dispose();
            setEngine(undefined);
        };
    }, [graphJson, registry.values, registry.nodes, run, registry.dependencies]);
    useEffect(() => {
        if (!engine || !run)
            return;
        engine.executeAllSync();
        let timeout;
        const eventEmitter = registry.dependencies
            ?.ILifecycleEventEmitter;
        const onTick = async () => {
            eventEmitter.tickEvent.emit();
            // eslint-disable-next-line no-await-in-loop
            await engine.executeAllAsync(500);
            timeout = window.setTimeout(onTick, 50);
        };
        (async () => {
            if (eventEmitter.startEvent.listenerCount > 0) {
                eventEmitter.startEvent.emit();
                await engine.executeAllAsync(5);
            }
            else {
                console.log('has no listener count');
            }
            onTick();
        })();
        return () => {
            window.clearTimeout(timeout);
        };
    }, [engine, registry.dependencies?.ILifecycleEventEmitter, run]);
    return {
        engine,
        playing: run,
        play,
        togglePlay,
        pause
    };
};
//# sourceMappingURL=useGraphRunner.js.map