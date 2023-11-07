export class CustomEvent {
    constructor(id: any, name: any, parameters?: any[]);
    id: any;
    name: any;
    parameters: any[];
    label: string;
    metadata: {};
    eventEmitter: EventEmitter<any>;
}
import { EventEmitter } from './EventEmitter.js';
