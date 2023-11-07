export class Debounce extends AsyncNode {
    constructor(description: any, graph: any);
    triggerVersion: number;
    triggered(engine: any, triggeringSocketName: any, finished: any): void;
}
export namespace Debounce {
    const Description: NodeDescription;
}
import { AsyncNode } from '../../../Nodes/AsyncNode.js';
import { NodeDescription } from '../../../Nodes/Registry/NodeDescription.js';
