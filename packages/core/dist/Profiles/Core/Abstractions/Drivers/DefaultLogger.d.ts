import { ILogger, LogSeverity } from '../ILogger.js';
export declare class DefaultLogger implements ILogger {
    log(severity: LogSeverity, text: string): void;
}
