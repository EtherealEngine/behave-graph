"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoSizeInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const baseStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    visibility: "hidden",
    height: 0,
    width: "auto",
    whiteSpace: "pre",
};
const AutoSizeInput = ({ minWidth = 30, ...props }) => {
    const inputRef = (0, react_1.useRef)(null);
    const measureRef = (0, react_1.useRef)(null);
    const [styles, setStyles] = (0, react_1.useState)({});
    const setRef = (0, react_1.useCallback)((input) => {
        if (input) {
            const styles = window.getComputedStyle(input);
            setStyles({
                fontSize: styles.getPropertyValue("font-size"),
                paddingLeft: styles.getPropertyValue("padding-left"),
                paddingRight: styles.getPropertyValue("padding-right"),
            });
        }
        inputRef.current = input;
    }, []);
    (0, react_1.useEffect)(() => {
        if (measureRef.current === null)
            return;
        if (inputRef.current === null)
            return;
        const width = measureRef.current.clientWidth;
        inputRef.current.style.width = Math.max(minWidth, width) + "px";
    }, [props.value, minWidth, styles]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("input", { ref: setRef, ...props }), (0, jsx_runtime_1.jsx)("span", { ref: measureRef, style: { ...baseStyles, ...styles }, children: props.value })] }));
};
exports.AutoSizeInput = AutoSizeInput;
