export class OnCustomEvent extends EventNode2 {
    constructor(description: any, graph: any, configuration: any);
    onCustomEvent: ((parameters: any) => void) | undefined;
    customEvent: any;
    init(engine: any): void;
    dispose(engine: any): void;
}
export namespace OnCustomEvent {
    const Description: NodeDescription2;
}
import { EventNode2 } from '../../../Nodes/EventNode.js';
import { NodeDescription2 } from '../../../Nodes/Registry/NodeDescription.js';
