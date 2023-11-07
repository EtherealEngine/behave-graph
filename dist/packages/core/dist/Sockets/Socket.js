export class Socket {
    constructor(valueTypeName, name, value = undefined, label = undefined, valueChoices // if not empty, value must be one of these.
    ) {
        this.valueTypeName = valueTypeName;
        this.name = name;
        this.value = value;
        this.label = label;
        this.valueChoices = valueChoices;
        this.links = [];
    }
}
//# sourceMappingURL=Socket.js.map
//# sourceMappingURL=Socket.js.map