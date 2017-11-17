! function e(t, n, r) {
    function i(a, s) {
        if (!n[a]) {
            if (!t[a]) {
                var u = "function" == typeof require && require;
                if (!s && u) return u(a, !0);
                if (o) return o(a, !0);
                var l = new Error("Cannot find module '" + a + "'");
                throw l.code = "MODULE_NOT_FOUND", l
            }
            var c = n[a] = {
                exports: {}
            };
            t[a][0].call(c.exports, function(e) {
                var n = t[a][1][e];
                return i(n ? n : e)
            }, c, c.exports, e, t, n, r)
        }
        return n[a].exports
    }
    for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) i(r[a]);
    return i
}({
    1: [function(e) {
        e("../libs/jquery.js"), e("../util/util.js")
    }, {
        "../libs/jquery.js": 2,
        "../util/util.js": 3
    }],
    2: [function() { /*! jQuery v@1.8.0 jquery.com | jquery.org/license */
        ! function(e, t) {
            function n(e) {
                var t = ht[e] = {};
                return K.each(e.split(tt), function(e, n) {
                    t[n] = !0
                }), t
            }

            function r(e, n, r) {
                if (r === t && 1 === e.nodeType) {
                    var i = "data-" + n.replace(mt, "-$1").toLowerCase();
                    if (r = e.getAttribute(i), "string" == typeof r) {
                        try {
                            r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : gt.test(r) ? K.parseJSON(r) : r
                        } catch (o) {}
                        K.data(e, n, r)
                    } else r = t
                }
                return r
            }

            function i(e) {
                var t;
                for (t in e)
                    if (("data" !== t || !K.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
                return !0
            }

            function o() {
                return !1
            }

            function a() {
                return !0
            }

            function s(e) {
                return !e || !e.parentNode || 11 === e.parentNode.nodeType
            }

            function u(e, t) {
                do e = e[t]; while (e && 1 !== e.nodeType);
                return e
            }

            function l(e, t, n) {
                if (t = t || 0, K.isFunction(t)) return K.grep(e, function(e, r) {
                    var i = !!t.call(e, r, e);
                    return i === n
                });
                if (t.nodeType) return K.grep(e, function(e) {
                    return e === t === n
                });
                if ("string" == typeof t) {
                    var r = K.grep(e, function(e) {
                        return 1 === e.nodeType
                    });
                    if (_t.test(t)) return K.filter(t, r, !n);
                    t = K.filter(t, r)
                }
                return K.grep(e, function(e) {
                    return K.inArray(e, t) >= 0 === n
                })
            }

            function c(e) {
                var t = Bt.split("|"),
                    n = e.createDocumentFragment();
                if (n.createElement)
                    for (; t.length;) n.createElement(t.pop());
                return n
            }

            function f(e, t) {
                return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
            }

            function d(e, t) {
                if (1 === t.nodeType && K.hasData(e)) {
                    var n, r, i, o = K._data(e),
                        a = K._data(t, o),
                        s = o.events;
                    if (s) {
                        delete a.handle, a.events = {};
                        for (n in s)
                            for (r = 0, i = s[n].length; i > r; r++) K.event.add(t, n, s[n][r])
                    }
                    a.data && (a.data = K.extend({}, a.data))
                }
            }

            function p(e, t) {
                var n;
                1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), K.support.html5Clone && e.innerHTML && !K.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Jt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.selected = e.defaultSelected : "input" === n || "textarea" === n ? t.defaultValue = e.defaultValue : "script" === n && t.text !== e.text && (t.text = e.text), t.removeAttribute(K.expando))
            }

            function h(e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName("*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll("*") : []
            }

            function g(e) {
                Jt.test(e.type) && (e.defaultChecked = e.checked)
            }

            function m(e, t) {
                if (t in e) return t;
                for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = yn.length; i--;)
                    if (t = yn[i] + n, t in e) return t;
                return r
            }

            function y(e, t) {
                return e = t || e, "none" === K.css(e, "display") || !K.contains(e.ownerDocument, e)
            }

            function v(e, t) {
                for (var n, r, i = [], o = 0, a = e.length; a > o; o++) n = e[o], n.style && (i[o] = K._data(n, "olddisplay"), t ? (!i[o] && "none" === n.style.display && (n.style.display = ""), "" === n.style.display && y(n) && (i[o] = K._data(n, "olddisplay", T(n.nodeName)))) : (r = nn(n, "display"), !i[o] && "none" !== r && K._data(n, "olddisplay", r)));
                for (o = 0; a > o; o++) n = e[o], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? i[o] || "" : "none"));
                return e
            }

            function b(e, t, n) {
                var r = cn.exec(t);
                return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
            }

            function x(e, t, n, r) {
                for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > i; i += 2) "margin" === n && (o += K.css(e, n + mn[i], !0)), r ? ("content" === n && (o -= parseFloat(nn(e, "padding" + mn[i])) || 0), "margin" !== n && (o -= parseFloat(nn(e, "border" + mn[i] + "Width")) || 0)) : (o += parseFloat(nn(e, "padding" + mn[i])) || 0, "padding" !== n && (o += parseFloat(nn(e, "border" + mn[i] + "Width")) || 0));
                return o
            }

            function w(e, t, n) {
                var r = "width" === t ? e.offsetWidth : e.offsetHeight,
                    i = !0,
                    o = K.support.boxSizing && "border-box" === K.css(e, "boxSizing");
                if (0 >= r) {
                    if (r = nn(e, t), (0 > r || null == r) && (r = e.style[t]), fn.test(r)) return r;
                    i = o && (K.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
                }
                return r + x(e, t, n || (o ? "border" : "content"), i) + "px"
            }

            function T(e) {
                if (pn[e]) return pn[e];
                var t = K("<" + e + ">").appendTo(R.body),
                    n = t.css("display");
                return t.remove(), ("none" === n || "" === n) && (rn = R.body.appendChild(rn || K.extend(R.createElement("iframe"), {
                    frameBorder: 0,
                    width: 0,
                    height: 0
                })), on && rn.createElement || (on = (rn.contentWindow || rn.contentDocument).document, on.write("<!doctype html><html><body>"), on.close()), t = on.body.appendChild(on.createElement(e)), n = nn(t, "display"), R.body.removeChild(rn)), pn[e] = n, n
            }

            function E(e, t, n, r) {
                var i;
                if (K.isArray(t)) K.each(t, function(t, i) {
                    n || xn.test(e) ? r(e, i) : E(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
                });
                else if (n || "object" !== K.type(t)) r(e, t);
                else
                    for (i in t) E(e + "[" + i + "]", t[i], n, r)
            }

            function N(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var r, i, o, a = t.toLowerCase().split(tt),
                        s = 0,
                        u = a.length;
                    if (K.isFunction(n))
                        for (; u > s; s++) r = a[s], o = /^\+/.test(r), o && (r = r.substr(1) || "*"), i = e[r] = e[r] || [], i[o ? "unshift" : "push"](n)
                }
            }

            function C(e, n, r, i, o, a) {
                o = o || n.dataTypes[0], a = a || {}, a[o] = !0;
                for (var s, u = e[o], l = 0, c = u ? u.length : 0, f = e === _n; c > l && (f || !s); l++) s = u[l](n, r, i), "string" == typeof s && (!f || a[s] ? s = t : (n.dataTypes.unshift(s), s = C(e, n, r, i, s, a)));
                return (f || !s) && !a["*"] && (s = C(e, n, r, i, "*", a)), s
            }

            function S(e, n) {
                var r, i, o = K.ajaxSettings.flatOptions || {};
                for (r in n) n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
                i && K.extend(!0, e, i)
            }

            function k(e, n, r) {
                var i, o, a, s, u = e.contents,
                    l = e.dataTypes,
                    c = e.responseFields;
                for (o in c) o in r && (n[c[o]] = r[o]);
                for (;
                    "*" === l[0];) l.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
                if (i)
                    for (o in u)
                        if (u[o] && u[o].test(i)) {
                            l.unshift(o);
                            break
                        }
                if (l[0] in r) a = l[0];
                else {
                    for (o in r) {
                        if (!l[0] || e.converters[o + " " + l[0]]) {
                            a = o;
                            break
                        }
                        s || (s = o)
                    }
                    a = a || s
                }
                return a ? (a !== l[0] && l.unshift(a), r[a]) : void 0
            }

            function A(e, t) {
                var n, r, i, o, a = e.dataTypes.slice(),
                    s = a[0],
                    u = {},
                    l = 0;
                if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), a[1])
                    for (n in e.converters) u[n.toLowerCase()] = e.converters[n];
                for (; i = a[++l];)
                    if ("*" !== i) {
                        if ("*" !== s && s !== i) {
                            if (n = u[s + " " + i] || u["* " + i], !n)
                                for (r in u)
                                    if (o = r.split(" "), o[1] === i && (n = u[s + " " + o[0]] || u["* " + o[0]])) {
                                        n === !0 ? n = u[r] : u[r] !== !0 && (i = o[0], a.splice(l--, 0, i));
                                        break
                                    }
                            if (n !== !0)
                                if (n && e["throws"]) t = n(t);
                                else try {
                                    t = n(t)
                                } catch (c) {
                                    return {
                                        state: "parsererror",
                                        error: n ? c : "No conversion from " + s + " to " + i
                                    }
                                }
                        }
                        s = i
                    }
                return {
                    state: "success",
                    data: t
                }
            }

            function D() {
                try {
                    return new e.XMLHttpRequest
                } catch (t) {}
            }

            function j() {
                try {
                    return new e.ActiveXObject("Microsoft.XMLHTTP")
                } catch (t) {}
            }

            function L() {
                return setTimeout(function() {
                    Yn = t
                }, 0), Yn = K.now()
            }

            function H(e, t) {
                K.each(t, function(t, n) {
                    for (var r = (Zn[t] || []).concat(Zn["*"]), i = 0, o = r.length; o > i; i++)
                        if (r[i].call(e, t, n)) return
                })
            }

            function O(e, t, n) {
                var r, i = 0,
                    o = Kn.length,
                    a = K.Deferred().always(function() {
                        delete s.elem
                    }),
                    s = function() {
                        for (var t = Yn || L(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), i = 0, o = u.tweens.length; o > i; i++) u.tweens[i].run(r);
                        return a.notifyWith(e, [u, r, n]), 1 > r && o ? n : (a.resolveWith(e, [u]), !1)
                    },
                    u = a.promise({
                        elem: e,
                        props: K.extend({}, t),
                        opts: K.extend(!0, {
                            specialEasing: {}
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: Yn || L(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var r = K.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                            return u.tweens.push(r), r
                        },
                        stop: function(t) {
                            for (var n = 0, r = t ? u.tweens.length : 0; r > n; n++) u.tweens[n].run(1);
                            return t ? a.resolveWith(e, [u, t]) : a.rejectWith(e, [u, t]), this
                        }
                    }),
                    l = u.props;
                for (M(l, u.opts.specialEasing); o > i; i++)
                    if (r = Kn[i].call(u, e, l, u.opts)) return r;
                return H(u, l), K.isFunction(u.opts.start) && u.opts.start.call(e, u), K.fx.timer(K.extend(s, {
                    anim: u,
                    queue: u.opts.queue,
                    elem: e
                })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
            }

            function M(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (r = K.camelCase(n), i = t[r], o = e[n], K.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = K.cssHooks[r], a && "expand" in a) {
                        o = a.expand(o), delete e[r];
                        for (n in o) n in e || (e[n] = o[n], t[n] = i)
                    } else t[r] = i
            }

            function F(e, t, n) {
                var r, i, o, a, s, u, l, c, f = this,
                    d = e.style,
                    p = {},
                    h = [],
                    g = e.nodeType && y(e);
                n.queue || (l = K._queueHooks(e, "fx"), null == l.unqueued && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function() {
                    l.unqueued || c()
                }), l.unqueued++, f.always(function() {
                    f.always(function() {
                        l.unqueued--, K.queue(e, "fx").length || l.empty.fire()
                    })
                })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === K.css(e, "display") && "none" === K.css(e, "float") && (K.support.inlineBlockNeedsLayout && "inline" !== T(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", K.support.shrinkWrapBlocks || f.done(function() {
                    d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
                }));
                for (r in t)
                    if (o = t[r], Jn.exec(o)) {
                        if (delete t[r], o === (g ? "hide" : "show")) continue;
                        h.push(r)
                    }
                if (a = h.length)
                    for (s = K._data(e, "fxshow") || K._data(e, "fxshow", {}), g ? K(e).show() : f.done(function() {
                            K(e).hide()
                        }), f.done(function() {
                            var t;
                            K.removeData(e, "fxshow", !0);
                            for (t in p) K.style(e, t, p[t])
                        }), r = 0; a > r; r++) i = h[r], u = f.createTween(i, g ? s[i] : 0), p[i] = s[i] || K.style(e, i), i in s || (s[i] = u.start, g && (u.end = u.start, u.start = "width" === i || "height" === i ? 1 : 0))
            }

            function _(e, t, n, r, i) {
                return new _.prototype.init(e, t, n, r, i)
            }

            function P(e, t) {
                for (var n, r = {
                        height: e
                    }, i = 0; 4 > i; i += 2 - t) n = mn[i], r["margin" + n] = r["padding" + n] = e;
                return t && (r.opacity = r.width = e), r
            }

            function q(e) {
                return K.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
            }
            var B, W, R = e.document,
                $ = e.location,
                I = e.navigator,
                z = e.jQuery,
                X = e.$,
                U = Array.prototype.push,
                Y = Array.prototype.slice,
                V = Array.prototype.indexOf,
                J = Object.prototype.toString,
                G = Object.prototype.hasOwnProperty,
                Q = String.prototype.trim,
                K = function(e, t) {
                    return new K.fn.init(e, t, B)
                },
                Z = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
                et = /\S/,
                tt = /\s+/,
                nt = et.test(" ") ? /^[\s\xA0]+|[\s\xA0]+$/g : /^\s+|\s+$/g,
                rt = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                it = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                ot = /^[\],:{}\s]*$/,
                at = /(?:^|:|,)(?:\s*\[)+/g,
                st = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
                ut = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
                lt = /^-ms-/,
                ct = /-([\da-z])/gi,
                ft = function(e, t) {
                    return (t + "").toUpperCase()
                },
                dt = function() {
                    R.addEventListener ? (R.removeEventListener("DOMContentLoaded", dt, !1), K.ready()) : "complete" === R.readyState && (R.detachEvent("onreadystatechange", dt), K.ready())
                },
                pt = {};
            K.fn = K.prototype = {
                constructor: K,
                init: function(e, n, r) {
                    var i, o, a;
                    if (!e) return this;
                    if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
                    if ("string" == typeof e) {
                        if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : rt.exec(e), i && (i[1] || !n)) {
                            if (i[1]) return n = n instanceof K ? n[0] : n, a = n && n.nodeType ? n.ownerDocument || n : R, e = K.parseHTML(i[1], a, !0), it.test(i[1]) && K.isPlainObject(n) && this.attr.call(e, n, !0), K.merge(this, e);
                            if (o = R.getElementById(i[2]), o && o.parentNode) {
                                if (o.id !== i[2]) return r.find(e);
                                this.length = 1, this[0] = o
                            }
                            return this.context = R, this.selector = e, this
                        }
                        return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
                    }
                    return K.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), K.makeArray(e, this))
                },
                selector: "",
                jquery: "1.8.0",
                length: 0,
                size: function() {
                    return this.length
                },
                toArray: function() {
                    return Y.call(this)
                },
                get: function(e) {
                    return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
                },
                pushStack: function(e, t, n) {
                    var r = K.merge(this.constructor(), e);
                    return r.prevObject = this, r.context = this.context, "find" === t ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r
                },
                each: function(e, t) {
                    return K.each(this, e, t)
                },
                ready: function(e) {
                    return K.ready.promise().done(e), this
                },
                eq: function(e) {
                    return e = +e, -1 === e ? this.slice(e) : this.slice(e, e + 1)
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                slice: function() {
                    return this.pushStack(Y.apply(this, arguments), "slice", Y.call(arguments).join(","))
                },
                map: function(e) {
                    return this.pushStack(K.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: U,
                sort: [].sort,
                splice: [].splice
            }, K.fn.init.prototype = K.fn, K.extend = K.fn.extend = function() {
                var e, n, r, i, o, a, s = arguments[0] || {},
                    u = 1,
                    l = arguments.length,
                    c = !1;
                for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" != typeof s && !K.isFunction(s) && (s = {}), l === u && (s = this, --u); l > u; u++)
                    if (null != (e = arguments[u]))
                        for (n in e) r = s[n], i = e[n], s !== i && (c && i && (K.isPlainObject(i) || (o = K.isArray(i))) ? (o ? (o = !1, a = r && K.isArray(r) ? r : []) : a = r && K.isPlainObject(r) ? r : {}, s[n] = K.extend(c, a, i)) : i !== t && (s[n] = i));
                return s
            }, K.extend({
                noConflict: function(t) {
                    return e.$ === K && (e.$ = X), t && e.jQuery === K && (e.jQuery = z), K
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? K.readyWait++ : K.ready(!0)
                },
                ready: function(e) {
                    if (e === !0 ? !--K.readyWait : !K.isReady) {
                        if (!R.body) return setTimeout(K.ready, 1);
                        K.isReady = !0, e !== !0 && --K.readyWait > 0 || (W.resolveWith(R, [K]), K.fn.trigger && K(R).trigger("ready").off("ready"))
                    }
                },
                isFunction: function(e) {
                    return "function" === K.type(e)
                },
                isArray: Array.isArray || function(e) {
                    return "array" === K.type(e)
                },
                isWindow: function(e) {
                    return null != e && e == e.window
                },
                isNumeric: function(e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                },
                type: function(e) {
                    return null == e ? String(e) : pt[J.call(e)] || "object"
                },
                isPlainObject: function(e) {
                    if (!e || "object" !== K.type(e) || e.nodeType || K.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !G.call(e, "constructor") && !G.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (n) {
                        return !1
                    }
                    var r;
                    for (r in e);
                    return r === t || G.call(e, r)
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                error: function(e) {
                    throw new Error(e)
                },
                parseHTML: function(e, t, n) {
                    var r;
                    return e && "string" == typeof e ? ("boolean" == typeof t && (n = t, t = 0), t = t || R, (r = it.exec(e)) ? [t.createElement(r[1])] : (r = K.buildFragment([e], t, n ? null : []), K.merge([], (r.cacheable ? K.clone(r.fragment) : r.fragment).childNodes))) : null
                },
                parseJSON: function(t) {
                    return t && "string" == typeof t ? (t = K.trim(t), e.JSON && e.JSON.parse ? e.JSON.parse(t) : ot.test(t.replace(st, "@").replace(ut, "]").replace(at, "")) ? new Function("return " + t)() : void K.error("Invalid JSON: " + t)) : null
                },
                parseXML: function(n) {
                    var r, i;
                    if (!n || "string" != typeof n) return null;
                    try {
                        e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
                    } catch (o) {
                        r = t
                    }
                    return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && K.error("Invalid XML: " + n), r
                },
                noop: function() {},
                globalEval: function(t) {
                    t && et.test(t) && (e.execScript || function(t) {
                        e.eval.call(e, t)
                    })(t)
                },
                camelCase: function(e) {
                    return e.replace(lt, "ms-").replace(ct, ft)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
                },
                each: function(e, n, r) {
                    var i, o = 0,
                        a = e.length,
                        s = a === t || K.isFunction(e);
                    if (r)
                        if (s) {
                            for (i in e)
                                if (n.apply(e[i], r) === !1) break
                        } else
                            for (; a > o && n.apply(e[o++], r) !== !1;);
                    else if (s) {
                        for (i in e)
                            if (n.call(e[i], i, e[i]) === !1) break
                    } else
                        for (; a > o && n.call(e[o], o, e[o++]) !== !1;);
                    return e
                },
                trim: Q ? function(e) {
                    return null == e ? "" : Q.call(e)
                } : function(e) {
                    return null == e ? "" : e.toString().replace(nt, "")
                },
                makeArray: function(e, t) {
                    var n, r = t || [];
                    return null != e && (n = K.type(e), null == e.length || "string" === n || "function" === n || "regexp" === n || K.isWindow(e) ? U.call(r, e) : K.merge(r, e)), r
                },
                inArray: function(e, t, n) {
                    var r;
                    if (t) {
                        if (V) return V.call(t, e, n);
                        for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                            if (n in t && t[n] === e) return n
                    }
                    return -1
                },
                merge: function(e, n) {
                    var r = n.length,
                        i = e.length,
                        o = 0;
                    if ("number" == typeof r)
                        for (; r > o; o++) e[i++] = n[o];
                    else
                        for (; n[o] !== t;) e[i++] = n[o++];
                    return e.length = i, e
                },
                grep: function(e, t, n) {
                    var r, i = [],
                        o = 0,
                        a = e.length;
                    for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
                    return i
                },
                map: function(e, n, r) {
                    var i, o, a = [],
                        s = 0,
                        u = e.length,
                        l = e instanceof K || u !== t && "number" == typeof u && (u > 0 && e[0] && e[u - 1] || 0 === u || K.isArray(e));
                    if (l)
                        for (; u > s; s++) i = n(e[s], s, r), null != i && (a[a.length] = i);
                    else
                        for (o in e) i = n(e[o], o, r), null != i && (a[a.length] = i);
                    return a.concat.apply([], a)
                },
                guid: 1,
                proxy: function(e, n) {
                    var r, i, o;
                    return "string" == typeof n && (r = e[n], n = e, e = r), K.isFunction(e) ? (i = Y.call(arguments, 2), o = function() {
                        return e.apply(n, i.concat(Y.call(arguments)))
                    }, o.guid = e.guid = e.guid || o.guid || K.guid++, o) : t
                },
                access: function(e, n, r, i, o, a, s) {
                    var u, l = null == r,
                        c = 0,
                        f = e.length;
                    if (r && "object" == typeof r) {
                        for (c in r) K.access(e, n, c, r[c], 1, a, i);
                        o = 1
                    } else if (i !== t) {
                        if (u = s === t && K.isFunction(i), l && (u ? (u = n, n = function(e, t, n) {
                                return u.call(K(e), n)
                            }) : (n.call(e, i), n = null)), n)
                            for (; f > c; c++) n(e[c], r, u ? i.call(e[c], c, n(e[c], r)) : i, s);
                        o = 1
                    }
                    return o ? e : l ? n.call(e) : f ? n(e[0], r) : a
                },
                now: function() {
                    return (new Date).getTime()
                }
            }), K.ready.promise = function(t) {
                if (!W)
                    if (W = K.Deferred(), "complete" === R.readyState || "loading" !== R.readyState && R.addEventListener) setTimeout(K.ready, 1);
                    else if (R.addEventListener) R.addEventListener("DOMContentLoaded", dt, !1), e.addEventListener("load", K.ready, !1);
                else {
                    R.attachEvent("onreadystatechange", dt), e.attachEvent("onload", K.ready);
                    var n = !1;
                    try {
                        n = null == e.frameElement && R.documentElement
                    } catch (r) {}
                    n && n.doScroll && function i() {
                        if (!K.isReady) {
                            try {
                                n.doScroll("left")
                            } catch (e) {
                                return setTimeout(i, 50)
                            }
                            K.ready()
                        }
                    }()
                }
                return W.promise(t)
            }, K.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
                pt["[object " + t + "]"] = t.toLowerCase()
            }), B = K(R);
            var ht = {};
            K.Callbacks = function(e) {
                e = "string" == typeof e ? ht[e] || n(e) : K.extend({}, e);
                var r, i, o, a, s, u, l = [],
                    c = !e.once && [],
                    f = function(t) {
                        for (r = e.memory && t, i = !0, u = a || 0, a = 0, s = l.length, o = !0; l && s > u; u++)
                            if (l[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                                r = !1;
                                break
                            }
                        o = !1, l && (c ? c.length && f(c.shift()) : r ? l = [] : d.disable())
                    },
                    d = {
                        add: function() {
                            if (l) {
                                var t = l.length;
                                ! function n(t) {
                                    K.each(t, function(t, r) {
                                        !K.isFunction(r) || e.unique && d.has(r) ? r && r.length && n(r) : l.push(r)
                                    })
                                }(arguments), o ? s = l.length : r && (a = t, f(r))
                            }
                            return this
                        },
                        remove: function() {
                            return l && K.each(arguments, function(e, t) {
                                for (var n;
                                    (n = K.inArray(t, l, n)) > -1;) l.splice(n, 1), o && (s >= n && s--, u >= n && u--)
                            }), this
                        },
                        has: function(e) {
                            return K.inArray(e, l) > -1
                        },
                        empty: function() {
                            return l = [], this
                        },
                        disable: function() {
                            return l = c = r = t, this
                        },
                        disabled: function() {
                            return !l
                        },
                        lock: function() {
                            return c = t, r || d.disable(), this
                        },
                        locked: function() {
                            return !c
                        },
                        fireWith: function(e, t) {
                            return t = t || [], t = [e, t.slice ? t.slice() : t], l && (!i || c) && (o ? c.push(t) : f(t)), this
                        },
                        fire: function() {
                            return d.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!i
                        }
                    };
                return d
            }, K.extend({
                Deferred: function(e) {
                    var t = [
                            ["resolve", "done", K.Callbacks("once memory"), "resolved"],
                            ["reject", "fail", K.Callbacks("once memory"), "rejected"],
                            ["notify", "progress", K.Callbacks("memory")]
                        ],
                        n = "pending",
                        r = {
                            state: function() {
                                return n
                            },
                            always: function() {
                                return i.done(arguments).fail(arguments), this
                            },
                            then: function() {
                                var e = arguments;
                                return K.Deferred(function(n) {
                                    K.each(t, function(t, r) {
                                        var o = r[0],
                                            a = e[t];
                                        i[r[1]](K.isFunction(a) ? function() {
                                            var e = a.apply(this, arguments);
                                            e && K.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === i ? n : this, [e])
                                        } : n[o])
                                    }), e = null
                                }).promise()
                            },
                            promise: function(e) {
                                return "object" == typeof e ? K.extend(e, r) : r
                            }
                        },
                        i = {};
                    return r.pipe = r.then, K.each(t, function(e, o) {
                        var a = o[2],
                            s = o[3];
                        r[o[1]] = a.add, s && a.add(function() {
                            n = s
                        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = a.fire, i[o[0] + "With"] = a.fireWith
                    }), r.promise(i), e && e.call(i, i), i
                },
                when: function(e) {
                    var t, n, r, i = 0,
                        o = Y.call(arguments),
                        a = o.length,
                        s = 1 !== a || e && K.isFunction(e.promise) ? a : 0,
                        u = 1 === s ? e : K.Deferred(),
                        l = function(e, n, r) {
                            return function(i) {
                                n[e] = this, r[e] = arguments.length > 1 ? Y.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                            }
                        };
                    if (a > 1)
                        for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && K.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
                    return s || u.resolveWith(r, o), u.promise()
                }
            }), K.support = function() {
                var t, n, r, i, o, a, s, u, l, c, f, d = R.createElement("div");
                if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0], r.style.cssText = "top:1px;float:left;opacity:.5", !n || !n.length || !r) return {};
                i = R.createElement("select"), o = i.appendChild(R.createElement("option")), a = d.getElementsByTagName("input")[0], t = {
                    leadingWhitespace: 3 === d.firstChild.nodeType,
                    tbody: !d.getElementsByTagName("tbody").length,
                    htmlSerialize: !!d.getElementsByTagName("link").length,
                    style: /top/.test(r.getAttribute("style")),
                    hrefNormalized: "/a" === r.getAttribute("href"),
                    opacity: /^0.5/.test(r.style.opacity),
                    cssFloat: !!r.style.cssFloat,
                    checkOn: "on" === a.value,
                    optSelected: o.selected,
                    getSetAttribute: "t" !== d.className,
                    enctype: !!R.createElement("form").enctype,
                    html5Clone: "<:nav></:nav>" !== R.createElement("nav").cloneNode(!0).outerHTML,
                    boxModel: "CSS1Compat" === R.compatMode,
                    submitBubbles: !0,
                    changeBubbles: !0,
                    focusinBubbles: !1,
                    deleteExpando: !0,
                    noCloneEvent: !0,
                    inlineBlockNeedsLayout: !1,
                    shrinkWrapBlocks: !1,
                    reliableMarginRight: !0,
                    boxSizingReliable: !0,
                    pixelPosition: !1
                }, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, i.disabled = !0, t.optDisabled = !o.disabled;
                try {
                    delete d.test
                } catch (p) {
                    t.deleteExpando = !1
                }
                if (!d.addEventListener && d.attachEvent && d.fireEvent && (d.attachEvent("onclick", f = function() {
                        t.noCloneEvent = !1
                    }), d.cloneNode(!0).fireEvent("onclick"), d.detachEvent("onclick", f)), a = R.createElement("input"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "checked"), a.setAttribute("name", "t"), d.appendChild(a), s = R.createDocumentFragment(), s.appendChild(d.lastChild), t.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = a.checked, s.removeChild(a), s.appendChild(d), d.attachEvent)
                    for (l in {
                            submit: !0,
                            change: !0,
                            focusin: !0
                        }) u = "on" + l, c = u in d, c || (d.setAttribute(u, "return;"), c = "function" == typeof d[u]), t[l + "Bubbles"] = c;
                return K(function() {
                    var n, r, i, o, a = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                        s = R.getElementsByTagName("body")[0];
                    s && (n = R.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", s.insertBefore(n, s.firstChild), r = R.createElement("div"), n.appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = r.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === i[0].offsetHeight, r.innerHTML = "", r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === r.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(r, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(r, null) || {
                        width: "4px"
                    }).width, o = R.createElement("div"), o.style.cssText = r.style.cssText = a, o.style.marginRight = o.style.width = "0", r.style.width = "1px", r.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), "undefined" != typeof r.style.zoom && (r.innerHTML = "", r.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === r.offsetWidth, r.style.display = "block", r.style.overflow = "visible", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== r.offsetWidth, n.style.zoom = 1), s.removeChild(n), n = r = i = o = null)
                }), s.removeChild(d), n = r = i = o = a = s = d = null, t
            }();
            var gt = /^(?:\{.*\}|\[.*\])$/,
                mt = /([A-Z])/g;
            K.extend({
                cache: {},
                deletedIds: [],
                uuid: 0,
                expando: "jQuery" + (K.fn.jquery + Math.random()).replace(/\D/g, ""),
                noData: {
                    embed: !0,
                    object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                    applet: !0
                },
                hasData: function(e) {
                    return e = e.nodeType ? K.cache[e[K.expando]] : e[K.expando], !!e && !i(e)
                },
                data: function(e, n, r, i) {
                    if (K.acceptData(e)) {
                        var o, a, s = K.expando,
                            u = "string" == typeof n,
                            l = e.nodeType,
                            c = l ? K.cache : e,
                            f = l ? e[s] : e[s] && s;
                        if (f && c[f] && (i || c[f].data) || !u || r !== t) return f || (l ? e[s] = f = K.deletedIds.pop() || ++K.uuid : f = s), c[f] || (c[f] = {}, l || (c[f].toJSON = K.noop)), ("object" == typeof n || "function" == typeof n) && (i ? c[f] = K.extend(c[f], n) : c[f].data = K.extend(c[f].data, n)), o = c[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[K.camelCase(n)] = r), u ? (a = o[n], null == a && (a = o[K.camelCase(n)])) : a = o, a
                    }
                },
                removeData: function(e, t, n) {
                    if (K.acceptData(e)) {
                        var r, o, a, s = e.nodeType,
                            u = s ? K.cache : e,
                            l = s ? e[K.expando] : K.expando;
                        if (u[l]) {
                            if (t && (r = n ? u[l] : u[l].data)) {
                                K.isArray(t) || (t in r ? t = [t] : (t = K.camelCase(t), t = t in r ? [t] : t.split(" ")));
                                for (o = 0, a = t.length; a > o; o++) delete r[t[o]];
                                if (!(n ? i : K.isEmptyObject)(r)) return
                            }(n || (delete u[l].data, i(u[l]))) && (s ? K.cleanData([e], !0) : K.support.deleteExpando || u != u.window ? delete u[l] : u[l] = null)
                        }
                    }
                },
                _data: function(e, t, n) {
                    return K.data(e, t, n, !0)
                },
                acceptData: function(e) {
                    var t = e.nodeName && K.noData[e.nodeName.toLowerCase()];
                    return !t || t !== !0 && e.getAttribute("classid") === t
                }
            }), K.fn.extend({
                data: function(e, n) {
                    var i, o, a, s, u, l = this[0],
                        c = 0,
                        f = null;
                    if (e === t) {
                        if (this.length && (f = K.data(l), 1 === l.nodeType && !K._data(l, "parsedAttrs"))) {
                            for (a = l.attributes, u = a.length; u > c; c++) s = a[c].name, 0 === s.indexOf("data-") && (s = K.camelCase(s.substring(5)), r(l, s, f[s]));
                            K._data(l, "parsedAttrs", !0)
                        }
                        return f
                    }
                    return "object" == typeof e ? this.each(function() {
                        K.data(this, e)
                    }) : (i = e.split(".", 2), i[1] = i[1] ? "." + i[1] : "", o = i[1] + "!", K.access(this, function(n) {
                        return n === t ? (f = this.triggerHandler("getData" + o, [i[0]]), f === t && l && (f = K.data(l, e), f = r(l, e, f)), f === t && i[1] ? this.data(i[0]) : f) : (i[1] = n, void this.each(function() {
                            var t = K(this);
                            t.triggerHandler("setData" + o, i), K.data(this, e, n), t.triggerHandler("changeData" + o, i)
                        }))
                    }, null, n, arguments.length > 1, null, !1))
                },
                removeData: function(e) {
                    return this.each(function() {
                        K.removeData(this, e)
                    })
                }
            }), K.extend({
                queue: function(e, t, n) {
                    var r;
                    return e ? (t = (t || "fx") + "queue", r = K._data(e, t), n && (!r || K.isArray(n) ? r = K._data(e, t, K.makeArray(n)) : r.push(n)), r || []) : void 0
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = K.queue(e, t),
                        r = n.shift(),
                        i = K._queueHooks(e, t),
                        o = function() {
                            K.dequeue(e, t)
                        };
                    "inprogress" === r && (r = n.shift()), r && ("fx" === t && n.unshift("inprogress"), delete i.stop, r.call(e, o, i)), !n.length && i && i.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return K._data(e, n) || K._data(e, n, {
                        empty: K.Callbacks("once memory").add(function() {
                            K.removeData(e, t + "queue", !0), K.removeData(e, n, !0)
                        })
                    })
                }
            }), K.fn.extend({
                queue: function(e, n) {
                    var r = 2;
                    return "string" != typeof e && (n = e, e = "fx", r--), arguments.length < r ? K.queue(this[0], e) : n === t ? this : this.each(function() {
                        var t = K.queue(this, e, n);
                        K._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && K.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        K.dequeue(this, e)
                    })
                },
                delay: function(e, t) {
                    return e = K.fx ? K.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                        var r = setTimeout(t, e);
                        n.stop = function() {
                            clearTimeout(r)
                        }
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, n) {
                    var r, i = 1,
                        o = K.Deferred(),
                        a = this,
                        s = this.length,
                        u = function() {
                            --i || o.resolveWith(a, [a])
                        };
                    for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;)(r = K._data(a[s], e + "queueHooks")) && r.empty && (i++, r.empty.add(u));
                    return u(), o.promise(n)
                }
            });
            var yt, vt, bt, xt = /[\t\r\n]/g,
                wt = /\r/g,
                Tt = /^(?:button|input)$/i,
                Et = /^(?:button|input|object|select|textarea)$/i,
                Nt = /^a(?:rea|)$/i,
                Ct = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
                St = K.support.getSetAttribute;
            K.fn.extend({
                attr: function(e, t) {
                    return K.access(this, K.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        K.removeAttr(this, e)
                    })
                },
                prop: function(e, t) {
                    return K.access(this, K.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return e = K.propFix[e] || e, this.each(function() {
                        try {
                            this[e] = t, delete this[e]
                        } catch (n) {}
                    })
                },
                addClass: function(e) {
                    var t, n, r, i, o, a, s;
                    if (K.isFunction(e)) return this.each(function(t) {
                        K(this).addClass(e.call(this, t, this.className))
                    });
                    if (e && "string" == typeof e)
                        for (t = e.split(tt), n = 0, r = this.length; r > n; n++)
                            if (i = this[n], 1 === i.nodeType)
                                if (i.className || 1 !== t.length) {
                                    for (o = " " + i.className + " ", a = 0, s = t.length; s > a; a++) ~o.indexOf(" " + t[a] + " ") || (o += t[a] + " ");
                                    i.className = K.trim(o)
                                } else i.className = e;
                    return this
                },
                removeClass: function(e) {
                    var n, r, i, o, a, s, u;
                    if (K.isFunction(e)) return this.each(function(t) {
                        K(this).removeClass(e.call(this, t, this.className))
                    });
                    if (e && "string" == typeof e || e === t)
                        for (n = (e || "").split(tt), s = 0, u = this.length; u > s; s++)
                            if (i = this[s], 1 === i.nodeType && i.className) {
                                for (r = (" " + i.className + " ").replace(xt, " "), o = 0, a = n.length; a > o; o++)
                                    for (; r.indexOf(" " + n[o] + " ") > -1;) r = r.replace(" " + n[o] + " ", " ");
                                i.className = e ? K.trim(r) : ""
                            }
                    return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e,
                        r = "boolean" == typeof t;
                    return this.each(K.isFunction(e) ? function(n) {
                        K(this).toggleClass(e.call(this, n, this.className, t), t)
                    } : function() {
                        if ("string" === n)
                            for (var i, o = 0, a = K(this), s = t, u = e.split(tt); i = u[o++];) s = r ? s : !a.hasClass(i), a[s ? "addClass" : "removeClass"](i);
                        else("undefined" === n || "boolean" === n) && (this.className && K._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : K._data(this, "__className__") || "")
                    })
                },
                hasClass: function(e) {
                    for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                        if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(xt, " ").indexOf(t) > -1) return !0;
                    return !1
                },
                val: function(e) {
                    var n, r, i, o = this[0]; {
                        if (arguments.length) return i = K.isFunction(e), this.each(function(r) {
                            var o, a = K(this);
                            1 === this.nodeType && (o = i ? e.call(this, r, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : K.isArray(o) && (o = K.map(o, function(e) {
                                return null == e ? "" : e + ""
                            })), n = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== t || (this.value = o))
                        });
                        if (o) return n = K.valHooks[o.type] || K.valHooks[o.nodeName.toLowerCase()], n && "get" in n && (r = n.get(o, "value")) !== t ? r : (r = o.value, "string" == typeof r ? r.replace(wt, "") : null == r ? "" : r)
                    }
                }
            }), K.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = e.attributes.value;
                            return !t || t.specified ? e.value : e.text
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, n, r, i, o = e.selectedIndex,
                                a = [],
                                s = e.options,
                                u = "select-one" === e.type;
                            if (0 > o) return null;
                            for (n = u ? o : 0, r = u ? o + 1 : s.length; r > n; n++)
                                if (i = s[n], !(!i.selected || (K.support.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && K.nodeName(i.parentNode, "optgroup"))) {
                                    if (t = K(i).val(), u) return t;
                                    a.push(t)
                                }
                            return u && !a.length && s.length ? K(s[o]).val() : a
                        },
                        set: function(e, t) {
                            var n = K.makeArray(t);
                            return K(e).find("option").each(function() {
                                this.selected = K.inArray(K(this).val(), n) >= 0
                            }), n.length || (e.selectedIndex = -1), n
                        }
                    }
                },
                attrFn: {},
                attr: function(e, n, r, i) {
                    var o, a, s, u = e.nodeType;
                    if (e && 3 !== u && 8 !== u && 2 !== u) return i && K.isFunction(K.fn[n]) ? K(e)[n](r) : "undefined" == typeof e.getAttribute ? K.prop(e, n, r) : (s = 1 !== u || !K.isXMLDoc(e), s && (n = n.toLowerCase(), a = K.attrHooks[n] || (Ct.test(n) ? vt : yt)), r !== t ? null === r ? void K.removeAttr(e, n) : a && "set" in a && s && (o = a.set(e, r, n)) !== t ? o : (e.setAttribute(n, "" + r), r) : a && "get" in a && s && null !== (o = a.get(e, n)) ? o : (o = e.getAttribute(n), null === o ? t : o))
                },
                removeAttr: function(e, t) {
                    var n, r, i, o, a = 0;
                    if (t && 1 === e.nodeType)
                        for (r = t.split(tt); a < r.length; a++) i = r[a], i && (n = K.propFix[i] || i, o = Ct.test(i), o || K.attr(e, i, ""), e.removeAttribute(St ? i : n), o && n in e && (e[n] = !1))
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (Tt.test(e.nodeName) && e.parentNode) K.error("type property can't be changed");
                            else if (!K.support.radioValue && "radio" === t && K.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    },
                    value: {
                        get: function(e, t) {
                            return yt && K.nodeName(e, "button") ? yt.get(e, t) : t in e ? e.value : null
                        },
                        set: function(e, t, n) {
                            return yt && K.nodeName(e, "button") ? yt.set(e, t, n) : void(e.value = t)
                        }
                    }
                },
                propFix: {
                    tabindex: "tabIndex",
                    readonly: "readOnly",
                    "for": "htmlFor",
                    "class": "className",
                    maxlength: "maxLength",
                    cellspacing: "cellSpacing",
                    cellpadding: "cellPadding",
                    rowspan: "rowSpan",
                    colspan: "colSpan",
                    usemap: "useMap",
                    frameborder: "frameBorder",
                    contenteditable: "contentEditable"
                },
                prop: function(e, n, r) {
                    var i, o, a, s = e.nodeType;
                    if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !K.isXMLDoc(e), a && (n = K.propFix[n] || n, o = K.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var n = e.getAttributeNode("tabindex");
                            return n && n.specified ? parseInt(n.value, 10) : Et.test(e.nodeName) || Nt.test(e.nodeName) && e.href ? 0 : t
                        }
                    }
                }
            }), vt = {
                get: function(e, n) {
                    var r, i = K.prop(e, n);
                    return i === !0 || "boolean" != typeof i && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
                },
                set: function(e, t, n) {
                    var r;
                    return t === !1 ? K.removeAttr(e, n) : (r = K.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
                }
            }, St || (bt = {
                name: !0,
                id: !0,
                coords: !0
            }, yt = K.valHooks.button = {
                get: function(e, n) {
                    var r;
                    return r = e.getAttributeNode(n), r && (bt[n] ? "" !== r.value : r.specified) ? r.value : t
                },
                set: function(e, t, n) {
                    var r = e.getAttributeNode(n);
                    return r || (r = R.createAttribute(n), e.setAttributeNode(r)), r.value = t + ""
                }
            }, K.each(["width", "height"], function(e, t) {
                K.attrHooks[t] = K.extend(K.attrHooks[t], {
                    set: function(e, n) {
                        return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
                    }
                })
            }), K.attrHooks.contenteditable = {
                get: yt.get,
                set: function(e, t, n) {
                    "" === t && (t = "false"), yt.set(e, t, n)
                }
            }), K.support.hrefNormalized || K.each(["href", "src", "width", "height"], function(e, n) {
                K.attrHooks[n] = K.extend(K.attrHooks[n], {
                    get: function(e) {
                        var r = e.getAttribute(n, 2);
                        return null === r ? t : r
                    }
                })
            }), K.support.style || (K.attrHooks.style = {
                get: function(e) {
                    return e.style.cssText.toLowerCase() || t
                },
                set: function(e, t) {
                    return e.style.cssText = "" + t
                }
            }), K.support.optSelected || (K.propHooks.selected = K.extend(K.propHooks.selected, {
                get: function(e) {
                    var t = e.parentNode;
                    return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
                }
            })), K.support.enctype || (K.propFix.enctype = "encoding"), K.support.checkOn || K.each(["radio", "checkbox"], function() {
                K.valHooks[this] = {
                    get: function(e) {
                        return null === e.getAttribute("value") ? "on" : e.value
                    }
                }
            }), K.each(["radio", "checkbox"], function() {
                K.valHooks[this] = K.extend(K.valHooks[this], {
                    set: function(e, t) {
                        return K.isArray(t) ? e.checked = K.inArray(K(e).val(), t) >= 0 : void 0
                    }
                })
            });
            var kt = /^(?:textarea|input|select)$/i,
                At = /^([^\.]*|)(?:\.(.+)|)$/,
                Dt = /(?:^|\s)hover(\.\S+|)\b/,
                jt = /^key/,
                Lt = /^(?:mouse|contextmenu)|click/,
                Ht = /^(?:focusinfocus|focusoutblur)$/,
                Ot = function(e) {
                    return K.event.special.hover ? e : e.replace(Dt, "mouseenter$1 mouseleave$1")
                };
            K.event = {
                    add: function(e, n, r, i, o) {
                        var a, s, u, l, c, f, d, p, h, g, m;
                        if (3 !== e.nodeType && 8 !== e.nodeType && n && r && (a = K._data(e))) {
                            for (r.handler && (h = r, r = h.handler, o = h.selector), r.guid || (r.guid = K.guid++), u = a.events, u || (a.events = u = {}), s = a.handle, s || (a.handle = s = function(e) {
                                    return "undefined" == typeof K || e && K.event.triggered === e.type ? t : K.event.dispatch.apply(s.elem, arguments)
                                }, s.elem = e), n = K.trim(Ot(n)).split(" "), l = 0; l < n.length; l++) c = At.exec(n[l]) || [], f = c[1], d = (c[2] || "").split(".").sort(), m = K.event.special[f] || {}, f = (o ? m.delegateType : m.bindType) || f, m = K.event.special[f] || {}, p = K.extend({
                                type: f,
                                origType: c[1],
                                data: i,
                                handler: r,
                                guid: r.guid,
                                selector: o,
                                namespace: d.join(".")
                            }, h), g = u[f], g || (g = u[f] = [], g.delegateCount = 0, m.setup && m.setup.call(e, i, d, s) !== !1 || (e.addEventListener ? e.addEventListener(f, s, !1) : e.attachEvent && e.attachEvent("on" + f, s))), m.add && (m.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? g.splice(g.delegateCount++, 0, p) : g.push(p), K.event.global[f] = !0;
                            e = null
                        }
                    },
                    global: {},
                    remove: function(e, t, n, r, i) {
                        var o, a, s, u, l, c, f, d, p, h, g, m = K.hasData(e) && K._data(e);
                        if (m && (d = m.events)) {
                            for (t = K.trim(Ot(t || "")).split(" "), o = 0; o < t.length; o++)
                                if (a = At.exec(t[o]) || [], s = u = a[1], l = a[2], s) {
                                    for (p = K.event.special[s] || {}, s = (r ? p.delegateType : p.bindType) || s, h = d[s] || [], c = h.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, f = 0; f < h.length; f++) g = h[f], !(!i && u !== g.origType || n && n.guid !== g.guid || l && !l.test(g.namespace) || r && r !== g.selector && ("**" !== r || !g.selector) || (h.splice(f--, 1), g.selector && h.delegateCount--, !p.remove || !p.remove.call(e, g)));
                                    0 === h.length && c !== h.length && ((!p.teardown || p.teardown.call(e, l, m.handle) === !1) && K.removeEvent(e, s, m.handle), delete d[s])
                                } else
                                    for (s in d) K.event.remove(e, s + t[o], n, r, !0);
                            K.isEmptyObject(d) && (delete m.handle, K.removeData(e, "events", !0))
                        }
                    },
                    customEvent: {
                        getData: !0,
                        setData: !0,
                        changeData: !0
                    },
                    trigger: function(n, r, i, o) {
                        if (!i || 3 !== i.nodeType && 8 !== i.nodeType) {
                            var a, s, u, l, c, f, d, p, h, g, m = n.type || n,
                                y = [];
                            if (Ht.test(m + K.event.triggered)) return;
                            if (m.indexOf("!") >= 0 && (m = m.slice(0, -1), s = !0), m.indexOf(".") >= 0 && (y = m.split("."), m = y.shift(), y.sort()), (!i || K.event.customEvent[m]) && !K.event.global[m]) return;
                            if (n = "object" == typeof n ? n[K.expando] ? n : new K.Event(m, n) : new K.Event(m), n.type = m, n.isTrigger = !0, n.exclusive = s, n.namespace = y.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, f = m.indexOf(":") < 0 ? "on" + m : "", !i) {
                                a = K.cache;
                                for (u in a) a[u].events && a[u].events[m] && K.event.trigger(n, r, a[u].handle.elem, !0);
                                return
                            }
                            if (n.result = t, n.target || (n.target = i), r = null != r ? K.makeArray(r) : [], r.unshift(n), d = K.event.special[m] || {}, d.trigger && d.trigger.apply(i, r) === !1) return;
                            if (h = [
                                    [i, d.bindType || m]
                                ], !o && !d.noBubble && !K.isWindow(i)) {
                                for (g = d.delegateType || m, l = Ht.test(g + m) ? i : i.parentNode, c = i; l; l = l.parentNode) h.push([l, g]), c = l;
                                c === (i.ownerDocument || R) && h.push([c.defaultView || c.parentWindow || e, g])
                            }
                            for (u = 0; u < h.length && !n.isPropagationStopped(); u++) l = h[u][0], n.type = h[u][1], p = (K._data(l, "events") || {})[n.type] && K._data(l, "handle"), p && p.apply(l, r), p = f && l[f], p && K.acceptData(l) && p.apply(l, r) === !1 && n.preventDefault();
                            return n.type = m, !(o || n.isDefaultPrevented() || d._default && d._default.apply(i.ownerDocument, r) !== !1 || "click" === m && K.nodeName(i, "a") || !K.acceptData(i) || !f || !i[m] || ("focus" === m || "blur" === m) && 0 === n.target.offsetWidth || K.isWindow(i) || (c = i[f], c && (i[f] = null), K.event.triggered = m, i[m](), K.event.triggered = t, !c || !(i[f] = c))), n.result
                        }
                    },
                    dispatch: function(n) {
                        n = K.event.fix(n || e.event);
                        var r, i, o, a, s, u, l, c, f, d, p = (K._data(this, "events") || {})[n.type] || [],
                            h = p.delegateCount,
                            g = [].slice.call(arguments),
                            m = !n.exclusive && !n.namespace,
                            y = K.event.special[n.type] || {},
                            v = [];
                        if (g[0] = n, n.delegateTarget = this, !y.preDispatch || y.preDispatch.call(this, n) !== !1) {
                            if (h && (!n.button || "click" !== n.type))
                                for (a = K(this), a.context = this, o = n.target; o != this; o = o.parentNode || this)
                                    if (o.disabled !== !0 || "click" !== n.type) {
                                        for (u = {}, c = [], a[0] = o, r = 0; h > r; r++) f = p[r], d = f.selector, u[d] === t && (u[d] = a.is(d)), u[d] && c.push(f);
                                        c.length && v.push({
                                            elem: o,
                                            matches: c
                                        })
                                    }
                            for (p.length > h && v.push({
                                    elem: this,
                                    matches: p.slice(h)
                                }), r = 0; r < v.length && !n.isPropagationStopped(); r++)
                                for (l = v[r], n.currentTarget = l.elem, i = 0; i < l.matches.length && !n.isImmediatePropagationStopped(); i++) f = l.matches[i], (m || !n.namespace && !f.namespace || n.namespace_re && n.namespace_re.test(f.namespace)) && (n.data = f.data, n.handleObj = f, s = ((K.event.special[f.origType] || {}).handle || f.handler).apply(l.elem, g), s !== t && (n.result = s, s === !1 && (n.preventDefault(), n.stopPropagation())));
                            return y.postDispatch && y.postDispatch.call(this, n), n.result
                        }
                    },
                    props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                    fixHooks: {},
                    keyHooks: {
                        props: "char charCode key keyCode".split(" "),
                        filter: function(e, t) {
                            return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                        }
                    },
                    mouseHooks: {
                        props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                        filter: function(e, n) {
                            var r, i, o, a = n.button,
                                s = n.fromElement;
                            return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || R, i = r.documentElement, o = r.body, e.pageX = n.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), !e.which && a !== t && (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
                        }
                    },
                    fix: function(e) {
                        if (e[K.expando]) return e;
                        var t, n, r = e,
                            i = K.event.fixHooks[e.type] || {},
                            o = i.props ? this.props.concat(i.props) : this.props;
                        for (e = K.Event(r), t = o.length; t;) n = o[--t], e[n] = r[n];
                        return e.target || (e.target = r.srcElement || R), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, i.filter ? i.filter(e, r) : e
                    },
                    special: {
                        ready: {
                            setup: K.bindReady
                        },
                        load: {
                            noBubble: !0
                        },
                        focus: {
                            delegateType: "focusin"
                        },
                        blur: {
                            delegateType: "focusout"
                        },
                        beforeunload: {
                            setup: function(e, t, n) {
                                K.isWindow(this) && (this.onbeforeunload = n)
                            },
                            teardown: function(e, t) {
                                this.onbeforeunload === t && (this.onbeforeunload = null)
                            }
                        }
                    },
                    simulate: function(e, t, n, r) {
                        var i = K.extend(new K.Event, n, {
                            type: e,
                            isSimulated: !0,
                            originalEvent: {}
                        });
                        r ? K.event.trigger(i, null, t) : K.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
                    }
                }, K.event.handle = K.event.dispatch, K.removeEvent = R.removeEventListener ? function(e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n, !1)
                } : function(e, t, n) {
                    var r = "on" + t;
                    e.detachEvent && ("undefined" == typeof e[r] && (e[r] = null), e.detachEvent(r, n))
                }, K.Event = function(e, t) {
                    return this instanceof K.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? a : o) : this.type = e, t && K.extend(this, t), this.timeStamp = e && e.timeStamp || K.now(), this[K.expando] = !0, void 0) : new K.Event(e, t)
                }, K.Event.prototype = {
                    preventDefault: function() {
                        this.isDefaultPrevented = a;
                        var e = this.originalEvent;
                        e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                    },
                    stopPropagation: function() {
                        this.isPropagationStopped = a;
                        var e = this.originalEvent;
                        e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
                    },
                    stopImmediatePropagation: function() {
                        this.isImmediatePropagationStopped = a, this.stopPropagation()
                    },
                    isDefaultPrevented: o,
                    isPropagationStopped: o,
                    isImmediatePropagationStopped: o
                }, K.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout"
                }, function(e, t) {
                    K.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function(e) {
                            {
                                var n, r = this,
                                    i = e.relatedTarget,
                                    o = e.handleObj;
                                o.selector
                            }
                            return (!i || i !== r && !K.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                        }
                    }
                }), K.support.submitBubbles || (K.event.special.submit = {
                    setup: function() {
                        return K.nodeName(this, "form") ? !1 : void K.event.add(this, "click._submit keypress._submit", function(e) {
                            var n = e.target,
                                r = K.nodeName(n, "input") || K.nodeName(n, "button") ? n.form : t;
                            r && !K._data(r, "_submit_attached") && (K.event.add(r, "submit._submit", function(e) {
                                e._submit_bubble = !0
                            }), K._data(r, "_submit_attached", !0))
                        })
                    },
                    postDispatch: function(e) {
                        e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && K.event.simulate("submit", this.parentNode, e, !0))
                    },
                    teardown: function() {
                        return K.nodeName(this, "form") ? !1 : void K.event.remove(this, "._submit")
                    }
                }), K.support.changeBubbles || (K.event.special.change = {
                    setup: function() {
                        return kt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (K.event.add(this, "propertychange._change", function(e) {
                            "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                        }), K.event.add(this, "click._change", function(e) {
                            this._just_changed && !e.isTrigger && (this._just_changed = !1), K.event.simulate("change", this, e, !0)
                        })), !1) : void K.event.add(this, "beforeactivate._change", function(e) {
                            var t = e.target;
                            kt.test(t.nodeName) && !K._data(t, "_change_attached") && (K.event.add(t, "change._change", function(e) {
                                this.parentNode && !e.isSimulated && !e.isTrigger && K.event.simulate("change", this.parentNode, e, !0)
                            }), K._data(t, "_change_attached", !0))
                        })
                    },
                    handle: function(e) {
                        var t = e.target;
                        return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
                    },
                    teardown: function() {
                        return K.event.remove(this, "._change"), kt.test(this.nodeName)
                    }
                }), K.support.focusinBubbles || K.each({
                    focus: "focusin",
                    blur: "focusout"
                }, function(e, t) {
                    var n = 0,
                        r = function(e) {
                            K.event.simulate(t, e.target, K.event.fix(e), !0)
                        };
                    K.event.special[t] = {
                        setup: function() {
                            0 === n++ && R.addEventListener(e, r, !0)
                        },
                        teardown: function() {
                            0 === --n && R.removeEventListener(e, r, !0)
                        }
                    }
                }), K.fn.extend({
                    on: function(e, n, r, i, a) {
                        var s, u;
                        if ("object" == typeof e) {
                            "string" != typeof n && (r = r || n, n = t);
                            for (u in e) this.on(u, n, r, e[u], a);
                            return this
                        }
                        if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = o;
                        else if (!i) return this;
                        return 1 === a && (s = i, i = function(e) {
                            return K().off(e), s.apply(this, arguments)
                        }, i.guid = s.guid || (s.guid = K.guid++)), this.each(function() {
                            K.event.add(this, e, i, r, n)
                        })
                    },
                    one: function(e, t, n, r) {
                        return this.on(e, t, n, r, 1)
                    },
                    off: function(e, n, r) {
                        var i, a;
                        if (e && e.preventDefault && e.handleObj) return i = e.handleObj, K(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                        if ("object" == typeof e) {
                            for (a in e) this.off(a, n, e[a]);
                            return this
                        }
                        return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = o), this.each(function() {
                            K.event.remove(this, e, r, n)
                        })
                    },
                    bind: function(e, t, n) {
                        return this.on(e, null, t, n)
                    },
                    unbind: function(e, t) {
                        return this.off(e, null, t)
                    },
                    live: function(e, t, n) {
                        return K(this.context).on(e, this.selector, t, n), this
                    },
                    die: function(e, t) {
                        return K(this.context).off(e, this.selector || "**", t), this
                    },
                    delegate: function(e, t, n, r) {
                        return this.on(t, e, n, r)
                    },
                    undelegate: function(e, t, n) {
                        return 1 == arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                    },
                    trigger: function(e, t) {
                        return this.each(function() {
                            K.event.trigger(e, t, this)
                        })
                    },
                    triggerHandler: function(e, t) {
                        return this[0] ? K.event.trigger(e, t, this[0], !0) : void 0
                    },
                    toggle: function(e) {
                        var t = arguments,
                            n = e.guid || K.guid++,
                            r = 0,
                            i = function(n) {
                                var i = (K._data(this, "lastToggle" + e.guid) || 0) % r;
                                return K._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1
                            };
                        for (i.guid = n; r < t.length;) t[r++].guid = n;
                        return this.click(i)
                    },
                    hover: function(e, t) {
                        return this.mouseenter(e).mouseleave(t || e)
                    }
                }), K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
                    K.fn[t] = function(e, n) {
                        return null == n && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                    }, jt.test(t) && (K.event.fixHooks[t] = K.event.keyHooks), Lt.test(t) && (K.event.fixHooks[t] = K.event.mouseHooks)
                }),
                function(e, t) {
                    function n(e, t, n, r) {
                        for (var i = 0, o = t.length; o > i; i++) ot(e, t[i], n, r)
                    }

                    function r(e, t, r, i, o, a) {
                        var s, u = at.setFilters[t.toLowerCase()];
                        return u || ot.error(t), (e || !(s = o)) && n(e || "*", i, s = [], o), s.length > 0 ? u(s, r, a) : []
                    }

                    function i(e, i, o, a, s) {
                        for (var u, l, c, f, d, p, h, g, m = 0, y = s.length, v = z.POS, b = new RegExp("^" + v.source + "(?!" + N + ")", "i"), x = function() {
                                for (var e = 1, n = arguments.length - 2; n > e; e++) arguments[e] === t && (u[e] = t)
                            }; y > m; m++) {
                            for (v.exec(""), e = s[m], f = [], c = 0, d = a; u = v.exec(e);) g = v.lastIndex = u.index + u[0].length, g > c && (h = e.slice(c, u.index), c = g, p = [i], M.test(h) && (d && (p = d), d = a), (l = W.test(h)) && (h = h.slice(0, -5).replace(M, "$&*")), u.length > 1 && u[0].replace(b, x), d = r(h, u[1], u[2], p, d, l));
                            d ? (f = f.concat(d), (h = e.slice(c)) && ")" !== h ? M.test(h) ? n(h, f, o, a) : ot(h, i, o, a ? a.concat(d) : d) : T.apply(o, f)) : ot(e, i, o, a)
                        }
                        return 1 === y ? o : ot.uniqueSort(o)
                    }

                    function o(e, t, n) {
                        for (var r, i, o, a = [], s = 0, u = _.exec(e), l = !u.pop() && !u.pop(), c = l && e.match(F) || [""], f = at.preFilter, d = at.filter, p = !n && t !== g; null != (i = c[s]) && l; s++)
                            for (a.push(r = []), p && (i = " " + i); i;) {
                                l = !1, (u = M.exec(i)) && (i = i.slice(u[0].length), l = r.push({
                                    part: u.pop().replace(O, " "),
                                    captures: u
                                }));
                                for (o in d)(u = z[o].exec(i)) && (!f[o] || (u = f[o](u, t, n))) && (i = i.slice(u.shift().length), l = r.push({
                                    part: o,
                                    captures: u
                                }));
                                if (!l) break
                            }
                        return l || ot.error(e), a
                    }

                    function a(e, t, n) {
                        var r = t.dir,
                            i = x++;
                        return e || (e = function(e) {
                            return e === n
                        }), t.first ? function(t, n) {
                            for (; t = t[r];)
                                if (1 === t.nodeType) return e(t, n) && t
                        } : function(t, n) {
                            for (var o, a = i + "." + f, s = a + "." + c; t = t[r];)
                                if (1 === t.nodeType) {
                                    if ((o = t[E]) === s) return t.sizset;
                                    if ("string" == typeof o && 0 === o.indexOf(a)) {
                                        if (t.sizset) return t
                                    } else {
                                        if (t[E] = s, e(t, n)) return t.sizset = !0, t;
                                        t.sizset = !1
                                    }
                                }
                        }
                    }

                    function s(e, t) {
                        return e ? function(n, r) {
                            var i = t(n, r);
                            return i && e(i === !0 ? n : i, r)
                        } : t
                    }

                    function u(e, t, n) {
                        for (var r, i, o = 0; r = e[o]; o++) at.relative[r.part] ? i = a(i, at.relative[r.part], t) : (r.captures.push(t, n), i = s(i, at.filter[r.part].apply(null, r.captures)));
                        return i
                    }

                    function l(e) {
                        return function(t, n) {
                            for (var r, i = 0; r = e[i]; i++)
                                if (r(t, n)) return !0;
                            return !1
                        }
                    }
                    var c, f, d, p, h, g = e.document,
                        m = g.documentElement,
                        y = "undefined",
                        v = !1,
                        b = !0,
                        x = 0,
                        w = [].slice,
                        T = [].push,
                        E = ("sizcache" + Math.random()).replace(".", ""),
                        N = "[\\x20\\t\\r\\n\\f]",
                        C = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
                        S = C.replace("w", "w#"),
                        k = "([*^$|!~]?=)",
                        A = "\\[" + N + "*(" + C + ")" + N + "*(?:" + k + N + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + S + ")|)|)" + N + "*\\]",
                        D = ":(" + C + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|((?:[^,]|\\\\,|(?:,(?=[^\\[]*\\]))|(?:,(?=[^\\(]*\\))))*))\\)|)",
                        j = ":(nth|eq|gt|lt|first|last|even|odd)(?:\\((\\d*)\\)|)(?=[^-]|$)",
                        L = N + "*([\\x20\\t\\r\\n\\f>+~])" + N + "*",
                        H = "(?=[^\\x20\\t\\r\\n\\f])(?:\\\\.|" + A + "|" + D.replace(2, 7) + "|[^\\\\(),])+",
                        O = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$", "g"),
                        M = new RegExp("^" + L),
                        F = new RegExp(H + "?(?=" + N + "*,|$)", "g"),
                        _ = new RegExp("^(?:(?!,)(?:(?:^|,)" + N + "*" + H + ")*?|" + N + "*(.*?))(\\)|$)"),
                        P = new RegExp(H.slice(19, -6) + "\\x20\\t\\r\\n\\f>+~])+|" + L, "g"),
                        q = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
                        B = /[\x20\t\r\n\f]*[+~]/,
                        W = /:not\($/,
                        R = /h\d/i,
                        $ = /input|select|textarea|button/i,
                        I = /\\(?!\\)/g,
                        z = {
                            ID: new RegExp("^#(" + C + ")"),
                            CLASS: new RegExp("^\\.(" + C + ")"),
                            NAME: new RegExp("^\\[name=['\"]?(" + C + ")['\"]?\\]"),
                            TAG: new RegExp("^(" + C.replace("[-", "[-\\*") + ")"),
                            ATTR: new RegExp("^" + A),
                            PSEUDO: new RegExp("^" + D),
                            CHILD: new RegExp("^:(only|nth|last|first)-child(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)", "i"),
                            POS: new RegExp(j, "ig"),
                            needsContext: new RegExp("^" + N + "*[>+~]|" + j, "i")
                        },
                        X = {},
                        U = [],
                        Y = {},
                        V = [],
                        J = function(e) {
                            return e.sizzleFilter = !0, e
                        },
                        G = function(e) {
                            return function(t) {
                                return "input" === t.nodeName.toLowerCase() && t.type === e
                            }
                        },
                        Q = function(e) {
                            return function(t) {
                                var n = t.nodeName.toLowerCase();
                                return ("input" === n || "button" === n) && t.type === e
                            }
                        },
                        Z = function(e) {
                            var t = !1,
                                n = g.createElement("div");
                            try {
                                t = e(n)
                            } catch (r) {}
                            return n = null, t
                        },
                        et = Z(function(e) {
                            e.innerHTML = "<select></select>";
                            var t = typeof e.lastChild.getAttribute("multiple");
                            return "boolean" !== t && "string" !== t
                        }),
                        tt = Z(function(e) {
                            e.id = E + 0, e.innerHTML = "<a name='" + E + "'></a><div name='" + E + "'></div>", m.insertBefore(e, m.firstChild);
                            var t = g.getElementsByName && g.getElementsByName(E).length === 2 + g.getElementsByName(E + 0).length;
                            return h = !g.getElementById(E), m.removeChild(e), t
                        }),
                        nt = Z(function(e) {
                            return e.appendChild(g.createComment("")), 0 === e.getElementsByTagName("*").length
                        }),
                        rt = Z(function(e) {
                            return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== y && "#" === e.firstChild.getAttribute("href")
                        }),
                        it = Z(function(e) {
                            return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && 0 !== e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 1 !== e.getElementsByClassName("e").length) : !1
                        }),
                        ot = function(e, t, n, r) {
                            n = n || [], t = t || g;
                            var i, o, a, s, u = t.nodeType;
                            if (1 !== u && 9 !== u) return [];
                            if (!e || "string" != typeof e) return n;
                            if (a = ut(t), !a && !r && (i = q.exec(e)))
                                if (s = i[1]) {
                                    if (9 === u) {
                                        if (o = t.getElementById(s), !o || !o.parentNode) return n;
                                        if (o.id === s) return n.push(o), n
                                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && lt(t, o) && o.id === s) return n.push(o), n
                                } else {
                                    if (i[2]) return T.apply(n, w.call(t.getElementsByTagName(e), 0)), n;
                                    if ((s = i[3]) && it && t.getElementsByClassName) return T.apply(n, w.call(t.getElementsByClassName(s), 0)), n
                                }
                            return dt(e, t, n, r, a)
                        },
                        at = ot.selectors = {
                            cacheLength: 50,
                            match: z,
                            order: ["ID", "TAG"],
                            attrHandle: {},
                            createPseudo: J,
                            find: {
                                ID: h ? function(e, t, n) {
                                    if (typeof t.getElementById !== y && !n) {
                                        var r = t.getElementById(e);
                                        return r && r.parentNode ? [r] : []
                                    }
                                } : function(e, n, r) {
                                    if (typeof n.getElementById !== y && !r) {
                                        var i = n.getElementById(e);
                                        return i ? i.id === e || typeof i.getAttributeNode !== y && i.getAttributeNode("id").value === e ? [i] : t : []
                                    }
                                },
                                TAG: nt ? function(e, t) {
                                    return typeof t.getElementsByTagName !== y ? t.getElementsByTagName(e) : void 0
                                } : function(e, t) {
                                    var n = t.getElementsByTagName(e);
                                    if ("*" === e) {
                                        for (var r, i = [], o = 0; r = n[o]; o++) 1 === r.nodeType && i.push(r);
                                        return i
                                    }
                                    return n
                                }
                            },
                            relative: {
                                ">": {
                                    dir: "parentNode",
                                    first: !0
                                },
                                " ": {
                                    dir: "parentNode"
                                },
                                "+": {
                                    dir: "previousSibling",
                                    first: !0
                                },
                                "~": {
                                    dir: "previousSibling"
                                }
                            },
                            preFilter: {
                                ATTR: function(e) {
                                    return e[1] = e[1].replace(I, ""), e[3] = (e[4] || e[5] || "").replace(I, ""), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                                },
                                CHILD: function(e) {
                                    return e[1] = e[1].toLowerCase(), "nth" === e[1] ? (e[2] || ot.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * ("even" === e[2] || "odd" === e[2])), e[4] = +(e[6] + e[7] || "odd" === e[2])) : e[2] && ot.error(e[0]), e
                                },
                                PSEUDO: function(e) {
                                    var t, n = e[4];
                                    return z.CHILD.test(e[0]) ? null : (n && (t = _.exec(n)) && t.pop() && (e[0] = e[0].slice(0, t[0].length - n.length - 1), n = t[0].slice(0, -1)), e.splice(2, 3, n || e[3]), e)
                                }
                            },
                            filter: {
                                ID: h ? function(e) {
                                    return e = e.replace(I, ""),
                                        function(t) {
                                            return t.getAttribute("id") === e
                                        }
                                } : function(e) {
                                    return e = e.replace(I, ""),
                                        function(t) {
                                            var n = typeof t.getAttributeNode !== y && t.getAttributeNode("id");
                                            return n && n.value === e
                                        }
                                },
                                TAG: function(e) {
                                    return "*" === e ? function() {
                                        return !0
                                    } : (e = e.replace(I, "").toLowerCase(), function(t) {
                                        return t.nodeName && t.nodeName.toLowerCase() === e
                                    })
                                },
                                CLASS: function(e) {
                                    var t = X[e];
                                    return t || (t = X[e] = new RegExp("(^|" + N + ")" + e + "(" + N + "|$)"), U.push(e), U.length > at.cacheLength && delete X[U.shift()]),
                                        function(e) {
                                            return t.test(e.className || typeof e.getAttribute !== y && e.getAttribute("class") || "")
                                        }
                                },
                                ATTR: function(e, t, n) {
                                    return t ? function(r) {
                                        var i = ot.attr(r, e),
                                            o = i + "";
                                        if (null == i) return "!=" === t;
                                        switch (t) {
                                            case "=":
                                                return o === n;
                                            case "!=":
                                                return o !== n;
                                            case "^=":
                                                return n && 0 === o.indexOf(n);
                                            case "*=":
                                                return n && o.indexOf(n) > -1;
                                            case "$=":
                                                return n && o.substr(o.length - n.length) === n;
                                            case "~=":
                                                return (" " + o + " ").indexOf(n) > -1;
                                            case "|=":
                                                return o === n || o.substr(0, n.length + 1) === n + "-"
                                        }
                                    } : function(t) {
                                        return null != ot.attr(t, e)
                                    }
                                },
                                CHILD: function(e, t, n, r) {
                                    if ("nth" === e) {
                                        var i = x++;
                                        return function(e) {
                                            var t, o, a = 0,
                                                s = e;
                                            if (1 === n && 0 === r) return !0;
                                            if (t = e.parentNode, t && (t[E] !== i || !e.sizset)) {
                                                for (s = t.firstChild; s && (1 !== s.nodeType || (s.sizset = ++a, s !== e)); s = s.nextSibling);
                                                t[E] = i
                                            }
                                            return o = e.sizset - r, 0 === n ? 0 === o : o % n === 0 && o / n >= 0
                                        }
                                    }
                                    return function(t) {
                                        var n = t;
                                        switch (e) {
                                            case "only":
                                            case "first":
                                                for (; n = n.previousSibling;)
                                                    if (1 === n.nodeType) return !1;
                                                if ("first" === e) return !0;
                                                n = t;
                                            case "last":
                                                for (; n = n.nextSibling;)
                                                    if (1 === n.nodeType) return !1;
                                                return !0
                                        }
                                    }
                                },
                                PSEUDO: function(e, t, n, r) {
                                    var i = at.pseudos[e] || at.pseudos[e.toLowerCase()];
                                    return i || ot.error("unsupported pseudo: " + e), i.sizzleFilter ? i(t, n, r) : i
                                }
                            },
                            pseudos: {
                                not: J(function(e, t, n) {
                                    var r = ft(e.replace(O, "$1"), t, n);
                                    return function(e) {
                                        return !r(e)
                                    }
                                }),
                                enabled: function(e) {
                                    return e.disabled === !1
                                },
                                disabled: function(e) {
                                    return e.disabled === !0
                                },
                                checked: function(e) {
                                    var t = e.nodeName.toLowerCase();
                                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                                },
                                selected: function(e) {
                                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                                },
                                parent: function(e) {
                                    return !at.pseudos.empty(e)
                                },
                                empty: function(e) {
                                    var t;
                                    for (e = e.firstChild; e;) {
                                        if (e.nodeName > "@" || 3 === (t = e.nodeType) || 4 === t) return !1;
                                        e = e.nextSibling
                                    }
                                    return !0
                                },
                                contains: J(function(e) {
                                    return function(t) {
                                        return (t.textContent || t.innerText || ct(t)).indexOf(e) > -1
                                    }
                                }),
                                has: J(function(e) {
                                    return function(t) {
                                        return ot(e, t).length > 0
                                    }
                                }),
                                header: function(e) {
                                    return R.test(e.nodeName)
                                },
                                text: function(e) {
                                    var t, n;
                                    return "input" === e.nodeName.toLowerCase() && "text" === (t = e.type) && (null == (n = e.getAttribute("type")) || n.toLowerCase() === t)
                                },
                                radio: G("radio"),
                                checkbox: G("checkbox"),
                                file: G("file"),
                                password: G("password"),
                                image: G("image"),
                                submit: Q("submit"),
                                reset: Q("reset"),
                                button: function(e) {
                                    var t = e.nodeName.toLowerCase();
                                    return "input" === t && "button" === e.type || "button" === t
                                },
                                input: function(e) {
                                    return $.test(e.nodeName)
                                },
                                focus: function(e) {
                                    var t = e.ownerDocument;
                                    return !(e !== t.activeElement || t.hasFocus && !t.hasFocus() || !e.type && !e.href)
                                },
                                active: function(e) {
                                    return e === e.ownerDocument.activeElement
                                }
                            },
                            setFilters: {
                                first: function(e, t, n) {
                                    return n ? e.slice(1) : [e[0]]
                                },
                                last: function(e, t, n) {
                                    var r = e.pop();
                                    return n ? e : [r]
                                },
                                even: function(e, t, n) {
                                    for (var r = [], i = n ? 1 : 0, o = e.length; o > i; i += 2) r.push(e[i]);
                                    return r
                                },
                                odd: function(e, t, n) {
                                    for (var r = [], i = n ? 0 : 1, o = e.length; o > i; i += 2) r.push(e[i]);
                                    return r
                                },
                                lt: function(e, t, n) {
                                    return n ? e.slice(+t) : e.slice(0, +t)
                                },
                                gt: function(e, t, n) {
                                    return n ? e.slice(0, +t + 1) : e.slice(+t + 1)
                                },
                                eq: function(e, t, n) {
                                    var r = e.splice(+t, 1);
                                    return n ? e : r
                                }
                            }
                        };
                    at.setFilters.nth = at.setFilters.eq, at.filters = at.pseudos, rt || (at.attrHandle = {
                        href: function(e) {
                            return e.getAttribute("href", 2)
                        },
                        type: function(e) {
                            return e.getAttribute("type")
                        }
                    }), tt && (at.order.push("NAME"), at.find.NAME = function(e, t) {
                        return typeof t.getElementsByName !== y ? t.getElementsByName(e) : void 0
                    }), it && (at.order.splice(1, 0, "CLASS"), at.find.CLASS = function(e, t, n) {
                        return typeof t.getElementsByClassName === y || n ? void 0 : t.getElementsByClassName(e)
                    });
                    try {
                        w.call(m.childNodes, 0)[0].nodeType
                    } catch (st) {
                        w = function(e) {
                            for (var t, n = []; t = this[e]; e++) n.push(t);
                            return n
                        }
                    }
                    var ut = ot.isXML = function(e) {
                            var t = e && (e.ownerDocument || e).documentElement;
                            return t ? "HTML" !== t.nodeName : !1
                        },
                        lt = ot.contains = m.compareDocumentPosition ? function(e, t) {
                            return !!(16 & e.compareDocumentPosition(t))
                        } : m.contains ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                r = t.parentNode;
                            return e === r || !!(r && 1 === r.nodeType && n.contains && n.contains(r))
                        } : function(e, t) {
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                            return !1
                        },
                        ct = ot.getText = function(e) {
                            var t, n = "",
                                r = 0,
                                i = e.nodeType;
                            if (i) {
                                if (1 === i || 9 === i || 11 === i) {
                                    if ("string" == typeof e.textContent) return e.textContent;
                                    for (e = e.firstChild; e; e = e.nextSibling) n += ct(e)
                                } else if (3 === i || 4 === i) return e.nodeValue
                            } else
                                for (; t = e[r]; r++) n += ct(t);
                            return n
                        };
                    ot.attr = function(e, t) {
                        var n, r = ut(e);
                        return r || (t = t.toLowerCase()), at.attrHandle[t] ? at.attrHandle[t](e) : et || r ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? "boolean" == typeof e[t] ? e[t] ? t : null : n.specified ? n.value : null : null)
                    }, ot.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, [0, 0].sort(function() {
                        return b = 0
                    }), m.compareDocumentPosition ? d = function(e, t) {
                        return e === t ? (v = !0, 0) : (e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) : e.compareDocumentPosition) ? -1 : 1
                    } : (d = function(e, t) {
                        if (e === t) return v = !0, 0;
                        if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
                        var n, r, i = [],
                            o = [],
                            a = e.parentNode,
                            s = t.parentNode,
                            u = a;
                        if (a === s) return p(e, t);
                        if (!a) return -1;
                        if (!s) return 1;
                        for (; u;) i.unshift(u), u = u.parentNode;
                        for (u = s; u;) o.unshift(u), u = u.parentNode;
                        n = i.length, r = o.length;
                        for (var l = 0; n > l && r > l; l++)
                            if (i[l] !== o[l]) return p(i[l], o[l]);
                        return l === n ? p(e, o[l], -1) : p(i[l], t, 1)
                    }, p = function(e, t, n) {
                        if (e === t) return n;
                        for (var r = e.nextSibling; r;) {
                            if (r === t) return -1;
                            r = r.nextSibling
                        }
                        return 1
                    }), ot.uniqueSort = function(e) {
                        var t, n = 1;
                        if (d && (v = b, e.sort(d), v))
                            for (; t = e[n]; n++) t === e[n - 1] && e.splice(n--, 1);
                        return e
                    };
                    var ft = ot.compile = function(e, t, n) {
                        var r, i, a, s = Y[e];
                        if (s && s.context === t) return s;
                        for (i = o(e, t, n), a = 0; r = i[a]; a++) i[a] = u(r, t, n);
                        return s = Y[e] = l(i), s.context = t, s.runs = s.dirruns = 0, V.push(e), V.length > at.cacheLength && delete Y[V.shift()], s
                    };
                    ot.matches = function(e, t) {
                        return ot(e, null, null, t)
                    }, ot.matchesSelector = function(e, t) {
                        return ot(t, null, null, [e]).length > 0
                    };
                    var dt = function(e, t, n, r, o) {
                        e = e.replace(O, "$1");
                        var a, s, u, l, d, p, h, g, m, y = e.match(F),
                            v = e.match(P),
                            b = t.nodeType;
                        if (z.POS.test(e)) return i(e, t, n, r, y);
                        if (r) a = w.call(r, 0);
                        else if (y && 1 === y.length) {
                            if (v.length > 1 && 9 === b && !o && (y = z.ID.exec(v[0]))) {
                                if (t = at.find.ID(y[1], t, o)[0], !t) return n;
                                e = e.slice(v.shift().length)
                            }
                            for (g = (y = B.exec(v[0])) && !y.index && t.parentNode || t, m = v.pop(), p = m.split(":not")[0], u = 0, l = at.order.length; l > u; u++)
                                if (h = at.order[u], y = z[h].exec(p)) {
                                    if (a = at.find[h]((y[1] || "").replace(I, ""), g, o), null == a) continue;
                                    p === m && (e = e.slice(0, e.length - m.length) + p.replace(z[h], ""), e || T.apply(n, w.call(a, 0)));
                                    break
                                }
                        }
                        if (e)
                            for (s = ft(e, t, o), f = s.dirruns++, null == a && (a = at.find.TAG("*", B.test(e) && t.parentNode || t)), u = 0; d = a[u]; u++) c = s.runs++, s(d, t) && n.push(d);
                        return n
                    };
                    g.querySelectorAll && function() {
                        var e, t = dt,
                            n = /'|\\/g,
                            r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                            i = [],
                            o = [":active"],
                            a = m.matchesSelector || m.mozMatchesSelector || m.webkitMatchesSelector || m.oMatchesSelector || m.msMatchesSelector;
                        Z(function(e) {
                            e.innerHTML = "<select><option selected></option></select>", e.querySelectorAll("[selected]").length || i.push("\\[" + N + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || i.push(":checked")
                        }), Z(function(e) {
                            e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && i.push("[*^$]=" + N + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'>", e.querySelectorAll(":enabled").length || i.push(":enabled", ":disabled")
                        }), i = i.length && new RegExp(i.join("|")), dt = function(e, r, o, a, s) {
                            if (!(a || s || i && i.test(e)))
                                if (9 === r.nodeType) try {
                                    return T.apply(o, w.call(r.querySelectorAll(e), 0)), o
                                } catch (u) {} else if (1 === r.nodeType && "object" !== r.nodeName.toLowerCase()) {
                                    var l = r.getAttribute("id"),
                                        c = l || E,
                                        f = B.test(e) && r.parentNode || r;
                                    l ? c = c.replace(n, "\\$&") : r.setAttribute("id", c);
                                    try {
                                        return T.apply(o, w.call(f.querySelectorAll(e.replace(F, "[id='" + c + "'] $&")), 0)), o
                                    } catch (u) {} finally {
                                        l || r.removeAttribute("id")
                                    }
                                }
                            return t(e, r, o, a, s)
                        }, a && (Z(function(t) {
                            e = a.call(t, "div");
                            try {
                                a.call(t, "[test!='']:sizzle"), o.push(at.match.PSEUDO)
                            } catch (n) {}
                        }), o = new RegExp(o.join("|")), ot.matchesSelector = function(t, n) {
                            if (n = n.replace(r, "='$1']"), !(ut(t) || o.test(n) || i && i.test(n))) try {
                                var s = a.call(t, n);
                                if (s || e || t.document && 11 !== t.document.nodeType) return s
                            } catch (u) {}
                            return ot(n, null, null, [t]).length > 0
                        })
                    }(), ot.attr = K.attr, K.find = ot, K.expr = ot.selectors, K.expr[":"] = K.expr.pseudos, K.unique = ot.uniqueSort, K.text = ot.getText, K.isXMLDoc = ot.isXML, K.contains = ot.contains
                }(e);
            var Mt = /Until$/,
                Ft = /^(?:parents|prev(?:Until|All))/,
                _t = /^.[^:#\[\.,]*$/,
                Pt = K.expr.match.needsContext,
                qt = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            K.fn.extend({
                find: function(e) {
                    var t, n, r, i, o, a, s = this;
                    if ("string" != typeof e) return K(e).filter(function() {
                        for (t = 0, n = s.length; n > t; t++)
                            if (K.contains(s[t], this)) return !0
                    });
                    for (a = this.pushStack("", "find", e), t = 0, n = this.length; n > t; t++)
                        if (r = a.length, K.find(e, this[t], a), t > 0)
                            for (i = r; i < a.length; i++)
                                for (o = 0; r > o; o++)
                                    if (a[o] === a[i]) {
                                        a.splice(i--, 1);
                                        break
                                    }
                    return a
                },
                has: function(e) {
                    var t, n = K(e, this),
                        r = n.length;
                    return this.filter(function() {
                        for (t = 0; r > t; t++)
                            if (K.contains(this, n[t])) return !0
                    })
                },
                not: function(e) {
                    return this.pushStack(l(this, e, !1), "not", e)
                },
                filter: function(e) {
                    return this.pushStack(l(this, e, !0), "filter", e)
                },
                is: function(e) {
                    return !!e && ("string" == typeof e ? Pt.test(e) ? K(e, this.context).index(this[0]) >= 0 : K.filter(e, this).length > 0 : this.filter(e).length > 0)
                },
                closest: function(e, t) {
                    for (var n, r = 0, i = this.length, o = [], a = Pt.test(e) || "string" != typeof e ? K(e, t || this.context) : 0; i > r; r++)
                        for (n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                            if (a ? a.index(n) > -1 : K.find.matchesSelector(n, e)) {
                                o.push(n);
                                break
                            }
                            n = n.parentNode
                        }
                    return o = o.length > 1 ? K.unique(o) : o, this.pushStack(o, "closest", e)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? K.inArray(this[0], K(e)) : K.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
                },
                add: function(e, t) {
                    var n = "string" == typeof e ? K(e, t) : K.makeArray(e && e.nodeType ? [e] : e),
                        r = K.merge(this.get(), n);
                    return this.pushStack(s(n[0]) || s(r[0]) ? r : K.unique(r))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), K.fn.andSelf = K.fn.addBack, K.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return K.dir(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return K.dir(e, "parentNode", n)
                },
                next: function(e) {
                    return u(e, "nextSibling")
                },
                prev: function(e) {
                    return u(e, "previousSibling")
                },
                nextAll: function(e) {
                    return K.dir(e, "nextSibling")
                },
                prevAll: function(e) {
                    return K.dir(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return K.dir(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return K.dir(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return K.sibling((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return K.sibling(e.firstChild)
                },
                contents: function(e) {
                    return K.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : K.merge([], e.childNodes)
                }
            }, function(e, t) {
                K.fn[e] = function(n, r) {
                    var i = K.map(this, t, n);
                    return Mt.test(e) || (r = n), r && "string" == typeof r && (i = K.filter(r, i)), i = this.length > 1 && !qt[e] ? K.unique(i) : i, this.length > 1 && Ft.test(e) && (i = i.reverse()), this.pushStack(i, e, Y.call(arguments).join(","))
                }
            }), K.extend({
                filter: function(e, t, n) {
                    return n && (e = ":not(" + e + ")"), 1 === t.length ? K.find.matchesSelector(t[0], e) ? [t[0]] : [] : K.find.matches(e, t)
                },
                dir: function(e, n, r) {
                    for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !K(o).is(r));) 1 === o.nodeType && i.push(o), o = o[n];
                    return i
                },
                sibling: function(e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                }
            });
            var Bt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
                Wt = / jQuery\d+="(?:null|\d+)"/g,
                Rt = /^\s+/,
                $t = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                It = /<([\w:]+)/,
                zt = /<tbody/i,
                Xt = /<|&#?\w+;/,
                Ut = /<(?:script|style|link)/i,
                Yt = /<(?:script|object|embed|option|style)/i,
                Vt = new RegExp("<(?:" + Bt + ")[\\s/>]", "i"),
                Jt = /^(?:checkbox|radio)$/,
                Gt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Qt = /\/(java|ecma)script/i,
                Kt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
                Zt = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    legend: [1, "<fieldset>", "</fieldset>"],
                    thead: [1, "<table>", "</table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                    area: [1, "<map>", "</map>"],
                    _default: [0, "", ""]
                },
                en = c(R),
                tn = en.appendChild(R.createElement("div"));
            Zt.optgroup = Zt.option, Zt.tbody = Zt.tfoot = Zt.colgroup = Zt.caption = Zt.thead, Zt.th = Zt.td, K.support.htmlSerialize || (Zt._default = [1, "X<div>", "</div>"]), K.fn.extend({
                    text: function(e) {
                        return K.access(this, function(e) {
                            return e === t ? K.text(this) : this.empty().append((this[0] && this[0].ownerDocument || R).createTextNode(e))
                        }, null, e, arguments.length)
                    },
                    wrapAll: function(e) {
                        if (K.isFunction(e)) return this.each(function(t) {
                            K(this).wrapAll(e.call(this, t))
                        });
                        if (this[0]) {
                            var t = K(e, this[0].ownerDocument).eq(0).clone(!0);
                            this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                                for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                                return e
                            }).append(this)
                        }
                        return this
                    },
                    wrapInner: function(e) {
                        return this.each(K.isFunction(e) ? function(t) {
                            K(this).wrapInner(e.call(this, t))
                        } : function() {
                            var t = K(this),
                                n = t.contents();
                            n.length ? n.wrapAll(e) : t.append(e)
                        })
                    },
                    wrap: function(e) {
                        var t = K.isFunction(e);
                        return this.each(function(n) {
                            K(this).wrapAll(t ? e.call(this, n) : e)
                        })
                    },
                    unwrap: function() {
                        return this.parent().each(function() {
                            K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
                        }).end()
                    },
                    append: function() {
                        return this.domManip(arguments, !0, function(e) {
                            (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(e)
                        })
                    },
                    prepend: function() {
                        return this.domManip(arguments, !0, function(e) {
                            (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(e, this.firstChild)
                        })
                    },
                    before: function() {
                        if (!s(this[0])) return this.domManip(arguments, !1, function(e) {
                            this.parentNode.insertBefore(e, this)
                        });
                        if (arguments.length) {
                            var e = K.clean(arguments);
                            return this.pushStack(K.merge(e, this), "before", this.selector)
                        }
                    },
                    after: function() {
                        if (!s(this[0])) return this.domManip(arguments, !1, function(e) {
                            this.parentNode.insertBefore(e, this.nextSibling)
                        });
                        if (arguments.length) {
                            var e = K.clean(arguments);
                            return this.pushStack(K.merge(this, e), "after", this.selector)
                        }
                    },
                    remove: function(e, t) {
                        for (var n, r = 0; null != (n = this[r]); r++)(!e || K.filter(e, [n]).length) && (!t && 1 === n.nodeType && (K.cleanData(n.getElementsByTagName("*")), K.cleanData([n])), n.parentNode && n.parentNode.removeChild(n));
                        return this
                    },
                    empty: function() {
                        for (var e, t = 0; null != (e = this[t]); t++)
                            for (1 === e.nodeType && K.cleanData(e.getElementsByTagName("*")); e.firstChild;) e.removeChild(e.firstChild);
                        return this
                    },
                    clone: function(e, t) {
                        return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                            return K.clone(this, e, t)
                        })
                    },
                    html: function(e) {
                        return K.access(this, function(e) {
                            var n = this[0] || {},
                                r = 0,
                                i = this.length;
                            if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Wt, "") : t;
                            if (!("string" != typeof e || Ut.test(e) || !K.support.htmlSerialize && Vt.test(e) || !K.support.leadingWhitespace && Rt.test(e) || Zt[(It.exec(e) || ["", ""])[1].toLowerCase()])) {
                                e = e.replace($t, "<$1></$2>");
                                try {
                                    for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (K.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                                    n = 0
                                } catch (o) {}
                            }
                            n && this.empty().append(e)
                        }, null, e, arguments.length)
                    },
                    replaceWith: function(e) {
                        return s(this[0]) ? this.length ? this.pushStack(K(K.isFunction(e) ? e() : e), "replaceWith", e) : this : K.isFunction(e) ? this.each(function(t) {
                            var n = K(this),
                                r = n.html();
                            n.replaceWith(e.call(this, t, r))
                        }) : ("string" != typeof e && (e = K(e).detach()), this.each(function() {
                            var t = this.nextSibling,
                                n = this.parentNode;
                            K(this).remove(), t ? K(t).before(e) : K(n).append(e)
                        }))
                    },
                    detach: function(e) {
                        return this.remove(e, !0)
                    },
                    domManip: function(e, n, r) {
                        e = [].concat.apply([], e);
                        var i, o, a, s, u = 0,
                            l = e[0],
                            c = [],
                            d = this.length;
                        if (!K.support.checkClone && d > 1 && "string" == typeof l && Gt.test(l)) return this.each(function() {
                            K(this).domManip(e, n, r)
                        });
                        if (K.isFunction(l)) return this.each(function(i) {
                            var o = K(this);
                            e[0] = l.call(this, i, n ? o.html() : t), o.domManip(e, n, r)
                        });
                        if (this[0]) {
                            if (i = K.buildFragment(e, this, c), a = i.fragment, o = a.firstChild, 1 === a.childNodes.length && (a = o), o)
                                for (n = n && K.nodeName(o, "tr"), s = i.cacheable || d - 1; d > u; u++) r.call(n && K.nodeName(this[u], "table") ? f(this[u], "tbody") : this[u], u === s ? a : K.clone(a, !0, !0));
                            a = o = null, c.length && K.each(c, function(e, t) {
                                t.src ? K.ajax ? K.ajax({
                                    url: t.src,
                                    type: "GET",
                                    dataType: "script",
                                    async: !1,
                                    global: !1,
                                    "throws": !0
                                }) : K.error("no ajax") : K.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Kt, "")), t.parentNode && t.parentNode.removeChild(t)
                            })
                        }
                        return this
                    }
                }), K.buildFragment = function(e, n, r) {
                    var i, o, a, s = e[0];
                    return n = n || R, n = (n[0] || n).ownerDocument || n[0] || n, "undefined" == typeof n.createDocumentFragment && (n = R), 1 === e.length && "string" == typeof s && s.length < 512 && n === R && "<" === s.charAt(0) && !Yt.test(s) && (K.support.checkClone || !Gt.test(s)) && (K.support.html5Clone || !Vt.test(s)) && (o = !0, i = K.fragments[s], a = i !== t), i || (i = n.createDocumentFragment(), K.clean(e, n, i, r), o && (K.fragments[s] = a && i)), {
                        fragment: i,
                        cacheable: o
                    }
                }, K.fragments = {}, K.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, function(e, t) {
                    K.fn[e] = function(n) {
                        var r, i = 0,
                            o = [],
                            a = K(n),
                            s = a.length,
                            u = 1 === this.length && this[0].parentNode;
                        if ((null == u || u && 11 === u.nodeType && 1 === u.childNodes.length) && 1 === s) return a[t](this[0]), this;
                        for (; s > i; i++) r = (i > 0 ? this.clone(!0) : this).get(), K(a[i])[t](r), o = o.concat(r);
                        return this.pushStack(o, e, a.selector)
                    }
                }), K.extend({
                    clone: function(e, t, n) {
                        var r, i, o, a;
                        if (K.support.html5Clone || K.isXMLDoc(e) || !Vt.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (tn.innerHTML = e.outerHTML, tn.removeChild(a = tn.firstChild)), !(K.support.noCloneEvent && K.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || K.isXMLDoc(e)))
                            for (p(e, a), r = h(e), i = h(a), o = 0; r[o]; ++o) i[o] && p(r[o], i[o]);
                        if (t && (d(e, a), n))
                            for (r = h(e), i = h(a), o = 0; r[o]; ++o) d(r[o], i[o]);
                        return r = i = null, a
                    },
                    clean: function(e, t, n, r) {
                        var i, o, a, s, u, l, f, d, p, h, m, y = 0,
                            v = [];
                        for (t && "undefined" != typeof t.createDocumentFragment || (t = R), o = t === R && en; null != (a = e[y]); y++)
                            if ("number" == typeof a && (a += ""), a) {
                                if ("string" == typeof a)
                                    if (Xt.test(a)) {
                                        for (o = o || c(t), f = f || o.appendChild(t.createElement("div")), a = a.replace($t, "<$1></$2>"), s = (It.exec(a) || ["", ""])[1].toLowerCase(), u = Zt[s] || Zt._default, l = u[0], f.innerHTML = u[1] + a + u[2]; l--;) f = f.lastChild;
                                        if (!K.support.tbody)
                                            for (d = zt.test(a), p = "table" !== s || d ? "<table>" !== u[1] || d ? [] : f.childNodes : f.firstChild && f.firstChild.childNodes, i = p.length - 1; i >= 0; --i) K.nodeName(p[i], "tbody") && !p[i].childNodes.length && p[i].parentNode.removeChild(p[i]);
                                        !K.support.leadingWhitespace && Rt.test(a) && f.insertBefore(t.createTextNode(Rt.exec(a)[0]), f.firstChild), a = f.childNodes, f = o.lastChild
                                    } else a = t.createTextNode(a);
                                a.nodeType ? v.push(a) : v = K.merge(v, a)
                            }
                        if (f && (o.removeChild(f), a = f = o = null), !K.support.appendChecked)
                            for (y = 0; null != (a = v[y]); y++) K.nodeName(a, "input") ? g(a) : "undefined" != typeof a.getElementsByTagName && K.grep(a.getElementsByTagName("input"), g);
                        if (n)
                            for (h = function(e) {
                                    return !e.type || Qt.test(e.type) ? r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e) : void 0
                                }, y = 0; null != (a = v[y]); y++) K.nodeName(a, "script") && h(a) || (n.appendChild(a), "undefined" != typeof a.getElementsByTagName && (m = K.grep(K.merge([], a.getElementsByTagName("script")), h), v.splice.apply(v, [y + 1, 0].concat(m)), y += m.length));
                        return v
                    },
                    cleanData: function(e, t) {
                        for (var n, r, i, o, a = 0, s = K.expando, u = K.cache, l = K.support.deleteExpando, c = K.event.special; null != (i = e[a]); a++)
                            if ((t || K.acceptData(i)) && (r = i[s], n = r && u[r])) {
                                if (n.events)
                                    for (o in n.events) c[o] ? K.event.remove(i, o) : K.removeEvent(i, o, n.handle);
                                u[r] && (delete u[r], l ? delete i[s] : i.removeAttribute ? i.removeAttribute(s) : i[s] = null, K.deletedIds.push(r))
                            }
                    }
                }),
                function() {
                    var e, t;
                    K.uaMatch = function(e) {
                        e = e.toLowerCase();
                        var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
                        return {
                            browser: t[1] || "",
                            version: t[2] || "0"
                        }
                    }, e = K.uaMatch(I.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.webkit && (t.safari = !0), K.browser = t, K.sub = function() {
                        function e(t, n) {
                            return new e.fn.init(t, n)
                        }
                        K.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function n(n, r) {
                            return r && r instanceof K && !(r instanceof e) && (r = e(r)), K.fn.init.call(this, n, r, t)
                        }, e.fn.init.prototype = e.fn;
                        var t = e(R);
                        return e
                    }
                }();
            var nn, rn, on, an = /alpha\([^)]*\)/i,
                sn = /opacity=([^)]*)/,
                un = /^(top|right|bottom|left)$/,
                ln = /^margin/,
                cn = new RegExp("^(" + Z + ")(.*)$", "i"),
                fn = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
                dn = new RegExp("^([-+])=(" + Z + ")", "i"),
                pn = {},
                hn = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                gn = {
                    letterSpacing: 0,
                    fontWeight: 400,
                    lineHeight: 1
                },
                mn = ["Top", "Right", "Bottom", "Left"],
                yn = ["Webkit", "O", "Moz", "ms"],
                vn = K.fn.toggle;
            K.fn.extend({
                css: function(e, n) {
                    return K.access(this, function(e, n, r) {
                        return r !== t ? K.style(e, n, r) : K.css(e, n)
                    }, e, n, arguments.length > 1)
                },
                show: function() {
                    return v(this, !0)
                },
                hide: function() {
                    return v(this)
                },
                toggle: function(e, t) {
                    var n = "boolean" == typeof e;
                    return K.isFunction(e) && K.isFunction(t) ? vn.apply(this, arguments) : this.each(function() {
                        (n ? e : y(this)) ? K(this).show(): K(this).hide()
                    })
                }
            }), K.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = nn(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    fillOpacity: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    "float": K.support.cssFloat ? "cssFloat" : "styleFloat"
                },
                style: function(e, n, r, i) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o, a, s, u = K.camelCase(n),
                            l = e.style;
                        if (n = K.cssProps[u] || (K.cssProps[u] = m(l, u)), s = K.cssHooks[n] || K.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n];
                        if (a = typeof r, "string" === a && (o = dn.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(K.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" === a && !K.cssNumber[u] && (r += "px"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                            l[n] = r
                        } catch (c) {}
                    }
                },
                css: function(e, n, r, i) {
                    var o, a, s, u = K.camelCase(n);
                    return n = K.cssProps[u] || (K.cssProps[u] = m(e.style, u)), s = K.cssHooks[n] || K.cssHooks[u], s && "get" in s && (o = s.get(e, !0, i)), o === t && (o = nn(e, n)), "normal" === o && n in gn && (o = gn[n]), r || i !== t ? (a = parseFloat(o), r || K.isNumeric(a) ? a || 0 : o) : o
                },
                swap: function(e, t, n) {
                    var r, i, o = {};
                    for (i in t) o[i] = e.style[i], e.style[i] = t[i];
                    r = n.call(e);
                    for (i in t) e.style[i] = o[i];
                    return r
                }
            }), e.getComputedStyle ? nn = function(e, t) {
                var n, r, i, o, a = getComputedStyle(e, null),
                    s = e.style;
                return a && (n = a[t], "" === n && !K.contains(e.ownerDocument.documentElement, e) && (n = K.style(e, t)), fn.test(n) && ln.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = n, n = a.width, s.width = r, s.minWidth = i, s.maxWidth = o)), n
            } : R.documentElement.currentStyle && (nn = function(e, t) {
                var n, r, i = e.currentStyle && e.currentStyle[t],
                    o = e.style;
                return null == i && o && o[t] && (i = o[t]), fn.test(i) && !un.test(t) && (n = o.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), o.left = "fontSize" === t ? "1em" : i, i = o.pixelLeft + "px", o.left = n, r && (e.runtimeStyle.left = r)), "" === i ? "auto" : i
            }), K.each(["height", "width"], function(e, t) {
                K.cssHooks[t] = {
                    get: function(e, n, r) {
                        return n ? 0 !== e.offsetWidth || "none" !== nn(e, "display") ? w(e, t, r) : K.swap(e, hn, function() {
                            return w(e, t, r)
                        }) : void 0
                    },
                    set: function(e, n, r) {
                        return b(e, n, r ? x(e, t, r, K.support.boxSizing && "border-box" === K.css(e, "boxSizing")) : 0)
                    }
                }
            }), K.support.opacity || (K.cssHooks.opacity = {
                get: function(e, t) {
                    return sn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
                },
                set: function(e, t) {
                    var n = e.style,
                        r = e.currentStyle,
                        i = K.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                        o = r && r.filter || n.filter || "";
                    n.zoom = 1, t >= 1 && "" === K.trim(o.replace(an, "")) && n.removeAttribute && (n.removeAttribute("filter"), r && !r.filter) || (n.filter = an.test(o) ? o.replace(an, i) : o + " " + i)
                }
            }), K(function() {
                K.support.reliableMarginRight || (K.cssHooks.marginRight = {
                    get: function(e, t) {
                        return K.swap(e, {
                            display: "inline-block"
                        }, function() {
                            return t ? nn(e, "marginRight") : void 0
                        })
                    }
                }), !K.support.pixelPosition && K.fn.position && K.each(["top", "left"], function(e, t) {
                    K.cssHooks[t] = {
                        get: function(e, n) {
                            if (n) {
                                var r = nn(e, t);
                                return fn.test(r) ? K(e).position()[t] + "px" : r
                            }
                        }
                    }
                })
            }), K.expr && K.expr.filters && (K.expr.filters.hidden = function(e) {
                return 0 === e.offsetWidth && 0 === e.offsetHeight || !K.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || nn(e, "display"))
            }, K.expr.filters.visible = function(e) {
                return !K.expr.filters.hidden(e)
            }), K.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, t) {
                K.cssHooks[e + t] = {
                    expand: function(n) {
                        var r, i = "string" == typeof n ? n.split(" ") : [n],
                            o = {};
                        for (r = 0; 4 > r; r++) o[e + mn[r] + t] = i[r] || i[r - 2] || i[0];
                        return o
                    }
                }, ln.test(e) || (K.cssHooks[e + t].set = b)
            });
            var bn = /%20/g,
                xn = /\[\]$/,
                wn = /\r?\n/g,
                Tn = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
                En = /^(?:select|textarea)/i;
            K.fn.extend({
                serialize: function() {
                    return K.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        return this.elements ? K.makeArray(this.elements) : this
                    }).filter(function() {
                        return this.name && !this.disabled && (this.checked || En.test(this.nodeName) || Tn.test(this.type))
                    }).map(function(e, t) {
                        var n = K(this).val();
                        return null == n ? null : K.isArray(n) ? K.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(wn, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(wn, "\r\n")
                        }
                    }).get()
                }
            }), K.param = function(e, n) {
                var r, i = [],
                    o = function(e, t) {
                        t = K.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                    };
                if (n === t && (n = K.ajaxSettings && K.ajaxSettings.traditional), K.isArray(e) || e.jquery && !K.isPlainObject(e)) K.each(e, function() {
                    o(this.name, this.value)
                });
                else
                    for (r in e) E(r, e[r], n, o);
                return i.join("&").replace(bn, "+")
            };
            var Nn, Cn, Sn = /#.*$/,
                kn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
                An = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
                Dn = /^(?:GET|HEAD)$/,
                jn = /^\/\//,
                Ln = /\?/,
                Hn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                On = /([?&])_=[^&]*/,
                Mn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
                Fn = K.fn.load,
                _n = {},
                Pn = {},
                qn = ["*/"] + ["*"];
            try {
                Nn = $.href
            } catch (Bn) {
                Nn = R.createElement("a"), Nn.href = "", Nn = Nn.href
            }
            Cn = Mn.exec(Nn.toLowerCase()) || [], K.fn.load = function(e, n, r) {
                if ("string" != typeof e && Fn) return Fn.apply(this, arguments);
                if (!this.length) return this;
                var i, o, a, s = this,
                    u = e.indexOf(" ");
                return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), K.isFunction(n) ? (r = n, n = t) : "object" == typeof n && (o = "POST"), K.ajax({
                    url: e,
                    type: o,
                    dataType: "html",
                    data: n,
                    complete: function(e, t) {
                        r && s.each(r, a || [e.responseText, t, e])
                    }
                }).done(function(e) {
                    a = arguments, s.html(i ? K("<div>").append(e.replace(Hn, "")).find(i) : e)
                }), this
            }, K.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
                K.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }), K.each(["get", "post"], function(e, n) {
                K[n] = function(e, r, i, o) {
                    return K.isFunction(r) && (o = o || i, i = r, r = t), K.ajax({
                        type: n,
                        url: e,
                        data: r,
                        success: i,
                        dataType: o
                    })
                }
            }), K.extend({
                getScript: function(e, n) {
                    return K.get(e, t, n, "script")
                },
                getJSON: function(e, t, n) {
                    return K.get(e, t, n, "json")
                },
                ajaxSetup: function(e, t) {
                    return t ? S(e, K.ajaxSettings) : (t = e, e = K.ajaxSettings), S(e, t), e
                },
                ajaxSettings: {
                    url: Nn,
                    isLocal: An.test(Cn[1]),
                    global: !0,
                    type: "GET",
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    processData: !0,
                    async: !0,
                    accepts: {
                        xml: "application/xml, text/xml",
                        html: "text/html",
                        text: "text/plain",
                        json: "application/json, text/javascript",
                        "*": qn
                    },
                    contents: {
                        xml: /xml/,
                        html: /html/,
                        json: /json/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText"
                    },
                    converters: {
                        "* text": e.String,
                        "text html": !0,
                        "text json": K.parseJSON,
                        "text xml": K.parseXML
                    },
                    flatOptions: {
                        context: !0,
                        url: !0
                    }
                },
                ajaxPrefilter: N(_n),
                ajaxTransport: N(Pn),
                ajax: function(e, n) {
                    function r(e, n, r, a) {
                        var l, f, v, b, w, E = n;
                        2 !== x && (x = 2, u && clearTimeout(u), s = t, o = a || "", T.readyState = e > 0 ? 4 : 0, r && (b = k(d, T, r)), e >= 200 && 300 > e || 304 === e ? (d.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (K.lastModified[i] = w), w = T.getResponseHeader("Etag"), w && (K.etag[i] = w)), 304 === e ? (E = "notmodified", l = !0) : (l = A(d, b), E = l.state, f = l.data, v = l.error, l = !v)) : (v = E, (!E || e) && (E = "error", 0 > e && (e = 0))), T.status = e, T.statusText = "" + (n || E), l ? g.resolveWith(p, [f, E, T]) : g.rejectWith(p, [T, E, v]), T.statusCode(y), y = t, c && h.trigger("ajax" + (l ? "Success" : "Error"), [T, d, l ? f : v]), m.fireWith(p, [T, E]), c && (h.trigger("ajaxComplete", [T, d]), --K.active || K.event.trigger("ajaxStop")))
                    }
                    "object" == typeof e && (n = e, e = t), n = n || {};
                    var i, o, a, s, u, l, c, f, d = K.ajaxSetup({}, n),
                        p = d.context || d,
                        h = p !== d && (p.nodeType || p instanceof K) ? K(p) : K.event,
                        g = K.Deferred(),
                        m = K.Callbacks("once memory"),
                        y = d.statusCode || {},
                        v = {},
                        b = {},
                        x = 0,
                        w = "canceled",
                        T = {
                            readyState: 0,
                            setRequestHeader: function(e, t) {
                                if (!x) {
                                    var n = e.toLowerCase();
                                    e = b[n] = b[n] || e, v[e] = t
                                }
                                return this
                            },
                            getAllResponseHeaders: function() {
                                return 2 === x ? o : null
                            },
                            getResponseHeader: function(e) {
                                var n;
                                if (2 === x) {
                                    if (!a)
                                        for (a = {}; n = kn.exec(o);) a[n[1].toLowerCase()] = n[2];
                                    n = a[e.toLowerCase()]
                                }
                                return n === t ? null : n
                            },
                            overrideMimeType: function(e) {
                                return x || (d.mimeType = e), this
                            },
                            abort: function(e) {
                                return e = e || w, s && s.abort(e), r(0, e), this
                            }
                        };
                    if (g.promise(T), T.success = T.done, T.error = T.fail, T.complete = m.add, T.statusCode = function(e) {
                            if (e) {
                                var t;
                                if (2 > x)
                                    for (t in e) y[t] = [y[t], e[t]];
                                else t = e[T.status], T.always(t)
                            }
                            return this
                        }, d.url = ((e || d.url) + "").replace(Sn, "").replace(jn, Cn[1] + "//"), d.dataTypes = K.trim(d.dataType || "*").toLowerCase().split(tt), null == d.crossDomain && (l = Mn.exec(d.url.toLowerCase()), d.crossDomain = !(!l || l[1] == Cn[1] && l[2] == Cn[2] && (l[3] || ("http:" === l[1] ? 80 : 443)) == (Cn[3] || ("http:" === Cn[1] ? 80 : 443)))), d.data && d.processData && "string" != typeof d.data && (d.data = K.param(d.data, d.traditional)), C(_n, d, n, T), 2 === x) return T;
                    if (c = d.global, d.type = d.type.toUpperCase(), d.hasContent = !Dn.test(d.type), c && 0 === K.active++ && K.event.trigger("ajaxStart"), !d.hasContent && (d.data && (d.url += (Ln.test(d.url) ? "&" : "?") + d.data, delete d.data), i = d.url, d.cache === !1)) {
                        var E = K.now(),
                            N = d.url.replace(On, "$1_=" + E);
                        d.url = N + (N === d.url ? (Ln.test(d.url) ? "&" : "?") + "_=" + E : "")
                    }(d.data && d.hasContent && d.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", d.contentType), d.ifModified && (i = i || d.url, K.lastModified[i] && T.setRequestHeader("If-Modified-Since", K.lastModified[i]), K.etag[i] && T.setRequestHeader("If-None-Match", K.etag[i])), T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + qn + "; q=0.01" : "") : d.accepts["*"]);
                    for (f in d.headers) T.setRequestHeader(f, d.headers[f]);
                    if (!d.beforeSend || d.beforeSend.call(p, T, d) !== !1 && 2 !== x) {
                        w = "abort";
                        for (f in {
                                success: 1,
                                error: 1,
                                complete: 1
                            }) T[f](d[f]);
                        if (s = C(Pn, d, n, T)) {
                            T.readyState = 1, c && h.trigger("ajaxSend", [T, d]), d.async && d.timeout > 0 && (u = setTimeout(function() {
                                T.abort("timeout")
                            }, d.timeout));
                            try {
                                x = 1, s.send(v, r)
                            } catch (S) {
                                if (!(2 > x)) throw S;
                                r(-1, S)
                            }
                        } else r(-1, "No Transport");
                        return T
                    }
                    return T.abort()
                },
                active: 0,
                lastModified: {},
                etag: {}
            });
            var Wn = [],
                Rn = /\?/,
                $n = /(=)\?(?=&|$)|\?\?/,
                In = K.now();
            K.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Wn.pop() || K.expando + "_" + In++;
                    return this[e] = !0, e
                }
            }), K.ajaxPrefilter("json jsonp", function(n, r, i) {
                var o, a, s, u = n.data,
                    l = n.url,
                    c = n.jsonp !== !1,
                    f = c && $n.test(l),
                    d = c && !f && "string" == typeof u && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && $n.test(u);
                return "jsonp" === n.dataTypes[0] || f || d ? (o = n.jsonpCallback = K.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a = e[o], f ? n.url = l.replace($n, "$1" + o) : d ? n.data = u.replace($n, "$1" + o) : c && (n.url += (Rn.test(l) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
                    return s || K.error(o + " was not called"), s[0]
                }, n.dataTypes[0] = "json", e[o] = function() {
                    s = arguments
                }, i.always(function() {
                    e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Wn.push(o)), s && K.isFunction(a) && a(s[0]), s = a = t
                }), "script") : void 0
            }), K.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /javascript|ecmascript/
                },
                converters: {
                    "text script": function(e) {
                        return K.globalEval(e), e
                    }
                }
            }), K.ajaxPrefilter("script", function(e) {
                e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
            }), K.ajaxTransport("script", function(e) {
                if (e.crossDomain) {
                    var n, r = R.head || R.getElementsByTagName("head")[0] || R.documentElement;
                    return {
                        send: function(i, o) {
                            n = R.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, i) {
                                (i || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || o(200, "success"))
                            }, r.insertBefore(n, r.firstChild)
                        },
                        abort: function() {
                            n && n.onload(0, 1)
                        }
                    }
                }
            });
            var zn, Xn = e.ActiveXObject ? function() {
                    for (var e in zn) zn[e](0, 1)
                } : !1,
                Un = 0;
            K.ajaxSettings.xhr = e.ActiveXObject ? function() {
                    return !this.isLocal && D() || j()
                } : D,
                function(e) {
                    K.extend(K.support, {
                        ajax: !!e,
                        cors: !!e && "withCredentials" in e
                    })
                }(K.ajaxSettings.xhr()), K.support.ajax && K.ajaxTransport(function(n) {
                    if (!n.crossDomain || K.support.cors) {
                        var r;
                        return {
                            send: function(i, o) {
                                var a, s, u = n.xhr();
                                if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields)
                                    for (s in n.xhrFields) u[s] = n.xhrFields[s];
                                n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                                try {
                                    for (s in i) u.setRequestHeader(s, i[s])
                                } catch (l) {}
                                u.send(n.hasContent && n.data || null), r = function(e, i) {
                                    var s, l, c, f, d;
                                    try {
                                        if (r && (i || 4 === u.readyState))
                                            if (r = t, a && (u.onreadystatechange = K.noop, Xn && delete zn[a]), i) 4 !== u.readyState && u.abort();
                                            else {
                                                s = u.status, c = u.getAllResponseHeaders(), f = {}, d = u.responseXML, d && d.documentElement && (f.xml = d);
                                                try {
                                                    f.text = u.responseText
                                                } catch (e) {}
                                                try {
                                                    l = u.statusText
                                                } catch (p) {
                                                    l = ""
                                                }
                                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
                                            }
                                    } catch (h) {
                                        i || o(-1, h)
                                    }
                                    f && o(s, l, f, c)
                                }, n.async ? 4 === u.readyState ? setTimeout(r, 0) : (a = ++Un, Xn && (zn || (zn = {}, K(e).unload(Xn)), zn[a] = r), u.onreadystatechange = r) : r()
                            },
                            abort: function() {
                                r && r(0, 1)
                            }
                        }
                    }
                });
            var Yn, Vn, Jn = /^(?:toggle|show|hide)$/,
                Gn = new RegExp("^(?:([-+])=|)(" + Z + ")([a-z%]*)$", "i"),
                Qn = /queueHooks$/,
                Kn = [F],
                Zn = {
                    "*": [function(e, t) {
                        var n, r, i, o = this.createTween(e, t),
                            a = Gn.exec(t),
                            s = o.cur(),
                            u = +s || 0,
                            l = 1;
                        if (a) {
                            if (n = +a[2], r = a[3] || (K.cssNumber[e] ? "" : "px"), "px" !== r && u) {
                                u = K.css(o.elem, e, !0) || n || 1;
                                do i = l = l || ".5", u /= l, K.style(o.elem, e, u + r), l = o.cur() / s; while (1 !== l && l !== i)
                            }
                            o.unit = r, o.start = u, o.end = a[1] ? u + (a[1] + 1) * n : n
                        }
                        return o
                    }]
                };
            K.Animation = K.extend(O, {
                tweener: function(e, t) {
                    K.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    for (var n, r = 0, i = e.length; i > r; r++) n = e[r], Zn[n] = Zn[n] || [], Zn[n].unshift(t)
                },
                prefilter: function(e, t) {
                    t ? Kn.unshift(e) : Kn.push(e)
                }
            }), K.Tween = _, _.prototype = {
                constructor: _,
                init: function(e, t, n, r, i, o) {
                    this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (K.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = _.propHooks[this.prop];
                    return e && e.get ? e.get(this) : _.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = _.propHooks[this.prop];
                    return this.pos = t = K.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration), this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : _.propHooks._default.set(this), this
                }
            }, _.prototype.init.prototype = _.prototype, _.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = K.css(e.elem, e.prop, !1, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                    },
                    set: function(e) {
                        K.fx.step[e.prop] ? K.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[K.cssProps[e.prop]] || K.cssHooks[e.prop]) ? K.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                    }
                }
            }, _.propHooks.scrollTop = _.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, K.each(["toggle", "show", "hide"], function(e, t) {
                var n = K.fn[t];
                K.fn[t] = function(r, i, o) {
                    return null == r || "boolean" == typeof r || !e && K.isFunction(r) && K.isFunction(i) ? n.apply(this, arguments) : this.animate(P(t, !0), r, i, o)
                }
            }), K.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(y).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function(e, t, n, r) {
                    var i = K.isEmptyObject(e),
                        o = K.speed(t, n, r),
                        a = function() {
                            var t = O(this, K.extend({}, e), o);
                            i && t.stop(!0)
                        };
                    return i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
                },
                stop: function(e, n, r) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(r)
                    };
                    return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            n = null != e && e + "queueHooks",
                            o = K.timers,
                            a = K._data(this);
                        if (n) a[n] && a[n].stop && i(a[n]);
                        else
                            for (n in a) a[n] && a[n].stop && Qn.test(n) && i(a[n]);
                        for (n = o.length; n--;) o[n].elem === this && (null == e || o[n].queue === e) && (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                        (t || !r) && K.dequeue(this, e)
                    })
                }
            }), K.each({
                slideDown: P("show"),
                slideUp: P("hide"),
                slideToggle: P("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                K.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r)
                }
            }), K.speed = function(e, t, n) {
                var r = e && "object" == typeof e ? K.extend({}, e) : {
                    complete: n || !n && t || K.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !K.isFunction(t) && t
                };
                return r.duration = K.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in K.fx.speeds ? K.fx.speeds[r.duration] : K.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                    K.isFunction(r.old) && r.old.call(this), r.queue && K.dequeue(this, r.queue)
                }, r
            }, K.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                }
            }, K.timers = [], K.fx = _.prototype.init, K.fx.tick = function() {
                for (var e, t = K.timers, n = 0; n < t.length; n++) e = t[n], !e() && t[n] === e && t.splice(n--, 1);
                t.length || K.fx.stop()
            }, K.fx.timer = function(e) {
                e() && K.timers.push(e) && !Vn && (Vn = setInterval(K.fx.tick, K.fx.interval))
            }, K.fx.interval = 13, K.fx.stop = function() {
                clearInterval(Vn), Vn = null
            }, K.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, K.fx.step = {}, K.expr && K.expr.filters && (K.expr.filters.animated = function(e) {
                return K.grep(K.timers, function(t) {
                    return e === t.elem
                }).length
            });
            var er = /^(?:body|html)$/i;
            K.fn.offset = function(e) {
                if (arguments.length) return e === t ? this : this.each(function(t) {
                    K.offset.setOffset(this, e, t)
                });
                var n, r, i, o, a, s, u, l, c, f, d = this[0],
                    p = d && d.ownerDocument;
                if (p) return (i = p.body) === d ? K.offset.bodyOffset(d) : (r = p.documentElement, K.contains(r, d) ? (n = d.getBoundingClientRect(), o = q(p), a = r.clientTop || i.clientTop || 0, s = r.clientLeft || i.clientLeft || 0, u = o.pageYOffset || r.scrollTop, l = o.pageXOffset || r.scrollLeft, c = n.top + u - a, f = n.left + l - s, {
                    top: c,
                    left: f
                }) : {
                    top: 0,
                    left: 0
                })
            }, K.offset = {
                bodyOffset: function(e) {
                    var t = e.offsetTop,
                        n = e.offsetLeft;
                    return K.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(K.css(e, "marginTop")) || 0, n += parseFloat(K.css(e, "marginLeft")) || 0), {
                        top: t,
                        left: n
                    }
                },
                setOffset: function(e, t, n) {
                    var r = K.css(e, "position");
                    "static" === r && (e.style.position = "relative");
                    var i, o, a = K(e),
                        s = a.offset(),
                        u = K.css(e, "top"),
                        l = K.css(e, "left"),
                        c = ("absolute" === r || "fixed" === r) && K.inArray("auto", [u, l]) > -1,
                        f = {},
                        d = {};
                    c ? (d = a.position(), i = d.top, o = d.left) : (i = parseFloat(u) || 0, o = parseFloat(l) || 0), K.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + i), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : a.css(f)
                }
            }, K.fn.extend({
                position: function() {
                    if (this[0]) {
                        var e = this[0],
                            t = this.offsetParent(),
                            n = this.offset(),
                            r = er.test(t[0].nodeName) ? {
                                top: 0,
                                left: 0
                            } : t.offset();
                        return n.top -= parseFloat(K.css(e, "marginTop")) || 0, n.left -= parseFloat(K.css(e, "marginLeft")) || 0, r.top += parseFloat(K.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(K.css(t[0], "borderLeftWidth")) || 0, {
                            top: n.top - r.top,
                            left: n.left - r.left
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent || R.body; e && !er.test(e.nodeName) && "static" === K.css(e, "position");) e = e.offsetParent;
                        return e || R.body
                    })
                }
            }), K.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, n) {
                var r = /Y/.test(n);
                K.fn[e] = function(i) {
                    return K.access(this, function(e, i, o) {
                        var a = q(e);
                        return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : void(a ? a.scrollTo(r ? K(a).scrollLeft() : o, r ? o : K(a).scrollTop()) : e[i] = o)
                    }, e, i, arguments.length, null)
                }
            }), K.each({
                Height: "height",
                Width: "width"
            }, function(e, n) {
                K.each({
                    padding: "inner" + e,
                    content: n,
                    "": "outer" + e
                }, function(r, i) {
                    K.fn[i] = function(i, o) {
                        var a = arguments.length && (r || "boolean" != typeof i),
                            s = r || (i === !0 || o === !0 ? "margin" : "border");
                        return K.access(this, function(n, r, i) {
                            var o;
                            return K.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? K.css(n, r, i, s) : K.style(n, r, i, s)
                        }, n, a ? i : t, a)
                    }
                })
            }), e.jQuery = e.$ = K, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
                return K
            })
        }(window)
    }, {}],
    3: [function() {
        window.iPadMode = navigator.userAgent.match(/iP/i), window.supportsTouchEvents = "ontouchstart" in document.documentElement || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|ZuneWP7/i.test(navigator.userAgent), document.all && !document.addEventListener && (document.documentElement.className += "" == document.documentElement.className ? "ie8minus" : " ie8minus");
        var e = !1;
        ("undefined" == typeof console || "undefined" == typeof console.log) && (console = {}, console.log = e ? function(e) {
            alert(e)
        } : function() {}), window.tdLib = {},
            function(e) {
                e.DEVICE_TYPES = {
                    iPad: "iPad",
                    iPhone: "iPhone",
                    android: "android",
                    desktop: "desktop",
                    wPhone: "wPhone"
                }, e.BROWSERS = {
                    safari: "Safari",
                    chrome: "Chrome"
                }, e.OS_TYPES = {
                    mac: "Mac OS",
                    win: "Windows"
                }, e.deviceDescription = {
                    type: void 0,
                    browser: void 0,
                    touchCapable: !1
                }, e.deviceDescription.type = e.DEVICE_TYPES.desktop, navigator.userAgent.indexOf("iPad") > -1 ? e.deviceDescription.type = e.DEVICE_TYPES.iPad : navigator.userAgent.indexOf("iPhone") > -1 ? e.deviceDescription.type = e.DEVICE_TYPES.iPhone : navigator.userAgent.indexOf("Android") > -1 ? e.deviceDescription.type = e.DEVICE_TYPES.android : navigator.userAgent.indexOf("Windows Phone") > -1 && (e.deviceDescription.type = e.DEVICE_TYPES.wPhone), navigator.userAgent.indexOf("Chrome") > -1 ? e.deviceDescription.browser = e.BROWSERS.chrome : navigator.userAgent.indexOf("Safari") > -1 && (e.deviceDescription.browser = e.BROWSERS.safari), e.deviceDescription.os = void 0, navigator.userAgent.indexOf("Mac OS") > -1 ? e.deviceDescription.os = e.OS_TYPES.mac : navigator.userAgent.indexOf("Windows") > -1 && (e.deviceDescription.os = e.OS_TYPES.win), ("object" == typeof Touch || "ontouchstart" in document.documentElement) && (e.deviceDescription.touchCapable = !0), e.debu = window.location.href.indexOf("?debug") > -1;
                var t;
                e.debLog = function(e) {
                    t && t.prepend($("<p>" + e + "</p>"))
                }, $(function() {
                    e.debu && (t = $("<div></div>").css({
                        position: "fixed",
                        top: 0,
                        right: 0,
                        display: "inline-block",
                        width: 300,
                        "min-height": 100,
                        font: "12px sans-serif",
                        color: "rgba(255,255,255,.8)",
                        "background-color": "rgba(0,0,0,.5)",
                        "z-index": 999,
                        "max-height": "50%",
                        "overflow-y": "scroll"
                    }), $("body").append(t)), e.debLog(e.deviceDescription.type), e.debLog("Standard-touch-capable: " + e.deviceDescription.touchCapable)
                }), e.twoComponentLoad = {
                    arr: [],
                    componentsReady: 0,
                    bind: function(t) {
                        e.twoComponentLoad.arr.push(t)
                    },
                    addComponent: function() {
                        if (!(++e.twoComponentLoad.componentsReady < 2)) {
                            e.debLog("onTwoComponentLoad");
                            for (var t in e.twoComponentLoad.arr) e.twoComponentLoad.arr[t]()
                        }
                    }
                }, $(function() {
                    e.twoComponentLoad.addComponent()
                }), $(window).on("load", function() {
                    e.twoComponentLoad.addComponent()
                }), e.positiveModulo = function(e, t) {
                    return (e % t + t) % t
                }
            }(tdLib), window.hotdot = {},
            function(e) {
                if (window.Modernizr) {
                    e.bestTranslateType = window.Modernizr.csstransforms3d ? "translate3d" : window.Modernizr.csstransforms ? "translate" : "left";
                    var t;
                    e.applyHorizontalShift = function(n, r, i) {
                        if (i = i || e.bestTranslateType, "" == n || "left" != i) {
                            if ("" == n) t = "";
                            else if ("translate3d" === i) t = "translate3d(" + n + "px, 0px, 0px)";
                            else if ("translate" === i) t = "translate(" + n + "px, 0px)";
                            else {
                                if ("translateX" !== i) return;
                                t = "translateX(" + n + "px)"
                            }
                            r.css({
                                WebkitTransform: t,
                                MozTransform: t,
                                Transform: t,
                                msTransform: t,
                                OTransform: t,
                                transform: t
                            })
                        }("" == n || "left" == i) && r.css("left", n)
                    }
                }
            }(hotdot)
    }, {}]
}, {}, [1]);
