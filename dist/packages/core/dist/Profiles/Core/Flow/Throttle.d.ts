export class Throttle extends AsyncNode {
    constructor(description: any, graph: any);
    triggerVersion: number;
    timeoutPending: boolean;
    triggered(engine: any, triggeringSocketName: any, finished: any): void;
}
export namespace Throttle {
    const Description: NodeDescription;
}
import { AsyncNode } from '../../../Nodes/AsyncNode.js';
import { NodeDescription } from '../../../Nodes/Registry/NodeDescription.js';
