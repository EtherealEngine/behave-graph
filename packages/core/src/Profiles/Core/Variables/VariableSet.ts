import {
  makeFlowNodeDefinition,
  NodeCategory,
  SocketsList
} from '../../../Nodes/NodeDefinitions.js';
import { Variable } from '../../../Values/Variables/Variable.js';

export const VariableSet = makeFlowNodeDefinition({
  typeName: 'variable/set',
  category: NodeCategory.Action,
  label: 'Set',
  configuration: {
    variableName: {
      valueType: 'string'
    }
  },
  in: (configuration, graph) => {
    const variableId = Object.values(graph.variables).find(
      (variable) => variable.name === configuration.variableName
    )?.id;
    const variable =
      variableId !== undefined
        ? graph.variables[variableId]
        : new Variable('-1', '', 'string', '');

    const sockets: SocketsList = [
      {
        key: 'flow',
        valueType: 'flow'
      },
      {
        key: variable.name,
        valueType: variable.valueTypeName
      }
    ];

    return sockets;
  },
  initialState: undefined,
  out: { flow: 'flow' },
  triggered: ({ read, commit, graph: { variables }, configuration }) => {
    const variable = variables[configuration.variableId];

    if (!variable) return;

    variable.set(read('value'));
    commit('flow');
  }
});
