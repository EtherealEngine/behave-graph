export function getNodeDescriptions(importWildcard) {
    return Object.values(importWildcard);
}
export class NodeDescription {
    constructor(typeName, category, label = '', factory, otherTypeNames = [], helpDescription = '', configuration = {}) {
        this.typeName = typeName;
        this.category = category;
        this.label = label;
        this.otherTypeNames = otherTypeNames;
        this.helpDescription = helpDescription;
        this.configuration = configuration;
        this.nodeFactory = (graph, config) => factory(this, graph, config);
    }
}
export class NodeDescription2 extends NodeDescription {
    constructor(properties) {
        super(properties.typeName, properties.category, properties.label, properties.factory, properties.otherTypeNames, properties.helpDescription, properties.configuration);
        this.properties = properties;
    }
}
//# sourceMappingURL=NodeDescription.js.map