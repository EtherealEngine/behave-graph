"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryColorMap = exports.valueTypeColorMap = exports.colors = void 0;
exports.colors = {
    red: ['bg-orange-700', 'border-orange-700', 'text-white'],
    green: ['bg-green-600', 'border-green-600', 'text-white'],
    lime: ['bg-lime-500', 'border-lime-500', 'text-white'],
    purple: ['bg-purple-500', 'border-purple-500', 'text-white'],
    blue: ['bg-cyan-600', 'border-cyan-600', 'text-white'],
    gray: ['bg-gray-500', 'border-gray-500', 'text-white'],
    white: ['bg-white', 'border-white', 'text-gray-700']
};
exports.valueTypeColorMap = {
    flow: 'white',
    number: 'green',
    float: 'green',
    integer: 'lime',
    boolean: 'red',
    string: 'purple'
};
exports.categoryColorMap = {
    Event: 'red',
    Logic: 'green',
    Variable: 'purple',
    Query: 'purple',
    Action: 'blue',
    Flow: 'gray',
    Time: 'gray',
    None: 'gray'
};
