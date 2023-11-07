export function makeInNOutFunctionDesc({ in: inputs, out, exec, category, ...rest }: {
    [x: string]: any;
    in: any;
    out: any;
    exec: any;
    category: any;
}): import("./NodeDefinitions.js").IFunctionNodeDefinition<() => any, () => any, import("./Registry/NodeDescription.js").NodeConfigurationDescription>;
export class FunctionNode extends Node<any> {
    constructor(description: any, graph: any, inputs: any[] | undefined, outputs: any[] | undefined, exec: any, configuration?: {});
    exec: any;
}
export class FunctionNodeInstance extends Node<any> {
    constructor(nodeProps: any);
    exec: (node: any) => void;
    execInner: any;
}
import { Node } from './Node.js';
