/* eslint-disable max-len */
import {
  getCoreValuesMap,
  getNodeDescriptions,
  getStringConversionsForValueType,
  IRegistry,
  memo,
  NodeDefinition,
  ValueType,
  ValueTypeMap
} from '@behave-graph/core';

import {
  ColorNodes,
  ColorValue,
  EulerNodes,
  EulerValue,
  GetSceneProperty,
  Mat3Nodes,
  Mat3Value,
  Mat4Nodes,
  Mat4Value,
  OnSceneNodeClick,
  QuatNodes,
  QuatValue,
  SetSceneProperty,
  Vec2Nodes,
  Vec2Value,
  Vec3Nodes,
  Vec3Value,
  Vec4Nodes,
  Vec4Value
} from './index.js';

export const getSceneValuesMap = memo<ValueTypeMap>(() => {
  const valueTypes = [
    Vec2Value,
    Vec3Value,
    Vec4Value,
    ColorValue,
    EulerValue,
    QuatValue,
    Mat3Value,
    Mat4Value
  ];
  const temp = Object.fromEntries(
    valueTypes.map((valueType) => [valueType.name, valueType])
  );
  return temp;
});

export const getSceneStringConversions = (
  values: Record<string, ValueType>
): NodeDefinition[] =>
  Object.keys(values).flatMap((valueTypeName) =>
    getStringConversionsForValueType({ values, valueTypeName })
  );

export const getSceneNodesMap = memo<Record<string, NodeDefinition>>(() => {
  const allValueTypeNames = Object.keys({
    ...getCoreValuesMap(),
    ...getSceneValuesMap()
  });

  const nodeDefinitions = [
    // pull in value type nodes
    ...getNodeDescriptions(Vec2Nodes),
    ...getNodeDescriptions(Vec3Nodes),
    ...getNodeDescriptions(Vec4Nodes),
    ...getNodeDescriptions(ColorNodes),
    ...getNodeDescriptions(EulerNodes),
    ...getNodeDescriptions(QuatNodes),
    ...getNodeDescriptions(Mat3Nodes),
    ...getNodeDescriptions(Mat4Nodes),

    // events
    OnSceneNodeClick,
    // actions
    ...SetSceneProperty(allValueTypeNames),
    ...GetSceneProperty(allValueTypeNames),

    ...getSceneStringConversions(getSceneValuesMap())
  ];

  return Object.fromEntries(
    nodeDefinitions.map((nodeDefinition) => [
      nodeDefinition.typeName,
      nodeDefinition
    ])
  );
});

export const registerSceneProfile = (registry: IRegistry): IRegistry => {
  const values = {
    ...registry.values,
    ...getCoreValuesMap(),
    ...getSceneValuesMap()
  };
  return {
    values,
    nodes: { ...registry.nodes, ...getSceneNodesMap() },
    dependencies: {
      ...registry.dependencies
    }
  };
};
