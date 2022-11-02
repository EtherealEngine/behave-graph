import { Graph } from '../../../Graphs/Graph.js';
import { AsyncFlowNode } from '../../../Nodes/AsyncFlowNode.js';
import { NodeDescription } from '../../../Nodes/NodeDescription.js';
import { NodeEvalContext } from '../../../Nodes/NodeEvalContext.js';
import { Socket } from '../../../Sockets/Socket.js';
import { ILifecycleEventEmitter } from '../Abstractions/ILifecycleEventEmitter.js';

// inspired by: https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Blueprints/UserGuide/Events/
export class LifecycleOnStart extends AsyncFlowNode {
  public static Description = new NodeDescription(
    'lifecycle/onStart',
    'Event',
    'On Start',
    (description, graph) => new LifecycleOnStart(description, graph)
  );

  constructor(description: NodeDescription, graph: Graph) {
    super(
      description,
      graph,
      [],
      [new Socket('flow', 'flow')],
      (context: NodeEvalContext) => {
        const onStartEvent = () => {
          context.commit('flow');
        };

        const lifecycleEvents =
          context.graph.registry.abstractions.get<ILifecycleEventEmitter>(
            'ILifecycleEventEmitter'
          );
        lifecycleEvents.startEvent.addListener(onStartEvent);

        context.onAsyncCancelled.addListener(() => {
          lifecycleEvents.startEvent.removeListener(onStartEvent);
        });
      }
    );

    this.evaluateOnStartup = true;
    this.interruptibleAsync = true;
  }
}
