"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOnPressKey = void 0;
const react_1 = require("react");
const useOnPressKey = (key, callback) => {
    (0, react_1.useEffect)(() => {
        const handleKeyDown = (e) => {
            if (e.code === key) {
                callback(e);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [key, callback]);
};
exports.useOnPressKey = useOnPressKey;
