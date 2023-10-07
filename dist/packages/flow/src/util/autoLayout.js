"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autoLayout = void 0;
const autoLayout = (nodes, edges) => {
    let x = 0;
    nodes.forEach((node) => {
        node.position.x = x;
        x += 200;
    });
};
exports.autoLayout = autoLayout;
