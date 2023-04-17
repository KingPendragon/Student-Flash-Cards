/*! For license information please see frame.bundle.js.LICENSE.txt */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports["h5p-standalone"] = t())
    : (e.H5PStandalone = t());
})(self, function () {
  return (() => {
    var e = {
        41: () => {
          H5P.ActionBar = (function (e, t) {
            "use strict";
            function n(e) {
              t.call(this);
              var n = this,
                r = !1,
                i = H5P.jQuery('<ul class="h5p-actions"></ul>'),
                o = function (e, t) {
                  var o = function () {
                    n.trigger(e);
                  };
                  H5P.jQuery("<li/>", {
                    class: "h5p-button h5p-noselect h5p-" + (t || e),
                    role: "button",
                    tabindex: 0,
                    title: H5P.t(e + "Description"),
                    html: H5P.t(e),
                    on: {
                      click: o,
                      keypress: function (e) {
                        32 === e.which && (o(), e.preventDefault());
                      },
                    },
                    appendTo: i,
                  }),
                    (r = !0);
                };
              (e.export || e.copy) && o("reuse", "export"),
                e.copyright && o("copyrights"),
                e.embed && o("embed"),
                e.icon &&
                  (H5P.jQuery(
                    '<li><a class="h5p-link" href="http://h5p.org" target="_blank" title="' +
                      H5P.t("h5pDescription") +
                      '"></a></li>'
                  ).appendTo(i),
                  (r = !0)),
                (n.getDOMElement = function () {
                  return i;
                }),
                (n.hasActions = function () {
                  return r;
                });
            }
            return (
              (n.prototype = Object.create(t.prototype)),
              (n.prototype.constructor = n),
              n
            );
          })(H5P.jQuery, H5P.EventDispatcher);
        },
        644: () => {
          (H5P.ConfirmationDialog = (function (e) {
            "use strict";
            function t(t) {
              e.call(this);
              var n = this;
              H5P.ConfirmationDialog.uniqueId += 1;
              var r = H5P.ConfirmationDialog.uniqueId;
              function i(e) {
                n.hide(), n.trigger("confirmed"), e.preventDefault();
              }
              function o(e) {
                n.hide(), n.trigger("canceled"), e.preventDefault();
              }
              function a(e, t) {
                e.focus(), t.preventDefault();
              }
              ((t = t || {}).headerText =
                t.headerText || H5P.t("confirmDialogHeader")),
                (t.dialogText = t.dialogText || H5P.t("confirmDialogBody")),
                (t.cancelText = t.cancelText || H5P.t("cancelLabel")),
                (t.confirmText = t.confirmText || H5P.t("confirmLabel"));
              var s = !1,
                c = document.createElement("div");
              c.classList.add(
                "h5p-confirmation-dialog-background",
                "hidden",
                "hiding"
              );
              var l = document.createElement("div");
              l.classList.add("h5p-confirmation-dialog-popup", "hidden"),
                t.classes &&
                  t.classes.forEach(function (e) {
                    l.classList.add(e);
                  }),
                l.setAttribute("role", "dialog"),
                l.setAttribute(
                  "aria-labelledby",
                  "h5p-confirmation-dialog-dialog-text-" + r
                ),
                c.appendChild(l),
                l.addEventListener("keydown", function (e) {
                  27 === e.which && o(e);
                });
              var u = document.createElement("div");
              u.classList.add("h5p-confirmation-dialog-header"),
                l.appendChild(u);
              var d = document.createElement("div");
              d.classList.add("h5p-confirmation-dialog-header-text"),
                (d.innerHTML = t.headerText),
                u.appendChild(d);
              var f = document.createElement("div");
              f.classList.add("h5p-confirmation-dialog-body"), l.appendChild(f);
              var p = document.createElement("div");
              p.classList.add("h5p-confirmation-dialog-text"),
                (p.innerHTML = t.dialogText),
                (p.id = "h5p-confirmation-dialog-dialog-text-" + r),
                f.appendChild(p);
              var h = document.createElement("div");
              h.classList.add("h5p-confirmation-dialog-buttons"),
                f.appendChild(h);
              var g = document.createElement("button");
              g.classList.add("h5p-core-cancel-button"),
                (g.textContent = t.cancelText);
              var v = document.createElement("button");
              v.classList.add("h5p-core-button"),
                v.classList.add("h5p-confirmation-dialog-confirm-button"),
                (v.textContent = t.confirmText);
              var m,
                y,
                b = document.createElement("button");
              b.classList.add("h5p-confirmation-dialog-exit"),
                b.setAttribute("aria-hidden", "true"),
                (b.tabIndex = -1),
                (b.title = t.cancelText),
                g.addEventListener("click", o),
                g.addEventListener("keydown", function (e) {
                  32 === e.which
                    ? o(e)
                    : 9 === e.which && e.shiftKey && a(v, e);
                }),
                t.hideCancel ? h.classList.add("center") : h.appendChild(g),
                v.addEventListener("click", i),
                v.addEventListener("keydown", function (e) {
                  32 === e.which
                    ? i(e)
                    : 9 !== e.which || e.shiftKey || a(t.hideCancel ? v : g, e);
                }),
                h.appendChild(v),
                b.addEventListener("click", o),
                b.addEventListener("keydown", function (e) {
                  32 === e.which && o(e);
                }),
                t.hideExit || l.appendChild(b);
              var x,
                w = [],
                C = [];
              this.appendTo = function (e) {
                return (m = e), this;
              };
              var T = function (e) {
                  c.contains(e.target) || (e.preventDefault(), v.focus());
                },
                P = function (e) {
                  var t,
                    n = [],
                    r = e.parentNode.children;
                  for (t = 0; t < r.length; t += 1)
                    (n[t] = !!r[t].getAttribute("aria-hidden")),
                      r[t] !== e && r[t].setAttribute("aria-hidden", !0);
                  return n;
                },
                E = function (e, t) {
                  var n,
                    r = e.parentNode.children;
                  for (n = 0; n < r.length; n += 1)
                    r[n] === e || t[n] || r[n].removeAttribute("aria-hidden");
                };
              (this.show = function (e) {
                return (
                  (x = document.activeElement),
                  m.appendChild(c),
                  (y = m.parentNode || m).addEventListener("focus", T, !0),
                  (w = P(m)),
                  (C = P(c)),
                  c.classList.remove("hidden"),
                  (function (e) {
                    var t = parseInt(l.style.top, 10);
                    void 0 !== e && (t = e),
                      t || (t = 0),
                      t + l.offsetHeight > m.offsetHeight &&
                        (t = m.offsetHeight - l.offsetHeight - 8),
                      t - 32 <= 0 && ((t = 40), (s = !0)),
                      (l.style.top = t + "px");
                  })(e),
                  setTimeout(function () {
                    l.classList.remove("hidden"),
                      c.classList.remove("hiding"),
                      setTimeout(function () {
                        if ((v.focus(), s && t.instance)) {
                          var e = parseInt(l.offsetHeight, 10) + 32 + 16;
                          n.setViewPortMinimumHeight(e),
                            t.instance.trigger("resize"),
                            (s = !1);
                        }
                      }, 100);
                  }, 0),
                  this
                );
              }),
                (this.hide = function () {
                  return (
                    c.classList.add("hiding"),
                    l.classList.add("hidden"),
                    y.removeAttribute("aria-hidden"),
                    y.removeEventListener("focus", T, !0),
                    t.skipRestoreFocus || x.focus(),
                    E(m, w),
                    E(c, C),
                    setTimeout(function () {
                      c.classList.add("hidden"),
                        m.removeChild(c),
                        n.setViewPortMinimumHeight(null);
                    }, 100),
                    this
                  );
                }),
                (this.getElement = function () {
                  return l;
                }),
                (this.getPreviouslyFocused = function () {
                  return x;
                }),
                (this.setViewPortMinimumHeight = function (e) {
                  (
                    document.querySelector(".h5p-container") || document.body
                  ).style.minHeight = "number" == typeof e ? e + "px" : e;
                });
            }
            return (
              (t.prototype = Object.create(e.prototype)),
              (t.prototype.constructor = t),
              t
            );
          })(H5P.EventDispatcher)),
            (H5P.ConfirmationDialog.uniqueId = -1);
        },
        798: () => {
          H5P.ContentType = function (e) {
            function t() {}
            return (
              (t.prototype = new H5P.EventDispatcher()),
              (t.prototype.isRoot = function () {
                return e;
              }),
              (t.prototype.getLibraryFilePath = function (e) {
                return (
                  H5P.getLibraryPath(this.libraryInfo.versionedNameNoSpaces) +
                  "/" +
                  e
                );
              }),
              t
            );
          };
        },
        449: () => {
          var e = (window.H5P = window.H5P || {});
          (e.Event = function (e, t, n) {
            (this.type = e), (this.data = t);
            var r = !1,
              i = !1,
              o = !1;
            void 0 === n && (n = {}),
              !0 === n.bubbles && (r = !0),
              !0 === n.external && (i = !0),
              (this.preventBubbling = function () {
                r = !1;
              }),
              (this.getBubbles = function () {
                return r;
              }),
              (this.scheduleForExternal = function () {
                return !(!i || o || ((o = !0), 0));
              });
          }),
            (e.EventDispatcher = function () {
              var t = this,
                n = {};
              (this.on = function (e, r, i) {
                if ("function" != typeof r)
                  throw TypeError("listener must be a function");
                t.trigger("newListener", { type: e, listener: r });
                var o = { listener: r, thisArg: i };
                n[e] ? n[e].push(o) : (n[e] = [o]);
              }),
                (this.once = function (e, n, r) {
                  if (!(n instanceof Function))
                    throw TypeError("listener must be a function");
                  var i = function (e) {
                    t.off(e.type, i), n.call(this, e);
                  };
                  t.on(e, i, r);
                }),
                (this.off = function (e, r) {
                  if (void 0 !== r && !(r instanceof Function))
                    throw TypeError("listener must be a function");
                  if (void 0 !== n[e]) {
                    if (void 0 === r)
                      return delete n[e], void t.trigger("removeListener", e);
                    for (var i = 0; i < n[e].length; i++)
                      if (n[e][i].listener === r) {
                        n[e].splice(i, 1),
                          t.trigger("removeListener", e, { listener: r });
                        break;
                      }
                    n[e].length || delete n[e];
                  }
                });
              var r = function (e, t) {
                if (void 0 !== n[e])
                  for (var r = n[e].slice(), i = 0; i < r.length; i++) {
                    var o = r[i],
                      a = o.thisArg ? o.thisArg : this;
                    o.listener.call(a, t);
                  }
              };
              this.trigger = function (n, i, o) {
                if (void 0 !== n) {
                  n instanceof String || "string" == typeof n
                    ? (n = new e.Event(n, i, o))
                    : void 0 !== i && (n.data = i);
                  var a = n.scheduleForExternal();
                  r.call(this, n.type, n),
                    r.call(this, "*", n),
                    n.getBubbles() &&
                      t.parent instanceof e.EventDispatcher &&
                      (t.parent.trigger instanceof Function ||
                        "function" == typeof t.parent.trigger) &&
                      t.parent.trigger(n),
                    a && e.externalDispatcher.trigger.call(this, n);
                }
              };
            });
        },
        2: () => {
          var e = (window.H5P = window.H5P || {});
          (e.XAPIEvent = function () {
            e.Event.call(
              this,
              "xAPI",
              { statement: {} },
              { bubbles: !0, external: !0 }
            );
          }),
            (e.XAPIEvent.prototype = Object.create(e.Event.prototype)),
            (e.XAPIEvent.prototype.constructor = e.XAPIEvent),
            (e.XAPIEvent.prototype.setScoredResult = function (e, t, n, r, i) {
              if (
                ((this.data.statement.result = {}),
                void 0 !== e &&
                  (void 0 === t
                    ? (this.data.statement.result.score = { raw: e })
                    : ((this.data.statement.result.score = {
                        min: 0,
                        max: t,
                        raw: e,
                      }),
                      t > 0 &&
                        (this.data.statement.result.score.scaled =
                          Math.round((e / t) * 1e4) / 1e4))),
                (this.data.statement.result.completion =
                  void 0 === r
                    ? "completed" === this.getVerb() ||
                      "answered" === this.getVerb()
                    : r),
                void 0 !== i && (this.data.statement.result.success = i),
                n && n.activityStartTime)
              ) {
                var o =
                  Math.round((Date.now() - n.activityStartTime) / 10) / 100;
                this.data.statement.result.duration = "PT" + o + "S";
              }
            }),
            (e.XAPIEvent.prototype.setVerb = function (t) {
              -1 !== e.jQuery.inArray(t, e.XAPIEvent.allowedXAPIVerbs)
                ? (this.data.statement.verb = {
                    id: "http://adlnet.gov/expapi/verbs/" + t,
                    display: { "en-US": t },
                  })
                : void 0 !== t.id && (this.data.statement.verb = t);
            }),
            (e.XAPIEvent.prototype.getVerb = function (e) {
              var t = this.data.statement;
              return "verb" in t
                ? !0 === e
                  ? t.verb
                  : t.verb.id.slice(31)
                : null;
            }),
            (e.XAPIEvent.prototype.setObject = function (t) {
              if (t.contentId)
                if (
                  ((this.data.statement.object = {
                    id: this.getContentXAPIId(t),
                    objectType: "Activity",
                    definition: {
                      extensions: {
                        "http://h5p.org/x-api/h5p-local-content-id":
                          t.contentId,
                      },
                    },
                  }),
                  t.subContentId)
                )
                  (this.data.statement.object.definition.extensions[
                    "http://h5p.org/x-api/h5p-subContentId"
                  ] = t.subContentId),
                    "function" == typeof t.getTitle &&
                      (this.data.statement.object.definition.name = {
                        "en-US": t.getTitle(),
                      });
                else {
                  var n = e.getContentForInstance(t.contentId);
                  n &&
                    n.metadata &&
                    n.metadata.title &&
                    (this.data.statement.object.definition.name = {
                      "en-US": e.createTitle(n.metadata.title),
                    });
                }
              else this.data.statement.object = { definition: {} };
            }),
            (e.XAPIEvent.prototype.setContext = function (e) {
              e.parent &&
                (e.parent.contentId || e.parent.subContentId) &&
                (this.data.statement.context = {
                  contextActivities: {
                    parent: [
                      {
                        id: this.getContentXAPIId(e.parent),
                        objectType: "Activity",
                      },
                    ],
                  },
                }),
                e.libraryInfo &&
                  (void 0 === this.data.statement.context &&
                    (this.data.statement.context = { contextActivities: {} }),
                  (this.data.statement.context.contextActivities.category = [
                    {
                      id:
                        "http://h5p.org/libraries/" +
                        e.libraryInfo.versionedNameNoSpaces,
                      objectType: "Activity",
                    },
                  ]));
            }),
            (e.XAPIEvent.prototype.setActor = function () {
              if (void 0 !== H5PIntegration.user)
                this.data.statement.actor = {
                  name: H5PIntegration.user.name,
                  mbox: "mailto:" + H5PIntegration.user.mail,
                  objectType: "Agent",
                };
              else {
                var t;
                try {
                  localStorage.H5PUserUUID
                    ? (t = localStorage.H5PUserUUID)
                    : ((t = e.createUUID()), (localStorage.H5PUserUUID = t));
                } catch (n) {
                  t = "not-trackable-" + e.createUUID();
                }
                this.data.statement.actor = {
                  account: { name: t, homePage: H5PIntegration.siteUrl },
                  objectType: "Agent",
                };
              }
            }),
            (e.XAPIEvent.prototype.getMaxScore = function () {
              return this.getVerifiedStatementValue(["result", "score", "max"]);
            }),
            (e.XAPIEvent.prototype.getScore = function () {
              return this.getVerifiedStatementValue(["result", "score", "raw"]);
            }),
            (e.XAPIEvent.prototype.getContentXAPIId = function (e) {
              var t;
              return (
                e.contentId &&
                  H5PIntegration &&
                  H5PIntegration.contents &&
                  H5PIntegration.contents["cid-" + e.contentId] &&
                  ((t = H5PIntegration.contents["cid-" + e.contentId].url),
                  e.subContentId && (t += "?subContentId=" + e.subContentId)),
                t
              );
            }),
            (e.XAPIEvent.prototype.isFromChild = function () {
              var e = this.getVerifiedStatementValue([
                "context",
                "contextActivities",
                "parent",
                0,
                "id",
              ]);
              return !e || -1 === e.indexOf("subContentId");
            }),
            (e.XAPIEvent.prototype.getVerifiedStatementValue = function (e) {
              for (var t = this.data.statement, n = 0; n < e.length; n++) {
                if (void 0 === t[e[n]]) return null;
                t = t[e[n]];
              }
              return t;
            }),
            (e.XAPIEvent.allowedXAPIVerbs = [
              "answered",
              "asked",
              "attempted",
              "attended",
              "commented",
              "completed",
              "exited",
              "experienced",
              "failed",
              "imported",
              "initialized",
              "interacted",
              "launched",
              "mastered",
              "passed",
              "preferred",
              "progressed",
              "registered",
              "responded",
              "resumed",
              "scored",
              "shared",
              "suspended",
              "terminated",
              "voided",
              "downloaded",
              "copied",
              "accessed-reuse",
              "accessed-embed",
              "accessed-copyright",
            ]);
        },
        268: () => {
          var e = (window.H5P = window.H5P || {});
          (e.externalDispatcher = new e.EventDispatcher()),
            (e.EventDispatcher.prototype.triggerXAPI = function (e, t) {
              this.trigger(this.createXAPIEventTemplate(e, t));
            }),
            (e.EventDispatcher.prototype.createXAPIEventTemplate = function (
              t,
              n
            ) {
              var r = new e.XAPIEvent();
              if ((r.setActor(), r.setVerb(t), void 0 !== n))
                for (var i in n) r.data.statement[i] = n[i];
              return (
                "object" in r.data.statement || r.setObject(this),
                "context" in r.data.statement || r.setContext(this),
                r
              );
            }),
            (e.EventDispatcher.prototype.triggerXAPICompleted = function (
              e,
              t,
              n
            ) {
              this.triggerXAPIScored(e, t, "completed", !0, n);
            }),
            (e.EventDispatcher.prototype.triggerXAPIScored = function (
              e,
              t,
              n,
              r,
              i
            ) {
              var o = this.createXAPIEventTemplate(n);
              o.setScoredResult(e, t, this, r, i), this.trigger(o);
            }),
            (e.EventDispatcher.prototype.setActivityStarted = function () {
              void 0 === this.activityStartTime &&
                (void 0 !== this.contentId &&
                  void 0 !== H5PIntegration.contents &&
                  void 0 !== H5PIntegration.contents["cid-" + this.contentId] &&
                  this.triggerXAPI("attempted"),
                (this.activityStartTime = Date.now()));
            }),
            (e.xAPICompletedListener = function (t) {
              if (
                ("completed" === t.getVerb() || "answered" === t.getVerb()) &&
                !t.getVerifiedStatementValue([
                  "context",
                  "contextActivities",
                  "parent",
                ])
              ) {
                var n = t.getScore(),
                  r = t.getMaxScore(),
                  i = t.getVerifiedStatementValue([
                    "object",
                    "definition",
                    "extensions",
                    "http://h5p.org/x-api/h5p-local-content-id",
                  ]);
                e.setFinished(i, n, r);
              }
            });
        },
        357: function (e, t) {
          var n;
          !(function (t, n) {
            "use strict";
            "object" == typeof e.exports
              ? (e.exports = t.document
                  ? n(t, !0)
                  : function (e) {
                      if (!e.document)
                        throw new Error(
                          "jQuery requires a window with a document"
                        );
                      return n(e);
                    })
              : n(t);
          })("undefined" != typeof window ? window : this, function (r, i) {
            "use strict";
            var o = [],
              a = Object.getPrototypeOf,
              s = o.slice,
              c = o.flat
                ? function (e) {
                    return o.flat.call(e);
                  }
                : function (e) {
                    return o.concat.apply([], e);
                  },
              l = o.push,
              u = o.indexOf,
              d = {},
              f = d.toString,
              p = d.hasOwnProperty,
              h = p.toString,
              g = h.call(Object),
              v = {},
              m = function (e) {
                return "function" == typeof e && "number" != typeof e.nodeType;
              },
              y = function (e) {
                return null != e && e === e.window;
              },
              b = r.document,
              x = { type: !0, src: !0, nonce: !0, noModule: !0 };
            function w(e, t, n) {
              var r,
                i,
                o = (n = n || b).createElement("script");
              if (((o.text = e), t))
                for (r in x)
                  (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                    o.setAttribute(r, i);
              n.head.appendChild(o).parentNode.removeChild(o);
            }
            function C(e) {
              return null == e
                ? e + ""
                : "object" == typeof e || "function" == typeof e
                ? d[f.call(e)] || "object"
                : typeof e;
            }
            var T = "3.5.1",
              P = function (e, t) {
                return new P.fn.init(e, t);
              };
            function E(e) {
              var t = !!e && "length" in e && e.length,
                n = C(e);
              return (
                !m(e) &&
                !y(e) &&
                ("array" === n ||
                  0 === t ||
                  ("number" == typeof t && 0 < t && t - 1 in e))
              );
            }
            (P.fn = P.prototype =
              {
                jquery: T,
                constructor: P,
                length: 0,
                toArray: function () {
                  return s.call(this);
                },
                get: function (e) {
                  return null == e
                    ? s.call(this)
                    : e < 0
                    ? this[e + this.length]
                    : this[e];
                },
                pushStack: function (e) {
                  var t = P.merge(this.constructor(), e);
                  return (t.prevObject = this), t;
                },
                each: function (e) {
                  return P.each(this, e);
                },
                map: function (e) {
                  return this.pushStack(
                    P.map(this, function (t, n) {
                      return e.call(t, n, t);
                    })
                  );
                },
                slice: function () {
                  return this.pushStack(s.apply(this, arguments));
                },
                first: function () {
                  return this.eq(0);
                },
                last: function () {
                  return this.eq(-1);
                },
                even: function () {
                  return this.pushStack(
                    P.grep(this, function (e, t) {
                      return (t + 1) % 2;
                    })
                  );
                },
                odd: function () {
                  return this.pushStack(
                    P.grep(this, function (e, t) {
                      return t % 2;
                    })
                  );
                },
                eq: function (e) {
                  var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                  return this.pushStack(0 <= n && n < t ? [this[n]] : []);
                },
                end: function () {
                  return this.prevObject || this.constructor();
                },
                push: l,
                sort: o.sort,
                splice: o.splice,
              }),
              (P.extend = P.fn.extend =
                function () {
                  var e,
                    t,
                    n,
                    r,
                    i,
                    o,
                    a = arguments[0] || {},
                    s = 1,
                    c = arguments.length,
                    l = !1;
                  for (
                    "boolean" == typeof a &&
                      ((l = a), (a = arguments[s] || {}), s++),
                      "object" == typeof a || m(a) || (a = {}),
                      s === c && ((a = this), s--);
                    s < c;
                    s++
                  )
                    if (null != (e = arguments[s]))
                      for (t in e)
                        (r = e[t]),
                          "__proto__" !== t &&
                            a !== r &&
                            (l &&
                            r &&
                            (P.isPlainObject(r) || (i = Array.isArray(r)))
                              ? ((n = a[t]),
                                (o =
                                  i && !Array.isArray(n)
                                    ? []
                                    : i || P.isPlainObject(n)
                                    ? n
                                    : {}),
                                (i = !1),
                                (a[t] = P.extend(l, o, r)))
                              : void 0 !== r && (a[t] = r));
                  return a;
                }),
              P.extend({
                expando: "jQuery" + (T + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (e) {
                  throw new Error(e);
                },
                noop: function () {},
                isPlainObject: function (e) {
                  var t, n;
                  return !(
                    !e ||
                    "[object Object]" !== f.call(e) ||
                    ((t = a(e)) &&
                      ("function" !=
                        typeof (n =
                          p.call(t, "constructor") && t.constructor) ||
                        h.call(n) !== g))
                  );
                },
                isEmptyObject: function (e) {
                  var t;
                  for (t in e) return !1;
                  return !0;
                },
                globalEval: function (e, t, n) {
                  w(e, { nonce: t && t.nonce }, n);
                },
                each: function (e, t) {
                  var n,
                    r = 0;
                  if (E(e))
                    for (
                      n = e.length;
                      r < n && !1 !== t.call(e[r], r, e[r]);
                      r++
                    );
                  else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                  return e;
                },
                makeArray: function (e, t) {
                  var n = t || [];
                  return (
                    null != e &&
                      (E(Object(e))
                        ? P.merge(n, "string" == typeof e ? [e] : e)
                        : l.call(n, e)),
                    n
                  );
                },
                inArray: function (e, t, n) {
                  return null == t ? -1 : u.call(t, e, n);
                },
                merge: function (e, t) {
                  for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                    e[i++] = t[r];
                  return (e.length = i), e;
                },
                grep: function (e, t, n) {
                  for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                    !t(e[i], i) !== a && r.push(e[i]);
                  return r;
                },
                map: function (e, t, n) {
                  var r,
                    i,
                    o = 0,
                    a = [];
                  if (E(e))
                    for (r = e.length; o < r; o++)
                      null != (i = t(e[o], o, n)) && a.push(i);
                  else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                  return c(a);
                },
                guid: 1,
                support: v,
              }),
              "function" == typeof Symbol &&
                (P.fn[Symbol.iterator] = o[Symbol.iterator]),
              P.each(
                "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                  " "
                ),
                function (e, t) {
                  d["[object " + t + "]"] = t.toLowerCase();
                }
              );
            var S = (function (e) {
              var t,
                n,
                r,
                i,
                o,
                a,
                s,
                c,
                l,
                u,
                d,
                f,
                p,
                h,
                g,
                v,
                m,
                y,
                b,
                x = "sizzle" + 1 * new Date(),
                w = e.document,
                C = 0,
                T = 0,
                P = ce(),
                E = ce(),
                S = ce(),
                H = ce(),
                I = function (e, t) {
                  return e === t && (d = !0), 0;
                },
                D = {}.hasOwnProperty,
                k = [],
                A = k.pop,
                j = k.push,
                L = k.push,
                N = k.slice,
                q = function (e, t) {
                  for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                  return -1;
                },
                O =
                  "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                F = "[\\x20\\t\\r\\n\\f]",
                R =
                  "(?:\\\\[\\da-fA-F]{1,6}" +
                  F +
                  "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                M =
                  "\\[" +
                  F +
                  "*(" +
                  R +
                  ")(?:" +
                  F +
                  "*([*^$|!~]?=)" +
                  F +
                  "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                  R +
                  "))|)" +
                  F +
                  "*\\]",
                B =
                  ":(" +
                  R +
                  ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                  M +
                  ")*)|.*)\\)|)",
                Q = new RegExp(F + "+", "g"),
                z = new RegExp(
                  "^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$",
                  "g"
                ),
                U = new RegExp("^" + F + "*," + F + "*"),
                $ = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
                V = new RegExp(F + "|>"),
                X = new RegExp(B),
                W = new RegExp("^" + R + "$"),
                _ = {
                  ID: new RegExp("^#(" + R + ")"),
                  CLASS: new RegExp("^\\.(" + R + ")"),
                  TAG: new RegExp("^(" + R + "|[*])"),
                  ATTR: new RegExp("^" + M),
                  PSEUDO: new RegExp("^" + B),
                  CHILD: new RegExp(
                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                      F +
                      "*(even|odd|(([+-]|)(\\d*)n|)" +
                      F +
                      "*(?:([+-]|)" +
                      F +
                      "*(\\d+)|))" +
                      F +
                      "*\\)|)",
                    "i"
                  ),
                  bool: new RegExp("^(?:" + O + ")$", "i"),
                  needsContext: new RegExp(
                    "^" +
                      F +
                      "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                      F +
                      "*((?:-\\d)?\\d*)" +
                      F +
                      "*\\)|)(?=[^-]|$)",
                    "i"
                  ),
                },
                Y = /HTML$/i,
                J = /^(?:input|select|textarea|button)$/i,
                G = /^h\d$/i,
                K = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ee = /[+~]/,
                te = new RegExp(
                  "\\\\[\\da-fA-F]{1,6}" + F + "?|\\\\([^\\r\\n\\f])",
                  "g"
                ),
                ne = function (e, t) {
                  var n = "0x" + e.slice(1) - 65536;
                  return (
                    t ||
                    (n < 0
                      ? String.fromCharCode(n + 65536)
                      : String.fromCharCode(
                          (n >> 10) | 55296,
                          (1023 & n) | 56320
                        ))
                  );
                },
                re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                ie = function (e, t) {
                  return t
                    ? "\0" === e
                      ? "�"
                      : e.slice(0, -1) +
                        "\\" +
                        e.charCodeAt(e.length - 1).toString(16) +
                        " "
                    : "\\" + e;
                },
                oe = function () {
                  f();
                },
                ae = xe(
                  function (e) {
                    return (
                      !0 === e.disabled &&
                      "fieldset" === e.nodeName.toLowerCase()
                    );
                  },
                  { dir: "parentNode", next: "legend" }
                );
              try {
                L.apply((k = N.call(w.childNodes)), w.childNodes),
                  k[w.childNodes.length].nodeType;
              } catch (t) {
                L = {
                  apply: k.length
                    ? function (e, t) {
                        j.apply(e, N.call(t));
                      }
                    : function (e, t) {
                        for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                        e.length = n - 1;
                      },
                };
              }
              function se(e, t, r, i) {
                var o,
                  s,
                  l,
                  u,
                  d,
                  h,
                  m,
                  y = t && t.ownerDocument,
                  w = t ? t.nodeType : 9;
                if (
                  ((r = r || []),
                  "string" != typeof e ||
                    !e ||
                    (1 !== w && 9 !== w && 11 !== w))
                )
                  return r;
                if (!i && (f(t), (t = t || p), g)) {
                  if (11 !== w && (d = Z.exec(e)))
                    if ((o = d[1])) {
                      if (9 === w) {
                        if (!(l = t.getElementById(o))) return r;
                        if (l.id === o) return r.push(l), r;
                      } else if (
                        y &&
                        (l = y.getElementById(o)) &&
                        b(t, l) &&
                        l.id === o
                      )
                        return r.push(l), r;
                    } else {
                      if (d[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                      if (
                        (o = d[3]) &&
                        n.getElementsByClassName &&
                        t.getElementsByClassName
                      )
                        return L.apply(r, t.getElementsByClassName(o)), r;
                    }
                  if (
                    n.qsa &&
                    !H[e + " "] &&
                    (!v || !v.test(e)) &&
                    (1 !== w || "object" !== t.nodeName.toLowerCase())
                  ) {
                    if (
                      ((m = e), (y = t), 1 === w && (V.test(e) || $.test(e)))
                    ) {
                      for (
                        ((y = (ee.test(e) && me(t.parentNode)) || t) === t &&
                          n.scope) ||
                          ((u = t.getAttribute("id"))
                            ? (u = u.replace(re, ie))
                            : t.setAttribute("id", (u = x))),
                          s = (h = a(e)).length;
                        s--;

                      )
                        h[s] = (u ? "#" + u : ":scope") + " " + be(h[s]);
                      m = h.join(",");
                    }
                    try {
                      return L.apply(r, y.querySelectorAll(m)), r;
                    } catch (t) {
                      H(e, !0);
                    } finally {
                      u === x && t.removeAttribute("id");
                    }
                  }
                }
                return c(e.replace(z, "$1"), t, r, i);
              }
              function ce() {
                var e = [];
                return function t(n, i) {
                  return (
                    e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                    (t[n + " "] = i)
                  );
                };
              }
              function le(e) {
                return (e[x] = !0), e;
              }
              function ue(e) {
                var t = p.createElement("fieldset");
                try {
                  return !!e(t);
                } catch (e) {
                  return !1;
                } finally {
                  t.parentNode && t.parentNode.removeChild(t), (t = null);
                }
              }
              function de(e, t) {
                for (var n = e.split("|"), i = n.length; i--; )
                  r.attrHandle[n[i]] = t;
              }
              function fe(e, t) {
                var n = t && e,
                  r =
                    n &&
                    1 === e.nodeType &&
                    1 === t.nodeType &&
                    e.sourceIndex - t.sourceIndex;
                if (r) return r;
                if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                return e ? 1 : -1;
              }
              function pe(e) {
                return function (t) {
                  return "input" === t.nodeName.toLowerCase() && t.type === e;
                };
              }
              function he(e) {
                return function (t) {
                  var n = t.nodeName.toLowerCase();
                  return ("input" === n || "button" === n) && t.type === e;
                };
              }
              function ge(e) {
                return function (t) {
                  return "form" in t
                    ? t.parentNode && !1 === t.disabled
                      ? "label" in t
                        ? "label" in t.parentNode
                          ? t.parentNode.disabled === e
                          : t.disabled === e
                        : t.isDisabled === e ||
                          (t.isDisabled !== !e && ae(t) === e)
                      : t.disabled === e
                    : "label" in t && t.disabled === e;
                };
              }
              function ve(e) {
                return le(function (t) {
                  return (
                    (t = +t),
                    le(function (n, r) {
                      for (var i, o = e([], n.length, t), a = o.length; a--; )
                        n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                    })
                  );
                });
              }
              function me(e) {
                return e && void 0 !== e.getElementsByTagName && e;
              }
              for (t in ((n = se.support = {}),
              (o = se.isXML =
                function (e) {
                  var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                  return !Y.test(t || (n && n.nodeName) || "HTML");
                }),
              (f = se.setDocument =
                function (e) {
                  var t,
                    i,
                    a = e ? e.ownerDocument || e : w;
                  return (
                    a != p &&
                      9 === a.nodeType &&
                      a.documentElement &&
                      ((h = (p = a).documentElement),
                      (g = !o(p)),
                      w != p &&
                        (i = p.defaultView) &&
                        i.top !== i &&
                        (i.addEventListener
                          ? i.addEventListener("unload", oe, !1)
                          : i.attachEvent && i.attachEvent("onunload", oe)),
                      (n.scope = ue(function (e) {
                        return (
                          h.appendChild(e).appendChild(p.createElement("div")),
                          void 0 !== e.querySelectorAll &&
                            !e.querySelectorAll(":scope fieldset div").length
                        );
                      })),
                      (n.attributes = ue(function (e) {
                        return (
                          (e.className = "i"), !e.getAttribute("className")
                        );
                      })),
                      (n.getElementsByTagName = ue(function (e) {
                        return (
                          e.appendChild(p.createComment("")),
                          !e.getElementsByTagName("*").length
                        );
                      })),
                      (n.getElementsByClassName = K.test(
                        p.getElementsByClassName
                      )),
                      (n.getById = ue(function (e) {
                        return (
                          (h.appendChild(e).id = x),
                          !p.getElementsByName || !p.getElementsByName(x).length
                        );
                      })),
                      n.getById
                        ? ((r.filter.ID = function (e) {
                            var t = e.replace(te, ne);
                            return function (e) {
                              return e.getAttribute("id") === t;
                            };
                          }),
                          (r.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && g) {
                              var n = t.getElementById(e);
                              return n ? [n] : [];
                            }
                          }))
                        : ((r.filter.ID = function (e) {
                            var t = e.replace(te, ne);
                            return function (e) {
                              var n =
                                void 0 !== e.getAttributeNode &&
                                e.getAttributeNode("id");
                              return n && n.value === t;
                            };
                          }),
                          (r.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && g) {
                              var n,
                                r,
                                i,
                                o = t.getElementById(e);
                              if (o) {
                                if (
                                  (n = o.getAttributeNode("id")) &&
                                  n.value === e
                                )
                                  return [o];
                                for (
                                  i = t.getElementsByName(e), r = 0;
                                  (o = i[r++]);

                                )
                                  if (
                                    (n = o.getAttributeNode("id")) &&
                                    n.value === e
                                  )
                                    return [o];
                              }
                              return [];
                            }
                          })),
                      (r.find.TAG = n.getElementsByTagName
                        ? function (e, t) {
                            return void 0 !== t.getElementsByTagName
                              ? t.getElementsByTagName(e)
                              : n.qsa
                              ? t.querySelectorAll(e)
                              : void 0;
                          }
                        : function (e, t) {
                            var n,
                              r = [],
                              i = 0,
                              o = t.getElementsByTagName(e);
                            if ("*" === e) {
                              for (; (n = o[i++]); )
                                1 === n.nodeType && r.push(n);
                              return r;
                            }
                            return o;
                          }),
                      (r.find.CLASS =
                        n.getElementsByClassName &&
                        function (e, t) {
                          if (void 0 !== t.getElementsByClassName && g)
                            return t.getElementsByClassName(e);
                        }),
                      (m = []),
                      (v = []),
                      (n.qsa = K.test(p.querySelectorAll)) &&
                        (ue(function (e) {
                          var t;
                          (h.appendChild(e).innerHTML =
                            "<a id='" +
                            x +
                            "'></a><select id='" +
                            x +
                            "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                            e.querySelectorAll("[msallowcapture^='']").length &&
                              v.push("[*^$]=" + F + "*(?:''|\"\")"),
                            e.querySelectorAll("[selected]").length ||
                              v.push("\\[" + F + "*(?:value|" + O + ")"),
                            e.querySelectorAll("[id~=" + x + "-]").length ||
                              v.push("~="),
                            (t = p.createElement("input")).setAttribute(
                              "name",
                              ""
                            ),
                            e.appendChild(t),
                            e.querySelectorAll("[name='']").length ||
                              v.push(
                                "\\[" +
                                  F +
                                  "*name" +
                                  F +
                                  "*=" +
                                  F +
                                  "*(?:''|\"\")"
                              ),
                            e.querySelectorAll(":checked").length ||
                              v.push(":checked"),
                            e.querySelectorAll("a#" + x + "+*").length ||
                              v.push(".#.+[+~]"),
                            e.querySelectorAll("\\\f"),
                            v.push("[\\r\\n\\f]");
                        }),
                        ue(function (e) {
                          e.innerHTML =
                            "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                          var t = p.createElement("input");
                          t.setAttribute("type", "hidden"),
                            e.appendChild(t).setAttribute("name", "D"),
                            e.querySelectorAll("[name=d]").length &&
                              v.push("name" + F + "*[*^$|!~]?="),
                            2 !== e.querySelectorAll(":enabled").length &&
                              v.push(":enabled", ":disabled"),
                            (h.appendChild(e).disabled = !0),
                            2 !== e.querySelectorAll(":disabled").length &&
                              v.push(":enabled", ":disabled"),
                            e.querySelectorAll("*,:x"),
                            v.push(",.*:");
                        })),
                      (n.matchesSelector = K.test(
                        (y =
                          h.matches ||
                          h.webkitMatchesSelector ||
                          h.mozMatchesSelector ||
                          h.oMatchesSelector ||
                          h.msMatchesSelector)
                      )) &&
                        ue(function (e) {
                          (n.disconnectedMatch = y.call(e, "*")),
                            y.call(e, "[s!='']:x"),
                            m.push("!=", B);
                        }),
                      (v = v.length && new RegExp(v.join("|"))),
                      (m = m.length && new RegExp(m.join("|"))),
                      (t = K.test(h.compareDocumentPosition)),
                      (b =
                        t || K.test(h.contains)
                          ? function (e, t) {
                              var n = 9 === e.nodeType ? e.documentElement : e,
                                r = t && t.parentNode;
                              return (
                                e === r ||
                                !(
                                  !r ||
                                  1 !== r.nodeType ||
                                  !(n.contains
                                    ? n.contains(r)
                                    : e.compareDocumentPosition &&
                                      16 & e.compareDocumentPosition(r))
                                )
                              );
                            }
                          : function (e, t) {
                              if (t)
                                for (; (t = t.parentNode); )
                                  if (t === e) return !0;
                              return !1;
                            }),
                      (I = t
                        ? function (e, t) {
                            if (e === t) return (d = !0), 0;
                            var r =
                              !e.compareDocumentPosition -
                              !t.compareDocumentPosition;
                            return (
                              r ||
                              (1 &
                                (r =
                                  (e.ownerDocument || e) ==
                                  (t.ownerDocument || t)
                                    ? e.compareDocumentPosition(t)
                                    : 1) ||
                              (!n.sortDetached &&
                                t.compareDocumentPosition(e) === r)
                                ? e == p || (e.ownerDocument == w && b(w, e))
                                  ? -1
                                  : t == p || (t.ownerDocument == w && b(w, t))
                                  ? 1
                                  : u
                                  ? q(u, e) - q(u, t)
                                  : 0
                                : 4 & r
                                ? -1
                                : 1)
                            );
                          }
                        : function (e, t) {
                            if (e === t) return (d = !0), 0;
                            var n,
                              r = 0,
                              i = e.parentNode,
                              o = t.parentNode,
                              a = [e],
                              s = [t];
                            if (!i || !o)
                              return e == p
                                ? -1
                                : t == p
                                ? 1
                                : i
                                ? -1
                                : o
                                ? 1
                                : u
                                ? q(u, e) - q(u, t)
                                : 0;
                            if (i === o) return fe(e, t);
                            for (n = e; (n = n.parentNode); ) a.unshift(n);
                            for (n = t; (n = n.parentNode); ) s.unshift(n);
                            for (; a[r] === s[r]; ) r++;
                            return r
                              ? fe(a[r], s[r])
                              : a[r] == w
                              ? -1
                              : s[r] == w
                              ? 1
                              : 0;
                          })),
                    p
                  );
                }),
              (se.matches = function (e, t) {
                return se(e, null, null, t);
              }),
              (se.matchesSelector = function (e, t) {
                if (
                  (f(e),
                  n.matchesSelector &&
                    g &&
                    !H[t + " "] &&
                    (!m || !m.test(t)) &&
                    (!v || !v.test(t)))
                )
                  try {
                    var r = y.call(e, t);
                    if (
                      r ||
                      n.disconnectedMatch ||
                      (e.document && 11 !== e.document.nodeType)
                    )
                      return r;
                  } catch (e) {
                    H(t, !0);
                  }
                return 0 < se(t, p, null, [e]).length;
              }),
              (se.contains = function (e, t) {
                return (e.ownerDocument || e) != p && f(e), b(e, t);
              }),
              (se.attr = function (e, t) {
                (e.ownerDocument || e) != p && f(e);
                var i = r.attrHandle[t.toLowerCase()],
                  o =
                    i && D.call(r.attrHandle, t.toLowerCase())
                      ? i(e, t, !g)
                      : void 0;
                return void 0 !== o
                  ? o
                  : n.attributes || !g
                  ? e.getAttribute(t)
                  : (o = e.getAttributeNode(t)) && o.specified
                  ? o.value
                  : null;
              }),
              (se.escape = function (e) {
                return (e + "").replace(re, ie);
              }),
              (se.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e);
              }),
              (se.uniqueSort = function (e) {
                var t,
                  r = [],
                  i = 0,
                  o = 0;
                if (
                  ((d = !n.detectDuplicates),
                  (u = !n.sortStable && e.slice(0)),
                  e.sort(I),
                  d)
                ) {
                  for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
                  for (; i--; ) e.splice(r[i], 1);
                }
                return (u = null), e;
              }),
              (i = se.getText =
                function (e) {
                  var t,
                    n = "",
                    r = 0,
                    o = e.nodeType;
                  if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                      if ("string" == typeof e.textContent)
                        return e.textContent;
                      for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                    } else if (3 === o || 4 === o) return e.nodeValue;
                  } else for (; (t = e[r++]); ) n += i(t);
                  return n;
                }),
              ((r = se.selectors =
                {
                  cacheLength: 50,
                  createPseudo: le,
                  match: _,
                  attrHandle: {},
                  find: {},
                  relative: {
                    ">": { dir: "parentNode", first: !0 },
                    " ": { dir: "parentNode" },
                    "+": { dir: "previousSibling", first: !0 },
                    "~": { dir: "previousSibling" },
                  },
                  preFilter: {
                    ATTR: function (e) {
                      return (
                        (e[1] = e[1].replace(te, ne)),
                        (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                        e.slice(0, 4)
                      );
                    },
                    CHILD: function (e) {
                      return (
                        (e[1] = e[1].toLowerCase()),
                        "nth" === e[1].slice(0, 3)
                          ? (e[3] || se.error(e[0]),
                            (e[4] = +(e[4]
                              ? e[5] + (e[6] || 1)
                              : 2 * ("even" === e[3] || "odd" === e[3]))),
                            (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                          : e[3] && se.error(e[0]),
                        e
                      );
                    },
                    PSEUDO: function (e) {
                      var t,
                        n = !e[6] && e[2];
                      return _.CHILD.test(e[0])
                        ? null
                        : (e[3]
                            ? (e[2] = e[4] || e[5] || "")
                            : n &&
                              X.test(n) &&
                              (t = a(n, !0)) &&
                              (t = n.indexOf(")", n.length - t) - n.length) &&
                              ((e[0] = e[0].slice(0, t)),
                              (e[2] = n.slice(0, t))),
                          e.slice(0, 3));
                    },
                  },
                  filter: {
                    TAG: function (e) {
                      var t = e.replace(te, ne).toLowerCase();
                      return "*" === e
                        ? function () {
                            return !0;
                          }
                        : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t;
                          };
                    },
                    CLASS: function (e) {
                      var t = P[e + " "];
                      return (
                        t ||
                        ((t = new RegExp(
                          "(^|" + F + ")" + e + "(" + F + "|$)"
                        )) &&
                          P(e, function (e) {
                            return t.test(
                              ("string" == typeof e.className && e.className) ||
                                (void 0 !== e.getAttribute &&
                                  e.getAttribute("class")) ||
                                ""
                            );
                          }))
                      );
                    },
                    ATTR: function (e, t, n) {
                      return function (r) {
                        var i = se.attr(r, e);
                        return null == i
                          ? "!=" === t
                          : !t ||
                              ((i += ""),
                              "=" === t
                                ? i === n
                                : "!=" === t
                                ? i !== n
                                : "^=" === t
                                ? n && 0 === i.indexOf(n)
                                : "*=" === t
                                ? n && -1 < i.indexOf(n)
                                : "$=" === t
                                ? n && i.slice(-n.length) === n
                                : "~=" === t
                                ? -1 <
                                  (" " + i.replace(Q, " ") + " ").indexOf(n)
                                : "|=" === t &&
                                  (i === n ||
                                    i.slice(0, n.length + 1) === n + "-"));
                      };
                    },
                    CHILD: function (e, t, n, r, i) {
                      var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                      return 1 === r && 0 === i
                        ? function (e) {
                            return !!e.parentNode;
                          }
                        : function (t, n, c) {
                            var l,
                              u,
                              d,
                              f,
                              p,
                              h,
                              g = o !== a ? "nextSibling" : "previousSibling",
                              v = t.parentNode,
                              m = s && t.nodeName.toLowerCase(),
                              y = !c && !s,
                              b = !1;
                            if (v) {
                              if (o) {
                                for (; g; ) {
                                  for (f = t; (f = f[g]); )
                                    if (
                                      s
                                        ? f.nodeName.toLowerCase() === m
                                        : 1 === f.nodeType
                                    )
                                      return !1;
                                  h = g = "only" === e && !h && "nextSibling";
                                }
                                return !0;
                              }
                              if (
                                ((h = [a ? v.firstChild : v.lastChild]), a && y)
                              ) {
                                for (
                                  b =
                                    (p =
                                      (l =
                                        (u =
                                          (d = (f = v)[x] || (f[x] = {}))[
                                            f.uniqueID
                                          ] || (d[f.uniqueID] = {}))[e] ||
                                        [])[0] === C && l[1]) && l[2],
                                    f = p && v.childNodes[p];
                                  (f =
                                    (++p && f && f[g]) ||
                                    (b = p = 0) ||
                                    h.pop());

                                )
                                  if (1 === f.nodeType && ++b && f === t) {
                                    u[e] = [C, p, b];
                                    break;
                                  }
                              } else if (
                                (y &&
                                  (b = p =
                                    (l =
                                      (u =
                                        (d = (f = t)[x] || (f[x] = {}))[
                                          f.uniqueID
                                        ] || (d[f.uniqueID] = {}))[e] ||
                                      [])[0] === C && l[1]),
                                !1 === b)
                              )
                                for (
                                  ;
                                  (f =
                                    (++p && f && f[g]) ||
                                    (b = p = 0) ||
                                    h.pop()) &&
                                  ((s
                                    ? f.nodeName.toLowerCase() !== m
                                    : 1 !== f.nodeType) ||
                                    !++b ||
                                    (y &&
                                      ((u =
                                        (d = f[x] || (f[x] = {}))[f.uniqueID] ||
                                        (d[f.uniqueID] = {}))[e] = [C, b]),
                                    f !== t));

                                );
                              return (
                                (b -= i) === r || (b % r == 0 && 0 <= b / r)
                              );
                            }
                          };
                    },
                    PSEUDO: function (e, t) {
                      var n,
                        i =
                          r.pseudos[e] ||
                          r.setFilters[e.toLowerCase()] ||
                          se.error("unsupported pseudo: " + e);
                      return i[x]
                        ? i(t)
                        : 1 < i.length
                        ? ((n = [e, e, "", t]),
                          r.setFilters.hasOwnProperty(e.toLowerCase())
                            ? le(function (e, n) {
                                for (var r, o = i(e, t), a = o.length; a--; )
                                  e[(r = q(e, o[a]))] = !(n[r] = o[a]);
                              })
                            : function (e) {
                                return i(e, 0, n);
                              })
                        : i;
                    },
                  },
                  pseudos: {
                    not: le(function (e) {
                      var t = [],
                        n = [],
                        r = s(e.replace(z, "$1"));
                      return r[x]
                        ? le(function (e, t, n, i) {
                            for (
                              var o, a = r(e, null, i, []), s = e.length;
                              s--;

                            )
                              (o = a[s]) && (e[s] = !(t[s] = o));
                          })
                        : function (e, i, o) {
                            return (
                              (t[0] = e),
                              r(t, null, o, n),
                              (t[0] = null),
                              !n.pop()
                            );
                          };
                    }),
                    has: le(function (e) {
                      return function (t) {
                        return 0 < se(e, t).length;
                      };
                    }),
                    contains: le(function (e) {
                      return (
                        (e = e.replace(te, ne)),
                        function (t) {
                          return -1 < (t.textContent || i(t)).indexOf(e);
                        }
                      );
                    }),
                    lang: le(function (e) {
                      return (
                        W.test(e || "") || se.error("unsupported lang: " + e),
                        (e = e.replace(te, ne).toLowerCase()),
                        function (t) {
                          var n;
                          do {
                            if (
                              (n = g
                                ? t.lang
                                : t.getAttribute("xml:lang") ||
                                  t.getAttribute("lang"))
                            )
                              return (
                                (n = n.toLowerCase()) === e ||
                                0 === n.indexOf(e + "-")
                              );
                          } while ((t = t.parentNode) && 1 === t.nodeType);
                          return !1;
                        }
                      );
                    }),
                    target: function (t) {
                      var n = e.location && e.location.hash;
                      return n && n.slice(1) === t.id;
                    },
                    root: function (e) {
                      return e === h;
                    },
                    focus: function (e) {
                      return (
                        e === p.activeElement &&
                        (!p.hasFocus || p.hasFocus()) &&
                        !!(e.type || e.href || ~e.tabIndex)
                      );
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function (e) {
                      var t = e.nodeName.toLowerCase();
                      return (
                        ("input" === t && !!e.checked) ||
                        ("option" === t && !!e.selected)
                      );
                    },
                    selected: function (e) {
                      return (
                        e.parentNode && e.parentNode.selectedIndex,
                        !0 === e.selected
                      );
                    },
                    empty: function (e) {
                      for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                      return !0;
                    },
                    parent: function (e) {
                      return !r.pseudos.empty(e);
                    },
                    header: function (e) {
                      return G.test(e.nodeName);
                    },
                    input: function (e) {
                      return J.test(e.nodeName);
                    },
                    button: function (e) {
                      var t = e.nodeName.toLowerCase();
                      return (
                        ("input" === t && "button" === e.type) || "button" === t
                      );
                    },
                    text: function (e) {
                      var t;
                      return (
                        "input" === e.nodeName.toLowerCase() &&
                        "text" === e.type &&
                        (null == (t = e.getAttribute("type")) ||
                          "text" === t.toLowerCase())
                      );
                    },
                    first: ve(function () {
                      return [0];
                    }),
                    last: ve(function (e, t) {
                      return [t - 1];
                    }),
                    eq: ve(function (e, t, n) {
                      return [n < 0 ? n + t : n];
                    }),
                    even: ve(function (e, t) {
                      for (var n = 0; n < t; n += 2) e.push(n);
                      return e;
                    }),
                    odd: ve(function (e, t) {
                      for (var n = 1; n < t; n += 2) e.push(n);
                      return e;
                    }),
                    lt: ve(function (e, t, n) {
                      for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                      return e;
                    }),
                    gt: ve(function (e, t, n) {
                      for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                      return e;
                    }),
                  },
                }).pseudos.nth = r.pseudos.eq),
              { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                r.pseudos[t] = pe(t);
              for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
              function ye() {}
              function be(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++)
                  r += e[t].value;
                return r;
              }
              function xe(e, t, n) {
                var r = t.dir,
                  i = t.next,
                  o = i || r,
                  a = n && "parentNode" === o,
                  s = T++;
                return t.first
                  ? function (t, n, i) {
                      for (; (t = t[r]); )
                        if (1 === t.nodeType || a) return e(t, n, i);
                      return !1;
                    }
                  : function (t, n, c) {
                      var l,
                        u,
                        d,
                        f = [C, s];
                      if (c) {
                        for (; (t = t[r]); )
                          if ((1 === t.nodeType || a) && e(t, n, c)) return !0;
                      } else
                        for (; (t = t[r]); )
                          if (1 === t.nodeType || a)
                            if (
                              ((u =
                                (d = t[x] || (t[x] = {}))[t.uniqueID] ||
                                (d[t.uniqueID] = {})),
                              i && i === t.nodeName.toLowerCase())
                            )
                              t = t[r] || t;
                            else {
                              if ((l = u[o]) && l[0] === C && l[1] === s)
                                return (f[2] = l[2]);
                              if (((u[o] = f)[2] = e(t, n, c))) return !0;
                            }
                      return !1;
                    };
              }
              function we(e) {
                return 1 < e.length
                  ? function (t, n, r) {
                      for (var i = e.length; i--; )
                        if (!e[i](t, n, r)) return !1;
                      return !0;
                    }
                  : e[0];
              }
              function Ce(e, t, n, r, i) {
                for (
                  var o, a = [], s = 0, c = e.length, l = null != t;
                  s < c;
                  s++
                )
                  (o = e[s]) &&
                    ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
                return a;
              }
              function Te(e, t, n, r, i, o) {
                return (
                  r && !r[x] && (r = Te(r)),
                  i && !i[x] && (i = Te(i, o)),
                  le(function (o, a, s, c) {
                    var l,
                      u,
                      d,
                      f = [],
                      p = [],
                      h = a.length,
                      g =
                        o ||
                        (function (e, t, n) {
                          for (var r = 0, i = t.length; r < i; r++)
                            se(e, t[r], n);
                          return n;
                        })(t || "*", s.nodeType ? [s] : s, []),
                      v = !e || (!o && t) ? g : Ce(g, f, e, s, c),
                      m = n ? (i || (o ? e : h || r) ? [] : a) : v;
                    if ((n && n(v, m, s, c), r))
                      for (l = Ce(m, p), r(l, [], s, c), u = l.length; u--; )
                        (d = l[u]) && (m[p[u]] = !(v[p[u]] = d));
                    if (o) {
                      if (i || e) {
                        if (i) {
                          for (l = [], u = m.length; u--; )
                            (d = m[u]) && l.push((v[u] = d));
                          i(null, (m = []), l, c);
                        }
                        for (u = m.length; u--; )
                          (d = m[u]) &&
                            -1 < (l = i ? q(o, d) : f[u]) &&
                            (o[l] = !(a[l] = d));
                      }
                    } else (m = Ce(m === a ? m.splice(h, m.length) : m)), i ? i(null, a, m, c) : L.apply(a, m);
                  })
                );
              }
              function Pe(e) {
                for (
                  var t,
                    n,
                    i,
                    o = e.length,
                    a = r.relative[e[0].type],
                    s = a || r.relative[" "],
                    c = a ? 1 : 0,
                    u = xe(
                      function (e) {
                        return e === t;
                      },
                      s,
                      !0
                    ),
                    d = xe(
                      function (e) {
                        return -1 < q(t, e);
                      },
                      s,
                      !0
                    ),
                    f = [
                      function (e, n, r) {
                        var i =
                          (!a && (r || n !== l)) ||
                          ((t = n).nodeType ? u(e, n, r) : d(e, n, r));
                        return (t = null), i;
                      },
                    ];
                  c < o;
                  c++
                )
                  if ((n = r.relative[e[c].type])) f = [xe(we(f), n)];
                  else {
                    if (
                      (n = r.filter[e[c].type].apply(null, e[c].matches))[x]
                    ) {
                      for (i = ++c; i < o && !r.relative[e[i].type]; i++);
                      return Te(
                        1 < c && we(f),
                        1 < c &&
                          be(
                            e
                              .slice(0, c - 1)
                              .concat({
                                value: " " === e[c - 2].type ? "*" : "",
                              })
                          ).replace(z, "$1"),
                        n,
                        c < i && Pe(e.slice(c, i)),
                        i < o && Pe((e = e.slice(i))),
                        i < o && be(e)
                      );
                    }
                    f.push(n);
                  }
                return we(f);
              }
              return (
                (ye.prototype = r.filters = r.pseudos),
                (r.setFilters = new ye()),
                (a = se.tokenize =
                  function (e, t) {
                    var n,
                      i,
                      o,
                      a,
                      s,
                      c,
                      l,
                      u = E[e + " "];
                    if (u) return t ? 0 : u.slice(0);
                    for (s = e, c = [], l = r.preFilter; s; ) {
                      for (a in ((n && !(i = U.exec(s))) ||
                        (i && (s = s.slice(i[0].length) || s),
                        c.push((o = []))),
                      (n = !1),
                      (i = $.exec(s)) &&
                        ((n = i.shift()),
                        o.push({ value: n, type: i[0].replace(z, " ") }),
                        (s = s.slice(n.length))),
                      r.filter))
                        !(i = _[a].exec(s)) ||
                          (l[a] && !(i = l[a](i))) ||
                          ((n = i.shift()),
                          o.push({ value: n, type: a, matches: i }),
                          (s = s.slice(n.length)));
                      if (!n) break;
                    }
                    return t ? s.length : s ? se.error(e) : E(e, c).slice(0);
                  }),
                (s = se.compile =
                  function (e, t) {
                    var n,
                      i,
                      o,
                      s,
                      c,
                      u,
                      d = [],
                      h = [],
                      v = S[e + " "];
                    if (!v) {
                      for (t || (t = a(e)), n = t.length; n--; )
                        (v = Pe(t[n]))[x] ? d.push(v) : h.push(v);
                      (v = S(
                        e,
                        ((i = h),
                        (s = 0 < (o = d).length),
                        (c = 0 < i.length),
                        (u = function (e, t, n, a, u) {
                          var d,
                            h,
                            v,
                            m = 0,
                            y = "0",
                            b = e && [],
                            x = [],
                            w = l,
                            T = e || (c && r.find.TAG("*", u)),
                            P = (C += null == w ? 1 : Math.random() || 0.1),
                            E = T.length;
                          for (
                            u && (l = t == p || t || u);
                            y !== E && null != (d = T[y]);
                            y++
                          ) {
                            if (c && d) {
                              for (
                                h = 0,
                                  t || d.ownerDocument == p || (f(d), (n = !g));
                                (v = i[h++]);

                              )
                                if (v(d, t || p, n)) {
                                  a.push(d);
                                  break;
                                }
                              u && (C = P);
                            }
                            s && ((d = !v && d) && m--, e && b.push(d));
                          }
                          if (((m += y), s && y !== m)) {
                            for (h = 0; (v = o[h++]); ) v(b, x, t, n);
                            if (e) {
                              if (0 < m)
                                for (; y--; )
                                  b[y] || x[y] || (x[y] = A.call(a));
                              x = Ce(x);
                            }
                            L.apply(a, x),
                              u &&
                                !e &&
                                0 < x.length &&
                                1 < m + o.length &&
                                se.uniqueSort(a);
                          }
                          return u && ((C = P), (l = w)), b;
                        }),
                        s ? le(u) : u)
                      )).selector = e;
                    }
                    return v;
                  }),
                (c = se.select =
                  function (e, t, n, i) {
                    var o,
                      c,
                      l,
                      u,
                      d,
                      f = "function" == typeof e && e,
                      p = !i && a((e = f.selector || e));
                    if (((n = n || []), 1 === p.length)) {
                      if (
                        2 < (c = p[0] = p[0].slice(0)).length &&
                        "ID" === (l = c[0]).type &&
                        9 === t.nodeType &&
                        g &&
                        r.relative[c[1].type]
                      ) {
                        if (
                          !(t = (r.find.ID(l.matches[0].replace(te, ne), t) ||
                            [])[0])
                        )
                          return n;
                        f && (t = t.parentNode),
                          (e = e.slice(c.shift().value.length));
                      }
                      for (
                        o = _.needsContext.test(e) ? 0 : c.length;
                        o-- && ((l = c[o]), !r.relative[(u = l.type)]);

                      )
                        if (
                          (d = r.find[u]) &&
                          (i = d(
                            l.matches[0].replace(te, ne),
                            (ee.test(c[0].type) && me(t.parentNode)) || t
                          ))
                        ) {
                          if ((c.splice(o, 1), !(e = i.length && be(c))))
                            return L.apply(n, i), n;
                          break;
                        }
                    }
                    return (
                      (f || s(e, p))(
                        i,
                        t,
                        !g,
                        n,
                        !t || (ee.test(e) && me(t.parentNode)) || t
                      ),
                      n
                    );
                  }),
                (n.sortStable = x.split("").sort(I).join("") === x),
                (n.detectDuplicates = !!d),
                f(),
                (n.sortDetached = ue(function (e) {
                  return (
                    1 & e.compareDocumentPosition(p.createElement("fieldset"))
                  );
                })),
                ue(function (e) {
                  return (
                    (e.innerHTML = "<a href='#'></a>"),
                    "#" === e.firstChild.getAttribute("href")
                  );
                }) ||
                  de("type|href|height|width", function (e, t, n) {
                    if (!n)
                      return e.getAttribute(
                        t,
                        "type" === t.toLowerCase() ? 1 : 2
                      );
                  }),
                (n.attributes &&
                  ue(function (e) {
                    return (
                      (e.innerHTML = "<input/>"),
                      e.firstChild.setAttribute("value", ""),
                      "" === e.firstChild.getAttribute("value")
                    );
                  })) ||
                  de("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase())
                      return e.defaultValue;
                  }),
                ue(function (e) {
                  return null == e.getAttribute("disabled");
                }) ||
                  de(O, function (e, t, n) {
                    var r;
                    if (!n)
                      return !0 === e[t]
                        ? t.toLowerCase()
                        : (r = e.getAttributeNode(t)) && r.specified
                        ? r.value
                        : null;
                  }),
                se
              );
            })(r);
            (P.find = S),
              (P.expr = S.selectors),
              (P.expr[":"] = P.expr.pseudos),
              (P.uniqueSort = P.unique = S.uniqueSort),
              (P.text = S.getText),
              (P.isXMLDoc = S.isXML),
              (P.contains = S.contains),
              (P.escapeSelector = S.escape);
            var H = function (e, t, n) {
                for (
                  var r = [], i = void 0 !== n;
                  (e = e[t]) && 9 !== e.nodeType;

                )
                  if (1 === e.nodeType) {
                    if (i && P(e).is(n)) break;
                    r.push(e);
                  }
                return r;
              },
              I = function (e, t) {
                for (var n = []; e; e = e.nextSibling)
                  1 === e.nodeType && e !== t && n.push(e);
                return n;
              },
              D = P.expr.match.needsContext;
            function k(e, t) {
              return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
            }
            var A =
              /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function j(e, t, n) {
              return m(t)
                ? P.grep(e, function (e, r) {
                    return !!t.call(e, r, e) !== n;
                  })
                : t.nodeType
                ? P.grep(e, function (e) {
                    return (e === t) !== n;
                  })
                : "string" != typeof t
                ? P.grep(e, function (e) {
                    return -1 < u.call(t, e) !== n;
                  })
                : P.filter(t, e, n);
            }
            (P.filter = function (e, t, n) {
              var r = t[0];
              return (
                n && (e = ":not(" + e + ")"),
                1 === t.length && 1 === r.nodeType
                  ? P.find.matchesSelector(r, e)
                    ? [r]
                    : []
                  : P.find.matches(
                      e,
                      P.grep(t, function (e) {
                        return 1 === e.nodeType;
                      })
                    )
              );
            }),
              P.fn.extend({
                find: function (e) {
                  var t,
                    n,
                    r = this.length,
                    i = this;
                  if ("string" != typeof e)
                    return this.pushStack(
                      P(e).filter(function () {
                        for (t = 0; t < r; t++)
                          if (P.contains(i[t], this)) return !0;
                      })
                    );
                  for (n = this.pushStack([]), t = 0; t < r; t++)
                    P.find(e, i[t], n);
                  return 1 < r ? P.uniqueSort(n) : n;
                },
                filter: function (e) {
                  return this.pushStack(j(this, e || [], !1));
                },
                not: function (e) {
                  return this.pushStack(j(this, e || [], !0));
                },
                is: function (e) {
                  return !!j(
                    this,
                    "string" == typeof e && D.test(e) ? P(e) : e || [],
                    !1
                  ).length;
                },
              });
            var L,
              N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            ((P.fn.init = function (e, t, n) {
              var r, i;
              if (!e) return this;
              if (((n = n || L), "string" == typeof e)) {
                if (
                  !(r =
                    "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
                      ? [null, e, null]
                      : N.exec(e)) ||
                  (!r[1] && t)
                )
                  return !t || t.jquery
                    ? (t || n).find(e)
                    : this.constructor(t).find(e);
                if (r[1]) {
                  if (
                    ((t = t instanceof P ? t[0] : t),
                    P.merge(
                      this,
                      P.parseHTML(
                        r[1],
                        t && t.nodeType ? t.ownerDocument || t : b,
                        !0
                      )
                    ),
                    A.test(r[1]) && P.isPlainObject(t))
                  )
                    for (r in t)
                      m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                  return this;
                }
                return (
                  (i = b.getElementById(r[2])) &&
                    ((this[0] = i), (this.length = 1)),
                  this
                );
              }
              return e.nodeType
                ? ((this[0] = e), (this.length = 1), this)
                : m(e)
                ? void 0 !== n.ready
                  ? n.ready(e)
                  : e(P)
                : P.makeArray(e, this);
            }).prototype = P.fn),
              (L = P(b));
            var q = /^(?:parents|prev(?:Until|All))/,
              O = { children: !0, contents: !0, next: !0, prev: !0 };
            function F(e, t) {
              for (; (e = e[t]) && 1 !== e.nodeType; );
              return e;
            }
            P.fn.extend({
              has: function (e) {
                var t = P(e, this),
                  n = t.length;
                return this.filter(function () {
                  for (var e = 0; e < n; e++)
                    if (P.contains(this, t[e])) return !0;
                });
              },
              closest: function (e, t) {
                var n,
                  r = 0,
                  i = this.length,
                  o = [],
                  a = "string" != typeof e && P(e);
                if (!D.test(e))
                  for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                      if (
                        n.nodeType < 11 &&
                        (a
                          ? -1 < a.index(n)
                          : 1 === n.nodeType && P.find.matchesSelector(n, e))
                      ) {
                        o.push(n);
                        break;
                      }
                return this.pushStack(1 < o.length ? P.uniqueSort(o) : o);
              },
              index: function (e) {
                return e
                  ? "string" == typeof e
                    ? u.call(P(e), this[0])
                    : u.call(this, e.jquery ? e[0] : e)
                  : this[0] && this[0].parentNode
                  ? this.first().prevAll().length
                  : -1;
              },
              add: function (e, t) {
                return this.pushStack(
                  P.uniqueSort(P.merge(this.get(), P(e, t)))
                );
              },
              addBack: function (e) {
                return this.add(
                  null == e ? this.prevObject : this.prevObject.filter(e)
                );
              },
            }),
              P.each(
                {
                  parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                  },
                  parents: function (e) {
                    return H(e, "parentNode");
                  },
                  parentsUntil: function (e, t, n) {
                    return H(e, "parentNode", n);
                  },
                  next: function (e) {
                    return F(e, "nextSibling");
                  },
                  prev: function (e) {
                    return F(e, "previousSibling");
                  },
                  nextAll: function (e) {
                    return H(e, "nextSibling");
                  },
                  prevAll: function (e) {
                    return H(e, "previousSibling");
                  },
                  nextUntil: function (e, t, n) {
                    return H(e, "nextSibling", n);
                  },
                  prevUntil: function (e, t, n) {
                    return H(e, "previousSibling", n);
                  },
                  siblings: function (e) {
                    return I((e.parentNode || {}).firstChild, e);
                  },
                  children: function (e) {
                    return I(e.firstChild);
                  },
                  contents: function (e) {
                    return null != e.contentDocument && a(e.contentDocument)
                      ? e.contentDocument
                      : (k(e, "template") && (e = e.content || e),
                        P.merge([], e.childNodes));
                  },
                },
                function (e, t) {
                  P.fn[e] = function (n, r) {
                    var i = P.map(this, t, n);
                    return (
                      "Until" !== e.slice(-5) && (r = n),
                      r && "string" == typeof r && (i = P.filter(r, i)),
                      1 < this.length &&
                        (O[e] || P.uniqueSort(i), q.test(e) && i.reverse()),
                      this.pushStack(i)
                    );
                  };
                }
              );
            var R = /[^\x20\t\r\n\f]+/g;
            function M(e) {
              return e;
            }
            function B(e) {
              throw e;
            }
            function Q(e, t, n, r) {
              var i;
              try {
                e && m((i = e.promise))
                  ? i.call(e).done(t).fail(n)
                  : e && m((i = e.then))
                  ? i.call(e, t, n)
                  : t.apply(void 0, [e].slice(r));
              } catch (e) {
                n.apply(void 0, [e]);
              }
            }
            (P.Callbacks = function (e) {
              var t, n;
              e =
                "string" == typeof e
                  ? ((t = e),
                    (n = {}),
                    P.each(t.match(R) || [], function (e, t) {
                      n[t] = !0;
                    }),
                    n)
                  : P.extend({}, e);
              var r,
                i,
                o,
                a,
                s = [],
                c = [],
                l = -1,
                u = function () {
                  for (a = a || e.once, o = r = !0; c.length; l = -1)
                    for (i = c.shift(); ++l < s.length; )
                      !1 === s[l].apply(i[0], i[1]) &&
                        e.stopOnFalse &&
                        ((l = s.length), (i = !1));
                  e.memory || (i = !1), (r = !1), a && (s = i ? [] : "");
                },
                d = {
                  add: function () {
                    return (
                      s &&
                        (i && !r && ((l = s.length - 1), c.push(i)),
                        (function t(n) {
                          P.each(n, function (n, r) {
                            m(r)
                              ? (e.unique && d.has(r)) || s.push(r)
                              : r && r.length && "string" !== C(r) && t(r);
                          });
                        })(arguments),
                        i && !r && u()),
                      this
                    );
                  },
                  remove: function () {
                    return (
                      P.each(arguments, function (e, t) {
                        for (var n; -1 < (n = P.inArray(t, s, n)); )
                          s.splice(n, 1), n <= l && l--;
                      }),
                      this
                    );
                  },
                  has: function (e) {
                    return e ? -1 < P.inArray(e, s) : 0 < s.length;
                  },
                  empty: function () {
                    return s && (s = []), this;
                  },
                  disable: function () {
                    return (a = c = []), (s = i = ""), this;
                  },
                  disabled: function () {
                    return !s;
                  },
                  lock: function () {
                    return (a = c = []), i || r || (s = i = ""), this;
                  },
                  locked: function () {
                    return !!a;
                  },
                  fireWith: function (e, t) {
                    return (
                      a ||
                        ((t = [e, (t = t || []).slice ? t.slice() : t]),
                        c.push(t),
                        r || u()),
                      this
                    );
                  },
                  fire: function () {
                    return d.fireWith(this, arguments), this;
                  },
                  fired: function () {
                    return !!o;
                  },
                };
              return d;
            }),
              P.extend({
                Deferred: function (e) {
                  var t = [
                      [
                        "notify",
                        "progress",
                        P.Callbacks("memory"),
                        P.Callbacks("memory"),
                        2,
                      ],
                      [
                        "resolve",
                        "done",
                        P.Callbacks("once memory"),
                        P.Callbacks("once memory"),
                        0,
                        "resolved",
                      ],
                      [
                        "reject",
                        "fail",
                        P.Callbacks("once memory"),
                        P.Callbacks("once memory"),
                        1,
                        "rejected",
                      ],
                    ],
                    n = "pending",
                    i = {
                      state: function () {
                        return n;
                      },
                      always: function () {
                        return o.done(arguments).fail(arguments), this;
                      },
                      catch: function (e) {
                        return i.then(null, e);
                      },
                      pipe: function () {
                        var e = arguments;
                        return P.Deferred(function (n) {
                          P.each(t, function (t, r) {
                            var i = m(e[r[4]]) && e[r[4]];
                            o[r[1]](function () {
                              var e = i && i.apply(this, arguments);
                              e && m(e.promise)
                                ? e
                                    .promise()
                                    .progress(n.notify)
                                    .done(n.resolve)
                                    .fail(n.reject)
                                : n[r[0] + "With"](this, i ? [e] : arguments);
                            });
                          }),
                            (e = null);
                        }).promise();
                      },
                      then: function (e, n, i) {
                        var o = 0;
                        function a(e, t, n, i) {
                          return function () {
                            var s = this,
                              c = arguments,
                              l = function () {
                                var r, l;
                                if (!(e < o)) {
                                  if ((r = n.apply(s, c)) === t.promise())
                                    throw new TypeError(
                                      "Thenable self-resolution"
                                    );
                                  (l =
                                    r &&
                                    ("object" == typeof r ||
                                      "function" == typeof r) &&
                                    r.then),
                                    m(l)
                                      ? i
                                        ? l.call(
                                            r,
                                            a(o, t, M, i),
                                            a(o, t, B, i)
                                          )
                                        : (o++,
                                          l.call(
                                            r,
                                            a(o, t, M, i),
                                            a(o, t, B, i),
                                            a(o, t, M, t.notifyWith)
                                          ))
                                      : (n !== M && ((s = void 0), (c = [r])),
                                        (i || t.resolveWith)(s, c));
                                }
                              },
                              u = i
                                ? l
                                : function () {
                                    try {
                                      l();
                                    } catch (r) {
                                      P.Deferred.exceptionHook &&
                                        P.Deferred.exceptionHook(
                                          r,
                                          u.stackTrace
                                        ),
                                        o <= e + 1 &&
                                          (n !== B && ((s = void 0), (c = [r])),
                                          t.rejectWith(s, c));
                                    }
                                  };
                            e
                              ? u()
                              : (P.Deferred.getStackHook &&
                                  (u.stackTrace = P.Deferred.getStackHook()),
                                r.setTimeout(u));
                          };
                        }
                        return P.Deferred(function (r) {
                          t[0][3].add(a(0, r, m(i) ? i : M, r.notifyWith)),
                            t[1][3].add(a(0, r, m(e) ? e : M)),
                            t[2][3].add(a(0, r, m(n) ? n : B));
                        }).promise();
                      },
                      promise: function (e) {
                        return null != e ? P.extend(e, i) : i;
                      },
                    },
                    o = {};
                  return (
                    P.each(t, function (e, r) {
                      var a = r[2],
                        s = r[5];
                      (i[r[1]] = a.add),
                        s &&
                          a.add(
                            function () {
                              n = s;
                            },
                            t[3 - e][2].disable,
                            t[3 - e][3].disable,
                            t[0][2].lock,
                            t[0][3].lock
                          ),
                        a.add(r[3].fire),
                        (o[r[0]] = function () {
                          return (
                            o[r[0] + "With"](
                              this === o ? void 0 : this,
                              arguments
                            ),
                            this
                          );
                        }),
                        (o[r[0] + "With"] = a.fireWith);
                    }),
                    i.promise(o),
                    e && e.call(o, o),
                    o
                  );
                },
                when: function (e) {
                  var t = arguments.length,
                    n = t,
                    r = Array(n),
                    i = s.call(arguments),
                    o = P.Deferred(),
                    a = function (e) {
                      return function (n) {
                        (r[e] = this),
                          (i[e] = 1 < arguments.length ? s.call(arguments) : n),
                          --t || o.resolveWith(r, i);
                      };
                    };
                  if (
                    t <= 1 &&
                    (Q(e, o.done(a(n)).resolve, o.reject, !t),
                    "pending" === o.state() || m(i[n] && i[n].then))
                  )
                    return o.then();
                  for (; n--; ) Q(i[n], a(n), o.reject);
                  return o.promise();
                },
              });
            var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            (P.Deferred.exceptionHook = function (e, t) {
              r.console &&
                r.console.warn &&
                e &&
                z.test(e.name) &&
                r.console.warn(
                  "jQuery.Deferred exception: " + e.message,
                  e.stack,
                  t
                );
            }),
              (P.readyException = function (e) {
                r.setTimeout(function () {
                  throw e;
                });
              });
            var U = P.Deferred();
            function $() {
              b.removeEventListener("DOMContentLoaded", $),
                r.removeEventListener("load", $),
                P.ready();
            }
            (P.fn.ready = function (e) {
              return (
                U.then(e).catch(function (e) {
                  P.readyException(e);
                }),
                this
              );
            }),
              P.extend({
                isReady: !1,
                readyWait: 1,
                ready: function (e) {
                  (!0 === e ? --P.readyWait : P.isReady) ||
                    ((P.isReady = !0) !== e && 0 < --P.readyWait) ||
                    U.resolveWith(b, [P]);
                },
              }),
              (P.ready.then = U.then),
              "complete" === b.readyState ||
              ("loading" !== b.readyState && !b.documentElement.doScroll)
                ? r.setTimeout(P.ready)
                : (b.addEventListener("DOMContentLoaded", $),
                  r.addEventListener("load", $));
            var V = function (e, t, n, r, i, o, a) {
                var s = 0,
                  c = e.length,
                  l = null == n;
                if ("object" === C(n))
                  for (s in ((i = !0), n)) V(e, t, s, n[s], !0, o, a);
                else if (
                  void 0 !== r &&
                  ((i = !0),
                  m(r) || (a = !0),
                  l &&
                    (a
                      ? (t.call(e, r), (t = null))
                      : ((l = t),
                        (t = function (e, t, n) {
                          return l.call(P(e), n);
                        }))),
                  t)
                )
                  for (; s < c; s++)
                    t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                return i ? e : l ? t.call(e) : c ? t(e[0], n) : o;
              },
              X = /^-ms-/,
              W = /-([a-z])/g;
            function _(e, t) {
              return t.toUpperCase();
            }
            function Y(e) {
              return e.replace(X, "ms-").replace(W, _);
            }
            var J = function (e) {
              return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
            };
            function G() {
              this.expando = P.expando + G.uid++;
            }
            (G.uid = 1),
              (G.prototype = {
                cache: function (e) {
                  var t = e[this.expando];
                  return (
                    t ||
                      ((t = {}),
                      J(e) &&
                        (e.nodeType
                          ? (e[this.expando] = t)
                          : Object.defineProperty(e, this.expando, {
                              value: t,
                              configurable: !0,
                            }))),
                    t
                  );
                },
                set: function (e, t, n) {
                  var r,
                    i = this.cache(e);
                  if ("string" == typeof t) i[Y(t)] = n;
                  else for (r in t) i[Y(r)] = t[r];
                  return i;
                },
                get: function (e, t) {
                  return void 0 === t
                    ? this.cache(e)
                    : e[this.expando] && e[this.expando][Y(t)];
                },
                access: function (e, t, n) {
                  return void 0 === t ||
                    (t && "string" == typeof t && void 0 === n)
                    ? this.get(e, t)
                    : (this.set(e, t, n), void 0 !== n ? n : t);
                },
                remove: function (e, t) {
                  var n,
                    r = e[this.expando];
                  if (void 0 !== r) {
                    if (void 0 !== t) {
                      n = (t = Array.isArray(t)
                        ? t.map(Y)
                        : (t = Y(t)) in r
                        ? [t]
                        : t.match(R) || []).length;
                      for (; n--; ) delete r[t[n]];
                    }
                    (void 0 === t || P.isEmptyObject(r)) &&
                      (e.nodeType
                        ? (e[this.expando] = void 0)
                        : delete e[this.expando]);
                  }
                },
                hasData: function (e) {
                  var t = e[this.expando];
                  return void 0 !== t && !P.isEmptyObject(t);
                },
              });
            var K = new G(),
              Z = new G(),
              ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
              te = /[A-Z]/g;
            function ne(e, t, n) {
              var r, i;
              if (void 0 === n && 1 === e.nodeType)
                if (
                  ((r = "data-" + t.replace(te, "-$&").toLowerCase()),
                  "string" == typeof (n = e.getAttribute(r)))
                ) {
                  try {
                    n =
                      "true" === (i = n) ||
                      ("false" !== i &&
                        ("null" === i
                          ? null
                          : i === +i + ""
                          ? +i
                          : ee.test(i)
                          ? JSON.parse(i)
                          : i));
                  } catch (e) {}
                  Z.set(e, t, n);
                } else n = void 0;
              return n;
            }
            P.extend({
              hasData: function (e) {
                return Z.hasData(e) || K.hasData(e);
              },
              data: function (e, t, n) {
                return Z.access(e, t, n);
              },
              removeData: function (e, t) {
                Z.remove(e, t);
              },
              _data: function (e, t, n) {
                return K.access(e, t, n);
              },
              _removeData: function (e, t) {
                K.remove(e, t);
              },
            }),
              P.fn.extend({
                data: function (e, t) {
                  var n,
                    r,
                    i,
                    o = this[0],
                    a = o && o.attributes;
                  if (void 0 === e) {
                    if (
                      this.length &&
                      ((i = Z.get(o)),
                      1 === o.nodeType && !K.get(o, "hasDataAttrs"))
                    ) {
                      for (n = a.length; n--; )
                        a[n] &&
                          0 === (r = a[n].name).indexOf("data-") &&
                          ((r = Y(r.slice(5))), ne(o, r, i[r]));
                      K.set(o, "hasDataAttrs", !0);
                    }
                    return i;
                  }
                  return "object" == typeof e
                    ? this.each(function () {
                        Z.set(this, e);
                      })
                    : V(
                        this,
                        function (t) {
                          var n;
                          if (o && void 0 === t)
                            return void 0 !== (n = Z.get(o, e)) ||
                              void 0 !== (n = ne(o, e))
                              ? n
                              : void 0;
                          this.each(function () {
                            Z.set(this, e, t);
                          });
                        },
                        null,
                        t,
                        1 < arguments.length,
                        null,
                        !0
                      );
                },
                removeData: function (e) {
                  return this.each(function () {
                    Z.remove(this, e);
                  });
                },
              }),
              P.extend({
                queue: function (e, t, n) {
                  var r;
                  if (e)
                    return (
                      (t = (t || "fx") + "queue"),
                      (r = K.get(e, t)),
                      n &&
                        (!r || Array.isArray(n)
                          ? (r = K.access(e, t, P.makeArray(n)))
                          : r.push(n)),
                      r || []
                    );
                },
                dequeue: function (e, t) {
                  t = t || "fx";
                  var n = P.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = P._queueHooks(e, t);
                  "inprogress" === i && ((i = n.shift()), r--),
                    i &&
                      ("fx" === t && n.unshift("inprogress"),
                      delete o.stop,
                      i.call(
                        e,
                        function () {
                          P.dequeue(e, t);
                        },
                        o
                      )),
                    !r && o && o.empty.fire();
                },
                _queueHooks: function (e, t) {
                  var n = t + "queueHooks";
                  return (
                    K.get(e, n) ||
                    K.access(e, n, {
                      empty: P.Callbacks("once memory").add(function () {
                        K.remove(e, [t + "queue", n]);
                      }),
                    })
                  );
                },
              }),
              P.fn.extend({
                queue: function (e, t) {
                  var n = 2;
                  return (
                    "string" != typeof e && ((t = e), (e = "fx"), n--),
                    arguments.length < n
                      ? P.queue(this[0], e)
                      : void 0 === t
                      ? this
                      : this.each(function () {
                          var n = P.queue(this, e, t);
                          P._queueHooks(this, e),
                            "fx" === e &&
                              "inprogress" !== n[0] &&
                              P.dequeue(this, e);
                        })
                  );
                },
                dequeue: function (e) {
                  return this.each(function () {
                    P.dequeue(this, e);
                  });
                },
                clearQueue: function (e) {
                  return this.queue(e || "fx", []);
                },
                promise: function (e, t) {
                  var n,
                    r = 1,
                    i = P.Deferred(),
                    o = this,
                    a = this.length,
                    s = function () {
                      --r || i.resolveWith(o, [o]);
                    };
                  for (
                    "string" != typeof e && ((t = e), (e = void 0)),
                      e = e || "fx";
                    a--;

                  )
                    (n = K.get(o[a], e + "queueHooks")) &&
                      n.empty &&
                      (r++, n.empty.add(s));
                  return s(), i.promise(t);
                },
              });
            var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
              ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
              oe = ["Top", "Right", "Bottom", "Left"],
              ae = b.documentElement,
              se = function (e) {
                return P.contains(e.ownerDocument, e);
              },
              ce = { composed: !0 };
            ae.getRootNode &&
              (se = function (e) {
                return (
                  P.contains(e.ownerDocument, e) ||
                  e.getRootNode(ce) === e.ownerDocument
                );
              });
            var le = function (e, t) {
              return (
                "none" === (e = t || e).style.display ||
                ("" === e.style.display &&
                  se(e) &&
                  "none" === P.css(e, "display"))
              );
            };
            function ue(e, t, n, r) {
              var i,
                o,
                a = 20,
                s = r
                  ? function () {
                      return r.cur();
                    }
                  : function () {
                      return P.css(e, t, "");
                    },
                c = s(),
                l = (n && n[3]) || (P.cssNumber[t] ? "" : "px"),
                u =
                  e.nodeType &&
                  (P.cssNumber[t] || ("px" !== l && +c)) &&
                  ie.exec(P.css(e, t));
              if (u && u[3] !== l) {
                for (c /= 2, l = l || u[3], u = +c || 1; a--; )
                  P.style(e, t, u + l),
                    (1 - o) * (1 - (o = s() / c || 0.5)) <= 0 && (a = 0),
                    (u /= o);
                (u *= 2), P.style(e, t, u + l), (n = n || []);
              }
              return (
                n &&
                  ((u = +u || +c || 0),
                  (i = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
                  r && ((r.unit = l), (r.start = u), (r.end = i))),
                i
              );
            }
            var de = {};
            function fe(e, t) {
              for (
                var n, r, i, o, a, s, c, l = [], u = 0, d = e.length;
                u < d;
                u++
              )
                (r = e[u]).style &&
                  ((n = r.style.display),
                  t
                    ? ("none" === n &&
                        ((l[u] = K.get(r, "display") || null),
                        l[u] || (r.style.display = "")),
                      "" === r.style.display &&
                        le(r) &&
                        (l[u] =
                          ((c = a = o = void 0),
                          (a = (i = r).ownerDocument),
                          (s = i.nodeName),
                          (c = de[s]) ||
                            ((o = a.body.appendChild(a.createElement(s))),
                            (c = P.css(o, "display")),
                            o.parentNode.removeChild(o),
                            "none" === c && (c = "block"),
                            (de[s] = c)))))
                    : "none" !== n &&
                      ((l[u] = "none"), K.set(r, "display", n)));
              for (u = 0; u < d; u++)
                null != l[u] && (e[u].style.display = l[u]);
              return e;
            }
            P.fn.extend({
              show: function () {
                return fe(this, !0);
              },
              hide: function () {
                return fe(this);
              },
              toggle: function (e) {
                return "boolean" == typeof e
                  ? e
                    ? this.show()
                    : this.hide()
                  : this.each(function () {
                      le(this) ? P(this).show() : P(this).hide();
                    });
              },
            });
            var pe,
              he,
              ge = /^(?:checkbox|radio)$/i,
              ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
              me = /^$|^module$|\/(?:java|ecma)script/i;
            (pe = b
              .createDocumentFragment()
              .appendChild(b.createElement("div"))),
              (he = b.createElement("input")).setAttribute("type", "radio"),
              he.setAttribute("checked", "checked"),
              he.setAttribute("name", "t"),
              pe.appendChild(he),
              (v.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked),
              (pe.innerHTML = "<textarea>x</textarea>"),
              (v.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue),
              (pe.innerHTML = "<option></option>"),
              (v.option = !!pe.lastChild);
            var ye = {
              thead: [1, "<table>", "</table>"],
              col: [2, "<table><colgroup>", "</colgroup></table>"],
              tr: [2, "<table><tbody>", "</tbody></table>"],
              td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
              _default: [0, "", ""],
            };
            function be(e, t) {
              var n;
              return (
                (n =
                  void 0 !== e.getElementsByTagName
                    ? e.getElementsByTagName(t || "*")
                    : void 0 !== e.querySelectorAll
                    ? e.querySelectorAll(t || "*")
                    : []),
                void 0 === t || (t && k(e, t)) ? P.merge([e], n) : n
              );
            }
            function xe(e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
            }
            (ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead),
              (ye.th = ye.td),
              v.option ||
                (ye.optgroup = ye.option =
                  [1, "<select multiple='multiple'>", "</select>"]);
            var we = /<|&#?\w+;/;
            function Ce(e, t, n, r, i) {
              for (
                var o,
                  a,
                  s,
                  c,
                  l,
                  u,
                  d = t.createDocumentFragment(),
                  f = [],
                  p = 0,
                  h = e.length;
                p < h;
                p++
              )
                if ((o = e[p]) || 0 === o)
                  if ("object" === C(o)) P.merge(f, o.nodeType ? [o] : o);
                  else if (we.test(o)) {
                    for (
                      a = a || d.appendChild(t.createElement("div")),
                        s = (ve.exec(o) || ["", ""])[1].toLowerCase(),
                        c = ye[s] || ye._default,
                        a.innerHTML = c[1] + P.htmlPrefilter(o) + c[2],
                        u = c[0];
                      u--;

                    )
                      a = a.lastChild;
                    P.merge(f, a.childNodes),
                      ((a = d.firstChild).textContent = "");
                  } else f.push(t.createTextNode(o));
              for (d.textContent = "", p = 0; (o = f[p++]); )
                if (r && -1 < P.inArray(o, r)) i && i.push(o);
                else if (
                  ((l = se(o)),
                  (a = be(d.appendChild(o), "script")),
                  l && xe(a),
                  n)
                )
                  for (u = 0; (o = a[u++]); )
                    me.test(o.type || "") && n.push(o);
              return d;
            }
            var Te = /^key/,
              Pe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
              Ee = /^([^.]*)(?:\.(.+)|)/;
            function Se() {
              return !0;
            }
            function He() {
              return !1;
            }
            function Ie(e, t) {
              return (
                (e ===
                  (function () {
                    try {
                      return b.activeElement;
                    } catch (e) {}
                  })()) ==
                ("focus" === t)
              );
            }
            function De(e, t, n, r, i, o) {
              var a, s;
              if ("object" == typeof t) {
                for (s in ("string" != typeof n && ((r = r || n), (n = void 0)),
                t))
                  De(e, s, n, r, t[s], o);
                return e;
              }
              if (
                (null == r && null == i
                  ? ((i = n), (r = n = void 0))
                  : null == i &&
                    ("string" == typeof n
                      ? ((i = r), (r = void 0))
                      : ((i = r), (r = n), (n = void 0))),
                !1 === i)
              )
                i = He;
              else if (!i) return e;
              return (
                1 === o &&
                  ((a = i),
                  ((i = function (e) {
                    return P().off(e), a.apply(this, arguments);
                  }).guid = a.guid || (a.guid = P.guid++))),
                e.each(function () {
                  P.event.add(this, t, i, r, n);
                })
              );
            }
            function ke(e, t, n) {
              n
                ? (K.set(e, t, !1),
                  P.event.add(e, t, {
                    namespace: !1,
                    handler: function (e) {
                      var r,
                        i,
                        o = K.get(this, t);
                      if (1 & e.isTrigger && this[t]) {
                        if (o.length)
                          (P.event.special[t] || {}).delegateType &&
                            e.stopPropagation();
                        else if (
                          ((o = s.call(arguments)),
                          K.set(this, t, o),
                          (r = n(this, t)),
                          this[t](),
                          o !== (i = K.get(this, t)) || r
                            ? K.set(this, t, !1)
                            : (i = {}),
                          o !== i)
                        )
                          return (
                            e.stopImmediatePropagation(),
                            e.preventDefault(),
                            i.value
                          );
                      } else
                        o.length &&
                          (K.set(this, t, {
                            value: P.event.trigger(
                              P.extend(o[0], P.Event.prototype),
                              o.slice(1),
                              this
                            ),
                          }),
                          e.stopImmediatePropagation());
                    },
                  }))
                : void 0 === K.get(e, t) && P.event.add(e, t, Se);
            }
            (P.event = {
              global: {},
              add: function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  c,
                  l,
                  u,
                  d,
                  f,
                  p,
                  h,
                  g,
                  v = K.get(e);
                if (J(e))
                  for (
                    n.handler && ((n = (o = n).handler), (i = o.selector)),
                      i && P.find.matchesSelector(ae, i),
                      n.guid || (n.guid = P.guid++),
                      (c = v.events) || (c = v.events = Object.create(null)),
                      (a = v.handle) ||
                        (a = v.handle =
                          function (t) {
                            return void 0 !== P && P.event.triggered !== t.type
                              ? P.event.dispatch.apply(e, arguments)
                              : void 0;
                          }),
                      l = (t = (t || "").match(R) || [""]).length;
                    l--;

                  )
                    (p = g = (s = Ee.exec(t[l]) || [])[1]),
                      (h = (s[2] || "").split(".").sort()),
                      p &&
                        ((d = P.event.special[p] || {}),
                        (p = (i ? d.delegateType : d.bindType) || p),
                        (d = P.event.special[p] || {}),
                        (u = P.extend(
                          {
                            type: p,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext:
                              i && P.expr.match.needsContext.test(i),
                            namespace: h.join("."),
                          },
                          o
                        )),
                        (f = c[p]) ||
                          (((f = c[p] = []).delegateCount = 0),
                          (d.setup && !1 !== d.setup.call(e, r, h, a)) ||
                            (e.addEventListener && e.addEventListener(p, a))),
                        d.add &&
                          (d.add.call(e, u),
                          u.handler.guid || (u.handler.guid = n.guid)),
                        i ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                        (P.event.global[p] = !0));
              },
              remove: function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  c,
                  l,
                  u,
                  d,
                  f,
                  p,
                  h,
                  g,
                  v = K.hasData(e) && K.get(e);
                if (v && (c = v.events)) {
                  for (l = (t = (t || "").match(R) || [""]).length; l--; )
                    if (
                      ((p = g = (s = Ee.exec(t[l]) || [])[1]),
                      (h = (s[2] || "").split(".").sort()),
                      p)
                    ) {
                      for (
                        d = P.event.special[p] || {},
                          f =
                            c[(p = (r ? d.delegateType : d.bindType) || p)] ||
                            [],
                          s =
                            s[2] &&
                            new RegExp(
                              "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                            ),
                          a = o = f.length;
                        o--;

                      )
                        (u = f[o]),
                          (!i && g !== u.origType) ||
                            (n && n.guid !== u.guid) ||
                            (s && !s.test(u.namespace)) ||
                            (r &&
                              r !== u.selector &&
                              ("**" !== r || !u.selector)) ||
                            (f.splice(o, 1),
                            u.selector && f.delegateCount--,
                            d.remove && d.remove.call(e, u));
                      a &&
                        !f.length &&
                        ((d.teardown &&
                          !1 !== d.teardown.call(e, h, v.handle)) ||
                          P.removeEvent(e, p, v.handle),
                        delete c[p]);
                    } else for (p in c) P.event.remove(e, p + t[l], n, r, !0);
                  P.isEmptyObject(c) && K.remove(e, "handle events");
                }
              },
              dispatch: function (e) {
                var t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s = new Array(arguments.length),
                  c = P.event.fix(e),
                  l =
                    (K.get(this, "events") || Object.create(null))[c.type] ||
                    [],
                  u = P.event.special[c.type] || {};
                for (s[0] = c, t = 1; t < arguments.length; t++)
                  s[t] = arguments[t];
                if (
                  ((c.delegateTarget = this),
                  !u.preDispatch || !1 !== u.preDispatch.call(this, c))
                ) {
                  for (
                    a = P.event.handlers.call(this, c, l), t = 0;
                    (i = a[t++]) && !c.isPropagationStopped();

                  )
                    for (
                      c.currentTarget = i.elem, n = 0;
                      (o = i.handlers[n++]) &&
                      !c.isImmediatePropagationStopped();

                    )
                      (c.rnamespace &&
                        !1 !== o.namespace &&
                        !c.rnamespace.test(o.namespace)) ||
                        ((c.handleObj = o),
                        (c.data = o.data),
                        void 0 !==
                          (r = (
                            (P.event.special[o.origType] || {}).handle ||
                            o.handler
                          ).apply(i.elem, s)) &&
                          !1 === (c.result = r) &&
                          (c.preventDefault(), c.stopPropagation()));
                  return (
                    u.postDispatch && u.postDispatch.call(this, c), c.result
                  );
                }
              },
              handlers: function (e, t) {
                var n,
                  r,
                  i,
                  o,
                  a,
                  s = [],
                  c = t.delegateCount,
                  l = e.target;
                if (c && l.nodeType && !("click" === e.type && 1 <= e.button))
                  for (; l !== this; l = l.parentNode || this)
                    if (
                      1 === l.nodeType &&
                      ("click" !== e.type || !0 !== l.disabled)
                    ) {
                      for (o = [], a = {}, n = 0; n < c; n++)
                        void 0 === a[(i = (r = t[n]).selector + " ")] &&
                          (a[i] = r.needsContext
                            ? -1 < P(i, this).index(l)
                            : P.find(i, this, null, [l]).length),
                          a[i] && o.push(r);
                      o.length && s.push({ elem: l, handlers: o });
                    }
                return (
                  (l = this),
                  c < t.length && s.push({ elem: l, handlers: t.slice(c) }),
                  s
                );
              },
              addProp: function (e, t) {
                Object.defineProperty(P.Event.prototype, e, {
                  enumerable: !0,
                  configurable: !0,
                  get: m(t)
                    ? function () {
                        if (this.originalEvent) return t(this.originalEvent);
                      }
                    : function () {
                        if (this.originalEvent) return this.originalEvent[e];
                      },
                  set: function (t) {
                    Object.defineProperty(this, e, {
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                      value: t,
                    });
                  },
                });
              },
              fix: function (e) {
                return e[P.expando] ? e : new P.Event(e);
              },
              special: {
                load: { noBubble: !0 },
                click: {
                  setup: function (e) {
                    var t = this || e;
                    return (
                      ge.test(t.type) &&
                        t.click &&
                        k(t, "input") &&
                        ke(t, "click", Se),
                      !1
                    );
                  },
                  trigger: function (e) {
                    var t = this || e;
                    return (
                      ge.test(t.type) &&
                        t.click &&
                        k(t, "input") &&
                        ke(t, "click"),
                      !0
                    );
                  },
                  _default: function (e) {
                    var t = e.target;
                    return (
                      (ge.test(t.type) &&
                        t.click &&
                        k(t, "input") &&
                        K.get(t, "click")) ||
                      k(t, "a")
                    );
                  },
                },
                beforeunload: {
                  postDispatch: function (e) {
                    void 0 !== e.result &&
                      e.originalEvent &&
                      (e.originalEvent.returnValue = e.result);
                  },
                },
              },
            }),
              (P.removeEvent = function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n);
              }),
              (P.Event = function (e, t) {
                if (!(this instanceof P.Event)) return new P.Event(e, t);
                e && e.type
                  ? ((this.originalEvent = e),
                    (this.type = e.type),
                    (this.isDefaultPrevented =
                      e.defaultPrevented ||
                      (void 0 === e.defaultPrevented && !1 === e.returnValue)
                        ? Se
                        : He),
                    (this.target =
                      e.target && 3 === e.target.nodeType
                        ? e.target.parentNode
                        : e.target),
                    (this.currentTarget = e.currentTarget),
                    (this.relatedTarget = e.relatedTarget))
                  : (this.type = e),
                  t && P.extend(this, t),
                  (this.timeStamp = (e && e.timeStamp) || Date.now()),
                  (this[P.expando] = !0);
              }),
              (P.Event.prototype = {
                constructor: P.Event,
                isDefaultPrevented: He,
                isPropagationStopped: He,
                isImmediatePropagationStopped: He,
                isSimulated: !1,
                preventDefault: function () {
                  var e = this.originalEvent;
                  (this.isDefaultPrevented = Se),
                    e && !this.isSimulated && e.preventDefault();
                },
                stopPropagation: function () {
                  var e = this.originalEvent;
                  (this.isPropagationStopped = Se),
                    e && !this.isSimulated && e.stopPropagation();
                },
                stopImmediatePropagation: function () {
                  var e = this.originalEvent;
                  (this.isImmediatePropagationStopped = Se),
                    e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation();
                },
              }),
              P.each(
                {
                  altKey: !0,
                  bubbles: !0,
                  cancelable: !0,
                  changedTouches: !0,
                  ctrlKey: !0,
                  detail: !0,
                  eventPhase: !0,
                  metaKey: !0,
                  pageX: !0,
                  pageY: !0,
                  shiftKey: !0,
                  view: !0,
                  char: !0,
                  code: !0,
                  charCode: !0,
                  key: !0,
                  keyCode: !0,
                  button: !0,
                  buttons: !0,
                  clientX: !0,
                  clientY: !0,
                  offsetX: !0,
                  offsetY: !0,
                  pointerId: !0,
                  pointerType: !0,
                  screenX: !0,
                  screenY: !0,
                  targetTouches: !0,
                  toElement: !0,
                  touches: !0,
                  which: function (e) {
                    var t = e.button;
                    return null == e.which && Te.test(e.type)
                      ? null != e.charCode
                        ? e.charCode
                        : e.keyCode
                      : !e.which && void 0 !== t && Pe.test(e.type)
                      ? 1 & t
                        ? 1
                        : 2 & t
                        ? 3
                        : 4 & t
                        ? 2
                        : 0
                      : e.which;
                  },
                },
                P.event.addProp
              ),
              P.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                P.event.special[e] = {
                  setup: function () {
                    return ke(this, e, Ie), !1;
                  },
                  trigger: function () {
                    return ke(this, e), !0;
                  },
                  delegateType: t,
                };
              }),
              P.each(
                {
                  mouseenter: "mouseover",
                  mouseleave: "mouseout",
                  pointerenter: "pointerover",
                  pointerleave: "pointerout",
                },
                function (e, t) {
                  P.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (e) {
                      var n,
                        r = e.relatedTarget,
                        i = e.handleObj;
                      return (
                        (r && (r === this || P.contains(this, r))) ||
                          ((e.type = i.origType),
                          (n = i.handler.apply(this, arguments)),
                          (e.type = t)),
                        n
                      );
                    },
                  };
                }
              ),
              P.fn.extend({
                on: function (e, t, n, r) {
                  return De(this, e, t, n, r);
                },
                one: function (e, t, n, r) {
                  return De(this, e, t, n, r, 1);
                },
                off: function (e, t, n) {
                  var r, i;
                  if (e && e.preventDefault && e.handleObj)
                    return (
                      (r = e.handleObj),
                      P(e.delegateTarget).off(
                        r.namespace
                          ? r.origType + "." + r.namespace
                          : r.origType,
                        r.selector,
                        r.handler
                      ),
                      this
                    );
                  if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this;
                  }
                  return (
                    (!1 !== t && "function" != typeof t) ||
                      ((n = t), (t = void 0)),
                    !1 === n && (n = He),
                    this.each(function () {
                      P.event.remove(this, e, n, t);
                    })
                  );
                },
              });
            var Ae = /<script|<style|<link/i,
              je = /checked\s*(?:[^=]|=\s*.checked.)/i,
              Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function Ne(e, t) {
              return (
                (k(e, "table") &&
                  k(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                  P(e).children("tbody")[0]) ||
                e
              );
            }
            function qe(e) {
              return (
                (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
              );
            }
            function Oe(e) {
              return (
                "true/" === (e.type || "").slice(0, 5)
                  ? (e.type = e.type.slice(5))
                  : e.removeAttribute("type"),
                e
              );
            }
            function Fe(e, t) {
              var n, r, i, o, a, s;
              if (1 === t.nodeType) {
                if (K.hasData(e) && (s = K.get(e).events))
                  for (i in (K.remove(t, "handle events"), s))
                    for (n = 0, r = s[i].length; n < r; n++)
                      P.event.add(t, i, s[i][n]);
                Z.hasData(e) &&
                  ((o = Z.access(e)), (a = P.extend({}, o)), Z.set(t, a));
              }
            }
            function Re(e, t, n, r) {
              t = c(t);
              var i,
                o,
                a,
                s,
                l,
                u,
                d = 0,
                f = e.length,
                p = f - 1,
                h = t[0],
                g = m(h);
              if (
                g ||
                (1 < f && "string" == typeof h && !v.checkClone && je.test(h))
              )
                return e.each(function (i) {
                  var o = e.eq(i);
                  g && (t[0] = h.call(this, i, o.html())), Re(o, t, n, r);
                });
              if (
                f &&
                ((o = (i = Ce(t, e[0].ownerDocument, !1, e, r)).firstChild),
                1 === i.childNodes.length && (i = o),
                o || r)
              ) {
                for (s = (a = P.map(be(i, "script"), qe)).length; d < f; d++)
                  (l = i),
                    d !== p &&
                      ((l = P.clone(l, !0, !0)),
                      s && P.merge(a, be(l, "script"))),
                    n.call(e[d], l, d);
                if (s)
                  for (
                    u = a[a.length - 1].ownerDocument, P.map(a, Oe), d = 0;
                    d < s;
                    d++
                  )
                    (l = a[d]),
                      me.test(l.type || "") &&
                        !K.access(l, "globalEval") &&
                        P.contains(u, l) &&
                        (l.src && "module" !== (l.type || "").toLowerCase()
                          ? P._evalUrl &&
                            !l.noModule &&
                            P._evalUrl(
                              l.src,
                              { nonce: l.nonce || l.getAttribute("nonce") },
                              u
                            )
                          : w(l.textContent.replace(Le, ""), l, u));
              }
              return e;
            }
            function Me(e, t, n) {
              for (
                var r, i = t ? P.filter(t, e) : e, o = 0;
                null != (r = i[o]);
                o++
              )
                n || 1 !== r.nodeType || P.cleanData(be(r)),
                  r.parentNode &&
                    (n && se(r) && xe(be(r, "script")),
                    r.parentNode.removeChild(r));
              return e;
            }
            P.extend({
              htmlPrefilter: function (e) {
                return e;
              },
              clone: function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s,
                  c,
                  l,
                  u = e.cloneNode(!0),
                  d = se(e);
                if (
                  !(
                    v.noCloneChecked ||
                    (1 !== e.nodeType && 11 !== e.nodeType) ||
                    P.isXMLDoc(e)
                  )
                )
                  for (a = be(u), r = 0, i = (o = be(e)).length; r < i; r++)
                    (s = o[r]),
                      "input" === (l = (c = a[r]).nodeName.toLowerCase()) &&
                      ge.test(s.type)
                        ? (c.checked = s.checked)
                        : ("input" !== l && "textarea" !== l) ||
                          (c.defaultValue = s.defaultValue);
                if (t)
                  if (n)
                    for (
                      o = o || be(e), a = a || be(u), r = 0, i = o.length;
                      r < i;
                      r++
                    )
                      Fe(o[r], a[r]);
                  else Fe(e, u);
                return (
                  0 < (a = be(u, "script")).length &&
                    xe(a, !d && be(e, "script")),
                  u
                );
              },
              cleanData: function (e) {
                for (
                  var t, n, r, i = P.event.special, o = 0;
                  void 0 !== (n = e[o]);
                  o++
                )
                  if (J(n)) {
                    if ((t = n[K.expando])) {
                      if (t.events)
                        for (r in t.events)
                          i[r]
                            ? P.event.remove(n, r)
                            : P.removeEvent(n, r, t.handle);
                      n[K.expando] = void 0;
                    }
                    n[Z.expando] && (n[Z.expando] = void 0);
                  }
              },
            }),
              P.fn.extend({
                detach: function (e) {
                  return Me(this, e, !0);
                },
                remove: function (e) {
                  return Me(this, e);
                },
                text: function (e) {
                  return V(
                    this,
                    function (e) {
                      return void 0 === e
                        ? P.text(this)
                        : this.empty().each(function () {
                            (1 !== this.nodeType &&
                              11 !== this.nodeType &&
                              9 !== this.nodeType) ||
                              (this.textContent = e);
                          });
                    },
                    null,
                    e,
                    arguments.length
                  );
                },
                append: function () {
                  return Re(this, arguments, function (e) {
                    (1 !== this.nodeType &&
                      11 !== this.nodeType &&
                      9 !== this.nodeType) ||
                      Ne(this, e).appendChild(e);
                  });
                },
                prepend: function () {
                  return Re(this, arguments, function (e) {
                    if (
                      1 === this.nodeType ||
                      11 === this.nodeType ||
                      9 === this.nodeType
                    ) {
                      var t = Ne(this, e);
                      t.insertBefore(e, t.firstChild);
                    }
                  });
                },
                before: function () {
                  return Re(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                  });
                },
                after: function () {
                  return Re(this, arguments, function (e) {
                    this.parentNode &&
                      this.parentNode.insertBefore(e, this.nextSibling);
                  });
                },
                empty: function () {
                  for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType &&
                      (P.cleanData(be(e, !1)), (e.textContent = ""));
                  return this;
                },
                clone: function (e, t) {
                  return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                      return P.clone(this, e, t);
                    })
                  );
                },
                html: function (e) {
                  return V(
                    this,
                    function (e) {
                      var t = this[0] || {},
                        n = 0,
                        r = this.length;
                      if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                      if (
                        "string" == typeof e &&
                        !Ae.test(e) &&
                        !ye[(ve.exec(e) || ["", ""])[1].toLowerCase()]
                      ) {
                        e = P.htmlPrefilter(e);
                        try {
                          for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType &&
                              (P.cleanData(be(t, !1)), (t.innerHTML = e));
                          t = 0;
                        } catch (e) {}
                      }
                      t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                  );
                },
                replaceWith: function () {
                  var e = [];
                  return Re(
                    this,
                    arguments,
                    function (t) {
                      var n = this.parentNode;
                      P.inArray(this, e) < 0 &&
                        (P.cleanData(be(this)), n && n.replaceChild(t, this));
                    },
                    e
                  );
                },
              }),
              P.each(
                {
                  appendTo: "append",
                  prependTo: "prepend",
                  insertBefore: "before",
                  insertAfter: "after",
                  replaceAll: "replaceWith",
                },
                function (e, t) {
                  P.fn[e] = function (e) {
                    for (
                      var n, r = [], i = P(e), o = i.length - 1, a = 0;
                      a <= o;
                      a++
                    )
                      (n = a === o ? this : this.clone(!0)),
                        P(i[a])[t](n),
                        l.apply(r, n.get());
                    return this.pushStack(r);
                  };
                }
              );
            var Be = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
              Qe = function (e) {
                var t = e.ownerDocument.defaultView;
                return (t && t.opener) || (t = r), t.getComputedStyle(e);
              },
              ze = function (e, t, n) {
                var r,
                  i,
                  o = {};
                for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
                for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
                return r;
              },
              Ue = new RegExp(oe.join("|"), "i");
            function $e(e, t, n) {
              var r,
                i,
                o,
                a,
                s = e.style;
              return (
                (n = n || Qe(e)) &&
                  ("" !== (a = n.getPropertyValue(t) || n[t]) ||
                    se(e) ||
                    (a = P.style(e, t)),
                  !v.pixelBoxStyles() &&
                    Be.test(a) &&
                    Ue.test(t) &&
                    ((r = s.width),
                    (i = s.minWidth),
                    (o = s.maxWidth),
                    (s.minWidth = s.maxWidth = s.width = a),
                    (a = n.width),
                    (s.width = r),
                    (s.minWidth = i),
                    (s.maxWidth = o))),
                void 0 !== a ? a + "" : a
              );
            }
            function Ve(e, t) {
              return {
                get: function () {
                  if (!e()) return (this.get = t).apply(this, arguments);
                  delete this.get;
                },
              };
            }
            !(function () {
              function e() {
                if (u) {
                  (l.style.cssText =
                    "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (u.style.cssText =
                      "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    ae.appendChild(l).appendChild(u);
                  var e = r.getComputedStyle(u);
                  (n = "1%" !== e.top),
                    (c = 12 === t(e.marginLeft)),
                    (u.style.right = "60%"),
                    (a = 36 === t(e.right)),
                    (i = 36 === t(e.width)),
                    (u.style.position = "absolute"),
                    (o = 12 === t(u.offsetWidth / 3)),
                    ae.removeChild(l),
                    (u = null);
                }
              }
              function t(e) {
                return Math.round(parseFloat(e));
              }
              var n,
                i,
                o,
                a,
                s,
                c,
                l = b.createElement("div"),
                u = b.createElement("div");
              u.style &&
                ((u.style.backgroundClip = "content-box"),
                (u.cloneNode(!0).style.backgroundClip = ""),
                (v.clearCloneStyle = "content-box" === u.style.backgroundClip),
                P.extend(v, {
                  boxSizingReliable: function () {
                    return e(), i;
                  },
                  pixelBoxStyles: function () {
                    return e(), a;
                  },
                  pixelPosition: function () {
                    return e(), n;
                  },
                  reliableMarginLeft: function () {
                    return e(), c;
                  },
                  scrollboxSize: function () {
                    return e(), o;
                  },
                  reliableTrDimensions: function () {
                    var e, t, n, i;
                    return (
                      null == s &&
                        ((e = b.createElement("table")),
                        (t = b.createElement("tr")),
                        (n = b.createElement("div")),
                        (e.style.cssText = "position:absolute;left:-11111px"),
                        (t.style.height = "1px"),
                        (n.style.height = "9px"),
                        ae.appendChild(e).appendChild(t).appendChild(n),
                        (i = r.getComputedStyle(t)),
                        (s = 3 < parseInt(i.height)),
                        ae.removeChild(e)),
                      s
                    );
                  },
                }));
            })();
            var Xe = ["Webkit", "Moz", "ms"],
              We = b.createElement("div").style,
              _e = {};
            function Ye(e) {
              return (
                P.cssProps[e] ||
                _e[e] ||
                (e in We
                  ? e
                  : (_e[e] =
                      (function (e) {
                        for (
                          var t = e[0].toUpperCase() + e.slice(1),
                            n = Xe.length;
                          n--;

                        )
                          if ((e = Xe[n] + t) in We) return e;
                      })(e) || e))
              );
            }
            var Je = /^(none|table(?!-c[ea]).+)/,
              Ge = /^--/,
              Ke = {
                position: "absolute",
                visibility: "hidden",
                display: "block",
              },
              Ze = { letterSpacing: "0", fontWeight: "400" };
            function et(e, t, n) {
              var r = ie.exec(t);
              return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
            }
            function tt(e, t, n, r, i, o) {
              var a = "width" === t ? 1 : 0,
                s = 0,
                c = 0;
              if (n === (r ? "border" : "content")) return 0;
              for (; a < 4; a += 2)
                "margin" === n && (c += P.css(e, n + oe[a], !0, i)),
                  r
                    ? ("content" === n &&
                        (c -= P.css(e, "padding" + oe[a], !0, i)),
                      "margin" !== n &&
                        (c -= P.css(e, "border" + oe[a] + "Width", !0, i)))
                    : ((c += P.css(e, "padding" + oe[a], !0, i)),
                      "padding" !== n
                        ? (c += P.css(e, "border" + oe[a] + "Width", !0, i))
                        : (s += P.css(e, "border" + oe[a] + "Width", !0, i)));
              return (
                !r &&
                  0 <= o &&
                  (c +=
                    Math.max(
                      0,
                      Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          o -
                          c -
                          s -
                          0.5
                      )
                    ) || 0),
                c
              );
            }
            function nt(e, t, n) {
              var r = Qe(e),
                i =
                  (!v.boxSizingReliable() || n) &&
                  "border-box" === P.css(e, "boxSizing", !1, r),
                o = i,
                a = $e(e, t, r),
                s = "offset" + t[0].toUpperCase() + t.slice(1);
              if (Be.test(a)) {
                if (!n) return a;
                a = "auto";
              }
              return (
                ((!v.boxSizingReliable() && i) ||
                  (!v.reliableTrDimensions() && k(e, "tr")) ||
                  "auto" === a ||
                  (!parseFloat(a) &&
                    "inline" === P.css(e, "display", !1, r))) &&
                  e.getClientRects().length &&
                  ((i = "border-box" === P.css(e, "boxSizing", !1, r)),
                  (o = s in e) && (a = e[s])),
                (a = parseFloat(a) || 0) +
                  tt(e, t, n || (i ? "border" : "content"), o, r, a) +
                  "px"
              );
            }
            function rt(e, t, n, r, i) {
              return new rt.prototype.init(e, t, n, r, i);
            }
            P.extend({
              cssHooks: {
                opacity: {
                  get: function (e, t) {
                    if (t) {
                      var n = $e(e, "opacity");
                      return "" === n ? "1" : n;
                    }
                  },
                },
              },
              cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
              },
              cssProps: {},
              style: function (e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                  var i,
                    o,
                    a,
                    s = Y(t),
                    c = Ge.test(t),
                    l = e.style;
                  if (
                    (c || (t = Ye(s)),
                    (a = P.cssHooks[t] || P.cssHooks[s]),
                    void 0 === n)
                  )
                    return a && "get" in a && void 0 !== (i = a.get(e, !1, r))
                      ? i
                      : l[t];
                  "string" == (o = typeof n) &&
                    (i = ie.exec(n)) &&
                    i[1] &&
                    ((n = ue(e, t, i)), (o = "number")),
                    null != n &&
                      n == n &&
                      ("number" !== o ||
                        c ||
                        (n += (i && i[3]) || (P.cssNumber[s] ? "" : "px")),
                      v.clearCloneStyle ||
                        "" !== n ||
                        0 !== t.indexOf("background") ||
                        (l[t] = "inherit"),
                      (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                        (c ? l.setProperty(t, n) : (l[t] = n)));
                }
              },
              css: function (e, t, n, r) {
                var i,
                  o,
                  a,
                  s = Y(t);
                return (
                  Ge.test(t) || (t = Ye(s)),
                  (a = P.cssHooks[t] || P.cssHooks[s]) &&
                    "get" in a &&
                    (i = a.get(e, !0, n)),
                  void 0 === i && (i = $e(e, t, r)),
                  "normal" === i && t in Ze && (i = Ze[t]),
                  "" === n || n
                    ? ((o = parseFloat(i)),
                      !0 === n || isFinite(o) ? o || 0 : i)
                    : i
                );
              },
            }),
              P.each(["height", "width"], function (e, t) {
                P.cssHooks[t] = {
                  get: function (e, n, r) {
                    if (n)
                      return !Je.test(P.css(e, "display")) ||
                        (e.getClientRects().length &&
                          e.getBoundingClientRect().width)
                        ? nt(e, t, r)
                        : ze(e, Ke, function () {
                            return nt(e, t, r);
                          });
                  },
                  set: function (e, n, r) {
                    var i,
                      o = Qe(e),
                      a = !v.scrollboxSize() && "absolute" === o.position,
                      s =
                        (a || r) &&
                        "border-box" === P.css(e, "boxSizing", !1, o),
                      c = r ? tt(e, t, r, s, o) : 0;
                    return (
                      s &&
                        a &&
                        (c -= Math.ceil(
                          e["offset" + t[0].toUpperCase() + t.slice(1)] -
                            parseFloat(o[t]) -
                            tt(e, t, "border", !1, o) -
                            0.5
                        )),
                      c &&
                        (i = ie.exec(n)) &&
                        "px" !== (i[3] || "px") &&
                        ((e.style[t] = n), (n = P.css(e, t))),
                      et(0, n, c)
                    );
                  },
                };
              }),
              (P.cssHooks.marginLeft = Ve(
                v.reliableMarginLeft,
                function (e, t) {
                  if (t)
                    return (
                      (parseFloat($e(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                          ze(e, { marginLeft: 0 }, function () {
                            return e.getBoundingClientRect().left;
                          })) + "px"
                    );
                }
              )),
              P.each(
                { margin: "", padding: "", border: "Width" },
                function (e, t) {
                  (P.cssHooks[e + t] = {
                    expand: function (n) {
                      for (
                        var r = 0,
                          i = {},
                          o = "string" == typeof n ? n.split(" ") : [n];
                        r < 4;
                        r++
                      )
                        i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                      return i;
                    },
                  }),
                    "margin" !== e && (P.cssHooks[e + t].set = et);
                }
              ),
              P.fn.extend({
                css: function (e, t) {
                  return V(
                    this,
                    function (e, t, n) {
                      var r,
                        i,
                        o = {},
                        a = 0;
                      if (Array.isArray(t)) {
                        for (r = Qe(e), i = t.length; a < i; a++)
                          o[t[a]] = P.css(e, t[a], !1, r);
                        return o;
                      }
                      return void 0 !== n ? P.style(e, t, n) : P.css(e, t);
                    },
                    e,
                    t,
                    1 < arguments.length
                  );
                },
              }),
              (((P.Tween = rt).prototype = {
                constructor: rt,
                init: function (e, t, n, r, i, o) {
                  (this.elem = e),
                    (this.prop = n),
                    (this.easing = i || P.easing._default),
                    (this.options = t),
                    (this.start = this.now = this.cur()),
                    (this.end = r),
                    (this.unit = o || (P.cssNumber[n] ? "" : "px"));
                },
                cur: function () {
                  var e = rt.propHooks[this.prop];
                  return e && e.get
                    ? e.get(this)
                    : rt.propHooks._default.get(this);
                },
                run: function (e) {
                  var t,
                    n = rt.propHooks[this.prop];
                  return (
                    this.options.duration
                      ? (this.pos = t =
                          P.easing[this.easing](
                            e,
                            this.options.duration * e,
                            0,
                            1,
                            this.options.duration
                          ))
                      : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step &&
                      this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : rt.propHooks._default.set(this),
                    this
                  );
                },
              }).init.prototype = rt.prototype),
              ((rt.propHooks = {
                _default: {
                  get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType ||
                      (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                      ? e.elem[e.prop]
                      : (t = P.css(e.elem, e.prop, "")) && "auto" !== t
                      ? t
                      : 0;
                  },
                  set: function (e) {
                    P.fx.step[e.prop]
                      ? P.fx.step[e.prop](e)
                      : 1 !== e.elem.nodeType ||
                        (!P.cssHooks[e.prop] &&
                          null == e.elem.style[Ye(e.prop)])
                      ? (e.elem[e.prop] = e.now)
                      : P.style(e.elem, e.prop, e.now + e.unit);
                  },
                },
              }).scrollTop = rt.propHooks.scrollLeft =
                {
                  set: function (e) {
                    e.elem.nodeType &&
                      e.elem.parentNode &&
                      (e.elem[e.prop] = e.now);
                  },
                }),
              (P.easing = {
                linear: function (e) {
                  return e;
                },
                swing: function (e) {
                  return 0.5 - Math.cos(e * Math.PI) / 2;
                },
                _default: "swing",
              }),
              (P.fx = rt.prototype.init),
              (P.fx.step = {});
            var it,
              ot,
              at,
              st,
              ct = /^(?:toggle|show|hide)$/,
              lt = /queueHooks$/;
            function ut() {
              ot &&
                (!1 === b.hidden && r.requestAnimationFrame
                  ? r.requestAnimationFrame(ut)
                  : r.setTimeout(ut, P.fx.interval),
                P.fx.tick());
            }
            function dt() {
              return (
                r.setTimeout(function () {
                  it = void 0;
                }),
                (it = Date.now())
              );
            }
            function ft(e, t) {
              var n,
                r = 0,
                i = { height: e };
              for (t = t ? 1 : 0; r < 4; r += 2 - t)
                i["margin" + (n = oe[r])] = i["padding" + n] = e;
              return t && (i.opacity = i.width = e), i;
            }
            function pt(e, t, n) {
              for (
                var r,
                  i = (ht.tweeners[t] || []).concat(ht.tweeners["*"]),
                  o = 0,
                  a = i.length;
                o < a;
                o++
              )
                if ((r = i[o].call(n, t, e))) return r;
            }
            function ht(e, t, n) {
              var r,
                i,
                o = 0,
                a = ht.prefilters.length,
                s = P.Deferred().always(function () {
                  delete c.elem;
                }),
                c = function () {
                  if (i) return !1;
                  for (
                    var t = it || dt(),
                      n = Math.max(0, l.startTime + l.duration - t),
                      r = 1 - (n / l.duration || 0),
                      o = 0,
                      a = l.tweens.length;
                    o < a;
                    o++
                  )
                    l.tweens[o].run(r);
                  return (
                    s.notifyWith(e, [l, r, n]),
                    r < 1 && a
                      ? n
                      : (a || s.notifyWith(e, [l, 1, 0]),
                        s.resolveWith(e, [l]),
                        !1)
                  );
                },
                l = s.promise({
                  elem: e,
                  props: P.extend({}, t),
                  opts: P.extend(
                    !0,
                    { specialEasing: {}, easing: P.easing._default },
                    n
                  ),
                  originalProperties: t,
                  originalOptions: n,
                  startTime: it || dt(),
                  duration: n.duration,
                  tweens: [],
                  createTween: function (t, n) {
                    var r = P.Tween(
                      e,
                      l.opts,
                      t,
                      n,
                      l.opts.specialEasing[t] || l.opts.easing
                    );
                    return l.tweens.push(r), r;
                  },
                  stop: function (t) {
                    var n = 0,
                      r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return (
                      t
                        ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
                        : s.rejectWith(e, [l, t]),
                      this
                    );
                  },
                }),
                u = l.props;
              for (
                (function (e, t) {
                  var n, r, i, o, a;
                  for (n in e)
                    if (
                      ((i = t[(r = Y(n))]),
                      (o = e[n]),
                      Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                      n !== r && ((e[r] = o), delete e[n]),
                      (a = P.cssHooks[r]) && ("expand" in a))
                    )
                      for (n in ((o = a.expand(o)), delete e[r], o))
                        (n in e) || ((e[n] = o[n]), (t[n] = i));
                    else t[r] = i;
                })(u, l.opts.specialEasing);
                o < a;
                o++
              )
                if ((r = ht.prefilters[o].call(l, e, u, l.opts)))
                  return (
                    m(r.stop) &&
                      (P._queueHooks(l.elem, l.opts.queue).stop =
                        r.stop.bind(r)),
                    r
                  );
              return (
                P.map(u, pt, l),
                m(l.opts.start) && l.opts.start.call(e, l),
                l
                  .progress(l.opts.progress)
                  .done(l.opts.done, l.opts.complete)
                  .fail(l.opts.fail)
                  .always(l.opts.always),
                P.fx.timer(
                  P.extend(c, { elem: e, anim: l, queue: l.opts.queue })
                ),
                l
              );
            }
            (P.Animation = P.extend(ht, {
              tweeners: {
                "*": [
                  function (e, t) {
                    var n = this.createTween(e, t);
                    return ue(n.elem, e, ie.exec(t), n), n;
                  },
                ],
              },
              tweener: function (e, t) {
                m(e) ? ((t = e), (e = ["*"])) : (e = e.match(R));
                for (var n, r = 0, i = e.length; r < i; r++)
                  (n = e[r]),
                    (ht.tweeners[n] = ht.tweeners[n] || []),
                    ht.tweeners[n].unshift(t);
              },
              prefilters: [
                function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    c,
                    l,
                    u,
                    d = "width" in t || "height" in t,
                    f = this,
                    p = {},
                    h = e.style,
                    g = e.nodeType && le(e),
                    v = K.get(e, "fxshow");
                  for (r in (n.queue ||
                    (null == (a = P._queueHooks(e, "fx")).unqueued &&
                      ((a.unqueued = 0),
                      (s = a.empty.fire),
                      (a.empty.fire = function () {
                        a.unqueued || s();
                      })),
                    a.unqueued++,
                    f.always(function () {
                      f.always(function () {
                        a.unqueued--, P.queue(e, "fx").length || a.empty.fire();
                      });
                    })),
                  t))
                    if (((i = t[r]), ct.test(i))) {
                      if (
                        (delete t[r],
                        (o = o || "toggle" === i),
                        i === (g ? "hide" : "show"))
                      ) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0;
                      }
                      p[r] = (v && v[r]) || P.style(e, r);
                    }
                  if ((c = !P.isEmptyObject(t)) || !P.isEmptyObject(p))
                    for (r in (d &&
                      1 === e.nodeType &&
                      ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                      null == (l = v && v.display) && (l = K.get(e, "display")),
                      "none" === (u = P.css(e, "display")) &&
                        (l
                          ? (u = l)
                          : (fe([e], !0),
                            (l = e.style.display || l),
                            (u = P.css(e, "display")),
                            fe([e]))),
                      ("inline" === u || ("inline-block" === u && null != l)) &&
                        "none" === P.css(e, "float") &&
                        (c ||
                          (f.done(function () {
                            h.display = l;
                          }),
                          null == l &&
                            ((u = h.display), (l = "none" === u ? "" : u))),
                        (h.display = "inline-block"))),
                    n.overflow &&
                      ((h.overflow = "hidden"),
                      f.always(function () {
                        (h.overflow = n.overflow[0]),
                          (h.overflowX = n.overflow[1]),
                          (h.overflowY = n.overflow[2]);
                      })),
                    (c = !1),
                    p))
                      c ||
                        (v
                          ? "hidden" in v && (g = v.hidden)
                          : (v = K.access(e, "fxshow", { display: l })),
                        o && (v.hidden = !g),
                        g && fe([e], !0),
                        f.done(function () {
                          for (r in (g || fe([e]), K.remove(e, "fxshow"), p))
                            P.style(e, r, p[r]);
                        })),
                        (c = pt(g ? v[r] : 0, r, f)),
                        r in v ||
                          ((v[r] = c.start),
                          g && ((c.end = c.start), (c.start = 0)));
                },
              ],
              prefilter: function (e, t) {
                t ? ht.prefilters.unshift(e) : ht.prefilters.push(e);
              },
            })),
              (P.speed = function (e, t, n) {
                var r =
                  e && "object" == typeof e
                    ? P.extend({}, e)
                    : {
                        complete: n || (!n && t) || (m(e) && e),
                        duration: e,
                        easing: (n && t) || (t && !m(t) && t),
                      };
                return (
                  P.fx.off
                    ? (r.duration = 0)
                    : "number" != typeof r.duration &&
                      (r.duration in P.fx.speeds
                        ? (r.duration = P.fx.speeds[r.duration])
                        : (r.duration = P.fx.speeds._default)),
                  (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                  (r.old = r.complete),
                  (r.complete = function () {
                    m(r.old) && r.old.call(this),
                      r.queue && P.dequeue(this, r.queue);
                  }),
                  r
                );
              }),
              P.fn.extend({
                fadeTo: function (e, t, n, r) {
                  return this.filter(le)
                    .css("opacity", 0)
                    .show()
                    .end()
                    .animate({ opacity: t }, e, n, r);
                },
                animate: function (e, t, n, r) {
                  var i = P.isEmptyObject(e),
                    o = P.speed(t, n, r),
                    a = function () {
                      var t = ht(this, P.extend({}, e), o);
                      (i || K.get(this, "finish")) && t.stop(!0);
                    };
                  return (
                    (a.finish = a),
                    i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                  );
                },
                stop: function (e, t, n) {
                  var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n);
                  };
                  return (
                    "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                    t && this.queue(e || "fx", []),
                    this.each(function () {
                      var t = !0,
                        i = null != e && e + "queueHooks",
                        o = P.timers,
                        a = K.get(this);
                      if (i) a[i] && a[i].stop && r(a[i]);
                      else
                        for (i in a) a[i] && a[i].stop && lt.test(i) && r(a[i]);
                      for (i = o.length; i--; )
                        o[i].elem !== this ||
                          (null != e && o[i].queue !== e) ||
                          (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                      (!t && n) || P.dequeue(this, e);
                    })
                  );
                },
                finish: function (e) {
                  return (
                    !1 !== e && (e = e || "fx"),
                    this.each(function () {
                      var t,
                        n = K.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = P.timers,
                        a = r ? r.length : 0;
                      for (
                        n.finish = !0,
                          P.queue(this, e, []),
                          i && i.stop && i.stop.call(this, !0),
                          t = o.length;
                        t--;

                      )
                        o[t].elem === this &&
                          o[t].queue === e &&
                          (o[t].anim.stop(!0), o.splice(t, 1));
                      for (t = 0; t < a; t++)
                        r[t] && r[t].finish && r[t].finish.call(this);
                      delete n.finish;
                    })
                  );
                },
              }),
              P.each(["toggle", "show", "hide"], function (e, t) {
                var n = P.fn[t];
                P.fn[t] = function (e, r, i) {
                  return null == e || "boolean" == typeof e
                    ? n.apply(this, arguments)
                    : this.animate(ft(t, !0), e, r, i);
                };
              }),
              P.each(
                {
                  slideDown: ft("show"),
                  slideUp: ft("hide"),
                  slideToggle: ft("toggle"),
                  fadeIn: { opacity: "show" },
                  fadeOut: { opacity: "hide" },
                  fadeToggle: { opacity: "toggle" },
                },
                function (e, t) {
                  P.fn[e] = function (e, n, r) {
                    return this.animate(t, e, n, r);
                  };
                }
              ),
              (P.timers = []),
              (P.fx.tick = function () {
                var e,
                  t = 0,
                  n = P.timers;
                for (it = Date.now(); t < n.length; t++)
                  (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || P.fx.stop(), (it = void 0);
              }),
              (P.fx.timer = function (e) {
                P.timers.push(e), P.fx.start();
              }),
              (P.fx.interval = 13),
              (P.fx.start = function () {
                ot || ((ot = !0), ut());
              }),
              (P.fx.stop = function () {
                ot = null;
              }),
              (P.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
              (P.fn.delay = function (e, t) {
                return (
                  (e = (P.fx && P.fx.speeds[e]) || e),
                  (t = t || "fx"),
                  this.queue(t, function (t, n) {
                    var i = r.setTimeout(t, e);
                    n.stop = function () {
                      r.clearTimeout(i);
                    };
                  })
                );
              }),
              (at = b.createElement("input")),
              (st = b
                .createElement("select")
                .appendChild(b.createElement("option"))),
              (at.type = "checkbox"),
              (v.checkOn = "" !== at.value),
              (v.optSelected = st.selected),
              ((at = b.createElement("input")).value = "t"),
              (at.type = "radio"),
              (v.radioValue = "t" === at.value);
            var gt,
              vt = P.expr.attrHandle;
            P.fn.extend({
              attr: function (e, t) {
                return V(this, P.attr, e, t, 1 < arguments.length);
              },
              removeAttr: function (e) {
                return this.each(function () {
                  P.removeAttr(this, e);
                });
              },
            }),
              P.extend({
                attr: function (e, t, n) {
                  var r,
                    i,
                    o = e.nodeType;
                  if (3 !== o && 8 !== o && 2 !== o)
                    return void 0 === e.getAttribute
                      ? P.prop(e, t, n)
                      : ((1 === o && P.isXMLDoc(e)) ||
                          (i =
                            P.attrHooks[t.toLowerCase()] ||
                            (P.expr.match.bool.test(t) ? gt : void 0)),
                        void 0 !== n
                          ? null === n
                            ? void P.removeAttr(e, t)
                            : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                            ? r
                            : (e.setAttribute(t, n + ""), n)
                          : i && "get" in i && null !== (r = i.get(e, t))
                          ? r
                          : null == (r = P.find.attr(e, t))
                          ? void 0
                          : r);
                },
                attrHooks: {
                  type: {
                    set: function (e, t) {
                      if (!v.radioValue && "radio" === t && k(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                      }
                    },
                  },
                },
                removeAttr: function (e, t) {
                  var n,
                    r = 0,
                    i = t && t.match(R);
                  if (i && 1 === e.nodeType)
                    for (; (n = i[r++]); ) e.removeAttribute(n);
                },
              }),
              (gt = {
                set: function (e, t, n) {
                  return (
                    !1 === t ? P.removeAttr(e, n) : e.setAttribute(n, n), n
                  );
                },
              }),
              P.each(P.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var n = vt[t] || P.find.attr;
                vt[t] = function (e, t, r) {
                  var i,
                    o,
                    a = t.toLowerCase();
                  return (
                    r ||
                      ((o = vt[a]),
                      (vt[a] = i),
                      (i = null != n(e, t, r) ? a : null),
                      (vt[a] = o)),
                    i
                  );
                };
              });
            var mt = /^(?:input|select|textarea|button)$/i,
              yt = /^(?:a|area)$/i;
            function bt(e) {
              return (e.match(R) || []).join(" ");
            }
            function xt(e) {
              return (e.getAttribute && e.getAttribute("class")) || "";
            }
            function wt(e) {
              return Array.isArray(e)
                ? e
                : ("string" == typeof e && e.match(R)) || [];
            }
            P.fn.extend({
              prop: function (e, t) {
                return V(this, P.prop, e, t, 1 < arguments.length);
              },
              removeProp: function (e) {
                return this.each(function () {
                  delete this[P.propFix[e] || e];
                });
              },
            }),
              P.extend({
                prop: function (e, t, n) {
                  var r,
                    i,
                    o = e.nodeType;
                  if (3 !== o && 8 !== o && 2 !== o)
                    return (
                      (1 === o && P.isXMLDoc(e)) ||
                        ((t = P.propFix[t] || t), (i = P.propHooks[t])),
                      void 0 !== n
                        ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                          ? r
                          : (e[t] = n)
                        : i && "get" in i && null !== (r = i.get(e, t))
                        ? r
                        : e[t]
                    );
                },
                propHooks: {
                  tabIndex: {
                    get: function (e) {
                      var t = P.find.attr(e, "tabindex");
                      return t
                        ? parseInt(t, 10)
                        : mt.test(e.nodeName) || (yt.test(e.nodeName) && e.href)
                        ? 0
                        : -1;
                    },
                  },
                },
                propFix: { for: "htmlFor", class: "className" },
              }),
              v.optSelected ||
                (P.propHooks.selected = {
                  get: function (e) {
                    var t = e.parentNode;
                    return (
                      t && t.parentNode && t.parentNode.selectedIndex, null
                    );
                  },
                  set: function (e) {
                    var t = e.parentNode;
                    t &&
                      (t.selectedIndex,
                      t.parentNode && t.parentNode.selectedIndex);
                  },
                }),
              P.each(
                [
                  "tabIndex",
                  "readOnly",
                  "maxLength",
                  "cellSpacing",
                  "cellPadding",
                  "rowSpan",
                  "colSpan",
                  "useMap",
                  "frameBorder",
                  "contentEditable",
                ],
                function () {
                  P.propFix[this.toLowerCase()] = this;
                }
              ),
              P.fn.extend({
                addClass: function (e) {
                  var t,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    c = 0;
                  if (m(e))
                    return this.each(function (t) {
                      P(this).addClass(e.call(this, t, xt(this)));
                    });
                  if ((t = wt(e)).length)
                    for (; (n = this[c++]); )
                      if (
                        ((i = xt(n)),
                        (r = 1 === n.nodeType && " " + bt(i) + " "))
                      ) {
                        for (a = 0; (o = t[a++]); )
                          r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = bt(r)) && n.setAttribute("class", s);
                      }
                  return this;
                },
                removeClass: function (e) {
                  var t,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    c = 0;
                  if (m(e))
                    return this.each(function (t) {
                      P(this).removeClass(e.call(this, t, xt(this)));
                    });
                  if (!arguments.length) return this.attr("class", "");
                  if ((t = wt(e)).length)
                    for (; (n = this[c++]); )
                      if (
                        ((i = xt(n)),
                        (r = 1 === n.nodeType && " " + bt(i) + " "))
                      ) {
                        for (a = 0; (o = t[a++]); )
                          for (; -1 < r.indexOf(" " + o + " "); )
                            r = r.replace(" " + o + " ", " ");
                        i !== (s = bt(r)) && n.setAttribute("class", s);
                      }
                  return this;
                },
                toggleClass: function (e, t) {
                  var n = typeof e,
                    r = "string" === n || Array.isArray(e);
                  return "boolean" == typeof t && r
                    ? t
                      ? this.addClass(e)
                      : this.removeClass(e)
                    : m(e)
                    ? this.each(function (n) {
                        P(this).toggleClass(e.call(this, n, xt(this), t), t);
                      })
                    : this.each(function () {
                        var t, i, o, a;
                        if (r)
                          for (i = 0, o = P(this), a = wt(e); (t = a[i++]); )
                            o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                        else
                          (void 0 !== e && "boolean" !== n) ||
                            ((t = xt(this)) && K.set(this, "__className__", t),
                            this.setAttribute &&
                              this.setAttribute(
                                "class",
                                t || !1 === e
                                  ? ""
                                  : K.get(this, "__className__") || ""
                              ));
                      });
                },
                hasClass: function (e) {
                  var t,
                    n,
                    r = 0;
                  for (t = " " + e + " "; (n = this[r++]); )
                    if (
                      1 === n.nodeType &&
                      -1 < (" " + bt(xt(n)) + " ").indexOf(t)
                    )
                      return !0;
                  return !1;
                },
              });
            var Ct = /\r/g;
            P.fn.extend({
              val: function (e) {
                var t,
                  n,
                  r,
                  i = this[0];
                return arguments.length
                  ? ((r = m(e)),
                    this.each(function (n) {
                      var i;
                      1 === this.nodeType &&
                        (null == (i = r ? e.call(this, n, P(this).val()) : e)
                          ? (i = "")
                          : "number" == typeof i
                          ? (i += "")
                          : Array.isArray(i) &&
                            (i = P.map(i, function (e) {
                              return null == e ? "" : e + "";
                            })),
                        ((t =
                          P.valHooks[this.type] ||
                          P.valHooks[this.nodeName.toLowerCase()]) &&
                          "set" in t &&
                          void 0 !== t.set(this, i, "value")) ||
                          (this.value = i));
                    }))
                  : i
                  ? (t =
                      P.valHooks[i.type] ||
                      P.valHooks[i.nodeName.toLowerCase()]) &&
                    "get" in t &&
                    void 0 !== (n = t.get(i, "value"))
                    ? n
                    : "string" == typeof (n = i.value)
                    ? n.replace(Ct, "")
                    : null == n
                    ? ""
                    : n
                  : void 0;
              },
            }),
              P.extend({
                valHooks: {
                  option: {
                    get: function (e) {
                      var t = P.find.attr(e, "value");
                      return null != t ? t : bt(P.text(e));
                    },
                  },
                  select: {
                    get: function (e) {
                      var t,
                        n,
                        r,
                        i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        c = a ? o + 1 : i.length;
                      for (r = o < 0 ? c : a ? o : 0; r < c; r++)
                        if (
                          ((n = i[r]).selected || r === o) &&
                          !n.disabled &&
                          (!n.parentNode.disabled ||
                            !k(n.parentNode, "optgroup"))
                        ) {
                          if (((t = P(n).val()), a)) return t;
                          s.push(t);
                        }
                      return s;
                    },
                    set: function (e, t) {
                      for (
                        var n,
                          r,
                          i = e.options,
                          o = P.makeArray(t),
                          a = i.length;
                        a--;

                      )
                        ((r = i[a]).selected =
                          -1 < P.inArray(P.valHooks.option.get(r), o)) &&
                          (n = !0);
                      return n || (e.selectedIndex = -1), o;
                    },
                  },
                },
              }),
              P.each(["radio", "checkbox"], function () {
                (P.valHooks[this] = {
                  set: function (e, t) {
                    if (Array.isArray(t))
                      return (e.checked = -1 < P.inArray(P(e).val(), t));
                  },
                }),
                  v.checkOn ||
                    (P.valHooks[this].get = function (e) {
                      return null === e.getAttribute("value") ? "on" : e.value;
                    });
              }),
              (v.focusin = "onfocusin" in r);
            var Tt = /^(?:focusinfocus|focusoutblur)$/,
              Pt = function (e) {
                e.stopPropagation();
              };
            P.extend(P.event, {
              trigger: function (e, t, n, i) {
                var o,
                  a,
                  s,
                  c,
                  l,
                  u,
                  d,
                  f,
                  h = [n || b],
                  g = p.call(e, "type") ? e.type : e,
                  v = p.call(e, "namespace") ? e.namespace.split(".") : [];
                if (
                  ((a = f = s = n = n || b),
                  3 !== n.nodeType &&
                    8 !== n.nodeType &&
                    !Tt.test(g + P.event.triggered) &&
                    (-1 < g.indexOf(".") &&
                      ((g = (v = g.split(".")).shift()), v.sort()),
                    (l = g.indexOf(":") < 0 && "on" + g),
                    ((e = e[P.expando]
                      ? e
                      : new P.Event(g, "object" == typeof e && e)).isTrigger = i
                      ? 2
                      : 3),
                    (e.namespace = v.join(".")),
                    (e.rnamespace = e.namespace
                      ? new RegExp(
                          "(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)"
                        )
                      : null),
                    (e.result = void 0),
                    e.target || (e.target = n),
                    (t = null == t ? [e] : P.makeArray(t, [e])),
                    (d = P.event.special[g] || {}),
                    i || !d.trigger || !1 !== d.trigger.apply(n, t)))
                ) {
                  if (!i && !d.noBubble && !y(n)) {
                    for (
                      c = d.delegateType || g,
                        Tt.test(c + g) || (a = a.parentNode);
                      a;
                      a = a.parentNode
                    )
                      h.push(a), (s = a);
                    s === (n.ownerDocument || b) &&
                      h.push(s.defaultView || s.parentWindow || r);
                  }
                  for (o = 0; (a = h[o++]) && !e.isPropagationStopped(); )
                    (f = a),
                      (e.type = 1 < o ? c : d.bindType || g),
                      (u =
                        (K.get(a, "events") || Object.create(null))[e.type] &&
                        K.get(a, "handle")) && u.apply(a, t),
                      (u = l && a[l]) &&
                        u.apply &&
                        J(a) &&
                        ((e.result = u.apply(a, t)),
                        !1 === e.result && e.preventDefault());
                  return (
                    (e.type = g),
                    i ||
                      e.isDefaultPrevented() ||
                      (d._default && !1 !== d._default.apply(h.pop(), t)) ||
                      !J(n) ||
                      (l &&
                        m(n[g]) &&
                        !y(n) &&
                        ((s = n[l]) && (n[l] = null),
                        (P.event.triggered = g),
                        e.isPropagationStopped() && f.addEventListener(g, Pt),
                        n[g](),
                        e.isPropagationStopped() &&
                          f.removeEventListener(g, Pt),
                        (P.event.triggered = void 0),
                        s && (n[l] = s))),
                    e.result
                  );
                }
              },
              simulate: function (e, t, n) {
                var r = P.extend(new P.Event(), n, {
                  type: e,
                  isSimulated: !0,
                });
                P.event.trigger(r, null, t);
              },
            }),
              P.fn.extend({
                trigger: function (e, t) {
                  return this.each(function () {
                    P.event.trigger(e, t, this);
                  });
                },
                triggerHandler: function (e, t) {
                  var n = this[0];
                  if (n) return P.event.trigger(e, t, n, !0);
                },
              }),
              v.focusin ||
                P.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                  var n = function (e) {
                    P.event.simulate(t, e.target, P.event.fix(e));
                  };
                  P.event.special[t] = {
                    setup: function () {
                      var r = this.ownerDocument || this.document || this,
                        i = K.access(r, t);
                      i || r.addEventListener(e, n, !0),
                        K.access(r, t, (i || 0) + 1);
                    },
                    teardown: function () {
                      var r = this.ownerDocument || this.document || this,
                        i = K.access(r, t) - 1;
                      i
                        ? K.access(r, t, i)
                        : (r.removeEventListener(e, n, !0), K.remove(r, t));
                    },
                  };
                });
            var Et = r.location,
              St = { guid: Date.now() },
              Ht = /\?/;
            P.parseXML = function (e) {
              var t;
              if (!e || "string" != typeof e) return null;
              try {
                t = new r.DOMParser().parseFromString(e, "text/xml");
              } catch (e) {
                t = void 0;
              }
              return (
                (t && !t.getElementsByTagName("parsererror").length) ||
                  P.error("Invalid XML: " + e),
                t
              );
            };
            var It = /\[\]$/,
              Dt = /\r?\n/g,
              kt = /^(?:submit|button|image|reset|file)$/i,
              At = /^(?:input|select|textarea|keygen)/i;
            function jt(e, t, n, r) {
              var i;
              if (Array.isArray(t))
                P.each(t, function (t, i) {
                  n || It.test(e)
                    ? r(e, i)
                    : jt(
                        e +
                          "[" +
                          ("object" == typeof i && null != i ? t : "") +
                          "]",
                        i,
                        n,
                        r
                      );
                });
              else if (n || "object" !== C(t)) r(e, t);
              else for (i in t) jt(e + "[" + i + "]", t[i], n, r);
            }
            (P.param = function (e, t) {
              var n,
                r = [],
                i = function (e, t) {
                  var n = m(t) ? t() : t;
                  r[r.length] =
                    encodeURIComponent(e) +
                    "=" +
                    encodeURIComponent(null == n ? "" : n);
                };
              if (null == e) return "";
              if (Array.isArray(e) || (e.jquery && !P.isPlainObject(e)))
                P.each(e, function () {
                  i(this.name, this.value);
                });
              else for (n in e) jt(n, e[n], t, i);
              return r.join("&");
            }),
              P.fn.extend({
                serialize: function () {
                  return P.param(this.serializeArray());
                },
                serializeArray: function () {
                  return this.map(function () {
                    var e = P.prop(this, "elements");
                    return e ? P.makeArray(e) : this;
                  })
                    .filter(function () {
                      var e = this.type;
                      return (
                        this.name &&
                        !P(this).is(":disabled") &&
                        At.test(this.nodeName) &&
                        !kt.test(e) &&
                        (this.checked || !ge.test(e))
                      );
                    })
                    .map(function (e, t) {
                      var n = P(this).val();
                      return null == n
                        ? null
                        : Array.isArray(n)
                        ? P.map(n, function (e) {
                            return {
                              name: t.name,
                              value: e.replace(Dt, "\r\n"),
                            };
                          })
                        : { name: t.name, value: n.replace(Dt, "\r\n") };
                    })
                    .get();
                },
              });
            var Lt = /%20/g,
              Nt = /#.*$/,
              qt = /([?&])_=[^&]*/,
              Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
              Ft = /^(?:GET|HEAD)$/,
              Rt = /^\/\//,
              Mt = {},
              Bt = {},
              Qt = "*/".concat("*"),
              zt = b.createElement("a");
            function Ut(e) {
              return function (t, n) {
                "string" != typeof t && ((n = t), (t = "*"));
                var r,
                  i = 0,
                  o = t.toLowerCase().match(R) || [];
                if (m(n))
                  for (; (r = o[i++]); )
                    "+" === r[0]
                      ? ((r = r.slice(1) || "*"),
                        (e[r] = e[r] || []).unshift(n))
                      : (e[r] = e[r] || []).push(n);
              };
            }
            function $t(e, t, n, r) {
              var i = {},
                o = e === Bt;
              function a(s) {
                var c;
                return (
                  (i[s] = !0),
                  P.each(e[s] || [], function (e, s) {
                    var l = s(t, n, r);
                    return "string" != typeof l || o || i[l]
                      ? o
                        ? !(c = l)
                        : void 0
                      : (t.dataTypes.unshift(l), a(l), !1);
                  }),
                  c
                );
              }
              return a(t.dataTypes[0]) || (!i["*"] && a("*"));
            }
            function Vt(e, t) {
              var n,
                r,
                i = P.ajaxSettings.flatOptions || {};
              for (n in t)
                void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
              return r && P.extend(!0, e, r), e;
            }
            (zt.href = Et.href),
              P.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                  url: Et.href,
                  type: "GET",
                  isLocal:
                    /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                      Et.protocol
                    ),
                  global: !0,
                  processData: !0,
                  async: !0,
                  contentType:
                    "application/x-www-form-urlencoded; charset=UTF-8",
                  accepts: {
                    "*": Qt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript",
                  },
                  contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/,
                  },
                  responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON",
                  },
                  converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": P.parseXML,
                  },
                  flatOptions: { url: !0, context: !0 },
                },
                ajaxSetup: function (e, t) {
                  return t
                    ? Vt(Vt(e, P.ajaxSettings), t)
                    : Vt(P.ajaxSettings, e);
                },
                ajaxPrefilter: Ut(Mt),
                ajaxTransport: Ut(Bt),
                ajax: function (e, t) {
                  "object" == typeof e && ((t = e), (e = void 0)),
                    (t = t || {});
                  var n,
                    i,
                    o,
                    a,
                    s,
                    c,
                    l,
                    u,
                    d,
                    f,
                    p = P.ajaxSetup({}, t),
                    h = p.context || p,
                    g = p.context && (h.nodeType || h.jquery) ? P(h) : P.event,
                    v = P.Deferred(),
                    m = P.Callbacks("once memory"),
                    y = p.statusCode || {},
                    x = {},
                    w = {},
                    C = "canceled",
                    T = {
                      readyState: 0,
                      getResponseHeader: function (e) {
                        var t;
                        if (l) {
                          if (!a)
                            for (a = {}; (t = Ot.exec(o)); )
                              a[t[1].toLowerCase() + " "] = (
                                a[t[1].toLowerCase() + " "] || []
                              ).concat(t[2]);
                          t = a[e.toLowerCase() + " "];
                        }
                        return null == t ? null : t.join(", ");
                      },
                      getAllResponseHeaders: function () {
                        return l ? o : null;
                      },
                      setRequestHeader: function (e, t) {
                        return (
                          null == l &&
                            ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                            (x[e] = t)),
                          this
                        );
                      },
                      overrideMimeType: function (e) {
                        return null == l && (p.mimeType = e), this;
                      },
                      statusCode: function (e) {
                        var t;
                        if (e)
                          if (l) T.always(e[T.status]);
                          else for (t in e) y[t] = [y[t], e[t]];
                        return this;
                      },
                      abort: function (e) {
                        var t = e || C;
                        return n && n.abort(t), E(0, t), this;
                      },
                    };
                  if (
                    (v.promise(T),
                    (p.url = ((e || p.url || Et.href) + "").replace(
                      Rt,
                      Et.protocol + "//"
                    )),
                    (p.type = t.method || t.type || p.method || p.type),
                    (p.dataTypes = (p.dataType || "*")
                      .toLowerCase()
                      .match(R) || [""]),
                    null == p.crossDomain)
                  ) {
                    c = b.createElement("a");
                    try {
                      (c.href = p.url),
                        (c.href = c.href),
                        (p.crossDomain =
                          zt.protocol + "//" + zt.host !=
                          c.protocol + "//" + c.host);
                    } catch (e) {
                      p.crossDomain = !0;
                    }
                  }
                  if (
                    (p.data &&
                      p.processData &&
                      "string" != typeof p.data &&
                      (p.data = P.param(p.data, p.traditional)),
                    $t(Mt, p, t, T),
                    l)
                  )
                    return T;
                  for (d in ((u = P.event && p.global) &&
                    0 == P.active++ &&
                    P.event.trigger("ajaxStart"),
                  (p.type = p.type.toUpperCase()),
                  (p.hasContent = !Ft.test(p.type)),
                  (i = p.url.replace(Nt, "")),
                  p.hasContent
                    ? p.data &&
                      p.processData &&
                      0 ===
                        (p.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      (p.data = p.data.replace(Lt, "+"))
                    : ((f = p.url.slice(i.length)),
                      p.data &&
                        (p.processData || "string" == typeof p.data) &&
                        ((i += (Ht.test(i) ? "&" : "?") + p.data),
                        delete p.data),
                      !1 === p.cache &&
                        ((i = i.replace(qt, "$1")),
                        (f = (Ht.test(i) ? "&" : "?") + "_=" + St.guid++ + f)),
                      (p.url = i + f)),
                  p.ifModified &&
                    (P.lastModified[i] &&
                      T.setRequestHeader(
                        "If-Modified-Since",
                        P.lastModified[i]
                      ),
                    P.etag[i] &&
                      T.setRequestHeader("If-None-Match", P.etag[i])),
                  ((p.data && p.hasContent && !1 !== p.contentType) ||
                    t.contentType) &&
                    T.setRequestHeader("Content-Type", p.contentType),
                  T.setRequestHeader(
                    "Accept",
                    p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                      ? p.accepts[p.dataTypes[0]] +
                          ("*" !== p.dataTypes[0] ? ", " + Qt + "; q=0.01" : "")
                      : p.accepts["*"]
                  ),
                  p.headers))
                    T.setRequestHeader(d, p.headers[d]);
                  if (p.beforeSend && (!1 === p.beforeSend.call(h, T, p) || l))
                    return T.abort();
                  if (
                    ((C = "abort"),
                    m.add(p.complete),
                    T.done(p.success),
                    T.fail(p.error),
                    (n = $t(Bt, p, t, T)))
                  ) {
                    if (
                      ((T.readyState = 1),
                      u && g.trigger("ajaxSend", [T, p]),
                      l)
                    )
                      return T;
                    p.async &&
                      0 < p.timeout &&
                      (s = r.setTimeout(function () {
                        T.abort("timeout");
                      }, p.timeout));
                    try {
                      (l = !1), n.send(x, E);
                    } catch (e) {
                      if (l) throw e;
                      E(-1, e);
                    }
                  } else E(-1, "No Transport");
                  function E(e, t, a, c) {
                    var d,
                      f,
                      b,
                      x,
                      w,
                      C = t;
                    l ||
                      ((l = !0),
                      s && r.clearTimeout(s),
                      (n = void 0),
                      (o = c || ""),
                      (T.readyState = 0 < e ? 4 : 0),
                      (d = (200 <= e && e < 300) || 304 === e),
                      a &&
                        (x = (function (e, t, n) {
                          for (
                            var r, i, o, a, s = e.contents, c = e.dataTypes;
                            "*" === c[0];

                          )
                            c.shift(),
                              void 0 === r &&
                                (r =
                                  e.mimeType ||
                                  t.getResponseHeader("Content-Type"));
                          if (r)
                            for (i in s)
                              if (s[i] && s[i].test(r)) {
                                c.unshift(i);
                                break;
                              }
                          if (c[0] in n) o = c[0];
                          else {
                            for (i in n) {
                              if (!c[0] || e.converters[i + " " + c[0]]) {
                                o = i;
                                break;
                              }
                              a || (a = i);
                            }
                            o = o || a;
                          }
                          if (o) return o !== c[0] && c.unshift(o), n[o];
                        })(p, T, a)),
                      !d &&
                        -1 < P.inArray("script", p.dataTypes) &&
                        (p.converters["text script"] = function () {}),
                      (x = (function (e, t, n, r) {
                        var i,
                          o,
                          a,
                          s,
                          c,
                          l = {},
                          u = e.dataTypes.slice();
                        if (u[1])
                          for (a in e.converters)
                            l[a.toLowerCase()] = e.converters[a];
                        for (o = u.shift(); o; )
                          if (
                            (e.responseFields[o] &&
                              (n[e.responseFields[o]] = t),
                            !c &&
                              r &&
                              e.dataFilter &&
                              (t = e.dataFilter(t, e.dataType)),
                            (c = o),
                            (o = u.shift()))
                          )
                            if ("*" === o) o = c;
                            else if ("*" !== c && c !== o) {
                              if (!(a = l[c + " " + o] || l["* " + o]))
                                for (i in l)
                                  if (
                                    (s = i.split(" "))[1] === o &&
                                    (a = l[c + " " + s[0]] || l["* " + s[0]])
                                  ) {
                                    !0 === a
                                      ? (a = l[i])
                                      : !0 !== l[i] &&
                                        ((o = s[0]), u.unshift(s[1]));
                                    break;
                                  }
                              if (!0 !== a)
                                if (a && e.throws) t = a(t);
                                else
                                  try {
                                    t = a(t);
                                  } catch (e) {
                                    return {
                                      state: "parsererror",
                                      error: a
                                        ? e
                                        : "No conversion from " +
                                          c +
                                          " to " +
                                          o,
                                    };
                                  }
                            }
                        return { state: "success", data: t };
                      })(p, x, T, d)),
                      d
                        ? (p.ifModified &&
                            ((w = T.getResponseHeader("Last-Modified")) &&
                              (P.lastModified[i] = w),
                            (w = T.getResponseHeader("etag")) &&
                              (P.etag[i] = w)),
                          204 === e || "HEAD" === p.type
                            ? (C = "nocontent")
                            : 304 === e
                            ? (C = "notmodified")
                            : ((C = x.state),
                              (f = x.data),
                              (d = !(b = x.error))))
                        : ((b = C),
                          (!e && C) || ((C = "error"), e < 0 && (e = 0))),
                      (T.status = e),
                      (T.statusText = (t || C) + ""),
                      d
                        ? v.resolveWith(h, [f, C, T])
                        : v.rejectWith(h, [T, C, b]),
                      T.statusCode(y),
                      (y = void 0),
                      u &&
                        g.trigger(d ? "ajaxSuccess" : "ajaxError", [
                          T,
                          p,
                          d ? f : b,
                        ]),
                      m.fireWith(h, [T, C]),
                      u &&
                        (g.trigger("ajaxComplete", [T, p]),
                        --P.active || P.event.trigger("ajaxStop")));
                  }
                  return T;
                },
                getJSON: function (e, t, n) {
                  return P.get(e, t, n, "json");
                },
                getScript: function (e, t) {
                  return P.get(e, void 0, t, "script");
                },
              }),
              P.each(["get", "post"], function (e, t) {
                P[t] = function (e, n, r, i) {
                  return (
                    m(n) && ((i = i || r), (r = n), (n = void 0)),
                    P.ajax(
                      P.extend(
                        { url: e, type: t, dataType: i, data: n, success: r },
                        P.isPlainObject(e) && e
                      )
                    )
                  );
                };
              }),
              P.ajaxPrefilter(function (e) {
                var t;
                for (t in e.headers)
                  "content-type" === t.toLowerCase() &&
                    (e.contentType = e.headers[t] || "");
              }),
              (P._evalUrl = function (e, t, n) {
                return P.ajax({
                  url: e,
                  type: "GET",
                  dataType: "script",
                  cache: !0,
                  async: !1,
                  global: !1,
                  converters: { "text script": function () {} },
                  dataFilter: function (e) {
                    P.globalEval(e, t, n);
                  },
                });
              }),
              P.fn.extend({
                wrapAll: function (e) {
                  var t;
                  return (
                    this[0] &&
                      (m(e) && (e = e.call(this[0])),
                      (t = P(e, this[0].ownerDocument).eq(0).clone(!0)),
                      this[0].parentNode && t.insertBefore(this[0]),
                      t
                        .map(function () {
                          for (var e = this; e.firstElementChild; )
                            e = e.firstElementChild;
                          return e;
                        })
                        .append(this)),
                    this
                  );
                },
                wrapInner: function (e) {
                  return m(e)
                    ? this.each(function (t) {
                        P(this).wrapInner(e.call(this, t));
                      })
                    : this.each(function () {
                        var t = P(this),
                          n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e);
                      });
                },
                wrap: function (e) {
                  var t = m(e);
                  return this.each(function (n) {
                    P(this).wrapAll(t ? e.call(this, n) : e);
                  });
                },
                unwrap: function (e) {
                  return (
                    this.parent(e)
                      .not("body")
                      .each(function () {
                        P(this).replaceWith(this.childNodes);
                      }),
                    this
                  );
                },
              }),
              (P.expr.pseudos.hidden = function (e) {
                return !P.expr.pseudos.visible(e);
              }),
              (P.expr.pseudos.visible = function (e) {
                return !!(
                  e.offsetWidth ||
                  e.offsetHeight ||
                  e.getClientRects().length
                );
              }),
              (P.ajaxSettings.xhr = function () {
                try {
                  return new r.XMLHttpRequest();
                } catch (e) {}
              });
            var Xt = { 0: 200, 1223: 204 },
              Wt = P.ajaxSettings.xhr();
            (v.cors = !!Wt && "withCredentials" in Wt),
              (v.ajax = Wt = !!Wt),
              P.ajaxTransport(function (e) {
                var t, n;
                if (v.cors || (Wt && !e.crossDomain))
                  return {
                    send: function (i, o) {
                      var a,
                        s = e.xhr();
                      if (
                        (s.open(e.type, e.url, e.async, e.username, e.password),
                        e.xhrFields)
                      )
                        for (a in e.xhrFields) s[a] = e.xhrFields[a];
                      for (a in (e.mimeType &&
                        s.overrideMimeType &&
                        s.overrideMimeType(e.mimeType),
                      e.crossDomain ||
                        i["X-Requested-With"] ||
                        (i["X-Requested-With"] = "XMLHttpRequest"),
                      i))
                        s.setRequestHeader(a, i[a]);
                      (t = function (e) {
                        return function () {
                          t &&
                            ((t =
                              n =
                              s.onload =
                              s.onerror =
                              s.onabort =
                              s.ontimeout =
                              s.onreadystatechange =
                                null),
                            "abort" === e
                              ? s.abort()
                              : "error" === e
                              ? "number" != typeof s.status
                                ? o(0, "error")
                                : o(s.status, s.statusText)
                              : o(
                                  Xt[s.status] || s.status,
                                  s.statusText,
                                  "text" !== (s.responseType || "text") ||
                                    "string" != typeof s.responseText
                                    ? { binary: s.response }
                                    : { text: s.responseText },
                                  s.getAllResponseHeaders()
                                ));
                        };
                      }),
                        (s.onload = t()),
                        (n = s.onerror = s.ontimeout = t("error")),
                        void 0 !== s.onabort
                          ? (s.onabort = n)
                          : (s.onreadystatechange = function () {
                              4 === s.readyState &&
                                r.setTimeout(function () {
                                  t && n();
                                });
                            }),
                        (t = t("abort"));
                      try {
                        s.send((e.hasContent && e.data) || null);
                      } catch (i) {
                        if (t) throw i;
                      }
                    },
                    abort: function () {
                      t && t();
                    },
                  };
              }),
              P.ajaxPrefilter(function (e) {
                e.crossDomain && (e.contents.script = !1);
              }),
              P.ajaxSetup({
                accepts: {
                  script:
                    "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
                },
                contents: { script: /\b(?:java|ecma)script\b/ },
                converters: {
                  "text script": function (e) {
                    return P.globalEval(e), e;
                  },
                },
              }),
              P.ajaxPrefilter("script", function (e) {
                void 0 === e.cache && (e.cache = !1),
                  e.crossDomain && (e.type = "GET");
              }),
              P.ajaxTransport("script", function (e) {
                var t, n;
                if (e.crossDomain || e.scriptAttrs)
                  return {
                    send: function (r, i) {
                      (t = P("<script>")
                        .attr(e.scriptAttrs || {})
                        .prop({ charset: e.scriptCharset, src: e.url })
                        .on(
                          "load error",
                          (n = function (e) {
                            t.remove(),
                              (n = null),
                              e && i("error" === e.type ? 404 : 200, e.type);
                          })
                        )),
                        b.head.appendChild(t[0]);
                    },
                    abort: function () {
                      n && n();
                    },
                  };
              });
            var _t,
              Yt = [],
              Jt = /(=)\?(?=&|$)|\?\?/;
            P.ajaxSetup({
              jsonp: "callback",
              jsonpCallback: function () {
                var e = Yt.pop() || P.expando + "_" + St.guid++;
                return (this[e] = !0), e;
              },
            }),
              P.ajaxPrefilter("json jsonp", function (e, t, n) {
                var i,
                  o,
                  a,
                  s =
                    !1 !== e.jsonp &&
                    (Jt.test(e.url)
                      ? "url"
                      : "string" == typeof e.data &&
                        0 ===
                          (e.contentType || "").indexOf(
                            "application/x-www-form-urlencoded"
                          ) &&
                        Jt.test(e.data) &&
                        "data");
                if (s || "jsonp" === e.dataTypes[0])
                  return (
                    (i = e.jsonpCallback =
                      m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                    s
                      ? (e[s] = e[s].replace(Jt, "$1" + i))
                      : !1 !== e.jsonp &&
                        (e.url +=
                          (Ht.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                    (e.converters["script json"] = function () {
                      return a || P.error(i + " was not called"), a[0];
                    }),
                    (e.dataTypes[0] = "json"),
                    (o = r[i]),
                    (r[i] = function () {
                      a = arguments;
                    }),
                    n.always(function () {
                      void 0 === o ? P(r).removeProp(i) : (r[i] = o),
                        e[i] &&
                          ((e.jsonpCallback = t.jsonpCallback), Yt.push(i)),
                        a && m(o) && o(a[0]),
                        (a = o = void 0);
                    }),
                    "script"
                  );
              }),
              (v.createHTMLDocument =
                (((_t =
                  b.implementation.createHTMLDocument("").body).innerHTML =
                  "<form></form><form></form>"),
                2 === _t.childNodes.length)),
              (P.parseHTML = function (e, t, n) {
                return "string" != typeof e
                  ? []
                  : ("boolean" == typeof t && ((n = t), (t = !1)),
                    t ||
                      (v.createHTMLDocument
                        ? (((r = (t =
                            b.implementation.createHTMLDocument(
                              ""
                            )).createElement("base")).href = b.location.href),
                          t.head.appendChild(r))
                        : (t = b)),
                    (o = !n && []),
                    (i = A.exec(e))
                      ? [t.createElement(i[1])]
                      : ((i = Ce([e], t, o)),
                        o && o.length && P(o).remove(),
                        P.merge([], i.childNodes)));
                var r, i, o;
              }),
              (P.fn.load = function (e, t, n) {
                var r,
                  i,
                  o,
                  a = this,
                  s = e.indexOf(" ");
                return (
                  -1 < s && ((r = bt(e.slice(s))), (e = e.slice(0, s))),
                  m(t)
                    ? ((n = t), (t = void 0))
                    : t && "object" == typeof t && (i = "POST"),
                  0 < a.length &&
                    P.ajax({
                      url: e,
                      type: i || "GET",
                      dataType: "html",
                      data: t,
                    })
                      .done(function (e) {
                        (o = arguments),
                          a.html(
                            r ? P("<div>").append(P.parseHTML(e)).find(r) : e
                          );
                      })
                      .always(
                        n &&
                          function (e, t) {
                            a.each(function () {
                              n.apply(this, o || [e.responseText, t, e]);
                            });
                          }
                      ),
                  this
                );
              }),
              (P.expr.pseudos.animated = function (e) {
                return P.grep(P.timers, function (t) {
                  return e === t.elem;
                }).length;
              }),
              (P.offset = {
                setOffset: function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    c,
                    l = P.css(e, "position"),
                    u = P(e),
                    d = {};
                  "static" === l && (e.style.position = "relative"),
                    (s = u.offset()),
                    (o = P.css(e, "top")),
                    (c = P.css(e, "left")),
                    ("absolute" === l || "fixed" === l) &&
                    -1 < (o + c).indexOf("auto")
                      ? ((a = (r = u.position()).top), (i = r.left))
                      : ((a = parseFloat(o) || 0), (i = parseFloat(c) || 0)),
                    m(t) && (t = t.call(e, n, P.extend({}, s))),
                    null != t.top && (d.top = t.top - s.top + a),
                    null != t.left && (d.left = t.left - s.left + i),
                    "using" in t
                      ? t.using.call(e, d)
                      : ("number" == typeof d.top && (d.top += "px"),
                        "number" == typeof d.left && (d.left += "px"),
                        u.css(d));
                },
              }),
              P.fn.extend({
                offset: function (e) {
                  if (arguments.length)
                    return void 0 === e
                      ? this
                      : this.each(function (t) {
                          P.offset.setOffset(this, e, t);
                        });
                  var t,
                    n,
                    r = this[0];
                  return r
                    ? r.getClientRects().length
                      ? ((t = r.getBoundingClientRect()),
                        (n = r.ownerDocument.defaultView),
                        {
                          top: t.top + n.pageYOffset,
                          left: t.left + n.pageXOffset,
                        })
                      : { top: 0, left: 0 }
                    : void 0;
                },
                position: function () {
                  if (this[0]) {
                    var e,
                      t,
                      n,
                      r = this[0],
                      i = { top: 0, left: 0 };
                    if ("fixed" === P.css(r, "position"))
                      t = r.getBoundingClientRect();
                    else {
                      for (
                        t = this.offset(),
                          n = r.ownerDocument,
                          e = r.offsetParent || n.documentElement;
                        e &&
                        (e === n.body || e === n.documentElement) &&
                        "static" === P.css(e, "position");

                      )
                        e = e.parentNode;
                      e &&
                        e !== r &&
                        1 === e.nodeType &&
                        (((i = P(e).offset()).top += P.css(
                          e,
                          "borderTopWidth",
                          !0
                        )),
                        (i.left += P.css(e, "borderLeftWidth", !0)));
                    }
                    return {
                      top: t.top - i.top - P.css(r, "marginTop", !0),
                      left: t.left - i.left - P.css(r, "marginLeft", !0),
                    };
                  }
                },
                offsetParent: function () {
                  return this.map(function () {
                    for (
                      var e = this.offsetParent;
                      e && "static" === P.css(e, "position");

                    )
                      e = e.offsetParent;
                    return e || ae;
                  });
                },
              }),
              P.each(
                { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
                function (e, t) {
                  var n = "pageYOffset" === t;
                  P.fn[e] = function (r) {
                    return V(
                      this,
                      function (e, r, i) {
                        var o;
                        if (
                          (y(e)
                            ? (o = e)
                            : 9 === e.nodeType && (o = e.defaultView),
                          void 0 === i)
                        )
                          return o ? o[t] : e[r];
                        o
                          ? o.scrollTo(
                              n ? o.pageXOffset : i,
                              n ? i : o.pageYOffset
                            )
                          : (e[r] = i);
                      },
                      e,
                      r,
                      arguments.length
                    );
                  };
                }
              ),
              P.each(["top", "left"], function (e, t) {
                P.cssHooks[t] = Ve(v.pixelPosition, function (e, n) {
                  if (n)
                    return (
                      (n = $e(e, t)), Be.test(n) ? P(e).position()[t] + "px" : n
                    );
                });
              }),
              P.each({ Height: "height", Width: "width" }, function (e, t) {
                P.each(
                  { padding: "inner" + e, content: t, "": "outer" + e },
                  function (n, r) {
                    P.fn[r] = function (i, o) {
                      var a = arguments.length && (n || "boolean" != typeof i),
                        s = n || (!0 === i || !0 === o ? "margin" : "border");
                      return V(
                        this,
                        function (t, n, i) {
                          var o;
                          return y(t)
                            ? 0 === r.indexOf("outer")
                              ? t["inner" + e]
                              : t.document.documentElement["client" + e]
                            : 9 === t.nodeType
                            ? ((o = t.documentElement),
                              Math.max(
                                t.body["scroll" + e],
                                o["scroll" + e],
                                t.body["offset" + e],
                                o["offset" + e],
                                o["client" + e]
                              ))
                            : void 0 === i
                            ? P.css(t, n, s)
                            : P.style(t, n, i, s);
                        },
                        t,
                        a ? i : void 0,
                        a
                      );
                    };
                  }
                );
              }),
              P.each(
                [
                  "ajaxStart",
                  "ajaxStop",
                  "ajaxComplete",
                  "ajaxError",
                  "ajaxSuccess",
                  "ajaxSend",
                ],
                function (e, t) {
                  P.fn[t] = function (e) {
                    return this.on(t, e);
                  };
                }
              ),
              P.fn.extend({
                bind: function (e, t, n) {
                  return this.on(e, null, t, n);
                },
                unbind: function (e, t) {
                  return this.off(e, null, t);
                },
                delegate: function (e, t, n, r) {
                  return this.on(t, e, n, r);
                },
                undelegate: function (e, t, n) {
                  return 1 === arguments.length
                    ? this.off(e, "**")
                    : this.off(t, e || "**", n);
                },
                hover: function (e, t) {
                  return this.mouseenter(e).mouseleave(t || e);
                },
              }),
              P.each(
                "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                  " "
                ),
                function (e, t) {
                  P.fn[t] = function (e, n) {
                    return 0 < arguments.length
                      ? this.on(t, null, e, n)
                      : this.trigger(t);
                  };
                }
              );
            var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            (P.proxy = function (e, t) {
              var n, r, i;
              if (
                ("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e))
              )
                return (
                  (r = s.call(arguments, 2)),
                  ((i = function () {
                    return e.apply(t || this, r.concat(s.call(arguments)));
                  }).guid = e.guid =
                    e.guid || P.guid++),
                  i
                );
            }),
              (P.holdReady = function (e) {
                e ? P.readyWait++ : P.ready(!0);
              }),
              (P.isArray = Array.isArray),
              (P.parseJSON = JSON.parse),
              (P.nodeName = k),
              (P.isFunction = m),
              (P.isWindow = y),
              (P.camelCase = Y),
              (P.type = C),
              (P.now = Date.now),
              (P.isNumeric = function (e) {
                var t = P.type(e);
                return (
                  ("number" === t || "string" === t) &&
                  !isNaN(e - parseFloat(e))
                );
              }),
              (P.trim = function (e) {
                return null == e ? "" : (e + "").replace(Gt, "");
              }),
              void 0 ===
                (n = function () {
                  return P;
                }.apply(t, [])) || (e.exports = n);
            var Kt = r.jQuery,
              Zt = r.$;
            return (
              (P.noConflict = function (e) {
                return (
                  r.$ === P && (r.$ = Zt),
                  e && r.jQuery === P && (r.jQuery = Kt),
                  P
                );
              }),
              void 0 === i && (r.jQuery = r.$ = P),
              P
            );
          });
        },
        264: () => {
          var e, t;
          (H5P.RequestQueue = (function (e, t) {
            const n = function (e) {
              t.call(this),
                (this.processingQueue = !1),
                (e = e || {}),
                (this.showToast = e.showToast),
                (this.itemName = "requestQueue");
            };
            return (
              (n.prototype.add = function (e, t) {
                if (!window.localStorage) return !1;
                let n = this.getStoredRequests();
                return (
                  n || (n = []),
                  n.push({ url: e, data: t }),
                  window.localStorage.setItem(this.itemName, JSON.stringify(n)),
                  this.trigger("requestQueued", {
                    storedStatements: n,
                    processingQueue: this.processingQueue,
                  }),
                  !0
                );
              }),
              (n.prototype.getStoredRequests = function () {
                if (!window.localStorage) return !1;
                const e = window.localStorage.getItem(this.itemName);
                return e ? JSON.parse(e) : [];
              }),
              (n.prototype.clearQueue = function () {
                return (
                  !!window.localStorage &&
                  (window.localStorage.removeItem(this.itemName), !0)
                );
              }),
              (n.prototype.resumeQueue = function () {
                if (
                  !H5PIntegration ||
                  !window.navigator ||
                  !window.localStorage
                )
                  return !1;
                if (this.processingQueue) return !1;
                const e = this.getStoredRequests(),
                  t = e.length;
                return (
                  this.clearQueue(),
                  t
                    ? ((this.processingQueue = !0), this.processQueue(e), !0)
                    : (this.trigger("emptiedQueue", e), !0)
                );
              }),
              (n.prototype.processQueue = function (t) {
                if (!t.length) return;
                this.trigger("processingQueue");
                const n = t.shift(),
                  r = this;
                e.post(n.url, n.data)
                  .fail(r.onQueuedRequestFail.bind(r, n))
                  .always(r.onQueuedRequestProcessed.bind(r, t));
              }),
              (n.prototype.onQueuedRequestFail = function (e) {
                window.navigator.onLine || this.add(e.url, e.data);
              }),
              (n.prototype.onQueuedRequestProcessed = function (e) {
                if (e.length) return void this.processQueue(e);
                this.processingQueue = !1;
                const t = this.getStoredRequests();
                this.trigger("queueEmptied", t);
              }),
              (n.prototype.displayToastMessage = function (e, t, n) {
                if (!this.showToast && !t) return;
                const r = H5P.jQuery.extend(
                  !0,
                  {},
                  {
                    position: {
                      horizontal: "centered",
                      vertical: "centered",
                      noOverflowX: !0,
                    },
                  },
                  n
                );
                H5P.attachToastTo(H5P.jQuery(".h5p-content:first")[0], e, r);
              }),
              n
            );
          })(H5P.jQuery, H5P.EventDispatcher)),
            (H5P.OfflineRequestQueue =
              ((e = H5P.RequestQueue),
              (t = H5P.ConfirmationDialog),
              function (n) {
                const r = new e();
                r.clearQueue();
                let i = null;
                const o = [10, 20, 40, 60, 120, 300, 600];
                let a = -1,
                  s = null,
                  c = !1,
                  l = !1,
                  u = !1;
                const d = n.instance,
                  f = new t({
                    headerText: H5P.t("offlineDialogHeader"),
                    dialogText: H5P.t("offlineDialogBody"),
                    confirmText: H5P.t("offlineDialogRetryButtonLabel"),
                    hideCancel: !0,
                    hideExit: !0,
                    classes: ["offline"],
                    instance: d,
                    skipRestoreFocus: !0,
                  }),
                  p = f.getElement(),
                  h = document.createElement("div");
                h.classList.add("count-down"),
                  (h.innerHTML = H5P.t("offlineDialogRetryMessage").replace(
                    ":num",
                    '<span class="count-down-num">0</span>'
                  )),
                  p
                    .querySelector(".h5p-confirmation-dialog-text")
                    .appendChild(h);
                const g = h.querySelector(".count-down-num"),
                  v = document.createElement("div");
                v.classList.add("throbber-wrapper");
                const m = document.createElement("div");
                m.classList.add("sending-requests-throbber"),
                  v.appendChild(m),
                  r.on(
                    "requestQueued",
                    function (e) {
                      if (!e.data || !e.data.processingQueue) {
                        if (!c) {
                          const e = document.body.querySelector(".h5p-content");
                          if (!e) return;
                          f.appendTo(e), e.appendChild(v), (c = !0);
                        }
                        x();
                      }
                    }.bind(this)
                  ),
                  r.on(
                    "queueEmptied",
                    function (e) {
                      e.data && e.data.length
                        ? x(!0)
                        : (clearInterval(s),
                          y(!1),
                          (a = -1),
                          l && (f.hide(), (l = !1)),
                          r.displayToastMessage(
                            H5P.t("offlineSuccessfulSubmit"),
                            !0,
                            {
                              position: {
                                vertical: "top",
                                offsetVertical: "100",
                              },
                            }
                          ));
                    }.bind(this)
                  ),
                  f.on(
                    "confirmed",
                    function () {
                      (l = !1),
                        setTimeout(function () {
                          b();
                        }, 100);
                    }.bind(this)
                  ),
                  window.addEventListener(
                    "online",
                    function () {
                      b();
                    }.bind(this)
                  ),
                  window.addEventListener(
                    "message",
                    function (e) {
                      window.parent === e.source &&
                        "h5p" === e.data.context &&
                        "queueRequest" === e.data.action &&
                        this.add(e.data.url, e.data.data);
                    }.bind(this)
                  );
                const y = function (e) {
                    (u = !u),
                      void 0 !== e && (u = e),
                      u && l && (f.hide(), (l = !1)),
                      u ? v.classList.add("show") : v.classList.remove("show");
                  },
                  b = function () {
                    clearInterval(s), y(!0), r.resumeQueue();
                  },
                  x = function (e) {
                    l ||
                      (y(!1),
                      l ||
                        (e
                          ? setTimeout(function () {
                              f.show(0);
                            }, 100)
                          : f.show(0)),
                      (l = !0),
                      (i = new Date().getTime()),
                      (a += 1),
                      a >= o.length && (a = o.length - 1),
                      clearInterval(s),
                      (s = setInterval(w, 100)));
                  },
                  w = function () {
                    const e = new Date().getTime(),
                      t = Math.floor((e - i) / 1e3),
                      n = o[a] - t;
                    (g.textContent = n.toString()), n <= 0 && b();
                  };
                this.add = function (e, t) {
                  if (window.navigator.onLine) return !1;
                  r.add(e, t);
                };
              }));
        },
      },
      t = {};
    function n(r) {
      var i = t[r];
      if (void 0 !== i) return i.exports;
      var o = (t[r] = { exports: {} });
      return e[r].call(o.exports, o, o.exports, n), o.exports;
    }
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
      (n.d = (e, t) => {
        for (var r in t)
          n.o(t, r) &&
            !n.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      }),
      (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
    var r = {};
    return (
      (() => {
        "use strict";
        n.d(r, { default: () => a });
        var e = n(357),
          t = n.n(e),
          i = (window.H5P = window.H5P || {});
        (i.jQuery = t().noConflict(!0)),
          (i.jQuery.fn.__originalLoad = i.jQuery.load),
          (i.jQuery.fn.load = function (e, t, n) {
            if ("function" == typeof e) {
              console.warn(
                "You are using a deprecated H5P library. Please upgrade!"
              );
              let e = Array.prototype.slice.call(arguments);
              return e.unshift("load"), i.jQuery.fn.on.apply(this, e);
            }
            return i.jQuery.fn.__originalLoad.apply(this, arguments);
          }),
          (i.isFramed = window.self !== window.parent),
          (i.$window = i.jQuery(window)),
          (i.instances = []),
          document.documentElement.requestFullScreen
            ? (i.fullScreenBrowserPrefix = "")
            : document.documentElement.webkitRequestFullScreen
            ? ((i.safariBrowser =
                navigator.userAgent.match(/version\/([.\d]+)/i)),
              (i.safariBrowser =
                null === i.safariBrowser ? 0 : parseInt(i.safariBrowser[1])),
              (0 === i.safariBrowser || i.safariBrowser > 6) &&
                (i.fullScreenBrowserPrefix = "webkit"))
            : document.documentElement.mozRequestFullScreen
            ? (i.fullScreenBrowserPrefix = "moz")
            : document.documentElement.msRequestFullscreen &&
              (i.fullScreenBrowserPrefix = "ms"),
          (i.opened = {}),
          (i.init = function (e) {
            void 0 === i.$body && (i.$body = i.jQuery(document.body)),
              void 0 === i.fullscreenSupported &&
                (i.fullscreenSupported = !(
                  H5PIntegration.fullscreenDisabled ||
                  i.fullscreenDisabled ||
                  (i.isFramed &&
                    !1 !== i.externalEmbed &&
                    !(
                      document.fullscreenEnabled ||
                      document.webkitFullscreenEnabled ||
                      document.mozFullScreenEnabled
                    ))
                )),
              void 0 === i.canHasFullScreen &&
                (i.canHasFullScreen = i.fullscreenSupported),
              i
                .jQuery(".h5p-content:not(.h5p-initialized)", e)
                .each(function () {
                  var e = i.jQuery(this).addClass("h5p-initialized"),
                    t = i
                      .jQuery('<div class="h5p-container"></div>')
                      .appendTo(e),
                    n = e.data("content-id"),
                    r = H5PIntegration.contents["cid-" + n];
                  if (void 0 === r)
                    return i.error(
                      "No data for content id " +
                        n +
                        ". Perhaps the library is gone?"
                    );
                  var o = {
                    library: r.library,
                    params: JSON.parse(r.jsonContent),
                    metadata: r.metadata,
                  };
                  i.getUserData(n, "state", function (e, s) {
                    if (s) o.userDatas = { state: s };
                    else if (null === s && H5PIntegration.saveFreq) {
                      delete r.contentUserData;
                      var c = new i.Dialog(
                        "content-user-data-reset",
                        "Data Reset",
                        "<p>" +
                          i.t("contentChanged") +
                          "</p><p>" +
                          i.t("startingOver") +
                          '</p><div class="h5p-dialog-ok-button" tabIndex="0" role="button">OK</div>',
                        t
                      );
                      i
                        .jQuery(c)
                        .on("dialog-opened", function (e, t) {
                          var r = function (e) {
                            ("click" !== e.type && 32 !== e.which) ||
                              (c.close(), i.deleteUserData(n, "state", 0));
                          };
                          t.find(".h5p-dialog-ok-button").click(r).keypress(r),
                            i.trigger(a, "resize");
                        })
                        .on("dialog-closed", function () {
                          i.trigger(a, "resize");
                        }),
                        c.open();
                    }
                  });
                  var a = i.newRunnable(o, n, t, !0, { standalone: !0 });
                  (i.offlineRequestQueue = new i.OfflineRequestQueue({
                    instance: a,
                  })),
                    1 == r.fullScreen &&
                      i.fullscreenSupported &&
                      i
                        .jQuery(
                          '<div class="h5p-content-controls"><div role="button" tabindex="0" class="h5p-enable-fullscreen" aria-label="' +
                            i.t("fullscreen") +
                            '" title="' +
                            i.t("fullscreen") +
                            '"></div></div>'
                        )
                        .prependTo(t)
                        .children()
                        .click(function () {
                          i.fullScreen(t, a);
                        })
                        .keydown(function (e) {
                          if (32 === e.which || 13 === e.which)
                            return i.fullScreen(t, a), !1;
                        });
                  var s,
                    c = r.displayOptions,
                    l = !1;
                  if (c.frame) {
                    if (c.copyright) {
                      var u = i.getCopyrights(a, o.params, n, o.metadata);
                      u || (c.copyright = !1);
                    }
                    var d = new i.ActionBar(c),
                      f = d.getDOMElement();
                    d.on("reuse", function () {
                      i.openReuseDialog(f, r, o, a, n),
                        a.triggerXAPI("accessed-reuse");
                    }),
                      d.on("copyrights", function () {
                        new i.Dialog(
                          "copyrights",
                          i.t("copyrightInformation"),
                          u,
                          t
                        ).open(!0),
                          a.triggerXAPI("accessed-copyright");
                      }),
                      d.on("embed", function () {
                        i.openEmbedDialog(
                          f,
                          r.embedCode,
                          r.resizeCode,
                          { width: e.width(), height: e.height() },
                          a
                        ),
                          a.triggerXAPI("accessed-embed");
                      }),
                      d.hasActions() && ((l = !0), f.insertAfter(t));
                  }
                  if (
                    (e.addClass(l ? "h5p-frame" : "h5p-no-frame"),
                    (i.opened[n] = new Date()),
                    i.on(a, "finish", function (e) {
                      void 0 !== e.data &&
                        i.setFinished(
                          n,
                          e.data.score,
                          e.data.maxScore,
                          e.data.time
                        );
                    }),
                    i.on(a, "xAPI", i.xAPICompletedListener),
                    !1 !== H5PIntegration.saveFreq &&
                      (a.getCurrentState instanceof Function ||
                        "function" == typeof a.getCurrentState))
                  ) {
                    var p,
                      h = function () {
                        var e = a.getCurrentState();
                        void 0 !== e &&
                          i.setUserData(n, "state", e, { deleteOnChange: !0 }),
                          H5PIntegration.saveFreq &&
                            (p = setTimeout(h, 1e3 * H5PIntegration.saveFreq));
                      };
                    H5PIntegration.saveFreq &&
                      (p = setTimeout(h, 1e3 * H5PIntegration.saveFreq)),
                      i.on(a, "xAPI", function (e) {
                        var t = e.getVerb();
                        ("completed" !== t && "progressed" !== t) ||
                          (clearTimeout(p), (p = setTimeout(h, 3e3)));
                      });
                  }
                  if (i.isFramed)
                    if (!1 === i.externalEmbed) {
                      var g = window.frameElement;
                      i.on(a, "resize", function () {
                        clearTimeout(s),
                          (s = setTimeout(function () {
                            !(function () {
                              if (!window.parent.H5P.isFullscreen) {
                                var e = g.parentElement.style.height;
                                (g.parentElement.style.height =
                                  g.parentElement.clientHeight + "px"),
                                  g.getBoundingClientRect(),
                                  (g.style.height = "1px"),
                                  (g.style.height =
                                    g.contentDocument.body.scrollHeight + "px"),
                                  (g.parentElement.style.height = e);
                              }
                            })();
                          }, 1));
                      });
                    } else if (i.communicator) {
                      var v = !1;
                      i.communicator.on("ready", function () {
                        i.communicator.send("hello");
                      }),
                        i.communicator.on("hello", function () {
                          (v = !0),
                            (document.body.style.height = "auto"),
                            (document.body.style.overflow = "hidden"),
                            i.trigger(a, "resize");
                        }),
                        i.communicator.on("resizePrepared", function () {
                          i.communicator.send("resize", {
                            scrollHeight: document.body.scrollHeight,
                          });
                        }),
                        i.communicator.on("resize", function () {
                          i.trigger(a, "resize");
                        }),
                        i.on(a, "resize", function () {
                          i.isFullscreen ||
                            (clearTimeout(s),
                            (s = setTimeout(function () {
                              v
                                ? i.communicator.send("prepareResize", {
                                    scrollHeight: document.body.scrollHeight,
                                    clientHeight: document.body.clientHeight,
                                  })
                                : i.communicator.send("hello");
                            }, 0)));
                        });
                    }
                  (i.isFramed && !1 !== i.externalEmbed) ||
                    i.jQuery(window.parent).resize(function () {
                      window.parent.H5P.isFullscreen, i.trigger(a, "resize");
                    }),
                    i.instances.push(a),
                    i.trigger(a, "resize"),
                    e.addClass("using-mouse"),
                    e.on("mousedown keydown keyup", function (t) {
                      e.toggleClass("using-mouse", "mousedown" === t.type);
                    }),
                    i.externalDispatcher &&
                      i.externalDispatcher.trigger("initialized");
                }),
              i
                .jQuery("iframe.h5p-iframe:not(.h5p-initialized)", e)
                .each(function () {
                  var e = i
                    .jQuery(this)
                    .addClass("h5p-initialized")
                    .data("content-id");
                  const t = H5PIntegration.contents["cid-" + e],
                    n =
                      t && t.metadata && t.metadata.defaultLanguage
                        ? t.metadata.defaultLanguage
                        : "en";
                  this.contentDocument.open(),
                    this.contentDocument.write(
                      '<!doctype html><html class="h5p-iframe" lang="' +
                        n +
                        '"><head>' +
                        i.getHeadTags(e) +
                        '</head><body><div class="h5p-content" data-content-id="' +
                        e +
                        '"/></body></html>'
                    ),
                    this.contentDocument.close();
                });
          }),
          (i.getHeadTags = function (e) {
            var t = function (e) {
                for (var t = "", n = 0; n < e.length; n++)
                  t += '<link rel="stylesheet" href="' + e[n] + '">';
                return t;
              },
              n = function (e) {
                for (var t = "", n = 0; n < e.length; n++)
                  t += '<script src="' + e[n] + '"></script>';
                return t;
              };
            return (
              '<base target="_parent">' +
              t(H5PIntegration.core.styles) +
              t(H5PIntegration.contents["cid-" + e].styles) +
              n(H5PIntegration.core.scripts) +
              n(H5PIntegration.contents["cid-" + e].scripts) +
              "<script>H5PIntegration = window.parent.H5PIntegration; var H5P = H5P || {}; H5P.externalEmbed = false;</script>"
            );
          }),
          (i.communicator =
            window.postMessage && window.addEventListener
              ? new (function () {
                  var e = {};
                  window.addEventListener(
                    "message",
                    function (t) {
                      window.parent === t.source &&
                        "h5p" === t.data.context &&
                        void 0 !== e[t.data.action] &&
                        e[t.data.action](t.data);
                    },
                    !1
                  ),
                    (this.on = function (t, n) {
                      e[t] = n;
                    }),
                    (this.send = function (e, t) {
                      void 0 === t && (t = {}),
                        (t.context = "h5p"),
                        (t.action = e),
                        window.parent.postMessage(t, "*");
                    });
                })()
              : void 0),
          (i.semiFullScreen = function (e, t, n, r) {
            i.fullScreen(e, t, n, r, !0);
          }),
          (i.fullScreen = function (e, t, n, r, o) {
            if (void 0 === i.exitFullScreen) {
              if (i.isFramed && !1 === i.externalEmbed)
                return (
                  window.parent.H5P.fullScreen(e, t, n, i.$body.get(), o),
                  (i.isFullscreen = !0),
                  (i.exitFullScreen = function () {
                    window.parent.H5P.exitFullScreen();
                  }),
                  void i.on(t, "exitFullScreen", function () {
                    (i.isFullscreen = !1), (i.exitFullScreen = void 0);
                  })
                );
              var a,
                s,
                c,
                l = e;
              if (void 0 === r) c = i.$body;
              else {
                (c = i.jQuery(r)), (a = c.add(e.get()));
                var u = "#h5p-iframe-" + e.parent().data("content-id");
                e = (s = i.jQuery(u)).parent();
              }
              a = e.add(i.$body).add(a);
              var d = function (e) {
                  a.addClass(e), void 0 !== s && s.css("height", "");
                },
                f = function () {
                  i.trigger(t, "resize"),
                    i.trigger(t, "focus"),
                    i.trigger(t, "enterFullScreen");
                },
                p = function (e) {
                  (i.isFullscreen = !1),
                    a.removeClass(e),
                    i.trigger(t, "resize"),
                    i.trigger(t, "focus"),
                    (i.exitFullScreen = void 0),
                    void 0 !== n && n(),
                    i.trigger(t, "exitFullScreen");
                };
              if (
                ((i.isFullscreen = !0),
                void 0 === i.fullScreenBrowserPrefix || !0 === o)
              ) {
                if (i.isFramed) return;
                d("h5p-semi-fullscreen");
                var h,
                  g,
                  v,
                  m = i
                    .jQuery(
                      '<div role="button" tabindex="0" class="h5p-disable-fullscreen" title="' +
                        i.t("disableFullscreen") +
                        '" aria-label="' +
                        i.t("disableFullscreen") +
                        '"></div>'
                    )
                    .appendTo(l.find(".h5p-content-controls")),
                  y = (i.exitFullScreen = function () {
                    g ? (v.content = g) : w.removeChild(v),
                      m.remove(),
                      c.unbind("keyup", h),
                      p("h5p-semi-fullscreen");
                  });
                (h = function (e) {
                  27 === e.keyCode && y();
                }),
                  m.click(y),
                  c.keyup(h);
                for (
                  var b = document.getElementsByTagName("meta"), x = 0;
                  x < b.length;
                  x++
                )
                  if ("viewport" === b[x].name) {
                    (v = b[x]), (g = v.content);
                    break;
                  }
                if (
                  (g ||
                    ((v = document.createElement("meta")).name = "viewport"),
                  (v.content =
                    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"),
                  !g)
                ) {
                  var w = document.getElementsByTagName("head")[0];
                  w.appendChild(v);
                }
                f();
              } else {
                d("h5p-fullscreen");
                var C,
                  T =
                    "ms" === i.fullScreenBrowserPrefix
                      ? "MSFullscreenChange"
                      : i.fullScreenBrowserPrefix + "fullscreenchange";
                if (
                  (document.addEventListener(T, function () {
                    if (void 0 === C) return (C = !1), void f();
                    p("h5p-fullscreen"),
                      document.removeEventListener(T, arguments.callee, !1);
                  }),
                  "" === i.fullScreenBrowserPrefix)
                )
                  e[0].requestFullScreen();
                else {
                  var P =
                      "ms" === i.fullScreenBrowserPrefix
                        ? "msRequestFullscreen"
                        : i.fullScreenBrowserPrefix + "RequestFullScreen",
                    E =
                      "webkit" === i.fullScreenBrowserPrefix &&
                      0 === i.safariBrowser
                        ? Element.ALLOW_KEYBOARD_INPUT
                        : void 0;
                  e[0][P](E);
                }
                i.exitFullScreen = function () {
                  "" === i.fullScreenBrowserPrefix
                    ? document.exitFullscreen()
                    : "moz" === i.fullScreenBrowserPrefix
                    ? document.mozCancelFullScreen()
                    : document[i.fullScreenBrowserPrefix + "ExitFullscreen"]();
                };
              }
            }
          }),
          (function () {
            (i.addQueryParameter = function (e, t) {
              let n, r;
              const i = e.split("?");
              return (
                i[1]
                  ? ((r = i[1].split("#")), (n = i[0] + "?" + r[0] + "&"))
                  : ((r = i[0].split("#")), (n = r[0] + "?")),
                (n += t),
                r[1] && (n += "#" + r[1]),
                n
              );
            }),
              (i.setSource = function (e, t, n) {
                let r = t.path;
                const o = i.getCrossOrigin(t);
                o
                  ? ((e.crossOrigin = o),
                    H5PIntegration.crossoriginCacheBuster &&
                      (r = i.addQueryParameter(
                        r,
                        H5PIntegration.crossoriginCacheBuster
                      )))
                  : e.removeAttribute("crossorigin"),
                  (e.src = i.getPath(r, n));
              });
            var e = function (e) {
              return e.match(/^[a-z0-9]+:\/\//i);
            };
            (i.getCrossOrigin = function (t) {
              return "object" != typeof t
                ? H5PIntegration.crossorigin &&
                  H5PIntegration.crossoriginRegex &&
                  t.match(H5PIntegration.crossoriginRegex)
                  ? H5PIntegration.crossorigin
                  : null
                : H5PIntegration.crossorigin && !e(t.path)
                ? H5PIntegration.crossorigin
                : void 0;
            }),
              (i.getPath = function (t, n) {
                if (e(t)) return t;
                var r,
                  i = "#tmp" === t.substr(-4, 4);
                if (void 0 === n || i) {
                  if (void 0 === window.H5PEditor) return;
                  r = H5PEditor.filesPath;
                } else
                  void 0 !== H5PIntegration.contents &&
                    H5PIntegration.contents["cid-" + n] &&
                    (r = H5PIntegration.contents["cid-" + n].contentUrl),
                    r || (r = H5PIntegration.url + "/content/" + n);
                return (
                  e(r) ||
                    (r =
                      window.location.protocol +
                      "//" +
                      window.location.host +
                      r),
                  r + "/" + t
                );
              });
          })(),
          (i.getContentPath = function (e) {
            return H5PIntegration.url + "/content/" + e;
          }),
          (i.classFromName = function (e) {
            var t = e.split(".");
            return this[t[t.length - 1]];
          }),
          (i.newRunnable = function (e, t, n, r, o) {
            var a, s, c, l;
            try {
              (c = (a = e.library.split(" ", 2))[0]), (s = a[1].split(".", 2));
            } catch (t) {
              return i.error("Invalid library string: " + e.library);
            }
            if (
              e.params instanceof Object != 1 ||
              e.params instanceof Array == 1
            )
              return (
                i.error("Invalid library params for: " + e.library),
                i.error(e.params)
              );
            try {
              (a = a[0].split(".")), (l = window);
              for (var u = 0; u < a.length; u++) l = l[a[u]];
              if ("function" != typeof l) throw null;
            } catch (t) {
              return i.error("Unable to find constructor for: " + e.library);
            }
            void 0 === o && (o = {}),
              e.subContentId && (o.subContentId = e.subContentId),
              e.userDatas &&
                e.userDatas.state &&
                H5PIntegration.saveFreq &&
                (o.previousState = e.userDatas.state),
              e.metadata && (o.metadata = e.metadata);
            var d,
              f = o.standalone || !1;
            return (
              (l.prototype = i.jQuery.extend(
                {},
                i.ContentType(f).prototype,
                l.prototype
              )),
              void 0 ===
                (d =
                  i.jQuery.inArray(e.library, [
                    "H5P.CoursePresentation 1.0",
                    "H5P.CoursePresentation 1.1",
                    "H5P.CoursePresentation 1.2",
                    "H5P.CoursePresentation 1.3",
                  ]) > -1
                    ? new l(e.params, t)
                    : new l(e.params, t, o)).$ && (d.$ = i.jQuery(d)),
              void 0 === d.contentId && (d.contentId = t),
              void 0 === d.subContentId &&
                e.subContentId &&
                (d.subContentId = e.subContentId),
              void 0 === d.parent && o && o.parent && (d.parent = o.parent),
              void 0 === d.libraryInfo &&
                (d.libraryInfo = {
                  versionedName: e.library,
                  versionedNameNoSpaces: c + "-" + s[0] + "." + s[1],
                  machineName: c,
                  majorVersion: s[0],
                  minorVersion: s[1],
                }),
              void 0 !== n &&
                (n.toggleClass("h5p-standalone", f),
                d.attach(n),
                i.trigger(
                  d,
                  "domChanged",
                  { $target: n, library: c, key: "newLibrary" },
                  { bubbles: !0, external: !0 }
                ),
                (void 0 !== r && r) || i.trigger(d, "resize")),
              d
            );
          }),
          (i.error = function (e) {
            void 0 !== window.console &&
              void 0 !== console.error &&
              console.error(e.stack ? e.stack : e);
          }),
          (i.t = function (e, t, n) {
            if (
              (void 0 === n && (n = "H5P"), void 0 === H5PIntegration.l10n[n])
            )
              return '[Missing translation namespace "' + n + '"]';
            if (void 0 === H5PIntegration.l10n[n][e])
              return '[Missing translation "' + e + '" in "' + n + '"]';
            var r = H5PIntegration.l10n[n][e];
            if (void 0 !== t) for (var i in t) r = r.replace(i, t[i]);
            return r;
          }),
          (i.Dialog = function (e, t, n, r) {
            var o = this,
              a = i
                .jQuery(
                  '<div class="h5p-popup-dialog h5p-' +
                    e +
                    '-dialog" role="dialog" tabindex="-1">                              <div class="h5p-inner">                                <h2>' +
                    t +
                    '</h2>                                <div class="h5p-scroll-content">' +
                    n +
                    '</div>                                <div class="h5p-close" role="button" tabindex="0" aria-label="' +
                    i.t("close") +
                    '" title="' +
                    i.t("close") +
                    '"></div>                              </div>                            </div>'
                )
                .insertAfter(r)
                .click(function (e) {
                  (e && e.originalEvent && e.originalEvent.preventClosing) ||
                    o.close();
                })
                .children(".h5p-inner")
                .click(function (e) {
                  e.originalEvent.preventClosing = !0;
                })
                .find(".h5p-close")
                .click(function () {
                  o.close();
                })
                .keypress(function (e) {
                  if (13 === e.which || 32 === e.which) return o.close(), !1;
                })
                .end()
                .find("a")
                .click(function (e) {
                  e.stopPropagation();
                })
                .end()
                .end();
            (o.open = function (e) {
              e && a.css("height", "100%"),
                setTimeout(function () {
                  a.addClass("h5p-open"),
                    i.jQuery(o).trigger("dialog-opened", [a]),
                    a.focus();
                }, 1);
            }),
              (o.close = function () {
                a.removeClass("h5p-open"),
                  setTimeout(function () {
                    a.remove(),
                      i.jQuery(o).trigger("dialog-closed", [a]),
                      r.attr("tabindex", "-1"),
                      r.focus();
                  }, 200);
              });
          }),
          (i.getCopyrights = function (e, t, n, r) {
            var o;
            if (void 0 !== e.getCopyrights)
              try {
                o = e.getCopyrights();
              } catch (e) {}
            void 0 === o &&
              ((o = new i.ContentCopyrights()), i.findCopyrights(o, t, n));
            var a = i.buildMetadataCopyrights(r, e.libraryInfo.machineName);
            return (
              void 0 !== a && o.addMediaInFront(a),
              void 0 !== o && (o = o.toString()),
              o
            );
          }),
          (i.findCopyrights = function (e, t, n, r) {
            var o;
            for (var a in (r && ((r.params = t), l(r, r.machineName, n)), t))
              if (t.hasOwnProperty(a))
                if ("overrideSettings" !== a) {
                  var s = t[a];
                  if (
                    (s && s.library && "string" == typeof s.library
                      ? (o = s.library.split(" ")[0])
                      : s &&
                        s.library &&
                        "object" == typeof s.library &&
                        (o =
                          s.library.library &&
                          "string" == typeof s.library.library
                            ? s.library.library.split(" ")[0]
                            : o),
                    s instanceof Array)
                  )
                    i.findCopyrights(e, s, n);
                  else if (s instanceof Object)
                    if (
                      (l(s, o, n),
                      void 0 === s.copyright ||
                        void 0 === s.copyright.license ||
                        void 0 === s.path ||
                        void 0 === s.mime)
                    )
                      i.findCopyrights(e, s, n);
                    else {
                      var c = new i.MediaCopyright(s.copyright);
                      void 0 !== s.width &&
                        void 0 !== s.height &&
                        c.setThumbnail(
                          new i.Thumbnail(
                            i.getPath(s.path, n),
                            s.width,
                            s.height
                          )
                        ),
                        e.addMedia(c);
                    }
                } else
                  console.warn(
                    "The semantics field 'overrideSettings' is DEPRECATED and should not be used."
                  ),
                    console.warn(t);
            function l(t, n, r) {
              if (t.metadata) {
                const o = i.buildMetadataCopyrights(t.metadata, n);
                if (void 0 !== o) {
                  if (
                    t.params &&
                    "Image" === t.params.contentName &&
                    t.params.file
                  ) {
                    const e = t.params.file.path,
                      n = t.params.file.width,
                      a = t.params.file.height;
                    o.setThumbnail(new i.Thumbnail(i.getPath(e, r), n, a));
                  }
                  e.addMedia(o);
                }
              }
            }
          }),
          (i.buildMetadataCopyrights = function (e) {
            if (e && void 0 !== e.license && "U" !== e.license) {
              var t = {
                contentType: e.contentType,
                title: e.title,
                author:
                  e.authors && e.authors.length > 0
                    ? e.authors
                        .map(function (e) {
                          return e.role ? e.name + " (" + e.role + ")" : e.name;
                        })
                        .join(", ")
                    : void 0,
                source: e.source,
                year: e.yearFrom
                  ? e.yearFrom + (e.yearTo ? "-" + e.yearTo : "")
                  : void 0,
                license: e.license,
                version: e.licenseVersion,
                licenseExtras: e.licenseExtras,
                changes:
                  e.changes && e.changes.length > 0
                    ? e.changes
                        .map(function (e) {
                          return (
                            e.log +
                            (e.author ? ", " + e.author : "") +
                            (e.date ? ", " + e.date : "")
                          );
                        })
                        .join(" / ")
                    : void 0,
              };
              return new i.MediaCopyright(t);
            }
          }),
          (i.openReuseDialog = function (e, t, n, r, o) {
            let a = "";
            t.displayOptions.export &&
              (a +=
                '<button type="button" class="h5p-big-button h5p-download-button"><div class="h5p-button-title">Download as an .h5p file</div><div class="h5p-button-description">.h5p files may be uploaded to any web-site where H5P content may be created.</div></button>'),
              t.displayOptions.export &&
                t.displayOptions.copy &&
                (a +=
                  '<div class="h5p-horizontal-line-text"><span>or</span></div>'),
              t.displayOptions.copy &&
                (a +=
                  '<button type="button" class="h5p-big-button h5p-copy-button"><div class="h5p-button-title">Copy content</div><div class="h5p-button-description">Copied content may be pasted anywhere this content type is supported on this website.</div></button>');
            const s = new i.Dialog("reuse", i.t("reuseContent"), a, e);
            i
              .jQuery(s)
              .on("dialog-opened", function (e, a) {
                i
                  .jQuery(
                    '<a href="https://h5p.org/node/442225" target="_blank">More Info</a>'
                  )
                  .click(function (e) {
                    e.stopPropagation();
                  })
                  .appendTo(a.find("h2")),
                  a.find(".h5p-download-button").click(function () {
                    (window.location.href = t.exportUrl),
                      r.triggerXAPI("downloaded"),
                      s.close();
                  }),
                  a.find(".h5p-copy-button").click(function () {
                    const e = new i.ClipboardItem(n);
                    (e.contentId = o),
                      i.setClipboard(e),
                      r.triggerXAPI("copied"),
                      s.close(),
                      i.attachToastTo(
                        i.jQuery(".h5p-content:first")[0],
                        i.t("contentCopied"),
                        {
                          position: {
                            horizontal: "centered",
                            vertical: "centered",
                            noOverflowX: !0,
                          },
                        }
                      );
                  }),
                  i.trigger(r, "resize");
              })
              .on("dialog-closed", function () {
                i.trigger(r, "resize");
              }),
              s.open();
          }),
          (i.openEmbedDialog = function (e, t, n, r, o) {
            var a = t + n,
              s = new i.Dialog(
                "embed",
                i.t("embed"),
                '<textarea class="h5p-embed-code-container" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>' +
                  i.t("size") +
                  ': <input type="text" value="' +
                  Math.ceil(r.width) +
                  '" class="h5p-embed-size"/> × <input type="text" value="' +
                  Math.ceil(r.height) +
                  '" class="h5p-embed-size"/> px<br/><div role="button" tabindex="0" class="h5p-expander">' +
                  i.t("showAdvanced") +
                  '</div><div class="h5p-expander-content"><p>' +
                  i.t("advancedHelp") +
                  '</p><textarea class="h5p-embed-code-container" autocorrect="off" autocapitalize="off" spellcheck="false">' +
                  n +
                  "</textarea></div>",
                e
              );
            i
              .jQuery(s)
              .on("dialog-opened", function (e, t) {
                var n = t.find(".h5p-inner").find(".h5p-scroll-content"),
                  s =
                    (n.outerHeight(),
                    n.innerHeight(),
                    function () {
                      i.trigger(o, "resize");
                    }),
                  c = t.find(".h5p-embed-size:eq(0)"),
                  l = t.find(".h5p-embed-size:eq(1)"),
                  u = function (e, t) {
                    var n = parseFloat(e.val());
                    return isNaN(n) ? t : Math.ceil(n);
                  },
                  d = function () {
                    t.find(".h5p-embed-code-container:first").val(
                      a
                        .replace(":w", u(c, r.width))
                        .replace(":h", u(l, r.height))
                    );
                  };
                c.change(d),
                  l.change(d),
                  d(),
                  t.find(".h5p-embed-code-container").each(function () {
                    i.jQuery(this)
                      .css("height", this.scrollHeight + "px")
                      .focus(function () {
                        i.jQuery(this).select();
                      });
                  }),
                  t.find(".h5p-embed-code-container").eq(0).select(),
                  s();
                var f = function () {
                  var e = i.jQuery(this),
                    n = e.next();
                  n.is(":visible")
                    ? (e
                        .removeClass("h5p-open")
                        .text(i.t("showAdvanced"))
                        .attr("aria-expanded", "true"),
                      n.hide())
                    : (e
                        .addClass("h5p-open")
                        .text(i.t("hideAdvanced"))
                        .attr("aria-expanded", "false"),
                      n.show()),
                    t.find(".h5p-embed-code-container").each(function () {
                      i.jQuery(this).css("height", this.scrollHeight + "px");
                    }),
                    s();
                };
                t.find(".h5p-expander")
                  .click(f)
                  .keypress(function (e) {
                    if (32 === e.keyCode) return f.apply(this), !1;
                  });
              })
              .on("dialog-closed", function () {
                i.trigger(o, "resize");
              }),
              s.open();
          }),
          (i.attachToastTo = function (e, t, n) {
            if (void 0 === e || void 0 === t) return;
            const r = function (t) {
                var n, r, o;
                -1 ===
                  ((n = t),
                  (r = (n.composedPath && n.composedPath()) || n.path),
                  (o = n.target),
                  null != r
                    ? r.indexOf(window) < 0
                      ? r.concat(window)
                      : r
                    : o === window
                    ? [window]
                    : [o].concat(
                        (function e(t, n) {
                          n = n || [];
                          var r = t.parentNode;
                          return r ? e(r, n.concat(r)) : n;
                        })(o),
                        window
                      )).indexOf(e) && (clearTimeout(c), i());
              },
              i = function () {
                document.removeEventListener("click", r),
                  o.parentNode && o.parentNode.removeChild(o);
              };
            ((n = n || {}).style = n.style || "h5p-toast"),
              (n.duration = n.duration || 3e3);
            const o = document.createElement("div");
            o.setAttribute("id", n.style),
              o.classList.add("h5p-toast-disabled"),
              o.classList.add(n.style);
            const a = document.createElement("span");
            (a.innerHTML = t), o.appendChild(a), document.body.appendChild(o);
            const s = (function (e, t, n) {
              ((n = n || {}).offsetHorizontal = n.offsetHorizontal || 0),
                (n.offsetVertical = n.offsetVertical || 0);
              const r = t.getBoundingClientRect(),
                i = e.getBoundingClientRect();
              let o = 0,
                a = 0;
              switch (n.horizontal) {
                case "before":
                  o = i.left - r.width - n.offsetHorizontal;
                  break;
                case "after":
                  o = i.left + i.width + n.offsetHorizontal;
                  break;
                case "left":
                  o = i.left + n.offsetHorizontal;
                  break;
                case "right":
                  o = i.left + i.width - r.width - n.offsetHorizontal;
                  break;
                case "centered":
                  o = i.left + i.width / 2 - r.width / 2 + n.offsetHorizontal;
                  break;
                default:
                  o = i.left + i.width / 2 - r.width / 2 + n.offsetHorizontal;
              }
              switch (n.vertical) {
                case "above":
                  a = i.top - r.height - n.offsetVertical;
                  break;
                case "below":
                  a = i.top + i.height + n.offsetVertical;
                  break;
                case "top":
                  a = i.top + n.offsetVertical;
                  break;
                case "bottom":
                  a = i.top + i.height - r.height - n.offsetVertical;
                  break;
                case "centered":
                  a = i.top + i.height / 2 - r.height / 2 + n.offsetVertical;
                  break;
                default:
                  a = i.top + i.height + n.offsetVertical;
              }
              const s = document.body.getBoundingClientRect();
              return (
                (n.noOverflowLeft || n.noOverflowX) && o < s.x && (o = s.x),
                (n.noOverflowRight || n.noOverflowX) &&
                  o + r.width > s.x + s.width &&
                  (o = s.x + s.width - r.width),
                (n.noOverflowTop || n.noOverflowY) && a < s.y && (a = s.y),
                (n.noOverflowBottom || n.noOverflowY) &&
                  a + r.height > s.y + s.height &&
                  (o = s.y + s.height - r.height),
                { left: o, top: a }
              );
            })(e, o, n.position);
            (o.style.left = Math.round(s.left) + "px"),
              (o.style.top = Math.round(s.top) + "px"),
              o.classList.remove("h5p-toast-disabled");
            const c = setTimeout(i, n.duration);
            document.addEventListener("click", r);
          }),
          (i.ContentCopyrights = function () {
            var e,
              t = [],
              n = [];
            (this.setLabel = function (t) {
              e = t;
            }),
              (this.addMedia = function (e) {
                void 0 !== e && t.push(e);
              }),
              (this.addMediaInFront = function (e) {
                void 0 !== e && t.unshift(e);
              }),
              (this.addContent = function (e) {
                void 0 !== e && n.push(e);
              }),
              (this.toString = function () {
                for (var r = "", i = 0; i < t.length; i++) r += t[i];
                for (i = 0; i < n.length; i++) r += n[i];
                return (
                  "" !== r &&
                    (void 0 !== e && (r = "<h3>" + e + "</h3>" + r),
                    (r =
                      '<div class="h5p-content-copyrights">' + r + "</div>")),
                  r
                );
              });
          }),
          (i.MediaCopyright = function (e, t, n, r) {
            var o,
              a = new i.DefinitionList(),
              s = function (e) {
                return void 0 === t || void 0 === t[e] ? i.t(e) : t[e];
              },
              c = function (e, t) {
                var n,
                  r,
                  o = i.copyrightLicenses[e],
                  a = "";
                ("PD" === e && t) ||
                  (a += o.hasOwnProperty("label") ? o.label : o),
                  o.versions &&
                    (!o.versions.default ||
                      (t && o.versions[t]) ||
                      (t = o.versions.default),
                    t && o.versions[t] && (n = o.versions[t])),
                  n &&
                    (a && (a += " "),
                    (a += n.hasOwnProperty("label") ? n.label : n)),
                  o.hasOwnProperty("link")
                    ? (r = o.link.replace(
                        ":version",
                        o.linkVersions ? o.linkVersions[t] : t
                      ))
                    : n && o.hasOwnProperty("link") && (r = n.link),
                  r &&
                    (a = '<a href="' + r + '" target="_blank">' + a + "</a>");
                var s = "";
                return (
                  "PD" !== e && "C" !== e && (s += e),
                  t &&
                    "CC0 1.0" !== t &&
                    (s && "GNU GPL" !== e && (s += " "), (s += t)),
                  s && (a += " (" + s + ")"),
                  "C" === e && (a += " &copy;"),
                  a
                );
              };
            if (void 0 !== e) {
              for (var l in r) r.hasOwnProperty(l) && (e[l] = r[l]);
              void 0 === n &&
                (n = [
                  "contentType",
                  "title",
                  "license",
                  "author",
                  "year",
                  "source",
                  "licenseExtras",
                  "changes",
                ]);
              for (var u = 0; u < n.length; u++) {
                var d = n[u];
                if (void 0 !== e[d] && "" !== e[d]) {
                  var f = e[d];
                  "license" === d && (f = c(e.license, e.version)),
                    "source" === d &&
                      (f = f
                        ? '<a href="' + f + '" target="_blank">' + f + "</a>"
                        : void 0),
                    a.add(new i.Field(s(d), f));
                }
              }
            }
            (this.setThumbnail = function (e) {
              o = e;
            }),
              (this.undisclosed = function () {
                if (1 === a.size()) {
                  var e = a.get(0);
                  if (e.getLabel() === s("license") && e.getValue() === c("U"))
                    return !0;
                }
                return !1;
              }),
              (this.toString = function () {
                var e = "";
                return (
                  this.undisclosed() ||
                    (void 0 !== o && (e += o),
                    "" !== (e += a) &&
                      (e = '<div class="h5p-media-copyright">' + e + "</div>")),
                  e
                );
              });
          }),
          (i.Thumbnail = function (e, t, n) {
            var r;
            void 0 !== t && (r = Math.round((t / n) * 100)),
              (this.toString = function () {
                return (
                  '<img src="' +
                  e +
                  '" alt="' +
                  i.t("thumbnail") +
                  '" class="h5p-thumbnail" height="100"' +
                  (void 0 === r ? "" : ' width="' + r + '"') +
                  "/>"
                );
              });
          }),
          (i.Field = function (e, t) {
            (this.getLabel = function () {
              return e;
            }),
              (this.getValue = function () {
                return t;
              });
          }),
          (i.DefinitionList = function () {
            var e = [];
            (this.add = function (t) {
              e.push(t);
            }),
              (this.size = function () {
                return e.length;
              }),
              (this.get = function (t) {
                return e[t];
              }),
              (this.toString = function () {
                for (var t = "", n = 0; n < e.length; n++) {
                  var r = e[n];
                  t +=
                    "<dt>" +
                    r.getLabel() +
                    "</dt><dd>" +
                    r.getValue() +
                    "</dd>";
                }
                return "" === t
                  ? t
                  : '<dl class="h5p-definition-list">' + t + "</dl>";
              });
          }),
          (i.Coords = function (e, t, n, r) {
            return this instanceof i.Coords
              ? ((this.x = 0),
                (this.y = 0),
                (this.w = 1),
                (this.h = 1),
                "object" == typeof e
                  ? ((this.x = e.x),
                    (this.y = e.y),
                    (this.w = e.w),
                    (this.h = e.h))
                  : (void 0 !== e && (this.x = e),
                    void 0 !== t && (this.y = t),
                    void 0 !== n && (this.w = n),
                    void 0 !== r && (this.h = r)),
                this)
              : new i.Coords(e, t, n, r);
          }),
          (i.libraryFromString = function (e) {
            var t = /(.+)\s(\d+)\.(\d+)$/g.exec(e);
            return (
              null !== t && {
                machineName: t[1],
                majorVersion: parseInt(t[2]),
                minorVersion: parseInt(t[3]),
              }
            );
          }),
          (i.getLibraryPath = function (e) {
            return void 0 !== H5PIntegration.urlLibraries
              ? H5PIntegration.urlLibraries + "/" + e
              : H5PIntegration.url + "/libraries/" + e;
          }),
          (i.cloneObject = function (e, t) {
            var n = e instanceof Array ? [] : {};
            for (var r in e)
              e.hasOwnProperty(r) &&
                (void 0 !== t && t && "object" == typeof e[r]
                  ? (n[r] = i.cloneObject(e[r], t))
                  : (n[r] = e[r]));
            return n;
          }),
          (i.trim = function (e) {
            return e.replace(/^\s+|\s+$/g, "");
          }),
          (i.jsLoaded = function (e) {
            return (
              (H5PIntegration.loadedJs = H5PIntegration.loadedJs || []),
              -1 !== i.jQuery.inArray(e, H5PIntegration.loadedJs)
            );
          }),
          (i.cssLoaded = function (e) {
            return (
              (H5PIntegration.loadedCss = H5PIntegration.loadedCss || []),
              -1 !== i.jQuery.inArray(e, H5PIntegration.loadedCss)
            );
          }),
          (i.shuffleArray = function (e) {
            if (e instanceof Array) {
              var t,
                n,
                r,
                i = e.length;
              if (0 === i) return !1;
              for (; --i; )
                (t = Math.floor(Math.random() * (i + 1))),
                  (n = e[i]),
                  (r = e[t]),
                  (e[i] = r),
                  (e[t] = n);
              return e;
            }
          }),
          (i.setFinished = function (e, t, n, r) {
            if (
              ("number" == typeof t || t instanceof Number) &&
              !0 === H5PIntegration.postUserStatistics
            ) {
              var o = function (e) {
                return Math.round(e.getTime() / 1e3);
              };
              const a = {
                contentId: e,
                score: t,
                maxScore: n,
                opened: o(i.opened[e]),
                finished: o(new Date()),
                time: r,
              };
              i.jQuery
                .post(H5PIntegration.ajax.setFinished, a)
                .fail(function () {
                  i.offlineRequestQueue.add(H5PIntegration.ajax.setFinished, a);
                });
            }
          }),
          Array.prototype.indexOf ||
            (Array.prototype.indexOf = function (e) {
              for (var t = 0; t < this.length; t++) if (this[t] === e) return t;
              return -1;
            }),
          void 0 === String.prototype.trim &&
            (String.prototype.trim = function () {
              return i.trim(this);
            }),
          (i.trigger = function (e, t, n, r) {
            void 0 !== e.trigger
              ? e.trigger(t, n, r)
              : void 0 !== e.$ && void 0 !== e.$.trigger && e.$.trigger(t);
          }),
          (i.on = function (e, t, n) {
            void 0 !== e.on
              ? e.on(t, n)
              : void 0 !== e.$ && void 0 !== e.$.on && e.$.on(t, n);
          }),
          (i.createUUID = function () {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
              /[xy]/g,
              function (e) {
                var t = (16 * Math.random()) | 0;
                return ("x" === e ? t : (3 & t) | 8).toString(16);
              }
            );
          }),
          (i.createTitle = function (e, t) {
            if (!e) return "";
            void 0 === t && (t = 60);
            var n = i
              .jQuery("<div></div>")
              .text(e.replace(/(<([^>]+)>)/gi, ""))
              .text();
            return n.length > t && (n = n.substr(0, t - 3) + "..."), n;
          }),
          (function (e) {
            function t(t, n, r, i, o, a, s, c) {
              if (void 0 !== H5PIntegration.user) {
                var l = {
                  url: H5PIntegration.ajax.contentUserData
                    .replace(":contentId", t)
                    .replace(":dataType", n)
                    .replace(":subContentId", r || 0),
                  dataType: "json",
                  async: void 0 === c || c,
                };
                void 0 !== o
                  ? ((l.type = "POST"),
                    (l.data = {
                      data: null === o ? 0 : o,
                      preload: a ? 1 : 0,
                      invalidate: s ? 1 : 0,
                    }))
                  : (l.type = "GET"),
                  void 0 !== i &&
                    ((l.error = function (e, t) {
                      i(t);
                    }),
                    (l.success = function (e) {
                      e.success
                        ? !1 !== e.data && void 0 !== e.data
                          ? i(void 0, e.data)
                          : i()
                        : i(e.message);
                    })),
                  e.ajax(l);
              } else i("Not signed in.");
            }
            (i.getUserData = function (e, n, r, i) {
              i || (i = 0),
                (H5PIntegration.contents = H5PIntegration.contents || {});
              var o = H5PIntegration.contents["cid-" + e] || {},
                a = o.contentUserData;
              if (a && a[i] && void 0 !== a[i][n]) {
                if ("RESET" === a[i][n]) return void r(void 0, null);
                try {
                  r(void 0, JSON.parse(a[i][n]));
                } catch (e) {
                  r(e);
                }
              } else
                t(e, n, i, function (e, t) {
                  if (e || void 0 === t) r(e, t);
                  else {
                    void 0 === o.contentUserData &&
                      (o.contentUserData = a = {}),
                      void 0 === a[i] && (a[i] = {}),
                      (a[i][n] = t);
                    try {
                      r(void 0, JSON.parse(t));
                    } catch (e) {
                      r(e);
                    }
                  }
                });
            }),
              (i.setUserData = function (e, n, r, o) {
                var a = i.jQuery.extend(
                  !0,
                  {},
                  {
                    subContentId: 0,
                    preloaded: !0,
                    deleteOnChange: !1,
                    async: !0,
                  },
                  o
                );
                try {
                  r = JSON.stringify(r);
                } catch (e) {
                  return void (a.errorCallback && a.errorCallback(e));
                }
                var s = H5PIntegration.contents["cid-" + e];
                void 0 === s && (s = H5PIntegration.contents["cid-" + e] = {}),
                  s.contentUserData || (s.contentUserData = {});
                var c = s.contentUserData;
                void 0 === c[a.subContentId] && (c[a.subContentId] = {}),
                  r !== c[a.subContentId][n] &&
                    ((c[a.subContentId][n] = r),
                    t(
                      e,
                      n,
                      a.subContentId,
                      function (e) {
                        a.errorCallback && e && a.errorCallback(e);
                      },
                      r,
                      a.preloaded,
                      a.deleteOnChange,
                      a.async
                    ));
              }),
              (i.deleteUserData = function (e, n, r) {
                r || (r = 0);
                var i = H5PIntegration.contents["cid-" + e].contentUserData;
                i && i[r] && i[r][n] && delete i[r][n],
                  t(e, n, r, void 0, null);
              }),
              (i.getContentForInstance = function (e) {
                var t = "cid-" + e;
                return H5PIntegration &&
                  H5PIntegration.contents &&
                  H5PIntegration.contents[t]
                  ? H5PIntegration.contents[t]
                  : void 0;
              }),
              (i.ClipboardItem = function (e, t, n) {
                var r = this;
                t || ((t = "action"), (e = { action: e })),
                  (r.specific = e),
                  t && e[t] && (r.generic = t),
                  n && (r.from = n),
                  window.H5PEditor &&
                    H5PEditor.contentId &&
                    (r.contentId = H5PEditor.contentId),
                  r.specific.width ||
                    r.specific.height ||
                    (function () {
                      if (r.generic) {
                        var e = r.specific[r.generic];
                        e.params.file &&
                          e.params.file.width &&
                          e.params.file.height &&
                          ((r.width = 20),
                          (r.height =
                            (e.params.file.height / e.params.file.width) *
                            r.width));
                      }
                    })();
              }),
              (i.clipboardify = function (e) {
                e instanceof i.ClipboardItem || (e = new i.ClipboardItem(e)),
                  i.setClipboard(e);
              }),
              (i.getClipboard = function () {
                return n();
              }),
              (i.setClipboard = function (e) {
                localStorage.setItem("h5pClipboard", JSON.stringify(e)),
                  i.externalDispatcher.trigger("datainclipboard", {
                    reset: !1,
                  });
              }),
              (i.getLibraryConfig = function (e) {
                return H5PIntegration.libraryConfig &&
                  H5PIntegration.libraryConfig[e]
                  ? H5PIntegration.libraryConfig[e]
                  : {};
              });
            var n = function () {
                var e = localStorage.getItem("h5pClipboard");
                if (e) {
                  try {
                    e = JSON.parse(e);
                  } catch (e) {
                    return void console.error(
                      "Unable to parse JSON from clipboard.",
                      e
                    );
                  }
                  return (
                    r(e.specific, function (t) {
                      return "#tmp" === t.substr(-4, 4) ||
                        !e.contentId ||
                        t.match(/^https?:\/\//i)
                        ? t
                        : H5PEditor.contentId
                        ? "../" + e.contentId + "/" + t
                        : (H5PEditor.contentRelUrl
                            ? H5PEditor.contentRelUrl
                            : "../content/") +
                          e.contentId +
                          "/" +
                          t;
                    }),
                    e.generic && (e.generic = e.specific[e.generic]),
                    e
                  );
                }
              },
              r = function (e, t) {
                for (var n in e)
                  if (e.hasOwnProperty(n) && e[n] instanceof Object) {
                    var i = e[n];
                    void 0 !== i.path && void 0 !== i.mime
                      ? (i.path = t(i.path))
                      : (void 0 !== i.library &&
                          void 0 !== i.subContentId &&
                          delete i.subContentId,
                        r(i, t));
                  }
              };
            e(document).ready(function () {
              window.addEventListener("storage", function (e) {
                "h5pClipboard" === e.key &&
                  i.externalDispatcher.trigger("datainclipboard", {
                    reset: null === e.newValue,
                  });
              });
              var e = {
                default: "4.0",
                "4.0": i.t("licenseCC40"),
                "3.0": i.t("licenseCC30"),
                2.5: i.t("licenseCC25"),
                "2.0": i.t("licenseCC20"),
                "1.0": i.t("licenseCC10"),
              };
              if (
                ((i.copyrightLicenses = {
                  U: i.t("licenseU"),
                  "CC BY": {
                    label: i.t("licenseCCBY"),
                    link: "http://creativecommons.org/licenses/by/:version",
                    versions: e,
                  },
                  "CC BY-SA": {
                    label: i.t("licenseCCBYSA"),
                    link: "http://creativecommons.org/licenses/by-sa/:version",
                    versions: e,
                  },
                  "CC BY-ND": {
                    label: i.t("licenseCCBYND"),
                    link: "http://creativecommons.org/licenses/by-nd/:version",
                    versions: e,
                  },
                  "CC BY-NC": {
                    label: i.t("licenseCCBYNC"),
                    link: "http://creativecommons.org/licenses/by-nc/:version",
                    versions: e,
                  },
                  "CC BY-NC-SA": {
                    label: i.t("licenseCCBYNCSA"),
                    link: "http://creativecommons.org/licenses/by-nc-sa/:version",
                    versions: e,
                  },
                  "CC BY-NC-ND": {
                    label: i.t("licenseCCBYNCND"),
                    link: "http://creativecommons.org/licenses/by-nc-nd/:version",
                    versions: e,
                  },
                  "CC0 1.0": {
                    label: i.t("licenseCC010"),
                    link: "https://creativecommons.org/publicdomain/zero/1.0/",
                  },
                  "GNU GPL": {
                    label: i.t("licenseGPL"),
                    link: "http://www.gnu.org/licenses/gpl-:version-standalone.html",
                    linkVersions: { v3: "3.0", v2: "2.0", v1: "1.0" },
                    versions: {
                      default: "v3",
                      v3: i.t("licenseV3"),
                      v2: i.t("licenseV2"),
                      v1: i.t("licenseV1"),
                    },
                  },
                  PD: {
                    label: i.t("licensePD"),
                    versions: {
                      "CC0 1.0": {
                        label: i.t("licenseCC010"),
                        link: "https://creativecommons.org/publicdomain/zero/1.0/",
                      },
                      "CC PDM": {
                        label: i.t("licensePDM"),
                        link: "https://creativecommons.org/publicdomain/mark/1.0/",
                      },
                    },
                  },
                  "ODC PDDL":
                    '<a href="http://opendatacommons.org/licenses/pddl/1.0/" target="_blank">Public Domain Dedication and Licence</a>',
                  "CC PDM": {
                    label: i.t("licensePDM"),
                    link: "https://creativecommons.org/publicdomain/mark/1.0/",
                  },
                  C: i.t("licenseC"),
                }),
                i.isFramed &&
                  !1 === i.externalEmbed &&
                  i.externalDispatcher.on("*", function (e) {
                    window.parent.H5P.externalDispatcher.trigger.call(this, e);
                  }),
                i.preventInit || i.init(document.body),
                !1 !== H5PIntegration.saveFreq)
              ) {
                var t = 0,
                  n = function () {
                    var e = new Date().getTime();
                    if (e - t > 250) {
                      t = e;
                      for (var n = 0; n < i.instances.length; n++) {
                        var r = i.instances[n];
                        if (
                          r.getCurrentState instanceof Function ||
                          "function" == typeof r.getCurrentState
                        ) {
                          var o = r.getCurrentState();
                          void 0 !== o &&
                            i.setUserData(r.contentId, "state", o, {
                              deleteOnChange: !0,
                              async: !1,
                            });
                        }
                      }
                    }
                  };
                i.$window.one("beforeunload unload", function () {
                  i.$window.off("pagehide beforeunload unload"), n();
                }),
                  i.$window.on("pagehide", n);
              }
            });
          })(i.jQuery);
        const o = i;
        n(449), n(268), n(2), n(798), n(644), n(264), n(41);
        const a = o;
      })(),
      r.default
    );
  })();
});
