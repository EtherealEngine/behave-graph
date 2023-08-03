import { makeFunctionNodeDefinition, NodeCategory } from '@behave-graph/core';
export const GetSceneProperty = (valueTypeNames) => valueTypeNames.map((valueTypeName) => makeFunctionNodeDefinition({
    typeName: `scene/get/${valueTypeName}`,
    category: NodeCategory.Query,
    label: `Scene set ${valueTypeName}`,
    in: {
        jsonPath: (_, graphApi) => {
            const scene = graphApi.getDependency('IScene');
            return {
                valueType: 'string',
                choices: scene?.getProperties()
            };
        }
    },
    out: {
        value: valueTypeName
    },
    exec: ({ graph, read, write }) => {
        const scene = graph.getDependency('IScene');
        const propertyValue = scene?.getProperty(read('jsonPath'), valueTypeName);
        write('value', propertyValue);
    }
}));
//# sourceMappingURL=GetSceneProperty.js.map