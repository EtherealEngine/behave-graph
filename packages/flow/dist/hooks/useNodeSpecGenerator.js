// Generates node specs based on provided configuration,
// and caches the results.
import { writeDefaultNodeSpecsToJSON, writeNodeSpecToJSON, } from '@behave-graph/core';
import { useEffect, useState } from 'react';
export class NodeSpecGenerator {
    constructor(registry) {
        this.registry = registry;
        this.specsCache = {};
    }
    getNodeTypes() {
        return Object.keys(this.registry.nodes);
    }
    getNodeSpec(nodeTypeName, configuration) {
        let cacheKey = nodeTypeName + '\x01' + JSON.stringify(configuration);
        if (!this.specsCache[cacheKey]) {
            this.specsCache[cacheKey] = writeNodeSpecToJSON(this.registry, nodeTypeName, configuration);
        }
        return this.specsCache[cacheKey];
    }
    getAllNodeSpecs() {
        if (!this.specsWithoutConfig) {
            this.specsWithoutConfig = writeDefaultNodeSpecsToJSON(this.registry);
        }
        return this.specsWithoutConfig;
    }
}
export const useNodeSpecGenerator = (registry) => {
    const [specGenerator, setSpecGenerator] = useState();
    useEffect(() => {
        setSpecGenerator(new NodeSpecGenerator(registry));
    }, [registry.nodes, registry.values, registry.dependencies]);
    return specGenerator;
};
//# sourceMappingURL=useNodeSpecGenerator.js.map