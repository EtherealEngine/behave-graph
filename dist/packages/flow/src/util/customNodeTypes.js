"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customNodeTypes = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Node_1 = require("../components/Node");
const getNodeSpecJSON_1 = require("./getNodeSpecJSON");
const spec = (0, getNodeSpecJSON_1.getNodeSpecJSON)();
exports.customNodeTypes = spec.reduce((nodes, node) => {
    nodes[node.type] = (props) => (0, jsx_runtime_1.jsx)(Node_1.Node, { spec: node, ...props });
    return nodes;
}, {});
