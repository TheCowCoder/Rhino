var GeoOffersPopup = function(e) {
    var a = {};
    function t(n) {
        if (a[n])
            return a[n].exports;
        var o = a[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, t),
        o.l = !0,
        o.exports
    }
    return t.m = e,
    t.c = a,
    t.d = function(e, a, n) {
        t.o(e, a) || Object.defineProperty(e, a, {
            enumerable: !0,
            get: n
        })
    }
    ,
    t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    t.t = function(e, a) {
        if (1 & a && (e = t(e)),
        8 & a)
            return e;
        if (4 & a && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (t.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & a && "string" != typeof e)
            for (var o in e)
                t.d(n, o, function(a) {
                    return e[a]
                }
                .bind(null, o));
        return n
    }
    ,
    t.n = function(e) {
        var a = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return t.d(a, "a", a),
        a
    }
    ,
    t.o = function(e, a) {
        return Object.prototype.hasOwnProperty.call(e, a)
    }
    ,
    t.p = "",
    t(t.s = 138)
}([function(e, a, t) {
    (function(e) {
        e.exports = function() {
            "use strict";
            var a, n;
            function o() {
                return a.apply(null, arguments)
            }
            function i(e) {
                return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
            }
            function r(e) {
                return null != e && "[object Object]" === Object.prototype.toString.call(e)
            }
            function s(e, a) {
                return Object.prototype.hasOwnProperty.call(e, a)
            }
            function c(e) {
                if (Object.getOwnPropertyNames)
                    return 0 === Object.getOwnPropertyNames(e).length;
                var a;
                for (a in e)
                    if (s(e, a))
                        return !1;
                return !0
            }
            function d(e) {
                return void 0 === e
            }
            function M(e) {
                return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
            }
            function u(e) {
                return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
            }
            function l(e, a) {
                var t, n = [];
                for (t = 0; t < e.length; ++t)
                    n.push(a(e[t], t));
                return n
            }
            function _(e, a) {
                for (var t in a)
                    s(a, t) && (e[t] = a[t]);
                return s(a, "toString") && (e.toString = a.toString),
                s(a, "valueOf") && (e.valueOf = a.valueOf),
                e
            }
            function m(e, a, t, n) {
                return Ya(e, a, t, n, !0).utc()
            }
            function p(e) {
                return null == e._pf && (e._pf = {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidEra: null,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    era: null,
                    meridiem: null,
                    rfc2822: !1,
                    weekdayMismatch: !1
                }),
                e._pf
            }
            function f(e) {
                if (null == e._isValid) {
                    var a = p(e)
                      , t = n.call(a.parsedDateParts, (function(e) {
                        return null != e
                    }
                    ))
                      , o = !isNaN(e._d.getTime()) && a.overflow < 0 && !a.empty && !a.invalidEra && !a.invalidMonth && !a.invalidWeekday && !a.weekdayMismatch && !a.nullInput && !a.invalidFormat && !a.userInvalidated && (!a.meridiem || a.meridiem && t);
                    if (e._strict && (o = o && 0 === a.charsLeftOver && 0 === a.unusedTokens.length && void 0 === a.bigHour),
                    null != Object.isFrozen && Object.isFrozen(e))
                        return o;
                    e._isValid = o
                }
                return e._isValid
            }
            function L(e) {
                var a = m(NaN);
                return null != e ? _(p(a), e) : p(a).userInvalidated = !0,
                a
            }
            n = Array.prototype.some ? Array.prototype.some : function(e) {
                var a, t = Object(this), n = t.length >>> 0;
                for (a = 0; a < n; a++)
                    if (a in t && e.call(this, t[a], a, t))
                        return !0;
                return !1
            }
            ;
            var b = o.momentProperties = []
              , h = !1;
            function A(e, a) {
                var t, n, o;
                if (d(a._isAMomentObject) || (e._isAMomentObject = a._isAMomentObject),
                d(a._i) || (e._i = a._i),
                d(a._f) || (e._f = a._f),
                d(a._l) || (e._l = a._l),
                d(a._strict) || (e._strict = a._strict),
                d(a._tzm) || (e._tzm = a._tzm),
                d(a._isUTC) || (e._isUTC = a._isUTC),
                d(a._offset) || (e._offset = a._offset),
                d(a._pf) || (e._pf = p(a)),
                d(a._locale) || (e._locale = a._locale),
                b.length > 0)
                    for (t = 0; t < b.length; t++)
                        d(o = a[n = b[t]]) || (e[n] = o);
                return e
            }
            function z(e) {
                A(this, e),
                this._d = new Date(null != e._d ? e._d.getTime() : NaN),
                this.isValid() || (this._d = new Date(NaN)),
                !1 === h && (h = !0,
                o.updateOffset(this),
                h = !1)
            }
            function y(e) {
                return e instanceof z || null != e && null != e._isAMomentObject
            }
            function g(e) {
                !1 === o.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
            }
            function T(e, a) {
                var t = !0;
                return _((function() {
                    if (null != o.deprecationHandler && o.deprecationHandler(null, e),
                    t) {
                        var n, i, r, c = [];
                        for (i = 0; i < arguments.length; i++) {
                            if (n = "",
                            "object" == typeof arguments[i]) {
                                for (r in n += "\n[" + i + "] ",
                                arguments[0])
                                    s(arguments[0], r) && (n += r + ": " + arguments[0][r] + ", ");
                                n = n.slice(0, -2)
                            } else
                                n = arguments[i];
                            c.push(n)
                        }
                        g(e + "\nArguments: " + Array.prototype.slice.call(c).join("") + "\n" + (new Error).stack),
                        t = !1
                    }
                    return a.apply(this, arguments)
                }
                ), a)
            }
            var Y, O = {};
            function k(e, a) {
                null != o.deprecationHandler && o.deprecationHandler(e, a),
                O[e] || (g(a),
                O[e] = !0)
            }
            function D(e) {
                return "undefined" != typeof Function && e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
            }
            function N(e, a) {
                var t, n = _({}, e);
                for (t in a)
                    s(a, t) && (r(e[t]) && r(a[t]) ? (n[t] = {},
                    _(n[t], e[t]),
                    _(n[t], a[t])) : null != a[t] ? n[t] = a[t] : delete n[t]);
                for (t in e)
                    s(e, t) && !s(a, t) && r(e[t]) && (n[t] = _({}, n[t]));
                return n
            }
            function w(e) {
                null != e && this.set(e)
            }
            function W(e, a, t) {
                var n = "" + Math.abs(e)
                  , o = a - n.length;
                return (e >= 0 ? t ? "+" : "" : "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + n
            }
            o.suppressDeprecationWarnings = !1,
            o.deprecationHandler = null,
            Y = Object.keys ? Object.keys : function(e) {
                var a, t = [];
                for (a in e)
                    s(e, a) && t.push(a);
                return t
            }
            ;
            var q = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g
              , v = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g
              , S = {}
              , B = {};
            function X(e, a, t, n) {
                var o = n;
                "string" == typeof n && (o = function() {
                    return this[n]()
                }
                ),
                e && (B[e] = o),
                a && (B[a[0]] = function() {
                    return W(o.apply(this, arguments), a[1], a[2])
                }
                ),
                t && (B[t] = function() {
                    return this.localeData().ordinal(o.apply(this, arguments), e)
                }
                )
            }
            function E(e, a) {
                return e.isValid() ? (a = H(a, e.localeData()),
                S[a] = S[a] || function(e) {
                    var a, t, n, o = e.match(q);
                    for (a = 0,
                    t = o.length; a < t; a++)
                        B[o[a]] ? o[a] = B[o[a]] : o[a] = (n = o[a]).match(/\[[\s\S]/) ? n.replace(/^\[|\]$/g, "") : n.replace(/\\/g, "");
                    return function(a) {
                        var n, i = "";
                        for (n = 0; n < t; n++)
                            i += D(o[n]) ? o[n].call(a, e) : o[n];
                        return i
                    }
                }(a),
                S[a](e)) : e.localeData().invalidDate()
            }
            function H(e, a) {
                var t = 5;
                function n(e) {
                    return a.longDateFormat(e) || e
                }
                for (v.lastIndex = 0; t >= 0 && v.test(e); )
                    e = e.replace(v, n),
                    v.lastIndex = 0,
                    t -= 1;
                return e
            }
            var x = {};
            function C(e, a) {
                var t = e.toLowerCase();
                x[t] = x[t + "s"] = x[a] = e
            }
            function j(e) {
                return "string" == typeof e ? x[e] || x[e.toLowerCase()] : void 0
            }
            function P(e) {
                var a, t, n = {};
                for (t in e)
                    s(e, t) && (a = j(t)) && (n[a] = e[t]);
                return n
            }
            var R = {};
            function I(e, a) {
                R[e] = a
            }
            function F(e) {
                return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
            }
            function U(e) {
                return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
            }
            function G(e) {
                var a = +e
                  , t = 0;
                return 0 !== a && isFinite(a) && (t = U(a)),
                t
            }
            function J(e, a) {
                return function(t) {
                    return null != t ? (V(this, e, t),
                    o.updateOffset(this, a),
                    this) : K(this, e)
                }
            }
            function K(e, a) {
                return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + a]() : NaN
            }
            function V(e, a, t) {
                e.isValid() && !isNaN(t) && ("FullYear" === a && F(e.year()) && 1 === e.month() && 29 === e.date() ? (t = G(t),
                e._d["set" + (e._isUTC ? "UTC" : "") + a](t, e.month(), ye(t, e.month()))) : e._d["set" + (e._isUTC ? "UTC" : "") + a](t))
            }
            var Q, Z = /\d/, $ = /\d\d/, ee = /\d{3}/, ae = /\d{4}/, te = /[+-]?\d{6}/, ne = /\d\d?/, oe = /\d\d\d\d?/, ie = /\d\d\d\d\d\d?/, re = /\d{1,3}/, se = /\d{1,4}/, ce = /[+-]?\d{1,6}/, de = /\d+/, Me = /[+-]?\d+/, ue = /Z|[+-]\d\d:?\d\d/gi, le = /Z|[+-]\d\d(?::?\d\d)?/gi, _e = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
            function me(e, a, t) {
                Q[e] = D(a) ? a : function(e, n) {
                    return e && t ? t : a
                }
            }
            function pe(e, a) {
                return s(Q, e) ? Q[e](a._strict, a._locale) : new RegExp(fe(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function(e, a, t, n, o) {
                    return a || t || n || o
                }
                ))))
            }
            function fe(e) {
                return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }
            Q = {};
            var Le, be = {};
            function he(e, a) {
                var t, n = a;
                for ("string" == typeof e && (e = [e]),
                M(a) && (n = function(e, t) {
                    t[a] = G(e)
                }
                ),
                t = 0; t < e.length; t++)
                    be[e[t]] = n
            }
            function Ae(e, a) {
                he(e, (function(e, t, n, o) {
                    n._w = n._w || {},
                    a(e, n._w, n, o)
                }
                ))
            }
            function ze(e, a, t) {
                null != a && s(be, e) && be[e](a, t._a, t, e)
            }
            function ye(e, a) {
                if (isNaN(e) || isNaN(a))
                    return NaN;
                var t, n = (a % (t = 12) + t) % t;
                return e += (a - n) / 12,
                1 === n ? F(e) ? 29 : 28 : 31 - n % 7 % 2
            }
            Le = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
                var a;
                for (a = 0; a < this.length; ++a)
                    if (this[a] === e)
                        return a;
                return -1
            }
            ,
            X("M", ["MM", 2], "Mo", (function() {
                return this.month() + 1
            }
            )),
            X("MMM", 0, 0, (function(e) {
                return this.localeData().monthsShort(this, e)
            }
            )),
            X("MMMM", 0, 0, (function(e) {
                return this.localeData().months(this, e)
            }
            )),
            C("month", "M"),
            I("month", 8),
            me("M", ne),
            me("MM", ne, $),
            me("MMM", (function(e, a) {
                return a.monthsShortRegex(e)
            }
            )),
            me("MMMM", (function(e, a) {
                return a.monthsRegex(e)
            }
            )),
            he(["M", "MM"], (function(e, a) {
                a[1] = G(e) - 1
            }
            )),
            he(["MMM", "MMMM"], (function(e, a, t, n) {
                var o = t._locale.monthsParse(e, n, t._strict);
                null != o ? a[1] = o : p(t).invalidMonth = e
            }
            ));
            var ge = "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
              , Te = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")
              , Ye = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/
              , Oe = _e
              , ke = _e;
            function De(e, a, t) {
                var n, o, i, r = e.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [],
                    this._longMonthsParse = [],
                    this._shortMonthsParse = [],
                    n = 0; n < 12; ++n)
                        i = m([2e3, n]),
                        this._shortMonthsParse[n] = this.monthsShort(i, "").toLocaleLowerCase(),
                        this._longMonthsParse[n] = this.months(i, "").toLocaleLowerCase();
                return t ? "MMM" === a ? -1 !== (o = Le.call(this._shortMonthsParse, r)) ? o : null : -1 !== (o = Le.call(this._longMonthsParse, r)) ? o : null : "MMM" === a ? -1 !== (o = Le.call(this._shortMonthsParse, r)) || -1 !== (o = Le.call(this._longMonthsParse, r)) ? o : null : -1 !== (o = Le.call(this._longMonthsParse, r)) || -1 !== (o = Le.call(this._shortMonthsParse, r)) ? o : null
            }
            function Ne(e, a) {
                var t;
                if (!e.isValid())
                    return e;
                if ("string" == typeof a)
                    if (/^\d+$/.test(a))
                        a = G(a);
                    else if (!M(a = e.localeData().monthsParse(a)))
                        return e;
                return t = Math.min(e.date(), ye(e.year(), a)),
                e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](a, t),
                e
            }
            function we(e) {
                return null != e ? (Ne(this, e),
                o.updateOffset(this, !0),
                this) : K(this, "Month")
            }
            function We() {
                function e(e, a) {
                    return a.length - e.length
                }
                var a, t, n = [], o = [], i = [];
                for (a = 0; a < 12; a++)
                    t = m([2e3, a]),
                    n.push(this.monthsShort(t, "")),
                    o.push(this.months(t, "")),
                    i.push(this.months(t, "")),
                    i.push(this.monthsShort(t, ""));
                for (n.sort(e),
                o.sort(e),
                i.sort(e),
                a = 0; a < 12; a++)
                    n[a] = fe(n[a]),
                    o[a] = fe(o[a]);
                for (a = 0; a < 24; a++)
                    i[a] = fe(i[a]);
                this._monthsRegex = new RegExp("^(" + i.join("|") + ")","i"),
                this._monthsShortRegex = this._monthsRegex,
                this._monthsStrictRegex = new RegExp("^(" + o.join("|") + ")","i"),
                this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")","i")
            }
            function qe(e) {
                return F(e) ? 366 : 365
            }
            X("Y", 0, 0, (function() {
                var e = this.year();
                return e <= 9999 ? W(e, 4) : "+" + e
            }
            )),
            X(0, ["YY", 2], 0, (function() {
                return this.year() % 100
            }
            )),
            X(0, ["YYYY", 4], 0, "year"),
            X(0, ["YYYYY", 5], 0, "year"),
            X(0, ["YYYYYY", 6, !0], 0, "year"),
            C("year", "y"),
            I("year", 1),
            me("Y", Me),
            me("YY", ne, $),
            me("YYYY", se, ae),
            me("YYYYY", ce, te),
            me("YYYYYY", ce, te),
            he(["YYYYY", "YYYYYY"], 0),
            he("YYYY", (function(e, a) {
                a[0] = 2 === e.length ? o.parseTwoDigitYear(e) : G(e)
            }
            )),
            he("YY", (function(e, a) {
                a[0] = o.parseTwoDigitYear(e)
            }
            )),
            he("Y", (function(e, a) {
                a[0] = parseInt(e, 10)
            }
            )),
            o.parseTwoDigitYear = function(e) {
                return G(e) + (G(e) > 68 ? 1900 : 2e3)
            }
            ;
            var ve = J("FullYear", !0);
            function Se(e, a, t, n, o, i, r) {
                var s;
                return e < 100 && e >= 0 ? (s = new Date(e + 400,a,t,n,o,i,r),
                isFinite(s.getFullYear()) && s.setFullYear(e)) : s = new Date(e,a,t,n,o,i,r),
                s
            }
            function Be(e) {
                var a, t;
                return e < 100 && e >= 0 ? ((t = Array.prototype.slice.call(arguments))[0] = e + 400,
                a = new Date(Date.UTC.apply(null, t)),
                isFinite(a.getUTCFullYear()) && a.setUTCFullYear(e)) : a = new Date(Date.UTC.apply(null, arguments)),
                a
            }
            function Xe(e, a, t) {
                var n = 7 + a - t;
                return -(7 + Be(e, 0, n).getUTCDay() - a) % 7 + n - 1
            }
            function Ee(e, a, t, n, o) {
                var i, r, s = 1 + 7 * (a - 1) + (7 + t - n) % 7 + Xe(e, n, o);
                return s <= 0 ? r = qe(i = e - 1) + s : s > qe(e) ? (i = e + 1,
                r = s - qe(e)) : (i = e,
                r = s),
                {
                    year: i,
                    dayOfYear: r
                }
            }
            function He(e, a, t) {
                var n, o, i = Xe(e.year(), a, t), r = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;
                return r < 1 ? n = r + xe(o = e.year() - 1, a, t) : r > xe(e.year(), a, t) ? (n = r - xe(e.year(), a, t),
                o = e.year() + 1) : (o = e.year(),
                n = r),
                {
                    week: n,
                    year: o
                }
            }
            function xe(e, a, t) {
                var n = Xe(e, a, t)
                  , o = Xe(e + 1, a, t);
                return (qe(e) - n + o) / 7
            }
            function Ce(e, a) {
                return e.slice(a, 7).concat(e.slice(0, a))
            }
            X("w", ["ww", 2], "wo", "week"),
            X("W", ["WW", 2], "Wo", "isoWeek"),
            C("week", "w"),
            C("isoWeek", "W"),
            I("week", 5),
            I("isoWeek", 5),
            me("w", ne),
            me("ww", ne, $),
            me("W", ne),
            me("WW", ne, $),
            Ae(["w", "ww", "W", "WW"], (function(e, a, t, n) {
                a[n.substr(0, 1)] = G(e)
            }
            )),
            X("d", 0, "do", "day"),
            X("dd", 0, 0, (function(e) {
                return this.localeData().weekdaysMin(this, e)
            }
            )),
            X("ddd", 0, 0, (function(e) {
                return this.localeData().weekdaysShort(this, e)
            }
            )),
            X("dddd", 0, 0, (function(e) {
                return this.localeData().weekdays(this, e)
            }
            )),
            X("e", 0, 0, "weekday"),
            X("E", 0, 0, "isoWeekday"),
            C("day", "d"),
            C("weekday", "e"),
            C("isoWeekday", "E"),
            I("day", 11),
            I("weekday", 11),
            I("isoWeekday", 11),
            me("d", ne),
            me("e", ne),
            me("E", ne),
            me("dd", (function(e, a) {
                return a.weekdaysMinRegex(e)
            }
            )),
            me("ddd", (function(e, a) {
                return a.weekdaysShortRegex(e)
            }
            )),
            me("dddd", (function(e, a) {
                return a.weekdaysRegex(e)
            }
            )),
            Ae(["dd", "ddd", "dddd"], (function(e, a, t, n) {
                var o = t._locale.weekdaysParse(e, n, t._strict);
                null != o ? a.d = o : p(t).invalidWeekday = e
            }
            )),
            Ae(["d", "e", "E"], (function(e, a, t, n) {
                a[n] = G(e)
            }
            ));
            var je = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")
              , Pe = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
              , Re = "Su_Mo_Tu_We_Th_Fr_Sa".split("_")
              , Ie = _e
              , Fe = _e
              , Ue = _e;
            function Ge(e, a, t) {
                var n, o, i, r = e.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [],
                    this._shortWeekdaysParse = [],
                    this._minWeekdaysParse = [],
                    n = 0; n < 7; ++n)
                        i = m([2e3, 1]).day(n),
                        this._minWeekdaysParse[n] = this.weekdaysMin(i, "").toLocaleLowerCase(),
                        this._shortWeekdaysParse[n] = this.weekdaysShort(i, "").toLocaleLowerCase(),
                        this._weekdaysParse[n] = this.weekdays(i, "").toLocaleLowerCase();
                return t ? "dddd" === a ? -1 !== (o = Le.call(this._weekdaysParse, r)) ? o : null : "ddd" === a ? -1 !== (o = Le.call(this._shortWeekdaysParse, r)) ? o : null : -1 !== (o = Le.call(this._minWeekdaysParse, r)) ? o : null : "dddd" === a ? -1 !== (o = Le.call(this._weekdaysParse, r)) || -1 !== (o = Le.call(this._shortWeekdaysParse, r)) || -1 !== (o = Le.call(this._minWeekdaysParse, r)) ? o : null : "ddd" === a ? -1 !== (o = Le.call(this._shortWeekdaysParse, r)) || -1 !== (o = Le.call(this._weekdaysParse, r)) || -1 !== (o = Le.call(this._minWeekdaysParse, r)) ? o : null : -1 !== (o = Le.call(this._minWeekdaysParse, r)) || -1 !== (o = Le.call(this._weekdaysParse, r)) || -1 !== (o = Le.call(this._shortWeekdaysParse, r)) ? o : null
            }
            function Je() {
                function e(e, a) {
                    return a.length - e.length
                }
                var a, t, n, o, i, r = [], s = [], c = [], d = [];
                for (a = 0; a < 7; a++)
                    t = m([2e3, 1]).day(a),
                    n = fe(this.weekdaysMin(t, "")),
                    o = fe(this.weekdaysShort(t, "")),
                    i = fe(this.weekdays(t, "")),
                    r.push(n),
                    s.push(o),
                    c.push(i),
                    d.push(n),
                    d.push(o),
                    d.push(i);
                r.sort(e),
                s.sort(e),
                c.sort(e),
                d.sort(e),
                this._weekdaysRegex = new RegExp("^(" + d.join("|") + ")","i"),
                this._weekdaysShortRegex = this._weekdaysRegex,
                this._weekdaysMinRegex = this._weekdaysRegex,
                this._weekdaysStrictRegex = new RegExp("^(" + c.join("|") + ")","i"),
                this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")","i"),
                this._weekdaysMinStrictRegex = new RegExp("^(" + r.join("|") + ")","i")
            }
            function Ke() {
                return this.hours() % 12 || 12
            }
            function Ve(e, a) {
                X(e, 0, 0, (function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), a)
                }
                ))
            }
            function Qe(e, a) {
                return a._meridiemParse
            }
            X("H", ["HH", 2], 0, "hour"),
            X("h", ["hh", 2], 0, Ke),
            X("k", ["kk", 2], 0, (function() {
                return this.hours() || 24
            }
            )),
            X("hmm", 0, 0, (function() {
                return "" + Ke.apply(this) + W(this.minutes(), 2)
            }
            )),
            X("hmmss", 0, 0, (function() {
                return "" + Ke.apply(this) + W(this.minutes(), 2) + W(this.seconds(), 2)
            }
            )),
            X("Hmm", 0, 0, (function() {
                return "" + this.hours() + W(this.minutes(), 2)
            }
            )),
            X("Hmmss", 0, 0, (function() {
                return "" + this.hours() + W(this.minutes(), 2) + W(this.seconds(), 2)
            }
            )),
            Ve("a", !0),
            Ve("A", !1),
            C("hour", "h"),
            I("hour", 13),
            me("a", Qe),
            me("A", Qe),
            me("H", ne),
            me("h", ne),
            me("k", ne),
            me("HH", ne, $),
            me("hh", ne, $),
            me("kk", ne, $),
            me("hmm", oe),
            me("hmmss", ie),
            me("Hmm", oe),
            me("Hmmss", ie),
            he(["H", "HH"], 3),
            he(["k", "kk"], (function(e, a, t) {
                var n = G(e);
                a[3] = 24 === n ? 0 : n
            }
            )),
            he(["a", "A"], (function(e, a, t) {
                t._isPm = t._locale.isPM(e),
                t._meridiem = e
            }
            )),
            he(["h", "hh"], (function(e, a, t) {
                a[3] = G(e),
                p(t).bigHour = !0
            }
            )),
            he("hmm", (function(e, a, t) {
                var n = e.length - 2;
                a[3] = G(e.substr(0, n)),
                a[4] = G(e.substr(n)),
                p(t).bigHour = !0
            }
            )),
            he("hmmss", (function(e, a, t) {
                var n = e.length - 4
                  , o = e.length - 2;
                a[3] = G(e.substr(0, n)),
                a[4] = G(e.substr(n, 2)),
                a[5] = G(e.substr(o)),
                p(t).bigHour = !0
            }
            )),
            he("Hmm", (function(e, a, t) {
                var n = e.length - 2;
                a[3] = G(e.substr(0, n)),
                a[4] = G(e.substr(n))
            }
            )),
            he("Hmmss", (function(e, a, t) {
                var n = e.length - 4
                  , o = e.length - 2;
                a[3] = G(e.substr(0, n)),
                a[4] = G(e.substr(n, 2)),
                a[5] = G(e.substr(o))
            }
            ));
            var Ze, $e = J("Hours", !0), ea = {
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                longDateFormat: {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                },
                invalidDate: "Invalid date",
                ordinal: "%d",
                dayOfMonthOrdinalParse: /\d{1,2}/,
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    w: "a week",
                    ww: "%d weeks",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                months: ge,
                monthsShort: Te,
                week: {
                    dow: 0,
                    doy: 6
                },
                weekdays: je,
                weekdaysMin: Re,
                weekdaysShort: Pe,
                meridiemParse: /[ap]\.?m?\.?/i
            }, aa = {}, ta = {};
            function na(e, a) {
                var t, n = Math.min(e.length, a.length);
                for (t = 0; t < n; t += 1)
                    if (e[t] !== a[t])
                        return t;
                return n
            }
            function oa(e) {
                return e ? e.toLowerCase().replace("_", "-") : e
            }
            function ia(a) {
                var n = null;
                if (void 0 === aa[a] && void 0 !== e && e && e.exports)
                    try {
                        n = Ze._abbr,
                        t(147)("./" + a),
                        ra(n)
                    } catch (e) {
                        aa[a] = null
                    }
                return aa[a]
            }
            function ra(e, a) {
                var t;
                return e && ((t = d(a) ? ca(e) : sa(e, a)) ? Ze = t : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")),
                Ze._abbr
            }
            function sa(e, a) {
                if (null !== a) {
                    var t, n = ea;
                    if (a.abbr = e,
                    null != aa[e])
                        k("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
                        n = aa[e]._config;
                    else if (null != a.parentLocale)
                        if (null != aa[a.parentLocale])
                            n = aa[a.parentLocale]._config;
                        else {
                            if (null == (t = ia(a.parentLocale)))
                                return ta[a.parentLocale] || (ta[a.parentLocale] = []),
                                ta[a.parentLocale].push({
                                    name: e,
                                    config: a
                                }),
                                null;
                            n = t._config
                        }
                    return aa[e] = new w(N(n, a)),
                    ta[e] && ta[e].forEach((function(e) {
                        sa(e.name, e.config)
                    }
                    )),
                    ra(e),
                    aa[e]
                }
                return delete aa[e],
                null
            }
            function ca(e) {
                var a;
                if (e && e._locale && e._locale._abbr && (e = e._locale._abbr),
                !e)
                    return Ze;
                if (!i(e)) {
                    if (a = ia(e))
                        return a;
                    e = [e]
                }
                return function(e) {
                    for (var a, t, n, o, i = 0; i < e.length; ) {
                        for (a = (o = oa(e[i]).split("-")).length,
                        t = (t = oa(e[i + 1])) ? t.split("-") : null; a > 0; ) {
                            if (n = ia(o.slice(0, a).join("-")))
                                return n;
                            if (t && t.length >= a && na(o, t) >= a - 1)
                                break;
                            a--
                        }
                        i++
                    }
                    return Ze
                }(e)
            }
            function da(e) {
                var a, t = e._a;
                return t && -2 === p(e).overflow && (a = t[1] < 0 || t[1] > 11 ? 1 : t[2] < 1 || t[2] > ye(t[0], t[1]) ? 2 : t[3] < 0 || t[3] > 24 || 24 === t[3] && (0 !== t[4] || 0 !== t[5] || 0 !== t[6]) ? 3 : t[4] < 0 || t[4] > 59 ? 4 : t[5] < 0 || t[5] > 59 ? 5 : t[6] < 0 || t[6] > 999 ? 6 : -1,
                p(e)._overflowDayOfYear && (a < 0 || a > 2) && (a = 2),
                p(e)._overflowWeeks && -1 === a && (a = 7),
                p(e)._overflowWeekday && -1 === a && (a = 8),
                p(e).overflow = a),
                e
            }
            var Ma = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/
              , ua = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/
              , la = /Z|[+-]\d\d(?::?\d\d)?/
              , _a = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/], ["YYYYMM", /\d{6}/, !1], ["YYYY", /\d{4}/, !1]]
              , ma = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]]
              , pa = /^\/?Date\((-?\d+)/i
              , fa = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/
              , La = {
                UT: 0,
                GMT: 0,
                EDT: -240,
                EST: -300,
                CDT: -300,
                CST: -360,
                MDT: -360,
                MST: -420,
                PDT: -420,
                PST: -480
            };
            function ba(e) {
                var a, t, n, o, i, r, s = e._i, c = Ma.exec(s) || ua.exec(s);
                if (c) {
                    for (p(e).iso = !0,
                    a = 0,
                    t = _a.length; a < t; a++)
                        if (_a[a][1].exec(c[1])) {
                            o = _a[a][0],
                            n = !1 !== _a[a][2];
                            break
                        }
                    if (null == o)
                        return void (e._isValid = !1);
                    if (c[3]) {
                        for (a = 0,
                        t = ma.length; a < t; a++)
                            if (ma[a][1].exec(c[3])) {
                                i = (c[2] || " ") + ma[a][0];
                                break
                            }
                        if (null == i)
                            return void (e._isValid = !1)
                    }
                    if (!n && null != i)
                        return void (e._isValid = !1);
                    if (c[4]) {
                        if (!la.exec(c[4]))
                            return void (e._isValid = !1);
                        r = "Z"
                    }
                    e._f = o + (i || "") + (r || ""),
                    ga(e)
                } else
                    e._isValid = !1
            }
            function ha(e) {
                var a = parseInt(e, 10);
                return a <= 49 ? 2e3 + a : a <= 999 ? 1900 + a : a
            }
            function Aa(e) {
                var a, t, n, o, i, r, s, c, d = fa.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
                if (d) {
                    if (t = d[4],
                    n = d[3],
                    o = d[2],
                    i = d[5],
                    r = d[6],
                    s = d[7],
                    c = [ha(t), Te.indexOf(n), parseInt(o, 10), parseInt(i, 10), parseInt(r, 10)],
                    s && c.push(parseInt(s, 10)),
                    a = c,
                    !function(e, a, t) {
                        return !e || Pe.indexOf(e) === new Date(a[0],a[1],a[2]).getDay() || (p(t).weekdayMismatch = !0,
                        t._isValid = !1,
                        !1)
                    }(d[1], a, e))
                        return;
                    e._a = a,
                    e._tzm = function(e, a, t) {
                        if (e)
                            return La[e];
                        if (a)
                            return 0;
                        var n = parseInt(t, 10)
                          , o = n % 100;
                        return (n - o) / 100 * 60 + o
                    }(d[8], d[9], d[10]),
                    e._d = Be.apply(null, e._a),
                    e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                    p(e).rfc2822 = !0
                } else
                    e._isValid = !1
            }
            function za(e, a, t) {
                return null != e ? e : null != a ? a : t
            }
            function ya(e) {
                var a, t, n, i, r, s = [];
                if (!e._d) {
                    for (n = function(e) {
                        var a = new Date(o.now());
                        return e._useUTC ? [a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()] : [a.getFullYear(), a.getMonth(), a.getDate()]
                    }(e),
                    e._w && null == e._a[2] && null == e._a[1] && function(e) {
                        var a, t, n, o, i, r, s, c, d;
                        null != (a = e._w).GG || null != a.W || null != a.E ? (i = 1,
                        r = 4,
                        t = za(a.GG, e._a[0], He(Oa(), 1, 4).year),
                        n = za(a.W, 1),
                        ((o = za(a.E, 1)) < 1 || o > 7) && (c = !0)) : (i = e._locale._week.dow,
                        r = e._locale._week.doy,
                        d = He(Oa(), i, r),
                        t = za(a.gg, e._a[0], d.year),
                        n = za(a.w, d.week),
                        null != a.d ? ((o = a.d) < 0 || o > 6) && (c = !0) : null != a.e ? (o = a.e + i,
                        (a.e < 0 || a.e > 6) && (c = !0)) : o = i),
                        n < 1 || n > xe(t, i, r) ? p(e)._overflowWeeks = !0 : null != c ? p(e)._overflowWeekday = !0 : (s = Ee(t, n, o, i, r),
                        e._a[0] = s.year,
                        e._dayOfYear = s.dayOfYear)
                    }(e),
                    null != e._dayOfYear && (r = za(e._a[0], n[0]),
                    (e._dayOfYear > qe(r) || 0 === e._dayOfYear) && (p(e)._overflowDayOfYear = !0),
                    t = Be(r, 0, e._dayOfYear),
                    e._a[1] = t.getUTCMonth(),
                    e._a[2] = t.getUTCDate()),
                    a = 0; a < 3 && null == e._a[a]; ++a)
                        e._a[a] = s[a] = n[a];
                    for (; a < 7; a++)
                        e._a[a] = s[a] = null == e._a[a] ? 2 === a ? 1 : 0 : e._a[a];
                    24 === e._a[3] && 0 === e._a[4] && 0 === e._a[5] && 0 === e._a[6] && (e._nextDay = !0,
                    e._a[3] = 0),
                    e._d = (e._useUTC ? Be : Se).apply(null, s),
                    i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(),
                    null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                    e._nextDay && (e._a[3] = 24),
                    e._w && void 0 !== e._w.d && e._w.d !== i && (p(e).weekdayMismatch = !0)
                }
            }
            function ga(e) {
                if (e._f !== o.ISO_8601)
                    if (e._f !== o.RFC_2822) {
                        e._a = [],
                        p(e).empty = !0;
                        var a, t, n, i, r, s, c = "" + e._i, d = c.length, M = 0;
                        for (n = H(e._f, e._locale).match(q) || [],
                        a = 0; a < n.length; a++)
                            i = n[a],
                            (t = (c.match(pe(i, e)) || [])[0]) && ((r = c.substr(0, c.indexOf(t))).length > 0 && p(e).unusedInput.push(r),
                            c = c.slice(c.indexOf(t) + t.length),
                            M += t.length),
                            B[i] ? (t ? p(e).empty = !1 : p(e).unusedTokens.push(i),
                            ze(i, t, e)) : e._strict && !t && p(e).unusedTokens.push(i);
                        p(e).charsLeftOver = d - M,
                        c.length > 0 && p(e).unusedInput.push(c),
                        e._a[3] <= 12 && !0 === p(e).bigHour && e._a[3] > 0 && (p(e).bigHour = void 0),
                        p(e).parsedDateParts = e._a.slice(0),
                        p(e).meridiem = e._meridiem,
                        e._a[3] = function(e, a, t) {
                            var n;
                            return null == t ? a : null != e.meridiemHour ? e.meridiemHour(a, t) : null != e.isPM ? ((n = e.isPM(t)) && a < 12 && (a += 12),
                            n || 12 !== a || (a = 0),
                            a) : a
                        }(e._locale, e._a[3], e._meridiem),
                        null !== (s = p(e).era) && (e._a[0] = e._locale.erasConvertYear(s, e._a[0])),
                        ya(e),
                        da(e)
                    } else
                        Aa(e);
                else
                    ba(e)
            }
            function Ta(e) {
                var a = e._i
                  , t = e._f;
                return e._locale = e._locale || ca(e._l),
                null === a || void 0 === t && "" === a ? L({
                    nullInput: !0
                }) : ("string" == typeof a && (e._i = a = e._locale.preparse(a)),
                y(a) ? new z(da(a)) : (u(a) ? e._d = a : i(t) ? function(e) {
                    var a, t, n, o, i, r, s = !1;
                    if (0 === e._f.length)
                        return p(e).invalidFormat = !0,
                        void (e._d = new Date(NaN));
                    for (o = 0; o < e._f.length; o++)
                        i = 0,
                        r = !1,
                        a = A({}, e),
                        null != e._useUTC && (a._useUTC = e._useUTC),
                        a._f = e._f[o],
                        ga(a),
                        f(a) && (r = !0),
                        i += p(a).charsLeftOver,
                        i += 10 * p(a).unusedTokens.length,
                        p(a).score = i,
                        s ? i < n && (n = i,
                        t = a) : (null == n || i < n || r) && (n = i,
                        t = a,
                        r && (s = !0));
                    _(e, t || a)
                }(e) : t ? ga(e) : function(e) {
                    var a = e._i;
                    d(a) ? e._d = new Date(o.now()) : u(a) ? e._d = new Date(a.valueOf()) : "string" == typeof a ? function(e) {
                        var a = pa.exec(e._i);
                        null === a ? (ba(e),
                        !1 === e._isValid && (delete e._isValid,
                        Aa(e),
                        !1 === e._isValid && (delete e._isValid,
                        e._strict ? e._isValid = !1 : o.createFromInputFallback(e)))) : e._d = new Date(+a[1])
                    }(e) : i(a) ? (e._a = l(a.slice(0), (function(e) {
                        return parseInt(e, 10)
                    }
                    )),
                    ya(e)) : r(a) ? function(e) {
                        if (!e._d) {
                            var a = P(e._i)
                              , t = void 0 === a.day ? a.date : a.day;
                            e._a = l([a.year, a.month, t, a.hour, a.minute, a.second, a.millisecond], (function(e) {
                                return e && parseInt(e, 10)
                            }
                            )),
                            ya(e)
                        }
                    }(e) : M(a) ? e._d = new Date(a) : o.createFromInputFallback(e)
                }(e),
                f(e) || (e._d = null),
                e))
            }
            function Ya(e, a, t, n, o) {
                var s, d = {};
                return !0 !== a && !1 !== a || (n = a,
                a = void 0),
                !0 !== t && !1 !== t || (n = t,
                t = void 0),
                (r(e) && c(e) || i(e) && 0 === e.length) && (e = void 0),
                d._isAMomentObject = !0,
                d._useUTC = d._isUTC = o,
                d._l = t,
                d._i = e,
                d._f = a,
                d._strict = n,
                (s = new z(da(Ta(d))))._nextDay && (s.add(1, "d"),
                s._nextDay = void 0),
                s
            }
            function Oa(e, a, t, n) {
                return Ya(e, a, t, n, !1)
            }
            o.createFromInputFallback = T("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function(e) {
                e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
            }
            )),
            o.ISO_8601 = function() {}
            ,
            o.RFC_2822 = function() {}
            ;
            var ka = T("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
                var e = Oa.apply(null, arguments);
                return this.isValid() && e.isValid() ? e < this ? this : e : L()
            }
            ))
              , Da = T("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
                var e = Oa.apply(null, arguments);
                return this.isValid() && e.isValid() ? e > this ? this : e : L()
            }
            ));
            function Na(e, a) {
                var t, n;
                if (1 === a.length && i(a[0]) && (a = a[0]),
                !a.length)
                    return Oa();
                for (t = a[0],
                n = 1; n < a.length; ++n)
                    a[n].isValid() && !a[n][e](t) || (t = a[n]);
                return t
            }
            var wa = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
            function Wa(e) {
                var a = P(e)
                  , t = a.year || 0
                  , n = a.quarter || 0
                  , o = a.month || 0
                  , i = a.week || a.isoWeek || 0
                  , r = a.day || 0
                  , c = a.hour || 0
                  , d = a.minute || 0
                  , M = a.second || 0
                  , u = a.millisecond || 0;
                this._isValid = function(e) {
                    var a, t, n = !1;
                    for (a in e)
                        if (s(e, a) && (-1 === Le.call(wa, a) || null != e[a] && isNaN(e[a])))
                            return !1;
                    for (t = 0; t < wa.length; ++t)
                        if (e[wa[t]]) {
                            if (n)
                                return !1;
                            parseFloat(e[wa[t]]) !== G(e[wa[t]]) && (n = !0)
                        }
                    return !0
                }(a),
                this._milliseconds = +u + 1e3 * M + 6e4 * d + 1e3 * c * 60 * 60,
                this._days = +r + 7 * i,
                this._months = +o + 3 * n + 12 * t,
                this._data = {},
                this._locale = ca(),
                this._bubble()
            }
            function qa(e) {
                return e instanceof Wa
            }
            function va(e) {
                return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
            }
            function Sa(e, a) {
                X(e, 0, 0, (function() {
                    var e = this.utcOffset()
                      , t = "+";
                    return e < 0 && (e = -e,
                    t = "-"),
                    t + W(~~(e / 60), 2) + a + W(~~e % 60, 2)
                }
                ))
            }
            Sa("Z", ":"),
            Sa("ZZ", ""),
            me("Z", le),
            me("ZZ", le),
            he(["Z", "ZZ"], (function(e, a, t) {
                t._useUTC = !0,
                t._tzm = Xa(le, e)
            }
            ));
            var Ba = /([\+\-]|\d\d)/gi;
            function Xa(e, a) {
                var t, n, o = (a || "").match(e);
                return null === o ? null : 0 === (n = 60 * (t = ((o[o.length - 1] || []) + "").match(Ba) || ["-", 0, 0])[1] + G(t[2])) ? 0 : "+" === t[0] ? n : -n
            }
            function Ea(e, a) {
                var t, n;
                return a._isUTC ? (t = a.clone(),
                n = (y(e) || u(e) ? e.valueOf() : Oa(e).valueOf()) - t.valueOf(),
                t._d.setTime(t._d.valueOf() + n),
                o.updateOffset(t, !1),
                t) : Oa(e).local()
            }
            function Ha(e) {
                return -Math.round(e._d.getTimezoneOffset())
            }
            function xa() {
                return !!this.isValid() && this._isUTC && 0 === this._offset
            }
            o.updateOffset = function() {}
            ;
            var Ca = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/
              , ja = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
            function Pa(e, a) {
                var t, n, o, i, r, c, d = e, u = null;
                return qa(e) ? d = {
                    ms: e._milliseconds,
                    d: e._days,
                    M: e._months
                } : M(e) || !isNaN(+e) ? (d = {},
                a ? d[a] = +e : d.milliseconds = +e) : (u = Ca.exec(e)) ? (t = "-" === u[1] ? -1 : 1,
                d = {
                    y: 0,
                    d: G(u[2]) * t,
                    h: G(u[3]) * t,
                    m: G(u[4]) * t,
                    s: G(u[5]) * t,
                    ms: G(va(1e3 * u[6])) * t
                }) : (u = ja.exec(e)) ? (t = "-" === u[1] ? -1 : 1,
                d = {
                    y: Ra(u[2], t),
                    M: Ra(u[3], t),
                    w: Ra(u[4], t),
                    d: Ra(u[5], t),
                    h: Ra(u[6], t),
                    m: Ra(u[7], t),
                    s: Ra(u[8], t)
                }) : null == d ? d = {} : "object" == typeof d && ("from"in d || "to"in d) && (i = Oa(d.from),
                r = Oa(d.to),
                o = i.isValid() && r.isValid() ? (r = Ea(r, i),
                i.isBefore(r) ? c = Ia(i, r) : ((c = Ia(r, i)).milliseconds = -c.milliseconds,
                c.months = -c.months),
                c) : {
                    milliseconds: 0,
                    months: 0
                },
                (d = {}).ms = o.milliseconds,
                d.M = o.months),
                n = new Wa(d),
                qa(e) && s(e, "_locale") && (n._locale = e._locale),
                qa(e) && s(e, "_isValid") && (n._isValid = e._isValid),
                n
            }
            function Ra(e, a) {
                var t = e && parseFloat(e.replace(",", "."));
                return (isNaN(t) ? 0 : t) * a
            }
            function Ia(e, a) {
                var t = {};
                return t.months = a.month() - e.month() + 12 * (a.year() - e.year()),
                e.clone().add(t.months, "M").isAfter(a) && --t.months,
                t.milliseconds = +a - +e.clone().add(t.months, "M"),
                t
            }
            function Fa(e, a) {
                return function(t, n) {
                    var o;
                    return null === n || isNaN(+n) || (k(a, "moment()." + a + "(period, number) is deprecated. Please use moment()." + a + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
                    o = t,
                    t = n,
                    n = o),
                    Ua(this, Pa(t, n), e),
                    this
                }
            }
            function Ua(e, a, t, n) {
                var i = a._milliseconds
                  , r = va(a._days)
                  , s = va(a._months);
                e.isValid() && (n = null == n || n,
                s && Ne(e, K(e, "Month") + s * t),
                r && V(e, "Date", K(e, "Date") + r * t),
                i && e._d.setTime(e._d.valueOf() + i * t),
                n && o.updateOffset(e, r || s))
            }
            Pa.fn = Wa.prototype,
            Pa.invalid = function() {
                return Pa(NaN)
            }
            ;
            var Ga = Fa(1, "add")
              , Ja = Fa(-1, "subtract");
            function Ka(e) {
                return "string" == typeof e || e instanceof String
            }
            function Va(e) {
                return y(e) || u(e) || Ka(e) || M(e) || function(e) {
                    var a = i(e)
                      , t = !1;
                    return a && (t = 0 === e.filter((function(a) {
                        return !M(a) && Ka(e)
                    }
                    )).length),
                    a && t
                }(e) || function(e) {
                    var a, t, n = r(e) && !c(e), o = !1, i = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"];
                    for (a = 0; a < i.length; a += 1)
                        t = i[a],
                        o = o || s(e, t);
                    return n && o
                }(e) || null == e
            }
            function Qa(e) {
                var a, t = r(e) && !c(e), n = !1, o = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"];
                for (a = 0; a < o.length; a += 1)
                    n = n || s(e, o[a]);
                return t && n
            }
            function Za(e, a) {
                if (e.date() < a.date())
                    return -Za(a, e);
                var t = 12 * (a.year() - e.year()) + (a.month() - e.month())
                  , n = e.clone().add(t, "months");
                return -(t + (a - n < 0 ? (a - n) / (n - e.clone().add(t - 1, "months")) : (a - n) / (e.clone().add(t + 1, "months") - n))) || 0
            }
            function $a(e) {
                var a;
                return void 0 === e ? this._locale._abbr : (null != (a = ca(e)) && (this._locale = a),
                this)
            }
            o.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
            o.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var et = T("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function(e) {
                return void 0 === e ? this.localeData() : this.locale(e)
            }
            ));
            function at() {
                return this._locale
            }
            function tt(e, a) {
                return (e % a + a) % a
            }
            function nt(e, a, t) {
                return e < 100 && e >= 0 ? new Date(e + 400,a,t) - 126227808e5 : new Date(e,a,t).valueOf()
            }
            function ot(e, a, t) {
                return e < 100 && e >= 0 ? Date.UTC(e + 400, a, t) - 126227808e5 : Date.UTC(e, a, t)
            }
            function it(e, a) {
                return a.erasAbbrRegex(e)
            }
            function rt() {
                var e, a, t = [], n = [], o = [], i = [], r = this.eras();
                for (e = 0,
                a = r.length; e < a; ++e)
                    n.push(fe(r[e].name)),
                    t.push(fe(r[e].abbr)),
                    o.push(fe(r[e].narrow)),
                    i.push(fe(r[e].name)),
                    i.push(fe(r[e].abbr)),
                    i.push(fe(r[e].narrow));
                this._erasRegex = new RegExp("^(" + i.join("|") + ")","i"),
                this._erasNameRegex = new RegExp("^(" + n.join("|") + ")","i"),
                this._erasAbbrRegex = new RegExp("^(" + t.join("|") + ")","i"),
                this._erasNarrowRegex = new RegExp("^(" + o.join("|") + ")","i")
            }
            function st(e, a) {
                X(0, [e, e.length], 0, a)
            }
            function ct(e, a, t, n, o) {
                var i;
                return null == e ? He(this, n, o).year : (a > (i = xe(e, n, o)) && (a = i),
                dt.call(this, e, a, t, n, o))
            }
            function dt(e, a, t, n, o) {
                var i = Ee(e, a, t, n, o)
                  , r = Be(i.year, 0, i.dayOfYear);
                return this.year(r.getUTCFullYear()),
                this.month(r.getUTCMonth()),
                this.date(r.getUTCDate()),
                this
            }
            X("N", 0, 0, "eraAbbr"),
            X("NN", 0, 0, "eraAbbr"),
            X("NNN", 0, 0, "eraAbbr"),
            X("NNNN", 0, 0, "eraName"),
            X("NNNNN", 0, 0, "eraNarrow"),
            X("y", ["y", 1], "yo", "eraYear"),
            X("y", ["yy", 2], 0, "eraYear"),
            X("y", ["yyy", 3], 0, "eraYear"),
            X("y", ["yyyy", 4], 0, "eraYear"),
            me("N", it),
            me("NN", it),
            me("NNN", it),
            me("NNNN", (function(e, a) {
                return a.erasNameRegex(e)
            }
            )),
            me("NNNNN", (function(e, a) {
                return a.erasNarrowRegex(e)
            }
            )),
            he(["N", "NN", "NNN", "NNNN", "NNNNN"], (function(e, a, t, n) {
                var o = t._locale.erasParse(e, n, t._strict);
                o ? p(t).era = o : p(t).invalidEra = e
            }
            )),
            me("y", de),
            me("yy", de),
            me("yyy", de),
            me("yyyy", de),
            me("yo", (function(e, a) {
                return a._eraYearOrdinalRegex || de
            }
            )),
            he(["y", "yy", "yyy", "yyyy"], 0),
            he(["yo"], (function(e, a, t, n) {
                var o;
                t._locale._eraYearOrdinalRegex && (o = e.match(t._locale._eraYearOrdinalRegex)),
                t._locale.eraYearOrdinalParse ? a[0] = t._locale.eraYearOrdinalParse(e, o) : a[0] = parseInt(e, 10)
            }
            )),
            X(0, ["gg", 2], 0, (function() {
                return this.weekYear() % 100
            }
            )),
            X(0, ["GG", 2], 0, (function() {
                return this.isoWeekYear() % 100
            }
            )),
            st("gggg", "weekYear"),
            st("ggggg", "weekYear"),
            st("GGGG", "isoWeekYear"),
            st("GGGGG", "isoWeekYear"),
            C("weekYear", "gg"),
            C("isoWeekYear", "GG"),
            I("weekYear", 1),
            I("isoWeekYear", 1),
            me("G", Me),
            me("g", Me),
            me("GG", ne, $),
            me("gg", ne, $),
            me("GGGG", se, ae),
            me("gggg", se, ae),
            me("GGGGG", ce, te),
            me("ggggg", ce, te),
            Ae(["gggg", "ggggg", "GGGG", "GGGGG"], (function(e, a, t, n) {
                a[n.substr(0, 2)] = G(e)
            }
            )),
            Ae(["gg", "GG"], (function(e, a, t, n) {
                a[n] = o.parseTwoDigitYear(e)
            }
            )),
            X("Q", 0, "Qo", "quarter"),
            C("quarter", "Q"),
            I("quarter", 7),
            me("Q", Z),
            he("Q", (function(e, a) {
                a[1] = 3 * (G(e) - 1)
            }
            )),
            X("D", ["DD", 2], "Do", "date"),
            C("date", "D"),
            I("date", 9),
            me("D", ne),
            me("DD", ne, $),
            me("Do", (function(e, a) {
                return e ? a._dayOfMonthOrdinalParse || a._ordinalParse : a._dayOfMonthOrdinalParseLenient
            }
            )),
            he(["D", "DD"], 2),
            he("Do", (function(e, a) {
                a[2] = G(e.match(ne)[0])
            }
            ));
            var Mt = J("Date", !0);
            X("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
            C("dayOfYear", "DDD"),
            I("dayOfYear", 4),
            me("DDD", re),
            me("DDDD", ee),
            he(["DDD", "DDDD"], (function(e, a, t) {
                t._dayOfYear = G(e)
            }
            )),
            X("m", ["mm", 2], 0, "minute"),
            C("minute", "m"),
            I("minute", 14),
            me("m", ne),
            me("mm", ne, $),
            he(["m", "mm"], 4);
            var ut = J("Minutes", !1);
            X("s", ["ss", 2], 0, "second"),
            C("second", "s"),
            I("second", 15),
            me("s", ne),
            me("ss", ne, $),
            he(["s", "ss"], 5);
            var lt, _t, mt = J("Seconds", !1);
            for (X("S", 0, 0, (function() {
                return ~~(this.millisecond() / 100)
            }
            )),
            X(0, ["SS", 2], 0, (function() {
                return ~~(this.millisecond() / 10)
            }
            )),
            X(0, ["SSS", 3], 0, "millisecond"),
            X(0, ["SSSS", 4], 0, (function() {
                return 10 * this.millisecond()
            }
            )),
            X(0, ["SSSSS", 5], 0, (function() {
                return 100 * this.millisecond()
            }
            )),
            X(0, ["SSSSSS", 6], 0, (function() {
                return 1e3 * this.millisecond()
            }
            )),
            X(0, ["SSSSSSS", 7], 0, (function() {
                return 1e4 * this.millisecond()
            }
            )),
            X(0, ["SSSSSSSS", 8], 0, (function() {
                return 1e5 * this.millisecond()
            }
            )),
            X(0, ["SSSSSSSSS", 9], 0, (function() {
                return 1e6 * this.millisecond()
            }
            )),
            C("millisecond", "ms"),
            I("millisecond", 16),
            me("S", re, Z),
            me("SS", re, $),
            me("SSS", re, ee),
            lt = "SSSS"; lt.length <= 9; lt += "S")
                me(lt, de);
            function pt(e, a) {
                a[6] = G(1e3 * ("0." + e))
            }
            for (lt = "S"; lt.length <= 9; lt += "S")
                he(lt, pt);
            _t = J("Milliseconds", !1),
            X("z", 0, 0, "zoneAbbr"),
            X("zz", 0, 0, "zoneName");
            var ft = z.prototype;
            function Lt(e) {
                return e
            }
            ft.add = Ga,
            ft.calendar = function(e, a) {
                1 === arguments.length && (arguments[0] ? Va(arguments[0]) ? (e = arguments[0],
                a = void 0) : Qa(arguments[0]) && (a = arguments[0],
                e = void 0) : (e = void 0,
                a = void 0));
                var t = e || Oa()
                  , n = Ea(t, this).startOf("day")
                  , i = o.calendarFormat(this, n) || "sameElse"
                  , r = a && (D(a[i]) ? a[i].call(this, t) : a[i]);
                return this.format(r || this.localeData().calendar(i, this, Oa(t)))
            }
            ,
            ft.clone = function() {
                return new z(this)
            }
            ,
            ft.diff = function(e, a, t) {
                var n, o, i;
                if (!this.isValid())
                    return NaN;
                if (!(n = Ea(e, this)).isValid())
                    return NaN;
                switch (o = 6e4 * (n.utcOffset() - this.utcOffset()),
                a = j(a)) {
                case "year":
                    i = Za(this, n) / 12;
                    break;
                case "month":
                    i = Za(this, n);
                    break;
                case "quarter":
                    i = Za(this, n) / 3;
                    break;
                case "second":
                    i = (this - n) / 1e3;
                    break;
                case "minute":
                    i = (this - n) / 6e4;
                    break;
                case "hour":
                    i = (this - n) / 36e5;
                    break;
                case "day":
                    i = (this - n - o) / 864e5;
                    break;
                case "week":
                    i = (this - n - o) / 6048e5;
                    break;
                default:
                    i = this - n
                }
                return t ? i : U(i)
            }
            ,
            ft.endOf = function(e) {
                var a, t;
                if (void 0 === (e = j(e)) || "millisecond" === e || !this.isValid())
                    return this;
                switch (t = this._isUTC ? ot : nt,
                e) {
                case "year":
                    a = t(this.year() + 1, 0, 1) - 1;
                    break;
                case "quarter":
                    a = t(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                    break;
                case "month":
                    a = t(this.year(), this.month() + 1, 1) - 1;
                    break;
                case "week":
                    a = t(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                    break;
                case "isoWeek":
                    a = t(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                    break;
                case "day":
                case "date":
                    a = t(this.year(), this.month(), this.date() + 1) - 1;
                    break;
                case "hour":
                    a = this._d.valueOf(),
                    a += 36e5 - tt(a + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
                    break;
                case "minute":
                    a = this._d.valueOf(),
                    a += 6e4 - tt(a, 6e4) - 1;
                    break;
                case "second":
                    a = this._d.valueOf(),
                    a += 1e3 - tt(a, 1e3) - 1
                }
                return this._d.setTime(a),
                o.updateOffset(this, !0),
                this
            }
            ,
            ft.format = function(e) {
                e || (e = this.isUtc() ? o.defaultFormatUtc : o.defaultFormat);
                var a = E(this, e);
                return this.localeData().postformat(a)
            }
            ,
            ft.from = function(e, a) {
                return this.isValid() && (y(e) && e.isValid() || Oa(e).isValid()) ? Pa({
                    to: this,
                    from: e
                }).locale(this.locale()).humanize(!a) : this.localeData().invalidDate()
            }
            ,
            ft.fromNow = function(e) {
                return this.from(Oa(), e)
            }
            ,
            ft.to = function(e, a) {
                return this.isValid() && (y(e) && e.isValid() || Oa(e).isValid()) ? Pa({
                    from: this,
                    to: e
                }).locale(this.locale()).humanize(!a) : this.localeData().invalidDate()
            }
            ,
            ft.toNow = function(e) {
                return this.to(Oa(), e)
            }
            ,
            ft.get = function(e) {
                return D(this[e = j(e)]) ? this[e]() : this
            }
            ,
            ft.invalidAt = function() {
                return p(this).overflow
            }
            ,
            ft.isAfter = function(e, a) {
                var t = y(e) ? e : Oa(e);
                return !(!this.isValid() || !t.isValid()) && ("millisecond" === (a = j(a) || "millisecond") ? this.valueOf() > t.valueOf() : t.valueOf() < this.clone().startOf(a).valueOf())
            }
            ,
            ft.isBefore = function(e, a) {
                var t = y(e) ? e : Oa(e);
                return !(!this.isValid() || !t.isValid()) && ("millisecond" === (a = j(a) || "millisecond") ? this.valueOf() < t.valueOf() : this.clone().endOf(a).valueOf() < t.valueOf())
            }
            ,
            ft.isBetween = function(e, a, t, n) {
                var o = y(e) ? e : Oa(e)
                  , i = y(a) ? a : Oa(a);
                return !!(this.isValid() && o.isValid() && i.isValid()) && (("(" === (n = n || "()")[0] ? this.isAfter(o, t) : !this.isBefore(o, t)) && (")" === n[1] ? this.isBefore(i, t) : !this.isAfter(i, t)))
            }
            ,
            ft.isSame = function(e, a) {
                var t, n = y(e) ? e : Oa(e);
                return !(!this.isValid() || !n.isValid()) && ("millisecond" === (a = j(a) || "millisecond") ? this.valueOf() === n.valueOf() : (t = n.valueOf(),
                this.clone().startOf(a).valueOf() <= t && t <= this.clone().endOf(a).valueOf()))
            }
            ,
            ft.isSameOrAfter = function(e, a) {
                return this.isSame(e, a) || this.isAfter(e, a)
            }
            ,
            ft.isSameOrBefore = function(e, a) {
                return this.isSame(e, a) || this.isBefore(e, a)
            }
            ,
            ft.isValid = function() {
                return f(this)
            }
            ,
            ft.lang = et,
            ft.locale = $a,
            ft.localeData = at,
            ft.max = Da,
            ft.min = ka,
            ft.parsingFlags = function() {
                return _({}, p(this))
            }
            ,
            ft.set = function(e, a) {
                if ("object" == typeof e) {
                    var t, n = function(e) {
                        var a, t = [];
                        for (a in e)
                            s(e, a) && t.push({
                                unit: a,
                                priority: R[a]
                            });
                        return t.sort((function(e, a) {
                            return e.priority - a.priority
                        }
                        )),
                        t
                    }(e = P(e));
                    for (t = 0; t < n.length; t++)
                        this[n[t].unit](e[n[t].unit])
                } else if (D(this[e = j(e)]))
                    return this[e](a);
                return this
            }
            ,
            ft.startOf = function(e) {
                var a, t;
                if (void 0 === (e = j(e)) || "millisecond" === e || !this.isValid())
                    return this;
                switch (t = this._isUTC ? ot : nt,
                e) {
                case "year":
                    a = t(this.year(), 0, 1);
                    break;
                case "quarter":
                    a = t(this.year(), this.month() - this.month() % 3, 1);
                    break;
                case "month":
                    a = t(this.year(), this.month(), 1);
                    break;
                case "week":
                    a = t(this.year(), this.month(), this.date() - this.weekday());
                    break;
                case "isoWeek":
                    a = t(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                    break;
                case "day":
                case "date":
                    a = t(this.year(), this.month(), this.date());
                    break;
                case "hour":
                    a = this._d.valueOf(),
                    a -= tt(a + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
                    break;
                case "minute":
                    a = this._d.valueOf(),
                    a -= tt(a, 6e4);
                    break;
                case "second":
                    a = this._d.valueOf(),
                    a -= tt(a, 1e3)
                }
                return this._d.setTime(a),
                o.updateOffset(this, !0),
                this
            }
            ,
            ft.subtract = Ja,
            ft.toArray = function() {
                var e = this;
                return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
            }
            ,
            ft.toObject = function() {
                var e = this;
                return {
                    years: e.year(),
                    months: e.month(),
                    date: e.date(),
                    hours: e.hours(),
                    minutes: e.minutes(),
                    seconds: e.seconds(),
                    milliseconds: e.milliseconds()
                }
            }
            ,
            ft.toDate = function() {
                return new Date(this.valueOf())
            }
            ,
            ft.toISOString = function(e) {
                if (!this.isValid())
                    return null;
                var a = !0 !== e
                  , t = a ? this.clone().utc() : this;
                return t.year() < 0 || t.year() > 9999 ? E(t, a ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : D(Date.prototype.toISOString) ? a ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", E(t, "Z")) : E(t, a ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
            }
            ,
            ft.inspect = function() {
                if (!this.isValid())
                    return "moment.invalid(/* " + this._i + " */)";
                var e, a, t, n = "moment", o = "";
                return this.isLocal() || (n = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone",
                o = "Z"),
                e = "[" + n + '("]',
                a = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                t = o + '[")]',
                this.format(e + a + "-MM-DD[T]HH:mm:ss.SSS" + t)
            }
            ,
            "undefined" != typeof Symbol && null != Symbol.for && (ft[Symbol.for("nodejs.util.inspect.custom")] = function() {
                return "Moment<" + this.format() + ">"
            }
            ),
            ft.toJSON = function() {
                return this.isValid() ? this.toISOString() : null
            }
            ,
            ft.toString = function() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }
            ,
            ft.unix = function() {
                return Math.floor(this.valueOf() / 1e3)
            }
            ,
            ft.valueOf = function() {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }
            ,
            ft.creationData = function() {
                return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict
                }
            }
            ,
            ft.eraName = function() {
                var e, a, t, n = this.localeData().eras();
                for (e = 0,
                a = n.length; e < a; ++e) {
                    if (t = this.clone().startOf("day").valueOf(),
                    n[e].since <= t && t <= n[e].until)
                        return n[e].name;
                    if (n[e].until <= t && t <= n[e].since)
                        return n[e].name
                }
                return ""
            }
            ,
            ft.eraNarrow = function() {
                var e, a, t, n = this.localeData().eras();
                for (e = 0,
                a = n.length; e < a; ++e) {
                    if (t = this.clone().startOf("day").valueOf(),
                    n[e].since <= t && t <= n[e].until)
                        return n[e].narrow;
                    if (n[e].until <= t && t <= n[e].since)
                        return n[e].narrow
                }
                return ""
            }
            ,
            ft.eraAbbr = function() {
                var e, a, t, n = this.localeData().eras();
                for (e = 0,
                a = n.length; e < a; ++e) {
                    if (t = this.clone().startOf("day").valueOf(),
                    n[e].since <= t && t <= n[e].until)
                        return n[e].abbr;
                    if (n[e].until <= t && t <= n[e].since)
                        return n[e].abbr
                }
                return ""
            }
            ,
            ft.eraYear = function() {
                var e, a, t, n, i = this.localeData().eras();
                for (e = 0,
                a = i.length; e < a; ++e)
                    if (t = i[e].since <= i[e].until ? 1 : -1,
                    n = this.clone().startOf("day").valueOf(),
                    i[e].since <= n && n <= i[e].until || i[e].until <= n && n <= i[e].since)
                        return (this.year() - o(i[e].since).year()) * t + i[e].offset;
                return this.year()
            }
            ,
            ft.year = ve,
            ft.isLeapYear = function() {
                return F(this.year())
            }
            ,
            ft.weekYear = function(e) {
                return ct.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }
            ,
            ft.isoWeekYear = function(e) {
                return ct.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
            }
            ,
            ft.quarter = ft.quarters = function(e) {
                return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
            }
            ,
            ft.month = we,
            ft.daysInMonth = function() {
                return ye(this.year(), this.month())
            }
            ,
            ft.week = ft.weeks = function(e) {
                var a = this.localeData().week(this);
                return null == e ? a : this.add(7 * (e - a), "d")
            }
            ,
            ft.isoWeek = ft.isoWeeks = function(e) {
                var a = He(this, 1, 4).week;
                return null == e ? a : this.add(7 * (e - a), "d")
            }
            ,
            ft.weeksInYear = function() {
                var e = this.localeData()._week;
                return xe(this.year(), e.dow, e.doy)
            }
            ,
            ft.weeksInWeekYear = function() {
                var e = this.localeData()._week;
                return xe(this.weekYear(), e.dow, e.doy)
            }
            ,
            ft.isoWeeksInYear = function() {
                return xe(this.year(), 1, 4)
            }
            ,
            ft.isoWeeksInISOWeekYear = function() {
                return xe(this.isoWeekYear(), 1, 4)
            }
            ,
            ft.date = Mt,
            ft.day = ft.days = function(e) {
                if (!this.isValid())
                    return null != e ? this : NaN;
                var a = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != e ? (e = function(e, a) {
                    return "string" != typeof e ? e : isNaN(e) ? "number" == typeof (e = a.weekdaysParse(e)) ? e : null : parseInt(e, 10)
                }(e, this.localeData()),
                this.add(e - a, "d")) : a
            }
            ,
            ft.weekday = function(e) {
                if (!this.isValid())
                    return null != e ? this : NaN;
                var a = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == e ? a : this.add(e - a, "d")
            }
            ,
            ft.isoWeekday = function(e) {
                if (!this.isValid())
                    return null != e ? this : NaN;
                if (null != e) {
                    var a = function(e, a) {
                        return "string" == typeof e ? a.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
                    }(e, this.localeData());
                    return this.day(this.day() % 7 ? a : a - 7)
                }
                return this.day() || 7
            }
            ,
            ft.dayOfYear = function(e) {
                var a = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == e ? a : this.add(e - a, "d")
            }
            ,
            ft.hour = ft.hours = $e,
            ft.minute = ft.minutes = ut,
            ft.second = ft.seconds = mt,
            ft.millisecond = ft.milliseconds = _t,
            ft.utcOffset = function(e, a, t) {
                var n, i = this._offset || 0;
                if (!this.isValid())
                    return null != e ? this : NaN;
                if (null != e) {
                    if ("string" == typeof e) {
                        if (null === (e = Xa(le, e)))
                            return this
                    } else
                        Math.abs(e) < 16 && !t && (e *= 60);
                    return !this._isUTC && a && (n = Ha(this)),
                    this._offset = e,
                    this._isUTC = !0,
                    null != n && this.add(n, "m"),
                    i !== e && (!a || this._changeInProgress ? Ua(this, Pa(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
                    o.updateOffset(this, !0),
                    this._changeInProgress = null)),
                    this
                }
                return this._isUTC ? i : Ha(this)
            }
            ,
            ft.utc = function(e) {
                return this.utcOffset(0, e)
            }
            ,
            ft.local = function(e) {
                return this._isUTC && (this.utcOffset(0, e),
                this._isUTC = !1,
                e && this.subtract(Ha(this), "m")),
                this
            }
            ,
            ft.parseZone = function() {
                if (null != this._tzm)
                    this.utcOffset(this._tzm, !1, !0);
                else if ("string" == typeof this._i) {
                    var e = Xa(ue, this._i);
                    null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
                }
                return this
            }
            ,
            ft.hasAlignedHourOffset = function(e) {
                return !!this.isValid() && (e = e ? Oa(e).utcOffset() : 0,
                (this.utcOffset() - e) % 60 == 0)
            }
            ,
            ft.isDST = function() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }
            ,
            ft.isLocal = function() {
                return !!this.isValid() && !this._isUTC
            }
            ,
            ft.isUtcOffset = function() {
                return !!this.isValid() && this._isUTC
            }
            ,
            ft.isUtc = xa,
            ft.isUTC = xa,
            ft.zoneAbbr = function() {
                return this._isUTC ? "UTC" : ""
            }
            ,
            ft.zoneName = function() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }
            ,
            ft.dates = T("dates accessor is deprecated. Use date instead.", Mt),
            ft.months = T("months accessor is deprecated. Use month instead", we),
            ft.years = T("years accessor is deprecated. Use year instead", ve),
            ft.zone = T("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", (function(e, a) {
                return null != e ? ("string" != typeof e && (e = -e),
                this.utcOffset(e, a),
                this) : -this.utcOffset()
            }
            )),
            ft.isDSTShifted = T("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", (function() {
                if (!d(this._isDSTShifted))
                    return this._isDSTShifted;
                var e, a = {};
                return A(a, this),
                (a = Ta(a))._a ? (e = a._isUTC ? m(a._a) : Oa(a._a),
                this._isDSTShifted = this.isValid() && function(e, a, t) {
                    var n, o = Math.min(e.length, a.length), i = Math.abs(e.length - a.length), r = 0;
                    for (n = 0; n < o; n++)
                        (t && e[n] !== a[n] || !t && G(e[n]) !== G(a[n])) && r++;
                    return r + i
                }(a._a, e.toArray()) > 0) : this._isDSTShifted = !1,
                this._isDSTShifted
            }
            ));
            var bt = w.prototype;
            function ht(e, a, t, n) {
                var o = ca()
                  , i = m().set(n, a);
                return o[t](i, e)
            }
            function At(e, a, t) {
                if (M(e) && (a = e,
                e = void 0),
                e = e || "",
                null != a)
                    return ht(e, a, t, "month");
                var n, o = [];
                for (n = 0; n < 12; n++)
                    o[n] = ht(e, n, t, "month");
                return o
            }
            function zt(e, a, t, n) {
                "boolean" == typeof e ? (M(a) && (t = a,
                a = void 0),
                a = a || "") : (t = a = e,
                e = !1,
                M(a) && (t = a,
                a = void 0),
                a = a || "");
                var o, i = ca(), r = e ? i._week.dow : 0, s = [];
                if (null != t)
                    return ht(a, (t + r) % 7, n, "day");
                for (o = 0; o < 7; o++)
                    s[o] = ht(a, (o + r) % 7, n, "day");
                return s
            }
            bt.calendar = function(e, a, t) {
                var n = this._calendar[e] || this._calendar.sameElse;
                return D(n) ? n.call(a, t) : n
            }
            ,
            bt.longDateFormat = function(e) {
                var a = this._longDateFormat[e]
                  , t = this._longDateFormat[e.toUpperCase()];
                return a || !t ? a : (this._longDateFormat[e] = t.match(q).map((function(e) {
                    return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e ? e.slice(1) : e
                }
                )).join(""),
                this._longDateFormat[e])
            }
            ,
            bt.invalidDate = function() {
                return this._invalidDate
            }
            ,
            bt.ordinal = function(e) {
                return this._ordinal.replace("%d", e)
            }
            ,
            bt.preparse = Lt,
            bt.postformat = Lt,
            bt.relativeTime = function(e, a, t, n) {
                var o = this._relativeTime[t];
                return D(o) ? o(e, a, t, n) : o.replace(/%d/i, e)
            }
            ,
            bt.pastFuture = function(e, a) {
                var t = this._relativeTime[e > 0 ? "future" : "past"];
                return D(t) ? t(a) : t.replace(/%s/i, a)
            }
            ,
            bt.set = function(e) {
                var a, t;
                for (t in e)
                    s(e, t) && (D(a = e[t]) ? this[t] = a : this["_" + t] = a);
                this._config = e,
                this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
            }
            ,
            bt.eras = function(e, a) {
                var t, n, i, r = this._eras || ca("en")._eras;
                for (t = 0,
                n = r.length; t < n; ++t) {
                    switch (typeof r[t].since) {
                    case "string":
                        i = o(r[t].since).startOf("day"),
                        r[t].since = i.valueOf()
                    }
                    switch (typeof r[t].until) {
                    case "undefined":
                        r[t].until = 1 / 0;
                        break;
                    case "string":
                        i = o(r[t].until).startOf("day").valueOf(),
                        r[t].until = i.valueOf()
                    }
                }
                return r
            }
            ,
            bt.erasParse = function(e, a, t) {
                var n, o, i, r, s, c = this.eras();
                for (e = e.toUpperCase(),
                n = 0,
                o = c.length; n < o; ++n)
                    if (i = c[n].name.toUpperCase(),
                    r = c[n].abbr.toUpperCase(),
                    s = c[n].narrow.toUpperCase(),
                    t)
                        switch (a) {
                        case "N":
                        case "NN":
                        case "NNN":
                            if (r === e)
                                return c[n];
                            break;
                        case "NNNN":
                            if (i === e)
                                return c[n];
                            break;
                        case "NNNNN":
                            if (s === e)
                                return c[n]
                        }
                    else if ([i, r, s].indexOf(e) >= 0)
                        return c[n]
            }
            ,
            bt.erasConvertYear = function(e, a) {
                var t = e.since <= e.until ? 1 : -1;
                return void 0 === a ? o(e.since).year() : o(e.since).year() + (a - e.offset) * t
            }
            ,
            bt.erasAbbrRegex = function(e) {
                return s(this, "_erasAbbrRegex") || rt.call(this),
                e ? this._erasAbbrRegex : this._erasRegex
            }
            ,
            bt.erasNameRegex = function(e) {
                return s(this, "_erasNameRegex") || rt.call(this),
                e ? this._erasNameRegex : this._erasRegex
            }
            ,
            bt.erasNarrowRegex = function(e) {
                return s(this, "_erasNarrowRegex") || rt.call(this),
                e ? this._erasNarrowRegex : this._erasRegex
            }
            ,
            bt.months = function(e, a) {
                return e ? i(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Ye).test(a) ? "format" : "standalone"][e.month()] : i(this._months) ? this._months : this._months.standalone
            }
            ,
            bt.monthsShort = function(e, a) {
                return e ? i(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Ye.test(a) ? "format" : "standalone"][e.month()] : i(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
            }
            ,
            bt.monthsParse = function(e, a, t) {
                var n, o, i;
                if (this._monthsParseExact)
                    return De.call(this, e, a, t);
                for (this._monthsParse || (this._monthsParse = [],
                this._longMonthsParse = [],
                this._shortMonthsParse = []),
                n = 0; n < 12; n++) {
                    if (o = m([2e3, n]),
                    t && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(o, "").replace(".", "") + "$","i"),
                    this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(o, "").replace(".", "") + "$","i")),
                    t || this._monthsParse[n] || (i = "^" + this.months(o, "") + "|^" + this.monthsShort(o, ""),
                    this._monthsParse[n] = new RegExp(i.replace(".", ""),"i")),
                    t && "MMMM" === a && this._longMonthsParse[n].test(e))
                        return n;
                    if (t && "MMM" === a && this._shortMonthsParse[n].test(e))
                        return n;
                    if (!t && this._monthsParse[n].test(e))
                        return n
                }
            }
            ,
            bt.monthsRegex = function(e) {
                return this._monthsParseExact ? (s(this, "_monthsRegex") || We.call(this),
                e ? this._monthsStrictRegex : this._monthsRegex) : (s(this, "_monthsRegex") || (this._monthsRegex = ke),
                this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
            }
            ,
            bt.monthsShortRegex = function(e) {
                return this._monthsParseExact ? (s(this, "_monthsRegex") || We.call(this),
                e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (s(this, "_monthsShortRegex") || (this._monthsShortRegex = Oe),
                this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
            }
            ,
            bt.week = function(e) {
                return He(e, this._week.dow, this._week.doy).week
            }
            ,
            bt.firstDayOfYear = function() {
                return this._week.doy
            }
            ,
            bt.firstDayOfWeek = function() {
                return this._week.dow
            }
            ,
            bt.weekdays = function(e, a) {
                var t = i(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(a) ? "format" : "standalone"];
                return !0 === e ? Ce(t, this._week.dow) : e ? t[e.day()] : t
            }
            ,
            bt.weekdaysMin = function(e) {
                return !0 === e ? Ce(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
            }
            ,
            bt.weekdaysShort = function(e) {
                return !0 === e ? Ce(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
            }
            ,
            bt.weekdaysParse = function(e, a, t) {
                var n, o, i;
                if (this._weekdaysParseExact)
                    return Ge.call(this, e, a, t);
                for (this._weekdaysParse || (this._weekdaysParse = [],
                this._minWeekdaysParse = [],
                this._shortWeekdaysParse = [],
                this._fullWeekdaysParse = []),
                n = 0; n < 7; n++) {
                    if (o = m([2e3, 1]).day(n),
                    t && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(o, "").replace(".", "\\.?") + "$","i"),
                    this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(o, "").replace(".", "\\.?") + "$","i"),
                    this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(o, "").replace(".", "\\.?") + "$","i")),
                    this._weekdaysParse[n] || (i = "^" + this.weekdays(o, "") + "|^" + this.weekdaysShort(o, "") + "|^" + this.weekdaysMin(o, ""),
                    this._weekdaysParse[n] = new RegExp(i.replace(".", ""),"i")),
                    t && "dddd" === a && this._fullWeekdaysParse[n].test(e))
                        return n;
                    if (t && "ddd" === a && this._shortWeekdaysParse[n].test(e))
                        return n;
                    if (t && "dd" === a && this._minWeekdaysParse[n].test(e))
                        return n;
                    if (!t && this._weekdaysParse[n].test(e))
                        return n
                }
            }
            ,
            bt.weekdaysRegex = function(e) {
                return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || Je.call(this),
                e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (s(this, "_weekdaysRegex") || (this._weekdaysRegex = Ie),
                this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
            }
            ,
            bt.weekdaysShortRegex = function(e) {
                return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || Je.call(this),
                e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (s(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Fe),
                this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            }
            ,
            bt.weekdaysMinRegex = function(e) {
                return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || Je.call(this),
                e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (s(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ue),
                this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            }
            ,
            bt.isPM = function(e) {
                return "p" === (e + "").toLowerCase().charAt(0)
            }
            ,
            bt.meridiem = function(e, a, t) {
                return e > 11 ? t ? "pm" : "PM" : t ? "am" : "AM"
            }
            ,
            ra("en", {
                eras: [{
                    since: "0001-01-01",
                    until: 1 / 0,
                    offset: 1,
                    name: "Anno Domini",
                    narrow: "AD",
                    abbr: "AD"
                }, {
                    since: "0000-12-31",
                    until: -1 / 0,
                    offset: 1,
                    name: "Before Christ",
                    narrow: "BC",
                    abbr: "BC"
                }],
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(e) {
                    var a = e % 10;
                    return e + (1 === G(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
                }
            }),
            o.lang = T("moment.lang is deprecated. Use moment.locale instead.", ra),
            o.langData = T("moment.langData is deprecated. Use moment.localeData instead.", ca);
            var yt = Math.abs;
            function gt(e, a, t, n) {
                var o = Pa(a, t);
                return e._milliseconds += n * o._milliseconds,
                e._days += n * o._days,
                e._months += n * o._months,
                e._bubble()
            }
            function Tt(e) {
                return e < 0 ? Math.floor(e) : Math.ceil(e)
            }
            function Yt(e) {
                return 4800 * e / 146097
            }
            function Ot(e) {
                return 146097 * e / 4800
            }
            function kt(e) {
                return function() {
                    return this.as(e)
                }
            }
            var Dt = kt("ms")
              , Nt = kt("s")
              , wt = kt("m")
              , Wt = kt("h")
              , qt = kt("d")
              , vt = kt("w")
              , St = kt("M")
              , Bt = kt("Q")
              , Xt = kt("y");
            function Et(e) {
                return function() {
                    return this.isValid() ? this._data[e] : NaN
                }
            }
            var Ht = Et("milliseconds")
              , xt = Et("seconds")
              , Ct = Et("minutes")
              , jt = Et("hours")
              , Pt = Et("days")
              , Rt = Et("months")
              , It = Et("years")
              , Ft = Math.round
              , Ut = {
                ss: 44,
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                w: null,
                M: 11
            };
            function Gt(e, a, t, n, o) {
                return o.relativeTime(a || 1, !!t, e, n)
            }
            var Jt = Math.abs;
            function Kt(e) {
                return (e > 0) - (e < 0) || +e
            }
            function Vt() {
                if (!this.isValid())
                    return this.localeData().invalidDate();
                var e, a, t, n, o, i, r, s, c = Jt(this._milliseconds) / 1e3, d = Jt(this._days), M = Jt(this._months), u = this.asSeconds();
                return u ? (e = U(c / 60),
                a = U(e / 60),
                c %= 60,
                e %= 60,
                t = U(M / 12),
                M %= 12,
                n = c ? c.toFixed(3).replace(/\.?0+$/, "") : "",
                o = u < 0 ? "-" : "",
                i = Kt(this._months) !== Kt(u) ? "-" : "",
                r = Kt(this._days) !== Kt(u) ? "-" : "",
                s = Kt(this._milliseconds) !== Kt(u) ? "-" : "",
                o + "P" + (t ? i + t + "Y" : "") + (M ? i + M + "M" : "") + (d ? r + d + "D" : "") + (a || e || c ? "T" : "") + (a ? s + a + "H" : "") + (e ? s + e + "M" : "") + (c ? s + n + "S" : "")) : "P0D"
            }
            var Qt = Wa.prototype;
            return Qt.isValid = function() {
                return this._isValid
            }
            ,
            Qt.abs = function() {
                var e = this._data;
                return this._milliseconds = yt(this._milliseconds),
                this._days = yt(this._days),
                this._months = yt(this._months),
                e.milliseconds = yt(e.milliseconds),
                e.seconds = yt(e.seconds),
                e.minutes = yt(e.minutes),
                e.hours = yt(e.hours),
                e.months = yt(e.months),
                e.years = yt(e.years),
                this
            }
            ,
            Qt.add = function(e, a) {
                return gt(this, e, a, 1)
            }
            ,
            Qt.subtract = function(e, a) {
                return gt(this, e, a, -1)
            }
            ,
            Qt.as = function(e) {
                if (!this.isValid())
                    return NaN;
                var a, t, n = this._milliseconds;
                if ("month" === (e = j(e)) || "quarter" === e || "year" === e)
                    switch (a = this._days + n / 864e5,
                    t = this._months + Yt(a),
                    e) {
                    case "month":
                        return t;
                    case "quarter":
                        return t / 3;
                    case "year":
                        return t / 12
                    }
                else
                    switch (a = this._days + Math.round(Ot(this._months)),
                    e) {
                    case "week":
                        return a / 7 + n / 6048e5;
                    case "day":
                        return a + n / 864e5;
                    case "hour":
                        return 24 * a + n / 36e5;
                    case "minute":
                        return 1440 * a + n / 6e4;
                    case "second":
                        return 86400 * a + n / 1e3;
                    case "millisecond":
                        return Math.floor(864e5 * a) + n;
                    default:
                        throw new Error("Unknown unit " + e)
                    }
            }
            ,
            Qt.asMilliseconds = Dt,
            Qt.asSeconds = Nt,
            Qt.asMinutes = wt,
            Qt.asHours = Wt,
            Qt.asDays = qt,
            Qt.asWeeks = vt,
            Qt.asMonths = St,
            Qt.asQuarters = Bt,
            Qt.asYears = Xt,
            Qt.valueOf = function() {
                return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * G(this._months / 12) : NaN
            }
            ,
            Qt._bubble = function() {
                var e, a, t, n, o, i = this._milliseconds, r = this._days, s = this._months, c = this._data;
                return i >= 0 && r >= 0 && s >= 0 || i <= 0 && r <= 0 && s <= 0 || (i += 864e5 * Tt(Ot(s) + r),
                r = 0,
                s = 0),
                c.milliseconds = i % 1e3,
                e = U(i / 1e3),
                c.seconds = e % 60,
                a = U(e / 60),
                c.minutes = a % 60,
                t = U(a / 60),
                c.hours = t % 24,
                r += U(t / 24),
                o = U(Yt(r)),
                s += o,
                r -= Tt(Ot(o)),
                n = U(s / 12),
                s %= 12,
                c.days = r,
                c.months = s,
                c.years = n,
                this
            }
            ,
            Qt.clone = function() {
                return Pa(this)
            }
            ,
            Qt.get = function(e) {
                return e = j(e),
                this.isValid() ? this[e + "s"]() : NaN
            }
            ,
            Qt.milliseconds = Ht,
            Qt.seconds = xt,
            Qt.minutes = Ct,
            Qt.hours = jt,
            Qt.days = Pt,
            Qt.weeks = function() {
                return U(this.days() / 7)
            }
            ,
            Qt.months = Rt,
            Qt.years = It,
            Qt.humanize = function(e, a) {
                if (!this.isValid())
                    return this.localeData().invalidDate();
                var t, n, o = !1, i = Ut;
                return "object" == typeof e && (a = e,
                e = !1),
                "boolean" == typeof e && (o = e),
                "object" == typeof a && (i = Object.assign({}, Ut, a),
                null != a.s && null == a.ss && (i.ss = a.s - 1)),
                t = this.localeData(),
                n = function(e, a, t, n) {
                    var o = Pa(e).abs()
                      , i = Ft(o.as("s"))
                      , r = Ft(o.as("m"))
                      , s = Ft(o.as("h"))
                      , c = Ft(o.as("d"))
                      , d = Ft(o.as("M"))
                      , M = Ft(o.as("w"))
                      , u = Ft(o.as("y"))
                      , l = i <= t.ss && ["s", i] || i < t.s && ["ss", i] || r <= 1 && ["m"] || r < t.m && ["mm", r] || s <= 1 && ["h"] || s < t.h && ["hh", s] || c <= 1 && ["d"] || c < t.d && ["dd", c];
                    return null != t.w && (l = l || M <= 1 && ["w"] || M < t.w && ["ww", M]),
                    (l = l || d <= 1 && ["M"] || d < t.M && ["MM", d] || u <= 1 && ["y"] || ["yy", u])[2] = a,
                    l[3] = +e > 0,
                    l[4] = n,
                    Gt.apply(null, l)
                }(this, !o, i, t),
                o && (n = t.pastFuture(+this, n)),
                t.postformat(n)
            }
            ,
            Qt.toISOString = Vt,
            Qt.toString = Vt,
            Qt.toJSON = Vt,
            Qt.locale = $a,
            Qt.localeData = at,
            Qt.toIsoString = T("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Vt),
            Qt.lang = et,
            X("X", 0, 0, "unix"),
            X("x", 0, 0, "valueOf"),
            me("x", Me),
            me("X", /[+-]?\d+(\.\d{1,3})?/),
            he("X", (function(e, a, t) {
                t._d = new Date(1e3 * parseFloat(e))
            }
            )),
            he("x", (function(e, a, t) {
                t._d = new Date(G(e))
            }
            )),
            //! moment.js
            o.version = "2.29.1",
            a = Oa,
            o.fn = ft,
            o.min = function() {
                var e = [].slice.call(arguments, 0);
                return Na("isBefore", e)
            }
            ,
            o.max = function() {
                var e = [].slice.call(arguments, 0);
                return Na("isAfter", e)
            }
            ,
            o.now = function() {
                return Date.now ? Date.now() : +new Date
            }
            ,
            o.utc = m,
            o.unix = function(e) {
                return Oa(1e3 * e)
            }
            ,
            o.months = function(e, a) {
                return At(e, a, "months")
            }
            ,
            o.isDate = u,
            o.locale = ra,
            o.invalid = L,
            o.duration = Pa,
            o.isMoment = y,
            o.weekdays = function(e, a, t) {
                return zt(e, a, t, "weekdays")
            }
            ,
            o.parseZone = function() {
                return Oa.apply(null, arguments).parseZone()
            }
            ,
            o.localeData = ca,
            o.isDuration = qa,
            o.monthsShort = function(e, a) {
                return At(e, a, "monthsShort")
            }
            ,
            o.weekdaysMin = function(e, a, t) {
                return zt(e, a, t, "weekdaysMin")
            }
            ,
            o.defineLocale = sa,
            o.updateLocale = function(e, a) {
                if (null != a) {
                    var t, n, o = ea;
                    null != aa[e] && null != aa[e].parentLocale ? aa[e].set(N(aa[e]._config, a)) : (null != (n = ia(e)) && (o = n._config),
                    a = N(o, a),
                    null == n && (a.abbr = e),
                    (t = new w(a)).parentLocale = aa[e],
                    aa[e] = t),
                    ra(e)
                } else
                    null != aa[e] && (null != aa[e].parentLocale ? (aa[e] = aa[e].parentLocale,
                    e === ra() && ra(e)) : null != aa[e] && delete aa[e]);
                return aa[e]
            }
            ,
            o.locales = function() {
                return Y(aa)
            }
            ,
            o.weekdaysShort = function(e, a, t) {
                return zt(e, a, t, "weekdaysShort")
            }
            ,
            o.normalizeUnits = j,
            o.relativeTimeRounding = function(e) {
                return void 0 === e ? Ft : "function" == typeof e && (Ft = e,
                !0)
            }
            ,
            o.relativeTimeThreshold = function(e, a) {
                return void 0 !== Ut[e] && (void 0 === a ? Ut[e] : (Ut[e] = a,
                "s" === e && (Ut.ss = a - 1),
                !0))
            }
            ,
            o.calendarFormat = function(e, a) {
                var t = e.diff(a, "days", !0);
                return t < -6 ? "sameElse" : t < -1 ? "lastWeek" : t < 0 ? "lastDay" : t < 1 ? "sameDay" : t < 2 ? "nextDay" : t < 7 ? "nextWeek" : "sameElse"
            }
            ,
            o.prototype = ft,
            o.HTML5_FMT = {
                DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                DATE: "YYYY-MM-DD",
                TIME: "HH:mm",
                TIME_SECONDS: "HH:mm:ss",
                TIME_MS: "HH:mm:ss.SSS",
                WEEK: "GGGG-[W]WW",
                MONTH: "YYYY-MM"
            },
            o
        }()
    }
    ).call(this, t(146)(e))
}
, function(e, a, t) {
    (e.exports = t(145)).tz.load(t(148))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("af", {
            months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
            weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
            weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
            meridiemParse: /vm|nm/i,
            isPM: function(e) {
                return /^nm$/i.test(e)
            },
            meridiem: function(e, a, t) {
                return e < 12 ? t ? "vm" : "VM" : t ? "nm" : "NM"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Vandag om] LT",
                nextDay: "[M??re om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[Gister om] LT",
                lastWeek: "[Laas] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oor %s",
                past: "%s gelede",
                s: "'n paar sekondes",
                ss: "%d sekondes",
                m: "'n minuut",
                mm: "%d minute",
                h: "'n uur",
                hh: "%d ure",
                d: "'n dag",
                dd: "%d dae",
                M: "'n maand",
                MM: "%d maande",
                y: "'n jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "??",
            2: "??",
            3: "??",
            4: "??",
            5: "??",
            6: "??",
            7: "??",
            8: "??",
            9: "??",
            0: "??"
        }
          , t = {
            "??": "1",
            "??": "2",
            "??": "3",
            "??": "4",
            "??": "5",
            "??": "6",
            "??": "7",
            "??": "8",
            "??": "9",
            "??": "0"
        }
          , n = function(e) {
            return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
        }
          , o = {
            s: ["?????? ???? ??????????", "?????????? ??????????", ["??????????????", "??????????????"], "%d ????????", "%d ??????????", "%d ??????????"],
            m: ["?????? ???? ??????????", "?????????? ??????????", ["??????????????", "??????????????"], "%d ??????????", "%d ??????????", "%d ??????????"],
            h: ["?????? ???? ????????", "???????? ??????????", ["????????????", "????????????"], "%d ??????????", "%d ????????", "%d ????????"],
            d: ["?????? ???? ??????", "?????? ????????", ["??????????", "??????????"], "%d ????????", "%d ??????????", "%d ??????"],
            M: ["?????? ???? ??????", "?????? ????????", ["??????????", "??????????"], "%d ????????", "%d ????????", "%d ??????"],
            y: ["?????? ???? ??????", "?????? ????????", ["??????????", "??????????"], "%d ??????????", "%d ??????????", "%d ??????"]
        }
          , i = function(e) {
            return function(a, t, i, r) {
                var s = n(a)
                  , c = o[e][n(a)];
                return 2 === s && (c = c[t ? 0 : 1]),
                c.replace(/%d/i, a)
            }
        }
          , r = ["??????????", "????????????", "????????", "??????????", "????????", "??????????", "??????????", "??????????", "????????????", "????????????", "????????????", "????????????"];
        e.defineLocale("ar", {
            months: r,
            monthsShort: r,
            weekdays: "??????????_??????????????_????????????????_????????????????_????????????_????????????_??????????".split("_"),
            weekdaysShort: "??????_??????????_????????????_????????????_????????_????????_??????".split("_"),
            weekdaysMin: "??_??_??_??_??_??_??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/???M/???YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /??|??/,
            isPM: function(e) {
                return "??" === e
            },
            meridiem: function(e, a, t) {
                return e < 12 ? "??" : "??"
            },
            calendar: {
                sameDay: "[?????????? ?????? ????????????] LT",
                nextDay: "[???????? ?????? ????????????] LT",
                nextWeek: "dddd [?????? ????????????] LT",
                lastDay: "[?????? ?????? ????????????] LT",
                lastWeek: "dddd [?????? ????????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "?????? %s",
                past: "?????? %s",
                s: i("s"),
                ss: i("s"),
                m: i("m"),
                mm: i("m"),
                h: i("h"),
                hh: i("h"),
                d: i("d"),
                dd: i("d"),
                M: i("M"),
                MM: i("M"),
                y: i("y"),
                yy: i("y")
            },
            preparse: function(e) {
                return e.replace(/[????????????????????]/g, (function(e) {
                    return t[e]
                }
                )).replace(/??/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return a[e]
                }
                )).replace(/,/g, "??")
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = function(e) {
            return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
        }
          , t = {
            s: ["?????? ???? ??????????", "?????????? ??????????", ["??????????????", "??????????????"], "%d ????????", "%d ??????????", "%d ??????????"],
            m: ["?????? ???? ??????????", "?????????? ??????????", ["??????????????", "??????????????"], "%d ??????????", "%d ??????????", "%d ??????????"],
            h: ["?????? ???? ????????", "???????? ??????????", ["????????????", "????????????"], "%d ??????????", "%d ????????", "%d ????????"],
            d: ["?????? ???? ??????", "?????? ????????", ["??????????", "??????????"], "%d ????????", "%d ??????????", "%d ??????"],
            M: ["?????? ???? ??????", "?????? ????????", ["??????????", "??????????"], "%d ????????", "%d ????????", "%d ??????"],
            y: ["?????? ???? ??????", "?????? ????????", ["??????????", "??????????"], "%d ??????????", "%d ??????????", "%d ??????"]
        }
          , n = function(e) {
            return function(n, o, i, r) {
                var s = a(n)
                  , c = t[e][a(n)];
                return 2 === s && (c = c[o ? 0 : 1]),
                c.replace(/%d/i, n)
            }
        }
          , o = ["??????????", "??????????", "????????", "??????????", "??????", "????????", "????????????", "??????", "????????????", "????????????", "????????????", "????????????"];
        e.defineLocale("ar-dz", {
            months: o,
            monthsShort: o,
            weekdays: "??????????_??????????????_????????????????_????????????????_????????????_????????????_??????????".split("_"),
            weekdaysShort: "??????_??????????_????????????_????????????_????????_????????_??????".split("_"),
            weekdaysMin: "??_??_??_??_??_??_??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/???M/???YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /??|??/,
            isPM: function(e) {
                return "??" === e
            },
            meridiem: function(e, a, t) {
                return e < 12 ? "??" : "??"
            },
            calendar: {
                sameDay: "[?????????? ?????? ????????????] LT",
                nextDay: "[???????? ?????? ????????????] LT",
                nextWeek: "dddd [?????? ????????????] LT",
                lastDay: "[?????? ?????? ????????????] LT",
                lastWeek: "dddd [?????? ????????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "?????? %s",
                past: "?????? %s",
                s: n("s"),
                ss: n("s"),
                m: n("m"),
                mm: n("m"),
                h: n("h"),
                hh: n("h"),
                d: n("d"),
                dd: n("d"),
                M: n("M"),
                MM: n("M"),
                y: n("y"),
                yy: n("y")
            },
            postformat: function(e) {
                return e.replace(/,/g, "??")
            },
            week: {
                dow: 0,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ar-kw", {
            months: "??????????_????????????_????????_??????????_??????_??????????_????????????_??????_??????????_????????????_??????????_??????????".split("_"),
            monthsShort: "??????????_????????????_????????_??????????_??????_??????????_????????????_??????_??????????_????????????_??????????_??????????".split("_"),
            weekdays: "??????????_??????????????_????????????????_????????????????_????????????_????????????_??????????".split("_"),
            weekdaysShort: "??????_??????????_????????????_????????????_????????_????????_??????".split("_"),
            weekdaysMin: "??_??_??_??_??_??_??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[?????????? ?????? ????????????] LT",
                nextDay: "[?????? ?????? ????????????] LT",
                nextWeek: "dddd [?????? ????????????] LT",
                lastDay: "[?????? ?????? ????????????] LT",
                lastWeek: "dddd [?????? ????????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "???? %s",
                past: "?????? %s",
                s: "????????",
                ss: "%d ??????????",
                m: "??????????",
                mm: "%d ??????????",
                h: "????????",
                hh: "%d ??????????",
                d: "??????",
                dd: "%d ????????",
                M: "??????",
                MM: "%d ????????",
                y: "??????",
                yy: "%d ??????????"
            },
            week: {
                dow: 0,
                doy: 12
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            0: "0"
        }
          , t = function(e) {
            return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
        }
          , n = {
            s: ["?????? ???? ??????????", "?????????? ??????????", ["??????????????", "??????????????"], "%d ????????", "%d ??????????", "%d ??????????"],
            m: ["?????? ???? ??????????", "?????????? ??????????", ["??????????????", "??????????????"], "%d ??????????", "%d ??????????", "%d ??????????"],
            h: ["?????? ???? ????????", "???????? ??????????", ["????????????", "????????????"], "%d ??????????", "%d ????????", "%d ????????"],
            d: ["?????? ???? ??????", "?????? ????????", ["??????????", "??????????"], "%d ????????", "%d ??????????", "%d ??????"],
            M: ["?????? ???? ??????", "?????? ????????", ["??????????", "??????????"], "%d ????????", "%d ????????", "%d ??????"],
            y: ["?????? ???? ??????", "?????? ????????", ["??????????", "??????????"], "%d ??????????", "%d ??????????", "%d ??????"]
        }
          , o = function(e) {
            return function(a, o, i, r) {
                var s = t(a)
                  , c = n[e][t(a)];
                return 2 === s && (c = c[o ? 0 : 1]),
                c.replace(/%d/i, a)
            }
        }
          , i = ["??????????", "????????????", "????????", "??????????", "????????", "??????????", "??????????", "??????????", "????????????", "????????????", "????????????", "????????????"];
        e.defineLocale("ar-ly", {
            months: i,
            monthsShort: i,
            weekdays: "??????????_??????????????_????????????????_????????????????_????????????_????????????_??????????".split("_"),
            weekdaysShort: "??????_??????????_????????????_????????????_????????_????????_??????".split("_"),
            weekdaysMin: "??_??_??_??_??_??_??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/???M/???YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /??|??/,
            isPM: function(e) {
                return "??" === e
            },
            meridiem: function(e, a, t) {
                return e < 12 ? "??" : "??"
            },
            calendar: {
                sameDay: "[?????????? ?????? ????????????] LT",
                nextDay: "[???????? ?????? ????????????] LT",
                nextWeek: "dddd [?????? ????????????] LT",
                lastDay: "[?????? ?????? ????????????] LT",
                lastWeek: "dddd [?????? ????????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "?????? %s",
                past: "?????? %s",
                s: o("s"),
                ss: o("s"),
                m: o("m"),
                mm: o("m"),
                h: o("h"),
                hh: o("h"),
                d: o("d"),
                dd: o("d"),
                M: o("M"),
                MM: o("M"),
                y: o("y"),
                yy: o("y")
            },
            preparse: function(e) {
                return e.replace(/??/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return a[e]
                }
                )).replace(/,/g, "??")
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ar-ma", {
            months: "??????????_????????????_????????_??????????_??????_??????????_????????????_??????_??????????_????????????_??????????_??????????".split("_"),
            monthsShort: "??????????_????????????_????????_??????????_??????_??????????_????????????_??????_??????????_????????????_??????????_??????????".split("_"),
            weekdays: "??????????_??????????????_????????????????_????????????????_????????????_????????????_??????????".split("_"),
            weekdaysShort: "??????_??????????_????????????_????????????_????????_????????_??????".split("_"),
            weekdaysMin: "??_??_??_??_??_??_??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[?????????? ?????? ????????????] LT",
                nextDay: "[?????? ?????? ????????????] LT",
                nextWeek: "dddd [?????? ????????????] LT",
                lastDay: "[?????? ?????? ????????????] LT",
                lastWeek: "dddd [?????? ????????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "???? %s",
                past: "?????? %s",
                s: "????????",
                ss: "%d ??????????",
                m: "??????????",
                mm: "%d ??????????",
                h: "????????",
                hh: "%d ??????????",
                d: "??????",
                dd: "%d ????????",
                M: "??????",
                MM: "%d ????????",
                y: "??????",
                yy: "%d ??????????"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "??",
            2: "??",
            3: "??",
            4: "??",
            5: "??",
            6: "??",
            7: "??",
            8: "??",
            9: "??",
            0: "??"
        }
          , t = {
            "??": "1",
            "??": "2",
            "??": "3",
            "??": "4",
            "??": "5",
            "??": "6",
            "??": "7",
            "??": "8",
            "??": "9",
            "??": "0"
        };
        e.defineLocale("ar-sa", {
            months: "??????????_????????????_????????_??????????_????????_??????????_??????????_??????????_????????????_????????????_????????????_????????????".split("_"),
            monthsShort: "??????????_????????????_????????_??????????_????????_??????????_??????????_??????????_????????????_????????????_????????????_????????????".split("_"),
            weekdays: "??????????_??????????????_????????????????_????????????????_????????????_????????????_??????????".split("_"),
            weekdaysShort: "??????_??????????_????????????_????????????_????????_????????_??????".split("_"),
            weekdaysMin: "??_??_??_??_??_??_??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /??|??/,
            isPM: function(e) {
                return "??" === e
            },
            meridiem: function(e, a, t) {
                return e < 12 ? "??" : "??"
            },
            calendar: {
                sameDay: "[?????????? ?????? ????????????] LT",
                nextDay: "[?????? ?????? ????????????] LT",
                nextWeek: "dddd [?????? ????????????] LT",
                lastDay: "[?????? ?????? ????????????] LT",
                lastWeek: "dddd [?????? ????????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "???? %s",
                past: "?????? %s",
                s: "????????",
                ss: "%d ??????????",
                m: "??????????",
                mm: "%d ??????????",
                h: "????????",
                hh: "%d ??????????",
                d: "??????",
                dd: "%d ????????",
                M: "??????",
                MM: "%d ????????",
                y: "??????",
                yy: "%d ??????????"
            },
            preparse: function(e) {
                return e.replace(/[????????????????????]/g, (function(e) {
                    return t[e]
                }
                )).replace(/??/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return a[e]
                }
                )).replace(/,/g, "??")
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ar-tn", {
            months: "??????????_??????????_????????_??????????_??????_????????_????????????_??????_????????????_????????????_????????????_????????????".split("_"),
            monthsShort: "??????????_??????????_????????_??????????_??????_????????_????????????_??????_????????????_????????????_????????????_????????????".split("_"),
            weekdays: "??????????_??????????????_????????????????_????????????????_????????????_????????????_??????????".split("_"),
            weekdaysShort: "??????_??????????_????????????_????????????_????????_????????_??????".split("_"),
            weekdaysMin: "??_??_??_??_??_??_??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[?????????? ?????? ????????????] LT",
                nextDay: "[?????? ?????? ????????????] LT",
                nextWeek: "dddd [?????? ????????????] LT",
                lastDay: "[?????? ?????? ????????????] LT",
                lastWeek: "dddd [?????? ????????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "???? %s",
                past: "?????? %s",
                s: "????????",
                ss: "%d ??????????",
                m: "??????????",
                mm: "%d ??????????",
                h: "????????",
                hh: "%d ??????????",
                d: "??????",
                dd: "%d ????????",
                M: "??????",
                MM: "%d ????????",
                y: "??????",
                yy: "%d ??????????"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "-inci",
            5: "-inci",
            8: "-inci",
            70: "-inci",
            80: "-inci",
            2: "-nci",
            7: "-nci",
            20: "-nci",
            50: "-nci",
            3: "-??nc??",
            4: "-??nc??",
            100: "-??nc??",
            6: "-nc??",
            9: "-uncu",
            10: "-uncu",
            30: "-uncu",
            60: "-??nc??",
            90: "-??nc??"
        };
        e.defineLocale("az", {
            months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
            monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
            weekdays: "Bazar_Bazar ert??si_????r????nb?? ax??am??_????r????nb??_C??m?? ax??am??_C??m??_????nb??".split("_"),
            weekdaysShort: "Baz_BzE_??Ax_????r_CAx_C??m_????n".split("_"),
            weekdaysMin: "Bz_BE_??A_????_CA_C??_????".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bug??n saat] LT",
                nextDay: "[sabah saat] LT",
                nextWeek: "[g??l??n h??ft??] dddd [saat] LT",
                lastDay: "[d??n??n] LT",
                lastWeek: "[ke????n h??ft??] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s ??vv??l",
                s: "bir ne???? saniy??",
                ss: "%d saniy??",
                m: "bir d??qiq??",
                mm: "%d d??qiq??",
                h: "bir saat",
                hh: "%d saat",
                d: "bir g??n",
                dd: "%d g??n",
                M: "bir ay",
                MM: "%d ay",
                y: "bir il",
                yy: "%d il"
            },
            meridiemParse: /gec??|s??h??r|g??nd??z|ax??am/,
            isPM: function(e) {
                return /^(g??nd??z|ax??am)$/.test(e)
            },
            meridiem: function(e, a, t) {
                return e < 4 ? "gec??" : e < 12 ? "s??h??r" : e < 17 ? "g??nd??z" : "ax??am"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(??nc??|inci|nci|??nc??|nc??|uncu)/,
            ordinal: function(e) {
                if (0 === e)
                    return e + "-??nc??";
                var t = e % 10;
                return e + (a[t] || a[e % 100 - t] || a[e >= 100 ? 100 : null])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        function a(e, a, t) {
            var n, o;
            return "m" === t ? a ? "??????????????" : "??????????????" : "h" === t ? a ? "??????????????" : "??????????????" : e + " " + (n = +e,
            o = {
                ss: a ? "??????????????_??????????????_????????????" : "??????????????_??????????????_????????????",
                mm: a ? "??????????????_??????????????_????????????" : "??????????????_??????????????_????????????",
                hh: a ? "??????????????_??????????????_????????????" : "??????????????_??????????????_????????????",
                dd: "??????????_??????_????????",
                MM: "??????????_????????????_??????????????",
                yy: "??????_????????_??????????"
            }[t].split("_"),
            n % 10 == 1 && n % 100 != 11 ? o[0] : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? o[1] : o[2])
        }
        e.defineLocale("be", {
            months: {
                format: "????????????????_????????????_????????????????_??????????????????_????????????_??????????????_????????????_????????????_??????????????_??????????????????????_??????????????????_????????????".split("_"),
                standalone: "????????????????_????????_??????????????_????????????????_??????????????_??????????????_????????????_??????????????_????????????????_????????????????????_????????????????_??????????????".split("_")
            },
            monthsShort: "????????_??????_??????_????????_????????_????????_??????_????????_??????_????????_????????_????????".split("_"),
            weekdays: {
                format: "??????????????_????????????????????_??????????????_????????????_????????????_??????????????_????????????".split("_"),
                standalone: "??????????????_????????????????????_??????????????_????????????_????????????_??????????????_????????????".split("_"),
                isFormat: /\[ ?[??????] ?(?:??????????????|??????????????????)? ?\] ?dddd/
            },
            weekdaysShort: "????_????_????_????_????_????_????".split("_"),
            weekdaysMin: "????_????_????_????_????_????_????".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY ??.",
                LLL: "D MMMM YYYY ??., HH:mm",
                LLLL: "dddd, D MMMM YYYY ??., HH:mm"
            },
            calendar: {
                sameDay: "[?????????? ??] LT",
                nextDay: "[???????????? ??] LT",
                lastDay: "[?????????? ??] LT",
                nextWeek: function() {
                    return "[??] dddd [??] LT"
                },
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return "[?? ??????????????] dddd [??] LT";
                    case 1:
                    case 2:
                    case 4:
                        return "[?? ????????????] dddd [??] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "???????? %s",
                past: "%s ????????",
                s: "???????????????? ????????????",
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: "??????????",
                dd: a,
                M: "??????????",
                MM: a,
                y: "??????",
                yy: a
            },
            meridiemParse: /????????|????????????|??????|????????????/,
            isPM: function(e) {
                return /^(??????|????????????)$/.test(e)
            },
            meridiem: function(e, a, t) {
                return e < 4 ? "????????" : e < 12 ? "????????????" : e < 17 ? "??????" : "????????????"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(??|??|????)/,
            ordinal: function(e, a) {
                switch (a) {
                case "M":
                case "d":
                case "DDD":
                case "w":
                case "W":
                    return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-??" : e + "-??";
                case "D":
                    return e + "-????";
                default:
                    return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("bg", {
            months: "????????????_????????????????_????????_??????????_??????_??????_??????_????????????_??????????????????_????????????????_??????????????_????????????????".split("_"),
            monthsShort: "??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdays: "????????????_????????????????????_??????????????_??????????_??????????????????_??????????_????????????".split("_"),
            weekdaysShort: "??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdaysMin: "????_????_????_????_????_????_????".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[???????? ??] LT",
                nextDay: "[???????? ??] LT",
                nextWeek: "dddd [??] LT",
                lastDay: "[?????????? ??] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                    case 3:
                    case 6:
                        return "[????????????????] dddd [??] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[??????????????] dddd [??] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "???????? %s",
                past: "?????????? %s",
                s: "?????????????? ??????????????",
                ss: "%d ??????????????",
                m: "????????????",
                mm: "%d ????????????",
                h: "??????",
                hh: "%d ????????",
                d: "??????",
                dd: "%d ????????",
                w: "??????????????",
                ww: "%d ??????????????",
                M: "??????????",
                MM: "%d ????????????",
                y: "????????????",
                yy: "%d ????????????"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(????|????|????|????|????|????)/,
            ordinal: function(e) {
                var a = e % 10
                  , t = e % 100;
                return 0 === e ? e + "-????" : 0 === t ? e + "-????" : t > 10 && t < 20 ? e + "-????" : 1 === a ? e + "-????" : 2 === a ? e + "-????" : 7 === a || 8 === a ? e + "-????" : e + "-????"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("bm", {
            months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_M??kalo_Zuw??nkalo_Zuluyekalo_Utikalo_S??tanburukalo_??kut??burukalo_Nowanburukalo_Desanburukalo".split("_"),
            monthsShort: "Zan_Few_Mar_Awi_M??_Zuw_Zul_Uti_S??t_??ku_Now_Des".split("_"),
            weekdays: "Kari_Nt??n??n_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
            weekdaysShort: "Kar_Nt??_Tar_Ara_Ala_Jum_Sib".split("_"),
            weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "MMMM [tile] D [san] YYYY",
                LLL: "MMMM [tile] D [san] YYYY [l??r??] HH:mm",
                LLLL: "dddd MMMM [tile] D [san] YYYY [l??r??] HH:mm"
            },
            calendar: {
                sameDay: "[Bi l??r??] LT",
                nextDay: "[Sini l??r??] LT",
                nextWeek: "dddd [don l??r??] LT",
                lastDay: "[Kunu l??r??] LT",
                lastWeek: "dddd [t??m??nen l??r??] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s k??n??",
                past: "a b?? %s b??",
                s: "sanga dama dama",
                ss: "sekondi %d",
                m: "miniti kelen",
                mm: "miniti %d",
                h: "l??r?? kelen",
                hh: "l??r?? %d",
                d: "tile kelen",
                dd: "tile %d",
                M: "kalo kelen",
                MM: "kalo %d",
                y: "san kelen",
                yy: "san %d"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "???",
            2: "???",
            3: "???",
            4: "???",
            5: "???",
            6: "???",
            7: "???",
            8: "???",
            9: "???",
            0: "???"
        }
          , t = {
            "???": "1",
            "???": "2",
            "???": "3",
            "???": "4",
            "???": "5",
            "???": "6",
            "???": "7",
            "???": "8",
            "???": "9",
            "???": "0"
        };
        e.defineLocale("bn", {
            months: "????????????????????????_??????????????????????????????_???????????????_??????????????????_??????_?????????_???????????????_???????????????_??????????????????????????????_?????????????????????_?????????????????????_????????????????????????".split("_"),
            monthsShort: "????????????_??????????????????_???????????????_??????????????????_??????_?????????_???????????????_???????????????_???????????????_???????????????_?????????_????????????".split("_"),
            weekdays: "??????????????????_??????????????????_????????????????????????_??????????????????_?????????????????????????????????_????????????????????????_??????????????????".split("_"),
            weekdaysShort: "?????????_?????????_???????????????_?????????_????????????????????????_???????????????_?????????".split("_"),
            weekdaysMin: "?????????_?????????_???????????????_?????????_?????????_???????????????_?????????".split("_"),
            longDateFormat: {
                LT: "A h:mm ?????????",
                LTS: "A h:mm:ss ?????????",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm ?????????",
                LLLL: "dddd, D MMMM YYYY, A h:mm ?????????"
            },
            calendar: {
                sameDay: "[??????] LT",
                nextDay: "[????????????????????????] LT",
                nextWeek: "dddd, LT",
                lastDay: "[???????????????] LT",
                lastWeek: "[??????] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ?????????",
                past: "%s ?????????",
                s: "???????????? ?????????????????????",
                ss: "%d ?????????????????????",
                m: "?????? ???????????????",
                mm: "%d ???????????????",
                h: "?????? ???????????????",
                hh: "%d ???????????????",
                d: "?????? ?????????",
                dd: "%d ?????????",
                M: "?????? ?????????",
                MM: "%d ?????????",
                y: "?????? ?????????",
                yy: "%d ?????????"
            },
            preparse: function(e) {
                return e.replace(/[??????????????????????????????]/g, (function(e) {
                    return t[e]
                }
                ))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return a[e]
                }
                ))
            },
            meridiemParse: /?????????|????????????|???????????????|???????????????|?????????/,
            meridiemHour: function(e, a) {
                return 12 === e && (e = 0),
                "?????????" === a && e >= 4 || "???????????????" === a && e < 5 || "???????????????" === a ? e + 12 : e
            },
            meridiem: function(e, a, t) {
                return e < 4 ? "?????????" : e < 10 ? "????????????" : e < 17 ? "???????????????" : e < 20 ? "???????????????" : "?????????"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "???",
            2: "???",
            3: "???",
            4: "???",
            5: "???",
            6: "???",
            7: "???",
            8: "???",
            9: "???",
            0: "???"
        }
          , t = {
            "???": "1",
            "???": "2",
            "???": "3",
            "???": "4",
            "???": "5",
            "???": "6",
            "???": "7",
            "???": "8",
            "???": "9",
            "???": "0"
        };
        e.defineLocale("bn-bd", {
            months: "????????????????????????_??????????????????????????????_???????????????_??????????????????_??????_?????????_???????????????_???????????????_??????????????????????????????_?????????????????????_?????????????????????_????????????????????????".split("_"),
            monthsShort: "????????????_??????????????????_???????????????_??????????????????_??????_?????????_???????????????_???????????????_???????????????_???????????????_?????????_????????????".split("_"),
            weekdays: "??????????????????_??????????????????_????????????????????????_??????????????????_?????????????????????????????????_????????????????????????_??????????????????".split("_"),
            weekdaysShort: "?????????_?????????_???????????????_?????????_????????????????????????_???????????????_?????????".split("_"),
            weekdaysMin: "?????????_?????????_???????????????_?????????_?????????_???????????????_?????????".split("_"),
            longDateFormat: {
                LT: "A h:mm ?????????",
                LTS: "A h:mm:ss ?????????",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm ?????????",
                LLLL: "dddd, D MMMM YYYY, A h:mm ?????????"
            },
            calendar: {
                sameDay: "[??????] LT",
                nextDay: "[????????????????????????] LT",
                nextWeek: "dddd, LT",
                lastDay: "[???????????????] LT",
                lastWeek: "[??????] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ?????????",
                past: "%s ?????????",
                s: "???????????? ?????????????????????",
                ss: "%d ?????????????????????",
                m: "?????? ???????????????",
                mm: "%d ???????????????",
                h: "?????? ???????????????",
                hh: "%d ???????????????",
                d: "?????? ?????????",
                dd: "%d ?????????",
                M: "?????? ?????????",
                MM: "%d ?????????",
                y: "?????? ?????????",
                yy: "%d ?????????"
            },
            preparse: function(e) {
                return e.replace(/[??????????????????????????????]/g, (function(e) {
                    return t[e]
                }
                ))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return a[e]
                }
                ))
            },
            meridiemParse: /?????????|?????????|????????????|???????????????|???????????????|?????????????????????|?????????/,
            meridiemHour: function(e, a) {
                return 12 === e && (e = 0),
                "?????????" === a ? e < 4 ? e : e + 12 : "?????????" === a || "????????????" === a ? e : "???????????????" === a ? e >= 3 ? e : e + 12 : "???????????????" === a || "?????????????????????" === a ? e + 12 : void 0
            },
            meridiem: function(e, a, t) {
                return e < 4 ? "?????????" : e < 6 ? "?????????" : e < 12 ? "????????????" : e < 15 ? "???????????????" : e < 18 ? "???????????????" : e < 20 ? "?????????????????????" : "?????????"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "???",
            2: "???",
            3: "???",
            4: "???",
            5: "???",
            6: "???",
            7: "???",
            8: "???",
            9: "???",
            0: "???"
        }
          , t = {
            "???": "1",
            "???": "2",
            "???": "3",
            "???": "4",
            "???": "5",
            "???": "6",
            "???": "7",
            "???": "8",
            "???": "9",
            "???": "0"
        };
        e.defineLocale("bo", {
            months: "??????????????????????????????_?????????????????????????????????_?????????????????????????????????_??????????????????????????????_???????????????????????????_?????????????????????????????????_?????????????????????????????????_????????????????????????????????????_??????????????????????????????_??????????????????????????????_?????????????????????????????????????????????_?????????????????????????????????????????????".split("_"),
            monthsShort: "?????????1_?????????2_?????????3_?????????4_?????????5_?????????6_?????????7_?????????8_?????????9_?????????10_?????????11_?????????12".split("_"),
            monthsShortRegex: /^(?????????\d{1,2})/,
            monthsParseExact: !0,
            weekdays: "???????????????????????????_???????????????????????????_????????????????????????????????????_??????????????????????????????_??????????????????????????????_??????????????????????????????_?????????????????????????????????".split("_"),
            weekdaysShort: "???????????????_???????????????_????????????????????????_??????????????????_??????????????????_??????????????????_?????????????????????".split("_"),
            weekdaysMin: "??????_??????_?????????_?????????_?????????_?????????_????????????".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[??????????????????] LT",
                nextDay: "[??????????????????] LT",
                nextWeek: "[?????????????????????????????????????????????], LT",
                lastDay: "[????????????] LT",
                lastWeek: "[??????????????????????????????????????????] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ??????",
                past: "%s ???????????????",
                s: "???????????????",
                ss: "%d ??????????????????",
                m: "??????????????????????????????",
                mm: "%d ???????????????",
                h: "?????????????????????????????????",
                hh: "%d ??????????????????",
                d: "????????????????????????",
                dd: "%d ????????????",
                M: "???????????????????????????",
                MM: "%d ????????????",
                y: "?????????????????????",
                yy: "%d ??????"
            },
            preparse: function(e) {
                return e.replace(/[??????????????????????????????]/g, (function(e) {
                    return t[e]
                }
                ))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return a[e]
                }
                ))
            },
            meridiemParse: /??????????????????|?????????????????????|?????????????????????|?????????????????????|??????????????????/,
            meridiemHour: function(e, a) {
                return 12 === e && (e = 0),
                "??????????????????" === a && e >= 4 || "?????????????????????" === a && e < 5 || "?????????????????????" === a ? e + 12 : e
            },
            meridiem: function(e, a, t) {
                return e < 4 ? "??????????????????" : e < 10 ? "?????????????????????" : e < 17 ? "?????????????????????" : e < 20 ? "?????????????????????" : "??????????????????"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        function a(e, a, t) {
            return e + " " + function(e, a) {
                return 2 === a ? function(e) {
                    var a = {
                        m: "v",
                        b: "v",
                        d: "z"
                    };
                    return void 0 === a[e.charAt(0)] ? e : a[e.charAt(0)] + e.substring(1)
                }(e) : e
            }({
                mm: "munutenn",
                MM: "miz",
                dd: "devezh"
            }[t], e)
        }
        var t = [/^gen/i, /^c[??\']hwe/i, /^meu/i, /^ebr/i, /^mae/i, /^(mez|eve)/i, /^gou/i, /^eos/i, /^gwe/i, /^her/i, /^du/i, /^ker/i]
          , n = /^(genver|c[??\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[??\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i
          , o = [/^Su/i, /^Lu/i, /^Me([^r]|$)/i, /^Mer/i, /^Ya/i, /^Gw/i, /^Sa/i];
        e.defineLocale("br", {
            months: "Genver_C??hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
            monthsShort: "Gen_C??hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
            weekdays: "Sul_Lun_Meurzh_Merc??her_Yaou_Gwener_Sadorn".split("_"),
            weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
            weekdaysParse: o,
            fullWeekdaysParse: [/^sul/i, /^lun/i, /^meurzh/i, /^merc[??\']her/i, /^yaou/i, /^gwener/i, /^sadorn/i],
            shortWeekdaysParse: [/^Sul/i, /^Lun/i, /^Meu/i, /^Mer/i, /^Yao/i, /^Gwe/i, /^Sad/i],
            minWeekdaysParse: o,
            monthsRegex: n,
            monthsShortRegex: n,
            monthsStrictRegex: /^(genver|c[??\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,
            monthsShortStrictRegex: /^(gen|c[??\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
            monthsParse: t,
            longMonthsParse: t,
            shortMonthsParse: t,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [a viz] MMMM YYYY",
                LLL: "D [a viz] MMMM YYYY HH:mm",
                LLLL: "dddd, D [a viz] MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hiziv da] LT",
                nextDay: "[Warc??hoazh da] LT",
                nextWeek: "dddd [da] LT",
                lastDay: "[Dec??h da] LT",
                lastWeek: "dddd [paset da] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "a-benn %s",
                past: "%s ??zo",
                s: "un nebeud segondenno??",
                ss: "%d eilenn",
                m: "ur vunutenn",
                mm: a,
                h: "un eur",
                hh: "%d eur",
                d: "un devezh",
                dd: a,
                M: "ur miz",
                MM: a,
                y: "ur bloaz",
                yy: function(e) {
                    switch (function e(a) {
                        return a > 9 ? e(a % 10) : a
                    }(e)) {
                    case 1:
                    case 3:
                    case 4:
                    case 5:
                    case 9:
                        return e + " bloaz";
                    default:
                        return e + " vloaz"
                    }
                }
            },
            dayOfMonthOrdinalParse: /\d{1,2}(a??|vet)/,
            ordinal: function(e) {
                return e + (1 === e ? "a??" : "vet")
            },
            week: {
                dow: 1,
                doy: 4
            },
            meridiemParse: /a.m.|g.m./,
            isPM: function(e) {
                return "g.m." === e
            },
            meridiem: function(e, a, t) {
                return e < 12 ? "a.m." : "g.m."
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        function a(e, a, t) {
            var n = e + " ";
            switch (t) {
            case "ss":
                return n += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
            case "m":
                return a ? "jedna minuta" : "jedne minute";
            case "mm":
                return n += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
            case "h":
                return a ? "jedan sat" : "jednog sata";
            case "hh":
                return n += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
            case "dd":
                return n += 1 === e ? "dan" : "dana";
            case "MM":
                return n += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
            case "yy":
                return n += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
            }
        }
        e.defineLocale("bs", {
            months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_??etvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._??et._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_??e_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[u] [nedjelju] [u] LT";
                    case 3:
                        return "[u] [srijedu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[ju??er u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                    case 3:
                        return "[pro??lu] dddd [u] LT";
                    case 6:
                        return "[pro??le] [subote] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[pro??li] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: "dan",
                dd: a,
                M: "mjesec",
                MM: a,
                y: "godinu",
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ca", {
            months: {
                standalone: "gener_febrer_mar??_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                format: "de gener_de febrer_de mar??_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
                isFormat: /D[oD]?(\s)+MMMM/
            },
            monthsShort: "gen._febr._mar??_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
            weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [de] YYYY",
                ll: "D MMM YYYY",
                LLL: "D MMMM [de] YYYY [a les] H:mm",
                lll: "D MMM YYYY, H:mm",
                LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
                llll: "ddd D MMM YYYY, H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextDay: function() {
                    return "[dem?? a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastDay: function() {
                    return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "d'aqu?? %s",
                past: "fa %s",
                s: "uns segons",
                ss: "%d segons",
                m: "un minut",
                mm: "%d minuts",
                h: "una hora",
                hh: "%d hores",
                d: "un dia",
                dd: "%d dies",
                M: "un mes",
                MM: "%d mesos",
                y: "un any",
                yy: "%d anys"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|??|a)/,
            ordinal: function(e, a) {
                var t = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "??";
                return "w" !== a && "W" !== a || (t = "a"),
                e + t
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = "leden_??nor_b??ezen_duben_kv??ten_??erven_??ervenec_srpen_z??????_????jen_listopad_prosinec".split("_")
          , t = "led_??no_b??e_dub_kv??_??vn_??vc_srp_z????_????j_lis_pro".split("_")
          , n = [/^led/i, /^??no/i, /^b??e/i, /^dub/i, /^kv??/i, /^(??vn|??erven$|??ervna)/i, /^(??vc|??ervenec|??ervence)/i, /^srp/i, /^z????/i, /^????j/i, /^lis/i, /^pro/i]
          , o = /^(leden|??nor|b??ezen|duben|kv??ten|??ervenec|??ervence|??erven|??ervna|srpen|z??????|????jen|listopad|prosinec|led|??no|b??e|dub|kv??|??vn|??vc|srp|z????|????j|lis|pro)/i;
        function i(e) {
            return e > 1 && e < 5 && 1 != ~~(e / 10)
        }
        function r(e, a, t, n) {
            var o = e + " ";
            switch (t) {
            case "s":
                return a || n ? "p??r sekund" : "p??r sekundami";
            case "ss":
                return a || n ? o + (i(e) ? "sekundy" : "sekund") : o + "sekundami";
            case "m":
                return a ? "minuta" : n ? "minutu" : "minutou";
            case "mm":
                return a || n ? o + (i(e) ? "minuty" : "minut") : o + "minutami";
            case "h":
                return a ? "hodina" : n ? "hodinu" : "hodinou";
            case "hh":
                return a || n ? o + (i(e) ? "hodiny" : "hodin") : o + "hodinami";
            case "d":
                return a || n ? "den" : "dnem";
            case "dd":
                return a || n ? o + (i(e) ? "dny" : "dn??") : o + "dny";
            case "M":
                return a || n ? "m??s??c" : "m??s??cem";
            case "MM":
                return a || n ? o + (i(e) ? "m??s??ce" : "m??s??c??") : o + "m??s??ci";
            case "y":
                return a || n ? "rok" : "rokem";
            case "yy":
                return a || n ? o + (i(e) ? "roky" : "let") : o + "lety"
            }
        }
        e.defineLocale("cs", {
            months: a,
            monthsShort: t,
            monthsRegex: o,
            monthsShortRegex: o,
            monthsStrictRegex: /^(leden|ledna|??nora|??nor|b??ezen|b??ezna|duben|dubna|kv??ten|kv??tna|??ervenec|??ervence|??erven|??ervna|srpen|srpna|z??????|????jen|????jna|listopadu|listopad|prosinec|prosince)/i,
            monthsShortStrictRegex: /^(led|??no|b??e|dub|kv??|??vn|??vc|srp|z????|????j|lis|pro)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: "ned??le_pond??l??_??ter??_st??eda_??tvrtek_p??tek_sobota".split("_"),
            weekdaysShort: "ne_po_??t_st_??t_p??_so".split("_"),
            weekdaysMin: "ne_po_??t_st_??t_p??_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm",
                l: "D. M. YYYY"
            },
            calendar: {
                sameDay: "[dnes v] LT",
                nextDay: "[z??tra v] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[v ned??li v] LT";
                    case 1:
                    case 2:
                        return "[v] dddd [v] LT";
                    case 3:
                        return "[ve st??edu v] LT";
                    case 4:
                        return "[ve ??tvrtek v] LT";
                    case 5:
                        return "[v p??tek v] LT";
                    case 6:
                        return "[v sobotu v] LT"
                    }
                },
                lastDay: "[v??era v] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[minulou ned??li v] LT";
                    case 1:
                    case 2:
                        return "[minul??] dddd [v] LT";
                    case 3:
                        return "[minulou st??edu v] LT";
                    case 4:
                    case 5:
                        return "[minul??] dddd [v] LT";
                    case 6:
                        return "[minulou sobotu v] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "p??ed %s",
                s: r,
                ss: r,
                m: r,
                mm: r,
                h: r,
                hh: r,
                d: r,
                dd: r,
                M: r,
                MM: r,
                y: r,
                yy: r
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("cv", {
            months: "????????????_??????????_??????_??????_??????_????????????_??????_??????????_????????_??????_??????_????????????".split("_"),
            monthsShort: "??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdays: "??????????????????????_????????????????_??????????????????_??????????_??????????????????????_??????????????_????????????????".split("_"),
            weekdaysShort: "??????_??????_??????_????_??????_??????_??????".split("_"),
            weekdaysMin: "????_????_????_????_????_????_????".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "YYYY [??????????] MMMM [????????????] D[-????????]",
                LLL: "YYYY [??????????] MMMM [????????????] D[-????????], HH:mm",
                LLLL: "dddd, YYYY [??????????] MMMM [????????????] D[-????????], HH:mm"
            },
            calendar: {
                sameDay: "[????????] LT [??????????????]",
                nextDay: "[????????] LT [??????????????]",
                lastDay: "[????????] LT [??????????????]",
                nextWeek: "[??????????] dddd LT [??????????????]",
                lastWeek: "[??????????] dddd LT [??????????????]",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return e + (/??????????$/i.exec(e) ? "??????" : /??????$/i.exec(e) ? "??????" : "??????")
                },
                past: "%s ????????????",
                s: "??????-???? ??????????????",
                ss: "%d ??????????????",
                m: "?????? ??????????",
                mm: "%d ??????????",
                h: "?????? ??????????",
                hh: "%d ??????????",
                d: "?????? ??????",
                dd: "%d ??????",
                M: "?????? ????????",
                MM: "%d ????????",
                y: "?????? ??????",
                yy: "%d ??????"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-??????/,
            ordinal: "%d-??????",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("cy", {
            months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
            monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
            weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
            weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Heddiw am] LT",
                nextDay: "[Yfory am] LT",
                nextWeek: "dddd [am] LT",
                lastDay: "[Ddoe am] LT",
                lastWeek: "dddd [diwethaf am] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "mewn %s",
                past: "%s yn ??l",
                s: "ychydig eiliadau",
                ss: "%d eiliad",
                m: "munud",
                mm: "%d munud",
                h: "awr",
                hh: "%d awr",
                d: "diwrnod",
                dd: "%d diwrnod",
                M: "mis",
                MM: "%d mis",
                y: "blwyddyn",
                yy: "%d flynedd"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
            ordinal: function(e) {
                var a = "";
                return e > 20 ? a = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : e > 0 && (a = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]),
                e + a
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("da", {
            months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "s??ndag_mandag_tirsdag_onsdag_torsdag_fredag_l??rdag".split("_"),
            weekdaysShort: "s??n_man_tir_ons_tor_fre_l??r".split("_"),
            weekdaysMin: "s??_ma_ti_on_to_fr_l??".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "p?? dddd [kl.] LT",
                lastDay: "[i g??r kl.] LT",
                lastWeek: "[i] dddd[s kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "f?? sekunder",
                ss: "%d sekunder",
                m: "et minut",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dage",
                M: "en m??ned",
                MM: "%d m??neder",
                y: "et ??r",
                yy: "%d ??r"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        function a(e, a, t, n) {
            var o = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                w: ["eine Woche", "einer Woche"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return a ? o[t][0] : o[t][1]
        }
        e.defineLocale("de", {
            months: "Januar_Februar_M??rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._M??rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: a,
                mm: "%d Minuten",
                h: a,
                hh: "%d Stunden",
                d: a,
                dd: a,
                w: a,
                ww: "%d Wochen",
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        function a(e, a, t, n) {
            var o = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                w: ["eine Woche", "einer Woche"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return a ? o[t][0] : o[t][1]
        }
        e.defineLocale("de-at", {
            months: "J??nner_Februar_M??rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "J??n._Feb._M??rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: a,
                mm: "%d Minuten",
                h: a,
                hh: "%d Stunden",
                d: a,
                dd: a,
                w: a,
                ww: "%d Wochen",
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        function a(e, a, t, n) {
            var o = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                w: ["eine Woche", "einer Woche"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return a ? o[t][0] : o[t][1]
        }
        e.defineLocale("de-ch", {
            months: "Januar_Februar_M??rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._M??rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: a,
                mm: "%d Minuten",
                h: a,
                hh: "%d Stunden",
                d: a,
                dd: a,
                w: a,
                ww: "%d Wochen",
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = ["????????????????", "????????????????????", "????????????", "????????????????", "????", "????????", "????????????", "????????????????", "????????????????????????", "????????????????????", "????????????????????", "????????????????????"]
          , t = ["????????????????", "????????", "????????????????", "????????", "????????????????????", "????????????", "????????????????"];
        e.defineLocale("dv", {
            months: a,
            monthsShort: a,
            weekdays: t,
            weekdaysShort: t,
            weekdaysMin: "????????_????????_????????_????????_????????_????????_????????".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/M/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /????|????/,
            isPM: function(e) {
                return "????" === e
            },
            meridiem: function(e, a, t) {
                return e < 12 ? "????" : "????"
            },
            calendar: {
                sameDay: "[????????????] LT",
                nextDay: "[????????????] LT",
                nextWeek: "dddd LT",
                lastDay: "[????????????] LT",
                lastWeek: "[????????????????] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "???????????????? %s",
                past: "???????????? %s",
                s: "????????????????????????????",
                ss: "d% ????????????????",
                m: "????????????????",
                mm: "???????????? %d",
                h: "????????????????????",
                hh: "???????????????? %d",
                d: "????????????????",
                dd: "???????????? %d",
                M: "????????????",
                MM: "???????? %d",
                y: "????????????????",
                yy: "???????????? %d"
            },
            preparse: function(e) {
                return e.replace(/??/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "??")
            },
            week: {
                dow: 7,
                doy: 12
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("el", {
            monthsNominativeEl: "????????????????????_??????????????????????_??????????????_????????????????_??????????_??????????????_??????????????_??????????????????_??????????????????????_??????????????????_??????????????????_????????????????????".split("_"),
            monthsGenitiveEl: "????????????????????_??????????????????????_??????????????_????????????????_??????????_??????????????_??????????????_??????????????????_??????????????????????_??????????????????_??????????????????_????????????????????".split("_"),
            months: function(e, a) {
                return e ? "string" == typeof a && /D/.test(a.substring(0, a.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
            },
            monthsShort: "??????_??????_??????_??????_??????_????????_????????_??????_??????_??????_??????_??????".split("_"),
            weekdays: "??????????????_??????????????_??????????_??????????????_????????????_??????????????????_??????????????".split("_"),
            weekdaysShort: "??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdaysMin: "????_????_????_????_????_????_????".split("_"),
            meridiem: function(e, a, t) {
                return e > 11 ? t ? "????" : "????" : t ? "????" : "????"
            },
            isPM: function(e) {
                return "??" === (e + "").toLowerCase()[0]
            },
            meridiemParse: /[????]\.????\.?/i,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendarEl: {
                sameDay: "[???????????? {}] LT",
                nextDay: "[?????????? {}] LT",
                nextWeek: "dddd [{}] LT",
                lastDay: "[???????? {}] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 6:
                        return "[???? ??????????????????????] dddd [{}] LT";
                    default:
                        return "[?????? ??????????????????????] dddd [{}] LT"
                    }
                },
                sameElse: "L"
            },
            calendar: function(e, a) {
                var t, n = this._calendarEl[e], o = a && a.hours();
                return t = n,
                ("undefined" != typeof Function && t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)) && (n = n.apply(a)),
                n.replace("{}", o % 12 == 1 ? "??????" : "????????")
            },
            relativeTime: {
                future: "???? %s",
                past: "%s ????????",
                s: "???????? ????????????????????????",
                ss: "%d ????????????????????????",
                m: "?????? ??????????",
                mm: "%d ??????????",
                h: "?????? ??????",
                hh: "%d ????????",
                d: "?????? ????????",
                dd: "%d ??????????",
                M: "???????? ??????????",
                MM: "%d ??????????",
                y: "???????? ????????????",
                yy: "%d ????????????"
            },
            dayOfMonthOrdinalParse: /\d{1,2}??/,
            ordinal: "%d??",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("en-au", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var a = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
            },
            week: {
                dow: 0,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("en-ca", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "YYYY-MM-DD",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var a = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("en-gb", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var a = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("en-ie", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var a = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("en-il", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var a = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("en-in", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var a = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("en-nz", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var a = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("en-sg", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var a = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("eo", {
            months: "januaro_februaro_marto_aprilo_majo_junio_julio_a??gusto_septembro_oktobro_novembro_decembro".split("_"),
            monthsShort: "jan_feb_mart_apr_maj_jun_jul_a??g_sept_okt_nov_dec".split("_"),
            weekdays: "diman??o_lundo_mardo_merkredo_??a??do_vendredo_sabato".split("_"),
            weekdaysShort: "dim_lun_mard_merk_??a??_ven_sab".split("_"),
            weekdaysMin: "di_lu_ma_me_??a_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "[la] D[-an de] MMMM, YYYY",
                LLL: "[la] D[-an de] MMMM, YYYY HH:mm",
                LLLL: "dddd[n], [la] D[-an de] MMMM, YYYY HH:mm",
                llll: "ddd, [la] D[-an de] MMM, YYYY HH:mm"
            },
            meridiemParse: /[ap]\.t\.m/i,
            isPM: function(e) {
                return "p" === e.charAt(0).toLowerCase()
            },
            meridiem: function(e, a, t) {
                return e > 11 ? t ? "p.t.m." : "P.T.M." : t ? "a.t.m." : "A.T.M."
            },
            calendar: {
                sameDay: "[Hodia?? je] LT",
                nextDay: "[Morga?? je] LT",
                nextWeek: "dddd[n je] LT",
                lastDay: "[Hiera?? je] LT",
                lastWeek: "[pasintan] dddd[n je] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "post %s",
                past: "anta?? %s",
                s: "kelkaj sekundoj",
                ss: "%d sekundoj",
                m: "unu minuto",
                mm: "%d minutoj",
                h: "unu horo",
                hh: "%d horoj",
                d: "unu tago",
                dd: "%d tagoj",
                M: "unu monato",
                MM: "%d monatoj",
                y: "unu jaro",
                yy: "%d jaroj"
            },
            dayOfMonthOrdinalParse: /\d{1,2}a/,
            ordinal: "%da",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
          , t = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_")
          , n = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
          , o = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, n) {
                return e ? /-MMM-/.test(n) ? t[e.month()] : a[e.month()] : a
            },
            monthsRegex: o,
            monthsShortRegex: o,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: "domingo_lunes_martes_mi??rcoles_jueves_viernes_s??bado".split("_"),
            weekdaysShort: "dom._lun._mar._mi??._jue._vie._s??b.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_s??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[ma??ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un d??a",
                dd: "%d d??as",
                w: "una semana",
                ww: "%d semanas",
                M: "un mes",
                MM: "%d meses",
                y: "un a??o",
                yy: "%d a??os"
            },
            dayOfMonthOrdinalParse: /\d{1,2}??/,
            ordinal: "%d??",
            week: {
                dow: 1,
                doy: 4
            },
            invalidDate: "Fecha inv??lida"
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
          , t = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_")
          , n = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
          , o = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es-do", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, n) {
                return e ? /-MMM-/.test(n) ? t[e.month()] : a[e.month()] : a
            },
            monthsRegex: o,
            monthsShortRegex: o,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: "domingo_lunes_martes_mi??rcoles_jueves_viernes_s??bado".split("_"),
            weekdaysShort: "dom._lun._mar._mi??._jue._vie._s??b.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_s??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY h:mm A",
                LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[ma??ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un d??a",
                dd: "%d d??as",
                w: "una semana",
                ww: "%d semanas",
                M: "un mes",
                MM: "%d meses",
                y: "un a??o",
                yy: "%d a??os"
            },
            dayOfMonthOrdinalParse: /\d{1,2}??/,
            ordinal: "%d??",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
          , t = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_")
          , n = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
          , o = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es-mx", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, n) {
                return e ? /-MMM-/.test(n) ? t[e.month()] : a[e.month()] : a
            },
            monthsRegex: o,
            monthsShortRegex: o,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: "domingo_lunes_martes_mi??rcoles_jueves_viernes_s??bado".split("_"),
            weekdaysShort: "dom._lun._mar._mi??._jue._vie._s??b.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_s??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[ma??ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un d??a",
                dd: "%d d??as",
                w: "una semana",
                ww: "%d semanas",
                M: "un mes",
                MM: "%d meses",
                y: "un a??o",
                yy: "%d a??os"
            },
            dayOfMonthOrdinalParse: /\d{1,2}??/,
            ordinal: "%d??",
            week: {
                dow: 0,
                doy: 4
            },
            invalidDate: "Fecha inv??lida"
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
          , t = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_")
          , n = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
          , o = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es-us", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, n) {
                return e ? /-MMM-/.test(n) ? t[e.month()] : a[e.month()] : a
            },
            monthsRegex: o,
            monthsShortRegex: o,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: "domingo_lunes_martes_mi??rcoles_jueves_viernes_s??bado".split("_"),
            weekdaysShort: "dom._lun._mar._mi??._jue._vie._s??b.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_s??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "MM/DD/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY h:mm A",
                LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[ma??ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un d??a",
                dd: "%d d??as",
                w: "una semana",
                ww: "%d semanas",
                M: "un mes",
                MM: "%d meses",
                y: "un a??o",
                yy: "%d a??os"
            },
            dayOfMonthOrdinalParse: /\d{1,2}??/,
            ordinal: "%d??",
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        function a(e, a, t, n) {
            var o = {
                s: ["m??ne sekundi", "m??ni sekund", "paar sekundit"],
                ss: [e + "sekundi", e + "sekundit"],
                m: ["??he minuti", "??ks minut"],
                mm: [e + " minuti", e + " minutit"],
                h: ["??he tunni", "tund aega", "??ks tund"],
                hh: [e + " tunni", e + " tundi"],
                d: ["??he p??eva", "??ks p??ev"],
                M: ["kuu aja", "kuu aega", "??ks kuu"],
                MM: [e + " kuu", e + " kuud"],
                y: ["??he aasta", "aasta", "??ks aasta"],
                yy: [e + " aasta", e + " aastat"]
            };
            return a ? o[t][2] ? o[t][2] : o[t][1] : n ? o[t][0] : o[t][1]
        }
        e.defineLocale("et", {
            months: "jaanuar_veebruar_m??rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
            monthsShort: "jaan_veebr_m??rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
            weekdays: "p??hap??ev_esmasp??ev_teisip??ev_kolmap??ev_neljap??ev_reede_laup??ev".split("_"),
            weekdaysShort: "P_E_T_K_N_R_L".split("_"),
            weekdaysMin: "P_E_T_K_N_R_L".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[T??na,] LT",
                nextDay: "[Homme,] LT",
                nextWeek: "[J??rgmine] dddd LT",
                lastDay: "[Eile,] LT",
                lastWeek: "[Eelmine] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s p??rast",
                past: "%s tagasi",
                s: a,
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: a,
                dd: "%d p??eva",
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("eu", {
            months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
            monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
            monthsParseExact: !0,
            weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
            weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
            weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY[ko] MMMM[ren] D[a]",
                LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                l: "YYYY-M-D",
                ll: "YYYY[ko] MMM D[a]",
                lll: "YYYY[ko] MMM D[a] HH:mm",
                llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
            },
            calendar: {
                sameDay: "[gaur] LT[etan]",
                nextDay: "[bihar] LT[etan]",
                nextWeek: "dddd LT[etan]",
                lastDay: "[atzo] LT[etan]",
                lastWeek: "[aurreko] dddd LT[etan]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s barru",
                past: "duela %s",
                s: "segundo batzuk",
                ss: "%d segundo",
                m: "minutu bat",
                mm: "%d minutu",
                h: "ordu bat",
                hh: "%d ordu",
                d: "egun bat",
                dd: "%d egun",
                M: "hilabete bat",
                MM: "%d hilabete",
                y: "urte bat",
                yy: "%d urte"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "??",
            2: "??",
            3: "??",
            4: "??",
            5: "??",
            6: "??",
            7: "??",
            8: "??",
            9: "??",
            0: "??"
        }
          , t = {
            "??": "1",
            "??": "2",
            "??": "3",
            "??": "4",
            "??": "5",
            "??": "6",
            "??": "7",
            "??": "8",
            "??": "9",
            "??": "0"
        };
        e.defineLocale("fa", {
            months: "????????????_??????????_????????_??????????_????_????????_??????????_??????_??????????????_??????????_????????????_????????????".split("_"),
            monthsShort: "????????????_??????????_????????_??????????_????_????????_??????????_??????_??????????????_??????????_????????????_????????????".split("_"),
            weekdays: "???????????????_????????????_???????????????_????????????????_?????????????????_????????_????????".split("_"),
            weekdaysShort: "???????????????_????????????_???????????????_????????????????_?????????????????_????????_????????".split("_"),
            weekdaysMin: "??_??_??_??_??_??_??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /?????? ???? ??????|?????? ???? ??????/,
            isPM: function(e) {
                return /?????? ???? ??????/.test(e)
            },
            meridiem: function(e, a, t) {
                return e < 12 ? "?????? ???? ??????" : "?????? ???? ??????"
            },
            calendar: {
                sameDay: "[?????????? ????????] LT",
                nextDay: "[???????? ????????] LT",
                nextWeek: "dddd [????????] LT",
                lastDay: "[?????????? ????????] LT",
                lastWeek: "dddd [??????] [????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "???? %s",
                past: "%s ??????",
                s: "?????? ??????????",
                ss: "%d ??????????",
                m: "???? ??????????",
                mm: "%d ??????????",
                h: "???? ????????",
                hh: "%d ????????",
                d: "???? ??????",
                dd: "%d ??????",
                M: "???? ??????",
                MM: "%d ??????",
                y: "???? ??????",
                yy: "%d ??????"
            },
            preparse: function(e) {
                return e.replace(/[??-??]/g, (function(e) {
                    return t[e]
                }
                )).replace(/??/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return a[e]
                }
                )).replace(/,/g, "??")
            },
            dayOfMonthOrdinalParse: /\d{1,2}??/,
            ordinal: "%d??",
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = "nolla yksi kaksi kolme nelj?? viisi kuusi seitsem??n kahdeksan yhdeks??n".split(" ")
          , t = ["nolla", "yhden", "kahden", "kolmen", "nelj??n", "viiden", "kuuden", a[7], a[8], a[9]];
        function n(e, n, o, i) {
            var r = "";
            switch (o) {
            case "s":
                return i ? "muutaman sekunnin" : "muutama sekunti";
            case "ss":
                r = i ? "sekunnin" : "sekuntia";
                break;
            case "m":
                return i ? "minuutin" : "minuutti";
            case "mm":
                r = i ? "minuutin" : "minuuttia";
                break;
            case "h":
                return i ? "tunnin" : "tunti";
            case "hh":
                r = i ? "tunnin" : "tuntia";
                break;
            case "d":
                return i ? "p??iv??n" : "p??iv??";
            case "dd":
                r = i ? "p??iv??n" : "p??iv????";
                break;
            case "M":
                return i ? "kuukauden" : "kuukausi";
            case "MM":
                r = i ? "kuukauden" : "kuukautta";
                break;
            case "y":
                return i ? "vuoden" : "vuosi";
            case "yy":
                r = i ? "vuoden" : "vuotta"
            }
            return r = function(e, n) {
                return e < 10 ? n ? t[e] : a[e] : e
            }(e, i) + " " + r
        }
        e.defineLocale("fi", {
            months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes??kuu_hein??kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
            monthsShort: "tammi_helmi_maalis_huhti_touko_kes??_hein??_elo_syys_loka_marras_joulu".split("_"),
            weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "Do MMMM[ta] YYYY",
                LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                l: "D.M.YYYY",
                ll: "Do MMM YYYY",
                lll: "Do MMM YYYY, [klo] HH.mm",
                llll: "ddd, Do MMM YYYY, [klo] HH.mm"
            },
            calendar: {
                sameDay: "[t??n????n] [klo] LT",
                nextDay: "[huomenna] [klo] LT",
                nextWeek: "dddd [klo] LT",
                lastDay: "[eilen] [klo] LT",
                lastWeek: "[viime] dddd[na] [klo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s p????st??",
                past: "%s sitten",
                s: n,
                ss: n,
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("fil", {
            months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
            monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "MM/D/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY HH:mm",
                LLLL: "dddd, MMMM DD, YYYY HH:mm"
            },
            calendar: {
                sameDay: "LT [ngayong araw]",
                nextDay: "[Bukas ng] LT",
                nextWeek: "LT [sa susunod na] dddd",
                lastDay: "LT [kahapon]",
                lastWeek: "LT [noong nakaraang] dddd",
                sameElse: "L"
            },
            relativeTime: {
                future: "sa loob ng %s",
                past: "%s ang nakalipas",
                s: "ilang segundo",
                ss: "%d segundo",
                m: "isang minuto",
                mm: "%d minuto",
                h: "isang oras",
                hh: "%d oras",
                d: "isang araw",
                dd: "%d araw",
                M: "isang buwan",
                MM: "%d buwan",
                y: "isang taon",
                yy: "%d taon"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function(e) {
                return e
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("fo", {
            months: "januar_februar_mars_apr??l_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sunnudagur_m??nadagur_t??sdagur_mikudagur_h??sdagur_fr??ggjadagur_leygardagur".split("_"),
            weekdaysShort: "sun_m??n_t??s_mik_h??s_fr??_ley".split("_"),
            weekdaysMin: "su_m??_t??_mi_h??_fr_le".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D. MMMM, YYYY HH:mm"
            },
            calendar: {
                sameDay: "[?? dag kl.] LT",
                nextDay: "[?? morgin kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[?? gj??r kl.] LT",
                lastWeek: "[s????stu] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "um %s",
                past: "%s s????ani",
                s: "f?? sekund",
                ss: "%d sekundir",
                m: "ein minuttur",
                mm: "%d minuttir",
                h: "ein t??mi",
                hh: "%d t??mar",
                d: "ein dagur",
                dd: "%d dagar",
                M: "ein m??na??ur",
                MM: "%d m??na??ir",
                y: "eitt ??r",
                yy: "%d ??r"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = /(janv\.?|f??vr\.?|mars|avr\.?|mai|juin|juil\.?|ao??t|sept\.?|oct\.?|nov\.?|d??c\.?|janvier|f??vrier|mars|avril|mai|juin|juillet|ao??t|septembre|octobre|novembre|d??cembre)/i
          , t = [/^janv/i, /^f??vr/i, /^mars/i, /^avr/i, /^mai/i, /^juin/i, /^juil/i, /^ao??t/i, /^sept/i, /^oct/i, /^nov/i, /^d??c/i];
        e.defineLocale("fr", {
            months: "janvier_f??vrier_mars_avril_mai_juin_juillet_ao??t_septembre_octobre_novembre_d??cembre".split("_"),
            monthsShort: "janv._f??vr._mars_avr._mai_juin_juil._ao??t_sept._oct._nov._d??c.".split("_"),
            monthsRegex: a,
            monthsShortRegex: a,
            monthsStrictRegex: /^(janvier|f??vrier|mars|avril|mai|juin|juillet|ao??t|septembre|octobre|novembre|d??cembre)/i,
            monthsShortStrictRegex: /(janv\.?|f??vr\.?|mars|avr\.?|mai|juin|juil\.?|ao??t|sept\.?|oct\.?|nov\.?|d??c\.?)/i,
            monthsParse: t,
            longMonthsParse: t,
            shortMonthsParse: t,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd???hui ??] LT",
                nextDay: "[Demain ??] LT",
                nextWeek: "dddd [??] LT",
                lastDay: "[Hier ??] LT",
                lastWeek: "dddd [dernier ??] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                w: "une semaine",
                ww: "%d semaines",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
            ordinal: function(e, a) {
                switch (a) {
                case "D":
                    return e + (1 === e ? "er" : "");
                default:
                case "M":
                case "Q":
                case "DDD":
                case "d":
                    return e + (1 === e ? "er" : "e");
                case "w":
                case "W":
                    return e + (1 === e ? "re" : "e")
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("fr-ca", {
            months: "janvier_f??vrier_mars_avril_mai_juin_juillet_ao??t_septembre_octobre_novembre_d??cembre".split("_"),
            monthsShort: "janv._f??vr._mars_avr._mai_juin_juil._ao??t_sept._oct._nov._d??c.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd???hui ??] LT",
                nextDay: "[Demain ??] LT",
                nextWeek: "dddd [??] LT",
                lastDay: "[Hier ??] LT",
                lastWeek: "dddd [dernier ??] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function(e, a) {
                switch (a) {
                default:
                case "M":
                case "Q":
                case "D":
                case "DDD":
                case "d":
                    return e + (1 === e ? "er" : "e");
                case "w":
                case "W":
                    return e + (1 === e ? "re" : "e")
                }
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("fr-ch", {
            months: "janvier_f??vrier_mars_avril_mai_juin_juillet_ao??t_septembre_octobre_novembre_d??cembre".split("_"),
            monthsShort: "janv._f??vr._mars_avr._mai_juin_juil._ao??t_sept._oct._nov._d??c.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd???hui ??] LT",
                nextDay: "[Demain ??] LT",
                nextWeek: "dddd [??] LT",
                lastDay: "[Hier ??] LT",
                lastWeek: "dddd [dernier ??] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function(e, a) {
                switch (a) {
                default:
                case "M":
                case "Q":
                case "D":
                case "DDD":
                case "d":
                    return e + (1 === e ? "er" : "e");
                case "w":
                case "W":
                    return e + (1 === e ? "re" : "e")
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_")
          , t = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
        e.defineLocale("fy", {
            months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
            monthsShort: function(e, n) {
                return e ? /-MMM-/.test(n) ? t[e.month()] : a[e.month()] : a
            },
            monthsParseExact: !0,
            weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
            weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
            weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[hjoed om] LT",
                nextDay: "[moarn om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[juster om] LT",
                lastWeek: "[??fr??ne] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oer %s",
                past: "%s lyn",
                s: "in pear sekonden",
                ss: "%d sekonden",
                m: "ien min??t",
                mm: "%d minuten",
                h: "ien oere",
                hh: "%d oeren",
                d: "ien dei",
                dd: "%d dagen",
                M: "ien moanne",
                MM: "%d moannen",
                y: "ien jier",
                yy: "%d jierren"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ga", {
            months: ["Ean??ir", "Feabhra", "M??rta", "Aibre??n", "Bealtaine", "Meitheamh", "I??il", "L??nasa", "Me??n F??mhair", "Deireadh F??mhair", "Samhain", "Nollaig"],
            monthsShort: ["Ean", "Feabh", "M??rt", "Aib", "Beal", "Meith", "I??il", "L??n", "M.F.", "D.F.", "Samh", "Noll"],
            monthsParseExact: !0,
            weekdays: ["D?? Domhnaigh", "D?? Luain", "D?? M??irt", "D?? C??adaoin", "D??ardaoin", "D?? hAoine", "D?? Sathairn"],
            weekdaysShort: ["Domh", "Luan", "M??irt", "C??ad", "D??ar", "Aoine", "Sath"],
            weekdaysMin: ["Do", "Lu", "M??", "C??", "D??", "A", "Sa"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Inniu ag] LT",
                nextDay: "[Am??rach ag] LT",
                nextWeek: "dddd [ag] LT",
                lastDay: "[Inn?? ag] LT",
                lastWeek: "dddd [seo caite] [ag] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "i %s",
                past: "%s ?? shin",
                s: "c??pla soicind",
                ss: "%d soicind",
                m: "n??im??ad",
                mm: "%d n??im??ad",
                h: "uair an chloig",
                hh: "%d uair an chloig",
                d: "l??",
                dd: "%d l??",
                M: "m??",
                MM: "%d m??onna",
                y: "bliain",
                yy: "%d bliain"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function(e) {
                return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("gd", {
            months: ["Am Faoilleach", "An Gearran", "Am M??rt", "An Giblean", "An C??itean", "An t-??gmhios", "An t-Iuchar", "An L??nastal", "An t-Sultain", "An D??mhair", "An t-Samhain", "An D??bhlachd"],
            monthsShort: ["Faoi", "Gear", "M??rt", "Gibl", "C??it", "??gmh", "Iuch", "L??n", "Sult", "D??mh", "Samh", "D??bh"],
            monthsParseExact: !0,
            weekdays: ["Did??mhnaich", "Diluain", "Dim??irt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
            weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
            weekdaysMin: ["D??", "Lu", "M??", "Ci", "Ar", "Ha", "Sa"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[An-diugh aig] LT",
                nextDay: "[A-m??ireach aig] LT",
                nextWeek: "dddd [aig] LT",
                lastDay: "[An-d?? aig] LT",
                lastWeek: "dddd [seo chaidh] [aig] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ann an %s",
                past: "bho chionn %s",
                s: "beagan diogan",
                ss: "%d diogan",
                m: "mionaid",
                mm: "%d mionaidean",
                h: "uair",
                hh: "%d uairean",
                d: "latha",
                dd: "%d latha",
                M: "m??os",
                MM: "%d m??osan",
                y: "bliadhna",
                yy: "%d bliadhna"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function(e) {
                return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("gl", {
            months: "xaneiro_febreiro_marzo_abril_maio_xu??o_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
            monthsShort: "xan._feb._mar._abr._mai._xu??._xul._ago._set._out._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "domingo_luns_martes_m??rcores_xoves_venres_s??bado".split("_"),
            weekdaysShort: "dom._lun._mar._m??r._xov._ven._s??b.".split("_"),
            weekdaysMin: "do_lu_ma_m??_xo_ve_s??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[hoxe " + (1 !== this.hours() ? "??s" : "??") + "] LT"
                },
                nextDay: function() {
                    return "[ma???? " + (1 !== this.hours() ? "??s" : "??") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [" + (1 !== this.hours() ? "??s" : "a") + "] LT"
                },
                lastDay: function() {
                    return "[onte " + (1 !== this.hours() ? "??" : "a") + "] LT"
                },
                lastWeek: function() {
                    return "[o] dddd [pasado " + (1 !== this.hours() ? "??s" : "a") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return 0 === e.indexOf("un") ? "n" + e : "en " + e
                },
                past: "hai %s",
                s: "uns segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "unha hora",
                hh: "%d horas",
                d: "un d??a",
                dd: "%d d??as",
                M: "un mes",
                MM: "%d meses",
                y: "un ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}??/,
            ordinal: "%d??",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        function a(e, a, t, n) {
            var o = {
                s: ["??????????????? ???????????????????????????", "???????????? ???????????????"],
                ss: [e + " ???????????????????????????", e + " ???????????????"],
                m: ["????????? ??????????????????", "?????? ???????????????"],
                mm: [e + " ????????????????????????", e + " ??????????????????"],
                h: ["????????? ????????????", "?????? ??????"],
                hh: [e + " ??????????????????", e + " ????????????"],
                d: ["????????? ???????????????", "?????? ?????????"],
                dd: [e + " ?????????????????????", e + " ?????????"],
                M: ["????????? ???????????????????????????", "?????? ??????????????????"],
                MM: [e + " ??????????????????????????????", e + " ??????????????????"],
                y: ["????????? ??????????????????", "?????? ????????????"],
                yy: [e + " ????????????????????????", e + " ??????????????????"]
            };
            return n ? o[t][0] : o[t][1]
        }
        e.defineLocale("gom-deva", {
            months: {
                standalone: "????????????????????????_??????????????????????????????_???????????????_??????????????????_??????_?????????_????????????_???????????????_????????????????????????_?????????????????????_???????????????????????????_?????????????????????".split("_"),
                format: "????????????????????????????????????_??????????????????????????????????????????_??????????????????????????????_?????????????????????????????????_????????????????????????_????????????????????????_???????????????????????????_??????????????????????????????_???????????????????????????????????????_????????????????????????????????????_??????????????????????????????????????????_????????????????????????????????????".split("_"),
                isFormat: /MMMM(\s)+D[oD]?/
            },
            monthsShort: "????????????._??????????????????._???????????????_???????????????._??????_?????????_?????????._??????._??????????????????._???????????????._?????????????????????._???????????????.".split("_"),
            monthsParseExact: !0,
            weekdays: "???????????????_???????????????_??????????????????_??????????????????_???????????????????????????_?????????????????????_??????????????????".split("_"),
            weekdaysShort: "?????????._?????????._????????????._?????????._?????????????????????._???????????????._?????????.".split("_"),
            weekdaysMin: "???_??????_??????_??????_????????????_??????_??????".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "A h:mm [??????????????????]",
                LTS: "A h:mm:ss [??????????????????]",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY A h:mm [??????????????????]",
                LLLL: "dddd, MMMM Do, YYYY, A h:mm [??????????????????]",
                llll: "ddd, D MMM YYYY, A h:mm [??????????????????]"
            },
            calendar: {
                sameDay: "[?????????] LT",
                nextDay: "[?????????????????????] LT",
                nextWeek: "[???????????????] dddd[,] LT",
                lastDay: "[?????????] LT",
                lastWeek: "[???????????????] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s",
                past: "%s ????????????",
                s: a,
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: a,
                dd: a,
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}(?????????)/,
            ordinal: function(e, a) {
                switch (a) {
                case "D":
                    return e + "?????????";
                default:
                case "M":
                case "Q":
                case "DDD":
                case "d":
                case "w":
                case "W":
                    return e
                }
            },
            week: {
                dow: 0,
                doy: 3
            },
            meridiemParse: /????????????|??????????????????|?????????????????????|???????????????/,
            meridiemHour: function(e, a) {
                return 12 === e && (e = 0),
                "????????????" === a ? e < 4 ? e : e + 12 : "??????????????????" === a ? e : "?????????????????????" === a ? e > 12 ? e : e + 12 : "???????????????" === a ? e + 12 : void 0
            },
            meridiem: function(e, a, t) {
                return e < 4 ? "????????????" : e < 12 ? "??????????????????" : e < 16 ? "?????????????????????" : e < 20 ? "???????????????" : "????????????"
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        function a(e, a, t, n) {
            var o = {
                s: ["thoddea sekondamni", "thodde sekond"],
                ss: [e + " sekondamni", e + " sekond"],
                m: ["eka mintan", "ek minut"],
                mm: [e + " mintamni", e + " mintam"],
                h: ["eka voran", "ek vor"],
                hh: [e + " voramni", e + " voram"],
                d: ["eka disan", "ek dis"],
                dd: [e + " disamni", e + " dis"],
                M: ["eka mhoinean", "ek mhoino"],
                MM: [e + " mhoineamni", e + " mhoine"],
                y: ["eka vorsan", "ek voros"],
                yy: [e + " vorsamni", e + " vorsam"]
            };
            return n ? o[t][0] : o[t][1]
        }
        e.defineLocale("gom-latn", {
            months: {
                standalone: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
                format: "Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea".split("_"),
                isFormat: /MMMM(\s)+D[oD]?/
            },
            monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split("_"),
            weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
            weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "A h:mm [vazta]",
                LTS: "A h:mm:ss [vazta]",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY A h:mm [vazta]",
                LLLL: "dddd, MMMM Do, YYYY, A h:mm [vazta]",
                llll: "ddd, D MMM YYYY, A h:mm [vazta]"
            },
            calendar: {
                sameDay: "[Aiz] LT",
                nextDay: "[Faleam] LT",
                nextWeek: "[Fuddlo] dddd[,] LT",
                lastDay: "[Kal] LT",
                lastWeek: "[Fattlo] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s",
                past: "%s adim",
                s: a,
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: a,
                dd: a,
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er)/,
            ordinal: function(e, a) {
                switch (a) {
                case "D":
                    return e + "er";
                default:
                case "M":
                case "Q":
                case "DDD":
                case "d":
                case "w":
                case "W":
                    return e
                }
            },
            week: {
                dow: 0,
                doy: 3
            },
            meridiemParse: /rati|sokallim|donparam|sanje/,
            meridiemHour: function(e, a) {
                return 12 === e && (e = 0),
                "rati" === a ? e < 4 ? e : e + 12 : "sokallim" === a ? e : "donparam" === a ? e > 12 ? e : e + 12 : "sanje" === a ? e + 12 : void 0
            },
            meridiem: function(e, a, t) {
                return e < 4 ? "rati" : e < 12 ? "sokallim" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "???",
            2: "???",
            3: "???",
            4: "???",
            5: "???",
            6: "???",
            7: "???",
            8: "???",
            9: "???",
            0: "???"
        }
          , t = {
            "???": "1",
            "???": "2",
            "???": "3",
            "???": "4",
            "???": "5",
            "???": "6",
            "???": "7",
            "???": "8",
            "???": "9",
            "???": "0"
        };
        e.defineLocale("gu", {
            months: "???????????????????????????_???????????????????????????_???????????????_??????????????????_??????_?????????_???????????????_???????????????_???????????????????????????_?????????????????????_?????????????????????_????????????????????????".split("_"),
            monthsShort: "??????????????????._??????????????????._???????????????_???????????????._??????_?????????_????????????._??????._???????????????._???????????????._?????????._????????????.".split("_"),
            monthsParseExact: !0,
            weekdays: "??????????????????_??????????????????_?????????????????????_?????????????????????_?????????????????????_????????????????????????_??????????????????".split("_"),
            weekdaysShort: "?????????_?????????_????????????_????????????_????????????_???????????????_?????????".split("_"),
            weekdaysMin: "???_??????_??????_??????_??????_??????_???".split("_"),
            longDateFormat: {
                LT: "A h:mm ??????????????????",
                LTS: "A h:mm:ss ??????????????????",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm ??????????????????",
                LLLL: "dddd, D MMMM YYYY, A h:mm ??????????????????"
            },
            calendar: {
                sameDay: "[??????] LT",
                nextDay: "[????????????] LT",
                nextWeek: "dddd, LT",
                lastDay: "[??????????????????] LT",
                lastWeek: "[???????????????] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ??????",
                past: "%s ???????????????",
                s: "???????????? ?????????",
                ss: "%d ???????????????",
                m: "?????? ???????????????",
                mm: "%d ???????????????",
                h: "?????? ????????????",
                hh: "%d ????????????",
                d: "?????? ????????????",
                dd: "%d ????????????",
                M: "?????? ???????????????",
                MM: "%d ???????????????",
                y: "?????? ????????????",
                yy: "%d ????????????"
            },
            preparse: function(e) {
                return e.replace(/[??????????????????????????????]/g, (function(e) {
                    return t[e]
                }
                ))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return a[e]
                }
                ))
            },
            meridiemParse: /?????????|????????????|????????????|????????????/,
            meridiemHour: function(e, a) {
                return 12 === e && (e = 0),
                "?????????" === a ? e < 4 ? e : e + 12 : "????????????" === a ? e : "????????????" === a ? e >= 10 ? e : e + 12 : "????????????" === a ? e + 12 : void 0
            },
            meridiem: function(e, a, t) {
                return e < 4 ? "?????????" : e < 10 ? "????????????" : e < 17 ? "????????????" : e < 20 ? "????????????" : "?????????"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("he", {
            months: "??????????_????????????_??????_??????????_??????_????????_????????_????????????_????????????_??????????????_????????????_??????????".split("_"),
            monthsShort: "????????_????????_??????_????????_??????_????????_????????_????????_????????_????????_????????_????????".split("_"),
            weekdays: "??????????_??????_??????????_??????????_??????????_????????_??????".split("_"),
            weekdaysShort: "????_????_????_????_????_????_????".split("_"),
            weekdaysMin: "??_??_??_??_??_??_??".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [??]MMMM YYYY",
                LLL: "D [??]MMMM YYYY HH:mm",
                LLLL: "dddd, D [??]MMMM YYYY HH:mm",
                l: "D/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[???????? ????]LT",
                nextDay: "[?????? ????]LT",
                nextWeek: "dddd [????????] LT",
                lastDay: "[?????????? ????]LT",
                lastWeek: "[????????] dddd [???????????? ????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "???????? %s",
                past: "???????? %s",
                s: "???????? ??????????",
                ss: "%d ??????????",
                m: "??????",
                mm: "%d ????????",
                h: "??????",
                hh: function(e) {
                    return 2 === e ? "????????????" : e + " ????????"
                },
                d: "??????",
                dd: function(e) {
                    return 2 === e ? "????????????" : e + " ????????"
                },
                M: "????????",
                MM: function(e) {
                    return 2 === e ? "??????????????" : e + " ????????????"
                },
                y: "??????",
                yy: function(e) {
                    return 2 === e ? "????????????" : e % 10 == 0 && 10 !== e ? e + " ??????" : e + " ????????"
                }
            },
            meridiemParse: /??????"??|????????"??|???????? ??????????????|???????? ??????????????|?????????? ????????|??????????|????????/i,
            isPM: function(e) {
                return /^(??????"??|???????? ??????????????|????????)$/.test(e)
            },
            meridiem: function(e, a, t) {
                return e < 5 ? "?????????? ????????" : e < 10 ? "??????????" : e < 12 ? t ? '????????"??' : "???????? ??????????????" : e < 18 ? t ? '??????"??' : "???????? ??????????????" : "????????"
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "???",
            2: "???",
            3: "???",
            4: "???",
            5: "???",
            6: "???",
            7: "???",
            8: "???",
            9: "???",
            0: "???"
        }
          , t = {
            "???": "1",
            "???": "2",
            "???": "3",
            "???": "4",
            "???": "5",
            "???": "6",
            "???": "7",
            "???": "8",
            "???": "9",
            "???": "0"
        }
          , n = [/^??????/i, /^?????????|??????/i, /^???????????????/i, /^???????????????/i, /^??????/i, /^?????????/i, /^?????????/i, /^??????/i, /^????????????|?????????/i, /^???????????????/i, /^??????|?????????/i, /^????????????|?????????/i];
        e.defineLocale("hi", {
            months: {
                format: "???????????????_??????????????????_???????????????_??????????????????_??????_?????????_???????????????_???????????????_?????????????????????_?????????????????????_??????????????????_?????????????????????".split("_"),
                standalone: "???????????????_???????????????_???????????????_??????????????????_??????_?????????_???????????????_???????????????_??????????????????_?????????????????????_???????????????_??????????????????".split("_")
            },
            monthsShort: "??????._?????????._???????????????_???????????????._??????_?????????_?????????._??????._?????????._???????????????._??????._?????????.".split("_"),
            weekdays: "??????????????????_??????????????????_?????????????????????_??????????????????_?????????????????????_????????????????????????_??????????????????".split("_"),
            weekdaysShort: "?????????_?????????_????????????_?????????_????????????_???????????????_?????????".split("_"),
            weekdaysMin: "???_??????_??????_??????_??????_??????_???".split("_"),
            longDateFormat: {
                LT: "A h:mm ?????????",
                LTS: "A h:mm:ss ?????????",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm ?????????",
                LLLL: "dddd, D MMMM YYYY, A h:mm ?????????"
            },
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: [/^??????/i, /^?????????/i, /^???????????????/i, /^???????????????/i, /^??????/i, /^?????????/i, /^?????????/i, /^??????/i, /^?????????/i, /^???????????????/i, /^??????/i, /^?????????/i],
            monthsRegex: /^(???????????????|??????\.?|??????????????????|???????????????|?????????\.?|????????????????|??????????????????|???????????????\.?|???????|??????????|???????????????|?????????\.?|???????????????|??????\.?|?????????????????????|??????????????????|?????????\.?|?????????????????????|???????????????\.?|??????????????????|???????????????|??????\.?|?????????????????????|??????????????????|?????????\.?)/i,
            monthsShortRegex: /^(???????????????|??????\.?|??????????????????|???????????????|?????????\.?|????????????????|??????????????????|???????????????\.?|???????|??????????|???????????????|?????????\.?|???????????????|??????\.?|?????????????????????|??????????????????|?????????\.?|?????????????????????|???????????????\.?|??????????????????|???????????????|??????\.?|?????????????????????|??????????????????|?????????\.?)/i,
            monthsStrictRegex: /^(????????????????|??????????????????|????????????????|????????????????|???????????????????|???????|??????????|????????????????|????????????????|?????????????????????|??????????????????|??????????\.?|?????????????????????|???????????????\.?|??????????????????|????????????????|?????????????????????|???????????????????)/i,
            monthsShortStrictRegex: /^(??????\.?|?????????\.?|????????????????|???????????????\.?|???????|??????????|?????????\.?|??????\.?|?????????\.?|???????????????\.?|??????\.?|?????????\.?)/i,
            calendar: {
                sameDay: "[??????] LT",
                nextDay: "[??????] LT",
                nextWeek: "dddd, LT",
                lastDay: "[??????] LT",
                lastWeek: "[???????????????] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ?????????",
                past: "%s ????????????",
                s: "????????? ?????? ????????????",
                ss: "%d ???????????????",
                m: "?????? ????????????",
                mm: "%d ????????????",
                h: "?????? ????????????",
                hh: "%d ????????????",
                d: "?????? ?????????",
                dd: "%d ?????????",
                M: "?????? ???????????????",
                MM: "%d ???????????????",
                y: "?????? ????????????",
                yy: "%d ????????????"
            },
            preparse: function(e) {
                return e.replace(/[??????????????????????????????]/g, (function(e) {
                    return t[e]
                }
                ))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return a[e]
                }
                ))
            },
            meridiemParse: /?????????|????????????|???????????????|?????????/,
            meridiemHour: function(e, a) {
                return 12 === e && (e = 0),
                "?????????" === a ? e < 4 ? e : e + 12 : "????????????" === a ? e : "???????????????" === a ? e >= 10 ? e : e + 12 : "?????????" === a ? e + 12 : void 0
            },
            meridiem: function(e, a, t) {
                return e < 4 ? "?????????" : e < 10 ? "????????????" : e < 17 ? "???????????????" : e < 20 ? "?????????" : "?????????"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        function a(e, a, t) {
            var n = e + " ";
            switch (t) {
            case "ss":
                return n += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
            case "m":
                return a ? "jedna minuta" : "jedne minute";
            case "mm":
                return n += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
            case "h":
                return a ? "jedan sat" : "jednog sata";
            case "hh":
                return n += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
            case "dd":
                return n += 1 === e ? "dan" : "dana";
            case "MM":
                return n += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
            case "yy":
                return n += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
            }
        }
        e.defineLocale("hr", {
            months: {
                format: "sije??nja_velja??e_o??ujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                standalone: "sije??anj_velja??a_o??ujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
            },
            monthsShort: "sij._velj._o??u._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_??etvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._??et._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_??e_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "Do MMMM YYYY",
                LLL: "Do MMMM YYYY H:mm",
                LLLL: "dddd, Do MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[u] [nedjelju] [u] LT";
                    case 3:
                        return "[u] [srijedu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[ju??er u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[pro??lu] [nedjelju] [u] LT";
                    case 3:
                        return "[pro??lu] [srijedu] [u] LT";
                    case 6:
                        return "[pro??le] [subote] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[pro??li] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: "dan",
                dd: a,
                M: "mjesec",
                MM: a,
                y: "godinu",
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = "vas??rnap h??tf??n kedden szerd??n cs??t??rt??k??n p??nteken szombaton".split(" ");
        function t(e, a, t, n) {
            var o = e;
            switch (t) {
            case "s":
                return n || a ? "n??h??ny m??sodperc" : "n??h??ny m??sodperce";
            case "ss":
                return o + (n || a) ? " m??sodperc" : " m??sodperce";
            case "m":
                return "egy" + (n || a ? " perc" : " perce");
            case "mm":
                return o + (n || a ? " perc" : " perce");
            case "h":
                return "egy" + (n || a ? " ??ra" : " ??r??ja");
            case "hh":
                return o + (n || a ? " ??ra" : " ??r??ja");
            case "d":
                return "egy" + (n || a ? " nap" : " napja");
            case "dd":
                return o + (n || a ? " nap" : " napja");
            case "M":
                return "egy" + (n || a ? " h??nap" : " h??napja");
            case "MM":
                return o + (n || a ? " h??nap" : " h??napja");
            case "y":
                return "egy" + (n || a ? " ??v" : " ??ve");
            case "yy":
                return o + (n || a ? " ??v" : " ??ve")
            }
            return ""
        }
        function n(e) {
            return (e ? "" : "[m??lt] ") + "[" + a[this.day()] + "] LT[-kor]"
        }
        e.defineLocale("hu", {
            months: "janu??r_febru??r_m??rcius_??prilis_m??jus_j??nius_j??lius_augusztus_szeptember_okt??ber_november_december".split("_"),
            monthsShort: "jan._feb._m??rc._??pr._m??j._j??n._j??l._aug._szept._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "vas??rnap_h??tf??_kedd_szerda_cs??t??rt??k_p??ntek_szombat".split("_"),
            weekdaysShort: "vas_h??t_kedd_sze_cs??t_p??n_szo".split("_"),
            weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY. MMMM D.",
                LLL: "YYYY. MMMM D. H:mm",
                LLLL: "YYYY. MMMM D., dddd H:mm"
            },
            meridiemParse: /de|du/i,
            isPM: function(e) {
                return "u" === e.charAt(1).toLowerCase()
            },
            meridiem: function(e, a, t) {
                return e < 12 ? !0 === t ? "de" : "DE" : !0 === t ? "du" : "DU"
            },
            calendar: {
                sameDay: "[ma] LT[-kor]",
                nextDay: "[holnap] LT[-kor]",
                nextWeek: function() {
                    return n.call(this, !0)
                },
                lastDay: "[tegnap] LT[-kor]",
                lastWeek: function() {
                    return n.call(this, !1)
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s m??lva",
                past: "%s",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("hy-am", {
            months: {
                format: "????????????????_????????????????_??????????_????????????_????????????_??????????????_??????????????_????????????????_????????????????????_????????????????????_??????????????????_????????????????????".split("_"),
                standalone: "??????????????_??????????????_????????_??????????_??????????_????????????_????????????_??????????????_??????????????????_??????????????????_????????????????_??????????????????".split("_")
            },
            monthsShort: "??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdays: "????????????_????????????????????_??????????????????_????????????????????_??????????????????_????????????_??????????".split("_"),
            weekdaysShort: "??????_??????_??????_??????_??????_????????_??????".split("_"),
            weekdaysMin: "??????_??????_??????_??????_??????_????????_??????".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY ??.",
                LLL: "D MMMM YYYY ??., HH:mm",
                LLLL: "dddd, D MMMM YYYY ??., HH:mm"
            },
            calendar: {
                sameDay: "[??????????] LT",
                nextDay: "[????????] LT",
                lastDay: "[????????] LT",
                nextWeek: function() {
                    return "dddd [?????? ????????] LT"
                },
                lastWeek: function() {
                    return "[??????????] dddd [?????? ????????] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ????????",
                past: "%s ????????",
                s: "???? ???????? ????????????????",
                ss: "%d ????????????????",
                m: "????????",
                mm: "%d ????????",
                h: "??????",
                hh: "%d ??????",
                d: "????",
                dd: "%d ????",
                M: "????????",
                MM: "%d ????????",
                y: "????????",
                yy: "%d ????????"
            },
            meridiemParse: /??????????????|????????????????|??????????????|????????????????/,
            isPM: function(e) {
                return /^(??????????????|????????????????)$/.test(e)
            },
            meridiem: function(e) {
                return e < 4 ? "??????????????" : e < 12 ? "????????????????" : e < 17 ? "??????????????" : "????????????????"
            },
            dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(????|????)/,
            ordinal: function(e, a) {
                switch (a) {
                case "DDD":
                case "w":
                case "W":
                case "DDDo":
                    return 1 === e ? e + "-????" : e + "-????";
                default:
                    return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("id", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|siang|sore|malam/,
            meridiemHour: function(e, a) {
                return 12 === e && (e = 0),
                "pagi" === a ? e : "siang" === a ? e >= 11 ? e : e + 12 : "sore" === a || "malam" === a ? e + 12 : void 0
            },
            meridiem: function(e, a, t) {
                return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Besok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kemarin pukul] LT",
                lastWeek: "dddd [lalu pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lalu",
                s: "beberapa detik",
                ss: "%d detik",
                m: "semenit",
                mm: "%d menit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        function a(e) {
            return e % 100 == 11 || e % 10 != 1
        }
        function t(e, t, n, o) {
            var i = e + " ";
            switch (n) {
            case "s":
                return t || o ? "nokkrar sek??ndur" : "nokkrum sek??ndum";
            case "ss":
                return a(e) ? i + (t || o ? "sek??ndur" : "sek??ndum") : i + "sek??nda";
            case "m":
                return t ? "m??n??ta" : "m??n??tu";
            case "mm":
                return a(e) ? i + (t || o ? "m??n??tur" : "m??n??tum") : t ? i + "m??n??ta" : i + "m??n??tu";
            case "hh":
                return a(e) ? i + (t || o ? "klukkustundir" : "klukkustundum") : i + "klukkustund";
            case "d":
                return t ? "dagur" : o ? "dag" : "degi";
            case "dd":
                return a(e) ? t ? i + "dagar" : i + (o ? "daga" : "d??gum") : t ? i + "dagur" : i + (o ? "dag" : "degi");
            case "M":
                return t ? "m??nu??ur" : o ? "m??nu??" : "m??nu??i";
            case "MM":
                return a(e) ? t ? i + "m??nu??ir" : i + (o ? "m??nu??i" : "m??nu??um") : t ? i + "m??nu??ur" : i + (o ? "m??nu??" : "m??nu??i");
            case "y":
                return t || o ? "??r" : "??ri";
            case "yy":
                return a(e) ? i + (t || o ? "??r" : "??rum") : i + (t || o ? "??r" : "??ri")
            }
        }
        e.defineLocale("is", {
            months: "jan??ar_febr??ar_mars_apr??l_ma??_j??n??_j??l??_??g??st_september_okt??ber_n??vember_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_ma??_j??n_j??l_??g??_sep_okt_n??v_des".split("_"),
            weekdays: "sunnudagur_m??nudagur_??ri??judagur_mi??vikudagur_fimmtudagur_f??studagur_laugardagur".split("_"),
            weekdaysShort: "sun_m??n_??ri_mi??_fim_f??s_lau".split("_"),
            weekdaysMin: "Su_M??_??r_Mi_Fi_F??_La".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
            },
            calendar: {
                sameDay: "[?? dag kl.] LT",
                nextDay: "[?? morgun kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[?? g??r kl.] LT",
                lastWeek: "[s????asta] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "eftir %s",
                past: "fyrir %s s????an",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: "klukkustund",
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("it", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "domenica_luned??_marted??_mercoled??_gioved??_venerd??_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[Oggi a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                },
                nextDay: function() {
                    return "[Domani a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                },
                nextWeek: function() {
                    return "dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                },
                lastDay: function() {
                    return "[Ieri a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                },
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[La scorsa] dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT";
                    default:
                        return "[Lo scorso] dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "tra %s",
                past: "%s fa",
                s: "alcuni secondi",
                ss: "%d secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                w: "una settimana",
                ww: "%d settimane",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}??/,
            ordinal: "%d??",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("it-ch", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "domenica_luned??_marted??_mercoled??_gioved??_venerd??_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[la scorsa] dddd [alle] LT";
                    default:
                        return "[lo scorso] dddd [alle] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                },
                past: "%s fa",
                s: "alcuni secondi",
                ss: "%d secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}??/,
            ordinal: "%d??",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ja", {
            eras: [{
                since: "2019-05-01",
                offset: 1,
                name: "??????",
                narrow: "???",
                abbr: "R"
            }, {
                since: "1989-01-08",
                until: "2019-04-30",
                offset: 1,
                name: "??????",
                narrow: "???",
                abbr: "H"
            }, {
                since: "1926-12-25",
                until: "1989-01-07",
                offset: 1,
                name: "??????",
                narrow: "???",
                abbr: "S"
            }, {
                since: "1912-07-30",
                until: "1926-12-24",
                offset: 1,
                name: "??????",
                narrow: "???",
                abbr: "T"
            }, {
                since: "1873-01-01",
                until: "1912-07-29",
                offset: 6,
                name: "??????",
                narrow: "???",
                abbr: "M"
            }, {
                since: "0001-01-01",
                until: "1873-12-31",
                offset: 1,
                name: "??????",
                narrow: "AD",
                abbr: "AD"
            }, {
                since: "0000-12-31",
                until: -1 / 0,
                offset: 1,
                name: "?????????",
                narrow: "BC",
                abbr: "BC"
            }],
            eraYearOrdinalRegex: /(???|\d+)???/,
            eraYearOrdinalParse: function(e, a) {
                return "???" === a[1] ? 1 : parseInt(a[1] || e, 10)
            },
            months: "1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???".split("_"),
            monthsShort: "1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???".split("_"),
            weekdays: "?????????_?????????_?????????_?????????_?????????_?????????_?????????".split("_"),
            weekdaysShort: "???_???_???_???_???_???_???".split("_"),
            weekdaysMin: "???_???_???_???_???_???_???".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY???M???D???",
                LLL: "YYYY???M???D??? HH:mm",
                LLLL: "YYYY???M???D??? dddd HH:mm",
                l: "YYYY/MM/DD",
                ll: "YYYY???M???D???",
                lll: "YYYY???M???D??? HH:mm",
                llll: "YYYY???M???D???(ddd) HH:mm"
            },
            meridiemParse: /??????|??????/i,
            isPM: function(e) {
                return "??????" === e
            },
            meridiem: function(e, a, t) {
                return e < 12 ? "??????" : "??????"
            },
            calendar: {
                sameDay: "[??????] LT",
                nextDay: "[??????] LT",
                nextWeek: function(e) {
                    return e.week() !== this.week() ? "[??????]dddd LT" : "dddd LT"
                },
                lastDay: "[??????] LT",
                lastWeek: function(e) {
                    return this.week() !== e.week() ? "[??????]dddd LT" : "dddd LT"
                },
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}???/,
            ordinal: function(e, a) {
                switch (a) {
                case "y":
                    return 1 === e ? "??????" : e + "???";
                case "d":
                case "D":
                case "DDD":
                    return e + "???";
                default:
                    return e
                }
            },
            relativeTime: {
                future: "%s???",
                past: "%s???",
                s: "??????",
                ss: "%d???",
                m: "1???",
                mm: "%d???",
                h: "1??????",
                hh: "%d??????",
                d: "1???",
                dd: "%d???",
                M: "1??????",
                MM: "%d??????",
                y: "1???",
                yy: "%d???"
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("jv", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
            weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /enjing|siyang|sonten|ndalu/,
            meridiemHour: function(e, a) {
                return 12 === e && (e = 0),
                "enjing" === a ? e : "siyang" === a ? e >= 11 ? e : e + 12 : "sonten" === a || "ndalu" === a ? e + 12 : void 0
            },
            meridiem: function(e, a, t) {
                return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
            },
            calendar: {
                sameDay: "[Dinten puniko pukul] LT",
                nextDay: "[Mbenjang pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kala wingi pukul] LT",
                lastWeek: "dddd [kepengker pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "wonten ing %s",
                past: "%s ingkang kepengker",
                s: "sawetawis detik",
                ss: "%d detik",
                m: "setunggal menit",
                mm: "%d menit",
                h: "setunggal jam",
                hh: "%d jam",
                d: "sedinten",
                dd: "%d dinten",
                M: "sewulan",
                MM: "%d wulan",
                y: "setaun",
                yy: "%d taun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ka", {
            months: "?????????????????????_???????????????????????????_???????????????_??????????????????_???????????????_??????????????????_??????????????????_?????????????????????_??????????????????????????????_???????????????????????????_????????????????????????_???????????????????????????".split("_"),
            monthsShort: "?????????_?????????_?????????_?????????_?????????_?????????_?????????_?????????_?????????_?????????_?????????_?????????".split("_"),
            weekdays: {
                standalone: "???????????????_????????????????????????_???????????????????????????_???????????????????????????_???????????????????????????_???????????????????????????_??????????????????".split("_"),
                format: "??????????????????_????????????????????????_???????????????????????????_???????????????????????????_???????????????????????????_???????????????????????????_??????????????????".split("_"),
                isFormat: /(????????????|??????????????????)/
            },
            weekdaysShort: "?????????_?????????_?????????_?????????_?????????_?????????_?????????".split("_"),
            weekdaysMin: "??????_??????_??????_??????_??????_??????_??????".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[????????????] LT[-??????]",
                nextDay: "[????????????] LT[-??????]",
                lastDay: "[???????????????] LT[-??????]",
                nextWeek: "[??????????????????] dddd LT[-??????]",
                lastWeek: "[????????????] dddd LT-??????",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return e.replace(/(?????????|?????????|????????????|?????????|??????|??????)(???|???)/, (function(e, a, t) {
                        return "???" === t ? a + "??????" : a + t + "??????"
                    }
                    ))
                },
                past: function(e) {
                    return /(????????????|????????????|???????????????|?????????|?????????)/.test(e) ? e.replace(/(???|???)$/, "?????? ?????????") : /????????????/.test(e) ? e.replace(/????????????$/, "???????????? ?????????") : e
                },
                s: "??????????????????????????? ????????????",
                ss: "%d ????????????",
                m: "????????????",
                mm: "%d ????????????",
                h: "???????????????",
                hh: "%d ???????????????",
                d: "?????????",
                dd: "%d ?????????",
                M: "?????????",
                MM: "%d ?????????",
                y: "????????????",
                yy: "%d ????????????"
            },
            dayOfMonthOrdinalParse: /0|1-??????|??????-\d{1,2}|\d{1,2}-???/,
            ordinal: function(e) {
                return 0 === e ? e : 1 === e ? e + "-??????" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "??????-" + e : e + "-???"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            0: "-????",
            1: "-????",
            2: "-????",
            3: "-????",
            4: "-????",
            5: "-????",
            6: "-????",
            7: "-????",
            8: "-????",
            9: "-????",
            10: "-????",
            20: "-????",
            30: "-????",
            40: "-????",
            50: "-????",
            60: "-????",
            70: "-????",
            80: "-????",
            90: "-????",
            100: "-????"
        };
        e.defineLocale("kk", {
            months: "????????????_??????????_????????????_??????????_??????????_????????????_??????????_??????????_????????????????_??????????_????????????_??????????????????".split("_"),
            monthsShort: "??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdays: "????????????????_????????????????_????????????????_????????????????_????????????????_????????_??????????".split("_"),
            weekdaysShort: "??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdaysMin: "????_????_????_????_????_????_????".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[?????????? ??????????] LT",
                nextDay: "[?????????? ??????????] LT",
                nextWeek: "dddd [??????????] LT",
                lastDay: "[???????? ??????????] LT",
                lastWeek: "[?????????? ??????????????] dddd [??????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ????????????",
                past: "%s ??????????",
                s: "?????????????? ????????????",
                ss: "%d ????????????",
                m: "?????? ??????????",
                mm: "%d ??????????",
                h: "?????? ??????????",
                hh: "%d ??????????",
                d: "?????? ??????",
                dd: "%d ??????",
                M: "?????? ????",
                MM: "%d ????",
                y: "?????? ??????",
                yy: "%d ??????"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(????|????)/,
            ordinal: function(e) {
                return e + (a[e] || a[e % 10] || a[e >= 100 ? 100 : null])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "???",
            2: "???",
            3: "???",
            4: "???",
            5: "???",
            6: "???",
            7: "???",
            8: "???",
            9: "???",
            0: "???"
        }
          , t = {
            "???": "1",
            "???": "2",
            "???": "3",
            "???": "4",
            "???": "5",
            "???": "6",
            "???": "7",
            "???": "8",
            "???": "9",
            "???": "0"
        };
        e.defineLocale("km", {
            months: "????????????_??????????????????_????????????_????????????_????????????_??????????????????_??????????????????_????????????_???????????????_????????????_????????????????????????_????????????".split("_"),
            monthsShort: "????????????_??????????????????_????????????_????????????_????????????_??????????????????_??????????????????_????????????_???????????????_????????????_????????????????????????_????????????".split("_"),
            weekdays: "?????????????????????_???????????????_??????????????????_?????????_??????????????????????????????_???????????????_????????????".split("_"),
            weekdaysShort: "??????_???_???_???_?????????_??????_???".split("_"),
            weekdaysMin: "??????_???_???_???_?????????_??????_???".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /???????????????|???????????????/,
            isPM: function(e) {
                return "???????????????" === e
            },
            meridiem: function(e, a, t) {
                return e < 12 ? "???????????????" : "???????????????"
            },
            calendar: {
                sameDay: "[????????????????????? ????????????] LT",
                nextDay: "[??????????????? ????????????] LT",
                nextWeek: "dddd [????????????] LT",
                lastDay: "[???????????????????????? ????????????] LT",
                lastWeek: "dddd [??????????????????????????????] [????????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s?????????",
                past: "%s?????????",
                s: "??????????????????????????????????????????",
                ss: "%d ??????????????????",
                m: "?????????????????????",
                mm: "%d ????????????",
                h: "?????????????????????",
                hh: "%d ????????????",
                d: "?????????????????????",
                dd: "%d ????????????",
                M: "???????????????",
                MM: "%d ??????",
                y: "????????????????????????",
                yy: "%d ???????????????"
            },
            dayOfMonthOrdinalParse: /??????\d{1,2}/,
            ordinal: "??????%d",
            preparse: function(e) {
                return e.replace(/[??????????????????????????????]/g, (function(e) {
                    return t[e]
                }
                ))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return a[e]
                }
                ))
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "???",
            2: "???",
            3: "???",
            4: "???",
            5: "???",
            6: "???",
            7: "???",
            8: "???",
            9: "???",
            0: "???"
        }
          , t = {
            "???": "1",
            "???": "2",
            "???": "3",
            "???": "4",
            "???": "5",
            "???": "6",
            "???": "7",
            "???": "8",
            "???": "9",
            "???": "0"
        };
        e.defineLocale("kn", {
            months: "???????????????_????????????????????????_??????????????????_?????????????????????_?????????_????????????_???????????????_??????????????????_??????????????????????????????_??????????????????????????????_?????????????????????_????????????????????????".split("_"),
            monthsShort: "??????_???????????????_??????????????????_?????????????????????_?????????_????????????_???????????????_??????????????????_?????????????????????_?????????????????????_????????????_???????????????".split("_"),
            monthsParseExact: !0,
            weekdays: "?????????????????????_????????????????????????_?????????????????????_??????????????????_?????????????????????_????????????????????????_??????????????????".split("_"),
            weekdaysShort: "????????????_???????????????_????????????_?????????_????????????_???????????????_?????????".split("_"),
            weekdaysMin: "??????_????????????_??????_??????_??????_??????_???".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[????????????] LT",
                nextDay: "[????????????] LT",
                nextWeek: "dddd, LT",
                lastDay: "[??????????????????] LT",
                lastWeek: "[??????????????????] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ????????????",
                past: "%s ???????????????",
                s: "??????????????? ?????????????????????",
                ss: "%d ??????????????????????????????",
                m: "???????????? ???????????????",
                mm: "%d ???????????????",
                h: "???????????? ????????????",
                hh: "%d ????????????",
                d: "???????????? ?????????",
                dd: "%d ?????????",
                M: "???????????? ??????????????????",
                MM: "%d ??????????????????",
                y: "???????????? ????????????",
                yy: "%d ????????????"
            },
            preparse: function(e) {
                return e.replace(/[??????????????????????????????]/g, (function(e) {
                    return t[e]
                }
                ))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return a[e]
                }
                ))
            },
            meridiemParse: /??????????????????|????????????????????????|????????????????????????|????????????/,
            meridiemHour: function(e, a) {
                return 12 === e && (e = 0),
                "??????????????????" === a ? e < 4 ? e : e + 12 : "????????????????????????" === a ? e : "????????????????????????" === a ? e >= 10 ? e : e + 12 : "????????????" === a ? e + 12 : void 0
            },
            meridiem: function(e, a, t) {
                return e < 4 ? "??????????????????" : e < 10 ? "????????????????????????" : e < 17 ? "????????????????????????" : e < 20 ? "????????????" : "??????????????????"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(?????????)/,
            ordinal: function(e) {
                return e + "?????????"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ko", {
            months: "1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???".split("_"),
            monthsShort: "1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???".split("_"),
            weekdays: "?????????_?????????_?????????_?????????_?????????_?????????_?????????".split("_"),
            weekdaysShort: "???_???_???_???_???_???_???".split("_"),
            weekdaysMin: "???_???_???_???_???_???_???".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY??? MMMM D???",
                LLL: "YYYY??? MMMM D??? A h:mm",
                LLLL: "YYYY??? MMMM D??? dddd A h:mm",
                l: "YYYY.MM.DD.",
                ll: "YYYY??? MMMM D???",
                lll: "YYYY??? MMMM D??? A h:mm",
                llll: "YYYY??? MMMM D??? dddd A h:mm"
            },
            calendar: {
                sameDay: "?????? LT",
                nextDay: "?????? LT",
                nextWeek: "dddd LT",
                lastDay: "?????? LT",
                lastWeek: "????????? dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ???",
                past: "%s ???",
                s: "??? ???",
                ss: "%d???",
                m: "1???",
                mm: "%d???",
                h: "??? ??????",
                hh: "%d??????",
                d: "??????",
                dd: "%d???",
                M: "??? ???",
                MM: "%d???",
                y: "??? ???",
                yy: "%d???"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(???|???|???)/,
            ordinal: function(e, a) {
                switch (a) {
                case "d":
                case "D":
                case "DDD":
                    return e + "???";
                case "M":
                    return e + "???";
                case "w":
                case "W":
                    return e + "???";
                default:
                    return e
                }
            },
            meridiemParse: /??????|??????/,
            isPM: function(e) {
                return "??????" === e
            },
            meridiem: function(e, a, t) {
                return e < 12 ? "??????" : "??????"
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "??",
            2: "??",
            3: "??",
            4: "??",
            5: "??",
            6: "??",
            7: "??",
            8: "??",
            9: "??",
            0: "??"
        }
          , t = {
            "??": "1",
            "??": "2",
            "??": "3",
            "??": "4",
            "??": "5",
            "??": "6",
            "??": "7",
            "??": "8",
            "??": "9",
            "??": "0"
        }
          , n = ["???????????? ??????????", "??????????", "??????????", "??????????", "??????????", "????????????????", "????????????", "??????", "??????????????", "???????????? ??????????", "???????????? ??????????", "???????????? ??????????"];
        e.defineLocale("ku", {
            months: n,
            monthsShort: n,
            weekdays: "?????????????????????????_??????????????????????_????????????????????_????????????????????????_????????????????????????_?????????????_????????????????".split("_"),
            weekdaysShort: "??????????????????_???????????????_?????????????_?????????????????_?????????????????_?????????????_????????????????".split("_"),
            weekdaysMin: "??_??_??_??_??_??_??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /???????????????|???????????????/,
            isPM: function(e) {
                return /???????????????/.test(e)
            },
            meridiem: function(e, a, t) {
                return e < 12 ? "???????????????" : "???????????????"
            },
            calendar: {
                sameDay: "[????????????? ??????????????] LT",
                nextDay: "[??????????????? ??????????????] LT",
                nextWeek: "dddd [??????????????] LT",
                lastDay: "[?????????? ??????????????] LT",
                lastWeek: "dddd [??????????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "??????? %s",
                past: "%s",
                s: "??????????? ????????????????????",
                ss: "??????????? %d",
                m: "????????? ?????????????",
                mm: "%d ?????????????",
                h: "????????? ??????????????",
                hh: "%d ??????????????",
                d: "????????? ??????",
                dd: "%d ??????",
                M: "????????? ????????",
                MM: "%d ????????",
                y: "????????? ??????",
                yy: "%d ??????"
            },
            preparse: function(e) {
                return e.replace(/[????????????????????]/g, (function(e) {
                    return t[e]
                }
                )).replace(/??/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return a[e]
                }
                )).replace(/,/g, "??")
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            0: "-????",
            1: "-????",
            2: "-????",
            3: "-????",
            4: "-????",
            5: "-????",
            6: "-????",
            7: "-????",
            8: "-????",
            9: "-????",
            10: "-????",
            20: "-????",
            30: "-????",
            40: "-????",
            50: "-????",
            60: "-????",
            70: "-????",
            80: "-????",
            90: "-????",
            100: "-????"
        };
        e.defineLocale("ky", {
            months: "????????????_??????????????_????????_????????????_??????_????????_????????_????????????_????????????????_??????????????_????????????_??????????????".split("_"),
            monthsShort: "??????_??????_????????_??????_??????_????????_????????_??????_??????_??????_??????_??????".split("_"),
            weekdays: "????????????????_????????????????_????????????????_????????????????_????????????????_????????_????????????".split("_"),
            weekdaysShort: "??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdaysMin: "????_????_????_????_????_????_????".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[?????????? ????????] LT",
                nextDay: "[?????????? ????????] LT",
                nextWeek: "dddd [????????] LT",
                lastDay: "[?????????? ????????] LT",
                lastWeek: "[?????????? ??????????????] dddd [????????] [????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ????????????",
                past: "%s ??????????",
                s: "?????????????? ????????????",
                ss: "%d ????????????",
                m: "?????? ??????????",
                mm: "%d ??????????",
                h: "?????? ????????",
                hh: "%d ????????",
                d: "?????? ??????",
                dd: "%d ??????",
                M: "?????? ????",
                MM: "%d ????",
                y: "?????? ??????",
                yy: "%d ??????"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(????|????|????|????)/,
            ordinal: function(e) {
                return e + (a[e] || a[e % 10] || a[e >= 100 ? 100 : null])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        function a(e, a, t, n) {
            var o = {
                m: ["eng Minutt", "enger Minutt"],
                h: ["eng Stonn", "enger Stonn"],
                d: ["een Dag", "engem Dag"],
                M: ["ee Mount", "engem Mount"],
                y: ["ee Joer", "engem Joer"]
            };
            return a ? o[t][0] : o[t][1]
        }
        function t(e) {
            if (e = parseInt(e, 10),
            isNaN(e))
                return !1;
            if (e < 0)
                return !0;
            if (e < 10)
                return 4 <= e && e <= 7;
            if (e < 100) {
                var a = e % 10;
                return t(0 === a ? e / 10 : a)
            }
            if (e < 1e4) {
                for (; e >= 10; )
                    e /= 10;
                return t(e)
            }
            return t(e /= 1e3)
        }
        e.defineLocale("lb", {
            months: "Januar_Februar_M??erz_Abr??ll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonndeg_M??indeg_D??nschdeg_M??ttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
            weekdaysShort: "So._M??._D??._M??._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_M??_D??_M??_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm [Auer]",
                LTS: "H:mm:ss [Auer]",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm [Auer]",
                LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
            },
            calendar: {
                sameDay: "[Haut um] LT",
                sameElse: "L",
                nextDay: "[Muer um] LT",
                nextWeek: "dddd [um] LT",
                lastDay: "[G??schter um] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 2:
                    case 4:
                        return "[Leschten] dddd [um] LT";
                    default:
                        return "[Leschte] dddd [um] LT"
                    }
                }
            },
            relativeTime: {
                future: function(e) {
                    return t(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
                },
                past: function(e) {
                    return t(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
                },
                s: "e puer Sekonnen",
                ss: "%d Sekonnen",
                m: a,
                mm: "%d Minutten",
                h: a,
                hh: "%d Stonnen",
                d: a,
                dd: "%d Deeg",
                M: a,
                MM: "%d M??int",
                y: a,
                yy: "%d Joer"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("lo", {
            months: "??????????????????_???????????????_????????????_????????????_?????????????????????_??????????????????_?????????????????????_???????????????_???????????????_????????????_???????????????_???????????????".split("_"),
            monthsShort: "??????????????????_???????????????_????????????_????????????_?????????????????????_??????????????????_?????????????????????_???????????????_???????????????_????????????_???????????????_???????????????".split("_"),
            weekdays: "???????????????_?????????_??????????????????_?????????_???????????????_?????????_????????????".split("_"),
            weekdaysShort: "?????????_?????????_??????????????????_?????????_???????????????_?????????_????????????".split("_"),
            weekdaysMin: "???_???_??????_???_??????_??????_???".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "?????????dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /????????????????????????|??????????????????/,
            isPM: function(e) {
                return "??????????????????" === e
            },
            meridiem: function(e, a, t) {
                return e < 12 ? "????????????????????????" : "??????????????????"
            },
            calendar: {
                sameDay: "[??????????????????????????????] LT",
                nextDay: "[?????????????????????????????????] LT",
                nextWeek: "[?????????]dddd[?????????????????????] LT",
                lastDay: "[???????????????????????????????????????] LT",
                lastWeek: "[?????????]dddd[?????????????????????????????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "????????? %s",
                past: "%s??????????????????",
                s: "????????????????????????????????????????????????",
                ss: "%d ??????????????????",
                m: "1 ????????????",
                mm: "%d ????????????",
                h: "1 ?????????????????????",
                hh: "%d ?????????????????????",
                d: "1 ?????????",
                dd: "%d ?????????",
                M: "1 ???????????????",
                MM: "%d ???????????????",
                y: "1 ??????",
                yy: "%d ??????"
            },
            dayOfMonthOrdinalParse: /(?????????)\d{1,2}/,
            ordinal: function(e) {
                return "?????????" + e
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            ss: "sekund??_sekund??i??_sekundes",
            m: "minut??_minut??s_minut??",
            mm: "minut??s_minu??i??_minutes",
            h: "valanda_valandos_valand??",
            hh: "valandos_valand??_valandas",
            d: "diena_dienos_dien??",
            dd: "dienos_dien??_dienas",
            M: "m??nuo_m??nesio_m??nes??",
            MM: "m??nesiai_m??nesi??_m??nesius",
            y: "metai_met??_metus",
            yy: "metai_met??_metus"
        };
        function t(e, a, t, n) {
            return a ? o(t)[0] : n ? o(t)[1] : o(t)[2]
        }
        function n(e) {
            return e % 10 == 0 || e > 10 && e < 20
        }
        function o(e) {
            return a[e].split("_")
        }
        function i(e, a, i, r) {
            var s = e + " ";
            return 1 === e ? s + t(0, a, i[0], r) : a ? s + (n(e) ? o(i)[1] : o(i)[0]) : r ? s + o(i)[1] : s + (n(e) ? o(i)[1] : o(i)[2])
        }
        e.defineLocale("lt", {
            months: {
                format: "sausio_vasario_kovo_baland??io_gegu????s_bir??elio_liepos_rugpj????io_rugs??jo_spalio_lapkri??io_gruod??io".split("_"),
                standalone: "sausis_vasaris_kovas_balandis_gegu????_bir??elis_liepa_rugpj??tis_rugs??jis_spalis_lapkritis_gruodis".split("_"),
                isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
            },
            monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
            weekdays: {
                format: "sekmadien??_pirmadien??_antradien??_tre??iadien??_ketvirtadien??_penktadien??_??e??tadien??".split("_"),
                standalone: "sekmadienis_pirmadienis_antradienis_tre??iadienis_ketvirtadienis_penktadienis_??e??tadienis".split("_"),
                isFormat: /dddd HH:mm/
            },
            weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_??e??".split("_"),
            weekdaysMin: "S_P_A_T_K_Pn_??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY [m.] MMMM D [d.]",
                LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                l: "YYYY-MM-DD",
                ll: "YYYY [m.] MMMM D [d.]",
                lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
            },
            calendar: {
                sameDay: "[??iandien] LT",
                nextDay: "[Rytoj] LT",
                nextWeek: "dddd LT",
                lastDay: "[Vakar] LT",
                lastWeek: "[Pra??jus??] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "po %s",
                past: "prie?? %s",
                s: function(e, a, t, n) {
                    return a ? "kelios sekund??s" : n ? "keli?? sekund??i??" : "kelias sekundes"
                },
                ss: i,
                m: t,
                mm: i,
                h: t,
                hh: i,
                d: t,
                dd: i,
                M: t,
                MM: i,
                y: t,
                yy: i
            },
            dayOfMonthOrdinalParse: /\d{1,2}-oji/,
            ordinal: function(e) {
                return e + "-oji"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            ss: "sekundes_sekund??m_sekunde_sekundes".split("_"),
            m: "min??tes_min??t??m_min??te_min??tes".split("_"),
            mm: "min??tes_min??t??m_min??te_min??tes".split("_"),
            h: "stundas_stund??m_stunda_stundas".split("_"),
            hh: "stundas_stund??m_stunda_stundas".split("_"),
            d: "dienas_dien??m_diena_dienas".split("_"),
            dd: "dienas_dien??m_diena_dienas".split("_"),
            M: "m??ne??a_m??ne??iem_m??nesis_m??ne??i".split("_"),
            MM: "m??ne??a_m??ne??iem_m??nesis_m??ne??i".split("_"),
            y: "gada_gadiem_gads_gadi".split("_"),
            yy: "gada_gadiem_gads_gadi".split("_")
        };
        function t(e, a, t) {
            return t ? a % 10 == 1 && a % 100 != 11 ? e[2] : e[3] : a % 10 == 1 && a % 100 != 11 ? e[0] : e[1]
        }
        function n(e, n, o) {
            return e + " " + t(a[o], e, n)
        }
        function o(e, n, o) {
            return t(a[o], e, n)
        }
        e.defineLocale("lv", {
            months: "janv??ris_febru??ris_marts_apr??lis_maijs_j??nijs_j??lijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_j??n_j??l_aug_sep_okt_nov_dec".split("_"),
            weekdays: "sv??tdiena_pirmdiena_otrdiena_tre??diena_ceturtdiena_piektdiena_sestdiena".split("_"),
            weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY.",
                LL: "YYYY. [gada] D. MMMM",
                LLL: "YYYY. [gada] D. MMMM, HH:mm",
                LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
            },
            calendar: {
                sameDay: "[??odien pulksten] LT",
                nextDay: "[R??t pulksten] LT",
                nextWeek: "dddd [pulksten] LT",
                lastDay: "[Vakar pulksten] LT",
                lastWeek: "[Pag??ju????] dddd [pulksten] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "p??c %s",
                past: "pirms %s",
                s: function(e, a) {
                    return a ? "da??as sekundes" : "da????m sekund??m"
                },
                ss: n,
                m: o,
                mm: n,
                h: o,
                hh: n,
                d: o,
                dd: n,
                M: o,
                MM: n,
                y: o,
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            words: {
                ss: ["sekund", "sekunda", "sekundi"],
                m: ["jedan minut", "jednog minuta"],
                mm: ["minut", "minuta", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mjesec", "mjeseca", "mjeseci"],
                yy: ["godina", "godine", "godina"]
            },
            correctGrammaticalCase: function(e, a) {
                return 1 === e ? a[0] : e >= 2 && e <= 4 ? a[1] : a[2]
            },
            translate: function(e, t, n) {
                var o = a.words[n];
                return 1 === n.length ? t ? o[0] : o[1] : e + " " + a.correctGrammaticalCase(e, o)
            }
        };
        e.defineLocale("me", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_??etvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._??et._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_??e_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sjutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[u] [nedjelju] [u] LT";
                    case 3:
                        return "[u] [srijedu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[ju??e u] LT",
                lastWeek: function() {
                    return ["[pro??le] [nedjelje] [u] LT", "[pro??log] [ponedjeljka] [u] LT", "[pro??log] [utorka] [u] LT", "[pro??le] [srijede] [u] LT", "[pro??log] [??etvrtka] [u] LT", "[pro??log] [petka] [u] LT", "[pro??le] [subote] [u] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "nekoliko sekundi",
                ss: a.translate,
                m: a.translate,
                mm: a.translate,
                h: a.translate,
                hh: a.translate,
                d: "dan",
                dd: a.translate,
                M: "mjesec",
                MM: a.translate,
                y: "godinu",
                yy: a.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("mi", {
            months: "Kohi-t??te_Hui-tanguru_Pout??-te-rangi_Paenga-wh??wh??_Haratua_Pipiri_H??ngoingoi_Here-turi-k??k??_Mahuru_Whiringa-??-nuku_Whiringa-??-rangi_Hakihea".split("_"),
            monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_H??ngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
            monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
            weekdays: "R??tapu_Mane_T??rei_Wenerei_T??ite_Paraire_H??tarei".split("_"),
            weekdaysShort: "Ta_Ma_T??_We_T??i_Pa_H??".split("_"),
            weekdaysMin: "Ta_Ma_T??_We_T??i_Pa_H??".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [i] HH:mm",
                LLLL: "dddd, D MMMM YYYY [i] HH:mm"
            },
            calendar: {
                sameDay: "[i teie mahana, i] LT",
                nextDay: "[apopo i] LT",
                nextWeek: "dddd [i] LT",
                lastDay: "[inanahi i] LT",
                lastWeek: "dddd [whakamutunga i] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "i roto i %s",
                past: "%s i mua",
                s: "te h??kona ruarua",
                ss: "%d h??kona",
                m: "he meneti",
                mm: "%d meneti",
                h: "te haora",
                hh: "%d haora",
                d: "he ra",
                dd: "%d ra",
                M: "he marama",
                MM: "%d marama",
                y: "he tau",
                yy: "%d tau"
            },
            dayOfMonthOrdinalParse: /\d{1,2}??/,
            ordinal: "%d??",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("mk", {
            months: "??????????????_????????????????_????????_??????????_??????_????????_????????_????????????_??????????????????_????????????????_??????????????_????????????????".split("_"),
            monthsShort: "??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdays: "????????????_????????????????????_??????????????_??????????_????????????????_??????????_????????????".split("_"),
            weekdaysShort: "??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdaysMin: "??e_??o_????_????_????_????_??a".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[?????????? ????] LT",
                nextDay: "[???????? ????] LT",
                nextWeek: "[????] dddd [????] LT",
                lastDay: "[?????????? ????] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                    case 3:
                    case 6:
                        return "[????????????????????] dddd [????] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[????????????????????] dddd [????] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "???? %s",
                past: "???????? %s",
                s: "?????????????? ??????????????",
                ss: "%d ??????????????",
                m: "???????? ????????????",
                mm: "%d ????????????",
                h: "???????? ??????",
                hh: "%d ????????",
                d: "???????? ??????",
                dd: "%d ????????",
                M: "???????? ??????????",
                MM: "%d ????????????",
                y: "???????? ????????????",
                yy: "%d ????????????"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(????|????|????|????|????|????)/,
            ordinal: function(e) {
                var a = e % 10
                  , t = e % 100;
                return 0 === e ? e + "-????" : 0 === t ? e + "-????" : t > 10 && t < 20 ? e + "-????" : 1 === a ? e + "-????" : 2 === a ? e + "-????" : 7 === a || 8 === a ? e + "-????" : e + "-????"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ml", {
            months: "??????????????????_???????????????????????????_?????????????????????_??????????????????_????????????_?????????_????????????_????????????????????????_??????????????????????????????_?????????????????????_???????????????_??????????????????".split("_"),
            monthsShort: "?????????._??????????????????._?????????._???????????????._????????????_?????????_????????????._??????._?????????????????????._???????????????._?????????._????????????.".split("_"),
            monthsParseExact: !0,
            weekdays: "????????????????????????_??????????????????????????????_???????????????????????????_????????????????????????_???????????????????????????_?????????????????????????????????_????????????????????????".split("_"),
            weekdaysShort: "????????????_??????????????????_???????????????_????????????_??????????????????_??????????????????_?????????".split("_"),
            weekdaysMin: "??????_??????_??????_??????_????????????_??????_???".split("_"),
            longDateFormat: {
                LT: "A h:mm -??????",
                LTS: "A h:mm:ss -??????",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm -??????",
                LLLL: "dddd, D MMMM YYYY, A h:mm -??????"
            },
            calendar: {
                sameDay: "[???????????????] LT",
                nextDay: "[????????????] LT",
                nextWeek: "dddd, LT",
                lastDay: "[??????????????????] LT",
                lastWeek: "[??????????????????] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ?????????????????????",
                past: "%s ???????????????",
                s: "????????? ???????????????????????????",
                ss: "%d ????????????????????????",
                m: "????????? ????????????????????????",
                mm: "%d ????????????????????????",
                h: "????????? ????????????????????????",
                hh: "%d ????????????????????????",
                d: "????????? ???????????????",
                dd: "%d ???????????????",
                M: "????????? ????????????",
                MM: "%d ????????????",
                y: "????????? ????????????",
                yy: "%d ????????????"
            },
            meridiemParse: /??????????????????|??????????????????|???????????? ?????????????????????|??????????????????????????????|??????????????????/i,
            meridiemHour: function(e, a) {
                return 12 === e && (e = 0),
                "??????????????????" === a && e >= 4 || "???????????? ?????????????????????" === a || "??????????????????????????????" === a ? e + 12 : e
            },
            meridiem: function(e, a, t) {
                return e < 4 ? "??????????????????" : e < 12 ? "??????????????????" : e < 17 ? "???????????? ?????????????????????" : e < 20 ? "??????????????????????????????" : "??????????????????"
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        function a(e, a, t, n) {
            switch (t) {
            case "s":
                return a ? "???????????? ????????????" : "???????????? ????????????????";
            case "ss":
                return e + (a ? " ????????????" : " ????????????????");
            case "m":
            case "mm":
                return e + (a ? " ??????????" : " ??????????????");
            case "h":
            case "hh":
                return e + (a ? " ??????" : " ????????????");
            case "d":
            case "dd":
                return e + (a ? " ????????" : " ????????????");
            case "M":
            case "MM":
                return e + (a ? " ??????" : " ??????????");
            case "y":
            case "yy":
                return e + (a ? " ??????" : " ????????????");
            default:
                return e
            }
        }
        e.defineLocale("mn", {
            months: "?????????????????? ??????_???????????????????? ??????_?????????????????????? ??????_?????????????????????? ??????_?????????????????? ??????_?????????????????????? ??????_?????????????????? ??????_???????????????????? ??????_???????????????? ??????_???????????????????? ??????_?????????? ?????????????????? ??????_?????????? ???????????????????? ??????".split("_"),
            monthsShort: "1 ??????_2 ??????_3 ??????_4 ??????_5 ??????_6 ??????_7 ??????_8 ??????_9 ??????_10 ??????_11 ??????_12 ??????".split("_"),
            monthsParseExact: !0,
            weekdays: "??????_??????????_????????????_????????????_??????????_????????????_??????????".split("_"),
            weekdaysShort: "??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdaysMin: "????_????_????_????_????_????_????".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY ?????? MMMM???? D",
                LLL: "YYYY ?????? MMMM???? D HH:mm",
                LLLL: "dddd, YYYY ?????? MMMM???? D HH:mm"
            },
            meridiemParse: /????|????/i,
            isPM: function(e) {
                return "????" === e
            },
            meridiem: function(e, a, t) {
                return e < 12 ? "????" : "????"
            },
            calendar: {
                sameDay: "[??????????????] LT",
                nextDay: "[??????????????] LT",
                nextWeek: "[????????] dddd LT",
                lastDay: "[??????????????] LT",
                lastWeek: "[????????????????] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ??????????",
                past: "%s ????????",
                s: a,
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: a,
                dd: a,
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2} ????????/,
            ordinal: function(e, a) {
                switch (a) {
                case "d":
                case "D":
                case "DDD":
                    return e + " ????????";
                default:
                    return e
                }
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "???",
            2: "???",
            3: "???",
            4: "???",
            5: "???",
            6: "???",
            7: "???",
            8: "???",
            9: "???",
            0: "???"
        }
          , t = {
            "???": "1",
            "???": "2",
            "???": "3",
            "???": "4",
            "???": "5",
            "???": "6",
            "???": "7",
            "???": "8",
            "???": "9",
            "???": "0"
        };
        function n(e, a, t, n) {
            var o = "";
            if (a)
                switch (t) {
                case "s":
                    o = "???????????? ???????????????";
                    break;
                case "ss":
                    o = "%d ???????????????";
                    break;
                case "m":
                    o = "?????? ???????????????";
                    break;
                case "mm":
                    o = "%d ??????????????????";
                    break;
                case "h":
                    o = "?????? ?????????";
                    break;
                case "hh":
                    o = "%d ?????????";
                    break;
                case "d":
                    o = "?????? ????????????";
                    break;
                case "dd":
                    o = "%d ????????????";
                    break;
                case "M":
                    o = "?????? ???????????????";
                    break;
                case "MM":
                    o = "%d ???????????????";
                    break;
                case "y":
                    o = "?????? ????????????";
                    break;
                case "yy":
                    o = "%d ???????????????"
                }
            else
                switch (t) {
                case "s":
                    o = "???????????? ?????????????????????";
                    break;
                case "ss":
                    o = "%d ?????????????????????";
                    break;
                case "m":
                    o = "????????? ??????????????????";
                    break;
                case "mm":
                    o = "%d ?????????????????????";
                    break;
                case "h":
                    o = "????????? ????????????";
                    break;
                case "hh":
                    o = "%d ???????????????";
                    break;
                case "d":
                    o = "????????? ???????????????";
                    break;
                case "dd":
                    o = "%d ??????????????????";
                    break;
                case "M":
                    o = "????????? ?????????????????????";
                    break;
                case "MM":
                    o = "%d ????????????????????????";
                    break;
                case "y":
                    o = "????????? ???????????????";
                    break;
                case "yy":
                    o = "%d ??????????????????"
                }
            return o.replace(/%d/i, e)
        }
        e.defineLocale("mr", {
            months: "????????????????????????_??????????????????????????????_???????????????_??????????????????_??????_?????????_????????????_???????????????_????????????????????????_?????????????????????_???????????????????????????_?????????????????????".split("_"),
            monthsShort: "????????????._??????????????????._???????????????._???????????????._??????._?????????._????????????._??????._??????????????????._???????????????._?????????????????????._???????????????.".split("_"),
            monthsParseExact: !0,
            weekdays: "??????????????????_??????????????????_?????????????????????_??????????????????_?????????????????????_????????????????????????_??????????????????".split("_"),
            weekdaysShort: "?????????_?????????_????????????_?????????_????????????_???????????????_?????????".split("_"),
            weekdaysMin: "???_??????_??????_??????_??????_??????_???".split("_"),
            longDateFormat: {
                LT: "A h:mm ???????????????",
                LTS: "A h:mm:ss ???????????????",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm ???????????????",
                LLLL: "dddd, D MMMM YYYY, A h:mm ???????????????"
            },
            calendar: {
                sameDay: "[??????] LT",
                nextDay: "[???????????????] LT",
                nextWeek: "dddd, LT",
                lastDay: "[?????????] LT",
                lastWeek: "[???????????????] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s???????????????",
                past: "%s??????????????????",
                s: n,
                ss: n,
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            preparse: function(e) {
                return e.replace(/[??????????????????????????????]/g, (function(e) {
                    return t[e]
                }
                ))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return a[e]
                }
                ))
            },
            meridiemParse: /???????????????|???????????????|??????????????????|????????????????????????|??????????????????/,
            meridiemHour: function(e, a) {
                return 12 === e && (e = 0),
                "???????????????" === a || "???????????????" === a ? e : "??????????????????" === a || "????????????????????????" === a || "??????????????????" === a ? e >= 12 ? e : e + 12 : void 0
            },
            meridiem: function(e, a, t) {
                return e >= 0 && e < 6 ? "???????????????" : e < 12 ? "???????????????" : e < 17 ? "??????????????????" : e < 20 ? "????????????????????????" : "??????????????????"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ms", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function(e, a) {
                return 12 === e && (e = 0),
                "pagi" === a ? e : "tengahari" === a ? e >= 11 ? e : e + 12 : "petang" === a || "malam" === a ? e + 12 : void 0
            },
            meridiem: function(e, a, t) {
                return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ms-my", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function(e, a) {
                return 12 === e && (e = 0),
                "pagi" === a ? e : "tengahari" === a ? e >= 11 ? e : e + 12 : "petang" === a || "malam" === a ? e + 12 : void 0
            },
            meridiem: function(e, a, t) {
                return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("mt", {
            months: "Jannar_Frar_Marzu_April_Mejju_??unju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Di??embru".split("_"),
            monthsShort: "Jan_Fra_Mar_Apr_Mej_??un_Lul_Aww_Set_Ott_Nov_Di??".split("_"),
            weekdays: "Il-??add_It-Tnejn_It-Tlieta_L-Erbg??a_Il-??amis_Il-??img??a_Is-Sibt".split("_"),
            weekdaysShort: "??ad_Tne_Tli_Erb_??am_??im_Sib".split("_"),
            weekdaysMin: "??a_Tn_Tl_Er_??a_??i_Si".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Illum fil-]LT",
                nextDay: "[G??ada fil-]LT",
                nextWeek: "dddd [fil-]LT",
                lastDay: "[Il-biera?? fil-]LT",
                lastWeek: "dddd [li g??adda] [fil-]LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "f??? %s",
                past: "%s ilu",
                s: "ftit sekondi",
                ss: "%d sekondi",
                m: "minuta",
                mm: "%d minuti",
                h: "sieg??a",
                hh: "%d sieg??at",
                d: "??urnata",
                dd: "%d ??ranet",
                M: "xahar",
                MM: "%d xhur",
                y: "sena",
                yy: "%d sni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}??/,
            ordinal: "%d??",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "???",
            2: "???",
            3: "???",
            4: "???",
            5: "???",
            6: "???",
            7: "???",
            8: "???",
            9: "???",
            0: "???"
        }
          , t = {
            "???": "1",
            "???": "2",
            "???": "3",
            "???": "4",
            "???": "5",
            "???": "6",
            "???": "7",
            "???": "8",
            "???": "9",
            "???": "0"
        };
        e.defineLocale("my", {
            months: "????????????????????????_??????????????????????????????_?????????_????????????_??????_????????????_?????????????????????_??????????????????_????????????????????????_??????????????????????????????_????????????????????????_?????????????????????".split("_"),
            monthsShort: "?????????_??????_?????????_?????????_??????_????????????_???????????????_??????_?????????_???????????????_?????????_??????".split("_"),
            weekdays: "???????????????????????????_?????????????????????_??????????????????_????????????????????????_????????????????????????_??????????????????_?????????".split("_"),
            weekdaysShort: "?????????_??????_??????_?????????_?????????_?????????_??????".split("_"),
            weekdaysMin: "?????????_??????_??????_?????????_?????????_?????????_??????".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[?????????.] LT [?????????]",
                nextDay: "[????????????????????????] LT [?????????]",
                nextWeek: "dddd LT [?????????]",
                lastDay: "[?????????.???] LT [?????????]",
                lastWeek: "[??????????????????????????????] dddd LT [?????????]",
                sameElse: "L"
            },
            relativeTime: {
                future: "?????????????????? %s ?????????",
                past: "?????????????????????????????? %s ???",
                s: "??????????????????.????????????????????????",
                ss: "%d ?????????????????????",
                m: "????????????????????????",
                mm: "%d ???????????????",
                h: "?????????????????????",
                hh: "%d ????????????",
                d: "??????????????????",
                dd: "%d ?????????",
                M: "????????????",
                MM: "%d ???",
                y: "?????????????????????",
                yy: "%d ????????????"
            },
            preparse: function(e) {
                return e.replace(/[??????????????????????????????]/g, (function(e) {
                    return t[e]
                }
                ))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return a[e]
                }
                ))
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("nb", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "s??ndag_mandag_tirsdag_onsdag_torsdag_fredag_l??rdag".split("_"),
            weekdaysShort: "s??._ma._ti._on._to._fr._l??.".split("_"),
            weekdaysMin: "s??_ma_ti_on_to_fr_l??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[i g??r kl.] LT",
                lastWeek: "[forrige] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "noen sekunder",
                ss: "%d sekunder",
                m: "ett minutt",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dager",
                w: "en uke",
                ww: "%d uker",
                M: "en m??ned",
                MM: "%d m??neder",
                y: "ett ??r",
                yy: "%d ??r"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "???",
            2: "???",
            3: "???",
            4: "???",
            5: "???",
            6: "???",
            7: "???",
            8: "???",
            9: "???",
            0: "???"
        }
          , t = {
            "???": "1",
            "???": "2",
            "???": "3",
            "???": "4",
            "???": "5",
            "???": "6",
            "???": "7",
            "???": "8",
            "???": "9",
            "???": "0"
        };
        e.defineLocale("ne", {
            months: "???????????????_???????????????????????????_???????????????_??????????????????_??????_?????????_???????????????_???????????????_??????????????????????????????_?????????????????????_????????????????????????_????????????????????????".split("_"),
            monthsShort: "??????._??????????????????._???????????????_???????????????._??????_?????????_???????????????._??????._???????????????._???????????????._????????????._????????????.".split("_"),
            monthsParseExact: !0,
            weekdays: "??????????????????_??????????????????_????????????????????????_??????????????????_?????????????????????_????????????????????????_??????????????????".split("_"),
            weekdaysShort: "?????????._?????????._???????????????._?????????._????????????._???????????????._?????????.".split("_"),
            weekdaysMin: "???._??????._??????._??????._??????._??????._???.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "A?????? h:mm ?????????",
                LTS: "A?????? h:mm:ss ?????????",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A?????? h:mm ?????????",
                LLLL: "dddd, D MMMM YYYY, A?????? h:mm ?????????"
            },
            preparse: function(e) {
                return e.replace(/[??????????????????????????????]/g, (function(e) {
                    return t[e]
                }
                ))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return a[e]
                }
                ))
            },
            meridiemParse: /????????????|???????????????|??????????????????|????????????/,
            meridiemHour: function(e, a) {
                return 12 === e && (e = 0),
                "????????????" === a ? e < 4 ? e : e + 12 : "???????????????" === a ? e : "??????????????????" === a ? e >= 10 ? e : e + 12 : "????????????" === a ? e + 12 : void 0
            },
            meridiem: function(e, a, t) {
                return e < 3 ? "????????????" : e < 12 ? "???????????????" : e < 16 ? "??????????????????" : e < 20 ? "????????????" : "????????????"
            },
            calendar: {
                sameDay: "[??????] LT",
                nextDay: "[????????????] LT",
                nextWeek: "[???????????????] dddd[,] LT",
                lastDay: "[????????????] LT",
                lastWeek: "[????????????] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s??????",
                past: "%s ???????????????",
                s: "???????????? ????????????",
                ss: "%d ?????????????????????",
                m: "?????? ???????????????",
                mm: "%d ???????????????",
                h: "?????? ???????????????",
                hh: "%d ???????????????",
                d: "?????? ?????????",
                dd: "%d ?????????",
                M: "?????? ???????????????",
                MM: "%d ???????????????",
                y: "?????? ????????????",
                yy: "%d ????????????"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")
          , t = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_")
          , n = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i]
          , o = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale("nl", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function(e, n) {
                return e ? /-MMM-/.test(n) ? t[e.month()] : a[e.month()] : a
            },
            monthsRegex: o,
            monthsShortRegex: o,
            monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "????n minuut",
                mm: "%d minuten",
                h: "????n uur",
                hh: "%d uur",
                d: "????n dag",
                dd: "%d dagen",
                w: "????n week",
                ww: "%d weken",
                M: "????n maand",
                MM: "%d maanden",
                y: "????n jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")
          , t = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_")
          , n = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i]
          , o = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale("nl-be", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function(e, n) {
                return e ? /-MMM-/.test(n) ? t[e.month()] : a[e.month()] : a
            },
            monthsRegex: o,
            monthsShortRegex: o,
            monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "????n minuut",
                mm: "%d minuten",
                h: "????n uur",
                hh: "%d uur",
                d: "????n dag",
                dd: "%d dagen",
                M: "????n maand",
                MM: "%d maanden",
                y: "????n jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("nn", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "sundag_m??ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
            weekdaysShort: "su._m??._ty._on._to._fr._lau.".split("_"),
            weekdaysMin: "su_m??_ty_on_to_fr_la".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[I dag klokka] LT",
                nextDay: "[I morgon klokka] LT",
                nextWeek: "dddd [klokka] LT",
                lastDay: "[I g??r klokka] LT",
                lastWeek: "[F??reg??ande] dddd [klokka] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s sidan",
                s: "nokre sekund",
                ss: "%d sekund",
                m: "eit minutt",
                mm: "%d minutt",
                h: "ein time",
                hh: "%d timar",
                d: "ein dag",
                dd: "%d dagar",
                w: "ei veke",
                ww: "%d veker",
                M: "ein m??nad",
                MM: "%d m??nader",
                y: "eit ??r",
                yy: "%d ??r"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("oc-lnc", {
            months: {
                standalone: "geni??r_febri??r_mar??_abril_mai_junh_julhet_agost_setembre_oct??bre_novembre_decembre".split("_"),
                format: "de geni??r_de febri??r_de mar??_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'oct??bre_de novembre_de decembre".split("_"),
                isFormat: /D[oD]?(\s)+MMMM/
            },
            monthsShort: "gen._febr._mar??_abr._mai_junh_julh._ago._set._oct._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimenge_diluns_dimars_dim??cres_dij??us_divendres_dissabte".split("_"),
            weekdaysShort: "dg._dl._dm._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "dg_dl_dm_dc_dj_dv_ds".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [de] YYYY",
                ll: "D MMM YYYY",
                LLL: "D MMMM [de] YYYY [a] H:mm",
                lll: "D MMM YYYY, H:mm",
                LLLL: "dddd D MMMM [de] YYYY [a] H:mm",
                llll: "ddd D MMM YYYY, H:mm"
            },
            calendar: {
                sameDay: "[u??i a] LT",
                nextDay: "[deman a] LT",
                nextWeek: "dddd [a] LT",
                lastDay: "[i??r a] LT",
                lastWeek: "dddd [passat a] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "d'aqu?? %s",
                past: "fa %s",
                s: "unas segondas",
                ss: "%d segondas",
                m: "una minuta",
                mm: "%d minutas",
                h: "una ora",
                hh: "%d oras",
                d: "un jorn",
                dd: "%d jorns",
                M: "un mes",
                MM: "%d meses",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|??|a)/,
            ordinal: function(e, a) {
                var t = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "??";
                return "w" !== a && "W" !== a || (t = "a"),
                e + t
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "???",
            2: "???",
            3: "???",
            4: "???",
            5: "???",
            6: "???",
            7: "???",
            8: "???",
            9: "???",
            0: "???"
        }
          , t = {
            "???": "1",
            "???": "2",
            "???": "3",
            "???": "4",
            "???": "5",
            "???": "6",
            "???": "7",
            "???": "8",
            "???": "9",
            "???": "0"
        };
        e.defineLocale("pa-in", {
            months: "???????????????_??????????????????_????????????_??????????????????_??????_?????????_???????????????_????????????_???????????????_??????????????????_???????????????_???????????????".split("_"),
            monthsShort: "???????????????_??????????????????_????????????_??????????????????_??????_?????????_???????????????_????????????_???????????????_??????????????????_???????????????_???????????????".split("_"),
            weekdays: "???????????????_??????????????????_?????????????????????_??????????????????_??????????????????_???????????????????????????_???????????????????????????".split("_"),
            weekdaysShort: "??????_?????????_????????????_?????????_?????????_???????????????_????????????".split("_"),
            weekdaysMin: "??????_?????????_????????????_?????????_?????????_???????????????_????????????".split("_"),
            longDateFormat: {
                LT: "A h:mm ?????????",
                LTS: "A h:mm:ss ?????????",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm ?????????",
                LLLL: "dddd, D MMMM YYYY, A h:mm ?????????"
            },
            calendar: {
                sameDay: "[??????] LT",
                nextDay: "[??????] LT",
                nextWeek: "[????????????] dddd, LT",
                lastDay: "[??????] LT",
                lastWeek: "[???????????????] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ????????????",
                past: "%s ???????????????",
                s: "????????? ???????????????",
                ss: "%d ???????????????",
                m: "?????? ????????????",
                mm: "%d ????????????",
                h: "????????? ????????????",
                hh: "%d ????????????",
                d: "????????? ?????????",
                dd: "%d ?????????",
                M: "????????? ???????????????",
                MM: "%d ???????????????",
                y: "????????? ?????????",
                yy: "%d ?????????"
            },
            preparse: function(e) {
                return e.replace(/[??????????????????????????????]/g, (function(e) {
                    return t[e]
                }
                ))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return a[e]
                }
                ))
            },
            meridiemParse: /?????????|????????????|??????????????????|????????????/,
            meridiemHour: function(e, a) {
                return 12 === e && (e = 0),
                "?????????" === a ? e < 4 ? e : e + 12 : "????????????" === a ? e : "??????????????????" === a ? e >= 10 ? e : e + 12 : "????????????" === a ? e + 12 : void 0
            },
            meridiem: function(e, a, t) {
                return e < 4 ? "?????????" : e < 10 ? "????????????" : e < 17 ? "??????????????????" : e < 20 ? "????????????" : "?????????"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = "stycze??_luty_marzec_kwiecie??_maj_czerwiec_lipiec_sierpie??_wrzesie??_pa??dziernik_listopad_grudzie??".split("_")
          , t = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze??nia_pa??dziernika_listopada_grudnia".split("_")
          , n = [/^sty/i, /^lut/i, /^mar/i, /^kwi/i, /^maj/i, /^cze/i, /^lip/i, /^sie/i, /^wrz/i, /^pa??/i, /^lis/i, /^gru/i];
        function o(e) {
            return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
        }
        function i(e, a, t) {
            var n = e + " ";
            switch (t) {
            case "ss":
                return n + (o(e) ? "sekundy" : "sekund");
            case "m":
                return a ? "minuta" : "minut??";
            case "mm":
                return n + (o(e) ? "minuty" : "minut");
            case "h":
                return a ? "godzina" : "godzin??";
            case "hh":
                return n + (o(e) ? "godziny" : "godzin");
            case "ww":
                return n + (o(e) ? "tygodnie" : "tygodni");
            case "MM":
                return n + (o(e) ? "miesi??ce" : "miesi??cy");
            case "yy":
                return n + (o(e) ? "lata" : "lat")
            }
        }
        e.defineLocale("pl", {
            months: function(e, n) {
                return e ? /D MMMM/.test(n) ? t[e.month()] : a[e.month()] : a
            },
            monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa??_lis_gru".split("_"),
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: "niedziela_poniedzia??ek_wtorek_??roda_czwartek_pi??tek_sobota".split("_"),
            weekdaysShort: "ndz_pon_wt_??r_czw_pt_sob".split("_"),
            weekdaysMin: "Nd_Pn_Wt_??r_Cz_Pt_So".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Dzi?? o] LT",
                nextDay: "[Jutro o] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[W niedziel?? o] LT";
                    case 2:
                        return "[We wtorek o] LT";
                    case 3:
                        return "[W ??rod?? o] LT";
                    case 6:
                        return "[W sobot?? o] LT";
                    default:
                        return "[W] dddd [o] LT"
                    }
                },
                lastDay: "[Wczoraj o] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[W zesz???? niedziel?? o] LT";
                    case 3:
                        return "[W zesz???? ??rod?? o] LT";
                    case 6:
                        return "[W zesz???? sobot?? o] LT";
                    default:
                        return "[W zesz??y] dddd [o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "%s temu",
                s: "kilka sekund",
                ss: i,
                m: i,
                mm: i,
                h: i,
                hh: i,
                d: "1 dzie??",
                dd: "%d dni",
                w: "tydzie??",
                ww: i,
                M: "miesi??c",
                MM: i,
                y: "rok",
                yy: i
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("pt", {
            months: "janeiro_fevereiro_mar??o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
            monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
            weekdays: "Domingo_Segunda-feira_Ter??a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S??bado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S??b".split("_"),
            weekdaysMin: "Do_2??_3??_4??_5??_6??_S??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hoje ??s] LT",
                nextDay: "[Amanh?? ??s] LT",
                nextWeek: "dddd [??s] LT",
                lastDay: "[Ontem ??s] LT",
                lastWeek: function() {
                    return 0 === this.day() || 6 === this.day() ? "[??ltimo] dddd [??s] LT" : "[??ltima] dddd [??s] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "h?? %s",
                s: "segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                w: "uma semana",
                ww: "%d semanas",
                M: "um m??s",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}??/,
            ordinal: "%d??",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("pt-br", {
            months: "janeiro_fevereiro_mar??o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
            monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
            weekdays: "domingo_segunda-feira_ter??a-feira_quarta-feira_quinta-feira_sexta-feira_s??bado".split("_"),
            weekdaysShort: "dom_seg_ter_qua_qui_sex_s??b".split("_"),
            weekdaysMin: "do_2??_3??_4??_5??_6??_s??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY [??s] HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY [??s] HH:mm"
            },
            calendar: {
                sameDay: "[Hoje ??s] LT",
                nextDay: "[Amanh?? ??s] LT",
                nextWeek: "dddd [??s] LT",
                lastDay: "[Ontem ??s] LT",
                lastWeek: function() {
                    return 0 === this.day() || 6 === this.day() ? "[??ltimo] dddd [??s] LT" : "[??ltima] dddd [??s] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "h?? %s",
                s: "poucos segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um m??s",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}??/,
            ordinal: "%d??",
            invalidDate: "Data inv??lida"
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        function a(e, a, t) {
            var n = " ";
            return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (n = " de "),
            e + n + {
                ss: "secunde",
                mm: "minute",
                hh: "ore",
                dd: "zile",
                ww: "s??pt??m??ni",
                MM: "luni",
                yy: "ani"
            }[t]
        }
        e.defineLocale("ro", {
            months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
            monthsShort: "ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "duminic??_luni_mar??i_miercuri_joi_vineri_s??mb??t??".split("_"),
            weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_S??m".split("_"),
            weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_S??".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[azi la] LT",
                nextDay: "[m??ine la] LT",
                nextWeek: "dddd [la] LT",
                lastDay: "[ieri la] LT",
                lastWeek: "[fosta] dddd [la] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "peste %s",
                past: "%s ??n urm??",
                s: "c??teva secunde",
                ss: a,
                m: "un minut",
                mm: a,
                h: "o or??",
                hh: a,
                d: "o zi",
                dd: a,
                w: "o s??pt??m??n??",
                ww: a,
                M: "o lun??",
                MM: a,
                y: "un an",
                yy: a
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        function a(e, a, t) {
            var n, o;
            return "m" === t ? a ? "????????????" : "????????????" : e + " " + (n = +e,
            o = {
                ss: a ? "??????????????_??????????????_????????????" : "??????????????_??????????????_????????????",
                mm: a ? "????????????_????????????_??????????" : "????????????_????????????_??????????",
                hh: "??????_????????_??????????",
                dd: "????????_??????_????????",
                ww: "????????????_????????????_????????????",
                MM: "??????????_????????????_??????????????",
                yy: "??????_????????_??????"
            }[t].split("_"),
            n % 10 == 1 && n % 100 != 11 ? o[0] : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? o[1] : o[2])
        }
        var t = [/^??????/i, /^??????/i, /^??????/i, /^??????/i, /^????[????]/i, /^??????/i, /^??????/i, /^??????/i, /^??????/i, /^??????/i, /^??????/i, /^??????/i];
        e.defineLocale("ru", {
            months: {
                format: "????????????_??????????????_??????????_????????????_??????_????????_????????_??????????????_????????????????_??????????????_????????????_??????????????".split("_"),
                standalone: "????????????_??????????????_????????_????????????_??????_????????_????????_????????????_????????????????_??????????????_????????????_??????????????".split("_")
            },
            monthsShort: {
                format: "??????._????????._??????._??????._??????_????????_????????_??????._????????._??????._????????._??????.".split("_"),
                standalone: "??????._????????._????????_??????._??????_????????_????????_??????._????????._??????._????????._??????.".split("_")
            },
            weekdays: {
                standalone: "??????????????????????_??????????????????????_??????????????_??????????_??????????????_??????????????_??????????????".split("_"),
                format: "??????????????????????_??????????????????????_??????????????_??????????_??????????????_??????????????_??????????????".split("_"),
                isFormat: /\[ ?[????] ?(?:??????????????|??????????????????|??????)? ?] ?dddd/
            },
            weekdaysShort: "????_????_????_????_????_????_????".split("_"),
            weekdaysMin: "????_????_????_????_????_????_????".split("_"),
            monthsParse: t,
            longMonthsParse: t,
            shortMonthsParse: t,
            monthsRegex: /^(??????????[????]|??????\.?|????????????[????]|?????????\.?|???????????|??????\.?|??????????[????]|??????\.?|????[????]|??????[????]|??????\.?|??????[????]|??????\.?|???????????????|??????\.?|??????????????[????]|?????????\.?|????????????[????]|??????\.?|??????????[????]|?????????\.?|????????????[????]|??????\.?)/i,
            monthsShortRegex: /^(??????????[????]|??????\.?|????????????[????]|?????????\.?|???????????|??????\.?|??????????[????]|??????\.?|????[????]|??????[????]|??????\.?|??????[????]|??????\.?|???????????????|??????\.?|??????????????[????]|?????????\.?|????????????[????]|??????\.?|??????????[????]|?????????\.?|????????????[????]|??????\.?)/i,
            monthsStrictRegex: /^(??????????[????]|????????????[????]|???????????|??????????[????]|????[????]|??????[????]|??????[????]|???????????????|??????????????[????]|????????????[????]|??????????[????]|????????????[????])/i,
            monthsShortStrictRegex: /^(??????\.|?????????\.|??????[??.]|??????\.|????[????]|??????[????.]|??????[????.]|??????\.|?????????\.|??????\.|?????????\.|??????\.)/i,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY ??.",
                LLL: "D MMMM YYYY ??., H:mm",
                LLLL: "dddd, D MMMM YYYY ??., H:mm"
            },
            calendar: {
                sameDay: "[??????????????, ??] LT",
                nextDay: "[????????????, ??] LT",
                lastDay: "[??????????, ??] LT",
                nextWeek: function(e) {
                    if (e.week() === this.week())
                        return 2 === this.day() ? "[????] dddd, [??] LT" : "[??] dddd, [??] LT";
                    switch (this.day()) {
                    case 0:
                        return "[?? ??????????????????] dddd, [??] LT";
                    case 1:
                    case 2:
                    case 4:
                        return "[?? ??????????????????] dddd, [??] LT";
                    case 3:
                    case 5:
                    case 6:
                        return "[?? ??????????????????] dddd, [??] LT"
                    }
                },
                lastWeek: function(e) {
                    if (e.week() === this.week())
                        return 2 === this.day() ? "[????] dddd, [??] LT" : "[??] dddd, [??] LT";
                    switch (this.day()) {
                    case 0:
                        return "[?? ??????????????] dddd, [??] LT";
                    case 1:
                    case 2:
                    case 4:
                        return "[?? ??????????????] dddd, [??] LT";
                    case 3:
                    case 5:
                    case 6:
                        return "[?? ??????????????] dddd, [??] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "?????????? %s",
                past: "%s ??????????",
                s: "?????????????????? ????????????",
                ss: a,
                m: a,
                mm: a,
                h: "??????",
                hh: a,
                d: "????????",
                dd: a,
                w: "????????????",
                ww: a,
                M: "??????????",
                MM: a,
                y: "??????",
                yy: a
            },
            meridiemParse: /????????|????????|??????|????????????/i,
            isPM: function(e) {
                return /^(??????|????????????)$/.test(e)
            },
            meridiem: function(e, a, t) {
                return e < 4 ? "????????" : e < 12 ? "????????" : e < 17 ? "??????" : "????????????"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(??|????|??)/,
            ordinal: function(e, a) {
                switch (a) {
                case "M":
                case "d":
                case "DDD":
                    return e + "-??";
                case "D":
                    return e + "-????";
                case "w":
                case "W":
                    return e + "-??";
                default:
                    return e
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = ["??????????", "??????????????", "????????", "??????????", "??????", "??????", "????????????", "????????", "??????????????", "????????????", "??????????", "??????????"]
          , t = ["??????", "????????", "??????????", "????????", "????????", "??????", "????????"];
        e.defineLocale("sd", {
            months: a,
            monthsShort: a,
            weekdays: t,
            weekdaysShort: t,
            weekdaysMin: t,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd?? D MMMM YYYY HH:mm"
            },
            meridiemParse: /??????|??????/,
            isPM: function(e) {
                return "??????" === e
            },
            meridiem: function(e, a, t) {
                return e < 12 ? "??????" : "??????"
            },
            calendar: {
                sameDay: "[????] LT",
                nextDay: "[??????????] LT",
                nextWeek: "dddd [???????? ???????? ????] LT",
                lastDay: "[??????????] LT",
                lastWeek: "[?????????? ????????] dddd [????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ??????",
                past: "%s ????",
                s: "?????? ??????????",
                ss: "%d ??????????",
                m: "???? ??????",
                mm: "%d ??????",
                h: "???? ????????",
                hh: "%d ????????",
                d: "???? ??????????",
                dd: "%d ??????????",
                M: "???? ??????????",
                MM: "%d ??????????",
                y: "???? ??????",
                yy: "%d ??????"
            },
            preparse: function(e) {
                return e.replace(/??/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "??")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("se", {
            months: "o????ajagem??nnu_guovvam??nnu_njuk??am??nnu_cuo??om??nnu_miessem??nnu_geassem??nnu_suoidnem??nnu_borgem??nnu_??ak??am??nnu_golggotm??nnu_sk??bmam??nnu_juovlam??nnu".split("_"),
            monthsShort: "o????j_guov_njuk_cuo_mies_geas_suoi_borg_??ak??_golg_sk??b_juov".split("_"),
            weekdays: "sotnabeaivi_vuoss??rga_ma????eb??rga_gaskavahkku_duorastat_bearjadat_l??vvardat".split("_"),
            weekdaysShort: "sotn_vuos_ma??_gask_duor_bear_l??v".split("_"),
            weekdaysMin: "s_v_m_g_d_b_L".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "MMMM D. [b.] YYYY",
                LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
            },
            calendar: {
                sameDay: "[otne ti] LT",
                nextDay: "[ihttin ti] LT",
                nextWeek: "dddd [ti] LT",
                lastDay: "[ikte ti] LT",
                lastWeek: "[ovddit] dddd [ti] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s gea??es",
                past: "ma??it %s",
                s: "moadde sekunddat",
                ss: "%d sekunddat",
                m: "okta minuhta",
                mm: "%d minuhtat",
                h: "okta diimmu",
                hh: "%d diimmut",
                d: "okta beaivi",
                dd: "%d beaivvit",
                M: "okta m??nnu",
                MM: "%d m??nut",
                y: "okta jahki",
                yy: "%d jagit"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("si", {
            months: "??????????????????_????????????????????????_??????????????????_????????????????????????_????????????_????????????_????????????_?????????????????????_?????????????????????????????????_????????????????????????_???????????????????????????_???????????????????????????".split("_"),
            monthsShort: "??????_?????????_????????????_?????????_????????????_????????????_????????????_?????????_????????????_?????????_????????????_????????????".split("_"),
            weekdays: "???????????????_???????????????_???????????????????????????_???????????????_??????????????????????????????????????????_????????????????????????_???????????????????????????".split("_"),
            weekdaysShort: "?????????_?????????_??????_?????????_???????????????_????????????_?????????".split("_"),
            weekdaysMin: "???_???_???_???_????????????_??????_??????".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "a h:mm",
                LTS: "a h:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY MMMM D",
                LLL: "YYYY MMMM D, a h:mm",
                LLLL: "YYYY MMMM D [????????????] dddd, a h:mm:ss"
            },
            calendar: {
                sameDay: "[??????] LT[???]",
                nextDay: "[?????????] LT[???]",
                nextWeek: "dddd LT[???]",
                lastDay: "[?????????] LT[???]",
                lastWeek: "[??????????????????] dddd LT[???]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s????????????",
                past: "%s?????? ?????????",
                s: "??????????????? ??????????????????",
                ss: "??????????????? %d",
                m: "???????????????????????????",
                mm: "???????????????????????? %d",
                h: "?????????",
                hh: "????????? %d",
                d: "????????????",
                dd: "????????? %d",
                M: "????????????",
                MM: "????????? %d",
                y: "?????????",
                yy: "????????? %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2} ????????????/,
            ordinal: function(e) {
                return e + " ????????????"
            },
            meridiemParse: /????????? ?????????|????????? ?????????|??????.???|???.???./,
            isPM: function(e) {
                return "???.???." === e || "????????? ?????????" === e
            },
            meridiem: function(e, a, t) {
                return e > 11 ? t ? "???.???." : "????????? ?????????" : t ? "??????.???." : "????????? ?????????"
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = "janu??r_febru??r_marec_apr??l_m??j_j??n_j??l_august_september_okt??ber_november_december".split("_")
          , t = "jan_feb_mar_apr_m??j_j??n_j??l_aug_sep_okt_nov_dec".split("_");
        function n(e) {
            return e > 1 && e < 5
        }
        function o(e, a, t, o) {
            var i = e + " ";
            switch (t) {
            case "s":
                return a || o ? "p??r sek??nd" : "p??r sekundami";
            case "ss":
                return a || o ? i + (n(e) ? "sekundy" : "sek??nd") : i + "sekundami";
            case "m":
                return a ? "min??ta" : o ? "min??tu" : "min??tou";
            case "mm":
                return a || o ? i + (n(e) ? "min??ty" : "min??t") : i + "min??tami";
            case "h":
                return a ? "hodina" : o ? "hodinu" : "hodinou";
            case "hh":
                return a || o ? i + (n(e) ? "hodiny" : "hod??n") : i + "hodinami";
            case "d":
                return a || o ? "de??" : "d??om";
            case "dd":
                return a || o ? i + (n(e) ? "dni" : "dn??") : i + "d??ami";
            case "M":
                return a || o ? "mesiac" : "mesiacom";
            case "MM":
                return a || o ? i + (n(e) ? "mesiace" : "mesiacov") : i + "mesiacmi";
            case "y":
                return a || o ? "rok" : "rokom";
            case "yy":
                return a || o ? i + (n(e) ? "roky" : "rokov") : i + "rokmi"
            }
        }
        e.defineLocale("sk", {
            months: a,
            monthsShort: t,
            weekdays: "nede??a_pondelok_utorok_streda_??tvrtok_piatok_sobota".split("_"),
            weekdaysShort: "ne_po_ut_st_??t_pi_so".split("_"),
            weekdaysMin: "ne_po_ut_st_??t_pi_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[dnes o] LT",
                nextDay: "[zajtra o] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[v nede??u o] LT";
                    case 1:
                    case 2:
                        return "[v] dddd [o] LT";
                    case 3:
                        return "[v stredu o] LT";
                    case 4:
                        return "[vo ??tvrtok o] LT";
                    case 5:
                        return "[v piatok o] LT";
                    case 6:
                        return "[v sobotu o] LT"
                    }
                },
                lastDay: "[v??era o] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[minul?? nede??u o] LT";
                    case 1:
                    case 2:
                        return "[minul??] dddd [o] LT";
                    case 3:
                        return "[minul?? stredu o] LT";
                    case 4:
                    case 5:
                        return "[minul??] dddd [o] LT";
                    case 6:
                        return "[minul?? sobotu o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pred %s",
                s: o,
                ss: o,
                m: o,
                mm: o,
                h: o,
                hh: o,
                d: o,
                dd: o,
                M: o,
                MM: o,
                y: o,
                yy: o
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        function a(e, a, t, n) {
            var o = e + " ";
            switch (t) {
            case "s":
                return a || n ? "nekaj sekund" : "nekaj sekundami";
            case "ss":
                return o += 1 === e ? a ? "sekundo" : "sekundi" : 2 === e ? a || n ? "sekundi" : "sekundah" : e < 5 ? a || n ? "sekunde" : "sekundah" : "sekund";
            case "m":
                return a ? "ena minuta" : "eno minuto";
            case "mm":
                return o += 1 === e ? a ? "minuta" : "minuto" : 2 === e ? a || n ? "minuti" : "minutama" : e < 5 ? a || n ? "minute" : "minutami" : a || n ? "minut" : "minutami";
            case "h":
                return a ? "ena ura" : "eno uro";
            case "hh":
                return o += 1 === e ? a ? "ura" : "uro" : 2 === e ? a || n ? "uri" : "urama" : e < 5 ? a || n ? "ure" : "urami" : a || n ? "ur" : "urami";
            case "d":
                return a || n ? "en dan" : "enim dnem";
            case "dd":
                return o += 1 === e ? a || n ? "dan" : "dnem" : 2 === e ? a || n ? "dni" : "dnevoma" : a || n ? "dni" : "dnevi";
            case "M":
                return a || n ? "en mesec" : "enim mesecem";
            case "MM":
                return o += 1 === e ? a || n ? "mesec" : "mesecem" : 2 === e ? a || n ? "meseca" : "mesecema" : e < 5 ? a || n ? "mesece" : "meseci" : a || n ? "mesecev" : "meseci";
            case "y":
                return a || n ? "eno leto" : "enim letom";
            case "yy":
                return o += 1 === e ? a || n ? "leto" : "letom" : 2 === e ? a || n ? "leti" : "letoma" : e < 5 ? a || n ? "leta" : "leti" : a || n ? "let" : "leti"
            }
        }
        e.defineLocale("sl", {
            months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljek_torek_sreda_??etrtek_petek_sobota".split("_"),
            weekdaysShort: "ned._pon._tor._sre._??et._pet._sob.".split("_"),
            weekdaysMin: "ne_po_to_sr_??e_pe_so".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danes ob] LT",
                nextDay: "[jutri ob] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[v] [nedeljo] [ob] LT";
                    case 3:
                        return "[v] [sredo] [ob] LT";
                    case 6:
                        return "[v] [soboto] [ob] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[v] dddd [ob] LT"
                    }
                },
                lastDay: "[v??eraj ob] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[prej??njo] [nedeljo] [ob] LT";
                    case 3:
                        return "[prej??njo] [sredo] [ob] LT";
                    case 6:
                        return "[prej??njo] [soboto] [ob] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[prej??nji] dddd [ob] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "??ez %s",
                past: "pred %s",
                s: a,
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: a,
                dd: a,
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("sq", {
            months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_N??ntor_Dhjetor".split("_"),
            monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_N??n_Dhj".split("_"),
            weekdays: "E Diel_E H??n??_E Mart??_E M??rkur??_E Enjte_E Premte_E Shtun??".split("_"),
            weekdaysShort: "Die_H??n_Mar_M??r_Enj_Pre_Sht".split("_"),
            weekdaysMin: "D_H_Ma_M??_E_P_Sh".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /PD|MD/,
            isPM: function(e) {
                return "M" === e.charAt(0)
            },
            meridiem: function(e, a, t) {
                return e < 12 ? "PD" : "MD"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Sot n??] LT",
                nextDay: "[Nes??r n??] LT",
                nextWeek: "dddd [n??] LT",
                lastDay: "[Dje n??] LT",
                lastWeek: "dddd [e kaluar n??] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "n?? %s",
                past: "%s m?? par??",
                s: "disa sekonda",
                ss: "%d sekonda",
                m: "nj?? minut??",
                mm: "%d minuta",
                h: "nj?? or??",
                hh: "%d or??",
                d: "nj?? dit??",
                dd: "%d dit??",
                M: "nj?? muaj",
                MM: "%d muaj",
                y: "nj?? vit",
                yy: "%d vite"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            words: {
                ss: ["sekunda", "sekunde", "sekundi"],
                m: ["jedan minut", "jedne minute"],
                mm: ["minut", "minute", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mesec", "meseca", "meseci"],
                yy: ["godina", "godine", "godina"]
            },
            correctGrammaticalCase: function(e, a) {
                return 1 === e ? a[0] : e >= 2 && e <= 4 ? a[1] : a[2]
            },
            translate: function(e, t, n) {
                var o = a.words[n];
                return 1 === n.length ? t ? o[0] : o[1] : e + " " + a.correctGrammaticalCase(e, o)
            }
        };
        e.defineLocale("sr", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljak_utorak_sreda_??etvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sre._??et._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_??e_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D. M. YYYY.",
                LL: "D. MMMM YYYY.",
                LLL: "D. MMMM YYYY. H:mm",
                LLLL: "dddd, D. MMMM YYYY. H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[u] [nedelju] [u] LT";
                    case 3:
                        return "[u] [sredu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[ju??e u] LT",
                lastWeek: function() {
                    return ["[pro??le] [nedelje] [u] LT", "[pro??log] [ponedeljka] [u] LT", "[pro??log] [utorka] [u] LT", "[pro??le] [srede] [u] LT", "[pro??log] [??etvrtka] [u] LT", "[pro??log] [petka] [u] LT", "[pro??le] [subote] [u] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pre %s",
                s: "nekoliko sekundi",
                ss: a.translate,
                m: a.translate,
                mm: a.translate,
                h: a.translate,
                hh: a.translate,
                d: "dan",
                dd: a.translate,
                M: "mesec",
                MM: a.translate,
                y: "godinu",
                yy: a.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            words: {
                ss: ["??????????????", "??????????????", "??????????????"],
                m: ["?????????? ??????????", "?????????? ????????????"],
                mm: ["??????????", "????????????", "????????????"],
                h: ["?????????? ??????", "???????????? ????????"],
                hh: ["??????", "????????", "????????"],
                dd: ["??????", "????????", "????????"],
                MM: ["??????????", "????????????", "????????????"],
                yy: ["????????????", "????????????", "????????????"]
            },
            correctGrammaticalCase: function(e, a) {
                return 1 === e ? a[0] : e >= 2 && e <= 4 ? a[1] : a[2]
            },
            translate: function(e, t, n) {
                var o = a.words[n];
                return 1 === n.length ? t ? o[0] : o[1] : e + " " + a.correctGrammaticalCase(e, o)
            }
        };
        e.defineLocale("sr-cyrl", {
            months: "????????????_??????????????_????????_??????????_??????_??????_??????_????????????_??????????????????_??????????????_????????????????_????????????????".split("_"),
            monthsShort: "??????._??????._??????._??????._??????_??????_??????_??????._??????._??????._??????._??????.".split("_"),
            monthsParseExact: !0,
            weekdays: "????????????_??????????????????_????????????_??????????_????????????????_??????????_????????????".split("_"),
            weekdaysShort: "??????._??????._??????._??????._??????._??????._??????.".split("_"),
            weekdaysMin: "????_????_????_????_????_????_????".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D. M. YYYY.",
                LL: "D. MMMM YYYY.",
                LLL: "D. MMMM YYYY. H:mm",
                LLLL: "dddd, D. MMMM YYYY. H:mm"
            },
            calendar: {
                sameDay: "[?????????? ??] LT",
                nextDay: "[?????????? ??] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[??] [????????????] [??] LT";
                    case 3:
                        return "[??] [??????????] [??] LT";
                    case 6:
                        return "[??] [????????????] [??] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[??] dddd [??] LT"
                    }
                },
                lastDay: "[???????? ??] LT",
                lastWeek: function() {
                    return ["[????????????] [????????????] [??] LT", "[??????????????] [??????????????????] [??] LT", "[??????????????] [????????????] [??] LT", "[????????????] [??????????] [??] LT", "[??????????????] [????????????????] [??] LT", "[??????????????] [??????????] [??] LT", "[????????????] [????????????] [??] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "???? %s",
                past: "?????? %s",
                s: "???????????????? ??????????????",
                ss: a.translate,
                m: a.translate,
                mm: a.translate,
                h: a.translate,
                hh: a.translate,
                d: "??????",
                dd: a.translate,
                M: "??????????",
                MM: a.translate,
                y: "????????????",
                yy: a.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ss", {
            months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
            monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
            weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
            weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
            weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Namuhla nga] LT",
                nextDay: "[Kusasa nga] LT",
                nextWeek: "dddd [nga] LT",
                lastDay: "[Itolo nga] LT",
                lastWeek: "dddd [leliphelile] [nga] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "nga %s",
                past: "wenteka nga %s",
                s: "emizuzwana lomcane",
                ss: "%d mzuzwana",
                m: "umzuzu",
                mm: "%d emizuzu",
                h: "lihora",
                hh: "%d emahora",
                d: "lilanga",
                dd: "%d emalanga",
                M: "inyanga",
                MM: "%d tinyanga",
                y: "umnyaka",
                yy: "%d iminyaka"
            },
            meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
            meridiem: function(e, a, t) {
                return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
            },
            meridiemHour: function(e, a) {
                return 12 === e && (e = 0),
                "ekuseni" === a ? e : "emini" === a ? e >= 11 ? e : e + 12 : "entsambama" === a || "ebusuku" === a ? 0 === e ? 0 : e + 12 : void 0
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: "%d",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("sv", {
            months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "s??ndag_m??ndag_tisdag_onsdag_torsdag_fredag_l??rdag".split("_"),
            weekdaysShort: "s??n_m??n_tis_ons_tor_fre_l??r".split("_"),
            weekdaysMin: "s??_m??_ti_on_to_fr_l??".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Idag] LT",
                nextDay: "[Imorgon] LT",
                lastDay: "[Ig??r] LT",
                nextWeek: "[P??] dddd LT",
                lastWeek: "[I] dddd[s] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "f??r %s sedan",
                s: "n??gra sekunder",
                ss: "%d sekunder",
                m: "en minut",
                mm: "%d minuter",
                h: "en timme",
                hh: "%d timmar",
                d: "en dag",
                dd: "%d dagar",
                M: "en m??nad",
                MM: "%d m??nader",
                y: "ett ??r",
                yy: "%d ??r"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
            ordinal: function(e) {
                var a = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? ":e" : 1 === a || 2 === a ? ":a" : ":e")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("sw", {
            months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
            weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
            weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "hh:mm A",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[leo saa] LT",
                nextDay: "[kesho saa] LT",
                nextWeek: "[wiki ijayo] dddd [saat] LT",
                lastDay: "[jana] LT",
                lastWeek: "[wiki iliyopita] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s baadaye",
                past: "tokea %s",
                s: "hivi punde",
                ss: "sekunde %d",
                m: "dakika moja",
                mm: "dakika %d",
                h: "saa limoja",
                hh: "masaa %d",
                d: "siku moja",
                dd: "siku %d",
                M: "mwezi mmoja",
                MM: "miezi %d",
                y: "mwaka mmoja",
                yy: "miaka %d"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "???",
            2: "???",
            3: "???",
            4: "???",
            5: "???",
            6: "???",
            7: "???",
            8: "???",
            9: "???",
            0: "???"
        }
          , t = {
            "???": "1",
            "???": "2",
            "???": "3",
            "???": "4",
            "???": "5",
            "???": "6",
            "???": "7",
            "???": "8",
            "???": "9",
            "???": "0"
        };
        e.defineLocale("ta", {
            months: "???????????????_????????????????????????_??????????????????_??????????????????_??????_????????????_????????????_??????????????????_?????????????????????????????????_???????????????????????????_?????????????????????_????????????????????????".split("_"),
            monthsShort: "???????????????_????????????????????????_??????????????????_??????????????????_??????_????????????_????????????_??????????????????_?????????????????????????????????_???????????????????????????_?????????????????????_????????????????????????".split("_"),
            weekdays: "?????????????????????????????????????????????_????????????????????????????????????_???????????????????????????????????????_??????????????????????????????_????????????????????????????????????_???????????????????????????????????????_??????????????????????????????".split("_"),
            weekdaysShort: "??????????????????_?????????????????????_????????????????????????_???????????????_?????????????????????_??????????????????_?????????".split("_"),
            weekdaysMin: "??????_??????_??????_??????_??????_??????_???".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, HH:mm",
                LLLL: "dddd, D MMMM YYYY, HH:mm"
            },
            calendar: {
                sameDay: "[???????????????] LT",
                nextDay: "[????????????] LT",
                nextWeek: "dddd, LT",
                lastDay: "[??????????????????] LT",
                lastWeek: "[??????????????? ???????????????] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ?????????",
                past: "%s ????????????",
                s: "????????? ????????? ???????????????????????????",
                ss: "%d ???????????????????????????",
                m: "????????? ?????????????????????",
                mm: "%d ??????????????????????????????",
                h: "????????? ????????? ???????????????",
                hh: "%d ????????? ???????????????",
                d: "????????? ????????????",
                dd: "%d ?????????????????????",
                M: "????????? ???????????????",
                MM: "%d ????????????????????????",
                y: "????????? ??????????????????",
                yy: "%d ????????????????????????"
            },
            dayOfMonthOrdinalParse: /\d{1,2}?????????/,
            ordinal: function(e) {
                return e + "?????????"
            },
            preparse: function(e) {
                return e.replace(/[??????????????????????????????]/g, (function(e) {
                    return t[e]
                }
                ))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return a[e]
                }
                ))
            },
            meridiemParse: /???????????????|???????????????|????????????|?????????????????????|?????????????????????|????????????/,
            meridiem: function(e, a, t) {
                return e < 2 ? " ???????????????" : e < 6 ? " ???????????????" : e < 10 ? " ????????????" : e < 14 ? " ?????????????????????" : e < 18 ? " ?????????????????????" : e < 22 ? " ????????????" : " ???????????????"
            },
            meridiemHour: function(e, a) {
                return 12 === e && (e = 0),
                "???????????????" === a ? e < 2 ? e : e + 12 : "???????????????" === a || "????????????" === a || "?????????????????????" === a && e >= 10 ? e : e + 12
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("te", {
            months: "???????????????_????????????????????????_??????????????????_?????????????????????_??????_????????????_????????????_??????????????????_??????????????????????????????_????????????????????????_??????????????????_????????????????????????".split("_"),
            monthsShort: "??????._???????????????._??????????????????_???????????????._??????_????????????_????????????_??????._????????????._???????????????._??????._????????????.".split("_"),
            monthsParseExact: !0,
            weekdays: "?????????????????????_?????????????????????_????????????????????????_?????????????????????_????????????????????????_???????????????????????????_?????????????????????".split("_"),
            weekdaysShort: "?????????_?????????_????????????_?????????_????????????_???????????????_?????????".split("_"),
            weekdaysMin: "???_??????_??????_??????_??????_??????_???".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[????????????] LT",
                nextDay: "[????????????] LT",
                nextWeek: "dddd, LT",
                lastDay: "[???????????????] LT",
                lastWeek: "[??????] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ??????",
                past: "%s ??????????????????",
                s: "?????????????????? ?????????????????????",
                ss: "%d ?????????????????????",
                m: "?????? ??????????????????",
                mm: "%d ????????????????????????",
                h: "?????? ?????????",
                hh: "%d ???????????????",
                d: "?????? ????????????",
                dd: "%d ??????????????????",
                M: "?????? ?????????",
                MM: "%d ???????????????",
                y: "?????? ????????????????????????",
                yy: "%d ??????????????????????????????"
            },
            dayOfMonthOrdinalParse: /\d{1,2}???/,
            ordinal: "%d???",
            meridiemParse: /??????????????????|????????????|???????????????????????????|????????????????????????/,
            meridiemHour: function(e, a) {
                return 12 === e && (e = 0),
                "??????????????????" === a ? e < 4 ? e : e + 12 : "????????????" === a ? e : "???????????????????????????" === a ? e >= 10 ? e : e + 12 : "????????????????????????" === a ? e + 12 : void 0
            },
            meridiem: function(e, a, t) {
                return e < 4 ? "??????????????????" : e < 10 ? "????????????" : e < 17 ? "???????????????????????????" : e < 20 ? "????????????????????????" : "??????????????????"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("tet", {
            months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Ju??u_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
            weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
            weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ohin iha] LT",
                nextDay: "[Aban iha] LT",
                nextWeek: "dddd [iha] LT",
                lastDay: "[Horiseik iha] LT",
                lastWeek: "dddd [semana kotuk] [iha] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "iha %s",
                past: "%s liuba",
                s: "segundu balun",
                ss: "segundu %d",
                m: "minutu ida",
                mm: "minutu %d",
                h: "oras ida",
                hh: "oras %d",
                d: "loron ida",
                dd: "loron %d",
                M: "fulan ida",
                MM: "fulan %d",
                y: "tinan ida",
                yy: "tinan %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var a = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            0: "-????",
            1: "-????",
            2: "-????",
            3: "-????",
            4: "-????",
            5: "-????",
            6: "-????",
            7: "-????",
            8: "-????",
            9: "-????",
            10: "-????",
            12: "-????",
            13: "-????",
            20: "-????",
            30: "-????",
            40: "-????",
            50: "-????",
            60: "-????",
            70: "-????",
            80: "-????",
            90: "-????",
            100: "-????"
        };
        e.defineLocale("tg", {
            months: {
                format: "????????????_??????????????_??????????_????????????_????????_????????_????????_??????????????_????????????????_??????????????_????????????_??????????????".split("_"),
                standalone: "??????????_????????????_????????_??????????_??????_??????_??????_????????????_??????????????_????????????_??????????_????????????".split("_")
            },
            monthsShort: "??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdays: "??????????????_??????????????_??????????????_????????????????_??????????????????_??????????_??????????".split("_"),
            weekdaysShort: "??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdaysMin: "????_????_????_????_????_????_????".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[?????????? ??????????] LT",
                nextDay: "[?????????? ??????????] LT",
                lastDay: "[?????????? ??????????] LT",
                nextWeek: "dddd[??] [???????????? ?????????? ??????????] LT",
                lastWeek: "dddd[??] [???????????? ?????????????? ??????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "?????????? %s",
                past: "%s ??????",
                s: "???????????? ??????????",
                m: "???? ????????????",
                mm: "%d ????????????",
                h: "???? ????????",
                hh: "%d ????????",
                d: "???? ??????",
                dd: "%d ??????",
                M: "???? ??????",
                MM: "%d ??????",
                y: "???? ??????",
                yy: "%d ??????"
            },
            meridiemParse: /??????|????????|??????|??????????/,
            meridiemHour: function(e, a) {
                return 12 === e && (e = 0),
                "??????" === a ? e < 4 ? e : e + 12 : "????????" === a ? e : "??????" === a ? e >= 11 ? e : e + 12 : "??????????" === a ? e + 12 : void 0
            },
            meridiem: function(e, a, t) {
                return e < 4 ? "??????" : e < 11 ? "????????" : e < 16 ? "??????" : e < 19 ? "??????????" : "??????"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(????|????)/,
            ordinal: function(e) {
                return e + (a[e] || a[e % 10] || a[e >= 100 ? 100 : null])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("th", {
            months: "??????????????????_??????????????????????????????_??????????????????_??????????????????_?????????????????????_????????????????????????_?????????????????????_?????????????????????_?????????????????????_??????????????????_???????????????????????????_?????????????????????".split("_"),
            monthsShort: "???.???._???.???._??????.???._??????.???._???.???._??????.???._???.???._???.???._???.???._???.???._???.???._???.???.".split("_"),
            monthsParseExact: !0,
            weekdays: "?????????????????????_??????????????????_??????????????????_?????????_????????????????????????_???????????????_???????????????".split("_"),
            weekdaysShort: "?????????????????????_??????????????????_??????????????????_?????????_???????????????_???????????????_???????????????".split("_"),
            weekdaysMin: "??????._???._???._???._??????._???._???.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY ???????????? H:mm",
                LLLL: "?????????dddd????????? D MMMM YYYY ???????????? H:mm"
            },
            meridiemParse: /??????????????????????????????|??????????????????????????????/,
            isPM: function(e) {
                return "??????????????????????????????" === e
            },
            meridiem: function(e, a, t) {
                return e < 12 ? "??????????????????????????????" : "??????????????????????????????"
            },
            calendar: {
                sameDay: "[?????????????????? ????????????] LT",
                nextDay: "[???????????????????????? ????????????] LT",
                nextWeek: "dddd[???????????? ????????????] LT",
                lastDay: "[????????????????????????????????? ????????????] LT",
                lastWeek: "[?????????]dddd[????????????????????? ????????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "????????? %s",
                past: "%s?????????????????????",
                s: "????????????????????????????????????",
                ss: "%d ??????????????????",
                m: "1 ????????????",
                mm: "%d ????????????",
                h: "1 ?????????????????????",
                hh: "%d ?????????????????????",
                d: "1 ?????????",
                dd: "%d ?????????",
                w: "1 ?????????????????????",
                ww: "%d ?????????????????????",
                M: "1 ???????????????",
                MM: "%d ???????????????",
                y: "1 ??????",
                yy: "%d ??????"
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "'inji",
            5: "'inji",
            8: "'inji",
            70: "'inji",
            80: "'inji",
            2: "'nji",
            7: "'nji",
            20: "'nji",
            50: "'nji",
            3: "'??nji",
            4: "'??nji",
            100: "'??nji",
            6: "'njy",
            9: "'unjy",
            10: "'unjy",
            30: "'unjy",
            60: "'ynjy",
            90: "'ynjy"
        };
        e.defineLocale("tk", {
            months: "??anwar_Fewral_Mart_Aprel_Ma??_I??un_I??ul_Awgust_Sent??abr_Okt??abr_No??abr_Dekabr".split("_"),
            monthsShort: "??an_Few_Mar_Apr_Ma??_I??n_I??l_Awg_Sen_Okt_No??_Dek".split("_"),
            weekdays: "??ek??enbe_Du??enbe_Si??enbe_??ar??enbe_Pen??enbe_Anna_??enbe".split("_"),
            weekdaysShort: "??ek_Du??_Si??_??ar_Pen_Ann_??en".split("_"),
            weekdaysMin: "??k_D??_S??_??r_Pn_An_??n".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bug??n sagat] LT",
                nextDay: "[ertir sagat] LT",
                nextWeek: "[indiki] dddd [sagat] LT",
                lastDay: "[d????n] LT",
                lastWeek: "[ge??en] dddd [sagat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s so??",
                past: "%s ????",
                s: "birn????e sekunt",
                m: "bir minut",
                mm: "%d minut",
                h: "bir sagat",
                hh: "%d sagat",
                d: "bir g??n",
                dd: "%d g??n",
                M: "bir a??",
                MM: "%d a??",
                y: "bir ??yl",
                yy: "%d ??yl"
            },
            ordinal: function(e, t) {
                switch (t) {
                case "d":
                case "D":
                case "Do":
                case "DD":
                    return e;
                default:
                    if (0 === e)
                        return e + "'unjy";
                    var n = e % 10;
                    return e + (a[n] || a[e % 100 - n] || a[e >= 100 ? 100 : null])
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("tl-ph", {
            months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
            monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "MM/D/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY HH:mm",
                LLLL: "dddd, MMMM DD, YYYY HH:mm"
            },
            calendar: {
                sameDay: "LT [ngayong araw]",
                nextDay: "[Bukas ng] LT",
                nextWeek: "LT [sa susunod na] dddd",
                lastDay: "LT [kahapon]",
                lastWeek: "LT [noong nakaraang] dddd",
                sameElse: "L"
            },
            relativeTime: {
                future: "sa loob ng %s",
                past: "%s ang nakalipas",
                s: "ilang segundo",
                ss: "%d segundo",
                m: "isang minuto",
                mm: "%d minuto",
                h: "isang oras",
                hh: "%d oras",
                d: "isang araw",
                dd: "%d araw",
                M: "isang buwan",
                MM: "%d buwan",
                y: "isang taon",
                yy: "%d taon"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function(e) {
                return e
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = "pagh_wa???_cha???_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
        function t(e, t, n, o) {
            var i = function(e) {
                var t = Math.floor(e % 1e3 / 100)
                  , n = Math.floor(e % 100 / 10)
                  , o = e % 10
                  , i = "";
                return t > 0 && (i += a[t] + "vatlh"),
                n > 0 && (i += ("" !== i ? " " : "") + a[n] + "maH"),
                o > 0 && (i += ("" !== i ? " " : "") + a[o]),
                "" === i ? "pagh" : i
            }(e);
            switch (n) {
            case "ss":
                return i + " lup";
            case "mm":
                return i + " tup";
            case "hh":
                return i + " rep";
            case "dd":
                return i + " jaj";
            case "MM":
                return i + " jar";
            case "yy":
                return i + " DIS"
            }
        }
        e.defineLocale("tlh", {
            months: "tera??? jar wa???_tera??? jar cha???_tera??? jar wej_tera??? jar loS_tera??? jar vagh_tera??? jar jav_tera??? jar Soch_tera??? jar chorgh_tera??? jar Hut_tera??? jar wa???maH_tera??? jar wa???maH wa???_tera??? jar wa???maH cha???".split("_"),
            monthsShort: "jar wa???_jar cha???_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa???maH_jar wa???maH wa???_jar wa???maH cha???".split("_"),
            monthsParseExact: !0,
            weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[DaHjaj] LT",
                nextDay: "[wa???leS] LT",
                nextWeek: "LLL",
                lastDay: "[wa???Hu???] LT",
                lastWeek: "LLL",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    var a = e;
                    return a = -1 !== e.indexOf("jaj") ? a.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? a.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? a.slice(0, -3) + "nem" : a + " pIq"
                },
                past: function(e) {
                    var a = e;
                    return a = -1 !== e.indexOf("jaj") ? a.slice(0, -3) + "Hu???" : -1 !== e.indexOf("jar") ? a.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? a.slice(0, -3) + "ben" : a + " ret"
                },
                s: "puS lup",
                ss: t,
                m: "wa??? tup",
                mm: t,
                h: "wa??? rep",
                hh: t,
                d: "wa??? jaj",
                dd: t,
                M: "wa??? jar",
                MM: t,
                y: "wa??? DIS",
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "'inci",
            5: "'inci",
            8: "'inci",
            70: "'inci",
            80: "'inci",
            2: "'nci",
            7: "'nci",
            20: "'nci",
            50: "'nci",
            3: "'??nc??",
            4: "'??nc??",
            100: "'??nc??",
            6: "'nc??",
            9: "'uncu",
            10: "'uncu",
            30: "'uncu",
            60: "'??nc??",
            90: "'??nc??"
        };
        e.defineLocale("tr", {
            months: "Ocak_??ubat_Mart_Nisan_May??s_Haziran_Temmuz_A??ustos_Eyl??l_Ekim_Kas??m_Aral??k".split("_"),
            monthsShort: "Oca_??ub_Mar_Nis_May_Haz_Tem_A??u_Eyl_Eki_Kas_Ara".split("_"),
            weekdays: "Pazar_Pazartesi_Sal??_??ar??amba_Per??embe_Cuma_Cumartesi".split("_"),
            weekdaysShort: "Paz_Pts_Sal_??ar_Per_Cum_Cts".split("_"),
            weekdaysMin: "Pz_Pt_Sa_??a_Pe_Cu_Ct".split("_"),
            meridiem: function(e, a, t) {
                return e < 12 ? t ? "????" : "????" : t ? "??s" : "??S"
            },
            meridiemParse: /????|????|??s|??S/,
            isPM: function(e) {
                return "??s" === e || "??S" === e
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bug??n saat] LT",
                nextDay: "[yar??n saat] LT",
                nextWeek: "[gelecek] dddd [saat] LT",
                lastDay: "[d??n] LT",
                lastWeek: "[ge??en] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s ??nce",
                s: "birka?? saniye",
                ss: "%d saniye",
                m: "bir dakika",
                mm: "%d dakika",
                h: "bir saat",
                hh: "%d saat",
                d: "bir g??n",
                dd: "%d g??n",
                w: "bir hafta",
                ww: "%d hafta",
                M: "bir ay",
                MM: "%d ay",
                y: "bir y??l",
                yy: "%d y??l"
            },
            ordinal: function(e, t) {
                switch (t) {
                case "d":
                case "D":
                case "Do":
                case "DD":
                    return e;
                default:
                    if (0 === e)
                        return e + "'??nc??";
                    var n = e % 10;
                    return e + (a[n] || a[e % 100 - n] || a[e >= 100 ? 100 : null])
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        function a(e, a, t, n) {
            var o = {
                s: ["viensas secunds", "'iensas secunds"],
                ss: [e + " secunds", e + " secunds"],
                m: ["'n m??ut", "'iens m??ut"],
                mm: [e + " m??uts", e + " m??uts"],
                h: ["'n ??ora", "'iensa ??ora"],
                hh: [e + " ??oras", e + " ??oras"],
                d: ["'n ziua", "'iensa ziua"],
                dd: [e + " ziuas", e + " ziuas"],
                M: ["'n mes", "'iens mes"],
                MM: [e + " mesen", e + " mesen"],
                y: ["'n ar", "'iens ar"],
                yy: [e + " ars", e + " ars"]
            };
            return n || a ? o[t][0] : o[t][1]
        }
        e.defineLocale("tzl", {
            months: "Januar_Fevraglh_Mar??_Avr??u_Mai_G??n_Julia_Guscht_Setemvar_Listop??ts_Noemvar_Zecemvar".split("_"),
            monthsShort: "Jan_Fev_Mar_Avr_Mai_G??n_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
            weekdays: "S??ladi_L??ne??i_Maitzi_M??rcuri_Xh??adi_Vi??ner??i_S??turi".split("_"),
            weekdaysShort: "S??l_L??n_Mai_M??r_Xh??_Vi??_S??t".split("_"),
            weekdaysMin: "S??_L??_Ma_M??_Xh_Vi_S??".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM [dallas] YYYY",
                LLL: "D. MMMM [dallas] YYYY HH.mm",
                LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
            },
            meridiemParse: /d\'o|d\'a/i,
            isPM: function(e) {
                return "d'o" === e.toLowerCase()
            },
            meridiem: function(e, a, t) {
                return e > 11 ? t ? "d'o" : "D'O" : t ? "d'a" : "D'A"
            },
            calendar: {
                sameDay: "[oxhi ??] LT",
                nextDay: "[dem?? ??] LT",
                nextWeek: "dddd [??] LT",
                lastDay: "[ieiri ??] LT",
                lastWeek: "[s??r el] dddd [lasteu ??] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "osprei %s",
                past: "ja%s",
                s: a,
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: a,
                dd: a,
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("tzm", {
            months: "??????????????????_???????????????_????????????_???????????????_???????????????_???????????????_??????????????????_????????????_????????????????????????_???????????????_????????????????????????_?????????????????????".split("_"),
            monthsShort: "??????????????????_???????????????_????????????_???????????????_???????????????_???????????????_??????????????????_????????????_????????????????????????_???????????????_????????????????????????_?????????????????????".split("_"),
            weekdays: "??????????????????_???????????????_??????????????????_???????????????_???????????????_?????????????????????_?????????????????????".split("_"),
            weekdaysShort: "??????????????????_???????????????_??????????????????_???????????????_???????????????_?????????????????????_?????????????????????".split("_"),
            weekdaysMin: "??????????????????_???????????????_??????????????????_???????????????_???????????????_?????????????????????_?????????????????????".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[???????????? ???] LT",
                nextDay: "[???????????? ???] LT",
                nextWeek: "dddd [???] LT",
                lastDay: "[??????????????? ???] LT",
                lastWeek: "dddd [???] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "???????????? ??? ????????? %s",
                past: "????????? %s",
                s: "????????????",
                ss: "%d ????????????",
                m: "???????????????",
                mm: "%d ???????????????",
                h: "????????????",
                hh: "%d ????????????????????????",
                d: "?????????",
                dd: "%d o????????????",
                M: "??????o??????",
                MM: "%d ??????????????????",
                y: "???????????????",
                yy: "%d ??????????????????"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("tzm-latn", {
            months: "innayr_br??ayr??_mar??s??_ibrir_mayyw_ywnyw_ywlywz_??w??t_??wtanbir_kt??wbr??_nwwanbir_dwjnbir".split("_"),
            monthsShort: "innayr_br??ayr??_mar??s??_ibrir_mayyw_ywnyw_ywlywz_??w??t_??wtanbir_kt??wbr??_nwwanbir_dwjnbir".split("_"),
            weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asi???yas".split("_"),
            weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asi???yas".split("_"),
            weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asi???yas".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[asdkh g] LT",
                nextDay: "[aska g] LT",
                nextWeek: "dddd [g] LT",
                lastDay: "[assant g] LT",
                lastWeek: "dddd [g] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dadkh s yan %s",
                past: "yan %s",
                s: "imik",
                ss: "%d imik",
                m: "minu???",
                mm: "%d minu???",
                h: "sa??a",
                hh: "%d tassa??in",
                d: "ass",
                dd: "%d ossan",
                M: "ayowr",
                MM: "%d iyyirn",
                y: "asgas",
                yy: "%d isgasn"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ug-cn", {
            months: "????????????_????????????_????????_????????????_??????_??????????_??????????_??????????????_????????????????_????????????????_??????????????_??????????????".split("_"),
            monthsShort: "????????????_????????????_????????_????????????_??????_??????????_??????????_??????????????_????????????????_????????????????_??????????????_??????????????".split("_"),
            weekdays: "????????????????_??????????????_????????????????_????????????????_????????????????_????????_??????????".split("_"),
            weekdaysShort: "????_????_????_????_????_????_????".split("_"),
            weekdaysMin: "????_????_????_????_????_????_????".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY-????????M-????????????D-????????",
                LLL: "YYYY-????????M-????????????D-?????????? HH:mm",
                LLLL: "dddd?? YYYY-????????M-????????????D-?????????? HH:mm"
            },
            meridiemParse: /?????????? ????????|??????????|???????????? ??????????|??????|???????????? ??????????|??????/,
            meridiemHour: function(e, a) {
                return 12 === e && (e = 0),
                "?????????? ????????" === a || "??????????" === a || "???????????? ??????????" === a ? e : "???????????? ??????????" === a || "??????" === a ? e + 12 : e >= 11 ? e : e + 12
            },
            meridiem: function(e, a, t) {
                var n = 100 * e + a;
                return n < 600 ? "?????????? ????????" : n < 900 ? "??????????" : n < 1130 ? "???????????? ??????????" : n < 1230 ? "??????" : n < 1800 ? "???????????? ??????????" : "??????"
            },
            calendar: {
                sameDay: "[?????????? ??????????] LT",
                nextDay: "[???????? ??????????] LT",
                nextWeek: "[??????????????] dddd [??????????] LT",
                lastDay: "[??????????????] LT",
                lastWeek: "[????????????????] dddd [??????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ??????????",
                past: "%s ??????????",
                s: "?????????? ????????????",
                ss: "%d ????????????",
                m: "?????? ??????????",
                mm: "%d ??????????",
                h: "?????? ??????????",
                hh: "%d ??????????",
                d: "?????? ??????",
                dd: "%d ??????",
                M: "?????? ??????",
                MM: "%d ??????",
                y: "?????? ??????",
                yy: "%d ??????"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(-????????|-??????|-??????????)/,
            ordinal: function(e, a) {
                switch (a) {
                case "d":
                case "D":
                case "DDD":
                    return e + "-????????";
                case "w":
                case "W":
                    return e + "-??????????";
                default:
                    return e
                }
            },
            preparse: function(e) {
                return e.replace(/??/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "??")
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        function a(e, a, t) {
            var n, o;
            return "m" === t ? a ? "??????????????" : "??????????????" : "h" === t ? a ? "????????????" : "????????????" : e + " " + (n = +e,
            o = {
                ss: a ? "??????????????_??????????????_????????????" : "??????????????_??????????????_????????????",
                mm: a ? "??????????????_??????????????_????????????" : "??????????????_??????????????_????????????",
                hh: a ? "????????????_????????????_??????????" : "????????????_????????????_??????????",
                dd: "????????_??????_????????",
                MM: "????????????_????????????_??????????????",
                yy: "??????_????????_??????????"
            }[t].split("_"),
            n % 10 == 1 && n % 100 != 11 ? o[0] : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? o[1] : o[2])
        }
        function t(e) {
            return function() {
                return e + "??" + (11 === this.hours() ? "??" : "") + "] LT"
            }
        }
        e.defineLocale("uk", {
            months: {
                format: "??????????_????????????_??????????????_????????????_????????????_????????????_??????????_????????????_??????????????_????????????_??????????????????_????????????".split("_"),
                standalone: "????????????_??????????_????????????????_??????????????_??????????????_??????????????_????????????_??????????????_????????????????_??????????????_????????????????_??????????????".split("_")
            },
            monthsShort: "??????_??????_??????_????????_????????_????????_??????_????????_??????_????????_????????_????????".split("_"),
            weekdays: function(e, a) {
                var t = {
                    nominative: "????????????_??????????????????_????????????????_????????????_????????????_?????????????????_????????????".split("_"),
                    accusative: "????????????_??????????????????_????????????????_????????????_????????????_?????????????????_????????????".split("_"),
                    genitive: "????????????_??????????????????_????????????????_????????????_????????????????_?????????????????_????????????".split("_")
                };
                return !0 === e ? t.nominative.slice(1, 7).concat(t.nominative.slice(0, 1)) : e ? t[/(\[[????????]\]) ?dddd/.test(a) ? "accusative" : /\[?(?:??????????????|??????????????????)? ?\] ?dddd/.test(a) ? "genitive" : "nominative"][e.day()] : t.nominative
            },
            weekdaysShort: "????_????_????_????_????_????_????".split("_"),
            weekdaysMin: "????_????_????_????_????_????_????".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY ??.",
                LLL: "D MMMM YYYY ??., HH:mm",
                LLLL: "dddd, D MMMM YYYY ??., HH:mm"
            },
            calendar: {
                sameDay: t("[???????????????? "),
                nextDay: t("[???????????? "),
                lastDay: t("[?????????? "),
                nextWeek: t("[??] dddd ["),
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return t("[??????????????] dddd [").call(this);
                    case 1:
                    case 2:
                    case 4:
                        return t("[????????????????] dddd [").call(this)
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "???? %s",
                past: "%s ????????",
                s: "???????????????? ????????????",
                ss: a,
                m: a,
                mm: a,
                h: "????????????",
                hh: a,
                d: "????????",
                dd: a,
                M: "????????????",
                MM: a,
                y: "??????",
                yy: a
            },
            meridiemParse: /????????|??????????|??????|????????????/,
            isPM: function(e) {
                return /^(??????|????????????)$/.test(e)
            },
            meridiem: function(e, a, t) {
                return e < 4 ? "????????" : e < 12 ? "??????????" : e < 17 ? "??????" : "????????????"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(??|????)/,
            ordinal: function(e, a) {
                switch (a) {
                case "M":
                case "d":
                case "DDD":
                case "w":
                case "W":
                    return e + "-??";
                case "D":
                    return e + "-????";
                default:
                    return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        var a = ["??????????", "??????????", "????????", "??????????", "??????", "??????", "????????????", "????????", "??????????", "????????????", "??????????", "??????????"]
          , t = ["??????????", "??????", "????????", "??????", "????????????", "????????", "????????"];
        e.defineLocale("ur", {
            months: a,
            monthsShort: a,
            weekdays: t,
            weekdaysShort: t,
            weekdaysMin: t,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd?? D MMMM YYYY HH:mm"
            },
            meridiemParse: /??????|??????/,
            isPM: function(e) {
                return "??????" === e
            },
            meridiem: function(e, a, t) {
                return e < 12 ? "??????" : "??????"
            },
            calendar: {
                sameDay: "[???? ????????] LT",
                nextDay: "[???? ????????] LT",
                nextWeek: "dddd [????????] LT",
                lastDay: "[?????????? ?????? ????????] LT",
                lastWeek: "[??????????] dddd [????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ??????",
                past: "%s ??????",
                s: "?????? ??????????",
                ss: "%d ??????????",
                m: "?????? ??????",
                mm: "%d ??????",
                h: "?????? ??????????",
                hh: "%d ??????????",
                d: "?????? ????",
                dd: "%d ????",
                M: "?????? ??????",
                MM: "%d ??????",
                y: "?????? ??????",
                yy: "%d ??????"
            },
            preparse: function(e) {
                return e.replace(/??/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "??")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("uz", {
            months: "??????????_????????????_????????_??????????_??????_??????_??????_????????????_??????????????_????????????_??????????_????????????".split("_"),
            monthsShort: "??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdays: "??????????????_??????????????_??????????????_????????????????_????????????????_????????_??????????".split("_"),
            weekdaysShort: "??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdaysMin: "????_????_????_????_????_????_????".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[?????????? ????????] LT [????]",
                nextDay: "[????????????] LT [????]",
                nextWeek: "dddd [???????? ????????] LT [????]",
                lastDay: "[???????? ????????] LT [????]",
                lastWeek: "[??????????] dddd [???????? ????????] LT [????]",
                sameElse: "L"
            },
            relativeTime: {
                future: "???????? %s ??????????",
                past: "?????? ???????? %s ??????????",
                s: "????????????",
                ss: "%d ????????????",
                m: "?????? ????????????",
                mm: "%d ????????????",
                h: "?????? ????????",
                hh: "%d ????????",
                d: "?????? ??????",
                dd: "%d ??????",
                M: "?????? ????",
                MM: "%d ????",
                y: "?????? ??????",
                yy: "%d ??????"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("uz-latn", {
            months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
            monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
            weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
            weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
            weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Bugun soat] LT [da]",
                nextDay: "[Ertaga] LT [da]",
                nextWeek: "dddd [kuni soat] LT [da]",
                lastDay: "[Kecha soat] LT [da]",
                lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Yaqin %s ichida",
                past: "Bir necha %s oldin",
                s: "soniya",
                ss: "%d soniya",
                m: "bir daqiqa",
                mm: "%d daqiqa",
                h: "bir soat",
                hh: "%d soat",
                d: "bir kun",
                dd: "%d kun",
                M: "bir oy",
                MM: "%d oy",
                y: "bir yil",
                yy: "%d yil"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("vi", {
            months: "th??ng 1_th??ng 2_th??ng 3_th??ng 4_th??ng 5_th??ng 6_th??ng 7_th??ng 8_th??ng 9_th??ng 10_th??ng 11_th??ng 12".split("_"),
            monthsShort: "Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split("_"),
            monthsParseExact: !0,
            weekdays: "ch??? nh???t_th??? hai_th??? ba_th??? t??_th??? n??m_th??? s??u_th??? b???y".split("_"),
            weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /sa|ch/i,
            isPM: function(e) {
                return /^ch$/i.test(e)
            },
            meridiem: function(e, a, t) {
                return e < 12 ? t ? "sa" : "SA" : t ? "ch" : "CH"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [n??m] YYYY",
                LLL: "D MMMM [n??m] YYYY HH:mm",
                LLLL: "dddd, D MMMM [n??m] YYYY HH:mm",
                l: "DD/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[H??m nay l??c] LT",
                nextDay: "[Ng??y mai l??c] LT",
                nextWeek: "dddd [tu???n t???i l??c] LT",
                lastDay: "[H??m qua l??c] LT",
                lastWeek: "dddd [tu???n tr?????c l??c] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s t???i",
                past: "%s tr?????c",
                s: "v??i gi??y",
                ss: "%d gi??y",
                m: "m???t ph??t",
                mm: "%d ph??t",
                h: "m???t gi???",
                hh: "%d gi???",
                d: "m???t ng??y",
                dd: "%d ng??y",
                w: "m???t tu???n",
                ww: "%d tu???n",
                M: "m???t th??ng",
                MM: "%d th??ng",
                y: "m???t n??m",
                yy: "%d n??m"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function(e) {
                return e
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("x-pseudo", {
            months: "J~????????~r??_F~??br??~??r??_~M??rc~h_??p~r??l_~M????_~J??????~_J??l~??_????~g??st~_S??p~t??mb~??r_??~ct??b~??r_??~??v??m~b??r_~D??c??~mb??r".split("_"),
            monthsShort: "J~????_~F??b_~M??r_~??pr_~M????_~J????_~J??l_~????g_~S??p_~??ct_~????v_~D??c".split("_"),
            monthsParseExact: !0,
            weekdays: "S~????d??~??_M??~??d????~_T????~sd????~_W??d~????sd~????_T~h??rs~d????_~Fr??d~????_S~??t??r~d????".split("_"),
            weekdaysShort: "S~????_~M????_~T????_~W??d_~Th??_~Fr??_~S??t".split("_"),
            weekdaysMin: "S~??_M??~_T??_~W??_T~h_Fr~_S??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[T~??d??~?? ??t] LT",
                nextDay: "[T~??m??~rr??~w ??t] LT",
                nextWeek: "dddd [??t] LT",
                lastDay: "[??~??st~??rd??~?? ??t] LT",
                lastWeek: "[L~??st] dddd [??t] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "??~?? %s",
                past: "%s ??~g??",
                s: "?? ~f??w ~s??c??~??ds",
                ss: "%d s~??c????~ds",
                m: "?? ~m????~??t??",
                mm: "%d m~??????~t??s",
                h: "??~?? h??~??r",
                hh: "%d h~????rs",
                d: "?? ~d????",
                dd: "%d d~????s",
                M: "?? ~m????~th",
                MM: "%d m~????t~hs",
                y: "?? ~??????r",
                yy: "%d ??~????rs"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(e) {
                var a = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("yo", {
            months: "S?????r?????_E??re??le??_???r?????na??_I??gbe??_E??bibi_O??ku??du_Ag???mo_O??gu??n_Owewe_?????wa??ra??_Be??lu??_?????p???????".split("_"),
            monthsShort: "S?????r_E??rl_???rn_I??gb_E??bi_O??ku??_Ag???_O??gu??_Owe_?????wa??_Be??l_?????p???????".split("_"),
            weekdays: "A??i??ku??_Aje??_I??s?????gun_???j?????ru??_???j?????b???_???ti??_A??ba??m?????ta".split("_"),
            weekdaysShort: "A??i??k_Aje??_I??s?????_???jr_???jb_???ti??_A??ba??".split("_"),
            weekdaysMin: "A??i??_Aj_I??s_???r_???b_???t_A??b".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[O??ni?? ni] LT",
                nextDay: "[?????la ni] LT",
                nextWeek: "dddd [???s????? to??n'b???] [ni] LT",
                lastDay: "[A??na ni] LT",
                lastWeek: "dddd [???s????? to??l?????] [ni] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ni?? %s",
                past: "%s k???ja??",
                s: "i??s???ju?? aaya?? die",
                ss: "aaya?? %d",
                m: "i??s???ju?? kan",
                mm: "i??s???ju?? %d",
                h: "wa??kati kan",
                hh: "wa??kati %d",
                d: "???j????? kan",
                dd: "???j????? %d",
                M: "osu?? kan",
                MM: "osu?? %d",
                y: "???du??n kan",
                yy: "???du??n %d"
            },
            dayOfMonthOrdinalParse: /???j?????\s\d{1,2}/,
            ordinal: "???j????? %d",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("zh-cn", {
            months: "??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_?????????_?????????".split("_"),
            monthsShort: "1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???".split("_"),
            weekdays: "?????????_?????????_?????????_?????????_?????????_?????????_?????????".split("_"),
            weekdaysShort: "??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdaysMin: "???_???_???_???_???_???_???".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY???M???D???",
                LLL: "YYYY???M???D???Ah???mm???",
                LLLL: "YYYY???M???D???ddddAh???mm???",
                l: "YYYY/M/D",
                ll: "YYYY???M???D???",
                lll: "YYYY???M???D??? HH:mm",
                llll: "YYYY???M???D???dddd HH:mm"
            },
            meridiemParse: /??????|??????|??????|??????|??????|??????/,
            meridiemHour: function(e, a) {
                return 12 === e && (e = 0),
                "??????" === a || "??????" === a || "??????" === a ? e : "??????" === a || "??????" === a ? e + 12 : e >= 11 ? e : e + 12
            },
            meridiem: function(e, a, t) {
                var n = 100 * e + a;
                return n < 600 ? "??????" : n < 900 ? "??????" : n < 1130 ? "??????" : n < 1230 ? "??????" : n < 1800 ? "??????" : "??????"
            },
            calendar: {
                sameDay: "[??????]LT",
                nextDay: "[??????]LT",
                nextWeek: function(e) {
                    return e.week() !== this.week() ? "[???]dddLT" : "[???]dddLT"
                },
                lastDay: "[??????]LT",
                lastWeek: function(e) {
                    return this.week() !== e.week() ? "[???]dddLT" : "[???]dddLT"
                },
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(???|???|???)/,
            ordinal: function(e, a) {
                switch (a) {
                case "d":
                case "D":
                case "DDD":
                    return e + "???";
                case "M":
                    return e + "???";
                case "w":
                case "W":
                    return e + "???";
                default:
                    return e
                }
            },
            relativeTime: {
                future: "%s???",
                past: "%s???",
                s: "??????",
                ss: "%d ???",
                m: "1 ??????",
                mm: "%d ??????",
                h: "1 ??????",
                hh: "%d ??????",
                d: "1 ???",
                dd: "%d ???",
                w: "1 ???",
                ww: "%d ???",
                M: "1 ??????",
                MM: "%d ??????",
                y: "1 ???",
                yy: "%d ???"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("zh-hk", {
            months: "??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_?????????_?????????".split("_"),
            monthsShort: "1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???".split("_"),
            weekdays: "?????????_?????????_?????????_?????????_?????????_?????????_?????????".split("_"),
            weekdaysShort: "??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdaysMin: "???_???_???_???_???_???_???".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY???M???D???",
                LLL: "YYYY???M???D??? HH:mm",
                LLLL: "YYYY???M???D???dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYY???M???D???",
                lll: "YYYY???M???D??? HH:mm",
                llll: "YYYY???M???D???dddd HH:mm"
            },
            meridiemParse: /??????|??????|??????|??????|??????|??????/,
            meridiemHour: function(e, a) {
                return 12 === e && (e = 0),
                "??????" === a || "??????" === a || "??????" === a ? e : "??????" === a ? e >= 11 ? e : e + 12 : "??????" === a || "??????" === a ? e + 12 : void 0
            },
            meridiem: function(e, a, t) {
                var n = 100 * e + a;
                return n < 600 ? "??????" : n < 900 ? "??????" : n < 1200 ? "??????" : 1200 === n ? "??????" : n < 1800 ? "??????" : "??????"
            },
            calendar: {
                sameDay: "[??????]LT",
                nextDay: "[??????]LT",
                nextWeek: "[???]ddddLT",
                lastDay: "[??????]LT",
                lastWeek: "[???]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(???|???|???)/,
            ordinal: function(e, a) {
                switch (a) {
                case "d":
                case "D":
                case "DDD":
                    return e + "???";
                case "M":
                    return e + "???";
                case "w":
                case "W":
                    return e + "???";
                default:
                    return e
                }
            },
            relativeTime: {
                future: "%s???",
                past: "%s???",
                s: "??????",
                ss: "%d ???",
                m: "1 ??????",
                mm: "%d ??????",
                h: "1 ??????",
                hh: "%d ??????",
                d: "1 ???",
                dd: "%d ???",
                M: "1 ??????",
                MM: "%d ??????",
                y: "1 ???",
                yy: "%d ???"
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("zh-mo", {
            months: "??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_?????????_?????????".split("_"),
            monthsShort: "1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???".split("_"),
            weekdays: "?????????_?????????_?????????_?????????_?????????_?????????_?????????".split("_"),
            weekdaysShort: "??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdaysMin: "???_???_???_???_???_???_???".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "YYYY???M???D???",
                LLL: "YYYY???M???D??? HH:mm",
                LLLL: "YYYY???M???D???dddd HH:mm",
                l: "D/M/YYYY",
                ll: "YYYY???M???D???",
                lll: "YYYY???M???D??? HH:mm",
                llll: "YYYY???M???D???dddd HH:mm"
            },
            meridiemParse: /??????|??????|??????|??????|??????|??????/,
            meridiemHour: function(e, a) {
                return 12 === e && (e = 0),
                "??????" === a || "??????" === a || "??????" === a ? e : "??????" === a ? e >= 11 ? e : e + 12 : "??????" === a || "??????" === a ? e + 12 : void 0
            },
            meridiem: function(e, a, t) {
                var n = 100 * e + a;
                return n < 600 ? "??????" : n < 900 ? "??????" : n < 1130 ? "??????" : n < 1230 ? "??????" : n < 1800 ? "??????" : "??????"
            },
            calendar: {
                sameDay: "[??????] LT",
                nextDay: "[??????] LT",
                nextWeek: "[???]dddd LT",
                lastDay: "[??????] LT",
                lastWeek: "[???]dddd LT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(???|???|???)/,
            ordinal: function(e, a) {
                switch (a) {
                case "d":
                case "D":
                case "DDD":
                    return e + "???";
                case "M":
                    return e + "???";
                case "w":
                case "W":
                    return e + "???";
                default:
                    return e
                }
            },
            relativeTime: {
                future: "%s???",
                past: "%s???",
                s: "??????",
                ss: "%d ???",
                m: "1 ??????",
                mm: "%d ??????",
                h: "1 ??????",
                hh: "%d ??????",
                d: "1 ???",
                dd: "%d ???",
                M: "1 ??????",
                MM: "%d ??????",
                y: "1 ???",
                yy: "%d ???"
            }
        })
    }(t(0))
}
, function(e, a, t) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("zh-tw", {
            months: "??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_?????????_?????????".split("_"),
            monthsShort: "1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???".split("_"),
            weekdays: "?????????_?????????_?????????_?????????_?????????_?????????_?????????".split("_"),
            weekdaysShort: "??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdaysMin: "???_???_???_???_???_???_???".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY???M???D???",
                LLL: "YYYY???M???D??? HH:mm",
                LLLL: "YYYY???M???D???dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYY???M???D???",
                lll: "YYYY???M???D??? HH:mm",
                llll: "YYYY???M???D???dddd HH:mm"
            },
            meridiemParse: /??????|??????|??????|??????|??????|??????/,
            meridiemHour: function(e, a) {
                return 12 === e && (e = 0),
                "??????" === a || "??????" === a || "??????" === a ? e : "??????" === a ? e >= 11 ? e : e + 12 : "??????" === a || "??????" === a ? e + 12 : void 0
            },
            meridiem: function(e, a, t) {
                var n = 100 * e + a;
                return n < 600 ? "??????" : n < 900 ? "??????" : n < 1130 ? "??????" : n < 1230 ? "??????" : n < 1800 ? "??????" : "??????"
            },
            calendar: {
                sameDay: "[??????] LT",
                nextDay: "[??????] LT",
                nextWeek: "[???]dddd LT",
                lastDay: "[??????] LT",
                lastWeek: "[???]dddd LT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(???|???|???)/,
            ordinal: function(e, a) {
                switch (a) {
                case "d":
                case "D":
                case "DDD":
                    return e + "???";
                case "M":
                    return e + "???";
                case "w":
                case "W":
                    return e + "???";
                default:
                    return e
                }
            },
            relativeTime: {
                future: "%s???",
                past: "%s???",
                s: "??????",
                ss: "%d ???",
                m: "1 ??????",
                mm: "%d ??????",
                h: "1 ??????",
                hh: "%d ??????",
                d: "1 ???",
                dd: "%d ???",
                M: "1 ??????",
                MM: "%d ??????",
                y: "1 ???",
                yy: "%d ???"
            }
        })
    }(t(0))
}
, function(e, a, t) {
    "use strict";
    (function(e) {
        var t = function() {
            if ("undefined" != typeof Map)
                return Map;
            function e(e, a) {
                var t = -1;
                return e.some((function(e, n) {
                    return e[0] === a && (t = n,
                    !0)
                }
                )),
                t
            }
            return function() {
                function a() {
                    this.__entries__ = []
                }
                return Object.defineProperty(a.prototype, "size", {
                    get: function() {
                        return this.__entries__.length
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                a.prototype.get = function(a) {
                    var t = e(this.__entries__, a)
                      , n = this.__entries__[t];
                    return n && n[1]
                }
                ,
                a.prototype.set = function(a, t) {
                    var n = e(this.__entries__, a);
                    ~n ? this.__entries__[n][1] = t : this.__entries__.push([a, t])
                }
                ,
                a.prototype.delete = function(a) {
                    var t = this.__entries__
                      , n = e(t, a);
                    ~n && t.splice(n, 1)
                }
                ,
                a.prototype.has = function(a) {
                    return !!~e(this.__entries__, a)
                }
                ,
                a.prototype.clear = function() {
                    this.__entries__.splice(0)
                }
                ,
                a.prototype.forEach = function(e, a) {
                    void 0 === a && (a = null);
                    for (var t = 0, n = this.__entries__; t < n.length; t++) {
                        var o = n[t];
                        e.call(a, o[1], o[0])
                    }
                }
                ,
                a
            }()
        }()
          , n = "undefined" != typeof window && "undefined" != typeof document && window.document === document
          , o = void 0 !== e && e.Math === Math ? e : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")()
          , i = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(o) : function(e) {
            return setTimeout((function() {
                return e(Date.now())
            }
            ), 1e3 / 60)
        }
        ;
        var r = ["top", "right", "bottom", "left", "width", "height", "size", "weight"]
          , s = "undefined" != typeof MutationObserver
          , c = function() {
            function e() {
                this.connected_ = !1,
                this.mutationEventsAdded_ = !1,
                this.mutationsObserver_ = null,
                this.observers_ = [],
                this.onTransitionEnd_ = this.onTransitionEnd_.bind(this),
                this.refresh = function(e, a) {
                    var t = !1
                      , n = !1
                      , o = 0;
                    function r() {
                        t && (t = !1,
                        e()),
                        n && c()
                    }
                    function s() {
                        i(r)
                    }
                    function c() {
                        var e = Date.now();
                        if (t) {
                            if (e - o < 2)
                                return;
                            n = !0
                        } else
                            t = !0,
                            n = !1,
                            setTimeout(s, a);
                        o = e
                    }
                    return c
                }(this.refresh.bind(this), 20)
            }
            return e.prototype.addObserver = function(e) {
                ~this.observers_.indexOf(e) || this.observers_.push(e),
                this.connected_ || this.connect_()
            }
            ,
            e.prototype.removeObserver = function(e) {
                var a = this.observers_
                  , t = a.indexOf(e);
                ~t && a.splice(t, 1),
                !a.length && this.connected_ && this.disconnect_()
            }
            ,
            e.prototype.refresh = function() {
                this.updateObservers_() && this.refresh()
            }
            ,
            e.prototype.updateObservers_ = function() {
                var e = this.observers_.filter((function(e) {
                    return e.gatherActive(),
                    e.hasActive()
                }
                ));
                return e.forEach((function(e) {
                    return e.broadcastActive()
                }
                )),
                e.length > 0
            }
            ,
            e.prototype.connect_ = function() {
                n && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_),
                window.addEventListener("resize", this.refresh),
                s ? (this.mutationsObserver_ = new MutationObserver(this.refresh),
                this.mutationsObserver_.observe(document, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                })) : (document.addEventListener("DOMSubtreeModified", this.refresh),
                this.mutationEventsAdded_ = !0),
                this.connected_ = !0)
            }
            ,
            e.prototype.disconnect_ = function() {
                n && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_),
                window.removeEventListener("resize", this.refresh),
                this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh),
                this.mutationsObserver_ = null,
                this.mutationEventsAdded_ = !1,
                this.connected_ = !1)
            }
            ,
            e.prototype.onTransitionEnd_ = function(e) {
                var a = e.propertyName
                  , t = void 0 === a ? "" : a;
                r.some((function(e) {
                    return !!~t.indexOf(e)
                }
                )) && this.refresh()
            }
            ,
            e.getInstance = function() {
                return this.instance_ || (this.instance_ = new e),
                this.instance_
            }
            ,
            e.instance_ = null,
            e
        }()
          , d = function(e, a) {
            for (var t = 0, n = Object.keys(a); t < n.length; t++) {
                var o = n[t];
                Object.defineProperty(e, o, {
                    value: a[o],
                    enumerable: !1,
                    writable: !1,
                    configurable: !0
                })
            }
            return e
        }
          , M = function(e) {
            return e && e.ownerDocument && e.ownerDocument.defaultView || o
        }
          , u = L(0, 0, 0, 0);
        function l(e) {
            return parseFloat(e) || 0
        }
        function _(e) {
            for (var a = [], t = 1; t < arguments.length; t++)
                a[t - 1] = arguments[t];
            return a.reduce((function(a, t) {
                return a + l(e["border-" + t + "-width"])
            }
            ), 0)
        }
        function m(e) {
            var a = e.clientWidth
              , t = e.clientHeight;
            if (!a && !t)
                return u;
            var n = M(e).getComputedStyle(e)
              , o = function(e) {
                for (var a = {}, t = 0, n = ["top", "right", "bottom", "left"]; t < n.length; t++) {
                    var o = n[t]
                      , i = e["padding-" + o];
                    a[o] = l(i)
                }
                return a
            }(n)
              , i = o.left + o.right
              , r = o.top + o.bottom
              , s = l(n.width)
              , c = l(n.height);
            if ("border-box" === n.boxSizing && (Math.round(s + i) !== a && (s -= _(n, "left", "right") + i),
            Math.round(c + r) !== t && (c -= _(n, "top", "bottom") + r)),
            !function(e) {
                return e === M(e).document.documentElement
            }(e)) {
                var d = Math.round(s + i) - a
                  , m = Math.round(c + r) - t;
                1 !== Math.abs(d) && (s -= d),
                1 !== Math.abs(m) && (c -= m)
            }
            return L(o.left, o.top, s, c)
        }
        var p = "undefined" != typeof SVGGraphicsElement ? function(e) {
            return e instanceof M(e).SVGGraphicsElement
        }
        : function(e) {
            return e instanceof M(e).SVGElement && "function" == typeof e.getBBox
        }
        ;
        function f(e) {
            return n ? p(e) ? function(e) {
                var a = e.getBBox();
                return L(0, 0, a.width, a.height)
            }(e) : m(e) : u
        }
        function L(e, a, t, n) {
            return {
                x: e,
                y: a,
                width: t,
                height: n
            }
        }
        var b = function() {
            function e(e) {
                this.broadcastWidth = 0,
                this.broadcastHeight = 0,
                this.contentRect_ = L(0, 0, 0, 0),
                this.target = e
            }
            return e.prototype.isActive = function() {
                var e = f(this.target);
                return this.contentRect_ = e,
                e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
            }
            ,
            e.prototype.broadcastRect = function() {
                var e = this.contentRect_;
                return this.broadcastWidth = e.width,
                this.broadcastHeight = e.height,
                e
            }
            ,
            e
        }()
          , h = function(e, a) {
            var t, n, o, i, r, s, c, M = (n = (t = a).x,
            o = t.y,
            i = t.width,
            r = t.height,
            s = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            c = Object.create(s.prototype),
            d(c, {
                x: n,
                y: o,
                width: i,
                height: r,
                top: o,
                right: n + i,
                bottom: r + o,
                left: n
            }),
            c);
            d(this, {
                target: e,
                contentRect: M
            })
        }
          , A = function() {
            function e(e, a, n) {
                if (this.activeObservations_ = [],
                this.observations_ = new t,
                "function" != typeof e)
                    throw new TypeError("The callback provided as parameter 1 is not a function.");
                this.callback_ = e,
                this.controller_ = a,
                this.callbackCtx_ = n
            }
            return e.prototype.observe = function(e) {
                if (!arguments.length)
                    throw new TypeError("1 argument required, but only 0 present.");
                if ("undefined" != typeof Element && Element instanceof Object) {
                    if (!(e instanceof M(e).Element))
                        throw new TypeError('parameter 1 is not of type "Element".');
                    var a = this.observations_;
                    a.has(e) || (a.set(e, new b(e)),
                    this.controller_.addObserver(this),
                    this.controller_.refresh())
                }
            }
            ,
            e.prototype.unobserve = function(e) {
                if (!arguments.length)
                    throw new TypeError("1 argument required, but only 0 present.");
                if ("undefined" != typeof Element && Element instanceof Object) {
                    if (!(e instanceof M(e).Element))
                        throw new TypeError('parameter 1 is not of type "Element".');
                    var a = this.observations_;
                    a.has(e) && (a.delete(e),
                    a.size || this.controller_.removeObserver(this))
                }
            }
            ,
            e.prototype.disconnect = function() {
                this.clearActive(),
                this.observations_.clear(),
                this.controller_.removeObserver(this)
            }
            ,
            e.prototype.gatherActive = function() {
                var e = this;
                this.clearActive(),
                this.observations_.forEach((function(a) {
                    a.isActive() && e.activeObservations_.push(a)
                }
                ))
            }
            ,
            e.prototype.broadcastActive = function() {
                if (this.hasActive()) {
                    var e = this.callbackCtx_
                      , a = this.activeObservations_.map((function(e) {
                        return new h(e.target,e.broadcastRect())
                    }
                    ));
                    this.callback_.call(e, a, e),
                    this.clearActive()
                }
            }
            ,
            e.prototype.clearActive = function() {
                this.activeObservations_.splice(0)
            }
            ,
            e.prototype.hasActive = function() {
                return this.activeObservations_.length > 0
            }
            ,
            e
        }()
          , z = "undefined" != typeof WeakMap ? new WeakMap : new t
          , y = function e(a) {
            if (!(this instanceof e))
                throw new TypeError("Cannot call a class as a function.");
            if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
            var t = c.getInstance()
              , n = new A(a,t,this);
            z.set(this, n)
        };
        ["observe", "unobserve", "disconnect"].forEach((function(e) {
            y.prototype[e] = function() {
                var a;
                return (a = z.get(this))[e].apply(a, arguments)
            }
        }
        ));
        var g = void 0 !== o.ResizeObserver ? o.ResizeObserver : y;
        a.a = g
    }
    ).call(this, t(144))
}
, function(e, a, t) {
    "use strict";
    t.r(a),
    t.d(a, "readMoreFunction", (function() {
        return y
    }
    )),
    t.d(a, "createPopup", (function() {
        return g
    }
    ));
    t(139);
    var n = t(137)
      , o = t(1)
      , i = t.n(o)
      , r = ""
      , s = '<svg width="60%" height="60%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="geoOffersLoadingIcon"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect><g transform="rotate(0 50 50)"><circle r="5" cx="30" cy="50"><animateTransform attributeName="transform" type="translate" begin="0s" repeatCount="indefinite" dur="1s" values="0 0;19.999999999999996 -20" keyTimes="0;1"/><animate attributeName="fill" dur="1s" begin="0s" repeatCount="indefinite"  keyTimes="0;1" values="#fff;#999"/></circle></g><g transform="rotate(90 50 50)"><circle r="5" cx="30" cy="50"><animateTransform attributeName="transform" type="translate" begin="0s" repeatCount="indefinite" dur="1s" values="0 0;19.999999999999996 -20" keyTimes="0;1"/><animate attributeName="fill" dur="1s" begin="0s" repeatCount="indefinite"  keyTimes="0;1" values="#999;#000"/></circle></g><g transform="rotate(180 50 50)"><circle r="5" cx="30" cy="50"><animateTransform attributeName="transform" type="translate" begin="0s" repeatCount="indefinite" dur="1s" values="0 0;19.999999999999996 -20" keyTimes="0;1"/><animate attributeName="fill" dur="1s" begin="0s" repeatCount="indefinite"  keyTimes="0;1" values="#000;#fff"/></circle></g><g transform="rotate(270 50 50)"><circle r="5" cx="30" cy="50"><animateTransform attributeName="transform" type="translate" begin="0s" repeatCount="indefinite" dur="1s" values="0 0;19.999999999999996 -20" keyTimes="0;1"/><animate attributeName="fill" dur="1s" begin="0s" repeatCount="indefinite"  keyTimes="0;1" values="#fff;#999"/></circle></g></svg>';
    const c = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var d = {
        GB: 44,
        US: 1,
        FR: 33,
        DE: 49,
        ES: 34,
        IT: 39,
        IE: 353,
        NL: 31,
        AU: 61,
        PL: 48,
        CH: 41,
        AD: 376,
        AE: 971,
        AG: 1268,
        AI: 1264,
        AM: 374,
        AO: 244,
        AR: 54,
        AT: 43,
        AW: 297,
        AZ: 994,
        BA: 387,
        BB: 1246,
        BD: 880,
        BE: 32,
        BF: 226,
        BG: 359,
        BH: 973,
        BI: 257,
        BJ: 229,
        BM: 1441,
        BN: 673,
        BO: 591,
        BR: 55,
        BS: 1242,
        BT: 975,
        BW: 267,
        BY: 375,
        BZ: 501,
        CA: 1,
        CF: 236,
        CG: 242,
        CK: 682,
        CL: 56,
        CM: 237,
        CN: 86,
        CO: 57,
        CR: 506,
        CS: 381,
        CU: 53,
        CV: 238,
        CY: 357,
        CZ: 420,
        DK: 45,
        DJ: 253,
        DM: 1809,
        DO: 1809,
        DZ: 213,
        EC: 593,
        EE: 372,
        EG: 20,
        ER: 291,
        ET: 251,
        FI: 358,
        FJ: 679,
        FK: 500,
        FM: 691,
        FO: 298,
        GA: 241,
        GD: 1473,
        GE: 7880,
        GF: 594,
        GH: 233,
        GI: 350,
        GL: 299,
        GM: 220,
        GN: 224,
        GP: 590,
        GQ: 240,
        GR: 30,
        GT: 502,
        GU: 671,
        GW: 245,
        GY: 592,
        HK: 852,
        HN: 504,
        HR: 385,
        HT: 509,
        HU: 36,
        ID: 62,
        IL: 972,
        IN: 91,
        IQ: 964,
        IR: 98,
        IS: 354,
        JM: 1876,
        JO: 962,
        JP: 81,
        KE: 254,
        KG: 996,
        KH: 855,
        KI: 686,
        KM: 269,
        KN: 1869,
        KP: 850,
        KR: 82,
        KW: 965,
        KY: 1345,
        KZ: 7,
        LA: 856,
        LB: 961,
        LI: 417,
        LK: 94,
        LR: 231,
        LS: 266,
        LT: 370,
        LU: 352,
        LV: 371,
        LY: 218,
        MA: 212,
        MC: 377,
        MD: 373,
        MG: 261,
        MH: 692,
        MK: 389,
        ML: 223,
        MN: 976,
        MO: 853,
        MQ: 596,
        MR: 222,
        MS: 1664,
        MT: 356,
        MV: 960,
        MW: 265,
        MX: 52,
        MY: 60,
        MZ: 258,
        NA: 264,
        NC: 687,
        NE: 227,
        NF: 672,
        NG: 234,
        NI: 505,
        NO: 47,
        NP: 977,
        NR: 674,
        NU: 683,
        NZ: 64,
        OM: 968,
        PA: 507,
        PE: 51,
        PF: 689,
        PG: 675,
        PH: 63,
        PK: 92,
        PR: 1787,
        PT: 351,
        PW: 680,
        PY: 595,
        QA: 974,
        RE: 262,
        RO: 40,
        RU: 7,
        RW: 250,
        SA: 966,
        SB: 677,
        SC: 1758,
        SD: 249,
        SE: 46,
        SG: 65,
        SH: 290,
        SI: 386,
        SK: 421,
        SL: 232,
        SM: 378,
        SN: 221,
        SO: 252,
        SR: 597,
        ST: 239,
        SV: 503,
        SY: 963,
        SZ: 268,
        TC: 1649,
        TG: 228,
        TH: 66,
        TJ: 992,
        TM: 993,
        TN: 216,
        TO: 676,
        TR: 90,
        TT: 1868,
        TV: 688,
        TW: 886,
        UA: 380,
        UG: 256,
        UY: 598,
        UZ: 998,
        VA: 379,
        VE: 58,
        VG: 1,
        VI: 1,
        VN: 84,
        VU: 678,
        WF: 681,
        YE: 967,
        YT: 269,
        ZA: 27,
        ZM: 260,
        ZW: 263
    }
      , M = !1
      , u = !0
      , l = null
      , _ = null;
    let m = new Date;
    var p = -1 * m.getTimezoneOffset();
    Date.prototype.stdTimezoneOffset = function() {
        var e = new Date(this.getFullYear(),0,1)
          , a = new Date(this.getFullYear(),6,1);
        return Math.max(e.getTimezoneOffset(), a.getTimezoneOffset())
    }
    ,
    Date.prototype.isDstObserved = function() {
        return this.getTimezoneOffset() < this.stdTimezoneOffset()
    }
    ;
    var f = m.isDstObserved();
    function L() {
        let e = localStorage.getItem("geoOffersEndUserUid");
        var a;
        return e || localStorage.setItem("geoOffersEndUserUid", (a = (new Date).getTime(),
        "undefined" != typeof performance && "function" == typeof performance.now && (a += performance.now()),
        e = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
            var t = (a + 16 * Math.random()) % 16 | 0;
            return a = Math.floor(a / 16),
            ("x" === e ? t : 3 & t | 8).toString(16)
        }
        )))),
        e
    }
    function b(e) {
        for (var a = 0, t = 0; e; )
            a += e.offsetLeft - e.scrollLeft + e.clientLeft,
            t += e.offsetTop - e.scrollTop + e.clientTop,
            e = e.offsetParent;
        return {
            x: a,
            y: t
        }
    }
    function h(e) {
        var a = document.createElement("div");
        return a.innerHTML = e.trim(),
        a.firstChild
    }
    function A(e, a, t, n) {
        let o = "";
        o = t ? "https://api.openweathermap.org/data/2.5/weather?lat=" + n.latitude + "&lon=" + n.longitude + "&units=metric&APPID=90ad4c313430fa2471e2f2faa25dbc94" : "https://api.openweathermap.org/data/2.5/weather?q=" + n.city + "&units=metric&APPID=90ad4c313430fa2471e2f2faa25dbc94",
        fetch(o, {
            method: "GET",
            mode: "cors",
            cache: "reload"
        }).then((function(e) {
            return e.json()
        }
        )).then((function(t) {
            let n = t.weather[0].id
              , o = t.main.temp > e.minTemperature && t.main.temp < e.maxTemperature
              , i = null;
            800 == n ? i = "clear" : n > 800 && n < 810 ? i = "cloudy" : n > 199 && n < 623 ? i = "rainy" : n > 699 && n < 800 && (i = "cloudy");
            let r = !0;
            e.weatherType != i && (r = !1),
            "any" == e.weatherType && (r = !0),
            o || (r = !1),
            a.style.visibility = r ? "visible" : "hidden"
        }
        ))
    }
    function z(e, a, t, n=null, o=null, i=null, r=null, s=null) {
        let c = document.createElement(t);
        if (c.id = a + "_" + e,
        c.classList.add(a),
        n && (c.innerHTML = n),
        o)
            for (let e of o)
                c.setAttribute(e.type, e.value);
        if (i && (c.name = i),
        r)
            for (let e of r)
                c.classList.add(e);
        return s && (c.value = s),
        c
    }
    function y(e) {
        var a = document.getElementById("geoDots" + e)
          , t = document.getElementById("geoPopupText" + e)
          , n = document.getElementById("geoToggleButton" + e);
        "none" === a.style.display ? (a.style.display = "inline",
        n.innerHTML = "Read more",
        t.style.display = "none") : (a.style.display = "none",
        n.innerHTML = "Read less",
        t.style.display = "inline")
    }
    function g(e, a, t=null) {
        let o;
        l = a.regC,
        _ = a.campaignId;
        let m = !1
          , y = !1
          , g = document.getElementById(e);
        switch (t && "env"in t && (r = t.env),
        t && "env"in t && (r = t.env),
        r) {
        case "-docker":
            var Y = "http://127.0.0.1:80"
              , O = "127.0.0.1";
            break;
        case "-stg":
            Y = "https://app-stg.zappitrewards.com",
            O = "zptr-s.im";
            break;
        case "-ppe":
            Y = "https://app-ppe.zappitrewards.com",
            O = "zptr-p.im";
            break;
        default:
            Y = "https://app.zappitrewards.com",
            O = "zptr.im"
        }
        g.style.position = "relative";
        var k = b(document.getElementById(e));
        fetch(Y + "/api/info/" + a, {
            method: "POST",
            mode: "cors",
            cache: "reload",
            body: JSON.stringify({
                endUserUid: L(),
                isMobile: mobilecheck(),
                url: window.location.href
            })
        }).then((function(e) {
            return e.json()
        }
        )).then((function(a) {
            if (a.error)
                throw new Error(a.error);
            if (document.getElementById(e).style.cursor = "pointer",
            a.customButtonText && !t.isCms)
                try {
                    g.innerHTML = a.customButtonText
                } catch (e) {}
            if (!0 === a.sendLimitExhausted) {
                g.innerHTML = "Sorry, no more coupons available",
                g.style.cursor = "default";
                var r = a.sendLimitExhausted
            }
            var D = !0;
            if (a.allowedReferrers) {
                let e = "";
                document.referrer ? (e = document.referrer.match(/:\/\/(.[^/]+)/)[1],
                D = a.allowedReferrers.find(a=>a === e)) : (e = "",
                D = !0),
                D || (g.innerHTML = "Promotion Ended",
                g.style.cursor = "default")
            }
            function N(n) {
                let i, r = z(e, "geoOffers", "div"), _ = z(e, "geoPic", "div", null, [{
                    type: "style",
                    value: "background: url(" + n.logomedia + ") no-repeat center !important; background-size: cover !important;"
                }]), m = z(e, "geoText", "div"), p = z(e, "geoCouponHeadline", "span", n.headline), f = z(e, "geoCouponSubHeadline", "span", n.subheadline);
                if (m.appendChild(p),
                m.appendChild(f),
                null == n.isLM || 0 == n.isLM)
                    if (n.mapslink && null !== n.mapslink && n.locations) {
                        let a = n.mapsText ? n.mapsText : "Find your nearest store"
                          , t = z(e, "geoLinkWrapper", "a", a, [{
                            type: "href",
                            value: n.mapslink
                        }, {
                            type: "target",
                            value: "_blank"
                        }]);
                        m.appendChild(t),
                        i = z(e, "geoOffersDistance", "div", ""),
                        m.appendChild(i)
                    } else if (n.locations && n.locations.length > 0) {
                        let a = n.mapsText ? n.mapsText : "Find your nearest store"
                          , t = z(e, "geoLinkWrapper", "a", a, [{
                            type: "href",
                            value: "https://map.geo-offers.com/?c=" + n.campaignId
                        }, {
                            type: "target",
                            value: "_blank"
                        }]);
                        m.appendChild(t),
                        i = z(e, "geoOffersDistance", "div", ""),
                        m.appendChild(i)
                    }
                let L, b = z(e, "geoOffersLoading", "div", s), A = z(e, "geoOffersClose", "div", '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 283.5 283.5" style="enable-background:new 0 0 283.5 283.5;" xml:space="preserve"><style type="text/css"> .st0{fill:none;stroke:#FFFFFF;stroke-width:26.0461;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style><circle cx="141.7" cy="141.7" r="136.7"/><line class="st0" x1="99" y1="184.4" x2="184.4" y2="99"/><line class="st0" x1="99" y1="99" x2="184.4" y2="184.4"/></svg>'), y = z(e, "geoOfferForm", "form", null, null, "form_" + e), T = n.formTitleWhenCallIsAvailable, O = new Date, D = O.getHours();
                if (u = !0,
                n.openingHours && (u = 0 == O.getDay() ? D >= n.openingHours.sunday[0] && D < n.openingHours.sunday[1] : 6 == O.getDay() ? D >= n.openingHours.saturday[0] && D < n.openingHours.saturday[1] : D >= n.openingHours.weekday[0] && D < n.openingHours.weekday[1]),
                n.callNowPhoneNumber && u) {
                    L = z(e, "geoFormTitle", "div", ""),
                    L.classList.add("geoCallNowSection");
                    let a = h("<span>" + n.textBeforeCouponCodeAndPhoneNumber + "</span>")
                      , t = h('<span class="geoCouponCodeAndPhoneSection"></span>');
                    L.appendChild(t),
                    o = h('<span id="geoCouponCode" class="geoCouponCode"></span>');
                    let i = h('<a href="tel:' + n.callNowPhoneNumber + '"><div id="geoPhoneButton_' + e + '" class="geoSendButton geoPhoneButton"><span style="color:inherit;margin-right:5px;">&phone;</span>' + n.callNowPhoneNumber + "</div></a>")
                      , r = h('<span style="width: 100px; padding: 0 3px 0 0">quoting code:</span>');
                    t.appendChild(a),
                    t.appendChild(i),
                    t.appendChild(r),
                    t.appendChild(o)
                } else
                    T = n.formTitle;
                let N = z(e, "geoFormTitle", "div", T)
                  , w = document.createElement("div");
                w.classList.add("geoPhoneContainer");
                let W = z(e, "geoCountryCode", "select", null, null, "countryCode");
                for (let e in d) {
                    let a = document.createElement("option");
                    a.value = "+" + d[e],
                    a.innerHTML = e + " +" + d[e],
                    d[e] === t.defaultCountryCode && (a.selected = !0),
                    W.appendChild(a)
                }
                n.ipInfo && n.ipInfo.countryCode && "" !== n.ipInfo.countryCode && (W.value = "+" + d[n.ipInfo.countryCode]);
                let q = "Mobile number (required)";
                t && !1 === t.sendSms && (q = "Mobile number"),
                n.isPhoneRequired || (q = "Mobile number");
                let v = z(e, "geoPhoneNumber", "input", null, [{
                    type: "type",
                    value: "tel"
                }, {
                    type: "pattern",
                    value: "[+]?[0-9]*[\\s]?"
                }, {
                    type: "minLength",
                    value: "7"
                }, {
                    type: "placeholder",
                    value: q
                }, {
                    type: "required",
                    value: ""
                }, {
                    type: "autocomplete",
                    value: "tel"
                }], "telephone", ["geoOfferTextInput"]);
                n.isPhoneRequired || v.removeAttribute("required", "");
                let S = null;
                if (S = t && !1 === t.sendSms ? z(e, "geoDisclaimerFull", "div", "Your privacy is important to us - we won't share your details with any 3rd party company.") : z(e, "geoDisclaimer", "div", "Your information will not be used without your full consent."),
                w.appendChild(W),
                w.appendChild(v),
                L && y.appendChild(L),
                y.appendChild(N),
                n.nameinput) {
                    let a = z(e, "geoFullName1", "input", null, [{
                        type: "type",
                        value: "text"
                    }, {
                        type: "placeholder",
                        value: "First Name"
                    }, {
                        type: "autocomplete",
                        value: "given-name"
                    }], "fname", ["geoOfferTextInput"]);
                    y.appendChild(a)
                }
                if (n.nameinput) {
                    let a = z(e, "geoFullName2", "input", null, [{
                        type: "type",
                        value: "text"
                    }, {
                        type: "placeholder",
                        value: "Last Name"
                    }, {
                        type: "autocomplete",
                        value: "family-name"
                    }], "lname", ["geoOfferTextInput"]);
                    y.appendChild(a)
                }
                if (n.emailinput) {
                    let a = z(e, "geoEmail", "input", null, [{
                        type: "type",
                        value: "email"
                    }, {
                        type: "placeholder",
                        value: "Email"
                    }, {
                        type: "autocomplete",
                        value: "email"
                    }], "email", ["geoOfferTextInput"]);
                    y.appendChild(a)
                } else if (!n.isPhoneRequired) {
                    let a = z(e, "geoEmail", "input", null, [{
                        type: "type",
                        value: "email"
                    }, {
                        type: "placeholder",
                        value: "Email (required)"
                    }, {
                        type: "autocomplete",
                        value: "email"
                    }], "email", ["geoOfferTextInput"]);
                    y.appendChild(a)
                }
                (n.isPhoneRequired || n.phoneinput) && y.appendChild(w),
                y.appendChild(S);
                let B = "javascript:;"
                  , X = "javascript:;";
                t && t.termsurl && (B = t.termsurl),
                t && t.privacyurl && (X = t.privacyurl);
                let E = document.createElement("label");
                E.classList.add("tnclabel");
                let H = z(e, "tncs", "input", null, [{
                    type: "type",
                    value: "checkbox"
                }, {
                    type: "required",
                    value: ""
                }], null, ["geoOffercheckbox"])
                  , x = z(e, "tncelem", "span", a.usesCustomTnc && a.customTnc ? a.customTnc : 'I accept the <a class="tnclink" href="' + B + '" target="_blank">Terms</a> and <a class="tnclink" href="' + X + '" target="_blank">Privacy Policy</a>')
                  , C = z(e, "geoSub-message", "div");
                if (E.appendChild(H),
                E.appendChild(x),
                C.appendChild(E),
                y.appendChild(C),
                t && t.customername || a.usesCustomCustomer) {
                    let n = document.createElement("label");
                    n.classList.add("cuslabel");
                    let o = z(e, "optincus", "input", null, [{
                        type: "type",
                        value: "checkbox"
                    }], "optinCustomer" + e, ["geoOffercheckbox"])
                      , i = z(e, "optincuselem", "span", a.usesCustomCustomer && a.customCustomer ? a.customCustomer : "Send me more offers from " + t.customername, [{
                        type: "for",
                        value: "optinCustomer" + e
                    }])
                      , r = document.createElement("div");
                    r.classList.add("geoSub-message"),
                    r.id = "cusnamecb_" + e,
                    n.appendChild(o),
                    n.appendChild(i),
                    r.appendChild(n),
                    y.appendChild(r)
                }
                if (t && t.companyname || a.usesCustomCompany) {
                    let n = document.createElement("label");
                    n.classList.add("clilabel");
                    let o = z(e, "optincli", "input", null, [{
                        type: "type",
                        value: "checkbox"
                    }], "optinClient" + e, ["geoOffercheckbox"])
                      , i = z(e, "optinclielem", "span", a.usesCustomCompany && a.customCompany ? a.customCompany : "Send me exclusive offers by " + t.companyname, [{
                        type: "for",
                        value: "optinCustomer" + e
                    }])
                      , r = document.createElement("div");
                    r.classList.add("geoSub-message"),
                    r.id = "clinamecb_" + e,
                    n.appendChild(o),
                    n.appendChild(i),
                    r.appendChild(n),
                    y.appendChild(r)
                }
                if (a.customConsentInformation) {
                    document.createElement("label").classList.add("customConsentInformationLabel");
                    let t = z(e, "customConsentInformation", "div", a.customConsentInformation, [{
                        type: "for",
                        value: "customConsentInformation" + e
                    }]);
                    y.appendChild(t)
                }
                let j = z(e, "geoSentWrapper", "div", null, [{
                    type: "style",
                    value: "display:none"
                }])
                  , P = "Offer has been sent to your mobile phone!";
                t && !1 === t.sendSms && (P = "Thank you for completing the form");
                let R = z(e, "geoConfirmMessage", "div", P)
                  , I = h('<div id="geoRedirectMessage_' + e + '" style="margin: 1rem 0; display: none;">Your coupon is ready! <a href="#" id="geoRedirectAnchor_' + e + '">Open now</a> or wait <span id="geoSecondsToRedirect_' + e + '">3</span> seconds and we???ll take you there???</div>')
                  , F = z(e, "geoOffersShare", "div")
                  , U = z(e, "geoShareText", "span", "Recommend this" + (t && !1 === t.sendSms ? " " : " offer ") + "to your friends:")
                  , G = z(e, "geoShareIconWrap", "div")
                  , J = z(e, "geoShareWA", "a", '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" x="0px" y="0px" viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve"><style type="text/css">.WA0{fill:#35A849;}.WA1{fill:#FFFFFF;}</style><g><circle class="WA0" cx="150" cy="150" r="150"/><g><g><path id="SVGID_1_" class="WA1" d="M150.4,246.1C150.4,246.1,150.4,246.1,150.4,246.1 M150.4,246.1 C150.4,246.1,150.4,246.1,150.4,246.1C150.4,246.1,150.4,246.1,150.4,246.1 M83.8,195l-1.9-3c-8.1-12.8-12.4-27.6-12.4-42.9 c0-44.4,36.3-80.5,81-80.5c21.6,0,41.9,8.4,57.2,23.6c15.3,15.2,23.7,35.5,23.7,57c0,44.4-36.3,80.6-80.9,80.6h0 c-14.5,0-28.8-3.9-41.2-11.2l-3-1.7l-30.6,8L83.8,195z M53,149.1c0,17.1,4.5,33.8,13,48.4l-13.8,50.2l51.6-13.5 c14.2,7.7,30.2,11.8,46.5,11.8h0c53.7,0,97.4-43.5,97.4-96.9c0-25.9-10.1-50.2-28.5-68.6c-18.4-18.3-42.8-28.4-68.9-28.4 C96.7,52.2,53.1,95.7,53,149.1"/></g><path class="WA1" d="M126.1,108.6c-1.8-4-3.7-4.1-5.5-4.2c-1.4-0.1-3-0.1-4.7-0.1c-1.6,0-4.3,0.6-6.5,3c-2.2,2.4-8.5,8.3-8.5,20.2 c0,11.9,8.7,23.4,9.9,25.1c1.2,1.6,16.8,26.9,41.6,36.6c20.6,8.1,24.7,6.5,29.2,6.1c4.5-0.4,14.4-5.9,16.4-11.5 c2-5.7,2-10.5,1.4-11.5c-0.6-1-2.2-1.6-4.7-2.8c-2.4-1.2-14.4-7.1-16.6-7.9c-2.2-0.8-3.9-1.2-5.5,1.2c-1.6,2.4-6.3,7.9-7.7,9.5 c-1.4,1.6-2.8,1.8-5.3,0.6c-2.4-1.2-10.3-3.8-19.6-12c-7.2-6.4-12.1-14.3-13.5-16.8c-1.4-2.4-0.2-3.7,1.1-4.9 c1.1-1.1,2.4-2.8,3.7-4.2c1.2-1.4,1.6-2.4,2.4-4c0.8-1.6,0.4-3-0.2-4.2C133,125.4,128.2,113.4,126.1,108.6"/></g></g></svg>', [{
                    type: "href",
                    value: "whatsapp://send?text=I recommend this amazing offer: " + n.headline + ". Check it out here " + window.location.href
                }, {
                    type: "target",
                    value: "_blank"
                }])
                  , K = z(e, "geoShareFB", "a", '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve"><style type="text/css">.fbicon0{fill:#3C5A99;}.fbicon1{fill:#FFFFFF;}</style><circle class="fbicon0" cx="150" cy="150" r="150"/><path id="f" class="fbicon1" d="M162.7,232.2v-75h25.2l3.8-29.2h-28.9v-18.7c0-8.5,2.3-14.2,14.5-14.2l15.5,0V69 c-2.7-0.4-11.9-1.2-22.5-1.2c-22.3,0-37.6,13.6-37.6,38.6V128h-25.2v29.2h25.2v75H162.7z"/></svg>', [{
                    type: "href",
                    value: "fb-messenger://share?link=I highly recommend this offer " + window.location.href
                }, {
                    type: "target",
                    value: "_blank"
                }])
                  , V = z(e, "geoShareTW", "a", '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="123.445 0 596 595.281" enable-background="new 123.445 0 596 595.281" xml:space="preserve"><g id="Layer_2"><circle fill="#2DAAE1" cx="420.944" cy="296.781" r="294.5"/></g><g id="Icon"><path fill="#FFFFFF" d="M609.773,179.634c-13.891,6.164-28.811,10.331-44.498,12.204c16.01-9.587,28.275-24.779,34.066-42.86 c-14.955,8.879-31.537,15.328-49.209,18.801c-14.125-15.056-34.266-24.456-56.551-24.456c-42.773,0-77.461,34.675-77.461,77.473 c0,6.064,0.682,11.98,1.996,17.66c-64.389-3.236-121.474-34.079-159.684-80.945c-6.672,11.446-10.491,24.754-10.491,38.953 c0,26.875,13.679,50.587,34.464,64.477c-12.699-0.396-24.643-3.882-35.097-9.686c0,0.322,0,0.645,0,0.979 c0,37.54,26.701,68.842,62.145,75.961c-6.511,1.785-13.344,2.716-20.413,2.716c-4.998,0-9.847-0.472-14.584-1.364 c9.859,30.769,38.47,53.166,72.363,53.799c-26.515,20.785-59.925,33.174-96.212,33.174c-6.25,0-12.427-0.372-18.491-1.104 c34.291,21.988,75.006,34.824,118.759,34.824c142.496,0,220.427-118.052,220.427-220.428c0-3.361-0.074-6.697-0.236-10.021 C586.245,208.815,599.392,195.174,609.773,179.634z"/></g></svg>', [{
                    type: "href",
                    value: "https://twitter.com/intent/tweet?original_referer=" + window.location.href + "&text=I recommend this amazing offer: " + encodeURIComponent(n.headline) + ". Check it out here " + window.location.href
                }, {
                    type: "target",
                    value: "_blank"
                }])
                  , Q = z(e, "geoShareEM", "a", '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" x="0px" y="0px" viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve"><style type="text/css">.EM0{fill:#2EBDEE;}.EM1{fill:#FFFFFF;}</style><g><circle class="EM0" cx="150" cy="150" r="150"/><path class="EM1" d="M150.9,175.8c-0.8,0-1.8-0.5-2.6-0.9c-0.3-0.2-1-0.7-1.4-1c-0.2-0.2-0.4-0.3-0.6-0.4l-24.7-25.4l-1.7-1.8 l-1.7-1.7l-0.5-0.6l-29.1-30.2L64,88.6c0,0,173.9,0,173.9,0l-24.6,25.3l-29.2,30l-28.7,29.7c-0.5,0.4-0.8,0.7-1.1,1 c-0.4,0.4-0.6,0.5-0.7,0.6c-1,0.5-1.9,0.7-2.7,0.7L150.9,175.8z"/><path class="EM1" d="M52.6,204.1c-0.7-1.7-1.1-3.6-1.1-5.6v-97.1c0-2.8,0.8-5.5,2.1-7.7l27,27.9l27.6,28.4l-24.5,23.7l-30,29.2 L52.6,204.1z"/><path class="EM1" d="M219.3,174.7L193.8,150l27.5-28.4l25.8-26.7c0.9,1.9,1.4,4.1,1.4,6.4v97.1c0,1.4-0.2,2.8-0.5,4.1L219.3,174.7z"/><path class="EM1" d="M62.2,211.4c-0.5,0-0.9,0-1.4-0.1l30.6-29.7l24.3-23.7l23.2,23.8l0.5,0.4c1.1,0.9,1.8,1.5,3.1,2.2 c2.1,1,5,2.3,8,2.3l0.2,0c3.1,0,6-1.2,7.9-2.1c1.1-0.5,2-1.2,2.8-1.8c0.4-0.3,0.8-0.6,1.2-0.9l0.3-0.2l23-23.7l25.5,24.6l29.2,28.3 c-1,0.4-2,0.5-3,0.5L62.2,211.4L62.2,211.4z"/></g></svg>', [{
                    type: "href",
                    value: "mailto:#?subject=I highly recommend this offer&body=Hey, I just found this offer: " + encodeURIComponent(n.headline) + ". Check it out here " + window.location.href + ", I highly recommend you take a look. Thanks."
                }, {
                    type: "target",
                    value: "_blank"
                }]);
                G.appendChild(J),
                G.appendChild(K),
                G.appendChild(V),
                G.appendChild(Q),
                F.appendChild(U),
                F.appendChild(G);
                let Z = z(e, "geoCloseLinkElement", "a", "Close", [{
                    type: "href",
                    value: "javascript:;"
                }]);
                Z.style.display = "block",
                j.appendChild(R),
                j.appendChild(I),
                j.appendChild(F);
                let$ = "Send Offer";
                t && !1 === t.sendSms && ($ = "Submit");
                let ee = z(e, "geoSendButton", "div", $)
                  , ae = z(e, "geoOfferWrapper", "div");
                ae.appendChild(_),
                ae.appendChild(m),
                y.appendChild(ee);
                document.getElementById(e).offsetHeight;
                if (t && t.position)
                    switch (t.position) {
                    case "bottomleft":
                    case "bottomright":
                        r.classList.add("go" + t.position);
                        break;
                    case "topleft":
                    case "topright":
                        r.classList.add("go" + t.position);
                        break;
                    case "lefttop":
                    case "righttop":
                        r.classList.add("go" + t.position),
                        r.style.top = g.height;
                        break;
                    case "auto":
                        let e = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
                          , a = "left"
                          , n = "bottom";
                        a = k.x > c / 2 ? "left" : "right",
                        n = k.y > e / 2 ? "top" : "bottom",
                        r.classList.add("go" + n + a);
                        break;
                    default:
                        r.classList.add("gobottomright")
                    }
                else
                    r.classList.add("gobottomright");
                if (r.appendChild(ae),
                !1 === n.active) {
                    let a = z(e, "offerEndReached", "div", "This offer is no longer available.", null, null, ["geoInfoMessage"]);
                    r.appendChild(a)
                } else if (!1 === n.remaining || n.remaining <= 0) {
                    g.style.visibility = "hidden";
                    let a = z(e, "geoLimitReached", "div", "Limit reached.", null, null, ["geoInfoMessage"]);
                    r.appendChild(a)
                } else if (n.finished && !0 === n.finished) {
                    g.style.visibility = "hidden";
                    let a = z(e, "offerEndReached", "div", "This offer has ended.", null, null, ["geoInfoMessage"]);
                    r.appendChild(a)
                } else if (n.scheduled && !0 === n.scheduled) {
                    g.style.visibility = "hidden";
                    let a = z(e, "offerEndReached", "div", "This offer is not yet available.", null, null, ["geoInfoMessage"]);
                    r.appendChild(a)
                } else
                    r.appendChild(b),
                    r.appendChild(y),
                    r.appendChild(j);
                if (document.body.appendChild(A),
                n.validateLocation) {
                    M = !0,
                    y.style.display = "none";
                    let a = z(e, "geoOfferForm", "form", null, null, "locForm_" + e)
                      , o = z(e, "geoFormTitle", "div", "Please share your browser location to access this exclusive offer.")
                      , c = z(e, "geoSendButton", "div", "Share my location");
                    //!!datas.buttonInfo ? datas.buttonInfo.text :
                    a.appendChild(o),
                    a.appendChild(c),
                    t && t.buttonBgColor ? c.style.background = t.buttonBgColor : n.buttonInfo && (c.style.background = n.buttonInfo.bgcolor),
                    t && t.buttonTextColor ? c.style.color = t.buttonTextColor : n.buttonInfo && (c.style.color = n.buttonInfo.color),
                    r.appendChild(a);
                    let d = z(e, "geoOffersLoading", "div", s);
                    d.style.display = "block";
                    const u = async(a,t)=>{
                        const o = await fetch(Y + "/api/nearest-zone-i-am-in", {
                            method: "POST",
                            cache: "reload",
                            body: JSON.stringify({
                                regCode: l,
                                campaignId: n.campaignId,
                                endUserLatitude: a,
                                endUserLongitude: t
                            })
                        })
                          , s = await o.json();
                        var c, u;
                        s.nearestZoneIAmIn ? (i && (i.style.display = "block",
                        i.innerHTML = "You are " + (c = s.nearestZoneIAmIn.distanceFromMeKm,
                        u = 2,
                        Math.round(c * Math.pow(10, u)) / Math.pow(10, u) + "km away")),
                        r.removeChild(d),
                        M = !1,
                        y.style.display = "block") : (r.removeChild(d),
                        r.removeChild(Z),
                        r.appendChild(z(e, "geoFormTitle", "div", "Unfortunately, this offer is not available in your area.")),
                        r.appendChild(Z))
                    }
                    ;
                    let _ = null;
                    try {
                        _ = localStorage.geoOffersLocation && JSON.parse(localStorage.geoOffersLocation)
                    } catch (e) {}
                    function te() {
                        r.removeChild(a),
                        r.appendChild(d),
                        navigator.geolocation && navigator.geolocation.getCurrentPosition(e=>{
                            const a = e.coords
                              , t = a.latitude
                              , n = a.longitude;
                            localStorage.geoOffersLocation = JSON.stringify({
                                latitude: t,
                                longitude: n,
                                timestampMs: Date.now()
                            }),
                            u(t, n)
                        }
                        , a=>{
                            let t;
                            switch (a.code) {
                            case a.PERMISSION_DENIED:
                                t = "You blocked geolocation.";
                                break;
                            case a.POSITION_UNAVAILABLE:
                                t = "Location information is unavailable.";
                                break;
                            case a.TIMEOUT:
                                t = "The request to get your location timed out.";
                                break;
                            case a.UNKNOWN_ERROR:
                                t = "An unknown error occurred."
                            }
                            z(e, "geoFormTitle", "div", t);
                            r.removeChild(d),
                            o.innerHTML = "Please refresh the page to share your location.",
                            c.innerHTML = "Refresh page",
                            r.appendChild(o),
                            r.appendChild(c),
                            c.onclick = ()=>{
                                window.location.reload()
                            }
                        }
                        )
                    }
                    _ && _.timestampMs && Date.now() - _.timestampMs < 6e5 && (r.removeChild(a),
                    r.appendChild(d),
                    u(_.latitude, _.longitude)),
                    c.onclick = te
                }
                let ne = z(e, "geoTrackFrame", "iframe");
                return ne.style.height = "1px",
                ne.style.width = "1px",
                ne.style.position = "absolute",
                ne.style.opacity = "0",
                r.appendChild(ne),
                r.appendChild(Z),
                r
            }
            a.usesWeather && (a.requestLocationForWeather ? (g.style.visibility = "hidden",
            navigator.geolocation && navigator.geolocation.getCurrentPosition(e=>{
                const t = e.coords
                  , n = t.latitude
                  , o = t.longitude;
                A(a, g, !0, {
                    latitude: n,
                    longitude: o
                })
            }
            , e=>{
                let t = "";
                t = a.ipInfo.city.split("(")[0].trim(),
                A(a, g, !1, {
                    city: t
                })
            }
            )) : A(a, g, !1, {
                city: formattedCity
            })),
            g.appendChild(N(a));
            let w = document.getElementById(e)
              , W = document.getElementById("geoOffers_" + e);
            function q() {
                if (!1 === D || !D)
                    return;
                if (!0 === r)
                    return;
                let e = JSON.stringify({
                    endUserUid: L(),
                    campaignId: a.campaignId,
                    domain: window.location.hostname,
                    url: window.location.href,
                    country: a.ipInfo.countryCode,
                    city: a.ipInfo.city,
                    callNowDisplayed: u,
                    endUserTimezone: i.a.tz.guess()
                });
                X || t && (!0 === t.autoScroll || "yes" === t.autoScroll) && w.scrollIntoView({
                    block: "start",
                    inline: "nearest",
                    behavior: "smooth"
                }),
                fetch(Y + "/api/popupopened", {
                    method: "POST",
                    mode: "cors",
                    cache: "reload",
                    body: e
                }).then((function(e) {
                    return e.json()
                }
                )).then((function(e) {}
                )).catch((function(e) {}
                )),
                w.removeEventListener("click", q)
            }
            document.addEventListener("mouseup", (function(a) {
                if (!1 !== D && D && !0 !== r)
                    if (w == a.target || w.contains(a.target))
                        document.getElementById("geoOffersClose_" + e).style.display = "block",
                        W.style.display = "block",
                        setTimeout(C(E), 10);
                    else {
                        W.style.display = "none",
                        t && t.redirectOnClose && window.location.assign(t.redirectOnClose);
                        try {
                            M || (document.getElementById("geoOfferForm_" + e).style.display = "block")
                        } catch (a) {}
                        w.addEventListener("click", q),
                        document.getElementById("geoOffersClose_" + e).style.display = "none"
                    }
            }
            )),
            w.addEventListener("click", q);
            try {
                document.getElementById("geoPhoneButton_" + e).addEventListener("click", (function() {
                    let e = JSON.stringify({
                        endUserUid: L(),
                        campaignId: a.campaignId,
                        domain: window.location.hostname,
                        url: window.location.href,
                        country: a.ipInfo.countryCode,
                        city: a.ipInfo.city
                    });
                    fetch(Y + "/api/callnowclicked", {
                        method: "POST",
                        mode: "cors",
                        cache: "reload",
                        body: e
                    }).then((function(e) {
                        return e.json()
                    }
                    )).then((function(e) {}
                    )).catch((function(e) {}
                    ))
                }
                ))
            } catch (e) {}
            function v() {
                try {
                    let n = document.getElementById("geoPhoneNumber_" + e);
                    if (a.nameinput) {
                        document.getElementById("geoFullName1_" + e),
                        document.getElementById("geoFullName2_" + e)
                    }
                    if (a.emailinput) {
                        document.getElementById("geoEmail_" + e)
                    }
                    let o = document.getElementById("tncs_" + e);
                    n.value = "",
                    emailElem.value = "",
                    fullNameElem1.value = "",
                    fullNameElem2.value = "",
                    o.checked = !1,
                    (t && t.customername || a.usesCustomCustomer) && (document.getElementById("optincus_" + e).checked = !1,
                    a.nameinput && (fullNameElem1.removeAttribute("required", ""),
                    fullNameElem2.removeAttribute("required", "")),
                    a.emailinput && emailElem.removeAttribute("required", ""));
                    (t && t.companyname || a.usesCustomCompany) && (document.getElementById("optincli_" + e).checked = !1,
                    a.nameinput && (fullNameElem1.removeAttribute("required", ""),
                    fullNameElem2.removeAttribute("required", "")),
                    a.emailinput && emailElem.removeAttribute("required", "")),
                    document.getElementById("geoTrackFrame_" + e).src = ""
                } catch (e) {}
            }
            if (0 != a.remaining && !1 === a.finished && !1 !== a.active && !0 !== a.scheduled) {
                let n = [document.getElementById("geoSendButton_" + e), document.getElementById("geoPhoneButton_" + e)]
                  , s = t && t.buttonBgColor || a.buttonInfo && a.buttonInfo.bgcolor
                  , c = t && t.buttonTextColor || a.buttonInfo && a.buttonInfo.color;
                n.forEach(e=>{
                    e && (s && (e.style.background = s),
                    c && (e.style.color = c))
                }
                ),
                a.buttonInfo && a.buttonInfo.text && (document.getElementById("geoSendButton_" + e).innerHTML = a.buttonInfo.text),
                document.getElementById("geoSendButton_" + e).addEventListener("click", (function() {
                    let n = null
                      , o = null;
                    a.isPhoneRequired ? n = document.getElementById("geoPhoneNumber_" + e) : o = document.getElementById("geoEmail_" + e);
                    let i = null
                      , r = null;
                    a.nameinput && (i = document.getElementById("geoFullName1_" + e),
                    r = document.getElementById("geoFullName2_" + e)),
                    a.emailinput && (o = document.getElementById("geoEmail_" + e));
                    let s = document.getElementById("tncs_" + e);
                    if (s.checked ? s.classList.remove("badInput") : s.classList.add("badInput"),
                    (t && t.customername || a.usesCustomCustomer) && (document.getElementById("optincus_" + e).checked ? (a.nameinput && (i.setAttribute("required", ""),
                    r.setAttribute("required", "")),
                    a.emailinput && o.setAttribute("required", "")) : document.getElementById("optincli_" + e) ? !1 === document.getElementById("optincli_" + e).checked && (a.nameinput && (i.removeAttribute("required", ""),
                    r.removeAttribute("required", "")),
                    a.emailinput && o.removeAttribute("required", "")) : (a.nameinput && (i.removeAttribute("required", ""),
                    r.removeAttribute("required", "")),
                    a.emailinput && o.removeAttribute("required", ""))),
                    (t && t.companyname || a.usesCustomCompany) && (document.getElementById("optincli_" + e).checked ? (a.nameinput && (i.setAttribute("required", ""),
                    r.setAttribute("required", "")),
                    a.emailinput && o.setAttribute("required", "")) : document.getElementById("optincus_" + e) ? !1 === document.getElementById("optincus_" + e).checked && (a.nameinput && (i.removeAttribute("required", ""),
                    r.removeAttribute("required", "")),
                    a.emailinput && o.removeAttribute("required", "")) : (a.nameinput && (i.removeAttribute("required", ""),
                    r.removeAttribute("required", "")),
                    a.emailinput && o.removeAttribute("required", ""))),
                    a.isPhoneRequired) {
                        let a = document.getElementById("geoPhoneNumber_" + e);
                        a.value = a.value.replace(/\s+/g, ""),
                        a.validity.valueMissing ? a.setCustomValidity("This field is required") : a.validity.patternMismatch ? a.setCustomValidity("Must be a phone number (+ first is ok)") : a.validity.tooShort ? a.setCustomValidity("Must have at least 7 characters") : a.setCustomValidity("")
                    } else
                        o.validity.valueMissing ? o.setCustomValidity("This field is required") : o.validity.patternMismatch ? o.setCustomValidity("Must be a correct email") : o.setCustomValidity("");
                    if (document.forms["geoOfferForm_" + e].reportValidity()) {
                        s.classList.remove("badInput"),
                        document.getElementById("geoOfferForm_" + e).setAttribute("style", "display: none;");
                        try {
                            d()
                        } catch (e) {}
                    } else
                        document.getElementById("geoSendButton_" + e).removeEventListener("click", d)
                }
                ));
                let d = function() {
                    let n = a.isPhoneRequired && document.getElementById("geoPhoneNumber_" + e)
                      , r = null
                      , s = null;
                    a.nameinput && (r = document.getElementById("geoFullName1_" + e),
                    s = document.getElementById("geoFullName2_" + e));
                    let c = null;
                    (a.emailinput || !1 === a.isPhoneRequired) && (c = document.getElementById("geoEmail_" + e));
                    document.getElementById("tncs_" + e);
                    let M = a.isPhoneRequired && n.value;
                    a.isPhoneRequired && "0" === n.value.substring(0, 1) && (M = M.substring(1)),
                    a.isPhoneRequired && "+" != n.value.substring(0, 1) && (M = document.getElementById("geoCountryCode_" + e).value + M);
                    let u = c ? c.value : ""
                      , b = r && s ? r.value + " " + s.value : ""
                      , h = null;
                    (t && t.customername || a.usesCustomCustomer) && (h = document.getElementById("optincus_" + e).checked);
                    let A = null;
                    (t && t.companyname || a.usesCustomCompany) && (A = document.getElementById("optincli_" + e).checked),
                    function(n, r, s="", c="", M="0", u="0") {
                        let b = Y + "/api/v1/send-pu-coupon";
                        document.getElementById("geoOfferForm_" + e).style.display = "none",
                        document.getElementById("geoOffersLoading_" + e).style.display = "block";
                        let h = {
                            sendSms: !0,
                            campaignId: n,
                            phonenumber: r,
                            regCode: l,
                            fullName: s,
                            email: c,
                            optinCli: u,
                            optinCus: M,
                            origin: window.location.href,
                            domain: window.location.hostname,
                            notifyEmail: null,
                            endUserTimezone: i.a.tz.guess()
                        };
                        t && !1 === t.sendSms && (h.sendSms = !1),
                        t && t.sendConfirmation ? h.notifyEmail = t.sendConfirmation : a && a.notifyEmail && (h.notifyEmail = a.notifyEmail),
                        h.offset = p,
                        h.dst = f,
                        h.endUserUid = L(),
                        h.referrer = document.referrer,
                        h = JSON.stringify(h),
                        fetch(Y + "/api/time", {
                            method: "GET",
                            mode: "cors",
                            cache: "reload"
                        }).then((function(e) {
                            return e.json()
                        }
                        )).then((function(n) {
                            fetch(b, {
                                method: "POST",
                                headers: {
                                    "Verification-Key": T(n)
                                },
                                mode: "cors",
                                cache: "reload",
                                body: h
                            }).then((function(e) {
                                return e.json()
                            }
                            )).then((function(n) {
                                if (m = !1,
                                n.error) {
                                    let a = "";
                                    a = n.error.message ? n.error.message : n.error,
                                    localStorage.removeItem("geoOffersEndUserUid"),
                                    document.getElementById("geoOfferForm_" + e).style.display = "none",
                                    document.getElementById("geoSentWrapper_" + e).setAttribute("style", "display:block;"),
                                    document.getElementById("geoOffersLoading_" + e).style.display = "none",
                                    document.getElementById("geoConfirmMessage_" + e).setAttribute("style", "display:block;"),
                                    document.getElementById("geoConfirmMessage_" + e).innerHTML = a,
                                    w.addEventListener("click", q)
                                } else if (n.alertBox)
                                    localStorage.removeItem("geoOffersEndUserUid"),
                                    document.getElementById("geoOfferForm_" + e).style.display = "none",
                                    document.getElementById("geoSentWrapper_" + e).setAttribute("style", "display:block;"),
                                    document.getElementById("geoOffersLoading_" + e).style.display = "none",
                                    document.getElementById("geoConfirmMessage_" + e).setAttribute("style", "display:block;"),
                                    document.getElementById("geoConfirmMessage_" + e).innerHTML = n.alertBox.message,
                                    w.addEventListener("click", q);
                                else if (mobilecheck()) {
                                    let o = "Offer has been sent to your mobile phone!";
                                    t && !1 === t.sendSms && (o = "Thank you for completing the form"),
                                    !1 === a.isPhoneRequired && (o = "Offer has been sent to your email."),
                                    m = !(!n.hash || !n.company) && "https://" + n.company + "." + O + "/c/" + n.hash,
                                    document.getElementById("geoCloseLinkElement_" + e).setAttribute("style", "display:block;");
                                    try {
                                        setTimeout(()=>{
                                            if (m) {
                                                y = !1,
                                                document.getElementById("geoRedirectAnchor_" + e).href = m,
                                                document.getElementById("geoRedirectMessage_" + e).style.display = "block";
                                                var a = 3
                                                  , t = setInterval((function() {
                                                    a < 0 ? (clearInterval(t),
                                                    y || (window.location.href = m)) : document.getElementById("geoSecondsToRedirect_" + e).innerHTML = a,
                                                    a -= 1
                                                }
                                                ), 1e3)
                                            }
                                            document.getElementById("geoOffersLoading_" + e).style.display = "none",
                                            document.getElementById("geoSentWrapper_" + e).style.display = "block"
                                        }
                                        , 1e3),
                                        document.getElementById("geoConfirmMessage_" + e).innerHTML = o,
                                        document.getElementById("geoSendButton_" + e).removeEventListener("click", d),
                                        w.addEventListener("click", q)
                                    } catch (e) {}
                                    if (t && t.fbTrackLead)
                                        try {
                                            fbq("track", "Lead")
                                        } catch (e) {}
                                    t && t.redirectOnSubmit && (o = "Thank you, we are redirecting you now???",
                                    setTimeout(()=>{
                                        window.location.assign(t.redirectOnSubmit)
                                    }
                                    , 3e3))
                                } else if (!mobilecheck()) {
                                    let n = "Offer has been sent to your mobile phone!";
                                    t && !1 === t.sendSms && (n = "Thank you for completing the form"),
                                    !1 === a.isPhoneRequired && (n = "Offer has been sent to your email."),
                                    document.getElementById("geoCloseLinkElement_" + e).setAttribute("style", "display:block;");
                                    try {
                                        setTimeout(()=>{
                                            document.getElementById("geoOffersLoading_" + e).style.display = "none",
                                            document.getElementById("geoSentWrapper_" + e).style.display = "block"
                                        }
                                        , 1e3),
                                        document.getElementById("geoConfirmMessage_" + e).innerHTML = n,
                                        document.getElementById("geoSendButton_" + e).removeEventListener("click", d),
                                        w.addEventListener("click", q)
                                    } catch (e) {}
                                }
                            }
                            )).catch((function(a) {
                                localStorage.removeItem("geoOffersEndUserUid"),
                                document.getElementById("geoOfferForm_" + e).style.display = "none",
                                document.getElementById("geoSentWrapper_" + e).setAttribute("style", "display:block;"),
                                document.getElementById("geoOffersLoading_" + e).style.display = "none",
                                document.getElementById("geoConfirmMessage_" + e).setAttribute("style", "display:block;"),
                                document.getElementById("geoConfirmMessage_" + e).innerHTML = "There was an error sending your offer, please wait a few minutes and try again.",
                                w.addEventListener("click", q)
                            }
                            ))
                        }
                        )),
                        localStorage.removeItem("geoOffersEndUserUid"),
                        o && (async()=>{
                            const e = await fetch(Y + "/api/coupons/call-now-info/" + l + "/" + _, {
                                method: "POST",
                                cache: "reload",
                                body: JSON.stringify({
                                    endUserUid: L(),
                                    hostUrl: window.location.href
                                })
                            })
                              , a = await e.json();
                            o.innerHTML = a.couponCode
                        }
                        )();
                        try {
                            v()
                        } catch (e) {}
                        try {
                            t && t.trackingurl && (document.getElementById("geoTrackFrame_" + e).src = t.trackingurl)
                        } catch (e) {}
                    }(a.campaignId, M, b, u, h, A)
                };
                function S() {
                    !1 !== D && D && !0 !== r && !0 !== t.isCms && ("display:block;" === W.getAttribute("style") && "none" === document.getElementById("geoOfferForm_" + e).style.display ? document.getElementById("geoSentWrapper_" + e).setAttribute("style", "display:block;") : document.getElementById("geoSentWrapper_" + e).setAttribute("style", "display:none;"),
                    W.style.display = "block")
                }
                w.addEventListener("click", (function(e) {
                    S()
                }
                )),
                a.autoOpen && S()
            }
            function B(a) {
                try {
                    y = !0,
                    v(),
                    setTimeout((function() {
                        let a = document.getElementById("geoOfferForm_" + e)
                          , n = document.getElementById("geoOffersClose_" + e);
                        W.style.display = "none",
                        M || null != a && (a.style.display = "block"),
                        null != n && (n.style.display = "none"),
                        t && t.redirectOnClose && window.location.assign(t.redirectOnClose)
                    }
                    ), 10)
                } catch (a) {}
            }
            document.getElementById("geoOffersClose_" + e).addEventListener("click", B),
            document.getElementById("geoCloseLinkElement_" + e).addEventListener("click", B);
            var X = mobilecheck();
            try {
                if (!X) {
                    let a = document.getElementById("geoShareWA_" + e);
                    a.parentNode.removeChild(a)
                }
            } catch (e) {}
            var E = window.matchMedia("(max-width: 800px)");
            let H = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            function x(a) {
                if (a.matches) {
                    W.classList.remove("geoOffersNormal"),
                    W.classList.remove("gobottomright", "gotopright", "gobottomleft", "gotopleft"),
                    W.classList.add("geoOffersFull");
                    try {
                        document.getElementById("geoShareFB_" + e).setAttribute("href", "fb-messenger://share?link=I highly recommend this offer " + window.location.href)
                    } catch (e) {}
                } else {
                    let a = b(document.getElementById(e))
                      , n = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
                      , o = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
                      , i = w.getBoundingClientRect()
                      , r = document.getElementById(e).offsetHeight + 10;
                    if (r += "px",
                    t && t.position)
                        switch (t.position) {
                        case "bottomleft":
                        case "bottomright":
                            W.classList.add("go" + t.position),
                            document.getElementById("geoOffers_" + e).style.top = r;
                            break;
                        case "topleft":
                        case "topright":
                            W.classList.add("go" + t.position),
                            W.style.bottom = r;
                            break;
                        case "lefttop":
                        case "righttop":
                            W.classList.add("go" + t.position);
                            break;
                        case "auto":
                            W.classList.remove("gotopright", "gotopleft", "gobottomleft", "gobottomright", "goleftop", "gorightop");
                            let s = "left"
                              , c = "bottom";
                            s = a.x > n / 2 ? "left" : "right",
                            i.y > 0 && i.y > o / 2 ? (c = "top",
                            W.style.bottom = r,
                            W.style.top = "unset") : (c = "bottom",
                            W.style.top = r,
                            W.style.bottom = "unset"),
                            W.classList.add("go" + c + s);
                            break;
                        default:
                            W.classList.add("gobottomright"),
                            W.style.top = r
                        }
                    else
                        W.classList.add("gobottomright"),
                        W.style.top = r;
                    W.classList.remove("geoOffersFull"),
                    W.classList.add("geoOffersNormal");
                    try {
                        document.getElementById("geoShareFB_" + e).setAttribute("href", "https://www.facebook.com/sharer/sharer.php?u=" + window.location.href)
                    } catch (e) {}
                }
            }
            function C(a) {
                let t = document.getElementById("geoOffersClose_" + e);
                if (null != t)
                    if (a.matches) {
                        if (document.getElementById("geoCloseLinkElement_" + e).style.display = "none",
                        H > 560) {
                            let e = W.getBoundingClientRect();
                            t.style.top = e.top - 20 + "px"
                        } else
                            t.style.top = 0;
                        t.style.opacity = 1,
                        t.style.width = "40px",
                        t.style.height = "40px"
                    } else
                        t.style.opacity = 0,
                        t.style.display = "none",
                        t.style.width = 0,
                        t.style.height = 0
            }
            E.addListener(x),
            E.addListener(C);
            new n.a(e=>{
                C(E)
            }
            ).observe(W),
            X || (window.onscroll = function() {
                x(E)
            }
            ),
            x(E),
            "1" === new URL(window.location.href).searchParams.get("cpop") && (document.getElementById("geoOffers_" + e).style.display = "block",
            q(),
            E.matches && (document.getElementById("geoOffersClose_" + e).style.display = "block"))
        }
        )).catch((function(a) {
            document.getElementById(e).style.display = "none"
        }
        ))
    }
    function T(e) {
        var a, t, n;
        return e = btoa(unescape(encodeURIComponent(e))),
        t = 6,
        n = "P",
        e = function(e) {
            if (!(e = e.toString()) || e.length < 2 || "string" != typeof e)
                return "Not valid";
            const a = [];
            for (let t = e.length - 1; t >= 0; t--)
                a.push(e[t]);
            return a.join("")
        }(e = (a = e).substring(0, t) + n + a.substring(t, a.length))
    }
    window.mobilecheck = function() {
        var e, a = !1;
        return e = navigator.userAgent || navigator.vendor || window.opera,
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (a = !0),
        a
    }
}
, function(e, a, t) {
    var n = t(140);
    "string" == typeof n && (n = [[e.i, n, ""]]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    t(142)(n, o);
    n.locals && (e.exports = n.locals)
}
, function(e, a, t) {
    (e.exports = t(141)(!1)).push([e.i, ".gobottomright {left: 0; /*top: 35px;*/}\n.gotopright {left: 0; /*bottom: 35px;*/}\n.gobottomleft {right: 0; /*top: 35px;*/}\n.gotopleft {right: 0; /*bottom: 35px;*/}\n.golefttop {right: 105%; top: 0px;}\n.gorighttop {left: 105%; top: 0px;}\n\n.geoCloseLower {position: absolute !important; top: 10px !important; right: 0 !important;}\n\n.geoOffersFull { width: 100% !important; }\n.geoOffersNormal { width: 540px !important; }\n.geoHideElement {opacity: 0;}\n\n.geoOffers { display: none; cursor: default; position: absolute; z-index: 1000; background-color: white; padding: 20px 20px; box-shadow: #999 0px 0px 15px; color: #222; text-transform: none; font-weight: normal; box-sizing: border-box; user-select: text;}\n.geoOffers * { letter-spacing: initial !important; font-size: initial !important; white-space: normal; text-transform: initial !important; font-weight: initial !important;}\n.geoOffers input, .geoOffers textarea, .geoOffers select {min-width: unset !important; vertical-align: unset;}\n.geoOffers .geoOfferWrapper { display: flex; background-color: #f2f2f2; padding: 15px; }\n.geoOffers .geoOfferWrapper .geopic, .geoOffers .geoOfferWrapper .gotext { float: left;}\n.geoOffers .geoOfferWrapper .geoPic { width: 250px; height: 170px; line-height: 0;}\n.geoOffers .geoOfferWrapper .geoText { padding-left: 10px; width: 250px; text-align: center;line-height: initial;}\n.geoOffers .geoOfferWrapper .geoCouponHeadline { padding: 0; margin: 0; font-weight: bold !important; font-size: 130% !important; line-height: initial;}\n.geoOffers .geoOfferWrapper .geoCouponSubHeadline { display: block; padding: 10px 0; margin: 0; line-height: initial;}\n\n\n.geoOffers .geoLimitReached, .geoOffers .offerEndReached {text-align: center;line-height: initial; display: block; padding: 0 0 10px 0;}\n.geoOffers .geoInfoMessage {padding: 15px 0 0 0 !important;}\n.geoOffers .geoOfferForm { text-align: center !important;}\n.geoOffers .geoCallNowSection {border-bottom: 1px solid hsla(0, 0%, 0%, 0.1); display: flex !important; align-items: center; justify-content: center}\n.geoOffers .geoCouponCodeAndPhoneSection {align-items:center; justify-content:center; line-height: 35px; word-wrap: unset;}\n.geoOffers .geoCouponCode {font-weight: bold !important; letter-spacing: 2px !important; font-size: larger !important; width: 80px; display: inline-block;}\n.geoOffers .geoFormTitle { display: block; padding-top: 18px; padding-bottom: 15px; line-height: initial; text-align: center;}\n.geoOffers .geoSub-message { text-align: left; display: flex; margin: 0 auto; width: 440px; padding-top: 10px; line-height: 0; box-sizing: border-box;}\n.geoOffers .geoSub-message .tnclabel, .geoOffers .geoSub-message .cuslabel, .geoOffers .geoSub-message .clilabel {font-weight: normal; margin: 0; display: unset; width: 100%;float: none;}\n.geoOffers .geoSub-message .tncelem, .geoOffers .geoSub-message .optincuselem, .geoOffers .geoSub-message .optinclielem  {position: relative; display: inline-block; width: 390px; margin: 0 0 0 10px; padding: 0; line-height: initial !important; vertical-align: text-top; letter-spacing: 0; overflow-wrap: break-word;word-wrap: break-word;height: 50%; height: initial;}\n.geoOffers .geoDisclaimer {position: relative; width: 345px; font-size: 12px !important; color: #AAA; margin: -6px 0 0 0; text-align: left; left: 60%; transform: translateX(-78%); line-height: 13px !important;}\n.geoOffers .geoDisclaimerFull {position: relative; width: 90%; font-size: 12px !important; color: #AAA; margin: 0 0 0 0; text-align: left; left: 6%; line-height: 13px !important;}\n\n\n.geoOffers .geoSub-message .tnclink {padding: 0 !important; display: unset !important; margin: 0 !important; border: 0 !important; background-image: unset;}\n\n.geoOffers .geoSentWrapper {margin-top: 17px; text-align: center; line-height: initial;}\n.geoOffers .geoSentWrapper .geoOffersShare {margin: 10px 0 30px 0;border-top: 1px solid #ccc;padding-top: 10px;}\n.geoOffers .geoSentWrapper .geoShareIconWrap {margin: 7px 0 0 0;}\n.geoOffers .geoSentWrapper .geoShareIconWrap a {margin: 0 10px;}\n\n.geoOffers .geoSendButton { text-align: center; background-color: #f2f2f2; padding: 15px 0; width: 100%; cursor: pointer; margin-top: 20px; font-family: inherit;line-height: initial;}\n.geoOffers .geoPhoneButton {display: inline-block; text-align: center; background-color: #f2f2f2; padding: 4px 8px; width: auto; cursor: pointer; margin: 0; font-family: inherit;line-height: initial; margin: 0 5px 0; border-radius: 40px;}\n.geoOffers .badInput {box-shadow: 0 0 5pt 2pt red; border-radius: 40%;}\n.geoOffers .geoOffersLoading {display: none; text-align: center;z-index: 10000; min-height: 150px;}\n.geoOffers .geoOffersLoadingIcon {min-height: 150px;}\n\n.geoOffersClose {display: none; position: fixed; width: 40px; height: 40px; top: 0; right:0; cursor: pointer; z-index: 100000000;}\n.geoOffers .geoCloseLinkElement {display: block !important; margin: 25px 0 6px 0 !important; text-align: center; float: unset !important; min-width: unset !important; max-width: unset !important; line-height: 0 !important;}\n\n.geoOffers a { display: inline-block !important; }\n.geoOffers a:not(.geoCloseLinkElement) { float: none !important; border: 0 !important; display: unset !important; text-decoration: unset !important;}\n.geoOffers a:hover { color: unset !important; background-color: unset !important;}\n.geoOffers .geoLinkWrapper {background: url(https://js.geo-offers.com/map-icon.svg) no-repeat 0 center; margin: 0 0 0 0 !important; line-height: initial; font-size: smaller; padding: 5px 0 2px 30px; border: 0; display: unset;} /* recommended: text-decoration: none; font-weight: bold; font-family: sans-serif; color: yellowgreen;*/\n.geoOffers .geoLoclink {}\n.geoOffers .geoOffersDistance { font-size: smaller; margin-top: 10px; display: none; }\n.geoOffers .offerEndReached {padding: 10px 0 10px 0 !important;}\n\n.geoOffers input.geoFullName1, .geoOffers input.geoFullName2 { width: 43%; display: inline-block !important; left: initial !important; transform: unset !important;}\n.geoOffers .geoFullName1 { margin-right: 2% !important; }\n\n.geoOffers input {height: auto;}\n.geoOffers .geoOfferTextInput { font-size: inherit; position: relative; display: block; padding: 10px; margin: 10px 0; border: 1px solid #ccc; width: 440px; left: 50%; transform: translateX(-50%); box-sizing: border-box;  line-height: inherit;}\n\n.geoOffers .geoPhoneNumber {display: inline-block !important; left: 41% !important; width: 342px !important;}\n.geoOffers .geoCountryCode { display: inline-block; width: 20%; position: relative; font-size: inherit; appearance: none; -webkit-appearance: none; padding: 10px !important; background-color: rgb(248, 248, 248); border-radius : 0; border: 1px solid #ccc; height: unset;}\n.geoOffers .geoPhoneContainer { font-size: inherit; position: relative; display: block; margin: -10px 0 0 0; width: 440px; left: 50%; transform: translateX(-50%); box-sizing: border-box; text-align: left;}\n.geoOffers .geoPhoneContainer:after {content: ''; border-top: 5px solid black; border-left: 5px solid transparent; border-right: 5px solid transparent; position: absolute; width: 10px; height: 10px; left: 16%; top: 45%; box-sizing: border-box;}\n.geoOffers .geoSub-message input.geoOffercheckbox {transform: scale(1.2); padding: 0 !important; margin:0 !important; position: relative !important; overflow: hidden; width: auto !important; bottom: 1px; float: none !important;}\n.geoOffers .geoEmail { margin-top: 0px !important; }\n\n.geoOffers .customConsentInformation {\n\ttext-align: left !important;\n\tmargin: 0 auto !important;\n\twidth: 440px !important;\n\tpadding-top: 15px !important;\n\tbox-sizing: border-box !important;\n\twhite-space: pre-wrap !important;\n\tline-height: 18px;\n}\n\n@keyframes fadeGeoTick {\n\t0% { opacity: 1 }\n\t100% {opacity: 0 }\n}\n\n@media (max-width: 800px) {\n\t .geoOffers { box-sizing: content-box; display: none; padding: 0 0 20px; position: fixed; height: auto; left: 0; top: 50%; transform: translateY(-50%);}\n\t .geoOffers * {line-height: initial;}\n\t .geoOffers .geoOfferForm { width: 90%; margin: 0 auto;}\n\t .geoOffers .geoOfferWrapper { display: none; width: 100%; padding: 0 0 20px 0}\n\t /*.geoOffers .geoOfferWrapper .geoPic { width: inherit; margin-bottom: 15px; height: 50px;}*/\n\t /*.geoOffersClose {transform: scale(0.75);}*/\n\t .geoOffers .geoOfferWrapper .geoPic {display: none;}\n\t .geoOffers .geoOfferWrapper .geoText { clear: both; width: 100%; padding: 20px 0 0 0;line-height: 0;}\n\t .geoOffers .geoSub-message { width: 100% !important; box-sizing: content-box;}\n\t .geoOffers input:not(.geoOffercheckbox) { width: 100%; }\n\t .geoOffers .geoSub-message .tncelem, .geoOffers .geoSub-message .optincuselem, .geoOffers .geoSub-message .optinclielem {width: 90%;}\n\t .geoOffers .geoCloseLinkElement {display: none !important; }\n\t .geoOffers input { height: auto;}\n\t .geoOffers .geoPhoneContainer:after {left: 22%;}\n\t .geoOffers .geoSub-message input.geoOffercheckbox {bottom: 0px;}\n\t\t\n\t .geoCallNowSection { padding-bottom: 5px !important; }\n\t .geoOffers .geoPhoneNumber {width: 70% !important; left: 38% !important;}\n\t .geoOffers .geoPhoneContainer {width:100% !important;}\n\t .geoOffers .geoCountryCode {width: 27% !important; border: 1px solid #ccc !important;}\n\t .geoOffers .geoDisclaimer {left: 0; transform: translateX(0);}\n\t .geoOffers .geoDisclaimerFull { margin: unset; left: unset; line-height: unset !important; }\n\t .geoOffers input.geoFullName1, .geoOffers input.geoFullName2 { width: 49% !important; display: inline-block !important; left: initial !important; transform: unset !important;}\n\t /*.geoOffers .geoCouponCode { margin-right: 0; margin-bottom: 10px;}*/\n\n\t .gobottomright {left: 0; }\n \t .gotopright {left: 0; bottom: unset;}\n \t .gobottomleft {right: 0;}\n\t .gotopleft {right: 0; bottom: unset;}\n\n\t.geoOffers .customConsentInformation {\n\t\ttext-align: left !important;\n\t\tmargin: 0 auto !important;\n\t\tpadding-top: 15px !important;\n\t\tbox-sizing: border-box !important;\n\t\twhite-space: pre-wrap !important;\n\t\tline-height: 18px;\n\t\twidth: unset !important;\n\t}\n }\n", ""])
}
, function(e, a) {
    e.exports = function(e) {
        var a = [];
        return a.toString = function() {
            return this.map((function(a) {
                var t = function(e, a) {
                    var t = e[1] || ""
                      , n = e[3];
                    if (!n)
                        return t;
                    if (a && "function" == typeof btoa) {
                        var o = (r = n,
                        "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */")
                          , i = n.sources.map((function(e) {
                            return "/*# sourceURL=" + n.sourceRoot + e + " */"
                        }
                        ));
                        return [t].concat(i).concat([o]).join("\n")
                    }
                    var r;
                    return [t].join("\n")
                }(a, e);
                return a[2] ? "@media " + a[2] + "{" + t + "}" : t
            }
            )).join("")
        }
        ,
        a.i = function(e, t) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var n = {}, o = 0; o < this.length; o++) {
                var i = this[o][0];
                "number" == typeof i && (n[i] = !0)
            }
            for (o = 0; o < e.length; o++) {
                var r = e[o];
                "number" == typeof r[0] && n[r[0]] || (t && !r[2] ? r[2] = t : t && (r[2] = "(" + r[2] + ") and (" + t + ")"),
                a.push(r))
            }
        }
        ,
        a
    }
}
, function(e, a, t) {
    var n, o, i = {}, r = (n = function() {
        return window && document && document.all && !window.atob
    }
    ,
    function() {
        return void 0 === o && (o = n.apply(this, arguments)),
        o
    }
    ), s = function(e, a) {
        return a ? a.querySelector(e) : document.querySelector(e)
    }, c = function(e) {
        var a = {};
        return function(e, t) {
            if ("function" == typeof e)
                return e();
            if (void 0 === a[e]) {
                var n = s.call(this, e, t);
                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                    try {
                        n = n.contentDocument.head
                    } catch (e) {
                        n = null
                    }
                a[e] = n
            }
            return a[e]
        }
    }(), d = null, M = 0, u = [], l = t(143);
    function _(e, a) {
        for (var t = 0; t < e.length; t++) {
            var n = e[t]
              , o = i[n.id];
            if (o) {
                o.refs++;
                for (var r = 0; r < o.parts.length; r++)
                    o.parts[r](n.parts[r]);
                for (; r < n.parts.length; r++)
                    o.parts.push(h(n.parts[r], a))
            } else {
                var s = [];
                for (r = 0; r < n.parts.length; r++)
                    s.push(h(n.parts[r], a));
                i[n.id] = {
                    id: n.id,
                    refs: 1,
                    parts: s
                }
            }
        }
    }
    function m(e, a) {
        for (var t = [], n = {}, o = 0; o < e.length; o++) {
            var i = e[o]
              , r = a.base ? i[0] + a.base : i[0]
              , s = {
                css: i[1],
                media: i[2],
                sourceMap: i[3]
            };
            n[r] ? n[r].parts.push(s) : t.push(n[r] = {
                id: r,
                parts: [s]
            })
        }
        return t
    }
    function p(e, a) {
        var t = c(e.insertInto);
        if (!t)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var n = u[u.length - 1];
        if ("top" === e.insertAt)
            n ? n.nextSibling ? t.insertBefore(a, n.nextSibling) : t.appendChild(a) : t.insertBefore(a, t.firstChild),
            u.push(a);
        else if ("bottom" === e.insertAt)
            t.appendChild(a);
        else {
            if ("object" != typeof e.insertAt || !e.insertAt.before)
                throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var o = c(e.insertAt.before, t);
            t.insertBefore(a, o)
        }
    }
    function f(e) {
        if (null === e.parentNode)
            return !1;
        e.parentNode.removeChild(e);
        var a = u.indexOf(e);
        a >= 0 && u.splice(a, 1)
    }
    function L(e) {
        var a = document.createElement("style");
        if (void 0 === e.attrs.type && (e.attrs.type = "text/css"),
        void 0 === e.attrs.nonce) {
            var n = function() {
                0;
                return t.nc
            }();
            n && (e.attrs.nonce = n)
        }
        return b(a, e.attrs),
        p(e, a),
        a
    }
    function b(e, a) {
        Object.keys(a).forEach((function(t) {
            e.setAttribute(t, a[t])
        }
        ))
    }
    function h(e, a) {
        var t, n, o, i;
        if (a.transform && e.css) {
            if (!(i = "function" == typeof a.transform ? a.transform(e.css) : a.transform.default(e.css)))
                return function() {}
                ;
            e.css = i
        }
        if (a.singleton) {
            var r = M++;
            t = d || (d = L(a)),
            n = y.bind(null, t, r, !1),
            o = y.bind(null, t, r, !0)
        } else
            e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (t = function(e) {
                var a = document.createElement("link");
                return void 0 === e.attrs.type && (e.attrs.type = "text/css"),
                e.attrs.rel = "stylesheet",
                b(a, e.attrs),
                p(e, a),
                a
            }(a),
            n = T.bind(null, t, a),
            o = function() {
                f(t),
                t.href && URL.revokeObjectURL(t.href)
            }
            ) : (t = L(a),
            n = g.bind(null, t),
            o = function() {
                f(t)
            }
            );
        return n(e),
        function(a) {
            if (a) {
                if (a.css === e.css && a.media === e.media && a.sourceMap === e.sourceMap)
                    return;
                n(e = a)
            } else
                o()
        }
    }
    e.exports = function(e, a) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
            throw new Error("The style-loader cannot be used in a non-browser environment");
        (a = a || {}).attrs = "object" == typeof a.attrs ? a.attrs : {},
        a.singleton || "boolean" == typeof a.singleton || (a.singleton = r()),
        a.insertInto || (a.insertInto = "head"),
        a.insertAt || (a.insertAt = "bottom");
        var t = m(e, a);
        return _(t, a),
        function(e) {
            for (var n = [], o = 0; o < t.length; o++) {
                var r = t[o];
                (s = i[r.id]).refs--,
                n.push(s)
            }
            e && _(m(e, a), a);
            for (o = 0; o < n.length; o++) {
                var s;
                if (0 === (s = n[o]).refs) {
                    for (var c = 0; c < s.parts.length; c++)
                        s.parts[c]();
                    delete i[s.id]
                }
            }
        }
    }
    ;
    var A, z = (A = [],
    function(e, a) {
        return A[e] = a,
        A.filter(Boolean).join("\n")
    }
    );
    function y(e, a, t, n) {
        var o = t ? "" : n.css;
        if (e.styleSheet)
            e.styleSheet.cssText = z(a, o);
        else {
            var i = document.createTextNode(o)
              , r = e.childNodes;
            r[a] && e.removeChild(r[a]),
            r.length ? e.insertBefore(i, r[a]) : e.appendChild(i)
        }
    }
    function g(e, a) {
        var t = a.css
          , n = a.media;
        if (n && e.setAttribute("media", n),
        e.styleSheet)
            e.styleSheet.cssText = t;
        else {
            for (; e.firstChild; )
                e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t))
        }
    }
    function T(e, a, t) {
        var n = t.css
          , o = t.sourceMap
          , i = void 0 === a.convertToAbsoluteUrls && o;
        (a.convertToAbsoluteUrls || i) && (n = l(n)),
        o && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
        var r = new Blob([n],{
            type: "text/css"
        })
          , s = e.href;
        e.href = URL.createObjectURL(r),
        s && URL.revokeObjectURL(s)
    }
}
, function(e, a) {
    e.exports = function(e) {
        var a = "undefined" != typeof window && window.location;
        if (!a)
            throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e)
            return e;
        var t = a.protocol + "//" + a.host
          , n = t + a.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, (function(e, a) {
            var o, i = a.trim().replace(/^"(.*)"$/, (function(e, a) {
                return a
            }
            )).replace(/^'(.*)'$/, (function(e, a) {
                return a
            }
            ));
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? e : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? t + i : n + i.replace(/^\.\//, ""),
            "url(" + JSON.stringify(o) + ")")
        }
        ))
    }
}
, function(e, a) {
    var t;
    t = function() {
        return this
    }();
    try {
        t = t || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (t = window)
    }
    e.exports = t
}
, function(e, a, t) {
    var n, o, i;
    //! moment-timezone.js
    //! version : 0.5.31
    //! Copyright (c) JS Foundation and other contributors
    //! license : MIT
    //! github.com/moment/moment-timezone
    !function(r, s) {
        "use strict";
        e.exports ? e.exports = s(t(0)) : (o = [t(0)],
        void 0 === (i = "function" == typeof (n = s) ? n.apply(a, o) : n) || (e.exports = i))
    }(0, (function(e) {
        "use strict";
        void 0 === e.version && e.default && (e = e.default);
        var a, t = {}, n = {}, o = {}, i = {}, r = {};
        e && "string" == typeof e.version || N("Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/");
        var s = e.version.split(".")
          , c = +s[0]
          , d = +s[1];
        function M(e) {
            return e > 96 ? e - 87 : e > 64 ? e - 29 : e - 48
        }
        function u(e) {
            var a = 0
              , t = e.split(".")
              , n = t[0]
              , o = t[1] || ""
              , i = 1
              , r = 0
              , s = 1;
            for (45 === e.charCodeAt(0) && (a = 1,
            s = -1); a < n.length; a++)
                r = 60 * r + M(n.charCodeAt(a));
            for (a = 0; a < o.length; a++)
                i /= 60,
                r += M(o.charCodeAt(a)) * i;
            return r * s
        }
        function l(e) {
            for (var a = 0; a < e.length; a++)
                e[a] = u(e[a])
        }
        function _(e, a) {
            var t, n = [];
            for (t = 0; t < a.length; t++)
                n[t] = e[a[t]];
            return n
        }
        function m(e) {
            var a = e.split("|")
              , t = a[2].split(" ")
              , n = a[3].split("")
              , o = a[4].split(" ");
            return l(t),
            l(n),
            l(o),
            function(e, a) {
                for (var t = 0; t < a; t++)
                    e[t] = Math.round((e[t - 1] || 0) + 6e4 * e[t]);
                e[a - 1] = 1 / 0
            }(o, n.length),
            {
                name: a[0],
                abbrs: _(a[1].split(" "), n),
                offsets: _(t, n),
                untils: o,
                population: 0 | a[5]
            }
        }
        function p(e) {
            e && this._set(m(e))
        }
        function f(e, a) {
            this.name = e,
            this.zones = a
        }
        function L(e) {
            var a = e.toTimeString()
              , t = a.match(/\([a-z ]+\)/i);
            "GMT" === (t = t && t[0] ? (t = t[0].match(/[A-Z]/g)) ? t.join("") : void 0 : (t = a.match(/[A-Z]{3,5}/g)) ? t[0] : void 0) && (t = void 0),
            this.at = +e,
            this.abbr = t,
            this.offset = e.getTimezoneOffset()
        }
        function b(e) {
            this.zone = e,
            this.offsetScore = 0,
            this.abbrScore = 0
        }
        function h(e, a) {
            for (var t, n; n = 6e4 * ((a.at - e.at) / 12e4 | 0); )
                (t = new L(new Date(e.at + n))).offset === e.offset ? e = t : a = t;
            return e
        }
        function A(e, a) {
            return e.offsetScore !== a.offsetScore ? e.offsetScore - a.offsetScore : e.abbrScore !== a.abbrScore ? e.abbrScore - a.abbrScore : e.zone.population !== a.zone.population ? a.zone.population - e.zone.population : a.zone.name.localeCompare(e.zone.name)
        }
        function z(e, a) {
            var t, n;
            for (l(a),
            t = 0; t < a.length; t++)
                n = a[t],
                r[n] = r[n] || {},
                r[n][e] = !0
        }
        function y(e) {
            var a, t, n, o = e.length, s = {}, c = [];
            for (a = 0; a < o; a++)
                for (t in n = r[e[a].offset] || {})
                    n.hasOwnProperty(t) && (s[t] = !0);
            for (a in s)
                s.hasOwnProperty(a) && c.push(i[a]);
            return c
        }
        function g() {
            try {
                var e = Intl.DateTimeFormat().resolvedOptions().timeZone;
                if (e && e.length > 3) {
                    var a = i[T(e)];
                    if (a)
                        return a;
                    N("Moment Timezone found " + e + " from the Intl api, but did not have that data loaded.")
                }
            } catch (e) {}
            var t, n, o, r = function() {
                var e, a, t, n = (new Date).getFullYear() - 2, o = new L(new Date(n,0,1)), i = [o];
                for (t = 1; t < 48; t++)
                    (a = new L(new Date(n,t,1))).offset !== o.offset && (e = h(o, a),
                    i.push(e),
                    i.push(new L(new Date(e.at + 6e4)))),
                    o = a;
                for (t = 0; t < 4; t++)
                    i.push(new L(new Date(n + t,0,1))),
                    i.push(new L(new Date(n + t,6,1)));
                return i
            }(), s = r.length, c = y(r), d = [];
            for (n = 0; n < c.length; n++) {
                for (t = new b(O(c[n]),s),
                o = 0; o < s; o++)
                    t.scoreOffsetAt(r[o]);
                d.push(t)
            }
            return d.sort(A),
            d.length > 0 ? d[0].zone.name : void 0
        }
        function T(e) {
            return (e || "").toLowerCase().replace(/\//g, "_")
        }
        function Y(e) {
            var a, n, o, r;
            for ("string" == typeof e && (e = [e]),
            a = 0; a < e.length; a++)
                r = T(n = (o = e[a].split("|"))[0]),
                t[r] = e[a],
                i[r] = n,
                z(r, o[2].split(" "))
        }
        function O(e, a) {
            e = T(e);
            var o, r = t[e];
            return r instanceof p ? r : "string" == typeof r ? (r = new p(r),
            t[e] = r,
            r) : n[e] && a !== O && (o = O(n[e], O)) ? ((r = t[e] = new p)._set(o),
            r.name = i[e],
            r) : null
        }
        function k(e) {
            var a, t, o, r;
            for ("string" == typeof e && (e = [e]),
            a = 0; a < e.length; a++)
                o = T((t = e[a].split("|"))[0]),
                r = T(t[1]),
                n[o] = r,
                i[o] = t[0],
                n[r] = o,
                i[r] = t[1]
        }
        function D(e) {
            var a = "X" === e._f || "x" === e._f;
            return !(!e._a || void 0 !== e._tzm || a)
        }
        function N(e) {
            "undefined" != typeof console && "function" == typeof console.error && console.error(e)
        }
        function w(a) {
            var t = Array.prototype.slice.call(arguments, 0, -1)
              , n = arguments[arguments.length - 1]
              , o = O(n)
              , i = e.utc.apply(null, t);
            return o && !e.isMoment(a) && D(i) && i.add(o.parse(i), "minutes"),
            i.tz(n),
            i
        }
        (c < 2 || 2 === c && d < 6) && N("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js " + e.version + ". See momentjs.com"),
        p.prototype = {
            _set: function(e) {
                this.name = e.name,
                this.abbrs = e.abbrs,
                this.untils = e.untils,
                this.offsets = e.offsets,
                this.population = e.population
            },
            _index: function(e) {
                var a, t = +e, n = this.untils;
                for (a = 0; a < n.length; a++)
                    if (t < n[a])
                        return a
            },
            countries: function() {
                var e = this.name;
                return Object.keys(o).filter((function(a) {
                    return -1 !== o[a].zones.indexOf(e)
                }
                ))
            },
            parse: function(e) {
                var a, t, n, o, i = +e, r = this.offsets, s = this.untils, c = s.length - 1;
                for (o = 0; o < c; o++)
                    if (a = r[o],
                    t = r[o + 1],
                    n = r[o ? o - 1 : o],
                    a < t && w.moveAmbiguousForward ? a = t : a > n && w.moveInvalidForward && (a = n),
                    i < s[o] - 6e4 * a)
                        return r[o];
                return r[c]
            },
            abbr: function(e) {
                return this.abbrs[this._index(e)]
            },
            offset: function(e) {
                return N("zone.offset has been deprecated in favor of zone.utcOffset"),
                this.offsets[this._index(e)]
            },
            utcOffset: function(e) {
                return this.offsets[this._index(e)]
            }
        },
        b.prototype.scoreOffsetAt = function(e) {
            this.offsetScore += Math.abs(this.zone.utcOffset(e.at) - e.offset),
            this.zone.abbr(e.at).replace(/[^A-Z]/g, "") !== e.abbr && this.abbrScore++
        }
        ,
        w.version = "0.5.31",
        w.dataVersion = "",
        w._zones = t,
        w._links = n,
        w._names = i,
        w._countries = o,
        w.add = Y,
        w.link = k,
        w.load = function(e) {
            Y(e.zones),
            k(e.links),
            function(e) {
                var a, t, n, i;
                if (e && e.length)
                    for (a = 0; a < e.length; a++)
                        t = (i = e[a].split("|"))[0].toUpperCase(),
                        n = i[1].split(" "),
                        o[t] = new f(t,n)
            }(e.countries),
            w.dataVersion = e.version
        }
        ,
        w.zone = O,
        w.zoneExists = function e(a) {
            return e.didShowError || (e.didShowError = !0,
            N("moment.tz.zoneExists('" + a + "') has been deprecated in favor of !moment.tz.zone('" + a + "')")),
            !!O(a)
        }
        ,
        w.guess = function(e) {
            return a && !e || (a = g()),
            a
        }
        ,
        w.names = function() {
            var e, a = [];
            for (e in i)
                i.hasOwnProperty(e) && (t[e] || t[n[e]]) && i[e] && a.push(i[e]);
            return a.sort()
        }
        ,
        w.Zone = p,
        w.unpack = m,
        w.unpackBase60 = u,
        w.needsOffset = D,
        w.moveInvalidForward = !0,
        w.moveAmbiguousForward = !1,
        w.countries = function() {
            return Object.keys(o)
        }
        ,
        w.zonesForCountry = function(e, a) {
            var t;
            if (t = (t = e).toUpperCase(),
            !(e = o[t] || null))
                return null;
            var n = e.zones.sort();
            return a ? n.map((function(e) {
                return {
                    name: e,
                    offset: O(e).utcOffset(new Date)
                }
            }
            )) : n
        }
        ;
        var W, q = e.fn;
        function v(e) {
            return function() {
                return this._z ? this._z.abbr(this) : e.call(this)
            }
        }
        function S(e) {
            return function() {
                return this._z = null,
                e.apply(this, arguments)
            }
        }
        e.tz = w,
        e.defaultZone = null,
        e.updateOffset = function(a, t) {
            var n, o = e.defaultZone;
            if (void 0 === a._z && (o && D(a) && !a._isUTC && (a._d = e.utc(a._a)._d,
            a.utc().add(o.parse(a), "minutes")),
            a._z = o),
            a._z)
                if (n = a._z.utcOffset(a),
                Math.abs(n) < 16 && (n /= 60),
                void 0 !== a.utcOffset) {
                    var i = a._z;
                    a.utcOffset(-n, t),
                    a._z = i
                } else
                    a.zone(n, t)
        }
        ,
        q.tz = function(a, t) {
            if (a) {
                if ("string" != typeof a)
                    throw new Error("Time zone name must be a string, got " + a + " [" + typeof a + "]");
                return this._z = O(a),
                this._z ? e.updateOffset(this, t) : N("Moment Timezone has no data for " + a + ". See http://momentjs.com/timezone/docs/#/data-loading/."),
                this
            }
            if (this._z)
                return this._z.name
        }
        ,
        q.zoneName = v(q.zoneName),
        q.zoneAbbr = v(q.zoneAbbr),
        q.utc = S(q.utc),
        q.local = S(q.local),
        q.utcOffset = (W = q.utcOffset,
        function() {
            return arguments.length > 0 && (this._z = null),
            W.apply(this, arguments)
        }
        ),
        e.tz.setDefault = function(a) {
            return (c < 2 || 2 === c && d < 9) && N("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js " + e.version + "."),
            e.defaultZone = a ? O(a) : null,
            e
        }
        ;
        var B = e.momentProperties;
        return "[object Array]" === Object.prototype.toString.call(B) ? (B.push("_z"),
        B.push("_a")) : B && (B._z = null),
        e
    }
    ))
}
, function(e, a) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}
        ,
        e.paths = [],
        e.children || (e.children = []),
        Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }),
        Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }),
        e.webpackPolyfill = 1),
        e
    }
}
, function(e, a, t) {
    var n = {
        "./af": 2,
        "./af.js": 2,
        "./ar": 3,
        "./ar-dz": 4,
        "./ar-dz.js": 4,
        "./ar-kw": 5,
        "./ar-kw.js": 5,
        "./ar-ly": 6,
        "./ar-ly.js": 6,
        "./ar-ma": 7,
        "./ar-ma.js": 7,
        "./ar-sa": 8,
        "./ar-sa.js": 8,
        "./ar-tn": 9,
        "./ar-tn.js": 9,
        "./ar.js": 3,
        "./az": 10,
        "./az.js": 10,
        "./be": 11,
        "./be.js": 11,
        "./bg": 12,
        "./bg.js": 12,
        "./bm": 13,
        "./bm.js": 13,
        "./bn": 14,
        "./bn-bd": 15,
        "./bn-bd.js": 15,
        "./bn.js": 14,
        "./bo": 16,
        "./bo.js": 16,
        "./br": 17,
        "./br.js": 17,
        "./bs": 18,
        "./bs.js": 18,
        "./ca": 19,
        "./ca.js": 19,
        "./cs": 20,
        "./cs.js": 20,
        "./cv": 21,
        "./cv.js": 21,
        "./cy": 22,
        "./cy.js": 22,
        "./da": 23,
        "./da.js": 23,
        "./de": 24,
        "./de-at": 25,
        "./de-at.js": 25,
        "./de-ch": 26,
        "./de-ch.js": 26,
        "./de.js": 24,
        "./dv": 27,
        "./dv.js": 27,
        "./el": 28,
        "./el.js": 28,
        "./en-au": 29,
        "./en-au.js": 29,
        "./en-ca": 30,
        "./en-ca.js": 30,
        "./en-gb": 31,
        "./en-gb.js": 31,
        "./en-ie": 32,
        "./en-ie.js": 32,
        "./en-il": 33,
        "./en-il.js": 33,
        "./en-in": 34,
        "./en-in.js": 34,
        "./en-nz": 35,
        "./en-nz.js": 35,
        "./en-sg": 36,
        "./en-sg.js": 36,
        "./eo": 37,
        "./eo.js": 37,
        "./es": 38,
        "./es-do": 39,
        "./es-do.js": 39,
        "./es-mx": 40,
        "./es-mx.js": 40,
        "./es-us": 41,
        "./es-us.js": 41,
        "./es.js": 38,
        "./et": 42,
        "./et.js": 42,
        "./eu": 43,
        "./eu.js": 43,
        "./fa": 44,
        "./fa.js": 44,
        "./fi": 45,
        "./fi.js": 45,
        "./fil": 46,
        "./fil.js": 46,
        "./fo": 47,
        "./fo.js": 47,
        "./fr": 48,
        "./fr-ca": 49,
        "./fr-ca.js": 49,
        "./fr-ch": 50,
        "./fr-ch.js": 50,
        "./fr.js": 48,
        "./fy": 51,
        "./fy.js": 51,
        "./ga": 52,
        "./ga.js": 52,
        "./gd": 53,
        "./gd.js": 53,
        "./gl": 54,
        "./gl.js": 54,
        "./gom-deva": 55,
        "./gom-deva.js": 55,
        "./gom-latn": 56,
        "./gom-latn.js": 56,
        "./gu": 57,
        "./gu.js": 57,
        "./he": 58,
        "./he.js": 58,
        "./hi": 59,
        "./hi.js": 59,
        "./hr": 60,
        "./hr.js": 60,
        "./hu": 61,
        "./hu.js": 61,
        "./hy-am": 62,
        "./hy-am.js": 62,
        "./id": 63,
        "./id.js": 63,
        "./is": 64,
        "./is.js": 64,
        "./it": 65,
        "./it-ch": 66,
        "./it-ch.js": 66,
        "./it.js": 65,
        "./ja": 67,
        "./ja.js": 67,
        "./jv": 68,
        "./jv.js": 68,
        "./ka": 69,
        "./ka.js": 69,
        "./kk": 70,
        "./kk.js": 70,
        "./km": 71,
        "./km.js": 71,
        "./kn": 72,
        "./kn.js": 72,
        "./ko": 73,
        "./ko.js": 73,
        "./ku": 74,
        "./ku.js": 74,
        "./ky": 75,
        "./ky.js": 75,
        "./lb": 76,
        "./lb.js": 76,
        "./lo": 77,
        "./lo.js": 77,
        "./lt": 78,
        "./lt.js": 78,
        "./lv": 79,
        "./lv.js": 79,
        "./me": 80,
        "./me.js": 80,
        "./mi": 81,
        "./mi.js": 81,
        "./mk": 82,
        "./mk.js": 82,
        "./ml": 83,
        "./ml.js": 83,
        "./mn": 84,
        "./mn.js": 84,
        "./mr": 85,
        "./mr.js": 85,
        "./ms": 86,
        "./ms-my": 87,
        "./ms-my.js": 87,
        "./ms.js": 86,
        "./mt": 88,
        "./mt.js": 88,
        "./my": 89,
        "./my.js": 89,
        "./nb": 90,
        "./nb.js": 90,
        "./ne": 91,
        "./ne.js": 91,
        "./nl": 92,
        "./nl-be": 93,
        "./nl-be.js": 93,
        "./nl.js": 92,
        "./nn": 94,
        "./nn.js": 94,
        "./oc-lnc": 95,
        "./oc-lnc.js": 95,
        "./pa-in": 96,
        "./pa-in.js": 96,
        "./pl": 97,
        "./pl.js": 97,
        "./pt": 98,
        "./pt-br": 99,
        "./pt-br.js": 99,
        "./pt.js": 98,
        "./ro": 100,
        "./ro.js": 100,
        "./ru": 101,
        "./ru.js": 101,
        "./sd": 102,
        "./sd.js": 102,
        "./se": 103,
        "./se.js": 103,
        "./si": 104,
        "./si.js": 104,
        "./sk": 105,
        "./sk.js": 105,
        "./sl": 106,
        "./sl.js": 106,
        "./sq": 107,
        "./sq.js": 107,
        "./sr": 108,
        "./sr-cyrl": 109,
        "./sr-cyrl.js": 109,
        "./sr.js": 108,
        "./ss": 110,
        "./ss.js": 110,
        "./sv": 111,
        "./sv.js": 111,
        "./sw": 112,
        "./sw.js": 112,
        "./ta": 113,
        "./ta.js": 113,
        "./te": 114,
        "./te.js": 114,
        "./tet": 115,
        "./tet.js": 115,
        "./tg": 116,
        "./tg.js": 116,
        "./th": 117,
        "./th.js": 117,
        "./tk": 118,
        "./tk.js": 118,
        "./tl-ph": 119,
        "./tl-ph.js": 119,
        "./tlh": 120,
        "./tlh.js": 120,
        "./tr": 121,
        "./tr.js": 121,
        "./tzl": 122,
        "./tzl.js": 122,
        "./tzm": 123,
        "./tzm-latn": 124,
        "./tzm-latn.js": 124,
        "./tzm.js": 123,
        "./ug-cn": 125,
        "./ug-cn.js": 125,
        "./uk": 126,
        "./uk.js": 126,
        "./ur": 127,
        "./ur.js": 127,
        "./uz": 128,
        "./uz-latn": 129,
        "./uz-latn.js": 129,
        "./uz.js": 128,
        "./vi": 130,
        "./vi.js": 130,
        "./x-pseudo": 131,
        "./x-pseudo.js": 131,
        "./yo": 132,
        "./yo.js": 132,
        "./zh-cn": 133,
        "./zh-cn.js": 133,
        "./zh-hk": 134,
        "./zh-hk.js": 134,
        "./zh-mo": 135,
        "./zh-mo.js": 135,
        "./zh-tw": 136,
        "./zh-tw.js": 136
    };
    function o(e) {
        var a = i(e);
        return t(a)
    }
    function i(e) {
        var a = n[e];
        if (!(a + 1)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND",
            t
        }
        return a
    }
    o.keys = function() {
        return Object.keys(n)
    }
    ,
    o.resolve = i,
    e.exports = o,
    o.id = 147
}
, function(e) {
    e.exports = {
        version: "2020a",
        zones: ["Africa/Abidjan|LMT GMT|g.8 0|01|-2ldXH.Q|48e5", "Africa/Accra|LMT GMT +0020|.Q 0 -k|012121212121212121212121212121212121212121212121|-26BbX.8 6tzX.8 MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE|41e5", "Africa/Nairobi|LMT EAT +0230 +0245|-2r.g -30 -2u -2J|01231|-1F3Cr.g 3Dzr.g okMu MFXJ|47e5", "Africa/Algiers|PMT WET WEST CET CEST|-9.l 0 -10 -10 -20|0121212121212121343431312123431213|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 DA0 Imo0 rd0 De0 9Xz0 1fb0 1ap0 16K0 2yo0 mEp0 hwL0 jxA0 11A0 dDd0 17b0 11B0 1cN0 2Dy0 1cN0 1fB0 1cL0|26e5", "Africa/Lagos|LMT WAT|-d.A -10|01|-22y0d.A|17e6", "Africa/Bissau|LMT -01 GMT|12.k 10 0|012|-2ldX0 2xoo0|39e4", "Africa/Maputo|LMT CAT|-2a.k -20|01|-2GJea.k|26e5", "Africa/Cairo|EET EEST|-20 -30|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1bIO0 vb0 1ip0 11z0 1iN0 1nz0 12p0 1pz0 10N0 1pz0 16p0 1jz0 s3d0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1WL0 rd0 1Rz0 wp0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1qL0 Xd0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1ny0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 WL0 1qN0 Rb0 1wp0 On0 1zd0 Lz0 1EN0 Fb0 c10 8n0 8Nd0 gL0 e10 mn0|15e6", "Africa/Casablanca|LMT +00 +01|u.k 0 -10|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2gMnt.E 130Lt.E rb0 Dd0 dVb0 b6p0 TX0 EoB0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4mn0 SyN0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 28M0 e00 2600 gM0 2600 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 2600 gM0 2600 gM0 2600 e00 2600 gM0|32e5", "Africa/Ceuta|WET WEST CET CEST|0 -10 -10 -20|010101010101010101010232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-25KN0 11z0 drd0 18p0 3HX0 17d0 1fz0 1a10 1io0 1a00 1y7o0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4VB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|85e3", "Africa/El_Aaiun|LMT -01 +00 +01|Q.M 10 0 -10|012323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1rDz7.c 1GVA7.c 6L0 AL0 1Nd0 XX0 1Cp0 pz0 1cBB0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 28M0 e00 2600 gM0 2600 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 2600 gM0 2600 gM0 2600 e00 2600 gM0|20e4", "Africa/Johannesburg|SAST SAST SAST|-1u -20 -30|012121|-2GJdu 1Ajdu 1cL0 1cN0 1cL0|84e5", "Africa/Juba|LMT CAT CAST EAT|-26.s -20 -30 -30|01212121212121212121212121212121213|-1yW26.s 1zK06.s 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0|", "Africa/Khartoum|LMT CAT CAST EAT|-2a.8 -20 -30 -30|012121212121212121212121212121212131|-1yW2a.8 1zK0a.8 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0 HjL0|51e5", "Africa/Monrovia|MMT MMT GMT|H.8 I.u 0|012|-23Lzg.Q 28G01.m|11e5", "Africa/Ndjamena|LMT WAT WAST|-10.c -10 -20|0121|-2le10.c 2J3c0.c Wn0|13e5", "Africa/Sao_Tome|LMT GMT WAT|A.J 0 -10|0121|-2le00 4i6N0 2q00|", "Africa/Tripoli|LMT CET CEST EET|-Q.I -10 -20 -20|012121213121212121212121213123123|-21JcQ.I 1hnBQ.I vx0 4iP0 xx0 4eN0 Bb0 7ip0 U0n0 A10 1db0 1cN0 1db0 1dd0 1db0 1eN0 1bb0 1e10 1cL0 1c10 1db0 1dd0 1db0 1cN0 1db0 1q10 fAn0 1ep0 1db0 AKq0 TA0 1o00|11e5", "Africa/Tunis|PMT CET CEST|-9.l -10 -20|0121212121212121212121212121212121|-2nco9.l 18pa9.l 1qM0 DA0 3Tc0 11B0 1ze0 WM0 7z0 3d0 14L0 1cN0 1f90 1ar0 16J0 1gXB0 WM0 1rA0 11c0 nwo0 Ko0 1cM0 1cM0 1rA0 10M0 zuM0 10N0 1aN0 1qM0 WM0 1qM0 11A0 1o00|20e5", "Africa/Windhoek|+0130 SAST SAST CAT WAT|-1u -20 -30 -20 -10|01213434343434343434343434343434343434343434343434343|-2GJdu 1Ajdu 1cL0 1SqL0 9Io0 16P0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0|32e4", "America/Adak|NST NWT NPT BST BDT AHST HST HDT|b0 a0 a0 b0 a0 a0 a0 90|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|326", "America/Anchorage|AST AWT APT AHST AHDT YST AKST AKDT|a0 90 90 a0 90 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T00 8wX0 iA0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|30e4", "America/Port_of_Spain|LMT AST|46.4 40|01|-2kNvR.U|43e3", "America/Araguaina|LMT -03 -02|3c.M 30 20|0121212121212121212121212121212121212121212121212121|-2glwL.c HdKL.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 ny10 Lz0|14e4", "America/Argentina/Buenos_Aires|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 A4p0 uL0 1qN0 WL0|", "America/Argentina/Catamarca|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323132321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 rlB0 7B0 8zb0 uL0|", "America/Argentina/Cordoba|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323132323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 A4p0 uL0 1qN0 WL0|", "America/Argentina/Jujuy|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323121323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1ze0 TX0 1ld0 WK0 1wp0 TX0 A4p0 uL0|", "America/Argentina/La_Rioja|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 rlB0 7B0 8zb0 uL0|", "America/Argentina/Mendoza|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232312121321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1u20 SL0 1vd0 Tb0 1wp0 TW0 ri10 Op0 7TX0 uL0|", "America/Argentina/Rio_Gallegos|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 rlB0 7B0 8zb0 uL0|", "America/Argentina/Salta|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 A4p0 uL0|", "America/Argentina/San_Juan|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 rld0 m10 8lb0 uL0|", "America/Argentina/San_Luis|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323121212321212|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 XX0 1q20 SL0 AN0 vDb0 m10 8lb0 8L0 jd0 1qN0 WL0 1qN0|", "America/Argentina/Tucuman|CMT -04 -03 -02|4g.M 40 30 20|0121212121212121212121212121212121212121212323232313232123232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 rlB0 4N0 8BX0 uL0 1qN0 WL0|", "America/Argentina/Ushuaia|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 rkN0 8p0 8zb0 uL0|", "America/Curacao|LMT -0430 AST|4z.L 4u 40|012|-2kV7o.d 28KLS.d|15e4", "America/Asuncion|AMT -04 -03|3O.E 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-1x589.k 1DKM9.k 3CL0 3Dd0 10L0 1pB0 10n0 1pB0 10n0 1pB0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1lB0 14n0 1dd0 1cL0 1fd0 WL0 1rd0 1aL0 1dB0 Xz0 1qp0 Xb0 1qN0 10L0 1rB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 WN0 1qL0 11B0 1nX0 1ip0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 TX0 1tB0 19X0 1a10 1fz0 1a10 1fz0 1cN0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0|28e5", "America/Atikokan|CST CDT CWT CPT EST|60 50 50 50 50|0101234|-25TQ0 1in0 Rnb0 3je0 8x30 iw0|28e2", "America/Bahia_Banderas|LMT MST CST PST MDT CDT|71 70 60 80 60 50|0121212131414141414141414141414141414152525252525252525252525252525252525252525252525252525252|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nW0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|84e3", "America/Bahia|LMT -03 -02|2y.4 30 20|01212121212121212121212121212121212121212121212121212121212121|-2glxp.U HdLp.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 l5B0 Rb0|27e5", "America/Barbados|LMT BMT AST ADT|3W.t 3W.t 40 30|01232323232|-1Q0I1.v jsM0 1ODC1.v IL0 1ip0 17b0 1ip0 17b0 1ld0 13b0|28e4", "America/Belem|LMT -03 -02|3d.U 30 20|012121212121212121212121212121|-2glwK.4 HdKK.4 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0|20e5", "America/Belize|LMT CST -0530 CDT|5Q.M 60 5u 50|01212121212121212121212121212121212121212121212121213131|-2kBu7.c fPA7.c Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1f0Mu qn0 lxB0 mn0|57e3", "America/Blanc-Sablon|AST ADT AWT APT|40 30 30 30|010230|-25TS0 1in0 UGp0 8x50 iu0|11e2", "America/Boa_Vista|LMT -04 -03|42.E 40 30|0121212121212121212121212121212121|-2glvV.k HdKV.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 smp0 WL0 1tB0 2L0|62e2", "America/Bogota|BMT -05 -04|4U.g 50 40|0121|-2eb73.I 38yo3.I 2en0|90e5", "America/Boise|PST PDT MST MWT MPT MDT|80 70 70 60 60 60|0101023425252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-261q0 1nX0 11B0 1nX0 8C10 JCL0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 Dd0 1Kn0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e4", "America/Cambridge_Bay|-00 MST MWT MPT MDDT MDT CST CDT EST|0 70 60 60 50 60 60 50 50|0123141515151515151515151515151515151515151515678651515151515151515151515151515151515151515151515151515151515151515151515151|-21Jc0 RO90 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11A0 1nX0 2K0 WQ0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e2", "America/Campo_Grande|LMT -04 -03|3C.s 40 30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glwl.w HdLl.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0|77e4", "America/Cancun|LMT CST EST EDT CDT|5L.4 60 50 40 50|0123232341414141414141414141414141414141412|-1UQG0 2q2o0 yLB0 1lb0 14p0 1lb0 14p0 Lz0 xB0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 Dd0|63e4", "America/Caracas|CMT -0430 -04|4r.E 4u 40|01212|-2kV7w.k 28KM2.k 1IwOu kqo0|29e5", "America/Cayenne|LMT -04 -03|3t.k 40 30|012|-2mrwu.E 2gWou.E|58e3", "America/Panama|CMT EST|5j.A 50|01|-2uduE.o|15e5", "America/Chicago|CST CDT EST CWT CPT|60 50 50 50 50|01010101010101010101010101010101010102010101010103401010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 1wp0 TX0 WN0 1qL0 1cN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 11B0 1Hz0 14p0 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|92e5", "America/Chihuahua|LMT MST CST CDT MDT|74.k 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|81e4", "America/Costa_Rica|SJMT CST CDT|5A.d 60 50|0121212121|-1Xd6n.L 2lu0n.L Db0 1Kp0 Db0 pRB0 15b0 1kp0 mL0|12e5", "America/Creston|MST PST|70 80|010|-29DR0 43B0|53e2", "America/Cuiaba|LMT -04 -03|3I.k 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glwf.E HdLf.E 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 4a10 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0|54e4", "America/Danmarkshavn|LMT -03 -02 GMT|1e.E 30 20 0|01212121212121212121212121212121213|-2a5WJ.k 2z5fJ.k 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 DC0|8", "America/Dawson_Creek|PST PDT PWT PPT MST|80 70 70 70 70|0102301010101010101010101010101010101010101010101010101014|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 ML0|12e3", "America/Dawson|YST YDT YWT YPT YDDT PST PDT MST|90 80 80 80 70 80 70 70|01010230405656565656565656565656565656565656565656565656565656565656565656565656565656565657|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 jrA0 fNd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0|13e2", "America/Denver|MST MDT MWT MPT|70 60 60 60|01010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 11B0 1qL0 WN0 mn0 Ord0 8x20 ix0 LCN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e5", "America/Detroit|LMT CST EST EWT EPT EDT|5w.b 60 50 40 40 40|0123425252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2Cgir.N peqr.N 156L0 8x40 iv0 6fd0 11z0 JxX1 SMX 1cN0 1cL0 aW10 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e5", "America/Edmonton|LMT MST MDT MWT MPT|7x.Q 70 60 60 60|0121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2yd4q.8 shdq.8 1in0 17d0 hz0 2dB0 1fz0 1a10 11z0 1qN0 WL0 1qN0 11z0 IGN0 8x20 ix0 3NB0 11z0 XQp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|10e5", "America/Eirunepe|LMT -05 -04|4D.s 50 40|0121212121212121212121212121212121|-2glvk.w HdLk.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0 yTd0 d5X0|31e3", "America/El_Salvador|LMT CST CDT|5U.M 60 50|012121|-1XiG3.c 2Fvc3.c WL0 1qN0 WL0|11e5", "America/Tijuana|LMT MST PST PDT PWT PPT|7M.4 70 80 70 70 70|012123245232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQE0 4PX0 8mM0 8lc0 SN0 1cL0 pHB0 83r0 zI0 5O10 1Rz0 cOO0 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 BUp0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|20e5", "America/Fort_Nelson|PST PDT PWT PPT MST|80 70 70 70 70|01023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010104|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0|39e2", "America/Fort_Wayne|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010101023010101010101010101040454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 QI10 Db0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 5Tz0 1o10 qLb0 1cL0 1cN0 1cL0 1qhd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/Fortaleza|LMT -03 -02|2y 30 20|0121212121212121212121212121212121212121|-2glxq HdLq 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 5z0 2mN0 On0|34e5", "America/Glace_Bay|LMT AST ADT AWT APT|3X.M 40 30 30 30|012134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsI0.c CwO0.c 1in0 UGp0 8x50 iu0 iq10 11z0 Jg10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3", "America/Godthab|LMT -03 -02|3q.U 30 20|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5Ux.4 2z5dx.4 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e3", "America/Goose_Bay|NST NDT NST NDT NWT NPT AST ADT ADDT|3u.Q 2u.Q 3u 2u 2u 2u 40 30 20|010232323232323245232323232323232323232323232323232323232326767676767676767676767676767676767676767676768676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-25TSt.8 1in0 DXb0 2HbX.8 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 S10 g0u 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|76e2", "America/Grand_Turk|KMT EST EDT AST|57.a 50 40 40|01212121212121212121212121212121212121212121212121212121212121212121212121232121212121212121212121212121212121212121|-2l1uQ.O 2HHBQ.O 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 5Ip0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e2", "America/Guatemala|LMT CST CDT|62.4 60 50|0121212121|-24KhV.U 2efXV.U An0 mtd0 Nz0 ifB0 17b0 zDB0 11z0|13e5", "America/Guayaquil|QMT -05 -04|5e 50 40|0121|-1yVSK 2uILK rz0|27e5", "America/Guyana|LMT -0345 -03 -04|3Q.E 3J 30 40|0123|-2dvU7.k 2r6LQ.k Bxbf|80e4", "America/Halifax|LMT AST ADT AWT APT|4e.o 40 30 30 30|0121212121212121212121212121212121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsHJ.A xzzJ.A 1db0 3I30 1in0 3HX0 IL0 1E10 ML0 1yN0 Pb0 1Bd0 Mn0 1Bd0 Rz0 1w10 Xb0 1w10 LX0 1w10 Xb0 1w10 Lz0 1C10 Jz0 1E10 OL0 1yN0 Un0 1qp0 Xb0 1qp0 11X0 1w10 Lz0 1HB0 LX0 1C10 FX0 1w10 Xb0 1qp0 Xb0 1BB0 LX0 1td0 Xb0 1qp0 Xb0 Rf0 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 6i10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|39e4", "America/Havana|HMT CST CDT|5t.A 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Meuu.o 72zu.o ML0 sld0 An0 1Nd0 Db0 1Nd0 An0 6Ep0 An0 1Nd0 An0 JDd0 Mn0 1Ap0 On0 1fd0 11X0 1qN0 WL0 1wp0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 14n0 1ld0 14L0 1kN0 15b0 1kp0 1cL0 1cN0 1fz0 1a10 1fz0 1fB0 11z0 14p0 1nX0 11B0 1nX0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 1a10 1in0 1a10 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 17c0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 11A0 6i00 Rc0 1wo0 U00 1tA0 Rc0 1wo0 U00 1wo0 U00 1zc0 U00 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0|21e5", "America/Hermosillo|LMT MST CST PST MDT|7n.Q 70 60 80 60|0121212131414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0|64e4", "America/Indiana/Knox|CST CDT CWT CPT EST|60 50 50 50 50|0101023010101010101010101010101010101040101010101010101010101010101010101010101010101010141010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 3Cn0 8wp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 z8o0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/Indiana/Marengo|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010104545454545414545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 dyN0 11z0 6fd0 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1e6p0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/Indiana/Petersburg|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010104010101010101010101010141014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 njX0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 3Fb0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 19co0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/Indiana/Tell_City|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010401054541010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 njX0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 8wn0 1cN0 1cL0 1cN0 1cK0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/Indiana/Vevay|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010102304545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 kPB0 Awn0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1lnd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/Indiana/Vincennes|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010454541014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 g0p0 11z0 1o10 11z0 1qL0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 caL0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/Indiana/Winamac|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010101010454541054545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1za0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/Inuvik|-00 PST PDDT MST MDT|0 80 60 70 60|0121343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-FnA0 tWU0 1fA0 wPe0 2pz0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|35e2", "America/Iqaluit|-00 EWT EPT EST EDDT EDT CST CDT|0 40 40 50 30 40 60 50|01234353535353535353535353535353535353535353567353535353535353535353535353535353535353535353535353535353535353535353535353|-16K00 7nX0 iv0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|67e2", "America/Jamaica|KMT EST EDT|57.a 50 40|0121212121212121212121|-2l1uQ.O 2uM1Q.O 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0|94e4", "America/Juneau|PST PWT PPT PDT YDT YST AKST AKDT|80 70 70 70 80 90 90 80|01203030303030303030303030403030356767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cM0 1cM0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|33e3", "America/Kentucky/Louisville|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101010102301010101010101010101010101454545454545414545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 3Fd0 Nb0 LPd0 11z0 RB0 8x30 iw0 1nX1 e0X 9vd0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 xz0 gso0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/Kentucky/Monticello|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 SWp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/La_Paz|CMT BST -04|4w.A 3w.A 40|012|-1x37r.o 13b0|19e5", "America/Lima|LMT -05 -04|58.A 50 40|0121212121212121|-2tyGP.o 1bDzP.o zX0 1aN0 1cL0 1cN0 1cL0 1PrB0 zX0 1O10 zX0 6Gp0 zX0 98p0 zX0|11e6", "America/Los_Angeles|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 5Wp1 1VaX 3dA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e6", "America/Maceio|LMT -03 -02|2m.Q 30 20|012121212121212121212121212121212121212121|-2glxB.8 HdLB.8 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 8Q10 WL0 1tB0 5z0 2mN0 On0|93e4", "America/Managua|MMT CST EST CDT|5J.c 60 50 50|0121313121213131|-1quie.M 1yAMe.M 4mn0 9Up0 Dz0 1K10 Dz0 s3F0 1KH0 DB0 9In0 k8p0 19X0 1o30 11y0|22e5", "America/Manaus|LMT -04 -03|40.4 40 30|01212121212121212121212121212121|-2glvX.U HdKX.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0|19e5", "America/Martinique|FFMT AST ADT|44.k 40 30|0121|-2mPTT.E 2LPbT.E 19X0|39e4", "America/Matamoros|LMT CST CDT|6E 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|45e4", "America/Mazatlan|LMT MST CST PST MDT|75.E 70 60 80 60|0121212131414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|44e4", "America/Menominee|CST CDT CWT CPT EST|60 50 50 50 50|01010230101041010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 LCN0 1fz0 6410 9Jb0 1cM0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|85e2", "America/Merida|LMT CST EST CDT|5W.s 60 50 50|0121313131313131313131313131313131313131313131313131313131313131313131313131313131313131|-1UQG0 2q2o0 2hz0 wu30 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|11e5", "America/Metlakatla|PST PWT PPT PDT AKST AKDT|80 70 70 70 90 80|01203030303030303030303030303030304545450454545454545454545454545454545454545454|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1hU10 Rd0 1zb0 Op0 1zb0 Op0 1zb0 uM0 jB0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2", "America/Mexico_City|LMT MST CST CDT CWT|6A.A 70 60 50 50|012121232324232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 gEn0 TX0 3xd0 Jb0 6zB0 SL0 e5d0 17b0 1Pff0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|20e6", "America/Miquelon|LMT AST -03 -02|3I.E 40 30 20|012323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2mKkf.k 2LTAf.k gQ10 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|61e2", "America/Moncton|EST AST ADT AWT APT|50 40 30 30 30|012121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsH0 CwN0 1in0 zAo0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1K10 Lz0 1zB0 NX0 1u10 Wn0 S20 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14n1 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 ReX 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|64e3", "America/Monterrey|LMT CST CDT|6F.g 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|41e5", "America/Montevideo|LMT MMT -04 -03 -0330 -0230 -02 -0130|3I.P 3I.P 40 30 3u 2u 20 1u|012343434343434343434343435353636353636375363636363636363636363636363636363636363636363|-2tRUf.9 sVc0 8jcf.9 1db0 1dcu 1cLu 1dcu 1cLu ircu 11zu 1o0u 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu WLu 1fAu 1cLu 1o0u 11zu NAu 3jXu zXu Dq0u 19Xu pcu jz0 cm10 19X0 6tB0 1fbu 3o0u jX0 4vB0 xz0 3Cp0 mmu 1a10 IMu Db0 4c10 uL0 1Nd0 An0 1SN0 uL0 mp0 28L0 iPB0 un0 1SN0 xz0 1zd0 Lz0 1zd0 Rb0 1zd0 On0 1wp0 Rb0 s8p0 1fB0 1ip0 11z0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 11z0|17e5", "America/Toronto|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101012301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 11Wu 1nzu 1fD0 WJ0 1wr0 Nb0 1Ap0 On0 1zd0 On0 1wp0 TX0 1tB0 TX0 1tB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 4kM0 8x40 iv0 1o10 11z0 1nX0 11z0 1o10 11z0 1o10 1qL0 11D0 1nX0 11B0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e5", "America/Nassau|LMT EST EDT|59.u 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2kNuO.u 26XdO.u 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|24e4", "America/New_York|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 11B0 1qL0 1a10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x40 iv0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e6", "America/Nipigon|EST EDT EWT EPT|50 40 40 40|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 Rnb0 3je0 8x40 iv0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|16e2", "America/Nome|NST NWT NPT BST BDT YST AKST AKDT|b0 a0 a0 b0 a0 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cl0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|38e2", "America/Noronha|LMT -02 -01|29.E 20 10|0121212121212121212121212121212121212121|-2glxO.k HdKO.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|30e2", "America/North_Dakota/Beulah|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/North_Dakota/Center|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/North_Dakota/New_Salem|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "America/Ojinaga|LMT MST CST CDT MDT|6V.E 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e3", "America/Pangnirtung|-00 AST AWT APT ADDT ADT EDT EST CST CDT|0 40 30 30 20 30 40 50 60 50|012314151515151515151515151515151515167676767689767676767676767676767676767676767676767676767676767676767676767676767676767|-1XiM0 PnG0 8x50 iu0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1o00 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2", "America/Paramaribo|LMT PMT PMT -0330 -03|3E.E 3E.Q 3E.A 3u 30|01234|-2nDUj.k Wqo0.c qanX.I 1yVXN.o|24e4", "America/Phoenix|MST MDT MWT|70 60 60|01010202010|-261r0 1nX0 11B0 1nX0 SgN0 4Al1 Ap0 1db0 SWqX 1cL0|42e5", "America/Port-au-Prince|PPMT EST EDT|4N 50 40|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-28RHb 2FnMb 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14q0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 i6n0 1nX0 11B0 1nX0 d430 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 3iN0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5", "America/Rio_Branco|LMT -05 -04|4v.c 50 40|01212121212121212121212121212121|-2glvs.M HdLs.M 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0 d5X0|31e4", "America/Porto_Velho|LMT -04 -03|4f.A 40 30|012121212121212121212121212121|-2glvI.o HdKI.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0|37e4", "America/Puerto_Rico|AST AWT APT|40 30 30|0120|-17lU0 7XT0 iu0|24e5", "America/Punta_Arenas|SMT -05 -04 -03|4G.K 50 40 30|0102021212121212121232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-2q2jh.e fJAh.e 5knG.K 1Vzh.e jRAG.K 1pbh.e 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 nHX0 op0 blz0 ko0 Qeo0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0|", "America/Rainy_River|CST CDT CWT CPT|60 50 50 50|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TQ0 1in0 Rnb0 3je0 8x30 iw0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|842", "America/Rankin_Inlet|-00 CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313131313131313131313131313131313131313131313131313131313131313131|-vDc0 keu0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e2", "America/Recife|LMT -03 -02|2j.A 30 20|0121212121212121212121212121212121212121|-2glxE.o HdLE.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|33e5", "America/Regina|LMT MST MDT MWT MPT CST|6W.A 70 60 60 60 60|012121212121212121212121341212121212121212121212121215|-2AD51.o uHe1.o 1in0 s2L0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 66N0 1cL0 1cN0 19X0 1fB0 1cL0 1fB0 1cL0 1cN0 1cL0 M30 8x20 ix0 1ip0 1cL0 1ip0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 3NB0 1cL0 1cN0|19e4", "America/Resolute|-00 CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313431313131313131313131313131313131313131313131313131313131313131|-SnA0 GWS0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|229", "America/Santarem|LMT -04 -03|3C.M 40 30|0121212121212121212121212121212|-2glwl.c HdLl.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0|21e4", "America/Santiago|SMT -05 -04 -03|4G.K 50 40 30|010202121212121212321232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-2q2jh.e fJAh.e 5knG.K 1Vzh.e jRAG.K 1pbh.e 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 nHX0 op0 9Bz0 jb0 1oN0 ko0 Qeo0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1zb0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0|62e5", "America/Santo_Domingo|SDMT EST EDT -0430 AST|4E 50 40 4u 40|01213131313131414|-1ttjk 1lJMk Mn0 6sp0 Lbu 1Cou yLu 1RAu wLu 1QMu xzu 1Q0u xXu 1PAu 13jB0 e00|29e5", "America/Sao_Paulo|LMT -03 -02|36.s 30 20|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glwR.w HdKR.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 pTd0 PX0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0|20e6", "America/Scoresbysund|LMT -02 -01 +00|1r.Q 20 10 0|0121323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2a5Ww.8 2z5ew.8 1a00 1cK0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|452", "America/Sitka|PST PWT PPT PDT YST AKST AKDT|80 70 70 70 90 90 80|01203030303030303030303030303030345656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|90e2", "America/St_Johns|NST NDT NST NDT NWT NPT NDDT|3u.Q 2u.Q 3u 2u 2u 2u 1u|01010101010101010101010101010101010102323232323232324523232323232323232323232323232323232323232323232323232323232323232323232323232323232326232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-28oit.8 14L0 1nB0 1in0 1gm0 Dz0 1JB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1fB0 19X0 1fB0 19X0 10O0 eKX.8 19X0 1iq0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4", "America/Swift_Current|LMT MST MDT MWT MPT CST|7b.k 70 60 60 60 60|012134121212121212121215|-2AD4M.E uHdM.E 1in0 UGp0 8x20 ix0 1o10 17b0 1ip0 11z0 1o10 11z0 1o10 11z0 isN0 1cL0 3Cp0 1cL0 1cN0 11z0 1qN0 WL0 pMp0|16e3", "America/Tegucigalpa|LMT CST CDT|5M.Q 60 50|01212121|-1WGGb.8 2ETcb.8 WL0 1qN0 WL0 GRd0 AL0|11e5", "America/Thule|LMT AST ADT|4z.8 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5To.Q 31NBo.Q 1cL0 1cN0 1cL0 1fB0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|656", "America/Thunder_Bay|CST EST EWT EPT EDT|60 50 40 40 40|0123141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-2q5S0 1iaN0 8x40 iv0 XNB0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4", "America/Vancouver|PST PDT PWT PPT|80 70 70 70|0102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TO0 1in0 UGp0 8x10 iy0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5", "America/Whitehorse|YST YDT YWT YPT YDDT PST PDT MST|90 80 80 80 70 80 70 70|01010230405656565656565656565656565656565656565656565656565656565656565656565656565656565657|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 3NA0 vrd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0|23e3", "America/Winnipeg|CST CDT CWT CPT|60 50 50 50|010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aIi0 WL0 3ND0 1in0 Jap0 Rb0 aCN0 8x30 iw0 1tB0 11z0 1ip0 11z0 1o10 11z0 1o10 11z0 1rd0 10L0 1op0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 1cL0 1cN0 11z0 6i10 WL0 6i10 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|66e4", "America/Yakutat|YST YWT YPT YDT AKST AKDT|90 80 80 80 90 80|01203030303030303030303030303030304545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-17T10 8x00 iz0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cn0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|642", "America/Yellowknife|-00 MST MWT MPT MDDT MDT|0 70 60 60 50 60|012314151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151|-1pdA0 hix0 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3", "Antarctica/Casey|-00 +08 +11|0 -80 -b0|01212121|-2q00 1DjS0 T90 40P0 KL0 blz0 3m10|10", "Antarctica/Davis|-00 +07 +05|0 -70 -50|01012121|-vyo0 iXt0 alj0 1D7v0 VB0 3Wn0 KN0|70", "Antarctica/DumontDUrville|-00 +10|0 -a0|0101|-U0o0 cfq0 bFm0|80", "Antarctica/Macquarie|AEST AEDT -00 +11|-a0 -b0 0 -b0|0102010101010101010101010101010101010101010101010101010101010101010101010101010101010101013|-29E80 19X0 4SL0 1ayy0 Lvs0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0|1", "Antarctica/Mawson|-00 +06 +05|0 -60 -50|012|-CEo0 2fyk0|60", "Pacific/Auckland|NZMT NZST NZST NZDT|-bu -cu -c0 -d0|01020202020202020202020202023232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1GCVu Lz0 1tB0 11zu 1o0u 11zu 1o0u 11zu 1o0u 14nu 1lcu 14nu 1lcu 1lbu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1qLu WMu 1qLu 11Au 1n1bu IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|14e5", "Antarctica/Palmer|-00 -03 -04 -02|0 30 40 20|0121212121213121212121212121212121212121212121212121212121212121212121212121212121|-cao0 nD0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 jsN0 14N0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0|40", "Antarctica/Rothera|-00 -03|0 30|01|gOo0|130", "Antarctica/Syowa|-00 +03|0 -30|01|-vs00|20", "Antarctica/Troll|-00 +00 +02|0 0 -20|01212121212121212121212121212121212121212121212121212121212121212121|1puo0 hd0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|40", "Antarctica/Vostok|-00 +06|0 -60|01|-tjA0|25", "Europe/Oslo|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2awM0 Qm0 W6o0 5pf0 WM0 1fA0 1cM0 1cM0 1cM0 1cM0 wJc0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1qM0 WM0 zpc0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|62e4", "Asia/Riyadh|LMT +03|-36.Q -30|01|-TvD6.Q|57e5", "Asia/Almaty|LMT +05 +06 +07|-57.M -50 -60 -70|012323232323232323232321232323232323232323232323232|-1Pc57.M eUo7.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|15e5", "Asia/Amman|LMT EET EEST|-2n.I -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1yW2n.I 1HiMn.I KL0 1oN0 11b0 1oN0 11b0 1pd0 1dz0 1cp0 11b0 1op0 11b0 fO10 1db0 1e10 1cL0 1cN0 1cL0 1cN0 1fz0 1pd0 10n0 1ld0 14n0 1hB0 15b0 1ip0 19X0 1cN0 1cL0 1cN0 17b0 1ld0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1So0 y00 1fc0 1dc0 1co0 1dc0 1cM0 1cM0 1cM0 1o00 11A0 1lc0 17c0 1cM0 1cM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 4bX0 Dd0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|25e5", "Asia/Anadyr|LMT +12 +13 +14 +11|-bN.U -c0 -d0 -e0 -b0|01232121212121212121214121212121212121212121212121212121212141|-1PcbN.U eUnN.U 23CL0 1db0 2q10 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|13e3", "Asia/Aqtau|LMT +04 +05 +06|-3l.4 -40 -50 -60|012323232323232323232123232312121212121212121212|-1Pc3l.4 eUnl.4 24PX0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|15e4", "Asia/Aqtobe|LMT +04 +05 +06|-3M.E -40 -50 -60|0123232323232323232321232323232323232323232323232|-1Pc3M.E eUnM.E 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|27e4", "Asia/Ashgabat|LMT +04 +05 +06|-3R.w -40 -50 -60|0123232323232323232323212|-1Pc3R.w eUnR.w 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0|41e4", "Asia/Atyrau|LMT +03 +05 +06 +04|-3r.I -30 -50 -60 -40|01232323232323232323242323232323232324242424242|-1Pc3r.I eUor.I 24PW0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 2sp0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|", "Asia/Baghdad|BMT +03 +04|-2V.A -30 -40|012121212121212121212121212121212121212121212121212121|-26BeV.A 2ACnV.A 11b0 1cp0 1dz0 1dd0 1db0 1cN0 1cp0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1de0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0|66e5", "Asia/Qatar|LMT +04 +03|-3q.8 -40 -30|012|-21Jfq.8 27BXq.8|96e4", "Asia/Baku|LMT +03 +04 +05|-3j.o -30 -40 -50|01232323232323232323232123232323232323232323232323232323232323232|-1Pc3j.o 1jUoj.o WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 9Je0 1o00 11z0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00|27e5", "Asia/Bangkok|BMT +07|-6G.4 -70|01|-218SG.4|15e6", "Asia/Barnaul|LMT +06 +07 +08|-5z -60 -70 -80|0123232323232323232323212323232321212121212121212121212121212121212|-21S5z pCnz 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 p90 LE0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|", "Asia/Beirut|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-21aq0 1on0 1410 1db0 19B0 1in0 1ip0 WL0 1lQp0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 q6N0 En0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1op0 11b0 dA10 17b0 1iN0 17b0 1iN0 17b0 1iN0 17b0 1vB0 SL0 1mp0 13z0 1iN0 17b0 1iN0 17b0 1jd0 12n0 1a10 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0|22e5", "Asia/Bishkek|LMT +05 +06 +07|-4W.o -50 -60 -70|012323232323232323232321212121212121212121212121212|-1Pc4W.o eUnW.o 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2e00 1tX0 17b0 1ip0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1cPu 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0|87e4", "Asia/Brunei|LMT +0730 +08|-7D.E -7u -80|012|-1KITD.E gDc9.E|42e4", "Asia/Kolkata|MMT IST +0630|-5l.a -5u -6u|012121|-2zOtl.a 1r2LP.a 1un0 HB0 7zX0|15e6", "Asia/Chita|LMT +08 +09 +10|-7x.Q -80 -90 -a0|012323232323232323232321232323232323232323232323232323232323232312|-21Q7x.Q pAnx.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3re0|33e4", "Asia/Choibalsan|LMT +07 +08 +10 +09|-7C -70 -80 -a0 -90|0123434343434343434343434343434343434343434343424242|-2APHC 2UkoC cKn0 1da0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 3Db0 h1f0 1cJ0 1cP0 1cJ0|38e3", "Asia/Shanghai|CST CDT|-80 -90|01010101010101010101010101010|-23uw0 18n0 OjB0 Rz0 11d0 1wL0 A10 8HX0 1G10 Tz0 1ip0 1jX0 1cN0 11b0 1oN0 aL0 1tU30 Rb0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0|23e6", "Asia/Colombo|MMT +0530 +06 +0630|-5j.w -5u -60 -6u|01231321|-2zOtj.w 1rFbN.w 1zzu 7Apu 23dz0 11zu n3cu|22e5", "Asia/Dhaka|HMT +0630 +0530 +06 +07|-5R.k -6u -5u -60 -70|0121343|-18LFR.k 1unn.k HB0 m6n0 2kxbu 1i00|16e6", "Asia/Damascus|LMT EET EEST|-2p.c -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-21Jep.c Hep.c 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1xRB0 11X0 1oN0 10L0 1pB0 11b0 1oN0 10L0 1mp0 13X0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 Nb0 1AN0 Nb0 bcp0 19X0 1gp0 19X0 3ld0 1xX0 Vd0 1Bz0 Sp0 1vX0 10p0 1dz0 1cN0 1cL0 1db0 1db0 1g10 1an0 1ap0 1db0 1fd0 1db0 1cN0 1db0 1dd0 1db0 1cp0 1dz0 1c10 1dX0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 19z0 1fB0 1qL0 11B0 1on0 Wp0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0|26e5", "Asia/Dili|LMT +08 +09|-8m.k -80 -90|01212|-2le8m.k 1dnXm.k 1nfA0 Xld0|19e4", "Asia/Dubai|LMT +04|-3F.c -40|01|-21JfF.c|39e5", "Asia/Dushanbe|LMT +05 +06 +07|-4z.c -50 -60 -70|012323232323232323232321|-1Pc4z.c eUnz.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2hB0|76e4", "Asia/Famagusta|LMT EET EEST +03|-2f.M -20 -30 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212312121212121212121212121212121212121212121|-1Vc2f.M 2a3cf.M 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 15U0 2Ks0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|", "Asia/Gaza|EET EEST IST IDT|-20 -30 -20 -30|0101010101010101010101010101010123232323232323232323232323232320101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 bXd0 gM0 8Q00 IM0 1wM0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 11z0 1o10 14o0 1lA1 SKX 1xd1 MKX 1AN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 WN0 1qL0 11c0 1oo0 11c0 1rc0 Wo0 1rc0 Wo0 1rc0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1rc0 Wo0 1rc0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1rc0 Wo0 1rc0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1rc0|18e5", "Asia/Hebron|EET EEST IST IDT|-20 -30 -20 -30|010101010101010101010101010101012323232323232323232323232323232010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 bXd0 gM0 8Q00 IM0 1wM0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 12L0 1mN0 14o0 1lc0 Tb0 1xd1 MKX bB0 cn0 1cN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 WN0 1qL0 11c0 1oo0 11c0 1rc0 Wo0 1rc0 Wo0 1rc0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1rc0 Wo0 1rc0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1rc0 Wo0 1rc0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1rc0|25e4", "Asia/Ho_Chi_Minh|LMT PLMT +07 +08 +09|-76.E -76.u -70 -80 -90|0123423232|-2yC76.E bK00.a 1h7b6.u 5lz0 18o0 3Oq0 k5b0 aW00 BAM0|90e5", "Asia/Hong_Kong|LMT HKT HKST HKWT JST|-7A.G -80 -90 -8u -90|0123412121212121212121212121212121212121212121212121212121212121212121|-2CFH0 1taO0 Hc0 xUu 9tBu 11z0 1tDu Rc0 1wo0 11A0 1cM0 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1nX0 U10 1tz0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 Rd0 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 17d0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1cL0 6fd0 14n0|73e5", "Asia/Hovd|LMT +06 +07 +08|-66.A -60 -70 -80|012323232323232323232323232323232323232323232323232|-2APG6.A 2Uko6.A cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0|81e3", "Asia/Irkutsk|IMT +07 +08 +09|-6V.5 -70 -80 -90|01232323232323232323232123232323232323232323232323232323232323232|-21zGV.5 pjXV.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4", "Europe/Istanbul|IMT EET EEST +03 +04|-1U.U -20 -30 -30 -40|0121212121212121212121212121212121212121212121234312121212121212121212121212121212121212121212121212121212121212123|-2ogNU.U dzzU.U 11b0 8tB0 1on0 1410 1db0 19B0 1in0 3Rd0 Un0 1oN0 11b0 zSN0 CL0 mp0 1Vz0 1gN0 8yn0 1yp0 ML0 1kp0 17b0 1ip0 17b0 1fB0 19X0 1ip0 19X0 1ip0 17b0 qdB0 38L0 1jd0 Tz0 l6O0 11A0 WN0 1qL0 TB0 1tX0 U10 1tz0 11B0 1in0 17d0 z90 cne0 pb0 2Cp0 1800 14o0 1dc0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1a00 1fA0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WO0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 Xc0 1qo0 WM0 1qM0 11A0 1o00 1200 1nA0 11A0 1tA0 U00 15w0|13e6", "Asia/Jakarta|BMT +0720 +0730 +09 +08 WIB|-77.c -7k -7u -90 -80 -70|01232425|-1Q0Tk luM0 mPzO 8vWu 6kpu 4PXu xhcu|31e6", "Asia/Jayapura|LMT +09 +0930 WIT|-9m.M -90 -9u -90|0123|-1uu9m.M sMMm.M L4nu|26e4", "Asia/Jerusalem|JMT IST IDT IDDT|-2k.E -20 -30 -40|012121212121321212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-26Bek.E SyMk.E 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 3LB0 Em0 or0 1cn0 1dB0 16n0 10O0 1ja0 1tC0 14o0 1cM0 1a00 11A0 1Na0 An0 1MP0 AJ0 1Kp0 LC0 1oo0 Wl0 EQN0 Db0 1fB0 Rb0 bXd0 gM0 8Q00 IM0 1wM0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 1hB0 1dX0 1ep0 1aL0 1eN0 17X0 1nf0 11z0 1tB0 19W0 1e10 17b0 1ep0 1gL0 18N0 1fz0 1eN0 17b0 1gq0 1gn0 19d0 1dz0 1c10 17X0 1hB0 1gn0 19d0 1dz0 1c10 17X0 1kp0 1dz0 1c10 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0|81e4", "Asia/Kabul|+04 +0430|-40 -4u|01|-10Qs0|46e5", "Asia/Kamchatka|LMT +11 +12 +13|-ay.A -b0 -c0 -d0|012323232323232323232321232323232323232323232323232323232323212|-1SLKy.A ivXy.A 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|18e4", "Asia/Karachi|LMT +0530 +0630 +05 PKT PKST|-4s.c -5u -6u -50 -50 -60|012134545454|-2xoss.c 1qOKW.c 7zX0 eup0 LqMu 1fy00 1cL0 dK10 11b0 1610 1jX0|24e6", "Asia/Urumqi|LMT +06|-5O.k -60|01|-1GgtO.k|32e5", "Asia/Kathmandu|LMT +0530 +0545|-5F.g -5u -5J|012|-21JhF.g 2EGMb.g|12e5", "Asia/Khandyga|LMT +08 +09 +10 +11|-92.d -80 -90 -a0 -b0|0123232323232323232323212323232323232323232323232343434343434343432|-21Q92.d pAp2.d 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 qK0 yN0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|66e2", "Asia/Krasnoyarsk|LMT +06 +07 +08|-6b.q -60 -70 -80|01232323232323232323232123232323232323232323232323232323232323232|-21Hib.q prAb.q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|10e5", "Asia/Kuala_Lumpur|SMT +07 +0720 +0730 +09 +08|-6T.p -70 -7k -7u -90 -80|0123435|-2Bg6T.p 17anT.p l5XE 17bO 8Fyu 1so1u|71e5", "Asia/Kuching|LMT +0730 +08 +0820 +09|-7l.k -7u -80 -8k -90|0123232323232323242|-1KITl.k gDbP.k 6ynu AnE 1O0k AnE 1NAk AnE 1NAk AnE 1NAk AnE 1O0k AnE 1NAk AnE pAk 8Fz0|13e4", "Asia/Macau|LMT CST +09 +10 CDT|-7y.a -80 -90 -a0 -90|012323214141414141414141414141414141414141414141414141414141414141414141|-2CFHy.a 1uqKy.a PX0 1kn0 15B0 11b0 4Qq0 1oM0 11c0 1ko0 1u00 11A0 1cM0 11c0 1o00 11A0 1o00 11A0 1oo0 1400 1o00 11A0 1o00 U00 1tA0 U00 1wo0 Rc0 1wru U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 Rd0 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 17d0 1cK0 1cO0 1cK0 1cO0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1cL0 6fd0 14n0|57e4", "Asia/Magadan|LMT +10 +11 +12|-a3.c -a0 -b0 -c0|012323232323232323232321232323232323232323232323232323232323232312|-1Pca3.c eUo3.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Cq0|95e3", "Asia/Makassar|LMT MMT +08 +09 WITA|-7V.A -7V.A -80 -90 -80|01234|-21JjV.A vfc0 myLV.A 8ML0|15e5", "Asia/Manila|PST PDT JST|-80 -90 -90|010201010|-1kJI0 AL0 cK10 65X0 mXB0 vX0 VK10 1db0|24e6", "Asia/Nicosia|LMT EET EEST|-2d.s -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Vc2d.s 2a3cd.s 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|32e4", "Asia/Novokuznetsk|LMT +06 +07 +08|-5M.M -60 -70 -80|012323232323232323232321232323232323232323232323232323232323212|-1PctM.M eULM.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|55e4", "Asia/Novosibirsk|LMT +06 +07 +08|-5v.E -60 -70 -80|0123232323232323232323212323212121212121212121212121212121212121212|-21Qnv.E pAFv.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 ml0 Os0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 4eN0|15e5", "Asia/Omsk|LMT +05 +06 +07|-4R.u -50 -60 -70|01232323232323232323232123232323232323232323232323232323232323232|-224sR.u pMLR.u 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|12e5", "Asia/Oral|LMT +03 +05 +06 +04|-3p.o -30 -50 -60 -40|01232323232323232424242424242424242424242424242|-1Pc3p.o eUop.o 23CK0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 1cM0 IM0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|27e4", "Asia/Pontianak|LMT PMT +0730 +09 +08 WITA WIB|-7h.k -7h.k -7u -90 -80 -80 -70|012324256|-2ua7h.k XE00 munL.k 8Rau 6kpu 4PXu xhcu Wqnu|23e4", "Asia/Pyongyang|LMT KST JST KST|-8n -8u -90 -90|012313|-2um8n 97XR 1lTzu 2Onc0 6BA0|29e5", "Asia/Qostanay|LMT +04 +05 +06|-4e.s -40 -50 -60|012323232323232323232123232323232323232323232323|-1Pc4e.s eUoe.s 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|", "Asia/Qyzylorda|LMT +04 +05 +06|-4l.Q -40 -50 -60|01232323232323232323232323232323232323232323232|-1Pc4l.Q eUol.Q 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 3ao0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 zQl0|73e4", "Asia/Rangoon|RMT +0630 +09|-6o.L -6u -90|0121|-21Jio.L SmnS.L 7j9u|48e5", "Asia/Sakhalin|LMT +09 +11 +12 +10|-9u.M -90 -b0 -c0 -a0|01232323232323232323232423232323232424242424242424242424242424242|-2AGVu.M 1BoMu.M 1qFa0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 2pB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|58e4", "Asia/Samarkand|LMT +04 +05 +06|-4r.R -40 -50 -60|01232323232323232323232|-1Pc4r.R eUor.R 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0|36e4", "Asia/Seoul|LMT KST JST KST KDT KDT|-8r.Q -8u -90 -90 -a0 -9u|012343434343151515151515134343|-2um8r.Q 97XV.Q 1m1zu 6CM0 Fz0 1kN0 14n0 1kN0 14L0 1zd0 On0 69B0 2I0u OL0 1FB0 Rb0 1qN0 TX0 1tB0 TX0 1tB0 TX0 1tB0 TX0 2ap0 12FBu 11A0 1o00 11A0|23e6", "Asia/Srednekolymsk|LMT +10 +11 +12|-ae.Q -a0 -b0 -c0|01232323232323232323232123232323232323232323232323232323232323232|-1Pcae.Q eUoe.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|35e2", "Asia/Taipei|CST JST CDT|-80 -90 -90|01020202020202020202020202020202020202020|-1iw80 joM0 1yo0 Tz0 1ip0 1jX0 1cN0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 10N0 1BX0 10p0 1pz0 10p0 1pz0 10p0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1BB0 ML0 1Bd0 ML0 uq10 1db0 1cN0 1db0 97B0 AL0|74e5", "Asia/Tashkent|LMT +05 +06 +07|-4B.b -50 -60 -70|012323232323232323232321|-1Pc4B.b eUnB.b 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0|23e5", "Asia/Tbilisi|TBMT +03 +04 +05|-2X.b -30 -40 -50|0123232323232323232323212121232323232323232323212|-1Pc2X.b 1jUnX.b WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cK0 1cL0 1cN0 1cL0 1cN0 2pz0 1cL0 1fB0 3Nz0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 An0 Os0 WM0|11e5", "Asia/Tehran|LMT TMT +0330 +04 +05 +0430|-3p.I -3p.I -3u -40 -50 -4u|01234325252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2btDp.I 1d3c0 1huLT.I TXu 1pz0 sN0 vAu 1cL0 1dB0 1en0 pNB0 UL0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 64p0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0|14e6", "Asia/Thimphu|LMT +0530 +06|-5W.A -5u -60|012|-Su5W.A 1BGMs.A|79e3", "Asia/Tokyo|JST JDT|-90 -a0|010101010|-QJJ0 Rc0 1lc0 14o0 1zc0 Oo0 1zc0 Oo0|38e6", "Asia/Tomsk|LMT +06 +07 +08|-5D.P -60 -70 -80|0123232323232323232323212323232323232323232323212121212121212121212|-21NhD.P pxzD.P 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 co0 1bB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Qp0|10e5", "Asia/Ulaanbaatar|LMT +07 +08 +09|-77.w -70 -80 -90|012323232323232323232323232323232323232323232323232|-2APH7.w 2Uko7.w cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0|12e5", "Asia/Ust-Nera|LMT +08 +09 +12 +11 +10|-9w.S -80 -90 -c0 -b0 -a0|012343434343434343434345434343434343434343434343434343434343434345|-21Q9w.S pApw.S 23CL0 1d90 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|65e2", "Asia/Vladivostok|LMT +09 +10 +11|-8L.v -90 -a0 -b0|01232323232323232323232123232323232323232323232323232323232323232|-1SJIL.v itXL.v 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4", "Asia/Yakutsk|LMT +08 +09 +10|-8C.W -80 -90 -a0|01232323232323232323232123232323232323232323232323232323232323232|-21Q8C.W pAoC.W 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|28e4", "Asia/Yekaterinburg|LMT PMT +04 +05 +06|-42.x -3J.5 -40 -50 -60|012343434343434343434343234343434343434343434343434343434343434343|-2ag42.x 7mQh.s qBvJ.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|14e5", "Asia/Yerevan|LMT +03 +04 +05|-2W -30 -40 -50|0123232323232323232323212121212323232323232323232323232323232|-1Pc2W 1jUnW WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 4RX0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|13e5", "Atlantic/Azores|HMT -02 -01 +00 WET|1S.w 20 10 0 0|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121232323232323232323232323232323234323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2ldW0 aPX0 Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|25e4", "Atlantic/Bermuda|LMT AST ADT|4j.i 40 30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1BnRE.G 1LTbE.G 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e3", "Atlantic/Canary|LMT -01 WET WEST|11.A 10 0 -10|01232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UtaW.o XPAW.o 1lAK0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4", "Atlantic/Cape_Verde|LMT -02 -01|1y.4 20 10|01212|-2ldW0 1eEo0 7zX0 1djf0|50e4", "Atlantic/Faroe|LMT WET WEST|r.4 0 -10|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2uSnw.U 2Wgow.U 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|49e3", "Atlantic/Madeira|FMT -01 +00 +01 WET WEST|17.A 10 0 -10 0 -10|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2ldX0 aPX0 Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e4", "Atlantic/Reykjavik|LMT -01 +00 GMT|1s 10 0 0|012121212121212121212121212121212121212121212121212121212121212121213|-2uWmw mfaw 1Bd0 ML0 1LB0 Cn0 1LB0 3fX0 C10 HrX0 1cO0 LB0 1EL0 LA0 1C00 Oo0 1wo0 Rc0 1wo0 Rc0 1wo0 Rc0 1zc0 Oo0 1zc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0|12e4", "Atlantic/South_Georgia|-02|20|0||30", "Atlantic/Stanley|SMT -04 -03 -02|3P.o 40 30 20|012121212121212323212121212121212121212121212121212121212121212121212|-2kJw8.A 12bA8.A 19X0 1fB0 19X0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 Cn0 1Cc10 WL0 1qL0 U10 1tz0 2mN0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 U10 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qN0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 U10 1tz0 U10 1tz0 U10|21e2", "Australia/Sydney|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|40e5", "Australia/Adelaide|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 WM0 1qM0 Rc0 1zc0 U00 1tA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|11e5", "Australia/Brisbane|AEST AEDT|-a0 -b0|01010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0|20e5", "Australia/Broken_Hill|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|18e3", "Australia/Currie|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|746", "Australia/Darwin|ACST ACDT|-9u -au|010101010|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0|12e4", "Australia/Eucla|+0845 +0945|-8J -9J|0101010101010101010|-293kI xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|368", "Australia/Hobart|AEST AEDT|-a0 -b0|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 VfB0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|21e4", "Australia/Lord_Howe|AEST +1030 +1130 +11|-a0 -au -bu -b0|0121212121313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313|raC0 1zdu Rb0 1zd0 On0 1zd0 On0 1zd0 On0 1zd0 TXu 1qMu WLu 1tAu WLu 1tAu TXu 1tAu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu 11zu 1o0u 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 11Au 1nXu 1qMu 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu 11zu 1o0u WLu 1qMu 14nu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1fzu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu|347", "Australia/Lindeman|AEST AEDT|-a0 -b0|010101010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0|10", "Australia/Melbourne|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1qM0 11A0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|39e5", "Australia/Perth|AWST AWDT|-80 -90|0101010101010101010|-293jX xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|18e5", "CET|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|", "Pacific/Easter|EMT -07 -06 -05|7h.s 70 60 50|012121212121212121212121212123232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1uSgG.w 1s4IG.w WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 2pA0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1zb0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0|30e2", "CST6CDT|CST CDT CWT CPT|60 50 50 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "EET|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|", "Europe/Dublin|DMT IST GMT BST IST|p.l -y.D 0 -10 -10|01232323232324242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242|-2ax9y.D Rc0 1fzy.D 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 g600 14o0 1wo0 17c0 1io0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5", "EST|EST|50|0||", "EST5EDT|EST EDT EWT EPT|50 40 40 40|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 SgN0 8x40 iv0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "Etc/GMT-0|GMT|0|0||", "Etc/GMT-1|+01|-10|0||", "Pacific/Port_Moresby|+10|-a0|0||25e4", "Etc/GMT-11|+11|-b0|0||", "Pacific/Tarawa|+12|-c0|0||29e3", "Etc/GMT-13|+13|-d0|0||", "Etc/GMT-14|+14|-e0|0||", "Etc/GMT-2|+02|-20|0||", "Etc/GMT-3|+03|-30|0||", "Etc/GMT-4|+04|-40|0||", "Etc/GMT-5|+05|-50|0||", "Etc/GMT-6|+06|-60|0||", "Indian/Christmas|+07|-70|0||21e2", "Etc/GMT-8|+08|-80|0||", "Pacific/Palau|+09|-90|0||21e3", "Etc/GMT+1|-01|10|0||", "Etc/GMT+10|-10|a0|0||", "Etc/GMT+11|-11|b0|0||", "Etc/GMT+12|-12|c0|0||", "Etc/GMT+3|-03|30|0||", "Etc/GMT+4|-04|40|0||", "Etc/GMT+5|-05|50|0||", "Etc/GMT+6|-06|60|0||", "Etc/GMT+7|-07|70|0||", "Etc/GMT+8|-08|80|0||", "Etc/GMT+9|-09|90|0||", "Etc/UTC|UTC|0|0||", "Europe/Amsterdam|AMT NST +0120 +0020 CEST CET|-j.w -1j.w -1k -k -20 -10|010101010101010101010101010101010101010101012323234545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545|-2aFcj.w 11b0 1iP0 11A0 1io0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1co0 1io0 1yo0 Pc0 1a00 1fA0 1Bc0 Mo0 1tc0 Uo0 1tA0 U00 1uo0 W00 1s00 VA0 1so0 Vc0 1sM0 UM0 1wo0 Rc0 1u00 Wo0 1rA0 W00 1s00 VA0 1sM0 UM0 1w00 fV0 BCX.w 1tA0 U00 1u00 Wo0 1sm0 601k WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|16e5", "Europe/Andorra|WET CET CEST|0 -10 -20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-UBA0 1xIN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|79e3", "Europe/Astrakhan|LMT +03 +04 +05|-3c.c -30 -40 -50|012323232323232323212121212121212121212121212121212121212121212|-1Pcrc.c eUMc.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|10e5", "Europe/Athens|AMT EET EEST CEST CET|-1y.Q -20 -30 -20 -10|012123434121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a61x.Q CNbx.Q mn0 kU10 9b0 3Es0 Xa0 1fb0 1dd0 k3X0 Nz0 SCp0 1vc0 SO0 1cM0 1a00 1ao0 1fc0 1a10 1fG0 1cg0 1dX0 1bX0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|35e5", "Europe/London|GMT BST BDST|0 -10 -20|0101010101010101010101010101010101010101010101010121212121210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|10e6", "Europe/Belgrade|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19RC0 3IP0 WM0 1fA0 1cM0 1cM0 1rc0 Qo0 1vmo0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5", "Europe/Berlin|CET CEST CEMT|-10 -20 -30|01010101010101210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 kL0 Nc0 m10 WM0 1ao0 1cp0 dX0 jz0 Dd0 1io0 17c0 1fA0 1a00 1ehA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e5", "Europe/Prague|CET CEST GMT|-10 -20 0|01010101010101010201010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 1cM0 1qM0 11c0 mp0 xA0 mn0 17c0 1io0 17c0 1fc0 1ao0 1bNc0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|13e5", "Europe/Brussels|WET CET CEST WEST|0 -10 -20 -10|0121212103030303030303030303030303030303030303030303212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ehc0 3zX0 11c0 1iO0 11A0 1o00 11A0 my0 Ic0 1qM0 Rc0 1EM0 UM0 1u00 10o0 1io0 1io0 17c0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a30 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 y00 5Wn0 WM0 1fA0 1cM0 16M0 1iM0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|21e5", "Europe/Bucharest|BMT EET EEST|-1I.o -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1xApI.o 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Axc0 On0 1fA0 1a10 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|19e5", "Europe/Budapest|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1ip0 17b0 1op0 1tb0 Q2m0 3Ne0 WM0 1fA0 1cM0 1cM0 1oJ0 1dc0 1030 1fA0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1iM0 1fA0 8Ha0 Rb0 1wN0 Rb0 1BB0 Lz0 1C20 LB0 SNX0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e5", "Europe/Zurich|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19Lc0 11A0 1o00 11A0 1xG10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|38e4", "Europe/Chisinau|CMT BMT EET EEST CEST CET MSK MSD|-1T -1I.o -20 -30 -20 -10 -30 -40|012323232323232323234545467676767676767676767323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-26jdT wGMa.A 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 27A0 2en0 39g0 WM0 1fA0 1cM0 V90 1t7z0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 gL0 WO0 1cM0 1cM0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11D0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|67e4", "Europe/Copenhagen|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 Tz0 VuO0 60q0 WM0 1fA0 1cM0 1cM0 1cM0 S00 1HA0 Nc0 1C00 Dc0 1Nc0 Ao0 1h5A0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5", "Europe/Gibraltar|GMT BST BDST CET CEST|0 -10 -20 -10 -20|010101010101010101010101010101010101010101010101012121212121010121010101010101010101034343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 10Jz0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|30e3", "Europe/Helsinki|HMT EET EEST|-1D.N -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1WuND.N OULD.N 1dA0 1xGq0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5", "Europe/Kaliningrad|CET CEST EET EEST MSK MSD +03|-10 -20 -20 -30 -30 -40 -30|01010101010101232454545454545454543232323232323232323232323232323232323232323262|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 390 7A0 1en0 12N0 1pbb0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|44e4", "Europe/Kiev|KMT EET MSK CEST CET MSD EEST|-22.4 -20 -30 -20 -10 -40 -30|0123434252525252525252525256161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc22.4 eUo2.4 rnz0 2Hg0 WM0 1fA0 da0 1v4m0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 Db0 3220 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|34e5", "Europe/Kirov|LMT +03 +04 +05|-3i.M -30 -40 -50|01232323232323232321212121212121212121212121212121212121212121|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|48e4", "Europe/Lisbon|LMT WET WEST WEMT CET CEST|A.J 0 -10 -20 -10 -20|012121212121212121212121212121212121212121212321232123212321212121212121212121212121212121212121214121212121212121212121212121212124545454212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2le00 aPX0 Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 pvy0 1cM0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e5", "Europe/Luxembourg|LMT CET CEST WET WEST WEST WET|-o.A -10 -20 0 -10 -20 -10|0121212134343434343434343434343434343434343434343434565651212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2DG0o.A t6mo.A TB0 1nX0 Up0 1o20 11A0 rW0 CM0 1qP0 R90 1EO0 UK0 1u20 10m0 1ip0 1in0 17e0 19W0 1fB0 1db0 1cp0 1in0 17d0 1fz0 1a10 1in0 1a10 1in0 17f0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 vA0 60L0 WM0 1fA0 1cM0 17c0 1io0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4", "Europe/Madrid|WET WEST WEMT CET CEST|0 -10 -20 -10 -20|010101010101010101210343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-25Td0 19B0 1cL0 1dd0 b1z0 18p0 3HX0 17d0 1fz0 1a10 1io0 1a00 1in0 17d0 iIn0 Hd0 1cL0 bb0 1200 2s20 14n0 5aL0 Mp0 1vz0 17d0 1in0 17d0 1in0 17d0 1in0 17d0 6hX0 11B0 XHX0 1a10 1fz0 1a10 19X0 1cN0 1fz0 1a10 1fC0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|62e5", "Europe/Malta|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2arB0 Lz0 1cN0 1db0 1410 1on0 Wp0 1qL0 17d0 1cL0 M3B0 5M20 WM0 1fA0 1co0 17c0 1iM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 LA0 1C00 LA0 1EM0 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1co0 1cM0 1lA0 Xc0 1qq0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1iN0 19z0 1fB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|42e4", "Europe/Minsk|MMT EET MSK CEST CET MSD EEST +03|-1O -20 -30 -20 -10 -40 -30 -30|01234343252525252525252525261616161616161616161616161616161616161617|-1Pc1O eUnO qNX0 3gQ0 WM0 1fA0 1cM0 Al0 1tsn0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 3Fc0 1cN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0|19e5", "Europe/Monaco|PMT WET WEST WEMT CET CEST|-9.l 0 -10 -20 -10 -20|01212121212121212121212121212121212121212121212121232323232345454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 2RV0 11z0 11B0 1ze0 WM0 1fA0 1cM0 1fa0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|38e3", "Europe/Moscow|MMT MMT MST MDST MSD MSK +05 EET EEST MSK|-2u.h -2v.j -3v.j -4v.j -40 -30 -50 -20 -30 -40|012132345464575454545454545454545458754545454545454545454545454545454545454595|-2ag2u.h 2pyW.W 1bA0 11X0 GN0 1Hb0 c4v.j ik0 3DA0 dz0 15A0 c10 2q10 iM10 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|16e6", "Europe/Paris|PMT WET WEST CEST CET WEMT|-9.l 0 -10 -20 -10 -20|0121212121212121212121212121212121212121212121212123434352543434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434|-2nco8.l cNb8.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 Ik0 5M30 WM0 1fA0 1cM0 Vx0 hB0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e6", "Europe/Riga|RMT LST EET MSK CEST CET MSD EEST|-1A.y -2A.y -20 -30 -20 -10 -40 -30|010102345454536363636363636363727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272|-25TzA.y 11A0 1iM0 ko0 gWm0 yDXA.y 2bX0 3fE0 WM0 1fA0 1cM0 1cM0 4m0 1sLy0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 1o00 11A0 1o00 11A0 1qM0 3oo0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|64e4", "Europe/Rome|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2arB0 Lz0 1cN0 1db0 1410 1on0 Wp0 1qL0 17d0 1cL0 M3B0 5M20 WM0 1fA0 1cM0 16M0 1iM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 LA0 1C00 LA0 1EM0 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1C00 LA0 1zc0 Oo0 1C00 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1zc0 Oo0 1fC0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|39e5", "Europe/Samara|LMT +03 +04 +05|-3k.k -30 -40 -50|0123232323232323232121232323232323232323232323232323232323212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2y10 14m0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|12e5", "Europe/Saratov|LMT +03 +04 +05|-34.i -30 -40 -50|012323232323232321212121212121212121212121212121212121212121212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1cM0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 5810|", "Europe/Simferopol|SMT EET MSK CEST CET MSD EEST MSK|-2g -20 -30 -20 -10 -40 -30 -40|012343432525252525252525252161616525252616161616161616161616161616161616172|-1Pc2g eUog rEn0 2qs0 WM0 1fA0 1cM0 3V0 1u0L0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 4eL0 1cL0 1cN0 1cL0 1cN0 dX0 WL0 1cN0 1cL0 1fB0 1o30 11B0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11z0 1nW0|33e4", "Europe/Sofia|EET CET CEST EEST|-20 -10 -20 -30|01212103030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030|-168L0 WM0 1fA0 1cM0 1cM0 1cN0 1mKH0 1dd0 1fb0 1ap0 1fb0 1a20 1fy0 1a30 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5", "Europe/Stockholm|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 TB0 2yDe0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|15e5", "Europe/Tallinn|TMT CET CEST EET MSK MSD EEST|-1D -10 -20 -20 -30 -40 -30|012103421212454545454545454546363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363|-26oND teD 11A0 1Ta0 4rXl KSLD 2FX0 2Jg0 WM0 1fA0 1cM0 18J0 1sTX0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o10 11A0 1qM0 5QM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e4", "Europe/Tirane|LMT CET CEST|-1j.k -10 -20|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glBj.k 14pcj.k 5LC0 WM0 4M0 1fCK0 10n0 1op0 11z0 1pd0 11z0 1qN0 WL0 1qp0 Xb0 1qp0 Xb0 1qp0 11z0 1lB0 11z0 1qN0 11z0 1iN0 16n0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|42e4", "Europe/Ulyanovsk|LMT +03 +04 +05 +02|-3d.A -30 -40 -50 -20|01232323232323232321214121212121212121212121212121212121212121212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|13e5", "Europe/Uzhgorod|CET CEST MSK MSD EET EEST|-10 -20 -30 -40 -20 -30|010101023232323232323232320454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-1cqL0 6i00 WM0 1fA0 1cM0 1ml0 1Cp0 1r3W0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 1Nf0 2pw0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e4", "Europe/Vienna|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 3KM0 14o0 LA00 6i00 WM0 1fA0 1cM0 1cM0 1cM0 400 2qM0 1ao0 1co0 1cM0 1io0 17c0 1gHa0 19X0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|18e5", "Europe/Vilnius|WMT KMT CET EET MSK CEST MSD EEST|-1o -1z.A -10 -20 -30 -20 -40 -30|012324525254646464646464646473737373737373737352537373737373737373737373737373737373737373737373737373737373737373737373|-293do 6ILM.o 1Ooz.A zz0 Mfd0 29W0 3is0 WM0 1fA0 1cM0 LV0 1tgL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11B0 1o00 11A0 1qM0 8io0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4", "Europe/Volgograd|LMT +03 +04 +05|-2V.E -30 -40 -50|012323232323232321212121212121212121212121212121212121212121212|-21IqV.E psLV.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1cM0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 9Jd0|10e5", "Europe/Warsaw|WMT CET CEST EET EEST|-1o -10 -20 -20 -30|012121234312121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ctdo 1LXo 11d0 1iO0 11A0 1o00 11A0 1on0 11A0 6zy0 HWP0 5IM0 WM0 1fA0 1cM0 1dz0 1mL0 1en0 15B0 1aq0 1nA0 11A0 1io0 17c0 1fA0 1a00 iDX0 LA0 1cM0 1cM0 1C00 Oo0 1cM0 1cM0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1C00 LA0 uso0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e5", "Europe/Zaporozhye|+0220 EET MSK CEST CET MSD EEST|-2k -20 -30 -20 -10 -40 -30|01234342525252525252525252526161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc2k eUok rdb0 2RE0 WM0 1fA0 8m0 1v9a0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cK0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|77e4", "HST|HST|a0|0||", "Indian/Chagos|LMT +05 +06|-4N.E -50 -60|012|-2xosN.E 3AGLN.E|30e2", "Indian/Cocos|+0630|-6u|0||596", "Indian/Kerguelen|-00 +05|0 -50|01|-MG00|130", "Indian/Mahe|LMT +04|-3F.M -40|01|-2yO3F.M|79e3", "Indian/Maldives|MMT +05|-4S -50|01|-olgS|35e4", "Indian/Mauritius|LMT +04 +05|-3O -40 -50|012121|-2xorO 34unO 14L0 12kr0 11z0|15e4", "Indian/Reunion|LMT +04|-3F.Q -40|01|-2mDDF.Q|84e4", "Pacific/Kwajalein|+11 +10 +09 -12 +12|-b0 -a0 -90 c0 -c0|012034|-1kln0 akp0 6Up0 12ry0 Wan0|14e3", "MET|MET MEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|", "MST|MST|70|0||", "MST7MDT|MST MDT MWT MPT|70 60 60 60|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "Pacific/Chatham|+1215 +1245 +1345|-cf -cJ -dJ|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-WqAf 1adef IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|600", "Pacific/Apia|LMT -1130 -11 -10 +14 +13|bq.U bu b0 a0 -e0 -d0|01232345454545454545454545454545454545454545454545454545454|-2nDMx.4 1yW03.4 2rRbu 1ff0 1a00 CI0 AQ0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|37e3", "Pacific/Bougainville|+10 +09 +11|-a0 -90 -b0|0102|-16Wy0 7CN0 2MQp0|18e4", "Pacific/Chuuk|+10 +09|-a0 -90|01010|-2ewy0 axB0 RVX0 axd0|49e3", "Pacific/Efate|LMT +11 +12|-bd.g -b0 -c0|0121212121212121212121|-2l9nd.g 2Szcd.g 1cL0 1oN0 10L0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 Lz0 1Nd0 An0|66e3", "Pacific/Enderbury|-12 -11 +13|c0 b0 -d0|012|nIc0 B7X0|1", "Pacific/Fakaofo|-11 +13|b0 -d0|01|1Gfn0|483", "Pacific/Fiji|LMT +12 +13|-bT.I -c0 -d0|0121212121212121212121212121212121212121212121212121212121212121|-2bUzT.I 3m8NT.I LA0 1EM0 IM0 nJc0 LA0 1o00 Rc0 1wo0 Ao0 1Nc0 Ao0 1Q00 xz0 1SN0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 s00 20o0 pc0 20o0 s00 20o0 pc0 20o0 pc0 20o0 pc0 20o0 pc0 20o0 s00 1VA0 s00 20o0 pc0 20o0 pc0 20o0 pc0 20o0 pc0 20o0 s00 20o0 pc0 20o0 pc0 20o0 pc0 20o0 pc0 20o0 s00 1VA0 s00|88e4", "Pacific/Galapagos|LMT -05 -06|5W.o 50 60|01212|-1yVS1.A 2dTz1.A gNd0 rz0|25e3", "Pacific/Gambier|LMT -09|8X.M 90|01|-2jof0.c|125", "Pacific/Guadalcanal|LMT +11|-aD.M -b0|01|-2joyD.M|11e4", "Pacific/Guam|GST +09 GDT ChST|-a0 -90 -b0 -a0|01020202020202020203|-18jK0 6pB0 AhB0 3QL0 g2p0 3p91 WOX rX0 1zd0 Rb0 1wp0 Rb0 5xd0 rX0 5sN0 zb1 1C0X On0 ULb0|17e4", "Pacific/Honolulu|HST HDT HWT HPT HST|au 9u 9u 9u a0|0102304|-1thLu 8x0 lef0 8wWu iAu 46p0|37e4", "Pacific/Kiritimati|-1040 -10 +14|aE a0 -e0|012|nIaE B7Xk|51e2", "Pacific/Kosrae|+11 +09 +10 +12|-b0 -90 -a0 -c0|01021030|-2ewz0 axC0 HBy0 akp0 axd0 WOK0 1bdz0|66e2", "Pacific/Majuro|+11 +09 +10 +12|-b0 -90 -a0 -c0|0102103|-2ewz0 axC0 HBy0 akp0 6RB0 12um0|28e3", "Pacific/Marquesas|LMT -0930|9i 9u|01|-2joeG|86e2", "Pacific/Pago_Pago|LMT SST|bm.M b0|01|-2nDMB.c|37e2", "Pacific/Nauru|LMT +1130 +09 +12|-b7.E -bu -90 -c0|01213|-1Xdn7.E QCnB.E 7mqu 1lnbu|10e3", "Pacific/Niue|-1120 -1130 -11|bk bu b0|012|-KfME 17y0a|12e2", "Pacific/Norfolk|+1112 +1130 +1230 +11 +12|-bc -bu -cu -b0 -c0|012134343434343434343434343434343434343434|-Kgbc W01G Oo0 1COo0 9Jcu 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|25e4", "Pacific/Noumea|LMT +11 +12|-b5.M -b0 -c0|01212121|-2l9n5.M 2EqM5.M xX0 1PB0 yn0 HeP0 Ao0|98e3", "Pacific/Pitcairn|-0830 -08|8u 80|01|18Vku|56", "Pacific/Pohnpei|+11 +09 +10|-b0 -90 -a0|010210|-2ewz0 axC0 HBy0 akp0 axd0|34e3", "Pacific/Rarotonga|-1030 -0930 -10|au 9u a0|012121212121212121212121212|lyWu IL0 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu|13e3", "Pacific/Tahiti|LMT -10|9W.g a0|01|-2joe1.I|18e4", "Pacific/Tongatapu|+1220 +13 +14|-ck -d0 -e0|0121212121|-1aB0k 2n5dk 15A0 1wo0 xz0 1Q10 xz0 zWN0 s00|75e3", "PST8PDT|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|", "WET|WET WEST|0 -10|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|"],
        links: ["Africa/Abidjan|Africa/Bamako", "Africa/Abidjan|Africa/Banjul", "Africa/Abidjan|Africa/Conakry", "Africa/Abidjan|Africa/Dakar", "Africa/Abidjan|Africa/Freetown", "Africa/Abidjan|Africa/Lome", "Africa/Abidjan|Africa/Nouakchott", "Africa/Abidjan|Africa/Ouagadougou", "Africa/Abidjan|Africa/Timbuktu", "Africa/Abidjan|Atlantic/St_Helena", "Africa/Cairo|Egypt", "Africa/Johannesburg|Africa/Maseru", "Africa/Johannesburg|Africa/Mbabane", "Africa/Lagos|Africa/Bangui", "Africa/Lagos|Africa/Brazzaville", "Africa/Lagos|Africa/Douala", "Africa/Lagos|Africa/Kinshasa", "Africa/Lagos|Africa/Libreville", "Africa/Lagos|Africa/Luanda", "Africa/Lagos|Africa/Malabo", "Africa/Lagos|Africa/Niamey", "Africa/Lagos|Africa/Porto-Novo", "Africa/Maputo|Africa/Blantyre", "Africa/Maputo|Africa/Bujumbura", "Africa/Maputo|Africa/Gaborone", "Africa/Maputo|Africa/Harare", "Africa/Maputo|Africa/Kigali", "Africa/Maputo|Africa/Lubumbashi", "Africa/Maputo|Africa/Lusaka", "Africa/Nairobi|Africa/Addis_Ababa", "Africa/Nairobi|Africa/Asmara", "Africa/Nairobi|Africa/Asmera", "Africa/Nairobi|Africa/Dar_es_Salaam", "Africa/Nairobi|Africa/Djibouti", "Africa/Nairobi|Africa/Kampala", "Africa/Nairobi|Africa/Mogadishu", "Africa/Nairobi|Indian/Antananarivo", "Africa/Nairobi|Indian/Comoro", "Africa/Nairobi|Indian/Mayotte", "Africa/Tripoli|Libya", "America/Adak|America/Atka", "America/Adak|US/Aleutian", "America/Anchorage|US/Alaska", "America/Argentina/Buenos_Aires|America/Buenos_Aires", "America/Argentina/Catamarca|America/Argentina/ComodRivadavia", "America/Argentina/Catamarca|America/Catamarca", "America/Argentina/Cordoba|America/Cordoba", "America/Argentina/Cordoba|America/Rosario", "America/Argentina/Jujuy|America/Jujuy", "America/Argentina/Mendoza|America/Mendoza", "America/Atikokan|America/Coral_Harbour", "America/Chicago|US/Central", "America/Curacao|America/Aruba", "America/Curacao|America/Kralendijk", "America/Curacao|America/Lower_Princes", "America/Denver|America/Shiprock", "America/Denver|Navajo", "America/Denver|US/Mountain", "America/Detroit|US/Michigan", "America/Edmonton|Canada/Mountain", "America/Fort_Wayne|America/Indiana/Indianapolis", "America/Fort_Wayne|America/Indianapolis", "America/Fort_Wayne|US/East-Indiana", "America/Godthab|America/Nuuk", "America/Halifax|Canada/Atlantic", "America/Havana|Cuba", "America/Indiana/Knox|America/Knox_IN", "America/Indiana/Knox|US/Indiana-Starke", "America/Jamaica|Jamaica", "America/Kentucky/Louisville|America/Louisville", "America/Los_Angeles|US/Pacific", "America/Los_Angeles|US/Pacific-New", "America/Manaus|Brazil/West", "America/Mazatlan|Mexico/BajaSur", "America/Mexico_City|Mexico/General", "America/New_York|US/Eastern", "America/Noronha|Brazil/DeNoronha", "America/Panama|America/Cayman", "America/Phoenix|US/Arizona", "America/Port_of_Spain|America/Anguilla", "America/Port_of_Spain|America/Antigua", "America/Port_of_Spain|America/Dominica", "America/Port_of_Spain|America/Grenada", "America/Port_of_Spain|America/Guadeloupe", "America/Port_of_Spain|America/Marigot", "America/Port_of_Spain|America/Montserrat", "America/Port_of_Spain|America/St_Barthelemy", "America/Port_of_Spain|America/St_Kitts", "America/Port_of_Spain|America/St_Lucia", "America/Port_of_Spain|America/St_Thomas", "America/Port_of_Spain|America/St_Vincent", "America/Port_of_Spain|America/Tortola", "America/Port_of_Spain|America/Virgin", "America/Regina|Canada/Saskatchewan", "America/Rio_Branco|America/Porto_Acre", "America/Rio_Branco|Brazil/Acre", "America/Santiago|Chile/Continental", "America/Sao_Paulo|Brazil/East", "America/St_Johns|Canada/Newfoundland", "America/Tijuana|America/Ensenada", "America/Tijuana|America/Santa_Isabel", "America/Tijuana|Mexico/BajaNorte", "America/Toronto|America/Montreal", "America/Toronto|Canada/Eastern", "America/Vancouver|Canada/Pacific", "America/Whitehorse|Canada/Yukon", "America/Winnipeg|Canada/Central", "Asia/Ashgabat|Asia/Ashkhabad", "Asia/Bangkok|Asia/Phnom_Penh", "Asia/Bangkok|Asia/Vientiane", "Asia/Dhaka|Asia/Dacca", "Asia/Dubai|Asia/Muscat", "Asia/Ho_Chi_Minh|Asia/Saigon", "Asia/Hong_Kong|Hongkong", "Asia/Jerusalem|Asia/Tel_Aviv", "Asia/Jerusalem|Israel", "Asia/Kathmandu|Asia/Katmandu", "Asia/Kolkata|Asia/Calcutta", "Asia/Kuala_Lumpur|Asia/Singapore", "Asia/Kuala_Lumpur|Singapore", "Asia/Macau|Asia/Macao", "Asia/Makassar|Asia/Ujung_Pandang", "Asia/Nicosia|Europe/Nicosia", "Asia/Qatar|Asia/Bahrain", "Asia/Rangoon|Asia/Yangon", "Asia/Riyadh|Asia/Aden", "Asia/Riyadh|Asia/Kuwait", "Asia/Seoul|ROK", "Asia/Shanghai|Asia/Chongqing", "Asia/Shanghai|Asia/Chungking", "Asia/Shanghai|Asia/Harbin", "Asia/Shanghai|PRC", "Asia/Taipei|ROC", "Asia/Tehran|Iran", "Asia/Thimphu|Asia/Thimbu", "Asia/Tokyo|Japan", "Asia/Ulaanbaatar|Asia/Ulan_Bator", "Asia/Urumqi|Asia/Kashgar", "Atlantic/Faroe|Atlantic/Faeroe", "Atlantic/Reykjavik|Iceland", "Atlantic/South_Georgia|Etc/GMT+2", "Australia/Adelaide|Australia/South", "Australia/Brisbane|Australia/Queensland", "Australia/Broken_Hill|Australia/Yancowinna", "Australia/Darwin|Australia/North", "Australia/Hobart|Australia/Tasmania", "Australia/Lord_Howe|Australia/LHI", "Australia/Melbourne|Australia/Victoria", "Australia/Perth|Australia/West", "Australia/Sydney|Australia/ACT", "Australia/Sydney|Australia/Canberra", "Australia/Sydney|Australia/NSW", "Etc/GMT-0|Etc/GMT", "Etc/GMT-0|Etc/GMT+0", "Etc/GMT-0|Etc/GMT0", "Etc/GMT-0|Etc/Greenwich", "Etc/GMT-0|GMT", "Etc/GMT-0|GMT+0", "Etc/GMT-0|GMT-0", "Etc/GMT-0|GMT0", "Etc/GMT-0|Greenwich", "Etc/UTC|Etc/UCT", "Etc/UTC|Etc/Universal", "Etc/UTC|Etc/Zulu", "Etc/UTC|UCT", "Etc/UTC|UTC", "Etc/UTC|Universal", "Etc/UTC|Zulu", "Europe/Belgrade|Europe/Ljubljana", "Europe/Belgrade|Europe/Podgorica", "Europe/Belgrade|Europe/Sarajevo", "Europe/Belgrade|Europe/Skopje", "Europe/Belgrade|Europe/Zagreb", "Europe/Chisinau|Europe/Tiraspol", "Europe/Dublin|Eire", "Europe/Helsinki|Europe/Mariehamn", "Europe/Istanbul|Asia/Istanbul", "Europe/Istanbul|Turkey", "Europe/Lisbon|Portugal", "Europe/London|Europe/Belfast", "Europe/London|Europe/Guernsey", "Europe/London|Europe/Isle_of_Man", "Europe/London|Europe/Jersey", "Europe/London|GB", "Europe/London|GB-Eire", "Europe/Moscow|W-SU", "Europe/Oslo|Arctic/Longyearbyen", "Europe/Oslo|Atlantic/Jan_Mayen", "Europe/Prague|Europe/Bratislava", "Europe/Rome|Europe/San_Marino", "Europe/Rome|Europe/Vatican", "Europe/Warsaw|Poland", "Europe/Zurich|Europe/Busingen", "Europe/Zurich|Europe/Vaduz", "Indian/Christmas|Etc/GMT-7", "Pacific/Auckland|Antarctica/McMurdo", "Pacific/Auckland|Antarctica/South_Pole", "Pacific/Auckland|NZ", "Pacific/Chatham|NZ-CHAT", "Pacific/Chuuk|Pacific/Truk", "Pacific/Chuuk|Pacific/Yap", "Pacific/Easter|Chile/EasterIsland", "Pacific/Guam|Pacific/Saipan", "Pacific/Honolulu|Pacific/Johnston", "Pacific/Honolulu|US/Hawaii", "Pacific/Kwajalein|Kwajalein", "Pacific/Pago_Pago|Pacific/Midway", "Pacific/Pago_Pago|Pacific/Samoa", "Pacific/Pago_Pago|US/Samoa", "Pacific/Palau|Etc/GMT-9", "Pacific/Pohnpei|Pacific/Ponape", "Pacific/Port_Moresby|Etc/GMT-10", "Pacific/Tarawa|Etc/GMT-12", "Pacific/Tarawa|Pacific/Funafuti", "Pacific/Tarawa|Pacific/Wake", "Pacific/Tarawa|Pacific/Wallis"],
        countries: ["AD|Europe/Andorra", "AE|Asia/Dubai", "AF|Asia/Kabul", "AG|America/Port_of_Spain America/Antigua", "AI|America/Port_of_Spain America/Anguilla", "AL|Europe/Tirane", "AM|Asia/Yerevan", "AO|Africa/Lagos Africa/Luanda", "AQ|Antarctica/Casey Antarctica/Davis Antarctica/DumontDUrville Antarctica/Mawson Antarctica/Palmer Antarctica/Rothera Antarctica/Syowa Antarctica/Troll Antarctica/Vostok Pacific/Auckland Antarctica/McMurdo", "AR|America/Argentina/Buenos_Aires America/Argentina/Cordoba America/Argentina/Salta America/Argentina/Jujuy America/Argentina/Tucuman America/Argentina/Catamarca America/Argentina/La_Rioja America/Argentina/San_Juan America/Argentina/Mendoza America/Argentina/San_Luis America/Argentina/Rio_Gallegos America/Argentina/Ushuaia", "AS|Pacific/Pago_Pago", "AT|Europe/Vienna", "AU|Australia/Lord_Howe Antarctica/Macquarie Australia/Hobart Australia/Currie Australia/Melbourne Australia/Sydney Australia/Broken_Hill Australia/Brisbane Australia/Lindeman Australia/Adelaide Australia/Darwin Australia/Perth Australia/Eucla", "AW|America/Curacao America/Aruba", "AX|Europe/Helsinki Europe/Mariehamn", "AZ|Asia/Baku", "BA|Europe/Belgrade Europe/Sarajevo", "BB|America/Barbados", "BD|Asia/Dhaka", "BE|Europe/Brussels", "BF|Africa/Abidjan Africa/Ouagadougou", "BG|Europe/Sofia", "BH|Asia/Qatar Asia/Bahrain", "BI|Africa/Maputo Africa/Bujumbura", "BJ|Africa/Lagos Africa/Porto-Novo", "BL|America/Port_of_Spain America/St_Barthelemy", "BM|Atlantic/Bermuda", "BN|Asia/Brunei", "BO|America/La_Paz", "BQ|America/Curacao America/Kralendijk", "BR|America/Noronha America/Belem America/Fortaleza America/Recife America/Araguaina America/Maceio America/Bahia America/Sao_Paulo America/Campo_Grande America/Cuiaba America/Santarem America/Porto_Velho America/Boa_Vista America/Manaus America/Eirunepe America/Rio_Branco", "BS|America/Nassau", "BT|Asia/Thimphu", "BW|Africa/Maputo Africa/Gaborone", "BY|Europe/Minsk", "BZ|America/Belize", "CA|America/St_Johns America/Halifax America/Glace_Bay America/Moncton America/Goose_Bay America/Blanc-Sablon America/Toronto America/Nipigon America/Thunder_Bay America/Iqaluit America/Pangnirtung America/Atikokan America/Winnipeg America/Rainy_River America/Resolute America/Rankin_Inlet America/Regina America/Swift_Current America/Edmonton America/Cambridge_Bay America/Yellowknife America/Inuvik America/Creston America/Dawson_Creek America/Fort_Nelson America/Vancouver America/Whitehorse America/Dawson", "CC|Indian/Cocos", "CD|Africa/Maputo Africa/Lagos Africa/Kinshasa Africa/Lubumbashi", "CF|Africa/Lagos Africa/Bangui", "CG|Africa/Lagos Africa/Brazzaville", "CH|Europe/Zurich", "CI|Africa/Abidjan", "CK|Pacific/Rarotonga", "CL|America/Santiago America/Punta_Arenas Pacific/Easter", "CM|Africa/Lagos Africa/Douala", "CN|Asia/Shanghai Asia/Urumqi", "CO|America/Bogota", "CR|America/Costa_Rica", "CU|America/Havana", "CV|Atlantic/Cape_Verde", "CW|America/Curacao", "CX|Indian/Christmas", "CY|Asia/Nicosia Asia/Famagusta", "CZ|Europe/Prague", "DE|Europe/Zurich Europe/Berlin Europe/Busingen", "DJ|Africa/Nairobi Africa/Djibouti", "DK|Europe/Copenhagen", "DM|America/Port_of_Spain America/Dominica", "DO|America/Santo_Domingo", "DZ|Africa/Algiers", "EC|America/Guayaquil Pacific/Galapagos", "EE|Europe/Tallinn", "EG|Africa/Cairo", "EH|Africa/El_Aaiun", "ER|Africa/Nairobi Africa/Asmara", "ES|Europe/Madrid Africa/Ceuta Atlantic/Canary", "ET|Africa/Nairobi Africa/Addis_Ababa", "FI|Europe/Helsinki", "FJ|Pacific/Fiji", "FK|Atlantic/Stanley", "FM|Pacific/Chuuk Pacific/Pohnpei Pacific/Kosrae", "FO|Atlantic/Faroe", "FR|Europe/Paris", "GA|Africa/Lagos Africa/Libreville", "GB|Europe/London", "GD|America/Port_of_Spain America/Grenada", "GE|Asia/Tbilisi", "GF|America/Cayenne", "GG|Europe/London Europe/Guernsey", "GH|Africa/Accra", "GI|Europe/Gibraltar", "GL|America/Nuuk America/Danmarkshavn America/Scoresbysund America/Thule", "GM|Africa/Abidjan Africa/Banjul", "GN|Africa/Abidjan Africa/Conakry", "GP|America/Port_of_Spain America/Guadeloupe", "GQ|Africa/Lagos Africa/Malabo", "GR|Europe/Athens", "GS|Atlantic/South_Georgia", "GT|America/Guatemala", "GU|Pacific/Guam", "GW|Africa/Bissau", "GY|America/Guyana", "HK|Asia/Hong_Kong", "HN|America/Tegucigalpa", "HR|Europe/Belgrade Europe/Zagreb", "HT|America/Port-au-Prince", "HU|Europe/Budapest", "ID|Asia/Jakarta Asia/Pontianak Asia/Makassar Asia/Jayapura", "IE|Europe/Dublin", "IL|Asia/Jerusalem", "IM|Europe/London Europe/Isle_of_Man", "IN|Asia/Kolkata", "IO|Indian/Chagos", "IQ|Asia/Baghdad", "IR|Asia/Tehran", "IS|Atlantic/Reykjavik", "IT|Europe/Rome", "JE|Europe/London Europe/Jersey", "JM|America/Jamaica", "JO|Asia/Amman", "JP|Asia/Tokyo", "KE|Africa/Nairobi", "KG|Asia/Bishkek", "KH|Asia/Bangkok Asia/Phnom_Penh", "KI|Pacific/Tarawa Pacific/Enderbury Pacific/Kiritimati", "KM|Africa/Nairobi Indian/Comoro", "KN|America/Port_of_Spain America/St_Kitts", "KP|Asia/Pyongyang", "KR|Asia/Seoul", "KW|Asia/Riyadh Asia/Kuwait", "KY|America/Panama America/Cayman", "KZ|Asia/Almaty Asia/Qyzylorda Asia/Qostanay Asia/Aqtobe Asia/Aqtau Asia/Atyrau Asia/Oral", "LA|Asia/Bangkok Asia/Vientiane", "LB|Asia/Beirut", "LC|America/Port_of_Spain America/St_Lucia", "LI|Europe/Zurich Europe/Vaduz", "LK|Asia/Colombo", "LR|Africa/Monrovia", "LS|Africa/Johannesburg Africa/Maseru", "LT|Europe/Vilnius", "LU|Europe/Luxembourg", "LV|Europe/Riga", "LY|Africa/Tripoli", "MA|Africa/Casablanca", "MC|Europe/Monaco", "MD|Europe/Chisinau", "ME|Europe/Belgrade Europe/Podgorica", "MF|America/Port_of_Spain America/Marigot", "MG|Africa/Nairobi Indian/Antananarivo", "MH|Pacific/Majuro Pacific/Kwajalein", "MK|Europe/Belgrade Europe/Skopje", "ML|Africa/Abidjan Africa/Bamako", "MM|Asia/Yangon", "MN|Asia/Ulaanbaatar Asia/Hovd Asia/Choibalsan", "MO|Asia/Macau", "MP|Pacific/Guam Pacific/Saipan", "MQ|America/Martinique", "MR|Africa/Abidjan Africa/Nouakchott", "MS|America/Port_of_Spain America/Montserrat", "MT|Europe/Malta", "MU|Indian/Mauritius", "MV|Indian/Maldives", "MW|Africa/Maputo Africa/Blantyre", "MX|America/Mexico_City America/Cancun America/Merida America/Monterrey America/Matamoros America/Mazatlan America/Chihuahua America/Ojinaga America/Hermosillo America/Tijuana America/Bahia_Banderas", "MY|Asia/Kuala_Lumpur Asia/Kuching", "MZ|Africa/Maputo", "NA|Africa/Windhoek", "NC|Pacific/Noumea", "NE|Africa/Lagos Africa/Niamey", "NF|Pacific/Norfolk", "NG|Africa/Lagos", "NI|America/Managua", "NL|Europe/Amsterdam", "NO|Europe/Oslo", "NP|Asia/Kathmandu", "NR|Pacific/Nauru", "NU|Pacific/Niue", "NZ|Pacific/Auckland Pacific/Chatham", "OM|Asia/Dubai Asia/Muscat", "PA|America/Panama", "PE|America/Lima", "PF|Pacific/Tahiti Pacific/Marquesas Pacific/Gambier", "PG|Pacific/Port_Moresby Pacific/Bougainville", "PH|Asia/Manila", "PK|Asia/Karachi", "PL|Europe/Warsaw", "PM|America/Miquelon", "PN|Pacific/Pitcairn", "PR|America/Puerto_Rico", "PS|Asia/Gaza Asia/Hebron", "PT|Europe/Lisbon Atlantic/Madeira Atlantic/Azores", "PW|Pacific/Palau", "PY|America/Asuncion", "QA|Asia/Qatar", "RE|Indian/Reunion", "RO|Europe/Bucharest", "RS|Europe/Belgrade", "RU|Europe/Kaliningrad Europe/Moscow Europe/Simferopol Europe/Kirov Europe/Astrakhan Europe/Volgograd Europe/Saratov Europe/Ulyanovsk Europe/Samara Asia/Yekaterinburg Asia/Omsk Asia/Novosibirsk Asia/Barnaul Asia/Tomsk Asia/Novokuznetsk Asia/Krasnoyarsk Asia/Irkutsk Asia/Chita Asia/Yakutsk Asia/Khandyga Asia/Vladivostok Asia/Ust-Nera Asia/Magadan Asia/Sakhalin Asia/Srednekolymsk Asia/Kamchatka Asia/Anadyr", "RW|Africa/Maputo Africa/Kigali", "SA|Asia/Riyadh", "SB|Pacific/Guadalcanal", "SC|Indian/Mahe", "SD|Africa/Khartoum", "SE|Europe/Stockholm", "SG|Asia/Singapore", "SH|Africa/Abidjan Atlantic/St_Helena", "SI|Europe/Belgrade Europe/Ljubljana", "SJ|Europe/Oslo Arctic/Longyearbyen", "SK|Europe/Prague Europe/Bratislava", "SL|Africa/Abidjan Africa/Freetown", "SM|Europe/Rome Europe/San_Marino", "SN|Africa/Abidjan Africa/Dakar", "SO|Africa/Nairobi Africa/Mogadishu", "SR|America/Paramaribo", "SS|Africa/Juba", "ST|Africa/Sao_Tome", "SV|America/El_Salvador", "SX|America/Curacao America/Lower_Princes", "SY|Asia/Damascus", "SZ|Africa/Johannesburg Africa/Mbabane", "TC|America/Grand_Turk", "TD|Africa/Ndjamena", "TF|Indian/Reunion Indian/Kerguelen", "TG|Africa/Abidjan Africa/Lome", "TH|Asia/Bangkok", "TJ|Asia/Dushanbe", "TK|Pacific/Fakaofo", "TL|Asia/Dili", "TM|Asia/Ashgabat", "TN|Africa/Tunis", "TO|Pacific/Tongatapu", "TR|Europe/Istanbul", "TT|America/Port_of_Spain", "TV|Pacific/Funafuti", "TW|Asia/Taipei", "TZ|Africa/Nairobi Africa/Dar_es_Salaam", "UA|Europe/Simferopol Europe/Kiev Europe/Uzhgorod Europe/Zaporozhye", "UG|Africa/Nairobi Africa/Kampala", "UM|Pacific/Pago_Pago Pacific/Wake Pacific/Honolulu Pacific/Midway", "US|America/New_York America/Detroit America/Kentucky/Louisville America/Kentucky/Monticello America/Indiana/Indianapolis America/Indiana/Vincennes America/Indiana/Winamac America/Indiana/Marengo America/Indiana/Petersburg America/Indiana/Vevay America/Chicago America/Indiana/Tell_City America/Indiana/Knox America/Menominee America/North_Dakota/Center America/North_Dakota/New_Salem America/North_Dakota/Beulah America/Denver America/Boise America/Phoenix America/Los_Angeles America/Anchorage America/Juneau America/Sitka America/Metlakatla America/Yakutat America/Nome America/Adak Pacific/Honolulu", "UY|America/Montevideo", "UZ|Asia/Samarkand Asia/Tashkent", "VA|Europe/Rome Europe/Vatican", "VC|America/Port_of_Spain America/St_Vincent", "VE|America/Caracas", "VG|America/Port_of_Spain America/Tortola", "VI|America/Port_of_Spain America/St_Thomas", "VN|Asia/Bangkok Asia/Ho_Chi_Minh", "VU|Pacific/Efate", "WF|Pacific/Wallis", "WS|Pacific/Apia", "YE|Asia/Riyadh Asia/Aden", "YT|Africa/Nairobi Indian/Mayotte", "ZA|Africa/Johannesburg", "ZM|Africa/Maputo Africa/Lusaka", "ZW|Africa/Maputo Africa/Harare"]
    }
}
]);
