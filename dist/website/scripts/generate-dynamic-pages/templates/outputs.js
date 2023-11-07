import socketsTable from './outputs-table.js';
export default (node, specJSON) => {
    if (!('outputs' in node) ||
        !Array.isArray(node.outputs) ||
        node.outputs.length === 0) {
        return '';
    }
    return `## Outputs

${socketsTable(node.outputs)}`;
};
//# sourceMappingURL=outputs.js.map