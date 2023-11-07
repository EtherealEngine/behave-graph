export class FlowNode extends Node<any> {
    constructor(description: any, graph: any, inputs?: any[], outputs?: any[], configuration?: {});
    triggered(fiber: any, triggeringSocketName: any): void;
}
export class FlowNode2 extends FlowNode {
    constructor(props: any);
}
export class FlowNodeInstance extends Node<any> {
    constructor(nodeProps: any);
    triggered: (fiber: any, triggeringSocketName: any) => void;
    state: any;
    triggeredInner: any;
    outputSocketKeys: any;
}
import { Node } from './Node.js';
