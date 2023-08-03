import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Node } from '../components/Node.js';
const getCustomNodeTypes = (allSpecs) => {
    return allSpecs.reduce((nodes, node) => {
        nodes[node.type] = (props) => (_jsx(Node, { spec: node, allSpecs: allSpecs, ...props }));
        return nodes;
    }, {});
};
export const useCustomNodeTypes = ({ specJson }) => {
    const [customNodeTypes, setCustomNodeTypes] = useState();
    useEffect(() => {
        if (!specJson)
            return;
        const customNodeTypes = getCustomNodeTypes(specJson);
        setCustomNodeTypes(customNodeTypes);
    }, [specJson]);
    return customNodeTypes;
};
//# sourceMappingURL=useCustomNodeTypes.js.map