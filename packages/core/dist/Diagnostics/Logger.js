/* eslint-disable no-console */
import { EventEmitter } from '../Events/EventEmitter.js';
export var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Verbose"] = 0] = "Verbose";
    LogLevel[LogLevel["Info"] = 1] = "Info";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Error"] = 3] = "Error";
})(LogLevel || (LogLevel = {}));
export function logSeverityToLevel(severity) {
    switch (severity) {
        case 'verbose':
            return LogLevel.Verbose;
        case 'info':
            return LogLevel.Info;
        case 'warning':
            return LogLevel.Warning;
        case 'error':
            return LogLevel.Error;
    }
}
export var PrefixStyle;
(function (PrefixStyle) {
    PrefixStyle[PrefixStyle["None"] = 0] = "None";
    PrefixStyle[PrefixStyle["Time"] = 1] = "Time";
})(PrefixStyle || (PrefixStyle = {}));
const Reset = '\x1b[0m';
const FgRed = '\x1b[31m';
const BgYellow = '\x1b[43m';
const Dim = '\x1b[2m';
class Logger {
    static log(severity, text) {
        this.onLog.emit({ severity, text });
    }
    static verbose(text) {
        this.onLog.emit({ severity: 'verbose', text });
    }
    static info(text) {
        this.onLog.emit({ severity: 'info', text });
    }
    static warning(text) {
        this.onLog.emit({ severity: 'warning', text });
    }
    static error(text) {
        this.onLog.emit({ severity: 'error', text });
    }
}
Logger.logLevel = LogLevel.Info;
Logger.prefixStyle = PrefixStyle.None;
Logger.onLog = new EventEmitter();
(() => {
    const prefix = () => {
        switch (Logger.prefixStyle) {
            case PrefixStyle.None:
                return '';
            case PrefixStyle.Time:
                return new Date().toLocaleTimeString().padStart(11, '0') + ' ';
        }
    };
    Logger.onLog.addListener((logMessage) => {
        if (Logger.logLevel > logSeverityToLevel(logMessage.severity))
            return;
        console.log(prefix() + logMessage.text);
    });
})();
export { Logger };
//# sourceMappingURL=Logger.js.map