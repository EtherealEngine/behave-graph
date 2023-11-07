export const ObjectValue = new ValueType('object', () => [], (value) => typeof value === 'string' ? JSON.parse(value) : value, (value) => JSON.stringify(value), (value) => {
    throw new Error('Not implemented');
});
//# sourceMappingURL=Value.js.map