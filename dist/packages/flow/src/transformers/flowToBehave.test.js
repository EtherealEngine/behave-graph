"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graph_json_1 = __importDefault(require("../../../../graphs/react-flow/graph.json"));
const behaveToFlow_1 = require("./behaveToFlow");
const flowToBehave_1 = require("./flowToBehave");
const flowGraph = graph_json_1.default;
const [nodes, edges] = (0, behaveToFlow_1.behaveToFlow)(flowGraph);
it('transforms from flow to behave', () => {
    const output = (0, flowToBehave_1.flowToBehave)(nodes, edges);
    expect(output).toEqual(flowGraph);
});
