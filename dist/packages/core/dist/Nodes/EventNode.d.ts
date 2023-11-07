export class EventNode extends Node<any> {
    constructor(description: any, graph: any, inputs?: any[], outputs?: any[], configuration?: {});
    init(engine: any): void;
    dispose(engine: any): void;
}
export class EventNode2 extends EventNode {
    constructor(props: any);
}
export class EventNodeInstance extends Node<any> {
    constructor(nodeProps: any);
    init: (engine: any) => void;
    state: any;
    initInner: any;
    disposeInner: any;
    outputSocketKeys: any;
    dispose(): void;
}
import { Node } from './Node.js';
