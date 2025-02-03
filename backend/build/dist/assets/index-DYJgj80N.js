"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function y1(e, t) { for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
        for (const o in r)
            if (o !== "default" && !(o in e)) {
                const i = Object.getOwnPropertyDescriptor(r, o);
                i && Object.defineProperty(e, o, i.get ? i : { enumerable: !0, get: () => r[o] });
            }
    }
} return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })); }
(function () { const t = document.createElement("link").relList; if (t && t.supports && t.supports("modulepreload"))
    return; for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
    r(o); new MutationObserver(o => { for (const i of o)
    if (i.type === "childList")
        for (const s of i.addedNodes)
            s.tagName === "LINK" && s.rel === "modulepreload" && r(s); }).observe(document, { childList: !0, subtree: !0 }); function n(o) { const i = {}; return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i; } function r(o) { if (o.ep)
    return; o.ep = !0; const i = n(o); fetch(o.href, i); } })();
function Ja(e) { return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e; }
var Qm = { exports: {} }, Za = {}, Jm = { exports: {} }, G = {}; /**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hi = Symbol.for("react.element"), v1 = Symbol.for("react.portal"), w1 = Symbol.for("react.fragment"), x1 = Symbol.for("react.strict_mode"), b1 = Symbol.for("react.profiler"), S1 = Symbol.for("react.provider"), C1 = Symbol.for("react.context"), E1 = Symbol.for("react.forward_ref"), A1 = Symbol.for("react.suspense"), k1 = Symbol.for("react.memo"), N1 = Symbol.for("react.lazy"), hp = Symbol.iterator;
function P1(e) { return e === null || typeof e != "object" ? null : (e = hp && e[hp] || e["@@iterator"], typeof e == "function" ? e : null); }
var Zm = { isMounted: function () { return !1; }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, Xm = Object.assign, eg = {};
function jo(e, t, n) { this.props = e, this.context = t, this.refs = eg, this.updater = n || Zm; }
jo.prototype.isReactComponent = {};
jo.prototype.setState = function (e, t) { if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, e, t, "setState"); };
jo.prototype.forceUpdate = function (e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate"); };
function tg() { }
tg.prototype = jo.prototype;
function hd(e, t, n) { this.props = e, this.context = t, this.refs = eg, this.updater = n || Zm; }
var md = hd.prototype = new tg;
md.constructor = hd;
Xm(md, jo.prototype);
md.isPureReactComponent = !0;
var mp = Array.isArray, ng = Object.prototype.hasOwnProperty, gd = { current: null }, rg = { key: !0, ref: !0, __self: !0, __source: !0 };
function og(e, t, n) { var r, o = {}, i = null, s = null; if (t != null)
    for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t)
        ng.call(t, r) && !rg.hasOwnProperty(r) && (o[r] = t[r]); var a = arguments.length - 2; if (a === 1)
    o.children = n;
else if (1 < a) {
    for (var c = Array(a), u = 0; u < a; u++)
        c[u] = arguments[u + 2];
    o.children = c;
} if (e && e.defaultProps)
    for (r in a = e.defaultProps, a)
        o[r] === void 0 && (o[r] = a[r]); return { $$typeof: Hi, type: e, key: i, ref: s, props: o, _owner: gd.current }; }
function j1(e, t) { return { $$typeof: Hi, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }; }
function yd(e) { return typeof e == "object" && e !== null && e.$$typeof === Hi; }
function R1(e) { var t = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, function (n) { return t[n]; }); }
var gp = /\/+/g;
function Wl(e, t) { return typeof e == "object" && e !== null && e.key != null ? R1("" + e.key) : t.toString(36); }
function Ms(e, t, n, r, o) { var i = typeof e; (i === "undefined" || i === "boolean") && (e = null); var s = !1; if (e === null)
    s = !0;
else
    switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object": switch (e.$$typeof) {
            case Hi:
            case v1: s = !0;
        }
    } if (s)
    return s = e, o = o(s), e = r === "" ? "." + Wl(s, 0) : r, mp(o) ? (n = "", e != null && (n = e.replace(gp, "$&/") + "/"), Ms(o, t, n, "", function (u) { return u; })) : o != null && (yd(o) && (o = j1(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(gp, "$&/") + "/") + e)), t.push(o)), 1; if (s = 0, r = r === "" ? "." : r + ":", mp(e))
    for (var a = 0; a < e.length; a++) {
        i = e[a];
        var c = r + Wl(i, a);
        s += Ms(i, t, n, c, o);
    }
else if (c = P1(e), typeof c == "function")
    for (e = c.call(e), a = 0; !(i = e.next()).done;)
        i = i.value, c = r + Wl(i, a++), s += Ms(i, t, n, c, o);
else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."); return s; }
function us(e, t, n) { if (e == null)
    return e; var r = [], o = 0; return Ms(e, r, "", "", function (i) { return t.call(n, i, o++); }), r; }
function _1(e) { if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function (n) { (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n); }, function (n) { (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n); }), e._status === -1 && (e._status = 0, e._result = t);
} if (e._status === 1)
    return e._result.default; throw e._result; }
var Xe = { current: null }, Bs = { transition: null }, T1 = { ReactCurrentDispatcher: Xe, ReactCurrentBatchConfig: Bs, ReactCurrentOwner: gd };
function ig() { throw Error("act(...) is not supported in production builds of React."); }
G.Children = { map: us, forEach: function (e, t, n) { us(e, function () { t.apply(this, arguments); }, n); }, count: function (e) { var t = 0; return us(e, function () { t++; }), t; }, toArray: function (e) { return us(e, function (t) { return t; }) || []; }, only: function (e) { if (!yd(e))
        throw Error("React.Children.only expected to receive a single React element child."); return e; } };
G.Component = jo;
G.Fragment = w1;
G.Profiler = b1;
G.PureComponent = hd;
G.StrictMode = x1;
G.Suspense = A1;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T1;
G.act = ig;
G.cloneElement = function (e, t, n) { if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + "."); var r = Xm({}, e.props), o = e.key, i = e.ref, s = e._owner; if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = gd.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
        var a = e.type.defaultProps;
    for (c in t)
        ng.call(t, c) && !rg.hasOwnProperty(c) && (r[c] = t[c] === void 0 && a !== void 0 ? a[c] : t[c]);
} var c = arguments.length - 2; if (c === 1)
    r.children = n;
else if (1 < c) {
    a = Array(c);
    for (var u = 0; u < c; u++)
        a[u] = arguments[u + 2];
    r.children = a;
} return { $$typeof: Hi, type: e.type, key: o, ref: i, props: r, _owner: s }; };
G.createContext = function (e) { return e = { $$typeof: C1, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: S1, _context: e }, e.Consumer = e; };
G.createElement = og;
G.createFactory = function (e) { var t = og.bind(null, e); return t.type = e, t; };
G.createRef = function () { return { current: null }; };
G.forwardRef = function (e) { return { $$typeof: E1, render: e }; };
G.isValidElement = yd;
G.lazy = function (e) { return { $$typeof: N1, _payload: { _status: -1, _result: e }, _init: _1 }; };
G.memo = function (e, t) { return { $$typeof: k1, type: e, compare: t === void 0 ? null : t }; };
G.startTransition = function (e) { var t = Bs.transition; Bs.transition = {}; try {
    e();
}
finally {
    Bs.transition = t;
} };
G.unstable_act = ig;
G.useCallback = function (e, t) { return Xe.current.useCallback(e, t); };
G.useContext = function (e) { return Xe.current.useContext(e); };
G.useDebugValue = function () { };
G.useDeferredValue = function (e) { return Xe.current.useDeferredValue(e); };
G.useEffect = function (e, t) { return Xe.current.useEffect(e, t); };
G.useId = function () { return Xe.current.useId(); };
G.useImperativeHandle = function (e, t, n) { return Xe.current.useImperativeHandle(e, t, n); };
G.useInsertionEffect = function (e, t) { return Xe.current.useInsertionEffect(e, t); };
G.useLayoutEffect = function (e, t) { return Xe.current.useLayoutEffect(e, t); };
G.useMemo = function (e, t) { return Xe.current.useMemo(e, t); };
G.useReducer = function (e, t, n) { return Xe.current.useReducer(e, t, n); };
G.useRef = function (e) { return Xe.current.useRef(e); };
G.useState = function (e) { return Xe.current.useState(e); };
G.useSyncExternalStore = function (e, t, n) { return Xe.current.useSyncExternalStore(e, t, n); };
G.useTransition = function () { return Xe.current.useTransition(); };
G.version = "18.3.1";
Jm.exports = G;
var v = Jm.exports;
const B = Ja(v), Mc = y1({ __proto__: null, default: B }, [v]); /**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var O1 = v, L1 = Symbol.for("react.element"), D1 = Symbol.for("react.fragment"), M1 = Object.prototype.hasOwnProperty, B1 = O1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, I1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function sg(e, t, n) { var r, o = {}, i = null, s = null; n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref); for (r in t)
    M1.call(t, r) && !I1.hasOwnProperty(r) && (o[r] = t[r]); if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
        o[r] === void 0 && (o[r] = t[r]); return { $$typeof: L1, type: e, key: i, ref: s, props: o, _owner: B1.current }; }
Za.Fragment = D1;
Za.jsx = sg;
Za.jsxs = sg;
Qm.exports = Za;
var l = Qm.exports, Bc = {}, ag = { exports: {} }, Nt = {}, lg = { exports: {} }, cg = {}; /**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
(function (e) { function t(_, L) { var $ = _.length; _.push(L); e: for (; 0 < $;) {
    var Z = $ - 1 >>> 1, W = _[Z];
    if (0 < o(W, L))
        _[Z] = L, _[$] = W, $ = Z;
    else
        break e;
} } function n(_) { return _.length === 0 ? null : _[0]; } function r(_) { if (_.length === 0)
    return null; var L = _[0], $ = _.pop(); if ($ !== L) {
    _[0] = $;
    e: for (var Z = 0, W = _.length, Tt = W >>> 1; Z < Tt;) {
        var ve = 2 * (Z + 1) - 1, pt = _[ve], we = ve + 1, ht = _[we];
        if (0 > o(pt, $))
            we < W && 0 > o(ht, pt) ? (_[Z] = ht, _[we] = $, Z = we) : (_[Z] = pt, _[ve] = $, Z = ve);
        else if (we < W && 0 > o(ht, $))
            _[Z] = ht, _[we] = $, Z = we;
        else
            break e;
    }
} return L; } function o(_, L) { var $ = _.sortIndex - L.sortIndex; return $ !== 0 ? $ : _.id - L.id; } if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () { return i.now(); };
}
else {
    var s = Date, a = s.now();
    e.unstable_now = function () { return s.now() - a; };
} var c = [], u = [], d = 1, f = null, p = 3, w = !1, m = !1, b = !1, x = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null; typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling); function y(_) { for (var L = n(u); L !== null;) {
    if (L.callback === null)
        r(u);
    else if (L.startTime <= _)
        r(u), L.sortIndex = L.expirationTime, t(c, L);
    else
        break;
    L = n(u);
} } function S(_) { if (b = !1, y(_), !m)
    if (n(c) !== null)
        m = !0, Ye(C);
    else {
        var L = n(u);
        L !== null && Fe(S, L.startTime - _);
    } } function C(_, L) { m = !1, b && (b = !1, g(P), P = -1), w = !0; var $ = p; try {
    for (y(L), f = n(c); f !== null && (!(f.expirationTime > L) || _ && !q());) {
        var Z = f.callback;
        if (typeof Z == "function") {
            f.callback = null, p = f.priorityLevel;
            var W = Z(f.expirationTime <= L);
            L = e.unstable_now(), typeof W == "function" ? f.callback = W : f === n(c) && r(c), y(L);
        }
        else
            r(c);
        f = n(c);
    }
    if (f !== null)
        var Tt = !0;
    else {
        var ve = n(u);
        ve !== null && Fe(S, ve.startTime - L), Tt = !1;
    }
    return Tt;
}
finally {
    f = null, p = $, w = !1;
} } var N = !1, E = null, P = -1, M = 5, O = -1; function q() { return !(e.unstable_now() - O < M); } function oe() { if (E !== null) {
    var _ = e.unstable_now();
    O = _;
    var L = !0;
    try {
        L = E(!0, _);
    }
    finally {
        L ? K() : (N = !1, E = null);
    }
}
else
    N = !1; } var K; if (typeof h == "function")
    K = function () { h(oe); };
else if (typeof MessageChannel < "u") {
    var ft = new MessageChannel, _t = ft.port2;
    ft.port1.onmessage = oe, K = function () { _t.postMessage(null); };
}
else
    K = function () { x(oe, 0); }; function Ye(_) { E = _, N || (N = !0, K()); } function Fe(_, L) { P = x(function () { _(e.unstable_now()); }, L); } e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (_) { _.callback = null; }, e.unstable_continueExecution = function () { m || w || (m = !0, Ye(C)); }, e.unstable_forceFrameRate = function (_) { 0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < _ ? Math.floor(1e3 / _) : 5; }, e.unstable_getCurrentPriorityLevel = function () { return p; }, e.unstable_getFirstCallbackNode = function () { return n(c); }, e.unstable_next = function (_) { switch (p) {
    case 1:
    case 2:
    case 3:
        var L = 3;
        break;
    default: L = p;
} var $ = p; p = L; try {
    return _();
}
finally {
    p = $;
} }, e.unstable_pauseExecution = function () { }, e.unstable_requestPaint = function () { }, e.unstable_runWithPriority = function (_, L) { switch (_) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: break;
    default: _ = 3;
} var $ = p; p = _; try {
    return L();
}
finally {
    p = $;
} }, e.unstable_scheduleCallback = function (_, L, $) { var Z = e.unstable_now(); switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? Z + $ : Z) : $ = Z, _) {
    case 1:
        var W = -1;
        break;
    case 2:
        W = 250;
        break;
    case 5:
        W = 1073741823;
        break;
    case 4:
        W = 1e4;
        break;
    default: W = 5e3;
} return W = $ + W, _ = { id: d++, callback: L, priorityLevel: _, startTime: $, expirationTime: W, sortIndex: -1 }, $ > Z ? (_.sortIndex = $, t(u, _), n(c) === null && _ === n(u) && (b ? (g(P), P = -1) : b = !0, Fe(S, $ - Z))) : (_.sortIndex = W, t(c, _), m || w || (m = !0, Ye(C))), _; }, e.unstable_shouldYield = q, e.unstable_wrapCallback = function (_) { var L = p; return function () { var $ = p; p = L; try {
    return _.apply(this, arguments);
}
finally {
    p = $;
} }; }; })(cg);
lg.exports = cg;
var $1 = lg.exports; /**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var F1 = v, St = $1;
function j(e) { for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]); return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."; }
var ug = new Set, mi = {};
function Or(e, t) { fo(e, t), fo(e + "Capture", t); }
function fo(e, t) { for (mi[e] = t, e = 0; e < t.length; e++)
    ug.add(t[e]); }
var xn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ic = Object.prototype.hasOwnProperty, U1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, yp = {}, vp = {};
function z1(e) { return Ic.call(vp, e) ? !0 : Ic.call(yp, e) ? !1 : U1.test(e) ? vp[e] = !0 : (yp[e] = !0, !1); }
function H1(e, t, n, r) { if (n !== null && n.type === 0)
    return !1; switch (typeof t) {
    case "function":
    case "symbol": return !0;
    case "boolean": return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default: return !1;
} }
function V1(e, t, n, r) { if (t === null || typeof t > "u" || H1(e, t, n, r))
    return !0; if (r)
    return !1; if (n !== null)
    switch (n.type) {
        case 3: return !t;
        case 4: return t === !1;
        case 5: return isNaN(t);
        case 6: return isNaN(t) || 1 > t;
    } return !1; }
function et(e, t, n, r, o, i, s) { this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s; }
var $e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) { $e[e] = new et(e, 0, !1, e, null, !1, !1); });
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) { var t = e[0]; $e[t] = new et(t, 1, !1, e[1], null, !1, !1); });
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) { $e[e] = new et(e, 2, !1, e.toLowerCase(), null, !1, !1); });
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) { $e[e] = new et(e, 2, !1, e, null, !1, !1); });
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) { $e[e] = new et(e, 3, !1, e.toLowerCase(), null, !1, !1); });
["checked", "multiple", "muted", "selected"].forEach(function (e) { $e[e] = new et(e, 3, !0, e, null, !1, !1); });
["capture", "download"].forEach(function (e) { $e[e] = new et(e, 4, !1, e, null, !1, !1); });
["cols", "rows", "size", "span"].forEach(function (e) { $e[e] = new et(e, 6, !1, e, null, !1, !1); });
["rowSpan", "start"].forEach(function (e) { $e[e] = new et(e, 5, !1, e.toLowerCase(), null, !1, !1); });
var vd = /[\-:]([a-z])/g;
function wd(e) { return e[1].toUpperCase(); }
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) { var t = e.replace(vd, wd); $e[t] = new et(t, 1, !1, e, null, !1, !1); });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) { var t = e.replace(vd, wd); $e[t] = new et(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1); });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) { var t = e.replace(vd, wd); $e[t] = new et(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1); });
["tabIndex", "crossOrigin"].forEach(function (e) { $e[e] = new et(e, 1, !1, e.toLowerCase(), null, !1, !1); });
$e.xlinkHref = new et("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) { $e[e] = new et(e, 1, !1, e.toLowerCase(), null, !0, !0); });
function xd(e, t, n, r) { var o = $e.hasOwnProperty(t) ? $e[t] : null; (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (V1(t, n, o, r) && (n = null), r || o === null ? z1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n)))); }
var An = F1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ds = Symbol.for("react.element"), Vr = Symbol.for("react.portal"), Wr = Symbol.for("react.fragment"), bd = Symbol.for("react.strict_mode"), $c = Symbol.for("react.profiler"), dg = Symbol.for("react.provider"), fg = Symbol.for("react.context"), Sd = Symbol.for("react.forward_ref"), Fc = Symbol.for("react.suspense"), Uc = Symbol.for("react.suspense_list"), Cd = Symbol.for("react.memo"), Tn = Symbol.for("react.lazy"), pg = Symbol.for("react.offscreen"), wp = Symbol.iterator;
function zo(e) { return e === null || typeof e != "object" ? null : (e = wp && e[wp] || e["@@iterator"], typeof e == "function" ? e : null); }
var he = Object.assign, Gl;
function Jo(e) {
    if (Gl === void 0)
        try {
            throw Error();
        }
        catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Gl = t && t[1] || "";
        }
    return `
` + Gl + e;
}
var ql = !1;
function Kl(e, t) {
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
`), s = o.length - 1, a = i.length - 1; 1 <= s && 0 <= a && o[s] !== i[a];)
                a--;
            for (; 1 <= s && 0 <= a; s--, a--)
                if (o[s] !== i[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--, a--, 0 > a || o[s] !== i[a]) {
                                var c = `
` + o[s].replace(" at new ", " at ");
                                return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c;
                            }
                        while (1 <= s && 0 <= a);
                    break;
                }
        }
    }
    finally {
        ql = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? Jo(e) : "";
}
function W1(e) { switch (e.tag) {
    case 5: return Jo(e.type);
    case 16: return Jo("Lazy");
    case 13: return Jo("Suspense");
    case 19: return Jo("SuspenseList");
    case 0:
    case 2:
    case 15: return e = Kl(e.type, !1), e;
    case 11: return e = Kl(e.type.render, !1), e;
    case 1: return e = Kl(e.type, !0), e;
    default: return "";
} }
function zc(e) { if (e == null)
    return null; if (typeof e == "function")
    return e.displayName || e.name || null; if (typeof e == "string")
    return e; switch (e) {
    case Wr: return "Fragment";
    case Vr: return "Portal";
    case $c: return "Profiler";
    case bd: return "StrictMode";
    case Fc: return "Suspense";
    case Uc: return "SuspenseList";
} if (typeof e == "object")
    switch (e.$$typeof) {
        case fg: return (e.displayName || "Context") + ".Consumer";
        case dg: return (e._context.displayName || "Context") + ".Provider";
        case Sd:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Cd: return t = e.displayName || null, t !== null ? t : zc(e.type) || "Memo";
        case Tn:
            t = e._payload, e = e._init;
            try {
                return zc(e(t));
            }
            catch { }
    } return null; }
function G1(e) { var t = e.type; switch (e.tag) {
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
    case 16: return zc(t);
    case 8: return t === bd ? "StrictMode" : "Mode";
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
function Jn(e) { switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined": return e;
    case "object": return e;
    default: return "";
} }
function hg(e) { var t = e.type; return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio"); }
function q1(e) { var t = hg(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t]; if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function () { return o.call(this); }, set: function (s) { r = "" + s, i.call(this, s); } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function () { return r; }, setValue: function (s) { r = "" + s; }, stopTracking: function () { e._valueTracker = null, delete e[t]; } };
} }
function fs(e) { e._valueTracker || (e._valueTracker = q1(e)); }
function mg(e) { if (!e)
    return !1; var t = e._valueTracker; if (!t)
    return !0; var n = t.getValue(), r = ""; return e && (r = hg(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1; }
function ra(e) { if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null; try {
    return e.activeElement || e.body;
}
catch {
    return e.body;
} }
function Hc(e, t) { var n = t.checked; return he({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked }); }
function xp(e, t) { var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked; n = Jn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null }; }
function gg(e, t) { t = t.checked, t != null && xd(e, "checked", t, !1); }
function Vc(e, t) { gg(e, t); var n = Jn(t.value), r = t.type; if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
} t.hasOwnProperty("value") ? Wc(e, t.type, n) : t.hasOwnProperty("defaultValue") && Wc(e, t.type, Jn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked); }
function bp(e, t, n) { if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
        return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
} n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n); }
function Wc(e, t, n) { (t !== "number" || ra(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n)); }
var Zo = Array.isArray;
function ro(e, t, n, r) { if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
        t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
        o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
}
else {
    for (n = "" + Jn(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
            e[o].selected = !0, r && (e[o].defaultSelected = !0);
            return;
        }
        t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
} }
function Gc(e, t) { if (t.dangerouslySetInnerHTML != null)
    throw Error(j(91)); return he({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }); }
function Sp(e, t) { var n = t.value; if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null)
            throw Error(j(92));
        if (Zo(n)) {
            if (1 < n.length)
                throw Error(j(93));
            n = n[0];
        }
        t = n;
    }
    t == null && (t = ""), n = t;
} e._wrapperState = { initialValue: Jn(n) }; }
function yg(e, t) { var n = Jn(t.value), r = Jn(t.defaultValue); n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r); }
function Cp(e) { var t = e.textContent; t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t); }
function vg(e) { switch (e) {
    case "svg": return "http://www.w3.org/2000/svg";
    case "math": return "http://www.w3.org/1998/Math/MathML";
    default: return "http://www.w3.org/1999/xhtml";
} }
function qc(e, t) { return e == null || e === "http://www.w3.org/1999/xhtml" ? vg(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e; }
var ps, wg = function (e) { return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, o) { MSApp.execUnsafeLocalFunction(function () { return e(t, n, r, o); }); } : e; }(function (e, t) { if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
else {
    for (ps = ps || document.createElement("div"), ps.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ps.firstChild; e.firstChild;)
        e.removeChild(e.firstChild);
    for (; t.firstChild;)
        e.appendChild(t.firstChild);
} });
function gi(e, t) { if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
    }
} e.textContent = t; }
var ri = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, K1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ri).forEach(function (e) { K1.forEach(function (t) { t = t + e.charAt(0).toUpperCase() + e.substring(1), ri[t] = ri[e]; }); });
function xg(e, t, n) { return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ri.hasOwnProperty(e) && ri[e] ? ("" + t).trim() : t + "px"; }
function bg(e, t) { e = e.style; for (var n in t)
    if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, o = xg(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    } }
var Y1 = he({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Kc(e, t) { if (t) {
    if (Y1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Yc(e, t) { if (e.indexOf("-") === -1)
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
var Qc = null;
function Ed(e) { return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e; }
var Jc = null, oo = null, io = null;
function Ep(e) { if (e = Gi(e)) {
    if (typeof Jc != "function")
        throw Error(j(280));
    var t = e.stateNode;
    t && (t = rl(t), Jc(e.stateNode, e.type, t));
} }
function Sg(e) { oo ? io ? io.push(e) : io = [e] : oo = e; }
function Cg() { if (oo) {
    var e = oo, t = io;
    if (io = oo = null, Ep(e), t)
        for (e = 0; e < t.length; e++)
            Ep(t[e]);
} }
function Eg(e, t) { return e(t); }
function Ag() { }
var Yl = !1;
function kg(e, t, n) { if (Yl)
    return e(t, n); Yl = !0; try {
    return Eg(e, t, n);
}
finally {
    Yl = !1, (oo !== null || io !== null) && (Ag(), Cg());
} }
function yi(e, t) { var n = e.stateNode; if (n === null)
    return null; var r = rl(n); if (r === null)
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
var Zc = !1;
if (xn)
    try {
        var Ho = {};
        Object.defineProperty(Ho, "passive", { get: function () { Zc = !0; } }), window.addEventListener("test", Ho, Ho), window.removeEventListener("test", Ho, Ho);
    }
    catch {
        Zc = !1;
    }
function Q1(e, t, n, r, o, i, s, a, c) { var u = Array.prototype.slice.call(arguments, 3); try {
    t.apply(n, u);
}
catch (d) {
    this.onError(d);
} }
var oi = !1, oa = null, ia = !1, Xc = null, J1 = { onError: function (e) { oi = !0, oa = e; } };
function Z1(e, t, n, r, o, i, s, a, c) { oi = !1, oa = null, Q1.apply(J1, arguments); }
function X1(e, t, n, r, o, i, s, a, c) { if (Z1.apply(this, arguments), oi) {
    if (oi) {
        var u = oa;
        oi = !1, oa = null;
    }
    else
        throw Error(j(198));
    ia || (ia = !0, Xc = u);
} }
function Lr(e) { var t = e, n = e; if (e.alternate)
    for (; t.return;)
        t = t.return;
else {
    e = t;
    do
        t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
} return t.tag === 3 ? n : null; }
function Ng(e) { if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
        return t.dehydrated;
} return null; }
function Ap(e) { if (Lr(e) !== e)
    throw Error(j(188)); }
function ex(e) { var t = e.alternate; if (!t) {
    if (t = Lr(e), t === null)
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
                return Ap(o), e;
            if (i === r)
                return Ap(o), t;
            i = i.sibling;
        }
        throw Error(j(188));
    }
    if (n.return !== r.return)
        n = o, r = i;
    else {
        for (var s = !1, a = o.child; a;) {
            if (a === n) {
                s = !0, n = o, r = i;
                break;
            }
            if (a === r) {
                s = !0, r = o, n = i;
                break;
            }
            a = a.sibling;
        }
        if (!s) {
            for (a = i.child; a;) {
                if (a === n) {
                    s = !0, n = i, r = o;
                    break;
                }
                if (a === r) {
                    s = !0, r = i, n = o;
                    break;
                }
                a = a.sibling;
            }
            if (!s)
                throw Error(j(189));
        }
    }
    if (n.alternate !== r)
        throw Error(j(190));
} if (n.tag !== 3)
    throw Error(j(188)); return n.stateNode.current === n ? e : t; }
function Pg(e) { return e = ex(e), e !== null ? jg(e) : null; }
function jg(e) { if (e.tag === 5 || e.tag === 6)
    return e; for (e = e.child; e !== null;) {
    var t = jg(e);
    if (t !== null)
        return t;
    e = e.sibling;
} return null; }
var Rg = St.unstable_scheduleCallback, kp = St.unstable_cancelCallback, tx = St.unstable_shouldYield, nx = St.unstable_requestPaint, be = St.unstable_now, rx = St.unstable_getCurrentPriorityLevel, Ad = St.unstable_ImmediatePriority, _g = St.unstable_UserBlockingPriority, sa = St.unstable_NormalPriority, ox = St.unstable_LowPriority, Tg = St.unstable_IdlePriority, Xa = null, an = null;
function ix(e) { if (an && typeof an.onCommitFiberRoot == "function")
    try {
        an.onCommitFiberRoot(Xa, e, void 0, (e.current.flags & 128) === 128);
    }
    catch { } }
var Kt = Math.clz32 ? Math.clz32 : lx, sx = Math.log, ax = Math.LN2;
function lx(e) { return e >>>= 0, e === 0 ? 32 : 31 - (sx(e) / ax | 0) | 0; }
var hs = 64, ms = 4194304;
function Xo(e) { switch (e & -e) {
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
function aa(e, t) { var n = e.pendingLanes; if (n === 0)
    return 0; var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455; if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? r = Xo(a) : (i &= s, i !== 0 && (r = Xo(i)));
}
else
    s = n & ~o, s !== 0 ? r = Xo(s) : i !== 0 && (r = Xo(i)); if (r === 0)
    return 0; if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t; if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t;)
        n = 31 - Kt(t), o = 1 << n, r |= e[n], t &= ~o; return r; }
function cx(e, t) { switch (e) {
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
function ux(e, t) { for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
    var s = 31 - Kt(i), a = 1 << s, c = o[s];
    c === -1 ? (!(a & n) || a & r) && (o[s] = cx(a, t)) : c <= t && (e.expiredLanes |= a), i &= ~a;
} }
function eu(e) { return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0; }
function Og() { var e = hs; return hs <<= 1, !(hs & 4194240) && (hs = 64), e; }
function Ql(e) { for (var t = [], n = 0; 31 > n; n++)
    t.push(e); return t; }
function Vi(e, t, n) { e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Kt(t), e[t] = n; }
function dx(e, t) { var n = e.pendingLanes & ~t; e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements; var r = e.eventTimes; for (e = e.expirationTimes; 0 < n;) {
    var o = 31 - Kt(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
} }
function kd(e, t) { var n = e.entangledLanes |= t; for (e = e.entanglements; n;) {
    var r = 31 - Kt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
} }
var ne = 0;
function Lg(e) { return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1; }
var Dg, Nd, Mg, Bg, Ig, tu = !1, gs = [], Un = null, zn = null, Hn = null, vi = new Map, wi = new Map, Ln = [], fx = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Np(e, t) { switch (e) {
    case "focusin":
    case "focusout":
        Un = null;
        break;
    case "dragenter":
    case "dragleave":
        zn = null;
        break;
    case "mouseover":
    case "mouseout":
        Hn = null;
        break;
    case "pointerover":
    case "pointerout":
        vi.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture": wi.delete(t.pointerId);
} }
function Vo(e, t, n, r, o, i) { return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Gi(t), t !== null && Nd(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e); }
function px(e, t, n, r, o) { switch (t) {
    case "focusin": return Un = Vo(Un, e, t, n, r, o), !0;
    case "dragenter": return zn = Vo(zn, e, t, n, r, o), !0;
    case "mouseover": return Hn = Vo(Hn, e, t, n, r, o), !0;
    case "pointerover":
        var i = o.pointerId;
        return vi.set(i, Vo(vi.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture": return i = o.pointerId, wi.set(i, Vo(wi.get(i) || null, e, t, n, r, o)), !0;
} return !1; }
function $g(e) { var t = dr(e.target); if (t !== null) {
    var n = Lr(t);
    if (n !== null) {
        if (t = n.tag, t === 13) {
            if (t = Ng(n), t !== null) {
                e.blockedOn = t, Ig(e.priority, function () { Mg(n); });
                return;
            }
        }
        else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
        }
    }
} e.blockedOn = null; }
function Is(e) { if (e.blockedOn !== null)
    return !1; for (var t = e.targetContainers; 0 < t.length;) {
    var n = nu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Qc = r, n.target.dispatchEvent(r), Qc = null;
    }
    else
        return t = Gi(n), t !== null && Nd(t), e.blockedOn = n, !1;
    t.shift();
} return !0; }
function Pp(e, t, n) { Is(e) && n.delete(t); }
function hx() { tu = !1, Un !== null && Is(Un) && (Un = null), zn !== null && Is(zn) && (zn = null), Hn !== null && Is(Hn) && (Hn = null), vi.forEach(Pp), wi.forEach(Pp); }
function Wo(e, t) { e.blockedOn === t && (e.blockedOn = null, tu || (tu = !0, St.unstable_scheduleCallback(St.unstable_NormalPriority, hx))); }
function xi(e) { function t(o) { return Wo(o, e); } if (0 < gs.length) {
    Wo(gs[0], e);
    for (var n = 1; n < gs.length; n++) {
        var r = gs[n];
        r.blockedOn === e && (r.blockedOn = null);
    }
} for (Un !== null && Wo(Un, e), zn !== null && Wo(zn, e), Hn !== null && Wo(Hn, e), vi.forEach(t), wi.forEach(t), n = 0; n < Ln.length; n++)
    r = Ln[n], r.blockedOn === e && (r.blockedOn = null); for (; 0 < Ln.length && (n = Ln[0], n.blockedOn === null);)
    $g(n), n.blockedOn === null && Ln.shift(); }
var so = An.ReactCurrentBatchConfig, la = !0;
function mx(e, t, n, r) { var o = ne, i = so.transition; so.transition = null; try {
    ne = 1, Pd(e, t, n, r);
}
finally {
    ne = o, so.transition = i;
} }
function gx(e, t, n, r) { var o = ne, i = so.transition; so.transition = null; try {
    ne = 4, Pd(e, t, n, r);
}
finally {
    ne = o, so.transition = i;
} }
function Pd(e, t, n, r) { if (la) {
    var o = nu(e, t, n, r);
    if (o === null)
        sc(e, t, r, ca, n), Np(e, r);
    else if (px(o, e, t, n, r))
        r.stopPropagation();
    else if (Np(e, r), t & 4 && -1 < fx.indexOf(e)) {
        for (; o !== null;) {
            var i = Gi(o);
            if (i !== null && Dg(i), i = nu(e, t, n, r), i === null && sc(e, t, r, ca, n), i === o)
                break;
            o = i;
        }
        o !== null && r.stopPropagation();
    }
    else
        sc(e, t, r, null, n);
} }
var ca = null;
function nu(e, t, n, r) { if (ca = null, e = Ed(r), e = dr(e), e !== null)
    if (t = Lr(e), t === null)
        e = null;
    else if (n = t.tag, n === 13) {
        if (e = Ng(t), e !== null)
            return e;
        e = null;
    }
    else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
    }
    else
        t !== e && (e = null); return ca = e, null; }
function Fg(e) { switch (e) {
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
    case "message": switch (rx()) {
        case Ad: return 1;
        case _g: return 4;
        case sa:
        case ox: return 16;
        case Tg: return 536870912;
        default: return 16;
    }
    default: return 16;
} }
var Mn = null, jd = null, $s = null;
function Ug() { if ($s)
    return $s; var e, t = jd, n = t.length, r, o = "value" in Mn ? Mn.value : Mn.textContent, i = o.length; for (e = 0; e < n && t[e] === o[e]; e++)
    ; var s = n - e; for (r = 1; r <= s && t[n - r] === o[i - r]; r++)
    ; return $s = o.slice(e, 1 < r ? 1 - r : void 0); }
function Fs(e) { var t = e.keyCode; return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0; }
function ys() { return !0; }
function jp() { return !1; }
function Pt(e) { function t(n, r, o, i, s) { this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null; for (var a in e)
    e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]); return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ys : jp, this.isPropagationStopped = jp, this; } return he(t.prototype, { preventDefault: function () { this.defaultPrevented = !0; var n = this.nativeEvent; n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ys); }, stopPropagation: function () { var n = this.nativeEvent; n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ys); }, persist: function () { }, isPersistent: ys }), t; }
var Ro = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) { return e.timeStamp || Date.now(); }, defaultPrevented: 0, isTrusted: 0 }, Rd = Pt(Ro), Wi = he({}, Ro, { view: 0, detail: 0 }), yx = Pt(Wi), Jl, Zl, Go, el = he({}, Wi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: _d, button: 0, buttons: 0, relatedTarget: function (e) { return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget; }, movementX: function (e) { return "movementX" in e ? e.movementX : (e !== Go && (Go && e.type === "mousemove" ? (Jl = e.screenX - Go.screenX, Zl = e.screenY - Go.screenY) : Zl = Jl = 0, Go = e), Jl); }, movementY: function (e) { return "movementY" in e ? e.movementY : Zl; } }), Rp = Pt(el), vx = he({}, el, { dataTransfer: 0 }), wx = Pt(vx), xx = he({}, Wi, { relatedTarget: 0 }), Xl = Pt(xx), bx = he({}, Ro, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Sx = Pt(bx), Cx = he({}, Ro, { clipboardData: function (e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData; } }), Ex = Pt(Cx), Ax = he({}, Ro, { data: 0 }), _p = Pt(Ax), kx = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, Nx = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, Px = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function jx(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : (e = Px[e]) ? !!t[e] : !1; }
function _d() { return jx; }
var Rx = he({}, Wi, { key: function (e) { if (e.key) {
        var t = kx[e.key] || e.key;
        if (t !== "Unidentified")
            return t;
    } return e.type === "keypress" ? (e = Fs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Nx[e.keyCode] || "Unidentified" : ""; }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: _d, charCode: function (e) { return e.type === "keypress" ? Fs(e) : 0; }, keyCode: function (e) { return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; }, which: function (e) { return e.type === "keypress" ? Fs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; } }), _x = Pt(Rx), Tx = he({}, el, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Tp = Pt(Tx), Ox = he({}, Wi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: _d }), Lx = Pt(Ox), Dx = he({}, Ro, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Mx = Pt(Dx), Bx = he({}, el, { deltaX: function (e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0; }, deltaY: function (e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0; }, deltaZ: 0, deltaMode: 0 }), Ix = Pt(Bx), $x = [9, 13, 27, 32], Td = xn && "CompositionEvent" in window, ii = null;
xn && "documentMode" in document && (ii = document.documentMode);
var Fx = xn && "TextEvent" in window && !ii, zg = xn && (!Td || ii && 8 < ii && 11 >= ii), Op = " ", Lp = !1;
function Hg(e, t) { switch (e) {
    case "keyup": return $x.indexOf(t.keyCode) !== -1;
    case "keydown": return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout": return !0;
    default: return !1;
} }
function Vg(e) { return e = e.detail, typeof e == "object" && "data" in e ? e.data : null; }
var Gr = !1;
function Ux(e, t) { switch (e) {
    case "compositionend": return Vg(t);
    case "keypress": return t.which !== 32 ? null : (Lp = !0, Op);
    case "textInput": return e = t.data, e === Op && Lp ? null : e;
    default: return null;
} }
function zx(e, t) { if (Gr)
    return e === "compositionend" || !Td && Hg(e, t) ? (e = Ug(), $s = jd = Mn = null, Gr = !1, e) : null; switch (e) {
    case "paste": return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which);
        }
        return null;
    case "compositionend": return zg && t.locale !== "ko" ? null : t.data;
    default: return null;
} }
var Hx = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Dp(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t === "input" ? !!Hx[e.type] : t === "textarea"; }
function Wg(e, t, n, r) { Sg(r), t = ua(t, "onChange"), 0 < t.length && (n = new Rd("onChange", "change", null, n, r), e.push({ event: n, listeners: t })); }
var si = null, bi = null;
function Vx(e) { n0(e, 0); }
function tl(e) { var t = Yr(e); if (mg(t))
    return e; }
function Wx(e, t) { if (e === "change")
    return t; }
var Gg = !1;
if (xn) {
    var ec;
    if (xn) {
        var tc = "oninput" in document;
        if (!tc) {
            var Mp = document.createElement("div");
            Mp.setAttribute("oninput", "return;"), tc = typeof Mp.oninput == "function";
        }
        ec = tc;
    }
    else
        ec = !1;
    Gg = ec && (!document.documentMode || 9 < document.documentMode);
}
function Bp() { si && (si.detachEvent("onpropertychange", qg), bi = si = null); }
function qg(e) { if (e.propertyName === "value" && tl(bi)) {
    var t = [];
    Wg(t, bi, e, Ed(e)), kg(Vx, t);
} }
function Gx(e, t, n) { e === "focusin" ? (Bp(), si = t, bi = n, si.attachEvent("onpropertychange", qg)) : e === "focusout" && Bp(); }
function qx(e) { if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return tl(bi); }
function Kx(e, t) { if (e === "click")
    return tl(t); }
function Yx(e, t) { if (e === "input" || e === "change")
    return tl(t); }
function Qx(e, t) { return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t; }
var Jt = typeof Object.is == "function" ? Object.is : Qx;
function Si(e, t) { if (Jt(e, t))
    return !0; if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1; var n = Object.keys(e), r = Object.keys(t); if (n.length !== r.length)
    return !1; for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ic.call(t, o) || !Jt(e[o], t[o]))
        return !1;
} return !0; }
function Ip(e) { for (; e && e.firstChild;)
    e = e.firstChild; return e; }
function $p(e, t) { var n = Ip(e); e = 0; for (var r; n;) {
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
    n = Ip(n);
} }
function Kg(e, t) { return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Kg(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1; }
function Yg() { for (var e = window, t = ra(); t instanceof e.HTMLIFrameElement;) {
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
    t = ra(e.document);
} return t; }
function Od(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true"); }
function Jx(e) { var t = Yg(), n = e.focusedElem, r = e.selectionRange; if (t !== n && n && n.ownerDocument && Kg(n.ownerDocument.documentElement, n)) {
    if (r !== null && Od(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
            n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
            e = e.getSelection();
            var o = n.textContent.length, i = Math.min(r.start, o);
            r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = $p(n, i);
            var s = $p(n, r);
            o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
        }
    }
    for (t = [], e = n; e = e.parentNode;)
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
} }
var Zx = xn && "documentMode" in document && 11 >= document.documentMode, qr = null, ru = null, ai = null, ou = !1;
function Fp(e, t, n) { var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument; ou || qr == null || qr !== ra(r) || (r = qr, "selectionStart" in r && Od(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ai && Si(ai, r) || (ai = r, r = ua(ru, "onSelect"), 0 < r.length && (t = new Rd("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = qr))); }
function vs(e, t) { var n = {}; return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n; }
var Kr = { animationend: vs("Animation", "AnimationEnd"), animationiteration: vs("Animation", "AnimationIteration"), animationstart: vs("Animation", "AnimationStart"), transitionend: vs("Transition", "TransitionEnd") }, nc = {}, Qg = {};
xn && (Qg = document.createElement("div").style, "AnimationEvent" in window || (delete Kr.animationend.animation, delete Kr.animationiteration.animation, delete Kr.animationstart.animation), "TransitionEvent" in window || delete Kr.transitionend.transition);
function nl(e) { if (nc[e])
    return nc[e]; if (!Kr[e])
    return e; var t = Kr[e], n; for (n in t)
    if (t.hasOwnProperty(n) && n in Qg)
        return nc[e] = t[n]; return e; }
var Jg = nl("animationend"), Zg = nl("animationiteration"), Xg = nl("animationstart"), e0 = nl("transitionend"), t0 = new Map, Up = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function er(e, t) { t0.set(e, t), Or(t, [e]); }
for (var rc = 0; rc < Up.length; rc++) {
    var oc = Up[rc], Xx = oc.toLowerCase(), e2 = oc[0].toUpperCase() + oc.slice(1);
    er(Xx, "on" + e2);
}
er(Jg, "onAnimationEnd");
er(Zg, "onAnimationIteration");
er(Xg, "onAnimationStart");
er("dblclick", "onDoubleClick");
er("focusin", "onFocus");
er("focusout", "onBlur");
er(e0, "onTransitionEnd");
fo("onMouseEnter", ["mouseout", "mouseover"]);
fo("onMouseLeave", ["mouseout", "mouseover"]);
fo("onPointerEnter", ["pointerout", "pointerover"]);
fo("onPointerLeave", ["pointerout", "pointerover"]);
Or("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Or("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Or("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Or("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Or("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Or("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ei = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), t2 = new Set("cancel close invalid load scroll toggle".split(" ").concat(ei));
function zp(e, t, n) { var r = e.type || "unknown-event"; e.currentTarget = n, X1(r, t, void 0, e), e.currentTarget = null; }
function n0(e, t) { t = (t & 4) !== 0; for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
        var i = void 0;
        if (t)
            for (var s = r.length - 1; 0 <= s; s--) {
                var a = r[s], c = a.instance, u = a.currentTarget;
                if (a = a.listener, c !== i && o.isPropagationStopped())
                    break e;
                zp(o, a, u), i = c;
            }
        else
            for (s = 0; s < r.length; s++) {
                if (a = r[s], c = a.instance, u = a.currentTarget, a = a.listener, c !== i && o.isPropagationStopped())
                    break e;
                zp(o, a, u), i = c;
            }
    }
} if (ia)
    throw e = Xc, ia = !1, Xc = null, e; }
function ae(e, t) { var n = t[cu]; n === void 0 && (n = t[cu] = new Set); var r = e + "__bubble"; n.has(r) || (r0(t, e, 2, !1), n.add(r)); }
function ic(e, t, n) { var r = 0; t && (r |= 4), r0(n, e, r, t); }
var ws = "_reactListening" + Math.random().toString(36).slice(2);
function Ci(e) { if (!e[ws]) {
    e[ws] = !0, ug.forEach(function (n) { n !== "selectionchange" && (t2.has(n) || ic(n, !1, e), ic(n, !0, e)); });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ws] || (t[ws] = !0, ic("selectionchange", !1, t));
} }
function r0(e, t, n, r) { switch (Fg(t)) {
    case 1:
        var o = mx;
        break;
    case 4:
        o = gx;
        break;
    default: o = Pd;
} n = o.bind(null, t, n, e), o = void 0, !Zc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1); }
function sc(e, t, n, r, o) { var i = r; if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
        if (r === null)
            return;
        var s = r.tag;
        if (s === 3 || s === 4) {
            var a = r.stateNode.containerInfo;
            if (a === o || a.nodeType === 8 && a.parentNode === o)
                break;
            if (s === 4)
                for (s = r.return; s !== null;) {
                    var c = s.tag;
                    if ((c === 3 || c === 4) && (c = s.stateNode.containerInfo, c === o || c.nodeType === 8 && c.parentNode === o))
                        return;
                    s = s.return;
                }
            for (; a !== null;) {
                if (s = dr(a), s === null)
                    return;
                if (c = s.tag, c === 5 || c === 6) {
                    r = i = s;
                    continue e;
                }
                a = a.parentNode;
            }
        }
        r = r.return;
    } kg(function () { var u = i, d = Ed(n), f = []; e: {
    var p = t0.get(e);
    if (p !== void 0) {
        var w = Rd, m = e;
        switch (e) {
            case "keypress": if (Fs(n) === 0)
                break e;
            case "keydown":
            case "keyup":
                w = _x;
                break;
            case "focusin":
                m = "focus", w = Xl;
                break;
            case "focusout":
                m = "blur", w = Xl;
                break;
            case "beforeblur":
            case "afterblur":
                w = Xl;
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
                w = Rp;
                break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
                w = wx;
                break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
                w = Lx;
                break;
            case Jg:
            case Zg:
            case Xg:
                w = Sx;
                break;
            case e0:
                w = Mx;
                break;
            case "scroll":
                w = yx;
                break;
            case "wheel":
                w = Ix;
                break;
            case "copy":
            case "cut":
            case "paste":
                w = Ex;
                break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup": w = Tp;
        }
        var b = (t & 4) !== 0, x = !b && e === "scroll", g = b ? p !== null ? p + "Capture" : null : p;
        b = [];
        for (var h = u, y; h !== null;) {
            y = h;
            var S = y.stateNode;
            if (y.tag === 5 && S !== null && (y = S, g !== null && (S = yi(h, g), S != null && b.push(Ei(h, S, y)))), x)
                break;
            h = h.return;
        }
        0 < b.length && (p = new w(p, m, null, n, d), f.push({ event: p, listeners: b }));
    }
} if (!(t & 7)) {
    e: {
        if (p = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", p && n !== Qc && (m = n.relatedTarget || n.fromElement) && (dr(m) || m[bn]))
            break e;
        if ((w || p) && (p = d.window === d ? d : (p = d.ownerDocument) ? p.defaultView || p.parentWindow : window, w ? (m = n.relatedTarget || n.toElement, w = u, m = m ? dr(m) : null, m !== null && (x = Lr(m), m !== x || m.tag !== 5 && m.tag !== 6) && (m = null)) : (w = null, m = u), w !== m)) {
            if (b = Rp, S = "onMouseLeave", g = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (b = Tp, S = "onPointerLeave", g = "onPointerEnter", h = "pointer"), x = w == null ? p : Yr(w), y = m == null ? p : Yr(m), p = new b(S, h + "leave", w, n, d), p.target = x, p.relatedTarget = y, S = null, dr(d) === u && (b = new b(g, h + "enter", m, n, d), b.target = y, b.relatedTarget = x, S = b), x = S, w && m)
                t: {
                    for (b = w, g = m, h = 0, y = b; y; y = zr(y))
                        h++;
                    for (y = 0, S = g; S; S = zr(S))
                        y++;
                    for (; 0 < h - y;)
                        b = zr(b), h--;
                    for (; 0 < y - h;)
                        g = zr(g), y--;
                    for (; h--;) {
                        if (b === g || g !== null && b === g.alternate)
                            break t;
                        b = zr(b), g = zr(g);
                    }
                    b = null;
                }
            else
                b = null;
            w !== null && Hp(f, p, w, b, !1), m !== null && x !== null && Hp(f, x, m, b, !0);
        }
    }
    e: {
        if (p = u ? Yr(u) : window, w = p.nodeName && p.nodeName.toLowerCase(), w === "select" || w === "input" && p.type === "file")
            var C = Wx;
        else if (Dp(p))
            if (Gg)
                C = Yx;
            else {
                C = qx;
                var N = Gx;
            }
        else
            (w = p.nodeName) && w.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (C = Kx);
        if (C && (C = C(e, u))) {
            Wg(f, C, n, d);
            break e;
        }
        N && N(e, p, u), e === "focusout" && (N = p._wrapperState) && N.controlled && p.type === "number" && Wc(p, "number", p.value);
    }
    switch (N = u ? Yr(u) : window, e) {
        case "focusin":
            (Dp(N) || N.contentEditable === "true") && (qr = N, ru = u, ai = null);
            break;
        case "focusout":
            ai = ru = qr = null;
            break;
        case "mousedown":
            ou = !0;
            break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
            ou = !1, Fp(f, n, d);
            break;
        case "selectionchange": if (Zx)
            break;
        case "keydown":
        case "keyup": Fp(f, n, d);
    }
    var E;
    if (Td)
        e: {
            switch (e) {
                case "compositionstart":
                    var P = "onCompositionStart";
                    break e;
                case "compositionend":
                    P = "onCompositionEnd";
                    break e;
                case "compositionupdate":
                    P = "onCompositionUpdate";
                    break e;
            }
            P = void 0;
        }
    else
        Gr ? Hg(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
    P && (zg && n.locale !== "ko" && (Gr || P !== "onCompositionStart" ? P === "onCompositionEnd" && Gr && (E = Ug()) : (Mn = d, jd = "value" in Mn ? Mn.value : Mn.textContent, Gr = !0)), N = ua(u, P), 0 < N.length && (P = new _p(P, e, null, n, d), f.push({ event: P, listeners: N }), E ? P.data = E : (E = Vg(n), E !== null && (P.data = E)))), (E = Fx ? Ux(e, n) : zx(e, n)) && (u = ua(u, "onBeforeInput"), 0 < u.length && (d = new _p("onBeforeInput", "beforeinput", null, n, d), f.push({ event: d, listeners: u }), d.data = E));
} n0(f, t); }); }
function Ei(e, t, n) { return { instance: e, listener: t, currentTarget: n }; }
function ua(e, t) { for (var n = t + "Capture", r = []; e !== null;) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = yi(e, n), i != null && r.unshift(Ei(e, i, o)), i = yi(e, t), i != null && r.push(Ei(e, i, o))), e = e.return;
} return r; }
function zr(e) { if (e === null)
    return null; do
    e = e.return;
while (e && e.tag !== 5); return e || null; }
function Hp(e, t, n, r, o) { for (var i = t._reactName, s = []; n !== null && n !== r;) {
    var a = n, c = a.alternate, u = a.stateNode;
    if (c !== null && c === r)
        break;
    a.tag === 5 && u !== null && (a = u, o ? (c = yi(n, i), c != null && s.unshift(Ei(n, c, a))) : o || (c = yi(n, i), c != null && s.push(Ei(n, c, a)))), n = n.return;
} s.length !== 0 && e.push({ event: t, listeners: s }); }
var n2 = /\r\n?/g, r2 = /\u0000|\uFFFD/g;
function Vp(e) {
    return (typeof e == "string" ? e : "" + e).replace(n2, `
`).replace(r2, "");
}
function xs(e, t, n) { if (t = Vp(t), Vp(e) !== t && n)
    throw Error(j(425)); }
function da() { }
var iu = null, su = null;
function au(e, t) { return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null; }
var lu = typeof setTimeout == "function" ? setTimeout : void 0, o2 = typeof clearTimeout == "function" ? clearTimeout : void 0, Wp = typeof Promise == "function" ? Promise : void 0, i2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Wp < "u" ? function (e) { return Wp.resolve(null).then(e).catch(s2); } : lu;
function s2(e) { setTimeout(function () { throw e; }); }
function ac(e, t) { var n = t, r = 0; do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
        if (n = o.data, n === "/$") {
            if (r === 0) {
                e.removeChild(o), xi(t);
                return;
            }
            r--;
        }
        else
            n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
} while (n); xi(t); }
function Vn(e) { for (; e != null; e = e.nextSibling) {
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
function Gp(e) { e = e.previousSibling; for (var t = 0; e;) {
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
var _o = Math.random().toString(36).slice(2), sn = "__reactFiber$" + _o, Ai = "__reactProps$" + _o, bn = "__reactContainer$" + _o, cu = "__reactEvents$" + _o, a2 = "__reactListeners$" + _o, l2 = "__reactHandles$" + _o;
function dr(e) { var t = e[sn]; if (t)
    return t; for (var n = e.parentNode; n;) {
    if (t = n[bn] || n[sn]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
            for (e = Gp(e); e !== null;) {
                if (n = e[sn])
                    return n;
                e = Gp(e);
            }
        return t;
    }
    e = n, n = e.parentNode;
} return null; }
function Gi(e) { return e = e[sn] || e[bn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e; }
function Yr(e) { if (e.tag === 5 || e.tag === 6)
    return e.stateNode; throw Error(j(33)); }
function rl(e) { return e[Ai] || null; }
var uu = [], Qr = -1;
function tr(e) { return { current: e }; }
function ce(e) { 0 > Qr || (e.current = uu[Qr], uu[Qr] = null, Qr--); }
function ie(e, t) { Qr++, uu[Qr] = e.current, e.current = t; }
var Zn = {}, qe = tr(Zn), rt = tr(!1), Sr = Zn;
function po(e, t) { var n = e.type.contextTypes; if (!n)
    return Zn; var r = e.stateNode; if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext; var o = {}, i; for (i in n)
    o[i] = t[i]; return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o; }
function ot(e) { return e = e.childContextTypes, e != null; }
function fa() { ce(rt), ce(qe); }
function qp(e, t, n) { if (qe.current !== Zn)
    throw Error(j(168)); ie(qe, t), ie(rt, n); }
function o0(e, t, n) { var r = e.stateNode; if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n; r = r.getChildContext(); for (var o in r)
    if (!(o in t))
        throw Error(j(108, G1(e) || "Unknown", o)); return he({}, n, r); }
function pa(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Zn, Sr = qe.current, ie(qe, e), ie(rt, rt.current), !0; }
function Kp(e, t, n) { var r = e.stateNode; if (!r)
    throw Error(j(169)); n ? (e = o0(e, t, Sr), r.__reactInternalMemoizedMergedChildContext = e, ce(rt), ce(qe), ie(qe, e)) : ce(rt), ie(rt, n); }
var mn = null, ol = !1, lc = !1;
function i0(e) { mn === null ? mn = [e] : mn.push(e); }
function c2(e) { ol = !0, i0(e); }
function nr() { if (!lc && mn !== null) {
    lc = !0;
    var e = 0, t = ne;
    try {
        var n = mn;
        for (ne = 1; e < n.length; e++) {
            var r = n[e];
            do
                r = r(!0);
            while (r !== null);
        }
        mn = null, ol = !1;
    }
    catch (o) {
        throw mn !== null && (mn = mn.slice(e + 1)), Rg(Ad, nr), o;
    }
    finally {
        ne = t, lc = !1;
    }
} return null; }
var Jr = [], Zr = 0, ha = null, ma = 0, Lt = [], Dt = 0, Cr = null, gn = 1, yn = "";
function ar(e, t) { Jr[Zr++] = ma, Jr[Zr++] = ha, ha = e, ma = t; }
function s0(e, t, n) { Lt[Dt++] = gn, Lt[Dt++] = yn, Lt[Dt++] = Cr, Cr = e; var r = gn; e = yn; var o = 32 - Kt(r) - 1; r &= ~(1 << o), n += 1; var i = 32 - Kt(t) + o; if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, gn = 1 << 32 - Kt(t) + o | n << o | r, yn = i + e;
}
else
    gn = 1 << i | n << o | r, yn = e; }
function Ld(e) { e.return !== null && (ar(e, 1), s0(e, 1, 0)); }
function Dd(e) { for (; e === ha;)
    ha = Jr[--Zr], Jr[Zr] = null, ma = Jr[--Zr], Jr[Zr] = null; for (; e === Cr;)
    Cr = Lt[--Dt], Lt[Dt] = null, yn = Lt[--Dt], Lt[Dt] = null, gn = Lt[--Dt], Lt[Dt] = null; }
var xt = null, vt = null, ue = !1, Gt = null;
function a0(e, t) { var n = Mt(5, null, null, 0); n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n); }
function Yp(e, t) { switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, xt = e, vt = Vn(t.firstChild), !0) : !1;
    case 6: return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, xt = e, vt = null, !0) : !1;
    case 13: return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Cr !== null ? { id: gn, overflow: yn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Mt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, xt = e, vt = null, !0) : !1;
    default: return !1;
} }
function du(e) { return (e.mode & 1) !== 0 && (e.flags & 128) === 0; }
function fu(e) { if (ue) {
    var t = vt;
    if (t) {
        var n = t;
        if (!Yp(e, t)) {
            if (du(e))
                throw Error(j(418));
            t = Vn(n.nextSibling);
            var r = xt;
            t && Yp(e, t) ? a0(r, n) : (e.flags = e.flags & -4097 | 2, ue = !1, xt = e);
        }
    }
    else {
        if (du(e))
            throw Error(j(418));
        e.flags = e.flags & -4097 | 2, ue = !1, xt = e;
    }
} }
function Qp(e) { for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
    e = e.return; xt = e; }
function bs(e) { if (e !== xt)
    return !1; if (!ue)
    return Qp(e), ue = !0, !1; var t; if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !au(e.type, e.memoizedProps)), t && (t = vt)) {
    if (du(e))
        throw l0(), Error(j(418));
    for (; t;)
        a0(e, t), t = Vn(t.nextSibling);
} if (Qp(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(j(317));
    e: {
        for (e = e.nextSibling, t = 0; e;) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "/$") {
                    if (t === 0) {
                        vt = Vn(e.nextSibling);
                        break e;
                    }
                    t--;
                }
                else
                    n !== "$" && n !== "$!" && n !== "$?" || t++;
            }
            e = e.nextSibling;
        }
        vt = null;
    }
}
else
    vt = xt ? Vn(e.stateNode.nextSibling) : null; return !0; }
function l0() { for (var e = vt; e;)
    e = Vn(e.nextSibling); }
function ho() { vt = xt = null, ue = !1; }
function Md(e) { Gt === null ? Gt = [e] : Gt.push(e); }
var u2 = An.ReactCurrentBatchConfig;
function qo(e, t, n) { if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
        if (n = n._owner, n) {
            if (n.tag !== 1)
                throw Error(j(309));
            var r = n.stateNode;
        }
        if (!r)
            throw Error(j(147, e));
        var o = r, i = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function (s) { var a = o.refs; s === null ? delete a[i] : a[i] = s; }, t._stringRef = i, t);
    }
    if (typeof e != "string")
        throw Error(j(284));
    if (!n._owner)
        throw Error(j(290, e));
} return e; }
function Ss(e, t) { throw e = Object.prototype.toString.call(t), Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)); }
function Jp(e) { var t = e._init; return t(e._payload); }
function c0(e) { function t(g, h) { if (e) {
    var y = g.deletions;
    y === null ? (g.deletions = [h], g.flags |= 16) : y.push(h);
} } function n(g, h) { if (!e)
    return null; for (; h !== null;)
    t(g, h), h = h.sibling; return null; } function r(g, h) { for (g = new Map; h !== null;)
    h.key !== null ? g.set(h.key, h) : g.set(h.index, h), h = h.sibling; return g; } function o(g, h) { return g = Kn(g, h), g.index = 0, g.sibling = null, g; } function i(g, h, y) { return g.index = y, e ? (y = g.alternate, y !== null ? (y = y.index, y < h ? (g.flags |= 2, h) : y) : (g.flags |= 2, h)) : (g.flags |= 1048576, h); } function s(g) { return e && g.alternate === null && (g.flags |= 2), g; } function a(g, h, y, S) { return h === null || h.tag !== 6 ? (h = mc(y, g.mode, S), h.return = g, h) : (h = o(h, y), h.return = g, h); } function c(g, h, y, S) { var C = y.type; return C === Wr ? d(g, h, y.props.children, S, y.key) : h !== null && (h.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Tn && Jp(C) === h.type) ? (S = o(h, y.props), S.ref = qo(g, h, y), S.return = g, S) : (S = qs(y.type, y.key, y.props, null, g.mode, S), S.ref = qo(g, h, y), S.return = g, S); } function u(g, h, y, S) { return h === null || h.tag !== 4 || h.stateNode.containerInfo !== y.containerInfo || h.stateNode.implementation !== y.implementation ? (h = gc(y, g.mode, S), h.return = g, h) : (h = o(h, y.children || []), h.return = g, h); } function d(g, h, y, S, C) { return h === null || h.tag !== 7 ? (h = yr(y, g.mode, S, C), h.return = g, h) : (h = o(h, y), h.return = g, h); } function f(g, h, y) { if (typeof h == "string" && h !== "" || typeof h == "number")
    return h = mc("" + h, g.mode, y), h.return = g, h; if (typeof h == "object" && h !== null) {
    switch (h.$$typeof) {
        case ds: return y = qs(h.type, h.key, h.props, null, g.mode, y), y.ref = qo(g, null, h), y.return = g, y;
        case Vr: return h = gc(h, g.mode, y), h.return = g, h;
        case Tn:
            var S = h._init;
            return f(g, S(h._payload), y);
    }
    if (Zo(h) || zo(h))
        return h = yr(h, g.mode, y, null), h.return = g, h;
    Ss(g, h);
} return null; } function p(g, h, y, S) { var C = h !== null ? h.key : null; if (typeof y == "string" && y !== "" || typeof y == "number")
    return C !== null ? null : a(g, h, "" + y, S); if (typeof y == "object" && y !== null) {
    switch (y.$$typeof) {
        case ds: return y.key === C ? c(g, h, y, S) : null;
        case Vr: return y.key === C ? u(g, h, y, S) : null;
        case Tn: return C = y._init, p(g, h, C(y._payload), S);
    }
    if (Zo(y) || zo(y))
        return C !== null ? null : d(g, h, y, S, null);
    Ss(g, y);
} return null; } function w(g, h, y, S, C) { if (typeof S == "string" && S !== "" || typeof S == "number")
    return g = g.get(y) || null, a(h, g, "" + S, C); if (typeof S == "object" && S !== null) {
    switch (S.$$typeof) {
        case ds: return g = g.get(S.key === null ? y : S.key) || null, c(h, g, S, C);
        case Vr: return g = g.get(S.key === null ? y : S.key) || null, u(h, g, S, C);
        case Tn:
            var N = S._init;
            return w(g, h, y, N(S._payload), C);
    }
    if (Zo(S) || zo(S))
        return g = g.get(y) || null, d(h, g, S, C, null);
    Ss(h, S);
} return null; } function m(g, h, y, S) { for (var C = null, N = null, E = h, P = h = 0, M = null; E !== null && P < y.length; P++) {
    E.index > P ? (M = E, E = null) : M = E.sibling;
    var O = p(g, E, y[P], S);
    if (O === null) {
        E === null && (E = M);
        break;
    }
    e && E && O.alternate === null && t(g, E), h = i(O, h, P), N === null ? C = O : N.sibling = O, N = O, E = M;
} if (P === y.length)
    return n(g, E), ue && ar(g, P), C; if (E === null) {
    for (; P < y.length; P++)
        E = f(g, y[P], S), E !== null && (h = i(E, h, P), N === null ? C = E : N.sibling = E, N = E);
    return ue && ar(g, P), C;
} for (E = r(g, E); P < y.length; P++)
    M = w(E, g, P, y[P], S), M !== null && (e && M.alternate !== null && E.delete(M.key === null ? P : M.key), h = i(M, h, P), N === null ? C = M : N.sibling = M, N = M); return e && E.forEach(function (q) { return t(g, q); }), ue && ar(g, P), C; } function b(g, h, y, S) { var C = zo(y); if (typeof C != "function")
    throw Error(j(150)); if (y = C.call(y), y == null)
    throw Error(j(151)); for (var N = C = null, E = h, P = h = 0, M = null, O = y.next(); E !== null && !O.done; P++, O = y.next()) {
    E.index > P ? (M = E, E = null) : M = E.sibling;
    var q = p(g, E, O.value, S);
    if (q === null) {
        E === null && (E = M);
        break;
    }
    e && E && q.alternate === null && t(g, E), h = i(q, h, P), N === null ? C = q : N.sibling = q, N = q, E = M;
} if (O.done)
    return n(g, E), ue && ar(g, P), C; if (E === null) {
    for (; !O.done; P++, O = y.next())
        O = f(g, O.value, S), O !== null && (h = i(O, h, P), N === null ? C = O : N.sibling = O, N = O);
    return ue && ar(g, P), C;
} for (E = r(g, E); !O.done; P++, O = y.next())
    O = w(E, g, P, O.value, S), O !== null && (e && O.alternate !== null && E.delete(O.key === null ? P : O.key), h = i(O, h, P), N === null ? C = O : N.sibling = O, N = O); return e && E.forEach(function (oe) { return t(g, oe); }), ue && ar(g, P), C; } function x(g, h, y, S) { if (typeof y == "object" && y !== null && y.type === Wr && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
    switch (y.$$typeof) {
        case ds:
            e: {
                for (var C = y.key, N = h; N !== null;) {
                    if (N.key === C) {
                        if (C = y.type, C === Wr) {
                            if (N.tag === 7) {
                                n(g, N.sibling), h = o(N, y.props.children), h.return = g, g = h;
                                break e;
                            }
                        }
                        else if (N.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Tn && Jp(C) === N.type) {
                            n(g, N.sibling), h = o(N, y.props), h.ref = qo(g, N, y), h.return = g, g = h;
                            break e;
                        }
                        n(g, N);
                        break;
                    }
                    else
                        t(g, N);
                    N = N.sibling;
                }
                y.type === Wr ? (h = yr(y.props.children, g.mode, S, y.key), h.return = g, g = h) : (S = qs(y.type, y.key, y.props, null, g.mode, S), S.ref = qo(g, h, y), S.return = g, g = S);
            }
            return s(g);
        case Vr:
            e: {
                for (N = y.key; h !== null;) {
                    if (h.key === N)
                        if (h.tag === 4 && h.stateNode.containerInfo === y.containerInfo && h.stateNode.implementation === y.implementation) {
                            n(g, h.sibling), h = o(h, y.children || []), h.return = g, g = h;
                            break e;
                        }
                        else {
                            n(g, h);
                            break;
                        }
                    else
                        t(g, h);
                    h = h.sibling;
                }
                h = gc(y, g.mode, S), h.return = g, g = h;
            }
            return s(g);
        case Tn: return N = y._init, x(g, h, N(y._payload), S);
    }
    if (Zo(y))
        return m(g, h, y, S);
    if (zo(y))
        return b(g, h, y, S);
    Ss(g, y);
} return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, h !== null && h.tag === 6 ? (n(g, h.sibling), h = o(h, y), h.return = g, g = h) : (n(g, h), h = mc(y, g.mode, S), h.return = g, g = h), s(g)) : n(g, h); } return x; }
var mo = c0(!0), u0 = c0(!1), ga = tr(null), ya = null, Xr = null, Bd = null;
function Id() { Bd = Xr = ya = null; }
function $d(e) { var t = ga.current; ce(ga), e._currentValue = t; }
function pu(e, t, n) { for (; e !== null;) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
        break;
    e = e.return;
} }
function ao(e, t) { ya = e, Bd = Xr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (nt = !0), e.firstContext = null); }
function It(e) { var t = e._currentValue; if (Bd !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Xr === null) {
        if (ya === null)
            throw Error(j(308));
        Xr = e, ya.dependencies = { lanes: 0, firstContext: e };
    }
    else
        Xr = Xr.next = e; return t; }
var fr = null;
function Fd(e) { fr === null ? fr = [e] : fr.push(e); }
function d0(e, t, n, r) { var o = t.interleaved; return o === null ? (n.next = n, Fd(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Sn(e, r); }
function Sn(e, t) { e.lanes |= t; var n = e.alternate; for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return; return n.tag === 3 ? n.stateNode : null; }
var On = !1;
function Ud(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null }; }
function f0(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }); }
function vn(e, t) { return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }; }
function Wn(e, t, n) { var r = e.updateQueue; if (r === null)
    return null; if (r = r.shared, Y & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Sn(e, n);
} return o = r.interleaved, o === null ? (t.next = t, Fd(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Sn(e, n); }
function Us(e, t, n) { if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, kd(e, n);
} }
function Zp(e, t) { var n = e.updateQueue, r = e.alternate; if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
        do {
            var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
            i === null ? o = i = s : i = i.next = s, n = n.next;
        } while (n !== null);
        i === null ? o = i = t : i = i.next = t;
    }
    else
        o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
} e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t; }
function va(e, t, n, r) { var o = e.updateQueue; On = !1; var i = o.firstBaseUpdate, s = o.lastBaseUpdate, a = o.shared.pending; if (a !== null) {
    o.shared.pending = null;
    var c = a, u = c.next;
    c.next = null, s === null ? i = u : s.next = u, s = c;
    var d = e.alternate;
    d !== null && (d = d.updateQueue, a = d.lastBaseUpdate, a !== s && (a === null ? d.firstBaseUpdate = u : a.next = u, d.lastBaseUpdate = c));
} if (i !== null) {
    var f = o.baseState;
    s = 0, d = u = c = null, a = i;
    do {
        var p = a.lane, w = a.eventTime;
        if ((r & p) === p) {
            d !== null && (d = d.next = { eventTime: w, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
            e: {
                var m = e, b = a;
                switch (p = t, w = n, b.tag) {
                    case 1:
                        if (m = b.payload, typeof m == "function") {
                            f = m.call(w, f, p);
                            break e;
                        }
                        f = m;
                        break e;
                    case 3: m.flags = m.flags & -65537 | 128;
                    case 0:
                        if (m = b.payload, p = typeof m == "function" ? m.call(w, f, p) : m, p == null)
                            break e;
                        f = he({}, f, p);
                        break e;
                    case 2: On = !0;
                }
            }
            a.callback !== null && a.lane !== 0 && (e.flags |= 64, p = o.effects, p === null ? o.effects = [a] : p.push(a));
        }
        else
            w = { eventTime: w, lane: p, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, d === null ? (u = d = w, c = f) : d = d.next = w, s |= p;
        if (a = a.next, a === null) {
            if (a = o.shared.pending, a === null)
                break;
            p = a, a = p.next, p.next = null, o.lastBaseUpdate = p, o.shared.pending = null;
        }
    } while (!0);
    if (d === null && (c = f), o.baseState = c, o.firstBaseUpdate = u, o.lastBaseUpdate = d, t = o.shared.interleaved, t !== null) {
        o = t;
        do
            s |= o.lane, o = o.next;
        while (o !== t);
    }
    else
        i === null && (o.shared.lanes = 0);
    Ar |= s, e.lanes = s, e.memoizedState = f;
} }
function Xp(e, t, n) { if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
        var r = e[t], o = r.callback;
        if (o !== null) {
            if (r.callback = null, r = n, typeof o != "function")
                throw Error(j(191, o));
            o.call(r);
        }
    } }
var qi = {}, ln = tr(qi), ki = tr(qi), Ni = tr(qi);
function pr(e) { if (e === qi)
    throw Error(j(174)); return e; }
function zd(e, t) { switch (ie(Ni, t), ie(ki, e), ie(ln, qi), e = t.nodeType, e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : qc(null, "");
        break;
    default: e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = qc(t, e);
} ce(ln), ie(ln, t); }
function go() { ce(ln), ce(ki), ce(Ni); }
function p0(e) { pr(Ni.current); var t = pr(ln.current), n = qc(t, e.type); t !== n && (ie(ki, e), ie(ln, n)); }
function Hd(e) { ki.current === e && (ce(ln), ce(ki)); }
var fe = tr(0);
function wa(e) { for (var t = e; t !== null;) {
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
var cc = [];
function Vd() { for (var e = 0; e < cc.length; e++)
    cc[e]._workInProgressVersionPrimary = null; cc.length = 0; }
var zs = An.ReactCurrentDispatcher, uc = An.ReactCurrentBatchConfig, Er = 0, pe = null, Pe = null, _e = null, xa = !1, li = !1, Pi = 0, d2 = 0;
function He() { throw Error(j(321)); }
function Wd(e, t) { if (t === null)
    return !1; for (var n = 0; n < t.length && n < e.length; n++)
    if (!Jt(e[n], t[n]))
        return !1; return !0; }
function Gd(e, t, n, r, o, i) { if (Er = i, pe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, zs.current = e === null || e.memoizedState === null ? m2 : g2, e = n(r, o), li) {
    i = 0;
    do {
        if (li = !1, Pi = 0, 25 <= i)
            throw Error(j(301));
        i += 1, _e = Pe = null, t.updateQueue = null, zs.current = y2, e = n(r, o);
    } while (li);
} if (zs.current = ba, t = Pe !== null && Pe.next !== null, Er = 0, _e = Pe = pe = null, xa = !1, t)
    throw Error(j(300)); return e; }
function qd() { var e = Pi !== 0; return Pi = 0, e; }
function nn() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return _e === null ? pe.memoizedState = _e = e : _e = _e.next = e, _e; }
function $t() { if (Pe === null) {
    var e = pe.alternate;
    e = e !== null ? e.memoizedState : null;
}
else
    e = Pe.next; var t = _e === null ? pe.memoizedState : _e.next; if (t !== null)
    _e = t, Pe = e;
else {
    if (e === null)
        throw Error(j(310));
    Pe = e, e = { memoizedState: Pe.memoizedState, baseState: Pe.baseState, baseQueue: Pe.baseQueue, queue: Pe.queue, next: null }, _e === null ? pe.memoizedState = _e = e : _e = _e.next = e;
} return _e; }
function ji(e, t) { return typeof t == "function" ? t(e) : t; }
function dc(e) { var t = $t(), n = t.queue; if (n === null)
    throw Error(j(311)); n.lastRenderedReducer = e; var r = Pe, o = r.baseQueue, i = n.pending; if (i !== null) {
    if (o !== null) {
        var s = o.next;
        o.next = i.next, i.next = s;
    }
    r.baseQueue = o = i, n.pending = null;
} if (o !== null) {
    i = o.next, r = r.baseState;
    var a = s = null, c = null, u = i;
    do {
        var d = u.lane;
        if ((Er & d) === d)
            c !== null && (c = c.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
        else {
            var f = { lane: d, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
            c === null ? (a = c = f, s = r) : c = c.next = f, pe.lanes |= d, Ar |= d;
        }
        u = u.next;
    } while (u !== null && u !== i);
    c === null ? s = r : c.next = a, Jt(r, t.memoizedState) || (nt = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = c, n.lastRenderedState = r;
} if (e = n.interleaved, e !== null) {
    o = e;
    do
        i = o.lane, pe.lanes |= i, Ar |= i, o = o.next;
    while (o !== e);
}
else
    o === null && (n.lanes = 0); return [t.memoizedState, n.dispatch]; }
function fc(e) { var t = $t(), n = t.queue; if (n === null)
    throw Error(j(311)); n.lastRenderedReducer = e; var r = n.dispatch, o = n.pending, i = t.memoizedState; if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
        i = e(i, s.action), s = s.next;
    while (s !== o);
    Jt(i, t.memoizedState) || (nt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
} return [i, r]; }
function h0() { }
function m0(e, t) { var n = pe, r = $t(), o = t(), i = !Jt(r.memoizedState, o); if (i && (r.memoizedState = o, nt = !0), r = r.queue, Kd(v0.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || _e !== null && _e.memoizedState.tag & 1) {
    if (n.flags |= 2048, Ri(9, y0.bind(null, n, r, o, t), void 0, null), Oe === null)
        throw Error(j(349));
    Er & 30 || g0(n, t, o);
} return o; }
function g0(e, t, n) { e.flags |= 16384, e = { getSnapshot: t, value: n }, t = pe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, pe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e)); }
function y0(e, t, n, r) { t.value = n, t.getSnapshot = r, w0(t) && x0(e); }
function v0(e, t, n) { return n(function () { w0(t) && x0(e); }); }
function w0(e) { var t = e.getSnapshot; e = e.value; try {
    var n = t();
    return !Jt(e, n);
}
catch {
    return !0;
} }
function x0(e) { var t = Sn(e, 1); t !== null && Yt(t, e, 1, -1); }
function eh(e) { var t = nn(); return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ji, lastRenderedState: e }, t.queue = e, e = e.dispatch = h2.bind(null, pe, e), [t.memoizedState, e]; }
function Ri(e, t, n, r) { return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = pe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, pe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e; }
function b0() { return $t().memoizedState; }
function Hs(e, t, n, r) { var o = nn(); pe.flags |= e, o.memoizedState = Ri(1 | t, n, void 0, r === void 0 ? null : r); }
function il(e, t, n, r) { var o = $t(); r = r === void 0 ? null : r; var i = void 0; if (Pe !== null) {
    var s = Pe.memoizedState;
    if (i = s.destroy, r !== null && Wd(r, s.deps)) {
        o.memoizedState = Ri(t, n, i, r);
        return;
    }
} pe.flags |= e, o.memoizedState = Ri(1 | t, n, i, r); }
function th(e, t) { return Hs(8390656, 8, e, t); }
function Kd(e, t) { return il(2048, 8, e, t); }
function S0(e, t) { return il(4, 2, e, t); }
function C0(e, t) { return il(4, 4, e, t); }
function E0(e, t) { if (typeof t == "function")
    return e = e(), t(e), function () { t(null); }; if (t != null)
    return e = e(), t.current = e, function () { t.current = null; }; }
function A0(e, t, n) { return n = n != null ? n.concat([e]) : null, il(4, 4, E0.bind(null, t, e), n); }
function Yd() { }
function k0(e, t) { var n = $t(); t = t === void 0 ? null : t; var r = n.memoizedState; return r !== null && t !== null && Wd(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e); }
function N0(e, t) { var n = $t(); t = t === void 0 ? null : t; var r = n.memoizedState; return r !== null && t !== null && Wd(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e); }
function P0(e, t, n) { return Er & 21 ? (Jt(n, t) || (n = Og(), pe.lanes |= n, Ar |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, nt = !0), e.memoizedState = n); }
function f2(e, t) { var n = ne; ne = n !== 0 && 4 > n ? n : 4, e(!0); var r = uc.transition; uc.transition = {}; try {
    e(!1), t();
}
finally {
    ne = n, uc.transition = r;
} }
function j0() { return $t().memoizedState; }
function p2(e, t, n) { var r = qn(e); if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, R0(e))
    _0(t, n);
else if (n = d0(e, t, n, r), n !== null) {
    var o = Ze();
    Yt(n, e, r, o), T0(n, t, r);
} }
function h2(e, t, n) { var r = qn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }; if (R0(e))
    _0(t, o);
else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
            var s = t.lastRenderedState, a = i(s, n);
            if (o.hasEagerState = !0, o.eagerState = a, Jt(a, s)) {
                var c = t.interleaved;
                c === null ? (o.next = o, Fd(t)) : (o.next = c.next, c.next = o), t.interleaved = o;
                return;
            }
        }
        catch { }
        finally { }
    n = d0(e, t, o, r), n !== null && (o = Ze(), Yt(n, e, r, o), T0(n, t, r));
} }
function R0(e) { var t = e.alternate; return e === pe || t !== null && t === pe; }
function _0(e, t) { li = xa = !0; var n = e.pending; n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t; }
function T0(e, t, n) { if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, kd(e, n);
} }
var ba = { readContext: It, useCallback: He, useContext: He, useEffect: He, useImperativeHandle: He, useInsertionEffect: He, useLayoutEffect: He, useMemo: He, useReducer: He, useRef: He, useState: He, useDebugValue: He, useDeferredValue: He, useTransition: He, useMutableSource: He, useSyncExternalStore: He, useId: He, unstable_isNewReconciler: !1 }, m2 = { readContext: It, useCallback: function (e, t) { return nn().memoizedState = [e, t === void 0 ? null : t], e; }, useContext: It, useEffect: th, useImperativeHandle: function (e, t, n) { return n = n != null ? n.concat([e]) : null, Hs(4194308, 4, E0.bind(null, t, e), n); }, useLayoutEffect: function (e, t) { return Hs(4194308, 4, e, t); }, useInsertionEffect: function (e, t) { return Hs(4, 2, e, t); }, useMemo: function (e, t) { var n = nn(); return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e; }, useReducer: function (e, t, n) { var r = nn(); return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = p2.bind(null, pe, e), [r.memoizedState, e]; }, useRef: function (e) { var t = nn(); return e = { current: e }, t.memoizedState = e; }, useState: eh, useDebugValue: Yd, useDeferredValue: function (e) { return nn().memoizedState = e; }, useTransition: function () { var e = eh(!1), t = e[0]; return e = f2.bind(null, e[1]), nn().memoizedState = e, [t, e]; }, useMutableSource: function () { }, useSyncExternalStore: function (e, t, n) { var r = pe, o = nn(); if (ue) {
        if (n === void 0)
            throw Error(j(407));
        n = n();
    }
    else {
        if (n = t(), Oe === null)
            throw Error(j(349));
        Er & 30 || g0(r, t, n);
    } o.memoizedState = n; var i = { value: n, getSnapshot: t }; return o.queue = i, th(v0.bind(null, r, i, e), [e]), r.flags |= 2048, Ri(9, y0.bind(null, r, i, n, t), void 0, null), n; }, useId: function () { var e = nn(), t = Oe.identifierPrefix; if (ue) {
        var n = yn, r = gn;
        n = (r & ~(1 << 32 - Kt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Pi++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    }
    else
        n = d2++, t = ":" + t + "r" + n.toString(32) + ":"; return e.memoizedState = t; }, unstable_isNewReconciler: !1 }, g2 = { readContext: It, useCallback: k0, useContext: It, useEffect: Kd, useImperativeHandle: A0, useInsertionEffect: S0, useLayoutEffect: C0, useMemo: N0, useReducer: dc, useRef: b0, useState: function () { return dc(ji); }, useDebugValue: Yd, useDeferredValue: function (e) { var t = $t(); return P0(t, Pe.memoizedState, e); }, useTransition: function () { var e = dc(ji)[0], t = $t().memoizedState; return [e, t]; }, useMutableSource: h0, useSyncExternalStore: m0, useId: j0, unstable_isNewReconciler: !1 }, y2 = { readContext: It, useCallback: k0, useContext: It, useEffect: Kd, useImperativeHandle: A0, useInsertionEffect: S0, useLayoutEffect: C0, useMemo: N0, useReducer: fc, useRef: b0, useState: function () { return fc(ji); }, useDebugValue: Yd, useDeferredValue: function (e) { var t = $t(); return Pe === null ? t.memoizedState = e : P0(t, Pe.memoizedState, e); }, useTransition: function () { var e = fc(ji)[0], t = $t().memoizedState; return [e, t]; }, useMutableSource: h0, useSyncExternalStore: m0, useId: j0, unstable_isNewReconciler: !1 };
function Vt(e, t) { if (e && e.defaultProps) {
    t = he({}, t), e = e.defaultProps;
    for (var n in e)
        t[n] === void 0 && (t[n] = e[n]);
    return t;
} return t; }
function hu(e, t, n, r) { t = e.memoizedState, n = n(r, t), n = n == null ? t : he({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n); }
var sl = { isMounted: function (e) { return (e = e._reactInternals) ? Lr(e) === e : !1; }, enqueueSetState: function (e, t, n) { e = e._reactInternals; var r = Ze(), o = qn(e), i = vn(r, o); i.payload = t, n != null && (i.callback = n), t = Wn(e, i, o), t !== null && (Yt(t, e, o, r), Us(t, e, o)); }, enqueueReplaceState: function (e, t, n) { e = e._reactInternals; var r = Ze(), o = qn(e), i = vn(r, o); i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Wn(e, i, o), t !== null && (Yt(t, e, o, r), Us(t, e, o)); }, enqueueForceUpdate: function (e, t) { e = e._reactInternals; var n = Ze(), r = qn(e), o = vn(n, r); o.tag = 2, t != null && (o.callback = t), t = Wn(e, o, r), t !== null && (Yt(t, e, r, n), Us(t, e, r)); } };
function nh(e, t, n, r, o, i, s) { return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Si(n, r) || !Si(o, i) : !0; }
function O0(e, t, n) { var r = !1, o = Zn, i = t.contextType; return typeof i == "object" && i !== null ? i = It(i) : (o = ot(t) ? Sr : qe.current, r = t.contextTypes, i = (r = r != null) ? po(e, o) : Zn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = sl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t; }
function rh(e, t, n, r) { e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && sl.enqueueReplaceState(t, t.state, null); }
function mu(e, t, n, r) { var o = e.stateNode; o.props = n, o.state = e.memoizedState, o.refs = {}, Ud(e); var i = t.contextType; typeof i == "object" && i !== null ? o.context = It(i) : (i = ot(t) ? Sr : qe.current, o.context = po(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (hu(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && sl.enqueueReplaceState(o, o.state, null), va(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308); }
function yo(e, t) {
    try {
        var n = "", r = t;
        do
            n += W1(r), r = r.return;
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
function pc(e, t, n) { return { value: e, source: null, stack: n ?? null, digest: t ?? null }; }
function gu(e, t) { try {
    console.error(t.value);
}
catch (n) {
    setTimeout(function () { throw n; });
} }
var v2 = typeof WeakMap == "function" ? WeakMap : Map;
function L0(e, t, n) { n = vn(-1, n), n.tag = 3, n.payload = { element: null }; var r = t.value; return n.callback = function () { Ca || (Ca = !0, ku = r), gu(e, t); }, n; }
function D0(e, t, n) { n = vn(-1, n), n.tag = 3; var r = e.type.getDerivedStateFromError; if (typeof r == "function") {
    var o = t.value;
    n.payload = function () { return r(o); }, n.callback = function () { gu(e, t); };
} var i = e.stateNode; return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function () { gu(e, t), typeof r != "function" && (Gn === null ? Gn = new Set([this]) : Gn.add(this)); var s = t.stack; this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" }); }), n; }
function oh(e, t, n) { var r = e.pingCache; if (r === null) {
    r = e.pingCache = new v2;
    var o = new Set;
    r.set(t, o);
}
else
    o = r.get(t), o === void 0 && (o = new Set, r.set(t, o)); o.has(n) || (o.add(n), e = T2.bind(null, e, t, n), t.then(e, e)); }
function ih(e) { do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
        return e;
    e = e.return;
} while (e !== null); return null; }
function sh(e, t, n, r, o) { return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = vn(-1, 1), t.tag = 2, Wn(n, t, 1))), n.lanes |= 1), e); }
var w2 = An.ReactCurrentOwner, nt = !1;
function Je(e, t, n, r) { t.child = e === null ? u0(t, null, n, r) : mo(t, e.child, n, r); }
function ah(e, t, n, r, o) { n = n.render; var i = t.ref; return ao(t, o), r = Gd(e, t, n, r, i, o), n = qd(), e !== null && !nt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Cn(e, t, o)) : (ue && n && Ld(t), t.flags |= 1, Je(e, t, r, o), t.child); }
function lh(e, t, n, r, o) { if (e === null) {
    var i = n.type;
    return typeof i == "function" && !rf(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, M0(e, t, i, r, o)) : (e = qs(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
} if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Si, n(s, r) && e.ref === t.ref)
        return Cn(e, t, o);
} return t.flags |= 1, e = Kn(i, r), e.ref = t.ref, e.return = t, t.child = e; }
function M0(e, t, n, r, o) { if (e !== null) {
    var i = e.memoizedProps;
    if (Si(i, r) && e.ref === t.ref)
        if (nt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
            e.flags & 131072 && (nt = !0);
        else
            return t.lanes = e.lanes, Cn(e, t, o);
} return yu(e, t, n, r, o); }
function B0(e, t, n) { var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null; if (r.mode === "hidden")
    if (!(t.mode & 1))
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ie(to, yt), yt |= n;
    else {
        if (!(n & 1073741824))
            return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ie(to, yt), yt |= e, null;
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, ie(to, yt), yt |= r;
    }
else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ie(to, yt), yt |= r; return Je(e, t, o, n), t.child; }
function I0(e, t) { var n = t.ref; (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152); }
function yu(e, t, n, r, o) { var i = ot(n) ? Sr : qe.current; return i = po(t, i), ao(t, o), n = Gd(e, t, n, r, i, o), r = qd(), e !== null && !nt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Cn(e, t, o)) : (ue && r && Ld(t), t.flags |= 1, Je(e, t, n, o), t.child); }
function ch(e, t, n, r, o) { if (ot(n)) {
    var i = !0;
    pa(t);
}
else
    i = !1; if (ao(t, o), t.stateNode === null)
    Vs(e, t), O0(t, n, r), mu(t, n, r, o), r = !0;
else if (e === null) {
    var s = t.stateNode, a = t.memoizedProps;
    s.props = a;
    var c = s.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = It(u) : (u = ot(n) ? Sr : qe.current, u = po(t, u));
    var d = n.getDerivedStateFromProps, f = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || c !== u) && rh(t, s, r, u), On = !1;
    var p = t.memoizedState;
    s.state = p, va(t, r, s, o), c = t.memoizedState, a !== r || p !== c || rt.current || On ? (typeof d == "function" && (hu(t, n, d, r), c = t.memoizedState), (a = On || nh(t, n, a, r, p, c, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), s.props = r, s.state = c, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
}
else {
    s = t.stateNode, f0(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : Vt(t.type, a), s.props = u, f = t.pendingProps, p = s.context, c = n.contextType, typeof c == "object" && c !== null ? c = It(c) : (c = ot(n) ? Sr : qe.current, c = po(t, c));
    var w = n.getDerivedStateFromProps;
    (d = typeof w == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== f || p !== c) && rh(t, s, r, c), On = !1, p = t.memoizedState, s.state = p, va(t, r, s, o);
    var m = t.memoizedState;
    a !== f || p !== m || rt.current || On ? (typeof w == "function" && (hu(t, n, w, r), m = t.memoizedState), (u = On || nh(t, n, u, r, p, m, c) || !1) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, m, c), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, m, c)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), s.props = r, s.state = m, s.context = c, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
} return vu(e, t, n, r, i, o); }
function vu(e, t, n, r, o, i) { I0(e, t); var s = (t.flags & 128) !== 0; if (!r && !s)
    return o && Kp(t, n, !1), Cn(e, t, i); r = t.stateNode, w2.current = t; var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render(); return t.flags |= 1, e !== null && s ? (t.child = mo(t, e.child, null, i), t.child = mo(t, null, a, i)) : Je(e, t, a, i), t.memoizedState = r.state, o && Kp(t, n, !0), t.child; }
function $0(e) { var t = e.stateNode; t.pendingContext ? qp(e, t.pendingContext, t.pendingContext !== t.context) : t.context && qp(e, t.context, !1), zd(e, t.containerInfo); }
function uh(e, t, n, r, o) { return ho(), Md(o), t.flags |= 256, Je(e, t, n, r), t.child; }
var wu = { dehydrated: null, treeContext: null, retryLane: 0 };
function xu(e) { return { baseLanes: e, cachePool: null, transitions: null }; }
function F0(e, t, n) { var r = t.pendingProps, o = fe.current, i = !1, s = (t.flags & 128) !== 0, a; if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ie(fe, o & 1), e === null)
    return fu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = cl(s, r, 0, null), e = yr(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = xu(n), t.memoizedState = wu, e) : Qd(t, s)); if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null))
    return x2(e, t, s, r, a, o, n); if (i) {
    i = r.fallback, s = t.mode, o = e.child, a = o.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = Kn(o, c), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? i = Kn(a, i) : (i = yr(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? xu(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = wu, r;
} return i = e.child, e = i.sibling, r = Kn(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r; }
function Qd(e, t) { return t = cl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t; }
function Cs(e, t, n, r) { return r !== null && Md(r), mo(t, e.child, null, n), e = Qd(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e; }
function x2(e, t, n, r, o, i, s) { if (n)
    return t.flags & 256 ? (t.flags &= -257, r = pc(Error(j(422))), Cs(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = cl({ mode: "visible", children: r.children }, o, 0, null), i = yr(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && mo(t, e.child, null, s), t.child.memoizedState = xu(s), t.memoizedState = wu, i); if (!(t.mode & 1))
    return Cs(e, t, s, null); if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
        var a = r.dgst;
    return r = a, i = Error(j(419)), r = pc(i, r, void 0), Cs(e, t, s, r);
} if (a = (s & e.childLanes) !== 0, nt || a) {
    if (r = Oe, r !== null) {
        switch (s & -s) {
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
        o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Sn(e, o), Yt(r, e, o, -1));
    }
    return nf(), r = pc(Error(j(421))), Cs(e, t, s, r);
} return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = O2.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, vt = Vn(o.nextSibling), xt = t, ue = !0, Gt = null, e !== null && (Lt[Dt++] = gn, Lt[Dt++] = yn, Lt[Dt++] = Cr, gn = e.id, yn = e.overflow, Cr = t), t = Qd(t, r.children), t.flags |= 4096, t); }
function dh(e, t, n) { e.lanes |= t; var r = e.alternate; r !== null && (r.lanes |= t), pu(e.return, t, n); }
function hc(e, t, n, r, o) { var i = e.memoizedState; i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o); }
function U0(e, t, n) { var r = t.pendingProps, o = r.revealOrder, i = r.tail; if (Je(e, t, r.children, n), r = fe.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
else {
    if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null;) {
            if (e.tag === 13)
                e.memoizedState !== null && dh(e, n, t);
            else if (e.tag === 19)
                dh(e, n, t);
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
} if (ie(fe, r), !(t.mode & 1))
    t.memoizedState = null;
else
    switch (o) {
        case "forwards":
            for (n = t.child, o = null; n !== null;)
                e = n.alternate, e !== null && wa(e) === null && (o = n), n = n.sibling;
            n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), hc(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null, o = t.child, t.child = null; o !== null;) {
                if (e = o.alternate, e !== null && wa(e) === null) {
                    t.child = o;
                    break;
                }
                e = o.sibling, o.sibling = n, n = o, o = e;
            }
            hc(t, !0, n, null, i);
            break;
        case "together":
            hc(t, !1, null, null, void 0);
            break;
        default: t.memoizedState = null;
    } return t.child; }
function Vs(e, t) { !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2); }
function Cn(e, t, n) { if (e !== null && (t.dependencies = e.dependencies), Ar |= t.lanes, !(n & t.childLanes))
    return null; if (e !== null && t.child !== e.child)
    throw Error(j(153)); if (t.child !== null) {
    for (e = t.child, n = Kn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)
        e = e.sibling, n = n.sibling = Kn(e, e.pendingProps), n.return = t;
    n.sibling = null;
} return t.child; }
function b2(e, t, n) { switch (t.tag) {
    case 3:
        $0(t), ho();
        break;
    case 5:
        p0(t);
        break;
    case 1:
        ot(t.type) && pa(t);
        break;
    case 4:
        zd(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context, o = t.memoizedProps.value;
        ie(ga, r._currentValue), r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState, r !== null)
            return r.dehydrated !== null ? (ie(fe, fe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? F0(e, t, n) : (ie(fe, fe.current & 1), e = Cn(e, t, n), e !== null ? e.sibling : null);
        ie(fe, fe.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
            if (r)
                return U0(e, t, n);
            t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ie(fe, fe.current), r)
            break;
        return null;
    case 22:
    case 23: return t.lanes = 0, B0(e, t, n);
} return Cn(e, t, n); }
var z0, bu, H0, V0;
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
bu = function () { };
H0 = function (e, t, n, r) { var o = e.memoizedProps; if (o !== r) {
    e = t.stateNode, pr(ln.current);
    var i = null;
    switch (n) {
        case "input":
            o = Hc(e, o), r = Hc(e, r), i = [];
            break;
        case "select":
            o = he({}, o, { value: void 0 }), r = he({}, r, { value: void 0 }), i = [];
            break;
        case "textarea":
            o = Gc(e, o), r = Gc(e, r), i = [];
            break;
        default: typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = da);
    }
    Kc(n, r);
    var s;
    n = null;
    for (u in o)
        if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
            if (u === "style") {
                var a = o[u];
                for (s in a)
                    a.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
            }
            else
                u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (mi.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
        var c = r[u];
        if (a = o != null ? o[u] : void 0, r.hasOwnProperty(u) && c !== a && (c != null || a != null))
            if (u === "style")
                if (a) {
                    for (s in a)
                        !a.hasOwnProperty(s) || c && c.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                    for (s in c)
                        c.hasOwnProperty(s) && a[s] !== c[s] && (n || (n = {}), n[s] = c[s]);
                }
                else
                    n || (i || (i = []), i.push(u, n)), n = c;
            else
                u === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, a = a ? a.__html : void 0, c != null && a !== c && (i = i || []).push(u, c)) : u === "children" ? typeof c != "string" && typeof c != "number" || (i = i || []).push(u, "" + c) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (mi.hasOwnProperty(u) ? (c != null && u === "onScroll" && ae("scroll", e), i || a === c || (i = [])) : (i = i || []).push(u, c));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
} };
V0 = function (e, t, n, r) { n !== r && (t.flags |= 4); };
function Ko(e, t) { if (!ue)
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
function Ve(e) { var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0; if (t)
    for (var o = e.child; o !== null;)
        n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
else
    for (o = e.child; o !== null;)
        n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling; return e.subtreeFlags |= r, e.childLanes = n, t; }
function S2(e, t, n) { var r = t.pendingProps; switch (Dd(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14: return Ve(t), null;
    case 1: return ot(t.type) && fa(), Ve(t), null;
    case 3: return r = t.stateNode, go(), ce(rt), ce(qe), Vd(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (bs(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Gt !== null && (ju(Gt), Gt = null))), bu(e, t), Ve(t), null;
    case 5:
        Hd(t);
        var o = pr(Ni.current);
        if (n = t.type, e !== null && t.stateNode != null)
            H0(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(j(166));
                return Ve(t), null;
            }
            if (e = pr(ln.current), bs(t)) {
                r = t.stateNode, n = t.type;
                var i = t.memoizedProps;
                switch (r[sn] = t, r[Ai] = i, e = (t.mode & 1) !== 0, n) {
                    case "dialog":
                        ae("cancel", r), ae("close", r);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        ae("load", r);
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < ei.length; o++)
                            ae(ei[o], r);
                        break;
                    case "source":
                        ae("error", r);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        ae("error", r), ae("load", r);
                        break;
                    case "details":
                        ae("toggle", r);
                        break;
                    case "input":
                        xp(r, i), ae("invalid", r);
                        break;
                    case "select":
                        r._wrapperState = { wasMultiple: !!i.multiple }, ae("invalid", r);
                        break;
                    case "textarea": Sp(r, i), ae("invalid", r);
                }
                Kc(n, i), o = null;
                for (var s in i)
                    if (i.hasOwnProperty(s)) {
                        var a = i[s];
                        s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && xs(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && xs(r.textContent, a, e), o = ["children", "" + a]) : mi.hasOwnProperty(s) && a != null && s === "onScroll" && ae("scroll", r);
                    }
                switch (n) {
                    case "input":
                        fs(r), bp(r, i, !0);
                        break;
                    case "textarea":
                        fs(r), Cp(r);
                        break;
                    case "select":
                    case "option": break;
                    default: typeof i.onClick == "function" && (r.onclick = da);
                }
                r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
            }
            else {
                s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = vg(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[sn] = t, e[Ai] = r, z0(e, t, !1, !1), t.stateNode = e;
                e: {
                    switch (s = Yc(n, r), n) {
                        case "dialog":
                            ae("cancel", e), ae("close", e), o = r;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            ae("load", e), o = r;
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < ei.length; o++)
                                ae(ei[o], e);
                            o = r;
                            break;
                        case "source":
                            ae("error", e), o = r;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            ae("error", e), ae("load", e), o = r;
                            break;
                        case "details":
                            ae("toggle", e), o = r;
                            break;
                        case "input":
                            xp(e, r), o = Hc(e, r), ae("invalid", e);
                            break;
                        case "option":
                            o = r;
                            break;
                        case "select":
                            e._wrapperState = { wasMultiple: !!r.multiple }, o = he({}, r, { value: void 0 }), ae("invalid", e);
                            break;
                        case "textarea":
                            Sp(e, r), o = Gc(e, r), ae("invalid", e);
                            break;
                        default: o = r;
                    }
                    Kc(n, o), a = o;
                    for (i in a)
                        if (a.hasOwnProperty(i)) {
                            var c = a[i];
                            i === "style" ? bg(e, c) : i === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && wg(e, c)) : i === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && gi(e, c) : typeof c == "number" && gi(e, "" + c) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (mi.hasOwnProperty(i) ? c != null && i === "onScroll" && ae("scroll", e) : c != null && xd(e, i, c, s));
                        }
                    switch (n) {
                        case "input":
                            fs(e), bp(e, r, !1);
                            break;
                        case "textarea":
                            fs(e), Cp(e);
                            break;
                        case "option":
                            r.value != null && e.setAttribute("value", "" + Jn(r.value));
                            break;
                        case "select":
                            e.multiple = !!r.multiple, i = r.value, i != null ? ro(e, !!r.multiple, i, !1) : r.defaultValue != null && ro(e, !!r.multiple, r.defaultValue, !0);
                            break;
                        default: typeof o.onClick == "function" && (e.onclick = da);
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
        return Ve(t), null;
    case 6:
        if (e && t.stateNode != null)
            V0(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(j(166));
            if (n = pr(Ni.current), pr(ln.current), bs(t)) {
                if (r = t.stateNode, n = t.memoizedProps, r[sn] = t, (i = r.nodeValue !== n) && (e = xt, e !== null))
                    switch (e.tag) {
                        case 3:
                            xs(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5: e.memoizedProps.suppressHydrationWarning !== !0 && xs(r.nodeValue, n, (e.mode & 1) !== 0);
                    }
                i && (t.flags |= 4);
            }
            else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[sn] = t, t.stateNode = r;
        }
        return Ve(t), null;
    case 13:
        if (ce(fe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (ue && vt !== null && t.mode & 1 && !(t.flags & 128))
                l0(), ho(), t.flags |= 98560, i = !1;
            else if (i = bs(t), r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(j(318));
                    if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
                        throw Error(j(317));
                    i[sn] = t;
                }
                else
                    ho(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                Ve(t), i = !1;
            }
            else
                Gt !== null && (ju(Gt), Gt = null), i = !0;
            if (!i)
                return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || fe.current & 1 ? je === 0 && (je = 3) : nf())), t.updateQueue !== null && (t.flags |= 4), Ve(t), null);
    case 4: return go(), bu(e, t), e === null && Ci(t.stateNode.containerInfo), Ve(t), null;
    case 10: return $d(t.type._context), Ve(t), null;
    case 17: return ot(t.type) && fa(), Ve(t), null;
    case 19:
        if (ce(fe), i = t.memoizedState, i === null)
            return Ve(t), null;
        if (r = (t.flags & 128) !== 0, s = i.rendering, s === null)
            if (r)
                Ko(i, !1);
            else {
                if (je !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null;) {
                        if (s = wa(e), s !== null) {
                            for (t.flags |= 128, Ko(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;)
                                i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                            return ie(fe, fe.current & 1 | 2), t.child;
                        }
                        e = e.sibling;
                    }
                i.tail !== null && be() > vo && (t.flags |= 128, r = !0, Ko(i, !1), t.lanes = 4194304);
            }
        else {
            if (!r)
                if (e = wa(s), e !== null) {
                    if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ko(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !ue)
                        return Ve(t), null;
                }
                else
                    2 * be() - i.renderingStartTime > vo && n !== 1073741824 && (t.flags |= 128, r = !0, Ko(i, !1), t.lanes = 4194304);
            i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = be(), t.sibling = null, n = fe.current, ie(fe, r ? n & 1 | 2 : n & 1), t) : (Ve(t), null);
    case 22:
    case 23: return tf(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? yt & 1073741824 && (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ve(t), null;
    case 24: return null;
    case 25: return null;
} throw Error(j(156, t.tag)); }
function C2(e, t) { switch (Dd(t), t.tag) {
    case 1: return ot(t.type) && fa(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3: return go(), ce(rt), ce(qe), Vd(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5: return Hd(t), null;
    case 13:
        if (ce(fe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(j(340));
            ho();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19: return ce(fe), null;
    case 4: return go(), null;
    case 10: return $d(t.type._context), null;
    case 22:
    case 23: return tf(), null;
    case 24: return null;
    default: return null;
} }
var Es = !1, We = !1, E2 = typeof WeakSet == "function" ? WeakSet : Set, T = null;
function eo(e, t) { var n = e.ref; if (n !== null)
    if (typeof n == "function")
        try {
            n(null);
        }
        catch (r) {
            me(e, t, r);
        }
    else
        n.current = null; }
function Su(e, t, n) { try {
    n();
}
catch (r) {
    me(e, t, r);
} }
var fh = !1;
function A2(e, t) { if (iu = la, e = Yg(), Od(e)) {
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
                var s = 0, a = -1, c = -1, u = 0, d = 0, f = e, p = null;
                t: for (;;) {
                    for (var w; f !== n || o !== 0 && f.nodeType !== 3 || (a = s + o), f !== i || r !== 0 && f.nodeType !== 3 || (c = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (w = f.firstChild) !== null;)
                        p = f, f = w;
                    for (;;) {
                        if (f === e)
                            break t;
                        if (p === n && ++u === o && (a = s), p === i && ++d === r && (c = s), (w = f.nextSibling) !== null)
                            break;
                        f = p, p = f.parentNode;
                    }
                    f = w;
                }
                n = a === -1 || c === -1 ? null : { start: a, end: c };
            }
            else
                n = null;
        }
    n = n || { start: 0, end: 0 };
}
else
    n = null; for (su = { focusedElem: e, selectionRange: n }, la = !1, T = t; T !== null;)
    if (t = T, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, T = e;
    else
        for (; T !== null;) {
            t = T;
            try {
                var m = t.alternate;
                if (t.flags & 1024)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15: break;
                        case 1:
                            if (m !== null) {
                                var b = m.memoizedProps, x = m.memoizedState, g = t.stateNode, h = g.getSnapshotBeforeUpdate(t.elementType === t.type ? b : Vt(t.type, b), x);
                                g.__reactInternalSnapshotBeforeUpdate = h;
                            }
                            break;
                        case 3:
                            var y = t.stateNode.containerInfo;
                            y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17: break;
                        default: throw Error(j(163));
                    }
            }
            catch (S) {
                me(t, t.return, S);
            }
            if (e = t.sibling, e !== null) {
                e.return = t.return, T = e;
                break;
            }
            T = t.return;
        } return m = fh, fh = !1, m; }
function ci(e, t, n) { var r = t.updateQueue; if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
        if ((o.tag & e) === e) {
            var i = o.destroy;
            o.destroy = void 0, i !== void 0 && Su(t, n, i);
        }
        o = o.next;
    } while (o !== r);
} }
function al(e, t) { if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
        if ((n.tag & e) === e) {
            var r = n.create;
            n.destroy = r();
        }
        n = n.next;
    } while (n !== t);
} }
function Cu(e) { var t = e.ref; if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
        case 5:
            e = n;
            break;
        default: e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
} }
function W0(e) { var t = e.alternate; t !== null && (e.alternate = null, W0(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[sn], delete t[Ai], delete t[cu], delete t[a2], delete t[l2])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null; }
function G0(e) { return e.tag === 5 || e.tag === 3 || e.tag === 4; }
function ph(e) { e: for (;;) {
    for (; e.sibling === null;) {
        if (e.return === null || G0(e.return))
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
function Eu(e, t, n) { var r = e.tag; if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = da));
else if (r !== 4 && (e = e.child, e !== null))
    for (Eu(e, t, n), e = e.sibling; e !== null;)
        Eu(e, t, n), e = e.sibling; }
function Au(e, t, n) { var r = e.tag; if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
else if (r !== 4 && (e = e.child, e !== null))
    for (Au(e, t, n), e = e.sibling; e !== null;)
        Au(e, t, n), e = e.sibling; }
var Be = null, Wt = !1;
function jn(e, t, n) { for (n = n.child; n !== null;)
    q0(e, t, n), n = n.sibling; }
function q0(e, t, n) { if (an && typeof an.onCommitFiberUnmount == "function")
    try {
        an.onCommitFiberUnmount(Xa, n);
    }
    catch { } switch (n.tag) {
    case 5: We || eo(n, t);
    case 6:
        var r = Be, o = Wt;
        Be = null, jn(e, t, n), Be = r, Wt = o, Be !== null && (Wt ? (e = Be, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Be.removeChild(n.stateNode));
        break;
    case 18:
        Be !== null && (Wt ? (e = Be, n = n.stateNode, e.nodeType === 8 ? ac(e.parentNode, n) : e.nodeType === 1 && ac(e, n), xi(e)) : ac(Be, n.stateNode));
        break;
    case 4:
        r = Be, o = Wt, Be = n.stateNode.containerInfo, Wt = !0, jn(e, t, n), Be = r, Wt = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!We && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
            o = r = r.next;
            do {
                var i = o, s = i.destroy;
                i = i.tag, s !== void 0 && (i & 2 || i & 4) && Su(n, t, s), o = o.next;
            } while (o !== r);
        }
        jn(e, t, n);
        break;
    case 1:
        if (!We && (eo(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
            }
            catch (a) {
                me(n, t, a);
            }
        jn(e, t, n);
        break;
    case 21:
        jn(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (We = (r = We) || n.memoizedState !== null, jn(e, t, n), We = r) : jn(e, t, n);
        break;
    default: jn(e, t, n);
} }
function hh(e) { var t = e.updateQueue; if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new E2), t.forEach(function (r) { var o = L2.bind(null, e, r); n.has(r) || (n.add(r), r.then(o, o)); });
} }
function Ht(e, t) { var n = t.deletions; if (n !== null)
    for (var r = 0; r < n.length; r++) {
        var o = n[r];
        try {
            var i = e, s = t, a = s;
            e: for (; a !== null;) {
                switch (a.tag) {
                    case 5:
                        Be = a.stateNode, Wt = !1;
                        break e;
                    case 3:
                        Be = a.stateNode.containerInfo, Wt = !0;
                        break e;
                    case 4:
                        Be = a.stateNode.containerInfo, Wt = !0;
                        break e;
                }
                a = a.return;
            }
            if (Be === null)
                throw Error(j(160));
            q0(i, s, o), Be = null, Wt = !1;
            var c = o.alternate;
            c !== null && (c.return = null), o.return = null;
        }
        catch (u) {
            me(o, t, u);
        }
    } if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null;)
        K0(t, e), t = t.sibling; }
function K0(e, t) { var n = e.alternate, r = e.flags; switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Ht(t, e), tn(e), r & 4) {
            try {
                ci(3, e, e.return), al(3, e);
            }
            catch (b) {
                me(e, e.return, b);
            }
            try {
                ci(5, e, e.return);
            }
            catch (b) {
                me(e, e.return, b);
            }
        }
        break;
    case 1:
        Ht(t, e), tn(e), r & 512 && n !== null && eo(n, n.return);
        break;
    case 5:
        if (Ht(t, e), tn(e), r & 512 && n !== null && eo(n, n.return), e.flags & 32) {
            var o = e.stateNode;
            try {
                gi(o, "");
            }
            catch (b) {
                me(e, e.return, b);
            }
        }
        if (r & 4 && (o = e.stateNode, o != null)) {
            var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, a = e.type, c = e.updateQueue;
            if (e.updateQueue = null, c !== null)
                try {
                    a === "input" && i.type === "radio" && i.name != null && gg(o, i), Yc(a, s);
                    var u = Yc(a, i);
                    for (s = 0; s < c.length; s += 2) {
                        var d = c[s], f = c[s + 1];
                        d === "style" ? bg(o, f) : d === "dangerouslySetInnerHTML" ? wg(o, f) : d === "children" ? gi(o, f) : xd(o, d, f, u);
                    }
                    switch (a) {
                        case "input":
                            Vc(o, i);
                            break;
                        case "textarea":
                            yg(o, i);
                            break;
                        case "select":
                            var p = o._wrapperState.wasMultiple;
                            o._wrapperState.wasMultiple = !!i.multiple;
                            var w = i.value;
                            w != null ? ro(o, !!i.multiple, w, !1) : p !== !!i.multiple && (i.defaultValue != null ? ro(o, !!i.multiple, i.defaultValue, !0) : ro(o, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    o[Ai] = i;
                }
                catch (b) {
                    me(e, e.return, b);
                }
        }
        break;
    case 6:
        if (Ht(t, e), tn(e), r & 4) {
            if (e.stateNode === null)
                throw Error(j(162));
            o = e.stateNode, i = e.memoizedProps;
            try {
                o.nodeValue = i;
            }
            catch (b) {
                me(e, e.return, b);
            }
        }
        break;
    case 3:
        if (Ht(t, e), tn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                xi(t.containerInfo);
            }
            catch (b) {
                me(e, e.return, b);
            }
        break;
    case 4:
        Ht(t, e), tn(e);
        break;
    case 13:
        Ht(t, e), tn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Xd = be())), r & 4 && hh(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (We = (u = We) || d, Ht(t, e), We = u) : Ht(t, e), tn(e), r & 8192) {
            if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1)
                for (T = e, d = e.child; d !== null;) {
                    for (f = T = d; T !== null;) {
                        switch (p = T, w = p.child, p.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                ci(4, p, p.return);
                                break;
                            case 1:
                                eo(p, p.return);
                                var m = p.stateNode;
                                if (typeof m.componentWillUnmount == "function") {
                                    r = p, n = p.return;
                                    try {
                                        t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount();
                                    }
                                    catch (b) {
                                        me(r, n, b);
                                    }
                                }
                                break;
                            case 5:
                                eo(p, p.return);
                                break;
                            case 22: if (p.memoizedState !== null) {
                                gh(f);
                                continue;
                            }
                        }
                        w !== null ? (w.return = p, T = w) : gh(f);
                    }
                    d = d.sibling;
                }
            e: for (d = null, f = e;;) {
                if (f.tag === 5) {
                    if (d === null) {
                        d = f;
                        try {
                            o = f.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = f.stateNode, c = f.memoizedProps.style, s = c != null && c.hasOwnProperty("display") ? c.display : null, a.style.display = xg("display", s));
                        }
                        catch (b) {
                            me(e, e.return, b);
                        }
                    }
                }
                else if (f.tag === 6) {
                    if (d === null)
                        try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                        }
                        catch (b) {
                            me(e, e.return, b);
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
                    d === f && (d = null), f = f.return;
                }
                d === f && (d = null), f.sibling.return = f.return, f = f.sibling;
            }
        }
        break;
    case 19:
        Ht(t, e), tn(e), r & 4 && hh(e);
        break;
    case 21: break;
    default: Ht(t, e), tn(e);
} }
function tn(e) { var t = e.flags; if (t & 2) {
    try {
        e: {
            for (var n = e.return; n !== null;) {
                if (G0(n)) {
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
                r.flags & 32 && (gi(o, ""), r.flags &= -33);
                var i = ph(e);
                Au(e, i, o);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo, a = ph(e);
                Eu(e, a, s);
                break;
            default: throw Error(j(161));
        }
    }
    catch (c) {
        me(e, e.return, c);
    }
    e.flags &= -3;
} t & 4096 && (e.flags &= -4097); }
function k2(e, t, n) { T = e, Y0(e); }
function Y0(e, t, n) { for (var r = (e.mode & 1) !== 0; T !== null;) {
    var o = T, i = o.child;
    if (o.tag === 22 && r) {
        var s = o.memoizedState !== null || Es;
        if (!s) {
            var a = o.alternate, c = a !== null && a.memoizedState !== null || We;
            a = Es;
            var u = We;
            if (Es = s, (We = c) && !u)
                for (T = o; T !== null;)
                    s = T, c = s.child, s.tag === 22 && s.memoizedState !== null ? yh(o) : c !== null ? (c.return = s, T = c) : yh(o);
            for (; i !== null;)
                T = i, Y0(i), i = i.sibling;
            T = o, Es = a, We = u;
        }
        mh(e);
    }
    else
        o.subtreeFlags & 8772 && i !== null ? (i.return = o, T = i) : mh(e);
} }
function mh(e) { for (; T !== null;) {
    var t = T;
    if (t.flags & 8772) {
        var n = t.alternate;
        try {
            if (t.flags & 8772)
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        We || al(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !We)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : Vt(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                            }
                        var i = t.updateQueue;
                        i !== null && Xp(t, i, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null, t.child !== null)
                                switch (t.child.tag) {
                                    case 5:
                                        n = t.child.stateNode;
                                        break;
                                    case 1: n = t.child.stateNode;
                                }
                            Xp(t, s, n);
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var c = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    c.autoFocus && n.focus();
                                    break;
                                case "img": c.src && (n.src = c.src);
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
                                var d = u.memoizedState;
                                if (d !== null) {
                                    var f = d.dehydrated;
                                    f !== null && xi(f);
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
            We || t.flags & 512 && Cu(t);
        }
        catch (p) {
            me(t, t.return, p);
        }
    }
    if (t === e) {
        T = null;
        break;
    }
    if (n = t.sibling, n !== null) {
        n.return = t.return, T = n;
        break;
    }
    T = t.return;
} }
function gh(e) { for (; T !== null;) {
    var t = T;
    if (t === e) {
        T = null;
        break;
    }
    var n = t.sibling;
    if (n !== null) {
        n.return = t.return, T = n;
        break;
    }
    T = t.return;
} }
function yh(e) { for (; T !== null;) {
    var t = T;
    try {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    al(4, t);
                }
                catch (c) {
                    me(t, n, c);
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount();
                    }
                    catch (c) {
                        me(t, o, c);
                    }
                }
                var i = t.return;
                try {
                    Cu(t);
                }
                catch (c) {
                    me(t, i, c);
                }
                break;
            case 5:
                var s = t.return;
                try {
                    Cu(t);
                }
                catch (c) {
                    me(t, s, c);
                }
        }
    }
    catch (c) {
        me(t, t.return, c);
    }
    if (t === e) {
        T = null;
        break;
    }
    var a = t.sibling;
    if (a !== null) {
        a.return = t.return, T = a;
        break;
    }
    T = t.return;
} }
var N2 = Math.ceil, Sa = An.ReactCurrentDispatcher, Jd = An.ReactCurrentOwner, Bt = An.ReactCurrentBatchConfig, Y = 0, Oe = null, Ee = null, Ie = 0, yt = 0, to = tr(0), je = 0, _i = null, Ar = 0, ll = 0, Zd = 0, ui = null, tt = null, Xd = 0, vo = 1 / 0, pn = null, Ca = !1, ku = null, Gn = null, As = !1, Bn = null, Ea = 0, di = 0, Nu = null, Ws = -1, Gs = 0;
function Ze() { return Y & 6 ? be() : Ws !== -1 ? Ws : Ws = be(); }
function qn(e) { return e.mode & 1 ? Y & 2 && Ie !== 0 ? Ie & -Ie : u2.transition !== null ? (Gs === 0 && (Gs = Og()), Gs) : (e = ne, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Fg(e.type)), e) : 1; }
function Yt(e, t, n, r) { if (50 < di)
    throw di = 0, Nu = null, Error(j(185)); Vi(e, n, r), (!(Y & 2) || e !== Oe) && (e === Oe && (!(Y & 2) && (ll |= n), je === 4 && Dn(e, Ie)), it(e, r), n === 1 && Y === 0 && !(t.mode & 1) && (vo = be() + 500, ol && nr())); }
function it(e, t) { var n = e.callbackNode; ux(e, t); var r = aa(e, e === Oe ? Ie : 0); if (r === 0)
    n !== null && kp(n), e.callbackNode = null, e.callbackPriority = 0;
else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && kp(n), t === 1)
        e.tag === 0 ? c2(vh.bind(null, e)) : i0(vh.bind(null, e)), i2(function () { !(Y & 6) && nr(); }), n = null;
    else {
        switch (Lg(r)) {
            case 1:
                n = Ad;
                break;
            case 4:
                n = _g;
                break;
            case 16:
                n = sa;
                break;
            case 536870912:
                n = Tg;
                break;
            default: n = sa;
        }
        n = ry(n, Q0.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
} }
function Q0(e, t) { if (Ws = -1, Gs = 0, Y & 6)
    throw Error(j(327)); var n = e.callbackNode; if (lo() && e.callbackNode !== n)
    return null; var r = aa(e, e === Oe ? Ie : 0); if (r === 0)
    return null; if (r & 30 || r & e.expiredLanes || t)
    t = Aa(e, r);
else {
    t = r;
    var o = Y;
    Y |= 2;
    var i = Z0();
    (Oe !== e || Ie !== t) && (pn = null, vo = be() + 500, gr(e, t));
    do
        try {
            R2();
            break;
        }
        catch (a) {
            J0(e, a);
        }
    while (!0);
    Id(), Sa.current = i, Y = o, Ee !== null ? t = 0 : (Oe = null, Ie = 0, t = je);
} if (t !== 0) {
    if (t === 2 && (o = eu(e), o !== 0 && (r = o, t = Pu(e, o))), t === 1)
        throw n = _i, gr(e, 0), Dn(e, r), it(e, be()), n;
    if (t === 6)
        Dn(e, r);
    else {
        if (o = e.current.alternate, !(r & 30) && !P2(o) && (t = Aa(e, r), t === 2 && (i = eu(e), i !== 0 && (r = i, t = Pu(e, i))), t === 1))
            throw n = _i, gr(e, 0), Dn(e, r), it(e, be()), n;
        switch (e.finishedWork = o, e.finishedLanes = r, t) {
            case 0:
            case 1: throw Error(j(345));
            case 2:
                lr(e, tt, pn);
                break;
            case 3:
                if (Dn(e, r), (r & 130023424) === r && (t = Xd + 500 - be(), 10 < t)) {
                    if (aa(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes, (o & r) !== r) {
                        Ze(), e.pingedLanes |= e.suspendedLanes & o;
                        break;
                    }
                    e.timeoutHandle = lu(lr.bind(null, e, tt, pn), t);
                    break;
                }
                lr(e, tt, pn);
                break;
            case 4:
                if (Dn(e, r), (r & 4194240) === r)
                    break;
                for (t = e.eventTimes, o = -1; 0 < r;) {
                    var s = 31 - Kt(r);
                    i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
                }
                if (r = o, r = be() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * N2(r / 1960)) - r, 10 < r) {
                    e.timeoutHandle = lu(lr.bind(null, e, tt, pn), r);
                    break;
                }
                lr(e, tt, pn);
                break;
            case 5:
                lr(e, tt, pn);
                break;
            default: throw Error(j(329));
        }
    }
} return it(e, be()), e.callbackNode === n ? Q0.bind(null, e) : null; }
function Pu(e, t) { var n = ui; return e.current.memoizedState.isDehydrated && (gr(e, t).flags |= 256), e = Aa(e, t), e !== 2 && (t = tt, tt = n, t !== null && ju(t)), e; }
function ju(e) { tt === null ? tt = e : tt.push.apply(tt, e); }
function P2(e) { for (var t = e;;) {
    if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null))
            for (var r = 0; r < n.length; r++) {
                var o = n[r], i = o.getSnapshot;
                o = o.value;
                try {
                    if (!Jt(i(), o))
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
function Dn(e, t) { for (t &= ~Zd, t &= ~ll, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
    var n = 31 - Kt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
} }
function vh(e) { if (Y & 6)
    throw Error(j(327)); lo(); var t = aa(e, 0); if (!(t & 1))
    return it(e, be()), null; var n = Aa(e, t); if (e.tag !== 0 && n === 2) {
    var r = eu(e);
    r !== 0 && (t = r, n = Pu(e, r));
} if (n === 1)
    throw n = _i, gr(e, 0), Dn(e, t), it(e, be()), n; if (n === 6)
    throw Error(j(345)); return e.finishedWork = e.current.alternate, e.finishedLanes = t, lr(e, tt, pn), it(e, be()), null; }
function ef(e, t) { var n = Y; Y |= 1; try {
    return e(t);
}
finally {
    Y = n, Y === 0 && (vo = be() + 500, ol && nr());
} }
function kr(e) { Bn !== null && Bn.tag === 0 && !(Y & 6) && lo(); var t = Y; Y |= 1; var n = Bt.transition, r = ne; try {
    if (Bt.transition = null, ne = 1, e)
        return e();
}
finally {
    ne = r, Bt.transition = n, Y = t, !(Y & 6) && nr();
} }
function tf() { yt = to.current, ce(to); }
function gr(e, t) { e.finishedWork = null, e.finishedLanes = 0; var n = e.timeoutHandle; if (n !== -1 && (e.timeoutHandle = -1, o2(n)), Ee !== null)
    for (n = Ee.return; n !== null;) {
        var r = n;
        switch (Dd(r), r.tag) {
            case 1:
                r = r.type.childContextTypes, r != null && fa();
                break;
            case 3:
                go(), ce(rt), ce(qe), Vd();
                break;
            case 5:
                Hd(r);
                break;
            case 4:
                go();
                break;
            case 13:
                ce(fe);
                break;
            case 19:
                ce(fe);
                break;
            case 10:
                $d(r.type._context);
                break;
            case 22:
            case 23: tf();
        }
        n = n.return;
    } if (Oe = e, Ee = e = Kn(e.current, null), Ie = yt = t, je = 0, _i = null, Zd = ll = Ar = 0, tt = ui = null, fr !== null) {
    for (t = 0; t < fr.length; t++)
        if (n = fr[t], r = n.interleaved, r !== null) {
            n.interleaved = null;
            var o = r.next, i = n.pending;
            if (i !== null) {
                var s = i.next;
                i.next = o, r.next = s;
            }
            n.pending = r;
        }
    fr = null;
} return e; }
function J0(e, t) { do {
    var n = Ee;
    try {
        if (Id(), zs.current = ba, xa) {
            for (var r = pe.memoizedState; r !== null;) {
                var o = r.queue;
                o !== null && (o.pending = null), r = r.next;
            }
            xa = !1;
        }
        if (Er = 0, _e = Pe = pe = null, li = !1, Pi = 0, Jd.current = null, n === null || n.return === null) {
            je = 1, _i = t, Ee = null;
            break;
        }
        e: {
            var i = e, s = n.return, a = n, c = t;
            if (t = Ie, a.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
                var u = c, d = a, f = d.tag;
                if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                    var p = d.alternate;
                    p ? (d.updateQueue = p.updateQueue, d.memoizedState = p.memoizedState, d.lanes = p.lanes) : (d.updateQueue = null, d.memoizedState = null);
                }
                var w = ih(s);
                if (w !== null) {
                    w.flags &= -257, sh(w, s, a, i, t), w.mode & 1 && oh(i, u, t), t = w, c = u;
                    var m = t.updateQueue;
                    if (m === null) {
                        var b = new Set;
                        b.add(c), t.updateQueue = b;
                    }
                    else
                        m.add(c);
                    break e;
                }
                else {
                    if (!(t & 1)) {
                        oh(i, u, t), nf();
                        break e;
                    }
                    c = Error(j(426));
                }
            }
            else if (ue && a.mode & 1) {
                var x = ih(s);
                if (x !== null) {
                    !(x.flags & 65536) && (x.flags |= 256), sh(x, s, a, i, t), Md(yo(c, a));
                    break e;
                }
            }
            i = c = yo(c, a), je !== 4 && (je = 2), ui === null ? ui = [i] : ui.push(i), i = s;
            do {
                switch (i.tag) {
                    case 3:
                        i.flags |= 65536, t &= -t, i.lanes |= t;
                        var g = L0(i, c, t);
                        Zp(i, g);
                        break e;
                    case 1:
                        a = c;
                        var h = i.type, y = i.stateNode;
                        if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Gn === null || !Gn.has(y)))) {
                            i.flags |= 65536, t &= -t, i.lanes |= t;
                            var S = D0(i, a, t);
                            Zp(i, S);
                            break e;
                        }
                }
                i = i.return;
            } while (i !== null);
        }
        ey(n);
    }
    catch (C) {
        t = C, Ee === n && n !== null && (Ee = n = n.return);
        continue;
    }
    break;
} while (!0); }
function Z0() { var e = Sa.current; return Sa.current = ba, e === null ? ba : e; }
function nf() { (je === 0 || je === 3 || je === 2) && (je = 4), Oe === null || !(Ar & 268435455) && !(ll & 268435455) || Dn(Oe, Ie); }
function Aa(e, t) { var n = Y; Y |= 2; var r = Z0(); (Oe !== e || Ie !== t) && (pn = null, gr(e, t)); do
    try {
        j2();
        break;
    }
    catch (o) {
        J0(e, o);
    }
while (!0); if (Id(), Y = n, Sa.current = r, Ee !== null)
    throw Error(j(261)); return Oe = null, Ie = 0, je; }
function j2() { for (; Ee !== null;)
    X0(Ee); }
function R2() { for (; Ee !== null && !tx();)
    X0(Ee); }
function X0(e) { var t = ny(e.alternate, e, yt); e.memoizedProps = e.pendingProps, t === null ? ey(e) : Ee = t, Jd.current = null; }
function ey(e) { var t = e; do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
        if (n = C2(n, t), n !== null) {
            n.flags &= 32767, Ee = n;
            return;
        }
        if (e !== null)
            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
            je = 6, Ee = null;
            return;
        }
    }
    else if (n = S2(n, t, yt), n !== null) {
        Ee = n;
        return;
    }
    if (t = t.sibling, t !== null) {
        Ee = t;
        return;
    }
    Ee = t = e;
} while (t !== null); je === 0 && (je = 5); }
function lr(e, t, n) { var r = ne, o = Bt.transition; try {
    Bt.transition = null, ne = 1, _2(e, t, n, r);
}
finally {
    Bt.transition = o, ne = r;
} return null; }
function _2(e, t, n, r) { do
    lo();
while (Bn !== null); if (Y & 6)
    throw Error(j(327)); n = e.finishedWork; var o = e.finishedLanes; if (n === null)
    return null; if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(j(177)); e.callbackNode = null, e.callbackPriority = 0; var i = n.lanes | n.childLanes; if (dx(e, i), e === Oe && (Ee = Oe = null, Ie = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || As || (As = !0, ry(sa, function () { return lo(), null; })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Bt.transition, Bt.transition = null;
    var s = ne;
    ne = 1;
    var a = Y;
    Y |= 4, Jd.current = null, A2(e, n), K0(n, e), Jx(su), la = !!iu, su = iu = null, e.current = n, k2(n), nx(), Y = a, ne = s, Bt.transition = i;
}
else
    e.current = n; if (As && (As = !1, Bn = e, Ea = o), i = e.pendingLanes, i === 0 && (Gn = null), ix(n.stateNode), it(e, be()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest }); if (Ca)
    throw Ca = !1, e = ku, ku = null, e; return Ea & 1 && e.tag !== 0 && lo(), i = e.pendingLanes, i & 1 ? e === Nu ? di++ : (di = 0, Nu = e) : di = 0, nr(), null; }
function lo() { if (Bn !== null) {
    var e = Lg(Ea), t = Bt.transition, n = ne;
    try {
        if (Bt.transition = null, ne = 16 > e ? 16 : e, Bn === null)
            var r = !1;
        else {
            if (e = Bn, Bn = null, Ea = 0, Y & 6)
                throw Error(j(331));
            var o = Y;
            for (Y |= 4, T = e.current; T !== null;) {
                var i = T, s = i.child;
                if (T.flags & 16) {
                    var a = i.deletions;
                    if (a !== null) {
                        for (var c = 0; c < a.length; c++) {
                            var u = a[c];
                            for (T = u; T !== null;) {
                                var d = T;
                                switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15: ci(8, d, i);
                                }
                                var f = d.child;
                                if (f !== null)
                                    f.return = d, T = f;
                                else
                                    for (; T !== null;) {
                                        d = T;
                                        var p = d.sibling, w = d.return;
                                        if (W0(d), d === u) {
                                            T = null;
                                            break;
                                        }
                                        if (p !== null) {
                                            p.return = w, T = p;
                                            break;
                                        }
                                        T = w;
                                    }
                            }
                        }
                        var m = i.alternate;
                        if (m !== null) {
                            var b = m.child;
                            if (b !== null) {
                                m.child = null;
                                do {
                                    var x = b.sibling;
                                    b.sibling = null, b = x;
                                } while (b !== null);
                            }
                        }
                        T = i;
                    }
                }
                if (i.subtreeFlags & 2064 && s !== null)
                    s.return = i, T = s;
                else
                    e: for (; T !== null;) {
                        if (i = T, i.flags & 2048)
                            switch (i.tag) {
                                case 0:
                                case 11:
                                case 15: ci(9, i, i.return);
                            }
                        var g = i.sibling;
                        if (g !== null) {
                            g.return = i.return, T = g;
                            break e;
                        }
                        T = i.return;
                    }
            }
            var h = e.current;
            for (T = h; T !== null;) {
                s = T;
                var y = s.child;
                if (s.subtreeFlags & 2064 && y !== null)
                    y.return = s, T = y;
                else
                    e: for (s = h; T !== null;) {
                        if (a = T, a.flags & 2048)
                            try {
                                switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15: al(9, a);
                                }
                            }
                            catch (C) {
                                me(a, a.return, C);
                            }
                        if (a === s) {
                            T = null;
                            break e;
                        }
                        var S = a.sibling;
                        if (S !== null) {
                            S.return = a.return, T = S;
                            break e;
                        }
                        T = a.return;
                    }
            }
            if (Y = o, nr(), an && typeof an.onPostCommitFiberRoot == "function")
                try {
                    an.onPostCommitFiberRoot(Xa, e);
                }
                catch { }
            r = !0;
        }
        return r;
    }
    finally {
        ne = n, Bt.transition = t;
    }
} return !1; }
function wh(e, t, n) { t = yo(n, t), t = L0(e, t, 1), e = Wn(e, t, 1), t = Ze(), e !== null && (Vi(e, 1, t), it(e, t)); }
function me(e, t, n) { if (e.tag === 3)
    wh(e, e, n);
else
    for (; t !== null;) {
        if (t.tag === 3) {
            wh(t, e, n);
            break;
        }
        else if (t.tag === 1) {
            var r = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Gn === null || !Gn.has(r))) {
                e = yo(n, e), e = D0(t, e, 1), t = Wn(t, e, 1), e = Ze(), t !== null && (Vi(t, 1, e), it(t, e));
                break;
            }
        }
        t = t.return;
    } }
function T2(e, t, n) { var r = e.pingCache; r !== null && r.delete(t), t = Ze(), e.pingedLanes |= e.suspendedLanes & n, Oe === e && (Ie & n) === n && (je === 4 || je === 3 && (Ie & 130023424) === Ie && 500 > be() - Xd ? gr(e, 0) : Zd |= n), it(e, t); }
function ty(e, t) { t === 0 && (e.mode & 1 ? (t = ms, ms <<= 1, !(ms & 130023424) && (ms = 4194304)) : t = 1); var n = Ze(); e = Sn(e, t), e !== null && (Vi(e, t, n), it(e, n)); }
function O2(e) { var t = e.memoizedState, n = 0; t !== null && (n = t.retryLane), ty(e, n); }
function L2(e, t) { var n = 0; switch (e.tag) {
    case 13:
        var r = e.stateNode, o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default: throw Error(j(314));
} r !== null && r.delete(t), ty(e, n); }
var ny;
ny = function (e, t, n) { if (e !== null)
    if (e.memoizedProps !== t.pendingProps || rt.current)
        nt = !0;
    else {
        if (!(e.lanes & n) && !(t.flags & 128))
            return nt = !1, b2(e, t, n);
        nt = !!(e.flags & 131072);
    }
else
    nt = !1, ue && t.flags & 1048576 && s0(t, ma, t.index); switch (t.lanes = 0, t.tag) {
    case 2:
        var r = t.type;
        Vs(e, t), e = t.pendingProps;
        var o = po(t, qe.current);
        ao(t, n), o = Gd(null, t, r, e, o, n);
        var i = qd();
        return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ot(r) ? (i = !0, pa(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Ud(t), o.updater = sl, t.stateNode = o, o._reactInternals = t, mu(t, r, e, n), t = vu(null, t, r, !0, i, n)) : (t.tag = 0, ue && i && Ld(t), Je(null, t, o, n), t = t.child), t;
    case 16:
        r = t.elementType;
        e: {
            switch (Vs(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = M2(r), e = Vt(r, e), o) {
                case 0:
                    t = yu(null, t, r, e, n);
                    break e;
                case 1:
                    t = ch(null, t, r, e, n);
                    break e;
                case 11:
                    t = ah(null, t, r, e, n);
                    break e;
                case 14:
                    t = lh(null, t, r, Vt(r.type, e), n);
                    break e;
            }
            throw Error(j(306, r, ""));
        }
        return t;
    case 0: return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Vt(r, o), yu(e, t, r, o, n);
    case 1: return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Vt(r, o), ch(e, t, r, o, n);
    case 3:
        e: {
            if ($0(t), e === null)
                throw Error(j(387));
            r = t.pendingProps, i = t.memoizedState, o = i.element, f0(e, t), va(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element, i.isDehydrated)
                if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                    o = yo(Error(j(423)), t), t = uh(e, t, r, n, o);
                    break e;
                }
                else if (r !== o) {
                    o = yo(Error(j(424)), t), t = uh(e, t, r, n, o);
                    break e;
                }
                else
                    for (vt = Vn(t.stateNode.containerInfo.firstChild), xt = t, ue = !0, Gt = null, n = u0(t, null, r, n), t.child = n; n;)
                        n.flags = n.flags & -3 | 4096, n = n.sibling;
            else {
                if (ho(), r === o) {
                    t = Cn(e, t, n);
                    break e;
                }
                Je(e, t, r, n);
            }
            t = t.child;
        }
        return t;
    case 5: return p0(t), e === null && fu(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, au(r, o) ? s = null : i !== null && au(r, i) && (t.flags |= 32), I0(e, t), Je(e, t, s, n), t.child;
    case 6: return e === null && fu(t), null;
    case 13: return F0(e, t, n);
    case 4: return zd(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = mo(t, null, r, n) : Je(e, t, r, n), t.child;
    case 11: return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Vt(r, o), ah(e, t, r, o, n);
    case 7: return Je(e, t, t.pendingProps, n), t.child;
    case 8: return Je(e, t, t.pendingProps.children, n), t.child;
    case 12: return Je(e, t, t.pendingProps.children, n), t.child;
    case 10:
        e: {
            if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, ie(ga, r._currentValue), r._currentValue = s, i !== null)
                if (Jt(i.value, s)) {
                    if (i.children === o.children && !rt.current) {
                        t = Cn(e, t, n);
                        break e;
                    }
                }
                else
                    for (i = t.child, i !== null && (i.return = t); i !== null;) {
                        var a = i.dependencies;
                        if (a !== null) {
                            s = i.child;
                            for (var c = a.firstContext; c !== null;) {
                                if (c.context === r) {
                                    if (i.tag === 1) {
                                        c = vn(-1, n & -n), c.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var d = u.pending;
                                            d === null ? c.next = c : (c.next = d.next, d.next = c), u.pending = c;
                                        }
                                    }
                                    i.lanes |= n, c = i.alternate, c !== null && (c.lanes |= n), pu(i.return, n, t), a.lanes |= n;
                                    break;
                                }
                                c = c.next;
                            }
                        }
                        else if (i.tag === 10)
                            s = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (s = i.return, s === null)
                                throw Error(j(341));
                            s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), pu(s, n, t), s = i.sibling;
                        }
                        else
                            s = i.child;
                        if (s !== null)
                            s.return = i;
                        else
                            for (s = i; s !== null;) {
                                if (s === t) {
                                    s = null;
                                    break;
                                }
                                if (i = s.sibling, i !== null) {
                                    i.return = s.return, s = i;
                                    break;
                                }
                                s = s.return;
                            }
                        i = s;
                    }
            Je(e, t, o.children, n), t = t.child;
        }
        return t;
    case 9: return o = t.type, r = t.pendingProps.children, ao(t, n), o = It(o), r = r(o), t.flags |= 1, Je(e, t, r, n), t.child;
    case 14: return r = t.type, o = Vt(r, t.pendingProps), o = Vt(r.type, o), lh(e, t, r, o, n);
    case 15: return M0(e, t, t.type, t.pendingProps, n);
    case 17: return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Vt(r, o), Vs(e, t), t.tag = 1, ot(r) ? (e = !0, pa(t)) : e = !1, ao(t, n), O0(t, r, o), mu(t, r, o, n), vu(null, t, r, !0, e, n);
    case 19: return U0(e, t, n);
    case 22: return B0(e, t, n);
} throw Error(j(156, t.tag)); };
function ry(e, t) { return Rg(e, t); }
function D2(e, t, n, r) { this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null; }
function Mt(e, t, n, r) { return new D2(e, t, n, r); }
function rf(e) { return e = e.prototype, !(!e || !e.isReactComponent); }
function M2(e) { if (typeof e == "function")
    return rf(e) ? 1 : 0; if (e != null) {
    if (e = e.$$typeof, e === Sd)
        return 11;
    if (e === Cd)
        return 14;
} return 2; }
function Kn(e, t) { var n = e.alternate; return n === null ? (n = Mt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n; }
function qs(e, t, n, r, o, i) { var s = 2; if (r = e, typeof e == "function")
    rf(e) && (s = 1);
else if (typeof e == "string")
    s = 5;
else
    e: switch (e) {
        case Wr: return yr(n.children, o, i, t);
        case bd:
            s = 8, o |= 8;
            break;
        case $c: return e = Mt(12, n, t, o | 2), e.elementType = $c, e.lanes = i, e;
        case Fc: return e = Mt(13, n, t, o), e.elementType = Fc, e.lanes = i, e;
        case Uc: return e = Mt(19, n, t, o), e.elementType = Uc, e.lanes = i, e;
        case pg: return cl(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                    case dg:
                        s = 10;
                        break e;
                    case fg:
                        s = 9;
                        break e;
                    case Sd:
                        s = 11;
                        break e;
                    case Cd:
                        s = 14;
                        break e;
                    case Tn:
                        s = 16, r = null;
                        break e;
                }
            throw Error(j(130, e == null ? e : typeof e, ""));
    } return t = Mt(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t; }
function yr(e, t, n, r) { return e = Mt(7, e, r, t), e.lanes = n, e; }
function cl(e, t, n, r) { return e = Mt(22, e, r, t), e.elementType = pg, e.lanes = n, e.stateNode = { isHidden: !1 }, e; }
function mc(e, t, n) { return e = Mt(6, e, null, t), e.lanes = n, e; }
function gc(e, t, n) { return t = Mt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t; }
function B2(e, t, n, r, o) { this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ql(0), this.expirationTimes = Ql(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ql(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null; }
function of(e, t, n, r, o, i, s, a, c) { return e = new B2(e, t, n, a, c), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Mt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ud(i), e; }
function I2(e, t, n) { var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null; return { $$typeof: Vr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n }; }
function oy(e) { if (!e)
    return Zn; e = e._reactInternals; e: {
    if (Lr(e) !== e || e.tag !== 1)
        throw Error(j(170));
    var t = e;
    do {
        switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1: if (ot(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
            }
        }
        t = t.return;
    } while (t !== null);
    throw Error(j(171));
} if (e.tag === 1) {
    var n = e.type;
    if (ot(n))
        return o0(e, n, t);
} return t; }
function iy(e, t, n, r, o, i, s, a, c) { return e = of(n, r, !0, e, o, i, s, a, c), e.context = oy(null), n = e.current, r = Ze(), o = qn(n), i = vn(r, o), i.callback = t ?? null, Wn(n, i, o), e.current.lanes = o, Vi(e, o, r), it(e, r), e; }
function ul(e, t, n, r) { var o = t.current, i = Ze(), s = qn(o); return n = oy(n), t.context === null ? t.context = n : t.pendingContext = n, t = vn(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Wn(o, t, s), e !== null && (Yt(e, o, s, i), Us(e, o, s)), s; }
function ka(e) { if (e = e.current, !e.child)
    return null; switch (e.child.tag) {
    case 5: return e.child.stateNode;
    default: return e.child.stateNode;
} }
function xh(e, t) { if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
} }
function sf(e, t) { xh(e, t), (e = e.alternate) && xh(e, t); }
function $2() { return null; }
var sy = typeof reportError == "function" ? reportError : function (e) { console.error(e); };
function af(e) { this._internalRoot = e; }
dl.prototype.render = af.prototype.render = function (e) { var t = this._internalRoot; if (t === null)
    throw Error(j(409)); ul(e, t, null, null); };
dl.prototype.unmount = af.prototype.unmount = function () { var e = this._internalRoot; if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    kr(function () { ul(null, e, null, null); }), t[bn] = null;
} };
function dl(e) { this._internalRoot = e; }
dl.prototype.unstable_scheduleHydration = function (e) { if (e) {
    var t = Bg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ln.length && t !== 0 && t < Ln[n].priority; n++)
        ;
    Ln.splice(n, 0, e), n === 0 && $g(e);
} };
function lf(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11); }
function fl(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")); }
function bh() { }
function F2(e, t, n, r, o) { if (o) {
    if (typeof r == "function") {
        var i = r;
        r = function () { var u = ka(s); i.call(u); };
    }
    var s = iy(t, r, e, 0, null, !1, !1, "", bh);
    return e._reactRootContainer = s, e[bn] = s.current, Ci(e.nodeType === 8 ? e.parentNode : e), kr(), s;
} for (; o = e.lastChild;)
    e.removeChild(o); if (typeof r == "function") {
    var a = r;
    r = function () { var u = ka(c); a.call(u); };
} var c = of(e, 0, !1, null, null, !1, !1, "", bh); return e._reactRootContainer = c, e[bn] = c.current, Ci(e.nodeType === 8 ? e.parentNode : e), kr(function () { ul(t, c, n, r); }), c; }
function pl(e, t, n, r, o) { var i = n._reactRootContainer; if (i) {
    var s = i;
    if (typeof o == "function") {
        var a = o;
        o = function () { var c = ka(s); a.call(c); };
    }
    ul(t, s, e, o);
}
else
    s = F2(n, t, e, o, r); return ka(s); }
Dg = function (e) { switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Xo(t.pendingLanes);
            n !== 0 && (kd(t, n | 1), it(t, be()), !(Y & 6) && (vo = be() + 500, nr()));
        }
        break;
    case 13: kr(function () { var r = Sn(e, 1); if (r !== null) {
        var o = Ze();
        Yt(r, e, 1, o);
    } }), sf(e, 1);
} };
Nd = function (e) { if (e.tag === 13) {
    var t = Sn(e, 134217728);
    if (t !== null) {
        var n = Ze();
        Yt(t, e, 134217728, n);
    }
    sf(e, 134217728);
} };
Mg = function (e) { if (e.tag === 13) {
    var t = qn(e), n = Sn(e, t);
    if (n !== null) {
        var r = Ze();
        Yt(n, e, t, r);
    }
    sf(e, t);
} };
Bg = function () { return ne; };
Ig = function (e, t) { var n = ne; try {
    return ne = e, t();
}
finally {
    ne = n;
} };
Jc = function (e, t, n) { switch (t) {
    case "input":
        if (Vc(e, n), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode;)
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = rl(r);
                    if (!o)
                        throw Error(j(90));
                    mg(r), Vc(r, o);
                }
            }
        }
        break;
    case "textarea":
        yg(e, n);
        break;
    case "select": t = n.value, t != null && ro(e, !!n.multiple, t, !1);
} };
Eg = ef;
Ag = kr;
var U2 = { usingClientEntryPoint: !1, Events: [Gi, Yr, rl, Sg, Cg, ef] }, Yo = { findFiberByHostInstance: dr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, z2 = { bundleType: Yo.bundleType, version: Yo.version, rendererPackageName: Yo.rendererPackageName, rendererConfig: Yo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: An.ReactCurrentDispatcher, findHostInstanceByFiber: function (e) { return e = Pg(e), e === null ? null : e.stateNode; }, findFiberByHostInstance: Yo.findFiberByHostInstance || $2, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ks = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ks.isDisabled && ks.supportsFiber)
        try {
            Xa = ks.inject(z2), an = ks;
        }
        catch { }
}
Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U2;
Nt.createPortal = function (e, t) { var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null; if (!lf(t))
    throw Error(j(200)); return I2(e, t, null, n); };
Nt.createRoot = function (e, t) { if (!lf(e))
    throw Error(j(299)); var n = !1, r = "", o = sy; return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = of(e, 1, !1, null, null, n, !1, r, o), e[bn] = t.current, Ci(e.nodeType === 8 ? e.parentNode : e), new af(t); };
Nt.findDOMNode = function (e) { if (e == null)
    return null; if (e.nodeType === 1)
    return e; var t = e._reactInternals; if (t === void 0)
    throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","), Error(j(268, e))); return e = Pg(t), e = e === null ? null : e.stateNode, e; };
Nt.flushSync = function (e) { return kr(e); };
Nt.hydrate = function (e, t, n) { if (!fl(t))
    throw Error(j(200)); return pl(null, e, t, !0, n); };
Nt.hydrateRoot = function (e, t, n) { if (!lf(e))
    throw Error(j(405)); var r = n != null && n.hydratedSources || null, o = !1, i = "", s = sy; if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = iy(t, null, e, 1, n ?? null, o, !1, i, s), e[bn] = t.current, Ci(e), r)
    for (e = 0; e < r.length; e++)
        n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o); return new dl(t); };
Nt.render = function (e, t, n) { if (!fl(t))
    throw Error(j(200)); return pl(null, e, t, !1, n); };
Nt.unmountComponentAtNode = function (e) { if (!fl(e))
    throw Error(j(40)); return e._reactRootContainer ? (kr(function () { pl(null, null, e, !1, function () { e._reactRootContainer = null, e[bn] = null; }); }), !0) : !1; };
Nt.unstable_batchedUpdates = ef;
Nt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) { if (!fl(n))
    throw Error(j(200)); if (e == null || e._reactInternals === void 0)
    throw Error(j(38)); return pl(e, t, n, !1, r); };
Nt.version = "18.3.1-next-f1338f8080-20240426";
function ay() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ay);
    }
    catch (e) {
        console.error(e);
    } }
ay(), ag.exports = Nt;
var H2 = ag.exports, Sh = H2;
Bc.createRoot = Sh.createRoot, Bc.hydrateRoot = Sh.hydrateRoot; /**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ti() { return Ti = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, Ti.apply(this, arguments); }
var In;
(function (e) { e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"; })(In || (In = {}));
const Ch = "popstate";
function V2(e) { e === void 0 && (e = {}); function t(o, i) { let { pathname: s = "/", search: a = "", hash: c = "" } = Dr(o.location.hash.substr(1)); return !s.startsWith("/") && !s.startsWith(".") && (s = "/" + s), Ru("", { pathname: s, search: a, hash: c }, i.state && i.state.usr || null, i.state && i.state.key || "default"); } function n(o, i) { let s = o.document.querySelector("base"), a = ""; if (s && s.getAttribute("href")) {
    let c = o.location.href, u = c.indexOf("#");
    a = u === -1 ? c : c.slice(0, u);
} return a + "#" + (typeof i == "string" ? i : Na(i)); } function r(o, i) { cf(o.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(i) + ")"); } return G2(t, n, r, e); }
function Ae(e, t) { if (e === !1 || e === null || typeof e > "u")
    throw new Error(t); }
function cf(e, t) { if (!e) {
    typeof console < "u" && console.warn(t);
    try {
        throw new Error(t);
    }
    catch { }
} }
function W2() { return Math.random().toString(36).substr(2, 8); }
function Eh(e, t) { return { usr: e.state, key: e.key, idx: t }; }
function Ru(e, t, n, r) { return n === void 0 && (n = null), Ti({ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" }, typeof t == "string" ? Dr(t) : t, { state: n, key: t && t.key || r || W2() }); }
function Na(e) { let { pathname: t = "/", search: n = "", hash: r = "" } = e; return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t; }
function Dr(e) { let t = {}; if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
} return t; }
function G2(e, t, n, r) { r === void 0 && (r = {}); let { window: o = document.defaultView, v5Compat: i = !1 } = r, s = o.history, a = In.Pop, c = null, u = d(); u == null && (u = 0, s.replaceState(Ti({}, s.state, { idx: u }), "")); function d() { return (s.state || { idx: null }).idx; } function f() { a = In.Pop; let x = d(), g = x == null ? null : x - u; u = x, c && c({ action: a, location: b.location, delta: g }); } function p(x, g) { a = In.Push; let h = Ru(b.location, x, g); n && n(h, x), u = d() + 1; let y = Eh(h, u), S = b.createHref(h); try {
    s.pushState(y, "", S);
}
catch (C) {
    if (C instanceof DOMException && C.name === "DataCloneError")
        throw C;
    o.location.assign(S);
} i && c && c({ action: a, location: b.location, delta: 1 }); } function w(x, g) { a = In.Replace; let h = Ru(b.location, x, g); n && n(h, x), u = d(); let y = Eh(h, u), S = b.createHref(h); s.replaceState(y, "", S), i && c && c({ action: a, location: b.location, delta: 0 }); } function m(x) { let g = o.location.origin !== "null" ? o.location.origin : o.location.href, h = typeof x == "string" ? x : Na(x); return h = h.replace(/ $/, "%20"), Ae(g, "No window.location.(origin|href) available to create URL for href: " + h), new URL(h, g); } let b = { get action() { return a; }, get location() { return e(o, s); }, listen(x) { if (c)
        throw new Error("A history only accepts one active listener"); return o.addEventListener(Ch, f), c = x, () => { o.removeEventListener(Ch, f), c = null; }; }, createHref(x) { return t(o, x); }, createURL: m, encodeLocation(x) { let g = m(x); return { pathname: g.pathname, search: g.search, hash: g.hash }; }, push: p, replace: w, go(x) { return s.go(x); } }; return b; }
var Ah;
(function (e) { e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"; })(Ah || (Ah = {}));
function q2(e, t, n) { return n === void 0 && (n = "/"), K2(e, t, n, !1); }
function K2(e, t, n, r) { let o = typeof t == "string" ? Dr(t) : t, i = uf(o.pathname || "/", n); if (i == null)
    return null; let s = ly(e); Y2(s); let a = null; for (let c = 0; a == null && c < s.length; ++c) {
    let u = sb(i);
    a = ob(s[c], u, r);
} return a; }
function ly(e, t, n, r) { t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = ""); let o = (i, s, a) => { let c = { relativePath: a === void 0 ? i.path || "" : a, caseSensitive: i.caseSensitive === !0, childrenIndex: s, route: i }; c.relativePath.startsWith("/") && (Ae(c.relativePath.startsWith(r), 'Absolute route path "' + c.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), c.relativePath = c.relativePath.slice(r.length)); let u = Yn([r, c.relativePath]), d = n.concat(c); i.children && i.children.length > 0 && (Ae(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), ly(i.children, t, d, u)), !(i.path == null && !i.index) && t.push({ path: u, score: nb(u, i.index), routesMeta: d }); }; return e.forEach((i, s) => { var a; if (i.path === "" || !((a = i.path) != null && a.includes("?")))
    o(i, s);
else
    for (let c of cy(i.path))
        o(i, s, c); }), t; }
function cy(e) { let t = e.split("/"); if (t.length === 0)
    return []; let [n, ...r] = t, o = n.endsWith("?"), i = n.replace(/\?$/, ""); if (r.length === 0)
    return o ? [i, ""] : [i]; let s = cy(r.join("/")), a = []; return a.push(...s.map(c => c === "" ? i : [i, c].join("/"))), o && a.push(...s), a.map(c => e.startsWith("/") && c === "" ? "/" : c); }
function Y2(e) { e.sort((t, n) => t.score !== n.score ? n.score - t.score : rb(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex))); }
const Q2 = /^:[\w-]+$/, J2 = 3, Z2 = 2, X2 = 1, eb = 10, tb = -2, kh = e => e === "*";
function nb(e, t) { let n = e.split("/"), r = n.length; return n.some(kh) && (r += tb), t && (r += Z2), n.filter(o => !kh(o)).reduce((o, i) => o + (Q2.test(i) ? J2 : i === "" ? X2 : eb), r); }
function rb(e, t) { return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0; }
function ob(e, t, n) { let { routesMeta: r } = e, o = {}, i = "/", s = []; for (let a = 0; a < r.length; ++a) {
    let c = r[a], u = a === r.length - 1, d = i === "/" ? t : t.slice(i.length) || "/", f = Nh({ path: c.relativePath, caseSensitive: c.caseSensitive, end: u }, d), p = c.route;
    if (!f && u && n && !r[r.length - 1].route.index && (f = Nh({ path: c.relativePath, caseSensitive: c.caseSensitive, end: !1 }, d)), !f)
        return null;
    Object.assign(o, f.params), s.push({ params: o, pathname: Yn([i, f.pathname]), pathnameBase: ub(Yn([i, f.pathnameBase])), route: p }), f.pathnameBase !== "/" && (i = Yn([i, f.pathnameBase]));
} return s; }
function Nh(e, t) { typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 }); let [n, r] = ib(e.path, e.caseSensitive, e.end), o = t.match(n); if (!o)
    return null; let i = o[0], s = i.replace(/(.)\/+$/, "$1"), a = o.slice(1); return { params: r.reduce((u, d, f) => { let { paramName: p, isOptional: w } = d; if (p === "*") {
        let b = a[f] || "";
        s = i.slice(0, i.length - b.length).replace(/(.)\/+$/, "$1");
    } const m = a[f]; return w && !m ? u[p] = void 0 : u[p] = (m || "").replace(/%2F/g, "/"), u; }, {}), pathname: i, pathnameBase: s, pattern: e }; }
function ib(e, t, n) { t === void 0 && (t = !1), n === void 0 && (n = !0), cf(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')); let r = [], o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, a, c) => (r.push({ paramName: a, isOptional: c != null }), c ? "/?([^\\/]+)?" : "/([^\\/]+)")); return e.endsWith("*") ? (r.push({ paramName: "*" }), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), r]; }
function sb(e) { try {
    return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
}
catch (t) {
    return cf(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
} }
function uf(e, t) { if (t === "/")
    return e; if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null; let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n); return r && r !== "/" ? null : e.slice(n) || "/"; }
function ab(e, t) { t === void 0 && (t = "/"); let { pathname: n, search: r = "", hash: o = "" } = typeof e == "string" ? Dr(e) : e; return { pathname: n ? n.startsWith("/") ? n : lb(n, t) : t, search: db(r), hash: fb(o) }; }
function lb(e, t) { let n = t.replace(/\/+$/, "").split("/"); return e.split("/").forEach(o => { o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o); }), n.length > 1 ? n.join("/") : "/"; }
function yc(e, t, n, r) { return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'; }
function cb(e) { return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0); }
function uy(e, t) { let n = cb(e); return t ? n.map((r, o) => o === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase); }
function dy(e, t, n, r) { r === void 0 && (r = !1); let o; typeof e == "string" ? o = Dr(e) : (o = Ti({}, e), Ae(!o.pathname || !o.pathname.includes("?"), yc("?", "pathname", "search", o)), Ae(!o.pathname || !o.pathname.includes("#"), yc("#", "pathname", "hash", o)), Ae(!o.search || !o.search.includes("#"), yc("#", "search", "hash", o))); let i = e === "" || o.pathname === "", s = i ? "/" : o.pathname, a; if (s == null)
    a = n;
else {
    let f = t.length - 1;
    if (!r && s.startsWith("..")) {
        let p = s.split("/");
        for (; p[0] === "..";)
            p.shift(), f -= 1;
        o.pathname = p.join("/");
    }
    a = f >= 0 ? t[f] : "/";
} let c = ab(o, a), u = s && s !== "/" && s.endsWith("/"), d = (i || s === ".") && n.endsWith("/"); return !c.pathname.endsWith("/") && (u || d) && (c.pathname += "/"), c; }
const Yn = e => e.join("/").replace(/\/\/+/g, "/"), ub = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"), db = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, fb = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function pb(e) { return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e; }
const fy = ["post", "put", "patch", "delete"];
new Set(fy);
const hb = ["get", ...fy];
new Set(hb); /**
* React Router v6.27.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function Oi() { return Oi = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, Oi.apply(this, arguments); }
const df = v.createContext(null), mb = v.createContext(null), Mr = v.createContext(null), hl = v.createContext(null), rr = v.createContext({ outlet: null, matches: [], isDataRoute: !1 }), py = v.createContext(null);
function gb(e, t) { let { relative: n } = t === void 0 ? {} : t; Ki() || Ae(!1); let { basename: r, navigator: o } = v.useContext(Mr), { hash: i, pathname: s, search: a } = my(e, { relative: n }), c = s; return r !== "/" && (c = s === "/" ? r : Yn([r, s])), o.createHref({ pathname: c, search: a, hash: i }); }
function Ki() { return v.useContext(hl) != null; }
function Zt() { return Ki() || Ae(!1), v.useContext(hl).location; }
function hy(e) { v.useContext(Mr).static || v.useLayoutEffect(e); }
function ye() { let { isDataRoute: e } = v.useContext(rr); return e ? _b() : yb(); }
function yb() { Ki() || Ae(!1); let e = v.useContext(df), { basename: t, future: n, navigator: r } = v.useContext(Mr), { matches: o } = v.useContext(rr), { pathname: i } = Zt(), s = JSON.stringify(uy(o, n.v7_relativeSplatPath)), a = v.useRef(!1); return hy(() => { a.current = !0; }), v.useCallback(function (u, d) { if (d === void 0 && (d = {}), !a.current)
    return; if (typeof u == "number") {
    r.go(u);
    return;
} let f = dy(u, JSON.parse(s), i, d.relative === "path"); e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : Yn([t, f.pathname])), (d.replace ? r.replace : r.push)(f, d.state, d); }, [t, r, s, i, e]); }
const vb = v.createContext(null);
function wb(e) { let t = v.useContext(rr).outlet; return t && v.createElement(vb.Provider, { value: e }, t); }
function my(e, t) { let { relative: n } = t === void 0 ? {} : t, { future: r } = v.useContext(Mr), { matches: o } = v.useContext(rr), { pathname: i } = Zt(), s = JSON.stringify(uy(o, r.v7_relativeSplatPath)); return v.useMemo(() => dy(e, JSON.parse(s), i, n === "path"), [e, s, i, n]); }
function xb(e, t) { return bb(e, t); }
function bb(e, t, n, r) { Ki() || Ae(!1); let { navigator: o } = v.useContext(Mr), { matches: i } = v.useContext(rr), s = i[i.length - 1], a = s ? s.params : {}; s && s.pathname; let c = s ? s.pathnameBase : "/"; s && s.route; let u = Zt(), d; if (t) {
    var f;
    let x = typeof t == "string" ? Dr(t) : t;
    c === "/" || (f = x.pathname) != null && f.startsWith(c) || Ae(!1), d = x;
}
else
    d = u; let p = d.pathname || "/", w = p; if (c !== "/") {
    let x = c.replace(/^\//, "").split("/");
    w = "/" + p.replace(/^\//, "").split("/").slice(x.length).join("/");
} let m = q2(e, { pathname: w }), b = kb(m && m.map(x => Object.assign({}, x, { params: Object.assign({}, a, x.params), pathname: Yn([c, o.encodeLocation ? o.encodeLocation(x.pathname).pathname : x.pathname]), pathnameBase: x.pathnameBase === "/" ? c : Yn([c, o.encodeLocation ? o.encodeLocation(x.pathnameBase).pathname : x.pathnameBase]) })), i, n, r); return t && b ? v.createElement(hl.Provider, { value: { location: Oi({ pathname: "/", search: "", hash: "", state: null, key: "default" }, d), navigationType: In.Pop } }, b) : b; }
function Sb() { let e = Rb(), t = pb(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" }; return v.createElement(v.Fragment, null, v.createElement("h2", null, "Unexpected Application Error!"), v.createElement("h3", { style: { fontStyle: "italic" } }, t), n ? v.createElement("pre", { style: o }, n) : null, null); }
const Cb = v.createElement(Sb, null);
class Eb extends v.Component {
    constructor(t) { super(t), this.state = { location: t.location, revalidation: t.revalidation, error: t.error }; }
    static getDerivedStateFromError(t) { return { error: t }; }
    static getDerivedStateFromProps(t, n) { return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? { error: t.error, location: t.location, revalidation: t.revalidation } : { error: t.error !== void 0 ? t.error : n.error, location: n.location, revalidation: t.revalidation || n.revalidation }; }
    componentDidCatch(t, n) { console.error("React Router caught the following error during render", t, n); }
    render() { return this.state.error !== void 0 ? v.createElement(rr.Provider, { value: this.props.routeContext }, v.createElement(py.Provider, { value: this.state.error, children: this.props.component })) : this.props.children; }
}
function Ab(e) { let { routeContext: t, match: n, children: r } = e, o = v.useContext(df); return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id), v.createElement(rr.Provider, { value: t }, r); }
function kb(e, t, n, r) { var o; if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
    var i;
    if (!n)
        return null;
    if (n.errors)
        e = n.matches;
    else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
        e = n.matches;
    else
        return null;
} let s = e, a = (o = n) == null ? void 0 : o.errors; if (a != null) {
    let d = s.findIndex(f => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0);
    d >= 0 || Ae(!1), s = s.slice(0, Math.min(s.length, d + 1));
} let c = !1, u = -1; if (n && r && r.v7_partialHydration)
    for (let d = 0; d < s.length; d++) {
        let f = s[d];
        if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = d), f.route.id) {
            let { loaderData: p, errors: w } = n, m = f.route.loader && p[f.route.id] === void 0 && (!w || w[f.route.id] === void 0);
            if (f.route.lazy || m) {
                c = !0, u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
                break;
            }
        }
    } return s.reduceRight((d, f, p) => { let w, m = !1, b = null, x = null; n && (w = a && f.route.id ? a[f.route.id] : void 0, b = f.route.errorElement || Cb, c && (u < 0 && p === 0 ? (m = !0, x = null) : u === p && (m = !0, x = f.route.hydrateFallbackElement || null))); let g = t.concat(s.slice(0, p + 1)), h = () => { let y; return w ? y = b : m ? y = x : f.route.Component ? y = v.createElement(f.route.Component, null) : f.route.element ? y = f.route.element : y = d, v.createElement(Ab, { match: f, routeContext: { outlet: d, matches: g, isDataRoute: n != null }, children: y }); }; return n && (f.route.ErrorBoundary || f.route.errorElement || p === 0) ? v.createElement(Eb, { location: n.location, revalidation: n.revalidation, component: b, error: w, children: h(), routeContext: { outlet: null, matches: g, isDataRoute: !0 } }) : h(); }, null); }
var gy = function (e) { return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e; }(gy || {}), Pa = function (e) { return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e; }(Pa || {});
function Nb(e) { let t = v.useContext(df); return t || Ae(!1), t; }
function Pb(e) { let t = v.useContext(mb); return t || Ae(!1), t; }
function jb(e) { let t = v.useContext(rr); return t || Ae(!1), t; }
function yy(e) { let t = jb(), n = t.matches[t.matches.length - 1]; return n.route.id || Ae(!1), n.route.id; }
function Rb() { var e; let t = v.useContext(py), n = Pb(Pa.UseRouteError), r = yy(Pa.UseRouteError); return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]; }
function _b() { let { router: e } = Nb(gy.UseNavigateStable), t = yy(Pa.UseNavigateStable), n = v.useRef(!1); return hy(() => { n.current = !0; }), v.useCallback(function (o, i) { i === void 0 && (i = {}), n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, Oi({ fromRouteId: t }, i))); }, [e, t]); }
function Tb(e) { return wb(e.context); }
function ee(e) { Ae(!1); }
function Ob(e) { let { basename: t = "/", children: n = null, location: r, navigationType: o = In.Pop, navigator: i, static: s = !1, future: a } = e; Ki() && Ae(!1); let c = t.replace(/^\/*/, "/"), u = v.useMemo(() => ({ basename: c, navigator: i, static: s, future: Oi({ v7_relativeSplatPath: !1 }, a) }), [c, a, i, s]); typeof r == "string" && (r = Dr(r)); let { pathname: d = "/", search: f = "", hash: p = "", state: w = null, key: m = "default" } = r, b = v.useMemo(() => { let x = uf(d, c); return x == null ? null : { location: { pathname: x, search: f, hash: p, state: w, key: m }, navigationType: o }; }, [c, d, f, p, w, m, o]); return b == null ? null : v.createElement(Mr.Provider, { value: u }, v.createElement(hl.Provider, { children: n, value: b })); }
function Lb(e) { let { children: t, location: n } = e; return xb(_u(t), n); }
new Promise(() => { });
function _u(e, t) { t === void 0 && (t = []); let n = []; return v.Children.forEach(e, (r, o) => { if (!v.isValidElement(r))
    return; let i = [...t, o]; if (r.type === v.Fragment) {
    n.push.apply(n, _u(r.props.children, i));
    return;
} r.type !== ee && Ae(!1), !r.props.index || !r.props.children || Ae(!1); let s = { id: r.props.id || i.join("-"), caseSensitive: r.props.caseSensitive, element: r.props.element, Component: r.props.Component, index: r.props.index, path: r.props.path, loader: r.props.loader, action: r.props.action, errorElement: r.props.errorElement, ErrorBoundary: r.props.ErrorBoundary, hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null, shouldRevalidate: r.props.shouldRevalidate, handle: r.props.handle, lazy: r.props.lazy }; r.props.children && (s.children = _u(r.props.children, i)), n.push(s); }), n; } /**
* React Router DOM v6.27.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function Tu() { return Tu = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, Tu.apply(this, arguments); }
function Db(e, t) { if (e == null)
    return {}; var n = {}, r = Object.keys(e), o, i; for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]); return n; }
function Mb(e) { return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey); }
function Bb(e, t) { return e.button === 0 && (!t || t === "_self") && !Mb(e); }
const Ib = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"], $b = "6";
try {
    window.__reactRouterVersion = $b;
}
catch { }
const Fb = "startTransition", Ph = Mc[Fb];
function Ub(e) { let { basename: t, children: n, future: r, window: o } = e, i = v.useRef(); i.current == null && (i.current = V2({ window: o, v5Compat: !0 })); let s = i.current, [a, c] = v.useState({ action: s.action, location: s.location }), { v7_startTransition: u } = r || {}, d = v.useCallback(f => { u && Ph ? Ph(() => c(f)) : c(f); }, [c, u]); return v.useLayoutEffect(() => s.listen(d), [s, d]), v.createElement(Ob, { basename: t, children: n, location: a.location, navigationType: a.action, navigator: s, future: r }); }
const zb = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Hb = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, ge = v.forwardRef(function (t, n) { let { onClick: r, relative: o, reloadDocument: i, replace: s, state: a, target: c, to: u, preventScrollReset: d, viewTransition: f } = t, p = Db(t, Ib), { basename: w } = v.useContext(Mr), m, b = !1; if (typeof u == "string" && Hb.test(u) && (m = u, zb))
    try {
        let y = new URL(window.location.href), S = u.startsWith("//") ? new URL(y.protocol + u) : new URL(u), C = uf(S.pathname, w);
        S.origin === y.origin && C != null ? u = C + S.search + S.hash : b = !0;
    }
    catch { } let x = gb(u, { relative: o }), g = Vb(u, { replace: s, state: a, target: c, preventScrollReset: d, relative: o, viewTransition: f }); function h(y) { r && r(y), y.defaultPrevented || g(y); } return v.createElement("a", Tu({}, p, { href: m || x, onClick: b || i ? r : h, ref: n, target: c })); });
var jh;
(function (e) { e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"; })(jh || (jh = {}));
var Rh;
(function (e) { e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"; })(Rh || (Rh = {}));
function Vb(e, t) { let { target: n, replace: r, state: o, preventScrollReset: i, relative: s, viewTransition: a } = t === void 0 ? {} : t, c = ye(), u = Zt(), d = my(e, { relative: s }); return v.useCallback(f => { if (Bb(f, n)) {
    f.preventDefault();
    let p = r !== void 0 ? r : Na(u) === Na(d);
    c(e, { replace: p, state: o, preventScrollReset: i, relative: s, viewTransition: a });
} }, [u, c, d, r, o, n, e, i, s, a]); } /*!
* sweetalert2 v11.14.4
* Released under the MIT License.
*/
function vy(e, t, n) { if (typeof e == "function" ? e === t : e.has(t))
    return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
function Wb(e, t) { if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _h(e, t) { return e.get(vy(e, t)); }
function Gb(e, t, n) { Wb(e, t), t.set(e, n); }
function qb(e, t, n) { return e.set(vy(e, t), n), n; }
const Kb = 100, I = {}, Yb = () => { I.previousActiveElement instanceof HTMLElement ? (I.previousActiveElement.focus(), I.previousActiveElement = null) : document.body && document.body.focus(); }, Qb = e => new Promise(t => { if (!e)
    return t(); const n = window.scrollX, r = window.scrollY; I.restoreFocusTimeout = setTimeout(() => { Yb(), t(); }, Kb), window.scrollTo(n, r); }), wy = "swal2-", Jb = ["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"], A = Jb.reduce((e, t) => (e[t] = wy + t, e), {}), Zb = ["success", "warning", "info", "question", "error"], ja = Zb.reduce((e, t) => (e[t] = wy + t, e), {}), xy = "SweetAlert2:", ff = e => e.charAt(0).toUpperCase() + e.slice(1), ct = e => { console.warn(`${xy} ${typeof e == "object" ? e.join(" ") : e}`); }, Br = e => { console.error(`${xy} ${e}`); }, Th = [], Xb = e => { Th.includes(e) || (Th.push(e), ct(e)); }, by = function (e) { let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null; Xb(`"${e}" is deprecated and will be removed in the next major release.${t ? ` Use "${t}" instead.` : ""}`); }, ml = e => typeof e == "function" ? e() : e, pf = e => e && typeof e.toPromise == "function", Yi = e => pf(e) ? e.toPromise() : Promise.resolve(e), hf = e => e && Promise.resolve(e) === e, ut = () => document.body.querySelector(`.${A.container}`), Qi = e => { const t = ut(); return t ? t.querySelector(e) : null; }, jt = e => Qi(`.${e}`), re = () => jt(A.popup), Ji = () => jt(A.icon), eS = () => jt(A["icon-content"]), Sy = () => jt(A.title), mf = () => jt(A["html-container"]), Cy = () => jt(A.image), gf = () => jt(A["progress-steps"]), gl = () => jt(A["validation-message"]), un = () => Qi(`.${A.actions} .${A.confirm}`), To = () => Qi(`.${A.actions} .${A.cancel}`), Ir = () => Qi(`.${A.actions} .${A.deny}`), tS = () => jt(A["input-label"]), Oo = () => Qi(`.${A.loader}`), Zi = () => jt(A.actions), Ey = () => jt(A.footer), yl = () => jt(A["timer-progress-bar"]), yf = () => jt(A.close), nS = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`, vf = () => { const e = re(); if (!e)
    return []; const t = e.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'), n = Array.from(t).sort((i, s) => { const a = parseInt(i.getAttribute("tabindex") || "0"), c = parseInt(s.getAttribute("tabindex") || "0"); return a > c ? 1 : a < c ? -1 : 0; }), r = e.querySelectorAll(nS), o = Array.from(r).filter(i => i.getAttribute("tabindex") !== "-1"); return [...new Set(n.concat(o))].filter(i => st(i)); }, wf = () => wn(document.body, A.shown) && !wn(document.body, A["toast-shown"]) && !wn(document.body, A["no-backdrop"]), vl = () => { const e = re(); return e ? wn(e, A.toast) : !1; }, rS = () => { const e = re(); return e ? e.hasAttribute("data-loading") : !1; }, Rt = (e, t) => { if (e.textContent = "", t) {
    const r = new DOMParser().parseFromString(t, "text/html"), o = r.querySelector("head");
    o && Array.from(o.childNodes).forEach(s => { e.appendChild(s); });
    const i = r.querySelector("body");
    i && Array.from(i.childNodes).forEach(s => { s instanceof HTMLVideoElement || s instanceof HTMLAudioElement ? e.appendChild(s.cloneNode(!0)) : e.appendChild(s); });
} }, wn = (e, t) => { if (!t)
    return !1; const n = t.split(/\s+/); for (let r = 0; r < n.length; r++)
    if (!e.classList.contains(n[r]))
        return !1; return !0; }, oS = (e, t) => { Array.from(e.classList).forEach(n => { !Object.values(A).includes(n) && !Object.values(ja).includes(n) && !Object.values(t.showClass || {}).includes(n) && e.classList.remove(n); }); }, Ct = (e, t, n) => { if (oS(e, t), !t.customClass)
    return; const r = t.customClass[n]; if (r) {
    if (typeof r != "string" && !r.forEach) {
        ct(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof r}"`);
        return;
    }
    J(e, r);
} }, wl = (e, t) => { if (!t)
    return null; switch (t) {
    case "select":
    case "textarea":
    case "file": return e.querySelector(`.${A.popup} > .${A[t]}`);
    case "checkbox": return e.querySelector(`.${A.popup} > .${A.checkbox} input`);
    case "radio": return e.querySelector(`.${A.popup} > .${A.radio} input:checked`) || e.querySelector(`.${A.popup} > .${A.radio} input:first-child`);
    case "range": return e.querySelector(`.${A.popup} > .${A.range} input`);
    default: return e.querySelector(`.${A.popup} > .${A.input}`);
} }, Ay = e => { if (e.focus(), e.type !== "file") {
    const t = e.value;
    e.value = "", e.value = t;
} }, ky = (e, t, n) => { !e || !t || (typeof t == "string" && (t = t.split(/\s+/).filter(Boolean)), t.forEach(r => { Array.isArray(e) ? e.forEach(o => { n ? o.classList.add(r) : o.classList.remove(r); }) : n ? e.classList.add(r) : e.classList.remove(r); })); }, J = (e, t) => { ky(e, t, !0); }, dn = (e, t) => { ky(e, t, !1); }, $n = (e, t) => { const n = Array.from(e.children); for (let r = 0; r < n.length; r++) {
    const o = n[r];
    if (o instanceof HTMLElement && wn(o, t))
        return o;
} }, vr = (e, t, n) => { n === `${parseInt(n)}` && (n = parseInt(n)), n || parseInt(n) === 0 ? e.style.setProperty(t, typeof n == "number" ? `${n}px` : n) : e.style.removeProperty(t); }, Le = function (e) { let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "flex"; e && (e.style.display = t); }, Ke = e => { e && (e.style.display = "none"); }, xf = function (e) { let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "block"; e && new MutationObserver(() => { Xi(e, e.innerHTML, t); }).observe(e, { childList: !0, subtree: !0 }); }, Oh = (e, t, n, r) => { const o = e.querySelector(t); o && o.style.setProperty(n, r); }, Xi = function (e, t) { let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "flex"; t ? Le(e, n) : Ke(e); }, st = e => !!(e && (e.offsetWidth || e.offsetHeight || e.getClientRects().length)), iS = () => !st(un()) && !st(Ir()) && !st(To()), Lh = e => e.scrollHeight > e.clientHeight, Ny = e => { const t = window.getComputedStyle(e), n = parseFloat(t.getPropertyValue("animation-duration") || "0"), r = parseFloat(t.getPropertyValue("transition-duration") || "0"); return n > 0 || r > 0; }, bf = function (e) { let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1; const n = yl(); n && st(n) && (t && (n.style.transition = "none", n.style.width = "100%"), setTimeout(() => { n.style.transition = `width ${e / 1e3}s linear`, n.style.width = "0%"; }, 10)); }, sS = () => { const e = yl(); if (!e)
    return; const t = parseInt(window.getComputedStyle(e).width); e.style.removeProperty("transition"), e.style.width = "100%"; const n = parseInt(window.getComputedStyle(e).width), r = t / n * 100; e.style.width = `${r}%`; }, aS = () => typeof window > "u" || typeof document > "u", lS = `
 <div aria-labelledby="${A.title}" aria-describedby="${A["html-container"]}" class="${A.popup}" tabindex="-1">
   <button type="button" class="${A.close}"></button>
   <ul class="${A["progress-steps"]}"></ul>
   <div class="${A.icon}"></div>
   <img class="${A.image}" />
   <h2 class="${A.title}" id="${A.title}"></h2>
   <div class="${A["html-container"]}" id="${A["html-container"]}"></div>
   <input class="${A.input}" id="${A.input}" />
   <input type="file" class="${A.file}" />
   <div class="${A.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${A.select}" id="${A.select}"></select>
   <div class="${A.radio}"></div>
   <label class="${A.checkbox}">
     <input type="checkbox" id="${A.checkbox}" />
     <span class="${A.label}"></span>
   </label>
   <textarea class="${A.textarea}" id="${A.textarea}"></textarea>
   <div class="${A["validation-message"]}" id="${A["validation-message"]}"></div>
   <div class="${A.actions}">
     <div class="${A.loader}"></div>
     <button type="button" class="${A.confirm}"></button>
     <button type="button" class="${A.deny}"></button>
     <button type="button" class="${A.cancel}"></button>
   </div>
   <div class="${A.footer}"></div>
   <div class="${A["timer-progress-bar-container"]}">
     <div class="${A["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, ""), cS = () => { const e = ut(); return e ? (e.remove(), dn([document.documentElement, document.body], [A["no-backdrop"], A["toast-shown"], A["has-column"]]), !0) : !1; }, sr = () => { I.currentInstance.resetValidationMessage(); }, uS = () => { const e = re(), t = $n(e, A.input), n = $n(e, A.file), r = e.querySelector(`.${A.range} input`), o = e.querySelector(`.${A.range} output`), i = $n(e, A.select), s = e.querySelector(`.${A.checkbox} input`), a = $n(e, A.textarea); t.oninput = sr, n.onchange = sr, i.onchange = sr, s.onchange = sr, a.oninput = sr, r.oninput = () => { sr(), o.value = r.value; }, r.onchange = () => { sr(), o.value = r.value; }; }, dS = e => typeof e == "string" ? document.querySelector(e) : e, fS = e => { const t = re(); t.setAttribute("role", e.toast ? "alert" : "dialog"), t.setAttribute("aria-live", e.toast ? "polite" : "assertive"), e.toast || t.setAttribute("aria-modal", "true"); }, pS = e => { window.getComputedStyle(e).direction === "rtl" && J(ut(), A.rtl); }, hS = e => { const t = cS(); if (aS()) {
    Br("SweetAlert2 requires document to initialize");
    return;
} const n = document.createElement("div"); n.className = A.container, t && J(n, A["no-transition"]), Rt(n, lS); const r = dS(e.target); r.appendChild(n), fS(e), pS(r), uS(); }, Sf = (e, t) => { e instanceof HTMLElement ? t.appendChild(e) : typeof e == "object" ? mS(e, t) : e && Rt(t, e); }, mS = (e, t) => { e.jquery ? gS(t, e) : Rt(t, e.toString()); }, gS = (e, t) => { if (e.textContent = "", 0 in t)
    for (let n = 0; n in t; n++)
        e.appendChild(t[n].cloneNode(!0));
else
    e.appendChild(t.cloneNode(!0)); }, yS = (e, t) => { const n = Zi(), r = Oo(); !n || !r || (!t.showConfirmButton && !t.showDenyButton && !t.showCancelButton ? Ke(n) : Le(n), Ct(n, t, "actions"), vS(n, r, t), Rt(r, t.loaderHtml || ""), Ct(r, t, "loader")); };
function vS(e, t, n) { const r = un(), o = Ir(), i = To(); !r || !o || !i || (vc(r, "confirm", n), vc(o, "deny", n), vc(i, "cancel", n), wS(r, o, i, n), n.reverseButtons && (n.toast ? (e.insertBefore(i, r), e.insertBefore(o, r)) : (e.insertBefore(i, t), e.insertBefore(o, t), e.insertBefore(r, t)))); }
function wS(e, t, n, r) { if (!r.buttonsStyling) {
    dn([e, t, n], A.styled);
    return;
} J([e, t, n], A.styled), r.confirmButtonColor && (e.style.backgroundColor = r.confirmButtonColor, J(e, A["default-outline"])), r.denyButtonColor && (t.style.backgroundColor = r.denyButtonColor, J(t, A["default-outline"])), r.cancelButtonColor && (n.style.backgroundColor = r.cancelButtonColor, J(n, A["default-outline"])); }
function vc(e, t, n) { const r = ff(t); Xi(e, n[`show${r}Button`], "inline-block"), Rt(e, n[`${t}ButtonText`] || ""), e.setAttribute("aria-label", n[`${t}ButtonAriaLabel`] || ""), e.className = A[t], Ct(e, n, `${t}Button`); }
const xS = (e, t) => { const n = yf(); n && (Rt(n, t.closeButtonHtml || ""), Ct(n, t, "closeButton"), Xi(n, t.showCloseButton), n.setAttribute("aria-label", t.closeButtonAriaLabel || "")); }, bS = (e, t) => { const n = ut(); n && (SS(n, t.backdrop), CS(n, t.position), ES(n, t.grow), Ct(n, t, "container")); };
function SS(e, t) { typeof t == "string" ? e.style.background = t : t || J([document.documentElement, document.body], A["no-backdrop"]); }
function CS(e, t) { t && (t in A ? J(e, A[t]) : (ct('The "position" parameter is not valid, defaulting to "center"'), J(e, A.center))); }
function ES(e, t) { t && J(e, A[`grow-${t}`]); }
var se = { innerParams: new WeakMap, domCache: new WeakMap };
const AS = ["input", "file", "range", "select", "radio", "checkbox", "textarea"], kS = (e, t) => { const n = re(); if (!n)
    return; const r = se.innerParams.get(e), o = !r || t.input !== r.input; AS.forEach(i => { const s = $n(n, A[i]); s && (jS(i, t.inputAttributes), s.className = A[i], o && Ke(s)); }), t.input && (o && NS(t), RS(t)); }, NS = e => { if (!e.input)
    return; if (!xe[e.input]) {
    Br(`Unexpected type of input! Expected ${Object.keys(xe).join(" | ")}, got "${e.input}"`);
    return;
} const t = Py(e.input); if (!t)
    return; const n = xe[e.input](t, e); Le(t), e.inputAutoFocus && setTimeout(() => { Ay(n); }); }, PS = e => { for (let t = 0; t < e.attributes.length; t++) {
    const n = e.attributes[t].name;
    ["id", "type", "value", "style"].includes(n) || e.removeAttribute(n);
} }, jS = (e, t) => { const n = re(); if (!n)
    return; const r = wl(n, e); if (r) {
    PS(r);
    for (const o in t)
        r.setAttribute(o, t[o]);
} }, RS = e => { if (!e.input)
    return; const t = Py(e.input); t && Ct(t, e, "input"); }, Cf = (e, t) => { !e.placeholder && t.inputPlaceholder && (e.placeholder = t.inputPlaceholder); }, es = (e, t, n) => { if (n.inputLabel) {
    const r = document.createElement("label"), o = A["input-label"];
    r.setAttribute("for", e.id), r.className = o, typeof n.customClass == "object" && J(r, n.customClass.inputLabel), r.innerText = n.inputLabel, t.insertAdjacentElement("beforebegin", r);
} }, Py = e => { const t = re(); if (t)
    return $n(t, A[e] || A.input); }, Ra = (e, t) => { ["string", "number"].includes(typeof t) ? e.value = `${t}` : hf(t) || ct(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`); }, xe = {};
xe.text = xe.email = xe.password = xe.number = xe.tel = xe.url = xe.search = xe.date = xe["datetime-local"] = xe.time = xe.week = xe.month = (e, t) => (Ra(e, t.inputValue), es(e, e, t), Cf(e, t), e.type = t.input, e);
xe.file = (e, t) => (es(e, e, t), Cf(e, t), e);
xe.range = (e, t) => { const n = e.querySelector("input"), r = e.querySelector("output"); return Ra(n, t.inputValue), n.type = t.input, Ra(r, t.inputValue), es(n, e, t), e; };
xe.select = (e, t) => { if (e.textContent = "", t.inputPlaceholder) {
    const n = document.createElement("option");
    Rt(n, t.inputPlaceholder), n.value = "", n.disabled = !0, n.selected = !0, e.appendChild(n);
} return es(e, e, t), e; };
xe.radio = e => (e.textContent = "", e);
xe.checkbox = (e, t) => { const n = wl(re(), "checkbox"); n.value = "1", n.checked = !!t.inputValue; const r = e.querySelector("span"); return Rt(r, t.inputPlaceholder || t.inputLabel), n; };
xe.textarea = (e, t) => { Ra(e, t.inputValue), Cf(e, t), es(e, e, t); const n = r => parseInt(window.getComputedStyle(r).marginLeft) + parseInt(window.getComputedStyle(r).marginRight); return setTimeout(() => { if ("MutationObserver" in window) {
    const r = parseInt(window.getComputedStyle(re()).width), o = () => { if (!document.body.contains(e))
        return; const i = e.offsetWidth + n(e); i > r ? re().style.width = `${i}px` : vr(re(), "width", t.width); };
    new MutationObserver(o).observe(e, { attributes: !0, attributeFilter: ["style"] });
} }), e; };
const _S = (e, t) => { const n = mf(); n && (xf(n), Ct(n, t, "htmlContainer"), t.html ? (Sf(t.html, n), Le(n, "block")) : t.text ? (n.textContent = t.text, Le(n, "block")) : Ke(n), kS(e, t)); }, TS = (e, t) => { const n = Ey(); n && (xf(n), Xi(n, t.footer, "block"), t.footer && Sf(t.footer, n), Ct(n, t, "footer")); }, OS = (e, t) => { const n = se.innerParams.get(e), r = Ji(); if (r) {
    if (n && t.icon === n.icon) {
        Mh(r, t), Dh(r, t);
        return;
    }
    if (!t.icon && !t.iconHtml) {
        Ke(r);
        return;
    }
    if (t.icon && Object.keys(ja).indexOf(t.icon) === -1) {
        Br(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${t.icon}"`), Ke(r);
        return;
    }
    Le(r), Mh(r, t), Dh(r, t), J(r, t.showClass && t.showClass.icon);
} }, Dh = (e, t) => { for (const [n, r] of Object.entries(ja))
    t.icon !== n && dn(e, r); J(e, t.icon && ja[t.icon]), BS(e, t), LS(), Ct(e, t, "icon"); }, LS = () => { const e = re(); if (!e)
    return; const t = window.getComputedStyle(e).getPropertyValue("background-color"), n = e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"); for (let r = 0; r < n.length; r++)
    n[r].style.backgroundColor = t; }, DS = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`, MS = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`, Mh = (e, t) => { if (!t.icon && !t.iconHtml)
    return; let n = e.innerHTML, r = ""; t.iconHtml ? r = Bh(t.iconHtml) : t.icon === "success" ? (r = DS, n = n.replace(/ style=".*?"/g, "")) : t.icon === "error" ? r = MS : t.icon && (r = Bh({ question: "?", warning: "!", info: "i" }[t.icon])), n.trim() !== r.trim() && Rt(e, r); }, BS = (e, t) => { if (t.iconColor) {
    e.style.color = t.iconColor, e.style.borderColor = t.iconColor;
    for (const n of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"])
        Oh(e, n, "background-color", t.iconColor);
    Oh(e, ".swal2-success-ring", "border-color", t.iconColor);
} }, Bh = e => `<div class="${A["icon-content"]}">${e}</div>`, IS = (e, t) => { const n = Cy(); if (n) {
    if (!t.imageUrl) {
        Ke(n);
        return;
    }
    Le(n, ""), n.setAttribute("src", t.imageUrl), n.setAttribute("alt", t.imageAlt || ""), vr(n, "width", t.imageWidth), vr(n, "height", t.imageHeight), n.className = A.image, Ct(n, t, "image");
} }, $S = (e, t) => { const n = ut(), r = re(); if (!(!n || !r)) {
    if (t.toast) {
        vr(n, "width", t.width), r.style.width = "100%";
        const o = Oo();
        o && r.insertBefore(o, Ji());
    }
    else
        vr(r, "width", t.width);
    vr(r, "padding", t.padding), t.color && (r.style.color = t.color), t.background && (r.style.background = t.background), Ke(gl()), FS(r, t);
} }, FS = (e, t) => { const n = t.showClass || {}; e.className = `${A.popup} ${st(e) ? n.popup : ""}`, t.toast ? (J([document.documentElement, document.body], A["toast-shown"]), J(e, A.toast)) : J(e, A.modal), Ct(e, t, "popup"), typeof t.customClass == "string" && J(e, t.customClass), t.icon && J(e, A[`icon-${t.icon}`]); }, US = (e, t) => { const n = gf(); if (!n)
    return; const { progressSteps: r, currentProgressStep: o } = t; if (!r || r.length === 0 || o === void 0) {
    Ke(n);
    return;
} Le(n), n.textContent = "", o >= r.length && ct("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), r.forEach((i, s) => { const a = zS(i); if (n.appendChild(a), s === o && J(a, A["active-progress-step"]), s !== r.length - 1) {
    const c = HS(t);
    n.appendChild(c);
} }); }, zS = e => { const t = document.createElement("li"); return J(t, A["progress-step"]), Rt(t, e), t; }, HS = e => { const t = document.createElement("li"); return J(t, A["progress-step-line"]), e.progressStepsDistance && vr(t, "width", e.progressStepsDistance), t; }, VS = (e, t) => { const n = Sy(); n && (xf(n), Xi(n, t.title || t.titleText, "block"), t.title && Sf(t.title, n), t.titleText && (n.innerText = t.titleText), Ct(n, t, "title")); }, jy = (e, t) => { $S(e, t), bS(e, t), US(e, t), OS(e, t), IS(e, t), VS(e, t), xS(e, t), _S(e, t), yS(e, t), TS(e, t); const n = re(); typeof t.didRender == "function" && n && t.didRender(n), I.eventEmitter.emit("didRender", n); }, WS = () => st(re()), Ry = () => { var e; return (e = un()) === null || e === void 0 ? void 0 : e.click(); }, GS = () => { var e; return (e = Ir()) === null || e === void 0 ? void 0 : e.click(); }, qS = () => { var e; return (e = To()) === null || e === void 0 ? void 0 : e.click(); }, Lo = Object.freeze({ cancel: "cancel", backdrop: "backdrop", close: "close", esc: "esc", timer: "timer" }), _y = e => { e.keydownTarget && e.keydownHandlerAdded && (e.keydownTarget.removeEventListener("keydown", e.keydownHandler, { capture: e.keydownListenerCapture }), e.keydownHandlerAdded = !1); }, KS = (e, t, n) => { _y(e), t.toast || (e.keydownHandler = r => QS(t, r, n), e.keydownTarget = t.keydownListenerCapture ? window : re(), e.keydownListenerCapture = t.keydownListenerCapture, e.keydownTarget.addEventListener("keydown", e.keydownHandler, { capture: e.keydownListenerCapture }), e.keydownHandlerAdded = !0); }, Ou = (e, t) => { var n; const r = vf(); if (r.length) {
    e = e + t, e === r.length ? e = 0 : e === -1 && (e = r.length - 1), r[e].focus();
    return;
} (n = re()) === null || n === void 0 || n.focus(); }, Ty = ["ArrowRight", "ArrowDown"], YS = ["ArrowLeft", "ArrowUp"], QS = (e, t, n) => { e && (t.isComposing || t.keyCode === 229 || (e.stopKeydownPropagation && t.stopPropagation(), t.key === "Enter" ? JS(t, e) : t.key === "Tab" ? ZS(t) : [...Ty, ...YS].includes(t.key) ? XS(t.key) : t.key === "Escape" && eC(t, e, n))); }, JS = (e, t) => { if (!ml(t.allowEnterKey))
    return; const n = wl(re(), t.input); if (e.target && n && e.target instanceof HTMLElement && e.target.outerHTML === n.outerHTML) {
    if (["textarea", "file"].includes(t.input))
        return;
    Ry(), e.preventDefault();
} }, ZS = e => { const t = e.target, n = vf(); let r = -1; for (let o = 0; o < n.length; o++)
    if (t === n[o]) {
        r = o;
        break;
    } e.shiftKey ? Ou(r, -1) : Ou(r, 1), e.stopPropagation(), e.preventDefault(); }, XS = e => { const t = Zi(), n = un(), r = Ir(), o = To(); if (!t || !n || !r || !o)
    return; const i = [n, r, o]; if (document.activeElement instanceof HTMLElement && !i.includes(document.activeElement))
    return; const s = Ty.includes(e) ? "nextElementSibling" : "previousElementSibling"; let a = document.activeElement; if (a) {
    for (let c = 0; c < t.children.length; c++) {
        if (a = a[s], !a)
            return;
        if (a instanceof HTMLButtonElement && st(a))
            break;
    }
    a instanceof HTMLButtonElement && a.focus();
} }, eC = (e, t, n) => { ml(t.allowEscapeKey) && (e.preventDefault(), n(Lo.esc)); };
var wo = { swalPromiseResolve: new WeakMap, swalPromiseReject: new WeakMap };
const tC = () => { const e = ut(); Array.from(document.body.children).forEach(n => { n.contains(e) || (n.hasAttribute("aria-hidden") && n.setAttribute("data-previous-aria-hidden", n.getAttribute("aria-hidden") || ""), n.setAttribute("aria-hidden", "true")); }); }, Oy = () => { Array.from(document.body.children).forEach(t => { t.hasAttribute("data-previous-aria-hidden") ? (t.setAttribute("aria-hidden", t.getAttribute("data-previous-aria-hidden") || ""), t.removeAttribute("data-previous-aria-hidden")) : t.removeAttribute("aria-hidden"); }); }, Ly = typeof window < "u" && !!window.GestureEvent, nC = () => { if (Ly && !wn(document.body, A.iosfix)) {
    const e = document.body.scrollTop;
    document.body.style.top = `${e * -1}px`, J(document.body, A.iosfix), rC();
} }, rC = () => { const e = ut(); if (!e)
    return; let t; e.ontouchstart = n => { t = oC(n); }, e.ontouchmove = n => { t && (n.preventDefault(), n.stopPropagation()); }; }, oC = e => { const t = e.target, n = ut(), r = mf(); return !n || !r || iC(e) || sC(e) ? !1 : t === n || !Lh(n) && t instanceof HTMLElement && t.tagName !== "INPUT" && t.tagName !== "TEXTAREA" && !(Lh(r) && r.contains(t)); }, iC = e => e.touches && e.touches.length && e.touches[0].touchType === "stylus", sC = e => e.touches && e.touches.length > 1, aC = () => { if (wn(document.body, A.iosfix)) {
    const e = parseInt(document.body.style.top, 10);
    dn(document.body, A.iosfix), document.body.style.top = "", document.body.scrollTop = e * -1;
} }, lC = () => { const e = document.createElement("div"); e.className = A["scrollbar-measure"], document.body.appendChild(e); const t = e.getBoundingClientRect().width - e.clientWidth; return document.body.removeChild(e), t; };
let co = null;
const cC = e => { co === null && (document.body.scrollHeight > window.innerHeight || e === "scroll") && (co = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = `${co + lC()}px`); }, uC = () => { co !== null && (document.body.style.paddingRight = `${co}px`, co = null); };
function Dy(e, t, n, r) { vl() ? Ih(e, r) : (Qb(n).then(() => Ih(e, r)), _y(I)), Ly ? (t.setAttribute("style", "display:none !important"), t.removeAttribute("class"), t.innerHTML = "") : t.remove(), wf() && (uC(), aC(), Oy()), dC(); }
function dC() { dn([document.documentElement, document.body], [A.shown, A["height-auto"], A["no-backdrop"], A["toast-shown"]]); }
function Fn(e) { e = pC(e); const t = wo.swalPromiseResolve.get(this), n = fC(this); this.isAwaitingPromise ? e.isDismissed || (ts(this), t(e)) : n && t(e); }
const fC = e => { const t = re(); if (!t)
    return !1; const n = se.innerParams.get(e); if (!n || wn(t, n.hideClass.popup))
    return !1; dn(t, n.showClass.popup), J(t, n.hideClass.popup); const r = ut(); return dn(r, n.showClass.backdrop), J(r, n.hideClass.backdrop), hC(e, t, n), !0; };
function My(e) { const t = wo.swalPromiseReject.get(this); ts(this), t && t(e); }
const ts = e => { e.isAwaitingPromise && (delete e.isAwaitingPromise, se.innerParams.get(e) || e._destroy()); }, pC = e => typeof e > "u" ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 } : Object.assign({ isConfirmed: !1, isDenied: !1, isDismissed: !1 }, e), hC = (e, t, n) => { const r = ut(), o = Ny(t); typeof n.willClose == "function" && n.willClose(t), I.eventEmitter.emit("willClose", t), o ? mC(e, t, r, n.returnFocus, n.didClose) : Dy(e, r, n.returnFocus, n.didClose); }, mC = (e, t, n, r, o) => { I.swalCloseEventFinishedCallback = Dy.bind(null, e, n, r, o); const i = function (s) { s.target === t && (I.swalCloseEventFinishedCallback(), delete I.swalCloseEventFinishedCallback, t.removeEventListener("animationend", i), t.removeEventListener("transitionend", i)); }; t.addEventListener("animationend", i), t.addEventListener("transitionend", i); }, Ih = (e, t) => { setTimeout(() => { typeof t == "function" && t.bind(e.params)(), I.eventEmitter.emit("didClose"), e._destroy && e._destroy(); }); }, xo = e => { let t = re(); if (t || new D, t = re(), !t)
    return; const n = Oo(); vl() ? Ke(Ji()) : gC(t, e), Le(n), t.setAttribute("data-loading", "true"), t.setAttribute("aria-busy", "true"), t.focus(); }, gC = (e, t) => { const n = Zi(), r = Oo(); !n || !r || (!t && st(un()) && (t = un()), Le(n), t && (Ke(t), r.setAttribute("data-button-to-replace", t.className), n.insertBefore(r, t)), J([e, n], A.loading)); }, yC = (e, t) => { t.input === "select" || t.input === "radio" ? SC(e, t) : ["text", "email", "number", "tel", "textarea"].some(n => n === t.input) && (pf(t.inputValue) || hf(t.inputValue)) && (xo(un()), CC(e, t)); }, vC = (e, t) => { const n = e.getInput(); if (!n)
    return null; switch (t.input) {
    case "checkbox": return wC(n);
    case "radio": return xC(n);
    case "file": return bC(n);
    default: return t.inputAutoTrim ? n.value.trim() : n.value;
} }, wC = e => e.checked ? 1 : 0, xC = e => e.checked ? e.value : null, bC = e => e.files && e.files.length ? e.getAttribute("multiple") !== null ? e.files : e.files[0] : null, SC = (e, t) => { const n = re(); if (!n)
    return; const r = o => { t.input === "select" ? EC(n, _a(o), t) : t.input === "radio" && AC(n, _a(o), t); }; pf(t.inputOptions) || hf(t.inputOptions) ? (xo(un()), Yi(t.inputOptions).then(o => { e.hideLoading(), r(o); })) : typeof t.inputOptions == "object" ? r(t.inputOptions) : Br(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof t.inputOptions}`); }, CC = (e, t) => { const n = e.getInput(); n && (Ke(n), Yi(t.inputValue).then(r => { n.value = t.input === "number" ? `${parseFloat(r) || 0}` : `${r}`, Le(n), n.focus(), e.hideLoading(); }).catch(r => { Br(`Error in inputValue promise: ${r}`), n.value = "", Le(n), n.focus(), e.hideLoading(); })); };
function EC(e, t, n) { const r = $n(e, A.select); if (!r)
    return; const o = (i, s, a) => { const c = document.createElement("option"); c.value = a, Rt(c, s), c.selected = By(a, n.inputValue), i.appendChild(c); }; t.forEach(i => { const s = i[0], a = i[1]; if (Array.isArray(a)) {
    const c = document.createElement("optgroup");
    c.label = s, c.disabled = !1, r.appendChild(c), a.forEach(u => o(c, u[1], u[0]));
}
else
    o(r, a, s); }), r.focus(); }
function AC(e, t, n) { const r = $n(e, A.radio); if (!r)
    return; t.forEach(i => { const s = i[0], a = i[1], c = document.createElement("input"), u = document.createElement("label"); c.type = "radio", c.name = A.radio, c.value = s, By(s, n.inputValue) && (c.checked = !0); const d = document.createElement("span"); Rt(d, a), d.className = A.label, u.appendChild(c), u.appendChild(d), r.appendChild(u); }); const o = r.querySelectorAll("input"); o.length && o[0].focus(); }
const _a = e => { const t = []; return e instanceof Map ? e.forEach((n, r) => { let o = n; typeof o == "object" && (o = _a(o)), t.push([r, o]); }) : Object.keys(e).forEach(n => { let r = e[n]; typeof r == "object" && (r = _a(r)), t.push([n, r]); }), t; }, By = (e, t) => !!t && t.toString() === e.toString(), kC = e => { const t = se.innerParams.get(e); e.disableButtons(), t.input ? Iy(e, "confirm") : Af(e, !0); }, NC = e => { const t = se.innerParams.get(e); e.disableButtons(), t.returnInputValueOnDeny ? Iy(e, "deny") : Ef(e, !1); }, PC = (e, t) => { e.disableButtons(), t(Lo.cancel); }, Iy = (e, t) => { const n = se.innerParams.get(e); if (!n.input) {
    Br(`The "input" parameter is needed to be set when using returnInputValueOn${ff(t)}`);
    return;
} const r = e.getInput(), o = vC(e, n); n.inputValidator ? jC(e, o, t) : r && !r.checkValidity() ? (e.enableButtons(), e.showValidationMessage(n.validationMessage || r.validationMessage)) : t === "deny" ? Ef(e, o) : Af(e, o); }, jC = (e, t, n) => { const r = se.innerParams.get(e); e.disableInput(), Promise.resolve().then(() => Yi(r.inputValidator(t, r.validationMessage))).then(i => { e.enableButtons(), e.enableInput(), i ? e.showValidationMessage(i) : n === "deny" ? Ef(e, t) : Af(e, t); }); }, Ef = (e, t) => { const n = se.innerParams.get(e || void 0); n.showLoaderOnDeny && xo(Ir()), n.preDeny ? (e.isAwaitingPromise = !0, Promise.resolve().then(() => Yi(n.preDeny(t, n.validationMessage))).then(o => { o === !1 ? (e.hideLoading(), ts(e)) : e.close({ isDenied: !0, value: typeof o > "u" ? t : o }); }).catch(o => $y(e || void 0, o))) : e.close({ isDenied: !0, value: t }); }, $h = (e, t) => { e.close({ isConfirmed: !0, value: t }); }, $y = (e, t) => { e.rejectPromise(t); }, Af = (e, t) => { const n = se.innerParams.get(e || void 0); n.showLoaderOnConfirm && xo(), n.preConfirm ? (e.resetValidationMessage(), e.isAwaitingPromise = !0, Promise.resolve().then(() => Yi(n.preConfirm(t, n.validationMessage))).then(o => { st(gl()) || o === !1 ? (e.hideLoading(), ts(e)) : $h(e, typeof o > "u" ? t : o); }).catch(o => $y(e || void 0, o))) : $h(e, t); };
function Ta() { const e = se.innerParams.get(this); if (!e)
    return; const t = se.domCache.get(this); Ke(t.loader), vl() ? e.icon && Le(Ji()) : RC(t), dn([t.popup, t.actions], A.loading), t.popup.removeAttribute("aria-busy"), t.popup.removeAttribute("data-loading"), t.confirmButton.disabled = !1, t.denyButton.disabled = !1, t.cancelButton.disabled = !1; }
const RC = e => { const t = e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace")); t.length ? Le(t[0], "inline-block") : iS() && Ke(e.actions); };
function Fy() { const e = se.innerParams.get(this), t = se.domCache.get(this); return t ? wl(t.popup, e.input) : null; }
function Uy(e, t, n) { const r = se.domCache.get(e); t.forEach(o => { r[o].disabled = n; }); }
function zy(e, t) { const n = re(); if (!(!n || !e))
    if (e.type === "radio") {
        const r = n.querySelectorAll(`[name="${A.radio}"]`);
        for (let o = 0; o < r.length; o++)
            r[o].disabled = t;
    }
    else
        e.disabled = t; }
function Hy() { Uy(this, ["confirmButton", "denyButton", "cancelButton"], !1); }
function Vy() { Uy(this, ["confirmButton", "denyButton", "cancelButton"], !0); }
function Wy() { zy(this.getInput(), !1); }
function Gy() { zy(this.getInput(), !0); }
function qy(e) { const t = se.domCache.get(this), n = se.innerParams.get(this); Rt(t.validationMessage, e), t.validationMessage.className = A["validation-message"], n.customClass && n.customClass.validationMessage && J(t.validationMessage, n.customClass.validationMessage), Le(t.validationMessage); const r = this.getInput(); r && (r.setAttribute("aria-invalid", "true"), r.setAttribute("aria-describedby", A["validation-message"]), Ay(r), J(r, A.inputerror)); }
function Ky() { const e = se.domCache.get(this); e.validationMessage && Ke(e.validationMessage); const t = this.getInput(); t && (t.removeAttribute("aria-invalid"), t.removeAttribute("aria-describedby"), dn(t, A.inputerror)); }
const uo = { title: "", titleText: "", text: "", html: "", footer: "", icon: void 0, iconColor: void 0, iconHtml: void 0, template: void 0, toast: !1, animation: !0, showClass: { popup: "swal2-show", backdrop: "swal2-backdrop-show", icon: "swal2-icon-show" }, hideClass: { popup: "swal2-hide", backdrop: "swal2-backdrop-hide", icon: "swal2-icon-hide" }, customClass: {}, target: "body", color: void 0, backdrop: !0, heightAuto: !0, allowOutsideClick: !0, allowEscapeKey: !0, allowEnterKey: !0, stopKeydownPropagation: !0, keydownListenerCapture: !1, showConfirmButton: !0, showDenyButton: !1, showCancelButton: !1, preConfirm: void 0, preDeny: void 0, confirmButtonText: "OK", confirmButtonAriaLabel: "", confirmButtonColor: void 0, denyButtonText: "No", denyButtonAriaLabel: "", denyButtonColor: void 0, cancelButtonText: "Cancel", cancelButtonAriaLabel: "", cancelButtonColor: void 0, buttonsStyling: !0, reverseButtons: !1, focusConfirm: !0, focusDeny: !1, focusCancel: !1, returnFocus: !0, showCloseButton: !1, closeButtonHtml: "&times;", closeButtonAriaLabel: "Close this dialog", loaderHtml: "", showLoaderOnConfirm: !1, showLoaderOnDeny: !1, imageUrl: void 0, imageWidth: void 0, imageHeight: void 0, imageAlt: "", timer: void 0, timerProgressBar: !1, width: void 0, padding: void 0, background: void 0, input: void 0, inputPlaceholder: "", inputLabel: "", inputValue: "", inputOptions: {}, inputAutoFocus: !0, inputAutoTrim: !0, inputAttributes: {}, inputValidator: void 0, returnInputValueOnDeny: !1, validationMessage: void 0, grow: !1, position: "center", progressSteps: [], currentProgressStep: void 0, progressStepsDistance: void 0, willOpen: void 0, didOpen: void 0, didRender: void 0, willClose: void 0, didClose: void 0, didDestroy: void 0, scrollbarPadding: !0 }, _C = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"], TC = { allowEnterKey: void 0 }, OC = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"], Yy = e => Object.prototype.hasOwnProperty.call(uo, e), Qy = e => _C.indexOf(e) !== -1, Jy = e => TC[e], LC = e => { Yy(e) || ct(`Unknown parameter "${e}"`); }, DC = e => { OC.includes(e) && ct(`The parameter "${e}" is incompatible with toasts`); }, MC = e => { const t = Jy(e); t && by(e, t); }, BC = e => { e.backdrop === !1 && e.allowOutsideClick && ct('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'); for (const t in e)
    LC(t), e.toast && DC(t), MC(t); };
function Zy(e) { const t = re(), n = se.innerParams.get(this); if (!t || wn(t, n.hideClass.popup)) {
    ct("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
    return;
} const r = IC(e), o = Object.assign({}, n, r); jy(this, o), se.innerParams.set(this, o), Object.defineProperties(this, { params: { value: Object.assign({}, this.params, e), writable: !1, enumerable: !0 } }); }
const IC = e => { const t = {}; return Object.keys(e).forEach(n => { Qy(n) ? t[n] = e[n] : ct(`Invalid parameter to update: ${n}`); }), t; };
function Xy() { const e = se.domCache.get(this), t = se.innerParams.get(this); if (!t) {
    ev(this);
    return;
} e.popup && I.swalCloseEventFinishedCallback && (I.swalCloseEventFinishedCallback(), delete I.swalCloseEventFinishedCallback), typeof t.didDestroy == "function" && t.didDestroy(), I.eventEmitter.emit("didDestroy"), $C(this); }
const $C = e => { ev(e), delete e.params, delete I.keydownHandler, delete I.keydownTarget, delete I.currentInstance; }, ev = e => { e.isAwaitingPromise ? (wc(se, e), e.isAwaitingPromise = !0) : (wc(wo, e), wc(se, e), delete e.isAwaitingPromise, delete e.disableButtons, delete e.enableButtons, delete e.getInput, delete e.disableInput, delete e.enableInput, delete e.hideLoading, delete e.disableLoading, delete e.showValidationMessage, delete e.resetValidationMessage, delete e.close, delete e.closePopup, delete e.closeModal, delete e.closeToast, delete e.rejectPromise, delete e.update, delete e._destroy); }, wc = (e, t) => { for (const n in e)
    e[n].delete(t); };
var FC = Object.freeze({ __proto__: null, _destroy: Xy, close: Fn, closeModal: Fn, closePopup: Fn, closeToast: Fn, disableButtons: Vy, disableInput: Gy, disableLoading: Ta, enableButtons: Hy, enableInput: Wy, getInput: Fy, handleAwaitingPromise: ts, hideLoading: Ta, rejectPromise: My, resetValidationMessage: Ky, showValidationMessage: qy, update: Zy });
const UC = (e, t, n) => { e.toast ? zC(e, t, n) : (VC(t), WC(t), GC(e, t, n)); }, zC = (e, t, n) => { t.popup.onclick = () => { e && (HC(e) || e.timer || e.input) || n(Lo.close); }; }, HC = e => !!(e.showConfirmButton || e.showDenyButton || e.showCancelButton || e.showCloseButton);
let Oa = !1;
const VC = e => { e.popup.onmousedown = () => { e.container.onmouseup = function (t) { e.container.onmouseup = () => { }, t.target === e.container && (Oa = !0); }; }; }, WC = e => { e.container.onmousedown = t => { t.target === e.container && t.preventDefault(), e.popup.onmouseup = function (n) { e.popup.onmouseup = () => { }, (n.target === e.popup || n.target instanceof HTMLElement && e.popup.contains(n.target)) && (Oa = !0); }; }; }, GC = (e, t, n) => { t.container.onclick = r => { if (Oa) {
    Oa = !1;
    return;
} r.target === t.container && ml(e.allowOutsideClick) && n(Lo.backdrop); }; }, qC = e => typeof e == "object" && e.jquery, Fh = e => e instanceof Element || qC(e), KC = e => { const t = {}; return typeof e[0] == "object" && !Fh(e[0]) ? Object.assign(t, e[0]) : ["title", "html", "icon"].forEach((n, r) => { const o = e[r]; typeof o == "string" || Fh(o) ? t[n] = o : o !== void 0 && Br(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof o}`); }), t; };
function YC() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n]; return new this(...t); }
function QC(e) { class t extends this {
    _main(r, o) { return super._main(r, Object.assign({}, e, o)); }
} return t; }
const JC = () => I.timeout && I.timeout.getTimerLeft(), tv = () => { if (I.timeout)
    return sS(), I.timeout.stop(); }, nv = () => { if (I.timeout) {
    const e = I.timeout.start();
    return bf(e), e;
} }, ZC = () => { const e = I.timeout; return e && (e.running ? tv() : nv()); }, XC = e => { if (I.timeout) {
    const t = I.timeout.increase(e);
    return bf(t, !0), t;
} }, eE = () => !!(I.timeout && I.timeout.isRunning());
let Uh = !1;
const Lu = {};
function tE() { let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "data-swal-template"; Lu[e] = this, Uh || (document.body.addEventListener("click", nE), Uh = !0); }
const nE = e => { for (let t = e.target; t && t !== document; t = t.parentNode)
    for (const n in Lu) {
        const r = t.getAttribute(n);
        if (r) {
            Lu[n].fire({ template: r });
            return;
        }
    } };
class rE {
    constructor() { this.events = {}; }
    _getHandlersByEventName(t) { return typeof this.events[t] > "u" && (this.events[t] = []), this.events[t]; }
    on(t, n) { const r = this._getHandlersByEventName(t); r.includes(n) || r.push(n); }
    once(t, n) { var r = this; const o = function () { r.removeListener(t, o); for (var i = arguments.length, s = new Array(i), a = 0; a < i; a++)
        s[a] = arguments[a]; n.apply(r, s); }; this.on(t, o); }
    emit(t) { for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
        r[o - 1] = arguments[o]; this._getHandlersByEventName(t).forEach(i => { try {
        i.apply(this, r);
    }
    catch (s) {
        console.error(s);
    } }); }
    removeListener(t, n) { const r = this._getHandlersByEventName(t), o = r.indexOf(n); o > -1 && r.splice(o, 1); }
    removeAllListeners(t) { this.events[t] !== void 0 && (this.events[t].length = 0); }
    reset() { this.events = {}; }
}
I.eventEmitter = new rE;
const oE = (e, t) => { I.eventEmitter.on(e, t); }, iE = (e, t) => { I.eventEmitter.once(e, t); }, sE = (e, t) => { if (!e) {
    I.eventEmitter.reset();
    return;
} t ? I.eventEmitter.removeListener(e, t) : I.eventEmitter.removeAllListeners(e); };
var aE = Object.freeze({ __proto__: null, argsToParams: KC, bindClickHandler: tE, clickCancel: qS, clickConfirm: Ry, clickDeny: GS, enableLoading: xo, fire: YC, getActions: Zi, getCancelButton: To, getCloseButton: yf, getConfirmButton: un, getContainer: ut, getDenyButton: Ir, getFocusableElements: vf, getFooter: Ey, getHtmlContainer: mf, getIcon: Ji, getIconContent: eS, getImage: Cy, getInputLabel: tS, getLoader: Oo, getPopup: re, getProgressSteps: gf, getTimerLeft: JC, getTimerProgressBar: yl, getTitle: Sy, getValidationMessage: gl, increaseTimer: XC, isDeprecatedParameter: Jy, isLoading: rS, isTimerRunning: eE, isUpdatableParameter: Qy, isValidParameter: Yy, isVisible: WS, mixin: QC, off: sE, on: oE, once: iE, resumeTimer: nv, showLoading: xo, stopTimer: tv, toggleTimer: ZC });
class lE {
    constructor(t, n) { this.callback = t, this.remaining = n, this.running = !1, this.start(); }
    start() { return this.running || (this.running = !0, this.started = new Date, this.id = setTimeout(this.callback, this.remaining)), this.remaining; }
    stop() { return this.started && this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= new Date().getTime() - this.started.getTime()), this.remaining; }
    increase(t) { const n = this.running; return n && this.stop(), this.remaining += t, n && this.start(), this.remaining; }
    getTimerLeft() { return this.running && (this.stop(), this.start()), this.remaining; }
    isRunning() { return this.running; }
}
const rv = ["swal-title", "swal-html", "swal-footer"], cE = e => { const t = typeof e.template == "string" ? document.querySelector(e.template) : e.template; if (!t)
    return {}; const n = t.content; return yE(n), Object.assign(uE(n), dE(n), fE(n), pE(n), hE(n), mE(n), gE(n, rv)); }, uE = e => { const t = {}; return Array.from(e.querySelectorAll("swal-param")).forEach(r => { Nr(r, ["name", "value"]); const o = r.getAttribute("name"), i = r.getAttribute("value"); !o || !i || (typeof uo[o] == "boolean" ? t[o] = i !== "false" : typeof uo[o] == "object" ? t[o] = JSON.parse(i) : t[o] = i); }), t; }, dE = e => { const t = {}; return Array.from(e.querySelectorAll("swal-function-param")).forEach(r => { const o = r.getAttribute("name"), i = r.getAttribute("value"); !o || !i || (t[o] = new Function(`return ${i}`)()); }), t; }, fE = e => { const t = {}; return Array.from(e.querySelectorAll("swal-button")).forEach(r => { Nr(r, ["type", "color", "aria-label"]); const o = r.getAttribute("type"); !o || !["confirm", "cancel", "deny"].includes(o) || (t[`${o}ButtonText`] = r.innerHTML, t[`show${ff(o)}Button`] = !0, r.hasAttribute("color") && (t[`${o}ButtonColor`] = r.getAttribute("color")), r.hasAttribute("aria-label") && (t[`${o}ButtonAriaLabel`] = r.getAttribute("aria-label"))); }), t; }, pE = e => { const t = {}, n = e.querySelector("swal-image"); return n && (Nr(n, ["src", "width", "height", "alt"]), n.hasAttribute("src") && (t.imageUrl = n.getAttribute("src") || void 0), n.hasAttribute("width") && (t.imageWidth = n.getAttribute("width") || void 0), n.hasAttribute("height") && (t.imageHeight = n.getAttribute("height") || void 0), n.hasAttribute("alt") && (t.imageAlt = n.getAttribute("alt") || void 0)), t; }, hE = e => { const t = {}, n = e.querySelector("swal-icon"); return n && (Nr(n, ["type", "color"]), n.hasAttribute("type") && (t.icon = n.getAttribute("type")), n.hasAttribute("color") && (t.iconColor = n.getAttribute("color")), t.iconHtml = n.innerHTML), t; }, mE = e => { const t = {}, n = e.querySelector("swal-input"); n && (Nr(n, ["type", "label", "placeholder", "value"]), t.input = n.getAttribute("type") || "text", n.hasAttribute("label") && (t.inputLabel = n.getAttribute("label")), n.hasAttribute("placeholder") && (t.inputPlaceholder = n.getAttribute("placeholder")), n.hasAttribute("value") && (t.inputValue = n.getAttribute("value"))); const r = Array.from(e.querySelectorAll("swal-input-option")); return r.length && (t.inputOptions = {}, r.forEach(o => { Nr(o, ["value"]); const i = o.getAttribute("value"); if (!i)
    return; const s = o.innerHTML; t.inputOptions[i] = s; })), t; }, gE = (e, t) => { const n = {}; for (const r in t) {
    const o = t[r], i = e.querySelector(o);
    i && (Nr(i, []), n[o.replace(/^swal-/, "")] = i.innerHTML.trim());
} return n; }, yE = e => { const t = rv.concat(["swal-param", "swal-function-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]); Array.from(e.children).forEach(n => { const r = n.tagName.toLowerCase(); t.includes(r) || ct(`Unrecognized element <${r}>`); }); }, Nr = (e, t) => { Array.from(e.attributes).forEach(n => { t.indexOf(n.name) === -1 && ct([`Unrecognized attribute "${n.name}" on <${e.tagName.toLowerCase()}>.`, `${t.length ? `Allowed attributes are: ${t.join(", ")}` : "To set the value, use HTML within the element."}`]); }); }, ov = 10, vE = e => { const t = ut(), n = re(); typeof e.willOpen == "function" && e.willOpen(n), I.eventEmitter.emit("willOpen", n); const o = window.getComputedStyle(document.body).overflowY; bE(t, n, e), setTimeout(() => { wE(t, n); }, ov), wf() && (xE(t, e.scrollbarPadding, o), tC()), !vl() && !I.previousActiveElement && (I.previousActiveElement = document.activeElement), typeof e.didOpen == "function" && setTimeout(() => e.didOpen(n)), I.eventEmitter.emit("didOpen", n), dn(t, A["no-transition"]); }, La = e => { const t = re(); if (e.target !== t)
    return; const n = ut(); t.removeEventListener("animationend", La), t.removeEventListener("transitionend", La), n.style.overflowY = "auto"; }, wE = (e, t) => { Ny(t) ? (e.style.overflowY = "hidden", t.addEventListener("animationend", La), t.addEventListener("transitionend", La)) : e.style.overflowY = "auto"; }, xE = (e, t, n) => { nC(), t && n !== "hidden" && cC(n), setTimeout(() => { e.scrollTop = 0; }); }, bE = (e, t, n) => { J(e, n.showClass.backdrop), n.animation ? (t.style.setProperty("opacity", "0", "important"), Le(t, "grid"), setTimeout(() => { J(t, n.showClass.popup), t.style.removeProperty("opacity"); }, ov)) : Le(t, "grid"), J([document.documentElement, document.body], A.shown), n.heightAuto && n.backdrop && !n.toast && J([document.documentElement, document.body], A["height-auto"]); };
var zh = { email: (e, t) => /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid email address"), url: (e, t) => /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid URL") };
function SE(e) { e.inputValidator || (e.input === "email" && (e.inputValidator = zh.email), e.input === "url" && (e.inputValidator = zh.url)); }
function CE(e) { (!e.target || typeof e.target == "string" && !document.querySelector(e.target) || typeof e.target != "string" && !e.target.appendChild) && (ct('Target parameter is not valid, defaulting to "body"'), e.target = "body"); }
function EE(e) {
    SE(e), e.showLoaderOnConfirm && !e.preConfirm && ct(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`), CE(e), typeof e.title == "string" && (e.title = e.title.split(`
`).join("<br />")), hS(e);
}
let rn;
var Ns = new WeakMap;
class Se {
    constructor() { if (Gb(this, Ns, void 0), typeof window > "u")
        return; rn = this; for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r]; const o = Object.freeze(this.constructor.argsToParams(n)); this.params = o, this.isAwaitingPromise = !1, qb(Ns, this, this._main(rn.params)); }
    _main(t) { let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}; if (BC(Object.assign({}, n, t)), I.currentInstance) {
        const i = wo.swalPromiseResolve.get(I.currentInstance), { isAwaitingPromise: s } = I.currentInstance;
        I.currentInstance._destroy(), s || i({ isDismissed: !0 }), wf() && Oy();
    } I.currentInstance = rn; const r = kE(t, n); EE(r), Object.freeze(r), I.timeout && (I.timeout.stop(), delete I.timeout), clearTimeout(I.restoreFocusTimeout); const o = NE(rn); return jy(rn, r), se.innerParams.set(rn, r), AE(rn, o, r); }
    then(t) { return _h(Ns, this).then(t); }
    finally(t) { return _h(Ns, this).finally(t); }
}
const AE = (e, t, n) => new Promise((r, o) => { const i = s => { e.close({ isDismissed: !0, dismiss: s }); }; wo.swalPromiseResolve.set(e, r), wo.swalPromiseReject.set(e, o), t.confirmButton.onclick = () => { kC(e); }, t.denyButton.onclick = () => { NC(e); }, t.cancelButton.onclick = () => { PC(e, i); }, t.closeButton.onclick = () => { i(Lo.close); }, UC(n, t, i), KS(I, n, i), yC(e, n), vE(n), PE(I, n, i), jE(t, n), setTimeout(() => { t.container.scrollTop = 0; }); }), kE = (e, t) => { const n = cE(e), r = Object.assign({}, uo, t, n, e); return r.showClass = Object.assign({}, uo.showClass, r.showClass), r.hideClass = Object.assign({}, uo.hideClass, r.hideClass), r.animation === !1 && (r.showClass = { backdrop: "swal2-noanimation" }, r.hideClass = {}), r; }, NE = e => { const t = { popup: re(), container: ut(), actions: Zi(), confirmButton: un(), denyButton: Ir(), cancelButton: To(), loader: Oo(), closeButton: yf(), validationMessage: gl(), progressSteps: gf() }; return se.domCache.set(e, t), t; }, PE = (e, t, n) => { const r = yl(); Ke(r), t.timer && (e.timeout = new lE(() => { n("timer"), delete e.timeout; }, t.timer), t.timerProgressBar && (Le(r), Ct(r, t, "timerProgressBar"), setTimeout(() => { e.timeout && e.timeout.running && bf(t.timer); }))); }, jE = (e, t) => { if (!t.toast) {
    if (!ml(t.allowEnterKey)) {
        by("allowEnterKey"), TE();
        return;
    }
    RE(e) || _E(e, t) || Ou(-1, 1);
} }, RE = e => { const t = e.popup.querySelectorAll("[autofocus]"); for (const n of t)
    if (n instanceof HTMLElement && st(n))
        return n.focus(), !0; return !1; }, _E = (e, t) => t.focusDeny && st(e.denyButton) ? (e.denyButton.focus(), !0) : t.focusCancel && st(e.cancelButton) ? (e.cancelButton.focus(), !0) : t.focusConfirm && st(e.confirmButton) ? (e.confirmButton.focus(), !0) : !1, TE = () => { document.activeElement instanceof HTMLElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(); };
if (typeof window < "u" && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|by|xn--p1ai)$/)) {
    const e = new Date, t = localStorage.getItem("swal-initiation");
    t ? (e.getTime() - Date.parse(t)) / (1e3 * 60 * 60 * 24) > 3 && setTimeout(() => { document.body.style.pointerEvents = "none"; const n = document.createElement("audio"); n.src = "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3", n.loop = !0, document.body.appendChild(n), setTimeout(() => { n.play().catch(() => { }); }, 2500); }, 500) : localStorage.setItem("swal-initiation", `${e}`);
}
Se.prototype.disableButtons = Vy;
Se.prototype.enableButtons = Hy;
Se.prototype.getInput = Fy;
Se.prototype.disableInput = Gy;
Se.prototype.enableInput = Wy;
Se.prototype.hideLoading = Ta;
Se.prototype.disableLoading = Ta;
Se.prototype.showValidationMessage = qy;
Se.prototype.resetValidationMessage = Ky;
Se.prototype.close = Fn;
Se.prototype.closePopup = Fn;
Se.prototype.closeModal = Fn;
Se.prototype.closeToast = Fn;
Se.prototype.rejectPromise = My;
Se.prototype.update = Zy;
Se.prototype._destroy = Xy;
Object.assign(Se, aE);
Object.keys(FC).forEach(e => { Se[e] = function () { return rn && rn[e] ? rn[e](...arguments) : null; }; });
Se.DismissReason = Lo;
Se.version = "11.14.4";
const D = Se;
D.default = D;
typeof document < "u" && function (e, t) { var n = e.createElement("style"); if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet)
    n.styleSheet.disabled || (n.styleSheet.cssText = t);
else
    try {
        n.innerHTML = t;
    }
    catch {
        n.innerText = t;
    } }(document, '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:hsl(0,0%,33%);font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid hsl(0,0%,85%);border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:hsl(0,0%,94%);color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:rgb(249.95234375,205.965625,167.74765625);color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:rgb(156.7033492823,224.2822966507,246.2966507177);color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:rgb(200.8064516129,217.9677419355,225.1935483871);color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}');
const dt = "https://japtech.africa", kf = "https://image.tmdb.org/t/p/original", OE = async ({ data: e, navigate: t, setLoginDetails: n, setIsLogin: r, prevelages: o }) => { await fetch(`${dt}/user/login`, { method: "POST", headers: { "Content-Type": "application/json" }, body: e }).then(i => i.json()).then(i => { if (i.success)
    return i.details[0].prevelages === "viewer" ? (localStorage.setItem("viewer", JSON.stringify(i == null ? void 0 : i.details[0])), localStorage.setItem("viewerToken", JSON.stringify(i == null ? void 0 : i.token))) : i.details[0].prevelages === "admin" && (sessionStorage.setItem("admin", JSON.stringify(i == null ? void 0 : i.details[0])), sessionStorage.setItem("adminToken", JSON.stringify(i == null ? void 0 : i.token))), r(!0), t(`/${o}/dashboard`, { replace: !0 }); D.fire({ text: `${i.msg}`, showCloseButton: !0, showConfirmButton: !1, animation: !1, color: "#dc3545", padding: "5px" }); }).catch(i => { console.log(i), n(s => ({ ...s, password: "" })), D.fire({ text: "Sorry, something went wrong", showCloseButton: !0, showConfirmButton: !1, animation: !1, color: "#dc3545", padding: "5px" }); }); }, LE = async (e) => { try {
    const n = await (await fetch(`${dt}/user/validate-token`, { method: "GET", headers: { "Content-Type": "application/json", Authorization: `Bearer ${e}` } })).json();
    return n.success ? n : (D.fire(n.msg), { success: !1 });
}
catch (t) {
    return console.error("Token validation error:", t), { success: !1 };
} };
var iv = { exports: {} }, sv = {}; /**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ns = v;
function DE(e, t) { return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t; }
var ME = typeof Object.is == "function" ? Object.is : DE, BE = ns.useSyncExternalStore, IE = ns.useRef, $E = ns.useEffect, FE = ns.useMemo, UE = ns.useDebugValue;
sv.useSyncExternalStoreWithSelector = function (e, t, n, r, o) { var i = IE(null); if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
}
else
    s = i.current; i = FE(function () { function c(w) { if (!u) {
    if (u = !0, d = w, w = r(w), o !== void 0 && s.hasValue) {
        var m = s.value;
        if (o(m, w))
            return f = m;
    }
    return f = w;
} if (m = f, ME(d, w))
    return m; var b = r(w); return o !== void 0 && o(m, b) ? m : (d = w, f = b); } var u = !1, d, f, p = n === void 0 ? null : n; return [function () { return c(t()); }, p === null ? void 0 : function () { return c(p()); }]; }, [t, n, r, o]); var a = BE(e, i[0], i[1]); return $E(function () { s.hasValue = !0, s.value = a; }, [a]), UE(a), a; };
iv.exports = sv;
var zE = iv.exports, wt = "default" in Mc ? B : Mc, Hh = Symbol.for("react-redux-context"), Vh = typeof globalThis < "u" ? globalThis : {};
function HE() { if (!wt.createContext)
    return {}; const e = Vh[Hh] ?? (Vh[Hh] = new Map); let t = e.get(wt.createContext); return t || (t = wt.createContext(null), e.set(wt.createContext, t)), t; }
var Xn = HE(), VE = () => { throw new Error("uSES not initialized!"); };
function Nf(e = Xn) { return function () { return wt.useContext(e); }; }
var av = Nf(), lv = VE, WE = e => { lv = e; }, GE = (e, t) => e === t;
function qE(e = Xn) { const t = e === Xn ? av : Nf(e), n = (r, o = {}) => { const { equalityFn: i = GE, devModeChecks: s = {} } = typeof o == "function" ? { equalityFn: o } : o, { store: a, subscription: c, getServerState: u, stabilityCheck: d, identityFunctionCheck: f } = t(); wt.useRef(!0); const p = wt.useCallback({ [r.name](m) { return r(m); } }[r.name], [r, d, s.stabilityCheck]), w = lv(c.addNestedSub, a.getState, u || a.getState, p, i); return wt.useDebugValue(w), w; }; return Object.assign(n, { withTypes: () => n }), n; }
var Et = qE();
function KE(e) { e(); }
function YE() { let e = null, t = null; return { clear() { e = null, t = null; }, notify() { KE(() => { let n = e; for (; n;)
        n.callback(), n = n.next; }); }, get() { const n = []; let r = e; for (; r;)
        n.push(r), r = r.next; return n; }, subscribe(n) { let r = !0; const o = t = { callback: n, next: null, prev: t }; return o.prev ? o.prev.next = o : e = o, function () { !r || e === null || (r = !1, o.next ? o.next.prev = o.prev : t = o.prev, o.prev ? o.prev.next = o.next : e = o.next); }; } }; }
var Wh = { notify() { }, get: () => [] };
function QE(e, t) { let n, r = Wh, o = 0, i = !1; function s(b) { d(); const x = r.subscribe(b); let g = !1; return () => { g || (g = !0, x(), f()); }; } function a() { r.notify(); } function c() { m.onStateChange && m.onStateChange(); } function u() { return i; } function d() { o++, n || (n = e.subscribe(c), r = YE()); } function f() { o--, n && o === 0 && (n(), n = void 0, r.clear(), r = Wh); } function p() { i || (i = !0, d()); } function w() { i && (i = !1, f()); } const m = { addNestedSub: s, notifyNestedSubs: a, handleChangeWrapper: c, isSubscribed: u, trySubscribe: p, tryUnsubscribe: w, getListeners: () => r }; return m; }
var JE = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ZE = typeof navigator < "u" && navigator.product === "ReactNative", XE = JE || ZE ? wt.useLayoutEffect : wt.useEffect;
function e4({ store: e, context: t, children: n, serverState: r, stabilityCheck: o = "once", identityFunctionCheck: i = "once" }) { const s = wt.useMemo(() => { const u = QE(e); return { store: e, subscription: u, getServerState: r ? () => r : void 0, stabilityCheck: o, identityFunctionCheck: i }; }, [e, r, o, i]), a = wt.useMemo(() => e.getState(), [e]); XE(() => { const { subscription: u } = s; return u.onStateChange = u.notifyNestedSubs, u.trySubscribe(), a !== e.getState() && u.notifyNestedSubs(), () => { u.tryUnsubscribe(), u.onStateChange = void 0; }; }, [s, a]); const c = t || Xn; return wt.createElement(c.Provider, { value: s }, n); }
var t4 = e4;
function cv(e = Xn) { const t = e === Xn ? av : Nf(e), n = () => { const { store: r } = t(); return r; }; return Object.assign(n, { withTypes: () => n }), n; }
var n4 = cv();
function r4(e = Xn) { const t = e === Xn ? n4 : cv(e), n = () => t().dispatch; return Object.assign(n, { withTypes: () => n }), n; }
var kn = r4();
WE(zE.useSyncExternalStoreWithSelector);
function uv(e, t) { return function () { return e.apply(t, arguments); }; }
const { toString: o4 } = Object.prototype, { getPrototypeOf: Pf } = Object, xl = (e => t => { const n = o4.call(t); return e[n] || (e[n] = n.slice(8, -1).toLowerCase()); })(Object.create(null)), Xt = e => (e = e.toLowerCase(), t => xl(t) === e), bl = e => t => typeof t === e, { isArray: Do } = Array, Li = bl("undefined");
function i4(e) { return e !== null && !Li(e) && e.constructor !== null && !Li(e.constructor) && bt(e.constructor.isBuffer) && e.constructor.isBuffer(e); }
const dv = Xt("ArrayBuffer");
function s4(e) { let t; return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && dv(e.buffer), t; }
const a4 = bl("string"), bt = bl("function"), fv = bl("number"), Sl = e => e !== null && typeof e == "object", l4 = e => e === !0 || e === !1, Ks = e => { if (xl(e) !== "object")
    return !1; const t = Pf(e); return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e); }, c4 = Xt("Date"), u4 = Xt("File"), d4 = Xt("Blob"), f4 = Xt("FileList"), p4 = e => Sl(e) && bt(e.pipe), h4 = e => { let t; return e && (typeof FormData == "function" && e instanceof FormData || bt(e.append) && ((t = xl(e)) === "formdata" || t === "object" && bt(e.toString) && e.toString() === "[object FormData]")); }, m4 = Xt("URLSearchParams"), [g4, y4, v4, w4] = ["ReadableStream", "Request", "Response", "Headers"].map(Xt), x4 = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function rs(e, t, { allOwnKeys: n = !1 } = {}) { if (e === null || typeof e > "u")
    return; let r, o; if (typeof e != "object" && (e = [e]), Do(e))
    for (r = 0, o = e.length; r < o; r++)
        t.call(null, e[r], r, e);
else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let a;
    for (r = 0; r < s; r++)
        a = i[r], t.call(null, e[a], a, e);
} }
function pv(e, t) { t = t.toLowerCase(); const n = Object.keys(e); let r = n.length, o; for (; r-- > 0;)
    if (o = n[r], t === o.toLowerCase())
        return o; return null; }
const hr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, hv = e => !Li(e) && e !== hr;
function Du() { const { caseless: e } = hv(this) && this || {}, t = {}, n = (r, o) => { const i = e && pv(t, o) || o; Ks(t[i]) && Ks(r) ? t[i] = Du(t[i], r) : Ks(r) ? t[i] = Du({}, r) : Do(r) ? t[i] = r.slice() : t[i] = r; }; for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && rs(arguments[r], n); return t; }
const b4 = (e, t, n, { allOwnKeys: r } = {}) => (rs(t, (o, i) => { n && bt(o) ? e[i] = uv(o, n) : e[i] = o; }, { allOwnKeys: r }), e), S4 = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), C4 = (e, t, n, r) => { e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", { value: t.prototype }), n && Object.assign(e.prototype, n); }, E4 = (e, t, n, r) => { let o, i, s; const a = {}; if (t = t || {}, e == null)
    return t; do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0;)
        s = o[i], (!r || r(s, e, t)) && !a[s] && (t[s] = e[s], a[s] = !0);
    e = n !== !1 && Pf(e);
} while (e && (!n || n(e, t)) && e !== Object.prototype); return t; }, A4 = (e, t, n) => { e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length; const r = e.indexOf(t, n); return r !== -1 && r === n; }, k4 = e => { if (!e)
    return null; if (Do(e))
    return e; let t = e.length; if (!fv(t))
    return null; const n = new Array(t); for (; t-- > 0;)
    n[t] = e[t]; return n; }, N4 = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && Pf(Uint8Array)), P4 = (e, t) => { const r = (e && e[Symbol.iterator]).call(e); let o; for (; (o = r.next()) && !o.done;) {
    const i = o.value;
    t.call(e, i[0], i[1]);
} }, j4 = (e, t) => { let n; const r = []; for (; (n = e.exec(t)) !== null;)
    r.push(n); return r; }, R4 = Xt("HTMLFormElement"), _4 = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) { return r.toUpperCase() + o; }), Gh = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), T4 = Xt("RegExp"), mv = (e, t) => { const n = Object.getOwnPropertyDescriptors(e), r = {}; rs(n, (o, i) => { let s; (s = t(o, i, e)) !== !1 && (r[i] = s || o); }), Object.defineProperties(e, r); }, O4 = e => { mv(e, (t, n) => { if (bt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
    return !1; const r = e[n]; if (bt(r)) {
    if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
    }
    t.set || (t.set = () => { throw Error("Can not rewrite read-only method '" + n + "'"); });
} }); }, L4 = (e, t) => { const n = {}, r = o => { o.forEach(i => { n[i] = !0; }); }; return Do(e) ? r(e) : r(String(e).split(t)), n; }, D4 = () => { }, M4 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, xc = "abcdefghijklmnopqrstuvwxyz", qh = "0123456789", gv = { DIGIT: qh, ALPHA: xc, ALPHA_DIGIT: xc + xc.toUpperCase() + qh }, B4 = (e = 16, t = gv.ALPHA_DIGIT) => { let n = ""; const { length: r } = t; for (; e--;)
    n += t[Math.random() * r | 0]; return n; };
function I4(e) { return !!(e && bt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]); }
const $4 = e => { const t = new Array(10), n = (r, o) => { if (Sl(r)) {
    if (t.indexOf(r) >= 0)
        return;
    if (!("toJSON" in r)) {
        t[o] = r;
        const i = Do(r) ? [] : {};
        return rs(r, (s, a) => { const c = n(s, o + 1); !Li(c) && (i[a] = c); }), t[o] = void 0, i;
    }
} return r; }; return n(e, 0); }, F4 = Xt("AsyncFunction"), U4 = e => e && (Sl(e) || bt(e)) && bt(e.then) && bt(e.catch), yv = ((e, t) => e ? setImmediate : t ? ((n, r) => (hr.addEventListener("message", ({ source: o, data: i }) => { o === hr && i === n && r.length && r.shift()(); }, !1), o => { r.push(o), hr.postMessage(n, "*"); }))(`axios@${Math.random()}`, []) : n => setTimeout(n))(typeof setImmediate == "function", bt(hr.postMessage)), z4 = typeof queueMicrotask < "u" ? queueMicrotask.bind(hr) : typeof process < "u" && process.nextTick || yv, k = { isArray: Do, isArrayBuffer: dv, isBuffer: i4, isFormData: h4, isArrayBufferView: s4, isString: a4, isNumber: fv, isBoolean: l4, isObject: Sl, isPlainObject: Ks, isReadableStream: g4, isRequest: y4, isResponse: v4, isHeaders: w4, isUndefined: Li, isDate: c4, isFile: u4, isBlob: d4, isRegExp: T4, isFunction: bt, isStream: p4, isURLSearchParams: m4, isTypedArray: N4, isFileList: f4, forEach: rs, merge: Du, extend: b4, trim: x4, stripBOM: S4, inherits: C4, toFlatObject: E4, kindOf: xl, kindOfTest: Xt, endsWith: A4, toArray: k4, forEachEntry: P4, matchAll: j4, isHTMLForm: R4, hasOwnProperty: Gh, hasOwnProp: Gh, reduceDescriptors: mv, freezeMethods: O4, toObjectSet: L4, toCamelCase: _4, noop: D4, toFiniteNumber: M4, findKey: pv, global: hr, isContextDefined: hv, ALPHABET: gv, generateString: B4, isSpecCompliantForm: I4, toJSONObject: $4, isAsyncFn: F4, isThenable: U4, setImmediate: yv, asap: z4 };
function z(e, t, n, r, o) { Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null); }
k.inherits(z, Error, { toJSON: function () { return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: k.toJSONObject(this.config), code: this.code, status: this.status }; } });
const vv = z.prototype, wv = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => { wv[e] = { value: e }; });
Object.defineProperties(z, wv);
Object.defineProperty(vv, "isAxiosError", { value: !0 });
z.from = (e, t, n, r, o, i) => { const s = Object.create(vv); return k.toFlatObject(e, s, function (c) { return c !== Error.prototype; }, a => a !== "isAxiosError"), z.call(s, e.message, t, n, r, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s; };
const H4 = null;
function Mu(e) { return k.isPlainObject(e) || k.isArray(e); }
function xv(e) { return k.endsWith(e, "[]") ? e.slice(0, -2) : e; }
function Kh(e, t, n) { return e ? e.concat(t).map(function (o, i) { return o = xv(o), !n && i ? "[" + o + "]" : o; }).join(n ? "." : "") : t; }
function V4(e) { return k.isArray(e) && !e.some(Mu); }
const W4 = k.toFlatObject(k, {}, null, function (t) { return /^is[A-Z]/.test(t); });
function Cl(e, t, n) { if (!k.isObject(e))
    throw new TypeError("target must be an object"); t = t || new FormData, n = k.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (b, x) { return !k.isUndefined(x[b]); }); const r = n.metaTokens, o = n.visitor || d, i = n.dots, s = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && k.isSpecCompliantForm(t); if (!k.isFunction(o))
    throw new TypeError("visitor must be a function"); function u(m) { if (m === null)
    return ""; if (k.isDate(m))
    return m.toISOString(); if (!c && k.isBlob(m))
    throw new z("Blob is not supported. Use a Buffer instead."); return k.isArrayBuffer(m) || k.isTypedArray(m) ? c && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m; } function d(m, b, x) { let g = m; if (m && !x && typeof m == "object") {
    if (k.endsWith(b, "{}"))
        b = r ? b : b.slice(0, -2), m = JSON.stringify(m);
    else if (k.isArray(m) && V4(m) || (k.isFileList(m) || k.endsWith(b, "[]")) && (g = k.toArray(m)))
        return b = xv(b), g.forEach(function (y, S) { !(k.isUndefined(y) || y === null) && t.append(s === !0 ? Kh([b], S, i) : s === null ? b : b + "[]", u(y)); }), !1;
} return Mu(m) ? !0 : (t.append(Kh(x, b, i), u(m)), !1); } const f = [], p = Object.assign(W4, { defaultVisitor: d, convertValue: u, isVisitable: Mu }); function w(m, b) { if (!k.isUndefined(m)) {
    if (f.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + b.join("."));
    f.push(m), k.forEach(m, function (g, h) { (!(k.isUndefined(g) || g === null) && o.call(t, g, k.isString(h) ? h.trim() : h, b, p)) === !0 && w(g, b ? b.concat(h) : [h]); }), f.pop();
} } if (!k.isObject(e))
    throw new TypeError("data must be an object"); return w(e), t; }
function Yh(e) { const t = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" }; return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) { return t[r]; }); }
function jf(e, t) { this._pairs = [], e && Cl(e, this, t); }
const bv = jf.prototype;
bv.append = function (t, n) { this._pairs.push([t, n]); };
bv.toString = function (t) { const n = t ? function (r) { return t.call(this, r, Yh); } : Yh; return this._pairs.map(function (o) { return n(o[0]) + "=" + n(o[1]); }, "").join("&"); };
function G4(e) { return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]"); }
function Sv(e, t, n) { if (!t)
    return e; const r = n && n.encode || G4, o = n && n.serialize; let i; if (o ? i = o(t, n) : i = k.isURLSearchParams(t) ? t.toString() : new jf(t, n).toString(r), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
} return e; }
class Qh {
    constructor() { this.handlers = []; }
    use(t, n, r) { return this.handlers.push({ fulfilled: t, rejected: n, synchronous: r ? r.synchronous : !1, runWhen: r ? r.runWhen : null }), this.handlers.length - 1; }
    eject(t) { this.handlers[t] && (this.handlers[t] = null); }
    clear() { this.handlers && (this.handlers = []); }
    forEach(t) { k.forEach(this.handlers, function (r) { r !== null && t(r); }); }
}
const Cv = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 }, q4 = typeof URLSearchParams < "u" ? URLSearchParams : jf, K4 = typeof FormData < "u" ? FormData : null, Y4 = typeof Blob < "u" ? Blob : null, Q4 = { isBrowser: !0, classes: { URLSearchParams: q4, FormData: K4, Blob: Y4 }, protocols: ["http", "https", "file", "blob", "url", "data"] }, Rf = typeof window < "u" && typeof document < "u", Bu = typeof navigator == "object" && navigator || void 0, J4 = Rf && (!Bu || ["ReactNative", "NativeScript", "NS"].indexOf(Bu.product) < 0), Z4 = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", X4 = Rf && window.location.href || "http://localhost", eA = Object.freeze(Object.defineProperty({ __proto__: null, hasBrowserEnv: Rf, hasStandardBrowserEnv: J4, hasStandardBrowserWebWorkerEnv: Z4, navigator: Bu, origin: X4 }, Symbol.toStringTag, { value: "Module" })), at = { ...eA, ...Q4 };
function tA(e, t) { return Cl(e, new at.classes.URLSearchParams, Object.assign({ visitor: function (n, r, o, i) { return at.isNode && k.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments); } }, t)); }
function nA(e) { return k.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0]); }
function rA(e) { const t = {}, n = Object.keys(e); let r; const o = n.length; let i; for (r = 0; r < o; r++)
    i = n[r], t[i] = e[i]; return t; }
function Ev(e) { function t(n, r, o, i) { let s = n[i++]; if (s === "__proto__")
    return !0; const a = Number.isFinite(+s), c = i >= n.length; return s = !s && k.isArray(o) ? o.length : s, c ? (k.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !k.isObject(o[s])) && (o[s] = []), t(n, r, o[s], i) && k.isArray(o[s]) && (o[s] = rA(o[s])), !a); } if (k.isFormData(e) && k.isFunction(e.entries)) {
    const n = {};
    return k.forEachEntry(e, (r, o) => { t(nA(r), o, n, 0); }), n;
} return null; }
function oA(e, t, n) { if (k.isString(e))
    try {
        return (t || JSON.parse)(e), k.trim(e);
    }
    catch (r) {
        if (r.name !== "SyntaxError")
            throw r;
    } return (n || JSON.stringify)(e); }
const os = { transitional: Cv, adapter: ["xhr", "http", "fetch"], transformRequest: [function (t, n) { const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, i = k.isObject(t); if (i && k.isHTMLForm(t) && (t = new FormData(t)), k.isFormData(t))
            return o ? JSON.stringify(Ev(t)) : t; if (k.isArrayBuffer(t) || k.isBuffer(t) || k.isStream(t) || k.isFile(t) || k.isBlob(t) || k.isReadableStream(t))
            return t; if (k.isArrayBufferView(t))
            return t.buffer; if (k.isURLSearchParams(t))
            return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString(); let a; if (i) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return tA(t, this.formSerializer).toString();
            if ((a = k.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const c = this.env && this.env.FormData;
                return Cl(a ? { "files[]": t } : t, c && new c, this.formSerializer);
            }
        } return i || o ? (n.setContentType("application/json", !1), oA(t)) : t; }], transformResponse: [function (t) { const n = this.transitional || os.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json"; if (k.isResponse(t) || k.isReadableStream(t))
            return t; if (t && k.isString(t) && (r && !this.responseType || o)) {
            const s = !(n && n.silentJSONParsing) && o;
            try {
                return JSON.parse(t);
            }
            catch (a) {
                if (s)
                    throw a.name === "SyntaxError" ? z.from(a, z.ERR_BAD_RESPONSE, this, null, this.response) : a;
            }
        } return t; }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: at.classes.FormData, Blob: at.classes.Blob }, validateStatus: function (t) { return t >= 200 && t < 300; }, headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } } };
k.forEach(["delete", "get", "head", "post", "put", "patch"], e => { os.headers[e] = {}; });
const iA = k.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]), sA = e => {
    const t = {};
    let n, r, o;
    return e && e.split(`
`).forEach(function (s) { o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || t[n] && iA[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r); }), t;
}, Jh = Symbol("internals");
function Qo(e) { return e && String(e).trim().toLowerCase(); }
function Ys(e) { return e === !1 || e == null ? e : k.isArray(e) ? e.map(Ys) : String(e); }
function aA(e) { const t = Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g; let r; for (; r = n.exec(e);)
    t[r[1]] = r[2]; return t; }
const lA = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function bc(e, t, n, r, o) { if (k.isFunction(r))
    return r.call(this, t, n); if (o && (t = n), !!k.isString(t)) {
    if (k.isString(r))
        return t.indexOf(r) !== -1;
    if (k.isRegExp(r))
        return r.test(t);
} }
function cA(e) { return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r); }
function uA(e, t) { const n = k.toCamelCase(" " + t); ["get", "set", "has"].forEach(r => { Object.defineProperty(e, r + n, { value: function (o, i, s) { return this[r].call(this, t, o, i, s); }, configurable: !0 }); }); }
class lt {
    constructor(t) { t && this.set(t); }
    set(t, n, r) { const o = this; function i(a, c, u) { const d = Qo(c); if (!d)
        throw new Error("header name must be a non-empty string"); const f = k.findKey(o, d); (!f || o[f] === void 0 || u === !0 || u === void 0 && o[f] !== !1) && (o[f || c] = Ys(a)); } const s = (a, c) => k.forEach(a, (u, d) => i(u, d, c)); if (k.isPlainObject(t) || t instanceof this.constructor)
        s(t, n);
    else if (k.isString(t) && (t = t.trim()) && !lA(t))
        s(sA(t), n);
    else if (k.isHeaders(t))
        for (const [a, c] of t.entries())
            i(c, a, r);
    else
        t != null && i(n, t, r); return this; }
    get(t, n) { if (t = Qo(t), t) {
        const r = k.findKey(this, t);
        if (r) {
            const o = this[r];
            if (!n)
                return o;
            if (n === !0)
                return aA(o);
            if (k.isFunction(n))
                return n.call(this, o, r);
            if (k.isRegExp(n))
                return n.exec(o);
            throw new TypeError("parser must be boolean|regexp|function");
        }
    } }
    has(t, n) { if (t = Qo(t), t) {
        const r = k.findKey(this, t);
        return !!(r && this[r] !== void 0 && (!n || bc(this, this[r], r, n)));
    } return !1; }
    delete(t, n) { const r = this; let o = !1; function i(s) { if (s = Qo(s), s) {
        const a = k.findKey(r, s);
        a && (!n || bc(r, r[a], a, n)) && (delete r[a], o = !0);
    } } return k.isArray(t) ? t.forEach(i) : i(t), o; }
    clear(t) { const n = Object.keys(this); let r = n.length, o = !1; for (; r--;) {
        const i = n[r];
        (!t || bc(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    } return o; }
    normalize(t) { const n = this, r = {}; return k.forEach(this, (o, i) => { const s = k.findKey(r, i); if (s) {
        n[s] = Ys(o), delete n[i];
        return;
    } const a = t ? cA(i) : String(i).trim(); a !== i && delete n[i], n[a] = Ys(o), r[a] = !0; }), this; }
    concat(...t) { return this.constructor.concat(this, ...t); }
    toJSON(t) { const n = Object.create(null); return k.forEach(this, (r, o) => { r != null && r !== !1 && (n[o] = t && k.isArray(r) ? r.join(", ") : r); }), n; }
    [Symbol.iterator]() { return Object.entries(this.toJSON())[Symbol.iterator](); }
    toString() {
        return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
    }
    get [Symbol.toStringTag]() { return "AxiosHeaders"; }
    static from(t) { return t instanceof this ? t : new this(t); }
    static concat(t, ...n) { const r = new this(t); return n.forEach(o => r.set(o)), r; }
    static accessor(t) { const r = (this[Jh] = this[Jh] = { accessors: {} }).accessors, o = this.prototype; function i(s) { const a = Qo(s); r[a] || (uA(o, s), r[a] = !0); } return k.isArray(t) ? t.forEach(i) : i(t), this; }
}
lt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
k.reduceDescriptors(lt.prototype, ({ value: e }, t) => { let n = t[0].toUpperCase() + t.slice(1); return { get: () => e, set(r) { this[n] = r; } }; });
k.freezeMethods(lt);
function Sc(e, t) { const n = this || os, r = t || n, o = lt.from(r.headers); let i = r.data; return k.forEach(e, function (a) { i = a.call(n, i, o.normalize(), t ? t.status : void 0); }), o.normalize(), i; }
function Av(e) { return !!(e && e.__CANCEL__); }
function Mo(e, t, n) { z.call(this, e ?? "canceled", z.ERR_CANCELED, t, n), this.name = "CanceledError"; }
k.inherits(Mo, z, { __CANCEL__: !0 });
function kv(e, t, n) { const r = n.config.validateStatus; !n.status || !r || r(n.status) ? e(n) : t(new z("Request failed with status code " + n.status, [z.ERR_BAD_REQUEST, z.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n)); }
function dA(e) { const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e); return t && t[1] || ""; }
function fA(e, t) { e = e || 10; const n = new Array(e), r = new Array(e); let o = 0, i = 0, s; return t = t !== void 0 ? t : 1e3, function (c) { const u = Date.now(), d = r[i]; s || (s = u), n[o] = c, r[o] = u; let f = i, p = 0; for (; f !== o;)
    p += n[f++], f = f % e; if (o = (o + 1) % e, o === i && (i = (i + 1) % e), u - s < t)
    return; const w = d && u - d; return w ? Math.round(p * 1e3 / w) : void 0; }; }
function pA(e, t) { let n = 0, r = 1e3 / t, o, i; const s = (u, d = Date.now()) => { n = d, o = null, i && (clearTimeout(i), i = null), e.apply(null, u); }; return [(...u) => { const d = Date.now(), f = d - n; f >= r ? s(u, d) : (o = u, i || (i = setTimeout(() => { i = null, s(o); }, r - f))); }, () => o && s(o)]; }
const Da = (e, t, n = 3) => { let r = 0; const o = fA(50, 250); return pA(i => { const s = i.loaded, a = i.lengthComputable ? i.total : void 0, c = s - r, u = o(c), d = s <= a; r = s; const f = { loaded: s, total: a, progress: a ? s / a : void 0, bytes: c, rate: u || void 0, estimated: u && a && d ? (a - s) / u : void 0, event: i, lengthComputable: a != null, [t ? "download" : "upload"]: !0 }; e(f); }, n); }, Zh = (e, t) => { const n = e != null; return [r => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]]; }, Xh = e => (...t) => k.asap(() => e(...t)), hA = at.hasStandardBrowserEnv ? function () { const t = at.navigator && /(msie|trident)/i.test(at.navigator.userAgent), n = document.createElement("a"); let r; function o(i) { let s = i; return t && (n.setAttribute("href", s), s = n.href), n.setAttribute("href", s), { href: n.href, protocol: n.protocol ? n.protocol.replace(/:$/, "") : "", host: n.host, search: n.search ? n.search.replace(/^\?/, "") : "", hash: n.hash ? n.hash.replace(/^#/, "") : "", hostname: n.hostname, port: n.port, pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname }; } return r = o(window.location.href), function (s) { const a = k.isString(s) ? o(s) : s; return a.protocol === r.protocol && a.host === r.host; }; }() : function () { return function () { return !0; }; }(), mA = at.hasStandardBrowserEnv ? { write(e, t, n, r, o, i) { const s = [e + "=" + encodeURIComponent(t)]; k.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), k.isString(r) && s.push("path=" + r), k.isString(o) && s.push("domain=" + o), i === !0 && s.push("secure"), document.cookie = s.join("; "); }, read(e) { const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")); return t ? decodeURIComponent(t[3]) : null; }, remove(e) { this.write(e, "", Date.now() - 864e5); } } : { write() { }, read() { return null; }, remove() { } };
function gA(e) { return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e); }
function yA(e, t) { return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e; }
function Nv(e, t) { return e && !gA(t) ? yA(e, t) : t; }
const em = e => e instanceof lt ? { ...e } : e;
function Pr(e, t) { t = t || {}; const n = {}; function r(u, d, f) { return k.isPlainObject(u) && k.isPlainObject(d) ? k.merge.call({ caseless: f }, u, d) : k.isPlainObject(d) ? k.merge({}, d) : k.isArray(d) ? d.slice() : d; } function o(u, d, f) { if (k.isUndefined(d)) {
    if (!k.isUndefined(u))
        return r(void 0, u, f);
}
else
    return r(u, d, f); } function i(u, d) { if (!k.isUndefined(d))
    return r(void 0, d); } function s(u, d) { if (k.isUndefined(d)) {
    if (!k.isUndefined(u))
        return r(void 0, u);
}
else
    return r(void 0, d); } function a(u, d, f) { if (f in t)
    return r(u, d); if (f in e)
    return r(void 0, u); } const c = { url: i, method: i, data: i, baseURL: s, transformRequest: s, transformResponse: s, paramsSerializer: s, timeout: s, timeoutMessage: s, withCredentials: s, withXSRFToken: s, adapter: s, responseType: s, xsrfCookieName: s, xsrfHeaderName: s, onUploadProgress: s, onDownloadProgress: s, decompress: s, maxContentLength: s, maxBodyLength: s, beforeRedirect: s, transport: s, httpAgent: s, httpsAgent: s, cancelToken: s, socketPath: s, responseEncoding: s, validateStatus: a, headers: (u, d) => o(em(u), em(d), !0) }; return k.forEach(Object.keys(Object.assign({}, e, t)), function (d) { const f = c[d] || o, p = f(e[d], t[d], d); k.isUndefined(p) && f !== a || (n[d] = p); }), n; }
const Pv = e => { const t = Pr({}, e); let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = t; t.headers = s = lt.from(s), t.url = Sv(Nv(t.baseURL, t.url), e.params, e.paramsSerializer), a && s.set("Authorization", "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))); let c; if (k.isFormData(n)) {
    if (at.hasStandardBrowserEnv || at.hasStandardBrowserWebWorkerEnv)
        s.setContentType(void 0);
    else if ((c = s.getContentType()) !== !1) {
        const [u, ...d] = c ? c.split(";").map(f => f.trim()).filter(Boolean) : [];
        s.setContentType([u || "multipart/form-data", ...d].join("; "));
    }
} if (at.hasStandardBrowserEnv && (r && k.isFunction(r) && (r = r(t)), r || r !== !1 && hA(t.url))) {
    const u = o && i && mA.read(i);
    u && s.set(o, u);
} return t; }, vA = typeof XMLHttpRequest < "u", wA = vA && function (e) { return new Promise(function (n, r) { const o = Pv(e); let i = o.data; const s = lt.from(o.headers).normalize(); let { responseType: a, onUploadProgress: c, onDownloadProgress: u } = o, d, f, p, w, m; function b() { w && w(), m && m(), o.cancelToken && o.cancelToken.unsubscribe(d), o.signal && o.signal.removeEventListener("abort", d); } let x = new XMLHttpRequest; x.open(o.method.toUpperCase(), o.url, !0), x.timeout = o.timeout; function g() { if (!x)
    return; const y = lt.from("getAllResponseHeaders" in x && x.getAllResponseHeaders()), C = { data: !a || a === "text" || a === "json" ? x.responseText : x.response, status: x.status, statusText: x.statusText, headers: y, config: e, request: x }; kv(function (E) { n(E), b(); }, function (E) { r(E), b(); }, C), x = null; } "onloadend" in x ? x.onloadend = g : x.onreadystatechange = function () { !x || x.readyState !== 4 || x.status === 0 && !(x.responseURL && x.responseURL.indexOf("file:") === 0) || setTimeout(g); }, x.onabort = function () { x && (r(new z("Request aborted", z.ECONNABORTED, e, x)), x = null); }, x.onerror = function () { r(new z("Network Error", z.ERR_NETWORK, e, x)), x = null; }, x.ontimeout = function () { let S = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded"; const C = o.transitional || Cv; o.timeoutErrorMessage && (S = o.timeoutErrorMessage), r(new z(S, C.clarifyTimeoutError ? z.ETIMEDOUT : z.ECONNABORTED, e, x)), x = null; }, i === void 0 && s.setContentType(null), "setRequestHeader" in x && k.forEach(s.toJSON(), function (S, C) { x.setRequestHeader(C, S); }), k.isUndefined(o.withCredentials) || (x.withCredentials = !!o.withCredentials), a && a !== "json" && (x.responseType = o.responseType), u && ([p, m] = Da(u, !0), x.addEventListener("progress", p)), c && x.upload && ([f, w] = Da(c), x.upload.addEventListener("progress", f), x.upload.addEventListener("loadend", w)), (o.cancelToken || o.signal) && (d = y => { x && (r(!y || y.type ? new Mo(null, e, x) : y), x.abort(), x = null); }, o.cancelToken && o.cancelToken.subscribe(d), o.signal && (o.signal.aborted ? d() : o.signal.addEventListener("abort", d))); const h = dA(o.url); if (h && at.protocols.indexOf(h) === -1) {
    r(new z("Unsupported protocol " + h + ":", z.ERR_BAD_REQUEST, e));
    return;
} x.send(i || null); }); }, xA = (e, t) => { const { length: n } = e = e ? e.filter(Boolean) : []; if (t || n) {
    let r = new AbortController, o;
    const i = function (u) { if (!o) {
        o = !0, a();
        const d = u instanceof Error ? u : this.reason;
        r.abort(d instanceof z ? d : new Mo(d instanceof Error ? d.message : d));
    } };
    let s = t && setTimeout(() => { s = null, i(new z(`timeout ${t} of ms exceeded`, z.ETIMEDOUT)); }, t);
    const a = () => { e && (s && clearTimeout(s), s = null, e.forEach(u => { u.unsubscribe ? u.unsubscribe(i) : u.removeEventListener("abort", i); }), e = null); };
    e.forEach(u => u.addEventListener("abort", i));
    const { signal: c } = r;
    return c.unsubscribe = () => k.asap(a), c;
} }, bA = function* (e, t) { let n = e.byteLength; if (!t || n < t) {
    yield e;
    return;
} let r = 0, o; for (; r < n;)
    o = r + t, yield e.slice(r, o), r = o; }, SA = async function* (e, t) { for await (const n of CA(e))
    yield* bA(n, t); }, CA = async function* (e) { if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
} const t = e.getReader(); try {
    for (;;) {
        const { done: n, value: r } = await t.read();
        if (n)
            break;
        yield r;
    }
}
finally {
    await t.cancel();
} }, tm = (e, t, n, r) => { const o = SA(e, t); let i = 0, s, a = c => { s || (s = !0, r && r(c)); }; return new ReadableStream({ async pull(c) { try {
        const { done: u, value: d } = await o.next();
        if (u) {
            a(), c.close();
            return;
        }
        let f = d.byteLength;
        if (n) {
            let p = i += f;
            n(p);
        }
        c.enqueue(new Uint8Array(d));
    }
    catch (u) {
        throw a(u), u;
    } }, cancel(c) { return a(c), o.return(); } }, { highWaterMark: 2 }); }, El = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", jv = El && typeof ReadableStream == "function", EA = El && (typeof TextEncoder == "function" ? (e => t => e.encode(t))(new TextEncoder) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Rv = (e, ...t) => { try {
    return !!e(...t);
}
catch {
    return !1;
} }, AA = jv && Rv(() => { let e = !1; const t = new Request(at.origin, { body: new ReadableStream, method: "POST", get duplex() { return e = !0, "half"; } }).headers.has("Content-Type"); return e && !t; }), nm = 64 * 1024, Iu = jv && Rv(() => k.isReadableStream(new Response("").body)), Ma = { stream: Iu && (e => e.body) };
El && (e => { ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(t => { !Ma[t] && (Ma[t] = k.isFunction(e[t]) ? n => n[t]() : (n, r) => { throw new z(`Response type '${t}' is not supported`, z.ERR_NOT_SUPPORT, r); }); }); })(new Response);
const kA = async (e) => { if (e == null)
    return 0; if (k.isBlob(e))
    return e.size; if (k.isSpecCompliantForm(e))
    return (await new Request(at.origin, { method: "POST", body: e }).arrayBuffer()).byteLength; if (k.isArrayBufferView(e) || k.isArrayBuffer(e))
    return e.byteLength; if (k.isURLSearchParams(e) && (e = e + ""), k.isString(e))
    return (await EA(e)).byteLength; }, NA = async (e, t) => { const n = k.toFiniteNumber(e.getContentLength()); return n ?? kA(t); }, PA = El && (async (e) => { let { url: t, method: n, data: r, signal: o, cancelToken: i, timeout: s, onDownloadProgress: a, onUploadProgress: c, responseType: u, headers: d, withCredentials: f = "same-origin", fetchOptions: p } = Pv(e); u = u ? (u + "").toLowerCase() : "text"; let w = xA([o, i && i.toAbortSignal()], s), m; const b = w && w.unsubscribe && (() => { w.unsubscribe(); }); let x; try {
    if (c && AA && n !== "get" && n !== "head" && (x = await NA(d, r)) !== 0) {
        let C = new Request(t, { method: "POST", body: r, duplex: "half" }), N;
        if (k.isFormData(r) && (N = C.headers.get("content-type")) && d.setContentType(N), C.body) {
            const [E, P] = Zh(x, Da(Xh(c)));
            r = tm(C.body, nm, E, P);
        }
    }
    k.isString(f) || (f = f ? "include" : "omit");
    const g = "credentials" in Request.prototype;
    m = new Request(t, { ...p, signal: w, method: n.toUpperCase(), headers: d.normalize().toJSON(), body: r, duplex: "half", credentials: g ? f : void 0 });
    let h = await fetch(m);
    const y = Iu && (u === "stream" || u === "response");
    if (Iu && (a || y && b)) {
        const C = {};
        ["status", "statusText", "headers"].forEach(M => { C[M] = h[M]; });
        const N = k.toFiniteNumber(h.headers.get("content-length")), [E, P] = a && Zh(N, Da(Xh(a), !0)) || [];
        h = new Response(tm(h.body, nm, E, () => { P && P(), b && b(); }), C);
    }
    u = u || "text";
    let S = await Ma[k.findKey(Ma, u) || "text"](h, e);
    return !y && b && b(), await new Promise((C, N) => { kv(C, N, { data: S, headers: lt.from(h.headers), status: h.status, statusText: h.statusText, config: e, request: m }); });
}
catch (g) {
    throw b && b(), g && g.name === "TypeError" && /fetch/i.test(g.message) ? Object.assign(new z("Network Error", z.ERR_NETWORK, e, m), { cause: g.cause || g }) : z.from(g, g && g.code, e, m);
} }), $u = { http: H4, xhr: wA, fetch: PA };
k.forEach($u, (e, t) => { if (e) {
    try {
        Object.defineProperty(e, "name", { value: t });
    }
    catch { }
    Object.defineProperty(e, "adapterName", { value: t });
} });
const rm = e => `- ${e}`, jA = e => k.isFunction(e) || e === null || e === !1, _v = { getAdapter: e => {
        e = k.isArray(e) ? e : [e];
        const { length: t } = e;
        let n, r;
        const o = {};
        for (let i = 0; i < t; i++) {
            n = e[i];
            let s;
            if (r = n, !jA(n) && (r = $u[(s = String(n)).toLowerCase()], r === void 0))
                throw new z(`Unknown adapter '${s}'`);
            if (r)
                break;
            o[s || "#" + i] = r;
        }
        if (!r) {
            const i = Object.entries(o).map(([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build"));
            let s = t ? i.length > 1 ? `since :
` + i.map(rm).join(`
`) : " " + rm(i[0]) : "as no adapter specified";
            throw new z("There is no suitable adapter to dispatch the request " + s, "ERR_NOT_SUPPORT");
        }
        return r;
    }, adapters: $u };
function Cc(e) { if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Mo(null, e); }
function om(e) { return Cc(e), e.headers = lt.from(e.headers), e.data = Sc.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), _v.getAdapter(e.adapter || os.adapter)(e).then(function (r) { return Cc(e), r.data = Sc.call(e, e.transformResponse, r), r.headers = lt.from(r.headers), r; }, function (r) { return Av(r) || (Cc(e), r && r.response && (r.response.data = Sc.call(e, e.transformResponse, r.response), r.response.headers = lt.from(r.response.headers))), Promise.reject(r); }); }
const Tv = "1.7.7", _f = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => { _f[e] = function (r) { return typeof r === e || "a" + (t < 1 ? "n " : " ") + e; }; });
const im = {};
_f.transitional = function (t, n, r) { function o(i, s) { return "[Axios v" + Tv + "] Transitional option '" + i + "'" + s + (r ? ". " + r : ""); } return (i, s, a) => { if (t === !1)
    throw new z(o(s, " has been removed" + (n ? " in " + n : "")), z.ERR_DEPRECATED); return n && !im[s] && (im[s] = !0, console.warn(o(s, " has been deprecated since v" + n + " and will be removed in the near future"))), t ? t(i, s, a) : !0; }; };
function RA(e, t, n) { if (typeof e != "object")
    throw new z("options must be an object", z.ERR_BAD_OPTION_VALUE); const r = Object.keys(e); let o = r.length; for (; o-- > 0;) {
    const i = r[o], s = t[i];
    if (s) {
        const a = e[i], c = a === void 0 || s(a, i, e);
        if (c !== !0)
            throw new z("option " + i + " must be " + c, z.ERR_BAD_OPTION_VALUE);
        continue;
    }
    if (n !== !0)
        throw new z("Unknown option " + i, z.ERR_BAD_OPTION);
} }
const Fu = { assertOptions: RA, validators: _f }, Rn = Fu.validators;
class wr {
    constructor(t) { this.defaults = t, this.interceptors = { request: new Qh, response: new Qh }; }
    async request(t, n) {
        try {
            return await this._request(t, n);
        }
        catch (r) {
            if (r instanceof Error) {
                let o;
                Error.captureStackTrace ? Error.captureStackTrace(o = {}) : o = new Error;
                const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
                try {
                    r.stack ? i && !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + i) : r.stack = i;
                }
                catch { }
            }
            throw r;
        }
    }
    _request(t, n) { typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Pr(this.defaults, n); const { transitional: r, paramsSerializer: o, headers: i } = n; r !== void 0 && Fu.assertOptions(r, { silentJSONParsing: Rn.transitional(Rn.boolean), forcedJSONParsing: Rn.transitional(Rn.boolean), clarifyTimeoutError: Rn.transitional(Rn.boolean) }, !1), o != null && (k.isFunction(o) ? n.paramsSerializer = { serialize: o } : Fu.assertOptions(o, { encode: Rn.function, serialize: Rn.function }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase(); let s = i && k.merge(i.common, i[n.method]); i && k.forEach(["delete", "get", "head", "post", "put", "patch", "common"], m => { delete i[m]; }), n.headers = lt.concat(s, i); const a = []; let c = !0; this.interceptors.request.forEach(function (b) { typeof b.runWhen == "function" && b.runWhen(n) === !1 || (c = c && b.synchronous, a.unshift(b.fulfilled, b.rejected)); }); const u = []; this.interceptors.response.forEach(function (b) { u.push(b.fulfilled, b.rejected); }); let d, f = 0, p; if (!c) {
        const m = [om.bind(this), void 0];
        for (m.unshift.apply(m, a), m.push.apply(m, u), p = m.length, d = Promise.resolve(n); f < p;)
            d = d.then(m[f++], m[f++]);
        return d;
    } p = a.length; let w = n; for (f = 0; f < p;) {
        const m = a[f++], b = a[f++];
        try {
            w = m(w);
        }
        catch (x) {
            b.call(this, x);
            break;
        }
    } try {
        d = om.call(this, w);
    }
    catch (m) {
        return Promise.reject(m);
    } for (f = 0, p = u.length; f < p;)
        d = d.then(u[f++], u[f++]); return d; }
    getUri(t) { t = Pr(this.defaults, t); const n = Nv(t.baseURL, t.url); return Sv(n, t.params, t.paramsSerializer); }
}
k.forEach(["delete", "get", "head", "options"], function (t) { wr.prototype[t] = function (n, r) { return this.request(Pr(r || {}, { method: t, url: n, data: (r || {}).data })); }; });
k.forEach(["post", "put", "patch"], function (t) { function n(r) { return function (i, s, a) { return this.request(Pr(a || {}, { method: t, headers: r ? { "Content-Type": "multipart/form-data" } : {}, url: i, data: s })); }; } wr.prototype[t] = n(), wr.prototype[t + "Form"] = n(!0); });
class Tf {
    constructor(t) { if (typeof t != "function")
        throw new TypeError("executor must be a function."); let n; this.promise = new Promise(function (i) { n = i; }); const r = this; this.promise.then(o => { if (!r._listeners)
        return; let i = r._listeners.length; for (; i-- > 0;)
        r._listeners[i](o); r._listeners = null; }), this.promise.then = o => { let i; const s = new Promise(a => { r.subscribe(a), i = a; }).then(o); return s.cancel = function () { r.unsubscribe(i); }, s; }, t(function (i, s, a) { r.reason || (r.reason = new Mo(i, s, a), n(r.reason)); }); }
    throwIfRequested() { if (this.reason)
        throw this.reason; }
    subscribe(t) { if (this.reason) {
        t(this.reason);
        return;
    } this._listeners ? this._listeners.push(t) : this._listeners = [t]; }
    unsubscribe(t) { if (!this._listeners)
        return; const n = this._listeners.indexOf(t); n !== -1 && this._listeners.splice(n, 1); }
    toAbortSignal() { const t = new AbortController, n = r => { t.abort(r); }; return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal; }
    static source() { let t; return { token: new Tf(function (o) { t = o; }), cancel: t }; }
}
function _A(e) { return function (n) { return e.apply(null, n); }; }
function TA(e) { return k.isObject(e) && e.isAxiosError === !0; }
const Uu = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511 };
Object.entries(Uu).forEach(([e, t]) => { Uu[t] = e; });
function Ov(e) { const t = new wr(e), n = uv(wr.prototype.request, t); return k.extend(n, wr.prototype, t, { allOwnKeys: !0 }), k.extend(n, t, null, { allOwnKeys: !0 }), n.create = function (o) { return Ov(Pr(e, o)); }, n; }
const Q = Ov(os);
Q.Axios = wr;
Q.CanceledError = Mo;
Q.CancelToken = Tf;
Q.isCancel = Av;
Q.VERSION = Tv;
Q.toFormData = Cl;
Q.AxiosError = z;
Q.Cancel = Q.CanceledError;
Q.all = function (t) { return Promise.all(t); };
Q.spread = _A;
Q.isAxiosError = TA;
Q.mergeConfig = Pr;
Q.AxiosHeaders = lt;
Q.formToJSON = e => Ev(k.isHTMLForm(e) ? new FormData(e) : e);
Q.getAdapter = _v.getAdapter;
Q.HttpStatusCode = Uu;
Q.default = Q;
const is = async (e, t, n, r = !0) => await Lv("videos/get-movies", "get", t, n, r), Of = async (e, t, n, r = !0) => await Lv("videos/get-series", "get", t, n, r), Lv = async (e, t, n, r, o) => { if (o) {
    const a = localStorage.getItem("viewerToken");
    if (a !== null)
        var i = JSON.parse(a);
    else
        r("/");
} let s = { method: t, maxBodyLength: 1 / 0, url: `${dt}/${e}/${n}`, headers: { "Content-Type": "application/json", Authorization: `Bear ${i}` }, data: n }; return await Q.request(s).then(a => a.data.success ? { success: !0, details: a.data.details } : (D.fire({ text: `${a.data.msg}`, showCloseButton: !0, showConfirmButton: !1, animation: !1, color: "#dc3545", padding: "5px" }), { success: !1, details: [] })).catch(a => { var c; return console.log(a), D.fire({ text: `${((c = a.response.data) == null ? void 0 : c.msg) || "Server Side Error"}`, showCloseButton: !0, showConfirmButton: !1, animation: !1, color: "#dc3545", padding: "0px 0px 10px 0px" }), { success: !1, details: [] }; }); };
function Me(e) { return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `; }
var OA = typeof Symbol == "function" && Symbol.observable || "@@observable", sm = OA, Ec = () => Math.random().toString(36).substring(7).split("").join("."), LA = { INIT: `@@redux/INIT${Ec()}`, REPLACE: `@@redux/REPLACE${Ec()}`, PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Ec()}` }, Ba = LA;
function Lf(e) { if (typeof e != "object" || e === null)
    return !1; let t = e; for (; Object.getPrototypeOf(t) !== null;)
    t = Object.getPrototypeOf(t); return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null; }
function Dv(e, t, n) { if (typeof e != "function")
    throw new Error(Me(2)); if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(Me(0)); if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
        throw new Error(Me(1));
    return n(Dv)(e, t);
} let r = e, o = t, i = new Map, s = i, a = 0, c = !1; function u() { s === i && (s = new Map, i.forEach((x, g) => { s.set(g, x); })); } function d() { if (c)
    throw new Error(Me(3)); return o; } function f(x) { if (typeof x != "function")
    throw new Error(Me(4)); if (c)
    throw new Error(Me(5)); let g = !0; u(); const h = a++; return s.set(h, x), function () { if (g) {
    if (c)
        throw new Error(Me(6));
    g = !1, u(), s.delete(h), i = null;
} }; } function p(x) { if (!Lf(x))
    throw new Error(Me(7)); if (typeof x.type > "u")
    throw new Error(Me(8)); if (typeof x.type != "string")
    throw new Error(Me(17)); if (c)
    throw new Error(Me(9)); try {
    c = !0, o = r(o, x);
}
finally {
    c = !1;
} return (i = s).forEach(h => { h(); }), x; } function w(x) { if (typeof x != "function")
    throw new Error(Me(10)); r = x, p({ type: Ba.REPLACE }); } function m() { const x = f; return { subscribe(g) { if (typeof g != "object" || g === null)
        throw new Error(Me(11)); function h() { const S = g; S.next && S.next(d()); } return h(), { unsubscribe: x(h) }; }, [sm]() { return this; } }; } return p({ type: Ba.INIT }), { dispatch: p, subscribe: f, getState: d, replaceReducer: w, [sm]: m }; }
function DA(e) { Object.keys(e).forEach(t => { const n = e[t]; if (typeof n(void 0, { type: Ba.INIT }) > "u")
    throw new Error(Me(12)); if (typeof n(void 0, { type: Ba.PROBE_UNKNOWN_ACTION() }) > "u")
    throw new Error(Me(13)); }); }
function MA(e) { const t = Object.keys(e), n = {}; for (let i = 0; i < t.length; i++) {
    const s = t[i];
    typeof e[s] == "function" && (n[s] = e[s]);
} const r = Object.keys(n); let o; try {
    DA(n);
}
catch (i) {
    o = i;
} return function (s = {}, a) { if (o)
    throw o; let c = !1; const u = {}; for (let d = 0; d < r.length; d++) {
    const f = r[d], p = n[f], w = s[f], m = p(w, a);
    if (typeof m > "u")
        throw a && a.type, new Error(Me(14));
    u[f] = m, c = c || m !== w;
} return c = c || r.length !== Object.keys(s).length, c ? u : s; }; }
function Ia(...e) { return e.length === 0 ? t => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r))); }
function BA(...e) { return t => (n, r) => { const o = t(n, r); let i = () => { throw new Error(Me(15)); }; const s = { getState: o.getState, dispatch: (c, ...u) => i(c, ...u) }, a = e.map(c => c(s)); return i = Ia(...a)(o.dispatch), { ...o, dispatch: i }; }; }
function IA(e) { return Lf(e) && "type" in e && typeof e.type == "string"; }
var Mv = Symbol.for("immer-nothing"), am = Symbol.for("immer-draftable"), At = Symbol.for("immer-state");
function qt(e, ...t) { throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`); }
var bo = Object.getPrototypeOf;
function jr(e) { return !!e && !!e[At]; }
function En(e) { var t; return e ? Bv(e) || Array.isArray(e) || !!e[am] || !!((t = e.constructor) != null && t[am]) || kl(e) || Nl(e) : !1; }
var $A = Object.prototype.constructor.toString();
function Bv(e) { if (!e || typeof e != "object")
    return !1; const t = bo(e); if (t === null)
    return !0; const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor; return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === $A; }
function $a(e, t) { Al(e) === 0 ? Reflect.ownKeys(e).forEach(n => { t(n, e[n], e); }) : e.forEach((n, r) => t(r, n, e)); }
function Al(e) { const t = e[At]; return t ? t.type_ : Array.isArray(e) ? 1 : kl(e) ? 2 : Nl(e) ? 3 : 0; }
function zu(e, t) { return Al(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t); }
function Iv(e, t, n) { const r = Al(e); r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n; }
function FA(e, t) { return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t; }
function kl(e) { return e instanceof Map; }
function Nl(e) { return e instanceof Set; }
function cr(e) { return e.copy_ || e.base_; }
function Hu(e, t) { if (kl(e))
    return new Map(e); if (Nl(e))
    return new Set(e); if (Array.isArray(e))
    return Array.prototype.slice.call(e); const n = Bv(e); if (t === !0 || t === "class_only" && !n) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[At];
    let o = Reflect.ownKeys(r);
    for (let i = 0; i < o.length; i++) {
        const s = o[i], a = r[s];
        a.writable === !1 && (a.writable = !0, a.configurable = !0), (a.get || a.set) && (r[s] = { configurable: !0, writable: !0, enumerable: a.enumerable, value: e[s] });
    }
    return Object.create(bo(e), r);
}
else {
    const r = bo(e);
    if (r !== null && n)
        return { ...e };
    const o = Object.create(r);
    return Object.assign(o, e);
} }
function Df(e, t = !1) { return Pl(e) || jr(e) || !En(e) || (Al(e) > 1 && (e.set = e.add = e.clear = e.delete = UA), Object.freeze(e), t && Object.entries(e).forEach(([n, r]) => Df(r, !0))), e; }
function UA() { qt(2); }
function Pl(e) { return Object.isFrozen(e); }
var zA = {};
function Rr(e) { const t = zA[e]; return t || qt(0, e), t; }
var Di;
function $v() { return Di; }
function HA(e, t) { return { drafts_: [], parent_: e, immer_: t, canAutoFreeze_: !0, unfinalizedDrafts_: 0 }; }
function lm(e, t) { t && (Rr("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t); }
function Vu(e) { Wu(e), e.drafts_.forEach(VA), e.drafts_ = null; }
function Wu(e) { e === Di && (Di = e.parent_); }
function cm(e) { return Di = HA(Di, e); }
function VA(e) { const t = e[At]; t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0; }
function um(e, t) { t.unfinalizedDrafts_ = t.drafts_.length; const n = t.drafts_[0]; return e !== void 0 && e !== n ? (n[At].modified_ && (Vu(t), qt(4)), En(e) && (e = Fa(t, e), t.parent_ || Ua(t, e)), t.patches_ && Rr("Patches").generateReplacementPatches_(n[At].base_, e, t.patches_, t.inversePatches_)) : e = Fa(t, n, []), Vu(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Mv ? e : void 0; }
function Fa(e, t, n) { if (Pl(t))
    return t; const r = t[At]; if (!r)
    return $a(t, (o, i) => dm(e, r, t, o, i, n)), t; if (r.scope_ !== e)
    return t; if (!r.modified_)
    return Ua(e, r.base_, !0), r.base_; if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let i = o, s = !1;
    r.type_ === 3 && (i = new Set(o), o.clear(), s = !0), $a(i, (a, c) => dm(e, r, o, a, c, n, s)), Ua(e, o, !1), n && e.patches_ && Rr("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_);
} return r.copy_; }
function dm(e, t, n, r, o, i, s) { if (jr(o)) {
    const a = i && t && t.type_ !== 3 && !zu(t.assigned_, r) ? i.concat(r) : void 0, c = Fa(e, o, a);
    if (Iv(n, r, c), jr(c))
        e.canAutoFreeze_ = !1;
    else
        return;
}
else
    s && n.add(o); if (En(o) && !Pl(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
        return;
    Fa(e, o), (!t || !t.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(n, r) && Ua(e, o);
} }
function Ua(e, t, n = !1) { !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Df(t, n); }
function WA(e, t) { const n = Array.isArray(e), r = { type_: n ? 1 : 0, scope_: t ? t.scope_ : $v(), modified_: !1, finalized_: !1, assigned_: {}, parent_: t, base_: e, draft_: null, copy_: null, revoke_: null, isManual_: !1 }; let o = r, i = Mf; n && (o = [r], i = Mi); const { revoke: s, proxy: a } = Proxy.revocable(o, i); return r.draft_ = a, r.revoke_ = s, a; }
var Mf = { get(e, t) { if (t === At)
        return e; const n = cr(e); if (!zu(n, t))
        return GA(e, n, t); const r = n[t]; return e.finalized_ || !En(r) ? r : r === Ac(e.base_, t) ? (kc(e), e.copy_[t] = qu(r, e)) : r; }, has(e, t) { return t in cr(e); }, ownKeys(e) { return Reflect.ownKeys(cr(e)); }, set(e, t, n) { const r = Fv(cr(e), t); if (r != null && r.set)
        return r.set.call(e.draft_, n), !0; if (!e.modified_) {
        const o = Ac(cr(e), t), i = o == null ? void 0 : o[At];
        if (i && i.base_ === n)
            return e.copy_[t] = n, e.assigned_[t] = !1, !0;
        if (FA(n, o) && (n !== void 0 || zu(e.base_, t)))
            return !0;
        kc(e), Gu(e);
    } return e.copy_[t] === n && (n !== void 0 || t in e.copy_) || Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0; }, deleteProperty(e, t) { return Ac(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, kc(e), Gu(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0; }, getOwnPropertyDescriptor(e, t) { const n = cr(e), r = Reflect.getOwnPropertyDescriptor(n, t); return r && { writable: !0, configurable: e.type_ !== 1 || t !== "length", enumerable: r.enumerable, value: n[t] }; }, defineProperty() { qt(11); }, getPrototypeOf(e) { return bo(e.base_); }, setPrototypeOf() { qt(12); } }, Mi = {};
$a(Mf, (e, t) => { Mi[e] = function () { return arguments[0] = arguments[0][0], t.apply(this, arguments); }; });
Mi.deleteProperty = function (e, t) { return Mi.set.call(this, e, t, void 0); };
Mi.set = function (e, t, n) { return Mf.set.call(this, e[0], t, n, e[0]); };
function Ac(e, t) { const n = e[At]; return (n ? cr(n) : e)[t]; }
function GA(e, t, n) { var o; const r = Fv(t, n); return r ? "value" in r ? r.value : (o = r.get) == null ? void 0 : o.call(e.draft_) : void 0; }
function Fv(e, t) { if (!(t in e))
    return; let n = bo(e); for (; n;) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
        return r;
    n = bo(n);
} }
function Gu(e) { e.modified_ || (e.modified_ = !0, e.parent_ && Gu(e.parent_)); }
function kc(e) { e.copy_ || (e.copy_ = Hu(e.base_, e.scope_.immer_.useStrictShallowCopy_)); }
var qA = class {
    constructor(e) { this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => { if (typeof t == "function" && typeof n != "function") {
        const i = n;
        n = t;
        const s = this;
        return function (c = i, ...u) { return s.produce(c, d => n.call(this, d, ...u)); };
    } typeof n != "function" && qt(6), r !== void 0 && typeof r != "function" && qt(7); let o; if (En(t)) {
        const i = cm(this), s = qu(t, void 0);
        let a = !0;
        try {
            o = n(s), a = !1;
        }
        finally {
            a ? Vu(i) : Wu(i);
        }
        return lm(i, r), um(o, i);
    }
    else if (!t || typeof t != "object") {
        if (o = n(t), o === void 0 && (o = t), o === Mv && (o = void 0), this.autoFreeze_ && Df(o, !0), r) {
            const i = [], s = [];
            Rr("Patches").generateReplacementPatches_(t, o, i, s), r(i, s);
        }
        return o;
    }
    else
        qt(1, t); }, this.produceWithPatches = (t, n) => { if (typeof t == "function")
        return (s, ...a) => this.produceWithPatches(s, c => t(c, ...a)); let r, o; return [this.produce(t, n, (s, a) => { r = s, o = a; }), r, o]; }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy); }
    createDraft(e) { En(e) || qt(8), jr(e) && (e = KA(e)); const t = cm(this), n = qu(e, void 0); return n[At].isManual_ = !0, Wu(t), n; }
    finishDraft(e, t) { const n = e && e[At]; (!n || !n.isManual_) && qt(9); const { scope_: r } = n; return lm(r, t), um(void 0, r); }
    setAutoFreeze(e) { this.autoFreeze_ = e; }
    setUseStrictShallowCopy(e) { this.useStrictShallowCopy_ = e; }
    applyPatches(e, t) { let n; for (n = t.length - 1; n >= 0; n--) {
        const o = t[n];
        if (o.path.length === 0 && o.op === "replace") {
            e = o.value;
            break;
        }
    } n > -1 && (t = t.slice(n + 1)); const r = Rr("Patches").applyPatches_; return jr(e) ? r(e, t) : this.produce(e, o => r(o, t)); }
};
function qu(e, t) { const n = kl(e) ? Rr("MapSet").proxyMap_(e, t) : Nl(e) ? Rr("MapSet").proxySet_(e, t) : WA(e, t); return (t ? t.scope_ : $v()).drafts_.push(n), n; }
function KA(e) { return jr(e) || qt(10, e), Uv(e); }
function Uv(e) { if (!En(e) || Pl(e))
    return e; const t = e[At]; let n; if (t) {
    if (!t.modified_)
        return t.base_;
    t.finalized_ = !0, n = Hu(e, t.scope_.immer_.useStrictShallowCopy_);
}
else
    n = Hu(e, !0); return $a(n, (r, o) => { Iv(n, r, Uv(o)); }), t && (t.finalized_ = !1), n; }
var kt = new qA, zv = kt.produce;
kt.produceWithPatches.bind(kt);
kt.setAutoFreeze.bind(kt);
kt.setUseStrictShallowCopy.bind(kt);
kt.applyPatches.bind(kt);
kt.createDraft.bind(kt);
kt.finishDraft.bind(kt);
function Hv(e) { return ({ dispatch: n, getState: r }) => o => i => typeof i == "function" ? i(n, r, e) : o(i); }
var YA = Hv(), QA = Hv, JA = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function () { if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Ia : Ia.apply(null, arguments); };
function fm(e, t) { function n(...r) { if (t) {
    let o = t(...r);
    if (!o)
        throw new Error(cn(0));
    return { type: e, payload: o.payload, ..."meta" in o && { meta: o.meta }, ..."error" in o && { error: o.error } };
} return { type: e, payload: r[0] }; } return n.toString = () => `${e}`, n.type = e, n.match = r => IA(r) && r.type === e, n; }
var Vv = class ti extends Array {
    constructor(...t) { super(...t), Object.setPrototypeOf(this, ti.prototype); }
    static get [Symbol.species]() { return ti; }
    concat(...t) { return super.concat.apply(this, t); }
    prepend(...t) { return t.length === 1 && Array.isArray(t[0]) ? new ti(...t[0].concat(this)) : new ti(...t.concat(this)); }
};
function pm(e) { return En(e) ? zv(e, () => { }) : e; }
function hm(e, t, n) { if (e.has(t)) {
    let o = e.get(t);
    return n.update && (o = n.update(o, t, e), e.set(t, o)), o;
} if (!n.insert)
    throw new Error(cn(10)); const r = n.insert(t, e); return e.set(t, r), r; }
function ZA(e) { return typeof e == "boolean"; }
var XA = () => function (t) { const { thunk: n = !0, immutableCheck: r = !0, serializableCheck: o = !0, actionCreatorCheck: i = !0 } = t ?? {}; let s = new Vv; return n && (ZA(n) ? s.push(YA) : s.push(QA(n.extraArgument))), s; }, ek = "RTK_autoBatch", Wv = e => t => { setTimeout(t, e); }, tk = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Wv(10), nk = (e = { type: "raf" }) => t => (...n) => { const r = t(...n); let o = !0, i = !1, s = !1; const a = new Set, c = e.type === "tick" ? queueMicrotask : e.type === "raf" ? tk : e.type === "callback" ? e.queueNotification : Wv(e.timeout), u = () => { s = !1, i && (i = !1, a.forEach(d => d())); }; return Object.assign({}, r, { subscribe(d) { const f = () => o && d(), p = r.subscribe(f); return a.add(d), () => { p(), a.delete(d); }; }, dispatch(d) { var f; try {
        return o = !((f = d == null ? void 0 : d.meta) != null && f[ek]), i = !o, i && (s || (s = !0, c(u))), r.dispatch(d);
    }
    finally {
        o = !0;
    } } }); }, rk = e => function (n) { const { autoBatch: r = !0 } = n ?? {}; let o = new Vv(e); return r && o.push(nk(typeof r == "object" ? r : void 0)), o; };
function ok(e) { const t = XA(), { reducer: n = void 0, middleware: r, devTools: o = !0, preloadedState: i = void 0, enhancers: s = void 0 } = e || {}; let a; if (typeof n == "function")
    a = n;
else if (Lf(n))
    a = MA(n);
else
    throw new Error(cn(1)); let c; typeof r == "function" ? c = r(t) : c = t(); let u = Ia; o && (u = JA({ trace: !1, ...typeof o == "object" && o })); const d = BA(...c), f = rk(d); let p = typeof s == "function" ? s(f) : f(); const w = u(...p); return Dv(a, i, w); }
function Gv(e) { const t = {}, n = []; let r; const o = { addCase(i, s) { const a = typeof i == "string" ? i : i.type; if (!a)
        throw new Error(cn(28)); if (a in t)
        throw new Error(cn(29)); return t[a] = s, o; }, addMatcher(i, s) { return n.push({ matcher: i, reducer: s }), o; }, addDefaultCase(i) { return r = i, o; } }; return e(o), [t, n, r]; }
function ik(e) { return typeof e == "function"; }
function sk(e, t) { let [n, r, o] = Gv(t), i; if (ik(e))
    i = () => pm(e());
else {
    const a = pm(e);
    i = () => a;
} function s(a = i(), c) { let u = [n[c.type], ...r.filter(({ matcher: d }) => d(c)).map(({ reducer: d }) => d)]; return u.filter(d => !!d).length === 0 && (u = [o]), u.reduce((d, f) => { if (f)
    if (jr(d)) {
        const w = f(d, c);
        return w === void 0 ? d : w;
    }
    else {
        if (En(d))
            return zv(d, p => f(p, c));
        {
            const p = f(d, c);
            if (p === void 0) {
                if (d === null)
                    return d;
                throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return p;
        }
    } return d; }, a); } return s.getInitialState = i, s; }
var ak = Symbol.for("rtk-slice-createasyncthunk");
function lk(e, t) { return `${e}/${t}`; }
function ck({ creators: e } = {}) { var n; const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[ak]; return function (o) { const { name: i, reducerPath: s = i } = o; if (!i)
    throw new Error(cn(11)); typeof process < "u"; const a = (typeof o.reducers == "function" ? o.reducers(dk()) : o.reducers) || {}, c = Object.keys(a), u = { sliceCaseReducersByName: {}, sliceCaseReducersByType: {}, actionCreators: {}, sliceMatchers: [] }, d = { addCase(y, S) { const C = typeof y == "string" ? y : y.type; if (!C)
        throw new Error(cn(12)); if (C in u.sliceCaseReducersByType)
        throw new Error(cn(13)); return u.sliceCaseReducersByType[C] = S, d; }, addMatcher(y, S) { return u.sliceMatchers.push({ matcher: y, reducer: S }), d; }, exposeAction(y, S) { return u.actionCreators[y] = S, d; }, exposeCaseReducer(y, S) { return u.sliceCaseReducersByName[y] = S, d; } }; c.forEach(y => { const S = a[y], C = { reducerName: y, type: lk(i, y), createNotation: typeof o.reducers == "function" }; pk(S) ? mk(C, S, d, t) : fk(C, S, d); }); function f() { const [y = {}, S = [], C = void 0] = typeof o.extraReducers == "function" ? Gv(o.extraReducers) : [o.extraReducers], N = { ...y, ...u.sliceCaseReducersByType }; return sk(o.initialState, E => { for (let P in N)
    E.addCase(P, N[P]); for (let P of u.sliceMatchers)
    E.addMatcher(P.matcher, P.reducer); for (let P of S)
    E.addMatcher(P.matcher, P.reducer); C && E.addDefaultCase(C); }); } const p = y => y, w = new Map; let m; function b(y, S) { return m || (m = f()), m(y, S); } function x() { return m || (m = f()), m.getInitialState(); } function g(y, S = !1) { function C(E) { let P = E[y]; return typeof P > "u" && S && (P = x()), P; } function N(E = p) { const P = hm(w, S, { insert: () => new WeakMap }); return hm(P, E, { insert: () => { const M = {}; for (const [O, q] of Object.entries(o.selectors ?? {}))
        M[O] = uk(q, E, x, S); return M; } }); } return { reducerPath: y, getSelectors: N, get selectors() { return N(C); }, selectSlice: C }; } const h = { name: i, reducer: b, actions: u.actionCreators, caseReducers: u.sliceCaseReducersByName, getInitialState: x, ...g(s), injectInto(y, { reducerPath: S, ...C } = {}) { const N = S ?? s; return y.inject({ reducerPath: N, reducer: b }, C), { ...h, ...g(N, !0) }; } }; return h; }; }
function uk(e, t, n, r) { function o(i, ...s) { let a = t(i); return typeof a > "u" && r && (a = n()), e(a, ...s); } return o.unwrapped = e, o; }
var jl = ck();
function dk() { function e(t, n) { return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...n }; } return e.withTypes = () => e, { reducer(t) { return Object.assign({ [t.name](...n) { return t(...n); } }[t.name], { _reducerDefinitionType: "reducer" }); }, preparedReducer(t, n) { return { _reducerDefinitionType: "reducerWithPrepare", prepare: t, reducer: n }; }, asyncThunk: e }; }
function fk({ type: e, reducerName: t, createNotation: n }, r, o) { let i, s; if ("reducer" in r) {
    if (n && !hk(r))
        throw new Error(cn(17));
    i = r.reducer, s = r.prepare;
}
else
    i = r; o.addCase(e, i).exposeCaseReducer(t, i).exposeAction(t, s ? fm(e, s) : fm(e)); }
function pk(e) { return e._reducerDefinitionType === "asyncThunk"; }
function hk(e) { return e._reducerDefinitionType === "reducerWithPrepare"; }
function mk({ type: e, reducerName: t }, n, r, o) { if (!o)
    throw new Error(cn(18)); const { payloadCreator: i, fulfilled: s, pending: a, rejected: c, settled: u, options: d } = n, f = o(e, i, d); r.exposeAction(t, f), s && r.addCase(f.fulfilled, s), a && r.addCase(f.pending, a), c && r.addCase(f.rejected, c), u && r.addMatcher(f.settled, u), r.exposeCaseReducer(t, { fulfilled: s || Ps, pending: a || Ps, rejected: c || Ps, settled: u || Ps }); }
function Ps() { }
function cn(e) { return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `; }
const gk = [], qv = jl({ name: "movieListDetails", initialState: gk, reducers: { setMovieListDetails: (e, t) => t.payload } }), { setMovieListDetails: Bf } = qv.actions, yk = qv.reducer;
var Kv = { exports: {} }, vk = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", wk = vk, xk = wk;
function Yv() { }
function Qv() { }
Qv.resetWarningCache = Yv;
var bk = function () { function e(r, o, i, s, a, c) { if (c !== xk) {
    var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
    throw u.name = "Invariant Violation", u;
} } e.isRequired = e; function t() { return e; } var n = { array: e, bigint: e, bool: e, func: e, number: e, object: e, string: e, symbol: e, any: e, arrayOf: t, element: e, elementType: e, instanceOf: t, node: e, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t, checkPropTypes: Qv, resetWarningCache: Yv }; return n.PropTypes = n, n; };
Kv.exports = bk();
var Sk = Kv.exports;
const De = Ja(Sk);
var Ck = function e(t, n) { if (t === n)
    return !0; if (t && n && typeof t == "object" && typeof n == "object") {
    if (t.constructor !== n.constructor)
        return !1;
    var r, o, i;
    if (Array.isArray(t)) {
        if (r = t.length, r != n.length)
            return !1;
        for (o = r; o-- !== 0;)
            if (!e(t[o], n[o]))
                return !1;
        return !0;
    }
    if (t.constructor === RegExp)
        return t.source === n.source && t.flags === n.flags;
    if (t.valueOf !== Object.prototype.valueOf)
        return t.valueOf() === n.valueOf();
    if (t.toString !== Object.prototype.toString)
        return t.toString() === n.toString();
    if (i = Object.keys(t), r = i.length, r !== Object.keys(n).length)
        return !1;
    for (o = r; o-- !== 0;)
        if (!Object.prototype.hasOwnProperty.call(n, i[o]))
            return !1;
    for (o = r; o-- !== 0;) {
        var s = i[o];
        if (!e(t[s], n[s]))
            return !1;
    }
    return !0;
} return t !== t && n !== n; };
const Ek = Ja(Ck);
var Ku = { exports: {} }, Jv; /**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/
Jv = function () { var e = {}, t = {}; return e.on = function (n, r) { var o = { name: n, handler: r }; return t[n] = t[n] || [], t[n].unshift(o), o; }, e.off = function (n) { var r = t[n.name].indexOf(n); r !== -1 && t[n.name].splice(r, 1); }, e.trigger = function (n, r) { var o = t[n], i; if (o)
    for (i = o.length; i--;)
        o[i].handler(r); }, e; };
var Ak = Jv, Yu = { exports: {} }, kk = function (t, n, r) { var o = document.head || document.getElementsByTagName("head")[0], i = document.createElement("script"); typeof n == "function" && (r = n, n = {}), n = n || {}, r = r || function () { }, i.type = n.type || "text/javascript", i.charset = n.charset || "utf8", i.async = "async" in n ? !!n.async : !0, i.src = t, n.attrs && Nk(i, n.attrs), n.text && (i.text = "" + n.text); var s = "onload" in i ? mm : Pk; s(i, r), i.onload || mm(i, r), o.appendChild(i); };
function Nk(e, t) { for (var n in t)
    e.setAttribute(n, t[n]); }
function mm(e, t) { e.onload = function () { this.onerror = this.onload = null, t(null, e); }, e.onerror = function () { this.onerror = this.onload = null, t(new Error("Failed to load " + this.src), e); }; }
function Pk(e, t) { e.onreadystatechange = function () { this.readyState != "complete" && this.readyState != "loaded" || (this.onreadystatechange = null, t(null, e)); }; }
(function (e, t) { Object.defineProperty(t, "__esModule", { value: !0 }); var n = kk, r = o(n); function o(i) { return i && i.__esModule ? i : { default: i }; } t.default = function (i) { var s = new Promise(function (a) { if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {
    a(window.YT);
    return;
}
else {
    var c = window.location.protocol === "http:" ? "http:" : "https:";
    (0, r.default)(c + "//www.youtube.com/iframe_api", function (d) { d && i.trigger("error", d); });
} var u = window.onYouTubeIframeAPIReady; window.onYouTubeIframeAPIReady = function () { u && u(), a(window.YT); }; }); return s; }, e.exports = t.default; })(Yu, Yu.exports);
var jk = Yu.exports, Qu = { exports: {} }, Ju = { exports: {} }, Zu = { exports: {} }, Bi = 1e3, Ii = Bi * 60, $i = Ii * 60, Fi = $i * 24, Rk = Fi * 365.25, _k = function (e, t) { t = t || {}; var n = typeof e; if (n === "string" && e.length > 0)
    return Tk(e); if (n === "number" && isNaN(e) === !1)
    return t.long ? Lk(e) : Ok(e); throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e)); };
function Tk(e) { if (e = String(e), !(e.length > 100)) {
    var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
    if (t) {
        var n = parseFloat(t[1]), r = (t[2] || "ms").toLowerCase();
        switch (r) {
            case "years":
            case "year":
            case "yrs":
            case "yr":
            case "y": return n * Rk;
            case "days":
            case "day":
            case "d": return n * Fi;
            case "hours":
            case "hour":
            case "hrs":
            case "hr":
            case "h": return n * $i;
            case "minutes":
            case "minute":
            case "mins":
            case "min":
            case "m": return n * Ii;
            case "seconds":
            case "second":
            case "secs":
            case "sec":
            case "s": return n * Bi;
            case "milliseconds":
            case "millisecond":
            case "msecs":
            case "msec":
            case "ms": return n;
            default: return;
        }
    }
} }
function Ok(e) { return e >= Fi ? Math.round(e / Fi) + "d" : e >= $i ? Math.round(e / $i) + "h" : e >= Ii ? Math.round(e / Ii) + "m" : e >= Bi ? Math.round(e / Bi) + "s" : e + "ms"; }
function Lk(e) { return js(e, Fi, "day") || js(e, $i, "hour") || js(e, Ii, "minute") || js(e, Bi, "second") || e + " ms"; }
function js(e, t, n) { if (!(e < t))
    return e < t * 1.5 ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"; }
(function (e, t) { t = e.exports = o.debug = o.default = o, t.coerce = c, t.disable = s, t.enable = i, t.enabled = a, t.humanize = _k, t.names = [], t.skips = [], t.formatters = {}; var n; function r(u) { var d = 0, f; for (f in u)
    d = (d << 5) - d + u.charCodeAt(f), d |= 0; return t.colors[Math.abs(d) % t.colors.length]; } function o(u) { function d() { if (d.enabled) {
    var f = d, p = +new Date, w = p - (n || p);
    f.diff = w, f.prev = n, f.curr = p, n = p;
    for (var m = new Array(arguments.length), b = 0; b < m.length; b++)
        m[b] = arguments[b];
    m[0] = t.coerce(m[0]), typeof m[0] != "string" && m.unshift("%O");
    var x = 0;
    m[0] = m[0].replace(/%([a-zA-Z%])/g, function (h, y) { if (h === "%%")
        return h; x++; var S = t.formatters[y]; if (typeof S == "function") {
        var C = m[x];
        h = S.call(f, C), m.splice(x, 1), x--;
    } return h; }), t.formatArgs.call(f, m);
    var g = d.log || t.log || console.log.bind(console);
    g.apply(f, m);
} } return d.namespace = u, d.enabled = t.enabled(u), d.useColors = t.useColors(), d.color = r(u), typeof t.init == "function" && t.init(d), d; } function i(u) { t.save(u), t.names = [], t.skips = []; for (var d = (typeof u == "string" ? u : "").split(/[\s,]+/), f = d.length, p = 0; p < f; p++)
    d[p] && (u = d[p].replace(/\*/g, ".*?"), u[0] === "-" ? t.skips.push(new RegExp("^" + u.substr(1) + "$")) : t.names.push(new RegExp("^" + u + "$"))); } function s() { t.enable(""); } function a(u) { var d, f; for (d = 0, f = t.skips.length; d < f; d++)
    if (t.skips[d].test(u))
        return !1; for (d = 0, f = t.names.length; d < f; d++)
    if (t.names[d].test(u))
        return !0; return !1; } function c(u) { return u instanceof Error ? u.stack || u.message : u; } })(Zu, Zu.exports);
var Dk = Zu.exports;
(function (e, t) { var n = {}; t = e.exports = Dk, t.log = i, t.formatArgs = o, t.save = s, t.load = a, t.useColors = r, t.storage = typeof chrome < "u" && typeof chrome.storage < "u" ? chrome.storage.local : c(), t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"]; function r() { return typeof window < "u" && window.process && window.process.type === "renderer" ? !0 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/); } t.formatters.j = function (u) { try {
    return JSON.stringify(u);
}
catch (d) {
    return "[UnexpectedJSONParseError]: " + d.message;
} }; function o(u) { var d = this.useColors; if (u[0] = (d ? "%c" : "") + this.namespace + (d ? " %c" : " ") + u[0] + (d ? "%c " : " ") + "+" + t.humanize(this.diff), !!d) {
    var f = "color: " + this.color;
    u.splice(1, 0, f, "color: inherit");
    var p = 0, w = 0;
    u[0].replace(/%[a-zA-Z%]/g, function (m) { m !== "%%" && (p++, m === "%c" && (w = p)); }), u.splice(w, 0, f);
} } function i() { return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments); } function s(u) { try {
    u == null ? t.storage.removeItem("debug") : t.storage.debug = u;
}
catch { } } function a() { var u; try {
    u = t.storage.debug;
}
catch { } return !u && typeof process < "u" && "env" in process && (u = n.DEBUG), u; } t.enable(a()); function c() { try {
    return window.localStorage;
}
catch { } } })(Ju, Ju.exports);
var Mk = Ju.exports, Xu = { exports: {} };
(function (e, t) { Object.defineProperty(t, "__esModule", { value: !0 }), t.default = ["cueVideoById", "loadVideoById", "cueVideoByUrl", "loadVideoByUrl", "playVideo", "pauseVideo", "stopVideo", "getVideoLoadedFraction", "cuePlaylist", "loadPlaylist", "nextVideo", "previousVideo", "playVideoAt", "setShuffle", "setLoop", "getPlaylist", "getPlaylistIndex", "setOption", "mute", "unMute", "isMuted", "setVolume", "getVolume", "seekTo", "getPlayerState", "getPlaybackRate", "setPlaybackRate", "getAvailablePlaybackRates", "getPlaybackQuality", "setPlaybackQuality", "getAvailableQualityLevels", "getCurrentTime", "getDuration", "removeEventListener", "getVideoUrl", "getVideoEmbedCode", "getOptions", "getOption", "addEventListener", "destroy", "setSize", "getIframe"], e.exports = t.default; })(Xu, Xu.exports);
var Bk = Xu.exports, ed = { exports: {} };
(function (e, t) { Object.defineProperty(t, "__esModule", { value: !0 }), t.default = ["ready", "stateChange", "playbackQualityChange", "playbackRateChange", "error", "apiChange", "volumeChange"], e.exports = t.default; })(ed, ed.exports);
var Ik = ed.exports, td = { exports: {} }, nd = { exports: {} };
(function (e, t) { Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { BUFFERING: 3, ENDED: 0, PAUSED: 2, PLAYING: 1, UNSTARTED: -1, VIDEO_CUED: 5 }, e.exports = t.default; })(nd, nd.exports);
var $k = nd.exports;
(function (e, t) { Object.defineProperty(t, "__esModule", { value: !0 }); var n = $k, r = o(n); function o(i) { return i && i.__esModule ? i : { default: i }; } t.default = { pauseVideo: { acceptableStates: [r.default.ENDED, r.default.PAUSED], stateChangeRequired: !1 }, playVideo: { acceptableStates: [r.default.ENDED, r.default.PLAYING], stateChangeRequired: !1 }, seekTo: { acceptableStates: [r.default.ENDED, r.default.PLAYING, r.default.PAUSED], stateChangeRequired: !0, timeout: 3e3 } }, e.exports = t.default; })(td, td.exports);
var Fk = td.exports;
(function (e, t) { Object.defineProperty(t, "__esModule", { value: !0 }); var n = Mk, r = d(n), o = Bk, i = d(o), s = Ik, a = d(s), c = Fk, u = d(c); function d(w) { return w && w.__esModule ? w : { default: w }; } var f = (0, r.default)("youtube-player"), p = {}; p.proxyEvents = function (w) { var m = {}, b = function (E) { var P = "on" + E.slice(0, 1).toUpperCase() + E.slice(1); m[P] = function (M) { f('event "%s"', P, M), w.trigger(E, M); }; }, x = !0, g = !1, h = void 0; try {
    for (var y = a.default[Symbol.iterator](), S; !(x = (S = y.next()).done); x = !0) {
        var C = S.value;
        b(C);
    }
}
catch (N) {
    g = !0, h = N;
}
finally {
    try {
        !x && y.return && y.return();
    }
    finally {
        if (g)
            throw h;
    }
} return m; }, p.promisifyPlayer = function (w) { var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, b = {}, x = function (P) { m && u.default[P] ? b[P] = function () { for (var M = arguments.length, O = Array(M), q = 0; q < M; q++)
    O[q] = arguments[q]; return w.then(function (oe) { var K = u.default[P], ft = oe.getPlayerState(), _t = oe[P].apply(oe, O); return K.stateChangeRequired || Array.isArray(K.acceptableStates) && K.acceptableStates.indexOf(ft) === -1 ? new Promise(function (Ye) { var Fe = function _() { var L = oe.getPlayerState(), $ = void 0; typeof K.timeout == "number" && ($ = setTimeout(function () { oe.removeEventListener("onStateChange", _), Ye(); }, K.timeout)), Array.isArray(K.acceptableStates) && K.acceptableStates.indexOf(L) !== -1 && (oe.removeEventListener("onStateChange", _), clearTimeout($), Ye()); }; oe.addEventListener("onStateChange", Fe); }).then(function () { return _t; }) : _t; }); } : b[P] = function () { for (var M = arguments.length, O = Array(M), q = 0; q < M; q++)
    O[q] = arguments[q]; return w.then(function (oe) { return oe[P].apply(oe, O); }); }; }, g = !0, h = !1, y = void 0; try {
    for (var S = i.default[Symbol.iterator](), C; !(g = (C = S.next()).done); g = !0) {
        var N = C.value;
        x(N);
    }
}
catch (E) {
    h = !0, y = E;
}
finally {
    try {
        !g && S.return && S.return();
    }
    finally {
        if (h)
            throw y;
    }
} return b; }, t.default = p, e.exports = t.default; })(Qu, Qu.exports);
var Uk = Qu.exports;
(function (e, t) { Object.defineProperty(t, "__esModule", { value: !0 }); var n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (f) { return typeof f; } : function (f) { return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f; }, r = Ak, o = u(r), i = jk, s = u(i), a = Uk, c = u(a); function u(f) { return f && f.__esModule ? f : { default: f }; } var d = void 0; t.default = function (f) { var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, m = (0, o.default)(); if (d || (d = (0, s.default)(m)), p.events)
    throw new Error("Event handlers cannot be overwritten."); if (typeof f == "string" && !document.getElementById(f))
    throw new Error('Element "' + f + '" does not exist.'); p.events = c.default.proxyEvents(m); var b = new Promise(function (g) { if ((typeof f > "u" ? "undefined" : n(f)) === "object" && f.playVideo instanceof Function) {
    var h = f;
    g(h);
}
else
    d.then(function (y) { var S = new y.Player(f, p); return m.on("ready", function () { g(S); }), null; }); }), x = c.default.promisifyPlayer(b, w); return x.on = m.on, x.off = m.off, x; }, e.exports = t.default; })(Ku, Ku.exports);
var zk = Ku.exports;
const Hk = Ja(zk);
var Vk = Object.defineProperty, Wk = Object.defineProperties, Gk = Object.getOwnPropertyDescriptors, gm = Object.getOwnPropertySymbols, qk = Object.prototype.hasOwnProperty, Kk = Object.prototype.propertyIsEnumerable, ym = (e, t, n) => t in e ? Vk(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, rd = (e, t) => { for (var n in t || (t = {}))
    qk.call(t, n) && ym(e, n, t[n]); if (gm)
    for (var n of gm(t))
        Kk.call(t, n) && ym(e, n, t[n]); return e; }, od = (e, t) => Wk(e, Gk(t)), Yk = (e, t, n) => new Promise((r, o) => { var i = c => { try {
    a(n.next(c));
}
catch (u) {
    o(u);
} }, s = c => { try {
    a(n.throw(c));
}
catch (u) {
    o(u);
} }, a = c => c.done ? r(c.value) : Promise.resolve(c.value).then(i, s); a((n = n.apply(e, t)).next()); });
function Qk(e, t) { var n, r; if (e.videoId !== t.videoId)
    return !0; const o = ((n = e.opts) == null ? void 0 : n.playerVars) || {}, i = ((r = t.opts) == null ? void 0 : r.playerVars) || {}; return o.start !== i.start || o.end !== i.end; }
function vm(e = {}) { return od(rd({}, e), { height: 0, width: 0, playerVars: od(rd({}, e.playerVars), { autoplay: 0, start: 0, end: 0 }) }); }
function Jk(e, t) { return e.videoId !== t.videoId || !Ek(vm(e.opts), vm(t.opts)); }
function Zk(e, t) { var n, r, o, i; return e.id !== t.id || e.className !== t.className || ((n = e.opts) == null ? void 0 : n.width) !== ((r = t.opts) == null ? void 0 : r.width) || ((o = e.opts) == null ? void 0 : o.height) !== ((i = t.opts) == null ? void 0 : i.height) || e.iframeClassName !== t.iframeClassName || e.title !== t.title; }
var Xk = { videoId: "", id: "", className: "", iframeClassName: "", style: {}, title: "", loading: void 0, opts: {}, onReady: () => { }, onError: () => { }, onPlay: () => { }, onPause: () => { }, onEnd: () => { }, onStateChange: () => { }, onPlaybackRateChange: () => { }, onPlaybackQualityChange: () => { } }, eN = { videoId: De.string, id: De.string, className: De.string, iframeClassName: De.string, style: De.object, title: De.string, loading: De.oneOf(["lazy", "eager"]), opts: De.objectOf(De.any), onReady: De.func, onError: De.func, onPlay: De.func, onPause: De.func, onEnd: De.func, onStateChange: De.func, onPlaybackRateChange: De.func, onPlaybackQualityChange: De.func }, Qs = class extends B.Component {
    constructor(e) { super(e), this.destroyPlayerPromise = void 0, this.onPlayerReady = t => { var n, r; return (r = (n = this.props).onReady) == null ? void 0 : r.call(n, t); }, this.onPlayerError = t => { var n, r; return (r = (n = this.props).onError) == null ? void 0 : r.call(n, t); }, this.onPlayerStateChange = t => { var n, r, o, i, s, a, c, u; switch ((r = (n = this.props).onStateChange) == null || r.call(n, t), t.data) {
        case Qs.PlayerState.ENDED:
            (i = (o = this.props).onEnd) == null || i.call(o, t);
            break;
        case Qs.PlayerState.PLAYING:
            (a = (s = this.props).onPlay) == null || a.call(s, t);
            break;
        case Qs.PlayerState.PAUSED:
            (u = (c = this.props).onPause) == null || u.call(c, t);
            break;
    } }, this.onPlayerPlaybackRateChange = t => { var n, r; return (r = (n = this.props).onPlaybackRateChange) == null ? void 0 : r.call(n, t); }, this.onPlayerPlaybackQualityChange = t => { var n, r; return (r = (n = this.props).onPlaybackQualityChange) == null ? void 0 : r.call(n, t); }, this.destroyPlayer = () => this.internalPlayer ? (this.destroyPlayerPromise = this.internalPlayer.destroy().then(() => this.destroyPlayerPromise = void 0), this.destroyPlayerPromise) : Promise.resolve(), this.createPlayer = () => { if (typeof document > "u")
        return; if (this.destroyPlayerPromise) {
        this.destroyPlayerPromise.then(this.createPlayer);
        return;
    } const t = od(rd({}, this.props.opts), { videoId: this.props.videoId }); this.internalPlayer = Hk(this.container, t), this.internalPlayer.on("ready", this.onPlayerReady), this.internalPlayer.on("error", this.onPlayerError), this.internalPlayer.on("stateChange", this.onPlayerStateChange), this.internalPlayer.on("playbackRateChange", this.onPlayerPlaybackRateChange), this.internalPlayer.on("playbackQualityChange", this.onPlayerPlaybackQualityChange), (this.props.title || this.props.loading) && this.internalPlayer.getIframe().then(n => { this.props.title && n.setAttribute("title", this.props.title), this.props.loading && n.setAttribute("loading", this.props.loading); }); }, this.resetPlayer = () => this.destroyPlayer().then(this.createPlayer), this.updatePlayer = () => { var t; (t = this.internalPlayer) == null || t.getIframe().then(n => { this.props.id ? n.setAttribute("id", this.props.id) : n.removeAttribute("id"), this.props.iframeClassName ? n.setAttribute("class", this.props.iframeClassName) : n.removeAttribute("class"), this.props.opts && this.props.opts.width ? n.setAttribute("width", this.props.opts.width.toString()) : n.removeAttribute("width"), this.props.opts && this.props.opts.height ? n.setAttribute("height", this.props.opts.height.toString()) : n.removeAttribute("height"), this.props.title ? n.setAttribute("title", this.props.title) : n.setAttribute("title", "YouTube video player"), this.props.loading ? n.setAttribute("loading", this.props.loading) : n.removeAttribute("loading"); }); }, this.getInternalPlayer = () => this.internalPlayer, this.updateVideo = () => { var t, n, r, o; if (typeof this.props.videoId > "u" || this.props.videoId === null) {
        (t = this.internalPlayer) == null || t.stopVideo();
        return;
    } let i = !1; const s = { videoId: this.props.videoId }; if ((n = this.props.opts) != null && n.playerVars && (i = this.props.opts.playerVars.autoplay === 1, "start" in this.props.opts.playerVars && (s.startSeconds = this.props.opts.playerVars.start), "end" in this.props.opts.playerVars && (s.endSeconds = this.props.opts.playerVars.end)), i) {
        (r = this.internalPlayer) == null || r.loadVideoById(s);
        return;
    } (o = this.internalPlayer) == null || o.cueVideoById(s); }, this.refContainer = t => { this.container = t; }, this.container = null, this.internalPlayer = null; }
    componentDidMount() { this.createPlayer(); }
    componentDidUpdate(e) { return Yk(this, null, function* () { Zk(e, this.props) && this.updatePlayer(), Jk(e, this.props) && (yield this.resetPlayer()), Qk(e, this.props) && this.updateVideo(); }); }
    componentWillUnmount() { this.destroyPlayer(); }
    render() { return B.createElement("div", { className: this.props.className, style: this.props.style }, B.createElement("div", { id: this.props.id, className: this.props.iframeClassName, ref: this.refContainer })); }
}, Rl = Qs;
Rl.propTypes = eN;
Rl.defaultProps = Xk;
Rl.PlayerState = { UNSTARTED: -1, ENDED: 0, PLAYING: 1, PAUSED: 2, BUFFERING: 3, CUED: 5 };
var tN = Rl;
const nN = [], Zv = jl({ name: "seriesListDetails", initialState: nN, reducers: { setSeriesListDetails: (e, t) => t.payload } }), { setSeriesListDetails: rN } = Zv.actions, oN = Zv.reducer;
var Xv = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 }, wm = B.createContext && B.createContext(Xv), iN = ["attr", "size", "title"];
function sN(e, t) { if (e == null)
    return {}; var n = aN(e, t), r, o; if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
        r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
} return n; }
function aN(e, t) { if (e == null)
    return {}; var n = {}; for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
        if (t.indexOf(r) >= 0)
            continue;
        n[r] = e[r];
    } return n; }
function za() { return za = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, za.apply(this, arguments); }
function xm(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (o) { return Object.getOwnPropertyDescriptor(e, o).enumerable; })), n.push.apply(n, r);
} return n; }
function Ha(e) { for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xm(Object(n), !0).forEach(function (r) { lN(e, r, n[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xm(Object(n)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r)); });
} return e; }
function lN(e, t, n) { return t = cN(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e; }
function cN(e) { var t = uN(e, "string"); return typeof t == "symbol" ? t : t + ""; }
function uN(e, t) { if (typeof e != "object" || !e)
    return e; var n = e[Symbol.toPrimitive]; if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object")
        return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
} return (t === "string" ? String : Number)(e); }
function ew(e) { return e && e.map((t, n) => B.createElement(t.tag, Ha({ key: n }, t.attr), ew(t.child))); }
function de(e) { return t => B.createElement(dN, za({ attr: Ha({}, e.attr) }, t), ew(e.child)); }
function dN(e) { var t = n => { var { attr: r, size: o, title: i } = e, s = sN(e, iN), a = o || n.size || "1em", c; return n.className && (c = n.className), e.className && (c = (c ? c + " " : "") + e.className), B.createElement("svg", za({ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" }, n.attr, r, s, { className: c, style: Ha(Ha({ color: e.color || n.color }, n.style), e.style), height: a, width: a, xmlns: "http://www.w3.org/2000/svg" }), i && B.createElement("title", null, i), e.children); }; return wm !== void 0 ? B.createElement(wm.Consumer, null, n => t(n)) : t(Xv); }
function fN(e) { return de({ tag: "svg", attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" }, child: [] }] })(e); }
function pN(e) { return de({ tag: "svg", attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" }, child: [] }] })(e); }
function If(e) { return de({ tag: "svg", attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" }, child: [] }] })(e); }
const tw = ({ movie: e, clickCount: t, navigate: n }) => { if (t.id === e.video_id && t.count > 0)
    if (e.is_series) {
        const r = e, { season_order: o, episodes: i } = r.seasons[0], { episode_order: s, video_url: a, thumbnail_path: c, subtitles_url: u } = i[0], d = { subtitles_url: u, video_url: a, backdrop_path: c, is_series: !0, season_order: o, episode_order: s, show_details: !0 };
        n(`/watch/${e.title}-${e.video_id}`, { state: { movie: e, playVideo: d } });
    }
    else {
        const r = e, { backdrop_path: o, description: i, is_series: s, video_url: a, subtitles_url: c } = r, u = { backdrop_path: o, description: i, is_series: s, video_url: a, episode_order: 0, season_order: 0, subtitles_url: c, show_details: !1 };
        n(`/watch/${e.title}-${e.video_id}`, { state: { movie: e, playVideo: u } });
    } }, nw = ({ movie: e, clickCount: t, navigate: n, setClickCount: r, setHoveredMovie: o, setIsVideoReady: i, handleMovieHover: s, isLargeRow: a }) => l.jsx("div", { className: "div_poster", children: l.jsx("img", { onClick: () => tw({ movie: e, clickCount: t, navigate: n, setClickCount: r, setHoveredMovie: o, setIsVideoReady: i }), onMouseEnter: () => s(e), className: `row__poster ${a && "row__posterLarge"} `, src: `${Bo}${a ? e.poster_path : e.backdrop_path}`, alt: e.name }, e.video_id) }), Bo = "https://image.tmdb.org/t/p/original", bm = ({ title: e, type: t, fetchUrl: n, isLargeRow: r, setHoveredMovie: o, setIsVideoReady: i, theDevice: s }) => { const [a, c] = v.useState([]), [u, d] = v.useState(""), [f, p] = v.useState({ count: 0, id: 0 }), w = kn(), m = v.useRef(null), b = ye(); v.useEffect(() => { const S = ""; t === "movies" ? is(n, S, b).then(C => { C.success && (c(C.details), w(Bf(C.details))); }) : t === "series" && Of(n, S, b).then(C => { C.success && (c(C.details), w(rN(C.details))); }); }, [n]); const x = { height: "390", width: "740", playerVars: { autoplay: 1 } }, g = S => { f.id !== S.video_id && i(!1), o({ movie_id: S.video_id, is_series: S.is_series }), p({ count: 1, id: S.video_id }); }, h = () => { m.current && (m.current.scrollLeft -= 300); }, y = () => { m.current && (m.current.scrollLeft += 300); }; return l.jsxs("div", { className: "row2 bg-black ps-3", children: [l.jsx("h2", { className: "row_title", children: e }), l.jsxs("div", { className: "d-fle position-relative w-100 ", children: [s !== "phone" && l.jsx("div", { onClick: h, role: "button", className: "custom-btn position-absolute start-0 top-0 bottom-0 d-flex align-items-center", children: l.jsx(fN, { size: 42 }) }), l.jsx("div", { className: "row__posters pl", ref: m, children: a.map((S, C) => l.jsx(nw, { movie: S, clickCount: f, navigate: b, setClickCount: p, setHoveredMovie: o, setIsVideoReady: i, handleMovieHover: g, isLargeRow: r }, C)) }), s !== "phone" && l.jsx("div", { onClick: y, role: "button", className: "custom-btn2 position-absolute end-0 top-0 bottom-0 d-flex align-items-center", children: l.jsx(pN, { size: 42 }) })] }), u && l.jsx(tN, { videoId: u, opts: x, className: "youtube" }), " "] }); }, Nc = ({ setIsLogin: e, prevelages: t }) => { var b, x, g; const n = ye(), r = kn(), [o, i] = v.useState("admin"), [s, a] = v.useState({ email: "", password: "", acc_type: o, phone: "" }), [c, u] = v.useState(!1), d = Et(h => h.movieListDetails), [f, p] = v.useState(0); v.useEffect(() => { const h = setInterval(() => { p(y => (y + 1) % d.length); }, 5e3); return () => clearInterval(h); }, [d.length]); const w = h => { const y = h.target.name, S = h.target.value; y === "phone" ? S.length < 10 && a(C => ({ ...C, [y]: S })) : a(C => ({ ...C, [y]: S })); }; v.useEffect(() => { if (t === "viewer") {
    const y = localStorage.getItem("viewerToken");
    if (y) {
        const S = JSON.parse(y);
        u(!0), LE(S).then(C => { C.success ? n("/viewer/dashboard") : u(!1); });
    }
} is("videos/get-movies", "", n, !1).then(y => { y.success && r(Bf(y.details)); }); }, []), v.useEffect(() => { a(h => ({ ...h, acc_type: o })); }, [o]); const m = async (h) => { h.preventDefault(); let y = JSON.stringify({ ...s, prevelages: t, phone: "254" + s.phone, auth_with: "app" }); u(!0), await OE({ data: y, navigate: n, setLoginDetails: a, setIsLogin: e, prevelages: t }), u(!1); }; return l.jsx("div", { className: "row pl-0 ps-0 px-0 mx-0 col-12 col-sm-8 background", style: { backgroundImage: `url(${Bo}${(b = d[f]) == null ? void 0 : b.backdrop_path})` }, children: l.jsxs("div", { className: "bg- d-fle  login-form h-100", children: [l.jsxs("h1", { className: "text-primary p-4", children: ["J", l.jsx("span", { className: "text-warning px-2", children: "A" }), "P"] }), l.jsxs("div", { className: " gap-5 d-flex flex-column flex-md-row form-title", children: [l.jsx("div", { className: "col-lg-4 col-xl-3 d-flex  text-center px- px-sm-3 py-5", children: l.jsxs("div", { className: "form-bo text-light", children: [l.jsx("h4", { children: "Log in to Watch" }), l.jsx("div", { className: " p-10 rounded", id: "myTabContent", style: { height: "100%" }, children: l.jsx("div", { className: "tab-pane fade p-10 show active", id: "admin", role: "tabpanel", "aria-labelledby": "admin-tab", children: l.jsxs("form", { onSubmit: m, action: "#", className: "mt-3", style: { height: "100%" }, children: [l.jsxs("div", { className: "row h-100 ", children: [t === "viewer" && l.jsxs("div", { className: "mb-3", children: [l.jsx("label", { htmlFor: "phone ", className: "text-light text-start w-100", children: "Your Phone Number" }), l.jsxs("div", { className: "input-group ", children: [l.jsx("span", { className: "input-group-text", children: "+254" }), l.jsx("input", { onChange: w, required: !0, value: s.phone, type: "number", name: "phone", className: "form-control", placeholder: "714470000" })] }), l.jsx("div", { className: "form-text text-warning", id: "basic-addon4", children: "After +254, continue with 7... or 1.." })] }), t === "admin" && l.jsx("div", { className: "col-12 d-flex ", children: l.jsxs("div", { className: "form-group w-100 text-dark text-start my-3", children: [l.jsx("label", { htmlFor: "email ", className: "text-light", children: "Enter email" }), l.jsx("input", { onChange: w, name: "email", type: "email", className: "form-control", placeholder: o === "admin" ? "Email" : "Business Email" })] }) }), l.jsx("div", { className: "col-12 d-flex align-items-center text-dark ", children: l.jsxs("div", { className: "form-group w-100 text-start", children: [l.jsx("label", { htmlFor: "email", className: "text-light", children: "Your Password" }), l.jsx("input", { onChange: w, name: "password", type: "password", className: "form-control", placeholder: "Password" })] }) })] }), l.jsx("div", { className: " my-3 text-start", children: l.jsx("button", { type: "submit", disabled: c, className: "btn btn-outline-primary", children: c ? "Logging in ..." : "Log in" }) }), l.jsx("div", { className: "remember-forgot d-flex justify-content-between pt-3", children: l.jsx("div", { className: "forget-pw", children: l.jsx(ge, { className: "a-link text-info", to: "/forgot-password", children: "Reset password?" }) }) })] }) }) })] }) }), l.jsxs("div", { className: "d-flex justify-content-end flex-column text-end align-items-end w-100 text-light border-2", children: [l.jsx("h1", { className: "text-warning", children: (x = d[f]) == null ? void 0 : x.title }), l.jsx("p", { className: "text-info", children: (g = d[f]) == null ? void 0 : g.slug })] })] })] }) }); }, hN = "/assets/logo-no-background-DcTbDFN4.svg", mN = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD9SURBVHgB7VAxUsMwEFzJGegYPwALFbHSJj/gC7wAUydKnBcAP2CoKMkL4AfJE6hp8FDRQS/iRQrY4wCZSep4ZzS6W+2uTgJa7BESYx+UGZ9jRwRP8Fa9rAsiBnjvBZdbZkH1xpPgERS64jpVIVx0xoPPG19eKWMzEtfOucVbcVc0Q2Kdx0eHLgPlBKQmOItclNc5f2419r3y/uwfoPgOFQycrnmI4vX5dtD0y2aTpDYLQX66qeRyAFFOQTz6IL0KIxaBC2dB45/bP+6OTrHxT4x9Ces3f5LaeZKO5v/p/RBrfGddwhmXeMKWKEteyIh97ArVHeaqN8zRosUKX03JWHnD4yPiAAAAAElFTkSuQmCC", gN = "/assets/register-illus-DRWUK_tU.png", yN = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACSSURBVHgBrZTBDYAgDEV/nMARHMER3ERHcAPdQDeAjRiBEXQDLLGHhhsfXvIPkPQF0qZAJSmlVfJIZrBI8ZF+gmQEg5F4sEjxpZIbDPn5EqeSEwwqCa2SSRJVsoHBSHKLFzAYSaydk6E4v+hF8TV+egtZZkULRfsPtKAy30Wmwrun7FSZQytGxq8RI9t1NCZ7/wFFgt6FRkA99AAAAABJRU5ErkJggg==", vN = "/assets/JAP-logo-BENkEOvr.png", wN = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAFACAMAAAD6TlWYAAAAM1BMVEX////w9/fh7+/S5+fD39+z19ekz8+Vx8eGv8B3trhorrBZpqhKnqA6lpgrjpAchogNfoCu3ygvAAAGaUlEQVR4nO3d23qiMAAAYURQFATf/2lXa7vWVSBkBMN+M3e9KOJfDhJsyM6Gyj69AmtPQJiAMAFhAsIEhAkIExAmIExAmIAwAWECwgSECQgTECYgTECYgDABYQLCBIQJCBMQJiBMQJiAMAFhAsIEhAkIExAmIExAmIAwAWECwgSECQgTECYgTECYgDABYQLCBIQJCBMQJiBMQJiAMAFhAsIEhAkIExAmIExAmIAwAWECwgSECQgTECYgTECYgDABYQLCBIQJCBMQJiBMQJiAMAFhAsIEhAkIExAmIExAmIAwAWECwt4D2DRN95YFfai2aU6Rv4oB20O5yb4q9rEr8dHq/fa2/nl5jNgKIGBTZr/Lj2xxi9dV+cMb2LVTl4AAu0e+L8KGLHDp6s3TG9hP3AoJYPP88tc1AEtctm73av3zaQciAHh89fLX3SB+kYvWbV+v/2aSYDxgn99aBPv8JgpGA556/VayFz8fv++CE04lsYBd3v/6WVZHLnXBDkPrvw1fTizgfuj1szz5j9XtyxPg3w7BC4oEbAdfPsuquMUu18sT8L1N8BYQCTi8AV5WIG6xi9WNrH/4JhgJOLwDZMkfBQePgNeCj4JxgM3Y66f+UaYYfQOhJ+I4wGr09fOo5S7W6PpnoVf1cYDjf8As6fPw+B4U/Fk2DrD3Q/y9pAcV6vH1LwIXFQc4/vppA44fggQcTEDYxwEDTiJJAwacROYFHBjJ+Cnps/DQUNJ3856F/Rx4X1LU64//BRO/Ehnfhea9EjkPjgZeS/xauH84/buZr4VH9+HE9+BzNzYaEnx/NhJwbAWSvz88sgWEbwCxI9LDK5D6Bji6BYRvANE3lQYvh5P+EHhr8HI49EPgmdyVG/gTht9R+GADg/pTbunE3xfuF0z8I8xPvYLL3BfuF1yJX6/gUt9MuAi+PA4mfwK+9/JMuJ12Ecq+nfW8BsWqviPYPG0Cm6k3ZOH3A9vdw35crOD0+9hx+8g3eQyEf8W33t8Gt/LyMPnbiSnUHsrbhWmxj7n+9EvmMAFhAsIEhAkIExAmIExAmIAwAWECwgSECQgTECYgTECYgDABYQLCBIQJCBMQJiBMQJiAMAFhAsIEhAkIExAmIExAmIAwAWECwgSECQgTECYgTECYgDABYQLCBIQJ+FQ76dkiAj72/XyMMvj/dgX8XVf9/ffneScf+z/7xRcumBjg6VAdPzRpwCNfFjr5TVKAx9u/jucfmLnsn7kLvv6DPegXUwK8T0NSLjx5QPNyBpSg+RMSAnx4E1MfbUQ69sxoGrQPpwP4z7ymERNoRNVWvXMhrgzwaVLJTTX/jlwPTWW5MsBXb2E36xm53Q9PxLmuY2DPzMTFXDNJtYex+ezLoOWkDnjZk2fYDLtjwETOYS+bDODQM2bytz61c3zb+ypw008GcGRi4HcZ1iPHvZ82884jPUejk3tvdkd2Wm6qgCnsb4U/pDQdwOEn1X233cchdnU43rRnvKYDODgr6+82ZVVPeIeni13YbhvBlxTguZ2wkWTFrqqHH6t9ag5VGXS+iOdLC/ByVRq4Ed7Li2JfVdWx+am+/FQVxZS/xb2Ii5+0AF9NKrpc+WH5R4S/v3bkoY2zFXnNkxzgZwjjL3cSBLxe5U8+FqK2Mfvud0kCXo6Fh0mfPEjwWjtRwPPIUN3bKuloT7qAg4PF79Ljo94pA146Pd8sS0nvnDzgpXoGw83uPXrnNQBeOu0nX5ENVFTvHF1cBeCl9rh7xwFxu6/ffLNvLYDXGOKmrOZ4VMKaAK91TcQISz5tAGxSawO81dRVWQScWzZfg16zrso6Ab87XQev9sXj4FV+/bmqqqZZ5As2qwZMIQFhAsIEhAkIExAmIExAmIAwAWECwgSECQgTECYgTECYgDABYQLCBIQJCBMQJiBMQJiAMAFhAsIEhAkIExAmIExAmIAwAWECwgSECQgTECYgTECYgDABYQLCBIQJCBMQJiBMQJiAMAFhAsIEhAkIExAmIExAmIAwAWECwgSECQgTECYgTECYgDABYQLCBIQJCBMQJiBMQJiAMAFhAsIEhAkIExAmIExAmIAwAWECwgSECQgTECYgTECYgDABYQLCBIQJCBMQJiBMQJiAMAFhAsIEhAkIExAmIExAmIAwAWECwgSECQgTECYgTECYgDABYQLCBIQJCBMQJiDsDyaJ+FLzeNcQAAAAAElFTkSuQmCC"; /*! countries-list v3.1.1 by Annexare | MIT */
var $f = { AD: { name: "Andorra", native: "Andorra", phone: [376], continent: "EU", capital: "Andorra la Vella", currency: ["EUR"], languages: ["ca"] }, AE: { name: "United Arab Emirates", native: "دولة الإمارات العربية المتحدة", phone: [971], continent: "AS", capital: "Abu Dhabi", currency: ["AED"], languages: ["ar"] }, AF: { name: "Afghanistan", native: "افغانستان", phone: [93], continent: "AS", capital: "Kabul", currency: ["AFN"], languages: ["ps", "uz", "tk"] }, AG: { name: "Antigua and Barbuda", native: "Antigua and Barbuda", phone: [1268], continent: "NA", capital: "Saint John's", currency: ["XCD"], languages: ["en"] }, AI: { name: "Anguilla", native: "Anguilla", phone: [1264], continent: "NA", capital: "The Valley", currency: ["XCD"], languages: ["en"] }, AL: { name: "Albania", native: "Shqipëria", phone: [355], continent: "EU", capital: "Tirana", currency: ["ALL"], languages: ["sq"] }, AM: { name: "Armenia", native: "Հայաստան", phone: [374], continent: "AS", capital: "Yerevan", currency: ["AMD"], languages: ["hy", "ru"] }, AO: { name: "Angola", native: "Angola", phone: [244], continent: "AF", capital: "Luanda", currency: ["AOA"], languages: ["pt"] }, AQ: { name: "Antarctica", native: "Antarctica", phone: [672], continent: "AN", capital: "", currency: [], languages: [] }, AR: { name: "Argentina", native: "Argentina", phone: [54], continent: "SA", capital: "Buenos Aires", currency: ["ARS"], languages: ["es", "gn"] }, AS: { name: "American Samoa", native: "American Samoa", phone: [1684], continent: "OC", capital: "Pago Pago", currency: ["USD"], languages: ["en", "sm"] }, AT: { name: "Austria", native: "Österreich", phone: [43], continent: "EU", capital: "Vienna", currency: ["EUR"], languages: ["de"] }, AU: { name: "Australia", native: "Australia", phone: [61], continent: "OC", capital: "Canberra", currency: ["AUD"], languages: ["en"] }, AW: { name: "Aruba", native: "Aruba", phone: [297], continent: "NA", capital: "Oranjestad", currency: ["AWG"], languages: ["nl", "pa"] }, AX: { name: "Aland", native: "Åland", phone: [358], continent: "EU", capital: "Mariehamn", currency: ["EUR"], languages: ["sv"], partOf: "FI" }, AZ: { name: "Azerbaijan", native: "Azərbaycan", phone: [994], continent: "AS", continents: ["AS", "EU"], capital: "Baku", currency: ["AZN"], languages: ["az"] }, BA: { name: "Bosnia and Herzegovina", native: "Bosna i Hercegovina", phone: [387], continent: "EU", capital: "Sarajevo", currency: ["BAM"], languages: ["bs", "hr", "sr"] }, BB: { name: "Barbados", native: "Barbados", phone: [1246], continent: "NA", capital: "Bridgetown", currency: ["BBD"], languages: ["en"] }, BD: { name: "Bangladesh", native: "Bangladesh", phone: [880], continent: "AS", capital: "Dhaka", currency: ["BDT"], languages: ["bn"] }, BE: { name: "Belgium", native: "België", phone: [32], continent: "EU", capital: "Brussels", currency: ["EUR"], languages: ["nl", "fr", "de"] }, BF: { name: "Burkina Faso", native: "Burkina Faso", phone: [226], continent: "AF", capital: "Ouagadougou", currency: ["XOF"], languages: ["fr", "ff"] }, BG: { name: "Bulgaria", native: "България", phone: [359], continent: "EU", capital: "Sofia", currency: ["BGN"], languages: ["bg"] }, BH: { name: "Bahrain", native: "‏البحرين", phone: [973], continent: "AS", capital: "Manama", currency: ["BHD"], languages: ["ar"] }, BI: { name: "Burundi", native: "Burundi", phone: [257], continent: "AF", capital: "Bujumbura", currency: ["BIF"], languages: ["fr", "rn"] }, BJ: { name: "Benin", native: "Bénin", phone: [229], continent: "AF", capital: "Porto-Novo", currency: ["XOF"], languages: ["fr"] }, BL: { name: "Saint Barthelemy", native: "Saint-Barthélemy", phone: [590], continent: "NA", capital: "Gustavia", currency: ["EUR"], languages: ["fr"] }, BM: { name: "Bermuda", native: "Bermuda", phone: [1441], continent: "NA", capital: "Hamilton", currency: ["BMD"], languages: ["en"] }, BN: { name: "Brunei", native: "Negara Brunei Darussalam", phone: [673], continent: "AS", capital: "Bandar Seri Begawan", currency: ["BND"], languages: ["ms"] }, BO: { name: "Bolivia", native: "Bolivia", phone: [591], continent: "SA", capital: "Sucre", currency: ["BOB", "BOV"], languages: ["es", "ay", "qu"] }, BQ: { name: "Bonaire", native: "Bonaire", phone: [5997], continent: "NA", capital: "Kralendijk", currency: ["USD"], languages: ["nl"] }, BR: { name: "Brazil", native: "Brasil", phone: [55], continent: "SA", capital: "Brasília", currency: ["BRL"], languages: ["pt"] }, BS: { name: "Bahamas", native: "Bahamas", phone: [1242], continent: "NA", capital: "Nassau", currency: ["BSD"], languages: ["en"] }, BT: { name: "Bhutan", native: "ʼbrug-yul", phone: [975], continent: "AS", capital: "Thimphu", currency: ["BTN", "INR"], languages: ["dz"] }, BV: { name: "Bouvet Island", native: "Bouvetøya", phone: [47], continent: "AN", capital: "", currency: ["NOK"], languages: ["no", "nb", "nn"] }, BW: { name: "Botswana", native: "Botswana", phone: [267], continent: "AF", capital: "Gaborone", currency: ["BWP"], languages: ["en", "tn"] }, BY: { name: "Belarus", native: "Белару́сь", phone: [375], continent: "EU", capital: "Minsk", currency: ["BYN"], languages: ["be", "ru"] }, BZ: { name: "Belize", native: "Belize", phone: [501], continent: "NA", capital: "Belmopan", currency: ["BZD"], languages: ["en", "es"] }, CA: { name: "Canada", native: "Canada", phone: [1], continent: "NA", capital: "Ottawa", currency: ["CAD"], languages: ["en", "fr"] }, CC: { name: "Cocos (Keeling) Islands", native: "Cocos (Keeling) Islands", phone: [61], continent: "AS", capital: "West Island", currency: ["AUD"], languages: ["en"] }, CD: { name: "Democratic Republic of the Congo", native: "République démocratique du Congo", phone: [243], continent: "AF", capital: "Kinshasa", currency: ["CDF"], languages: ["fr", "ln", "kg", "sw", "lu"] }, CF: { name: "Central African Republic", native: "Ködörösêse tî Bêafrîka", phone: [236], continent: "AF", capital: "Bangui", currency: ["XAF"], languages: ["fr", "sg"] }, CG: { name: "Republic of the Congo", native: "République du Congo", phone: [242], continent: "AF", capital: "Brazzaville", currency: ["XAF"], languages: ["fr", "ln"] }, CH: { name: "Switzerland", native: "Schweiz", phone: [41], continent: "EU", capital: "Bern", currency: ["CHE", "CHF", "CHW"], languages: ["de", "fr", "it"] }, CI: { name: "Ivory Coast", native: "Côte d'Ivoire", phone: [225], continent: "AF", capital: "Yamoussoukro", currency: ["XOF"], languages: ["fr"] }, CK: { name: "Cook Islands", native: "Cook Islands", phone: [682], continent: "OC", capital: "Avarua", currency: ["NZD"], languages: ["en"] }, CL: { name: "Chile", native: "Chile", phone: [56], continent: "SA", capital: "Santiago", currency: ["CLF", "CLP"], languages: ["es"] }, CM: { name: "Cameroon", native: "Cameroon", phone: [237], continent: "AF", capital: "Yaoundé", currency: ["XAF"], languages: ["en", "fr"] }, CN: { name: "China", native: "中国", phone: [86], continent: "AS", capital: "Beijing", currency: ["CNY"], languages: ["zh"] }, CO: { name: "Colombia", native: "Colombia", phone: [57], continent: "SA", capital: "Bogotá", currency: ["COP"], languages: ["es"] }, CR: { name: "Costa Rica", native: "Costa Rica", phone: [506], continent: "NA", capital: "San José", currency: ["CRC"], languages: ["es"] }, CU: { name: "Cuba", native: "Cuba", phone: [53], continent: "NA", capital: "Havana", currency: ["CUC", "CUP"], languages: ["es"] }, CV: { name: "Cape Verde", native: "Cabo Verde", phone: [238], continent: "AF", capital: "Praia", currency: ["CVE"], languages: ["pt"] }, CW: { name: "Curacao", native: "Curaçao", phone: [5999], continent: "NA", capital: "Willemstad", currency: ["ANG"], languages: ["nl", "pa", "en"] }, CX: { name: "Christmas Island", native: "Christmas Island", phone: [61], continent: "AS", capital: "Flying Fish Cove", currency: ["AUD"], languages: ["en"] }, CY: { name: "Cyprus", native: "Κύπρος", phone: [357], continent: "EU", capital: "Nicosia", currency: ["EUR"], languages: ["el", "tr", "hy"] }, CZ: { name: "Czech Republic", native: "Česká republika", phone: [420], continent: "EU", capital: "Prague", currency: ["CZK"], languages: ["cs"] }, DE: { name: "Germany", native: "Deutschland", phone: [49], continent: "EU", capital: "Berlin", currency: ["EUR"], languages: ["de"] }, DJ: { name: "Djibouti", native: "Djibouti", phone: [253], continent: "AF", capital: "Djibouti", currency: ["DJF"], languages: ["fr", "ar"] }, DK: { name: "Denmark", native: "Danmark", phone: [45], continent: "EU", continents: ["EU", "NA"], capital: "Copenhagen", currency: ["DKK"], languages: ["da"] }, DM: { name: "Dominica", native: "Dominica", phone: [1767], continent: "NA", capital: "Roseau", currency: ["XCD"], languages: ["en"] }, DO: { name: "Dominican Republic", native: "República Dominicana", phone: [1809, 1829, 1849], continent: "NA", capital: "Santo Domingo", currency: ["DOP"], languages: ["es"] }, DZ: { name: "Algeria", native: "الجزائر", phone: [213], continent: "AF", capital: "Algiers", currency: ["DZD"], languages: ["ar"] }, EC: { name: "Ecuador", native: "Ecuador", phone: [593], continent: "SA", capital: "Quito", currency: ["USD"], languages: ["es"] }, EE: { name: "Estonia", native: "Eesti", phone: [372], continent: "EU", capital: "Tallinn", currency: ["EUR"], languages: ["et"] }, EG: { name: "Egypt", native: "مصر‎", phone: [20], continent: "AF", continents: ["AF", "AS"], capital: "Cairo", currency: ["EGP"], languages: ["ar"] }, EH: { name: "Western Sahara", native: "الصحراء الغربية", phone: [212], continent: "AF", capital: "El Aaiún", currency: ["MAD", "DZD", "MRU"], languages: ["es"] }, ER: { name: "Eritrea", native: "ኤርትራ", phone: [291], continent: "AF", capital: "Asmara", currency: ["ERN"], languages: ["ti", "ar", "en"] }, ES: { name: "Spain", native: "España", phone: [34], continent: "EU", capital: "Madrid", currency: ["EUR"], languages: ["es", "eu", "ca", "gl", "oc"] }, ET: { name: "Ethiopia", native: "ኢትዮጵያ", phone: [251], continent: "AF", capital: "Addis Ababa", currency: ["ETB"], languages: ["am"] }, FI: { name: "Finland", native: "Suomi", phone: [358], continent: "EU", capital: "Helsinki", currency: ["EUR"], languages: ["fi", "sv"] }, FJ: { name: "Fiji", native: "Fiji", phone: [679], continent: "OC", capital: "Suva", currency: ["FJD"], languages: ["en", "fj", "hi", "ur"] }, FK: { name: "Falkland Islands", native: "Falkland Islands", phone: [500], continent: "SA", capital: "Stanley", currency: ["FKP"], languages: ["en"] }, FM: { name: "Micronesia", native: "Micronesia", phone: [691], continent: "OC", capital: "Palikir", currency: ["USD"], languages: ["en"] }, FO: { name: "Faroe Islands", native: "Føroyar", phone: [298], continent: "EU", capital: "Tórshavn", currency: ["DKK"], languages: ["fo"] }, FR: { name: "France", native: "France", phone: [33], continent: "EU", capital: "Paris", currency: ["EUR"], languages: ["fr"] }, GA: { name: "Gabon", native: "Gabon", phone: [241], continent: "AF", capital: "Libreville", currency: ["XAF"], languages: ["fr"] }, GB: { name: "United Kingdom", native: "United Kingdom", phone: [44], continent: "EU", capital: "London", currency: ["GBP"], languages: ["en"] }, GD: { name: "Grenada", native: "Grenada", phone: [1473], continent: "NA", capital: "St. George's", currency: ["XCD"], languages: ["en"] }, GE: { name: "Georgia", native: "საქართველო", phone: [995], continent: "AS", continents: ["AS", "EU"], capital: "Tbilisi", currency: ["GEL"], languages: ["ka"] }, GF: { name: "French Guiana", native: "Guyane française", phone: [594], continent: "SA", capital: "Cayenne", currency: ["EUR"], languages: ["fr"] }, GG: { name: "Guernsey", native: "Guernsey", phone: [44], continent: "EU", capital: "St. Peter Port", currency: ["GBP"], languages: ["en", "fr"] }, GH: { name: "Ghana", native: "Ghana", phone: [233], continent: "AF", capital: "Accra", currency: ["GHS"], languages: ["en"] }, GI: { name: "Gibraltar", native: "Gibraltar", phone: [350], continent: "EU", capital: "Gibraltar", currency: ["GIP"], languages: ["en"] }, GL: { name: "Greenland", native: "Kalaallit Nunaat", phone: [299], continent: "NA", capital: "Nuuk", currency: ["DKK"], languages: ["kl"] }, GM: { name: "Gambia", native: "Gambia", phone: [220], continent: "AF", capital: "Banjul", currency: ["GMD"], languages: ["en"] }, GN: { name: "Guinea", native: "Guinée", phone: [224], continent: "AF", capital: "Conakry", currency: ["GNF"], languages: ["fr", "ff"] }, GP: { name: "Guadeloupe", native: "Guadeloupe", phone: [590], continent: "NA", capital: "Basse-Terre", currency: ["EUR"], languages: ["fr"] }, GQ: { name: "Equatorial Guinea", native: "Guinea Ecuatorial", phone: [240], continent: "AF", capital: "Malabo", currency: ["XAF"], languages: ["es", "fr"] }, GR: { name: "Greece", native: "Ελλάδα", phone: [30], continent: "EU", capital: "Athens", currency: ["EUR"], languages: ["el"] }, GS: { name: "South Georgia and the South Sandwich Islands", native: "South Georgia", phone: [500], continent: "AN", capital: "King Edward Point", currency: ["GBP"], languages: ["en"] }, GT: { name: "Guatemala", native: "Guatemala", phone: [502], continent: "NA", capital: "Guatemala City", currency: ["GTQ"], languages: ["es"] }, GU: { name: "Guam", native: "Guam", phone: [1671], continent: "OC", capital: "Hagåtña", currency: ["USD"], languages: ["en", "ch", "es"] }, GW: { name: "Guinea-Bissau", native: "Guiné-Bissau", phone: [245], continent: "AF", capital: "Bissau", currency: ["XOF"], languages: ["pt"] }, GY: { name: "Guyana", native: "Guyana", phone: [592], continent: "SA", capital: "Georgetown", currency: ["GYD"], languages: ["en"] }, HK: { name: "Hong Kong", native: "香港", phone: [852], continent: "AS", capital: "City of Victoria", currency: ["HKD"], languages: ["zh", "en"] }, HM: { name: "Heard Island and McDonald Islands", native: "Heard Island and McDonald Islands", phone: [61], continent: "AN", capital: "", currency: ["AUD"], languages: ["en"] }, HN: { name: "Honduras", native: "Honduras", phone: [504], continent: "NA", capital: "Tegucigalpa", currency: ["HNL"], languages: ["es"] }, HR: { name: "Croatia", native: "Hrvatska", phone: [385], continent: "EU", capital: "Zagreb", currency: ["EUR"], languages: ["hr"] }, HT: { name: "Haiti", native: "Haïti", phone: [509], continent: "NA", capital: "Port-au-Prince", currency: ["HTG", "USD"], languages: ["fr", "ht"] }, HU: { name: "Hungary", native: "Magyarország", phone: [36], continent: "EU", capital: "Budapest", currency: ["HUF"], languages: ["hu"] }, ID: { name: "Indonesia", native: "Indonesia", phone: [62], continent: "AS", capital: "Jakarta", currency: ["IDR"], languages: ["id"] }, IE: { name: "Ireland", native: "Éire", phone: [353], continent: "EU", capital: "Dublin", currency: ["EUR"], languages: ["ga", "en"] }, IL: { name: "Israel", native: "יִשְׂרָאֵל", phone: [972], continent: "AS", capital: "Jerusalem", currency: ["ILS"], languages: ["he", "ar"] }, IM: { name: "Isle of Man", native: "Isle of Man", phone: [44], continent: "EU", capital: "Douglas", currency: ["GBP"], languages: ["en", "gv"] }, IN: { name: "India", native: "भारत", phone: [91], continent: "AS", capital: "New Delhi", currency: ["INR"], languages: ["hi", "en"] }, IO: { name: "British Indian Ocean Territory", native: "British Indian Ocean Territory", phone: [246], continent: "AS", capital: "Diego Garcia", currency: ["USD"], languages: ["en"] }, IQ: { name: "Iraq", native: "العراق", phone: [964], continent: "AS", capital: "Baghdad", currency: ["IQD"], languages: ["ar", "ku"] }, IR: { name: "Iran", native: "ایران", phone: [98], continent: "AS", capital: "Tehran", currency: ["IRR"], languages: ["fa"] }, IS: { name: "Iceland", native: "Ísland", phone: [354], continent: "EU", capital: "Reykjavik", currency: ["ISK"], languages: ["is"] }, IT: { name: "Italy", native: "Italia", phone: [39], continent: "EU", capital: "Rome", currency: ["EUR"], languages: ["it"] }, JE: { name: "Jersey", native: "Jersey", phone: [44], continent: "EU", capital: "Saint Helier", currency: ["GBP"], languages: ["en", "fr"] }, JM: { name: "Jamaica", native: "Jamaica", phone: [1876], continent: "NA", capital: "Kingston", currency: ["JMD"], languages: ["en"] }, JO: { name: "Jordan", native: "الأردن", phone: [962], continent: "AS", capital: "Amman", currency: ["JOD"], languages: ["ar"] }, JP: { name: "Japan", native: "日本", phone: [81], continent: "AS", capital: "Tokyo", currency: ["JPY"], languages: ["ja"] }, KE: { name: "Kenya", native: "Kenya", phone: [254], continent: "AF", capital: "Nairobi", currency: ["KES"], languages: ["en", "sw"] }, KG: { name: "Kyrgyzstan", native: "Кыргызстан", phone: [996], continent: "AS", capital: "Bishkek", currency: ["KGS"], languages: ["ky", "ru"] }, KH: { name: "Cambodia", native: "Kâmpŭchéa", phone: [855], continent: "AS", capital: "Phnom Penh", currency: ["KHR"], languages: ["km"] }, KI: { name: "Kiribati", native: "Kiribati", phone: [686], continent: "OC", capital: "South Tarawa", currency: ["AUD"], languages: ["en"] }, KM: { name: "Comoros", native: "Komori", phone: [269], continent: "AF", capital: "Moroni", currency: ["KMF"], languages: ["ar", "fr"] }, KN: { name: "Saint Kitts and Nevis", native: "Saint Kitts and Nevis", phone: [1869], continent: "NA", capital: "Basseterre", currency: ["XCD"], languages: ["en"] }, KP: { name: "North Korea", native: "북한", phone: [850], continent: "AS", capital: "Pyongyang", currency: ["KPW"], languages: ["ko"] }, KR: { name: "South Korea", native: "대한민국", phone: [82], continent: "AS", capital: "Seoul", currency: ["KRW"], languages: ["ko"] }, KW: { name: "Kuwait", native: "الكويت", phone: [965], continent: "AS", capital: "Kuwait City", currency: ["KWD"], languages: ["ar"] }, KY: { name: "Cayman Islands", native: "Cayman Islands", phone: [1345], continent: "NA", capital: "George Town", currency: ["KYD"], languages: ["en"] }, KZ: { name: "Kazakhstan", native: "Қазақстан", phone: [7], continent: "AS", continents: ["AS", "EU"], capital: "Astana", currency: ["KZT"], languages: ["kk", "ru"] }, LA: { name: "Laos", native: "ສປປລາວ", phone: [856], continent: "AS", capital: "Vientiane", currency: ["LAK"], languages: ["lo"] }, LB: { name: "Lebanon", native: "لبنان", phone: [961], continent: "AS", capital: "Beirut", currency: ["LBP"], languages: ["ar", "fr"] }, LC: { name: "Saint Lucia", native: "Saint Lucia", phone: [1758], continent: "NA", capital: "Castries", currency: ["XCD"], languages: ["en"] }, LI: { name: "Liechtenstein", native: "Liechtenstein", phone: [423], continent: "EU", capital: "Vaduz", currency: ["CHF"], languages: ["de"] }, LK: { name: "Sri Lanka", native: "śrī laṃkāva", phone: [94], continent: "AS", capital: "Colombo", currency: ["LKR"], languages: ["si", "ta"] }, LR: { name: "Liberia", native: "Liberia", phone: [231], continent: "AF", capital: "Monrovia", currency: ["LRD"], languages: ["en"] }, LS: { name: "Lesotho", native: "Lesotho", phone: [266], continent: "AF", capital: "Maseru", currency: ["LSL", "ZAR"], languages: ["en", "st"] }, LT: { name: "Lithuania", native: "Lietuva", phone: [370], continent: "EU", capital: "Vilnius", currency: ["EUR"], languages: ["lt"] }, LU: { name: "Luxembourg", native: "Luxembourg", phone: [352], continent: "EU", capital: "Luxembourg", currency: ["EUR"], languages: ["fr", "de", "lb"] }, LV: { name: "Latvia", native: "Latvija", phone: [371], continent: "EU", capital: "Riga", currency: ["EUR"], languages: ["lv"] }, LY: { name: "Libya", native: "‏ليبيا", phone: [218], continent: "AF", capital: "Tripoli", currency: ["LYD"], languages: ["ar"] }, MA: { name: "Morocco", native: "المغرب", phone: [212], continent: "AF", capital: "Rabat", currency: ["MAD"], languages: ["ar"] }, MC: { name: "Monaco", native: "Monaco", phone: [377], continent: "EU", capital: "Monaco", currency: ["EUR"], languages: ["fr"] }, MD: { name: "Moldova", native: "Moldova", phone: [373], continent: "EU", capital: "Chișinău", currency: ["MDL"], languages: ["ro"] }, ME: { name: "Montenegro", native: "Црна Гора", phone: [382], continent: "EU", capital: "Podgorica", currency: ["EUR"], languages: ["sr", "bs", "sq", "hr"] }, MF: { name: "Saint Martin", native: "Saint-Martin", phone: [590], continent: "NA", capital: "Marigot", currency: ["EUR"], languages: ["en", "fr", "nl"] }, MG: { name: "Madagascar", native: "Madagasikara", phone: [261], continent: "AF", capital: "Antananarivo", currency: ["MGA"], languages: ["fr", "mg"] }, MH: { name: "Marshall Islands", native: "M̧ajeļ", phone: [692], continent: "OC", capital: "Majuro", currency: ["USD"], languages: ["en", "mh"] }, MK: { name: "North Macedonia", native: "Северна Македонија", phone: [389], continent: "EU", capital: "Skopje", currency: ["MKD"], languages: ["mk"] }, ML: { name: "Mali", native: "Mali", phone: [223], continent: "AF", capital: "Bamako", currency: ["XOF"], languages: ["fr"] }, MM: { name: "Myanmar (Burma)", native: "မြန်မာ", phone: [95], continent: "AS", capital: "Naypyidaw", currency: ["MMK"], languages: ["my"] }, MN: { name: "Mongolia", native: "Монгол улс", phone: [976], continent: "AS", capital: "Ulan Bator", currency: ["MNT"], languages: ["mn"] }, MO: { name: "Macao", native: "澳門", phone: [853], continent: "AS", capital: "", currency: ["MOP"], languages: ["zh", "pt"] }, MP: { name: "Northern Mariana Islands", native: "Northern Mariana Islands", phone: [1670], continent: "OC", capital: "Saipan", currency: ["USD"], languages: ["en", "ch"] }, MQ: { name: "Martinique", native: "Martinique", phone: [596], continent: "NA", capital: "Fort-de-France", currency: ["EUR"], languages: ["fr"] }, MR: { name: "Mauritania", native: "موريتانيا", phone: [222], continent: "AF", capital: "Nouakchott", currency: ["MRU"], languages: ["ar"] }, MS: { name: "Montserrat", native: "Montserrat", phone: [1664], continent: "NA", capital: "Plymouth", currency: ["XCD"], languages: ["en"] }, MT: { name: "Malta", native: "Malta", phone: [356], continent: "EU", capital: "Valletta", currency: ["EUR"], languages: ["mt", "en"] }, MU: { name: "Mauritius", native: "Maurice", phone: [230], continent: "AF", capital: "Port Louis", currency: ["MUR"], languages: ["en"] }, MV: { name: "Maldives", native: "Maldives", phone: [960], continent: "AS", capital: "Malé", currency: ["MVR"], languages: ["dv"] }, MW: { name: "Malawi", native: "Malawi", phone: [265], continent: "AF", capital: "Lilongwe", currency: ["MWK"], languages: ["en", "ny"] }, MX: { name: "Mexico", native: "México", phone: [52], continent: "NA", capital: "Mexico City", currency: ["MXN"], languages: ["es"] }, MY: { name: "Malaysia", native: "Malaysia", phone: [60], continent: "AS", capital: "Kuala Lumpur", currency: ["MYR"], languages: ["ms"] }, MZ: { name: "Mozambique", native: "Moçambique", phone: [258], continent: "AF", capital: "Maputo", currency: ["MZN"], languages: ["pt"] }, NA: { name: "Namibia", native: "Namibia", phone: [264], continent: "AF", capital: "Windhoek", currency: ["NAD", "ZAR"], languages: ["en", "af"] }, NC: { name: "New Caledonia", native: "Nouvelle-Calédonie", phone: [687], continent: "OC", capital: "Nouméa", currency: ["XPF"], languages: ["fr"] }, NE: { name: "Niger", native: "Niger", phone: [227], continent: "AF", capital: "Niamey", currency: ["XOF"], languages: ["fr"] }, NF: { name: "Norfolk Island", native: "Norfolk Island", phone: [672], continent: "OC", capital: "Kingston", currency: ["AUD"], languages: ["en"] }, NG: { name: "Nigeria", native: "Nigeria", phone: [234], continent: "AF", capital: "Abuja", currency: ["NGN"], languages: ["en"] }, NI: { name: "Nicaragua", native: "Nicaragua", phone: [505], continent: "NA", capital: "Managua", currency: ["NIO"], languages: ["es"] }, NL: { name: "Netherlands", native: "Nederland", phone: [31], continent: "EU", capital: "Amsterdam", currency: ["EUR"], languages: ["nl"] }, NO: { name: "Norway", native: "Norge", phone: [47], continent: "EU", capital: "Oslo", currency: ["NOK"], languages: ["no", "nb", "nn"] }, NP: { name: "Nepal", native: "नेपाल", phone: [977], continent: "AS", capital: "Kathmandu", currency: ["NPR"], languages: ["ne"] }, NR: { name: "Nauru", native: "Nauru", phone: [674], continent: "OC", capital: "Yaren", currency: ["AUD"], languages: ["en", "na"] }, NU: { name: "Niue", native: "Niuē", phone: [683], continent: "OC", capital: "Alofi", currency: ["NZD"], languages: ["en"] }, NZ: { name: "New Zealand", native: "New Zealand", phone: [64], continent: "OC", capital: "Wellington", currency: ["NZD"], languages: ["en", "mi"] }, OM: { name: "Oman", native: "عمان", phone: [968], continent: "AS", capital: "Muscat", currency: ["OMR"], languages: ["ar"] }, PA: { name: "Panama", native: "Panamá", phone: [507], continent: "NA", capital: "Panama City", currency: ["PAB", "USD"], languages: ["es"] }, PE: { name: "Peru", native: "Perú", phone: [51], continent: "SA", capital: "Lima", currency: ["PEN"], languages: ["es"] }, PF: { name: "French Polynesia", native: "Polynésie française", phone: [689], continent: "OC", capital: "Papeetē", currency: ["XPF"], languages: ["fr"] }, PG: { name: "Papua New Guinea", native: "Papua Niugini", phone: [675], continent: "OC", capital: "Port Moresby", currency: ["PGK"], languages: ["en"] }, PH: { name: "Philippines", native: "Pilipinas", phone: [63], continent: "AS", capital: "Manila", currency: ["PHP"], languages: ["en"] }, PK: { name: "Pakistan", native: "Pakistan", phone: [92], continent: "AS", capital: "Islamabad", currency: ["PKR"], languages: ["en", "ur"] }, PL: { name: "Poland", native: "Polska", phone: [48], continent: "EU", capital: "Warsaw", currency: ["PLN"], languages: ["pl"] }, PM: { name: "Saint Pierre and Miquelon", native: "Saint-Pierre-et-Miquelon", phone: [508], continent: "NA", capital: "Saint-Pierre", currency: ["EUR"], languages: ["fr"] }, PN: { name: "Pitcairn Islands", native: "Pitcairn Islands", phone: [64], continent: "OC", capital: "Adamstown", currency: ["NZD"], languages: ["en"] }, PR: { name: "Puerto Rico", native: "Puerto Rico", phone: [1787, 1939], continent: "NA", capital: "San Juan", currency: ["USD"], languages: ["es", "en"] }, PS: { name: "Palestine", native: "فلسطين", phone: [970], continent: "AS", capital: "Ramallah", currency: ["ILS"], languages: ["ar"] }, PT: { name: "Portugal", native: "Portugal", phone: [351], continent: "EU", capital: "Lisbon", currency: ["EUR"], languages: ["pt"] }, PW: { name: "Palau", native: "Palau", phone: [680], continent: "OC", capital: "Ngerulmud", currency: ["USD"], languages: ["en"] }, PY: { name: "Paraguay", native: "Paraguay", phone: [595], continent: "SA", capital: "Asunción", currency: ["PYG"], languages: ["es", "gn"] }, QA: { name: "Qatar", native: "قطر", phone: [974], continent: "AS", capital: "Doha", currency: ["QAR"], languages: ["ar"] }, RE: { name: "Reunion", native: "La Réunion", phone: [262], continent: "AF", capital: "Saint-Denis", currency: ["EUR"], languages: ["fr"] }, RO: { name: "Romania", native: "România", phone: [40], continent: "EU", capital: "Bucharest", currency: ["RON"], languages: ["ro"] }, RS: { name: "Serbia", native: "Србија", phone: [381], continent: "EU", capital: "Belgrade", currency: ["RSD"], languages: ["sr"] }, RU: { name: "Russia", native: "Россия", phone: [7], continent: "AS", continents: ["AS", "EU"], capital: "Moscow", currency: ["RUB"], languages: ["ru"] }, RW: { name: "Rwanda", native: "Rwanda", phone: [250], continent: "AF", capital: "Kigali", currency: ["RWF"], languages: ["rw", "en", "fr"] }, SA: { name: "Saudi Arabia", native: "العربية السعودية", phone: [966], continent: "AS", capital: "Riyadh", currency: ["SAR"], languages: ["ar"] }, SB: { name: "Solomon Islands", native: "Solomon Islands", phone: [677], continent: "OC", capital: "Honiara", currency: ["SBD"], languages: ["en"] }, SC: { name: "Seychelles", native: "Seychelles", phone: [248], continent: "AF", capital: "Victoria", currency: ["SCR"], languages: ["fr", "en"] }, SD: { name: "Sudan", native: "السودان", phone: [249], continent: "AF", capital: "Khartoum", currency: ["SDG"], languages: ["ar", "en"] }, SE: { name: "Sweden", native: "Sverige", phone: [46], continent: "EU", capital: "Stockholm", currency: ["SEK"], languages: ["sv"] }, SG: { name: "Singapore", native: "Singapore", phone: [65], continent: "AS", capital: "Singapore", currency: ["SGD"], languages: ["en", "ms", "ta", "zh"] }, SH: { name: "Saint Helena", native: "Saint Helena", phone: [290], continent: "AF", capital: "Jamestown", currency: ["SHP"], languages: ["en"] }, SI: { name: "Slovenia", native: "Slovenija", phone: [386], continent: "EU", capital: "Ljubljana", currency: ["EUR"], languages: ["sl"] }, SJ: { name: "Svalbard and Jan Mayen", native: "Svalbard og Jan Mayen", phone: [4779], continent: "EU", capital: "Longyearbyen", currency: ["NOK"], languages: ["no"] }, SK: { name: "Slovakia", native: "Slovensko", phone: [421], continent: "EU", capital: "Bratislava", currency: ["EUR"], languages: ["sk"] }, SL: { name: "Sierra Leone", native: "Sierra Leone", phone: [232], continent: "AF", capital: "Freetown", currency: ["SLL"], languages: ["en"] }, SM: { name: "San Marino", native: "San Marino", phone: [378], continent: "EU", capital: "City of San Marino", currency: ["EUR"], languages: ["it"] }, SN: { name: "Senegal", native: "Sénégal", phone: [221], continent: "AF", capital: "Dakar", currency: ["XOF"], languages: ["fr"] }, SO: { name: "Somalia", native: "Soomaaliya", phone: [252], continent: "AF", capital: "Mogadishu", currency: ["SOS"], languages: ["so", "ar"] }, SR: { name: "Suriname", native: "Suriname", phone: [597], continent: "SA", capital: "Paramaribo", currency: ["SRD"], languages: ["nl"] }, SS: { name: "South Sudan", native: "South Sudan", phone: [211], continent: "AF", capital: "Juba", currency: ["SSP"], languages: ["en"] }, ST: { name: "Sao Tome and Principe", native: "São Tomé e Príncipe", phone: [239], continent: "AF", capital: "São Tomé", currency: ["STN"], languages: ["pt"] }, SV: { name: "El Salvador", native: "El Salvador", phone: [503], continent: "NA", capital: "San Salvador", currency: ["SVC", "USD"], languages: ["es"] }, SX: { name: "Sint Maarten", native: "Sint Maarten", phone: [1721], continent: "NA", capital: "Philipsburg", currency: ["ANG"], languages: ["nl", "en"] }, SY: { name: "Syria", native: "سوريا", phone: [963], continent: "AS", capital: "Damascus", currency: ["SYP"], languages: ["ar"] }, SZ: { name: "Eswatini", native: "Eswatini", phone: [268], continent: "AF", capital: "Lobamba", currency: ["SZL"], languages: ["en", "ss"] }, TC: { name: "Turks and Caicos Islands", native: "Turks and Caicos Islands", phone: [1649], continent: "NA", capital: "Cockburn Town", currency: ["USD"], languages: ["en"] }, TD: { name: "Chad", native: "Tchad", phone: [235], continent: "AF", capital: "N'Djamena", currency: ["XAF"], languages: ["fr", "ar"] }, TF: { name: "French Southern Territories", native: "Territoire des Terres australes et antarctiques fr", phone: [262], continent: "AN", capital: "Port-aux-Français", currency: ["EUR"], languages: ["fr"] }, TG: { name: "Togo", native: "Togo", phone: [228], continent: "AF", capital: "Lomé", currency: ["XOF"], languages: ["fr"] }, TH: { name: "Thailand", native: "ประเทศไทย", phone: [66], continent: "AS", capital: "Bangkok", currency: ["THB"], languages: ["th"] }, TJ: { name: "Tajikistan", native: "Тоҷикистон", phone: [992], continent: "AS", capital: "Dushanbe", currency: ["TJS"], languages: ["tg", "ru"] }, TK: { name: "Tokelau", native: "Tokelau", phone: [690], continent: "OC", capital: "Fakaofo", currency: ["NZD"], languages: ["en"] }, TL: { name: "East Timor", native: "Timor-Leste", phone: [670], continent: "OC", capital: "Dili", currency: ["USD"], languages: ["pt"] }, TM: { name: "Turkmenistan", native: "Türkmenistan", phone: [993], continent: "AS", capital: "Ashgabat", currency: ["TMT"], languages: ["tk", "ru"] }, TN: { name: "Tunisia", native: "تونس", phone: [216], continent: "AF", capital: "Tunis", currency: ["TND"], languages: ["ar"] }, TO: { name: "Tonga", native: "Tonga", phone: [676], continent: "OC", capital: "Nuku'alofa", currency: ["TOP"], languages: ["en", "to"] }, TR: { name: "Turkey", native: "Türkiye", phone: [90], continent: "AS", continents: ["AS", "EU"], capital: "Ankara", currency: ["TRY"], languages: ["tr"] }, TT: { name: "Trinidad and Tobago", native: "Trinidad and Tobago", phone: [1868], continent: "NA", capital: "Port of Spain", currency: ["TTD"], languages: ["en"] }, TV: { name: "Tuvalu", native: "Tuvalu", phone: [688], continent: "OC", capital: "Funafuti", currency: ["AUD"], languages: ["en"] }, TW: { name: "Taiwan", native: "臺灣", phone: [886], continent: "AS", capital: "Taipei", currency: ["TWD"], languages: ["zh"] }, TZ: { name: "Tanzania", native: "Tanzania", phone: [255], continent: "AF", capital: "Dodoma", currency: ["TZS"], languages: ["sw", "en"] }, UA: { name: "Ukraine", native: "Україна", phone: [380], continent: "EU", capital: "Kyiv", currency: ["UAH"], languages: ["uk"] }, UG: { name: "Uganda", native: "Uganda", phone: [256], continent: "AF", capital: "Kampala", currency: ["UGX"], languages: ["en", "sw"] }, UM: { name: "U.S. Minor Outlying Islands", native: "United States Minor Outlying Islands", phone: [1], continent: "OC", capital: "", currency: ["USD"], languages: ["en"] }, US: { name: "United States", native: "United States", phone: [1], continent: "NA", capital: "Washington D.C.", currency: ["USD", "USN", "USS"], languages: ["en"] }, UY: { name: "Uruguay", native: "Uruguay", phone: [598], continent: "SA", capital: "Montevideo", currency: ["UYI", "UYU"], languages: ["es"] }, UZ: { name: "Uzbekistan", native: "O'zbekiston", phone: [998], continent: "AS", capital: "Tashkent", currency: ["UZS"], languages: ["uz", "ru"] }, VA: { name: "Vatican City", native: "Vaticano", phone: [379], continent: "EU", capital: "Vatican City", currency: ["EUR"], languages: ["it", "la"] }, VC: { name: "Saint Vincent and the Grenadines", native: "Saint Vincent and the Grenadines", phone: [1784], continent: "NA", capital: "Kingstown", currency: ["XCD"], languages: ["en"] }, VE: { name: "Venezuela", native: "Venezuela", phone: [58], continent: "SA", capital: "Caracas", currency: ["VES"], languages: ["es"] }, VG: { name: "British Virgin Islands", native: "British Virgin Islands", phone: [1284], continent: "NA", capital: "Road Town", currency: ["USD"], languages: ["en"] }, VI: { name: "U.S. Virgin Islands", native: "United States Virgin Islands", phone: [1340], continent: "NA", capital: "Charlotte Amalie", currency: ["USD"], languages: ["en"] }, VN: { name: "Vietnam", native: "Việt Nam", phone: [84], continent: "AS", capital: "Hanoi", currency: ["VND"], languages: ["vi"] }, VU: { name: "Vanuatu", native: "Vanuatu", phone: [678], continent: "OC", capital: "Port Vila", currency: ["VUV"], languages: ["bi", "en", "fr"] }, WF: { name: "Wallis and Futuna", native: "Wallis et Futuna", phone: [681], continent: "OC", capital: "Mata-Utu", currency: ["XPF"], languages: ["fr"] }, WS: { name: "Samoa", native: "Samoa", phone: [685], continent: "OC", capital: "Apia", currency: ["WST"], languages: ["sm", "en"] }, XK: { name: "Kosovo", native: "Republika e Kosovës", phone: [377, 381, 383, 386], continent: "EU", capital: "Pristina", currency: ["EUR"], languages: ["sq", "sr"], userAssigned: !0 }, YE: { name: "Yemen", native: "اليَمَن", phone: [967], continent: "AS", capital: "Sana'a", currency: ["YER"], languages: ["ar"] }, YT: { name: "Mayotte", native: "Mayotte", phone: [262], continent: "AF", capital: "Mamoudzou", currency: ["EUR"], languages: ["fr"] }, ZA: { name: "South Africa", native: "South Africa", phone: [27], continent: "AF", capital: "Pretoria", currency: ["ZAR"], languages: ["af", "en", "nr", "st", "ss", "tn", "ts", "ve", "xh", "zu"] }, ZM: { name: "Zambia", native: "Zambia", phone: [260], continent: "AF", capital: "Lusaka", currency: ["ZMW"], languages: ["en"] }, ZW: { name: "Zimbabwe", native: "Zimbabwe", phone: [263], continent: "AF", capital: "Harare", currency: ["USD", "ZAR", "BWP", "GBP", "AUD", "CNY", "INR", "JPY"], languages: ["en", "sn", "nd"] } }, xN = { AD: "AND", AE: "ARE", AF: "AFG", AG: "ATG", AI: "AIA", AL: "ALB", AM: "ARM", AO: "AGO", AQ: "ATA", AR: "ARG", AS: "ASM", AT: "AUT", AU: "AUS", AW: "ABW", AX: "ALA", AZ: "AZE", BA: "BIH", BB: "BRB", BD: "BGD", BE: "BEL", BF: "BFA", BG: "BGR", BH: "BHR", BI: "BDI", BJ: "BEN", BL: "BLM", BM: "BMU", BN: "BRN", BO: "BOL", BQ: "BES", BR: "BRA", BS: "BHS", BT: "BTN", BV: "BVT", BW: "BWA", BY: "BLR", BZ: "BLZ", CA: "CAN", CC: "CCK", CD: "COD", CF: "CAF", CG: "COG", CH: "CHE", CI: "CIV", CK: "COK", CL: "CHL", CM: "CMR", CN: "CHN", CO: "COL", CR: "CRI", CU: "CUB", CV: "CPV", CW: "CUW", CX: "CXR", CY: "CYP", CZ: "CZE", DE: "DEU", DJ: "DJI", DK: "DNK", DM: "DMA", DO: "DOM", DZ: "DZA", EC: "ECU", EE: "EST", EG: "EGY", EH: "ESH", ER: "ERI", ES: "ESP", ET: "ETH", FI: "FIN", FJ: "FJI", FK: "FLK", FM: "FSM", FO: "FRO", FR: "FRA", GA: "GAB", GB: "GBR", GD: "GRD", GE: "GEO", GF: "GUF", GG: "GGY", GH: "GHA", GI: "GIB", GL: "GRL", GM: "GMB", GN: "GIN", GP: "GLP", GQ: "GNQ", GR: "GRC", GS: "SGS", GT: "GTM", GU: "GUM", GW: "GNB", GY: "GUY", HK: "HKG", HM: "HMD", HN: "HND", HR: "HRV", HT: "HTI", HU: "HUN", ID: "IDN", IE: "IRL", IL: "ISR", IM: "IMN", IN: "IND", IO: "IOT", IQ: "IRQ", IR: "IRN", IS: "ISL", IT: "ITA", JE: "JEY", JM: "JAM", JO: "JOR", JP: "JPN", KE: "KEN", KG: "KGZ", KH: "KHM", KI: "KIR", KM: "COM", KN: "KNA", KP: "PRK", KR: "KOR", KW: "KWT", KY: "CYM", KZ: "KAZ", LA: "LAO", LB: "LBN", LC: "LCA", LI: "LIE", LK: "LKA", LR: "LBR", LS: "LSO", LT: "LTU", LU: "LUX", LV: "LVA", LY: "LBY", MA: "MAR", MC: "MCO", MD: "MDA", ME: "MNE", MF: "MAF", MG: "MDG", MH: "MHL", MK: "MKD", ML: "MLI", MM: "MMR", MN: "MNG", MO: "MAC", MP: "MNP", MQ: "MTQ", MR: "MRT", MS: "MSR", MT: "MLT", MU: "MUS", MV: "MDV", MW: "MWI", MX: "MEX", MY: "MYS", MZ: "MOZ", NA: "NAM", NC: "NCL", NE: "NER", NF: "NFK", NG: "NGA", NI: "NIC", NL: "NLD", NO: "NOR", NP: "NPL", NR: "NRU", NU: "NIU", NZ: "NZL", OM: "OMN", PA: "PAN", PE: "PER", PF: "PYF", PG: "PNG", PH: "PHL", PK: "PAK", PL: "POL", PM: "SPM", PN: "PCN", PR: "PRI", PS: "PSE", PT: "PRT", PW: "PLW", PY: "PRY", QA: "QAT", RE: "REU", RO: "ROU", RS: "SRB", RU: "RUS", RW: "RWA", SA: "SAU", SB: "SLB", SC: "SYC", SD: "SDN", SE: "SWE", SG: "SGP", SH: "SHN", SI: "SVN", SJ: "SJM", SK: "SVK", SL: "SLE", SM: "SMR", SN: "SEN", SO: "SOM", SR: "SUR", SS: "SSD", ST: "STP", SV: "SLV", SX: "SXM", SY: "SYR", SZ: "SWZ", TC: "TCA", TD: "TCD", TF: "ATF", TG: "TGO", TH: "THA", TJ: "TJK", TK: "TKL", TL: "TLS", TM: "TKM", TN: "TUN", TO: "TON", TR: "TUR", TT: "TTO", TV: "TUV", TW: "TWN", TZ: "TZA", UA: "UKR", UG: "UGA", UM: "UMI", US: "USA", UY: "URY", UZ: "UZB", VA: "VAT", VC: "VCT", VE: "VEN", VG: "VGB", VI: "VIR", VN: "VNM", VU: "VUT", WF: "WLF", WS: "WSM", XK: "XKX", YE: "YEM", YT: "MYT", ZA: "ZAF", ZM: "ZMB", ZW: "ZWE" }, bN = e => ({ ...$f[e], iso2: e, iso3: xN[e] }), SN = () => Object.keys($f).map(e => bN(e));
SN();
const Rs = $f, Sm = ({ prevelages: e }) => { const t = ye(), [n, r] = v.useState(!1), [o, i] = v.useState("owner"), [s, a] = v.useState({ last_name: "", first_name: "", email: "", remember_me: !1, position: "", country: "KE", password: "", phone: "", user_type: o, admin_email: "", admin_pass: "", prevelages: e }); v.useEffect(() => { a(p => ({ ...p, user_type: o })); }, [o]); const c = p => { i(p); }, u = p => { const w = p.target.name, m = p.target.value; a(w !== "remember_me" ? b => ({ ...b, [w]: m }) : b => ({ ...b, [w]: !b.remember_me })); }, d = () => { r(!n); }, f = async (p) => { p.preventDefault(); const w = "+" + Rs[s.country].phone + s.phone; let m = JSON.stringify({ ...s, phone: w, auth_with: "app" }), b = { method: "post", maxBodyLength: 1 / 0, url: `${dt}/user/signup`, headers: { "Content-Type": "application/json" }, data: m }; Q.request(b).then(x => { x.data.msg === "User Registered" ? t(`/${e}/login`, { replace: !0 }) : D.fire({ text: `${x.data.msg}`, showCloseButton: !0, showConfirmButton: !1, animation: !1, color: "#dc3545", padding: "5px" }); }).catch(x => { console.log(x), D.fire({ text: "Server Side Error", showCloseButton: !0, showConfirmButton: !1, animation: !1, color: "#dc3545", padding: "5px" }); }); }; return l.jsx("section", { className: "log-reg register land-pg col-12 auth-bd pt-5", children: l.jsx("div", { className: "overlay pb-120", children: l.jsxs("div", { className: "container", children: [l.jsx("div", { className: "top-head-area", children: l.jsxs("div", { className: "row align-items-center", children: [l.jsx("div", { className: "col-sm-5", children: l.jsxs(ge, { className: "back-home a-link", to: "/", children: [l.jsx("img", { src: yN, alt: "image" }), "Back Home"] }) }), l.jsx("div", { className: "col-sm-5", children: l.jsx(ge, { className: "a-link", to: "/", children: l.jsx("img", { src: hN, alt: "image", style: { width: "50px", height: "50px" } }) }) })] }) }), l.jsxs("div", { className: "row justify-content-center align-items-center", children: [l.jsx("div", { className: "d-none d-md-block col-md-5 ", children: l.jsx("div", { className: "img-area", children: l.jsx("img", { src: gN, alt: "image", style: { width: "100%", height: "auto" } }) }) }), l.jsx("div", { className: "col-11 col-lg-6 col-md-7 z-1 text-center bg-white px-3 px-sm-5 py-5 my-5 rounded", children: l.jsxs("div", { className: "form-box", children: [l.jsx("h4", { children: "Register with Easy Tech" }), l.jsxs("p", { className: "alr-acc dont-acc", children: ["Already have an account?", l.jsx(ge, { className: "a-link", to: `/${e}/login`, children: "Log in now." })] }), l.jsx("div", { className: "tab-content", children: l.jsxs("div", { className: "tab-pane fade show active", id: "personal", role: "tabpanel", "aria-labelledby": "personal-tab", children: [l.jsx("div", { className: "d-flex justify-content-center mb-3", children: l.jsxs("div", { className: "d-flex col-10 my-2 border px-0 rounded", children: [l.jsx("div", { className: `toggle-button col-6 py-2 rounded ${o === "owner" ? "active bg-primary" : "text-primary"}`, onClick: () => c("owner"), children: "Owner" }), l.jsx("div", { className: `toggle-button col-6 py-2 rounded ${o === "staff" ? "active bg-primary" : "text-primary"}`, onClick: () => c("staff"), children: "Staff" })] }) }), l.jsxs("form", { onSubmit: f, action: "#", children: [l.jsxs("div", { className: "row", children: [l.jsx("div", { className: "col-md-6", children: l.jsx("div", { className: "mb-3", children: l.jsx("input", { onChange: p => { u(p); }, required: !0, type: "text", name: "first_name", className: "form-control", placeholder: "First Name" }) }) }), l.jsx("div", { className: "col-md-6", children: l.jsx("div", { className: "mb-3", children: l.jsx("input", { onChange: p => { u(p); }, required: !0, type: "text", name: "last_name", className: "form-control", placeholder: "Last Name" }) }) })] }), l.jsx("div", { className: "mb-3", children: l.jsxs("select", { style: { width: "100%" }, onChange: u, name: "country", className: "form-control", defaultValue: "KE", children: [l.jsx("option", { value: "1", children: "Select Your Country" }), Object.keys(Rs).map((p, w) => l.jsx("option", { value: p, children: Rs[p].name }, p))] }) }), l.jsx("div", { className: "mb-3", children: l.jsxs("div", { className: "input-group", children: [l.jsxs("span", { className: "input-group-text", children: ["+", Rs[s.country].phone] }), l.jsx("input", { onChange: u, required: !0, type: "number", name: "phone", className: "form-control", placeholder: "Phone Number" })] }) }), l.jsx("div", { className: "mb-3", children: l.jsx("input", { onChange: u, required: !0, type: "email", name: "email", className: "form-control", placeholder: "Your Email" }) }), l.jsx("div", { className: "mb-3", children: l.jsx("input", { onChange: u, required: !0, type: "position", name: "position", className: "form-control", placeholder: "Your Position" }) }), l.jsx("div", { className: "mb-3", children: l.jsxs("div", { className: "input-group", children: [l.jsx("input", { onChange: u, required: !0, type: n ? "text" : "password", name: "password", className: "form-control", placeholder: "Your Password" }), l.jsx("span", { className: "input-group-text", onClick: d, children: l.jsx("img", { className: "showPass", src: mN, alt: "image" }) })] }) }), o === "staff" ? l.jsxs("div", { className: "bg-light p-3 mb-3", children: [l.jsx("h6", { className: "text-warning", children: "Owner details to have permission." }), l.jsx("div", { className: "mb-3", children: l.jsx("input", { onChange: u, required: !0, type: "admin_email", name: "admin_email", className: "form-control", placeholder: "Owner Email" }) }), l.jsx("div", { className: "", children: l.jsx("input", { onChange: u, required: !0, type: "password", name: "admin_pass", className: "form-control", placeholder: "Owner Password" }) })] }) : null, l.jsx("div", { className: "btn-area py-2", children: l.jsx("button", { type: "submit", className: "cmn-btn btn btn-primary col-10 ", children: "Register Now" }) })] }), l.jsx("div", { className: "privacy text-dark", children: l.jsxs("p", { children: ["By registering you accept our ", l.jsx(ge, { className: "a-link", to: "terms-conditions.html", children: "Terms & Conditions" }), " and ", l.jsx(ge, { className: "a-link", to: "privacy-policy.html", children: "Privacy Policy" })] }) })] }) })] }) })] })] }) }) }); }, CN = async (e) => await EN("user/submit-code", "patch", e), EN = async (e, t, n) => { let r = { method: t, maxBodyLength: 1 / 0, url: `${dt}/${e}`, headers: { "Content-Type": "application/json" }, data: n }; return await Q.request(r).then(o => o.data.success ? { success: !0, details: o.data.details } : (D.fire({ text: `${o.data.msg}`, showCloseButton: !0, showConfirmButton: !1, animation: !1, color: "#dc3545", padding: "5px" }), { success: !1, details: [] })).catch(o => { var i; return console.log(o), D.fire({ text: `${((i = o.response.data) == null ? void 0 : i.msg) || "Server Side Error"}`, showCloseButton: !0, showConfirmButton: !1, animation: !1, color: "#dc3545", padding: "0px 0px 10px 0px" }), { success: !1, details: [] }; }); }, AN = () => { var b, x, g; const e = Et(h => h.movieListDetails), [t, n] = v.useState(0), [r, o] = v.useState({ phone: "", password: "", confirm_password: "", code: "" }), [i, s] = v.useState(!1), [a, c] = v.useState(30), [u, d] = v.useState(!1), f = ye(); v.useEffect(() => { const h = setInterval(() => { n(y => (y + 1) % e.length); }, 5e3); return () => clearInterval(h); }, [e.length]), v.useEffect(() => { if (i)
    var h = setInterval(() => { c(y => y <= 1 ? (clearInterval(h), 0) : y - 1); }, 1e3); return () => clearInterval(h); }, [i]); const p = h => { const y = h.target.value, S = h.target.name; o(C => ({ ...C, [S]: y })); }, w = h => { h.preventDefault(), s(!1), d(!0); let y = JSON.stringify({ ...r, phone: "254" + r.phone }), S = { method: "POST", maxBodyLength: 1 / 0, url: `${dt}/user/forgot-password`, headers: { "Content-Type": "application/json" }, data: y }; Q.request(S).then(C => { if (console.log(C), C.data.success) {
    const { id: N, user_id: E } = C.data.details[0];
    o(P => ({ ...P, id: N, user_id: E })), s(!0);
} }).catch(C => { D.fire({ text: `Error: ${C.response.data.msg}`, showCloseButton: !0, showConfirmButton: !1, animation: !1, color: "#dc3545", padding: "5px" }); }).finally(() => { d(!1); }); }, m = () => { CN(JSON.stringify(r)).then(h => { h.success && f("/viewer/reset-pass", { state: { phone: r.phone } }); }); }; return l.jsx("div", { className: "row pl-0 ps-0 px-0 mx-0 col-12 col-sm-8 background", style: { backgroundImage: `url(${kf}${(b = e[t]) == null ? void 0 : b.backdrop_path})` }, children: l.jsxs("div", { className: "bg- d-fle  login-form h-100", children: [l.jsxs("h1", { className: "text-primary p-4", children: ["J", l.jsx("span", { className: "text-warning px-2", children: "A" }), "P"] }), l.jsxs("div", { className: " gap-5 d-flex form-title", children: [l.jsx("div", { className: "col-lg-4 col-xl-3 d-flex text-center px- px-sm-3 py-5", children: l.jsxs("div", { className: "form-bo text-light", children: [i ? l.jsxs(l.Fragment, { children: [l.jsx("h4", { children: "Enter Code" }), l.jsx("p", { className: "dont-acc ", children: "Code has been send to your phone." })] }) : l.jsxs(l.Fragment, { children: [l.jsx("h4", { children: "Reset Password" }), l.jsx("p", { className: "dont-acc ", children: "To reset your password, enter your phone number registered to JAP. Code will be sent to help you reset password." })] }), l.jsx("div", { className: " p-10 rounded", id: "myTabContent", style: { height: "100%" }, children: l.jsx("div", { className: "tab-pane fade p-10 show active", id: "admin", role: "tabpanel", "aria-labelledby": "admin-tab", children: l.jsxs("form", { onSubmit: w, action: "#", className: "mt-3", style: { height: "100%" }, children: [l.jsx("div", { className: "row h-100 ", children: i ? l.jsxs("div", { className: "mb-3", children: [l.jsx("label", { htmlFor: "code", className: "text-light text-start w-100", children: "Enter Code" }), l.jsx("div", { className: "input-group ", children: l.jsx("input", { onChange: p, required: !0, value: r.code, type: "number", name: "code", className: "form-control", placeholder: "000000" }) })] }) : l.jsxs("div", { className: "mb-3", children: [l.jsx("label", { htmlFor: "phone ", className: "text-light text-start w-100", children: "Your Phone Number" }), l.jsxs("div", { className: "input-group ", children: [l.jsx("span", { className: "input-group-text", children: "+254" }), l.jsx("input", { onChange: p, required: !0, value: r.phone, autoComplete: "off", type: "number", name: "phone", className: "form-control", placeholder: "714470000" })] }), l.jsx("div", { className: "form-text text-warning", id: "basic-addon4", children: "After +254, continue with 7... or 1.." })] }) }), l.jsx("div", { className: " my-3 text-start", children: i ? l.jsx("button", { type: "button", onClick: m, disabled: u, className: "btn btn-outline-primary", children: "Submit" }) : l.jsx("button", { type: "submit", disabled: u, className: "btn btn-outline-primary", children: u ? "Sending..." : "Send Code" }) }), i && (a === 0 ? l.jsx("div", { className: " d-flex gap-4 my-3 text-start", children: l.jsx("button", { type: "button", onClick: w, disabled: u, className: "btn btn-outline-success", children: " Resend Code" }) }) : l.jsx("div", { className: "remember-forgot d-flex justify-content-between pt-3", children: l.jsxs("p", { children: ["Resend the code in ", l.jsxs("span", { className: "text-success", children: [a, " sec"] })] }) })), l.jsx("div", { className: "remember-forgot d-flex justify-content-between pt-3", children: l.jsx("div", { className: "forget-pw", children: l.jsx(ge, { className: "a-link text-info", to: "/", children: "Back to Login" }) }) })] }) }) })] }) }), l.jsxs("div", { className: "d-flex justify-content-end flex-column text-end align-items-end w-100 text-light border-2", children: [l.jsx("h1", { className: "text-warning", children: (x = e[t]) == null ? void 0 : x.title }), l.jsx("p", { className: "text-info", children: (g = e[t]) == null ? void 0 : g.slug })] })] })] }) }); }, kN = () => { var d, f, p, w; const t = (d = Zt().state) == null ? void 0 : d.phone, [n, r] = v.useState({ phone: "254" + t, password: "", confirm_password: "" }), o = ye(), i = Et(m => m.movieListDetails), [s, a] = v.useState(0); v.useEffect(() => { const m = setInterval(() => { a(b => (b + 1) % i.length); }, 5e3); return () => clearInterval(m); }, [i.length]); const c = m => { const b = m.target.name, x = m.target.value; r(g => ({ ...g, [b]: x })); }, u = m => { m.preventDefault(); const { password: b, confirm_password: x } = n; if (b !== x) {
    D.fire({ text: "Password does not match", showCloseButton: !0, showConfirmButton: !1, animation: !1, color: "#dc3545", padding: "5px" });
    return;
} let g = JSON.stringify(n), h = { method: "PATCH", maxBodyLength: 1 / 0, url: `${dt}/user/reset-password`, headers: { "Content-Type": "application/json" }, data: g }; Q.request(h).then(y => { y.data.success && o("/", { replace: !0 }); }).catch(y => { console.log(y.response.data), r({ phone: "", password: "", confirm_password: "" }), D.fire({ text: `Error: ${y.response.data.msg}`, showCloseButton: !0, showConfirmButton: !1, animation: !1, color: "#dc3545", padding: "5px" }); }); }; return l.jsx("div", { className: "row pl-0 ps-0 px-0 mx-0 col-12 col-sm-8 background", style: { backgroundImage: `url(${kf}${(f = i[s]) == null ? void 0 : f.backdrop_path})` }, children: l.jsxs("div", { className: "bg- d-fle  login-form h-100", children: [l.jsxs("h1", { className: "text-primary p-4", children: ["J", l.jsx("span", { className: "text-warning px-2", children: "A" }), "P"] }), l.jsxs("div", { className: " gap-5 d-flex form-title", children: [l.jsx("div", { className: "col-lg-4 col-xl-3 d-flex text-center px- px-sm-3 py-5", children: l.jsxs("div", { className: "form-bo text-light", children: [l.jsx("h4", { children: "Reset Your Password" }), l.jsxs("p", { className: "dont-acc ", children: ["Reseting password for: ", t] }), l.jsxs("div", { className: " p-10 rounded", id: "myTabContent", style: { height: "100%" }, children: [l.jsx("div", { className: "tab-pane fade p-10 show active", id: "admin", role: "tabpanel", "aria-labelledby": "admin-tab", children: l.jsxs("form", { onSubmit: u, action: "#", children: [l.jsxs("div", { className: "row", children: [l.jsx("div", { className: "col-12 mb-3", children: l.jsxs("div", { className: "single-input align-items-center", children: [l.jsx("label", { htmlFor: "password", className: "text-light text-start w-100", children: "Password" }), l.jsx("input", { onChange: c, required: !0, id: "password", autoComplete: "off", name: "password", type: "password", className: "passInput form-control", placeholder: "Password" })] }) }), l.jsx("div", { className: "col-12 mb-3", children: l.jsxs("div", { className: "single-input align-items-center", children: [l.jsx("label", { htmlFor: "confirm_password", className: "text-light text-start w-100", children: "Confirm Password" }), l.jsx("input", { onChange: c, required: !0, name: "confirm_password", id: "confirm_password", type: "password", className: "passInput form-control", placeholder: "Confirm Password", autoComplete: "off" })] }) })] }), l.jsx("div", { className: "btn-area", children: l.jsx("button", { type: "submit", className: "cmn-btn btn btn-primary", children: "Reset Password" }) })] }) }), l.jsxs("p", { className: "back-login dont-acc text-start mt-3", children: ["Go back to ", l.jsx(ge, { to: "/login", children: "Login" })] })] })] }) }), l.jsxs("div", { className: "d-flex justify-content-end flex-column text-end align-items-end w-100 text-light border-2", children: [l.jsx("h1", { className: "text-warning", children: (p = i[s]) == null ? void 0 : p.title }), l.jsx("p", { className: "text-info", children: (w = i[s]) == null ? void 0 : w.slug })] })] })] }) }); }, NN = ({ oldPassword: e, newPassword: t, navigate: n, setIsloading: r, setIsLogin: o }) => { const i = sessionStorage.getItem("userToken"); if (i !== null)
    var s = JSON.parse(i);
else {
    D.fire({ title: "Token not Found", text: "Try to login Again then add the group.", icon: "warning" });
    return;
} let a = JSON.stringify({ oldPassword: e, newPassword: t }), c = { method: "PATCH", maxBodyLength: 1 / 0, url: `${dt}/user/change-pass`, headers: { "Content-Type": "application/json", Authorization: `Bear ${s}` }, data: a }; Q.request(c).then(u => { u.data.success ? D.fire({ title: "Success", text: `${u.data.msg}`, icon: "success" }).then(d => { n("/"), o(!1); }) : (D.fire({ title: "Failed", text: `${u.data.msg}`, icon: "warning" }), r(!1)); }).catch(u => { console.log(u), D.fire({ title: "Oooops...", text: "Server side error", icon: "warning" }), r(!1); }); }, PN = ({ setIsLogin: e }) => { const [t, n] = v.useState(""), [r, o] = v.useState(""), [i, s] = v.useState(""), [a, c] = v.useState(!1), u = ye(), d = m => { n(m.target.value); }, f = m => { o(m.target.value); }, p = m => { s(m.target.value); }, w = m => { m.preventDefault(), r !== i ? D.fire({ text: "New password does not match", showCloseButton: !0, showConfirmButton: !1, animation: !1, color: "#dc3545", padding: "5px" }) : (c(!0), NN({ oldPassword: t, newPassword: r, navigate: u, setIsloading: c, setIsLogin: e }), n(""), o(""), s("")); }; return l.jsx("div", { className: "body2 ", style: { paddingTop: "2rem", height: "100vh" }, children: l.jsx("section", { className: "upper-section bg-light px-2 px-sm-5 py-5 mb-5 h-100", children: l.jsxs("div", { className: "card", style: { borderTop: "2px solid rgb(71, 35, 217)" }, children: [l.jsxs("div", { className: "card-header d-flex justify-content-between border-bottom pb-1", children: [l.jsx("div", { className: "", children: "Change Password" }), l.jsx("div", { onClick: () => u(-1), className: "btn btn-info btn-sm", children: "Back" })] }), l.jsx("div", { className: "card-body", children: l.jsxs("form", { onSubmit: w, children: [l.jsxs("div", { className: "row", children: [l.jsxs("div", { className: "col-md-12 mt-3", children: [l.jsx("label", { htmlFor: "oldPassword", children: l.jsx("b", { children: "Old Password" }) }), l.jsx("input", { type: "password", id: "oldPassword", placeholder: "Enter Old password", className: "form-control", value: t, onChange: d })] }), l.jsxs("div", { className: "col-md-6 mt-3", children: [l.jsx("label", { htmlFor: "newPassword", children: l.jsx("b", { children: "New Password" }) }), l.jsx("input", { type: "password", id: "newPassword", placeholder: "Enter New Password", className: "form-control", value: r, onChange: f })] }), l.jsxs("div", { className: "col-6 mt-3", children: [l.jsx("label", { htmlFor: "confirmNewPassword", children: l.jsx("b", { children: "Confirm New Password" }) }), l.jsx("input", { type: "password", id: "confirmNewPassword", placeholder: "Enter Confirm New Password", className: "form-control", value: i, onChange: p })] })] }), l.jsx("div", { className: "d-flex mt-4", children: l.jsx("button", { type: "submit", disabled: a, className: "btn btn-primary btn-md d-flex gap-3 align-items-center", children: "Change Password" }) })] }) })] }) }) }); };
function Cm(e) { return de({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z" }, child: [] }] })(e); }
function Va(e) { return de({ tag: "svg", attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" }, child: [] }] })(e); }
function Em(e) { return de({ tag: "svg", attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" }, child: [] }] })(e); }
function jN(e) { return de({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm272 208c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm0-168c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm112 152c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z" }, child: [] }] })(e); }
function rw(e) { return de({ tag: "svg", attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" }, child: [] }] })(e); }
function RN(e) { return de({ tag: "svg", attr: { viewBox: "0 0 640 512" }, child: [{ tag: "path", attr: { d: "M608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM48 400v-64c35.35 0 64 28.65 64 64H48zm0-224v-64h64c0 35.35-28.65 64-64 64zm272 176c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 48h-64c0-35.35 28.65-64 64-64v64zm0-224c-35.35 0-64-28.65-64-64h64v64z" }, child: [] }] })(e); }
function _s(e) { return de({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" }, child: [] }] })(e); }
function _N(e) { return de({ tag: "svg", attr: { viewBox: "0 0 640 512" }, child: [{ tag: "path", attr: { d: "M592 0H48A48 48 0 0 0 0 48v320a48 48 0 0 0 48 48h240v32H112a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H352v-32h240a48 48 0 0 0 48-48V48a48 48 0 0 0-48-48zm-16 352H64V64h512z" }, child: [] }] })(e); }
function TN(e) { return de({ tag: "svg", attr: { viewBox: "0 0 640 512" }, child: [{ tag: "path", attr: { d: "M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" }, child: [] }] })(e); }
function ow(e) { return de({ tag: "svg", attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z" }, child: [] }] })(e); }
function ON(e) { return de({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M952 792H72c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h880c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-632H72c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h880c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM608 660c8.8 0 16-7.2 16-16V380c0-8.8-7.2-16-16-16H96c-8.8 0-16 7.2-16 16v264c0 8.8 7.2 16 16 16h512zM152 436h400v152H152V436zm552 210c0 4.4 3.6 8 8 8h224c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H712c-4.4 0-8 3.6-8 8v56zm8-204h224c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H712c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8z" }, child: [] }] })(e); }
function LN(e) { return de({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M8 7V11L2 6L8 1V5H13C17.4183 5 21 8.58172 21 13C21 17.4183 17.4183 21 13 21H4V19H13C16.3137 19 19 16.3137 19 13C19 9.68629 16.3137 7 13 7H8Z" }, child: [] }] })(e); }
function DN(e) { return de({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M21 4H7V6H21V4ZM21 11H11V13H21V11ZM21 18H7V20H21V18ZM8 17V7L3 11.9996L8 17Z" }, child: [] }] })(e); }
function MN(e) { return de({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M17 4H3V6H17V4ZM13 11H3V13H13V11ZM17 18H3V20H17V18ZM17 17V7L22 11.9996L17 17Z" }, child: [] }] })(e); }
const BN = () => {
    const e = v.useRef(null), t = Zt(), n = ye(), { movie: r, playVideo: o } = t.state, [i, s] = v.useState(!0), [a, c] = v.useState(!0), [u, d] = v.useState({ subtitles_url: "", video_url: "", backdrop_path: "", is_series: !1, episode_order: 0, season_order: 0, show_details: !1 }), f = v.useRef(null), p = () => { e.current && e.current.play().catch(x => { console.error("Autoplay failed:", x); }); }, w = x => { c(x); const g = e.current; g && (g.requestFullscreen ? g.requestFullscreen() : g.webkitRequestFullscreen ? g.webkitRequestFullscreen() : g.mozRequestFullScreen ? g.mozRequestFullScreen() : g.msRequestFullscreen && g.msRequestFullscreen()); }, m = () => { if (r.is_series) {
        const x = r.seasons.find(g => g.season_order === u.season_order);
        if (x) {
            const g = x.episodes.find(h => h.episode_order === u.episode_order + 1);
            if (g) {
                const { video_url: h, thumbnail_path: y, episode_order: S, subtitles_url: C } = g, N = { subtitles_url: C, video_url: h, backdrop_path: y, is_series: !0, season_order: u.season_order, episode_order: S, show_details: !1 };
                n(`/watch/${r.title}-${r.video_id}`, { state: { movie: r, playVideo: N } });
                return;
            }
        }
    } n("/"); };
    v.useEffect(() => { d(o); const x = e.current; return x && (x.addEventListener("canplay", p), x.addEventListener("ended", m)), () => { x && (x.removeEventListener("canplay", p), x.removeEventListener("ended", m)); }; }, [e, o, u, m]);
    const b = () => { n(`/watch/episodes-more/${r.video_id}`, { state: r }); };
    return l.jsxs("div", { className: "position-relative", style: { maxHeight: "", margin: "auto", textAlign: "center" }, children: [i ? l.jsx("div", { className: "  position-absolute top-0 left-0 bottom-0 player-banner", children: l.jsxs("div", { className: " h-100 d-flex d-md-block flex-column justify-content-between p-2 p-sm-3 p-md-5 col-12 col-md-5 ", children: [l.jsxs("div", { children: [l.jsx("h1", { className: "ms-4 text-warning", children: r == null ? void 0 : r.title }), l.jsx("h1", { className: "banner__description lead", children: r == null ? void 0 : r.description })] }), l.jsxs("div", { className: "banner-buttons d-flex mt-5 flex-column gap-4", children: [u.is_series ? l.jsxs(l.Fragment, { children: [l.jsxs("button", { onClick: () => w(!1), ref: f, className: `btn btn-outline-info w-100 \r
                d-flex align-items-center gap-2 justify-content-center text-center`, children: [l.jsx(_s, {}), " Resume S", u.season_order, ": EP.", u.episode_order] }), u.subtitles_url && l.jsxs("button", { onClick: () => w(!0), ref: f, className: `btn btn-outline-info w-100 \r
                  d-flex align-items-center gap-2 justify-content-center text-center`, children: [l.jsx(_s, {}), " Resume With Subtitles"] }), l.jsxs("button", { onClick: b, className: `btn btn-outline-info w-100 \r
                d-flex align-items-center gap-2 justify-content-center text-center`, children: [l.jsx(ON, {}), " Episodes & More"] })] }) : l.jsxs(l.Fragment, { children: [l.jsxs("button", { onClick: () => w(!1), ref: f, className: `btn btn-outline-info w-100 \r
                  d-flex align-items-center gap-2 justify-content-center text-center`, children: [l.jsx(_s, {}), " Play Full Screen"] }), u.subtitles_url ? l.jsxs("button", { onClick: () => w(!0), ref: f, className: `btn btn-outline-info w-100 \r
                    d-flex align-items-center gap-2 justify-content-center text-center`, children: [l.jsx(_s, {}), " Play with Subtitles"] }) : null] }), l.jsxs("button", { onClick: () => n("/viewer/dashboard"), className: `btn btn-outline-secondary w-100 \r
              d-flex align-items-center gap-2 justify-content-center text-center`, children: [l.jsx(LN, {}), " Back"] })] })] }) }) : null, l.jsxs("video", { ref: e, src: u.video_url, poster: u.backdrop_path, controls: !0, style: { width: "100%", height: "99vh", borderRadius: "8px" }, children: [l.jsx("source", { src: u.video_url }), a && l.jsx("track", { src: u == null ? void 0 : u.subtitles_url, kind: "subtitles", srcLang: "en", label: "English", default: !0 })] })] });
}, IN = ({ hoveredMovie: e, setHoveredMovie: t, isVideoReady: n, setIsVideoReady: r }) => { const [o, i] = v.useState(null), s = v.useRef(null), a = kn(), c = ye(), u = Et(p => p.movieListDetails), d = Et(p => p.seriesListDetails); v.useEffect(() => { if (e.is_series)
    d.length && e.movie_id && d.map((p, w) => { var m; if (p.video_id === e.movie_id) {
        const b = ((m = p.seasons[0]) == null ? void 0 : m.trailer_url) || "";
        i({ ...p, trailer_url: b });
    } });
else if (!e.is_series)
    if (u.length)
        if (e.movie_id)
            u.map((p, w) => { p.video_id === e.movie_id && i(p); });
        else {
            const p = u[Math.floor(Math.random() * u.length)];
            t({ movie_id: p.video_id, is_series: p.is_series });
        }
    else {
        const p = "", w = (e.is_series, "");
        is(w, p).then(m => { m.success && a(Bf(m.details)); });
    } }, [e, u]), v.useEffect(() => { const p = () => { s.current && s.current.play().catch(m => { r(!1), console.error("Autoplay failed:", m); }); }, w = () => { r(!1); }; return s.current && s.current.addEventListener("canplay", p), s.current && s.current.addEventListener("ended", w), () => { s.current && s.current.removeEventListener("canplay", p), s.current && s.current.removeEventListener("canplay", w); }; }, []); const f = () => { r(!0); }; return l.jsx("header", { className: "banner col-11 d-flex flex-column justify-content-between position-fixed top-0", children: l.jsxs("div", { className: "d-flex align-items-center col-12 position-relative", style: { backgroundColor: "#000" }, children: [l.jsxs("div", { className: "banner__contents ps-3  col-12 col-md-5 ", children: [l.jsx("h1", { className: "banner__title display-4", children: (o == null ? void 0 : o.title) || (o == null ? void 0 : o.name) || (o == null ? void 0 : o.original_name) }), l.jsx("div", { className: "banner__buttons ", children: o && l.jsx("button", { className: "banner__button", onClick: () => tw({ movie: o, navigate: c, clickCount: { count: 1, id: o.video_id } }), children: "Play" }) }), l.jsx("h1", { className: "banner__description display-6 text-start", children: o == null ? void 0 : o.description })] }), l.jsxs("div", { className: "col-12 col-md-7 position-relative ", style: { zIndex: 1 }, children: [!n && l.jsx("img", { src: `${Bo}/${o == null ? void 0 : o.backdrop_path}`, alt: "Movie Backdrop", style: { width: "100%", height: "340px", objectFit: "cover", objectPosition: "center" } }), l.jsx("video", { style: { objectFit: "cover", display: n ? "block" : "none" }, ref: s, src: o == null ? void 0 : o.trailer_url, height: "340px", width: "100%", onLoadedData: f }), l.jsx("div", { className: "position-absolute fade-right top-0 bottom-0 left-0" })] })] }) }); }, $N = () => { const [e, t] = v.useState(!1); return v.useEffect(() => { const n = () => { window.scrollY > 100 ? t(!0) : t(!1); }; return window.addEventListener("scroll", n), () => { window.removeEventListener("scroll", n); }; }, []), l.jsx("div", { className: `nav ${e ? "nav__black" : ""}`, children: l.jsxs("span", { className: "text-primary h1 p-0 m-0", children: ["J", l.jsx("span", { className: "text-warning px-2", children: "A" }), "P"] }) }); };
function FN(e) { return de({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2zm7.194 2.766a1.7 1.7 0 0 0-.227-.272 1.5 1.5 0 0 0-.469-.324l-.008-.004A1.8 1.8 0 0 0 5.734 4C4.776 4 4 4.746 4 5.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.5 2.5 0 0 0-.227-.4zM11 7.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.5 2.5 0 0 0-.228-.4 1.7 1.7 0 0 0-.227-.273 1.5 1.5 0 0 0-.469-.324l-.008-.004A1.8 1.8 0 0 0 10.07 4c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z" }, child: [] }] })(e); }
function UN(e) { return de({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: { id: "Logout" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { d: "M20.968,18.448a2.577,2.577,0,0,1-2.73,2.5c-2.153.012-4.306,0-6.459,0a.5.5,0,0,1,0-1c2.2,0,4.4.032,6.6,0,1.107-.016,1.589-.848,1.589-1.838V5.647A1.546,1.546,0,0,0,19,4.175a3.023,3.023,0,0,0-1.061-.095H11.779a.5.5,0,0,1,0-1c2.224,0,4.465-.085,6.687,0a2.567,2.567,0,0,1,2.5,2.67Z" }, child: [] }, { tag: "path", attr: { d: "M3.176,11.663a.455.455,0,0,0-.138.311c0,.015,0,.028-.006.043s0,.027.006.041a.457.457,0,0,0,.138.312l3.669,3.669a.5.5,0,0,0,.707-.707L4.737,12.516H15.479a.5.5,0,0,0,0-1H4.737L7.552,8.7a.5.5,0,0,0-.707-.707Z" }, child: [] }] }] }] })(e); }
function zN(e) {
    return de({ tag: "svg", attr: { version: "1.1", id: "search", x: "0px", y: "0px", viewBox: "0 0 24 24", style: "enable-background:new 0 0 24 24;" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { d: `M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		z` }, child: [] }] }] })(e);
}
const HN = [{ name: "Search", icon: l.jsx(zN, { size: 32 }), href: "/viewer/search-movie" }, { name: "Home", icon: l.jsx(rw, { size: 32 }), href: "/viewer/dashboard" }, { name: "Request Movie", icon: l.jsx(FN, { size: 32 }), href: "/viewer/request-movie" }], VN = () => {
    const e = ye(), [t, n] = v.useState({ link: "Home", isOpen: !1 }), [r, o] = v.useState(!1), [i, s] = v.useState("");
    v.useEffect(() => { const c = localStorage.getItem("viewer"); c ? s(JSON.parse(c)) : o(!0), r && e("/"); }, [r]);
    const a = () => { localStorage.clear(), localStorage.removeItem("viewerToken"), o(!0); };
    return l.jsxs("div", { style: { backgroundColor: "black " }, className: `${t.isOpen ? "col-9 col-md-3 " : "col-1 "} side-bar col-1 text-center h-100 
          pt-5 px-md-3  position-absolute top-0 left-0 `, children: [l.jsxs("div", { className: `${t.isOpen ? "text-start " : "text-center "} d-flex 
            ps-sm-2 ps-md-3 mb-4 mt-5 align-items-center`, children: [l.jsx("img", { style: { height: "30px" }, className: "", src: wN, alt: "netflix-avatar" }), t.isOpen && l.jsxs("div", { className: "", children: [l.jsx("h5", { className: "text-info ms-3 text-truncate", children: WN() }), l.jsx("h6", { className: "text-info ms-3 text-truncate", children: i == null ? void 0 : i.account2 })] })] }), l.jsx("div", { className: "d-flex  text-center text-warning ps-sm-2 ps-md-3", children: l.jsx(ge, { to: "#", className: "text-warning  border border-warning rounded px-1 py-sm-1 ps-sm-2 pe-sm-2 px-xxl-3", role: "button", onClick: () => n(c => ({ ...c, isOpen: !c.isOpen })), children: t.isOpen ? l.jsx(DN, { className: "fs-3 " }) : l.jsx(MN, { className: "fs-3 " }) }) }), l.jsxs("ul", { className: "list-unstyled pt-5", children: [HN.map((c, u) => l.jsx("li", { className: "mb-5 text-start ps-sm-2 ps-md-3", children: l.jsxs(ge, { to: c.href || "#", className: `${c.name === t.link ? "text-primary " : "text-white "}nav-link
                                     text-decoration-none fs-5 fw-bolder text-uppercase `, onClick: () => n({ link: c.name, isOpen: !1 }), children: [c.icon, t.isOpen && l.jsx("span", { className: "ms-4", children: c.name })] }) }, u)), l.jsx("li", { className: "mb-5 text-start ps-sm-2 ps-md-3", children: l.jsxs(ge, { to: "#", className: "nav-link text-light text-decoration-none fs-5 fw-bolder text-uppercase", onClick: a, children: [l.jsx(UN, { size: 32 }), t.isOpen && l.jsx("span", { className: "ms-4", children: "Log Out" })] }) }, "100")] })] });
};
function WN() { const e = new Date().getHours(); return e < 12 ? "Good Morning" : e < 18 ? "Good Afternoon" : "Good Evening"; }
const GN = () => { const [e, t] = v.useState({ movie_id: null, is_series: null }), [n, r] = v.useState(!1), [o, i] = v.useState("laptop"); ye(); const s = () => { const a = navigator.userAgent.toLowerCase(); return a.includes("mobile") ? "phone" : a.includes("tv") || a.includes("smart-tv") ? "tv" : "laptop"; }; return v.useEffect(() => { i(s()); }), l.jsxs("div", { className: "d-flex  ", children: [l.jsx(VN, {}), l.jsxs("div", { className: "App d-flex justify-content-end position-relative col-12 ", children: [l.jsx($N, {}), l.jsx(IN, { hoveredMovie: e, setHoveredMovie: t, isVideoReady: n, setIsVideoReady: r }), l.jsxs("div", { className: "col-11 ", children: [l.jsx("div", { className: "", style: { marginTop: "340px" } }), l.jsx(bm, { title: "Movies", type: "movies", fetchUrl: "videos/get-movies", isLargeRow: !0, setHoveredMovie: t, setIsVideoReady: r, theDevice: o }), l.jsx(bm, { title: "Series", type: "series", fetchUrl: "videos/get-series", isLargeRow: !0, setHoveredMovie: t, setIsVideoReady: r, theDevice: o })] })] })] }); }, qN = () => l.jsx("div", { className: "bg-white w-100 pt-5", children: l.jsx("h1", { children: "Coming Soon ..." }) }), KN = () => { const e = Zt(), t = ye(), n = e.state, r = v.useRef([]), o = (s, a) => { const { description: c, is_series: u } = n, { thumbnail_path: d, video_url: f, episode_order: p, subtitles_url: w } = s, m = { backdrop_path: d, description: c, is_series: u, video_url: f, episode_order: p, season_order: a, show_details: !1, subtitles_url: w }; t(`/watch/${n.title}-${n.video_id}`, { state: { movie: n, playVideo: m } }); }, i = s => { var a; r.current[s] && ((a = r.current[s]) == null || a.scrollIntoView({ behavior: "smooth", block: "start" })); }; return l.jsxs("div", { className: "d-flex flex-column flex-md-row text-light justify-content-between ", style: { minHeight: "100vh" }, children: [l.jsxs("div", { className: "px-5 pt-3 p-md-5 col-12 col-md-4 ", children: [l.jsxs("div", { className: "mb-md-5", children: [l.jsx("h1", { className: "h1 text-uppercase font-monospace ", children: n.title }), l.jsxs("h6", { className: "", children: [n.release_date, " . ", n.seasons.length, " Seasons"] })] }), l.jsx("div", { className: "d-none d-md-block", children: n.seasons.map((s, a) => l.jsxs("button", { className: "btn btn-outline-light w-100 d-flex gap-4 mb-4 justify-content-between", onClick: () => i(a), children: [l.jsx("span", { children: s.season_name }), l.jsxs("span", { children: [s.episodes.length, " episodes"] })] }, a)) })] }), l.jsx("div", { className: "col-12 col-md-8 py-2 py-md-5 px-2 episodes", children: n.seasons.map((s, a) => l.jsxs("div", { ref: c => r.current[a] = c, children: [l.jsx("h4", { className: "display-1 ", children: s.season_name }), s.episodes.map((c, u) => l.jsxs("div", { role: "button", onClick: () => o(c, s.season_order), className: "d-flex flex-column flex-md-row gap-4 align-items-center mb-4", children: [l.jsx("div", { className: "col-10 col-md-4", children: l.jsx("img", { style: { backgroundSize: "objectFit" }, src: `${Bo}/${c.thumbnail_path || n.backdrop_path}`, alt: "Thumbnail", className: "w-100 h-100" }) }), l.jsxs("div", { className: "px-2 ", children: [l.jsxs("h3", { children: [c.episode_name, " (Episode ", c.episode_order, ")"] }), l.jsx("h6", { className: "", children: c.overview }), l.jsxs("h6", { children: ["(", c.runtime, "m)"] })] })] }, a + u))] }, a)) })] }); };
var Ge = function () { return Ge = Object.assign || function (t) { for (var n, r = 1, o = arguments.length; r < o; r++) {
    n = arguments[r];
    for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
} return t; }, Ge.apply(this, arguments); };
function Wa(e, t, n) { if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
        (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]); return e.concat(i || Array.prototype.slice.call(t)); }
var le = "-ms-", fi = "-moz-", te = "-webkit-", iw = "comm", _l = "rule", Ff = "decl", YN = "@import", sw = "@keyframes", QN = "@layer", aw = Math.abs, Uf = String.fromCharCode, id = Object.assign;
function JN(e, t) { return Te(e, 0) ^ 45 ? (((t << 2 ^ Te(e, 0)) << 2 ^ Te(e, 1)) << 2 ^ Te(e, 2)) << 2 ^ Te(e, 3) : 0; }
function lw(e) { return e.trim(); }
function hn(e, t) { return (e = t.exec(e)) ? e[0] : e; }
function H(e, t, n) { return e.replace(t, n); }
function Js(e, t, n) { return e.indexOf(t, n); }
function Te(e, t) { return e.charCodeAt(t) | 0; }
function So(e, t, n) { return e.slice(t, n); }
function on(e) { return e.length; }
function cw(e) { return e.length; }
function ni(e, t) { return t.push(e), e; }
function ZN(e, t) { return e.map(t).join(""); }
function Am(e, t) { return e.filter(function (n) { return !hn(n, t); }); }
var Tl = 1, Co = 1, uw = 0, Ft = 0, Ce = 0, Io = "";
function Ol(e, t, n, r, o, i, s, a) { return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Tl, column: Co, length: s, return: "", siblings: a }; }
function _n(e, t) { return id(Ol("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t); }
function Hr(e) { for (; e.root;)
    e = _n(e.root, { children: [e] }); ni(e, e.siblings); }
function XN() { return Ce; }
function e5() { return Ce = Ft > 0 ? Te(Io, --Ft) : 0, Co--, Ce === 10 && (Co = 1, Tl--), Ce; }
function Qt() { return Ce = Ft < uw ? Te(Io, Ft++) : 0, Co++, Ce === 10 && (Co = 1, Tl++), Ce; }
function xr() { return Te(Io, Ft); }
function Zs() { return Ft; }
function Ll(e, t) { return So(Io, e, t); }
function sd(e) { switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32: return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125: return 4;
    case 58: return 3;
    case 34:
    case 39:
    case 40:
    case 91: return 2;
    case 41:
    case 93: return 1;
} return 0; }
function t5(e) { return Tl = Co = 1, uw = on(Io = e), Ft = 0, []; }
function n5(e) { return Io = "", e; }
function Pc(e) { return lw(Ll(Ft - 1, ad(e === 91 ? e + 2 : e === 40 ? e + 1 : e))); }
function r5(e) { for (; (Ce = xr()) && Ce < 33;)
    Qt(); return sd(e) > 2 || sd(Ce) > 3 ? "" : " "; }
function o5(e, t) { for (; --t && Qt() && !(Ce < 48 || Ce > 102 || Ce > 57 && Ce < 65 || Ce > 70 && Ce < 97);)
    ; return Ll(e, Zs() + (t < 6 && xr() == 32 && Qt() == 32)); }
function ad(e) { for (; Qt();)
    switch (Ce) {
        case e: return Ft;
        case 34:
        case 39:
            e !== 34 && e !== 39 && ad(Ce);
            break;
        case 40:
            e === 41 && ad(e);
            break;
        case 92:
            Qt();
            break;
    } return Ft; }
function i5(e, t) { for (; Qt() && e + Ce !== 57;)
    if (e + Ce === 84 && xr() === 47)
        break; return "/*" + Ll(t, Ft - 1) + "*" + Uf(e === 47 ? e : Qt()); }
function s5(e) { for (; !sd(xr());)
    Qt(); return Ll(e, Ft); }
function a5(e) { return n5(Xs("", null, null, null, [""], e = t5(e), 0, [0], e)); }
function Xs(e, t, n, r, o, i, s, a, c) { for (var u = 0, d = 0, f = s, p = 0, w = 0, m = 0, b = 1, x = 1, g = 1, h = 0, y = "", S = o, C = i, N = r, E = y; x;)
    switch (m = h, h = Qt()) {
        case 40: if (m != 108 && Te(E, f - 1) == 58) {
            Js(E += H(Pc(h), "&", "&\f"), "&\f", aw(u ? a[u - 1] : 0)) != -1 && (g = -1);
            break;
        }
        case 34:
        case 39:
        case 91:
            E += Pc(h);
            break;
        case 9:
        case 10:
        case 13:
        case 32:
            E += r5(m);
            break;
        case 92:
            E += o5(Zs() - 1, 7);
            continue;
        case 47:
            switch (xr()) {
                case 42:
                case 47:
                    ni(l5(i5(Qt(), Zs()), t, n, c), c);
                    break;
                default: E += "/";
            }
            break;
        case 123 * b: a[u++] = on(E) * g;
        case 125 * b:
        case 59:
        case 0:
            switch (h) {
                case 0:
                case 125: x = 0;
                case 59 + d:
                    g == -1 && (E = H(E, /\f/g, "")), w > 0 && on(E) - f && ni(w > 32 ? Nm(E + ";", r, n, f - 1, c) : Nm(H(E, " ", "") + ";", r, n, f - 2, c), c);
                    break;
                case 59: E += ";";
                default: if (ni(N = km(E, t, n, u, d, o, a, y, S = [], C = [], f, i), i), h === 123)
                    if (d === 0)
                        Xs(E, t, N, N, S, i, f, a, C);
                    else
                        switch (p === 99 && Te(E, 3) === 110 ? 100 : p) {
                            case 100:
                            case 108:
                            case 109:
                            case 115:
                                Xs(e, N, N, r && ni(km(e, N, N, 0, 0, o, a, y, o, S = [], f, C), C), o, C, f, a, r ? S : C);
                                break;
                            default: Xs(E, N, N, N, [""], C, 0, a, C);
                        }
            }
            u = d = w = 0, b = g = 1, y = E = "", f = s;
            break;
        case 58: f = 1 + on(E), w = m;
        default:
            if (b < 1) {
                if (h == 123)
                    --b;
                else if (h == 125 && b++ == 0 && e5() == 125)
                    continue;
            }
            switch (E += Uf(h), h * b) {
                case 38:
                    g = d > 0 ? 1 : (E += "\f", -1);
                    break;
                case 44:
                    a[u++] = (on(E) - 1) * g, g = 1;
                    break;
                case 64:
                    xr() === 45 && (E += Pc(Qt())), p = xr(), d = f = on(y = E += s5(Zs())), h++;
                    break;
                case 45: m === 45 && on(E) == 2 && (b = 0);
            }
    } return i; }
function km(e, t, n, r, o, i, s, a, c, u, d, f) { for (var p = o - 1, w = o === 0 ? i : [""], m = cw(w), b = 0, x = 0, g = 0; b < r; ++b)
    for (var h = 0, y = So(e, p + 1, p = aw(x = s[b])), S = e; h < m; ++h)
        (S = lw(x > 0 ? w[h] + " " + y : H(y, /&\f/g, w[h]))) && (c[g++] = S); return Ol(e, t, n, o === 0 ? _l : a, c, u, d, f); }
function l5(e, t, n, r) { return Ol(e, t, n, iw, Uf(XN()), So(e, 2, -2), 0, r); }
function Nm(e, t, n, r, o) { return Ol(e, t, n, Ff, So(e, 0, r), So(e, r + 1, -1), r, o); }
function dw(e, t, n) { switch (JN(e, t)) {
    case 5103: return te + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829: return te + e + e;
    case 4789: return fi + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756: return te + e + fi + e + le + e + e;
    case 5936: switch (Te(e, t + 11)) {
        case 114: return te + e + le + H(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108: return te + e + le + H(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45: return te + e + le + H(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
    }
    case 6828:
    case 4268:
    case 2903: return te + e + le + e + e;
    case 6165: return te + e + le + "flex-" + e + e;
    case 5187: return te + e + H(e, /(\w+).+(:[^]+)/, te + "box-$1$2" + le + "flex-$1$2") + e;
    case 5443: return te + e + le + "flex-item-" + H(e, /flex-|-self/g, "") + (hn(e, /flex-|baseline/) ? "" : le + "grid-row-" + H(e, /flex-|-self/g, "")) + e;
    case 4675: return te + e + le + "flex-line-pack" + H(e, /align-content|flex-|-self/g, "") + e;
    case 5548: return te + e + le + H(e, "shrink", "negative") + e;
    case 5292: return te + e + le + H(e, "basis", "preferred-size") + e;
    case 6060: return te + "box-" + H(e, "-grow", "") + te + e + le + H(e, "grow", "positive") + e;
    case 4554: return te + H(e, /([^-])(transform)/g, "$1" + te + "$2") + e;
    case 6187: return H(H(H(e, /(zoom-|grab)/, te + "$1"), /(image-set)/, te + "$1"), e, "") + e;
    case 5495:
    case 3959: return H(e, /(image-set\([^]*)/, te + "$1$`$1");
    case 4968: return H(H(e, /(.+:)(flex-)?(.*)/, te + "box-pack:$3" + le + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + te + e + e;
    case 4200:
        if (!hn(e, /flex-|baseline/))
            return le + "grid-column-align" + So(e, t) + e;
        break;
    case 2592:
    case 3360: return le + H(e, "template-", "") + e;
    case 4384:
    case 3616: return n && n.some(function (r, o) { return t = o, hn(r.props, /grid-\w+-end/); }) ? ~Js(e + (n = n[t].value), "span", 0) ? e : le + H(e, "-start", "") + e + le + "grid-row-span:" + (~Js(n, "span", 0) ? hn(n, /\d+/) : +hn(n, /\d+/) - +hn(e, /\d+/)) + ";" : le + H(e, "-start", "") + e;
    case 4896:
    case 4128: return n && n.some(function (r) { return hn(r.props, /grid-\w+-start/); }) ? e : le + H(H(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532: return H(e, /(.+)-inline(.+)/, te + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
        if (on(e) - 1 - t > 6)
            switch (Te(e, t + 1)) {
                case 109: if (Te(e, t + 4) !== 45)
                    break;
                case 102: return H(e, /(.+:)(.+)-([^]+)/, "$1" + te + "$2-$3$1" + fi + (Te(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
                case 115: return ~Js(e, "stretch", 0) ? dw(H(e, "stretch", "fill-available"), t, n) + e : e;
            }
        break;
    case 5152:
    case 5920: return H(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (r, o, i, s, a, c, u) { return le + o + ":" + i + u + (s ? le + o + "-span:" + (a ? c : +c - +i) + u : "") + e; });
    case 4949:
        if (Te(e, t + 6) === 121)
            return H(e, ":", ":" + te) + e;
        break;
    case 6444:
        switch (Te(e, Te(e, 14) === 45 ? 18 : 11)) {
            case 120: return H(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + te + (Te(e, 14) === 45 ? "inline-" : "") + "box$3$1" + te + "$2$3$1" + le + "$2box$3") + e;
            case 100: return H(e, ":", ":" + le) + e;
        }
        break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391: return H(e, "scroll-", "scroll-snap-") + e;
} return e; }
function Ga(e, t) { for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || ""; return n; }
function c5(e, t, n, r) { switch (e.type) {
    case QN: if (e.children.length)
        break;
    case YN:
    case Ff: return e.return = e.return || e.value;
    case iw: return "";
    case sw: return e.return = e.value + "{" + Ga(e.children, r) + "}";
    case _l: if (!on(e.value = e.props.join(",")))
        return "";
} return on(n = Ga(e.children, r)) ? e.return = e.value + "{" + n + "}" : ""; }
function u5(e) { var t = cw(e); return function (n, r, o, i) { for (var s = "", a = 0; a < t; a++)
    s += e[a](n, r, o, i) || ""; return s; }; }
function d5(e) { return function (t) { t.root || (t = t.return) && e(t); }; }
function f5(e, t, n, r) { if (e.length > -1 && !e.return)
    switch (e.type) {
        case Ff:
            e.return = dw(e.value, e.length, n);
            return;
        case sw: return Ga([_n(e, { value: H(e.value, "@", "@" + te) })], r);
        case _l: if (e.length)
            return ZN(n = e.props, function (o) { switch (hn(o, r = /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                    Hr(_n(e, { props: [H(o, /:(read-\w+)/, ":" + fi + "$1")] })), Hr(_n(e, { props: [o] })), id(e, { props: Am(n, r) });
                    break;
                case "::placeholder":
                    Hr(_n(e, { props: [H(o, /:(plac\w+)/, ":" + te + "input-$1")] })), Hr(_n(e, { props: [H(o, /:(plac\w+)/, ":" + fi + "$1")] })), Hr(_n(e, { props: [H(o, /:(plac\w+)/, le + "input-$1")] })), Hr(_n(e, { props: [o] })), id(e, { props: Am(n, r) });
                    break;
            } return ""; });
    } }
var p5 = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, gt = {}, Eo = typeof process < "u" && gt !== void 0 && (gt.REACT_APP_SC_ATTR || gt.SC_ATTR) || "data-styled", fw = "active", pw = "data-styled-version", Dl = "6.1.13", zf = `/*!sc*/
`, qa = typeof window < "u" && "HTMLElement" in window, h5 = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && gt !== void 0 && gt.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && gt.REACT_APP_SC_DISABLE_SPEEDY !== "" ? gt.REACT_APP_SC_DISABLE_SPEEDY !== "false" && gt.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && gt !== void 0 && gt.SC_DISABLE_SPEEDY !== void 0 && gt.SC_DISABLE_SPEEDY !== "" && gt.SC_DISABLE_SPEEDY !== "false" && gt.SC_DISABLE_SPEEDY), Ml = Object.freeze([]), Ao = Object.freeze({});
function m5(e, t, n) { return n === void 0 && (n = Ao), e.theme !== n.theme && e.theme || t || n.theme; }
var hw = new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), g5 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, y5 = /(^-|-$)/g;
function Pm(e) { return e.replace(g5, "-").replace(y5, ""); }
var v5 = /(a)(d)/gi, Ts = 52, jm = function (e) { return String.fromCharCode(e + (e > 25 ? 39 : 97)); };
function ld(e) { var t, n = ""; for (t = Math.abs(e); t > Ts; t = t / Ts | 0)
    n = jm(t % Ts) + n; return (jm(t % Ts) + n).replace(v5, "$1-$2"); }
var jc, mw = 5381, no = function (e, t) { for (var n = t.length; n;)
    e = 33 * e ^ t.charCodeAt(--n); return e; }, gw = function (e) { return no(mw, e); };
function w5(e) { return ld(gw(e) >>> 0); }
function x5(e) { return e.displayName || e.name || "Component"; }
function Rc(e) { return typeof e == "string" && !0; }
var yw = typeof Symbol == "function" && Symbol.for, vw = yw ? Symbol.for("react.memo") : 60115, b5 = yw ? Symbol.for("react.forward_ref") : 60112, S5 = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, C5 = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, ww = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, E5 = ((jc = {})[b5] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, jc[vw] = ww, jc);
function Rm(e) { return ("type" in (t = e) && t.type.$$typeof) === vw ? ww : "$$typeof" in e ? E5[e.$$typeof] : S5; var t; }
var A5 = Object.defineProperty, k5 = Object.getOwnPropertyNames, _m = Object.getOwnPropertySymbols, N5 = Object.getOwnPropertyDescriptor, P5 = Object.getPrototypeOf, Tm = Object.prototype;
function xw(e, t, n) { if (typeof t != "string") {
    if (Tm) {
        var r = P5(t);
        r && r !== Tm && xw(e, r, n);
    }
    var o = k5(t);
    _m && (o = o.concat(_m(t)));
    for (var i = Rm(e), s = Rm(t), a = 0; a < o.length; ++a) {
        var c = o[a];
        if (!(c in C5 || n && n[c] || s && c in s || i && c in i)) {
            var u = N5(t, c);
            try {
                A5(e, c, u);
            }
            catch { }
        }
    }
} return e; }
function _r(e) { return typeof e == "function"; }
function Hf(e) { return typeof e == "object" && "styledComponentId" in e; }
function mr(e, t) { return e && t ? "".concat(e, " ").concat(t) : e || t || ""; }
function Om(e, t) { if (e.length === 0)
    return ""; for (var n = e[0], r = 1; r < e.length; r++)
    n += e[r]; return n; }
function Ui(e) { return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof); }
function cd(e, t, n) { if (n === void 0 && (n = !1), !n && !Ui(e) && !Array.isArray(e))
    return t; if (Array.isArray(t))
    for (var r = 0; r < t.length; r++)
        e[r] = cd(e[r], t[r]);
else if (Ui(t))
    for (var r in t)
        e[r] = cd(e[r], t[r]); return e; }
function Vf(e, t) { Object.defineProperty(e, "toString", { value: t }); }
function Tr(e) { for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n]; return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")); }
var j5 = function () { function e(t) { this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t; } return e.prototype.indexOfGroup = function (t) { for (var n = 0, r = 0; r < t; r++)
    n += this.groupSizes[r]; return n; }, e.prototype.insertRules = function (t, n) { if (t >= this.groupSizes.length) {
    for (var r = this.groupSizes, o = r.length, i = o; t >= i;)
        if ((i <<= 1) < 0)
            throw Tr(16, "".concat(t));
    this.groupSizes = new Uint32Array(i), this.groupSizes.set(r), this.length = i;
    for (var s = o; s < i; s++)
        this.groupSizes[s] = 0;
} for (var a = this.indexOfGroup(t + 1), c = (s = 0, n.length); s < c; s++)
    this.tag.insertRule(a, n[s]) && (this.groupSizes[t]++, a++); }, e.prototype.clearGroup = function (t) { if (t < this.length) {
    var n = this.groupSizes[t], r = this.indexOfGroup(t), o = r + n;
    this.groupSizes[t] = 0;
    for (var i = r; i < o; i++)
        this.tag.deleteRule(r);
} }, e.prototype.getGroup = function (t) { var n = ""; if (t >= this.length || this.groupSizes[t] === 0)
    return n; for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, s = o; s < i; s++)
    n += "".concat(this.tag.getRule(s)).concat(zf); return n; }, e; }(), ea = new Map, Ka = new Map, ta = 1, Os = function (e) { if (ea.has(e))
    return ea.get(e); for (; Ka.has(ta);)
    ta++; var t = ta++; return ea.set(e, t), Ka.set(t, e), t; }, R5 = function (e, t) { ta = t + 1, ea.set(e, t), Ka.set(t, e); }, _5 = "style[".concat(Eo, "][").concat(pw, '="').concat(Dl, '"]'), T5 = new RegExp("^".concat(Eo, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), O5 = function (e, t, n) { for (var r, o = n.split(","), i = 0, s = o.length; i < s; i++)
    (r = o[i]) && e.registerName(t, r); }, L5 = function (e, t) { for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(zf), o = [], i = 0, s = r.length; i < s; i++) {
    var a = r[i].trim();
    if (a) {
        var c = a.match(T5);
        if (c) {
            var u = 0 | parseInt(c[1], 10), d = c[2];
            u !== 0 && (R5(d, u), O5(e, d, c[3]), e.getTag().insertRules(u, o)), o.length = 0;
        }
        else
            o.push(a);
    }
} }, Lm = function (e) { for (var t = document.querySelectorAll(_5), n = 0, r = t.length; n < r; n++) {
    var o = t[n];
    o && o.getAttribute(Eo) !== fw && (L5(e, o), o.parentNode && o.parentNode.removeChild(o));
} };
function D5() { return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null; }
var bw = function (e) { var t = document.head, n = e || t, r = document.createElement("style"), o = function (a) { var c = Array.from(a.querySelectorAll("style[".concat(Eo, "]"))); return c[c.length - 1]; }(n), i = o !== void 0 ? o.nextSibling : null; r.setAttribute(Eo, fw), r.setAttribute(pw, Dl); var s = D5(); return s && r.setAttribute("nonce", s), n.insertBefore(r, i), r; }, M5 = function () { function e(t) { this.element = bw(t), this.element.appendChild(document.createTextNode("")), this.sheet = function (n) { if (n.sheet)
    return n.sheet; for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
    var s = r[o];
    if (s.ownerNode === n)
        return s;
} throw Tr(17); }(this.element), this.length = 0; } return e.prototype.insertRule = function (t, n) { try {
    return this.sheet.insertRule(n, t), this.length++, !0;
}
catch {
    return !1;
} }, e.prototype.deleteRule = function (t) { this.sheet.deleteRule(t), this.length--; }, e.prototype.getRule = function (t) { var n = this.sheet.cssRules[t]; return n && n.cssText ? n.cssText : ""; }, e; }(), B5 = function () { function e(t) { this.element = bw(t), this.nodes = this.element.childNodes, this.length = 0; } return e.prototype.insertRule = function (t, n) { if (t <= this.length && t >= 0) {
    var r = document.createTextNode(n);
    return this.element.insertBefore(r, this.nodes[t] || null), this.length++, !0;
} return !1; }, e.prototype.deleteRule = function (t) { this.element.removeChild(this.nodes[t]), this.length--; }, e.prototype.getRule = function (t) { return t < this.length ? this.nodes[t].textContent : ""; }, e; }(), I5 = function () { function e(t) { this.rules = [], this.length = 0; } return e.prototype.insertRule = function (t, n) { return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0); }, e.prototype.deleteRule = function (t) { this.rules.splice(t, 1), this.length--; }, e.prototype.getRule = function (t) { return t < this.length ? this.rules[t] : ""; }, e; }(), Dm = qa, $5 = { isServer: !qa, useCSSOMInjection: !h5 }, Sw = function () { function e(t, n, r) { t === void 0 && (t = Ao), n === void 0 && (n = {}); var o = this; this.options = Ge(Ge({}, $5), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && qa && Dm && (Dm = !1, Lm(this)), Vf(this, function () { return function (i) { for (var s = i.getTag(), a = s.length, c = "", u = function (f) { var p = function (g) { return Ka.get(g); }(f); if (p === void 0)
    return "continue"; var w = i.names.get(p), m = s.getGroup(f); if (w === void 0 || !w.size || m.length === 0)
    return "continue"; var b = "".concat(Eo, ".g").concat(f, '[id="').concat(p, '"]'), x = ""; w !== void 0 && w.forEach(function (g) { g.length > 0 && (x += "".concat(g, ",")); }), c += "".concat(m).concat(b, '{content:"').concat(x, '"}').concat(zf); }, d = 0; d < a; d++)
    u(d); return c; }(o); }); } return e.registerId = function (t) { return Os(t); }, e.prototype.rehydrate = function () { !this.server && qa && Lm(this); }, e.prototype.reconstructWithOptions = function (t, n) { return n === void 0 && (n = !0), new e(Ge(Ge({}, this.options), t), this.gs, n && this.names || void 0); }, e.prototype.allocateGSInstance = function (t) { return this.gs[t] = (this.gs[t] || 0) + 1; }, e.prototype.getTag = function () { return this.tag || (this.tag = (t = function (n) { var r = n.useCSSOMInjection, o = n.target; return n.isServer ? new I5(o) : r ? new M5(o) : new B5(o); }(this.options), new j5(t))); var t; }, e.prototype.hasNameForId = function (t, n) { return this.names.has(t) && this.names.get(t).has(n); }, e.prototype.registerName = function (t, n) { if (Os(t), this.names.has(t))
    this.names.get(t).add(n);
else {
    var r = new Set;
    r.add(n), this.names.set(t, r);
} }, e.prototype.insertRules = function (t, n, r) { this.registerName(t, n), this.getTag().insertRules(Os(t), r); }, e.prototype.clearNames = function (t) { this.names.has(t) && this.names.get(t).clear(); }, e.prototype.clearRules = function (t) { this.getTag().clearGroup(Os(t)), this.clearNames(t); }, e.prototype.clearTag = function () { this.tag = void 0; }, e; }(), F5 = /&/g, U5 = /^\s*\/\/.*$/gm;
function Cw(e, t) { return e.map(function (n) { return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function (r) { return "".concat(t, " ").concat(r); })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = Cw(n.children, t)), n; }); }
function z5(e) { var t, n, r, o = Ao, i = o.options, s = i === void 0 ? Ao : i, a = o.plugins, c = a === void 0 ? Ml : a, u = function (p, w, m) { return m.startsWith(n) && m.endsWith(n) && m.replaceAll(n, "").length > 0 ? ".".concat(t) : p; }, d = c.slice(); d.push(function (p) { p.type === _l && p.value.includes("&") && (p.props[0] = p.props[0].replace(F5, n).replace(r, u)); }), s.prefix && d.push(f5), d.push(c5); var f = function (p, w, m, b) { w === void 0 && (w = ""), m === void 0 && (m = ""), b === void 0 && (b = "&"), t = b, n = w, r = new RegExp("\\".concat(n, "\\b"), "g"); var x = p.replace(U5, ""), g = a5(m || w ? "".concat(m, " ").concat(w, " { ").concat(x, " }") : x); s.namespace && (g = Cw(g, s.namespace)); var h = []; return Ga(g, u5(d.concat(d5(function (y) { return h.push(y); })))), h; }; return f.hash = c.length ? c.reduce(function (p, w) { return w.name || Tr(15), no(p, w.name); }, mw).toString() : "", f; }
var H5 = new Sw, ud = z5(), Ew = B.createContext({ shouldForwardProp: void 0, styleSheet: H5, stylis: ud });
Ew.Consumer;
B.createContext(void 0);
function Mm() { return v.useContext(Ew); }
var V5 = function () { function e(t, n) { var r = this; this.inject = function (o, i) { i === void 0 && (i = ud); var s = r.name + i.hash; o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes")); }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, Vf(this, function () { throw Tr(12, String(r.name)); }); } return e.prototype.getName = function (t) { return t === void 0 && (t = ud), this.name + t.hash; }, e; }(), W5 = function (e) { return e >= "A" && e <= "Z"; };
function Bm(e) { for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-")
        return e;
    W5(r) ? t += "-" + r.toLowerCase() : t += r;
} return t.startsWith("ms-") ? "-" + t : t; }
var Aw = function (e) { return e == null || e === !1 || e === ""; }, kw = function (e) { var t, n, r = []; for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !Aw(i) && (Array.isArray(i) && i.isCss || _r(i) ? r.push("".concat(Bm(o), ":"), i, ";") : Ui(i) ? r.push.apply(r, Wa(Wa(["".concat(o, " {")], kw(i), !1), ["}"], !1)) : r.push("".concat(Bm(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in p5 || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
} return r; };
function br(e, t, n, r) { if (Aw(e))
    return []; if (Hf(e))
    return [".".concat(e.styledComponentId)]; if (_r(e)) {
    if (!_r(i = e) || i.prototype && i.prototype.isReactComponent || !t)
        return [e];
    var o = e(t);
    return br(o, t, n, r);
} var i; return e instanceof V5 ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : Ui(e) ? kw(e) : Array.isArray(e) ? Array.prototype.concat.apply(Ml, e.map(function (s) { return br(s, t, n, r); })) : [e.toString()]; }
function G5(e) { for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (_r(n) && !Hf(n))
        return !1;
} return !0; }
var q5 = gw(Dl), K5 = function () { function e(t, n, r) { this.rules = t, this.staticRulesId = "", this.isStatic = (r === void 0 || r.isStatic) && G5(t), this.componentId = n, this.baseHash = no(q5, n), this.baseStyle = r, Sw.registerId(n); } return e.prototype.generateAndInjectStyles = function (t, n, r) { var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : ""; if (this.isStatic && !r.hash)
    if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId))
        o = mr(o, this.staticRulesId);
    else {
        var i = Om(br(this.rules, t, n, r)), s = ld(no(this.baseHash, i) >>> 0);
        if (!n.hasNameForId(this.componentId, s)) {
            var a = r(i, ".".concat(s), void 0, this.componentId);
            n.insertRules(this.componentId, s, a);
        }
        o = mr(o, s), this.staticRulesId = s;
    }
else {
    for (var c = no(this.baseHash, r.hash), u = "", d = 0; d < this.rules.length; d++) {
        var f = this.rules[d];
        if (typeof f == "string")
            u += f;
        else if (f) {
            var p = Om(br(f, t, n, r));
            c = no(c, p + d), u += p;
        }
    }
    if (u) {
        var w = ld(c >>> 0);
        n.hasNameForId(this.componentId, w) || n.insertRules(this.componentId, w, r(u, ".".concat(w), void 0, this.componentId)), o = mr(o, w);
    }
} return o; }, e; }(), Ya = B.createContext(void 0);
Ya.Consumer;
function Y5(e) { var t = B.useContext(Ya), n = v.useMemo(function () { return function (r, o) { if (!r)
    throw Tr(14); if (_r(r)) {
    var i = r(o);
    return i;
} if (Array.isArray(r) || typeof r != "object")
    throw Tr(8); return o ? Ge(Ge({}, o), r) : r; }(e.theme, t); }, [e.theme, t]); return e.children ? B.createElement(Ya.Provider, { value: n }, e.children) : null; }
var _c = {};
function Q5(e, t, n) { var r = Hf(e), o = e, i = !Rc(e), s = t.attrs, a = s === void 0 ? Ml : s, c = t.componentId, u = c === void 0 ? function (S, C) { var N = typeof S != "string" ? "sc" : Pm(S); _c[N] = (_c[N] || 0) + 1; var E = "".concat(N, "-").concat(w5(Dl + N + _c[N])); return C ? "".concat(C, "-").concat(E) : E; }(t.displayName, t.parentComponentId) : c, d = t.displayName, f = d === void 0 ? function (S) { return Rc(S) ? "styled.".concat(S) : "Styled(".concat(x5(S), ")"); }(e) : d, p = t.displayName && t.componentId ? "".concat(Pm(t.displayName), "-").concat(t.componentId) : t.componentId || u, w = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, m = t.shouldForwardProp; if (r && o.shouldForwardProp) {
    var b = o.shouldForwardProp;
    if (t.shouldForwardProp) {
        var x = t.shouldForwardProp;
        m = function (S, C) { return b(S, C) && x(S, C); };
    }
    else
        m = b;
} var g = new K5(n, p, r ? o.componentStyle : void 0); function h(S, C) { return function (N, E, P) { var M = N.attrs, O = N.componentStyle, q = N.defaultProps, oe = N.foldedComponentIds, K = N.styledComponentId, ft = N.target, _t = B.useContext(Ya), Ye = Mm(), Fe = N.shouldForwardProp || Ye.shouldForwardProp, _ = m5(E, _t, q) || Ao, L = function (pt, we, ht) { for (var fn, Ot = Ge(Ge({}, we), { className: void 0, theme: ht }), or = 0; or < pt.length; or += 1) {
    var mt = _r(fn = pt[or]) ? fn(Ot) : fn;
    for (var Ue in mt)
        Ot[Ue] = Ue === "className" ? mr(Ot[Ue], mt[Ue]) : Ue === "style" ? Ge(Ge({}, Ot[Ue]), mt[Ue]) : mt[Ue];
} return we.className && (Ot.className = mr(Ot.className, we.className)), Ot; }(M, E, _), $ = L.as || ft, Z = {}; for (var W in L)
    L[W] === void 0 || W[0] === "$" || W === "as" || W === "theme" && L.theme === _ || (W === "forwardedAs" ? Z.as = L.forwardedAs : Fe && !Fe(W, $) || (Z[W] = L[W])); var Tt = function (pt, we) { var ht = Mm(), fn = pt.generateAndInjectStyles(we, ht.styleSheet, ht.stylis); return fn; }(O, L), ve = mr(oe, K); return Tt && (ve += " " + Tt), L.className && (ve += " " + L.className), Z[Rc($) && !hw.has($) ? "class" : "className"] = ve, Z.ref = P, v.createElement($, Z); }(y, S, C); } h.displayName = f; var y = B.forwardRef(h); return y.attrs = w, y.componentStyle = g, y.displayName = f, y.shouldForwardProp = m, y.foldedComponentIds = r ? mr(o.foldedComponentIds, o.styledComponentId) : "", y.styledComponentId = p, y.target = r ? o.target : e, Object.defineProperty(y, "defaultProps", { get: function () { return this._foldedDefaultProps; }, set: function (S) { this._foldedDefaultProps = r ? function (C) { for (var N = [], E = 1; E < arguments.length; E++)
        N[E - 1] = arguments[E]; for (var P = 0, M = N; P < M.length; P++)
        cd(C, M[P], !0); return C; }({}, o.defaultProps, S) : S; } }), Vf(y, function () { return ".".concat(y.styledComponentId); }), i && xw(y, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), y; }
function Im(e, t) { for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
    n.push(t[r], e[r + 1]); return n; }
var $m = function (e) { return Object.assign(e, { isCss: !0 }); };
function Re(e) { for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n]; if (_r(e) || Ui(e))
    return $m(br(Im(Ml, Wa([e], t, !0)))); var r = e; return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? br(r) : $m(br(Im(r, t))); }
function dd(e, t, n) { if (n === void 0 && (n = Ao), !t)
    throw Tr(1, t); var r = function (o) { for (var i = [], s = 1; s < arguments.length; s++)
    i[s - 1] = arguments[s]; return e(t, n, Re.apply(void 0, Wa([o], i, !1))); }; return r.attrs = function (o) { return dd(e, t, Ge(Ge({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) })); }, r.withConfig = function (o) { return dd(e, t, Ge(Ge({}, n), o)); }, r; }
var Nw = function (e) { return dd(Q5, e); }, V = Nw;
hw.forEach(function (e) { V[e] = Nw(e); });
var Qn;
function ko(e, t) { return e[t]; }
function J5(e = [], t, n = 0) { return [...e.slice(0, n), t, ...e.slice(n)]; }
function Z5(e = [], t, n = "id") { const r = e.slice(), o = ko(t, n); return o ? r.splice(r.findIndex(i => ko(i, n) === o), 1) : r.splice(r.findIndex(i => i === t), 1), r; }
function Fm(e) { return e.map((t, n) => { const r = Object.assign(Object.assign({}, t), { sortable: t.sortable || !!t.sortFunction || void 0 }); return t.id || (r.id = n + 1), r; }); }
function pi(e, t) { return Math.ceil(e / t); }
function Tc(e, t) { return Math.min(e, t); }
(function (e) { e.ASC = "asc", e.DESC = "desc"; })(Qn || (Qn = {}));
const Ne = () => null;
function Pw(e, t = [], n = []) { let r = {}, o = [...n]; return t.length && t.forEach(i => { if (!i.when || typeof i.when != "function")
    throw new Error('"when" must be defined in the conditional style object and must be function'); i.when(e) && (r = i.style || {}, i.classNames && (o = [...o, ...i.classNames]), typeof i.style == "function" && (r = i.style(e) || {})); }), { conditionalStyle: r, classNames: o.join(" ") }; }
function na(e, t = [], n = "id") { const r = ko(e, n); return r ? t.some(o => ko(o, n) === r) : t.some(o => o === e); }
function Ls(e, t) { return t ? e.findIndex(n => hi(n.id, t)) : -1; }
function hi(e, t) { return e == t; }
function X5(e, t) { const n = !e.toggleOnSelectedRowsChange; switch (t.type) {
    case "SELECT_ALL_ROWS": {
        const { keyField: r, rows: o, rowCount: i, mergeSelections: s } = t, a = !e.allSelected, c = !e.toggleOnSelectedRowsChange;
        if (s) {
            const u = a ? [...e.selectedRows, ...o.filter(d => !na(d, e.selectedRows, r))] : e.selectedRows.filter(d => !na(d, o, r));
            return Object.assign(Object.assign({}, e), { allSelected: a, selectedCount: u.length, selectedRows: u, toggleOnSelectedRowsChange: c });
        }
        return Object.assign(Object.assign({}, e), { allSelected: a, selectedCount: a ? i : 0, selectedRows: a ? o : [], toggleOnSelectedRowsChange: c });
    }
    case "SELECT_SINGLE_ROW": {
        const { keyField: r, row: o, isSelected: i, rowCount: s, singleSelect: a } = t;
        return a ? i ? Object.assign(Object.assign({}, e), { selectedCount: 0, allSelected: !1, selectedRows: [], toggleOnSelectedRowsChange: n }) : Object.assign(Object.assign({}, e), { selectedCount: 1, allSelected: !1, selectedRows: [o], toggleOnSelectedRowsChange: n }) : i ? Object.assign(Object.assign({}, e), { selectedCount: e.selectedRows.length > 0 ? e.selectedRows.length - 1 : 0, allSelected: !1, selectedRows: Z5(e.selectedRows, o, r), toggleOnSelectedRowsChange: n }) : Object.assign(Object.assign({}, e), { selectedCount: e.selectedRows.length + 1, allSelected: e.selectedRows.length + 1 === s, selectedRows: J5(e.selectedRows, o), toggleOnSelectedRowsChange: n });
    }
    case "SELECT_MULTIPLE_ROWS": {
        const { keyField: r, selectedRows: o, totalRows: i, mergeSelections: s } = t;
        if (s) {
            const a = [...e.selectedRows, ...o.filter(c => !na(c, e.selectedRows, r))];
            return Object.assign(Object.assign({}, e), { selectedCount: a.length, allSelected: !1, selectedRows: a, toggleOnSelectedRowsChange: n });
        }
        return Object.assign(Object.assign({}, e), { selectedCount: o.length, allSelected: o.length === i, selectedRows: o, toggleOnSelectedRowsChange: n });
    }
    case "CLEAR_SELECTED_ROWS": {
        const { selectedRowsFlag: r } = t;
        return Object.assign(Object.assign({}, e), { allSelected: !1, selectedCount: 0, selectedRows: [], selectedRowsFlag: r });
    }
    case "SORT_CHANGE": {
        const { sortDirection: r, selectedColumn: o, clearSelectedOnSort: i } = t;
        return Object.assign(Object.assign(Object.assign({}, e), { selectedColumn: o, sortDirection: r, currentPage: 1 }), i && { allSelected: !1, selectedCount: 0, selectedRows: [], toggleOnSelectedRowsChange: n });
    }
    case "CHANGE_PAGE": {
        const { page: r, paginationServer: o, visibleOnly: i, persistSelectedOnPageChange: s } = t, a = o && s, c = o && !s || i;
        return Object.assign(Object.assign(Object.assign(Object.assign({}, e), { currentPage: r }), a && { allSelected: !1 }), c && { allSelected: !1, selectedCount: 0, selectedRows: [], toggleOnSelectedRowsChange: n });
    }
    case "CHANGE_ROWS_PER_PAGE": {
        const { rowsPerPage: r, page: o } = t;
        return Object.assign(Object.assign({}, e), { currentPage: o, rowsPerPage: r });
    }
} }
const e3 = Re `
	pointer-events: none;
	opacity: 0.4;
`, t3 = V.div `
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({ disabled: e }) => e && e3};
	${({ theme: e }) => e.table.style};
`, n3 = Re `
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`, r3 = V.div `
	display: flex;
	width: 100%;
	${({ $fixedHeader: e }) => e && n3};
	${({ theme: e }) => e.head.style};
`, o3 = V.div `
	display: flex;
	align-items: stretch;
	width: 100%;
	${({ theme: e }) => e.headRow.style};
	${({ $dense: e, theme: t }) => e && t.headRow.denseStyle};
`, jw = (e, ...t) => Re `
		@media screen and (max-width: ${599}px) {
			${Re(e, ...t)}
		}
	`, i3 = (e, ...t) => Re `
		@media screen and (max-width: ${959}px) {
			${Re(e, ...t)}
		}
	`, s3 = (e, ...t) => Re `
		@media screen and (max-width: ${1280}px) {
			${Re(e, ...t)}
		}
	`, a3 = e => (t, ...n) => Re `
			@media screen and (max-width: ${e}px) {
				${Re(t, ...n)}
			}
		`, $o = V.div `
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({ theme: e, $headCell: t }) => e[t ? "headCells" : "cells"].style};
	${({ $noPadding: e }) => e && "padding: 0"};
`, Rw = V($o) `
	flex-grow: ${({ button: e, grow: t }) => t === 0 || e ? 0 : t || 1};
	flex-shrink: 0;
	flex-basis: 0;
	max-width: ${({ maxWidth: e }) => e || "100%"};
	min-width: ${({ minWidth: e }) => e || "100px"};
	${({ width: e }) => e && Re `
			min-width: ${e};
			max-width: ${e};
		`};
	${({ right: e }) => e && "justify-content: flex-end"};
	${({ button: e, center: t }) => (t || e) && "justify-content: center"};
	${({ compact: e, button: t }) => (e || t) && "padding: 0"};

	/* handle hiding cells */
	${({ hide: e }) => e && e === "sm" && jw `
    display: none;
  `};
	${({ hide: e }) => e && e === "md" && i3 `
    display: none;
  `};
	${({ hide: e }) => e && e === "lg" && s3 `
    display: none;
  `};
	${({ hide: e }) => e && Number.isInteger(e) && a3(e) `
    display: none;
  `};
`, l3 = Re `
	div:first-child {
		white-space: ${({ $wrapCell: e }) => e ? "normal" : "nowrap"};
		overflow: ${({ $allowOverflow: e }) => e ? "visible" : "hidden"};
		text-overflow: ellipsis;
	}
`, c3 = V(Rw).attrs(e => ({ style: e.style })) `
	${({ $renderAsCell: e }) => !e && l3};
	${({ theme: e, $isDragging: t }) => t && e.cells.draggingStyle};
	${({ $cellStyle: e }) => e};
`;
var u3 = v.memo(function ({ id: e, column: t, row: n, rowIndex: r, dataTag: o, isDragging: i, onDragStart: s, onDragOver: a, onDragEnd: c, onDragEnter: u, onDragLeave: d }) { const { conditionalStyle: f, classNames: p } = Pw(n, t.conditionalCellStyles, ["rdt_TableCell"]); return v.createElement(c3, { id: e, "data-column-id": t.id, role: "cell", className: p, "data-tag": o, $cellStyle: t.style, $renderAsCell: !!t.cell, $allowOverflow: t.allowOverflow, button: t.button, center: t.center, compact: t.compact, grow: t.grow, hide: t.hide, maxWidth: t.maxWidth, minWidth: t.minWidth, right: t.right, width: t.width, $wrapCell: t.wrap, style: f, $isDragging: i, onDragStart: s, onDragOver: a, onDragEnd: c, onDragEnter: u, onDragLeave: d }, !t.cell && v.createElement("div", { "data-tag": o }, function (w, m, b, x) { return m ? b && typeof b == "function" ? b(w, x) : m(w, x) : null; }(n, t.selector, t.format, r)), t.cell && t.cell(n, r, t, e)); });
const Um = "input";
var _w = v.memo(function ({ name: e, component: t = Um, componentOptions: n = { style: {} }, indeterminate: r = !1, checked: o = !1, disabled: i = !1, onClick: s = Ne }) { const a = t, c = a !== Um ? n.style : (d => Object.assign(Object.assign({ fontSize: "18px" }, !d && { cursor: "pointer" }), { padding: 0, marginTop: "1px", verticalAlign: "middle", position: "relative" }))(i), u = v.useMemo(() => function (d, ...f) { let p; return Object.keys(d).map(w => d[w]).forEach((w, m) => { typeof w == "function" && (p = Object.assign(Object.assign({}, d), { [Object.keys(d)[m]]: w(...f) })); }), p || d; }(n, r), [n, r]); return v.createElement(a, Object.assign({ type: "checkbox", ref: d => { d && (d.indeterminate = r); }, style: c, onClick: i ? Ne : s, name: e, "aria-label": e, checked: o, disabled: i }, u, { onChange: Ne })); });
const d3 = V($o) `
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;
function f3({ name: e, keyField: t, row: n, rowCount: r, selected: o, selectableRowsComponent: i, selectableRowsComponentProps: s, selectableRowsSingle: a, selectableRowDisabled: c, onSelectedRow: u }) { const d = !(!c || !c(n)); return v.createElement(d3, { onClick: f => f.stopPropagation(), className: "rdt_TableCell", $noPadding: !0 }, v.createElement(_w, { name: e, component: i, componentOptions: s, checked: o, "aria-checked": o, onClick: () => { u({ type: "SELECT_SINGLE_ROW", row: n, isSelected: o, keyField: t, rowCount: r, singleSelect: a }); }, disabled: d })); }
const p3 = V.button `
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({ theme: e }) => e.expanderButton.style};
`;
function h3({ disabled: e = !1, expanded: t = !1, expandableIcon: n, id: r, row: o, onToggled: i }) { const s = t ? n.expanded : n.collapsed; return v.createElement(p3, { "aria-disabled": e, onClick: () => i && i(o), "data-testid": `expander-button-${r}`, disabled: e, "aria-label": t ? "Collapse Row" : "Expand Row", role: "button", type: "button" }, s); }
const m3 = V($o) `
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({ theme: e }) => e.expanderCell.style};
`;
function g3({ row: e, expanded: t = !1, expandableIcon: n, id: r, onToggled: o, disabled: i = !1 }) { return v.createElement(m3, { onClick: s => s.stopPropagation(), $noPadding: !0 }, v.createElement(h3, { id: r, row: e, expanded: t, expandableIcon: n, disabled: i, onToggled: o })); }
const y3 = V.div `
	width: 100%;
	box-sizing: border-box;
	${({ theme: e }) => e.expanderRow.style};
	${({ $extendedRowStyle: e }) => e};
`;
var v3 = v.memo(function ({ data: e, ExpanderComponent: t, expanderComponentProps: n, extendedRowStyle: r, extendedClassNames: o }) { const i = ["rdt_ExpanderRow", ...o.split(" ").filter(s => s !== "rdt_TableRow")].join(" "); return v.createElement(y3, { className: i, $extendedRowStyle: r }, v.createElement(t, Object.assign({ data: e }, n))); });
const Oc = "allowRowEvents";
var Qa, fd, zm;
(function (e) { e.LTR = "ltr", e.RTL = "rtl", e.AUTO = "auto"; })(Qa || (Qa = {})), function (e) { e.LEFT = "left", e.RIGHT = "right", e.CENTER = "center"; }(fd || (fd = {})), function (e) { e.SM = "sm", e.MD = "md", e.LG = "lg"; }(zm || (zm = {}));
const w3 = Re `
	&:hover {
		${({ $highlightOnHover: e, theme: t }) => e && t.rows.highlightOnHoverStyle};
	}
`, x3 = Re `
	&:hover {
		cursor: pointer;
	}
`, b3 = V.div.attrs(e => ({ style: e.style })) `
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({ theme: e }) => e.rows.style};
	${({ $dense: e, theme: t }) => e && t.rows.denseStyle};
	${({ $striped: e, theme: t }) => e && t.rows.stripedStyle};
	${({ $highlightOnHover: e }) => e && w3};
	${({ $pointerOnHover: e }) => e && x3};
	${({ $selected: e, theme: t }) => e && t.rows.selectedHighlightStyle};
	${({ $conditionalStyle: e }) => e};
`;
function S3({ columns: e = [], conditionalRowStyles: t = [], defaultExpanded: n = !1, defaultExpanderDisabled: r = !1, dense: o = !1, expandableIcon: i, expandableRows: s = !1, expandableRowsComponent: a, expandableRowsComponentProps: c, expandableRowsHideExpander: u, expandOnRowClicked: d = !1, expandOnRowDoubleClicked: f = !1, highlightOnHover: p = !1, id: w, expandableInheritConditionalStyles: m, keyField: b, onRowClicked: x = Ne, onRowDoubleClicked: g = Ne, onRowMouseEnter: h = Ne, onRowMouseLeave: y = Ne, onRowExpandToggled: S = Ne, onSelectedRow: C = Ne, pointerOnHover: N = !1, row: E, rowCount: P, rowIndex: M, selectableRowDisabled: O = null, selectableRows: q = !1, selectableRowsComponent: oe, selectableRowsComponentProps: K, selectableRowsHighlight: ft = !1, selectableRowsSingle: _t = !1, selected: Ye, striped: Fe = !1, draggingColumnId: _, onDragStart: L, onDragOver: $, onDragEnd: Z, onDragEnter: W, onDragLeave: Tt }) { const [ve, pt] = v.useState(n); v.useEffect(() => { pt(n); }, [n]); const we = v.useCallback(() => { pt(!ve), S(!ve, E); }, [ve, S, E]), ht = N || s && (d || f), fn = v.useCallback(ke => { ke.target.getAttribute("data-tag") === Oc && (x(E, ke), !r && s && d && we()); }, [r, d, s, we, x, E]), Ot = v.useCallback(ke => { ke.target.getAttribute("data-tag") === Oc && (g(E, ke), !r && s && f && we()); }, [r, f, s, we, g, E]), or = v.useCallback(ke => { h(E, ke); }, [h, E]), mt = v.useCallback(ke => { y(E, ke); }, [y, E]), Ue = ko(E, b), { conditionalStyle: ss, classNames: as } = Pw(E, t, ["rdt_TableRow"]), $l = ft && Ye, Fl = m ? ss : {}, Ul = Fe && M % 2 == 0; return v.createElement(v.Fragment, null, v.createElement(b3, { id: `row-${w}`, role: "row", $striped: Ul, $highlightOnHover: p, $pointerOnHover: !r && ht, $dense: o, onClick: fn, onDoubleClick: Ot, onMouseEnter: or, onMouseLeave: mt, className: as, $selected: $l, $conditionalStyle: ss }, q && v.createElement(f3, { name: `select-row-${Ue}`, keyField: b, row: E, rowCount: P, selected: Ye, selectableRowsComponent: oe, selectableRowsComponentProps: K, selectableRowDisabled: O, selectableRowsSingle: _t, onSelectedRow: C }), s && !u && v.createElement(g3, { id: Ue, expandableIcon: i, expanded: ve, row: E, onToggled: we, disabled: r }), e.map(ke => ke.omit ? null : v.createElement(u3, { id: `cell-${ke.id}-${Ue}`, key: `cell-${ke.id}-${Ue}`, dataTag: ke.ignoreRowClick || ke.button ? null : Oc, column: ke, row: E, rowIndex: M, isDragging: hi(_, ke.id), onDragStart: L, onDragOver: $, onDragEnd: Z, onDragEnter: W, onDragLeave: Tt }))), s && ve && v.createElement(v3, { key: `expander-${Ue}`, data: E, extendedRowStyle: Fl, extendedClassNames: as, ExpanderComponent: a, expanderComponentProps: c })); }
const C3 = V.span `
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({ $sortActive: e }) => e ? "opacity: 1" : "opacity: 0"};
	${({ $sortDirection: e }) => e === "desc" && "transform: rotate(180deg)"};
`, E3 = ({ sortActive: e, sortDirection: t }) => B.createElement(C3, { $sortActive: e, $sortDirection: t }, "▲"), A3 = V(Rw) `
	${({ button: e }) => e && "text-align: center"};
	${({ theme: e, $isDragging: t }) => t && e.headCells.draggingStyle};
`, k3 = Re `
	cursor: pointer;
	span.__rdt_custom_sort_icon__ {
		i,
		svg {
			transform: 'translate3d(0, 0, 0)';
			${({ $sortActive: e }) => e ? "opacity: 1" : "opacity: 0"};
			color: inherit;
			font-size: 18px;
			height: 18px;
			width: 18px;
			backface-visibility: hidden;
			transform-style: preserve-3d;
			transition-duration: 95ms;
			transition-property: transform;
		}

		&.asc i,
		&.asc svg {
			transform: rotate(180deg);
		}
	}

	${({ $sortActive: e }) => !e && Re `
			&:hover,
			&:focus {
				opacity: 0.7;

				span,
				span.__rdt_custom_sort_icon__ * {
					opacity: 0.7;
				}
			}
		`};
`, N3 = V.div `
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({ disabled: e }) => !e && k3};
`, P3 = V.div `
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;
var j3 = v.memo(function ({ column: e, disabled: t, draggingColumnId: n, selectedColumn: r = {}, sortDirection: o, sortIcon: i, sortServer: s, pagination: a, paginationServer: c, persistSelectedOnSort: u, selectableRowsVisibleOnly: d, onSort: f, onDragStart: p, onDragOver: w, onDragEnd: m, onDragEnter: b, onDragLeave: x }) { v.useEffect(() => { typeof e.selector == "string" && console.error(`Warning: ${e.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`); }, []); const [g, h] = v.useState(!1), y = v.useRef(null); if (v.useEffect(() => { y.current && h(y.current.scrollWidth > y.current.clientWidth); }, [g]), e.omit)
    return null; const S = () => { if (!e.sortable && !e.selector)
    return; let K = o; hi(r.id, e.id) && (K = o === Qn.ASC ? Qn.DESC : Qn.ASC), f({ type: "SORT_CHANGE", sortDirection: K, selectedColumn: e, clearSelectedOnSort: a && c && !u || s || d }); }, C = K => v.createElement(E3, { sortActive: K, sortDirection: o }), N = () => v.createElement("span", { className: [o, "__rdt_custom_sort_icon__"].join(" ") }, i), E = !(!e.sortable || !hi(r.id, e.id)), P = !e.sortable || t, M = e.sortable && !i && !e.right, O = e.sortable && !i && e.right, q = e.sortable && i && !e.right, oe = e.sortable && i && e.right; return v.createElement(A3, { "data-column-id": e.id, className: "rdt_TableCol", $headCell: !0, allowOverflow: e.allowOverflow, button: e.button, compact: e.compact, grow: e.grow, hide: e.hide, maxWidth: e.maxWidth, minWidth: e.minWidth, right: e.right, center: e.center, width: e.width, draggable: e.reorder, $isDragging: hi(e.id, n), onDragStart: p, onDragOver: w, onDragEnd: m, onDragEnter: b, onDragLeave: x }, e.name && v.createElement(N3, { "data-column-id": e.id, "data-sort-id": e.id, role: "columnheader", tabIndex: 0, className: "rdt_TableCol_Sortable", onClick: P ? void 0 : S, onKeyPress: P ? void 0 : K => { K.key === "Enter" && S(); }, $sortActive: !P && E, disabled: P }, !P && oe && N(), !P && O && C(E), typeof e.name == "string" ? v.createElement(P3, { title: g ? e.name : void 0, ref: y, "data-column-id": e.id }, e.name) : e.name, !P && q && N(), !P && M && C(E))); });
const R3 = V($o) `
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;
function _3({ headCell: e = !0, rowData: t, keyField: n, allSelected: r, mergeSelections: o, selectedRows: i, selectableRowsComponent: s, selectableRowsComponentProps: a, selectableRowDisabled: c, onSelectAllRows: u }) { const d = i.length > 0 && !r, f = c ? t.filter(m => !c(m)) : t, p = f.length === 0, w = Math.min(t.length, f.length); return v.createElement(R3, { className: "rdt_TableCol", $headCell: e, $noPadding: !0 }, v.createElement(_w, { name: "select-all-rows", component: s, componentOptions: a, onClick: () => { u({ type: "SELECT_ALL_ROWS", rows: f, rowCount: w, mergeSelections: o, keyField: n }); }, checked: r, indeterminate: d, disabled: p })); }
function Tw(e = Qa.AUTO) { const t = typeof window == "object", [n, r] = v.useState(!1); return v.useEffect(() => { if (t)
    if (e !== "auto")
        r(e === "rtl");
    else {
        const o = !(!window.document || !window.document.createElement), i = document.getElementsByTagName("BODY")[0], s = document.getElementsByTagName("HTML")[0], a = i.dir === "rtl" || s.dir === "rtl";
        r(o && a);
    } }, [e, t]), n; }
const T3 = V.div `
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({ theme: e }) => e.contextMenu.fontColor};
	font-size: ${({ theme: e }) => e.contextMenu.fontSize};
	font-weight: 400;
`, O3 = V.div `
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`, Hm = V.div `
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	box-sizing: inherit;
	z-index: 1;
	align-items: center;
	justify-content: space-between;
	display: flex;
	${({ $rtl: e }) => e && "direction: rtl"};
	${({ theme: e }) => e.contextMenu.style};
	${({ theme: e, $visible: t }) => t && e.contextMenu.activeStyle};
`;
function L3({ contextMessage: e, contextActions: t, contextComponent: n, selectedCount: r, direction: o }) { const i = Tw(o), s = r > 0; return n ? v.createElement(Hm, { $visible: s }, v.cloneElement(n, { selectedCount: r })) : v.createElement(Hm, { $visible: s, $rtl: i }, v.createElement(T3, null, ((a, c, u) => { if (c === 0)
    return null; const d = c === 1 ? a.singular : a.plural; return u ? `${c} ${a.message || ""} ${d}` : `${c} ${d} ${a.message || ""}`; })(e, r, i)), v.createElement(O3, null, t)); }
const D3 = V.div `
	position: relative;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	flex: 1 1 auto;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	flex-wrap: wrap;
	${({ theme: e }) => e.header.style}
`, M3 = V.div `
	flex: 1 0 auto;
	color: ${({ theme: e }) => e.header.fontColor};
	font-size: ${({ theme: e }) => e.header.fontSize};
	font-weight: 400;
`, B3 = V.div `
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`, I3 = ({ title: e, actions: t = null, contextMessage: n, contextActions: r, contextComponent: o, selectedCount: i, direction: s, showMenu: a = !0 }) => v.createElement(D3, { className: "rdt_TableHeader", role: "heading", "aria-level": 1 }, v.createElement(M3, null, e), t && v.createElement(B3, null, t), a && v.createElement(L3, { contextMessage: n, contextActions: r, contextComponent: o, direction: s, selectedCount: i }));
function Ow(e, t) { var n = {}; for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]); if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var o = 0;
    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
} return n; }
const $3 = { left: "flex-start", right: "flex-end", center: "center" }, F3 = V.header `
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({ align: e }) => $3[e]};
	flex-wrap: ${({ $wrapContent: e }) => e ? "wrap" : "nowrap"};
	${({ theme: e }) => e.subHeader.style}
`, U3 = e => { var { align: t = "right", wrapContent: n = !0 } = e, r = Ow(e, ["align", "wrapContent"]); return v.createElement(F3, Object.assign({ align: t, $wrapContent: n }, r)); }, z3 = V.div `
	display: flex;
	flex-direction: column;
`, H3 = V.div `
	position: relative;
	width: 100%;
	border-radius: inherit;
	${({ $responsive: e, $fixedHeader: t }) => e && Re `
			overflow-x: auto;

			// hidden prevents vertical scrolling in firefox when fixedHeader is disabled
			overflow-y: ${t ? "auto" : "hidden"};
			min-height: 0;
		`};

	${({ $fixedHeader: e = !1, $fixedHeaderScrollHeight: t = "100vh" }) => e && Re `
			max-height: ${t};
			-webkit-overflow-scrolling: touch;
		`};

	${({ theme: e }) => e.responsiveWrapper.style};
`, Vm = V.div `
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${e => e.theme.progress.style};
`, V3 = V.div `
	position: relative;
	width: 100%;
	${({ theme: e }) => e.tableWrapper.style};
`, W3 = V($o) `
	white-space: nowrap;
	${({ theme: e }) => e.expanderCell.style};
`, G3 = V.div `
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({ theme: e }) => e.noData.style};
`, q3 = () => B.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" }, B.createElement("path", { d: "M7 10l5 5 5-5z" }), B.createElement("path", { d: "M0 0h24v24H0z", fill: "none" })), K3 = V.select `
	cursor: pointer;
	height: 24px;
	max-width: 100%;
	user-select: none;
	padding-left: 8px;
	padding-right: 24px;
	box-sizing: content-box;
	font-size: inherit;
	color: inherit;
	border: none;
	background-color: transparent;
	appearance: none;
	direction: ltr;
	flex-shrink: 0;

	&::-ms-expand {
		display: none;
	}

	&:disabled::-ms-expand {
		background: #f60;
	}

	option {
		color: initial;
	}
`, Y3 = V.div `
	position: relative;
	flex-shrink: 0;
	font-size: inherit;
	color: inherit;
	margin-top: 1px;

	svg {
		top: 0;
		right: 0;
		color: inherit;
		position: absolute;
		fill: currentColor;
		width: 24px;
		height: 24px;
		display: inline-block;
		user-select: none;
		pointer-events: none;
	}
`, Q3 = e => { var { defaultValue: t, onChange: n } = e, r = Ow(e, ["defaultValue", "onChange"]); return v.createElement(Y3, null, v.createElement(K3, Object.assign({ onChange: n, defaultValue: t }, r)), v.createElement(q3, null)); }, R = { columns: [], data: [], title: "", keyField: "id", selectableRows: !1, selectableRowsHighlight: !1, selectableRowsNoSelectAll: !1, selectableRowSelected: null, selectableRowDisabled: null, selectableRowsComponent: "input", selectableRowsComponentProps: {}, selectableRowsVisibleOnly: !1, selectableRowsSingle: !1, clearSelectedRows: !1, expandableRows: !1, expandableRowDisabled: null, expandableRowExpanded: null, expandOnRowClicked: !1, expandableRowsHideExpander: !1, expandOnRowDoubleClicked: !1, expandableInheritConditionalStyles: !1, expandableRowsComponent: function () { return B.createElement("div", null, "To add an expander pass in a component instance via ", B.createElement("strong", null, "expandableRowsComponent"), ". You can then access props.data from this component."); }, expandableIcon: { collapsed: B.createElement(() => B.createElement("svg", { fill: "currentColor", height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" }, B.createElement("path", { d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" }), B.createElement("path", { d: "M0-.25h24v24H0z", fill: "none" })), null), expanded: B.createElement(() => B.createElement("svg", { fill: "currentColor", height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" }, B.createElement("path", { d: "M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" }), B.createElement("path", { d: "M0-.75h24v24H0z", fill: "none" })), null) }, expandableRowsComponentProps: {}, progressPending: !1, progressComponent: B.createElement("div", { style: { fontSize: "24px", fontWeight: 700, padding: "24px" } }, "Loading..."), persistTableHead: !1, sortIcon: null, sortFunction: null, sortServer: !1, striped: !1, highlightOnHover: !1, pointerOnHover: !1, noContextMenu: !1, contextMessage: { singular: "item", plural: "items", message: "selected" }, actions: null, contextActions: null, contextComponent: null, defaultSortFieldId: null, defaultSortAsc: !0, responsive: !0, noDataComponent: B.createElement("div", { style: { padding: "24px" } }, "There are no records to display"), disabled: !1, noTableHead: !1, noHeader: !1, subHeader: !1, subHeaderAlign: fd.RIGHT, subHeaderWrap: !0, subHeaderComponent: null, fixedHeader: !1, fixedHeaderScrollHeight: "100vh", pagination: !1, paginationServer: !1, paginationServerOptions: { persistSelectedOnSort: !1, persistSelectedOnPageChange: !1 }, paginationDefaultPage: 1, paginationResetDefaultPage: !1, paginationTotalRows: 0, paginationPerPage: 10, paginationRowsPerPageOptions: [10, 15, 20, 25, 30], paginationComponent: null, paginationComponentOptions: {}, paginationIconFirstPage: B.createElement(() => B.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", "aria-hidden": "true", role: "presentation" }, B.createElement("path", { d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z" }), B.createElement("path", { fill: "none", d: "M24 24H0V0h24v24z" })), null), paginationIconLastPage: B.createElement(() => B.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", "aria-hidden": "true", role: "presentation" }, B.createElement("path", { d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z" }), B.createElement("path", { fill: "none", d: "M0 0h24v24H0V0z" })), null), paginationIconNext: B.createElement(() => B.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", "aria-hidden": "true", role: "presentation" }, B.createElement("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }), B.createElement("path", { d: "M0 0h24v24H0z", fill: "none" })), null), paginationIconPrevious: B.createElement(() => B.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", "aria-hidden": "true", role: "presentation" }, B.createElement("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" }), B.createElement("path", { d: "M0 0h24v24H0z", fill: "none" })), null), dense: !1, conditionalRowStyles: [], theme: "default", customStyles: {}, direction: Qa.AUTO, onChangePage: Ne, onChangeRowsPerPage: Ne, onRowClicked: Ne, onRowDoubleClicked: Ne, onRowMouseEnter: Ne, onRowMouseLeave: Ne, onRowExpandToggled: Ne, onSelectedRowsChange: Ne, onSort: Ne, onColumnOrderChange: Ne }, J3 = { rowsPerPageText: "Rows per page:", rangeSeparatorText: "of", noRowsPerPage: !1, selectAllRowsItem: !1, selectAllRowsItemText: "All" }, Z3 = V.nav `
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({ theme: e }) => e.pagination.style};
`, Ds = V.button `
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({ theme: e }) => e.pagination.pageButtonsStyle};
	${({ $isRTL: e }) => e && "transform: scale(-1, -1)"};
`, X3 = V.div `
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${jw `
    width: 100%;
    justify-content: space-around;
  `};
`, Lw = V.span `
	flex-shrink: 1;
	user-select: none;
`, e6 = V(Lw) `
	margin: 0 24px;
`, t6 = V(Lw) `
	margin: 0 4px;
`;
var n6 = v.memo(function ({ rowsPerPage: e, rowCount: t, currentPage: n, direction: r = R.direction, paginationRowsPerPageOptions: o = R.paginationRowsPerPageOptions, paginationIconLastPage: i = R.paginationIconLastPage, paginationIconFirstPage: s = R.paginationIconFirstPage, paginationIconNext: a = R.paginationIconNext, paginationIconPrevious: c = R.paginationIconPrevious, paginationComponentOptions: u = R.paginationComponentOptions, onChangeRowsPerPage: d = R.onChangeRowsPerPage, onChangePage: f = R.onChangePage }) { const p = (() => { const K = typeof window == "object"; function ft() { return { width: K ? window.innerWidth : void 0, height: K ? window.innerHeight : void 0 }; } const [_t, Ye] = v.useState(ft); return v.useEffect(() => { if (!K)
    return () => null; function Fe() { Ye(ft()); } return window.addEventListener("resize", Fe), () => window.removeEventListener("resize", Fe); }, []), _t; })(), w = Tw(r), m = p.width && p.width > 599, b = pi(t, e), x = n * e, g = x - e + 1, h = n === 1, y = n === b, S = Object.assign(Object.assign({}, J3), u), C = n === b ? `${g}-${t} ${S.rangeSeparatorText} ${t}` : `${g}-${x} ${S.rangeSeparatorText} ${t}`, N = v.useCallback(() => f(n - 1), [n, f]), E = v.useCallback(() => f(n + 1), [n, f]), P = v.useCallback(() => f(1), [f]), M = v.useCallback(() => f(pi(t, e)), [f, t, e]), O = v.useCallback(K => d(Number(K.target.value), n), [n, d]), q = o.map(K => v.createElement("option", { key: K, value: K }, K)); S.selectAllRowsItem && q.push(v.createElement("option", { key: -1, value: t }, S.selectAllRowsItemText)); const oe = v.createElement(Q3, { onChange: O, defaultValue: e, "aria-label": S.rowsPerPageText }, q); return v.createElement(Z3, { className: "rdt_Pagination" }, !S.noRowsPerPage && m && v.createElement(v.Fragment, null, v.createElement(t6, null, S.rowsPerPageText), oe), m && v.createElement(e6, null, C), v.createElement(X3, null, v.createElement(Ds, { id: "pagination-first-page", type: "button", "aria-label": "First Page", "aria-disabled": h, onClick: P, disabled: h, $isRTL: w }, s), v.createElement(Ds, { id: "pagination-previous-page", type: "button", "aria-label": "Previous Page", "aria-disabled": h, onClick: N, disabled: h, $isRTL: w }, c), !S.noRowsPerPage && !m && oe, v.createElement(Ds, { id: "pagination-next-page", type: "button", "aria-label": "Next Page", "aria-disabled": y, onClick: E, disabled: y, $isRTL: w }, a), v.createElement(Ds, { id: "pagination-last-page", type: "button", "aria-label": "Last Page", "aria-disabled": y, onClick: M, disabled: y, $isRTL: w }, i))); });
const ur = (e, t) => { const n = v.useRef(!0); v.useEffect(() => { n.current ? n.current = !1 : e(); }, t); };
function r6(e) { return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e; }
var o6 = function (e) { return function (t) { return !!t && typeof t == "object"; }(e) && !function (t) { var n = Object.prototype.toString.call(t); return n === "[object RegExp]" || n === "[object Date]" || function (r) { return r.$$typeof === i6; }(t); }(e); }, i6 = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.element") : 60103;
function zi(e, t) { return t.clone !== !1 && t.isMergeableObject(e) ? No((n = e, Array.isArray(n) ? [] : {}), e, t) : e; var n; }
function s6(e, t, n) { return e.concat(t).map(function (r) { return zi(r, n); }); }
function Wm(e) { return Object.keys(e).concat(function (t) { return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function (n) { return Object.propertyIsEnumerable.call(t, n); }) : []; }(e)); }
function Gm(e, t) { try {
    return t in e;
}
catch {
    return !1;
} }
function a6(e, t, n) { var r = {}; return n.isMergeableObject(e) && Wm(e).forEach(function (o) { r[o] = zi(e[o], n); }), Wm(t).forEach(function (o) { (function (i, s) { return Gm(i, s) && !(Object.hasOwnProperty.call(i, s) && Object.propertyIsEnumerable.call(i, s)); })(e, o) || (Gm(e, o) && n.isMergeableObject(t[o]) ? r[o] = function (i, s) { if (!s.customMerge)
    return No; var a = s.customMerge(i); return typeof a == "function" ? a : No; }(o, n)(e[o], t[o], n) : r[o] = zi(t[o], n)); }), r; }
function No(e, t, n) { (n = n || {}).arrayMerge = n.arrayMerge || s6, n.isMergeableObject = n.isMergeableObject || o6, n.cloneUnlessOtherwiseSpecified = zi; var r = Array.isArray(t); return r === Array.isArray(e) ? r ? n.arrayMerge(e, t, n) : a6(e, t, n) : zi(t, n); }
No.all = function (e, t) { if (!Array.isArray(e))
    throw new Error("first argument should be an array"); return e.reduce(function (n, r) { return No(n, r, t); }, {}); };
var l6 = r6(No);
const qm = { text: { primary: "rgba(0, 0, 0, 0.87)", secondary: "rgba(0, 0, 0, 0.54)", disabled: "rgba(0, 0, 0, 0.38)" }, background: { default: "#FFFFFF" }, context: { background: "#e3f2fd", text: "rgba(0, 0, 0, 0.87)" }, divider: { default: "rgba(0,0,0,.12)" }, button: { default: "rgba(0,0,0,.54)", focus: "rgba(0,0,0,.12)", hover: "rgba(0,0,0,.12)", disabled: "rgba(0, 0, 0, .18)" }, selected: { default: "#e3f2fd", text: "rgba(0, 0, 0, 0.87)" }, highlightOnHover: { default: "#EEEEEE", text: "rgba(0, 0, 0, 0.87)" }, striped: { default: "#FAFAFA", text: "rgba(0, 0, 0, 0.87)" } }, Km = { default: qm, light: qm, dark: { text: { primary: "#FFFFFF", secondary: "rgba(255, 255, 255, 0.7)", disabled: "rgba(0,0,0,.12)" }, background: { default: "#424242" }, context: { background: "#E91E63", text: "#FFFFFF" }, divider: { default: "rgba(81, 81, 81, 1)" }, button: { default: "#FFFFFF", focus: "rgba(255, 255, 255, .54)", hover: "rgba(255, 255, 255, .12)", disabled: "rgba(255, 255, 255, .18)" }, selected: { default: "rgba(0, 0, 0, .7)", text: "#FFFFFF" }, highlightOnHover: { default: "rgba(0, 0, 0, .7)", text: "#FFFFFF" }, striped: { default: "rgba(0, 0, 0, .87)", text: "#FFFFFF" } } };
function c6(e, t, n, r) { const [o, i] = v.useState(() => Fm(e)), [s, a] = v.useState(""), c = v.useRef(""); ur(() => { i(Fm(e)); }, [e]); const u = v.useCallback(x => { var g, h, y; const { attributes: S } = x.target, C = (g = S.getNamedItem("data-column-id")) === null || g === void 0 ? void 0 : g.value; C && (c.current = ((y = (h = o[Ls(o, C)]) === null || h === void 0 ? void 0 : h.id) === null || y === void 0 ? void 0 : y.toString()) || "", a(c.current)); }, [o]), d = v.useCallback(x => { var g; const { attributes: h } = x.target, y = (g = h.getNamedItem("data-column-id")) === null || g === void 0 ? void 0 : g.value; if (y && c.current && y !== c.current) {
    const S = Ls(o, c.current), C = Ls(o, y), N = [...o];
    N[S] = o[C], N[C] = o[S], i(N), t(N);
} }, [t, o]), f = v.useCallback(x => { x.preventDefault(); }, []), p = v.useCallback(x => { x.preventDefault(); }, []), w = v.useCallback(x => { x.preventDefault(), c.current = "", a(""); }, []), m = function (x = !1) { return x ? Qn.ASC : Qn.DESC; }(r), b = v.useMemo(() => o[Ls(o, n == null ? void 0 : n.toString())] || {}, [n, o]); return { tableColumns: o, draggingColumnId: s, handleDragStart: u, handleDragEnter: d, handleDragOver: f, handleDragLeave: p, handleDragEnd: w, defaultSortDirection: m, defaultSortColumn: b }; }
var u6 = v.memo(function (e) { const { data: t = R.data, columns: n = R.columns, title: r = R.title, actions: o = R.actions, keyField: i = R.keyField, striped: s = R.striped, highlightOnHover: a = R.highlightOnHover, pointerOnHover: c = R.pointerOnHover, dense: u = R.dense, selectableRows: d = R.selectableRows, selectableRowsSingle: f = R.selectableRowsSingle, selectableRowsHighlight: p = R.selectableRowsHighlight, selectableRowsNoSelectAll: w = R.selectableRowsNoSelectAll, selectableRowsVisibleOnly: m = R.selectableRowsVisibleOnly, selectableRowSelected: b = R.selectableRowSelected, selectableRowDisabled: x = R.selectableRowDisabled, selectableRowsComponent: g = R.selectableRowsComponent, selectableRowsComponentProps: h = R.selectableRowsComponentProps, onRowExpandToggled: y = R.onRowExpandToggled, onSelectedRowsChange: S = R.onSelectedRowsChange, expandableIcon: C = R.expandableIcon, onChangeRowsPerPage: N = R.onChangeRowsPerPage, onChangePage: E = R.onChangePage, paginationServer: P = R.paginationServer, paginationServerOptions: M = R.paginationServerOptions, paginationTotalRows: O = R.paginationTotalRows, paginationDefaultPage: q = R.paginationDefaultPage, paginationResetDefaultPage: oe = R.paginationResetDefaultPage, paginationPerPage: K = R.paginationPerPage, paginationRowsPerPageOptions: ft = R.paginationRowsPerPageOptions, paginationIconLastPage: _t = R.paginationIconLastPage, paginationIconFirstPage: Ye = R.paginationIconFirstPage, paginationIconNext: Fe = R.paginationIconNext, paginationIconPrevious: _ = R.paginationIconPrevious, paginationComponent: L = R.paginationComponent, paginationComponentOptions: $ = R.paginationComponentOptions, responsive: Z = R.responsive, progressPending: W = R.progressPending, progressComponent: Tt = R.progressComponent, persistTableHead: ve = R.persistTableHead, noDataComponent: pt = R.noDataComponent, disabled: we = R.disabled, noTableHead: ht = R.noTableHead, noHeader: fn = R.noHeader, fixedHeader: Ot = R.fixedHeader, fixedHeaderScrollHeight: or = R.fixedHeaderScrollHeight, pagination: mt = R.pagination, subHeader: Ue = R.subHeader, subHeaderAlign: ss = R.subHeaderAlign, subHeaderWrap: as = R.subHeaderWrap, subHeaderComponent: $l = R.subHeaderComponent, noContextMenu: Fl = R.noContextMenu, contextMessage: Ul = R.contextMessage, contextActions: ke = R.contextActions, contextComponent: Uw = R.contextComponent, expandableRows: ls = R.expandableRows, onRowClicked: Gf = R.onRowClicked, onRowDoubleClicked: qf = R.onRowDoubleClicked, onRowMouseEnter: Kf = R.onRowMouseEnter, onRowMouseLeave: Yf = R.onRowMouseLeave, sortIcon: zw = R.sortIcon, onSort: Hw = R.onSort, sortFunction: Qf = R.sortFunction, sortServer: zl = R.sortServer, expandableRowsComponent: Vw = R.expandableRowsComponent, expandableRowsComponentProps: Ww = R.expandableRowsComponentProps, expandableRowDisabled: Jf = R.expandableRowDisabled, expandableRowsHideExpander: Zf = R.expandableRowsHideExpander, expandOnRowClicked: Gw = R.expandOnRowClicked, expandOnRowDoubleClicked: qw = R.expandOnRowDoubleClicked, expandableRowExpanded: Xf = R.expandableRowExpanded, expandableInheritConditionalStyles: Kw = R.expandableInheritConditionalStyles, defaultSortFieldId: Yw = R.defaultSortFieldId, defaultSortAsc: Qw = R.defaultSortAsc, clearSelectedRows: ep = R.clearSelectedRows, conditionalRowStyles: Jw = R.conditionalRowStyles, theme: tp = R.theme, customStyles: np = R.customStyles, direction: Fo = R.direction, onColumnOrderChange: Zw = R.onColumnOrderChange, className: Xw } = e, { tableColumns: rp, draggingColumnId: op, handleDragStart: ip, handleDragEnter: sp, handleDragOver: ap, handleDragLeave: lp, handleDragEnd: cp, defaultSortDirection: e1, defaultSortColumn: t1 } = c6(n, Zw, Yw, Qw), [{ rowsPerPage: Nn, currentPage: Ut, selectedRows: Hl, allSelected: up, selectedCount: dp, selectedColumn: en, sortDirection: $r, toggleOnSelectedRowsChange: n1 }, ir] = v.useReducer(X5, { allSelected: !1, selectedCount: 0, selectedRows: [], selectedColumn: t1, toggleOnSelectedRowsChange: !1, sortDirection: e1, currentPage: q, rowsPerPage: K, selectedRowsFlag: !1, contextMessage: R.contextMessage }), { persistSelectedOnSort: fp = !1, persistSelectedOnPageChange: cs = !1 } = M, pp = !(!P || !cs && !fp), r1 = mt && !W && t.length > 0, o1 = L || n6, i1 = v.useMemo(() => ((F = {}, X = "default", Qe = "default") => { const zt = Km[X] ? X : Qe; return l6({ table: { style: { color: (U = Km[zt]).text.primary, backgroundColor: U.background.default } }, tableWrapper: { style: { display: "table" } }, responsiveWrapper: { style: {} }, header: { style: { fontSize: "22px", color: U.text.primary, backgroundColor: U.background.default, minHeight: "56px", paddingLeft: "16px", paddingRight: "8px" } }, subHeader: { style: { backgroundColor: U.background.default, minHeight: "52px" } }, head: { style: { color: U.text.primary, fontSize: "12px", fontWeight: 500 } }, headRow: { style: { backgroundColor: U.background.default, minHeight: "52px", borderBottomWidth: "1px", borderBottomColor: U.divider.default, borderBottomStyle: "solid" }, denseStyle: { minHeight: "32px" } }, headCells: { style: { paddingLeft: "16px", paddingRight: "16px" }, draggingStyle: { cursor: "move" } }, contextMenu: { style: { backgroundColor: U.context.background, fontSize: "18px", fontWeight: 400, color: U.context.text, paddingLeft: "16px", paddingRight: "8px", transform: "translate3d(0, -100%, 0)", transitionDuration: "125ms", transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)", willChange: "transform" }, activeStyle: { transform: "translate3d(0, 0, 0)" } }, cells: { style: { paddingLeft: "16px", paddingRight: "16px", wordBreak: "break-word" }, draggingStyle: {} }, rows: { style: { fontSize: "13px", fontWeight: 400, color: U.text.primary, backgroundColor: U.background.default, minHeight: "48px", "&:not(:last-of-type)": { borderBottomStyle: "solid", borderBottomWidth: "1px", borderBottomColor: U.divider.default } }, denseStyle: { minHeight: "32px" }, selectedHighlightStyle: { "&:nth-of-type(n)": { color: U.selected.text, backgroundColor: U.selected.default, borderBottomColor: U.background.default } }, highlightOnHoverStyle: { color: U.highlightOnHover.text, backgroundColor: U.highlightOnHover.default, transitionDuration: "0.15s", transitionProperty: "background-color", borderBottomColor: U.background.default, outlineStyle: "solid", outlineWidth: "1px", outlineColor: U.background.default }, stripedStyle: { color: U.striped.text, backgroundColor: U.striped.default } }, expanderRow: { style: { color: U.text.primary, backgroundColor: U.background.default } }, expanderCell: { style: { flex: "0 0 48px" } }, expanderButton: { style: { color: U.button.default, fill: U.button.default, backgroundColor: "transparent", borderRadius: "2px", transition: "0.25s", height: "100%", width: "100%", "&:hover:enabled": { cursor: "pointer" }, "&:disabled": { color: U.button.disabled }, "&:hover:not(:disabled)": { cursor: "pointer", backgroundColor: U.button.hover }, "&:focus": { outline: "none", backgroundColor: U.button.focus }, svg: { margin: "auto" } } }, pagination: { style: { color: U.text.secondary, fontSize: "13px", minHeight: "56px", backgroundColor: U.background.default, borderTopStyle: "solid", borderTopWidth: "1px", borderTopColor: U.divider.default }, pageButtonsStyle: { borderRadius: "50%", height: "40px", width: "40px", padding: "8px", margin: "px", cursor: "pointer", transition: "0.4s", color: U.button.default, fill: U.button.default, backgroundColor: "transparent", "&:disabled": { cursor: "unset", color: U.button.disabled, fill: U.button.disabled }, "&:hover:not(:disabled)": { backgroundColor: U.button.hover }, "&:focus": { outline: "none", backgroundColor: U.button.focus } } }, noData: { style: { display: "flex", alignItems: "center", justifyContent: "center", color: U.text.primary, backgroundColor: U.background.default } }, progress: { style: { display: "flex", alignItems: "center", justifyContent: "center", color: U.text.primary, backgroundColor: U.background.default } } }, F); var U; })(np, tp), [np, tp]), s1 = v.useMemo(() => Object.assign({}, Fo !== "auto" && { dir: Fo }), [Fo]), ze = v.useMemo(() => { if (zl)
    return t; if (en != null && en.sortFunction && typeof en.sortFunction == "function") {
    const F = en.sortFunction, X = $r === Qn.ASC ? F : (Qe, zt) => -1 * F(Qe, zt);
    return [...t].sort(X);
} return function (F, X, Qe, zt) { return X ? zt && typeof zt == "function" ? zt(F.slice(0), X, Qe) : F.slice(0).sort((U, Vl) => { const Ur = X(U), Pn = X(Vl); if (Qe === "asc") {
    if (Ur < Pn)
        return -1;
    if (Ur > Pn)
        return 1;
} if (Qe === "desc") {
    if (Ur > Pn)
        return -1;
    if (Ur < Pn)
        return 1;
} return 0; }) : F; }(t, en == null ? void 0 : en.selector, $r, Qf); }, [zl, en, $r, t, Qf]), Uo = v.useMemo(() => { if (mt && !P) {
    const F = Ut * Nn, X = F - Nn;
    return ze.slice(X, F);
} return ze; }, [Ut, mt, P, Nn, ze]), a1 = v.useCallback(F => { ir(F); }, []), l1 = v.useCallback(F => { ir(F); }, []), c1 = v.useCallback(F => { ir(F); }, []), u1 = v.useCallback((F, X) => Gf(F, X), [Gf]), d1 = v.useCallback((F, X) => qf(F, X), [qf]), f1 = v.useCallback((F, X) => Kf(F, X), [Kf]), p1 = v.useCallback((F, X) => Yf(F, X), [Yf]), Fr = v.useCallback(F => ir({ type: "CHANGE_PAGE", page: F, paginationServer: P, visibleOnly: m, persistSelectedOnPageChange: cs }), [P, cs, m]), h1 = v.useCallback(F => { const X = pi(O || Uo.length, F), Qe = Tc(Ut, X); P || Fr(Qe), ir({ type: "CHANGE_ROWS_PER_PAGE", page: Qe, rowsPerPage: F }); }, [Ut, Fr, P, O, Uo.length]); if (mt && !P && ze.length > 0 && Uo.length === 0) {
    const F = pi(ze.length, Nn), X = Tc(Ut, F);
    Fr(X);
} ur(() => { S({ allSelected: up, selectedCount: dp, selectedRows: Hl.slice(0) }); }, [n1]), ur(() => { Hw(en, $r, ze.slice(0)); }, [en, $r]), ur(() => { E(Ut, O || ze.length); }, [Ut]), ur(() => { N(Nn, Ut); }, [Nn]), ur(() => { Fr(q); }, [q, oe]), ur(() => { if (mt && P && O > 0) {
    const F = pi(O, Nn), X = Tc(Ut, F);
    Ut !== X && Fr(X);
} }, [O]), v.useEffect(() => { ir({ type: "CLEAR_SELECTED_ROWS", selectedRowsFlag: ep }); }, [f, ep]), v.useEffect(() => { if (!b)
    return; const F = ze.filter(Qe => b(Qe)), X = f ? F.slice(0, 1) : F; ir({ type: "SELECT_MULTIPLE_ROWS", keyField: i, selectedRows: X, totalRows: ze.length, mergeSelections: pp }); }, [t, b]); const m1 = m ? Uo : ze, g1 = cs || f || w; return v.createElement(Y5, { theme: i1 }, !fn && (!!r || !!o) && v.createElement(I3, { title: r, actions: o, showMenu: !Fl, selectedCount: dp, direction: Fo, contextActions: ke, contextComponent: Uw, contextMessage: Ul }), Ue && v.createElement(U3, { align: ss, wrapContent: as }, $l), v.createElement(H3, Object.assign({ $responsive: Z, $fixedHeader: Ot, $fixedHeaderScrollHeight: or, className: Xw }, s1), v.createElement(V3, null, W && !ve && v.createElement(Vm, null, Tt), v.createElement(t3, { disabled: we, className: "rdt_Table", role: "table" }, !ht && (!!ve || ze.length > 0 && !W) && v.createElement(r3, { className: "rdt_TableHead", role: "rowgroup", $fixedHeader: Ot }, v.createElement(o3, { className: "rdt_TableHeadRow", role: "row", $dense: u }, d && (g1 ? v.createElement($o, { style: { flex: "0 0 48px" } }) : v.createElement(_3, { allSelected: up, selectedRows: Hl, selectableRowsComponent: g, selectableRowsComponentProps: h, selectableRowDisabled: x, rowData: m1, keyField: i, mergeSelections: pp, onSelectAllRows: l1 })), ls && !Zf && v.createElement(W3, null), rp.map(F => v.createElement(j3, { key: F.id, column: F, selectedColumn: en, disabled: W || ze.length === 0, pagination: mt, paginationServer: P, persistSelectedOnSort: fp, selectableRowsVisibleOnly: m, sortDirection: $r, sortIcon: zw, sortServer: zl, onSort: a1, onDragStart: ip, onDragOver: ap, onDragEnd: cp, onDragEnter: sp, onDragLeave: lp, draggingColumnId: op })))), !ze.length && !W && v.createElement(G3, null, pt), W && ve && v.createElement(Vm, null, Tt), !W && ze.length > 0 && v.createElement(z3, { className: "rdt_TableBody", role: "rowgroup" }, Uo.map((F, X) => { const Qe = ko(F, i), zt = function (Pn = "") { return typeof Pn != "number" && (!Pn || Pn.length === 0); }(Qe) ? X : Qe, U = na(F, Hl, i), Vl = !!(ls && Xf && Xf(F)), Ur = !!(ls && Jf && Jf(F)); return v.createElement(S3, { id: zt, key: zt, keyField: i, "data-row-id": zt, columns: rp, row: F, rowCount: ze.length, rowIndex: X, selectableRows: d, expandableRows: ls, expandableIcon: C, highlightOnHover: a, pointerOnHover: c, dense: u, expandOnRowClicked: Gw, expandOnRowDoubleClicked: qw, expandableRowsComponent: Vw, expandableRowsComponentProps: Ww, expandableRowsHideExpander: Zf, defaultExpanderDisabled: Ur, defaultExpanded: Vl, expandableInheritConditionalStyles: Kw, conditionalRowStyles: Jw, selected: U, selectableRowsHighlight: p, selectableRowsComponent: g, selectableRowsComponentProps: h, selectableRowDisabled: x, selectableRowsSingle: f, striped: s, onRowExpandToggled: y, onRowClicked: u1, onRowDoubleClicked: d1, onRowMouseEnter: f1, onRowMouseLeave: p1, onSelectedRow: c1, draggingColumnId: op, onDragStart: ip, onDragOver: ap, onDragEnd: cp, onDragEnter: sp, onDragLeave: lp }); }))))), r1 && v.createElement("div", null, v.createElement(o1, { onChangePage: Fr, onChangeRowsPerPage: h1, rowCount: O || ze.length, currentPage: Ut, rowsPerPage: Nn, direction: Fo, paginationRowsPerPageOptions: ft, paginationIconLastPage: _t, paginationIconFirstPage: Ye, paginationIconNext: Fe, paginationIconPrevious: _, paginationComponentOptions: $ }))); });
function Wf({ apidata: e, columns: t, search: n }) { const [r, o] = v.useState([]), [i, s] = v.useState(""), [a, c] = v.useState([]); return v.useEffect(() => { let u = r.filter(d => { if (n == "name")
    return d == null ? void 0 : d.title.toLowerCase().match(i == null ? void 0 : i.toLowerCase()); }); c(u); }, [i]), v.useEffect(() => { c(e), o(e); }, [e]), l.jsx(l.Fragment, { children: l.jsx("div", { className: "table-responsive ", children: l.jsx(u6, { columns: t, data: a, pagination: !0, fixedHeader: !0, highlightOnHover: !0, responsive: !0, subHeader: !0, noHeader: !0, subHeaderComponent: l.jsx("div", { className: "row justify-content-start", children: l.jsx("div", { className: "col-12", children: l.jsx("input", { type: "text", placeholder: `search with ${n}`, className: "form-control ", value: i, onChange: u => s(u.target.value) }) }) }) }) }) }); }
function Dw(e) { return de({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" }, child: [] }, { tag: "line", attr: { x1: "18", y1: "9", x2: "12", y2: "15" }, child: [] }, { tag: "line", attr: { x1: "12", y1: "9", x2: "18", y2: "15" }, child: [] }] })(e); }
const Mw = async (e) => await Bl(`videos/delete-movie/${e}`, "get", ""), d6 = async (e) => await Bl(`videos/delete-episode/${e}`, "get", ""), f6 = async (e) => await Bl(`videos/delete-season/${e}`, "get", ""), p6 = async (e) => await Bl(`videos/delete-series/${e}`, "get", ""), Bl = async (e, t, n) => { const r = sessionStorage.getItem("userToken"); if (r !== null)
    var o = JSON.parse(r);
else
    D.fire({ title: "Token not Found", text: "Log out and log in then try again.", icon: "warning" }); let i = { method: t, maxBodyLength: 1 / 0, url: `${dt}/${e}`, headers: { "Content-Type": "application/json", Authorization: `Bear ${o}` }, data: n }; return await Q.request(i).then(s => s.data.success ? { success: !0, msg: s.data.msg, details: s.data.details } : (D.fire({ text: `${s.data.msg}`, showCloseButton: !0, showConfirmButton: !1, animation: !1, color: "#dc3545", padding: "5px" }), { success: !1, msg: s.data.msg, details: [] })).catch(s => { var a, c; return console.log(s), D.fire({ text: `${((a = s.response.data) == null ? void 0 : a.msg) || "Server Side Error"}`, showCloseButton: !0, showConfirmButton: !1, animation: !1, color: "#dc3545", padding: "0px 0px 10px 0px" }), { success: !1, msg: (c = s.response.data) == null ? void 0 : c.msg, details: [] }; }); }, Bw = jl({ name: "callApi", initialState: !1, reducers: { setCallApi: (e, t) => !e } }), { setCallApi: Po } = Bw.actions, h6 = Bw.reducer, m6 = () => { const e = "All Tv Series", [t, n] = v.useState([]); v.useState([]), v.useState(!0), v.useState({ render: !0, modal_open: !1 }), v.useState(""); const [r, o] = v.useState(!1); v.useState([]), v.useState(!1), v.useState({ render: !0, modal_open: !1 }); const [i, s] = v.useState([]), a = Et(x => x.callApi), [c, u] = v.useState([]), d = ye(), f = kn(), p = t.filter(x => x.status !== "trash"), w = [{ name: "ID", selector: x => x.video_id, sortable: !0 }, { name: "Thumbnail", cell: x => l.jsx(l.Fragment, { children: l.jsx("img", { src: `${Bo}/${x.backdrop_path}`, style: { width: "100px", height: "60px" }, alt: "", className: "my-1" }) }) }, { name: "Title", selector: x => x.title, sortable: !0 }, { name: "Seasons", selector: x => x.seasons.length, sortable: !0 }, { name: "action", cell: x => l.jsx(l.Fragment, { children: l.jsxs("span", { children: [l.jsx(ow, { role: "button", onClick: () => m(x), className: " text-warning mx-1", size: 24 }), l.jsx(Dw, { role: "button", onClick: () => b(x), className: " text-danger mx-1", size: 24 })] }) }) }]; v.useEffect(() => { n(c), s(w); }, [r, c]), v.useEffect(() => { Of("videos/get-series", "").then(x => { x.success && (console.log(x.details), u(x.details)); }); }, [a]); const m = x => { const g = [{ ...x, movie_id: x.video_id }]; d("/admin/seasons-manage", { state: g }); }, b = x => { D.fire({ title: `Are you sure you want to delete ${x.title}?`, text: "All seasons and episodes related to the series will be deleted!", showCancelButton: !0, confirmButtonText: "Delete" }).then(g => { g.isConfirmed && p6(x.video_id).then(h => { h.success ? (D.fire("Season deleted successfully"), f(Po(!a))) : D.fire(h.msg); }); }); }; return l.jsxs("div", { className: "bg-light w-100 px-2 py-4", children: [l.jsx("h3", { children: "Tv Series Management" }), l.jsx("div", { children: l.jsx("div", { className: "container-fluid", children: l.jsx("div", { className: "row my-3", children: l.jsx("div", { className: "col-12", children: l.jsxs("div", { className: "card", style: { borderTop: "2px solid #4723d9" }, children: [l.jsx("div", { className: "card-header d-flex justify-content-between border-bottom pb-1", children: l.jsx("h4", { children: e }) }), l.jsx("div", { className: "card-body", children: l.jsx(Wf, { search: "name", title_btn: "All Tv Series", title: e, apidata: p, columns: i }) })] }) }) }) }) })] }); }, g6 = () => { const e = "All Movies", [t, n] = v.useState([]); v.useState([]), v.useState(!0), v.useState({ render: !0, modal_open: !1 }), v.useState(""); const [r, o] = v.useState(!1); v.useState([]), v.useState(!1), v.useState({ render: !0, modal_open: !1 }); const [i, s] = v.useState(), a = Et(x => x.callApi), [c, u] = v.useState([]), d = ye(), f = kn(), p = t.filter(x => x.status !== "trash"), w = [{ name: "ID", selector: x => x.video_id, sortable: !0 }, { name: "Thumbnail", cell: x => l.jsx(l.Fragment, { children: l.jsx("img", { src: `${Bo}/${x.backdrop_path}`, style: { width: "100px", height: "60px" }, alt: "", className: "my-1" }) }) }, { name: "Title", selector: x => x.title, sortable: !0 }, { name: "action", cell: x => l.jsx(l.Fragment, { children: l.jsxs("span", { children: [l.jsx(ow, { role: "button", onClick: () => m(x), className: " text-warning mx-1", size: 24 }), l.jsx(Dw, { role: "button", onClick: () => b(x), className: " text-danger mx-1", size: 24 })] }) }) }]; v.useEffect(() => { n(c), s(w); }, [r, c]), v.useEffect(() => { is("videos/get-movies", "", d).then(x => { x.success && u(x.details); }); }, [a]); const m = x => { const g = [{ ...x, isEdit: !0, url: x.video_url, order: x.file_order }]; d("/admin/movie-upload", { state: g }); }, b = x => { D.fire({ title: `Are you sure you want to delete ${x.title}?`, showCancelButton: !0, confirmButtonText: "Delete" }).then(g => { g.isConfirmed && Mw(x.video_id).then(h => { h.success ? D.fire("Movie deleted successfully") : D.fire(h.msg), f(Po(!a)); }); }); }; return l.jsxs("div", { className: "bg-light w-100 px-2 py-4", children: [l.jsx("h3", { children: "Movies Management" }), l.jsx("div", { children: l.jsx("div", { className: "container-fluid", children: l.jsx("div", { className: "row my-3", children: l.jsx("div", { className: "col-12", children: l.jsxs("div", { className: "card", style: { borderTop: "2px solid #4723d9" }, children: [l.jsx("div", { className: "card-header d-flex justify-content-between border-bottom pb-1", children: l.jsx("h4", { children: e }) }), l.jsx("div", { className: "card-body", children: l.jsx(Wf, { search: "name", title_btn: "All Tv Series", title: e, apidata: p, columns: i }) })] }) }) }) }) })] }); }, y6 = () => { const e = Zt(), t = v.useRef(null), n = new URLSearchParams(e.search), r = n.get("movieUrl") || void 0, o = n.get("subtitlesUrl") || void 0; console.log({ subtitlesUrl: o, movieUrl: r }); const [i, s] = v.useState(""), [a, c] = v.useState(null); v.useEffect(() => { const d = () => { t.current && t.current.play().catch(f => { console.error("Autoplay failed:", f), s("Autoplay failed. Please click play manually."); }); }; return t.current && t.current.addEventListener("canplay", d), () => { t.current && t.current.removeEventListener("canplay", d); }; }, []); const u = () => { c("An error occurred while loading the video. Movie URL might be incorrect or Video not available."); }; return l.jsxs("div", { className: "bg-white px-4", children: [l.jsxs("div", { className: "p-4", children: [l.jsx("h1", { className: "text-success", children: "Preview Page" }), i && l.jsx("p", { className: "text-warning", children: i }), a && l.jsx("p", { className: "text-danger", children: a })] }), l.jsxs("video", { ref: t, controls: !0, height: "450px", width: "100%", onError: u, children: [l.jsx("source", { src: r }), l.jsx("track", { src: o, kind: "subtitles", srcLang: "en", label: "English", default: !0 })] })] }); }, v6 = () => { const e = ye(), t = () => { localStorage.clear(), sessionStorage.clear(), e("/admin/login"), window.location.reload(); }; return l.jsxs("div", { className: "bg-white w-100 p-5", children: [l.jsx("h5", { children: "Are you sure you want to log out?" }), l.jsx("div", { className: "p-4", children: l.jsx("button", { type: "button", onClick: t, className: "btn btn-warning", children: "Yes" }) })] }); }, w6 = [{ label: "Title", placeholder: "The Good Doctor", id: "title", type: "text", inputType: "input", required: !0 }, { label: "Slug", placeholder: "http://12.0.0.100/watch/slug", id: "slug", type: "text", inputType: "input", required: !0 }, { label: "Description", placeholder: "The Movie is about...", id: "description", type: "text", inputType: "textarea", required: !0 }, { label: "Actor", placeholder: "Enter actor name", id: "actor", type: "text", inputType: "input", required: !1 }, { label: "Director", placeholder: "Enter director name", id: "director", type: "text", inputType: "input", required: !1 }, { label: "Writer", placeholder: "Enter writer name", id: "writer", type: "text", inputType: "input", required: !1 }, { label: "IMDb Rating", placeholder: "Enter IMDb rating", id: "imdb_rating", type: "number", inputType: "input", required: !1 }, { label: "Release Date", placeholder: "2024-12-07", id: "release_date", type: "date", inputType: "input", required: !1 }, { label: "Country", placeholder: "Select Country", id: "country", type: "text", inputType: "select", required: !1 }, { label: "Genre", placeholder: "Select Genre", id: "genre", type: "text", inputType: "select", required: !1 }, { label: "Language", placeholder: "Enter language", id: "language", type: "text", inputType: "input", required: !1 }, { label: "Video Type", placeholder: "Enter video type", id: "video_type", type: "text", inputType: "select", required: !1 }, { label: "Runtime", placeholder: "Enter runtime", id: "runtime", type: "text", inputType: "input", required: !0 }, { label: "Video Quality", placeholder: "HD", id: "video_quality", type: "text", inputType: "input", required: !1 }, { label: "Publication", placeholder: "Enter publication", id: "publication", type: "text", inputType: "input", required: !1 }, { label: "Enable Download", placeholder: "Enable download", id: "enable_download", type: "checkbox", inputType: "input", required: !1 }, { label: "Free/Paid", placeholder: "Free", id: "free_paid", type: "text", inputType: "select", required: !1 }], x6 = [{ label: "SEO Title", placeholder: "Enter SEO Title", id: "seo_title", type: "text", inputType: "input", required: !1 }, { label: "Meta Description", placeholder: "Enter meta description", id: "meta_description", type: "text", inputType: "textarea", required: !1 }, { label: "Focus Keyword", placeholder: "Enter focus keyword, separated by commas", id: "focus_keyword", type: "text", inputType: "textarea", required: !1 }, { label: "Tags", placeholder: "Enter tags, separated by commas", id: "tags", type: "text", inputType: "textarea", required: !1 }, { label: "Send Email Newsletter to Subscriber", placeholder: "Check to send", id: "email_newsletter", type: "checkbox", inputType: "input", required: !1 }, { label: "Send Push Notification to Subscriber", placeholder: "Check to send", id: "push_notification", type: "checkbox", inputType: "input", required: !1 }], Lc = [{ label: "Label", placeholder: "server #", id: "label", type: "text", inputType: "input", required: !0 }, { label: "Order", placeholder: "0", id: "order", type: "number", inputType: "input", required: !0 }, { label: "Movie URL", placeholder: "https://moviepath.mp4", id: "url", type: "text", inputType: "input", required: !0 }, { label: "Trailer URL", placeholder: "https://moviepath.mp4", id: "trailer_url", type: "text", inputType: "input", required: !0 }, { label: "Subtitles URL", placeholder: "https://subtitles-path.vtt", id: "subtitles_url", type: "text", inputType: "input", required: !1 }], b6 = async (e) => await Il("videos/add/movie-details", "post", e), S6 = async (e) => await Il("videos/add/movie-path", "post", e), C6 = async (e) => await Il("videos/add/season-info", "post", e), E6 = async (e) => await Il("videos/add/episode-info", "post", e), Il = async (e, t, n) => { const r = sessionStorage.getItem("userToken"); if (r !== null)
    var o = JSON.parse(r);
else
    D.fire({ title: "Token not Found", text: "Log out and log in then try again.", icon: "warning" }); let i = { method: t, maxBodyLength: 1 / 0, url: `${dt}/${e}`, headers: { "Content-Type": "application/json", Authorization: `Bear ${o}` }, data: n }; return await Q.request(i).then(s => s.data.success ? { success: !0, msg: s.data.msg, details: s.data.details } : (D.fire({ text: `${s.data.msg}`, showCloseButton: !0, showConfirmButton: !1, animation: !1, color: "#dc3545", padding: "5px" }), { success: !1, msg: s.data.msg, details: [] })).catch(s => { var a, c; return console.log(s), D.fire({ text: `${((a = s.response.data) == null ? void 0 : a.msg) || "Server Side Error"}`, showCloseButton: !0, showConfirmButton: !1, animation: !1, color: "#dc3545", padding: "0px 0px 10px 0px" }), { success: !1, msg: (c = s.response.data) == null ? void 0 : c.msg, details: [] }; }); }, pd = "086cfe05dd16828e37291d2f37293a38", Ym = ({ type: e }) => { const [t, n] = v.useState(), [r, o] = v.useState({ title: "", slug: "", adult: !0, runtime: 0, type: e }), i = ye(), s = u => { const d = u.target.id, f = u.target.value; o(p => ({ ...p, [d]: f })); }, a = u => { u.preventDefault(), b6(JSON.stringify(r)).then(d => { console.log(r), d.success && (console.log(d.details), e === "movie" && i("/admin/movie-upload", { state: d.details }), e === "series" && i("/admin/seasons-manage", { state: d.details })); }); }, c = () => { async function u() { const d = e === "movie" ? `https://api.themoviedb.org/3/movie/${t}?api_key=${pd}&language=en-US` : e === "series" ? `https://api.themoviedb.org/3/tv/${t}?api_key=${pd}&language=en-US` : "", f = await Q.get(d); if (f.status === 200) {
    const { title: p, id: w, overview: m, tagline: b, adult: x, runtime: g, backdrop_path: h, poster_path: y, release_date: S, name: C } = f.data;
    o(N => ({ ...N, title: p || C, id: w, description: m, slug: b, adult: x, runtime: g, backdrop_path: h, poster_path: y, release_date: S }));
} return console.log(f), f; } u(); }; return l.jsxs("div", { className: "bg-light w-100 p-4 ", children: [l.jsx("div", { children: l.jsx("h1", { className: "h1", children: e === "movie" ? "Video Add" : "TV Series Add" }) }), l.jsx("div", { className: "d-flex justify-content-center", children: l.jsxs("div", { className: "col-md-7", children: [l.jsx("p", { className: "bg-success text-white text-uppercase p-2", children: "Import Movies/TVShow From TMDb" }), l.jsxs("div", { className: "d-flex gap-4 mb-1", children: [l.jsxs("select", { className: "form-select ", "aria-label": "Default select example", children: [l.jsx("option", { children: "select language" }), l.jsx("option", { value: "1", defaultValue: 1, children: "English" }), l.jsx("option", { value: "2", children: "French" })] }), l.jsxs("div", { className: "input-group flex-nowrap ", children: [l.jsx("input", { onChange: u => n(u.target.value), type: "text", className: "form-control", placeholder: "Enter TMDB ID. Ex: 141052", "aria-label": "Username", "aria-describedby": "addon-wrapping" }), l.jsx("button", { onClick: c, className: "input-group-text fetch", id: "addon-wrapping", children: "FETCH" })] })] }), l.jsxs("small", { className: "form-text text-muted", id: "", children: [l.jsx("a", { href: "https://youtu.be/DZrv95huYUk", target: "_blank", children: "Tutorial | " }), " Get TMDb ID from here: ", l.jsx("a", { href: "https://www.themoviedb.org/movie/", target: "_blank", children: "TheMovieDB.org." })] }), l.jsx("div", { id: "result", className: "m-t-15", children: l.jsxs("div", { className: "alert alert-info", children: [l.jsx("strong", { children: "Note:" }), "Actors, directors & writers photo will import by cron."] }) })] }) }), l.jsxs("form", { onSubmit: a, className: "d-flex gap-2 justify-content-between mt-4", children: [l.jsxs("div", { className: "bg-white col-5 p-4", children: [l.jsx("h6", { children: "Movie Info" }), l.jsx("hr", {}), l.jsx("div", { children: w6.map((u, d) => { if (u.inputType === "input")
                                return l.jsxs("div", { className: "form-floating mb-3", children: [l.jsx("input", { type: u.type, className: "form-control", required: u.required, value: r[u.id], id: u.id, placeholder: u.placeholder, onChange: s }), l.jsx("label", { htmlFor: u.id, children: u.label })] }, d); if (u.inputType === "textarea")
                                return l.jsxs("div", { className: "form-floating", children: [l.jsx("textarea", { className: "form-control", placeholder: u.placeholder, id: u.id, style: { height: "100px" }, required: u.required, value: r[u.id] }), l.jsx("label", { htmlFor: u.id, children: u.label })] }, d); }) })] }), l.jsxs("div", { className: "bg-white col-6 p-4", children: [l.jsx("h6", { children: "Poster,Thumbnail & SEO" }), l.jsx("hr", {}), l.jsx("div", { children: x6.map((u, d) => { if (u.inputType === "input" && u.type === "file")
                                return l.jsxs("div", { className: "form-floating mb-3", children: [l.jsx("img", { src: `${kf}/${r[u.id]}`, alt: "Poster Preview", style: { maxWidth: "200px", maxHeight: "200px" } }), l.jsx("input", { type: u.type, className: "form-control", required: u.required, id: u.id, placeholder: u.placeholder, onChange: s }), l.jsx("label", { htmlFor: u.id, children: u.label })] }, d); if (u.inputType === "input")
                                return l.jsxs("div", { className: "form-floating mb-3", children: [l.jsx("input", { type: u.type, className: "form-control", required: u.required, value: r[u.id], id: u.id, placeholder: u.placeholder, onChange: s }), l.jsx("label", { htmlFor: u.id, children: u.label })] }, d); if (u.inputType === "textarea")
                                return l.jsxs("div", { className: "form-floating", children: [l.jsx("textarea", { className: "form-control", placeholder: u.placeholder, id: u.id, style: { height: "100px" }, required: u.required, value: r[u.id] }), l.jsx("label", { htmlFor: u.id, children: u.label })] }, d); }) }), l.jsx("button", { type: "submit", className: "btn btn-primary", children: "Create" })] })] })] }); };
function A6(e) { return de({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, child: [] }, { tag: "path", attr: { d: "M9 16v-8l3 5l3 -5v8" }, child: [] }] })(e); }
function k6(e) { return de({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, child: [] }, { tag: "path", attr: { d: "M10 8h4" }, child: [] }, { tag: "path", attr: { d: "M12 8v8" }, child: [] }] })(e); }
const N6 = () => { var d, f; const [e, t] = v.useState({ title: "", label: "", order: 1, url: "https://japtech.africa/video/", trailer_url: "", subtitles_url: "", isEdit: !1, video_id: 0 }), [n, r] = v.useState([]), o = Zt(), i = ye(); v.useEffect(() => { const { title: p, movie_id: w, id: m, isEdit: b, url: x, order: g, trailer_url: h } = o.state[0]; b ? r(o.state) : t(y => ({ ...y, label: p, title: p, movie_id: w, id: m, trailer_url: h })); }, []); const s = p => { const w = p.target.id; let m; w === "isEdit" ? m = p.target.checked : m = p.target.value, t(b => ({ ...b, [w]: m })); }, a = p => { p.preventDefault(), console.log(e), S6(JSON.stringify(e)).then(w => { w.success && (D.fire("", w.msg, "success"), r(w.details), t(m => ({ ...m, isEdit: !1 }))); }); }, c = p => { console.log({ movie: p }); const { label: w, order: m, title: b, url: x, movie_id: g, video_id: h, trailer_url: y, subtitles_url: S } = p; t({ label: w, order: m, url: x, isEdit: !0, movie_id: h, video_id: h, title: b, trailer_url: y, subtitles_url: S }); }, u = p => { D.fire({ title: `Are you sure you want to delete ${p.label}?`, showCancelButton: !0, confirmButtonText: "Delete" }).then(w => { w.isConfirmed && Mw(p.video_id).then(m => { m.success ? (D.fire("Movie deleted successfully"), setTimeout(() => { i("/admin/all-movies"); }, 2e3)) : D.fire(m.msg); }); }); }; return console.log(n), l.jsxs("div", { className: "bg-light w-100 py-4 ", children: [l.jsx("div", { className: "px-5", children: l.jsxs("h1", { className: "h1", children: ["Video upload | ", e.title, " "] }) }), l.jsxs("div", { className: "d-flex flex-column gap-4 align-content-center justify-content-center bg-white py-4", children: [l.jsxs("div", { className: "col-12 px-4 d-flex justify-content-between ", children: [l.jsxs("div", { children: [l.jsx(ge, { to: "/admin/all-movies", className: "btn btn-success btn-sm me-4", children: "Back to List" }), ((d = n[0]) == null ? void 0 : d.url) && l.jsx(ge, { to: `/preview?movieUrl=${encodeURIComponent(((f = n[0]) == null ? void 0 : f.url) || "")}`, target: "_blank", className: "btn btn-success btn-sm ", children: "Preview" })] }), l.jsxs("div", { className: "form-check form-switch d-flex gap-2 align-items-center", children: [l.jsx("input", { className: "form-check-input fs-4", onChange: s, checked: e.isEdit, type: "checkbox", role: "switch", id: "isEdit" }), l.jsx("label", { className: "form-check-label fw-4 text-warning", htmlFor: "isEdit", children: "Edit Video" })] })] }), l.jsxs("div", { className: "col-12 px-4", children: [l.jsx("p", { className: "bg-success text-white text-uppercase p-2", children: "Upload Movie" }), l.jsx("div", { className: "d-flex gap-4 mb-1", children: l.jsxs("form", { onSubmit: a, className: " mt-4 col-12", children: [l.jsxs("div", { className: "bg-white d-flex flex-wrap justify-content-between col-12 ", children: [Lc == null ? void 0 : Lc.map((p, w) => l.jsxs("div", { className: `form-floating mb-3 ${w == 0 || w == 1 ? "col-5 " : "col-12 "} `, children: [l.jsx("input", { type: p.type, className: "form-control", required: p.required, value: e[p.id], id: p.id, placeholder: p.placeholder, onChange: s }), l.jsx("label", { htmlFor: p.id, children: p.label })] }, w)), l.jsx("div", {})] }), e.isEdit ? l.jsx("button", { type: "submit", className: "btn btn-warning btn-sm ", children: "Edit" }) : l.jsx("button", { type: "submit", className: "btn btn-success btn-sm ", children: "+ Add" })] }) }), l.jsx("p", { className: "bg-success text-white text-uppercase p-2 mt-4", children: "Video List" }), l.jsxs("table", { className: "table col--12", children: [l.jsx("thead", { children: l.jsxs("tr", { children: [l.jsx("th", { scope: "col", children: "#" }), l.jsx("th", { scope: "col", children: "Order" }), l.jsx("th", { scope: "col", children: "Label" }), l.jsx("th", { scope: "col", children: "Movie URL" }), l.jsx("th", { scope: "col", children: "Trailer URL" }), l.jsx("th", { scope: "col", children: "Subtitles URL" }), l.jsx("th", { scope: "col", children: "Action" })] }) }), l.jsx("tbody", { children: n == null ? void 0 : n.map((p, w) => l.jsxs("tr", { children: [l.jsx("th", { scope: "row", children: w + 1 }), l.jsx("td", { children: l.jsx("input", { type: "number", onChange: () => { }, value: p.order, style: { width: "60px" } }) }), l.jsx("td", { children: p.label }), l.jsx("td", { className: " text-wrap text-break", children: p.url }), l.jsx("td", { className: " text-wrap text-break", children: p.trailer_url }), l.jsx("td", { className: " text-wrap text-break", children: p.subtitles_url }), l.jsxs("td", { className: "d-flex flex-column gap-1", children: [l.jsxs("span", { className: "d-flex", children: [l.jsx(ge, { to: `/preview?movieUrl=${encodeURIComponent(p.url || "")}&subtitlesUrl=${p.subtitles_url}`, target: "_blank", children: l.jsx(A6, { size: 32, className: "text-success me-2 border border-success p-1" }) }), l.jsx(ge, { to: `/preview?movieUrl=${encodeURIComponent(p.trailer_url || "")}`, target: "_blank", children: l.jsx(k6, { size: 32, className: "text-info me-2 border border-info p-1" }) })] }), l.jsxs("span", { className: "d-flex", children: [l.jsx(Va, { size: 32, onClick: () => c(p), role: "button", className: "text-warning me-2 border border-warning p-1" }), l.jsx(If, { onClick: () => u(p), role: "button", size: 32, className: "text-danger border border-danger p-1" })] })] })] }, w)) })] })] })] })] }); }, P6 = ({ seriesDetails: e, editSeason: t, setEditSession: n }) => { const [r, o] = v.useState(), i = v.useRef(null), s = kn(), a = Et(d => d.callApi), c = d => { const f = d.target.id, p = d.target.value; o(w => ({ ...w, [f]: p })); }; v.useEffect(() => { if (t) {
    const { season: d, isEdit: f } = t;
    o(p => ({ ...p, isEdit: f, ...d, order_no: d.season_order }));
} }, [t]); const u = d => { d.preventDefault(); const f = JSON.stringify({ seriesDetails: e, seasonInfo: r }); C6(f).then(p => { p.success && (s(Po(!a)), i.current && i.current.click()); }); }; return l.jsx("div", { className: "modal fade", id: "seasonInfoModal", tabIndex: -1, "aria-labelledby": "seasonInfoModalLabel", "aria-hidden": "true", children: l.jsx("div", { className: "modal-dialog", children: l.jsx("div", { className: "modal-content", children: l.jsxs("form", { onSubmit: u, children: [l.jsx("div", { className: "modal-header", children: l.jsx("h1", { className: "modal-title fs-5", id: "seasonInfoModalLabel", children: e == null ? void 0 : e.title }) }), l.jsxs("div", { className: "modal-body", children: [l.jsxs("div", { className: "mb-3 ", children: [l.jsx("label", { htmlFor: "season_name", className: "form-label", children: "Season Name" }), l.jsx("input", { type: "text", onChange: c, required: !0, value: r == null ? void 0 : r.season_name, className: "form-control", id: "season_name", placeholder: "Season 1" })] }), l.jsxs("div", { className: "mb-3", children: [l.jsx("label", { htmlFor: "order_no", className: "form-label", children: "Order" }), l.jsx("input", { type: "number", onChange: c, required: !0, value: r == null ? void 0 : r.order_no, className: "form-control", id: "order_no", placeholder: "1" })] }), l.jsxs("div", { className: "mb-3", children: [l.jsx("label", { htmlFor: "trailer_url", className: "form-label", children: "Season Trailer Url" }), l.jsx("input", { type: "text", onChange: c, required: !0, value: r == null ? void 0 : r.trailer_url, className: "form-control", id: "trailer_url", placeholder: "https://japtech.africa/series/" })] })] }), l.jsxs("div", { className: "modal-footer", children: [l.jsx("button", { type: "submit", className: `${t != null && t.isEdit ? "btn-warning " : "btn-primary "} btn  btn-sm`, children: t != null && t.isEdit ? "Edit" : "Create" }), l.jsx("button", { type: "button", ref: i, onClick: () => n(void 0), className: "btn btn-secondary btn-sm", "data-bs-dismiss": "modal", children: "Close" })] })] }) }) }) }); }, j6 = async (e) => await $w("admin/videos/movie-requests", "get", e), Iw = async (e) => await $w("videos/get-seasons-episodes", "get", e), $w = async (e, t, n) => { const r = sessionStorage.getItem("adminToken"); if (r !== null)
    var o = JSON.parse(r);
else
    D.fire({ title: "Token not Found", text: "Log out and log in then try again.", icon: "warning" }); let i = { method: t, maxBodyLength: 1 / 0, url: `${dt}/${e}/${n}`, headers: { "Content-Type": "application/json", Authorization: `Bear ${o}` } }; return await Q.request(i).then(s => s.data.success ? { success: !0, details: s.data.details } : (D.fire({ text: `${s.data.msg}`, showCloseButton: !0, showConfirmButton: !1, animation: !1, color: "#dc3545", padding: "5px" }), { success: !1, details: [] })).catch(s => { var a; return console.log(s), D.fire({ text: `${((a = s.response.data) == null ? void 0 : a.msg) || "Server Side Error"}`, showCloseButton: !0, showConfirmButton: !1, animation: !1, color: "#dc3545", padding: "0px 0px 10px 0px" }), { success: !1, details: [] }; }); }, R6 = () => { var m; const [e, t] = v.useState({ title: "", order: 0, url: "", label: "", movie_id: 0 }), [n, r] = v.useState(), [o, i] = v.useState(), s = Et(b => b.callApi), a = kn(), c = Zt(), u = ye(), d = v.useRef(null); v.useEffect(() => { const { title: b, movie_id: x, id: g } = c.state[0]; t(h => ({ ...h, label: b, title: b, movie_id: x, id: g })), Iw(x).then(h => { h.success && h.details[0].seasons[0].season_name && r(h.details[0]); }); }, [s]); const f = b => { u("/admin/episodes-manage", { state: { season: b, seriesDetails: e } }); }, p = b => { D.fire({ title: `Are you sure you want to delete ${b.season_name} from ${e.title}?`, text: "All episodes related to the season will be deleted!", showCancelButton: !0, confirmButtonText: "Delete" }).then(x => { x.isConfirmed && f6(b.season_id).then(g => { g.success ? (D.fire("Season deleted successfully"), a(Po(!s))) : D.fire(g.msg); }); }); }, w = b => { i({ season: b, isEdit: !0 }), d.current && d.current.click(); }; return l.jsxs("div", { className: "bg-light w-100 p-4", children: [l.jsx("h3", { children: e.title }), l.jsxs("div", { className: "bg-white m-4 p-4", children: [l.jsxs("div", { className: "", children: [l.jsx("button", { onClick: () => u("/admin/all-series"), className: "btn btn-success btn-sm me-4", children: "Back To List" }), l.jsx("button", { type: "button", ref: d, className: "btn btn-success btn-sm", "data-bs-toggle": "modal", "data-bs-target": "#seasonInfoModal", children: "Add Seasons" })] }), l.jsxs("table", { className: "table mt-2", children: [l.jsx("thead", { children: l.jsxs("tr", { children: [l.jsx("th", { scope: "col", children: "#" }), l.jsx("th", { scope: "col", children: "Season Name" }), l.jsx("th", { scope: "col", children: "Episodes" }), l.jsx("th", { scope: "col", children: "Order" }), l.jsx("th", { scope: "col", children: "Trailer Url" }), l.jsx("th", { scope: "col", children: "Action" })] }) }), l.jsx("tbody", { children: (m = n == null ? void 0 : n.seasons) == null ? void 0 : m.map((b, x) => l.jsxs("tr", { children: [l.jsx("th", { scope: "row", children: x + 1 }), l.jsx("td", { className: "text-wrap text-break", children: b.season_name }), l.jsx("td", { children: b.episodes.length }), l.jsx("td", { children: l.jsx("input", { type: "number", onChange: () => { }, value: b.season_order, style: { width: "60px" } }) }), l.jsx("td", { className: "text-wrap text-break", children: b.trailer_url }), l.jsxs("td", { className: "d-flex flex-wrap gap-2", children: [l.jsx("button", { onClick: () => f(b), className: "btn btn-info btn-sm me-2 ", children: "Manage Episodes" }), l.jsx(Va, { size: 32, className: "text-warning p-1 border border-warning  me-2", onClick: () => w(b) }), l.jsx(If, { size: 32, className: "text-danger p-1 border border-danger", onClick: () => p(b) })] })] }, x + 89293)) })] }), l.jsx("div", { className: "w-100 text-end", children: l.jsx("button", { className: "btn btn-success btn-sm", children: "Save Order" }) })] }), l.jsx(P6, { seriesDetails: e, editSeason: o, setEditSession: i })] }); };
function _6(e) { return de({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2zm0 16H5V7h14v12zm-7-8.5c1.84 0 3.48.96 4.34 2.5-.86 1.54-2.5 2.5-4.34 2.5s-3.48-.96-4.34-2.5c.86-1.54 2.5-2.5 4.34-2.5M12 9c-2.73 0-5.06 1.66-6 4 .94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4zm0 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" }, child: [] }] })(e); }
const T6 = () => { const [e, t] = v.useState({ episode_no: "", season_no: "", episode_name: "", isEdit: !1, url: "", episode_order: 0, subtitles_url: "" }), [n, r] = v.useState([]), o = Et(m => m.callApi), i = Zt(), s = ye(), a = kn(), { season: c, seriesDetails: u } = i.state; v.useEffect(() => { r(c.episodes), Iw(u.movie_id).then(m => { if (m.success) {
    const b = m.details[0].seasons.filter(x => x.season_id === c.season_id);
    console.log(b[0].episodes), b.length === 1 && r(b[0].episodes);
} }); }, [o]); const d = m => { const b = m.target.id; let x; b === "isEdit" ? x = m.target.checked : x = m.target.value, t(g => ({ ...g, [b]: x })); }, f = m => { m.preventDefault(); const b = JSON.stringify({ epidodeDetails: e, season: c }); console.log({ epidodeDetails: e }), E6(b).then(x => { x.success && (D.fire(x.msg), a(Po(!o)), t(g => ({ ...g, episode_no: g.episode_no + 1, episode_name: "", isEdit: !1, url: "", episode_order: 0, subtitles_url: "" }))); }); }, p = m => { m.preventDefault(); const { episode_no: b, season_no: x } = e, g = `https://api.themoviedb.org/3/tv/${u.movie_id}/season/${x}/episode/${b}?api_key=${pd}&language=en-US`; Q.get(g).then(y => { if (y.status === 200) {
    const { name: S, overview: C, runtime: N, still_path: E, id: P } = y.data;
    t(M => ({ ...M, episode_name: S, overview: C, runtime: N, still_path: E, id: P }));
} }); }, w = m => { D.fire({ title: `Are you sure you want to delete ${m.episode_name} from ${u.title}?`, showCancelButton: !0, confirmButtonText: "Delete" }).then(b => { b.isConfirmed && d6(m.episode_id).then(x => { x.success ? (D.fire("Episode deleted successfully"), a(Po(!o))) : D.fire(x.msg); }); }); }; return l.jsxs("div", { className: "w-100 bg-light p-4", children: [l.jsxs("h3", { children: ["Episodes For ", u == null ? void 0 : u.title, " - ", c == null ? void 0 : c.season_name] }), l.jsxs("div", { className: "bg-white m-4 p-4", children: [l.jsxs("div", { className: "d-flex justify-content-between", children: [l.jsx("button", { onClick: () => s(-1), className: "btn btn-success btn-sm me-4", children: "Back To Seasons" }), l.jsxs("div", { className: "form-check form-switch d-flex gap-2 align-items-center", children: [l.jsx("input", { className: "form-check-input fs-4", onChange: d, checked: e.isEdit, type: "checkbox", role: "switch", id: "isEdit" }), l.jsx("label", { className: "form-check-label fw-4 text-warning", htmlFor: "isEdit", children: "Edit Video" })] })] }), l.jsxs("div", { className: "mt-4", children: [l.jsx("h5", { className: "w-100 bg-info p-1", children: "Add Episode" }), l.jsx("form", { onSubmit: p, children: l.jsxs("div", { className: "d-flex gap-5 justify-content-between align-items-center bg-secondary-subtle px-4 py-2 my-4", children: [l.jsxs("div", { className: "mb-3", children: [l.jsx("label", { htmlFor: "season_no", className: "form-label ms-2", children: "Season number" }), l.jsx("input", { type: "number", onChange: d, required: !0, className: "form-control", id: "season_no", placeholder: "1" })] }), l.jsxs("div", { className: "mb-3", children: [l.jsx("label", { htmlFor: "episode_no", className: "form-label ms-2", children: "Episode number" }), l.jsx("input", { type: "number", onChange: d, required: !0, className: "form-control", id: "episode_no", placeholder: "1" })] }), l.jsx("div", { children: l.jsx("button", { type: "submit", className: "btn btn-success btn-sm me-4", children: "Fetch" }) })] }) }), l.jsxs("form", { onSubmit: f, children: [l.jsxs("div", { className: "mb-3", children: [l.jsx("label", { htmlFor: "episode_name", className: "form-label ms-2", children: "Episode Name" }), l.jsx("input", { type: "text", onChange: d, value: e.episode_name, className: "form-control", id: "episode_name", placeholder: "Episode 1", required: !0 })] }), l.jsxs("div", { className: "mb-3", children: [l.jsx("label", { htmlFor: "episode_order", className: "form-label ms-2", children: "Episode Order" }), l.jsx("input", { type: "number", onChange: d, value: e.episode_order, className: "form-control", id: "episode_order", placeholder: "1", required: !0 })] }), l.jsxs("div", { className: "mb-3", children: [l.jsx("label", { htmlFor: "formFile", className: "form-label ms-2", children: "Select Thumbnail" }), l.jsx("input", { onChange: d, className: "form-control", type: "file", id: "formFile" })] }), l.jsxs("div", { className: "mb-3", children: [l.jsx("label", { htmlFor: "url", className: "form-label ms-2", children: "URL" }), l.jsx("input", { type: "text", onChange: d, value: e.url, required: !0, className: "form-control", id: "url", placeholder: "https://series/hello" })] }), l.jsxs("div", { className: "mb-3", children: [l.jsx("label", { htmlFor: "subtitles_url", className: "form-label ms-2", children: "Subtitles Url" }), l.jsx("input", { type: "text", onChange: d, value: e.subtitles_url, className: "form-control", id: "subtitles_url", placeholder: "https://series/hello" })] }), e.isEdit ? l.jsxs("button", { type: "submit", className: "btn btn-warning btn-sm", children: [l.jsx(Va, {}), " Edit"] }) : l.jsx("button", { type: "submit", className: "btn btn-success btn-sm", children: "+ Add" })] }), l.jsx("h5", { className: "w-100 bg-info p-1 mt-4", children: "Episode List" }), l.jsxs("table", { className: "table", children: [l.jsx("thead", { children: l.jsxs("tr", { children: [l.jsx("th", { scope: "col", children: "Thumbnail" }), l.jsx("th", { scope: "col", children: "Episode Name" }), l.jsx("th", { scope: "col", children: "Order" }), l.jsx("th", { scope: "col", children: "Url" }), l.jsx("th", { scope: "col", children: "Subtitles Url" }), l.jsx("th", { scope: "col", children: "Action" })] }) }), l.jsx("tbody", { children: n.map((m, b) => l.jsxs("tr", { children: [l.jsx("th", { scope: "row", children: l.jsx("img", { src: `https://image.tmdb.org/t/p/w92/${m.thumbnail_path}`, alt: "" }) }), l.jsx("td", { children: m.episode_name }), l.jsx("td", { children: l.jsx("input", { type: "number", onChange: () => { }, value: m.episode_order, style: { width: "60px" } }) }), l.jsx("td", { children: m.url }), l.jsx("td", { children: m.subtitles_url }), l.jsx("td", { children: l.jsxs("span", { className: "d-flex", children: [l.jsx(Va, { size: 32, onClick: () => t(x => ({ ...x, ...m, isEdit: !0 })), role: "button", className: "text-warning me-2 border border-warning p-1" }), l.jsx(ge, { to: `/preview?movieUrl=${encodeURIComponent(m.url || "")}&subtitlesUrl=${m.subtitles_url}`, target: "_blank", children: l.jsx(_6, { size: 32, className: "text-success me-2 border border-success p-1" }) }), l.jsx(If, { onClick: () => w(m), role: "button", size: 32, className: "text-danger border border-danger p-1" })] }) })] }, b)) })] })] }), l.jsx("div", { className: "w-100 text-end", children: l.jsx("button", { className: "btn btn-success btn-sm me-4", children: "Save Order" }) })] })] }); }, O6 = () => { const [e, t] = v.useState(null), n = sessionStorage.getItem("adminToken"), r = [{ name: "Dashboard", icon: l.jsx(rw, {}), href: "/admin/dashboard" }, { name: "Movie", icon: l.jsx(jN, {}), sublinks: [{ name: "New Movie", href: "/admin/new-movie" }, { name: "All Movies", href: "/admin/all-movies" }] }, { name: "Series", icon: l.jsx(_N, {}), sublinks: [{ name: "New TV Series", href: "/admin/new-series" }, { name: "All TV Series", href: "/admin/all-series" }] }, { name: "Clients", icon: l.jsx(TN, {}), sublinks: [{ name: "Add Client", href: "/admin/add-client" }, { name: "All Clients", href: "/admin/all-clients" }] }, { name: "Movie Request", icon: l.jsx(Em, {}), href: "/admin/movie-request" }, { name: "Report", icon: l.jsx(Em, {}), href: "/admin/report" }, { name: "Subscription", icon: l.jsx(RN, {}), href: "/admin/subscription" }, { name: "Notification", icon: l.jsx(Cm, {}), href: "/admin/notification" }, { name: "Log Out", icon: l.jsx(Cm, {}), href: "/admin/logout" }]; return l.jsxs("div", { className: "d-flex ", style: { position: "relative" }, children: [n && l.jsxs("div", { className: "bg-dark text-light vh-100 p-3 a-sidebar", style: { minWidth: "250px" }, children: [l.jsx("div", { className: "text-center mb-4", children: l.jsx("img", { className: "nav__logo", src: vN, alt: "jap-logo" }) }), l.jsx("ul", { className: "list-unstyled pt-5", children: r.map((o, i) => l.jsxs("li", { className: "mb-3", children: [o != null && o.href ? l.jsxs(ge, { to: o.href || "#", className: "nav-link text-light text-decoration-none fs-5 fw-bolder text-uppercase", onClick: () => o.sublinks && t(e === o.name ? null : o.name), children: [o.icon, " ", l.jsx("span", { className: "ms-2", children: o.name })] }) : l.jsxs("span", { className: "nav-link text-light text-decoration-none fs-5 fw-bolder text-uppercase", onClick: () => o.sublinks && t(e === o.name ? null : o.name), children: [o.icon, " ", l.jsx("span", { className: "ms-2", children: o.name })] }), o.sublinks && e === o.name && l.jsx("ul", { className: "list-unstyled ms-3 fs-4 text-uppercase", children: o.sublinks.map((s, a) => l.jsx("li", { children: l.jsx(ge, { to: s.href, className: "nav-link text-light text-decoration-none", children: s.name }) }, a)) })] }, i)) })] }), l.jsx(Tb, {})] }); }, L6 = async (e) => await D6("admin/videos/movie-request-status", "patch", e), D6 = async (e, t, n) => { const r = sessionStorage.getItem("adminToken"); if (r !== null)
    var o = JSON.parse(r);
else
    D.fire({ title: "Token not Found", text: "Log out and log in then try again.", icon: "warning" }); let i = { method: t, maxBodyLength: 1 / 0, url: `${dt}/${e}`, headers: { "Content-Type": "application/json", Authorization: `Bear ${o}` }, data: n }; return await Q.request(i).then(s => s.data.success ? { success: !0, msg: s.data.msg, details: s.data.details } : (D.fire({ text: `${s.data.msg}`, showCloseButton: !0, showConfirmButton: !1, animation: !1, color: "#dc3545", padding: "5px" }), { success: !1, msg: s.data.msg, details: [] })).catch(s => { var a, c; return console.log(s), D.fire({ text: `${((a = s.response.data) == null ? void 0 : a.msg) || "Server Side Error"}`, showCloseButton: !0, showConfirmButton: !1, animation: !1, color: "#dc3545", padding: "0px 0px 10px 0px" }), { success: !1, msg: (c = s.response.data) == null ? void 0 : c.msg, details: [] }; }); }, M6 = () => { const e = "Movie Request", [t, n] = v.useState([]), [r, o] = v.useState(!1), [i, s] = v.useState(), a = Et(w => w.callApi), [c, u] = v.useState([]), d = t.filter(w => w.status !== "trash"), f = [{ name: "Movie Name", selector: w => w.movie_name, sortable: !0 }, { name: "Type", selector: w => w.movie_type, sortable: !0 }, { name: "Description", selector: w => w.description }, { name: "Request Date", selector: w => new Date(w.request_date).toLocaleDateString(), sortable: !0 }, { name: "Client Name", selector: w => w.name, sortable: !0 }, { name: "Phone", selector: w => w.phone, sortable: !0 }, { name: "Apartment", selector: w => w.apartment, sortable: !0 }, { name: "Status", selector: w => w.status, sortable: !0 }, { name: "Update Status", cell: w => l.jsx(l.Fragment, { children: l.jsxs("select", { onChange: m => p(m, w), className: "form-select", "aria-label": "Default select example", children: [l.jsx("option", { selected: w.status === "pending", value: "pending", children: "Pending" }), l.jsx("option", { selected: w.status === "inProgress", value: "inProgress", children: "InProgress" }), l.jsx("option", { selected: w.status === "uploaded", value: "uploaded", children: "Uploaded" }), l.jsx("option", { selected: w.status === "cancelled", value: "cancelled", children: "Cancel" })] }) }) }]; v.useEffect(() => { n(c), s(f); }, [r, c]), v.useEffect(() => { j6("").then(w => { w.success && (console.log(w.details), u(w.details)); }); }, [a]); const p = (w, m) => { const b = w.target.value; D.fire({ title: "Are you sure?", text: `Update ${m.movie_name} status to ${b}.`, icon: "warning", showCancelButton: !0, confirmButtonColor: "#3085d6", cancelButtonColor: "#d33", confirmButtonText: "Yes, Update" }).then(x => { if (x.isConfirmed) {
    const g = JSON.stringify({ status: b, row: m });
    L6(g).then(h => { console.log(h), h.success && D.fire({ title: "Updated", text: h.msg, icon: "success" }); });
} }); }; return l.jsxs("div", { className: "bg-light w-100 px-2 py-4", children: [l.jsx("h3", { children: "Movie Requests Management" }), l.jsx("div", { children: l.jsx("div", { className: "container-fluid", children: l.jsx("div", { className: "row my-3", children: l.jsx("div", { className: "col-12", children: l.jsxs("div", { className: "card", style: { borderTop: "2px solid #4723d9" }, children: [l.jsx("div", { className: "card-header d-flex justify-content-between border-bottom pb-1", children: l.jsx("h4", { children: e }) }), l.jsx("div", { className: "card-body", children: l.jsx(Wf, { search: "name", title_btn: "All Tv Series", title: e, apidata: d, columns: i }) })] }) }) }) }) })] }); }, Dc = () => l.jsxs("div", { className: "p-4 w-100 bg-light", children: [l.jsx("h1", { children: "Coming Soon..." }), l.jsx("p", { children: "Kuwa Mpole 😊😊😊" })] }), B6 = [{ name: "email", label: "Email", type: "email", placeholder: "Enter your email", required: !1 }, { name: "house_number", label: "House Number", type: "text", placeholder: "House Number", required: !1 }, { name: "apartment", label: "Apartment", type: "text", placeholder: "Apartment", required: !1 }, { name: "location", label: "Location", type: "text", placeholder: "Location", required: !0 }, { name: "ip", label: "IP Address", type: "text", placeholder: "IP Address", required: !1 }, { name: "mac", label: "MAC Address", type: "text", placeholder: "MAC Address", required: !0 }, { name: "expiry", label: "Expiry Date", type: "datetime-local", placeholder: "", required: !0 }, { name: "name", label: "Name", type: "text", placeholder: "Full Name", required: !0 }, { name: "account", label: "Account(JTS...)", type: "text", placeholder: "Account", required: !0 }, { name: "account2", label: "Account 2(Name)", type: "text", placeholder: "Account 2", required: !0 }, { name: "password", label: "Password(For Movies)", type: "text", placeholder: "JAP_movies", required: !0 }, { name: "phone", label: "Phone Number", type: "number", placeholder: "Phone Number", prefix: "+254", required: !0 }], I6 = ({}) => { ye(), v.useState(!1); const [e, t] = v.useState("viewer"), [n, r] = v.useState({ remember_me: !0, password: "JAP_movies", phone: "" }); v.useEffect(() => { r(s => ({ ...s, user_type: e })); }, [e]); const o = s => { const a = s.target.name, c = s.target.value; r(a !== "remember_me" ? u => ({ ...u, [a]: c }) : u => ({ ...u, [a]: !u.remember_me })); }, i = async (s) => { s.preventDefault(); const a = "254" + n.phone; let c = JSON.stringify({ ...n, phone: a, auth_with: "app" }), u = { method: "post", maxBodyLength: 1 / 0, url: `${dt}/user/signup`, headers: { "Content-Type": "application/json" }, data: c }; Q.request(u).then(d => { d.data.msg === "User Registered" ? D.fire("Client Added") : D.fire({ text: `${d.data.msg}`, showCloseButton: !0, showConfirmButton: !1, animation: !1, color: "#dc3545", padding: "5px" }); }).catch(d => { console.log(d), D.fire({ text: "Server Side Error", showCloseButton: !0, showConfirmButton: !1, animation: !1, color: "#dc3545", padding: "5px" }); }); }; return l.jsx("div", { className: "p-md-4 bg-light w-100", children: l.jsx("div", { className: "container", children: l.jsx("div", { className: "row justify-content-center align-items-center", children: l.jsx("div", { className: "", children: l.jsxs("div", { className: "form-box", children: [l.jsx("h4", { children: "Add New Client" }), l.jsx("div", { className: "tab-content", children: l.jsxs("div", { className: "tab-pane fade show active", id: "personal", role: "tabpanel", "aria-labelledby": "personal-tab", children: [l.jsxs("form", { onSubmit: i, className: "d-flex justify-content-between flex-wrap", children: [B6.map((s, a) => l.jsxs("div", { className: "mb-3 col-12 col-md-5", children: [l.jsx("label", { htmlFor: s.name, className: "form-label ms-2", children: s.label }), l.jsxs("div", { className: s.prefix ? "input-group" : "", children: [s.prefix && l.jsx("span", { className: "input-group-text", children: s.prefix }), l.jsx("input", { onChange: o, required: s.required, type: s.type, name: s.name, id: s.name, className: "form-control", placeholder: s.placeholder })] })] }, a)), l.jsx("div", { className: "btn-area py-2 col-12 col-md-5", children: l.jsx("button", { type: "submit", className: "cmn-btn btn btn-primary col-12", children: "Add Client" }) })] }), l.jsx("div", { className: "privacy text-dark", children: l.jsxs("p", { children: ["By registering you accept our ", l.jsx(ge, { className: "a-link", to: "terms-conditions.html", children: "Terms & Conditions" }), " and ", l.jsx(ge, { className: "a-link", to: "privacy-policy.html", children: "Privacy Policy" })] }) })] }) })] }) }) }) }) }); }, $6 = () => l.jsx("div", {}), F6 = async (e, t) => await U6("user/movie-request", "post", e, t), U6 = async (e, t, n, r) => { const o = localStorage.getItem("viewerToken"); if (o !== null)
    var i = JSON.parse(o);
else
    return r("/"), { success: !1, msg: "Token not found. Try to login again", details: [] }; let s = { method: t, maxBodyLength: 1 / 0, url: `${dt}/${e}`, headers: { "Content-Type": "application/json", Authorization: `Bear ${i}` }, data: n }; return await Q.request(s).then(a => a.data.success ? { success: !0, msg: a.data.msg, details: a.data.details } : (D.fire({ text: `${a.data.msg}`, showCloseButton: !0, showConfirmButton: !1, animation: !1, color: "#dc3545", padding: "5px" }), { success: !1, msg: a.data.msg, details: [] })).catch(a => { var c, u; return console.log(a), D.fire({ text: `${((c = a.response.data) == null ? void 0 : c.msg) || "Server Side Error"}`, showCloseButton: !0, showConfirmButton: !1, animation: !1, color: "#dc3545", padding: "0px 0px 10px 0px" }), { success: !1, msg: (u = a.response.data) == null ? void 0 : u.msg, details: [] }; }); }, z6 = () => { const e = ye(), [t, n] = v.useState({ movieName: "", movieType: null, description: "", notify: !1 }), r = s => { const { id: a, value: c, type: u } = s.target, d = u === "checkbox" ? s.target.checked : void 0; n(f => ({ ...f, [a]: u === "checkbox" ? d : c })); }, o = s => { n(a => ({ ...a, movieType: s.target.id })); }, i = s => { s.preventDefault(); const a = JSON.stringify(t); F6(a, e).then(c => { c.success && (D.fire("We have received your request. We are working on it."), n({ movieName: "", movieType: null, description: "", notify: !1 })); }); }; return l.jsx("div", { className: "d-flex justify-content-center align-items-center text-light", style: { height: "100vh" }, children: l.jsxs("div", { className: "col-11 col-sm-8 col-md-7 col-lg-5 bg-dark px-4 pt-3 pb-5 rounded", children: [l.jsxs("div", { children: [l.jsx("h1", { className: "display-4 text-info", children: "Request a Movie" }), l.jsx("p", { children: "Your Request is our demand" })] }), l.jsxs("form", { onSubmit: i, children: [l.jsxs("div", { className: "mb-3", children: [l.jsx("label", { htmlFor: "movieName", className: "form-label fs-5", children: "Movie Name" }), l.jsx("input", { type: "text", className: "form-control", id: "movieName", value: t.movieName, onChange: r, required: !0 })] }), l.jsxs("div", { className: "mb-3", children: [l.jsx("p", { className: "fs-5 mb-0 pb-0", children: "Movie Type" }), l.jsxs("div", { className: "form-check", children: [l.jsx("input", { className: "form-check-input", type: "radio", name: "movie_type", id: "movie", checked: t.movieType === "movie", onChange: o, required: !0 }), l.jsx("label", { className: "form-check-label", htmlFor: "movie", children: "Single Movie" })] }), l.jsxs("div", { className: "form-check", children: [l.jsx("input", { className: "form-check-input", type: "radio", name: "movie_type", id: "series", checked: t.movieType === "series", onChange: o, required: !0 }), l.jsx("label", { className: "form-check-label", htmlFor: "series", children: "Series (Tv Show)" })] })] }), l.jsxs("div", { className: "mb-3", children: [l.jsx("label", { htmlFor: "description", className: "form-label fs-5", children: "Description (Optional)" }), l.jsx("textarea", { className: "form-control", id: "description", rows: 3, value: t.description, onChange: r })] }), l.jsxs("div", { className: "mb-5 form-check", children: [l.jsx("input", { type: "checkbox", className: "form-check-input", id: "notify", checked: t.notify, onChange: r }), l.jsx("label", { className: "form-check-label", htmlFor: "notify", children: "Notify me when the movie is uploaded" })] }), l.jsxs("div", { className: "d-flex justify-content-between", children: [l.jsx("button", { type: "submit", className: "btn btn-primary", children: "Request" }), l.jsx("button", { type: "button", onClick: () => e(-1), className: "btn btn-warning", children: "Back" })] })] })] }) }); }, H6 = () => { const [e, t] = v.useState([]), [n, r] = v.useState([]), [o, i] = v.useState({ count: 1, id: 0 }), s = Et(d => d.seriesListDetails), a = Et(d => d.movieListDetails); kn(); const c = ye(); v.useEffect(() => { s.length && a.length ? (t(s.concat(a)), r(s.concat(a))) : (is("videos/get-movies", "", c).then(d => { d.success && (t(d.details), r(d.details)); }), Of("videos/get-series", "", c).then(d => { d.success && (t(d.details), console.log(d.details)); })); }, []); const u = d => { const f = d.target.value; console.log(e), r(e.filter(p => p.title.toLocaleLowerCase().includes(f.toLocaleLowerCase()))), console.log(f); }; return l.jsxs("div", { className: "d-flex ", style: { minHeight: "100vh" }, children: [l.jsxs("div", { className: "col-4 p-4", children: [l.jsx("div", { className: "mb-3 ", children: l.jsx("input", { type: "text", onChange: u, placeholder: "Search Movie", className: "form-control", id: "search" }) }), l.jsx("div", { children: n.map((d, f) => l.jsx("h6", { className: "display-6 text-secondary text-truncate", children: d.title })) })] }), l.jsx("div", { className: "d-flex flex-wrap pl-3 py-4", children: n.length ? n.map((d, f) => l.jsx("div", { role: "button", children: l.jsx(nw, { movie: d, clickCount: { count: 1, id: d.video_id }, navigate: c, setClickCount: i, setHoveredMovie: () => { }, setIsVideoReady: () => { }, handleMovieHover: () => { }, isLargeRow: !0 }, f) })) : l.jsx("div", { className: "text-light d-flex justify-content-center align-items-center ", children: l.jsxs("div", { children: [l.jsx("p", { className: "display-5", children: "Apologies!" }), l.jsxs("div", { className: " col-10", children: [l.jsx("p", { className: "display-6", children: "It looks like we do not have the movie yet." }), l.jsx("p", { className: "display-6", children: "But no worries, let us know and will upload it for you." })] }), l.jsxs("div", { className: "mt-5", children: [l.jsx(ge, { to: "/viewer/request-movie", type: "button", className: " btn btn-info me-5", children: "Request Movie" }), l.jsx(ge, { to: "/viewer/dashboard", type: "button", className: " btn btn-warning", children: "Continue Watching" })] })] }) }) })] }); };
function V6() { const [e, t] = v.useState(!1); return l.jsx("div", { className: "App position-relative", children: l.jsxs(Lb, { children: [l.jsx(ee, { path: "viewer/dashboard", element: l.jsx(GN, {}) }), l.jsx(ee, { path: "watch/:id", element: l.jsx(BN, {}) }), l.jsx(ee, { path: "watch/episodes-more/:id", element: l.jsx(KN, {}) }), l.jsx(ee, { path: "viewer/request-movie", element: l.jsx(z6, {}) }), l.jsx(ee, { path: "viewer/search-movie", element: l.jsx(H6, {}) }), l.jsx(ee, { path: "/", element: l.jsx(Nc, { setIsLogin: t, prevelages: "viewer" }) }), l.jsx(ee, { path: "login/:urltoken", element: l.jsx(Nc, { setIsLogin: t, prevelages: "viewer" }) }), l.jsx(ee, { path: "viewer/signup", element: l.jsx(Sm, { prevelages: "viewer" }) }), l.jsx(ee, { path: "forgot-password", element: l.jsx(AN, {}) }), l.jsx(ee, { path: "viewer/reset-pass", element: l.jsx(kN, {}) }), l.jsx(ee, { path: "change-pass", element: l.jsx(PN, { setIsLogin: t }) }), l.jsx(ee, { path: "preview", element: l.jsx(y6, {}) }), l.jsxs(ee, { path: "/admin", element: l.jsx(O6, {}), children: [l.jsx(ee, { path: "dashboard", element: l.jsx(qN, {}) }), l.jsx(ee, { path: "new-movie", element: l.jsx(Ym, { type: "movie" }) }), l.jsx(ee, { path: "all-movies", element: l.jsx(g6, {}) }), l.jsx(ee, { path: "new-series", element: l.jsx(Ym, { type: "series" }) }), l.jsx(ee, { path: "all-series", element: l.jsx(m6, {}) }), l.jsx(ee, { path: "movie-upload", element: l.jsx(N6, {}) }), l.jsx(ee, { path: "add-client", element: l.jsx(I6, {}) }), l.jsx(ee, { path: "all-clients", element: l.jsx($6, {}) }), l.jsx(ee, { path: "seasons-manage", element: l.jsx(R6, {}) }), l.jsx(ee, { path: "episodes-manage", element: l.jsx(T6, {}) }), l.jsx(ee, { path: "movie-request", element: l.jsx(M6, {}) }), l.jsx(ee, { path: "report", element: l.jsx(Dc, {}) }), l.jsx(ee, { path: "subscription", element: l.jsx(Dc, {}) }), l.jsx(ee, { path: "notification", element: l.jsx(Dc, {}) }), l.jsx(ee, { path: "signup", element: l.jsx(Sm, { prevelages: "admin" }) }), l.jsx(ee, { path: "login", element: l.jsx(Nc, { setIsLogin: t, prevelages: "admin" }) }), l.jsx(ee, { path: "logout", element: l.jsx(v6, {}) })] })] }) }); }
const Fw = jl({ name: "salesReport", initialState: !1, reducers: { setRerender: e => !e } });
Fw.actions;
const W6 = Fw.reducer, G6 = ok({ reducer: { movieListDetails: yk, seriesListDetails: oN, callApi: h6, rerender: W6 } });
Bc.createRoot(document.getElementById("root")).render(l.jsx(B.StrictMode, { children: l.jsx(Ub, { children: l.jsx(t4, { store: G6, children: l.jsx(V6, {}) }) }) }));
//# sourceMappingURL=index-DYJgj80N.js.map