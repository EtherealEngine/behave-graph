export function testExec({ nodeInputVals, configuration, exec, makeGraph }: {
    nodeInputVals?: {} | undefined;
    configuration?: {} | undefined;
    exec: any;
    makeGraph?: (() => import("../Graphs/Graph.js").IGraph) | undefined;
}): {};
export const RecordedOutputType: any;
export function generateTriggerTester({ triggered, initialState, out }: {
    triggered: any;
    initialState: any;
    out: any;
}, configuration?: {}, makeGraph?: () => import("../Graphs/Graph.js").IGraph): ({ inputVals, triggeringSocketName }: {
    inputVals?: {} | undefined;
    triggeringSocketName: any;
}) => any[];
