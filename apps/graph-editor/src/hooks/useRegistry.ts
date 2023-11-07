import {
  DefaultLogger,
  IRegistry,
  ManualLifecycleEventEmitter,
  registerCoreProfile
} from '@behave-graph/core';
import { DummyScene, registerSceneProfile } from '@behave-graph/scene';
import { registerStructProfile } from '@behave-graph/struct';
import { useMemo } from 'react';

export const useRegistry = () => {
  return useMemo<IRegistry>(
    () =>
      registerStructProfile(
        registerSceneProfile(
          registerCoreProfile({
            values: {},
            nodes: {},
            dependencies: {
              ILogger: new DefaultLogger(),
              ILifecycleEventEmitter: new ManualLifecycleEventEmitter(),
              IScene: new DummyScene()
            }
          })
        )
      ),
    []
  );
};
