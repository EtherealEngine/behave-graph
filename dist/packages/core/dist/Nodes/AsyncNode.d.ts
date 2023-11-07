export class AsyncNode extends Node<any> {
    constructor(description: any, graph: any, inputs?: any[], outputs?: any[], configuration?: {});
    triggered(engine: any, triggeringSocketName: any, finished: any): void;
    dispose(): void;
}
export class AsyncNode2 extends AsyncNode {
    constructor(props: any);
}
export class AsyncNodeInstance extends Node<any> {
    constructor(node: any);
    triggered: (engine: any, triggeringSocketName: any, finished: any) => void;
    dispose: () => void;
    state: any;
    triggeredInner: any;
    disposeInner: any;
}
import { Node } from './Node.js';
