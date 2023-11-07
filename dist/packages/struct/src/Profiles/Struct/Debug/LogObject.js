import { FlowNode, NodeDescription, Socket } from '@behave-graph/core';
class LogObject extends FlowNode {
    constructor(description, graph, logger) {
        super(description, graph, [
            new Socket('flow', 'flow'),
            new Socket('string', 'text'),
            new Socket('string', 'severity', 'info'),
            new Socket('object', 'payload')
        ], [new Socket('flow', 'flow')]);
        this.logger = logger;
    }
    triggered(fiber) {
        const text = this.readInput('text');
        const payload = this.readInput('payload');
        const message = `${text} ${JSON.stringify(payload)}`;
        switch (this.readInput('severity')) {
            case 'verbose':
                this.logger.verbose(message);
                break;
            case 'info':
                this.logger.info(message);
                break;
            case 'warning':
                this.logger.warn(message);
                break;
            case 'error':
                this.logger.error(message);
                break;
        }
        fiber.commit(this, 'flow');
    }
}
LogObject.Description = (logger) => new NodeDescription('debug/log/object', 'Action', 'Log', (description, graph) => new LogObject(description, graph, logger));
export { LogObject };
//# sourceMappingURL=LogObject.js.map