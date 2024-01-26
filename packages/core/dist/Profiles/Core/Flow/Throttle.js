import { Assert } from '../../../Diagnostics/Assert.js';
import { NodeCategory } from '../../../index.js';
import { AsyncNode } from '../../../Nodes/AsyncNode.js';
import { NodeDescription } from '../../../Nodes/Registry/NodeDescription.js';
import { Socket } from '../../../Sockets/Socket.js';
// based on the description here: https://blog.webdevsimplified.com/2022-03/debounce-vs-throttle/
class Throttle extends AsyncNode {
    constructor(description, graph) {
        super(description, graph, [
            new Socket('flow', 'flow'),
            new Socket('float', 'duration', 1),
            new Socket('flow', 'cancel')
        ], [new Socket('flow', 'flow')]);
        this.triggerVersion = 0;
        this.timeoutPending = false;
    }
    triggered(engine, triggeringSocketName, finished) {
        // if cancelling, just increment triggerVersion and do not set a timer. :)
        if (triggeringSocketName === 'cancel') {
            if (this.timeoutPending) {
                this.triggerVersion++;
                this.timeoutPending = false;
            }
            return;
        }
        // if there is a valid timeout running, leave it.
        if (this.timeoutPending) {
            return;
        }
        // otherwise start it.
        this.triggerVersion++;
        const localTriggerCount = this.triggerVersion;
        this.timeoutPending = true;
        setTimeout(() => {
            if (this.triggerVersion !== localTriggerCount) {
                return;
            }
            Assert.mustBeTrue(this.timeoutPending);
            this.timeoutPending = false;
            engine.commitToNewFiber(this, 'flow');
            finished();
        }, this.readInput('duration') * 1000);
    }
    dispose() {
        this.triggerVersion++; // equivalent to 'cancel' trigger behavior.
        this.timeoutPending = false;
    }
}
Throttle.Description = new NodeDescription('flow/rate/throttle', NodeCategory.Flow, 'Throttle', (description, graph) => new Throttle(description, graph));
export { Throttle };
//# sourceMappingURL=Throttle.js.map