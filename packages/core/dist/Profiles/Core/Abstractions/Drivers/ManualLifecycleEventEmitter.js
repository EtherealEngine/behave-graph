import { EventEmitter } from '../../../../Events/EventEmitter.js';
export class ManualLifecycleEventEmitter {
    constructor() {
        this.startEvent = new EventEmitter();
        this.endEvent = new EventEmitter();
        this.tickEvent = new EventEmitter();
    }
}
//# sourceMappingURL=ManualLifecycleEventEmitter.js.map