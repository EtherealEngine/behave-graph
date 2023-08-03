import { validateGraphAcyclic } from './validateGraphAcyclic.js';
import { validateGraphLinks } from './validateGraphLinks.js';
export function validateGraph(graph) {
    const errorList = [];
    errorList.push(...validateGraphAcyclic(graph.nodes), ...validateGraphLinks(graph.nodes));
    return errorList;
}
//# sourceMappingURL=validateGraph.js.map