export default (inputs, specJSON) => {
    if (inputs.length === 0) {
        return '';
    }
    return `
| Name | Type | Default Value | Choices |
|------|------|---------------|---------|
${inputs
        .map((i) => `| ${i.name} | ${i.valueTypeName} | ${i.value ?? ''} | ${i.valueChoices?.join(', ')} |`)
        .join('\n')}
`;
};
//# sourceMappingURL=inputs-table.js.map