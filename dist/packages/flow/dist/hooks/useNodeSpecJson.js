import { writeNodeSpecsToJSON } from '@behave-graph/core';
import { useEffect, useState } from 'react';
export const useNodeSpecJson = (registry) => {
    const [specJson, setSpecJson] = useState();
    useEffect(() => {
        if (!registry.nodes || !registry.values || !registry.dependencies) {
            setSpecJson(undefined);
            return;
        }
        setSpecJson(writeNodeSpecsToJSON(registry));
    }, [registry.nodes, registry.values, registry.dependencies]);
    return specJson;
};
//# sourceMappingURL=useNodeSpecJson.js.map
//# sourceMappingURL=useNodeSpecJson.js.map