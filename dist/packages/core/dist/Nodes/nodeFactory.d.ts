export function makeOrGenerateSockets(socketConfigOrFactory: any, nodeConfig: any, graph: any): any;
export function makeCommonProps(nodeType: any, { typeName, in: inputs, out, otherTypeNames, category, configuration: nodeDefinitionConfiguration, helpDescription, label }: {
    typeName: any;
    in: any;
    out: any;
    otherTypeNames?: any[] | undefined;
    category?: NodeCategory | undefined;
    configuration: any;
    helpDescription?: string | undefined;
    label?: string | undefined;
}, configuration: any, graph: any): {
    description: {
        typeName: any;
        configuration: any;
        category: NodeCategory;
        otherTypeNames: any[];
        helpDescription: string;
        label: string;
    };
    nodeType: any;
    inputs: any;
    outputs: any;
    configuration: any;
    graph: any;
};
import { NodeCategory } from './NodeDefinitions.js';
