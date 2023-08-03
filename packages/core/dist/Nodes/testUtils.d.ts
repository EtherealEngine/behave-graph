import { IGraph } from '../Graphs/Graph.js';
import { NodeConfiguration } from './Node.js';
import { IFunctionNodeDefinition, IHasTriggered, SocketNames, SocketsDefinition } from './NodeDefinitions.js';
import { NodeConfigurationDescription } from './Registry/NodeDescription.js';
export type SocketValues<TSockets extends SocketsDefinition> = {
    [key in SocketNames<TSockets>]?: any;
};
/** Helper function to test an function node's exec and get the resulting outputs.
 * Can simulate the input socket values. Returns the output socket values
 */
export declare const testExec: <TInput extends SocketsDefinition, TOutput extends SocketsDefinition, TConfig extends NodeConfigurationDescription>({ nodeInputVals, configuration, exec, makeGraph }: {
    /** Exec function from the node defintion */
    exec: (params: import("./NodeDefinitions.js").FunctionNodeExecParams<TInput, TOutput>) => void;
    /** Runtime configuration of the node */
    configuration?: NodeConfiguration | undefined;
    /** Simulated input values the input sockets have */
    nodeInputVals?: SocketValues<TInput> | undefined;
    makeGraph?: (() => IGraph) | undefined;
}) => SocketValues<TOutput>;
export declare enum RecordedOutputType {
    write = "write",
    commit = "commit"
}
export type RecordedWritesOrCommits<TOutput extends SocketsDefinition> = ({
    outputType: RecordedOutputType.write;
    socketName: SocketNames<TOutput>;
    value: any;
} | {
    outputType: RecordedOutputType.commit;
    socketName: SocketNames<TOutput>;
})[];
/**
 * Generates a function that can be used to test the triggered function of a node.
 * The trigger function will maintain state between each invokation, and returns a list
 * the recorded outputs, including the commits to flow outputs.
 * @returns
 */
export declare const generateTriggerTester: <TInput extends SocketsDefinition, TOutput extends SocketsDefinition, TState>({ triggered, initialState, out }: {
    /** Triggered function from the node defintion */
    /** Runtime configuration of the node */
    configuration?: NodeConfiguration | undefined;
    makeGraph?: (() => IGraph) | undefined;
} & Pick<IHasTriggered<TInput, TOutput, TState>, "initialState" | "triggered"> & {
    out: TOutput;
}, configuration?: NodeConfiguration, makeGraph?: () => IGraph) => ({ inputVals, triggeringSocketName }: {
    /** input values to simulate on the input sockets */
    inputVals?: SocketValues<TInput> | undefined;
    /** name of the flow socket that is to be triggered */
    triggeringSocketName: SocketNames<TInput>;
}) => RecordedWritesOrCommits<TOutput>;
