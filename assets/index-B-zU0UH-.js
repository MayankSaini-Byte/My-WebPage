(function () {
  const D = document.createElement("link").relList;
  if (D && D.supports && D.supports("modulepreload")) return;
  for (const U of document.querySelectorAll('link[rel="modulepreload"]')) h(U);
  new MutationObserver((U) => {
    for (const B of U)
      if (B.type === "childList")
        for (const w of B.addedNodes)
          w.tagName === "LINK" && w.rel === "modulepreload" && h(w);
  }).observe(document, { childList: !0, subtree: !0 });
  function R(U) {
    const B = {};
    return (
      U.integrity && (B.integrity = U.integrity),
      U.referrerPolicy && (B.referrerPolicy = U.referrerPolicy),
      U.crossOrigin === "use-credentials"
        ? (B.credentials = "include")
        : U.crossOrigin === "anonymous"
          ? (B.credentials = "omit")
          : (B.credentials = "same-origin"),
      B
    );
  }
  function h(U) {
    if (U.ep) return;
    U.ep = !0;
    const B = R(U);
    fetch(U.href, B);
  }
})();
var $c = { exports: {} },
  mu = {};
var Fo;
function U1() {
  if (Fo) return mu;
  Fo = 1;
  var E = Symbol.for("react.transitional.element"),
    D = Symbol.for("react.fragment");
  function R(h, U, B) {
    var w = null;
    if (
      (B !== void 0 && (w = "" + B),
      U.key !== void 0 && (w = "" + U.key),
      "key" in U)
    ) {
      B = {};
      for (var fl in U) fl !== "key" && (B[fl] = U[fl]);
    } else B = U;
    return (
      (U = B.ref),
      { $$typeof: E, type: h, key: w, ref: U !== void 0 ? U : null, props: B }
    );
  }
  return ((mu.Fragment = D), (mu.jsx = R), (mu.jsxs = R), mu);
}
var Io;
function j1() {
  return (Io || ((Io = 1), ($c.exports = U1())), $c.exports);
}
var v = j1(),
  Fc = { exports: {} },
  gu = {},
  Ic = { exports: {} },
  Pc = {};
var Po;
function N1() {
  return (
    Po ||
      ((Po = 1),
      (function (E) {
        function D(b, M) {
          var G = b.length;
          b.push(M);
          l: for (; 0 < G; ) {
            var il = (G - 1) >>> 1,
              s = b[il];
            if (0 < U(s, M)) ((b[il] = M), (b[G] = s), (G = il));
            else break l;
          }
        }
        function R(b) {
          return b.length === 0 ? null : b[0];
        }
        function h(b) {
          if (b.length === 0) return null;
          var M = b[0],
            G = b.pop();
          if (G !== M) {
            b[0] = G;
            l: for (var il = 0, s = b.length, A = s >>> 1; il < A; ) {
              var O = 2 * (il + 1) - 1,
                z = b[O],
                q = O + 1,
                $ = b[q];
              if (0 > U(z, G))
                q < s && 0 > U($, z)
                  ? ((b[il] = $), (b[q] = G), (il = q))
                  : ((b[il] = z), (b[O] = G), (il = O));
              else if (q < s && 0 > U($, G))
                ((b[il] = $), (b[q] = G), (il = q));
              else break l;
            }
          }
          return M;
        }
        function U(b, M) {
          var G = b.sortIndex - M.sortIndex;
          return G !== 0 ? G : b.id - M.id;
        }
        if (
          ((E.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var B = performance;
          E.unstable_now = function () {
            return B.now();
          };
        } else {
          var w = Date,
            fl = w.now();
          E.unstable_now = function () {
            return w.now() - fl;
          };
        }
        var j = [],
          T = [],
          H = 1,
          P = null,
          al = 3,
          vl = !1,
          ql = !1,
          dt = !1,
          Cl = !1,
          da = typeof setTimeout == "function" ? setTimeout : null,
          At = typeof clearTimeout == "function" ? clearTimeout : null,
          Rl = typeof setImmediate < "u" ? setImmediate : null;
        function ht(b) {
          for (var M = R(T); M !== null; ) {
            if (M.callback === null) h(T);
            else if (M.startTime <= b)
              (h(T), (M.sortIndex = M.expirationTime), D(j, M));
            else break;
            M = R(T);
          }
        }
        function k(b) {
          if (((dt = !1), ht(b), !ql))
            if (R(j) !== null) ((ql = !0), Ll || ((Ll = !0), Ul()));
            else {
              var M = R(T);
              M !== null && jl(k, M.startTime - b);
            }
        }
        var Ll = !1,
          Kl = -1,
          Jl = 5,
          gt = -1;
        function Na() {
          return Cl ? !0 : !(E.unstable_now() - gt < Jl);
        }
        function zt() {
          if (((Cl = !1), Ll)) {
            var b = E.unstable_now();
            gt = b;
            var M = !0;
            try {
              l: {
                ((ql = !1), dt && ((dt = !1), At(Kl), (Kl = -1)), (vl = !0));
                var G = al;
                try {
                  t: {
                    for (
                      ht(b), P = R(j);
                      P !== null && !(P.expirationTime > b && Na());
                    ) {
                      var il = P.callback;
                      if (typeof il == "function") {
                        ((P.callback = null), (al = P.priorityLevel));
                        var s = il(P.expirationTime <= b);
                        if (((b = E.unstable_now()), typeof s == "function")) {
                          ((P.callback = s), ht(b), (M = !0));
                          break t;
                        }
                        (P === R(j) && h(j), ht(b));
                      } else h(j);
                      P = R(j);
                    }
                    if (P !== null) M = !0;
                    else {
                      var A = R(T);
                      (A !== null && jl(k, A.startTime - b), (M = !1));
                    }
                  }
                  break l;
                } finally {
                  ((P = null), (al = G), (vl = !1));
                }
                M = void 0;
              }
            } finally {
              M ? Ul() : (Ll = !1);
            }
          }
        }
        var Ul;
        if (typeof Rl == "function")
          Ul = function () {
            Rl(zt);
          };
        else if (typeof MessageChannel < "u") {
          var ha = new MessageChannel(),
            ya = ha.port2;
          ((ha.port1.onmessage = zt),
            (Ul = function () {
              ya.postMessage(null);
            }));
        } else
          Ul = function () {
            da(zt, 0);
          };
        function jl(b, M) {
          Kl = da(function () {
            b(E.unstable_now());
          }, M);
        }
        ((E.unstable_IdlePriority = 5),
          (E.unstable_ImmediatePriority = 1),
          (E.unstable_LowPriority = 4),
          (E.unstable_NormalPriority = 3),
          (E.unstable_Profiling = null),
          (E.unstable_UserBlockingPriority = 2),
          (E.unstable_cancelCallback = function (b) {
            b.callback = null;
          }),
          (E.unstable_forceFrameRate = function (b) {
            0 > b || 125 < b
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Jl = 0 < b ? Math.floor(1e3 / b) : 5);
          }),
          (E.unstable_getCurrentPriorityLevel = function () {
            return al;
          }),
          (E.unstable_next = function (b) {
            switch (al) {
              case 1:
              case 2:
              case 3:
                var M = 3;
                break;
              default:
                M = al;
            }
            var G = al;
            al = M;
            try {
              return b();
            } finally {
              al = G;
            }
          }),
          (E.unstable_requestPaint = function () {
            Cl = !0;
          }),
          (E.unstable_runWithPriority = function (b, M) {
            switch (b) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                b = 3;
            }
            var G = al;
            al = b;
            try {
              return M();
            } finally {
              al = G;
            }
          }),
          (E.unstable_scheduleCallback = function (b, M, G) {
            var il = E.unstable_now();
            switch (
              (typeof G == "object" && G !== null
                ? ((G = G.delay),
                  (G = typeof G == "number" && 0 < G ? il + G : il))
                : (G = il),
              b)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (s = G + s),
              (b = {
                id: H++,
                callback: M,
                priorityLevel: b,
                startTime: G,
                expirationTime: s,
                sortIndex: -1,
              }),
              G > il
                ? ((b.sortIndex = G),
                  D(T, b),
                  R(j) === null &&
                    b === R(T) &&
                    (dt ? (At(Kl), (Kl = -1)) : (dt = !0), jl(k, G - il)))
                : ((b.sortIndex = s),
                  D(j, b),
                  ql || vl || ((ql = !0), Ll || ((Ll = !0), Ul()))),
              b
            );
          }),
          (E.unstable_shouldYield = Na),
          (E.unstable_wrapCallback = function (b) {
            var M = al;
            return function () {
              var G = al;
              al = M;
              try {
                return b.apply(this, arguments);
              } finally {
                al = G;
              }
            };
          }));
      })(Pc)),
    Pc
  );
}
var lr;
function H1() {
  return (lr || ((lr = 1), (Ic.exports = N1())), Ic.exports);
}
var lf = { exports: {} },
  Z = {};
