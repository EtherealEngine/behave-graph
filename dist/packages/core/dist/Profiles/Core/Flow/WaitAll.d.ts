export class WaitAll extends FlowNode {
    constructor(description: any, graph: any, numInputs: any);
    numInputs: any;
    isOn: boolean;
    triggeredMap: {};
    triggeredCount: number;
    outputTriggered: boolean;
    reset(): void;
    triggered(fiber: any, triggeringSocketName: any): void;
}
export namespace WaitAll {
    const Description: NodeDescription2;
}
import { FlowNode } from '../../../Nodes/FlowNode.js';
import { NodeDescription2 } from '../../../Nodes/Registry/NodeDescription.js';
