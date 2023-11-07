(function () { const t = document.createElement("link").relList; if (t && t.supports && t.supports("modulepreload"))
    return; for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
    r(o); new MutationObserver(o => { for (const i of o)
    if (i.type === "childList")
        for (const a of i.addedNodes)
            a.tagName === "LINK" && a.rel === "modulepreload" && r(a); }).observe(document, { childList: !0, subtree: !0 }); function n(o) { const i = {}; return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i; } function r(o) { if (o.ep)
    return; o.ep = !0; const i = n(o); fetch(o.href, i); } })();
function nl(e) { return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e; }
var Dh = { exports: {} }, rl = {}, jh = { exports: {} }, J = {}; /**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ea = Symbol.for("react.element"), _w = Symbol.for("react.portal"), Cw = Symbol.for("react.fragment"), Tw = Symbol.for("react.strict_mode"), Mw = Symbol.for("react.profiler"), Pw = Symbol.for("react.provider"), zw = Symbol.for("react.context"), Aw = Symbol.for("react.forward_ref"), Iw = Symbol.for("react.suspense"), Ow = Symbol.for("react.memo"), $w = Symbol.for("react.lazy"), om = Symbol.iterator;
function Lw(e) { return e === null || typeof e != "object" ? null : (e = om && e[om] || e["@@iterator"], typeof e == "function" ? e : null); }
var Fh = { isMounted: function () { return !1; }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, Vh = Object.assign, Hh = {};
function Io(e, t, n) { this.props = e, this.context = t, this.refs = Hh, this.updater = n || Fh; }
Io.prototype.isReactComponent = {};
Io.prototype.setState = function (e, t) { if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, e, t, "setState"); };
Io.prototype.forceUpdate = function (e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate"); };
function Bh() { }
Bh.prototype = Io.prototype;
function cf(e, t, n) { this.props = e, this.context = t, this.refs = Hh, this.updater = n || Fh; }
var ff = cf.prototype = new Bh;
ff.constructor = cf;
Vh(ff, Io.prototype);
ff.isPureReactComponent = !0;
var im = Array.isArray, Uh = Object.prototype.hasOwnProperty, df = { current: null }, qh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wh(e, t, n) { var r, o = {}, i = null, a = null; if (t != null)
    for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t)
        Uh.call(t, r) && !qh.hasOwnProperty(r) && (o[r] = t[r]); var s = arguments.length - 2; if (s === 1)
    o.children = n;
else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++)
        l[u] = arguments[u + 2];
    o.children = l;
} if (e && e.defaultProps)
    for (r in s = e.defaultProps, s)
        o[r] === void 0 && (o[r] = s[r]); return { $$typeof: ea, type: e, key: i, ref: a, props: o, _owner: df.current }; }
function Rw(e, t) { return { $$typeof: ea, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }; }
function mf(e) { return typeof e == "object" && e !== null && e.$$typeof === ea; }
function Dw(e) { var t = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, function (n) { return t[n]; }); }
var am = /\/+/g;
function Bl(e, t) { return typeof e == "object" && e !== null && e.key != null ? Dw("" + e.key) : t.toString(36); }
function Za(e, t, n, r, o) { var i = typeof e; (i === "undefined" || i === "boolean") && (e = null); var a = !1; if (e === null)
    a = !0;
else
    switch (i) {
        case "string":
        case "number":
            a = !0;
            break;
        case "object": switch (e.$$typeof) {
            case ea:
            case _w: a = !0;
        }
    } if (a)
    return a = e, o = o(a), e = r === "" ? "." + Bl(a, 0) : r, im(o) ? (n = "", e != null && (n = e.replace(am, "$&/") + "/"), Za(o, t, n, "", function (u) { return u; })) : o != null && (mf(o) && (o = Rw(o, n + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(am, "$&/") + "/") + e)), t.push(o)), 1; if (a = 0, r = r === "" ? "." : r + ":", im(e))
    for (var s = 0; s < e.length; s++) {
        i = e[s];
        var l = r + Bl(i, s);
        a += Za(i, t, n, l, o);
    }
else if (l = Lw(e), typeof l == "function")
    for (e = l.call(e), s = 0; !(i = e.next()).done;)
        i = i.value, l = r + Bl(i, s++), a += Za(i, t, n, l, o);
else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."); return a; }
function ha(e, t, n) { if (e == null)
    return e; var r = [], o = 0; return Za(e, r, "", "", function (i) { return t.call(n, i, o++); }), r; }
function jw(e) { if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function (n) { (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n); }, function (n) { (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n); }), e._status === -1 && (e._status = 0, e._result = t);
} if (e._status === 1)
    return e._result.default; throw e._result; }
var Ge = { current: null }, Ja = { transition: null }, Fw = { ReactCurrentDispatcher: Ge, ReactCurrentBatchConfig: Ja, ReactCurrentOwner: df };
J.Children = { map: ha, forEach: function (e, t, n) { ha(e, function () { t.apply(this, arguments); }, n); }, count: function (e) { var t = 0; return ha(e, function () { t++; }), t; }, toArray: function (e) { return ha(e, function (t) { return t; }) || []; }, only: function (e) { if (!mf(e))
        throw Error("React.Children.only expected to receive a single React element child."); return e; } };
J.Component = Io;
J.Fragment = Cw;
J.Profiler = Mw;
J.PureComponent = cf;
J.StrictMode = Tw;
J.Suspense = Iw;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fw;
J.cloneElement = function (e, t, n) { if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + "."); var r = Vh({}, e.props), o = e.key, i = e.ref, a = e._owner; if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, a = df.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
        var s = e.type.defaultProps;
    for (l in t)
        Uh.call(t, l) && !qh.hasOwnProperty(l) && (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
} var l = arguments.length - 2; if (l === 1)
    r.children = n;
else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++)
        s[u] = arguments[u + 2];
    r.children = s;
} return { $$typeof: ea, type: e.type, key: o, ref: i, props: r, _owner: a }; };
J.createContext = function (e) { return e = { $$typeof: zw, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Pw, _context: e }, e.Consumer = e; };
J.createElement = Wh;
J.createFactory = function (e) { var t = Wh.bind(null, e); return t.type = e, t; };
J.createRef = function () { return { current: null }; };
J.forwardRef = function (e) { return { $$typeof: Aw, render: e }; };
J.isValidElement = mf;
J.lazy = function (e) { return { $$typeof: $w, _payload: { _status: -1, _result: e }, _init: jw }; };
J.memo = function (e, t) { return { $$typeof: Ow, type: e, compare: t === void 0 ? null : t }; };
J.startTransition = function (e) { var t = Ja.transition; Ja.transition = {}; try {
    e();
}
finally {
    Ja.transition = t;
} };
J.unstable_act = function () { throw Error("act(...) is not supported in production builds of React."); };
J.useCallback = function (e, t) { return Ge.current.useCallback(e, t); };
J.useContext = function (e) { return Ge.current.useContext(e); };
J.useDebugValue = function () { };
J.useDeferredValue = function (e) { return Ge.current.useDeferredValue(e); };
J.useEffect = function (e, t) { return Ge.current.useEffect(e, t); };
J.useId = function () { return Ge.current.useId(); };
J.useImperativeHandle = function (e, t, n) { return Ge.current.useImperativeHandle(e, t, n); };
J.useInsertionEffect = function (e, t) { return Ge.current.useInsertionEffect(e, t); };
J.useLayoutEffect = function (e, t) { return Ge.current.useLayoutEffect(e, t); };
J.useMemo = function (e, t) { return Ge.current.useMemo(e, t); };
J.useReducer = function (e, t, n) { return Ge.current.useReducer(e, t, n); };
J.useRef = function (e) { return Ge.current.useRef(e); };
J.useState = function (e) { return Ge.current.useState(e); };
J.useSyncExternalStore = function (e, t, n) { return Ge.current.useSyncExternalStore(e, t, n); };
J.useTransition = function () { return Ge.current.useTransition(); };
J.version = "18.2.0";
jh.exports = J;
var T = jh.exports;
const pf = nl(T); /**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Vw = T, Hw = Symbol.for("react.element"), Bw = Symbol.for("react.fragment"), Uw = Object.prototype.hasOwnProperty, qw = Vw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ww = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yh(e, t, n) { var r, o = {}, i = null, a = null; n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref); for (r in t)
    Uw.call(t, r) && !Ww.hasOwnProperty(r) && (o[r] = t[r]); if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
        o[r] === void 0 && (o[r] = t[r]); return { $$typeof: Hw, type: e, key: i, ref: a, props: o, _owner: qw.current }; }
rl.Fragment = Bw;
rl.jsx = Yh;
rl.jsxs = Yh;
Dh.exports = rl;
var b = Dh.exports;
var Iu = {}, Xh = { exports: {} }, pt = {}, Qh = { exports: {} }, Gh = {}; /**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
(function (e) { function t(_, A) { var I = _.length; _.push(A); e: for (; 0 < I;) {
    var F = I - 1 >>> 1, H = _[F];
    if (0 < o(H, A))
        _[F] = A, _[I] = H, I = F;
    else
        break e;
} } function n(_) { return _.length === 0 ? null : _[0]; } function r(_) { if (_.length === 0)
    return null; var A = _[0], I = _.pop(); if (I !== A) {
    _[0] = I;
    e: for (var F = 0, H = _.length, X = H >>> 1; F < X;) {
        var Y = 2 * (F + 1) - 1, ee = _[Y], Z = Y + 1, ne = _[Z];
        if (0 > o(ee, I))
            Z < H && 0 > o(ne, ee) ? (_[F] = ne, _[Z] = I, F = Z) : (_[F] = ee, _[Y] = I, F = Y);
        else if (Z < H && 0 > o(ne, I))
            _[F] = ne, _[Z] = I, F = Z;
        else
            break e;
    }
} return A; } function o(_, A) { var I = _.sortIndex - A.sortIndex; return I !== 0 ? I : _.id - A.id; } if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () { return i.now(); };
}
else {
    var a = Date, s = a.now();
    e.unstable_now = function () { return a.now() - s; };
} var l = [], u = [], c = 1, f = null, d = 3, p = !1, g = !1, y = !1, x = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null; typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling); function v(_) { for (var A = n(u); A !== null;) {
    if (A.callback === null)
        r(u);
    else if (A.startTime <= _)
        r(u), A.sortIndex = A.expirationTime, t(l, A);
    else
        break;
    A = n(u);
} } function w(_) { if (y = !1, v(_), !g)
    if (n(l) !== null)
        g = !0, z(S);
    else {
        var A = n(u);
        A !== null && P(w, A.startTime - _);
    } } function S(_, A) { g = !1, y && (y = !1, m(M), M = -1), p = !0; var I = d; try {
    for (v(A), f = n(l); f !== null && (!(f.expirationTime > A) || _ && !D());) {
        var F = f.callback;
        if (typeof F == "function") {
            f.callback = null, d = f.priorityLevel;
            var H = F(f.expirationTime <= A);
            A = e.unstable_now(), typeof H == "function" ? f.callback = H : f === n(l) && r(l), v(A);
        }
        else
            r(l);
        f = n(l);
    }
    if (f !== null)
        var X = !0;
    else {
        var Y = n(u);
        Y !== null && P(w, Y.startTime - A), X = !1;
    }
    return X;
}
finally {
    f = null, d = I, p = !1;
} } var N = !1, C = null, M = -1, O = 5, R = -1; function D() { return !(e.unstable_now() - R < O); } function V() { if (C !== null) {
    var _ = e.unstable_now();
    R = _;
    var A = !0;
    try {
        A = C(!0, _);
    }
    finally {
        A ? L() : (N = !1, C = null);
    }
}
else
    N = !1; } var L; if (typeof h == "function")
    L = function () { h(V); };
else if (typeof MessageChannel < "u") {
    var E = new MessageChannel, $ = E.port2;
    E.port1.onmessage = V, L = function () { $.postMessage(null); };
}
else
    L = function () { x(V, 0); }; function z(_) { C = _, N || (N = !0, L()); } function P(_, A) { M = x(function () { _(e.unstable_now()); }, A); } e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (_) { _.callback = null; }, e.unstable_continueExecution = function () { g || p || (g = !0, z(S)); }, e.unstable_forceFrameRate = function (_) { 0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < _ ? Math.floor(1e3 / _) : 5; }, e.unstable_getCurrentPriorityLevel = function () { return d; }, e.unstable_getFirstCallbackNode = function () { return n(l); }, e.unstable_next = function (_) { switch (d) {
    case 1:
    case 2:
    case 3:
        var A = 3;
        break;
    default: A = d;
} var I = d; d = A; try {
    return _();
}
finally {
    d = I;
} }, e.unstable_pauseExecution = function () { }, e.unstable_requestPaint = function () { }, e.unstable_runWithPriority = function (_, A) { switch (_) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: break;
    default: _ = 3;
} var I = d; d = _; try {
    return A();
}
finally {
    d = I;
} }, e.unstable_scheduleCallback = function (_, A, I) { var F = e.unstable_now(); switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? F + I : F) : I = F, _) {
    case 1:
        var H = -1;
        break;
    case 2:
        H = 250;
        break;
    case 5:
        H = 1073741823;
        break;
    case 4:
        H = 1e4;
        break;
    default: H = 5e3;
} return H = I + H, _ = { id: c++, callback: A, priorityLevel: _, startTime: I, expirationTime: H, sortIndex: -1 }, I > F ? (_.sortIndex = I, t(u, _), n(l) === null && _ === n(u) && (y ? (m(M), M = -1) : y = !0, P(w, I - F))) : (_.sortIndex = H, t(l, _), g || p || (g = !0, z(S))), _; }, e.unstable_shouldYield = D, e.unstable_wrapCallback = function (_) { var A = d; return function () { var I = d; d = A; try {
    return _.apply(this, arguments);
}
finally {
    d = I;
} }; }; })(Gh);
Qh.exports = Gh;
var Yw = Qh.exports; /**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Kh = T, dt = Yw;
function j(e) { for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]); return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."; }
var Zh = new Set, ki = {};
function Ar(e, t) { vo(e, t), vo(e + "Capture", t); }
function vo(e, t) { for (ki[e] = t, e = 0; e < t.length; e++)
    Zh.add(t[e]); }
var fn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ou = Object.prototype.hasOwnProperty, Xw = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, sm = {}, lm = {};
function Qw(e) { return Ou.call(lm, e) ? !0 : Ou.call(sm, e) ? !1 : Xw.test(e) ? lm[e] = !0 : (sm[e] = !0, !1); }
function Gw(e, t, n, r) { if (n !== null && n.type === 0)
    return !1; switch (typeof t) {
    case "function":
    case "symbol": return !0;
    case "boolean": return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default: return !1;
} }
function Kw(e, t, n, r) { if (t === null || typeof t > "u" || Gw(e, t, n, r))
    return !0; if (r)
    return !1; if (n !== null)
    switch (n.type) {
        case 3: return !t;
        case 4: return t === !1;
        case 5: return isNaN(t);
        case 6: return isNaN(t) || 1 > t;
    } return !1; }
function Ke(e, t, n, r, o, i, a) { this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a; }
var Fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) { Fe[e] = new Ke(e, 0, !1, e, null, !1, !1); });
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) { var t = e[0]; Fe[t] = new Ke(t, 1, !1, e[1], null, !1, !1); });
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) { Fe[e] = new Ke(e, 2, !1, e.toLowerCase(), null, !1, !1); });
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) { Fe[e] = new Ke(e, 2, !1, e, null, !1, !1); });
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) { Fe[e] = new Ke(e, 3, !1, e.toLowerCase(), null, !1, !1); });
["checked", "multiple", "muted", "selected"].forEach(function (e) { Fe[e] = new Ke(e, 3, !0, e, null, !1, !1); });
["capture", "download"].forEach(function (e) { Fe[e] = new Ke(e, 4, !1, e, null, !1, !1); });
["cols", "rows", "size", "span"].forEach(function (e) { Fe[e] = new Ke(e, 6, !1, e, null, !1, !1); });
["rowSpan", "start"].forEach(function (e) { Fe[e] = new Ke(e, 5, !1, e.toLowerCase(), null, !1, !1); });
var hf = /[\-:]([a-z])/g;
function gf(e) { return e[1].toUpperCase(); }
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) { var t = e.replace(hf, gf); Fe[t] = new Ke(t, 1, !1, e, null, !1, !1); });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) { var t = e.replace(hf, gf); Fe[t] = new Ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1); });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) { var t = e.replace(hf, gf); Fe[t] = new Ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1); });
["tabIndex", "crossOrigin"].forEach(function (e) { Fe[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !1, !1); });
Fe.xlinkHref = new Ke("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) { Fe[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !0, !0); });
function yf(e, t, n, r) { var o = Fe.hasOwnProperty(t) ? Fe[t] : null; (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Kw(t, n, o, r) && (n = null), r || o === null ? Qw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n)))); }
var wn = Kh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ga = Symbol.for("react.element"), Hr = Symbol.for("react.portal"), Br = Symbol.for("react.fragment"), vf = Symbol.for("react.strict_mode"), $u = Symbol.for("react.profiler"), Jh = Symbol.for("react.provider"), eg = Symbol.for("react.context"), wf = Symbol.for("react.forward_ref"), Lu = Symbol.for("react.suspense"), Ru = Symbol.for("react.suspense_list"), xf = Symbol.for("react.memo"), Cn = Symbol.for("react.lazy"), tg = Symbol.for("react.offscreen"), um = Symbol.iterator;
function qo(e) { return e === null || typeof e != "object" ? null : (e = um && e[um] || e["@@iterator"], typeof e == "function" ? e : null); }
var we = Object.assign, Ul;
function oi(e) {
    if (Ul === void 0)
        try {
            throw Error();
        }
        catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Ul = t && t[1] || "";
        }
    return `
` + Ul + e;
}
var ql = !1;
function Wl(e, t) {
    if (!e || ql)
        return "";
    ql = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function () { throw Error(); }, Object.defineProperty(t.prototype, "props", { set: function () { throw Error(); } }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, []);
                }
                catch (u) {
                    var r = u;
                }
                Reflect.construct(e, [], t);
            }
            else {
                try {
                    t.call();
                }
                catch (u) {
                    r = u;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            }
            catch (u) {
                r = u;
            }
            e();
        }
    }
    catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), a = o.length - 1, s = i.length - 1; 1 <= a && 0 <= s && o[a] !== i[s];)
                s--;
            for (; 1 <= a && 0 <= s; a--, s--)
                if (o[a] !== i[s]) {
                    if (a !== 1 || s !== 1)
                        do
                            if (a--, s--, 0 > s || o[a] !== i[s]) {
                                var l = `
` + o[a].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
                            }
                        while (1 <= a && 0 <= s);
                    break;
                }
        }
    }
    finally {
        ql = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? oi(e) : "";
}
function Zw(e) { switch (e.tag) {
    case 5: return oi(e.type);
    case 16: return oi("Lazy");
    case 13: return oi("Suspense");
    case 19: return oi("SuspenseList");
    case 0:
    case 2:
    case 15: return e = Wl(e.type, !1), e;
    case 11: return e = Wl(e.type.render, !1), e;
    case 1: return e = Wl(e.type, !0), e;
    default: return "";
} }
function Du(e) { if (e == null)
    return null; if (typeof e == "function")
    return e.displayName || e.name || null; if (typeof e == "string")
    return e; switch (e) {
    case Br: return "Fragment";
    case Hr: return "Portal";
    case $u: return "Profiler";
    case vf: return "StrictMode";
    case Lu: return "Suspense";
    case Ru: return "SuspenseList";
} if (typeof e == "object")
    switch (e.$$typeof) {
        case eg: return (e.displayName || "Context") + ".Consumer";
        case Jh: return (e._context.displayName || "Context") + ".Provider";
        case wf:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case xf: return t = e.displayName || null, t !== null ? t : Du(e.type) || "Memo";
        case Cn:
            t = e._payload, e = e._init;
            try {
                return Du(e(t));
            }
            catch { }
    } return null; }
function Jw(e) { var t = e.type; switch (e.tag) {
    case 24: return "Cache";
    case 9: return (t.displayName || "Context") + ".Consumer";
    case 10: return (t._context.displayName || "Context") + ".Provider";
    case 18: return "DehydratedFragment";
    case 11: return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7: return "Fragment";
    case 5: return t;
    case 4: return "Portal";
    case 3: return "Root";
    case 6: return "Text";
    case 16: return Du(t);
    case 8: return t === vf ? "StrictMode" : "Mode";
    case 22: return "Offscreen";
    case 12: return "Profiler";
    case 21: return "Scope";
    case 13: return "Suspense";
    case 19: return "SuspenseList";
    case 25: return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t;
} return null; }
function Yn(e) { switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined": return e;
    case "object": return e;
    default: return "";
} }
function ng(e) { var t = e.type; return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio"); }
function ex(e) { var t = ng(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t]; if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function () { return o.call(this); }, set: function (a) { r = "" + a, i.call(this, a); } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function () { return r; }, setValue: function (a) { r = "" + a; }, stopTracking: function () { e._valueTracker = null, delete e[t]; } };
} }
function ya(e) { e._valueTracker || (e._valueTracker = ex(e)); }
function rg(e) { if (!e)
    return !1; var t = e._valueTracker; if (!t)
    return !0; var n = t.getValue(), r = ""; return e && (r = ng(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1; }
function vs(e) { if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null; try {
    return e.activeElement || e.body;
}
catch {
    return e.body;
} }
function ju(e, t) { var n = t.checked; return we({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked }); }
function cm(e, t) { var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked; n = Yn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null }; }
function og(e, t) { t = t.checked, t != null && yf(e, "checked", t, !1); }
function Fu(e, t) { og(e, t); var n = Yn(t.value), r = t.type; if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
} t.hasOwnProperty("value") ? Vu(e, t.type, n) : t.hasOwnProperty("defaultValue") && Vu(e, t.type, Yn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked); }
function fm(e, t, n) { if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
        return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
} n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n); }
function Vu(e, t, n) { (t !== "number" || vs(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n)); }
var ii = Array.isArray;
function oo(e, t, n, r) { if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
        t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
        o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
}
else {
    for (n = "" + Yn(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
            e[o].selected = !0, r && (e[o].defaultSelected = !0);
            return;
        }
        t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
} }
function Hu(e, t) { if (t.dangerouslySetInnerHTML != null)
    throw Error(j(91)); return we({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }); }
function dm(e, t) { var n = t.value; if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null)
            throw Error(j(92));
        if (ii(n)) {
            if (1 < n.length)
                throw Error(j(93));
            n = n[0];
        }
        t = n;
    }
    t == null && (t = ""), n = t;
} e._wrapperState = { initialValue: Yn(n) }; }
function ig(e, t) { var n = Yn(t.value), r = Yn(t.defaultValue); n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r); }
function mm(e) { var t = e.textContent; t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t); }
function ag(e) { switch (e) {
    case "svg": return "http://www.w3.org/2000/svg";
    case "math": return "http://www.w3.org/1998/Math/MathML";
    default: return "http://www.w3.org/1999/xhtml";
} }
function Bu(e, t) { return e == null || e === "http://www.w3.org/1999/xhtml" ? ag(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e; }
var va, sg = function (e) { return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, o) { MSApp.execUnsafeLocalFunction(function () { return e(t, n, r, o); }); } : e; }(function (e, t) { if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
else {
    for (va = va || document.createElement("div"), va.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = va.firstChild; e.firstChild;)
        e.removeChild(e.firstChild);
    for (; t.firstChild;)
        e.appendChild(t.firstChild);
} });
function Ei(e, t) { if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
    }
} e.textContent = t; }
var di = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, tx = ["Webkit", "ms", "Moz", "O"];
Object.keys(di).forEach(function (e) { tx.forEach(function (t) { t = t + e.charAt(0).toUpperCase() + e.substring(1), di[t] = di[e]; }); });
function lg(e, t, n) { return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || di.hasOwnProperty(e) && di[e] ? ("" + t).trim() : t + "px"; }
function ug(e, t) { e = e.style; for (var n in t)
    if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, o = lg(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    } }
var nx = we({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Uu(e, t) { if (t) {
    if (nx[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null)
            throw Error(j(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
            throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object")
        throw Error(j(62));
} }
function qu(e, t) { if (e.indexOf("-") === -1)
    return typeof t.is == "string"; switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph": return !1;
    default: return !0;
} }
var Wu = null;
function Sf(e) { return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e; }
var Yu = null, io = null, ao = null;
function pm(e) { if (e = ra(e)) {
    if (typeof Yu != "function")
        throw Error(j(280));
    var t = e.stateNode;
    t && (t = ll(t), Yu(e.stateNode, e.type, t));
} }
function cg(e) { io ? ao ? ao.push(e) : ao = [e] : io = e; }
function fg() { if (io) {
    var e = io, t = ao;
    if (ao = io = null, pm(e), t)
        for (e = 0; e < t.length; e++)
            pm(t[e]);
} }
function dg(e, t) { return e(t); }
function mg() { }
var Yl = !1;
function pg(e, t, n) { if (Yl)
    return e(t, n); Yl = !0; try {
    return dg(e, t, n);
}
finally {
    Yl = !1, (io !== null || ao !== null) && (mg(), fg());
} }
function Ni(e, t) { var n = e.stateNode; if (n === null)
    return null; var r = ll(n); if (r === null)
    return null; n = r[t]; e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
    default: e = !1;
} if (e)
    return null; if (n && typeof n != "function")
    throw Error(j(231, t, typeof n)); return n; }
var Xu = !1;
if (fn)
    try {
        var Wo = {};
        Object.defineProperty(Wo, "passive", { get: function () { Xu = !0; } }), window.addEventListener("test", Wo, Wo), window.removeEventListener("test", Wo, Wo);
    }
    catch {
        Xu = !1;
    }
function rx(e, t, n, r, o, i, a, s, l) { var u = Array.prototype.slice.call(arguments, 3); try {
    t.apply(n, u);
}
catch (c) {
    this.onError(c);
} }
var mi = !1, ws = null, xs = !1, Qu = null, ox = { onError: function (e) { mi = !0, ws = e; } };
function ix(e, t, n, r, o, i, a, s, l) { mi = !1, ws = null, rx.apply(ox, arguments); }
function ax(e, t, n, r, o, i, a, s, l) { if (ix.apply(this, arguments), mi) {
    if (mi) {
        var u = ws;
        mi = !1, ws = null;
    }
    else
        throw Error(j(198));
    xs || (xs = !0, Qu = u);
} }
function Ir(e) { var t = e, n = e; if (e.alternate)
    for (; t.return;)
        t = t.return;
else {
    e = t;
    do
        t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
} return t.tag === 3 ? n : null; }
function hg(e) { if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
        return t.dehydrated;
} return null; }
function hm(e) { if (Ir(e) !== e)
    throw Error(j(188)); }
function sx(e) { var t = e.alternate; if (!t) {
    if (t = Ir(e), t === null)
        throw Error(j(188));
    return t !== e ? null : e;
} for (var n = e, r = t;;) {
    var o = n.return;
    if (o === null)
        break;
    var i = o.alternate;
    if (i === null) {
        if (r = o.return, r !== null) {
            n = r;
            continue;
        }
        break;
    }
    if (o.child === i.child) {
        for (i = o.child; i;) {
            if (i === n)
                return hm(o), e;
            if (i === r)
                return hm(o), t;
            i = i.sibling;
        }
        throw Error(j(188));
    }
    if (n.return !== r.return)
        n = o, r = i;
    else {
        for (var a = !1, s = o.child; s;) {
            if (s === n) {
                a = !0, n = o, r = i;
                break;
            }
            if (s === r) {
                a = !0, r = o, n = i;
                break;
            }
            s = s.sibling;
        }
        if (!a) {
            for (s = i.child; s;) {
                if (s === n) {
                    a = !0, n = i, r = o;
                    break;
                }
                if (s === r) {
                    a = !0, r = i, n = o;
                    break;
                }
                s = s.sibling;
            }
            if (!a)
                throw Error(j(189));
        }
    }
    if (n.alternate !== r)
        throw Error(j(190));
} if (n.tag !== 3)
    throw Error(j(188)); return n.stateNode.current === n ? e : t; }
function gg(e) { return e = sx(e), e !== null ? yg(e) : null; }
function yg(e) { if (e.tag === 5 || e.tag === 6)
    return e; for (e = e.child; e !== null;) {
    var t = yg(e);
    if (t !== null)
        return t;
    e = e.sibling;
} return null; }
var vg = dt.unstable_scheduleCallback, gm = dt.unstable_cancelCallback, lx = dt.unstable_shouldYield, ux = dt.unstable_requestPaint, _e = dt.unstable_now, cx = dt.unstable_getCurrentPriorityLevel, bf = dt.unstable_ImmediatePriority, wg = dt.unstable_UserBlockingPriority, Ss = dt.unstable_NormalPriority, fx = dt.unstable_LowPriority, xg = dt.unstable_IdlePriority, ol = null, Gt = null;
function dx(e) { if (Gt && typeof Gt.onCommitFiberRoot == "function")
    try {
        Gt.onCommitFiberRoot(ol, e, void 0, (e.current.flags & 128) === 128);
    }
    catch { } }
var jt = Math.clz32 ? Math.clz32 : hx, mx = Math.log, px = Math.LN2;
function hx(e) { return e >>>= 0, e === 0 ? 32 : 31 - (mx(e) / px | 0) | 0; }
var wa = 64, xa = 4194304;
function ai(e) { switch (e & -e) {
    case 1: return 1;
    case 2: return 2;
    case 4: return 4;
    case 8: return 8;
    case 16: return 16;
    case 32: return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152: return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864: return e & 130023424;
    case 134217728: return 134217728;
    case 268435456: return 268435456;
    case 536870912: return 536870912;
    case 1073741824: return 1073741824;
    default: return e;
} }
function bs(e, t) { var n = e.pendingLanes; if (n === 0)
    return 0; var r = 0, o = e.suspendedLanes, i = e.pingedLanes, a = n & 268435455; if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? r = ai(s) : (i &= a, i !== 0 && (r = ai(i)));
}
else
    a = n & ~o, a !== 0 ? r = ai(a) : i !== 0 && (r = ai(i)); if (r === 0)
    return 0; if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t; if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t;)
        n = 31 - jt(t), o = 1 << n, r |= e[n], t &= ~o; return r; }
function gx(e, t) { switch (e) {
    case 1:
    case 2:
    case 4: return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152: return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864: return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824: return -1;
    default: return -1;
} }
function yx(e, t) { for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
    var a = 31 - jt(i), s = 1 << a, l = o[a];
    l === -1 ? (!(s & n) || s & r) && (o[a] = gx(s, t)) : l <= t && (e.expiredLanes |= s), i &= ~s;
} }
function Gu(e) { return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0; }
function Sg() { var e = wa; return wa <<= 1, !(wa & 4194240) && (wa = 64), e; }
function Xl(e) { for (var t = [], n = 0; 31 > n; n++)
    t.push(e); return t; }
function ta(e, t, n) { e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - jt(t), e[t] = n; }
function vx(e, t) { var n = e.pendingLanes & ~t; e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements; var r = e.eventTimes; for (e = e.expirationTimes; 0 < n;) {
    var o = 31 - jt(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
} }
function kf(e, t) { var n = e.entangledLanes |= t; for (e = e.entanglements; n;) {
    var r = 31 - jt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
} }
var re = 0;
function bg(e) { return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1; }
var kg, Ef, Eg, Ng, _g, Ku = !1, Sa = [], Rn = null, Dn = null, jn = null, _i = new Map, Ci = new Map, zn = [], wx = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ym(e, t) { switch (e) {
    case "focusin":
    case "focusout":
        Rn = null;
        break;
    case "dragenter":
    case "dragleave":
        Dn = null;
        break;
    case "mouseover":
    case "mouseout":
        jn = null;
        break;
    case "pointerover":
    case "pointerout":
        _i.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture": Ci.delete(t.pointerId);
} }
function Yo(e, t, n, r, o, i) { return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = ra(t), t !== null && Ef(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e); }
function xx(e, t, n, r, o) { switch (t) {
    case "focusin": return Rn = Yo(Rn, e, t, n, r, o), !0;
    case "dragenter": return Dn = Yo(Dn, e, t, n, r, o), !0;
    case "mouseover": return jn = Yo(jn, e, t, n, r, o), !0;
    case "pointerover":
        var i = o.pointerId;
        return _i.set(i, Yo(_i.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture": return i = o.pointerId, Ci.set(i, Yo(Ci.get(i) || null, e, t, n, r, o)), !0;
} return !1; }
function Cg(e) { var t = mr(e.target); if (t !== null) {
    var n = Ir(t);
    if (n !== null) {
        if (t = n.tag, t === 13) {
            if (t = hg(n), t !== null) {
                e.blockedOn = t, _g(e.priority, function () { Eg(n); });
                return;
            }
        }
        else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
        }
    }
} e.blockedOn = null; }
function es(e) { if (e.blockedOn !== null)
    return !1; for (var t = e.targetContainers; 0 < t.length;) {
    var n = Zu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Wu = r, n.target.dispatchEvent(r), Wu = null;
    }
    else
        return t = ra(n), t !== null && Ef(t), e.blockedOn = n, !1;
    t.shift();
} return !0; }
function vm(e, t, n) { es(e) && n.delete(t); }
function Sx() { Ku = !1, Rn !== null && es(Rn) && (Rn = null), Dn !== null && es(Dn) && (Dn = null), jn !== null && es(jn) && (jn = null), _i.forEach(vm), Ci.forEach(vm); }
function Xo(e, t) { e.blockedOn === t && (e.blockedOn = null, Ku || (Ku = !0, dt.unstable_scheduleCallback(dt.unstable_NormalPriority, Sx))); }
function Ti(e) { function t(o) { return Xo(o, e); } if (0 < Sa.length) {
    Xo(Sa[0], e);
    for (var n = 1; n < Sa.length; n++) {
        var r = Sa[n];
        r.blockedOn === e && (r.blockedOn = null);
    }
} for (Rn !== null && Xo(Rn, e), Dn !== null && Xo(Dn, e), jn !== null && Xo(jn, e), _i.forEach(t), Ci.forEach(t), n = 0; n < zn.length; n++)
    r = zn[n], r.blockedOn === e && (r.blockedOn = null); for (; 0 < zn.length && (n = zn[0], n.blockedOn === null);)
    Cg(n), n.blockedOn === null && zn.shift(); }
var so = wn.ReactCurrentBatchConfig, ks = !0;
function bx(e, t, n, r) { var o = re, i = so.transition; so.transition = null; try {
    re = 1, Nf(e, t, n, r);
}
finally {
    re = o, so.transition = i;
} }
function kx(e, t, n, r) { var o = re, i = so.transition; so.transition = null; try {
    re = 4, Nf(e, t, n, r);
}
finally {
    re = o, so.transition = i;
} }
function Nf(e, t, n, r) { if (ks) {
    var o = Zu(e, t, n, r);
    if (o === null)
        ou(e, t, r, Es, n), ym(e, r);
    else if (xx(o, e, t, n, r))
        r.stopPropagation();
    else if (ym(e, r), t & 4 && -1 < wx.indexOf(e)) {
        for (; o !== null;) {
            var i = ra(o);
            if (i !== null && kg(i), i = Zu(e, t, n, r), i === null && ou(e, t, r, Es, n), i === o)
                break;
            o = i;
        }
        o !== null && r.stopPropagation();
    }
    else
        ou(e, t, r, null, n);
} }
var Es = null;
function Zu(e, t, n, r) { if (Es = null, e = Sf(r), e = mr(e), e !== null)
    if (t = Ir(e), t === null)
        e = null;
    else if (n = t.tag, n === 13) {
        if (e = hg(t), e !== null)
            return e;
        e = null;
    }
    else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
    }
    else
        t !== e && (e = null); return Es = e, null; }
function Tg(e) { switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart": return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave": return 4;
    case "message": switch (cx()) {
        case bf: return 1;
        case wg: return 4;
        case Ss:
        case fx: return 16;
        case xg: return 536870912;
        default: return 16;
    }
    default: return 16;
} }
var On = null, _f = null, ts = null;
function Mg() { if (ts)
    return ts; var e, t = _f, n = t.length, r, o = "value" in On ? On.value : On.textContent, i = o.length; for (e = 0; e < n && t[e] === o[e]; e++)
    ; var a = n - e; for (r = 1; r <= a && t[n - r] === o[i - r]; r++)
    ; return ts = o.slice(e, 1 < r ? 1 - r : void 0); }
function ns(e) { var t = e.keyCode; return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0; }
function ba() { return !0; }
function wm() { return !1; }
function ht(e) { function t(n, r, o, i, a) { this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = a, this.currentTarget = null; for (var s in e)
    e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]); return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ba : wm, this.isPropagationStopped = wm, this; } return we(t.prototype, { preventDefault: function () { this.defaultPrevented = !0; var n = this.nativeEvent; n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ba); }, stopPropagation: function () { var n = this.nativeEvent; n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ba); }, persist: function () { }, isPersistent: ba }), t; }
var Oo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) { return e.timeStamp || Date.now(); }, defaultPrevented: 0, isTrusted: 0 }, Cf = ht(Oo), na = we({}, Oo, { view: 0, detail: 0 }), Ex = ht(na), Ql, Gl, Qo, il = we({}, na, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Tf, button: 0, buttons: 0, relatedTarget: function (e) { return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget; }, movementX: function (e) { return "movementX" in e ? e.movementX : (e !== Qo && (Qo && e.type === "mousemove" ? (Ql = e.screenX - Qo.screenX, Gl = e.screenY - Qo.screenY) : Gl = Ql = 0, Qo = e), Ql); }, movementY: function (e) { return "movementY" in e ? e.movementY : Gl; } }), xm = ht(il), Nx = we({}, il, { dataTransfer: 0 }), _x = ht(Nx), Cx = we({}, na, { relatedTarget: 0 }), Kl = ht(Cx), Tx = we({}, Oo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Mx = ht(Tx), Px = we({}, Oo, { clipboardData: function (e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData; } }), zx = ht(Px), Ax = we({}, Oo, { data: 0 }), Sm = ht(Ax), Ix = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, Ox = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, $x = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Lx(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : (e = $x[e]) ? !!t[e] : !1; }
function Tf() { return Lx; }
var Rx = we({}, na, { key: function (e) { if (e.key) {
        var t = Ix[e.key] || e.key;
        if (t !== "Unidentified")
            return t;
    } return e.type === "keypress" ? (e = ns(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ox[e.keyCode] || "Unidentified" : ""; }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Tf, charCode: function (e) { return e.type === "keypress" ? ns(e) : 0; }, keyCode: function (e) { return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; }, which: function (e) { return e.type === "keypress" ? ns(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; } }), Dx = ht(Rx), jx = we({}, il, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), bm = ht(jx), Fx = we({}, na, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Tf }), Vx = ht(Fx), Hx = we({}, Oo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Bx = ht(Hx), Ux = we({}, il, { deltaX: function (e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0; }, deltaY: function (e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0; }, deltaZ: 0, deltaMode: 0 }), qx = ht(Ux), Wx = [9, 13, 27, 32], Mf = fn && "CompositionEvent" in window, pi = null;
fn && "documentMode" in document && (pi = document.documentMode);
var Yx = fn && "TextEvent" in window && !pi, Pg = fn && (!Mf || pi && 8 < pi && 11 >= pi), km = String.fromCharCode(32), Em = !1;
function zg(e, t) { switch (e) {
    case "keyup": return Wx.indexOf(t.keyCode) !== -1;
    case "keydown": return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout": return !0;
    default: return !1;
} }
function Ag(e) { return e = e.detail, typeof e == "object" && "data" in e ? e.data : null; }
var Ur = !1;
function Xx(e, t) { switch (e) {
    case "compositionend": return Ag(t);
    case "keypress": return t.which !== 32 ? null : (Em = !0, km);
    case "textInput": return e = t.data, e === km && Em ? null : e;
    default: return null;
} }
function Qx(e, t) { if (Ur)
    return e === "compositionend" || !Mf && zg(e, t) ? (e = Mg(), ts = _f = On = null, Ur = !1, e) : null; switch (e) {
    case "paste": return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which);
        }
        return null;
    case "compositionend": return Pg && t.locale !== "ko" ? null : t.data;
    default: return null;
} }
var Gx = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Nm(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t === "input" ? !!Gx[e.type] : t === "textarea"; }
function Ig(e, t, n, r) { cg(r), t = Ns(t, "onChange"), 0 < t.length && (n = new Cf("onChange", "change", null, n, r), e.push({ event: n, listeners: t })); }
var hi = null, Mi = null;
function Kx(e) { Ug(e, 0); }
function al(e) { var t = Yr(e); if (rg(t))
    return e; }
function Zx(e, t) { if (e === "change")
    return t; }
var Og = !1;
if (fn) {
    var Zl;
    if (fn) {
        var Jl = "oninput" in document;
        if (!Jl) {
            var _m = document.createElement("div");
            _m.setAttribute("oninput", "return;"), Jl = typeof _m.oninput == "function";
        }
        Zl = Jl;
    }
    else
        Zl = !1;
    Og = Zl && (!document.documentMode || 9 < document.documentMode);
}
function Cm() { hi && (hi.detachEvent("onpropertychange", $g), Mi = hi = null); }
function $g(e) { if (e.propertyName === "value" && al(Mi)) {
    var t = [];
    Ig(t, Mi, e, Sf(e)), pg(Kx, t);
} }
function Jx(e, t, n) { e === "focusin" ? (Cm(), hi = t, Mi = n, hi.attachEvent("onpropertychange", $g)) : e === "focusout" && Cm(); }
function e2(e) { if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return al(Mi); }
function t2(e, t) { if (e === "click")
    return al(t); }
function n2(e, t) { if (e === "input" || e === "change")
    return al(t); }
function r2(e, t) { return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t; }
var Vt = typeof Object.is == "function" ? Object.is : r2;
function Pi(e, t) { if (Vt(e, t))
    return !0; if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1; var n = Object.keys(e), r = Object.keys(t); if (n.length !== r.length)
    return !1; for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ou.call(t, o) || !Vt(e[o], t[o]))
        return !1;
} return !0; }
function Tm(e) { for (; e && e.firstChild;)
    e = e.firstChild; return e; }
function Mm(e, t) { var n = Tm(e); e = 0; for (var r; n;) {
    if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t)
            return { node: n, offset: t - e };
        e = r;
    }
    e: {
        for (; n;) {
            if (n.nextSibling) {
                n = n.nextSibling;
                break e;
            }
            n = n.parentNode;
        }
        n = void 0;
    }
    n = Tm(n);
} }
function Lg(e, t) { return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Lg(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1; }
function Rg() { for (var e = window, t = vs(); t instanceof e.HTMLIFrameElement;) {
    try {
        var n = typeof t.contentWindow.location.href == "string";
    }
    catch {
        n = !1;
    }
    if (n)
        e = t.contentWindow;
    else
        break;
    t = vs(e.document);
} return t; }
function Pf(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true"); }
function o2(e) { var t = Rg(), n = e.focusedElem, r = e.selectionRange; if (t !== n && n && n.ownerDocument && Lg(n.ownerDocument.documentElement, n)) {
    if (r !== null && Pf(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
            n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
            e = e.getSelection();
            var o = n.textContent.length, i = Math.min(r.start, o);
            r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Mm(n, i);
            var a = Mm(n, r);
            o && a && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
        }
    }
    for (t = [], e = n; e = e.parentNode;)
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
} }
var i2 = fn && "documentMode" in document && 11 >= document.documentMode, qr = null, Ju = null, gi = null, ec = !1;
function Pm(e, t, n) { var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument; ec || qr == null || qr !== vs(r) || (r = qr, "selectionStart" in r && Pf(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), gi && Pi(gi, r) || (gi = r, r = Ns(Ju, "onSelect"), 0 < r.length && (t = new Cf("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = qr))); }
function ka(e, t) { var n = {}; return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n; }
var Wr = { animationend: ka("Animation", "AnimationEnd"), animationiteration: ka("Animation", "AnimationIteration"), animationstart: ka("Animation", "AnimationStart"), transitionend: ka("Transition", "TransitionEnd") }, eu = {}, Dg = {};
fn && (Dg = document.createElement("div").style, "AnimationEvent" in window || (delete Wr.animationend.animation, delete Wr.animationiteration.animation, delete Wr.animationstart.animation), "TransitionEvent" in window || delete Wr.transitionend.transition);
function sl(e) { if (eu[e])
    return eu[e]; if (!Wr[e])
    return e; var t = Wr[e], n; for (n in t)
    if (t.hasOwnProperty(n) && n in Dg)
        return eu[e] = t[n]; return e; }
var jg = sl("animationend"), Fg = sl("animationiteration"), Vg = sl("animationstart"), Hg = sl("transitionend"), Bg = new Map, zm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Jn(e, t) { Bg.set(e, t), Ar(t, [e]); }
for (var tu = 0; tu < zm.length; tu++) {
    var nu = zm[tu], a2 = nu.toLowerCase(), s2 = nu[0].toUpperCase() + nu.slice(1);
    Jn(a2, "on" + s2);
}
Jn(jg, "onAnimationEnd");
Jn(Fg, "onAnimationIteration");
Jn(Vg, "onAnimationStart");
Jn("dblclick", "onDoubleClick");
Jn("focusin", "onFocus");
Jn("focusout", "onBlur");
Jn(Hg, "onTransitionEnd");
vo("onMouseEnter", ["mouseout", "mouseover"]);
vo("onMouseLeave", ["mouseout", "mouseover"]);
vo("onPointerEnter", ["pointerout", "pointerover"]);
vo("onPointerLeave", ["pointerout", "pointerover"]);
Ar("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ar("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ar("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ar("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ar("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ar("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var si = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), l2 = new Set("cancel close invalid load scroll toggle".split(" ").concat(si));
function Am(e, t, n) { var r = e.type || "unknown-event"; e.currentTarget = n, ax(r, t, void 0, e), e.currentTarget = null; }
function Ug(e, t) { t = (t & 4) !== 0; for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
        var i = void 0;
        if (t)
            for (var a = r.length - 1; 0 <= a; a--) {
                var s = r[a], l = s.instance, u = s.currentTarget;
                if (s = s.listener, l !== i && o.isPropagationStopped())
                    break e;
                Am(o, s, u), i = l;
            }
        else
            for (a = 0; a < r.length; a++) {
                if (s = r[a], l = s.instance, u = s.currentTarget, s = s.listener, l !== i && o.isPropagationStopped())
                    break e;
                Am(o, s, u), i = l;
            }
    }
} if (xs)
    throw e = Qu, xs = !1, Qu = null, e; }
function ue(e, t) { var n = t[ic]; n === void 0 && (n = t[ic] = new Set); var r = e + "__bubble"; n.has(r) || (qg(t, e, 2, !1), n.add(r)); }
function ru(e, t, n) { var r = 0; t && (r |= 4), qg(n, e, r, t); }
var Ea = "_reactListening" + Math.random().toString(36).slice(2);
function zi(e) { if (!e[Ea]) {
    e[Ea] = !0, Zh.forEach(function (n) { n !== "selectionchange" && (l2.has(n) || ru(n, !1, e), ru(n, !0, e)); });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ea] || (t[Ea] = !0, ru("selectionchange", !1, t));
} }
function qg(e, t, n, r) { switch (Tg(t)) {
    case 1:
        var o = bx;
        break;
    case 4:
        o = kx;
        break;
    default: o = Nf;
} n = o.bind(null, t, n, e), o = void 0, !Xu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1); }
function ou(e, t, n, r, o) { var i = r; if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
        if (r === null)
            return;
        var a = r.tag;
        if (a === 3 || a === 4) {
            var s = r.stateNode.containerInfo;
            if (s === o || s.nodeType === 8 && s.parentNode === o)
                break;
            if (a === 4)
                for (a = r.return; a !== null;) {
                    var l = a.tag;
                    if ((l === 3 || l === 4) && (l = a.stateNode.containerInfo, l === o || l.nodeType === 8 && l.parentNode === o))
                        return;
                    a = a.return;
                }
            for (; s !== null;) {
                if (a = mr(s), a === null)
                    return;
                if (l = a.tag, l === 5 || l === 6) {
                    r = i = a;
                    continue e;
                }
                s = s.parentNode;
            }
        }
        r = r.return;
    } pg(function () { var u = i, c = Sf(n), f = []; e: {
    var d = Bg.get(e);
    if (d !== void 0) {
        var p = Cf, g = e;
        switch (e) {
            case "keypress": if (ns(n) === 0)
                break e;
            case "keydown":
            case "keyup":
                p = Dx;
                break;
            case "focusin":
                g = "focus", p = Kl;
                break;
            case "focusout":
                g = "blur", p = Kl;
                break;
            case "beforeblur":
            case "afterblur":
                p = Kl;
                break;
            case "click": if (n.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
                p = xm;
                break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
                p = _x;
                break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
                p = Vx;
                break;
            case jg:
            case Fg:
            case Vg:
                p = Mx;
                break;
            case Hg:
                p = Bx;
                break;
            case "scroll":
                p = Ex;
                break;
            case "wheel":
                p = qx;
                break;
            case "copy":
            case "cut":
            case "paste":
                p = zx;
                break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup": p = bm;
        }
        var y = (t & 4) !== 0, x = !y && e === "scroll", m = y ? d !== null ? d + "Capture" : null : d;
        y = [];
        for (var h = u, v; h !== null;) {
            v = h;
            var w = v.stateNode;
            if (v.tag === 5 && w !== null && (v = w, m !== null && (w = Ni(h, m), w != null && y.push(Ai(h, w, v)))), x)
                break;
            h = h.return;
        }
        0 < y.length && (d = new p(d, g, null, n, c), f.push({ event: d, listeners: y }));
    }
} if (!(t & 7)) {
    e: {
        if (d = e === "mouseover" || e === "pointerover", p = e === "mouseout" || e === "pointerout", d && n !== Wu && (g = n.relatedTarget || n.fromElement) && (mr(g) || g[dn]))
            break e;
        if ((p || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, p ? (g = n.relatedTarget || n.toElement, p = u, g = g ? mr(g) : null, g !== null && (x = Ir(g), g !== x || g.tag !== 5 && g.tag !== 6) && (g = null)) : (p = null, g = u), p !== g)) {
            if (y = xm, w = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (y = bm, w = "onPointerLeave", m = "onPointerEnter", h = "pointer"), x = p == null ? d : Yr(p), v = g == null ? d : Yr(g), d = new y(w, h + "leave", p, n, c), d.target = x, d.relatedTarget = v, w = null, mr(c) === u && (y = new y(m, h + "enter", g, n, c), y.target = v, y.relatedTarget = x, w = y), x = w, p && g)
                t: {
                    for (y = p, m = g, h = 0, v = y; v; v = Rr(v))
                        h++;
                    for (v = 0, w = m; w; w = Rr(w))
                        v++;
                    for (; 0 < h - v;)
                        y = Rr(y), h--;
                    for (; 0 < v - h;)
                        m = Rr(m), v--;
                    for (; h--;) {
                        if (y === m || m !== null && y === m.alternate)
                            break t;
                        y = Rr(y), m = Rr(m);
                    }
                    y = null;
                }
            else
                y = null;
            p !== null && Im(f, d, p, y, !1), g !== null && x !== null && Im(f, x, g, y, !0);
        }
    }
    e: {
        if (d = u ? Yr(u) : window, p = d.nodeName && d.nodeName.toLowerCase(), p === "select" || p === "input" && d.type === "file")
            var S = Zx;
        else if (Nm(d))
            if (Og)
                S = n2;
            else {
                S = e2;
                var N = Jx;
            }
        else
            (p = d.nodeName) && p.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (S = t2);
        if (S && (S = S(e, u))) {
            Ig(f, S, n, c);
            break e;
        }
        N && N(e, d, u), e === "focusout" && (N = d._wrapperState) && N.controlled && d.type === "number" && Vu(d, "number", d.value);
    }
    switch (N = u ? Yr(u) : window, e) {
        case "focusin":
            (Nm(N) || N.contentEditable === "true") && (qr = N, Ju = u, gi = null);
            break;
        case "focusout":
            gi = Ju = qr = null;
            break;
        case "mousedown":
            ec = !0;
            break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
            ec = !1, Pm(f, n, c);
            break;
        case "selectionchange": if (i2)
            break;
        case "keydown":
        case "keyup": Pm(f, n, c);
    }
    var C;
    if (Mf)
        e: {
            switch (e) {
                case "compositionstart":
                    var M = "onCompositionStart";
                    break e;
                case "compositionend":
                    M = "onCompositionEnd";
                    break e;
                case "compositionupdate":
                    M = "onCompositionUpdate";
                    break e;
            }
            M = void 0;
        }
    else
        Ur ? zg(e, n) && (M = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
    M && (Pg && n.locale !== "ko" && (Ur || M !== "onCompositionStart" ? M === "onCompositionEnd" && Ur && (C = Mg()) : (On = c, _f = "value" in On ? On.value : On.textContent, Ur = !0)), N = Ns(u, M), 0 < N.length && (M = new Sm(M, e, null, n, c), f.push({ event: M, listeners: N }), C ? M.data = C : (C = Ag(n), C !== null && (M.data = C)))), (C = Yx ? Xx(e, n) : Qx(e, n)) && (u = Ns(u, "onBeforeInput"), 0 < u.length && (c = new Sm("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = C));
} Ug(f, t); }); }
function Ai(e, t, n) { return { instance: e, listener: t, currentTarget: n }; }
function Ns(e, t) { for (var n = t + "Capture", r = []; e !== null;) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Ni(e, n), i != null && r.unshift(Ai(e, i, o)), i = Ni(e, t), i != null && r.push(Ai(e, i, o))), e = e.return;
} return r; }
function Rr(e) { if (e === null)
    return null; do
    e = e.return;
while (e && e.tag !== 5); return e || null; }
function Im(e, t, n, r, o) { for (var i = t._reactName, a = []; n !== null && n !== r;) {
    var s = n, l = s.alternate, u = s.stateNode;
    if (l !== null && l === r)
        break;
    s.tag === 5 && u !== null && (s = u, o ? (l = Ni(n, i), l != null && a.unshift(Ai(n, l, s))) : o || (l = Ni(n, i), l != null && a.push(Ai(n, l, s)))), n = n.return;
} a.length !== 0 && e.push({ event: t, listeners: a }); }
var u2 = /\r\n?/g, c2 = /\u0000|\uFFFD/g;
function Om(e) {
    return (typeof e == "string" ? e : "" + e).replace(u2, `
`).replace(c2, "");
}
function Na(e, t, n) { if (t = Om(t), Om(e) !== t && n)
    throw Error(j(425)); }
function _s() { }
var tc = null, nc = null;
function rc(e, t) { return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null; }
var oc = typeof setTimeout == "function" ? setTimeout : void 0, f2 = typeof clearTimeout == "function" ? clearTimeout : void 0, $m = typeof Promise == "function" ? Promise : void 0, d2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof $m < "u" ? function (e) { return $m.resolve(null).then(e).catch(m2); } : oc;
function m2(e) { setTimeout(function () { throw e; }); }
function iu(e, t) { var n = t, r = 0; do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
        if (n = o.data, n === "/$") {
            if (r === 0) {
                e.removeChild(o), Ti(t);
                return;
            }
            r--;
        }
        else
            n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
} while (n); Ti(t); }
function Fn(e) { for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
        break;
    if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?")
            break;
        if (t === "/$")
            return null;
    }
} return e; }
function Lm(e) { e = e.previousSibling; for (var t = 0; e;) {
    if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
            if (t === 0)
                return e;
            t--;
        }
        else
            n === "/$" && t++;
    }
    e = e.previousSibling;
} return null; }
var $o = Math.random().toString(36).slice(2), Yt = "__reactFiber$" + $o, Ii = "__reactProps$" + $o, dn = "__reactContainer$" + $o, ic = "__reactEvents$" + $o, p2 = "__reactListeners$" + $o, h2 = "__reactHandles$" + $o;
function mr(e) { var t = e[Yt]; if (t)
    return t; for (var n = e.parentNode; n;) {
    if (t = n[dn] || n[Yt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
            for (e = Lm(e); e !== null;) {
                if (n = e[Yt])
                    return n;
                e = Lm(e);
            }
        return t;
    }
    e = n, n = e.parentNode;
} return null; }
function ra(e) { return e = e[Yt] || e[dn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e; }
function Yr(e) { if (e.tag === 5 || e.tag === 6)
    return e.stateNode; throw Error(j(33)); }
function ll(e) { return e[Ii] || null; }
var ac = [], Xr = -1;
function er(e) { return { current: e }; }
function fe(e) { 0 > Xr || (e.current = ac[Xr], ac[Xr] = null, Xr--); }
function ae(e, t) { Xr++, ac[Xr] = e.current, e.current = t; }
var Xn = {}, qe = er(Xn), it = er(!1), kr = Xn;
function wo(e, t) { var n = e.type.contextTypes; if (!n)
    return Xn; var r = e.stateNode; if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext; var o = {}, i; for (i in n)
    o[i] = t[i]; return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o; }
function at(e) { return e = e.childContextTypes, e != null; }
function Cs() { fe(it), fe(qe); }
function Rm(e, t, n) { if (qe.current !== Xn)
    throw Error(j(168)); ae(qe, t), ae(it, n); }
function Wg(e, t, n) { var r = e.stateNode; if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n; r = r.getChildContext(); for (var o in r)
    if (!(o in t))
        throw Error(j(108, Jw(e) || "Unknown", o)); return we({}, n, r); }
function Ts(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Xn, kr = qe.current, ae(qe, e), ae(it, it.current), !0; }
function Dm(e, t, n) { var r = e.stateNode; if (!r)
    throw Error(j(169)); n ? (e = Wg(e, t, kr), r.__reactInternalMemoizedMergedChildContext = e, fe(it), fe(qe), ae(qe, e)) : fe(it), ae(it, n); }
var rn = null, ul = !1, au = !1;
function Yg(e) { rn === null ? rn = [e] : rn.push(e); }
function g2(e) { ul = !0, Yg(e); }
function tr() { if (!au && rn !== null) {
    au = !0;
    var e = 0, t = re;
    try {
        var n = rn;
        for (re = 1; e < n.length; e++) {
            var r = n[e];
            do
                r = r(!0);
            while (r !== null);
        }
        rn = null, ul = !1;
    }
    catch (o) {
        throw rn !== null && (rn = rn.slice(e + 1)), vg(bf, tr), o;
    }
    finally {
        re = t, au = !1;
    }
} return null; }
var Qr = [], Gr = 0, Ms = null, Ps = 0, vt = [], wt = 0, Er = null, on = 1, an = "";
function cr(e, t) { Qr[Gr++] = Ps, Qr[Gr++] = Ms, Ms = e, Ps = t; }
function Xg(e, t, n) { vt[wt++] = on, vt[wt++] = an, vt[wt++] = Er, Er = e; var r = on; e = an; var o = 32 - jt(r) - 1; r &= ~(1 << o), n += 1; var i = 32 - jt(t) + o; if (30 < i) {
    var a = o - o % 5;
    i = (r & (1 << a) - 1).toString(32), r >>= a, o -= a, on = 1 << 32 - jt(t) + o | n << o | r, an = i + e;
}
else
    on = 1 << i | n << o | r, an = e; }
function zf(e) { e.return !== null && (cr(e, 1), Xg(e, 1, 0)); }
function Af(e) { for (; e === Ms;)
    Ms = Qr[--Gr], Qr[Gr] = null, Ps = Qr[--Gr], Qr[Gr] = null; for (; e === Er;)
    Er = vt[--wt], vt[wt] = null, an = vt[--wt], vt[wt] = null, on = vt[--wt], vt[wt] = null; }
var ft = null, ct = null, he = !1, $t = null;
function Qg(e, t) { var n = kt(5, null, null, 0); n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n); }
function jm(e, t) { switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ft = e, ct = Fn(t.firstChild), !0) : !1;
    case 6: return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ft = e, ct = null, !0) : !1;
    case 13: return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Er !== null ? { id: on, overflow: an } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = kt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ft = e, ct = null, !0) : !1;
    default: return !1;
} }
function sc(e) { return (e.mode & 1) !== 0 && (e.flags & 128) === 0; }
function lc(e) { if (he) {
    var t = ct;
    if (t) {
        var n = t;
        if (!jm(e, t)) {
            if (sc(e))
                throw Error(j(418));
            t = Fn(n.nextSibling);
            var r = ft;
            t && jm(e, t) ? Qg(r, n) : (e.flags = e.flags & -4097 | 2, he = !1, ft = e);
        }
    }
    else {
        if (sc(e))
            throw Error(j(418));
        e.flags = e.flags & -4097 | 2, he = !1, ft = e;
    }
} }
function Fm(e) { for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
    e = e.return; ft = e; }
function _a(e) { if (e !== ft)
    return !1; if (!he)
    return Fm(e), he = !0, !1; var t; if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !rc(e.type, e.memoizedProps)), t && (t = ct)) {
    if (sc(e))
        throw Gg(), Error(j(418));
    for (; t;)
        Qg(e, t), t = Fn(t.nextSibling);
} if (Fm(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(j(317));
    e: {
        for (e = e.nextSibling, t = 0; e;) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "/$") {
                    if (t === 0) {
                        ct = Fn(e.nextSibling);
                        break e;
                    }
                    t--;
                }
                else
                    n !== "$" && n !== "$!" && n !== "$?" || t++;
            }
            e = e.nextSibling;
        }
        ct = null;
    }
}
else
    ct = ft ? Fn(e.stateNode.nextSibling) : null; return !0; }
function Gg() { for (var e = ct; e;)
    e = Fn(e.nextSibling); }
function xo() { ct = ft = null, he = !1; }
function If(e) { $t === null ? $t = [e] : $t.push(e); }
var y2 = wn.ReactCurrentBatchConfig;
function It(e, t) { if (e && e.defaultProps) {
    t = we({}, t), e = e.defaultProps;
    for (var n in e)
        t[n] === void 0 && (t[n] = e[n]);
    return t;
} return t; }
var zs = er(null), As = null, Kr = null, Of = null;
function $f() { Of = Kr = As = null; }
function Lf(e) { var t = zs.current; fe(zs), e._currentValue = t; }
function uc(e, t, n) { for (; e !== null;) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
        break;
    e = e.return;
} }
function lo(e, t) { As = e, Of = Kr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (rt = !0), e.firstContext = null); }
function Tt(e) { var t = e._currentValue; if (Of !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Kr === null) {
        if (As === null)
            throw Error(j(308));
        Kr = e, As.dependencies = { lanes: 0, firstContext: e };
    }
    else
        Kr = Kr.next = e; return t; }
var pr = null;
function Rf(e) { pr === null ? pr = [e] : pr.push(e); }
function Kg(e, t, n, r) { var o = t.interleaved; return o === null ? (n.next = n, Rf(t)) : (n.next = o.next, o.next = n), t.interleaved = n, mn(e, r); }
function mn(e, t) { e.lanes |= t; var n = e.alternate; for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return; return n.tag === 3 ? n.stateNode : null; }
var Tn = !1;
function Df(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null }; }
function Zg(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }); }
function ln(e, t) { return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }; }
function Vn(e, t, n) { var r = e.updateQueue; if (r === null)
    return null; if (r = r.shared, te & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, mn(e, n);
} return o = r.interleaved, o === null ? (t.next = t, Rf(r)) : (t.next = o.next, o.next = t), r.interleaved = t, mn(e, n); }
function rs(e, t, n) { if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, kf(e, n);
} }
function Vm(e, t) { var n = e.updateQueue, r = e.alternate; if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
        do {
            var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
            i === null ? o = i = a : i = i.next = a, n = n.next;
        } while (n !== null);
        i === null ? o = i = t : i = i.next = t;
    }
    else
        o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
} e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t; }
function Is(e, t, n, r) { var o = e.updateQueue; Tn = !1; var i = o.firstBaseUpdate, a = o.lastBaseUpdate, s = o.shared.pending; if (s !== null) {
    o.shared.pending = null;
    var l = s, u = l.next;
    l.next = null, a === null ? i = u : a.next = u, a = l;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, s = c.lastBaseUpdate, s !== a && (s === null ? c.firstBaseUpdate = u : s.next = u, c.lastBaseUpdate = l));
} if (i !== null) {
    var f = o.baseState;
    a = 0, c = u = l = null, s = i;
    do {
        var d = s.lane, p = s.eventTime;
        if ((r & d) === d) {
            c !== null && (c = c.next = { eventTime: p, lane: 0, tag: s.tag, payload: s.payload, callback: s.callback, next: null });
            e: {
                var g = e, y = s;
                switch (d = t, p = n, y.tag) {
                    case 1:
                        if (g = y.payload, typeof g == "function") {
                            f = g.call(p, f, d);
                            break e;
                        }
                        f = g;
                        break e;
                    case 3: g.flags = g.flags & -65537 | 128;
                    case 0:
                        if (g = y.payload, d = typeof g == "function" ? g.call(p, f, d) : g, d == null)
                            break e;
                        f = we({}, f, d);
                        break e;
                    case 2: Tn = !0;
                }
            }
            s.callback !== null && s.lane !== 0 && (e.flags |= 64, d = o.effects, d === null ? o.effects = [s] : d.push(s));
        }
        else
            p = { eventTime: p, lane: d, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, c === null ? (u = c = p, l = f) : c = c.next = p, a |= d;
        if (s = s.next, s === null) {
            if (s = o.shared.pending, s === null)
                break;
            d = s, s = d.next, d.next = null, o.lastBaseUpdate = d, o.shared.pending = null;
        }
    } while (1);
    if (c === null && (l = f), o.baseState = l, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
        o = t;
        do
            a |= o.lane, o = o.next;
        while (o !== t);
    }
    else
        i === null && (o.shared.lanes = 0);
    _r |= a, e.lanes = a, e.memoizedState = f;
} }
function Hm(e, t, n) { if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
        var r = e[t], o = r.callback;
        if (o !== null) {
            if (r.callback = null, r = n, typeof o != "function")
                throw Error(j(191, o));
            o.call(r);
        }
    } }
var Jg = new Kh.Component().refs;
function cc(e, t, n, r) { t = e.memoizedState, n = n(r, t), n = n == null ? t : we({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n); }
var cl = { isMounted: function (e) { return (e = e._reactInternals) ? Ir(e) === e : !1; }, enqueueSetState: function (e, t, n) { e = e._reactInternals; var r = Ye(), o = Bn(e), i = ln(r, o); i.payload = t, n != null && (i.callback = n), t = Vn(e, i, o), t !== null && (Ft(t, e, o, r), rs(t, e, o)); }, enqueueReplaceState: function (e, t, n) { e = e._reactInternals; var r = Ye(), o = Bn(e), i = ln(r, o); i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Vn(e, i, o), t !== null && (Ft(t, e, o, r), rs(t, e, o)); }, enqueueForceUpdate: function (e, t) { e = e._reactInternals; var n = Ye(), r = Bn(e), o = ln(n, r); o.tag = 2, t != null && (o.callback = t), t = Vn(e, o, r), t !== null && (Ft(t, e, r, n), rs(t, e, r)); } };
function Bm(e, t, n, r, o, i, a) { return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, a) : t.prototype && t.prototype.isPureReactComponent ? !Pi(n, r) || !Pi(o, i) : !0; }
function e0(e, t, n) { var r = !1, o = Xn, i = t.contextType; return typeof i == "object" && i !== null ? i = Tt(i) : (o = at(t) ? kr : qe.current, r = t.contextTypes, i = (r = r != null) ? wo(e, o) : Xn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = cl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t; }
function Um(e, t, n, r) { e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && cl.enqueueReplaceState(t, t.state, null); }
function fc(e, t, n, r) { var o = e.stateNode; o.props = n, o.state = e.memoizedState, o.refs = Jg, Df(e); var i = t.contextType; typeof i == "object" && i !== null ? o.context = Tt(i) : (i = at(t) ? kr : qe.current, o.context = wo(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (cc(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && cl.enqueueReplaceState(o, o.state, null), Is(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308); }
function Go(e, t, n) { if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
        if (n = n._owner, n) {
            if (n.tag !== 1)
                throw Error(j(309));
            var r = n.stateNode;
        }
        if (!r)
            throw Error(j(147, e));
        var o = r, i = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function (a) { var s = o.refs; s === Jg && (s = o.refs = {}), a === null ? delete s[i] : s[i] = a; }, t._stringRef = i, t);
    }
    if (typeof e != "string")
        throw Error(j(284));
    if (!n._owner)
        throw Error(j(290, e));
} return e; }
function Ca(e, t) { throw e = Object.prototype.toString.call(t), Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)); }
function qm(e) { var t = e._init; return t(e._payload); }
function t0(e) { function t(m, h) { if (e) {
    var v = m.deletions;
    v === null ? (m.deletions = [h], m.flags |= 16) : v.push(h);
} } function n(m, h) { if (!e)
    return null; for (; h !== null;)
    t(m, h), h = h.sibling; return null; } function r(m, h) { for (m = new Map; h !== null;)
    h.key !== null ? m.set(h.key, h) : m.set(h.index, h), h = h.sibling; return m; } function o(m, h) { return m = Un(m, h), m.index = 0, m.sibling = null, m; } function i(m, h, v) { return m.index = v, e ? (v = m.alternate, v !== null ? (v = v.index, v < h ? (m.flags |= 2, h) : v) : (m.flags |= 2, h)) : (m.flags |= 1048576, h); } function a(m) { return e && m.alternate === null && (m.flags |= 2), m; } function s(m, h, v, w) { return h === null || h.tag !== 6 ? (h = mu(v, m.mode, w), h.return = m, h) : (h = o(h, v), h.return = m, h); } function l(m, h, v, w) { var S = v.type; return S === Br ? c(m, h, v.props.children, w, v.key) : h !== null && (h.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Cn && qm(S) === h.type) ? (w = o(h, v.props), w.ref = Go(m, h, v), w.return = m, w) : (w = us(v.type, v.key, v.props, null, m.mode, w), w.ref = Go(m, h, v), w.return = m, w); } function u(m, h, v, w) { return h === null || h.tag !== 4 || h.stateNode.containerInfo !== v.containerInfo || h.stateNode.implementation !== v.implementation ? (h = pu(v, m.mode, w), h.return = m, h) : (h = o(h, v.children || []), h.return = m, h); } function c(m, h, v, w, S) { return h === null || h.tag !== 7 ? (h = Sr(v, m.mode, w, S), h.return = m, h) : (h = o(h, v), h.return = m, h); } function f(m, h, v) { if (typeof h == "string" && h !== "" || typeof h == "number")
    return h = mu("" + h, m.mode, v), h.return = m, h; if (typeof h == "object" && h !== null) {
    switch (h.$$typeof) {
        case ga: return v = us(h.type, h.key, h.props, null, m.mode, v), v.ref = Go(m, null, h), v.return = m, v;
        case Hr: return h = pu(h, m.mode, v), h.return = m, h;
        case Cn:
            var w = h._init;
            return f(m, w(h._payload), v);
    }
    if (ii(h) || qo(h))
        return h = Sr(h, m.mode, v, null), h.return = m, h;
    Ca(m, h);
} return null; } function d(m, h, v, w) { var S = h !== null ? h.key : null; if (typeof v == "string" && v !== "" || typeof v == "number")
    return S !== null ? null : s(m, h, "" + v, w); if (typeof v == "object" && v !== null) {
    switch (v.$$typeof) {
        case ga: return v.key === S ? l(m, h, v, w) : null;
        case Hr: return v.key === S ? u(m, h, v, w) : null;
        case Cn: return S = v._init, d(m, h, S(v._payload), w);
    }
    if (ii(v) || qo(v))
        return S !== null ? null : c(m, h, v, w, null);
    Ca(m, v);
} return null; } function p(m, h, v, w, S) { if (typeof w == "string" && w !== "" || typeof w == "number")
    return m = m.get(v) || null, s(h, m, "" + w, S); if (typeof w == "object" && w !== null) {
    switch (w.$$typeof) {
        case ga: return m = m.get(w.key === null ? v : w.key) || null, l(h, m, w, S);
        case Hr: return m = m.get(w.key === null ? v : w.key) || null, u(h, m, w, S);
        case Cn:
            var N = w._init;
            return p(m, h, v, N(w._payload), S);
    }
    if (ii(w) || qo(w))
        return m = m.get(v) || null, c(h, m, w, S, null);
    Ca(h, w);
} return null; } function g(m, h, v, w) { for (var S = null, N = null, C = h, M = h = 0, O = null; C !== null && M < v.length; M++) {
    C.index > M ? (O = C, C = null) : O = C.sibling;
    var R = d(m, C, v[M], w);
    if (R === null) {
        C === null && (C = O);
        break;
    }
    e && C && R.alternate === null && t(m, C), h = i(R, h, M), N === null ? S = R : N.sibling = R, N = R, C = O;
} if (M === v.length)
    return n(m, C), he && cr(m, M), S; if (C === null) {
    for (; M < v.length; M++)
        C = f(m, v[M], w), C !== null && (h = i(C, h, M), N === null ? S = C : N.sibling = C, N = C);
    return he && cr(m, M), S;
} for (C = r(m, C); M < v.length; M++)
    O = p(C, m, M, v[M], w), O !== null && (e && O.alternate !== null && C.delete(O.key === null ? M : O.key), h = i(O, h, M), N === null ? S = O : N.sibling = O, N = O); return e && C.forEach(function (D) { return t(m, D); }), he && cr(m, M), S; } function y(m, h, v, w) { var S = qo(v); if (typeof S != "function")
    throw Error(j(150)); if (v = S.call(v), v == null)
    throw Error(j(151)); for (var N = S = null, C = h, M = h = 0, O = null, R = v.next(); C !== null && !R.done; M++, R = v.next()) {
    C.index > M ? (O = C, C = null) : O = C.sibling;
    var D = d(m, C, R.value, w);
    if (D === null) {
        C === null && (C = O);
        break;
    }
    e && C && D.alternate === null && t(m, C), h = i(D, h, M), N === null ? S = D : N.sibling = D, N = D, C = O;
} if (R.done)
    return n(m, C), he && cr(m, M), S; if (C === null) {
    for (; !R.done; M++, R = v.next())
        R = f(m, R.value, w), R !== null && (h = i(R, h, M), N === null ? S = R : N.sibling = R, N = R);
    return he && cr(m, M), S;
} for (C = r(m, C); !R.done; M++, R = v.next())
    R = p(C, m, M, R.value, w), R !== null && (e && R.alternate !== null && C.delete(R.key === null ? M : R.key), h = i(R, h, M), N === null ? S = R : N.sibling = R, N = R); return e && C.forEach(function (V) { return t(m, V); }), he && cr(m, M), S; } function x(m, h, v, w) { if (typeof v == "object" && v !== null && v.type === Br && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
    switch (v.$$typeof) {
        case ga:
            e: {
                for (var S = v.key, N = h; N !== null;) {
                    if (N.key === S) {
                        if (S = v.type, S === Br) {
                            if (N.tag === 7) {
                                n(m, N.sibling), h = o(N, v.props.children), h.return = m, m = h;
                                break e;
                            }
                        }
                        else if (N.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Cn && qm(S) === N.type) {
                            n(m, N.sibling), h = o(N, v.props), h.ref = Go(m, N, v), h.return = m, m = h;
                            break e;
                        }
                        n(m, N);
                        break;
                    }
                    else
                        t(m, N);
                    N = N.sibling;
                }
                v.type === Br ? (h = Sr(v.props.children, m.mode, w, v.key), h.return = m, m = h) : (w = us(v.type, v.key, v.props, null, m.mode, w), w.ref = Go(m, h, v), w.return = m, m = w);
            }
            return a(m);
        case Hr:
            e: {
                for (N = v.key; h !== null;) {
                    if (h.key === N)
                        if (h.tag === 4 && h.stateNode.containerInfo === v.containerInfo && h.stateNode.implementation === v.implementation) {
                            n(m, h.sibling), h = o(h, v.children || []), h.return = m, m = h;
                            break e;
                        }
                        else {
                            n(m, h);
                            break;
                        }
                    else
                        t(m, h);
                    h = h.sibling;
                }
                h = pu(v, m.mode, w), h.return = m, m = h;
            }
            return a(m);
        case Cn: return N = v._init, x(m, h, N(v._payload), w);
    }
    if (ii(v))
        return g(m, h, v, w);
    if (qo(v))
        return y(m, h, v, w);
    Ca(m, v);
} return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, h !== null && h.tag === 6 ? (n(m, h.sibling), h = o(h, v), h.return = m, m = h) : (n(m, h), h = mu(v, m.mode, w), h.return = m, m = h), a(m)) : n(m, h); } return x; }
var So = t0(!0), n0 = t0(!1), oa = {}, Kt = er(oa), Oi = er(oa), $i = er(oa);
function hr(e) { if (e === oa)
    throw Error(j(174)); return e; }
function jf(e, t) { switch (ae($i, t), ae(Oi, e), ae(Kt, oa), e = t.nodeType, e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Bu(null, "");
        break;
    default: e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Bu(t, e);
} fe(Kt), ae(Kt, t); }
function bo() { fe(Kt), fe(Oi), fe($i); }
function r0(e) { hr($i.current); var t = hr(Kt.current), n = Bu(t, e.type); t !== n && (ae(Oi, e), ae(Kt, n)); }
function Ff(e) { Oi.current === e && (fe(Kt), fe(Oi)); }
var ye = er(0);
function Os(e) { for (var t = e; t !== null;) {
    if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
            return t;
    }
    else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128)
            return t;
    }
    else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
    }
    if (t === e)
        break;
    for (; t.sibling === null;) {
        if (t.return === null || t.return === e)
            return null;
        t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
} return null; }
var su = [];
function Vf() { for (var e = 0; e < su.length; e++)
    su[e]._workInProgressVersionPrimary = null; su.length = 0; }
var os = wn.ReactCurrentDispatcher, lu = wn.ReactCurrentBatchConfig, Nr = 0, ve = null, Pe = null, Oe = null, $s = !1, yi = !1, Li = 0, v2 = 0;
function He() { throw Error(j(321)); }
function Hf(e, t) { if (t === null)
    return !1; for (var n = 0; n < t.length && n < e.length; n++)
    if (!Vt(e[n], t[n]))
        return !1; return !0; }
function Bf(e, t, n, r, o, i) { if (Nr = i, ve = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, os.current = e === null || e.memoizedState === null ? b2 : k2, e = n(r, o), yi) {
    i = 0;
    do {
        if (yi = !1, Li = 0, 25 <= i)
            throw Error(j(301));
        i += 1, Oe = Pe = null, t.updateQueue = null, os.current = E2, e = n(r, o);
    } while (yi);
} if (os.current = Ls, t = Pe !== null && Pe.next !== null, Nr = 0, Oe = Pe = ve = null, $s = !1, t)
    throw Error(j(300)); return e; }
function Uf() { var e = Li !== 0; return Li = 0, e; }
function qt() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return Oe === null ? ve.memoizedState = Oe = e : Oe = Oe.next = e, Oe; }
function Mt() { if (Pe === null) {
    var e = ve.alternate;
    e = e !== null ? e.memoizedState : null;
}
else
    e = Pe.next; var t = Oe === null ? ve.memoizedState : Oe.next; if (t !== null)
    Oe = t, Pe = e;
else {
    if (e === null)
        throw Error(j(310));
    Pe = e, e = { memoizedState: Pe.memoizedState, baseState: Pe.baseState, baseQueue: Pe.baseQueue, queue: Pe.queue, next: null }, Oe === null ? ve.memoizedState = Oe = e : Oe = Oe.next = e;
} return Oe; }
function Ri(e, t) { return typeof t == "function" ? t(e) : t; }
function uu(e) { var t = Mt(), n = t.queue; if (n === null)
    throw Error(j(311)); n.lastRenderedReducer = e; var r = Pe, o = r.baseQueue, i = n.pending; if (i !== null) {
    if (o !== null) {
        var a = o.next;
        o.next = i.next, i.next = a;
    }
    r.baseQueue = o = i, n.pending = null;
} if (o !== null) {
    i = o.next, r = r.baseState;
    var s = a = null, l = null, u = i;
    do {
        var c = u.lane;
        if ((Nr & c) === c)
            l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
        else {
            var f = { lane: c, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
            l === null ? (s = l = f, a = r) : l = l.next = f, ve.lanes |= c, _r |= c;
        }
        u = u.next;
    } while (u !== null && u !== i);
    l === null ? a = r : l.next = s, Vt(r, t.memoizedState) || (rt = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = l, n.lastRenderedState = r;
} if (e = n.interleaved, e !== null) {
    o = e;
    do
        i = o.lane, ve.lanes |= i, _r |= i, o = o.next;
    while (o !== e);
}
else
    o === null && (n.lanes = 0); return [t.memoizedState, n.dispatch]; }
function cu(e) { var t = Mt(), n = t.queue; if (n === null)
    throw Error(j(311)); n.lastRenderedReducer = e; var r = n.dispatch, o = n.pending, i = t.memoizedState; if (o !== null) {
    n.pending = null;
    var a = o = o.next;
    do
        i = e(i, a.action), a = a.next;
    while (a !== o);
    Vt(i, t.memoizedState) || (rt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
} return [i, r]; }
function o0() { }
function i0(e, t) { var n = ve, r = Mt(), o = t(), i = !Vt(r.memoizedState, o); if (i && (r.memoizedState = o, rt = !0), r = r.queue, qf(l0.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Oe !== null && Oe.memoizedState.tag & 1) {
    if (n.flags |= 2048, Di(9, s0.bind(null, n, r, o, t), void 0, null), $e === null)
        throw Error(j(349));
    Nr & 30 || a0(n, t, o);
} return o; }
function a0(e, t, n) { e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ve.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ve.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e)); }
function s0(e, t, n, r) { t.value = n, t.getSnapshot = r, u0(t) && c0(e); }
function l0(e, t, n) { return n(function () { u0(t) && c0(e); }); }
function u0(e) { var t = e.getSnapshot; e = e.value; try {
    var n = t();
    return !Vt(e, n);
}
catch {
    return !0;
} }
function c0(e) { var t = mn(e, 1); t !== null && Ft(t, e, 1, -1); }
function Wm(e) { var t = qt(); return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ri, lastRenderedState: e }, t.queue = e, e = e.dispatch = S2.bind(null, ve, e), [t.memoizedState, e]; }
function Di(e, t, n, r) { return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ve.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ve.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e; }
function f0() { return Mt().memoizedState; }
function is(e, t, n, r) { var o = qt(); ve.flags |= e, o.memoizedState = Di(1 | t, n, void 0, r === void 0 ? null : r); }
function fl(e, t, n, r) { var o = Mt(); r = r === void 0 ? null : r; var i = void 0; if (Pe !== null) {
    var a = Pe.memoizedState;
    if (i = a.destroy, r !== null && Hf(r, a.deps)) {
        o.memoizedState = Di(t, n, i, r);
        return;
    }
} ve.flags |= e, o.memoizedState = Di(1 | t, n, i, r); }
function Ym(e, t) { return is(8390656, 8, e, t); }
function qf(e, t) { return fl(2048, 8, e, t); }
function d0(e, t) { return fl(4, 2, e, t); }
function m0(e, t) { return fl(4, 4, e, t); }
function p0(e, t) { if (typeof t == "function")
    return e = e(), t(e), function () { t(null); }; if (t != null)
    return e = e(), t.current = e, function () { t.current = null; }; }
function h0(e, t, n) { return n = n != null ? n.concat([e]) : null, fl(4, 4, p0.bind(null, t, e), n); }
function Wf() { }
function g0(e, t) { var n = Mt(); t = t === void 0 ? null : t; var r = n.memoizedState; return r !== null && t !== null && Hf(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e); }
function y0(e, t) { var n = Mt(); t = t === void 0 ? null : t; var r = n.memoizedState; return r !== null && t !== null && Hf(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e); }
function v0(e, t, n) { return Nr & 21 ? (Vt(n, t) || (n = Sg(), ve.lanes |= n, _r |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, rt = !0), e.memoizedState = n); }
function w2(e, t) { var n = re; re = n !== 0 && 4 > n ? n : 4, e(!0); var r = lu.transition; lu.transition = {}; try {
    e(!1), t();
}
finally {
    re = n, lu.transition = r;
} }
function w0() { return Mt().memoizedState; }
function x2(e, t, n) { var r = Bn(e); if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, x0(e))
    S0(t, n);
else if (n = Kg(e, t, n, r), n !== null) {
    var o = Ye();
    Ft(n, e, r, o), b0(n, t, r);
} }
function S2(e, t, n) { var r = Bn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }; if (x0(e))
    S0(t, o);
else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
            var a = t.lastRenderedState, s = i(a, n);
            if (o.hasEagerState = !0, o.eagerState = s, Vt(s, a)) {
                var l = t.interleaved;
                l === null ? (o.next = o, Rf(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
                return;
            }
        }
        catch { }
        finally { }
    n = Kg(e, t, o, r), n !== null && (o = Ye(), Ft(n, e, r, o), b0(n, t, r));
} }
function x0(e) { var t = e.alternate; return e === ve || t !== null && t === ve; }
function S0(e, t) { yi = $s = !0; var n = e.pending; n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t; }
function b0(e, t, n) { if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, kf(e, n);
} }
var Ls = { readContext: Tt, useCallback: He, useContext: He, useEffect: He, useImperativeHandle: He, useInsertionEffect: He, useLayoutEffect: He, useMemo: He, useReducer: He, useRef: He, useState: He, useDebugValue: He, useDeferredValue: He, useTransition: He, useMutableSource: He, useSyncExternalStore: He, useId: He, unstable_isNewReconciler: !1 }, b2 = { readContext: Tt, useCallback: function (e, t) { return qt().memoizedState = [e, t === void 0 ? null : t], e; }, useContext: Tt, useEffect: Ym, useImperativeHandle: function (e, t, n) { return n = n != null ? n.concat([e]) : null, is(4194308, 4, p0.bind(null, t, e), n); }, useLayoutEffect: function (e, t) { return is(4194308, 4, e, t); }, useInsertionEffect: function (e, t) { return is(4, 2, e, t); }, useMemo: function (e, t) { var n = qt(); return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e; }, useReducer: function (e, t, n) { var r = qt(); return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = x2.bind(null, ve, e), [r.memoizedState, e]; }, useRef: function (e) { var t = qt(); return e = { current: e }, t.memoizedState = e; }, useState: Wm, useDebugValue: Wf, useDeferredValue: function (e) { return qt().memoizedState = e; }, useTransition: function () { var e = Wm(!1), t = e[0]; return e = w2.bind(null, e[1]), qt().memoizedState = e, [t, e]; }, useMutableSource: function () { }, useSyncExternalStore: function (e, t, n) { var r = ve, o = qt(); if (he) {
        if (n === void 0)
            throw Error(j(407));
        n = n();
    }
    else {
        if (n = t(), $e === null)
            throw Error(j(349));
        Nr & 30 || a0(r, t, n);
    } o.memoizedState = n; var i = { value: n, getSnapshot: t }; return o.queue = i, Ym(l0.bind(null, r, i, e), [e]), r.flags |= 2048, Di(9, s0.bind(null, r, i, n, t), void 0, null), n; }, useId: function () { var e = qt(), t = $e.identifierPrefix; if (he) {
        var n = an, r = on;
        n = (r & ~(1 << 32 - jt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Li++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    }
    else
        n = v2++, t = ":" + t + "r" + n.toString(32) + ":"; return e.memoizedState = t; }, unstable_isNewReconciler: !1 }, k2 = { readContext: Tt, useCallback: g0, useContext: Tt, useEffect: qf, useImperativeHandle: h0, useInsertionEffect: d0, useLayoutEffect: m0, useMemo: y0, useReducer: uu, useRef: f0, useState: function () { return uu(Ri); }, useDebugValue: Wf, useDeferredValue: function (e) { var t = Mt(); return v0(t, Pe.memoizedState, e); }, useTransition: function () { var e = uu(Ri)[0], t = Mt().memoizedState; return [e, t]; }, useMutableSource: o0, useSyncExternalStore: i0, useId: w0, unstable_isNewReconciler: !1 }, E2 = { readContext: Tt, useCallback: g0, useContext: Tt, useEffect: qf, useImperativeHandle: h0, useInsertionEffect: d0, useLayoutEffect: m0, useMemo: y0, useReducer: cu, useRef: f0, useState: function () { return cu(Ri); }, useDebugValue: Wf, useDeferredValue: function (e) { var t = Mt(); return Pe === null ? t.memoizedState = e : v0(t, Pe.memoizedState, e); }, useTransition: function () { var e = cu(Ri)[0], t = Mt().memoizedState; return [e, t]; }, useMutableSource: o0, useSyncExternalStore: i0, useId: w0, unstable_isNewReconciler: !1 };
function ko(e, t) {
    try {
        var n = "", r = t;
        do
            n += Zw(r), r = r.return;
        while (r);
        var o = n;
    }
    catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
}
function fu(e, t, n) { return { value: e, source: null, stack: n ?? null, digest: t ?? null }; }
function dc(e, t) { try {
    console.error(t.value);
}
catch (n) {
    setTimeout(function () { throw n; });
} }
var N2 = typeof WeakMap == "function" ? WeakMap : Map;
function k0(e, t, n) { n = ln(-1, n), n.tag = 3, n.payload = { element: null }; var r = t.value; return n.callback = function () { Ds || (Ds = !0, bc = r), dc(e, t); }, n; }
function E0(e, t, n) { n = ln(-1, n), n.tag = 3; var r = e.type.getDerivedStateFromError; if (typeof r == "function") {
    var o = t.value;
    n.payload = function () { return r(o); }, n.callback = function () { dc(e, t); };
} var i = e.stateNode; return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function () { dc(e, t), typeof r != "function" && (Hn === null ? Hn = new Set([this]) : Hn.add(this)); var a = t.stack; this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" }); }), n; }
function Xm(e, t, n) { var r = e.pingCache; if (r === null) {
    r = e.pingCache = new N2;
    var o = new Set;
    r.set(t, o);
}
else
    o = r.get(t), o === void 0 && (o = new Set, r.set(t, o)); o.has(n) || (o.add(n), e = j2.bind(null, e, t, n), t.then(e, e)); }
function Qm(e) { do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
        return e;
    e = e.return;
} while (e !== null); return null; }
function Gm(e, t, n, r, o) { return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ln(-1, 1), t.tag = 2, Vn(n, t, 1))), n.lanes |= 1), e); }
var _2 = wn.ReactCurrentOwner, rt = !1;
function We(e, t, n, r) { t.child = e === null ? n0(t, null, n, r) : So(t, e.child, n, r); }
function Km(e, t, n, r, o) { n = n.render; var i = t.ref; return lo(t, o), r = Bf(e, t, n, r, i, o), n = Uf(), e !== null && !rt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, pn(e, t, o)) : (he && n && zf(t), t.flags |= 1, We(e, t, r, o), t.child); }
function Zm(e, t, n, r, o) { if (e === null) {
    var i = n.type;
    return typeof i == "function" && !ed(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, N0(e, t, i, r, o)) : (e = us(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
} if (i = e.child, !(e.lanes & o)) {
    var a = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Pi, n(a, r) && e.ref === t.ref)
        return pn(e, t, o);
} return t.flags |= 1, e = Un(i, r), e.ref = t.ref, e.return = t, t.child = e; }
function N0(e, t, n, r, o) { if (e !== null) {
    var i = e.memoizedProps;
    if (Pi(i, r) && e.ref === t.ref)
        if (rt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
            e.flags & 131072 && (rt = !0);
        else
            return t.lanes = e.lanes, pn(e, t, o);
} return mc(e, t, n, r, o); }
function _0(e, t, n) { var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null; if (r.mode === "hidden")
    if (!(t.mode & 1))
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ae(Jr, lt), lt |= n;
    else {
        if (!(n & 1073741824))
            return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ae(Jr, lt), lt |= e, null;
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, ae(Jr, lt), lt |= r;
    }
else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ae(Jr, lt), lt |= r; return We(e, t, o, n), t.child; }
function C0(e, t) { var n = t.ref; (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152); }
function mc(e, t, n, r, o) { var i = at(n) ? kr : qe.current; return i = wo(t, i), lo(t, o), n = Bf(e, t, n, r, i, o), r = Uf(), e !== null && !rt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, pn(e, t, o)) : (he && r && zf(t), t.flags |= 1, We(e, t, n, o), t.child); }
function Jm(e, t, n, r, o) { if (at(n)) {
    var i = !0;
    Ts(t);
}
else
    i = !1; if (lo(t, o), t.stateNode === null)
    as(e, t), e0(t, n, r), fc(t, n, r, o), r = !0;
else if (e === null) {
    var a = t.stateNode, s = t.memoizedProps;
    a.props = s;
    var l = a.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Tt(u) : (u = at(n) ? kr : qe.current, u = wo(t, u));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    f || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== r || l !== u) && Um(t, a, r, u), Tn = !1;
    var d = t.memoizedState;
    a.state = d, Is(t, r, a, o), l = t.memoizedState, s !== r || d !== l || it.current || Tn ? (typeof c == "function" && (cc(t, n, c, r), l = t.memoizedState), (s = Tn || Bm(t, n, s, r, d, l, u)) ? (f || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = u, r = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
}
else {
    a = t.stateNode, Zg(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : It(t.type, s), a.props = u, f = t.pendingProps, d = a.context, l = n.contextType, typeof l == "object" && l !== null ? l = Tt(l) : (l = at(n) ? kr : qe.current, l = wo(t, l));
    var p = n.getDerivedStateFromProps;
    (c = typeof p == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== f || d !== l) && Um(t, a, r, l), Tn = !1, d = t.memoizedState, a.state = d, Is(t, r, a, o);
    var g = t.memoizedState;
    s !== f || d !== g || it.current || Tn ? (typeof p == "function" && (cc(t, n, p, r), g = t.memoizedState), (u = Tn || Bm(t, n, u, r, d, g, l) || !1) ? (c || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, g, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, g, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), a.props = r, a.state = g, a.context = l, r = u) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
} return pc(e, t, n, r, i, o); }
function pc(e, t, n, r, o, i) { C0(e, t); var a = (t.flags & 128) !== 0; if (!r && !a)
    return o && Dm(t, n, !1), pn(e, t, i); r = t.stateNode, _2.current = t; var s = a && typeof n.getDerivedStateFromError != "function" ? null : r.render(); return t.flags |= 1, e !== null && a ? (t.child = So(t, e.child, null, i), t.child = So(t, null, s, i)) : We(e, t, s, i), t.memoizedState = r.state, o && Dm(t, n, !0), t.child; }
function T0(e) { var t = e.stateNode; t.pendingContext ? Rm(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Rm(e, t.context, !1), jf(e, t.containerInfo); }
function ep(e, t, n, r, o) { return xo(), If(o), t.flags |= 256, We(e, t, n, r), t.child; }
var hc = { dehydrated: null, treeContext: null, retryLane: 0 };
function gc(e) { return { baseLanes: e, cachePool: null, transitions: null }; }
function M0(e, t, n) { var r = t.pendingProps, o = ye.current, i = !1, a = (t.flags & 128) !== 0, s; if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ae(ye, o & 1), e === null)
    return lc(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, a = { mode: "hidden", children: a }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = pl(a, r, 0, null), e = Sr(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = gc(n), t.memoizedState = hc, e) : Yf(t, a)); if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null))
    return C2(e, t, a, r, s, o, n); if (i) {
    i = r.fallback, a = t.mode, o = e.child, s = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Un(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = Un(s, i) : (i = Sr(i, a, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, a = e.child.memoizedState, a = a === null ? gc(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, i.memoizedState = a, i.childLanes = e.childLanes & ~n, t.memoizedState = hc, r;
} return i = e.child, e = i.sibling, r = Un(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r; }
function Yf(e, t) { return t = pl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t; }
function Ta(e, t, n, r) { return r !== null && If(r), So(t, e.child, null, n), e = Yf(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e; }
function C2(e, t, n, r, o, i, a) { if (n)
    return t.flags & 256 ? (t.flags &= -257, r = fu(Error(j(422))), Ta(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = pl({ mode: "visible", children: r.children }, o, 0, null), i = Sr(i, o, a, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && So(t, e.child, null, a), t.child.memoizedState = gc(a), t.memoizedState = hc, i); if (!(t.mode & 1))
    return Ta(e, t, a, null); if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
        var s = r.dgst;
    return r = s, i = Error(j(419)), r = fu(i, r, void 0), Ta(e, t, a, r);
} if (s = (a & e.childLanes) !== 0, rt || s) {
    if (r = $e, r !== null) {
        switch (a & -a) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default: o = 0;
        }
        o = o & (r.suspendedLanes | a) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, mn(e, o), Ft(r, e, o, -1));
    }
    return Jf(), r = fu(Error(j(421))), Ta(e, t, a, r);
} return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = F2.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, ct = Fn(o.nextSibling), ft = t, he = !0, $t = null, e !== null && (vt[wt++] = on, vt[wt++] = an, vt[wt++] = Er, on = e.id, an = e.overflow, Er = t), t = Yf(t, r.children), t.flags |= 4096, t); }
function tp(e, t, n) { e.lanes |= t; var r = e.alternate; r !== null && (r.lanes |= t), uc(e.return, t, n); }
function du(e, t, n, r, o) { var i = e.memoizedState; i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o); }
function P0(e, t, n) { var r = t.pendingProps, o = r.revealOrder, i = r.tail; if (We(e, t, r.children, n), r = ye.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
else {
    if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null;) {
            if (e.tag === 13)
                e.memoizedState !== null && tp(e, n, t);
            else if (e.tag === 19)
                tp(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
            }
            if (e === t)
                break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t)
                    break e;
                e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
} if (ae(ye, r), !(t.mode & 1))
    t.memoizedState = null;
else
    switch (o) {
        case "forwards":
            for (n = t.child, o = null; n !== null;)
                e = n.alternate, e !== null && Os(e) === null && (o = n), n = n.sibling;
            n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), du(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null, o = t.child, t.child = null; o !== null;) {
                if (e = o.alternate, e !== null && Os(e) === null) {
                    t.child = o;
                    break;
                }
                e = o.sibling, o.sibling = n, n = o, o = e;
            }
            du(t, !0, n, null, i);
            break;
        case "together":
            du(t, !1, null, null, void 0);
            break;
        default: t.memoizedState = null;
    } return t.child; }
function as(e, t) { !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2); }
function pn(e, t, n) { if (e !== null && (t.dependencies = e.dependencies), _r |= t.lanes, !(n & t.childLanes))
    return null; if (e !== null && t.child !== e.child)
    throw Error(j(153)); if (t.child !== null) {
    for (e = t.child, n = Un(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)
        e = e.sibling, n = n.sibling = Un(e, e.pendingProps), n.return = t;
    n.sibling = null;
} return t.child; }
function T2(e, t, n) { switch (t.tag) {
    case 3:
        T0(t), xo();
        break;
    case 5:
        r0(t);
        break;
    case 1:
        at(t.type) && Ts(t);
        break;
    case 4:
        jf(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context, o = t.memoizedProps.value;
        ae(zs, r._currentValue), r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState, r !== null)
            return r.dehydrated !== null ? (ae(ye, ye.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? M0(e, t, n) : (ae(ye, ye.current & 1), e = pn(e, t, n), e !== null ? e.sibling : null);
        ae(ye, ye.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
            if (r)
                return P0(e, t, n);
            t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ae(ye, ye.current), r)
            break;
        return null;
    case 22:
    case 23: return t.lanes = 0, _0(e, t, n);
} return pn(e, t, n); }
var z0, yc, A0, I0;
z0 = function (e, t) { for (var n = t.child; n !== null;) {
    if (n.tag === 5 || n.tag === 6)
        e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
    }
    if (n === t)
        break;
    for (; n.sibling === null;) {
        if (n.return === null || n.return === t)
            return;
        n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
} };
yc = function () { };
A0 = function (e, t, n, r) { var o = e.memoizedProps; if (o !== r) {
    e = t.stateNode, hr(Kt.current);
    var i = null;
    switch (n) {
        case "input":
            o = ju(e, o), r = ju(e, r), i = [];
            break;
        case "select":
            o = we({}, o, { value: void 0 }), r = we({}, r, { value: void 0 }), i = [];
            break;
        case "textarea":
            o = Hu(e, o), r = Hu(e, r), i = [];
            break;
        default: typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = _s);
    }
    Uu(n, r);
    var a;
    n = null;
    for (u in o)
        if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
            if (u === "style") {
                var s = o[u];
                for (a in s)
                    s.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
            }
            else
                u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ki.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
        var l = r[u];
        if (s = o != null ? o[u] : void 0, r.hasOwnProperty(u) && l !== s && (l != null || s != null))
            if (u === "style")
                if (s) {
                    for (a in s)
                        !s.hasOwnProperty(a) || l && l.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
                    for (a in l)
                        l.hasOwnProperty(a) && s[a] !== l[a] && (n || (n = {}), n[a] = l[a]);
                }
                else
                    n || (i || (i = []), i.push(u, n)), n = l;
            else
                u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ki.hasOwnProperty(u) ? (l != null && u === "onScroll" && ue("scroll", e), i || s === l || (i = [])) : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
} };
I0 = function (e, t, n, r) { n !== r && (t.flags |= 4); };
function Ko(e, t) { if (!he)
    switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;)
                t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;)
                n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    } }
function Be(e) { var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0; if (t)
    for (var o = e.child; o !== null;)
        n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
else
    for (o = e.child; o !== null;)
        n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling; return e.subtreeFlags |= r, e.childLanes = n, t; }
function M2(e, t, n) { var r = t.pendingProps; switch (Af(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14: return Be(t), null;
    case 1: return at(t.type) && Cs(), Be(t), null;
    case 3: return r = t.stateNode, bo(), fe(it), fe(qe), Vf(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (_a(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, $t !== null && (Nc($t), $t = null))), yc(e, t), Be(t), null;
    case 5:
        Ff(t);
        var o = hr($i.current);
        if (n = t.type, e !== null && t.stateNode != null)
            A0(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(j(166));
                return Be(t), null;
            }
            if (e = hr(Kt.current), _a(t)) {
                r = t.stateNode, n = t.type;
                var i = t.memoizedProps;
                switch (r[Yt] = t, r[Ii] = i, e = (t.mode & 1) !== 0, n) {
                    case "dialog":
                        ue("cancel", r), ue("close", r);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        ue("load", r);
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < si.length; o++)
                            ue(si[o], r);
                        break;
                    case "source":
                        ue("error", r);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        ue("error", r), ue("load", r);
                        break;
                    case "details":
                        ue("toggle", r);
                        break;
                    case "input":
                        cm(r, i), ue("invalid", r);
                        break;
                    case "select":
                        r._wrapperState = { wasMultiple: !!i.multiple }, ue("invalid", r);
                        break;
                    case "textarea": dm(r, i), ue("invalid", r);
                }
                Uu(n, i), o = null;
                for (var a in i)
                    if (i.hasOwnProperty(a)) {
                        var s = i[a];
                        a === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && Na(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && Na(r.textContent, s, e), o = ["children", "" + s]) : ki.hasOwnProperty(a) && s != null && a === "onScroll" && ue("scroll", r);
                    }
                switch (n) {
                    case "input":
                        ya(r), fm(r, i, !0);
                        break;
                    case "textarea":
                        ya(r), mm(r);
                        break;
                    case "select":
                    case "option": break;
                    default: typeof i.onClick == "function" && (r.onclick = _s);
                }
                r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
            }
            else {
                a = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ag(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[Yt] = t, e[Ii] = r, z0(e, t, !1, !1), t.stateNode = e;
                e: {
                    switch (a = qu(n, r), n) {
                        case "dialog":
                            ue("cancel", e), ue("close", e), o = r;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            ue("load", e), o = r;
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < si.length; o++)
                                ue(si[o], e);
                            o = r;
                            break;
                        case "source":
                            ue("error", e), o = r;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            ue("error", e), ue("load", e), o = r;
                            break;
                        case "details":
                            ue("toggle", e), o = r;
                            break;
                        case "input":
                            cm(e, r), o = ju(e, r), ue("invalid", e);
                            break;
                        case "option":
                            o = r;
                            break;
                        case "select":
                            e._wrapperState = { wasMultiple: !!r.multiple }, o = we({}, r, { value: void 0 }), ue("invalid", e);
                            break;
                        case "textarea":
                            dm(e, r), o = Hu(e, r), ue("invalid", e);
                            break;
                        default: o = r;
                    }
                    Uu(n, o), s = o;
                    for (i in s)
                        if (s.hasOwnProperty(i)) {
                            var l = s[i];
                            i === "style" ? ug(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && sg(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Ei(e, l) : typeof l == "number" && Ei(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ki.hasOwnProperty(i) ? l != null && i === "onScroll" && ue("scroll", e) : l != null && yf(e, i, l, a));
                        }
                    switch (n) {
                        case "input":
                            ya(e), fm(e, r, !1);
                            break;
                        case "textarea":
                            ya(e), mm(e);
                            break;
                        case "option":
                            r.value != null && e.setAttribute("value", "" + Yn(r.value));
                            break;
                        case "select":
                            e.multiple = !!r.multiple, i = r.value, i != null ? oo(e, !!r.multiple, i, !1) : r.defaultValue != null && oo(e, !!r.multiple, r.defaultValue, !0);
                            break;
                        default: typeof o.onClick == "function" && (e.onclick = _s);
                    }
                    switch (n) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            r = !!r.autoFocus;
                            break e;
                        case "img":
                            r = !0;
                            break e;
                        default: r = !1;
                    }
                }
                r && (t.flags |= 4);
            }
            t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Be(t), null;
    case 6:
        if (e && t.stateNode != null)
            I0(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(j(166));
            if (n = hr($i.current), hr(Kt.current), _a(t)) {
                if (r = t.stateNode, n = t.memoizedProps, r[Yt] = t, (i = r.nodeValue !== n) && (e = ft, e !== null))
                    switch (e.tag) {
                        case 3:
                            Na(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5: e.memoizedProps.suppressHydrationWarning !== !0 && Na(r.nodeValue, n, (e.mode & 1) !== 0);
                    }
                i && (t.flags |= 4);
            }
            else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Yt] = t, t.stateNode = r;
        }
        return Be(t), null;
    case 13:
        if (fe(ye), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (he && ct !== null && t.mode & 1 && !(t.flags & 128))
                Gg(), xo(), t.flags |= 98560, i = !1;
            else if (i = _a(t), r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(j(318));
                    if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
                        throw Error(j(317));
                    i[Yt] = t;
                }
                else
                    xo(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                Be(t), i = !1;
            }
            else
                $t !== null && (Nc($t), $t = null), i = !0;
            if (!i)
                return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ye.current & 1 ? ze === 0 && (ze = 3) : Jf())), t.updateQueue !== null && (t.flags |= 4), Be(t), null);
    case 4: return bo(), yc(e, t), e === null && zi(t.stateNode.containerInfo), Be(t), null;
    case 10: return Lf(t.type._context), Be(t), null;
    case 17: return at(t.type) && Cs(), Be(t), null;
    case 19:
        if (fe(ye), i = t.memoizedState, i === null)
            return Be(t), null;
        if (r = (t.flags & 128) !== 0, a = i.rendering, a === null)
            if (r)
                Ko(i, !1);
            else {
                if (ze !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null;) {
                        if (a = Os(e), a !== null) {
                            for (t.flags |= 128, Ko(i, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;)
                                i = n, e = r, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                            return ae(ye, ye.current & 1 | 2), t.child;
                        }
                        e = e.sibling;
                    }
                i.tail !== null && _e() > Eo && (t.flags |= 128, r = !0, Ko(i, !1), t.lanes = 4194304);
            }
        else {
            if (!r)
                if (e = Os(a), e !== null) {
                    if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ko(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !he)
                        return Be(t), null;
                }
                else
                    2 * _e() - i.renderingStartTime > Eo && n !== 1073741824 && (t.flags |= 128, r = !0, Ko(i, !1), t.lanes = 4194304);
            i.isBackwards ? (a.sibling = t.child, t.child = a) : (n = i.last, n !== null ? n.sibling = a : t.child = a, i.last = a);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = _e(), t.sibling = null, n = ye.current, ae(ye, r ? n & 1 | 2 : n & 1), t) : (Be(t), null);
    case 22:
    case 23: return Zf(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? lt & 1073741824 && (Be(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Be(t), null;
    case 24: return null;
    case 25: return null;
} throw Error(j(156, t.tag)); }
function P2(e, t) { switch (Af(t), t.tag) {
    case 1: return at(t.type) && Cs(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3: return bo(), fe(it), fe(qe), Vf(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5: return Ff(t), null;
    case 13:
        if (fe(ye), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(j(340));
            xo();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19: return fe(ye), null;
    case 4: return bo(), null;
    case 10: return Lf(t.type._context), null;
    case 22:
    case 23: return Zf(), null;
    case 24: return null;
    default: return null;
} }
var Ma = !1, Ue = !1, z2 = typeof WeakSet == "function" ? WeakSet : Set, U = null;
function Zr(e, t) { var n = e.ref; if (n !== null)
    if (typeof n == "function")
        try {
            n(null);
        }
        catch (r) {
            Se(e, t, r);
        }
    else
        n.current = null; }
function vc(e, t, n) { try {
    n();
}
catch (r) {
    Se(e, t, r);
} }
var np = !1;
function A2(e, t) { if (tc = ks, e = Rg(), Pf(e)) {
    if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
    else
        e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var o = r.anchorOffset, i = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, i.nodeType;
                }
                catch {
                    n = null;
                    break e;
                }
                var a = 0, s = -1, l = -1, u = 0, c = 0, f = e, d = null;
                t: for (;;) {
                    for (var p; f !== n || o !== 0 && f.nodeType !== 3 || (s = a + o), f !== i || r !== 0 && f.nodeType !== 3 || (l = a + r), f.nodeType === 3 && (a += f.nodeValue.length), (p = f.firstChild) !== null;)
                        d = f, f = p;
                    for (;;) {
                        if (f === e)
                            break t;
                        if (d === n && ++u === o && (s = a), d === i && ++c === r && (l = a), (p = f.nextSibling) !== null)
                            break;
                        f = d, d = f.parentNode;
                    }
                    f = p;
                }
                n = s === -1 || l === -1 ? null : { start: s, end: l };
            }
            else
                n = null;
        }
    n = n || { start: 0, end: 0 };
}
else
    n = null; for (nc = { focusedElem: e, selectionRange: n }, ks = !1, U = t; U !== null;)
    if (t = U, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, U = e;
    else
        for (; U !== null;) {
            t = U;
            try {
                var g = t.alternate;
                if (t.flags & 1024)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15: break;
                        case 1:
                            if (g !== null) {
                                var y = g.memoizedProps, x = g.memoizedState, m = t.stateNode, h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? y : It(t.type, y), x);
                                m.__reactInternalSnapshotBeforeUpdate = h;
                            }
                            break;
                        case 3:
                            var v = t.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17: break;
                        default: throw Error(j(163));
                    }
            }
            catch (w) {
                Se(t, t.return, w);
            }
            if (e = t.sibling, e !== null) {
                e.return = t.return, U = e;
                break;
            }
            U = t.return;
        } return g = np, np = !1, g; }
function vi(e, t, n) { var r = t.updateQueue; if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
        if ((o.tag & e) === e) {
            var i = o.destroy;
            o.destroy = void 0, i !== void 0 && vc(t, n, i);
        }
        o = o.next;
    } while (o !== r);
} }
function dl(e, t) { if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
        if ((n.tag & e) === e) {
            var r = n.create;
            n.destroy = r();
        }
        n = n.next;
    } while (n !== t);
} }
function wc(e) { var t = e.ref; if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
        case 5:
            e = n;
            break;
        default: e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
} }
function O0(e) { var t = e.alternate; t !== null && (e.alternate = null, O0(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Yt], delete t[Ii], delete t[ic], delete t[p2], delete t[h2])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null; }
function $0(e) { return e.tag === 5 || e.tag === 3 || e.tag === 4; }
function rp(e) { e: for (;;) {
    for (; e.sibling === null;) {
        if (e.return === null || $0(e.return))
            return null;
        e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
            continue e;
        e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2))
        return e.stateNode;
} }
function xc(e, t, n) { var r = e.tag; if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = _s));
else if (r !== 4 && (e = e.child, e !== null))
    for (xc(e, t, n), e = e.sibling; e !== null;)
        xc(e, t, n), e = e.sibling; }
function Sc(e, t, n) { var r = e.tag; if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
else if (r !== 4 && (e = e.child, e !== null))
    for (Sc(e, t, n), e = e.sibling; e !== null;)
        Sc(e, t, n), e = e.sibling; }
var De = null, Ot = !1;
function En(e, t, n) { for (n = n.child; n !== null;)
    L0(e, t, n), n = n.sibling; }
function L0(e, t, n) { if (Gt && typeof Gt.onCommitFiberUnmount == "function")
    try {
        Gt.onCommitFiberUnmount(ol, n);
    }
    catch { } switch (n.tag) {
    case 5: Ue || Zr(n, t);
    case 6:
        var r = De, o = Ot;
        De = null, En(e, t, n), De = r, Ot = o, De !== null && (Ot ? (e = De, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : De.removeChild(n.stateNode));
        break;
    case 18:
        De !== null && (Ot ? (e = De, n = n.stateNode, e.nodeType === 8 ? iu(e.parentNode, n) : e.nodeType === 1 && iu(e, n), Ti(e)) : iu(De, n.stateNode));
        break;
    case 4:
        r = De, o = Ot, De = n.stateNode.containerInfo, Ot = !0, En(e, t, n), De = r, Ot = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Ue && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
            o = r = r.next;
            do {
                var i = o, a = i.destroy;
                i = i.tag, a !== void 0 && (i & 2 || i & 4) && vc(n, t, a), o = o.next;
            } while (o !== r);
        }
        En(e, t, n);
        break;
    case 1:
        if (!Ue && (Zr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
            }
            catch (s) {
                Se(n, t, s);
            }
        En(e, t, n);
        break;
    case 21:
        En(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Ue = (r = Ue) || n.memoizedState !== null, En(e, t, n), Ue = r) : En(e, t, n);
        break;
    default: En(e, t, n);
} }
function op(e) { var t = e.updateQueue; if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new z2), t.forEach(function (r) { var o = V2.bind(null, e, r); n.has(r) || (n.add(r), r.then(o, o)); });
} }
function At(e, t) { var n = t.deletions; if (n !== null)
    for (var r = 0; r < n.length; r++) {
        var o = n[r];
        try {
            var i = e, a = t, s = a;
            e: for (; s !== null;) {
                switch (s.tag) {
                    case 5:
                        De = s.stateNode, Ot = !1;
                        break e;
                    case 3:
                        De = s.stateNode.containerInfo, Ot = !0;
                        break e;
                    case 4:
                        De = s.stateNode.containerInfo, Ot = !0;
                        break e;
                }
                s = s.return;
            }
            if (De === null)
                throw Error(j(160));
            L0(i, a, o), De = null, Ot = !1;
            var l = o.alternate;
            l !== null && (l.return = null), o.return = null;
        }
        catch (u) {
            Se(o, t, u);
        }
    } if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null;)
        R0(t, e), t = t.sibling; }
function R0(e, t) { var n = e.alternate, r = e.flags; switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (At(t, e), Ut(e), r & 4) {
            try {
                vi(3, e, e.return), dl(3, e);
            }
            catch (y) {
                Se(e, e.return, y);
            }
            try {
                vi(5, e, e.return);
            }
            catch (y) {
                Se(e, e.return, y);
            }
        }
        break;
    case 1:
        At(t, e), Ut(e), r & 512 && n !== null && Zr(n, n.return);
        break;
    case 5:
        if (At(t, e), Ut(e), r & 512 && n !== null && Zr(n, n.return), e.flags & 32) {
            var o = e.stateNode;
            try {
                Ei(o, "");
            }
            catch (y) {
                Se(e, e.return, y);
            }
        }
        if (r & 4 && (o = e.stateNode, o != null)) {
            var i = e.memoizedProps, a = n !== null ? n.memoizedProps : i, s = e.type, l = e.updateQueue;
            if (e.updateQueue = null, l !== null)
                try {
                    s === "input" && i.type === "radio" && i.name != null && og(o, i), qu(s, a);
                    var u = qu(s, i);
                    for (a = 0; a < l.length; a += 2) {
                        var c = l[a], f = l[a + 1];
                        c === "style" ? ug(o, f) : c === "dangerouslySetInnerHTML" ? sg(o, f) : c === "children" ? Ei(o, f) : yf(o, c, f, u);
                    }
                    switch (s) {
                        case "input":
                            Fu(o, i);
                            break;
                        case "textarea":
                            ig(o, i);
                            break;
                        case "select":
                            var d = o._wrapperState.wasMultiple;
                            o._wrapperState.wasMultiple = !!i.multiple;
                            var p = i.value;
                            p != null ? oo(o, !!i.multiple, p, !1) : d !== !!i.multiple && (i.defaultValue != null ? oo(o, !!i.multiple, i.defaultValue, !0) : oo(o, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    o[Ii] = i;
                }
                catch (y) {
                    Se(e, e.return, y);
                }
        }
        break;
    case 6:
        if (At(t, e), Ut(e), r & 4) {
            if (e.stateNode === null)
                throw Error(j(162));
            o = e.stateNode, i = e.memoizedProps;
            try {
                o.nodeValue = i;
            }
            catch (y) {
                Se(e, e.return, y);
            }
        }
        break;
    case 3:
        if (At(t, e), Ut(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Ti(t.containerInfo);
            }
            catch (y) {
                Se(e, e.return, y);
            }
        break;
    case 4:
        At(t, e), Ut(e);
        break;
    case 13:
        At(t, e), Ut(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Gf = _e())), r & 4 && op(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ue = (u = Ue) || c, At(t, e), Ue = u) : At(t, e), Ut(e), r & 8192) {
            if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
                for (U = e, c = e.child; c !== null;) {
                    for (f = U = c; U !== null;) {
                        switch (d = U, p = d.child, d.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                vi(4, d, d.return);
                                break;
                            case 1:
                                Zr(d, d.return);
                                var g = d.stateNode;
                                if (typeof g.componentWillUnmount == "function") {
                                    r = d, n = d.return;
                                    try {
                                        t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                                    }
                                    catch (y) {
                                        Se(r, n, y);
                                    }
                                }
                                break;
                            case 5:
                                Zr(d, d.return);
                                break;
                            case 22: if (d.memoizedState !== null) {
                                ap(f);
                                continue;
                            }
                        }
                        p !== null ? (p.return = d, U = p) : ap(f);
                    }
                    c = c.sibling;
                }
            e: for (c = null, f = e;;) {
                if (f.tag === 5) {
                    if (c === null) {
                        c = f;
                        try {
                            o = f.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = f.stateNode, l = f.memoizedProps.style, a = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = lg("display", a));
                        }
                        catch (y) {
                            Se(e, e.return, y);
                        }
                    }
                }
                else if (f.tag === 6) {
                    if (c === null)
                        try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                        }
                        catch (y) {
                            Se(e, e.return, y);
                        }
                }
                else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                    f.child.return = f, f = f.child;
                    continue;
                }
                if (f === e)
                    break e;
                for (; f.sibling === null;) {
                    if (f.return === null || f.return === e)
                        break e;
                    c === f && (c = null), f = f.return;
                }
                c === f && (c = null), f.sibling.return = f.return, f = f.sibling;
            }
        }
        break;
    case 19:
        At(t, e), Ut(e), r & 4 && op(e);
        break;
    case 21: break;
    default: At(t, e), Ut(e);
} }
function Ut(e) { var t = e.flags; if (t & 2) {
    try {
        e: {
            for (var n = e.return; n !== null;) {
                if ($0(n)) {
                    var r = n;
                    break e;
                }
                n = n.return;
            }
            throw Error(j(160));
        }
        switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (Ei(o, ""), r.flags &= -33);
                var i = rp(e);
                Sc(e, i, o);
                break;
            case 3:
            case 4:
                var a = r.stateNode.containerInfo, s = rp(e);
                xc(e, s, a);
                break;
            default: throw Error(j(161));
        }
    }
    catch (l) {
        Se(e, e.return, l);
    }
    e.flags &= -3;
} t & 4096 && (e.flags &= -4097); }
function I2(e, t, n) { U = e, D0(e); }
function D0(e, t, n) { for (var r = (e.mode & 1) !== 0; U !== null;) {
    var o = U, i = o.child;
    if (o.tag === 22 && r) {
        var a = o.memoizedState !== null || Ma;
        if (!a) {
            var s = o.alternate, l = s !== null && s.memoizedState !== null || Ue;
            s = Ma;
            var u = Ue;
            if (Ma = a, (Ue = l) && !u)
                for (U = o; U !== null;)
                    a = U, l = a.child, a.tag === 22 && a.memoizedState !== null ? sp(o) : l !== null ? (l.return = a, U = l) : sp(o);
            for (; i !== null;)
                U = i, D0(i), i = i.sibling;
            U = o, Ma = s, Ue = u;
        }
        ip(e);
    }
    else
        o.subtreeFlags & 8772 && i !== null ? (i.return = o, U = i) : ip(e);
} }
function ip(e) { for (; U !== null;) {
    var t = U;
    if (t.flags & 8772) {
        var n = t.alternate;
        try {
            if (t.flags & 8772)
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ue || dl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Ue)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : It(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                            }
                        var i = t.updateQueue;
                        i !== null && Hm(t, i, r);
                        break;
                    case 3:
                        var a = t.updateQueue;
                        if (a !== null) {
                            if (n = null, t.child !== null)
                                switch (t.child.tag) {
                                    case 5:
                                        n = t.child.stateNode;
                                        break;
                                    case 1: n = t.child.stateNode;
                                }
                            Hm(t, a, n);
                        }
                        break;
                    case 5:
                        var s = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = s;
                            var l = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    l.autoFocus && n.focus();
                                    break;
                                case "img": l.src && (n.src = l.src);
                            }
                        }
                        break;
                    case 6: break;
                    case 4: break;
                    case 12: break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var f = c.dehydrated;
                                    f !== null && Ti(f);
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25: break;
                    default: throw Error(j(163));
                }
            Ue || t.flags & 512 && wc(t);
        }
        catch (d) {
            Se(t, t.return, d);
        }
    }
    if (t === e) {
        U = null;
        break;
    }
    if (n = t.sibling, n !== null) {
        n.return = t.return, U = n;
        break;
    }
    U = t.return;
} }
function ap(e) { for (; U !== null;) {
    var t = U;
    if (t === e) {
        U = null;
        break;
    }
    var n = t.sibling;
    if (n !== null) {
        n.return = t.return, U = n;
        break;
    }
    U = t.return;
} }
function sp(e) { for (; U !== null;) {
    var t = U;
    try {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    dl(4, t);
                }
                catch (l) {
                    Se(t, n, l);
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount();
                    }
                    catch (l) {
                        Se(t, o, l);
                    }
                }
                var i = t.return;
                try {
                    wc(t);
                }
                catch (l) {
                    Se(t, i, l);
                }
                break;
            case 5:
                var a = t.return;
                try {
                    wc(t);
                }
                catch (l) {
                    Se(t, a, l);
                }
        }
    }
    catch (l) {
        Se(t, t.return, l);
    }
    if (t === e) {
        U = null;
        break;
    }
    var s = t.sibling;
    if (s !== null) {
        s.return = t.return, U = s;
        break;
    }
    U = t.return;
} }
var O2 = Math.ceil, Rs = wn.ReactCurrentDispatcher, Xf = wn.ReactCurrentOwner, _t = wn.ReactCurrentBatchConfig, te = 0, $e = null, Me = null, je = 0, lt = 0, Jr = er(0), ze = 0, ji = null, _r = 0, ml = 0, Qf = 0, wi = null, nt = null, Gf = 0, Eo = 1 / 0, nn = null, Ds = !1, bc = null, Hn = null, Pa = !1, $n = null, js = 0, xi = 0, kc = null, ss = -1, ls = 0;
function Ye() { return te & 6 ? _e() : ss !== -1 ? ss : ss = _e(); }
function Bn(e) { return e.mode & 1 ? te & 2 && je !== 0 ? je & -je : y2.transition !== null ? (ls === 0 && (ls = Sg()), ls) : (e = re, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Tg(e.type)), e) : 1; }
function Ft(e, t, n, r) { if (50 < xi)
    throw xi = 0, kc = null, Error(j(185)); ta(e, n, r), (!(te & 2) || e !== $e) && (e === $e && (!(te & 2) && (ml |= n), ze === 4 && An(e, je)), st(e, r), n === 1 && te === 0 && !(t.mode & 1) && (Eo = _e() + 500, ul && tr())); }
function st(e, t) { var n = e.callbackNode; yx(e, t); var r = bs(e, e === $e ? je : 0); if (r === 0)
    n !== null && gm(n), e.callbackNode = null, e.callbackPriority = 0;
else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && gm(n), t === 1)
        e.tag === 0 ? g2(lp.bind(null, e)) : Yg(lp.bind(null, e)), d2(function () { !(te & 6) && tr(); }), n = null;
    else {
        switch (bg(r)) {
            case 1:
                n = bf;
                break;
            case 4:
                n = wg;
                break;
            case 16:
                n = Ss;
                break;
            case 536870912:
                n = xg;
                break;
            default: n = Ss;
        }
        n = W0(n, j0.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
} }
function j0(e, t) { if (ss = -1, ls = 0, te & 6)
    throw Error(j(327)); var n = e.callbackNode; if (uo() && e.callbackNode !== n)
    return null; var r = bs(e, e === $e ? je : 0); if (r === 0)
    return null; if (r & 30 || r & e.expiredLanes || t)
    t = Fs(e, r);
else {
    t = r;
    var o = te;
    te |= 2;
    var i = V0();
    ($e !== e || je !== t) && (nn = null, Eo = _e() + 500, xr(e, t));
    do
        try {
            R2();
            break;
        }
        catch (s) {
            F0(e, s);
        }
    while (1);
    $f(), Rs.current = i, te = o, Me !== null ? t = 0 : ($e = null, je = 0, t = ze);
} if (t !== 0) {
    if (t === 2 && (o = Gu(e), o !== 0 && (r = o, t = Ec(e, o))), t === 1)
        throw n = ji, xr(e, 0), An(e, r), st(e, _e()), n;
    if (t === 6)
        An(e, r);
    else {
        if (o = e.current.alternate, !(r & 30) && !$2(o) && (t = Fs(e, r), t === 2 && (i = Gu(e), i !== 0 && (r = i, t = Ec(e, i))), t === 1))
            throw n = ji, xr(e, 0), An(e, r), st(e, _e()), n;
        switch (e.finishedWork = o, e.finishedLanes = r, t) {
            case 0:
            case 1: throw Error(j(345));
            case 2:
                fr(e, nt, nn);
                break;
            case 3:
                if (An(e, r), (r & 130023424) === r && (t = Gf + 500 - _e(), 10 < t)) {
                    if (bs(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes, (o & r) !== r) {
                        Ye(), e.pingedLanes |= e.suspendedLanes & o;
                        break;
                    }
                    e.timeoutHandle = oc(fr.bind(null, e, nt, nn), t);
                    break;
                }
                fr(e, nt, nn);
                break;
            case 4:
                if (An(e, r), (r & 4194240) === r)
                    break;
                for (t = e.eventTimes, o = -1; 0 < r;) {
                    var a = 31 - jt(r);
                    i = 1 << a, a = t[a], a > o && (o = a), r &= ~i;
                }
                if (r = o, r = _e() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * O2(r / 1960)) - r, 10 < r) {
                    e.timeoutHandle = oc(fr.bind(null, e, nt, nn), r);
                    break;
                }
                fr(e, nt, nn);
                break;
            case 5:
                fr(e, nt, nn);
                break;
            default: throw Error(j(329));
        }
    }
} return st(e, _e()), e.callbackNode === n ? j0.bind(null, e) : null; }
function Ec(e, t) { var n = wi; return e.current.memoizedState.isDehydrated && (xr(e, t).flags |= 256), e = Fs(e, t), e !== 2 && (t = nt, nt = n, t !== null && Nc(t)), e; }
function Nc(e) { nt === null ? nt = e : nt.push.apply(nt, e); }
function $2(e) { for (var t = e;;) {
    if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null))
            for (var r = 0; r < n.length; r++) {
                var o = n[r], i = o.getSnapshot;
                o = o.value;
                try {
                    if (!Vt(i(), o))
                        return !1;
                }
                catch {
                    return !1;
                }
            }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
    else {
        if (t === e)
            break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e)
                return !0;
            t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
    }
} return !0; }
function An(e, t) { for (t &= ~Qf, t &= ~ml, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
    var n = 31 - jt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
} }
function lp(e) { if (te & 6)
    throw Error(j(327)); uo(); var t = bs(e, 0); if (!(t & 1))
    return st(e, _e()), null; var n = Fs(e, t); if (e.tag !== 0 && n === 2) {
    var r = Gu(e);
    r !== 0 && (t = r, n = Ec(e, r));
} if (n === 1)
    throw n = ji, xr(e, 0), An(e, t), st(e, _e()), n; if (n === 6)
    throw Error(j(345)); return e.finishedWork = e.current.alternate, e.finishedLanes = t, fr(e, nt, nn), st(e, _e()), null; }
function Kf(e, t) { var n = te; te |= 1; try {
    return e(t);
}
finally {
    te = n, te === 0 && (Eo = _e() + 500, ul && tr());
} }
function Cr(e) { $n !== null && $n.tag === 0 && !(te & 6) && uo(); var t = te; te |= 1; var n = _t.transition, r = re; try {
    if (_t.transition = null, re = 1, e)
        return e();
}
finally {
    re = r, _t.transition = n, te = t, !(te & 6) && tr();
} }
function Zf() { lt = Jr.current, fe(Jr); }
function xr(e, t) { e.finishedWork = null, e.finishedLanes = 0; var n = e.timeoutHandle; if (n !== -1 && (e.timeoutHandle = -1, f2(n)), Me !== null)
    for (n = Me.return; n !== null;) {
        var r = n;
        switch (Af(r), r.tag) {
            case 1:
                r = r.type.childContextTypes, r != null && Cs();
                break;
            case 3:
                bo(), fe(it), fe(qe), Vf();
                break;
            case 5:
                Ff(r);
                break;
            case 4:
                bo();
                break;
            case 13:
                fe(ye);
                break;
            case 19:
                fe(ye);
                break;
            case 10:
                Lf(r.type._context);
                break;
            case 22:
            case 23: Zf();
        }
        n = n.return;
    } if ($e = e, Me = e = Un(e.current, null), je = lt = t, ze = 0, ji = null, Qf = ml = _r = 0, nt = wi = null, pr !== null) {
    for (t = 0; t < pr.length; t++)
        if (n = pr[t], r = n.interleaved, r !== null) {
            n.interleaved = null;
            var o = r.next, i = n.pending;
            if (i !== null) {
                var a = i.next;
                i.next = o, r.next = a;
            }
            n.pending = r;
        }
    pr = null;
} return e; }
function F0(e, t) { do {
    var n = Me;
    try {
        if ($f(), os.current = Ls, $s) {
            for (var r = ve.memoizedState; r !== null;) {
                var o = r.queue;
                o !== null && (o.pending = null), r = r.next;
            }
            $s = !1;
        }
        if (Nr = 0, Oe = Pe = ve = null, yi = !1, Li = 0, Xf.current = null, n === null || n.return === null) {
            ze = 1, ji = t, Me = null;
            break;
        }
        e: {
            var i = e, a = n.return, s = n, l = t;
            if (t = je, s.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
                var u = l, c = s, f = c.tag;
                if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                    var d = c.alternate;
                    d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null);
                }
                var p = Qm(a);
                if (p !== null) {
                    p.flags &= -257, Gm(p, a, s, i, t), p.mode & 1 && Xm(i, u, t), t = p, l = u;
                    var g = t.updateQueue;
                    if (g === null) {
                        var y = new Set;
                        y.add(l), t.updateQueue = y;
                    }
                    else
                        g.add(l);
                    break e;
                }
                else {
                    if (!(t & 1)) {
                        Xm(i, u, t), Jf();
                        break e;
                    }
                    l = Error(j(426));
                }
            }
            else if (he && s.mode & 1) {
                var x = Qm(a);
                if (x !== null) {
                    !(x.flags & 65536) && (x.flags |= 256), Gm(x, a, s, i, t), If(ko(l, s));
                    break e;
                }
            }
            i = l = ko(l, s), ze !== 4 && (ze = 2), wi === null ? wi = [i] : wi.push(i), i = a;
            do {
                switch (i.tag) {
                    case 3:
                        i.flags |= 65536, t &= -t, i.lanes |= t;
                        var m = k0(i, l, t);
                        Vm(i, m);
                        break e;
                    case 1:
                        s = l;
                        var h = i.type, v = i.stateNode;
                        if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Hn === null || !Hn.has(v)))) {
                            i.flags |= 65536, t &= -t, i.lanes |= t;
                            var w = E0(i, s, t);
                            Vm(i, w);
                            break e;
                        }
                }
                i = i.return;
            } while (i !== null);
        }
        B0(n);
    }
    catch (S) {
        t = S, Me === n && n !== null && (Me = n = n.return);
        continue;
    }
    break;
} while (1); }
function V0() { var e = Rs.current; return Rs.current = Ls, e === null ? Ls : e; }
function Jf() { (ze === 0 || ze === 3 || ze === 2) && (ze = 4), $e === null || !(_r & 268435455) && !(ml & 268435455) || An($e, je); }
function Fs(e, t) { var n = te; te |= 2; var r = V0(); ($e !== e || je !== t) && (nn = null, xr(e, t)); do
    try {
        L2();
        break;
    }
    catch (o) {
        F0(e, o);
    }
while (1); if ($f(), te = n, Rs.current = r, Me !== null)
    throw Error(j(261)); return $e = null, je = 0, ze; }
function L2() { for (; Me !== null;)
    H0(Me); }
function R2() { for (; Me !== null && !lx();)
    H0(Me); }
function H0(e) { var t = q0(e.alternate, e, lt); e.memoizedProps = e.pendingProps, t === null ? B0(e) : Me = t, Xf.current = null; }
function B0(e) { var t = e; do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
        if (n = P2(n, t), n !== null) {
            n.flags &= 32767, Me = n;
            return;
        }
        if (e !== null)
            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
            ze = 6, Me = null;
            return;
        }
    }
    else if (n = M2(n, t, lt), n !== null) {
        Me = n;
        return;
    }
    if (t = t.sibling, t !== null) {
        Me = t;
        return;
    }
    Me = t = e;
} while (t !== null); ze === 0 && (ze = 5); }
function fr(e, t, n) { var r = re, o = _t.transition; try {
    _t.transition = null, re = 1, D2(e, t, n, r);
}
finally {
    _t.transition = o, re = r;
} return null; }
function D2(e, t, n, r) { do
    uo();
while ($n !== null); if (te & 6)
    throw Error(j(327)); n = e.finishedWork; var o = e.finishedLanes; if (n === null)
    return null; if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(j(177)); e.callbackNode = null, e.callbackPriority = 0; var i = n.lanes | n.childLanes; if (vx(e, i), e === $e && (Me = $e = null, je = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Pa || (Pa = !0, W0(Ss, function () { return uo(), null; })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = _t.transition, _t.transition = null;
    var a = re;
    re = 1;
    var s = te;
    te |= 4, Xf.current = null, A2(e, n), R0(n, e), o2(nc), ks = !!tc, nc = tc = null, e.current = n, I2(n), ux(), te = s, re = a, _t.transition = i;
}
else
    e.current = n; if (Pa && (Pa = !1, $n = e, js = o), i = e.pendingLanes, i === 0 && (Hn = null), dx(n.stateNode), st(e, _e()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest }); if (Ds)
    throw Ds = !1, e = bc, bc = null, e; return js & 1 && e.tag !== 0 && uo(), i = e.pendingLanes, i & 1 ? e === kc ? xi++ : (xi = 0, kc = e) : xi = 0, tr(), null; }
function uo() { if ($n !== null) {
    var e = bg(js), t = _t.transition, n = re;
    try {
        if (_t.transition = null, re = 16 > e ? 16 : e, $n === null)
            var r = !1;
        else {
            if (e = $n, $n = null, js = 0, te & 6)
                throw Error(j(331));
            var o = te;
            for (te |= 4, U = e.current; U !== null;) {
                var i = U, a = i.child;
                if (U.flags & 16) {
                    var s = i.deletions;
                    if (s !== null) {
                        for (var l = 0; l < s.length; l++) {
                            var u = s[l];
                            for (U = u; U !== null;) {
                                var c = U;
                                switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15: vi(8, c, i);
                                }
                                var f = c.child;
                                if (f !== null)
                                    f.return = c, U = f;
                                else
                                    for (; U !== null;) {
                                        c = U;
                                        var d = c.sibling, p = c.return;
                                        if (O0(c), c === u) {
                                            U = null;
                                            break;
                                        }
                                        if (d !== null) {
                                            d.return = p, U = d;
                                            break;
                                        }
                                        U = p;
                                    }
                            }
                        }
                        var g = i.alternate;
                        if (g !== null) {
                            var y = g.child;
                            if (y !== null) {
                                g.child = null;
                                do {
                                    var x = y.sibling;
                                    y.sibling = null, y = x;
                                } while (y !== null);
                            }
                        }
                        U = i;
                    }
                }
                if (i.subtreeFlags & 2064 && a !== null)
                    a.return = i, U = a;
                else
                    e: for (; U !== null;) {
                        if (i = U, i.flags & 2048)
                            switch (i.tag) {
                                case 0:
                                case 11:
                                case 15: vi(9, i, i.return);
                            }
                        var m = i.sibling;
                        if (m !== null) {
                            m.return = i.return, U = m;
                            break e;
                        }
                        U = i.return;
                    }
            }
            var h = e.current;
            for (U = h; U !== null;) {
                a = U;
                var v = a.child;
                if (a.subtreeFlags & 2064 && v !== null)
                    v.return = a, U = v;
                else
                    e: for (a = h; U !== null;) {
                        if (s = U, s.flags & 2048)
                            try {
                                switch (s.tag) {
                                    case 0:
                                    case 11:
                                    case 15: dl(9, s);
                                }
                            }
                            catch (S) {
                                Se(s, s.return, S);
                            }
                        if (s === a) {
                            U = null;
                            break e;
                        }
                        var w = s.sibling;
                        if (w !== null) {
                            w.return = s.return, U = w;
                            break e;
                        }
                        U = s.return;
                    }
            }
            if (te = o, tr(), Gt && typeof Gt.onPostCommitFiberRoot == "function")
                try {
                    Gt.onPostCommitFiberRoot(ol, e);
                }
                catch { }
            r = !0;
        }
        return r;
    }
    finally {
        re = n, _t.transition = t;
    }
} return !1; }
function up(e, t, n) { t = ko(n, t), t = k0(e, t, 1), e = Vn(e, t, 1), t = Ye(), e !== null && (ta(e, 1, t), st(e, t)); }
function Se(e, t, n) { if (e.tag === 3)
    up(e, e, n);
else
    for (; t !== null;) {
        if (t.tag === 3) {
            up(t, e, n);
            break;
        }
        else if (t.tag === 1) {
            var r = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Hn === null || !Hn.has(r))) {
                e = ko(n, e), e = E0(t, e, 1), t = Vn(t, e, 1), e = Ye(), t !== null && (ta(t, 1, e), st(t, e));
                break;
            }
        }
        t = t.return;
    } }
function j2(e, t, n) { var r = e.pingCache; r !== null && r.delete(t), t = Ye(), e.pingedLanes |= e.suspendedLanes & n, $e === e && (je & n) === n && (ze === 4 || ze === 3 && (je & 130023424) === je && 500 > _e() - Gf ? xr(e, 0) : Qf |= n), st(e, t); }
function U0(e, t) { t === 0 && (e.mode & 1 ? (t = xa, xa <<= 1, !(xa & 130023424) && (xa = 4194304)) : t = 1); var n = Ye(); e = mn(e, t), e !== null && (ta(e, t, n), st(e, n)); }
function F2(e) { var t = e.memoizedState, n = 0; t !== null && (n = t.retryLane), U0(e, n); }
function V2(e, t) { var n = 0; switch (e.tag) {
    case 13:
        var r = e.stateNode, o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default: throw Error(j(314));
} r !== null && r.delete(t), U0(e, n); }
var q0;
q0 = function (e, t, n) { if (e !== null)
    if (e.memoizedProps !== t.pendingProps || it.current)
        rt = !0;
    else {
        if (!(e.lanes & n) && !(t.flags & 128))
            return rt = !1, T2(e, t, n);
        rt = !!(e.flags & 131072);
    }
else
    rt = !1, he && t.flags & 1048576 && Xg(t, Ps, t.index); switch (t.lanes = 0, t.tag) {
    case 2:
        var r = t.type;
        as(e, t), e = t.pendingProps;
        var o = wo(t, qe.current);
        lo(t, n), o = Bf(null, t, r, e, o, n);
        var i = Uf();
        return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, at(r) ? (i = !0, Ts(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Df(t), o.updater = cl, t.stateNode = o, o._reactInternals = t, fc(t, r, e, n), t = pc(null, t, r, !0, i, n)) : (t.tag = 0, he && i && zf(t), We(null, t, o, n), t = t.child), t;
    case 16:
        r = t.elementType;
        e: {
            switch (as(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = B2(r), e = It(r, e), o) {
                case 0:
                    t = mc(null, t, r, e, n);
                    break e;
                case 1:
                    t = Jm(null, t, r, e, n);
                    break e;
                case 11:
                    t = Km(null, t, r, e, n);
                    break e;
                case 14:
                    t = Zm(null, t, r, It(r.type, e), n);
                    break e;
            }
            throw Error(j(306, r, ""));
        }
        return t;
    case 0: return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : It(r, o), mc(e, t, r, o, n);
    case 1: return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : It(r, o), Jm(e, t, r, o, n);
    case 3:
        e: {
            if (T0(t), e === null)
                throw Error(j(387));
            r = t.pendingProps, i = t.memoizedState, o = i.element, Zg(e, t), Is(t, r, null, n);
            var a = t.memoizedState;
            if (r = a.element, i.isDehydrated)
                if (i = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                    o = ko(Error(j(423)), t), t = ep(e, t, r, n, o);
                    break e;
                }
                else if (r !== o) {
                    o = ko(Error(j(424)), t), t = ep(e, t, r, n, o);
                    break e;
                }
                else
                    for (ct = Fn(t.stateNode.containerInfo.firstChild), ft = t, he = !0, $t = null, n = n0(t, null, r, n), t.child = n; n;)
                        n.flags = n.flags & -3 | 4096, n = n.sibling;
            else {
                if (xo(), r === o) {
                    t = pn(e, t, n);
                    break e;
                }
                We(e, t, r, n);
            }
            t = t.child;
        }
        return t;
    case 5: return r0(t), e === null && lc(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = o.children, rc(r, o) ? a = null : i !== null && rc(r, i) && (t.flags |= 32), C0(e, t), We(e, t, a, n), t.child;
    case 6: return e === null && lc(t), null;
    case 13: return M0(e, t, n);
    case 4: return jf(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = So(t, null, r, n) : We(e, t, r, n), t.child;
    case 11: return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : It(r, o), Km(e, t, r, o, n);
    case 7: return We(e, t, t.pendingProps, n), t.child;
    case 8: return We(e, t, t.pendingProps.children, n), t.child;
    case 12: return We(e, t, t.pendingProps.children, n), t.child;
    case 10:
        e: {
            if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, a = o.value, ae(zs, r._currentValue), r._currentValue = a, i !== null)
                if (Vt(i.value, a)) {
                    if (i.children === o.children && !it.current) {
                        t = pn(e, t, n);
                        break e;
                    }
                }
                else
                    for (i = t.child, i !== null && (i.return = t); i !== null;) {
                        var s = i.dependencies;
                        if (s !== null) {
                            a = i.child;
                            for (var l = s.firstContext; l !== null;) {
                                if (l.context === r) {
                                    if (i.tag === 1) {
                                        l = ln(-1, n & -n), l.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                                        }
                                    }
                                    i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), uc(i.return, n, t), s.lanes |= n;
                                    break;
                                }
                                l = l.next;
                            }
                        }
                        else if (i.tag === 10)
                            a = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (a = i.return, a === null)
                                throw Error(j(341));
                            a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), uc(a, n, t), a = i.sibling;
                        }
                        else
                            a = i.child;
                        if (a !== null)
                            a.return = i;
                        else
                            for (a = i; a !== null;) {
                                if (a === t) {
                                    a = null;
                                    break;
                                }
                                if (i = a.sibling, i !== null) {
                                    i.return = a.return, a = i;
                                    break;
                                }
                                a = a.return;
                            }
                        i = a;
                    }
            We(e, t, o.children, n), t = t.child;
        }
        return t;
    case 9: return o = t.type, r = t.pendingProps.children, lo(t, n), o = Tt(o), r = r(o), t.flags |= 1, We(e, t, r, n), t.child;
    case 14: return r = t.type, o = It(r, t.pendingProps), o = It(r.type, o), Zm(e, t, r, o, n);
    case 15: return N0(e, t, t.type, t.pendingProps, n);
    case 17: return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : It(r, o), as(e, t), t.tag = 1, at(r) ? (e = !0, Ts(t)) : e = !1, lo(t, n), e0(t, r, o), fc(t, r, o, n), pc(null, t, r, !0, e, n);
    case 19: return P0(e, t, n);
    case 22: return _0(e, t, n);
} throw Error(j(156, t.tag)); };
function W0(e, t) { return vg(e, t); }
function H2(e, t, n, r) { this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null; }
function kt(e, t, n, r) { return new H2(e, t, n, r); }
function ed(e) { return e = e.prototype, !(!e || !e.isReactComponent); }
function B2(e) { if (typeof e == "function")
    return ed(e) ? 1 : 0; if (e != null) {
    if (e = e.$$typeof, e === wf)
        return 11;
    if (e === xf)
        return 14;
} return 2; }
function Un(e, t) { var n = e.alternate; return n === null ? (n = kt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n; }
function us(e, t, n, r, o, i) { var a = 2; if (r = e, typeof e == "function")
    ed(e) && (a = 1);
else if (typeof e == "string")
    a = 5;
else
    e: switch (e) {
        case Br: return Sr(n.children, o, i, t);
        case vf:
            a = 8, o |= 8;
            break;
        case $u: return e = kt(12, n, t, o | 2), e.elementType = $u, e.lanes = i, e;
        case Lu: return e = kt(13, n, t, o), e.elementType = Lu, e.lanes = i, e;
        case Ru: return e = kt(19, n, t, o), e.elementType = Ru, e.lanes = i, e;
        case tg: return pl(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                    case Jh:
                        a = 10;
                        break e;
                    case eg:
                        a = 9;
                        break e;
                    case wf:
                        a = 11;
                        break e;
                    case xf:
                        a = 14;
                        break e;
                    case Cn:
                        a = 16, r = null;
                        break e;
                }
            throw Error(j(130, e == null ? e : typeof e, ""));
    } return t = kt(a, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t; }
function Sr(e, t, n, r) { return e = kt(7, e, r, t), e.lanes = n, e; }
function pl(e, t, n, r) { return e = kt(22, e, r, t), e.elementType = tg, e.lanes = n, e.stateNode = { isHidden: !1 }, e; }
function mu(e, t, n) { return e = kt(6, e, null, t), e.lanes = n, e; }
function pu(e, t, n) { return t = kt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t; }
function U2(e, t, n, r, o) { this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Xl(0), this.expirationTimes = Xl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null; }
function td(e, t, n, r, o, i, a, s, l) { return e = new U2(e, t, n, s, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = kt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Df(i), e; }
function q2(e, t, n) { var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null; return { $$typeof: Hr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n }; }
function Y0(e) { if (!e)
    return Xn; e = e._reactInternals; e: {
    if (Ir(e) !== e || e.tag !== 1)
        throw Error(j(170));
    var t = e;
    do {
        switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1: if (at(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
            }
        }
        t = t.return;
    } while (t !== null);
    throw Error(j(171));
} if (e.tag === 1) {
    var n = e.type;
    if (at(n))
        return Wg(e, n, t);
} return t; }
function X0(e, t, n, r, o, i, a, s, l) { return e = td(n, r, !0, e, o, i, a, s, l), e.context = Y0(null), n = e.current, r = Ye(), o = Bn(n), i = ln(r, o), i.callback = t ?? null, Vn(n, i, o), e.current.lanes = o, ta(e, o, r), st(e, r), e; }
function hl(e, t, n, r) { var o = t.current, i = Ye(), a = Bn(o); return n = Y0(n), t.context === null ? t.context = n : t.pendingContext = n, t = ln(i, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Vn(o, t, a), e !== null && (Ft(e, o, a, i), rs(e, o, a)), a; }
function Vs(e) { if (e = e.current, !e.child)
    return null; switch (e.child.tag) {
    case 5: return e.child.stateNode;
    default: return e.child.stateNode;
} }
function cp(e, t) { if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
} }
function nd(e, t) { cp(e, t), (e = e.alternate) && cp(e, t); }
function W2() { return null; }
var Q0 = typeof reportError == "function" ? reportError : function (e) { console.error(e); };
function rd(e) { this._internalRoot = e; }
gl.prototype.render = rd.prototype.render = function (e) { var t = this._internalRoot; if (t === null)
    throw Error(j(409)); hl(e, t, null, null); };
gl.prototype.unmount = rd.prototype.unmount = function () { var e = this._internalRoot; if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Cr(function () { hl(null, e, null, null); }), t[dn] = null;
} };
function gl(e) { this._internalRoot = e; }
gl.prototype.unstable_scheduleHydration = function (e) { if (e) {
    var t = Ng();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < zn.length && t !== 0 && t < zn[n].priority; n++)
        ;
    zn.splice(n, 0, e), n === 0 && Cg(e);
} };
function od(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11); }
function yl(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")); }
function fp() { }
function Y2(e, t, n, r, o) { if (o) {
    if (typeof r == "function") {
        var i = r;
        r = function () { var u = Vs(a); i.call(u); };
    }
    var a = X0(t, r, e, 0, null, !1, !1, "", fp);
    return e._reactRootContainer = a, e[dn] = a.current, zi(e.nodeType === 8 ? e.parentNode : e), Cr(), a;
} for (; o = e.lastChild;)
    e.removeChild(o); if (typeof r == "function") {
    var s = r;
    r = function () { var u = Vs(l); s.call(u); };
} var l = td(e, 0, !1, null, null, !1, !1, "", fp); return e._reactRootContainer = l, e[dn] = l.current, zi(e.nodeType === 8 ? e.parentNode : e), Cr(function () { hl(t, l, n, r); }), l; }
function vl(e, t, n, r, o) { var i = n._reactRootContainer; if (i) {
    var a = i;
    if (typeof o == "function") {
        var s = o;
        o = function () { var l = Vs(a); s.call(l); };
    }
    hl(t, a, e, o);
}
else
    a = Y2(n, t, e, o, r); return Vs(a); }
kg = function (e) { switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = ai(t.pendingLanes);
            n !== 0 && (kf(t, n | 1), st(t, _e()), !(te & 6) && (Eo = _e() + 500, tr()));
        }
        break;
    case 13: Cr(function () { var r = mn(e, 1); if (r !== null) {
        var o = Ye();
        Ft(r, e, 1, o);
    } }), nd(e, 1);
} };
Ef = function (e) { if (e.tag === 13) {
    var t = mn(e, 134217728);
    if (t !== null) {
        var n = Ye();
        Ft(t, e, 134217728, n);
    }
    nd(e, 134217728);
} };
Eg = function (e) { if (e.tag === 13) {
    var t = Bn(e), n = mn(e, t);
    if (n !== null) {
        var r = Ye();
        Ft(n, e, t, r);
    }
    nd(e, t);
} };
Ng = function () { return re; };
_g = function (e, t) { var n = re; try {
    return re = e, t();
}
finally {
    re = n;
} };
Yu = function (e, t, n) { switch (t) {
    case "input":
        if (Fu(e, n), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode;)
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = ll(r);
                    if (!o)
                        throw Error(j(90));
                    rg(r), Fu(r, o);
                }
            }
        }
        break;
    case "textarea":
        ig(e, n);
        break;
    case "select": t = n.value, t != null && oo(e, !!n.multiple, t, !1);
} };
dg = Kf;
mg = Cr;
var X2 = { usingClientEntryPoint: !1, Events: [ra, Yr, ll, cg, fg, Kf] }, Zo = { findFiberByHostInstance: mr, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Q2 = { bundleType: Zo.bundleType, version: Zo.version, rendererPackageName: Zo.rendererPackageName, rendererConfig: Zo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: wn.ReactCurrentDispatcher, findHostInstanceByFiber: function (e) { return e = gg(e), e === null ? null : e.stateNode; }, findFiberByHostInstance: Zo.findFiberByHostInstance || W2, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var za = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!za.isDisabled && za.supportsFiber)
        try {
            ol = za.inject(Q2), Gt = za;
        }
        catch { }
}
pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X2;
pt.createPortal = function (e, t) { var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null; if (!od(t))
    throw Error(j(200)); return q2(e, t, null, n); };
pt.createRoot = function (e, t) { if (!od(e))
    throw Error(j(299)); var n = !1, r = "", o = Q0; return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = td(e, 1, !1, null, null, n, !1, r, o), e[dn] = t.current, zi(e.nodeType === 8 ? e.parentNode : e), new rd(t); };
pt.findDOMNode = function (e) { if (e == null)
    return null; if (e.nodeType === 1)
    return e; var t = e._reactInternals; if (t === void 0)
    throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","), Error(j(268, e))); return e = gg(t), e = e === null ? null : e.stateNode, e; };
pt.flushSync = function (e) { return Cr(e); };
pt.hydrate = function (e, t, n) { if (!yl(t))
    throw Error(j(200)); return vl(null, e, t, !0, n); };
pt.hydrateRoot = function (e, t, n) { if (!od(e))
    throw Error(j(405)); var r = n != null && n.hydratedSources || null, o = !1, i = "", a = Q0; if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = X0(t, null, e, 1, n ?? null, o, !1, i, a), e[dn] = t.current, zi(e), r)
    for (e = 0; e < r.length; e++)
        n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o); return new gl(t); };
pt.render = function (e, t, n) { if (!yl(t))
    throw Error(j(200)); return vl(null, e, t, !1, n); };
pt.unmountComponentAtNode = function (e) { if (!yl(e))
    throw Error(j(40)); return e._reactRootContainer ? (Cr(function () { vl(null, null, e, !1, function () { e._reactRootContainer = null, e[dn] = null; }); }), !0) : !1; };
pt.unstable_batchedUpdates = Kf;
pt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) { if (!yl(n))
    throw Error(j(200)); if (e == null || e._reactInternals === void 0)
    throw Error(j(38)); return vl(e, t, n, !1, r); };
pt.version = "18.2.0-next-9e3b772b8-20220608";
function G0() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(G0);
    }
    catch (e) {
        console.error(e);
    } }
G0(), Xh.exports = pt;
var G2 = Xh.exports, dp = G2;
Iu.createRoot = dp.createRoot, Iu.hydrateRoot = dp.hydrateRoot;
function Ze(e) { if (typeof e == "string" || typeof e == "number")
    return "" + e; let t = ""; if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
        (r = Ze(e[n])) !== "" && (t += (t && " ") + r);
else
    for (let n in e)
        e[n] && (t += (t && " ") + n); return t; }
const mp = e => { let t; const n = new Set, r = (l, u) => { const c = typeof l == "function" ? l(t) : l; if (!Object.is(c, t)) {
    const f = t;
    t = u ?? typeof c != "object" ? c : Object.assign({}, t, c), n.forEach(d => d(t, f));
} }, o = () => t, s = { setState: r, getState: o, subscribe: l => (n.add(l), () => n.delete(l)), destroy: () => { n.clear(); } }; return t = e(r, o, s), s; }, K2 = e => e ? mp(e) : mp;
var K0 = { exports: {} }, Z0 = {}, J0 = { exports: {} }, ey = {}; /**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var No = T;
function Z2(e, t) { return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t; }
var J2 = typeof Object.is == "function" ? Object.is : Z2, eS = No.useState, tS = No.useEffect, nS = No.useLayoutEffect, rS = No.useDebugValue;
function oS(e, t) { var n = t(), r = eS({ inst: { value: n, getSnapshot: t } }), o = r[0].inst, i = r[1]; return nS(function () { o.value = n, o.getSnapshot = t, hu(o) && i({ inst: o }); }, [e, n, t]), tS(function () { return hu(o) && i({ inst: o }), e(function () { hu(o) && i({ inst: o }); }); }, [e]), rS(n), n; }
function hu(e) { var t = e.getSnapshot; e = e.value; try {
    var n = t();
    return !J2(e, n);
}
catch {
    return !0;
} }
function iS(e, t) { return t(); }
var aS = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? iS : oS;
ey.useSyncExternalStore = No.useSyncExternalStore !== void 0 ? No.useSyncExternalStore : aS;
J0.exports = ey;
var sS = J0.exports; /**
* @license React
* use-sync-external-store-shim/with-selector.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var wl = T, lS = sS;
function uS(e, t) { return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t; }
var cS = typeof Object.is == "function" ? Object.is : uS, fS = lS.useSyncExternalStore, dS = wl.useRef, mS = wl.useEffect, pS = wl.useMemo, hS = wl.useDebugValue;
Z0.useSyncExternalStoreWithSelector = function (e, t, n, r, o) { var i = dS(null); if (i.current === null) {
    var a = { hasValue: !1, value: null };
    i.current = a;
}
else
    a = i.current; i = pS(function () { function l(p) { if (!u) {
    if (u = !0, c = p, p = r(p), o !== void 0 && a.hasValue) {
        var g = a.value;
        if (o(g, p))
            return f = g;
    }
    return f = p;
} if (g = f, cS(c, p))
    return g; var y = r(p); return o !== void 0 && o(g, y) ? g : (c = p, f = y); } var u = !1, c, f, d = n === void 0 ? null : n; return [function () { return l(t()); }, d === null ? void 0 : function () { return l(d()); }]; }, [t, n, r, o]); var s = fS(e, i[0], i[1]); return mS(function () { a.hasValue = !0, a.value = s; }, [s]), hS(s), s; };
K0.exports = Z0;
var gS = K0.exports;
const yS = nl(gS), { useSyncExternalStoreWithSelector: vS } = yS;
function wS(e, t = e.getState, n) { const r = vS(e.subscribe, e.getState, e.getServerState || e.getState, t, n); return T.useDebugValue(r), r; }
function Le(e, t) { if (Object.is(e, t))
    return !0; if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1; if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size)
        return !1;
    for (const [r, o] of e)
        if (!Object.is(o, t.get(r)))
            return !1;
    return !0;
} if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size)
        return !1;
    for (const r of e)
        if (!t.has(r))
            return !1;
    return !0;
} const n = Object.keys(e); if (n.length !== Object.keys(t).length)
    return !1; for (let r = 0; r < n.length; r++)
    if (!Object.prototype.hasOwnProperty.call(t, n[r]) || !Object.is(e[n[r]], t[n[r]]))
        return !1; return !0; }
var xS = { value: () => { } };
function xl() { for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r))
        throw new Error("illegal type: " + r);
    n[r] = [];
} return new cs(n); }
function cs(e) { this._ = e; }
function SS(e, t) { return e.trim().split(/^|\s+/).map(function (n) { var r = "", o = n.indexOf("."); if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n))
    throw new Error("unknown type: " + n); return { type: n, name: r }; }); }
cs.prototype = xl.prototype = { constructor: cs, on: function (e, t) { var n = this._, r = SS(e + "", n), o, i = -1, a = r.length; if (arguments.length < 2) {
        for (; ++i < a;)
            if ((o = (e = r[i]).type) && (o = bS(n[o], e.name)))
                return o;
        return;
    } if (t != null && typeof t != "function")
        throw new Error("invalid callback: " + t); for (; ++i < a;)
        if (o = (e = r[i]).type)
            n[o] = pp(n[o], e.name, t);
        else if (t == null)
            for (o in n)
                n[o] = pp(n[o], e.name, null); return this; }, copy: function () { var e = {}, t = this._; for (var n in t)
        e[n] = t[n].slice(); return new cs(e); }, call: function (e, t) { if ((o = arguments.length - 2) > 0)
        for (var n = new Array(o), r = 0, o, i; r < o; ++r)
            n[r] = arguments[r + 2]; if (!this._.hasOwnProperty(e))
        throw new Error("unknown type: " + e); for (i = this._[e], r = 0, o = i.length; r < o; ++r)
        i[r].value.apply(t, n); }, apply: function (e, t, n) { if (!this._.hasOwnProperty(e))
        throw new Error("unknown type: " + e); for (var r = this._[e], o = 0, i = r.length; o < i; ++o)
        r[o].value.apply(t, n); } };
function bS(e, t) { for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
        return o.value; }
function pp(e, t, n) { for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
        e[r] = xS, e = e.slice(0, r).concat(e.slice(r + 1));
        break;
    } return n != null && e.push({ name: t, value: n }), e; }
var _c = "http://www.w3.org/1999/xhtml";
const hp = { svg: "http://www.w3.org/2000/svg", xhtml: _c, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" };
function Sl(e) { var t = e += "", n = t.indexOf(":"); return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), hp.hasOwnProperty(t) ? { space: hp[t], local: e } : e; }
function kS(e) { return function () { var t = this.ownerDocument, n = this.namespaceURI; return n === _c && t.documentElement.namespaceURI === _c ? t.createElement(e) : t.createElementNS(n, e); }; }
function ES(e) { return function () { return this.ownerDocument.createElementNS(e.space, e.local); }; }
function ty(e) { var t = Sl(e); return (t.local ? ES : kS)(t); }
function NS() { }
function id(e) { return e == null ? NS : function () { return this.querySelector(e); }; }
function _S(e) { typeof e != "function" && (e = id(e)); for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = new Array(a), l, u, c = 0; c < a; ++c)
        (l = i[c]) && (u = e.call(l, l.__data__, c, i)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u); return new mt(r, this._parents); }
function CS(e) { return e == null ? [] : Array.isArray(e) ? e : Array.from(e); }
function TS() { return []; }
function ny(e) { return e == null ? TS : function () { return this.querySelectorAll(e); }; }
function MS(e) { return function () { return CS(e.apply(this, arguments)); }; }
function PS(e) { typeof e == "function" ? e = MS(e) : e = ny(e); for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var a = t[i], s = a.length, l, u = 0; u < s; ++u)
        (l = a[u]) && (r.push(e.call(l, l.__data__, u, a)), o.push(l)); return new mt(r, o); }
function ry(e) { return function () { return this.matches(e); }; }
function oy(e) { return function (t) { return t.matches(e); }; }
var zS = Array.prototype.find;
function AS(e) { return function () { return zS.call(this.children, e); }; }
function IS() { return this.firstElementChild; }
function OS(e) { return this.select(e == null ? IS : AS(typeof e == "function" ? e : oy(e))); }
var $S = Array.prototype.filter;
function LS() { return Array.from(this.children); }
function RS(e) { return function () { return $S.call(this.children, e); }; }
function DS(e) { return this.selectAll(e == null ? LS : RS(typeof e == "function" ? e : oy(e))); }
function jS(e) { typeof e != "function" && (e = ry(e)); for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
        (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l); return new mt(r, this._parents); }
function iy(e) { return new Array(e.length); }
function FS() { return new mt(this._enter || this._groups.map(iy), this._parents); }
function Hs(e, t) { this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t; }
Hs.prototype = { constructor: Hs, appendChild: function (e) { return this._parent.insertBefore(e, this._next); }, insertBefore: function (e, t) { return this._parent.insertBefore(e, t); }, querySelector: function (e) { return this._parent.querySelector(e); }, querySelectorAll: function (e) { return this._parent.querySelectorAll(e); } };
function VS(e) { return function () { return e; }; }
function HS(e, t, n, r, o, i) { for (var a = 0, s, l = t.length, u = i.length; a < u; ++a)
    (s = t[a]) ? (s.__data__ = i[a], r[a] = s) : n[a] = new Hs(e, i[a]); for (; a < l; ++a)
    (s = t[a]) && (o[a] = s); }
function BS(e, t, n, r, o, i, a) { var s, l, u = new Map, c = t.length, f = i.length, d = new Array(c), p; for (s = 0; s < c; ++s)
    (l = t[s]) && (d[s] = p = a.call(l, l.__data__, s, t) + "", u.has(p) ? o[s] = l : u.set(p, l)); for (s = 0; s < f; ++s)
    p = a.call(e, i[s], s, i) + "", (l = u.get(p)) ? (r[s] = l, l.__data__ = i[s], u.delete(p)) : n[s] = new Hs(e, i[s]); for (s = 0; s < c; ++s)
    (l = t[s]) && u.get(d[s]) === l && (o[s] = l); }
function US(e) { return e.__data__; }
function qS(e, t) { if (!arguments.length)
    return Array.from(this, US); var n = t ? BS : HS, r = this._parents, o = this._groups; typeof e != "function" && (e = VS(e)); for (var i = o.length, a = new Array(i), s = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], f = o[u], d = f.length, p = WS(e.call(c, c && c.__data__, u, r)), g = p.length, y = s[u] = new Array(g), x = a[u] = new Array(g), m = l[u] = new Array(d);
    n(c, f, y, x, m, p, t);
    for (var h = 0, v = 0, w, S; h < g; ++h)
        if (w = y[h]) {
            for (h >= v && (v = h + 1); !(S = x[v]) && ++v < g;)
                ;
            w._next = S || null;
        }
} return a = new mt(a, r), a._enter = s, a._exit = l, a; }
function WS(e) { return typeof e == "object" && "length" in e ? e : Array.from(e); }
function YS() { return new mt(this._exit || this._groups.map(iy), this._parents); }
function XS(e, t, n) { var r = this.enter(), o = this, i = this.exit(); return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o; }
function QS(e) { for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, a = Math.min(o, i), s = new Array(o), l = 0; l < a; ++l)
    for (var u = n[l], c = r[l], f = u.length, d = s[l] = new Array(f), p, g = 0; g < f; ++g)
        (p = u[g] || c[g]) && (d[g] = p); for (; l < o; ++l)
    s[l] = n[l]; return new mt(s, this._parents); }
function GS() { for (var e = this._groups, t = -1, n = e.length; ++t < n;)
    for (var r = e[t], o = r.length - 1, i = r[o], a; --o >= 0;)
        (a = r[o]) && (i && a.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(a, i), i = a); return this; }
function KS(e) { e || (e = ZS); function t(f, d) { return f && d ? e(f.__data__, d.__data__) : !f - !d; } for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var a = n[i], s = a.length, l = o[i] = new Array(s), u, c = 0; c < s; ++c)
        (u = a[c]) && (l[c] = u);
    l.sort(t);
} return new mt(o, this._parents).order(); }
function ZS(e, t) { return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN; }
function JS() { var e = arguments[0]; return arguments[0] = this, e.apply(null, arguments), this; }
function eb() { return Array.from(this); }
function tb() { for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
        var a = r[o];
        if (a)
            return a;
    } return null; }
function nb() { let e = 0; for (const t of this)
    ++e; return e; }
function rb() { return !this.node(); }
function ob(e) { for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, a = o.length, s; i < a; ++i)
        (s = o[i]) && e.call(s, s.__data__, i, o); return this; }
function ib(e) { return function () { this.removeAttribute(e); }; }
function ab(e) { return function () { this.removeAttributeNS(e.space, e.local); }; }
function sb(e, t) { return function () { this.setAttribute(e, t); }; }
function lb(e, t) { return function () { this.setAttributeNS(e.space, e.local, t); }; }
function ub(e, t) { return function () { var n = t.apply(this, arguments); n == null ? this.removeAttribute(e) : this.setAttribute(e, n); }; }
function cb(e, t) { return function () { var n = t.apply(this, arguments); n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n); }; }
function fb(e, t) { var n = Sl(e); if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
} return this.each((t == null ? n.local ? ab : ib : typeof t == "function" ? n.local ? cb : ub : n.local ? lb : sb)(n, t)); }
function ay(e) { return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView; }
function db(e) { return function () { this.style.removeProperty(e); }; }
function mb(e, t, n) { return function () { this.style.setProperty(e, t, n); }; }
function pb(e, t, n) { return function () { var r = t.apply(this, arguments); r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n); }; }
function hb(e, t, n) { return arguments.length > 1 ? this.each((t == null ? db : typeof t == "function" ? pb : mb)(e, t, n ?? "")) : _o(this.node(), e); }
function _o(e, t) { return e.style.getPropertyValue(t) || ay(e).getComputedStyle(e, null).getPropertyValue(t); }
function gb(e) { return function () { delete this[e]; }; }
function yb(e, t) { return function () { this[e] = t; }; }
function vb(e, t) { return function () { var n = t.apply(this, arguments); n == null ? delete this[e] : this[e] = n; }; }
function wb(e, t) { return arguments.length > 1 ? this.each((t == null ? gb : typeof t == "function" ? vb : yb)(e, t)) : this.node()[e]; }
function sy(e) { return e.trim().split(/^|\s+/); }
function ad(e) { return e.classList || new ly(e); }
function ly(e) { this._node = e, this._names = sy(e.getAttribute("class") || ""); }
ly.prototype = { add: function (e) { var t = this._names.indexOf(e); t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" "))); }, remove: function (e) { var t = this._names.indexOf(e); t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" "))); }, contains: function (e) { return this._names.indexOf(e) >= 0; } };
function uy(e, t) { for (var n = ad(e), r = -1, o = t.length; ++r < o;)
    n.add(t[r]); }
function cy(e, t) { for (var n = ad(e), r = -1, o = t.length; ++r < o;)
    n.remove(t[r]); }
function xb(e) { return function () { uy(this, e); }; }
function Sb(e) { return function () { cy(this, e); }; }
function bb(e, t) { return function () { (t.apply(this, arguments) ? uy : cy)(this, e); }; }
function kb(e, t) { var n = sy(e + ""); if (arguments.length < 2) {
    for (var r = ad(this.node()), o = -1, i = n.length; ++o < i;)
        if (!r.contains(n[o]))
            return !1;
    return !0;
} return this.each((typeof t == "function" ? bb : t ? xb : Sb)(n, t)); }
function Eb() { this.textContent = ""; }
function Nb(e) { return function () { this.textContent = e; }; }
function _b(e) { return function () { var t = e.apply(this, arguments); this.textContent = t ?? ""; }; }
function Cb(e) { return arguments.length ? this.each(e == null ? Eb : (typeof e == "function" ? _b : Nb)(e)) : this.node().textContent; }
function Tb() { this.innerHTML = ""; }
function Mb(e) { return function () { this.innerHTML = e; }; }
function Pb(e) { return function () { var t = e.apply(this, arguments); this.innerHTML = t ?? ""; }; }
function zb(e) { return arguments.length ? this.each(e == null ? Tb : (typeof e == "function" ? Pb : Mb)(e)) : this.node().innerHTML; }
function Ab() { this.nextSibling && this.parentNode.appendChild(this); }
function Ib() { return this.each(Ab); }
function Ob() { this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild); }
function $b() { return this.each(Ob); }
function Lb(e) { var t = typeof e == "function" ? e : ty(e); return this.select(function () { return this.appendChild(t.apply(this, arguments)); }); }
function Rb() { return null; }
function Db(e, t) { var n = typeof e == "function" ? e : ty(e), r = t == null ? Rb : typeof t == "function" ? t : id(t); return this.select(function () { return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null); }); }
function jb() { var e = this.parentNode; e && e.removeChild(this); }
function Fb() { return this.each(jb); }
function Vb() { var e = this.cloneNode(!1), t = this.parentNode; return t ? t.insertBefore(e, this.nextSibling) : e; }
function Hb() { var e = this.cloneNode(!0), t = this.parentNode; return t ? t.insertBefore(e, this.nextSibling) : e; }
function Bb(e) { return this.select(e ? Hb : Vb); }
function Ub(e) { return arguments.length ? this.property("__data__", e) : this.node().__data__; }
function qb(e) { return function (t) { e.call(this, t, this.__data__); }; }
function Wb(e) { return e.trim().split(/^|\s+/).map(function (t) { var n = "", r = t.indexOf("."); return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n }; }); }
function Yb(e) { return function () { var t = this.__on; if (t) {
    for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
    ++r ? t.length = r : delete this.__on;
} }; }
function Xb(e, t, n) { return function () { var r = this.__on, o, i = qb(t); if (r) {
    for (var a = 0, s = r.length; a < s; ++a)
        if ((o = r[a]).type === e.type && o.name === e.name) {
            this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = i, o.options = n), o.value = t;
            return;
        }
} this.addEventListener(e.type, i, n), o = { type: e.type, name: e.name, value: t, listener: i, options: n }, r ? r.push(o) : this.__on = [o]; }; }
function Qb(e, t, n) { var r = Wb(e + ""), o, i = r.length, a; if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
        for (var l = 0, u = s.length, c; l < u; ++l)
            for (o = 0, c = s[l]; o < i; ++o)
                if ((a = r[o]).type === c.type && a.name === c.name)
                    return c.value;
    }
    return;
} for (s = t ? Xb : Yb, o = 0; o < i; ++o)
    this.each(s(r[o], t, n)); return this; }
function fy(e, t, n) { var r = ay(e), o = r.CustomEvent; typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o); }
function Gb(e, t) { return function () { return fy(this, e, t); }; }
function Kb(e, t) { return function () { return fy(this, e, t.apply(this, arguments)); }; }
function Zb(e, t) { return this.each((typeof t == "function" ? Kb : Gb)(e, t)); }
function* Jb() { for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, a; o < i; ++o)
        (a = r[o]) && (yield a); }
var dy = [null];
function mt(e, t) { this._groups = e, this._parents = t; }
function ia() { return new mt([[document.documentElement]], dy); }
function ek() { return this; }
mt.prototype = ia.prototype = { constructor: mt, select: _S, selectAll: PS, selectChild: OS, selectChildren: DS, filter: jS, data: qS, enter: FS, exit: YS, join: XS, merge: QS, selection: ek, order: GS, sort: KS, call: JS, nodes: eb, node: tb, size: nb, empty: rb, each: ob, attr: fb, style: hb, property: wb, classed: kb, text: Cb, html: zb, raise: Ib, lower: $b, append: Lb, insert: Db, remove: Fb, clone: Bb, datum: Ub, on: Qb, dispatch: Zb, [Symbol.iterator]: Jb };
function Lt(e) { return typeof e == "string" ? new mt([[document.querySelector(e)]], [document.documentElement]) : new mt([[e]], dy); }
function tk(e) { let t; for (; t = e.sourceEvent;)
    e = t; return e; }
function Wt(e, t) { if (e = tk(e), t === void 0 && (t = e.currentTarget), t) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
        var r = n.createSVGPoint();
        return r.x = e.clientX, r.y = e.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (t.getBoundingClientRect) {
        var o = t.getBoundingClientRect();
        return [e.clientX - o.left - t.clientLeft, e.clientY - o.top - t.clientTop];
    }
} return [e.pageX, e.pageY]; }
const nk = { passive: !1 }, Fi = { capture: !0, passive: !1 };
function gu(e) { e.stopImmediatePropagation(); }
function co(e) { e.preventDefault(), e.stopImmediatePropagation(); }
function my(e) { var t = e.document.documentElement, n = Lt(e).on("dragstart.drag", co, Fi); "onselectstart" in t ? n.on("selectstart.drag", co, Fi) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none"); }
function py(e, t) { var n = e.document.documentElement, r = Lt(e).on("dragstart.drag", null); t && (r.on("click.drag", co, Fi), setTimeout(function () { r.on("click.drag", null); }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect); }
const Aa = e => () => e;
function Cc(e, { sourceEvent: t, subject: n, target: r, identifier: o, active: i, x: a, y: s, dx: l, dy: u, dispatch: c }) { Object.defineProperties(this, { type: { value: e, enumerable: !0, configurable: !0 }, sourceEvent: { value: t, enumerable: !0, configurable: !0 }, subject: { value: n, enumerable: !0, configurable: !0 }, target: { value: r, enumerable: !0, configurable: !0 }, identifier: { value: o, enumerable: !0, configurable: !0 }, active: { value: i, enumerable: !0, configurable: !0 }, x: { value: a, enumerable: !0, configurable: !0 }, y: { value: s, enumerable: !0, configurable: !0 }, dx: { value: l, enumerable: !0, configurable: !0 }, dy: { value: u, enumerable: !0, configurable: !0 }, _: { value: c } }); }
Cc.prototype.on = function () { var e = this._.on.apply(this._, arguments); return e === this._ ? this : e; };
function rk(e) { return !e.ctrlKey && !e.button; }
function ok() { return this.parentNode; }
function ik(e, t) { return t ?? { x: e.x, y: e.y }; }
function ak() { return navigator.maxTouchPoints || "ontouchstart" in this; }
function sk() { var e = rk, t = ok, n = ik, r = ak, o = {}, i = xl("start", "drag", "end"), a = 0, s, l, u, c, f = 0; function d(w) { w.on("mousedown.drag", p).filter(r).on("touchstart.drag", x).on("touchmove.drag", m, nk).on("touchend.drag touchcancel.drag", h).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)"); } function p(w, S) { if (!(c || !e.call(this, w, S))) {
    var N = v(this, t.call(this, w, S), w, S, "mouse");
    N && (Lt(w.view).on("mousemove.drag", g, Fi).on("mouseup.drag", y, Fi), my(w.view), gu(w), u = !1, s = w.clientX, l = w.clientY, N("start", w));
} } function g(w) { if (co(w), !u) {
    var S = w.clientX - s, N = w.clientY - l;
    u = S * S + N * N > f;
} o.mouse("drag", w); } function y(w) { Lt(w.view).on("mousemove.drag mouseup.drag", null), py(w.view, u), co(w), o.mouse("end", w); } function x(w, S) { if (e.call(this, w, S)) {
    var N = w.changedTouches, C = t.call(this, w, S), M = N.length, O, R;
    for (O = 0; O < M; ++O)
        (R = v(this, C, w, S, N[O].identifier, N[O])) && (gu(w), R("start", w, N[O]));
} } function m(w) { var S = w.changedTouches, N = S.length, C, M; for (C = 0; C < N; ++C)
    (M = o[S[C].identifier]) && (co(w), M("drag", w, S[C])); } function h(w) { var S = w.changedTouches, N = S.length, C, M; for (c && clearTimeout(c), c = setTimeout(function () { c = null; }, 500), C = 0; C < N; ++C)
    (M = o[S[C].identifier]) && (gu(w), M("end", w, S[C])); } function v(w, S, N, C, M, O) { var R = i.copy(), D = Wt(O || N, S), V, L, E; if ((E = n.call(w, new Cc("beforestart", { sourceEvent: N, target: d, identifier: M, active: a, x: D[0], y: D[1], dx: 0, dy: 0, dispatch: R }), C)) != null)
    return V = E.x - D[0] || 0, L = E.y - D[1] || 0, function $(z, P, _) { var A = D, I; switch (z) {
        case "start":
            o[M] = $, I = a++;
            break;
        case "end": delete o[M], --a;
        case "drag":
            D = Wt(_ || P, S), I = a;
            break;
    } R.call(z, w, new Cc(z, { sourceEvent: P, subject: E, target: d, identifier: M, active: I, x: D[0] + V, y: D[1] + L, dx: D[0] - A[0], dy: D[1] - A[1], dispatch: R }), C); }; } return d.filter = function (w) { return arguments.length ? (e = typeof w == "function" ? w : Aa(!!w), d) : e; }, d.container = function (w) { return arguments.length ? (t = typeof w == "function" ? w : Aa(w), d) : t; }, d.subject = function (w) { return arguments.length ? (n = typeof w == "function" ? w : Aa(w), d) : n; }, d.touchable = function (w) { return arguments.length ? (r = typeof w == "function" ? w : Aa(!!w), d) : r; }, d.on = function () { var w = i.on.apply(i, arguments); return w === i ? d : w; }, d.clickDistance = function (w) { return arguments.length ? (f = (w = +w) * w, d) : Math.sqrt(f); }, d; }
function sd(e, t, n) { e.prototype = t.prototype = n, n.constructor = e; }
function hy(e, t) { var n = Object.create(e.prototype); for (var r in t)
    n[r] = t[r]; return n; }
function aa() { }
var Vi = .7, Bs = 1 / Vi, fo = "\\s*([+-]?\\d+)\\s*", Hi = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Zt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", lk = /^#([0-9a-f]{3,8})$/, uk = new RegExp(`^rgb\\(${fo},${fo},${fo}\\)$`), ck = new RegExp(`^rgb\\(${Zt},${Zt},${Zt}\\)$`), fk = new RegExp(`^rgba\\(${fo},${fo},${fo},${Hi}\\)$`), dk = new RegExp(`^rgba\\(${Zt},${Zt},${Zt},${Hi}\\)$`), mk = new RegExp(`^hsl\\(${Hi},${Zt},${Zt}\\)$`), pk = new RegExp(`^hsla\\(${Hi},${Zt},${Zt},${Hi}\\)$`), gp = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
sd(aa, Bi, { copy(e) { return Object.assign(new this.constructor, this, e); }, displayable() { return this.rgb().displayable(); }, hex: yp, formatHex: yp, formatHex8: hk, formatHsl: gk, formatRgb: vp, toString: vp });
function yp() { return this.rgb().formatHex(); }
function hk() { return this.rgb().formatHex8(); }
function gk() { return gy(this).formatHsl(); }
function vp() { return this.rgb().formatRgb(); }
function Bi(e) { var t, n; return e = (e + "").trim().toLowerCase(), (t = lk.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? wp(t) : n === 3 ? new ot(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Ia(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Ia(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = uk.exec(e)) ? new ot(t[1], t[2], t[3], 1) : (t = ck.exec(e)) ? new ot(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = fk.exec(e)) ? Ia(t[1], t[2], t[3], t[4]) : (t = dk.exec(e)) ? Ia(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = mk.exec(e)) ? bp(t[1], t[2] / 100, t[3] / 100, 1) : (t = pk.exec(e)) ? bp(t[1], t[2] / 100, t[3] / 100, t[4]) : gp.hasOwnProperty(e) ? wp(gp[e]) : e === "transparent" ? new ot(NaN, NaN, NaN, 0) : null; }
function wp(e) { return new ot(e >> 16 & 255, e >> 8 & 255, e & 255, 1); }
function Ia(e, t, n, r) { return r <= 0 && (e = t = n = NaN), new ot(e, t, n, r); }
function yk(e) { return e instanceof aa || (e = Bi(e)), e ? (e = e.rgb(), new ot(e.r, e.g, e.b, e.opacity)) : new ot; }
function Tc(e, t, n, r) { return arguments.length === 1 ? yk(e) : new ot(e, t, n, r ?? 1); }
function ot(e, t, n, r) { this.r = +e, this.g = +t, this.b = +n, this.opacity = +r; }
sd(ot, Tc, hy(aa, { brighter(e) { return e = e == null ? Bs : Math.pow(Bs, e), new ot(this.r * e, this.g * e, this.b * e, this.opacity); }, darker(e) { return e = e == null ? Vi : Math.pow(Vi, e), new ot(this.r * e, this.g * e, this.b * e, this.opacity); }, rgb() { return this; }, clamp() { return new ot(br(this.r), br(this.g), br(this.b), Us(this.opacity)); }, displayable() { return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1; }, hex: xp, formatHex: xp, formatHex8: vk, formatRgb: Sp, toString: Sp }));
function xp() { return `#${gr(this.r)}${gr(this.g)}${gr(this.b)}`; }
function vk() { return `#${gr(this.r)}${gr(this.g)}${gr(this.b)}${gr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`; }
function Sp() { const e = Us(this.opacity); return `${e === 1 ? "rgb(" : "rgba("}${br(this.r)}, ${br(this.g)}, ${br(this.b)}${e === 1 ? ")" : `, ${e})`}`; }
function Us(e) { return isNaN(e) ? 1 : Math.max(0, Math.min(1, e)); }
function br(e) { return Math.max(0, Math.min(255, Math.round(e) || 0)); }
function gr(e) { return e = br(e), (e < 16 ? "0" : "") + e.toString(16); }
function bp(e, t, n, r) { return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Rt(e, t, n, r); }
function gy(e) { if (e instanceof Rt)
    return new Rt(e.h, e.s, e.l, e.opacity); if (e instanceof aa || (e = Bi(e)), !e)
    return new Rt; if (e instanceof Rt)
    return e; e = e.rgb(); var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), a = NaN, s = i - o, l = (i + o) / 2; return s ? (t === i ? a = (n - r) / s + (n < r) * 6 : n === i ? a = (r - t) / s + 2 : a = (t - n) / s + 4, s /= l < .5 ? i + o : 2 - i - o, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new Rt(a, s, l, e.opacity); }
function wk(e, t, n, r) { return arguments.length === 1 ? gy(e) : new Rt(e, t, n, r ?? 1); }
function Rt(e, t, n, r) { this.h = +e, this.s = +t, this.l = +n, this.opacity = +r; }
sd(Rt, wk, hy(aa, { brighter(e) { return e = e == null ? Bs : Math.pow(Bs, e), new Rt(this.h, this.s, this.l * e, this.opacity); }, darker(e) { return e = e == null ? Vi : Math.pow(Vi, e), new Rt(this.h, this.s, this.l * e, this.opacity); }, rgb() { var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < .5 ? n : 1 - n) * t, o = 2 * n - r; return new ot(yu(e >= 240 ? e - 240 : e + 120, o, r), yu(e, o, r), yu(e < 120 ? e + 240 : e - 120, o, r), this.opacity); }, clamp() { return new Rt(kp(this.h), Oa(this.s), Oa(this.l), Us(this.opacity)); }, displayable() { return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1; }, formatHsl() { const e = Us(this.opacity); return `${e === 1 ? "hsl(" : "hsla("}${kp(this.h)}, ${Oa(this.s) * 100}%, ${Oa(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`; } }));
function kp(e) { return e = (e || 0) % 360, e < 0 ? e + 360 : e; }
function Oa(e) { return Math.max(0, Math.min(1, e || 0)); }
function yu(e, t, n) { return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255; }
const yy = e => () => e;
function xk(e, t) { return function (n) { return e + n * t; }; }
function Sk(e, t, n) { return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function (r) { return Math.pow(e + r * t, n); }; }
function bk(e) { return (e = +e) == 1 ? vy : function (t, n) { return n - t ? Sk(t, n, e) : yy(isNaN(t) ? n : t); }; }
function vy(e, t) { var n = t - e; return n ? xk(e, n) : yy(isNaN(e) ? t : e); }
const Ep = function e(t) { var n = bk(t); function r(o, i) { var a = n((o = Tc(o)).r, (i = Tc(i)).r), s = n(o.g, i.g), l = n(o.b, i.b), u = vy(o.opacity, i.opacity); return function (c) { return o.r = a(c), o.g = s(c), o.b = l(c), o.opacity = u(c), o + ""; }; } return r.gamma = e, r; }(1);
function Mn(e, t) { return e = +e, t = +t, function (n) { return e * (1 - n) + t * n; }; }
var Mc = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, vu = new RegExp(Mc.source, "g");
function kk(e) { return function () { return e; }; }
function Ek(e) { return function (t) { return e(t) + ""; }; }
function Nk(e, t) { var n = Mc.lastIndex = vu.lastIndex = 0, r, o, i, a = -1, s = [], l = []; for (e = e + "", t = t + ""; (r = Mc.exec(e)) && (o = vu.exec(t));)
    (i = o.index) > n && (i = t.slice(n, i), s[a] ? s[a] += i : s[++a] = i), (r = r[0]) === (o = o[0]) ? s[a] ? s[a] += o : s[++a] = o : (s[++a] = null, l.push({ i: a, x: Mn(r, o) })), n = vu.lastIndex; return n < t.length && (i = t.slice(n), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? l[0] ? Ek(l[0].x) : kk(t) : (t = l.length, function (u) { for (var c = 0, f; c < t; ++c)
    s[(f = l[c]).i] = f.x(u); return s.join(""); }); }
var Np = 180 / Math.PI, Pc = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
function wy(e, t, n, r, o, i) { var a, s, l; return (a = Math.sqrt(e * e + t * t)) && (e /= a, t /= a), (l = e * n + t * r) && (n -= e * l, r -= t * l), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, l /= s), e * r < t * n && (e = -e, t = -t, l = -l, a = -a), { translateX: o, translateY: i, rotate: Math.atan2(t, e) * Np, skewX: Math.atan(l) * Np, scaleX: a, scaleY: s }; }
var $a;
function _k(e) { const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + ""); return t.isIdentity ? Pc : wy(t.a, t.b, t.c, t.d, t.e, t.f); }
function Ck(e) { return e == null || ($a || ($a = document.createElementNS("http://www.w3.org/2000/svg", "g")), $a.setAttribute("transform", e), !(e = $a.transform.baseVal.consolidate())) ? Pc : (e = e.matrix, wy(e.a, e.b, e.c, e.d, e.e, e.f)); }
function xy(e, t, n, r) { function o(u) { return u.length ? u.pop() + " " : ""; } function i(u, c, f, d, p, g) { if (u !== f || c !== d) {
    var y = p.push("translate(", null, t, null, n);
    g.push({ i: y - 4, x: Mn(u, f) }, { i: y - 2, x: Mn(c, d) });
}
else
    (f || d) && p.push("translate(" + f + t + d + n); } function a(u, c, f, d) { u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), d.push({ i: f.push(o(f) + "rotate(", null, r) - 2, x: Mn(u, c) })) : c && f.push(o(f) + "rotate(" + c + r); } function s(u, c, f, d) { u !== c ? d.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: Mn(u, c) }) : c && f.push(o(f) + "skewX(" + c + r); } function l(u, c, f, d, p, g) { if (u !== f || c !== d) {
    var y = p.push(o(p) + "scale(", null, ",", null, ")");
    g.push({ i: y - 4, x: Mn(u, f) }, { i: y - 2, x: Mn(c, d) });
}
else
    (f !== 1 || d !== 1) && p.push(o(p) + "scale(" + f + "," + d + ")"); } return function (u, c) { var f = [], d = []; return u = e(u), c = e(c), i(u.translateX, u.translateY, c.translateX, c.translateY, f, d), a(u.rotate, c.rotate, f, d), s(u.skewX, c.skewX, f, d), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, f, d), u = c = null, function (p) { for (var g = -1, y = d.length, x; ++g < y;)
    f[(x = d[g]).i] = x.x(p); return f.join(""); }; }; }
var Tk = xy(_k, "px, ", "px)", "deg)"), Mk = xy(Ck, ", ", ")", ")"), Pk = 1e-12;
function _p(e) { return ((e = Math.exp(e)) + 1 / e) / 2; }
function zk(e) { return ((e = Math.exp(e)) - 1 / e) / 2; }
function Ak(e) { return ((e = Math.exp(2 * e)) - 1) / (e + 1); }
const Ik = function e(t, n, r) { function o(i, a) { var s = i[0], l = i[1], u = i[2], c = a[0], f = a[1], d = a[2], p = c - s, g = f - l, y = p * p + g * g, x, m; if (y < Pk)
    m = Math.log(d / u) / t, x = function (C) { return [s + C * p, l + C * g, u * Math.exp(t * C * m)]; };
else {
    var h = Math.sqrt(y), v = (d * d - u * u + r * y) / (2 * u * n * h), w = (d * d - u * u - r * y) / (2 * d * n * h), S = Math.log(Math.sqrt(v * v + 1) - v), N = Math.log(Math.sqrt(w * w + 1) - w);
    m = (N - S) / t, x = function (C) { var M = C * m, O = _p(S), R = u / (n * h) * (O * Ak(t * M + S) - zk(S)); return [s + R * p, l + R * g, u * O / _p(t * M + S)]; };
} return x.duration = m * 1e3 * t / Math.SQRT2, x; } return o.rho = function (i) { var a = Math.max(.001, +i), s = a * a, l = s * s; return e(a, s, l); }, o; }(Math.SQRT2, 2, 4);
var Co = 0, li = 0, Jo = 0, Sy = 1e3, qs, ui, Ws = 0, Tr = 0, bl = 0, Ui = typeof performance == "object" && performance.now ? performance : Date, by = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (e) { setTimeout(e, 17); };
function ld() { return Tr || (by(Ok), Tr = Ui.now() + bl); }
function Ok() { Tr = 0; }
function Ys() { this._call = this._time = this._next = null; }
Ys.prototype = ky.prototype = { constructor: Ys, restart: function (e, t, n) { if (typeof e != "function")
        throw new TypeError("callback is not a function"); n = (n == null ? ld() : +n) + (t == null ? 0 : +t), !this._next && ui !== this && (ui ? ui._next = this : qs = this, ui = this), this._call = e, this._time = n, zc(); }, stop: function () { this._call && (this._call = null, this._time = 1 / 0, zc()); } };
function ky(e, t, n) { var r = new Ys; return r.restart(e, t, n), r; }
function $k() { ld(), ++Co; for (var e = qs, t; e;)
    (t = Tr - e._time) >= 0 && e._call.call(void 0, t), e = e._next; --Co; }
function Cp() { Tr = (Ws = Ui.now()) + bl, Co = li = 0; try {
    $k();
}
finally {
    Co = 0, Rk(), Tr = 0;
} }
function Lk() { var e = Ui.now(), t = e - Ws; t > Sy && (bl -= t, Ws = e); }
function Rk() { for (var e, t = qs, n, r = 1 / 0; t;)
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : qs = n); ui = e, zc(r); }
function zc(e) { if (!Co) {
    li && (li = clearTimeout(li));
    var t = e - Tr;
    t > 24 ? (e < 1 / 0 && (li = setTimeout(Cp, e - Ui.now() - bl)), Jo && (Jo = clearInterval(Jo))) : (Jo || (Ws = Ui.now(), Jo = setInterval(Lk, Sy)), Co = 1, by(Cp));
} }
function Tp(e, t, n) { var r = new Ys; return t = t == null ? 0 : +t, r.restart(o => { r.stop(), e(o + t); }, t, n), r; }
var Dk = xl("start", "end", "cancel", "interrupt"), jk = [], Ey = 0, Mp = 1, Ac = 2, fs = 3, Pp = 4, Ic = 5, ds = 6;
function kl(e, t, n, r, o, i) { var a = e.__transition; if (!a)
    e.__transition = {};
else if (n in a)
    return; Fk(e, n, { name: t, index: r, group: o, on: Dk, tween: jk, time: i.time, delay: i.delay, duration: i.duration, ease: i.ease, timer: null, state: Ey }); }
function ud(e, t) { var n = Ht(e, t); if (n.state > Ey)
    throw new Error("too late; already scheduled"); return n; }
function Jt(e, t) { var n = Ht(e, t); if (n.state > fs)
    throw new Error("too late; already running"); return n; }
function Ht(e, t) { var n = e.__transition; if (!n || !(n = n[t]))
    throw new Error("transition not found"); return n; }
function Fk(e, t, n) { var r = e.__transition, o; r[t] = n, n.timer = ky(i, 0, n.time); function i(u) { n.state = Mp, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay); } function a(u) { var c, f, d, p; if (n.state !== Mp)
    return l(); for (c in r)
    if (p = r[c], p.name === n.name) {
        if (p.state === fs)
            return Tp(a);
        p.state === Pp ? (p.state = ds, p.timer.stop(), p.on.call("interrupt", e, e.__data__, p.index, p.group), delete r[c]) : +c < t && (p.state = ds, p.timer.stop(), p.on.call("cancel", e, e.__data__, p.index, p.group), delete r[c]);
    } if (Tp(function () { n.state === fs && (n.state = Pp, n.timer.restart(s, n.delay, n.time), s(u)); }), n.state = Ac, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ac) {
    for (n.state = fs, o = new Array(d = n.tween.length), c = 0, f = -1; c < d; ++c)
        (p = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = p);
    o.length = f + 1;
} } function s(u) { for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Ic, 1), f = -1, d = o.length; ++f < d;)
    o[f].call(e, c); n.state === Ic && (n.on.call("end", e, e.__data__, n.index, n.group), l()); } function l() { n.state = ds, n.timer.stop(), delete r[t]; for (var u in r)
    return; delete e.__transition; } }
function ms(e, t) { var n = e.__transition, r, o, i = !0, a; if (n) {
    t = t == null ? null : t + "";
    for (a in n) {
        if ((r = n[a]).name !== t) {
            i = !1;
            continue;
        }
        o = r.state > Ac && r.state < Ic, r.state = ds, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[a];
    }
    i && delete e.__transition;
} }
function Vk(e) { return this.each(function () { ms(this, e); }); }
function Hk(e, t) { var n, r; return function () { var o = Jt(this, e), i = o.tween; if (i !== n) {
    r = n = i;
    for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === t) {
            r = r.slice(), r.splice(a, 1);
            break;
        }
} o.tween = r; }; }
function Bk(e, t, n) { var r, o; if (typeof n != "function")
    throw new Error; return function () { var i = Jt(this, e), a = i.tween; if (a !== r) {
    o = (r = a).slice();
    for (var s = { name: t, value: n }, l = 0, u = o.length; l < u; ++l)
        if (o[l].name === t) {
            o[l] = s;
            break;
        }
    l === u && o.push(s);
} i.tween = o; }; }
function Uk(e, t) { var n = this._id; if (e += "", arguments.length < 2) {
    for (var r = Ht(this.node(), n).tween, o = 0, i = r.length, a; o < i; ++o)
        if ((a = r[o]).name === e)
            return a.value;
    return null;
} return this.each((t == null ? Hk : Bk)(n, e, t)); }
function cd(e, t, n) { var r = e._id; return e.each(function () { var o = Jt(this, r); (o.value || (o.value = {}))[t] = n.apply(this, arguments); }), function (o) { return Ht(o, r).value[t]; }; }
function Ny(e, t) { var n; return (typeof t == "number" ? Mn : t instanceof Bi ? Ep : (n = Bi(t)) ? (t = n, Ep) : Nk)(e, t); }
function qk(e) { return function () { this.removeAttribute(e); }; }
function Wk(e) { return function () { this.removeAttributeNS(e.space, e.local); }; }
function Yk(e, t, n) { var r, o = n + "", i; return function () { var a = this.getAttribute(e); return a === o ? null : a === r ? i : i = t(r = a, n); }; }
function Xk(e, t, n) { var r, o = n + "", i; return function () { var a = this.getAttributeNS(e.space, e.local); return a === o ? null : a === r ? i : i = t(r = a, n); }; }
function Qk(e, t, n) { var r, o, i; return function () { var a, s = n(this), l; return s == null ? void this.removeAttribute(e) : (a = this.getAttribute(e), l = s + "", a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s))); }; }
function Gk(e, t, n) { var r, o, i; return function () { var a, s = n(this), l; return s == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), l = s + "", a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s))); }; }
function Kk(e, t) { var n = Sl(e), r = n === "transform" ? Mk : Ny; return this.attrTween(e, typeof t == "function" ? (n.local ? Gk : Qk)(n, r, cd(this, "attr." + e, t)) : t == null ? (n.local ? Wk : qk)(n) : (n.local ? Xk : Yk)(n, r, t)); }
function Zk(e, t) { return function (n) { this.setAttribute(e, t.call(this, n)); }; }
function Jk(e, t) { return function (n) { this.setAttributeNS(e.space, e.local, t.call(this, n)); }; }
function e3(e, t) { var n, r; function o() { var i = t.apply(this, arguments); return i !== r && (n = (r = i) && Jk(e, i)), n; } return o._value = t, o; }
function t3(e, t) { var n, r; function o() { var i = t.apply(this, arguments); return i !== r && (n = (r = i) && Zk(e, i)), n; } return o._value = t, o; }
function n3(e, t) { var n = "attr." + e; if (arguments.length < 2)
    return (n = this.tween(n)) && n._value; if (t == null)
    return this.tween(n, null); if (typeof t != "function")
    throw new Error; var r = Sl(e); return this.tween(n, (r.local ? e3 : t3)(r, t)); }
function r3(e, t) { return function () { ud(this, e).delay = +t.apply(this, arguments); }; }
function o3(e, t) { return t = +t, function () { ud(this, e).delay = t; }; }
function i3(e) { var t = this._id; return arguments.length ? this.each((typeof e == "function" ? r3 : o3)(t, e)) : Ht(this.node(), t).delay; }
function a3(e, t) { return function () { Jt(this, e).duration = +t.apply(this, arguments); }; }
function s3(e, t) { return t = +t, function () { Jt(this, e).duration = t; }; }
function l3(e) { var t = this._id; return arguments.length ? this.each((typeof e == "function" ? a3 : s3)(t, e)) : Ht(this.node(), t).duration; }
function u3(e, t) { if (typeof t != "function")
    throw new Error; return function () { Jt(this, e).ease = t; }; }
function c3(e) { var t = this._id; return arguments.length ? this.each(u3(t, e)) : Ht(this.node(), t).ease; }
function f3(e, t) { return function () { var n = t.apply(this, arguments); if (typeof n != "function")
    throw new Error; Jt(this, e).ease = n; }; }
function d3(e) { if (typeof e != "function")
    throw new Error; return this.each(f3(this._id, e)); }
function m3(e) { typeof e != "function" && (e = ry(e)); for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
        (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l); return new hn(r, this._parents, this._name, this._id); }
function p3(e) { if (e._id !== this._id)
    throw new Error; for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), a = new Array(r), s = 0; s < i; ++s)
    for (var l = t[s], u = n[s], c = l.length, f = a[s] = new Array(c), d, p = 0; p < c; ++p)
        (d = l[p] || u[p]) && (f[p] = d); for (; s < r; ++s)
    a[s] = t[s]; return new hn(a, this._parents, this._name, this._id); }
function h3(e) { return (e + "").trim().split(/^|\s+/).every(function (t) { var n = t.indexOf("."); return n >= 0 && (t = t.slice(0, n)), !t || t === "start"; }); }
function g3(e, t, n) { var r, o, i = h3(t) ? ud : Jt; return function () { var a = i(this, e), s = a.on; s !== r && (o = (r = s).copy()).on(t, n), a.on = o; }; }
function y3(e, t) { var n = this._id; return arguments.length < 2 ? Ht(this.node(), n).on.on(e) : this.each(g3(n, e, t)); }
function v3(e) { return function () { var t = this.parentNode; for (var n in this.__transition)
    if (+n !== e)
        return; t && t.removeChild(this); }; }
function w3() { return this.on("end.remove", v3(this._id)); }
function x3(e) { var t = this._name, n = this._id; typeof e != "function" && (e = id(e)); for (var r = this._groups, o = r.length, i = new Array(o), a = 0; a < o; ++a)
    for (var s = r[a], l = s.length, u = i[a] = new Array(l), c, f, d = 0; d < l; ++d)
        (c = s[d]) && (f = e.call(c, c.__data__, d, s)) && ("__data__" in c && (f.__data__ = c.__data__), u[d] = f, kl(u[d], t, n, d, u, Ht(c, n))); return new hn(i, this._parents, t, n); }
function S3(e) { var t = this._name, n = this._id; typeof e != "function" && (e = ny(e)); for (var r = this._groups, o = r.length, i = [], a = [], s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, c, f = 0; f < u; ++f)
        if (c = l[f]) {
            for (var d = e.call(c, c.__data__, f, l), p, g = Ht(c, n), y = 0, x = d.length; y < x; ++y)
                (p = d[y]) && kl(p, t, n, y, d, g);
            i.push(d), a.push(c);
        } return new hn(i, a, t, n); }
var b3 = ia.prototype.constructor;
function k3() { return new b3(this._groups, this._parents); }
function E3(e, t) { var n, r, o; return function () { var i = _o(this, e), a = (this.style.removeProperty(e), _o(this, e)); return i === a ? null : i === n && a === r ? o : o = t(n = i, r = a); }; }
function _y(e) { return function () { this.style.removeProperty(e); }; }
function N3(e, t, n) { var r, o = n + "", i; return function () { var a = _o(this, e); return a === o ? null : a === r ? i : i = t(r = a, n); }; }
function _3(e, t, n) { var r, o, i; return function () { var a = _o(this, e), s = n(this), l = s + ""; return s == null && (l = s = (this.style.removeProperty(e), _o(this, e))), a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s)); }; }
function C3(e, t) { var n, r, o, i = "style." + t, a = "end." + i, s; return function () { var l = Jt(this, e), u = l.on, c = l.value[i] == null ? s || (s = _y(t)) : void 0; (u !== n || o !== c) && (r = (n = u).copy()).on(a, o = c), l.on = r; }; }
function T3(e, t, n) { var r = (e += "") == "transform" ? Tk : Ny; return t == null ? this.styleTween(e, E3(e, r)).on("end.style." + e, _y(e)) : typeof t == "function" ? this.styleTween(e, _3(e, r, cd(this, "style." + e, t))).each(C3(this._id, e)) : this.styleTween(e, N3(e, r, t), n).on("end.style." + e, null); }
function M3(e, t, n) { return function (r) { this.style.setProperty(e, t.call(this, r), n); }; }
function P3(e, t, n) { var r, o; function i() { var a = t.apply(this, arguments); return a !== o && (r = (o = a) && M3(e, a, n)), r; } return i._value = t, i; }
function z3(e, t, n) { var r = "style." + (e += ""); if (arguments.length < 2)
    return (r = this.tween(r)) && r._value; if (t == null)
    return this.tween(r, null); if (typeof t != "function")
    throw new Error; return this.tween(r, P3(e, t, n ?? "")); }
function A3(e) { return function () { this.textContent = e; }; }
function I3(e) { return function () { var t = e(this); this.textContent = t ?? ""; }; }
function O3(e) { return this.tween("text", typeof e == "function" ? I3(cd(this, "text", e)) : A3(e == null ? "" : e + "")); }
function $3(e) { return function (t) { this.textContent = e.call(this, t); }; }
function L3(e) { var t, n; function r() { var o = e.apply(this, arguments); return o !== n && (t = (n = o) && $3(o)), t; } return r._value = e, r; }
function R3(e) { var t = "text"; if (arguments.length < 1)
    return (t = this.tween(t)) && t._value; if (e == null)
    return this.tween(t, null); if (typeof e != "function")
    throw new Error; return this.tween(t, L3(e)); }
function D3() { for (var e = this._name, t = this._id, n = Cy(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
        if (l = a[u]) {
            var c = Ht(l, t);
            kl(l, e, n, u, a, { time: c.time + c.delay + c.duration, delay: 0, duration: c.duration, ease: c.ease });
        } return new hn(r, this._parents, e, n); }
function j3() { var e, t, n = this, r = n._id, o = n.size(); return new Promise(function (i, a) { var s = { value: a }, l = { value: function () { --o === 0 && i(); } }; n.each(function () { var u = Jt(this, r), c = u.on; c !== e && (t = (e = c).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(l)), u.on = t; }), o === 0 && i(); }); }
var F3 = 0;
function hn(e, t, n, r) { this._groups = e, this._parents = t, this._name = n, this._id = r; }
function Cy() { return ++F3; }
var tn = ia.prototype;
hn.prototype = { constructor: hn, select: x3, selectAll: S3, selectChild: tn.selectChild, selectChildren: tn.selectChildren, filter: m3, merge: p3, selection: k3, transition: D3, call: tn.call, nodes: tn.nodes, node: tn.node, size: tn.size, empty: tn.empty, each: tn.each, on: y3, attr: Kk, attrTween: n3, style: T3, styleTween: z3, text: O3, textTween: R3, remove: w3, tween: Uk, delay: i3, duration: l3, ease: c3, easeVarying: d3, end: j3, [Symbol.iterator]: tn[Symbol.iterator] };
function V3(e) { return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2; }
var H3 = { time: null, delay: 0, duration: 250, ease: V3 };
function B3(e, t) { for (var n; !(n = e.__transition) || !(n = n[t]);)
    if (!(e = e.parentNode))
        throw new Error(`transition ${t} not found`); return n; }
function U3(e) { var t, n; e instanceof hn ? (t = e._id, e = e._name) : (t = Cy(), (n = H3).time = ld(), e = e == null ? null : e + ""); for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
        (l = a[u]) && kl(l, e, t, u, a, n || B3(l, t)); return new hn(r, this._parents, e, t); }
ia.prototype.interrupt = Vk;
ia.prototype.transition = U3;
const La = e => () => e;
function q3(e, { sourceEvent: t, target: n, transform: r, dispatch: o }) { Object.defineProperties(this, { type: { value: e, enumerable: !0, configurable: !0 }, sourceEvent: { value: t, enumerable: !0, configurable: !0 }, target: { value: n, enumerable: !0, configurable: !0 }, transform: { value: r, enumerable: !0, configurable: !0 }, _: { value: o } }); }
function sn(e, t, n) { this.k = e, this.x = t, this.y = n; }
sn.prototype = { constructor: sn, scale: function (e) { return e === 1 ? this : new sn(this.k * e, this.x, this.y); }, translate: function (e, t) { return e === 0 & t === 0 ? this : new sn(this.k, this.x + this.k * e, this.y + this.k * t); }, apply: function (e) { return [e[0] * this.k + this.x, e[1] * this.k + this.y]; }, applyX: function (e) { return e * this.k + this.x; }, applyY: function (e) { return e * this.k + this.y; }, invert: function (e) { return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k]; }, invertX: function (e) { return (e - this.x) / this.k; }, invertY: function (e) { return (e - this.y) / this.k; }, rescaleX: function (e) { return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e)); }, rescaleY: function (e) { return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e)); }, toString: function () { return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"; } };
var qn = new sn(1, 0, 0);
sn.prototype;
function wu(e) { e.stopImmediatePropagation(); }
function ei(e) { e.preventDefault(), e.stopImmediatePropagation(); }
function W3(e) { return (!e.ctrlKey || e.type === "wheel") && !e.button; }
function Y3() { var e = this; return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]]; }
function zp() { return this.__zoom || qn; }
function X3(e) { return -e.deltaY * (e.deltaMode === 1 ? .05 : e.deltaMode ? 1 : .002) * (e.ctrlKey ? 10 : 1); }
function Q3() { return navigator.maxTouchPoints || "ontouchstart" in this; }
function G3(e, t, n) { var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], a = e.invertY(t[1][1]) - n[1][1]; return e.translate(o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o), a > i ? (i + a) / 2 : Math.min(0, i) || Math.max(0, a)); }
function K3() { var e = W3, t = Y3, n = G3, r = X3, o = Q3, i = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = Ik, u = xl("start", "zoom", "end"), c, f, d, p = 500, g = 150, y = 0, x = 10; function m(E) { E.property("__zoom", zp).on("wheel.zoom", M, { passive: !1 }).on("mousedown.zoom", O).on("dblclick.zoom", R).filter(o).on("touchstart.zoom", D).on("touchmove.zoom", V).on("touchend.zoom touchcancel.zoom", L).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)"); } m.transform = function (E, $, z, P) { var _ = E.selection ? E.selection() : E; _.property("__zoom", zp), E !== _ ? S(E, $, z, P) : _.interrupt().each(function () { N(this, arguments).event(P).start().zoom(null, typeof $ == "function" ? $.apply(this, arguments) : $).end(); }); }, m.scaleBy = function (E, $, z, P) { m.scaleTo(E, function () { var _ = this.__zoom.k, A = typeof $ == "function" ? $.apply(this, arguments) : $; return _ * A; }, z, P); }, m.scaleTo = function (E, $, z, P) { m.transform(E, function () { var _ = t.apply(this, arguments), A = this.__zoom, I = z == null ? w(_) : typeof z == "function" ? z.apply(this, arguments) : z, F = A.invert(I), H = typeof $ == "function" ? $.apply(this, arguments) : $; return n(v(h(A, H), I, F), _, a); }, z, P); }, m.translateBy = function (E, $, z, P) { m.transform(E, function () { return n(this.__zoom.translate(typeof $ == "function" ? $.apply(this, arguments) : $, typeof z == "function" ? z.apply(this, arguments) : z), t.apply(this, arguments), a); }, null, P); }, m.translateTo = function (E, $, z, P, _) { m.transform(E, function () { var A = t.apply(this, arguments), I = this.__zoom, F = P == null ? w(A) : typeof P == "function" ? P.apply(this, arguments) : P; return n(qn.translate(F[0], F[1]).scale(I.k).translate(typeof $ == "function" ? -$.apply(this, arguments) : -$, typeof z == "function" ? -z.apply(this, arguments) : -z), A, a); }, P, _); }; function h(E, $) { return $ = Math.max(i[0], Math.min(i[1], $)), $ === E.k ? E : new sn($, E.x, E.y); } function v(E, $, z) { var P = $[0] - z[0] * E.k, _ = $[1] - z[1] * E.k; return P === E.x && _ === E.y ? E : new sn(E.k, P, _); } function w(E) { return [(+E[0][0] + +E[1][0]) / 2, (+E[0][1] + +E[1][1]) / 2]; } function S(E, $, z, P) { E.on("start.zoom", function () { N(this, arguments).event(P).start(); }).on("interrupt.zoom end.zoom", function () { N(this, arguments).event(P).end(); }).tween("zoom", function () { var _ = this, A = arguments, I = N(_, A).event(P), F = t.apply(_, A), H = z == null ? w(F) : typeof z == "function" ? z.apply(_, A) : z, X = Math.max(F[1][0] - F[0][0], F[1][1] - F[0][1]), Y = _.__zoom, ee = typeof $ == "function" ? $.apply(_, A) : $, Z = l(Y.invert(H).concat(X / Y.k), ee.invert(H).concat(X / ee.k)); return function (ne) { if (ne === 1)
    ne = ee;
else {
    var le = Z(ne), Ce = X / le[2];
    ne = new sn(Ce, H[0] - le[0] * Ce, H[1] - le[1] * Ce);
} I.zoom(null, ne); }; }); } function N(E, $, z) { return !z && E.__zooming || new C(E, $); } function C(E, $) { this.that = E, this.args = $, this.active = 0, this.sourceEvent = null, this.extent = t.apply(E, $), this.taps = 0; } C.prototype = { event: function (E) { return E && (this.sourceEvent = E), this; }, start: function () { return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this; }, zoom: function (E, $) { return this.mouse && E !== "mouse" && (this.mouse[1] = $.invert(this.mouse[0])), this.touch0 && E !== "touch" && (this.touch0[1] = $.invert(this.touch0[0])), this.touch1 && E !== "touch" && (this.touch1[1] = $.invert(this.touch1[0])), this.that.__zoom = $, this.emit("zoom"), this; }, end: function () { return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this; }, emit: function (E) { var $ = Lt(this.that).datum(); u.call(E, this.that, new q3(E, { sourceEvent: this.sourceEvent, target: m, type: E, transform: this.that.__zoom, dispatch: u }), $); } }; function M(E, ...$) { if (!e.apply(this, arguments))
    return; var z = N(this, $).event(E), P = this.__zoom, _ = Math.max(i[0], Math.min(i[1], P.k * Math.pow(2, r.apply(this, arguments)))), A = Wt(E); if (z.wheel)
    (z.mouse[0][0] !== A[0] || z.mouse[0][1] !== A[1]) && (z.mouse[1] = P.invert(z.mouse[0] = A)), clearTimeout(z.wheel);
else {
    if (P.k === _)
        return;
    z.mouse = [A, P.invert(A)], ms(this), z.start();
} ei(E), z.wheel = setTimeout(I, g), z.zoom("mouse", n(v(h(P, _), z.mouse[0], z.mouse[1]), z.extent, a)); function I() { z.wheel = null, z.end(); } } function O(E, ...$) { if (d || !e.apply(this, arguments))
    return; var z = E.currentTarget, P = N(this, $, !0).event(E), _ = Lt(E.view).on("mousemove.zoom", H, !0).on("mouseup.zoom", X, !0), A = Wt(E, z), I = E.clientX, F = E.clientY; my(E.view), wu(E), P.mouse = [A, this.__zoom.invert(A)], ms(this), P.start(); function H(Y) { if (ei(Y), !P.moved) {
    var ee = Y.clientX - I, Z = Y.clientY - F;
    P.moved = ee * ee + Z * Z > y;
} P.event(Y).zoom("mouse", n(v(P.that.__zoom, P.mouse[0] = Wt(Y, z), P.mouse[1]), P.extent, a)); } function X(Y) { _.on("mousemove.zoom mouseup.zoom", null), py(Y.view, P.moved), ei(Y), P.event(Y).end(); } } function R(E, ...$) { if (e.apply(this, arguments)) {
    var z = this.__zoom, P = Wt(E.changedTouches ? E.changedTouches[0] : E, this), _ = z.invert(P), A = z.k * (E.shiftKey ? .5 : 2), I = n(v(h(z, A), P, _), t.apply(this, $), a);
    ei(E), s > 0 ? Lt(this).transition().duration(s).call(S, I, P, E) : Lt(this).call(m.transform, I, P, E);
} } function D(E, ...$) { if (e.apply(this, arguments)) {
    var z = E.touches, P = z.length, _ = N(this, $, E.changedTouches.length === P).event(E), A, I, F, H;
    for (wu(E), I = 0; I < P; ++I)
        F = z[I], H = Wt(F, this), H = [H, this.__zoom.invert(H), F.identifier], _.touch0 ? !_.touch1 && _.touch0[2] !== H[2] && (_.touch1 = H, _.taps = 0) : (_.touch0 = H, A = !0, _.taps = 1 + !!c);
    c && (c = clearTimeout(c)), A && (_.taps < 2 && (f = H[0], c = setTimeout(function () { c = null; }, p)), ms(this), _.start());
} } function V(E, ...$) { if (this.__zooming) {
    var z = N(this, $).event(E), P = E.changedTouches, _ = P.length, A, I, F, H;
    for (ei(E), A = 0; A < _; ++A)
        I = P[A], F = Wt(I, this), z.touch0 && z.touch0[2] === I.identifier ? z.touch0[0] = F : z.touch1 && z.touch1[2] === I.identifier && (z.touch1[0] = F);
    if (I = z.that.__zoom, z.touch1) {
        var X = z.touch0[0], Y = z.touch0[1], ee = z.touch1[0], Z = z.touch1[1], ne = (ne = ee[0] - X[0]) * ne + (ne = ee[1] - X[1]) * ne, le = (le = Z[0] - Y[0]) * le + (le = Z[1] - Y[1]) * le;
        I = h(I, Math.sqrt(ne / le)), F = [(X[0] + ee[0]) / 2, (X[1] + ee[1]) / 2], H = [(Y[0] + Z[0]) / 2, (Y[1] + Z[1]) / 2];
    }
    else if (z.touch0)
        F = z.touch0[0], H = z.touch0[1];
    else
        return;
    z.zoom("touch", n(v(I, F, H), z.extent, a));
} } function L(E, ...$) { if (this.__zooming) {
    var z = N(this, $).event(E), P = E.changedTouches, _ = P.length, A, I;
    for (wu(E), d && clearTimeout(d), d = setTimeout(function () { d = null; }, p), A = 0; A < _; ++A)
        I = P[A], z.touch0 && z.touch0[2] === I.identifier ? delete z.touch0 : z.touch1 && z.touch1[2] === I.identifier && delete z.touch1;
    if (z.touch1 && !z.touch0 && (z.touch0 = z.touch1, delete z.touch1), z.touch0)
        z.touch0[1] = this.__zoom.invert(z.touch0[0]);
    else if (z.end(), z.taps === 2 && (I = Wt(I, this), Math.hypot(f[0] - I[0], f[1] - I[1]) < x)) {
        var F = Lt(this).on("dblclick.zoom");
        F && F.apply(this, arguments);
    }
} } return m.wheelDelta = function (E) { return arguments.length ? (r = typeof E == "function" ? E : La(+E), m) : r; }, m.filter = function (E) { return arguments.length ? (e = typeof E == "function" ? E : La(!!E), m) : e; }, m.touchable = function (E) { return arguments.length ? (o = typeof E == "function" ? E : La(!!E), m) : o; }, m.extent = function (E) { return arguments.length ? (t = typeof E == "function" ? E : La([[+E[0][0], +E[0][1]], [+E[1][0], +E[1][1]]]), m) : t; }, m.scaleExtent = function (E) { return arguments.length ? (i[0] = +E[0], i[1] = +E[1], m) : [i[0], i[1]]; }, m.translateExtent = function (E) { return arguments.length ? (a[0][0] = +E[0][0], a[1][0] = +E[1][0], a[0][1] = +E[0][1], a[1][1] = +E[1][1], m) : [[a[0][0], a[0][1]], [a[1][0], a[1][1]]]; }, m.constrain = function (E) { return arguments.length ? (n = E, m) : n; }, m.duration = function (E) { return arguments.length ? (s = +E, m) : s; }, m.interpolate = function (E) { return arguments.length ? (l = E, m) : l; }, m.on = function () { var E = u.on.apply(u, arguments); return E === u ? m : E; }, m.clickDistance = function (E) { return arguments.length ? (y = (E = +E) * E, m) : Math.sqrt(y); }, m.tapDistance = function (E) { return arguments.length ? (x = +E, m) : x; }, m; }
const El = T.createContext(null), Z3 = El.Provider, Qn = { error001: () => "[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001", error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.", error003: e => `Node type "${e}" not found. Using fallback type "default".`, error004: () => "The React Flow parent container needs a width and a height to render the graph.", error005: () => "Only child nodes can use a parent extent.", error006: () => "Can't create edge. An edge needs a source and a target.", error007: e => `The old edge with id=${e} does not exist.`, error009: e => `Marker type "${e}" doesn't exist.`, error008: (e, t) => `Couldn't create edge for ${e ? "target" : "source"} handle id: "${e ? t.targetHandle : t.sourceHandle}", edge id: ${t.id}.`, error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.", error011: e => `Edge type "${e}" not found. Using fallback type "default".` }, Ty = Qn.error001();
function me(e, t) { const n = T.useContext(El); if (n === null)
    throw new Error(Ty); return wS(n, e, t); }
const Ve = () => { const e = T.useContext(El); if (e === null)
    throw new Error(Ty); return T.useMemo(() => ({ getState: e.getState, setState: e.setState, subscribe: e.subscribe, destroy: e.destroy }), [e]); }, J3 = e => e.userSelectionActive ? "none" : "all";
function My({ position: e, children: t, className: n, style: r, ...o }) { const i = me(J3), a = `${e}`.split("-"); return b.jsx("div", { className: Ze(["react-flow__panel", n, ...a]), style: { ...r, pointerEvents: i }, ...o, children: t }); }
function eE({ proOptions: e, position: t = "bottom-right" }) { return e != null && e.hideAttribution ? null : b.jsx(My, { position: t, className: "react-flow__attribution", "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev", children: b.jsx("a", { href: "https://reactflow.dev", target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution", children: "React Flow" }) }); }
const tE = ({ x: e, y: t, label: n, labelStyle: r = {}, labelShowBg: o = !0, labelBgStyle: i = {}, labelBgPadding: a = [2, 4], labelBgBorderRadius: s = 2, children: l, className: u, ...c }) => { const f = T.useRef(null), [d, p] = T.useState({ x: 0, y: 0, width: 0, height: 0 }), g = Ze(["react-flow__edge-textwrapper", u]); return T.useEffect(() => { if (f.current) {
    const y = f.current.getBBox();
    p({ x: y.x, y: y.y, width: y.width, height: y.height });
} }, [n]), typeof n > "u" || !n ? null : b.jsxs("g", { transform: `translate(${e - d.width / 2} ${t - d.height / 2})`, className: g, visibility: d.width ? "visible" : "hidden", ...c, children: [o && b.jsx("rect", { width: d.width + 2 * a[0], x: -a[0], y: -a[1], height: d.height + 2 * a[1], className: "react-flow__edge-textbg", style: i, rx: s, ry: s }), b.jsx("text", { className: "react-flow__edge-text", y: d.height / 2, dy: "0.3em", ref: f, style: r, children: n }), l] }); };
var nE = T.memo(tE);
const fd = e => ({ width: e.offsetWidth, height: e.offsetHeight }), To = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), dd = (e = { x: 0, y: 0 }, t) => ({ x: To(e.x, t[0][0], t[1][0]), y: To(e.y, t[0][1], t[1][1]) }), Ap = (e, t, n) => e < t ? To(Math.abs(e - t), 1, 50) / 50 : e > n ? -To(Math.abs(e - n), 1, 50) / 50 : 0, Py = (e, t) => { const n = Ap(e.x, 35, t.width - 35) * 20, r = Ap(e.y, 35, t.height - 35) * 20; return [n, r]; }, zy = e => { var t; return ((t = e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document); }, rE = (e, t) => ({ x: Math.min(e.x, t.x), y: Math.min(e.y, t.y), x2: Math.max(e.x2, t.x2), y2: Math.max(e.y2, t.y2) }), Ay = ({ x: e, y: t, width: n, height: r }) => ({ x: e, y: t, x2: e + n, y2: t + r }), oE = ({ x: e, y: t, x2: n, y2: r }) => ({ x: e, y: t, width: n - e, height: r - t }), Ip = e => ({ ...e.positionAbsolute || { x: 0, y: 0 }, width: e.width || 0, height: e.height || 0 }), Oc = (e, t) => { const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y)); return Math.ceil(n * r); }, iE = e => Et(e.width) && Et(e.height) && Et(e.x) && Et(e.y), Et = e => !isNaN(e) && isFinite(e), Ae = Symbol.for("internals"), Iy = ["Enter", " ", "Escape"], aE = (e, t) => { }, sE = e => "nativeEvent" in e;
function $c(e) { var o, i; const t = sE(e) ? e.nativeEvent : e, n = ((i = (o = t.composedPath) == null ? void 0 : o.call(t)) == null ? void 0 : i[0]) || e.target; return ["INPUT", "SELECT", "TEXTAREA"].includes(n == null ? void 0 : n.nodeName) || (n == null ? void 0 : n.hasAttribute("contenteditable")) || !!(n != null && n.closest(".nokey")); }
const Oy = e => "clientX" in e, Wn = (e, t) => { var i, a; const n = Oy(e), r = n ? e.clientX : (i = e.touches) == null ? void 0 : i[0].clientX, o = n ? e.clientY : (a = e.touches) == null ? void 0 : a[0].clientY; return { x: r - ((t == null ? void 0 : t.left) ?? 0), y: o - ((t == null ? void 0 : t.top) ?? 0) }; }, sa = ({ id: e, path: t, labelX: n, labelY: r, label: o, labelStyle: i, labelShowBg: a, labelBgStyle: s, labelBgPadding: l, labelBgBorderRadius: u, style: c, markerEnd: f, markerStart: d, interactionWidth: p = 20 }) => b.jsxs(b.Fragment, { children: [b.jsx("path", { id: e, style: c, d: t, fill: "none", className: "react-flow__edge-path", markerEnd: f, markerStart: d }), p && b.jsx("path", { d: t, fill: "none", strokeOpacity: 0, strokeWidth: p, className: "react-flow__edge-interaction" }), o && Et(n) && Et(r) ? b.jsx(nE, { x: n, y: r, label: o, labelStyle: i, labelShowBg: a, labelBgStyle: s, labelBgPadding: l, labelBgBorderRadius: u }) : null] });
sa.displayName = "BaseEdge";
function ti(e, t, n) { return n === void 0 ? n : r => { const o = t().edges.find(i => i.id === e); o && n(r, { ...o }); }; }
function $y({ sourceX: e, sourceY: t, targetX: n, targetY: r }) { const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, a = Math.abs(r - t) / 2, s = r < t ? r + a : r - a; return [i, s, o, a]; }
function Ly({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: a, targetControlY: s }) { const l = e * .125 + o * .375 + a * .375 + n * .125, u = t * .125 + i * .375 + s * .375 + r * .125, c = Math.abs(l - e), f = Math.abs(u - t); return [l, u, c, f]; }
var Mr;
(function (e) { e.Strict = "strict", e.Loose = "loose"; })(Mr || (Mr = {}));
var mo;
(function (e) { e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal"; })(mo || (mo = {}));
var qi;
(function (e) { e.Partial = "partial", e.Full = "full"; })(qi || (qi = {}));
var In;
(function (e) { e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier"; })(In || (In = {}));
var Xs;
(function (e) { e.Arrow = "arrow", e.ArrowClosed = "arrowclosed"; })(Xs || (Xs = {}));
var W;
(function (e) { e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom"; })(W || (W = {}));
function Op({ pos: e, x1: t, y1: n, x2: r, y2: o }) { return e === W.Left || e === W.Right ? [.5 * (t + r), n] : [t, .5 * (n + o)]; }
function Ry({ sourceX: e, sourceY: t, sourcePosition: n = W.Bottom, targetX: r, targetY: o, targetPosition: i = W.Top }) { const [a, s] = Op({ pos: n, x1: e, y1: t, x2: r, y2: o }), [l, u] = Op({ pos: i, x1: r, y1: o, x2: e, y2: t }), [c, f, d, p] = Ly({ sourceX: e, sourceY: t, targetX: r, targetY: o, sourceControlX: a, sourceControlY: s, targetControlX: l, targetControlY: u }); return [`M${e},${t} C${a},${s} ${l},${u} ${r},${o}`, c, f, d, p]; }
const md = T.memo(({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourcePosition: o = W.Bottom, targetPosition: i = W.Top, label: a, labelStyle: s, labelShowBg: l, labelBgStyle: u, labelBgPadding: c, labelBgBorderRadius: f, style: d, markerEnd: p, markerStart: g, interactionWidth: y }) => { const [x, m, h] = Ry({ sourceX: e, sourceY: t, sourcePosition: o, targetX: n, targetY: r, targetPosition: i }); return b.jsx(sa, { path: x, labelX: m, labelY: h, label: a, labelStyle: s, labelShowBg: l, labelBgStyle: u, labelBgPadding: c, labelBgBorderRadius: f, style: d, markerEnd: p, markerStart: g, interactionWidth: y }); });
md.displayName = "SimpleBezierEdge";
const $p = { [W.Left]: { x: -1, y: 0 }, [W.Right]: { x: 1, y: 0 }, [W.Top]: { x: 0, y: -1 }, [W.Bottom]: { x: 0, y: 1 } }, lE = ({ source: e, sourcePosition: t = W.Bottom, target: n }) => t === W.Left || t === W.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Lp = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function uE({ source: e, sourcePosition: t = W.Bottom, target: n, targetPosition: r = W.Top, center: o, offset: i }) { const a = $p[t], s = $p[r], l = { x: e.x + a.x * i, y: e.y + a.y * i }, u = { x: n.x + s.x * i, y: n.y + s.y * i }, c = lE({ source: l, sourcePosition: t, target: u }), f = c.x !== 0 ? "x" : "y", d = c[f]; let p = [], g, y; const [x, m, h, v] = $y({ sourceX: e.x, sourceY: e.y, targetX: n.x, targetY: n.y }); if (a[f] * s[f] === -1) {
    g = o.x || x, y = o.y || m;
    const S = [{ x: g, y: l.y }, { x: g, y: u.y }], N = [{ x: l.x, y }, { x: u.x, y }];
    a[f] === d ? p = f === "x" ? S : N : p = f === "x" ? N : S;
}
else {
    const S = [{ x: l.x, y: u.y }], N = [{ x: u.x, y: l.y }];
    if (f === "x" ? p = a.x === d ? N : S : p = a.y === d ? S : N, t !== r) {
        const C = f === "x" ? "y" : "x", M = a[f] === s[C], O = l[C] > u[C], R = l[C] < u[C];
        (a[f] === 1 && (!M && O || M && R) || a[f] !== 1 && (!M && R || M && O)) && (p = f === "x" ? S : N);
    }
    g = p[0].x, y = p[0].y;
} return [[e, l, ...p, u, n], g, y, h, v]; }
function cE(e, t, n, r) { const o = Math.min(Lp(e, t) / 2, Lp(t, n) / 2, r), { x: i, y: a } = t; if (e.x === i && i === n.x || e.y === a && a === n.y)
    return `L${i} ${a}`; if (e.y === a) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${a}Q ${i},${a} ${i},${a + o * c}`;
} const s = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1; return `L ${i},${a + o * l}Q ${i},${a} ${i + o * s},${a}`; }
function Lc({ sourceX: e, sourceY: t, sourcePosition: n = W.Bottom, targetX: r, targetY: o, targetPosition: i = W.Top, borderRadius: a = 5, centerX: s, centerY: l, offset: u = 20 }) { const [c, f, d, p, g] = uE({ source: { x: e, y: t }, sourcePosition: n, target: { x: r, y: o }, targetPosition: i, center: { x: s, y: l }, offset: u }); return [c.reduce((x, m, h) => { let v = ""; return h > 0 && h < c.length - 1 ? v = cE(c[h - 1], m, c[h + 1], a) : v = `${h === 0 ? "M" : "L"}${m.x} ${m.y}`, x += v, x; }, ""), f, d, p, g]; }
const Nl = T.memo(({ sourceX: e, sourceY: t, targetX: n, targetY: r, label: o, labelStyle: i, labelShowBg: a, labelBgStyle: s, labelBgPadding: l, labelBgBorderRadius: u, style: c, sourcePosition: f = W.Bottom, targetPosition: d = W.Top, markerEnd: p, markerStart: g, pathOptions: y, interactionWidth: x }) => { const [m, h, v] = Lc({ sourceX: e, sourceY: t, sourcePosition: f, targetX: n, targetY: r, targetPosition: d, borderRadius: y == null ? void 0 : y.borderRadius, offset: y == null ? void 0 : y.offset }); return b.jsx(sa, { path: m, labelX: h, labelY: v, label: o, labelStyle: i, labelShowBg: a, labelBgStyle: s, labelBgPadding: l, labelBgBorderRadius: u, style: c, markerEnd: p, markerStart: g, interactionWidth: x }); });
Nl.displayName = "SmoothStepEdge";
const pd = T.memo(e => { var t; return b.jsx(Nl, { ...e, pathOptions: T.useMemo(() => { var n; return { borderRadius: 0, offset: (n = e.pathOptions) == null ? void 0 : n.offset }; }, [(t = e.pathOptions) == null ? void 0 : t.offset]) }); });
pd.displayName = "StepEdge";
function fE({ sourceX: e, sourceY: t, targetX: n, targetY: r }) { const [o, i, a, s] = $y({ sourceX: e, sourceY: t, targetX: n, targetY: r }); return [`M ${e},${t}L ${n},${r}`, o, i, a, s]; }
const hd = T.memo(({ sourceX: e, sourceY: t, targetX: n, targetY: r, label: o, labelStyle: i, labelShowBg: a, labelBgStyle: s, labelBgPadding: l, labelBgBorderRadius: u, style: c, markerEnd: f, markerStart: d, interactionWidth: p }) => { const [g, y, x] = fE({ sourceX: e, sourceY: t, targetX: n, targetY: r }); return b.jsx(sa, { path: g, labelX: y, labelY: x, label: o, labelStyle: i, labelShowBg: a, labelBgStyle: s, labelBgPadding: l, labelBgBorderRadius: u, style: c, markerEnd: f, markerStart: d, interactionWidth: p }); });
hd.displayName = "StraightEdge";
function Ra(e, t) { return e >= 0 ? .5 * e : t * 25 * Math.sqrt(-e); }
function Rp({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) { switch (e) {
    case W.Left: return [t - Ra(t - r, i), n];
    case W.Right: return [t + Ra(r - t, i), n];
    case W.Top: return [t, n - Ra(n - o, i)];
    case W.Bottom: return [t, n + Ra(o - n, i)];
} }
function Dy({ sourceX: e, sourceY: t, sourcePosition: n = W.Bottom, targetX: r, targetY: o, targetPosition: i = W.Top, curvature: a = .25 }) { const [s, l] = Rp({ pos: n, x1: e, y1: t, x2: r, y2: o, c: a }), [u, c] = Rp({ pos: i, x1: r, y1: o, x2: e, y2: t, c: a }), [f, d, p, g] = Ly({ sourceX: e, sourceY: t, targetX: r, targetY: o, sourceControlX: s, sourceControlY: l, targetControlX: u, targetControlY: c }); return [`M${e},${t} C${s},${l} ${u},${c} ${r},${o}`, f, d, p, g]; }
const Qs = T.memo(({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourcePosition: o = W.Bottom, targetPosition: i = W.Top, label: a, labelStyle: s, labelShowBg: l, labelBgStyle: u, labelBgPadding: c, labelBgBorderRadius: f, style: d, markerEnd: p, markerStart: g, pathOptions: y, interactionWidth: x }) => { const [m, h, v] = Dy({ sourceX: e, sourceY: t, sourcePosition: o, targetX: n, targetY: r, targetPosition: i, curvature: y == null ? void 0 : y.curvature }); return b.jsx(sa, { path: m, labelX: h, labelY: v, label: a, labelStyle: s, labelShowBg: l, labelBgStyle: u, labelBgPadding: c, labelBgBorderRadius: f, style: d, markerEnd: p, markerStart: g, interactionWidth: x }); });
Qs.displayName = "BezierEdge";
const gd = T.createContext(null), dE = gd.Provider;
gd.Consumer;
const mE = () => T.useContext(gd), pE = e => "id" in e && "source" in e && "target" in e, hE = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `reactflow__edge-${e}${t || ""}-${n}${r || ""}`, Rc = (e, t) => typeof e > "u" ? "" : typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map(r => `${r}=${e[r]}`).join("&")}`, gE = (e, t) => t.some(n => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), yE = (e, t) => { if (!e.source || !e.target)
    return t; let n; return pE(e) ? n = { ...e } : n = { ...e, id: hE(e) }, gE(n, t) ? t : t.concat(n); }, jy = ({ x: e, y: t }, [n, r, o], i, [a, s]) => { const l = { x: (e - n) / o, y: (t - r) / o }; return i ? { x: a * Math.round(l.x / a), y: s * Math.round(l.y / s) } : l; }, vE = ({ x: e, y: t }, [n, r, o]) => ({ x: e * o + n, y: t * o + r }), po = (e, t = [0, 0]) => { if (!e)
    return { x: 0, y: 0, positionAbsolute: { x: 0, y: 0 } }; const n = (e.width ?? 0) * t[0], r = (e.height ?? 0) * t[1], o = { x: e.position.x - n, y: e.position.y - r }; return { ...o, positionAbsolute: e.positionAbsolute ? { x: e.positionAbsolute.x - n, y: e.positionAbsolute.y - r } : o }; }, Fy = (e, t = [0, 0]) => { if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 }; const n = e.reduce((r, o) => { const { x: i, y: a } = po(o, t).positionAbsolute; return rE(r, Ay({ x: i, y: a, width: o.width || 0, height: o.height || 0 })); }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }); return oE(n); }, Vy = (e, t, [n, r, o] = [0, 0, 1], i = !1, a = !1, s = [0, 0]) => { const l = { x: (t.x - n) / o, y: (t.y - r) / o, width: t.width / o, height: t.height / o }, u = []; return e.forEach(c => { const { width: f, height: d, selectable: p = !0, hidden: g = !1 } = c; if (a && !p || g)
    return !1; const { positionAbsolute: y } = po(c, s), x = { x: y.x, y: y.y, width: f || 0, height: d || 0 }, m = Oc(l, x), h = typeof f > "u" || typeof d > "u" || f === null || d === null, v = i && m > 0, w = (f || 0) * (d || 0); (h || v || m >= w || c.dragging) && u.push(c); }), u; }, Hy = (e, t) => { const n = e.map(r => r.id); return t.filter(r => n.includes(r.source) || n.includes(r.target)); }, By = (e, t, n, r, o, i = .1) => { const a = t / (e.width * (1 + i)), s = n / (e.height * (1 + i)), l = Math.min(a, s), u = To(l, r, o), c = e.x + e.width / 2, f = e.y + e.height / 2, d = t / 2 - c * u, p = n / 2 - f * u; return [d, p, u]; }, dr = (e, t = 0) => e.transition().duration(t);
function Dp(e, t, n, r) { return (t[n] || []).reduce((o, i) => { var a, s; return `${e.id}-${i.id}-${n}` !== r && o.push({ id: i.id || null, type: n, nodeId: e.id, x: (((a = e.positionAbsolute) == null ? void 0 : a.x) ?? 0) + i.x + i.width / 2, y: (((s = e.positionAbsolute) == null ? void 0 : s.y) ?? 0) + i.y + i.height / 2 }), o; }, []); }
function wE(e, t, n, r, o, i) { const { x: a, y: s } = Wn(e), u = t.elementsFromPoint(a, s).find(g => g.classList.contains("react-flow__handle")); if (u) {
    const g = u.getAttribute("data-nodeid");
    if (g) {
        const y = yd(void 0, u), x = u.getAttribute("data-handleid"), m = i({ nodeId: g, id: x, type: y });
        if (m)
            return { handle: { id: x, type: y, nodeId: g, x: n.x, y: n.y }, validHandleResult: m };
    }
} let c = [], f = 1 / 0; if (o.forEach(g => { const y = Math.sqrt((g.x - n.x) ** 2 + (g.y - n.y) ** 2); if (y <= r) {
    const x = i(g);
    y <= f && (y < f ? c = [{ handle: g, validHandleResult: x }] : y === f && c.push({ handle: g, validHandleResult: x }), f = y);
} }), !c.length)
    return { handle: null, validHandleResult: Uy() }; if (c.length === 1)
    return c[0]; const d = c.some(({ validHandleResult: g }) => g.isValid), p = c.some(({ handle: g }) => g.type === "target"); return c.find(({ handle: g, validHandleResult: y }) => p ? g.type === "target" : d ? y.isValid : !0) || c[0]; }
const xE = { source: null, target: null, sourceHandle: null, targetHandle: null }, Uy = () => ({ handleDomNode: null, isValid: !1, connection: xE, endHandle: null });
function qy(e, t, n, r, o, i, a) { const s = o === "target", l = a.querySelector(`.react-flow__handle[data-id="${e == null ? void 0 : e.nodeId}-${e == null ? void 0 : e.id}-${e == null ? void 0 : e.type}"]`), u = { ...Uy(), handleDomNode: l }; if (l) {
    const c = yd(void 0, l), f = l.getAttribute("data-nodeid"), d = l.getAttribute("data-handleid"), p = l.classList.contains("connectable"), g = l.classList.contains("connectableend"), y = { source: s ? f : n, sourceHandle: s ? d : r, target: s ? n : f, targetHandle: s ? r : d };
    u.connection = y, p && g && (t === Mr.Strict ? s && c === "source" || !s && c === "target" : f !== n || d !== r) && (u.endHandle = { nodeId: f, handleId: d, type: c }, u.isValid = i(y));
} return u; }
function SE({ nodes: e, nodeId: t, handleId: n, handleType: r }) { return e.reduce((o, i) => { if (i[Ae]) {
    const { handleBounds: a } = i[Ae];
    let s = [], l = [];
    a && (s = Dp(i, a, "source", `${t}-${n}-${r}`), l = Dp(i, a, "target", `${t}-${n}-${r}`)), o.push(...s, ...l);
} return o; }, []); }
function yd(e, t) { return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null); }
function xu(e) { e == null || e.classList.remove("valid", "connecting", "react-flow__handle-valid", "react-flow__handle-connecting"); }
function bE(e, t) { let n = null; return t ? n = "valid" : e && !t && (n = "invalid"), n; }
function Wy({ event: e, handleId: t, nodeId: n, onConnect: r, isTarget: o, getState: i, setState: a, isValidConnection: s, edgeUpdaterType: l, onEdgeUpdateEnd: u }) { const c = zy(e.target), { connectionMode: f, domNode: d, autoPanOnConnect: p, connectionRadius: g, onConnectStart: y, panBy: x, getNodes: m, cancelConnection: h } = i(); let v = 0, w; const { x: S, y: N } = Wn(e), C = c == null ? void 0 : c.elementFromPoint(S, N), M = yd(l, C), O = d == null ? void 0 : d.getBoundingClientRect(); if (!O || !M)
    return; let R, D = Wn(e, O), V = !1, L = null, E = !1, $ = null; const z = SE({ nodes: m(), nodeId: n, handleId: t, handleType: M }), P = () => { if (!p)
    return; const [I, F] = Py(D, O); x({ x: I, y: F }), v = requestAnimationFrame(P); }; a({ connectionPosition: D, connectionStatus: null, connectionNodeId: n, connectionHandleId: t, connectionHandleType: M, connectionStartHandle: { nodeId: n, handleId: t, type: M }, connectionEndHandle: null }), y == null || y(e, { nodeId: n, handleId: t, handleType: M }); function _(I) { const { transform: F } = i(); D = Wn(I, O); const { handle: H, validHandleResult: X } = wE(I, c, jy(D, F, !1, [1, 1]), g, z, Y => qy(Y, f, n, t, o ? "target" : "source", s, c)); if (w = H, V || (P(), V = !0), $ = X.handleDomNode, L = X.connection, E = X.isValid, a({ connectionPosition: w && E ? vE({ x: w.x, y: w.y }, F) : D, connectionStatus: bE(!!w, E), connectionEndHandle: X.endHandle }), !w && !E && !$)
    return xu(R); L.source !== L.target && $ && (xu(R), R = $, $.classList.add("connecting", "react-flow__handle-connecting"), $.classList.toggle("valid", E), $.classList.toggle("react-flow__handle-valid", E)); } function A(I) { var F, H; (w || $) && L && E && (r == null || r(L)), (H = (F = i()).onConnectEnd) == null || H.call(F, I), l && (u == null || u(I)), xu(R), h(), cancelAnimationFrame(v), V = !1, E = !1, L = null, $ = null, c.removeEventListener("mousemove", _), c.removeEventListener("mouseup", A), c.removeEventListener("touchmove", _), c.removeEventListener("touchend", A); } c.addEventListener("mousemove", _), c.addEventListener("mouseup", A), c.addEventListener("touchmove", _), c.addEventListener("touchend", A); }
const jp = () => !0, kE = e => ({ connectionStartHandle: e.connectionStartHandle, connectOnClick: e.connectOnClick, noPanClassName: e.noPanClassName }), EE = (e, t, n) => r => { const { connectionStartHandle: o, connectionEndHandle: i, connectionClickStartHandle: a } = r; return { connecting: (o == null ? void 0 : o.nodeId) === e && (o == null ? void 0 : o.handleId) === t && (o == null ? void 0 : o.type) === n || (i == null ? void 0 : i.nodeId) === e && (i == null ? void 0 : i.handleId) === t && (i == null ? void 0 : i.type) === n, clickConnecting: (a == null ? void 0 : a.nodeId) === e && (a == null ? void 0 : a.handleId) === t && (a == null ? void 0 : a.type) === n }; }, Yy = T.forwardRef(({ type: e = "source", position: t = W.Top, isValidConnection: n, isConnectable: r = !0, isConnectableStart: o = !0, isConnectableEnd: i = !0, id: a, onConnect: s, children: l, className: u, onMouseDown: c, onTouchStart: f, ...d }, p) => { var O, R; const g = a || null, y = e === "target", x = Ve(), m = mE(), { connectOnClick: h, noPanClassName: v } = me(kE, Le), { connecting: w, clickConnecting: S } = me(EE(m, g, e), Le); m || (R = (O = x.getState()).onError) == null || R.call(O, "010", Qn.error010()); const N = D => { const { defaultEdgeOptions: V, onConnect: L, hasDefaultEdges: E } = x.getState(), $ = { ...V, ...D }; if (E) {
    const { edges: z, setEdges: P } = x.getState();
    P(yE($, z));
} L == null || L($), s == null || s($); }, C = D => { if (!m)
    return; const V = Oy(D); o && (V && D.button === 0 || !V) && Wy({ event: D, handleId: g, nodeId: m, onConnect: N, isTarget: y, getState: x.getState, setState: x.setState, isValidConnection: n || x.getState().isValidConnection || jp }), V ? c == null || c(D) : f == null || f(D); }, M = D => { const { onClickConnectStart: V, onClickConnectEnd: L, connectionClickStartHandle: E, connectionMode: $, isValidConnection: z } = x.getState(); if (!m || !E && !o)
    return; if (!E) {
    V == null || V(D, { nodeId: m, handleId: g, handleType: e }), x.setState({ connectionClickStartHandle: { nodeId: m, type: e, handleId: g } });
    return;
} const P = zy(D.target), _ = n || z || jp, { connection: A, isValid: I } = qy({ nodeId: m, id: g, type: e }, $, E.nodeId, E.handleId || null, E.type, _, P); I && N(A), L == null || L(D), x.setState({ connectionClickStartHandle: null }); }; return b.jsx("div", { "data-handleid": g, "data-nodeid": m, "data-handlepos": t, "data-id": `${m}-${g}-${e}`, className: Ze(["react-flow__handle", `react-flow__handle-${t}`, "nodrag", v, u, { source: !y, target: y, connectable: r, connectablestart: o, connectableend: i, connecting: S, connectionindicator: r && (o && !w || i && w) }]), onMouseDown: C, onTouchStart: C, onClick: h ? M : void 0, ref: p, ...d, children: l }); });
Yy.displayName = "Handle";
var Mo = T.memo(Yy);
const Xy = ({ data: e, isConnectable: t, targetPosition: n = W.Top, sourcePosition: r = W.Bottom }) => b.jsxs(b.Fragment, { children: [b.jsx(Mo, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label, b.jsx(Mo, { type: "source", position: r, isConnectable: t })] });
Xy.displayName = "DefaultNode";
var Dc = T.memo(Xy);
const Qy = ({ data: e, isConnectable: t, sourcePosition: n = W.Bottom }) => b.jsxs(b.Fragment, { children: [e == null ? void 0 : e.label, b.jsx(Mo, { type: "source", position: n, isConnectable: t })] });
Qy.displayName = "InputNode";
var Gy = T.memo(Qy);
const Ky = ({ data: e, isConnectable: t, targetPosition: n = W.Top }) => b.jsxs(b.Fragment, { children: [b.jsx(Mo, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label] });
Ky.displayName = "OutputNode";
var Zy = T.memo(Ky);
const vd = () => null;
vd.displayName = "GroupNode";
const NE = e => ({ selectedNodes: e.getNodes().filter(t => t.selected), selectedEdges: e.edges.filter(t => t.selected) }), Da = e => e.id;
function _E(e, t) { return Le(e.selectedNodes.map(Da), t.selectedNodes.map(Da)) && Le(e.selectedEdges.map(Da), t.selectedEdges.map(Da)); }
const Jy = T.memo(({ onSelectionChange: e }) => { const t = Ve(), { selectedNodes: n, selectedEdges: r } = me(NE, _E); return T.useEffect(() => { var i, a; const o = { nodes: n, edges: r }; e == null || e(o), (a = (i = t.getState()).onSelectionChange) == null || a.call(i, o); }, [n, r, e]), null; });
Jy.displayName = "SelectionListener";
const CE = e => !!e.onSelectionChange;
function TE({ onSelectionChange: e }) { const t = me(CE); return e || t ? b.jsx(Jy, { onSelectionChange: e }) : null; }
const ME = e => ({ setNodes: e.setNodes, setEdges: e.setEdges, setDefaultNodesAndEdges: e.setDefaultNodesAndEdges, setMinZoom: e.setMinZoom, setMaxZoom: e.setMaxZoom, setTranslateExtent: e.setTranslateExtent, setNodeExtent: e.setNodeExtent, reset: e.reset });
function Dr(e, t) { T.useEffect(() => { typeof e < "u" && t(e); }, [e]); }
function G(e, t, n) { T.useEffect(() => { typeof t < "u" && n({ [e]: t }); }, [t]); }
const PE = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, onConnect: o, onConnectStart: i, onConnectEnd: a, onClickConnectStart: s, onClickConnectEnd: l, nodesDraggable: u, nodesConnectable: c, nodesFocusable: f, edgesFocusable: d, edgesUpdatable: p, elevateNodesOnSelect: g, minZoom: y, maxZoom: x, nodeExtent: m, onNodesChange: h, onEdgesChange: v, elementsSelectable: w, connectionMode: S, snapGrid: N, snapToGrid: C, translateExtent: M, connectOnClick: O, defaultEdgeOptions: R, fitView: D, fitViewOptions: V, onNodesDelete: L, onEdgesDelete: E, onNodeDrag: $, onNodeDragStart: z, onNodeDragStop: P, onSelectionDrag: _, onSelectionDragStart: A, onSelectionDragStop: I, noPanClassName: F, nodeOrigin: H, rfId: X, autoPanOnConnect: Y, autoPanOnNodeDrag: ee, onError: Z, connectionRadius: ne, isValidConnection: le }) => { const { setNodes: Ce, setEdges: Ne, setDefaultNodesAndEdges: yt, setMinZoom: Pt, setMaxZoom: Bt, setTranslateExtent: Te, setNodeExtent: pe, reset: et } = me(ME, Le), Q = Ve(); return T.useEffect(() => { const Sn = r == null ? void 0 : r.map(nr => ({ ...nr, ...R })); return yt(n, Sn), () => { et(); }; }, []), G("defaultEdgeOptions", R, Q.setState), G("connectionMode", S, Q.setState), G("onConnect", o, Q.setState), G("onConnectStart", i, Q.setState), G("onConnectEnd", a, Q.setState), G("onClickConnectStart", s, Q.setState), G("onClickConnectEnd", l, Q.setState), G("nodesDraggable", u, Q.setState), G("nodesConnectable", c, Q.setState), G("nodesFocusable", f, Q.setState), G("edgesFocusable", d, Q.setState), G("edgesUpdatable", p, Q.setState), G("elementsSelectable", w, Q.setState), G("elevateNodesOnSelect", g, Q.setState), G("snapToGrid", C, Q.setState), G("snapGrid", N, Q.setState), G("onNodesChange", h, Q.setState), G("onEdgesChange", v, Q.setState), G("connectOnClick", O, Q.setState), G("fitViewOnInit", D, Q.setState), G("fitViewOnInitOptions", V, Q.setState), G("onNodesDelete", L, Q.setState), G("onEdgesDelete", E, Q.setState), G("onNodeDrag", $, Q.setState), G("onNodeDragStart", z, Q.setState), G("onNodeDragStop", P, Q.setState), G("onSelectionDrag", _, Q.setState), G("onSelectionDragStart", A, Q.setState), G("onSelectionDragStop", I, Q.setState), G("noPanClassName", F, Q.setState), G("nodeOrigin", H, Q.setState), G("rfId", X, Q.setState), G("autoPanOnConnect", Y, Q.setState), G("autoPanOnNodeDrag", ee, Q.setState), G("onError", Z, Q.setState), G("connectionRadius", ne, Q.setState), G("isValidConnection", le, Q.setState), Dr(e, Ce), Dr(t, Ne), Dr(y, Pt), Dr(x, Bt), Dr(M, Te), Dr(m, pe), null; }, Fp = { display: "none" }, zE = { position: "absolute", width: 1, height: 1, margin: -1, border: 0, padding: 0, overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", clipPath: "inset(100%)" }, ev = "react-flow__node-desc", tv = "react-flow__edge-desc", AE = "react-flow__aria-live", IE = e => e.ariaLiveMessage;
function OE({ rfId: e }) { const t = me(IE); return b.jsx("div", { id: `${AE}-${e}`, "aria-live": "assertive", "aria-atomic": "true", style: zE, children: t }); }
function $E({ rfId: e, disableKeyboardA11y: t }) { return b.jsxs(b.Fragment, { children: [b.jsxs("div", { id: `${ev}-${e}`, style: Fp, children: ["Press enter or space to select a node.", !t && "You can then use the arrow keys to move the node around.", " Press delete to remove it and escape to cancel.", " "] }), b.jsx("div", { id: `${tv}-${e}`, style: Fp, children: "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel." }), !t && b.jsx(OE, { rfId: e })] }); }
const LE = (e, t, n) => n === W.Left ? e - t : n === W.Right ? e + t : e, RE = (e, t, n) => n === W.Top ? e - t : n === W.Bottom ? e + t : e, Vp = "react-flow__edgeupdater", Hp = ({ position: e, centerX: t, centerY: n, radius: r = 10, onMouseDown: o, onMouseEnter: i, onMouseOut: a, type: s }) => b.jsx("circle", { onMouseDown: o, onMouseEnter: i, onMouseOut: a, className: Ze([Vp, `${Vp}-${s}`]), cx: LE(t, r, e), cy: RE(n, r, e), r, stroke: "transparent", fill: "transparent" }), DE = () => !0;
var jr = e => { const t = ({ id: n, className: r, type: o, data: i, onClick: a, onEdgeDoubleClick: s, selected: l, animated: u, label: c, labelStyle: f, labelShowBg: d, labelBgStyle: p, labelBgPadding: g, labelBgBorderRadius: y, style: x, source: m, target: h, sourceX: v, sourceY: w, targetX: S, targetY: N, sourcePosition: C, targetPosition: M, elementsSelectable: O, hidden: R, sourceHandleId: D, targetHandleId: V, onContextMenu: L, onMouseEnter: E, onMouseMove: $, onMouseLeave: z, edgeUpdaterRadius: P, onEdgeUpdate: _, onEdgeUpdateStart: A, onEdgeUpdateEnd: I, markerEnd: F, markerStart: H, rfId: X, ariaLabel: Y, isFocusable: ee, isUpdatable: Z, pathOptions: ne, interactionWidth: le }) => { const Ce = T.useRef(null), [Ne, yt] = T.useState(!1), [Pt, Bt] = T.useState(!1), Te = Ve(), pe = T.useMemo(() => `url(#${Rc(H, X)})`, [H, X]), et = T.useMemo(() => `url(#${Rc(F, X)})`, [F, X]); if (R)
    return null; const Q = tt => { const { edges: zt, addSelectedEdges: ir } = Te.getState(); if (O && (Te.setState({ nodesSelectionActive: !1 }), ir([n])), a) {
    const ar = zt.find(sr => sr.id === n);
    a(tt, ar);
} }, Sn = ti(n, Te.getState, s), nr = ti(n, Te.getState, L), Vo = ti(n, Te.getState, E), Ho = ti(n, Te.getState, $), Or = ti(n, Te.getState, z), rr = (tt, zt) => { if (tt.button !== 0)
    return; const { edges: ir, isValidConnection: ar } = Te.getState(), sr = zt ? h : m, pa = (zt ? V : D) || null, lr = zt ? "target" : "source", jl = ar || DE, Fl = zt, Uo = ir.find(ur => ur.id === n); Bt(!0), A == null || A(tt, Uo, lr); const Vl = ur => { Bt(!1), I == null || I(ur, Uo, lr); }; Wy({ event: tt, handleId: pa, nodeId: sr, onConnect: ur => _ == null ? void 0 : _(Uo, ur), isTarget: Fl, getState: Te.getState, setState: Te.setState, isValidConnection: jl, edgeUpdaterType: lr, onEdgeUpdateEnd: Vl }); }, bn = tt => rr(tt, !0), $r = tt => rr(tt, !1), kn = () => yt(!0), or = () => yt(!1), Bo = !O && !a, Lr = tt => { var zt; if (Iy.includes(tt.key) && O) {
    const { unselectNodesAndEdges: ir, addSelectedEdges: ar, edges: sr } = Te.getState();
    tt.key === "Escape" ? ((zt = Ce.current) == null || zt.blur(), ir({ edges: [sr.find(lr => lr.id === n)] })) : ar([n]);
} }; return b.jsxs("g", { className: Ze(["react-flow__edge", `react-flow__edge-${o}`, r, { selected: l, animated: u, inactive: Bo, updating: Ne }]), onClick: Q, onDoubleClick: Sn, onContextMenu: nr, onMouseEnter: Vo, onMouseMove: Ho, onMouseLeave: Or, onKeyDown: ee ? Lr : void 0, tabIndex: ee ? 0 : void 0, role: ee ? "button" : void 0, "data-testid": `rf__edge-${n}`, "aria-label": Y === null ? void 0 : Y || `Edge from ${m} to ${h}`, "aria-describedby": ee ? `${tv}-${X}` : void 0, ref: Ce, children: [!Pt && b.jsx(e, { id: n, source: m, target: h, selected: l, animated: u, label: c, labelStyle: f, labelShowBg: d, labelBgStyle: p, labelBgPadding: g, labelBgBorderRadius: y, data: i, style: x, sourceX: v, sourceY: w, targetX: S, targetY: N, sourcePosition: C, targetPosition: M, sourceHandleId: D, targetHandleId: V, markerStart: pe, markerEnd: et, pathOptions: ne, interactionWidth: le }), Z && b.jsxs(b.Fragment, { children: [(Z === "source" || Z === !0) && b.jsx(Hp, { position: C, centerX: v, centerY: w, radius: P, onMouseDown: bn, onMouseEnter: kn, onMouseOut: or, type: "source" }), (Z === "target" || Z === !0) && b.jsx(Hp, { position: M, centerX: S, centerY: N, radius: P, onMouseDown: $r, onMouseEnter: kn, onMouseOut: or, type: "target" })] })] }); }; return t.displayName = "EdgeWrapper", T.memo(t); };
function jE(e) { const t = { default: jr(e.default || Qs), straight: jr(e.bezier || hd), step: jr(e.step || pd), smoothstep: jr(e.step || Nl), simplebezier: jr(e.simplebezier || md) }, n = {}, r = Object.keys(e).filter(o => !["default", "bezier"].includes(o)).reduce((o, i) => (o[i] = jr(e[i] || Qs), o), n); return { ...t, ...r }; }
function Bp(e, t, n = null) { const r = ((n == null ? void 0 : n.x) || 0) + t.x, o = ((n == null ? void 0 : n.y) || 0) + t.y, i = (n == null ? void 0 : n.width) || t.width, a = (n == null ? void 0 : n.height) || t.height; switch (e) {
    case W.Top: return { x: r + i / 2, y: o };
    case W.Right: return { x: r + i, y: o + a / 2 };
    case W.Bottom: return { x: r + i / 2, y: o + a };
    case W.Left: return { x: r, y: o + a / 2 };
} }
function Up(e, t) { return e ? e.length === 1 || !t ? e[0] : t && e.find(n => n.id === t) || null : null; }
const FE = (e, t, n, r, o, i) => { const a = Bp(n, e, t), s = Bp(i, r, o); return { sourceX: a.x, sourceY: a.y, targetX: s.x, targetY: s.y }; };
function VE({ sourcePos: e, targetPos: t, sourceWidth: n, sourceHeight: r, targetWidth: o, targetHeight: i, width: a, height: s, transform: l }) { const u = { x: Math.min(e.x, t.x), y: Math.min(e.y, t.y), x2: Math.max(e.x + n, t.x + o), y2: Math.max(e.y + r, t.y + i) }; u.x === u.x2 && (u.x2 += 1), u.y === u.y2 && (u.y2 += 1); const c = Ay({ x: (0 - l[0]) / l[2], y: (0 - l[1]) / l[2], width: a / l[2], height: s / l[2] }), f = Math.max(0, Math.min(c.x2, u.x2) - Math.max(c.x, u.x)), d = Math.max(0, Math.min(c.y2, u.y2) - Math.max(c.y, u.y)); return Math.ceil(f * d) > 0; }
function qp(e) { var r, o, i, a, s; const t = ((r = e == null ? void 0 : e[Ae]) == null ? void 0 : r.handleBounds) || null, n = t && (e == null ? void 0 : e.width) && (e == null ? void 0 : e.height) && typeof ((o = e == null ? void 0 : e.positionAbsolute) == null ? void 0 : o.x) < "u" && typeof ((i = e == null ? void 0 : e.positionAbsolute) == null ? void 0 : i.y) < "u"; return [{ x: ((a = e == null ? void 0 : e.positionAbsolute) == null ? void 0 : a.x) || 0, y: ((s = e == null ? void 0 : e.positionAbsolute) == null ? void 0 : s.y) || 0, width: (e == null ? void 0 : e.width) || 0, height: (e == null ? void 0 : e.height) || 0 }, t, !!n]; }
function nv(e, t) { if (!e.parentNode)
    return !1; const n = t.get(e.parentNode); return n ? n.selected ? !0 : nv(n, t) : !1; }
function Wp(e, t, n) { let r = e; do {
    if (r != null && r.matches(t))
        return !0;
    if (r === n.current)
        return !1;
    r = r.parentElement;
} while (r); return !1; }
function HE(e, t, n, r) { return Array.from(e.values()).filter(o => (o.selected || o.id === r) && (!o.parentNode || !nv(o, e)) && (o.draggable || t && typeof o.draggable > "u")).map(o => { var i, a; return { id: o.id, position: o.position || { x: 0, y: 0 }, positionAbsolute: o.positionAbsolute || { x: 0, y: 0 }, distance: { x: n.x - (((i = o.positionAbsolute) == null ? void 0 : i.x) ?? 0), y: n.y - (((a = o.positionAbsolute) == null ? void 0 : a.y) ?? 0) }, delta: { x: 0, y: 0 }, extent: o.extent, parentNode: o.parentNode, width: o.width, height: o.height }; }); }
function BE(e, t) { return !t || t === "parent" ? t : [t[0], [t[1][0] - (e.width || 0), t[1][1] - (e.height || 0)]]; }
function rv(e, t, n, r, o = [0, 0], i) { const a = BE(e, e.extent || r); let s = a; if (e.extent === "parent")
    if (e.parentNode && e.width && e.height) {
        const c = n.get(e.parentNode), { x: f, y: d } = po(c, o).positionAbsolute;
        s = c && Et(f) && Et(d) && Et(c.width) && Et(c.height) ? [[f + e.width * o[0], d + e.height * o[1]], [f + c.width - e.width + e.width * o[0], d + c.height - e.height + e.height * o[1]]] : s;
    }
    else
        i == null || i("005", Qn.error005()), s = a;
else if (e.extent && e.parentNode) {
    const c = n.get(e.parentNode), { x: f, y: d } = po(c, o).positionAbsolute;
    s = [[e.extent[0][0] + f, e.extent[0][1] + d], [e.extent[1][0] + f, e.extent[1][1] + d]];
} let l = { x: 0, y: 0 }; if (e.parentNode) {
    const c = n.get(e.parentNode);
    l = po(c, o).positionAbsolute;
} const u = s ? dd(t, s) : t; return { position: { x: u.x - l.x, y: u.y - l.y }, positionAbsolute: u }; }
function Su({ nodeId: e, dragItems: t, nodeInternals: n }) { const r = t.map(o => ({ ...n.get(o.id), position: o.position, positionAbsolute: o.positionAbsolute })); return [e ? r.find(o => o.id === e) : r[0], r]; }
const Yp = (e, t, n, r) => { const o = t.querySelectorAll(e); if (!o || !o.length)
    return null; const i = Array.from(o), a = t.getBoundingClientRect(), s = { x: a.width * r[0], y: a.height * r[1] }; return i.map(l => { const u = l.getBoundingClientRect(); return { id: l.getAttribute("data-handleid"), position: l.getAttribute("data-handlepos"), x: (u.left - a.left - s.x) / n, y: (u.top - a.top - s.y) / n, ...fd(l) }; }); };
function ni(e, t, n) { return n === void 0 ? n : r => { const o = t().nodeInternals.get(e); n(r, { ...o }); }; }
function jc({ id: e, store: t, unselect: n = !1, nodeRef: r }) { const { addSelectedNodes: o, unselectNodesAndEdges: i, multiSelectionActive: a, nodeInternals: s } = t.getState(), l = s.get(e); t.setState({ nodesSelectionActive: !1 }), l.selected ? (n || l.selected && a) && (i({ nodes: [l] }), requestAnimationFrame(() => { var u; return (u = r == null ? void 0 : r.current) == null ? void 0 : u.blur(); })) : o([e]); }
function UE() { const e = Ve(); return T.useCallback(({ sourceEvent: n }) => { const { transform: r, snapGrid: o, snapToGrid: i } = e.getState(), a = n.touches ? n.touches[0].clientX : n.clientX, s = n.touches ? n.touches[0].clientY : n.clientY, l = { x: (a - r[0]) / r[2], y: (s - r[1]) / r[2] }; return { xSnapped: i ? o[0] * Math.round(l.x / o[0]) : l.x, ySnapped: i ? o[1] * Math.round(l.y / o[1]) : l.y, ...l }; }, []); }
function bu(e) { return (t, n, r) => e == null ? void 0 : e(t, r); }
function ov({ nodeRef: e, disabled: t = !1, noDragClassName: n, handleSelector: r, nodeId: o, isSelectable: i, selectNodesOnDrag: a }) { const s = Ve(), [l, u] = T.useState(!1), c = T.useRef([]), f = T.useRef({ x: null, y: null }), d = T.useRef(0), p = T.useRef(null), g = T.useRef({ x: 0, y: 0 }), y = T.useRef(null), x = T.useRef(!1), m = UE(); return T.useEffect(() => { if (e != null && e.current) {
    const h = Lt(e.current), v = ({ x: S, y: N }) => { const { nodeInternals: C, onNodeDrag: M, onSelectionDrag: O, updateNodePositions: R, nodeExtent: D, snapGrid: V, snapToGrid: L, nodeOrigin: E, onError: $ } = s.getState(); f.current = { x: S, y: N }; let z = !1; if (c.current = c.current.map(_ => { const A = { x: S - _.distance.x, y: N - _.distance.y }; L && (A.x = V[0] * Math.round(A.x / V[0]), A.y = V[1] * Math.round(A.y / V[1])); const I = rv(_, A, C, D, E, $); return z = z || _.position.x !== I.position.x || _.position.y !== I.position.y, _.position = I.position, _.positionAbsolute = I.positionAbsolute, _; }), !z)
        return; R(c.current, !0, !0), u(!0); const P = o ? M : bu(O); if (P && y.current) {
        const [_, A] = Su({ nodeId: o, dragItems: c.current, nodeInternals: C });
        P(y.current, _, A);
    } }, w = () => { if (!p.current)
        return; const [S, N] = Py(g.current, p.current); if (S !== 0 || N !== 0) {
        const { transform: C, panBy: M } = s.getState();
        f.current.x = (f.current.x ?? 0) - S / C[2], f.current.y = (f.current.y ?? 0) - N / C[2], M({ x: S, y: N }) && v(f.current);
    } d.current = requestAnimationFrame(w); };
    if (t)
        h.on(".drag", null);
    else {
        const S = sk().on("start", N => { var z; const { nodeInternals: C, multiSelectionActive: M, domNode: O, nodesDraggable: R, unselectNodesAndEdges: D, onNodeDragStart: V, onSelectionDragStart: L } = s.getState(), E = o ? V : bu(L); !a && !M && o && ((z = C.get(o)) != null && z.selected || D()), o && i && a && jc({ id: o, store: s, nodeRef: e }); const $ = m(N); if (f.current = $, c.current = HE(C, R, $, o), E && c.current) {
            const [P, _] = Su({ nodeId: o, dragItems: c.current, nodeInternals: C });
            E(N.sourceEvent, P, _);
        } p.current = (O == null ? void 0 : O.getBoundingClientRect()) || null, g.current = Wn(N.sourceEvent, p.current); }).on("drag", N => { const C = m(N), { autoPanOnNodeDrag: M } = s.getState(); !x.current && M && (x.current = !0, w()), (f.current.x !== C.xSnapped || f.current.y !== C.ySnapped) && c.current && (y.current = N.sourceEvent, g.current = Wn(N.sourceEvent, p.current), v(C)); }).on("end", N => { if (u(!1), x.current = !1, cancelAnimationFrame(d.current), c.current) {
            const { updateNodePositions: C, nodeInternals: M, onNodeDragStop: O, onSelectionDragStop: R } = s.getState(), D = o ? O : bu(R);
            if (C(c.current, !1, !1), D) {
                const [V, L] = Su({ nodeId: o, dragItems: c.current, nodeInternals: M });
                D(N.sourceEvent, V, L);
            }
        } }).filter(N => { const C = N.target; return !N.button && (!n || !Wp(C, `.${n}`, e)) && (!r || Wp(C, r, e)); });
        return h.call(S), () => { h.on(".drag", null); };
    }
} }, [e, t, n, r, i, s, o, a, m]), l; }
function iv() { const e = Ve(); return T.useCallback(n => { const { nodeInternals: r, nodeExtent: o, updateNodePositions: i, getNodes: a, snapToGrid: s, snapGrid: l, onError: u, nodesDraggable: c } = e.getState(), f = a().filter(h => h.selected && (h.draggable || c && typeof h.draggable > "u")), d = s ? l[0] : 5, p = s ? l[1] : 5, g = n.isShiftPressed ? 4 : 1, y = n.x * d * g, x = n.y * p * g, m = f.map(h => { if (h.positionAbsolute) {
    const v = { x: h.positionAbsolute.x + y, y: h.positionAbsolute.y + x };
    s && (v.x = l[0] * Math.round(v.x / l[0]), v.y = l[1] * Math.round(v.y / l[1]));
    const { positionAbsolute: w, position: S } = rv(h, v, r, o, void 0, u);
    h.position = S, h.positionAbsolute = w;
} return h; }); i(m, !0, !1); }, []); }
const ho = { ArrowUp: { x: 0, y: -1 }, ArrowDown: { x: 0, y: 1 }, ArrowLeft: { x: -1, y: 0 }, ArrowRight: { x: 1, y: 0 } };
var ri = e => { const t = ({ id: n, type: r, data: o, xPos: i, yPos: a, xPosOrigin: s, yPosOrigin: l, selected: u, onClick: c, onMouseEnter: f, onMouseMove: d, onMouseLeave: p, onContextMenu: g, onDoubleClick: y, style: x, className: m, isDraggable: h, isSelectable: v, isConnectable: w, isFocusable: S, selectNodesOnDrag: N, sourcePosition: C, targetPosition: M, hidden: O, resizeObserver: R, dragHandle: D, zIndex: V, isParent: L, noDragClassName: E, noPanClassName: $, initialized: z, disableKeyboardA11y: P, ariaLabel: _, rfId: A }) => { const I = Ve(), F = T.useRef(null), H = T.useRef(C), X = T.useRef(M), Y = T.useRef(r), ee = v || h || c || f || d || p, Z = iv(), ne = ni(n, I.getState, f), le = ni(n, I.getState, d), Ce = ni(n, I.getState, p), Ne = ni(n, I.getState, g), yt = ni(n, I.getState, y), Pt = pe => { if (v && (!N || !h) && jc({ id: n, store: I, nodeRef: F }), c) {
    const et = I.getState().nodeInternals.get(n);
    c(pe, { ...et });
} }, Bt = pe => { if (!$c(pe))
    if (Iy.includes(pe.key) && v) {
        const et = pe.key === "Escape";
        jc({ id: n, store: I, unselect: et, nodeRef: F });
    }
    else
        !P && h && u && Object.prototype.hasOwnProperty.call(ho, pe.key) && (I.setState({ ariaLiveMessage: `Moved selected node ${pe.key.replace("Arrow", "").toLowerCase()}. New position, x: ${~~i}, y: ${~~a}` }), Z({ x: ho[pe.key].x, y: ho[pe.key].y, isShiftPressed: pe.shiftKey })); }; T.useEffect(() => { if (F.current && !O) {
    const pe = F.current;
    return R == null || R.observe(pe), () => R == null ? void 0 : R.unobserve(pe);
} }, [O]), T.useEffect(() => { const pe = Y.current !== r, et = H.current !== C, Q = X.current !== M; F.current && (pe || et || Q) && (pe && (Y.current = r), et && (H.current = C), Q && (X.current = M), I.getState().updateNodeDimensions([{ id: n, nodeElement: F.current, forceUpdate: !0 }])); }, [n, r, C, M]); const Te = ov({ nodeRef: F, disabled: O || !h, noDragClassName: E, handleSelector: D, nodeId: n, isSelectable: v, selectNodesOnDrag: N }); return O ? null : b.jsx("div", { className: Ze(["react-flow__node", `react-flow__node-${r}`, { [$]: h }, m, { selected: u, selectable: v, parent: L, dragging: Te }]), ref: F, style: { zIndex: V, transform: `translate(${s}px,${l}px)`, pointerEvents: ee ? "all" : "none", visibility: z ? "visible" : "hidden", ...x }, "data-id": n, "data-testid": `rf__node-${n}`, onMouseEnter: ne, onMouseMove: le, onMouseLeave: Ce, onContextMenu: Ne, onClick: Pt, onDoubleClick: yt, onKeyDown: S ? Bt : void 0, tabIndex: S ? 0 : void 0, role: S ? "button" : void 0, "aria-describedby": P ? void 0 : `${ev}-${A}`, "aria-label": _, children: b.jsx(dE, { value: n, children: b.jsx(e, { id: n, data: o, type: r, xPos: i, yPos: a, selected: u, isConnectable: w, sourcePosition: C, targetPosition: M, dragging: Te, dragHandle: D, zIndex: V }) }) }); }; return t.displayName = "NodeWrapper", T.memo(t); };
function qE(e) { const t = { input: ri(e.input || Gy), default: ri(e.default || Dc), output: ri(e.output || Zy), group: ri(e.group || vd) }, n = {}, r = Object.keys(e).filter(o => !["input", "default", "output", "group"].includes(o)).reduce((o, i) => (o[i] = ri(e[i] || Dc), o), n); return { ...t, ...r }; }
const WE = ({ x: e, y: t, width: n, height: r, origin: o }) => !n || !r ? { x: e, y: t } : o[0] < 0 || o[1] < 0 || o[0] > 1 || o[1] > 1 ? { x: e, y: t } : { x: e - n * o[0], y: t - r * o[1] }, YE = typeof document < "u" ? document : null;
var Wi = (e = null, t = { target: YE }) => { const [n, r] = T.useState(!1), o = T.useRef(!1), i = T.useRef(new Set([])), [a, s] = T.useMemo(() => { if (e !== null) {
    const u = (Array.isArray(e) ? e : [e]).filter(f => typeof f == "string").map(f => f.split("+")), c = u.reduce((f, d) => f.concat(...d), []);
    return [u, c];
} return [[], []]; }, [e]); return T.useEffect(() => { var l, u; if (e !== null) {
    const c = p => { if (o.current = p.ctrlKey || p.metaKey || p.shiftKey, !o.current && $c(p))
        return !1; const g = Qp(p.code, s); i.current.add(p[g]), Xp(a, i.current, !1) && (p.preventDefault(), r(!0)); }, f = p => { if (!o.current && $c(p))
        return !1; const g = Qp(p.code, s); Xp(a, i.current, !0) ? (r(!1), i.current.clear()) : i.current.delete(p[g]), o.current = !1; }, d = () => { i.current.clear(), r(!1); };
    return (l = t == null ? void 0 : t.target) == null || l.addEventListener("keydown", c), (u = t == null ? void 0 : t.target) == null || u.addEventListener("keyup", f), window.addEventListener("blur", d), () => { var p, g; (p = t == null ? void 0 : t.target) == null || p.removeEventListener("keydown", c), (g = t == null ? void 0 : t.target) == null || g.removeEventListener("keyup", f), window.removeEventListener("blur", d); };
} }, [e, r]), n; };
function Xp(e, t, n) { return e.filter(r => n || r.length === t.size).some(r => r.every(o => t.has(o))); }
function Qp(e, t) { return t.includes(e) ? "code" : "key"; }
function av(e, t, n, r) { var a, s; if (!e.parentNode)
    return n; const o = t.get(e.parentNode), i = po(o, r); return av(o, t, { x: (n.x ?? 0) + i.x, y: (n.y ?? 0) + i.y, z: (((a = o[Ae]) == null ? void 0 : a.z) ?? 0) > (n.z ?? 0) ? ((s = o[Ae]) == null ? void 0 : s.z) ?? 0 : n.z ?? 0 }, r); }
function sv(e, t, n) { e.forEach(r => { var o; if (r.parentNode && !e.has(r.parentNode))
    throw new Error(`Parent node ${r.parentNode} not found`); if (r.parentNode || n != null && n[r.id]) {
    const { x: i, y: a, z: s } = av(r, e, { ...r.position, z: ((o = r[Ae]) == null ? void 0 : o.z) ?? 0 }, t);
    r.positionAbsolute = { x: i, y: a }, r[Ae].z = s, n != null && n[r.id] && (r[Ae].isParent = !0);
} }); }
function ku(e, t, n, r) { const o = new Map, i = {}, a = r ? 1e3 : 0; return e.forEach(s => { var f; const l = (Et(s.zIndex) ? s.zIndex : 0) + (s.selected ? a : 0), u = t.get(s.id), c = { width: u == null ? void 0 : u.width, height: u == null ? void 0 : u.height, ...s, positionAbsolute: { x: s.position.x, y: s.position.y } }; s.parentNode && (c.parentNode = s.parentNode, i[s.parentNode] = !0), Object.defineProperty(c, Ae, { enumerable: !1, value: { handleBounds: (f = u == null ? void 0 : u[Ae]) == null ? void 0 : f.handleBounds, z: l } }), o.set(s.id, c); }), sv(o, n, i), o; }
function lv(e, t = {}) { const { getNodes: n, width: r, height: o, minZoom: i, maxZoom: a, d3Zoom: s, d3Selection: l, fitViewOnInitDone: u, fitViewOnInit: c, nodeOrigin: f } = e(), d = t.initial && !u && c; if (s && l && (d || !t.initial)) {
    const g = n().filter(x => { var h; const m = t.includeHiddenNodes ? x.width && x.height : !x.hidden; return (h = t.nodes) != null && h.length ? m && t.nodes.some(v => v.id === x.id) : m; }), y = g.every(x => x.width && x.height);
    if (g.length > 0 && y) {
        const x = Fy(g, f), [m, h, v] = By(x, r, o, t.minZoom ?? i, t.maxZoom ?? a, t.padding ?? .1), w = qn.translate(m, h).scale(v);
        return typeof t.duration == "number" && t.duration > 0 ? s.transform(dr(l, t.duration), w) : s.transform(l, w), !0;
    }
} return !1; }
function XE(e, t) { return e.forEach(n => { const r = t.get(n.id); r && t.set(r.id, { ...r, [Ae]: r[Ae], selected: n.selected }); }), new Map(t); }
function QE(e, t) { return t.map(n => { const r = e.find(o => o.id === n.id); return r && (n.selected = r.selected), n; }); }
function ja({ changedNodes: e, changedEdges: t, get: n, set: r }) { const { nodeInternals: o, edges: i, onNodesChange: a, onEdgesChange: s, hasDefaultNodes: l, hasDefaultEdges: u } = n(); e != null && e.length && (l && r({ nodeInternals: XE(e, o) }), a == null || a(e)), t != null && t.length && (u && r({ edges: QE(t, i) }), s == null || s(t)); }
const Fr = () => { }, GE = { zoomIn: Fr, zoomOut: Fr, zoomTo: Fr, getZoom: () => 1, setViewport: Fr, getViewport: () => ({ x: 0, y: 0, zoom: 1 }), fitView: () => !1, setCenter: Fr, fitBounds: Fr, project: e => e, viewportInitialized: !1 }, KE = e => ({ d3Zoom: e.d3Zoom, d3Selection: e.d3Selection }), ZE = () => { const e = Ve(), { d3Zoom: t, d3Selection: n } = me(KE, Le); return T.useMemo(() => n && t ? { zoomIn: o => t.scaleBy(dr(n, o == null ? void 0 : o.duration), 1.2), zoomOut: o => t.scaleBy(dr(n, o == null ? void 0 : o.duration), 1 / 1.2), zoomTo: (o, i) => t.scaleTo(dr(n, i == null ? void 0 : i.duration), o), getZoom: () => e.getState().transform[2], setViewport: (o, i) => { const [a, s, l] = e.getState().transform, u = qn.translate(o.x ?? a, o.y ?? s).scale(o.zoom ?? l); t.transform(dr(n, i == null ? void 0 : i.duration), u); }, getViewport: () => { const [o, i, a] = e.getState().transform; return { x: o, y: i, zoom: a }; }, fitView: o => lv(e.getState, o), setCenter: (o, i, a) => { const { width: s, height: l, maxZoom: u } = e.getState(), c = typeof (a == null ? void 0 : a.zoom) < "u" ? a.zoom : u, f = s / 2 - o * c, d = l / 2 - i * c, p = qn.translate(f, d).scale(c); t.transform(dr(n, a == null ? void 0 : a.duration), p); }, fitBounds: (o, i) => { const { width: a, height: s, minZoom: l, maxZoom: u } = e.getState(), [c, f, d] = By(o, a, s, l, u, (i == null ? void 0 : i.padding) ?? .1), p = qn.translate(c, f).scale(d); t.transform(dr(n, i == null ? void 0 : i.duration), p); }, project: o => { const { transform: i, snapToGrid: a, snapGrid: s } = e.getState(); return jy(o, i, a, s); }, viewportInitialized: !0 } : GE, [t, n]); };
function en() { const e = ZE(), t = Ve(), n = T.useCallback(() => t.getState().getNodes().map(y => ({ ...y })), []), r = T.useCallback(y => t.getState().nodeInternals.get(y), []), o = T.useCallback(() => { const { edges: y = [] } = t.getState(); return y.map(x => ({ ...x })); }, []), i = T.useCallback(y => { const { edges: x = [] } = t.getState(); return x.find(m => m.id === y); }, []), a = T.useCallback(y => { const { getNodes: x, setNodes: m, hasDefaultNodes: h, onNodesChange: v } = t.getState(), w = x(), S = typeof y == "function" ? y(w) : y; if (h)
    m(S);
else if (v) {
    const N = S.length === 0 ? w.map(C => ({ type: "remove", id: C.id })) : S.map(C => ({ item: C, type: "reset" }));
    v(N);
} }, []), s = T.useCallback(y => { const { edges: x = [], setEdges: m, hasDefaultEdges: h, onEdgesChange: v } = t.getState(), w = typeof y == "function" ? y(x) : y; if (h)
    m(w);
else if (v) {
    const S = w.length === 0 ? x.map(N => ({ type: "remove", id: N.id })) : w.map(N => ({ item: N, type: "reset" }));
    v(S);
} }, []), l = T.useCallback(y => { const x = Array.isArray(y) ? y : [y], { getNodes: m, setNodes: h, hasDefaultNodes: v, onNodesChange: w } = t.getState(); if (v) {
    const N = [...m(), ...x];
    h(N);
}
else if (w) {
    const S = x.map(N => ({ item: N, type: "add" }));
    w(S);
} }, []), u = T.useCallback(y => { const x = Array.isArray(y) ? y : [y], { edges: m = [], setEdges: h, hasDefaultEdges: v, onEdgesChange: w } = t.getState(); if (v)
    h([...m, ...x]);
else if (w) {
    const S = x.map(N => ({ item: N, type: "add" }));
    w(S);
} }, []), c = T.useCallback(() => { const { getNodes: y, edges: x = [], transform: m } = t.getState(), [h, v, w] = m; return { nodes: y().map(S => ({ ...S })), edges: x.map(S => ({ ...S })), viewport: { x: h, y: v, zoom: w } }; }, []), f = T.useCallback(({ nodes: y, edges: x }) => { const { nodeInternals: m, getNodes: h, edges: v, hasDefaultNodes: w, hasDefaultEdges: S, onNodesDelete: N, onEdgesDelete: C, onNodesChange: M, onEdgesChange: O } = t.getState(), R = (y || []).map($ => $.id), D = (x || []).map($ => $.id), V = h().reduce(($, z) => { const P = !R.includes(z.id) && z.parentNode && $.find(A => A.id === z.parentNode); return (typeof z.deletable == "boolean" ? z.deletable : !0) && (R.includes(z.id) || P) && $.push(z), $; }, []), L = v.filter($ => typeof $.deletable == "boolean" ? $.deletable : !0), E = L.filter($ => D.includes($.id)); if (V || E) {
    const $ = Hy(V, L), z = [...E, ...$], P = z.reduce((_, A) => (_.includes(A.id) || _.push(A.id), _), []);
    if ((S || w) && (S && t.setState({ edges: v.filter(_ => !P.includes(_.id)) }), w && (V.forEach(_ => { m.delete(_.id); }), t.setState({ nodeInternals: new Map(m) }))), P.length > 0 && (C == null || C(z), O && O(P.map(_ => ({ id: _, type: "remove" })))), V.length > 0 && (N == null || N(V), M)) {
        const _ = V.map(A => ({ id: A.id, type: "remove" }));
        M(_);
    }
} }, []), d = T.useCallback(y => { const x = iE(y), m = x ? null : t.getState().nodeInternals.get(y.id); return [x ? y : Ip(m), m, x]; }, []), p = T.useCallback((y, x = !0, m) => { const [h, v, w] = d(y); return h ? (m || t.getState().getNodes()).filter(S => { if (!w && (S.id === v.id || !S.positionAbsolute))
    return !1; const N = Ip(S), C = Oc(N, h); return x && C > 0 || C >= y.width * y.height; }) : []; }, []), g = T.useCallback((y, x, m = !0) => { const [h] = d(y); if (!h)
    return !1; const v = Oc(h, x); return m && v > 0 || v >= y.width * y.height; }, []); return T.useMemo(() => ({ ...e, getNodes: n, getNode: r, getEdges: o, getEdge: i, setNodes: a, setEdges: s, addNodes: l, addEdges: u, toObject: c, deleteElements: f, getIntersectingNodes: p, isNodeIntersecting: g }), [e, n, r, o, i, a, s, l, u, c, f, p, g]); }
var JE = ({ deleteKeyCode: e, multiSelectionKeyCode: t }) => { const n = Ve(), { deleteElements: r } = en(), o = Wi(e), i = Wi(t); T.useEffect(() => { if (o) {
    const { edges: a, getNodes: s } = n.getState(), l = s().filter(c => c.selected), u = a.filter(c => c.selected);
    r({ nodes: l, edges: u }), n.setState({ nodesSelectionActive: !1 });
} }, [o]), T.useEffect(() => { n.setState({ multiSelectionActive: i }); }, [i]); };
function e4(e) { const t = Ve(); T.useEffect(() => { let n; const r = () => { var i, a; if (!e.current)
    return; const o = fd(e.current); (o.height === 0 || o.width === 0) && ((a = (i = t.getState()).onError) == null || a.call(i, "004", Qn.error004())), t.setState({ width: o.width || 500, height: o.height || 500 }); }; return r(), window.addEventListener("resize", r), e.current && (n = new ResizeObserver(() => r()), n.observe(e.current)), () => { window.removeEventListener("resize", r), n && e.current && n.unobserve(e.current); }; }, []); }
const wd = { position: "absolute", width: "100%", height: "100%", top: 0, left: 0 }, t4 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Eu = e => ({ x: e.x, y: e.y, zoom: e.k }), Vr = (e, t) => e.target.closest(`.${t}`), Gp = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), n4 = e => ({ d3Zoom: e.d3Zoom, d3Selection: e.d3Selection, d3ZoomHandler: e.d3ZoomHandler, userSelectionActive: e.userSelectionActive }), r4 = ({ onMove: e, onMoveStart: t, onMoveEnd: n, onPaneContextMenu: r, zoomOnScroll: o = !0, zoomOnPinch: i = !0, panOnScroll: a = !1, panOnScrollSpeed: s = .5, panOnScrollMode: l = mo.Free, zoomOnDoubleClick: u = !0, elementsSelectable: c, panOnDrag: f = !0, defaultViewport: d, translateExtent: p, minZoom: g, maxZoom: y, zoomActivationKeyCode: x, preventScrolling: m = !0, children: h, noWheelClassName: v, noPanClassName: w }) => { const S = T.useRef(), N = Ve(), C = T.useRef(!1), M = T.useRef(!1), O = T.useRef(null), R = T.useRef({ x: 0, y: 0, zoom: 0 }), { d3Zoom: D, d3Selection: V, d3ZoomHandler: L, userSelectionActive: E } = me(n4, Le), $ = Wi(x), z = T.useRef(0); return e4(O), T.useEffect(() => { if (O.current) {
    const P = O.current.getBoundingClientRect(), _ = K3().scaleExtent([g, y]).translateExtent(p), A = Lt(O.current).call(_), I = qn.translate(d.x, d.y).scale(To(d.zoom, g, y)), F = [[0, 0], [P.width, P.height]], H = _.constrain()(I, F, p);
    _.transform(A, H), N.setState({ d3Zoom: _, d3Selection: A, d3ZoomHandler: A.on("wheel.zoom"), transform: [H.x, H.y, H.k], domNode: O.current.closest(".react-flow") });
} }, []), T.useEffect(() => { V && D && (a && !$ && !E ? V.on("wheel.zoom", P => { if (Vr(P, v))
    return !1; P.preventDefault(), P.stopImmediatePropagation(); const _ = V.property("__zoom").k || 1; if (P.ctrlKey && i) {
    const H = Wt(P), X = -P.deltaY * (P.deltaMode === 1 ? .05 : P.deltaMode ? 1 : .002) * 10, Y = _ * Math.pow(2, X);
    D.scaleTo(V, Y, H);
    return;
} const A = P.deltaMode === 1 ? 20 : 1, I = l === mo.Vertical ? 0 : P.deltaX * A, F = l === mo.Horizontal ? 0 : P.deltaY * A; D.translateBy(V, -(I / _) * s, -(F / _) * s); }, { passive: !1 }) : typeof L < "u" && V.on("wheel.zoom", function (P, _) { if (!m || Vr(P, v))
    return null; P.preventDefault(), L.call(this, P, _); }, { passive: !1 })); }, [E, a, l, V, D, L, $, i, m, v]), T.useEffect(() => { D && D.on("start", P => { var A; if (!P.sourceEvent)
    return null; z.current = P.sourceEvent.button; const { onViewportChangeStart: _ } = N.getState(); if (C.current = !0, ((A = P.sourceEvent) == null ? void 0 : A.type) === "mousedown" && N.setState({ paneDragging: !0 }), t || _) {
    const I = Eu(P.transform);
    R.current = I, _ == null || _(I), t == null || t(P.sourceEvent, I);
} }); }, [D, t]), T.useEffect(() => { D && (E && !C.current ? D.on("zoom", null) : E || D.on("zoom", P => { const { onViewportChange: _ } = N.getState(); if (N.setState({ transform: [P.transform.x, P.transform.y, P.transform.k] }), M.current = !!(r && Gp(f, z.current ?? 0)), e || _) {
    const A = Eu(P.transform);
    _ == null || _(A), e == null || e(P.sourceEvent, A);
} })); }, [E, D, e, f, r]), T.useEffect(() => { D && D.on("end", P => { if (!P.sourceEvent)
    return null; const { onViewportChangeEnd: _ } = N.getState(); if (C.current = !1, N.setState({ paneDragging: !1 }), r && Gp(f, z.current ?? 0) && !M.current && r(P.sourceEvent), M.current = !1, (n || _) && t4(R.current, P.transform)) {
    const A = Eu(P.transform);
    R.current = A, clearTimeout(S.current), S.current = setTimeout(() => { _ == null || _(A), n == null || n(P.sourceEvent, A); }, a ? 150 : 0);
} }); }, [D, a, f, n, r]), T.useEffect(() => { D && D.filter(P => { const _ = $ || o, A = i && P.ctrlKey; if (P.button === 1 && P.type === "mousedown" && (Vr(P, "react-flow__node") || Vr(P, "react-flow__edge")))
    return !0; if (!f && !_ && !a && !u && !i || E || !u && P.type === "dblclick" || Vr(P, v) && P.type === "wheel" || Vr(P, w) && P.type !== "wheel" || !i && P.ctrlKey && P.type === "wheel" || !_ && !a && !A && P.type === "wheel" || !f && (P.type === "mousedown" || P.type === "touchstart") || Array.isArray(f) && !f.includes(P.button) && (P.type === "mousedown" || P.type === "touchstart"))
    return !1; const I = Array.isArray(f) && f.includes(P.button) || !P.button || P.button <= 1; return (!P.ctrlKey || P.type === "wheel") && I; }); }, [E, D, o, i, a, u, f, c, $]), b.jsx("div", { className: "react-flow__renderer", ref: O, style: wd, children: h }); }, o4 = e => ({ userSelectionActive: e.userSelectionActive, userSelectionRect: e.userSelectionRect });
function i4() { const { userSelectionActive: e, userSelectionRect: t } = me(o4, Le); return e && t ? b.jsx("div", { className: "react-flow__selection react-flow__container", style: { width: t.width, height: t.height, transform: `translate(${t.x}px, ${t.y}px)` } }) : null; }
function Kp(e, t) { const n = e.find(r => r.id === t.parentNode); if (n) {
    const r = t.position.x + t.width - n.width, o = t.position.y + t.height - n.height;
    if (r > 0 || o > 0 || t.position.x < 0 || t.position.y < 0) {
        if (n.style = { ...n.style }, n.style.width = n.style.width ?? n.width, n.style.height = n.style.height ?? n.height, r > 0 && (n.style.width += r), o > 0 && (n.style.height += o), t.position.x < 0) {
            const i = Math.abs(t.position.x);
            n.position.x = n.position.x - i, n.style.width += i, t.position.x = 0;
        }
        if (t.position.y < 0) {
            const i = Math.abs(t.position.y);
            n.position.y = n.position.y - i, n.style.height += i, t.position.y = 0;
        }
        n.width = n.style.width, n.height = n.style.height;
    }
} }
function uv(e, t) { if (e.some(r => r.type === "reset"))
    return e.filter(r => r.type === "reset").map(r => r.item); const n = e.filter(r => r.type === "add").map(r => r.item); return t.reduce((r, o) => { const i = e.filter(s => s.id === o.id); if (i.length === 0)
    return r.push(o), r; const a = { ...o }; for (const s of i)
    if (s)
        switch (s.type) {
            case "select": {
                a.selected = s.selected;
                break;
            }
            case "position": {
                typeof s.position < "u" && (a.position = s.position), typeof s.positionAbsolute < "u" && (a.positionAbsolute = s.positionAbsolute), typeof s.dragging < "u" && (a.dragging = s.dragging), a.expandParent && Kp(r, a);
                break;
            }
            case "dimensions": {
                typeof s.dimensions < "u" && (a.width = s.dimensions.width, a.height = s.dimensions.height), typeof s.updateStyle < "u" && (a.style = { ...a.style || {}, ...s.dimensions }), typeof s.resizing == "boolean" && (a.resizing = s.resizing), a.expandParent && Kp(r, a);
                break;
            }
            case "remove": return r;
        } return r.push(a), r; }, n); }
function cv(e, t) { return uv(e, t); }
function a4(e, t) { return uv(e, t); }
const Pn = (e, t) => ({ id: e, type: "select", selected: t });
function eo(e, t) { return e.reduce((n, r) => { const o = t.includes(r.id); return !r.selected && o ? (r.selected = !0, n.push(Pn(r.id, !0))) : r.selected && !o && (r.selected = !1, n.push(Pn(r.id, !1))), n; }, []); }
const Nu = (e, t) => n => { n.target === t.current && (e == null || e(n)); }, s4 = e => ({ userSelectionActive: e.userSelectionActive, elementsSelectable: e.elementsSelectable, dragging: e.paneDragging }), fv = T.memo(({ isSelecting: e, selectionMode: t = qi.Full, panOnDrag: n, onSelectionStart: r, onSelectionEnd: o, onPaneClick: i, onPaneContextMenu: a, onPaneScroll: s, onPaneMouseEnter: l, onPaneMouseMove: u, onPaneMouseLeave: c, children: f }) => { const d = T.useRef(null), p = Ve(), g = T.useRef(0), y = T.useRef(0), x = T.useRef(), { userSelectionActive: m, elementsSelectable: h, dragging: v } = me(s4, Le), w = () => { p.setState({ userSelectionActive: !1, userSelectionRect: null }), g.current = 0, y.current = 0; }, S = L => { i == null || i(L), p.getState().resetSelectedElements(), p.setState({ nodesSelectionActive: !1 }); }, N = L => { if (Array.isArray(n) && (n != null && n.includes(2))) {
    L.preventDefault();
    return;
} a == null || a(L); }, C = s ? L => s(L) : void 0, M = L => { const { resetSelectedElements: E, domNode: $ } = p.getState(); if (x.current = $ == null ? void 0 : $.getBoundingClientRect(), !h || !e || L.button !== 0 || L.target !== d.current || !x.current)
    return; const { x: z, y: P } = Wn(L, x.current); E(), p.setState({ userSelectionRect: { width: 0, height: 0, startX: z, startY: P, x: z, y: P } }), r == null || r(L); }, O = L => { const { userSelectionRect: E, nodeInternals: $, edges: z, transform: P, onNodesChange: _, onEdgesChange: A, nodeOrigin: I, getNodes: F } = p.getState(); if (!e || !x.current || !E)
    return; p.setState({ userSelectionActive: !0, nodesSelectionActive: !1 }); const H = Wn(L, x.current), X = E.startX ?? 0, Y = E.startY ?? 0, ee = { ...E, x: H.x < X ? H.x : X, y: H.y < Y ? H.y : Y, width: Math.abs(H.x - X), height: Math.abs(H.y - Y) }, Z = F(), ne = Vy($, ee, P, t === qi.Partial, !0, I), le = Hy(ne, z).map(Ne => Ne.id), Ce = ne.map(Ne => Ne.id); if (g.current !== Ce.length) {
    g.current = Ce.length;
    const Ne = eo(Z, Ce);
    Ne.length && (_ == null || _(Ne));
} if (y.current !== le.length) {
    y.current = le.length;
    const Ne = eo(z, le);
    Ne.length && (A == null || A(Ne));
} p.setState({ userSelectionRect: ee }); }, R = L => { if (L.button !== 0)
    return; const { userSelectionRect: E } = p.getState(); !m && E && L.target === d.current && (S == null || S(L)), p.setState({ nodesSelectionActive: g.current > 0 }), w(), o == null || o(L); }, D = L => { m && (p.setState({ nodesSelectionActive: g.current > 0 }), o == null || o(L)), w(); }, V = h && (e || m); return b.jsxs("div", { className: Ze(["react-flow__pane", { dragging: v, selection: e }]), onClick: V ? void 0 : Nu(S, d), onContextMenu: Nu(N, d), onWheel: Nu(C, d), onMouseEnter: V ? void 0 : l, onMouseDown: V ? M : void 0, onMouseMove: V ? O : u, onMouseUp: V ? R : void 0, onMouseLeave: V ? D : c, ref: d, style: wd, children: [f, b.jsx(i4, {})] }); });
fv.displayName = "Pane";
const l4 = e => { const t = e.getNodes().filter(n => n.selected); return { ...Fy(t, e.nodeOrigin), transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`, userSelectionActive: e.userSelectionActive }; };
function u4({ onSelectionContextMenu: e, noPanClassName: t, disableKeyboardA11y: n }) { const r = Ve(), { width: o, height: i, x: a, y: s, transformString: l, userSelectionActive: u } = me(l4, Le), c = iv(), f = T.useRef(null); if (T.useEffect(() => { var g; n || (g = f.current) == null || g.focus({ preventScroll: !0 }); }, [n]), ov({ nodeRef: f }), u || !o || !i)
    return null; const d = e ? g => { const y = r.getState().getNodes().filter(x => x.selected); e(g, y); } : void 0, p = g => { Object.prototype.hasOwnProperty.call(ho, g.key) && c({ x: ho[g.key].x, y: ho[g.key].y, isShiftPressed: g.shiftKey }); }; return b.jsx("div", { className: Ze(["react-flow__nodesselection", "react-flow__container", t]), style: { transform: l }, children: b.jsx("div", { ref: f, className: "react-flow__nodesselection-rect", onContextMenu: d, tabIndex: n ? void 0 : -1, onKeyDown: n ? void 0 : p, style: { width: o, height: i, top: s, left: a } }) }); }
var c4 = T.memo(u4);
const f4 = e => e.nodesSelectionActive, dv = ({ children: e, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: r, onPaneMouseLeave: o, onPaneContextMenu: i, onPaneScroll: a, deleteKeyCode: s, onMove: l, onMoveStart: u, onMoveEnd: c, selectionKeyCode: f, selectionOnDrag: d, selectionMode: p, onSelectionStart: g, onSelectionEnd: y, multiSelectionKeyCode: x, panActivationKeyCode: m, zoomActivationKeyCode: h, elementsSelectable: v, zoomOnScroll: w, zoomOnPinch: S, panOnScroll: N, panOnScrollSpeed: C, panOnScrollMode: M, zoomOnDoubleClick: O, panOnDrag: R, defaultViewport: D, translateExtent: V, minZoom: L, maxZoom: E, preventScrolling: $, onSelectionContextMenu: z, noWheelClassName: P, noPanClassName: _, disableKeyboardA11y: A }) => { const I = me(f4), F = Wi(f), X = Wi(m) || R, Y = F || d && X !== !0; return JE({ deleteKeyCode: s, multiSelectionKeyCode: x }), b.jsx(r4, { onMove: l, onMoveStart: u, onMoveEnd: c, onPaneContextMenu: i, elementsSelectable: v, zoomOnScroll: w, zoomOnPinch: S, panOnScroll: N, panOnScrollSpeed: C, panOnScrollMode: M, zoomOnDoubleClick: O, panOnDrag: !F && X, defaultViewport: D, translateExtent: V, minZoom: L, maxZoom: E, zoomActivationKeyCode: h, preventScrolling: $, noWheelClassName: P, noPanClassName: _, children: b.jsxs(fv, { onSelectionStart: g, onSelectionEnd: y, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: r, onPaneMouseLeave: o, onPaneContextMenu: i, onPaneScroll: a, panOnDrag: X, isSelecting: !!Y, selectionMode: p, children: [e, I && b.jsx(c4, { onSelectionContextMenu: z, noPanClassName: _, disableKeyboardA11y: A })] }) }); };
dv.displayName = "FlowRenderer";
var d4 = T.memo(dv);
function m4(e) { return me(T.useCallback(n => e ? Vy(n.nodeInternals, { x: 0, y: 0, width: n.width, height: n.height }, n.transform, !0) : n.getNodes(), [e])); }
const p4 = e => ({ nodesDraggable: e.nodesDraggable, nodesConnectable: e.nodesConnectable, nodesFocusable: e.nodesFocusable, elementsSelectable: e.elementsSelectable, updateNodeDimensions: e.updateNodeDimensions, onError: e.onError }), mv = e => { const { nodesDraggable: t, nodesConnectable: n, nodesFocusable: r, elementsSelectable: o, updateNodeDimensions: i, onError: a } = me(p4, Le), s = m4(e.onlyRenderVisibleElements), l = T.useRef(), u = T.useMemo(() => { if (typeof ResizeObserver > "u")
    return null; const c = new ResizeObserver(f => { const d = f.map(p => ({ id: p.target.getAttribute("data-id"), nodeElement: p.target, forceUpdate: !0 })); i(d); }); return l.current = c, c; }, []); return T.useEffect(() => () => { var c; (c = l == null ? void 0 : l.current) == null || c.disconnect(); }, []), b.jsx("div", { className: "react-flow__nodes", style: wd, children: s.map(c => { var S, N; let f = c.type || "default"; e.nodeTypes[f] || (a == null || a("003", Qn.error003(f)), f = "default"); const d = e.nodeTypes[f] || e.nodeTypes.default, p = !!(c.draggable || t && typeof c.draggable > "u"), g = !!(c.selectable || o && typeof c.selectable > "u"), y = !!(c.connectable || n && typeof c.connectable > "u"), x = !!(c.focusable || r && typeof c.focusable > "u"), m = e.nodeExtent ? dd(c.positionAbsolute, e.nodeExtent) : c.positionAbsolute, h = (m == null ? void 0 : m.x) ?? 0, v = (m == null ? void 0 : m.y) ?? 0, w = WE({ x: h, y: v, width: c.width ?? 0, height: c.height ?? 0, origin: e.nodeOrigin }); return b.jsx(d, { id: c.id, className: c.className, style: c.style, type: f, data: c.data, sourcePosition: c.sourcePosition || W.Bottom, targetPosition: c.targetPosition || W.Top, hidden: c.hidden, xPos: h, yPos: v, xPosOrigin: w.x, yPosOrigin: w.y, selectNodesOnDrag: e.selectNodesOnDrag, onClick: e.onNodeClick, onMouseEnter: e.onNodeMouseEnter, onMouseMove: e.onNodeMouseMove, onMouseLeave: e.onNodeMouseLeave, onContextMenu: e.onNodeContextMenu, onDoubleClick: e.onNodeDoubleClick, selected: !!c.selected, isDraggable: p, isSelectable: g, isConnectable: y, isFocusable: x, resizeObserver: u, dragHandle: c.dragHandle, zIndex: ((S = c[Ae]) == null ? void 0 : S.z) ?? 0, isParent: !!((N = c[Ae]) != null && N.isParent), noDragClassName: e.noDragClassName, noPanClassName: e.noPanClassName, initialized: !!c.width && !!c.height, rfId: e.rfId, disableKeyboardA11y: e.disableKeyboardA11y, ariaLabel: c.ariaLabel }, c.id); }) }); };
mv.displayName = "NodeRenderer";
var h4 = T.memo(mv);
const g4 = [{ level: 0, isMaxLevel: !0, edges: [] }];
function y4(e, t, n = !1) { let r = -1; const o = e.reduce((a, s) => { var c, f; const l = Et(s.zIndex); let u = l ? s.zIndex : 0; if (n) {
    const d = t.get(s.target), p = t.get(s.source), g = s.selected || (d == null ? void 0 : d.selected) || (p == null ? void 0 : p.selected), y = Math.max(((c = p == null ? void 0 : p[Ae]) == null ? void 0 : c.z) || 0, ((f = d == null ? void 0 : d[Ae]) == null ? void 0 : f.z) || 0, 1e3);
    u = (l ? s.zIndex : 0) + (g ? y : 0);
} return a[u] ? a[u].push(s) : a[u] = [s], r = u > r ? u : r, a; }, {}), i = Object.entries(o).map(([a, s]) => { const l = +a; return { edges: s, level: l, isMaxLevel: l === r }; }); return i.length === 0 ? g4 : i; }
function v4(e, t, n) { const r = me(T.useCallback(o => e ? o.edges.filter(i => { const a = t.get(i.source), s = t.get(i.target); return (a == null ? void 0 : a.width) && (a == null ? void 0 : a.height) && (s == null ? void 0 : s.width) && (s == null ? void 0 : s.height) && VE({ sourcePos: a.positionAbsolute || { x: 0, y: 0 }, targetPos: s.positionAbsolute || { x: 0, y: 0 }, sourceWidth: a.width, sourceHeight: a.height, targetWidth: s.width, targetHeight: s.height, width: o.width, height: o.height, transform: o.transform }); }) : o.edges, [e, t])); return y4(r, t, n); }
const w4 = ({ color: e = "none", strokeWidth: t = 1 }) => b.jsx("polyline", { stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: t, fill: "none", points: "-5,-4 0,0 -5,4" }), x4 = ({ color: e = "none", strokeWidth: t = 1 }) => b.jsx("polyline", { stroke: e, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: t, fill: e, points: "-5,-4 0,0 -5,4 -5,-4" }), Zp = { [Xs.Arrow]: w4, [Xs.ArrowClosed]: x4 };
function S4(e) { const t = Ve(); return T.useMemo(() => { var o, i; return Object.prototype.hasOwnProperty.call(Zp, e) ? Zp[e] : ((i = (o = t.getState()).onError) == null || i.call(o, "009", Qn.error009(e)), null); }, [e]); }
const b4 = ({ id: e, type: t, color: n, width: r = 12.5, height: o = 12.5, markerUnits: i = "strokeWidth", strokeWidth: a, orient: s = "auto-start-reverse" }) => { const l = S4(t); return l ? b.jsx("marker", { className: "react-flow__arrowhead", id: e, markerWidth: `${r}`, markerHeight: `${o}`, viewBox: "-10 -10 20 20", markerUnits: i, orient: s, refX: "0", refY: "0", children: b.jsx(l, { color: n, strokeWidth: a }) }) : null; }, k4 = ({ defaultColor: e, rfId: t }) => n => { const r = []; return n.edges.reduce((o, i) => ([i.markerStart, i.markerEnd].forEach(a => { if (a && typeof a == "object") {
    const s = Rc(a, t);
    r.includes(s) || (o.push({ id: s, color: a.color || e, ...a }), r.push(s));
} }), o), []).sort((o, i) => o.id.localeCompare(i.id)); }, pv = ({ defaultColor: e, rfId: t }) => { const n = me(T.useCallback(k4({ defaultColor: e, rfId: t }), [e, t]), (r, o) => !(r.length !== o.length || r.some((i, a) => i.id !== o[a].id))); return b.jsx("defs", { children: n.map(r => b.jsx(b4, { id: r.id, type: r.type, color: r.color, width: r.width, height: r.height, markerUnits: r.markerUnits, strokeWidth: r.strokeWidth, orient: r.orient }, r.id)) }); };
pv.displayName = "MarkerDefinitions";
var E4 = T.memo(pv);
const N4 = e => ({ nodesConnectable: e.nodesConnectable, edgesFocusable: e.edgesFocusable, edgesUpdatable: e.edgesUpdatable, elementsSelectable: e.elementsSelectable, width: e.width, height: e.height, connectionMode: e.connectionMode, nodeInternals: e.nodeInternals, onError: e.onError }), hv = ({ defaultMarkerColor: e, onlyRenderVisibleElements: t, elevateEdgesOnSelect: n, rfId: r, edgeTypes: o, noPanClassName: i, onEdgeUpdate: a, onEdgeContextMenu: s, onEdgeMouseEnter: l, onEdgeMouseMove: u, onEdgeMouseLeave: c, onEdgeClick: f, edgeUpdaterRadius: d, onEdgeDoubleClick: p, onEdgeUpdateStart: g, onEdgeUpdateEnd: y, children: x }) => { const { edgesFocusable: m, edgesUpdatable: h, elementsSelectable: v, width: w, height: S, connectionMode: N, nodeInternals: C, onError: M } = me(N4, Le), O = v4(t, C, n); return w ? b.jsxs(b.Fragment, { children: [O.map(({ level: R, edges: D, isMaxLevel: V }) => b.jsxs("svg", { style: { zIndex: R }, width: w, height: S, className: "react-flow__edges react-flow__container", children: [V && b.jsx(E4, { defaultColor: e, rfId: r }), b.jsx("g", { children: D.map(L => { const [E, $, z] = qp(C.get(L.source)), [P, _, A] = qp(C.get(L.target)); if (!z || !A)
                        return null; let I = L.type || "default"; o[I] || (M == null || M("011", Qn.error011(I)), I = "default"); const F = o[I] || o.default, H = N === Mr.Strict ? _.target : (_.target ?? []).concat(_.source ?? []), X = Up($.source, L.sourceHandle), Y = Up(H, L.targetHandle), ee = (X == null ? void 0 : X.position) || W.Bottom, Z = (Y == null ? void 0 : Y.position) || W.Top, ne = !!(L.focusable || m && typeof L.focusable > "u"), le = typeof a < "u" && (L.updatable || h && typeof L.updatable > "u"); if (!X || !Y)
                        return M == null || M("008", Qn.error008(X, L)), null; const { sourceX: Ce, sourceY: Ne, targetX: yt, targetY: Pt } = FE(E, X, ee, P, Y, Z); return b.jsx(F, { id: L.id, className: Ze([L.className, i]), type: I, data: L.data, selected: !!L.selected, animated: !!L.animated, hidden: !!L.hidden, label: L.label, labelStyle: L.labelStyle, labelShowBg: L.labelShowBg, labelBgStyle: L.labelBgStyle, labelBgPadding: L.labelBgPadding, labelBgBorderRadius: L.labelBgBorderRadius, style: L.style, source: L.source, target: L.target, sourceHandleId: L.sourceHandle, targetHandleId: L.targetHandle, markerEnd: L.markerEnd, markerStart: L.markerStart, sourceX: Ce, sourceY: Ne, targetX: yt, targetY: Pt, sourcePosition: ee, targetPosition: Z, elementsSelectable: v, onEdgeUpdate: a, onContextMenu: s, onMouseEnter: l, onMouseMove: u, onMouseLeave: c, onClick: f, edgeUpdaterRadius: d, onEdgeDoubleClick: p, onEdgeUpdateStart: g, onEdgeUpdateEnd: y, rfId: r, ariaLabel: L.ariaLabel, isFocusable: ne, isUpdatable: le, pathOptions: "pathOptions" in L ? L.pathOptions : void 0, interactionWidth: L.interactionWidth }, L.id); }) })] }, R)), x] }) : null; };
hv.displayName = "EdgeRenderer";
var _4 = T.memo(hv);
const C4 = e => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function T4({ children: e }) { const t = me(C4); return b.jsx("div", { className: "react-flow__viewport react-flow__container", style: { transform: t }, children: e }); }
function M4(e) { const t = en(), n = T.useRef(!1); T.useEffect(() => { !n.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), n.current = !0); }, [e, t.viewportInitialized]); }
const P4 = { [W.Left]: W.Right, [W.Right]: W.Left, [W.Top]: W.Bottom, [W.Bottom]: W.Top }, gv = ({ nodeId: e, handleType: t, style: n, type: r = In.Bezier, CustomComponent: o, connectionStatus: i }) => { var N, C, M; const { fromNode: a, handleId: s, toX: l, toY: u, connectionMode: c } = me(T.useCallback(O => ({ fromNode: O.nodeInternals.get(e), handleId: O.connectionHandleId, toX: (O.connectionPosition.x - O.transform[0]) / O.transform[2], toY: (O.connectionPosition.y - O.transform[1]) / O.transform[2], connectionMode: O.connectionMode }), [e]), Le), f = (N = a == null ? void 0 : a[Ae]) == null ? void 0 : N.handleBounds; let d = f == null ? void 0 : f[t]; if (c === Mr.Loose && (d = d || (f == null ? void 0 : f[t === "source" ? "target" : "source"])), !a || !d)
    return null; const p = s ? d.find(O => O.id === s) : d[0], g = p ? p.x + p.width / 2 : (a.width ?? 0) / 2, y = p ? p.y + p.height / 2 : a.height ?? 0, x = (((C = a.positionAbsolute) == null ? void 0 : C.x) ?? 0) + g, m = (((M = a.positionAbsolute) == null ? void 0 : M.y) ?? 0) + y, h = p == null ? void 0 : p.position, v = h ? P4[h] : null; if (!h || !v)
    return null; if (o)
    return b.jsx(o, { connectionLineType: r, connectionLineStyle: n, fromNode: a, fromHandle: p, fromX: x, fromY: m, toX: l, toY: u, fromPosition: h, toPosition: v, connectionStatus: i }); let w = ""; const S = { sourceX: x, sourceY: m, sourcePosition: h, targetX: l, targetY: u, targetPosition: v }; return r === In.Bezier ? [w] = Dy(S) : r === In.Step ? [w] = Lc({ ...S, borderRadius: 0 }) : r === In.SmoothStep ? [w] = Lc(S) : r === In.SimpleBezier ? [w] = Ry(S) : w = `M${x},${m} ${l},${u}`, b.jsx("path", { d: w, fill: "none", className: "react-flow__connection-path", style: n }); };
gv.displayName = "ConnectionLine";
const z4 = e => ({ nodeId: e.connectionNodeId, handleType: e.connectionHandleType, nodesConnectable: e.nodesConnectable, connectionStatus: e.connectionStatus, width: e.width, height: e.height });
function A4({ containerStyle: e, style: t, type: n, component: r }) { const { nodeId: o, handleType: i, nodesConnectable: a, width: s, height: l, connectionStatus: u } = me(z4, Le); return !(o && i && s && a) ? null : b.jsx("svg", { style: e, width: s, height: l, className: "react-flow__edges react-flow__connectionline react-flow__container", children: b.jsx("g", { className: Ze(["react-flow__connection", u]), children: b.jsx(gv, { nodeId: o, handleType: i, style: t, type: n, CustomComponent: r, connectionStatus: u }) }) }); }
const yv = ({ nodeTypes: e, edgeTypes: t, onMove: n, onMoveStart: r, onMoveEnd: o, onInit: i, onNodeClick: a, onEdgeClick: s, onNodeDoubleClick: l, onEdgeDoubleClick: u, onNodeMouseEnter: c, onNodeMouseMove: f, onNodeMouseLeave: d, onNodeContextMenu: p, onSelectionContextMenu: g, onSelectionStart: y, onSelectionEnd: x, connectionLineType: m, connectionLineStyle: h, connectionLineComponent: v, connectionLineContainerStyle: w, selectionKeyCode: S, selectionOnDrag: N, selectionMode: C, multiSelectionKeyCode: M, panActivationKeyCode: O, zoomActivationKeyCode: R, deleteKeyCode: D, onlyRenderVisibleElements: V, elementsSelectable: L, selectNodesOnDrag: E, defaultViewport: $, translateExtent: z, minZoom: P, maxZoom: _, preventScrolling: A, defaultMarkerColor: I, zoomOnScroll: F, zoomOnPinch: H, panOnScroll: X, panOnScrollSpeed: Y, panOnScrollMode: ee, zoomOnDoubleClick: Z, panOnDrag: ne, onPaneClick: le, onPaneMouseEnter: Ce, onPaneMouseMove: Ne, onPaneMouseLeave: yt, onPaneScroll: Pt, onPaneContextMenu: Bt, onEdgeUpdate: Te, onEdgeContextMenu: pe, onEdgeMouseEnter: et, onEdgeMouseMove: Q, onEdgeMouseLeave: Sn, edgeUpdaterRadius: nr, onEdgeUpdateStart: Vo, onEdgeUpdateEnd: Ho, noDragClassName: Or, noWheelClassName: rr, noPanClassName: bn, elevateEdgesOnSelect: $r, disableKeyboardA11y: kn, nodeOrigin: or, nodeExtent: Bo, rfId: Lr }) => (M4(i), b.jsx(d4, { onPaneClick: le, onPaneMouseEnter: Ce, onPaneMouseMove: Ne, onPaneMouseLeave: yt, onPaneContextMenu: Bt, onPaneScroll: Pt, deleteKeyCode: D, selectionKeyCode: S, selectionOnDrag: N, selectionMode: C, onSelectionStart: y, onSelectionEnd: x, multiSelectionKeyCode: M, panActivationKeyCode: O, zoomActivationKeyCode: R, elementsSelectable: L, onMove: n, onMoveStart: r, onMoveEnd: o, zoomOnScroll: F, zoomOnPinch: H, zoomOnDoubleClick: Z, panOnScroll: X, panOnScrollSpeed: Y, panOnScrollMode: ee, panOnDrag: ne, defaultViewport: $, translateExtent: z, minZoom: P, maxZoom: _, onSelectionContextMenu: g, preventScrolling: A, noDragClassName: Or, noWheelClassName: rr, noPanClassName: bn, disableKeyboardA11y: kn, children: b.jsxs(T4, { children: [b.jsx(_4, { edgeTypes: t, onEdgeClick: s, onEdgeDoubleClick: u, onEdgeUpdate: Te, onlyRenderVisibleElements: V, onEdgeContextMenu: pe, onEdgeMouseEnter: et, onEdgeMouseMove: Q, onEdgeMouseLeave: Sn, onEdgeUpdateStart: Vo, onEdgeUpdateEnd: Ho, edgeUpdaterRadius: nr, defaultMarkerColor: I, noPanClassName: bn, elevateEdgesOnSelect: !!$r, disableKeyboardA11y: kn, rfId: Lr, children: b.jsx(A4, { style: h, type: m, component: v, containerStyle: w }) }), b.jsx("div", { className: "react-flow__edgelabel-renderer" }), b.jsx(h4, { nodeTypes: e, onNodeClick: a, onNodeDoubleClick: l, onNodeMouseEnter: c, onNodeMouseMove: f, onNodeMouseLeave: d, onNodeContextMenu: p, selectNodesOnDrag: E, onlyRenderVisibleElements: V, noPanClassName: bn, noDragClassName: Or, disableKeyboardA11y: kn, nodeOrigin: or, nodeExtent: Bo, rfId: Lr })] }) }));
yv.displayName = "GraphView";
var I4 = T.memo(yv);
const Fc = [[Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY], [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]], Nn = { rfId: "1", width: 0, height: 0, transform: [0, 0, 1], nodeInternals: new Map, edges: [], onNodesChange: null, onEdgesChange: null, hasDefaultNodes: !1, hasDefaultEdges: !1, d3Zoom: null, d3Selection: null, d3ZoomHandler: void 0, minZoom: .5, maxZoom: 2, translateExtent: Fc, nodeExtent: Fc, nodesSelectionActive: !1, userSelectionActive: !1, userSelectionRect: null, connectionNodeId: null, connectionHandleId: null, connectionHandleType: "source", connectionPosition: { x: 0, y: 0 }, connectionStatus: null, connectionMode: Mr.Strict, domNode: null, paneDragging: !1, noPanClassName: "nopan", nodeOrigin: [0, 0], snapGrid: [15, 15], snapToGrid: !1, nodesDraggable: !0, nodesConnectable: !0, nodesFocusable: !0, edgesFocusable: !0, edgesUpdatable: !0, elementsSelectable: !0, elevateNodesOnSelect: !0, fitViewOnInit: !1, fitViewOnInitDone: !1, fitViewOnInitOptions: void 0, multiSelectionActive: !1, connectionStartHandle: null, connectionEndHandle: null, connectionClickStartHandle: null, connectOnClick: !0, ariaLiveMessage: "", autoPanOnConnect: !0, autoPanOnNodeDrag: !0, connectionRadius: 20, onError: aE, isValidConnection: void 0 }, O4 = () => K2((e, t) => ({ ...Nn, setNodes: n => { const { nodeInternals: r, nodeOrigin: o, elevateNodesOnSelect: i } = t(); e({ nodeInternals: ku(n, r, o, i) }); }, getNodes: () => Array.from(t().nodeInternals.values()), setEdges: n => { const { defaultEdgeOptions: r = {} } = t(); e({ edges: n.map(o => ({ ...r, ...o })) }); }, setDefaultNodesAndEdges: (n, r) => { const o = typeof n < "u", i = typeof r < "u", a = o ? ku(n, new Map, t().nodeOrigin, t().elevateNodesOnSelect) : new Map; e({ nodeInternals: a, edges: i ? r : [], hasDefaultNodes: o, hasDefaultEdges: i }); }, updateNodeDimensions: n => { const { onNodesChange: r, nodeInternals: o, fitViewOnInit: i, fitViewOnInitDone: a, fitViewOnInitOptions: s, domNode: l, nodeOrigin: u } = t(), c = l == null ? void 0 : l.querySelector(".react-flow__viewport"); if (!c)
        return; const f = window.getComputedStyle(c), { m22: d } = new window.DOMMatrixReadOnly(f.transform), p = n.reduce((y, x) => { const m = o.get(x.id); if (m) {
        const h = fd(x.nodeElement);
        !!(h.width && h.height && (m.width !== h.width || m.height !== h.height || x.forceUpdate)) && (o.set(m.id, { ...m, [Ae]: { ...m[Ae], handleBounds: { source: Yp(".source", x.nodeElement, d, u), target: Yp(".target", x.nodeElement, d, u) } }, ...h }), y.push({ id: m.id, type: "dimensions", dimensions: h }));
    } return y; }, []); sv(o, u); const g = a || i && !a && lv(t, { initial: !0, ...s }); e({ nodeInternals: new Map(o), fitViewOnInitDone: g }), (p == null ? void 0 : p.length) > 0 && (r == null || r(p)); }, updateNodePositions: (n, r = !0, o = !1) => { const { triggerNodeChanges: i } = t(), a = n.map(s => { const l = { id: s.id, type: "position", dragging: o }; return r && (l.positionAbsolute = s.positionAbsolute, l.position = s.position), l; }); i(a); }, triggerNodeChanges: n => { const { onNodesChange: r, nodeInternals: o, hasDefaultNodes: i, nodeOrigin: a, getNodes: s, elevateNodesOnSelect: l } = t(); if (n != null && n.length) {
        if (i) {
            const u = cv(n, s()), c = ku(u, o, a, l);
            e({ nodeInternals: c });
        }
        r == null || r(n);
    } }, addSelectedNodes: n => { const { multiSelectionActive: r, edges: o, getNodes: i } = t(); let a, s = null; r ? a = n.map(l => Pn(l, !0)) : (a = eo(i(), n), s = eo(o, [])), ja({ changedNodes: a, changedEdges: s, get: t, set: e }); }, addSelectedEdges: n => { const { multiSelectionActive: r, edges: o, getNodes: i } = t(); let a, s = null; r ? a = n.map(l => Pn(l, !0)) : (a = eo(o, n), s = eo(i(), [])), ja({ changedNodes: s, changedEdges: a, get: t, set: e }); }, unselectNodesAndEdges: ({ nodes: n, edges: r } = {}) => { const { edges: o, getNodes: i } = t(), a = n || i(), s = r || o, l = a.map(c => (c.selected = !1, Pn(c.id, !1))), u = s.map(c => Pn(c.id, !1)); ja({ changedNodes: l, changedEdges: u, get: t, set: e }); }, setMinZoom: n => { const { d3Zoom: r, maxZoom: o } = t(); r == null || r.scaleExtent([n, o]), e({ minZoom: n }); }, setMaxZoom: n => { const { d3Zoom: r, minZoom: o } = t(); r == null || r.scaleExtent([o, n]), e({ maxZoom: n }); }, setTranslateExtent: n => { var r; (r = t().d3Zoom) == null || r.translateExtent(n), e({ translateExtent: n }); }, resetSelectedElements: () => { const { edges: n, getNodes: r } = t(), i = r().filter(s => s.selected).map(s => Pn(s.id, !1)), a = n.filter(s => s.selected).map(s => Pn(s.id, !1)); ja({ changedNodes: i, changedEdges: a, get: t, set: e }); }, setNodeExtent: n => { const { nodeInternals: r } = t(); r.forEach(o => { o.positionAbsolute = dd(o.position, n); }), e({ nodeExtent: n, nodeInternals: new Map(r) }); }, panBy: n => { const { transform: r, width: o, height: i, d3Zoom: a, d3Selection: s, translateExtent: l } = t(); if (!a || !s || !n.x && !n.y)
        return !1; const u = qn.translate(r[0] + n.x, r[1] + n.y).scale(r[2]), c = [[0, 0], [o, i]], f = a == null ? void 0 : a.constrain()(u, c, l); return a.transform(s, f), r[0] !== f.x || r[1] !== f.y || r[2] !== f.k; }, cancelConnection: () => e({ connectionNodeId: Nn.connectionNodeId, connectionHandleId: Nn.connectionHandleId, connectionHandleType: Nn.connectionHandleType, connectionStatus: Nn.connectionStatus, connectionStartHandle: Nn.connectionStartHandle, connectionEndHandle: Nn.connectionEndHandle }), reset: () => e({ ...Nn }) })), vv = ({ children: e }) => { const t = T.useRef(null); return t.current || (t.current = O4()), b.jsx(Z3, { value: t.current, children: e }); };
vv.displayName = "ReactFlowProvider";
const wv = ({ children: e }) => T.useContext(El) ? b.jsx(b.Fragment, { children: e }) : b.jsx(vv, { children: e });
wv.displayName = "ReactFlowWrapper";
function Jp(e, t) { return T.useRef(null), T.useMemo(() => t(e), [e]); }
const $4 = { input: Gy, default: Dc, output: Zy, group: vd }, L4 = { default: Qs, straight: hd, step: pd, smoothstep: Nl, simplebezier: md }, R4 = [0, 0], D4 = [15, 15], j4 = { x: 0, y: 0, zoom: 1 }, F4 = { width: "100%", height: "100%", overflow: "hidden", position: "relative", zIndex: 0 }, xv = T.forwardRef(({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, className: o, nodeTypes: i = $4, edgeTypes: a = L4, onNodeClick: s, onEdgeClick: l, onInit: u, onMove: c, onMoveStart: f, onMoveEnd: d, onConnect: p, onConnectStart: g, onConnectEnd: y, onClickConnectStart: x, onClickConnectEnd: m, onNodeMouseEnter: h, onNodeMouseMove: v, onNodeMouseLeave: w, onNodeContextMenu: S, onNodeDoubleClick: N, onNodeDragStart: C, onNodeDrag: M, onNodeDragStop: O, onNodesDelete: R, onEdgesDelete: D, onSelectionChange: V, onSelectionDragStart: L, onSelectionDrag: E, onSelectionDragStop: $, onSelectionContextMenu: z, onSelectionStart: P, onSelectionEnd: _, connectionMode: A = Mr.Strict, connectionLineType: I = In.Bezier, connectionLineStyle: F, connectionLineComponent: H, connectionLineContainerStyle: X, deleteKeyCode: Y = "Backspace", selectionKeyCode: ee = "Shift", selectionOnDrag: Z = !1, selectionMode: ne = qi.Full, panActivationKeyCode: le = "Space", multiSelectionKeyCode: Ce = "Meta", zoomActivationKeyCode: Ne = "Meta", snapToGrid: yt = !1, snapGrid: Pt = D4, onlyRenderVisibleElements: Bt = !1, selectNodesOnDrag: Te = !0, nodesDraggable: pe, nodesConnectable: et, nodesFocusable: Q, nodeOrigin: Sn = R4, edgesFocusable: nr, edgesUpdatable: Vo, elementsSelectable: Ho, defaultViewport: Or = j4, minZoom: rr = .5, maxZoom: bn = 2, translateExtent: $r = Fc, preventScrolling: kn = !0, nodeExtent: or, defaultMarkerColor: Bo = "#b1b1b7", zoomOnScroll: Lr = !0, zoomOnPinch: tt = !0, panOnScroll: zt = !1, panOnScrollSpeed: ir = .5, panOnScrollMode: ar = mo.Free, zoomOnDoubleClick: sr = !0, panOnDrag: pa = !0, onPaneClick: lr, onPaneMouseEnter: jl, onPaneMouseMove: Fl, onPaneMouseLeave: Uo, onPaneScroll: Vl, onPaneContextMenu: em, children: ur, onEdgeUpdate: Q1, onEdgeContextMenu: G1, onEdgeDoubleClick: K1, onEdgeMouseEnter: Z1, onEdgeMouseMove: J1, onEdgeMouseLeave: ew, onEdgeUpdateStart: tw, onEdgeUpdateEnd: nw, edgeUpdaterRadius: rw = 10, onNodesChange: ow, onEdgesChange: iw, noDragClassName: aw = "nodrag", noWheelClassName: sw = "nowheel", noPanClassName: tm = "nopan", fitView: lw = !1, fitViewOptions: uw, connectOnClick: cw = !0, attributionPosition: fw, proOptions: dw, defaultEdgeOptions: mw, elevateNodesOnSelect: pw = !0, elevateEdgesOnSelect: hw = !1, disableKeyboardA11y: nm = !1, autoPanOnConnect: gw = !0, autoPanOnNodeDrag: yw = !0, connectionRadius: vw = 20, isValidConnection: ww, onError: xw, style: Sw, id: rm, ...bw }, kw) => { const Ew = Jp(i, qE), Nw = Jp(a, jE), Hl = rm || "1"; return b.jsx("div", { ...bw, style: { ...Sw, ...F4 }, ref: kw, className: Ze(["react-flow", o]), "data-testid": "rf__wrapper", id: rm, children: b.jsxs(wv, { children: [b.jsx(I4, { onInit: u, onMove: c, onMoveStart: f, onMoveEnd: d, onNodeClick: s, onEdgeClick: l, onNodeMouseEnter: h, onNodeMouseMove: v, onNodeMouseLeave: w, onNodeContextMenu: S, onNodeDoubleClick: N, nodeTypes: Ew, edgeTypes: Nw, connectionLineType: I, connectionLineStyle: F, connectionLineComponent: H, connectionLineContainerStyle: X, selectionKeyCode: ee, selectionOnDrag: Z, selectionMode: ne, deleteKeyCode: Y, multiSelectionKeyCode: Ce, panActivationKeyCode: le, zoomActivationKeyCode: Ne, onlyRenderVisibleElements: Bt, selectNodesOnDrag: Te, defaultViewport: Or, translateExtent: $r, minZoom: rr, maxZoom: bn, preventScrolling: kn, zoomOnScroll: Lr, zoomOnPinch: tt, zoomOnDoubleClick: sr, panOnScroll: zt, panOnScrollSpeed: ir, panOnScrollMode: ar, panOnDrag: pa, onPaneClick: lr, onPaneMouseEnter: jl, onPaneMouseMove: Fl, onPaneMouseLeave: Uo, onPaneScroll: Vl, onPaneContextMenu: em, onSelectionContextMenu: z, onSelectionStart: P, onSelectionEnd: _, onEdgeUpdate: Q1, onEdgeContextMenu: G1, onEdgeDoubleClick: K1, onEdgeMouseEnter: Z1, onEdgeMouseMove: J1, onEdgeMouseLeave: ew, onEdgeUpdateStart: tw, onEdgeUpdateEnd: nw, edgeUpdaterRadius: rw, defaultMarkerColor: Bo, noDragClassName: aw, noWheelClassName: sw, noPanClassName: tm, elevateEdgesOnSelect: hw, rfId: Hl, disableKeyboardA11y: nm, nodeOrigin: Sn, nodeExtent: or }), b.jsx(PE, { nodes: e, edges: t, defaultNodes: n, defaultEdges: r, onConnect: p, onConnectStart: g, onConnectEnd: y, onClickConnectStart: x, onClickConnectEnd: m, nodesDraggable: pe, nodesConnectable: et, nodesFocusable: Q, edgesFocusable: nr, edgesUpdatable: Vo, elementsSelectable: Ho, elevateNodesOnSelect: pw, minZoom: rr, maxZoom: bn, nodeExtent: or, onNodesChange: ow, onEdgesChange: iw, snapToGrid: yt, snapGrid: Pt, connectionMode: A, translateExtent: $r, connectOnClick: cw, defaultEdgeOptions: mw, fitView: lw, fitViewOptions: uw, onNodesDelete: R, onEdgesDelete: D, onNodeDragStart: C, onNodeDrag: M, onNodeDragStop: O, onSelectionDrag: E, onSelectionDragStart: L, onSelectionDragStop: $, noPanClassName: tm, nodeOrigin: Sn, rfId: Hl, autoPanOnConnect: gw, autoPanOnNodeDrag: yw, onError: xw, connectionRadius: vw, isValidConnection: ww }), b.jsx(TE, { onSelectionChange: V }), ur, b.jsx(eE, { proOptions: dw, position: fw }), b.jsx($E, { rfId: Hl, disableKeyboardA11y: nm })] }) }); });
xv.displayName = "ReactFlow";
const V4 = e => e.getNodes();
function H4() { return me(V4, Le); }
const B4 = e => e.edges;
function Sv() { return me(B4, Le); }
function bv(e) { return t => { const [n, r] = T.useState(t), o = T.useCallback(i => r(a => e(i, a)), []); return [n, r, o]; }; }
const U4 = bv(cv), q4 = bv(a4);
function W4() { return b.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: b.jsx("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }) }); }
function Y4() { return b.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5", children: b.jsx("path", { d: "M0 0h32v4.2H0z" }) }); }
function X4() { return b.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30", children: b.jsx("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }) }); }
function Q4() { return b.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: b.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }) }); }
function G4() { return b.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: b.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" }) }); }
const Xt = ({ children: e, className: t, ...n }) => b.jsx("button", { type: "button", className: Ze(["react-flow__controls-button", t]), ...n, children: e });
Xt.displayName = "ControlButton";
const K4 = e => ({ isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable, minZoomReached: e.transform[2] <= e.minZoom, maxZoomReached: e.transform[2] >= e.maxZoom }), kv = ({ style: e, showZoom: t = !0, showFitView: n = !0, showInteractive: r = !0, fitViewOptions: o, onZoomIn: i, onZoomOut: a, onFitView: s, onInteractiveChange: l, className: u, children: c, position: f = "bottom-left" }) => { const d = Ve(), [p, g] = T.useState(!1), { isInteractive: y, minZoomReached: x, maxZoomReached: m } = me(K4, Le), { zoomIn: h, zoomOut: v, fitView: w } = en(); if (T.useEffect(() => { g(!0); }, []), !p)
    return null; const S = () => { h(), i == null || i(); }, N = () => { v(), a == null || a(); }, C = () => { w(o), s == null || s(); }, M = () => { d.setState({ nodesDraggable: !y, nodesConnectable: !y, elementsSelectable: !y }), l == null || l(!y); }; return b.jsxs(My, { className: Ze(["react-flow__controls", u]), position: f, style: e, "data-testid": "rf__controls", children: [t && b.jsxs(b.Fragment, { children: [b.jsx(Xt, { onClick: S, className: "react-flow__controls-zoomin", title: "zoom in", "aria-label": "zoom in", disabled: m, children: b.jsx(W4, {}) }), b.jsx(Xt, { onClick: N, className: "react-flow__controls-zoomout", title: "zoom out", "aria-label": "zoom out", disabled: x, children: b.jsx(Y4, {}) })] }), n && b.jsx(Xt, { className: "react-flow__controls-fitview", onClick: C, title: "fit view", "aria-label": "fit view", children: b.jsx(X4, {}) }), r && b.jsx(Xt, { className: "react-flow__controls-interactive", onClick: M, title: "toggle interactivity", "aria-label": "toggle interactivity", children: y ? b.jsx(G4, {}) : b.jsx(Q4, {}) }), c] }); };
kv.displayName = "Controls";
var Z4 = T.memo(kv), Ct;
(function (e) { e.Lines = "lines", e.Dots = "dots", e.Cross = "cross"; })(Ct || (Ct = {}));
function J4({ color: e, dimensions: t, lineWidth: n }) { return b.jsx("path", { stroke: e, strokeWidth: n, d: `M${t[0] / 2} 0 V${t[1]} M0 ${t[1] / 2} H${t[0]}` }); }
function eN({ color: e, radius: t }) { return b.jsx("circle", { cx: t, cy: t, r: t, fill: e }); }
const tN = { [Ct.Dots]: "#91919a", [Ct.Lines]: "#eee", [Ct.Cross]: "#e2e2e2" }, nN = { [Ct.Dots]: 1, [Ct.Lines]: 1, [Ct.Cross]: 6 }, rN = e => ({ transform: e.transform, patternId: `pattern-${e.rfId}` });
function Ev({ id: e, variant: t = Ct.Dots, gap: n = 20, size: r, lineWidth: o = 1, offset: i = 2, color: a, style: s, className: l }) { const u = T.useRef(null), { transform: c, patternId: f } = me(rN, Le), d = a || tN[t], p = r || nN[t], g = t === Ct.Dots, y = t === Ct.Cross, x = Array.isArray(n) ? n : [n, n], m = [x[0] * c[2] || 1, x[1] * c[2] || 1], h = p * c[2], v = y ? [h, h] : m, w = g ? [h / i, h / i] : [v[0] / i, v[1] / i]; return b.jsxs("svg", { className: Ze(["react-flow__background", l]), style: { ...s, position: "absolute", width: "100%", height: "100%", top: 0, left: 0 }, ref: u, "data-testid": "rf__background", children: [b.jsx("pattern", { id: f + e, x: c[0] % m[0], y: c[1] % m[1], width: m[0], height: m[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${w[0]},-${w[1]})`, children: g ? b.jsx(eN, { color: d, radius: h / i }) : b.jsx(J4, { dimensions: v, color: d, lineWidth: o }) }), b.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${f + e})` })] }); }
Ev.displayName = "Background";
var oN = T.memo(Ev);
const Nv = (e, t) => { T.useEffect(() => { const n = r => { r.code === e && t(r); }; return document.addEventListener("keydown", n), () => document.removeEventListener("keydown", n); }, [e, t]); }, _l = ({ open: e = !1, onClose: t, title: n, children: r, actions: o }) => { if (Nv("Escape", t), e === !1)
    return null; const i = { primary: "bg-teal-400 hover:bg-teal-500", secondary: "bg-gray-400 hover:bg-gray-500" }; return b.jsxs(b.Fragment, { children: [b.jsx("div", { className: "z-[19] fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full", onClick: t }), b.jsxs("div", { className: "z-20 relative top-20 mx-auto border w-96 shadow-lg bg-white text-sm rounded-md", children: [b.jsx("div", { className: "p-3 border-b", children: b.jsx("h2", { className: "text-lg text-center font-bold", children: n }) }), b.jsx("div", { className: "p-3", children: r }), b.jsx("div", { className: "flex gap-3 p-3 border-t", children: o.map((a, s) => b.jsx("button", { className: "text-white p-2 w-full cursor-pointer " + (s === o.length - 1 ? i.primary : i.secondary), onClick: a.onClick, children: a.label }, s)) })] })] }); }, iN = ({ open: e = !1, onClose: t }) => { const n = en(), r = () => { n.setNodes([]), n.setEdges([]), setTimeout(() => { n.fitView(); }, 100), t(); }; return b.jsx(_l, { title: "Clear Graph", actions: [{ label: "Cancel", onClick: t }, { label: "Clear", onClick: r }], open: e, onClose: t, children: b.jsx("p", { children: "Are you sure?" }) }); }, aN = ({ open: e = !1, onClose: t }) => b.jsxs(_l, { title: "Help", actions: [{ label: "Close", onClick: t }], open: e, onClose: t, children: [b.jsx("p", { className: "mb-2", children: "Right click anywhere to add a new node." }), b.jsx("p", { className: "mb-2", children: "Drag a connection into empty space to add a new node and connect it to the source." }), b.jsx("p", { className: "mb-2", children: "Click and drag on a socket to connect to another socket of the same type." }), b.jsx("p", { children: "Left click to select nodes or connections, backspace to delete selected nodes or connections." })] }), sN = ({ open: e = !1, onClose: t, setBehaviorGraph: n, examples: r }) => { const [o, i] = T.useState(), [a, s] = T.useState(""), l = en(); T.useEffect(() => { a && i(JSON.stringify(r[a], null, 2)); }, [a, r]); const u = T.useCallback(() => { let f; o !== void 0 ? f = JSON.parse(o) : a !== "" && (f = r[a]), f !== void 0 && (n(f), setTimeout(() => { l.fitView(); }, 100), c()); }, [n, o, l]), c = () => { i(void 0), s(""), t(); }; return b.jsxs(_l, { title: "Load Graph", actions: [{ label: "Cancel", onClick: c }, { label: "Load", onClick: u }], open: e, onClose: t, children: [b.jsx("textarea", { autoFocus: !0, className: "border border-gray-300 w-full p-2 h-32 align-top", placeholder: "Paste JSON here", value: o, onChange: f => i(f.currentTarget.value) }), b.jsx("div", { className: "p-4 text-center text-gray-800", children: "or" }), b.jsxs("select", { className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-3", onChange: f => s(f.target.value), value: a, children: [b.jsx("option", { disabled: !0, value: "", children: "Select an example" }), Object.keys(r).map(f => b.jsx("option", { value: f, children: f }, f))] })] }); }, Fa = e => e == null, _v = (e, t, n) => { const r = { nodes: [], variables: [], customEvents: [] }; return e.forEach(o => { var s; if (o.type === void 0)
    return; const i = n.getNodeSpec(o.type, o.data.configuration); if (i === void 0)
    return; const a = { id: o.id, type: o.type, metadata: { positionX: String(o.position.x), positionY: String(o.position.y) } }; Object.entries(o.data.configuration).forEach(([l, u]) => { a.configuration === void 0 && (a.configuration = {}), a.configuration[l] = u; }), Object.entries(o.data.values).forEach(([l, u]) => { a.parameters === void 0 && (a.parameters = {}), a.parameters[l] = { value: u }; }), t.filter(l => l.target === o.id).forEach(l => { const u = i.inputs.find(c => c.name === l.targetHandle); u && u.valueType === "flow" || (a.parameters === void 0 && (a.parameters = {}), !Fa(l.targetHandle) && (Fa(l.sourceHandle) || (a.parameters[l.targetHandle] = { link: { nodeId: l.source, socket: l.sourceHandle } }))); }), t.filter(l => l.source === o.id).forEach(l => { const u = i.outputs.find(c => c.name === l.sourceHandle); u && u.valueType !== "flow" || (a.flows === void 0 && (a.flows = {}), !Fa(l.targetHandle) && (Fa(l.sourceHandle) || (a.flows[l.sourceHandle] = { nodeId: l.target, socket: l.targetHandle }))); }), (s = r.nodes) == null || s.push(a); }), r; }, lN = ({ open: e = !1, onClose: t, specGenerator: n }) => { const r = T.useRef(null), [o, i] = T.useState(!1), a = Sv(), s = H4(), l = T.useMemo(() => _v(s, a, n), [s, a, n]), u = JSON.stringify(l, null, 2), c = () => { var f, d; (f = r.current) == null || f.select(), document.execCommand("copy"), (d = r.current) == null || d.blur(), i(!0), setInterval(() => { i(!1); }, 1e3); }; return b.jsx(_l, { title: "Save Graph", actions: [{ label: "Cancel", onClick: t }, { label: o ? "Copied" : "Copy", onClick: c }], open: e, onClose: t, children: b.jsx("textarea", { ref: r, className: "border border-gray-300 w-full p-2 h-32", defaultValue: u }) }); };
var Cv = { prefix: "fas", iconName: "caret-right", icon: [256, 512, [], "f0da", "M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"] }, uN = { prefix: "fas", iconName: "pause", icon: [320, 512, [9208], "f04c", "M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"] }, cN = { prefix: "fas", iconName: "question", icon: [320, 512, [10067, 10068, 61736], "3f", "M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"] }, fN = { prefix: "fas", iconName: "trash", icon: [448, 512, [], "f1f8", "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"] }, dN = { prefix: "fas", iconName: "download", icon: [512, 512, [], "f019", "M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"] }, mN = { prefix: "fas", iconName: "upload", icon: [512, 512, [], "f093", "M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"] }, pN = { prefix: "fas", iconName: "play", icon: [384, 512, [9654], "f04b", "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"] }, hN = { prefix: "fas", iconName: "circle-plus", icon: [512, 512, ["plus-circle"], "f055", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"] };
function eh(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (o) { return Object.getOwnPropertyDescriptor(e, o).enumerable; })), n.push.apply(n, r);
} return n; }
function B(e) { for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? eh(Object(n), !0).forEach(function (r) { Ie(e, r, n[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eh(Object(n)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r)); });
} return e; }
function Gs(e) {
    "@babel/helpers - typeof";
    return Gs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) { return typeof t; } : function (t) { return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t; }, Gs(e);
}
function gN(e, t) { if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function"); }
function th(e, t) { for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
} }
function yN(e, t, n) { return t && th(e.prototype, t), n && th(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function Ie(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e; }
function xd(e, t) { return wN(e) || SN(e, t) || Tv(e, t) || kN(); }
function la(e) { return vN(e) || xN(e) || Tv(e) || bN(); }
function vN(e) { if (Array.isArray(e))
    return Vc(e); }
function wN(e) { if (Array.isArray(e))
    return e; }
function xN(e) { if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e); }
function SN(e, t) { var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"]; if (n != null) {
    var r = [], o = !0, i = !1, a, s;
    try {
        for (n = n.call(e); !(o = (a = n.next()).done) && (r.push(a.value), !(t && r.length === t)); o = !0)
            ;
    }
    catch (l) {
        i = !0, s = l;
    }
    finally {
        try {
            !o && n.return != null && n.return();
        }
        finally {
            if (i)
                throw s;
        }
    }
    return r;
} }
function Tv(e, t) { if (e) {
    if (typeof e == "string")
        return Vc(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
        return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return Vc(e, t);
} }
function Vc(e, t) { (t == null || t > e.length) && (t = e.length); for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n]; return r; }
function bN() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kN() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var nh = function () { }, Sd = {}, Mv = {}, Pv = null, zv = { mark: nh, measure: nh };
try {
    typeof window < "u" && (Sd = window), typeof document < "u" && (Mv = document), typeof MutationObserver < "u" && (Pv = MutationObserver), typeof performance < "u" && (zv = performance);
}
catch { }
var EN = Sd.navigator || {}, rh = EN.userAgent, oh = rh === void 0 ? "" : rh, Gn = Sd, de = Mv, ih = Pv, Va = zv;
Gn.document;
var xn = !!de.documentElement && !!de.head && typeof de.addEventListener == "function" && typeof de.createElement == "function", Av = ~oh.indexOf("MSIE") || ~oh.indexOf("Trident/"), Ha, Ba, Ua, qa, Wa, gn = "___FONT_AWESOME___", Hc = 16, Iv = "fa", Ov = "svg-inline--fa", Pr = "data-fa-i2svg", Bc = "data-fa-pseudo-element", NN = "data-fa-pseudo-element-pending", bd = "data-prefix", kd = "data-icon", ah = "fontawesome-i2svg", _N = "async", CN = ["HTML", "HEAD", "STYLE", "SCRIPT"], $v = function () { try {
    return !0;
}
catch {
    return !1;
} }(), ce = "classic", be = "sharp", Ed = [ce, be];
function ua(e) { return new Proxy(e, { get: function (n, r) { return r in n ? n[r] : n[ce]; } }); }
var Yi = ua((Ha = {}, Ie(Ha, ce, { fa: "solid", fas: "solid", "fa-solid": "solid", far: "regular", "fa-regular": "regular", fal: "light", "fa-light": "light", fat: "thin", "fa-thin": "thin", fad: "duotone", "fa-duotone": "duotone", fab: "brands", "fa-brands": "brands", fak: "kit", "fa-kit": "kit" }), Ie(Ha, be, { fa: "solid", fass: "solid", "fa-solid": "solid", fasr: "regular", "fa-regular": "regular", fasl: "light", "fa-light": "light" }), Ha)), Xi = ua((Ba = {}, Ie(Ba, ce, { solid: "fas", regular: "far", light: "fal", thin: "fat", duotone: "fad", brands: "fab", kit: "fak" }), Ie(Ba, be, { solid: "fass", regular: "fasr", light: "fasl" }), Ba)), Qi = ua((Ua = {}, Ie(Ua, ce, { fab: "fa-brands", fad: "fa-duotone", fak: "fa-kit", fal: "fa-light", far: "fa-regular", fas: "fa-solid", fat: "fa-thin" }), Ie(Ua, be, { fass: "fa-solid", fasr: "fa-regular", fasl: "fa-light" }), Ua)), TN = ua((qa = {}, Ie(qa, ce, { "fa-brands": "fab", "fa-duotone": "fad", "fa-kit": "fak", "fa-light": "fal", "fa-regular": "far", "fa-solid": "fas", "fa-thin": "fat" }), Ie(qa, be, { "fa-solid": "fass", "fa-regular": "fasr", "fa-light": "fasl" }), qa)), MN = /fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/, Lv = "fa-layers-text", PN = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, zN = ua((Wa = {}, Ie(Wa, ce, { 900: "fas", 400: "far", normal: "far", 300: "fal", 100: "fat" }), Ie(Wa, be, { 900: "fass", 400: "fasr", 300: "fasl" }), Wa)), Rv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], AN = Rv.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), IN = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], yr = { GROUP: "duotone-group", SWAP_OPACITY: "swap-opacity", PRIMARY: "primary", SECONDARY: "secondary" }, Gi = new Set;
Object.keys(Xi[ce]).map(Gi.add.bind(Gi));
Object.keys(Xi[be]).map(Gi.add.bind(Gi));
var ON = [].concat(Ed, la(Gi), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", yr.GROUP, yr.SWAP_OPACITY, yr.PRIMARY, yr.SECONDARY]).concat(Rv.map(function (e) { return "".concat(e, "x"); })).concat(AN.map(function (e) { return "w-".concat(e); })), Si = Gn.FontAwesomeConfig || {};
function $N(e) { var t = de.querySelector("script[" + e + "]"); if (t)
    return t.getAttribute(e); }
function LN(e) { return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e; }
if (de && typeof de.querySelector == "function") {
    var RN = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
    RN.forEach(function (e) { var t = xd(e, 2), n = t[0], r = t[1], o = LN($N(n)); o != null && (Si[r] = o); });
}
var Dv = { styleDefault: "solid", familyDefault: "classic", cssPrefix: Iv, replacementClass: Ov, autoReplaceSvg: !0, autoAddCss: !0, autoA11y: !0, searchPseudoElements: !1, observeMutations: !0, mutateApproach: "async", keepOriginalSource: !0, measurePerformance: !1, showMissingIcons: !0 };
Si.familyPrefix && (Si.cssPrefix = Si.familyPrefix);
var Po = B(B({}, Dv), Si);
Po.autoReplaceSvg || (Po.observeMutations = !1);
var q = {};
Object.keys(Dv).forEach(function (e) { Object.defineProperty(q, e, { enumerable: !0, set: function (n) { Po[e] = n, bi.forEach(function (r) { return r(q); }); }, get: function () { return Po[e]; } }); });
Object.defineProperty(q, "familyPrefix", { enumerable: !0, set: function (t) { Po.cssPrefix = t, bi.forEach(function (n) { return n(q); }); }, get: function () { return Po.cssPrefix; } });
Gn.FontAwesomeConfig = q;
var bi = [];
function DN(e) { return bi.push(e), function () { bi.splice(bi.indexOf(e), 1); }; }
var _n = Hc, Qt = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function jN(e) { if (!(!e || !xn)) {
    var t = de.createElement("style");
    t.setAttribute("type", "text/css"), t.innerHTML = e;
    for (var n = de.head.childNodes, r = null, o = n.length - 1; o > -1; o--) {
        var i = n[o], a = (i.tagName || "").toUpperCase();
        ["STYLE", "LINK"].indexOf(a) > -1 && (r = i);
    }
    return de.head.insertBefore(t, r), e;
} }
var FN = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Ki() { for (var e = 12, t = ""; e-- > 0;)
    t += FN[Math.random() * 62 | 0]; return t; }
function Lo(e) { for (var t = [], n = (e || []).length >>> 0; n--;)
    t[n] = e[n]; return t; }
function Nd(e) { return e.classList ? Lo(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function (t) { return t; }); }
function jv(e) { return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
function VN(e) { return Object.keys(e || {}).reduce(function (t, n) { return t + "".concat(n, '="').concat(jv(e[n]), '" '); }, "").trim(); }
function Cl(e) { return Object.keys(e || {}).reduce(function (t, n) { return t + "".concat(n, ": ").concat(e[n].trim(), ";"); }, ""); }
function _d(e) { return e.size !== Qt.size || e.x !== Qt.x || e.y !== Qt.y || e.rotate !== Qt.rotate || e.flipX || e.flipY; }
function HN(e) { var t = e.transform, n = e.containerWidth, r = e.iconWidth, o = { transform: "translate(".concat(n / 2, " 256)") }, i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), a = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), s = "rotate(".concat(t.rotate, " 0 0)"), l = { transform: "".concat(i, " ").concat(a, " ").concat(s) }, u = { transform: "translate(".concat(r / 2 * -1, " -256)") }; return { outer: o, inner: l, path: u }; }
function BN(e) { var t = e.transform, n = e.width, r = n === void 0 ? Hc : n, o = e.height, i = o === void 0 ? Hc : o, a = e.startCentered, s = a === void 0 ? !1 : a, l = ""; return s && Av ? l += "translate(".concat(t.x / _n - r / 2, "em, ").concat(t.y / _n - i / 2, "em) ") : s ? l += "translate(calc(-50% + ".concat(t.x / _n, "em), calc(-50% + ").concat(t.y / _n, "em)) ") : l += "translate(".concat(t.x / _n, "em, ").concat(t.y / _n, "em) "), l += "scale(".concat(t.size / _n * (t.flipX ? -1 : 1), ", ").concat(t.size / _n * (t.flipY ? -1 : 1), ") "), l += "rotate(".concat(t.rotate, "deg) "), l; }
var UN = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function Fv() { var e = Iv, t = Ov, n = q.cssPrefix, r = q.replacementClass, o = UN; if (n !== e || r !== t) {
    var i = new RegExp("\\.".concat(e, "\\-"), "g"), a = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    o = o.replace(i, ".".concat(n, "-")).replace(a, "--".concat(n, "-")).replace(s, ".".concat(r));
} return o; }
var sh = !1;
function _u() { q.autoAddCss && !sh && (jN(Fv()), sh = !0); }
var qN = { mixout: function () { return { dom: { css: Fv, insertCss: _u } }; }, hooks: function () { return { beforeDOMElementCreation: function () { _u(); }, beforeI2svg: function () { _u(); } }; } }, yn = Gn || {};
yn[gn] || (yn[gn] = {});
yn[gn].styles || (yn[gn].styles = {});
yn[gn].hooks || (yn[gn].hooks = {});
yn[gn].shims || (yn[gn].shims = []);
var Dt = yn[gn], Vv = [], WN = function e() { de.removeEventListener("DOMContentLoaded", e), Ks = 1, Vv.map(function (t) { return t(); }); }, Ks = !1;
xn && (Ks = (de.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(de.readyState), Ks || de.addEventListener("DOMContentLoaded", WN));
function YN(e) { xn && (Ks ? setTimeout(e, 0) : Vv.push(e)); }
function ca(e) { var t = e.tag, n = e.attributes, r = n === void 0 ? {} : n, o = e.children, i = o === void 0 ? [] : o; return typeof e == "string" ? jv(e) : "<".concat(t, " ").concat(VN(r), ">").concat(i.map(ca).join(""), "</").concat(t, ">"); }
function lh(e, t, n) { if (e && e[t] && e[t][n])
    return { prefix: t, iconName: n, icon: e[t][n] }; }
var XN = function (t, n) { return function (r, o, i, a) { return t.call(n, r, o, i, a); }; }, Cu = function (t, n, r, o) { var i = Object.keys(t), a = i.length, s = o !== void 0 ? XN(n, o) : n, l, u, c; for (r === void 0 ? (l = 1, c = t[i[0]]) : (l = 0, c = r); l < a; l++)
    u = i[l], c = s(c, t[u], u, t); return c; };
function QN(e) { for (var t = [], n = 0, r = e.length; n < r;) {
    var o = e.charCodeAt(n++);
    if (o >= 55296 && o <= 56319 && n < r) {
        var i = e.charCodeAt(n++);
        (i & 64512) == 56320 ? t.push(((o & 1023) << 10) + (i & 1023) + 65536) : (t.push(o), n--);
    }
    else
        t.push(o);
} return t; }
function Uc(e) { var t = QN(e); return t.length === 1 ? t[0].toString(16) : null; }
function GN(e, t) { var n = e.length, r = e.charCodeAt(t), o; return r >= 55296 && r <= 56319 && n > t + 1 && (o = e.charCodeAt(t + 1), o >= 56320 && o <= 57343) ? (r - 55296) * 1024 + o - 56320 + 65536 : r; }
function uh(e) { return Object.keys(e).reduce(function (t, n) { var r = e[n], o = !!r.icon; return o ? t[r.iconName] = r.icon : t[n] = r, t; }, {}); }
function qc(e, t) { var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = n.skipHooks, o = r === void 0 ? !1 : r, i = uh(t); typeof Dt.hooks.addPack == "function" && !o ? Dt.hooks.addPack(e, uh(t)) : Dt.styles[e] = B(B({}, Dt.styles[e] || {}), i), e === "fas" && qc("fa", t); }
var Ya, Xa, Qa, to = Dt.styles, KN = Dt.shims, ZN = (Ya = {}, Ie(Ya, ce, Object.values(Qi[ce])), Ie(Ya, be, Object.values(Qi[be])), Ya), Cd = null, Hv = {}, Bv = {}, Uv = {}, qv = {}, Wv = {}, JN = (Xa = {}, Ie(Xa, ce, Object.keys(Yi[ce])), Ie(Xa, be, Object.keys(Yi[be])), Xa);
function e_(e) { return ~ON.indexOf(e); }
function t_(e, t) { var n = t.split("-"), r = n[0], o = n.slice(1).join("-"); return r === e && o !== "" && !e_(o) ? o : null; }
var Yv = function () { var t = function (i) { return Cu(to, function (a, s, l) { return a[l] = Cu(s, i, {}), a; }, {}); }; Hv = t(function (o, i, a) { if (i[3] && (o[i[3]] = a), i[2]) {
    var s = i[2].filter(function (l) { return typeof l == "number"; });
    s.forEach(function (l) { o[l.toString(16)] = a; });
} return o; }), Bv = t(function (o, i, a) { if (o[a] = a, i[2]) {
    var s = i[2].filter(function (l) { return typeof l == "string"; });
    s.forEach(function (l) { o[l] = a; });
} return o; }), Wv = t(function (o, i, a) { var s = i[2]; return o[a] = a, s.forEach(function (l) { o[l] = a; }), o; }); var n = "far" in to || q.autoFetchSvg, r = Cu(KN, function (o, i) { var a = i[0], s = i[1], l = i[2]; return s === "far" && !n && (s = "fas"), typeof a == "string" && (o.names[a] = { prefix: s, iconName: l }), typeof a == "number" && (o.unicodes[a.toString(16)] = { prefix: s, iconName: l }), o; }, { names: {}, unicodes: {} }); Uv = r.names, qv = r.unicodes, Cd = Tl(q.styleDefault, { family: q.familyDefault }); };
DN(function (e) { Cd = Tl(e.styleDefault, { family: q.familyDefault }); });
Yv();
function Td(e, t) { return (Hv[e] || {})[t]; }
function n_(e, t) { return (Bv[e] || {})[t]; }
function vr(e, t) { return (Wv[e] || {})[t]; }
function Xv(e) { return Uv[e] || { prefix: null, iconName: null }; }
function r_(e) { var t = qv[e], n = Td("fas", e); return t || (n ? { prefix: "fas", iconName: n } : null) || { prefix: null, iconName: null }; }
function Kn() { return Cd; }
var Md = function () { return { prefix: null, iconName: null, rest: [] }; };
function Tl(e) { var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.family, r = n === void 0 ? ce : n, o = Yi[r][e], i = Xi[r][e] || Xi[r][o], a = e in Dt.styles ? e : null; return i || a || null; }
var ch = (Qa = {}, Ie(Qa, ce, Object.keys(Qi[ce])), Ie(Qa, be, Object.keys(Qi[be])), Qa);
function Ml(e) { var t, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.skipLookups, o = r === void 0 ? !1 : r, i = (t = {}, Ie(t, ce, "".concat(q.cssPrefix, "-").concat(ce)), Ie(t, be, "".concat(q.cssPrefix, "-").concat(be)), t), a = null, s = ce; (e.includes(i[ce]) || e.some(function (u) { return ch[ce].includes(u); })) && (s = ce), (e.includes(i[be]) || e.some(function (u) { return ch[be].includes(u); })) && (s = be); var l = e.reduce(function (u, c) { var f = t_(q.cssPrefix, c); if (to[c] ? (c = ZN[s].includes(c) ? TN[s][c] : c, a = c, u.prefix = c) : JN[s].indexOf(c) > -1 ? (a = c, u.prefix = Tl(c, { family: s })) : f ? u.iconName = f : c !== q.replacementClass && c !== i[ce] && c !== i[be] && u.rest.push(c), !o && u.prefix && u.iconName) {
    var d = a === "fa" ? Xv(u.iconName) : {}, p = vr(u.prefix, u.iconName);
    d.prefix && (a = null), u.iconName = d.iconName || p || u.iconName, u.prefix = d.prefix || u.prefix, u.prefix === "far" && !to.far && to.fas && !q.autoFetchSvg && (u.prefix = "fas");
} return u; }, Md()); return (e.includes("fa-brands") || e.includes("fab")) && (l.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (l.prefix = "fad"), !l.prefix && s === be && (to.fass || q.autoFetchSvg) && (l.prefix = "fass", l.iconName = vr(l.prefix, l.iconName) || l.iconName), (l.prefix === "fa" || a === "fa") && (l.prefix = Kn() || "fas"), l; }
var o_ = function () { function e() { gN(this, e), this.definitions = {}; } return yN(e, [{ key: "add", value: function () { for (var n = this, r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i]; var a = o.reduce(this._pullDefinitions, {}); Object.keys(a).forEach(function (s) { n.definitions[s] = B(B({}, n.definitions[s] || {}), a[s]), qc(s, a[s]); var l = Qi[ce][s]; l && qc(l, a[s]), Yv(); }); } }, { key: "reset", value: function () { this.definitions = {}; } }, { key: "_pullDefinitions", value: function (n, r) { var o = r.prefix && r.iconName && r.icon ? { 0: r } : r; return Object.keys(o).map(function (i) { var a = o[i], s = a.prefix, l = a.iconName, u = a.icon, c = u[2]; n[s] || (n[s] = {}), c.length > 0 && c.forEach(function (f) { typeof f == "string" && (n[s][f] = u); }), n[s][l] = u; }), n; } }]), e; }(), fh = [], no = {}, go = {}, i_ = Object.keys(go);
function a_(e, t) { var n = t.mixoutsTo; return fh = e, no = {}, Object.keys(go).forEach(function (r) { i_.indexOf(r) === -1 && delete go[r]; }), fh.forEach(function (r) { var o = r.mixout ? r.mixout() : {}; if (Object.keys(o).forEach(function (a) { typeof o[a] == "function" && (n[a] = o[a]), Gs(o[a]) === "object" && Object.keys(o[a]).forEach(function (s) { n[a] || (n[a] = {}), n[a][s] = o[a][s]; }); }), r.hooks) {
    var i = r.hooks();
    Object.keys(i).forEach(function (a) { no[a] || (no[a] = []), no[a].push(i[a]); });
} r.provides && r.provides(go); }), n; }
function Wc(e, t) { for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    r[o - 2] = arguments[o]; var i = no[e] || []; return i.forEach(function (a) { t = a.apply(null, [t].concat(r)); }), t; }
function zr(e) { for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r]; var o = no[e] || []; o.forEach(function (i) { i.apply(null, n); }); }
function vn() { var e = arguments[0], t = Array.prototype.slice.call(arguments, 1); return go[e] ? go[e].apply(null, t) : void 0; }
function Yc(e) { e.prefix === "fa" && (e.prefix = "fas"); var t = e.iconName, n = e.prefix || Kn(); if (t)
    return t = vr(n, t) || t, lh(Qv.definitions, n, t) || lh(Dt.styles, n, t); }
var Qv = new o_, s_ = function () { q.autoReplaceSvg = !1, q.observeMutations = !1, zr("noAuto"); }, l_ = { i2svg: function () { var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}; return xn ? (zr("beforeI2svg", t), vn("pseudoElements2svg", t), vn("i2svg", t)) : Promise.reject("Operation requires a DOM of some kind."); }, watch: function () { var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot; q.autoReplaceSvg === !1 && (q.autoReplaceSvg = !0), q.observeMutations = !0, YN(function () { c_({ autoReplaceSvgRoot: n }), zr("watch", t); }); } }, u_ = { icon: function (t) { if (t === null)
        return null; if (Gs(t) === "object" && t.prefix && t.iconName)
        return { prefix: t.prefix, iconName: vr(t.prefix, t.iconName) || t.iconName }; if (Array.isArray(t) && t.length === 2) {
        var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], r = Tl(t[0]);
        return { prefix: r, iconName: vr(r, n) || n };
    } if (typeof t == "string" && (t.indexOf("".concat(q.cssPrefix, "-")) > -1 || t.match(MN))) {
        var o = Ml(t.split(" "), { skipLookups: !0 });
        return { prefix: o.prefix || Kn(), iconName: vr(o.prefix, o.iconName) || o.iconName };
    } if (typeof t == "string") {
        var i = Kn();
        return { prefix: i, iconName: vr(i, t) || t };
    } } }, gt = { noAuto: s_, config: q, dom: l_, parse: u_, library: Qv, findIconDefinition: Yc, toHtml: ca }, c_ = function () { var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot, r = n === void 0 ? de : n; (Object.keys(Dt.styles).length > 0 || q.autoFetchSvg) && xn && q.autoReplaceSvg && gt.dom.i2svg({ node: r }); };
function Pl(e, t) { return Object.defineProperty(e, "abstract", { get: t }), Object.defineProperty(e, "html", { get: function () { return e.abstract.map(function (r) { return ca(r); }); } }), Object.defineProperty(e, "node", { get: function () { if (xn) {
        var r = de.createElement("div");
        return r.innerHTML = e.html, r.children;
    } } }), e; }
function f_(e) { var t = e.children, n = e.main, r = e.mask, o = e.attributes, i = e.styles, a = e.transform; if (_d(a) && n.found && !r.found) {
    var s = n.width, l = n.height, u = { x: s / l / 2, y: .5 };
    o.style = Cl(B(B({}, i), {}, { "transform-origin": "".concat(u.x + a.x / 16, "em ").concat(u.y + a.y / 16, "em") }));
} return [{ tag: "svg", attributes: o, children: t }]; }
function d_(e) { var t = e.prefix, n = e.iconName, r = e.children, o = e.attributes, i = e.symbol, a = i === !0 ? "".concat(t, "-").concat(q.cssPrefix, "-").concat(n) : i; return [{ tag: "svg", attributes: { style: "display: none;" }, children: [{ tag: "symbol", attributes: B(B({}, o), {}, { id: a }), children: r }] }]; }
function Pd(e) { var t = e.icons, n = t.main, r = t.mask, o = e.prefix, i = e.iconName, a = e.transform, s = e.symbol, l = e.title, u = e.maskId, c = e.titleId, f = e.extra, d = e.watchable, p = d === void 0 ? !1 : d, g = r.found ? r : n, y = g.width, x = g.height, m = o === "fak", h = [q.replacementClass, i ? "".concat(q.cssPrefix, "-").concat(i) : ""].filter(function (O) { return f.classes.indexOf(O) === -1; }).filter(function (O) { return O !== "" || !!O; }).concat(f.classes).join(" "), v = { children: [], attributes: B(B({}, f.attributes), {}, { "data-prefix": o, "data-icon": i, class: h, role: f.attributes.role || "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 ".concat(y, " ").concat(x) }) }, w = m && !~f.classes.indexOf("fa-fw") ? { width: "".concat(y / x * 16 * .0625, "em") } : {}; p && (v.attributes[Pr] = ""), l && (v.children.push({ tag: "title", attributes: { id: v.attributes["aria-labelledby"] || "title-".concat(c || Ki()) }, children: [l] }), delete v.attributes.title); var S = B(B({}, v), {}, { prefix: o, iconName: i, main: n, mask: r, maskId: u, transform: a, symbol: s, styles: B(B({}, w), f.styles) }), N = r.found && n.found ? vn("generateAbstractMask", S) || { children: [], attributes: {} } : vn("generateAbstractIcon", S) || { children: [], attributes: {} }, C = N.children, M = N.attributes; return S.children = C, S.attributes = M, s ? d_(S) : f_(S); }
function dh(e) { var t = e.content, n = e.width, r = e.height, o = e.transform, i = e.title, a = e.extra, s = e.watchable, l = s === void 0 ? !1 : s, u = B(B(B({}, a.attributes), i ? { title: i } : {}), {}, { class: a.classes.join(" ") }); l && (u[Pr] = ""); var c = B({}, a.styles); _d(o) && (c.transform = BN({ transform: o, startCentered: !0, width: n, height: r }), c["-webkit-transform"] = c.transform); var f = Cl(c); f.length > 0 && (u.style = f); var d = []; return d.push({ tag: "span", attributes: u, children: [t] }), i && d.push({ tag: "span", attributes: { class: "sr-only" }, children: [i] }), d; }
function m_(e) { var t = e.content, n = e.title, r = e.extra, o = B(B(B({}, r.attributes), n ? { title: n } : {}), {}, { class: r.classes.join(" ") }), i = Cl(r.styles); i.length > 0 && (o.style = i); var a = []; return a.push({ tag: "span", attributes: o, children: [t] }), n && a.push({ tag: "span", attributes: { class: "sr-only" }, children: [n] }), a; }
var Tu = Dt.styles;
function Xc(e) { var t = e[0], n = e[1], r = e.slice(4), o = xd(r, 1), i = o[0], a = null; return Array.isArray(i) ? a = { tag: "g", attributes: { class: "".concat(q.cssPrefix, "-").concat(yr.GROUP) }, children: [{ tag: "path", attributes: { class: "".concat(q.cssPrefix, "-").concat(yr.SECONDARY), fill: "currentColor", d: i[0] } }, { tag: "path", attributes: { class: "".concat(q.cssPrefix, "-").concat(yr.PRIMARY), fill: "currentColor", d: i[1] } }] } : a = { tag: "path", attributes: { fill: "currentColor", d: i } }, { found: !0, width: t, height: n, icon: a }; }
var p_ = { found: !1, width: 512, height: 512 };
function h_(e, t) { !$v && !q.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.')); }
function Qc(e, t) { var n = t; return t === "fa" && q.styleDefault !== null && (t = Kn()), new Promise(function (r, o) { if (vn("missingIconAbstract"), n === "fa") {
    var i = Xv(e) || {};
    e = i.iconName || e, t = i.prefix || t;
} if (e && t && Tu[t] && Tu[t][e]) {
    var a = Tu[t][e];
    return r(Xc(a));
} h_(e, t), r(B(B({}, p_), {}, { icon: q.showMissingIcons && e ? vn("missingIconAbstract") || {} : {} })); }); }
var mh = function () { }, Gc = q.measurePerformance && Va && Va.mark && Va.measure ? Va : { mark: mh, measure: mh }, ci = 'FA "6.4.0"', g_ = function (t) { return Gc.mark("".concat(ci, " ").concat(t, " begins")), function () { return Gv(t); }; }, Gv = function (t) { Gc.mark("".concat(ci, " ").concat(t, " ends")), Gc.measure("".concat(ci, " ").concat(t), "".concat(ci, " ").concat(t, " begins"), "".concat(ci, " ").concat(t, " ends")); }, zd = { begin: g_, end: Gv }, ps = function () { };
function ph(e) { var t = e.getAttribute ? e.getAttribute(Pr) : null; return typeof t == "string"; }
function y_(e) { var t = e.getAttribute ? e.getAttribute(bd) : null, n = e.getAttribute ? e.getAttribute(kd) : null; return t && n; }
function v_(e) { return e && e.classList && e.classList.contains && e.classList.contains(q.replacementClass); }
function w_() { if (q.autoReplaceSvg === !0)
    return hs.replace; var e = hs[q.autoReplaceSvg]; return e || hs.replace; }
function x_(e) { return de.createElementNS("http://www.w3.org/2000/svg", e); }
function S_(e) { return de.createElement(e); }
function Kv(e) { var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.ceFn, r = n === void 0 ? e.tag === "svg" ? x_ : S_ : n; if (typeof e == "string")
    return de.createTextNode(e); var o = r(e.tag); Object.keys(e.attributes || []).forEach(function (a) { o.setAttribute(a, e.attributes[a]); }); var i = e.children || []; return i.forEach(function (a) { o.appendChild(Kv(a, { ceFn: r })); }), o; }
function b_(e) { var t = " ".concat(e.outerHTML, " "); return t = "".concat(t, "Font Awesome fontawesome.com "), t; }
var hs = { replace: function (t) { var n = t[0]; if (n.parentNode)
        if (t[1].forEach(function (o) { n.parentNode.insertBefore(Kv(o), n); }), n.getAttribute(Pr) === null && q.keepOriginalSource) {
            var r = de.createComment(b_(n));
            n.parentNode.replaceChild(r, n);
        }
        else
            n.remove(); }, nest: function (t) {
        var n = t[0], r = t[1];
        if (~Nd(n).indexOf(q.replacementClass))
            return hs.replace(t);
        var o = new RegExp("".concat(q.cssPrefix, "-.*"));
        if (delete r[0].attributes.id, r[0].attributes.class) {
            var i = r[0].attributes.class.split(" ").reduce(function (s, l) { return l === q.replacementClass || l.match(o) ? s.toSvg.push(l) : s.toNode.push(l), s; }, { toNode: [], toSvg: [] });
            r[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? n.removeAttribute("class") : n.setAttribute("class", i.toNode.join(" "));
        }
        var a = r.map(function (s) { return ca(s); }).join(`
`);
        n.setAttribute(Pr, ""), n.innerHTML = a;
    } };
function hh(e) { e(); }
function Zv(e, t) { var n = typeof t == "function" ? t : ps; if (e.length === 0)
    n();
else {
    var r = hh;
    q.mutateApproach === _N && (r = Gn.requestAnimationFrame || hh), r(function () { var o = w_(), i = zd.begin("mutate"); e.map(o), i(), n(); });
} }
var Ad = !1;
function Jv() { Ad = !0; }
function Kc() { Ad = !1; }
var Zs = null;
function gh(e) { if (ih && q.observeMutations) {
    var t = e.treeCallback, n = t === void 0 ? ps : t, r = e.nodeCallback, o = r === void 0 ? ps : r, i = e.pseudoElementsCallback, a = i === void 0 ? ps : i, s = e.observeMutationsRoot, l = s === void 0 ? de : s;
    Zs = new ih(function (u) { if (!Ad) {
        var c = Kn();
        Lo(u).forEach(function (f) { if (f.type === "childList" && f.addedNodes.length > 0 && !ph(f.addedNodes[0]) && (q.searchPseudoElements && a(f.target), n(f.target)), f.type === "attributes" && f.target.parentNode && q.searchPseudoElements && a(f.target.parentNode), f.type === "attributes" && ph(f.target) && ~IN.indexOf(f.attributeName))
            if (f.attributeName === "class" && y_(f.target)) {
                var d = Ml(Nd(f.target)), p = d.prefix, g = d.iconName;
                f.target.setAttribute(bd, p || c), g && f.target.setAttribute(kd, g);
            }
            else
                v_(f.target) && o(f.target); });
    } }), xn && Zs.observe(l, { childList: !0, attributes: !0, characterData: !0, subtree: !0 });
} }
function k_() { Zs && Zs.disconnect(); }
function E_(e) { var t = e.getAttribute("style"), n = []; return t && (n = t.split(";").reduce(function (r, o) { var i = o.split(":"), a = i[0], s = i.slice(1); return a && s.length > 0 && (r[a] = s.join(":").trim()), r; }, {})), n; }
function N_(e) { var t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "", o = Ml(Nd(e)); return o.prefix || (o.prefix = Kn()), t && n && (o.prefix = t, o.iconName = n), o.iconName && o.prefix || (o.prefix && r.length > 0 && (o.iconName = n_(o.prefix, e.innerText) || Td(o.prefix, Uc(e.innerText))), !o.iconName && q.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (o.iconName = e.firstChild.data)), o; }
function __(e) { var t = Lo(e.attributes).reduce(function (o, i) { return o.name !== "class" && o.name !== "style" && (o[i.name] = i.value), o; }, {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id"); return q.autoA11y && (n ? t["aria-labelledby"] = "".concat(q.replacementClass, "-title-").concat(r || Ki()) : (t["aria-hidden"] = "true", t.focusable = "false")), t; }
function C_() { return { iconName: null, title: null, titleId: null, prefix: null, transform: Qt, symbol: !1, mask: { iconName: null, prefix: null, rest: [] }, maskId: null, extra: { classes: [], styles: {}, attributes: {} } }; }
function yh(e) { var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { styleParser: !0 }, n = N_(e), r = n.iconName, o = n.prefix, i = n.rest, a = __(e), s = Wc("parseNodeAttributes", {}, e), l = t.styleParser ? E_(e) : []; return B({ iconName: r, title: e.getAttribute("title"), titleId: e.getAttribute("data-fa-title-id"), prefix: o, transform: Qt, mask: { iconName: null, prefix: null, rest: [] }, maskId: null, symbol: !1, extra: { classes: i, styles: l, attributes: a } }, s); }
var T_ = Dt.styles;
function e1(e) { var t = q.autoReplaceSvg === "nest" ? yh(e, { styleParser: !1 }) : yh(e); return ~t.extra.classes.indexOf(Lv) ? vn("generateLayersText", e, t) : vn("generateSvgReplacementMutation", e, t); }
var Zn = new Set;
Ed.map(function (e) { Zn.add("fa-".concat(e)); });
Object.keys(Yi[ce]).map(Zn.add.bind(Zn));
Object.keys(Yi[be]).map(Zn.add.bind(Zn));
Zn = la(Zn);
function vh(e) { var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null; if (!xn)
    return Promise.resolve(); var n = de.documentElement.classList, r = function (f) { return n.add("".concat(ah, "-").concat(f)); }, o = function (f) { return n.remove("".concat(ah, "-").concat(f)); }, i = q.autoFetchSvg ? Zn : Ed.map(function (c) { return "fa-".concat(c); }).concat(Object.keys(T_)); i.includes("fa") || i.push("fa"); var a = [".".concat(Lv, ":not([").concat(Pr, "])")].concat(i.map(function (c) { return ".".concat(c, ":not([").concat(Pr, "])"); })).join(", "); if (a.length === 0)
    return Promise.resolve(); var s = []; try {
    s = Lo(e.querySelectorAll(a));
}
catch { } if (s.length > 0)
    r("pending"), o("complete");
else
    return Promise.resolve(); var l = zd.begin("onTree"), u = s.reduce(function (c, f) { try {
    var d = e1(f);
    d && c.push(d);
}
catch (p) {
    $v || p.name === "MissingIcon" && console.error(p);
} return c; }, []); return new Promise(function (c, f) { Promise.all(u).then(function (d) { Zv(d, function () { r("active"), r("complete"), o("pending"), typeof t == "function" && t(), l(), c(); }); }).catch(function (d) { l(), f(d); }); }); }
function M_(e) { var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null; e1(e).then(function (n) { n && Zv([n], t); }); }
function P_(e) { return function (t) { var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = (t || {}).icon ? t : Yc(t || {}), o = n.mask; return o && (o = (o || {}).icon ? o : Yc(o || {})), e(r, B(B({}, n), {}, { mask: o })); }; }
var z_ = function (t) { var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.transform, o = r === void 0 ? Qt : r, i = n.symbol, a = i === void 0 ? !1 : i, s = n.mask, l = s === void 0 ? null : s, u = n.maskId, c = u === void 0 ? null : u, f = n.title, d = f === void 0 ? null : f, p = n.titleId, g = p === void 0 ? null : p, y = n.classes, x = y === void 0 ? [] : y, m = n.attributes, h = m === void 0 ? {} : m, v = n.styles, w = v === void 0 ? {} : v; if (t) {
    var S = t.prefix, N = t.iconName, C = t.icon;
    return Pl(B({ type: "icon" }, t), function () { return zr("beforeDOMElementCreation", { iconDefinition: t, params: n }), q.autoA11y && (d ? h["aria-labelledby"] = "".concat(q.replacementClass, "-title-").concat(g || Ki()) : (h["aria-hidden"] = "true", h.focusable = "false")), Pd({ icons: { main: Xc(C), mask: l ? Xc(l.icon) : { found: !1, width: null, height: null, icon: {} } }, prefix: S, iconName: N, transform: B(B({}, Qt), o), symbol: a, title: d, maskId: c, titleId: g, extra: { attributes: h, styles: w, classes: x } }); });
} }, A_ = { mixout: function () { return { icon: P_(z_) }; }, hooks: function () { return { mutationObserverCallbacks: function (n) { return n.treeCallback = vh, n.nodeCallback = M_, n; } }; }, provides: function (t) { t.i2svg = function (n) { var r = n.node, o = r === void 0 ? de : r, i = n.callback, a = i === void 0 ? function () { } : i; return vh(o, a); }, t.generateSvgReplacementMutation = function (n, r) { var o = r.iconName, i = r.title, a = r.titleId, s = r.prefix, l = r.transform, u = r.symbol, c = r.mask, f = r.maskId, d = r.extra; return new Promise(function (p, g) { Promise.all([Qc(o, s), c.iconName ? Qc(c.iconName, c.prefix) : Promise.resolve({ found: !1, width: 512, height: 512, icon: {} })]).then(function (y) { var x = xd(y, 2), m = x[0], h = x[1]; p([n, Pd({ icons: { main: m, mask: h }, prefix: s, iconName: o, transform: l, symbol: u, maskId: f, title: i, titleId: a, extra: d, watchable: !0 })]); }).catch(g); }); }, t.generateAbstractIcon = function (n) { var r = n.children, o = n.attributes, i = n.main, a = n.transform, s = n.styles, l = Cl(s); l.length > 0 && (o.style = l); var u; return _d(a) && (u = vn("generateAbstractTransformGrouping", { main: i, transform: a, containerWidth: i.width, iconWidth: i.width })), r.push(u || i.icon), { children: r, attributes: o }; }; } }, I_ = { mixout: function () { return { layer: function (n) { var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = r.classes, i = o === void 0 ? [] : o; return Pl({ type: "layer" }, function () { zr("beforeDOMElementCreation", { assembler: n, params: r }); var a = []; return n(function (s) { Array.isArray(s) ? s.map(function (l) { a = a.concat(l.abstract); }) : a = a.concat(s.abstract); }), [{ tag: "span", attributes: { class: ["".concat(q.cssPrefix, "-layers")].concat(la(i)).join(" ") }, children: a }]; }); } }; } }, O_ = { mixout: function () { return { counter: function (n) { var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = r.title, i = o === void 0 ? null : o, a = r.classes, s = a === void 0 ? [] : a, l = r.attributes, u = l === void 0 ? {} : l, c = r.styles, f = c === void 0 ? {} : c; return Pl({ type: "counter", content: n }, function () { return zr("beforeDOMElementCreation", { content: n, params: r }), m_({ content: n.toString(), title: i, extra: { attributes: u, styles: f, classes: ["".concat(q.cssPrefix, "-layers-counter")].concat(la(s)) } }); }); } }; } }, $_ = { mixout: function () { return { text: function (n) { var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = r.transform, i = o === void 0 ? Qt : o, a = r.title, s = a === void 0 ? null : a, l = r.classes, u = l === void 0 ? [] : l, c = r.attributes, f = c === void 0 ? {} : c, d = r.styles, p = d === void 0 ? {} : d; return Pl({ type: "text", content: n }, function () { return zr("beforeDOMElementCreation", { content: n, params: r }), dh({ content: n, transform: B(B({}, Qt), i), title: s, extra: { attributes: f, styles: p, classes: ["".concat(q.cssPrefix, "-layers-text")].concat(la(u)) } }); }); } }; }, provides: function (t) { t.generateLayersText = function (n, r) { var o = r.title, i = r.transform, a = r.extra, s = null, l = null; if (Av) {
        var u = parseInt(getComputedStyle(n).fontSize, 10), c = n.getBoundingClientRect();
        s = c.width / u, l = c.height / u;
    } return q.autoA11y && !o && (a.attributes["aria-hidden"] = "true"), Promise.resolve([n, dh({ content: n.innerHTML, width: s, height: l, transform: i, title: o, extra: a, watchable: !0 })]); }; } }, L_ = new RegExp('"', "ug"), wh = [1105920, 1112319];
function R_(e) { var t = e.replace(L_, ""), n = GN(t, 0), r = n >= wh[0] && n <= wh[1], o = t.length === 2 ? t[0] === t[1] : !1; return { value: Uc(o ? t[0] : t), isSecondary: r || o }; }
function xh(e, t) {
    var n = "".concat(NN).concat(t.replace(":", "-"));
    return new Promise(function (r, o) {
        if (e.getAttribute(n) !== null)
            return r();
        var i = Lo(e.children), a = i.filter(function (C) { return C.getAttribute(Bc) === t; })[0], s = Gn.getComputedStyle(e, t), l = s.getPropertyValue("font-family").match(PN), u = s.getPropertyValue("font-weight"), c = s.getPropertyValue("content");
        if (a && !l)
            return e.removeChild(a), r();
        if (l && c !== "none" && c !== "") {
            var f = s.getPropertyValue("content"), d = ~["Sharp"].indexOf(l[2]) ? be : ce, p = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(l[2]) ? Xi[d][l[2].toLowerCase()] : zN[d][u], g = R_(f), y = g.value, x = g.isSecondary, m = l[0].startsWith("FontAwesome"), h = Td(p, y), v = h;
            if (m) {
                var w = r_(y);
                w.iconName && w.prefix && (h = w.iconName, p = w.prefix);
            }
            if (h && !x && (!a || a.getAttribute(bd) !== p || a.getAttribute(kd) !== v)) {
                e.setAttribute(n, v), a && e.removeChild(a);
                var S = C_(), N = S.extra;
                N.attributes[Bc] = t, Qc(h, p).then(function (C) {
                    var M = Pd(B(B({}, S), {}, { icons: { main: C, mask: Md() }, prefix: p, iconName: v, extra: N, watchable: !0 })), O = de.createElement("svg");
                    t === "::before" ? e.insertBefore(O, e.firstChild) : e.appendChild(O), O.outerHTML = M.map(function (R) { return ca(R); }).join(`
`), e.removeAttribute(n), r();
                }).catch(o);
            }
            else
                r();
        }
        else
            r();
    });
}
function D_(e) { return Promise.all([xh(e, "::before"), xh(e, "::after")]); }
function j_(e) { return e.parentNode !== document.head && !~CN.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Bc) && (!e.parentNode || e.parentNode.tagName !== "svg"); }
function Sh(e) { if (xn)
    return new Promise(function (t, n) { var r = Lo(e.querySelectorAll("*")).filter(j_).map(D_), o = zd.begin("searchPseudoElements"); Jv(), Promise.all(r).then(function () { o(), Kc(), t(); }).catch(function () { o(), Kc(), n(); }); }); }
var F_ = { hooks: function () { return { mutationObserverCallbacks: function (n) { return n.pseudoElementsCallback = Sh, n; } }; }, provides: function (t) { t.pseudoElements2svg = function (n) { var r = n.node, o = r === void 0 ? de : r; q.searchPseudoElements && Sh(o); }; } }, bh = !1, V_ = { mixout: function () { return { dom: { unwatch: function () { Jv(), bh = !0; } } }; }, hooks: function () { return { bootstrap: function () { gh(Wc("mutationObserverCallbacks", {})); }, noAuto: function () { k_(); }, watch: function (n) { var r = n.observeMutationsRoot; bh ? Kc() : gh(Wc("mutationObserverCallbacks", { observeMutationsRoot: r })); } }; } }, kh = function (t) { var n = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 }; return t.toLowerCase().split(" ").reduce(function (r, o) { var i = o.toLowerCase().split("-"), a = i[0], s = i.slice(1).join("-"); if (a && s === "h")
    return r.flipX = !0, r; if (a && s === "v")
    return r.flipY = !0, r; if (s = parseFloat(s), isNaN(s))
    return r; switch (a) {
    case "grow":
        r.size = r.size + s;
        break;
    case "shrink":
        r.size = r.size - s;
        break;
    case "left":
        r.x = r.x - s;
        break;
    case "right":
        r.x = r.x + s;
        break;
    case "up":
        r.y = r.y - s;
        break;
    case "down":
        r.y = r.y + s;
        break;
    case "rotate":
        r.rotate = r.rotate + s;
        break;
} return r; }, n); }, H_ = { mixout: function () { return { parse: { transform: function (n) { return kh(n); } } }; }, hooks: function () { return { parseNodeAttributes: function (n, r) { var o = r.getAttribute("data-fa-transform"); return o && (n.transform = kh(o)), n; } }; }, provides: function (t) { t.generateAbstractTransformGrouping = function (n) { var r = n.main, o = n.transform, i = n.containerWidth, a = n.iconWidth, s = { transform: "translate(".concat(i / 2, " 256)") }, l = "translate(".concat(o.x * 32, ", ").concat(o.y * 32, ") "), u = "scale(".concat(o.size / 16 * (o.flipX ? -1 : 1), ", ").concat(o.size / 16 * (o.flipY ? -1 : 1), ") "), c = "rotate(".concat(o.rotate, " 0 0)"), f = { transform: "".concat(l, " ").concat(u, " ").concat(c) }, d = { transform: "translate(".concat(a / 2 * -1, " -256)") }, p = { outer: s, inner: f, path: d }; return { tag: "g", attributes: B({}, p.outer), children: [{ tag: "g", attributes: B({}, p.inner), children: [{ tag: r.icon.tag, children: r.icon.children, attributes: B(B({}, r.icon.attributes), p.path) }] }] }; }; } }, Mu = { x: 0, y: 0, width: "100%", height: "100%" };
function Eh(e) { var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0; return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e; }
function B_(e) { return e.tag === "g" ? e.children : [e]; }
var U_ = { hooks: function () { return { parseNodeAttributes: function (n, r) { var o = r.getAttribute("data-fa-mask"), i = o ? Ml(o.split(" ").map(function (a) { return a.trim(); })) : Md(); return i.prefix || (i.prefix = Kn()), n.mask = i, n.maskId = r.getAttribute("data-fa-mask-id"), n; } }; }, provides: function (t) { t.generateAbstractMask = function (n) { var r = n.children, o = n.attributes, i = n.main, a = n.mask, s = n.maskId, l = n.transform, u = i.width, c = i.icon, f = a.width, d = a.icon, p = HN({ transform: l, containerWidth: f, iconWidth: u }), g = { tag: "rect", attributes: B(B({}, Mu), {}, { fill: "white" }) }, y = c.children ? { children: c.children.map(Eh) } : {}, x = { tag: "g", attributes: B({}, p.inner), children: [Eh(B({ tag: c.tag, attributes: B(B({}, c.attributes), p.path) }, y))] }, m = { tag: "g", attributes: B({}, p.outer), children: [x] }, h = "mask-".concat(s || Ki()), v = "clip-".concat(s || Ki()), w = { tag: "mask", attributes: B(B({}, Mu), {}, { id: h, maskUnits: "userSpaceOnUse", maskContentUnits: "userSpaceOnUse" }), children: [g, m] }, S = { tag: "defs", children: [{ tag: "clipPath", attributes: { id: v }, children: B_(d) }, w] }; return r.push(S, { tag: "rect", attributes: B({ fill: "currentColor", "clip-path": "url(#".concat(v, ")"), mask: "url(#".concat(h, ")") }, Mu) }), { children: r, attributes: o }; }; } }, q_ = { provides: function (t) { var n = !1; Gn.matchMedia && (n = Gn.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function () { var r = [], o = { fill: "currentColor" }, i = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" }; r.push({ tag: "path", attributes: B(B({}, o), {}, { d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z" }) }); var a = B(B({}, i), {}, { attributeName: "opacity" }), s = { tag: "circle", attributes: B(B({}, o), {}, { cx: "256", cy: "364", r: "28" }), children: [] }; return n || s.children.push({ tag: "animate", attributes: B(B({}, i), {}, { attributeName: "r", values: "28;14;28;28;14;28;" }) }, { tag: "animate", attributes: B(B({}, a), {}, { values: "1;0;1;1;0;1;" }) }), r.push(s), r.push({ tag: "path", attributes: B(B({}, o), {}, { opacity: "1", d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z" }), children: n ? [] : [{ tag: "animate", attributes: B(B({}, a), {}, { values: "1;0;0;0;0;1;" }) }] }), n || r.push({ tag: "path", attributes: B(B({}, o), {}, { opacity: "0", d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z" }), children: [{ tag: "animate", attributes: B(B({}, a), {}, { values: "0;0;1;1;0;0;" }) }] }), { tag: "g", attributes: { class: "missing" }, children: r }; }; } }, W_ = { hooks: function () { return { parseNodeAttributes: function (n, r) { var o = r.getAttribute("data-fa-symbol"), i = o === null ? !1 : o === "" ? !0 : o; return n.symbol = i, n; } }; } }, Y_ = [qN, A_, I_, O_, $_, F_, V_, H_, U_, q_, W_];
a_(Y_, { mixoutsTo: gt });
gt.noAuto;
gt.config;
gt.library;
gt.dom;
var Zc = gt.parse;
gt.findIconDefinition;
gt.toHtml;
var X_ = gt.icon;
gt.layer;
gt.text;
gt.counter;
var t1 = { exports: {} }, Q_ = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", G_ = Q_, K_ = G_;
function n1() { }
function r1() { }
r1.resetWarningCache = n1;
var Z_ = function () { function e(r, o, i, a, s, l) { if (l !== K_) {
    var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
    throw u.name = "Invariant Violation", u;
} } e.isRequired = e; function t() { return e; } var n = { array: e, bigint: e, bool: e, func: e, number: e, object: e, string: e, symbol: e, any: e, arrayOf: t, element: e, elementType: e, instanceOf: t, node: e, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t, checkPropTypes: r1, resetWarningCache: n1 }; return n.PropTypes = n, n; };
t1.exports = Z_();
var J_ = t1.exports;
const K = nl(J_);
function Nh(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (o) { return Object.getOwnPropertyDescriptor(e, o).enumerable; })), n.push.apply(n, r);
} return n; }
function Ln(e) { for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nh(Object(n), !0).forEach(function (r) { ro(e, r, n[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nh(Object(n)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r)); });
} return e; }
function Js(e) {
    "@babel/helpers - typeof";
    return Js = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) { return typeof t; } : function (t) { return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t; }, Js(e);
}
function ro(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e; }
function eC(e, t) { if (e == null)
    return {}; var n = {}, r = Object.keys(e), o, i; for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]); return n; }
function tC(e, t) { if (e == null)
    return {}; var n = eC(e, t), r, o; if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
        r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
} return n; }
function Jc(e) { return nC(e) || rC(e) || oC(e) || iC(); }
function nC(e) { if (Array.isArray(e))
    return ef(e); }
function rC(e) { if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e); }
function oC(e, t) { if (e) {
    if (typeof e == "string")
        return ef(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
        return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return ef(e, t);
} }
function ef(e, t) { (t == null || t > e.length) && (t = e.length); for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n]; return r; }
function iC() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function aC(e) { var t, n = e.beat, r = e.fade, o = e.beatFade, i = e.bounce, a = e.shake, s = e.flash, l = e.spin, u = e.spinPulse, c = e.spinReverse, f = e.pulse, d = e.fixedWidth, p = e.inverse, g = e.border, y = e.listItem, x = e.flip, m = e.size, h = e.rotation, v = e.pull, w = (t = { "fa-beat": n, "fa-fade": r, "fa-beat-fade": o, "fa-bounce": i, "fa-shake": a, "fa-flash": s, "fa-spin": l, "fa-spin-reverse": c, "fa-spin-pulse": u, "fa-pulse": f, "fa-fw": d, "fa-inverse": p, "fa-border": g, "fa-li": y, "fa-flip": x === !0, "fa-flip-horizontal": x === "horizontal" || x === "both", "fa-flip-vertical": x === "vertical" || x === "both" }, ro(t, "fa-".concat(m), typeof m < "u" && m !== null), ro(t, "fa-rotate-".concat(h), typeof h < "u" && h !== null && h !== 0), ro(t, "fa-pull-".concat(v), typeof v < "u" && v !== null), ro(t, "fa-swap-opacity", e.swapOpacity), t); return Object.keys(w).map(function (S) { return w[S] ? S : null; }).filter(function (S) { return S; }); }
function sC(e) { return e = e - 0, e === e; }
function o1(e) { return sC(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function (t, n) { return n ? n.toUpperCase() : ""; }), e.substr(0, 1).toLowerCase() + e.substr(1)); }
var lC = ["style"];
function uC(e) { return e.charAt(0).toUpperCase() + e.slice(1); }
function cC(e) { return e.split(";").map(function (t) { return t.trim(); }).filter(function (t) { return t; }).reduce(function (t, n) { var r = n.indexOf(":"), o = o1(n.slice(0, r)), i = n.slice(r + 1).trim(); return o.startsWith("webkit") ? t[uC(o)] = i : t[o] = i, t; }, {}); }
function i1(e, t) { var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}; if (typeof t == "string")
    return t; var r = (t.children || []).map(function (l) { return i1(e, l); }), o = Object.keys(t.attributes || {}).reduce(function (l, u) { var c = t.attributes[u]; switch (u) {
    case "class":
        l.attrs.className = c, delete t.attributes.class;
        break;
    case "style":
        l.attrs.style = cC(c);
        break;
    default: u.indexOf("aria-") === 0 || u.indexOf("data-") === 0 ? l.attrs[u.toLowerCase()] = c : l.attrs[o1(u)] = c;
} return l; }, { attrs: {} }), i = n.style, a = i === void 0 ? {} : i, s = tC(n, lC); return o.attrs.style = Ln(Ln({}, o.attrs.style), a), e.apply(void 0, [t.tag, Ln(Ln({}, o.attrs), s)].concat(Jc(r))); }
var a1 = !1;
try {
    a1 = !0;
}
catch { }
function fC() { if (!a1 && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
} }
function _h(e) { if (e && Js(e) === "object" && e.prefix && e.iconName && e.icon)
    return e; if (Zc.icon)
    return Zc.icon(e); if (e === null)
    return null; if (e && Js(e) === "object" && e.prefix && e.iconName)
    return e; if (Array.isArray(e) && e.length === 2)
    return { prefix: e[0], iconName: e[1] }; if (typeof e == "string")
    return { prefix: "fas", iconName: e }; }
function Pu(e, t) { return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? ro({}, e, t) : {}; }
var xt = pf.forwardRef(function (e, t) { var n = e.icon, r = e.mask, o = e.symbol, i = e.className, a = e.title, s = e.titleId, l = e.maskId, u = _h(n), c = Pu("classes", [].concat(Jc(aC(e)), Jc(i.split(" ")))), f = Pu("transform", typeof e.transform == "string" ? Zc.transform(e.transform) : e.transform), d = Pu("mask", _h(r)), p = X_(u, Ln(Ln(Ln(Ln({}, c), f), d), {}, { symbol: o, title: a, titleId: s, maskId: l })); if (!p)
    return fC("Could not find icon", u), null; var g = p.abstract, y = { ref: t }; return Object.keys(e).forEach(function (x) { xt.defaultProps.hasOwnProperty(x) || (y[x] = e[x]); }), dC(g[0], y); });
xt.displayName = "FontAwesomeIcon";
xt.propTypes = { beat: K.bool, border: K.bool, beatFade: K.bool, bounce: K.bool, className: K.string, fade: K.bool, flash: K.bool, mask: K.oneOfType([K.object, K.array, K.string]), maskId: K.string, fixedWidth: K.bool, inverse: K.bool, flip: K.oneOf([!0, !1, "horizontal", "vertical", "both"]), icon: K.oneOfType([K.object, K.array, K.string]), listItem: K.bool, pull: K.oneOf(["right", "left"]), pulse: K.bool, rotation: K.oneOf([0, 90, 180, 270]), shake: K.bool, size: K.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]), spin: K.bool, spinPulse: K.bool, spinReverse: K.bool, symbol: K.oneOfType([K.bool, K.string]), title: K.string, titleId: K.string, transform: K.oneOfType([K.string, K.object]), swapOpacity: K.bool };
xt.defaultProps = { border: !1, className: "", mask: null, maskId: null, fixedWidth: !1, inverse: !1, flip: !1, icon: null, listItem: !1, pull: null, pulse: !1, rotation: null, size: null, spin: !1, spinPulse: !1, spinReverse: !1, beat: !1, fade: !1, beatFade: !1, bounce: !1, shake: !1, symbol: !1, title: "", titleId: null, transform: null, swapOpacity: !1 };
var dC = i1.bind(null, pf.createElement);
const mC = ({ playing: e, togglePlay: t, setBehaviorGraph: n, examples: r, specGenerator: o }) => { const [i, a] = T.useState(!1), [s, l] = T.useState(!1), [u, c] = T.useState(!1), [f, d] = T.useState(!1); return b.jsxs(b.Fragment, { children: [b.jsxs(Z4, { children: [b.jsx(Xt, { title: "Help", onClick: () => c(!0), children: b.jsx(xt, { icon: cN }) }), b.jsx(Xt, { title: "Load", onClick: () => a(!0), children: b.jsx(xt, { icon: mN }) }), b.jsx(Xt, { title: "Save", onClick: () => l(!0), children: b.jsx(xt, { icon: dN }) }), b.jsx(Xt, { title: "Clear", onClick: () => d(!0), children: b.jsx(xt, { icon: fN }) }), b.jsx(Xt, { title: "Run", onClick: t, children: b.jsx(xt, { icon: e ? uN : pN }) })] }), b.jsx(sN, { open: i, onClose: () => a(!1), setBehaviorGraph: n, examples: r }), o && b.jsx(lN, { open: s, specGenerator: o, onClose: () => l(!1) }), b.jsx(aN, { open: u, onClose: () => c(!1) }), b.jsx(iN, { open: f, onClose: () => d(!1) })] }); }, pC = { position: "absolute", top: 0, left: 0, visibility: "hidden", height: 0, width: "auto", whiteSpace: "pre" }, Ga = ({ minWidth: e = 30, ...t }) => { const n = T.useRef(null), r = T.useRef(null), [o, i] = T.useState({}), a = T.useCallback(s => { if (s) {
    const l = window.getComputedStyle(s);
    i({ fontSize: l.getPropertyValue("font-size"), paddingLeft: l.getPropertyValue("padding-left"), paddingRight: l.getPropertyValue("padding-right") });
} n.current = s; }, []); return T.useEffect(() => { if (r.current === null || n.current === null)
    return; const s = t.type === "number" || t.type === "float" ? 20 : 0, l = r.current.clientWidth + s; n.current.style.width = Math.max(e, l) + "px"; }, [t.value, e, o, t.type]), b.jsxs(b.Fragment, { children: [b.jsx("input", { ref: a, ...t }), b.jsx("span", { ref: r, style: { ...pC, ...o }, children: t.value })] }); };
var s1 = { exports: {} }; /*!
    Copyright (c) 2018 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
*/
(function (e) { (function () { var t = {}.hasOwnProperty; function n() { for (var r = [], o = 0; o < arguments.length; o++) {
    var i = arguments[o];
    if (i) {
        var a = typeof i;
        if (a === "string" || a === "number")
            r.push(i);
        else if (Array.isArray(i)) {
            if (i.length) {
                var s = n.apply(null, i);
                s && r.push(s);
            }
        }
        else if (a === "object") {
            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
                r.push(i.toString());
                continue;
            }
            for (var l in i)
                t.call(i, l) && i[l] && r.push(l);
        }
    }
} return r.join(" "); } e.exports ? (n.default = n, e.exports = n) : window.classNames = n; })(); })(s1);
var hC = s1.exports;
const Id = nl(hC), Od = { red: ["bg-orange-700", "border-orange-700", "text-white"], green: ["bg-green-600", "border-green-600", "text-white"], lime: ["bg-lime-500", "border-lime-500", "text-gray-900"], purple: ["bg-purple-500", "border-purple-500", "text-white"], blue: ["bg-cyan-600", "border-cyan-600", "text-white"], gray: ["bg-gray-500", "border-gray-500", "text-white"], white: ["bg-white", "border-white", "text-gray-700"] }, l1 = { flow: "white", number: "green", float: "green", integer: "lime", boolean: "red", string: "purple" }, gC = { Event: "red", Logic: "green", Variable: "purple", Query: "purple", Action: "blue", Flow: "gray", Effect: "lime", Time: "gray", None: "gray" }, Zi = (e, t, n, r) => { if (t === void 0)
    return []; const o = e.getNodeSpec(t, n); return r === "source" ? o.outputs : o.inputs; }, tf = (e, t, n, r) => e.some(o => o[r] === t && o[`${r}Handle`] === n), u1 = (e, t, n) => { if (e.source === null || e.target === null)
    return !1; const r = t.getNode(e.source), o = t.getNode(e.target), i = t.getEdges(); if (r === void 0 || o === void 0)
    return !1; const a = Zi(n, r.type, r.data.configuration, "source"), s = a == null ? void 0 : a.find(c => c.name === e.sourceHandle), l = Zi(n, o.type, o.data.configuration, "target"), u = l == null ? void 0 : l.find(c => c.name === e.targetHandle); return s === void 0 || u === void 0 || u.valueType !== "flow" && tf(i, o.id, u.name, "target") ? !1 : s.valueType === u.valueType; }, yC = ({ choices: e, value: t, defaultValue: n, onChange: r, name: o, valueType: i }) => { const a = e == null ? void 0 : e.length, s = String(t) ?? n ?? ""; return a ? b.jsx("select", { className: "bg-gray-600 disabled:bg-gray-700 py-1 px-2 nodrag", value: t ?? n ?? "", onChange: l => r(o, l.currentTarget.value), children: b.jsx(b.Fragment, { children: e.map(l => b.jsx("option", { value: l.value, children: l.text }, l.text)) }) }) : b.jsxs(b.Fragment, { children: [i === "string" && b.jsx(Ga, { type: "text", className: "bg-gray-600 disabled:bg-gray-700 py-1 px-2 nodrag", value: s, onChange: l => r(o, l.currentTarget.value) }), i === "number" && b.jsx(Ga, { type: "number", className: " bg-gray-600 disabled:bg-gray-700 py-1 px-2 nodrag", value: s, onChange: l => r(o, l.currentTarget.value) }), i === "float" && b.jsx(Ga, { type: "number", className: " bg-gray-600 disabled:bg-gray-700 py-1 px-2 nodrag", value: s, onChange: l => r(o, l.currentTarget.value) }), i === "integer" && b.jsx(Ga, { type: "number", className: " bg-gray-600 disabled:bg-gray-700 py-1 px-2 nodrag", value: s, onChange: l => r(o, l.currentTarget.value) }), i === "boolean" && b.jsx("input", { type: "checkbox", className: " bg-gray-600 disabled:bg-gray-700 py-1 px-2 nodrag", value: s, onChange: l => r(o, l.currentTarget.checked) })] }); }, vC = ({ connected: e, specGenerator: t, ...n }) => { const { value: r, name: o, valueType: i, defaultValue: a, choices: s } = n, l = en(), u = i === "flow"; let c = l1[i]; c === void 0 && (c = "red"); const [f, d] = Od[c], p = u === !1 || o !== "flow"; return b.jsxs("div", { className: "flex grow items-center justify-start h-7", children: [u && b.jsx(xt, { icon: Cv, color: "#ffffff", size: "lg" }), p && b.jsx("div", { className: "capitalize mr-2", children: o }), !u && !e && b.jsx(yC, { ...n }), b.jsx(Mo, { id: o, type: "target", position: W.Left, className: Id(d, e ? f : "bg-gray-800"), isValidConnection: g => u1(g, l, t) })] }); }, wC = e => { const t = en(); return T.useCallback((n, r) => { t.setNodes(o => o.map(i => i.id !== e ? i : { ...i, data: { ...i.data, values: { ...i.data.values, [n]: r } } })); }, [t, e]); }, zu = (e, t, n) => { const r = en(); return T.useCallback(() => { r.setNodes(o => o.map(i => { var s, l, u; if (i.id !== e)
    return i; let a; switch (t) {
    case "inputs":
        a = { numInputs: (((s = i.data.configuration) == null ? void 0 : s.numInputs) ?? n) + 1 };
        break;
    case "outputs":
        a = { numOutputs: (((l = i.data.configuration) == null ? void 0 : l.numOutputs) ?? n) + 1 };
        break;
    case "both":
        a = { numCases: (((u = i.data.configuration) == null ? void 0 : u.numCases) ?? n) + 1 };
        break;
} return console.log("DEBUG in callback ", i.data.configuration, a, { ...i.data.configuration, ...a }), { ...i, data: { ...i.data, configuration: { ...i.data.configuration, ...a } } }; })); }, [r, e, t]); };
class un {
    constructor() { this.listeners = []; }
    addListener(t) { this.listeners.push(t); }
    removeListener(t) { this.listeners.splice(this.listeners.indexOf(t), 1); }
    clear() { this.listeners.splice(0, this.listeners.length); }
    emit(t) { this.listeners.length !== 0 && this.listeners.slice(0).forEach(n => { n(t); }); }
    get listenerCount() { return this.listeners.length; }
}
var wr;
(function (e) { e[e.Verbose = 0] = "Verbose", e[e.Info = 1] = "Info", e[e.Warning = 2] = "Warning", e[e.Error = 3] = "Error"; })(wr || (wr = {}));
function xC(e) { switch (e) {
    case "verbose": return wr.Verbose;
    case "info": return wr.Info;
    case "warning": return wr.Warning;
    case "error": return wr.Error;
} }
var Ji;
(function (e) { e[e.None = 0] = "None", e[e.Time = 1] = "Time"; })(Ji || (Ji = {}));
class cn {
    static log(t, n) { this.onLog.emit({ severity: t, text: n }); }
    static verbose(t) { this.onLog.emit({ severity: "verbose", text: t }); }
    static info(t) { this.onLog.emit({ severity: "info", text: t }); }
    static warning(t) { this.onLog.emit({ severity: "warning", text: t }); }
    static error(t) { this.onLog.emit({ severity: "error", text: t }); }
}
cn.logLevel = wr.Info;
cn.prefixStyle = Ji.None;
cn.onLog = new un;
(() => { const e = () => { switch (cn.prefixStyle) {
    case Ji.None: return "";
    case Ji.Time: return new Date().toLocaleTimeString().padStart(11, "0") + " ";
} }; cn.onLog.addListener(t => { cn.logLevel > xC(t.severity) || console.log(e() + t.text); }); })();
class ke {
    static mustEqual(t, n, r = "") { if (t !== n)
        throw new Error(`failed assertion: ${t} must equal ${n}.  ${r}`); }
    static mustBeTrue(t, n = "") { if (!t)
        throw new Error(`failed assertion: ${n}`); }
    static mustBeDefined(t, n = "") { if (t === void 0)
        throw new Error(`failed assertion: variable must be defined ${n}`); }
}
const SC = /[^\d+.-]+/;
function c1(e, t = 0) { try {
    return Number.parseFloat(e);
}
catch {
    return t;
} }
function fa(e, t = 0) { return e.split(SC).filter(Boolean).map(n => c1(n, t)); }
function bC(e) { return e.length > 0 ? e.slice(0, 1).toLocaleUpperCase() + e.slice(1) : e; }
const Ch = { linear: e => e, quadratic: e => e * e, cubic: e => e * e * e, quartric: e => e * e * e * e, quintic: e => e * e * e * e * e, sine: e => 1 - Math.cos(e * Math.PI / 2), exponential: e => Math.pow(2, 10 * (e - 1)), circle: e => 1 - Math.sqrt(1 - e * e), back: e => e * e * ((1.70158 + 1) * e - 1.70158), elastic: e => 1 - Math.pow(Math.cos(e * Math.PI / 2), 3) * Math.cos(e * Math.PI), bounce: e => { if (e < 1 / 2.75)
        return 7.5625 * e * e; if (e < 2 / 2.75) {
        const n = e - .5454545454545454;
        return 7.5625 * n * n + .75;
    } if (e < 2.5 / 2.75) {
        const n = e - .8181818181818182;
        return 7.5625 * n * n + .9375;
    } const t = e - 2.625 / 2.75; return 7.5625 * t * t + .984375; } }, Th = { in: e => e, out: e => t => 1 - e(1 - t), inOut: e => t => t < .5 ? e(t * 2) / 2 : 1 - e((1 - t) * 2) / 2 };
function kC(e) { return new Promise(t => setTimeout(t, Math.round(e * 1e3))); }
function* yo(e, t, n = 1) { let r = e; for (; r < t;)
    yield r, r += n; }
const Ro = 1e-6;
function Nt(e, t, n = Ro) { return Math.abs(e - t) < n; }
function EC(e) { return e * (Math.PI / 180); }
function NC(e) { return e * (180 / Math.PI); }
function _C(e, t, n) { return e < t ? t : e > n ? n : e; }
const f1 = ({ graph: e, registry: t, nodeTypeName: n, nodeConfiguration: r = {} }) => { let o; if (t.nodes[n] && (o = t.nodes[n]), o === void 0)
    throw cn.verbose("known nodes: " + Object.keys(t.nodes).join(", ")), new Error(`no registered node descriptions with the typeName ${n}`); const i = o.nodeFactory(e, r); return i.inputs.forEach(a => { var s; a.valueTypeName !== "flow" && a.value === void 0 && (a.value = (s = t.values[a.valueTypeName]) == null ? void 0 : s.creator()); }), i; }, d1 = ({ variables: e = {}, customEvents: t = {}, values: n, dependencies: r = {} }) => ({ variables: e, customEvents: t, values: n, getDependency: o => { const i = r[o]; return i || console.error(`Dependency not found ${o}.  Did you register it? Existing dependencies: ${Object.keys(r)}`), i; } }), m1 = (e, t, n) => { const r = e.find(o => o.name === t); if (r === void 0)
    throw new Error(`can not find input socket with name ${t} on node of type ${n}`); return r.value; }, p1 = (e, t, n, r) => { const o = e.find(i => i.name === t); if (o === void 0)
    throw new Error(`can not find output socket with name ${t} on node of type ${r}`); o.value = n; };
let Do = class {
    constructor(t) { this.readInput = n => m1(this.inputs, n, this.description.typeName), this.writeOutput = (n, r) => { p1(this.outputs, n, r, this.description.typeName); }, this.inputs = t.inputs, this.outputs = t.outputs, this.description = t.description, this.nodeType = t.nodeType, this.graph = t.graph, this.configuration = t.configuration, this.metadata = t.metadata || {}; }
};
var Xe;
(function (e) { e.Event = "Event", e.Flow = "Flow", e.Async = "Async", e.Function = "Function"; })(Xe || (Xe = {}));
const Mh = e => e.nodeType === Xe.Flow, Ph = e => e.nodeType === Xe.Event, h1 = e => e.nodeType === Xe.Async, zh = e => e.nodeType === Xe.Function;
class $d extends Do {
    constructor(t, n, r = [], o = [], i = {}) { super({ description: { ...t, category: t.category }, inputs: r, outputs: o, graph: n, nodeType: Xe.Async, configuration: i }), ke.mustBeTrue(this.inputs.some(a => a.valueTypeName === "flow")), ke.mustBeTrue(this.outputs.some(a => a.valueTypeName === "flow")); }
    triggered(t, n, r) { throw new Error("not implemented"); }
    dispose() { throw new Error("not implemented"); }
}
class CC extends Do {
    constructor(t, n, r = [], o = [], i = {}) { super({ ...t, description: { ...t, category: t.category }, inputs: r, outputs: o, graph: n, configuration: i, nodeType: Xe.Event }), ke.mustBeTrue(!this.inputs.some(a => a.valueTypeName === "flow")), ke.mustBeTrue(this.outputs.some(a => a.valueTypeName === "flow")); }
    init(t) { throw new Error("not implemented"); }
    dispose(t) { throw new Error("not implemented"); }
}
class TC extends CC {
    constructor(t) { super(t.description, t.graph, t.inputs, t.outputs, t.configuration); }
}
class MC extends Do {
    constructor(t) { super({ ...t, nodeType: Xe.Event }), this.init = n => { this.state = this.initInner({ read: this.readInput, write: this.writeOutput, state: this.state, outputSocketKeys: this.outputSocketKeys, commit: (r, o) => n.commitToNewFiber(this, r, o), configuration: this.configuration, graph: this.graph }); }, this.initInner = t.init, this.disposeInner = t.dispose, this.state = t.initialState, this.outputSocketKeys = t.outputs.map(n => n.name); }
    dispose() { this.disposeInner({ state: this.state, graph: this.graph }); }
}
class g1 extends Do {
    constructor(t, n, r = [], o = [], i = {}) { super({ description: { ...t, category: t.category }, inputs: r, outputs: o, graph: n, configuration: i, nodeType: Xe.Flow }), ke.mustBeTrue(this.inputs.some(a => a.valueTypeName === "flow")); }
    triggered(t, n) { throw new Error("not implemented"); }
}
class PC extends g1 {
    constructor(t) { super(t.description, t.graph, t.inputs, t.outputs, t.configuration); }
}
class zC extends Do {
    constructor(t) { super({ ...t, nodeType: Xe.Flow }), this.triggered = (n, r) => { this.state = this.triggeredInner({ commit: (o, i) => n.commit(this, o, i), read: this.readInput, write: this.writeOutput, graph: this.graph, state: this.state, configuration: this.configuration, outputSocketKeys: this.outputSocketKeys, triggeringSocketName: r }); }, this.triggeredInner = t.triggered, this.state = t.initialState, this.outputSocketKeys = t.outputs.map(n => n.name); }
}
class AC extends Do {
    constructor(t) { super({ ...t, nodeType: Xe.Function }), this.exec = n => { this.execInner({ read: r => m1(n.inputs, r, n.description.typeName), write: (r, o) => p1(n.outputs, r, o, n.description.typeName), configuration: this.configuration, graph: this.graph }); }, this.execInner = t.exec; }
}
const IC = "abcdefghijklmnop", Ah = e => IC[e];
function Ih(e, t) { return !e || e.length === 0 ? [] : e.map((n, r) => typeof n == "string" ? { key: t(r), valueType: n } : { key: Object.keys(n)[0], valueType: n[Object.keys(n)[0]] }); }
function k({ in: e, out: t, exec: n, category: r, ...o }) { const i = Ih(e, Ah), a = typeof t == "string" || t.length > 1 ? () => "result" : Ah, l = Ih(typeof t == "string" ? [t] : t, a); return zl({ typeName: o.name, label: o.label, in: () => i, out: () => l, category: r, exec: ({ read: c, write: f }) => { const d = i.map(({ key: g }) => c(g)), p = n(...d); l.length === 1 && l[0].key === "result" ? f("result", p) : l.forEach(({ key: g }) => { f(g, p[g]); }); } }); }
class ge {
    constructor(t, n, r = void 0, o = void 0, i) { this.valueTypeName = t, this.name = n, this.value = r, this.label = o, this.valueChoices = i, this.links = []; }
}
const Oh = (e, { valueType: t, defaultValue: n, choices: r }) => new ge(t, e, n, void 0, r), OC = (e, t, n, r) => t.map(o => { const i = e[o]; if (typeof i == "string")
    return new ge(i, o); if (typeof i == "function") {
    const a = i(n, r);
    return Oh(o, a);
} return Oh(o, i); }), $C = e => e.map(t => new ge(t.valueType, t.key, t.defaultValue, void 0, t.choices));
function $h(e, t, n) { if (typeof e == "function") {
    const r = e(t, n);
    return $C(r);
} return OC(e, Object.keys(e), t, n); }
const Ld = (e, { typeName: t, in: n, out: r, otherTypeNames: o = [], category: i = xe.None, configuration: a, helpDescription: s = "", label: l = "" }, u, c) => ({ description: { typeName: t, configuration: a || {}, category: i, otherTypeNames: o, helpDescription: s, label: l }, nodeType: e, inputs: $h(n, u, c), outputs: $h(r, u, c), configuration: u, graph: c });
var xe;
(function (e) { e.Action = "Action", e.Query = "Query", e.Logic = "Logic", e.Event = "Event", e.Variable = "Variable", e.Flow = "Flow", e.Time = "Time", e.None = "None", e.Effect = "Effect"; })(xe || (xe = {}));
function Je(e) { return { ...e, nodeFactory: (t, n) => new zC({ ...Ld(Xe.Flow, e, n, t), initialState: e.initialState, triggered: e.triggered }) }; }
function zl(e) { return { ...e, nodeFactory: (t, n) => new AC({ ...Ld(Xe.Function, e, n, t), exec: e.exec }) }; }
function Al(e) { return { ...e, nodeFactory: (t, n) => new MC({ ...Ld(Xe.Event, e, n, t), initialState: e.initialState, init: e.init, dispose: e.dispose }) }; }
class el {
    constructor(t = "", n = "") { this.nodeId = t, this.socketName = n, this._targetNode = void 0, this._targetSocket = void 0; }
}
class Rd {
    constructor(t, n, r = []) { this.id = t, this.name = n, this.parameters = r, this.label = "", this.metadata = {}, this.eventEmitter = new un; }
}
class Dd {
    constructor(t, n, r, o) { this.id = t, this.name = n, this.valueTypeName = r, this.initialValue = o, this.label = "", this.metadata = {}, this.version = 0, this.onChanged = new un, this.value = this.initialValue; }
    get() { return this.value; }
    set(t) { t !== this.value && (this.value = t, this.version++, this.onChanged.emit(this)); }
}
function jd(e, t) { if (t.links.length === 0)
    return 0; const n = e.nodes, r = t.links[0]; if ((r._targetNode === void 0 || r._targetSocket === void 0) && (ke.mustBeTrue(t.links.length === 1), r._targetNode = n[r.nodeId], r._targetSocket = r._targetNode.outputs.find(s => s.name === r.socketName), r._targetSocket === void 0))
    throw new Error(`can not find socket with the name ${r.socketName}`); const o = r._targetNode, i = r._targetSocket; if (!zh(o))
    return t.value = i.value, 0; let a = 0; if (zh(o)) {
    for (const s of o.inputs)
        a += jd(e, s);
    return e.onNodeExecutionStart.emit(o), o.exec(o), a++, e.onNodeExecutionEnd.emit(o), t.value = i.value, a;
} return 0; }
class LC {
    constructor(t, n, r = void 0) { this.engine = t, this.nextEval = n, this.fiberCompletedListenerStack = [], this.executionSteps = 0, this.nodes = t.nodes, r !== void 0 && this.fiberCompletedListenerStack.push(r); }
    commit(t, n, r = void 0) { ke.mustBeTrue(Mh(t)), ke.mustBeTrue(this.nextEval === null); const o = t.outputs.find(i => i.name === n); if (o === void 0)
        throw new Error(`can not find socket with the name ${n}`); if (o.links.length > 1)
        throw new Error(`invalid for an output flow socket to have multiple downstream links:${t.description.typeName}.${o.name} has ${o.links.length} downlinks`); if (o.links.length === 1) {
        const i = o.links[0];
        if (i === void 0)
            throw new Error("link must be defined");
        this.nextEval = i;
    } r !== void 0 && this.fiberCompletedListenerStack.push(r); }
    executeStep() { const t = this.nextEval; if (this.nextEval = null, t === null) {
        if (this.fiberCompletedListenerStack.length === 0)
            return;
        const r = this.fiberCompletedListenerStack.pop();
        if (r === void 0)
            throw new Error("awaitingCallback is empty");
        r();
        return;
    } const n = this.nodes[t.nodeId]; if (n.inputs.forEach(r => { r.valueTypeName !== "flow" && (this.executionSteps += jd(this.engine, r)); }), this.engine.onNodeExecutionStart.emit(n), h1(n)) {
        this.engine.asyncNodes.push(n), n.triggered(this.engine, t.socketName, () => { const r = this.engine.asyncNodes.indexOf(n); this.engine.asyncNodes.splice(r, 1), this.engine.onNodeExecutionEnd.emit(n), this.executionSteps++; });
        return;
    } if (Mh(n)) {
        n.triggered(this, t.socketName), this.engine.onNodeExecutionEnd.emit(n), this.executionSteps++;
        return;
    } throw new TypeError(`should not get here, unhandled node ${n.description.typeName}`); }
    isCompleted() { return this.fiberCompletedListenerStack.length === 0 && this.nextEval === null; }
}
class RC {
    constructor(t) { this.nodes = t, this.fiberQueue = [], this.asyncNodes = [], this.eventNodes = [], this.onNodeExecutionStart = new un, this.onNodeExecutionEnd = new un, this.executionSteps = 0, Object.values(t).forEach(n => { Ph(n) && this.eventNodes.push(n); }), this.eventNodes.forEach(n => { n.inputs.forEach(r => { ke.mustBeTrue(r.valueTypeName !== "flow"), this.executionSteps += jd(this, r); }), this.onNodeExecutionStart.emit(n), n.init(this), this.executionSteps++, this.onNodeExecutionEnd.emit(n); }); }
    dispose() { this.asyncNodes.forEach(t => t.dispose()), this.eventNodes.forEach(t => t.dispose(this)); }
    commitToNewFiber(t, n, r = void 0) { ke.mustBeTrue(Ph(t) || h1(t)); const o = t.outputs.find(i => i.name === n); if (o === void 0)
        throw new Error(`no socket with the name ${n}`); if (o.links.length > 1)
        throw new Error(`invalid for an output flow socket to have multiple downstream links:${t.description.typeName}.${o.name} has ${o.links.length} downlinks`); if (o.links.length === 1) {
        const i = new LC(this, o.links[0], r);
        this.fiberQueue.push(i);
    } }
    executeAllSync(t = 100, n = 1e8) { const r = Date.now(); let o = 0, i = 0; for (; i < n && o < t && this.fiberQueue.length > 0;) {
        const a = this.fiberQueue[0], s = a.executionSteps;
        a.executeStep(), i += a.executionSteps - s, a.isCompleted() && this.fiberQueue.shift(), o = (Date.now() - r) * .001;
    } return this.executionSteps += i, i; }
    async executeAllAsync(t = 100, n = 1e8) { const r = Date.now(); let o = 0, i = 0, a = 0; do
        a > 0 && await kC(0), o += this.executeAllSync(t - i, n - o), i = (Date.now() - r) * .001, a += 1;
    while ((this.asyncNodes.length > 0 || this.fiberQueue.length > 0) && i < t && o < n); return o; }
}
function DC({ graphJson: e, registry: t }) { const n = (e == null ? void 0 : e.name) || "", r = (e == null ? void 0 : e.metadata) || {}; let o = {}, i = {}; "variables" in e && (o = HC(t.values, e.variables ?? [])), "customEvents" in e && (i = BC(t.values, e.customEvents ?? [])); const a = (e == null ? void 0 : e.nodes) ?? []; a.length === 0 && cn.warning("readGraphFromJSON: no nodes specified"); const s = d1({ ...t, variables: o, customEvents: i }), l = {}; for (let u = 0; u < a.length; u += 1) {
    const c = a[u], f = jC({ graph: s, registry: t, nodeJson: c }), d = c.id;
    if (d in l)
        throw new Error(`can not create new node with id ${d} as one with that id already exists.`);
    l[d] = f;
} return Object.entries(l).forEach(([u, c]) => { c.inputs.forEach(f => { f.links.forEach(d => { if (!(d.nodeId in l))
    throw new Error(`node '${c.description.typeName}' specifies an input '${f.name}' whose link goes to a nonexistent upstream node id: ${d.nodeId}`); const p = l[d.nodeId], g = p.outputs.find(x => x.name === d.socketName); if (g === void 0)
    throw new Error(`node '${c.description.typeName}' specifies an input '${f.name}' whose link goes to a nonexistent output '${d.socketName}' on upstream node '${p.description.typeName}'`); const y = new el(u, f.name); g.links.findIndex(x => x.nodeId == y.nodeId && x.socketName == y.socketName) < 0 && g.links.push(y); }); }), c.outputs.forEach(f => { f.links.forEach(d => { if (!(d.nodeId in l))
    throw new Error(`node '${c.description.typeName}' specifies an output '${f.name}' whose link goes to a nonexistent downstream node id ${d.nodeId}`); const p = l[d.nodeId], g = p.inputs.find(x => x.name === d.socketName); if (g === void 0)
    throw new Error(`node '${c.description.typeName}' specifies an output '${f.name}' whose link goes to a nonexistent input '${d.socketName}' on downstream node '${p.description.typeName}'`); const y = new el(u, f.name); g.links.findIndex(x => x.nodeId == y.nodeId && x.socketName == y.socketName) < 0 && g.links.push(y); }); }); }), { name: n, metadata: r, nodes: l, customEvents: i, variables: o }; }
function jC({ graph: e, registry: t, nodeJson: n }) { if (n.type === void 0)
    throw new Error("readGraphFromJSON: no type for node"); const r = n.type, o = n.configuration, i = {}; o !== void 0 && Object.keys(o).forEach(s => { i[s] = o[s]; }); const a = f1({ graph: e, registry: t, nodeTypeName: r, nodeConfiguration: i }); return a.label = (n == null ? void 0 : n.label) ?? a.label, a.metadata = (n == null ? void 0 : n.metadata) ?? a.metadata, n.parameters !== void 0 && FC(t.values, a, n.parameters), n.flows !== void 0 && VC(a, n.flows), a; }
function FC(e, t, n) { t.inputs.forEach(r => { var i; if (!(r.name in n))
    return; const o = n[r.name]; if ("value" in o && (r.value = (i = e[r.valueTypeName]) == null ? void 0 : i.deserialize(o.value)), "link" in o) {
    const a = o.link;
    r.links.push(new el(a.nodeId, a.socket));
} }); for (const r in n)
    if (t.inputs.find(i => i.name === r) === void 0)
        throw new Error(`node '${t.description.typeName}' specifies an input '${r}' that doesn't exist on its node type, available inputs are: ${t.inputs.map(i => i.name).join(", ")}`); }
function VC(e, t) { e.outputs.forEach(n => { if (n.name in t) {
    const r = t[n.name];
    n.links.push(new el(r.nodeId, r.socket));
} }); for (const n in t)
    if (e.outputs.find(o => o.name === n) === void 0)
        throw new Error(`node '${e.description.typeName}' specifies an output '${n}' that doesn't exist on its node type, available outputs are: ${e.outputs.map(o => o.name).join(", ")}`); }
function HC(e, t) { var r; const n = {}; for (let o = 0; o < t.length; o += 1) {
    const i = t[o], a = new Dd(i.id, i.name, i.valueTypeName, (r = e[i.valueTypeName]) == null ? void 0 : r.deserialize(i.initialValue));
    if (a.label = (i == null ? void 0 : i.label) ?? a.label, a.metadata = (i == null ? void 0 : i.metadata) ?? a.metadata, i.id in n)
        throw new Error(`duplicate variable id ${a.id}`);
    n[i.id] = a;
} return n; }
function BC(e, t) { const n = {}; for (let r = 0; r < t.length; r += 1) {
    const o = t[r], i = [];
    (o.parameters ?? []).forEach(s => { var l; i.push(new ge(s.valueTypeName, s.name, (l = e[s.valueTypeName]) == null ? void 0 : l.deserialize(s.defaultValue))); });
    const a = new Rd(o.id, o.name, i);
    if (a.label = (o == null ? void 0 : o.label) ?? a.label, a.metadata = (o == null ? void 0 : o.metadata) ?? a.metadata, a.id in n)
        throw new Error(`duplicate variable id ${a.id}`);
    n[a.id] = a;
} return n; }
function UC(e) { return e == null ? void 0 : e.map(t => typeof t == "string" ? { text: t, value: t } : t); }
function y1(e, t, n) { const r = d1({ ...e, customEvents: {}, variables: {} }), o = f1({ graph: r, registry: e, nodeTypeName: t, nodeConfiguration: n }), i = e.nodes[t], a = { type: t, category: o.description.category, label: o.description.label, inputs: [], outputs: [], configuration: [] }; return i.configuration && Object.entries(i.configuration).forEach(([s, l]) => { a.configuration.push({ name: s, valueType: l.valueType, defaultValue: l.defaultValue }); }), o.inputs.forEach(s => { const l = s.valueTypeName === "flow" ? void 0 : e.values[s.valueTypeName]; let u = s.value; l !== void 0 && (u = l.serialize(u)), u === void 0 && l !== void 0 && (u = l.serialize(l.creator())); const c = { name: s.name, valueType: s.valueTypeName, defaultValue: u, choices: UC(s.valueChoices) }; a.inputs.push(c); }), o.outputs.forEach(s => { const l = { name: s.name, valueType: s.valueTypeName }; a.outputs.push(l); }), Object.entries(o.description.configuration).forEach(([s, l]) => { a.configuration.push({ name: s, valueType: l.valueType, defaultValue: l.defaultValue }); }), a; }
function qC(e) { const t = []; return Object.keys(e.nodes).forEach(n => { t.push(y1(e, n, {})); }), t; }
function ut(e) { return Object.values(e); }
class Fd {
    constructor(t, n, r = "", o, i = [], a = "", s = {}) { this.typeName = t, this.category = n, this.label = r, this.otherTypeNames = i, this.helpDescription = a, this.configuration = s, this.nodeFactory = (l, u) => o(this, l, u); }
}
class Il extends Fd {
    constructor(t) { super(t.typeName, t.category, t.label, t.factory, t.otherTypeNames, t.helpDescription, t.configuration), this.properties = t; }
}
function v1({ values: e, valueTypeName: t }) { const n = bC(t); return [k({ name: `math/to${n}/string`, label: `To ${n}`, in: ["string"], out: t, exec: r => { var o; return (o = e[t]) == null ? void 0 : o.deserialize(r); } }), k({ name: `math/toString/${t}`, label: "To String", in: [t], out: "string", exec: r => { var o; return `${(o = e[t]) == null ? void 0 : o.serialize(r)}`; } })]; }
class WC {
    log(t, n) { cn.log(t, n); }
}
class YC {
    constructor() { this.startEvent = new un, this.endEvent = new un, this.tickEvent = new un; }
}
class nf extends TC {
    constructor(t, n, r) { const o = n.customEvents[r.customEventId] || new Rd("-1", "undefined"); super({ description: t, graph: n, outputs: [new ge("flow", "flow"), ...o.parameters.map(i => new ge(i.valueTypeName, i.name, i.value, i.label))], configuration: r }), this.onCustomEvent = void 0, this.customEvent = o, n.customEvents[r.customEventId] = o; }
    init(t) { ke.mustBeTrue(this.onCustomEvent === void 0), this.onCustomEvent = n => { this.customEvent.parameters.forEach(r => { if (!(r.name in n))
        throw new Error(`parameters of custom event do not align with parameters of custom event node, missing ${r.name}`); this.writeOutput(r.name, n[r.name]); }), t.commitToNewFiber(this, "flow"); }, this.customEvent.eventEmitter.addListener(this.onCustomEvent); }
    dispose(t) { ke.mustBeTrue(this.onCustomEvent !== void 0), this.onCustomEvent !== void 0 && this.customEvent.eventEmitter.removeListener(this.onCustomEvent); }
}
nf.Description = new Il({ typeName: "customEvent/onTriggered", category: "Event", label: "On Triggered", configuration: { customEventId: { valueType: "string", defaultValue: "-1" } }, factory: (e, t, n) => new nf(e, t, n) });
class rf extends PC {
    constructor(t, n, r) { const o = n.customEvents[r.customEventId] || new Rd("-1", "undefined"); super({ description: t, graph: n, inputs: [new ge("flow", "flow"), ...o.parameters.map(i => new ge(i.valueTypeName, i.name, i.value, i.label))], outputs: [new ge("flow", "flow")], configuration: r }), this.customEvent = o, n.customEvents[r.customEventId] = o; }
    triggered(t, n) { const r = {}; this.customEvent.parameters.forEach(o => { r[o.name] = this.readInput(o.name); }), this.customEvent.eventEmitter.emit(r), t.commit(this, "flow"); }
}
rf.Description = new Il({ typeName: "customEvent/trigger", category: "Action", label: "Trigger", configuration: { customEventId: { valueType: "string", defaultValue: "-1" } }, factory: (e, t, n) => new rf(e, t, n) });
const XC = Je({ typeName: "debug/expectTrue", category: xe.Action, label: "Assert Expect True", in: () => [{ key: "flow", valueType: "flow" }, { key: "condition", valueType: "boolean" }, { key: "description", valueType: "string" }], initialState: void 0, out: { flow: "flow" }, triggered: ({ read: e, commit: t }) => { ke.mustBeTrue(e("condition"), e("description")), t("flow"); } }), QC = Je({ typeName: "debug/log", category: xe.Action, label: "Debug Log", in: { flow: "flow", text: "string", severity: { valueType: "string", defaultValue: "info", choices: ["verbose", "info", "warning", "error"], label: "severity" } }, out: { flow: "flow" }, initialState: void 0, triggered: ({ read: e, commit: t, graph: { getDependency: n } }) => { const r = n("ILogger"); r == null || r.log(e("severity"), e("text")), t("flow"); } }), GC = Je({ typeName: "flow/branch", category: xe.Flow, label: "Branch", helpDescription: "Checks the value of the 'condition' input and if true, executes the 'true' branch, otherwise it executes the 'false' branch.", in: { flow: "flow", condition: "boolean" }, out: { true: "flow", false: "flow" }, triggered: ({ read: e, commit: t }) => { t(e("condition") === !0 ? "true" : "false"); }, initialState: void 0 }), KC = Je({ typeName: "flow/counter", label: "Counter", in: { flow: "flow", reset: "flow" }, out: { flow: "flow", count: "integer" }, initialState: { count: 0 }, category: xe.Flow, triggered: ({ commit: e, write: t, triggeringSocketName: n, state: r }) => { let o = r.count; switch (n) {
        case "flow": {
            o++, t("count", o), e("flow");
            break;
        }
        case "reset": {
            o = 0;
            break;
        }
        default: throw new Error("should not get here");
    } return { count: o }; } });
let of = class extends $d {
    constructor(t, n) { super(t, n, [new ge("flow", "flow"), new ge("float", "duration", 1)], [new ge("flow", "flow")]), this.timeoutPending = !1; }
    triggered(t, n, r) { this.timeoutPending || (this.timeoutPending = !0, setTimeout(() => { this.timeoutPending && (this.timeoutPending = !1, t.commitToNewFiber(this, "flow"), r()); }, this.readInput("duration") * 1e3)); }
    dispose() { this.timeoutPending = !1; }
};
of.Description = new Il({ typeName: "time/delay", otherTypeNames: ["flow/delay"], category: "Time", label: "Delay", factory: (e, t) => new of(e, t) });
const ZC = Je({ typeName: "flow/doN", label: "DoN", category: xe.Flow, in: { flow: "flow", n: { valueType: "integer", defaultValue: 1 }, reset: "flow" }, out: { flow: "flow", count: "integer" }, initialState: { count: 0 }, triggered: ({ commit: e, read: t, write: n, triggeringSocketName: r, state: o }) => r === "reset" ? { count: 0 } : o.count < Number(t("n")) ? (n("count", o.count), e("flow"), { count: o.count + 1 }) : o }), JC = Je({ typeName: "flow/doOnce", label: "DoOnce", category: xe.Flow, in: { flow: "flow", reset: "flow" }, out: { flow: "flow" }, initialState: { firedOnce: !1 }, triggered: ({ commit: e, triggeringSocketName: t, state: n }) => t === "reset" ? { firedOnce: !1 } : n.firedOnce ? n : (e("flow"), { firedOnce: !0 }) });
class af extends $d {
    constructor(t, n) { super(t, n, [new ge("flow", "flow"), new ge("float", "waitDuration"), new ge("flow", "cancel")], [new ge("flow", "flow")]), this.triggerVersion = 0; }
    triggered(t, n, r) { if (this.triggerVersion++, n === "cancel")
        return; const o = this.triggerVersion; setTimeout(() => { this.triggerVersion >= o || (t.commitToNewFiber(this, "flow"), r()); }, this.readInput("waitDuration") * 1e3); }
    dispose() { this.triggerVersion++; }
}
af.Description = new Fd("flow/debounce", "Flow", "Debounce", (e, t) => new af(e, t));
const eT = Je({ typeName: "flow/flipFlop", category: xe.Flow, label: "Flip Flop", in: { flow: "flow" }, out: { on: "flow", off: "flow", isOn: "boolean" }, initialState: { isOn: !0 }, triggered: ({ commit: e, write: t, state: n }) => (t("isOn", n.isOn), e(n.isOn ? "on" : "off"), { isOn: !n.isOn }) }), tT = Je({ typeName: "flow/forLoop", category: xe.Flow, label: "For Loop", in: { flow: "flow", startIndex: "integer", endIndex: "integer" }, out: { loopBody: "flow", index: "integer", completed: "flow" }, initialState: void 0, triggered: ({ read: e, write: t, commit: n }) => { const r = e("startIndex"), o = e("endIndex"), i = a => { a < o ? (t("index", a), n("loopBody", () => { i(a + BigInt(1)); })) : n("completed"); }; i(r); } }), nT = Je({ typeName: "flow/gate", label: "Gate", category: xe.Flow, in: { flow: "flow", open: "flow", close: "flow", toggle: "flow", startClosed: "boolean" }, out: { flow: "flow" }, initialState: { isInitialized: !1, isClosed: !0 }, triggered: ({ commit: e, read: t, triggeringSocketName: n, state: r }) => { let o = r.isClosed, i = r.isInitialized; switch (r.isInitialized || (o = !!t("startClosed"), i = !0), n) {
        case "flow":
            o || e("flow");
            break;
        case "open":
            o = !1;
            break;
        case "close":
            o = !0;
            break;
        case "toggle":
            o = !o;
            break;
        default: throw new Error(`Unexpected triggering socket: ${n}`);
    } return { isClosed: o, isInitialized: i }; } }), rT = Je({ typeName: "flow/multiGate", category: xe.Flow, label: "MultiGate", in: { flow: "flow", reset: "flow", loop: "boolean", startIndex: "integer" }, out: { 1: "flow", 2: "flow", 3: "flow" }, initialState: { isInitialized: !1, nextIndex: 0 }, triggered: ({ state: e, commit: t, read: n, outputSocketKeys: r, triggeringSocketName: o }) => { let i = e.nextIndex, a = e.isInitialized; switch (a || (i = Number(n("startIndex")), a = !0), n("loop") && (i = i % r.length), o) {
        case "reset": return i = 0, { isInitialized: a, nextIndex: i };
        case "flow": {
            if (0 <= i && i < r.length) {
                const l = r[i];
                t(l);
            }
            return i++, { isInitialized: a, nextIndex: i };
        }
    } const s = l => { if (l < r.length) {
        const u = r[l];
        t(u, () => { s(l + 1); });
    } }; return s(0), { isInitialized: a, nextIndex: i }; } }), oT = Je({ typeName: "flow/sequence", label: "Sequence", configuration: { numOutputs: { valueType: "number", defaultValue: 4 } }, in: { flow: "flow" }, out: e => { const t = e.numOutputs ?? 4, n = []; for (let r = 1; r <= t; r++) {
        const o = `${r}`;
        n.push({ key: o, valueType: "flow" });
    } return n; }, initialState: void 0, triggered: ({ commit: e, outputSocketKeys: t }) => { const n = r => { if (r < t.length) {
        const o = t[r];
        e(o, () => { n(r + 1); });
    } }; n(0); } });
class sf extends $d {
    constructor(t, n) { super(t, n, [new ge("flow", "flow"), new ge("float", "duration", 1), new ge("flow", "cancel")], [new ge("flow", "flow")]), this.triggerVersion = 0, this.timeoutPending = !1; }
    triggered(t, n, r) { if (n === "cancel") {
        this.timeoutPending && (this.triggerVersion++, this.timeoutPending = !1);
        return;
    } if (this.timeoutPending)
        return; this.triggerVersion++; const o = this.triggerVersion; this.timeoutPending = !0, setTimeout(() => { this.triggerVersion === o && (ke.mustBeTrue(this.timeoutPending), this.timeoutPending = !1, t.commitToNewFiber(this, "flow"), r()); }, this.readInput("duration") * 1e3); }
    dispose() { this.triggerVersion++, this.timeoutPending = !1; }
}
sf.Description = new Fd("flow/throttle", "Flow", "Throttle", (e, t) => new sf(e, t));
class lf extends g1 {
    constructor(t, n, r) { const o = []; for (let i = 1; i <= r; i++)
        o.push(new ge("flow", `${i}`)); super(t, n, [...o, new ge("flow", "reset"), new ge("boolean", "autoReset")], [new ge("flow", "flow")]), this.numInputs = r, this.isOn = !0, this.triggeredMap = {}, this.triggeredCount = 0, this.outputTriggered = !1, this.reset(); }
    reset() { for (let t = 1; t <= this.numInputs; t++)
        this.triggeredMap[`${t}`] = !1; this.triggeredCount = 0, this.outputTriggered = !1; }
    triggered(t, n) { if (n === "reset") {
        this.reset();
        return;
    } this.triggeredMap[n] || (this.triggeredMap[n] = !0, this.triggeredCount++, this.triggeredCount === this.numInputs && !this.outputTriggered && (t.commit(this, "flow"), this.outputTriggered = !0, this.readInput("autoReset") === !0 && this.reset())); }
}
lf.Description = new Il({ typeName: "flow/waitAll", category: "Flow", label: "WaitAll", configuration: { numInputs: { valueType: "number", defaultValue: 3 } }, factory: (e, t, n) => new lf(e, t, n.numInputs) });
const iT = () => ({ onEndEvent: void 0 }), aT = Al({ typeName: "lifecycle/onEnd", label: "On End", category: xe.Event, in: {}, out: { flow: "flow" }, initialState: iT(), init: ({ state: e, commit: t, graph: { getDependency: n } }) => { ke.mustBeTrue(e.onEndEvent === void 0); const r = () => { t("flow"); }, o = n("ILifecycleEventEmitter"); return o == null || o.endEvent.addListener(r), { onEndEvent: r }; }, dispose: ({ state: { onEndEvent: e }, graph: { getDependency: t } }) => { ke.mustBeTrue(e !== void 0); const n = t("ILifecycleEventEmitter"); return e && (n == null || n.endEvent.removeListener(e)), {}; } }), sT = () => ({ onStartEvent: void 0 }), lT = Al({ typeName: "lifecycle/onStart", label: "On Start", category: xe.Event, in: {}, out: { flow: "flow" }, initialState: sT(), init: ({ state: e, commit: t, graph: { getDependency: n } }) => { ke.mustBeTrue(e.onStartEvent === void 0); const r = () => { t("flow"); }, o = n("ILifecycleEventEmitter"); return o == null || o.startEvent.addListener(r), { onStartEvent: r }; }, dispose: ({ state: { onStartEvent: e }, graph: { getDependency: t } }) => { ke.mustBeTrue(e !== void 0); const n = t("ILifecycleEventEmitter"); return e && (n == null || n.startEvent.removeListener(e)), {}; } }), uT = () => ({ onTickEvent: void 0 }), cT = Al({ typeName: "lifecycle/onTick", label: "On Tick", category: xe.Event, in: {}, out: { flow: "flow", deltaSeconds: "float" }, initialState: uT(), init: ({ state: e, commit: t, write: n, graph: { getDependency: r } }) => { ke.mustBeTrue(e.onTickEvent === void 0); let o = Date.now(); const i = () => { const s = Date.now(), l = (s - o) * .001; n("deltaSeconds", l), t("flow"), o = s; }, a = r("ILifecycleEventEmitter"); return a == null || a.tickEvent.addListener(i), { onTickEvent: i }; }, dispose: ({ state: { onTickEvent: e }, graph: { getDependency: t } }) => { ke.mustBeTrue(e !== void 0); const n = t("ILifecycleEventEmitter"); return e && (n == null || n.tickEvent.removeListener(e)), {}; } }), fT = k({ name: "math/boolean", label: "Boolean", in: ["boolean"], out: "boolean", exec: e => e }), dT = k({ name: "math/and/boolean", label: "∧", in: ["boolean", "boolean"], out: "boolean", exec: (e, t) => e && t }), mT = k({ name: "math/or/boolean", label: "∨", in: ["boolean", "boolean"], out: "boolean", exec: (e, t) => e || t }), pT = k({ name: "math/negate/boolean", label: "¬", in: ["boolean"], out: "boolean", exec: e => !e }), hT = k({ name: "math/toFloat/boolean", label: "To Float", in: ["boolean"], out: "float", exec: e => e ? 1 : 0 }), gT = k({ name: "math/equal/boolean", label: "=", in: ["boolean", "boolean"], out: "boolean", exec: (e, t) => e === t }), yT = k({ name: "math/toInteger/boolean", label: "To Integer", in: ["boolean"], out: "integer", exec: e => e ? 1n : 0n }), vT = Object.freeze(Object.defineProperty({ __proto__: null, And: dT, Constant: fT, Equal: gT, Not: pT, Or: mT, ToFloat: hT, toInteger: yT }, Symbol.toStringTag, { value: "Module" })), w1 = { name: "boolean", creator: () => !1, deserialize: e => typeof e == "string" ? e.toLowerCase() === "true" : e, serialize: e => e, lerp: (e, t, n) => n < .5 ? e : t, equals: (e, t) => e === t, clone: e => e }, wT = k({ name: "math/float", label: "Float", in: ["float"], out: "float", exec: e => e }), xT = k({ name: "math/add/float", label: "+", in: ["float", "float"], out: "float", exec: (e, t) => e + t }), ST = k({ name: "math/subtract/float", label: "-", in: ["float", "float"], out: "float", exec: (e, t) => e - t }), bT = k({ name: "math/negate/float", label: "-", in: ["float"], out: "float", exec: e => -e }), kT = k({ name: "math/multiply/float", label: "×", in: ["float", "float"], out: "float", exec: (e, t) => e * t }), ET = k({ name: "math/divide/float", label: "÷", in: ["float", "float"], out: "float", exec: (e, t) => e / t }), NT = k({ name: "math/modulus/float", label: "MOD", in: ["float", "float"], out: "float", exec: (e, t) => e % t }), _T = k({ name: "math/pow/float", label: "POW", in: ["float", "float"], out: "float", exec: Math.pow }), CT = k({ name: "math/sqrt/float", label: "√", in: ["float"], out: "float", exec: Math.sqrt }), TT = k({ name: "math/e/float", label: "𝑒", out: "float", exec: () => Math.E }), MT = k({ name: "math/exp/float", label: "EXP", in: ["float"], out: "float", exec: Math.exp }), PT = k({ name: "math/ln/float", label: "LN", in: ["float"], out: "float", exec: Math.log }), zT = k({ name: "math/log2/float", label: "LOG2", in: ["float"], out: "float", exec: Math.log2 }), AT = k({ name: "math/log10/float", label: "LOG10", in: ["float"], out: "float", exec: Math.log10 }), IT = k({ name: "math/pi/float", label: "π", out: "float", exec: () => Math.PI }), OT = k({ name: "math/sin/float", label: "SIN", in: ["float"], out: "float", exec: Math.sin }), $T = k({ name: "math/asin/float", label: "ASIN", in: ["float"], out: "float", exec: Math.asin }), LT = k({ name: "math/cos/float", label: "COS", in: ["float"], out: "float", exec: Math.cos }), RT = k({ name: "math/acos/float", label: "ACOS", in: ["float"], out: "float", exec: Math.acos }), DT = k({ name: "math/tan/float", label: "TAN", in: ["float"], out: "float", exec: Math.tan }), jT = k({ name: "math/radiansToDegrees/float", label: "To Degrees", in: ["float"], out: "float", exec: NC }), FT = k({ name: "math/degreesToRadians/float", label: "To Radians", in: ["float"], out: "float", exec: EC }), VT = k({ name: "math/atan/float", label: "ATAN", in: ["float"], out: "float", exec: Math.atan }), HT = k({ name: "math/mix/float", label: "MIX", in: ["float", "float", "float"], out: "float", exec: (e, t, n) => { const r = 1 - n; return e * r + t * n; } }), BT = k({ name: "math/toFloat/float", label: "To Float", in: ["float"], out: "float", exec: e => Number(e) }), UT = k({ name: "math/min/float", label: "MIN", in: ["float", "float"], out: "float", exec: (e, t) => Math.min(e, t) }), qT = k({ name: "math/max/float", label: "MAX", in: ["float", "float"], out: "float", exec: (e, t) => Math.max(e, t) }), WT = k({ name: "math/clamp/float", label: "CLAMP", in: ["float", "float", "float"], out: "float", exec: (e, t, n) => e < t ? t : e > n ? n : e }), YT = k({ name: "math/abs/float", label: "ABS", in: ["float"], out: "float", exec: Math.abs }), XT = k({ name: "math/sign/float", label: "SIGN", in: ["float"], out: "float", exec: Math.sign }), QT = k({ name: "math/floor/float", label: "FLOOR", in: ["float"], out: "float", exec: Math.floor }), GT = k({ name: "math/ceil/float", label: "CEIL", in: ["float"], out: "float", exec: Math.ceil }), KT = k({ name: "math/round/float", label: "ROUND", in: ["float"], out: "float", exec: Math.round }), ZT = k({ name: "math/trunc/float", label: "TRUNC", in: ["float"], out: "float", exec: Math.trunc }), JT = k({ name: "math/random/float", label: "RANDOM", out: "float", exec: Math.random }), e5 = k({ name: "math/equal/float", label: "=", in: ["float", "float"], out: "boolean", exec: (e, t) => e === t }), t5 = k({ name: "math/equalTolerance/float", label: "=", in: ["float", "float", "float"], out: "boolean", exec: (e, t, n) => Nt(e, t, n) }), n5 = k({ name: "math/greaterThan/float", label: ">", in: ["float", "float"], out: "boolean", exec: (e, t) => e > t }), r5 = k({ name: "math/greaterThanOrEqual/float", label: "≥", in: ["float", "float"], out: "boolean", exec: (e, t) => e >= t }), o5 = k({ name: "math/lessThan/float", label: "<", in: ["float", "float"], out: "boolean", exec: (e, t) => e < t }), i5 = k({ name: "math/lessThanOrEqual/float", label: "≤", in: ["float", "float"], out: "boolean", exec: (e, t) => e <= t }), a5 = k({ name: "math/isNaN/float", label: "isNaN", in: ["float"], out: "boolean", exec: Number.isNaN }), s5 = k({ name: "math/isInf/float", label: "isInf", in: ["float"], out: "boolean", exec: e => !Number.isFinite(e) && !Number.isNaN(e) }), l5 = Object.freeze(Object.defineProperty({ __proto__: null, Abs: YT, Acos: RT, Add: xT, Asin: $T, Atan: VT, Ceil: GT, Clamp: WT, Constant: wT, Cos: LT, DegreesToRadians: FT, Divide: ET, E: TT, Equal: e5, EqualTolerance: t5, Exp: MT, Floor: QT, GreaterThan: n5, GreaterThanOrEqual: r5, IsInf: s5, IsNaN: a5, LessThan: o5, LessThanOrEqual: i5, Ln: PT, Log10: AT, Log2: zT, Max: qT, Min: UT, Mix: HT, Modulus: NT, Multiply: kT, Negate: bT, PI: IT, Power: _T, RadiansToDegrees: jT, Random: JT, Round: KT, Sign: XT, Sin: OT, SquareRoot: CT, Subtract: ST, Tan: DT, ToFloat: BT, Trunc: ZT }, Symbol.toStringTag, { value: "Module" })), x1 = { name: "float", creator: () => 0, deserialize: e => typeof e == "string" ? c1(e, 0) : e, serialize: e => e, lerp: (e, t, n) => e * (1 - n) + t * n, equals: (e, t) => e === t, clone: e => e }, u5 = k({ name: "math/integer", label: "Integer", in: ["integer"], out: "integer", exec: e => e }), c5 = k({ name: "math/add/integer", label: "+", in: ["integer", "integer"], out: "integer", exec: (e, t) => e + t }), f5 = k({ name: "math/subtract/integer", label: "-", in: ["integer", "integer"], out: "integer", exec: (e, t) => e - t }), d5 = k({ name: "math/negate/integer", label: "-", in: ["integer"], out: "integer", exec: e => -e }), m5 = k({ name: "math/multiply/integer", label: "×", in: ["integer", "integer"], out: "integer", exec: (e, t) => e * t }), p5 = k({ name: "math/divide/integer", label: "÷", in: ["integer", "integer"], out: "integer", exec: (e, t) => e / t }), h5 = k({ name: "math/modulus/integer", label: "MOD", in: ["integer", "integer"], out: "integer", exec: (e, t) => e % t }), g5 = k({ name: "math/toFloat/integer", label: "To Float", in: ["integer"], out: "float", exec: e => Number(e) }), y5 = k({ name: "math/min/integer", label: "MIN", in: ["integer", "integer"], out: "integer", exec: (e, t) => e > t ? t : e }), v5 = k({ name: "math/max/integer", label: "MAX", in: ["integer", "integer"], out: "integer", exec: (e, t) => e > t ? e : t }), w5 = k({ name: "math/clamp/integer", label: "CLAMP", in: [{ value: "integer" }, { min: "integer" }, { max: "integer" }], out: "integer", exec: (e, t, n) => e < t ? t : e > n ? n : e }), x5 = k({ name: "math/abs/integer", label: "ABS", in: ["integer"], out: "integer", exec: e => e < BigInt(0) ? -e : e }), S5 = k({ name: "math/sign/integer", label: "SIGN", in: ["integer"], out: "integer", exec: e => BigInt(e < 0 ? -1 : e > 0 ? 1 : 0) }), b5 = k({ name: "math/equal/integer", label: "=", in: ["integer", "integer"], out: "boolean", exec: (e, t) => e === t }), k5 = k({ name: "math/greaterThan/integer", label: ">", in: ["integer", "integer"], out: "boolean", exec: (e, t) => e > t }), E5 = k({ name: "math/greaterThanOrEqual/integer", label: "≥", in: ["integer", "integer"], out: "boolean", exec: (e, t) => e >= t }), N5 = k({ name: "math/lessThan/integer", label: "<", in: ["integer", "integer"], out: "boolean", exec: (e, t) => e < t }), _5 = k({ name: "math/lessThanOrEqual/integer", label: "≤", in: ["integer", "integer"], out: "boolean", exec: (e, t) => e <= t }), C5 = k({ name: "math/toBoolean/integer", label: "To Boolean", in: ["integer"], out: "boolean", exec: e => e !== 0n }), T5 = Object.freeze(Object.defineProperty({ __proto__: null, Abs: x5, Add: c5, Clamp: w5, Constant: u5, Divide: p5, Equal: b5, GreaterThan: k5, GreaterThanOrEqual: E5, LessThan: N5, LessThanOrEqual: _5, Max: v5, Min: y5, Modulus: h5, Multiply: m5, Negate: d5, Sign: S5, Subtract: f5, ToFloat: g5, toBoolean: C5 }, Symbol.toStringTag, { value: "Module" })), S1 = { name: "integer", creator: () => BigInt(0), deserialize: e => BigInt(e), serialize: e => Number.MIN_SAFE_INTEGER <= e && e <= Number.MAX_SAFE_INTEGER ? Number(e) : e.toString(), lerp: (e, t, n) => BigInt(Number(e) * (1 - n) + Number(t) * n), equals: (e, t) => e === t, clone: e => e }, M5 = k({ name: "logic/string", label: "String", in: ["string"], out: "string", exec: e => e }), P5 = k({ name: "logic/concat/string", label: "Concat", in: ["string", "string"], out: "string", exec: (e, t) => e.concat(t) }), z5 = k({ name: "logic/includes/string", label: "Includes", in: ["string", "string"], out: "boolean", exec: (e, t) => e.includes(t) }), A5 = k({ name: "logic/length/string", label: "Length", in: ["string"], out: "integer", exec: e => BigInt(e.length) }), I5 = k({ name: "math/equal/string", label: "=", in: ["string", "string"], out: "boolean", exec: (e, t) => e === t }), O5 = Object.freeze(Object.defineProperty({ __proto__: null, Concat: P5, Constant: M5, Equal: I5, Includes: z5, Length: A5 }, Symbol.toStringTag, { value: "Module" })), b1 = { name: "string", creator: () => "", deserialize: e => e, serialize: e => e, lerp: (e, t, n) => n < .5 ? e : t, equals: (e, t) => e === t, clone: e => e }, $5 = Je({ typeName: "variable/set", category: xe.Action, label: "Set", configuration: { variableId: { valueType: "number" } }, in: (e, t) => { const n = t.variables[e.variableId] || new Dd("-1", "undefined", "string", ""); return [{ key: "flow", valueType: "flow" }, { key: "value", valueType: n.valueTypeName, label: n.name }]; }, initialState: void 0, out: { flow: "flow" }, triggered: ({ read: e, commit: t, graph: { variables: n }, configuration: r }) => { const o = n[r.variableId]; o && (o.set(e("value")), t("flow")); } }), L5 = zl({ typeName: "variable/get", category: xe.Query, label: "Get", configuration: { variableId: { valueType: "number" } }, in: {}, out: (e, t) => { const n = t.variables[e.variableId] || new Dd("-1", "undefined", "string", ""); return [{ key: "value", valueType: n.valueTypeName, label: n.name }]; }, exec: ({ write: e, graph: { variables: t }, configuration: n }) => { const r = t[n.variableId]; r && e("value", r.get()); } });
function Ol(e) { let t; return () => (t === void 0 && (t = e()), t); }
const R5 = Je({ typeName: "flow/switch/integer", label: "Switch on Int", configuration: { numCases: { valueType: "number" } }, in: e => { const t = []; t.push({ key: "flow", valueType: "flow" }, { key: "selection", valueType: "integer" }); for (const n of yo(1, e.numCases + 1))
        t.push({ key: `${n}`, valueType: "integer" }); return t; }, out: e => { const t = []; t.push({ key: "default", valueType: "flow" }); for (const n of yo(1, e.numCases + 1))
        t.push({ key: `${n}`, valueType: "flow" }); return t; }, initialState: void 0, triggered: ({ read: e, commit: t, configuration: n }) => { const r = e("selection"); for (const o of yo(1, n.numCases + 1))
        if (r === e(`${o}`)) {
            t(`${o}`);
            return;
        } t("default"); } }), D5 = Je({ typeName: "flow/switch/string", label: "Switch on String", configuration: { numCases: { valueType: "number" } }, in: e => { const t = []; t.push({ key: "flow", valueType: "flow" }, { key: "selection", valueType: "string" }); for (const n of yo(1, e.numCases + 1))
        t.push({ key: `${n}`, valueType: "string" }); return t; }, out: e => { const t = []; t.push({ key: "default", valueType: "flow" }); for (const n of yo(1, e.numCases + 1))
        t.push({ key: `${n}`, valueType: "flow" }); return t; }, initialState: void 0, triggered: ({ read: e, commit: t, configuration: n }) => { const r = e("selection"); for (const o of yo(1, n.numCases + 1))
        if (r === e(`${o}`)) {
            t(`${o}`);
            return;
        } t("default"); } }), j5 = zl({ typeName: "math/easing", category: xe.Logic, label: "Easing", in: { easingFunction: { valueType: "string", name: "easingFunction", defaultValue: "linear", options: Object.keys(Ch) }, easingMode: { valueType: "string", name: "easingMode", defaultValue: "inOut", options: Object.keys(Th) }, t: "float" }, out: { t: "float" }, exec: ({ read: e, write: t }) => { const n = Ch[e("easingFunction")], r = Th[e("easingMode")], o = r(n), i = e("t"); t("t", o(i)); } }), F5 = k({ name: "time/now", label: "Now", out: "float", exec: () => Date.now() / 1e3 }), V5 = Object.freeze(Object.defineProperty({ __proto__: null, Now: F5 }, Symbol.toStringTag, { value: "Module" })), da = Ol(() => Object.fromEntries([w1, b1, S1, x1].map(t => [t.name, t])));
function H5(e) { return Object.keys(da()).filter(t => t !== "string").flatMap(t => v1({ values: e, valueTypeName: t })); }
const B5 = Ol(() => { const e = [...ut(O5), ...ut(vT), ...ut(T5), ...ut(l5), nf.Description, rf.Description, L5, $5, j5, QC, XC, lT, aT, cT, of.Description, ...ut(V5), GC, eT, tT, oT, R5, D5, af.Description, sf.Description, ZC, JC, nT, rT, lf.Description, KC, ...H5(da())]; return Object.fromEntries(e.map(t => [t.typeName, t])); }), U5 = e => ({ values: { ...e.values, ...da() }, nodes: { ...e.nodes, ...B5() }, dependencies: { ...e.dependencies } }), q5 = ({ title: e, category: t = xe.None, selected: n, children: r }) => { let o = gC[t]; o === void 0 && (o = "red"); let [i, a, s] = Od[o]; return n && (a = "border-gray-800"), b.jsxs("div", { className: Id("rounded text-white text-sm bg-gray-800 min-w-[120px]", n && "outline outline-1"), children: [b.jsx("div", { className: `${i} ${s} px-2 py-1 rounded-t`, children: e }), b.jsx("div", { className: `flex flex-col gap-2 py-2 border-l border-r border-b ${a} `, children: r })] }); };
function W5({ specGenerator: e, connected: t, valueType: n, name: r }) { const o = en(), i = n === "flow"; let a = l1[n]; a === void 0 && (a = "red"); const [s, l] = Od[a], u = i === !1 || r !== "flow"; return b.jsxs("div", { className: "flex grow items-center justify-end h-7", children: [u && b.jsx("div", { className: "capitalize", children: r }), i && b.jsx(xt, { icon: Cv, color: "#ffffff", size: "lg", className: "ml-1" }), b.jsx(Mo, { id: r, type: "source", position: W.Right, className: Id(l, t ? s : "bg-gray-800"), isValidConnection: c => u1(c, o, e) })] }); }
const Y5 = (e, t) => { const n = Math.max(e.length, t.length), r = []; for (let o = 0; o < n; o++) {
    const i = [e[o], t[o]];
    r.push(i);
} return r; }, X5 = ({ id: e, data: t, spec: n, selected: r, specGenerator: o }) => { const i = Sv(), a = wC(e), s = Y5(n.inputs, n.outputs), l = n.configuration.find(d => d.name === "numInputs" && d.valueType === "number"), u = n.configuration.find(d => d.name === "numOutputs" && d.valueType === "number"), c = n.configuration.find(d => d.name === "numCases" && d.valueType === "number"); let f; return l ? f = zu(e, "inputs", l.defaultValue) : u ? f = zu(e, "outputs", u.defaultValue) : c && (f = zu(e, "both", c.defaultValue)), b.jsxs(q5, { title: n.label, category: n.category, selected: r, children: [s.map(([d, p], g) => { var y; return b.jsxs("div", { className: "flex flex-row justify-between gap-8 relative px-2", children: [d && b.jsx(vC, { ...d, specGenerator: o, value: ((y = t.values) == null ? void 0 : y[d.name]) ?? d.defaultValue, onChange: a, connected: tf(i, e, d.name, "target") }), p && b.jsx(W5, { ...p, specGenerator: o, connected: tf(i, e, p.name, "source") })] }, g); }), f && b.jsx("div", { className: "flex flex-row self-center", children: b.jsxs("button", { style: { backgroundColor: "transparent" }, onClick: f, children: [b.jsx(xt, { icon: hN, color: "#ffffff" }), " Add socket"] }) })] }); };
var Ka, Q5 = new Uint8Array(16);
function G5() { if (!Ka && (Ka = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !Ka))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"); return Ka(Q5); }
const K5 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function Z5(e) { return typeof e == "string" && K5.test(e); }
var Re = [];
for (var Au = 0; Au < 256; ++Au)
    Re.push((Au + 256).toString(16).substr(1));
function J5(e) { var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = (Re[e[t + 0]] + Re[e[t + 1]] + Re[e[t + 2]] + Re[e[t + 3]] + "-" + Re[e[t + 4]] + Re[e[t + 5]] + "-" + Re[e[t + 6]] + Re[e[t + 7]] + "-" + Re[e[t + 8]] + Re[e[t + 9]] + "-" + Re[e[t + 10]] + Re[e[t + 11]] + Re[e[t + 12]] + Re[e[t + 13]] + Re[e[t + 14]] + Re[e[t + 15]]).toLowerCase(); if (!Z5(n))
    throw TypeError("Stringified UUID is invalid"); return n; }
function zo(e, t, n) { e = e || {}; var r = e.random || (e.rng || G5)(); if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
    n = n || 0;
    for (var o = 0; o < 16; ++o)
        t[n + o] = r[o];
    return t;
} return J5(r); }
const eM = e => { var r; const t = [], n = []; return (r = e.nodes) == null || r.forEach(o => { var a, s, l, u; const i = { id: o.id, type: o.type, position: { x: (a = o.metadata) != null && a.positionX ? Number((s = o.metadata) == null ? void 0 : s.positionX) : 0, y: (l = o.metadata) != null && l.positionY ? Number((u = o.metadata) == null ? void 0 : u.positionY) : 0 }, data: { configuration: {}, values: {} } }; if (t.push(i), o.configuration)
    for (const [c, f] of Object.entries(o.configuration))
        i.data.configuration[c] = f; if (o.parameters)
    for (const [c, f] of Object.entries(o.parameters))
        "link" in f && f.link !== void 0 && n.push({ id: zo(), source: f.link.nodeId, sourceHandle: f.link.socket, target: o.id, targetHandle: c }), "value" in f && (i.data.values[c] = f.value); if (o.flows)
    for (const [c, f] of Object.entries(o.flows))
        n.push({ id: zo(), source: o.id, sourceHandle: c, target: f.nodeId, targetHandle: f.socket }); }), [t, n]; }, tM = (e, t) => { let n = 0; e.forEach(r => { r.position.x = n, n += 200; }); }, nM = e => e.nodes === void 0 ? !1 : e.nodes.some(t => { var n, r; return ((n = t.metadata) == null ? void 0 : n.positionX) !== void 0 || ((r = t.metadata) == null ? void 0 : r.positionY) !== void 0; }), rM = e => e.getNodeTypes().reduce((t, n) => (t[n] = r => { const o = e.getNodeSpec(n, r.data.configuration); return b.jsx(X5, { spec: o, specGenerator: e, ...r }); }, t), {}), oM = ({ specGenerator: e }) => { const [t, n] = T.useState(); return T.useEffect(() => { if (!e)
    return; const r = rM(e); n(r); }, [e]), t; }, iM = ({ initialGraphJson: e, specGenerator: t }) => { const [n, r] = T.useState(), [o, i, a] = U4([]), [s, l, u] = q4([]), c = T.useCallback(d => { if (!d)
    return; const [p, g] = eM(d); nM(d) === !1 && tM(p), i(p), l(g), r(d); }, [l, i]); T.useEffect(() => { e && c(e); }, [e, c]), T.useEffect(() => { if (!t)
    return; const d = _v(o, s, t); r(d); }, [o, s, t]); const f = oM({ specGenerator: t }); return { nodes: o, edges: s, onEdgesChange: u, onNodesChange: a, setGraphJson: c, graphJson: n, nodeTypes: f }; }, aM = (e, t, n, r, o) => { const i = Zi(o, e.type, e.data.configuration, r.handleType), a = i == null ? void 0 : i.find(u => u.name === r.handleId), s = Zi(o, t, {}, r.handleType === "source" ? "target" : "source"), l = s == null ? void 0 : s.find(u => u.valueType === (a == null ? void 0 : a.valueType)); return r.handleType === "source" ? { id: zo(), source: r.nodeId ?? "", sourceHandle: r.handleId, target: n, targetHandle: l == null ? void 0 : l.name } : { id: zo(), target: r.nodeId ?? "", targetHandle: r.handleId, source: n, sourceHandle: l == null ? void 0 : l.name }; }, Lh = (e, t, n) => { if (t === void 0)
    return; const r = e.find(a => a.id === t.nodeId); if (r === void 0)
    return; const o = n ? Zi(n, r.type, r.data.configuration, t.handleType) : void 0, i = o == null ? void 0 : o.find(a => a.name === t.handleId); if (i !== void 0)
    return { handleType: t.handleType === "source" ? "target" : "source", valueType: i.valueType }; }, sM = ({ nodes: e, lastConnectStart: t, specGenerator: n }) => { const [r, o] = T.useState(Lh(e, t, n)); return T.useEffect(() => { o(Lh(e, t, n)); }, [e, t, n]), r; }, lM = ({ onEdgesChange: e, onNodesChange: t, nodes: n, specGenerator: r }) => { const [o, i] = T.useState(), [a, s] = T.useState(), l = T.useCallback(x => { if (x.source === null || x.target === null)
    return; const m = { id: zo(), source: x.source, target: x.target, sourceHandle: x.sourceHandle, targetHandle: x.targetHandle }; e([{ type: "add", item: m }]); }, [e]), u = T.useCallback(() => { i(void 0), s(void 0); }, []), c = T.useCallback((x, m) => { u(); const h = { id: zo(), type: x, position: m, data: { configuration: {}, values: {} } }; if (t([{ type: "add", item: h }]), o === void 0)
    return; const v = n.find(w => w.id === o.nodeId); v !== void 0 && r && e([{ type: "add", item: aM(v, x, h.id, o, r) }]); }, [u, o, n, e, t, r]), f = T.useCallback((x, m) => { i(m); }, []), d = T.useCallback(x => { x.target.classList.contains("react-flow__pane") ? s({ x: x.clientX, y: x.clientY }) : i(void 0); }, []), p = T.useCallback(() => u(), [u]), g = T.useCallback(x => { x.preventDefault(), s({ x: x.clientX, y: x.clientY }); }, []), y = sM({ nodes: n, lastConnectStart: o, specGenerator: r }); return { onConnect: l, handleStartConnect: f, handleStopConnect: d, handlePaneClick: p, handlePaneContextMenu: g, lastConnectStart: o, nodePickerVisibility: a, handleAddNode: c, closeNodePicker: u, nodePickFilters: y }; }, uM = ({ graphJson: e, autoRun: t = !1, registry: n }) => { var c; const [r, o] = T.useState(), [i, a] = T.useState(t), s = T.useCallback(() => { a(!0); }, []), l = T.useCallback(() => { a(!1); }, []), u = T.useCallback(() => { a(f => !f); }, []); return T.useEffect(() => { if (!e || !n.values || !i || !n.dependencies)
    return; let f; try {
    f = DC({ graphJson: e, registry: n }).nodes;
}
catch (p) {
    console.error(p);
    return;
} const d = new RC(f); return o(d), () => { d.dispose(), o(void 0); }; }, [e, n.values, n.nodes, i, n.dependencies]), T.useEffect(() => { var g; if (!r || !i)
    return; r.executeAllSync(); let f; const d = (g = n.dependencies) == null ? void 0 : g.ILifecycleEventEmitter, p = async () => { d.tickEvent.emit(), await r.executeAllAsync(500), f = window.setTimeout(p, 50); }; return (async () => (d.startEvent.listenerCount > 0 ? (d.startEvent.emit(), await r.executeAllAsync(5)) : console.log("has no listener count"), p()))(), () => { window.clearTimeout(f); }; }, [r, (c = n.dependencies) == null ? void 0 : c.ILifecycleEventEmitter, i]), { engine: r, playing: i, play: s, togglePlay: u, pause: l }; };
class cM {
    constructor(t) { this.registry = t, this.specsCache = {}; }
    getNodeTypes() { return Object.keys(this.registry.nodes); }
    getNodeSpec(t, n) { const r = t + "" + JSON.stringify(n); return this.specsCache[r] || (this.specsCache[r] = y1(this.registry, t, n)), this.specsCache[r]; }
    getAllNodeSpecs() { return this.specsWithoutConfig || (this.specsWithoutConfig = qC(this.registry)), this.specsWithoutConfig; }
}
const fM = e => { const [t, n] = T.useState(); return T.useEffect(() => { n(new cM(e)); }, [e.nodes, e.values, e.dependencies]), t; }, dM = ({ position: e, onPickNode: t, onClose: n, filters: r, specJSON: o }) => { const [i, a] = T.useState(""), s = en(); if (Nv("Escape", n), !o)
    return null; let l = o; return r !== void 0 && (l = l == null ? void 0 : l.filter(u => ((r == null ? void 0 : r.handleType) === "source" ? u.outputs : u.inputs).some(f => f.valueType === (r == null ? void 0 : r.valueType)))), l = (l == null ? void 0 : l.filter(u => { const c = i.toLowerCase(); return u.type.toLowerCase().includes(c); })) || [], b.jsxs("div", { className: "node-picker absolute z-10 text-sm text-white bg-gray-800 border rounded border-gray-500", style: { top: e.y, left: e.x }, children: [b.jsx("div", { className: "bg-gray-500 p-2", children: "Add Node" }), b.jsx("div", { className: "p-2", children: b.jsx("input", { type: "text", autoFocus: !0, placeholder: "Type to filter", className: " bg-gray-600 disabled:bg-gray-700 w-full py-1 px-2", value: i, onChange: u => a(u.target.value) }) }), b.jsx("div", { className: "max-h-48 overflow-y-scroll", children: l.map(({ type: u }) => b.jsx("div", { className: "p-2 cursor-pointer border-b border-gray-600", onClick: () => t(u, s.project(e)), children: u }, u)) })] }); }, mM = ({ initialGraph: e, registry: t, examples: n }) => { const r = fM(t), { nodes: o, edges: i, onNodesChange: a, onEdgesChange: s, graphJson: l, setGraphJson: u, nodeTypes: c } = iM({ initialGraphJson: e, specGenerator: r }), { onConnect: f, handleStartConnect: d, handleStopConnect: p, handlePaneClick: g, handlePaneContextMenu: y, nodePickerVisibility: x, handleAddNode: m, lastConnectStart: h, closeNodePicker: v, nodePickFilters: w } = lM({ nodes: o, onEdgesChange: s, onNodesChange: a, specGenerator: r }), { togglePlay: S, playing: N } = uM({ graphJson: l, registry: t }); return b.jsxs(xv, { nodeTypes: c, nodes: o, edges: i, onNodesChange: a, onEdgesChange: s, onConnect: f, onConnectStart: d, onConnectEnd: p, fitView: !0, fitViewOptions: { maxZoom: 1 }, onPaneClick: g, onPaneContextMenu: y, children: [b.jsx(mC, { playing: N, togglePlay: S, setBehaviorGraph: u, examples: n, specGenerator: r }), b.jsx(oN, { variant: Ct.Lines, color: "#2a2b2d", style: { backgroundColor: "#1E1F22" } }), x && b.jsx(dM, { position: x, filters: w, onPickNode: m, onClose: v, specJSON: r == null ? void 0 : r.getAllNodeSpecs() })] }); };
const pM = [{ type: "lifecycle/onStart", id: "0", flows: { flow: { nodeId: "1", socket: "flow" } } }, { type: "flow/branch", id: "1", parameters: { condition: { value: !1 } }, flows: { true: { nodeId: "2", socket: "flow" }, false: { nodeId: "3", socket: "flow" } } }, { type: "debug/log", id: "2", parameters: { text: { value: "Condition is true!" } } }, { type: "debug/log", id: "3", parameters: { text: { value: "Condition is false!" } } }], hM = { nodes: pM }, gM = [{ type: "lifecycle/onStart", id: "0", flows: { flow: { nodeId: "1", socket: "flow" } } }, { type: "debug/log", id: "1", parameters: { text: { value: "Hello World!" } } }], yM = { nodes: gM }, vM = [{ type: "lifecycle/onStart", id: "0", flows: { flow: { nodeId: "10", socket: "flow" } } }, { type: "math/float", id: "1", parameters: { a: { value: 3 } } }, { type: "math/pow/float", id: "2", parameters: { a: { link: { nodeId: "1", socket: "result" } }, b: { value: 1 } } }, { type: "math/pow/float", id: "3", parameters: { a: { link: { nodeId: "1", socket: "result" } }, b: { value: 2 } } }, { type: "math/pow/float", id: "4", parameters: { a: { link: { nodeId: "1", socket: "result" } }, b: { value: 3 } } }, { type: "math/multiply/float", id: "5", parameters: { a: { link: { nodeId: "2", socket: "result" } }, b: { value: 3 } } }, { type: "math/add/float", id: "6", parameters: { a: { link: { nodeId: "5", socket: "result" } }, b: { link: { nodeId: "3", socket: "result" } } } }, { type: "math/negate/float", id: "7", parameters: { a: { link: { nodeId: "4", socket: "result" } } } }, { type: "math/add/float", id: "8", parameters: { a: { link: { nodeId: "6", socket: "result" } }, b: { link: { nodeId: "7", socket: "result" } } } }, { type: "math/toString/float", id: "9", parameters: { a: { link: { nodeId: "8", socket: "result" } } } }, { type: "debug/log", id: "10", parameters: { text: { link: { nodeId: "9", socket: "result" } } } }], wM = { nodes: vM }, xM = [{ type: "lifecycle/onStart", id: "0", flows: { flow: { nodeId: "1", socket: "flow" } } }, { type: "debug/log", id: "1", parameters: { text: { value: "Waiting..." } }, flows: { flow: { nodeId: "2", socket: "flow" } } }, { type: "time/delay", id: "2", parameters: { duration: { value: 1 } }, flows: { flow: { nodeId: "3", socket: "flow" } } }, { type: "debug/log", id: "3", parameters: { text: { value: "One Second Later!" } } }], SM = { nodes: xM }, bM = [{ valueTypeName: "float", name: "counter", id: 0, initialValue: -1 }], kM = [{ type: "lifecycle/onStart", id: "0", flows: { flow: { nodeId: "1", socket: "flow" } } }, { type: "variable/set", configuration: { variableId: 0 }, id: "1", parameters: { value: { value: 1e3 } }, flows: { flow: { nodeId: "4", socket: "flow" } } }, { type: "variable/get", configuration: { variableId: 0 }, id: "2" }, { type: "math/toString/float", id: "3", parameters: { a: { link: { nodeId: "2", socket: "value" } } } }, { type: "debug/log", id: "4", parameters: { text: { link: { nodeId: "3", socket: "result" } } } }], EM = { variables: bM, nodes: kM }, NM = [{ id: "0", type: "lifecycle/onStart", metadata: { positionX: "2.1104424778760915", positionY: "-501.2300884955752" }, flows: { flow: { nodeId: "1", socket: "flow" } } }, { id: "1", type: "debug/log", metadata: { positionX: "225.32530973451327", positionY: "-502.2853097345133" }, parameters: { text: { value: "Starting 10,000,000 iteration for-loop..." } }, flows: { flow: { nodeId: "2", socket: "flow" } } }, { id: "2", type: "flow/forLoop", metadata: { positionX: "612.0994690265486", positionY: "-497.00920353982303" }, parameters: { startIndex: { value: 0 }, endIndex: { value: 1e7 } }, flows: { loopBody: { nodeId: "5", socket: "flow" }, completed: { nodeId: "7", socket: "flow" } } }, { id: "3", type: "math/modulus/integer", metadata: { positionX: "1086.4569911504425", positionY: "-435.806371681416" }, parameters: { b: { value: 1e6 }, a: { link: { nodeId: "2", socket: "index" } } } }, { id: "4", type: "math/equal/integer", metadata: { positionX: "1281.1808849557524", positionY: "-440.0272566371682" }, parameters: { b: { value: 0 }, a: { link: { nodeId: "3", socket: "result" } } } }, { id: "5", type: "flow/branch", metadata: { positionX: "1497.0092035398231", positionY: "-548.7150442477877" }, parameters: { condition: { link: { nodeId: "4", socket: "result" } } }, flows: { true: { nodeId: "6", socket: "flow" } } }, { id: "6", type: "debug/log", metadata: { positionX: "1746.6046017699116", positionY: "-580.3716814159293" }, parameters: { text: { value: "1,000,000 more iterations..." } } }, { id: "7", type: "debug/log", metadata: { positionX: "1125.642477876106", positionY: "-156.17274336283188" }, parameters: { text: { value: "Completed all iterations!" } } }], _M = [], CM = [], TM = { nodes: NM, variables: _M, customEvents: CM };
class Qe {
    constructor(t = 0, n = 0) { this.x = t, this.y = n; }
    clone(t = new Qe) { return t.set(this.x, this.y); }
    set(t, n) { return this.x = t, this.y = n, this; }
}
function MM(e, t, n = Ro) { return Nt(e.x, t.x, n) && Nt(e.y, t.y, n); }
function PM(e, t, n = new Qe) { return n.set(e.x + t.x, e.y + t.y); }
function zM(e, t, n = new Qe) { return n.set(e.x - t.x, e.y - t.y); }
function k1(e, t, n = new Qe) { return n.set(e.x * t, e.y * t); }
function AM(e, t = new Qe) { return t.set(-e.x, -e.y); }
function E1(e) { return Math.sqrt(N1(e, e)); }
function IM(e, t = new Qe) { const n = 1 / E1(e); return k1(e, n, t); }
function N1(e, t) { return e.x * t.x + e.y * t.y; }
function _1(e, t, n, r = new Qe) { const o = 1 - n; return r.set(e.x * o + t.x * n, e.y * o + t.y * n); }
function OM(e, t = 0, n = new Qe) { return n.set(e[t + 0], e[t + 1]); }
function $M(e, t, n = 0) { t[n + 0] = e.x, t[n + 1] = e.y; }
function LM(e, t = new Qe) { return OM(fa(e), 0, t); }
const Vd = 3, gs = 3, St = Vd * gs;
class Ee {
    constructor(t = [1, 0, 0, 0, 1, 0, 0, 0, 1]) { if (this.elements = t, t.length !== St)
        throw new Error(`elements must have length ${St}, got ${t.length}`); }
    clone(t = new Ee) { return t.set(this.elements); }
    set(t) { if (t.length !== St)
        throw new Error(`elements must have length ${St}, got ${t.length}`); for (let n = 0; n < St; n++)
        this.elements[n] = t[n]; return this; }
}
function RM(e, t, n, r = new Ee) { const o = r.set(e.elements).elements, i = t * Vd; return o[i + 0] = n.x, o[i + 1] = n.y, o[i + 2] = n.z, r; }
function DM(e, t, n, r = new Ee) { const o = r.set(e.elements).elements; return o[t + gs * 0] = n.x, o[t + gs * 1] = n.y, o[t + gs * 2] = n.z, r; }
function jM(e, t, n, r = new Ee) { const o = r.elements, i = [e, t, n]; for (let a = 0; a < i.length; a++) {
    const s = a * Vd, l = i[a];
    o[s + 0] = l.x, o[s + 1] = l.y, o[s + 2] = l.z;
} return r; }
function C1(e, t, n = Ro) { for (let r = 0; r < St; r++)
    if (!Nt(e.elements[r], t.elements[r], n))
        return !1; return !0; }
function FM(e, t, n = new Ee) { for (let r = 0; r < St; r++)
    n.elements[r] = e.elements[r] + t.elements[r]; return n; }
function VM(e, t, n = new Ee) { for (let r = 0; r < St; r++)
    n.elements[r] = e.elements[r] - t.elements[r]; return n; }
function HM(e, t, n = new Ee) { for (let r = 0; r < St; r++)
    n.elements[r] = e.elements[r] * t; return n; }
function BM(e, t = new Ee) { for (let n = 0; n < St; n++)
    t.elements[n] = -e.elements[n]; return t; }
function UM(e, t, n = new Ee) { const r = e.elements, o = t.elements, i = n.elements, a = r[0], s = r[3], l = r[6], u = r[1], c = r[4], f = r[7], d = r[2], p = r[5], g = r[8], y = o[0], x = o[3], m = o[6], h = o[1], v = o[4], w = o[7], S = o[2], N = o[5], C = o[8]; return i[0] = a * y + s * h + l * S, i[3] = a * x + s * v + l * N, i[6] = a * m + s * w + l * C, i[1] = u * y + c * h + f * S, i[4] = u * x + c * v + f * N, i[7] = u * m + c * w + f * C, i[2] = d * y + p * h + g * S, i[5] = d * x + p * v + g * N, i[8] = d * m + p * w + g * C, n; }
function qM(e) { const t = e.elements, n = t[0], r = t[1], o = t[2], i = t[3], a = t[4], s = t[5], l = t[6], u = t[7], c = t[8]; return n * a * c - n * s * u - r * i * c + r * s * l + o * i * u - o * a * l; }
function WM(e, t = new Ee) { const n = e.elements, r = t.elements; return r[0] = n[0], r[4] = n[4], r[8] = n[8], r[1] = n[3], r[3] = n[1], r[2] = n[6], r[6] = n[2], r[5] = n[7], r[7] = n[5], t; }
function YM(e, t = new Ee) { const n = e.elements, r = n[0], o = n[1], i = n[2], a = n[3], s = n[4], l = n[5], u = n[6], c = n[7], f = n[8], d = f * s - l * c, p = l * u - f * a, g = c * a - s * u, y = r * d + o * p + i * g; if (y === 0)
    throw new Error("can not invert degenerate matrix"); const x = 1 / y, m = t.elements; return m[0] = d * x, m[1] = (i * c - f * o) * x, m[2] = (l * o - i * s) * x, m[3] = p * x, m[4] = (f * r - i * u) * x, m[5] = (i * a - l * r) * x, m[6] = g * x, m[7] = (o * u - c * r) * x, m[8] = (s * r - o * a) * x, t; }
function T1(e, t, n, r = new Ee) { const o = 1 - n; for (let i = 0; i < St; i++)
    r.elements[i] = e.elements[i] * o + t.elements[i] * n; return r; }
function XM(e, t = 0, n = new Ee) { for (let r = 0; r < St; r++)
    n.elements[r] = e[t + r]; return n; }
function QM(e, t = new Ee) { return XM(fa(e), 0, t); }
function Hd(e, t = new Ee) { const n = t.elements, r = e.x, o = e.y, i = e.z, a = Math.cos(r), s = Math.sin(r), l = Math.cos(o), u = Math.sin(o), c = Math.cos(i), f = Math.sin(i), d = a * c, p = a * f, g = s * c, y = s * f; return n[0] = l * c, n[3] = -l * f, n[6] = u, n[1] = p + g * u, n[4] = d - y * u, n[7] = -s * l, n[2] = y - d * u, n[5] = g + p * u, n[8] = a * l, t; }
function M1(e, t = new Ee) { const n = e.x, r = e.y, o = e.z, i = e.w, a = n + n, s = r + r, l = o + o, u = n * a, c = n * s, f = n * l, d = r * s, p = r * l, g = o * l, y = i * a, x = i * s, m = i * l; return t.set([1 - (d + g), c - m, f + x, c + m, 1 - (u + g), p - y, f - x, p + y, 1 - (u + d)]); }
function GM(e, t = new Ee) { return t.set([e.x, 0, 0, 0, e.y, 0, 0, 0, 1]); }
function KM(e, t = new Qe) { const n = e.elements, r = n[0], o = n[1], i = n[3], a = n[4]; return t.set(Math.sqrt(r * r + o * o), Math.sqrt(i * i + a * a)); }
function ZM(e, t = new Ee) { return t.set([1, 0, e.x, 0, 1, e.y, 0, 0, 1]); }
function JM(e, t = new Qe) { return t.set(e.elements[2], e.elements[5]); }
function Bd(e, t = new Ee) { const n = e.elements; return t.set([n[0], n[1], n[2], n[4], n[5], n[6], n[8], n[9], n[10]]); }
class oe {
    constructor(t = 0, n = 0, r = 0) { this.x = t, this.y = n, this.z = r; }
    clone(t = new oe) { return t.set(this.x, this.y, this.z); }
    set(t, n, r) { return this.x = t, this.y = n, this.z = r, this; }
}
function jo(e, t, n = Ro) { return Nt(e.x, t.x, n) && Nt(e.y, t.y, n) && Nt(e.z, t.z, n); }
function Ud(e, t, n = new oe) { return n.set(e.x + t.x, e.y + t.y, e.z + t.z); }
function $l(e, t, n = new oe) { return n.set(e.x - t.x, e.y - t.y, e.z - t.z); }
function Ao(e, t, n = new oe) { return n.set(e.x * t, e.y * t, e.z * t); }
function qd(e, t = new oe) { return t.set(-e.x, -e.y, -e.z); }
function tl(e) { return Math.sqrt(P1(e, e)); }
function Wd(e, t = new oe) { const n = 1 / tl(e); return Ao(e, n, t); }
function P1(e, t) { return e.x * t.x + e.y * t.y + e.z * t.z; }
function ys(e, t, n = new oe) { const r = e.x, o = e.y, i = e.z, a = t.x, s = t.y, l = t.z; return n.set(o * l - i * s, i * a - r * l, r * s - o * a); }
function Fo(e, t, n, r = new oe) { const o = 1 - n; return r.set(e.x * o + t.x * n, e.y * o + t.y * n, e.z * o + t.z * n); }
function eP(e, t = 0, n = new oe) { return n.set(e[t + 0], e[t + 1], e[t + 2]); }
function Yd(e, t = new oe) { return eP(fa(e), 0, t); }
function tP(e, t = new oe) { function n(l, u, c) { return c < 0 && (c += 1), c > 1 && (c -= 1), c < 1 / 6 ? l + (u - l) * 6 * c : c < 1 / 2 ? u : c < 2 / 3 ? l + (u - l) * 6 * (2 / 3 - c) : l; } const r = (e.x % 1 + 1) % 1, o = Math.min(Math.max(e.y, 0), 1), i = Math.min(Math.max(e.z, 0), 1); if (o === 0)
    return t.set(1, 1, 1); const a = i <= .5 ? i * (1 + o) : i + o - i * o, s = 2 * i - a; return t.set(n(s, a, r + 1 / 3), n(s, a, r), n(s, a, r - 1 / 3)); }
function nP(e, t = new oe) { const n = e.x, r = e.y, o = e.z, i = Math.max(n, r, o), a = Math.min(n, r, o); let s = 0, l = 0; const u = (a + i) / 2; if (a === i)
    s = 0, l = 0;
else {
    const c = i - a;
    switch (l = u <= .5 ? c / (i + a) : c / (2 - i - a), i) {
        case n:
            s = (r - o) / c + (r < o ? 6 : 0);
            break;
        case r:
            s = (o - n) / c + 2;
            break;
        case o:
            s = (n - r) / c + 4;
            break;
    }
    s /= 6;
} return t.set(s, l, u); }
function rP(e, t = new oe) { return e = Math.floor(e), t.set((e >> 16 & 255) / 255, (e >> 8 & 255) / 255, (e & 255) / 255); }
function oP(e) { return e.x * 255 << 16 ^ e.y * 255 << 8 ^ e.z * 255 << 0; }
function Xd(e, t = new oe) { const n = e.elements, r = n[0], o = n[3], i = n[6]; n[1]; const a = n[4], s = n[7]; n[2]; const l = n[5], u = n[8]; return t.y = Math.asin(_C(i, -1, 1)), Math.abs(i) < .9999999 ? (t.x = Math.atan2(-s, u), t.z = Math.atan2(-o, r)) : (t.x = Math.atan2(l, a), t.z = 0), t; }
function iP(e, t = new oe) { return Xd(Bd(e), t); }
function aP(e, t = new oe) { return Xd(M1(e), t); }
const z1 = { name: "color", creator: () => new oe, deserialize: e => typeof e == "string" ? Yd(e) : new oe(e[0], e[1], e[2]), serialize: e => [e.x, e.y, e.z], lerp: (e, t, n) => Fo(e, t, n), equals: (e, t) => jo(e, t), clone: e => e.clone() }, A1 = { name: "euler", creator: () => new oe, deserialize: e => typeof e == "string" ? Yd(e) : new oe(e[0], e[1], e[2]), serialize: e => [e.x, e.y, e.z], lerp: (e, t, n) => Fo(e, t, n), equals: (e, t) => jo(e, t), clone: e => e.clone() };
class se {
    constructor(t = 0, n = 0, r = 0, o = 0) { this.x = t, this.y = n, this.z = r, this.w = o; }
    clone(t = new se) { return t.set(this.x, this.y, this.z, this.w); }
    set(t, n, r, o) { return this.x = t, this.y = n, this.z = r, this.w = o, this; }
}
function Ll(e, t, n = Ro) { return Nt(e.x, t.x, n) && Nt(e.y, t.y, n) && Nt(e.z, t.z, n) && Nt(e.w, t.w, n); }
function sP(e, t, n = new se) { return n.set(e.x + t.x, e.y + t.y, e.z + t.z, e.w + t.w); }
function lP(e, t, n = new se) { return n.set(e.x - t.x, e.y - t.y, e.z - t.z, e.w - t.w); }
function Rl(e, t, n = new se) { return n.set(e.x * t, e.y * t, e.z * t, e.w * t); }
function I1(e, t = new se) { return t.set(-e.x, -e.y, -e.z, -e.w); }
function Qd(e) { return Math.sqrt(Dl(e, e)); }
function Gd(e, t = new se) { const n = 1 / Qd(e); return Rl(e, n, t); }
function Dl(e, t) { return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w; }
function Kd(e, t, n, r = new se) { const o = 1 - n; return r.set(e.x * o + t.x * n, e.y * o + t.y * n, e.z * o + t.z * n, e.w * o + t.w * n); }
function uP(e, t = 0, n = new se) { return n.set(e[t + 0], e[t + 1], e[t + 2], e[t + 3]); }
function cP(e, t, n = 0) { t[n + 0] = e.x, t[n + 1] = e.y, t[n + 2] = e.z, t[n + 3] = e.w; }
function O1(e, t = new se) { return uP(fa(e), 0, t); }
function fP(e, t = new se) { return t.set(-e.x, -e.y, -e.z, e.w); }
function dP(e, t, n = new se) { const r = e.x, o = e.y, i = e.z, a = e.w, s = t.x, l = t.y, u = t.z, c = t.w; return n.set(r * c + a * s + o * u - i * l, o * c + a * l + i * s - r * u, i * c + a * u + r * l - o * s, a * c - r * s - o * l - i * u); }
function $1(e, t, n, r = new se) { if (n <= 0)
    return e.clone(r); if (n >= 1)
    return t.clone(r); let o = Dl(e, t); if (o < 0 ? (I1(t, r), o = -o) : t.clone(r), o >= 1)
    return r; const i = 1 - o * o; if (i <= Number.EPSILON)
    return Kd(e, r, n), Gd(r, r), r; const a = Math.sqrt(i), s = Math.atan2(a, o), l = Math.sin((1 - n) * s) / a, u = Math.sin(n * s) / a; return r.w = e.w * l + r.w * u, r.x = e.x * l + r.x * u, r.y = e.y * l + r.y * u, r.z = e.z * l + r.z * u, r; }
function L1(e, t = new se) { const n = e.x, r = e.y, o = e.z, i = e.w, a = Math.sqrt(n * n + r * r + o * o), s = Math.exp(i), l = a > 0 ? s * Math.sin(a) / a : 0; return t.set(n * l, r * l, o * l, s * Math.cos(a)); }
function R1(e, t = new se) { const n = e.x, r = e.y, o = e.z, i = e.w, a = Math.sqrt(n * n + r * r + o * o), s = a > 0 ? Math.atan2(a, i) / a : 0; return t.set(n * s, r * s, o * s, .5 * Math.log(n * n + r * r + o * o + i * i)); }
function mP(e, t, n = new se) { const r = R1(e), o = Rl(r, t); return L1(o, n), n; }
function pP(e, t = new se) { const n = Math.cos(e.x / 2), r = Math.cos(e.y / 2), o = Math.cos(e.z / 2), i = Math.sin(e.x / 2), a = Math.sin(e.y / 2), s = Math.sin(e.z / 2); return t.set(i * r * o + n * a * s, n * a * o - i * r * s, n * r * s + i * a * o, n * r * o - i * a * s); }
function hP(e, t, n = new se) { const r = e / 2, o = Math.sin(r); return n.set(t.x * o, t.y * o, t.z * o, Math.cos(r)); }
function gP(e, t = new se) { return D1(Bd(e), t); }
function D1(e, t = new se) { const n = e.elements, r = n[0], o = n[3], i = n[6], a = n[1], s = n[4], l = n[7], u = n[2], c = n[5], f = n[8], d = r + s + f; if (d > 0) {
    const g = .5 / Math.sqrt(d + 1);
    return t.set((c - l) * g, (i - u) * g, (a - o) * g, .25 / g);
} if (r > s && r > f) {
    const g = 2 * Math.sqrt(1 + r - s - f);
    return t.set(.25 * g, (o + a) / g, (i + u) / g, (c - l) / g);
} if (s > f) {
    const g = 2 * Math.sqrt(1 + s - r - f);
    return t.set((o + a) / g, .25 * g, (l + c) / g, (i - u) / g);
} const p = 2 * Math.sqrt(1 + f - r - s); return t.set((i + u) / p, (l + c) / p, .25 * p, (a - o) / p); }
const j1 = { name: "quat", creator: () => new se, deserialize: e => typeof e == "string" ? O1(e) : new se(e[0], e[1], e[2], e[3]), serialize: e => [e.x, e.y, e.z, e.w], lerp: (e, t, n) => $1(e, t, n), equals: (e, t) => Ll(e, t), clone: e => e.clone() }, F1 = { name: "vec2", creator: () => new Qe, deserialize: e => typeof e == "string" ? LM(e) : new Qe(e[0], e[1]), serialize: e => [e.x, e.y], lerp: (e, t, n) => _1(e, t, n), equals: (e, t) => e.x === t.x && e.y === t.y, clone: e => e.clone() }, V1 = { name: "vec3", creator: () => new oe, deserialize: e => typeof e == "string" ? Yd(e) : new oe(e[0], e[1], e[2]), serialize: e => [e.x, e.y, e.z], lerp: (e, t, n) => Fo(e, t, n), equals: (e, t) => jo(e, t), clone: e => e.clone() }, H1 = { name: "vec4", creator: () => new se, deserialize: e => typeof e == "string" ? O1(e) : new se(e[0], e[1], e[2], e[3]), serialize: e => [e.x, e.y, e.z, e.w], lerp: (e, t, n) => Kd(e, t, n), equals: (e, t) => Ll(e, t), clone: e => e.clone() };
class yP {
    constructor() { this.onSceneChanged = new un, this.valueRegistry = Object.fromEntries([w1, b1, S1, x1, F1, V1, H1, z1, A1, j1].map(t => [t.name, t])); }
    getProperty(t, n) { var r; return (r = this.valueRegistry[n]) == null ? void 0 : r.creator(); }
    setProperty() { this.onSceneChanged.emit(); }
    addOnClickedListener(t, n) { console.log("added on clicked listener"); }
    removeOnClickedListener(t, n) { console.log("removed on clicked listener"); }
    getQueryableProperties() { return []; }
    getRaycastableProperties() { return []; }
    getProperties() { return []; }
    addOnSceneChangedListener() { console.log("added on scene changed listener"); }
    removeOnSceneChangedListener() { console.log("removed on scene changed listener"); }
}
const Zd = 4, fi = 4, bt = Zd * fi;
class ie {
    constructor(t = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]) { if (this.elements = t, t.length !== bt)
        throw new Error(`elements must have length ${bt}, got ${t.length}`); }
    clone(t = new ie) { return t.set(this.elements); }
    set(t) { if (t.length !== bt)
        throw new Error(`elements must have length ${bt}, got ${t.length}`); for (let n = 0; n < bt; n++)
        this.elements[n] = t[n]; return this; }
}
function vP(e, t, n, r = new ie) { const o = r.set(e.elements).elements, i = Number(t) * Zd; return o[i + 0] = n.x, o[i + 1] = n.y, o[i + 2] = n.z, o[i + 3] = n.w, r; }
function wP(e, t, n, r = new ie) { const o = r.set(e.elements).elements, i = Number(t); return o[i + fi * 0] = n.x, o[i + fi * 1] = n.y, o[i + fi * 2] = n.z, o[i + fi * 3] = n.w, r; }
function xP(e, t, n, r, o = new ie) { const i = o.elements, a = [e, t, n, r]; for (let s = 0; s < a.length; s++) {
    const l = s * Zd, u = a[s];
    i[l + 0] = u.x, i[l + 1] = u.y, i[l + 2] = u.z, i[l + 3] = u.w;
} return o; }
function B1(e, t, n = Ro) { for (let r = 0; r < bt; r++)
    if (!Nt(e.elements[r], t.elements[r], n))
        return !1; return !0; }
function SP(e, t, n = new ie) { for (let r = 0; r < bt; r++)
    n.elements[r] = e.elements[r] + t.elements[r]; return n; }
function bP(e, t, n = new ie) { for (let r = 0; r < bt; r++)
    n.elements[r] = e.elements[r] - t.elements[r]; return n; }
function kP(e, t, n = new ie) { for (let r = 0; r < bt; r++)
    n.elements[r] = e.elements[r] * t; return n; }
function EP(e, t = new ie) { for (let n = 0; n < bt; n++)
    t.elements[n] = -e.elements[n]; return t; }
function ma(e, t, n = new ie) { const r = e.elements, o = t.elements, i = n.elements, a = r[0], s = r[4], l = r[8], u = r[12], c = r[1], f = r[5], d = r[9], p = r[13], g = r[2], y = r[6], x = r[10], m = r[14], h = r[3], v = r[7], w = r[11], S = r[15], N = o[0], C = o[4], M = o[8], O = o[12], R = o[1], D = o[5], V = o[9], L = o[13], E = o[2], $ = o[6], z = o[10], P = o[14], _ = o[3], A = o[7], I = o[11], F = o[15]; return i[0] = a * N + s * R + l * E + u * _, i[4] = a * C + s * D + l * $ + u * A, i[8] = a * M + s * V + l * z + u * I, i[12] = a * O + s * L + l * P + u * F, i[1] = c * N + f * R + d * E + p * _, i[5] = c * C + f * D + d * $ + p * A, i[9] = c * M + f * V + d * z + p * I, i[13] = c * O + f * L + d * P + p * F, i[2] = g * N + y * R + x * E + m * _, i[6] = g * C + y * D + x * $ + m * A, i[10] = g * M + y * V + x * z + m * I, i[14] = g * O + y * L + x * P + m * F, i[3] = h * N + v * R + w * E + S * _, i[7] = h * C + v * D + w * $ + S * A, i[11] = h * M + v * V + w * z + S * I, i[15] = h * O + v * L + w * P + S * F, n; }
function NP(e) { const t = e.elements, n = t[0], r = t[1], o = t[2], i = t[3], a = t[4], s = t[5], l = t[6], u = t[7], c = t[8], f = t[9], d = t[10], p = t[11], g = t[12], y = t[13], x = t[14], m = t[15], h = f * x * u - y * d * u + y * l * p - s * x * p - f * l * m + s * d * m, v = g * d * u - c * x * u - g * l * p + a * x * p + c * l * m - a * d * m, w = c * y * u - g * f * u + g * s * p - a * y * p - c * s * m + a * f * m, S = g * f * l - c * y * l - g * s * d + a * y * d + c * s * x - a * f * x; return n * h + r * v + o * w + i * S; }
function _P(e, t = new ie) { const n = e.elements, r = t.elements, o = n[0], i = n[1], a = n[2], s = n[3], l = n[4], u = n[5], c = n[6], f = n[7], d = n[8], p = n[9], g = n[10], y = n[11], x = n[12], m = n[13], h = n[14], v = n[15], w = o * u - i * l, S = o * c - a * l, N = o * f - s * l, C = i * c - a * u, M = i * f - s * u, O = a * f - s * c, R = d * m - p * x, D = d * h - g * x, V = d * v - y * x, L = p * h - g * m, E = p * v - y * m, $ = g * v - y * h; return r[0] = u * $ - c * E + f * L, r[1] = a * E - i * $ - s * L, r[2] = m * O - h * M + v * C, r[3] = g * M - p * O - y * C, r[4] = c * V - l * $ - f * D, r[5] = o * $ - a * V + s * D, r[6] = h * N - x * O - v * S, r[7] = d * O - g * N + y * S, r[8] = l * E - u * V + f * R, r[9] = i * V - o * E - s * R, r[10] = x * M - m * N + v * w, r[11] = p * N - d * M - y * w, r[12] = u * D - l * L - c * R, r[13] = o * L - i * D + a * R, r[14] = m * S - x * C - h * w, r[15] = d * C - p * S + g * w, t; }
function CP(e, t = new ie) { const n = e.clone(t).elements; let r; return r = n[1], n[1] = n[4], n[4] = r, r = n[2], n[2] = n[8], n[8] = r, r = n[6], n[6] = n[9], n[9] = r, r = n[3], n[3] = n[12], n[12] = r, r = n[7], n[7] = n[13], n[13] = r, r = n[11], n[11] = n[14], n[14] = r, t; }
function TP(e, t = new ie) { const n = e.elements, r = n[0], o = n[1], i = n[2], a = n[3], s = n[4], l = n[5], u = n[6], c = n[7], f = n[8], d = n[9], p = n[10], g = n[11], y = n[12], x = n[13], m = n[14], h = n[15], v = d * m * c - x * p * c + x * u * g - l * m * g - d * u * h + l * p * h, w = y * p * c - f * m * c - y * u * g + s * m * g + f * u * h - s * p * h, S = f * x * c - y * d * c + y * l * g - s * x * g - f * l * h + s * d * h, N = y * d * u - f * x * u - y * l * p + s * x * p + f * l * m - s * d * m, C = r * v + o * w + i * S + a * N; if (C === 0)
    throw new Error("can not invert degenerate matrix"); const M = 1 / C, O = t.elements; return O[0] = v * M, O[1] = (x * p * a - d * m * a - x * i * g + o * m * g + d * i * h - o * p * h) * M, O[2] = (l * m * a - x * u * a + x * i * c - o * m * c - l * i * h + o * u * h) * M, O[3] = (d * u * a - l * p * a - d * i * c + o * p * c + l * i * g - o * u * g) * M, O[4] = w * M, O[5] = (f * m * a - y * p * a + y * i * g - r * m * g - f * i * h + r * p * h) * M, O[6] = (y * u * a - s * m * a - y * i * c + r * m * c + s * i * h - r * u * h) * M, O[7] = (s * p * a - f * u * a + f * i * c - r * p * c - s * i * g + r * u * g) * M, O[8] = S * M, O[9] = (y * d * a - f * x * a - y * o * g + r * x * g + f * o * h - r * d * h) * M, O[10] = (s * x * a - y * l * a + y * o * c - r * x * c - s * o * h + r * l * h) * M, O[11] = (f * l * a - s * d * a - f * o * c + r * d * c + s * o * g - r * l * g) * M, O[12] = N * M, O[13] = (f * x * i - y * d * i + y * o * p - r * x * p - f * o * m + r * d * m) * M, O[14] = (y * l * i - s * x * i - y * o * u + r * x * u + s * o * m - r * l * m) * M, O[15] = (s * d * i - f * l * i + f * o * u - r * d * u - s * o * p + r * l * p) * M, t; }
function U1(e, t, n, r = new ie) { const o = 1 - n; for (let i = 0; i < bt; i++)
    r.elements[i] = e.elements[i] * o + t.elements[i] * n; return r; }
function MP(e, t = 0, n = new ie) { for (let r = 0; r < bt; r++)
    n.elements[r] = e[t + r]; return n; }
function PP(e, t = new ie) { return MP(fa(e), 0, t); }
function Jd(e, t = new ie) { const n = e.elements; return t.set([n[0], n[1], n[2], 0, n[3], n[4], n[5], 0, n[6], n[7], n[8], 0, 0, 0, 0, 1]); }
function q1(e, t = new ie) { return Jd(Hd(e), t); }
function W1(e, t = new ie) { return Jd(M1(e), t); }
function Y1(e, t = new ie) { return t.set([e.x, 0, 0, 0, 0, e.y, 0, 0, 0, 0, e.z, 0, 0, 0, 0, 1]); }
function X1(e, t = new ie) { return t.set([1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1]); }
function zP(e, t, n = new ie) { return ma(e, X1(t), n); }
function AP(e, t, n = new ie) { return ma(e, Y1(t), n); }
function IP(e, t, n = new ie) { return ma(e, W1(t), n); }
function OP(e, t, n = new ie) { return ma(e, q1(t), n); }
function $P(e, t, n = new oe) { const r = t.x, o = t.y, i = t.z, a = e.elements, s = 1 / (a[3] * r + a[7] * o + a[11] * i + a[15]); return n.x = (a[0] * r + a[4] * o + a[8] * i + a[12]) * s, n.y = (a[1] * r + a[5] * o + a[9] * i + a[13]) * s, n.z = (a[2] * r + a[6] * o + a[10] * i + a[14]) * s, n; }
function LP(e, t, n = new oe) { const r = e.x, o = e.y, i = e.z, a = t.elements; return n.x = a[0] * r + a[4] * o + a[8] * i, n.y = a[1] * r + a[5] * o + a[9] * i, n.z = a[2] * r + a[6] * o + a[10] * i, Wd(n, n); }
function RP(e, t, n, r = new ie) { const o = r.elements, i = $l(e, t), a = tl(i); a === 0 ? i.z = 1 : Ao(i, 1 / a, i); const s = ys(n, i), l = tl(s); l === 0 ? (Math.abs(n.z) === 1 ? n.x += 1e-4 : n.z += 1e-4, Wd(n, n), ys(s, n, s)) : Ao(s, 1 / l, s); const u = ys(i, s); return o[0] = s.x, o[4] = u.x, o[8] = i.x, o[1] = s.y, o[5] = u.y, o[9] = i.y, o[2] = s.z, o[6] = u.z, o[10] = i.z, r; }
const DP = { name: "mat3", creator: () => new Ee, deserialize: e => typeof e == "string" ? QM(e) : new Ee(e), serialize: e => e.elements, lerp: (e, t, n) => T1(e, t, n), equals: (e, t) => C1(e, t), clone: e => e.clone() }, jP = { name: "mat4", creator: () => new ie, deserialize: e => typeof e == "string" ? PP(e) : new ie(e), serialize: e => e.elements, lerp: (e, t, n) => U1(e, t, n), equals: (e, t) => B1(e, t), clone: e => e.clone() }, FP = e => e.map(t => Je({ typeName: `scene/set/${t}`, category: xe.Effect, label: `Set scene ${t}`, in: { jsonPath: (n, r) => { const o = r.getDependency("IScene"); return { valueType: "string", choices: o == null ? void 0 : o.getProperties() }; }, value: t, flow: "flow" }, out: { flow: "flow" }, initialState: void 0, triggered: ({ commit: n, read: r, graph: o }) => { const i = o.getDependency("IScene"); i == null || i.setProperty(r("jsonPath"), t, r("value")), n("flow"); } })), VP = () => ({}), HP = Al({ typeName: "scene/nodeClick", category: xe.Event, label: "On Scene Node Click", in: { jsonPath: (e, t) => { const n = t.getDependency("IScene"); return { valueType: "string", choices: n == null ? void 0 : n.getRaycastableProperties() }; } }, out: { flow: "flow" }, initialState: VP(), init: ({ read: e, commit: t, graph: n }) => { const r = () => { t("flow"); }, o = e("jsonPath"), i = n.getDependency("IScene"); return i == null || i.addOnClickedListener(o, r), { handleNodeClick: r, jsonPath: o }; }, dispose: ({ state: { handleNodeClick: e, jsonPath: t }, graph: { getDependency: n } }) => { if (ke.mustBeTrue(e !== void 0), ke.mustBeTrue(t !== void 0), !t || !e)
        return {}; const r = n("scene"); return r == null || r.removeOnClickedListener(t, e), {}; } }), BP = k({ name: "math/color", label: "Color", in: ["color"], out: "color", exec: e => e }), UP = k({ name: "math/toColor/rgb", label: "RGB To Color", in: [{ r: "float" }, { g: "float" }, { b: "float" }], out: "color", exec: (e, t, n) => new oe(e, t, n) }), qP = k({ name: "math/toRgb/color", label: "Color to RGB", in: ["color"], out: [{ r: "float" }, { g: "float" }, { b: "float" }], exec: e => ({ r: e.x, g: e.y, b: e.z }) }), WP = k({ name: "math/add/color", label: "+", in: ["color", "color"], out: "color", exec: Ud }), YP = k({ name: "math/subtract/color", label: "-", in: ["color", "color"], out: "color", exec: $l }), XP = k({ name: "math/negate/color", label: "-", in: ["color"], out: "color", exec: qd }), QP = k({ name: "math/scale/color", label: "×", in: ["color", "float"], out: "color", exec: Ao }), GP = k({ name: "math/mix/color", label: "÷", in: [{ a: "color" }, { b: "color" }, { t: "float" }], out: "color", exec: Fo }), KP = k({ name: "math/ToColor/hsl", label: "HSL to Color", in: ["vec3"], out: "color", exec: tP }), ZP = k({ name: "math/toHsl/color", label: "Color to HSL", in: ["color"], out: "vec3", exec: nP }), JP = k({ name: "math/toColor/hex", label: "HEX to Color", in: ["float"], out: "color", exec: rP }), ez = k({ name: "math/toHex/color", label: "Color to HEX", in: ["color"], out: "float", exec: oP }), tz = k({ name: "math/equal/color", label: "=", in: [{ a: "color" }, { b: "color" }, { tolerance: "float" }], out: "boolean", exec: jo }), nz = Object.freeze(Object.defineProperty({ __proto__: null, Add: WP, ColorToHex: ez, ColorToHsl: ZP, Constant: BP, Create: UP, Elements: qP, Equal: tz, HexToColor: JP, HslToColor: KP, Mix: GP, Negate: XP, Scale: QP, Subtract: YP }, Symbol.toStringTag, { value: "Module" })), rz = k({ name: "math/euler", label: "Euler", in: ["euler"], out: "euler", exec: e => e }), oz = k({ name: "math/toEuler/float", label: "Float to Euler", in: [{ x: "float" }, { y: "float" }, { z: "float" }], out: "euler", exec: (e, t, n) => new oe(e, t, n) }), iz = k({ name: "math/toFloat/euler", label: "Euler to Float", in: ["euler"], out: [{ x: "float" }, { y: "float" }, { z: "float" }], exec: e => ({ x: e.x, y: e.y, z: e.z }) }), az = k({ name: "math/add/euler", label: "+", in: ["euler", "euler"], out: "euler", exec: Ud }), sz = k({ name: "math/subtract/euler", label: "-", in: ["euler", "euler"], out: "euler", exec: $l }), lz = k({ name: "math/negate/euler", label: "-", in: ["euler"], out: "euler", exec: qd }), uz = k({ name: "math/scale/euler", label: "×", in: ["euler", "float"], out: "euler", exec: Ao }), cz = k({ name: "math/mix/euler", label: "÷", in: [{ a: "euler" }, { b: "euler" }, { t: "float" }], out: "euler", exec: (e, t, n) => (console.warn("TODO: this is not shortest path"), Fo(e, t, n)) }), fz = k({ name: "math/toEuler/mat3", label: "To Euler", in: ["mat3"], out: "euler", exec: Xd }), dz = k({ name: "math/toEuler/mat4", label: "To Euler", in: ["mat4"], out: "euler", exec: iP }), mz = k({ name: "math/toEuler/quat", label: "To Euler", in: ["quat"], out: "euler", exec: aP }), pz = k({ name: "math/equal/euler", label: "=", in: [{ a: "euler" }, { b: "euler" }, { tolerance: "float" }], out: "boolean", exec: jo }), hz = Object.freeze(Object.defineProperty({ __proto__: null, Add: az, Constant: rz, Create: oz, Elements: iz, Equal: pz, Mat3ToEuler: fz, Mat4ToEuler: dz, Mix: cz, Negate: lz, QuatToEuler: mz, Scale: uz, Subtract: sz }, Symbol.toStringTag, { value: "Module" })), gz = k({ name: "math/mat3", label: "Mat3", in: ["mat3"], out: "mat3", exec: e => e }), yz = k({ name: "math/toMat3/column3", label: "Columns to Mat3", in: ["vec3", "vec3", "vec3"], out: "mat3", exec: jM }), vz = k({ name: "math/setColumn/mat3", label: "Set Column", in: ["mat3", "integer", "vec3"], out: "mat3", exec: RM }), wz = k({ name: "math/setRow/mat3", label: "Set Row", in: ["mat3", "integer", "vec3"], out: "mat3", exec: DM }), xz = k({ name: "math/toVec3/mat3", label: "Mat3 To Vec3", in: ["mat3"], out: [{ x: "vec3" }, { y: "vec3" }, { z: "vec3" }], exec: e => { throw new Error("not implemented"); } }), Sz = k({ name: "math/add/mat3", label: "+", in: ["mat3", "mat3"], out: "mat3", exec: FM }), bz = k({ name: "math/subtract/mat3", label: "-", in: ["mat3", "mat3"], out: "mat3", exec: VM }), kz = k({ name: "math/negate/mat3", label: "-", in: ["mat3"], out: "mat3", exec: BM }), Ez = k({ name: "math/scale/mat3", label: "×", in: ["mat3", "float"], out: "mat3", exec: HM }), Nz = k({ name: "math/determinant/mat3", label: "Determinant", in: ["mat3"], out: "float", exec: qM }), _z = k({ name: "math/inverse/mat3", label: "Inverse", in: ["mat3"], out: "mat3", exec: YM }), Cz = k({ name: "math/toMat3/mat4", label: "Mat4 To Mat3", in: ["mat4"], out: "mat3", exec: Bd }), Tz = k({ name: "math/transpose/mat3", label: "Transpose", in: ["mat3"], out: "mat3", exec: WM }), Mz = k({ name: "math/multiply/mat3", label: "Cross", in: ["mat3", "mat3"], out: "mat3", exec: UM }), Pz = k({ name: "math/mix/mat3", label: "÷", in: [{ a: "mat3" }, { b: "mat3" }, { t: "float" }], out: "mat3", exec: T1 }), zz = k({ name: "math/equal/mat3", label: "=", in: [{ a: "mat3" }, { b: "mat3" }, { tolerance: "float" }], out: "boolean", exec: C1 }), Az = k({ name: "math/toMat3/euler", label: "To Mat3", in: ["euler"], out: "mat3", exec: Hd }), Iz = k({ name: "math/toMat3/quat", label: "To Mat3", in: ["quat"], out: "mat3", exec: Hd }), Oz = k({ name: "math/toMat3/scale2", label: "Scale2 To Mat3", in: ["vec2"], out: "mat3", exec: GM }), $z = k({ name: "math/toScale2/mat3", label: "Mat3 to Scale2", in: ["mat3"], out: "vec2", exec: KM }), Lz = k({ name: "math/toMat3/translation2", label: "Translation2 To Mat3", in: ["vec2"], out: "mat3", exec: ZM }), Rz = k({ name: "math/toTranslation2/mat3", label: "Mat3 to Translation2", in: ["mat3"], out: "vec2", exec: JM }), Dz = Object.freeze(Object.defineProperty({ __proto__: null, Add: Sz, Column3ToMat3: yz, Constant: gz, Determinant: Nz, Elements: xz, Equal: zz, EulerToMat3: Az, Inverse: _z, Mat3ToScale2: $z, Mat3ToTranslation3: Rz, Mat4ToMat3: Cz, Mix: Pz, Multiply: Mz, Negate: kz, QuatToMat3: Iz, Scale: Ez, Scale2ToMat3: Oz, SetColumn: vz, SetRow: wz, Subtract: bz, Translation2ToMat3: Lz, Transpose: Tz }, Symbol.toStringTag, { value: "Module" })), jz = k({ name: "math/mat4", label: "Mat4", in: ["mat4"], out: "mat4", exec: e => e }), Fz = k({ name: "math/toMat4/column4", label: "Columns to Mat4", in: [{ x: "vec4" }, { y: "vec4" }, { z: "vec4" }, { w: "vec4" }], out: "mat4", exec: xP }), Vz = k({ name: "math/setColumn/mat4", label: "Set Column", in: ["mat4", "integer", "vec4"], out: "mat4", exec: vP }), Hz = k({ name: "math/setRow/mat4", label: "Set Row", in: ["mat4", "integer", "vec4"], out: "mat4", exec: wP }), Bz = k({ name: "math/toVec4/mat4", label: "Mat4 To Vec4", in: ["mat4"], out: [{ x: "vec4" }, { y: "vec4" }, { z: "vec4" }, { w: "vec4" }], exec: () => { throw new Error("not implemented"); } }), Uz = k({ name: "math/add/mat4", label: "+", in: ["mat4", "mat4"], out: "mat4", exec: SP }), qz = k({ name: "math/subtract/mat4", label: "-", in: ["mat4", "mat4"], out: "mat4", exec: bP }), Wz = k({ name: "math/negate/mat4", label: "-", in: ["mat4"], out: "mat4", exec: EP }), Yz = k({ name: "math/multiplyByScalar/mat4", label: "×", in: ["mat4", "float"], out: "mat4", exec: kP }), Xz = k({ name: "math/determinant/mat4", label: "Determinant", in: ["mat4"], out: "float", exec: NP }), Qz = k({ name: "math/adjoint/mat4", label: "Adjoint", in: ["mat4"], out: "mat4", exec: _P }), Gz = k({ name: "math/inverse/mat4", label: "Inverse", in: ["mat4"], out: "mat4", exec: TP }), Kz = k({ name: "math/transpose/mat4", label: "Transpose", in: ["mat4"], out: "mat4", exec: CP }), Zz = k({ name: "math/toMat4/mat3", label: "Mat3 To Mat4", in: ["mat3"], out: "mat4", exec: Jd }), Jz = k({ name: "math/toMat4/scale3", label: "Scale3 To Mat4", in: ["vec3"], out: "mat4", exec: Y1 }), e6 = k({ name: "math/toMat4/translate3", label: "Translate3 To Mat4", in: ["vec3"], out: "mat4", exec: X1 }), t6 = k({ name: "math/toMat4/quat", label: "Quat To Mat4", in: ["quat"], out: "mat4", exec: W1 }), n6 = k({ name: "math/toMat4/euler", label: "Euler To Mat4", in: ["euler"], out: "mat4", exec: q1 }), r6 = k({ name: "math/translate/mat4", label: "Translate", in: ["mat4", "vec3"], out: "mat4", exec: zP }), o6 = k({ name: "math/scale/mat4", label: "Scale", in: ["mat4", "vec3"], out: "mat4", exec: AP }), i6 = k({ name: "math/rotateByQuat/mat4", label: "Rotate", in: ["mat4", "quat"], out: "mat4", exec: IP }), a6 = k({ name: "math/rotateByEuler/mat4", label: "Rotate", in: ["mat4", "euler"], out: "mat4", exec: OP }), s6 = k({ name: "math/multiply/mat4", label: "Cross", in: ["mat4", "mat4"], out: "mat4", exec: ma }), l6 = k({ name: "math/mix/mat4", label: "÷", in: [{ a: "mat4" }, { b: "mat4" }, { t: "float" }], out: "mat4", exec: U1 }), u6 = k({ name: "math/equal/mat4", label: "=", in: [{ a: "mat4" }, { b: "mat4" }, { tolerance: "float" }], out: "boolean", exec: B1 }), c6 = k({ name: "math/transformPoint3/mat4", label: "Transform Point3", in: ["mat4", "vec3"], out: "vec3", exec: $P }), f6 = k({ name: "math/transformNormal3/mat4", label: "Transform Normal", in: ["mat4", "vec3"], out: "vec3", exec: LP }), d6 = k({ name: "math/lookAt/mat4", label: "Look At", in: [{ eye: "vec3" }, { target: "vec3" }, { up: "vec3" }], out: "mat4", exec: RP }), m6 = Object.freeze(Object.defineProperty({ __proto__: null, Add: Uz, Adjoint: Qz, Column4ToMat4: Fz, Constant: jz, Determinant: Xz, Elements: Bz, Equal: u6, EulerToMat4: n6, Inverse: Gz, LookAt: d6, Mat3ToMat4: Zz, Mix: l6, Multiply: s6, MultiplyByScalar: Yz, Negate: Wz, QuatToMat4: t6, RotateByEuler: a6, RotateByQuat: i6, Scale: o6, Scale3ToMat4: Jz, SetColumn: Vz, SetRow: Hz, Subtract: qz, TransformNormal3: f6, TransformPoint3: c6, Translate: r6, Translate3ToMat4: e6, Transpose: Kz }, Symbol.toStringTag, { value: "Module" })), p6 = k({ name: "math/vec2", label: "Vec2", in: ["vec2"], out: "vec2", exec: e => e }), h6 = k({ name: "math/toVec2/float", label: "Float to Vec2", in: [{ x: "float" }, { y: "float" }], out: "vec2", exec: (e, t) => new Qe(e, t) }), g6 = k({ name: "math/toFloat/vec2", label: "Vec2 To Float", in: ["vec2"], out: [{ x: "float" }, { y: "float" }], exec: $M }), y6 = k({ name: "math/add/vec2", label: "+", in: ["vec2", "vec2"], out: "vec2", exec: PM }), v6 = k({ name: "math/subtract/vec2", label: "-", in: ["vec2", "vec2"], out: "vec2", exec: zM }), w6 = k({ name: "math/negate/vec2", label: "-", in: ["vec2"], out: "vec2", exec: AM }), x6 = k({ name: "math/scale/vec2", label: "×", in: ["vec2", "float"], out: "vec2", exec: k1 }), S6 = k({ name: "math/length/vec2", label: "Length", in: ["vec2"], out: "float", exec: E1 }), b6 = k({ name: "math/normalize/vec2", label: "Normalize", in: ["vec2"], out: "vec2", exec: IM }), k6 = k({ name: "math/dot/vec2", label: "Dot Product", in: ["vec2", "vec2"], out: "float", exec: N1 }), E6 = k({ name: "math/mix/vec2", label: "÷", in: [{ a: "vec2" }, { b: "vec2" }, { t: "float" }], out: "vec2", exec: _1 }), N6 = k({ name: "math/equal/vec2", label: "=", in: [{ a: "vec2" }, { b: "vec2" }, { tolerance: "float" }], out: "boolean", exec: MM }), _6 = Object.freeze(Object.defineProperty({ __proto__: null, Add: y6, Constant: p6, Create: h6, Dot: k6, Elements: g6, Equal: N6, Length: S6, Mix: E6, Negate: w6, Normalize: b6, Scale: x6, Subtract: v6 }, Symbol.toStringTag, { value: "Module" })), C6 = k({ name: "math/vec3", label: "Vec3", in: ["vec3"], out: "vec3", exec: e => e }), T6 = k({ name: "math/toVec3/float", label: "Float to Vec3", in: [{ x: "float" }, { y: "float" }, { z: "float" }], out: "vec3", exec: (e, t, n) => new oe(e, t, n) }), M6 = k({ name: "math/toFloat/vec3", label: "Vec3 To Float", in: ["vec3"], out: [{ x: "float" }, { y: "float" }, { z: "float" }], exec: e => ({ x: e.x, y: e.y, z: e.z }) }), P6 = k({ name: "math/add/vec3", label: "+", in: ["vec3", "vec3"], out: "vec3", exec: Ud }), z6 = k({ name: "math/subtract/vec3", label: "-", in: ["vec3", "vec3"], out: "vec3", exec: $l }), A6 = k({ name: "math/negate/vec3", label: "-", in: ["vec3"], out: "vec3", exec: qd }), I6 = k({ name: "math/scale/vec3", label: "×", in: ["vec3", "float"], out: "vec3", exec: Ao }), O6 = k({ name: "math/length/vec3", label: "Length", in: ["vec3"], out: "float", exec: tl }), $6 = k({ name: "math/normalize/vec3", label: "Normalize", in: ["vec3"], out: "vec3", exec: Wd }), L6 = k({ name: "math/cross/vec3", label: "Cross", in: ["vec3", "vec3"], out: "vec3", exec: ys }), R6 = k({ name: "math/dot/vec3", label: "Dot", in: ["vec3", "vec3"], out: "float", exec: P1 }), D6 = k({ name: "math/mix/vec3", label: "÷", in: [{ a: "vec3" }, { b: "vec3" }, { t: "float" }], out: "vec3", exec: Fo }), j6 = k({ name: "math/equal/vec3", label: "=", in: [{ a: "vec3" }, { b: "vec3" }, { tolerance: "float" }], out: "boolean", exec: jo }), F6 = Object.freeze(Object.defineProperty({ __proto__: null, Add: P6, Constant: C6, Create: T6, Cross: L6, Dot: R6, Elements: M6, Equal: j6, Length: O6, Mix: D6, Negate: A6, Normalize: $6, Scale: I6, Subtract: z6 }, Symbol.toStringTag, { value: "Module" })), V6 = k({ name: "math/vec4", label: "Vec4", in: ["vec4"], out: "vec4", exec: e => e }), H6 = k({ name: "math/toVec4/float", label: "Float to Vec4", in: [{ x: "float" }, { y: "float" }, { z: "float" }, { w: "float" }], out: "vec4", exec: (e, t, n, r) => new se(e, t, n, r) }), B6 = k({ name: "math/toFloat/vec4", label: "Vec4 to Float", in: ["vec4"], out: [{ x: "float" }, { y: "float" }, { z: "float" }, { w: "float" }], exec: e => ({ x: e.x, y: e.y, z: e.z, w: e.z }) }), U6 = k({ name: "math/add/vec4", label: "+", in: ["vec4", "vec4"], out: "vec4", exec: sP }), q6 = k({ name: "math/subtract/vec4", label: "-", in: ["vec4", "vec4"], out: "vec4", exec: lP }), W6 = k({ name: "math/negate/vec4", label: "-", in: ["vec4"], out: "vec4", exec: I1 }), Y6 = k({ name: "math/scale/vec4", label: "×", in: ["vec4", "float"], out: "vec4", exec: Rl }), X6 = k({ name: "math/length/vec4", label: "Length", in: ["vec4"], out: "float", exec: Qd }), Q6 = k({ name: "math/normalize/vec4", label: "Normalize", in: ["vec4"], out: "vec4", exec: Gd }), G6 = k({ name: "math/dot/vec4", label: "Dot Product", in: ["vec4", "vec4"], out: "float", exec: Dl }), K6 = k({ name: "math/mix/vec4", label: "÷", in: [{ a: "vec4" }, { b: "vec4" }, { t: "float" }], out: "vec4", exec: Kd }), Z6 = k({ name: "math/equal/vec4", label: "=", in: [{ a: "vec4" }, { b: "vec4" }, { tolerance: "float" }], out: "boolean", exec: Ll }), J6 = Object.freeze(Object.defineProperty({ __proto__: null, Add: U6, Constant: V6, Create: H6, Dot: G6, Elements: B6, Equal: Z6, Length: X6, Mix: K6, Negate: W6, Normalize: Q6, Scale: Y6, Subtract: q6 }, Symbol.toStringTag, { value: "Module" })), eA = k({ name: "math/quat", label: "Quaternion", in: ["quat"], out: "quat", exec: e => e }), tA = k({ name: "math/toQuat/float", label: "Float to Quat", in: [{ x: "float" }, { y: "float" }, { z: "float" }, { w: "float" }], out: "quat", exec: (e, t, n, r) => new se(e, t, n, r) }), nA = k({ name: "math/toFloat/quat", label: "Quat to Float", in: ["quat"], out: [{ x: "float" }, { y: "float" }, { z: "float" }, { w: "float" }], exec: cP }), rA = k({ name: "math/conjugate/quat", label: "Conjugate", in: ["quat"], out: "quat", exec: fP }), oA = k({ name: "math/multiply/quat", label: "×", in: ["quat", "quat"], out: "quat", exec: dP }), iA = k({ name: "math/scale/quat", label: "×", in: ["quat", "float"], out: "quat", exec: Rl }), aA = k({ name: "math/length/quat", label: "Length", in: ["quat"], out: "float", exec: Qd }), sA = k({ name: "math/normalize/quat", label: "Normalize", in: ["quat"], out: "quat", exec: Gd }), lA = k({ name: "math/dot/quat", label: "Dot Product", in: ["quat", "quat"], out: "float", exec: Dl }), uA = k({ name: "math/ln/quat", label: "Ln", in: ["quat"], out: "quat", exec: R1 }), cA = k({ name: "math/exp/quat", label: "Exp", in: ["quat"], out: "quat", exec: L1 }), fA = k({ name: "math/pow/quat", label: "Pow", in: ["quat", "float"], out: "quat", exec: mP }), dA = k({ name: "math/toQuat/mat3", label: "To Quat", in: ["mat3"], out: "quat", exec: D1 }), mA = k({ name: "math/toQuat/mat4", label: "To Quat", in: ["mat4"], out: "quat", exec: gP }), pA = k({ name: "math/toQuat/euler", label: "÷", in: ["euler"], out: "quat", exec: pP }), hA = k({ name: "math/toQuat/angleAxis", label: "Angle Axis to Quat", in: ["float", "vec3"], out: "quat", exec: hP }), gA = k({ name: "math/slerp/quat", label: "Slerp", in: [{ a: "quat" }, { b: "quat" }, { t: "float" }], out: "quat", exec: $1 }), yA = k({ name: "math/equal/quat", label: "=", in: [{ a: "quat" }, { b: "quat" }, { tolerance: "float" }], out: "boolean", exec: Ll }), vA = Object.freeze(Object.defineProperty({ __proto__: null, AngleAxisToQuat: hA, Constant: eA, Create: tA, Dot: lA, Elements: nA, Equal: yA, EulerToQuat: pA, Exp: cA, Length: aA, Ln: uA, Mat3ToQuat: dA, Mat4ToQuat: mA, Multiply: oA, Negate: rA, Normalize: sA, Pow: fA, Scale: iA, Slerp: gA }, Symbol.toStringTag, { value: "Module" })), wA = e => e.map(t => zl({ typeName: `scene/get/${t}`, category: xe.Query, label: `Get scene  ${t}`, in: { jsonPath: (n, r) => { const o = r.getDependency("IScene"); return { valueType: "string", choices: o == null ? void 0 : o.getProperties() }; } }, out: { value: t }, exec: ({ graph: n, read: r, write: o }) => { const i = n.getDependency("IScene"), a = i == null ? void 0 : i.getProperty(r("jsonPath"), t); o("value", a); } })), uf = Ol(() => Object.fromEntries([F1, V1, H1, z1, A1, j1, DP, jP].map(n => [n.name, n]))), xA = e => Object.keys(e).flatMap(t => v1({ values: e, valueTypeName: t })), SA = Ol(() => { const e = Object.keys({ ...da(), ...uf() }), t = [...ut(_6), ...ut(F6), ...ut(J6), ...ut(nz), ...ut(hz), ...ut(vA), ...ut(Dz), ...ut(m6), HP, ...FP(e), ...wA(e), ...xA(uf())]; return Object.fromEntries(t.map(n => [n.typeName, n])); }), bA = e => ({ values: { ...e.values, ...da(), ...uf() }, nodes: { ...e.nodes, ...SA() }, dependencies: { ...e.dependencies } });
var Rh;
(function (e) { e.nodes = "nodes", e.materials = "materials", e.animations = "animations"; })(Rh || (Rh = {}));
const kA = () => T.useMemo(() => bA(U5({ values: {}, nodes: {}, dependencies: { ILogger: new WC, ILifecycleEventEmitter: new YC, IScene: new yP } })), []), EA = TM, NA = { branch: hM, delay: SM, helloWorld: yM, polynomial: wM, setGet: EM }, _A = () => { const e = kA(); return b.jsx(mM, { registry: e, initialGraph: EA, examples: NA }); }, CA = Iu.createRoot(document.getElementById("root"));
CA.render(b.jsx(pf.StrictMode, { children: b.jsx(_A, {}) }));
export {};
//# sourceMappingURL=index-b50ad849.js.map