var tr;
function B1() {
  if (tr) return Z;
  tr = 1;
  var E = Symbol.for("react.transitional.element"),
    D = Symbol.for("react.portal"),
    R = Symbol.for("react.fragment"),
    h = Symbol.for("react.strict_mode"),
    U = Symbol.for("react.profiler"),
    B = Symbol.for("react.consumer"),
    w = Symbol.for("react.context"),
    fl = Symbol.for("react.forward_ref"),
    j = Symbol.for("react.suspense"),
    T = Symbol.for("react.memo"),
    H = Symbol.for("react.lazy"),
    P = Symbol.iterator;
  function al(s) {
    return s === null || typeof s != "object"
      ? null
      : ((s = (P && s[P]) || s["@@iterator"]),
        typeof s == "function" ? s : null);
  }
  var vl = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    ql = Object.assign,
    dt = {};
  function Cl(s, A, O) {
    ((this.props = s),
      (this.context = A),
      (this.refs = dt),
      (this.updater = O || vl));
  }
  ((Cl.prototype.isReactComponent = {}),
    (Cl.prototype.setState = function (s, A) {
      if (typeof s != "object" && typeof s != "function" && s != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, s, A, "setState");
    }),
    (Cl.prototype.forceUpdate = function (s) {
      this.updater.enqueueForceUpdate(this, s, "forceUpdate");
    }));
  function da() {}
  da.prototype = Cl.prototype;
  function At(s, A, O) {
    ((this.props = s),
      (this.context = A),
      (this.refs = dt),
      (this.updater = O || vl));
  }
  var Rl = (At.prototype = new da());
  ((Rl.constructor = At), ql(Rl, Cl.prototype), (Rl.isPureReactComponent = !0));
  var ht = Array.isArray,
    k = { H: null, A: null, T: null, S: null, V: null },
    Ll = Object.prototype.hasOwnProperty;
  function Kl(s, A, O, z, q, $) {
    return (
      (O = $.ref),
      { $$typeof: E, type: s, key: A, ref: O !== void 0 ? O : null, props: $ }
    );
  }
  function Jl(s, A) {
    return Kl(s.type, A, void 0, void 0, void 0, s.props);
  }
  function gt(s) {
    return typeof s == "object" && s !== null && s.$$typeof === E;
  }
  function Na(s) {
    var A = { "=": "=0", ":": "=2" };
    return (
      "$" +
      s.replace(/[=:]/g, function (O) {
        return A[O];
      })
    );
  }
  var zt = /\/+/g;
  function Ul(s, A) {
    return typeof s == "object" && s !== null && s.key != null
      ? Na("" + s.key)
      : A.toString(36);
  }
  function ha() {}
  function ya(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (
          (typeof s.status == "string"
            ? s.then(ha, ha)
            : ((s.status = "pending"),
              s.then(
                function (A) {
                  s.status === "pending" &&
                    ((s.status = "fulfilled"), (s.value = A));
                },
                function (A) {
                  s.status === "pending" &&
                    ((s.status = "rejected"), (s.reason = A));
                },
              )),
          s.status)
        ) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function jl(s, A, O, z, q) {
    var $ = typeof s;
    ($ === "undefined" || $ === "boolean") && (s = null);
    var Q = !1;
    if (s === null) Q = !0;
    else
      switch ($) {
        case "bigint":
        case "string":
        case "number":
          Q = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case E:
            case D:
              Q = !0;
              break;
            case H:
              return ((Q = s._init), jl(Q(s._payload), A, O, z, q));
          }
      }
    if (Q)
      return (
        (q = q(s)),
        (Q = z === "" ? "." + Ul(s, 0) : z),
        ht(q)
          ? ((O = ""),
            Q != null && (O = Q.replace(zt, "$&/") + "/"),
            jl(q, A, O, "", function (Qt) {
              return Qt;
            }))
          : q != null &&
            (gt(q) &&
              (q = Jl(
                q,
                O +
                  (q.key == null || (s && s.key === q.key)
                    ? ""
                    : ("" + q.key).replace(zt, "$&/") + "/") +
                  Q,
              )),
            A.push(q)),
        1
      );
    Q = 0;
    var wl = z === "" ? "." : z + ":";
    if (ht(s))
      for (var ol = 0; ol < s.length; ol++)
        ((z = s[ol]), ($ = wl + Ul(z, ol)), (Q += jl(z, A, O, $, q)));
    else if (((ol = al(s)), typeof ol == "function"))
      for (s = ol.call(s), ol = 0; !(z = s.next()).done; )
        ((z = z.value), ($ = wl + Ul(z, ol++)), (Q += jl(z, A, O, $, q)));
    else if ($ === "object") {
      if (typeof s.then == "function") return jl(ya(s), A, O, z, q);
      throw (
        (A = String(s)),
        Error(
          "Objects are not valid as a React child (found: " +
            (A === "[object Object]"
              ? "object with keys {" + Object.keys(s).join(", ") + "}"
              : A) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return Q;
  }
  function b(s, A, O) {
    if (s == null) return s;
    var z = [],
      q = 0;
    return (
      jl(s, z, "", "", function ($) {
        return A.call(O, $, q++);
      }),
      z
    );
  }
  function M(s) {
    if (s._status === -1) {
      var A = s._result;
      ((A = A()),
        A.then(
          function (O) {
            (s._status === 0 || s._status === -1) &&
              ((s._status = 1), (s._result = O));
          },
          function (O) {
            (s._status === 0 || s._status === -1) &&
              ((s._status = 2), (s._result = O));
          },
        ),
        s._status === -1 && ((s._status = 0), (s._result = A)));
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var G =
    typeof reportError == "function"
      ? reportError
      : function (s) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var A = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof s == "object" &&
                s !== null &&
                typeof s.message == "string"
                  ? String(s.message)
                  : String(s),
              error: s,
            });
            if (!window.dispatchEvent(A)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", s);
            return;
          }
          console.error(s);
        };
  function il() {}
  return (
    (Z.Children = {
      map: b,
      forEach: function (s, A, O) {
        b(
          s,
          function () {
            A.apply(this, arguments);
          },
          O,
        );
      },
      count: function (s) {
        var A = 0;
        return (
          b(s, function () {
            A++;
          }),
          A
        );
      },
      toArray: function (s) {
        return (
          b(s, function (A) {
            return A;
          }) || []
        );
      },
      only: function (s) {
        if (!gt(s))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return s;
      },
    }),
    (Z.Component = Cl),
    (Z.Fragment = R),
    (Z.Profiler = U),
    (Z.PureComponent = At),
    (Z.StrictMode = h),
    (Z.Suspense = j),
    (Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k),
    (Z.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (s) {
        return k.H.useMemoCache(s);
      },
    }),
    (Z.cache = function (s) {
      return function () {
        return s.apply(null, arguments);
      };
    }),
    (Z.cloneElement = function (s, A, O) {
      if (s == null)
        throw Error(
          "The argument must be a React element, but you passed " + s + ".",
        );
      var z = ql({}, s.props),
        q = s.key,
        $ = void 0;
      if (A != null)
        for (Q in (A.ref !== void 0 && ($ = void 0),
        A.key !== void 0 && (q = "" + A.key),
        A))
          !Ll.call(A, Q) ||
            Q === "key" ||
            Q === "__self" ||
            Q === "__source" ||
            (Q === "ref" && A.ref === void 0) ||
            (z[Q] = A[Q]);
      var Q = arguments.length - 2;
      if (Q === 1) z.children = O;
      else if (1 < Q) {
        for (var wl = Array(Q), ol = 0; ol < Q; ol++)
          wl[ol] = arguments[ol + 2];
        z.children = wl;
      }
      return Kl(s.type, q, void 0, void 0, $, z);
    }),
    (Z.createContext = function (s) {
      return (
        (s = {
          $$typeof: w,
          _currentValue: s,
          _currentValue2: s,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (s.Provider = s),
        (s.Consumer = { $$typeof: B, _context: s }),
        s
      );
    }),
    (Z.createElement = function (s, A, O) {
      var z,
        q = {},
        $ = null;
      if (A != null)
        for (z in (A.key !== void 0 && ($ = "" + A.key), A))
          Ll.call(A, z) &&
            z !== "key" &&
            z !== "__self" &&
            z !== "__source" &&
            (q[z] = A[z]);
      var Q = arguments.length - 2;
      if (Q === 1) q.children = O;
      else if (1 < Q) {
        for (var wl = Array(Q), ol = 0; ol < Q; ol++)
          wl[ol] = arguments[ol + 2];
        q.children = wl;
      }
      if (s && s.defaultProps)
        for (z in ((Q = s.defaultProps), Q)) q[z] === void 0 && (q[z] = Q[z]);
      return Kl(s, $, void 0, void 0, null, q);
    }),
    (Z.createRef = function () {
      return { current: null };
    }),
    (Z.forwardRef = function (s) {
      return { $$typeof: fl, render: s };
    }),
    (Z.isValidElement = gt),
    (Z.lazy = function (s) {
      return { $$typeof: H, _payload: { _status: -1, _result: s }, _init: M };
    }),
    (Z.memo = function (s, A) {
      return { $$typeof: T, type: s, compare: A === void 0 ? null : A };
    }),
    (Z.startTransition = function (s) {
      var A = k.T,
        O = {};
      k.T = O;
      try {
        var z = s(),
          q = k.S;
        (q !== null && q(O, z),
          typeof z == "object" &&
            z !== null &&
            typeof z.then == "function" &&
            z.then(il, G));
      } catch ($) {
        G($);
      } finally {
        k.T = A;
      }
    }),
    (Z.unstable_useCacheRefresh = function () {
      return k.H.useCacheRefresh();
    }),
    (Z.use = function (s) {
      return k.H.use(s);
    }),
    (Z.useActionState = function (s, A, O) {
      return k.H.useActionState(s, A, O);
    }),
    (Z.useCallback = function (s, A) {
      return k.H.useCallback(s, A);
    }),
    (Z.useContext = function (s) {
      return k.H.useContext(s);
    }),
    (Z.useDebugValue = function () {}),
    (Z.useDeferredValue = function (s, A) {
      return k.H.useDeferredValue(s, A);
    }),
    (Z.useEffect = function (s, A, O) {
      var z = k.H;
      if (typeof O == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React.",
        );
      return z.useEffect(s, A);
    }),
    (Z.useId = function () {
      return k.H.useId();
    }),
    (Z.useImperativeHandle = function (s, A, O) {
      return k.H.useImperativeHandle(s, A, O);
    }),
    (Z.useInsertionEffect = function (s, A) {
      return k.H.useInsertionEffect(s, A);
    }),
    (Z.useLayoutEffect = function (s, A) {
      return k.H.useLayoutEffect(s, A);
    }),
    (Z.useMemo = function (s, A) {
      return k.H.useMemo(s, A);
    }),
    (Z.useOptimistic = function (s, A) {
      return k.H.useOptimistic(s, A);
    }),
    (Z.useReducer = function (s, A, O) {
      return k.H.useReducer(s, A, O);
    }),
    (Z.useRef = function (s) {
      return k.H.useRef(s);
    }),
    (Z.useState = function (s) {
      return k.H.useState(s);
    }),
    (Z.useSyncExternalStore = function (s, A, O) {
      return k.H.useSyncExternalStore(s, A, O);
    }),
    (Z.useTransition = function () {
      return k.H.useTransition();
    }),
    (Z.version = "19.1.0"),
    Z
  );
}
var ar;
function af() {
  return (ar || ((ar = 1), (lf.exports = B1())), lf.exports);
}
var tf = { exports: {} },
  Bl = {};
var er;
function q1() {
  if (er) return Bl;
  er = 1;
  var E = af();
  function D(j) {
    var T = "https://react.dev/errors/" + j;
    if (1 < arguments.length) {
      T += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var H = 2; H < arguments.length; H++)
        T += "&args[]=" + encodeURIComponent(arguments[H]);
    }
    return (
      "Minified React error #" +
      j +
      "; visit " +
      T +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function R() {}
  var h = {
      d: {
        f: R,
        r: function () {
          throw Error(D(522));
        },
        D: R,
        C: R,
        L: R,
        m: R,
        X: R,
        S: R,
        M: R,
      },
      p: 0,
      findDOMNode: null,
    },
    U = Symbol.for("react.portal");
  function B(j, T, H) {
    var P =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: U,
      key: P == null ? null : "" + P,
      children: j,
      containerInfo: T,
      implementation: H,
    };
  }
  var w = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function fl(j, T) {
    if (j === "font") return "";
    if (typeof T == "string") return T === "use-credentials" ? T : "";
  }
  return (
    (Bl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h),
    (Bl.createPortal = function (j, T) {
      var H =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!T || (T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11))
        throw Error(D(299));
      return B(j, T, null, H);
    }),
    (Bl.flushSync = function (j) {
      var T = w.T,
        H = h.p;
      try {
        if (((w.T = null), (h.p = 2), j)) return j();
      } finally {
        ((w.T = T), (h.p = H), h.d.f());
      }
    }),
    (Bl.preconnect = function (j, T) {
      typeof j == "string" &&
        (T
          ? ((T = T.crossOrigin),
            (T =
              typeof T == "string"
                ? T === "use-credentials"
                  ? T
                  : ""
                : void 0))
          : (T = null),
        h.d.C(j, T));
    }),
    (Bl.prefetchDNS = function (j) {
      typeof j == "string" && h.d.D(j);
    }),
    (Bl.preinit = function (j, T) {
      if (typeof j == "string" && T && typeof T.as == "string") {
        var H = T.as,
          P = fl(H, T.crossOrigin),
          al = typeof T.integrity == "string" ? T.integrity : void 0,
          vl = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
        H === "style"
          ? h.d.S(j, typeof T.precedence == "string" ? T.precedence : void 0, {
              crossOrigin: P,
              integrity: al,
              fetchPriority: vl,
            })
          : H === "script" &&
            h.d.X(j, {
              crossOrigin: P,
              integrity: al,
              fetchPriority: vl,
              nonce: typeof T.nonce == "string" ? T.nonce : void 0,
            });
      }
    }),
    (Bl.preinitModule = function (j, T) {
      if (typeof j == "string")
        if (typeof T == "object" && T !== null) {
          if (T.as == null || T.as === "script") {
            var H = fl(T.as, T.crossOrigin);
            h.d.M(j, {
              crossOrigin: H,
              integrity: typeof T.integrity == "string" ? T.integrity : void 0,
              nonce: typeof T.nonce == "string" ? T.nonce : void 0,
            });
          }
        } else T == null && h.d.M(j);
    }),
    (Bl.preload = function (j, T) {
      if (
        typeof j == "string" &&
        typeof T == "object" &&
        T !== null &&
        typeof T.as == "string"
      ) {
        var H = T.as,
          P = fl(H, T.crossOrigin);
        h.d.L(j, H, {
          crossOrigin: P,
          integrity: typeof T.integrity == "string" ? T.integrity : void 0,
          nonce: typeof T.nonce == "string" ? T.nonce : void 0,
          type: typeof T.type == "string" ? T.type : void 0,
          fetchPriority:
            typeof T.fetchPriority == "string" ? T.fetchPriority : void 0,
          referrerPolicy:
            typeof T.referrerPolicy == "string" ? T.referrerPolicy : void 0,
          imageSrcSet:
            typeof T.imageSrcSet == "string" ? T.imageSrcSet : void 0,
          imageSizes: typeof T.imageSizes == "string" ? T.imageSizes : void 0,
          media: typeof T.media == "string" ? T.media : void 0,
        });
      }
    }),
    (Bl.preloadModule = function (j, T) {
      if (typeof j == "string")
        if (T) {
          var H = fl(T.as, T.crossOrigin);
          h.d.m(j, {
            as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0,
            crossOrigin: H,
            integrity: typeof T.integrity == "string" ? T.integrity : void 0,
          });
        } else h.d.m(j);
    }),
    (Bl.requestFormReset = function (j) {
      h.d.r(j);
    }),
    (Bl.unstable_batchedUpdates = function (j, T) {
      return j(T);
    }),
    (Bl.useFormState = function (j, T, H) {
      return w.H.useFormState(j, T, H);
    }),
    (Bl.useFormStatus = function () {
      return w.H.useHostTransitionStatus();
    }),
    (Bl.version = "19.1.0"),
    Bl
  );
}
var ur;
function Y1() {
  if (ur) return tf.exports;
  ur = 1;
  function E() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E);
      } catch (D) {
        console.error(D);
      }
  }
  return (E(), (tf.exports = q1()), tf.exports);
}
var nr;
function C1() {
  if (nr) return gu;
  nr = 1;
  var E = H1(),
    D = af(),
    R = Y1();
  function h(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function U(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function B(l) {
    var t = l,
      a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do ((t = l), (t.flags & 4098) !== 0 && (a = t.return), (l = t.return));
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function w(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function fl(l) {
    if (B(l) !== l) throw Error(h(188));
  }
  function j(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = B(l)), t === null)) throw Error(h(188));
      return t !== l ? null : l;
    }
    for (var a = l, e = t; ; ) {
      var u = a.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (((e = u.return), e !== null)) {
          a = e;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === a) return (fl(u), l);
          if (n === e) return (fl(u), t);
          n = n.sibling;
        }
        throw Error(h(188));
      }
      if (a.return !== e.return) ((a = u), (e = n));
      else {
        for (var i = !1, c = u.child; c; ) {
          if (c === a) {
            ((i = !0), (a = u), (e = n));
            break;
          }
          if (c === e) {
            ((i = !0), (e = u), (a = n));
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = n.child; c; ) {
            if (c === a) {
              ((i = !0), (a = n), (e = u));
              break;
            }
            if (c === e) {
              ((i = !0), (e = n), (a = u));
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(h(189));
        }
      }
      if (a.alternate !== e) throw Error(h(190));
    }
    if (a.tag !== 3) throw Error(h(188));
    return a.stateNode.current === a ? l : t;
  }
  function T(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = T(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var H = Object.assign,
    P = Symbol.for("react.element"),
    al = Symbol.for("react.transitional.element"),
    vl = Symbol.for("react.portal"),
    ql = Symbol.for("react.fragment"),
    dt = Symbol.for("react.strict_mode"),
    Cl = Symbol.for("react.profiler"),
    da = Symbol.for("react.provider"),
    At = Symbol.for("react.consumer"),
    Rl = Symbol.for("react.context"),
    ht = Symbol.for("react.forward_ref"),
    k = Symbol.for("react.suspense"),
    Ll = Symbol.for("react.suspense_list"),
    Kl = Symbol.for("react.memo"),
    Jl = Symbol.for("react.lazy"),
    gt = Symbol.for("react.activity"),
    Na = Symbol.for("react.memo_cache_sentinel"),
    zt = Symbol.iterator;
  function Ul(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (zt && l[zt]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var ha = Symbol.for("react.client.reference");
  function ya(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === ha ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case ql:
        return "Fragment";
      case Cl:
        return "Profiler";
      case dt:
        return "StrictMode";
      case k:
        return "Suspense";
      case Ll:
        return "SuspenseList";
      case gt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case vl:
          return "Portal";
        case Rl:
          return (l.displayName || "Context") + ".Provider";
        case At:
          return (l._context.displayName || "Context") + ".Consumer";
        case ht:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case Kl:
          return (
            (t = l.displayName || null),
            t !== null ? t : ya(l.type) || "Memo"
          );
        case Jl:
          ((t = l._payload), (l = l._init));
          try {
            return ya(l(t));
          } catch {}
      }
    return null;
  }
  var jl = Array.isArray,
    b = D.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    M = R.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    G = { pending: !1, data: null, method: null, action: null },
    il = [],
    s = -1;
  function A(l) {
    return { current: l };
  }
  function O(l) {
    0 > s || ((l.current = il[s]), (il[s] = null), s--);
  }
  function z(l, t) {
    (s++, (il[s] = l.current), (l.current = t));
  }
  var q = A(null),
    $ = A(null),
    Q = A(null),
    wl = A(null);
  function ol(l, t) {
    switch ((z(Q, t), z($, l), z(q, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? zo(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          ((t = zo(t)), (l = Mo(t, l)));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    (O(q), z(q, l));
  }
  function Qt() {
    (O(q), O($), O(Q));
  }
  function Bn(l) {
    l.memoizedState !== null && z(wl, l);
    var t = q.current,
      a = Mo(t, l.type);
    t !== a && (z($, l), z(q, a));
  }
  function Su(l) {
    ($.current === l && (O(q), O($)),
      wl.current === l && (O(wl), (ru._currentValue = G)));
  }
  var qn = Object.prototype.hasOwnProperty,
    Yn = E.unstable_scheduleCallback,
    Cn = E.unstable_cancelCallback,
    sr = E.unstable_shouldYield,
    or = E.unstable_requestPaint,
    St = E.unstable_now,
    rr = E.unstable_getCurrentPriorityLevel,
    ef = E.unstable_ImmediatePriority,
    uf = E.unstable_UserBlockingPriority,
    bu = E.unstable_NormalPriority,
    dr = E.unstable_LowPriority,
    nf = E.unstable_IdlePriority,
    hr = E.log,
    yr = E.unstable_setDisableYieldValue,
    be = null,
    Wl = null;
  function Zt(l) {
    if (
      (typeof hr == "function" && yr(l),
      Wl && typeof Wl.setStrictMode == "function")
    )
      try {
        Wl.setStrictMode(be, l);
      } catch {}
  }
  var kl = Math.clz32 ? Math.clz32 : gr,
    vr = Math.log,
    mr = Math.LN2;
  function gr(l) {
    return ((l >>>= 0), l === 0 ? 32 : (31 - ((vr(l) / mr) | 0)) | 0);
  }
  var pu = 256,
    xu = 4194304;
  function va(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
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
        return 64;
      case 128:
        return 128;
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
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Tu(l, t, a) {
    var e = l.pendingLanes;
    if (e === 0) return 0;
    var u = 0,
      n = l.suspendedLanes,
      i = l.pingedLanes;
    l = l.warmLanes;
    var c = e & 134217727;
    return (
      c !== 0
        ? ((e = c & ~n),
          e !== 0
            ? (u = va(e))
            : ((i &= c),
              i !== 0
                ? (u = va(i))
                : a || ((a = c & ~l), a !== 0 && (u = va(a)))))
        : ((c = e & ~n),
          c !== 0
            ? (u = va(c))
            : i !== 0
              ? (u = va(i))
              : a || ((a = e & ~l), a !== 0 && (u = va(a)))),
      u === 0
        ? 0
        : t !== 0 &&
            t !== u &&
            (t & n) === 0 &&
            ((n = u & -u),
            (a = t & -t),
            n >= a || (n === 32 && (a & 4194048) !== 0))
          ? t
          : u
    );
  }
  function pe(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Sr(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
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
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function cf() {
    var l = pu;
    return ((pu <<= 1), (pu & 4194048) === 0 && (pu = 256), l);
  }
  function ff() {
    var l = xu;
    return ((xu <<= 1), (xu & 62914560) === 0 && (xu = 4194304), l);
  }
  function Gn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function xe(l, t) {
    ((l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0)));
  }
  function br(l, t, a, e, u, n) {
    var i = l.pendingLanes;
    ((l.pendingLanes = a),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= a),
      (l.entangledLanes &= a),
      (l.errorRecoveryDisabledLanes &= a),
      (l.shellSuspendCounter = 0));
    var c = l.entanglements,
      f = l.expirationTimes,
      y = l.hiddenUpdates;
    for (a = i & ~a; 0 < a; ) {
      var S = 31 - kl(a),
        x = 1 << S;
      ((c[S] = 0), (f[S] = -1));
      var m = y[S];
      if (m !== null)
        for (y[S] = null, S = 0; S < m.length; S++) {
          var g = m[S];
          g !== null && (g.lane &= -536870913);
        }
      a &= ~x;
    }
    (e !== 0 && sf(l, e, 0),
      n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t)));
  }
  function sf(l, t, a) {
    ((l.pendingLanes |= t), (l.suspendedLanes &= ~t));
    var e = 31 - kl(t);
    ((l.entangledLanes |= t),
      (l.entanglements[e] = l.entanglements[e] | 1073741824 | (a & 4194090)));
  }
  function of(l, t) {
    var a = (l.entangledLanes |= t);
    for (l = l.entanglements; a; ) {
      var e = 31 - kl(a),
        u = 1 << e;
      ((u & t) | (l[e] & t) && (l[e] |= t), (a &= ~u));
    }
  }
  function Xn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Qn(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function rf() {
    var l = M.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : Ko(l.type));
  }
  function pr(l, t) {
    var a = M.p;
    try {
      return ((M.p = l), t());
    } finally {
      M.p = a;
    }
  }
  var Vt = Math.random().toString(36).slice(2),
    Nl = "__reactFiber$" + Vt,
    Gl = "__reactProps$" + Vt,
    Ha = "__reactContainer$" + Vt,
    Zn = "__reactEvents$" + Vt,
    xr = "__reactListeners$" + Vt,
    Tr = "__reactHandles$" + Vt,
    df = "__reactResources$" + Vt,
    Te = "__reactMarker$" + Vt;
  function Vn(l) {
    (delete l[Nl], delete l[Gl], delete l[Zn], delete l[xr], delete l[Tr]);
  }
  function Ba(l) {
    var t = l[Nl];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if ((t = a[Ha] || a[Nl])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (l = Ro(l); l !== null; ) {
            if ((a = l[Nl])) return a;
            l = Ro(l);
          }
        return t;
      }
      ((l = a), (a = l.parentNode));
    }
    return null;
  }
  function qa(l) {
    if ((l = l[Nl] || l[Ha])) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Ee(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(h(33));
  }
  function Ya(l) {
    var t = l[df];
    return (
      t ||
        (t = l[df] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Tl(l) {
    l[Te] = !0;
  }
  var hf = new Set(),
    yf = {};
  function ma(l, t) {
    (Ca(l, t), Ca(l + "Capture", t));
  }
  function Ca(l, t) {
    for (yf[l] = t, l = 0; l < t.length; l++) hf.add(t[l]);
  }
  var Er = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    vf = {},
    mf = {};
  function Ar(l) {
    return qn.call(mf, l)
      ? !0
      : qn.call(vf, l)
        ? !1
        : Er.test(l)
          ? (mf[l] = !0)
          : ((vf[l] = !0), !1);
  }
  function Eu(l, t, a) {
    if (Ar(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var e = t.toLowerCase().slice(0, 5);
            if (e !== "data-" && e !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function Au(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function Mt(l, t, a, e) {
    if (e === null) l.removeAttribute(a);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + e);
    }
  }
  var Ln, gf;
  function Ga(l) {
    if (Ln === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ((Ln = (t && t[1]) || ""),
          (gf =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Ln +
      l +
      gf
    );
  }
  var Kn = !1;
  function Jn(l, t) {
    if (!l || Kn) return "";
    Kn = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var e = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var x = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(x.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(x, []);
                } catch (g) {
                  var m = g;
                }
                Reflect.construct(l, [], x);
              } else {
                try {
                  x.call();
                } catch (g) {
                  m = g;
                }
                l.call(x.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (g) {
                m = g;
              }
              (x = l()) &&
                typeof x.catch == "function" &&
                x.catch(function () {});
            }
          } catch (g) {
            if (g && m && typeof g.stack == "string") return [g.stack, m.stack];
          }
          return [null, null];
        },
      };
      e.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        e.DetermineComponentFrameRoot,
        "name",
      );
      u &&
        u.configurable &&
        Object.defineProperty(e.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = e.DetermineComponentFrameRoot(),
        i = n[0],
        c = n[1];
      if (i && c) {
        var f = i.split(`
`),
          y = c.split(`
`);
        for (
          u = e = 0;
          e < f.length && !f[e].includes("DetermineComponentFrameRoot");
        )
          e++;
        for (; u < y.length && !y[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (e === f.length || u === y.length)
          for (
            e = f.length - 1, u = y.length - 1;
            1 <= e && 0 <= u && f[e] !== y[u];
          )
            u--;
        for (; 1 <= e && 0 <= u; e--, u--)
          if (f[e] !== y[u]) {
            if (e !== 1 || u !== 1)
              do
                if ((e--, u--, 0 > u || f[e] !== y[u])) {
                  var S =
                    `
` + f[e].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      S.includes("<anonymous>") &&
                      (S = S.replace("<anonymous>", l.displayName)),
                    S
                  );
                }
              while (1 <= e && 0 <= u);
            break;
          }
      }
    } finally {
      ((Kn = !1), (Error.prepareStackTrace = a));
    }
    return (a = l ? l.displayName || l.name : "") ? Ga(a) : "";
  }
  function zr(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Ga(l.type);
      case 16:
        return Ga("Lazy");
      case 13:
        return Ga("Suspense");
      case 19:
        return Ga("SuspenseList");
      case 0:
      case 15:
        return Jn(l.type, !1);
      case 11:
        return Jn(l.type.render, !1);
      case 1:
        return Jn(l.type, !0);
      case 31:
        return Ga("Activity");
      default:
        return "";
    }
  }
  function Sf(l) {
    try {
      var t = "";
      do ((t += zr(l)), (l = l.return));
      while (l);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function et(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function bf(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Mr(l) {
    var t = bf(l) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t),
      e = "" + l[t];
    if (
      !l.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var u = a.get,
        n = a.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (i) {
            ((e = "" + i), n.call(this, i));
          },
        }),
        Object.defineProperty(l, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return e;
          },
          setValue: function (i) {
            e = "" + i;
          },
          stopTracking: function () {
            ((l._valueTracker = null), delete l[t]);
          },
        }
      );
    }
  }
  function zu(l) {
    l._valueTracker || (l._valueTracker = Mr(l));
  }
  function pf(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      e = "";
    return (
      l && (e = bf(l) ? (l.checked ? "true" : "false") : l.value),
      (l = e),
      l !== a ? (t.setValue(l), !0) : !1
    );
  }
  function Mu(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Or = /[\n"\\]/g;
  function ut(l) {
    return l.replace(Or, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function wn(l, t, a, e, u, n, i, c) {
    ((l.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (l.type = i)
        : l.removeAttribute("type"),
      t != null
        ? i === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + et(t))
          : l.value !== "" + et(t) && (l.value = "" + et(t))
        : (i !== "submit" && i !== "reset") || l.removeAttribute("value"),
      t != null
        ? Wn(l, i, et(t))
        : a != null
          ? Wn(l, i, et(a))
          : e != null && l.removeAttribute("value"),
      u == null && n != null && (l.defaultChecked = !!n),
      u != null &&
        (l.checked = u && typeof u != "function" && typeof u != "symbol"),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (l.name = "" + et(c))
        : l.removeAttribute("name"));
  }
  function xf(l, t, a, e, u, n, i, c) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || a != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) return;
      ((a = a != null ? "" + et(a) : ""),
        (t = t != null ? "" + et(t) : a),
        c || t === l.value || (l.value = t),
        (l.defaultValue = t));
    }
    ((e = e ?? u),
      (e = typeof e != "function" && typeof e != "symbol" && !!e),
      (l.checked = c ? l.checked : !!e),
      (l.defaultChecked = !!e),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (l.name = i));
  }
  function Wn(l, t, a) {
    (t === "number" && Mu(l.ownerDocument) === l) ||
      l.defaultValue === "" + a ||
      (l.defaultValue = "" + a);
  }
  function Xa(l, t, a, e) {
    if (((l = l.options), t)) {
      t = {};
      for (var u = 0; u < a.length; u++) t["$" + a[u]] = !0;
      for (a = 0; a < l.length; a++)
        ((u = t.hasOwnProperty("$" + l[a].value)),
          l[a].selected !== u && (l[a].selected = u),
          u && e && (l[a].defaultSelected = !0));
    } else {
      for (a = "" + et(a), t = null, u = 0; u < l.length; u++) {
        if (l[u].value === a) {
          ((l[u].selected = !0), e && (l[u].defaultSelected = !0));
          return;
        }
        t !== null || l[u].disabled || (t = l[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Tf(l, t, a) {
    if (
      t != null &&
      ((t = "" + et(t)), t !== l.value && (l.value = t), a == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + et(a) : "";
  }
  function Ef(l, t, a, e) {
    if (t == null) {
      if (e != null) {
        if (a != null) throw Error(h(92));
        if (jl(e)) {
          if (1 < e.length) throw Error(h(93));
          e = e[0];
        }
        a = e;
      }
      (a == null && (a = ""), (t = a));
    }
    ((a = et(t)),
      (l.defaultValue = a),
      (e = l.textContent),
      e === a && e !== "" && e !== null && (l.value = e));
  }
  function Qa(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var _r = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Af(l, t, a) {
    var e = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? e
        ? l.setProperty(t, "")
        : t === "float"
          ? (l.cssFloat = "")
          : (l[t] = "")
      : e
        ? l.setProperty(t, a)
        : typeof a != "number" || a === 0 || _r.has(t)
          ? t === "float"
            ? (l.cssFloat = a)
            : (l[t] = ("" + a).trim())
          : (l[t] = a + "px");
  }
  function zf(l, t, a) {
    if (t != null && typeof t != "object") throw Error(h(62));
    if (((l = l.style), a != null)) {
      for (var e in a)
        !a.hasOwnProperty(e) ||
          (t != null && t.hasOwnProperty(e)) ||
          (e.indexOf("--") === 0
            ? l.setProperty(e, "")
            : e === "float"
              ? (l.cssFloat = "")
              : (l[e] = ""));
      for (var u in t)
        ((e = t[u]), t.hasOwnProperty(u) && a[u] !== e && Af(l, u, e));
    } else for (var n in t) t.hasOwnProperty(n) && Af(l, n, t[n]);
  }
  function kn(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
        return !0;
    }
  }
  var Dr = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Rr =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ou(l) {
    return Rr.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  var $n = null;
  function Fn(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var Za = null,
    Va = null;
  function Mf(l) {
    var t = qa(l);
    if (t && (l = t.stateNode)) {
      var a = l[Gl] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (wn(
              l,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + ut("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var e = a[t];
              if (e !== l && e.form === l.form) {
                var u = e[Gl] || null;
                if (!u) throw Error(h(90));
                wn(
                  e,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name,
                );
              }
            }
            for (t = 0; t < a.length; t++)
              ((e = a[t]), e.form === l.form && pf(e));
          }
          break l;
        case "textarea":
          Tf(l, a.value, a.defaultValue);
          break l;
        case "select":
          ((t = a.value), t != null && Xa(l, !!a.multiple, t, !1));
      }
    }
  }
  var In = !1;
  function Of(l, t, a) {
    if (In) return l(t, a);
    In = !0;
    try {
      var e = l(t);
      return e;
    } finally {
      if (
        ((In = !1),
        (Za !== null || Va !== null) &&
          (hn(), Za && ((t = Za), (l = Va), (Va = Za = null), Mf(t), l)))
      )
        for (t = 0; t < l.length; t++) Mf(l[t]);
    }
  }
  function Ae(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var e = a[Gl] || null;
    if (e === null) return null;
    a = e[t];
    l: switch (t) {
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
        ((e = !e.disabled) ||
          ((l = l.type),
          (e = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !e));
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function") throw Error(h(231, t, typeof a));
    return a;
  }
  var Ot = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Pn = !1;
  if (Ot)
    try {
      var ze = {};
      (Object.defineProperty(ze, "passive", {
        get: function () {
          Pn = !0;
        },
      }),
        window.addEventListener("test", ze, ze),
        window.removeEventListener("test", ze, ze));
    } catch {
      Pn = !1;
    }
  var Lt = null,
    li = null,
    _u = null;
  function _f() {
    if (_u) return _u;
    var l,
      t = li,
      a = t.length,
      e,
      u = "value" in Lt ? Lt.value : Lt.textContent,
      n = u.length;
    for (l = 0; l < a && t[l] === u[l]; l++);
    var i = a - l;
    for (e = 1; e <= i && t[a - e] === u[n - e]; e++);
    return (_u = u.slice(l, 1 < e ? 1 - e : void 0));
  }
  function Du(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function Ru() {
    return !0;
  }
  function Df() {
    return !1;
  }
  function Xl(l) {
    function t(a, e, u, n, i) {
      ((this._reactName = a),
        (this._targetInst = u),
        (this.type = e),
        (this.nativeEvent = n),
        (this.target = i),
        (this.currentTarget = null));
      for (var c in l)
        l.hasOwnProperty(c) && ((a = l[c]), (this[c] = a ? a(n) : n[c]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Ru
          : Df),
        (this.isPropagationStopped = Df),
        this
      );
    }
    return (
      H(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Ru));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Ru));
        },
        persist: function () {},
        isPersistent: Ru,
      }),
      t
    );
  }
  var ga = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Uu = Xl(ga),
    Me = H({}, ga, { view: 0, detail: 0 }),
    Ur = Xl(Me),
    ti,
    ai,
    Oe,
    ju = H({}, Me, {
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
      getModifierState: ui,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== Oe &&
              (Oe && l.type === "mousemove"
                ? ((ti = l.screenX - Oe.screenX), (ai = l.screenY - Oe.screenY))
                : (ai = ti = 0),
              (Oe = l)),
            ti);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : ai;
      },
    }),
    Rf = Xl(ju),
    jr = H({}, ju, { dataTransfer: 0 }),
    Nr = Xl(jr),
    Hr = H({}, Me, { relatedTarget: 0 }),
    ei = Xl(Hr),
    Br = H({}, ga, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    qr = Xl(Br),
    Yr = H({}, ga, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    Cr = Xl(Yr),
    Gr = H({}, ga, { data: 0 }),
    Uf = Xl(Gr),
    Xr = {
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
      MozPrintableKey: "Unidentified",
    },
    Qr = {
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
      224: "Meta",
    },
    Zr = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Vr(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = Zr[l])
        ? !!t[l]
        : !1;
  }
  function ui() {
    return Vr;
  }
  var Lr = H({}, Me, {
      key: function (l) {
        if (l.key) {
          var t = Xr[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = Du(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
            ? Qr[l.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ui,
      charCode: function (l) {
        return l.type === "keypress" ? Du(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? Du(l)
          : l.type === "keydown" || l.type === "keyup"
            ? l.keyCode
            : 0;
      },
    }),
    Kr = Xl(Lr),
    Jr = H({}, ju, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    jf = Xl(Jr),
    wr = H({}, Me, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ui,
    }),
    Wr = Xl(wr),
    kr = H({}, ga, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    $r = Xl(kr),
    Fr = H({}, ju, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
            ? -l.wheelDeltaX
            : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
            ? -l.wheelDeltaY
            : "wheelDelta" in l
              ? -l.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Ir = Xl(Fr),
    Pr = H({}, ga, { newState: 0, oldState: 0 }),
    ld = Xl(Pr),
    td = [9, 13, 27, 32],
    ni = Ot && "CompositionEvent" in window,
    _e = null;
  Ot && "documentMode" in document && (_e = document.documentMode);
  var ad = Ot && "TextEvent" in window && !_e,
    Nf = Ot && (!ni || (_e && 8 < _e && 11 >= _e)),
    Hf = " ",
    Bf = !1;
  function qf(l, t) {
    switch (l) {
      case "keyup":
        return td.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Yf(l) {
    return (
      (l = l.detail),
      typeof l == "object" && "data" in l ? l.data : null
    );
  }
  var La = !1;
  function ed(l, t) {
    switch (l) {
      case "compositionend":
        return Yf(t);
      case "keypress":
        return t.which !== 32 ? null : ((Bf = !0), Hf);
      case "textInput":
        return ((l = t.data), l === Hf && Bf ? null : l);
      default:
        return null;
    }
  }
  function ud(l, t) {
    if (La)
      return l === "compositionend" || (!ni && qf(l, t))
        ? ((l = _f()), (_u = li = Lt = null), (La = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Nf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var nd = {
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
    week: !0,
  };
  function Cf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!nd[l.type] : t === "textarea";
  }
  function Gf(l, t, a, e) {
    (Za ? (Va ? Va.push(e) : (Va = [e])) : (Za = e),
      (t = bn(t, "onChange")),
      0 < t.length &&
        ((a = new Uu("onChange", "change", null, a, e)),
        l.push({ event: a, listeners: t })));
  }
  var De = null,
    Re = null;
  function id(l) {
    po(l, 0);
  }
  function Nu(l) {
    var t = Ee(l);
    if (pf(t)) return l;
  }
  function Xf(l, t) {
    if (l === "change") return t;
  }
  var Qf = !1;
  if (Ot) {
    var ii;
    if (Ot) {
      var ci = "oninput" in document;
      if (!ci) {
        var Zf = document.createElement("div");
        (Zf.setAttribute("oninput", "return;"),
          (ci = typeof Zf.oninput == "function"));
      }
      ii = ci;
    } else ii = !1;
    Qf = ii && (!document.documentMode || 9 < document.documentMode);
  }
  function Vf() {
    De && (De.detachEvent("onpropertychange", Lf), (Re = De = null));
  }
  function Lf(l) {
    if (l.propertyName === "value" && Nu(Re)) {
      var t = [];
      (Gf(t, Re, l, Fn(l)), Of(id, t));
    }
  }
  function cd(l, t, a) {
    l === "focusin"
      ? (Vf(), (De = t), (Re = a), De.attachEvent("onpropertychange", Lf))
      : l === "focusout" && Vf();
  }
  function fd(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Nu(Re);
  }
  function sd(l, t) {
    if (l === "click") return Nu(t);
  }
  function od(l, t) {
    if (l === "input" || l === "change") return Nu(t);
  }
  function rd(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var $l = typeof Object.is == "function" ? Object.is : rd;
  function Ue(l, t) {
    if ($l(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(l),
      e = Object.keys(t);
    if (a.length !== e.length) return !1;
    for (e = 0; e < a.length; e++) {
      var u = a[e];
      if (!qn.call(t, u) || !$l(l[u], t[u])) return !1;
    }
    return !0;
  }
  function Kf(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Jf(l, t) {
    var a = Kf(l);
    l = 0;
    for (var e; a; ) {
      if (a.nodeType === 3) {
        if (((e = l + a.textContent.length), l <= t && e >= t))
          return { node: a, offset: t - l };
        l = e;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Kf(a);
    }
  }
  function wf(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? wf(l, t.parentNode)
            : "contains" in l
              ? l.contains(t)
              : l.compareDocumentPosition
                ? !!(l.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Wf(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = Mu(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = Mu(l.document);
    }
    return t;
  }
  function fi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var dd = Ot && "documentMode" in document && 11 >= document.documentMode,
    Ka = null,
    si = null,
    je = null,
    oi = !1;
  function kf(l, t, a) {
    var e =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    oi ||
      Ka == null ||
      Ka !== Mu(e) ||
      ((e = Ka),
      "selectionStart" in e && fi(e)
        ? (e = { start: e.selectionStart, end: e.selectionEnd })
        : ((e = (
            (e.ownerDocument && e.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (e = {
            anchorNode: e.anchorNode,
            anchorOffset: e.anchorOffset,
            focusNode: e.focusNode,
            focusOffset: e.focusOffset,
          })),
      (je && Ue(je, e)) ||
        ((je = e),
        (e = bn(si, "onSelect")),
        0 < e.length &&
          ((t = new Uu("onSelect", "select", null, t, a)),
          l.push({ event: t, listeners: e }),
          (t.target = Ka))));
  }
  function Sa(l, t) {
    var a = {};
    return (
      (a[l.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + l] = "webkit" + t),
      (a["Moz" + l] = "moz" + t),
      a
    );
  }
  var Ja = {
      animationend: Sa("Animation", "AnimationEnd"),
      animationiteration: Sa("Animation", "AnimationIteration"),
      animationstart: Sa("Animation", "AnimationStart"),
      transitionrun: Sa("Transition", "TransitionRun"),
      transitionstart: Sa("Transition", "TransitionStart"),
      transitioncancel: Sa("Transition", "TransitionCancel"),
      transitionend: Sa("Transition", "TransitionEnd"),
    },
    ri = {},
    $f = {};
  Ot &&
    (($f = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ja.animationend.animation,
      delete Ja.animationiteration.animation,
      delete Ja.animationstart.animation),
    "TransitionEvent" in window || delete Ja.transitionend.transition);
  function ba(l) {
    if (ri[l]) return ri[l];
    if (!Ja[l]) return l;
    var t = Ja[l],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in $f) return (ri[l] = t[a]);
    return l;
  }
  var Ff = ba("animationend"),
    If = ba("animationiteration"),
    Pf = ba("animationstart"),
    hd = ba("transitionrun"),
    yd = ba("transitionstart"),
    vd = ba("transitioncancel"),
    ls = ba("transitionend"),
    ts = new Map(),
    di =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  di.push("scrollEnd");
  function yt(l, t) {
    (ts.set(l, t), ma(t, [l]));
  }
  var as = new WeakMap();
  function nt(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = as.get(l);
      return a !== void 0
        ? a
        : ((t = { value: l, source: t, stack: Sf(t) }), as.set(l, t), t);
    }
    return { value: l, source: t, stack: Sf(t) };
  }
  var it = [],
    wa = 0,
    hi = 0;
  function Hu() {
    for (var l = wa, t = (hi = wa = 0); t < l; ) {
      var a = it[t];
      it[t++] = null;
      var e = it[t];
      it[t++] = null;
      var u = it[t];
      it[t++] = null;
      var n = it[t];
      if (((it[t++] = null), e !== null && u !== null)) {
        var i = e.pending;
        (i === null ? (u.next = u) : ((u.next = i.next), (i.next = u)),
          (e.pending = u));
      }
      n !== 0 && es(a, u, n);
    }
  }
  function Bu(l, t, a, e) {
    ((it[wa++] = l),
      (it[wa++] = t),
      (it[wa++] = a),
      (it[wa++] = e),
      (hi |= e),
      (l.lanes |= e),
      (l = l.alternate),
      l !== null && (l.lanes |= e));
  }
  function yi(l, t, a, e) {
    return (Bu(l, t, a, e), qu(l));
  }
  function Wa(l, t) {
    return (Bu(l, null, null, t), qu(l));
  }
  function es(l, t, a) {
    l.lanes |= a;
    var e = l.alternate;
    e !== null && (e.lanes |= a);
    for (var u = !1, n = l.return; n !== null; )
      ((n.childLanes |= a),
        (e = n.alternate),
        e !== null && (e.childLanes |= a),
        n.tag === 22 &&
          ((l = n.stateNode), l === null || l._visibility & 1 || (u = !0)),
        (l = n),
        (n = n.return));
    return l.tag === 3
      ? ((n = l.stateNode),
        u &&
          t !== null &&
          ((u = 31 - kl(a)),
          (l = n.hiddenUpdates),
          (e = l[u]),
          e === null ? (l[u] = [t]) : e.push(t),
          (t.lane = a | 536870912)),
        n)
      : null;
  }
  function qu(l) {
    if (50 < eu) throw ((eu = 0), (pc = null), Error(h(185)));
    for (var t = l.return; t !== null; ) ((l = t), (t = l.return));
    return l.tag === 3 ? l.stateNode : null;
  }
  var ka = {};
  function md(l, t, a, e) {
    ((this.tag = l),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = e),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Fl(l, t, a, e) {
    return new md(l, t, a, e);
  }
  function vi(l) {
    return ((l = l.prototype), !(!l || !l.isReactComponent));
  }
  function _t(l, t) {
    var a = l.alternate;
    return (
      a === null
        ? ((a = Fl(l.tag, t, l.key, l.mode)),
          (a.elementType = l.elementType),
          (a.type = l.type),
          (a.stateNode = l.stateNode),
          (a.alternate = l),
          (l.alternate = a))
        : ((a.pendingProps = t),
          (a.type = l.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = l.flags & 65011712),
      (a.childLanes = l.childLanes),
      (a.lanes = l.lanes),
      (a.child = l.child),
      (a.memoizedProps = l.memoizedProps),
      (a.memoizedState = l.memoizedState),
      (a.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = l.sibling),
      (a.index = l.index),
      (a.ref = l.ref),
      (a.refCleanup = l.refCleanup),
      a
    );
  }
  function us(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return (
      a === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = a.childLanes),
          (l.lanes = a.lanes),
          (l.child = a.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = a.memoizedProps),
          (l.memoizedState = a.memoizedState),
          (l.updateQueue = a.updateQueue),
          (l.type = a.type),
          (t = a.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function Yu(l, t, a, e, u, n) {
    var i = 0;
    if (((e = l), typeof l == "function")) vi(l) && (i = 1);
    else if (typeof l == "string")
      i = S1(l, a, q.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
          ? 27
          : 5;
    else
      l: switch (l) {
        case gt:
          return (
            (l = Fl(31, a, t, u)),
            (l.elementType = gt),
            (l.lanes = n),
            l
          );
        case ql:
          return pa(a.children, u, n, t);
        case dt:
          ((i = 8), (u |= 24));
          break;
        case Cl:
          return (
            (l = Fl(12, a, t, u | 2)),
            (l.elementType = Cl),
            (l.lanes = n),
            l
          );
        case k:
          return ((l = Fl(13, a, t, u)), (l.elementType = k), (l.lanes = n), l);
        case Ll:
          return (
            (l = Fl(19, a, t, u)),
            (l.elementType = Ll),
            (l.lanes = n),
            l
          );
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case da:
              case Rl:
                i = 10;
                break l;
              case At:
                i = 9;
                break l;
              case ht:
                i = 11;
                break l;
              case Kl:
                i = 14;
                break l;
              case Jl:
                ((i = 16), (e = null));
                break l;
            }
          ((i = 29),
            (a = Error(h(130, l === null ? "null" : typeof l, ""))),
            (e = null));
      }
    return (
      (t = Fl(i, a, t, u)),
      (t.elementType = l),
      (t.type = e),
      (t.lanes = n),
      t
    );
  }
  function pa(l, t, a, e) {
    return ((l = Fl(7, l, e, t)), (l.lanes = a), l);
  }
  function mi(l, t, a) {
    return ((l = Fl(6, l, null, t)), (l.lanes = a), l);
  }
  function gi(l, t, a) {
    return (
      (t = Fl(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var $a = [],
    Fa = 0,
    Cu = null,
    Gu = 0,
    ct = [],
    ft = 0,
    xa = null,
    Dt = 1,
    Rt = "";
  function Ta(l, t) {
    (($a[Fa++] = Gu), ($a[Fa++] = Cu), (Cu = l), (Gu = t));
  }
  function ns(l, t, a) {
    ((ct[ft++] = Dt), (ct[ft++] = Rt), (ct[ft++] = xa), (xa = l));
    var e = Dt;
    l = Rt;
    var u = 32 - kl(e) - 1;
    ((e &= ~(1 << u)), (a += 1));
    var n = 32 - kl(t) + u;
    if (30 < n) {
      var i = u - (u % 5);
      ((n = (e & ((1 << i) - 1)).toString(32)),
        (e >>= i),
        (u -= i),
        (Dt = (1 << (32 - kl(t) + u)) | (a << u) | e),
        (Rt = n + l));
    } else ((Dt = (1 << n) | (a << u) | e), (Rt = l));
  }
  function Si(l) {
    l.return !== null && (Ta(l, 1), ns(l, 1, 0));
  }
  function bi(l) {
    for (; l === Cu; )
      ((Cu = $a[--Fa]), ($a[Fa] = null), (Gu = $a[--Fa]), ($a[Fa] = null));
    for (; l === xa; )
      ((xa = ct[--ft]),
        (ct[ft] = null),
        (Rt = ct[--ft]),
        (ct[ft] = null),
        (Dt = ct[--ft]),
        (ct[ft] = null));
  }
  var Yl = null,
    hl = null,
    I = !1,
    Ea = null,
    bt = !1,
    pi = Error(h(519));
  function Aa(l) {
    var t = Error(h(418, ""));
    throw (Be(nt(t, l)), pi);
  }
  function is(l) {
    var t = l.stateNode,
      a = l.type,
      e = l.memoizedProps;
    switch (((t[Nl] = l), (t[Gl] = e), a)) {
      case "dialog":
        (J("cancel", t), J("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        J("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < nu.length; a++) J(nu[a], t);
        break;
      case "source":
        J("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (J("error", t), J("load", t));
        break;
      case "details":
        J("toggle", t);
        break;
      case "input":
        (J("invalid", t),
          xf(
            t,
            e.value,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name,
            !0,
          ),
          zu(t));
        break;
      case "select":
        J("invalid", t);
        break;
      case "textarea":
        (J("invalid", t), Ef(t, e.value, e.defaultValue, e.children), zu(t));
    }
    ((a = e.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      e.suppressHydrationWarning === !0 ||
      Ao(t.textContent, a)
        ? (e.popover != null && (J("beforetoggle", t), J("toggle", t)),
          e.onScroll != null && J("scroll", t),
          e.onScrollEnd != null && J("scrollend", t),
          e.onClick != null && (t.onclick = pn),
          (t = !0))
        : (t = !1),
      t || Aa(l));
  }
  function cs(l) {
    for (Yl = l.return; Yl; )
      switch (Yl.tag) {
        case 5:
        case 13:
          bt = !1;
          return;
        case 27:
        case 3:
          bt = !0;
          return;
        default:
          Yl = Yl.return;
      }
  }
  function Ne(l) {
    if (l !== Yl) return !1;
    if (!I) return (cs(l), (I = !0), !1);
    var t = l.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = l.type),
          (a =
            !(a !== "form" && a !== "button") || qc(l.type, l.memoizedProps))),
        (a = !a)),
      a && hl && Aa(l),
      cs(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(h(317));
      l: {
        for (l = l.nextSibling, t = 0; l; ) {
          if (l.nodeType === 8)
            if (((a = l.data), a === "/$")) {
              if (t === 0) {
                hl = mt(l.nextSibling);
                break l;
              }
              t--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || t++;
          l = l.nextSibling;
        }
        hl = null;
      }
    } else
      t === 27
        ? ((t = hl), ia(l.type) ? ((l = Xc), (Xc = null), (hl = l)) : (hl = t))
        : (hl = Yl ? mt(l.stateNode.nextSibling) : null);
    return !0;
  }
  function He() {
    ((hl = Yl = null), (I = !1));
  }
  function fs() {
    var l = Ea;
    return (
      l !== null &&
        (Vl === null ? (Vl = l) : Vl.push.apply(Vl, l), (Ea = null)),
      l
    );
  }
  function Be(l) {
    Ea === null ? (Ea = [l]) : Ea.push(l);
  }
  var xi = A(null),
    za = null,
    Ut = null;
  function Kt(l, t, a) {
    (z(xi, t._currentValue), (t._currentValue = a));
  }
  function jt(l) {
    ((l._currentValue = xi.current), O(xi));
  }
  function Ti(l, t, a) {
    for (; l !== null; ) {
      var e = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), e !== null && (e.childLanes |= t))
          : e !== null && (e.childLanes & t) !== t && (e.childLanes |= t),
        l === a)
      )
        break;
      l = l.return;
    }
  }
  function Ei(l, t, a, e) {
    var u = l.child;
    for (u !== null && (u.return = l); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var i = u.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = u;
          for (var f = 0; f < t.length; f++)
            if (c.context === t[f]) {
              ((n.lanes |= a),
                (c = n.alternate),
                c !== null && (c.lanes |= a),
                Ti(n.return, a, l),
                e || (i = null));
              break l;
            }
          n = c.next;
        }
      } else if (u.tag === 18) {
        if (((i = u.return), i === null)) throw Error(h(341));
        ((i.lanes |= a),
          (n = i.alternate),
          n !== null && (n.lanes |= a),
          Ti(i, a, l),
          (i = null));
      } else i = u.child;
      if (i !== null) i.return = u;
      else
        for (i = u; i !== null; ) {
          if (i === l) {
            i = null;
            break;
          }
          if (((u = i.sibling), u !== null)) {
            ((u.return = i.return), (i = u));
            break;
          }
          i = i.return;
        }
      u = i;
    }
  }
  function qe(l, t, a, e) {
    l = null;
    for (var u = t, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var i = u.alternate;
        if (i === null) throw Error(h(387));
        if (((i = i.memoizedProps), i !== null)) {
          var c = u.type;
          $l(u.pendingProps.value, i.value) ||
            (l !== null ? l.push(c) : (l = [c]));
        }
      } else if (u === wl.current) {
        if (((i = u.alternate), i === null)) throw Error(h(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (l !== null ? l.push(ru) : (l = [ru]));
      }
      u = u.return;
    }
    (l !== null && Ei(t, l, a, e), (t.flags |= 262144));
  }
  function Xu(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!$l(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Ma(l) {
    ((za = l),
      (Ut = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null));
  }
  function Hl(l) {
    return ss(za, l);
  }
  function Qu(l, t) {
    return (za === null && Ma(l), ss(l, t));
  }
  function ss(l, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), Ut === null)) {
      if (l === null) throw Error(h(308));
      ((Ut = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288));
    } else Ut = Ut.next = t;
    return a;
  }
  var gd =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, e) {
                  l.push(e);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                l.forEach(function (a) {
                  return a();
                }));
            };
          },
    Sd = E.unstable_scheduleCallback,
    bd = E.unstable_NormalPriority,
    pl = {
      $$typeof: Rl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Ai() {
    return { controller: new gd(), data: new Map(), refCount: 0 };
  }
  function Ye(l) {
    (l.refCount--,
      l.refCount === 0 &&
        Sd(bd, function () {
          l.controller.abort();
        }));
  }
  var Ce = null,
    zi = 0,
    Ia = 0,
    Pa = null;
  function pd(l, t) {
    if (Ce === null) {
      var a = (Ce = []);
      ((zi = 0),
        (Ia = Oc()),
        (Pa = {
          status: "pending",
          value: void 0,
          then: function (e) {
            a.push(e);
          },
        }));
    }
    return (zi++, t.then(os, os), t);
  }
  function os() {
    if (--zi === 0 && Ce !== null) {
      Pa !== null && (Pa.status = "fulfilled");
      var l = Ce;
      ((Ce = null), (Ia = 0), (Pa = null));
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function xd(l, t) {
    var a = [],
      e = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          a.push(u);
        },
      };
    return (
      l.then(
        function () {
          ((e.status = "fulfilled"), (e.value = t));
          for (var u = 0; u < a.length; u++) (0, a[u])(t);
        },
        function (u) {
          for (e.status = "rejected", e.reason = u, u = 0; u < a.length; u++)
            (0, a[u])(void 0);
        },
      ),
      e
    );
  }
  var rs = b.S;
  b.S = function (l, t) {
    (typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      pd(l, t),
      rs !== null && rs(l, t));
  };
  var Oa = A(null);
  function Mi() {
    var l = Oa.current;
    return l !== null ? l : sl.pooledCache;
  }
  function Zu(l, t) {
    t === null ? z(Oa, Oa.current) : z(Oa, t.pool);
  }
  function ds() {
    var l = Mi();
    return l === null ? null : { parent: pl._currentValue, pool: l };
  }
  var Ge = Error(h(460)),
    hs = Error(h(474)),
    Vu = Error(h(542)),
    Oi = { then: function () {} };
  function ys(l) {
    return ((l = l.status), l === "fulfilled" || l === "rejected");
  }
  function Lu() {}
  function vs(l, t, a) {
    switch (
      ((a = l[a]),
      a === void 0 ? l.push(t) : a !== t && (t.then(Lu, Lu), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), gs(l), l);
      default:
        if (typeof t.status == "string") t.then(Lu, Lu);
        else {
          if (((l = sl), l !== null && 100 < l.shellSuspendCounter))
            throw Error(h(482));
          ((l = t),
            (l.status = "pending"),
            l.then(
              function (e) {
                if (t.status === "pending") {
                  var u = t;
                  ((u.status = "fulfilled"), (u.value = e));
                }
              },
              function (e) {
                if (t.status === "pending") {
                  var u = t;
                  ((u.status = "rejected"), (u.reason = e));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), gs(l), l);
        }
        throw ((Xe = t), Ge);
    }
  }
  var Xe = null;
  function ms() {
    if (Xe === null) throw Error(h(459));
    var l = Xe;
    return ((Xe = null), l);
  }
  function gs(l) {
    if (l === Ge || l === Vu) throw Error(h(483));
  }
  var Jt = !1;
  function _i(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Di(l, t) {
    ((l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        }));
  }
  function wt(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Wt(l, t, a) {
    var e = l.updateQueue;
    if (e === null) return null;
    if (((e = e.shared), (ll & 2) !== 0)) {
      var u = e.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (e.pending = t),
        (t = qu(l)),
        es(l, null, a),
        t
      );
    }
    return (Bu(l, e, t, a), qu(l));
  }
  function Qe(l, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var e = t.lanes;
      ((e &= l.pendingLanes), (a |= e), (t.lanes = a), of(l, a));
    }
  }
  function Ri(l, t) {
    var a = l.updateQueue,
      e = l.alternate;
    if (e !== null && ((e = e.updateQueue), a === e)) {
      var u = null,
        n = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var i = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          (n === null ? (u = n = i) : (n = n.next = i), (a = a.next));
        } while (a !== null);
        n === null ? (u = n = t) : (n = n.next = t);
      } else u = n = t;
      ((a = {
        baseState: e.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: e.shared,
        callbacks: e.callbacks,
      }),
        (l.updateQueue = a));
      return;
    }
    ((l = a.lastBaseUpdate),
      l === null ? (a.firstBaseUpdate = t) : (l.next = t),
      (a.lastBaseUpdate = t));
  }
  var Ui = !1;
  function Ze() {
    if (Ui) {
      var l = Pa;
      if (l !== null) throw l;
    }
  }
  function Ve(l, t, a, e) {
    Ui = !1;
    var u = l.updateQueue;
    Jt = !1;
    var n = u.firstBaseUpdate,
      i = u.lastBaseUpdate,
      c = u.shared.pending;
    if (c !== null) {
      u.shared.pending = null;
      var f = c,
        y = f.next;
      ((f.next = null), i === null ? (n = y) : (i.next = y), (i = f));
      var S = l.alternate;
      S !== null &&
        ((S = S.updateQueue),
        (c = S.lastBaseUpdate),
        c !== i &&
          (c === null ? (S.firstBaseUpdate = y) : (c.next = y),
          (S.lastBaseUpdate = f)));
    }
    if (n !== null) {
      var x = u.baseState;
      ((i = 0), (S = y = f = null), (c = n));
      do {
        var m = c.lane & -536870913,
          g = m !== c.lane;
        if (g ? (W & m) === m : (e & m) === m) {
          (m !== 0 && m === Ia && (Ui = !0),
            S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  tag: c.tag,
                  payload: c.payload,
                  callback: null,
                  next: null,
                }));
          l: {
            var X = l,
              Y = c;
            m = t;
            var nl = a;
            switch (Y.tag) {
              case 1:
                if (((X = Y.payload), typeof X == "function")) {
                  x = X.call(nl, x, m);
                  break l;
                }
                x = X;
                break l;
              case 3:
                X.flags = (X.flags & -65537) | 128;
              case 0:
                if (
                  ((X = Y.payload),
                  (m = typeof X == "function" ? X.call(nl, x, m) : X),
                  m == null)
                )
                  break l;
                x = H({}, x, m);
                break l;
              case 2:
                Jt = !0;
            }
          }
          ((m = c.callback),
            m !== null &&
              ((l.flags |= 64),
              g && (l.flags |= 8192),
              (g = u.callbacks),
              g === null ? (u.callbacks = [m]) : g.push(m)));
        } else
          ((g = {
            lane: m,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }),
            S === null ? ((y = S = g), (f = x)) : (S = S.next = g),
            (i |= m));
        if (((c = c.next), c === null)) {
          if (((c = u.shared.pending), c === null)) break;
          ((g = c),
            (c = g.next),
            (g.next = null),
            (u.lastBaseUpdate = g),
            (u.shared.pending = null));
        }
      } while (!0);
      (S === null && (f = x),
        (u.baseState = f),
        (u.firstBaseUpdate = y),
        (u.lastBaseUpdate = S),
        n === null && (u.shared.lanes = 0),
        (aa |= i),
        (l.lanes = i),
        (l.memoizedState = x));
    }
  }
  function Ss(l, t) {
    if (typeof l != "function") throw Error(h(191, l));
    l.call(t);
  }
  function bs(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++) Ss(a[l], t);
  }
  var le = A(null),
    Ku = A(0);
  function ps(l, t) {
    ((l = Gt), z(Ku, l), z(le, t), (Gt = l | t.baseLanes));
  }
  function ji() {
    (z(Ku, Gt), z(le, le.current));
  }
  function Ni() {
    ((Gt = Ku.current), O(le), O(Ku));
  }
  var kt = 0,
    V = null,
    el = null,
    Sl = null,
    Ju = !1,
    te = !1,
    _a = !1,
    wu = 0,
    Le = 0,
    ae = null,
    Td = 0;
  function ml() {
    throw Error(h(321));
  }
  function Hi(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!$l(l[a], t[a])) return !1;
    return !0;
  }
  function Bi(l, t, a, e, u, n) {
    return (
      (kt = n),
      (V = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (b.H = l === null || l.memoizedState === null ? e0 : u0),
      (_a = !1),
      (n = a(e, u)),
      (_a = !1),
      te && (n = Ts(t, a, e, u)),
      xs(l),
      n
    );
  }
  function xs(l) {
    b.H = Pu;
    var t = el !== null && el.next !== null;
    if (((kt = 0), (Sl = el = V = null), (Ju = !1), (Le = 0), (ae = null), t))
      throw Error(h(300));
    l === null ||
      El ||
      ((l = l.dependencies), l !== null && Xu(l) && (El = !0));
  }
  function Ts(l, t, a, e) {
    V = l;
    var u = 0;
    do {
      if ((te && (ae = null), (Le = 0), (te = !1), 25 <= u))
        throw Error(h(301));
      if (((u += 1), (Sl = el = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        ((n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0));
      }
      ((b.H = Dd), (n = t(a, e)));
    } while (te);
    return n;
  }
  function Ed() {
    var l = b.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? Ke(t) : t),
      (l = l.useState()[0]),
      (el !== null ? el.memoizedState : null) !== l && (V.flags |= 1024),
      t
    );
  }
  function qi() {
    var l = wu !== 0;
    return ((wu = 0), l);
  }
  function Yi(l, t, a) {
    ((t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~a));
  }
  function Ci(l) {
    if (Ju) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        (t !== null && (t.pending = null), (l = l.next));
      }
      Ju = !1;
    }
    ((kt = 0), (Sl = el = V = null), (te = !1), (Le = wu = 0), (ae = null));
  }
  function Ql() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Sl === null ? (V.memoizedState = Sl = l) : (Sl = Sl.next = l), Sl);
  }
  function bl() {
    if (el === null) {
      var l = V.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = el.next;
    var t = Sl === null ? V.memoizedState : Sl.next;
    if (t !== null) ((Sl = t), (el = l));
    else {
      if (l === null)
        throw V.alternate === null ? Error(h(467)) : Error(h(310));
      ((el = l),
        (l = {
          memoizedState: el.memoizedState,
          baseState: el.baseState,
          baseQueue: el.baseQueue,
          queue: el.queue,
          next: null,
        }),
        Sl === null ? (V.memoizedState = Sl = l) : (Sl = Sl.next = l));
    }
    return Sl;
  }
  function Gi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ke(l) {
    var t = Le;
    return (
      (Le += 1),
      ae === null && (ae = []),
      (l = vs(ae, l, t)),
      (t = V),
      (Sl === null ? t.memoizedState : Sl.next) === null &&
        ((t = t.alternate),
        (b.H = t === null || t.memoizedState === null ? e0 : u0)),
      l
    );
  }
  function Wu(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Ke(l);
      if (l.$$typeof === Rl) return Hl(l);
    }
    throw Error(h(438, String(l)));
  }
  function Xi(l) {
    var t = null,
      a = V.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var e = V.alternate;
      e !== null &&
        ((e = e.updateQueue),
        e !== null &&
          ((e = e.memoCache),
          e != null &&
            (t = {
              data: e.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = Gi()), (V.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(l), e = 0; e < l; e++) a[e] = Na;
    return (t.index++, a);
  }
  function Nt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function ku(l) {
    var t = bl();
    return Qi(t, el, l);
  }
  function Qi(l, t, a) {
    var e = l.queue;
    if (e === null) throw Error(h(311));
    e.lastRenderedReducer = a;
    var u = l.baseQueue,
      n = e.pending;
    if (n !== null) {
      if (u !== null) {
        var i = u.next;
        ((u.next = n.next), (n.next = i));
      }
      ((t.baseQueue = u = n), (e.pending = null));
    }
    if (((n = l.baseState), u === null)) l.memoizedState = n;
    else {
      t = u.next;
      var c = (i = null),
        f = null,
        y = t,
        S = !1;
      do {
        var x = y.lane & -536870913;
        if (x !== y.lane ? (W & x) === x : (kt & x) === x) {
          var m = y.revertLane;
          if (m === 0)
            (f !== null &&
              (f = f.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: y.action,
                  hasEagerState: y.hasEagerState,
                  eagerState: y.eagerState,
                  next: null,
                }),
              x === Ia && (S = !0));
          else if ((kt & m) === m) {
            ((y = y.next), m === Ia && (S = !0));
            continue;
          } else
            ((x = {
              lane: 0,
              revertLane: y.revertLane,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null,
            }),
              f === null ? ((c = f = x), (i = n)) : (f = f.next = x),
              (V.lanes |= m),
              (aa |= m));
          ((x = y.action),
            _a && a(n, x),
            (n = y.hasEagerState ? y.eagerState : a(n, x)));
        } else
          ((m = {
            lane: x,
            revertLane: y.revertLane,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null,
          }),
            f === null ? ((c = f = m), (i = n)) : (f = f.next = m),
            (V.lanes |= x),
            (aa |= x));
        y = y.next;
      } while (y !== null && y !== t);
      if (
        (f === null ? (i = n) : (f.next = c),
        !$l(n, l.memoizedState) && ((El = !0), S && ((a = Pa), a !== null)))
      )
        throw a;
      ((l.memoizedState = n),
        (l.baseState = i),
        (l.baseQueue = f),
        (e.lastRenderedState = n));
    }
    return (u === null && (e.lanes = 0), [l.memoizedState, e.dispatch]);
  }
  function Zi(l) {
    var t = bl(),
      a = t.queue;
    if (a === null) throw Error(h(311));
    a.lastRenderedReducer = l;
    var e = a.dispatch,
      u = a.pending,
      n = t.memoizedState;
    if (u !== null) {
      a.pending = null;
      var i = (u = u.next);
      do ((n = l(n, i.action)), (i = i.next));
      while (i !== u);
      ($l(n, t.memoizedState) || (El = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (a.lastRenderedState = n));
    }
    return [n, e];
  }
  function Es(l, t, a) {
    var e = V,
      u = bl(),
      n = I;
    if (n) {
      if (a === void 0) throw Error(h(407));
      a = a();
    } else a = t();
    var i = !$l((el || u).memoizedState, a);
    (i && ((u.memoizedState = a), (El = !0)), (u = u.queue));
    var c = Ms.bind(null, e, u, l);
    if (
      (Je(2048, 8, c, [l]),
      u.getSnapshot !== t || i || (Sl !== null && Sl.memoizedState.tag & 1))
    ) {
      if (
        ((e.flags |= 2048),
        ee(9, $u(), zs.bind(null, e, u, a, t), null),
        sl === null)
      )
        throw Error(h(349));
      n || (kt & 124) !== 0 || As(e, t, a);
    }
    return a;
  }
  function As(l, t, a) {
    ((l.flags |= 16384),
      (l = { getSnapshot: t, value: a }),
      (t = V.updateQueue),
      t === null
        ? ((t = Gi()), (V.updateQueue = t), (t.stores = [l]))
        : ((a = t.stores), a === null ? (t.stores = [l]) : a.push(l)));
  }
  function zs(l, t, a, e) {
    ((t.value = a), (t.getSnapshot = e), Os(t) && _s(l));
  }
  function Ms(l, t, a) {
    return a(function () {
      Os(t) && _s(l);
    });
  }
  function Os(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !$l(l, a);
    } catch {
      return !0;
    }
  }
  function _s(l) {
    var t = Wa(l, 2);
    t !== null && at(t, l, 2);
  }
  function Vi(l) {
    var t = Ql();
    if (typeof l == "function") {
      var a = l;
      if (((l = a()), _a)) {
        Zt(!0);
        try {
          a();
        } finally {
          Zt(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Nt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function Ds(l, t, a, e) {
    return ((l.baseState = a), Qi(l, el, typeof e == "function" ? e : Nt));
  }
  function Ad(l, t, a, e, u) {
    if (Iu(l)) throw Error(h(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: u,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          n.listeners.push(i);
        },
      };
      (b.T !== null ? a(!0) : (n.isTransition = !1),
        e(n),
        (a = t.pending),
        a === null
          ? ((n.next = t.pending = n), Rs(t, n))
          : ((n.next = a.next), (t.pending = a.next = n)));
    }
  }
  function Rs(l, t) {
    var a = t.action,
      e = t.payload,
      u = l.state;
    if (t.isTransition) {
      var n = b.T,
        i = {};
      b.T = i;
      try {
        var c = a(u, e),
          f = b.S;
        (f !== null && f(i, c), Us(l, t, c));
      } catch (y) {
        Li(l, t, y);
      } finally {
        b.T = n;
      }
    } else
      try {
        ((n = a(u, e)), Us(l, t, n));
      } catch (y) {
        Li(l, t, y);
      }
  }
  function Us(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (e) {
            js(l, t, e);
          },
          function (e) {
            return Li(l, t, e);
          },
        )
      : js(l, t, a);
  }
  function js(l, t, a) {
    ((t.status = "fulfilled"),
      (t.value = a),
      Ns(t),
      (l.state = a),
      (t = l.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (l.pending = null) : ((a = a.next), (t.next = a), Rs(l, a))));
  }
  function Li(l, t, a) {
    var e = l.pending;
    if (((l.pending = null), e !== null)) {
      e = e.next;
      do ((t.status = "rejected"), (t.reason = a), Ns(t), (t = t.next));
      while (t !== e);
    }
    l.action = null;
  }
  function Ns(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Hs(l, t) {
    return t;
  }
  function Bs(l, t) {
    if (I) {
      var a = sl.formState;
      if (a !== null) {
        l: {
          var e = V;
          if (I) {
            if (hl) {
              t: {
                for (var u = hl, n = bt; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break t;
                  }
                  if (((u = mt(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                ((n = u.data), (u = n === "F!" || n === "F" ? u : null));
              }
              if (u) {
                ((hl = mt(u.nextSibling)), (e = u.data === "F!"));
                break l;
              }
            }
            Aa(e);
          }
          e = !1;
        }
        e && (t = a[0]);
      }
    }
    return (
      (a = Ql()),
      (a.memoizedState = a.baseState = t),
      (e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Hs,
        lastRenderedState: t,
      }),
      (a.queue = e),
      (a = l0.bind(null, V, e)),
      (e.dispatch = a),
      (e = Vi(!1)),
      (n = ki.bind(null, V, !1, e.queue)),
      (e = Ql()),
      (u = { state: t, dispatch: null, action: l, pending: null }),
      (e.queue = u),
      (a = Ad.bind(null, V, u, n, a)),
      (u.dispatch = a),
      (e.memoizedState = l),
      [t, a, !1]
    );
  }
  function qs(l) {
    var t = bl();
    return Ys(t, el, l);
  }
  function Ys(l, t, a) {
    if (
      ((t = Qi(l, t, Hs)[0]),
      (l = ku(Nt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var e = Ke(t);
      } catch (i) {
        throw i === Ge ? Vu : i;
      }
    else e = t;
    t = bl();
    var u = t.queue,
      n = u.dispatch;
    return (
      a !== t.memoizedState &&
        ((V.flags |= 2048), ee(9, $u(), zd.bind(null, u, a), null)),
      [e, n, l]
    );
  }
  function zd(l, t) {
    l.action = t;
  }
  function Cs(l) {
    var t = bl(),
      a = el;
    if (a !== null) return Ys(t, a, l);
    (bl(), (t = t.memoizedState), (a = bl()));
    var e = a.queue.dispatch;
    return ((a.memoizedState = l), [t, e, !1]);
  }
  function ee(l, t, a, e) {
    return (
      (l = { tag: l, create: a, deps: e, inst: t, next: null }),
      (t = V.updateQueue),
      t === null && ((t = Gi()), (V.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = l.next = l)
        : ((e = a.next), (a.next = l), (l.next = e), (t.lastEffect = l)),
      l
    );
  }
  function $u() {
    return { destroy: void 0, resource: void 0 };
  }
  function Gs() {
    return bl().memoizedState;
  }
  function Fu(l, t, a, e) {
    var u = Ql();
    ((e = e === void 0 ? null : e),
      (V.flags |= l),
      (u.memoizedState = ee(1 | t, $u(), a, e)));
  }
  function Je(l, t, a, e) {
    var u = bl();
    e = e === void 0 ? null : e;
    var n = u.memoizedState.inst;
    el !== null && e !== null && Hi(e, el.memoizedState.deps)
      ? (u.memoizedState = ee(t, n, a, e))
      : ((V.flags |= l), (u.memoizedState = ee(1 | t, n, a, e)));
  }
  function Xs(l, t) {
    Fu(8390656, 8, l, t);
  }
  function Qs(l, t) {
    Je(2048, 8, l, t);
  }
  function Zs(l, t) {
    return Je(4, 2, l, t);
  }
  function Vs(l, t) {
    return Je(4, 4, l, t);
  }
  function Ls(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function Ks(l, t, a) {
    ((a = a != null ? a.concat([l]) : null), Je(4, 4, Ls.bind(null, t, l), a));
  }
  function Ki() {}
  function Js(l, t) {
    var a = bl();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    return t !== null && Hi(t, e[1]) ? e[0] : ((a.memoizedState = [l, t]), l);
  }
  function ws(l, t) {
    var a = bl();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    if (t !== null && Hi(t, e[1])) return e[0];
    if (((e = l()), _a)) {
      Zt(!0);
      try {
        l();
      } finally {
        Zt(!1);
      }
    }
    return ((a.memoizedState = [e, t]), e);
  }
  function Ji(l, t, a) {
    return a === void 0 || (kt & 1073741824) !== 0
      ? (l.memoizedState = t)
      : ((l.memoizedState = a), (l = $0()), (V.lanes |= l), (aa |= l), a);
  }
  function Ws(l, t, a, e) {
    return $l(a, t)
      ? a
      : le.current !== null
        ? ((l = Ji(l, a, e)), $l(l, t) || (El = !0), l)
        : (kt & 42) === 0
          ? ((El = !0), (l.memoizedState = a))
          : ((l = $0()), (V.lanes |= l), (aa |= l), t);
  }
  function ks(l, t, a, e, u) {
    var n = M.p;
    M.p = n !== 0 && 8 > n ? n : 8;
    var i = b.T,
      c = {};
    ((b.T = c), ki(l, !1, t, a));
    try {
      var f = u(),
        y = b.S;
      if (
        (y !== null && y(c, f),
        f !== null && typeof f == "object" && typeof f.then == "function")
      ) {
        var S = xd(f, e);
        we(l, t, S, tt(l));
      } else we(l, t, e, tt(l));
    } catch (x) {
      we(l, t, { then: function () {}, status: "rejected", reason: x }, tt());
    } finally {
      ((M.p = n), (b.T = i));
    }
  }
  function Md() {}
  function wi(l, t, a, e) {
    if (l.tag !== 5) throw Error(h(476));
    var u = $s(l).queue;
    ks(
      l,
      u,
      t,
      G,
      a === null
        ? Md
        : function () {
            return (Fs(l), a(e));
          },
    );
  }
  function $s(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: G,
      baseState: G,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Nt,
        lastRenderedState: G,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Nt,
          lastRenderedState: a,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function Fs(l) {
    var t = $s(l).next.queue;
    we(l, t, {}, tt());
  }
  function Wi() {
    return Hl(ru);
  }
  function Is() {
    return bl().memoizedState;
  }
  function Ps() {
    return bl().memoizedState;
  }
  function Od(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = tt();
          l = wt(a);
          var e = Wt(t, l, a);
          (e !== null && (at(e, t, a), Qe(e, t, a)),
            (t = { cache: Ai() }),
            (l.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function _d(l, t, a) {
    var e = tt();
    ((a = {
      lane: e,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Iu(l)
        ? t0(t, a)
        : ((a = yi(l, t, a, e)), a !== null && (at(a, l, e), a0(a, t, e))));
  }
  function l0(l, t, a) {
    var e = tt();
    we(l, t, a, e);
  }
  function we(l, t, a, e) {
    var u = {
      lane: e,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Iu(l)) t0(t, u);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var i = t.lastRenderedState,
            c = n(i, a);
          if (((u.hasEagerState = !0), (u.eagerState = c), $l(c, i)))
            return (Bu(l, t, u, 0), sl === null && Hu(), !1);
        } catch {}
      if (((a = yi(l, t, u, e)), a !== null))
        return (at(a, l, e), a0(a, t, e), !0);
    }
    return !1;
  }
  function ki(l, t, a, e) {
    if (
      ((e = {
        lane: 2,
        revertLane: Oc(),
        action: e,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Iu(l))
    ) {
      if (t) throw Error(h(479));
    } else ((t = yi(l, a, e, 2)), t !== null && at(t, l, 2));
  }
  function Iu(l) {
    var t = l.alternate;
    return l === V || (t !== null && t === V);
  }
  function t0(l, t) {
    te = Ju = !0;
    var a = l.pending;
    (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (l.pending = t));
  }
  function a0(l, t, a) {
    if ((a & 4194048) !== 0) {
      var e = t.lanes;
      ((e &= l.pendingLanes), (a |= e), (t.lanes = a), of(l, a));
    }
  }
  var Pu = {
      readContext: Hl,
      use: Wu,
      useCallback: ml,
      useContext: ml,
      useEffect: ml,
      useImperativeHandle: ml,
      useLayoutEffect: ml,
      useInsertionEffect: ml,
      useMemo: ml,
      useReducer: ml,
      useRef: ml,
      useState: ml,
      useDebugValue: ml,
      useDeferredValue: ml,
      useTransition: ml,
      useSyncExternalStore: ml,
      useId: ml,
      useHostTransitionStatus: ml,
      useFormState: ml,
      useActionState: ml,
      useOptimistic: ml,
      useMemoCache: ml,
      useCacheRefresh: ml,
    },
    e0 = {
      readContext: Hl,
      use: Wu,
      useCallback: function (l, t) {
        return ((Ql().memoizedState = [l, t === void 0 ? null : t]), l);
      },
      useContext: Hl,
      useEffect: Xs,
      useImperativeHandle: function (l, t, a) {
        ((a = a != null ? a.concat([l]) : null),
          Fu(4194308, 4, Ls.bind(null, t, l), a));
      },
      useLayoutEffect: function (l, t) {
        return Fu(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        Fu(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var a = Ql();
        t = t === void 0 ? null : t;
        var e = l();
        if (_a) {
          Zt(!0);
          try {
            l();
          } finally {
            Zt(!1);
          }
        }
        return ((a.memoizedState = [e, t]), e);
      },
      useReducer: function (l, t, a) {
        var e = Ql();
        if (a !== void 0) {
          var u = a(t);
          if (_a) {
            Zt(!0);
            try {
              a(t);
            } finally {
              Zt(!1);
            }
          }
        } else u = t;
        return (
          (e.memoizedState = e.baseState = u),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: u,
          }),
          (e.queue = l),
          (l = l.dispatch = _d.bind(null, V, l)),
          [e.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = Ql();
        return ((l = { current: l }), (t.memoizedState = l));
      },
      useState: function (l) {
        l = Vi(l);
        var t = l.queue,
          a = l0.bind(null, V, t);
        return ((t.dispatch = a), [l.memoizedState, a]);
      },
      useDebugValue: Ki,
      useDeferredValue: function (l, t) {
        var a = Ql();
        return Ji(a, l, t);
      },
      useTransition: function () {
        var l = Vi(!1);
        return (
          (l = ks.bind(null, V, l.queue, !0, !1)),
          (Ql().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, a) {
        var e = V,
          u = Ql();
        if (I) {
          if (a === void 0) throw Error(h(407));
          a = a();
        } else {
          if (((a = t()), sl === null)) throw Error(h(349));
          (W & 124) !== 0 || As(e, t, a);
        }
        u.memoizedState = a;
        var n = { value: a, getSnapshot: t };
        return (
          (u.queue = n),
          Xs(Ms.bind(null, e, n, l), [l]),
          (e.flags |= 2048),
          ee(9, $u(), zs.bind(null, e, n, a, t), null),
          a
        );
      },
      useId: function () {
        var l = Ql(),
          t = sl.identifierPrefix;
        if (I) {
          var a = Rt,
            e = Dt;
          ((a = (e & ~(1 << (32 - kl(e) - 1))).toString(32) + a),
            (t = "«" + t + "R" + a),
            (a = wu++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "»"));
        } else ((a = Td++), (t = "«" + t + "r" + a.toString(32) + "»"));
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: Wi,
      useFormState: Bs,
      useActionState: Bs,
      useOptimistic: function (l) {
        var t = Ql();
        t.memoizedState = t.baseState = l;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = a),
          (t = ki.bind(null, V, !0, a)),
          (a.dispatch = t),
          [l, t]
        );
      },
      useMemoCache: Xi,
      useCacheRefresh: function () {
        return (Ql().memoizedState = Od.bind(null, V));
      },
    },
    u0 = {
      readContext: Hl,
      use: Wu,
      useCallback: Js,
      useContext: Hl,
      useEffect: Qs,
      useImperativeHandle: Ks,
      useInsertionEffect: Zs,
      useLayoutEffect: Vs,
      useMemo: ws,
      useReducer: ku,
      useRef: Gs,
      useState: function () {
        return ku(Nt);
      },
      useDebugValue: Ki,
      useDeferredValue: function (l, t) {
        var a = bl();
        return Ws(a, el.memoizedState, l, t);
      },
      useTransition: function () {
        var l = ku(Nt)[0],
          t = bl().memoizedState;
        return [typeof l == "boolean" ? l : Ke(l), t];
      },
      useSyncExternalStore: Es,
      useId: Is,
      useHostTransitionStatus: Wi,
      useFormState: qs,
      useActionState: qs,
      useOptimistic: function (l, t) {
        var a = bl();
        return Ds(a, el, l, t);
      },
      useMemoCache: Xi,
      useCacheRefresh: Ps,
    },
    Dd = {
      readContext: Hl,
      use: Wu,
      useCallback: Js,
      useContext: Hl,
      useEffect: Qs,
      useImperativeHandle: Ks,
      useInsertionEffect: Zs,
      useLayoutEffect: Vs,
      useMemo: ws,
      useReducer: Zi,
      useRef: Gs,
      useState: function () {
        return Zi(Nt);
      },
      useDebugValue: Ki,
      useDeferredValue: function (l, t) {
        var a = bl();
        return el === null ? Ji(a, l, t) : Ws(a, el.memoizedState, l, t);
      },
      useTransition: function () {
        var l = Zi(Nt)[0],
          t = bl().memoizedState;
        return [typeof l == "boolean" ? l : Ke(l), t];
      },
      useSyncExternalStore: Es,
      useId: Is,
      useHostTransitionStatus: Wi,
      useFormState: Cs,
      useActionState: Cs,
      useOptimistic: function (l, t) {
        var a = bl();
        return el !== null
          ? Ds(a, el, l, t)
          : ((a.baseState = l), [l, a.queue.dispatch]);
      },
      useMemoCache: Xi,
      useCacheRefresh: Ps,
    },
    ue = null,
    We = 0;
  function ln(l) {
    var t = We;
    return ((We += 1), ue === null && (ue = []), vs(ue, l, t));
  }
  function ke(l, t) {
    ((t = t.props.ref), (l.ref = t !== void 0 ? t : null));
  }
  function tn(l, t) {
    throw t.$$typeof === P
      ? Error(h(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          h(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l,
          ),
        ));
  }
  function n0(l) {
    var t = l._init;
    return t(l._payload);
  }
  function i0(l) {
    function t(r, o) {
      if (l) {
        var d = r.deletions;
        d === null ? ((r.deletions = [o]), (r.flags |= 16)) : d.push(o);
      }
    }
    function a(r, o) {
      if (!l) return null;
      for (; o !== null; ) (t(r, o), (o = o.sibling));
      return null;
    }
    function e(r) {
      for (var o = new Map(); r !== null; )
        (r.key !== null ? o.set(r.key, r) : o.set(r.index, r), (r = r.sibling));
      return o;
    }
    function u(r, o) {
      return ((r = _t(r, o)), (r.index = 0), (r.sibling = null), r);
    }
    function n(r, o, d) {
      return (
        (r.index = d),
        l
          ? ((d = r.alternate),
            d !== null
              ? ((d = d.index), d < o ? ((r.flags |= 67108866), o) : d)
              : ((r.flags |= 67108866), o))
          : ((r.flags |= 1048576), o)
      );
    }
    function i(r) {
      return (l && r.alternate === null && (r.flags |= 67108866), r);
    }
    function c(r, o, d, p) {
      return o === null || o.tag !== 6
        ? ((o = mi(d, r.mode, p)), (o.return = r), o)
        : ((o = u(o, d)), (o.return = r), o);
    }
    function f(r, o, d, p) {
      var _ = d.type;
      return _ === ql
        ? S(r, o, d.props.children, p, d.key)
        : o !== null &&
            (o.elementType === _ ||
              (typeof _ == "object" &&
                _ !== null &&
                _.$$typeof === Jl &&
                n0(_) === o.type))
          ? ((o = u(o, d.props)), ke(o, d), (o.return = r), o)
          : ((o = Yu(d.type, d.key, d.props, null, r.mode, p)),
            ke(o, d),
            (o.return = r),
            o);
    }
    function y(r, o, d, p) {
      return o === null ||
        o.tag !== 4 ||
        o.stateNode.containerInfo !== d.containerInfo ||
        o.stateNode.implementation !== d.implementation
        ? ((o = gi(d, r.mode, p)), (o.return = r), o)
        : ((o = u(o, d.children || [])), (o.return = r), o);
    }
    function S(r, o, d, p, _) {
      return o === null || o.tag !== 7
        ? ((o = pa(d, r.mode, p, _)), (o.return = r), o)
        : ((o = u(o, d)), (o.return = r), o);
    }
    function x(r, o, d) {
      if (
        (typeof o == "string" && o !== "") ||
        typeof o == "number" ||
        typeof o == "bigint"
      )
        return ((o = mi("" + o, r.mode, d)), (o.return = r), o);
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case al:
            return (
              (d = Yu(o.type, o.key, o.props, null, r.mode, d)),
              ke(d, o),
              (d.return = r),
              d
            );
          case vl:
            return ((o = gi(o, r.mode, d)), (o.return = r), o);
          case Jl:
            var p = o._init;
            return ((o = p(o._payload)), x(r, o, d));
        }
        if (jl(o) || Ul(o))
          return ((o = pa(o, r.mode, d, null)), (o.return = r), o);
        if (typeof o.then == "function") return x(r, ln(o), d);
        if (o.$$typeof === Rl) return x(r, Qu(r, o), d);
        tn(r, o);
      }
      return null;
    }
    function m(r, o, d, p) {
      var _ = o !== null ? o.key : null;
      if (
        (typeof d == "string" && d !== "") ||
        typeof d == "number" ||
        typeof d == "bigint"
      )
        return _ !== null ? null : c(r, o, "" + d, p);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case al:
            return d.key === _ ? f(r, o, d, p) : null;
          case vl:
            return d.key === _ ? y(r, o, d, p) : null;
          case Jl:
            return ((_ = d._init), (d = _(d._payload)), m(r, o, d, p));
        }
        if (jl(d) || Ul(d)) return _ !== null ? null : S(r, o, d, p, null);
        if (typeof d.then == "function") return m(r, o, ln(d), p);
        if (d.$$typeof === Rl) return m(r, o, Qu(r, d), p);
        tn(r, d);
      }
      return null;
    }
    function g(r, o, d, p, _) {
      if (
        (typeof p == "string" && p !== "") ||
        typeof p == "number" ||
        typeof p == "bigint"
      )
        return ((r = r.get(d) || null), c(o, r, "" + p, _));
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case al:
            return (
              (r = r.get(p.key === null ? d : p.key) || null),
              f(o, r, p, _)
            );
          case vl:
            return (
              (r = r.get(p.key === null ? d : p.key) || null),
              y(o, r, p, _)
            );
          case Jl:
            var L = p._init;
            return ((p = L(p._payload)), g(r, o, d, p, _));
        }
        if (jl(p) || Ul(p))
          return ((r = r.get(d) || null), S(o, r, p, _, null));
        if (typeof p.then == "function") return g(r, o, d, ln(p), _);
        if (p.$$typeof === Rl) return g(r, o, d, Qu(o, p), _);
        tn(o, p);
      }
      return null;
    }
    function X(r, o, d, p) {
      for (
        var _ = null, L = null, N = o, C = (o = 0), zl = null;
        N !== null && C < d.length;
        C++
      ) {
        N.index > C ? ((zl = N), (N = null)) : (zl = N.sibling);
        var F = m(r, N, d[C], p);
        if (F === null) {
          N === null && (N = zl);
          break;
        }
        (l && N && F.alternate === null && t(r, N),
          (o = n(F, o, C)),
          L === null ? (_ = F) : (L.sibling = F),
          (L = F),
          (N = zl));
      }
      if (C === d.length) return (a(r, N), I && Ta(r, C), _);
      if (N === null) {
        for (; C < d.length; C++)
          ((N = x(r, d[C], p)),
            N !== null &&
              ((o = n(N, o, C)),
              L === null ? (_ = N) : (L.sibling = N),
              (L = N)));
        return (I && Ta(r, C), _);
      }
      for (N = e(N); C < d.length; C++)
        ((zl = g(N, r, C, d[C], p)),
          zl !== null &&
            (l &&
              zl.alternate !== null &&
              N.delete(zl.key === null ? C : zl.key),
            (o = n(zl, o, C)),
            L === null ? (_ = zl) : (L.sibling = zl),
            (L = zl)));
      return (
        l &&
          N.forEach(function (ra) {
            return t(r, ra);
          }),
        I && Ta(r, C),
        _
      );
    }
    function Y(r, o, d, p) {
      if (d == null) throw Error(h(151));
      for (
        var _ = null, L = null, N = o, C = (o = 0), zl = null, F = d.next();
        N !== null && !F.done;
        C++, F = d.next()
      ) {
        N.index > C ? ((zl = N), (N = null)) : (zl = N.sibling);
        var ra = m(r, N, F.value, p);
        if (ra === null) {
          N === null && (N = zl);
          break;
        }
        (l && N && ra.alternate === null && t(r, N),
          (o = n(ra, o, C)),
          L === null ? (_ = ra) : (L.sibling = ra),
          (L = ra),
          (N = zl));
      }
      if (F.done) return (a(r, N), I && Ta(r, C), _);
      if (N === null) {
        for (; !F.done; C++, F = d.next())
          ((F = x(r, F.value, p)),
            F !== null &&
              ((o = n(F, o, C)),
              L === null ? (_ = F) : (L.sibling = F),
              (L = F)));
        return (I && Ta(r, C), _);
      }
      for (N = e(N); !F.done; C++, F = d.next())
        ((F = g(N, r, C, F.value, p)),
          F !== null &&
            (l && F.alternate !== null && N.delete(F.key === null ? C : F.key),
            (o = n(F, o, C)),
            L === null ? (_ = F) : (L.sibling = F),
            (L = F)));
      return (
        l &&
          N.forEach(function (R1) {
            return t(r, R1);
          }),
        I && Ta(r, C),
        _
      );
    }
    function nl(r, o, d, p) {
      if (
        (typeof d == "object" &&
          d !== null &&
          d.type === ql &&
          d.key === null &&
          (d = d.props.children),
        typeof d == "object" && d !== null)
      ) {
        switch (d.$$typeof) {
          case al:
            l: {
              for (var _ = d.key; o !== null; ) {
                if (o.key === _) {
                  if (((_ = d.type), _ === ql)) {
                    if (o.tag === 7) {
                      (a(r, o.sibling),
                        (p = u(o, d.props.children)),
                        (p.return = r),
                        (r = p));
                      break l;
                    }
                  } else if (
                    o.elementType === _ ||
                    (typeof _ == "object" &&
                      _ !== null &&
                      _.$$typeof === Jl &&
                      n0(_) === o.type)
                  ) {
                    (a(r, o.sibling),
                      (p = u(o, d.props)),
                      ke(p, d),
                      (p.return = r),
                      (r = p));
                    break l;
                  }
                  a(r, o);
                  break;
                } else t(r, o);
                o = o.sibling;
              }
              d.type === ql
                ? ((p = pa(d.props.children, r.mode, p, d.key)),
                  (p.return = r),
                  (r = p))
                : ((p = Yu(d.type, d.key, d.props, null, r.mode, p)),
                  ke(p, d),
                  (p.return = r),
                  (r = p));
            }
            return i(r);
          case vl:
            l: {
              for (_ = d.key; o !== null; ) {
                if (o.key === _)
                  if (
                    o.tag === 4 &&
                    o.stateNode.containerInfo === d.containerInfo &&
                    o.stateNode.implementation === d.implementation
                  ) {
                    (a(r, o.sibling),
                      (p = u(o, d.children || [])),
                      (p.return = r),
                      (r = p));
                    break l;
                  } else {
                    a(r, o);
                    break;
                  }
                else t(r, o);
                o = o.sibling;
              }
              ((p = gi(d, r.mode, p)), (p.return = r), (r = p));
            }
            return i(r);
          case Jl:
            return ((_ = d._init), (d = _(d._payload)), nl(r, o, d, p));
        }
        if (jl(d)) return X(r, o, d, p);
        if (Ul(d)) {
          if (((_ = Ul(d)), typeof _ != "function")) throw Error(h(150));
          return ((d = _.call(d)), Y(r, o, d, p));
        }
        if (typeof d.then == "function") return nl(r, o, ln(d), p);
        if (d.$$typeof === Rl) return nl(r, o, Qu(r, d), p);
        tn(r, d);
      }
      return (typeof d == "string" && d !== "") ||
        typeof d == "number" ||
        typeof d == "bigint"
        ? ((d = "" + d),
          o !== null && o.tag === 6
            ? (a(r, o.sibling), (p = u(o, d)), (p.return = r), (r = p))
            : (a(r, o), (p = mi(d, r.mode, p)), (p.return = r), (r = p)),
          i(r))
        : a(r, o);
    }
    return function (r, o, d, p) {
      try {
        We = 0;
        var _ = nl(r, o, d, p);
        return ((ue = null), _);
      } catch (N) {
        if (N === Ge || N === Vu) throw N;
        var L = Fl(29, N, null, r.mode);
        return ((L.lanes = p), (L.return = r), L);
      }
    };
  }
  var ne = i0(!0),
    c0 = i0(!1),
    st = A(null),
    pt = null;
  function $t(l) {
    var t = l.alternate;
    (z(xl, xl.current & 1),
      z(st, l),
      pt === null &&
        (t === null || le.current !== null || t.memoizedState !== null) &&
        (pt = l));
  }
  function f0(l) {
    if (l.tag === 22) {
      if ((z(xl, xl.current), z(st, l), pt === null)) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (pt = l);
      }
    } else Ft();
  }
  function Ft() {
    (z(xl, xl.current), z(st, st.current));
  }
  function Ht(l) {
    (O(st), pt === l && (pt = null), O(xl));
  }
  var xl = A(0);
  function an(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || Gc(a))
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  function $i(l, t, a, e) {
    ((t = l.memoizedState),
      (a = a(e, t)),
      (a = a == null ? t : H({}, t, a)),
      (l.memoizedState = a),
      l.lanes === 0 && (l.updateQueue.baseState = a));
  }
  var Fi = {
    enqueueSetState: function (l, t, a) {
      l = l._reactInternals;
      var e = tt(),
        u = wt(e);
      ((u.payload = t),
        a != null && (u.callback = a),
        (t = Wt(l, u, e)),
        t !== null && (at(t, l, e), Qe(t, l, e)));
    },
    enqueueReplaceState: function (l, t, a) {
      l = l._reactInternals;
      var e = tt(),
        u = wt(e);
      ((u.tag = 1),
        (u.payload = t),
        a != null && (u.callback = a),
        (t = Wt(l, u, e)),
        t !== null && (at(t, l, e), Qe(t, l, e)));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var a = tt(),
        e = wt(a);
      ((e.tag = 2),
        t != null && (e.callback = t),
        (t = Wt(l, e, a)),
        t !== null && (at(t, l, a), Qe(t, l, a)));
    },
  };
  function s0(l, t, a, e, u, n, i) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(e, n, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Ue(a, e) || !Ue(u, n)
          : !0
    );
  }
  function o0(l, t, a, e) {
    ((l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, e),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, e),
      t.state !== l && Fi.enqueueReplaceState(t, t.state, null));
  }
  function Da(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var e in t) e !== "ref" && (a[e] = t[e]);
    }
    if ((l = l.defaultProps)) {
      a === t && (a = H({}, a));
      for (var u in l) a[u] === void 0 && (a[u] = l[u]);
    }
    return a;
  }
  var en =
    typeof reportError == "function"
      ? reportError
      : function (l) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof l == "object" &&
                l !== null &&
                typeof l.message == "string"
                  ? String(l.message)
                  : String(l),
              error: l,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", l);
            return;
          }
          console.error(l);
        };
  function r0(l) {
    en(l);
  }
  function d0(l) {
    console.error(l);
  }
  function h0(l) {
    en(l);
  }
  function un(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function y0(l, t, a) {
    try {
      var e = l.onCaughtError;
      e(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function Ii(l, t, a) {
    return (
      (a = wt(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        un(l, t);
      }),
      a
    );
  }
  function v0(l) {
    return ((l = wt(l)), (l.tag = 3), l);
  }
  function m0(l, t, a, e) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = e.value;
      ((l.payload = function () {
        return u(n);
      }),
        (l.callback = function () {
          y0(t, a, e);
        }));
    }
    var i = a.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (l.callback = function () {
        (y0(t, a, e),
          typeof u != "function" &&
            (ea === null ? (ea = new Set([this])) : ea.add(this)));
        var c = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: c !== null ? c : "",
        });
      });
  }
  function Rd(l, t, a, e, u) {
    if (
      ((a.flags |= 32768),
      e !== null && typeof e == "object" && typeof e.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && qe(t, a, u, !0),
        (a = st.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 13:
            return (
              pt === null ? Tc() : a.alternate === null && yl === 0 && (yl = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = u),
              e === Oi
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([e])) : t.add(e),
                  Ac(l, e, u)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              e === Oi
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([e]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([e])) : a.add(e)),
                  Ac(l, e, u)),
              !1
            );
        }
        throw Error(h(435, a.tag));
      }
      return (Ac(l, e, u), Tc(), !1);
    }
    if (I)
      return (
        (t = st.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            e !== pi && ((l = Error(h(422), { cause: e })), Be(nt(l, a))))
          : (e !== pi && ((t = Error(h(423), { cause: e })), Be(nt(t, a))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (u &= -u),
            (l.lanes |= u),
            (e = nt(e, a)),
            (u = Ii(l.stateNode, e, u)),
            Ri(l, u),
            yl !== 4 && (yl = 2)),
        !1
      );
    var n = Error(h(520), { cause: e });
    if (
      ((n = nt(n, a)),
      au === null ? (au = [n]) : au.push(n),
      yl !== 4 && (yl = 2),
      t === null)
    )
      return !0;
    ((e = nt(e, a)), (a = t));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (l = u & -u),
            (a.lanes |= l),
            (l = Ii(a.stateNode, e, l)),
            Ri(a, l),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (n = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (ea === null || !ea.has(n)))))
          )
            return (
              (a.flags |= 65536),
              (u &= -u),
              (a.lanes |= u),
              (u = v0(u)),
              m0(u, l, a, e),
              Ri(a, u),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var g0 = Error(h(461)),
    El = !1;
  function Ml(l, t, a, e) {
    t.child = l === null ? c0(t, null, a, e) : ne(t, l.child, a, e);
  }
  function S0(l, t, a, e, u) {
    a = a.render;
    var n = t.ref;
    if ("ref" in e) {
      var i = {};
      for (var c in e) c !== "ref" && (i[c] = e[c]);
    } else i = e;
    return (
      Ma(t),
      (e = Bi(l, t, a, i, n, u)),
      (c = qi()),
      l !== null && !El
        ? (Yi(l, t, u), Bt(l, t, u))
        : (I && c && Si(t), (t.flags |= 1), Ml(l, t, e, u), t.child)
    );
  }
  function b0(l, t, a, e, u) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" &&
        !vi(n) &&
        n.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = n), p0(l, t, n, e, u))
        : ((l = Yu(a.type, null, e, t, t.mode, u)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((n = l.child), !ic(l, u))) {
      var i = n.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : Ue), a(i, e) && l.ref === t.ref)
      )
        return Bt(l, t, u);
    }
    return (
      (t.flags |= 1),
      (l = _t(n, e)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function p0(l, t, a, e, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Ue(n, e) && l.ref === t.ref)
        if (((El = !1), (t.pendingProps = e = n), ic(l, u)))
          (l.flags & 131072) !== 0 && (El = !0);
        else return ((t.lanes = l.lanes), Bt(l, t, u));
    }
    return Pi(l, t, a, e, u);
  }
  function x0(l, t, a) {
    var e = t.pendingProps,
      u = e.children,
      n = l !== null ? l.memoizedState : null;
    if (e.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (((e = n !== null ? n.baseLanes | a : a), l !== null)) {
          for (u = t.child = l.child, n = 0; u !== null; )
            ((n = n | u.lanes | u.childLanes), (u = u.sibling));
          t.childLanes = n & ~e;
        } else ((t.childLanes = 0), (t.child = null));
        return T0(l, t, e, a);
      }
      if ((a & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && Zu(t, n !== null ? n.cachePool : null),
          n !== null ? ps(t, n) : ji(),
          f0(t));
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          T0(l, t, n !== null ? n.baseLanes | a : a, a)
        );
    } else
      n !== null
        ? (Zu(t, n.cachePool), ps(t, n), Ft(), (t.memoizedState = null))
        : (l !== null && Zu(t, null), ji(), Ft());
    return (Ml(l, t, u, a), t.child);
  }
  function T0(l, t, a, e) {
    var u = Mi();
    return (
      (u = u === null ? null : { parent: pl._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: a, cachePool: u }),
      l !== null && Zu(t, null),
      ji(),
      f0(t),
      l !== null && qe(l, t, e, !0),
      null
    );
  }
  function nn(l, t) {
    var a = t.ref;
    if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(h(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function Pi(l, t, a, e, u) {
    return (
      Ma(t),
      (a = Bi(l, t, a, e, void 0, u)),
      (e = qi()),
      l !== null && !El
        ? (Yi(l, t, u), Bt(l, t, u))
        : (I && e && Si(t), (t.flags |= 1), Ml(l, t, a, u), t.child)
    );
  }
  function E0(l, t, a, e, u, n) {
    return (
      Ma(t),
      (t.updateQueue = null),
      (a = Ts(t, e, a, u)),
      xs(l),
      (e = qi()),
      l !== null && !El
        ? (Yi(l, t, n), Bt(l, t, n))
        : (I && e && Si(t), (t.flags |= 1), Ml(l, t, a, n), t.child)
    );
  }
  function A0(l, t, a, e, u) {
    if ((Ma(t), t.stateNode === null)) {
      var n = ka,
        i = a.contextType;
      (typeof i == "object" && i !== null && (n = Hl(i)),
        (n = new a(e, n)),
        (t.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = Fi),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = e),
        (n.state = t.memoizedState),
        (n.refs = {}),
        _i(t),
        (i = a.contextType),
        (n.context = typeof i == "object" && i !== null ? Hl(i) : ka),
        (n.state = t.memoizedState),
        (i = a.getDerivedStateFromProps),
        typeof i == "function" && ($i(t, a, i, e), (n.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((i = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          i !== n.state && Fi.enqueueReplaceState(n, n.state, null),
          Ve(t, e, n, u),
          Ze(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (e = !0));
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps,
        f = Da(a, c);
      n.props = f;
      var y = n.context,
        S = a.contextType;
      ((i = ka), typeof S == "object" && S !== null && (i = Hl(S)));
      var x = a.getDerivedStateFromProps;
      ((S =
        typeof x == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (c = t.pendingProps !== c),
        S ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c || y !== i) && o0(t, n, e, i)),
        (Jt = !1));
      var m = t.memoizedState;
      ((n.state = m),
        Ve(t, e, n, u),
        Ze(),
        (y = t.memoizedState),
        c || m !== y || Jt
          ? (typeof x == "function" && ($i(t, a, x, e), (y = t.memoizedState)),
            (f = Jt || s0(t, a, f, e, m, y, i))
              ? (S ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = e),
                (t.memoizedState = y)),
            (n.props = e),
            (n.state = y),
            (n.context = i),
            (e = f))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            (e = !1)));
    } else {
      ((n = t.stateNode),
        Di(l, t),
        (i = t.memoizedProps),
        (S = Da(a, i)),
        (n.props = S),
        (x = t.pendingProps),
        (m = n.context),
        (y = a.contextType),
        (f = ka),
        typeof y == "object" && y !== null && (f = Hl(y)),
        (c = a.getDerivedStateFromProps),
        (y =
          typeof c == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i !== x || m !== f) && o0(t, n, e, f)),
        (Jt = !1),
        (m = t.memoizedState),
        (n.state = m),
        Ve(t, e, n, u),
        Ze());
      var g = t.memoizedState;
      i !== x ||
      m !== g ||
      Jt ||
      (l !== null && l.dependencies !== null && Xu(l.dependencies))
        ? (typeof c == "function" && ($i(t, a, c, e), (g = t.memoizedState)),
          (S =
            Jt ||
            s0(t, a, S, e, m, g, f) ||
            (l !== null && l.dependencies !== null && Xu(l.dependencies)))
            ? (y ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(e, g, f),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(e, g, f)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (i === l.memoizedProps && m === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (i === l.memoizedProps && m === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = e),
              (t.memoizedState = g)),
          (n.props = e),
          (n.state = g),
          (n.context = f),
          (e = S))
        : (typeof n.componentDidUpdate != "function" ||
            (i === l.memoizedProps && m === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (i === l.memoizedProps && m === l.memoizedState) ||
            (t.flags |= 1024),
          (e = !1));
    }
    return (
      (n = e),
      nn(l, t),
      (e = (t.flags & 128) !== 0),
      n || e
        ? ((n = t.stateNode),
          (a =
            e && typeof a.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (t.flags |= 1),
          l !== null && e
            ? ((t.child = ne(t, l.child, null, u)),
              (t.child = ne(t, null, a, u)))
            : Ml(l, t, a, u),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = Bt(l, t, u)),
      l
    );
  }
  function z0(l, t, a, e) {
    return (He(), (t.flags |= 256), Ml(l, t, a, e), t.child);
  }
  var lc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function tc(l) {
    return { baseLanes: l, cachePool: ds() };
  }
  function ac(l, t, a) {
    return ((l = l !== null ? l.childLanes & ~a : 0), t && (l |= ot), l);
  }
  function M0(l, t, a) {
    var e = t.pendingProps,
      u = !1,
      n = (t.flags & 128) !== 0,
      i;
    if (
      ((i = n) ||
        (i =
          l !== null && l.memoizedState === null ? !1 : (xl.current & 2) !== 0),
      i && ((u = !0), (t.flags &= -129)),
      (i = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (I) {
        if ((u ? $t(t) : Ft(), I)) {
          var c = hl,
            f;
          if ((f = c)) {
            l: {
              for (f = c, c = bt; f.nodeType !== 8; ) {
                if (!c) {
                  c = null;
                  break l;
                }
                if (((f = mt(f.nextSibling)), f === null)) {
                  c = null;
                  break l;
                }
              }
              c = f;
            }
            c !== null
              ? ((t.memoizedState = {
                  dehydrated: c,
                  treeContext: xa !== null ? { id: Dt, overflow: Rt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (f = Fl(18, null, null, 0)),
                (f.stateNode = c),
                (f.return = t),
                (t.child = f),
                (Yl = t),
                (hl = null),
                (f = !0))
              : (f = !1);
          }
          f || Aa(t);
        }
        if (
          ((c = t.memoizedState),
          c !== null && ((c = c.dehydrated), c !== null))
        )
          return (Gc(c) ? (t.lanes = 32) : (t.lanes = 536870912), null);
        Ht(t);
      }
      return (
        (c = e.children),
        (e = e.fallback),
        u
          ? (Ft(),
            (u = t.mode),
            (c = cn({ mode: "hidden", children: c }, u)),
            (e = pa(e, u, a, null)),
            (c.return = t),
            (e.return = t),
            (c.sibling = e),
            (t.child = c),
            (u = t.child),
            (u.memoizedState = tc(a)),
            (u.childLanes = ac(l, i, a)),
            (t.memoizedState = lc),
            e)
          : ($t(t), ec(t, c))
      );
    }
    if (
      ((f = l.memoizedState), f !== null && ((c = f.dehydrated), c !== null))
    ) {
      if (n)
        t.flags & 256
          ? ($t(t), (t.flags &= -257), (t = uc(l, t, a)))
          : t.memoizedState !== null
            ? (Ft(), (t.child = l.child), (t.flags |= 128), (t = null))
            : (Ft(),
              (u = e.fallback),
              (c = t.mode),
              (e = cn({ mode: "visible", children: e.children }, c)),
              (u = pa(u, c, a, null)),
              (u.flags |= 2),
              (e.return = t),
              (u.return = t),
              (e.sibling = u),
              (t.child = e),
              ne(t, l.child, null, a),
              (e = t.child),
              (e.memoizedState = tc(a)),
              (e.childLanes = ac(l, i, a)),
              (t.memoizedState = lc),
              (t = u));
      else if (($t(t), Gc(c))) {
        if (((i = c.nextSibling && c.nextSibling.dataset), i)) var y = i.dgst;
        ((i = y),
          (e = Error(h(419))),
          (e.stack = ""),
          (e.digest = i),
          Be({ value: e, source: null, stack: null }),
          (t = uc(l, t, a)));
      } else if (
        (El || qe(l, t, a, !1), (i = (a & l.childLanes) !== 0), El || i)
      ) {
        if (
          ((i = sl),
          i !== null &&
            ((e = a & -a),
            (e = (e & 42) !== 0 ? 1 : Xn(e)),
            (e = (e & (i.suspendedLanes | a)) !== 0 ? 0 : e),
            e !== 0 && e !== f.retryLane))
        )
          throw ((f.retryLane = e), Wa(l, e), at(i, l, e), g0);
        (c.data === "$?" || Tc(), (t = uc(l, t, a)));
      } else
        c.data === "$?"
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = f.treeContext),
            (hl = mt(c.nextSibling)),
            (Yl = t),
            (I = !0),
            (Ea = null),
            (bt = !1),
            l !== null &&
              ((ct[ft++] = Dt),
              (ct[ft++] = Rt),
              (ct[ft++] = xa),
              (Dt = l.id),
              (Rt = l.overflow),
              (xa = t)),
            (t = ec(t, e.children)),
            (t.flags |= 4096));
      return t;
    }
    return u
      ? (Ft(),
        (u = e.fallback),
        (c = t.mode),
        (f = l.child),
        (y = f.sibling),
        (e = _t(f, { mode: "hidden", children: e.children })),
        (e.subtreeFlags = f.subtreeFlags & 65011712),
        y !== null ? (u = _t(y, u)) : ((u = pa(u, c, a, null)), (u.flags |= 2)),
        (u.return = t),
        (e.return = t),
        (e.sibling = u),
        (t.child = e),
        (e = u),
        (u = t.child),
        (c = l.child.memoizedState),
        c === null
          ? (c = tc(a))
          : ((f = c.cachePool),
            f !== null
              ? ((y = pl._currentValue),
                (f = f.parent !== y ? { parent: y, pool: y } : f))
              : (f = ds()),
            (c = { baseLanes: c.baseLanes | a, cachePool: f })),
        (u.memoizedState = c),
        (u.childLanes = ac(l, i, a)),
        (t.memoizedState = lc),
        e)
      : ($t(t),
        (a = l.child),
        (l = a.sibling),
        (a = _t(a, { mode: "visible", children: e.children })),
        (a.return = t),
        (a.sibling = null),
        l !== null &&
          ((i = t.deletions),
          i === null ? ((t.deletions = [l]), (t.flags |= 16)) : i.push(l)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function ec(l, t) {
    return (
      (t = cn({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function cn(l, t) {
    return (
      (l = Fl(22, l, null, t)),
      (l.lanes = 0),
      (l.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      l
    );
  }
  function uc(l, t, a) {
    return (
      ne(t, l.child, null, a),
      (l = ec(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function O0(l, t, a) {
    l.lanes |= t;
    var e = l.alternate;
    (e !== null && (e.lanes |= t), Ti(l.return, t, a));
  }
  function nc(l, t, a, e, u) {
    var n = l.memoizedState;
    n === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: e,
          tail: a,
          tailMode: u,
        })
      : ((n.isBackwards = t),
        (n.rendering = null),
        (n.renderingStartTime = 0),
        (n.last = e),
        (n.tail = a),
        (n.tailMode = u));
  }
  function _0(l, t, a) {
    var e = t.pendingProps,
      u = e.revealOrder,
      n = e.tail;
    if ((Ml(l, t, e.children, a), (e = xl.current), (e & 2) !== 0))
      ((e = (e & 1) | 2), (t.flags |= 128));
    else {
      if (l !== null && (l.flags & 128) !== 0)
        l: for (l = t.child; l !== null; ) {
          if (l.tag === 13) l.memoizedState !== null && O0(l, a, t);
          else if (l.tag === 19) O0(l, a, t);
          else if (l.child !== null) {
            ((l.child.return = l), (l = l.child));
            continue;
          }
          if (l === t) break l;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === t) break l;
            l = l.return;
          }
          ((l.sibling.return = l.return), (l = l.sibling));
        }
      e &= 1;
    }
    switch ((z(xl, e), u)) {
      case "forwards":
        for (a = t.child, u = null; a !== null; )
          ((l = a.alternate),
            l !== null && an(l) === null && (u = a),
            (a = a.sibling));
        ((a = u),
          a === null
            ? ((u = t.child), (t.child = null))
            : ((u = a.sibling), (a.sibling = null)),
          nc(t, !1, u, a, n));
        break;
      case "backwards":
        for (a = null, u = t.child, t.child = null; u !== null; ) {
          if (((l = u.alternate), l !== null && an(l) === null)) {
            t.child = u;
            break;
          }
          ((l = u.sibling), (u.sibling = a), (a = u), (u = l));
        }
        nc(t, !0, a, null, n);
        break;
      case "together":
        nc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Bt(l, t, a) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (aa |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((qe(l, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(h(153));
    if (t.child !== null) {
      for (
        l = t.child, a = _t(l, l.pendingProps), t.child = a, a.return = t;
        l.sibling !== null;
      )
        ((l = l.sibling),
          (a = a.sibling = _t(l, l.pendingProps)),
          (a.return = t));
      a.sibling = null;
    }
    return t.child;
  }
  function ic(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && Xu(l)));
  }
  function Ud(l, t, a) {
    switch (t.tag) {
      case 3:
        (ol(t, t.stateNode.containerInfo),
          Kt(t, pl, l.memoizedState.cache),
          He());
        break;
      case 27:
      case 5:
        Bn(t);
        break;
      case 4:
        ol(t, t.stateNode.containerInfo);
        break;
      case 10:
        Kt(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var e = t.memoizedState;
        if (e !== null)
          return e.dehydrated !== null
            ? ($t(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
              ? M0(l, t, a)
              : ($t(t), (l = Bt(l, t, a)), l !== null ? l.sibling : null);
        $t(t);
        break;
      case 19:
        var u = (l.flags & 128) !== 0;
        if (
          ((e = (a & t.childLanes) !== 0),
          e || (qe(l, t, a, !1), (e = (a & t.childLanes) !== 0)),
          u)
        ) {
          if (e) return _0(l, t, a);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          z(xl, xl.current),
          e)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), x0(l, t, a));
      case 24:
        Kt(t, pl, l.memoizedState.cache);
    }
    return Bt(l, t, a);
  }
  function D0(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) El = !0;
      else {
        if (!ic(l, a) && (t.flags & 128) === 0) return ((El = !1), Ud(l, t, a));
        El = (l.flags & 131072) !== 0;
      }
    else ((El = !1), I && (t.flags & 1048576) !== 0 && ns(t, Gu, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          l = t.pendingProps;
          var e = t.elementType,
            u = e._init;
          if (((e = u(e._payload)), (t.type = e), typeof e == "function"))
            vi(e)
              ? ((l = Da(e, l)), (t.tag = 1), (t = A0(null, t, e, l, a)))
              : ((t.tag = 0), (t = Pi(null, t, e, l, a)));
          else {
            if (e != null) {
              if (((u = e.$$typeof), u === ht)) {
                ((t.tag = 11), (t = S0(null, t, e, l, a)));
                break l;
              } else if (u === Kl) {
                ((t.tag = 14), (t = b0(null, t, e, l, a)));
                break l;
              }
            }
            throw ((t = ya(e) || e), Error(h(306, t, "")));
          }
        }
        return t;
      case 0:
        return Pi(l, t, t.type, t.pendingProps, a);
      case 1:
        return ((e = t.type), (u = Da(e, t.pendingProps)), A0(l, t, e, u, a));
      case 3:
        l: {
          if ((ol(t, t.stateNode.containerInfo), l === null))
            throw Error(h(387));
          e = t.pendingProps;
          var n = t.memoizedState;
          ((u = n.element), Di(l, t), Ve(t, e, null, a));
          var i = t.memoizedState;
          if (
            ((e = i.cache),
            Kt(t, pl, e),
            e !== n.cache && Ei(t, [pl], a, !0),
            Ze(),
            (e = i.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: e, isDehydrated: !1, cache: i.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = z0(l, t, e, a);
              break l;
            } else if (e !== u) {
              ((u = nt(Error(h(424)), t)), Be(u), (t = z0(l, t, e, a)));
              break l;
            } else
              for (
                l = t.stateNode.containerInfo,
                  l.nodeType === 9
                    ? (l = l.body)
                    : (l = l.nodeName === "HTML" ? l.ownerDocument.body : l),
                  hl = mt(l.firstChild),
                  Yl = t,
                  I = !0,
                  Ea = null,
                  bt = !0,
                  a = c0(t, null, e, a),
                  t.child = a;
                a;
              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
          else {
            if ((He(), e === u)) {
              t = Bt(l, t, a);
              break l;
            }
            Ml(l, t, e, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          nn(l, t),
          l === null
            ? (a = Ho(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : I ||
                ((a = t.type),
                (l = t.pendingProps),
                (e = xn(Q.current).createElement(a)),
                (e[Nl] = t),
                (e[Gl] = l),
                _l(e, a, l),
                Tl(e),
                (t.stateNode = e))
            : (t.memoizedState = Ho(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Bn(t),
          l === null &&
            I &&
            ((e = t.stateNode = Uo(t.type, t.pendingProps, Q.current)),
            (Yl = t),
            (bt = !0),
            (u = hl),
            ia(t.type) ? ((Xc = u), (hl = mt(e.firstChild))) : (hl = u)),
          Ml(l, t, t.pendingProps.children, a),
          nn(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            I &&
            ((u = e = hl) &&
              ((e = n1(e, t.type, t.pendingProps, bt)),
              e !== null
                ? ((t.stateNode = e),
                  (Yl = t),
                  (hl = mt(e.firstChild)),
                  (bt = !1),
                  (u = !0))
                : (u = !1)),
            u || Aa(t)),
          Bn(t),
          (u = t.type),
          (n = t.pendingProps),
          (i = l !== null ? l.memoizedProps : null),
          (e = n.children),
          qc(u, n) ? (e = null) : i !== null && qc(u, i) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((u = Bi(l, t, Ed, null, null, a)), (ru._currentValue = u)),
          nn(l, t),
          Ml(l, t, e, a),
          t.child
        );
      case 6:
        return (
          l === null &&
            I &&
            ((l = a = hl) &&
              ((a = i1(a, t.pendingProps, bt)),
              a !== null
                ? ((t.stateNode = a), (Yl = t), (hl = null), (l = !0))
                : (l = !1)),
            l || Aa(t)),
          null
        );
      case 13:
        return M0(l, t, a);
      case 4:
        return (
          ol(t, t.stateNode.containerInfo),
          (e = t.pendingProps),
          l === null ? (t.child = ne(t, null, e, a)) : Ml(l, t, e, a),
          t.child
        );
      case 11:
        return S0(l, t, t.type, t.pendingProps, a);
      case 7:
        return (Ml(l, t, t.pendingProps, a), t.child);
      case 8:
        return (Ml(l, t, t.pendingProps.children, a), t.child);
      case 12:
        return (Ml(l, t, t.pendingProps.children, a), t.child);
      case 10:
        return (
          (e = t.pendingProps),
          Kt(t, t.type, e.value),
          Ml(l, t, e.children, a),
          t.child
        );
      case 9:
        return (
          (u = t.type._context),
          (e = t.pendingProps.children),
          Ma(t),
          (u = Hl(u)),
          (e = e(u)),
          (t.flags |= 1),
          Ml(l, t, e, a),
          t.child
        );
      case 14:
        return b0(l, t, t.type, t.pendingProps, a);
      case 15:
        return p0(l, t, t.type, t.pendingProps, a);
      case 19:
        return _0(l, t, a);
      case 31:
        return (
          (e = t.pendingProps),
          (a = t.mode),
          (e = { mode: e.mode, children: e.children }),
          l === null
            ? ((a = cn(e, a)),
              (a.ref = t.ref),
              (t.child = a),
              (a.return = t),
              (t = a))
            : ((a = _t(l.child, e)),
              (a.ref = t.ref),
              (t.child = a),
              (a.return = t),
              (t = a)),
          t
        );
      case 22:
        return x0(l, t, a);
      case 24:
        return (
          Ma(t),
          (e = Hl(pl)),
          l === null
            ? ((u = Mi()),
              u === null &&
                ((u = sl),
                (n = Ai()),
                (u.pooledCache = n),
                n.refCount++,
                n !== null && (u.pooledCacheLanes |= a),
                (u = n)),
              (t.memoizedState = { parent: e, cache: u }),
              _i(t),
              Kt(t, pl, u))
            : ((l.lanes & a) !== 0 && (Di(l, t), Ve(t, null, null, a), Ze()),
              (u = l.memoizedState),
              (n = t.memoizedState),
              u.parent !== e
                ? ((u = { parent: e, cache: e }),
                  (t.memoizedState = u),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = u),
                  Kt(t, pl, e))
                : ((e = n.cache),
                  Kt(t, pl, e),
                  e !== u.cache && Ei(t, [pl], a, !0))),
          Ml(l, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(h(156, t.tag));
  }
  function qt(l) {
    l.flags |= 4;
  }
  function R0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !Go(t))) {
      if (
        ((t = st.current),
        t !== null &&
          ((W & 4194048) === W
            ? pt !== null
            : ((W & 62914560) !== W && (W & 536870912) === 0) || t !== pt))
      )
        throw ((Xe = Oi), hs);
      l.flags |= 8192;
    }
  }
  function fn(l, t) {
    (t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? ff() : 536870912), (l.lanes |= t), (se |= t)));
  }
  function $e(l, t) {
    if (!I)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; )
            (t.alternate !== null && (a = t), (t = t.sibling));
          a === null ? (l.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = l.tail;
          for (var e = null; a !== null; )
            (a.alternate !== null && (e = a), (a = a.sibling));
          e === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (e.sibling = null);
      }
  }
  function dl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      a = 0,
      e = 0;
    if (t)
      for (var u = l.child; u !== null; )
        ((a |= u.lanes | u.childLanes),
          (e |= u.subtreeFlags & 65011712),
          (e |= u.flags & 65011712),
          (u.return = l),
          (u = u.sibling));
    else
      for (u = l.child; u !== null; )
        ((a |= u.lanes | u.childLanes),
          (e |= u.subtreeFlags),
          (e |= u.flags),
          (u.return = l),
          (u = u.sibling));
    return ((l.subtreeFlags |= e), (l.childLanes = a), t);
  }
  function jd(l, t, a) {
    var e = t.pendingProps;
    switch ((bi(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (dl(t), null);
      case 1:
        return (dl(t), null);
      case 3:
        return (
          (a = t.stateNode),
          (e = null),
          l !== null && (e = l.memoizedState.cache),
          t.memoizedState.cache !== e && (t.flags |= 2048),
          jt(pl),
          Qt(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (l === null || l.child === null) &&
            (Ne(t)
              ? qt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), fs())),
          dl(t),
          null
        );
      case 26:
        return (
          (a = t.memoizedState),
          l === null
            ? (qt(t),
              a !== null ? (dl(t), R0(t, a)) : (dl(t), (t.flags &= -16777217)))
            : a
              ? a !== l.memoizedState
                ? (qt(t), dl(t), R0(t, a))
                : (dl(t), (t.flags &= -16777217))
              : (l.memoizedProps !== e && qt(t), dl(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        (Su(t), (a = Q.current));
        var u = t.type;
        if (l !== null && t.stateNode != null) l.memoizedProps !== e && qt(t);
        else {
          if (!e) {
            if (t.stateNode === null) throw Error(h(166));
            return (dl(t), null);
          }
          ((l = q.current),
            Ne(t) ? is(t) : ((l = Uo(u, e, a)), (t.stateNode = l), qt(t)));
        }
        return (dl(t), null);
      case 5:
        if ((Su(t), (a = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== e && qt(t);
        else {
          if (!e) {
            if (t.stateNode === null) throw Error(h(166));
            return (dl(t), null);
          }
          if (((l = q.current), Ne(t))) is(t);
          else {
            switch (((u = xn(Q.current)), l)) {
              case 1:
                l = u.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                l = u.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    l = u.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    l = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a,
                    );
                    break;
                  case "script":
                    ((l = u.createElement("div")),
                      (l.innerHTML = "<script><\/script>"),
                      (l = l.removeChild(l.firstChild)));
                    break;
                  case "select":
                    ((l =
                      typeof e.is == "string"
                        ? u.createElement("select", { is: e.is })
                        : u.createElement("select")),
                      e.multiple
                        ? (l.multiple = !0)
                        : e.size && (l.size = e.size));
                    break;
                  default:
                    l =
                      typeof e.is == "string"
                        ? u.createElement(a, { is: e.is })
                        : u.createElement(a);
                }
            }
            ((l[Nl] = t), (l[Gl] = e));
            l: for (u = t.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) l.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                ((u.child.return = u), (u = u.child));
                continue;
              }
              if (u === t) break l;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === t) break l;
                u = u.return;
              }
              ((u.sibling.return = u.return), (u = u.sibling));
            }
            t.stateNode = l;
            l: switch ((_l(l, a, e), a)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!e.autoFocus;
                break l;
              case "img":
                l = !0;
                break l;
              default:
                l = !1;
            }
            l && qt(t);
          }
        }
        return (dl(t), (t.flags &= -16777217), null);
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== e && qt(t);
        else {
          if (typeof e != "string" && t.stateNode === null) throw Error(h(166));
          if (((l = Q.current), Ne(t))) {
            if (
              ((l = t.stateNode),
              (a = t.memoizedProps),
              (e = null),
              (u = Yl),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  e = u.memoizedProps;
              }
            ((l[Nl] = t),
              (l = !!(
                l.nodeValue === a ||
                (e !== null && e.suppressHydrationWarning === !0) ||
                Ao(l.nodeValue, a)
              )),
              l || Aa(t));
          } else
            ((l = xn(l).createTextNode(e)), (l[Nl] = t), (t.stateNode = l));
        }
        return (dl(t), null);
      case 13:
        if (
          ((e = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((u = Ne(t)), e !== null && e.dehydrated !== null)) {
            if (l === null) {
              if (!u) throw Error(h(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(h(317));
              u[Nl] = t;
            } else
              (He(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (dl(t), (u = !1));
          } else
            ((u = fs()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = u),
              (u = !0));
          if (!u) return t.flags & 256 ? (Ht(t), t) : (Ht(t), null);
        }
        if ((Ht(t), (t.flags & 128) !== 0)) return ((t.lanes = a), t);
        if (
          ((a = e !== null), (l = l !== null && l.memoizedState !== null), a)
        ) {
          ((e = t.child),
            (u = null),
            e.alternate !== null &&
              e.alternate.memoizedState !== null &&
              e.alternate.memoizedState.cachePool !== null &&
              (u = e.alternate.memoizedState.cachePool.pool));
          var n = null;
          (e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
            n !== u && (e.flags |= 2048));
        }
        return (
          a !== l && a && (t.child.flags |= 8192),
          fn(t, t.updateQueue),
          dl(t),
          null
        );
      case 4:
        return (Qt(), l === null && Uc(t.stateNode.containerInfo), dl(t), null);
      case 10:
        return (jt(t.type), dl(t), null);
      case 19:
        if ((O(xl), (u = t.memoizedState), u === null)) return (dl(t), null);
        if (((e = (t.flags & 128) !== 0), (n = u.rendering), n === null))
          if (e) $e(u, !1);
          else {
            if (yl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((n = an(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      $e(u, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      fn(t, l),
                      t.subtreeFlags = 0,
                      l = a,
                      a = t.child;
                    a !== null;
                  )
                    (us(a, l), (a = a.sibling));
                  return (z(xl, (xl.current & 1) | 2), t.child);
                }
                l = l.sibling;
              }
            u.tail !== null &&
              St() > rn &&
              ((t.flags |= 128), (e = !0), $e(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!e)
            if (((l = an(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (e = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                fn(t, l),
                $e(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !n.alternate &&
                  !I)
              )
                return (dl(t), null);
            } else
              2 * St() - u.renderingStartTime > rn &&
                a !== 536870912 &&
                ((t.flags |= 128), (e = !0), $e(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = u.last),
              l !== null ? (l.sibling = n) : (t.child = n),
              (u.last = n));
        }
        return u.tail !== null
          ? ((t = u.tail),
            (u.rendering = t),
            (u.tail = t.sibling),
            (u.renderingStartTime = St()),
            (t.sibling = null),
            (l = xl.current),
            z(xl, e ? (l & 1) | 2 : l & 1),
            t)
          : (dl(t), null);
      case 22:
      case 23:
        return (
          Ht(t),
          Ni(),
          (e = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== e && (t.flags |= 8192)
            : e && (t.flags |= 8192),
          e
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (dl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : dl(t),
          (a = t.updateQueue),
          a !== null && fn(t, a.retryQueue),
          (a = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (a = l.memoizedState.cachePool.pool),
          (e = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (e = t.memoizedState.cachePool.pool),
          e !== a && (t.flags |= 2048),
          l !== null && O(Oa),
          null
        );
      case 24:
        return (
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          jt(pl),
          dl(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(h(156, t.tag));
  }
  function Nd(l, t) {
    switch ((bi(t), t.tag)) {
      case 1:
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          jt(pl),
          Qt(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Su(t), null);
      case 13:
        if (
          (Ht(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(h(340));
          He();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return (O(xl), null);
      case 4:
        return (Qt(), null);
      case 10:
        return (jt(t.type), null);
      case 22:
      case 23:
        return (
          Ht(t),
          Ni(),
          l !== null && O(Oa),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return (jt(pl), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function U0(l, t) {
    switch ((bi(t), t.tag)) {
      case 3:
        (jt(pl), Qt());
        break;
      case 26:
      case 27:
      case 5:
        Su(t);
        break;
      case 4:
        Qt();
        break;
      case 13:
        Ht(t);
        break;
      case 19:
        O(xl);
        break;
      case 10:
        jt(t.type);
        break;
      case 22:
      case 23:
        (Ht(t), Ni(), l !== null && O(Oa));
        break;
      case 24:
        jt(pl);
    }
  }
  function Fe(l, t) {
    try {
      var a = t.updateQueue,
        e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var u = e.next;
        a = u;
        do {
          if ((a.tag & l) === l) {
            e = void 0;
            var n = a.create,
              i = a.inst;
            ((e = n()), (i.destroy = e));
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (c) {
      cl(t, t.return, c);
    }
  }
  function It(l, t, a) {
    try {
      var e = t.updateQueue,
        u = e !== null ? e.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        e = n;
        do {
          if ((e.tag & l) === l) {
            var i = e.inst,
              c = i.destroy;
            if (c !== void 0) {
              ((i.destroy = void 0), (u = t));
              var f = a,
                y = c;
              try {
                y();
              } catch (S) {
                cl(u, f, S);
              }
            }
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (S) {
      cl(t, t.return, S);
    }
  }
  function j0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        bs(t, a);
      } catch (e) {
        cl(l, l.return, e);
      }
    }
  }
  function N0(l, t, a) {
    ((a.props = Da(l.type, l.memoizedProps)), (a.state = l.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (e) {
      cl(l, t, e);
    }
  }
  function Ie(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var e = l.stateNode;
            break;
          case 30:
            e = l.stateNode;
            break;
          default:
            e = l.stateNode;
        }
        typeof a == "function" ? (l.refCleanup = a(e)) : (a.current = e);
      }
    } catch (u) {
      cl(l, t, u);
    }
  }
  function xt(l, t) {
    var a = l.ref,
      e = l.refCleanup;
    if (a !== null)
      if (typeof e == "function")
        try {
          e();
        } catch (u) {
          cl(l, t, u);
        } finally {
          ((l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (u) {
          cl(l, t, u);
        }
      else a.current = null;
  }
  function H0(l) {
    var t = l.type,
      a = l.memoizedProps,
      e = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break l;
        case "img":
          a.src ? (e.src = a.src) : a.srcSet && (e.srcset = a.srcSet);
      }
    } catch (u) {
      cl(l, l.return, u);
    }
  }
  function cc(l, t, a) {
    try {
      var e = l.stateNode;
      (l1(e, l.type, a, t), (e[Gl] = t));
    } catch (u) {
      cl(l, l.return, u);
    }
  }
  function B0(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && ia(l.type)) ||
      l.tag === 4
    );
  }
  function fc(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || B0(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;
      ) {
        if (
          (l.tag === 27 && ia(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        ((l.child.return = l), (l = l.child));
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function sc(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      ((l = l.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(l, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a),
            t.appendChild(l),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = pn)));
    else if (
      e !== 4 &&
      (e === 27 && ia(l.type) && ((a = l.stateNode), (t = null)),
      (l = l.child),
      l !== null)
    )
      for (sc(l, t, a), l = l.sibling; l !== null; )
        (sc(l, t, a), (l = l.sibling));
  }
  function sn(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      ((l = l.stateNode), t ? a.insertBefore(l, t) : a.appendChild(l));
    else if (
      e !== 4 &&
      (e === 27 && ia(l.type) && (a = l.stateNode), (l = l.child), l !== null)
    )
      for (sn(l, t, a), l = l.sibling; l !== null; )
        (sn(l, t, a), (l = l.sibling));
  }
  function q0(l) {
    var t = l.stateNode,
      a = l.memoizedProps;
    try {
      for (var e = l.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      (_l(t, e, a), (t[Nl] = l), (t[Gl] = a));
    } catch (n) {
      cl(l, l.return, n);
    }
  }
  var Yt = !1,
    gl = !1,
    oc = !1,
    Y0 = typeof WeakSet == "function" ? WeakSet : Set,
    Al = null;
  function Hd(l, t) {
    if (((l = l.containerInfo), (Hc = On), (l = Wf(l)), fi(l))) {
      if ("selectionStart" in l)
        var a = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          a = ((a = l.ownerDocument) && a.defaultView) || window;
          var e = a.getSelection && a.getSelection();
          if (e && e.rangeCount !== 0) {
            a = e.anchorNode;
            var u = e.anchorOffset,
              n = e.focusNode;
            e = e.focusOffset;
            try {
              (a.nodeType, n.nodeType);
            } catch {
              a = null;
              break l;
            }
            var i = 0,
              c = -1,
              f = -1,
              y = 0,
              S = 0,
              x = l,
              m = null;
            t: for (;;) {
              for (
                var g;
                x !== a || (u !== 0 && x.nodeType !== 3) || (c = i + u),
                  x !== n || (e !== 0 && x.nodeType !== 3) || (f = i + e),
                  x.nodeType === 3 && (i += x.nodeValue.length),
                  (g = x.firstChild) !== null;
              )
                ((m = x), (x = g));
              for (;;) {
                if (x === l) break t;
                if (
                  (m === a && ++y === u && (c = i),
                  m === n && ++S === e && (f = i),
                  (g = x.nextSibling) !== null)
                )
                  break;
                ((x = m), (m = x.parentNode));
              }
              x = g;
            }
            a = c === -1 || f === -1 ? null : { start: c, end: f };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Bc = { focusedElem: l, selectionRange: a }, On = !1, Al = t;
      Al !== null;
    )
      if (
        ((t = Al), (l = t.child), (t.subtreeFlags & 1024) !== 0 && l !== null)
      )
        ((l.return = t), (Al = l));
      else
        for (; Al !== null; ) {
          switch (((t = Al), (n = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                ((l = void 0),
                  (a = t),
                  (u = n.memoizedProps),
                  (n = n.memoizedState),
                  (e = a.stateNode));
                try {
                  var X = Da(a.type, u, a.elementType === a.type);
                  ((l = e.getSnapshotBeforeUpdate(X, n)),
                    (e.__reactInternalSnapshotBeforeUpdate = l));
                } catch (Y) {
                  cl(a, a.return, Y);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (a = l.nodeType), a === 9)
                )
                  Cc(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Cc(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(h(163));
          }
          if (((l = t.sibling), l !== null)) {
            ((l.return = t.return), (Al = l));
            break;
          }
          Al = t.return;
        }
  }
  function C0(l, t, a) {
    var e = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (Pt(l, a), e & 4 && Fe(5, a));
        break;
      case 1:
        if ((Pt(l, a), e & 4))
          if (((l = a.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (i) {
              cl(a, a.return, i);
            }
          else {
            var u = Da(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              cl(a, a.return, i);
            }
          }
        (e & 64 && j0(a), e & 512 && Ie(a, a.return));
        break;
      case 3:
        if ((Pt(l, a), e & 64 && ((l = a.updateQueue), l !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            bs(l, t);
          } catch (i) {
            cl(a, a.return, i);
          }
        }
        break;
      case 27:
        t === null && e & 4 && q0(a);
      case 26:
      case 5:
        (Pt(l, a), t === null && e & 4 && H0(a), e & 512 && Ie(a, a.return));
        break;
      case 12:
        Pt(l, a);
        break;
      case 13:
        (Pt(l, a),
          e & 4 && Q0(l, a),
          e & 64 &&
            ((l = a.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((a = Vd.bind(null, a)), c1(l, a)))));
        break;
      case 22:
        if (((e = a.memoizedState !== null || Yt), !e)) {
          ((t = (t !== null && t.memoizedState !== null) || gl), (u = Yt));
          var n = gl;
          ((Yt = e),
            (gl = t) && !n ? la(l, a, (a.subtreeFlags & 8772) !== 0) : Pt(l, a),
            (Yt = u),
            (gl = n));
        }
        break;
      case 30:
        break;
      default:
        Pt(l, a);
    }
  }
  function G0(l) {
    var t = l.alternate;
    (t !== null && ((l.alternate = null), G0(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && Vn(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null));
  }
  var rl = null,
    Zl = !1;
  function Ct(l, t, a) {
    for (a = a.child; a !== null; ) (X0(l, t, a), (a = a.sibling));
  }
  function X0(l, t, a) {
    if (Wl && typeof Wl.onCommitFiberUnmount == "function")
      try {
        Wl.onCommitFiberUnmount(be, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (gl || xt(a, t),
          Ct(l, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        gl || xt(a, t);
        var e = rl,
          u = Zl;
        (ia(a.type) && ((rl = a.stateNode), (Zl = !1)),
          Ct(l, t, a),
          cu(a.stateNode),
          (rl = e),
          (Zl = u));
        break;
      case 5:
        gl || xt(a, t);
      case 6:
        if (
          ((e = rl),
          (u = Zl),
          (rl = null),
          Ct(l, t, a),
          (rl = e),
          (Zl = u),
          rl !== null)
        )
          if (Zl)
            try {
              (rl.nodeType === 9
                ? rl.body
                : rl.nodeName === "HTML"
                  ? rl.ownerDocument.body
                  : rl
              ).removeChild(a.stateNode);
            } catch (n) {
              cl(a, t, n);
            }
          else
            try {
              rl.removeChild(a.stateNode);
            } catch (n) {
              cl(a, t, n);
            }
        break;
      case 18:
        rl !== null &&
          (Zl
            ? ((l = rl),
              Do(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                    ? l.ownerDocument.body
                    : l,
                a.stateNode,
              ),
              vu(l))
            : Do(rl, a.stateNode));
        break;
      case 4:
        ((e = rl),
          (u = Zl),
          (rl = a.stateNode.containerInfo),
          (Zl = !0),
          Ct(l, t, a),
          (rl = e),
          (Zl = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (gl || It(2, a, t), gl || It(4, a, t), Ct(l, t, a));
        break;
      case 1:
        (gl ||
          (xt(a, t),
          (e = a.stateNode),
          typeof e.componentWillUnmount == "function" && N0(a, t, e)),
          Ct(l, t, a));
        break;
      case 21:
        Ct(l, t, a);
        break;
      case 22:
        ((gl = (e = gl) || a.memoizedState !== null), Ct(l, t, a), (gl = e));
        break;
      default:
        Ct(l, t, a);
    }
  }
  function Q0(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        vu(l);
      } catch (a) {
        cl(t, t.return, a);
      }
  }
  function Bd(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var t = l.stateNode;
        return (t === null && (t = l.stateNode = new Y0()), t);
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new Y0()),
          t
        );
      default:
        throw Error(h(435, l.tag));
    }
  }
  function rc(l, t) {
    var a = Bd(l);
    t.forEach(function (e) {
      var u = Ld.bind(null, l, e);
      a.has(e) || (a.add(e), e.then(u, u));
    });
  }
  function Il(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var e = 0; e < a.length; e++) {
        var u = a[e],
          n = l,
          i = t,
          c = i;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (ia(c.type)) {
                ((rl = c.stateNode), (Zl = !1));
                break l;
              }
              break;
            case 5:
              ((rl = c.stateNode), (Zl = !1));
              break l;
            case 3:
            case 4:
              ((rl = c.stateNode.containerInfo), (Zl = !0));
              break l;
          }
          c = c.return;
        }
        if (rl === null) throw Error(h(160));
        (X0(n, i, u),
          (rl = null),
          (Zl = !1),
          (n = u.alternate),
          n !== null && (n.return = null),
          (u.return = null));
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) (Z0(t, l), (t = t.sibling));
  }
  var vt = null;
  function Z0(l, t) {
    var a = l.alternate,
      e = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Il(t, l),
          Pl(l),
          e & 4 && (It(3, l, l.return), Fe(3, l), It(5, l, l.return)));
        break;
      case 1:
        (Il(t, l),
          Pl(l),
          e & 512 && (gl || a === null || xt(a, a.return)),
          e & 64 &&
            Yt &&
            ((l = l.updateQueue),
            l !== null &&
              ((e = l.callbacks),
              e !== null &&
                ((a = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = a === null ? e : a.concat(e))))));
        break;
      case 26:
        var u = vt;
        if (
          (Il(t, l),
          Pl(l),
          e & 512 && (gl || a === null || xt(a, a.return)),
          e & 4)
        ) {
          var n = a !== null ? a.memoizedState : null;
          if (((e = l.memoizedState), a === null))
            if (e === null)
              if (l.stateNode === null) {
                l: {
                  ((e = l.type),
                    (a = l.memoizedProps),
                    (u = u.ownerDocument || u));
                  t: switch (e) {
                    case "title":
                      ((n = u.getElementsByTagName("title")[0]),
                        (!n ||
                          n[Te] ||
                          n[Nl] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = u.createElement(e)),
                          u.head.insertBefore(
                            n,
                            u.querySelector("head > title"),
                          )),
                        _l(n, e, a),
                        (n[Nl] = l),
                        Tl(n),
                        (e = n));
                      break l;
                    case "link":
                      var i = Yo("link", "href", u).get(e + (a.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (
                            ((n = i[c]),
                            n.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              n.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              n.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              n.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      ((n = u.createElement(e)),
                        _l(n, e, a),
                        u.head.appendChild(n));
                      break;
                    case "meta":
                      if (
                        (i = Yo("meta", "content", u).get(
                          e + (a.content || ""),
                        ))
                      ) {
                        for (c = 0; c < i.length; c++)
                          if (
                            ((n = i[c]),
                            n.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              n.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              n.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              n.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      ((n = u.createElement(e)),
                        _l(n, e, a),
                        u.head.appendChild(n));
                      break;
                    default:
                      throw Error(h(468, e));
                  }
                  ((n[Nl] = l), Tl(n), (e = n));
                }
                l.stateNode = e;
              } else Co(u, l.type, l.stateNode);
            else l.stateNode = qo(u, e, l.memoizedProps);
          else
            n !== e
              ? (n === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : n.count--,
                e === null
                  ? Co(u, l.type, l.stateNode)
                  : qo(u, e, l.memoizedProps))
              : e === null &&
                l.stateNode !== null &&
                cc(l, l.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (Il(t, l),
          Pl(l),
          e & 512 && (gl || a === null || xt(a, a.return)),
          a !== null && e & 4 && cc(l, l.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          (Il(t, l),
          Pl(l),
          e & 512 && (gl || a === null || xt(a, a.return)),
          l.flags & 32)
        ) {
          u = l.stateNode;
          try {
            Qa(u, "");
          } catch (g) {
            cl(l, l.return, g);
          }
        }
        (e & 4 &&
          l.stateNode != null &&
          ((u = l.memoizedProps), cc(l, u, a !== null ? a.memoizedProps : u)),
          e & 1024 && (oc = !0));
        break;
      case 6:
        if ((Il(t, l), Pl(l), e & 4)) {
          if (l.stateNode === null) throw Error(h(162));
          ((e = l.memoizedProps), (a = l.stateNode));
          try {
            a.nodeValue = e;
          } catch (g) {
            cl(l, l.return, g);
          }
        }
        break;
      case 3:
        if (
          ((An = null),
          (u = vt),
          (vt = Tn(t.containerInfo)),
          Il(t, l),
          (vt = u),
          Pl(l),
          e & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            vu(t.containerInfo);
          } catch (g) {
            cl(l, l.return, g);
          }
        oc && ((oc = !1), V0(l));
        break;
      case 4:
        ((e = vt),
          (vt = Tn(l.stateNode.containerInfo)),
          Il(t, l),
          Pl(l),
          (vt = e));
        break;
      case 12:
        (Il(t, l), Pl(l));
        break;
      case 13:
        (Il(t, l),
          Pl(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (gc = St()),
          e & 4 &&
            ((e = l.updateQueue),
            e !== null && ((l.updateQueue = null), rc(l, e))));
        break;
      case 22:
        u = l.memoizedState !== null;
        var f = a !== null && a.memoizedState !== null,
          y = Yt,
          S = gl;
        if (
          ((Yt = y || u),
          (gl = S || f),
          Il(t, l),
          (gl = S),
          (Yt = y),
          Pl(l),
          e & 8192)
        )
          l: for (
            t = l.stateNode,
              t._visibility = u ? t._visibility & -2 : t._visibility | 1,
              u && (a === null || f || Yt || gl || Ra(l)),
              a = null,
              t = l;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                f = a = t;
                try {
                  if (((n = f.stateNode), u))
                    ((i = n.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"));
                  else {
                    c = f.stateNode;
                    var x = f.memoizedProps.style,
                      m =
                        x != null && x.hasOwnProperty("display")
                          ? x.display
                          : null;
                    c.style.display =
                      m == null || typeof m == "boolean" ? "" : ("" + m).trim();
                  }
                } catch (g) {
                  cl(f, f.return, g);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                f = t;
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (g) {
                  cl(f, f.return, g);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              (a === t && (a = null), (t = t.return));
            }
            (a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        e & 4 &&
          ((e = l.updateQueue),
          e !== null &&
            ((a = e.retryQueue),
            a !== null && ((e.retryQueue = null), rc(l, a))));
        break;
      case 19:
        (Il(t, l),
          Pl(l),
          e & 4 &&
            ((e = l.updateQueue),
            e !== null && ((l.updateQueue = null), rc(l, e))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Il(t, l), Pl(l));
    }
  }
  function Pl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, e = l.return; e !== null; ) {
          if (B0(e)) {
            a = e;
            break;
          }
          e = e.return;
        }
        if (a == null) throw Error(h(160));
        switch (a.tag) {
          case 27:
            var u = a.stateNode,
              n = fc(l);
            sn(l, n, u);
            break;
          case 5:
            var i = a.stateNode;
            a.flags & 32 && (Qa(i, ""), (a.flags &= -33));
            var c = fc(l);
            sn(l, c, i);
            break;
          case 3:
          case 4:
            var f = a.stateNode.containerInfo,
              y = fc(l);
            sc(l, y, f);
            break;
          default:
            throw Error(h(161));
        }
      } catch (S) {
        cl(l, l.return, S);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function V0(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        (V0(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling));
      }
  }
  function Pt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (C0(l, t.alternate, t), (t = t.sibling));
  }
  function Ra(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (It(4, t, t.return), Ra(t));
          break;
        case 1:
          xt(t, t.return);
          var a = t.stateNode;
          (typeof a.componentWillUnmount == "function" && N0(t, t.return, a),
            Ra(t));
          break;
        case 27:
          cu(t.stateNode);
        case 26:
        case 5:
          (xt(t, t.return), Ra(t));
          break;
        case 22:
          t.memoizedState === null && Ra(t);
          break;
        case 30:
          Ra(t);
          break;
        default:
          Ra(t);
      }
      l = l.sibling;
    }
  }
  function la(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var e = t.alternate,
        u = l,
        n = t,
        i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (la(u, n, a), Fe(4, n));
          break;
        case 1:
          if (
            (la(u, n, a),
            (e = n),
            (u = e.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (y) {
              cl(e, e.return, y);
            }
          if (((e = n), (u = e.updateQueue), u !== null)) {
            var c = e.stateNode;
            try {
              var f = u.shared.hiddenCallbacks;
              if (f !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++)
                  Ss(f[u], c);
            } catch (y) {
              cl(e, e.return, y);
            }
          }
          (a && i & 64 && j0(n), Ie(n, n.return));
          break;
        case 27:
          q0(n);
        case 26:
        case 5:
          (la(u, n, a), a && e === null && i & 4 && H0(n), Ie(n, n.return));
          break;
        case 12:
          la(u, n, a);
          break;
        case 13:
          (la(u, n, a), a && i & 4 && Q0(u, n));
          break;
        case 22:
          (n.memoizedState === null && la(u, n, a), Ie(n, n.return));
          break;
        case 30:
          break;
        default:
          la(u, n, a);
      }
      t = t.sibling;
    }
  }
  function dc(l, t) {
    var a = null;
    (l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (a = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== a && (l != null && l.refCount++, a != null && Ye(a)));
  }
  function hc(l, t) {
    ((l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && Ye(l)));
  }
  function Tt(l, t, a, e) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (L0(l, t, a, e), (t = t.sibling));
  }
  function L0(l, t, a, e) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Tt(l, t, a, e), u & 2048 && Fe(9, t));
        break;
      case 1:
        Tt(l, t, a, e);
        break;
      case 3:
        (Tt(l, t, a, e),
          u & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && Ye(l))));
        break;
      case 12:
        if (u & 2048) {
          (Tt(l, t, a, e), (l = t.stateNode));
          try {
            var n = t.memoizedProps,
              i = n.id,
              c = n.onPostCommit;
            typeof c == "function" &&
              c(
                i,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0,
              );
          } catch (f) {
            cl(t, t.return, f);
          }
        } else Tt(l, t, a, e);
        break;
      case 13:
        Tt(l, t, a, e);
        break;
      case 23:
        break;
      case 22:
        ((n = t.stateNode),
          (i = t.alternate),
          t.memoizedState !== null
            ? n._visibility & 2
              ? Tt(l, t, a, e)
              : Pe(l, t)
            : n._visibility & 2
              ? Tt(l, t, a, e)
              : ((n._visibility |= 2),
                ie(l, t, a, e, (t.subtreeFlags & 10256) !== 0)),
          u & 2048 && dc(i, t));
        break;
      case 24:
        (Tt(l, t, a, e), u & 2048 && hc(t.alternate, t));
        break;
      default:
        Tt(l, t, a, e);
    }
  }
  function ie(l, t, a, e, u) {
    for (u = u && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var n = l,
        i = t,
        c = a,
        f = e,
        y = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (ie(n, i, c, f, u), Fe(8, i));
          break;
        case 23:
          break;
        case 22:
          var S = i.stateNode;
          (i.memoizedState !== null
            ? S._visibility & 2
              ? ie(n, i, c, f, u)
              : Pe(n, i)
            : ((S._visibility |= 2), ie(n, i, c, f, u)),
            u && y & 2048 && dc(i.alternate, i));
          break;
        case 24:
          (ie(n, i, c, f, u), u && y & 2048 && hc(i.alternate, i));
          break;
        default:
          ie(n, i, c, f, u);
      }
      t = t.sibling;
    }
  }
  function Pe(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l,
          e = t,
          u = e.flags;
        switch (e.tag) {
          case 22:
            (Pe(a, e), u & 2048 && dc(e.alternate, e));
            break;
          case 24:
            (Pe(a, e), u & 2048 && hc(e.alternate, e));
            break;
          default:
            Pe(a, e);
        }
        t = t.sibling;
      }
  }
  var lu = 8192;
  function ce(l) {
    if (l.subtreeFlags & lu)
      for (l = l.child; l !== null; ) (K0(l), (l = l.sibling));
  }
  function K0(l) {
    switch (l.tag) {
      case 26:
        (ce(l),
          l.flags & lu &&
            l.memoizedState !== null &&
            p1(vt, l.memoizedState, l.memoizedProps));
        break;
      case 5:
        ce(l);
        break;
      case 3:
      case 4:
        var t = vt;
        ((vt = Tn(l.stateNode.containerInfo)), ce(l), (vt = t));
        break;
      case 22:
        l.memoizedState === null &&
          ((t = l.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = lu), (lu = 16777216), ce(l), (lu = t))
            : ce(l));
        break;
      default:
        ce(l);
    }
  }
  function J0(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do ((t = l.sibling), (l.sibling = null), (l = t));
      while (l !== null);
    }
  }
  function tu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var e = t[a];
          ((Al = e), W0(e, l));
        }
      J0(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) (w0(l), (l = l.sibling));
  }
  function w0(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (tu(l), l.flags & 2048 && It(9, l, l.return));
        break;
      case 3:
        tu(l);
        break;
      case 12:
        tu(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), on(l))
          : tu(l);
        break;
      default:
        tu(l);
    }
  }
  function on(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var e = t[a];
          ((Al = e), W0(e, l));
        }
      J0(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          (It(8, t, t.return), on(t));
          break;
        case 22:
          ((a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), on(t)));
          break;
        default:
          on(t);
      }
      l = l.sibling;
    }
  }
  function W0(l, t) {
    for (; Al !== null; ) {
      var a = Al;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          It(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var e = a.memoizedState.cachePool.pool;
            e != null && e.refCount++;
          }
          break;
        case 24:
          Ye(a.memoizedState.cache);
      }
      if (((e = a.child), e !== null)) ((e.return = a), (Al = e));
      else
        l: for (a = l; Al !== null; ) {
          e = Al;
          var u = e.sibling,
            n = e.return;
          if ((G0(e), e === a)) {
            Al = null;
            break l;
          }
          if (u !== null) {
            ((u.return = n), (Al = u));
            break l;
          }
          Al = n;
        }
    }
  }
  var qd = {
      getCacheForType: function (l) {
        var t = Hl(pl),
          a = t.data.get(l);
        return (a === void 0 && ((a = l()), t.data.set(l, a)), a);
      },
    },
    Yd = typeof WeakMap == "function" ? WeakMap : Map,
    ll = 0,
    sl = null,
    K = null,
    W = 0,
    tl = 0,
    lt = null,
    ta = !1,
    fe = !1,
    yc = !1,
    Gt = 0,
    yl = 0,
    aa = 0,
    Ua = 0,
    vc = 0,
    ot = 0,
    se = 0,
    au = null,
    Vl = null,
    mc = !1,
    gc = 0,
    rn = 1 / 0,
    dn = null,
    ea = null,
    Ol = 0,
    ua = null,
    oe = null,
    re = 0,
    Sc = 0,
    bc = null,
    k0 = null,
    eu = 0,
    pc = null;
  function tt() {
    if ((ll & 2) !== 0 && W !== 0) return W & -W;
    if (b.T !== null) {
      var l = Ia;
      return l !== 0 ? l : Oc();
    }
    return rf();
  }
  function $0() {
    ot === 0 && (ot = (W & 536870912) === 0 || I ? cf() : 536870912);
    var l = st.current;
    return (l !== null && (l.flags |= 32), ot);
  }
  function at(l, t, a) {
    (((l === sl && (tl === 2 || tl === 9)) || l.cancelPendingCommit !== null) &&
      (de(l, 0), na(l, W, ot, !1)),
      xe(l, a),
      ((ll & 2) === 0 || l !== sl) &&
        (l === sl &&
          ((ll & 2) === 0 && (Ua |= a), yl === 4 && na(l, W, ot, !1)),
        Et(l)));
  }
  function F0(l, t, a) {
    if ((ll & 6) !== 0) throw Error(h(327));
    var e = (!a && (t & 124) === 0 && (t & l.expiredLanes) === 0) || pe(l, t),
      u = e ? Xd(l, t) : Ec(l, t, !0),
      n = e;
    do {
      if (u === 0) {
        fe && !e && na(l, t, 0, !1);
        break;
      } else {
        if (((a = l.current.alternate), n && !Cd(a))) {
          ((u = Ec(l, t, !1)), (n = !1));
          continue;
        }
        if (u === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var i = 0;
          else
            ((i = l.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
          if (i !== 0) {
            t = i;
            l: {
              var c = l;
              u = au;
              var f = c.current.memoizedState.isDehydrated;
              if ((f && (de(c, i).flags |= 256), (i = Ec(c, i, !1)), i !== 2)) {
                if (yc && !f) {
                  ((c.errorRecoveryDisabledLanes |= n), (Ua |= n), (u = 4));
                  break l;
                }
                ((n = Vl),
                  (Vl = u),
                  n !== null &&
                    (Vl === null ? (Vl = n) : Vl.push.apply(Vl, n)));
              }
              u = i;
            }
            if (((n = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          (de(l, 0), na(l, t, 0, !0));
          break;
        }
        l: {
          switch (((e = l), (n = u), n)) {
            case 0:
            case 1:
              throw Error(h(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              na(e, t, ot, !ta);
              break l;
            case 2:
              Vl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(h(329));
          }
          if ((t & 62914560) === t && ((u = gc + 300 - St()), 10 < u)) {
            if ((na(e, t, ot, !ta), Tu(e, 0, !0) !== 0)) break l;
            e.timeoutHandle = Oo(
              I0.bind(null, e, a, Vl, dn, mc, t, ot, Ua, se, ta, n, 2, -0, 0),
              u,
            );
            break l;
          }
          I0(e, a, Vl, dn, mc, t, ot, Ua, se, ta, n, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Et(l);
  }
  function I0(l, t, a, e, u, n, i, c, f, y, S, x, m, g) {
    if (
      ((l.timeoutHandle = -1),
      (x = t.subtreeFlags),
      (x & 8192 || (x & 16785408) === 16785408) &&
        ((ou = { stylesheets: null, count: 0, unsuspend: b1 }),
        K0(t),
        (x = x1()),
        x !== null))
    ) {
      ((l.cancelPendingCommit = x(
        no.bind(null, l, t, n, a, e, u, i, c, f, S, 1, m, g),
      )),
        na(l, n, i, !y));
      return;
    }
    no(l, t, n, a, e, u, i, c, f);
  }
  function Cd(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var e = 0; e < a.length; e++) {
          var u = a[e],
            n = u.getSnapshot;
          u = u.value;
          try {
            if (!$l(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        ((a.return = t), (t = a));
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function na(l, t, a, e) {
    ((t &= ~vc),
      (t &= ~Ua),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      e && (l.warmLanes |= t),
      (e = l.expirationTimes));
    for (var u = t; 0 < u; ) {
      var n = 31 - kl(u),
        i = 1 << n;
      ((e[n] = -1), (u &= ~i));
    }
    a !== 0 && sf(l, a, t);
  }
  function hn() {
    return (ll & 6) === 0 ? (uu(0), !1) : !0;
  }
  function xc() {
    if (K !== null) {
      if (tl === 0) var l = K.return;
      else ((l = K), (Ut = za = null), Ci(l), (ue = null), (We = 0), (l = K));
      for (; l !== null; ) (U0(l.alternate, l), (l = l.return));
      K = null;
    }
  }
  function de(l, t) {
    var a = l.timeoutHandle;
    (a !== -1 && ((l.timeoutHandle = -1), a1(a)),
      (a = l.cancelPendingCommit),
      a !== null && ((l.cancelPendingCommit = null), a()),
      xc(),
      (sl = l),
      (K = a = _t(l.current, null)),
      (W = t),
      (tl = 0),
      (lt = null),
      (ta = !1),
      (fe = pe(l, t)),
      (yc = !1),
      (se = ot = vc = Ua = aa = yl = 0),
      (Vl = au = null),
      (mc = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var e = l.entangledLanes;
    if (e !== 0)
      for (l = l.entanglements, e &= t; 0 < e; ) {
        var u = 31 - kl(e),
          n = 1 << u;
        ((t |= l[u]), (e &= ~n));
      }
    return ((Gt = t), Hu(), a);
  }
  function P0(l, t) {
    ((V = null),
      (b.H = Pu),
      t === Ge || t === Vu
        ? ((t = ms()), (tl = 3))
        : t === hs
          ? ((t = ms()), (tl = 4))
          : (tl =
              t === g0
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (lt = t),
      K === null && ((yl = 1), un(l, nt(t, l.current))));
  }
  function lo() {
    var l = b.H;
    return ((b.H = Pu), l === null ? Pu : l);
  }
  function to() {
    var l = b.A;
    return ((b.A = qd), l);
  }
  function Tc() {
    ((yl = 4),
      ta || ((W & 4194048) !== W && st.current !== null) || (fe = !0),
      ((aa & 134217727) === 0 && (Ua & 134217727) === 0) ||
        sl === null ||
        na(sl, W, ot, !1));
  }
  function Ec(l, t, a) {
    var e = ll;
    ll |= 2;
    var u = lo(),
      n = to();
    ((sl !== l || W !== t) && ((dn = null), de(l, t)), (t = !1));
    var i = yl;
    l: do
      try {
        if (tl !== 0 && K !== null) {
          var c = K,
            f = lt;
          switch (tl) {
            case 8:
              (xc(), (i = 6));
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              st.current === null && (t = !0);
              var y = tl;
              if (((tl = 0), (lt = null), he(l, c, f, y), a && fe)) {
                i = 0;
                break l;
              }
              break;
            default:
              ((y = tl), (tl = 0), (lt = null), he(l, c, f, y));
          }
        }
        (Gd(), (i = yl));
        break;
      } catch (S) {
        P0(l, S);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (Ut = za = null),
      (ll = e),
      (b.H = u),
      (b.A = n),
      K === null && ((sl = null), (W = 0), Hu()),
      i
    );
  }
  function Gd() {
    for (; K !== null; ) ao(K);
  }
  function Xd(l, t) {
    var a = ll;
    ll |= 2;
    var e = lo(),
      u = to();
    sl !== l || W !== t
      ? ((dn = null), (rn = St() + 500), de(l, t))
      : (fe = pe(l, t));
    l: do
      try {
        if (tl !== 0 && K !== null) {
          t = K;
          var n = lt;
          t: switch (tl) {
            case 1:
              ((tl = 0), (lt = null), he(l, t, n, 1));
              break;
            case 2:
            case 9:
              if (ys(n)) {
                ((tl = 0), (lt = null), eo(t));
                break;
              }
              ((t = function () {
                ((tl !== 2 && tl !== 9) || sl !== l || (tl = 7), Et(l));
              }),
                n.then(t, t));
              break l;
            case 3:
              tl = 7;
              break l;
            case 4:
              tl = 5;
              break l;
            case 7:
              ys(n)
                ? ((tl = 0), (lt = null), eo(t))
                : ((tl = 0), (lt = null), he(l, t, n, 7));
              break;
            case 5:
              var i = null;
              switch (K.tag) {
                case 26:
                  i = K.memoizedState;
                case 5:
                case 27:
                  var c = K;
                  if (!i || Go(i)) {
                    ((tl = 0), (lt = null));
                    var f = c.sibling;
                    if (f !== null) K = f;
                    else {
                      var y = c.return;
                      y !== null ? ((K = y), yn(y)) : (K = null);
                    }
                    break t;
                  }
              }
              ((tl = 0), (lt = null), he(l, t, n, 5));
              break;
            case 6:
              ((tl = 0), (lt = null), he(l, t, n, 6));
              break;
            case 8:
              (xc(), (yl = 6));
              break l;
            default:
              throw Error(h(462));
          }
        }
        Qd();
        break;
      } catch (S) {
        P0(l, S);
      }
    while (!0);
    return (
      (Ut = za = null),
      (b.H = e),
      (b.A = u),
      (ll = a),
      K !== null ? 0 : ((sl = null), (W = 0), Hu(), yl)
    );
  }
  function Qd() {
    for (; K !== null && !sr(); ) ao(K);
  }
  function ao(l) {
    var t = D0(l.alternate, l, Gt);
    ((l.memoizedProps = l.pendingProps), t === null ? yn(l) : (K = t));
  }
  function eo(l) {
    var t = l,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = E0(a, t, t.pendingProps, t.type, void 0, W);
        break;
      case 11:
        t = E0(a, t, t.pendingProps, t.type.render, t.ref, W);
        break;
      case 5:
        Ci(t);
      default:
        (U0(a, t), (t = K = us(t, Gt)), (t = D0(a, t, Gt)));
    }
    ((l.memoizedProps = l.pendingProps), t === null ? yn(l) : (K = t));
  }
  function he(l, t, a, e) {
    ((Ut = za = null), Ci(t), (ue = null), (We = 0));
    var u = t.return;
    try {
      if (Rd(l, u, t, a, W)) {
        ((yl = 1), un(l, nt(a, l.current)), (K = null));
        return;
      }
    } catch (n) {
      if (u !== null) throw ((K = u), n);
      ((yl = 1), un(l, nt(a, l.current)), (K = null));
      return;
    }
    t.flags & 32768
      ? (I || e === 1
          ? (l = !0)
          : fe || (W & 536870912) !== 0
            ? (l = !1)
            : ((ta = l = !0),
              (e === 2 || e === 9 || e === 3 || e === 6) &&
                ((e = st.current),
                e !== null && e.tag === 13 && (e.flags |= 16384))),
        uo(t, l))
      : yn(t);
  }
  function yn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        uo(t, ta);
        return;
      }
      l = t.return;
      var a = jd(t.alternate, t, Gt);
      if (a !== null) {
        K = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        K = t;
        return;
      }
      K = t = l;
    } while (t !== null);
    yl === 0 && (yl = 5);
  }
  function uo(l, t) {
    do {
      var a = Nd(l.alternate, l);
      if (a !== null) {
        ((a.flags &= 32767), (K = a));
        return;
      }
      if (
        ((a = l.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        K = l;
        return;
      }
      K = l = a;
    } while (l !== null);
    ((yl = 6), (K = null));
  }
  function no(l, t, a, e, u, n, i, c, f) {
    l.cancelPendingCommit = null;
    do vn();
    while (Ol !== 0);
    if ((ll & 6) !== 0) throw Error(h(327));
    if (t !== null) {
      if (t === l.current) throw Error(h(177));
      if (
        ((n = t.lanes | t.childLanes),
        (n |= hi),
        br(l, a, n, i, c, f),
        l === sl && ((K = sl = null), (W = 0)),
        (oe = t),
        (ua = l),
        (re = a),
        (Sc = n),
        (bc = u),
        (k0 = e),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            Kd(bu, function () {
              return (oo(), null);
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (e = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || e)
      ) {
        ((e = b.T), (b.T = null), (u = M.p), (M.p = 2), (i = ll), (ll |= 4));
        try {
          Hd(l, t, a);
        } finally {
          ((ll = i), (M.p = u), (b.T = e));
        }
      }
      ((Ol = 1), io(), co(), fo());
    }
  }
  function io() {
    if (Ol === 1) {
      Ol = 0;
      var l = ua,
        t = oe,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ((a = b.T), (b.T = null));
        var e = M.p;
        M.p = 2;
        var u = ll;
        ll |= 4;
        try {
          Z0(t, l);
          var n = Bc,
            i = Wf(l.containerInfo),
            c = n.focusedElem,
            f = n.selectionRange;
          if (
            i !== c &&
            c &&
            c.ownerDocument &&
            wf(c.ownerDocument.documentElement, c)
          ) {
            if (f !== null && fi(c)) {
              var y = f.start,
                S = f.end;
              if ((S === void 0 && (S = y), "selectionStart" in c))
                ((c.selectionStart = y),
                  (c.selectionEnd = Math.min(S, c.value.length)));
              else {
                var x = c.ownerDocument || document,
                  m = (x && x.defaultView) || window;
                if (m.getSelection) {
                  var g = m.getSelection(),
                    X = c.textContent.length,
                    Y = Math.min(f.start, X),
                    nl = f.end === void 0 ? Y : Math.min(f.end, X);
                  !g.extend && Y > nl && ((i = nl), (nl = Y), (Y = i));
                  var r = Jf(c, Y),
                    o = Jf(c, nl);
                  if (
                    r &&
                    o &&
                    (g.rangeCount !== 1 ||
                      g.anchorNode !== r.node ||
                      g.anchorOffset !== r.offset ||
                      g.focusNode !== o.node ||
                      g.focusOffset !== o.offset)
                  ) {
                    var d = x.createRange();
                    (d.setStart(r.node, r.offset),
                      g.removeAllRanges(),
                      Y > nl
                        ? (g.addRange(d), g.extend(o.node, o.offset))
                        : (d.setEnd(o.node, o.offset), g.addRange(d)));
                  }
                }
              }
            }
            for (x = [], g = c; (g = g.parentNode); )
              g.nodeType === 1 &&
                x.push({ element: g, left: g.scrollLeft, top: g.scrollTop });
            for (
              typeof c.focus == "function" && c.focus(), c = 0;
              c < x.length;
              c++
            ) {
              var p = x[c];
              ((p.element.scrollLeft = p.left), (p.element.scrollTop = p.top));
            }
          }
          ((On = !!Hc), (Bc = Hc = null));
        } finally {
          ((ll = u), (M.p = e), (b.T = a));
        }
      }
      ((l.current = t), (Ol = 2));
    }
  }
  function co() {
    if (Ol === 2) {
      Ol = 0;
      var l = ua,
        t = oe,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        ((a = b.T), (b.T = null));
        var e = M.p;
        M.p = 2;
        var u = ll;
        ll |= 4;
        try {
          C0(l, t.alternate, t);
        } finally {
          ((ll = u), (M.p = e), (b.T = a));
        }
      }
      Ol = 3;
    }
  }
  function fo() {
    if (Ol === 4 || Ol === 3) {
      ((Ol = 0), or());
      var l = ua,
        t = oe,
        a = re,
        e = k0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Ol = 5)
        : ((Ol = 0), (oe = ua = null), so(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (
        (u === 0 && (ea = null),
        Qn(a),
        (t = t.stateNode),
        Wl && typeof Wl.onCommitFiberRoot == "function")
      )
        try {
          Wl.onCommitFiberRoot(be, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (e !== null) {
        ((t = b.T), (u = M.p), (M.p = 2), (b.T = null));
        try {
          for (var n = l.onRecoverableError, i = 0; i < e.length; i++) {
            var c = e[i];
            n(c.value, { componentStack: c.stack });
          }
        } finally {
          ((b.T = t), (M.p = u));
        }
      }
      ((re & 3) !== 0 && vn(),
        Et(l),
        (u = l.pendingLanes),
        (a & 4194090) !== 0 && (u & 42) !== 0
          ? l === pc
            ? eu++
            : ((eu = 0), (pc = l))
          : (eu = 0),
        uu(0));
    }
  }
  function so(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), Ye(t)));
  }
  function vn(l) {
    return (io(), co(), fo(), oo());
  }
  function oo() {
    if (Ol !== 5) return !1;
    var l = ua,
      t = Sc;
    Sc = 0;
    var a = Qn(re),
      e = b.T,
      u = M.p;
    try {
      ((M.p = 32 > a ? 32 : a), (b.T = null), (a = bc), (bc = null));
      var n = ua,
        i = re;
      if (((Ol = 0), (oe = ua = null), (re = 0), (ll & 6) !== 0))
        throw Error(h(331));
      var c = ll;
      if (
        ((ll |= 4),
        w0(n.current),
        L0(n, n.current, i, a),
        (ll = c),
        uu(0, !1),
        Wl && typeof Wl.onPostCommitFiberRoot == "function")
      )
        try {
          Wl.onPostCommitFiberRoot(be, n);
        } catch {}
      return !0;
    } finally {
      ((M.p = u), (b.T = e), so(l, t));
    }
  }
  function ro(l, t, a) {
    ((t = nt(a, t)),
      (t = Ii(l.stateNode, t, 2)),
      (l = Wt(l, t, 2)),
      l !== null && (xe(l, 2), Et(l)));
  }
  function cl(l, t, a) {
    if (l.tag === 3) ro(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ro(t, l, a);
          break;
        } else if (t.tag === 1) {
          var e = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof e.componentDidCatch == "function" &&
              (ea === null || !ea.has(e)))
          ) {
            ((l = nt(a, l)),
              (a = v0(2)),
              (e = Wt(t, a, 2)),
              e !== null && (m0(a, e, t, l), xe(e, 2), Et(e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ac(l, t, a) {
    var e = l.pingCache;
    if (e === null) {
      e = l.pingCache = new Yd();
      var u = new Set();
      e.set(t, u);
    } else ((u = e.get(t)), u === void 0 && ((u = new Set()), e.set(t, u)));
    u.has(a) ||
      ((yc = !0), u.add(a), (l = Zd.bind(null, l, t, a)), t.then(l, l));
  }
  function Zd(l, t, a) {
    var e = l.pingCache;
    (e !== null && e.delete(t),
      (l.pingedLanes |= l.suspendedLanes & a),
      (l.warmLanes &= ~a),
      sl === l &&
        (W & a) === a &&
        (yl === 4 || (yl === 3 && (W & 62914560) === W && 300 > St() - gc)
          ? (ll & 2) === 0 && de(l, 0)
          : (vc |= a),
        se === W && (se = 0)),
      Et(l));
  }
  function ho(l, t) {
    (t === 0 && (t = ff()), (l = Wa(l, t)), l !== null && (xe(l, t), Et(l)));
  }
  function Vd(l) {
    var t = l.memoizedState,
      a = 0;
    (t !== null && (a = t.retryLane), ho(l, a));
  }
  function Ld(l, t) {
    var a = 0;
    switch (l.tag) {
      case 13:
        var e = l.stateNode,
          u = l.memoizedState;
        u !== null && (a = u.retryLane);
        break;
      case 19:
        e = l.stateNode;
        break;
      case 22:
        e = l.stateNode._retryCache;
        break;
      default:
        throw Error(h(314));
    }
    (e !== null && e.delete(t), ho(l, a));
  }
  function Kd(l, t) {
    return Yn(l, t);
  }
  var mn = null,
    ye = null,
    zc = !1,
    gn = !1,
    Mc = !1,
    ja = 0;
  function Et(l) {
    (l !== ye &&
      l.next === null &&
      (ye === null ? (mn = ye = l) : (ye = ye.next = l)),
      (gn = !0),
      zc || ((zc = !0), wd()));
  }
  function uu(l, t) {
    if (!Mc && gn) {
      Mc = !0;
      do
        for (var a = !1, e = mn; e !== null; ) {
          if (l !== 0) {
            var u = e.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = e.suspendedLanes,
                c = e.pingedLanes;
              ((n = (1 << (31 - kl(42 | l) + 1)) - 1),
                (n &= u & ~(i & ~c)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0));
            }
            n !== 0 && ((a = !0), go(e, n));
          } else
            ((n = W),
              (n = Tu(
                e,
                e === sl ? n : 0,
                e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
              )),
              (n & 3) === 0 || pe(e, n) || ((a = !0), go(e, n)));
          e = e.next;
        }
      while (a);
      Mc = !1;
    }
  }
  function Jd() {
    yo();
  }
  function yo() {
    gn = zc = !1;
    var l = 0;
    ja !== 0 && (t1() && (l = ja), (ja = 0));
    for (var t = St(), a = null, e = mn; e !== null; ) {
      var u = e.next,
        n = vo(e, t);
      (n === 0
        ? ((e.next = null),
          a === null ? (mn = u) : (a.next = u),
          u === null && (ye = a))
        : ((a = e), (l !== 0 || (n & 3) !== 0) && (gn = !0)),
        (e = u));
    }
    uu(l);
  }
  function vo(l, t) {
    for (
      var a = l.suspendedLanes,
        e = l.pingedLanes,
        u = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;
    ) {
      var i = 31 - kl(n),
        c = 1 << i,
        f = u[i];
      (f === -1
        ? ((c & a) === 0 || (c & e) !== 0) && (u[i] = Sr(c, t))
        : f <= t && (l.expiredLanes |= c),
        (n &= ~c));
    }
    if (
      ((t = sl),
      (a = W),
      (a = Tu(
        l,
        l === t ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      (e = l.callbackNode),
      a === 0 ||
        (l === t && (tl === 2 || tl === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        e !== null && e !== null && Cn(e),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((a & 3) === 0 || pe(l, a)) {
      if (((t = a & -a), t === l.callbackPriority)) return t;
      switch ((e !== null && Cn(e), Qn(a))) {
        case 2:
        case 8:
          a = uf;
          break;
        case 32:
          a = bu;
          break;
        case 268435456:
          a = nf;
          break;
        default:
          a = bu;
      }
      return (
        (e = mo.bind(null, l)),
        (a = Yn(a, e)),
        (l.callbackPriority = t),
        (l.callbackNode = a),
        t
      );
    }
    return (
      e !== null && e !== null && Cn(e),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function mo(l, t) {
    if (Ol !== 0 && Ol !== 5)
      return ((l.callbackNode = null), (l.callbackPriority = 0), null);
    var a = l.callbackNode;
    if (vn() && l.callbackNode !== a) return null;
    var e = W;
    return (
      (e = Tu(
        l,
        l === sl ? e : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      e === 0
        ? null
        : (F0(l, e, t),
          vo(l, St()),
          l.callbackNode != null && l.callbackNode === a
            ? mo.bind(null, l)
            : null)
    );
  }
  function go(l, t) {
    if (vn()) return null;
    F0(l, t, !0);
  }
  function wd() {
    e1(function () {
      (ll & 6) !== 0 ? Yn(ef, Jd) : yo();
    });
  }
  function Oc() {
    return (ja === 0 && (ja = cf()), ja);
  }
  function So(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
        ? l
        : Ou("" + l);
  }
  function bo(l, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      l.id && a.setAttribute("form", l.id),
      t.parentNode.insertBefore(a, t),
      (l = new FormData(l)),
      a.parentNode.removeChild(a),
      l
    );
  }
  function Wd(l, t, a, e, u) {
    if (t === "submit" && a && a.stateNode === u) {
      var n = So((u[Gl] || null).action),
        i = e.submitter;
      i &&
        ((t = (t = i[Gl] || null)
          ? So(t.formAction)
          : i.getAttribute("formAction")),
        t !== null && ((n = t), (i = null)));
      var c = new Uu("action", "action", null, e, u);
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (e.defaultPrevented) {
                if (ja !== 0) {
                  var f = i ? bo(u, i) : new FormData(u);
                  wi(
                    a,
                    { pending: !0, data: f, method: u.method, action: n },
                    null,
                    f,
                  );
                }
              } else
                typeof n == "function" &&
                  (c.preventDefault(),
                  (f = i ? bo(u, i) : new FormData(u)),
                  wi(
                    a,
                    { pending: !0, data: f, method: u.method, action: n },
                    n,
                    f,
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var _c = 0; _c < di.length; _c++) {
    var Dc = di[_c],
      kd = Dc.toLowerCase(),
      $d = Dc[0].toUpperCase() + Dc.slice(1);
    yt(kd, "on" + $d);
  }
  (yt(Ff, "onAnimationEnd"),
    yt(If, "onAnimationIteration"),
    yt(Pf, "onAnimationStart"),
    yt("dblclick", "onDoubleClick"),
    yt("focusin", "onFocus"),
    yt("focusout", "onBlur"),
    yt(hd, "onTransitionRun"),
    yt(yd, "onTransitionStart"),
    yt(vd, "onTransitionCancel"),
    yt(ls, "onTransitionEnd"),
    Ca("onMouseEnter", ["mouseout", "mouseover"]),
    Ca("onMouseLeave", ["mouseout", "mouseover"]),
    Ca("onPointerEnter", ["pointerout", "pointerover"]),
    Ca("onPointerLeave", ["pointerout", "pointerover"]),
    ma(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    ma(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    ma("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    ma(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    ma(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    ma(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var nu =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Fd = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(nu),
    );
  function po(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var e = l[a],
        u = e.event;
      e = e.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var i = e.length - 1; 0 <= i; i--) {
            var c = e[i],
              f = c.instance,
              y = c.currentTarget;
            if (((c = c.listener), f !== n && u.isPropagationStopped()))
              break l;
            ((n = c), (u.currentTarget = y));
            try {
              n(u);
            } catch (S) {
              en(S);
            }
            ((u.currentTarget = null), (n = f));
          }
        else
          for (i = 0; i < e.length; i++) {
            if (
              ((c = e[i]),
              (f = c.instance),
              (y = c.currentTarget),
              (c = c.listener),
              f !== n && u.isPropagationStopped())
            )
              break l;
            ((n = c), (u.currentTarget = y));
            try {
              n(u);
            } catch (S) {
              en(S);
            }
            ((u.currentTarget = null), (n = f));
          }
      }
    }
  }
  function J(l, t) {
    var a = t[Zn];
    a === void 0 && (a = t[Zn] = new Set());
    var e = l + "__bubble";
    a.has(e) || (xo(t, l, 2, !1), a.add(e));
  }
  function Rc(l, t, a) {
    var e = 0;
    (t && (e |= 4), xo(a, l, e, t));
  }
  var Sn = "_reactListening" + Math.random().toString(36).slice(2);
  function Uc(l) {
    if (!l[Sn]) {
      ((l[Sn] = !0),
        hf.forEach(function (a) {
          a !== "selectionchange" && (Fd.has(a) || Rc(a, !1, l), Rc(a, !0, l));
        }));
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Sn] || ((t[Sn] = !0), Rc("selectionchange", !1, t));
    }
  }
  function xo(l, t, a, e) {
    switch (Ko(t)) {
      case 2:
        var u = A1;
        break;
      case 8:
        u = z1;
        break;
      default:
        u = Kc;
    }
    ((a = u.bind(null, t, a, l)),
      (u = void 0),
      !Pn ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (u = !0),
      e
        ? u !== void 0
          ? l.addEventListener(t, a, { capture: !0, passive: u })
          : l.addEventListener(t, a, !0)
        : u !== void 0
          ? l.addEventListener(t, a, { passive: u })
          : l.addEventListener(t, a, !1));
  }
  function jc(l, t, a, e, u) {
    var n = e;
    if ((t & 1) === 0 && (t & 2) === 0 && e !== null)
      l: for (;;) {
        if (e === null) return;
        var i = e.tag;
        if (i === 3 || i === 4) {
          var c = e.stateNode.containerInfo;
          if (c === u) break;
          if (i === 4)
            for (i = e.return; i !== null; ) {
              var f = i.tag;
              if ((f === 3 || f === 4) && i.stateNode.containerInfo === u)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (((i = Ba(c)), i === null)) return;
            if (((f = i.tag), f === 5 || f === 6 || f === 26 || f === 27)) {
              e = n = i;
              continue l;
            }
            c = c.parentNode;
          }
        }
        e = e.return;
      }
    Of(function () {
      var y = n,
        S = Fn(a),
        x = [];
      l: {
        var m = ts.get(l);
        if (m !== void 0) {
          var g = Uu,
            X = l;
          switch (l) {
            case "keypress":
              if (Du(a) === 0) break l;
            case "keydown":
            case "keyup":
              g = Kr;
              break;
            case "focusin":
              ((X = "focus"), (g = ei));
              break;
            case "focusout":
              ((X = "blur"), (g = ei));
              break;
            case "beforeblur":
            case "afterblur":
              g = ei;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = Rf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = Nr;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = Wr;
              break;
            case Ff:
            case If:
            case Pf:
              g = qr;
              break;
            case ls:
              g = $r;
              break;
            case "scroll":
            case "scrollend":
              g = Ur;
              break;
            case "wheel":
              g = Ir;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = Cr;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = jf;
              break;
            case "toggle":
            case "beforetoggle":
              g = ld;
          }
          var Y = (t & 4) !== 0,
            nl = !Y && (l === "scroll" || l === "scrollend"),
            r = Y ? (m !== null ? m + "Capture" : null) : m;
          Y = [];
          for (var o = y, d; o !== null; ) {
            var p = o;
            if (
              ((d = p.stateNode),
              (p = p.tag),
              (p !== 5 && p !== 26 && p !== 27) ||
                d === null ||
                r === null ||
                ((p = Ae(o, r)), p != null && Y.push(iu(o, p, d))),
              nl)
            )
              break;
            o = o.return;
          }
          0 < Y.length &&
            ((m = new g(m, X, null, a, S)), x.push({ event: m, listeners: Y }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((m = l === "mouseover" || l === "pointerover"),
            (g = l === "mouseout" || l === "pointerout"),
            m &&
              a !== $n &&
              (X = a.relatedTarget || a.fromElement) &&
              (Ba(X) || X[Ha]))
          )
            break l;
          if (
            (g || m) &&
            ((m =
              S.window === S
                ? S
                : (m = S.ownerDocument)
                  ? m.defaultView || m.parentWindow
                  : window),
            g
              ? ((X = a.relatedTarget || a.toElement),
                (g = y),
                (X = X ? Ba(X) : null),
                X !== null &&
                  ((nl = B(X)),
                  (Y = X.tag),
                  X !== nl || (Y !== 5 && Y !== 27 && Y !== 6)) &&
                  (X = null))
              : ((g = null), (X = y)),
            g !== X)
          ) {
            if (
              ((Y = Rf),
              (p = "onMouseLeave"),
              (r = "onMouseEnter"),
              (o = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((Y = jf),
                (p = "onPointerLeave"),
                (r = "onPointerEnter"),
                (o = "pointer")),
              (nl = g == null ? m : Ee(g)),
              (d = X == null ? m : Ee(X)),
              (m = new Y(p, o + "leave", g, a, S)),
              (m.target = nl),
              (m.relatedTarget = d),
              (p = null),
              Ba(S) === y &&
                ((Y = new Y(r, o + "enter", X, a, S)),
                (Y.target = d),
                (Y.relatedTarget = nl),
                (p = Y)),
              (nl = p),
              g && X)
            )
              t: {
                for (Y = g, r = X, o = 0, d = Y; d; d = ve(d)) o++;
                for (d = 0, p = r; p; p = ve(p)) d++;
                for (; 0 < o - d; ) ((Y = ve(Y)), o--);
                for (; 0 < d - o; ) ((r = ve(r)), d--);
                for (; o--; ) {
                  if (Y === r || (r !== null && Y === r.alternate)) break t;
                  ((Y = ve(Y)), (r = ve(r)));
                }
                Y = null;
              }
            else Y = null;
            (g !== null && To(x, m, g, Y, !1),
              X !== null && nl !== null && To(x, nl, X, Y, !0));
          }
        }
        l: {
          if (
            ((m = y ? Ee(y) : window),
            (g = m.nodeName && m.nodeName.toLowerCase()),
            g === "select" || (g === "input" && m.type === "file"))
          )
            var _ = Xf;
          else if (Cf(m))
            if (Qf) _ = od;
            else {
              _ = fd;
              var L = cd;
            }
          else
            ((g = m.nodeName),
              !g ||
              g.toLowerCase() !== "input" ||
              (m.type !== "checkbox" && m.type !== "radio")
                ? y && kn(y.elementType) && (_ = Xf)
                : (_ = sd));
          if (_ && (_ = _(l, y))) {
            Gf(x, _, a, S);
            break l;
          }
          (L && L(l, m, y),
            l === "focusout" &&
              y &&
              m.type === "number" &&
              y.memoizedProps.value != null &&
              Wn(m, "number", m.value));
        }
        switch (((L = y ? Ee(y) : window), l)) {
          case "focusin":
            (Cf(L) || L.contentEditable === "true") &&
              ((Ka = L), (si = y), (je = null));
            break;
          case "focusout":
            je = si = Ka = null;
            break;
          case "mousedown":
            oi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((oi = !1), kf(x, a, S));
            break;
          case "selectionchange":
            if (dd) break;
          case "keydown":
          case "keyup":
            kf(x, a, S);
        }
        var N;
        if (ni)
          l: {
            switch (l) {
              case "compositionstart":
                var C = "onCompositionStart";
                break l;
              case "compositionend":
                C = "onCompositionEnd";
                break l;
              case "compositionupdate":
                C = "onCompositionUpdate";
                break l;
            }
            C = void 0;
          }
        else
          La
            ? qf(l, a) && (C = "onCompositionEnd")
            : l === "keydown" &&
              a.keyCode === 229 &&
              (C = "onCompositionStart");
        (C &&
          (Nf &&
            a.locale !== "ko" &&
            (La || C !== "onCompositionStart"
              ? C === "onCompositionEnd" && La && (N = _f())
              : ((Lt = S),
                (li = "value" in Lt ? Lt.value : Lt.textContent),
                (La = !0))),
          (L = bn(y, C)),
          0 < L.length &&
            ((C = new Uf(C, l, null, a, S)),
            x.push({ event: C, listeners: L }),
            N ? (C.data = N) : ((N = Yf(a)), N !== null && (C.data = N)))),
          (N = ad ? ed(l, a) : ud(l, a)) &&
            ((C = bn(y, "onBeforeInput")),
            0 < C.length &&
              ((L = new Uf("onBeforeInput", "beforeinput", null, a, S)),
              x.push({ event: L, listeners: C }),
              (L.data = N))),
          Wd(x, l, y, a, S));
      }
      po(x, t);
    });
  }
  function iu(l, t, a) {
    return { instance: l, listener: t, currentTarget: a };
  }
  function bn(l, t) {
    for (var a = t + "Capture", e = []; l !== null; ) {
      var u = l,
        n = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          n === null ||
          ((u = Ae(l, a)),
          u != null && e.unshift(iu(l, u, n)),
          (u = Ae(l, t)),
          u != null && e.push(iu(l, u, n))),
        l.tag === 3)
      )
        return e;
      l = l.return;
    }
    return [];
  }
  function ve(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function To(l, t, a, e, u) {
    for (var n = t._reactName, i = []; a !== null && a !== e; ) {
      var c = a,
        f = c.alternate,
        y = c.stateNode;
      if (((c = c.tag), f !== null && f === e)) break;
      ((c !== 5 && c !== 26 && c !== 27) ||
        y === null ||
        ((f = y),
        u
          ? ((y = Ae(a, n)), y != null && i.unshift(iu(a, y, f)))
          : u || ((y = Ae(a, n)), y != null && i.push(iu(a, y, f)))),
        (a = a.return));
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var Id = /\r\n?/g,
    Pd = /\u0000|\uFFFD/g;
  function Eo(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        Id,
        `
`,
      )
      .replace(Pd, "");
  }
  function Ao(l, t) {
    return ((t = Eo(t)), Eo(l) === t);
  }
  function pn() {}
  function ul(l, t, a, e, u, n) {
    switch (a) {
      case "children":
        typeof e == "string"
          ? t === "body" || (t === "textarea" && e === "") || Qa(l, e)
          : (typeof e == "number" || typeof e == "bigint") &&
            t !== "body" &&
            Qa(l, "" + e);
        break;
      case "className":
        Au(l, "class", e);
        break;
      case "tabIndex":
        Au(l, "tabindex", e);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Au(l, a, e);
        break;
      case "style":
        zf(l, e, n);
        break;
      case "data":
        if (t !== "object") {
          Au(l, "data", e);
          break;
        }
      case "src":
      case "href":
        if (e === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (
          e == null ||
          typeof e == "function" ||
          typeof e == "symbol" ||
          typeof e == "boolean"
        ) {
          l.removeAttribute(a);
          break;
        }
        ((e = Ou("" + e)), l.setAttribute(a, e));
        break;
      case "action":
      case "formAction":
        if (typeof e == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof n == "function" &&
            (a === "formAction"
              ? (t !== "input" && ul(l, t, "name", u.name, u, null),
                ul(l, t, "formEncType", u.formEncType, u, null),
                ul(l, t, "formMethod", u.formMethod, u, null),
                ul(l, t, "formTarget", u.formTarget, u, null))
              : (ul(l, t, "encType", u.encType, u, null),
                ul(l, t, "method", u.method, u, null),
                ul(l, t, "target", u.target, u, null)));
        if (e == null || typeof e == "symbol" || typeof e == "boolean") {
          l.removeAttribute(a);
          break;
        }
        ((e = Ou("" + e)), l.setAttribute(a, e));
        break;
      case "onClick":
        e != null && (l.onclick = pn);
        break;
      case "onScroll":
        e != null && J("scroll", l);
        break;
      case "onScrollEnd":
        e != null && J("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(h(61));
          if (((a = e.__html), a != null)) {
            if (u.children != null) throw Error(h(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "muted":
        l.muted = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          e == null ||
          typeof e == "function" ||
          typeof e == "boolean" ||
          typeof e == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        ((a = Ou("" + e)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        e != null && typeof e != "function" && typeof e != "symbol"
          ? l.setAttribute(a, "" + e)
          : l.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        e && typeof e != "function" && typeof e != "symbol"
          ? l.setAttribute(a, "")
          : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        e === !0
          ? l.setAttribute(a, "")
          : e !== !1 &&
              e != null &&
              typeof e != "function" &&
              typeof e != "symbol"
            ? l.setAttribute(a, e)
            : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        e != null &&
        typeof e != "function" &&
        typeof e != "symbol" &&
        !isNaN(e) &&
        1 <= e
          ? l.setAttribute(a, e)
          : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        e == null || typeof e == "function" || typeof e == "symbol" || isNaN(e)
          ? l.removeAttribute(a)
          : l.setAttribute(a, e);
        break;
      case "popover":
        (J("beforetoggle", l), J("toggle", l), Eu(l, "popover", e));
        break;
      case "xlinkActuate":
        Mt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", e);
        break;
      case "xlinkArcrole":
        Mt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", e);
        break;
      case "xlinkRole":
        Mt(l, "http://www.w3.org/1999/xlink", "xlink:role", e);
        break;
      case "xlinkShow":
        Mt(l, "http://www.w3.org/1999/xlink", "xlink:show", e);
        break;
      case "xlinkTitle":
        Mt(l, "http://www.w3.org/1999/xlink", "xlink:title", e);
        break;
      case "xlinkType":
        Mt(l, "http://www.w3.org/1999/xlink", "xlink:type", e);
        break;
      case "xmlBase":
        Mt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", e);
        break;
      case "xmlLang":
        Mt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", e);
        break;
      case "xmlSpace":
        Mt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", e);
        break;
      case "is":
        Eu(l, "is", e);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = Dr.get(a) || a), Eu(l, a, e));
    }
  }
  function Nc(l, t, a, e, u, n) {
    switch (a) {
      case "style":
        zf(l, e, n);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(h(61));
          if (((a = e.__html), a != null)) {
            if (u.children != null) throw Error(h(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof e == "string"
          ? Qa(l, e)
          : (typeof e == "number" || typeof e == "bigint") && Qa(l, "" + e);
        break;
      case "onScroll":
        e != null && J("scroll", l);
        break;
      case "onScrollEnd":
        e != null && J("scrollend", l);
        break;
      case "onClick":
        e != null && (l.onclick = pn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!yf.hasOwnProperty(a))
          l: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((u = a.endsWith("Capture")),
              (t = a.slice(2, u ? a.length - 7 : void 0)),
              (n = l[Gl] || null),
              (n = n != null ? n[a] : null),
              typeof n == "function" && l.removeEventListener(t, n, u),
              typeof e == "function")
            ) {
              (typeof n != "function" &&
                n !== null &&
                (a in l
                  ? (l[a] = null)
                  : l.hasAttribute(a) && l.removeAttribute(a)),
                l.addEventListener(t, e, u));
              break l;
            }
            a in l
              ? (l[a] = e)
              : e === !0
                ? l.setAttribute(a, "")
                : Eu(l, a, e);
          }
    }
  }
  function _l(l, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (J("error", l), J("load", l));
        var e = !1,
          u = !1,
          n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var i = a[n];
            if (i != null)
              switch (n) {
                case "src":
                  e = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(h(137, t));
                default:
                  ul(l, t, n, i, a, null);
              }
          }
        (u && ul(l, t, "srcSet", a.srcSet, a, null),
          e && ul(l, t, "src", a.src, a, null));
        return;
      case "input":
        J("invalid", l);
        var c = (n = i = u = null),
          f = null,
          y = null;
        for (e in a)
          if (a.hasOwnProperty(e)) {
            var S = a[e];
            if (S != null)
              switch (e) {
                case "name":
                  u = S;
                  break;
                case "type":
                  i = S;
                  break;
                case "checked":
                  f = S;
                  break;
                case "defaultChecked":
                  y = S;
                  break;
                case "value":
                  n = S;
                  break;
                case "defaultValue":
                  c = S;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null) throw Error(h(137, t));
                  break;
                default:
                  ul(l, t, e, S, a, null);
              }
          }
        (xf(l, n, c, f, y, i, u, !1), zu(l));
        return;
      case "select":
        (J("invalid", l), (e = i = n = null));
        for (u in a)
          if (a.hasOwnProperty(u) && ((c = a[u]), c != null))
            switch (u) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                e = c;
              default:
                ul(l, t, u, c, a, null);
            }
        ((t = n),
          (a = i),
          (l.multiple = !!e),
          t != null ? Xa(l, !!e, t, !1) : a != null && Xa(l, !!e, a, !0));
        return;
      case "textarea":
        (J("invalid", l), (n = u = e = null));
        for (i in a)
          if (a.hasOwnProperty(i) && ((c = a[i]), c != null))
            switch (i) {
              case "value":
                e = c;
                break;
              case "defaultValue":
                u = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(h(91));
                break;
              default:
                ul(l, t, i, c, a, null);
            }
        (Ef(l, e, u, n), zu(l));
        return;
      case "option":
        for (f in a)
          a.hasOwnProperty(f) &&
            ((e = a[f]), e != null) &&
            (f === "selected"
              ? (l.selected =
                  e && typeof e != "function" && typeof e != "symbol")
              : ul(l, t, f, e, a, null));
        return;
      case "dialog":
        (J("beforetoggle", l), J("toggle", l), J("cancel", l), J("close", l));
        break;
      case "iframe":
      case "object":
        J("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < nu.length; e++) J(nu[e], l);
        break;
      case "image":
        (J("error", l), J("load", l));
        break;
      case "details":
        J("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        (J("error", l), J("load", l));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (y in a)
          if (a.hasOwnProperty(y) && ((e = a[y]), e != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(h(137, t));
              default:
                ul(l, t, y, e, a, null);
            }
        return;
      default:
        if (kn(t)) {
          for (S in a)
            a.hasOwnProperty(S) &&
              ((e = a[S]), e !== void 0 && Nc(l, t, S, e, a, void 0));
          return;
        }
    }
    for (c in a)
      a.hasOwnProperty(c) && ((e = a[c]), e != null && ul(l, t, c, e, a, null));
  }
  function l1(l, t, a, e) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          n = null,
          i = null,
          c = null,
          f = null,
          y = null,
          S = null;
        for (g in a) {
          var x = a[g];
          if (a.hasOwnProperty(g) && x != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = x;
              default:
                e.hasOwnProperty(g) || ul(l, t, g, null, e, x);
            }
        }
        for (var m in e) {
          var g = e[m];
          if (((x = a[m]), e.hasOwnProperty(m) && (g != null || x != null)))
            switch (m) {
              case "type":
                n = g;
                break;
              case "name":
                u = g;
                break;
              case "checked":
                y = g;
                break;
              case "defaultChecked":
                S = g;
                break;
              case "value":
                i = g;
                break;
              case "defaultValue":
                c = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(h(137, t));
                break;
              default:
                g !== x && ul(l, t, m, g, e, x);
            }
        }
        wn(l, i, c, f, y, S, n, u);
        return;
      case "select":
        g = i = c = m = null;
        for (n in a)
          if (((f = a[n]), a.hasOwnProperty(n) && f != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                g = f;
              default:
                e.hasOwnProperty(n) || ul(l, t, n, null, e, f);
            }
        for (u in e)
          if (
            ((n = e[u]),
            (f = a[u]),
            e.hasOwnProperty(u) && (n != null || f != null))
          )
            switch (u) {
              case "value":
                m = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                i = n;
              default:
                n !== f && ul(l, t, u, n, e, f);
            }
        ((t = c),
          (a = i),
          (e = g),
          m != null
            ? Xa(l, !!a, m, !1)
            : !!e != !!a &&
              (t != null ? Xa(l, !!a, t, !0) : Xa(l, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        g = m = null;
        for (c in a)
          if (
            ((u = a[c]),
            a.hasOwnProperty(c) && u != null && !e.hasOwnProperty(c))
          )
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                ul(l, t, c, null, e, u);
            }
        for (i in e)
          if (
            ((u = e[i]),
            (n = a[i]),
            e.hasOwnProperty(i) && (u != null || n != null))
          )
            switch (i) {
              case "value":
                m = u;
                break;
              case "defaultValue":
                g = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(h(91));
                break;
              default:
                u !== n && ul(l, t, i, u, e, n);
            }
        Tf(l, m, g);
        return;
      case "option":
        for (var X in a)
          ((m = a[X]),
            a.hasOwnProperty(X) &&
              m != null &&
              !e.hasOwnProperty(X) &&
              (X === "selected" ? (l.selected = !1) : ul(l, t, X, null, e, m)));
        for (f in e)
          ((m = e[f]),
            (g = a[f]),
            e.hasOwnProperty(f) &&
              m !== g &&
              (m != null || g != null) &&
              (f === "selected"
                ? (l.selected =
                    m && typeof m != "function" && typeof m != "symbol")
                : ul(l, t, f, m, e, g)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Y in a)
          ((m = a[Y]),
            a.hasOwnProperty(Y) &&
              m != null &&
              !e.hasOwnProperty(Y) &&
              ul(l, t, Y, null, e, m));
        for (y in e)
          if (
            ((m = e[y]),
            (g = a[y]),
            e.hasOwnProperty(y) && m !== g && (m != null || g != null))
          )
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(h(137, t));
                break;
              default:
                ul(l, t, y, m, e, g);
            }
        return;
      default:
        if (kn(t)) {
          for (var nl in a)
            ((m = a[nl]),
              a.hasOwnProperty(nl) &&
                m !== void 0 &&
                !e.hasOwnProperty(nl) &&
                Nc(l, t, nl, void 0, e, m));
          for (S in e)
            ((m = e[S]),
              (g = a[S]),
              !e.hasOwnProperty(S) ||
                m === g ||
                (m === void 0 && g === void 0) ||
                Nc(l, t, S, m, e, g));
          return;
        }
    }
    for (var r in a)
      ((m = a[r]),
        a.hasOwnProperty(r) &&
          m != null &&
          !e.hasOwnProperty(r) &&
          ul(l, t, r, null, e, m));
    for (x in e)
      ((m = e[x]),
        (g = a[x]),
        !e.hasOwnProperty(x) ||
          m === g ||
          (m == null && g == null) ||
          ul(l, t, x, m, e, g));
  }
  var Hc = null,
    Bc = null;
  function xn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function zo(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Mo(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function qc(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Yc = null;
  function t1() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === Yc
        ? !1
        : ((Yc = l), !0)
      : ((Yc = null), !1);
  }
  var Oo = typeof setTimeout == "function" ? setTimeout : void 0,
    a1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    _o = typeof Promise == "function" ? Promise : void 0,
    e1 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof _o < "u"
          ? function (l) {
              return _o.resolve(null).then(l).catch(u1);
            }
          : Oo;
  function u1(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function ia(l) {
    return l === "head";
  }
  function Do(l, t) {
    var a = t,
      e = 0,
      u = 0;
    do {
      var n = a.nextSibling;
      if ((l.removeChild(a), n && n.nodeType === 8))
        if (((a = n.data), a === "/$")) {
          if (0 < e && 8 > e) {
            a = e;
            var i = l.ownerDocument;
            if ((a & 1 && cu(i.documentElement), a & 2 && cu(i.body), a & 4))
              for (a = i.head, cu(a), i = a.firstChild; i; ) {
                var c = i.nextSibling,
                  f = i.nodeName;
                (i[Te] ||
                  f === "SCRIPT" ||
                  f === "STYLE" ||
                  (f === "LINK" && i.rel.toLowerCase() === "stylesheet") ||
                  a.removeChild(i),
                  (i = c));
              }
          }
          if (u === 0) {
            (l.removeChild(n), vu(t));
            return;
          }
          u--;
        } else
          a === "$" || a === "$?" || a === "$!"
            ? u++
            : (e = a.charCodeAt(0) - 48);
      else e = 0;
      a = n;
    } while (a);
    vu(t);
  }
  function Cc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Cc(a), Vn(a));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function n1(l, t, a, e) {
    for (; l.nodeType === 1; ) {
      var u = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!e && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (e) {
        if (!l[Te])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== u.rel ||
                l.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                l.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                l.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (u.src == null ? null : u.src) ||
                  l.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  l.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = mt(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function i1(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !a) ||
        ((l = mt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Gc(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState === "complete")
    );
  }
  function c1(l, t) {
    var a = l.ownerDocument;
    if (l.data !== "$?" || a.readyState === "complete") t();
    else {
      var e = function () {
        (t(), a.removeEventListener("DOMContentLoaded", e));
      };
      (a.addEventListener("DOMContentLoaded", e), (l._reactRetry = e));
    }
  }
  function mt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return l;
  }
  var Xc = null;
  function Ro(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (t === 0) return l;
          t--;
        } else a === "/$" && t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Uo(l, t, a) {
    switch (((t = xn(a)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(h(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(h(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(h(454));
        return l;
      default:
        throw Error(h(451));
    }
  }
  function cu(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    Vn(l);
  }
  var rt = new Map(),
    jo = new Set();
  function Tn(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
        ? l
        : l.ownerDocument;
  }
  var Xt = M.d;
  M.d = { f: f1, r: s1, D: o1, C: r1, L: d1, m: h1, X: v1, S: y1, M: m1 };
  function f1() {
    var l = Xt.f(),
      t = hn();
    return l || t;
  }
  function s1(l) {
    var t = qa(l);
    t !== null && t.tag === 5 && t.type === "form" ? Fs(t) : Xt.r(l);
  }
  var me = typeof document > "u" ? null : document;
  function No(l, t, a) {
    var e = me;
    if (e && typeof t == "string" && t) {
      var u = ut(t);
      ((u = 'link[rel="' + l + '"][href="' + u + '"]'),
        typeof a == "string" && (u += '[crossorigin="' + a + '"]'),
        jo.has(u) ||
          (jo.add(u),
          (l = { rel: l, crossOrigin: a, href: t }),
          e.querySelector(u) === null &&
            ((t = e.createElement("link")),
            _l(t, "link", l),
            Tl(t),
            e.head.appendChild(t))));
    }
  }
  function o1(l) {
    (Xt.D(l), No("dns-prefetch", l, null));
  }
  function r1(l, t) {
    (Xt.C(l, t), No("preconnect", l, t));
  }
  function d1(l, t, a) {
    Xt.L(l, t, a);
    var e = me;
    if (e && l && t) {
      var u = 'link[rel="preload"][as="' + ut(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((u += '[imagesrcset="' + ut(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (u += '[imagesizes="' + ut(a.imageSizes) + '"]'))
        : (u += '[href="' + ut(l) + '"]');
      var n = u;
      switch (t) {
        case "style":
          n = ge(l);
          break;
        case "script":
          n = Se(l);
      }
      rt.has(n) ||
        ((l = H(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : l,
            as: t,
          },
          a,
        )),
        rt.set(n, l),
        e.querySelector(u) !== null ||
          (t === "style" && e.querySelector(fu(n))) ||
          (t === "script" && e.querySelector(su(n))) ||
          ((t = e.createElement("link")),
          _l(t, "link", l),
          Tl(t),
          e.head.appendChild(t)));
    }
  }
  function h1(l, t) {
    Xt.m(l, t);
    var a = me;
    if (a && l) {
      var e = t && typeof t.as == "string" ? t.as : "script",
        u =
          'link[rel="modulepreload"][as="' + ut(e) + '"][href="' + ut(l) + '"]',
        n = u;
      switch (e) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Se(l);
      }
      if (
        !rt.has(n) &&
        ((l = H({ rel: "modulepreload", href: l }, t)),
        rt.set(n, l),
        a.querySelector(u) === null)
      ) {
        switch (e) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(su(n))) return;
        }
        ((e = a.createElement("link")),
          _l(e, "link", l),
          Tl(e),
          a.head.appendChild(e));
      }
    }
  }
  function y1(l, t, a) {
    Xt.S(l, t, a);
    var e = me;
    if (e && l) {
      var u = Ya(e).hoistableStyles,
        n = ge(l);
      t = t || "default";
      var i = u.get(n);
      if (!i) {
        var c = { loading: 0, preload: null };
        if ((i = e.querySelector(fu(n)))) c.loading = 5;
        else {
          ((l = H({ rel: "stylesheet", href: l, "data-precedence": t }, a)),
            (a = rt.get(n)) && Qc(l, a));
          var f = (i = e.createElement("link"));
          (Tl(f),
            _l(f, "link", l),
            (f._p = new Promise(function (y, S) {
              ((f.onload = y), (f.onerror = S));
            })),
            f.addEventListener("load", function () {
              c.loading |= 1;
            }),
            f.addEventListener("error", function () {
              c.loading |= 2;
            }),
            (c.loading |= 4),
            En(i, t, e));
        }
        ((i = { type: "stylesheet", instance: i, count: 1, state: c }),
          u.set(n, i));
      }
    }
  }
  function v1(l, t) {
    Xt.X(l, t);
    var a = me;
    if (a && l) {
      var e = Ya(a).hoistableScripts,
        u = Se(l),
        n = e.get(u);
      n ||
        ((n = a.querySelector(su(u))),
        n ||
          ((l = H({ src: l, async: !0 }, t)),
          (t = rt.get(u)) && Zc(l, t),
          (n = a.createElement("script")),
          Tl(n),
          _l(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function m1(l, t) {
    Xt.M(l, t);
    var a = me;
    if (a && l) {
      var e = Ya(a).hoistableScripts,
        u = Se(l),
        n = e.get(u);
      n ||
        ((n = a.querySelector(su(u))),
        n ||
          ((l = H({ src: l, async: !0, type: "module" }, t)),
          (t = rt.get(u)) && Zc(l, t),
          (n = a.createElement("script")),
          Tl(n),
          _l(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function Ho(l, t, a, e) {
    var u = (u = Q.current) ? Tn(u) : null;
    if (!u) throw Error(h(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = ge(a.href)),
            (a = Ya(u).hoistableStyles),
            (e = a.get(t)),
            e ||
              ((e = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, e)),
            e)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          l = ge(a.href);
          var n = Ya(u).hoistableStyles,
            i = n.get(l);
          if (
            (i ||
              ((u = u.ownerDocument || u),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, i),
              (n = u.querySelector(fu(l))) &&
                !n._p &&
                ((i.instance = n), (i.state.loading = 5)),
              rt.has(l) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                rt.set(l, a),
                n || g1(u, l, a, i.state))),
            t && e === null)
          )
            throw Error(h(528, ""));
          return i;
        }
        if (t && e !== null) throw Error(h(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Se(a)),
              (a = Ya(u).hoistableScripts),
              (e = a.get(t)),
              e ||
                ((e = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, e)),
              e)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(h(444, l));
    }
  }
  function ge(l) {
    return 'href="' + ut(l) + '"';
  }
  function fu(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Bo(l) {
    return H({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function g1(l, t, a, e) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (e.loading = 1)
      : ((t = l.createElement("link")),
        (e.preload = t),
        t.addEventListener("load", function () {
          return (e.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (e.loading |= 2);
        }),
        _l(t, "link", a),
        Tl(t),
        l.head.appendChild(t));
  }
  function Se(l) {
    return '[src="' + ut(l) + '"]';
  }
  function su(l) {
    return "script[async]" + l;
  }
  function qo(l, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var e = l.querySelector('style[data-href~="' + ut(a.href) + '"]');
          if (e) return ((t.instance = e), Tl(e), e);
          var u = H({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (e = (l.ownerDocument || l).createElement("style")),
            Tl(e),
            _l(e, "style", u),
            En(e, a.precedence, l),
            (t.instance = e)
          );
        case "stylesheet":
          u = ge(a.href);
          var n = l.querySelector(fu(u));
          if (n) return ((t.state.loading |= 4), (t.instance = n), Tl(n), n);
          ((e = Bo(a)),
            (u = rt.get(u)) && Qc(e, u),
            (n = (l.ownerDocument || l).createElement("link")),
            Tl(n));
          var i = n;
          return (
            (i._p = new Promise(function (c, f) {
              ((i.onload = c), (i.onerror = f));
            })),
            _l(n, "link", e),
            (t.state.loading |= 4),
            En(n, a.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = Se(a.src)),
            (u = l.querySelector(su(n)))
              ? ((t.instance = u), Tl(u), u)
              : ((e = a),
                (u = rt.get(n)) && ((e = H({}, a)), Zc(e, u)),
                (l = l.ownerDocument || l),
                (u = l.createElement("script")),
                Tl(u),
                _l(u, "link", e),
                l.head.appendChild(u),
                (t.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(h(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((e = t.instance), (t.state.loading |= 4), En(e, a.precedence, l));
    return t.instance;
  }
  function En(l, t, a) {
    for (
      var e = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        u = e.length ? e[e.length - 1] : null,
        n = u,
        i = 0;
      i < e.length;
      i++
    ) {
      var c = e[i];
      if (c.dataset.precedence === t) n = c;
      else if (n !== u) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(l, t.firstChild));
  }
  function Qc(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title));
  }
  function Zc(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity));
  }
  var An = null;
  function Yo(l, t, a) {
    if (An === null) {
      var e = new Map(),
        u = (An = new Map());
      u.set(a, e);
    } else ((u = An), (e = u.get(a)), e || ((e = new Map()), u.set(a, e)));
    if (e.has(l)) return e;
    for (
      e.set(l, null), a = a.getElementsByTagName(l), u = 0;
      u < a.length;
      u++
    ) {
      var n = a[u];
      if (
        !(
          n[Te] ||
          n[Nl] ||
          (l === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = n.getAttribute(t) || "";
        i = l + i;
        var c = e.get(i);
        c ? c.push(n) : e.set(i, [n]);
      }
    }
    return e;
  }
  function Co(l, t, a) {
    ((l = l.ownerDocument || l),
      l.head.insertBefore(
        a,
        t === "title" ? l.querySelector("head > title") : null,
      ));
  }
  function S1(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        return t.rel === "stylesheet"
          ? ((l = t.disabled), typeof t.precedence == "string" && l == null)
          : !0;
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Go(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var ou = null;
  function b1() {}
  function p1(l, t, a) {
    if (ou === null) throw Error(h(475));
    var e = ou;
    if (
      t.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var u = ge(a.href),
          n = l.querySelector(fu(u));
        if (n) {
          ((l = n._p),
            l !== null &&
              typeof l == "object" &&
              typeof l.then == "function" &&
              (e.count++, (e = zn.bind(e)), l.then(e, e)),
            (t.state.loading |= 4),
            (t.instance = n),
            Tl(n));
          return;
        }
        ((n = l.ownerDocument || l),
          (a = Bo(a)),
          (u = rt.get(u)) && Qc(a, u),
          (n = n.createElement("link")),
          Tl(n));
        var i = n;
        ((i._p = new Promise(function (c, f) {
          ((i.onload = c), (i.onerror = f));
        })),
          _l(n, "link", a),
          (t.instance = n));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(t, l),
        (l = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (e.count++,
          (t = zn.bind(e)),
          l.addEventListener("load", t),
          l.addEventListener("error", t)));
    }
  }
  function x1() {
    if (ou === null) throw Error(h(475));
    var l = ou;
    return (
      l.stylesheets && l.count === 0 && Vc(l, l.stylesheets),
      0 < l.count
        ? function (t) {
            var a = setTimeout(function () {
              if ((l.stylesheets && Vc(l, l.stylesheets), l.unsuspend)) {
                var e = l.unsuspend;
                ((l.unsuspend = null), e());
              }
            }, 6e4);
            return (
              (l.unsuspend = t),
              function () {
                ((l.unsuspend = null), clearTimeout(a));
              }
            );
          }
        : null
    );
  }
  function zn() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Vc(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        ((this.unsuspend = null), l());
      }
    }
  }
  var Mn = null;
  function Vc(l, t) {
    ((l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Mn = new Map()),
        t.forEach(T1, l),
        (Mn = null),
        zn.call(l)));
  }
  function T1(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Mn.get(l);
      if (a) var e = a.get(null);
      else {
        ((a = new Map()), Mn.set(l, a));
        for (
          var u = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            n = 0;
          n < u.length;
          n++
        ) {
          var i = u[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (a.set(i.dataset.precedence, i), (e = i));
        }
        e && a.set(null, e);
      }
      ((u = t.instance),
        (i = u.getAttribute("data-precedence")),
        (n = a.get(i) || e),
        n === e && a.set(null, u),
        a.set(i, u),
        this.count++,
        (e = zn.bind(this)),
        u.addEventListener("load", e),
        u.addEventListener("error", e),
        n
          ? n.parentNode.insertBefore(u, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(u, l.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var ru = {
    $$typeof: Rl,
    Provider: null,
    Consumer: null,
    _currentValue: G,
    _currentValue2: G,
    _threadCount: 0,
  };
  function E1(l, t, a, e, u, n, i, c) {
    ((this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Gn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Gn(0)),
      (this.hiddenUpdates = Gn(null)),
      (this.identifierPrefix = e),
      (this.onUncaughtError = u),
      (this.onCaughtError = n),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = c),
      (this.incompleteTransitions = new Map()));
  }
  function Xo(l, t, a, e, u, n, i, c, f, y, S, x) {
    return (
      (l = new E1(l, t, a, i, c, f, y, x)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = Fl(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = Ai()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: e, isDehydrated: a, cache: t }),
      _i(n),
      l
    );
  }
  function Qo(l) {
    return l ? ((l = ka), l) : ka;
  }
  function Zo(l, t, a, e, u, n) {
    ((u = Qo(u)),
      e.context === null ? (e.context = u) : (e.pendingContext = u),
      (e = wt(t)),
      (e.payload = { element: a }),
      (n = n === void 0 ? null : n),
      n !== null && (e.callback = n),
      (a = Wt(l, e, t)),
      a !== null && (at(a, l, t), Qe(a, l, t)));
  }
  function Vo(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Lc(l, t) {
    (Vo(l, t), (l = l.alternate) && Vo(l, t));
  }
  function Lo(l) {
    if (l.tag === 13) {
      var t = Wa(l, 67108864);
      (t !== null && at(t, l, 67108864), Lc(l, 67108864));
    }
  }
  var On = !0;
  function A1(l, t, a, e) {
    var u = b.T;
    b.T = null;
    var n = M.p;
    try {
      ((M.p = 2), Kc(l, t, a, e));
    } finally {
      ((M.p = n), (b.T = u));
    }
  }
  function z1(l, t, a, e) {
    var u = b.T;
    b.T = null;
    var n = M.p;
    try {
      ((M.p = 8), Kc(l, t, a, e));
    } finally {
      ((M.p = n), (b.T = u));
    }
  }
  function Kc(l, t, a, e) {
    if (On) {
      var u = Jc(e);
      if (u === null) (jc(l, t, e, _n, a), Jo(l, e));
      else if (O1(u, l, t, a, e)) e.stopPropagation();
      else if ((Jo(l, e), t & 4 && -1 < M1.indexOf(l))) {
        for (; u !== null; ) {
          var n = qa(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var i = va(n.pendingLanes);
                  if (i !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var f = 1 << (31 - kl(i));
                      ((c.entanglements[1] |= f), (i &= ~f));
                    }
                    (Et(n), (ll & 6) === 0 && ((rn = St() + 500), uu(0)));
                  }
                }
                break;
              case 13:
                ((c = Wa(n, 2)), c !== null && at(c, n, 2), hn(), Lc(n, 2));
            }
          if (((n = Jc(e)), n === null && jc(l, t, e, _n, a), n === u)) break;
          u = n;
        }
        u !== null && e.stopPropagation();
      } else jc(l, t, e, null, a);
    }
  }
  function Jc(l) {
    return ((l = Fn(l)), wc(l));
  }
  var _n = null;
  function wc(l) {
    if (((_n = null), (l = Ba(l)), l !== null)) {
      var t = B(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((l = w(t)), l !== null)) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return ((_n = l), null);
  }
  function Ko(l) {
    switch (l) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (rr()) {
          case ef:
            return 2;
          case uf:
            return 8;
          case bu:
          case dr:
            return 32;
          case nf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Wc = !1,
    ca = null,
    fa = null,
    sa = null,
    du = new Map(),
    hu = new Map(),
    oa = [],
    M1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Jo(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ca = null;
        break;
      case "dragenter":
      case "dragleave":
        fa = null;
        break;
      case "mouseover":
      case "mouseout":
        sa = null;
        break;
      case "pointerover":
      case "pointerout":
        du.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        hu.delete(t.pointerId);
    }
  }
  function yu(l, t, a, e, u, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: e,
          nativeEvent: n,
          targetContainers: [u],
        }),
        t !== null && ((t = qa(t)), t !== null && Lo(t)),
        l)
      : ((l.eventSystemFlags |= e),
        (t = l.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        l);
  }
  function O1(l, t, a, e, u) {
    switch (t) {
      case "focusin":
        return ((ca = yu(ca, l, t, a, e, u)), !0);
      case "dragenter":
        return ((fa = yu(fa, l, t, a, e, u)), !0);
      case "mouseover":
        return ((sa = yu(sa, l, t, a, e, u)), !0);
      case "pointerover":
        var n = u.pointerId;
        return (du.set(n, yu(du.get(n) || null, l, t, a, e, u)), !0);
      case "gotpointercapture":
        return (
          (n = u.pointerId),
          hu.set(n, yu(hu.get(n) || null, l, t, a, e, u)),
          !0
        );
    }
    return !1;
  }
  function wo(l) {
    var t = Ba(l.target);
    if (t !== null) {
      var a = B(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = w(a)), t !== null)) {
            ((l.blockedOn = t),
              pr(l.priority, function () {
                if (a.tag === 13) {
                  var e = tt();
                  e = Xn(e);
                  var u = Wa(a, e);
                  (u !== null && at(u, a, e), Lc(a, e));
                }
              }));
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Dn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = Jc(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var e = new a.constructor(a.type, a);
        (($n = e), a.target.dispatchEvent(e), ($n = null));
      } else return ((t = qa(a)), t !== null && Lo(t), (l.blockedOn = a), !1);
      t.shift();
    }
    return !0;
  }
  function Wo(l, t, a) {
    Dn(l) && a.delete(t);
  }
  function _1() {
    ((Wc = !1),
      ca !== null && Dn(ca) && (ca = null),
      fa !== null && Dn(fa) && (fa = null),
      sa !== null && Dn(sa) && (sa = null),
      du.forEach(Wo),
      hu.forEach(Wo));
  }
  function Rn(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      Wc ||
        ((Wc = !0),
        E.unstable_scheduleCallback(E.unstable_NormalPriority, _1)));
  }
  var Un = null;
  function ko(l) {
    Un !== l &&
      ((Un = l),
      E.unstable_scheduleCallback(E.unstable_NormalPriority, function () {
        Un === l && (Un = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t],
            e = l[t + 1],
            u = l[t + 2];
          if (typeof e != "function") {
            if (wc(e || a) === null) continue;
            break;
          }
          var n = qa(a);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            wi(n, { pending: !0, data: u, method: a.method, action: e }, e, u));
        }
      }));
  }
  function vu(l) {
    function t(f) {
      return Rn(f, l);
    }
    (ca !== null && Rn(ca, l),
      fa !== null && Rn(fa, l),
      sa !== null && Rn(sa, l),
      du.forEach(t),
      hu.forEach(t));
    for (var a = 0; a < oa.length; a++) {
      var e = oa[a];
      e.blockedOn === l && (e.blockedOn = null);
    }
    for (; 0 < oa.length && ((a = oa[0]), a.blockedOn === null); )
      (wo(a), a.blockedOn === null && oa.shift());
    if (((a = (l.ownerDocument || l).$$reactFormReplay), a != null))
      for (e = 0; e < a.length; e += 3) {
        var u = a[e],
          n = a[e + 1],
          i = u[Gl] || null;
        if (typeof n == "function") i || ko(a);
        else if (i) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (((u = n), (i = n[Gl] || null))) c = i.formAction;
            else if (wc(u) !== null) continue;
          } else c = i.action;
          (typeof c == "function" ? (a[e + 1] = c) : (a.splice(e, 3), (e -= 3)),
            ko(a));
        }
      }
  }
  function kc(l) {
    this._internalRoot = l;
  }
  ((jn.prototype.render = kc.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(h(409));
      var a = t.current,
        e = tt();
      Zo(a, e, l, t, null, null);
    }),
    (jn.prototype.unmount = kc.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          (Zo(l.current, 2, null, l, null, null), hn(), (t[Ha] = null));
        }
      }));
  function jn(l) {
    this._internalRoot = l;
  }
  jn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = rf();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < oa.length && t !== 0 && t < oa[a].priority; a++);
      (oa.splice(a, 0, l), a === 0 && wo(l));
    }
  };
  var $o = D.version;
  if ($o !== "19.1.0") throw Error(h(527, $o, "19.1.0"));
  M.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(h(188))
        : ((l = Object.keys(l).join(",")), Error(h(268, l)));
    return (
      (l = j(t)),
      (l = l !== null ? T(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var D1 = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: b,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Nn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Nn.isDisabled && Nn.supportsFiber)
      try {
        ((be = Nn.inject(D1)), (Wl = Nn));
      } catch {}
  }
  return (
    (gu.createRoot = function (l, t) {
      if (!U(l)) throw Error(h(299));
      var a = !1,
        e = "",
        u = r0,
        n = d0,
        i = h0,
        c = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (e = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (c = t.unstable_transitionCallbacks)),
        (t = Xo(l, 1, !1, null, null, a, e, u, n, i, c, null)),
        (l[Ha] = t.current),
        Uc(l),
        new kc(t)
      );
    }),
    (gu.hydrateRoot = function (l, t, a) {
      if (!U(l)) throw Error(h(299));
      var e = !1,
        u = "",
        n = r0,
        i = d0,
        c = h0,
        f = null,
        y = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (e = !0),
          a.identifierPrefix !== void 0 && (u = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
          a.onCaughtError !== void 0 && (i = a.onCaughtError),
          a.onRecoverableError !== void 0 && (c = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 &&
            (f = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (y = a.formState)),
        (t = Xo(l, 1, !0, t, a ?? null, e, u, n, i, c, f, y)),
        (t.context = Qo(null)),
        (a = t.current),
        (e = tt()),
        (e = Xn(e)),
        (u = wt(e)),
        (u.callback = null),
        Wt(a, u, e),
        (a = e),
        (t.current.lanes = a),
        xe(t, a),
        Et(t),
        (l[Ha] = t.current),
        Uc(l),
        new jn(t)
      );
    }),
    (gu.version = "19.1.0"),
    gu
  );
}
var ir;
function G1() {
  if (ir) return Fc.exports;
  ir = 1;
  function E() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E);
      } catch (D) {
        console.error(D);
      }
  }
  return (E(), (Fc.exports = C1()), Fc.exports);
}
var X1 = G1(),
  Dl = af();
const cr = ["Home", "About", "Skills", "Projects", "Education", "Contact"],
  Q1=["Python","NumPy","Pandas","Scikit-learn"],
  Z1 = [
    {
      name: "CineMatch AI",
      link: "https://movie-recc-syy.vercel.app/",
      subtitle: "Movie Recommendation Engine",
      desc: "A machine learning-powered movie recommendation system that helps users discover their next cinematic journey using collaborative filtering and content-based algorithms. Built with Python and ML techniques.",
      tags: ["Python", "Pandas", "NumPy", "Scikit-learn"],
      icon: "▶️",
    },
    {
      name: "Expense IQ",
      subtitle: "Student Financial Intelligence",
      desc: "Analyses real time expenses done via any UPI integrated app and gives reports to the user as per their submitted preferences.",
      tags: ["Python", "Pandas", "Data Analysis"],
      icon: "💰",
    },
  ],
  V1 = [
    { indent: 0, content: "class Developer:", color: "#c792ea" },
    { indent: 1, content: "def __init__(self):", color: "#82aaff" },
    { indent: 2, content: 'self.name = "Mayank Saini"', color: "#c3e88d" },
    { indent: 2, content: 'self.role = "ML Learner"', color: "#c3e88d" },
    { indent: 2, content: 'self.skills = ["Python",', color: "#c3e88d" },
    { indent: 3, content: '"NumPy",', color: "#c3e88d" },
    { indent: 3, content: '"Pandas",', color: "#c3e88d" },
    { indent: 3, content: '"Scikit-learn"]', color: "#c3e88d" },
    { indent: 0, content: "", color: "" },
    { indent: 1, content: "def code(self):", color: "#82aaff" },
    { indent: 2, content: 'return "Magic ✨"', color: "#f78c6c" },
  ];
function fr(E = 12) {
  const D = Dl.useRef(null),
    R = Dl.useCallback(
      (U) => {
        const B = D.current;
        if (!B) return;
        const w = B.getBoundingClientRect(),
          fl = (U.clientX - w.left) / w.width - 0.5,
          j = (U.clientY - w.top) / w.height - 0.5;
        B.style.transform = `perspective(600px) rotateY(${fl * E}deg) rotateX(${-j * E}deg) scale3d(1.03,1.03,1.03)`;
      },
      [E],
    ),
    h = Dl.useCallback(() => {
      const U = D.current;
      U &&
        (U.style.transform =
          "perspective(600px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)");
    }, []);
  return { ref: D, onMouseMove: R, onMouseLeave: h };
}
function L1() {
  const E = Dl.useRef(null),
    D = Dl.useRef(null),
    R = Dl.useRef({ x: 0, y: 0 }),
    h = Dl.useRef({ x: 0, y: 0 }),
    U = Dl.useRef(0);
  return (
    Dl.useEffect(() => {
      const B = (fl) => {
        R.current = { x: fl.clientX, y: fl.clientY };
      };
      document.addEventListener("mousemove", B);
      const w = () => {
        ((h.current.x += (R.current.x - h.current.x) * 0.13),
          (h.current.y += (R.current.y - h.current.y) * 0.13),
          E.current &&
            (E.current.style.transform = `translate(${R.current.x - 4}px, ${R.current.y - 4}px)`),
          D.current &&
            (D.current.style.transform = `translate(${h.current.x - 18}px, ${h.current.y - 18}px)`),
          (U.current = requestAnimationFrame(w)));
      };
      return (
        (U.current = requestAnimationFrame(w)),
        () => {
          (document.removeEventListener("mousemove", B),
            cancelAnimationFrame(U.current));
        }
      );
    }, []),
    v.jsxs(v.Fragment, {
      children: [
        v.jsx("div", {
          ref: E,
          style: {
            position: "fixed",
            top: 0,
            left: 0,
            width: 8,
            height: 8,
            background: "#a855f7",
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 9999,
            boxShadow: "0 0 8px 3px rgba(168,85,247,0.7)",
            willChange: "transform",
            transition: "opacity 0.2s",
          },
        }),
        v.jsx("div", {
          ref: D,
          style: {
            position: "fixed",
            top: 0,
            left: 0,
            width: 36,
            height: 36,
            border: "1.5px solid rgba(168,85,247,0.55)",
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 9998,
            willChange: "transform",
            boxShadow: "0 0 14px 2px rgba(168,85,247,0.18)",
          },
        }),
      ],
    })
  );
}
function K1(E, D = 80, R = 1800) {
  const [h, U] = Dl.useState(""),
    [B, w] = Dl.useState(0),
    [fl, j] = Dl.useState(0),
    [T, H] = Dl.useState(!1);
  return (
    Dl.useEffect(() => {
      const P = E[B],
        al = setTimeout(
          () => {
            T
              ? (U(P.slice(0, fl - 1)),
                fl - 1 === 0
                  ? (H(!1), w((vl) => (vl + 1) % E.length), j(0))
                  : j((vl) => vl - 1))
              : (U(P.slice(0, fl + 1)),
                fl + 1 === P.length
                  ? setTimeout(() => H(!0), R)
                  : j((vl) => vl + 1));
          },
          T ? D / 2 : D,
        );
      return () => clearTimeout(al);
    }, [fl, T, B, E, D, R]),
    h
  );
}
function Hn({ children: E, className: D, style: R }) {
  const h = fr(10);
  return v.jsx("div", {
    ...h,
    className: D,
    style: { ...R, transition: "transform 0.15s ease" },
    children: E,
  });
}
function J1({ active: E, onNav: D }) {
  return v.jsxs("nav", {
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: "rgba(10, 8, 22, 0.85)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(100, 60, 180, 0.2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 48px",
      height: "62px",
    },
    children: [
      v.jsxs("div", {
        className: "logo-vm",
        children: [
          v.jsx("span", { className: "bracket", children: "<" }),
          "MS",
          v.jsx("span", { className: "bracket", children: " />" }),
        ],
      }),
      v.jsx("div", {
        style: { display: "flex", gap: "32px" },
        children: cr.map((R) =>
          v.jsx(
            "button",
            {
              className: `nav-link${E === R ? " active" : ""}`,
              onClick: () => D(R),
              style: { background: "none", border: "none", cursor: "pointer" },
              children: R,
            },
            R,
          ),
        ),
      }),
    ],
  });
}
function w1({ onNav: E }) {
  const D = K1([
    "Python Developer",
    "Data Analyst",
    "AI/ML Enthusiast",
    "Problem Solver",
  ]);
  return v.jsxs("section", {
    id: "home",
    className: "stars-bg star-field",
    style: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      padding: "80px 48px 0",
      position: "relative",
      overflow: "hidden",
    },
    children: [
      v.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          gap: "40px",
        },
        children: [
          v.jsxs("div", {
            style: { flex: 1 },
            children: [
              v.jsx("p", {
                style: {
                  color: "rgba(180,160,230,0.75)",
                  fontSize: "1.05rem",
                  marginBottom: "8px",
                },
                children: "Hello, I'm",
              }),
              v.jsx("h1", {
                style: {
                  fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                  fontWeight: 800,
                  color: "white",
                  lineHeight: 1.1,
                  marginBottom: "12px",
                },
                children: "Mayank Saini",
              }),
              v.jsxs("p", {
                style: {
                  color: "#a855f7",
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  minHeight: "2rem",
                  marginBottom: "18px",
                },
                children: [
                  D,
                  v.jsx("span", {
                    className: "typing-cursor",
                    style: { color: "#c084fc" },
                    children: "|",
                  }),
                ],
              }),
              v.jsx("p", {
                style: {
                  color: "rgba(190, 175, 220, 0.75)",
                  fontSize: "0.93rem",
                  maxWidth: "420px",
                  lineHeight: 1.65,
                  marginBottom: "32px",
                },
                children:
                  "ML enthusiast and beginner learner passionate about machine learning, data analytics, and Python programming. Exploring algorithms, neural networks, and building intelligent systems with real-world impact.",
              }),
              v.jsxs("div", {
                style: {
                  display: "flex",
                  gap: "14px",
                  flexWrap: "wrap",
                  marginBottom: "36px",
                },
                children: [
                  v.jsxs("button", {
                    className: "btn-primary-gradient",
                    onClick: () => E("Contact"),
                    children: [
                      v.jsx("span", { children: "✉" }),
                      " GET IN TOUCH",
                    ],
                  }),
                  v.jsxs("button", {
                    className: "btn-outline-code",
                    onClick: () => E("Projects"),
                    children: [
                      v.jsx("span", {
                        style: { fontSize: "0.8rem" },
                        children: "</>",
                      }),
                      " VIEW PROJECTS",
                    ],
                  }),
                ],
              }),
              v.jsxs("div", {
                style: { display: "flex", gap: "10px" },
                children: [
                  v.jsx("a", {
                    href: "mailto:mayanksaini72a@gmail.com",
                    className: "social-icon",
                    title: "Email",
                    children: v.jsxs("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      children: [
                        v.jsx("rect", {
                          x: "2",
                          y: "4",
                          width: "20",
                          height: "16",
                          rx: "2",
                        }),
                        v.jsx("path", {
                          d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
                        }),
                      ],
                    }),
                  }),
                  v.jsx("a", {
                    href: "https://github.com/MayankSaini-Byte",
                    target: "_blank",
                    className: "social-icon",
                    title: "GitHub",
                    children: v.jsx("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 24 24",
                      fill: "currentColor",
                      children: v.jsx("path", {
                        d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                      }),
                    }),
                  }),
                  v.jsx("a", {
                    href: "https://www.linkedin.com/in/mayank-saini-6666b4375/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B846o8Zb3QC6E2MdFZ7mBEg%3D%3D",
                    target: "_blank",
                    className: "social-icon",
                    title: "LinkedIn",
                    children: v.jsx("svg", {
                      width: "15",
                      height: "15",
                      viewBox: "0 0 24 24",
                      fill: "currentColor",
                      children: v.jsx("path", {
                        d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                      }),
                    }),
                  }),
                  v.jsx("a", {
                    href: "tel:+919950401966",
                    className: "social-icon",
                    title: "Phone",
                    children: v.jsx("svg", {
                      width: "15",
                      height: "15",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      children: v.jsx("path", {
                        d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006 6l1.52-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z",
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
          v.jsx("div", {
            style: { flex: "0 0 auto", width: "340px" },
            children: v.jsxs("div", {
              className: "code-block",
              style: { padding: "0" },
              children: [
                v.jsxs("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "7px",
                    padding: "12px 16px",
                    borderBottom: "1px solid rgba(100, 60, 180, 0.3)",
                  },
                  children: [
                    v.jsx("div", {
                      className: "code-dot",
                      style: { background: "#ff5f57" },
                    }),
                    v.jsx("div", {
                      className: "code-dot",
                      style: { background: "#febc2e" },
                    }),
                    v.jsx("div", {
                      className: "code-dot",
                      style: { background: "#28c840" },
                    }),
                  ],
                }),
                v.jsx("div", {
                  style: { padding: "16px 20px 20px" },
                  children: V1.map((R, h) =>
                    v.jsx(
                      "div",
                      {
                        style: {
                          paddingLeft: `${R.indent * 18}px`,
                          color: R.color || "transparent",
                          minHeight: R.content ? "auto" : "12px",
                          whiteSpace: "pre",
                        },
                        children: R.content,
                      },
                      h,
                    ),
                  ),
                }),
              ],
            }),
          }),
        ],
      }),
      v.jsx("div", {
        className: "bounce-slow",
        style: {
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "rgba(160, 130, 210, 0.6)",
          fontSize: "1.4rem",
          cursor: "pointer",
        },
        onClick: () => E("About"),
        children: "⌄",
      }),
    ],
  });
}
function W1() {
  const E = fr(10);
  return v.jsxs("section", {
    id: "about",
    style: { padding: "100px 48px", maxWidth: "1100px", margin: "0 auto" },
    children: [
      v.jsxs("h2", {
        className: "section-title",
        style: { marginBottom: "48px", textAlign: "center" },
        children: ["About ", v.jsx("span", { children: "Me" })],
      }),
      v.jsxs("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          alignItems: "center",
        },
        children: [
          v.jsxs("div", {
            children: [
              v.jsxs("p", {
                style: {
                  color: "rgba(190, 175, 220, 0.8)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                  fontSize: "0.95rem",
                },
                children: [
                  "I'm an ML learning beginner at ",
                  v.jsx("span", {
                    style: { color: "#a855f7" },
                    children:
                      "Maulana Azad National Institute of Technology Bhopal",
                  }),
                  " with a growing focus on machine learning, data analytics, and Python programming.",
                ],
              }),
              v.jsxs("p", {
                style: {
                  color: "rgba(190, 175, 220, 0.8)",
                  lineHeight: 1.8,
                  fontSize: "0.95rem",
                  marginBottom: "20px",
                },
                children: [
                  "I also pursue a ",
                  v.jsx("span", {
                    style: { color: "#a855f7" },
                    children: "Bachelor of Science at IIT Madras",
                  }),
                  " (2025–Present). I'm experienced with Python fundamentals including NumPy, Pandas, data visualization with Matplotlib and Seaborn, and currently building expertise in machine learning with Scikit-learn, SQL, and advanced analytics.",
                ],
              }),
              v.jsx("p", {
                style: {
                  color: "rgba(190, 175, 220, 0.8)",
                  lineHeight: 1.8,
                  fontSize: "0.95rem",
                },
                children:
                  "I'm passionate about building intelligent systems that solve real-world problems, especially those that help people with disabilities and smart financial tools.",
              }),
            ],
          }),
          v.jsx("div", {
            ...E,
            style: {
              background: "rgba(20, 14, 40, 0.6)",
              border: "1px solid rgba(100, 60, 180, 0.35)",
              borderRadius: "12px",
              padding: "28px",
              transition: "transform 0.15s ease",
            },
            children: [
              { label: "Name", value: "Mayank Saini" },
              { label: "Email", value: "mayanksaini72a@gmail.com" },
              { label: "Phone", value: "+91 995040-1966" },
              { label: "Institute", value: "IIT Madras & NIT Bhopal" },
              { label: "Year", value: "1st Year" },
            ].map(({ label: D, value: R }) =>
              v.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    gap: "12px",
                    padding: "10px 0",
                    borderBottom: "1px solid rgba(100, 60, 180, 0.15)",
                  },
                  children: [
                    v.jsxs("span", {
                      style: {
                        color: "#a855f7",
                        minWidth: "80px",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                      },
                      children: [D, ":"],
                    }),
                    v.jsx("span", {
                      style: {
                        color: "rgba(200, 185, 230, 0.85)",
                        fontSize: "0.85rem",
                      },
                      children: R,
                    }),
                  ],
                },
                D,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function k1() {
  const E = [
    { name: "Python", level: 78 },
    { name: "NumPy / Pandas", level: 70 },
    { name: "Matplotlib / Seaborn", level: 65 },
    { name: "Scikit-learn", level: 60 },
    { name: "SQL", level: 45 },
    { name: "Machine Learning", level: 55 },
  ];
  return v.jsx("section", {
    id: "skills",
    style: { padding: "100px 48px", background: "rgba(10, 8, 22, 0.6)" },
    children: v.jsxs("div", {
      style: { maxWidth: "1100px", margin: "0 auto" },
      children: [
        v.jsxs("h2", {
          className: "section-title",
          style: { marginBottom: "48px", textAlign: "center" },
          children: ["My ", v.jsx("span", { children: "Skills" })],
        }),
        v.jsxs("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
          },
          children: [
            v.jsxs("div", {
              children: [
                v.jsx("h3", {
                  style: {
                    color: "rgba(200, 185, 230, 0.9)",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    marginBottom: "24px",
                  },
                  children: "Technical Proficiency",
                }),
                E.map(({ name: D, level: R }) =>
                  v.jsxs(
                    "div",
                    {
                      style: { marginBottom: "18px" },
                      children: [
                        v.jsxs("div", {
                          style: {
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "6px",
                          },
                          children: [
                            v.jsx("span", {
                              style: {
                                color: "rgba(200, 185, 230, 0.85)",
                                fontSize: "0.88rem",
                              },
                              children: D,
                            }),
                            v.jsxs("span", {
                              style: { color: "#a855f7", fontSize: "0.82rem" },
                              children: [R, "%"],
                            }),
                          ],
                        }),
                        v.jsx("div", {
                          style: {
                            background: "rgba(100, 60, 180, 0.15)",
                            borderRadius: "4px",
                            height: "6px",
                            overflow: "hidden",
                          },
                          children: v.jsx("div", {
                            style: {
                              width: `${R}%`,
                              height: "100%",
                              background:
                                "linear-gradient(90deg, #7c3aed, #a855f7)",
                              borderRadius: "4px",
                            },
                          }),
                        }),
                      ],
                    },
                    D,
                  ),
                ),
              ],
            }),
            v.jsxs("div", {
              children: [
                v.jsx("h3", {
                  style: {
                    color: "rgba(200, 185, 230, 0.9)",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    marginBottom: "24px",
                  },
                  children: "All Skills",
                }),
                v.jsxs("div", {
                  className: "code-block",
                  style: { padding: "20px" },
                  children: [
                    v.jsx("div", {
                      style: {
                        marginBottom: "8px",
                        color: "#82aaff",
                        fontSize: "0.8rem",
                      },
                      children: "// skills.py",
                    }),
                    v.jsx("div", {
                      style: {
                        color: "#c792ea",
                        fontSize: "0.82rem",
                        marginBottom: "4px",
                      },
                      children: "skills = [",
                    }),
                    v.jsx("div", {
                      style: {
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "8px",
                        paddingLeft: "12px",
                        margin: "8px 0",
                      },
                      children: Q1.map((D) =>
                        v.jsxs(
                          "span",
                          { className: "skill-tag", children: ['"', D, '"'] },
                          D,
                        ),
                      ),
                    }),
                    v.jsx("div", {
                      style: { color: "#c792ea", fontSize: "0.82rem" },
                      children: "]",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        v.jsxs("div", {
          style: { marginTop: "48px" },
          children: [
            v.jsx("h3", {
              style: {
                color: "rgba(200, 185, 230, 0.9)",
                fontSize: "1.1rem",
                fontWeight: 600,
                marginBottom: "20px",
                textAlign: "center",
              },
              children: "Relevant Coursework",
            }),
            v.jsx("div", {
              style: {
                display: "flex",
                justifyContent: "center",
                gap: "16px",
                flexWrap: "wrap",
              },
              children: [
                "Statistics",
                "Mathematics",
                "Programming Fundamentals",
              ].map((D) =>
                v.jsx(
                  "div",
                  {
                    style: {
                      background: "rgba(100, 50, 180, 0.15)",
                      border: "1px solid rgba(130, 80, 220, 0.35)",
                      borderRadius: "8px",
                      padding: "10px 20px",
                      color: "rgba(200, 185, 230, 0.85)",
                      fontSize: "0.88rem",
                    },
                    children: D,
                  },
                  D,
                ),
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
function $1() {
  return v.jsxs("section", {
    id: "projects",
    style: { padding: "100px 48px", maxWidth: "1100px", margin: "0 auto" },
    children: [
      v.jsxs("h2", {
        className: "section-title",
        style: { marginBottom: "48px", textAlign: "center" },
        children: ["My ", v.jsx("span", { children: "Projects" })],
      }),
      v.jsx("div", {
        style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px" },
        children: Z1.map((E) =>
          v.jsxs(
            Hn,
            {
              className: "project-card",
              children: [
                v.jsxs("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "14px",
                  },
                  children: [
                    v.jsx("span", {
                      style: { fontSize: "1.8rem" },
                      children: E.icon,
                    }),
                    v.jsxs("div", {
                      children: [
                        E.link
                          ? v.jsx("a", {
                              href: E.link,
                              target: "_blank",
                              style: {
                                color: "white",
                                fontSize: "1.15rem",
                                fontWeight: 700,
                                textDecoration: "underline",
                              },
                              children: E.name,
                            })
                          : v.jsx("h3", {
                              style: {
                                color: "white",
                                fontSize: "1.15rem",
                                fontWeight: 700,
                              },
                              children: E.name,
                            }),
                        v.jsx("p", {
                          style: { color: "#a855f7", fontSize: "0.82rem" },
                          children: E.subtitle,
                        }),
                      ],
                    }),
                  ],
                }),
                v.jsx("p", {
                  style: {
                    color: "rgba(190, 175, 220, 0.75)",
                    fontSize: "0.88rem",
                    lineHeight: 1.7,
                    marginBottom: "16px",
                  },
                  children: E.desc,
                }),
                v.jsx("div", {
                  style: { display: "flex", gap: "8px", flexWrap: "wrap" },
                  children: E.tags.map((D) =>
                    v.jsx(
                      "span",
                      {
                        className: "skill-tag",
                        style: { fontSize: "0.75rem", padding: "4px 10px" },
                        children: D,
                      },
                      D,
                    ),
                  ),
                }),
              ],
            },
            E.name,
          ),
        ),
      }),
    ],
  });
}
function F1() {
  return v.jsx("section", {
    id: "education",
    style: { padding: "100px 48px", background: "rgba(10, 8, 22, 0.6)" },
    children: v.jsxs("div", {
      style: { maxWidth: "1100px", margin: "0 auto" },
      children: [
        v.jsxs("h2", {
          className: "section-title",
          style: { marginBottom: "48px", textAlign: "center" },
          children: ["My ", v.jsx("span", { children: "Education" })],
        }),
        v.jsx("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "28px",
          },
          children: [
            {
              degree: "Bachelor of Science",
              institution: "Indian Institute of Technology Madras",
              period: "2025 – Present",
              icon: "🎓",
            },
            {
              degree: "Bachelor of Technology",
              institution: "National Institute of Technology Bhopal",
              period: "2025 – Present",
              icon: "⚙️",
            },
          ].map((E) =>
            v.jsx(
              Hn,
              {
                className: "project-card",
                children: v.jsxs("div", {
                  style: {
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                  },
                  children: [
                    v.jsx("span", {
                      style: { fontSize: "2rem" },
                      children: E.icon,
                    }),
                    v.jsxs("div", {
                      children: [
                        v.jsx("h3", {
                          style: {
                            color: "white",
                            fontSize: "1.1rem",
                            fontWeight: 700,
                            marginBottom: "4px",
                          },
                          children: E.degree,
                        }),
                        v.jsx("p", {
                          style: {
                            color: "#a855f7",
                            fontSize: "0.9rem",
                            marginBottom: "6px",
                          },
                          children: E.institution,
                        }),
                        v.jsx("span", {
                          style: {
                            background: "rgba(100, 50, 180, 0.2)",
                            border: "1px solid rgba(130, 80, 220, 0.35)",
                            borderRadius: "4px",
                            padding: "2px 10px",
                            color: "rgba(200, 185, 230, 0.75)",
                            fontSize: "0.8rem",
                          },
                          children: E.period,
                        }),
                      ],
                    }),
                  ],
                }),
              },
              E.institution,
            ),
          ),
        }),
        v.jsxs("div", {
          style: { marginTop: "40px" },
          children: [
            v.jsx("h3", {
              style: {
                color: "rgba(200, 185, 230, 0.9)",
                fontSize: "1.1rem",
                fontWeight: 600,
                marginBottom: "20px",
                textAlign: "center",
              },
              children: "Certifications & Achievements",
            }),
            v.jsx("div", {
              style: {
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                flexWrap: "wrap",
              },
              children: [
                {
                  title: "Bid-2-Code Hackathon",
                  subtitle: "Participant Certificate",
                },
                { title: "Robo Race", subtitle: "Participant Certificate" },
                {
                  title: "PR & Outreach Team",
                  subtitle: "Kaziranga House, IIT Madras",
                },
              ].map((E) =>
                v.jsxs(
                  Hn,
                  {
                    style: {
                      background: "rgba(20, 14, 40, 0.7)",
                      border: "1px solid rgba(100, 60, 180, 0.35)",
                      borderRadius: "10px",
                      padding: "16px 22px",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    },
                    children: [
                      v.jsx("span", {
                        style: { color: "#a855f7", fontSize: "1.2rem" },
                        children: "🏆",
                      }),
                      v.jsxs("div", {
                        children: [
                          v.jsx("div", {
                            style: {
                              color: "white",
                              fontSize: "0.9rem",
                              fontWeight: 600,
                            },
                            children: E.title,
                          }),
                          v.jsx("div", {
                            style: {
                              color: "rgba(190, 175, 220, 0.65)",
                              fontSize: "0.78rem",
                            },
                            children: E.subtitle,
                          }),
                        ],
                      }),
                    ],
                  },
                  E.title,
                ),
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
function I1() {
  const E = [
    {
      icon: v.jsxs("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: [
          v.jsx("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
          v.jsx("path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }),
        ],
      }),
      label: "Email",
      value: "mayanksaini72a@gmail.com",
      href: "mailto:mayanksaini72a@gmail.com",
    },
    {
      icon: v.jsx("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: v.jsx("path", {
          d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006 6l1.52-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z",
        }),
      }),
      label: "Phone",
      value: "+91 995040-1966",
      href: "tel:+919950401966",
    },
    {
      icon: v.jsx("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: v.jsx("path", {
          d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
        }),
      }),
      label: "GitHub",
      value: "github.com/MayankSaini-Byte",
      href: "https://github.com/MayankSaini-Byte",
    },
    {
      icon: v.jsx("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: v.jsx("path", {
          d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
        }),
      }),
      label: "LinkedIn",
      value: "linkedin.com/in/mayank-saini-6666b4375",
      href: "https://www.linkedin.com/in/mayank-saini-6666b4375/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B846o8Zb3QC6E2MdFZ7mBEg%3D%3D",
    },
  ];
  return v.jsxs("section", {
    id: "contact",
    style: { padding: "100px 48px", maxWidth: "900px", margin: "0 auto" },
    children: [
      v.jsxs("h2", {
        className: "section-title",
        style: { marginBottom: "12px", textAlign: "center" },
        children: ["Get In ", v.jsx("span", { children: "Touch" })],
      }),
      v.jsx("p", {
        style: {
          color: "rgba(190, 175, 220, 0.65)",
          textAlign: "center",
          marginBottom: "52px",
          fontSize: "0.93rem",
        },
        children:
          "Have a question or want to collaborate? Reach out through any of the channels below.",
      }),
      v.jsx("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginBottom: "40px",
        },
        children: E.map(({ icon: D, label: R, value: h, href: U }) =>
          v.jsx(
            Hn,
            {
              children: v.jsxs("a", {
                href: U,
                target: U.startsWith("http") ? "_blank" : void 0,
                rel: "noreferrer",
                style: {
                  display: "flex",
                  gap: "18px",
                  alignItems: "center",
                  padding: "22px 24px",
                  background: "rgba(20, 14, 40, 0.6)",
                  border: "1px solid rgba(100, 60, 180, 0.3)",
                  borderRadius: "14px",
                  textDecoration: "none",
                  transition: "border-color 0.2s",
                },
                onMouseEnter: (B) =>
                  (B.currentTarget.style.borderColor = "rgba(168,85,247,0.6)"),
                onMouseLeave: (B) =>
                  (B.currentTarget.style.borderColor = "rgba(100,60,180,0.3)"),
                children: [
                  v.jsx("div", {
                    style: {
                      width: "46px",
                      height: "46px",
                      background: "rgba(100, 50, 180, 0.2)",
                      border: "1px solid rgba(130, 80, 220, 0.35)",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#a855f7",
                      flexShrink: 0,
                    },
                    children: D,
                  }),
                  v.jsxs("div", {
                    children: [
                      v.jsx("div", {
                        style: {
                          color: "#a855f7",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.07em",
                          marginBottom: "4px",
                        },
                        children: R,
                      }),
                      v.jsx("div", {
                        style: {
                          color: "rgba(210, 195, 240, 0.9)",
                          fontSize: "0.88rem",
                          fontWeight: 500,
                        },
                        children: h,
                      }),
                    ],
                  }),
                ],
              }),
            },
            R,
          ),
        ),
      }),
      v.jsxs("div", {
        style: { textAlign: "center" },
        children: [
          v.jsx("p", {
            style: {
              color: "rgba(190, 175, 220, 0.5)",
              fontSize: "0.82rem",
              marginBottom: "14px",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            },
            children: "Languages",
          }),
          v.jsx("div", {
            style: { display: "flex", gap: "12px", justifyContent: "center" },
            children: ["Hindi (Fluent)", "English (Basic)"].map((D) =>
              v.jsx(
                "span",
                {
                  style: {
                    background: "rgba(100, 50, 180, 0.15)",
                    border: "1px solid rgba(130, 80, 220, 0.3)",
                    borderRadius: "8px",
                    padding: "8px 18px",
                    color: "rgba(200, 185, 230, 0.85)",
                    fontSize: "0.85rem",
                  },
                  children: D,
                },
                D,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function P1() {
  return v.jsx("footer", {
    style: {
      background: "rgba(8, 6, 18, 0.95)",
      borderTop: "1px solid rgba(100, 60, 180, 0.2)",
      padding: "24px 48px",
      textAlign: "center",
      color: "rgba(160, 140, 200, 0.55)",
      fontSize: "0.82rem",
    },
    children: v.jsxs("span", {
      children: [
        "Designed & built by",
        " ",
        v.jsx("span", {
          style: { color: "#a855f7" },
          children: "Mayank Saini",
        }),
        " · ",
        new Date().getFullYear(),
      ],
    }),
  });
}
function l2() {
  const [E, D] = Dl.useState("Home");
  Dl.useRef({});
  const R = (h) => {
    D(h);
    const U = h.toLowerCase(),
      B = document.getElementById(U);
    B && B.scrollIntoView({ behavior: "smooth" });
  };
  return (
    Dl.useEffect(() => {
      const h = new IntersectionObserver(
        (U) => {
          U.forEach((B) => {
            if (B.isIntersecting) {
              const w = B.target.id;
              D(w.charAt(0).toUpperCase() + w.slice(1));
            }
          });
        },
        { rootMargin: "-40% 0px -40% 0px" },
      );
      return (
        cr.forEach((U) => {
          const B = document.getElementById(U.toLowerCase());
          B && h.observe(B);
        }),
        () => h.disconnect()
      );
    }, []),
    v.jsxs("div", {
      className: "stars-bg",
      style: { minHeight: "100vh", fontFamily: "Inter, sans-serif" },
      children: [
        v.jsx(L1, {}),
        v.jsx(J1, { active: E, onNav: R }),
        v.jsx(w1, { onNav: R }),
        v.jsx(W1, {}),
        v.jsx(k1, {}),
        v.jsx($1, {}),
        v.jsx(F1, {}),
        v.jsx(I1, {}),
        v.jsx(P1, {}),
      ],
    })
  );
}
X1.createRoot(document.getElementById("root")).render(v.jsx(l2, {}));
