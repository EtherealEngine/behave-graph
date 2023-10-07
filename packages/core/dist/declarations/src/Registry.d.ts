import { NodeTypeRegistry } from "./Nodes/Registry/NodeTypeRegistry.js";
import { ValueTypeRegistry } from "./Values/ValueTypeRegistry.js";
export declare class Registry {
    readonly values: ValueTypeRegistry;
    readonly nodes: NodeTypeRegistry;
}
