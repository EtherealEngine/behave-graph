export function getNodeDescriptions(importWildcard: any): any[];
export class NodeDescription {
    constructor(typeName: any, category: any, label: string | undefined, factory: any, otherTypeNames?: any[], helpDescription?: string, configuration?: {});
    typeName: any;
    category: any;
    label: string;
    otherTypeNames: any[];
    helpDescription: string;
    configuration: {};
    nodeFactory: (graph: any, config: any) => any;
}
export class NodeDescription2 extends NodeDescription {
    constructor(properties: any);
    properties: any;
}
