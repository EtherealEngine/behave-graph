import { Engine } from '../Execution/Engine.js';
import { IGraph } from '../Graphs/Graph.js';
import { Socket } from '../Sockets/Socket.js';
import { Node, NodeConfiguration } from './Node.js';
import { IAsyncNodeDefinition } from './NodeDefinitions.js';
import { IAsyncNode, INode, NodeType } from './NodeInstance.js';
import { NodeDescription } from './Registry/NodeDescription.js';
export declare class AsyncNode extends Node<NodeType.Async> {
    constructor(description: NodeDescription, graph: IGraph, inputs?: Socket[], outputs?: Socket[], configuration?: NodeConfiguration);
    triggered(engine: Engine, triggeringSocketName: string, finished: () => void): void;
    dispose(): void;
}
export declare class AsyncNode2 extends AsyncNode {
    constructor(props: {
        description: NodeDescription;
        graph: IGraph;
        inputs?: Socket[];
        outputs?: Socket[];
    });
}
export declare class AsyncNodeInstance<TAsyncNodeDef extends IAsyncNodeDefinition> extends Node<NodeType.Async> implements IAsyncNode {
    private triggeredInner;
    private disposeInner;
    private state;
    constructor(node: Omit<INode, 'nodeType'> & Pick<TAsyncNodeDef, 'triggered' | 'initialState' | 'dispose'>);
    triggered: (engine: Pick<Engine, 'commitToNewFiber'>, triggeringSocketName: string, finished: () => void) => void;
    dispose: () => void;
}
