import {
  makeFunctionNodeDefinition,
  NodeCategory,
  SocketsList
} from '../../../Nodes/NodeDefinitions.js';
import { Variable } from '../../../Values/Variables/Variable.js';

export const VariableGet = makeFunctionNodeDefinition({
  typeName: 'variable/get',
  category: NodeCategory.Query,
  label: 'Get',
  configuration: {
    variableId: {
      valueType: 'number'
    }
  },
  in: {},
  out: (configuration, graph) => {
    const variableId = Object.values(graph.variables).find(
      (variable) => variable.name === configuration.variableName
    )?.id;
    const variable =
      variableId !== undefined
        ? graph.variables[variableId]
        : new Variable('-1', '', 'string', '');

    const result: SocketsList = [
      {
        key: variable.name,
        valueType: variable.valueTypeName
      }
    ];

    return result;
  },
  exec: ({ write, graph: { variables }, configuration }) => {
    const variable = variables[configuration.variableId];

    if (!variable) return;

    write('value', variable.get());
  }
});
