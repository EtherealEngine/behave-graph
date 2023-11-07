export class ManualLifecycleEventEmitter {
    startEvent: EventEmitter<any>;
    endEvent: EventEmitter<any>;
    tickEvent: EventEmitter<any>;
}
import { EventEmitter } from '../../../../Events/EventEmitter.js';
