export class Delay extends AsyncNode {
    constructor(description: any, graph: any);
    timeoutPending: boolean;
    triggered(engine: any, triggeringSocketName: any, finished: any): void;
}
export namespace Delay {
    const Description: NodeDescription2;
}
import { AsyncNode } from '../../../Nodes/AsyncNode.js';
import { NodeDescription2 } from '../../../Nodes/Registry/NodeDescription.js';
