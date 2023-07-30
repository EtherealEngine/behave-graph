import { IGraph } from '../Graphs/Graph.js';
import { Choices } from '../Sockets/Socket.js';
import { NodeConfiguration } from './Node.js';
import { INode } from './NodeInstance.js';
import { NodeCategory } from './Registry/NodeCategory.js';
import { NodeConfigurationDescription } from './Registry/NodeDescription.js';
export interface SocketDefinition {
    valueType: string;
    defaultValue?: any;
    choices?: Choices;
    label?: string;
}
export type SocketsMap = Record<string, SocketDefinition | string | ((nodeConfig: NodeConfiguration, graph: IGraph) => SocketDefinition)>;
export type SocketListDefinition = SocketDefinition & {
    key: string;
};
export type SocketsList = SocketListDefinition[];
export type SocketsGeneratorFromConfig = (nodeConfig: NodeConfiguration, graph: IGraph) => SocketsList;
export type SocketsDefinition = SocketsMap | SocketsGeneratorFromConfig;
export type NodeFactory = (graph: IGraph, config: NodeConfiguration) => INode;
export interface IHasNodeFactory {
    readonly nodeFactory: NodeFactory;
}
export interface INodeDefinition<TInput extends SocketsDefinition = SocketsDefinition, TOutput extends SocketsDefinition = SocketsDefinition, TConfig extends NodeConfigurationDescription = NodeConfigurationDescription> extends IHasNodeFactory {
    category?: NodeCategory;
    typeName: string;
    otherTypeNames?: string[];
    aliases?: string[];
    helpDescription?: string;
    label?: string;
    in: TInput;
    out: TOutput;
    configuration?: TConfig;
}
export type SocketNames<TSockets extends SocketsDefinition> = TSockets extends SocketsMap ? keyof TSockets : any;
export type Dependencies = Record<string, any>;
export type TriggeredFn<TInput extends SocketsDefinition = SocketsDefinition, TOutput extends SocketsDefinition = SocketsDefinition, TState = any> = (params: {
    read<T>(inValueName: SocketNames<TInput>): T;
    write<T>(outValueName: SocketNames<TOutput>, value: T): void;
    commit(outFlowName: SocketNames<TOutput>, fiberCompletedListener?: () => void): void;
    outputSocketKeys: SocketNames<TOutput>[];
    triggeringSocketName: keyof TInput;
    state: TState;
    graph: IGraph;
    configuration: NodeConfiguration;
    finished?: () => void;
}) => StateReturn<TState>;
/** Flow Node Definition */
export type TriggeredParams<TInput extends SocketsDefinition, TOutput extends SocketsDefinition, TState> = Parameters<TriggeredFn<TInput, TOutput, TState>>[0];
export interface IHasInitialState<TState> {
    initialState: TState;
}
export interface IHasTriggered<TInput extends SocketsDefinition, TOutput extends SocketsDefinition, TState> extends IHasInitialState<TState> {
    triggered: TriggeredFn<TInput, TOutput, TState>;
}
export type StateReturn<TState> = TState extends undefined ? void : TState;
export type EventNodeSetupParams<TInput extends SocketsDefinition, TOutput extends SocketsDefinition, TState> = Omit<TriggeredParams<TInput, TOutput, TState>, 'triggeringSocketName'>;
export interface IHasInit<TInput extends SocketsDefinition, TOutput extends SocketsDefinition, TState> {
    init: (params: EventNodeSetupParams<TInput, TOutput, TState>) => StateReturn<TState>;
}
export interface IHasDispose<TState> {
    dispose: (params: {
        state: TState;
        graph: IGraph;
    }) => StateReturn<TState>;
}
export interface IFlowNodeDefinition<TInput extends SocketsDefinition = SocketsDefinition, TOutput extends SocketsDefinition = SocketsDefinition, TConfig extends NodeConfigurationDescription = NodeConfigurationDescription, TState = any> extends INodeDefinition<TInput, TOutput, TConfig>, IHasInitialState<TState>, IHasTriggered<TInput, TOutput, TState> {
}
export interface IAsyncNodeDefinition<TInput extends SocketsDefinition = SocketsDefinition, TOutput extends SocketsDefinition = SocketsDefinition, TConfig extends NodeConfigurationDescription = NodeConfigurationDescription, TState = any> extends INodeDefinition<TInput, TOutput, TConfig>, IHasInitialState<TState>, IHasTriggered<TInput, TOutput, TState>, IHasDispose<TState> {
}
type OmitFactoryAndType<T extends INodeDefinition> = Omit<T, 'nodeFactory' | 'nodeType'>;
export interface FunctionNodeExecParams<TInput extends SocketsDefinition, TOutput extends SocketsDefinition> {
    read<T>(inValueName: SocketNames<TInput>): T;
    write<T>(outValueName: SocketNames<TOutput>, value: T): void;
    graph: IGraph;
    configuration: NodeConfiguration;
}
export interface IFunctionNodeDefinition<TInput extends SocketsDefinition = SocketsDefinition, TOutput extends SocketsDefinition = SocketsDefinition, TConfig extends NodeConfigurationDescription = NodeConfigurationDescription> extends INodeDefinition<TInput, TOutput, TConfig> {
    exec: (params: FunctionNodeExecParams<TInput, TOutput>) => void;
}
export interface IEventNodeDefinition<TInput extends SocketsDefinition = SocketsDefinition, TOutput extends SocketsDefinition = SocketsDefinition, TConfig extends NodeConfigurationDescription = NodeConfigurationDescription, TState = any> extends INodeDefinition<TInput, TOutput, TConfig>, IHasInitialState<TState>, IHasInit<TInput, TOutput, TState>, IHasDispose<TState> {
}
export declare function makeFlowNodeDefinition<TInput extends SocketsDefinition, TOutput extends SocketsDefinition, TConfig extends NodeConfigurationDescription, TState>(definition: OmitFactoryAndType<IFlowNodeDefinition<TInput, TOutput, TConfig, TState>>): IFlowNodeDefinition<TInput, TOutput, TConfig, TState>;
export declare function makeAsyncNodeDefinition<TInput extends SocketsDefinition, TOutput extends SocketsDefinition, TConfig extends NodeConfigurationDescription, TState>(definition: OmitFactoryAndType<IAsyncNodeDefinition<TInput, TOutput, TConfig, TState>>): IAsyncNodeDefinition<TInput, TOutput, TConfig, TState>;
export declare function makeFunctionNodeDefinition<TInput extends SocketsDefinition, TOutput extends SocketsDefinition>(definition: OmitFactoryAndType<IFunctionNodeDefinition<TInput, TOutput>>): IFunctionNodeDefinition<TInput, TOutput>;
export declare function makeEventNodeDefinition<TInput extends SocketsDefinition, TOutput extends SocketsDefinition, TConfig extends NodeConfigurationDescription, TState>(definition: OmitFactoryAndType<IEventNodeDefinition<TInput, TOutput, TConfig, TState>>): IEventNodeDefinition<TInput, TOutput, TConfig, TState>;
export { NodeCategory } from './Registry/NodeCategory.js';
