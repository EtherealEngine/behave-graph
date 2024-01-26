import { FlowNode, NodeCategory, NodeDescription, Socket } from '@behave-graph/core';
export class LogList extends FlowNode {
    constructor(description, graph, logger) {
        super(description, graph, [
            new Socket('flow', 'flow'),
            new Socket('string', 'text'),
            new Socket('string', 'severity', 'info'),
            new Socket('list', 'payload')
        ], [new Socket('flow', 'flow')]);
        this.logger = logger;
    }
    triggered(fiber) {
        const text = this.readInput('text');
        const payload = this.readInput('payload');
        const message = `${text} ${JSON.stringify(payload)}`;
        this.logger.log(this.readInput('severity'), message);
        fiber.commit(this, 'flow');
    }
}
LogList.Description = (logger) => new NodeDescription('logic/list/log', NodeCategory.Action, 'Log', (description, graph) => new LogList(description, graph, logger));
//# sourceMappingURL=LogList.js.map