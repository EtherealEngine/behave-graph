export class NodeSpecGenerator {
    constructor(registry: any);
    registry: any;
    specsCache: {};
    getNodeTypes(): string[];
    getNodeSpec(nodeTypeName: any, configuration: any): any;
    getAllNodeSpecs(): import("@behave-graph/core").NodeSpecJSON[];
    specsWithoutConfig: import("@behave-graph/core").NodeSpecJSON[] | undefined;
}
export function useNodeSpecGenerator(registry: any): undefined;
