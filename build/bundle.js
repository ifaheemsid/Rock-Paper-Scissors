var app = function() {
    "use strict";

    function t() {}
    const e = t => t;

    function n(t) {
        return t()
    }

    function s() {
        return Object.create(null)
    }

    function o(t) {
        t.forEach(n)
    }

    function c(t) {
        return "function" == typeof t
    }

    function r(t, e) {
        return t != t ? e == e : t !== e || t && "object" == typeof t || "function" == typeof t
    }
    const i = "undefined" != typeof window;
    let l = i ? () => window.performance.now() : () => Date.now(),
        u = i ? t => requestAnimationFrame(t) : t;
    const a = new Set;

    function d(t) {
        a.forEach(e => {
            e.c(t) || (a.delete(e), e.f())
        }), 0 !== a.size && u(d)
    }

    function f(t, e) {
        t.appendChild(e)
    }

    function g(t, e, n) {
        t.insertBefore(e, n || null)
    }

    function m(t) {
        t.parentNode.removeChild(t)
    }

    function p(t) {
        return document.createElement(t)
    }

    function v(t) {
        return document.createTextNode(t)
    }

    function h() {
        return v(" ")
    }

    function $(t, e, n, s) {
        return t.addEventListener(e, n, s), () => t.removeEventListener(e, n, s)
    }

    function _(t, e, n) {
        null == n ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
    }

    function b(t, e) {
        e = "" + e, t.wholeText !== e && (t.data = e)
    }

    function y(t, e) {
        const n = document.createEvent("CustomEvent");
        return n.initCustomEvent(t, !1, !1, e), n
    }
    const k = new Set;
    let w, j = 0;

    function z(t, e, n, s, o, c, r, i = 0) {
        const l = 16.666 / s;
        let u = "{\n";
        for (let t = 0; t <= 1; t += l) {
            const s = e + (n - e) * c(t);
            u += 100 * t + `%{${r(s,1-s)}}\n`
        }
        const a = u + `100% {${r(n,1-n)}}\n}`,
            d = `__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(a)}_${i}`,
            f = t.ownerDocument;
        k.add(f);
        const g = f.__svelte_stylesheet || (f.__svelte_stylesheet = f.head.appendChild(p("style")).sheet),
            m = f.__svelte_rules || (f.__svelte_rules = {});
        m[d] || (m[d] = !0, g.insertRule(`@keyframes ${d} ${a}`, g.cssRules.length));
        const v = t.style.animation || "";
        return t.style.animation = `${v?v+", ":""}${d} ${s}ms linear ${o}ms 1 both`, j += 1, d
    }

    function x(t, e) {
        const n = (t.style.animation || "").split(", "),
            s = n.filter(e ? t => t.indexOf(e) < 0 : t => -1 === t.indexOf("__svelte")),
            o = n.length - s.length;
        o && (t.style.animation = s.join(", "), j -= o, j || u(() => {
            j || (k.forEach(t => {
                const e = t.__svelte_stylesheet;
                let n = e.cssRules.length;
                for (; n--;) e.deleteRule(n);
                t.__svelte_rules = {}
            }), k.clear())
        }))
    }

    function E(t) {
        w = t
    }

    function C() {
        if (!w) throw new Error("Function called outside component initialization");
        return w
    }
    const S = [],
        q = [],
        L = [],
        M = [],
        U = Promise.resolve();
    let A = !1;

    function P(t) {
        L.push(t)
    }
    let T = !1;
    const N = new Set;

    function O() {
        if (!T) {
            T = !0;
            do {
                for (let t = 0; t < S.length; t += 1) {
                    const e = S[t];
                    E(e), R(e.$$)
                }
                for (S.length = 0; q.length;) q.pop()();
                for (let t = 0; t < L.length; t += 1) {
                    const e = L[t];
                    N.has(e) || (N.add(e), e())
                }
                L.length = 0
            } while (S.length);
            for (; M.length;) M.pop()();
            A = !1, T = !1, N.clear()
        }
    }

    function R(t) {
        if (null !== t.fragment) {
            t.update(), o(t.before_update);
            const e = t.dirty;
            t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(P)
        }
    }
    let H;

    function I(t, e, n) {
        t.dispatchEvent(y(`${e?"intro":"outro"}${n}`))
    }
    const B = new Set;
    let D;

    function F() {
        D = {
            r: 0,
            c: [],
            p: D
        }
    }

    function Y() {
        D.r || o(D.c), D = D.p
    }

    function G(t, e) {
        t && t.i && (B.delete(t), t.i(e))
    }

    function J(t, e, n, s) {
        if (t && t.o) {
            if (B.has(t)) return;
            B.add(t), D.c.push(() => {
                B.delete(t), s && (n && t.d(1), s())
            }), t.o(e)
        }
    }
    const K = {
        duration: 0
    };

    function Q(n, s, r, i) {
        let f = s(n, r),
            g = i ? 0 : 1,
            m = null,
            p = null,
            v = null;

        function h() {
            v && x(n, v)
        }

        function $(t, e) {
            const n = t.b - g;
            return e *= Math.abs(n), {
                a: g,
                b: t.b,
                d: n,
                duration: e,
                start: t.start,
                end: t.start + e,
                group: t.group
            }
        }

        function _(s) {
            const {
                delay: c = 0,
                duration: r = 300,
                easing: i = e,
                tick: _ = t,
                css: b
            } = f || K, y = {
                start: l() + c,
                b: s
            };
            s || (y.group = D, D.r += 1), m ? p = y : (b && (h(), v = z(n, g, s, r, c, i, b)), s && _(0, 1), m = $(y, r), P(() => I(n, s, "start")), function(t) {
                let e;
                0 === a.size && u(d), new Promise(n => {
                    a.add(e = {
                        c: t,
                        f: n
                    })
                })
            }(t => {
                if (p && t > p.start && (m = $(p, r), p = null, I(n, m.b, "start"), b && (h(), v = z(n, g, m.b, m.duration, 0, i, f.css))), m)
                    if (t >= m.end) _(g = m.b, 1 - g), I(n, m.b, "end"), p || (m.b ? h() : --m.group.r || o(m.group.c)), m = null;
                    else if (t >= m.start) {
                    const e = t - m.start;
                    g = m.a + m.d * i(e / m.duration), _(g, 1 - g)
                }
                return !(!m && !p)
            }))
        }
        return {
            run(t) {
                c(f) ? (H || (H = Promise.resolve(), H.then(() => {
                    H = null
                })), H).then(() => {
                    f = f(), _(t)
                }) : _(t)
            },
            end() {
                h(), m = p = null
            }
        }
    }

    function V(t) {
        t && t.c()
    }

    function W(t, e, s) {
        const {
            fragment: r,
            on_mount: i,
            on_destroy: l,
            after_update: u
        } = t.$$;
        r && r.m(e, s), P(() => {
            const e = i.map(n).filter(c);
            l ? l.push(...e) : o(e), t.$$.on_mount = []
        }), u.forEach(P)
    }

    function X(t, e) {
        const n = t.$$;
        null !== n.fragment && (o(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = [])
    }

    function Z(t, e) {
        -1 === t.$$.dirty[0] && (S.push(t), A || (A = !0, U.then(O)), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31
    }

    function tt(e, n, c, r, i, l, u = [-1]) {
        const a = w;
        E(e);
        const d = n.props || {},
            f = e.$$ = {
                fragment: null,
                ctx: null,
                props: l,
                update: t,
                not_equal: i,
                bound: s(),
                on_mount: [],
                on_destroy: [],
                before_update: [],
                after_update: [],
                context: new Map(a ? a.$$.context : []),
                callbacks: s(),
                dirty: u,
                skip_bound: !1
            };
        let g = !1;
        if (f.ctx = c ? c(e, d, (t, n, ...s) => {
                const o = s.length ? s[0] : n;
                return f.ctx && i(f.ctx[t], f.ctx[t] = o) && (!f.skip_bound && f.bound[t] && f.bound[t](o), g && Z(e, t)), n
            }) : [], f.update(), g = !0, o(f.before_update), f.fragment = !!r && r(f.ctx), n.target) {
            if (n.hydrate) {
                const t = function(t) {
                    return Array.from(t.childNodes)
                }(n.target);
                f.fragment && f.fragment.l(t), t.forEach(m)
            } else f.fragment && f.fragment.c();
            n.intro && G(e.$$.fragment), W(e, n.target, n.anchor), O()
        }
        E(a)
    }
    class et {
        $destroy() {
            X(this, 1), this.$destroy = t
        }
        $on(t, e) {
            const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
            return n.push(e), () => {
                const t = n.indexOf(e); - 1 !== t && n.splice(t, 1)
            }
        }
        $set(t) {
            var e;
            this.$$set && (e = t, 0 !== Object.keys(e).length) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1)
        }
    }

    function nt(e) {
        let n, s, o, c, r, i, l, u, a;
        return {
            c() {
                n = p("div"), s = p("div"), o = p("div"), o.innerHTML = '<img class="score-board__logo svelte-4dhbh0" src="./images/logo.svg" alt="site logo">', c = h(), r = p("div"), i = p("p"), i.textContent = "Score", l = h(), u = p("p"), a = v(e[0]), _(o, "class", "score-board__logo-container svelte-4dhbh0"), _(i, "class", "t-score"), _(u, "class", "t-score-number"), _(r, "class", "score-board__number svelte-4dhbh0"), _(s, "class", "score-board svelte-4dhbh0"), _(n, "class", "score-board-padding svelte-4dhbh0")
            },
            m(t, e) {
                g(t, n, e), f(n, s), f(s, o), f(s, c), f(s, r), f(r, i), f(r, l), f(r, u), f(u, a)
            },
            p(t, [e]) {
                1 & e && b(a, t[0])
            },
            i: t,
            o: t,
            d(t) {
                t && m(n)
            }
        }
    }

    function st(t, e, n) {
        let {
            score: s = 12
        } = e;
        return t.$$set = t => {
            "score" in t && n(0, s = t.score)
        }, [s]
    }
    class ot extends et {
        constructor(t) {
            super(), tt(this, t, st, nt, r, {
                score: 0
            })
        }
    }

    function ct(t) {
        const e = t - 1;
        return e * e * e + 1
    }

    function rt(t, {
        delay: n = 0,
        duration: s = 400,
        easing: o = e
    }) {
        const c = +getComputedStyle(t).opacity;
        return {
            delay: n,
            duration: s,
            easing: o,
            css: t => "opacity: " + t * c
        }
    }

    function it(t, {
        delay: e = 0,
        duration: n = 400,
        easing: s = ct,
        x: o = 0,
        y: c = 0,
        opacity: r = 0
    }) {
        const i = getComputedStyle(t),
            l = +i.opacity,
            u = "none" === i.transform ? "" : i.transform,
            a = l * (1 - r);
        return {
            delay: e,
            duration: n,
            easing: s,
            css: (t, e) => `\n\t\t\ttransform: ${u} translate(${(1-t)*o}px, ${(1-t)*c}px);\n\t\t\topacity: ${l-a*e}`
        }
    }

    function lt(t, e, n) {
        const s = t.slice();
        return s[16] = e[n], s
    }

    function ut(t) {
        let e, n = t[6],
            s = [];
        for (let e = 0; e < n.length; e += 1) s[e] = dt(lt(t, n, e));
        return {
            c() {
                e = p("div");
                for (let t = 0; t < s.length; t += 1) s[t].c();
                _(e, "class", "pickings-container svelte-umgzj6")
            },
            m(t, n) {
                g(t, e, n);
                for (let t = 0; t < s.length; t += 1) s[t].m(e, null)
            },
            p(t, o) {
                if (192 & o) {
                    let c;
                    for (n = t[6], c = 0; c < n.length; c += 1) {
                        const r = lt(t, n, c);
                        s[c] ? s[c].p(r, o) : (s[c] = dt(r), s[c].c(), s[c].m(e, null))
                    }
                    for (; c < s.length; c += 1) s[c].d(1);
                    s.length = n.length
                }
            },
            d(t) {
                t && m(e),
                    function(t, e) {
                        for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e)
                    }(s, t)
            }
        }
    }

    function at(t) {
        let e, n, s, o, c, r, i, l, u, a, d, v, $, b, y, k;

        function w(t, e) {
            return t[1] ? gt : ft
        }
        let j = w(t),
            z = j(t);
        return {
            c() {
                e = p("div"), n = p("div"), s = p("div"), o = p("div"), c = p("img"), l = h(), u = p("p"), u.textContent = "You Picked", d = h(), v = p("div"), z.c(), $ = h(), b = p("p"), b.textContent = "The House Picked", _(c, "class", "picking-icon svelte-umgzj6"), c.src !== (r = t[2].svgUrl) && _(c, "src", r), _(c, "alt", "picking icon"), _(o, "class", "picking__inner svelte-umgzj6"), _(s, "class", i = "picking picking--" + t[2].name + " svelte-umgzj6"), _(u, "class", "t-picked picked svelte-umgzj6"), _(n, "class", a = "youpicked" + ("you win" === t[5] ? " win" : "") + " svelte-umgzj6"), _(b, "class", "t-picked picked svelte-umgzj6"), _(v, "class", y = "housepicked" + ("you lose" === t[5] ? " win" : "") + " svelte-umgzj6"), _(e, "class", k = "comparison-container" + (!0 === t[4] ? " expand" : "") + " svelte-umgzj6")
            },
            m(t, r) {
                g(t, e, r), f(e, n), f(n, s), f(s, o), f(o, c), f(n, l), f(n, u), f(e, d), f(e, v), z.m(v, null), f(v, $), f(v, b)
            },
            p(t, o) {
                4 & o && c.src !== (r = t[2].svgUrl) && _(c, "src", r), 4 & o && i !== (i = "picking picking--" + t[2].name + " svelte-umgzj6") && _(s, "class", i), 32 & o && a !== (a = "youpicked" + ("you win" === t[5] ? " win" : "") + " svelte-umgzj6") && _(n, "class", a), j === (j = w(t)) && z ? z.p(t, o) : (z.d(1), z = j(t), z && (z.c(), z.m(v, $))), 32 & o && y !== (y = "housepicked" + ("you lose" === t[5] ? " win" : "") + " svelte-umgzj6") && _(v, "class", y), 16 & o && k !== (k = "comparison-container" + (!0 === t[4] ? " expand" : "") + " svelte-umgzj6") && _(e, "class", k)
            },
            d(t) {
                t && m(e), z.d()
            }
        }
    }

    function dt(e) {
        let n, s, o, c, r, i, l, u, a;
        return {
            c() {
                n = p("div"), s = p("div"), o = p("img"), r = h(), _(o, "class", "picking-icon svelte-umgzj6"), o.src !== (c = e[16].svgUrl) && _(o, "src", c), _(o, "alt", "picking icon"), _(s, "class", "picking__inner svelte-umgzj6"), _(n, "data-picking-name", i = e[16].name), _(n, "class", l = "picking picking--" + e[16].name + " svelte-umgzj6")
            },
            m(t, c) {
                g(t, n, c), f(n, s), f(s, o), f(n, r), u || (a = $(n, "click", e[7]), u = !0)
            },
            p: t,
            d(t) {
                t && m(n), u = !1, a()
            }
        }
    }

    function ft(e) {
        let n;
        return {
            c() {
                n = p("div"), n.innerHTML = '<div class="loadingio-spinner-ripple-0ww0d4btxgq svelte-umgzj6"><div class="ldio-to0kafuso svelte-umgzj6"><div class="svelte-umgzj6"></div> \n              <div class="svelte-umgzj6"></div> \n              <div class="svelte-umgzj6"></div></div></div>', _(n, "class", "picking-waiting svelte-umgzj6")
            },
            m(t, e) {
                g(t, n, e)
            },
            p: t,
            d(t) {
                t && m(n)
            }
        }
    }

    function gt(t) {
        let e, n, s, o, c;
        return {
            c() {
                e = p("div"), n = p("div"), s = p("img"), _(s, "class", "picking-icon svelte-umgzj6"), s.src !== (o = t[3].svgUrl) && _(s, "src", o), _(s, "alt", "picking icon"), _(n, "class", "picking__inner svelte-umgzj6"), _(e, "class", c = "picking picking--" + t[3].name + " svelte-umgzj6")
            },
            m(t, o) {
                g(t, e, o), f(e, n), f(n, s)
            },
            p(t, n) {
                8 & n && s.src !== (o = t[3].svgUrl) && _(s, "src", o), 8 & n && c !== (c = "picking picking--" + t[3].name + " svelte-umgzj6") && _(e, "class", c)
            },
            d(t) {
                t && m(e)
            }
        }
    }

    function mt(t) {
        let e, n, s, o, c, r, i, l, u;
        return {
            c() {
                e = p("div"), n = p("h2"), s = v(t[5]), o = h(), c = p("button"), c.textContent = "Play Again", _(n, "class", "t-round-result round-result__result svelte-umgzj6"), _(c, "class", "btn btn--playagain"), _(e, "class", "round-result svelte-umgzj6")
            },
            m(r, a) {
                g(r, e, a), f(e, n), f(n, s), f(e, o), f(e, c), i = !0, l || (u = $(c, "click", t[8]), l = !0)
            },
            p(t, e) {
                (!i || 32 & e) && b(s, t[5])
            },
            i(t) {
                i || (P(() => {
                    r || (r = Q(e, it, {
                        y: 200,
                        duration: 300
                    }, !0)), r.run(1)
                }), i = !0)
            },
            o(t) {
                r || (r = Q(e, it, {
                    y: 200,
                    duration: 300
                }, !1)), r.run(0), i = !1
            },
            d(t) {
                t && m(e), t && r && r.end(), l = !1, u()
            }
        }
    }

    function pt(t) {
        let e, n, s;

        function o(t, e) {
            return t[0] ? at : ut
        }
        let c = o(t),
            r = c(t),
            i = t[4] && mt(t);
        return {
            c() {
                e = p("div"), r.c(), n = h(), i && i.c(), _(e, "class", "pickings svelte-umgzj6")
            },
            m(t, o) {
                g(t, e, o), r.m(e, null), f(e, n), i && i.m(e, null), s = !0
            },
            p(t, [s]) {
                c === (c = o(t)) && r ? r.p(t, s) : (r.d(1), r = c(t), r && (r.c(), r.m(e, n))), t[4] ? i ? (i.p(t, s), 16 & s && G(i, 1)) : (i = mt(t), i.c(), G(i, 1), i.m(e, null)) : i && (F(), J(i, 1, 1, () => {
                    i = null
                }), Y())
            },
            i(t) {
                s || (G(i), s = !0)
            },
            o(t) {
                J(i), s = !1
            },
            d(t) {
                t && m(e), r.d(), i && i.d()
            }
        }
    }

    function vt(t, e) {
        return t.beats === e.name
    }

    function ht(t, e, n) {
        let s = !1,
            o = !1,
            c = {},
            r = {},
            i = !1,
            l = "";
        const u = function() {
                const t = C();
                return (e, n) => {
                    const s = t.$$.callbacks[e];
                    if (s) {
                        const o = y(e, n);
                        s.slice().forEach(e => {
                            e.call(t, o)
                        })
                    }
                }
            }(),
            a = [{
                name: "paper",
                svgUrl: "./images/icon-paper.svg",
                beats: "rock"
            }, {
                name: "scissors",
                svgUrl: "./images/icon-scissors.svg",
                beats: "paper"
            }, {
                name: "rock",
                svgUrl: "./images/icon-rock.svg",
                beats: "scissors"
            }];

        function d(t) {
            u("updateScore", {
                score: t
            })
        }
        return [s, o, c, r, i, l, a, function() {
            const t = this.dataset.pickingName,
                e = a.find(e => e.name === t);
            n(2, c = e), n(0, s = !0), async function(t) {
                const e = await new Promise(t => {
                    setTimeout(() => {
                        const e = Math.floor(Math.random() * a.length);
                        t(a[e])
                    }, 2e3)
                });
                n(3, r = e), n(1, o = !0);
                const s = vt(t, e),
                    c = vt(e, t);
                ! function(t, e) {
                    t || e || n(5, l = "tie");
                    t && !e && (n(5, l = "you win"), d(1));
                    !t && e && (n(5, l = "you lose"), d(-1));
                    n(4, i = !0)
                }(s, c)
            }(e)
        }, function() {
            n(0, s = !1), n(1, o = !1), n(4, i = !1), n(5, l = "")
        }]
    }
    class $t extends et {
        constructor(t) {
            super(), tt(this, t, ht, pt, r, {})
        }
    }

    function _t(e) {
        let n, s, o, c, r;
        return {
            c() {
                n = p("div"), n.innerHTML = '<div class="fullscreen-modal-container svelte-1sbtqd3"><h2 class="t-rules-modal fullscreen-modal__text svelte-1sbtqd3">Rules</h2> \n    <div class="t-rules-modal fullscreen-modal__rules svelte-1sbtqd3"><img src="./images/image-rules.svg" alt="rules"></div> \n    <svg class="fullscreen-modal__close svelte-1sbtqd3" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#3B4262" fill-rule="evenodd" d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z" opacity=".25"></path></svg></div>', _(n, "class", "fullscreen-modal svelte-1sbtqd3")
            },
            m(t, s) {
                g(t, n, s), o = !0, c || (r = $(n, "click", e[1]), c = !0)
            },
            p: t,
            i(t) {
                o || (P(() => {
                    s || (s = Q(n, rt, {
                        duration: 270
                    }, !0)), s.run(1)
                }), o = !0)
            },
            o(t) {
                s || (s = Q(n, rt, {
                    duration: 270
                }, !1)), s.run(0), o = !1
            },
            d(t) {
                t && m(n), t && s && s.end(), c = !1, r()
            }
        }
    }

    function bt(t) {
        let e, n, s, o, c, r, i, l = t[0] && _t(t);
        return {
            c() {
                e = p("div"), n = p("button"), n.textContent = "rules", s = h(), l && l.c(), o = v(""), _(n, "class", "btn btn--rules t-rules"), _(e, "class", "rules svelte-1sbtqd3")
            },
            m(u, a) {
                g(u, e, a), f(e, n), g(u, s, a), l && l.m(u, a), g(u, o, a), c = !0, r || (i = $(n, "click", t[1]), r = !0)
            },
            p(t, [e]) {
                t[0] ? l ? (l.p(t, e), 1 & e && G(l, 1)) : (l = _t(t), l.c(), G(l, 1), l.m(o.parentNode, o)) : l && (F(), J(l, 1, 1, () => {
                    l = null
                }), Y())
            },
            i(t) {
                c || (G(l), c = !0)
            },
            o(t) {
                J(l), c = !1
            },
            d(t) {
                t && m(e), t && m(s), l && l.d(t), t && m(o), r = !1, i()
            }
        }
    }

    function yt(t, e, n) {
        let s = !1;
        return [s, function() {
            n(0, s = !s)
        }]
    }
    class kt extends et {
        constructor(t) {
            super(), tt(this, t, yt, bt, r, {})
        }
    }

    function wt(t) {
        let e, n, s, o, c, r, i;
        return n = new ot({
            props: {
                score: t[0]
            }
        }), o = new $t({}), o.$on("updateScore", t[1]), r = new kt({}), {
            c() {
                e = p("main"), V(n.$$.fragment), s = h(), V(o.$$.fragment), c = h(), V(r.$$.fragment), _(e, "class", "main svelte-q7f38a")
            },
            m(t, l) {
                g(t, e, l), W(n, e, null), f(e, s), W(o, e, null), f(e, c), W(r, e, null), i = !0
            },
            p(t, [e]) {
                const s = {};
                1 & e && (s.score = t[0]), n.$set(s)
            },
            i(t) {
                i || (G(n.$$.fragment, t), G(o.$$.fragment, t), G(r.$$.fragment, t), i = !0)
            },
            o(t) {
                J(n.$$.fragment, t), J(o.$$.fragment, t), J(r.$$.fragment, t), i = !1
            },
            d(t) {
                t && m(e), X(n), X(o), X(r)
            }
        }
    }

    function jt(t, e, n) {
        let s;
        var o;
        return o = async () => {
            const t = await localStorage.getItem("savedScore");
            n(0, s = null != t ? parseInt(t) : 12)
        }, C().$$.on_mount.push(o), [s, function(t) {
            n(0, s += t.detail.score), localStorage.setItem("savedScore", s)
        }]
    }
    return new class extends et {
        constructor(t) {
            super(), tt(this, t, jt, wt, r, {})
        }
    }({
        target: document.body
    })
}();
//# sourceMappingURL=bundle.js.map