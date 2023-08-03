import { Engine, GraphJSON, IRegistry } from '@behave-graph/core';
/** Runs the behavior graph by building the execution
 * engine and triggering start on the lifecycle event emitter.
 */
export declare const useGraphRunner: ({ graphJson, autoRun, registry }: {
    graphJson: GraphJSON | undefined;
    autoRun?: boolean | undefined;
    registry: IRegistry;
}) => {
    engine: Engine | undefined;
    playing: boolean;
    play: () => void;
    togglePlay: () => void;
    pause: () => void;
};
