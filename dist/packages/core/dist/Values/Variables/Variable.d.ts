export class Variable {
    constructor(id: any, name: any, valueTypeName: any, initialValue: any);
    id: any;
    name: any;
    valueTypeName: any;
    initialValue: any;
    label: string;
    metadata: {};
    version: number;
    onChanged: EventEmitter<any>;
    value: any;
    get(): any;
    set(newValue: any): void;
}
import { EventEmitter } from '../../Events/EventEmitter.js';
