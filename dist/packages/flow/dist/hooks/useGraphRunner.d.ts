export function useGraphRunner({ graphJson, autoRun, registry }: {
    graphJson: any;
    autoRun?: boolean | undefined;
    registry: any;
}): {
    engine: undefined;
    playing: boolean;
    play: () => void;
    togglePlay: () => void;
    pause: () => void;
};
