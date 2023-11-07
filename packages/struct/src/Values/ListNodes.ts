import {
  makeFunctionNodeDefinition,
  makeInNOutFunctionDesc,
  NodeCategory,
  sequence,
  SocketsList
} from '@behave-graph/core';
import { concat, equals } from 'rambdax';

export const Constant = makeInNOutFunctionDesc({
  name: 'logic/list',
  category: NodeCategory.Logic,
  label: 'List',
  in: ['list'],
  out: 'list',
  exec: (a: unknown[]) => a
});

export const Equal = makeInNOutFunctionDesc({
  name: 'logic/equal/list',
  category: NodeCategory.Logic,
  label: '=',
  in: ['list', 'list'],
  out: 'boolean',
  exec: (a: object, b: object) => equals(a, b)
});

export const Concat = makeFunctionNodeDefinition({
  typeName: 'logic/concat/list',
  category: NodeCategory.Logic,
  configuration: {
    numInputs: {
      valueType: 'number',
      defaultValue: 2
    }
  },
  label: 'Concat',
  in: (_) => {
    const sockets: SocketsList = [];

    const componentName = (index: number) => {
      return {
        key: `list${index}`,
        valueType: 'list'
      };
    };

    for (const index of sequence(
      1,
      (_.numInputs ?? Concat.configuration?.numInputs.defaultValue) + 1
    )) {
      sockets.push({ ...componentName(index) });
    }
    return sockets;
  },
  out: {
    result: 'list'
  },
  exec: ({ read, write, configuration }) => {
    let listToConcat: unknown[] = [];
    for (const index of sequence(
      1,
      (configuration.numInputs ??
        Concat.configuration?.numInputs.defaultValue) + 1
    )) {
      const list = read<unknown[]>(`componentName${index}`);

      listToConcat = concat(listToConcat, list);
    }
    write('result', listToConcat);
  }
});
