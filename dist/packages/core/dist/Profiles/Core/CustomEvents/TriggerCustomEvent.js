import { CustomEvent } from '../../../Events/CustomEvent.js';
import { FlowNode2 } from '../../../Nodes/FlowNode.js';
import { NodeDescription2 } from '../../../Nodes/Registry/NodeDescription.js';
import { Socket } from '../../../Sockets/Socket.js';
class TriggerCustomEvent extends FlowNode2 {
    constructor(description, graph, configuration) {
        const customEvent = graph.customEvents[configuration.customEventId] ||
            new CustomEvent('-1', 'undefined');
        super({
            description,
            graph,
            inputs: [
                new Socket('flow', 'flow'),
                ...customEvent.parameters.map((parameter) => new Socket(parameter.valueTypeName, parameter.name, parameter.value, parameter.label))
            ],
            outputs: [new Socket('flow', 'flow')],
            configuration
        });
        this.customEvent = customEvent;
        graph.customEvents[configuration.customEventId] = customEvent;
    }
    triggered(fiber, triggeringSocketName) {
        const parameters = {};
        this.customEvent.parameters.forEach((parameterSocket) => {
            parameters[parameterSocket.name] = this.readInput(parameterSocket.name);
        });
        this.customEvent.eventEmitter.emit(parameters);
        fiber.commit(this, 'flow');
    }
}
TriggerCustomEvent.Description = new NodeDescription2({
    typeName: 'customEvent/trigger',
    category: 'Action',
    label: 'Trigger',
    configuration: {
        customEventId: {
            valueType: 'string',
            defaultValue: '-1'
        }
    },
    factory: (description, graph, configuration) => new TriggerCustomEvent(description, graph, configuration)
});
export { TriggerCustomEvent };
//# sourceMappingURL=TriggerCustomEvent.js.map
//# sourceMappingURL=TriggerCustomEvent.js.map