import { Engine } from '../Execution/Engine.js';
import { Fiber } from '../Execution/Fiber.js';
import { IGraph } from '../Graphs/Graph.js';
import { Socket } from '../Sockets/Socket.js';
import { NodeConfiguration } from './Node.js';
import { INodeDescription } from './Registry/NodeDescription.js';
export declare enum NodeType {
    Event = "Event",
    Flow = "Flow",
    Async = "Async",
    Function = "Function"
}
export interface INode {
    readonly inputs: Socket[];
    readonly outputs: Socket[];
    readonly graph: IGraph;
    description: INodeDescription;
    configuration: NodeConfiguration;
    nodeType: NodeType;
    label?: string;
    metadata?: any;
}
export interface IFunctionNode extends INode {
    nodeType: NodeType.Function;
    exec: (node: INode) => void;
}
export interface IEventNode extends INode {
    nodeType: NodeType.Event;
    init: (engine: Engine) => void;
    dispose: (engine: Engine) => void;
}
export interface IFlowNode extends INode {
    nodeType: NodeType.Flow;
    triggered: (fiber: Fiber, triggeringSocketName: string) => void;
}
export interface IAsyncNode extends INode {
    nodeType: NodeType.Async;
    triggered: (engine: Engine, triggeringSocketName: string, finished: () => void) => void;
    dispose: () => void;
}
export declare const isFlowNode: (node: INode) => node is IFlowNode;
export declare const isEventNode: (node: INode) => node is IEventNode;
export declare const isAsyncNode: (node: INode) => node is IAsyncNode;
export declare const isFunctionNode: (node: INode) => node is IFunctionNode;
export declare const makeNodeInstance: (node: INode) => {
    readInput: <T>(inputName: string) => T;
    writeOutput: <T_1>(outputName: string, value: T_1) => void;
    inputs: Socket[];
    outputs: Socket[];
    graph: IGraph;
    description: INodeDescription;
    configuration: NodeConfiguration;
    nodeType: NodeType;
    label?: string | undefined;
    metadata?: any;
};
