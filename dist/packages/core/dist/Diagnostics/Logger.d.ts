export function logSeverityToLevel(severity: any): any;
export const LogLevel: any;
export const PrefixStyle: any;
export class Logger {
    static log(severity: any, text: any): void;
    static verbose(text: any): void;
    static info(text: any): void;
    static warning(text: any): void;
    static error(text: any): void;
}
export namespace Logger {
    const logLevel: any;
    const prefixStyle: any;
    const onLog: EventEmitter<any>;
}
import { EventEmitter } from '../Events/EventEmitter.js';
