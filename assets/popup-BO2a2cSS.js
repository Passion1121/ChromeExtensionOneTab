(function() {
    const n = document.createElement("link").relList;
    if (n && n.supports && n.supports("modulepreload")) return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]')) t(a);
    new MutationObserver(a => {
        for (const l of a)
            if (l.type === "childList")
                for (const o of l.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && t(o)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function r(a) {
        const l = {};
        return a.integrity && (l.integrity = a.integrity), a.referrerPolicy && (l.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? l.credentials = "include" : a.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin", l
    }

    function t(a) {
        if (a.ep) return;
        a.ep = !0;
        const l = r(a);
        fetch(a.href, l)
    }
})();
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const t of document.querySelectorAll('link[rel="modulepreload"]')) r(t);
    new MutationObserver(t => {
        for (const a of t)
            if (a.type === "childList")
                for (const l of a.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && r(l)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(t) {
        const a = {};
        return t.integrity && (a.integrity = t.integrity), t.referrerPolicy && (a.referrerPolicy = t.referrerPolicy), t.crossOrigin === "use-credentials" ? a.credentials = "include" : t.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a
    }

    function r(t) {
        if (t.ep) return;
        t.ep = !0;
        const a = n(t);
        fetch(t.href, a)
    }
})();

function tc(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Wu = {
        exports: {}
    },
    la = {},
    Hu = {
        exports: {}
    },
    D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jr = Symbol.for("react.element"),
    ac = Symbol.for("react.portal"),
    lc = Symbol.for("react.fragment"),
    oc = Symbol.for("react.strict_mode"),
    uc = Symbol.for("react.profiler"),
    ic = Symbol.for("react.provider"),
    sc = Symbol.for("react.context"),
    cc = Symbol.for("react.forward_ref"),
    fc = Symbol.for("react.suspense"),
    dc = Symbol.for("react.memo"),
    pc = Symbol.for("react.lazy"),
    Fo = Symbol.iterator;

function mc(e) {
    return e === null || typeof e != "object" ? null : (e = Fo && e[Fo] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Qu = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    qu = Object.assign,
    Ku = {};

function dr(e, n, r) {
    this.props = e, this.context = n, this.refs = Ku, this.updater = r || Qu
}
dr.prototype.isReactComponent = {};
dr.prototype.setState = function(e, n) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, n, "setState")
};
dr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Yu() {}
Yu.prototype = dr.prototype;

function $l(e, n, r) {
    this.props = e, this.context = n, this.refs = Ku, this.updater = r || Qu
}
var Al = $l.prototype = new Yu;
Al.constructor = $l;
qu(Al, dr.prototype);
Al.isPureReactComponent = !0;
var Oo = Array.isArray,
    Xu = Object.prototype.hasOwnProperty,
    Vl = {
        current: null
    },
    Gu = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Zu(e, n, r) {
    var t, a = {},
        l = null,
        o = null;
    if (n != null)
        for (t in n.ref !== void 0 && (o = n.ref), n.key !== void 0 && (l = "" + n.key), n) Xu.call(n, t) && !Gu.hasOwnProperty(t) && (a[t] = n[t]);
    var u = arguments.length - 2;
    if (u === 1) a.children = r;
    else if (1 < u) {
        for (var i = Array(u), f = 0; f < u; f++) i[f] = arguments[f + 2];
        a.children = i
    }
    if (e && e.defaultProps)
        for (t in u = e.defaultProps, u) a[t] === void 0 && (a[t] = u[t]);
    return {
        $$typeof: Jr,
        type: e,
        key: l,
        ref: o,
        props: a,
        _owner: Vl.current
    }
}

function hc(e, n) {
    return {
        $$typeof: Jr,
        type: e.type,
        key: n,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function Bl(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Jr
}

function gc(e) {
    var n = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(r) {
        return n[r]
    })
}
var Io = /\/+/g;

function wa(e, n) {
    return typeof e == "object" && e !== null && e.key != null ? gc("" + e.key) : n.toString(36)
}

function xt(e, n, r, t, a) {
    var l = typeof e;
    (l === "undefined" || l === "boolean") && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else switch (l) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case Jr:
                case ac:
                    o = !0
            }
    }
    if (o) return o = e, a = a(o), e = t === "" ? "." + wa(o, 0) : t, Oo(a) ? (r = "", e != null && (r = e.replace(Io, "$&/") + "/"), xt(a, n, r, "", function(f) {
        return f
    })) : a != null && (Bl(a) && (a = hc(a, r + (!a.key || o && o.key === a.key ? "" : ("" + a.key).replace(Io, "$&/") + "/") + e)), n.push(a)), 1;
    if (o = 0, t = t === "" ? "." : t + ":", Oo(e))
        for (var u = 0; u < e.length; u++) {
            l = e[u];
            var i = t + wa(l, u);
            o += xt(l, n, r, i, a)
        } else if (i = mc(e), typeof i == "function")
            for (e = i.call(e), u = 0; !(l = e.next()).done;) l = l.value, i = t + wa(l, u++), o += xt(l, n, r, i, a);
        else if (l === "object") throw n = String(e), Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
    return o
}

function ot(e, n, r) {
    if (e == null) return e;
    var t = [],
        a = 0;
    return xt(e, t, "", "", function(l) {
        return n.call(r, l, a++)
    }), t
}

function vc(e) {
    if (e._status === -1) {
        var n = e._result;
        n = n(), n.then(function(r) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = r)
        }, function(r) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = r)
        }), e._status === -1 && (e._status = 0, e._result = n)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var fe = {
        current: null
    },
    Et = {
        transition: null
    },
    yc = {
        ReactCurrentDispatcher: fe,
        ReactCurrentBatchConfig: Et,
        ReactCurrentOwner: Vl
    };

function Ju() {
    throw Error("act(...) is not supported in production builds of React.")
}
D.Children = {
    map: ot,
    forEach: function(e, n, r) {
        ot(e, function() {
            n.apply(this, arguments)
        }, r)
    },
    count: function(e) {
        var n = 0;
        return ot(e, function() {
            n++
        }), n
    },
    toArray: function(e) {
        return ot(e, function(n) {
            return n
        }) || []
    },
    only: function(e) {
        if (!Bl(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
D.Component = dr;
D.Fragment = lc;
D.Profiler = uc;
D.PureComponent = $l;
D.StrictMode = oc;
D.Suspense = fc;
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yc;
D.act = Ju;
D.cloneElement = function(e, n, r) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var t = qu({}, e.props),
        a = e.key,
        l = e.ref,
        o = e._owner;
    if (n != null) {
        if (n.ref !== void 0 && (l = n.ref, o = Vl.current), n.key !== void 0 && (a = "" + n.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
        for (i in n) Xu.call(n, i) && !Gu.hasOwnProperty(i) && (t[i] = n[i] === void 0 && u !== void 0 ? u[i] : n[i])
    }
    var i = arguments.length - 2;
    if (i === 1) t.children = r;
    else if (1 < i) {
        u = Array(i);
        for (var f = 0; f < i; f++) u[f] = arguments[f + 2];
        t.children = u
    }
    return {
        $$typeof: Jr,
        type: e.type,
        key: a,
        ref: l,
        props: t,
        _owner: o
    }
};
D.createContext = function(e) {
    return e = {
        $$typeof: sc,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: ic,
        _context: e
    }, e.Consumer = e
};
D.createElement = Zu;
D.createFactory = function(e) {
    var n = Zu.bind(null, e);
    return n.type = e, n
};
D.createRef = function() {
    return {
        current: null
    }
};
D.forwardRef = function(e) {
    return {
        $$typeof: cc,
        render: e
    }
};
D.isValidElement = Bl;
D.lazy = function(e) {
    return {
        $$typeof: pc,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: vc
    }
};
D.memo = function(e, n) {
    return {
        $$typeof: dc,
        type: e,
        compare: n === void 0 ? null : n
    }
};
D.startTransition = function(e) {
    var n = Et.transition;
    Et.transition = {};
    try {
        e()
    } finally {
        Et.transition = n
    }
};
D.unstable_act = Ju;
D.useCallback = function(e, n) {
    return fe.current.useCallback(e, n)
};
D.useContext = function(e) {
    return fe.current.useContext(e)
};
D.useDebugValue = function() {};
D.useDeferredValue = function(e) {
    return fe.current.useDeferredValue(e)
};
D.useEffect = function(e, n) {
    return fe.current.useEffect(e, n)
};
D.useId = function() {
    return fe.current.useId()
};
D.useImperativeHandle = function(e, n, r) {
    return fe.current.useImperativeHandle(e, n, r)
};
D.useInsertionEffect = function(e, n) {
    return fe.current.useInsertionEffect(e, n)
};
D.useLayoutEffect = function(e, n) {
    return fe.current.useLayoutEffect(e, n)
};
D.useMemo = function(e, n) {
    return fe.current.useMemo(e, n)
};
D.useReducer = function(e, n, r) {
    return fe.current.useReducer(e, n, r)
};
D.useRef = function(e) {
    return fe.current.useRef(e)
};
D.useState = function(e) {
    return fe.current.useState(e)
};
D.useSyncExternalStore = function(e, n, r) {
    return fe.current.useSyncExternalStore(e, n, r)
};
D.useTransition = function() {
    return fe.current.useTransition()
};
D.version = "18.3.1";
Hu.exports = D;
var Y = Hu.exports;
const bc = tc(Y);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kc = Y,
    wc = Symbol.for("react.element"),
    Sc = Symbol.for("react.fragment"),
    xc = Object.prototype.hasOwnProperty,
    Ec = kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    _c = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function ei(e, n, r) {
    var t, a = {},
        l = null,
        o = null;
    r !== void 0 && (l = "" + r), n.key !== void 0 && (l = "" + n.key), n.ref !== void 0 && (o = n.ref);
    for (t in n) xc.call(n, t) && !_c.hasOwnProperty(t) && (a[t] = n[t]);
    if (e && e.defaultProps)
        for (t in n = e.defaultProps, n) a[t] === void 0 && (a[t] = n[t]);
    return {
        $$typeof: wc,
        type: e,
        key: l,
        ref: o,
        props: a,
        _owner: Ec.current
    }
}
la.Fragment = Sc;
la.jsx = ei;
la.jsxs = ei;
Wu.exports = la;
var T = Wu.exports,
    Ka = {},
    ni = {
        exports: {}
    },
    Se = {},
    ri = {
        exports: {}
    },
    ti = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function n(E, z) {
        var m = E.length;
        E.push(z);
        e: for (; 0 < m;) {
            var C = m - 1 >>> 1,
                S = E[C];
            if (0 < a(S, z)) E[C] = z, E[m] = S, m = C;
            else break e
        }
    }

    function r(E) {
        return E.length === 0 ? null : E[0]
    }

    function t(E) {
        if (E.length === 0) return null;
        var z = E[0],
            m = E.pop();
        if (m !== z) {
            E[0] = m;
            e: for (var C = 0, S = E.length, M = S >>> 1; C < M;) {
                var j = 2 * (C + 1) - 1,
                    en = E[j],
                    xn = j + 1,
                    lt = E[xn];
                if (0 > a(en, m)) xn < S && 0 > a(lt, en) ? (E[C] = lt, E[xn] = m, C = xn) : (E[C] = en, E[j] = m, C = j);
                else if (xn < S && 0 > a(lt, m)) E[C] = lt, E[xn] = m, C = xn;
                else break e
            }
        }
        return z
    }

    function a(E, z) {
        var m = E.sortIndex - z.sortIndex;
        return m !== 0 ? m : E.id - z.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var l = performance;
        e.unstable_now = function() {
            return l.now()
        }
    } else {
        var o = Date,
            u = o.now();
        e.unstable_now = function() {
            return o.now() - u
        }
    }
    var i = [],
        f = [],
        g = 1,
        h = null,
        p = 3,
        b = !1,
        k = !1,
        w = !1,
        I = typeof setTimeout == "function" ? setTimeout : null,
        c = typeof clearTimeout == "function" ? clearTimeout : null,
        s = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function d(E) {
        for (var z = r(f); z !== null;) {
            if (z.callback === null) t(f);
            else if (z.startTime <= E) t(f), z.sortIndex = z.expirationTime, n(i, z);
            else break;
            z = r(f)
        }
    }

    function v(E) {
        if (w = !1, d(E), !k)
            if (r(i) !== null) k = !0, jn(x);
            else {
                var z = r(f);
                z !== null && Je(v, z.startTime - E)
            }
    }

    function x(E, z) {
        k = !1, w && (w = !1, c(L), L = -1), b = !0;
        var m = p;
        try {
            for (d(z), h = r(i); h !== null && (!(h.expirationTime > z) || E && !K());) {
                var C = h.callback;
                if (typeof C == "function") {
                    h.callback = null, p = h.priorityLevel;
                    var S = C(h.expirationTime <= z);
                    z = e.unstable_now(), typeof S == "function" ? h.callback = S : h === r(i) && t(i), d(z)
                } else t(i);
                h = r(i)
            }
            if (h !== null) var M = !0;
            else {
                var j = r(f);
                j !== null && Je(v, j.startTime - z), M = !1
            }
            return M
        } finally {
            h = null, p = m, b = !1
        }
    }
    var N = !1,
        P = null,
        L = -1,
        O = 5,
        R = -1;

    function K() {
        return !(e.unstable_now() - R < O)
    }

    function Ve() {
        if (P !== null) {
            var E = e.unstable_now();
            R = E;
            var z = !0;
            try {
                z = P(!0, E)
            } finally {
                z ? Sn() : (N = !1, P = null)
            }
        } else N = !1
    }
    var Sn;
    if (typeof s == "function") Sn = function() {
        s(Ve)
    };
    else if (typeof MessageChannel < "u") {
        var at = new MessageChannel,
            Un = at.port2;
        at.port1.onmessage = Ve, Sn = function() {
            Un.postMessage(null)
        }
    } else Sn = function() {
        I(Ve, 0)
    };

    function jn(E) {
        P = E, N || (N = !0, Sn())
    }

    function Je(E, z) {
        L = I(function() {
            E(e.unstable_now())
        }, z)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
        E.callback = null
    }, e.unstable_continueExecution = function() {
        k || b || (k = !0, jn(x))
    }, e.unstable_forceFrameRate = function(E) {
        0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < E ? Math.floor(1e3 / E) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return p
    }, e.unstable_getFirstCallbackNode = function() {
        return r(i)
    }, e.unstable_next = function(E) {
        switch (p) {
            case 1:
            case 2:
            case 3:
                var z = 3;
                break;
            default:
                z = p
        }
        var m = p;
        p = z;
        try {
            return E()
        } finally {
            p = m
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(E, z) {
        switch (E) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                E = 3
        }
        var m = p;
        p = E;
        try {
            return z()
        } finally {
            p = m
        }
    }, e.unstable_scheduleCallback = function(E, z, m) {
        var C = e.unstable_now();
        switch (typeof m == "object" && m !== null ? (m = m.delay, m = typeof m == "number" && 0 < m ? C + m : C) : m = C, E) {
            case 1:
                var S = -1;
                break;
            case 2:
                S = 250;
                break;
            case 5:
                S = 1073741823;
                break;
            case 4:
                S = 1e4;
                break;
            default:
                S = 5e3
        }
        return S = m + S, E = {
            id: g++,
            callback: z,
            priorityLevel: E,
            startTime: m,
            expirationTime: S,
            sortIndex: -1
        }, m > C ? (E.sortIndex = m, n(f, E), r(i) === null && E === r(f) && (w ? (c(L), L = -1) : w = !0, Je(v, m - C))) : (E.sortIndex = S, n(i, E), k || b || (k = !0, jn(x))), E
    }, e.unstable_shouldYield = K, e.unstable_wrapCallback = function(E) {
        var z = p;
        return function() {
            var m = p;
            p = z;
            try {
                return E.apply(this, arguments)
            } finally {
                p = m
            }
        }
    }
})(ti);
ri.exports = ti;
var Cc = ri.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nc = Y,
    we = Cc;

function y(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) n += "&args[]=" + encodeURIComponent(arguments[r]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var ai = new Set,
    Or = {};

function On(e, n) {
    lr(e, n), lr(e + "Capture", n)
}

function lr(e, n) {
    for (Or[e] = n, e = 0; e < n.length; e++) ai.add(n[e])
}
var Ke = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Ya = Object.prototype.hasOwnProperty,
    Pc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Uo = {},
    jo = {};

function Lc(e) {
    return Ya.call(jo, e) ? !0 : Ya.call(Uo, e) ? !1 : Pc.test(e) ? jo[e] = !0 : (Uo[e] = !0, !1)
}

function zc(e, n, r, t) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof n) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return t ? !1 : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function Mc(e, n, r, t) {
    if (n === null || typeof n > "u" || zc(e, n, r, t)) return !0;
    if (t) return !1;
    if (r !== null) switch (r.type) {
        case 3:
            return !n;
        case 4:
            return n === !1;
        case 5:
            return isNaN(n);
        case 6:
            return isNaN(n) || 1 > n
    }
    return !1
}

function de(e, n, r, t, a, l, o) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = t, this.attributeNamespace = a, this.mustUseProperty = r, this.propertyName = e, this.type = n, this.sanitizeURL = l, this.removeEmptyString = o
}
var ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ae[e] = new de(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var n = e[0];
    ae[n] = new de(n, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ae[e] = new de(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ae[e] = new de(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ae[e] = new de(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ae[e] = new de(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    ae[e] = new de(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ae[e] = new de(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    ae[e] = new de(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Wl = /[\-:]([a-z])/g;

function Hl(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(Wl, Hl);
    ae[n] = new de(n, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(Wl, Hl);
    ae[n] = new de(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(Wl, Hl);
    ae[n] = new de(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ae[e] = new de(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
ae.xlinkHref = new de("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ae[e] = new de(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Ql(e, n, r, t) {
    var a = ae.hasOwnProperty(n) ? ae[n] : null;
    (a !== null ? a.type !== 0 : t || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (Mc(n, r, a, t) && (r = null), t || a === null ? Lc(n) && (r === null ? e.removeAttribute(n) : e.setAttribute(n, "" + r)) : a.mustUseProperty ? e[a.propertyName] = r === null ? a.type === 3 ? !1 : "" : r : (n = a.attributeName, t = a.attributeNamespace, r === null ? e.removeAttribute(n) : (a = a.type, r = a === 3 || a === 4 && r === !0 ? "" : "" + r, t ? e.setAttributeNS(t, n, r) : e.setAttribute(n, r))))
}
var Ze = Nc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ut = Symbol.for("react.element"),
    An = Symbol.for("react.portal"),
    Vn = Symbol.for("react.fragment"),
    ql = Symbol.for("react.strict_mode"),
    Xa = Symbol.for("react.profiler"),
    li = Symbol.for("react.provider"),
    oi = Symbol.for("react.context"),
    Kl = Symbol.for("react.forward_ref"),
    Ga = Symbol.for("react.suspense"),
    Za = Symbol.for("react.suspense_list"),
    Yl = Symbol.for("react.memo"),
    rn = Symbol.for("react.lazy"),
    ui = Symbol.for("react.offscreen"),
    $o = Symbol.iterator;

function hr(e) {
    return e === null || typeof e != "object" ? null : (e = $o && e[$o] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Q = Object.assign,
    Sa;

function xr(e) {
    if (Sa === void 0) try {
        throw Error()
    } catch (r) {
        var n = r.stack.trim().match(/\n( *(at )?)/);
        Sa = n && n[1] || ""
    }
    return `
` + Sa + e
}
var xa = !1;

function Ea(e, n) {
    if (!e || xa) return "";
    xa = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (n)
            if (n = function() {
                    throw Error()
                }, Object.defineProperty(n.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(n, [])
                } catch (f) {
                    var t = f
                }
                Reflect.construct(e, [], n)
            } else {
                try {
                    n.call()
                } catch (f) {
                    t = f
                }
                e.call(n.prototype)
            }
        else {
            try {
                throw Error()
            } catch (f) {
                t = f
            }
            e()
        }
    } catch (f) {
        if (f && t && typeof f.stack == "string") {
            for (var a = f.stack.split(`
`), l = t.stack.split(`
`), o = a.length - 1, u = l.length - 1; 1 <= o && 0 <= u && a[o] !== l[u];) u--;
            for (; 1 <= o && 0 <= u; o--, u--)
                if (a[o] !== l[u]) {
                    if (o !== 1 || u !== 1)
                        do
                            if (o--, u--, 0 > u || a[o] !== l[u]) {
                                var i = `
` + a[o].replace(" at new ", " at ");
                                return e.displayName && i.includes("<anonymous>") && (i = i.replace("<anonymous>", e.displayName)), i
                            } while (1 <= o && 0 <= u);
                    break
                }
        }
    } finally {
        xa = !1, Error.prepareStackTrace = r
    }
    return (e = e ? e.displayName || e.name : "") ? xr(e) : ""
}

function Tc(e) {
    switch (e.tag) {
        case 5:
            return xr(e.type);
        case 16:
            return xr("Lazy");
        case 13:
            return xr("Suspense");
        case 19:
            return xr("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Ea(e.type, !1), e;
        case 11:
            return e = Ea(e.type.render, !1), e;
        case 1:
            return e = Ea(e.type, !0), e;
        default:
            return ""
    }
}

function Ja(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Vn:
            return "Fragment";
        case An:
            return "Portal";
        case Xa:
            return "Profiler";
        case ql:
            return "StrictMode";
        case Ga:
            return "Suspense";
        case Za:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case oi:
            return (e.displayName || "Context") + ".Consumer";
        case li:
            return (e._context.displayName || "Context") + ".Provider";
        case Kl:
            var n = e.render;
            return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Yl:
            return n = e.displayName || null, n !== null ? n : Ja(e.type) || "Memo";
        case rn:
            n = e._payload, e = e._init;
            try {
                return Ja(e(n))
            } catch {}
    }
    return null
}

function Rc(e) {
    var n = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (n.displayName || "Context") + ".Consumer";
        case 10:
            return (n._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return n;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Ja(n);
        case 8:
            return n === ql ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof n == "function") return n.displayName || n.name || null;
            if (typeof n == "string") return n
    }
    return null
}

function vn(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function ii(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio")
}

function Dc(e) {
    var n = ii(e) ? "checked" : "value",
        r = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
        t = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
        var a = r.get,
            l = r.set;
        return Object.defineProperty(e, n, {
            configurable: !0,
            get: function() {
                return a.call(this)
            },
            set: function(o) {
                t = "" + o, l.call(this, o)
            }
        }), Object.defineProperty(e, n, {
            enumerable: r.enumerable
        }), {
            getValue: function() {
                return t
            },
            setValue: function(o) {
                t = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[n]
            }
        }
    }
}

function it(e) {
    e._valueTracker || (e._valueTracker = Dc(e))
}

function si(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var r = n.getValue(),
        t = "";
    return e && (t = ii(e) ? e.checked ? "true" : "false" : e.value), e = t, e !== r ? (n.setValue(e), !0) : !1
}

function Ft(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function el(e, n) {
    var r = n.checked;
    return Q({}, n, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: r ?? e._wrapperState.initialChecked
    })
}

function Ao(e, n) {
    var r = n.defaultValue == null ? "" : n.defaultValue,
        t = n.checked != null ? n.checked : n.defaultChecked;
    r = vn(n.value != null ? n.value : r), e._wrapperState = {
        initialChecked: t,
        initialValue: r,
        controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null
    }
}

function ci(e, n) {
    n = n.checked, n != null && Ql(e, "checked", n, !1)
}

function nl(e, n) {
    ci(e, n);
    var r = vn(n.value),
        t = n.type;
    if (r != null) t === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
    else if (t === "submit" || t === "reset") {
        e.removeAttribute("value");
        return
    }
    n.hasOwnProperty("value") ? rl(e, n.type, r) : n.hasOwnProperty("defaultValue") && rl(e, n.type, vn(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked)
}

function Vo(e, n, r) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
        var t = n.type;
        if (!(t !== "submit" && t !== "reset" || n.value !== void 0 && n.value !== null)) return;
        n = "" + e._wrapperState.initialValue, r || n === e.value || (e.value = n), e.defaultValue = n
    }
    r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r)
}

function rl(e, n, r) {
    (n !== "number" || Ft(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r))
}
var Er = Array.isArray;

function Jn(e, n, r, t) {
    if (e = e.options, n) {
        n = {};
        for (var a = 0; a < r.length; a++) n["$" + r[a]] = !0;
        for (r = 0; r < e.length; r++) a = n.hasOwnProperty("$" + e[r].value), e[r].selected !== a && (e[r].selected = a), a && t && (e[r].defaultSelected = !0)
    } else {
        for (r = "" + vn(r), n = null, a = 0; a < e.length; a++) {
            if (e[a].value === r) {
                e[a].selected = !0, t && (e[a].defaultSelected = !0);
                return
            }
            n !== null || e[a].disabled || (n = e[a])
        }
        n !== null && (n.selected = !0)
    }
}

function tl(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(y(91));
    return Q({}, n, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Bo(e, n) {
    var r = n.value;
    if (r == null) {
        if (r = n.children, n = n.defaultValue, r != null) {
            if (n != null) throw Error(y(92));
            if (Er(r)) {
                if (1 < r.length) throw Error(y(93));
                r = r[0]
            }
            n = r
        }
        n == null && (n = ""), r = n
    }
    e._wrapperState = {
        initialValue: vn(r)
    }
}

function fi(e, n) {
    var r = vn(n.value),
        t = vn(n.defaultValue);
    r != null && (r = "" + r, r !== e.value && (e.value = r), n.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), t != null && (e.defaultValue = "" + t)
}

function Wo(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n)
}

function di(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function al(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? di(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var st, pi = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, r, t, a) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(n, r, t, a)
        })
    } : e
}(function(e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
    else {
        for (st = st || document.createElement("div"), st.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = st.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; n.firstChild;) e.appendChild(n.firstChild)
    }
});

function Ir(e, n) {
    if (n) {
        var r = e.firstChild;
        if (r && r === e.lastChild && r.nodeType === 3) {
            r.nodeValue = n;
            return
        }
    }
    e.textContent = n
}
var Nr = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    Fc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Nr).forEach(function(e) {
    Fc.forEach(function(n) {
        n = n + e.charAt(0).toUpperCase() + e.substring(1), Nr[n] = Nr[e]
    })
});

function mi(e, n, r) {
    return n == null || typeof n == "boolean" || n === "" ? "" : r || typeof n != "number" || n === 0 || Nr.hasOwnProperty(e) && Nr[e] ? ("" + n).trim() : n + "px"
}

function hi(e, n) {
    e = e.style;
    for (var r in n)
        if (n.hasOwnProperty(r)) {
            var t = r.indexOf("--") === 0,
                a = mi(r, n[r], t);
            r === "float" && (r = "cssFloat"), t ? e.setProperty(r, a) : e[r] = a
        }
}
var Oc = Q({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function ll(e, n) {
    if (n) {
        if (Oc[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(y(137, e));
        if (n.dangerouslySetInnerHTML != null) {
            if (n.children != null) throw Error(y(60));
            if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(y(61))
        }
        if (n.style != null && typeof n.style != "object") throw Error(y(62))
    }
}

function ol(e, n) {
    if (e.indexOf("-") === -1) return typeof n.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var ul = null;

function Xl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var il = null,
    er = null,
    nr = null;

function Ho(e) {
    if (e = rt(e)) {
        if (typeof il != "function") throw Error(y(280));
        var n = e.stateNode;
        n && (n = ca(n), il(e.stateNode, e.type, n))
    }
}

function gi(e) {
    er ? nr ? nr.push(e) : nr = [e] : er = e
}

function vi() {
    if (er) {
        var e = er,
            n = nr;
        if (nr = er = null, Ho(e), n)
            for (e = 0; e < n.length; e++) Ho(n[e])
    }
}

function yi(e, n) {
    return e(n)
}

function bi() {}
var _a = !1;

function ki(e, n, r) {
    if (_a) return e(n, r);
    _a = !0;
    try {
        return yi(e, n, r)
    } finally {
        _a = !1, (er !== null || nr !== null) && (bi(), vi())
    }
}

function Ur(e, n) {
    var r = e.stateNode;
    if (r === null) return null;
    var t = ca(r);
    if (t === null) return null;
    r = t[n];
    e: switch (n) {
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
            (t = !t.disabled) || (e = e.type, t = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !t;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(y(231, n, typeof r));
    return r
}
var sl = !1;
if (Ke) try {
    var gr = {};
    Object.defineProperty(gr, "passive", {
        get: function() {
            sl = !0
        }
    }), window.addEventListener("test", gr, gr), window.removeEventListener("test", gr, gr)
} catch {
    sl = !1
}

function Ic(e, n, r, t, a, l, o, u, i) {
    var f = Array.prototype.slice.call(arguments, 3);
    try {
        n.apply(r, f)
    } catch (g) {
        this.onError(g)
    }
}
var Pr = !1,
    Ot = null,
    It = !1,
    cl = null,
    Uc = {
        onError: function(e) {
            Pr = !0, Ot = e
        }
    };

function jc(e, n, r, t, a, l, o, u, i) {
    Pr = !1, Ot = null, Ic.apply(Uc, arguments)
}

function $c(e, n, r, t, a, l, o, u, i) {
    if (jc.apply(this, arguments), Pr) {
        if (Pr) {
            var f = Ot;
            Pr = !1, Ot = null
        } else throw Error(y(198));
        It || (It = !0, cl = f)
    }
}

function In(e) {
    var n = e,
        r = e;
    if (e.alternate)
        for (; n.return;) n = n.return;
    else {
        e = n;
        do n = e, n.flags & 4098 && (r = n.return), e = n.return; while (e)
    }
    return n.tag === 3 ? r : null
}

function wi(e) {
    if (e.tag === 13) {
        var n = e.memoizedState;
        if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated
    }
    return null
}

function Qo(e) {
    if (In(e) !== e) throw Error(y(188))
}

function Ac(e) {
    var n = e.alternate;
    if (!n) {
        if (n = In(e), n === null) throw Error(y(188));
        return n !== e ? null : e
    }
    for (var r = e, t = n;;) {
        var a = r.return;
        if (a === null) break;
        var l = a.alternate;
        if (l === null) {
            if (t = a.return, t !== null) {
                r = t;
                continue
            }
            break
        }
        if (a.child === l.child) {
            for (l = a.child; l;) {
                if (l === r) return Qo(a), e;
                if (l === t) return Qo(a), n;
                l = l.sibling
            }
            throw Error(y(188))
        }
        if (r.return !== t.return) r = a, t = l;
        else {
            for (var o = !1, u = a.child; u;) {
                if (u === r) {
                    o = !0, r = a, t = l;
                    break
                }
                if (u === t) {
                    o = !0, t = a, r = l;
                    break
                }
                u = u.sibling
            }
            if (!o) {
                for (u = l.child; u;) {
                    if (u === r) {
                        o = !0, r = l, t = a;
                        break
                    }
                    if (u === t) {
                        o = !0, t = l, r = a;
                        break
                    }
                    u = u.sibling
                }
                if (!o) throw Error(y(189))
            }
        }
        if (r.alternate !== t) throw Error(y(190))
    }
    if (r.tag !== 3) throw Error(y(188));
    return r.stateNode.current === r ? e : n
}

function Si(e) {
    return e = Ac(e), e !== null ? xi(e) : null
}

function xi(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var n = xi(e);
        if (n !== null) return n;
        e = e.sibling
    }
    return null
}
var Ei = we.unstable_scheduleCallback,
    qo = we.unstable_cancelCallback,
    Vc = we.unstable_shouldYield,
    Bc = we.unstable_requestPaint,
    X = we.unstable_now,
    Wc = we.unstable_getCurrentPriorityLevel,
    Gl = we.unstable_ImmediatePriority,
    _i = we.unstable_UserBlockingPriority,
    Ut = we.unstable_NormalPriority,
    Hc = we.unstable_LowPriority,
    Ci = we.unstable_IdlePriority,
    oa = null,
    $e = null;

function Qc(e) {
    if ($e && typeof $e.onCommitFiberRoot == "function") try {
        $e.onCommitFiberRoot(oa, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var De = Math.clz32 ? Math.clz32 : Yc,
    qc = Math.log,
    Kc = Math.LN2;

function Yc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (qc(e) / Kc | 0) | 0
}
var ct = 64,
    ft = 4194304;

function _r(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
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
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function jt(e, n) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var t = 0,
        a = e.suspendedLanes,
        l = e.pingedLanes,
        o = r & 268435455;
    if (o !== 0) {
        var u = o & ~a;
        u !== 0 ? t = _r(u) : (l &= o, l !== 0 && (t = _r(l)))
    } else o = r & ~a, o !== 0 ? t = _r(o) : l !== 0 && (t = _r(l));
    if (t === 0) return 0;
    if (n !== 0 && n !== t && !(n & a) && (a = t & -t, l = n & -n, a >= l || a === 16 && (l & 4194240) !== 0)) return n;
    if (t & 4 && (t |= r & 16), n = e.entangledLanes, n !== 0)
        for (e = e.entanglements, n &= t; 0 < n;) r = 31 - De(n), a = 1 << r, t |= e[r], n &= ~a;
    return t
}

function Xc(e, n) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return n + 250;
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
        case 2097152:
            return n + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function Gc(e, n) {
    for (var r = e.suspendedLanes, t = e.pingedLanes, a = e.expirationTimes, l = e.pendingLanes; 0 < l;) {
        var o = 31 - De(l),
            u = 1 << o,
            i = a[o];
        i === -1 ? (!(u & r) || u & t) && (a[o] = Xc(u, n)) : i <= n && (e.expiredLanes |= u), l &= ~u
    }
}

function fl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Ni() {
    var e = ct;
    return ct <<= 1, !(ct & 4194240) && (ct = 64), e
}

function Ca(e) {
    for (var n = [], r = 0; 31 > r; r++) n.push(e);
    return n
}

function et(e, n, r) {
    e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - De(n), e[n] = r
}

function Zc(e, n) {
    var r = e.pendingLanes & ~n;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
    var t = e.eventTimes;
    for (e = e.expirationTimes; 0 < r;) {
        var a = 31 - De(r),
            l = 1 << a;
        n[a] = 0, t[a] = -1, e[a] = -1, r &= ~l
    }
}

function Zl(e, n) {
    var r = e.entangledLanes |= n;
    for (e = e.entanglements; r;) {
        var t = 31 - De(r),
            a = 1 << t;
        a & n | e[t] & n && (e[t] |= n), r &= ~a
    }
}
var U = 0;

function Pi(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Li, Jl, zi, Mi, Ti, dl = !1,
    dt = [],
    sn = null,
    cn = null,
    fn = null,
    jr = new Map,
    $r = new Map,
    an = [],
    Jc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Ko(e, n) {
    switch (e) {
        case "focusin":
        case "focusout":
            sn = null;
            break;
        case "dragenter":
        case "dragleave":
            cn = null;
            break;
        case "mouseover":
        case "mouseout":
            fn = null;
            break;
        case "pointerover":
        case "pointerout":
            jr.delete(n.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            $r.delete(n.pointerId)
    }
}

function vr(e, n, r, t, a, l) {
    return e === null || e.nativeEvent !== l ? (e = {
        blockedOn: n,
        domEventName: r,
        eventSystemFlags: t,
        nativeEvent: l,
        targetContainers: [a]
    }, n !== null && (n = rt(n), n !== null && Jl(n)), e) : (e.eventSystemFlags |= t, n = e.targetContainers, a !== null && n.indexOf(a) === -1 && n.push(a), e)
}

function ef(e, n, r, t, a) {
    switch (n) {
        case "focusin":
            return sn = vr(sn, e, n, r, t, a), !0;
        case "dragenter":
            return cn = vr(cn, e, n, r, t, a), !0;
        case "mouseover":
            return fn = vr(fn, e, n, r, t, a), !0;
        case "pointerover":
            var l = a.pointerId;
            return jr.set(l, vr(jr.get(l) || null, e, n, r, t, a)), !0;
        case "gotpointercapture":
            return l = a.pointerId, $r.set(l, vr($r.get(l) || null, e, n, r, t, a)), !0
    }
    return !1
}

function Ri(e) {
    var n = Cn(e.target);
    if (n !== null) {
        var r = In(n);
        if (r !== null) {
            if (n = r.tag, n === 13) {
                if (n = wi(r), n !== null) {
                    e.blockedOn = n, Ti(e.priority, function() {
                        zi(r)
                    });
                    return
                }
            } else if (n === 3 && r.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function _t(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length;) {
        var r = pl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
        if (r === null) {
            r = e.nativeEvent;
            var t = new r.constructor(r.type, r);
            ul = t, r.target.dispatchEvent(t), ul = null
        } else return n = rt(r), n !== null && Jl(n), e.blockedOn = r, !1;
        n.shift()
    }
    return !0
}

function Yo(e, n, r) {
    _t(e) && r.delete(n)
}

function nf() {
    dl = !1, sn !== null && _t(sn) && (sn = null), cn !== null && _t(cn) && (cn = null), fn !== null && _t(fn) && (fn = null), jr.forEach(Yo), $r.forEach(Yo)
}

function yr(e, n) {
    e.blockedOn === n && (e.blockedOn = null, dl || (dl = !0, we.unstable_scheduleCallback(we.unstable_NormalPriority, nf)))
}

function Ar(e) {
    function n(a) {
        return yr(a, e)
    }
    if (0 < dt.length) {
        yr(dt[0], e);
        for (var r = 1; r < dt.length; r++) {
            var t = dt[r];
            t.blockedOn === e && (t.blockedOn = null)
        }
    }
    for (sn !== null && yr(sn, e), cn !== null && yr(cn, e), fn !== null && yr(fn, e), jr.forEach(n), $r.forEach(n), r = 0; r < an.length; r++) t = an[r], t.blockedOn === e && (t.blockedOn = null);
    for (; 0 < an.length && (r = an[0], r.blockedOn === null);) Ri(r), r.blockedOn === null && an.shift()
}
var rr = Ze.ReactCurrentBatchConfig,
    $t = !0;

function rf(e, n, r, t) {
    var a = U,
        l = rr.transition;
    rr.transition = null;
    try {
        U = 1, eo(e, n, r, t)
    } finally {
        U = a, rr.transition = l
    }
}

function tf(e, n, r, t) {
    var a = U,
        l = rr.transition;
    rr.transition = null;
    try {
        U = 4, eo(e, n, r, t)
    } finally {
        U = a, rr.transition = l
    }
}

function eo(e, n, r, t) {
    if ($t) {
        var a = pl(e, n, r, t);
        if (a === null) Oa(e, n, t, At, r), Ko(e, t);
        else if (ef(a, e, n, r, t)) t.stopPropagation();
        else if (Ko(e, t), n & 4 && -1 < Jc.indexOf(e)) {
            for (; a !== null;) {
                var l = rt(a);
                if (l !== null && Li(l), l = pl(e, n, r, t), l === null && Oa(e, n, t, At, r), l === a) break;
                a = l
            }
            a !== null && t.stopPropagation()
        } else Oa(e, n, t, null, r)
    }
}
var At = null;

function pl(e, n, r, t) {
    if (At = null, e = Xl(t), e = Cn(e), e !== null)
        if (n = In(e), n === null) e = null;
        else if (r = n.tag, r === 13) {
        if (e = wi(n), e !== null) return e;
        e = null
    } else if (r === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
        e = null
    } else n !== e && (e = null);
    return At = e, null
}

function Di(e) {
    switch (e) {
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
        case "selectstart":
            return 1;
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
        case "pointerleave":
            return 4;
        case "message":
            switch (Wc()) {
                case Gl:
                    return 1;
                case _i:
                    return 4;
                case Ut:
                case Hc:
                    return 16;
                case Ci:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var on = null,
    no = null,
    Ct = null;

function Fi() {
    if (Ct) return Ct;
    var e, n = no,
        r = n.length,
        t, a = "value" in on ? on.value : on.textContent,
        l = a.length;
    for (e = 0; e < r && n[e] === a[e]; e++);
    var o = r - e;
    for (t = 1; t <= o && n[r - t] === a[l - t]; t++);
    return Ct = a.slice(e, 1 < t ? 1 - t : void 0)
}

function Nt(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function pt() {
    return !0
}

function Xo() {
    return !1
}

function xe(e) {
    function n(r, t, a, l, o) {
        this._reactName = r, this._targetInst = a, this.type = t, this.nativeEvent = l, this.target = o, this.currentTarget = null;
        for (var u in e) e.hasOwnProperty(u) && (r = e[u], this[u] = r ? r(l) : l[u]);
        return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? pt : Xo, this.isPropagationStopped = Xo, this
    }
    return Q(n.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var r = this.nativeEvent;
            r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = pt)
        },
        stopPropagation: function() {
            var r = this.nativeEvent;
            r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = pt)
        },
        persist: function() {},
        isPersistent: pt
    }), n
}
var pr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    ro = xe(pr),
    nt = Q({}, pr, {
        view: 0,
        detail: 0
    }),
    af = xe(nt),
    Na, Pa, br, ua = Q({}, nt, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: to,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== br && (br && e.type === "mousemove" ? (Na = e.screenX - br.screenX, Pa = e.screenY - br.screenY) : Pa = Na = 0, br = e), Na)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Pa
        }
    }),
    Go = xe(ua),
    lf = Q({}, ua, {
        dataTransfer: 0
    }),
    of = xe(lf),
    uf = Q({}, nt, {
        relatedTarget: 0
    }),
    La = xe(uf),
    sf = Q({}, pr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    cf = xe(sf),
    ff = Q({}, pr, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    df = xe(ff),
    pf = Q({}, pr, {
        data: 0
    }),
    Zo = xe(pf),
    mf = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    hf = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    gf = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function vf(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = gf[e]) ? !!n[e] : !1
}

function to() {
    return vf
}
var yf = Q({}, nt, {
        key: function(e) {
            if (e.key) {
                var n = mf[e.key] || e.key;
                if (n !== "Unidentified") return n
            }
            return e.type === "keypress" ? (e = Nt(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? hf[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: to,
        charCode: function(e) {
            return e.type === "keypress" ? Nt(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Nt(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    bf = xe(yf),
    kf = Q({}, ua, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    Jo = xe(kf),
    wf = Q({}, nt, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: to
    }),
    Sf = xe(wf),
    xf = Q({}, pr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Ef = xe(xf),
    _f = Q({}, ua, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    Cf = xe(_f),
    Nf = [9, 13, 27, 32],
    ao = Ke && "CompositionEvent" in window,
    Lr = null;
Ke && "documentMode" in document && (Lr = document.documentMode);
var Pf = Ke && "TextEvent" in window && !Lr,
    Oi = Ke && (!ao || Lr && 8 < Lr && 11 >= Lr),
    eu = " ",
    nu = !1;

function Ii(e, n) {
    switch (e) {
        case "keyup":
            return Nf.indexOf(n.keyCode) !== -1;
        case "keydown":
            return n.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Ui(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Bn = !1;

function Lf(e, n) {
    switch (e) {
        case "compositionend":
            return Ui(n);
        case "keypress":
            return n.which !== 32 ? null : (nu = !0, eu);
        case "textInput":
            return e = n.data, e === eu && nu ? null : e;
        default:
            return null
    }
}

function zf(e, n) {
    if (Bn) return e === "compositionend" || !ao && Ii(e, n) ? (e = Fi(), Ct = no = on = null, Bn = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
                if (n.char && 1 < n.char.length) return n.char;
                if (n.which) return String.fromCharCode(n.which)
            }
            return null;
        case "compositionend":
            return Oi && n.locale !== "ko" ? null : n.data;
        default:
            return null
    }
}
var Mf = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function ru(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Mf[e.type] : n === "textarea"
}

function ji(e, n, r, t) {
    gi(t), n = Vt(n, "onChange"), 0 < n.length && (r = new ro("onChange", "change", null, r, t), e.push({
        event: r,
        listeners: n
    }))
}
var zr = null,
    Vr = null;

function Tf(e) {
    Xi(e, 0)
}

function ia(e) {
    var n = Qn(e);
    if (si(n)) return e
}

function Rf(e, n) {
    if (e === "change") return n
}
var $i = !1;
if (Ke) {
    var za;
    if (Ke) {
        var Ma = "oninput" in document;
        if (!Ma) {
            var tu = document.createElement("div");
            tu.setAttribute("oninput", "return;"), Ma = typeof tu.oninput == "function"
        }
        za = Ma
    } else za = !1;
    $i = za && (!document.documentMode || 9 < document.documentMode)
}

function au() {
    zr && (zr.detachEvent("onpropertychange", Ai), Vr = zr = null)
}

function Ai(e) {
    if (e.propertyName === "value" && ia(Vr)) {
        var n = [];
        ji(n, Vr, e, Xl(e)), ki(Tf, n)
    }
}

function Df(e, n, r) {
    e === "focusin" ? (au(), zr = n, Vr = r, zr.attachEvent("onpropertychange", Ai)) : e === "focusout" && au()
}

function Ff(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ia(Vr)
}

function Of(e, n) {
    if (e === "click") return ia(n)
}

function If(e, n) {
    if (e === "input" || e === "change") return ia(n)
}

function Uf(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n
}
var Oe = typeof Object.is == "function" ? Object.is : Uf;

function Br(e, n) {
    if (Oe(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
    var r = Object.keys(e),
        t = Object.keys(n);
    if (r.length !== t.length) return !1;
    for (t = 0; t < r.length; t++) {
        var a = r[t];
        if (!Ya.call(n, a) || !Oe(e[a], n[a])) return !1
    }
    return !0
}

function lu(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function ou(e, n) {
    var r = lu(e);
    e = 0;
    for (var t; r;) {
        if (r.nodeType === 3) {
            if (t = e + r.textContent.length, e <= n && t >= n) return {
                node: r,
                offset: n - e
            };
            e = t
        }
        e: {
            for (; r;) {
                if (r.nextSibling) {
                    r = r.nextSibling;
                    break e
                }
                r = r.parentNode
            }
            r = void 0
        }
        r = lu(r)
    }
}

function Vi(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Vi(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1
}

function Bi() {
    for (var e = window, n = Ft(); n instanceof e.HTMLIFrameElement;) {
        try {
            var r = typeof n.contentWindow.location.href == "string"
        } catch {
            r = !1
        }
        if (r) e = n.contentWindow;
        else break;
        n = Ft(e.document)
    }
    return n
}

function lo(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true")
}

function jf(e) {
    var n = Bi(),
        r = e.focusedElem,
        t = e.selectionRange;
    if (n !== r && r && r.ownerDocument && Vi(r.ownerDocument.documentElement, r)) {
        if (t !== null && lo(r)) {
            if (n = t.start, e = t.end, e === void 0 && (e = n), "selectionStart" in r) r.selectionStart = n, r.selectionEnd = Math.min(e, r.value.length);
            else if (e = (n = r.ownerDocument || document) && n.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var a = r.textContent.length,
                    l = Math.min(t.start, a);
                t = t.end === void 0 ? l : Math.min(t.end, a), !e.extend && l > t && (a = t, t = l, l = a), a = ou(r, l);
                var o = ou(r, t);
                a && o && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (n = n.createRange(), n.setStart(a.node, a.offset), e.removeAllRanges(), l > t ? (e.addRange(n), e.extend(o.node, o.offset)) : (n.setEnd(o.node, o.offset), e.addRange(n)))
            }
        }
        for (n = [], e = r; e = e.parentNode;) e.nodeType === 1 && n.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof r.focus == "function" && r.focus(), r = 0; r < n.length; r++) e = n[r], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var $f = Ke && "documentMode" in document && 11 >= document.documentMode,
    Wn = null,
    ml = null,
    Mr = null,
    hl = !1;

function uu(e, n, r) {
    var t = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    hl || Wn == null || Wn !== Ft(t) || (t = Wn, "selectionStart" in t && lo(t) ? t = {
        start: t.selectionStart,
        end: t.selectionEnd
    } : (t = (t.ownerDocument && t.ownerDocument.defaultView || window).getSelection(), t = {
        anchorNode: t.anchorNode,
        anchorOffset: t.anchorOffset,
        focusNode: t.focusNode,
        focusOffset: t.focusOffset
    }), Mr && Br(Mr, t) || (Mr = t, t = Vt(ml, "onSelect"), 0 < t.length && (n = new ro("onSelect", "select", null, n, r), e.push({
        event: n,
        listeners: t
    }), n.target = Wn)))
}

function mt(e, n) {
    var r = {};
    return r[e.toLowerCase()] = n.toLowerCase(), r["Webkit" + e] = "webkit" + n, r["Moz" + e] = "moz" + n, r
}
var Hn = {
        animationend: mt("Animation", "AnimationEnd"),
        animationiteration: mt("Animation", "AnimationIteration"),
        animationstart: mt("Animation", "AnimationStart"),
        transitionend: mt("Transition", "TransitionEnd")
    },
    Ta = {},
    Wi = {};
Ke && (Wi = document.createElement("div").style, "AnimationEvent" in window || (delete Hn.animationend.animation, delete Hn.animationiteration.animation, delete Hn.animationstart.animation), "TransitionEvent" in window || delete Hn.transitionend.transition);

function sa(e) {
    if (Ta[e]) return Ta[e];
    if (!Hn[e]) return e;
    var n = Hn[e],
        r;
    for (r in n)
        if (n.hasOwnProperty(r) && r in Wi) return Ta[e] = n[r];
    return e
}
var Hi = sa("animationend"),
    Qi = sa("animationiteration"),
    qi = sa("animationstart"),
    Ki = sa("transitionend"),
    Yi = new Map,
    iu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function bn(e, n) {
    Yi.set(e, n), On(n, [e])
}
for (var Ra = 0; Ra < iu.length; Ra++) {
    var Da = iu[Ra],
        Af = Da.toLowerCase(),
        Vf = Da[0].toUpperCase() + Da.slice(1);
    bn(Af, "on" + Vf)
}
bn(Hi, "onAnimationEnd");
bn(Qi, "onAnimationIteration");
bn(qi, "onAnimationStart");
bn("dblclick", "onDoubleClick");
bn("focusin", "onFocus");
bn("focusout", "onBlur");
bn(Ki, "onTransitionEnd");
lr("onMouseEnter", ["mouseout", "mouseover"]);
lr("onMouseLeave", ["mouseout", "mouseover"]);
lr("onPointerEnter", ["pointerout", "pointerover"]);
lr("onPointerLeave", ["pointerout", "pointerover"]);
On("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
On("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
On("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
On("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
On("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
On("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Cr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Bf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cr));

function su(e, n, r) {
    var t = e.type || "unknown-event";
    e.currentTarget = r, $c(t, n, void 0, e), e.currentTarget = null
}

function Xi(e, n) {
    n = (n & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
        var t = e[r],
            a = t.event;
        t = t.listeners;
        e: {
            var l = void 0;
            if (n)
                for (var o = t.length - 1; 0 <= o; o--) {
                    var u = t[o],
                        i = u.instance,
                        f = u.currentTarget;
                    if (u = u.listener, i !== l && a.isPropagationStopped()) break e;
                    su(a, u, f), l = i
                } else
                    for (o = 0; o < t.length; o++) {
                        if (u = t[o], i = u.instance, f = u.currentTarget, u = u.listener, i !== l && a.isPropagationStopped()) break e;
                        su(a, u, f), l = i
                    }
        }
    }
    if (It) throw e = cl, It = !1, cl = null, e
}

function A(e, n) {
    var r = n[kl];
    r === void 0 && (r = n[kl] = new Set);
    var t = e + "__bubble";
    r.has(t) || (Gi(n, e, 2, !1), r.add(t))
}

function Fa(e, n, r) {
    var t = 0;
    n && (t |= 4), Gi(r, e, t, n)
}
var ht = "_reactListening" + Math.random().toString(36).slice(2);

function Wr(e) {
    if (!e[ht]) {
        e[ht] = !0, ai.forEach(function(r) {
            r !== "selectionchange" && (Bf.has(r) || Fa(r, !1, e), Fa(r, !0, e))
        });
        var n = e.nodeType === 9 ? e : e.ownerDocument;
        n === null || n[ht] || (n[ht] = !0, Fa("selectionchange", !1, n))
    }
}

function Gi(e, n, r, t) {
    switch (Di(n)) {
        case 1:
            var a = rf;
            break;
        case 4:
            a = tf;
            break;
        default:
            a = eo
    }
    r = a.bind(null, n, r, e), a = void 0, !sl || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (a = !0), t ? a !== void 0 ? e.addEventListener(n, r, {
        capture: !0,
        passive: a
    }) : e.addEventListener(n, r, !0) : a !== void 0 ? e.addEventListener(n, r, {
        passive: a
    }) : e.addEventListener(n, r, !1)
}

function Oa(e, n, r, t, a) {
    var l = t;
    if (!(n & 1) && !(n & 2) && t !== null) e: for (;;) {
        if (t === null) return;
        var o = t.tag;
        if (o === 3 || o === 4) {
            var u = t.stateNode.containerInfo;
            if (u === a || u.nodeType === 8 && u.parentNode === a) break;
            if (o === 4)
                for (o = t.return; o !== null;) {
                    var i = o.tag;
                    if ((i === 3 || i === 4) && (i = o.stateNode.containerInfo, i === a || i.nodeType === 8 && i.parentNode === a)) return;
                    o = o.return
                }
            for (; u !== null;) {
                if (o = Cn(u), o === null) return;
                if (i = o.tag, i === 5 || i === 6) {
                    t = l = o;
                    continue e
                }
                u = u.parentNode
            }
        }
        t = t.return
    }
    ki(function() {
        var f = l,
            g = Xl(r),
            h = [];
        e: {
            var p = Yi.get(e);
            if (p !== void 0) {
                var b = ro,
                    k = e;
                switch (e) {
                    case "keypress":
                        if (Nt(r) === 0) break e;
                    case "keydown":
                    case "keyup":
                        b = bf;
                        break;
                    case "focusin":
                        k = "focus", b = La;
                        break;
                    case "focusout":
                        k = "blur", b = La;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        b = La;
                        break;
                    case "click":
                        if (r.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        b = Go;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        b = of;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        b = Sf;
                        break;
                    case Hi:
                    case Qi:
                    case qi:
                        b = cf;
                        break;
                    case Ki:
                        b = Ef;
                        break;
                    case "scroll":
                        b = af;
                        break;
                    case "wheel":
                        b = Cf;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        b = df;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        b = Jo
                }
                var w = (n & 4) !== 0,
                    I = !w && e === "scroll",
                    c = w ? p !== null ? p + "Capture" : null : p;
                w = [];
                for (var s = f, d; s !== null;) {
                    d = s;
                    var v = d.stateNode;
                    if (d.tag === 5 && v !== null && (d = v, c !== null && (v = Ur(s, c), v != null && w.push(Hr(s, v, d)))), I) break;
                    s = s.return
                }
                0 < w.length && (p = new b(p, k, null, r, g), h.push({
                    event: p,
                    listeners: w
                }))
            }
        }
        if (!(n & 7)) {
            e: {
                if (p = e === "mouseover" || e === "pointerover", b = e === "mouseout" || e === "pointerout", p && r !== ul && (k = r.relatedTarget || r.fromElement) && (Cn(k) || k[Ye])) break e;
                if ((b || p) && (p = g.window === g ? g : (p = g.ownerDocument) ? p.defaultView || p.parentWindow : window, b ? (k = r.relatedTarget || r.toElement, b = f, k = k ? Cn(k) : null, k !== null && (I = In(k), k !== I || k.tag !== 5 && k.tag !== 6) && (k = null)) : (b = null, k = f), b !== k)) {
                    if (w = Go, v = "onMouseLeave", c = "onMouseEnter", s = "mouse", (e === "pointerout" || e === "pointerover") && (w = Jo, v = "onPointerLeave", c = "onPointerEnter", s = "pointer"), I = b == null ? p : Qn(b), d = k == null ? p : Qn(k), p = new w(v, s + "leave", b, r, g), p.target = I, p.relatedTarget = d, v = null, Cn(g) === f && (w = new w(c, s + "enter", k, r, g), w.target = d, w.relatedTarget = I, v = w), I = v, b && k) n: {
                        for (w = b, c = k, s = 0, d = w; d; d = $n(d)) s++;
                        for (d = 0, v = c; v; v = $n(v)) d++;
                        for (; 0 < s - d;) w = $n(w),
                        s--;
                        for (; 0 < d - s;) c = $n(c),
                        d--;
                        for (; s--;) {
                            if (w === c || c !== null && w === c.alternate) break n;
                            w = $n(w), c = $n(c)
                        }
                        w = null
                    }
                    else w = null;
                    b !== null && cu(h, p, b, w, !1), k !== null && I !== null && cu(h, I, k, w, !0)
                }
            }
            e: {
                if (p = f ? Qn(f) : window, b = p.nodeName && p.nodeName.toLowerCase(), b === "select" || b === "input" && p.type === "file") var x = Rf;
                else if (ru(p))
                    if ($i) x = If;
                    else {
                        x = Ff;
                        var N = Df
                    }
                else(b = p.nodeName) && b.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (x = Of);
                if (x && (x = x(e, f))) {
                    ji(h, x, r, g);
                    break e
                }
                N && N(e, p, f),
                e === "focusout" && (N = p._wrapperState) && N.controlled && p.type === "number" && rl(p, "number", p.value)
            }
            switch (N = f ? Qn(f) : window, e) {
                case "focusin":
                    (ru(N) || N.contentEditable === "true") && (Wn = N, ml = f, Mr = null);
                    break;
                case "focusout":
                    Mr = ml = Wn = null;
                    break;
                case "mousedown":
                    hl = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    hl = !1, uu(h, r, g);
                    break;
                case "selectionchange":
                    if ($f) break;
                case "keydown":
                case "keyup":
                    uu(h, r, g)
            }
            var P;
            if (ao) e: {
                switch (e) {
                    case "compositionstart":
                        var L = "onCompositionStart";
                        break e;
                    case "compositionend":
                        L = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        L = "onCompositionUpdate";
                        break e
                }
                L = void 0
            }
            else Bn ? Ii(e, r) && (L = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (L = "onCompositionStart");L && (Oi && r.locale !== "ko" && (Bn || L !== "onCompositionStart" ? L === "onCompositionEnd" && Bn && (P = Fi()) : (on = g, no = "value" in on ? on.value : on.textContent, Bn = !0)), N = Vt(f, L), 0 < N.length && (L = new Zo(L, e, null, r, g), h.push({
                event: L,
                listeners: N
            }), P ? L.data = P : (P = Ui(r), P !== null && (L.data = P)))),
            (P = Pf ? Lf(e, r) : zf(e, r)) && (f = Vt(f, "onBeforeInput"), 0 < f.length && (g = new Zo("onBeforeInput", "beforeinput", null, r, g), h.push({
                event: g,
                listeners: f
            }), g.data = P))
        }
        Xi(h, n)
    })
}

function Hr(e, n, r) {
    return {
        instance: e,
        listener: n,
        currentTarget: r
    }
}

function Vt(e, n) {
    for (var r = n + "Capture", t = []; e !== null;) {
        var a = e,
            l = a.stateNode;
        a.tag === 5 && l !== null && (a = l, l = Ur(e, r), l != null && t.unshift(Hr(e, l, a)), l = Ur(e, n), l != null && t.push(Hr(e, l, a))), e = e.return
    }
    return t
}

function $n(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function cu(e, n, r, t, a) {
    for (var l = n._reactName, o = []; r !== null && r !== t;) {
        var u = r,
            i = u.alternate,
            f = u.stateNode;
        if (i !== null && i === t) break;
        u.tag === 5 && f !== null && (u = f, a ? (i = Ur(r, l), i != null && o.unshift(Hr(r, i, u))) : a || (i = Ur(r, l), i != null && o.push(Hr(r, i, u)))), r = r.return
    }
    o.length !== 0 && e.push({
        event: n,
        listeners: o
    })
}
var Wf = /\r\n?/g,
    Hf = /\u0000|\uFFFD/g;

function fu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Wf, `
`).replace(Hf, "")
}

function gt(e, n, r) {
    if (n = fu(n), fu(e) !== n && r) throw Error(y(425))
}

function Bt() {}
var gl = null,
    vl = null;

function yl(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null
}
var bl = typeof setTimeout == "function" ? setTimeout : void 0,
    Qf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    du = typeof Promise == "function" ? Promise : void 0,
    qf = typeof queueMicrotask == "function" ? queueMicrotask : typeof du < "u" ? function(e) {
        return du.resolve(null).then(e).catch(Kf)
    } : bl;

function Kf(e) {
    setTimeout(function() {
        throw e
    })
}

function Ia(e, n) {
    var r = n,
        t = 0;
    do {
        var a = r.nextSibling;
        if (e.removeChild(r), a && a.nodeType === 8)
            if (r = a.data, r === "/$") {
                if (t === 0) {
                    e.removeChild(a), Ar(n);
                    return
                }
                t--
            } else r !== "$" && r !== "$?" && r !== "$!" || t++;
        r = a
    } while (r);
    Ar(n)
}

function dn(e) {
    for (; e != null; e = e.nextSibling) {
        var n = e.nodeType;
        if (n === 1 || n === 3) break;
        if (n === 8) {
            if (n = e.data, n === "$" || n === "$!" || n === "$?") break;
            if (n === "/$") return null
        }
    }
    return e
}

function pu(e) {
    e = e.previousSibling;
    for (var n = 0; e;) {
        if (e.nodeType === 8) {
            var r = e.data;
            if (r === "$" || r === "$!" || r === "$?") {
                if (n === 0) return e;
                n--
            } else r === "/$" && n++
        }
        e = e.previousSibling
    }
    return null
}
var mr = Math.random().toString(36).slice(2),
    je = "__reactFiber$" + mr,
    Qr = "__reactProps$" + mr,
    Ye = "__reactContainer$" + mr,
    kl = "__reactEvents$" + mr,
    Yf = "__reactListeners$" + mr,
    Xf = "__reactHandles$" + mr;

function Cn(e) {
    var n = e[je];
    if (n) return n;
    for (var r = e.parentNode; r;) {
        if (n = r[Ye] || r[je]) {
            if (r = n.alternate, n.child !== null || r !== null && r.child !== null)
                for (e = pu(e); e !== null;) {
                    if (r = e[je]) return r;
                    e = pu(e)
                }
            return n
        }
        e = r, r = e.parentNode
    }
    return null
}

function rt(e) {
    return e = e[je] || e[Ye], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Qn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(y(33))
}

function ca(e) {
    return e[Qr] || null
}
var wl = [],
    qn = -1;

function kn(e) {
    return {
        current: e
    }
}

function V(e) {
    0 > qn || (e.current = wl[qn], wl[qn] = null, qn--)
}

function $(e, n) {
    qn++, wl[qn] = e.current, e.current = n
}
var yn = {},
    ie = kn(yn),
    he = kn(!1),
    Mn = yn;

function or(e, n) {
    var r = e.type.contextTypes;
    if (!r) return yn;
    var t = e.stateNode;
    if (t && t.__reactInternalMemoizedUnmaskedChildContext === n) return t.__reactInternalMemoizedMaskedChildContext;
    var a = {},
        l;
    for (l in r) a[l] = n[l];
    return t && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = a), a
}

function ge(e) {
    return e = e.childContextTypes, e != null
}

function Wt() {
    V(he), V(ie)
}

function mu(e, n, r) {
    if (ie.current !== yn) throw Error(y(168));
    $(ie, n), $(he, r)
}

function Zi(e, n, r) {
    var t = e.stateNode;
    if (n = n.childContextTypes, typeof t.getChildContext != "function") return r;
    t = t.getChildContext();
    for (var a in t)
        if (!(a in n)) throw Error(y(108, Rc(e) || "Unknown", a));
    return Q({}, r, t)
}

function Ht(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || yn, Mn = ie.current, $(ie, e), $(he, he.current), !0
}

function hu(e, n, r) {
    var t = e.stateNode;
    if (!t) throw Error(y(169));
    r ? (e = Zi(e, n, Mn), t.__reactInternalMemoizedMergedChildContext = e, V(he), V(ie), $(ie, e)) : V(he), $(he, r)
}
var We = null,
    fa = !1,
    Ua = !1;

function Ji(e) {
    We === null ? We = [e] : We.push(e)
}

function Gf(e) {
    fa = !0, Ji(e)
}

function wn() {
    if (!Ua && We !== null) {
        Ua = !0;
        var e = 0,
            n = U;
        try {
            var r = We;
            for (U = 1; e < r.length; e++) {
                var t = r[e];
                do t = t(!0); while (t !== null)
            }
            We = null, fa = !1
        } catch (a) {
            throw We !== null && (We = We.slice(e + 1)), Ei(Gl, wn), a
        } finally {
            U = n, Ua = !1
        }
    }
    return null
}
var Kn = [],
    Yn = 0,
    Qt = null,
    qt = 0,
    Ee = [],
    _e = 0,
    Tn = null,
    He = 1,
    Qe = "";

function En(e, n) {
    Kn[Yn++] = qt, Kn[Yn++] = Qt, Qt = e, qt = n
}

function es(e, n, r) {
    Ee[_e++] = He, Ee[_e++] = Qe, Ee[_e++] = Tn, Tn = e;
    var t = He;
    e = Qe;
    var a = 32 - De(t) - 1;
    t &= ~(1 << a), r += 1;
    var l = 32 - De(n) + a;
    if (30 < l) {
        var o = a - a % 5;
        l = (t & (1 << o) - 1).toString(32), t >>= o, a -= o, He = 1 << 32 - De(n) + a | r << a | t, Qe = l + e
    } else He = 1 << l | r << a | t, Qe = e
}

function oo(e) {
    e.return !== null && (En(e, 1), es(e, 1, 0))
}

function uo(e) {
    for (; e === Qt;) Qt = Kn[--Yn], Kn[Yn] = null, qt = Kn[--Yn], Kn[Yn] = null;
    for (; e === Tn;) Tn = Ee[--_e], Ee[_e] = null, Qe = Ee[--_e], Ee[_e] = null, He = Ee[--_e], Ee[_e] = null
}
var ke = null,
    be = null,
    B = !1,
    Re = null;

function ns(e, n) {
    var r = Ce(5, null, null, 0);
    r.elementType = "DELETED", r.stateNode = n, r.return = e, n = e.deletions, n === null ? (e.deletions = [r], e.flags |= 16) : n.push(r)
}

function gu(e, n) {
    switch (e.tag) {
        case 5:
            var r = e.type;
            return n = n.nodeType !== 1 || r.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, ke = e, be = dn(n.firstChild), !0) : !1;
        case 6:
            return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, ke = e, be = null, !0) : !1;
        case 13:
            return n = n.nodeType !== 8 ? null : n, n !== null ? (r = Tn !== null ? {
                id: He,
                overflow: Qe
            } : null, e.memoizedState = {
                dehydrated: n,
                treeContext: r,
                retryLane: 1073741824
            }, r = Ce(18, null, null, 0), r.stateNode = n, r.return = e, e.child = r, ke = e, be = null, !0) : !1;
        default:
            return !1
    }
}

function Sl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function xl(e) {
    if (B) {
        var n = be;
        if (n) {
            var r = n;
            if (!gu(e, n)) {
                if (Sl(e)) throw Error(y(418));
                n = dn(r.nextSibling);
                var t = ke;
                n && gu(e, n) ? ns(t, r) : (e.flags = e.flags & -4097 | 2, B = !1, ke = e)
            }
        } else {
            if (Sl(e)) throw Error(y(418));
            e.flags = e.flags & -4097 | 2, B = !1, ke = e
        }
    }
}

function vu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    ke = e
}

function vt(e) {
    if (e !== ke) return !1;
    if (!B) return vu(e), B = !0, !1;
    var n;
    if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !yl(e.type, e.memoizedProps)), n && (n = be)) {
        if (Sl(e)) throw rs(), Error(y(418));
        for (; n;) ns(e, n), n = dn(n.nextSibling)
    }
    if (vu(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(y(317));
        e: {
            for (e = e.nextSibling, n = 0; e;) {
                if (e.nodeType === 8) {
                    var r = e.data;
                    if (r === "/$") {
                        if (n === 0) {
                            be = dn(e.nextSibling);
                            break e
                        }
                        n--
                    } else r !== "$" && r !== "$!" && r !== "$?" || n++
                }
                e = e.nextSibling
            }
            be = null
        }
    } else be = ke ? dn(e.stateNode.nextSibling) : null;
    return !0
}

function rs() {
    for (var e = be; e;) e = dn(e.nextSibling)
}

function ur() {
    be = ke = null, B = !1
}

function io(e) {
    Re === null ? Re = [e] : Re.push(e)
}
var Zf = Ze.ReactCurrentBatchConfig;

function kr(e, n, r) {
    if (e = r.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (r._owner) {
            if (r = r._owner, r) {
                if (r.tag !== 1) throw Error(y(309));
                var t = r.stateNode
            }
            if (!t) throw Error(y(147, e));
            var a = t,
                l = "" + e;
            return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === l ? n.ref : (n = function(o) {
                var u = a.refs;
                o === null ? delete u[l] : u[l] = o
            }, n._stringRef = l, n)
        }
        if (typeof e != "string") throw Error(y(284));
        if (!r._owner) throw Error(y(290, e))
    }
    return e
}

function yt(e, n) {
    throw e = Object.prototype.toString.call(n), Error(y(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e))
}

function yu(e) {
    var n = e._init;
    return n(e._payload)
}

function ts(e) {
    function n(c, s) {
        if (e) {
            var d = c.deletions;
            d === null ? (c.deletions = [s], c.flags |= 16) : d.push(s)
        }
    }

    function r(c, s) {
        if (!e) return null;
        for (; s !== null;) n(c, s), s = s.sibling;
        return null
    }

    function t(c, s) {
        for (c = new Map; s !== null;) s.key !== null ? c.set(s.key, s) : c.set(s.index, s), s = s.sibling;
        return c
    }

    function a(c, s) {
        return c = gn(c, s), c.index = 0, c.sibling = null, c
    }

    function l(c, s, d) {
        return c.index = d, e ? (d = c.alternate, d !== null ? (d = d.index, d < s ? (c.flags |= 2, s) : d) : (c.flags |= 2, s)) : (c.flags |= 1048576, s)
    }

    function o(c) {
        return e && c.alternate === null && (c.flags |= 2), c
    }

    function u(c, s, d, v) {
        return s === null || s.tag !== 6 ? (s = Ha(d, c.mode, v), s.return = c, s) : (s = a(s, d), s.return = c, s)
    }

    function i(c, s, d, v) {
        var x = d.type;
        return x === Vn ? g(c, s, d.props.children, v, d.key) : s !== null && (s.elementType === x || typeof x == "object" && x !== null && x.$$typeof === rn && yu(x) === s.type) ? (v = a(s, d.props), v.ref = kr(c, s, d), v.return = c, v) : (v = Dt(d.type, d.key, d.props, null, c.mode, v), v.ref = kr(c, s, d), v.return = c, v)
    }

    function f(c, s, d, v) {
        return s === null || s.tag !== 4 || s.stateNode.containerInfo !== d.containerInfo || s.stateNode.implementation !== d.implementation ? (s = Qa(d, c.mode, v), s.return = c, s) : (s = a(s, d.children || []), s.return = c, s)
    }

    function g(c, s, d, v, x) {
        return s === null || s.tag !== 7 ? (s = zn(d, c.mode, v, x), s.return = c, s) : (s = a(s, d), s.return = c, s)
    }

    function h(c, s, d) {
        if (typeof s == "string" && s !== "" || typeof s == "number") return s = Ha("" + s, c.mode, d), s.return = c, s;
        if (typeof s == "object" && s !== null) {
            switch (s.$$typeof) {
                case ut:
                    return d = Dt(s.type, s.key, s.props, null, c.mode, d), d.ref = kr(c, null, s), d.return = c, d;
                case An:
                    return s = Qa(s, c.mode, d), s.return = c, s;
                case rn:
                    var v = s._init;
                    return h(c, v(s._payload), d)
            }
            if (Er(s) || hr(s)) return s = zn(s, c.mode, d, null), s.return = c, s;
            yt(c, s)
        }
        return null
    }

    function p(c, s, d, v) {
        var x = s !== null ? s.key : null;
        if (typeof d == "string" && d !== "" || typeof d == "number") return x !== null ? null : u(c, s, "" + d, v);
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
                case ut:
                    return d.key === x ? i(c, s, d, v) : null;
                case An:
                    return d.key === x ? f(c, s, d, v) : null;
                case rn:
                    return x = d._init, p(c, s, x(d._payload), v)
            }
            if (Er(d) || hr(d)) return x !== null ? null : g(c, s, d, v, null);
            yt(c, d)
        }
        return null
    }

    function b(c, s, d, v, x) {
        if (typeof v == "string" && v !== "" || typeof v == "number") return c = c.get(d) || null, u(s, c, "" + v, x);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case ut:
                    return c = c.get(v.key === null ? d : v.key) || null, i(s, c, v, x);
                case An:
                    return c = c.get(v.key === null ? d : v.key) || null, f(s, c, v, x);
                case rn:
                    var N = v._init;
                    return b(c, s, d, N(v._payload), x)
            }
            if (Er(v) || hr(v)) return c = c.get(d) || null, g(s, c, v, x, null);
            yt(s, v)
        }
        return null
    }

    function k(c, s, d, v) {
        for (var x = null, N = null, P = s, L = s = 0, O = null; P !== null && L < d.length; L++) {
            P.index > L ? (O = P, P = null) : O = P.sibling;
            var R = p(c, P, d[L], v);
            if (R === null) {
                P === null && (P = O);
                break
            }
            e && P && R.alternate === null && n(c, P), s = l(R, s, L), N === null ? x = R : N.sibling = R, N = R, P = O
        }
        if (L === d.length) return r(c, P), B && En(c, L), x;
        if (P === null) {
            for (; L < d.length; L++) P = h(c, d[L], v), P !== null && (s = l(P, s, L), N === null ? x = P : N.sibling = P, N = P);
            return B && En(c, L), x
        }
        for (P = t(c, P); L < d.length; L++) O = b(P, c, L, d[L], v), O !== null && (e && O.alternate !== null && P.delete(O.key === null ? L : O.key), s = l(O, s, L), N === null ? x = O : N.sibling = O, N = O);
        return e && P.forEach(function(K) {
            return n(c, K)
        }), B && En(c, L), x
    }

    function w(c, s, d, v) {
        var x = hr(d);
        if (typeof x != "function") throw Error(y(150));
        if (d = x.call(d), d == null) throw Error(y(151));
        for (var N = x = null, P = s, L = s = 0, O = null, R = d.next(); P !== null && !R.done; L++, R = d.next()) {
            P.index > L ? (O = P, P = null) : O = P.sibling;
            var K = p(c, P, R.value, v);
            if (K === null) {
                P === null && (P = O);
                break
            }
            e && P && K.alternate === null && n(c, P), s = l(K, s, L), N === null ? x = K : N.sibling = K, N = K, P = O
        }
        if (R.done) return r(c, P), B && En(c, L), x;
        if (P === null) {
            for (; !R.done; L++, R = d.next()) R = h(c, R.value, v), R !== null && (s = l(R, s, L), N === null ? x = R : N.sibling = R, N = R);
            return B && En(c, L), x
        }
        for (P = t(c, P); !R.done; L++, R = d.next()) R = b(P, c, L, R.value, v), R !== null && (e && R.alternate !== null && P.delete(R.key === null ? L : R.key), s = l(R, s, L), N === null ? x = R : N.sibling = R, N = R);
        return e && P.forEach(function(Ve) {
            return n(c, Ve)
        }), B && En(c, L), x
    }

    function I(c, s, d, v) {
        if (typeof d == "object" && d !== null && d.type === Vn && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
                case ut:
                    e: {
                        for (var x = d.key, N = s; N !== null;) {
                            if (N.key === x) {
                                if (x = d.type, x === Vn) {
                                    if (N.tag === 7) {
                                        r(c, N.sibling), s = a(N, d.props.children), s.return = c, c = s;
                                        break e
                                    }
                                } else if (N.elementType === x || typeof x == "object" && x !== null && x.$$typeof === rn && yu(x) === N.type) {
                                    r(c, N.sibling), s = a(N, d.props), s.ref = kr(c, N, d), s.return = c, c = s;
                                    break e
                                }
                                r(c, N);
                                break
                            } else n(c, N);
                            N = N.sibling
                        }
                        d.type === Vn ? (s = zn(d.props.children, c.mode, v, d.key), s.return = c, c = s) : (v = Dt(d.type, d.key, d.props, null, c.mode, v), v.ref = kr(c, s, d), v.return = c, c = v)
                    }
                    return o(c);
                case An:
                    e: {
                        for (N = d.key; s !== null;) {
                            if (s.key === N)
                                if (s.tag === 4 && s.stateNode.containerInfo === d.containerInfo && s.stateNode.implementation === d.implementation) {
                                    r(c, s.sibling), s = a(s, d.children || []), s.return = c, c = s;
                                    break e
                                } else {
                                    r(c, s);
                                    break
                                }
                            else n(c, s);
                            s = s.sibling
                        }
                        s = Qa(d, c.mode, v),
                        s.return = c,
                        c = s
                    }
                    return o(c);
                case rn:
                    return N = d._init, I(c, s, N(d._payload), v)
            }
            if (Er(d)) return k(c, s, d, v);
            if (hr(d)) return w(c, s, d, v);
            yt(c, d)
        }
        return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, s !== null && s.tag === 6 ? (r(c, s.sibling), s = a(s, d), s.return = c, c = s) : (r(c, s), s = Ha(d, c.mode, v), s.return = c, c = s), o(c)) : r(c, s)
    }
    return I
}
var ir = ts(!0),
    as = ts(!1),
    Kt = kn(null),
    Yt = null,
    Xn = null,
    so = null;

function co() {
    so = Xn = Yt = null
}

function fo(e) {
    var n = Kt.current;
    V(Kt), e._currentValue = n
}

function El(e, n, r) {
    for (; e !== null;) {
        var t = e.alternate;
        if ((e.childLanes & n) !== n ? (e.childLanes |= n, t !== null && (t.childLanes |= n)) : t !== null && (t.childLanes & n) !== n && (t.childLanes |= n), e === r) break;
        e = e.return
    }
}

function tr(e, n) {
    Yt = e, so = Xn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (me = !0), e.firstContext = null)
}

function Pe(e) {
    var n = e._currentValue;
    if (so !== e)
        if (e = {
                context: e,
                memoizedValue: n,
                next: null
            }, Xn === null) {
            if (Yt === null) throw Error(y(308));
            Xn = e, Yt.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Xn = Xn.next = e;
    return n
}
var Nn = null;

function po(e) {
    Nn === null ? Nn = [e] : Nn.push(e)
}

function ls(e, n, r, t) {
    var a = n.interleaved;
    return a === null ? (r.next = r, po(n)) : (r.next = a.next, a.next = r), n.interleaved = r, Xe(e, t)
}

function Xe(e, n) {
    e.lanes |= n;
    var r = e.alternate;
    for (r !== null && (r.lanes |= n), r = e, e = e.return; e !== null;) e.childLanes |= n, r = e.alternate, r !== null && (r.childLanes |= n), r = e, e = e.return;
    return r.tag === 3 ? r.stateNode : null
}
var tn = !1;

function mo(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function os(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function qe(e, n) {
    return {
        eventTime: e,
        lane: n,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function pn(e, n, r) {
    var t = e.updateQueue;
    if (t === null) return null;
    if (t = t.shared, F & 2) {
        var a = t.pending;
        return a === null ? n.next = n : (n.next = a.next, a.next = n), t.pending = n, Xe(e, r)
    }
    return a = t.interleaved, a === null ? (n.next = n, po(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Xe(e, r)
}

function Pt(e, n, r) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (r & 4194240) !== 0)) {
        var t = n.lanes;
        t &= e.pendingLanes, r |= t, n.lanes = r, Zl(e, r)
    }
}

function bu(e, n) {
    var r = e.updateQueue,
        t = e.alternate;
    if (t !== null && (t = t.updateQueue, r === t)) {
        var a = null,
            l = null;
        if (r = r.firstBaseUpdate, r !== null) {
            do {
                var o = {
                    eventTime: r.eventTime,
                    lane: r.lane,
                    tag: r.tag,
                    payload: r.payload,
                    callback: r.callback,
                    next: null
                };
                l === null ? a = l = o : l = l.next = o, r = r.next
            } while (r !== null);
            l === null ? a = l = n : l = l.next = n
        } else a = l = n;
        r = {
            baseState: t.baseState,
            firstBaseUpdate: a,
            lastBaseUpdate: l,
            shared: t.shared,
            effects: t.effects
        }, e.updateQueue = r;
        return
    }
    e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = n : e.next = n, r.lastBaseUpdate = n
}

function Xt(e, n, r, t) {
    var a = e.updateQueue;
    tn = !1;
    var l = a.firstBaseUpdate,
        o = a.lastBaseUpdate,
        u = a.shared.pending;
    if (u !== null) {
        a.shared.pending = null;
        var i = u,
            f = i.next;
        i.next = null, o === null ? l = f : o.next = f, o = i;
        var g = e.alternate;
        g !== null && (g = g.updateQueue, u = g.lastBaseUpdate, u !== o && (u === null ? g.firstBaseUpdate = f : u.next = f, g.lastBaseUpdate = i))
    }
    if (l !== null) {
        var h = a.baseState;
        o = 0, g = f = i = null, u = l;
        do {
            var p = u.lane,
                b = u.eventTime;
            if ((t & p) === p) {
                g !== null && (g = g.next = {
                    eventTime: b,
                    lane: 0,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                });
                e: {
                    var k = e,
                        w = u;
                    switch (p = n, b = r, w.tag) {
                        case 1:
                            if (k = w.payload, typeof k == "function") {
                                h = k.call(b, h, p);
                                break e
                            }
                            h = k;
                            break e;
                        case 3:
                            k.flags = k.flags & -65537 | 128;
                        case 0:
                            if (k = w.payload, p = typeof k == "function" ? k.call(b, h, p) : k, p == null) break e;
                            h = Q({}, h, p);
                            break e;
                        case 2:
                            tn = !0
                    }
                }
                u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = a.effects, p === null ? a.effects = [u] : p.push(u))
            } else b = {
                eventTime: b,
                lane: p,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null
            }, g === null ? (f = g = b, i = h) : g = g.next = b, o |= p;
            if (u = u.next, u === null) {
                if (u = a.shared.pending, u === null) break;
                p = u, u = p.next, p.next = null, a.lastBaseUpdate = p, a.shared.pending = null
            }
        } while (!0);
        if (g === null && (i = h), a.baseState = i, a.firstBaseUpdate = f, a.lastBaseUpdate = g, n = a.shared.interleaved, n !== null) {
            a = n;
            do o |= a.lane, a = a.next; while (a !== n)
        } else l === null && (a.shared.lanes = 0);
        Dn |= o, e.lanes = o, e.memoizedState = h
    }
}

function ku(e, n, r) {
    if (e = n.effects, n.effects = null, e !== null)
        for (n = 0; n < e.length; n++) {
            var t = e[n],
                a = t.callback;
            if (a !== null) {
                if (t.callback = null, t = r, typeof a != "function") throw Error(y(191, a));
                a.call(t)
            }
        }
}
var tt = {},
    Ae = kn(tt),
    qr = kn(tt),
    Kr = kn(tt);

function Pn(e) {
    if (e === tt) throw Error(y(174));
    return e
}

function ho(e, n) {
    switch ($(Kr, n), $(qr, e), $(Ae, tt), e = n.nodeType, e) {
        case 9:
        case 11:
            n = (n = n.documentElement) ? n.namespaceURI : al(null, "");
            break;
        default:
            e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = al(n, e)
    }
    V(Ae), $(Ae, n)
}

function sr() {
    V(Ae), V(qr), V(Kr)
}

function us(e) {
    Pn(Kr.current);
    var n = Pn(Ae.current),
        r = al(n, e.type);
    n !== r && ($(qr, e), $(Ae, r))
}

function go(e) {
    qr.current === e && (V(Ae), V(qr))
}
var W = kn(0);

function Gt(e) {
    for (var n = e; n !== null;) {
        if (n.tag === 13) {
            var r = n.memoizedState;
            if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!")) return n
        } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
            if (n.flags & 128) return n
        } else if (n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === e) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === e) return null;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
    return null
}
var ja = [];

function vo() {
    for (var e = 0; e < ja.length; e++) ja[e]._workInProgressVersionPrimary = null;
    ja.length = 0
}
var Lt = Ze.ReactCurrentDispatcher,
    $a = Ze.ReactCurrentBatchConfig,
    Rn = 0,
    H = null,
    Z = null,
    ee = null,
    Zt = !1,
    Tr = !1,
    Yr = 0,
    Jf = 0;

function le() {
    throw Error(y(321))
}

function yo(e, n) {
    if (n === null) return !1;
    for (var r = 0; r < n.length && r < e.length; r++)
        if (!Oe(e[r], n[r])) return !1;
    return !0
}

function bo(e, n, r, t, a, l) {
    if (Rn = l, H = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, Lt.current = e === null || e.memoizedState === null ? td : ad, e = r(t, a), Tr) {
        l = 0;
        do {
            if (Tr = !1, Yr = 0, 25 <= l) throw Error(y(301));
            l += 1, ee = Z = null, n.updateQueue = null, Lt.current = ld, e = r(t, a)
        } while (Tr)
    }
    if (Lt.current = Jt, n = Z !== null && Z.next !== null, Rn = 0, ee = Z = H = null, Zt = !1, n) throw Error(y(300));
    return e
}

function ko() {
    var e = Yr !== 0;
    return Yr = 0, e
}

function Ue() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ee === null ? H.memoizedState = ee = e : ee = ee.next = e, ee
}

function Le() {
    if (Z === null) {
        var e = H.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = Z.next;
    var n = ee === null ? H.memoizedState : ee.next;
    if (n !== null) ee = n, Z = e;
    else {
        if (e === null) throw Error(y(310));
        Z = e, e = {
            memoizedState: Z.memoizedState,
            baseState: Z.baseState,
            baseQueue: Z.baseQueue,
            queue: Z.queue,
            next: null
        }, ee === null ? H.memoizedState = ee = e : ee = ee.next = e
    }
    return ee
}

function Xr(e, n) {
    return typeof n == "function" ? n(e) : n
}

function Aa(e) {
    var n = Le(),
        r = n.queue;
    if (r === null) throw Error(y(311));
    r.lastRenderedReducer = e;
    var t = Z,
        a = t.baseQueue,
        l = r.pending;
    if (l !== null) {
        if (a !== null) {
            var o = a.next;
            a.next = l.next, l.next = o
        }
        t.baseQueue = a = l, r.pending = null
    }
    if (a !== null) {
        l = a.next, t = t.baseState;
        var u = o = null,
            i = null,
            f = l;
        do {
            var g = f.lane;
            if ((Rn & g) === g) i !== null && (i = i.next = {
                lane: 0,
                action: f.action,
                hasEagerState: f.hasEagerState,
                eagerState: f.eagerState,
                next: null
            }), t = f.hasEagerState ? f.eagerState : e(t, f.action);
            else {
                var h = {
                    lane: g,
                    action: f.action,
                    hasEagerState: f.hasEagerState,
                    eagerState: f.eagerState,
                    next: null
                };
                i === null ? (u = i = h, o = t) : i = i.next = h, H.lanes |= g, Dn |= g
            }
            f = f.next
        } while (f !== null && f !== l);
        i === null ? o = t : i.next = u, Oe(t, n.memoizedState) || (me = !0), n.memoizedState = t, n.baseState = o, n.baseQueue = i, r.lastRenderedState = t
    }
    if (e = r.interleaved, e !== null) {
        a = e;
        do l = a.lane, H.lanes |= l, Dn |= l, a = a.next; while (a !== e)
    } else a === null && (r.lanes = 0);
    return [n.memoizedState, r.dispatch]
}

function Va(e) {
    var n = Le(),
        r = n.queue;
    if (r === null) throw Error(y(311));
    r.lastRenderedReducer = e;
    var t = r.dispatch,
        a = r.pending,
        l = n.memoizedState;
    if (a !== null) {
        r.pending = null;
        var o = a = a.next;
        do l = e(l, o.action), o = o.next; while (o !== a);
        Oe(l, n.memoizedState) || (me = !0), n.memoizedState = l, n.baseQueue === null && (n.baseState = l), r.lastRenderedState = l
    }
    return [l, t]
}

function is() {}

function ss(e, n) {
    var r = H,
        t = Le(),
        a = n(),
        l = !Oe(t.memoizedState, a);
    if (l && (t.memoizedState = a, me = !0), t = t.queue, wo(ds.bind(null, r, t, e), [e]), t.getSnapshot !== n || l || ee !== null && ee.memoizedState.tag & 1) {
        if (r.flags |= 2048, Gr(9, fs.bind(null, r, t, a, n), void 0, null), ne === null) throw Error(y(349));
        Rn & 30 || cs(r, n, a)
    }
    return a
}

function cs(e, n, r) {
    e.flags |= 16384, e = {
        getSnapshot: n,
        value: r
    }, n = H.updateQueue, n === null ? (n = {
        lastEffect: null,
        stores: null
    }, H.updateQueue = n, n.stores = [e]) : (r = n.stores, r === null ? n.stores = [e] : r.push(e))
}

function fs(e, n, r, t) {
    n.value = r, n.getSnapshot = t, ps(n) && ms(e)
}

function ds(e, n, r) {
    return r(function() {
        ps(n) && ms(e)
    })
}

function ps(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
        var r = n();
        return !Oe(e, r)
    } catch {
        return !0
    }
}

function ms(e) {
    var n = Xe(e, 1);
    n !== null && Fe(n, e, 1, -1)
}

function wu(e) {
    var n = Ue();
    return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xr,
        lastRenderedState: e
    }, n.queue = e, e = e.dispatch = rd.bind(null, H, e), [n.memoizedState, e]
}

function Gr(e, n, r, t) {
    return e = {
        tag: e,
        create: n,
        destroy: r,
        deps: t,
        next: null
    }, n = H.updateQueue, n === null ? (n = {
        lastEffect: null,
        stores: null
    }, H.updateQueue = n, n.lastEffect = e.next = e) : (r = n.lastEffect, r === null ? n.lastEffect = e.next = e : (t = r.next, r.next = e, e.next = t, n.lastEffect = e)), e
}

function hs() {
    return Le().memoizedState
}

function zt(e, n, r, t) {
    var a = Ue();
    H.flags |= e, a.memoizedState = Gr(1 | n, r, void 0, t === void 0 ? null : t)
}

function da(e, n, r, t) {
    var a = Le();
    t = t === void 0 ? null : t;
    var l = void 0;
    if (Z !== null) {
        var o = Z.memoizedState;
        if (l = o.destroy, t !== null && yo(t, o.deps)) {
            a.memoizedState = Gr(n, r, l, t);
            return
        }
    }
    H.flags |= e, a.memoizedState = Gr(1 | n, r, l, t)
}

function Su(e, n) {
    return zt(8390656, 8, e, n)
}

function wo(e, n) {
    return da(2048, 8, e, n)
}

function gs(e, n) {
    return da(4, 2, e, n)
}

function vs(e, n) {
    return da(4, 4, e, n)
}

function ys(e, n) {
    if (typeof n == "function") return e = e(), n(e),
        function() {
            n(null)
        };
    if (n != null) return e = e(), n.current = e,
        function() {
            n.current = null
        }
}

function bs(e, n, r) {
    return r = r != null ? r.concat([e]) : null, da(4, 4, ys.bind(null, n, e), r)
}

function So() {}

function ks(e, n) {
    var r = Le();
    n = n === void 0 ? null : n;
    var t = r.memoizedState;
    return t !== null && n !== null && yo(n, t[1]) ? t[0] : (r.memoizedState = [e, n], e)
}

function ws(e, n) {
    var r = Le();
    n = n === void 0 ? null : n;
    var t = r.memoizedState;
    return t !== null && n !== null && yo(n, t[1]) ? t[0] : (e = e(), r.memoizedState = [e, n], e)
}

function Ss(e, n, r) {
    return Rn & 21 ? (Oe(r, n) || (r = Ni(), H.lanes |= r, Dn |= r, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, me = !0), e.memoizedState = r)
}

function ed(e, n) {
    var r = U;
    U = r !== 0 && 4 > r ? r : 4, e(!0);
    var t = $a.transition;
    $a.transition = {};
    try {
        e(!1), n()
    } finally {
        U = r, $a.transition = t
    }
}

function xs() {
    return Le().memoizedState
}

function nd(e, n, r) {
    var t = hn(e);
    if (r = {
            lane: t,
            action: r,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Es(e)) _s(n, r);
    else if (r = ls(e, n, r, t), r !== null) {
        var a = ce();
        Fe(r, e, t, a), Cs(r, n, t)
    }
}

function rd(e, n, r) {
    var t = hn(e),
        a = {
            lane: t,
            action: r,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (Es(e)) _s(n, a);
    else {
        var l = e.alternate;
        if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = n.lastRenderedReducer, l !== null)) try {
            var o = n.lastRenderedState,
                u = l(o, r);
            if (a.hasEagerState = !0, a.eagerState = u, Oe(u, o)) {
                var i = n.interleaved;
                i === null ? (a.next = a, po(n)) : (a.next = i.next, i.next = a), n.interleaved = a;
                return
            }
        } catch {} finally {}
        r = ls(e, n, a, t), r !== null && (a = ce(), Fe(r, e, t, a), Cs(r, n, t))
    }
}

function Es(e) {
    var n = e.alternate;
    return e === H || n !== null && n === H
}

function _s(e, n) {
    Tr = Zt = !0;
    var r = e.pending;
    r === null ? n.next = n : (n.next = r.next, r.next = n), e.pending = n
}

function Cs(e, n, r) {
    if (r & 4194240) {
        var t = n.lanes;
        t &= e.pendingLanes, r |= t, n.lanes = r, Zl(e, r)
    }
}
var Jt = {
        readContext: Pe,
        useCallback: le,
        useContext: le,
        useEffect: le,
        useImperativeHandle: le,
        useInsertionEffect: le,
        useLayoutEffect: le,
        useMemo: le,
        useReducer: le,
        useRef: le,
        useState: le,
        useDebugValue: le,
        useDeferredValue: le,
        useTransition: le,
        useMutableSource: le,
        useSyncExternalStore: le,
        useId: le,
        unstable_isNewReconciler: !1
    },
    td = {
        readContext: Pe,
        useCallback: function(e, n) {
            return Ue().memoizedState = [e, n === void 0 ? null : n], e
        },
        useContext: Pe,
        useEffect: Su,
        useImperativeHandle: function(e, n, r) {
            return r = r != null ? r.concat([e]) : null, zt(4194308, 4, ys.bind(null, n, e), r)
        },
        useLayoutEffect: function(e, n) {
            return zt(4194308, 4, e, n)
        },
        useInsertionEffect: function(e, n) {
            return zt(4, 2, e, n)
        },
        useMemo: function(e, n) {
            var r = Ue();
            return n = n === void 0 ? null : n, e = e(), r.memoizedState = [e, n], e
        },
        useReducer: function(e, n, r) {
            var t = Ue();
            return n = r !== void 0 ? r(n) : n, t.memoizedState = t.baseState = n, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: n
            }, t.queue = e, e = e.dispatch = nd.bind(null, H, e), [t.memoizedState, e]
        },
        useRef: function(e) {
            var n = Ue();
            return e = {
                current: e
            }, n.memoizedState = e
        },
        useState: wu,
        useDebugValue: So,
        useDeferredValue: function(e) {
            return Ue().memoizedState = e
        },
        useTransition: function() {
            var e = wu(!1),
                n = e[0];
            return e = ed.bind(null, e[1]), Ue().memoizedState = e, [n, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, n, r) {
            var t = H,
                a = Ue();
            if (B) {
                if (r === void 0) throw Error(y(407));
                r = r()
            } else {
                if (r = n(), ne === null) throw Error(y(349));
                Rn & 30 || cs(t, n, r)
            }
            a.memoizedState = r;
            var l = {
                value: r,
                getSnapshot: n
            };
            return a.queue = l, Su(ds.bind(null, t, l, e), [e]), t.flags |= 2048, Gr(9, fs.bind(null, t, l, r, n), void 0, null), r
        },
        useId: function() {
            var e = Ue(),
                n = ne.identifierPrefix;
            if (B) {
                var r = Qe,
                    t = He;
                r = (t & ~(1 << 32 - De(t) - 1)).toString(32) + r, n = ":" + n + "R" + r, r = Yr++, 0 < r && (n += "H" + r.toString(32)), n += ":"
            } else r = Jf++, n = ":" + n + "r" + r.toString(32) + ":";
            return e.memoizedState = n
        },
        unstable_isNewReconciler: !1
    },
    ad = {
        readContext: Pe,
        useCallback: ks,
        useContext: Pe,
        useEffect: wo,
        useImperativeHandle: bs,
        useInsertionEffect: gs,
        useLayoutEffect: vs,
        useMemo: ws,
        useReducer: Aa,
        useRef: hs,
        useState: function() {
            return Aa(Xr)
        },
        useDebugValue: So,
        useDeferredValue: function(e) {
            var n = Le();
            return Ss(n, Z.memoizedState, e)
        },
        useTransition: function() {
            var e = Aa(Xr)[0],
                n = Le().memoizedState;
            return [e, n]
        },
        useMutableSource: is,
        useSyncExternalStore: ss,
        useId: xs,
        unstable_isNewReconciler: !1
    },
    ld = {
        readContext: Pe,
        useCallback: ks,
        useContext: Pe,
        useEffect: wo,
        useImperativeHandle: bs,
        useInsertionEffect: gs,
        useLayoutEffect: vs,
        useMemo: ws,
        useReducer: Va,
        useRef: hs,
        useState: function() {
            return Va(Xr)
        },
        useDebugValue: So,
        useDeferredValue: function(e) {
            var n = Le();
            return Z === null ? n.memoizedState = e : Ss(n, Z.memoizedState, e)
        },
        useTransition: function() {
            var e = Va(Xr)[0],
                n = Le().memoizedState;
            return [e, n]
        },
        useMutableSource: is,
        useSyncExternalStore: ss,
        useId: xs,
        unstable_isNewReconciler: !1
    };

function Me(e, n) {
    if (e && e.defaultProps) {
        n = Q({}, n), e = e.defaultProps;
        for (var r in e) n[r] === void 0 && (n[r] = e[r]);
        return n
    }
    return n
}

function _l(e, n, r, t) {
    n = e.memoizedState, r = r(t, n), r = r == null ? n : Q({}, n, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r)
}
var pa = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? In(e) === e : !1
    },
    enqueueSetState: function(e, n, r) {
        e = e._reactInternals;
        var t = ce(),
            a = hn(e),
            l = qe(t, a);
        l.payload = n, r != null && (l.callback = r), n = pn(e, l, a), n !== null && (Fe(n, e, a, t), Pt(n, e, a))
    },
    enqueueReplaceState: function(e, n, r) {
        e = e._reactInternals;
        var t = ce(),
            a = hn(e),
            l = qe(t, a);
        l.tag = 1, l.payload = n, r != null && (l.callback = r), n = pn(e, l, a), n !== null && (Fe(n, e, a, t), Pt(n, e, a))
    },
    enqueueForceUpdate: function(e, n) {
        e = e._reactInternals;
        var r = ce(),
            t = hn(e),
            a = qe(r, t);
        a.tag = 2, n != null && (a.callback = n), n = pn(e, a, t), n !== null && (Fe(n, e, t, r), Pt(n, e, t))
    }
};

function xu(e, n, r, t, a, l, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(t, l, o) : n.prototype && n.prototype.isPureReactComponent ? !Br(r, t) || !Br(a, l) : !0
}

function Ns(e, n, r) {
    var t = !1,
        a = yn,
        l = n.contextType;
    return typeof l == "object" && l !== null ? l = Pe(l) : (a = ge(n) ? Mn : ie.current, t = n.contextTypes, l = (t = t != null) ? or(e, a) : yn), n = new n(r, l), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = pa, e.stateNode = n, n._reactInternals = e, t && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = l), n
}

function Eu(e, n, r, t) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(r, t), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(r, t), n.state !== e && pa.enqueueReplaceState(n, n.state, null)
}

function Cl(e, n, r, t) {
    var a = e.stateNode;
    a.props = r, a.state = e.memoizedState, a.refs = {}, mo(e);
    var l = n.contextType;
    typeof l == "object" && l !== null ? a.context = Pe(l) : (l = ge(n) ? Mn : ie.current, a.context = or(e, l)), a.state = e.memoizedState, l = n.getDerivedStateFromProps, typeof l == "function" && (_l(e, n, l, r), a.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (n = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), n !== a.state && pa.enqueueReplaceState(a, a.state, null), Xt(e, r, a, t), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308)
}

function cr(e, n) {
    try {
        var r = "",
            t = n;
        do r += Tc(t), t = t.return; while (t);
        var a = r
    } catch (l) {
        a = `
Error generating stack: ` + l.message + `
` + l.stack
    }
    return {
        value: e,
        source: n,
        stack: a,
        digest: null
    }
}

function Ba(e, n, r) {
    return {
        value: e,
        source: null,
        stack: r ?? null,
        digest: n ?? null
    }
}

function Nl(e, n) {
    try {
        console.error(n.value)
    } catch (r) {
        setTimeout(function() {
            throw r
        })
    }
}
var od = typeof WeakMap == "function" ? WeakMap : Map;

function Ps(e, n, r) {
    r = qe(-1, r), r.tag = 3, r.payload = {
        element: null
    };
    var t = n.value;
    return r.callback = function() {
        na || (na = !0, Ol = t), Nl(e, n)
    }, r
}

function Ls(e, n, r) {
    r = qe(-1, r), r.tag = 3;
    var t = e.type.getDerivedStateFromError;
    if (typeof t == "function") {
        var a = n.value;
        r.payload = function() {
            return t(a)
        }, r.callback = function() {
            Nl(e, n)
        }
    }
    var l = e.stateNode;
    return l !== null && typeof l.componentDidCatch == "function" && (r.callback = function() {
        Nl(e, n), typeof t != "function" && (mn === null ? mn = new Set([this]) : mn.add(this));
        var o = n.stack;
        this.componentDidCatch(n.value, {
            componentStack: o !== null ? o : ""
        })
    }), r
}

function _u(e, n, r) {
    var t = e.pingCache;
    if (t === null) {
        t = e.pingCache = new od;
        var a = new Set;
        t.set(n, a)
    } else a = t.get(n), a === void 0 && (a = new Set, t.set(n, a));
    a.has(r) || (a.add(r), e = kd.bind(null, e, n, r), n.then(e, e))
}

function Cu(e) {
    do {
        var n;
        if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Nu(e, n, r, t, a) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = a, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (n = qe(-1, 1), n.tag = 2, pn(r, n, 1))), r.lanes |= 1), e)
}
var ud = Ze.ReactCurrentOwner,
    me = !1;

function se(e, n, r, t) {
    n.child = e === null ? as(n, null, r, t) : ir(n, e.child, r, t)
}

function Pu(e, n, r, t, a) {
    r = r.render;
    var l = n.ref;
    return tr(n, a), t = bo(e, n, r, t, l, a), r = ko(), e !== null && !me ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~a, Ge(e, n, a)) : (B && r && oo(n), n.flags |= 1, se(e, n, t, a), n.child)
}

function Lu(e, n, r, t, a) {
    if (e === null) {
        var l = r.type;
        return typeof l == "function" && !zo(l) && l.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (n.tag = 15, n.type = l, zs(e, n, l, t, a)) : (e = Dt(r.type, null, t, n, n.mode, a), e.ref = n.ref, e.return = n, n.child = e)
    }
    if (l = e.child, !(e.lanes & a)) {
        var o = l.memoizedProps;
        if (r = r.compare, r = r !== null ? r : Br, r(o, t) && e.ref === n.ref) return Ge(e, n, a)
    }
    return n.flags |= 1, e = gn(l, t), e.ref = n.ref, e.return = n, n.child = e
}

function zs(e, n, r, t, a) {
    if (e !== null) {
        var l = e.memoizedProps;
        if (Br(l, t) && e.ref === n.ref)
            if (me = !1, n.pendingProps = t = l, (e.lanes & a) !== 0) e.flags & 131072 && (me = !0);
            else return n.lanes = e.lanes, Ge(e, n, a)
    }
    return Pl(e, n, r, t, a)
}

function Ms(e, n, r) {
    var t = n.pendingProps,
        a = t.children,
        l = e !== null ? e.memoizedState : null;
    if (t.mode === "hidden")
        if (!(n.mode & 1)) n.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, $(Zn, ye), ye |= r;
        else {
            if (!(r & 1073741824)) return e = l !== null ? l.baseLanes | r : r, n.lanes = n.childLanes = 1073741824, n.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, n.updateQueue = null, $(Zn, ye), ye |= e, null;
            n.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, t = l !== null ? l.baseLanes : r, $(Zn, ye), ye |= t
        }
    else l !== null ? (t = l.baseLanes | r, n.memoizedState = null) : t = r, $(Zn, ye), ye |= t;
    return se(e, n, a, r), n.child
}

function Ts(e, n) {
    var r = n.ref;
    (e === null && r !== null || e !== null && e.ref !== r) && (n.flags |= 512, n.flags |= 2097152)
}

function Pl(e, n, r, t, a) {
    var l = ge(r) ? Mn : ie.current;
    return l = or(n, l), tr(n, a), r = bo(e, n, r, t, l, a), t = ko(), e !== null && !me ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~a, Ge(e, n, a)) : (B && t && oo(n), n.flags |= 1, se(e, n, r, a), n.child)
}

function zu(e, n, r, t, a) {
    if (ge(r)) {
        var l = !0;
        Ht(n)
    } else l = !1;
    if (tr(n, a), n.stateNode === null) Mt(e, n), Ns(n, r, t), Cl(n, r, t, a), t = !0;
    else if (e === null) {
        var o = n.stateNode,
            u = n.memoizedProps;
        o.props = u;
        var i = o.context,
            f = r.contextType;
        typeof f == "object" && f !== null ? f = Pe(f) : (f = ge(r) ? Mn : ie.current, f = or(n, f));
        var g = r.getDerivedStateFromProps,
            h = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== t || i !== f) && Eu(n, o, t, f), tn = !1;
        var p = n.memoizedState;
        o.state = p, Xt(n, t, o, a), i = n.memoizedState, u !== t || p !== i || he.current || tn ? (typeof g == "function" && (_l(n, r, g, t), i = n.memoizedState), (u = tn || xu(n, r, u, t, p, i, f)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = t, n.memoizedState = i), o.props = t, o.state = i, o.context = f, t = u) : (typeof o.componentDidMount == "function" && (n.flags |= 4194308), t = !1)
    } else {
        o = n.stateNode, os(e, n), u = n.memoizedProps, f = n.type === n.elementType ? u : Me(n.type, u), o.props = f, h = n.pendingProps, p = o.context, i = r.contextType, typeof i == "object" && i !== null ? i = Pe(i) : (i = ge(r) ? Mn : ie.current, i = or(n, i));
        var b = r.getDerivedStateFromProps;
        (g = typeof b == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== h || p !== i) && Eu(n, o, t, i), tn = !1, p = n.memoizedState, o.state = p, Xt(n, t, o, a);
        var k = n.memoizedState;
        u !== h || p !== k || he.current || tn ? (typeof b == "function" && (_l(n, r, b, t), k = n.memoizedState), (f = tn || xu(n, r, f, t, p, k, i) || !1) ? (g || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(t, k, i), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(t, k, i)), typeof o.componentDidUpdate == "function" && (n.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), n.memoizedProps = t, n.memoizedState = k), o.props = t, o.state = k, o.context = i, t = f) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), t = !1)
    }
    return Ll(e, n, r, t, l, a)
}

function Ll(e, n, r, t, a, l) {
    Ts(e, n);
    var o = (n.flags & 128) !== 0;
    if (!t && !o) return a && hu(n, r, !1), Ge(e, n, l);
    t = n.stateNode, ud.current = n;
    var u = o && typeof r.getDerivedStateFromError != "function" ? null : t.render();
    return n.flags |= 1, e !== null && o ? (n.child = ir(n, e.child, null, l), n.child = ir(n, null, u, l)) : se(e, n, u, l), n.memoizedState = t.state, a && hu(n, r, !0), n.child
}

function Rs(e) {
    var n = e.stateNode;
    n.pendingContext ? mu(e, n.pendingContext, n.pendingContext !== n.context) : n.context && mu(e, n.context, !1), ho(e, n.containerInfo)
}

function Mu(e, n, r, t, a) {
    return ur(), io(a), n.flags |= 256, se(e, n, r, t), n.child
}
var zl = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function Ml(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Ds(e, n, r) {
    var t = n.pendingProps,
        a = W.current,
        l = !1,
        o = (n.flags & 128) !== 0,
        u;
    if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), u ? (l = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), $(W, a & 1), e === null) return xl(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (o = t.children, e = t.fallback, l ? (t = n.mode, l = n.child, o = {
        mode: "hidden",
        children: o
    }, !(t & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = o) : l = ga(o, t, 0, null), e = zn(e, t, r, null), l.return = n, e.return = n, l.sibling = e, n.child = l, n.child.memoizedState = Ml(r), n.memoizedState = zl, e) : xo(n, o));
    if (a = e.memoizedState, a !== null && (u = a.dehydrated, u !== null)) return id(e, n, o, t, u, a, r);
    if (l) {
        l = t.fallback, o = n.mode, a = e.child, u = a.sibling;
        var i = {
            mode: "hidden",
            children: t.children
        };
        return !(o & 1) && n.child !== a ? (t = n.child, t.childLanes = 0, t.pendingProps = i, n.deletions = null) : (t = gn(a, i), t.subtreeFlags = a.subtreeFlags & 14680064), u !== null ? l = gn(u, l) : (l = zn(l, o, r, null), l.flags |= 2), l.return = n, t.return = n, t.sibling = l, n.child = t, t = l, l = n.child, o = e.child.memoizedState, o = o === null ? Ml(r) : {
            baseLanes: o.baseLanes | r,
            cachePool: null,
            transitions: o.transitions
        }, l.memoizedState = o, l.childLanes = e.childLanes & ~r, n.memoizedState = zl, t
    }
    return l = e.child, e = l.sibling, t = gn(l, {
        mode: "visible",
        children: t.children
    }), !(n.mode & 1) && (t.lanes = r), t.return = n, t.sibling = null, e !== null && (r = n.deletions, r === null ? (n.deletions = [e], n.flags |= 16) : r.push(e)), n.child = t, n.memoizedState = null, t
}

function xo(e, n) {
    return n = ga({
        mode: "visible",
        children: n
    }, e.mode, 0, null), n.return = e, e.child = n
}

function bt(e, n, r, t) {
    return t !== null && io(t), ir(n, e.child, null, r), e = xo(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e
}

function id(e, n, r, t, a, l, o) {
    if (r) return n.flags & 256 ? (n.flags &= -257, t = Ba(Error(y(422))), bt(e, n, o, t)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (l = t.fallback, a = n.mode, t = ga({
        mode: "visible",
        children: t.children
    }, a, 0, null), l = zn(l, a, o, null), l.flags |= 2, t.return = n, l.return = n, t.sibling = l, n.child = t, n.mode & 1 && ir(n, e.child, null, o), n.child.memoizedState = Ml(o), n.memoizedState = zl, l);
    if (!(n.mode & 1)) return bt(e, n, o, null);
    if (a.data === "$!") {
        if (t = a.nextSibling && a.nextSibling.dataset, t) var u = t.dgst;
        return t = u, l = Error(y(419)), t = Ba(l, t, void 0), bt(e, n, o, t)
    }
    if (u = (o & e.childLanes) !== 0, me || u) {
        if (t = ne, t !== null) {
            switch (o & -o) {
                case 4:
                    a = 2;
                    break;
                case 16:
                    a = 8;
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
                    a = 32;
                    break;
                case 536870912:
                    a = 268435456;
                    break;
                default:
                    a = 0
            }
            a = a & (t.suspendedLanes | o) ? 0 : a, a !== 0 && a !== l.retryLane && (l.retryLane = a, Xe(e, a), Fe(t, e, a, -1))
        }
        return Lo(), t = Ba(Error(y(421))), bt(e, n, o, t)
    }
    return a.data === "$?" ? (n.flags |= 128, n.child = e.child, n = wd.bind(null, e), a._reactRetry = n, null) : (e = l.treeContext, be = dn(a.nextSibling), ke = n, B = !0, Re = null, e !== null && (Ee[_e++] = He, Ee[_e++] = Qe, Ee[_e++] = Tn, He = e.id, Qe = e.overflow, Tn = n), n = xo(n, t.children), n.flags |= 4096, n)
}

function Tu(e, n, r) {
    e.lanes |= n;
    var t = e.alternate;
    t !== null && (t.lanes |= n), El(e.return, n, r)
}

function Wa(e, n, r, t, a) {
    var l = e.memoizedState;
    l === null ? e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: t,
        tail: r,
        tailMode: a
    } : (l.isBackwards = n, l.rendering = null, l.renderingStartTime = 0, l.last = t, l.tail = r, l.tailMode = a)
}

function Fs(e, n, r) {
    var t = n.pendingProps,
        a = t.revealOrder,
        l = t.tail;
    if (se(e, n, t.children, r), t = W.current, t & 2) t = t & 1 | 2, n.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = n.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Tu(e, r, n);
            else if (e.tag === 19) Tu(e, r, n);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === n) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === n) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        t &= 1
    }
    if ($(W, t), !(n.mode & 1)) n.memoizedState = null;
    else switch (a) {
        case "forwards":
            for (r = n.child, a = null; r !== null;) e = r.alternate, e !== null && Gt(e) === null && (a = r), r = r.sibling;
            r = a, r === null ? (a = n.child, n.child = null) : (a = r.sibling, r.sibling = null), Wa(n, !1, a, r, l);
            break;
        case "backwards":
            for (r = null, a = n.child, n.child = null; a !== null;) {
                if (e = a.alternate, e !== null && Gt(e) === null) {
                    n.child = a;
                    break
                }
                e = a.sibling, a.sibling = r, r = a, a = e
            }
            Wa(n, !0, r, null, l);
            break;
        case "together":
            Wa(n, !1, null, null, void 0);
            break;
        default:
            n.memoizedState = null
    }
    return n.child
}

function Mt(e, n) {
    !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2)
}

function Ge(e, n, r) {
    if (e !== null && (n.dependencies = e.dependencies), Dn |= n.lanes, !(r & n.childLanes)) return null;
    if (e !== null && n.child !== e.child) throw Error(y(153));
    if (n.child !== null) {
        for (e = n.child, r = gn(e, e.pendingProps), n.child = r, r.return = n; e.sibling !== null;) e = e.sibling, r = r.sibling = gn(e, e.pendingProps), r.return = n;
        r.sibling = null
    }
    return n.child
}

function sd(e, n, r) {
    switch (n.tag) {
        case 3:
            Rs(n), ur();
            break;
        case 5:
            us(n);
            break;
        case 1:
            ge(n.type) && Ht(n);
            break;
        case 4:
            ho(n, n.stateNode.containerInfo);
            break;
        case 10:
            var t = n.type._context,
                a = n.memoizedProps.value;
            $(Kt, t._currentValue), t._currentValue = a;
            break;
        case 13:
            if (t = n.memoizedState, t !== null) return t.dehydrated !== null ? ($(W, W.current & 1), n.flags |= 128, null) : r & n.child.childLanes ? Ds(e, n, r) : ($(W, W.current & 1), e = Ge(e, n, r), e !== null ? e.sibling : null);
            $(W, W.current & 1);
            break;
        case 19:
            if (t = (r & n.childLanes) !== 0, e.flags & 128) {
                if (t) return Fs(e, n, r);
                n.flags |= 128
            }
            if (a = n.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), $(W, W.current), t) break;
            return null;
        case 22:
        case 23:
            return n.lanes = 0, Ms(e, n, r)
    }
    return Ge(e, n, r)
}
var Os, Tl, Is, Us;
Os = function(e, n) {
    for (var r = n.child; r !== null;) {
        if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
        else if (r.tag !== 4 && r.child !== null) {
            r.child.return = r, r = r.child;
            continue
        }
        if (r === n) break;
        for (; r.sibling === null;) {
            if (r.return === null || r.return === n) return;
            r = r.return
        }
        r.sibling.return = r.return, r = r.sibling
    }
};
Tl = function() {};
Is = function(e, n, r, t) {
    var a = e.memoizedProps;
    if (a !== t) {
        e = n.stateNode, Pn(Ae.current);
        var l = null;
        switch (r) {
            case "input":
                a = el(e, a), t = el(e, t), l = [];
                break;
            case "select":
                a = Q({}, a, {
                    value: void 0
                }), t = Q({}, t, {
                    value: void 0
                }), l = [];
                break;
            case "textarea":
                a = tl(e, a), t = tl(e, t), l = [];
                break;
            default:
                typeof a.onClick != "function" && typeof t.onClick == "function" && (e.onclick = Bt)
        }
        ll(r, t);
        var o;
        r = null;
        for (f in a)
            if (!t.hasOwnProperty(f) && a.hasOwnProperty(f) && a[f] != null)
                if (f === "style") {
                    var u = a[f];
                    for (o in u) u.hasOwnProperty(o) && (r || (r = {}), r[o] = "")
                } else f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (Or.hasOwnProperty(f) ? l || (l = []) : (l = l || []).push(f, null));
        for (f in t) {
            var i = t[f];
            if (u = a != null ? a[f] : void 0, t.hasOwnProperty(f) && i !== u && (i != null || u != null))
                if (f === "style")
                    if (u) {
                        for (o in u) !u.hasOwnProperty(o) || i && i.hasOwnProperty(o) || (r || (r = {}), r[o] = "");
                        for (o in i) i.hasOwnProperty(o) && u[o] !== i[o] && (r || (r = {}), r[o] = i[o])
                    } else r || (l || (l = []), l.push(f, r)), r = i;
            else f === "dangerouslySetInnerHTML" ? (i = i ? i.__html : void 0, u = u ? u.__html : void 0, i != null && u !== i && (l = l || []).push(f, i)) : f === "children" ? typeof i != "string" && typeof i != "number" || (l = l || []).push(f, "" + i) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (Or.hasOwnProperty(f) ? (i != null && f === "onScroll" && A("scroll", e), l || u === i || (l = [])) : (l = l || []).push(f, i))
        }
        r && (l = l || []).push("style", r);
        var f = l;
        (n.updateQueue = f) && (n.flags |= 4)
    }
};
Us = function(e, n, r, t) {
    r !== t && (n.flags |= 4)
};

function wr(e, n) {
    if (!B) switch (e.tailMode) {
        case "hidden":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? e.tail = null : r.sibling = null;
            break;
        case "collapsed":
            r = e.tail;
            for (var t = null; r !== null;) r.alternate !== null && (t = r), r = r.sibling;
            t === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : t.sibling = null
    }
}

function oe(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
        r = 0,
        t = 0;
    if (n)
        for (var a = e.child; a !== null;) r |= a.lanes | a.childLanes, t |= a.subtreeFlags & 14680064, t |= a.flags & 14680064, a.return = e, a = a.sibling;
    else
        for (a = e.child; a !== null;) r |= a.lanes | a.childLanes, t |= a.subtreeFlags, t |= a.flags, a.return = e, a = a.sibling;
    return e.subtreeFlags |= t, e.childLanes = r, n
}

function cd(e, n, r) {
    var t = n.pendingProps;
    switch (uo(n), n.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return oe(n), null;
        case 1:
            return ge(n.type) && Wt(), oe(n), null;
        case 3:
            return t = n.stateNode, sr(), V(he), V(ie), vo(), t.pendingContext && (t.context = t.pendingContext, t.pendingContext = null), (e === null || e.child === null) && (vt(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, Re !== null && (jl(Re), Re = null))), Tl(e, n), oe(n), null;
        case 5:
            go(n);
            var a = Pn(Kr.current);
            if (r = n.type, e !== null && n.stateNode != null) Is(e, n, r, t, a), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
            else {
                if (!t) {
                    if (n.stateNode === null) throw Error(y(166));
                    return oe(n), null
                }
                if (e = Pn(Ae.current), vt(n)) {
                    t = n.stateNode, r = n.type;
                    var l = n.memoizedProps;
                    switch (t[je] = n, t[Qr] = l, e = (n.mode & 1) !== 0, r) {
                        case "dialog":
                            A("cancel", t), A("close", t);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            A("load", t);
                            break;
                        case "video":
                        case "audio":
                            for (a = 0; a < Cr.length; a++) A(Cr[a], t);
                            break;
                        case "source":
                            A("error", t);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            A("error", t), A("load", t);
                            break;
                        case "details":
                            A("toggle", t);
                            break;
                        case "input":
                            Ao(t, l), A("invalid", t);
                            break;
                        case "select":
                            t._wrapperState = {
                                wasMultiple: !!l.multiple
                            }, A("invalid", t);
                            break;
                        case "textarea":
                            Bo(t, l), A("invalid", t)
                    }
                    ll(r, l), a = null;
                    for (var o in l)
                        if (l.hasOwnProperty(o)) {
                            var u = l[o];
                            o === "children" ? typeof u == "string" ? t.textContent !== u && (l.suppressHydrationWarning !== !0 && gt(t.textContent, u, e), a = ["children", u]) : typeof u == "number" && t.textContent !== "" + u && (l.suppressHydrationWarning !== !0 && gt(t.textContent, u, e), a = ["children", "" + u]) : Or.hasOwnProperty(o) && u != null && o === "onScroll" && A("scroll", t)
                        } switch (r) {
                        case "input":
                            it(t), Vo(t, l, !0);
                            break;
                        case "textarea":
                            it(t), Wo(t);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof l.onClick == "function" && (t.onclick = Bt)
                    }
                    t = a, n.updateQueue = t, t !== null && (n.flags |= 4)
                } else {
                    o = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = di(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof t.is == "string" ? e = o.createElement(r, {
                        is: t.is
                    }) : (e = o.createElement(r), r === "select" && (o = e, t.multiple ? o.multiple = !0 : t.size && (o.size = t.size))) : e = o.createElementNS(e, r), e[je] = n, e[Qr] = t, Os(e, n, !1, !1), n.stateNode = e;
                    e: {
                        switch (o = ol(r, t), r) {
                            case "dialog":
                                A("cancel", e), A("close", e), a = t;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                A("load", e), a = t;
                                break;
                            case "video":
                            case "audio":
                                for (a = 0; a < Cr.length; a++) A(Cr[a], e);
                                a = t;
                                break;
                            case "source":
                                A("error", e), a = t;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                A("error", e), A("load", e), a = t;
                                break;
                            case "details":
                                A("toggle", e), a = t;
                                break;
                            case "input":
                                Ao(e, t), a = el(e, t), A("invalid", e);
                                break;
                            case "option":
                                a = t;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!t.multiple
                                }, a = Q({}, t, {
                                    value: void 0
                                }), A("invalid", e);
                                break;
                            case "textarea":
                                Bo(e, t), a = tl(e, t), A("invalid", e);
                                break;
                            default:
                                a = t
                        }
                        ll(r, a),
                        u = a;
                        for (l in u)
                            if (u.hasOwnProperty(l)) {
                                var i = u[l];
                                l === "style" ? hi(e, i) : l === "dangerouslySetInnerHTML" ? (i = i ? i.__html : void 0, i != null && pi(e, i)) : l === "children" ? typeof i == "string" ? (r !== "textarea" || i !== "") && Ir(e, i) : typeof i == "number" && Ir(e, "" + i) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (Or.hasOwnProperty(l) ? i != null && l === "onScroll" && A("scroll", e) : i != null && Ql(e, l, i, o))
                            } switch (r) {
                            case "input":
                                it(e), Vo(e, t, !1);
                                break;
                            case "textarea":
                                it(e), Wo(e);
                                break;
                            case "option":
                                t.value != null && e.setAttribute("value", "" + vn(t.value));
                                break;
                            case "select":
                                e.multiple = !!t.multiple, l = t.value, l != null ? Jn(e, !!t.multiple, l, !1) : t.defaultValue != null && Jn(e, !!t.multiple, t.defaultValue, !0);
                                break;
                            default:
                                typeof a.onClick == "function" && (e.onclick = Bt)
                        }
                        switch (r) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                t = !!t.autoFocus;
                                break e;
                            case "img":
                                t = !0;
                                break e;
                            default:
                                t = !1
                        }
                    }
                    t && (n.flags |= 4)
                }
                n.ref !== null && (n.flags |= 512, n.flags |= 2097152)
            }
            return oe(n), null;
        case 6:
            if (e && n.stateNode != null) Us(e, n, e.memoizedProps, t);
            else {
                if (typeof t != "string" && n.stateNode === null) throw Error(y(166));
                if (r = Pn(Kr.current), Pn(Ae.current), vt(n)) {
                    if (t = n.stateNode, r = n.memoizedProps, t[je] = n, (l = t.nodeValue !== r) && (e = ke, e !== null)) switch (e.tag) {
                        case 3:
                            gt(t.nodeValue, r, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && gt(t.nodeValue, r, (e.mode & 1) !== 0)
                    }
                    l && (n.flags |= 4)
                } else t = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(t), t[je] = n, n.stateNode = t
            }
            return oe(n), null;
        case 13:
            if (V(W), t = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (B && be !== null && n.mode & 1 && !(n.flags & 128)) rs(), ur(), n.flags |= 98560, l = !1;
                else if (l = vt(n), t !== null && t.dehydrated !== null) {
                    if (e === null) {
                        if (!l) throw Error(y(318));
                        if (l = n.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(y(317));
                        l[je] = n
                    } else ur(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
                    oe(n), l = !1
                } else Re !== null && (jl(Re), Re = null), l = !0;
                if (!l) return n.flags & 65536 ? n : null
            }
            return n.flags & 128 ? (n.lanes = r, n) : (t = t !== null, t !== (e !== null && e.memoizedState !== null) && t && (n.child.flags |= 8192, n.mode & 1 && (e === null || W.current & 1 ? J === 0 && (J = 3) : Lo())), n.updateQueue !== null && (n.flags |= 4), oe(n), null);
        case 4:
            return sr(), Tl(e, n), e === null && Wr(n.stateNode.containerInfo), oe(n), null;
        case 10:
            return fo(n.type._context), oe(n), null;
        case 17:
            return ge(n.type) && Wt(), oe(n), null;
        case 19:
            if (V(W), l = n.memoizedState, l === null) return oe(n), null;
            if (t = (n.flags & 128) !== 0, o = l.rendering, o === null)
                if (t) wr(l, !1);
                else {
                    if (J !== 0 || e !== null && e.flags & 128)
                        for (e = n.child; e !== null;) {
                            if (o = Gt(e), o !== null) {
                                for (n.flags |= 128, wr(l, !1), t = o.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), n.subtreeFlags = 0, t = r, r = n.child; r !== null;) l = r, e = t, l.flags &= 14680066, o = l.alternate, o === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = o.childLanes, l.lanes = o.lanes, l.child = o.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = o.memoizedProps, l.memoizedState = o.memoizedState, l.updateQueue = o.updateQueue, l.type = o.type, e = o.dependencies, l.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), r = r.sibling;
                                return $(W, W.current & 1 | 2), n.child
                            }
                            e = e.sibling
                        }
                    l.tail !== null && X() > fr && (n.flags |= 128, t = !0, wr(l, !1), n.lanes = 4194304)
                }
            else {
                if (!t)
                    if (e = Gt(o), e !== null) {
                        if (n.flags |= 128, t = !0, r = e.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), wr(l, !0), l.tail === null && l.tailMode === "hidden" && !o.alternate && !B) return oe(n), null
                    } else 2 * X() - l.renderingStartTime > fr && r !== 1073741824 && (n.flags |= 128, t = !0, wr(l, !1), n.lanes = 4194304);
                l.isBackwards ? (o.sibling = n.child, n.child = o) : (r = l.last, r !== null ? r.sibling = o : n.child = o, l.last = o)
            }
            return l.tail !== null ? (n = l.tail, l.rendering = n, l.tail = n.sibling, l.renderingStartTime = X(), n.sibling = null, r = W.current, $(W, t ? r & 1 | 2 : r & 1), n) : (oe(n), null);
        case 22:
        case 23:
            return Po(), t = n.memoizedState !== null, e !== null && e.memoizedState !== null !== t && (n.flags |= 8192), t && n.mode & 1 ? ye & 1073741824 && (oe(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : oe(n), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(y(156, n.tag))
}

function fd(e, n) {
    switch (uo(n), n.tag) {
        case 1:
            return ge(n.type) && Wt(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
        case 3:
            return sr(), V(he), V(ie), vo(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
        case 5:
            return go(n), null;
        case 13:
            if (V(W), e = n.memoizedState, e !== null && e.dehydrated !== null) {
                if (n.alternate === null) throw Error(y(340));
                ur()
            }
            return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
        case 19:
            return V(W), null;
        case 4:
            return sr(), null;
        case 10:
            return fo(n.type._context), null;
        case 22:
        case 23:
            return Po(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var kt = !1,
    ue = !1,
    dd = typeof WeakSet == "function" ? WeakSet : Set,
    _ = null;

function Gn(e, n) {
    var r = e.ref;
    if (r !== null)
        if (typeof r == "function") try {
            r(null)
        } catch (t) {
            q(e, n, t)
        } else r.current = null
}

function js(e, n, r) {
    try {
        r()
    } catch (t) {
        q(e, n, t)
    }
}
var Ru = !1;

function pd(e, n) {
    if (gl = $t, e = Bi(), lo(e)) {
        if ("selectionStart" in e) var r = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            r = (r = e.ownerDocument) && r.defaultView || window;
            var t = r.getSelection && r.getSelection();
            if (t && t.rangeCount !== 0) {
                r = t.anchorNode;
                var a = t.anchorOffset,
                    l = t.focusNode;
                t = t.focusOffset;
                try {
                    r.nodeType, l.nodeType
                } catch {
                    r = null;
                    break e
                }
                var o = 0,
                    u = -1,
                    i = -1,
                    f = 0,
                    g = 0,
                    h = e,
                    p = null;
                n: for (;;) {
                    for (var b; h !== r || a !== 0 && h.nodeType !== 3 || (u = o + a), h !== l || t !== 0 && h.nodeType !== 3 || (i = o + t), h.nodeType === 3 && (o += h.nodeValue.length), (b = h.firstChild) !== null;) p = h, h = b;
                    for (;;) {
                        if (h === e) break n;
                        if (p === r && ++f === a && (u = o), p === l && ++g === t && (i = o), (b = h.nextSibling) !== null) break;
                        h = p, p = h.parentNode
                    }
                    h = b
                }
                r = u === -1 || i === -1 ? null : {
                    start: u,
                    end: i
                }
            } else r = null
        }
        r = r || {
            start: 0,
            end: 0
        }
    } else r = null;
    for (vl = {
            focusedElem: e,
            selectionRange: r
        }, $t = !1, _ = n; _ !== null;)
        if (n = _, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, _ = e;
        else
            for (; _ !== null;) {
                n = _;
                try {
                    var k = n.alternate;
                    if (n.flags & 1024) switch (n.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (k !== null) {
                                var w = k.memoizedProps,
                                    I = k.memoizedState,
                                    c = n.stateNode,
                                    s = c.getSnapshotBeforeUpdate(n.elementType === n.type ? w : Me(n.type, w), I);
                                c.__reactInternalSnapshotBeforeUpdate = s
                            }
                            break;
                        case 3:
                            var d = n.stateNode.containerInfo;
                            d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(y(163))
                    }
                } catch (v) {
                    q(n, n.return, v)
                }
                if (e = n.sibling, e !== null) {
                    e.return = n.return, _ = e;
                    break
                }
                _ = n.return
            }
    return k = Ru, Ru = !1, k
}

function Rr(e, n, r) {
    var t = n.updateQueue;
    if (t = t !== null ? t.lastEffect : null, t !== null) {
        var a = t = t.next;
        do {
            if ((a.tag & e) === e) {
                var l = a.destroy;
                a.destroy = void 0, l !== void 0 && js(n, r, l)
            }
            a = a.next
        } while (a !== t)
    }
}

function ma(e, n) {
    if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
        var r = n = n.next;
        do {
            if ((r.tag & e) === e) {
                var t = r.create;
                r.destroy = t()
            }
            r = r.next
        } while (r !== n)
    }
}

function Rl(e) {
    var n = e.ref;
    if (n !== null) {
        var r = e.stateNode;
        switch (e.tag) {
            case 5:
                e = r;
                break;
            default:
                e = r
        }
        typeof n == "function" ? n(e) : n.current = e
    }
}

function $s(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, $s(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[je], delete n[Qr], delete n[kl], delete n[Yf], delete n[Xf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function As(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Du(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || As(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Dl(e, n, r) {
    var t = e.tag;
    if (t === 5 || t === 6) e = e.stateNode, n ? r.nodeType === 8 ? r.parentNode.insertBefore(e, n) : r.insertBefore(e, n) : (r.nodeType === 8 ? (n = r.parentNode, n.insertBefore(e, r)) : (n = r, n.appendChild(e)), r = r._reactRootContainer, r != null || n.onclick !== null || (n.onclick = Bt));
    else if (t !== 4 && (e = e.child, e !== null))
        for (Dl(e, n, r), e = e.sibling; e !== null;) Dl(e, n, r), e = e.sibling
}

function Fl(e, n, r) {
    var t = e.tag;
    if (t === 5 || t === 6) e = e.stateNode, n ? r.insertBefore(e, n) : r.appendChild(e);
    else if (t !== 4 && (e = e.child, e !== null))
        for (Fl(e, n, r), e = e.sibling; e !== null;) Fl(e, n, r), e = e.sibling
}
var re = null,
    Te = !1;

function nn(e, n, r) {
    for (r = r.child; r !== null;) Vs(e, n, r), r = r.sibling
}

function Vs(e, n, r) {
    if ($e && typeof $e.onCommitFiberUnmount == "function") try {
        $e.onCommitFiberUnmount(oa, r)
    } catch {}
    switch (r.tag) {
        case 5:
            ue || Gn(r, n);
        case 6:
            var t = re,
                a = Te;
            re = null, nn(e, n, r), re = t, Te = a, re !== null && (Te ? (e = re, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : re.removeChild(r.stateNode));
            break;
        case 18:
            re !== null && (Te ? (e = re, r = r.stateNode, e.nodeType === 8 ? Ia(e.parentNode, r) : e.nodeType === 1 && Ia(e, r), Ar(e)) : Ia(re, r.stateNode));
            break;
        case 4:
            t = re, a = Te, re = r.stateNode.containerInfo, Te = !0, nn(e, n, r), re = t, Te = a;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!ue && (t = r.updateQueue, t !== null && (t = t.lastEffect, t !== null))) {
                a = t = t.next;
                do {
                    var l = a,
                        o = l.destroy;
                    l = l.tag, o !== void 0 && (l & 2 || l & 4) && js(r, n, o), a = a.next
                } while (a !== t)
            }
            nn(e, n, r);
            break;
        case 1:
            if (!ue && (Gn(r, n), t = r.stateNode, typeof t.componentWillUnmount == "function")) try {
                t.props = r.memoizedProps, t.state = r.memoizedState, t.componentWillUnmount()
            } catch (u) {
                q(r, n, u)
            }
            nn(e, n, r);
            break;
        case 21:
            nn(e, n, r);
            break;
        case 22:
            r.mode & 1 ? (ue = (t = ue) || r.memoizedState !== null, nn(e, n, r), ue = t) : nn(e, n, r);
            break;
        default:
            nn(e, n, r)
    }
}

function Fu(e) {
    var n = e.updateQueue;
    if (n !== null) {
        e.updateQueue = null;
        var r = e.stateNode;
        r === null && (r = e.stateNode = new dd), n.forEach(function(t) {
            var a = Sd.bind(null, e, t);
            r.has(t) || (r.add(t), t.then(a, a))
        })
    }
}

function ze(e, n) {
    var r = n.deletions;
    if (r !== null)
        for (var t = 0; t < r.length; t++) {
            var a = r[t];
            try {
                var l = e,
                    o = n,
                    u = o;
                e: for (; u !== null;) {
                    switch (u.tag) {
                        case 5:
                            re = u.stateNode, Te = !1;
                            break e;
                        case 3:
                            re = u.stateNode.containerInfo, Te = !0;
                            break e;
                        case 4:
                            re = u.stateNode.containerInfo, Te = !0;
                            break e
                    }
                    u = u.return
                }
                if (re === null) throw Error(y(160));
                Vs(l, o, a), re = null, Te = !1;
                var i = a.alternate;
                i !== null && (i.return = null), a.return = null
            } catch (f) {
                q(a, n, f)
            }
        }
    if (n.subtreeFlags & 12854)
        for (n = n.child; n !== null;) Bs(n, e), n = n.sibling
}

function Bs(e, n) {
    var r = e.alternate,
        t = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (ze(n, e), Ie(e), t & 4) {
                try {
                    Rr(3, e, e.return), ma(3, e)
                } catch (w) {
                    q(e, e.return, w)
                }
                try {
                    Rr(5, e, e.return)
                } catch (w) {
                    q(e, e.return, w)
                }
            }
            break;
        case 1:
            ze(n, e), Ie(e), t & 512 && r !== null && Gn(r, r.return);
            break;
        case 5:
            if (ze(n, e), Ie(e), t & 512 && r !== null && Gn(r, r.return), e.flags & 32) {
                var a = e.stateNode;
                try {
                    Ir(a, "")
                } catch (w) {
                    q(e, e.return, w)
                }
            }
            if (t & 4 && (a = e.stateNode, a != null)) {
                var l = e.memoizedProps,
                    o = r !== null ? r.memoizedProps : l,
                    u = e.type,
                    i = e.updateQueue;
                if (e.updateQueue = null, i !== null) try {
                    u === "input" && l.type === "radio" && l.name != null && ci(a, l), ol(u, o);
                    var f = ol(u, l);
                    for (o = 0; o < i.length; o += 2) {
                        var g = i[o],
                            h = i[o + 1];
                        g === "style" ? hi(a, h) : g === "dangerouslySetInnerHTML" ? pi(a, h) : g === "children" ? Ir(a, h) : Ql(a, g, h, f)
                    }
                    switch (u) {
                        case "input":
                            nl(a, l);
                            break;
                        case "textarea":
                            fi(a, l);
                            break;
                        case "select":
                            var p = a._wrapperState.wasMultiple;
                            a._wrapperState.wasMultiple = !!l.multiple;
                            var b = l.value;
                            b != null ? Jn(a, !!l.multiple, b, !1) : p !== !!l.multiple && (l.defaultValue != null ? Jn(a, !!l.multiple, l.defaultValue, !0) : Jn(a, !!l.multiple, l.multiple ? [] : "", !1))
                    }
                    a[Qr] = l
                } catch (w) {
                    q(e, e.return, w)
                }
            }
            break;
        case 6:
            if (ze(n, e), Ie(e), t & 4) {
                if (e.stateNode === null) throw Error(y(162));
                a = e.stateNode, l = e.memoizedProps;
                try {
                    a.nodeValue = l
                } catch (w) {
                    q(e, e.return, w)
                }
            }
            break;
        case 3:
            if (ze(n, e), Ie(e), t & 4 && r !== null && r.memoizedState.isDehydrated) try {
                Ar(n.containerInfo)
            } catch (w) {
                q(e, e.return, w)
            }
            break;
        case 4:
            ze(n, e), Ie(e);
            break;
        case 13:
            ze(n, e), Ie(e), a = e.child, a.flags & 8192 && (l = a.memoizedState !== null, a.stateNode.isHidden = l, !l || a.alternate !== null && a.alternate.memoizedState !== null || (Co = X())), t & 4 && Fu(e);
            break;
        case 22:
            if (g = r !== null && r.memoizedState !== null, e.mode & 1 ? (ue = (f = ue) || g, ze(n, e), ue = f) : ze(n, e), Ie(e), t & 8192) {
                if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !g && e.mode & 1)
                    for (_ = e, g = e.child; g !== null;) {
                        for (h = _ = g; _ !== null;) {
                            switch (p = _, b = p.child, p.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Rr(4, p, p.return);
                                    break;
                                case 1:
                                    Gn(p, p.return);
                                    var k = p.stateNode;
                                    if (typeof k.componentWillUnmount == "function") {
                                        t = p, r = p.return;
                                        try {
                                            n = t, k.props = n.memoizedProps, k.state = n.memoizedState, k.componentWillUnmount()
                                        } catch (w) {
                                            q(t, r, w)
                                        }
                                    }
                                    break;
                                case 5:
                                    Gn(p, p.return);
                                    break;
                                case 22:
                                    if (p.memoizedState !== null) {
                                        Iu(h);
                                        continue
                                    }
                            }
                            b !== null ? (b.return = p, _ = b) : Iu(h)
                        }
                        g = g.sibling
                    }
                e: for (g = null, h = e;;) {
                    if (h.tag === 5) {
                        if (g === null) {
                            g = h;
                            try {
                                a = h.stateNode, f ? (l = a.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (u = h.stateNode, i = h.memoizedProps.style, o = i != null && i.hasOwnProperty("display") ? i.display : null, u.style.display = mi("display", o))
                            } catch (w) {
                                q(e, e.return, w)
                            }
                        }
                    } else if (h.tag === 6) {
                        if (g === null) try {
                            h.stateNode.nodeValue = f ? "" : h.memoizedProps
                        } catch (w) {
                            q(e, e.return, w)
                        }
                    } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                        h.child.return = h, h = h.child;
                        continue
                    }
                    if (h === e) break e;
                    for (; h.sibling === null;) {
                        if (h.return === null || h.return === e) break e;
                        g === h && (g = null), h = h.return
                    }
                    g === h && (g = null), h.sibling.return = h.return, h = h.sibling
                }
            }
            break;
        case 19:
            ze(n, e), Ie(e), t & 4 && Fu(e);
            break;
        case 21:
            break;
        default:
            ze(n, e), Ie(e)
    }
}

function Ie(e) {
    var n = e.flags;
    if (n & 2) {
        try {
            e: {
                for (var r = e.return; r !== null;) {
                    if (As(r)) {
                        var t = r;
                        break e
                    }
                    r = r.return
                }
                throw Error(y(160))
            }
            switch (t.tag) {
                case 5:
                    var a = t.stateNode;
                    t.flags & 32 && (Ir(a, ""), t.flags &= -33);
                    var l = Du(e);
                    Fl(e, l, a);
                    break;
                case 3:
                case 4:
                    var o = t.stateNode.containerInfo,
                        u = Du(e);
                    Dl(e, u, o);
                    break;
                default:
                    throw Error(y(161))
            }
        }
        catch (i) {
            q(e, e.return, i)
        }
        e.flags &= -3
    }
    n & 4096 && (e.flags &= -4097)
}

function md(e, n, r) {
    _ = e, Ws(e)
}

function Ws(e, n, r) {
    for (var t = (e.mode & 1) !== 0; _ !== null;) {
        var a = _,
            l = a.child;
        if (a.tag === 22 && t) {
            var o = a.memoizedState !== null || kt;
            if (!o) {
                var u = a.alternate,
                    i = u !== null && u.memoizedState !== null || ue;
                u = kt;
                var f = ue;
                if (kt = o, (ue = i) && !f)
                    for (_ = a; _ !== null;) o = _, i = o.child, o.tag === 22 && o.memoizedState !== null ? Uu(a) : i !== null ? (i.return = o, _ = i) : Uu(a);
                for (; l !== null;) _ = l, Ws(l), l = l.sibling;
                _ = a, kt = u, ue = f
            }
            Ou(e)
        } else a.subtreeFlags & 8772 && l !== null ? (l.return = a, _ = l) : Ou(e)
    }
}

function Ou(e) {
    for (; _ !== null;) {
        var n = _;
        if (n.flags & 8772) {
            var r = n.alternate;
            try {
                if (n.flags & 8772) switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ue || ma(5, n);
                        break;
                    case 1:
                        var t = n.stateNode;
                        if (n.flags & 4 && !ue)
                            if (r === null) t.componentDidMount();
                            else {
                                var a = n.elementType === n.type ? r.memoizedProps : Me(n.type, r.memoizedProps);
                                t.componentDidUpdate(a, r.memoizedState, t.__reactInternalSnapshotBeforeUpdate)
                            } var l = n.updateQueue;
                        l !== null && ku(n, l, t);
                        break;
                    case 3:
                        var o = n.updateQueue;
                        if (o !== null) {
                            if (r = null, n.child !== null) switch (n.child.tag) {
                                case 5:
                                    r = n.child.stateNode;
                                    break;
                                case 1:
                                    r = n.child.stateNode
                            }
                            ku(n, o, r)
                        }
                        break;
                    case 5:
                        var u = n.stateNode;
                        if (r === null && n.flags & 4) {
                            r = u;
                            var i = n.memoizedProps;
                            switch (n.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    i.autoFocus && r.focus();
                                    break;
                                case "img":
                                    i.src && (r.src = i.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (n.memoizedState === null) {
                            var f = n.alternate;
                            if (f !== null) {
                                var g = f.memoizedState;
                                if (g !== null) {
                                    var h = g.dehydrated;
                                    h !== null && Ar(h)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(y(163))
                }
                ue || n.flags & 512 && Rl(n)
            } catch (p) {
                q(n, n.return, p)
            }
        }
        if (n === e) {
            _ = null;
            break
        }
        if (r = n.sibling, r !== null) {
            r.return = n.return, _ = r;
            break
        }
        _ = n.return
    }
}

function Iu(e) {
    for (; _ !== null;) {
        var n = _;
        if (n === e) {
            _ = null;
            break
        }
        var r = n.sibling;
        if (r !== null) {
            r.return = n.return, _ = r;
            break
        }
        _ = n.return
    }
}

function Uu(e) {
    for (; _ !== null;) {
        var n = _;
        try {
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    var r = n.return;
                    try {
                        ma(4, n)
                    } catch (i) {
                        q(n, r, i)
                    }
                    break;
                case 1:
                    var t = n.stateNode;
                    if (typeof t.componentDidMount == "function") {
                        var a = n.return;
                        try {
                            t.componentDidMount()
                        } catch (i) {
                            q(n, a, i)
                        }
                    }
                    var l = n.return;
                    try {
                        Rl(n)
                    } catch (i) {
                        q(n, l, i)
                    }
                    break;
                case 5:
                    var o = n.return;
                    try {
                        Rl(n)
                    } catch (i) {
                        q(n, o, i)
                    }
            }
        } catch (i) {
            q(n, n.return, i)
        }
        if (n === e) {
            _ = null;
            break
        }
        var u = n.sibling;
        if (u !== null) {
            u.return = n.return, _ = u;
            break
        }
        _ = n.return
    }
}
var hd = Math.ceil,
    ea = Ze.ReactCurrentDispatcher,
    Eo = Ze.ReactCurrentOwner,
    Ne = Ze.ReactCurrentBatchConfig,
    F = 0,
    ne = null,
    G = null,
    te = 0,
    ye = 0,
    Zn = kn(0),
    J = 0,
    Zr = null,
    Dn = 0,
    ha = 0,
    _o = 0,
    Dr = null,
    pe = null,
    Co = 0,
    fr = 1 / 0,
    Be = null,
    na = !1,
    Ol = null,
    mn = null,
    wt = !1,
    un = null,
    ra = 0,
    Fr = 0,
    Il = null,
    Tt = -1,
    Rt = 0;

function ce() {
    return F & 6 ? X() : Tt !== -1 ? Tt : Tt = X()
}

function hn(e) {
    return e.mode & 1 ? F & 2 && te !== 0 ? te & -te : Zf.transition !== null ? (Rt === 0 && (Rt = Ni()), Rt) : (e = U, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Di(e.type)), e) : 1
}

function Fe(e, n, r, t) {
    if (50 < Fr) throw Fr = 0, Il = null, Error(y(185));
    et(e, r, t), (!(F & 2) || e !== ne) && (e === ne && (!(F & 2) && (ha |= r), J === 4 && ln(e, te)), ve(e, t), r === 1 && F === 0 && !(n.mode & 1) && (fr = X() + 500, fa && wn()))
}

function ve(e, n) {
    var r = e.callbackNode;
    Gc(e, n);
    var t = jt(e, e === ne ? te : 0);
    if (t === 0) r !== null && qo(r), e.callbackNode = null, e.callbackPriority = 0;
    else if (n = t & -t, e.callbackPriority !== n) {
        if (r != null && qo(r), n === 1) e.tag === 0 ? Gf(ju.bind(null, e)) : Ji(ju.bind(null, e)), qf(function() {
            !(F & 6) && wn()
        }), r = null;
        else {
            switch (Pi(t)) {
                case 1:
                    r = Gl;
                    break;
                case 4:
                    r = _i;
                    break;
                case 16:
                    r = Ut;
                    break;
                case 536870912:
                    r = Ci;
                    break;
                default:
                    r = Ut
            }
            r = Zs(r, Hs.bind(null, e))
        }
        e.callbackPriority = n, e.callbackNode = r
    }
}

function Hs(e, n) {
    if (Tt = -1, Rt = 0, F & 6) throw Error(y(327));
    var r = e.callbackNode;
    if (ar() && e.callbackNode !== r) return null;
    var t = jt(e, e === ne ? te : 0);
    if (t === 0) return null;
    if (t & 30 || t & e.expiredLanes || n) n = ta(e, t);
    else {
        n = t;
        var a = F;
        F |= 2;
        var l = qs();
        (ne !== e || te !== n) && (Be = null, fr = X() + 500, Ln(e, n));
        do try {
            yd();
            break
        } catch (u) {
            Qs(e, u)
        }
        while (!0);
        co(), ea.current = l, F = a, G !== null ? n = 0 : (ne = null, te = 0, n = J)
    }
    if (n !== 0) {
        if (n === 2 && (a = fl(e), a !== 0 && (t = a, n = Ul(e, a))), n === 1) throw r = Zr, Ln(e, 0), ln(e, t), ve(e, X()), r;
        if (n === 6) ln(e, t);
        else {
            if (a = e.current.alternate, !(t & 30) && !gd(a) && (n = ta(e, t), n === 2 && (l = fl(e), l !== 0 && (t = l, n = Ul(e, l))), n === 1)) throw r = Zr, Ln(e, 0), ln(e, t), ve(e, X()), r;
            switch (e.finishedWork = a, e.finishedLanes = t, n) {
                case 0:
                case 1:
                    throw Error(y(345));
                case 2:
                    _n(e, pe, Be);
                    break;
                case 3:
                    if (ln(e, t), (t & 130023424) === t && (n = Co + 500 - X(), 10 < n)) {
                        if (jt(e, 0) !== 0) break;
                        if (a = e.suspendedLanes, (a & t) !== t) {
                            ce(), e.pingedLanes |= e.suspendedLanes & a;
                            break
                        }
                        e.timeoutHandle = bl(_n.bind(null, e, pe, Be), n);
                        break
                    }
                    _n(e, pe, Be);
                    break;
                case 4:
                    if (ln(e, t), (t & 4194240) === t) break;
                    for (n = e.eventTimes, a = -1; 0 < t;) {
                        var o = 31 - De(t);
                        l = 1 << o, o = n[o], o > a && (a = o), t &= ~l
                    }
                    if (t = a, t = X() - t, t = (120 > t ? 120 : 480 > t ? 480 : 1080 > t ? 1080 : 1920 > t ? 1920 : 3e3 > t ? 3e3 : 4320 > t ? 4320 : 1960 * hd(t / 1960)) - t, 10 < t) {
                        e.timeoutHandle = bl(_n.bind(null, e, pe, Be), t);
                        break
                    }
                    _n(e, pe, Be);
                    break;
                case 5:
                    _n(e, pe, Be);
                    break;
                default:
                    throw Error(y(329))
            }
        }
    }
    return ve(e, X()), e.callbackNode === r ? Hs.bind(null, e) : null
}

function Ul(e, n) {
    var r = Dr;
    return e.current.memoizedState.isDehydrated && (Ln(e, n).flags |= 256), e = ta(e, n), e !== 2 && (n = pe, pe = r, n !== null && jl(n)), e
}

function jl(e) {
    pe === null ? pe = e : pe.push.apply(pe, e)
}

function gd(e) {
    for (var n = e;;) {
        if (n.flags & 16384) {
            var r = n.updateQueue;
            if (r !== null && (r = r.stores, r !== null))
                for (var t = 0; t < r.length; t++) {
                    var a = r[t],
                        l = a.getSnapshot;
                    a = a.value;
                    try {
                        if (!Oe(l(), a)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (r = n.child, n.subtreeFlags & 16384 && r !== null) r.return = n, n = r;
        else {
            if (n === e) break;
            for (; n.sibling === null;) {
                if (n.return === null || n.return === e) return !0;
                n = n.return
            }
            n.sibling.return = n.return, n = n.sibling
        }
    }
    return !0
}

function ln(e, n) {
    for (n &= ~_o, n &= ~ha, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n;) {
        var r = 31 - De(n),
            t = 1 << r;
        e[r] = -1, n &= ~t
    }
}

function ju(e) {
    if (F & 6) throw Error(y(327));
    ar();
    var n = jt(e, 0);
    if (!(n & 1)) return ve(e, X()), null;
    var r = ta(e, n);
    if (e.tag !== 0 && r === 2) {
        var t = fl(e);
        t !== 0 && (n = t, r = Ul(e, t))
    }
    if (r === 1) throw r = Zr, Ln(e, 0), ln(e, n), ve(e, X()), r;
    if (r === 6) throw Error(y(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = n, _n(e, pe, Be), ve(e, X()), null
}

function No(e, n) {
    var r = F;
    F |= 1;
    try {
        return e(n)
    } finally {
        F = r, F === 0 && (fr = X() + 500, fa && wn())
    }
}

function Fn(e) {
    un !== null && un.tag === 0 && !(F & 6) && ar();
    var n = F;
    F |= 1;
    var r = Ne.transition,
        t = U;
    try {
        if (Ne.transition = null, U = 1, e) return e()
    } finally {
        U = t, Ne.transition = r, F = n, !(F & 6) && wn()
    }
}

function Po() {
    ye = Zn.current, V(Zn)
}

function Ln(e, n) {
    e.finishedWork = null, e.finishedLanes = 0;
    var r = e.timeoutHandle;
    if (r !== -1 && (e.timeoutHandle = -1, Qf(r)), G !== null)
        for (r = G.return; r !== null;) {
            var t = r;
            switch (uo(t), t.tag) {
                case 1:
                    t = t.type.childContextTypes, t != null && Wt();
                    break;
                case 3:
                    sr(), V(he), V(ie), vo();
                    break;
                case 5:
                    go(t);
                    break;
                case 4:
                    sr();
                    break;
                case 13:
                    V(W);
                    break;
                case 19:
                    V(W);
                    break;
                case 10:
                    fo(t.type._context);
                    break;
                case 22:
                case 23:
                    Po()
            }
            r = r.return
        }
    if (ne = e, G = e = gn(e.current, null), te = ye = n, J = 0, Zr = null, _o = ha = Dn = 0, pe = Dr = null, Nn !== null) {
        for (n = 0; n < Nn.length; n++)
            if (r = Nn[n], t = r.interleaved, t !== null) {
                r.interleaved = null;
                var a = t.next,
                    l = r.pending;
                if (l !== null) {
                    var o = l.next;
                    l.next = a, t.next = o
                }
                r.pending = t
            } Nn = null
    }
    return e
}

function Qs(e, n) {
    do {
        var r = G;
        try {
            if (co(), Lt.current = Jt, Zt) {
                for (var t = H.memoizedState; t !== null;) {
                    var a = t.queue;
                    a !== null && (a.pending = null), t = t.next
                }
                Zt = !1
            }
            if (Rn = 0, ee = Z = H = null, Tr = !1, Yr = 0, Eo.current = null, r === null || r.return === null) {
                J = 1, Zr = n, G = null;
                break
            }
            e: {
                var l = e,
                    o = r.return,
                    u = r,
                    i = n;
                if (n = te, u.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
                    var f = i,
                        g = u,
                        h = g.tag;
                    if (!(g.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var p = g.alternate;
                        p ? (g.updateQueue = p.updateQueue, g.memoizedState = p.memoizedState, g.lanes = p.lanes) : (g.updateQueue = null, g.memoizedState = null)
                    }
                    var b = Cu(o);
                    if (b !== null) {
                        b.flags &= -257, Nu(b, o, u, l, n), b.mode & 1 && _u(l, f, n), n = b, i = f;
                        var k = n.updateQueue;
                        if (k === null) {
                            var w = new Set;
                            w.add(i), n.updateQueue = w
                        } else k.add(i);
                        break e
                    } else {
                        if (!(n & 1)) {
                            _u(l, f, n), Lo();
                            break e
                        }
                        i = Error(y(426))
                    }
                } else if (B && u.mode & 1) {
                    var I = Cu(o);
                    if (I !== null) {
                        !(I.flags & 65536) && (I.flags |= 256), Nu(I, o, u, l, n), io(cr(i, u));
                        break e
                    }
                }
                l = i = cr(i, u),
                J !== 4 && (J = 2),
                Dr === null ? Dr = [l] : Dr.push(l),
                l = o;do {
                    switch (l.tag) {
                        case 3:
                            l.flags |= 65536, n &= -n, l.lanes |= n;
                            var c = Ps(l, i, n);
                            bu(l, c);
                            break e;
                        case 1:
                            u = i;
                            var s = l.type,
                                d = l.stateNode;
                            if (!(l.flags & 128) && (typeof s.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (mn === null || !mn.has(d)))) {
                                l.flags |= 65536, n &= -n, l.lanes |= n;
                                var v = Ls(l, u, n);
                                bu(l, v);
                                break e
                            }
                    }
                    l = l.return
                } while (l !== null)
            }
            Ys(r)
        } catch (x) {
            n = x, G === r && r !== null && (G = r = r.return);
            continue
        }
        break
    } while (!0)
}

function qs() {
    var e = ea.current;
    return ea.current = Jt, e === null ? Jt : e
}

function Lo() {
    (J === 0 || J === 3 || J === 2) && (J = 4), ne === null || !(Dn & 268435455) && !(ha & 268435455) || ln(ne, te)
}

function ta(e, n) {
    var r = F;
    F |= 2;
    var t = qs();
    (ne !== e || te !== n) && (Be = null, Ln(e, n));
    do try {
        vd();
        break
    } catch (a) {
        Qs(e, a)
    }
    while (!0);
    if (co(), F = r, ea.current = t, G !== null) throw Error(y(261));
    return ne = null, te = 0, J
}

function vd() {
    for (; G !== null;) Ks(G)
}

function yd() {
    for (; G !== null && !Vc();) Ks(G)
}

function Ks(e) {
    var n = Gs(e.alternate, e, ye);
    e.memoizedProps = e.pendingProps, n === null ? Ys(e) : G = n, Eo.current = null
}

function Ys(e) {
    var n = e;
    do {
        var r = n.alternate;
        if (e = n.return, n.flags & 32768) {
            if (r = fd(r, n), r !== null) {
                r.flags &= 32767, G = r;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                J = 6, G = null;
                return
            }
        } else if (r = cd(r, n, ye), r !== null) {
            G = r;
            return
        }
        if (n = n.sibling, n !== null) {
            G = n;
            return
        }
        G = n = e
    } while (n !== null);
    J === 0 && (J = 5)
}

function _n(e, n, r) {
    var t = U,
        a = Ne.transition;
    try {
        Ne.transition = null, U = 1, bd(e, n, r, t)
    } finally {
        Ne.transition = a, U = t
    }
    return null
}

function bd(e, n, r, t) {
    do ar(); while (un !== null);
    if (F & 6) throw Error(y(327));
    r = e.finishedWork;
    var a = e.finishedLanes;
    if (r === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(y(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var l = r.lanes | r.childLanes;
    if (Zc(e, l), e === ne && (G = ne = null, te = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || wt || (wt = !0, Zs(Ut, function() {
            return ar(), null
        })), l = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || l) {
        l = Ne.transition, Ne.transition = null;
        var o = U;
        U = 1;
        var u = F;
        F |= 4, Eo.current = null, pd(e, r), Bs(r, e), jf(vl), $t = !!gl, vl = gl = null, e.current = r, md(r), Bc(), F = u, U = o, Ne.transition = l
    } else e.current = r;
    if (wt && (wt = !1, un = e, ra = a), l = e.pendingLanes, l === 0 && (mn = null), Qc(r.stateNode), ve(e, X()), n !== null)
        for (t = e.onRecoverableError, r = 0; r < n.length; r++) a = n[r], t(a.value, {
            componentStack: a.stack,
            digest: a.digest
        });
    if (na) throw na = !1, e = Ol, Ol = null, e;
    return ra & 1 && e.tag !== 0 && ar(), l = e.pendingLanes, l & 1 ? e === Il ? Fr++ : (Fr = 0, Il = e) : Fr = 0, wn(), null
}

function ar() {
    if (un !== null) {
        var e = Pi(ra),
            n = Ne.transition,
            r = U;
        try {
            if (Ne.transition = null, U = 16 > e ? 16 : e, un === null) var t = !1;
            else {
                if (e = un, un = null, ra = 0, F & 6) throw Error(y(331));
                var a = F;
                for (F |= 4, _ = e.current; _ !== null;) {
                    var l = _,
                        o = l.child;
                    if (_.flags & 16) {
                        var u = l.deletions;
                        if (u !== null) {
                            for (var i = 0; i < u.length; i++) {
                                var f = u[i];
                                for (_ = f; _ !== null;) {
                                    var g = _;
                                    switch (g.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Rr(8, g, l)
                                    }
                                    var h = g.child;
                                    if (h !== null) h.return = g, _ = h;
                                    else
                                        for (; _ !== null;) {
                                            g = _;
                                            var p = g.sibling,
                                                b = g.return;
                                            if ($s(g), g === f) {
                                                _ = null;
                                                break
                                            }
                                            if (p !== null) {
                                                p.return = b, _ = p;
                                                break
                                            }
                                            _ = b
                                        }
                                }
                            }
                            var k = l.alternate;
                            if (k !== null) {
                                var w = k.child;
                                if (w !== null) {
                                    k.child = null;
                                    do {
                                        var I = w.sibling;
                                        w.sibling = null, w = I
                                    } while (w !== null)
                                }
                            }
                            _ = l
                        }
                    }
                    if (l.subtreeFlags & 2064 && o !== null) o.return = l, _ = o;
                    else e: for (; _ !== null;) {
                        if (l = _, l.flags & 2048) switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Rr(9, l, l.return)
                        }
                        var c = l.sibling;
                        if (c !== null) {
                            c.return = l.return, _ = c;
                            break e
                        }
                        _ = l.return
                    }
                }
                var s = e.current;
                for (_ = s; _ !== null;) {
                    o = _;
                    var d = o.child;
                    if (o.subtreeFlags & 2064 && d !== null) d.return = o, _ = d;
                    else e: for (o = s; _ !== null;) {
                        if (u = _, u.flags & 2048) try {
                            switch (u.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    ma(9, u)
                            }
                        } catch (x) {
                            q(u, u.return, x)
                        }
                        if (u === o) {
                            _ = null;
                            break e
                        }
                        var v = u.sibling;
                        if (v !== null) {
                            v.return = u.return, _ = v;
                            break e
                        }
                        _ = u.return
                    }
                }
                if (F = a, wn(), $e && typeof $e.onPostCommitFiberRoot == "function") try {
                    $e.onPostCommitFiberRoot(oa, e)
                } catch {}
                t = !0
            }
            return t
        } finally {
            U = r, Ne.transition = n
        }
    }
    return !1
}

function $u(e, n, r) {
    n = cr(r, n), n = Ps(e, n, 1), e = pn(e, n, 1), n = ce(), e !== null && (et(e, 1, n), ve(e, n))
}

function q(e, n, r) {
    if (e.tag === 3) $u(e, e, r);
    else
        for (; n !== null;) {
            if (n.tag === 3) {
                $u(n, e, r);
                break
            } else if (n.tag === 1) {
                var t = n.stateNode;
                if (typeof n.type.getDerivedStateFromError == "function" || typeof t.componentDidCatch == "function" && (mn === null || !mn.has(t))) {
                    e = cr(r, e), e = Ls(n, e, 1), n = pn(n, e, 1), e = ce(), n !== null && (et(n, 1, e), ve(n, e));
                    break
                }
            }
            n = n.return
        }
}

function kd(e, n, r) {
    var t = e.pingCache;
    t !== null && t.delete(n), n = ce(), e.pingedLanes |= e.suspendedLanes & r, ne === e && (te & r) === r && (J === 4 || J === 3 && (te & 130023424) === te && 500 > X() - Co ? Ln(e, 0) : _o |= r), ve(e, n)
}

function Xs(e, n) {
    n === 0 && (e.mode & 1 ? (n = ft, ft <<= 1, !(ft & 130023424) && (ft = 4194304)) : n = 1);
    var r = ce();
    e = Xe(e, n), e !== null && (et(e, n, r), ve(e, r))
}

function wd(e) {
    var n = e.memoizedState,
        r = 0;
    n !== null && (r = n.retryLane), Xs(e, r)
}

function Sd(e, n) {
    var r = 0;
    switch (e.tag) {
        case 13:
            var t = e.stateNode,
                a = e.memoizedState;
            a !== null && (r = a.retryLane);
            break;
        case 19:
            t = e.stateNode;
            break;
        default:
            throw Error(y(314))
    }
    t !== null && t.delete(n), Xs(e, r)
}
var Gs;
Gs = function(e, n, r) {
    if (e !== null)
        if (e.memoizedProps !== n.pendingProps || he.current) me = !0;
        else {
            if (!(e.lanes & r) && !(n.flags & 128)) return me = !1, sd(e, n, r);
            me = !!(e.flags & 131072)
        }
    else me = !1, B && n.flags & 1048576 && es(n, qt, n.index);
    switch (n.lanes = 0, n.tag) {
        case 2:
            var t = n.type;
            Mt(e, n), e = n.pendingProps;
            var a = or(n, ie.current);
            tr(n, r), a = bo(null, n, t, e, a, r);
            var l = ko();
            return n.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, ge(t) ? (l = !0, Ht(n)) : l = !1, n.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, mo(n), a.updater = pa, n.stateNode = a, a._reactInternals = n, Cl(n, t, e, r), n = Ll(null, n, t, !0, l, r)) : (n.tag = 0, B && l && oo(n), se(null, n, a, r), n = n.child), n;
        case 16:
            t = n.elementType;
            e: {
                switch (Mt(e, n), e = n.pendingProps, a = t._init, t = a(t._payload), n.type = t, a = n.tag = Ed(t), e = Me(t, e), a) {
                    case 0:
                        n = Pl(null, n, t, e, r);
                        break e;
                    case 1:
                        n = zu(null, n, t, e, r);
                        break e;
                    case 11:
                        n = Pu(null, n, t, e, r);
                        break e;
                    case 14:
                        n = Lu(null, n, t, Me(t.type, e), r);
                        break e
                }
                throw Error(y(306, t, ""))
            }
            return n;
        case 0:
            return t = n.type, a = n.pendingProps, a = n.elementType === t ? a : Me(t, a), Pl(e, n, t, a, r);
        case 1:
            return t = n.type, a = n.pendingProps, a = n.elementType === t ? a : Me(t, a), zu(e, n, t, a, r);
        case 3:
            e: {
                if (Rs(n), e === null) throw Error(y(387));t = n.pendingProps,
                l = n.memoizedState,
                a = l.element,
                os(e, n),
                Xt(n, t, null, r);
                var o = n.memoizedState;
                if (t = o.element, l.isDehydrated)
                    if (l = {
                            element: t,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                            transitions: o.transitions
                        }, n.updateQueue.baseState = l, n.memoizedState = l, n.flags & 256) {
                        a = cr(Error(y(423)), n), n = Mu(e, n, t, r, a);
                        break e
                    } else if (t !== a) {
                    a = cr(Error(y(424)), n), n = Mu(e, n, t, r, a);
                    break e
                } else
                    for (be = dn(n.stateNode.containerInfo.firstChild), ke = n, B = !0, Re = null, r = as(n, null, t, r), n.child = r; r;) r.flags = r.flags & -3 | 4096, r = r.sibling;
                else {
                    if (ur(), t === a) {
                        n = Ge(e, n, r);
                        break e
                    }
                    se(e, n, t, r)
                }
                n = n.child
            }
            return n;
        case 5:
            return us(n), e === null && xl(n), t = n.type, a = n.pendingProps, l = e !== null ? e.memoizedProps : null, o = a.children, yl(t, a) ? o = null : l !== null && yl(t, l) && (n.flags |= 32), Ts(e, n), se(e, n, o, r), n.child;
        case 6:
            return e === null && xl(n), null;
        case 13:
            return Ds(e, n, r);
        case 4:
            return ho(n, n.stateNode.containerInfo), t = n.pendingProps, e === null ? n.child = ir(n, null, t, r) : se(e, n, t, r), n.child;
        case 11:
            return t = n.type, a = n.pendingProps, a = n.elementType === t ? a : Me(t, a), Pu(e, n, t, a, r);
        case 7:
            return se(e, n, n.pendingProps, r), n.child;
        case 8:
            return se(e, n, n.pendingProps.children, r), n.child;
        case 12:
            return se(e, n, n.pendingProps.children, r), n.child;
        case 10:
            e: {
                if (t = n.type._context, a = n.pendingProps, l = n.memoizedProps, o = a.value, $(Kt, t._currentValue), t._currentValue = o, l !== null)
                    if (Oe(l.value, o)) {
                        if (l.children === a.children && !he.current) {
                            n = Ge(e, n, r);
                            break e
                        }
                    } else
                        for (l = n.child, l !== null && (l.return = n); l !== null;) {
                            var u = l.dependencies;
                            if (u !== null) {
                                o = l.child;
                                for (var i = u.firstContext; i !== null;) {
                                    if (i.context === t) {
                                        if (l.tag === 1) {
                                            i = qe(-1, r & -r), i.tag = 2;
                                            var f = l.updateQueue;
                                            if (f !== null) {
                                                f = f.shared;
                                                var g = f.pending;
                                                g === null ? i.next = i : (i.next = g.next, g.next = i), f.pending = i
                                            }
                                        }
                                        l.lanes |= r, i = l.alternate, i !== null && (i.lanes |= r), El(l.return, r, n), u.lanes |= r;
                                        break
                                    }
                                    i = i.next
                                }
                            } else if (l.tag === 10) o = l.type === n.type ? null : l.child;
                            else if (l.tag === 18) {
                                if (o = l.return, o === null) throw Error(y(341));
                                o.lanes |= r, u = o.alternate, u !== null && (u.lanes |= r), El(o, r, n), o = l.sibling
                            } else o = l.child;
                            if (o !== null) o.return = l;
                            else
                                for (o = l; o !== null;) {
                                    if (o === n) {
                                        o = null;
                                        break
                                    }
                                    if (l = o.sibling, l !== null) {
                                        l.return = o.return, o = l;
                                        break
                                    }
                                    o = o.return
                                }
                            l = o
                        }
                se(e, n, a.children, r),
                n = n.child
            }
            return n;
        case 9:
            return a = n.type, t = n.pendingProps.children, tr(n, r), a = Pe(a), t = t(a), n.flags |= 1, se(e, n, t, r), n.child;
        case 14:
            return t = n.type, a = Me(t, n.pendingProps), a = Me(t.type, a), Lu(e, n, t, a, r);
        case 15:
            return zs(e, n, n.type, n.pendingProps, r);
        case 17:
            return t = n.type, a = n.pendingProps, a = n.elementType === t ? a : Me(t, a), Mt(e, n), n.tag = 1, ge(t) ? (e = !0, Ht(n)) : e = !1, tr(n, r), Ns(n, t, a), Cl(n, t, a, r), Ll(null, n, t, !0, e, r);
        case 19:
            return Fs(e, n, r);
        case 22:
            return Ms(e, n, r)
    }
    throw Error(y(156, n.tag))
};

function Zs(e, n) {
    return Ei(e, n)
}

function xd(e, n, r, t) {
    this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = t, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Ce(e, n, r, t) {
    return new xd(e, n, r, t)
}

function zo(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function Ed(e) {
    if (typeof e == "function") return zo(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Kl) return 11;
        if (e === Yl) return 14
    }
    return 2
}

function gn(e, n) {
    var r = e.alternate;
    return r === null ? (r = Ce(e.tag, n, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = n, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, n = e.dependencies, r.dependencies = n === null ? null : {
        lanes: n.lanes,
        firstContext: n.firstContext
    }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r
}

function Dt(e, n, r, t, a, l) {
    var o = 2;
    if (t = e, typeof e == "function") zo(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
        case Vn:
            return zn(r.children, a, l, n);
        case ql:
            o = 8, a |= 8;
            break;
        case Xa:
            return e = Ce(12, r, n, a | 2), e.elementType = Xa, e.lanes = l, e;
        case Ga:
            return e = Ce(13, r, n, a), e.elementType = Ga, e.lanes = l, e;
        case Za:
            return e = Ce(19, r, n, a), e.elementType = Za, e.lanes = l, e;
        case ui:
            return ga(r, a, l, n);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case li:
                    o = 10;
                    break e;
                case oi:
                    o = 9;
                    break e;
                case Kl:
                    o = 11;
                    break e;
                case Yl:
                    o = 14;
                    break e;
                case rn:
                    o = 16, t = null;
                    break e
            }
            throw Error(y(130, e == null ? e : typeof e, ""))
    }
    return n = Ce(o, r, n, a), n.elementType = e, n.type = t, n.lanes = l, n
}

function zn(e, n, r, t) {
    return e = Ce(7, e, t, n), e.lanes = r, e
}

function ga(e, n, r, t) {
    return e = Ce(22, e, t, n), e.elementType = ui, e.lanes = r, e.stateNode = {
        isHidden: !1
    }, e
}

function Ha(e, n, r) {
    return e = Ce(6, e, null, n), e.lanes = r, e
}

function Qa(e, n, r) {
    return n = Ce(4, e.children !== null ? e.children : [], e.key, n), n.lanes = r, n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, n
}

function _d(e, n, r, t, a) {
    this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ca(0), this.expirationTimes = Ca(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ca(0), this.identifierPrefix = t, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null
}

function Mo(e, n, r, t, a, l, o, u, i) {
    return e = new _d(e, n, r, u, i), n === 1 ? (n = 1, l === !0 && (n |= 8)) : n = 0, l = Ce(3, null, null, n), e.current = l, l.stateNode = e, l.memoizedState = {
        element: t,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, mo(l), e
}

function Cd(e, n, r) {
    var t = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: An,
        key: t == null ? null : "" + t,
        children: e,
        containerInfo: n,
        implementation: r
    }
}

function Js(e) {
    if (!e) return yn;
    e = e._reactInternals;
    e: {
        if (In(e) !== e || e.tag !== 1) throw Error(y(170));
        var n = e;do {
            switch (n.tag) {
                case 3:
                    n = n.stateNode.context;
                    break e;
                case 1:
                    if (ge(n.type)) {
                        n = n.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            n = n.return
        } while (n !== null);
        throw Error(y(171))
    }
    if (e.tag === 1) {
        var r = e.type;
        if (ge(r)) return Zi(e, r, n)
    }
    return n
}

function ec(e, n, r, t, a, l, o, u, i) {
    return e = Mo(r, t, !0, e, a, l, o, u, i), e.context = Js(null), r = e.current, t = ce(), a = hn(r), l = qe(t, a), l.callback = n ?? null, pn(r, l, a), e.current.lanes = a, et(e, a, t), ve(e, t), e
}

function va(e, n, r, t) {
    var a = n.current,
        l = ce(),
        o = hn(a);
    return r = Js(r), n.context === null ? n.context = r : n.pendingContext = r, n = qe(l, o), n.payload = {
        element: e
    }, t = t === void 0 ? null : t, t !== null && (n.callback = t), e = pn(a, n, o), e !== null && (Fe(e, a, o, l), Pt(e, a, o)), o
}

function aa(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Au(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var r = e.retryLane;
        e.retryLane = r !== 0 && r < n ? r : n
    }
}

function To(e, n) {
    Au(e, n), (e = e.alternate) && Au(e, n)
}

function Nd() {
    return null
}
var nc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Ro(e) {
    this._internalRoot = e
}
ya.prototype.render = Ro.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(y(409));
    va(e, n, null, null)
};
ya.prototype.unmount = Ro.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var n = e.containerInfo;
        Fn(function() {
            va(null, e, null, null)
        }), n[Ye] = null
    }
};

function ya(e) {
    this._internalRoot = e
}
ya.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var n = Mi();
        e = {
            blockedOn: null,
            target: e,
            priority: n
        };
        for (var r = 0; r < an.length && n !== 0 && n < an[r].priority; r++);
        an.splice(r, 0, e), r === 0 && Ri(e)
    }
};

function Do(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function ba(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Vu() {}

function Pd(e, n, r, t, a) {
    if (a) {
        if (typeof t == "function") {
            var l = t;
            t = function() {
                var f = aa(o);
                l.call(f)
            }
        }
        var o = ec(n, t, e, 0, null, !1, !1, "", Vu);
        return e._reactRootContainer = o, e[Ye] = o.current, Wr(e.nodeType === 8 ? e.parentNode : e), Fn(), o
    }
    for (; a = e.lastChild;) e.removeChild(a);
    if (typeof t == "function") {
        var u = t;
        t = function() {
            var f = aa(i);
            u.call(f)
        }
    }
    var i = Mo(e, 0, !1, null, null, !1, !1, "", Vu);
    return e._reactRootContainer = i, e[Ye] = i.current, Wr(e.nodeType === 8 ? e.parentNode : e), Fn(function() {
        va(n, i, r, t)
    }), i
}

function ka(e, n, r, t, a) {
    var l = r._reactRootContainer;
    if (l) {
        var o = l;
        if (typeof a == "function") {
            var u = a;
            a = function() {
                var i = aa(o);
                u.call(i)
            }
        }
        va(n, o, e, a)
    } else o = Pd(r, n, e, a, t);
    return aa(o)
}
Li = function(e) {
    switch (e.tag) {
        case 3:
            var n = e.stateNode;
            if (n.current.memoizedState.isDehydrated) {
                var r = _r(n.pendingLanes);
                r !== 0 && (Zl(n, r | 1), ve(n, X()), !(F & 6) && (fr = X() + 500, wn()))
            }
            break;
        case 13:
            Fn(function() {
                var t = Xe(e, 1);
                if (t !== null) {
                    var a = ce();
                    Fe(t, e, 1, a)
                }
            }), To(e, 1)
    }
};
Jl = function(e) {
    if (e.tag === 13) {
        var n = Xe(e, 134217728);
        if (n !== null) {
            var r = ce();
            Fe(n, e, 134217728, r)
        }
        To(e, 134217728)
    }
};
zi = function(e) {
    if (e.tag === 13) {
        var n = hn(e),
            r = Xe(e, n);
        if (r !== null) {
            var t = ce();
            Fe(r, e, n, t)
        }
        To(e, n)
    }
};
Mi = function() {
    return U
};
Ti = function(e, n) {
    var r = U;
    try {
        return U = e, n()
    } finally {
        U = r
    }
};
il = function(e, n, r) {
    switch (n) {
        case "input":
            if (nl(e, r), n = r.name, r.type === "radio" && n != null) {
                for (r = e; r.parentNode;) r = r.parentNode;
                for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < r.length; n++) {
                    var t = r[n];
                    if (t !== e && t.form === e.form) {
                        var a = ca(t);
                        if (!a) throw Error(y(90));
                        si(t), nl(t, a)
                    }
                }
            }
            break;
        case "textarea":
            fi(e, r);
            break;
        case "select":
            n = r.value, n != null && Jn(e, !!r.multiple, n, !1)
    }
};
yi = No;
bi = Fn;
var Ld = {
        usingClientEntryPoint: !1,
        Events: [rt, Qn, ca, gi, vi, No]
    },
    Sr = {
        findFiberByHostInstance: Cn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    zd = {
        bundleType: Sr.bundleType,
        version: Sr.version,
        rendererPackageName: Sr.rendererPackageName,
        rendererConfig: Sr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Ze.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Si(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Sr.findFiberByHostInstance || Nd,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var St = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!St.isDisabled && St.supportsFiber) try {
        oa = St.inject(zd), $e = St
    } catch {}
}
Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ld;
Se.createPortal = function(e, n) {
    var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Do(n)) throw Error(y(200));
    return Cd(e, n, null, r)
};
Se.createRoot = function(e, n) {
    if (!Do(e)) throw Error(y(299));
    var r = !1,
        t = "",
        a = nc;
    return n != null && (n.unstable_strictMode === !0 && (r = !0), n.identifierPrefix !== void 0 && (t = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), n = Mo(e, 1, !1, null, null, r, !1, t, a), e[Ye] = n.current, Wr(e.nodeType === 8 ? e.parentNode : e), new Ro(n)
};
Se.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var n = e._reactInternals;
    if (n === void 0) throw typeof e.render == "function" ? Error(y(188)) : (e = Object.keys(e).join(","), Error(y(268, e)));
    return e = Si(n), e = e === null ? null : e.stateNode, e
};
Se.flushSync = function(e) {
    return Fn(e)
};
Se.hydrate = function(e, n, r) {
    if (!ba(n)) throw Error(y(200));
    return ka(null, e, n, !0, r)
};
Se.hydrateRoot = function(e, n, r) {
    if (!Do(e)) throw Error(y(405));
    var t = r != null && r.hydratedSources || null,
        a = !1,
        l = "",
        o = nc;
    if (r != null && (r.unstable_strictMode === !0 && (a = !0), r.identifierPrefix !== void 0 && (l = r.identifierPrefix), r.onRecoverableError !== void 0 && (o = r.onRecoverableError)), n = ec(n, null, e, 1, r ?? null, a, !1, l, o), e[Ye] = n.current, Wr(e), t)
        for (e = 0; e < t.length; e++) r = t[e], a = r._getVersion, a = a(r._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [r, a] : n.mutableSourceEagerHydrationData.push(r, a);
    return new ya(n)
};
Se.render = function(e, n, r) {
    if (!ba(n)) throw Error(y(200));
    return ka(null, e, n, !1, r)
};
Se.unmountComponentAtNode = function(e) {
    if (!ba(e)) throw Error(y(40));
    return e._reactRootContainer ? (Fn(function() {
        ka(null, null, e, !1, function() {
            e._reactRootContainer = null, e[Ye] = null
        })
    }), !0) : !1
};
Se.unstable_batchedUpdates = No;
Se.unstable_renderSubtreeIntoContainer = function(e, n, r, t) {
    if (!ba(r)) throw Error(y(200));
    if (e == null || e._reactInternals === void 0) throw Error(y(38));
    return ka(e, n, r, !1, t)
};
Se.version = "18.3.1-next-f1338f8080-20240426";

function rc() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rc)
    } catch (e) {
        console.error(e)
    }
}
rc(), ni.exports = Se;
var Md = ni.exports,
    Bu = Md;
Ka.createRoot = Bu.createRoot, Ka.hydrateRoot = Bu.hydrateRoot;

function qa(e) {
    if (!e) return "unknown";
    try {
        return new URL(e).hostname || "unknown"
    } catch {
        return "unknown"
    }
}
const Td = 10;

function Rd(e) {
    return e ? e === "about:blank" || e.startsWith("chrome://newtab") || e.startsWith("edge://newtab") : !0
}

function Dd(e) {
    return e ? e.startsWith("http://") || e.startsWith("https://") : !1
}

function Fd(e, n) {
    return !e || Rd(e) ? n : Dd(e) ? `chrome://favicon2/?size=32&pageUrl=${encodeURIComponent(e)}` : n
}

function Od() {
    const [e, n] = Y.useState([]), [r, t] = Y.useState(!0), [a, l] = Y.useState({}), [o, u] = Y.useState(null), [i, f] = Y.useState([]), [g, h] = Y.useState(null), [p, b] = Y.useState(null), [k, w] = Y.useState(null), I = Y.useRef(null), c = chrome.runtime.getManifest().icons ?? {}, s = chrome.runtime.getURL(c[32] ?? "icons/icon-32.png"), d = chrome.runtime.getURL(c[16] ?? "icons/icon-16.png"), v = async () => {
        t(!0);
        const m = await chrome.tabs.query({
            currentWindow: !0
        });
        n(m.map(C => ({
            id: C.id,
            title: C.title,
            iconUrl: Fd(C.url, d),
            url: C.url,
            active: C.active,
            index: C.index,
            windowId: C.windowId
        }))), t(!1)
    };
    Y.useEffect(() => {
        v()
    }, []);
    const x = async m => {
        if (m.length === 0) return;
        const C = new Set(m);
        if (!e.find(j => j.active && j.id !== void 0 && C.has(j.id))) return;
        const S = e.find(j => j.id !== void 0 && !C.has(j.id));
        if ((S == null ? void 0 : S.id) !== void 0) {
            await chrome.tabs.update(S.id, {
                active: !0
            });
            return
        }
        const M = await chrome.tabs.create({
            active: !0,
            url: "about:blank"
        });
        M.id !== void 0 && await chrome.tabs.update(M.id, {
            active: !0
        })
    }, N = async m => {
        m !== void 0 && (await x([m]), await chrome.tabs.remove(m), n(C => C.filter(S => S.id !== m)))
    }, P = async m => {
        m.id !== void 0 && (await chrome.tabs.update(m.id, {
            active: !0
        }), m.windowId !== void 0 && await chrome.windows.update(m.windowId, {
            focused: !0
        }))
    }, L = async m => {
        const C = e.filter(S => qa(S.url) === m).map(S => S.id).filter(S => S !== void 0);
        C.length !== 0 && (await x(C), await chrome.tabs.remove(C), n(S => S.filter(M => qa(M.url) !== m)), u(null))
    }, O = e.length > Td, R = Y.useMemo(() => {
        var m;
        const C = new Map;
        for (const S of e) {
            const M = qa(S.url);
            C.has(M) || C.set(M, []), (m = C.get(M)) == null || m.push(S)
        }
        return Array.from(C.entries()).map(([S, M]) => {
            var j;
            return {
                domain: S,
                tabs: M,
                iconUrl: (j = M.find(en => !!en.iconUrl)) == null ? void 0 : j.iconUrl
            }
        }).sort((S, M) => M.tabs.length !== S.tabs.length ? M.tabs.length - S.tabs.length : S.domain.localeCompare(M.domain))
    }, [e]), K = Y.useMemo(() => O ? R.filter(m => m.tabs.length > 1) : [], [R, O]), Ve = Y.useMemo(() => {
        const m = new Map(K.map(M => [M.domain, M])),
            C = i.map(M => m.get(M)).filter(M => !!M),
            S = K.filter(M => !i.includes(M.domain));
        return [...C, ...S]
    }, [i, K]), Sn = Y.useMemo(() => O ? R.filter(m => m.tabs.length === 1).map(m => m.tabs[0]) : e, [R, O, e]);
    Y.useEffect(() => {
        if (!O) {
            l({});
            return
        }
        l(m => {
            const C = {};
            for (const S of K) C[S.domain] = m[S.domain] ?? !1;
            return C
        })
    }, [K, O]), Y.useEffect(() => {
        f(m => {
            const C = K.map(j => j.domain),
                S = m.filter(j => C.includes(j)),
                M = C.filter(j => !S.includes(j));
            return [...S, ...M]
        })
    }, [K]), Y.useEffect(() => {
        o && (K.some(m => m.domain === o) || u(null))
    }, [K, o]), Y.useEffect(() => () => Un(), []);
    const at = m => {
            l(C => ({
                ...C,
                [m]: !C[m]
            }))
        },
        Un = () => {
            I.current !== null && (window.clearTimeout(I.current), I.current = null)
        },
        jn = m => {
            Un(), I.current = window.setTimeout(() => {
                h(m)
            }, 220)
        },
        Je = () => {
            Un(), p || h(null)
        },
        E = (m, C) => {
            m !== C && f(S => {
                const M = [...S],
                    j = M.indexOf(m),
                    en = M.indexOf(C);
                return j < 0 || en < 0 ? S : (M.splice(j, 1), M.splice(en, 0, m), M)
            })
        },
        z = (m, C) => T.jsxs("li", {
            className: "tab-item",
            children: [T.jsxs("button", {
                className: "tab-open-btn",
                onClick: () => void P(m),
                children: [T.jsx("div", {
                    className: "tab-icon-wrap",
                    "aria-hidden": "true",
                    children: m.iconUrl ? T.jsx("img", {
                        className: "tab-icon",
                        src: m.iconUrl,
                        alt: "",
                        referrerPolicy: "no-referrer",
                        onError: S => {
                            S.currentTarget.onerror = null, S.currentTarget.src = d
                        }
                    }) : T.jsx("span", {
                        className: "tab-icon-fallback"
                    })
                }), T.jsx("p", {
                    className: "tab-title",
                    title: m.title || "",
                    children: m.title || "Untitled"
                })]
            }), T.jsx("button", {
                className: "delete-btn",
                "aria-label": "删除标签页",
                onClick: S => {
                    S.stopPropagation(), N(m.id)
                },
                children: T.jsx("svg", {
                    viewBox: "0 0 16 16",
                    className: "delete-icon",
                    "aria-hidden": "true",
                    children: T.jsx("path", {
                        d: "M4.2 4.2l7.6 7.6M11.8 4.2l-7.6 7.6"
                    })
                })
            })]
        }, C);
    return T.jsxs("main", {
        className: "popup-root",
        children: [T.jsxs("header", {
            className: "popup-header",
            children: [T.jsxs("h1", {
                className: "brand-title",
                children: [T.jsx("img", {
                    src: s,
                    className: "brand-icon",
                    alt: ""
                }), T.jsx("span", {
                    children: "AetherTabs"
                })]
            }), T.jsx("button", {
                className: "refresh-btn",
                onClick: () => void v(),
                children: "刷新"
            })]
        }), r && T.jsx("p", {
            className: "state-text",
            children: "加载中..."
        }), !r && e.length === 0 && T.jsx("p", {
            className: "state-text",
            children: "当前窗口没有标签页"
        }), !r && e.length > 0 && T.jsxs(T.Fragment, {
            children: [O && Ve.length > 0 && T.jsx("ul", {
                className: "domain-list",
                children: Ve.map(m => {
                    const C = a[m.domain];
                    return T.jsxs("li", {
                        className: `domain-group ${p===m.domain?"is-dragging":""} ${k===m.domain&&p!==m.domain?"is-drag-over":""}`,
                        draggable: g === m.domain,
                        onDragStart: S => {
                            if (g !== m.domain) {
                                S.preventDefault();
                                return
                            }
                            S.dataTransfer.effectAllowed = "move", S.dataTransfer.setData("text/plain", m.domain), b(m.domain), w(m.domain)
                        },
                        onDragOver: S => {
                            S.preventDefault(), p && p !== m.domain && w(m.domain)
                        },
                        onDrop: S => {
                            S.preventDefault();
                            const M = S.dataTransfer.getData("text/plain") || p;
                            M && E(M, m.domain), w(null)
                        },
                        onDragEnd: () => {
                            b(null), w(null), h(null), Un()
                        },
                        children: [T.jsxs("div", {
                            className: "domain-header",
                            children: [T.jsx("button", {
                                className: `domain-drag-handle ${g===m.domain?"armed":""}`,
                                "aria-label": `长按拖动 ${m.domain} 分组`,
                                title: "长按可拖动分组",
                                onMouseDown: () => jn(m.domain),
                                onMouseUp: Je,
                                onMouseLeave: Je,
                                onTouchStart: () => jn(m.domain),
                                onTouchEnd: Je,
                                onTouchCancel: Je,
                                children: "⋮⋮"
                            }), T.jsxs("button", {
                                className: "domain-toggle",
                                onClick: () => at(m.domain),
                                children: [T.jsx("span", {
                                    className: `domain-arrow ${C?"expanded":""}`,
                                    children: "▸"
                                }), T.jsx("span", {
                                    className: "domain-icon-wrap",
                                    "aria-hidden": "true",
                                    children: m.iconUrl ? T.jsx("img", {
                                        className: "domain-icon",
                                        src: m.iconUrl,
                                        alt: "",
                                        referrerPolicy: "no-referrer",
                                        onError: S => {
                                            S.currentTarget.onerror = null, S.currentTarget.src = d
                                        }
                                    }) : T.jsx("span", {
                                        className: "domain-icon-fallback"
                                    })
                                }), T.jsx("span", {
                                    className: "domain-name",
                                    title: m.domain,
                                    children: m.domain
                                }), T.jsx("span", {
                                    className: "domain-count",
                                    children: m.tabs.length
                                })]
                            }), T.jsx("button", {
                                className: "domain-delete-btn",
                                "aria-label": `删除 ${m.domain} 下全部标签`,
                                onClick: () => {
                                    u(m.domain)
                                },
                                children: T.jsx("svg", {
                                    viewBox: "0 0 16 16",
                                    className: "delete-icon",
                                    "aria-hidden": "true",
                                    children: T.jsx("path", {
                                        d: "M4.2 4.2l7.6 7.6M11.8 4.2l-7.6 7.6"
                                    })
                                })
                            })]
                        }), o === m.domain && T.jsxs("div", {
                            className: "domain-confirm-row",
                            children: [T.jsx("span", {
                                className: "domain-confirm-text",
                                children: "删除该分组全部标签？"
                            }), T.jsx("button", {
                                className: "confirm-btn",
                                onClick: () => {
                                    L(m.domain)
                                },
                                children: "确认"
                            }), T.jsx("button", {
                                className: "cancel-btn",
                                onClick: () => {
                                    u(null)
                                },
                                children: "取消"
                            })]
                        }), C && T.jsx("ul", {
                            className: "tab-list grouped",
                            children: m.tabs.map((S, M) => z(S, `${m.domain}-${S.id??S.title??"tab"}-${M}`))
                        })]
                    }, m.domain)
                })
            }), T.jsx("ul", {
                className: `tab-list ${O&&Ve.length>0?"standalone-in-group":""}`,
                children: Sn.map((m, C) => z(m, `${m.id??m.title??"tab"}-${C}`))
            })]
        })]
    })
}
Ka.createRoot(document.getElementById("root")).render(T.jsx(bc.StrictMode, {
    children: T.jsx(Od, {})
}));
