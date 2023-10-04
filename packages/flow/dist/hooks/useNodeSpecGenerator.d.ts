import { IRegistry, NodeConfigurationJSON, NodeSpecJSON } from '@behave-graph/core';
export declare class NodeSpecGenerator {
    private registry;
    private specsWithoutConfig?;
    private specsCache;
    constructor(registry: IRegistry);
    getNodeTypes(): string[];
    getNodeSpec(nodeTypeName: string, configuration: NodeConfigurationJSON): NodeSpecJSON;
    getAllNodeSpecs(): NodeSpecJSON[];
}
export declare const useNodeSpecGenerator: (registry: IRegistry) => NodeSpecGenerator | undefined;
