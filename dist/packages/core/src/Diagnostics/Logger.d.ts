import { EventEmitter } from '../Events/EventEmitter.js';
import { LogSeverity } from '../index.js';
export declare enum LogLevel {
    Verbose = 0,
    Info = 1,
    Warning = 2,
    Error = 3
}
export declare function logSeverityToLevel(severity: LogSeverity): LogLevel;
export declare enum PrefixStyle {
    None = 0,
    Time = 1
}
export type LogMessage = {
    severity: LogSeverity;
    text: string;
};
export declare class Logger {
    static logLevel: LogLevel;
    static prefixStyle: PrefixStyle;
    static readonly onLog: EventEmitter<LogMessage>;
    static log(severity: LogSeverity, text: string): void;
    static verbose(text: string): void;
    static info(text: string): void;
    static warning(text: string): void;
    static error(text: string): void;
}
