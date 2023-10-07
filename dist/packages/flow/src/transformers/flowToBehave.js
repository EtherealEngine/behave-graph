"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flowToBehave = void 0;
const getNodeSpecJSON_1 = require("../util/getNodeSpecJSON");
const nodeSpecJSON = (0, getNodeSpecJSON_1.getNodeSpecJSON)();
const isNullish = (value) => value === undefined || value === null;
const flowToBehave = (nodes, edges) => {
    const graph = { nodes: [], variables: [], customEvents: [] };
    nodes.forEach((node) => {
        if (node.type === undefined)
            return;
        const nodeSpec = nodeSpecJSON.find((nodeSpec) => nodeSpec.type === node.type);
        if (nodeSpec === undefined)
            return;
        const behaveNode = {
            id: node.id,
            type: node.type,
            metadata: {
                positionX: String(node.position.x),
                positionY: String(node.position.y)
            }
        };
        Object.entries(node.data).forEach(([key, value]) => {
            if (behaveNode.parameters === undefined) {
                behaveNode.parameters = {};
            }
            behaveNode.parameters[key] = { value: value };
        });
        edges
            .filter((edge) => edge.target === node.id)
            .forEach((edge) => {
            const inputSpec = nodeSpec.inputs.find((input) => input.name === edge.targetHandle);
            if (inputSpec && inputSpec.valueType === 'flow') {
                return;
            }
            if (behaveNode.parameters === undefined) {
                behaveNode.parameters = {};
            }
            if (isNullish(edge.targetHandle))
                return;
            if (isNullish(edge.sourceHandle))
                return;
            behaveNode.parameters[edge.targetHandle] = {
                link: { nodeId: edge.source, socket: edge.sourceHandle }
            };
        });
        edges
            .filter((edge) => edge.source === node.id)
            .forEach((edge) => {
            const outputSpec = nodeSpec.outputs.find((output) => output.name === edge.sourceHandle);
            if (outputSpec && outputSpec.valueType !== 'flow') {
                return;
            }
            if (behaveNode.flows === undefined) {
                behaveNode.flows = {};
            }
            if (isNullish(edge.targetHandle))
                return;
            if (isNullish(edge.sourceHandle))
                return;
            behaveNode.flows[edge.sourceHandle] = {
                nodeId: edge.target,
                socket: edge.targetHandle
            };
        });
        graph.nodes?.push(behaveNode);
    });
    return graph;
};
exports.flowToBehave = flowToBehave;
