export default (sockets) => {
    if (sockets.length === 0) {
        return '';
    }
    return `
| Name | Type |
|------|------|
${sockets.map((i) => `| ${i.name} | ${i.valueTypeName} |`).join('\n')}
`;
};
//# sourceMappingURL=outputs-table.js.map