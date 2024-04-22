(() => {
  "use strict";
  var e = {
      11: (e, t, s) => {
        s.d(t, { A: () => i });
        var n = s(601),
          o = s.n(n),
          a = s(314),
          r = s.n(a)()(o());
        r.push([
          e.id,
          'body{position:relative;width:100vw;height:100vh;display:flex;flex-direction:column;justify-content:space-around;align-items:center;margin:0;padding:0;box-sizing:border-box}.input-first-name,.input-second-name,.log-in-button,.log-out-button{display:block}button{cursor:pointer}.login{width:30vw;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:40px;border:3px dotted #000;padding:10px;border-radius:10px}.input-first-name-wrapper,.input-password-wrapper{width:70%}.input-password,.input-login{width:100%}.log-in-button_disabled{pointer-events:none;opacity:.5;cursor:default}.invalid_value_count,.invalid_value_register{border-color:red;position:relative}.invalid_value_count::before{content:"value cannot be shorter than four characters";position:absolute;bottom:-30px;display:block;color:red;font-size:12px}.invalid_value_register::before{content:"value must contain at least one capital letter";position:absolute;bottom:-30px;display:block;color:red;font-size:12px}.wrapper-popup{position:absolute;width:100%;height:100%;background-color:rgba(34,10,10,.5);display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:1}.popup-container{width:50vw;height:200px;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:30px;background-color:#fff;border:3px dotted #000;border-radius:10px}.popup-button{display:block}.messenger{display:flex;flex-direction:column;justify-content:center;align-items:center}.messenger__header{display:flex;width:80vw;justify-content:space-around;align-items:center;padding:10px;border:3px dotted #000;border-radius:10px}.messenger__container{display:flex;width:80vw;height:50vh;justify-content:center;align-items:center;padding:5px}.messenger__users{width:30vw;height:100%;border:3px dotted #000;border-radius:10px;overflow:hidden;padding:5px}.messenger__chat{width:70vw;height:100%;border:3px dotted #000;border-radius:10px;padding:5px}.input-find-users{width:90%;margin:10px}.messenger__users-list-element{color:green;min-width:30px}.messenger__users-list-element_active{color:green}.messenger__users-list-element_unactive{color:red}.messenger__users-list_selected{background-color:#f3e9e9}.messenger__users-list-element:hover{background-color:#f3e9e9;cursor:pointer}.messenger__users-list-element_hidden{display:none}.messenger__text{padding:5px}.messenger__users-list{display:block;height:80%;overflow-y:scroll}.messenger__chat-window{height:90%;overflow-y:scroll;display:flex;flex-direction:column;gap:10px}.messenger__window-messenger,.messenger__empty-history{text-align:center;align-self:center;padding-top:50px}.messenger__container-input{display:flex}.messenger__chat-input{display:block;width:auto;flex-grow:1}.messenger__chat-send-button{display:block}.messenger__chat-send-button_disabled,.messenger__chat-input_disabled{pointer-events:none;opacity:.5;cursor:default}.messenger__chat-send-button_hidden{display:none}.messenger__message{border:1px solid #000;border-radius:5px;width:auto;padding:5px}.messenger__sended-message{align-self:flex-end}.messenger__response-message{align-self:flex-start}.messenger__time,.messenger__send-satus,.messenger__eidt-status{font-size:10px}.messenger__status{display:flex;justify-content:space-around;flex-wrap:wrap}.messenger__from-name{font-size:12px}.footer{width:100vw;display:flex;justify-content:space-around;align-items:center}.app{display:flex;flex-direction:column;justify-content:space-around;align-items:center;height:100vh}.edit-menu{display:none;position:absolute;width:100px;border:1px solid #000;background-color:#fff}.edit-menu__edit,.edit-menu__delete{text-align:center}.edit-menu__edit:hover,.edit-menu__delete:hover{cursor:pointer;background-color:#f3e9e9}.messenger__chat-edit-button{display:none}.messenger__chat-edit-button_visible{display:block}.messenger__chat-cancel-edit-button{display:none}.messenger__chat-cancel-edit-button_visible{display:block}.about{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:30px}.back-about-button{display:block}.wrapper-popup-connecting{position:absolute;width:100%;height:100%;background-color:rgba(34,10,10,.5);display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:1}.popup-connecting-container{width:50vw;height:200px;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:30px;background-color:#fff;border:3px dotted #000;border-radius:10px}',
          "",
        ]);
        const i = r;
      },
      314: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var s = "",
                  n = void 0 !== t[5];
                return (
                  t[4] && (s += "@supports (".concat(t[4], ") {")),
                  t[2] && (s += "@media ".concat(t[2], " {")),
                  n &&
                    (s += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {",
                    )),
                  (s += e(t)),
                  n && (s += "}"),
                  t[2] && (s += "}"),
                  t[4] && (s += "}"),
                  s
                );
              }).join("");
            }),
            (t.i = function (e, s, n, o, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var r = {};
              if (n)
                for (var i = 0; i < this.length; i++) {
                  var c = this[i][0];
                  null != c && (r[c] = !0);
                }
              for (var l = 0; l < e.length; l++) {
                var d = [].concat(e[l]);
                (n && r[d[0]]) ||
                  (void 0 !== a &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = a)),
                  s &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = s))
                      : (d[2] = s)),
                  o &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = o))
                      : (d[4] = "".concat(o))),
                  t.push(d));
              }
            }),
            t
          );
        };
      },
      601: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      72: (e) => {
        var t = [];
        function s(e) {
          for (var s = -1, n = 0; n < t.length; n++)
            if (t[n].identifier === e) {
              s = n;
              break;
            }
          return s;
        }
        function n(e, n) {
          for (var a = {}, r = [], i = 0; i < e.length; i++) {
            var c = e[i],
              l = n.base ? c[0] + n.base : c[0],
              d = a[l] || 0,
              u = "".concat(l, " ").concat(d);
            a[l] = d + 1;
            var m = s(u),
              g = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== m) t[m].references++, t[m].updater(g);
            else {
              var _ = o(g, n);
              (n.byIndex = i),
                t.splice(i, 0, { identifier: u, updater: _, references: 1 });
            }
            r.push(u);
          }
          return r;
        }
        function o(e, t) {
          var s = t.domAPI(t);
          return (
            s.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                s.update((e = t));
              } else s.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = n((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var r = 0; r < a.length; r++) {
              var i = s(a[r]);
              t[i].references--;
            }
            for (var c = n(e, o), l = 0; l < a.length; l++) {
              var d = s(a[l]);
              0 === t[d].references && (t[d].updater(), t.splice(d, 1));
            }
            a = c;
          };
        };
      },
      659: (e) => {
        var t = {};
        e.exports = function (e, s) {
          var n = (function (e) {
            if (void 0 === t[e]) {
              var s = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                s instanceof window.HTMLIFrameElement
              )
                try {
                  s = s.contentDocument.head;
                } catch (e) {
                  s = null;
                }
              t[e] = s;
            }
            return t[e];
          })(e);
          if (!n)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          n.appendChild(s);
        };
      },
      540: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      56: (e, t, s) => {
        e.exports = function (e) {
          var t = s.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      825: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (s) {
              !(function (e, t, s) {
                var n = "";
                s.supports && (n += "@supports (".concat(s.supports, ") {")),
                  s.media && (n += "@media ".concat(s.media, " {"));
                var o = void 0 !== s.layer;
                o &&
                  (n += "@layer".concat(
                    s.layer.length > 0 ? " ".concat(s.layer) : "",
                    " {",
                  )),
                  (n += s.css),
                  o && (n += "}"),
                  s.media && (n += "}"),
                  s.supports && (n += "}");
                var a = s.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (n +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */",
                    )),
                  t.styleTagTransform(n, e, t.options);
              })(t, e, s);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      113: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    t = {};
  function s(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var a = (t[n] = { id: n, exports: {} });
    return e[n](a, a.exports, s), a.exports;
  }
  (s.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return s.d(t, { a: t }), t;
  }),
    (s.d = (e, t) => {
      for (var n in t)
        s.o(t, n) &&
          !s.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (s.nc = void 0),
    (() => {
      function e() {
        !(function (e, t) {
          const s = document.querySelector(".log-in-button");
          function n() {
            let t = !0;
            return e.value.length < 4
              ? (e.parentElement?.classList.remove("invalid_value_register"),
                e.parentElement?.classList.add("invalid_value_count"),
                (t = !1),
                t)
              : ((e.value.length >= 4 || 0 === e.value.length) &&
                  e.parentElement?.classList.remove("invalid_value_count"),
                /[A-ZА-Я]/.test(e.value)
                  ? (/[A-ZА-Я]/.test(e.value) &&
                      e.parentElement?.classList.remove(
                        "invalid_value_register",
                      ),
                    t)
                  : (e.parentElement?.classList.add("invalid_value_register"),
                    (t = !1),
                    t));
          }
          function o() {
            let e = !0;
            return t.value.length < 4
              ? (t.parentElement?.classList.remove("invalid_value_register"),
                t.parentElement?.classList.add("invalid_value_count"),
                (e = !1),
                e)
              : ((t.value.length >= 4 || 0 === t.value.length) &&
                  t.parentElement?.classList.remove("invalid_value_count"),
                /[A-ZА-Я]/.test(t.value)
                  ? (/[A-ZА-Я]/.test(t.value) &&
                      t.parentElement?.classList.remove(
                        "invalid_value_register",
                      ),
                    e)
                  : (t.parentElement?.classList.add("invalid_value_register"),
                    (e = !1),
                    e));
          }
          function a() {
            n() && o()
              ? s.classList.remove("log-in-button_disabled")
              : s.classList.add("log-in-button_disabled");
          }
          e.addEventListener("input", a),
            t.addEventListener("input", a),
            e.addEventListener("input", n),
            t.addEventListener("input", o);
        })(
          document.querySelector(".input-login"),
          document.querySelector(".input-password"),
        );
      }
      function t(e, t) {
        t.forEach((t) => {
          const {
              tagName: s,
              classNames: n,
              textContent: o,
              attributes: a,
              eventListener: r,
            } = t,
            i = document.createElement(s);
          n &&
            n.forEach((e) => {
              i.classList.add(e);
            }),
            o && (i.textContent = o),
            a &&
              Object.keys(a).forEach((e) => {
                i.setAttribute(e, a[e]);
              }),
            r && i.addEventListener(r.eventType, r.listener),
            e.appendChild(i);
        });
      }
      function n(e) {
        t(document.querySelector(`.${e}`), [
          { tagName: "div", classNames: ["input-first-name-wrapper"] },
          { tagName: "div", classNames: ["input-password-wrapper"] },
          {
            tagName: "button",
            classNames: ["log-in-button", "log-in-button_disabled"],
            textContent: "login",
          },
          {
            tagName: "button",
            classNames: ["about-button"],
            textContent: "about",
          },
        ]);
        const s = document.querySelector(".input-first-name-wrapper"),
          n = document.querySelector(".input-password-wrapper"),
          o = [
            {
              tagName: "input",
              classNames: ["input-login"],
              attributes: { type: "text", placeholder: "login" },
            },
            {
              tagName: "input",
              classNames: ["input-password"],
              attributes: { type: "text", placeholder: "password" },
            },
          ];
        t(s, [o[0]]), t(n, [o[1]]);
      }
      function o() {
        const e = document.querySelector(".messenger__chat-edit-button"),
          t = document.querySelector(".messenger__chat-cancel-edit-button"),
          s = document.querySelector(".messenger__chat-input"),
          n = document.querySelector(".messenger__chat-send-button");
        e.classList.remove("messenger__chat-edit-button_visible"),
          t.classList.remove("messenger__chat-cancel-edit-button_visible"),
          n?.classList.remove("messenger__chat-send-button_hidden"),
          (s.value = "");
      }
      function a() {
        return Math.random().toString(36).substring(2);
      }
      const r = { to: "", text: "" };
      function i(e) {
        (r.text = ""),
          (r.to = ""),
          document
            .querySelectorAll(".messenger__users-list-element")
            .forEach((e) => {
              e.classList.remove("messenger__users-list_selected");
            });
        const t = e.target;
        t.classList.add("messenger__users-list_selected");
        const s = t.textContent;
        (r.to = s),
          (function () {
            const e = document.querySelector(".messenger__chat-window");
            for (; e.firstChild; ) e.removeChild(e.firstChild);
          })(),
          g.fetchingMessageHistory(s);
        const n = document.querySelector(".messenger__chat-input"),
          o = document.querySelector(".messenger__chat-send-button");
        n.classList.remove("messenger__chat-input_disabled"),
          o.classList.remove("messenger__chat-send-button_disabled");
      }
      function c(e) {
        const t = String(e.getDate()),
          s = String(e.getFullYear()),
          n = e.getMonth(),
          o = String(e.getHours()),
          a = String(e.getMinutes()),
          r = String(e.getSeconds());
        return `${t} ${["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][n]} ${s} ${o}:${a}:${r}`;
      }
      function l() {
        const e = document.querySelector(".messenger__chat-window");
        e.scrollTop = e.scrollHeight;
      }
      function d() {
        const e = document.querySelector(".messenger__empty-history"),
          t = e.parentNode;
        t && t.removeChild(e);
      }
      function u() {
        t(document.querySelector(".messenger__chat-window"), [
          {
            tagName: "div",
            classNames: ["messenger__empty-history"],
            textContent: "start communication",
          },
        ]);
      }
      const m = new (class {
        constructor() {
          (this.url = "ws://127.0.0.1:4000/"), (this.socket = null);
        }
        connect() {
          (this.socket = new WebSocket(this.url)),
            this.socket.addEventListener("open", () => {
              console.log("Connected to WebSocket server"),
                g.showMessageData((e) => {
                  const s = JSON.parse(e),
                    n = s.type;
                  var o;
                  console.log("data from watcher :", s),
                    "USER_ACTIVE" === n &&
                      (function (e) {
                        const s = sessionStorage.getItem(
                            "userData_iambigbobby",
                          ),
                          n = JSON.parse(s),
                          o = document.querySelector(".messenger__users-list");
                        e.forEach((e) => {
                          if (e.login !== n.login) {
                            const s = [
                              {
                                tagName: "li",
                                classNames: [
                                  "messenger__users-list-element",
                                  "messenger__users-list-element_active",
                                ],
                                textContent: `${e.login}`,
                                eventListener: {
                                  eventType: "click",
                                  listener: (e) => {
                                    i(e);
                                  },
                                },
                              },
                            ];
                            t(o, s);
                          }
                        });
                      })(s.payload.users),
                    "USER_INACTIVE" === n &&
                      (function (e) {
                        const s = document.querySelector(
                          ".messenger__users-list",
                        );
                        e.forEach((e) => {
                          const n = [
                            {
                              tagName: "li",
                              classNames: [
                                "messenger__users-list-element",
                                "messenger__users-list-element_unactive",
                              ],
                              textContent: `${e.login}`,
                              eventListener: {
                                eventType: "click",
                                listener: (e) => {
                                  i(e);
                                },
                              },
                            },
                          ];
                          t(s, n);
                        });
                      })(s.payload.users),
                    "USER_EXTERNAL_LOGIN" === n &&
                      ((o = s.payload.user),
                      document
                        .querySelectorAll(".messenger__users-list-element")
                        .forEach((e) => {
                          e.textContent === o.login &&
                            e.classList.remove(
                              "messenger__users-list-element_unactive",
                            );
                        })),
                    "USER_EXTERNAL_LOGOUT" === n &&
                      (function (e) {
                        document
                          .querySelectorAll(".messenger__users-list-element")
                          .forEach((t) => {
                            t.textContent === e.login &&
                              t.classList.add(
                                "messenger__users-list-element_unactive",
                              );
                          });
                      })(s.payload.user),
                    "USER_EXTERNAL_LOGIN" === n &&
                      (function (e) {
                        const s = document.querySelectorAll(
                          ".messenger__users-list-element",
                        );
                        let n = !0;
                        s.forEach((t) => {
                          t.textContent === e.login && (n = !1);
                        }),
                          n &&
                            t(
                              document.querySelector(".messenger__users-list"),
                              [
                                {
                                  tagName: "li",
                                  classNames: [
                                    "messenger__users-list-element",
                                    "messenger__users-list-element_active",
                                  ],
                                  textContent: `${e.login}`,
                                  eventListener: {
                                    eventType: "click",
                                    listener: (e) => {
                                      i(e);
                                    },
                                  },
                                },
                              ],
                            );
                      })(s.payload.user),
                    "MSG_SEND" === n &&
                      (null === s.id
                        ? (function (e) {
                            document.querySelector(
                              ".messenger__empty-history",
                            ) && d();
                            const s = e.datetime,
                              n = new Date(s),
                              o = document.querySelector(
                                ".messenger__chat-window",
                              ),
                              a = sessionStorage.getItem(
                                "userData_iambigbobby",
                              ),
                              i = JSON.parse(a);
                            if (e.to === i.login && r.to === e.from) {
                              t(o, [
                                {
                                  tagName: "div",
                                  classNames: [
                                    "messenger__message",
                                    "messenger__response-message",
                                  ],
                                  attributes: { id: e.id },
                                },
                              ]);
                              const s = document.querySelectorAll(
                                ".messenger__message",
                              );
                              t(s[s.length - 1], [
                                {
                                  tagName: "div",
                                  classNames: ["messenger__time"],
                                  textContent: c(n),
                                },
                                {
                                  tagName: "div",
                                  classNames: ["messenger__from-name"],
                                  textContent: e.from,
                                },
                                {
                                  tagName: "div",
                                  classNames: ["messenger__text"],
                                  textContent: e.text,
                                },
                                {
                                  tagName: "div",
                                  classNames: ["messenger__status"],
                                },
                              ]);
                              const a =
                                document.querySelectorAll(".messenger__status");
                              t(a[a.length - 1], [
                                {
                                  tagName: "div",
                                  classNames: ["messenger__send-satus"],
                                },
                                {
                                  tagName: "div",
                                  classNames: ["messenger__read-status"],
                                },
                                {
                                  tagName: "div",
                                  classNames: ["messenger__eidt-status"],
                                },
                              ]),
                                l();
                            }
                          })(s.payload.message)
                        : ((function (e) {
                            const t = document.querySelectorAll(
                              ".messenger__message",
                            );
                            t[t.length - 1].id = e;
                          })(s.payload.message.id),
                          (function (e) {
                            const t = document.querySelectorAll(
                                ".messenger__send-satus",
                              ),
                              s = t[t.length - 1];
                            !0 === e && ((s.textContent = "delivered"), l());
                          })(s.payload.message.status.isDelivered))),
                    "MSG_FROM_USER" === n &&
                      (function (e) {
                        const s = document.querySelector(
                          ".messenger__chat-window",
                        );
                        if (e.length > 0) {
                          const n = sessionStorage.getItem(
                              "userData_iambigbobby",
                            ),
                            o = JSON.parse(n);
                          let a, r;
                          e.forEach((e) => {
                            o.login === e.from
                              ? ((a = [
                                  "messenger__message",
                                  "messenger__sended-message",
                                ]),
                                (r = e.from))
                              : o.login !== e.from &&
                                ((a = [
                                  "messenger__message",
                                  "messenger__response-message",
                                ]),
                                (r = e.from));
                            const n = [
                              {
                                tagName: "div",
                                classNames: a,
                                attributes: { id: e.id },
                              },
                            ];
                            t(s, n);
                            const i = document.querySelectorAll(
                              ".messenger__message",
                            );
                            t(i[i.length - 1], [
                              {
                                tagName: "div",
                                classNames: ["messenger__time"],
                                textContent: c(new Date(e.datetime)),
                              },
                              {
                                tagName: "div",
                                classNames: ["messenger__from-name"],
                                textContent: r,
                              },
                              {
                                tagName: "div",
                                classNames: ["messenger__text"],
                                textContent: e.text,
                              },
                              {
                                tagName: "div",
                                classNames: ["messenger__status"],
                              },
                            ]);
                            const l =
                                document.querySelectorAll(".messenger__status"),
                              d = l[l.length - 1],
                              u = d.parentElement || null;
                            let m, g;
                            (m =
                              !0 === e.status.isDelivered &&
                              u?.classList.contains("messenger__sended-message")
                                ? "delivererd"
                                : ""),
                              (g = !0 === e.status.isEdited ? "edited" : ""),
                              t(d, [
                                {
                                  tagName: "div",
                                  classNames: ["messenger__send-satus"],
                                  textContent: m,
                                },
                                {
                                  tagName: "div",
                                  classNames: ["messenger__read-status"],
                                },
                                {
                                  tagName: "div",
                                  classNames: ["messenger__eidt-status"],
                                  textContent: g,
                                },
                              ]);
                          }),
                            l();
                        } else
                          console.log("нет истории сообщения"),
                            t(s, [
                              {
                                tagName: "div",
                                classNames: ["messenger__empty-history"],
                                textContent: "start communication",
                              },
                            ]);
                      })(s.payload.messages),
                    "MSG_DELIVER" === n &&
                      (function (e) {
                        const t = document.querySelector(`[id="${e}"]`),
                          s = t?.querySelector(".messenger__send-satus");
                        (s.textContent = "delivered"), l();
                      })(s.payload.message.id),
                    "MSG_EDIT" === n &&
                      null === s.id &&
                      (function (e, t) {
                        const s = document.querySelector(`[id="${e}"]`),
                          n = s.querySelector(".messenger__eidt-status"),
                          o = s.querySelector(".messenger__text");
                        (n.textContent = "edited"), (o.textContent = t);
                      })(s.payload.message.id, s.payload.message.text),
                    "MSG_DELETE" === n &&
                      null === s.id &&
                      (function (e) {
                        const t = document.querySelector(`[id="${e}"]`),
                          { parentElement: s } = t,
                          n = document.querySelector(".messenger__chat-window");
                        s &&
                          (s.removeChild(t), 0 === n.childElementCount && u());
                      })(s.payload.message.id);
                });
              const e = document.querySelector(".wrapper-popup-connecting"),
                s = sessionStorage.getItem("userData_iambigbobby"),
                n = JSON.parse(s);
              if (e) {
                const t = e.parentElement;
                t && t.removeChild(e);
              }
              null !== n && g.addUser(n.login, n.password);
            }),
            this.socket.addEventListener("close", () => {
              console.log("Disconnected from WebSocket server"),
                document.querySelector(".wrapper-popup-connecting") ||
                  (function () {
                    const { body: e } = document;
                    t(e, [
                      {
                        tagName: "div",
                        classNames: ["wrapper-popup-connecting"],
                      },
                    ]),
                      t(document.querySelector(".wrapper-popup-connecting"), [
                        {
                          tagName: "div",
                          classNames: ["popup-connecting-container"],
                          textContent: "Lost connection. Try to connect",
                        },
                      ]),
                      (function () {
                        const e = document.querySelector(
                          ".popup-connecting-container",
                        );
                        let t = 0;
                        setInterval(function () {
                          t < 3
                            ? ((e.textContent += "."), (t += 1))
                            : ((e.textContent =
                                "Lost connection. Try to connect"),
                              (t = 0));
                        }, 1e3);
                      })();
                  })(),
                this.reconnect();
            }),
            this.socket.addEventListener("error", () => {
              console.log("WebSocket error");
            });
        }
        onConnect(e) {
          this.socket
            ? this.socket.addEventListener("open", e)
            : console.error("WebSocket connection not established");
        }
        addUser(e, t) {
          const s = {
            id: a(),
            type: "USER_LOGIN",
            payload: { user: { login: e, password: t } },
          };
          this.send(JSON.stringify(s));
        }
        logout(e, t) {
          const s = {
            id: a(),
            type: "USER_LOGOUT",
            payload: { user: { login: e, password: t } },
          };
          this.send(JSON.stringify(s));
        }
        send(e) {
          this.socket
            ? this.socket.send(e)
            : console.error("WebSocket connection not established or closed");
        }
        showMessageData(e) {
          this.socket
            ? this.socket.addEventListener("message", (t) => {
                e(t.data);
              })
            : console.error("WebSocket connection not established");
        }
        getAllAuthenticatedUsers() {
          const e = { id: a(), type: "USER_ACTIVE", payload: null };
          this.send(JSON.stringify(e));
        }
        getAllUnauthenticatedUsers() {
          const e = { id: a(), type: "USER_INACTIVE", payload: null };
          this.send(JSON.stringify(e));
        }
        sendingMessage(e, t) {
          const s = {
            id: a(),
            type: "MSG_SEND",
            payload: { message: { to: e, text: t } },
          };
          this.send(JSON.stringify(s));
        }
        fetchingMessageHistory(e) {
          const t = {
            id: a(),
            type: "MSG_FROM_USER",
            payload: { user: { login: e } },
          };
          this.send(JSON.stringify(t));
        }
        messageTextEditing(e, t) {
          const s = {
            id: a(),
            type: "MSG_EDIT",
            payload: { message: { id: e, text: t } },
          };
          this.send(JSON.stringify(s));
        }
        deleteMessage(e) {
          const t = {
            id: a(),
            type: "MSG_DELETE",
            payload: { message: { id: e } },
          };
          this.send(JSON.stringify(t));
        }
        disconnect() {
          this.socket && (this.socket.close(), (this.socket = null));
        }
        reconnect() {
          setTimeout(() => {
            this.connect(), console.log("try to reconect");
          }, 1e3);
        }
      })();
      m.connect();
      const g = m;
      function _(e) {
        const s = document.querySelector(".messenger__chat-window"),
          n = new Date(),
          o = sessionStorage.getItem("userData_iambigbobby"),
          a = JSON.parse(o);
        t(s, [
          {
            tagName: "div",
            classNames: ["messenger__message", "messenger__sended-message"],
          },
        ]);
        const r = document.querySelectorAll(".messenger__message");
        t(r[r.length - 1], [
          {
            tagName: "div",
            classNames: ["messenger__time"],
            textContent: c(n),
          },
          {
            tagName: "div",
            classNames: ["messenger__from-name"],
            textContent: a.login,
          },
          { tagName: "div", classNames: ["messenger__text"], textContent: e },
          { tagName: "div", classNames: ["messenger__status"] },
        ]);
        const i = document.querySelectorAll(".messenger__status");
        t(i[i.length - 1], [
          { tagName: "div", classNames: ["messenger__send-satus"] },
          { tagName: "div", classNames: ["messenger__read-status"] },
          { tagName: "div", classNames: ["messenger__eidt-status"] },
        ]);
      }
      function p() {
        const e = document.querySelector(".messenger__chat-input");
        "" !== r.text.trim() &&
          (document.querySelector(".messenger__empty-history") && d(),
          _(r.text),
          g.sendingMessage(r.to, r.text),
          (e.value = ""),
          (r.text = ""),
          l());
      }
      function y(e) {
        const t = document.querySelector(".messenger__chat-input"),
          s = document.querySelector(".messenger__chat-send-button"),
          n = document.querySelector(".messenger__chat-edit-button");
        !s ||
          s.classList.contains("messenger__chat-send-button_disabled") ||
          "Enter" !== e.key ||
          n.classList.contains("messenger__chat-edit-button_visible") ||
          "" === r.text.trim() ||
          (document.querySelector(".messenger__empty-history") && d(),
          g.sendingMessage(r.to, r.text),
          _(r.text),
          (t.value = ""),
          (r.text = ""),
          l());
      }
      const v = { id: "", text: "" };
      function h() {
        !(function () {
          const e = document.querySelector(".input-find-users");
          e.addEventListener("input", () => {
            document
              .querySelectorAll(".messenger__users-list-element")
              .forEach((t) => {
                t.classList.remove("messenger__users-list-element_hidden"),
                  t.textContent?.startsWith(e.value) ||
                    t.classList.add("messenger__users-list-element_hidden");
              });
          });
        })(),
          (function () {
            const e = document.querySelector(".messenger__chat-input");
            e.addEventListener("input", () => {
              r.text = e.value;
            });
          })(),
          document
            .querySelector(".messenger__chat-send-button")
            .addEventListener("click", p),
          document.addEventListener("keydown", y),
          (function () {
            const e = document.querySelector(".edit-menu");
            document.addEventListener("contextmenu", (t) => {
              t.preventDefault();
              const s = t.target.closest(".messenger__sended-message");
              if (s) {
                const n = s.querySelector(".messenger__text").textContent,
                  o = s.getAttribute("id");
                (e.style.display = "block"),
                  (e.style.left = `${t.clientX}px`),
                  (e.style.top = `${t.clientY}px`),
                  (v.id = o),
                  (v.text = n);
              }
            });
          })(),
          (function () {
            const e = document.querySelector(".edit-menu__edit"),
              t = document.querySelector(".edit-menu__delete");
            e.addEventListener("click", (e) => {
              e.target.classList.contains("edit-menu__edit") &&
                (function (e) {
                  const t = document.querySelector(
                      ".messenger__chat-edit-button",
                    ),
                    s = document.querySelector(
                      ".messenger__chat-cancel-edit-button",
                    ),
                    n = document.querySelector(".messenger__chat-send-button"),
                    o = document.querySelector(".messenger__chat-input");
                  t.classList.add("messenger__chat-edit-button_visible"),
                    s.classList.add(
                      "messenger__chat-cancel-edit-button_visible",
                    ),
                    n.classList.add("messenger__chat-send-button_hidden"),
                    (o.value = e);
                })(v.text);
            }),
              t.addEventListener("click", (e) => {
                e.target.classList.contains("edit-menu__delete") &&
                  (function (e) {
                    const t = document.querySelector(`[id="${e}"]`),
                      { parentElement: s } = t,
                      n = document.querySelector(".messenger__chat-window");
                    s &&
                      (s.removeChild(t),
                      g.deleteMessage(e),
                      0 === n.childElementCount && u());
                  })(v.id);
              });
          })(),
          document.addEventListener("click", () => {
            const e = document.querySelector(".edit-menu");
            e && (e.style.display = "none");
          }),
          (function () {
            const e = document.querySelector(".messenger__chat-edit-button"),
              t = document.querySelector(".messenger__chat-input");
            e.addEventListener("click", () => {
              const e = document.querySelector(`[id="${v.id}"]`),
                s = e.querySelector(".messenger__eidt-status");
              (e.querySelector(".messenger__text").textContent = t.value),
                (s.textContent = "edited"),
                g.messageTextEditing(v.id, t.value),
                (t.value = ""),
                o();
            });
          })(),
          document
            .querySelector(".messenger__chat-cancel-edit-button")
            .addEventListener("click", () => {
              o();
            });
      }
      function f(e) {
        const s = document.querySelector(`.${e}`);
        t(s, [{ tagName: "div", classNames: ["messenger__header"] }]);
        const n = document.querySelector(".messenger__header"),
          o = sessionStorage.getItem("userData_iambigbobby");
        t(n, [
          {
            tagName: "div",
            classNames: ["header__user"],
            textContent: `user: ${JSON.parse(o).login}`,
          },
          {
            tagName: "div",
            classNames: ["header__app-name"],
            textContent: "Fun chat",
          },
          {
            tagName: "button",
            classNames: ["log-out-button"],
            textContent: "log out",
          },
          {
            tagName: "button",
            classNames: ["about-button"],
            textContent: "about",
          },
        ]),
          t(s, [{ tagName: "div", classNames: ["edit-menu"] }]),
          t(document.querySelector(".edit-menu"), [
            {
              tagName: "div",
              classNames: ["edit-menu__edit"],
              textContent: "edit",
            },
            {
              tagName: "div",
              classNames: ["edit-menu__delete"],
              textContent: "delete",
            },
          ]),
          t(s, [{ tagName: "div", classNames: ["messenger__container"] }]),
          t(document.querySelector(".messenger__container"), [
            { tagName: "div", classNames: ["messenger__users"] },
            { tagName: "div", classNames: ["messenger__chat"] },
          ]),
          t(document.querySelector(".messenger__chat"), [
            { tagName: "div", classNames: ["messenger__chat-window"] },
            { tagName: "div", classNames: ["messenger__container-input"] },
          ]),
          t(document.querySelector(".messenger__container-input"), [
            {
              tagName: "input",
              classNames: [
                "messenger__chat-input",
                "messenger__chat-input_disabled",
              ],
              attributes: { type: "text", placeholder: "send message" },
            },
            {
              tagName: "button",
              classNames: [
                "messenger__chat-send-button",
                "messenger__chat-send-button_disabled",
              ],
              textContent: "send",
            },
            {
              tagName: "button",
              classNames: ["messenger__chat-edit-button"],
              textContent: "edit",
            },
            {
              tagName: "button",
              classNames: ["messenger__chat-cancel-edit-button"],
              textContent: "cancel edit",
            },
          ]),
          t(document.querySelector(".messenger__chat-window"), [
            {
              tagName: "div",
              classNames: ["messenger__window-messenger"],
              textContent: "select user",
            },
          ]),
          t(document.querySelector(".messenger__users"), [
            {
              tagName: "input",
              classNames: ["input-find-users"],
              attributes: { type: "text", placeholder: "enter user name" },
            },
            { tagName: "ul", classNames: ["messenger__users-list"] },
          ]),
          t(document.querySelector(".app"), [
            { tagName: "div", classNames: ["footer"] },
          ]),
          t(document.querySelector(".footer"), [
            { tagName: "div", classNames: ["footer__logo"] },
            { tagName: "div", classNames: ["footer__creater"] },
            {
              tagName: "div",
              classNames: ["footer_year"],
              textContent: "2024",
            },
          ]),
          t(document.querySelector(".footer__logo"), [
            {
              tagName: "a",
              classNames: ["footer__logo-link"],
              textContent: "RSSchool",
              attributes: { href: "https://rs.school/" },
            },
          ]),
          t(document.querySelector(".footer__creater"), [
            {
              tagName: "a",
              classNames: ["footer__creater-link"],
              textContent: "Denis Svetleishii",
              attributes: { href: "https://github.com/IamBigBobby" },
            },
          ]),
          g.getAllAuthenticatedUsers(),
          g.getAllUnauthenticatedUsers();
      }
      function b() {
        const e = document.querySelector(".app");
        for (; e.firstChild; ) e.removeChild(e.firstChild);
      }
      function S(e, s) {
        t(document.querySelector(".app"), [
          { tagName: "div", classNames: [e] },
        ]),
          s(e);
      }
      function N() {
        const e = document.querySelector(".wrapper-popup");
        e && e.parentNode?.removeChild(e);
      }
      function x() {
        new Promise((e) => {
          let s = !1;
          g.showMessageData((n) => {
            const o = ((a = n), JSON.parse(a));
            var a;
            const r = o.type,
              i = o.payload.error;
            "ERROR" === r &&
              ((s = !0),
              (function (e) {
                N();
                const { body: s } = document;
                t(s, [{ tagName: "div", classNames: ["wrapper-popup"] }]),
                  t(document.querySelector(".wrapper-popup"), [
                    { tagName: "div", classNames: ["popup-container"] },
                  ]),
                  t(document.querySelector(".popup-container"), [
                    {
                      tagName: "div",
                      classNames: ["popup-info"],
                      textContent: e,
                    },
                    {
                      tagName: "button",
                      classNames: ["popup-button"],
                      textContent: "Ok",
                    },
                  ]);
                const n = document.querySelector(".popup-button");
                n?.addEventListener("click", N);
              })(i)),
              e(s);
          });
        }).then((e) => {
          !1 === e &&
            (b(),
            window.history.replaceState(null, "", "message"),
            S("message", f),
            h());
        });
      }
      function w() {
        const e = document.querySelector(".input-login"),
          t = document.querySelector(".input-password"),
          s = document.querySelector(".log-in-button"),
          n = e.value,
          o = t.value;
        (e.value = ""), (t.value = "");
        const a = JSON.stringify({ login: n, password: o });
        sessionStorage.setItem("userData_iambigbobby", a),
          g.addUser(n, o),
          s.classList.add("log-in-button_disabled"),
          x();
      }
      function E(e) {
        t(document.querySelector(`.${e}`), [
          {
            tagName: "div",
            classNames: ["about__message"],
            textContent:
              "This application is developed by Denis Svetleishii RS-2023Q4",
          },
          {
            tagName: "button",
            classNames: ["back-about-button"],
            textContent: "back",
          },
        ]);
      }
      var q = s(72),
        L = s.n(q),
        C = s(825),
        k = s.n(C),
        A = s(659),
        O = s.n(A),
        D = s(56),
        M = s.n(D),
        T = s(540),
        I = s.n(T),
        R = s(113),
        U = s.n(R),
        J = s(11),
        $ = {};
      ($.styleTagTransform = U()),
        ($.setAttributes = M()),
        ($.insert = O().bind(null, "head")),
        ($.domAPI = k()),
        ($.insertStyleElement = I()),
        L()(J.A, $),
        J.A && J.A.locals && J.A.locals,
        (function () {
          window.addEventListener("beforeunload", () => {
            sessionStorage.removeItem("userData_iambigbobby");
          });
          const { body: s } = document;
          t(s, [{ tagName: "div", classNames: ["app"] }]),
            window.history.replaceState(null, "", "login"),
            S("login", n),
            e(),
            document.addEventListener("click", (e) => {
              e.target.classList.contains("log-in-button") &&
                (console.log("log-in"), w(), x());
            }),
            document.addEventListener("keydown", (e) => {
              const t = document.querySelector(".log-in-button");
              t &&
                (t.classList.contains("log-in-button_disabled") ||
                  "Enter" !== e.key ||
                  (console.log("log-in"), e.preventDefault(), w()));
            }),
            document.addEventListener("click", (t) => {
              if (t.target.classList.contains("log-out-button")) {
                console.log("log-out"), (r.to = ""), (r.text = "");
                const t = sessionStorage.getItem("userData_iambigbobby"),
                  s = JSON.parse(t);
                g.logout(s.login, s.password),
                  sessionStorage.removeItem("userData_iambigbobby"),
                  b(),
                  window.history.replaceState(null, "", "login"),
                  S("login", n),
                  e();
              }
            }),
            document.addEventListener("click", (e) => {
              e.target.classList.contains("about-button") &&
                (b(),
                window.history.replaceState(null, "", "about"),
                S("about", E));
            }),
            document.addEventListener("click", (t) => {
              t.target.classList.contains("back-about-button") &&
                (null === sessionStorage.getItem("userData_iambigbobby")
                  ? (b(),
                    window.history.replaceState(null, "", "login"),
                    S("login", n),
                    e())
                  : (console.log("уже в мессенджере"),
                    b(),
                    window.history.replaceState(null, "", "message"),
                    S("message", f),
                    h()));
            });
        })();
    })();
})();
