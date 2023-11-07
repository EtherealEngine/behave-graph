import socketsTable from './inputs-table.js';
export default (node, specJSON) => {
    if (!('inputs' in node) ||
        !Array.isArray(node.inputs) ||
        node.inputs.length === 0) {
        return '';
    }
    return `## Inputs

${socketsTable(node.inputs, specJSON)}`;
};
//# sourceMappingURL=inputs.js.map