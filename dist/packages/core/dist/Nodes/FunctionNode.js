import { Assert } from '../Diagnostics/Assert.js';
import { Node } from './Node.js';
import { makeFunctionNodeDefinition } from './NodeDefinitions.js';
import { NodeType } from './NodeInstance.js';
import { readInputFromSockets, writeOutputsToSocket } from './NodeSockets.js';
export class FunctionNode extends Node {
    constructor(description, graph, inputs = [], outputs = [], exec, configuration = {}) {
        super({
            description: {
                ...description,
                category: description.category
            },
            inputs,
            outputs,
            graph,
            configuration,
            nodeType: NodeType.Function
        });
        this.exec = exec;
        // must have no input flow sockets
        Assert.mustBeTrue(!this.inputs.some((socket) => socket.valueTypeName === 'flow'));
        // must have no output flow sockets
        Assert.mustBeTrue(!this.outputs.some((socket) => socket.valueTypeName === 'flow'));
    }
}
export class FunctionNodeInstance extends Node {
    constructor(nodeProps) {
        super({ ...nodeProps, nodeType: NodeType.Function });
        this.exec = (node) => {
            this.execInner({
                read: (name) => readInputFromSockets(node.inputs, name, node.description.typeName),
                write: (name, value) => writeOutputsToSocket(node.outputs, name, value, node.description.typeName),
                configuration: this.configuration,
                graph: this.graph
            });
        };
        this.execInner = nodeProps.exec;
    }
}
const alpha = 'abcdefghijklmnop';
const getAlphabeticalKey = (index) => alpha[index];
/** Converts list of sockets specifying value type names to an ordeered list of sockets,
 */
function makeSocketsList(sockets, getKey) {
    if (!sockets || sockets.length === 0)
        return [];
    return sockets.map((x, i) => {
        if (typeof x === 'string') {
            return {
                key: getKey(i),
                valueType: x
            };
        }
        return {
            key: Object.keys(x)[0],
            valueType: x[Object.keys(x)[0]]
        };
    });
}
export function makeInNOutFunctionDesc({ in: inputs, out, exec, category, ...rest }) {
    const inputSockets = makeSocketsList(inputs, getAlphabeticalKey);
    const outputKeyFunc = typeof out === 'string' || out.length > 1
        ? () => 'result'
        : getAlphabeticalKey;
    const outList = typeof out === 'string' ? [out] : out;
    const outputSockets = makeSocketsList(outList, outputKeyFunc);
    const definition = makeFunctionNodeDefinition({
        typeName: rest.name,
        label: rest.label,
        in: () => inputSockets,
        out: () => outputSockets,
        category,
        exec: ({ read, write }) => {
            const args = inputSockets.map(({ key }) => read(key));
            const results = exec(...args);
            if (outputSockets.length === 1 && outputSockets[0].key === 'result') {
                write('result', results);
            }
            else {
                outputSockets.forEach(({ key }) => {
                    write(key, results[key]);
                });
            }
        }
    });
    return definition;
}
//# sourceMappingURL=FunctionNode.js.map
//# sourceMappingURL=FunctionNode.js.map