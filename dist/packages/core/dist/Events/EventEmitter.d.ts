export class EventEmitter {
    listeners: any[];
    addListener(listener: any): void;
    removeListener(listener: any): void;
    clear(): void;
    emit(event: any): void;
    get listenerCount(): number;
}
