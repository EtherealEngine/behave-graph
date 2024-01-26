import { AsyncNode } from '../../../Nodes/AsyncNode.js';
import { NodeDescription } from '../../../Nodes/Registry/NodeDescription.js';
import { Socket } from '../../../Sockets/Socket.js';
// as long as this continues to be triggered within the duration period, it will not fire.
// based lousy on https://www.npmjs.com/package/debounce
class Debounce extends AsyncNode {
    constructor(description, graph) {
        super(description, graph, [
            new Socket('flow', 'flow'),
            new Socket('float', 'waitDuration'),
            new Socket('flow', 'cancel')
        ], [new Socket('flow', 'flow')]);
        this.triggerVersion = 0;
    }
    triggered(engine, triggeringSocketName, finished) {
        this.triggerVersion++;
        // if cancelling, just increment triggerVersion and do not set a timer. :)
        if (triggeringSocketName === 'cancel') {
            return;
        }
        const localTriggerCount = this.triggerVersion;
        setTimeout(() => {
            if (this.triggerVersion >= localTriggerCount) {
                // ignore this timer, as it isn't for the most recent trigger
                return;
            }
            engine.commitToNewFiber(this, 'flow');
            finished();
        }, this.readInput('waitDuration') * 1000);
    }
    dispose() {
        this.triggerVersion++; // equivalent to 'cancel' trigger behavior.
    }
}
Debounce.Description = new NodeDescription('flow/rate/debounce', 'Flow', 'Debounce', (description, graph) => new Debounce(description, graph));
export { Debounce };
//# sourceMappingURL=Debounce.js.map