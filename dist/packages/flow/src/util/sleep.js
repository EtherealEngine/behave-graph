"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = void 0;
function sleep(durationInSeconds) {
    return new Promise((resolve) => setTimeout(resolve, Math.round(durationInSeconds * 1000)));
}
exports.sleep = sleep;
