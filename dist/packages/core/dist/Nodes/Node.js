import { readInputFromSockets, writeOutputsToSocket } from './NodeSockets.js';
export class Node {
    constructor(node) {
        this.readInput = (inputName) => {
            return readInputFromSockets(this.inputs, inputName, this.description.typeName);
        };
        this.writeOutput = (outputName, value) => {
            writeOutputsToSocket(this.outputs, outputName, value, this.description.typeName);
        };
        this.inputs = node.inputs;
        this.outputs = node.outputs;
        this.description = node.description;
        this.nodeType = node.nodeType;
        this.graph = node.graph;
        this.configuration = node.configuration;
        this.metadata = node.metadata || {};
    }
}
//# sourceMappingURL=Node.js.map
//# sourceMappingURL=Node.js.map