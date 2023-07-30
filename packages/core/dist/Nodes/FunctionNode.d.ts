import { IGraph } from '../Graphs/Graph.js';
import { Socket } from '../Sockets/Socket.js';
import { Node, NodeConfiguration } from './Node.js';
import { IFunctionNodeDefinition, NodeCategory, SocketsList } from './NodeDefinitions.js';
import { IFunctionNode, INode, NodeType } from './NodeInstance.js';
import { NodeDescription } from './Registry/NodeDescription.js';
export declare abstract class FunctionNode extends Node<NodeType.Function> implements IFunctionNode {
    readonly exec: (node: INode) => void;
    constructor(description: NodeDescription, graph: IGraph, inputs: Socket[] | undefined, outputs: Socket[] | undefined, exec: (node: INode) => void, configuration?: NodeConfiguration);
}
export declare class FunctionNodeInstance<TFunctionNodeDef extends IFunctionNodeDefinition> extends Node<NodeType.Function> implements IFunctionNode {
    private execInner;
    constructor(nodeProps: Omit<INode, 'nodeType'> & Pick<TFunctionNodeDef, 'exec'>);
    exec: (node: INode) => void;
}
export declare function makeInNOutFunctionDesc({ in: inputs, out, exec, category, ...rest }: {
    name: string;
    label: string;
    aliases?: string[];
    in?: (string | {
        [key: string]: string;
    })[];
    out: (string | {
        [key: string]: string;
    })[] | string;
    category?: NodeCategory;
    exec: (...args: any[]) => any;
}): IFunctionNodeDefinition<() => SocketsList, () => SocketsList, import("./Registry/NodeDescription.js").NodeConfigurationDescription>;
