export class TriggerCustomEvent extends FlowNode2 {
    constructor(description: any, graph: any, configuration: any);
    customEvent: any;
    triggered(fiber: any, triggeringSocketName: any): void;
}
export namespace TriggerCustomEvent {
    const Description: NodeDescription2;
}
import { FlowNode2 } from '../../../Nodes/FlowNode.js';
import { NodeDescription2 } from '../../../Nodes/Registry/NodeDescription.js';
