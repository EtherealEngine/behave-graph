export class Node {
    constructor(node: any);
    readInput: (inputName: any) => any;
    writeOutput: (outputName: any, value: any) => void;
    inputs: any;
    outputs: any;
    description: any;
    nodeType: any;
    graph: any;
    configuration: any;
    metadata: any;
}
