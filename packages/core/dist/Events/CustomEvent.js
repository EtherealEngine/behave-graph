import { EventEmitter } from './EventEmitter.js';
export class CustomEvent {
    constructor(id, name, parameters = []) {
        this.id = id;
        this.name = name;
        this.parameters = parameters;
        this.label = '';
        this.metadata = {};
        this.eventEmitter = new EventEmitter();
    }
}
//# sourceMappingURL=CustomEvent.js.map