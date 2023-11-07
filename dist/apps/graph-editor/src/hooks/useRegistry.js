import { DefaultLogger, ManualLifecycleEventEmitter, registerCoreProfile } from '@behave-graph/core';
import { DummyScene, registerSceneProfile } from '@behave-graph/scene';
import { useMemo } from 'react';
export const useRegistry = () => {
    return useMemo(() => registerSceneProfile(registerCoreProfile({
        values: {},
        nodes: {},
        dependencies: {
            ILogger: new DefaultLogger(),
            ILifecycleEventEmitter: new ManualLifecycleEventEmitter(),
            IScene: new DummyScene()
        }
    })), []);
};
//# sourceMappingURL=useRegistry.js.map