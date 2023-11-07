import { AsyncNode } from '../../../Nodes/AsyncNode.js';
import { NodeDescription2 } from '../../../Nodes/Registry/NodeDescription.js';
import { Socket } from '../../../Sockets/Socket.js';
// ASYNC - asynchronous evaluation
// also called "delay"
class Delay extends AsyncNode {
    constructor(description, graph) {
        super(description, graph, [new Socket('flow', 'flow'), new Socket('float', 'duration', 1)], [new Socket('flow', 'flow')]);
        this.timeoutPending = false;
    }
    triggered(engine, triggeringSocketName, finished) {
        // if there is a valid timeout running, leave it.
        if (this.timeoutPending) {
            return;
        }
        // otherwise start it.
        this.timeoutPending = true;
        setTimeout(() => {
            // check if cancelled
            if (!this.timeoutPending)
                return;
            this.timeoutPending = false;
            engine.commitToNewFiber(this, 'flow');
            finished();
        }, this.readInput('duration') * 1000);
    }
    dispose() {
        this.timeoutPending = false;
    }
}
Delay.Description = new NodeDescription2({
    typeName: 'time/delay',
    otherTypeNames: ['flow/delay'],
    category: 'Time',
    label: 'Delay',
    factory: (description, graph) => new Delay(description, graph)
});
export { Delay };
//# sourceMappingURL=Delay.js.map
//# sourceMappingURL=Delay.js.map