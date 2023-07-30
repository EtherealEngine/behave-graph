/* eslint-disable no-promise-executor-return */
export function sleep(durationInSeconds) {
    return new Promise((resolve) => setTimeout(resolve, Math.round(durationInSeconds * 1000)));
}
//# sourceMappingURL=sleep.js.map