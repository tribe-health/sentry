!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e(require('jquery')))
    : 'function' == typeof define && define.amd
    ? define('@atlassian/aui', ['jquery'], e)
    : 'object' == typeof exports
    ? (exports['@atlassian/aui'] = e(require('jquery')))
    : (t.AJS = e(t.jQuery));
})(window, function (t) {
  return (function (t) {
    var e = {};
    function i(n) {
      if (e[n]) return e[n].exports;
      var s = (e[n] = {i: n, l: !1, exports: {}});
      return t[n].call(s.exports, s, s.exports, i), (s.l = !0), s.exports;
    }
    return (
      (i.m = t),
      (i.c = e),
      (i.d = function (t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n});
      }),
      (i.r = function (t) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, {value: 'Module'}),
          Object.defineProperty(t, '__esModule', {value: !0});
      }),
      (i.t = function (t, e) {
        if ((1 & e && (t = i(t)), 8 & e)) return t;
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (
          (i.r(n),
          Object.defineProperty(n, 'default', {enumerable: !0, value: t}),
          2 & e && 'string' != typeof t)
        )
          for (var s in t)
            i.d(
              n,
              s,
              function (e) {
                return t[e];
              }.bind(null, s)
            );
        return n;
      }),
      (i.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return i.d(e, 'a', e), e;
      }),
      (i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (i.p = ''),
      i((i.s = 91))
    );
  })([
    function (t, e, i) {
      (function (n) {
        var s, r;
        !(function (a) {
          var o =
            ('object' == typeof self && self.self === self && self) ||
            ('object' == typeof n && n.global === n && n);
          (s = [i(2), i(1), e]),
            void 0 ===
              (r = function (t, e, i) {
                o.Backbone = (function (t, e, i, n) {
                  var s = t.Backbone,
                    r = Array.prototype.slice;
                  (e.VERSION = '1.4.0'),
                    (e.$ = n),
                    (e.noConflict = function () {
                      return (t.Backbone = s), this;
                    }),
                    (e.emulateHTTP = !1),
                    (e.emulateJSON = !1);
                  var a,
                    o = (e.Events = {}),
                    l = /\s+/,
                    c = function (t, e, n, s, r) {
                      var a,
                        o = 0;
                      if (n && 'object' == typeof n) {
                        void 0 !== s &&
                          'context' in r &&
                          void 0 === r.context &&
                          (r.context = s);
                        for (a = i.keys(n); o < a.length; o++)
                          e = c(t, e, a[o], n[a[o]], r);
                      } else if (n && l.test(n))
                        for (a = n.split(l); o < a.length; o++) e = t(e, a[o], s, r);
                      else e = t(e, n, s, r);
                      return e;
                    };
                  (o.on = function (t, e, i) {
                    if (
                      ((this._events = c(u, this._events || {}, t, e, {
                        context: i,
                        ctx: this,
                        listening: a,
                      })),
                      a)
                    ) {
                      var n = this._listeners || (this._listeners = {});
                      (n[a.id] = a), (a.interop = !1);
                    }
                    return this;
                  }),
                    (o.listenTo = function (t, e, n) {
                      if (!t) return this;
                      var s = t._listenId || (t._listenId = i.uniqueId('l')),
                        r = this._listeningTo || (this._listeningTo = {}),
                        o = (a = r[s]);
                      o ||
                        (this._listenId || (this._listenId = i.uniqueId('l')),
                        (o = a = r[s] = new m(this, t)));
                      var l = d(t, e, n, this);
                      if (((a = void 0), l)) throw l;
                      return o.interop && o.on(e, n), this;
                    });
                  var u = function (t, e, i, n) {
                      if (i) {
                        var s = t[e] || (t[e] = []),
                          r = n.context,
                          a = n.ctx,
                          o = n.listening;
                        o && o.count++,
                          s.push({callback: i, context: r, ctx: r || a, listening: o});
                      }
                      return t;
                    },
                    d = function (t, e, i, n) {
                      try {
                        t.on(e, i, n);
                      } catch (t) {
                        return t;
                      }
                    };
                  (o.off = function (t, e, i) {
                    return this._events
                      ? ((this._events = c(h, this._events, t, e, {
                          context: i,
                          listeners: this._listeners,
                        })),
                        this)
                      : this;
                  }),
                    (o.stopListening = function (t, e, n) {
                      var s = this._listeningTo;
                      if (!s) return this;
                      for (
                        var r = t ? [t._listenId] : i.keys(s), a = 0;
                        a < r.length;
                        a++
                      ) {
                        var o = s[r[a]];
                        if (!o) break;
                        o.obj.off(e, n, this), o.interop && o.off(e, n);
                      }
                      return i.isEmpty(s) && (this._listeningTo = void 0), this;
                    });
                  var h = function (t, e, n, s) {
                    if (t) {
                      var r,
                        a = s.context,
                        o = s.listeners,
                        l = 0;
                      if (e || a || n) {
                        for (r = e ? [e] : i.keys(t); l < r.length; l++) {
                          e = r[l];
                          var c = t[e];
                          if (!c) break;
                          for (var u = [], d = 0; d < c.length; d++) {
                            var h = c[d];
                            if (
                              (n && n !== h.callback && n !== h.callback._callback) ||
                              (a && a !== h.context)
                            )
                              u.push(h);
                            else {
                              var p = h.listening;
                              p && p.off(e, n);
                            }
                          }
                          u.length ? (t[e] = u) : delete t[e];
                        }
                        return t;
                      }
                      for (r = i.keys(o); l < r.length; l++) o[r[l]].cleanup();
                    }
                  };
                  (o.once = function (t, e, i) {
                    var n = c(p, {}, t, e, this.off.bind(this));
                    return (
                      'string' == typeof t && null == i && (e = void 0), this.on(n, e, i)
                    );
                  }),
                    (o.listenToOnce = function (t, e, i) {
                      var n = c(p, {}, e, i, this.stopListening.bind(this, t));
                      return this.listenTo(t, n);
                    });
                  var p = function (t, e, n, s) {
                    if (n) {
                      var r = (t[e] = i.once(function () {
                        s(e, r), n.apply(this, arguments);
                      }));
                      r._callback = n;
                    }
                    return t;
                  };
                  o.trigger = function (t) {
                    if (!this._events) return this;
                    for (
                      var e = Math.max(0, arguments.length - 1), i = Array(e), n = 0;
                      n < e;
                      n++
                    )
                      i[n] = arguments[n + 1];
                    return c(f, this._events, t, void 0, i), this;
                  };
                  var f = function (t, e, i, n) {
                      if (t) {
                        var s = t[e],
                          r = t.all;
                        s && r && (r = r.slice()), s && g(s, n), r && g(r, [e].concat(n));
                      }
                      return t;
                    },
                    g = function (t, e) {
                      var i,
                        n = -1,
                        s = t.length,
                        r = e[0],
                        a = e[1],
                        o = e[2];
                      switch (e.length) {
                        case 0:
                          for (; ++n < s; ) (i = t[n]).callback.call(i.ctx);
                          return;
                        case 1:
                          for (; ++n < s; ) (i = t[n]).callback.call(i.ctx, r);
                          return;
                        case 2:
                          for (; ++n < s; ) (i = t[n]).callback.call(i.ctx, r, a);
                          return;
                        case 3:
                          for (; ++n < s; ) (i = t[n]).callback.call(i.ctx, r, a, o);
                          return;
                        default:
                          for (; ++n < s; ) (i = t[n]).callback.apply(i.ctx, e);
                          return;
                      }
                    },
                    m = function (t, e) {
                      (this.id = t._listenId),
                        (this.listener = t),
                        (this.obj = e),
                        (this.interop = !0),
                        (this.count = 0),
                        (this._events = void 0);
                    };
                  (m.prototype.on = o.on),
                    (m.prototype.off = function (t, e) {
                      var i;
                      this.interop
                        ? ((this._events = c(h, this._events, t, e, {
                            context: void 0,
                            listeners: void 0,
                          })),
                          (i = !this._events))
                        : (this.count--, (i = 0 === this.count)),
                        i && this.cleanup();
                    }),
                    (m.prototype.cleanup = function () {
                      delete this.listener._listeningTo[this.obj._listenId],
                        this.interop || delete this.obj._listeners[this.id];
                    }),
                    (o.bind = o.on),
                    (o.unbind = o.off),
                    i.extend(e, o);
                  var v = (e.Model = function (t, e) {
                    var n = t || {};
                    e || (e = {}),
                      this.preinitialize.apply(this, arguments),
                      (this.cid = i.uniqueId(this.cidPrefix)),
                      (this.attributes = {}),
                      e.collection && (this.collection = e.collection),
                      e.parse && (n = this.parse(n, e) || {});
                    var s = i.result(this, 'defaults');
                    (n = i.defaults(i.extend({}, s, n), s)),
                      this.set(n, e),
                      (this.changed = {}),
                      this.initialize.apply(this, arguments);
                  });
                  i.extend(v.prototype, o, {
                    changed: null,
                    validationError: null,
                    idAttribute: 'id',
                    cidPrefix: 'c',
                    preinitialize: function () {},
                    initialize: function () {},
                    toJSON: function (t) {
                      return i.clone(this.attributes);
                    },
                    sync: function () {
                      return e.sync.apply(this, arguments);
                    },
                    get: function (t) {
                      return this.attributes[t];
                    },
                    escape: function (t) {
                      return i.escape(this.get(t));
                    },
                    has: function (t) {
                      return null != this.get(t);
                    },
                    matches: function (t) {
                      return !!i.iteratee(t, this)(this.attributes);
                    },
                    set: function (t, e, n) {
                      if (null == t) return this;
                      var s;
                      if (
                        ('object' == typeof t ? ((s = t), (n = e)) : ((s = {})[t] = e),
                        n || (n = {}),
                        !this._validate(s, n))
                      )
                        return !1;
                      var r = n.unset,
                        a = n.silent,
                        o = [],
                        l = this._changing;
                      (this._changing = !0),
                        l ||
                          ((this._previousAttributes = i.clone(this.attributes)),
                          (this.changed = {}));
                      var c = this.attributes,
                        u = this.changed,
                        d = this._previousAttributes;
                      for (var h in s)
                        (e = s[h]),
                          i.isEqual(c[h], e) || o.push(h),
                          i.isEqual(d[h], e) ? delete u[h] : (u[h] = e),
                          r ? delete c[h] : (c[h] = e);
                      if (
                        (this.idAttribute in s && (this.id = this.get(this.idAttribute)),
                        !a)
                      ) {
                        o.length && (this._pending = n);
                        for (var p = 0; p < o.length; p++)
                          this.trigger('change:' + o[p], this, c[o[p]], n);
                      }
                      if (l) return this;
                      if (!a)
                        for (; this._pending; )
                          (n = this._pending),
                            (this._pending = !1),
                            this.trigger('change', this, n);
                      return (this._pending = !1), (this._changing = !1), this;
                    },
                    unset: function (t, e) {
                      return this.set(t, void 0, i.extend({}, e, {unset: !0}));
                    },
                    clear: function (t) {
                      var e = {};
                      for (var n in this.attributes) e[n] = void 0;
                      return this.set(e, i.extend({}, t, {unset: !0}));
                    },
                    hasChanged: function (t) {
                      return null == t
                        ? !i.isEmpty(this.changed)
                        : i.has(this.changed, t);
                    },
                    changedAttributes: function (t) {
                      if (!t) return !!this.hasChanged() && i.clone(this.changed);
                      var e,
                        n = this._changing ? this._previousAttributes : this.attributes,
                        s = {};
                      for (var r in t) {
                        var a = t[r];
                        i.isEqual(n[r], a) || ((s[r] = a), (e = !0));
                      }
                      return !!e && s;
                    },
                    previous: function (t) {
                      return null != t && this._previousAttributes
                        ? this._previousAttributes[t]
                        : null;
                    },
                    previousAttributes: function () {
                      return i.clone(this._previousAttributes);
                    },
                    fetch: function (t) {
                      var e = this,
                        n = (t = i.extend({parse: !0}, t)).success;
                      return (
                        (t.success = function (i) {
                          var s = t.parse ? e.parse(i, t) : i;
                          if (!e.set(s, t)) return !1;
                          n && n.call(t.context, e, i, t), e.trigger('sync', e, i, t);
                        }),
                        V(this, t),
                        this.sync('read', this, t)
                      );
                    },
                    save: function (t, e, n) {
                      var s;
                      null == t || 'object' == typeof t
                        ? ((s = t), (n = e))
                        : ((s = {})[t] = e);
                      var r = (n = i.extend({validate: !0, parse: !0}, n)).wait;
                      if (s && !r) {
                        if (!this.set(s, n)) return !1;
                      } else if (!this._validate(s, n)) return !1;
                      var a = this,
                        o = n.success,
                        l = this.attributes;
                      (n.success = function (t) {
                        a.attributes = l;
                        var e = n.parse ? a.parse(t, n) : t;
                        if ((r && (e = i.extend({}, s, e)), e && !a.set(e, n))) return !1;
                        o && o.call(n.context, a, t, n), a.trigger('sync', a, t, n);
                      }),
                        V(this, n),
                        s && r && (this.attributes = i.extend({}, l, s));
                      var c = this.isNew() ? 'create' : n.patch ? 'patch' : 'update';
                      'patch' !== c || n.attrs || (n.attrs = s);
                      var u = this.sync(c, this, n);
                      return (this.attributes = l), u;
                    },
                    destroy: function (t) {
                      var e = this,
                        n = (t = t ? i.clone(t) : {}).success,
                        s = t.wait,
                        r = function () {
                          e.stopListening(), e.trigger('destroy', e, e.collection, t);
                        };
                      t.success = function (i) {
                        s && r(),
                          n && n.call(t.context, e, i, t),
                          e.isNew() || e.trigger('sync', e, i, t);
                      };
                      var a = !1;
                      return (
                        this.isNew()
                          ? i.defer(t.success)
                          : (V(this, t), (a = this.sync('delete', this, t))),
                        s || r(),
                        a
                      );
                    },
                    url: function () {
                      var t =
                        i.result(this, 'urlRoot') ||
                        i.result(this.collection, 'url') ||
                        U();
                      if (this.isNew()) return t;
                      var e = this.get(this.idAttribute);
                      return t.replace(/[^\/]$/, '$&/') + encodeURIComponent(e);
                    },
                    parse: function (t, e) {
                      return t;
                    },
                    clone: function () {
                      return new this.constructor(this.attributes);
                    },
                    isNew: function () {
                      return !this.has(this.idAttribute);
                    },
                    isValid: function (t) {
                      return this._validate({}, i.extend({}, t, {validate: !0}));
                    },
                    _validate: function (t, e) {
                      if (!e.validate || !this.validate) return !0;
                      t = i.extend({}, this.attributes, t);
                      var n = (this.validationError = this.validate(t, e) || null);
                      return (
                        !n ||
                        (this.trigger(
                          'invalid',
                          this,
                          n,
                          i.extend(e, {validationError: n})
                        ),
                        !1)
                      );
                    },
                  });
                  var b = (e.Collection = function (t, e) {
                      e || (e = {}),
                        this.preinitialize.apply(this, arguments),
                        e.model && (this.model = e.model),
                        void 0 !== e.comparator && (this.comparator = e.comparator),
                        this._reset(),
                        this.initialize.apply(this, arguments),
                        t && this.reset(t, i.extend({silent: !0}, e));
                    }),
                    y = {add: !0, remove: !0, merge: !0},
                    w = {add: !0, remove: !1},
                    _ = function (t, e, i) {
                      i = Math.min(Math.max(i, 0), t.length);
                      var n,
                        s = Array(t.length - i),
                        r = e.length;
                      for (n = 0; n < s.length; n++) s[n] = t[n + i];
                      for (n = 0; n < r; n++) t[n + i] = e[n];
                      for (n = 0; n < s.length; n++) t[n + r + i] = s[n];
                    };
                  i.extend(b.prototype, o, {
                    model: v,
                    preinitialize: function () {},
                    initialize: function () {},
                    toJSON: function (t) {
                      return this.map(function (e) {
                        return e.toJSON(t);
                      });
                    },
                    sync: function () {
                      return e.sync.apply(this, arguments);
                    },
                    add: function (t, e) {
                      return this.set(t, i.extend({merge: !1}, e, w));
                    },
                    remove: function (t, e) {
                      e = i.extend({}, e);
                      var n = !i.isArray(t);
                      t = n ? [t] : t.slice();
                      var s = this._removeModels(t, e);
                      return (
                        !e.silent &&
                          s.length &&
                          ((e.changes = {added: [], merged: [], removed: s}),
                          this.trigger('update', this, e)),
                        n ? s[0] : s
                      );
                    },
                    set: function (t, e) {
                      if (null != t) {
                        (e = i.extend({}, y, e)).parse &&
                          !this._isModel(t) &&
                          (t = this.parse(t, e) || []);
                        var n = !i.isArray(t);
                        t = n ? [t] : t.slice();
                        var s = e.at;
                        null != s && (s = +s),
                          s > this.length && (s = this.length),
                          s < 0 && (s += this.length + 1);
                        var r,
                          a,
                          o = [],
                          l = [],
                          c = [],
                          u = [],
                          d = {},
                          h = e.add,
                          p = e.merge,
                          f = e.remove,
                          g = !1,
                          m = this.comparator && null == s && !1 !== e.sort,
                          v = i.isString(this.comparator) ? this.comparator : null;
                        for (a = 0; a < t.length; a++) {
                          r = t[a];
                          var b = this.get(r);
                          if (b) {
                            if (p && r !== b) {
                              var w = this._isModel(r) ? r.attributes : r;
                              e.parse && (w = b.parse(w, e)),
                                b.set(w, e),
                                c.push(b),
                                m && !g && (g = b.hasChanged(v));
                            }
                            d[b.cid] || ((d[b.cid] = !0), o.push(b)), (t[a] = b);
                          } else
                            h &&
                              (r = t[a] = this._prepareModel(r, e)) &&
                              (l.push(r),
                              this._addReference(r, e),
                              (d[r.cid] = !0),
                              o.push(r));
                        }
                        if (f) {
                          for (a = 0; a < this.length; a++)
                            (r = this.models[a]), d[r.cid] || u.push(r);
                          u.length && this._removeModels(u, e);
                        }
                        var x = !1,
                          k = !m && h && f;
                        if (
                          (o.length && k
                            ? ((x =
                                this.length !== o.length ||
                                i.some(this.models, function (t, e) {
                                  return t !== o[e];
                                })),
                              (this.models.length = 0),
                              _(this.models, o, 0),
                              (this.length = this.models.length))
                            : l.length &&
                              (m && (g = !0),
                              _(this.models, l, null == s ? this.length : s),
                              (this.length = this.models.length)),
                          g && this.sort({silent: !0}),
                          !e.silent)
                        ) {
                          for (a = 0; a < l.length; a++)
                            null != s && (e.index = s + a),
                              (r = l[a]).trigger('add', r, this, e);
                          (g || x) && this.trigger('sort', this, e),
                            (l.length || u.length || c.length) &&
                              ((e.changes = {added: l, removed: u, merged: c}),
                              this.trigger('update', this, e));
                        }
                        return n ? t[0] : t;
                      }
                    },
                    reset: function (t, e) {
                      e = e ? i.clone(e) : {};
                      for (var n = 0; n < this.models.length; n++)
                        this._removeReference(this.models[n], e);
                      return (
                        (e.previousModels = this.models),
                        this._reset(),
                        (t = this.add(t, i.extend({silent: !0}, e))),
                        e.silent || this.trigger('reset', this, e),
                        t
                      );
                    },
                    push: function (t, e) {
                      return this.add(t, i.extend({at: this.length}, e));
                    },
                    pop: function (t) {
                      var e = this.at(this.length - 1);
                      return this.remove(e, t);
                    },
                    unshift: function (t, e) {
                      return this.add(t, i.extend({at: 0}, e));
                    },
                    shift: function (t) {
                      var e = this.at(0);
                      return this.remove(e, t);
                    },
                    slice: function () {
                      return r.apply(this.models, arguments);
                    },
                    get: function (t) {
                      if (null != t)
                        return (
                          this._byId[t] ||
                          this._byId[this.modelId(this._isModel(t) ? t.attributes : t)] ||
                          (t.cid && this._byId[t.cid])
                        );
                    },
                    has: function (t) {
                      return null != this.get(t);
                    },
                    at: function (t) {
                      return t < 0 && (t += this.length), this.models[t];
                    },
                    where: function (t, e) {
                      return this[e ? 'find' : 'filter'](t);
                    },
                    findWhere: function (t) {
                      return this.where(t, !0);
                    },
                    sort: function (t) {
                      var e = this.comparator;
                      if (!e) throw new Error('Cannot sort a set without a comparator');
                      t || (t = {});
                      var n = e.length;
                      return (
                        i.isFunction(e) && (e = e.bind(this)),
                        1 === n || i.isString(e)
                          ? (this.models = this.sortBy(e))
                          : this.models.sort(e),
                        t.silent || this.trigger('sort', this, t),
                        this
                      );
                    },
                    pluck: function (t) {
                      return this.map(t + '');
                    },
                    fetch: function (t) {
                      var e = (t = i.extend({parse: !0}, t)).success,
                        n = this;
                      return (
                        (t.success = function (i) {
                          var s = t.reset ? 'reset' : 'set';
                          n[s](i, t),
                            e && e.call(t.context, n, i, t),
                            n.trigger('sync', n, i, t);
                        }),
                        V(this, t),
                        this.sync('read', this, t)
                      );
                    },
                    create: function (t, e) {
                      var n = (e = e ? i.clone(e) : {}).wait;
                      if (!(t = this._prepareModel(t, e))) return !1;
                      n || this.add(t, e);
                      var s = this,
                        r = e.success;
                      return (
                        (e.success = function (t, e, i) {
                          n && s.add(t, i), r && r.call(i.context, t, e, i);
                        }),
                        t.save(null, e),
                        t
                      );
                    },
                    parse: function (t, e) {
                      return t;
                    },
                    clone: function () {
                      return new this.constructor(this.models, {
                        model: this.model,
                        comparator: this.comparator,
                      });
                    },
                    modelId: function (t) {
                      return t[this.model.prototype.idAttribute || 'id'];
                    },
                    values: function () {
                      return new k(this, C);
                    },
                    keys: function () {
                      return new k(this, E);
                    },
                    entries: function () {
                      return new k(this, T);
                    },
                    _reset: function () {
                      (this.length = 0), (this.models = []), (this._byId = {});
                    },
                    _prepareModel: function (t, e) {
                      if (this._isModel(t))
                        return t.collection || (t.collection = this), t;
                      (e = e ? i.clone(e) : {}).collection = this;
                      var n = new this.model(t, e);
                      return n.validationError
                        ? (this.trigger('invalid', this, n.validationError, e), !1)
                        : n;
                    },
                    _removeModels: function (t, e) {
                      for (var i = [], n = 0; n < t.length; n++) {
                        var s = this.get(t[n]);
                        if (s) {
                          var r = this.indexOf(s);
                          this.models.splice(r, 1),
                            this.length--,
                            delete this._byId[s.cid];
                          var a = this.modelId(s.attributes);
                          null != a && delete this._byId[a],
                            e.silent || ((e.index = r), s.trigger('remove', s, this, e)),
                            i.push(s),
                            this._removeReference(s, e);
                        }
                      }
                      return i;
                    },
                    _isModel: function (t) {
                      return t instanceof v;
                    },
                    _addReference: function (t, e) {
                      this._byId[t.cid] = t;
                      var i = this.modelId(t.attributes);
                      null != i && (this._byId[i] = t),
                        t.on('all', this._onModelEvent, this);
                    },
                    _removeReference: function (t, e) {
                      delete this._byId[t.cid];
                      var i = this.modelId(t.attributes);
                      null != i && delete this._byId[i],
                        this === t.collection && delete t.collection,
                        t.off('all', this._onModelEvent, this);
                    },
                    _onModelEvent: function (t, e, i, n) {
                      if (e) {
                        if (('add' === t || 'remove' === t) && i !== this) return;
                        if (('destroy' === t && this.remove(e, n), 'change' === t)) {
                          var s = this.modelId(e.previousAttributes()),
                            r = this.modelId(e.attributes);
                          s !== r &&
                            (null != s && delete this._byId[s],
                            null != r && (this._byId[r] = e));
                        }
                      }
                      this.trigger.apply(this, arguments);
                    },
                  });
                  var x = 'function' == typeof Symbol && Symbol.iterator;
                  x && (b.prototype[x] = b.prototype.values);
                  var k = function (t, e) {
                      (this._collection = t), (this._kind = e), (this._index = 0);
                    },
                    C = 1,
                    E = 2,
                    T = 3;
                  x &&
                    (k.prototype[x] = function () {
                      return this;
                    });
                  k.prototype.next = function () {
                    if (this._collection) {
                      if (this._index < this._collection.length) {
                        var t,
                          e = this._collection.at(this._index);
                        if ((this._index++, this._kind === C)) t = e;
                        else {
                          var i = this._collection.modelId(e.attributes);
                          t = this._kind === E ? i : [i, e];
                        }
                        return {value: t, done: !1};
                      }
                      this._collection = void 0;
                    }
                    return {value: void 0, done: !0};
                  };
                  var D = (e.View = function (t) {
                      (this.cid = i.uniqueId('view')),
                        this.preinitialize.apply(this, arguments),
                        i.extend(this, i.pick(t, A)),
                        this._ensureElement(),
                        this.initialize.apply(this, arguments);
                    }),
                    S = /^(\S+)\s*(.*)$/,
                    A = [
                      'model',
                      'collection',
                      'el',
                      'id',
                      'attributes',
                      'className',
                      'tagName',
                      'events',
                    ];
                  i.extend(D.prototype, o, {
                    tagName: 'div',
                    $: function (t) {
                      return this.$el.find(t);
                    },
                    preinitialize: function () {},
                    initialize: function () {},
                    render: function () {
                      return this;
                    },
                    remove: function () {
                      return this._removeElement(), this.stopListening(), this;
                    },
                    _removeElement: function () {
                      this.$el.remove();
                    },
                    setElement: function (t) {
                      return (
                        this.undelegateEvents(),
                        this._setElement(t),
                        this.delegateEvents(),
                        this
                      );
                    },
                    _setElement: function (t) {
                      (this.$el = t instanceof e.$ ? t : e.$(t)), (this.el = this.$el[0]);
                    },
                    delegateEvents: function (t) {
                      if ((t || (t = i.result(this, 'events')), !t)) return this;
                      for (var e in (this.undelegateEvents(), t)) {
                        var n = t[e];
                        if ((i.isFunction(n) || (n = this[n]), n)) {
                          var s = e.match(S);
                          this.delegate(s[1], s[2], n.bind(this));
                        }
                      }
                      return this;
                    },
                    delegate: function (t, e, i) {
                      return this.$el.on(t + '.delegateEvents' + this.cid, e, i), this;
                    },
                    undelegateEvents: function () {
                      return this.$el && this.$el.off('.delegateEvents' + this.cid), this;
                    },
                    undelegate: function (t, e, i) {
                      return this.$el.off(t + '.delegateEvents' + this.cid, e, i), this;
                    },
                    _createElement: function (t) {
                      return document.createElement(t);
                    },
                    _ensureElement: function () {
                      if (this.el) this.setElement(i.result(this, 'el'));
                      else {
                        var t = i.extend({}, i.result(this, 'attributes'));
                        this.id && (t.id = i.result(this, 'id')),
                          this.className && (t.class = i.result(this, 'className')),
                          this.setElement(this._createElement(i.result(this, 'tagName'))),
                          this._setAttributes(t);
                      }
                    },
                    _setAttributes: function (t) {
                      this.$el.attr(t);
                    },
                  });
                  var I = function (t, e, n, s) {
                      i.each(n, function (i, n) {
                        e[n] &&
                          (t.prototype[n] = (function (t, e, i, n) {
                            switch (e) {
                              case 1:
                                return function () {
                                  return t[i](this[n]);
                                };
                              case 2:
                                return function (e) {
                                  return t[i](this[n], e);
                                };
                              case 3:
                                return function (e, s) {
                                  return t[i](this[n], O(e, this), s);
                                };
                              case 4:
                                return function (e, s, r) {
                                  return t[i](this[n], O(e, this), s, r);
                                };
                              default:
                                return function () {
                                  var e = r.call(arguments);
                                  return e.unshift(this[n]), t[i].apply(t, e);
                                };
                            }
                          })(e, i, n, s));
                      });
                    },
                    O = function (t, e) {
                      return i.isFunction(t)
                        ? t
                        : i.isObject(t) && !e._isModel(t)
                        ? N(t)
                        : i.isString(t)
                        ? function (e) {
                            return e.get(t);
                          }
                        : t;
                    },
                    N = function (t) {
                      var e = i.matches(t);
                      return function (t) {
                        return e(t.attributes);
                      };
                    };
                  i.each(
                    [
                      [
                        b,
                        {
                          forEach: 3,
                          each: 3,
                          map: 3,
                          collect: 3,
                          reduce: 0,
                          foldl: 0,
                          inject: 0,
                          reduceRight: 0,
                          foldr: 0,
                          find: 3,
                          detect: 3,
                          filter: 3,
                          select: 3,
                          reject: 3,
                          every: 3,
                          all: 3,
                          some: 3,
                          any: 3,
                          include: 3,
                          includes: 3,
                          contains: 3,
                          invoke: 0,
                          max: 3,
                          min: 3,
                          toArray: 1,
                          size: 1,
                          first: 3,
                          head: 3,
                          take: 3,
                          initial: 3,
                          rest: 3,
                          tail: 3,
                          drop: 3,
                          last: 3,
                          without: 0,
                          difference: 0,
                          indexOf: 3,
                          shuffle: 1,
                          lastIndexOf: 3,
                          isEmpty: 1,
                          chain: 1,
                          sample: 3,
                          partition: 3,
                          groupBy: 3,
                          countBy: 3,
                          sortBy: 3,
                          indexBy: 3,
                          findIndex: 3,
                          findLastIndex: 3,
                        },
                        'models',
                      ],
                      [
                        v,
                        {
                          keys: 1,
                          values: 1,
                          pairs: 1,
                          invert: 1,
                          pick: 0,
                          omit: 0,
                          chain: 1,
                          isEmpty: 1,
                        },
                        'attributes',
                      ],
                    ],
                    function (t) {
                      var e = t[0],
                        n = t[1],
                        s = t[2];
                      (e.mixin = function (t) {
                        var n = i.reduce(
                          i.functions(t),
                          function (t, e) {
                            return (t[e] = 0), t;
                          },
                          {}
                        );
                        I(e, t, n, s);
                      }),
                        I(e, i, n, s);
                    }
                  ),
                    (e.sync = function (t, n, s) {
                      var r = M[t];
                      i.defaults(s || (s = {}), {
                        emulateHTTP: e.emulateHTTP,
                        emulateJSON: e.emulateJSON,
                      });
                      var a = {type: r, dataType: 'json'};
                      if (
                        (s.url || (a.url = i.result(n, 'url') || U()),
                        null != s.data ||
                          !n ||
                          ('create' !== t && 'update' !== t && 'patch' !== t) ||
                          ((a.contentType = 'application/json'),
                          (a.data = JSON.stringify(s.attrs || n.toJSON(s)))),
                        s.emulateJSON &&
                          ((a.contentType = 'application/x-www-form-urlencoded'),
                          (a.data = a.data ? {model: a.data} : {})),
                        s.emulateHTTP && ('PUT' === r || 'DELETE' === r || 'PATCH' === r))
                      ) {
                        (a.type = 'POST'), s.emulateJSON && (a.data._method = r);
                        var o = s.beforeSend;
                        s.beforeSend = function (t) {
                          if ((t.setRequestHeader('X-HTTP-Method-Override', r), o))
                            return o.apply(this, arguments);
                        };
                      }
                      'GET' === a.type || s.emulateJSON || (a.processData = !1);
                      var l = s.error;
                      s.error = function (t, e, i) {
                        (s.textStatus = e),
                          (s.errorThrown = i),
                          l && l.call(s.context, t, e, i);
                      };
                      var c = (s.xhr = e.ajax(i.extend(a, s)));
                      return n.trigger('request', n, c, s), c;
                    });
                  var M = {
                    create: 'POST',
                    update: 'PUT',
                    patch: 'PATCH',
                    delete: 'DELETE',
                    read: 'GET',
                  };
                  e.ajax = function () {
                    return e.$.ajax.apply(e.$, arguments);
                  };
                  var P = (e.Router = function (t) {
                      t || (t = {}),
                        this.preinitialize.apply(this, arguments),
                        t.routes && (this.routes = t.routes),
                        this._bindRoutes(),
                        this.initialize.apply(this, arguments);
                    }),
                    L = /\((.*?)\)/g,
                    R = /(\(\?)?:\w+/g,
                    $ = /\*\w+/g,
                    j = /[\-{}\[\]+?.,\\\^$|#\s]/g;
                  i.extend(P.prototype, o, {
                    preinitialize: function () {},
                    initialize: function () {},
                    route: function (t, n, s) {
                      i.isRegExp(t) || (t = this._routeToRegExp(t)),
                        i.isFunction(n) && ((s = n), (n = '')),
                        s || (s = this[n]);
                      var r = this;
                      return (
                        e.history.route(t, function (i) {
                          var a = r._extractParameters(t, i);
                          !1 !== r.execute(s, a, n) &&
                            (r.trigger.apply(r, ['route:' + n].concat(a)),
                            r.trigger('route', n, a),
                            e.history.trigger('route', r, n, a));
                        }),
                        this
                      );
                    },
                    execute: function (t, e, i) {
                      t && t.apply(this, e);
                    },
                    navigate: function (t, i) {
                      return e.history.navigate(t, i), this;
                    },
                    _bindRoutes: function () {
                      if (this.routes) {
                        this.routes = i.result(this, 'routes');
                        for (var t, e = i.keys(this.routes); null != (t = e.pop()); )
                          this.route(t, this.routes[t]);
                      }
                    },
                    _routeToRegExp: function (t) {
                      return (
                        (t = t
                          .replace(j, '\\$&')
                          .replace(L, '(?:$1)?')
                          .replace(R, function (t, e) {
                            return e ? t : '([^/?]+)';
                          })
                          .replace($, '([^?]*?)')),
                        new RegExp('^' + t + '(?:\\?([\\s\\S]*))?$')
                      );
                    },
                    _extractParameters: function (t, e) {
                      var n = t.exec(e).slice(1);
                      return i.map(n, function (t, e) {
                        return e === n.length - 1
                          ? t || null
                          : t
                          ? decodeURIComponent(t)
                          : null;
                      });
                    },
                  });
                  var F = (e.History = function () {
                      (this.handlers = []),
                        (this.checkUrl = this.checkUrl.bind(this)),
                        'undefined' != typeof window &&
                          ((this.location = window.location),
                          (this.history = window.history));
                    }),
                    H = /^[#\/]|\s+$/g,
                    B = /^\/+|\/+$/g,
                    W = /#.*$/;
                  (F.started = !1),
                    i.extend(F.prototype, o, {
                      interval: 50,
                      atRoot: function () {
                        var t = this.location.pathname.replace(/[^\/]$/, '$&/');
                        return t === this.root && !this.getSearch();
                      },
                      matchRoot: function () {
                        var t = this.decodeFragment(this.location.pathname),
                          e = t.slice(0, this.root.length - 1) + '/';
                        return e === this.root;
                      },
                      decodeFragment: function (t) {
                        return decodeURI(t.replace(/%25/g, '%2525'));
                      },
                      getSearch: function () {
                        var t = this.location.href.replace(/#.*/, '').match(/\?.+/);
                        return t ? t[0] : '';
                      },
                      getHash: function (t) {
                        var e = (t || this).location.href.match(/#(.*)$/);
                        return e ? e[1] : '';
                      },
                      getPath: function () {
                        var t = this.decodeFragment(
                          this.location.pathname + this.getSearch()
                        ).slice(this.root.length - 1);
                        return '/' === t.charAt(0) ? t.slice(1) : t;
                      },
                      getFragment: function (t) {
                        return (
                          null == t &&
                            (t =
                              this._usePushState || !this._wantsHashChange
                                ? this.getPath()
                                : this.getHash()),
                          t.replace(H, '')
                        );
                      },
                      start: function (t) {
                        if (F.started)
                          throw new Error('Backbone.history has already been started');
                        if (
                          ((F.started = !0),
                          (this.options = i.extend({root: '/'}, this.options, t)),
                          (this.root = this.options.root),
                          (this._wantsHashChange = !1 !== this.options.hashChange),
                          (this._hasHashChange =
                            'onhashchange' in window &&
                            (void 0 === document.documentMode ||
                              document.documentMode > 7)),
                          (this._useHashChange =
                            this._wantsHashChange && this._hasHashChange),
                          (this._wantsPushState = !!this.options.pushState),
                          (this._hasPushState = !(
                            !this.history || !this.history.pushState
                          )),
                          (this._usePushState =
                            this._wantsPushState && this._hasPushState),
                          (this.fragment = this.getFragment()),
                          (this.root = ('/' + this.root + '/').replace(B, '/')),
                          this._wantsHashChange && this._wantsPushState)
                        ) {
                          if (!this._hasPushState && !this.atRoot()) {
                            var e = this.root.slice(0, -1) || '/';
                            return this.location.replace(e + '#' + this.getPath()), !0;
                          }
                          this._hasPushState &&
                            this.atRoot() &&
                            this.navigate(this.getHash(), {replace: !0});
                        }
                        if (
                          !this._hasHashChange &&
                          this._wantsHashChange &&
                          !this._usePushState
                        ) {
                          (this.iframe = document.createElement('iframe')),
                            (this.iframe.src = 'javascript:0'),
                            (this.iframe.style.display = 'none'),
                            (this.iframe.tabIndex = -1);
                          var n = document.body,
                            s = n.insertBefore(this.iframe, n.firstChild).contentWindow;
                          s.document.open(),
                            s.document.close(),
                            (s.location.hash = '#' + this.fragment);
                        }
                        var r =
                          window.addEventListener ||
                          function (t, e) {
                            return attachEvent('on' + t, e);
                          };
                        if (
                          (this._usePushState
                            ? r('popstate', this.checkUrl, !1)
                            : this._useHashChange && !this.iframe
                            ? r('hashchange', this.checkUrl, !1)
                            : this._wantsHashChange &&
                              (this._checkUrlInterval = setInterval(
                                this.checkUrl,
                                this.interval
                              )),
                          !this.options.silent)
                        )
                          return this.loadUrl();
                      },
                      stop: function () {
                        var t =
                          window.removeEventListener ||
                          function (t, e) {
                            return detachEvent('on' + t, e);
                          };
                        this._usePushState
                          ? t('popstate', this.checkUrl, !1)
                          : this._useHashChange &&
                            !this.iframe &&
                            t('hashchange', this.checkUrl, !1),
                          this.iframe &&
                            (document.body.removeChild(this.iframe),
                            (this.iframe = null)),
                          this._checkUrlInterval && clearInterval(this._checkUrlInterval),
                          (F.started = !1);
                      },
                      route: function (t, e) {
                        this.handlers.unshift({route: t, callback: e});
                      },
                      checkUrl: function (t) {
                        var e = this.getFragment();
                        if (
                          (e === this.fragment &&
                            this.iframe &&
                            (e = this.getHash(this.iframe.contentWindow)),
                          e === this.fragment)
                        )
                          return !1;
                        this.iframe && this.navigate(e), this.loadUrl();
                      },
                      loadUrl: function (t) {
                        return (
                          !!this.matchRoot() &&
                          ((t = this.fragment = this.getFragment(t)),
                          i.some(this.handlers, function (e) {
                            if (e.route.test(t)) return e.callback(t), !0;
                          }))
                        );
                      },
                      navigate: function (t, e) {
                        if (!F.started) return !1;
                        (e && !0 !== e) || (e = {trigger: !!e}),
                          (t = this.getFragment(t || ''));
                        var i = this.root;
                        ('' !== t && '?' !== t.charAt(0)) || (i = i.slice(0, -1) || '/');
                        var n = i + t;
                        t = t.replace(W, '');
                        var s = this.decodeFragment(t);
                        if (this.fragment !== s) {
                          if (((this.fragment = s), this._usePushState))
                            this.history[e.replace ? 'replaceState' : 'pushState'](
                              {},
                              document.title,
                              n
                            );
                          else {
                            if (!this._wantsHashChange) return this.location.assign(n);
                            if (
                              (this._updateHash(this.location, t, e.replace),
                              this.iframe &&
                                t !== this.getHash(this.iframe.contentWindow))
                            ) {
                              var r = this.iframe.contentWindow;
                              e.replace || (r.document.open(), r.document.close()),
                                this._updateHash(r.location, t, e.replace);
                            }
                          }
                          return e.trigger ? this.loadUrl(t) : void 0;
                        }
                      },
                      _updateHash: function (t, e, i) {
                        if (i) {
                          var n = t.href.replace(/(javascript:|#).*$/, '');
                          t.replace(n + '#' + e);
                        } else t.hash = '#' + e;
                      },
                    }),
                    (e.history = new F());
                  v.extend =
                    b.extend =
                    P.extend =
                    D.extend =
                    F.extend =
                      function (t, e) {
                        var n,
                          s = this;
                        n =
                          t && i.has(t, 'constructor')
                            ? t.constructor
                            : function () {
                                return s.apply(this, arguments);
                              };
                        return (
                          i.extend(n, s, e),
                          (n.prototype = i.create(s.prototype, t)),
                          (n.prototype.constructor = n),
                          (n.__super__ = s.prototype),
                          n
                        );
                      };
                  var U = function () {
                      throw new Error('A "url" property or function must be specified');
                    },
                    V = function (t, e) {
                      var i = e.error;
                      e.error = function (n) {
                        i && i.call(e.context, t, n, e), t.trigger('error', t, n, e);
                      };
                    };
                  return e;
                })(o, i, t, e);
              }.apply(e, s)) || (t.exports = r);
        })();
      }.call(this, i(15)));
    },
    function (e, i) {
      e.exports = t;
    },
    function (t, e, i) {
      (function (e) {
        !(function (e, i) {
          t.exports = i();
        })(0, function () {
          var t =
              ('object' == typeof self && self.self === self && self) ||
              ('object' == typeof e && e.global === e && e) ||
              Function('return this')() ||
              {},
            i = Array.prototype,
            n = Object.prototype,
            s = 'undefined' != typeof Symbol ? Symbol.prototype : null,
            r = i.push,
            a = i.slice,
            o = n.toString,
            l = n.hasOwnProperty,
            c = Array.isArray,
            u = Object.keys,
            d = Object.create,
            h = t.isNaN,
            p = t.isFinite,
            f = function () {};
          function g(t) {
            return t instanceof g
              ? t
              : this instanceof g
              ? void (this._wrapped = t)
              : new g(t);
          }
          var m = (g.VERSION = '1.10.2');
          function v(t, e, i) {
            if (void 0 === e) return t;
            switch (null == i ? 3 : i) {
              case 1:
                return function (i) {
                  return t.call(e, i);
                };
              case 3:
                return function (i, n, s) {
                  return t.call(e, i, n, s);
                };
              case 4:
                return function (i, n, s, r) {
                  return t.call(e, i, n, s, r);
                };
            }
            return function () {
              return t.apply(e, arguments);
            };
          }
          function b(t, e, i) {
            return null == t ? se : Vt(t) ? v(t, e, i) : Wt(t) && !Bt(t) ? ae(t) : re(t);
          }
          function y(t, e) {
            return b(t, e, 1 / 0);
          }
          function w(t, e, i) {
            return g.iteratee !== y ? g.iteratee(t, e) : b(t, e, i);
          }
          function _(t, e) {
            return (
              (e = null == e ? t.length - 1 : +e),
              function () {
                for (
                  var i = Math.max(arguments.length - e, 0), n = Array(i), s = 0;
                  s < i;
                  s++
                )
                  n[s] = arguments[s + e];
                switch (e) {
                  case 0:
                    return t.call(this, n);
                  case 1:
                    return t.call(this, arguments[0], n);
                  case 2:
                    return t.call(this, arguments[0], arguments[1], n);
                }
                var r = Array(e + 1);
                for (s = 0; s < e; s++) r[s] = arguments[s];
                return (r[e] = n), t.apply(this, r);
              }
            );
          }
          function x(t) {
            if (!Wt(t)) return {};
            if (d) return d(t);
            f.prototype = t;
            var e = new f();
            return (f.prototype = null), e;
          }
          function k(t) {
            return function (e) {
              return null == e ? void 0 : e[t];
            };
          }
          function C(t, e) {
            return null != t && l.call(t, e);
          }
          function E(t, e) {
            for (var i = e.length, n = 0; n < i; n++) {
              if (null == t) return;
              t = t[e[n]];
            }
            return i ? t : void 0;
          }
          g.iteratee = y;
          var T = Math.pow(2, 53) - 1,
            D = k('length');
          function S(t) {
            var e = D(t);
            return 'number' == typeof e && e >= 0 && e <= T;
          }
          function A(t, e, i) {
            var n, s;
            if (((e = v(e, i)), S(t)))
              for (n = 0, s = t.length; n < s; n++) e(t[n], n, t);
            else {
              var r = Ct(t);
              for (n = 0, s = r.length; n < s; n++) e(t[r[n]], r[n], t);
            }
            return t;
          }
          function I(t, e, i) {
            e = w(e, i);
            for (
              var n = !S(t) && Ct(t), s = (n || t).length, r = Array(s), a = 0;
              a < s;
              a++
            ) {
              var o = n ? n[a] : a;
              r[a] = e(t[o], o, t);
            }
            return r;
          }
          function O(t) {
            return function (e, i, n, s) {
              var r = arguments.length >= 3;
              return (function (e, i, n, s) {
                var r = !S(e) && Ct(e),
                  a = (r || e).length,
                  o = t > 0 ? 0 : a - 1;
                for (s || ((n = e[r ? r[o] : o]), (o += t)); o >= 0 && o < a; o += t) {
                  var l = r ? r[o] : o;
                  n = i(n, e[l], l, e);
                }
                return n;
              })(e, v(i, s, 4), n, r);
            };
          }
          var N = O(1),
            M = O(-1);
          function P(t, e, i) {
            var n = (S(t) ? at : Nt)(t, e, i);
            if (void 0 !== n && -1 !== n) return t[n];
          }
          function L(t, e, i) {
            var n = [];
            return (
              (e = w(e, i)),
              A(t, function (t, i, s) {
                e(t, i, s) && n.push(t);
              }),
              n
            );
          }
          function R(t, e, i) {
            e = w(e, i);
            for (var n = !S(t) && Ct(t), s = (n || t).length, r = 0; r < s; r++) {
              var a = n ? n[r] : r;
              if (!e(t[a], a, t)) return !1;
            }
            return !0;
          }
          function $(t, e, i) {
            e = w(e, i);
            for (var n = !S(t) && Ct(t), s = (n || t).length, r = 0; r < s; r++) {
              var a = n ? n[r] : r;
              if (e(t[a], a, t)) return !0;
            }
            return !1;
          }
          function j(t, e, i, n) {
            return (
              S(t) || (t = Tt(t)),
              ('number' != typeof i || n) && (i = 0),
              ut(t, e, i) >= 0
            );
          }
          var F = _(function (t, e, i) {
            var n, s;
            return (
              Vt(e) ? (s = e) : Bt(e) && ((n = e.slice(0, -1)), (e = e[e.length - 1])),
              I(t, function (t) {
                var r = s;
                if (!r) {
                  if ((n && n.length && (t = E(t, n)), null == t)) return;
                  r = t[e];
                }
                return null == r ? r : r.apply(t, i);
              })
            );
          });
          function H(t, e) {
            return I(t, re(e));
          }
          function B(t, e, i) {
            var n,
              s,
              r = -1 / 0,
              a = -1 / 0;
            if (
              null == e ||
              ('number' == typeof e && 'object' != typeof t[0] && null != t)
            )
              for (var o = 0, l = (t = S(t) ? t : Tt(t)).length; o < l; o++)
                null != (n = t[o]) && n > r && (r = n);
            else
              (e = w(e, i)),
                A(t, function (t, i, n) {
                  ((s = e(t, i, n)) > a || (s === -1 / 0 && r === -1 / 0)) &&
                    ((r = t), (a = s));
                });
            return r;
          }
          function W(t, e, i) {
            if (null == e || i) return S(t) || (t = Tt(t)), t[oe(t.length - 1)];
            var n = S(t) ? $t(t) : Tt(t),
              s = D(n);
            e = Math.max(Math.min(e, s), 0);
            for (var r = s - 1, a = 0; a < e; a++) {
              var o = oe(a, r),
                l = n[a];
              (n[a] = n[o]), (n[o] = l);
            }
            return n.slice(0, e);
          }
          function U(t, e) {
            return function (i, n, s) {
              var r = e ? [[], []] : {};
              return (
                (n = w(n, s)),
                A(i, function (e, s) {
                  var a = n(e, s, i);
                  t(r, e, a);
                }),
                r
              );
            };
          }
          var V = U(function (t, e, i) {
              C(t, i) ? t[i].push(e) : (t[i] = [e]);
            }),
            z = U(function (t, e, i) {
              t[i] = e;
            }),
            q = U(function (t, e, i) {
              C(t, i) ? t[i]++ : (t[i] = 1);
            }),
            Y = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
          var K = U(function (t, e, i) {
            t[i ? 0 : 1].push(e);
          }, !0);
          function J(t, e, i) {
            return null == t || t.length < 1
              ? null == e
                ? void 0
                : []
              : null == e || i
              ? t[0]
              : G(t, t.length - e);
          }
          function G(t, e, i) {
            return a.call(t, 0, Math.max(0, t.length - (null == e || i ? 1 : e)));
          }
          function Q(t, e, i) {
            return a.call(t, null == e || i ? 1 : e);
          }
          function X(t, e, i, n) {
            for (var s = (n = n || []).length, r = 0, a = D(t); r < a; r++) {
              var o = t[r];
              if (S(o) && (Bt(o) || Ut(o)))
                if (e) for (var l = 0, c = o.length; l < c; ) n[s++] = o[l++];
                else X(o, e, i, n), (s = n.length);
              else i || (n[s++] = o);
            }
            return n;
          }
          var Z = _(function (t, e) {
            return it(t, e);
          });
          function tt(t, e, i, n) {
            ne(e) || ((n = i), (i = e), (e = !1)), null != i && (i = w(i, n));
            for (var s = [], r = [], a = 0, o = D(t); a < o; a++) {
              var l = t[a],
                c = i ? i(l, a, t) : l;
              e && !i
                ? ((a && r === c) || s.push(l), (r = c))
                : i
                ? j(r, c) || (r.push(c), s.push(l))
                : j(s, l) || s.push(l);
            }
            return s;
          }
          var et = _(function (t) {
            return tt(X(t, !0, !0));
          });
          var it = _(function (t, e) {
            return (
              (e = X(e, !0, !0)),
              L(t, function (t) {
                return !j(e, t);
              })
            );
          });
          function nt(t) {
            for (var e = (t && B(t, D).length) || 0, i = Array(e), n = 0; n < e; n++)
              i[n] = H(t, n);
            return i;
          }
          var st = _(nt);
          function rt(t) {
            return function (e, i, n) {
              i = w(i, n);
              for (var s = D(e), r = t > 0 ? 0 : s - 1; r >= 0 && r < s; r += t)
                if (i(e[r], r, e)) return r;
              return -1;
            };
          }
          var at = rt(1),
            ot = rt(-1);
          function lt(t, e, i, n) {
            for (var s = (i = w(i, n, 1))(e), r = 0, a = D(t); r < a; ) {
              var o = Math.floor((r + a) / 2);
              i(t[o]) < s ? (r = o + 1) : (a = o);
            }
            return r;
          }
          function ct(t, e, i) {
            return function (n, s, r) {
              var o = 0,
                l = D(n);
              if ('number' == typeof r)
                t > 0
                  ? (o = r >= 0 ? r : Math.max(r + l, o))
                  : (l = r >= 0 ? Math.min(r + 1, l) : r + l + 1);
              else if (i && r && l) return n[(r = i(n, s))] === s ? r : -1;
              if (s != s) return (r = e(a.call(n, o, l), ie)) >= 0 ? r + o : -1;
              for (r = t > 0 ? o : l - 1; r >= 0 && r < l; r += t)
                if (n[r] === s) return r;
              return -1;
            };
          }
          var ut = ct(1, at, lt),
            dt = ct(-1, ot);
          function ht(t, e, i, n, s) {
            if (!(n instanceof e)) return t.apply(i, s);
            var r = x(t.prototype),
              a = t.apply(r, s);
            return Wt(a) ? a : r;
          }
          var pt = _(function (t, e, i) {
              if (!Vt(t)) throw new TypeError('Bind must be called on a function');
              var n = _(function (s) {
                return ht(t, n, e, this, i.concat(s));
              });
              return n;
            }),
            ft = _(function (t, e) {
              var i = ft.placeholder,
                n = function () {
                  for (var s = 0, r = e.length, a = Array(r), o = 0; o < r; o++)
                    a[o] = e[o] === i ? arguments[s++] : e[o];
                  for (; s < arguments.length; ) a.push(arguments[s++]);
                  return ht(t, n, this, this, a);
                };
              return n;
            });
          ft.placeholder = g;
          var gt = _(function (t, e) {
            var i = (e = X(e, !1, !1)).length;
            if (i < 1) throw new Error('bindAll must be passed function names');
            for (; i--; ) {
              var n = e[i];
              t[n] = pt(t[n], t);
            }
          });
          var mt = _(function (t, e, i) {
              return setTimeout(function () {
                return t.apply(null, i);
              }, e);
            }),
            vt = ft(mt, g, 1);
          function bt(t) {
            return function () {
              return !t.apply(this, arguments);
            };
          }
          function yt(t, e) {
            var i;
            return function () {
              return --t > 0 && (i = e.apply(this, arguments)), t <= 1 && (e = null), i;
            };
          }
          var wt = ft(yt, 2),
            _t = !{toString: null}.propertyIsEnumerable('toString'),
            xt = [
              'valueOf',
              'isPrototypeOf',
              'toString',
              'propertyIsEnumerable',
              'hasOwnProperty',
              'toLocaleString',
            ];
          function kt(t, e) {
            var i = xt.length,
              s = t.constructor,
              r = (Vt(s) && s.prototype) || n,
              a = 'constructor';
            for (C(t, a) && !j(e, a) && e.push(a); i--; )
              (a = xt[i]) in t && t[a] !== r[a] && !j(e, a) && e.push(a);
          }
          function Ct(t) {
            if (!Wt(t)) return [];
            if (u) return u(t);
            var e = [];
            for (var i in t) C(t, i) && e.push(i);
            return _t && kt(t, e), e;
          }
          function Et(t) {
            if (!Wt(t)) return [];
            var e = [];
            for (var i in t) e.push(i);
            return _t && kt(t, e), e;
          }
          function Tt(t) {
            for (var e = Ct(t), i = e.length, n = Array(i), s = 0; s < i; s++)
              n[s] = t[e[s]];
            return n;
          }
          function Dt(t) {
            for (var e = {}, i = Ct(t), n = 0, s = i.length; n < s; n++)
              e[t[i[n]]] = i[n];
            return e;
          }
          function St(t) {
            var e = [];
            for (var i in t) Vt(t[i]) && e.push(i);
            return e.sort();
          }
          function At(t, e) {
            return function (i) {
              var n = arguments.length;
              if ((e && (i = Object(i)), n < 2 || null == i)) return i;
              for (var s = 1; s < n; s++)
                for (var r = arguments[s], a = t(r), o = a.length, l = 0; l < o; l++) {
                  var c = a[l];
                  (e && void 0 !== i[c]) || (i[c] = r[c]);
                }
              return i;
            };
          }
          var It = At(Et),
            Ot = At(Ct);
          function Nt(t, e, i) {
            e = w(e, i);
            for (var n, s = Ct(t), r = 0, a = s.length; r < a; r++)
              if (e(t[(n = s[r])], n, t)) return n;
          }
          function Mt(t, e, i) {
            return e in i;
          }
          var Pt = _(function (t, e) {
              var i = {},
                n = e[0];
              if (null == t) return i;
              Vt(n)
                ? (e.length > 1 && (n = v(n, e[1])), (e = Et(t)))
                : ((n = Mt), (e = X(e, !1, !1)), (t = Object(t)));
              for (var s = 0, r = e.length; s < r; s++) {
                var a = e[s],
                  o = t[a];
                n(o, a, t) && (i[a] = o);
              }
              return i;
            }),
            Lt = _(function (t, e) {
              var i,
                n = e[0];
              return (
                Vt(n)
                  ? ((n = bt(n)), e.length > 1 && (i = e[1]))
                  : ((e = I(X(e, !1, !1), String)),
                    (n = function (t, i) {
                      return !j(e, i);
                    })),
                Pt(t, n, i)
              );
            }),
            Rt = At(Et, !0);
          function $t(t) {
            return Wt(t) ? (Bt(t) ? t.slice() : It({}, t)) : t;
          }
          function jt(t, e) {
            var i = Ct(e),
              n = i.length;
            if (null == t) return !n;
            for (var s = Object(t), r = 0; r < n; r++) {
              var a = i[r];
              if (e[a] !== s[a] || !(a in s)) return !1;
            }
            return !0;
          }
          function Ft(t, e, i, n) {
            if (t === e) return 0 !== t || 1 / t == 1 / e;
            if (null == t || null == e) return !1;
            if (t != t) return e != e;
            var r = typeof t;
            return (
              ('function' === r || 'object' === r || 'object' == typeof e) &&
              (function (t, e, i, n) {
                t instanceof g && (t = t._wrapped);
                e instanceof g && (e = e._wrapped);
                var r = o.call(t);
                if (r !== o.call(e)) return !1;
                switch (r) {
                  case '[object RegExp]':
                  case '[object String]':
                    return '' + t == '' + e;
                  case '[object Number]':
                    return +t != +t ? +e != +e : 0 == +t ? 1 / +t == 1 / e : +t == +e;
                  case '[object Date]':
                  case '[object Boolean]':
                    return +t == +e;
                  case '[object Symbol]':
                    return s.valueOf.call(t) === s.valueOf.call(e);
                }
                var a = '[object Array]' === r;
                if (!a) {
                  if ('object' != typeof t || 'object' != typeof e) return !1;
                  var l = t.constructor,
                    c = e.constructor;
                  if (
                    l !== c &&
                    !(Vt(l) && l instanceof l && Vt(c) && c instanceof c) &&
                    'constructor' in t &&
                    'constructor' in e
                  )
                    return !1;
                }
                (i = i || []), (n = n || []);
                var u = i.length;
                for (; u--; ) if (i[u] === t) return n[u] === e;
                if ((i.push(t), n.push(e), a)) {
                  if ((u = t.length) !== e.length) return !1;
                  for (; u--; ) if (!Ft(t[u], e[u], i, n)) return !1;
                } else {
                  var d,
                    h = Ct(t);
                  if (((u = h.length), Ct(e).length !== u)) return !1;
                  for (; u--; )
                    if (((d = h[u]), !C(e, d) || !Ft(t[d], e[d], i, n))) return !1;
                }
                return i.pop(), n.pop(), !0;
              })(t, e, i, n)
            );
          }
          function Ht(t) {
            return function (e) {
              return o.call(e) === '[object ' + t + ']';
            };
          }
          var Bt = c || Ht('Array');
          function Wt(t) {
            var e = typeof t;
            return 'function' === e || ('object' === e && !!t);
          }
          var Ut = Ht('Arguments'),
            Vt = Ht('Function'),
            zt = Ht('String'),
            qt = Ht('Number'),
            Yt = Ht('Date'),
            Kt = Ht('RegExp'),
            Jt = Ht('Error'),
            Gt = Ht('Symbol'),
            Qt = Ht('Map'),
            Xt = Ht('WeakMap'),
            Zt = Ht('Set'),
            te = Ht('WeakSet');
          !(function () {
            Ut(arguments) ||
              (Ut = function (t) {
                return C(t, 'callee');
              });
          })();
          var ee = t.document && t.document.childNodes;
          function ie(t) {
            return qt(t) && h(t);
          }
          function ne(t) {
            return !0 === t || !1 === t || '[object Boolean]' === o.call(t);
          }
          function se(t) {
            return t;
          }
          function re(t) {
            return Bt(t)
              ? function (e) {
                  return E(e, t);
                }
              : k(t);
          }
          function ae(t) {
            return (
              (t = Ot({}, t)),
              function (e) {
                return jt(e, t);
              }
            );
          }
          function oe(t, e) {
            return (
              null == e && ((e = t), (t = 0)), t + Math.floor(Math.random() * (e - t + 1))
            );
          }
          'object' != typeof Int8Array &&
            'function' != typeof ee &&
            (Vt = function (t) {
              return 'function' == typeof t || !1;
            });
          var le =
              Date.now ||
              function () {
                return new Date().getTime();
              },
            ce = {
              '&': '&amp;',
              '<': '&lt;',
              '>': '&gt;',
              '"': '&quot;',
              "'": '&#x27;',
              '`': '&#x60;',
            },
            ue = Dt(ce);
          function de(t) {
            var e = function (e) {
                return t[e];
              },
              i = '(?:' + Ct(t).join('|') + ')',
              n = RegExp(i),
              s = RegExp(i, 'g');
            return function (t) {
              return (t = null == t ? '' : '' + t), n.test(t) ? t.replace(s, e) : t;
            };
          }
          var he = de(ce),
            pe = de(ue);
          var fe = 0;
          var ge = (g.templateSettings = {
              evaluate: /<%([\s\S]+?)%>/g,
              interpolate: /<%=([\s\S]+?)%>/g,
              escape: /<%-([\s\S]+?)%>/g,
            }),
            me = /(.)^/,
            ve = {
              "'": "'",
              '\\': '\\',
              '\r': 'r',
              '\n': 'n',
              '\u2028': 'u2028',
              '\u2029': 'u2029',
            },
            be = /\\|'|\r|\n|\u2028|\u2029/g,
            ye = function (t) {
              return '\\' + ve[t];
            };
          function we(t, e) {
            return t._chain ? g(e).chain() : e;
          }
          function _e(t) {
            return (
              A(St(t), function (e) {
                var i = (g[e] = t[e]);
                g.prototype[e] = function () {
                  var t = [this._wrapped];
                  return r.apply(t, arguments), we(this, i.apply(g, t));
                };
              }),
              g
            );
          }
          A(
            ['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'],
            function (t) {
              var e = i[t];
              g.prototype[t] = function () {
                var i = this._wrapped;
                return (
                  e.apply(i, arguments),
                  ('shift' !== t && 'splice' !== t) || 0 !== i.length || delete i[0],
                  we(this, i)
                );
              };
            }
          ),
            A(['concat', 'join', 'slice'], function (t) {
              var e = i[t];
              g.prototype[t] = function () {
                return we(this, e.apply(this._wrapped, arguments));
              };
            }),
            (g.prototype.value = function () {
              return this._wrapped;
            }),
            (g.prototype.valueOf = g.prototype.toJSON = g.prototype.value),
            (g.prototype.toString = function () {
              return String(this._wrapped);
            });
          var xe = _e({
            default: g,
            VERSION: m,
            iteratee: y,
            restArguments: _,
            each: A,
            forEach: A,
            map: I,
            collect: I,
            reduce: N,
            foldl: N,
            inject: N,
            reduceRight: M,
            foldr: M,
            find: P,
            detect: P,
            filter: L,
            select: L,
            reject: function (t, e, i) {
              return L(t, bt(w(e)), i);
            },
            every: R,
            all: R,
            some: $,
            any: $,
            contains: j,
            includes: j,
            include: j,
            invoke: F,
            pluck: H,
            where: function (t, e) {
              return L(t, ae(e));
            },
            findWhere: function (t, e) {
              return P(t, ae(e));
            },
            max: B,
            min: function (t, e, i) {
              var n,
                s,
                r = 1 / 0,
                a = 1 / 0;
              if (
                null == e ||
                ('number' == typeof e && 'object' != typeof t[0] && null != t)
              )
                for (var o = 0, l = (t = S(t) ? t : Tt(t)).length; o < l; o++)
                  null != (n = t[o]) && n < r && (r = n);
              else
                (e = w(e, i)),
                  A(t, function (t, i, n) {
                    ((s = e(t, i, n)) < a || (s === 1 / 0 && r === 1 / 0)) &&
                      ((r = t), (a = s));
                  });
              return r;
            },
            shuffle: function (t) {
              return W(t, 1 / 0);
            },
            sample: W,
            sortBy: function (t, e, i) {
              var n = 0;
              return (
                (e = w(e, i)),
                H(
                  I(t, function (t, i, s) {
                    return {value: t, index: n++, criteria: e(t, i, s)};
                  }).sort(function (t, e) {
                    var i = t.criteria,
                      n = e.criteria;
                    if (i !== n) {
                      if (i > n || void 0 === i) return 1;
                      if (i < n || void 0 === n) return -1;
                    }
                    return t.index - e.index;
                  }),
                  'value'
                )
              );
            },
            groupBy: V,
            indexBy: z,
            countBy: q,
            toArray: function (t) {
              return t
                ? Bt(t)
                  ? a.call(t)
                  : zt(t)
                  ? t.match(Y)
                  : S(t)
                  ? I(t, se)
                  : Tt(t)
                : [];
            },
            size: function (t) {
              return null == t ? 0 : S(t) ? t.length : Ct(t).length;
            },
            partition: K,
            first: J,
            head: J,
            take: J,
            initial: G,
            last: function (t, e, i) {
              return null == t || t.length < 1
                ? null == e
                  ? void 0
                  : []
                : null == e || i
                ? t[t.length - 1]
                : Q(t, Math.max(0, t.length - e));
            },
            rest: Q,
            tail: Q,
            drop: Q,
            compact: function (t) {
              return L(t, Boolean);
            },
            flatten: function (t, e) {
              return X(t, e, !1);
            },
            without: Z,
            uniq: tt,
            unique: tt,
            union: et,
            intersection: function (t) {
              for (var e = [], i = arguments.length, n = 0, s = D(t); n < s; n++) {
                var r = t[n];
                if (!j(e, r)) {
                  var a;
                  for (a = 1; a < i && j(arguments[a], r); a++);
                  a === i && e.push(r);
                }
              }
              return e;
            },
            difference: it,
            unzip: nt,
            zip: st,
            object: function (t, e) {
              for (var i = {}, n = 0, s = D(t); n < s; n++)
                e ? (i[t[n]] = e[n]) : (i[t[n][0]] = t[n][1]);
              return i;
            },
            findIndex: at,
            findLastIndex: ot,
            sortedIndex: lt,
            indexOf: ut,
            lastIndexOf: dt,
            range: function (t, e, i) {
              null == e && ((e = t || 0), (t = 0)), i || (i = e < t ? -1 : 1);
              for (
                var n = Math.max(Math.ceil((e - t) / i), 0), s = Array(n), r = 0;
                r < n;
                r++, t += i
              )
                s[r] = t;
              return s;
            },
            chunk: function (t, e) {
              if (null == e || e < 1) return [];
              for (var i = [], n = 0, s = t.length; n < s; )
                i.push(a.call(t, n, (n += e)));
              return i;
            },
            bind: pt,
            partial: ft,
            bindAll: gt,
            memoize: function (t, e) {
              var i = function (n) {
                var s = i.cache,
                  r = '' + (e ? e.apply(this, arguments) : n);
                return C(s, r) || (s[r] = t.apply(this, arguments)), s[r];
              };
              return (i.cache = {}), i;
            },
            delay: mt,
            defer: vt,
            throttle: function (t, e, i) {
              var n,
                s,
                r,
                a,
                o = 0;
              i || (i = {});
              var l = function () {
                  (o = !1 === i.leading ? 0 : le()),
                    (n = null),
                    (a = t.apply(s, r)),
                    n || (s = r = null);
                },
                c = function () {
                  var c = le();
                  o || !1 !== i.leading || (o = c);
                  var u = e - (c - o);
                  return (
                    (s = this),
                    (r = arguments),
                    u <= 0 || u > e
                      ? (n && (clearTimeout(n), (n = null)),
                        (o = c),
                        (a = t.apply(s, r)),
                        n || (s = r = null))
                      : n || !1 === i.trailing || (n = setTimeout(l, u)),
                    a
                  );
                };
              return (
                (c.cancel = function () {
                  clearTimeout(n), (o = 0), (n = s = r = null);
                }),
                c
              );
            },
            debounce: function (t, e, i) {
              var n,
                s,
                r = function (e, i) {
                  (n = null), i && (s = t.apply(e, i));
                },
                a = _(function (a) {
                  if ((n && clearTimeout(n), i)) {
                    var o = !n;
                    (n = setTimeout(r, e)), o && (s = t.apply(this, a));
                  } else n = mt(r, e, this, a);
                  return s;
                });
              return (
                (a.cancel = function () {
                  clearTimeout(n), (n = null);
                }),
                a
              );
            },
            wrap: function (t, e) {
              return ft(e, t);
            },
            negate: bt,
            compose: function () {
              var t = arguments,
                e = t.length - 1;
              return function () {
                for (var i = e, n = t[e].apply(this, arguments); i--; )
                  n = t[i].call(this, n);
                return n;
              };
            },
            after: function (t, e) {
              return function () {
                if (--t < 1) return e.apply(this, arguments);
              };
            },
            before: yt,
            once: wt,
            keys: Ct,
            allKeys: Et,
            values: Tt,
            mapObject: function (t, e, i) {
              e = w(e, i);
              for (var n = Ct(t), s = n.length, r = {}, a = 0; a < s; a++) {
                var o = n[a];
                r[o] = e(t[o], o, t);
              }
              return r;
            },
            pairs: function (t) {
              for (var e = Ct(t), i = e.length, n = Array(i), s = 0; s < i; s++)
                n[s] = [e[s], t[e[s]]];
              return n;
            },
            invert: Dt,
            functions: St,
            methods: St,
            extend: It,
            extendOwn: Ot,
            assign: Ot,
            findKey: Nt,
            pick: Pt,
            omit: Lt,
            defaults: Rt,
            create: function (t, e) {
              var i = x(t);
              return e && Ot(i, e), i;
            },
            clone: $t,
            tap: function (t, e) {
              return e(t), t;
            },
            isMatch: jt,
            isEqual: function (t, e) {
              return Ft(t, e);
            },
            isEmpty: function (t) {
              return (
                null == t ||
                (S(t) && (Bt(t) || zt(t) || Ut(t)) ? 0 === t.length : 0 === Ct(t).length)
              );
            },
            isElement: function (t) {
              return !(!t || 1 !== t.nodeType);
            },
            isArray: Bt,
            isObject: Wt,
            isArguments: Ut,
            isFunction: Vt,
            isString: zt,
            isNumber: qt,
            isDate: Yt,
            isRegExp: Kt,
            isError: Jt,
            isSymbol: Gt,
            isMap: Qt,
            isWeakMap: Xt,
            isSet: Zt,
            isWeakSet: te,
            isFinite: function (t) {
              return !Gt(t) && p(t) && !h(parseFloat(t));
            },
            isNaN: ie,
            isBoolean: ne,
            isNull: function (t) {
              return null === t;
            },
            isUndefined: function (t) {
              return void 0 === t;
            },
            has: function (t, e) {
              if (!Bt(e)) return C(t, e);
              for (var i = e.length, n = 0; n < i; n++) {
                var s = e[n];
                if (null == t || !l.call(t, s)) return !1;
                t = t[s];
              }
              return !!i;
            },
            identity: se,
            constant: function (t) {
              return function () {
                return t;
              };
            },
            noop: function () {},
            property: re,
            propertyOf: function (t) {
              return null == t
                ? function () {}
                : function (e) {
                    return Bt(e) ? E(t, e) : t[e];
                  };
            },
            matcher: ae,
            matches: ae,
            times: function (t, e, i) {
              var n = Array(Math.max(0, t));
              e = v(e, i, 1);
              for (var s = 0; s < t; s++) n[s] = e(s);
              return n;
            },
            random: oe,
            now: le,
            escape: he,
            unescape: pe,
            result: function (t, e, i) {
              Bt(e) || (e = [e]);
              var n = e.length;
              if (!n) return Vt(i) ? i.call(t) : i;
              for (var s = 0; s < n; s++) {
                var r = null == t ? void 0 : t[e[s]];
                void 0 === r && ((r = i), (s = n)), (t = Vt(r) ? r.call(t) : r);
              }
              return t;
            },
            uniqueId: function (t) {
              var e = ++fe + '';
              return t ? t + e : e;
            },
            templateSettings: ge,
            template: function (t, e, i) {
              !e && i && (e = i), (e = Rt({}, e, g.templateSettings));
              var n,
                s = RegExp(
                  [
                    (e.escape || me).source,
                    (e.interpolate || me).source,
                    (e.evaluate || me).source,
                  ].join('|') + '|$',
                  'g'
                ),
                r = 0,
                a = "__p+='";
              t.replace(s, function (e, i, n, s, o) {
                return (
                  (a += t.slice(r, o).replace(be, ye)),
                  (r = o + e.length),
                  i
                    ? (a += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'")
                    : n
                    ? (a += "'+\n((__t=(" + n + "))==null?'':__t)+\n'")
                    : s && (a += "';\n" + s + "\n__p+='"),
                  e
                );
              }),
                (a += "';\n"),
                e.variable || (a = 'with(obj||{}){\n' + a + '}\n'),
                (a =
                  "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
                  a +
                  'return __p;\n');
              try {
                n = new Function(e.variable || 'obj', '_', a);
              } catch (t) {
                throw ((t.source = a), t);
              }
              var o = function (t) {
                  return n.call(this, t, g);
                },
                l = e.variable || 'obj';
              return (o.source = 'function(' + l + '){\n' + a + '}'), o;
            },
            chain: function (t) {
              var e = g(t);
              return (e._chain = !0), e;
            },
            mixin: _e,
          });
          return (xe._ = xe), xe;
        });
      }.call(this, i(15)));
    },
    function (t, e, i) {
      var n;
      !(function () {
        'use strict';
        var s = window.DocumentFragment,
          r = window.HTMLElement.prototype,
          a =
            r.matches ||
            r.msMatchesSelector ||
            r.webkitMatchesSelector ||
            r.mozMatchesSelector ||
            r.oMatchesSelector;
        function o(t, e) {
          if (t.__SKATE_TEMPLATE_HTML_DATA) return t.__SKATE_TEMPLATE_HTML_DATA[e];
        }
        function l(t, e, i) {
          return (
            t.__SKATE_TEMPLATE_HTML_DATA || (t.__SKATE_TEMPLATE_HTML_DATA = {}),
            (t.__SKATE_TEMPLATE_HTML_DATA[e] = i),
            t
          );
        }
        function c(t) {
          var e = t.match(/\s*<([^\s>]+)/),
            i = document.createElement(
              (e &&
                {
                  caption: 'table',
                  dd: 'dl',
                  dt: 'dl',
                  li: 'ul',
                  tbody: 'table',
                  td: 'tr',
                  thead: 'table',
                  tr: 'tbody',
                }[e[1]]) ||
                'div'
            );
          return (i.innerHTML = t), u(i.childNodes);
        }
        function u(t) {
          for (var e = document.createDocumentFragment(); t && t.length; )
            e.appendChild(t[0]);
          return e;
        }
        function d(t, e) {
          for (var i = [], n = t.nextSibling; n !== e; ) i.push(n), (n = n.nextSibling);
          return i;
        }
        function h(t, e) {
          if (e) {
            for (var i = t.querySelectorAll(e), n = i.length, s = [], r = 0; r < n; r++) {
              var a = i[r];
              a.parentNode === t && s.push(a);
            }
            return s;
          }
          return [].slice.call(t.childNodes) || [];
        }
        function p(t) {
          for (var e = t.defaultNodes, i = e.length, n = 0; n < i; n++)
            t.container.insertBefore(e[n], t.endNode);
          t.isDefault = !0;
        }
        function f(t) {
          for (var e = t.defaultNodes, i = e.length, n = 0; n < i; n++) {
            var s = e[n];
            s.parentNode.removeChild(s);
          }
          t.isDefault = !1;
        }
        function g(t, e) {
          return {
            get: function () {
              var i = t[e];
              return 'function' == typeof i ? i.bind(t) : i;
            },
            set: function (i) {
              t[e] = i;
            },
          };
        }
        function m(t) {
          var e,
            i = t.textContent.match(/^ (\/?)content (.*)/i);
          if (i) {
            if (i[2])
              try {
                e = JSON.parse(i[2]);
              } catch (e) {
                throw new Error(
                  'Unable to parse content comment data: "' +
                    e +
                    '" in "\x3c!--' +
                    t.textContent +
                    '--\x3e".'
                );
              }
            return {
              data: e || {defaultContent: void 0, isDefault: void 0, selector: void 0},
              type: i[1] ? 'close' : 'open',
            };
          }
        }
        function v() {
          var t = [].slice.call(arguments).join('');
          return function (e) {
            var i = u(e.childNodes);
            (e.innerHTML = t),
              (function (t) {
                var e = t.getElementsByTagName('content');
                if (e && e.length) {
                  for (var i = []; e.length; ) {
                    var n = e[0],
                      s = n.parentNode,
                      r = n.getAttribute('select'),
                      a = document.createComment(' content '),
                      o = document.createComment(' /content ');
                    i.push({
                      container: s,
                      contentNode: n,
                      defaultNodes: [].slice.call(n.childNodes),
                      endNode: o,
                      isDefault: !0,
                      selector: r,
                      startNode: a,
                    }),
                      s.replaceChild(o, n),
                      s.insertBefore(a, o),
                      (a.textContent +=
                        JSON.stringify({defaultContent: n.innerHTML, selector: r}) + ' ');
                  }
                  l(t, 'content', i);
                }
              })(e),
              i.childNodes.length && v.wrap(e).appendChild(i);
          };
        }
        (v.wrap = function (t) {
          return (
            o(t, 'content') ||
              l(
                t,
                'content',
                (function t(e) {
                  var i,
                    n,
                    s = e.childNodes,
                    r = s.length,
                    a = [];
                  for (i = 0; i < r; i++) {
                    var o = s[i];
                    if (8 === o.nodeType) {
                      var l = m(o);
                      if (l)
                        if ('open' === l.type) {
                          if (n)
                            throw new Error(
                              'Cannot have an opening content placeholder after another content placeholder at the same level in the DOM tree: "' +
                                o.textContent +
                                '" in "' +
                                o.parentNode.innerHTML +
                                '".'
                            );
                          n = {
                            container: o.parentNode,
                            contentNode: o,
                            defaultNodes:
                              (l.data.defaultContent &&
                                c(l.data.defaultContent).childNodes) ||
                              [],
                            isDefault: l.data.isDefault,
                            selector: l.data.selector,
                            startNode: o,
                          };
                        } else if ('close' === l.type) {
                          if (!n)
                            throw new Error(
                              'Unmatched closing content placeholder: "' +
                                o.textContent +
                                '" in "' +
                                o.parentNode.innerHTML +
                                '".'
                            );
                          (n.endNode = o), a.push(n), (n = void 0);
                        }
                    } else a = a.concat(t(o));
                  }
                  return a;
                })(t)
              ),
            (function (t, e) {
              var i = {};
              for (var n in t)
                n in e
                  ? Object.defineProperty(i, n, e[n])
                  : Object.defineProperty(i, n, g(t, n));
              return i;
            })(
              t,
              (function (t) {
                var e = o(t, 'content'),
                  i = e.length;
                return {
                  childNodes: {
                    get: function () {
                      for (var t = [], n = 0; n < i; n++) {
                        var s = e[n];
                        s.isDefault || (t = t.concat(d(s.startNode, s.endNode)));
                      }
                      return t;
                    },
                  },
                  firstChild: {
                    get: function () {
                      var t = this.childNodes;
                      return (t.length && t[0]) || null;
                    },
                  },
                  innerHTML: {
                    get: function () {
                      for (
                        var t = '', e = this.childNodes, i = e.length, n = 0;
                        n < i;
                        n++
                      ) {
                        var s = e[n];
                        t += s.outerHTML || s.textContent;
                      }
                      return t;
                    },
                    set: function (t) {
                      for (var n = c(t), s = 0; s < i; s++) {
                        for (
                          var r = e[s], a = d(r.startNode, r.endNode), o = 0;
                          o < a.length;
                          o++
                        ) {
                          var l = a[o];
                          l.parentNode.removeChild(l);
                        }
                        for (var u = h(n, r.selector), g = 0; g < u.length; g++)
                          r.container.insertBefore(u[g], r.endNode);
                        u.length ? f(r) : p(r);
                      }
                    },
                  },
                  lastChild: {
                    get: function () {
                      for (var t = i - 1; t > -1; t--)
                        if (!e[t].isDefault) {
                          var n = this.childNodes;
                          return n[n.length - 1];
                        }
                      return null;
                    },
                  },
                  outerHTML: {
                    get: function () {
                      var t = this.tagName.toLowerCase(),
                        e = '<' + t,
                        i = this.attributes;
                      if (i)
                        for (var n = i.length, s = 0; s < n; s++) {
                          var r = i[s];
                          e += ' ' + r.nodeName + '="' + r.nodeValue + '"';
                        }
                      return (e += '>'), (e += this.innerHTML), (e += '</' + t + '>');
                    },
                  },
                  textContent: {
                    get: function () {
                      for (
                        var t = '',
                          e = this.childNodes,
                          i = this.childNodes.length,
                          n = 0;
                        n < i;
                        n++
                      )
                        t += e[n].textContent;
                      return t;
                    },
                    set: function (t) {
                      var n;
                      this.innerHTML = '';
                      for (var s = 0; s < i; s++) {
                        var r = e[s];
                        if (!r.selector) {
                          n = r;
                          break;
                        }
                      }
                      n &&
                        (t
                          ? (f(n),
                            n.container.insertBefore(
                              document.createTextNode(t),
                              n.endNode
                            ))
                          : p(n));
                    },
                  },
                  appendChild: {
                    value: function (t) {
                      if (t instanceof s) {
                        var n = t.childNodes;
                        return (
                          [].slice.call(n).forEach(
                            function (t) {
                              this.appendChild(t);
                            }.bind(this)
                          ),
                          this
                        );
                      }
                      for (var r = 0; r < i; r++) {
                        var o = e[r],
                          l = o.selector;
                        if (!l || (t instanceof window.HTMLElement && a.call(t, l))) {
                          f(o), o.endNode.parentNode.insertBefore(t, o.endNode);
                          break;
                        }
                      }
                      return this;
                    },
                  },
                  insertAdjacentHTML: {
                    value: function (e, i) {
                      return (
                        'afterbegin' === e
                          ? this.insertBefore(c(i), this.childNodes[0])
                          : 'beforeend' === e
                          ? this.appendChild(c(i))
                          : t.insertAdjacentHTML(e, i),
                        this
                      );
                    },
                  },
                  insertBefore: {
                    value: function (t, n) {
                      if (!n) return this.appendChild(t);
                      if (t instanceof s) {
                        var r = t.childNodes;
                        if (r)
                          for (var o = r.length, l = 0; l < o; l++)
                            this.insertBefore(r[l], n);
                        return this;
                      }
                      var c = !1;
                      t: for (var u = 0; u < i; u++)
                        for (
                          var h = e[u],
                            p = d(h.startNode, h.endNode),
                            f = p.length,
                            g = 0;
                          g < f;
                          g++
                        ) {
                          var m = p[g];
                          if ((m === n && (c = !0), c)) {
                            var v = h.selector;
                            if (!v || a.call(t, v)) {
                              m.parentNode.insertBefore(t, m);
                              break t;
                            }
                          }
                        }
                      if (!c)
                        throw new Error(
                          'DOMException 8: The node before which the new node is to be inserted is not a child of this node.'
                        );
                      return t;
                    },
                  },
                  removeChild: {
                    value: function (t) {
                      for (var n = !1, s = 0; s < i; s++) {
                        var r = e[s];
                        if (r.container === t.parentNode) {
                          r.container.removeChild(t), (n = !0);
                          break;
                        }
                        r.startNode.nextSibling === r.endNode && p(r);
                      }
                      if (!n)
                        throw new Error(
                          'DOMException 8: The node in which you are trying to remove is not a child of this node.'
                        );
                      return t;
                    },
                  },
                  replaceChild: {
                    value: function (t, n) {
                      for (var s = 0; s < i; s++) {
                        var r = e[s];
                        if (r.container === n.parentNode) {
                          r.container.replaceChild(t, n);
                          break;
                        }
                      }
                      return this;
                    },
                  },
                };
              })(t)
            )
          );
        }),
          (window.skateTemplateHtml = v),
          void 0 ===
            (n = function () {
              return v;
            }.call(e, i, e, t)) || (t.exports = n),
          (t.exports = v);
      })();
    },
    function (t, e, i) {
      var n, s, r;
      (s = [i(1)]),
        void 0 ===
          (r =
            'function' ==
            typeof (n = function (t) {
              return (t.ui = t.ui || {}), (t.ui.version = '1.12.1');
            })
              ? n.apply(e, s)
              : n) || (t.exports = r);
    },
    function (t, e, i) {
      var n, s, r;
      (s = [e, t, i(6), i(38), i(12), i(14), i(7), i(11)]),
        void 0 ===
          (r =
            'function' ==
            typeof (n = function (t, e, i, n, s, r, a, o) {
              'use strict';
              var l = function (t) {
                  return t && t.__esModule ? t.default : t;
                },
                c = i.TYPE_ATTRIBUTE,
                u = i.TYPE_CLASSNAME,
                d = i.TYPE_ELEMENT,
                h = l(n),
                p = s.triggerCreated,
                f = s.triggerAttached,
                g = s.triggerDetached,
                m = s.triggerAttributeChanged,
                v = s.initElements,
                b = l(r),
                y = a.debounce,
                w = a.inherit,
                _ = l(o),
                x = window.HTMLElement,
                k = !!document.attachEvent,
                C = y(function () {
                  var t = function () {
                    v(document.documentElement.childNodes);
                  };
                  (
                    k
                      ? 'complete' === document.readyState
                      : 'interactive' === document.readyState ||
                        'complete' === document.readyState
                  )
                    ? t()
                    : k
                    ? window.addEventListener('load', t)
                    : document.addEventListener('DOMContentLoaded', t);
                });
              function E(t, e) {
                if (
                  ((e = w({}, e)),
                  ((e = w(e, E.defaults)).id = t),
                  b.set(t, e),
                  b.isNativeCustomElement(t))
                ) {
                  var i = e.extends
                    ? document.createElement(e.extends).constructor.prototype
                    : x.prototype;
                  i.isPrototypeOf(e.prototype) ||
                    (e.prototype = w(Object.create(i), e.prototype, !0));
                  var n = {
                    prototype: w(e.prototype, {
                      createdCallback: function () {
                        p(this, e);
                      },
                      attachedCallback: function () {
                        f(this, e);
                      },
                      detachedCallback: function () {
                        g(this, e);
                      },
                      attributeChangedCallback: function (t, i, n) {
                        m(this, e, {name: t, oldValue: i, newValue: n});
                      },
                    }),
                  };
                  return (
                    e.extends && (n.extends = e.extends), document.registerElement(t, n)
                  );
                }
                if ((C(), h.register(!!e.detached), b.isType(t, d)))
                  return (function (t) {
                    function e() {
                      var i,
                        n = t.extends,
                        s = t.id;
                      return (
                        n
                          ? (i = document.createElement(n)).setAttribute('is', s)
                          : (i = document.createElement(s)),
                        (t.prototype = e.prototype),
                        p(i, t),
                        i
                      );
                    }
                    return (e.prototype = t.prototype), e;
                  })(e);
              }
              (E.init = function (t) {
                var e = t;
                return t
                  ? ('string' == typeof t
                      ? (e = t = document.querySelectorAll(t))
                      : t instanceof x && (e = [t]),
                    v(e),
                    t)
                  : t;
              }),
                (E.type = {ATTRIBUTE: c, CLASSNAME: u, ELEMENT: d}),
                (E.version = _),
                (E.defaults = {
                  attributes: void 0,
                  events: void 0,
                  extends: void 0,
                  id: '',
                  prototype: {},
                  resolvedAttribute: 'resolved',
                  template: void 0,
                  type: d,
                  unresolvedAttribute: 'unresolved',
                });
              var T = window.skate;
              (E.noConflict = function () {
                return (window.skate = T), E;
              }),
                (window.skate = E),
                (e.exports = E);
            })
              ? n.apply(e, s)
              : n) || (t.exports = r);
    },
    function (t, e, i) {
      var n, s, r;
      (s = [e]),
        void 0 ===
          (r =
            'function' ==
            typeof (n = function (t) {
              'use strict';
              Object.defineProperty(t, '__esModule', {value: !0}),
                (t.ATTR_IGNORE = 'data-skate-ignore'),
                (t.TYPE_ATTRIBUTE = 'a'),
                (t.TYPE_CLASSNAME = 'c'),
                (t.TYPE_ELEMENT = 't');
            })
              ? n.apply(e, s)
              : n) || (t.exports = r);
    },
    function (t, e, i) {
      var n, s, r;
      (s = [e, i(6)]),
        void 0 ===
          (r =
            'function' ==
            typeof (n = function (t, e) {
              'use strict';
              (t.hasOwn = r),
                (t.camelCase = function (t) {
                  return t
                    .split(/-/g)
                    .map(function (t, e) {
                      return 0 === e ? t : t[0].toUpperCase() + t.substring(1);
                    })
                    .join('');
                }),
                (t.elementContains = function (t, e) {
                  return t !== document || t.contains
                    ? t.contains
                      ? t.contains(e)
                      : s.call(t, e)
                    : document.head.contains(e) || document.body.contains(e);
                }),
                (t.debounce = function (t) {
                  var e = !1;
                  return function () {
                    e ||
                      ((e = !0),
                      setTimeout(function () {
                        (e = !1), t();
                      }, 1));
                  };
                }),
                (t.getClosestIgnoredElement = function (t) {
                  for (var e = t; e instanceof Element; ) {
                    if (e.hasAttribute(i)) return e;
                    e = e.parentNode;
                  }
                }),
                (t.inherit = function (t, e, i) {
                  for (
                    var n = Object.getOwnPropertyNames(e), s = n.length, r = 0;
                    r < s;
                    r++
                  ) {
                    var a = n[r];
                    if (i || void 0 === t[a]) {
                      var o = Object.getOwnPropertyDescriptor(e, a),
                        l =
                          o.get ||
                          o.set ||
                          !o.writable ||
                          !o.enumerable ||
                          !o.configurable;
                      l ? Object.defineProperty(t, a, o) : (t[a] = e[a]);
                    }
                  }
                  return t;
                }),
                (t.objEach = function (t, e) {
                  for (var i in t) r(t, i) && e(t[i], i);
                }),
                (t.supportsNativeCustomElements = function () {
                  return 'function' == typeof document.registerElement;
                }),
                (t.isValidNativeCustomElementName = function (t) {
                  return t.indexOf('-') > 0;
                }),
                Object.defineProperty(t, '__esModule', {value: !0});
              var i = e.ATTR_IGNORE,
                n = window.HTMLElement.prototype;
              t.elementPrototype = n;
              var s = n.contains;
              function r(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
              }
            })
              ? n.apply(e, s)
              : n) || (t.exports = r);
    },
    function (t, e, i) {
      var n, s, r;
      (s = [i(1), i(4)]),
        void 0 ===
          (r =
            'function' ==
            typeof (n = function (t) {
              var e = 0,
                i = Array.prototype.slice;
              return (
                (t.cleanData = (function (e) {
                  return function (i) {
                    var n, s, r;
                    for (r = 0; null != (s = i[r]); r++)
                      try {
                        (n = t._data(s, 'events')) &&
                          n.remove &&
                          t(s).triggerHandler('remove');
                      } catch (t) {}
                    e(i);
                  };
                })(t.cleanData)),
                (t.widget = function (e, i, n) {
                  var s,
                    r,
                    a,
                    o = {},
                    l = e.split('.')[0],
                    c = l + '-' + (e = e.split('.')[1]);
                  return (
                    n || ((n = i), (i = t.Widget)),
                    t.isArray(n) && (n = t.extend.apply(null, [{}].concat(n))),
                    (t.expr[':'][c.toLowerCase()] = function (e) {
                      return !!t.data(e, c);
                    }),
                    (t[l] = t[l] || {}),
                    (s = t[l][e]),
                    (r = t[l][e] =
                      function (t, e) {
                        if (!this._createWidget) return new r(t, e);
                        arguments.length && this._createWidget(t, e);
                      }),
                    t.extend(r, s, {
                      version: n.version,
                      _proto: t.extend({}, n),
                      _childConstructors: [],
                    }),
                    ((a = new i()).options = t.widget.extend({}, a.options)),
                    t.each(n, function (e, n) {
                      t.isFunction(n)
                        ? (o[e] = (function () {
                            function t() {
                              return i.prototype[e].apply(this, arguments);
                            }
                            function s(t) {
                              return i.prototype[e].apply(this, t);
                            }
                            return function () {
                              var e,
                                i = this._super,
                                r = this._superApply;
                              return (
                                (this._super = t),
                                (this._superApply = s),
                                (e = n.apply(this, arguments)),
                                (this._super = i),
                                (this._superApply = r),
                                e
                              );
                            };
                          })())
                        : (o[e] = n);
                    }),
                    (r.prototype = t.widget.extend(
                      a,
                      {widgetEventPrefix: (s && a.widgetEventPrefix) || e},
                      o,
                      {constructor: r, namespace: l, widgetName: e, widgetFullName: c}
                    )),
                    s
                      ? (t.each(s._childConstructors, function (e, i) {
                          var n = i.prototype;
                          t.widget(n.namespace + '.' + n.widgetName, r, i._proto);
                        }),
                        delete s._childConstructors)
                      : i._childConstructors.push(r),
                    t.widget.bridge(e, r),
                    r
                  );
                }),
                (t.widget.extend = function (e) {
                  for (
                    var n, s, r = i.call(arguments, 1), a = 0, o = r.length;
                    a < o;
                    a++
                  )
                    for (n in r[a])
                      (s = r[a][n]),
                        r[a].hasOwnProperty(n) &&
                          void 0 !== s &&
                          (t.isPlainObject(s)
                            ? (e[n] = t.isPlainObject(e[n])
                                ? t.widget.extend({}, e[n], s)
                                : t.widget.extend({}, s))
                            : (e[n] = s));
                  return e;
                }),
                (t.widget.bridge = function (e, n) {
                  var s = n.prototype.widgetFullName || e;
                  t.fn[e] = function (r) {
                    var a = 'string' == typeof r,
                      o = i.call(arguments, 1),
                      l = this;
                    return (
                      a
                        ? this.length || 'instance' !== r
                          ? this.each(function () {
                              var i,
                                n = t.data(this, s);
                              return 'instance' === r
                                ? ((l = n), !1)
                                : n
                                ? t.isFunction(n[r]) && '_' !== r.charAt(0)
                                  ? (i = n[r].apply(n, o)) !== n && void 0 !== i
                                    ? ((l = i && i.jquery ? l.pushStack(i.get()) : i), !1)
                                    : void 0
                                  : t.error(
                                      "no such method '" +
                                        r +
                                        "' for " +
                                        e +
                                        ' widget instance'
                                    )
                                : t.error(
                                    'cannot call methods on ' +
                                      e +
                                      " prior to initialization; attempted to call method '" +
                                      r +
                                      "'"
                                  );
                            })
                          : (l = void 0)
                        : (o.length && (r = t.widget.extend.apply(null, [r].concat(o))),
                          this.each(function () {
                            var e = t.data(this, s);
                            e
                              ? (e.option(r || {}), e._init && e._init())
                              : t.data(this, s, new n(r, this));
                          })),
                      l
                    );
                  };
                }),
                (t.Widget = function () {}),
                (t.Widget._childConstructors = []),
                (t.Widget.prototype = {
                  widgetName: 'widget',
                  widgetEventPrefix: '',
                  defaultElement: '<div>',
                  options: {classes: {}, disabled: !1, create: null},
                  _createWidget: function (i, n) {
                    (n = t(n || this.defaultElement || this)[0]),
                      (this.element = t(n)),
                      (this.uuid = e++),
                      (this.eventNamespace = '.' + this.widgetName + this.uuid),
                      (this.bindings = t()),
                      (this.hoverable = t()),
                      (this.focusable = t()),
                      (this.classesElementLookup = {}),
                      n !== this &&
                        (t.data(n, this.widgetFullName, this),
                        this._on(!0, this.element, {
                          remove: function (t) {
                            t.target === n && this.destroy();
                          },
                        }),
                        (this.document = t(n.style ? n.ownerDocument : n.document || n)),
                        (this.window = t(
                          this.document[0].defaultView || this.document[0].parentWindow
                        ))),
                      (this.options = t.widget.extend(
                        {},
                        this.options,
                        this._getCreateOptions(),
                        i
                      )),
                      this._create(),
                      this.options.disabled &&
                        this._setOptionDisabled(this.options.disabled),
                      this._trigger('create', null, this._getCreateEventData()),
                      this._init();
                  },
                  _getCreateOptions: function () {
                    return {};
                  },
                  _getCreateEventData: t.noop,
                  _create: t.noop,
                  _init: t.noop,
                  destroy: function () {
                    var e = this;
                    this._destroy(),
                      t.each(this.classesElementLookup, function (t, i) {
                        e._removeClass(i, t);
                      }),
                      this.element
                        .off(this.eventNamespace)
                        .removeData(this.widgetFullName),
                      this.widget().off(this.eventNamespace).removeAttr('aria-disabled'),
                      this.bindings.off(this.eventNamespace);
                  },
                  _destroy: t.noop,
                  widget: function () {
                    return this.element;
                  },
                  option: function (e, i) {
                    var n,
                      s,
                      r,
                      a = e;
                    if (0 === arguments.length) return t.widget.extend({}, this.options);
                    if ('string' == typeof e)
                      if (((a = {}), (e = (n = e.split('.')).shift()), n.length)) {
                        for (
                          s = a[e] = t.widget.extend({}, this.options[e]), r = 0;
                          r < n.length - 1;
                          r++
                        )
                          (s[n[r]] = s[n[r]] || {}), (s = s[n[r]]);
                        if (((e = n.pop()), 1 === arguments.length))
                          return void 0 === s[e] ? null : s[e];
                        s[e] = i;
                      } else {
                        if (1 === arguments.length)
                          return void 0 === this.options[e] ? null : this.options[e];
                        a[e] = i;
                      }
                    return this._setOptions(a), this;
                  },
                  _setOptions: function (t) {
                    var e;
                    for (e in t) this._setOption(e, t[e]);
                    return this;
                  },
                  _setOption: function (t, e) {
                    return (
                      'classes' === t && this._setOptionClasses(e),
                      (this.options[t] = e),
                      'disabled' === t && this._setOptionDisabled(e),
                      this
                    );
                  },
                  _setOptionClasses: function (e) {
                    var i, n, s;
                    for (i in e)
                      (s = this.classesElementLookup[i]),
                        e[i] !== this.options.classes[i] &&
                          s &&
                          s.length &&
                          ((n = t(s.get())),
                          this._removeClass(s, i),
                          n.addClass(
                            this._classes({element: n, keys: i, classes: e, add: !0})
                          ));
                  },
                  _setOptionDisabled: function (t) {
                    this._toggleClass(
                      this.widget(),
                      this.widgetFullName + '-disabled',
                      null,
                      !!t
                    ),
                      t &&
                        (this._removeClass(this.hoverable, null, 'ui-state-hover'),
                        this._removeClass(this.focusable, null, 'ui-state-focus'));
                  },
                  enable: function () {
                    return this._setOptions({disabled: !1});
                  },
                  disable: function () {
                    return this._setOptions({disabled: !0});
                  },
                  _classes: function (e) {
                    var i = [],
                      n = this;
                    function s(s, r) {
                      var a, o;
                      for (o = 0; o < s.length; o++)
                        (a = n.classesElementLookup[s[o]] || t()),
                          (a = e.add
                            ? t(t.unique(a.get().concat(e.element.get())))
                            : t(a.not(e.element).get())),
                          (n.classesElementLookup[s[o]] = a),
                          i.push(s[o]),
                          r && e.classes[s[o]] && i.push(e.classes[s[o]]);
                    }
                    return (
                      (e = t.extend(
                        {element: this.element, classes: this.options.classes || {}},
                        e
                      )),
                      this._on(e.element, {remove: '_untrackClassesElement'}),
                      e.keys && s(e.keys.match(/\S+/g) || [], !0),
                      e.extra && s(e.extra.match(/\S+/g) || []),
                      i.join(' ')
                    );
                  },
                  _untrackClassesElement: function (e) {
                    var i = this;
                    t.each(i.classesElementLookup, function (n, s) {
                      -1 !== t.inArray(e.target, s) &&
                        (i.classesElementLookup[n] = t(s.not(e.target).get()));
                    });
                  },
                  _removeClass: function (t, e, i) {
                    return this._toggleClass(t, e, i, !1);
                  },
                  _addClass: function (t, e, i) {
                    return this._toggleClass(t, e, i, !0);
                  },
                  _toggleClass: function (t, e, i, n) {
                    n = 'boolean' == typeof n ? n : i;
                    var s = 'string' == typeof t || null === t,
                      r = {
                        extra: s ? e : i,
                        keys: s ? t : e,
                        element: s ? this.element : t,
                        add: n,
                      };
                    return r.element.toggleClass(this._classes(r), n), this;
                  },
                  _on: function (e, i, n) {
                    var s,
                      r = this;
                    'boolean' != typeof e && ((n = i), (i = e), (e = !1)),
                      n
                        ? ((i = s = t(i)), (this.bindings = this.bindings.add(i)))
                        : ((n = i), (i = this.element), (s = this.widget())),
                      t.each(n, function (n, a) {
                        function o() {
                          if (
                            e ||
                            (!0 !== r.options.disabled &&
                              !t(this).hasClass('ui-state-disabled'))
                          )
                            return ('string' == typeof a ? r[a] : a).apply(r, arguments);
                        }
                        'string' != typeof a &&
                          (o.guid = a.guid = a.guid || o.guid || t.guid++);
                        var l = n.match(/^([\w:-]*)\s*(.*)$/),
                          c = l[1] + r.eventNamespace,
                          u = l[2];
                        u ? s.on(c, u, o) : i.on(c, o);
                      });
                  },
                  _off: function (e, i) {
                    (i =
                      (i || '').split(' ').join(this.eventNamespace + ' ') +
                      this.eventNamespace),
                      e.off(i).off(i),
                      (this.bindings = t(this.bindings.not(e).get())),
                      (this.focusable = t(this.focusable.not(e).get())),
                      (this.hoverable = t(this.hoverable.not(e).get()));
                  },
                  _delay: function (t, e) {
                    var i = this;
                    return setTimeout(function () {
                      return ('string' == typeof t ? i[t] : t).apply(i, arguments);
                    }, e || 0);
                  },
                  _hoverable: function (e) {
                    (this.hoverable = this.hoverable.add(e)),
                      this._on(e, {
                        mouseenter: function (e) {
                          this._addClass(t(e.currentTarget), null, 'ui-state-hover');
                        },
                        mouseleave: function (e) {
                          this._removeClass(t(e.currentTarget), null, 'ui-state-hover');
                        },
                      });
                  },
                  _focusable: function (e) {
                    (this.focusable = this.focusable.add(e)),
                      this._on(e, {
                        focusin: function (e) {
                          this._addClass(t(e.currentTarget), null, 'ui-state-focus');
                        },
                        focusout: function (e) {
                          this._removeClass(t(e.currentTarget), null, 'ui-state-focus');
                        },
                      });
                  },
                  _trigger: function (e, i, n) {
                    var s,
                      r,
                      a = this.options[e];
                    if (
                      ((n = n || {}),
                      ((i = t.Event(i)).type = (
                        e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e
                      ).toLowerCase()),
                      (i.target = this.element[0]),
                      (r = i.originalEvent))
                    )
                      for (s in r) s in i || (i[s] = r[s]);
                    return (
                      this.element.trigger(i, n),
                      !(
                        (t.isFunction(a) &&
                          !1 === a.apply(this.element[0], [i].concat(n))) ||
                        i.isDefaultPrevented()
                      )
                    );
                  },
                }),
                t.each({show: 'fadeIn', hide: 'fadeOut'}, function (e, i) {
                  t.Widget.prototype['_' + e] = function (n, s, r) {
                    var a;
                    'string' == typeof s && (s = {effect: s});
                    var o = s
                      ? !0 === s || 'number' == typeof s
                        ? i
                        : s.effect || i
                      : e;
                    'number' == typeof (s = s || {}) && (s = {duration: s}),
                      (a = !t.isEmptyObject(s)),
                      (s.complete = r),
                      s.delay && n.delay(s.delay),
                      a && t.effects && t.effects.effect[o]
                        ? n[e](s)
                        : o !== e && n[o]
                        ? n[o](s.duration, s.easing, r)
                        : n.queue(function (i) {
                            t(this)[e](), r && r.call(n[0]), i();
                          });
                  };
                }),
                t.widget
              );
            })
              ? n.apply(e, s)
              : n) || (t.exports = r);
    },
    function (t, e, i) {
      var n, s, r;
      (s = [i(1), i(16), i(4), i(8)]),
        void 0 ===
          (r =
            'function' ==
            typeof (n = function (t) {
              var e = !1;
              return (
                t(document).on('mouseup', function () {
                  e = !1;
                }),
                t.widget('ui.mouse', {
                  version: '1.12.1',
                  options: {
                    cancel: 'input, textarea, button, select, option',
                    distance: 1,
                    delay: 0,
                  },
                  _mouseInit: function () {
                    var e = this;
                    this.element
                      .on('mousedown.' + this.widgetName, function (t) {
                        return e._mouseDown(t);
                      })
                      .on('click.' + this.widgetName, function (i) {
                        if (!0 === t.data(i.target, e.widgetName + '.preventClickEvent'))
                          return (
                            t.removeData(i.target, e.widgetName + '.preventClickEvent'),
                            i.stopImmediatePropagation(),
                            !1
                          );
                      }),
                      (this.started = !1);
                  },
                  _mouseDestroy: function () {
                    this.element.off('.' + this.widgetName),
                      this._mouseMoveDelegate &&
                        this.document
                          .off('mousemove.' + this.widgetName, this._mouseMoveDelegate)
                          .off('mouseup.' + this.widgetName, this._mouseUpDelegate);
                  },
                  _mouseDown: function (i) {
                    if (!e) {
                      (this._mouseMoved = !1),
                        this._mouseStarted && this._mouseUp(i),
                        (this._mouseDownEvent = i);
                      var n = this,
                        s = 1 === i.which,
                        r =
                          !(
                            'string' != typeof this.options.cancel || !i.target.nodeName
                          ) && t(i.target).closest(this.options.cancel).length;
                      return !(
                        s &&
                        !r &&
                        this._mouseCapture(i) &&
                        ((this.mouseDelayMet = !this.options.delay),
                        this.mouseDelayMet ||
                          (this._mouseDelayTimer = setTimeout(function () {
                            n.mouseDelayMet = !0;
                          }, this.options.delay)),
                        this._mouseDistanceMet(i) &&
                        this._mouseDelayMet(i) &&
                        ((this._mouseStarted = !1 !== this._mouseStart(i)),
                        !this._mouseStarted)
                          ? (i.preventDefault(), 0)
                          : (!0 ===
                              t.data(i.target, this.widgetName + '.preventClickEvent') &&
                              t.removeData(
                                i.target,
                                this.widgetName + '.preventClickEvent'
                              ),
                            (this._mouseMoveDelegate = function (t) {
                              return n._mouseMove(t);
                            }),
                            (this._mouseUpDelegate = function (t) {
                              return n._mouseUp(t);
                            }),
                            this.document
                              .on('mousemove.' + this.widgetName, this._mouseMoveDelegate)
                              .on('mouseup.' + this.widgetName, this._mouseUpDelegate),
                            i.preventDefault(),
                            (e = !0),
                            0))
                      );
                    }
                  },
                  _mouseMove: function (e) {
                    if (this._mouseMoved) {
                      if (
                        t.ui.ie &&
                        (!document.documentMode || document.documentMode < 9) &&
                        !e.button
                      )
                        return this._mouseUp(e);
                      if (!e.which)
                        if (
                          e.originalEvent.altKey ||
                          e.originalEvent.ctrlKey ||
                          e.originalEvent.metaKey ||
                          e.originalEvent.shiftKey
                        )
                          this.ignoreMissingWhich = !0;
                        else if (!this.ignoreMissingWhich) return this._mouseUp(e);
                    }
                    return (
                      (e.which || e.button) && (this._mouseMoved = !0),
                      this._mouseStarted
                        ? (this._mouseDrag(e), e.preventDefault())
                        : (this._mouseDistanceMet(e) &&
                            this._mouseDelayMet(e) &&
                            ((this._mouseStarted =
                              !1 !== this._mouseStart(this._mouseDownEvent, e)),
                            this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
                          !this._mouseStarted)
                    );
                  },
                  _mouseUp: function (i) {
                    this.document
                      .off('mousemove.' + this.widgetName, this._mouseMoveDelegate)
                      .off('mouseup.' + this.widgetName, this._mouseUpDelegate),
                      this._mouseStarted &&
                        ((this._mouseStarted = !1),
                        i.target === this._mouseDownEvent.target &&
                          t.data(i.target, this.widgetName + '.preventClickEvent', !0),
                        this._mouseStop(i)),
                      this._mouseDelayTimer &&
                        (clearTimeout(this._mouseDelayTimer),
                        delete this._mouseDelayTimer),
                      (this.ignoreMissingWhich = !1),
                      (e = !1),
                      i.preventDefault();
                  },
                  _mouseDistanceMet: function (t) {
                    return (
                      Math.max(
                        Math.abs(this._mouseDownEvent.pageX - t.pageX),
                        Math.abs(this._mouseDownEvent.pageY - t.pageY)
                      ) >= this.options.distance
                    );
                  },
                  _mouseDelayMet: function () {
                    return this.mouseDelayMet;
                  },
                  _mouseStart: function () {},
                  _mouseDrag: function () {},
                  _mouseStop: function () {},
                  _mouseCapture: function () {
                    return !0;
                  },
                })
              );
            })
              ? n.apply(e, s)
              : n) || (t.exports = r);
    },
    function (t, e, i) {
      var n, s, r;
      (s = [e, t, i(11)]),
        void 0 ===
          (r =
            'function' ==
            typeof (n = function (t, e, i) {
              'use strict';
              var n =
                '__skate_' +
                (function (t) {
                  return t && t.__esModule ? t.default : t;
                })(i).replace(/[^\w]/g, '_');
              window[n] || (window[n] = {observer: void 0, registry: {}}),
                (e.exports = window[n]);
            })
              ? n.apply(e, s)
              : n) || (t.exports = r);
    },
    function (t, e, i) {
      var n, s, r;
      (s = [e, t]),
        void 0 ===
          (r =
            'function' ==
            typeof (n = function (t, e) {
              'use strict';
              e.exports = '0.13.17';
            })
              ? n.apply(e, s)
              : n) || (t.exports = r);
    },
    function (t, e, i) {
      var n, s, r;
      (s = [e, i(6), i(39), i(13), i(14), i(7)]),
        void 0 ===
          (r =
            'function' ==
            typeof (n = function (t, e, i, n, s, r) {
              'use strict';
              var a = function (t) {
                return t && t.__esModule ? t.default : t;
              };
              Object.defineProperty(t, '__esModule', {value: !0});
              var o = e.ATTR_IGNORE,
                l = a(i),
                c = a(s),
                u = r.camelCase,
                d = r.elementContains,
                h = r.hasOwn,
                p = r.inherit,
                f = r.objEach,
                g = window.Node,
                m = window.HTMLElement.prototype,
                v =
                  m.matches ||
                  m.msMatchesSelector ||
                  m.webkitMatchesSelector ||
                  m.mozMatchesSelector ||
                  m.oMatchesSelector,
                b = !v.call(document.createElement('div'), 'div'),
                y = function (t, e) {
                  if (b) {
                    var i = t.cloneNode();
                    return document.createElement('div').appendChild(i), v.call(i, e);
                  }
                  return v.call(t, e);
                },
                w = /Edge/.test(navigator.userAgent);
              function _(t, e, i) {
                Object.defineProperty(t, i, {
                  get: function () {
                    return this.getAttribute(e);
                  },
                  set: function (t) {
                    void 0 === t ? this.removeAttribute(e) : this.setAttribute(e, t);
                  },
                });
              }
              function x(t, e, i) {
                var n,
                  s,
                  r,
                  a = i.name,
                  o = i.newValue;
                w && (r = l(t, 'cachedAttributeOldValues'));
                var c = w && h(r, a) ? r[a] : i.oldValue,
                  u = 'string' == typeof o,
                  d = 'string' == typeof c,
                  p = e.attributes,
                  f = p && p[a];
                !d && u
                  ? (s = 'created')
                  : d && u
                  ? (s = 'updated')
                  : d && !u && (s = 'removed'),
                  w && ('removed' === s ? delete r[a] : (r[a] = o)),
                  f && 'function' == typeof f[s]
                    ? (n = f[s])
                    : f && 'function' == typeof f.fallback
                    ? (n = f.fallback)
                    : 'function' == typeof f
                    ? (n = f)
                    : 'function' == typeof p && (n = p),
                  (o = void 0 === o ? null : o),
                  (c = void 0 === c ? null : c),
                  n && n(t, {type: s, name: a, newValue: o, oldValue: c});
              }
              function k(t, e) {
                'object' == typeof e.events &&
                  f(e.events, function (e, i) {
                    var n = (function (t) {
                        var e = t.split(' ');
                        return {name: e.shift(), delegate: e.join(' ')};
                      })(i),
                      s = !!n.delegate && ('blur' === n.name || 'focus' === n.name);
                    t.addEventListener(
                      n.name,
                      (function (e, i) {
                        return function (n) {
                          if (!i) return e(t, n, t);
                          for (
                            var s = n.target;
                            s && s !== document && s !== t.parentNode;

                          ) {
                            if (y(s, i)) return e(t, n, s);
                            s = s.parentNode;
                          }
                        };
                      })(e, n.delegate),
                      s
                    );
                  });
              }
              function C(t, e) {
                var i = l(t, e.id);
                i.created ||
                  ((i.created = !0),
                  p(t, e.prototype, !0),
                  e.template && !t.hasAttribute(e.resolvedAttribute) && e.template(t),
                  t.removeAttribute(e.unresolvedAttribute),
                  t.setAttribute(e.resolvedAttribute, ''),
                  k(t, e),
                  (function (t, e) {
                    var i = t.attributes;
                    e.attributes &&
                      !c.isNativeCustomElement(e.id) &&
                      new window.MutationObserver(function (n) {
                        n.forEach(function (n) {
                          var s = n.attributeName,
                            r = i[s];
                          x(t, e, {
                            name: s,
                            newValue: r && (r.value || r.nodeValue),
                            oldValue: n.oldValue,
                          });
                        });
                      }).observe(t, {attributes: !0, attributeOldValue: !0});
                  })(t, e),
                  (function (t, e) {
                    var i = e.attributes;
                    if ('object' == typeof i)
                      for (var n in i) {
                        var s = u(n);
                        h(i, n) && !h(t, s) && _(t, n, s);
                      }
                  })(t, e),
                  (function (t, e) {
                    var i = e.attributes;
                    if ('object' == typeof i)
                      for (var n in i)
                        if (h(i, n) && h(i[n], 'value') && !t.hasAttribute(n)) {
                          var s = i[n].value;
                          (s = 'function' == typeof s ? s(t) : s), t.setAttribute(n, s);
                        }
                  })(t, e),
                  (function (t, e) {
                    var i,
                      n = t.attributes,
                      s = [],
                      r = n.length;
                    for (i = 0; i < r; i++) s.push(n[i]);
                    for (i = 0; i < r; i++) {
                      var a = s[i];
                      x(t, e, {name: a.nodeName, newValue: a.value || a.nodeValue});
                    }
                  })(t, e),
                  e.created && e.created(t));
              }
              function E(t, e) {
                var i = l(t, e.id);
                i.attached ||
                  (d(document, t) &&
                    ((i.attached = !0), e.attached && e.attached(t), (i.detached = !1)));
              }
              function T(t, e) {
                var i = l(t, e.id);
                i.detached ||
                  ((i.detached = !0), e.detached && e.detached(t), (i.attached = !1));
              }
              function D(t, e) {
                C(t, e), E(t, e);
              }
              (t.initElements = function t(e) {
                for (var i = 0; i < e.length; i++) {
                  var n = e[i];
                  if (n.nodeType === g.ELEMENT_NODE && !n.attributes[o]) {
                    for (var s = c.getForElement(n), r = s.length, a = 0; a < r; a++)
                      D(n, s[a]);
                    var l = n.childNodes || [],
                      u = l.length;
                    u && t(l);
                  }
                }
              }),
                (t.removeElements = function t(e) {
                  for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    if (n.nodeType === g.ELEMENT_NODE) {
                      t(n.childNodes);
                      for (var s = c.getForElement(n), r = s.length, a = 0; a < r; a++)
                        T(n, s[a]);
                    }
                  }
                }),
                (t.triggerAttached = E),
                (t.triggerAttributeChanged = x),
                (t.triggerCreated = C),
                (t.triggerDetached = T);
            })
              ? n.apply(e, s)
              : n) || (t.exports = r);
    },
    function (t, e, i) {
      var n, s, r;
      (s = [e]),
        void 0 ===
          (r =
            'function' ==
            typeof (n = function (t) {
              'use strict';
              !(function (t) {
                'undefined' == typeof WeakMap &&
                  (function () {
                    var t = Object.defineProperty,
                      e = Date.now() % 1e9,
                      i = function () {
                        this.name = '__st' + ((1e9 * Math.random()) >>> 0) + e++ + '__';
                      };
                    (i.prototype = {
                      set: function (e, i) {
                        var n = e[this.name];
                        return (
                          n && n[0] === e
                            ? (n[1] = i)
                            : t(e, this.name, {value: [e, i], writable: !0}),
                          this
                        );
                      },
                      get: function (t) {
                        var e;
                        return (e = t[this.name]) && e[0] === t ? e[1] : void 0;
                      },
                      delete: function (t) {
                        var e = t[this.name];
                        return !(!e || e[0] !== t || ((e[0] = e[1] = void 0), 0));
                      },
                      has: function (t) {
                        var e = t[this.name];
                        return !!e && e[0] === t;
                      },
                    }),
                      (window.WeakMap = i);
                  })(),
                  (function (t) {
                    if (!t.JsMutationObserver) {
                      var e,
                        i = new WeakMap();
                      if (/Trident|Edge/.test(navigator.userAgent)) e = setTimeout;
                      else if (window.setImmediate) e = window.setImmediate;
                      else {
                        var n = [],
                          s = String(Math.random());
                        window.addEventListener('message', function (t) {
                          if (t.data === s) {
                            var e = n;
                            (n = []),
                              e.forEach(function (t) {
                                t();
                              });
                          }
                        }),
                          (e = function (t) {
                            n.push(t), window.postMessage(s, '*');
                          });
                      }
                      var r,
                        a,
                        o = !1,
                        l = [],
                        c = 0;
                      (h.prototype = {
                        observe: function (t, e) {
                          if (
                            ((t = (function (t) {
                              return (
                                (window.ShadowDOMPolyfill &&
                                  window.ShadowDOMPolyfill.wrapIfNeeded(t)) ||
                                t
                              );
                            })(t)),
                            (!e.childList && !e.attributes && !e.characterData) ||
                              (e.attributeOldValue && !e.attributes) ||
                              (e.attributeFilter &&
                                e.attributeFilter.length &&
                                !e.attributes) ||
                              (e.characterDataOldValue && !e.characterData))
                          )
                            throw new SyntaxError();
                          var n,
                            s = i.get(t);
                          s || i.set(t, (s = []));
                          for (var r = 0; r < s.length; r++)
                            if (s[r].observer === this) {
                              (n = s[r]).removeListeners(), (n.options = e);
                              break;
                            }
                          n || ((n = new v(this, t, e)), s.push(n), this.nodes_.push(t)),
                            n.addListeners();
                        },
                        disconnect: function () {
                          this.nodes_.forEach(function (t) {
                            for (var e = i.get(t), n = 0; n < e.length; n++) {
                              var s = e[n];
                              if (s.observer === this) {
                                s.removeListeners(), e.splice(n, 1);
                                break;
                              }
                            }
                          }, this),
                            (this.records_ = []);
                        },
                        takeRecords: function () {
                          var t = this.records_;
                          return (this.records_ = []), t;
                        },
                      }),
                        (v.prototype = {
                          enqueue: function (t) {
                            var i = this.observer.records_,
                              n = i.length;
                            if (i.length > 0) {
                              var s = i[n - 1],
                                r = m(s, t);
                              if (r) return void (i[n - 1] = r);
                            } else
                              !(function (t) {
                                l.push(t), o || ((o = !0), e(u));
                              })(this.observer);
                            i[n] = t;
                          },
                          addListeners: function () {
                            this.addListeners_(this.target);
                          },
                          addListeners_: function (t) {
                            var e = this.options;
                            e.attributes &&
                              t.addEventListener('DOMAttrModified', this, !0),
                              e.characterData &&
                                t.addEventListener('DOMCharacterDataModified', this, !0),
                              e.childList &&
                                t.addEventListener('DOMNodeInserted', this, !0),
                              (e.childList || e.subtree) &&
                                t.addEventListener('DOMNodeRemoved', this, !0);
                          },
                          removeListeners: function () {
                            this.removeListeners_(this.target);
                          },
                          removeListeners_: function (t) {
                            var e = this.options;
                            e.attributes &&
                              t.removeEventListener('DOMAttrModified', this, !0),
                              e.characterData &&
                                t.removeEventListener(
                                  'DOMCharacterDataModified',
                                  this,
                                  !0
                                ),
                              e.childList &&
                                t.removeEventListener('DOMNodeInserted', this, !0),
                              (e.childList || e.subtree) &&
                                t.removeEventListener('DOMNodeRemoved', this, !0);
                          },
                          addTransientObserver: function (t) {
                            if (t !== this.target) {
                              this.addListeners_(t), this.transientObservedNodes.push(t);
                              var e = i.get(t);
                              e || i.set(t, (e = [])), e.push(this);
                            }
                          },
                          removeTransientObservers: function () {
                            var t = this.transientObservedNodes;
                            (this.transientObservedNodes = []),
                              t.forEach(function (t) {
                                this.removeListeners_(t);
                                for (var e = i.get(t), n = 0; n < e.length; n++)
                                  if (e[n] === this) {
                                    e.splice(n, 1);
                                    break;
                                  }
                              }, this);
                          },
                          handleEvent: function (t) {
                            switch ((t.stopImmediatePropagation(), t.type)) {
                              case 'DOMAttrModified':
                                var e = t.attrName,
                                  i = t.relatedNode.namespaceURI,
                                  n = t.target,
                                  s = new f('attributes', n);
                                (s.attributeName = e), (s.attributeNamespace = i);
                                var o =
                                  t.attrChange === MutationEvent.ADDITION
                                    ? null
                                    : t.prevValue;
                                d(n, function (t) {
                                  if (
                                    t.attributes &&
                                    (!t.attributeFilter ||
                                      !t.attributeFilter.length ||
                                      -1 !== t.attributeFilter.indexOf(e) ||
                                      -1 !== t.attributeFilter.indexOf(i))
                                  )
                                    return t.attributeOldValue ? g(o) : s;
                                });
                                break;
                              case 'DOMCharacterDataModified':
                                var n = t.target,
                                  s = f('characterData', n),
                                  o = t.prevValue;
                                d(n, function (t) {
                                  if (t.characterData)
                                    return t.characterDataOldValue ? g(o) : s;
                                });
                                break;
                              case 'DOMNodeRemoved':
                                this.addTransientObserver(t.target);
                              case 'DOMNodeInserted':
                                var l,
                                  c,
                                  u = t.target;
                                'DOMNodeInserted' === t.type
                                  ? ((l = [u]), (c = []))
                                  : ((l = []), (c = [u]));
                                var h = u.previousSibling,
                                  p = u.nextSibling,
                                  s = f('childList', t.target.parentNode);
                                (s.addedNodes = l),
                                  (s.removedNodes = c),
                                  (s.previousSibling = h),
                                  (s.nextSibling = p),
                                  d(t.relatedNode, function (t) {
                                    if (t.childList) return s;
                                  });
                            }
                            r = a = void 0;
                          },
                        }),
                        (t.JsMutationObserver = h),
                        t.MutationObserver ||
                          ((t.MutationObserver = h), (h._isPolyfilled = !0));
                    }
                    function u() {
                      o = !1;
                      var t = l;
                      (l = []),
                        t.sort(function (t, e) {
                          return t.uid_ - e.uid_;
                        });
                      var e = !1;
                      t.forEach(function (t) {
                        var n = t.takeRecords();
                        !(function (t) {
                          t.nodes_.forEach(function (e) {
                            var n = i.get(e);
                            n &&
                              n.forEach(function (e) {
                                e.observer === t && e.removeTransientObservers();
                              });
                          });
                        })(t),
                          n.length && (t.callback_(n, t), (e = !0));
                      }),
                        e && u();
                    }
                    function d(t, e) {
                      for (var n = t; n; n = n.parentNode) {
                        var s = i.get(n);
                        if (s)
                          for (var r = 0; r < s.length; r++) {
                            var a = s[r],
                              o = a.options;
                            if (n === t || o.subtree) {
                              var l = e(o);
                              l && a.enqueue(l);
                            }
                          }
                      }
                    }
                    function h(t) {
                      (this.callback_ = t),
                        (this.nodes_ = []),
                        (this.records_ = []),
                        (this.uid_ = ++c);
                    }
                    function p(t, e) {
                      (this.type = t),
                        (this.target = e),
                        (this.addedNodes = []),
                        (this.removedNodes = []),
                        (this.previousSibling = null),
                        (this.nextSibling = null),
                        (this.attributeName = null),
                        (this.attributeNamespace = null),
                        (this.oldValue = null);
                    }
                    function f(t, e) {
                      return (r = new p(t, e));
                    }
                    function g(t) {
                      return (
                        a ||
                        (((a = (function (t) {
                          var e = new p(t.type, t.target);
                          return (
                            (e.addedNodes = t.addedNodes.slice()),
                            (e.removedNodes = t.removedNodes.slice()),
                            (e.previousSibling = t.previousSibling),
                            (e.nextSibling = t.nextSibling),
                            (e.attributeName = t.attributeName),
                            (e.attributeNamespace = t.attributeNamespace),
                            (e.oldValue = t.oldValue),
                            e
                          );
                        })(r)).oldValue = t),
                        a)
                      );
                    }
                    function m(t, e) {
                      return t === e
                        ? t
                        : a &&
                          (function (t) {
                            return t === a || t === r;
                          })(t)
                        ? a
                        : null;
                    }
                    function v(t, e, i) {
                      (this.observer = t),
                        (this.target = e),
                        (this.options = i),
                        (this.transientObservedNodes = []);
                    }
                  })(t);
              })(window);
            })
              ? n.apply(e, s)
              : n) || (t.exports = r);
    },
    function (t, e, i) {
      var n, s, r;
      (s = [e, t, i(6), i(10), i(7)]),
        void 0 ===
          (r =
            'function' ==
            typeof (n = function (t, e, i, n, s) {
              'use strict';
              var r = i.TYPE_ATTRIBUTE,
                a = i.TYPE_CLASSNAME,
                o = i.TYPE_ELEMENT,
                l = (function (t) {
                  return t && t.__esModule ? t.default : t;
                })(n),
                c = s.hasOwn,
                u = s.isValidNativeCustomElementName,
                d = s.supportsNativeCustomElements;
              e.exports = {
                clear: function () {
                  return (l.registry = {}), this;
                },
                get: function (t) {
                  return c(l.registry, t) && l.registry[t];
                },
                getForElement: function (t) {
                  var e,
                    i,
                    n = t.attributes,
                    s = n.length,
                    c = [],
                    u = n.is,
                    d = u && (u.value || u.nodeValue),
                    h = (t.tagName || t.localName).toLowerCase(),
                    p = d || h;
                  this.isType(p, o) &&
                    ((e = l.registry[p]),
                    (i = e.extends),
                    d ? h === i && c.push(e) : i || c.push(e));
                  for (var f = 0; f < s; f++) {
                    var g = n[f].nodeName;
                    this.isType(g, r) &&
                      ((e = l.registry[g]), ((i = e.extends) && h !== i) || c.push(e));
                  }
                  for (
                    var m = (function (t) {
                        var e = t.classList;
                        if (e) return e;
                        var i = t.attributes;
                        return (i.class && i.class.nodeValue.split(/\s+/)) || [];
                      })(t),
                      v = m.length,
                      b = 0;
                    b < v;
                    b++
                  ) {
                    var y = m[b];
                    this.isType(y, a) &&
                      ((e = l.registry[y]), ((i = e.extends) && h !== i) || c.push(e));
                  }
                  return c;
                },
                isType: function (t, e) {
                  var i = this.get(t);
                  return i && i.type === e;
                },
                isNativeCustomElement: function (t) {
                  return d() && this.isType(t, o) && u(t);
                },
                set: function (t, e) {
                  if (c(l.registry, t))
                    throw new Error(
                      'A component definition of type "' +
                        e.type +
                        '" with the ID of "' +
                        t +
                        '" already exists.'
                    );
                  return (l.registry[t] = e), this;
                },
              };
            })
              ? n.apply(e, s)
              : n) || (t.exports = r);
    },
    function (t, e) {
      var i;
      i = (function () {
        return this;
      })();
      try {
        i = i || new Function('return this')();
      } catch (t) {
        'object' == typeof window && (i = window);
      }
      t.exports = i;
    },
    function (t, e, i) {
      var n, s, r;
      (s = [i(1), i(4)]),
        void 0 ===
          (r =
            'function' ==
            typeof (n = function (t) {
              return (t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()));
            })
              ? n.apply(e, s)
              : n) || (t.exports = r);
    },
    function (t, e, i) {
      var n, s, r;
      (s = [i(1), i(4)]),
        void 0 ===
          (r =
            'function' ==
            typeof (n = function (t) {
              return t.extend(t.expr[':'], {
                data: t.expr.createPseudo
                  ? t.expr.createPseudo(function (e) {
                      return function (i) {
                        return !!t.data(i, e);
                      };
                    })
                  : function (e, i, n) {
                      return !!t.data(e, n[3]);
                    },
              });
            })
              ? n.apply(e, s)
              : n) || (t.exports = r);
    },
    function (t, e, i) {
      var n, s, r;
      (s = [i(1), i(4)]),
        void 0 ===
          (r =
            'function' ==
            typeof (n = function (t) {
              return (t.fn.scrollParent = function (e) {
                var i = this.css('position'),
                  n = 'absolute' === i,
                  s = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                  r = this.parents()
                    .filter(function () {
                      var e = t(this);
                      return (
                        (!n || 'static' !== e.css('position')) &&
                        s.test(
                          e.css('overflow') + e.css('overflow-y') + e.css('overflow-x')
                        )
                      );
                    })
                    .eq(0);
                return 'fixed' !== i && r.length
                  ? r
                  : t(this[0].ownerDocument || document);
              });
            })
              ? n.apply(e, s)
              : n) || (t.exports = r);
    },
    function (t, e, i) {
      var n, s;
      !(function (r, a) {
        void 0 === r && void 0 !== window && (r = window),
          (n = [i(1)]),
          void 0 ===
            (s = function (t) {
              return (r.FancyFileInput = (function (t) {
                'use strict';
                var e = /^.*[\\\/]/,
                  i = /\{0\}/gi,
                  n = (function () {
                    var t = 3,
                      e = document.createElement('div'),
                      i = e.getElementsByTagName('i');
                    do {
                      e.innerHTML =
                        '\x3c!--[if gt IE ' + ++t + ']><i></i><![endif]--\x3e';
                    } while (i[0]);
                    return t > 4 ? t : document.documentMode;
                  })();
                function s(e, i) {
                  var n = t(e).data('FancyFileInput');
                  if (n) return n;
                  (i = t.extend({}, s.defaults, i)),
                    (this.el = e),
                    (this.$el = t(e)),
                    (this.$label = this.createLabel(i.buttonText)),
                    this._addLabelText(),
                    (this.$clearButton = t('<button>', {
                      text:
                        this.$label.attr('data-ffi-clearButtonText') || i.clearButtonText,
                      class: 'ffi-clear',
                      type: 'button',
                      tabindex: '-1',
                    })),
                    (this.multipleFileTextPattern =
                      this.$label.attr('data-ffi-multipleFileTextPattern') ||
                      i.multipleFileTextPattern),
                    (this._eventNamespace = '.ffi'),
                    (this.CLASSES = {
                      disabled: 'is-disabled',
                      focused: 'is-focused',
                      active: 'is-active',
                      valid: 'is-valid',
                      invalid: 'is-invalid',
                    }),
                    this[this.isDisabled() ? 'disable' : 'enable'](),
                    (this.isFocused = !1);
                }
                return (
                  (s.defaults = {
                    buttonText: 'Browse…',
                    clearButtonText: 'Clear',
                    multipleFileTextPattern: '{0} files',
                  }),
                  (s.prototype._addLabelText = function () {
                    var e = t('label[for="' + this.el.id + '"]');
                    e.length && this.$el.attr('aria-label', e.text());
                  }),
                  (s.prototype.createLabel = function (e) {
                    var i = this.$el.parent('.ffi[data-ffi-button-text]');
                    return (
                      i.length ||
                        (i = this.$el
                          .wrap(t('<label>', {class: 'ffi', 'data-ffi-button-text': e}))
                          .parent()),
                      i
                    );
                  }),
                  (s.prototype.isDisabled = function () {
                    return this.$el.is(':disabled');
                  }),
                  (s.prototype.formatMultipleFileText = function (t) {
                    return this.multipleFileTextPattern.replace(i, t);
                  }),
                  (s.prototype.bindEvents = function () {
                    this.$el
                      .on(
                        'invalid' + this._eventNamespace,
                        t.proxy(this.checkValidity, this)
                      )
                      .on('change' + this._eventNamespace, t.proxy(this.change, this))
                      .on('keydown' + this._eventNamespace, t.proxy(this.keydown, this))
                      .on(
                        'mousedown' + this._eventNamespace,
                        t.proxy(this.mousedown, this)
                      )
                      .on('mouseup' + this._eventNamespace, t.proxy(this.mouseup, this))
                      .on('focus' + this._eventNamespace, t.proxy(this.focus, this))
                      .on('blur' + this._eventNamespace, t.proxy(this.blur, this)),
                      this.$clearButton.on(
                        'click' + this._eventNamespace,
                        t.proxy(this.clear, this)
                      );
                  }),
                  (s.prototype.unbindEvents = function () {
                    this.$el.off(this._eventNamespace),
                      this.$clearButton.off(this._eventNamespace);
                  }),
                  (s.prototype.fireEvent = function (t) {
                    this.$el.trigger(t + this._eventNamespace);
                  }),
                  (s.prototype.enable = function () {
                    this.bindEvents(),
                      this.$el.prop('disabled', !1),
                      this.$label.removeClass(this.CLASSES.disabled);
                  }),
                  (s.prototype.disable = function () {
                    this.unbindEvents(),
                      this.$el.prop('disabled', !0),
                      this.$label.addClass(this.CLASSES.disabled);
                  }),
                  (s.prototype.clear = function () {
                    return (
                      this.$el.wrap('<form>').closest('form').get(0).reset(),
                      this.$el.unwrap(),
                      (this.el.value = ''),
                      this.change(),
                      !1
                    );
                  }),
                  (s.prototype.focus = function () {
                    var t = this;
                    this.$label.addClass(this.CLASSES.focused),
                      n &&
                        !this.isFocused &&
                        ((this.isFocused = !0),
                        setTimeout(function () {
                          t.$el.blur(), t.$el.focus();
                        }, 0));
                  }),
                  (s.prototype.blur = function () {
                    (n && this.isFocused) ||
                      (this.$label.removeClass(this.CLASSES.focused),
                      (this.isFocused = !1));
                  }),
                  (s.prototype.mousedown = function () {
                    this.$label.addClass(this.CLASSES.active);
                  }),
                  (s.prototype.mouseup = function () {
                    this.$label.removeClass(this.CLASSES.active);
                  }),
                  (s.prototype.keydown = function (t) {
                    var e = t.which;
                    if (
                      ((8 !== e && 46 !== e) || (this.clear(), t.preventDefault()),
                      n && 9 === e)
                    ) {
                      var i = this;
                      (this.isFocused = !1),
                        this.$el.prop('disabled', !0),
                        setTimeout(function () {
                          i.$el.prop('disabled', !1).blur();
                        }, 0);
                    }
                  }),
                  (s.prototype.checkValidity = function () {
                    if (this.el.required) {
                      var t = this.$el.is(':invalid');
                      this.$label
                        .toggleClass(this.CLASSES.invalid, t)
                        .toggleClass(this.CLASSES.valid, !t);
                    }
                  }),
                  (s.prototype.change = function () {
                    var t,
                      i = '';
                    this.checkValidity(),
                      (t =
                        this.el.multiple && this.el.files.length > 1
                          ? this.formatMultipleFileText(this.el.files.length)
                          : this.el.value).length
                        ? ((i = t.replace(e, '')),
                          this.$clearButton.appendTo(this.$label))
                        : this.$clearButton.detach(),
                      this.$el.focus(),
                      this.setFieldText(i),
                      this.fireEvent('value-changed');
                  }),
                  (s.prototype.setFieldText = function (t) {
                    t.length
                      ? (this.$label.attr('data-ffi-value', t),
                        this.fireEvent('value-added'))
                      : (this.$label.removeAttr('data-ffi-value'),
                        this.fireEvent('value-cleared'));
                  }),
                  (t.fn.fancyFileInput = function (e) {
                    return this.each(function () {
                      var i = new s(this, e);
                      t(this).data('FancyFileInput', i);
                    });
                  }),
                  s
                );
              })(t));
            }.apply(e, n)) || (t.exports = s);
      })(this);
    },
    function (t, e, i) {
      var n, s, r;
      (s = [i(1), i(4), i(79)]),
        void 0 ===
          (r =
            'function' ==
            typeof (n = function (t) {
              var e;
              function i() {
                (this._curInst = null),
                  (this._keyEvent = !1),
                  (this._disabledInputs = []),
                  (this._datepickerShowing = !1),
                  (this._inDialog = !1),
                  (this._mainDivId = 'ui-datepicker-div'),
                  (this._inlineClass = 'ui-datepicker-inline'),
                  (this._appendClass = 'ui-datepicker-append'),
                  (this._triggerClass = 'ui-datepicker-trigger'),
                  (this._dialogClass = 'ui-datepicker-dialog'),
                  (this._disableClass = 'ui-datepicker-disabled'),
                  (this._unselectableClass = 'ui-datepicker-unselectable'),
                  (this._currentClass = 'ui-datepicker-current-day'),
                  (this._dayOverClass = 'ui-datepicker-days-cell-over'),
                  (this.regional = []),
                  (this.regional[''] = {
                    closeText: 'Done',
                    prevText: 'Prev',
                    nextText: 'Next',
                    currentText: 'Today',
                    monthNames: [
                      'January',
                      'February',
                      'March',
                      'April',
                      'May',
                      'June',
                      'July',
                      'August',
                      'September',
                      'October',
                      'November',
                      'December',
                    ],
                    monthNamesShort: [
                      'Jan',
                      'Feb',
                      'Mar',
                      'Apr',
                      'May',
                      'Jun',
                      'Jul',
                      'Aug',
                      'Sep',
                      'Oct',
                      'Nov',
                      'Dec',
                    ],
                    dayNames: [
                      'Sunday',
                      'Monday',
                      'Tuesday',
                      'Wednesday',
                      'Thursday',
                      'Friday',
                      'Saturday',
                    ],
                    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                    dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                    weekHeader: 'Wk',
                    dateFormat: 'mm/dd/yy',
                    firstDay: 0,
                    isRTL: !1,
                    showMonthAfterYear: !1,
                    yearSuffix: '',
                  }),
                  (this._defaults = {
                    showOn: 'focus',
                    showAnim: 'fadeIn',
                    showOptions: {},
                    defaultDate: null,
                    appendText: '',
                    buttonText: '...',
                    buttonImage: '',
                    buttonImageOnly: !1,
                    hideIfNoPrevNext: !1,
                    navigationAsDateFormat: !1,
                    gotoCurrent: !1,
                    changeMonth: !1,
                    changeYear: !1,
                    yearRange: 'c-10:c+10',
                    showOtherMonths: !1,
                    selectOtherMonths: !1,
                    showWeek: !1,
                    calculateWeek: this.iso8601Week,
                    shortYearCutoff: '+10',
                    minDate: null,
                    maxDate: null,
                    duration: 'fast',
                    beforeShowDay: null,
                    beforeShow: null,
                    onSelect: null,
                    onChangeMonthYear: null,
                    onClose: null,
                    numberOfMonths: 1,
                    showCurrentAtPos: 0,
                    stepMonths: 1,
                    stepBigMonths: 12,
                    altField: '',
                    altFormat: '',
                    constrainInput: !0,
                    showButtonPanel: !1,
                    autoSize: !1,
                    disabled: !1,
                  }),
                  t.extend(this._defaults, this.regional['']),
                  (this.regional.en = t.extend(!0, {}, this.regional[''])),
                  (this.regional['en-US'] = t.extend(!0, {}, this.regional.en)),
                  (this.dpDiv = n(
                    t(
                      "<div id='" +
                        this._mainDivId +
                        "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
                    )
                  ));
              }
              function n(e) {
                var i =
                  'button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a';
                return e
                  .on('mouseout', i, function () {
                    t(this).removeClass('ui-state-hover'),
                      -1 !== this.className.indexOf('ui-datepicker-prev') &&
                        t(this).removeClass('ui-datepicker-prev-hover'),
                      -1 !== this.className.indexOf('ui-datepicker-next') &&
                        t(this).removeClass('ui-datepicker-next-hover');
                  })
                  .on('mouseover', i, s);
              }
              function s() {
                t.datepicker._isDisabledDatepicker(
                  e.inline ? e.dpDiv.parent()[0] : e.input[0]
                ) ||
                  (t(this)
                    .parents('.ui-datepicker-calendar')
                    .find('a')
                    .removeClass('ui-state-hover'),
                  t(this).addClass('ui-state-hover'),
                  -1 !== this.className.indexOf('ui-datepicker-prev') &&
                    t(this).addClass('ui-datepicker-prev-hover'),
                  -1 !== this.className.indexOf('ui-datepicker-next') &&
                    t(this).addClass('ui-datepicker-next-hover'));
              }
              function r(e, i) {
                for (var n in (t.extend(e, i), i)) null == i[n] && (e[n] = i[n]);
                return e;
              }
              return (
                t.extend(t.ui, {datepicker: {version: '1.12.1'}}),
                t.extend(i.prototype, {
                  markerClassName: 'hasDatepicker',
                  maxRows: 4,
                  _widgetDatepicker: function () {
                    return this.dpDiv;
                  },
                  setDefaults: function (t) {
                    return r(this._defaults, t || {}), this;
                  },
                  _attachDatepicker: function (e, i) {
                    var n, s, r;
                    (s = 'div' === (n = e.nodeName.toLowerCase()) || 'span' === n),
                      e.id || ((this.uuid += 1), (e.id = 'dp' + this.uuid)),
                      ((r = this._newInst(t(e), s)).settings = t.extend({}, i || {})),
                      'input' === n
                        ? this._connectDatepicker(e, r)
                        : s && this._inlineDatepicker(e, r);
                  },
                  _newInst: function (e, i) {
                    return {
                      id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, '\\\\$1'),
                      input: e,
                      selectedDay: 0,
                      selectedMonth: 0,
                      selectedYear: 0,
                      drawMonth: 0,
                      drawYear: 0,
                      inline: i,
                      dpDiv: i
                        ? n(
                            t(
                              "<div class='" +
                                this._inlineClass +
                                " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
                            )
                          )
                        : this.dpDiv,
                    };
                  },
                  _connectDatepicker: function (e, i) {
                    var n = t(e);
                    (i.append = t([])),
                      (i.trigger = t([])),
                      n.hasClass(this.markerClassName) ||
                        (this._attachments(n, i),
                        n
                          .addClass(this.markerClassName)
                          .on('keydown', this._doKeyDown)
                          .on('keypress', this._doKeyPress)
                          .on('keyup', this._doKeyUp),
                        this._autoSize(i),
                        t.data(e, 'datepicker', i),
                        i.settings.disabled && this._disableDatepicker(e));
                  },
                  _attachments: function (e, i) {
                    var n,
                      s,
                      r,
                      a = this._get(i, 'appendText'),
                      o = this._get(i, 'isRTL');
                    i.append && i.append.remove(),
                      a &&
                        ((i.append = t(
                          "<span class='" + this._appendClass + "'>" + a + '</span>'
                        )),
                        e[o ? 'before' : 'after'](i.append)),
                      e.off('focus', this._showDatepicker),
                      i.trigger && i.trigger.remove(),
                      ('focus' !== (n = this._get(i, 'showOn')) && 'both' !== n) ||
                        e.on('focus', this._showDatepicker),
                      ('button' !== n && 'both' !== n) ||
                        ((s = this._get(i, 'buttonText')),
                        (r = this._get(i, 'buttonImage')),
                        (i.trigger = t(
                          this._get(i, 'buttonImageOnly')
                            ? t('<img/>')
                                .addClass(this._triggerClass)
                                .attr({src: r, alt: s, title: s})
                            : t("<button type='button'></button>")
                                .addClass(this._triggerClass)
                                .html(
                                  r ? t('<img/>').attr({src: r, alt: s, title: s}) : s
                                )
                        )),
                        e[o ? 'before' : 'after'](i.trigger),
                        i.trigger.on('click', function () {
                          return (
                            t.datepicker._datepickerShowing &&
                            t.datepicker._lastInput === e[0]
                              ? t.datepicker._hideDatepicker()
                              : t.datepicker._datepickerShowing &&
                                t.datepicker._lastInput !== e[0]
                              ? (t.datepicker._hideDatepicker(),
                                t.datepicker._showDatepicker(e[0]))
                              : t.datepicker._showDatepicker(e[0]),
                            !1
                          );
                        }));
                  },
                  _autoSize: function (t) {
                    if (this._get(t, 'autoSize') && !t.inline) {
                      var e,
                        i,
                        n,
                        s,
                        r = new Date(2009, 11, 20),
                        a = this._get(t, 'dateFormat');
                      a.match(/[DM]/) &&
                        ((e = function (t) {
                          for (i = 0, n = 0, s = 0; s < t.length; s++)
                            t[s].length > i && ((i = t[s].length), (n = s));
                          return n;
                        }),
                        r.setMonth(
                          e(
                            this._get(t, a.match(/MM/) ? 'monthNames' : 'monthNamesShort')
                          )
                        ),
                        r.setDate(
                          e(this._get(t, a.match(/DD/) ? 'dayNames' : 'dayNamesShort')) +
                            20 -
                            r.getDay()
                        )),
                        t.input.attr('size', this._formatDate(t, r).length);
                    }
                  },
                  _inlineDatepicker: function (e, i) {
                    var n = t(e);
                    n.hasClass(this.markerClassName) ||
                      (n.addClass(this.markerClassName).append(i.dpDiv),
                      t.data(e, 'datepicker', i),
                      this._setDate(i, this._getDefaultDate(i), !0),
                      this._updateDatepicker(i),
                      this._updateAlternate(i),
                      i.settings.disabled && this._disableDatepicker(e),
                      i.dpDiv.css('display', 'block'));
                  },
                  _dialogDatepicker: function (e, i, n, s, a) {
                    var o,
                      l,
                      c,
                      u,
                      d,
                      h = this._dialogInst;
                    return (
                      h ||
                        ((this.uuid += 1),
                        (o = 'dp' + this.uuid),
                        (this._dialogInput = t(
                          "<input type='text' id='" +
                            o +
                            "' style='position: absolute; top: -100px; width: 0px;'/>"
                        )),
                        this._dialogInput.on('keydown', this._doKeyDown),
                        t('body').append(this._dialogInput),
                        ((h = this._dialogInst =
                          this._newInst(this._dialogInput, !1)).settings = {}),
                        t.data(this._dialogInput[0], 'datepicker', h)),
                      r(h.settings, s || {}),
                      (i = i && i.constructor === Date ? this._formatDate(h, i) : i),
                      this._dialogInput.val(i),
                      (this._pos = a ? (a.length ? a : [a.pageX, a.pageY]) : null),
                      this._pos ||
                        ((l = document.documentElement.clientWidth),
                        (c = document.documentElement.clientHeight),
                        (u =
                          document.documentElement.scrollLeft ||
                          document.body.scrollLeft),
                        (d =
                          document.documentElement.scrollTop || document.body.scrollTop),
                        (this._pos = [l / 2 - 100 + u, c / 2 - 150 + d])),
                      this._dialogInput
                        .css('left', this._pos[0] + 20 + 'px')
                        .css('top', this._pos[1] + 'px'),
                      (h.settings.onSelect = n),
                      (this._inDialog = !0),
                      this.dpDiv.addClass(this._dialogClass),
                      this._showDatepicker(this._dialogInput[0]),
                      t.blockUI && t.blockUI(this.dpDiv),
                      t.data(this._dialogInput[0], 'datepicker', h),
                      this
                    );
                  },
                  _destroyDatepicker: function (i) {
                    var n,
                      s = t(i),
                      r = t.data(i, 'datepicker');
                    s.hasClass(this.markerClassName) &&
                      ((n = i.nodeName.toLowerCase()),
                      t.removeData(i, 'datepicker'),
                      'input' === n
                        ? (r.append.remove(),
                          r.trigger.remove(),
                          s
                            .removeClass(this.markerClassName)
                            .off('focus', this._showDatepicker)
                            .off('keydown', this._doKeyDown)
                            .off('keypress', this._doKeyPress)
                            .off('keyup', this._doKeyUp))
                        : ('div' !== n && 'span' !== n) ||
                          s.removeClass(this.markerClassName).empty(),
                      e === r && (e = null));
                  },
                  _enableDatepicker: function (e) {
                    var i,
                      n,
                      s = t(e),
                      r = t.data(e, 'datepicker');
                    s.hasClass(this.markerClassName) &&
                      ('input' === (i = e.nodeName.toLowerCase())
                        ? ((e.disabled = !1),
                          r.trigger
                            .filter('button')
                            .each(function () {
                              this.disabled = !1;
                            })
                            .end()
                            .filter('img')
                            .css({opacity: '1.0', cursor: ''}))
                        : ('div' !== i && 'span' !== i) ||
                          ((n = s.children('.' + this._inlineClass))
                            .children()
                            .removeClass('ui-state-disabled'),
                          n
                            .find('select.ui-datepicker-month, select.ui-datepicker-year')
                            .prop('disabled', !1)),
                      (this._disabledInputs = t.map(this._disabledInputs, function (t) {
                        return t === e ? null : t;
                      })));
                  },
                  _disableDatepicker: function (e) {
                    var i,
                      n,
                      s = t(e),
                      r = t.data(e, 'datepicker');
                    s.hasClass(this.markerClassName) &&
                      ('input' === (i = e.nodeName.toLowerCase())
                        ? ((e.disabled = !0),
                          r.trigger
                            .filter('button')
                            .each(function () {
                              this.disabled = !0;
                            })
                            .end()
                            .filter('img')
                            .css({opacity: '0.5', cursor: 'default'}))
                        : ('div' !== i && 'span' !== i) ||
                          ((n = s.children('.' + this._inlineClass))
                            .children()
                            .addClass('ui-state-disabled'),
                          n
                            .find('select.ui-datepicker-month, select.ui-datepicker-year')
                            .prop('disabled', !0)),
                      (this._disabledInputs = t.map(this._disabledInputs, function (t) {
                        return t === e ? null : t;
                      })),
                      (this._disabledInputs[this._disabledInputs.length] = e));
                  },
                  _isDisabledDatepicker: function (t) {
                    if (!t) return !1;
                    for (var e = 0; e < this._disabledInputs.length; e++)
                      if (this._disabledInputs[e] === t) return !0;
                    return !1;
                  },
                  _getInst: function (e) {
                    try {
                      return t.data(e, 'datepicker');
                    } catch (t) {
                      throw 'Missing instance data for this datepicker';
                    }
                  },
                  _optionDatepicker: function (e, i, n) {
                    var s,
                      a,
                      o,
                      l,
                      c = this._getInst(e);
                    if (2 === arguments.length && 'string' == typeof i)
                      return 'defaults' === i
                        ? t.extend({}, t.datepicker._defaults)
                        : c
                        ? 'all' === i
                          ? t.extend({}, c.settings)
                          : this._get(c, i)
                        : null;
                    (s = i || {}),
                      'string' == typeof i && ((s = {})[i] = n),
                      c &&
                        (this._curInst === c && this._hideDatepicker(),
                        (a = this._getDateDatepicker(e, !0)),
                        (o = this._getMinMaxDate(c, 'min')),
                        (l = this._getMinMaxDate(c, 'max')),
                        r(c.settings, s),
                        null !== o &&
                          void 0 !== s.dateFormat &&
                          void 0 === s.minDate &&
                          (c.settings.minDate = this._formatDate(c, o)),
                        null !== l &&
                          void 0 !== s.dateFormat &&
                          void 0 === s.maxDate &&
                          (c.settings.maxDate = this._formatDate(c, l)),
                        'disabled' in s &&
                          (s.disabled
                            ? this._disableDatepicker(e)
                            : this._enableDatepicker(e)),
                        this._attachments(t(e), c),
                        this._autoSize(c),
                        this._setDate(c, a),
                        this._updateAlternate(c),
                        this._updateDatepicker(c));
                  },
                  _changeDatepicker: function (t, e, i) {
                    this._optionDatepicker(t, e, i);
                  },
                  _refreshDatepicker: function (t) {
                    var e = this._getInst(t);
                    e && this._updateDatepicker(e);
                  },
                  _setDateDatepicker: function (t, e) {
                    var i = this._getInst(t);
                    i &&
                      (this._setDate(i, e),
                      this._updateDatepicker(i),
                      this._updateAlternate(i));
                  },
                  _getDateDatepicker: function (t, e) {
                    var i = this._getInst(t);
                    return (
                      i && !i.inline && this._setDateFromField(i, e),
                      i ? this._getDate(i) : null
                    );
                  },
                  _doKeyDown: function (e) {
                    var i,
                      n,
                      s,
                      r = t.datepicker._getInst(e.target),
                      a = !0,
                      o = r.dpDiv.is('.ui-datepicker-rtl');
                    if (((r._keyEvent = !0), t.datepicker._datepickerShowing))
                      switch (e.keyCode) {
                        case 9:
                          t.datepicker._hideDatepicker(), (a = !1);
                          break;
                        case 13:
                          return (
                            (s = t(
                              'td.' +
                                t.datepicker._dayOverClass +
                                ':not(.' +
                                t.datepicker._currentClass +
                                ')',
                              r.dpDiv
                            ))[0] &&
                              t.datepicker._selectDay(
                                e.target,
                                r.selectedMonth,
                                r.selectedYear,
                                s[0]
                              ),
                            (i = t.datepicker._get(r, 'onSelect'))
                              ? ((n = t.datepicker._formatDate(r)),
                                i.apply(r.input ? r.input[0] : null, [n, r]))
                              : t.datepicker._hideDatepicker(),
                            !1
                          );
                        case 27:
                          t.datepicker._hideDatepicker();
                          break;
                        case 33:
                          t.datepicker._adjustDate(
                            e.target,
                            e.ctrlKey
                              ? -t.datepicker._get(r, 'stepBigMonths')
                              : -t.datepicker._get(r, 'stepMonths'),
                            'M'
                          );
                          break;
                        case 34:
                          t.datepicker._adjustDate(
                            e.target,
                            e.ctrlKey
                              ? +t.datepicker._get(r, 'stepBigMonths')
                              : +t.datepicker._get(r, 'stepMonths'),
                            'M'
                          );
                          break;
                        case 35:
                          (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target),
                            (a = e.ctrlKey || e.metaKey);
                          break;
                        case 36:
                          (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target),
                            (a = e.ctrlKey || e.metaKey);
                          break;
                        case 37:
                          (e.ctrlKey || e.metaKey) &&
                            t.datepicker._adjustDate(e.target, o ? 1 : -1, 'D'),
                            (a = e.ctrlKey || e.metaKey),
                            e.originalEvent.altKey &&
                              t.datepicker._adjustDate(
                                e.target,
                                e.ctrlKey
                                  ? -t.datepicker._get(r, 'stepBigMonths')
                                  : -t.datepicker._get(r, 'stepMonths'),
                                'M'
                              );
                          break;
                        case 38:
                          (e.ctrlKey || e.metaKey) &&
                            t.datepicker._adjustDate(e.target, -7, 'D'),
                            (a = e.ctrlKey || e.metaKey);
                          break;
                        case 39:
                          (e.ctrlKey || e.metaKey) &&
                            t.datepicker._adjustDate(e.target, o ? -1 : 1, 'D'),
                            (a = e.ctrlKey || e.metaKey),
                            e.originalEvent.altKey &&
                              t.datepicker._adjustDate(
                                e.target,
                                e.ctrlKey
                                  ? +t.datepicker._get(r, 'stepBigMonths')
                                  : +t.datepicker._get(r, 'stepMonths'),
                                'M'
                              );
                          break;
                        case 40:
                          (e.ctrlKey || e.metaKey) &&
                            t.datepicker._adjustDate(e.target, 7, 'D'),
                            (a = e.ctrlKey || e.metaKey);
                          break;
                        default:
                          a = !1;
                      }
                    else
                      36 === e.keyCode && e.ctrlKey
                        ? t.datepicker._showDatepicker(this)
                        : (a = !1);
                    a && (e.preventDefault(), e.stopPropagation());
                  },
                  _doKeyPress: function (e) {
                    var i,
                      n,
                      s = t.datepicker._getInst(e.target);
                    if (t.datepicker._get(s, 'constrainInput'))
                      return (
                        (i = t.datepicker._possibleChars(
                          t.datepicker._get(s, 'dateFormat')
                        )),
                        (n = String.fromCharCode(
                          null == e.charCode ? e.keyCode : e.charCode
                        )),
                        e.ctrlKey || e.metaKey || n < ' ' || !i || i.indexOf(n) > -1
                      );
                  },
                  _doKeyUp: function (e) {
                    var i = t.datepicker._getInst(e.target);
                    if (i.input.val() !== i.lastVal)
                      try {
                        t.datepicker.parseDate(
                          t.datepicker._get(i, 'dateFormat'),
                          i.input ? i.input.val() : null,
                          t.datepicker._getFormatConfig(i)
                        ) &&
                          (t.datepicker._setDateFromField(i),
                          t.datepicker._updateAlternate(i),
                          t.datepicker._updateDatepicker(i));
                      } catch (t) {}
                    return !0;
                  },
                  _showDatepicker: function (e) {
                    var i, n, s, a, o, l, c;
                    'input' !== (e = e.target || e).nodeName.toLowerCase() &&
                      (e = t('input', e.parentNode)[0]),
                      t.datepicker._isDisabledDatepicker(e) ||
                        t.datepicker._lastInput === e ||
                        ((i = t.datepicker._getInst(e)),
                        t.datepicker._curInst &&
                          t.datepicker._curInst !== i &&
                          (t.datepicker._curInst.dpDiv.stop(!0, !0),
                          i &&
                            t.datepicker._datepickerShowing &&
                            t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),
                        !1 !==
                          (s = (n = t.datepicker._get(i, 'beforeShow'))
                            ? n.apply(e, [e, i])
                            : {}) &&
                          (r(i.settings, s),
                          (i.lastVal = null),
                          (t.datepicker._lastInput = e),
                          t.datepicker._setDateFromField(i),
                          t.datepicker._inDialog && (e.value = ''),
                          t.datepicker._pos ||
                            ((t.datepicker._pos = t.datepicker._findPos(e)),
                            (t.datepicker._pos[1] += e.offsetHeight)),
                          (a = !1),
                          t(e)
                            .parents()
                            .each(function () {
                              return !(a |= 'fixed' === t(this).css('position'));
                            }),
                          (o = {left: t.datepicker._pos[0], top: t.datepicker._pos[1]}),
                          (t.datepicker._pos = null),
                          i.dpDiv.empty(),
                          i.dpDiv.css({
                            position: 'absolute',
                            display: 'block',
                            top: '-1000px',
                          }),
                          t.datepicker._updateDatepicker(i),
                          (o = t.datepicker._checkOffset(i, o, a)),
                          i.dpDiv.css({
                            position:
                              t.datepicker._inDialog && t.blockUI
                                ? 'static'
                                : a
                                ? 'fixed'
                                : 'absolute',
                            display: 'none',
                            left: o.left + 'px',
                            top: o.top + 'px',
                          }),
                          i.inline ||
                            ((l = t.datepicker._get(i, 'showAnim')),
                            (c = t.datepicker._get(i, 'duration')),
                            i.dpDiv.css(
                              'z-index',
                              (function (t) {
                                for (var e, i; t.length && t[0] !== document; ) {
                                  if (
                                    ('absolute' === (e = t.css('position')) ||
                                      'relative' === e ||
                                      'fixed' === e) &&
                                    ((i = parseInt(t.css('zIndex'), 10)),
                                    !isNaN(i) && 0 !== i)
                                  )
                                    return i;
                                  t = t.parent();
                                }
                                return 0;
                              })(t(e)) + 1
                            ),
                            (t.datepicker._datepickerShowing = !0),
                            t.effects && t.effects.effect[l]
                              ? i.dpDiv.show(l, t.datepicker._get(i, 'showOptions'), c)
                              : i.dpDiv[l || 'show'](l ? c : null),
                            t.datepicker._shouldFocusInput(i) && i.input.trigger('focus'),
                            (t.datepicker._curInst = i))));
                  },
                  _updateDatepicker: function (i) {
                    (this.maxRows = 4),
                      (e = i),
                      i.dpDiv.empty().append(this._generateHTML(i)),
                      this._attachHandlers(i);
                    var n,
                      r = this._getNumberOfMonths(i),
                      a = r[1],
                      o = i.dpDiv.find('.' + this._dayOverClass + ' a');
                    o.length > 0 && s.apply(o.get(0)),
                      i.dpDiv
                        .removeClass(
                          'ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4'
                        )
                        .width(''),
                      a > 1 &&
                        i.dpDiv
                          .addClass('ui-datepicker-multi-' + a)
                          .css('width', 17 * a + 'em'),
                      i.dpDiv[(1 !== r[0] || 1 !== r[1] ? 'add' : 'remove') + 'Class'](
                        'ui-datepicker-multi'
                      ),
                      i.dpDiv[(this._get(i, 'isRTL') ? 'add' : 'remove') + 'Class'](
                        'ui-datepicker-rtl'
                      ),
                      i === t.datepicker._curInst &&
                        t.datepicker._datepickerShowing &&
                        t.datepicker._shouldFocusInput(i) &&
                        i.input.trigger('focus'),
                      i.yearshtml &&
                        ((n = i.yearshtml),
                        setTimeout(function () {
                          n === i.yearshtml &&
                            i.yearshtml &&
                            i.dpDiv
                              .find('select.ui-datepicker-year:first')
                              .replaceWith(i.yearshtml),
                            (n = i.yearshtml = null);
                        }, 0));
                  },
                  _shouldFocusInput: function (t) {
                    return (
                      t.input &&
                      t.input.is(':visible') &&
                      !t.input.is(':disabled') &&
                      !t.input.is(':focus')
                    );
                  },
                  _checkOffset: function (e, i, n) {
                    var s = e.dpDiv.outerWidth(),
                      r = e.dpDiv.outerHeight(),
                      a = e.input ? e.input.outerWidth() : 0,
                      o = e.input ? e.input.outerHeight() : 0,
                      l =
                        document.documentElement.clientWidth +
                        (n ? 0 : t(document).scrollLeft()),
                      c =
                        document.documentElement.clientHeight +
                        (n ? 0 : t(document).scrollTop());
                    return (
                      (i.left -= this._get(e, 'isRTL') ? s - a : 0),
                      (i.left -=
                        n && i.left === e.input.offset().left
                          ? t(document).scrollLeft()
                          : 0),
                      (i.top -=
                        n && i.top === e.input.offset().top + o
                          ? t(document).scrollTop()
                          : 0),
                      (i.left -= Math.min(
                        i.left,
                        i.left + s > l && l > s ? Math.abs(i.left + s - l) : 0
                      )),
                      (i.top -= Math.min(
                        i.top,
                        i.top + r > c && c > r ? Math.abs(r + o) : 0
                      )),
                      i
                    );
                  },
                  _findPos: function (e) {
                    for (
                      var i, n = this._getInst(e), s = this._get(n, 'isRTL');
                      e &&
                      ('hidden' === e.type ||
                        1 !== e.nodeType ||
                        t.expr.filters.hidden(e));

                    )
                      e = e[s ? 'previousSibling' : 'nextSibling'];
                    return [(i = t(e).offset()).left, i.top];
                  },
                  _hideDatepicker: function (e) {
                    var i,
                      n,
                      s,
                      r,
                      a = this._curInst;
                    !a ||
                      (e && a !== t.data(e, 'datepicker')) ||
                      (this._datepickerShowing &&
                        ((i = this._get(a, 'showAnim')),
                        (n = this._get(a, 'duration')),
                        (s = function () {
                          t.datepicker._tidyDialog(a);
                        }),
                        t.effects && (t.effects.effect[i] || t.effects[i])
                          ? a.dpDiv.hide(i, t.datepicker._get(a, 'showOptions'), n, s)
                          : a.dpDiv[
                              'slideDown' === i
                                ? 'slideUp'
                                : 'fadeIn' === i
                                ? 'fadeOut'
                                : 'hide'
                            ](i ? n : null, s),
                        i || s(),
                        (this._datepickerShowing = !1),
                        (r = this._get(a, 'onClose')) &&
                          r.apply(a.input ? a.input[0] : null, [
                            a.input ? a.input.val() : '',
                            a,
                          ]),
                        (this._lastInput = null),
                        this._inDialog &&
                          (this._dialogInput.css({
                            position: 'absolute',
                            left: '0',
                            top: '-100px',
                          }),
                          t.blockUI && (t.unblockUI(), t('body').append(this.dpDiv))),
                        (this._inDialog = !1)));
                  },
                  _tidyDialog: function (t) {
                    t.dpDiv.removeClass(this._dialogClass).off('.ui-datepicker-calendar');
                  },
                  _checkExternalClick: function (e) {
                    if (t.datepicker._curInst) {
                      var i = t(e.target),
                        n = t.datepicker._getInst(i[0]);
                      ((i[0].id === t.datepicker._mainDivId ||
                        0 !== i.parents('#' + t.datepicker._mainDivId).length ||
                        i.hasClass(t.datepicker.markerClassName) ||
                        i.closest('.' + t.datepicker._triggerClass).length ||
                        !t.datepicker._datepickerShowing ||
                        (t.datepicker._inDialog && t.blockUI)) &&
                        (!i.hasClass(t.datepicker.markerClassName) ||
                          t.datepicker._curInst === n)) ||
                        t.datepicker._hideDatepicker();
                    }
                  },
                  _adjustDate: function (e, i, n) {
                    var s = t(e),
                      r = this._getInst(s[0]);
                    this._isDisabledDatepicker(s[0]) ||
                      (this._adjustInstDate(
                        r,
                        i + ('M' === n ? this._get(r, 'showCurrentAtPos') : 0),
                        n
                      ),
                      this._updateDatepicker(r));
                  },
                  _gotoToday: function (e) {
                    var i,
                      n = t(e),
                      s = this._getInst(n[0]);
                    this._get(s, 'gotoCurrent') && s.currentDay
                      ? ((s.selectedDay = s.currentDay),
                        (s.drawMonth = s.selectedMonth = s.currentMonth),
                        (s.drawYear = s.selectedYear = s.currentYear))
                      : ((i = new Date()),
                        (s.selectedDay = i.getDate()),
                        (s.drawMonth = s.selectedMonth = i.getMonth()),
                        (s.drawYear = s.selectedYear = i.getFullYear())),
                      this._notifyChange(s),
                      this._adjustDate(n);
                  },
                  _selectMonthYear: function (e, i, n) {
                    var s = t(e),
                      r = this._getInst(s[0]);
                    (r['selected' + ('M' === n ? 'Month' : 'Year')] = r[
                      'draw' + ('M' === n ? 'Month' : 'Year')
                    ] =
                      parseInt(i.options[i.selectedIndex].value, 10)),
                      this._notifyChange(r),
                      this._adjustDate(s);
                  },
                  _selectDay: function (e, i, n, s) {
                    var r,
                      a = t(e);
                    t(s).hasClass(this._unselectableClass) ||
                      this._isDisabledDatepicker(a[0]) ||
                      (((r = this._getInst(a[0])).selectedDay = r.currentDay =
                        t('a', s).html()),
                      (r.selectedMonth = r.currentMonth = i),
                      (r.selectedYear = r.currentYear = n),
                      this._selectDate(
                        e,
                        this._formatDate(r, r.currentDay, r.currentMonth, r.currentYear)
                      ));
                  },
                  _clearDate: function (e) {
                    var i = t(e);
                    this._selectDate(i, '');
                  },
                  _selectDate: function (e, i) {
                    var n,
                      s = t(e),
                      r = this._getInst(s[0]);
                    (i = null != i ? i : this._formatDate(r)),
                      r.input && r.input.val(i),
                      this._updateAlternate(r),
                      (n = this._get(r, 'onSelect'))
                        ? n.apply(r.input ? r.input[0] : null, [i, r])
                        : r.input && r.input.trigger('change'),
                      r.inline
                        ? this._updateDatepicker(r)
                        : (this._hideDatepicker(),
                          (this._lastInput = r.input[0]),
                          'object' != typeof r.input[0] && r.input.trigger('focus'),
                          (this._lastInput = null));
                  },
                  _updateAlternate: function (e) {
                    var i,
                      n,
                      s,
                      r = this._get(e, 'altField');
                    r &&
                      ((i = this._get(e, 'altFormat') || this._get(e, 'dateFormat')),
                      (n = this._getDate(e)),
                      (s = this.formatDate(i, n, this._getFormatConfig(e))),
                      t(r).val(s));
                  },
                  noWeekends: function (t) {
                    var e = t.getDay();
                    return [e > 0 && e < 6, ''];
                  },
                  iso8601Week: function (t) {
                    var e,
                      i = new Date(t.getTime());
                    return (
                      i.setDate(i.getDate() + 4 - (i.getDay() || 7)),
                      (e = i.getTime()),
                      i.setMonth(0),
                      i.setDate(1),
                      Math.floor(Math.round((e - i) / 864e5) / 7) + 1
                    );
                  },
                  parseDate: function (e, i, n) {
                    if (null == e || null == i) throw 'Invalid arguments';
                    if ('' === (i = 'object' == typeof i ? i.toString() : i + ''))
                      return null;
                    var s,
                      r,
                      a,
                      o,
                      l = 0,
                      c =
                        (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                      u =
                        'string' != typeof c
                          ? c
                          : (new Date().getFullYear() % 100) + parseInt(c, 10),
                      d = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                      h = (n ? n.dayNames : null) || this._defaults.dayNames,
                      p =
                        (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                      f = (n ? n.monthNames : null) || this._defaults.monthNames,
                      g = -1,
                      m = -1,
                      v = -1,
                      b = -1,
                      y = !1,
                      w = function (t) {
                        var i = s + 1 < e.length && e.charAt(s + 1) === t;
                        return i && s++, i;
                      },
                      _ = function (t) {
                        var e = w(t),
                          n =
                            '@' === t
                              ? 14
                              : '!' === t
                              ? 20
                              : 'y' === t && e
                              ? 4
                              : 'o' === t
                              ? 3
                              : 2,
                          s = new RegExp('^\\d{' + ('y' === t ? n : 1) + ',' + n + '}'),
                          r = i.substring(l).match(s);
                        if (!r) throw 'Missing number at position ' + l;
                        return (l += r[0].length), parseInt(r[0], 10);
                      },
                      x = function (e, n, s) {
                        var r = -1,
                          a = t
                            .map(w(e) ? s : n, function (t, e) {
                              return [[e, t]];
                            })
                            .sort(function (t, e) {
                              return -(t[1].length - e[1].length);
                            });
                        if (
                          (t.each(a, function (t, e) {
                            var n = e[1];
                            if (i.substr(l, n.length).toLowerCase() === n.toLowerCase())
                              return (r = e[0]), (l += n.length), !1;
                          }),
                          -1 !== r)
                        )
                          return r + 1;
                        throw 'Unknown name at position ' + l;
                      },
                      k = function () {
                        if (i.charAt(l) !== e.charAt(s))
                          throw 'Unexpected literal at position ' + l;
                        l++;
                      };
                    for (s = 0; s < e.length; s++)
                      if (y) "'" !== e.charAt(s) || w("'") ? k() : (y = !1);
                      else
                        switch (e.charAt(s)) {
                          case 'd':
                            v = _('d');
                            break;
                          case 'D':
                            x('D', d, h);
                            break;
                          case 'o':
                            b = _('o');
                            break;
                          case 'm':
                            m = _('m');
                            break;
                          case 'M':
                            m = x('M', p, f);
                            break;
                          case 'y':
                            g = _('y');
                            break;
                          case '@':
                            (g = (o = new Date(_('@'))).getFullYear()),
                              (m = o.getMonth() + 1),
                              (v = o.getDate());
                            break;
                          case '!':
                            (g = (o = new Date(
                              (_('!') - this._ticksTo1970) / 1e4
                            )).getFullYear()),
                              (m = o.getMonth() + 1),
                              (v = o.getDate());
                            break;
                          case "'":
                            w("'") ? k() : (y = !0);
                            break;
                          default:
                            k();
                        }
                    if (l < i.length && ((a = i.substr(l)), !/^\s+/.test(a)))
                      throw 'Extra/unparsed characters found in date: ' + a;
                    if (
                      (-1 === g
                        ? (g = new Date().getFullYear())
                        : g < 100 &&
                          (g +=
                            new Date().getFullYear() -
                            (new Date().getFullYear() % 100) +
                            (g <= u ? 0 : -100)),
                      b > -1)
                    )
                      for (m = 1, v = b; !(v <= (r = this._getDaysInMonth(g, m - 1))); )
                        m++, (v -= r);
                    if (
                      (o = this._daylightSavingAdjust(
                        new Date(g, m - 1, v)
                      )).getFullYear() !== g ||
                      o.getMonth() + 1 !== m ||
                      o.getDate() !== v
                    )
                      throw 'Invalid date';
                    return o;
                  },
                  ATOM: 'yy-mm-dd',
                  COOKIE: 'D, dd M yy',
                  ISO_8601: 'yy-mm-dd',
                  RFC_822: 'D, d M y',
                  RFC_850: 'DD, dd-M-y',
                  RFC_1036: 'D, d M y',
                  RFC_1123: 'D, d M yy',
                  RFC_2822: 'D, d M yy',
                  RSS: 'D, d M y',
                  TICKS: '!',
                  TIMESTAMP: '@',
                  W3C: 'yy-mm-dd',
                  _ticksTo1970:
                    24 *
                    (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) *
                    60 *
                    60 *
                    1e7,
                  formatDate: function (t, e, i) {
                    if (!e) return '';
                    var n,
                      s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                      r = (i ? i.dayNames : null) || this._defaults.dayNames,
                      a =
                        (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                      o = (i ? i.monthNames : null) || this._defaults.monthNames,
                      l = function (e) {
                        var i = n + 1 < t.length && t.charAt(n + 1) === e;
                        return i && n++, i;
                      },
                      c = function (t, e, i) {
                        var n = '' + e;
                        if (l(t)) for (; n.length < i; ) n = '0' + n;
                        return n;
                      },
                      u = function (t, e, i, n) {
                        return l(t) ? n[e] : i[e];
                      },
                      d = '',
                      h = !1;
                    if (e)
                      for (n = 0; n < t.length; n++)
                        if (h)
                          "'" !== t.charAt(n) || l("'") ? (d += t.charAt(n)) : (h = !1);
                        else
                          switch (t.charAt(n)) {
                            case 'd':
                              d += c('d', e.getDate(), 2);
                              break;
                            case 'D':
                              d += u('D', e.getDay(), s, r);
                              break;
                            case 'o':
                              d += c(
                                'o',
                                Math.round(
                                  (new Date(
                                    e.getFullYear(),
                                    e.getMonth(),
                                    e.getDate()
                                  ).getTime() -
                                    new Date(e.getFullYear(), 0, 0).getTime()) /
                                    864e5
                                ),
                                3
                              );
                              break;
                            case 'm':
                              d += c('m', e.getMonth() + 1, 2);
                              break;
                            case 'M':
                              d += u('M', e.getMonth(), a, o);
                              break;
                            case 'y':
                              d += l('y')
                                ? e.getFullYear()
                                : (e.getFullYear() % 100 < 10 ? '0' : '') +
                                  (e.getFullYear() % 100);
                              break;
                            case '@':
                              d += e.getTime();
                              break;
                            case '!':
                              d += 1e4 * e.getTime() + this._ticksTo1970;
                              break;
                            case "'":
                              l("'") ? (d += "'") : (h = !0);
                              break;
                            default:
                              d += t.charAt(n);
                          }
                    return d;
                  },
                  _possibleChars: function (t) {
                    var e,
                      i = '',
                      n = !1,
                      s = function (i) {
                        var n = e + 1 < t.length && t.charAt(e + 1) === i;
                        return n && e++, n;
                      };
                    for (e = 0; e < t.length; e++)
                      if (n)
                        "'" !== t.charAt(e) || s("'") ? (i += t.charAt(e)) : (n = !1);
                      else
                        switch (t.charAt(e)) {
                          case 'd':
                          case 'm':
                          case 'y':
                          case '@':
                            i += '0123456789';
                            break;
                          case 'D':
                          case 'M':
                            return null;
                          case "'":
                            s("'") ? (i += "'") : (n = !0);
                            break;
                          default:
                            i += t.charAt(e);
                        }
                    return i;
                  },
                  _get: function (t, e) {
                    return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e];
                  },
                  _setDateFromField: function (t, e) {
                    if (t.input.val() !== t.lastVal) {
                      var i = this._get(t, 'dateFormat'),
                        n = (t.lastVal = t.input ? t.input.val() : null),
                        s = this._getDefaultDate(t),
                        r = s,
                        a = this._getFormatConfig(t);
                      try {
                        r = this.parseDate(i, n, a) || s;
                      } catch (t) {
                        n = e ? '' : n;
                      }
                      (t.selectedDay = r.getDate()),
                        (t.drawMonth = t.selectedMonth = r.getMonth()),
                        (t.drawYear = t.selectedYear = r.getFullYear()),
                        (t.currentDay = n ? r.getDate() : 0),
                        (t.currentMonth = n ? r.getMonth() : 0),
                        (t.currentYear = n ? r.getFullYear() : 0),
                        this._adjustInstDate(t);
                    }
                  },
                  _getDefaultDate: function (t) {
                    return this._restrictMinMax(
                      t,
                      this._determineDate(t, this._get(t, 'defaultDate'), new Date())
                    );
                  },
                  _determineDate: function (e, i, n) {
                    var s =
                      null == i || '' === i
                        ? n
                        : 'string' == typeof i
                        ? (function (i) {
                            try {
                              return t.datepicker.parseDate(
                                t.datepicker._get(e, 'dateFormat'),
                                i,
                                t.datepicker._getFormatConfig(e)
                              );
                            } catch (t) {}
                            for (
                              var n =
                                  (i.toLowerCase().match(/^c/)
                                    ? t.datepicker._getDate(e)
                                    : null) || new Date(),
                                s = n.getFullYear(),
                                r = n.getMonth(),
                                a = n.getDate(),
                                o = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                                l = o.exec(i);
                              l;

                            ) {
                              switch (l[2] || 'd') {
                                case 'd':
                                case 'D':
                                  a += parseInt(l[1], 10);
                                  break;
                                case 'w':
                                case 'W':
                                  a += 7 * parseInt(l[1], 10);
                                  break;
                                case 'm':
                                case 'M':
                                  (r += parseInt(l[1], 10)),
                                    (a = Math.min(a, t.datepicker._getDaysInMonth(s, r)));
                                  break;
                                case 'y':
                                case 'Y':
                                  (s += parseInt(l[1], 10)),
                                    (a = Math.min(a, t.datepicker._getDaysInMonth(s, r)));
                              }
                              l = o.exec(i);
                            }
                            return new Date(s, r, a);
                          })(i)
                        : 'number' == typeof i
                        ? isNaN(i)
                          ? n
                          : (function (t) {
                              var e = new Date();
                              return e.setDate(e.getDate() + t), e;
                            })(i)
                        : new Date(i.getTime());
                    return (
                      (s = s && 'Invalid Date' === s.toString() ? n : s) &&
                        (s.setHours(0),
                        s.setMinutes(0),
                        s.setSeconds(0),
                        s.setMilliseconds(0)),
                      this._daylightSavingAdjust(s)
                    );
                  },
                  _daylightSavingAdjust: function (t) {
                    return t
                      ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t)
                      : null;
                  },
                  _setDate: function (t, e, i) {
                    var n = !e,
                      s = t.selectedMonth,
                      r = t.selectedYear,
                      a = this._restrictMinMax(t, this._determineDate(t, e, new Date()));
                    (t.selectedDay = t.currentDay = a.getDate()),
                      (t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth()),
                      (t.drawYear = t.selectedYear = t.currentYear = a.getFullYear()),
                      (s === t.selectedMonth && r === t.selectedYear) ||
                        i ||
                        this._notifyChange(t),
                      this._adjustInstDate(t),
                      t.input && t.input.val(n ? '' : this._formatDate(t));
                  },
                  _getDate: function (t) {
                    return !t.currentYear || (t.input && '' === t.input.val())
                      ? null
                      : this._daylightSavingAdjust(
                          new Date(t.currentYear, t.currentMonth, t.currentDay)
                        );
                  },
                  _attachHandlers: function (e) {
                    var i = this._get(e, 'stepMonths'),
                      n = '#' + e.id.replace(/\\\\/g, '\\');
                    e.dpDiv.find('[data-handler]').map(function () {
                      var e = {
                        prev: function () {
                          t.datepicker._adjustDate(n, -i, 'M');
                        },
                        next: function () {
                          t.datepicker._adjustDate(n, +i, 'M');
                        },
                        hide: function () {
                          t.datepicker._hideDatepicker();
                        },
                        today: function () {
                          t.datepicker._gotoToday(n);
                        },
                        selectDay: function () {
                          return (
                            t.datepicker._selectDay(
                              n,
                              +this.getAttribute('data-month'),
                              +this.getAttribute('data-year'),
                              this
                            ),
                            !1
                          );
                        },
                        selectMonth: function () {
                          return t.datepicker._selectMonthYear(n, this, 'M'), !1;
                        },
                        selectYear: function () {
                          return t.datepicker._selectMonthYear(n, this, 'Y'), !1;
                        },
                      };
                      t(this).on(
                        this.getAttribute('data-event'),
                        e[this.getAttribute('data-handler')]
                      );
                    });
                  },
                  _generateHTML: function (t) {
                    var e,
                      i,
                      n,
                      s,
                      r,
                      a,
                      o,
                      l,
                      c,
                      u,
                      d,
                      h,
                      p,
                      f,
                      g,
                      m,
                      v,
                      b,
                      y,
                      w,
                      _,
                      x,
                      k,
                      C,
                      E,
                      T,
                      D,
                      S,
                      A,
                      I,
                      O,
                      N,
                      M,
                      P,
                      L,
                      R,
                      $,
                      j,
                      F,
                      H = new Date(),
                      B = this._daylightSavingAdjust(
                        new Date(H.getFullYear(), H.getMonth(), H.getDate())
                      ),
                      W = this._get(t, 'isRTL'),
                      U = this._get(t, 'showButtonPanel'),
                      V = this._get(t, 'hideIfNoPrevNext'),
                      z = this._get(t, 'navigationAsDateFormat'),
                      q = this._getNumberOfMonths(t),
                      Y = this._get(t, 'showCurrentAtPos'),
                      K = this._get(t, 'stepMonths'),
                      J = 1 !== q[0] || 1 !== q[1],
                      G = this._daylightSavingAdjust(
                        t.currentDay
                          ? new Date(t.currentYear, t.currentMonth, t.currentDay)
                          : new Date(9999, 9, 9)
                      ),
                      Q = this._getMinMaxDate(t, 'min'),
                      X = this._getMinMaxDate(t, 'max'),
                      Z = t.drawMonth - Y,
                      tt = t.drawYear;
                    if ((Z < 0 && ((Z += 12), tt--), X))
                      for (
                        e = this._daylightSavingAdjust(
                          new Date(
                            X.getFullYear(),
                            X.getMonth() - q[0] * q[1] + 1,
                            X.getDate()
                          )
                        ),
                          e = Q && e < Q ? Q : e;
                        this._daylightSavingAdjust(new Date(tt, Z, 1)) > e;

                      )
                        --Z < 0 && ((Z = 11), tt--);
                    for (
                      t.drawMonth = Z,
                        t.drawYear = tt,
                        i = this._get(t, 'prevText'),
                        i = z
                          ? this.formatDate(
                              i,
                              this._daylightSavingAdjust(new Date(tt, Z - K, 1)),
                              this._getFormatConfig(t)
                            )
                          : i,
                        n = this._canAdjustMonth(t, -1, tt, Z)
                          ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" +
                            i +
                            "'><span class='ui-icon ui-icon-circle-triangle-" +
                            (W ? 'e' : 'w') +
                            "'>" +
                            i +
                            '</span></a>'
                          : V
                          ? ''
                          : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" +
                            i +
                            "'><span class='ui-icon ui-icon-circle-triangle-" +
                            (W ? 'e' : 'w') +
                            "'>" +
                            i +
                            '</span></a>',
                        s = this._get(t, 'nextText'),
                        s = z
                          ? this.formatDate(
                              s,
                              this._daylightSavingAdjust(new Date(tt, Z + K, 1)),
                              this._getFormatConfig(t)
                            )
                          : s,
                        r = this._canAdjustMonth(t, 1, tt, Z)
                          ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" +
                            s +
                            "'><span class='ui-icon ui-icon-circle-triangle-" +
                            (W ? 'w' : 'e') +
                            "'>" +
                            s +
                            '</span></a>'
                          : V
                          ? ''
                          : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" +
                            s +
                            "'><span class='ui-icon ui-icon-circle-triangle-" +
                            (W ? 'w' : 'e') +
                            "'>" +
                            s +
                            '</span></a>',
                        a = this._get(t, 'currentText'),
                        o = this._get(t, 'gotoCurrent') && t.currentDay ? G : B,
                        a = z ? this.formatDate(a, o, this._getFormatConfig(t)) : a,
                        l = t.inline
                          ? ''
                          : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
                            this._get(t, 'closeText') +
                            '</button>',
                        c = U
                          ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" +
                            (W ? l : '') +
                            (this._isInRange(t, o)
                              ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" +
                                a +
                                '</button>'
                              : '') +
                            (W ? '' : l) +
                            '</div>'
                          : '',
                        u = parseInt(this._get(t, 'firstDay'), 10),
                        u = isNaN(u) ? 0 : u,
                        d = this._get(t, 'showWeek'),
                        h = this._get(t, 'dayNames'),
                        p = this._get(t, 'dayNamesMin'),
                        f = this._get(t, 'monthNames'),
                        g = this._get(t, 'monthNamesShort'),
                        m = this._get(t, 'beforeShowDay'),
                        v = this._get(t, 'showOtherMonths'),
                        b = this._get(t, 'selectOtherMonths'),
                        y = this._getDefaultDate(t),
                        w = '',
                        x = 0;
                      x < q[0];
                      x++
                    ) {
                      for (k = '', this.maxRows = 4, C = 0; C < q[1]; C++) {
                        if (
                          ((E = this._daylightSavingAdjust(
                            new Date(tt, Z, t.selectedDay)
                          )),
                          (T = ' ui-corner-all'),
                          (D = ''),
                          J)
                        ) {
                          if (((D += "<div class='ui-datepicker-group"), q[1] > 1))
                            switch (C) {
                              case 0:
                                (D += ' ui-datepicker-group-first'),
                                  (T = ' ui-corner-' + (W ? 'right' : 'left'));
                                break;
                              case q[1] - 1:
                                (D += ' ui-datepicker-group-last'),
                                  (T = ' ui-corner-' + (W ? 'left' : 'right'));
                                break;
                              default:
                                (D += ' ui-datepicker-group-middle'), (T = '');
                            }
                          D += "'>";
                        }
                        for (
                          D +=
                            "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
                            T +
                            "'>" +
                            (/all|left/.test(T) && 0 === x ? (W ? r : n) : '') +
                            (/all|right/.test(T) && 0 === x ? (W ? n : r) : '') +
                            this._generateMonthYearHeader(
                              t,
                              Z,
                              tt,
                              Q,
                              X,
                              x > 0 || C > 0,
                              f,
                              g
                            ) +
                            "</div><table class='ui-datepicker-calendar'><thead><tr>",
                            S = d
                              ? "<th class='ui-datepicker-week-col'>" +
                                this._get(t, 'weekHeader') +
                                '</th>'
                              : '',
                            _ = 0;
                          _ < 7;
                          _++
                        )
                          (A = (_ + u) % 7),
                            (S +=
                              "<th scope='col'" +
                              ((_ + u + 6) % 7 >= 5
                                ? " class='ui-datepicker-week-end'"
                                : '') +
                              "><span title='" +
                              h[A] +
                              "'>" +
                              p[A] +
                              '</span></th>');
                        for (
                          D += S + '</tr></thead><tbody>',
                            I = this._getDaysInMonth(tt, Z),
                            tt === t.selectedYear &&
                              Z === t.selectedMonth &&
                              (t.selectedDay = Math.min(t.selectedDay, I)),
                            O = (this._getFirstDayOfMonth(tt, Z) - u + 7) % 7,
                            N = Math.ceil((O + I) / 7),
                            M = J && this.maxRows > N ? this.maxRows : N,
                            this.maxRows = M,
                            P = this._daylightSavingAdjust(new Date(tt, Z, 1 - O)),
                            L = 0;
                          L < M;
                          L++
                        ) {
                          for (
                            D += '<tr>',
                              R = d
                                ? "<td class='ui-datepicker-week-col'>" +
                                  this._get(t, 'calculateWeek')(P) +
                                  '</td>'
                                : '',
                              _ = 0;
                            _ < 7;
                            _++
                          )
                            ($ = m
                              ? m.apply(t.input ? t.input[0] : null, [P])
                              : [!0, '']),
                              (F =
                                ((j = P.getMonth() !== Z) && !b) ||
                                !$[0] ||
                                (Q && P < Q) ||
                                (X && P > X)),
                              (R +=
                                "<td class='" +
                                ((_ + u + 6) % 7 >= 5 ? ' ui-datepicker-week-end' : '') +
                                (j ? ' ui-datepicker-other-month' : '') +
                                ((P.getTime() === E.getTime() &&
                                  Z === t.selectedMonth &&
                                  t._keyEvent) ||
                                (y.getTime() === P.getTime() &&
                                  y.getTime() === E.getTime())
                                  ? ' ' + this._dayOverClass
                                  : '') +
                                (F
                                  ? ' ' + this._unselectableClass + ' ui-state-disabled'
                                  : '') +
                                (j && !v
                                  ? ''
                                  : ' ' +
                                    $[1] +
                                    (P.getTime() === G.getTime()
                                      ? ' ' + this._currentClass
                                      : '') +
                                    (P.getTime() === B.getTime()
                                      ? ' ui-datepicker-today'
                                      : '')) +
                                "'" +
                                ((j && !v) || !$[2]
                                  ? ''
                                  : " title='" + $[2].replace(/'/g, '&#39;') + "'") +
                                (F
                                  ? ''
                                  : " data-handler='selectDay' data-event='click' data-month='" +
                                    P.getMonth() +
                                    "' data-year='" +
                                    P.getFullYear() +
                                    "'") +
                                '>' +
                                (j && !v
                                  ? '&#xa0;'
                                  : F
                                  ? "<span class='ui-state-default'>" +
                                    P.getDate() +
                                    '</span>'
                                  : "<a class='ui-state-default" +
                                    (P.getTime() === B.getTime()
                                      ? ' ui-state-highlight'
                                      : '') +
                                    (P.getTime() === G.getTime()
                                      ? ' ui-state-active'
                                      : '') +
                                    (j ? ' ui-priority-secondary' : '') +
                                    "' href='#'>" +
                                    P.getDate() +
                                    '</a>') +
                                '</td>'),
                              P.setDate(P.getDate() + 1),
                              (P = this._daylightSavingAdjust(P));
                          D += R + '</tr>';
                        }
                        ++Z > 11 && ((Z = 0), tt++),
                          (k += D +=
                            '</tbody></table>' +
                            (J
                              ? '</div>' +
                                (q[0] > 0 && C === q[1] - 1
                                  ? "<div class='ui-datepicker-row-break'></div>"
                                  : '')
                              : ''));
                      }
                      w += k;
                    }
                    return (w += c), (t._keyEvent = !1), w;
                  },
                  _generateMonthYearHeader: function (t, e, i, n, s, r, a, o) {
                    var l,
                      c,
                      u,
                      d,
                      h,
                      p,
                      f,
                      g,
                      m = this._get(t, 'changeMonth'),
                      v = this._get(t, 'changeYear'),
                      b = this._get(t, 'showMonthAfterYear'),
                      y = "<div class='ui-datepicker-title'>",
                      w = '';
                    if (r || !m)
                      w += "<span class='ui-datepicker-month'>" + a[e] + '</span>';
                    else {
                      for (
                        l = n && n.getFullYear() === i,
                          c = s && s.getFullYear() === i,
                          w +=
                            "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
                          u = 0;
                        u < 12;
                        u++
                      )
                        (!l || u >= n.getMonth()) &&
                          (!c || u <= s.getMonth()) &&
                          (w +=
                            "<option value='" +
                            u +
                            "'" +
                            (u === e ? " selected='selected'" : '') +
                            '>' +
                            o[u] +
                            '</option>');
                      w += '</select>';
                    }
                    if ((b || (y += w + (!r && m && v ? '' : '&#xa0;')), !t.yearshtml))
                      if (((t.yearshtml = ''), r || !v))
                        y += "<span class='ui-datepicker-year'>" + i + '</span>';
                      else {
                        for (
                          d = this._get(t, 'yearRange').split(':'),
                            h = new Date().getFullYear(),
                            f = (p = function (t) {
                              var e = t.match(/c[+\-].*/)
                                ? i + parseInt(t.substring(1), 10)
                                : t.match(/[+\-].*/)
                                ? h + parseInt(t, 10)
                                : parseInt(t, 10);
                              return isNaN(e) ? h : e;
                            })(d[0]),
                            g = Math.max(f, p(d[1] || '')),
                            f = n ? Math.max(f, n.getFullYear()) : f,
                            g = s ? Math.min(g, s.getFullYear()) : g,
                            t.yearshtml +=
                              "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                          f <= g;
                          f++
                        )
                          t.yearshtml +=
                            "<option value='" +
                            f +
                            "'" +
                            (f === i ? " selected='selected'" : '') +
                            '>' +
                            f +
                            '</option>';
                        (t.yearshtml += '</select>'),
                          (y += t.yearshtml),
                          (t.yearshtml = null);
                      }
                    return (
                      (y += this._get(t, 'yearSuffix')),
                      b && (y += (!r && m && v ? '' : '&#xa0;') + w),
                      (y += '</div>')
                    );
                  },
                  _adjustInstDate: function (t, e, i) {
                    var n = t.selectedYear + ('Y' === i ? e : 0),
                      s = t.selectedMonth + ('M' === i ? e : 0),
                      r =
                        Math.min(t.selectedDay, this._getDaysInMonth(n, s)) +
                        ('D' === i ? e : 0),
                      a = this._restrictMinMax(
                        t,
                        this._daylightSavingAdjust(new Date(n, s, r))
                      );
                    (t.selectedDay = a.getDate()),
                      (t.drawMonth = t.selectedMonth = a.getMonth()),
                      (t.drawYear = t.selectedYear = a.getFullYear()),
                      ('M' !== i && 'Y' !== i) || this._notifyChange(t);
                  },
                  _restrictMinMax: function (t, e) {
                    var i = this._getMinMaxDate(t, 'min'),
                      n = this._getMinMaxDate(t, 'max'),
                      s = i && e < i ? i : e;
                    return n && s > n ? n : s;
                  },
                  _notifyChange: function (t) {
                    var e = this._get(t, 'onChangeMonthYear');
                    e &&
                      e.apply(t.input ? t.input[0] : null, [
                        t.selectedYear,
                        t.selectedMonth + 1,
                        t,
                      ]);
                  },
                  _getNumberOfMonths: function (t) {
                    var e = this._get(t, 'numberOfMonths');
                    return null == e ? [1, 1] : 'number' == typeof e ? [1, e] : e;
                  },
                  _getMinMaxDate: function (t, e) {
                    return this._determineDate(t, this._get(t, e + 'Date'), null);
                  },
                  _getDaysInMonth: function (t, e) {
                    return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
                  },
                  _getFirstDayOfMonth: function (t, e) {
                    return new Date(t, e, 1).getDay();
                  },
                  _canAdjustMonth: function (t, e, i, n) {
                    var s = this._getNumberOfMonths(t),
                      r = this._daylightSavingAdjust(
                        new Date(i, n + (e < 0 ? e : s[0] * s[1]), 1)
                      );
                    return (
                      e < 0 &&
                        r.setDate(this._getDaysInMonth(r.getFullYear(), r.getMonth())),
                      this._isInRange(t, r)
                    );
                  },
                  _isInRange: function (t, e) {
                    var i,
                      n,
                      s = this._getMinMaxDate(t, 'min'),
                      r = this._getMinMaxDate(t, 'max'),
                      a = null,
                      o = null,
                      l = this._get(t, 'yearRange');
                    return (
                      l &&
                        ((i = l.split(':')),
                        (n = new Date().getFullYear()),
                        (a = parseInt(i[0], 10)),
                        (o = parseInt(i[1], 10)),
                        i[0].match(/[+\-].*/) && (a += n),
                        i[1].match(/[+\-].*/) && (o += n)),
                      (!s || e.getTime() >= s.getTime()) &&
                        (!r || e.getTime() <= r.getTime()) &&
                        (!a || e.getFullYear() >= a) &&
                        (!o || e.getFullYear() <= o)
                    );
                  },
                  _getFormatConfig: function (t) {
                    var e = this._get(t, 'shortYearCutoff');
                    return {
                      shortYearCutoff: (e =
                        'string' != typeof e
                          ? e
                          : (new Date().getFullYear() % 100) + parseInt(e, 10)),
                      dayNamesShort: this._get(t, 'dayNamesShort'),
                      dayNames: this._get(t, 'dayNames'),
                      monthNamesShort: this._get(t, 'monthNamesShort'),
                      monthNames: this._get(t, 'monthNames'),
                    };
                  },
                  _formatDate: function (t, e, i, n) {
                    e ||
                      ((t.currentDay = t.selectedDay),
                      (t.currentMonth = t.selectedMonth),
                      (t.currentYear = t.selectedYear));
                    var s = e
                      ? 'object' == typeof e
                        ? e
                        : this._daylightSavingAdjust(new Date(n, i, e))
                      : this._daylightSavingAdjust(
                          new Date(t.currentYear, t.currentMonth, t.currentDay)
                        );
                    return this.formatDate(
                      this._get(t, 'dateFormat'),
                      s,
                      this._getFormatConfig(t)
                    );
                  },
                }),
                (t.fn.datepicker = function (e) {
                  if (!this.length) return this;
                  t.datepicker.initialized ||
                    (t(document).on('mousedown', t.datepicker._checkExternalClick),
                    (t.datepicker.initialized = !0)),
                    0 === t('#' + t.datepicker._mainDivId).length &&
                      t('body').append(t.datepicker.dpDiv);
                  var i = Array.prototype.slice.call(arguments, 1);
                  return 'string' != typeof e ||
                    ('isDisabled' !== e && 'getDate' !== e && 'widget' !== e)
                    ? 'option' === e &&
                      2 === arguments.length &&
                      'string' == typeof arguments[1]
                      ? t.datepicker['_' + e + 'Datepicker'].apply(
                          t.datepicker,
                          [this[0]].concat(i)
                        )
                      : this.each(function () {
                          'string' == typeof e
                            ? t.datepicker['_' + e + 'Datepicker'].apply(
                                t.datepicker,
                                [this].concat(i)
                              )
                            : t.datepicker._attachDatepicker(this, e);
                        })
                    : t.datepicker['_' + e + 'Datepicker'].apply(
                        t.datepicker,
                        [this[0]].concat(i)
                      );
                }),
                (t.datepicker = new i()),
                (t.datepicker.initialized = !1),
                (t.datepicker.uuid = new Date().getTime()),
                (t.datepicker.version = '1.12.1'),
                t.datepicker
              );
            })
              ? n.apply(e, s)
              : n) || (t.exports = r);
    },
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {
      var n, s, r;
      (s = [e, t, i(10), i(12), i(13), i(40), i(7)]),
        void 0 ===
          (r =
            'function' ==
            typeof (n = function (t, e, i, n, s, r, a) {
              'use strict';
              var o = (function (t) {
                  return t && t.__esModule ? t.default : t;
                })(i),
                l = n.initElements,
                c = n.removeElements,
                u = a.getClosestIgnoredElement;
              function d(t) {
                for (var e = t.length, i = 0; i < e; i++) {
                  var n = t[i],
                    s = n.addedNodes,
                    r = n.removedNodes;
                  s && s.length && !u(s[0].parentNode) && l(s), r && r.length && c(r);
                }
              }
              e.exports = {
                register: function (t) {
                  return (
                    t && this.unregister(),
                    o.observer ||
                      (o.observer = (function () {
                        var t = new window.MutationObserver(d);
                        return t.observe(document, {childList: !0, subtree: !0}), t;
                      })()),
                    this
                  );
                },
                unregister: function () {
                  return (
                    o.observer && (o.observer.disconnect(), (o.observer = void 0)), this
                  );
                },
              };
            })
              ? n.apply(e, s)
              : n) || (t.exports = r);
    },
    function (t, e, i) {
      var n, s, r;
      (s = [e, t]),
        void 0 ===
          (r =
            'function' ==
            typeof (n = function (t, e) {
              'use strict';
              e.exports = function (t) {
                var e = void 0 === arguments[1] ? '' : arguments[1],
                  i = t.__SKATE_DATA || (t.__SKATE_DATA = {});
                return (e && (i[e] || (i[e] = {}))) || i;
              };
            })
              ? n.apply(e, s)
              : n) || (t.exports = r);
    },
    function (t, e, i) {
      var n, s, r;
      (s = [e]),
        void 0 ===
          (r =
            'function' ==
            typeof (n = function (t) {
              'use strict';
              var e = /MSIE/.test(navigator.userAgent),
                i = /Trident/.test(navigator.userAgent),
                n = e || i,
                s = window.HTMLElement.prototype;
              if (n) {
                var r = Object.getOwnPropertyDescriptor(s, 'innerHTML'),
                  a = !!r && r.get._hasBeenEnhanced;
                a ||
                  (i &&
                    (window.MutationObserver =
                      window.JsMutationObserver || window.MutationObserver),
                  (function () {
                    var t = Object.getOwnPropertyDescriptor(s, 'innerHTML'),
                      e = function () {
                        return t.get.call(this);
                      };
                    (e._hasBeenEnhanced = !0),
                      Object.defineProperty(s, 'innerHTML', {
                        get: e,
                        set: function (e) {
                          !(function t(e, i) {
                            var n = e.childNodes;
                            if (n)
                              for (var s = n.length, r = 0; r < s; r++) {
                                var a = n[r];
                                i(a, e), t(a, i);
                              }
                          })(this, function (t, e) {
                            var i = document.createEvent('MutationEvent');
                            i.initMutationEvent(
                              'DOMNodeRemoved',
                              !0,
                              !1,
                              e,
                              null,
                              null,
                              null,
                              null
                            ),
                              t.dispatchEvent(i);
                          }),
                            t.set.call(this, e);
                        },
                      });
                  })());
              }
            })
              ? n.apply(e, s)
              : n) || (t.exports = r);
    },
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e) {
      !(function (t) {
        var e =
          "To be compatible with jQuery 1.9 and higher, You must pass a selector to tipsy's live argument. For instance, `$(document).tipsy({live: 'a.live'});`";
        function i(t, e) {
          return 'function' == typeof t ? t.call(e) : t;
        }
        function n(e) {
          var i = e && e.jquery ? e.get(0) : e;
          return t.contains(document.documentElement, i);
        }
        var s = 0;
        function r(e, i) {
          (this.$element = t(e)),
            (this.options = i),
            (this.enabled = !0),
            this.fixTitle();
        }
        (r.prototype = {
          show: function () {
            if (n(this.$element)) {
              var e = this.getTitle();
              if (e && this.enabled) {
                var r = this.tip();
                r.find('.tipsy-inner')[this.options.html ? 'html' : 'text'](e),
                  (r[0].className = 'tipsy'),
                  r
                    .remove()
                    .css({top: 0, left: 0, visibility: 'hidden', display: 'block'})
                    .appendTo(document.body);
                var a = this;
                this.options.hoverable &&
                  r.hover(
                    function () {
                      a.hoverTooltip = !0;
                    },
                    function () {
                      if (
                        'in' != a.hoverState &&
                        ((a.hoverTooltip = !1), 'manual' != a.options.trigger)
                      ) {
                        var t =
                          'hover' == a.options.trigger
                            ? 'mouseleave.tipsy'
                            : 'blur.tipsy';
                        a.$element.trigger(t);
                      }
                    }
                  ),
                  this.options.className &&
                    r.addClass(i(this.options.className, this.$element[0]));
                var o = t.extend({}, this.$element.offset(), {
                    width: this.$element[0].getBoundingClientRect().width,
                    height: this.$element[0].getBoundingClientRect().height,
                  }),
                  l = {},
                  c = r[0].offsetWidth,
                  u = r[0].offsetHeight,
                  d = i(this.options.gravity, this.$element[0]);
                switch (
                  (2 === d.length &&
                    ('w' === d.charAt(1)
                      ? (l.left = o.left + o.width / 2 - 15)
                      : (l.left = o.left + o.width / 2 - c + 15)),
                  d.charAt(0))
                ) {
                  case 'n':
                    void 0 === l.left && (l.left = o.left + o.width / 2 - c / 2),
                      (l.top = o.top + o.height + this.options.offset);
                    break;
                  case 's':
                    void 0 === l.left &&
                      ((l.left = o.left + o.width / 2 - c / 2),
                      r.css(l),
                      (u = r[0].offsetHeight)),
                      (l.top = o.top - u - this.options.offset);
                    break;
                  case 'e':
                    (l.left = o.left - c - this.options.offset),
                      (l.top = o.top + o.height / 2 - u / 2);
                    break;
                  case 'w':
                    (l.left = o.left + o.width + this.options.offset),
                      (l.top = o.top + o.height / 2 - u / 2);
                }
                if (
                  (r.css(l).addClass('tipsy-' + d),
                  (r.find('.tipsy-arrow')[0].className =
                    'tipsy-arrow tipsy-arrow-' + d.charAt(0)),
                  this.options.fade
                    ? r
                        .stop()
                        .css({opacity: 0, display: 'block', visibility: 'visible'})
                        .animate({opacity: this.options.opacity})
                    : r.css({visibility: 'visible', opacity: this.options.opacity}),
                  this.options.aria)
                ) {
                  var h = 'tipsyuid' + s++;
                  r.attr('id', h), this.$element.attr('aria-describedby', h);
                }
              }
            }
          },
          destroy: function () {
            this.$element.removeData('tipsy'), this.unbindHandlers(), this.hide();
          },
          unbindHandlers: function () {
            this.options.live
              ? t(document).off('.tipsy', this.options.live)
              : this.$element.off('.tipsy');
          },
          hide: function () {
            this.options.fade
              ? this.tip()
                  .stop()
                  .fadeOut(function () {
                    t(this).remove();
                  })
              : this.tip().remove(),
              this.options.aria && this.$element.removeAttr('aria-describedby');
          },
          fixTitle: function () {
            var t = this.$element;
            (t.attr('title') || 'string' != typeof t.attr('original-title')) &&
              t.attr('original-title', t.attr('title') || '').removeAttr('title');
          },
          getTitle: function () {
            var t,
              e = this.$element,
              i = this.options;
            return (
              this.fixTitle(),
              'string' == typeof (i = this.options).title
                ? (t = e.attr('title' == i.title ? 'original-title' : i.title))
                : 'function' == typeof i.title && (t = i.title.call(e[0])),
              (t = ('' + t).replace(/(^\s*|\s*$)/, '')) || i.fallback
            );
          },
          tip: function () {
            return (
              this.$tip ||
                ((this.$tip = t('<div class="tipsy"></div>')
                  .html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>')
                  .attr('role', 'tooltip')),
                this.$tip.data('tipsy-pointee', this.$element[0])),
              this.$tip
            );
          },
          validate: function () {
            this.$element[0].parentNode ||
              (this.hide(), (this.$element = null), (this.options = null));
          },
          enable: function () {
            this.enabled = !0;
          },
          disable: function () {
            this.enabled = !1;
          },
          toggleEnabled: function () {
            this.enabled = !this.enabled;
          },
        }),
          (t.fn.tipsy = function (i) {
            if (!0 === i) return this.data('tipsy');
            if ('string' == typeof i) {
              var s = this.data('tipsy');
              return s && s[i](), this;
            }
            if (
              ((i = t.extend({}, t.fn.tipsy.defaults, i)).hoverable &&
                (i.delayOut = i.delayOut || 20),
              !0 === i.live)
            ) {
              if (!this.selector) throw new Error(e);
              console && console.warn && console.warn(e), (i.live = this.selector);
            }
            function a(e) {
              var n = t.data(e, 'tipsy');
              return (
                n ||
                  ((n = new r(e, t.fn.tipsy.elementOptions(e, i))),
                  t.data(e, 'tipsy', n)),
                n
              );
            }
            function o() {
              var t = a(this);
              (t.hoverState = 'in'),
                0 == i.delayIn
                  ? t.show()
                  : (t.fixTitle(),
                    setTimeout(function () {
                      'in' == t.hoverState && n(t.$element) && t.show();
                    }, i.delayIn));
            }
            function l() {
              var t = a(this);
              (t.hoverState = 'out'),
                0 == i.delayOut
                  ? t.hide()
                  : setTimeout(function () {
                      'out' != t.hoverState || t.hoverTooltip || t.hide();
                    }, i.delayOut);
            }
            if (
              (this.each(function () {
                a(this);
              }),
              'manual' != i.trigger)
            ) {
              var c =
                  'hover' == i.trigger ? 'mouseenter.tipsy focus.tipsy' : 'focus.tipsy',
                u = 'hover' == i.trigger ? 'mouseleave.tipsy blur.tipsy' : 'blur.tipsy';
              i.live
                ? t(document).on(c, i.live, o).on(u, i.live, l)
                : this.on(c, o).on(u, l);
            }
            return this;
          }),
          (t.fn.tipsy.defaults = {
            aria: !1,
            className: null,
            delayIn: 0,
            delayOut: 0,
            fade: !1,
            fallback: '',
            gravity: 'n',
            html: !1,
            live: !1,
            hoverable: !1,
            offset: 0,
            opacity: 0.8,
            title: 'title',
            trigger: 'hover',
          }),
          (t.fn.tipsy.revalidate = function () {
            t('.tipsy').each(function () {
              var e = t.data(this, 'tipsy-pointee');
              (e && n(e)) || t(this).remove();
            });
          }),
          (t.fn.tipsy.elementOptions = function (e, i) {
            return t.metadata ? t.extend({}, i, t(e).metadata()) : i;
          }),
          (t.fn.tipsy.autoNS = function () {
            return t(this).offset().top > t(document).scrollTop() + t(window).height() / 2
              ? 's'
              : 'n';
          }),
          (t.fn.tipsy.autoWE = function () {
            return t(this).offset().left >
              t(document).scrollLeft() + t(window).width() / 2
              ? 'e'
              : 'w';
          }),
          (t.fn.tipsy.autoBounds = function (e, i) {
            return function () {
              var n = {ns: i[0], ew: i.length > 1 && i[1]},
                s = t(document).scrollTop() + e,
                r = t(document).scrollLeft() + e,
                a = t(this);
              return (
                a.offset().top < s && (n.ns = 'n'),
                a.offset().left < r && (n.ew = 'w'),
                t(window).width() + t(document).scrollLeft() - a.offset().left < e &&
                  (n.ew = 'e'),
                t(window).height() + t(document).scrollTop() - a.offset().top < e &&
                  (n.ns = 's'),
                n.ns + (n.ew ? n.ew : '')
              );
            };
          });
      })(jQuery);
    },
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e) {
      !(function (t) {
        void 0 === t.fn.each2 &&
          t.extend(t.fn, {
            each2: function (e) {
              for (
                var i = t([0]), n = -1, s = this.length;
                ++n < s && (i.context = i[0] = this[n]) && !1 !== e.call(i[0], n, i);

              );
              return this;
            },
          });
      })(jQuery),
        (function (t, e) {
          'use strict';
          if (window.Select2 === e) {
            var i,
              n,
              s,
              r,
              a,
              o,
              l,
              c = {x: 0, y: 0},
              u = {
                TAB: 9,
                ENTER: 13,
                ESC: 27,
                SPACE: 32,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                HOME: 36,
                END: 35,
                BACKSPACE: 8,
                DELETE: 46,
                isArrow: function (t) {
                  switch ((t = t.which ? t.which : t)) {
                    case u.LEFT:
                    case u.RIGHT:
                    case u.UP:
                    case u.DOWN:
                      return !0;
                  }
                  return !1;
                },
                isControl: function (t) {
                  switch (t.which) {
                    case u.SHIFT:
                    case u.CTRL:
                    case u.ALT:
                      return !0;
                  }
                  return !!t.metaKey;
                },
                isFunctionKey: function (t) {
                  return (t = t.which ? t.which : t) >= 112 && t <= 123;
                },
              },
              d = "<div class='select2-measure-scrollbar'></div>",
              h = {
                'Ⓐ': 'A',
                Ａ: 'A',
                À: 'A',
                Á: 'A',
                Â: 'A',
                Ầ: 'A',
                Ấ: 'A',
                Ẫ: 'A',
                Ẩ: 'A',
                Ã: 'A',
                Ā: 'A',
                Ă: 'A',
                Ằ: 'A',
                Ắ: 'A',
                Ẵ: 'A',
                Ẳ: 'A',
                Ȧ: 'A',
                Ǡ: 'A',
                Ä: 'A',
                Ǟ: 'A',
                Ả: 'A',
                Å: 'A',
                Ǻ: 'A',
                Ǎ: 'A',
                Ȁ: 'A',
                Ȃ: 'A',
                Ạ: 'A',
                Ậ: 'A',
                Ặ: 'A',
                Ḁ: 'A',
                Ą: 'A',
                Ⱥ: 'A',
                Ɐ: 'A',
                Ꜳ: 'AA',
                Æ: 'AE',
                Ǽ: 'AE',
                Ǣ: 'AE',
                Ꜵ: 'AO',
                Ꜷ: 'AU',
                Ꜹ: 'AV',
                Ꜻ: 'AV',
                Ꜽ: 'AY',
                'Ⓑ': 'B',
                Ｂ: 'B',
                Ḃ: 'B',
                Ḅ: 'B',
                Ḇ: 'B',
                Ƀ: 'B',
                Ƃ: 'B',
                Ɓ: 'B',
                'Ⓒ': 'C',
                Ｃ: 'C',
                Ć: 'C',
                Ĉ: 'C',
                Ċ: 'C',
                Č: 'C',
                Ç: 'C',
                Ḉ: 'C',
                Ƈ: 'C',
                Ȼ: 'C',
                Ꜿ: 'C',
                'Ⓓ': 'D',
                Ｄ: 'D',
                Ḋ: 'D',
                Ď: 'D',
                Ḍ: 'D',
                Ḑ: 'D',
                Ḓ: 'D',
                Ḏ: 'D',
                Đ: 'D',
                Ƌ: 'D',
                Ɗ: 'D',
                Ɖ: 'D',
                Ꝺ: 'D',
                Ǳ: 'DZ',
                Ǆ: 'DZ',
                ǲ: 'Dz',
                ǅ: 'Dz',
                'Ⓔ': 'E',
                Ｅ: 'E',
                È: 'E',
                É: 'E',
                Ê: 'E',
                Ề: 'E',
                Ế: 'E',
                Ễ: 'E',
                Ể: 'E',
                Ẽ: 'E',
                Ē: 'E',
                Ḕ: 'E',
                Ḗ: 'E',
                Ĕ: 'E',
                Ė: 'E',
                Ë: 'E',
                Ẻ: 'E',
                Ě: 'E',
                Ȅ: 'E',
                Ȇ: 'E',
                Ẹ: 'E',
                Ệ: 'E',
                Ȩ: 'E',
                Ḝ: 'E',
                Ę: 'E',
                Ḙ: 'E',
                Ḛ: 'E',
                Ɛ: 'E',
                Ǝ: 'E',
                'Ⓕ': 'F',
                Ｆ: 'F',
                Ḟ: 'F',
                Ƒ: 'F',
                Ꝼ: 'F',
                'Ⓖ': 'G',
                Ｇ: 'G',
                Ǵ: 'G',
                Ĝ: 'G',
                Ḡ: 'G',
                Ğ: 'G',
                Ġ: 'G',
                Ǧ: 'G',
                Ģ: 'G',
                Ǥ: 'G',
                Ɠ: 'G',
                Ꞡ: 'G',
                Ᵹ: 'G',
                Ꝿ: 'G',
                'Ⓗ': 'H',
                Ｈ: 'H',
                Ĥ: 'H',
                Ḣ: 'H',
                Ḧ: 'H',
                Ȟ: 'H',
                Ḥ: 'H',
                Ḩ: 'H',
                Ḫ: 'H',
                Ħ: 'H',
                Ⱨ: 'H',
                Ⱶ: 'H',
                Ɥ: 'H',
                'Ⓘ': 'I',
                Ｉ: 'I',
                Ì: 'I',
                Í: 'I',
                Î: 'I',
                Ĩ: 'I',
                Ī: 'I',
                Ĭ: 'I',
                İ: 'I',
                Ï: 'I',
                Ḯ: 'I',
                Ỉ: 'I',
                Ǐ: 'I',
                Ȉ: 'I',
                Ȋ: 'I',
                Ị: 'I',
                Į: 'I',
                Ḭ: 'I',
                Ɨ: 'I',
                'Ⓙ': 'J',
                Ｊ: 'J',
                Ĵ: 'J',
                Ɉ: 'J',
                'Ⓚ': 'K',
                Ｋ: 'K',
                Ḱ: 'K',
                Ǩ: 'K',
                Ḳ: 'K',
                Ķ: 'K',
                Ḵ: 'K',
                Ƙ: 'K',
                Ⱪ: 'K',
                Ꝁ: 'K',
                Ꝃ: 'K',
                Ꝅ: 'K',
                Ꞣ: 'K',
                'Ⓛ': 'L',
                Ｌ: 'L',
                Ŀ: 'L',
                Ĺ: 'L',
                Ľ: 'L',
                Ḷ: 'L',
                Ḹ: 'L',
                Ļ: 'L',
                Ḽ: 'L',
                Ḻ: 'L',
                Ł: 'L',
                Ƚ: 'L',
                Ɫ: 'L',
                Ⱡ: 'L',
                Ꝉ: 'L',
                Ꝇ: 'L',
                Ꞁ: 'L',
                Ǉ: 'LJ',
                ǈ: 'Lj',
                'Ⓜ': 'M',
                Ｍ: 'M',
                Ḿ: 'M',
                Ṁ: 'M',
                Ṃ: 'M',
                Ɱ: 'M',
                Ɯ: 'M',
                'Ⓝ': 'N',
                Ｎ: 'N',
                Ǹ: 'N',
                Ń: 'N',
                Ñ: 'N',
                Ṅ: 'N',
                Ň: 'N',
                Ṇ: 'N',
                Ņ: 'N',
                Ṋ: 'N',
                Ṉ: 'N',
                Ƞ: 'N',
                Ɲ: 'N',
                Ꞑ: 'N',
                Ꞥ: 'N',
                Ǌ: 'NJ',
                ǋ: 'Nj',
                'Ⓞ': 'O',
                Ｏ: 'O',
                Ò: 'O',
                Ó: 'O',
                Ô: 'O',
                Ồ: 'O',
                Ố: 'O',
                Ỗ: 'O',
                Ổ: 'O',
                Õ: 'O',
                Ṍ: 'O',
                Ȭ: 'O',
                Ṏ: 'O',
                Ō: 'O',
                Ṑ: 'O',
                Ṓ: 'O',
                Ŏ: 'O',
                Ȯ: 'O',
                Ȱ: 'O',
                Ö: 'O',
                Ȫ: 'O',
                Ỏ: 'O',
                Ő: 'O',
                Ǒ: 'O',
                Ȍ: 'O',
                Ȏ: 'O',
                Ơ: 'O',
                Ờ: 'O',
                Ớ: 'O',
                Ỡ: 'O',
                Ở: 'O',
                Ợ: 'O',
                Ọ: 'O',
                Ộ: 'O',
                Ǫ: 'O',
                Ǭ: 'O',
                Ø: 'O',
                Ǿ: 'O',
                Ɔ: 'O',
                Ɵ: 'O',
                Ꝋ: 'O',
                Ꝍ: 'O',
                Ƣ: 'OI',
                Ꝏ: 'OO',
                Ȣ: 'OU',
                'Ⓟ': 'P',
                Ｐ: 'P',
                Ṕ: 'P',
                Ṗ: 'P',
                Ƥ: 'P',
                Ᵽ: 'P',
                Ꝑ: 'P',
                Ꝓ: 'P',
                Ꝕ: 'P',
                'Ⓠ': 'Q',
                Ｑ: 'Q',
                Ꝗ: 'Q',
                Ꝙ: 'Q',
                Ɋ: 'Q',
                'Ⓡ': 'R',
                Ｒ: 'R',
                Ŕ: 'R',
                Ṙ: 'R',
                Ř: 'R',
                Ȑ: 'R',
                Ȓ: 'R',
                Ṛ: 'R',
                Ṝ: 'R',
                Ŗ: 'R',
                Ṟ: 'R',
                Ɍ: 'R',
                Ɽ: 'R',
                Ꝛ: 'R',
                Ꞧ: 'R',
                Ꞃ: 'R',
                'Ⓢ': 'S',
                Ｓ: 'S',
                ẞ: 'S',
                Ś: 'S',
                Ṥ: 'S',
                Ŝ: 'S',
                Ṡ: 'S',
                Š: 'S',
                Ṧ: 'S',
                Ṣ: 'S',
                Ṩ: 'S',
                Ș: 'S',
                Ş: 'S',
                Ȿ: 'S',
                Ꞩ: 'S',
                Ꞅ: 'S',
                'Ⓣ': 'T',
                Ｔ: 'T',
                Ṫ: 'T',
                Ť: 'T',
                Ṭ: 'T',
                Ț: 'T',
                Ţ: 'T',
                Ṱ: 'T',
                Ṯ: 'T',
                Ŧ: 'T',
                Ƭ: 'T',
                Ʈ: 'T',
                Ⱦ: 'T',
                Ꞇ: 'T',
                Ꜩ: 'TZ',
                'Ⓤ': 'U',
                Ｕ: 'U',
                Ù: 'U',
                Ú: 'U',
                Û: 'U',
                Ũ: 'U',
                Ṹ: 'U',
                Ū: 'U',
                Ṻ: 'U',
                Ŭ: 'U',
                Ü: 'U',
                Ǜ: 'U',
                Ǘ: 'U',
                Ǖ: 'U',
                Ǚ: 'U',
                Ủ: 'U',
                Ů: 'U',
                Ű: 'U',
                Ǔ: 'U',
                Ȕ: 'U',
                Ȗ: 'U',
                Ư: 'U',
                Ừ: 'U',
                Ứ: 'U',
                Ữ: 'U',
                Ử: 'U',
                Ự: 'U',
                Ụ: 'U',
                Ṳ: 'U',
                Ų: 'U',
                Ṷ: 'U',
                Ṵ: 'U',
                Ʉ: 'U',
                'Ⓥ': 'V',
                Ｖ: 'V',
                Ṽ: 'V',
                Ṿ: 'V',
                Ʋ: 'V',
                Ꝟ: 'V',
                Ʌ: 'V',
                Ꝡ: 'VY',
                'Ⓦ': 'W',
                Ｗ: 'W',
                Ẁ: 'W',
                Ẃ: 'W',
                Ŵ: 'W',
                Ẇ: 'W',
                Ẅ: 'W',
                Ẉ: 'W',
                Ⱳ: 'W',
                'Ⓧ': 'X',
                Ｘ: 'X',
                Ẋ: 'X',
                Ẍ: 'X',
                'Ⓨ': 'Y',
                Ｙ: 'Y',
                Ỳ: 'Y',
                Ý: 'Y',
                Ŷ: 'Y',
                Ỹ: 'Y',
                Ȳ: 'Y',
                Ẏ: 'Y',
                Ÿ: 'Y',
                Ỷ: 'Y',
                Ỵ: 'Y',
                Ƴ: 'Y',
                Ɏ: 'Y',
                Ỿ: 'Y',
                'Ⓩ': 'Z',
                Ｚ: 'Z',
                Ź: 'Z',
                Ẑ: 'Z',
                Ż: 'Z',
                Ž: 'Z',
                Ẓ: 'Z',
                Ẕ: 'Z',
                Ƶ: 'Z',
                Ȥ: 'Z',
                Ɀ: 'Z',
                Ⱬ: 'Z',
                Ꝣ: 'Z',
                'ⓐ': 'a',
                ａ: 'a',
                ẚ: 'a',
                à: 'a',
                á: 'a',
                â: 'a',
                ầ: 'a',
                ấ: 'a',
                ẫ: 'a',
                ẩ: 'a',
                ã: 'a',
                ā: 'a',
                ă: 'a',
                ằ: 'a',
                ắ: 'a',
                ẵ: 'a',
                ẳ: 'a',
                ȧ: 'a',
                ǡ: 'a',
                ä: 'a',
                ǟ: 'a',
                ả: 'a',
                å: 'a',
                ǻ: 'a',
                ǎ: 'a',
                ȁ: 'a',
                ȃ: 'a',
                ạ: 'a',
                ậ: 'a',
                ặ: 'a',
                ḁ: 'a',
                ą: 'a',
                ⱥ: 'a',
                ɐ: 'a',
                ꜳ: 'aa',
                æ: 'ae',
                ǽ: 'ae',
                ǣ: 'ae',
                ꜵ: 'ao',
                ꜷ: 'au',
                ꜹ: 'av',
                ꜻ: 'av',
                ꜽ: 'ay',
                'ⓑ': 'b',
                ｂ: 'b',
                ḃ: 'b',
                ḅ: 'b',
                ḇ: 'b',
                ƀ: 'b',
                ƃ: 'b',
                ɓ: 'b',
                'ⓒ': 'c',
                ｃ: 'c',
                ć: 'c',
                ĉ: 'c',
                ċ: 'c',
                č: 'c',
                ç: 'c',
                ḉ: 'c',
                ƈ: 'c',
                ȼ: 'c',
                ꜿ: 'c',
                ↄ: 'c',
                'ⓓ': 'd',
                ｄ: 'd',
                ḋ: 'd',
                ď: 'd',
                ḍ: 'd',
                ḑ: 'd',
                ḓ: 'd',
                ḏ: 'd',
                đ: 'd',
                ƌ: 'd',
                ɖ: 'd',
                ɗ: 'd',
                ꝺ: 'd',
                ǳ: 'dz',
                ǆ: 'dz',
                'ⓔ': 'e',
                ｅ: 'e',
                è: 'e',
                é: 'e',
                ê: 'e',
                ề: 'e',
                ế: 'e',
                ễ: 'e',
                ể: 'e',
                ẽ: 'e',
                ē: 'e',
                ḕ: 'e',
                ḗ: 'e',
                ĕ: 'e',
                ė: 'e',
                ë: 'e',
                ẻ: 'e',
                ě: 'e',
                ȅ: 'e',
                ȇ: 'e',
                ẹ: 'e',
                ệ: 'e',
                ȩ: 'e',
                ḝ: 'e',
                ę: 'e',
                ḙ: 'e',
                ḛ: 'e',
                ɇ: 'e',
                ɛ: 'e',
                ǝ: 'e',
                'ⓕ': 'f',
                ｆ: 'f',
                ḟ: 'f',
                ƒ: 'f',
                ꝼ: 'f',
                'ⓖ': 'g',
                ｇ: 'g',
                ǵ: 'g',
                ĝ: 'g',
                ḡ: 'g',
                ğ: 'g',
                ġ: 'g',
                ǧ: 'g',
                ģ: 'g',
                ǥ: 'g',
                ɠ: 'g',
                ꞡ: 'g',
                ᵹ: 'g',
                ꝿ: 'g',
                'ⓗ': 'h',
                ｈ: 'h',
                ĥ: 'h',
                ḣ: 'h',
                ḧ: 'h',
                ȟ: 'h',
                ḥ: 'h',
                ḩ: 'h',
                ḫ: 'h',
                ẖ: 'h',
                ħ: 'h',
                ⱨ: 'h',
                ⱶ: 'h',
                ɥ: 'h',
                ƕ: 'hv',
                'ⓘ': 'i',
                ｉ: 'i',
                ì: 'i',
                í: 'i',
                î: 'i',
                ĩ: 'i',
                ī: 'i',
                ĭ: 'i',
                ï: 'i',
                ḯ: 'i',
                ỉ: 'i',
                ǐ: 'i',
                ȉ: 'i',
                ȋ: 'i',
                ị: 'i',
                į: 'i',
                ḭ: 'i',
                ɨ: 'i',
                ı: 'i',
                'ⓙ': 'j',
                ｊ: 'j',
                ĵ: 'j',
                ǰ: 'j',
                ɉ: 'j',
                'ⓚ': 'k',
                ｋ: 'k',
                ḱ: 'k',
                ǩ: 'k',
                ḳ: 'k',
                ķ: 'k',
                ḵ: 'k',
                ƙ: 'k',
                ⱪ: 'k',
                ꝁ: 'k',
                ꝃ: 'k',
                ꝅ: 'k',
                ꞣ: 'k',
                'ⓛ': 'l',
                ｌ: 'l',
                ŀ: 'l',
                ĺ: 'l',
                ľ: 'l',
                ḷ: 'l',
                ḹ: 'l',
                ļ: 'l',
                ḽ: 'l',
                ḻ: 'l',
                ſ: 'l',
                ł: 'l',
                ƚ: 'l',
                ɫ: 'l',
                ⱡ: 'l',
                ꝉ: 'l',
                ꞁ: 'l',
                ꝇ: 'l',
                ǉ: 'lj',
                'ⓜ': 'm',
                ｍ: 'm',
                ḿ: 'm',
                ṁ: 'm',
                ṃ: 'm',
                ɱ: 'm',
                ɯ: 'm',
                'ⓝ': 'n',
                ｎ: 'n',
                ǹ: 'n',
                ń: 'n',
                ñ: 'n',
                ṅ: 'n',
                ň: 'n',
                ṇ: 'n',
                ņ: 'n',
                ṋ: 'n',
                ṉ: 'n',
                ƞ: 'n',
                ɲ: 'n',
                ŉ: 'n',
                ꞑ: 'n',
                ꞥ: 'n',
                ǌ: 'nj',
                'ⓞ': 'o',
                ｏ: 'o',
                ò: 'o',
                ó: 'o',
                ô: 'o',
                ồ: 'o',
                ố: 'o',
                ỗ: 'o',
                ổ: 'o',
                õ: 'o',
                ṍ: 'o',
                ȭ: 'o',
                ṏ: 'o',
                ō: 'o',
                ṑ: 'o',
                ṓ: 'o',
                ŏ: 'o',
                ȯ: 'o',
                ȱ: 'o',
                ö: 'o',
                ȫ: 'o',
                ỏ: 'o',
                ő: 'o',
                ǒ: 'o',
                ȍ: 'o',
                ȏ: 'o',
                ơ: 'o',
                ờ: 'o',
                ớ: 'o',
                ỡ: 'o',
                ở: 'o',
                ợ: 'o',
                ọ: 'o',
                ộ: 'o',
                ǫ: 'o',
                ǭ: 'o',
                ø: 'o',
                ǿ: 'o',
                ɔ: 'o',
                ꝋ: 'o',
                ꝍ: 'o',
                ɵ: 'o',
                ƣ: 'oi',
                ȣ: 'ou',
                ꝏ: 'oo',
                'ⓟ': 'p',
                ｐ: 'p',
                ṕ: 'p',
                ṗ: 'p',
                ƥ: 'p',
                ᵽ: 'p',
                ꝑ: 'p',
                ꝓ: 'p',
                ꝕ: 'p',
                'ⓠ': 'q',
                ｑ: 'q',
                ɋ: 'q',
                ꝗ: 'q',
                ꝙ: 'q',
                'ⓡ': 'r',
                ｒ: 'r',
                ŕ: 'r',
                ṙ: 'r',
                ř: 'r',
                ȑ: 'r',
                ȓ: 'r',
                ṛ: 'r',
                ṝ: 'r',
                ŗ: 'r',
                ṟ: 'r',
                ɍ: 'r',
                ɽ: 'r',
                ꝛ: 'r',
                ꞧ: 'r',
                ꞃ: 'r',
                'ⓢ': 's',
                ｓ: 's',
                ß: 's',
                ś: 's',
                ṥ: 's',
                ŝ: 's',
                ṡ: 's',
                š: 's',
                ṧ: 's',
                ṣ: 's',
                ṩ: 's',
                ș: 's',
                ş: 's',
                ȿ: 's',
                ꞩ: 's',
                ꞅ: 's',
                ẛ: 's',
                'ⓣ': 't',
                ｔ: 't',
                ṫ: 't',
                ẗ: 't',
                ť: 't',
                ṭ: 't',
                ț: 't',
                ţ: 't',
                ṱ: 't',
                ṯ: 't',
                ŧ: 't',
                ƭ: 't',
                ʈ: 't',
                ⱦ: 't',
                ꞇ: 't',
                ꜩ: 'tz',
                'ⓤ': 'u',
                ｕ: 'u',
                ù: 'u',
                ú: 'u',
                û: 'u',
                ũ: 'u',
                ṹ: 'u',
                ū: 'u',
                ṻ: 'u',
                ŭ: 'u',
                ü: 'u',
                ǜ: 'u',
                ǘ: 'u',
                ǖ: 'u',
                ǚ: 'u',
                ủ: 'u',
                ů: 'u',
                ű: 'u',
                ǔ: 'u',
                ȕ: 'u',
                ȗ: 'u',
                ư: 'u',
                ừ: 'u',
                ứ: 'u',
                ữ: 'u',
                ử: 'u',
                ự: 'u',
                ụ: 'u',
                ṳ: 'u',
                ų: 'u',
                ṷ: 'u',
                ṵ: 'u',
                ʉ: 'u',
                'ⓥ': 'v',
                ｖ: 'v',
                ṽ: 'v',
                ṿ: 'v',
                ʋ: 'v',
                ꝟ: 'v',
                ʌ: 'v',
                ꝡ: 'vy',
                'ⓦ': 'w',
                ｗ: 'w',
                ẁ: 'w',
                ẃ: 'w',
                ŵ: 'w',
                ẇ: 'w',
                ẅ: 'w',
                ẘ: 'w',
                ẉ: 'w',
                ⱳ: 'w',
                'ⓧ': 'x',
                ｘ: 'x',
                ẋ: 'x',
                ẍ: 'x',
                'ⓨ': 'y',
                ｙ: 'y',
                ỳ: 'y',
                ý: 'y',
                ŷ: 'y',
                ỹ: 'y',
                ȳ: 'y',
                ẏ: 'y',
                ÿ: 'y',
                ỷ: 'y',
                ẙ: 'y',
                ỵ: 'y',
                ƴ: 'y',
                ɏ: 'y',
                ỿ: 'y',
                'ⓩ': 'z',
                ｚ: 'z',
                ź: 'z',
                ẑ: 'z',
                ż: 'z',
                ž: 'z',
                ẓ: 'z',
                ẕ: 'z',
                ƶ: 'z',
                ȥ: 'z',
                ɀ: 'z',
                ⱬ: 'z',
                ꝣ: 'z',
              };
            (o = t(document)),
              (r = (function () {
                var t = 1;
                return function () {
                  return t++;
                };
              })()),
              o.on('mousemove', function (t) {
                (c.x = t.pageX), (c.y = t.pageY);
              }),
              (i = A(Object, {
                bind: function (t) {
                  var e = this;
                  return function () {
                    t.apply(e, arguments);
                  };
                },
                init: function (i) {
                  var n, s;
                  (this.opts = i = this.prepareOpts(i)),
                    (this.id = i.id),
                    i.element.data('select2') !== e &&
                      null !== i.element.data('select2') &&
                      i.element.data('select2').destroy(),
                    (this.container = this.createContainer()),
                    (this.containerId =
                      's2id_' + (i.element.attr('id') || 'autogen' + r())),
                    (this.containerSelector =
                      '#' +
                      this.containerId.replace(
                        /([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,
                        '\\$1'
                      )),
                    this.container.attr('id', this.containerId),
                    (this.body = (function (t) {
                      var e,
                        i = !1;
                      return function () {
                        return !1 === i && ((e = t()), (i = !0)), e;
                      };
                    })(function () {
                      return i.element.closest('body');
                    })),
                    _(
                      this.container,
                      this.opts.element,
                      this.opts.adaptContainerCssClass
                    ),
                    this.container.attr('style', i.element.attr('style')),
                    this.container.css(S(i.containerCss)),
                    this.container.addClass(S(i.containerCssClass)),
                    (this.elementTabIndex = this.opts.element.attr('tabindex')),
                    this.opts.element
                      .data('select2', this)
                      .attr('tabindex', '-1')
                      .before(this.container)
                      .on('click.select2', w),
                    this.container.data('select2', this),
                    (this.dropdown = this.container.find('.select2-drop')),
                    _(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass),
                    this.dropdown.addClass(S(i.dropdownCssClass)),
                    this.dropdown.data('select2', this),
                    this.dropdown.on('click', w),
                    (this.results = n = this.container.find('.select2-results')),
                    (this.search = s = this.container.find('input.select2-input')),
                    (this.queryCount = 0),
                    (this.resultsPage = 0),
                    (this.context = null),
                    this.initContainer(),
                    this.container.on('click', w),
                    (function (i) {
                      i.on('mousemove', function (i) {
                        var n = c;
                        (n !== e && n.x === i.pageX && n.y === i.pageY) ||
                          t(i.target).trigger('mousemove-filtered', i);
                      });
                    })(this.results),
                    this.dropdown.on(
                      'mousemove-filtered touchstart touchmove touchend',
                      '.select2-results',
                      this.bind(this.highlightUnderEvent)
                    ),
                    (function (t, e) {
                      var i = y(t, function (t) {
                        e.trigger('scroll-debounced', t);
                      });
                      e.on('scroll', function (t) {
                        f(t.target, e.get()) >= 0 && i(t);
                      });
                    })(80, this.results),
                    this.dropdown.on(
                      'scroll-debounced',
                      '.select2-results',
                      this.bind(this.loadMoreIfNeeded)
                    ),
                    t(this.container).on('change', '.select2-input', function (t) {
                      t.stopPropagation();
                    }),
                    t(this.dropdown).on('change', '.select2-input', function (t) {
                      t.stopPropagation();
                    }),
                    t.fn.mousewheel &&
                      n.mousewheel(function (t, e, i, s) {
                        var r = n.scrollTop();
                        s > 0 && r - s <= 0
                          ? (n.scrollTop(0), w(t))
                          : s < 0 &&
                            n.get(0).scrollHeight - n.scrollTop() + s <= n.height() &&
                            (n.scrollTop(n.get(0).scrollHeight - n.height()), w(t));
                      }),
                    b(s),
                    s.on('keyup-change input paste', this.bind(this.updateResults)),
                    s.on('focus', function () {
                      s.addClass('select2-focused');
                    }),
                    s.on('blur', function () {
                      s.removeClass('select2-focused');
                    }),
                    this.dropdown.on(
                      'mouseup',
                      '.select2-results',
                      this.bind(function (e) {
                        t(e.target).closest('.select2-result-selectable').length > 0 &&
                          (this.highlightUnderEvent(e), this.selectHighlighted(e));
                      })
                    ),
                    this.dropdown.on('click mouseup mousedown', function (t) {
                      t.stopPropagation();
                    }),
                    t.isFunction(this.opts.initSelection) &&
                      (this.initSelection(), this.monitorSource()),
                    null !== i.maximumInputLength &&
                      this.search.attr('maxlength', i.maximumInputLength);
                  var a = i.element.prop('disabled');
                  a === e && (a = !1), this.enable(!a);
                  var o = i.element.prop('readonly');
                  o === e && (o = !1),
                    this.readonly(o),
                    (l =
                      l ||
                      (function () {
                        var e = t(d);
                        e.appendTo('body');
                        var i = {
                          width: e.width() - e[0].clientWidth,
                          height: e.height() - e[0].clientHeight,
                        };
                        return e.remove(), i;
                      })()),
                    (this.autofocus = i.element.prop('autofocus')),
                    i.element.prop('autofocus', !1),
                    this.autofocus && this.focus(),
                    (this.nextSearchTerm = e);
                },
                destroy: function () {
                  var t = this.opts.element,
                    i = t.data('select2');
                  this.close(),
                    this.propertyObserver &&
                      (delete this.propertyObserver, (this.propertyObserver = null)),
                    i !== e &&
                      (i.container.remove(),
                      i.dropdown.remove(),
                      t
                        .removeClass('select2-offscreen')
                        .removeData('select2')
                        .off('.select2')
                        .prop('autofocus', this.autofocus || !1),
                      this.elementTabIndex
                        ? t.attr({tabindex: this.elementTabIndex})
                        : t.removeAttr('tabindex'),
                      t.show());
                },
                optionToData: function (t) {
                  return t.is('option')
                    ? {
                        id: t.prop('value'),
                        text: t.text(),
                        element: t.get(),
                        css: t.attr('class'),
                        disabled: t.prop('disabled'),
                        locked: g(t.attr('locked'), 'locked') || g(t.data('locked'), !0),
                      }
                    : t.is('optgroup')
                    ? {
                        text: t.attr('label'),
                        children: [],
                        element: t.get(),
                        css: t.attr('class'),
                      }
                    : void 0;
                },
                prepareOpts: function (i) {
                  var n,
                    s,
                    r,
                    a,
                    o = this;
                  if (
                    ('select' === (n = i.element).get(0).tagName.toLowerCase() &&
                      (this.select = s = i.element),
                    s &&
                      t.each(
                        [
                          'id',
                          'multiple',
                          'ajax',
                          'query',
                          'createSearchChoice',
                          'initSelection',
                          'data',
                          'tags',
                        ],
                        function () {
                          if (this in i)
                            throw new Error(
                              "Option '" +
                                this +
                                "' is not allowed for Select2 when attached to a <select> element."
                            );
                        }
                      ),
                    'function' !=
                      typeof (i = t.extend(
                        {},
                        {
                          populateResults: function (n, s, r) {
                            var a,
                              l = this.opts.id;
                            (a = function (n, s, c) {
                              var u, d, h, p, f, g, m, v, b, y;
                              for (
                                u = 0, d = (n = i.sortResults(n, s, r)).length;
                                u < d;
                                u += 1
                              )
                                (p = !(f = !0 === (h = n[u]).disabled) && l(h) !== e),
                                  (g = h.children && h.children.length > 0),
                                  (m = t('<li></li>')).addClass(
                                    'select2-results-dept-' + c
                                  ),
                                  m.addClass('select2-result'),
                                  m.addClass(
                                    p
                                      ? 'select2-result-selectable'
                                      : 'select2-result-unselectable'
                                  ),
                                  f && m.addClass('select2-disabled'),
                                  g && m.addClass('select2-result-with-children'),
                                  m.addClass(o.opts.formatResultCssClass(h)),
                                  (v = t(document.createElement('div'))).addClass(
                                    'select2-result-label'
                                  ),
                                  (y = i.formatResult(h, v, r, o.opts.escapeMarkup)) !==
                                    e && v.html(y),
                                  m.append(v),
                                  g &&
                                    ((b = t('<ul></ul>')).addClass('select2-result-sub'),
                                    a(h.children, b, c + 1),
                                    m.append(b)),
                                  m.data('select2-data', h),
                                  s.append(m);
                            })(s, n, 0);
                          },
                        },
                        t.fn.select2.defaults,
                        i
                      )).id &&
                      ((r = i.id),
                      (i.id = function (t) {
                        return t[r];
                      })),
                    t.isArray(i.element.data('select2Tags')))
                  ) {
                    if ('tags' in i)
                      throw (
                        "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " +
                        i.element.attr('id')
                      );
                    i.tags = i.element.data('select2Tags');
                  }
                  if (
                    (s
                      ? ((i.query = this.bind(function (t) {
                          var i,
                            s,
                            r,
                            a = {results: [], more: !1},
                            l = t.term;
                          (r = function (e, i) {
                            var n;
                            e.is('option')
                              ? t.matcher(l, e.text(), e) && i.push(o.optionToData(e))
                              : e.is('optgroup') &&
                                ((n = o.optionToData(e)),
                                e.children().each2(function (t, e) {
                                  r(e, n.children);
                                }),
                                n.children.length > 0 && i.push(n));
                          }),
                            (i = n.children()),
                            this.getPlaceholder() !== e &&
                              i.length > 0 &&
                              (s = this.getPlaceholderOption()) &&
                              (i = i.not(s)),
                            i.each2(function (t, e) {
                              r(e, a.results);
                            }),
                            t.callback(a);
                        })),
                        (i.id = function (t) {
                          return t.id;
                        }),
                        (i.formatResultCssClass = function (t) {
                          return t.css;
                        }))
                      : 'query' in i ||
                        ('ajax' in i
                          ? ((a = i.element.data('ajax-url')) &&
                              a.length > 0 &&
                              (i.ajax.url = a),
                            (i.query = C.call(i.element, i.ajax)))
                          : 'data' in i
                          ? (i.query = E(i.data))
                          : 'tags' in i &&
                            ((i.query = T(i.tags)),
                            i.createSearchChoice === e &&
                              (i.createSearchChoice = function (e) {
                                return {id: t.trim(e), text: t.trim(e)};
                              }),
                            i.initSelection === e &&
                              (i.initSelection = function (e, n) {
                                var s = [];
                                t(m(e.val(), i.separator)).each(function () {
                                  var e = {id: this, text: this},
                                    n = i.tags;
                                  t.isFunction(n) && (n = n()),
                                    t(n).each(function () {
                                      if (g(this.id, e.id)) return (e = this), !1;
                                    }),
                                    s.push(e);
                                }),
                                  n(s);
                              }))),
                    'function' != typeof i.query)
                  )
                    throw (
                      'query function not defined for Select2 ' + i.element.attr('id')
                    );
                  return i;
                },
                monitorSource: function () {
                  var t,
                    i,
                    n = this.opts.element;
                  n.on(
                    'change.select2',
                    this.bind(function (t) {
                      !0 !== this.opts.element.data('select2-change-triggered') &&
                        this.initSelection();
                    })
                  ),
                    (t = this.bind(function () {
                      var t = n.prop('disabled');
                      t === e && (t = !1), this.enable(!t);
                      var i = n.prop('readonly');
                      i === e && (i = !1),
                        this.readonly(i),
                        _(
                          this.container,
                          this.opts.element,
                          this.opts.adaptContainerCssClass
                        ),
                        this.container.addClass(S(this.opts.containerCssClass)),
                        _(
                          this.dropdown,
                          this.opts.element,
                          this.opts.adaptDropdownCssClass
                        ),
                        this.dropdown.addClass(S(this.opts.dropdownCssClass));
                    })),
                    n.on('propertychange.select2', t),
                    this.mutationCallback === e &&
                      (this.mutationCallback = function (e) {
                        e.forEach(t);
                      }),
                    (i =
                      window.MutationObserver ||
                      window.WebKitMutationObserver ||
                      window.MozMutationObserver) !== e &&
                      (this.propertyObserver &&
                        (delete this.propertyObserver, (this.propertyObserver = null)),
                      (this.propertyObserver = new i(this.mutationCallback)),
                      this.propertyObserver.observe(n.get(0), {
                        attributes: !0,
                        subtree: !1,
                      }));
                },
                triggerSelect: function (e) {
                  var i = t.Event('select2-selecting', {val: this.id(e), object: e});
                  return this.opts.element.trigger(i), !i.isDefaultPrevented();
                },
                triggerChange: function (e) {
                  (e = e || {}),
                    (e = t.extend({}, e, {type: 'change', val: this.val()})),
                    this.opts.element.data('select2-change-triggered', !0),
                    this.opts.element.trigger(e),
                    this.opts.element.data('select2-change-triggered', !1),
                    this.opts.element.click(),
                    this.opts.blurOnChange && this.opts.element.blur();
                },
                isInterfaceEnabled: function () {
                  return !0 === this.enabledInterface;
                },
                enableInterface: function () {
                  var t = this._enabled && !this._readonly,
                    e = !t;
                  return (
                    t !== this.enabledInterface &&
                    (this.container.toggleClass('select2-container-disabled', e),
                    this.close(),
                    (this.enabledInterface = t),
                    !0)
                  );
                },
                enable: function (t) {
                  t === e && (t = !0),
                    this._enabled !== t &&
                      ((this._enabled = t),
                      this.opts.element.prop('disabled', !t),
                      this.enableInterface());
                },
                disable: function () {
                  this.enable(!1);
                },
                readonly: function (t) {
                  return (
                    t === e && (t = !1),
                    this._readonly !== t &&
                      ((this._readonly = t),
                      this.opts.element.prop('readonly', t),
                      this.enableInterface(),
                      !0)
                  );
                },
                opened: function () {
                  return this.container.hasClass('select2-dropdown-open');
                },
                positionDropdown: function () {
                  var e,
                    i,
                    n,
                    s,
                    r,
                    a = this.dropdown,
                    o = this.container.offset(),
                    c = this.container.outerHeight(!1),
                    u = this.container.outerWidth(!1),
                    d = a.outerHeight(!1),
                    h = t(window),
                    p = h.width(),
                    f = h.height(),
                    g = h.scrollLeft() + p,
                    m = h.scrollTop() + f,
                    v = o.top + c,
                    b = o.left,
                    y = v + d <= m,
                    w = o.top - d >= this.body().scrollTop(),
                    _ = a.outerWidth(!1),
                    x = b + _ <= g;
                  a.hasClass('select2-drop-above')
                    ? ((i = !0), !w && y && ((n = !0), (i = !1)))
                    : ((i = !1), !y && w && ((n = !0), (i = !0))),
                    n &&
                      (a.hide(),
                      (o = this.container.offset()),
                      (c = this.container.outerHeight(!1)),
                      (u = this.container.outerWidth(!1)),
                      (d = a.outerHeight(!1)),
                      (g = h.scrollLeft() + p),
                      (m = h.scrollTop() + f),
                      (v = o.top + c),
                      (x = (b = o.left) + (_ = a.outerWidth(!1)) <= g),
                      a.show()),
                    this.opts.dropdownAutoWidth
                      ? ((r = t('.select2-results', a)[0]),
                        a.addClass('select2-drop-auto-width'),
                        a.css('width', ''),
                        (_ =
                          a.outerWidth(!1) +
                          (r.scrollHeight === r.clientHeight ? 0 : l.width)) > u
                          ? (u = _)
                          : (_ = u),
                        (x = b + _ <= g))
                      : this.container.removeClass('select2-drop-auto-width'),
                    'static' !== this.body().css('position') &&
                      ((v -= (e = this.body().offset()).top), (b -= e.left)),
                    x || (b = o.left + u - _),
                    (s = {left: b, width: u}),
                    i
                      ? ((s.bottom = f - o.top),
                        (s.top = 'auto'),
                        this.container.addClass('select2-drop-above'),
                        a.addClass('select2-drop-above'))
                      : ((s.top = v),
                        (s.bottom = 'auto'),
                        this.container.removeClass('select2-drop-above'),
                        a.removeClass('select2-drop-above')),
                    (s = t.extend(s, S(this.opts.dropdownCss))),
                    a.css(s);
                },
                shouldOpen: function () {
                  var e;
                  return (
                    !this.opened() &&
                    !1 !== this._enabled &&
                    !0 !== this._readonly &&
                    ((e = t.Event('select2-opening')),
                    this.opts.element.trigger(e),
                    !e.isDefaultPrevented())
                  );
                },
                clearDropdownAlignmentPreference: function () {
                  this.container.removeClass('select2-drop-above'),
                    this.dropdown.removeClass('select2-drop-above');
                },
                open: function () {
                  return !!this.shouldOpen() && (this.opening(), !0);
                },
                opening: function () {
                  var e,
                    i = this.containerId,
                    n = 'scroll.' + i,
                    s = 'resize.' + i,
                    r = 'orientationchange.' + i;
                  this.container
                    .addClass('select2-dropdown-open')
                    .addClass('select2-container-active'),
                    this.clearDropdownAlignmentPreference(),
                    this.dropdown[0] !== this.body().children().last()[0] &&
                      this.dropdown.detach().appendTo(this.body()),
                    0 == (e = t('#select2-drop-mask')).length &&
                      ((e = t(document.createElement('div')))
                        .attr('id', 'select2-drop-mask')
                        .attr('class', 'select2-drop-mask'),
                      e.hide(),
                      e.appendTo(this.body()),
                      e.on('mousedown touchstart click', function (e) {
                        var i,
                          n = t('#select2-drop');
                        n.length > 0 &&
                          ((i = n.data('select2')).opts.selectOnBlur &&
                            i.selectHighlighted({noFocus: !0}),
                          i.close({focus: !0}),
                          e.preventDefault(),
                          e.stopPropagation());
                      })),
                    this.dropdown.prev()[0] !== e[0] && this.dropdown.before(e),
                    t('#select2-drop').removeAttr('id'),
                    this.dropdown.attr('id', 'select2-drop'),
                    e.show(),
                    this.positionDropdown(),
                    this.dropdown.show(),
                    this.positionDropdown(),
                    this.dropdown.addClass('select2-drop-active');
                  var a = this;
                  this.container
                    .parents()
                    .add(window)
                    .each(function () {
                      t(this).on(s + ' ' + n + ' ' + r, function (t) {
                        a.positionDropdown();
                      });
                    });
                },
                close: function () {
                  if (this.opened()) {
                    var e = this.containerId,
                      i = 'scroll.' + e,
                      n = 'resize.' + e,
                      s = 'orientationchange.' + e;
                    this.container
                      .parents()
                      .add(window)
                      .each(function () {
                        t(this).off(i).off(n).off(s);
                      }),
                      this.clearDropdownAlignmentPreference(),
                      t('#select2-drop-mask').hide(),
                      this.dropdown.removeAttr('id'),
                      this.dropdown.hide(),
                      this.container
                        .removeClass('select2-dropdown-open')
                        .removeClass('select2-container-active'),
                      this.results.empty(),
                      this.clearSearch(),
                      this.search.removeClass('select2-active'),
                      this.opts.element.trigger(t.Event('select2-close'));
                  }
                },
                externalSearch: function (t) {
                  this.open(), this.search.val(t), this.updateResults(!1);
                },
                clearSearch: function () {},
                getMaximumSelectionSize: function () {
                  return S(this.opts.maximumSelectionSize);
                },
                ensureHighlightVisible: function () {
                  var e,
                    i,
                    n,
                    s,
                    r,
                    a,
                    o,
                    l = this.results;
                  (i = this.highlight()) < 0 ||
                    (0 != i
                      ? ((e = this.findHighlightableChoices().find(
                          '.select2-result-label'
                        )),
                        (s = (n = t(e[i])).offset().top + n.outerHeight(!0)),
                        i === e.length - 1 &&
                          (o = l.find('li.select2-more-results')).length > 0 &&
                          (s = o.offset().top + o.outerHeight(!0)),
                        s > (r = l.offset().top + l.outerHeight(!0)) &&
                          l.scrollTop(l.scrollTop() + (s - r)),
                        (a = n.offset().top - l.offset().top) < 0 &&
                          'none' != n.css('display') &&
                          l.scrollTop(l.scrollTop() + a))
                      : l.scrollTop(0));
                },
                findHighlightableChoices: function () {
                  return this.results.find(
                    '.select2-result-selectable:not(.select2-disabled, .select2-selected)'
                  );
                },
                moveHighlight: function (e) {
                  for (
                    var i = this.findHighlightableChoices(), n = this.highlight();
                    n > -1 && n < i.length;

                  ) {
                    var s = t(i[(n += e)]);
                    if (
                      s.hasClass('select2-result-selectable') &&
                      !s.hasClass('select2-disabled') &&
                      !s.hasClass('select2-selected')
                    ) {
                      this.highlight(n);
                      break;
                    }
                  }
                },
                highlight: function (e) {
                  var i,
                    n,
                    s = this.findHighlightableChoices();
                  if (0 === arguments.length)
                    return f(s.filter('.select2-highlighted')[0], s.get());
                  e >= s.length && (e = s.length - 1),
                    e < 0 && (e = 0),
                    this.removeHighlight(),
                    (i = t(s[e])).addClass('select2-highlighted'),
                    this.ensureHighlightVisible(),
                    (n = i.data('select2-data')) &&
                      this.opts.element.trigger({
                        type: 'select2-highlight',
                        val: this.id(n),
                        choice: n,
                      });
                },
                removeHighlight: function () {
                  this.results
                    .find('.select2-highlighted')
                    .removeClass('select2-highlighted');
                },
                countSelectableResults: function () {
                  return this.findHighlightableChoices().length;
                },
                highlightUnderEvent: function (e) {
                  var i = t(e.target).closest('.select2-result-selectable');
                  if (i.length > 0 && !i.is('.select2-highlighted')) {
                    var n = this.findHighlightableChoices();
                    this.highlight(n.index(i));
                  } else 0 == i.length && this.removeHighlight();
                },
                loadMoreIfNeeded: function () {
                  var t = this.results,
                    e = t.find('li.select2-more-results'),
                    i = this.resultsPage + 1,
                    n = this,
                    s = this.search.val(),
                    r = this.context;
                  0 !== e.length &&
                    e.offset().top - t.offset().top - t.height() <=
                      this.opts.loadMorePadding &&
                    (e.addClass('select2-active'),
                    this.opts.query({
                      element: this.opts.element,
                      term: s,
                      page: i,
                      context: r,
                      matcher: this.opts.matcher,
                      callback: this.bind(function (a) {
                        n.opened() &&
                          (n.opts.populateResults.call(this, t, a.results, {
                            term: s,
                            page: i,
                            context: r,
                          }),
                          n.postprocessResults(a, !1, !1),
                          !0 === a.more
                            ? (e
                                .detach()
                                .appendTo(t)
                                .text(n.opts.formatLoadMore(i + 1)),
                              window.setTimeout(function () {
                                n.loadMoreIfNeeded();
                              }, 10))
                            : e.remove(),
                          n.positionDropdown(),
                          (n.resultsPage = i),
                          (n.context = a.context),
                          this.opts.element.trigger({type: 'select2-loaded', items: a}));
                      }),
                    }));
                },
                tokenize: function () {},
                updateResults: function (i) {
                  var n,
                    s,
                    r,
                    a = this.search,
                    o = this.results,
                    l = this.opts,
                    c = this,
                    u = a.val(),
                    d = t.data(this.container, 'select2-last-term');
                  if (
                    (!0 === i || !d || !g(u, d)) &&
                    (t.data(this.container, 'select2-last-term', u),
                    !0 === i || (!1 !== this.showSearchInput && this.opened()))
                  ) {
                    r = ++this.queryCount;
                    var h = this.getMaximumSelectionSize();
                    if (
                      !(
                        h >= 1 &&
                        ((n = this.data()),
                        t.isArray(n) &&
                          n.length >= h &&
                          D(l.formatSelectionTooBig, 'formatSelectionTooBig'))
                      )
                    )
                      return a.val().length < l.minimumInputLength
                        ? (D(l.formatInputTooShort, 'formatInputTooShort')
                            ? f(
                                "<li class='select2-no-results'>" +
                                  l.formatInputTooShort(a.val(), l.minimumInputLength) +
                                  '</li>'
                              )
                            : f(''),
                          void (i && this.showSearch && this.showSearch(!0)))
                        : void (l.maximumInputLength &&
                          a.val().length > l.maximumInputLength
                            ? D(l.formatInputTooLong, 'formatInputTooLong')
                              ? f(
                                  "<li class='select2-no-results'>" +
                                    l.formatInputTooLong(a.val(), l.maximumInputLength) +
                                    '</li>'
                                )
                              : f('')
                            : (l.formatSearching &&
                                0 === this.findHighlightableChoices().length &&
                                f(
                                  "<li class='select2-searching'>" +
                                    l.formatSearching() +
                                    '</li>'
                                ),
                              a.addClass('select2-active'),
                              this.removeHighlight(),
                              (s = this.tokenize()) != e && null != s && a.val(s),
                              (this.resultsPage = 1),
                              l.query({
                                element: l.element,
                                term: a.val(),
                                page: this.resultsPage,
                                context: null,
                                matcher: l.matcher,
                                callback: this.bind(function (n) {
                                  var s;
                                  r == this.queryCount &&
                                    (this.opened()
                                      ? ((this.context =
                                          n.context === e ? null : n.context),
                                        this.opts.createSearchChoice &&
                                          '' !== a.val() &&
                                          (s = this.opts.createSearchChoice.call(
                                            c,
                                            a.val(),
                                            n.results
                                          )) !== e &&
                                          null !== s &&
                                          c.id(s) !== e &&
                                          null !== c.id(s) &&
                                          0 ===
                                            t(n.results).filter(function () {
                                              return g(c.id(this), c.id(s));
                                            }).length &&
                                          n.results.unshift(s),
                                        0 === n.results.length &&
                                        D(l.formatNoMatches, 'formatNoMatches')
                                          ? f(
                                              "<li class='select2-no-results'>" +
                                                l.formatNoMatches(a.val()) +
                                                '</li>'
                                            )
                                          : (o.empty(),
                                            c.opts.populateResults.call(
                                              this,
                                              o,
                                              n.results,
                                              {
                                                term: a.val(),
                                                page: this.resultsPage,
                                                context: null,
                                              }
                                            ),
                                            !0 === n.more &&
                                              D(l.formatLoadMore, 'formatLoadMore') &&
                                              (o.append(
                                                "<li class='select2-more-results'>" +
                                                  c.opts.escapeMarkup(
                                                    l.formatLoadMore(this.resultsPage)
                                                  ) +
                                                  '</li>'
                                              ),
                                              window.setTimeout(function () {
                                                c.loadMoreIfNeeded();
                                              }, 10)),
                                            this.postprocessResults(n, i),
                                            p(),
                                            this.opts.element.trigger({
                                              type: 'select2-loaded',
                                              items: n,
                                            })))
                                      : this.search.removeClass('select2-active'));
                                }),
                              })));
                    f(
                      "<li class='select2-selection-limit'>" +
                        l.formatSelectionTooBig(h) +
                        '</li>'
                    );
                  }
                  function p() {
                    a.removeClass('select2-active'), c.positionDropdown();
                  }
                  function f(t) {
                    o.html(t), p();
                  }
                },
                cancel: function () {
                  this.close();
                },
                blur: function () {
                  this.opts.selectOnBlur && this.selectHighlighted({noFocus: !0}),
                    this.close(),
                    this.container.removeClass('select2-container-active'),
                    this.search[0] === document.activeElement && this.search.blur(),
                    this.clearSearch(),
                    this.selection
                      .find('.select2-search-choice-focus')
                      .removeClass('select2-search-choice-focus');
                },
                focusSearch: function () {
                  !(function (t) {
                    t[0] !== document.activeElement &&
                      window.setTimeout(function () {
                        var e,
                          i = t[0],
                          n = t.val().length;
                        t.focus(),
                          t.is(':visible') &&
                            i === document.activeElement &&
                            (i.setSelectionRange
                              ? i.setSelectionRange(n, n)
                              : i.createTextRange &&
                                ((e = i.createTextRange()).collapse(!1), e.select()));
                      }, 0);
                  })(this.search);
                },
                selectHighlighted: function (t) {
                  var e = this.highlight(),
                    i = this.results
                      .find('.select2-highlighted')
                      .closest('.select2-result')
                      .data('select2-data');
                  i
                    ? (this.highlight(e), this.onSelect(i, t))
                    : t && t.noFocus && this.close();
                },
                getPlaceholder: function () {
                  var t;
                  return (
                    this.opts.element.attr('placeholder') ||
                    this.opts.element.attr('data-placeholder') ||
                    this.opts.element.data('placeholder') ||
                    this.opts.placeholder ||
                    ((t = this.getPlaceholderOption()) !== e ? t.text() : e)
                  );
                },
                getPlaceholderOption: function () {
                  if (this.select) {
                    var t = this.select.children('option').first();
                    if (this.opts.placeholderOption !== e)
                      return (
                        ('first' === this.opts.placeholderOption && t) ||
                        ('function' == typeof this.opts.placeholderOption &&
                          this.opts.placeholderOption(this.select))
                      );
                    if ('' === t.text() && '' === t.val()) return t;
                  }
                },
                initContainerWidth: function () {
                  var i = function () {
                    var i, n, s, r, a;
                    if ('off' === this.opts.width) return null;
                    if ('element' === this.opts.width)
                      return 0 === this.opts.element.outerWidth(!1)
                        ? 'auto'
                        : this.opts.element.outerWidth(!1) + 'px';
                    if ('copy' === this.opts.width || 'resolve' === this.opts.width) {
                      if ((i = this.opts.element.attr('style')) !== e)
                        for (r = 0, a = (n = i.split(';')).length; r < a; r += 1)
                          if (
                            null !==
                              (s = n[r]
                                .replace(/\s/g, '')
                                .match(
                                  /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i
                                )) &&
                            s.length >= 1
                          )
                            return s[1];
                      return 'resolve' === this.opts.width
                        ? (i = this.opts.element.css('width')).indexOf('%') > 0
                          ? i
                          : 0 === this.opts.element.outerWidth(!1)
                          ? 'auto'
                          : this.opts.element.outerWidth(!1) + 'px'
                        : null;
                    }
                    return t.isFunction(this.opts.width)
                      ? this.opts.width()
                      : this.opts.width;
                  }.call(this);
                  null !== i && this.container.css('width', i);
                },
              })),
              (n = A(i, {
                createContainer: function () {
                  return t(document.createElement('div'))
                    .attr({class: 'select2-container'})
                    .html(
                      [
                        "<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>",
                        "   <span class='select2-chosen'>&nbsp;</span><abbr class='select2-search-choice-close'></abbr>",
                        "   <span class='select2-arrow'><b></b></span>",
                        '</a>',
                        "<input class='select2-focusser select2-offscreen' type='text'/>",
                        "<div class='select2-drop select2-display-none'>",
                        "   <div class='select2-search'>",
                        "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'/>",
                        '   </div>',
                        "   <ul class='select2-results'>",
                        '   </ul>',
                        '</div>',
                      ].join('')
                    );
                },
                enableInterface: function () {
                  this.parent.enableInterface.apply(this, arguments) &&
                    this.focusser.prop('disabled', !this.isInterfaceEnabled());
                },
                opening: function () {
                  var i, n, s;
                  this.opts.minimumResultsForSearch >= 0 && this.showSearch(!0),
                    this.parent.opening.apply(this, arguments),
                    !1 !== this.showSearchInput && this.search.val(this.focusser.val()),
                    this.search.focus(),
                    (i = this.search.get(0)).createTextRange
                      ? ((n = i.createTextRange()).collapse(!1), n.select())
                      : i.setSelectionRange &&
                        ((s = this.search.val().length), i.setSelectionRange(s, s)),
                    '' === this.search.val() &&
                      this.nextSearchTerm != e &&
                      (this.search.val(this.nextSearchTerm), this.search.select()),
                    this.focusser.prop('disabled', !0).val(''),
                    this.updateResults(!0),
                    this.opts.element.trigger(t.Event('select2-open'));
                },
                close: function (t) {
                  this.opened() &&
                    (this.parent.close.apply(this, arguments),
                    (t = t || {focus: !0}),
                    this.focusser.removeAttr('disabled'),
                    t.focus && this.focusser.focus());
                },
                focus: function () {
                  this.opened()
                    ? this.close()
                    : (this.focusser.removeAttr('disabled'), this.focusser.focus());
                },
                isFocused: function () {
                  return this.container.hasClass('select2-container-active');
                },
                cancel: function () {
                  this.parent.cancel.apply(this, arguments),
                    this.focusser.removeAttr('disabled'),
                    this.focusser.focus();
                },
                destroy: function () {
                  t("label[for='" + this.focusser.attr('id') + "']").attr(
                    'for',
                    this.opts.element.attr('id')
                  ),
                    this.parent.destroy.apply(this, arguments);
                },
                initContainer: function () {
                  var e,
                    i = this.container,
                    n = this.dropdown;
                  this.opts.minimumResultsForSearch < 0
                    ? this.showSearch(!1)
                    : this.showSearch(!0),
                    (this.selection = e = i.find('.select2-choice')),
                    (this.focusser = i.find('.select2-focusser')),
                    this.focusser.attr('id', 's2id_autogen' + r()),
                    t("label[for='" + this.opts.element.attr('id') + "']").attr(
                      'for',
                      this.focusser.attr('id')
                    ),
                    this.focusser.attr('tabindex', this.elementTabIndex),
                    this.search.on(
                      'keydown',
                      this.bind(function (t) {
                        if (this.isInterfaceEnabled())
                          if (t.which !== u.PAGE_UP && t.which !== u.PAGE_DOWN)
                            switch (t.which) {
                              case u.UP:
                              case u.DOWN:
                                return (
                                  this.moveHighlight(t.which === u.UP ? -1 : 1), void w(t)
                                );
                              case u.ENTER:
                                return this.selectHighlighted(), void w(t);
                              case u.TAB:
                                return void this.selectHighlighted({noFocus: !0});
                              case u.ESC:
                                return this.cancel(t), void w(t);
                            }
                          else w(t);
                      })
                    ),
                    this.search.on(
                      'blur',
                      this.bind(function (t) {
                        document.activeElement === this.body().get(0) &&
                          window.setTimeout(
                            this.bind(function () {
                              this.search.focus();
                            }),
                            0
                          );
                      })
                    ),
                    this.focusser.on(
                      'keydown',
                      this.bind(function (t) {
                        if (
                          this.isInterfaceEnabled() &&
                          t.which !== u.TAB &&
                          !u.isControl(t) &&
                          !u.isFunctionKey(t) &&
                          t.which !== u.ESC
                        ) {
                          if (!1 !== this.opts.openOnEnter || t.which !== u.ENTER) {
                            if (
                              t.which == u.DOWN ||
                              t.which == u.UP ||
                              (t.which == u.ENTER && this.opts.openOnEnter)
                            ) {
                              if (t.altKey || t.ctrlKey || t.shiftKey || t.metaKey)
                                return;
                              return this.open(), void w(t);
                            }
                            return t.which == u.DELETE || t.which == u.BACKSPACE
                              ? (this.opts.allowClear && this.clear(), void w(t))
                              : void 0;
                          }
                          w(t);
                        }
                      })
                    ),
                    b(this.focusser),
                    this.focusser.on(
                      'keyup-change input',
                      this.bind(function (t) {
                        if (this.opts.minimumResultsForSearch >= 0) {
                          if ((t.stopPropagation(), this.opened())) return;
                          this.open();
                        }
                      })
                    ),
                    e.on(
                      'mousedown',
                      'abbr',
                      this.bind(function (t) {
                        this.isInterfaceEnabled() &&
                          (this.clear(),
                          (function (t) {
                            t.preventDefault(), t.stopImmediatePropagation();
                          })(t),
                          this.close(),
                          this.selection.focus());
                      })
                    ),
                    e.on(
                      'mousedown',
                      this.bind(function (e) {
                        this.container.hasClass('select2-container-active') ||
                          this.opts.element.trigger(t.Event('select2-focus')),
                          this.opened()
                            ? this.close()
                            : this.isInterfaceEnabled() && this.open(),
                          w(e);
                      })
                    ),
                    n.on(
                      'mousedown',
                      this.bind(function () {
                        this.search.focus();
                      })
                    ),
                    e.on(
                      'focus',
                      this.bind(function (t) {
                        w(t);
                      })
                    ),
                    this.focusser
                      .on(
                        'focus',
                        this.bind(function () {
                          this.container.hasClass('select2-container-active') ||
                            this.opts.element.trigger(t.Event('select2-focus')),
                            this.container.addClass('select2-container-active');
                        })
                      )
                      .on(
                        'blur',
                        this.bind(function () {
                          this.opened() ||
                            (this.container.removeClass('select2-container-active'),
                            this.opts.element.trigger(t.Event('select2-blur')));
                        })
                      ),
                    this.search.on(
                      'focus',
                      this.bind(function () {
                        this.container.hasClass('select2-container-active') ||
                          this.opts.element.trigger(t.Event('select2-focus')),
                          this.container.addClass('select2-container-active');
                      })
                    ),
                    this.initContainerWidth(),
                    this.opts.element.addClass('select2-offscreen'),
                    this.setPlaceholder();
                },
                clear: function (e) {
                  var i = this.selection.data('select2-data');
                  if (i) {
                    var n = t.Event('select2-clearing');
                    if ((this.opts.element.trigger(n), n.isDefaultPrevented())) return;
                    var s = this.getPlaceholderOption();
                    this.opts.element.val(s ? s.val() : ''),
                      this.selection.find('.select2-chosen').empty(),
                      this.selection.removeData('select2-data'),
                      this.setPlaceholder(),
                      !1 !== e &&
                        (this.opts.element.trigger({
                          type: 'select2-removed',
                          val: this.id(i),
                          choice: i,
                        }),
                        this.triggerChange({removed: i}));
                  }
                },
                initSelection: function () {
                  if (this.isPlaceholderOptionSelected())
                    this.updateSelection(null), this.close(), this.setPlaceholder();
                  else {
                    var t = this;
                    this.opts.initSelection.call(null, this.opts.element, function (i) {
                      i !== e &&
                        null !== i &&
                        (t.updateSelection(i), t.close(), t.setPlaceholder());
                    });
                  }
                },
                isPlaceholderOptionSelected: function () {
                  var t;
                  return (
                    !!this.getPlaceholder() &&
                    (((t = this.getPlaceholderOption()) !== e && t.prop('selected')) ||
                      '' === this.opts.element.val() ||
                      this.opts.element.val() === e ||
                      null === this.opts.element.val())
                  );
                },
                prepareOpts: function () {
                  var e = this.parent.prepareOpts.apply(this, arguments),
                    i = this;
                  return (
                    'select' === e.element.get(0).tagName.toLowerCase()
                      ? (e.initSelection = function (t, e) {
                          var n = t.find('option').filter(function () {
                            return this.selected;
                          });
                          e(i.optionToData(n));
                        })
                      : 'data' in e &&
                        (e.initSelection =
                          e.initSelection ||
                          function (i, n) {
                            var s = i.val(),
                              r = null;
                            e.query({
                              matcher: function (t, i, n) {
                                var a = g(s, e.id(n));
                                return a && (r = n), a;
                              },
                              callback: t.isFunction(n)
                                ? function () {
                                    n(r);
                                  }
                                : t.noop,
                            });
                          }),
                    e
                  );
                },
                getPlaceholder: function () {
                  return this.select && this.getPlaceholderOption() === e
                    ? e
                    : this.parent.getPlaceholder.apply(this, arguments);
                },
                setPlaceholder: function () {
                  var t = this.getPlaceholder();
                  if (this.isPlaceholderOptionSelected() && t !== e) {
                    if (this.select && this.getPlaceholderOption() === e) return;
                    this.selection
                      .find('.select2-chosen')
                      .html(this.opts.escapeMarkup(t)),
                      this.selection.addClass('select2-default'),
                      this.container.removeClass('select2-allowclear');
                  }
                },
                postprocessResults: function (e, i, n) {
                  var s = 0,
                    r = this;
                  if (
                    (this.findHighlightableChoices().each2(function (t, e) {
                      if (g(r.id(e.data('select2-data')), r.opts.element.val()))
                        return (s = t), !1;
                    }),
                    !1 !== n &&
                      (!0 === i && s >= 0 ? this.highlight(s) : this.highlight(0)),
                    !0 === i)
                  ) {
                    var a = this.opts.minimumResultsForSearch;
                    a >= 0 &&
                      this.showSearch(
                        (function e(i) {
                          var n = 0;
                          return (
                            t.each(i, function (t, i) {
                              i.children ? (n += e(i.children)) : n++;
                            }),
                            n
                          );
                        })(e.results) >= a
                      );
                  }
                },
                showSearch: function (e) {
                  this.showSearchInput !== e &&
                    ((this.showSearchInput = e),
                    this.dropdown
                      .find('.select2-search')
                      .toggleClass('select2-search-hidden', !e),
                    this.dropdown
                      .find('.select2-search')
                      .toggleClass('select2-offscreen', !e),
                    t(this.dropdown, this.container).toggleClass(
                      'select2-with-searchbox',
                      e
                    ));
                },
                onSelect: function (t, e) {
                  if (this.triggerSelect(t)) {
                    var i = this.opts.element.val(),
                      n = this.data();
                    this.opts.element.val(this.id(t)),
                      this.updateSelection(t),
                      this.opts.element.trigger({
                        type: 'select2-selected',
                        val: this.id(t),
                        choice: t,
                      }),
                      (this.nextSearchTerm = this.opts.nextSearchTerm(
                        t,
                        this.search.val()
                      )),
                      this.close(),
                      (e && e.noFocus) || this.focusser.focus(),
                      g(i, this.id(t)) || this.triggerChange({added: t, removed: n});
                  }
                },
                updateSelection: function (t) {
                  var i,
                    n,
                    s = this.selection.find('.select2-chosen');
                  this.selection.data('select2-data', t),
                    s.empty(),
                    null !== t &&
                      (i = this.opts.formatSelection(t, s, this.opts.escapeMarkup)),
                    i !== e && s.append(i),
                    (n = this.opts.formatSelectionCssClass(t, s)) !== e && s.addClass(n),
                    this.selection.removeClass('select2-default'),
                    this.opts.allowClear &&
                      this.getPlaceholder() !== e &&
                      this.container.addClass('select2-allowclear');
                },
                val: function () {
                  var t,
                    i = !1,
                    n = null,
                    s = this,
                    r = this.data();
                  if (0 === arguments.length) return this.opts.element.val();
                  if (
                    ((t = arguments[0]),
                    arguments.length > 1 && (i = arguments[1]),
                    this.select)
                  )
                    this.select
                      .val(t)
                      .find('option')
                      .filter(function () {
                        return this.selected;
                      })
                      .each2(function (t, e) {
                        return (n = s.optionToData(e)), !1;
                      }),
                      this.updateSelection(n),
                      this.setPlaceholder(),
                      i && this.triggerChange({added: n, removed: r});
                  else {
                    if (!t && 0 !== t) return void this.clear(i);
                    if (this.opts.initSelection === e)
                      throw new Error(
                        'cannot call val() if initSelection() is not defined'
                      );
                    this.opts.element.val(t),
                      this.opts.initSelection(this.opts.element, function (t) {
                        s.opts.element.val(t ? s.id(t) : ''),
                          s.updateSelection(t),
                          s.setPlaceholder(),
                          i && s.triggerChange({added: t, removed: r});
                      });
                  }
                },
                clearSearch: function () {
                  this.search.val(''), this.focusser.val('');
                },
                data: function (t) {
                  var i,
                    n = !1;
                  if (0 === arguments.length)
                    return (
                      (i = this.selection.data('select2-data')) == e && (i = null), i
                    );
                  arguments.length > 1 && (n = arguments[1]),
                    t
                      ? ((i = this.data()),
                        this.opts.element.val(t ? this.id(t) : ''),
                        this.updateSelection(t),
                        n && this.triggerChange({added: t, removed: i}))
                      : this.clear(n);
                },
              })),
              (s = A(i, {
                createContainer: function () {
                  return t(document.createElement('div'))
                    .attr({class: 'select2-container select2-container-multi'})
                    .html(
                      [
                        "<ul class='select2-choices'>",
                        "  <li class='select2-search-field'>",
                        "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>",
                        '  </li>',
                        '</ul>',
                        "<div class='select2-drop select2-drop-multi select2-display-none'>",
                        "   <ul class='select2-results'>",
                        '   </ul>',
                        '</div>',
                      ].join('')
                    );
                },
                prepareOpts: function () {
                  var e = this.parent.prepareOpts.apply(this, arguments),
                    i = this;
                  return (
                    'select' === e.element.get(0).tagName.toLowerCase()
                      ? (e.initSelection = function (t, e) {
                          var n = [];
                          t
                            .find('option')
                            .filter(function () {
                              return this.selected;
                            })
                            .each2(function (t, e) {
                              n.push(i.optionToData(e));
                            }),
                            e(n);
                        })
                      : 'data' in e &&
                        (e.initSelection =
                          e.initSelection ||
                          function (i, n) {
                            var s = m(i.val(), e.separator),
                              r = [];
                            e.query({
                              matcher: function (i, n, a) {
                                var o = t.grep(s, function (t) {
                                  return g(t, e.id(a));
                                }).length;
                                return o && r.push(a), o;
                              },
                              callback: t.isFunction(n)
                                ? function () {
                                    for (var t = [], i = 0; i < s.length; i++)
                                      for (var a = s[i], o = 0; o < r.length; o++) {
                                        var l = r[o];
                                        if (g(a, e.id(l))) {
                                          t.push(l), r.splice(o, 1);
                                          break;
                                        }
                                      }
                                    n(t);
                                  }
                                : t.noop,
                            });
                          }),
                    e
                  );
                },
                selectChoice: function (t) {
                  var e = this.container.find('.select2-search-choice-focus');
                  (e.length && t && t[0] == e[0]) ||
                    (e.length && this.opts.element.trigger('choice-deselected', e),
                    e.removeClass('select2-search-choice-focus'),
                    t &&
                      t.length &&
                      (this.close(),
                      t.addClass('select2-search-choice-focus'),
                      this.opts.element.trigger('choice-selected', t)));
                },
                destroy: function () {
                  t("label[for='" + this.search.attr('id') + "']").attr(
                    'for',
                    this.opts.element.attr('id')
                  ),
                    this.parent.destroy.apply(this, arguments);
                },
                initContainer: function () {
                  var e,
                    i = '.select2-choices';
                  (this.searchContainer = this.container.find('.select2-search-field')),
                    (this.selection = e = this.container.find(i));
                  var n = this;
                  this.selection.on(
                    'click',
                    '.select2-search-choice:not(.select2-locked)',
                    function (e) {
                      n.search[0].focus(), n.selectChoice(t(this));
                    }
                  ),
                    this.search.attr('id', 's2id_autogen' + r()),
                    t("label[for='" + this.opts.element.attr('id') + "']").attr(
                      'for',
                      this.search.attr('id')
                    ),
                    this.search.on(
                      'input paste',
                      this.bind(function () {
                        this.isInterfaceEnabled() && (this.opened() || this.open());
                      })
                    ),
                    this.search.attr('tabindex', this.elementTabIndex),
                    (this.keydowns = 0),
                    this.search.on(
                      'keydown',
                      this.bind(function (i) {
                        if (this.isInterfaceEnabled()) {
                          ++this.keydowns;
                          var n = e.find('.select2-search-choice-focus'),
                            s = n.prev('.select2-search-choice:not(.select2-locked)'),
                            r = n.next('.select2-search-choice:not(.select2-locked)'),
                            a = (function (e) {
                              var i = 0,
                                n = 0;
                              if ('selectionStart' in (e = t(e)[0]))
                                (i = e.selectionStart), (n = e.selectionEnd - i);
                              else if ('selection' in document) {
                                e.focus();
                                var s = document.selection.createRange();
                                (n = document.selection.createRange().text.length),
                                  s.moveStart('character', -e.value.length),
                                  (i = s.text.length - n);
                              }
                              return {offset: i, length: n};
                            })(this.search);
                          if (
                            n.length &&
                            (i.which == u.LEFT ||
                              i.which == u.RIGHT ||
                              i.which == u.BACKSPACE ||
                              i.which == u.DELETE ||
                              i.which == u.ENTER)
                          ) {
                            var o = n;
                            return (
                              i.which == u.LEFT && s.length
                                ? (o = s)
                                : i.which == u.RIGHT
                                ? (o = r.length ? r : null)
                                : i.which === u.BACKSPACE
                                ? (this.unselect(n.first()),
                                  this.search.width(10),
                                  (o = s.length ? s : r))
                                : i.which == u.DELETE
                                ? (this.unselect(n.first()),
                                  this.search.width(10),
                                  (o = r.length ? r : null))
                                : i.which == u.ENTER && (o = null),
                              this.selectChoice(o),
                              w(i),
                              void ((o && o.length) || this.open())
                            );
                          }
                          if (
                            ((i.which === u.BACKSPACE && 1 == this.keydowns) ||
                              i.which == u.LEFT) &&
                            0 == a.offset &&
                            !a.length
                          )
                            return (
                              this.selectChoice(
                                e
                                  .find('.select2-search-choice:not(.select2-locked)')
                                  .last()
                              ),
                              void w(i)
                            );
                          if ((this.selectChoice(null), this.opened()))
                            switch (i.which) {
                              case u.UP:
                              case u.DOWN:
                                return (
                                  this.moveHighlight(i.which === u.UP ? -1 : 1), void w(i)
                                );
                              case u.ENTER:
                                return this.selectHighlighted(), void w(i);
                              case u.TAB:
                                return (
                                  this.selectHighlighted({noFocus: !0}), void this.close()
                                );
                              case u.ESC:
                                return this.cancel(i), void w(i);
                            }
                          if (
                            i.which !== u.TAB &&
                            !u.isControl(i) &&
                            !u.isFunctionKey(i) &&
                            i.which !== u.BACKSPACE &&
                            i.which !== u.ESC
                          ) {
                            if (i.which === u.ENTER) {
                              if (!1 === this.opts.openOnEnter) return;
                              if (i.altKey || i.ctrlKey || i.shiftKey || i.metaKey)
                                return;
                            }
                            this.open(),
                              (i.which !== u.PAGE_UP && i.which !== u.PAGE_DOWN) || w(i),
                              i.which === u.ENTER && w(i);
                          }
                        }
                      })
                    ),
                    this.search.on(
                      'keyup',
                      this.bind(function (t) {
                        (this.keydowns = 0), this.resizeSearch();
                      })
                    ),
                    this.search.on(
                      'blur',
                      this.bind(function (e) {
                        this.container.removeClass('select2-container-active'),
                          this.search.removeClass('select2-focused'),
                          this.selectChoice(null),
                          this.opened() || this.clearSearch(),
                          e.stopImmediatePropagation(),
                          this.opts.element.trigger(t.Event('select2-blur'));
                      })
                    ),
                    this.container.on(
                      'click',
                      i,
                      this.bind(function (e) {
                        this.isInterfaceEnabled() &&
                          (t(e.target).closest('.select2-search-choice').length > 0 ||
                            (this.selectChoice(null),
                            this.clearPlaceholder(),
                            this.container.hasClass('select2-container-active') ||
                              this.opts.element.trigger(t.Event('select2-focus')),
                            this.open(),
                            this.focusSearch(),
                            e.preventDefault()));
                      })
                    ),
                    this.container.on(
                      'focus',
                      i,
                      this.bind(function () {
                        this.isInterfaceEnabled() &&
                          (this.container.hasClass('select2-container-active') ||
                            this.opts.element.trigger(t.Event('select2-focus')),
                          this.container.addClass('select2-container-active'),
                          this.dropdown.addClass('select2-drop-active'),
                          this.clearPlaceholder());
                      })
                    ),
                    this.initContainerWidth(),
                    this.opts.element.addClass('select2-offscreen'),
                    this.clearSearch();
                },
                enableInterface: function () {
                  this.parent.enableInterface.apply(this, arguments) &&
                    this.search.prop('disabled', !this.isInterfaceEnabled());
                },
                initSelection: function () {
                  if (
                    ('' === this.opts.element.val() &&
                      '' === this.opts.element.text() &&
                      (this.updateSelection([]), this.close(), this.clearSearch()),
                    this.select || '' !== this.opts.element.val())
                  ) {
                    var t = this;
                    this.opts.initSelection.call(null, this.opts.element, function (i) {
                      i !== e &&
                        null !== i &&
                        (t.updateSelection(i), t.close(), t.clearSearch());
                    });
                  }
                },
                clearSearch: function () {
                  var t = this.getPlaceholder(),
                    i = this.getMaxSearchWidth();
                  t !== e &&
                  0 === this.getVal().length &&
                  !1 === this.search.hasClass('select2-focused')
                    ? (this.search.val(t).addClass('select2-default'),
                      this.search.width(i > 0 ? i : this.container.css('width')))
                    : this.search.val('').width(10);
                },
                clearPlaceholder: function () {
                  this.search.hasClass('select2-default') &&
                    this.search.val('').removeClass('select2-default');
                },
                opening: function () {
                  this.clearPlaceholder(),
                    this.resizeSearch(),
                    this.parent.opening.apply(this, arguments),
                    this.focusSearch(),
                    this.updateResults(!0),
                    this.search.focus(),
                    this.opts.element.trigger(t.Event('select2-open'));
                },
                close: function () {
                  this.opened() && this.parent.close.apply(this, arguments);
                },
                focus: function () {
                  this.close(), this.search.focus();
                },
                isFocused: function () {
                  return this.search.hasClass('select2-focused');
                },
                updateSelection: function (e) {
                  var i = [],
                    n = [],
                    s = this;
                  t(e).each(function () {
                    f(s.id(this), i) < 0 && (i.push(s.id(this)), n.push(this));
                  }),
                    (e = n),
                    this.selection.find('.select2-search-choice').remove(),
                    t(e).each(function () {
                      s.addSelectedChoice(this);
                    }),
                    s.postprocessResults();
                },
                tokenize: function () {
                  var t = this.search.val();
                  null !=
                    (t = this.opts.tokenizer.call(
                      this,
                      t,
                      this.data(),
                      this.bind(this.onSelect),
                      this.opts
                    )) &&
                    t != e &&
                    (this.search.val(t), t.length > 0 && this.open());
                },
                onSelect: function (t, e) {
                  this.triggerSelect(t) &&
                    (this.addSelectedChoice(t),
                    this.opts.element.trigger({
                      type: 'selected',
                      val: this.id(t),
                      choice: t,
                    }),
                    (!this.select && this.opts.closeOnSelect) ||
                      this.postprocessResults(t, !1, !0 === this.opts.closeOnSelect),
                    this.opts.closeOnSelect
                      ? (this.close(), this.search.width(10))
                      : this.countSelectableResults() > 0
                      ? (this.search.width(10),
                        this.resizeSearch(),
                        this.getMaximumSelectionSize() > 0 &&
                          this.val().length >= this.getMaximumSelectionSize() &&
                          this.updateResults(!0),
                        this.positionDropdown())
                      : (this.close(), this.search.width(10)),
                    this.triggerChange({added: t}),
                    (e && e.noFocus) || this.focusSearch());
                },
                cancel: function () {
                  this.close(), this.focusSearch();
                },
                addSelectedChoice: function (i) {
                  var n,
                    s,
                    r = !i.locked,
                    a = t(
                      "<li class='select2-search-choice'>    <div></div>    <a href='#' class='select2-search-choice-close' tabindex='-1'></a></li>"
                    ),
                    o = t(
                      "<li class='select2-search-choice select2-locked'><div></div></li>"
                    ),
                    l = r ? a : o,
                    c = this.id(i),
                    u = this.getVal();
                  (n = this.opts.formatSelection(
                    i,
                    l.find('div'),
                    this.opts.escapeMarkup
                  )) != e && l.find('div').replaceWith('<div>' + n + '</div>'),
                    (s = this.opts.formatSelectionCssClass(i, l.find('div'))) != e &&
                      l.addClass(s),
                    r &&
                      l
                        .find('.select2-search-choice-close')
                        .on('mousedown', w)
                        .on(
                          'click dblclick',
                          this.bind(function (e) {
                            this.isInterfaceEnabled() &&
                              (t(e.target)
                                .closest('.select2-search-choice')
                                .fadeOut(
                                  'fast',
                                  this.bind(function () {
                                    this.unselect(t(e.target)),
                                      this.selection
                                        .find('.select2-search-choice-focus')
                                        .removeClass('select2-search-choice-focus'),
                                      this.close(),
                                      this.focusSearch();
                                  })
                                )
                                .dequeue(),
                              w(e));
                          })
                        )
                        .on(
                          'focus',
                          this.bind(function () {
                            this.isInterfaceEnabled() &&
                              (this.container.addClass('select2-container-active'),
                              this.dropdown.addClass('select2-drop-active'));
                          })
                        ),
                    l.data('select2-data', i),
                    l.insertBefore(this.searchContainer),
                    u.push(c),
                    this.setVal(u);
                },
                unselect: function (e) {
                  var i,
                    n,
                    s = this.getVal();
                  if (0 === (e = e.closest('.select2-search-choice')).length)
                    throw 'Invalid argument: ' + e + '. Must be .select2-search-choice';
                  if ((i = e.data('select2-data'))) {
                    for (; (n = f(this.id(i), s)) >= 0; )
                      s.splice(n, 1),
                        this.setVal(s),
                        this.select && this.postprocessResults();
                    var r = t.Event('select2-removing');
                    (r.val = this.id(i)),
                      (r.choice = i),
                      this.opts.element.trigger(r),
                      r.isDefaultPrevented() ||
                        (e.remove(),
                        this.opts.element.trigger({
                          type: 'select2-removed',
                          val: this.id(i),
                          choice: i,
                        }),
                        this.triggerChange({removed: i}));
                  }
                },
                postprocessResults: function (t, e, i) {
                  var n = this.getVal(),
                    s = this.results.find('.select2-result'),
                    r = this.results.find('.select2-result-with-children'),
                    a = this;
                  s.each2(function (t, e) {
                    f(a.id(e.data('select2-data')), n) >= 0 &&
                      (e.addClass('select2-selected'),
                      e.find('.select2-result-selectable').addClass('select2-selected'));
                  }),
                    r.each2(function (t, e) {
                      e.is('.select2-result-selectable') ||
                        0 !==
                          e.find('.select2-result-selectable:not(.select2-selected)')
                            .length ||
                        e.addClass('select2-selected');
                    }),
                    -1 == this.highlight() && !1 !== i && a.highlight(0),
                    !this.opts.createSearchChoice &&
                      !s.filter('.select2-result:not(.select2-selected)').length > 0 &&
                      (!t ||
                        (t &&
                          !t.more &&
                          0 === this.results.find('.select2-no-results').length)) &&
                      D(a.opts.formatNoMatches, 'formatNoMatches') &&
                      this.results.append(
                        "<li class='select2-no-results'>" +
                          a.opts.formatNoMatches(a.search.val()) +
                          '</li>'
                      );
                },
                getMaxSearchWidth: function () {
                  return this.selection.width() - v(this.search);
                },
                resizeSearch: function () {
                  var e,
                    i,
                    n,
                    s,
                    r = v(this.search);
                  (e =
                    (function (e) {
                      if (!a) {
                        var i = e[0].currentStyle || window.getComputedStyle(e[0], null);
                        (a = t(document.createElement('div')).css({
                          position: 'absolute',
                          left: '-10000px',
                          top: '-10000px',
                          display: 'none',
                          fontSize: i.fontSize,
                          fontFamily: i.fontFamily,
                          fontStyle: i.fontStyle,
                          fontWeight: i.fontWeight,
                          letterSpacing: i.letterSpacing,
                          textTransform: i.textTransform,
                          whiteSpace: 'nowrap',
                        })).attr('class', 'select2-sizer'),
                          t('body').append(a);
                      }
                      return a.text(e.val()), a.width();
                    })(this.search) + 10),
                    (i = this.search.offset().left),
                    (s =
                      (n = this.selection.width()) -
                      (i - this.selection.offset().left) -
                      r) < e && (s = n - r),
                    s < 40 && (s = n - r),
                    s <= 0 && (s = e),
                    this.search.width(Math.floor(s));
                },
                getVal: function () {
                  var t;
                  return this.select
                    ? null === (t = this.select.val())
                      ? []
                      : t
                    : m((t = this.opts.element.val()), this.opts.separator);
                },
                setVal: function (e) {
                  var i;
                  this.select
                    ? this.select.val(e)
                    : ((i = []),
                      t(e).each(function () {
                        f(this, i) < 0 && i.push(this);
                      }),
                      this.opts.element.val(
                        0 === i.length ? '' : i.join(this.opts.separator)
                      ));
                },
                buildChangeDetails: function (t, e) {
                  (e = e.slice(0)), (t = t.slice(0));
                  for (var i = 0; i < e.length; i++)
                    for (var n = 0; n < t.length; n++)
                      g(this.opts.id(e[i]), this.opts.id(t[n])) &&
                        (e.splice(i, 1), i > 0 && i--, t.splice(n, 1), n--);
                  return {added: e, removed: t};
                },
                val: function (i, n) {
                  var s,
                    r = this;
                  if (0 === arguments.length) return this.getVal();
                  if (((s = this.data()).length || (s = []), !i && 0 !== i))
                    return (
                      this.opts.element.val(''),
                      this.updateSelection([]),
                      this.clearSearch(),
                      void (n && this.triggerChange({added: this.data(), removed: s}))
                    );
                  if ((this.setVal(i), this.select))
                    this.opts.initSelection(this.select, this.bind(this.updateSelection)),
                      n && this.triggerChange(this.buildChangeDetails(s, this.data()));
                  else {
                    if (this.opts.initSelection === e)
                      throw new Error(
                        'val() cannot be called if initSelection() is not defined'
                      );
                    this.opts.initSelection(this.opts.element, function (e) {
                      var i = t.map(e, r.id);
                      r.setVal(i),
                        r.updateSelection(e),
                        r.clearSearch(),
                        n && r.triggerChange(r.buildChangeDetails(s, r.data()));
                    });
                  }
                  this.clearSearch();
                },
                onSortStart: function () {
                  if (this.select)
                    throw new Error(
                      "Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead."
                    );
                  this.search.width(0), this.searchContainer.hide();
                },
                onSortEnd: function () {
                  var e = [],
                    i = this;
                  this.searchContainer.show(),
                    this.searchContainer.appendTo(this.searchContainer.parent()),
                    this.resizeSearch(),
                    this.selection.find('.select2-search-choice').each(function () {
                      e.push(i.opts.id(t(this).data('select2-data')));
                    }),
                    this.setVal(e),
                    this.triggerChange();
                },
                data: function (e, i) {
                  var n,
                    s,
                    r = this;
                  if (0 === arguments.length)
                    return this.selection
                      .find('.select2-search-choice')
                      .map(function () {
                        return t(this).data('select2-data');
                      })
                      .get();
                  (s = this.data()),
                    e || (e = []),
                    (n = t.map(e, function (t) {
                      return r.opts.id(t);
                    })),
                    this.setVal(n),
                    this.updateSelection(e),
                    this.clearSearch(),
                    i && this.triggerChange(this.buildChangeDetails(s, this.data()));
                },
              })),
              (t.fn.select2 = function () {
                var i,
                  r,
                  a,
                  o,
                  l,
                  c = Array.prototype.slice.call(arguments, 0),
                  u = [
                    'val',
                    'destroy',
                    'opened',
                    'open',
                    'close',
                    'focus',
                    'isFocused',
                    'container',
                    'dropdown',
                    'onSortStart',
                    'onSortEnd',
                    'enable',
                    'disable',
                    'readonly',
                    'positionDropdown',
                    'data',
                    'search',
                  ],
                  d = ['opened', 'isFocused', 'container', 'dropdown'],
                  h = ['val', 'data'],
                  p = {search: 'externalSearch'};
                return (
                  this.each(function () {
                    if (0 === c.length || 'object' == typeof c[0])
                      ((i = 0 === c.length ? {} : t.extend({}, c[0])).element = t(this)),
                        'select' === i.element.get(0).tagName.toLowerCase()
                          ? (l = i.element.prop('multiple'))
                          : ((l = i.multiple || !1),
                            'tags' in i && (i.multiple = l = !0)),
                        (r = l ? new s() : new n()).init(i);
                    else {
                      if ('string' != typeof c[0])
                        throw 'Invalid arguments to select2 plugin: ' + c;
                      if (f(c[0], u) < 0) throw 'Unknown method: ' + c[0];
                      if (((o = e), (r = t(this).data('select2')) === e)) return;
                      if (
                        ('container' === (a = c[0])
                          ? (o = r.container)
                          : 'dropdown' === a
                          ? (o = r.dropdown)
                          : (p[a] && (a = p[a]), (o = r[a].apply(r, c.slice(1)))),
                        f(c[0], d) >= 0 || (f(c[0], h) && 1 == c.length))
                      )
                        return !1;
                    }
                  }),
                  o === e ? this : o
                );
              }),
              (t.fn.select2.defaults = {
                width: 'copy',
                loadMorePadding: 0,
                closeOnSelect: !0,
                openOnEnter: !0,
                containerCss: {},
                dropdownCss: {},
                containerCssClass: '',
                dropdownCssClass: '',
                formatResult: function (t, e, i, n) {
                  var s = [];
                  return x(t.text, i.term, s, n), s.join('');
                },
                formatSelection: function (t, i, n) {
                  return t ? n(t.text) : e;
                },
                sortResults: function (t, e, i) {
                  return t;
                },
                formatResultCssClass: function (t) {
                  return e;
                },
                formatSelectionCssClass: function (t, i) {
                  return e;
                },
                formatNoMatches: function () {
                  return 'No matches found';
                },
                formatInputTooShort: function (t, e) {
                  var i = e - t.length;
                  return 'Please enter ' + i + ' more character' + (1 == i ? '' : 's');
                },
                formatInputTooLong: function (t, e) {
                  var i = t.length - e;
                  return 'Please delete ' + i + ' character' + (1 == i ? '' : 's');
                },
                formatSelectionTooBig: function (t) {
                  return 'You can only select ' + t + ' item' + (1 == t ? '' : 's');
                },
                formatLoadMore: function (t) {
                  return 'Loading more results...';
                },
                formatSearching: function () {
                  return 'Searching...';
                },
                minimumResultsForSearch: 0,
                minimumInputLength: 0,
                maximumInputLength: null,
                maximumSelectionSize: 0,
                id: function (t) {
                  return t.id;
                },
                matcher: function (t, e) {
                  return (
                    p('' + e)
                      .toUpperCase()
                      .indexOf(p('' + t).toUpperCase()) >= 0
                  );
                },
                separator: ',',
                tokenSeparators: [],
                tokenizer: function (t, i, n, s) {
                  var r,
                    a,
                    o,
                    l,
                    c,
                    u = t,
                    d = !1;
                  if (
                    !s.createSearchChoice ||
                    !s.tokenSeparators ||
                    s.tokenSeparators.length < 1
                  )
                    return e;
                  for (;;) {
                    for (
                      a = -1, o = 0, l = s.tokenSeparators.length;
                      o < l && ((c = s.tokenSeparators[o]), !((a = t.indexOf(c)) >= 0));
                      o++
                    );
                    if (a < 0) break;
                    if (
                      ((r = t.substring(0, a)),
                      (t = t.substring(a + c.length)),
                      r.length > 0 &&
                        (r = s.createSearchChoice.call(this, r, i)) !== e &&
                        null !== r &&
                        s.id(r) !== e &&
                        null !== s.id(r))
                    ) {
                      for (d = !1, o = 0, l = i.length; o < l; o++)
                        if (g(s.id(r), s.id(i[o]))) {
                          d = !0;
                          break;
                        }
                      d || n(r);
                    }
                  }
                  return u !== t ? t : void 0;
                },
                escapeMarkup: k,
                blurOnChange: !1,
                selectOnBlur: !1,
                adaptContainerCssClass: function (t) {
                  return t;
                },
                adaptDropdownCssClass: function (t) {
                  return null;
                },
                nextSearchTerm: function (t, i) {
                  return e;
                },
              }),
              (t.fn.select2.ajaxDefaults = {
                transport: t.ajax,
                params: {type: 'GET', cache: !1, dataType: 'json'},
              }),
              (window.Select2 = {
                query: {ajax: C, local: E, tags: T},
                util: {debounce: y, markMatch: x, escapeMarkup: k, stripDiacritics: p},
                class: {abstract: i, single: n, multi: s},
              });
          }
          function p(t) {
            var e, i, n, s;
            if (!t || t.length < 1) return t;
            for (e = '', i = 0, n = t.length; i < n; i++)
              (s = t.charAt(i)), (e += h[s] || s);
            return e;
          }
          function f(t, e) {
            for (var i = 0, n = e.length; i < n; i += 1) if (g(t, e[i])) return i;
            return -1;
          }
          function g(t, i) {
            return (
              t === i ||
              (t !== e &&
                i !== e &&
                null !== t &&
                null !== i &&
                (t.constructor === String
                  ? t + '' == i + ''
                  : i.constructor === String && i + '' == t + ''))
            );
          }
          function m(e, i) {
            var n, s, r;
            if (null === e || e.length < 1) return [];
            for (s = 0, r = (n = e.split(i)).length; s < r; s += 1) n[s] = t.trim(n[s]);
            return n;
          }
          function v(t) {
            return t.outerWidth(!1) - t.width();
          }
          function b(i) {
            var n = 'keyup-change-value';
            i.on('keydown', function () {
              t.data(i, n) === e && t.data(i, n, i.val());
            }),
              i.on('keyup', function () {
                var s = t.data(i, n);
                s !== e &&
                  i.val() !== s &&
                  (t.removeData(i, n), i.trigger('keyup-change'));
              });
          }
          function y(t, i, n) {
            var s;
            return (
              (n = n || e),
              function () {
                var e = arguments;
                window.clearTimeout(s),
                  (s = window.setTimeout(function () {
                    i.apply(n, e);
                  }, t));
              }
            );
          }
          function w(t) {
            t.preventDefault(), t.stopPropagation();
          }
          function _(e, i, n) {
            var s,
              r,
              a = [];
            (s = e.attr('class')) &&
              t((s = '' + s).split(' ')).each2(function () {
                0 === this.indexOf('select2-') && a.push(this);
              }),
              (s = i.attr('class')) &&
                t((s = '' + s).split(' ')).each2(function () {
                  0 !== this.indexOf('select2-') && (r = n(this)) && a.push(r);
                }),
              e.attr('class', a.join(' '));
          }
          function x(t, e, i, n) {
            var s = p(t.toUpperCase()).indexOf(p(e.toUpperCase())),
              r = e.length;
            s < 0
              ? i.push(n(t))
              : (i.push(n(t.substring(0, s))),
                i.push("<span class='select2-match'>"),
                i.push(n(t.substring(s, s + r))),
                i.push('</span>'),
                i.push(n(t.substring(s + r, t.length))));
          }
          function k(t) {
            var e = {
              '\\': '&#92;',
              '&': '&amp;',
              '<': '&lt;',
              '>': '&gt;',
              '"': '&quot;',
              "'": '&#39;',
              '/': '&#47;',
            };
            return String(t).replace(/[&<>"'\/\\]/g, function (t) {
              return e[t];
            });
          }
          function C(i) {
            var n,
              s = null,
              r = i.quietMillis || 100,
              a = i.url,
              o = this;
            return function (l) {
              window.clearTimeout(n),
                (n = window.setTimeout(function () {
                  var n = i.data,
                    r = a,
                    c = i.transport || t.fn.select2.ajaxDefaults.transport,
                    u = {
                      type: i.type || 'GET',
                      cache: i.cache || !1,
                      jsonpCallback: i.jsonpCallback || e,
                      dataType: i.dataType || 'json',
                    },
                    d = t.extend({}, t.fn.select2.ajaxDefaults.params, u);
                  (n = n ? n.call(o, l.term, l.page, l.context) : null),
                    (r =
                      'function' == typeof r ? r.call(o, l.term, l.page, l.context) : r),
                    s && s.abort(),
                    i.params &&
                      (t.isFunction(i.params)
                        ? t.extend(d, i.params.call(o))
                        : t.extend(d, i.params)),
                    t.extend(d, {
                      url: r,
                      dataType: i.dataType,
                      data: n,
                      success: function (t) {
                        var e = i.results(t, l.page);
                        l.callback(e);
                      },
                    }),
                    (s = c.call(o, d));
                }, r));
            };
          }
          function E(e) {
            var i,
              n,
              s = e,
              r = function (t) {
                return '' + t.text;
              };
            t.isArray(s) && (s = {results: (n = s)}),
              !1 === t.isFunction(s) &&
                ((n = s),
                (s = function () {
                  return n;
                }));
            var a = s();
            return (
              a.text &&
                ((r = a.text),
                t.isFunction(r) ||
                  ((i = a.text),
                  (r = function (t) {
                    return t[i];
                  }))),
              function (e) {
                var i,
                  n = e.term,
                  a = {results: []};
                '' !== n
                  ? ((i = function (s, a) {
                      var o, l;
                      if ((s = s[0]).children) {
                        for (l in ((o = {}), s)) s.hasOwnProperty(l) && (o[l] = s[l]);
                        (o.children = []),
                          t(s.children).each2(function (t, e) {
                            i(e, o.children);
                          }),
                          (o.children.length || e.matcher(n, r(o), s)) && a.push(o);
                      } else e.matcher(n, r(s), s) && a.push(s);
                    }),
                    t(s().results).each2(function (t, e) {
                      i(e, a.results);
                    }),
                    e.callback(a))
                  : e.callback(s());
              }
            );
          }
          function T(i) {
            var n = t.isFunction(i);
            return function (s) {
              var r = s.term,
                a = {results: []};
              t(n ? i() : i).each(function () {
                var t = this.text !== e,
                  i = t ? this.text : this;
                ('' === r || s.matcher(r, i)) &&
                  a.results.push(t ? this : {id: this, text: this});
              }),
                s.callback(a);
            };
          }
          function D(e, i) {
            if (t.isFunction(e)) return !0;
            if (!e) return !1;
            throw new Error(i + ' must be a function or a falsy value');
          }
          function S(e) {
            return t.isFunction(e) ? e() : e;
          }
          function A(e, i) {
            var n = function () {};
            return (
              ((n.prototype = new e()).constructor = n),
              (n.prototype.parent = e.prototype),
              (n.prototype = t.extend(n.prototype, i)),
              n
            );
          }
        })(jQuery);
    },
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e) {
      !(function (t) {
        'use strict';
        t.extend({
          tablesorter: new (function () {
            var e = this;
            function i() {
              var t = arguments[0],
                e = arguments.length > 1 ? Array.prototype.slice.call(arguments) : t;
              'undefined' != typeof console && void 0 !== console.log
                ? console[/error/i.test(t) ? 'error' : /warn/i.test(t) ? 'warn' : 'log'](
                    e
                  )
                : alert(e);
            }
            function n(t, e) {
              i(t + ' (' + (new Date().getTime() - e.getTime()) + 'ms)');
            }
            function s(t) {
              for (var e in t) return !1;
              return !0;
            }
            function r(i, n, s) {
              if (!n) return '';
              var r,
                a = i.config,
                o = a.textExtraction || '',
                l = '';
              return (
                (l =
                  'basic' === o
                    ? t(n).attr(a.textAttribute) ||
                      n.textContent ||
                      n.innerText ||
                      t(n).text() ||
                      ''
                    : 'function' == typeof o
                    ? o(n, i, s)
                    : 'function' == typeof (r = e.getColumnData(i, o, s))
                    ? r(n, i, s)
                    : n.textContent || n.innerText || t(n).text() || ''),
                t.trim(l)
              );
            }
            function a(t, n, s, a) {
              for (var o, l = e.parsers.length, c = !1, u = '', d = !0; '' === u && d; )
                n[++s]
                  ? ((u = r(t, (c = n[s].cells[a]), a)),
                    t.config.debug &&
                      i(
                        'Checking if value was empty on row ' +
                          s +
                          ', column: ' +
                          a +
                          ': "' +
                          u +
                          '"'
                      ))
                  : (d = !1);
              for (; --l >= 0; )
                if ((o = e.parsers[l]) && 'text' !== o.id && o.is && o.is(u, t, c))
                  return o;
              return e.getParserById('text');
            }
            function o(t) {
              var s,
                r,
                o,
                l,
                c,
                u,
                d,
                h,
                p,
                f,
                g = t.config,
                m = (g.$tbodies = g.$table.children(
                  'tbody:not(.' + g.cssInfoBlock + ')'
                )),
                v = 0,
                b = '',
                y = m.length;
              if (0 === y)
                return g.debug
                  ? i('Warning: *Empty table!* Not building a parser cache')
                  : '';
              for (
                g.debug && ((f = new Date()), i('Detecting parsers for each column')),
                  r = {extractors: [], parsers: []};
                v < y;

              ) {
                if ((s = m[v].rows)[v])
                  for (o = g.columns, l = 0; l < o; l++)
                    (c = g.$headers.filter('[data-column="' + l + '"]:last')),
                      (u = e.getColumnData(t, g.headers, l)),
                      (p = e.getParserById(e.getData(c, u, 'extractor'))),
                      (h = e.getParserById(e.getData(c, u, 'sorter'))),
                      (d = 'false' === e.getData(c, u, 'parser')),
                      (g.empties[l] =
                        e.getData(c, u, 'empty') ||
                        g.emptyTo ||
                        (g.emptyToBottom ? 'bottom' : 'top')),
                      (g.strings[l] = e.getData(c, u, 'string') || g.stringTo || 'max'),
                      d && (h = e.getParserById('no-parser')),
                      p || (p = !1),
                      h || (h = a(t, s, -1, l)),
                      g.debug &&
                        (b +=
                          'column:' +
                          l +
                          '; extractor:' +
                          p.id +
                          '; parser:' +
                          h.id +
                          '; string:' +
                          g.strings[l] +
                          '; empty: ' +
                          g.empties[l] +
                          '\n'),
                      (r.parsers[l] = h),
                      (r.extractors[l] = p);
                v += r.parsers.length ? y : 1;
              }
              g.debug &&
                (i(b || 'No parsers detected'), n('Completed detecting parsers', f)),
                (g.parsers = r.parsers),
                (g.extractors = r.extractors);
            }
            function l(s) {
              var a,
                o,
                l,
                c,
                u,
                d,
                h,
                p,
                f,
                g,
                m,
                v,
                b,
                y = s.config,
                w = y.$table.children('tbody'),
                _ = y.extractors,
                x = y.parsers;
              if (((y.cache = {}), (y.totalRows = 0), !x))
                return y.debug ? i('Warning: *Empty table!* Not building a cache') : '';
              for (
                y.debug && (g = new Date()),
                  y.showProcessing && e.isProcessing(s, !0),
                  h = 0;
                h < w.length;
                h++
              )
                if (
                  ((b = []),
                  (a = y.cache[h] = {normalized: []}),
                  !w.eq(h).hasClass(y.cssInfoBlock))
                ) {
                  for (m = (w[h] && w[h].rows.length) || 0, u = 0; u < m; ++u)
                    if (
                      ((v = {child: []}),
                      (p = t(w[h].rows[u])),
                      [new Array(y.columns)],
                      (f = []),
                      p.hasClass(y.cssChildRow) && 0 !== u)
                    )
                      (o = a.normalized.length - 1),
                        (a.normalized[o][y.columns].$row =
                          a.normalized[o][y.columns].$row.add(p)),
                        p.prev().hasClass(y.cssChildRow) ||
                          p.prev().addClass(e.css.cssHasChild),
                        (v.child[o] = t.trim(
                          p[0].textContent || p[0].innerText || p.text() || ''
                        ));
                    else {
                      for (v.$row = p, v.order = u, d = 0; d < y.columns; ++d)
                        void 0 !== x[d]
                          ? ((o = r(s, p[0].cells[d], d)),
                            (l =
                              void 0 === _[d].id
                                ? o
                                : _[d].format(o, s, p[0].cells[d], d)),
                            (c =
                              'no-parser' === x[d].id
                                ? ''
                                : x[d].format(l, s, p[0].cells[d], d)),
                            f.push(
                              y.ignoreCase && 'string' == typeof c ? c.toLowerCase() : c
                            ),
                            'numeric' === (x[d].type || '').toLowerCase() &&
                              (b[d] = Math.max(Math.abs(c) || 0, b[d] || 0)))
                          : y.debug &&
                            i(
                              'No parser found for cell:',
                              p[0].cells[d],
                              'does it have a header?'
                            );
                      (f[y.columns] = v), a.normalized.push(f);
                    }
                  (a.colMax = b), (y.totalRows += a.normalized.length);
                }
              y.showProcessing && e.isProcessing(s),
                y.debug && n('Building cache for ' + m + ' rows', g);
            }
            function c(i, r) {
              var a,
                o,
                l,
                c,
                u,
                d,
                h,
                p = i.config,
                f = p.widgetOptions,
                g = i.tBodies,
                m = [],
                v = p.cache;
              if (s(v))
                return p.appender
                  ? p.appender(i, m)
                  : i.isUpdating
                  ? p.$table.trigger('updateComplete', i)
                  : '';
              for (p.debug && (h = new Date()), d = 0; d < g.length; d++)
                if ((l = t(g[d])).length && !l.hasClass(p.cssInfoBlock)) {
                  for (
                    c = e.processTbody(i, l, !0), o = (a = v[d].normalized).length, u = 0;
                    u < o;
                    u++
                  )
                    m.push(a[u][p.columns].$row),
                      (p.appender &&
                        (!p.pager ||
                          (p.pager.removeRows && f.pager_removeRows) ||
                          p.pager.ajax)) ||
                        c.append(a[u][p.columns].$row);
                  e.processTbody(i, c, !1);
                }
              p.appender && p.appender(i, m),
                p.debug && n('Rebuilt table', h),
                r || p.appender || e.applyWidget(i),
                i.isUpdating && p.$table.trigger('updateComplete', i);
            }
            function u(t) {
              return /^d/i.test(t) || 1 === t;
            }
            function d(s) {
              var r,
                a,
                o,
                l,
                c,
                d,
                h,
                f = s.config;
              (f.headerList = []),
                (f.headerContent = []),
                f.debug && (h = new Date()),
                (f.columns = e.computeColumnIndex(
                  f.$table.children('thead, tfoot').children('tr')
                )),
                (l = f.cssIcon
                  ? '<i class="' +
                    (f.cssIcon === e.css.icon
                      ? e.css.icon
                      : f.cssIcon + ' ' + e.css.icon) +
                    '"></i>'
                  : ''),
                (f.$headers = t(s)
                  .find(f.selectorHeaders)
                  .each(function (i) {
                    (a = t(this)),
                      (r = e.getColumnData(s, f.headers, i, !0)),
                      (f.headerContent[i] = t(this).html()),
                      (c = f.headerTemplate
                        .replace(/\{content\}/g, t(this).html())
                        .replace(/\{icon\}/g, l)),
                      f.onRenderTemplate &&
                        (o = f.onRenderTemplate.apply(a, [i, c])) &&
                        'string' == typeof o &&
                        (c = o),
                      t(this).html('<div class="' + e.css.headerIn + '">' + c + '</div>'),
                      f.onRenderHeader && f.onRenderHeader.apply(a, [i]),
                      (this.column = parseInt(t(this).attr('data-column'), 10)),
                      (this.order = u(
                        e.getData(a, r, 'sortInitialOrder') || f.sortInitialOrder
                      )
                        ? [1, 0, 2]
                        : [0, 1, 2]),
                      (this.count = -1),
                      (this.lockedOrder = !1),
                      void 0 !== (d = e.getData(a, r, 'lockedOrder') || !1) &&
                        !1 !== d &&
                        (this.order = this.lockedOrder = u(d) ? [1, 1, 1] : [0, 0, 0]),
                      a.addClass(e.css.header + ' ' + f.cssHeader),
                      (f.headerList[i] = this),
                      a
                        .parent()
                        .addClass(e.css.headerRow + ' ' + f.cssHeaderRow)
                        .attr('role', 'row'),
                      f.tabIndex && a.attr('tabindex', 0);
                  })
                  .attr({scope: 'col', role: 'columnheader'})),
                p(s),
                f.debug && (n('Built headers:', h), i(f.$headers));
            }
            function h(t, e, i) {
              var n = t.config;
              n.$table.find(n.selectorRemove).remove(), o(t), l(t), b(n.$table, e, i);
            }
            function p(i) {
              var n,
                s,
                r,
                a = i.config;
              a.$headers.each(function (o, l) {
                (s = t(l)),
                  (r = e.getColumnData(i, a.headers, o, !0)),
                  (n =
                    'false' === e.getData(l, r, 'sorter') ||
                    'false' === e.getData(l, r, 'parser')),
                  (l.sortDisabled = n),
                  s[n ? 'addClass' : 'removeClass']('sorter-false').attr(
                    'aria-disabled',
                    '' + n
                  ),
                  i.id &&
                    (n ? s.removeAttr('aria-controls') : s.attr('aria-controls', i.id));
              });
            }
            function f(i) {
              var n,
                s,
                r,
                a = i.config,
                o = a.sortList,
                l = o.length,
                c = e.css.sortNone + ' ' + a.cssNone,
                u = [e.css.sortAsc + ' ' + a.cssAsc, e.css.sortDesc + ' ' + a.cssDesc],
                d = ['ascending', 'descending'],
                h = t(i)
                  .find('tfoot tr')
                  .children()
                  .add(a.$extraHeaders)
                  .removeClass(u.join(' '));
              for (
                a.$headers.removeClass(u.join(' ')).addClass(c).attr('aria-sort', 'none'),
                  s = 0;
                s < l;
                s++
              )
                if (
                  2 !== o[s][1] &&
                  (n = a.$headers
                    .not('.sorter-false')
                    .filter('[data-column="' + o[s][0] + '"]' + (1 === l ? ':last' : '')))
                    .length
                ) {
                  for (r = 0; r < n.length; r++)
                    n[r].sortDisabled ||
                      n
                        .eq(r)
                        .removeClass(c)
                        .addClass(u[o[s][1]])
                        .attr('aria-sort', d[o[s][1]]);
                  h.length &&
                    h
                      .filter('[data-column="' + o[s][0] + '"]')
                      .removeClass(c)
                      .addClass(u[o[s][1]]);
                }
              a.$headers.not('.sorter-false').each(function () {
                var i = t(this),
                  n = this.order[(this.count + 1) % (a.sortReset ? 3 : 2)],
                  s =
                    i.text() +
                    ': ' +
                    e.language[
                      i.hasClass(e.css.sortAsc)
                        ? 'sortAsc'
                        : i.hasClass(e.css.sortDesc)
                        ? 'sortDesc'
                        : 'sortNone'
                    ] +
                    e.language[0 === n ? 'nextAsc' : 1 === n ? 'nextDesc' : 'nextNone'];
                i.attr('aria-label', s);
              });
            }
            function g(t, e) {
              return (t && t[e] && t[e].type) || '';
            }
            function m(t) {
              var i,
                r,
                a,
                o,
                l,
                c,
                u,
                d,
                h,
                p,
                f = 0,
                m = t.config,
                v = m.textSorter || '',
                b = m.sortList,
                y = b.length,
                w = t.tBodies.length;
              if (!m.serverSideSorting && !s(m.cache)) {
                for (m.debug && (l = new Date()), r = 0; r < w; r++)
                  (c = m.cache[r].colMax),
                    m.cache[r].normalized.sort(function (n, s) {
                      for (i = 0; i < y; i++) {
                        if (
                          ((o = b[i][0]),
                          (u = b[i][1]),
                          (f = 0 === u),
                          m.sortStable && n[o] === s[o] && 1 === y)
                        )
                          return n[m.columns].order - s[m.columns].order;
                        if (
                          ((a = /n/i.test(g(m.parsers, o))) && m.strings[o]
                            ? ((a =
                                'boolean' == typeof m.string[m.strings[o]]
                                  ? (f ? 1 : -1) * (m.string[m.strings[o]] ? -1 : 1)
                                  : (m.strings[o] && m.string[m.strings[o]]) || 0),
                              (d = m.numberSorter
                                ? m.numberSorter(n[o], s[o], f, c[o], t)
                                : e['sortNumeric' + (f ? 'Asc' : 'Desc')](
                                    n[o],
                                    s[o],
                                    a,
                                    c[o],
                                    o,
                                    t
                                  )))
                            : ((h = f ? n : s),
                              (p = f ? s : n),
                              (d =
                                'function' == typeof v
                                  ? v(h[o], p[o], f, o, t)
                                  : 'object' == typeof v && v.hasOwnProperty(o)
                                  ? v[o](h[o], p[o], f, o, t)
                                  : e['sortNatural' + (f ? 'Asc' : 'Desc')](
                                      n[o],
                                      s[o],
                                      o,
                                      t,
                                      m
                                    ))),
                          d)
                        )
                          return d;
                      }
                      return n[m.columns].order - s[m.columns].order;
                    });
                m.debug && n('Sorting on ' + b.toString() + ' and dir ' + u + ' time', l);
              }
            }
            function v(e, i) {
              e[0].isUpdating && e.trigger('updateComplete'), t.isFunction(i) && i(e[0]);
            }
            function b(t, i, n) {
              var s = t[0].config.sortList;
              !1 !== i && !t[0].isProcessing && s.length
                ? t.trigger('sorton', [
                    s,
                    function () {
                      v(t, n);
                    },
                    !0,
                  ])
                : (v(t, n), e.applyWidget(t[0], !1));
            }
            function y(i) {
              var n = i.config,
                a = n.$table;
              a.unbind(
                'sortReset update updateRows updateCell updateAll addRows updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave '
                  .split(' ')
                  .join(n.namespace + ' ')
              )
                .bind('sortReset' + n.namespace, function (e, s) {
                  e.stopPropagation(),
                    (n.sortList = []),
                    f(i),
                    m(i),
                    c(i),
                    t.isFunction(s) && s(i);
                })
                .bind('updateAll' + n.namespace, function (t, s, r) {
                  t.stopPropagation(),
                    (i.isUpdating = !0),
                    e.refreshWidgets(i, !0, !0),
                    e.restoreHeaders(i),
                    d(i),
                    e.bindEvents(i, n.$headers, !0),
                    y(i),
                    h(i, s, r);
                })
                .bind(
                  'update' + n.namespace + ' updateRows' + n.namespace,
                  function (t, e, n) {
                    t.stopPropagation(), (i.isUpdating = !0), p(i), h(i, e, n);
                  }
                )
                .bind('updateCell' + n.namespace, function (e, s, o, l) {
                  e.stopPropagation(),
                    (i.isUpdating = !0),
                    a.find(n.selectorRemove).remove();
                  var c,
                    u,
                    d,
                    h,
                    p = a.find('tbody'),
                    f = t(s),
                    g = p.index(
                      t.fn.closest
                        ? f.closest('tbody')
                        : f.parents('tbody').filter(':first')
                    ),
                    m = t.fn.closest ? f.closest('tr') : f.parents('tr').filter(':first');
                  (s = f[0]),
                    p.length &&
                      g >= 0 &&
                      ((d = p.eq(g).find('tr').index(m)),
                      (h = f.index()),
                      (n.cache[g].normalized[d][n.columns].$row = m),
                      (u =
                        void 0 === n.extractors[h].id
                          ? r(i, s, h)
                          : n.extractors[h].format(r(i, s, h), i, s, h)),
                      (c =
                        'no-parser' === n.parsers[h].id
                          ? ''
                          : n.parsers[h].format(u, i, s, h)),
                      (n.cache[g].normalized[d][h] =
                        n.ignoreCase && 'string' == typeof c ? c.toLowerCase() : c),
                      'numeric' === (n.parsers[h].type || '').toLowerCase() &&
                        (n.cache[g].colMax[h] = Math.max(
                          Math.abs(c) || 0,
                          n.cache[g].colMax[h] || 0
                        )),
                      b(a, o, l));
                })
                .bind('addRows' + n.namespace, function (e, l, c, u) {
                  if ((e.stopPropagation(), (i.isUpdating = !0), s(n.cache)))
                    p(i), h(i, c, u);
                  else {
                    var d,
                      f,
                      g,
                      m,
                      v,
                      y,
                      w,
                      _ = (l = t(l).attr('role', 'row')).filter('tr').length,
                      x = a.find('tbody').index(l.parents('tbody').filter(':first'));
                    for ((n.parsers && n.parsers.length) || o(i), d = 0; d < _; d++) {
                      for (
                        g = l[d].cells.length,
                          w = [],
                          y = {
                            child: [],
                            $row: l.eq(d),
                            order: n.cache[x].normalized.length,
                          },
                          f = 0;
                        f < g;
                        f++
                      )
                        (m =
                          void 0 === n.extractors[f].id
                            ? r(i, l[d].cells[f], f)
                            : n.extractors[f].format(
                                r(i, l[d].cells[f], f),
                                i,
                                l[d].cells[f],
                                f
                              )),
                          (v =
                            'no-parser' === n.parsers[f].id
                              ? ''
                              : n.parsers[f].format(m, i, l[d].cells[f], f)),
                          (w[f] =
                            n.ignoreCase && 'string' == typeof v ? v.toLowerCase() : v),
                          'numeric' === (n.parsers[f].type || '').toLowerCase() &&
                            (n.cache[x].colMax[f] = Math.max(
                              Math.abs(w[f]) || 0,
                              n.cache[x].colMax[f] || 0
                            ));
                      w.push(y), n.cache[x].normalized.push(w);
                    }
                    b(a, c, u);
                  }
                })
                .bind('updateComplete' + n.namespace, function () {
                  i.isUpdating = !1;
                })
                .bind('sorton' + n.namespace, function (n, r, o, u) {
                  var d = i.config;
                  n.stopPropagation(),
                    a.trigger('sortStart', this),
                    (function (e, i) {
                      var n,
                        s,
                        r,
                        a,
                        o,
                        l = e.config,
                        c = i || l.sortList;
                      (l.sortList = []),
                        t.each(c, function (e, i) {
                          if (
                            ((a = parseInt(i[0], 10)),
                            (r = l.$headers.filter('[data-column="' + a + '"]:last')[0]))
                          ) {
                            switch (
                              (s = (s = ('' + i[1]).match(/^(1|d|s|o|n)/)) ? s[0] : '')
                            ) {
                              case '1':
                              case 'd':
                                s = 1;
                                break;
                              case 's':
                                s = o || 0;
                                break;
                              case 'o':
                                (n = r.order[(o || 0) % (l.sortReset ? 3 : 2)]),
                                  (s = 0 === n ? 1 : 1 === n ? 0 : 2);
                                break;
                              case 'n':
                                (r.count = r.count + 1),
                                  (s = r.order[r.count % (l.sortReset ? 3 : 2)]);
                                break;
                              default:
                                s = 0;
                            }
                            (o = 0 === e ? s : o),
                              (n = [a, parseInt(s, 10) || 0]),
                              l.sortList.push(n),
                              (s = t.inArray(n[1], r.order)),
                              (r.count = s >= 0 ? s : n[1] % (l.sortReset ? 3 : 2));
                          }
                        });
                    })(i, r),
                    f(i),
                    d.delayInit && s(d.cache) && l(i),
                    a.trigger('sortBegin', this),
                    m(i),
                    c(i, u),
                    a.trigger('sortEnd', this),
                    e.applyWidget(i),
                    t.isFunction(o) && o(i);
                })
                .bind('appendCache' + n.namespace, function (e, n, s) {
                  e.stopPropagation(), c(i, s), t.isFunction(n) && n(i);
                })
                .bind('updateCache' + n.namespace, function (e, s) {
                  (n.parsers && n.parsers.length) || o(i), l(i), t.isFunction(s) && s(i);
                })
                .bind('applyWidgetId' + n.namespace, function (t, s) {
                  t.stopPropagation(), e.getWidgetById(s).format(i, n, n.widgetOptions);
                })
                .bind('applyWidgets' + n.namespace, function (t, n) {
                  t.stopPropagation(), e.applyWidget(i, n);
                })
                .bind('refreshWidgets' + n.namespace, function (t, n, s) {
                  t.stopPropagation(), e.refreshWidgets(i, n, s);
                })
                .bind('destroy' + n.namespace, function (t, n, s) {
                  t.stopPropagation(), e.destroy(i, n, s);
                })
                .bind('resetToLoadState' + n.namespace, function () {
                  e.refreshWidgets(i, !0, !0),
                    (n = t.extend(!0, e.defaults, n.originalSettings)),
                    (i.hasInitialized = !1),
                    e.setup(i, n);
                });
            }
            (e.version = '2.17.7'),
              (e.parsers = []),
              (e.widgets = []),
              (e.defaults = {
                theme: 'default',
                widthFixed: !1,
                showProcessing: !1,
                headerTemplate: '{content}',
                onRenderTemplate: null,
                onRenderHeader: null,
                cancelSelection: !0,
                tabIndex: !0,
                dateFormat: 'mmddyyyy',
                sortMultiSortKey: 'shiftKey',
                sortResetKey: 'ctrlKey',
                usNumberFormat: !0,
                delayInit: !1,
                serverSideSorting: !1,
                headers: {},
                ignoreCase: !0,
                sortForce: null,
                sortList: [],
                sortAppend: null,
                sortStable: !1,
                sortInitialOrder: 'asc',
                sortLocaleCompare: !1,
                sortReset: !1,
                sortRestart: !1,
                emptyTo: 'bottom',
                stringTo: 'max',
                textExtraction: 'basic',
                textAttribute: 'data-text',
                textSorter: null,
                numberSorter: null,
                widgets: [],
                widgetOptions: {zebra: ['even', 'odd']},
                initWidgets: !0,
                initialized: null,
                tableClass: '',
                cssAsc: '',
                cssDesc: '',
                cssNone: '',
                cssHeader: '',
                cssHeaderRow: '',
                cssProcessing: '',
                cssChildRow: 'tablesorter-childRow',
                cssIcon: 'tablesorter-icon',
                cssInfoBlock: 'tablesorter-infoOnly',
                selectorHeaders: '> thead th, > thead td',
                selectorSort: 'th, td',
                selectorRemove: '.remove-me',
                debug: !1,
                headerList: [],
                empties: {},
                strings: {},
                parsers: [],
              }),
              (e.css = {
                table: 'tablesorter',
                cssHasChild: 'tablesorter-hasChildRow',
                childRow: 'tablesorter-childRow',
                header: 'tablesorter-header',
                headerRow: 'tablesorter-headerRow',
                headerIn: 'tablesorter-header-inner',
                icon: 'tablesorter-icon',
                info: 'tablesorter-infoOnly',
                processing: 'tablesorter-processing',
                sortAsc: 'tablesorter-headerAsc',
                sortDesc: 'tablesorter-headerDesc',
                sortNone: 'tablesorter-headerUnSorted',
              }),
              (e.language = {
                sortAsc: 'Ascending sort applied, ',
                sortDesc: 'Descending sort applied, ',
                sortNone: 'No sort applied, ',
                nextAsc: 'activate to apply an ascending sort',
                nextDesc: 'activate to apply a descending sort',
                nextNone: 'activate to remove the sort',
              }),
              (e.log = i),
              (e.benchmark = n),
              (e.construct = function (i) {
                return this.each(function () {
                  var n = t.extend(!0, {}, e.defaults, i);
                  (n.originalSettings = i),
                    !this.hasInitialized && e.buildTable && 'TABLE' !== this.tagName
                      ? e.buildTable(this, n)
                      : e.setup(this, n);
                });
              }),
              (e.setup = function (n, s) {
                if (!n || !n.tHead || 0 === n.tBodies.length || !0 === n.hasInitialized)
                  return s.debug
                    ? i(
                        'ERROR: stopping initialization! No table, thead, tbody or tablesorter has already been initialized'
                      )
                    : '';
                var r = '',
                  a = t(n),
                  c = t.metadata;
                (n.hasInitialized = !1),
                  (n.isProcessing = !0),
                  (n.config = s),
                  t.data(n, 'tablesorter', s),
                  s.debug && t.data(n, 'startoveralltimer', new Date()),
                  (s.supportsDataObject = (function (t) {
                    return (
                      (t[0] = parseInt(t[0], 10)),
                      t[0] > 1 || (1 === t[0] && parseInt(t[1], 10) >= 4)
                    );
                  })(t.fn.jquery.split('.'))),
                  (s.string = {
                    max: 1,
                    min: -1,
                    emptyMin: 1,
                    emptyMax: -1,
                    zero: 0,
                    none: 0,
                    null: 0,
                    top: !0,
                    bottom: !1,
                  }),
                  /tablesorter\-/.test(a.attr('class')) ||
                    (r = '' !== s.theme ? ' tablesorter-' + s.theme : ''),
                  (s.table = n),
                  (s.$table = a
                    .addClass(e.css.table + ' ' + s.tableClass + r)
                    .attr('role', 'grid')),
                  (s.$headers = a.find(s.selectorHeaders)),
                  s.namespace
                    ? (s.namespace = '.' + s.namespace.replace(/\W/g, ''))
                    : (s.namespace =
                        '.tablesorter' + Math.random().toString(16).slice(2)),
                  s.$table.children().children('tr').attr('role', 'row'),
                  (s.$tbodies = a
                    .children('tbody:not(.' + s.cssInfoBlock + ')')
                    .attr({'aria-live': 'polite', 'aria-relevant': 'all'})),
                  s.$table.find('caption').length &&
                    s.$table.attr('aria-labelledby', 'theCaption'),
                  (s.widgetInit = {}),
                  (s.textExtraction =
                    s.$table.attr('data-text-extraction') || s.textExtraction || 'basic'),
                  d(n),
                  (function (e) {
                    if (e.config.widthFixed && 0 === t(e).find('colgroup').length) {
                      var i = t('<colgroup>'),
                        n = t(e).width();
                      t(e.tBodies[0])
                        .find('tr:first')
                        .children(':visible')
                        .each(function () {
                          i.append(
                            t('<col>').css(
                              'width',
                              parseInt((t(this).width() / n) * 1e3, 10) / 10 + '%'
                            )
                          );
                        }),
                        t(e).prepend(i);
                    }
                  })(n),
                  o(n),
                  (s.totalRows = 0),
                  s.delayInit || l(n),
                  e.bindEvents(n, s.$headers, !0),
                  y(n),
                  s.supportsDataObject && void 0 !== a.data().sortlist
                    ? (s.sortList = a.data().sortlist)
                    : c &&
                      a.metadata() &&
                      a.metadata().sortlist &&
                      (s.sortList = a.metadata().sortlist),
                  e.applyWidget(n, !0),
                  s.sortList.length > 0
                    ? a.trigger('sorton', [s.sortList, {}, !s.initWidgets, !0])
                    : (f(n), s.initWidgets && e.applyWidget(n, !1)),
                  s.showProcessing &&
                    a
                      .unbind('sortBegin' + s.namespace + ' sortEnd' + s.namespace)
                      .bind(
                        'sortBegin' + s.namespace + ' sortEnd' + s.namespace,
                        function (t) {
                          clearTimeout(s.processTimer),
                            e.isProcessing(n),
                            'sortBegin' === t.type &&
                              (s.processTimer = setTimeout(function () {
                                e.isProcessing(n, !0);
                              }, 500));
                        }
                      ),
                  (n.hasInitialized = !0),
                  (n.isProcessing = !1),
                  s.debug &&
                    e.benchmark(
                      'Overall initialization time',
                      t.data(n, 'startoveralltimer')
                    ),
                  a.trigger('tablesorter-initialized', n),
                  'function' == typeof s.initialized && s.initialized(n);
              }),
              (e.getColumnData = function (e, i, n, s) {
                if (void 0 !== i && null !== i) {
                  var r,
                    a = (e = t(e)[0]).config;
                  if (i[n])
                    return s
                      ? i[n]
                      : i[
                          a.$headers.index(
                            a.$headers.filter('[data-column="' + n + '"]:last')
                          )
                        ];
                  for (r in i)
                    if (
                      'string' == typeof r &&
                      (s
                        ? a.$headers.eq(n).filter(r)
                        : a.$headers.filter('[data-column="' + n + '"]:last').filter(r)
                      ).length
                    )
                      return i[r];
                }
              }),
              (e.computeColumnIndex = function (e) {
                var i,
                  n,
                  s,
                  r,
                  a,
                  o,
                  l,
                  c,
                  u,
                  d,
                  h,
                  p,
                  f,
                  g = [],
                  m = {},
                  v = 0;
                for (i = 0; i < e.length; i++)
                  for (l = e[i].cells, n = 0; n < l.length; n++) {
                    for (
                      o = l[n],
                        a = t(o),
                        u = (c = o.parentNode.rowIndex) + '-' + a.index(),
                        d = o.rowSpan || 1,
                        h = o.colSpan || 1,
                        void 0 === g[c] && (g[c] = []),
                        s = 0;
                      s < g[c].length + 1;
                      s++
                    )
                      if (void 0 === g[c][s]) {
                        p = s;
                        break;
                      }
                    for (
                      m[u] = p, v = Math.max(p, v), a.attr({'data-column': p}), s = c;
                      s < c + d;
                      s++
                    )
                      for (
                        void 0 === g[s] && (g[s] = []), f = g[s], r = p;
                        r < p + h;
                        r++
                      )
                        f[r] = 'x';
                  }
                return v + 1;
              }),
              (e.isProcessing = function (i, n, s) {
                var r = (i = t(i))[0].config,
                  a = s || i.find('.' + e.css.header);
                n
                  ? (void 0 !== s &&
                      r.sortList.length > 0 &&
                      (a = a.filter(function () {
                        return (
                          !this.sortDisabled &&
                          e.isValueInArray(
                            parseFloat(t(this).attr('data-column')),
                            r.sortList
                          ) >= 0
                        );
                      })),
                    i.add(a).addClass(e.css.processing + ' ' + r.cssProcessing))
                  : i.add(a).removeClass(e.css.processing + ' ' + r.cssProcessing);
              }),
              (e.processTbody = function (e, i, n) {
                var s;
                if (((e = t(e)[0]), n))
                  return (
                    (e.isProcessing = !0),
                    i.before('<span class="tablesorter-savemyplace"/>'),
                    (s = t.fn.detach ? i.detach() : i.remove())
                  );
                (s = t(e).find('span.tablesorter-savemyplace')),
                  i.insertAfter(s),
                  s.remove(),
                  (e.isProcessing = !1);
              }),
              (e.clearTableBody = function (e) {
                t(e)[0].config.$tbodies.children().detach();
              }),
              (e.bindEvents = function (i, n, r) {
                var a,
                  o = (i = t(i)[0]).config;
                !0 !== r &&
                  (o.$extraHeaders = o.$extraHeaders ? o.$extraHeaders.add(n) : n),
                  n
                    .find(o.selectorSort)
                    .add(n.filter(o.selectorSort))
                    .unbind(
                      'mousedown mouseup sort keyup '.split(' ').join(o.namespace + ' ')
                    )
                    .bind(
                      'mousedown mouseup sort keyup '.split(' ').join(o.namespace + ' '),
                      function (r, u) {
                        var d,
                          h = r.type;
                        if (
                          !(
                            (1 !== (r.which || r.button) && !/sort|keyup/.test(h)) ||
                            ('keyup' === h && 13 !== r.which) ||
                            ('mouseup' === h &&
                              !0 !== u &&
                              new Date().getTime() - a > 250)
                          )
                        ) {
                          if ('mousedown' === h)
                            return (
                              (a = new Date().getTime()),
                              /(input|select|button|textarea)/i.test(r.target.tagName)
                                ? ''
                                : !o.cancelSelection
                            );
                          o.delayInit && s(o.cache) && l(i),
                            (d = t.fn.closest
                              ? t(this).closest('th, td')[0]
                              : /TH|TD/.test(this.tagName)
                              ? this
                              : t(this).parents('th, td')[0]),
                            (d = o.$headers[n.index(d)]).sortDisabled ||
                              (function i(n, s, r) {
                                if (n.isUpdating)
                                  return setTimeout(function () {
                                    i(n, s, r);
                                  }, 50);
                                var a,
                                  o,
                                  l,
                                  u,
                                  d,
                                  h = n.config,
                                  p = !r[h.sortMultiSortKey],
                                  g = h.$table;
                                if (
                                  (g.trigger('sortStart', n),
                                  (s.count = r[h.sortResetKey]
                                    ? 2
                                    : (s.count + 1) % (h.sortReset ? 3 : 2)),
                                  h.sortRestart &&
                                    ((o = s),
                                    h.$headers.each(function () {
                                      this === o ||
                                        (!p &&
                                          t(this).is(
                                            '.' + e.css.sortDesc + ',.' + e.css.sortAsc
                                          )) ||
                                        (this.count = -1);
                                    })),
                                  (o = s.column),
                                  p)
                                ) {
                                  if (((h.sortList = []), null !== h.sortForce))
                                    for (a = h.sortForce, l = 0; l < a.length; l++)
                                      a[l][0] !== o && h.sortList.push(a[l]);
                                  if (
                                    (u = s.order[s.count]) < 2 &&
                                    (h.sortList.push([o, u]), s.colSpan > 1)
                                  )
                                    for (l = 1; l < s.colSpan; l++)
                                      h.sortList.push([o + l, u]);
                                } else {
                                  if (h.sortAppend && h.sortList.length > 1)
                                    for (l = 0; l < h.sortAppend.length; l++)
                                      (d = e.isValueInArray(
                                        h.sortAppend[l][0],
                                        h.sortList
                                      )) >= 0 && h.sortList.splice(d, 1);
                                  if (e.isValueInArray(o, h.sortList) >= 0)
                                    for (l = 0; l < h.sortList.length; l++)
                                      (d = h.sortList[l]),
                                        (u = h.$headers.filter(
                                          '[data-column="' + d[0] + '"]:last'
                                        )[0]),
                                        d[0] === o &&
                                          ((d[1] = u.order[s.count]),
                                          2 === d[1] &&
                                            (h.sortList.splice(l, 1), (u.count = -1)));
                                  else if (
                                    (u = s.order[s.count]) < 2 &&
                                    (h.sortList.push([o, u]), s.colSpan > 1)
                                  )
                                    for (l = 1; l < s.colSpan; l++)
                                      h.sortList.push([o + l, u]);
                                }
                                if (null !== h.sortAppend)
                                  for (a = h.sortAppend, l = 0; l < a.length; l++)
                                    a[l][0] !== o && h.sortList.push(a[l]);
                                g.trigger('sortBegin', n),
                                  setTimeout(function () {
                                    f(n), m(n), c(n), g.trigger('sortEnd', n);
                                  }, 1);
                              })(i, d, r);
                        }
                      }
                    ),
                  o.cancelSelection &&
                    n
                      .attr('unselectable', 'on')
                      .bind('selectstart', !1)
                      .css({'user-select': 'none', MozUserSelect: 'none'});
              }),
              (e.restoreHeaders = function (i) {
                var n = t(i)[0].config;
                n.$table.find(n.selectorHeaders).each(function (i) {
                  t(this).find('.' + e.css.headerIn).length &&
                    t(this).html(n.headerContent[i]);
                });
              }),
              (e.destroy = function (i, n, s) {
                if ((i = t(i)[0]).hasInitialized) {
                  e.refreshWidgets(i, !0, !0);
                  var r = t(i),
                    a = i.config,
                    o = r.find('thead:first'),
                    l = o
                      .find('tr.' + e.css.headerRow)
                      .removeClass(e.css.headerRow + ' ' + a.cssHeaderRow),
                    c = r.find('tfoot:first > tr').children('th, td');
                  !1 === n &&
                    t.inArray('uitheme', a.widgets) >= 0 &&
                    (r.trigger('applyWidgetId', ['uitheme']),
                    r.trigger('applyWidgetId', ['zebra'])),
                    o.find('tr').not(l).remove(),
                    r
                      .removeData('tablesorter')
                      .unbind(
                        'sortReset update updateAll updateRows updateCell addRows updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave keypress sortBegin sortEnd resetToLoadState '
                          .split(' ')
                          .join(a.namespace + ' ')
                      ),
                    a.$headers
                      .add(c)
                      .removeClass(
                        [
                          e.css.header,
                          a.cssHeader,
                          a.cssAsc,
                          a.cssDesc,
                          e.css.sortAsc,
                          e.css.sortDesc,
                          e.css.sortNone,
                        ].join(' ')
                      )
                      .removeAttr('data-column')
                      .removeAttr('aria-label')
                      .attr('aria-disabled', 'true'),
                    l
                      .find(a.selectorSort)
                      .unbind(
                        'mousedown mouseup keypress '.split(' ').join(a.namespace + ' ')
                      ),
                    e.restoreHeaders(i),
                    r.toggleClass(
                      e.css.table + ' ' + a.tableClass + ' tablesorter-' + a.theme,
                      !1 === n
                    ),
                    (i.hasInitialized = !1),
                    delete i.config.cache,
                    'function' == typeof s && s(i);
                }
              }),
              (e.regex = {
                chunk:
                  /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
                chunks: /(^\\0|\\0$)/,
                hex: /^0x[0-9a-f]+$/i,
              }),
              (e.sortNatural = function (t, i) {
                if (t === i) return 0;
                var n,
                  s,
                  r,
                  a,
                  o,
                  l,
                  c,
                  u,
                  d = e.regex;
                if (d.hex.test(i)) {
                  if (
                    (s = parseInt(t.match(d.hex), 16)) <
                    (a = parseInt(i.match(d.hex), 16))
                  )
                    return -1;
                  if (s > a) return 1;
                }
                for (
                  n = t.replace(d.chunk, '\\0$1\\0').replace(d.chunks, '').split('\\0'),
                    r = i.replace(d.chunk, '\\0$1\\0').replace(d.chunks, '').split('\\0'),
                    u = Math.max(n.length, r.length),
                    c = 0;
                  c < u;
                  c++
                ) {
                  if (
                    ((o = isNaN(n[c]) ? n[c] || 0 : parseFloat(n[c]) || 0),
                    (l = isNaN(r[c]) ? r[c] || 0 : parseFloat(r[c]) || 0),
                    isNaN(o) !== isNaN(l))
                  )
                    return isNaN(o) ? 1 : -1;
                  if ((typeof o != typeof l && ((o += ''), (l += '')), o < l)) return -1;
                  if (o > l) return 1;
                }
                return 0;
              }),
              (e.sortNaturalAsc = function (t, i, n, s, r) {
                if (t === i) return 0;
                var a = r.string[r.empties[n] || r.emptyTo];
                return '' === t && 0 !== a
                  ? 'boolean' == typeof a
                    ? a
                      ? -1
                      : 1
                    : -a || -1
                  : '' === i && 0 !== a
                  ? 'boolean' == typeof a
                    ? a
                      ? 1
                      : -1
                    : a || 1
                  : e.sortNatural(t, i);
              }),
              (e.sortNaturalDesc = function (t, i, n, s, r) {
                if (t === i) return 0;
                var a = r.string[r.empties[n] || r.emptyTo];
                return '' === t && 0 !== a
                  ? 'boolean' == typeof a
                    ? a
                      ? -1
                      : 1
                    : a || 1
                  : '' === i && 0 !== a
                  ? 'boolean' == typeof a
                    ? a
                      ? 1
                      : -1
                    : -a || -1
                  : e.sortNatural(i, t);
              }),
              (e.sortText = function (t, e) {
                return t > e ? 1 : t < e ? -1 : 0;
              }),
              (e.getTextValue = function (t, e, i) {
                if (i) {
                  var n,
                    s = t ? t.length : 0,
                    r = i + e;
                  for (n = 0; n < s; n++) r += t.charCodeAt(n);
                  return e * r;
                }
                return 0;
              }),
              (e.sortNumericAsc = function (t, i, n, s, r, a) {
                if (t === i) return 0;
                var o = a.config,
                  l = o.string[o.empties[r] || o.emptyTo];
                return '' === t && 0 !== l
                  ? 'boolean' == typeof l
                    ? l
                      ? -1
                      : 1
                    : -l || -1
                  : '' === i && 0 !== l
                  ? 'boolean' == typeof l
                    ? l
                      ? 1
                      : -1
                    : l || 1
                  : (isNaN(t) && (t = e.getTextValue(t, n, s)),
                    isNaN(i) && (i = e.getTextValue(i, n, s)),
                    t - i);
              }),
              (e.sortNumericDesc = function (t, i, n, s, r, a) {
                if (t === i) return 0;
                var o = a.config,
                  l = o.string[o.empties[r] || o.emptyTo];
                return '' === t && 0 !== l
                  ? 'boolean' == typeof l
                    ? l
                      ? -1
                      : 1
                    : l || 1
                  : '' === i && 0 !== l
                  ? 'boolean' == typeof l
                    ? l
                      ? 1
                      : -1
                    : -l || -1
                  : (isNaN(t) && (t = e.getTextValue(t, n, s)),
                    isNaN(i) && (i = e.getTextValue(i, n, s)),
                    i - t);
              }),
              (e.sortNumeric = function (t, e) {
                return t - e;
              }),
              (e.characterEquivalents = {
                a: 'áàâãäąå',
                A: 'ÁÀÂÃÄĄÅ',
                c: 'çćč',
                C: 'ÇĆČ',
                e: 'éèêëěę',
                E: 'ÉÈÊËĚĘ',
                i: 'íìİîïı',
                I: 'ÍÌİÎÏ',
                o: 'óòôõö',
                O: 'ÓÒÔÕÖ',
                ss: 'ß',
                SS: 'ẞ',
                u: 'úùûüů',
                U: 'ÚÙÛÜŮ',
              }),
              (e.replaceAccents = function (t) {
                var i,
                  n = '[',
                  s = e.characterEquivalents;
                if (!e.characterRegex) {
                  for (i in ((e.characterRegexArray = {}), s))
                    'string' == typeof i &&
                      ((n += s[i]),
                      (e.characterRegexArray[i] = new RegExp('[' + s[i] + ']', 'g')));
                  e.characterRegex = new RegExp(n + ']');
                }
                if (e.characterRegex.test(t))
                  for (i in s)
                    'string' == typeof i && (t = t.replace(e.characterRegexArray[i], i));
                return t;
              }),
              (e.isValueInArray = function (t, e) {
                var i,
                  n = e.length;
                for (i = 0; i < n; i++) if (e[i][0] === t) return i;
                return -1;
              }),
              (e.addParser = function (t) {
                var i,
                  n = e.parsers.length,
                  s = !0;
                for (i = 0; i < n; i++)
                  e.parsers[i].id.toLowerCase() === t.id.toLowerCase() && (s = !1);
                s && e.parsers.push(t);
              }),
              (e.getParserById = function (t) {
                if ('false' == t) return !1;
                var i,
                  n = e.parsers.length;
                for (i = 0; i < n; i++)
                  if (e.parsers[i].id.toLowerCase() === t.toString().toLowerCase())
                    return e.parsers[i];
                return !1;
              }),
              (e.addWidget = function (t) {
                e.widgets.push(t);
              }),
              (e.hasWidget = function (e, i) {
                return (
                  ((e = t(e)).length && e[0].config && e[0].config.widgetInit[i]) || !1
                );
              }),
              (e.getWidgetById = function (t) {
                var i,
                  n,
                  s = e.widgets.length;
                for (i = 0; i < s; i++)
                  if (
                    (n = e.widgets[i]) &&
                    n.hasOwnProperty('id') &&
                    n.id.toLowerCase() === t.toLowerCase()
                  )
                    return n;
              }),
              (e.applyWidget = function (i, s) {
                var r,
                  a,
                  o,
                  l = (i = t(i)[0]).config,
                  c = l.widgetOptions,
                  u = [];
                (!1 !== s && i.hasInitialized && (i.isApplyingWidgets || i.isUpdating)) ||
                  (l.debug && (r = new Date()),
                  l.widgets.length &&
                    ((i.isApplyingWidgets = !0),
                    (l.widgets = t.grep(l.widgets, function (e, i) {
                      return t.inArray(e, l.widgets) === i;
                    })),
                    t.each(l.widgets || [], function (t, i) {
                      (o = e.getWidgetById(i)) &&
                        o.id &&
                        (o.priority || (o.priority = 10), (u[t] = o));
                    }),
                    u.sort(function (t, e) {
                      return t.priority < e.priority
                        ? -1
                        : t.priority === e.priority
                        ? 0
                        : 1;
                    }),
                    t.each(u, function (e, n) {
                      n &&
                        ((!s && l.widgetInit[n.id]) ||
                          ((l.widgetInit[n.id] = !0),
                          n.hasOwnProperty('options') &&
                            (c = i.config.widgetOptions = t.extend(!0, {}, n.options, c)),
                          n.hasOwnProperty('init') && n.init(i, n, l, c)),
                        !s && n.hasOwnProperty('format') && n.format(i, l, c, !1));
                    })),
                  setTimeout(function () {
                    i.isApplyingWidgets = !1;
                  }, 0),
                  l.debug &&
                    ((a = l.widgets.length),
                    n(
                      'Completed ' +
                        (!0 === s ? 'initializing ' : 'applying ') +
                        a +
                        ' widget' +
                        (1 !== a ? 's' : ''),
                      r
                    )));
              }),
              (e.refreshWidgets = function (n, s, r) {
                var a,
                  o = (n = t(n)[0]).config,
                  l = o.widgets,
                  c = e.widgets,
                  u = c.length;
                for (a = 0; a < u; a++)
                  c[a] &&
                    c[a].id &&
                    (s || t.inArray(c[a].id, l) < 0) &&
                    (o.debug && i('Refeshing widgets: Removing "' + c[a].id + '"'),
                    c[a].hasOwnProperty('remove') &&
                      o.widgetInit[c[a].id] &&
                      (c[a].remove(n, o, o.widgetOptions), (o.widgetInit[c[a].id] = !1)));
                !0 !== r && e.applyWidget(n, s);
              }),
              (e.getData = function (e, i, n) {
                var s,
                  r,
                  a = '',
                  o = t(e);
                return o.length
                  ? ((s = !!t.metadata && o.metadata()),
                    (r = ' ' + (o.attr('class') || '')),
                    void 0 !== o.data(n) || void 0 !== o.data(n.toLowerCase())
                      ? (a += o.data(n) || o.data(n.toLowerCase()))
                      : s && void 0 !== s[n]
                      ? (a += s[n])
                      : i && void 0 !== i[n]
                      ? (a += i[n])
                      : ' ' !== r &&
                        r.match(' ' + n + '-') &&
                        (a = r.match(new RegExp('\\s' + n + '-([\\w-]+)'))[1] || ''),
                    t.trim(a))
                  : '';
              }),
              (e.formatFloat = function (e, i) {
                return 'string' != typeof e || '' === e
                  ? e
                  : ((e = (
                      i && i.config ? !1 !== i.config.usNumberFormat : void 0 === i || i
                    )
                      ? e.replace(/,/g, '')
                      : e.replace(/[\s|\.]/g, '').replace(/,/g, '.')),
                    /^\s*\([.\d]+\)/.test(e) &&
                      (e = e.replace(/^\s*\(([.\d]+)\)/, '-$1')),
                    (n = parseFloat(e)),
                    isNaN(n) ? t.trim(e) : n);
                var n;
              }),
              (e.isDigit = function (t) {
                return (
                  !isNaN(t) ||
                  /^[\-+(]?\d+[)]?$/.test(t.toString().replace(/[,.'"\s]/g, ''))
                );
              });
          })(),
        });
        var e = t.tablesorter;
        t.fn.extend({tablesorter: e.construct}),
          e.addParser({
            id: 'no-parser',
            is: function () {
              return !1;
            },
            format: function () {
              return '';
            },
            type: 'text',
          }),
          e.addParser({
            id: 'text',
            is: function () {
              return !0;
            },
            format: function (i, n) {
              var s = n.config;
              return (
                i &&
                  ((i = t.trim(s.ignoreCase ? i.toLocaleLowerCase() : i)),
                  (i = s.sortLocaleCompare ? e.replaceAccents(i) : i)),
                i
              );
            },
            type: 'text',
          }),
          e.addParser({
            id: 'digit',
            is: function (t) {
              return e.isDigit(t);
            },
            format: function (i, n) {
              var s = e.formatFloat((i || '').replace(/[^\w,. \-()]/g, ''), n);
              return i && 'number' == typeof s
                ? s
                : i
                ? t.trim(i && n.config.ignoreCase ? i.toLocaleLowerCase() : i)
                : i;
            },
            type: 'numeric',
          }),
          e.addParser({
            id: 'currency',
            is: function (t) {
              return /^\(?\d+[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]|[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+\)?$/.test(
                (t || '').replace(/[+\-,. ]/g, '')
              );
            },
            format: function (i, n) {
              var s = e.formatFloat((i || '').replace(/[^\w,. \-()]/g, ''), n);
              return i && 'number' == typeof s
                ? s
                : i
                ? t.trim(i && n.config.ignoreCase ? i.toLocaleLowerCase() : i)
                : i;
            },
            type: 'numeric',
          }),
          e.addParser({
            id: 'ipAddress',
            is: function (t) {
              return /^\d{1,3}[\.]\d{1,3}[\.]\d{1,3}[\.]\d{1,3}$/.test(t);
            },
            format: function (t, i) {
              var n,
                s = t ? t.split('.') : '',
                r = '',
                a = s.length;
              for (n = 0; n < a; n++) r += ('00' + s[n]).slice(-3);
              return t ? e.formatFloat(r, i) : t;
            },
            type: 'numeric',
          }),
          e.addParser({
            id: 'url',
            is: function (t) {
              return /^(https?|ftp|file):\/\//.test(t);
            },
            format: function (e) {
              return e ? t.trim(e.replace(/(https?|ftp|file):\/\//, '')) : e;
            },
            type: 'text',
          }),
          e.addParser({
            id: 'isoDate',
            is: function (t) {
              return /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/.test(t);
            },
            format: function (t, i) {
              return t
                ? e.formatFloat(
                    '' !== t ? new Date(t.replace(/-/g, '/')).getTime() || t : '',
                    i
                  )
                : t;
            },
            type: 'numeric',
          }),
          e.addParser({
            id: 'percent',
            is: function (t) {
              return /(\d\s*?%|%\s*?\d)/.test(t) && t.length < 15;
            },
            format: function (t, i) {
              return t ? e.formatFloat(t.replace(/%/g, ''), i) : t;
            },
            type: 'numeric',
          }),
          e.addParser({
            id: 'usLongDate',
            is: function (t) {
              return (
                /^[A-Z]{3,10}\.?\s+\d{1,2},?\s+(\d{4})(\s+\d{1,2}:\d{2}(:\d{2})?(\s+[AP]M)?)?$/i.test(
                  t
                ) || /^\d{1,2}\s+[A-Z]{3,10}\s+\d{4}/i.test(t)
              );
            },
            format: function (t, i) {
              return t
                ? e.formatFloat(
                    new Date(t.replace(/(\S)([AP]M)$/i, '$1 $2')).getTime() || t,
                    i
                  )
                : t;
            },
            type: 'numeric',
          }),
          e.addParser({
            id: 'shortDate',
            is: function (t) {
              return /(^\d{1,2}[\/\s]\d{1,2}[\/\s]\d{4})|(^\d{4}[\/\s]\d{1,2}[\/\s]\d{1,2})/.test(
                (t || '').replace(/\s+/g, ' ').replace(/[\-.,]/g, '/')
              );
            },
            format: function (t, i, n, s) {
              if (t) {
                var r = i.config,
                  a = r.$headers.filter('[data-column=' + s + ']:last'),
                  o =
                    (a.length && a[0].dateFormat) ||
                    e.getData(a, e.getColumnData(i, r.headers, s), 'dateFormat') ||
                    r.dateFormat;
                (t = t.replace(/\s+/g, ' ').replace(/[\-.,]/g, '/')),
                  'mmddyyyy' === o
                    ? (t = t.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/, '$3/$1/$2'))
                    : 'ddmmyyyy' === o
                    ? (t = t.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/, '$3/$2/$1'))
                    : 'yyyymmdd' === o &&
                      (t = t.replace(
                        /(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/,
                        '$1/$2/$3'
                      ));
              }
              return t ? e.formatFloat(new Date(t).getTime() || t, i) : t;
            },
            type: 'numeric',
          }),
          e.addParser({
            id: 'time',
            is: function (t) {
              return /^(([0-2]?\d:[0-5]\d)|([0-1]?\d:[0-5]\d\s?([AP]M)))$/i.test(t);
            },
            format: function (t, i) {
              return t
                ? e.formatFloat(
                    new Date(
                      '2000/01/01 ' + t.replace(/(\S)([AP]M)$/i, '$1 $2')
                    ).getTime() || t,
                    i
                  )
                : t;
            },
            type: 'numeric',
          }),
          e.addParser({
            id: 'metadata',
            is: function () {
              return !1;
            },
            format: function (e, i, n) {
              var s = i.config,
                r = s.parserMetadataName ? s.parserMetadataName : 'sortValue';
              return t(n).metadata()[r];
            },
            type: 'numeric',
          }),
          e.addWidget({
            id: 'zebra',
            priority: 90,
            format: function (i, n, s) {
              var r,
                a,
                o,
                l,
                c,
                u,
                d = new RegExp(n.cssChildRow, 'i'),
                h = n.$tbodies;
              for (n.debug && (c = new Date()), u = 0; u < h.length; u++)
                (r = h.eq(u)).children('tr').length > 1 &&
                  ((o = 0),
                  r
                    .children('tr:visible')
                    .not(n.selectorRemove)
                    .each(function () {
                      (a = t(this)),
                        d.test(this.className) || o++,
                        (l = o % 2 == 0),
                        a.removeClass(s.zebra[l ? 1 : 0]).addClass(s.zebra[l ? 0 : 1]);
                    }));
              n.debug && e.benchmark('Applying Zebra widget', c);
            },
            remove: function (e, i, n) {
              var s,
                r,
                a = i.$tbodies,
                o = (n.zebra || ['even', 'odd']).join(' ');
              for (s = 0; s < a.length; s++)
                (r = t.tablesorter.processTbody(e, a.eq(s), !0))
                  .children()
                  .removeClass(o),
                  t.tablesorter.processTbody(e, r, !1);
            },
          });
      })(jQuery);
    },
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {},
    function (t, e, i) {
      var n, s, r;
      (s = [i(1), i(4)]),
        void 0 ===
          (r =
            'function' ==
            typeof (n = function (t) {
              return (t.ui.keyCode = {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38,
              });
            })
              ? n.apply(e, s)
              : n) || (t.exports = r);
    },
    function (t, e, i) {},
    function (t, e, i) {
      var n, s;
      void 0 ===
        (s =
          'function' ==
          typeof (n = [
            'jquery',
            './data',
            './disable-selection',
            './focusable',
            './form',
            './ie',
            './keycode',
            './labels',
            './jquery-1-7',
            './plugin',
            './safe-active-element',
            './safe-blur',
            './scroll-parent',
            './tabbable',
            './unique-id',
            './version',
          ])
            ? n.call(e, i, e, t)
            : n) || (t.exports = s);
    },
    function (t, e, i) {
      var n, s, r;
      (s = [i(1), i(9), i(17), i(83), i(84), i(85), i(18), i(4), i(8)]),
        void 0 ===
          (r =
            'function' ==
            typeof (n = function (t) {
              return (
                t.widget('ui.draggable', t.ui.mouse, {
                  version: '1.12.1',
                  widgetEventPrefix: 'drag',
                  options: {
                    addClasses: !0,
                    appendTo: 'parent',
                    axis: !1,
                    connectToSortable: !1,
                    containment: !1,
                    cursor: 'auto',
                    cursorAt: !1,
                    grid: !1,
                    handle: !1,
                    helper: 'original',
                    iframeFix: !1,
                    opacity: !1,
                    refreshPositions: !1,
                    revert: !1,
                    revertDuration: 500,
                    scope: 'default',
                    scroll: !0,
                    scrollSensitivity: 20,
                    scrollSpeed: 20,
                    snap: !1,
                    snapMode: 'both',
                    snapTolerance: 20,
                    stack: !1,
                    zIndex: !1,
                    drag: null,
                    start: null,
                    stop: null,
                  },
                  _create: function () {
                    'original' === this.options.helper && this._setPositionRelative(),
                      this.options.addClasses && this._addClass('ui-draggable'),
                      this._setHandleClassName(),
                      this._mouseInit();
                  },
                  _setOption: function (t, e) {
                    this._super(t, e),
                      'handle' === t &&
                        (this._removeHandleClassName(), this._setHandleClassName());
                  },
                  _destroy: function () {
                    (this.helper || this.element).is('.ui-draggable-dragging')
                      ? (this.destroyOnClear = !0)
                      : (this._removeHandleClassName(), this._mouseDestroy());
                  },
                  _mouseCapture: function (e) {
                    var i = this.options;
                    return !(
                      this.helper ||
                      i.disabled ||
                      t(e.target).closest('.ui-resizable-handle').length > 0 ||
                      ((this.handle = this._getHandle(e)),
                      !this.handle ||
                        (this._blurActiveElement(e),
                        this._blockFrames(!0 === i.iframeFix ? 'iframe' : i.iframeFix),
                        0))
                    );
                  },
                  _blockFrames: function (e) {
                    this.iframeBlocks = this.document.find(e).map(function () {
                      var e = t(this);
                      return t('<div>')
                        .css('position', 'absolute')
                        .appendTo(e.parent())
                        .outerWidth(e.outerWidth())
                        .outerHeight(e.outerHeight())
                        .offset(e.offset())[0];
                    });
                  },
                  _unblockFrames: function () {
                    this.iframeBlocks &&
                      (this.iframeBlocks.remove(), delete this.iframeBlocks);
                  },
                  _blurActiveElement: function (e) {
                    var i = t.ui.safeActiveElement(this.document[0]);
                    t(e.target).closest(i).length || t.ui.safeBlur(i);
                  },
                  _mouseStart: function (e) {
                    var i = this.options;
                    return (
                      (this.helper = this._createHelper(e)),
                      this._addClass(this.helper, 'ui-draggable-dragging'),
                      this._cacheHelperProportions(),
                      t.ui.ddmanager && (t.ui.ddmanager.current = this),
                      this._cacheMargins(),
                      (this.cssPosition = this.helper.css('position')),
                      (this.scrollParent = this.helper.scrollParent(!0)),
                      (this.offsetParent = this.helper.offsetParent()),
                      (this.hasFixedAncestor =
                        this.helper.parents().filter(function () {
                          return 'fixed' === t(this).css('position');
                        }).length > 0),
                      (this.positionAbs = this.element.offset()),
                      this._refreshOffsets(e),
                      (this.originalPosition = this.position =
                        this._generatePosition(e, !1)),
                      (this.originalPageX = e.pageX),
                      (this.originalPageY = e.pageY),
                      i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
                      this._setContainment(),
                      !1 === this._trigger('start', e)
                        ? (this._clear(), !1)
                        : (this._cacheHelperProportions(),
                          t.ui.ddmanager &&
                            !i.dropBehaviour &&
                            t.ui.ddmanager.prepareOffsets(this, e),
                          this._mouseDrag(e, !0),
                          t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e),
                          !0)
                    );
                  },
                  _refreshOffsets: function (t) {
                    (this.offset = {
                      top: this.positionAbs.top - this.margins.top,
                      left: this.positionAbs.left - this.margins.left,
                      scroll: !1,
                      parent: this._getParentOffset(),
                      relative: this._getRelativeOffset(),
                    }),
                      (this.offset.click = {
                        left: t.pageX - this.offset.left,
                        top: t.pageY - this.offset.top,
                      });
                  },
                  _mouseDrag: function (e, i) {
                    if (
                      (this.hasFixedAncestor &&
                        (this.offset.parent = this._getParentOffset()),
                      (this.position = this._generatePosition(e, !0)),
                      (this.positionAbs = this._convertPositionTo('absolute')),
                      !i)
                    ) {
                      var n = this._uiHash();
                      if (!1 === this._trigger('drag', e, n))
                        return this._mouseUp(new t.Event('mouseup', e)), !1;
                      this.position = n.position;
                    }
                    return (
                      (this.helper[0].style.left = this.position.left + 'px'),
                      (this.helper[0].style.top = this.position.top + 'px'),
                      t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
                      !1
                    );
                  },
                  _mouseStop: function (e) {
                    var i = this,
                      n = !1;
                    return (
                      t.ui.ddmanager &&
                        !this.options.dropBehaviour &&
                        (n = t.ui.ddmanager.drop(this, e)),
                      this.dropped && ((n = this.dropped), (this.dropped = !1)),
                      ('invalid' === this.options.revert && !n) ||
                      ('valid' === this.options.revert && n) ||
                      !0 === this.options.revert ||
                      (t.isFunction(this.options.revert) &&
                        this.options.revert.call(this.element, n))
                        ? t(this.helper).animate(
                            this.originalPosition,
                            parseInt(this.options.revertDuration, 10),
                            function () {
                              !1 !== i._trigger('stop', e) && i._clear();
                            }
                          )
                        : !1 !== this._trigger('stop', e) && this._clear(),
                      !1
                    );
                  },
                  _mouseUp: function (e) {
                    return (
                      this._unblockFrames(),
                      t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e),
                      this.handleElement.is(e.target) && this.element.trigger('focus'),
                      t.ui.mouse.prototype._mouseUp.call(this, e)
                    );
                  },
                  cancel: function () {
                    return (
                      this.helper.is('.ui-draggable-dragging')
                        ? this._mouseUp(new t.Event('mouseup', {target: this.element[0]}))
                        : this._clear(),
                      this
                    );
                  },
                  _getHandle: function (e) {
                    return (
                      !this.options.handle ||
                      !!t(e.target).closest(this.element.find(this.options.handle)).length
                    );
                  },
                  _setHandleClassName: function () {
                    (this.handleElement = this.options.handle
                      ? this.element.find(this.options.handle)
                      : this.element),
                      this._addClass(this.handleElement, 'ui-draggable-handle');
                  },
                  _removeHandleClassName: function () {
                    this._removeClass(this.handleElement, 'ui-draggable-handle');
                  },
                  _createHelper: function (e) {
                    var i = this.options,
                      n = t.isFunction(i.helper),
                      s = n
                        ? t(i.helper.apply(this.element[0], [e]))
                        : 'clone' === i.helper
                        ? this.element.clone().removeAttr('id')
                        : this.element;
                    return (
                      s.parents('body').length ||
                        s.appendTo(
                          'parent' === i.appendTo
                            ? this.element[0].parentNode
                            : i.appendTo
                        ),
                      n && s[0] === this.element[0] && this._setPositionRelative(),
                      s[0] === this.element[0] ||
                        /(fixed|absolute)/.test(s.css('position')) ||
                        s.css('position', 'absolute'),
                      s
                    );
                  },
                  _setPositionRelative: function () {
                    /^(?:r|a|f)/.test(this.element.css('position')) ||
                      (this.element[0].style.position = 'relative');
                  },
                  _adjustOffsetFromHelper: function (e) {
                    'string' == typeof e && (e = e.split(' ')),
                      t.isArray(e) && (e = {left: +e[0], top: +e[1] || 0}),
                      'left' in e &&
                        (this.offset.click.left = e.left + this.margins.left),
                      'right' in e &&
                        (this.offset.click.left =
                          this.helperProportions.width - e.right + this.margins.left),
                      'top' in e && (this.offset.click.top = e.top + this.margins.top),
                      'bottom' in e &&
                        (this.offset.click.top =
                          this.helperProportions.height - e.bottom + this.margins.top);
                  },
                  _isRootNode: function (t) {
                    return /(html|body)/i.test(t.tagName) || t === this.document[0];
                  },
                  _getParentOffset: function () {
                    var e = this.offsetParent.offset(),
                      i = this.document[0];
                    return (
                      'absolute' === this.cssPosition &&
                        this.scrollParent[0] !== i &&
                        t.contains(this.scrollParent[0], this.offsetParent[0]) &&
                        ((e.left += this.scrollParent.scrollLeft()),
                        (e.top += this.scrollParent.scrollTop())),
                      this._isRootNode(this.offsetParent[0]) && (e = {top: 0, left: 0}),
                      {
                        top:
                          e.top +
                          (parseInt(this.offsetParent.css('borderTopWidth'), 10) || 0),
                        left:
                          e.left +
                          (parseInt(this.offsetParent.css('borderLeftWidth'), 10) || 0),
                      }
                    );
                  },
                  _getRelativeOffset: function () {
                    if ('relative' !== this.cssPosition) return {top: 0, left: 0};
                    var t = this.element.position(),
                      e = this._isRootNode(this.scrollParent[0]);
                    return {
                      top:
                        t.top -
                        (parseInt(this.helper.css('top'), 10) || 0) +
                        (e ? 0 : this.scrollParent.scrollTop()),
                      left:
                        t.left -
                        (parseInt(this.helper.css('left'), 10) || 0) +
                        (e ? 0 : this.scrollParent.scrollLeft()),
                    };
                  },
                  _cacheMargins: function () {
                    this.margins = {
                      left: parseInt(this.element.css('marginLeft'), 10) || 0,
                      top: parseInt(this.element.css('marginTop'), 10) || 0,
                      right: parseInt(this.element.css('marginRight'), 10) || 0,
                      bottom: parseInt(this.element.css('marginBottom'), 10) || 0,
                    };
                  },
                  _cacheHelperProportions: function () {
                    this.helperProportions = {
                      width: this.helper.outerWidth(),
                      height: this.helper.outerHeight(),
                    };
                  },
                  _setContainment: function () {
                    var e,
                      i,
                      n,
                      s = this.options,
                      r = this.document[0];
                    (this.relativeContainer = null),
                      s.containment
                        ? 'window' !== s.containment
                          ? 'document' !== s.containment
                            ? s.containment.constructor !== Array
                              ? ('parent' === s.containment &&
                                  (s.containment = this.helper[0].parentNode),
                                (n = (i = t(s.containment))[0]) &&
                                  ((e = /(scroll|auto)/.test(i.css('overflow'))),
                                  (this.containment = [
                                    (parseInt(i.css('borderLeftWidth'), 10) || 0) +
                                      (parseInt(i.css('paddingLeft'), 10) || 0),
                                    (parseInt(i.css('borderTopWidth'), 10) || 0) +
                                      (parseInt(i.css('paddingTop'), 10) || 0),
                                    (e
                                      ? Math.max(n.scrollWidth, n.offsetWidth)
                                      : n.offsetWidth) -
                                      (parseInt(i.css('borderRightWidth'), 10) || 0) -
                                      (parseInt(i.css('paddingRight'), 10) || 0) -
                                      this.helperProportions.width -
                                      this.margins.left -
                                      this.margins.right,
                                    (e
                                      ? Math.max(n.scrollHeight, n.offsetHeight)
                                      : n.offsetHeight) -
                                      (parseInt(i.css('borderBottomWidth'), 10) || 0) -
                                      (parseInt(i.css('paddingBottom'), 10) || 0) -
                                      this.helperProportions.height -
                                      this.margins.top -
                                      this.margins.bottom,
                                  ]),
                                  (this.relativeContainer = i)))
                              : (this.containment = s.containment)
                            : (this.containment = [
                                0,
                                0,
                                t(r).width() -
                                  this.helperProportions.width -
                                  this.margins.left,
                                (t(r).height() || r.body.parentNode.scrollHeight) -
                                  this.helperProportions.height -
                                  this.margins.top,
                              ])
                          : (this.containment = [
                              t(window).scrollLeft() -
                                this.offset.relative.left -
                                this.offset.parent.left,
                              t(window).scrollTop() -
                                this.offset.relative.top -
                                this.offset.parent.top,
                              t(window).scrollLeft() +
                                t(window).width() -
                                this.helperProportions.width -
                                this.margins.left,
                              t(window).scrollTop() +
                                (t(window).height() || r.body.parentNode.scrollHeight) -
                                this.helperProportions.height -
                                this.margins.top,
                            ])
                        : (this.containment = null);
                  },
                  _convertPositionTo: function (t, e) {
                    e || (e = this.position);
                    var i = 'absolute' === t ? 1 : -1,
                      n = this._isRootNode(this.scrollParent[0]);
                    return {
                      top:
                        e.top +
                        this.offset.relative.top * i +
                        this.offset.parent.top * i -
                        ('fixed' === this.cssPosition
                          ? -this.offset.scroll.top
                          : n
                          ? 0
                          : this.offset.scroll.top) *
                          i,
                      left:
                        e.left +
                        this.offset.relative.left * i +
                        this.offset.parent.left * i -
                        ('fixed' === this.cssPosition
                          ? -this.offset.scroll.left
                          : n
                          ? 0
                          : this.offset.scroll.left) *
                          i,
                    };
                  },
                  _generatePosition: function (t, e) {
                    var i,
                      n,
                      s,
                      r,
                      a = this.options,
                      o = this._isRootNode(this.scrollParent[0]),
                      l = t.pageX,
                      c = t.pageY;
                    return (
                      (o && this.offset.scroll) ||
                        (this.offset.scroll = {
                          top: this.scrollParent.scrollTop(),
                          left: this.scrollParent.scrollLeft(),
                        }),
                      e &&
                        (this.containment &&
                          (this.relativeContainer
                            ? ((n = this.relativeContainer.offset()),
                              (i = [
                                this.containment[0] + n.left,
                                this.containment[1] + n.top,
                                this.containment[2] + n.left,
                                this.containment[3] + n.top,
                              ]))
                            : (i = this.containment),
                          t.pageX - this.offset.click.left < i[0] &&
                            (l = i[0] + this.offset.click.left),
                          t.pageY - this.offset.click.top < i[1] &&
                            (c = i[1] + this.offset.click.top),
                          t.pageX - this.offset.click.left > i[2] &&
                            (l = i[2] + this.offset.click.left),
                          t.pageY - this.offset.click.top > i[3] &&
                            (c = i[3] + this.offset.click.top)),
                        a.grid &&
                          ((s = a.grid[1]
                            ? this.originalPageY +
                              Math.round((c - this.originalPageY) / a.grid[1]) * a.grid[1]
                            : this.originalPageY),
                          (c = i
                            ? s - this.offset.click.top >= i[1] ||
                              s - this.offset.click.top > i[3]
                              ? s
                              : s - this.offset.click.top >= i[1]
                              ? s - a.grid[1]
                              : s + a.grid[1]
                            : s),
                          (r = a.grid[0]
                            ? this.originalPageX +
                              Math.round((l - this.originalPageX) / a.grid[0]) * a.grid[0]
                            : this.originalPageX),
                          (l = i
                            ? r - this.offset.click.left >= i[0] ||
                              r - this.offset.click.left > i[2]
                              ? r
                              : r - this.offset.click.left >= i[0]
                              ? r - a.grid[0]
                              : r + a.grid[0]
                            : r)),
                        'y' === a.axis && (l = this.originalPageX),
                        'x' === a.axis && (c = this.originalPageY)),
                      {
                        top:
                          c -
                          this.offset.click.top -
                          this.offset.relative.top -
                          this.offset.parent.top +
                          ('fixed' === this.cssPosition
                            ? -this.offset.scroll.top
                            : o
                            ? 0
                            : this.offset.scroll.top),
                        left:
                          l -
                          this.offset.click.left -
                          this.offset.relative.left -
                          this.offset.parent.left +
                          ('fixed' === this.cssPosition
                            ? -this.offset.scroll.left
                            : o
                            ? 0
                            : this.offset.scroll.left),
                      }
                    );
                  },
                  _clear: function () {
                    this._removeClass(this.helper, 'ui-draggable-dragging'),
                      this.helper[0] === this.element[0] ||
                        this.cancelHelperRemoval ||
                        this.helper.remove(),
                      (this.helper = null),
                      (this.cancelHelperRemoval = !1),
                      this.destroyOnClear && this.destroy();
                  },
                  _trigger: function (e, i, n) {
                    return (
                      (n = n || this._uiHash()),
                      t.ui.plugin.call(this, e, [i, n, this], !0),
                      /^(drag|start|stop)/.test(e) &&
                        ((this.positionAbs = this._convertPositionTo('absolute')),
                        (n.offset = this.positionAbs)),
                      t.Widget.prototype._trigger.call(this, e, i, n)
                    );
                  },
                  plugins: {},
                  _uiHash: function () {
                    return {
                      helper: this.helper,
                      position: this.position,
                      originalPosition: this.originalPosition,
                      offset: this.positionAbs,
                    };
                  },
                }),
                t.ui.plugin.add('draggable', 'connectToSortable', {
                  start: function (e, i, n) {
                    var s = t.extend({}, i, {item: n.element});
                    (n.sortables = []),
                      t(n.options.connectToSortable).each(function () {
                        var i = t(this).sortable('instance');
                        i &&
                          !i.options.disabled &&
                          (n.sortables.push(i),
                          i.refreshPositions(),
                          i._trigger('activate', e, s));
                      });
                  },
                  stop: function (e, i, n) {
                    var s = t.extend({}, i, {item: n.element});
                    (n.cancelHelperRemoval = !1),
                      t.each(n.sortables, function () {
                        this.isOver
                          ? ((this.isOver = 0),
                            (n.cancelHelperRemoval = !0),
                            (this.cancelHelperRemoval = !1),
                            (this._storedCSS = {
                              position: this.placeholder.css('position'),
                              top: this.placeholder.css('top'),
                              left: this.placeholder.css('left'),
                            }),
                            this._mouseStop(e),
                            (this.options.helper = this.options._helper))
                          : ((this.cancelHelperRemoval = !0),
                            this._trigger('deactivate', e, s));
                      });
                  },
                  drag: function (e, i, n) {
                    t.each(n.sortables, function () {
                      var s = !1,
                        r = this;
                      (r.positionAbs = n.positionAbs),
                        (r.helperProportions = n.helperProportions),
                        (r.offset.click = n.offset.click),
                        r._intersectsWith(r.containerCache) &&
                          ((s = !0),
                          t.each(n.sortables, function () {
                            return (
                              (this.positionAbs = n.positionAbs),
                              (this.helperProportions = n.helperProportions),
                              (this.offset.click = n.offset.click),
                              this !== r &&
                                this._intersectsWith(this.containerCache) &&
                                t.contains(r.element[0], this.element[0]) &&
                                (s = !1),
                              s
                            );
                          })),
                        s
                          ? (r.isOver ||
                              ((r.isOver = 1),
                              (n._parent = i.helper.parent()),
                              (r.currentItem = i.helper
                                .appendTo(r.element)
                                .data('ui-sortable-item', !0)),
                              (r.options._helper = r.options.helper),
                              (r.options.helper = function () {
                                return i.helper[0];
                              }),
                              (e.target = r.currentItem[0]),
                              r._mouseCapture(e, !0),
                              r._mouseStart(e, !0, !0),
                              (r.offset.click.top = n.offset.click.top),
                              (r.offset.click.left = n.offset.click.left),
                              (r.offset.parent.left -=
                                n.offset.parent.left - r.offset.parent.left),
                              (r.offset.parent.top -=
                                n.offset.parent.top - r.offset.parent.top),
                              n._trigger('toSortable', e),
                              (n.dropped = r.element),
                              t.each(n.sortables, function () {
                                this.refreshPositions();
                              }),
                              (n.currentItem = n.element),
                              (r.fromOutside = n)),
                            r.currentItem && (r._mouseDrag(e), (i.position = r.position)))
                          : r.isOver &&
                            ((r.isOver = 0),
                            (r.cancelHelperRemoval = !0),
                            (r.options._revert = r.options.revert),
                            (r.options.revert = !1),
                            r._trigger('out', e, r._uiHash(r)),
                            r._mouseStop(e, !0),
                            (r.options.revert = r.options._revert),
                            (r.options.helper = r.options._helper),
                            r.placeholder && r.placeholder.remove(),
                            i.helper.appendTo(n._parent),
                            n._refreshOffsets(e),
                            (i.position = n._generatePosition(e, !0)),
                            n._trigger('fromSortable', e),
                            (n.dropped = !1),
                            t.each(n.sortables, function () {
                              this.refreshPositions();
                            }));
                    });
                  },
                }),
                t.ui.plugin.add('draggable', 'cursor', {
                  start: function (e, i, n) {
                    var s = t('body'),
                      r = n.options;
                    s.css('cursor') && (r._cursor = s.css('cursor')),
                      s.css('cursor', r.cursor);
                  },
                  stop: function (e, i, n) {
                    var s = n.options;
                    s._cursor && t('body').css('cursor', s._cursor);
                  },
                }),
                t.ui.plugin.add('draggable', 'opacity', {
                  start: function (e, i, n) {
                    var s = t(i.helper),
                      r = n.options;
                    s.css('opacity') && (r._opacity = s.css('opacity')),
                      s.css('opacity', r.opacity);
                  },
                  stop: function (e, i, n) {
                    var s = n.options;
                    s._opacity && t(i.helper).css('opacity', s._opacity);
                  },
                }),
                t.ui.plugin.add('draggable', 'scroll', {
                  start: function (t, e, i) {
                    i.scrollParentNotHidden ||
                      (i.scrollParentNotHidden = i.helper.scrollParent(!1)),
                      i.scrollParentNotHidden[0] !== i.document[0] &&
                        'HTML' !== i.scrollParentNotHidden[0].tagName &&
                        (i.overflowOffset = i.scrollParentNotHidden.offset());
                  },
                  drag: function (e, i, n) {
                    var s = n.options,
                      r = !1,
                      a = n.scrollParentNotHidden[0],
                      o = n.document[0];
                    a !== o && 'HTML' !== a.tagName
                      ? ((s.axis && 'x' === s.axis) ||
                          (n.overflowOffset.top + a.offsetHeight - e.pageY <
                          s.scrollSensitivity
                            ? (a.scrollTop = r = a.scrollTop + s.scrollSpeed)
                            : e.pageY - n.overflowOffset.top < s.scrollSensitivity &&
                              (a.scrollTop = r = a.scrollTop - s.scrollSpeed)),
                        (s.axis && 'y' === s.axis) ||
                          (n.overflowOffset.left + a.offsetWidth - e.pageX <
                          s.scrollSensitivity
                            ? (a.scrollLeft = r = a.scrollLeft + s.scrollSpeed)
                            : e.pageX - n.overflowOffset.left < s.scrollSensitivity &&
                              (a.scrollLeft = r = a.scrollLeft - s.scrollSpeed)))
                      : ((s.axis && 'x' === s.axis) ||
                          (e.pageY - t(o).scrollTop() < s.scrollSensitivity
                            ? (r = t(o).scrollTop(t(o).scrollTop() - s.scrollSpeed))
                            : t(window).height() - (e.pageY - t(o).scrollTop()) <
                                s.scrollSensitivity &&
                              (r = t(o).scrollTop(t(o).scrollTop() + s.scrollSpeed))),
                        (s.axis && 'y' === s.axis) ||
                          (e.pageX - t(o).scrollLeft() < s.scrollSensitivity
                            ? (r = t(o).scrollLeft(t(o).scrollLeft() - s.scrollSpeed))
                            : t(window).width() - (e.pageX - t(o).scrollLeft()) <
                                s.scrollSensitivity &&
                              (r = t(o).scrollLeft(t(o).scrollLeft() + s.scrollSpeed)))),
                      !1 !== r &&
                        t.ui.ddmanager &&
                        !s.dropBehaviour &&
                        t.ui.ddmanager.prepareOffsets(n, e);
                  },
                }),
                t.ui.plugin.add('draggable', 'snap', {
                  start: function (e, i, n) {
                    var s = n.options;
                    (n.snapElements = []),
                      t(
                        s.snap.constructor !== String
                          ? s.snap.items || ':data(ui-draggable)'
                          : s.snap
                      ).each(function () {
                        var e = t(this),
                          i = e.offset();
                        this !== n.element[0] &&
                          n.snapElements.push({
                            item: this,
                            width: e.outerWidth(),
                            height: e.outerHeight(),
                            top: i.top,
                            left: i.left,
                          });
                      });
                  },
                  drag: function (e, i, n) {
                    var s,
                      r,
                      a,
                      o,
                      l,
                      c,
                      u,
                      d,
                      h,
                      p,
                      f = n.options,
                      g = f.snapTolerance,
                      m = i.offset.left,
                      v = m + n.helperProportions.width,
                      b = i.offset.top,
                      y = b + n.helperProportions.height;
                    for (h = n.snapElements.length - 1; h >= 0; h--)
                      (c =
                        (l = n.snapElements[h].left - n.margins.left) +
                        n.snapElements[h].width),
                        (d =
                          (u = n.snapElements[h].top - n.margins.top) +
                          n.snapElements[h].height),
                        v < l - g ||
                        m > c + g ||
                        y < u - g ||
                        b > d + g ||
                        !t.contains(
                          n.snapElements[h].item.ownerDocument,
                          n.snapElements[h].item
                        )
                          ? (n.snapElements[h].snapping &&
                              n.options.snap.release &&
                              n.options.snap.release.call(
                                n.element,
                                e,
                                t.extend(n._uiHash(), {snapItem: n.snapElements[h].item})
                              ),
                            (n.snapElements[h].snapping = !1))
                          : ('inner' !== f.snapMode &&
                              ((s = Math.abs(u - y) <= g),
                              (r = Math.abs(d - b) <= g),
                              (a = Math.abs(l - v) <= g),
                              (o = Math.abs(c - m) <= g),
                              s &&
                                (i.position.top = n._convertPositionTo('relative', {
                                  top: u - n.helperProportions.height,
                                  left: 0,
                                }).top),
                              r &&
                                (i.position.top = n._convertPositionTo('relative', {
                                  top: d,
                                  left: 0,
                                }).top),
                              a &&
                                (i.position.left = n._convertPositionTo('relative', {
                                  top: 0,
                                  left: l - n.helperProportions.width,
                                }).left),
                              o &&
                                (i.position.left = n._convertPositionTo('relative', {
                                  top: 0,
                                  left: c,
                                }).left)),
                            (p = s || r || a || o),
                            'outer' !== f.snapMode &&
                              ((s = Math.abs(u - b) <= g),
                              (r = Math.abs(d - y) <= g),
                              (a = Math.abs(l - m) <= g),
                              (o = Math.abs(c - v) <= g),
                              s &&
                                (i.position.top = n._convertPositionTo('relative', {
                                  top: u,
                                  left: 0,
                                }).top),
                              r &&
                                (i.position.top = n._convertPositionTo('relative', {
                                  top: d - n.helperProportions.height,
                                  left: 0,
                                }).top),
                              a &&
                                (i.position.left = n._convertPositionTo('relative', {
                                  top: 0,
                                  left: l,
                                }).left),
                              o &&
                                (i.position.left = n._convertPositionTo('relative', {
                                  top: 0,
                                  left: c - n.helperProportions.width,
                                }).left)),
                            !n.snapElements[h].snapping &&
                              (s || r || a || o || p) &&
                              n.options.snap.snap &&
                              n.options.snap.snap.call(
                                n.element,
                                e,
                                t.extend(n._uiHash(), {snapItem: n.snapElements[h].item})
                              ),
                            (n.snapElements[h].snapping = s || r || a || o || p));
                  },
                }),
                t.ui.plugin.add('draggable', 'stack', {
                  start: function (e, i, n) {
                    var s,
                      r = n.options,
                      a = t.makeArray(t(r.stack)).sort(function (e, i) {
                        return (
                          (parseInt(t(e).css('zIndex'), 10) || 0) -
                          (parseInt(t(i).css('zIndex'), 10) || 0)
                        );
                      });
                    a.length &&
                      ((s = parseInt(t(a[0]).css('zIndex'), 10) || 0),
                      t(a).each(function (e) {
                        t(this).css('zIndex', s + e);
                      }),
                      this.css('zIndex', s + a.length));
                  },
                }),
                t.ui.plugin.add('draggable', 'zIndex', {
                  start: function (e, i, n) {
                    var s = t(i.helper),
                      r = n.options;
                    s.css('zIndex') && (r._zIndex = s.css('zIndex')),
                      s.css('zIndex', r.zIndex);
                  },
                  stop: function (e, i, n) {
                    var s = n.options;
                    s._zIndex && t(i.helper).css('zIndex', s._zIndex);
                  },
                }),
                t.ui.draggable
              );
            })
              ? n.apply(e, s)
              : n) || (t.exports = r);
    },
    function (t, e, i) {
      var n, s, r;
      (s = [i(1), i(4)]),
        void 0 ===
          (r =
            'function' ==
            typeof (n = function (t) {
              return (t.ui.plugin = {
                add: function (e, i, n) {
                  var s,
                    r = t.ui[e].prototype;
                  for (s in n)
                    (r.plugins[s] = r.plugins[s] || []), r.plugins[s].push([i, n[s]]);
                },
                call: function (t, e, i, n) {
                  var s,
                    r = t.plugins[e];
                  if (
                    r &&
                    (n ||
                      (t.element[0].parentNode &&
                        11 !== t.element[0].parentNode.nodeType))
                  )
                    for (s = 0; s < r.length; s++)
                      t.options[r[s][0]] && r[s][1].apply(t.element, i);
                },
              });
            })
              ? n.apply(e, s)
              : n) || (t.exports = r);
    },
    function (t, e, i) {
      var n, s, r;
      (s = [i(1), i(4)]),
        void 0 ===
          (r =
            'function' ==
            typeof (n = function (t) {
              return (t.ui.safeActiveElement = function (t) {
                var e;
                try {
                  e = t.activeElement;
                } catch (i) {
                  e = t.body;
                }
                return e || (e = t.body), e.nodeName || (e = t.body), e;
              });
            })
              ? n.apply(e, s)
              : n) || (t.exports = r);
    },
    function (t, e, i) {
      var n, s, r;
      (s = [i(1), i(4)]),
        void 0 ===
          (r =
            'function' ==
            typeof (n = function (t) {
              return (t.ui.safeBlur = function (e) {
                e && 'body' !== e.nodeName.toLowerCase() && t(e).trigger('blur');
              });
            })
              ? n.apply(e, s)
              : n) || (t.exports = r);
    },
    function (t, e, i) {
      var n, s, r;
      (s = [i(1), i(9), i(17), i(16), i(18), i(4), i(8)]),
        void 0 ===
          (r =
            'function' ==
            typeof (n = function (t) {
              return t.widget('ui.sortable', t.ui.mouse, {
                version: '1.12.1',
                widgetEventPrefix: 'sort',
                ready: !1,
                options: {
                  appendTo: 'parent',
                  axis: !1,
                  connectWith: !1,
                  containment: !1,
                  cursor: 'auto',
                  cursorAt: !1,
                  dropOnEmpty: !0,
                  forcePlaceholderSize: !1,
                  forceHelperSize: !1,
                  grid: !1,
                  handle: !1,
                  helper: 'original',
                  items: '> *',
                  opacity: !1,
                  placeholder: !1,
                  revert: !1,
                  scroll: !0,
                  scrollSensitivity: 20,
                  scrollSpeed: 20,
                  scope: 'default',
                  tolerance: 'intersect',
                  zIndex: 1e3,
                  activate: null,
                  beforeStop: null,
                  change: null,
                  deactivate: null,
                  out: null,
                  over: null,
                  receive: null,
                  remove: null,
                  sort: null,
                  start: null,
                  stop: null,
                  update: null,
                },
                _isOverAxis: function (t, e, i) {
                  return t >= e && t < e + i;
                },
                _isFloating: function (t) {
                  return (
                    /left|right/.test(t.css('float')) ||
                    /inline|table-cell/.test(t.css('display'))
                  );
                },
                _create: function () {
                  (this.containerCache = {}),
                    this._addClass('ui-sortable'),
                    this.refresh(),
                    (this.offset = this.element.offset()),
                    this._mouseInit(),
                    this._setHandleClassName(),
                    (this.ready = !0);
                },
                _setOption: function (t, e) {
                  this._super(t, e), 'handle' === t && this._setHandleClassName();
                },
                _setHandleClassName: function () {
                  var e = this;
                  this._removeClass(
                    this.element.find('.ui-sortable-handle'),
                    'ui-sortable-handle'
                  ),
                    t.each(this.items, function () {
                      e._addClass(
                        this.instance.options.handle
                          ? this.item.find(this.instance.options.handle)
                          : this.item,
                        'ui-sortable-handle'
                      );
                    });
                },
                _destroy: function () {
                  this._mouseDestroy();
                  for (var t = this.items.length - 1; t >= 0; t--)
                    this.items[t].item.removeData(this.widgetName + '-item');
                  return this;
                },
                _mouseCapture: function (e, i) {
                  var n = null,
                    s = !1,
                    r = this;
                  return !(
                    this.reverting ||
                    this.options.disabled ||
                    'static' === this.options.type ||
                    (this._refreshItems(e),
                    t(e.target)
                      .parents()
                      .each(function () {
                        if (t.data(this, r.widgetName + '-item') === r)
                          return (n = t(this)), !1;
                      }),
                    t.data(e.target, r.widgetName + '-item') === r && (n = t(e.target)),
                    !n ||
                      (this.options.handle &&
                        !i &&
                        (t(this.options.handle, n)
                          .find('*')
                          .addBack()
                          .each(function () {
                            this === e.target && (s = !0);
                          }),
                        !s)) ||
                      ((this.currentItem = n), this._removeCurrentsFromItems(), 0))
                  );
                },
                _mouseStart: function (e, i, n) {
                  var s,
                    r,
                    a = this.options;
                  if (
                    ((this.currentContainer = this),
                    this.refreshPositions(),
                    (this.helper = this._createHelper(e)),
                    this._cacheHelperProportions(),
                    this._cacheMargins(),
                    (this.scrollParent = this.helper.scrollParent()),
                    (this.offset = this.currentItem.offset()),
                    (this.offset = {
                      top: this.offset.top - this.margins.top,
                      left: this.offset.left - this.margins.left,
                    }),
                    t.extend(this.offset, {
                      click: {
                        left: e.pageX - this.offset.left,
                        top: e.pageY - this.offset.top,
                      },
                      parent: this._getParentOffset(),
                      relative: this._getRelativeOffset(),
                    }),
                    this.helper.css('position', 'absolute'),
                    (this.cssPosition = this.helper.css('position')),
                    (this.originalPosition = this._generatePosition(e)),
                    (this.originalPageX = e.pageX),
                    (this.originalPageY = e.pageY),
                    a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt),
                    (this.domPosition = {
                      prev: this.currentItem.prev()[0],
                      parent: this.currentItem.parent()[0],
                    }),
                    this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
                    this._createPlaceholder(),
                    a.containment && this._setContainment(),
                    a.cursor &&
                      'auto' !== a.cursor &&
                      ((r = this.document.find('body')),
                      (this.storedCursor = r.css('cursor')),
                      r.css('cursor', a.cursor),
                      (this.storedStylesheet = t(
                        '<style>*{ cursor: ' + a.cursor + ' !important; }</style>'
                      ).appendTo(r))),
                    a.opacity &&
                      (this.helper.css('opacity') &&
                        (this._storedOpacity = this.helper.css('opacity')),
                      this.helper.css('opacity', a.opacity)),
                    a.zIndex &&
                      (this.helper.css('zIndex') &&
                        (this._storedZIndex = this.helper.css('zIndex')),
                      this.helper.css('zIndex', a.zIndex)),
                    this.scrollParent[0] !== this.document[0] &&
                      'HTML' !== this.scrollParent[0].tagName &&
                      (this.overflowOffset = this.scrollParent.offset()),
                    this._trigger('start', e, this._uiHash()),
                    this._preserveHelperProportions || this._cacheHelperProportions(),
                    !n)
                  )
                    for (s = this.containers.length - 1; s >= 0; s--)
                      this.containers[s]._trigger('activate', e, this._uiHash(this));
                  return (
                    t.ui.ddmanager && (t.ui.ddmanager.current = this),
                    t.ui.ddmanager &&
                      !a.dropBehaviour &&
                      t.ui.ddmanager.prepareOffsets(this, e),
                    (this.dragging = !0),
                    this._addClass(this.helper, 'ui-sortable-helper'),
                    this._mouseDrag(e),
                    !0
                  );
                },
                _mouseDrag: function (e) {
                  var i,
                    n,
                    s,
                    r,
                    a = this.options,
                    o = !1;
                  for (
                    this.position = this._generatePosition(e),
                      this.positionAbs = this._convertPositionTo('absolute'),
                      this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
                      this.options.scroll &&
                        (this.scrollParent[0] !== this.document[0] &&
                        'HTML' !== this.scrollParent[0].tagName
                          ? (this.overflowOffset.top +
                              this.scrollParent[0].offsetHeight -
                              e.pageY <
                            a.scrollSensitivity
                              ? (this.scrollParent[0].scrollTop = o =
                                  this.scrollParent[0].scrollTop + a.scrollSpeed)
                              : e.pageY - this.overflowOffset.top < a.scrollSensitivity &&
                                (this.scrollParent[0].scrollTop = o =
                                  this.scrollParent[0].scrollTop - a.scrollSpeed),
                            this.overflowOffset.left +
                              this.scrollParent[0].offsetWidth -
                              e.pageX <
                            a.scrollSensitivity
                              ? (this.scrollParent[0].scrollLeft = o =
                                  this.scrollParent[0].scrollLeft + a.scrollSpeed)
                              : e.pageX - this.overflowOffset.left <
                                  a.scrollSensitivity &&
                                (this.scrollParent[0].scrollLeft = o =
                                  this.scrollParent[0].scrollLeft - a.scrollSpeed))
                          : (e.pageY - this.document.scrollTop() < a.scrollSensitivity
                              ? (o = this.document.scrollTop(
                                  this.document.scrollTop() - a.scrollSpeed
                                ))
                              : this.window.height() -
                                  (e.pageY - this.document.scrollTop()) <
                                  a.scrollSensitivity &&
                                (o = this.document.scrollTop(
                                  this.document.scrollTop() + a.scrollSpeed
                                )),
                            e.pageX - this.document.scrollLeft() < a.scrollSensitivity
                              ? (o = this.document.scrollLeft(
                                  this.document.scrollLeft() - a.scrollSpeed
                                ))
                              : this.window.width() -
                                  (e.pageX - this.document.scrollLeft()) <
                                  a.scrollSensitivity &&
                                (o = this.document.scrollLeft(
                                  this.document.scrollLeft() + a.scrollSpeed
                                ))),
                        !1 !== o &&
                          t.ui.ddmanager &&
                          !a.dropBehaviour &&
                          t.ui.ddmanager.prepareOffsets(this, e)),
                      this.positionAbs = this._convertPositionTo('absolute'),
                      (this.options.axis && 'y' === this.options.axis) ||
                        (this.helper[0].style.left = this.position.left + 'px'),
                      (this.options.axis && 'x' === this.options.axis) ||
                        (this.helper[0].style.top = this.position.top + 'px'),
                      i = this.items.length - 1;
                    i >= 0;
                    i--
                  )
                    if (
                      ((n = this.items[i]),
                      (s = n.item[0]),
                      (r = this._intersectsWithPointer(n)) &&
                        n.instance === this.currentContainer &&
                        !(
                          s === this.currentItem[0] ||
                          this.placeholder[1 === r ? 'next' : 'prev']()[0] === s ||
                          t.contains(this.placeholder[0], s) ||
                          ('semi-dynamic' === this.options.type &&
                            t.contains(this.element[0], s))
                        ))
                    ) {
                      if (
                        ((this.direction = 1 === r ? 'down' : 'up'),
                        'pointer' !== this.options.tolerance &&
                          !this._intersectsWithSides(n))
                      )
                        break;
                      this._rearrange(e, n), this._trigger('change', e, this._uiHash());
                      break;
                    }
                  return (
                    this._contactContainers(e),
                    t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
                    this._trigger('sort', e, this._uiHash()),
                    (this.lastPositionAbs = this.positionAbs),
                    !1
                  );
                },
                _mouseStop: function (e, i) {
                  if (e) {
                    if (
                      (t.ui.ddmanager &&
                        !this.options.dropBehaviour &&
                        t.ui.ddmanager.drop(this, e),
                      this.options.revert)
                    ) {
                      var n = this,
                        s = this.placeholder.offset(),
                        r = this.options.axis,
                        a = {};
                      (r && 'x' !== r) ||
                        (a.left =
                          s.left -
                          this.offset.parent.left -
                          this.margins.left +
                          (this.offsetParent[0] === this.document[0].body
                            ? 0
                            : this.offsetParent[0].scrollLeft)),
                        (r && 'y' !== r) ||
                          (a.top =
                            s.top -
                            this.offset.parent.top -
                            this.margins.top +
                            (this.offsetParent[0] === this.document[0].body
                              ? 0
                              : this.offsetParent[0].scrollTop)),
                        (this.reverting = !0),
                        t(this.helper).animate(
                          a,
                          parseInt(this.options.revert, 10) || 500,
                          function () {
                            n._clear(e);
                          }
                        );
                    } else this._clear(e, i);
                    return !1;
                  }
                },
                cancel: function () {
                  if (this.dragging) {
                    this._mouseUp(new t.Event('mouseup', {target: null})),
                      'original' === this.options.helper
                        ? (this.currentItem.css(this._storedCSS),
                          this._removeClass(this.currentItem, 'ui-sortable-helper'))
                        : this.currentItem.show();
                    for (var e = this.containers.length - 1; e >= 0; e--)
                      this.containers[e]._trigger('deactivate', null, this._uiHash(this)),
                        this.containers[e].containerCache.over &&
                          (this.containers[e]._trigger('out', null, this._uiHash(this)),
                          (this.containers[e].containerCache.over = 0));
                  }
                  return (
                    this.placeholder &&
                      (this.placeholder[0].parentNode &&
                        this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
                      'original' !== this.options.helper &&
                        this.helper &&
                        this.helper[0].parentNode &&
                        this.helper.remove(),
                      t.extend(this, {
                        helper: null,
                        dragging: !1,
                        reverting: !1,
                        _noFinalSort: null,
                      }),
                      this.domPosition.prev
                        ? t(this.domPosition.prev).after(this.currentItem)
                        : t(this.domPosition.parent).prepend(this.currentItem)),
                    this
                  );
                },
                serialize: function (e) {
                  var i = this._getItemsAsjQuery(e && e.connected),
                    n = [];
                  return (
                    (e = e || {}),
                    t(i).each(function () {
                      var i = (t(e.item || this).attr(e.attribute || 'id') || '').match(
                        e.expression || /(.+)[\-=_](.+)/
                      );
                      i &&
                        n.push(
                          (e.key || i[1] + '[]') +
                            '=' +
                            (e.key && e.expression ? i[1] : i[2])
                        );
                    }),
                    !n.length && e.key && n.push(e.key + '='),
                    n.join('&')
                  );
                },
                toArray: function (e) {
                  var i = this._getItemsAsjQuery(e && e.connected),
                    n = [];
                  return (
                    (e = e || {}),
                    i.each(function () {
                      n.push(t(e.item || this).attr(e.attribute || 'id') || '');
                    }),
                    n
                  );
                },
                _intersectsWith: function (t) {
                  var e = this.positionAbs.left,
                    i = e + this.helperProportions.width,
                    n = this.positionAbs.top,
                    s = n + this.helperProportions.height,
                    r = t.left,
                    a = r + t.width,
                    o = t.top,
                    l = o + t.height,
                    c = this.offset.click.top,
                    u = this.offset.click.left,
                    d = 'x' === this.options.axis || (n + c > o && n + c < l),
                    h = 'y' === this.options.axis || (e + u > r && e + u < a),
                    p = d && h;
                  return 'pointer' === this.options.tolerance ||
                    this.options.forcePointerForContainers ||
                    ('pointer' !== this.options.tolerance &&
                      this.helperProportions[this.floating ? 'width' : 'height'] >
                        t[this.floating ? 'width' : 'height'])
                    ? p
                    : r < e + this.helperProportions.width / 2 &&
                        i - this.helperProportions.width / 2 < a &&
                        o < n + this.helperProportions.height / 2 &&
                        s - this.helperProportions.height / 2 < l;
                },
                _intersectsWithPointer: function (t) {
                  var e,
                    i,
                    n =
                      'x' === this.options.axis ||
                      this._isOverAxis(
                        this.positionAbs.top + this.offset.click.top,
                        t.top,
                        t.height
                      ),
                    s =
                      'y' === this.options.axis ||
                      this._isOverAxis(
                        this.positionAbs.left + this.offset.click.left,
                        t.left,
                        t.width
                      ),
                    r = n && s;
                  return (
                    !!r &&
                    ((e = this._getDragVerticalDirection()),
                    (i = this._getDragHorizontalDirection()),
                    this.floating
                      ? 'right' === i || 'down' === e
                        ? 2
                        : 1
                      : e && ('down' === e ? 2 : 1))
                  );
                },
                _intersectsWithSides: function (t) {
                  var e = this._isOverAxis(
                      this.positionAbs.top + this.offset.click.top,
                      t.top + t.height / 2,
                      t.height
                    ),
                    i = this._isOverAxis(
                      this.positionAbs.left + this.offset.click.left,
                      t.left + t.width / 2,
                      t.width
                    ),
                    n = this._getDragVerticalDirection(),
                    s = this._getDragHorizontalDirection();
                  return this.floating && s
                    ? ('right' === s && i) || ('left' === s && !i)
                    : n && (('down' === n && e) || ('up' === n && !e));
                },
                _getDragVerticalDirection: function () {
                  var t = this.positionAbs.top - this.lastPositionAbs.top;
                  return 0 !== t && (t > 0 ? 'down' : 'up');
                },
                _getDragHorizontalDirection: function () {
                  var t = this.positionAbs.left - this.lastPositionAbs.left;
                  return 0 !== t && (t > 0 ? 'right' : 'left');
                },
                refresh: function (t) {
                  return (
                    this._refreshItems(t),
                    this._setHandleClassName(),
                    this.refreshPositions(),
                    this
                  );
                },
                _connectWith: function () {
                  var t = this.options;
                  return t.connectWith.constructor === String
                    ? [t.connectWith]
                    : t.connectWith;
                },
                _getItemsAsjQuery: function (e) {
                  var i,
                    n,
                    s,
                    r,
                    a = [],
                    o = [],
                    l = this._connectWith();
                  if (l && e)
                    for (i = l.length - 1; i >= 0; i--)
                      for (s = t(l[i], this.document[0]), n = s.length - 1; n >= 0; n--)
                        (r = t.data(s[n], this.widgetFullName)) &&
                          r !== this &&
                          !r.options.disabled &&
                          o.push([
                            t.isFunction(r.options.items)
                              ? r.options.items.call(r.element)
                              : t(r.options.items, r.element)
                                  .not('.ui-sortable-helper')
                                  .not('.ui-sortable-placeholder'),
                            r,
                          ]);
                  function c() {
                    a.push(this);
                  }
                  for (
                    o.push([
                      t.isFunction(this.options.items)
                        ? this.options.items.call(this.element, null, {
                            options: this.options,
                            item: this.currentItem,
                          })
                        : t(this.options.items, this.element)
                            .not('.ui-sortable-helper')
                            .not('.ui-sortable-placeholder'),
                      this,
                    ]),
                      i = o.length - 1;
                    i >= 0;
                    i--
                  )
                    o[i][0].each(c);
                  return t(a);
                },
                _removeCurrentsFromItems: function () {
                  var e = this.currentItem.find(':data(' + this.widgetName + '-item)');
                  this.items = t.grep(this.items, function (t) {
                    for (var i = 0; i < e.length; i++) if (e[i] === t.item[0]) return !1;
                    return !0;
                  });
                },
                _refreshItems: function (e) {
                  (this.items = []), (this.containers = [this]);
                  var i,
                    n,
                    s,
                    r,
                    a,
                    o,
                    l,
                    c,
                    u = this.items,
                    d = [
                      [
                        t.isFunction(this.options.items)
                          ? this.options.items.call(this.element[0], e, {
                              item: this.currentItem,
                            })
                          : t(this.options.items, this.element),
                        this,
                      ],
                    ],
                    h = this._connectWith();
                  if (h && this.ready)
                    for (i = h.length - 1; i >= 0; i--)
                      for (s = t(h[i], this.document[0]), n = s.length - 1; n >= 0; n--)
                        (r = t.data(s[n], this.widgetFullName)) &&
                          r !== this &&
                          !r.options.disabled &&
                          (d.push([
                            t.isFunction(r.options.items)
                              ? r.options.items.call(r.element[0], e, {
                                  item: this.currentItem,
                                })
                              : t(r.options.items, r.element),
                            r,
                          ]),
                          this.containers.push(r));
                  for (i = d.length - 1; i >= 0; i--)
                    for (a = d[i][1], o = d[i][0], n = 0, c = o.length; n < c; n++)
                      (l = t(o[n])).data(this.widgetName + '-item', a),
                        u.push({
                          item: l,
                          instance: a,
                          width: 0,
                          height: 0,
                          left: 0,
                          top: 0,
                        });
                },
                refreshPositions: function (e) {
                  var i, n, s, r;
                  for (
                    this.floating =
                      !!this.items.length &&
                      ('x' === this.options.axis || this._isFloating(this.items[0].item)),
                      this.offsetParent &&
                        this.helper &&
                        (this.offset.parent = this._getParentOffset()),
                      i = this.items.length - 1;
                    i >= 0;
                    i--
                  )
                    ((n = this.items[i]).instance !== this.currentContainer &&
                      this.currentContainer &&
                      n.item[0] !== this.currentItem[0]) ||
                      ((s = this.options.toleranceElement
                        ? t(this.options.toleranceElement, n.item)
                        : n.item),
                      e || ((n.width = s.outerWidth()), (n.height = s.outerHeight())),
                      (r = s.offset()),
                      (n.left = r.left),
                      (n.top = r.top));
                  if (this.options.custom && this.options.custom.refreshContainers)
                    this.options.custom.refreshContainers.call(this);
                  else
                    for (i = this.containers.length - 1; i >= 0; i--)
                      (r = this.containers[i].element.offset()),
                        (this.containers[i].containerCache.left = r.left),
                        (this.containers[i].containerCache.top = r.top),
                        (this.containers[i].containerCache.width =
                          this.containers[i].element.outerWidth()),
                        (this.containers[i].containerCache.height =
                          this.containers[i].element.outerHeight());
                  return this;
                },
                _createPlaceholder: function (e) {
                  var i,
                    n = (e = e || this).options;
                  (n.placeholder && n.placeholder.constructor !== String) ||
                    ((i = n.placeholder),
                    (n.placeholder = {
                      element: function () {
                        var n = e.currentItem[0].nodeName.toLowerCase(),
                          s = t('<' + n + '>', e.document[0]);
                        return (
                          e
                            ._addClass(
                              s,
                              'ui-sortable-placeholder',
                              i || e.currentItem[0].className
                            )
                            ._removeClass(s, 'ui-sortable-helper'),
                          'tbody' === n
                            ? e._createTrPlaceholder(
                                e.currentItem.find('tr').eq(0),
                                t('<tr>', e.document[0]).appendTo(s)
                              )
                            : 'tr' === n
                            ? e._createTrPlaceholder(e.currentItem, s)
                            : 'img' === n && s.attr('src', e.currentItem.attr('src')),
                          i || s.css('visibility', 'hidden'),
                          s
                        );
                      },
                      update: function (t, s) {
                        (i && !n.forcePlaceholderSize) ||
                          (s.height() ||
                            s.height(
                              e.currentItem.innerHeight() -
                                parseInt(e.currentItem.css('paddingTop') || 0, 10) -
                                parseInt(e.currentItem.css('paddingBottom') || 0, 10)
                            ),
                          s.width() ||
                            s.width(
                              e.currentItem.innerWidth() -
                                parseInt(e.currentItem.css('paddingLeft') || 0, 10) -
                                parseInt(e.currentItem.css('paddingRight') || 0, 10)
                            ));
                      },
                    })),
                    (e.placeholder = t(
                      n.placeholder.element.call(e.element, e.currentItem)
                    )),
                    e.currentItem.after(e.placeholder),
                    n.placeholder.update(e, e.placeholder);
                },
                _createTrPlaceholder: function (e, i) {
                  var n = this;
                  e.children().each(function () {
                    t('<td>&#160;</td>', n.document[0])
                      .attr('colspan', t(this).attr('colspan') || 1)
                      .appendTo(i);
                  });
                },
                _contactContainers: function (e) {
                  var i,
                    n,
                    s,
                    r,
                    a,
                    o,
                    l,
                    c,
                    u,
                    d,
                    h = null,
                    p = null;
                  for (i = this.containers.length - 1; i >= 0; i--)
                    if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
                      if (this._intersectsWith(this.containers[i].containerCache)) {
                        if (h && t.contains(this.containers[i].element[0], h.element[0]))
                          continue;
                        (h = this.containers[i]), (p = i);
                      } else
                        this.containers[i].containerCache.over &&
                          (this.containers[i]._trigger('out', e, this._uiHash(this)),
                          (this.containers[i].containerCache.over = 0));
                  if (h)
                    if (1 === this.containers.length)
                      this.containers[p].containerCache.over ||
                        (this.containers[p]._trigger('over', e, this._uiHash(this)),
                        (this.containers[p].containerCache.over = 1));
                    else {
                      for (
                        s = 1e4,
                          r = null,
                          u = h.floating || this._isFloating(this.currentItem),
                          a = u ? 'left' : 'top',
                          o = u ? 'width' : 'height',
                          d = u ? 'pageX' : 'pageY',
                          n = this.items.length - 1;
                        n >= 0;
                        n--
                      )
                        t.contains(
                          this.containers[p].element[0],
                          this.items[n].item[0]
                        ) &&
                          this.items[n].item[0] !== this.currentItem[0] &&
                          ((l = this.items[n].item.offset()[a]),
                          (c = !1),
                          e[d] - l > this.items[n][o] / 2 && (c = !0),
                          Math.abs(e[d] - l) < s &&
                            ((s = Math.abs(e[d] - l)),
                            (r = this.items[n]),
                            (this.direction = c ? 'up' : 'down')));
                      if (!r && !this.options.dropOnEmpty) return;
                      if (this.currentContainer === this.containers[p])
                        return void (
                          this.currentContainer.containerCache.over ||
                          (this.containers[p]._trigger('over', e, this._uiHash()),
                          (this.currentContainer.containerCache.over = 1))
                        );
                      r
                        ? this._rearrange(e, r, null, !0)
                        : this._rearrange(e, null, this.containers[p].element, !0),
                        this._trigger('change', e, this._uiHash()),
                        this.containers[p]._trigger('change', e, this._uiHash(this)),
                        (this.currentContainer = this.containers[p]),
                        this.options.placeholder.update(
                          this.currentContainer,
                          this.placeholder
                        ),
                        this.containers[p]._trigger('over', e, this._uiHash(this)),
                        (this.containers[p].containerCache.over = 1);
                    }
                },
                _createHelper: function (e) {
                  var i = this.options,
                    n = t.isFunction(i.helper)
                      ? t(i.helper.apply(this.element[0], [e, this.currentItem]))
                      : 'clone' === i.helper
                      ? this.currentItem.clone()
                      : this.currentItem;
                  return (
                    n.parents('body').length ||
                      t(
                        'parent' !== i.appendTo
                          ? i.appendTo
                          : this.currentItem[0].parentNode
                      )[0].appendChild(n[0]),
                    n[0] === this.currentItem[0] &&
                      (this._storedCSS = {
                        width: this.currentItem[0].style.width,
                        height: this.currentItem[0].style.height,
                        position: this.currentItem.css('position'),
                        top: this.currentItem.css('top'),
                        left: this.currentItem.css('left'),
                      }),
                    (n[0].style.width && !i.forceHelperSize) ||
                      n.width(this.currentItem.width()),
                    (n[0].style.height && !i.forceHelperSize) ||
                      n.height(this.currentItem.height()),
                    n
                  );
                },
                _adjustOffsetFromHelper: function (e) {
                  'string' == typeof e && (e = e.split(' ')),
                    t.isArray(e) && (e = {left: +e[0], top: +e[1] || 0}),
                    'left' in e && (this.offset.click.left = e.left + this.margins.left),
                    'right' in e &&
                      (this.offset.click.left =
                        this.helperProportions.width - e.right + this.margins.left),
                    'top' in e && (this.offset.click.top = e.top + this.margins.top),
                    'bottom' in e &&
                      (this.offset.click.top =
                        this.helperProportions.height - e.bottom + this.margins.top);
                },
                _getParentOffset: function () {
                  this.offsetParent = this.helper.offsetParent();
                  var e = this.offsetParent.offset();
                  return (
                    'absolute' === this.cssPosition &&
                      this.scrollParent[0] !== this.document[0] &&
                      t.contains(this.scrollParent[0], this.offsetParent[0]) &&
                      ((e.left += this.scrollParent.scrollLeft()),
                      (e.top += this.scrollParent.scrollTop())),
                    (this.offsetParent[0] === this.document[0].body ||
                      (this.offsetParent[0].tagName &&
                        'html' === this.offsetParent[0].tagName.toLowerCase() &&
                        t.ui.ie)) &&
                      (e = {top: 0, left: 0}),
                    {
                      top:
                        e.top +
                        (parseInt(this.offsetParent.css('borderTopWidth'), 10) || 0),
                      left:
                        e.left +
                        (parseInt(this.offsetParent.css('borderLeftWidth'), 10) || 0),
                    }
                  );
                },
                _getRelativeOffset: function () {
                  if ('relative' === this.cssPosition) {
                    var t = this.currentItem.position();
                    return {
                      top:
                        t.top -
                        (parseInt(this.helper.css('top'), 10) || 0) +
                        this.scrollParent.scrollTop(),
                      left:
                        t.left -
                        (parseInt(this.helper.css('left'), 10) || 0) +
                        this.scrollParent.scrollLeft(),
                    };
                  }
                  return {top: 0, left: 0};
                },
                _cacheMargins: function () {
                  this.margins = {
                    left: parseInt(this.currentItem.css('marginLeft'), 10) || 0,
                    top: parseInt(this.currentItem.css('marginTop'), 10) || 0,
                  };
                },
                _cacheHelperProportions: function () {
                  this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight(),
                  };
                },
                _setContainment: function () {
                  var e,
                    i,
                    n,
                    s = this.options;
                  'parent' === s.containment &&
                    (s.containment = this.helper[0].parentNode),
                    ('document' !== s.containment && 'window' !== s.containment) ||
                      (this.containment = [
                        0 - this.offset.relative.left - this.offset.parent.left,
                        0 - this.offset.relative.top - this.offset.parent.top,
                        'document' === s.containment
                          ? this.document.width()
                          : this.window.width() -
                            this.helperProportions.width -
                            this.margins.left,
                        ('document' === s.containment
                          ? this.document.height() ||
                            document.body.parentNode.scrollHeight
                          : this.window.height() ||
                            this.document[0].body.parentNode.scrollHeight) -
                          this.helperProportions.height -
                          this.margins.top,
                      ]),
                    /^(document|window|parent)$/.test(s.containment) ||
                      ((e = t(s.containment)[0]),
                      (i = t(s.containment).offset()),
                      (n = 'hidden' !== t(e).css('overflow')),
                      (this.containment = [
                        i.left +
                          (parseInt(t(e).css('borderLeftWidth'), 10) || 0) +
                          (parseInt(t(e).css('paddingLeft'), 10) || 0) -
                          this.margins.left,
                        i.top +
                          (parseInt(t(e).css('borderTopWidth'), 10) || 0) +
                          (parseInt(t(e).css('paddingTop'), 10) || 0) -
                          this.margins.top,
                        i.left +
                          (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) -
                          (parseInt(t(e).css('borderLeftWidth'), 10) || 0) -
                          (parseInt(t(e).css('paddingRight'), 10) || 0) -
                          this.helperProportions.width -
                          this.margins.left,
                        i.top +
                          (n
                            ? Math.max(e.scrollHeight, e.offsetHeight)
                            : e.offsetHeight) -
                          (parseInt(t(e).css('borderTopWidth'), 10) || 0) -
                          (parseInt(t(e).css('paddingBottom'), 10) || 0) -
                          this.helperProportions.height -
                          this.margins.top,
                      ]));
                },
                _convertPositionTo: function (e, i) {
                  i || (i = this.position);
                  var n = 'absolute' === e ? 1 : -1,
                    s =
                      'absolute' !== this.cssPosition ||
                      (this.scrollParent[0] !== this.document[0] &&
                        t.contains(this.scrollParent[0], this.offsetParent[0]))
                        ? this.scrollParent
                        : this.offsetParent,
                    r = /(html|body)/i.test(s[0].tagName);
                  return {
                    top:
                      i.top +
                      this.offset.relative.top * n +
                      this.offset.parent.top * n -
                      ('fixed' === this.cssPosition
                        ? -this.scrollParent.scrollTop()
                        : r
                        ? 0
                        : s.scrollTop()) *
                        n,
                    left:
                      i.left +
                      this.offset.relative.left * n +
                      this.offset.parent.left * n -
                      ('fixed' === this.cssPosition
                        ? -this.scrollParent.scrollLeft()
                        : r
                        ? 0
                        : s.scrollLeft()) *
                        n,
                  };
                },
                _generatePosition: function (e) {
                  var i,
                    n,
                    s = this.options,
                    r = e.pageX,
                    a = e.pageY,
                    o =
                      'absolute' !== this.cssPosition ||
                      (this.scrollParent[0] !== this.document[0] &&
                        t.contains(this.scrollParent[0], this.offsetParent[0]))
                        ? this.scrollParent
                        : this.offsetParent,
                    l = /(html|body)/i.test(o[0].tagName);
                  return (
                    'relative' !== this.cssPosition ||
                      (this.scrollParent[0] !== this.document[0] &&
                        this.scrollParent[0] !== this.offsetParent[0]) ||
                      (this.offset.relative = this._getRelativeOffset()),
                    this.originalPosition &&
                      (this.containment &&
                        (e.pageX - this.offset.click.left < this.containment[0] &&
                          (r = this.containment[0] + this.offset.click.left),
                        e.pageY - this.offset.click.top < this.containment[1] &&
                          (a = this.containment[1] + this.offset.click.top),
                        e.pageX - this.offset.click.left > this.containment[2] &&
                          (r = this.containment[2] + this.offset.click.left),
                        e.pageY - this.offset.click.top > this.containment[3] &&
                          (a = this.containment[3] + this.offset.click.top)),
                      s.grid &&
                        ((i =
                          this.originalPageY +
                          Math.round((a - this.originalPageY) / s.grid[1]) * s.grid[1]),
                        (a = this.containment
                          ? i - this.offset.click.top >= this.containment[1] &&
                            i - this.offset.click.top <= this.containment[3]
                            ? i
                            : i - this.offset.click.top >= this.containment[1]
                            ? i - s.grid[1]
                            : i + s.grid[1]
                          : i),
                        (n =
                          this.originalPageX +
                          Math.round((r - this.originalPageX) / s.grid[0]) * s.grid[0]),
                        (r = this.containment
                          ? n - this.offset.click.left >= this.containment[0] &&
                            n - this.offset.click.left <= this.containment[2]
                            ? n
                            : n - this.offset.click.left >= this.containment[0]
                            ? n - s.grid[0]
                            : n + s.grid[0]
                          : n))),
                    {
                      top:
                        a -
                        this.offset.click.top -
                        this.offset.relative.top -
                        this.offset.parent.top +
                        ('fixed' === this.cssPosition
                          ? -this.scrollParent.scrollTop()
                          : l
                          ? 0
                          : o.scrollTop()),
                      left:
                        r -
                        this.offset.click.left -
                        this.offset.relative.left -
                        this.offset.parent.left +
                        ('fixed' === this.cssPosition
                          ? -this.scrollParent.scrollLeft()
                          : l
                          ? 0
                          : o.scrollLeft()),
                    }
                  );
                },
                _rearrange: function (t, e, i, n) {
                  i
                    ? i[0].appendChild(this.placeholder[0])
                    : e.item[0].parentNode.insertBefore(
                        this.placeholder[0],
                        'down' === this.direction ? e.item[0] : e.item[0].nextSibling
                      ),
                    (this.counter = this.counter ? ++this.counter : 1);
                  var s = this.counter;
                  this._delay(function () {
                    s === this.counter && this.refreshPositions(!n);
                  });
                },
                _clear: function (t, e) {
                  this.reverting = !1;
                  var i,
                    n = [];
                  if (
                    (!this._noFinalSort &&
                      this.currentItem.parent().length &&
                      this.placeholder.before(this.currentItem),
                    (this._noFinalSort = null),
                    this.helper[0] === this.currentItem[0])
                  ) {
                    for (i in this._storedCSS)
                      ('auto' !== this._storedCSS[i] &&
                        'static' !== this._storedCSS[i]) ||
                        (this._storedCSS[i] = '');
                    this.currentItem.css(this._storedCSS),
                      this._removeClass(this.currentItem, 'ui-sortable-helper');
                  } else this.currentItem.show();
                  function s(t, e, i) {
                    return function (n) {
                      i._trigger(t, n, e._uiHash(e));
                    };
                  }
                  for (
                    this.fromOutside &&
                      !e &&
                      n.push(function (t) {
                        this._trigger('receive', t, this._uiHash(this.fromOutside));
                      }),
                      (!this.fromOutside &&
                        this.domPosition.prev ===
                          this.currentItem.prev().not('.ui-sortable-helper')[0] &&
                        this.domPosition.parent === this.currentItem.parent()[0]) ||
                        e ||
                        n.push(function (t) {
                          this._trigger('update', t, this._uiHash());
                        }),
                      this !== this.currentContainer &&
                        (e ||
                          (n.push(function (t) {
                            this._trigger('remove', t, this._uiHash());
                          }),
                          n.push(
                            function (t) {
                              return function (e) {
                                t._trigger('receive', e, this._uiHash(this));
                              };
                            }.call(this, this.currentContainer)
                          ),
                          n.push(
                            function (t) {
                              return function (e) {
                                t._trigger('update', e, this._uiHash(this));
                              };
                            }.call(this, this.currentContainer)
                          ))),
                      i = this.containers.length - 1;
                    i >= 0;
                    i--
                  )
                    e || n.push(s('deactivate', this, this.containers[i])),
                      this.containers[i].containerCache.over &&
                        (n.push(s('out', this, this.containers[i])),
                        (this.containers[i].containerCache.over = 0));
                  if (
                    (this.storedCursor &&
                      (this.document.find('body').css('cursor', this.storedCursor),
                      this.storedStylesheet.remove()),
                    this._storedOpacity &&
                      this.helper.css('opacity', this._storedOpacity),
                    this._storedZIndex &&
                      this.helper.css(
                        'zIndex',
                        'auto' === this._storedZIndex ? '' : this._storedZIndex
                      ),
                    (this.dragging = !1),
                    e || this._trigger('beforeStop', t, this._uiHash()),
                    this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
                    this.cancelHelperRemoval ||
                      (this.helper[0] !== this.currentItem[0] && this.helper.remove(),
                      (this.helper = null)),
                    !e)
                  ) {
                    for (i = 0; i < n.length; i++) n[i].call(this, t);
                    this._trigger('stop', t, this._uiHash());
                  }
                  return (this.fromOutside = !1), !this.cancelHelperRemoval;
                },
                _trigger: function () {
                  !1 === t.Widget.prototype._trigger.apply(this, arguments) &&
                    this.cancel();
                },
                _uiHash: function (e) {
                  var i = e || this;
                  return {
                    helper: i.helper,
                    placeholder: i.placeholder || t([]),
                    position: i.position,
                    originalPosition: i.originalPosition,
                    offset: i.positionAbs,
                    item: i.currentItem,
                    sender: e ? e.element : null,
                  };
                },
              });
            })
              ? n.apply(e, s)
              : n) || (t.exports = r);
    },
    function (t, e) {
      jQuery.fn.serializeObject = function () {
        var t = {};
        return (
          this.find(
            ":input:not(:button):not(:submit):not(:radio):not('select[multiple]')"
          ).each(function () {
            '' !== this.name &&
              (null === this.value && (this.value = ''),
              (t[this.name] = this.value.match(/^(tru|fals)e$/i)
                ? 'true' == this.value.toLowerCase()
                : this.value));
          }),
          this.find('input:radio:checked').each(function () {
            t[this.name] = this.value;
          }),
          this.find('select[multiple]').each(function () {
            var e = jQuery(this),
              i = e.val();
            e.data('aui-ss')
              ? (t[this.name] = i ? i[0] : '')
              : (t[this.name] = null !== i ? i : []);
          }),
          t
        );
      };
    },
    function (t, e, i) {},
    function (t, e) {
      !(function (t) {
        function e(t) {
          (this.num = 0), (this.timer = t > 0 && t);
        }
        function i(i) {
          if (t.isPlainObject(i.data) || t.isArray(i.data) || 'string' == typeof i.data) {
            var s = i.handler,
              r = {timer: 700, combo: []};
            !(function (e) {
              'string' == typeof e
                ? (r.combo = [e])
                : t.isArray(e)
                ? (r.combo = e)
                : t.extend(r, e),
                (r.combo = t.map(r.combo, function (t) {
                  return t.toLowerCase();
                }));
            })(i.data),
              (i.index = new e(r.timer)),
              (i.handler = function (e) {
                if (
                  this === e.target ||
                  (!/textarea|select|input/i.test(e.target.nodeName) &&
                    'true' !== t(e.target).prop('contenteditable'))
                ) {
                  var a = 'keypress' !== e.type ? t.hotkeys.specialKeys[e.which] : null,
                    o = String.fromCharCode(e.which).toLowerCase(),
                    l = '',
                    c = {};
                  e.altKey && 'alt' !== a && (l += 'alt+'),
                    e.ctrlKey && 'ctrl' !== a && (l += 'ctrl+'),
                    e.metaKey && !e.ctrlKey && 'meta' !== a && (l += 'meta+'),
                    e.shiftKey && 'shift' !== a && (l += 'shift+'),
                    e.metaKey && '[' === o && (o = null),
                    a && (c[l + a] = !0),
                    o && (c[l + o] = !0),
                    /shift+/.test(l) &&
                      (c[l.replace('shift+', '') + t.hotkeys.shiftNums[a || o]] = !0);
                  var u = i.index,
                    d = r.combo;
                  if (n(d[u.val()], c)) {
                    if (u.val() === d.length - 1)
                      return u.reset(), s.apply(this, arguments);
                    u.inc();
                  } else u.reset(), n(d[0], c) && u.inc();
                }
              });
          }
        }
        function n(t, e) {
          for (var i = t.split(' '), n = 0, s = i.length; n < s; n++)
            if (e[i[n]]) return !0;
          return !1;
        }
        (t.hotkeys = {
          version: '0.8',
          specialKeys: {
            8: 'backspace',
            9: 'tab',
            13: 'return',
            16: 'shift',
            17: 'ctrl',
            18: 'alt',
            19: 'pause',
            20: 'capslock',
            27: 'esc',
            32: 'space',
            33: 'pageup',
            34: 'pagedown',
            35: 'end',
            36: 'home',
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down',
            45: 'insert',
            46: 'del',
            91: 'meta',
            96: '0',
            97: '1',
            98: '2',
            99: '3',
            100: '4',
            101: '5',
            102: '6',
            103: '7',
            104: '8',
            105: '9',
            106: '*',
            107: '+',
            109: '-',
            110: '.',
            111: '/',
            112: 'f1',
            113: 'f2',
            114: 'f3',
            115: 'f4',
            116: 'f5',
            117: 'f6',
            118: 'f7',
            119: 'f8',
            120: 'f9',
            121: 'f10',
            122: 'f11',
            123: 'f12',
            144: 'numlock',
            145: 'scroll',
            188: ',',
            190: '.',
            191: '/',
            224: 'meta',
            219: '[',
            221: ']',
          },
          keypressKeys: ['<', '>', '?'],
          shiftNums: {
            '`': '~',
            1: '!',
            2: '@',
            3: '#',
            4: '$',
            5: '%',
            6: '^',
            7: '&',
            8: '*',
            9: '(',
            0: ')',
            '-': '_',
            '=': '+',
            ';': ':',
            "'": '"',
            ',': '<',
            '.': '>',
            '/': '?',
            '\\': '|',
          },
        }),
          t.each(t.hotkeys.keypressKeys, function (e, i) {
            t.hotkeys.shiftNums[i] = i;
          }),
          (e.prototype.val = function () {
            return this.num;
          }),
          (e.prototype.inc = function () {
            this.timer &&
              (clearTimeout(this.timeout),
              (this.timeout = setTimeout(t.proxy(e.prototype.reset, this), this.timer))),
              this.num++;
          }),
          (e.prototype.reset = function () {
            this.timer && clearTimeout(this.timeout), (this.num = 0);
          }),
          t.each(['keydown', 'keyup', 'keypress'], function () {
            t.event.special[this] = {add: i};
          });
      })(jQuery);
    },
    function (t, e) {
      jQuery.fn.moveTo = function (t) {
        var e,
          i = jQuery.extend({transition: !1, scrollOffset: 35}, t),
          n = this,
          s = n.offset().top;
        if (
          (jQuery(window).scrollTop() + jQuery(window).height() - this.outerHeight() <
            s ||
            jQuery(window).scrollTop() + i.scrollOffset > s) &&
          jQuery(window).height() > i.scrollOffset
        ) {
          if (
            ((e =
              jQuery(window).scrollTop() + i.scrollOffset > s
                ? s - (jQuery(window).height() - this.outerHeight()) + i.scrollOffset
                : s - i.scrollOffset),
            !jQuery.fn.moveTo.animating && i.transition)
          )
            return (
              jQuery(document).trigger('moveToStarted', this),
              (jQuery.fn.moveTo.animating = !0),
              jQuery('html,body').animate({scrollTop: e}, 1e3, function () {
                jQuery(document).trigger('moveToFinished', n),
                  delete jQuery.fn.moveTo.animating;
              }),
              this
            );
          var r = jQuery('html, body');
          return (
            r.is(':animated') && (r.stop(), delete jQuery.fn.moveTo.animating),
            jQuery(document).trigger('moveToStarted'),
            jQuery(window).scrollTop(e),
            setTimeout(function () {
              jQuery(document).trigger('moveToFinished', n);
            }, 100),
            this
          );
        }
        return jQuery(document).trigger('moveToFinished', this), this;
      };
    },
    function (t, e, i) {
      'use strict';
      i.r(e),
        i.d(e, 'format', function () {
          return m;
        }),
        i.d(e, 'version', function () {
          return v;
        }),
        i.d(e, 'bind', function () {
          return w;
        }),
        i.d(e, 'unbind', function () {
          return _;
        }),
        i.d(e, 'trigger', function () {
          return x;
        }),
        i.d(e, '$', function () {
          return $t;
        }),
        i.d(e, 'toInit', function () {
          return Ft;
        }),
        i.d(e, 'log', function () {
          return h;
        }),
        i.d(e, 'error', function () {
          return f;
        }),
        i.d(e, 'warn', function () {
          return p;
        }),
        i.d(e, 'banner', function () {
          return Vt;
        }),
        i.d(e, 'dialog2', function () {
          return ue;
        }),
        i.d(e, 'DropdownEl', function () {
          return yn;
        }),
        i.d(e, 'ItemLinkEl', function () {
          return gn;
        }),
        i.d(e, 'ItemRadioEl', function () {
          return vn;
        }),
        i.d(e, 'ItemCheckboxEl', function () {
          return mn;
        }),
        i.d(e, 'SectionEl', function () {
          return bn;
        }),
        i.d(e, 'flag', function () {
          return Fn;
        }),
        i.d(e, 'CheckboxMultiselectEl', function () {
          return Qn;
        }),
        i.d(e, 'FancyFileInput', function () {
          return Zn;
        }),
        i.d(e, 'LabelEl', function () {
          return ns;
        }),
        i.d(e, 'SelectEl', function () {
          return Hs;
        }),
        i.d(e, 'ToggleEl', function () {
          return tr;
        }),
        i.d(e, 'InlineDialogEl', function () {
          return xr;
        }),
        i.d(e, 'MessageEl', function () {
          return On;
        }),
        i.d(e, 'navigation', function () {
          return Tr;
        }),
        i.d(e, 'NavigationEl', function () {
          return Er;
        }),
        i.d(e, 'progressBars', function () {
          return Wr;
        }),
        i.d(e, 'ProgressBarEl', function () {
          return Hr;
        }),
        i.d(e, 'SpinnerEl', function () {
          return Zt;
        }),
        i.d(e, 'TabContainerEl', function () {
          return ha;
        }),
        i.d(e, 'TabPaneEl', function () {
          return fa;
        }),
        i.d(e, 'TabItemEl', function () {
          return pa;
        }),
        i.d(e, 'I18n', function () {}),
        i.d(e, 'Header', function () {
          return vo;
        }),
        i.d(e, 'DatePicker', function () {
          return To;
        }),
        i.d(e, 'RestfulTable', function () {
          return Yo;
        }),
        i.d(e, 'sidebar', function () {
          return bl;
        }),
        i.d(e, 'whenIType', function () {
          return Sl;
        }),
        i.d(e, 'FocusManager', function () {
          return Al;
        }),
        i.d(e, 'InlineDialog2', function () {
          return Il;
        }),
        i.d(e, 'LayerManager', function () {
          return Ol;
        }),
        i.d(e, 'ProgressiveDataSet', function () {
          return Nl;
        }),
        i.d(e, 'clone', function () {
          return Ml;
        }),
        i.d(e, 'debounce', function () {
          return Pl;
        }),
        i.d(e, 'debounceImmediate', function () {
          return Ll;
        }),
        i.d(e, 'dim', function () {
          return Rl;
        }),
        i.d(e, 'escapeHtml', function () {
          return $l;
        }),
        i.d(e, 'formValidation', function () {
          return jl;
        }),
        i.d(e, 'id', function () {
          return Fl;
        }),
        i.d(e, 'isClipped', function () {
          return Hl;
        }),
        i.d(e, 'keyCode', function () {
          return Bl;
        }),
        i.d(e, 'layer', function () {
          return Wl;
        }),
        i.d(e, 'messages', function () {
          return Ul;
        }),
        i.d(e, 'populateParameters', function () {
          return Vl;
        }),
        i.d(e, 'params', function () {
          return zl;
        }),
        i.d(e, 'responsiveheader', function () {
          return ql;
        }),
        i.d(e, 'select', function () {
          return Yl;
        }),
        i.d(e, 'tablessortable', function () {
          return Kl;
        }),
        i.d(e, 'tabs', function () {
          return Jl;
        }),
        i.d(e, 'undim', function () {
          return Gl;
        }),
        i.d(e, '_addID', function () {
          return Ql;
        }),
        i.d(e, 'contextPath', function () {
          return Xl;
        });
      i(21),
        i(22),
        i(23),
        i(24),
        i(25),
        i(26),
        i(27),
        i(28),
        i(29),
        i(30),
        i(31),
        i(32),
        i(33),
        i(34),
        i(35),
        i(36),
        i(37);
      var n = i(1),
        s = i.n(n),
        r = window.jQuery || window.Zepto || s.a;
      const a = 'AJS';
      function o(t, e) {
        return 'object' != typeof window[a] && (window[a] = {}), (window[a][t] = e);
      }
      var l = i(5),
        c = i.n(l);
      function u(t, e) {
        var i = r(t);
        return (
          void 0 === e && (e = !0),
          i.each(function () {
            this.disabled = !e;
          })
        );
      }
      c()('checkbox', {
        type: c.a.type.CLASSNAME,
        attached: function (t) {
          s()('input[type=checkbox]', t).each(function (t, e) {
            s()('<span class="aui-form-glyph"></span>').insertAfter(e);
          });
        },
        detached: function (t) {
          s()('.aui-form-glyph', t).remove();
        },
      }),
        c()('radio', {
          type: c.a.type.CLASSNAME,
          attached: function (t) {
            s()('input[type=radio]', t).each(function (t, e) {
              s()('<span class="aui-form-glyph"></span>').insertAfter(e);
            });
          },
          detached: function (t) {
            s()('.aui-form-glyph', t).remove();
          },
        }),
        o('enable', u),
        o('inlineHelp', function () {
          r(document).on('click', '.icon-inline-help', function () {
            var t = r(this).siblings('.field-help');
            t.hasClass('hidden') ? t.removeClass('hidden') : t.addClass('hidden');
          });
        });
      i(41), i(42);
      function d(t) {
        return function () {
          'undefined' != typeof console &&
            console[t] &&
            Function.prototype.apply.call(console[t], console, arguments);
        };
      }
      var h = d('log'),
        p = d('warn'),
        f = d('error');
      function g(t) {
        var e = /'(?!')/g,
          i = /^\d+$/,
          n = /^(\d+),number$/,
          s = /^(\d+),choice,(.+)/,
          r = /^(\d+)([#<])(.+)/,
          a = function (e, a) {
            var o,
              l = '';
            if ((o = e.match(i))) l = a.length > ++e ? a[e] : '';
            else if ((o = e.match(n))) l = a.length > ++o[1] ? a[o[1]] : '';
            else if ((o = e.match(s))) {
              var c = a.length > ++o[1] ? a[o[1]] : null;
              if (null !== c) {
                for (
                  var u = o[2].split('|'), d = !1, h = null, p = 0;
                  p < u.length;
                  p++
                ) {
                  var m = u[p].match(r);
                  if (null != m) {
                    var v = parseInt(m[1], 10);
                    if (c < v) {
                      if (h) {
                        l = h;
                        break;
                      }
                      l = m[3];
                      break;
                    }
                    if (c == v && '#' == m[2]) {
                      l = m[3];
                      break;
                    }
                    p == u.length - 1 && (l = m[3]), (h = m[3]);
                  } else d = !0;
                }
                d && f('The format "' + e + '" from message "' + t + '" is invalid.');
                var b = [l].concat(Array.prototype.slice.call(a, 1));
                l = g.apply(null, b);
              }
            }
            return l;
          },
          o = function (t) {
            for (var e = !1, i = -1, n = 0, s = 0; s < t.length; s++) {
              var r = t.charAt(s);
              if (("'" == r && (e = !e), !e))
                if ('{' === r) 0 === n && (i = s), n++;
                else if ('}' === r && n > 0 && 0 === --n) {
                  var a = [];
                  return (
                    a.push(t.substring(0, s + 1)),
                    a.push(t.substring(0, i)),
                    a.push(t.substring(i + 1, s)),
                    a
                  );
                }
            }
            return null;
          };
        return function (t) {
          var i = arguments,
            n = '';
          if (!t) return n;
          for (var s = o(t); s; )
            (t = t.substring(s[0].length)),
              (n += s[1].replace(e, '')),
              (n += a(s[2], i)),
              (s = o(t));
          return (n += t.replace(e, ''));
        }.apply(null, arguments);
      }
      o('error', f), o('log', h), o('warn', p), o('format', g);
      var m = g;
      o('version', '9.1.5');
      var v = '9.1.5';
      const b = !1,
        y = r(window);
      function w(t, e, i) {
        try {
          return 'function' == typeof i ? y.on(t, b, e, i) : y.on(t, b, e);
        } catch (t) {
          h('error while binding: ', t.message);
        }
      }
      function _(t, e) {
        try {
          return y.off(t, e);
        } catch (t) {
          h('error while unbinding: ', t.message);
        }
      }
      function x(t, e) {
        try {
          return y.trigger(t, e);
        } catch (t) {
          h('error while triggering: ' + t.message);
        }
      }
      o('bind', w), o('trigger', x), o('unbind', _);
      const k = {
          '<': '&lt;',
          '>': '&gt;',
          '&': '&amp;',
          '"': '&quot;',
          "'": '&#39;',
          '`': '&#96;',
        },
        C = new RegExp('['.concat(Object.keys(k).join(''), ']'), 'g');
      function E(t) {
        return t.replace(C, t => k[t]);
      }
      o('escapeHtml', E);
      var T = E,
        D = Object.prototype.hasOwnProperty,
        S = [];
      function A() {
        'undefined' != typeof console &&
          console.warn &&
          Function.prototype.apply.call(console.warn, console, arguments);
      }
      function I(t, e) {
        if ('function' == typeof t) return t;
        var i = !1;
        return (
          (e = e || {}),
          function (n) {
            var s =
              (function (t) {
                var e = new Error(),
                  i = e.stack || e.stacktrace,
                  n = (i && i.replace(/^Error\n/, '')) || '';
                return n ? (n = n.split('\n'))[t + 2] : n;
              })(n || 1) || '';
            if (!i || -1 === S.indexOf(s)) {
              S.push(s), (i = !0);
              var r =
                'DEPRECATED ' +
                (e.deprecationType + ' ' || !1) +
                '- ' +
                (function (t) {
                  return (t += '') ? t.charAt(0).toUpperCase() + t.substring(1) : '';
                })(t) +
                ' has been deprecated' +
                (e.sinceVersion ? ' since ' + e.sinceVersion : '') +
                ' and will be removed in ' +
                (e.removeInVersion || 'a future release') +
                '.';
              e.alternativeName && (r += ' Use ' + e.alternativeName + ' instead. '),
                e.extraInfo && (r += ' ' + e.extraInfo),
                (s =
                  '' === s
                    ? ' \n No stack trace of the deprecated usage is available in your current browser.'
                    : ' \n ' + s),
                e.extraObject ? A((r += '\n'), e.extraObject, s) : A(r, s);
            }
          }
        );
      }
      function O(t, e) {
        var i = t.options.displayName;
        i = i ? ' (' + i + ')' : '';
        var n = r.extend({deprecationType: 'CSS', extraObject: e}, t.options);
        I("'" + t.selector + "' pattern" + i, n)();
      }
      function N(t, e, i) {
        (i = i || {}).deprecationType = i.deprecationType || 'JS';
        var n = I(e || t.name || 'this function', i);
        return function () {
          return n(), t.apply(this, arguments);
        };
      }
      function M(t, e, i) {
        (i = i || {}).deprecationType = i.deprecationType || 'JS';
        var n = N(t, e, i);
        return (n.prototype = t.prototype), r.extend(n, t), n;
      }
      var P = !1;
      try {
        Object.defineProperty &&
          (Object.defineProperty({}, 'blam', {get: function () {}, set: function () {}}),
          (P = !0));
      } catch (t) {}
      function L(t, e, i) {
        if ('function' == typeof t[e]) {
          (i = i || {}).deprecationType = i.deprecationType || 'JS';
          var n = i.displayName || e;
          t[e] = N(t[e], n, i);
        } else
          !(function (t, e, i) {
            if (P) {
              var n = t[e];
              (i = i || {}).deprecationType = i.deprecationType || 'JS';
              var s = I(i.displayName || e, i);
              Object.defineProperty(t, e, {
                get: function () {
                  return s(), n;
                },
                set: function (t) {
                  return (n = t), s(), t;
                },
              });
            }
          })(t, e, i);
      }
      function R(t) {
        return function (e) {
          for (
            var i = {selector: e, options: t || {}},
              n = document.querySelectorAll(e),
              s = 0;
            s < n.length;
            s++
          )
            O(i, n[s]);
          !(function (t) {
            if ((j.push(t), !F)) {
              (F = new MutationObserver(function (t) {
                t.forEach(function (t) {
                  for (var e = t.addedNodes, i = 0; i < e.length; i++) {
                    var n = e[i];
                    1 === n.nodeType && j.forEach($(n));
                  }
                });
              })).observe(document, {childList: !0, subtree: !0});
            }
          })(i);
        };
      }
      function $(t) {
        return function (e) {
          (function (t, e) {
            return (
              t.matches ||
              t.msMatchesSelector ||
              t.webkitMatchesSelector ||
              t.mozMatchesSelector ||
              t.oMatchesSelector
            ).call(t, e);
          })(t, e.selector) && O(e, t);
        };
      }
      const j = [];
      let F;
      function H(t) {
        (t = t.jquery ? t[0] : t),
          window.getComputedStyle(t, null).getPropertyValue('left');
      }
      var B;
      o('deprecate', {
        fn: N,
        construct: M,
        css: function (t, e) {
          'string' == typeof t && (t = [t]), t.forEach(R(e));
        },
        prop: L,
        obj: function (t, e, i) {
          for (var n in ((i = i || {}), t))
            D.call(t, n) &&
              ((i.deprecationType = i.deprecationType || 'JS'),
              (i.displayName = e + n),
              (i.alternativeName =
                i.alternativeNamePrefix && i.alternativeNamePrefix + n),
              L(t, n, r.extend({}, i)));
        },
        propertyDeprecationSupported: P,
        getMessageLogger: I,
      });
      var W = [];
      function U(t, e) {
        Array.prototype.forEach.call(document.body.children, function (t) {
          (function (t) {
            return t.hasAttribute('aria-hidden');
          })(t) ||
            (function (t) {
              return t.classList.contains('aui-layer');
            })(t) ||
            (t.setAttribute('aria-hidden', 'true'), W.push(t));
        }),
          B || (B = document.body),
          !0 === t && z();
        var i = !!U.$dim && !U.$dim[0].hasAttribute('hidden');
        return (
          U.$dim && (U.$dim.remove(), (U.$dim = null)),
          (U.$dim = r('<div aria-hidden="true"></div>').addClass('aui-blanket')),
          U.$dim.attr('tabindex', '0'),
          U.$dim.appendTo(document.body),
          i ||
            (H(U.$dim),
            (U.cachedOverflow = {
              overflow: B.style.overflow,
              overflowX: B.style.overflowX,
              overflowY: B.style.overflowY,
            }),
            (B.style.overflowX = 'hidden'),
            (B.style.overflowY = 'hidden'),
            (B.style.overflow = 'hidden')),
          U.$dim.removeAttr('hidden'),
          e && U.$dim.css({zIndex: e}),
          U.$dim
        );
      }
      function V() {
        W.forEach(function (t) {
          t.removeAttribute('aria-hidden');
        }),
          (W = []),
          U.$dim &&
            (U.$dim[0].setAttribute('hidden', ''),
            B &&
              ((B.style.overflow = U.cachedOverflow.overflow),
              (B.style.overflowX = U.cachedOverflow.overflowX),
              (B.style.overflowY = U.cachedOverflow.overflowY)));
      }
      var z = I('useShim', {
        extraInfo: 'useShim has no alternative as it is now calculated by dim().',
      });
      o('dim', U), o('undim', V);
      var q = {
        ALT: 18,
        BACKSPACE: 8,
        CAPS_LOCK: 20,
        COMMA: 188,
        COMMAND: 91,
        COMMAND_LEFT: 91,
        COMMAND_RIGHT: 93,
        LEFT_SQUARE_BRACKET: 91,
        CONTROL: 17,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        INSERT: 45,
        LEFT: 37,
        MENU: 93,
        NUMPAD_ADD: 107,
        NUMPAD_DECIMAL: 110,
        NUMPAD_DIVIDE: 111,
        NUMPAD_ENTER: 108,
        NUMPAD_MULTIPLY: 106,
        NUMPAD_SUBTRACT: 109,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SHIFT: 16,
        SPACE: 32,
        TAB: 9,
        UP: 38,
        WINDOWS: 91,
      };
      o('keyCode', q);
      var Y = q,
        K = function (t, e) {
          window.define &&
            (0, window.define)(t, [], function () {
              return e;
            });
          return e;
        };
      var J = c.a.noConflict();
      var G = function (t) {
        return {
          set: function (e, i) {
            void 0 === t._state && (t._state = {}), (t._state[e] = i);
          },
          get: function (e) {
            if (t._state) return t._state[e];
          },
        };
      };
      function Q(t) {
        return G(t).get('last-trigger') || et(t)[0];
      }
      function X(t, e) {
        var i = e && e.nodeType && 1 === e.nodeType;
        return G(t).set('last-trigger', !!i && e);
      }
      function Z(t, e) {
        var i = Q(t);
        i && e(i);
      }
      function tt(t, e) {
        return Array.prototype.forEach.call(et(t), e);
      }
      function et(t) {
        const e = window.frames,
          i = '[aria-controls="'.concat(t.id, '"]');
        let n = [],
          s = !1;
        for (let t = 0; t < e.length; t++)
          try {
            let r = e[t].document.querySelectorAll(i);
            n = n.concat(Array.prototype.slice.apply(r));
          } catch (t) {
            s = !0;
          }
        const r = document.querySelectorAll(i),
          a = Array.prototype.slice.apply(r).concat(n);
        return (
          0 === a.length &&
            !0 === s &&
            p(
              [
                'No triggers found for element ('.concat(
                  t.id,
                  ') in iframes from the same origin.'
                ),
                'However some iframes in this document are cross-origin.',
                'The trigger-element relations crossing the origin boundary are not supported.',
              ].join(' ')
            ),
          a
        );
      }
      function it(t) {
        return document.getElementById(t.getAttribute('aria-controls'));
      }
      function nt(t) {
        return 'true' !== t.getAttribute('aria-disabled');
      }
      function st(t, e) {
        if (nt(t)) {
          var i = it(t);
          i && i.message && i.message(e);
        }
      }
      const rt = {
        click(t, e) {
          (function (t, e) {
            var i = r(e).closest('a[href]', t);
            return !!i.length && i[0] !== t;
          })(t, e.target) || (st(t, e), e.preventDefault());
        },
        keydown(t, e) {
          const i = e.data;
          (i !== Y.ENTER && i !== Y.SPACE) ||
            (e.preventDefault(), (e.type = 'click'), rt.click(t, e));
        },
        mouseenter(t, e) {
          st(t, e);
        },
        mouseleave(t, e) {
          st(t, e);
        },
        focus(t, e) {
          st(t, e);
        },
        blur(t, e) {
          (function (t, e) {
            let i = e.relatedTarget;
            return i || (i = document.activeElement), r(it(t)).find(i).length > 0;
          })(t, e) || st(t, e);
        },
      };
      Object.keys(rt).forEach(function (t) {
        const e = rt[t];
        r(document).on(''.concat(t, '.aui-trigger'), '[data-aui-trigger]', function (i) {
          e(
            i.currentTarget,
            (function (t, e) {
              const {target: i, currentTarget: n, relatedTarget: s} = t,
                {keyCode: r, which: a} = t;
              return {
                type: e,
                data: 'keydown' === e ? a || r : void 0,
                target: i,
                currentTarget: n,
                relatedTarget: s,
                preventDefault: () => t.preventDefault(),
              };
            })(i, t)
          );
        });
      }),
        J('data-aui-trigger', {
          type: J.type.ATTRIBUTE,
          prototype: {
            disable: function () {
              this.setAttribute('aria-disabled', 'true');
            },
            enable: function () {
              this.setAttribute('aria-disabled', 'false');
            },
            isEnabled: function () {
              return nt(this);
            },
          },
        }),
        K('aui/trigger'),
        (function () {
          function t(t) {
            return 'visible' === r.css(t, 'visibility') && r(t).is(':visible');
          }
          function e(e, i) {
            var n = e.nodeName.toLowerCase();
            if ('aui-select' === n) return !0;
            if ('area' === n) {
              var s = e.parentNode,
                a = s.name,
                o = r('img[usemap=#' + a + ']').get();
              return !(!e.href || !a || 'map' !== s.nodeName.toLowerCase()) && o && t(o);
            }
            var l = /input|select|textarea|button|object|iframe/.test(n),
              c = 'a' === n,
              u = e.href || i;
            return (l ? !e.disabled : c ? u : i) && t(e);
          }
          r.extend(r.expr.pseudos, {
            'aui-focusable': t => e(t, !isNaN(r.attr(t, 'tabindex'))),
            'aui-tabbable': function (t) {
              var i = r.attr(t, 'tabindex'),
                n = isNaN(i);
              return (n || i >= 0) && e(t, !n);
            },
          });
        })();
      var at = '_aui-focus-restore';
      function ot(t) {
        return t.is('.aui-dialog2');
      }
      function lt() {
        (this._focusTrapStack = []), this._handler;
      }
      let ct;
      function ut() {
        return ct || (ct = new lt()), ct;
      }
      (lt.defaultFocusSelector = ':aui-tabbable'),
        (lt.prototype.enter = function (t, e) {
          if (
            ((function (t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : document.activeElement;
              t.data(at, e);
            })(t, e),
            'false' !== t.attr('data-aui-focus'))
          ) {
            var i = t.attr('data-aui-focus-selector') || lt.defaultFocusSelector;
            (t.is(i) ? t : t.find(i)).first().trigger('focus');
          }
          ot(t) &&
            (this._focusTrapStack.push(t),
            this._handler ||
              ((this._handler = function (t, e) {
                if (0 === t.length) return;
                if (e.keyCode !== Y.TAB) return;
                const i = e.shiftKey ? -1 : 1,
                  n = e.target,
                  s = t[t.length - 1],
                  a = s.find(':aui-tabbable');
                if (!a.length) return;
                const o = a.index(n);
                let l = -1;
                if (o > -1) l = o;
                else {
                  let t;
                  if (!(t = r(n).closest('.aui-layer')).length) {
                    const e = s.find('[aria-controls]'),
                      i = e.map(function () {
                        return document.getElementById(
                          this.getAttribute('aria-controls')
                        );
                      });
                    t = i.has(n);
                  }
                  if (t.length) {
                    const e = t.find(':aui-tabbable'),
                      s = e.index(n),
                      r = s + i;
                    if (!(r < 0 || r >= e.length)) return;
                    {
                      const e = Q(t.get(0));
                      l = a.index(e);
                    }
                  }
                }
                l = l > -1 ? (l + i) % a.length : 0;
                'IFRAME' !== a.get(l).nodeName &&
                  (a.eq(l).trigger('focus'), e.preventDefault());
              }.bind(void 0, this._focusTrapStack)),
              r(document).on('keydown.aui-focus-manager', this._handler)));
        }),
        (lt.prototype.exit = function (t) {
          ot(t) &&
            (this._focusTrapStack.pop(),
            this._focusTrapStack.length ||
              (r(document).off('.aui-focus-manager', this._handler),
              delete this._handler));
          var e = document.activeElement;
          if (t[0] === e || t.has(e).length) {
            r(e).trigger('blur');
            var i = (function (t) {
              return r(t.data(at));
            })(t);
            i.length && (t.removeData(at), i.trigger('focus'));
          }
        }),
        (ut.global = ut()),
        o('FocusManager', ut);
      var dt = ut,
        ht = function (t, e) {
          var i = '_aui-widget-' + t;
          return function (t, n) {
            var s, a;
            r.isPlainObject(t) ? (a = t) : ((s = t), (a = n));
            var o,
              l = s && r(s);
            return (
              l && l.data(i)
                ? (o = l.data(i))
                : (l = (o = new e(l, a || {})).$el).data(i, o),
              o
            );
          };
        };
      let pt;
      !(function () {
        if (window.CustomEvent)
          try {
            const t = new window.CustomEvent('name', {
              bubbles: !1,
              cancelable: !0,
              detail: {x: 'y'},
            });
            if ((t.preventDefault(), !0 !== t.defaultPrevented))
              throw new Error('Could not prevent default');
            if ('name' !== t.type) throw new Error('Could not set custom name');
            if ('y' !== t.detail.x) throw new Error('Could not set detail');
            return void (pt = window.CustomEvent);
          } catch (t) {}
        (pt = function (t, e) {
          e = e || {bubbles: !1, cancelable: !1, detail: void 0};
          var i = document.createEvent('CustomEvent');
          i.initCustomEvent(t, !!e.bubbles, !!e.cancelable, e.detail);
          var n = i.preventDefault;
          return (
            (i.preventDefault = function () {
              n.call(this);
              try {
                Object.defineProperty(this, 'defaultPrevented', {
                  get: function () {
                    return !0;
                  },
                });
              } catch (t) {
                this.defaultPrevented || (this.defaultPrevented = !0);
              }
            }),
            i
          );
        }).prototype = window.Event.prototype;
      })();
      var ft = pt;
      const gt = '_aui-internal-layer-',
        mt = '_aui-internal-layer-global-',
        vt = 'aui-layer-',
        bt = 'aui-';
      var yt = r(document);
      function wt(t, e, i, n) {
        !(function (t, e) {
          var i = window.getComputedStyle(t).transitionProperty;
          return !!i && i.indexOf(e) > -1;
        })(t, e)
          ? i.call(t)
          : t.addEventListener('transitionend', function s(r) {
              e === r.propertyName &&
                (i.call(t), n && t.removeEventListener('transitionend', s));
            });
      }
      function _t(t, e, i) {
        var n = r.Event(gt + e),
          s = r.Event(mt + e),
          a = new ft(vt + i, {bubbles: !0, cancelable: !0}),
          o = new ft(bt + i, {bubbles: !0, cancelable: !0});
        return (
          t.trigger(n),
          t.trigger(s, [t]),
          t[0].dispatchEvent(a),
          t[0].dispatchEvent(o),
          !(
            n.isDefaultPrevented() ||
            s.isDefaultPrevented() ||
            a.defaultPrevented ||
            o.defaultPrevented
          )
        );
      }
      function xt(t) {
        (this.$el = r(t || '<div class="aui-layer"></div>')),
          (this.el = this.$el[0]),
          this.$el.addClass('aui-layer');
      }
      function kt(t, e) {
        return t.getAttribute(e) || t.getAttribute('data-aui-' + e);
      }
      xt.prototype = {
        below: function () {
          return It.global.item(It.global.indexOf(this.$el) - 1);
        },
        above: function () {
          return It.global.item(It.global.indexOf(this.$el) + 1);
        },
        changeSize: function (t, e) {
          return (
            this.$el.css('width', t),
            this.$el.css('height', 'content' === e ? '' : e),
            this
          );
        },
        on: function (t, e) {
          return this.$el.on(gt + t, e), this;
        },
        off: function (t, e) {
          return this.$el.off(gt + t, e), this;
        },
        show: function () {
          return this.isVisible() || It.global.indexOf(this.$el) > -1
            ? this
            : _t(this.$el, 'beforeShow', 'show')
            ? ('none' === this.$el.css('display') && this.$el.css('display', ''),
              It.global.push(this.$el),
              this)
            : this;
        },
        hide: function () {
          if (!this.isVisible()) return this;
          if (!_t(this.$el, 'beforeHide', 'hide')) return this;
          const t = this;
          return (
            (function (t, e, i) {
              wt(t, e, i, !0);
            })(this.$el.get(0), 'opacity', function () {
              t.isVisible() || (this.style.display = 'none');
            }),
            It.global.popUntil(this.$el),
            this
          );
        },
        isVisible: function () {
          return !0 === this.$el.data('_aui-layer-shown');
        },
        remove: function () {
          this.hide(), this.$el.remove(), (this.$el = null), (this.el = null);
        },
        isBlanketed: function () {
          return 'true' === this.el.dataset.auiBlanketed;
        },
        isPersistent: function () {
          var t = kt(this.el, 'modal'),
            e = this.el.hasAttribute('persistent');
          return 'true' === t || e;
        },
        getDOMContainer: function () {
          let t = kt(this.el, 'dom-container');
          return t && (t = document.querySelector(t) || document.body), t;
        },
        _hideLayer: function (t) {
          (this.isPersistent() || this.isBlanketed()) && dt.global.exit(this.$el),
            t && _t(this.$el, 'beforeHide', 'hide'),
            this.el.removeAttribute('open'),
            this.$el.removeData('_aui-layer-shown'),
            this.$el.css('z-index', this.$el.data('_aui-layer-cached-z-index') || ''),
            this.$el.data('_aui-layer-cached-z-index', ''),
            this.$el.trigger(gt + 'hide'),
            this.$el.trigger(mt + 'hide', [this.$el]);
        },
        _showLayer: function (t) {
          let e = this.getDOMContainer();
          if (this.isBlanketed() || e) {
            let t = e || 'body';
            this.$el.parent().is(t) || this.$el.appendTo(t);
          }
          this.$el.data('_aui-layer-shown', !0),
            this.$el.data('_aui-layer-cached-z-index', this.$el.css('z-index')),
            this.$el.css('z-index', t),
            this.el.removeAttribute('hidden'),
            this.el.setAttribute('open', ''),
            this.isBlanketed() && dt.global.enter(this.$el),
            this.$el.trigger(gt + 'show'),
            this.$el.trigger(mt + 'show', [this.$el]);
        },
      };
      var Ct = ht('layer', xt);
      function Et(t, e) {
        for (var i = t.length; i--; ) if (e(t[i])) return i;
        return -1;
      }
      function Tt(t, e) {
        return Et(t, function (t) {
          return t[0] === e[0];
        });
      }
      function Dt(t) {
        return Et(t, function (t) {
          return Ct(t).isBlanketed();
        });
      }
      function St(t, e) {
        var i = Dt(t);
        e !== i && (i > -1 ? U(!1, t[i].css('z-index') - 20) : V());
      }
      function At(t, e, i) {
        if (!(e < 0))
          for (var n = t.length - 1; n >= e; n--) {
            var s = t[n],
              r = Ct(s);
            (!i && r.isPersistent()) || (r._hideLayer(!0), t.splice(n, 1));
          }
      }
      function It() {
        this._stack = [];
      }
      function Ot(t) {
        if (!t.length) return !1;
        var e = document.getElementById(t.attr('aria-controls'));
        return It.global.indexOf(e) > -1;
      }
      (Ct.on = function (t, e, i) {
        return yt.on(mt + t, e, i), this;
      }),
        (Ct.off = function (t, e, i) {
          return yt.off(mt + t, e, i), this;
        }),
        (It.prototype = {
          push: function (t) {
            var e = t instanceof r ? t : r(t);
            if (Tt(this._stack, e) >= 0)
              throw new Error('The given element is already an active layer.');
            this.popLayersBeside(e);
            var i = Ct(e),
              n = (function (t) {
                var e;
                if (t.length) {
                  var i = t[t.length - 1],
                    n = parseInt(i.css('z-index'), 10);
                  e = (isNaN(n) ? 0 : n) + 100;
                } else e = 0;
                return Math.max(3e3, e);
              })(this._stack);
            return (
              i._showLayer(n), i.isBlanketed() && U(!1, n - 20), this._stack.push(e), this
            );
          },
          popLayersBeside: function (t) {
            const e = r(t).get(0);
            if (
              !(function (t) {
                return !!Q(t);
              })(e)
            ) {
              var i = Dt(this._stack);
              return void At(this._stack, ++i, !1);
            }
            const n = (function (t) {
              var e = Q(t);
              if (e) return r(e).closest('.aui-layer').get(0);
            })(e);
            if (n) {
              let t = this.indexOf(n);
              At(this._stack, ++t, !1);
            } else At(this._stack, 0, !1);
          },
          indexOf: function (t) {
            return Tt(this._stack, r(t));
          },
          item: function (t) {
            return this._stack[t];
          },
          hideAll: function () {
            return (
              this._stack
                .slice()
                .reverse()
                .forEach(function (t) {
                  let e = Ct(t);
                  e.isBlanketed() || e.isPersistent() || e.hide();
                }),
              this
            );
          },
          getNextLowerNonPersistentOrBlanketedLayer: function (t) {
            var e,
              i = t instanceof r ? t : r(t),
              n = Tt(this._stack, i);
            if (n < 0) return null;
            for (n--; n >= 0; ) {
              e = this._stack[n];
              var s = Ct(e);
              if (!s.isPersistent() || s.isBlanketed()) return e;
              n--;
            }
            return null;
          },
          getNextHigherNonPeristentAndNonBlanketedLayer: function (t) {
            var e,
              i = t instanceof r ? t : r(t),
              n = Tt(this._stack, i);
            if (n < 0) return null;
            for (n++; n < this._stack.length; ) {
              e = this._stack[n];
              var s = Ct(e);
              if (!s.isPersistent() && !s.isBlanketed()) return e;
              n++;
            }
            return null;
          },
          popUntil: function (t) {
            var e = t instanceof r ? t : r(t),
              i = Tt(this._stack, e);
            if (-1 === i) return null;
            var n = Dt(this._stack);
            return (
              At(this._stack, i + 1, Ct(e).isBlanketed()),
              this._stack.splice(i, 1),
              Ct(e)._hideLayer(),
              St(this._stack, n),
              e
            );
          },
          getTopLayer: function () {
            return this._stack.length ? this._stack[this._stack.length - 1] : null;
          },
          popTopIfNonPersistent: function () {
            var t = this.getTopLayer(),
              e = Ct(t);
            return !t || e.isPersistent() ? null : this.popUntil(t);
          },
          popUntilTopBlanketed: function () {
            var t = Dt(this._stack);
            if (t < 0) return null;
            var e = this._stack[t];
            if (Ct(e).isPersistent()) {
              var i = this.getNextHigherNonPeristentAndNonBlanketedLayer(e);
              if (i) {
                var n = Tt(this._stack, i);
                return At(this._stack, n, !0), i;
              }
              return null;
            }
            return At(this._stack, t, !0), St(this._stack, t), e;
          },
          popUntilTopPersistent: function () {
            var t = It.global.getTopLayer();
            if (t) {
              var e,
                i = Dt(this._stack),
                n = Ct(t);
              if (n.isPersistent()) {
                if (n.isBlanketed()) return;
                if (
                  ((t = It.global.getNextLowerNonPersistentOrBlanketedLayer(t)),
                  (n = Ct(t)),
                  !t || n.isPersistent())
                )
                  return;
                (e = Tt(this._stack, t)), At(this._stack, e, !0), St(this._stack, i);
              } else (e = Tt(this._stack, t)), At(this._stack, e, !0), St(this._stack, i);
            }
          },
        }),
        yt.on('keydown', function (t) {
          t.keyCode === Y.ESCAPE &&
            (It.global.popUntilTopPersistent(), t.preventDefault());
        }),
        yt.on('click', '.aui-blanket', function (t) {
          It.global.popUntilTopBlanketed() && t.preventDefault();
        }),
        yt.on('click', function (t) {
          var e = r(t.target);
          if (!e.closest('.aui-blanket').length) {
            var i = e.closest('[aria-controls]'),
              n = e.closest('.aui-layer');
            if (!n.length && !Ot(i)) {
              const e = r.Event('aui-close-layers-on-outer-click');
              return (
                yt.trigger(e),
                e.isDefaultPrevented()
                  ? void t.preventDefault()
                  : void It.global.hideAll()
              );
            }
            if (!Ot(i) && n.length) {
              var s = It.global.getNextHigherNonPeristentAndNonBlanketedLayer(n);
              s && Ct(s).hide();
            }
          }
        }),
        (It.global = new It()),
        (Ct.Manager = It),
        o('layer', Ct);
      var Nt = Ct;
      o('LayerManager', Nt.Manager);
      Nt.Manager;
      const Mt = {sinceVersion: '9.0.0', removeInVersion: '10.0.0'};
      var Pt = o(
        'params',
        new Proxy(
          {},
          {
            get: function (t, e) {
              return I('AJS.params', Mt)(), t[e];
            },
          }
        )
      );
      const Lt = N(
        function (t) {
          t || (t = Pt),
            r('.parameters input').each(function () {
              var e = this.value,
                i = this.title || this.id;
              r(this).hasClass('list')
                ? t[i]
                  ? t[i].push(e)
                  : (t[i] = [e])
                : (t[i] = e.match(/^(tru|fals)e$/i) ? 'true' === e.toLowerCase() : e);
            });
        },
        'populateParameters',
        {sinceVersion: '9.0.0', removeInVersion: '10.0.0'}
      );
      o('populateParameters', Lt);
      var Rt = Lt;
      r(function () {
        var t = r('body');
        t.data('auiVersion') || t.attr('data-aui-version', v), Rt();
      }),
        o('$', r);
      var $t = r;
      function jt(t) {
        return (
          r.when(r.ready).then(function () {
            setTimeout(function () {
              try {
                t.call(this, r);
              } catch (e) {
                f('Failed to run init function: ' + e.message, t, e, e.stack);
              }
            }, 1);
          }),
          this
        );
      }
      o('toInit', jt);
      var Ft = jt,
        Ht = {
          keys: {
            'aui.landmarks.site': 'Site',
            'aui.landmarks.sidebar': 'Sidebar',
            'aui.landmarks.page': 'Page',
            'aui.landmarks.main': 'Main',
            'aui.header.home.link': 'Go to home page',
            'aui.dropdown.async.error': 'Error loading dropdown',
            'aui.dropdown.async.loading': 'Loading dropdown',
            'aui.words.expand': 'Expand',
            'aui.words.collapse': 'Collapse',
            'aui.words.add': 'Add',
            'aui.words.update': 'Update',
            'aui.words.delete': 'Delete',
            'aui.words.remove': 'Remove',
            'aui.words.cancel': 'Cancel',
            'aui.words.loading': 'Loading',
            'aui.words.close': 'Close',
            'aui.enter.value': 'Enter value',
            'aui.words.more': 'More',
            'aui.words.moreitem': 'More…',
            'aui.keyboard.shortcut.type.x': "Type ''{0}''",
            'aui.keyboard.shortcut.then.x': "then ''{0}''",
            'aui.keyboard.shortcut.or.x': "OR ''{0}''",
            'aui.sidebar.expand.tooltip': 'Expand sidebar ( [ )',
            'aui.sidebar.collapse.tooltip': 'Collapse sidebar ( [ )',
            'aui.validation.message.maxlength':
              'Must be fewer than or equal to {0} characters',
            'aui.validation.message.minlength':
              'Must be greater than or equal to {0} characters',
            'aui.validation.message.exactlength': 'Must be exactly {0} characters',
            'aui.validation.message.matchingfield': '{0} and {1} do not match.',
            'aui.validation.message.matchingfield-novalue': 'These fields do not match.',
            'aui.validation.message.doesnotcontain':
              'Do not include the phrase {0} in this field',
            'aui.validation.message.pattern':
              'This field does not match the required format',
            'aui.validation.message.required': 'This is a required field',
            'aui.validation.message.validnumber': 'Please enter a valid number',
            'aui.validation.message.min': 'Enter a value greater than or equal to  {0}',
            'aui.validation.message.max': 'Enter a value less than or equal to {0}',
            'aui.validation.message.dateformat': 'Enter a valid date',
            'aui.validation.message.minchecked':
              'Tick at least {0,choice,0#0 checkboxes|1#1 checkbox|1<{0,number} checkboxes}.',
            'aui.validation.message.maxchecked':
              'Tick at most {0,choice,0#0 checkboxes|1#1 checkbox|1<{0,number} checkboxes}.',
            'aui.checkboxmultiselect.clear.selected': 'Clear selected items',
            'aui.select.no.suggestions': 'No suggestions',
            'aui.select.new.suggestions':
              'New suggestions added. Please use the up and down arrows to select.',
            'aui.select.new.value': 'new value',
            'aui.toggle.on': 'On',
            'aui.toggle.off': 'Off',
            'ajs.datepicker.localisations.day-names.sunday': 'Sunday',
            'ajs.datepicker.localisations.day-names.monday': 'Monday',
            'ajs.datepicker.localisations.day-names.tuesday': 'Tuesday',
            'ajs.datepicker.localisations.day-names.wednesday': 'Wednesday',
            'ajs.datepicker.localisations.day-names.thursday': 'Thursday',
            'ajs.datepicker.localisations.day-names.friday': 'Friday',
            'ajs.datepicker.localisations.day-names.saturday': 'Saturday',
            'ajs.datepicker.localisations.day-names-min.sunday': 'Sun',
            'ajs.datepicker.localisations.day-names-min.monday': 'Mon',
            'ajs.datepicker.localisations.day-names-min.tuesday': 'Tue',
            'ajs.datepicker.localisations.day-names-min.wednesday': 'Wed',
            'ajs.datepicker.localisations.day-names-min.thursday': 'Thu',
            'ajs.datepicker.localisations.day-names-min.friday': 'Fri',
            'ajs.datepicker.localisations.day-names-min.saturday': 'Sat',
            'ajs.datepicker.localisations.first-day': 0,
            'ajs.datepicker.localisations.is-RTL': !1,
            'ajs.datepicker.localisations.month-names.january': 'January',
            'ajs.datepicker.localisations.month-names.february': 'February',
            'ajs.datepicker.localisations.month-names.march': 'March',
            'ajs.datepicker.localisations.month-names.april': 'April',
            'ajs.datepicker.localisations.month-names.may': 'May',
            'ajs.datepicker.localisations.month-names.june': 'June',
            'ajs.datepicker.localisations.month-names.july': 'July',
            'ajs.datepicker.localisations.month-names.august': 'August',
            'ajs.datepicker.localisations.month-names.september': 'September',
            'ajs.datepicker.localisations.month-names.october': 'October',
            'ajs.datepicker.localisations.month-names.november': 'November',
            'ajs.datepicker.localisations.month-names.december': 'December',
            'ajs.datepicker.localisations.show-month-after-year': !1,
            'ajs.datepicker.localisations.year-suffix': '',
          },
          getText: function (t) {
            if (Object.prototype.hasOwnProperty.call(this.keys, t)) {
              for (
                var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1;
                n < e;
                n++
              )
                i[n - 1] = arguments[n];
              return m.apply(null, [this.keys[t]].concat(i));
            }
            return t;
          },
        };
      o('I18n', Ht);
      i(43), i(44), i(45), i(46), i(47), i(48), i(49), i(50), i(51), i(52);
      var Bt = 'header';
      function Wt(t) {
        var e = (function (t) {
          let {body: e, type: i = 'error'} = t;
          return r('<div class="aui-banner" role="banner"></div>')
            .append(r.parseHTML(e || ''))
            .addClass('aui-banner-'.concat(i));
        })(t);
        return (
          Ut()
            .find('.aui-banner')
            .get()
            .forEach(function (t) {
              var e = t.hasAttribute('hidden');
              e && r(t).remove();
            }),
          (function (t) {
            var e = Ut();
            if (!e.length) throw new Error('You must implement the application header');
            t.prependTo(e), H(t), t[0].removeAttribute('hidden');
          })(e),
          e[0]
        );
      }
      function Ut() {
        return r('#' + Bt);
      }
      K('aui/banner', Wt), o('banner', Wt);
      var Vt = Wt,
        zt = (i(53), i(2));
      const qt = {
          SMALL: {name: 'small', px: 20, radius: 9},
          MEDIUM: {name: 'medium', px: 30, radius: 13.5},
          LARGE: {name: 'large', px: 50, radius: 22.5},
        },
        Yt = {filled: !1, size: qt.MEDIUM.name},
        Kt =
          'Add CSS to the parent element of the <aui-spinner>.\nUse CSS flexbox or grid to vertically align it.\nSee https://css-tricks.com/centering-css-complete-guide/ for techniques.',
        Jt = I('<aui-spinner> filled attribute', {
          sinceVersion: '7.9.4',
          removeInVersion: '10.0.0',
          extraInfo: Kt,
        }),
        Gt = I('<aui-spinner> filled property', {
          sinceVersion: '7.9.4',
          removeInVersion: '10.0.0',
          extraInfo: Kt,
        });
      function Qt(t) {
        let e = qt.MEDIUM.name;
        if ('string' == typeof t) {
          (t = t.toLowerCase()),
            Object.keys(qt)
              .map(t => t.toLowerCase())
              .indexOf(t) > -1 && (e = t);
        }
        return e;
      }
      function Xt(t) {
        const {px: e, radius: i} =
          Object(zt.find)(qt, e => e.name === t._data.size) || qt.MEDIUM;
        !(function (t, e, i) {
          const n = t.querySelector('svg'),
            s = t.querySelector('circle');
          n.setAttribute('size', e),
            n.setAttribute('height', e),
            n.setAttribute('width', e),
            n.setAttribute('viewBox', '0 0 '.concat(e, ' ').concat(e));
          const r = e / 2;
          s.setAttribute('cx', r), s.setAttribute('cy', r), s.setAttribute('r', i);
        })(t, e, i),
          t._data.filled
            ? (function (t, e) {
                const i = t.parentNode;
                if (i && 1 === i.nodeType) {
                  const n = t.getBoundingClientRect(),
                    s = i.getBoundingClientRect(),
                    r = s.top + s.height / 2,
                    a = n.top + e / 2;
                  t.querySelector('svg').style.top = ''.concat(r - a, 'px');
                }
              })(t, e)
            : (function (t) {
                delete t.querySelector('svg').style.top;
              })(t);
      }
      var Zt = J('aui-spinner', {
        template(t) {
          (t.innerHTML =
            '<div class="aui-spinner spinner"><svg focusable="false"><circle></circle></svg></div>'),
            Xt(t);
        },
        attached(t) {
          Xt(t);
        },
        attributes: {
          filled: {
            created: function (t) {
              Jt(), (t._data.filled = !0), Xt(t);
            },
            removed: function (t) {
              (t._data.filled = !1), Xt(t);
            },
          },
          size(t, e) {
            (t._data.size = Qt(e.newValue)), Xt(t);
          },
        },
        prototype: {
          get _data() {
            return this.__data || (this._data = Object(zt.defaults)({}, Yt));
          },
          set _data(t) {
            return (this.__data = t);
          },
          set filled(t) {
            Gt(), t ? this.setAttribute('filled', '') : this.removeAttribute('filled');
          },
          set size(t) {
            const e = Qt(t);
            this.setAttribute('size', e);
          },
        },
      });
      function te(t) {
        return t.hasAttribute('aria-busy') && 'true' === t.getAttribute('aria-busy');
      }
      function ee(t) {
        return 'INPUT' === t.nodeName;
      }
      J('aui-button', {
        type: J.type.CLASSNAME,
        created: function (t) {
          (t._spinner = new Zt()), t._spinner.setAttribute('size', qt.SMALL.name);
        },
        prototype: {
          busy: function () {
            return ee(this) || te(this)
              ? (p('It is not valid to call busy() on an input button.'), this)
              : (this.appendChild(this._spinner),
                this.setAttribute('aria-busy', !0),
                this.setAttribute('busy', ''),
                this);
          },
          idle: function () {
            return ee(this) || !te(this)
              ? (p('It is not valid to call idle() on an input button.'), this)
              : (this.removeChild(this._spinner),
                this.removeAttribute('aria-busy'),
                this.removeAttribute('busy'),
                this);
          },
          isBusy: function () {
            return ee(this)
              ? (p('It is not valid to call isBusy() on an input button.'), !1)
              : te(this);
          },
        },
      }),
        K('aui/button');
      i(54), i(55), i(56);
      const ie = '.'.concat('aui-close-button'),
        ne = '<button type="button" class="'
          .concat('aui-close-button', '" aria-label="')
          .concat(Ht.getText('aui.words.close'), '">');
      var se = {'aui-focus': 'false', 'aui-blanketed': 'true'};
      function re(t) {
        (this._handlers = new WeakMap()),
          (this.$el = r(
            t ||
              '\n        <section role="dialog" class="aui-layer aui-dialog2 aui-dialog2-medium">\n            <header class="aui-dialog2-header">\n                <h2 class="aui-dialog2-header-main"></h2>\n                '.concat(
                ne,
                '\n                </button>\n            </header>\n            <div class="aui-dialog2-content"></div>\n            <footer class="aui-dialog2-footer"></footer>\n        </section>'
              )
          )),
          (function (t) {
            r.each(se, function (e, i) {
              var n = 'data-' + e;
              t[0].hasAttribute(n) || t.attr(n, i);
            });
          })(this.$el);
      }
      (re.prototype.on = function (t, e) {
        const i = this.$el;
        if (!this._handlers.get(e)) {
          const n = function (t) {
            t.target === i.get(0) && e.apply(this, arguments);
          };
          Nt(i).on(t, n), this._handlers.set(e, n);
        }
        return this;
      }),
        (re.prototype.off = function (t, e) {
          const i = this.$el,
            n = this._handlers.get(e);
          return n && (Nt(i).off(t, n), this._handlers.delete(e)), this;
        }),
        (re.prototype.show = function () {
          return Nt(this.$el).show(), this;
        }),
        (re.prototype.hide = function () {
          return Nt(this.$el).hide(), this;
        }),
        (re.prototype.remove = function () {
          return Nt(this.$el).remove(), this;
        }),
        (re.prototype.isVisible = function () {
          return Nt(this.$el).isVisible();
        });
      var ae = ht('dialog2', re),
        oe = new Set();
      (ae.on = function (t, e) {
        return oe.has(e) || (Nt.on(t, '.aui-dialog2', e), oe.add(e)), this;
      }),
        (ae.off = function (t, e) {
          return oe.has(e) && (Nt.off(t, '.aui-dialog2', e), oe.delete(e)), this;
        }),
        r(document).on('click keydown', '.aui-dialog2-header '.concat(ie), function (t) {
          ('click' === t.type || t.keyCode === Y.ENTER || t.keyCode === Y.SPACE) &&
            (t.preventDefault(), ae(r(t.target).closest('.aui-dialog2')).hide());
        }),
        ae.on('show', function (t, e) {
          e.find(ie).attr('tabindex', 0), e.attr('tabindex', -1);
          var i =
            e[0].hasAttribute('data-aui-focus-selector') &&
            e.attr('data-aui-focus-selector');
          if (i) {
            var n = e.find(i);
            if (n.length > 0) return n.first().focus();
          }
          e.focus();
        }),
        ae.on('hide', function (t, e) {
          var i = Nt(e);
          e.data('aui-remove-on-hide') && i.remove();
        }),
        K('aui/dialog2', ae),
        o('dialog2', ae);
      var le,
        ce,
        ue = ae,
        de = (i(57), i(3)),
        he = i.n(de),
        pe = navigator.userAgent.toLowerCase(),
        fe =
          (/msie/.test(pe),
          /windows nt 5.1/.test(pe),
          /windows nt 6.0/.test(pe),
          /windows nt 6.1/.test(pe),
          /mac os x/.test(pe));
      function ge(t) {
        var e = t.getBoundingClientRect();
        return {
          width: e.width,
          height: e.height,
          top: e.top,
          right: e.right,
          bottom: e.bottom,
          left: e.left,
          x: e.left,
          y: e.top,
        };
      }
      function me(t) {
        if ('[object Window]' !== t.toString()) {
          var e = t.ownerDocument;
          return e ? e.defaultView : window;
        }
        return t;
      }
      function ve(t) {
        var e = me(t);
        return {scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset};
      }
      function be(t) {
        return t instanceof me(t).Element || t instanceof Element;
      }
      function ye(t) {
        return t instanceof me(t).HTMLElement || t instanceof HTMLElement;
      }
      function we(t) {
        return t ? (t.nodeName || '').toLowerCase() : null;
      }
      function _e(t) {
        return (be(t) ? t.ownerDocument : t.document).documentElement;
      }
      function xe(t) {
        return ge(_e(t)).left + ve(t).scrollLeft;
      }
      function ke(t) {
        return me(t).getComputedStyle(t);
      }
      function Ce(t) {
        var e = ke(t),
          i = e.overflow,
          n = e.overflowX,
          s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n);
      }
      function Ee(t, e, i) {
        void 0 === i && (i = !1);
        var n = _e(e),
          s = ge(t),
          r = ye(e),
          a = {scrollLeft: 0, scrollTop: 0},
          o = {x: 0, y: 0};
        return (
          (r || (!r && !i)) &&
            (('body' !== we(e) || Ce(n)) &&
              (a = (function (t) {
                return t !== me(t) && ye(t)
                  ? (function (t) {
                      return {scrollLeft: t.scrollLeft, scrollTop: t.scrollTop};
                    })(t)
                  : ve(t);
              })(e)),
            ye(e)
              ? (((o = ge(e)).x += e.clientLeft), (o.y += e.clientTop))
              : n && (o.x = xe(n))),
          {
            x: s.left + a.scrollLeft - o.x,
            y: s.top + a.scrollTop - o.y,
            width: s.width,
            height: s.height,
          }
        );
      }
      function Te(t) {
        return {
          x: t.offsetLeft,
          y: t.offsetTop,
          width: t.offsetWidth,
          height: t.offsetHeight,
        };
      }
      function De(t) {
        return 'html' === we(t) ? t : t.assignedSlot || t.parentNode || t.host || _e(t);
      }
      function Se(t, e) {
        void 0 === e && (e = []);
        var i = (function t(e) {
            return ['html', 'body', '#document'].indexOf(we(e)) >= 0
              ? e.ownerDocument.body
              : ye(e) && Ce(e)
              ? e
              : t(De(e));
          })(t),
          n = 'body' === we(i),
          s = me(i),
          r = n ? [s].concat(s.visualViewport || [], Ce(i) ? i : []) : i,
          a = e.concat(r);
        return n ? a : a.concat(Se(De(r)));
      }
      function Ae(t) {
        return ['table', 'td', 'th'].indexOf(we(t)) >= 0;
      }
      function Ie(t) {
        if (!ye(t) || 'fixed' === ke(t).position) return null;
        var e = t.offsetParent;
        if (e) {
          var i = _e(e);
          if (
            'body' === we(e) &&
            'static' === ke(e).position &&
            'static' !== ke(i).position
          )
            return i;
        }
        return e;
      }
      function Oe(t) {
        for (var e = me(t), i = Ie(t); i && Ae(i) && 'static' === ke(i).position; )
          i = Ie(i);
        return i && 'body' === we(i) && 'static' === ke(i).position
          ? e
          : i ||
              (function (t) {
                for (var e = De(t); ye(e) && ['html', 'body'].indexOf(we(e)) < 0; ) {
                  var i = ke(e);
                  if (
                    'none' !== i.transform ||
                    'none' !== i.perspective ||
                    (i.willChange && 'auto' !== i.willChange)
                  )
                    return e;
                  e = e.parentNode;
                }
                return null;
              })(t) ||
              e;
      }
      var Ne = 'top',
        Me = 'bottom',
        Pe = 'right',
        Le = 'left',
        Re = 'auto',
        $e = [Ne, Me, Pe, Le],
        je = 'start',
        Fe = 'end',
        He = 'clippingParents',
        Be = 'viewport',
        We = 'popper',
        Ue = 'reference',
        Ve = $e.reduce(function (t, e) {
          return t.concat([e + '-' + je, e + '-' + Fe]);
        }, []),
        ze = [].concat($e, [Re]).reduce(function (t, e) {
          return t.concat([e, e + '-' + je, e + '-' + Fe]);
        }, []),
        qe = [
          'beforeRead',
          'read',
          'afterRead',
          'beforeMain',
          'main',
          'afterMain',
          'beforeWrite',
          'write',
          'afterWrite',
        ];
      function Ye(t) {
        var e = new Map(),
          i = new Set(),
          n = [];
        return (
          t.forEach(function (t) {
            e.set(t.name, t);
          }),
          t.forEach(function (t) {
            i.has(t.name) ||
              (function t(s) {
                i.add(s.name),
                  []
                    .concat(s.requires || [], s.requiresIfExists || [])
                    .forEach(function (n) {
                      if (!i.has(n)) {
                        var s = e.get(n);
                        s && t(s);
                      }
                    }),
                  n.push(s);
              })(t);
          }),
          n
        );
      }
      var Ke = {placement: 'bottom', modifiers: [], strategy: 'absolute'};
      function Je() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
          e[i] = arguments[i];
        return !e.some(function (t) {
          return !(t && 'function' == typeof t.getBoundingClientRect);
        });
      }
      function Ge(t) {
        void 0 === t && (t = {});
        var e = t,
          i = e.defaultModifiers,
          n = void 0 === i ? [] : i,
          s = e.defaultOptions,
          r = void 0 === s ? Ke : s;
        return function (t, e, i) {
          void 0 === i && (i = r);
          var s = {
              placement: 'bottom',
              orderedModifiers: [],
              options: Object.assign(Object.assign({}, Ke), r),
              modifiersData: {},
              elements: {reference: t, popper: e},
              attributes: {},
              styles: {},
            },
            a = [],
            o = !1,
            l = {
              state: s,
              setOptions: function (i) {
                c(),
                  (s.options = Object.assign(
                    Object.assign(Object.assign({}, r), s.options),
                    i
                  )),
                  (s.scrollParents = {
                    reference: be(t)
                      ? Se(t)
                      : t.contextElement
                      ? Se(t.contextElement)
                      : [],
                    popper: Se(e),
                  });
                var o = (function (t) {
                  var e = Ye(t);
                  return qe.reduce(function (t, i) {
                    return t.concat(
                      e.filter(function (t) {
                        return t.phase === i;
                      })
                    );
                  }, []);
                })(
                  (function (t) {
                    var e = t.reduce(function (t, e) {
                      var i = t[e.name];
                      return (
                        (t[e.name] = i
                          ? Object.assign(
                              Object.assign(Object.assign({}, i), e),
                              {},
                              {
                                options: Object.assign(
                                  Object.assign({}, i.options),
                                  e.options
                                ),
                                data: Object.assign(Object.assign({}, i.data), e.data),
                              }
                            )
                          : e),
                        t
                      );
                    }, {});
                    return Object.keys(e).map(function (t) {
                      return e[t];
                    });
                  })([].concat(n, s.options.modifiers))
                );
                return (
                  (s.orderedModifiers = o.filter(function (t) {
                    return t.enabled;
                  })),
                  s.orderedModifiers.forEach(function (t) {
                    var e = t.name,
                      i = t.options,
                      n = void 0 === i ? {} : i,
                      r = t.effect;
                    if ('function' == typeof r) {
                      var o = r({state: s, name: e, instance: l, options: n});
                      a.push(o || function () {});
                    }
                  }),
                  l.update()
                );
              },
              forceUpdate: function () {
                if (!o) {
                  var t = s.elements,
                    e = t.reference,
                    i = t.popper;
                  if (Je(e, i)) {
                    (s.rects = {
                      reference: Ee(e, Oe(i), 'fixed' === s.options.strategy),
                      popper: Te(i),
                    }),
                      (s.reset = !1),
                      (s.placement = s.options.placement),
                      s.orderedModifiers.forEach(function (t) {
                        return (s.modifiersData[t.name] = Object.assign({}, t.data));
                      });
                    for (var n = 0; n < s.orderedModifiers.length; n++)
                      if (!0 !== s.reset) {
                        var r = s.orderedModifiers[n],
                          a = r.fn,
                          c = r.options,
                          u = void 0 === c ? {} : c,
                          d = r.name;
                        'function' == typeof a &&
                          (s = a({state: s, options: u, name: d, instance: l}) || s);
                      } else (s.reset = !1), (n = -1);
                  }
                }
              },
              update: (function (t) {
                var e;
                return function () {
                  return (
                    e ||
                      (e = new Promise(function (i) {
                        Promise.resolve().then(function () {
                          (e = void 0), i(t());
                        });
                      })),
                    e
                  );
                };
              })(function () {
                return new Promise(function (t) {
                  l.forceUpdate(), t(s);
                });
              }),
              destroy: function () {
                c(), (o = !0);
              },
            };
          if (!Je(t, e)) return l;
          function c() {
            a.forEach(function (t) {
              return t();
            }),
              (a = []);
          }
          return (
            l.setOptions(i).then(function (t) {
              !o && i.onFirstUpdate && i.onFirstUpdate(t);
            }),
            l
          );
        };
      }
      var Qe = {passive: !0};
      function Xe(t) {
        return t.split('-')[0];
      }
      function Ze(t) {
        return t.split('-')[1];
      }
      function ti(t) {
        return ['top', 'bottom'].indexOf(t) >= 0 ? 'x' : 'y';
      }
      function ei(t) {
        var e,
          i = t.reference,
          n = t.element,
          s = t.placement,
          r = s ? Xe(s) : null,
          a = s ? Ze(s) : null,
          o = i.x + i.width / 2 - n.width / 2,
          l = i.y + i.height / 2 - n.height / 2;
        switch (r) {
          case Ne:
            e = {x: o, y: i.y - n.height};
            break;
          case Me:
            e = {x: o, y: i.y + i.height};
            break;
          case Pe:
            e = {x: i.x + i.width, y: l};
            break;
          case Le:
            e = {x: i.x - n.width, y: l};
            break;
          default:
            e = {x: i.x, y: i.y};
        }
        var c = r ? ti(r) : null;
        if (null != c) {
          var u = 'y' === c ? 'height' : 'width';
          switch (a) {
            case je:
              e[c] = Math.floor(e[c]) - Math.floor(i[u] / 2 - n[u] / 2);
              break;
            case Fe:
              e[c] = Math.floor(e[c]) + Math.ceil(i[u] / 2 - n[u] / 2);
          }
        }
        return e;
      }
      var ii = {top: 'auto', right: 'auto', bottom: 'auto', left: 'auto'};
      function ni(t) {
        var e,
          i = t.popper,
          n = t.popperRect,
          s = t.placement,
          r = t.offsets,
          a = t.position,
          o = t.gpuAcceleration,
          l = t.adaptive,
          c = (function (t) {
            var e = t.x,
              i = t.y,
              n = window.devicePixelRatio || 1;
            return {x: Math.round(e * n) / n || 0, y: Math.round(i * n) / n || 0};
          })(r),
          u = c.x,
          d = c.y,
          h = r.hasOwnProperty('x'),
          p = r.hasOwnProperty('y'),
          f = Le,
          g = Ne,
          m = window;
        if (l) {
          var v = Oe(i);
          v === me(i) && (v = _e(i)),
            s === Ne && ((g = Me), (d -= v.clientHeight - n.height), (d *= o ? 1 : -1)),
            s === Le && ((f = Pe), (u -= v.clientWidth - n.width), (u *= o ? 1 : -1));
        }
        var b,
          y = Object.assign({position: a}, l && ii);
        return o
          ? Object.assign(
              Object.assign({}, y),
              {},
              (((b = {})[g] = p ? '0' : ''),
              (b[f] = h ? '0' : ''),
              (b.transform =
                (m.devicePixelRatio || 1) < 2
                  ? 'translate(' + u + 'px, ' + d + 'px)'
                  : 'translate3d(' + u + 'px, ' + d + 'px, 0)'),
              b)
            )
          : Object.assign(
              Object.assign({}, y),
              {},
              (((e = {})[g] = p ? d + 'px' : ''),
              (e[f] = h ? u + 'px' : ''),
              (e.transform = ''),
              e)
            );
      }
      var si = {left: 'right', right: 'left', bottom: 'top', top: 'bottom'};
      function ri(t) {
        return t.replace(/left|right|bottom|top/g, function (t) {
          return si[t];
        });
      }
      var ai = {start: 'end', end: 'start'};
      function oi(t) {
        return t.replace(/start|end/g, function (t) {
          return ai[t];
        });
      }
      function li(t, e) {
        var i = Boolean(e.getRootNode && e.getRootNode().host);
        if (t.contains(e)) return !0;
        if (i) {
          var n = e;
          do {
            if (n && t.isSameNode(n)) return !0;
            n = n.parentNode || n.host;
          } while (n);
        }
        return !1;
      }
      function ci(t) {
        return Object.assign(
          Object.assign({}, t),
          {},
          {left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height}
        );
      }
      function ui(t, e) {
        return e === Be
          ? ci(
              (function (t) {
                var e = me(t),
                  i = _e(t),
                  n = e.visualViewport,
                  s = i.clientWidth,
                  r = i.clientHeight,
                  a = 0,
                  o = 0;
                return (
                  n &&
                    ((s = n.width),
                    (r = n.height),
                    /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                      ((a = n.offsetLeft), (o = n.offsetTop))),
                  {width: s, height: r, x: a + xe(t), y: o}
                );
              })(t)
            )
          : ye(e)
          ? (function (t) {
              var e = ge(t);
              return (
                (e.top = e.top + t.clientTop),
                (e.left = e.left + t.clientLeft),
                (e.bottom = e.top + t.clientHeight),
                (e.right = e.left + t.clientWidth),
                (e.width = t.clientWidth),
                (e.height = t.clientHeight),
                (e.x = e.left),
                (e.y = e.top),
                e
              );
            })(e)
          : ci(
              (function (t) {
                var e = _e(t),
                  i = ve(t),
                  n = t.ownerDocument.body,
                  s = Math.max(
                    e.scrollWidth,
                    e.clientWidth,
                    n ? n.scrollWidth : 0,
                    n ? n.clientWidth : 0
                  ),
                  r = Math.max(
                    e.scrollHeight,
                    e.clientHeight,
                    n ? n.scrollHeight : 0,
                    n ? n.clientHeight : 0
                  ),
                  a = -i.scrollLeft + xe(t),
                  o = -i.scrollTop;
                return (
                  'rtl' === ke(n || e).direction &&
                    (a += Math.max(e.clientWidth, n ? n.clientWidth : 0) - s),
                  {width: s, height: r, x: a, y: o}
                );
              })(_e(t))
            );
      }
      function di(t, e, i) {
        var n =
            'clippingParents' === e
              ? (function (t) {
                  var e = Se(De(t)),
                    i =
                      ['absolute', 'fixed'].indexOf(ke(t).position) >= 0 && ye(t)
                        ? Oe(t)
                        : t;
                  return be(i)
                    ? e.filter(function (t) {
                        return be(t) && li(t, i) && 'body' !== we(t);
                      })
                    : [];
                })(t)
              : [].concat(e),
          s = [].concat(n, [i]),
          r = s[0],
          a = s.reduce(function (e, i) {
            var n = ui(t, i);
            return (
              (e.top = Math.max(n.top, e.top)),
              (e.right = Math.min(n.right, e.right)),
              (e.bottom = Math.min(n.bottom, e.bottom)),
              (e.left = Math.max(n.left, e.left)),
              e
            );
          }, ui(t, r));
        return (
          (a.width = a.right - a.left),
          (a.height = a.bottom - a.top),
          (a.x = a.left),
          (a.y = a.top),
          a
        );
      }
      function hi(t) {
        return Object.assign(
          Object.assign({}, {top: 0, right: 0, bottom: 0, left: 0}),
          t
        );
      }
      function pi(t, e) {
        return e.reduce(function (e, i) {
          return (e[i] = t), e;
        }, {});
      }
      function fi(t, e) {
        void 0 === e && (e = {});
        var i = e,
          n = i.placement,
          s = void 0 === n ? t.placement : n,
          r = i.boundary,
          a = void 0 === r ? He : r,
          o = i.rootBoundary,
          l = void 0 === o ? Be : o,
          c = i.elementContext,
          u = void 0 === c ? We : c,
          d = i.altBoundary,
          h = void 0 !== d && d,
          p = i.padding,
          f = void 0 === p ? 0 : p,
          g = hi('number' != typeof f ? f : pi(f, $e)),
          m = u === We ? Ue : We,
          v = t.elements.reference,
          b = t.rects.popper,
          y = t.elements[h ? m : u],
          w = di(be(y) ? y : y.contextElement || _e(t.elements.popper), a, l),
          _ = ge(v),
          x = ei({reference: _, element: b, strategy: 'absolute', placement: s}),
          k = ci(Object.assign(Object.assign({}, b), x)),
          C = u === We ? k : _,
          E = {
            top: w.top - C.top + g.top,
            bottom: C.bottom - w.bottom + g.bottom,
            left: w.left - C.left + g.left,
            right: C.right - w.right + g.right,
          },
          T = t.modifiersData.offset;
        if (u === We && T) {
          var D = T[s];
          Object.keys(E).forEach(function (t) {
            var e = [Pe, Me].indexOf(t) >= 0 ? 1 : -1,
              i = [Ne, Me].indexOf(t) >= 0 ? 'y' : 'x';
            E[t] += D[i] * e;
          });
        }
        return E;
      }
      function gi(t, e, i) {
        return Math.max(t, Math.min(e, i));
      }
      function mi(t, e, i) {
        return (
          void 0 === i && (i = {x: 0, y: 0}),
          {
            top: t.top - e.height - i.y,
            right: t.right - e.width + i.x,
            bottom: t.bottom - e.height + i.y,
            left: t.left - e.width - i.x,
          }
        );
      }
      function vi(t) {
        return [Ne, Pe, Me, Le].some(function (e) {
          return t[e] >= 0;
        });
      }
      var bi = Ge({
        defaultModifiers: [
          {
            name: 'eventListeners',
            enabled: !0,
            phase: 'write',
            fn: function () {},
            effect: function (t) {
              var e = t.state,
                i = t.instance,
                n = t.options,
                s = n.scroll,
                r = void 0 === s || s,
                a = n.resize,
                o = void 0 === a || a,
                l = me(e.elements.popper),
                c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
              return (
                r &&
                  c.forEach(function (t) {
                    t.addEventListener('scroll', i.update, Qe);
                  }),
                o && l.addEventListener('resize', i.update, Qe),
                function () {
                  r &&
                    c.forEach(function (t) {
                      t.removeEventListener('scroll', i.update, Qe);
                    }),
                    o && l.removeEventListener('resize', i.update, Qe);
                }
              );
            },
            data: {},
          },
          {
            name: 'popperOffsets',
            enabled: !0,
            phase: 'read',
            fn: function (t) {
              var e = t.state,
                i = t.name;
              e.modifiersData[i] = ei({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: 'absolute',
                placement: e.placement,
              });
            },
            data: {},
          },
          {
            name: 'computeStyles',
            enabled: !0,
            phase: 'beforeWrite',
            fn: function (t) {
              var e = t.state,
                i = t.options,
                n = i.gpuAcceleration,
                s = void 0 === n || n,
                r = i.adaptive,
                a = void 0 === r || r,
                o = {
                  placement: Xe(e.placement),
                  popper: e.elements.popper,
                  popperRect: e.rects.popper,
                  gpuAcceleration: s,
                };
              null != e.modifiersData.popperOffsets &&
                (e.styles.popper = Object.assign(
                  Object.assign({}, e.styles.popper),
                  ni(
                    Object.assign(
                      Object.assign({}, o),
                      {},
                      {
                        offsets: e.modifiersData.popperOffsets,
                        position: e.options.strategy,
                        adaptive: a,
                      }
                    )
                  )
                )),
                null != e.modifiersData.arrow &&
                  (e.styles.arrow = Object.assign(
                    Object.assign({}, e.styles.arrow),
                    ni(
                      Object.assign(
                        Object.assign({}, o),
                        {},
                        {
                          offsets: e.modifiersData.arrow,
                          position: 'absolute',
                          adaptive: !1,
                        }
                      )
                    )
                  )),
                (e.attributes.popper = Object.assign(
                  Object.assign({}, e.attributes.popper),
                  {},
                  {'data-popper-placement': e.placement}
                ));
            },
            data: {},
          },
          {
            name: 'applyStyles',
            enabled: !0,
            phase: 'write',
            fn: function (t) {
              var e = t.state;
              Object.keys(e.elements).forEach(function (t) {
                var i = e.styles[t] || {},
                  n = e.attributes[t] || {},
                  s = e.elements[t];
                ye(s) &&
                  we(s) &&
                  (Object.assign(s.style, i),
                  Object.keys(n).forEach(function (t) {
                    var e = n[t];
                    !1 === e
                      ? s.removeAttribute(t)
                      : s.setAttribute(t, !0 === e ? '' : e);
                  }));
              });
            },
            effect: function (t) {
              var e = t.state,
                i = {
                  popper: {
                    position: e.options.strategy,
                    left: '0',
                    top: '0',
                    margin: '0',
                  },
                  arrow: {position: 'absolute'},
                  reference: {},
                };
              return (
                Object.assign(e.elements.popper.style, i.popper),
                e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
                function () {
                  Object.keys(e.elements).forEach(function (t) {
                    var n = e.elements[t],
                      s = e.attributes[t] || {},
                      r = Object.keys(
                        e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]
                      ).reduce(function (t, e) {
                        return (t[e] = ''), t;
                      }, {});
                    ye(n) &&
                      we(n) &&
                      (Object.assign(n.style, r),
                      Object.keys(s).forEach(function (t) {
                        n.removeAttribute(t);
                      }));
                  });
                }
              );
            },
            requires: ['computeStyles'],
          },
          {
            name: 'offset',
            enabled: !0,
            phase: 'main',
            requires: ['popperOffsets'],
            fn: function (t) {
              var e = t.state,
                i = t.options,
                n = t.name,
                s = i.offset,
                r = void 0 === s ? [0, 0] : s,
                a = ze.reduce(function (t, i) {
                  return (
                    (t[i] = (function (t, e, i) {
                      var n = Xe(t),
                        s = [Le, Ne].indexOf(n) >= 0 ? -1 : 1,
                        r =
                          'function' == typeof i
                            ? i(Object.assign(Object.assign({}, e), {}, {placement: t}))
                            : i,
                        a = r[0],
                        o = r[1];
                      return (
                        (a = a || 0),
                        (o = (o || 0) * s),
                        [Le, Pe].indexOf(n) >= 0 ? {x: o, y: a} : {x: a, y: o}
                      );
                    })(i, e.rects, r)),
                    t
                  );
                }, {}),
                o = a[e.placement],
                l = o.x,
                c = o.y;
              null != e.modifiersData.popperOffsets &&
                ((e.modifiersData.popperOffsets.x += l),
                (e.modifiersData.popperOffsets.y += c)),
                (e.modifiersData[n] = a);
            },
          },
          {
            name: 'flip',
            enabled: !0,
            phase: 'main',
            fn: function (t) {
              var e = t.state,
                i = t.options,
                n = t.name;
              if (!e.modifiersData[n]._skip) {
                for (
                  var s = i.mainAxis,
                    r = void 0 === s || s,
                    a = i.altAxis,
                    o = void 0 === a || a,
                    l = i.fallbackPlacements,
                    c = i.padding,
                    u = i.boundary,
                    d = i.rootBoundary,
                    h = i.altBoundary,
                    p = i.flipVariations,
                    f = void 0 === p || p,
                    g = i.allowedAutoPlacements,
                    m = e.options.placement,
                    v = Xe(m),
                    b =
                      l ||
                      (v !== m && f
                        ? (function (t) {
                            if (Xe(t) === Re) return [];
                            var e = ri(t);
                            return [oi(t), e, oi(e)];
                          })(m)
                        : [ri(m)]),
                    y = [m].concat(b).reduce(function (t, i) {
                      return t.concat(
                        Xe(i) === Re
                          ? (function (t, e) {
                              void 0 === e && (e = {});
                              var i = e,
                                n = i.placement,
                                s = i.boundary,
                                r = i.rootBoundary,
                                a = i.padding,
                                o = i.flipVariations,
                                l = i.allowedAutoPlacements,
                                c = void 0 === l ? ze : l,
                                u = Ze(n),
                                d = u
                                  ? o
                                    ? Ve
                                    : Ve.filter(function (t) {
                                        return Ze(t) === u;
                                      })
                                  : $e,
                                h = d.filter(function (t) {
                                  return c.indexOf(t) >= 0;
                                });
                              0 === h.length && (h = d);
                              var p = h.reduce(function (e, i) {
                                return (
                                  (e[i] = fi(t, {
                                    placement: i,
                                    boundary: s,
                                    rootBoundary: r,
                                    padding: a,
                                  })[Xe(i)]),
                                  e
                                );
                              }, {});
                              return Object.keys(p).sort(function (t, e) {
                                return p[t] - p[e];
                              });
                            })(e, {
                              placement: i,
                              boundary: u,
                              rootBoundary: d,
                              padding: c,
                              flipVariations: f,
                              allowedAutoPlacements: g,
                            })
                          : i
                      );
                    }, []),
                    w = e.rects.reference,
                    _ = e.rects.popper,
                    x = new Map(),
                    k = !0,
                    C = y[0],
                    E = 0;
                  E < y.length;
                  E++
                ) {
                  var T = y[E],
                    D = Xe(T),
                    S = Ze(T) === je,
                    A = [Ne, Me].indexOf(D) >= 0,
                    I = A ? 'width' : 'height',
                    O = fi(e, {
                      placement: T,
                      boundary: u,
                      rootBoundary: d,
                      altBoundary: h,
                      padding: c,
                    }),
                    N = A ? (S ? Pe : Le) : S ? Me : Ne;
                  w[I] > _[I] && (N = ri(N));
                  var M = ri(N),
                    P = [];
                  if (
                    (r && P.push(O[D] <= 0),
                    o && P.push(O[N] <= 0, O[M] <= 0),
                    P.every(function (t) {
                      return t;
                    }))
                  ) {
                    (C = T), (k = !1);
                    break;
                  }
                  x.set(T, P);
                }
                if (k)
                  for (
                    var L = function (t) {
                        var e = y.find(function (e) {
                          var i = x.get(e);
                          if (i)
                            return i.slice(0, t).every(function (t) {
                              return t;
                            });
                        });
                        if (e) return (C = e), 'break';
                      },
                      R = f ? 3 : 1;
                    R > 0 && 'break' !== L(R);
                    R--
                  );
                e.placement !== C &&
                  ((e.modifiersData[n]._skip = !0), (e.placement = C), (e.reset = !0));
              }
            },
            requiresIfExists: ['offset'],
            data: {_skip: !1},
          },
          {
            name: 'preventOverflow',
            enabled: !0,
            phase: 'main',
            fn: function (t) {
              var e = t.state,
                i = t.options,
                n = t.name,
                s = i.mainAxis,
                r = void 0 === s || s,
                a = i.altAxis,
                o = void 0 !== a && a,
                l = i.boundary,
                c = i.rootBoundary,
                u = i.altBoundary,
                d = i.padding,
                h = i.tether,
                p = void 0 === h || h,
                f = i.tetherOffset,
                g = void 0 === f ? 0 : f,
                m = fi(e, {boundary: l, rootBoundary: c, padding: d, altBoundary: u}),
                v = Xe(e.placement),
                b = Ze(e.placement),
                y = !b,
                w = ti(v),
                _ = (function (t) {
                  return 'x' === t ? 'y' : 'x';
                })(w),
                x = e.modifiersData.popperOffsets,
                k = e.rects.reference,
                C = e.rects.popper,
                E =
                  'function' == typeof g
                    ? g(
                        Object.assign(
                          Object.assign({}, e.rects),
                          {},
                          {placement: e.placement}
                        )
                      )
                    : g,
                T = {x: 0, y: 0};
              if (x) {
                if (r) {
                  var D = 'y' === w ? Ne : Le,
                    S = 'y' === w ? Me : Pe,
                    A = 'y' === w ? 'height' : 'width',
                    I = x[w],
                    O = x[w] + m[D],
                    N = x[w] - m[S],
                    M = p ? -C[A] / 2 : 0,
                    P = b === je ? k[A] : C[A],
                    L = b === je ? -C[A] : -k[A],
                    R = e.elements.arrow,
                    $ = p && R ? Te(R) : {width: 0, height: 0},
                    j = e.modifiersData['arrow#persistent']
                      ? e.modifiersData['arrow#persistent'].padding
                      : {top: 0, right: 0, bottom: 0, left: 0},
                    F = j[D],
                    H = j[S],
                    B = gi(0, k[A], $[A]),
                    W = y ? k[A] / 2 - M - B - F - E : P - B - F - E,
                    U = y ? -k[A] / 2 + M + B + H + E : L + B + H + E,
                    V = e.elements.arrow && Oe(e.elements.arrow),
                    z = V ? ('y' === w ? V.clientTop || 0 : V.clientLeft || 0) : 0,
                    q = e.modifiersData.offset
                      ? e.modifiersData.offset[e.placement][w]
                      : 0,
                    Y = x[w] + W - q - z,
                    K = x[w] + U - q,
                    J = gi(p ? Math.min(O, Y) : O, I, p ? Math.max(N, K) : N);
                  (x[w] = J), (T[w] = J - I);
                }
                if (o) {
                  var G = 'x' === w ? Ne : Le,
                    Q = 'x' === w ? Me : Pe,
                    X = x[_],
                    Z = gi(X + m[G], X, X - m[Q]);
                  (x[_] = Z), (T[_] = Z - X);
                }
                e.modifiersData[n] = T;
              }
            },
            requiresIfExists: ['offset'],
          },
          {
            name: 'arrow',
            enabled: !0,
            phase: 'main',
            fn: function (t) {
              var e,
                i = t.state,
                n = t.name,
                s = i.elements.arrow,
                r = i.modifiersData.popperOffsets,
                a = Xe(i.placement),
                o = ti(a),
                l = [Le, Pe].indexOf(a) >= 0 ? 'height' : 'width';
              if (s && r) {
                var c = i.modifiersData[n + '#persistent'].padding,
                  u = Te(s),
                  d = 'y' === o ? Ne : Le,
                  h = 'y' === o ? Me : Pe,
                  p =
                    i.rects.reference[l] +
                    i.rects.reference[o] -
                    r[o] -
                    i.rects.popper[l],
                  f = r[o] - i.rects.reference[o],
                  g = Oe(s),
                  m = g ? ('y' === o ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
                  v = p / 2 - f / 2,
                  b = c[d],
                  y = m - u[l] - c[h],
                  w = m / 2 - u[l] / 2 + v,
                  _ = gi(b, w, y),
                  x = o;
                i.modifiersData[n] = (((e = {})[x] = _), (e.centerOffset = _ - w), e);
              }
            },
            effect: function (t) {
              var e = t.state,
                i = t.options,
                n = t.name,
                s = i.element,
                r = void 0 === s ? '[data-popper-arrow]' : s,
                a = i.padding,
                o = void 0 === a ? 0 : a;
              null != r &&
                ('string' != typeof r || (r = e.elements.popper.querySelector(r))) &&
                li(e.elements.popper, r) &&
                ((e.elements.arrow = r),
                (e.modifiersData[n + '#persistent'] = {
                  padding: hi('number' != typeof o ? o : pi(o, $e)),
                }));
            },
            requires: ['popperOffsets'],
            requiresIfExists: ['preventOverflow'],
          },
          {
            name: 'hide',
            enabled: !0,
            phase: 'main',
            requiresIfExists: ['preventOverflow'],
            fn: function (t) {
              var e = t.state,
                i = t.name,
                n = e.rects.reference,
                s = e.rects.popper,
                r = e.modifiersData.preventOverflow,
                a = fi(e, {elementContext: 'reference'}),
                o = fi(e, {altBoundary: !0}),
                l = mi(a, n),
                c = mi(o, s, r),
                u = vi(l),
                d = vi(c);
              (e.modifiersData[i] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: u,
                hasPopperEscaped: d,
              }),
                (e.attributes.popper = Object.assign(
                  Object.assign({}, e.attributes.popper),
                  {},
                  {'data-popper-reference-hidden': u, 'data-popper-escaped': d}
                ));
            },
          },
        ],
      });
      const yi = 'alignment',
        wi = 'right middle',
        _i = 'alignment-container',
        xi = 'aui-alignment-side-',
        ki = 'aui-alignment-snap-',
        Ci = 'aui-alignment-use-gpu',
        Ei = {
          'top left': 'top-start',
          'top center': 'top',
          'top right': 'top-end',
          'right top': 'right-start',
          'right middle': 'right',
          'right bottom': 'right-end',
          'bottom right': 'bottom-end',
          'bottom center': 'bottom',
          'bottom left': 'bottom-start',
          'left bottom': 'left-end',
          'left middle': 'left',
          'left top': 'left-start',
        };
      function Ti(t, e) {
        return t.getAttribute(e) || t.getAttribute('data-aui-' + e);
      }
      function Di(t) {
        return Ti(t, yi) || wi;
      }
      function Si(t) {
        let [e, i] = Di(t).split(' ');
        return {side: e, snap: i};
      }
      function Ai(t) {
        let e = (function (t) {
            let e = Ti(t, _i) || window;
            return 'string' == typeof e && (e = document.querySelector(e)), e;
          })(t),
          i = 'left';
        if (
          ((e && e !== window && e !== document) || (e = document.documentElement),
          e && e.nodeType && e.nodeType === Node.ELEMENT_NODE)
        ) {
          let n = e.getBoundingClientRect();
          t.getBoundingClientRect().left - n.left > (n.right - n.left) / 2 &&
            (i = 'right');
        }
        return i;
      }
      function Ii(t, e) {
        const i = Si(t);
        let n;
        return (
          i.snap && 'auto' !== i.snap
            ? (n = (function (t) {
                const e = Di(t);
                return Ei[e] || 'right';
              })(t))
            : ((i.snap = Ai(e)),
              (n =
                'submenu' === i.side
                  ? Ei[''.concat('right' === i.snap ? 'left' : 'right', ' top')]
                  : Ei[''.concat(i.side, ' ').concat(i.snap)])),
          n
        );
      }
      const Oi = {
        auto: [],
        top: ['top', 'bottom'],
        right: ['right', 'left'],
        bottom: ['bottom', 'top'],
        left: ['left', 'right'],
      };
      function Ni(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const n = Si(t),
          s = Ii(t, e),
          r = Oi[s.split('-')[0]],
          a = e.ownerDocument.defaultView.frameElement;
        (this._eventListenersEnabled =
          !!i.hasOwnProperty('eventsEnabled') && i.eventsEnabled),
          (this._triggerOnEvents = !1);
        const o = [
          {
            name: 'flip',
            enabled: !i.hasOwnProperty('flip') || i.flip,
            options: {
              allowedAutoPlacements: r,
              boundary:
                a ||
                (i.hasOwnProperty('flipContainer') ? i.flipContainer : 'clippingParents'),
            },
          },
          {
            name: 'preventOverflow',
            enabled: !i.hasOwnProperty('preventOverflow') || i.preventOverflow,
            options: {
              padding: 0,
              escapeWithReference: !1,
              rootBoundary:
                a ||
                (i.hasOwnProperty('overflowContainer')
                  ? i.overflowContainer
                  : 'document'),
            },
          },
          {
            name: 'offset',
            enabled: !!i.hasOwnProperty('offset'),
            options: {offset: i.offset},
          },
          {name: 'hide', enabled: !1},
          {
            name: 'computeStyles',
            options: {gpuAcceleration: document.body.classList.contains(Ci)},
          },
          {name: 'eventListeners', enabled: this._eventListenersEnabled},
          {
            name: 'x-placement',
            enabled: !0,
            phase: 'write',
            requires: ['computeStyles'],
            fn: t => {
              let {state: e} = t;
              e.elements.popper &&
                e.elements.popper.setAttribute('x-placement', e.placement);
            },
          },
          {
            name: 'onUpdate',
            enabled: i.hasOwnProperty('onUpdate'),
            phase: 'afterWrite',
            effect: t => {
              let {state: e, name: n} = t;
              e.modifiersData[''.concat(n, '#persistent')] = {
                enabled: !0,
                fn: i.onUpdate,
              };
            },
            fn: t => {
              let {state: e, name: i} = t;
              const n = e.modifiersData[''.concat(i, '#persistent')];
              return n.enabled && n.fn(), e;
            },
          },
          {
            name: 'onEvents',
            enabled: i.hasOwnProperty('onEvents'),
            phase: 'afterWrite',
            effect: t => {
              let {state: e, name: n} = t;
              e.modifiersData[''.concat(n, '#persistent')] = {fn: i.onEvents};
            },
            fn: t => {
              let {state: e, name: i} = t;
              const n = e.modifiersData[''.concat(i, '#persistent')];
              return (
                this._triggerOnEvents &&
                  (this._eventListenersEnabled
                    ? n.fn.enabled && n.fn.enabled()
                    : n.fn.disabled && n.fn.disabled(),
                  (this._triggerOnEvents = !1)),
                e
              );
            },
          },
        ];
        a &&
          e.ownerDocument != t.ownerDocument &&
          o.push({
            name: 'iframeOffset',
            enabled: !0,
            fn(t) {
              const e = a.getBoundingClientRect(),
                i = window.getComputedStyle(a),
                n = (t, e) => t + e,
                s = t => t.map(parseFloat).filter(Boolean).reduce(n, 0),
                r = s([e.top, i.paddingTop, i.borderTop]),
                o = s([e.left, i.paddingLeft, i.borderLeft]);
              return (
                (t.offsets.reference.left += o),
                (t.offsets.reference.top += r),
                (t.offsets.popper.left += o),
                (t.offsets.popper.top += r),
                t
              );
            },
          });
        const l = {
          placement: s,
          strategy:
            i.hasOwnProperty('positionFixed') && !i.positionFixed ? 'absolute' : 'fixed',
          modifiers: o,
          onFirstUpdate: i.onCreate,
        };
        (this.popper = bi(e, t, l)),
          (function (t, e, i) {
            const n = xi + e,
              s = ki + i;
            t.classList.contains(n) || t.classList.add(n),
              t.classList.contains(s) || t.classList.add(s);
          })(t, n.side, n.snap);
      }
      Ni.prototype = {
        destroy() {
          return this.popper.destroy(), this;
        },
        changeTarget(t) {
          const e = t.jquery ? t[0] : t;
          return (
            e &&
              e !== this.popper.state.elements.reference &&
              ((this.popper.state.elements.reference = e), this.popper.setOptions({})),
            this
          );
        },
        scheduleUpdate() {
          return this.popper.update(), this;
        },
        enable() {
          return (
            (this._eventListenersEnabled = !0),
            (this._triggerOnEvents = !0),
            this.popper.setOptions({}),
            this
          );
        },
        disable() {
          return (
            (this._eventListenersEnabled = !1),
            (this._triggerOnEvents = !0),
            this.popper.setOptions({}),
            this
          );
        },
      };
      var Mi = Ni;
      const Pi = 12;
      function Li(t) {
        let e = new r.Deferred();
        return (
          t
            ? setTimeout(() => {
                t.parentElement || e.resolve();
              }, Pi)
            : e.reject(),
          e.promise()
        );
      }
      var Ri,
        $i,
        ji = 0;
      function Fi(t) {
        if (
          ((Ri = ji++ + ''),
          ($i = t ? t + Ri : 'aui-uid-' + Ri),
          document.getElementById($i))
        ) {
          if ((($i = $i + '-' + new Date().getTime()), document.getElementById($i)))
            throw new Error('Timestamped fallback ID "' + $i + '" exists.');
          return $i;
        }
        return $i;
      }
      o('id', Fi);
      var Hi = Fi;
      function Bi(t) {
        return t.hasAttribute('hidden') || t.classList.contains('hidden');
      }
      function Wi(t, e) {
        t.setAttribute('aria-expanded', !!e),
          t.classList[e ? 'add' : 'remove']('active', 'aui-dropdown2-active');
      }
      function Ui(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const i =
          e && e.type && (e.type.indexOf('mouse') > -1 || e.type.indexOf('hover') > -1);
        t.isSubmenu && !i ? t.focusItem(0) : t.focus();
      }
      var Vi = 'unloaded',
        zi = 'loading',
        qi = 'error',
        Yi = 'success';
      function Ki(t, e) {
        G(t).set('loading-state', Yi),
          (t.innerHTML = (function (t) {
            return t
              .map(function (t) {
                var e = t.items
                    .map(function (t) {
                      function e(e) {
                        return t[e] ? ''.concat(e, ' ="true"') : '';
                      }
                      function i(e) {
                        return t[e] ? ''.concat(e, '="').concat(t[e], '"') : '';
                      }
                      var n = 'aui-item-' + t.type;
                      return '\n                <'
                        .concat(n, ' ')
                        .concat(i('for'), ' ')
                        .concat(i('href'), ' ')
                        .concat(e('interactive'), '\n                    ')
                        .concat(e('checked'), ' ')
                        .concat(e('disabled'), ' ')
                        .concat(e('hidden'), '>\n                    ')
                        .concat(T(t.content), '\n                </')
                        .concat(n, '>');
                    })
                    .join(''),
                  i = t.label ? 'label="'.concat(t.label, '"') : '';
                return '\n            <aui-section '
                  .concat(i, '>\n                ')
                  .concat(e, '\n            </aui-section>');
              })
              .join('\n');
          })(e)),
          J.init(t),
          Z(t, function (e) {
            document.activeElement === e && Ui(t);
          });
      }
      function Ji(t) {
        G(t).set('loading-state', qi),
          G(t).set('hasErrorBeenShown', t.isVisible()),
          (t.innerHTML =
            '\n        <div class="aui-message aui-message-error aui-dropdown-error">\n            <p>'.concat(
              Ht.getText('aui.dropdown.async.error'),
              '</p>\n        </div>\n    '
            ));
      }
      function Gi(t) {
        t.src &&
          G(t).get('loading-state') !== zi &&
          (!(function (t) {
            G(t).set('loading-state', zi),
              G(t).set('hasErrorBeenShown', !1),
              Z(t, function (t) {
                t.setAttribute('aria-busy', 'true');
              }),
              (t.innerHTML =
                '\n        <div class="aui-dropdown-loading">\n            <aui-spinner size="small"></aui-spinner> '.concat(
                  Ht.getText('aui.dropdown.async.loading'),
                  '\n        </div>\n    '
                ));
          })(t),
          r
            .ajax(t.src)
            .done(function (e, i, n) {
              200 === n.status ? Ki(t, e) : Ji(t);
            })
            .fail(function () {
              Ji(t);
            })
            .always(function () {
              !(function (t) {
                Z(t, function (t) {
                  t.setAttribute('aria-busy', 'false');
                });
              })(t);
            }));
      }
      function Qi(t, e) {
        return r(t)
          .find(
            [
              '> ul > li',
              '> .aui-dropdown2-section > ul > li',
              '> .aui-dropdown2-section > div[role="group"] > ul > li',
              '> div > .aui-dropdown2-section > div[role="group"] > ul > li',
              'aui-item-link',
              'aui-item-checkbox',
              'aui-item-radio',
            ].join(', ')
          )
          .filter(e)
          .children(
            'a, button, [role="checkbox"], [role="menuitemcheckbox"], [role="radio"], [role="menuitemradio"]'
          );
      }
      function Xi(t) {
        return Qi(t, () => !0);
      }
      function Zi(t) {
        return Qi(t, (t, e) => !Bi(e));
      }
      function tn(t) {
        Xi(t).each((t, e) =>
          (function (t) {
            t.setAttribute('tabindex', '-1'),
              (t.classList.contains('aui-dropdown2-disabled') || Bi(t.parentElement)) &&
                t.setAttribute('aria-disabled', 'true');
          })(e)
        );
      }
      function en(t) {
        t._auiAlignment && (t._auiAlignment.destroy(), delete t._auiAlignment);
      }
      function nn(t, e) {
        var i = e && e.hasSubmenu && e.hasSubmenu(),
          n = 'submenu auto' === t.getAttribute('data-aui-alignment');
        !i &&
          n &&
          (function (t) {
            var e = r(t),
              i = e.data('previous-data-aui-alignment');
            i
              ? t.setAttribute('data-aui-alignment', i)
              : t.removeAttribute('data-aui-alignment');
            e.removeData('previous-data-aui-alignment'),
              e.data('had-data-aui-alignment-static') ||
                t.removeAttribute('data-aui-alignment-static');
            e.removeData('had-data-aui-alignment-static');
          })(t);
        var s = t.hasAttribute('data-aui-alignment');
        i && !n
          ? (!(function (t) {
              var e = r(t);
              t.hasAttribute('data-aui-alignment') &&
                e.data(
                  'previous-data-aui-alignment',
                  t.getAttribute('data-aui-alignment')
                );
              e.data(
                'had-data-aui-alignment-static',
                t.hasAttribute('data-aui-alignment-static')
              );
            })(t),
            t.setAttribute('data-aui-alignment', 'submenu auto'),
            t.setAttribute('data-aui-alignment-static', !0))
          : s ||
            (t.setAttribute('data-aui-alignment', 'bottom auto'),
            t.setAttribute('data-aui-alignment-static', !0)),
          en(t),
          (t._auiAlignment = new Mi(t, e, {
            flip: !1,
            positionFixed: !1,
            preventOverflow: !1,
            offset: (!e.hasSubmenu || !e.hasSubmenu()) && [0, 3],
          })),
          t._auiAlignment.enable();
      }
      r(document).on('mousedown', '.aui-dropdown2-trigger', function () {
        this.hasAttribute('resolved') ||
          (J.init(this),
          I('Dropdown2 lazy initialisation', {
            removeInVersion: '10.0.0',
            alternativeName: 'initialisation on DOM insertion',
            sinceVersion: '5.8.0',
            extraInfo:
              'Dropdown2 triggers should have all necessary attributes on DOM insertion',
            deprecationType: 'JS',
          })());
      }),
        r(document).on(
          'mouseenter',
          '.aui-dropdown2-trigger-group a, .aui-dropdown2-trigger-group button',
          function (t) {
            const e = r(t.currentTarget);
            if (e.is('.aui-dropdown2-active')) return;
            if (e.closest('.aui-dropdown2').length) return;
            const i = e.closest('.aui-dropdown2-trigger-group'),
              n = i.find('.aui-dropdown2-active');
            n.length &&
              e.is('.aui-dropdown2-trigger') &&
              (n.blur(), e.trigger('aui-button-invoke'), t.preventDefault());
            const s = i.find(':focus');
            s.length && e.is('.aui-dropdown2-trigger') && s.blur();
          }
        );
      var sn = !1;
      function rn() {
        sn = !0;
      }
      function an(t) {
        Nt(t),
          t.addEventListener('aui-layer-show', function (e) {
            t === e.target &&
              (!(function (t) {
                var e = r(t);
                ['disabled', 'interactive', 'active', 'checked'].forEach(t => {
                  e.find('.'.concat(t)).addClass('aui-dropdown2-'.concat(t));
                });
              })(t),
              tn(t),
              r(t).trigger('aui-dropdown2-show'),
              Z(t, function (e) {
                Wi(e, !0),
                  (t._returnTo = (function (t, e) {
                    var i = e.getAttribute('data-dropdown2-hide-location');
                    return document.getElementById(i) || t.parentNode;
                  })(t, e));
              }));
          }),
          t.addEventListener('aui-layer-hide', function (e) {
            t === e.target &&
              (r(t).trigger('aui-dropdown2-hide'),
              t._auiAlignment && t._auiAlignment.destroy(),
              t._returnTo &&
                t.parentNode &&
                t.parentNode !== t._returnTo &&
                t._returnTo.appendChild(t),
              t.classList.remove('aui-dropdown2-in-header', 'aui-dropdown2-in-buttons'),
              Xi(t).removeClass('active aui-dropdown2-active'),
              Z(t, function (t) {
                !(function () {
                  var t = !0 === sn;
                  return (sn = !1), t;
                })()
                  ? Wi(t, !1)
                  : (t.focus(), Wi(t, t.hasSubmenu && t.hasSubmenu()));
              }),
              delete t.isSubmenu,
              X(t, null));
          });
      }
      function on(t) {
        var e = r(t);
        function i(e) {
          return r(e).closest('.aui-dropdown2, aui-dropdown-menu').get(0) === t;
        }
        e.on('keydown', function (e) {
          i(e.target) &&
            (e.keyCode === Y.DOWN
              ? (t.focusNext(), e.preventDefault())
              : e.keyCode === Y.UP
              ? (t.focusPrevious(), e.preventDefault())
              : e.keyCode === Y.LEFT
              ? t.isSubmenu && (rn(), t.hide(e), e.preventDefault())
              : e.keyCode === Y.ESCAPE
              ? rn()
              : e.keyCode === Y.TAB && (rn(), t.hide(e)));
        });
        e.on(
          'click keydown',
          'a, button, [role="menuitem"], [role="menuitemcheckbox"], [role="checkbox"], [role="menuitemradio"], [role="radio"]',
          function (e) {
            if (!i(e.target)) return;
            const n = e.currentTarget,
              s = e.keyCode,
              a = s === Y.ENTER,
              o = s === Y.SPACE;
            (a && r(n).is('a[href], button')) ||
              ('click' !== e.type && !a && !o) ||
              (function (e) {
                var i = e.currentTarget;
                if ('true' === i.getAttribute('aria-disabled'))
                  return void e.preventDefault();
                if (
                  !(
                    (e.currentTarget.hasSubmenu && e.currentTarget.hasSubmenu()) ||
                    i.classList.contains('aui-dropdown2-interactive')
                  )
                ) {
                  var n = t;
                  do {
                    var s = Nt(n);
                    (n = Nt(n).below()), s.$el.is('.aui-dropdown2') && s.hide(e);
                  } while (n);
                }
              })(e);
          }
        ),
          e.on(
            'mouseenter',
            'a, button, [role="menuitem"], [role="menuitemcheckbox"], [role="checkbox"], [role="menuitemradio"], [role="radio"]',
            function (e) {
              if (i(e.target)) {
                var n = e.currentTarget,
                  s = n.hasSubmenu && n.hasSubmenu();
                if (!e.isDefaultPrevented() && !s) {
                  var r = Nt(t).above();
                  r && Nt(r).hide();
                }
              }
            }
          );
      }
      function ln(t) {
        t.classList.add('aui-dropdown2'),
          t.setAttribute('tabindex', '-1'),
          t.hasAttribute('data-container') &&
            (t.setAttribute(
              'data-aui-alignment-container',
              t.getAttribute('data-container')
            ),
            t.removeAttribute('data-container')),
          an(t),
          on(t),
          r(t).on('click keydown', '.aui-dropdown2-checkbox', function (t) {
            if ('click' === t.type || t.keyCode === Y.ENTER || t.keyCode === Y.SPACE) {
              let e = this;
              if (t.isDefaultPrevented()) return;
              e.isInteractive() && t.preventDefault(),
                e.isEnabled() && (e.isChecked() ? e.uncheck() : e.check());
            }
          }),
          r(t).on('click keydown', '.aui-dropdown2-radio', function (t) {
            if ('click' === t.type || t.keyCode === Y.ENTER || t.keyCode === Y.SPACE) {
              let e = this;
              if (t.isDefaultPrevented()) return;
              e.isInteractive() && t.preventDefault(),
                this.isEnabled() &&
                  !1 === this.isChecked() &&
                  (r(e)
                    .closest('ul,[role=group]')
                    .find('.aui-dropdown2-checked')
                    .not(this)
                    .each(function () {
                      this.uncheck();
                    }),
                  e.check());
            }
          });
      }
      r(window).on(
        'resize',
        Object(zt.debounce)(
          function () {
            r('.aui-dropdown2').each(function (t, e) {
              J.init(e), e.isVisible() && e.hide();
            });
          },
          1e3,
          !0
        )
      );
      var cn = {
          toggle: function (t) {
            this.isVisible() ? this.hide(t) : this.show(t);
          },
          show: function (t) {
            var e = this;
            return (
              t &&
                t.currentTarget &&
                t.currentTarget.classList.contains('aui-dropdown2-trigger') &&
                X(e, t.currentTarget),
              Nt(e).show(),
              Z(e, function (t) {
                nn(e, t);
              }),
              setTimeout(() => Ui(e, t), 0),
              this
            );
          },
          hide: function () {
            return Nt(this).hide(), this;
          },
          focusNext: function () {
            var t,
              e = Zi(this),
              i = document.activeElement;
            e.last()[0] !== i &&
              ((t = e.toArray().indexOf(i)), this.focusItem(e.get(t + 1)));
          },
          focusPrevious: function () {
            var t,
              e = Zi(this),
              i = document.activeElement;
            e.first()[0] !== i &&
              ((t = e.toArray().indexOf(i)), this.focusItem(e.get(t - 1)));
          },
          focusItem: function (t) {
            const e = Zi(this);
            'number' == typeof t && (t = e.get(t));
            const i = r(t);
            i.focus(),
              e.removeClass('active aui-dropdown2-active'),
              i.addClass('active aui-dropdown2-active');
          },
          isVisible: function () {
            return Nt(this).isVisible();
          },
        },
        un = {
          created: function (t) {
            var e = t.children[0];
            e.setAttribute('aria-disabled', 'true'),
              e.classList.add('disabled', 'aui-dropdown2-disabled');
          },
          removed: function (t) {
            var e = t.children[0];
            e.setAttribute('aria-disabled', 'false'),
              e.classList.remove('disabled', 'aui-dropdown2-disabled');
          },
        },
        dn = {
          created: function (t) {
            t.children[0].classList.add('interactive', 'aui-dropdown2-interactive');
          },
          removed: function (t) {
            t.children[0].classList.remove('interactive', 'aui-dropdown2-interactive');
          },
        },
        hn = {
          created: function (t) {
            var e = t.children[0];
            e.classList.add('checked', 'aui-dropdown2-checked'),
              e.setAttribute('aria-checked', !0),
              t.dispatchEvent(new ft('change', {bubbles: !0}));
          },
          removed: function (t) {
            var e = t.children[0];
            e.classList.remove('checked', 'aui-dropdown2-checked'),
              e.setAttribute('aria-checked', !1),
              t.dispatchEvent(new ft('change', {bubbles: !0}));
          },
        },
        pn = {
          created: function (t) {
            un.created(t);
          },
          removed: function (t) {
            un.removed(t);
          },
        },
        fn = function (t) {
          return {
            fallback: function (e, i) {
              e.children[0].setAttribute(t, i.newValue);
            },
            removed: function (e) {
              e.children[0].removeAttribute(t);
            },
          };
        };
      const gn = J('aui-item-link', {
          template: he()('<a role="menuitem" tabindex="-1"><content></content></a>'),
          attributes: {
            disabled: un,
            interactive: dn,
            hidden: pn,
            href: fn('href'),
            'item-id': fn('id'),
            for: {
              created: function (t) {
                var e = t.children[0];
                e.setAttribute('aria-controls', t.getAttribute('for')),
                  r(e).addClass('aui-dropdown2-sub-trigger');
              },
              updated: function (t) {
                t.children[0].setAttribute('aria-controls', t.getAttribute('for'));
              },
              removed: function (t) {
                var e = t.children[0];
                e.removeAttribute('aria-controls'),
                  r(e).removeClass('aui-dropdown2-sub-trigger');
              },
            },
          },
        }),
        [mn, vn] = ['checkbox', 'radio'].map(t =>
          J('aui-item-'.concat(t), {
            template: he()(
              '<span role="'
                .concat(t, '" class="aui-dropdown2-')
                .concat(t, '" tabindex="-1"><content></content></span>')
            ),
            attributes: {
              'item-id': fn('id'),
              disabled: un,
              interactive: dn,
              checked: hn,
              hidden: pn,
            },
          })
        ),
        bn = J('aui-section', {
          template: he()(
            '\n        <span aria-hidden="true" class="aui-dropdown2-heading"></span>\n        <div class="aui-dropdown2-item-group" role="group">\n            <content></content>\n        </div>\n    '
          ),
          attributes: {
            label: function (t, e) {
              const i = Hi();
              var n = t.children[0],
                s = t.children[1];
              (n.textContent = e.newValue),
                (n.id = i),
                s.setAttribute('aria-labelledby', i);
            },
          },
          created: function (t) {
            t.classList.add('aui-dropdown2-section');
          },
        }),
        yn = J('aui-dropdown-menu', {
          created: function (t) {
            t.setAttribute('role', 'menu'),
              (t.className = 'aui-dropdown2'),
              Nt(t),
              G(t).set('loading-state', Vi),
              J.init(t);
          },
          detached: function (t) {
            Li(t).then(() => en(t));
          },
          attributes: {src: {}},
          prototype: cn,
          events: {
            'aui-layer-show': function (t) {
              var e = G(t).get('loading-state') === Vi,
                i = G(t).get('hasErrorBeenShown');
              (e || i) && Gi(t),
                G(t).get('loading-state') === qi && G(t).set('hasErrorBeenShown', !0);
            },
          },
        });
      J('aui-dropdown2', {type: J.type.CLASSNAME, created: ln, prototype: cn}),
        J('data-aui-dropdown2', {type: J.type.ATTRIBUTE, created: ln, prototype: cn}),
        J('aui-dropdown2-trigger', {
          type: J.type.CLASSNAME,
          created: function (t) {
            let e = t.getAttribute('aria-controls');
            function i(i) {
              let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (i.currentTarget !== t) return;
              if ((i.preventDefault(), !t.isEnabled())) return;
              const s = document.getElementById(e);
              if (!s)
                return void f(
                  'Could not find a dropdown with id "' + e + '" in the DOM.'
                );
              const a = r(t);
              return (
                a.parent().hasClass('aui-buttons') &&
                  s.classList.add('aui-dropdown2-in-buttons'),
                a.parents().hasClass('aui-header') &&
                  s.classList.add('aui-dropdown2-in-header'),
                n ? s.show(i) : s.toggle(i),
                (s.isSubmenu = t.hasSubmenu()),
                s
              );
            }
            e ||
              ((e = t.getAttribute('aria-owns'))
                ? (t.removeAttribute('aria-owns'), t.setAttribute('aria-controls', e))
                : f(
                    'Dropdown triggers need either a "aria-owns" or "aria-controls" attribute'
                  )),
              t.setAttribute('aria-haspopup', !0),
              t.setAttribute('aria-expanded', !1),
              'A' === t.nodeName && !t.href && t.setAttribute('href', '#'.concat(e)),
              r(t)
                .on('aui-button-invoke', i)
                .on('click', i)
                .on('keydown', function (e) {
                  if (e.currentTarget !== t) return;
                  const n = e.keyCode === Y.ENTER || e.keyCode === Y.SPACE,
                    s = e.keyCode === Y.RIGHT && t.hasSubmenu(),
                    r = (e.keyCode === Y.UP || e.keyCode === Y.DOWN) && !t.hasSubmenu();
                  n ? i(e) : (r || s) && i(e, document.activeElement === t);
                })
                .on('mouseenter', function (i) {
                  if (i.currentTarget !== t) return;
                  if ((i.preventDefault(), !t.isEnabled())) return;
                  const n = document.getElementById(e);
                  if (n)
                    return (
                      (function (t) {
                        var e = G(t).get('loading-state') === Vi,
                          i = G(t).get('hasErrorBeenShown');
                        (e || (i && !t.isVisible())) && Gi(t);
                      })(n),
                      t.hasSubmenu() && (n.show(i), (n.isSubmenu = t.hasSubmenu())),
                      n
                    );
                  f('Could not find a dropdown with id "' + e + '" in the DOM.');
                });
          },
          prototype: {
            disable: function () {
              this.setAttribute('aria-disabled', 'true'),
                this.classList.add('disabled', 'aui-dropdown2-disabled');
            },
            enable: function () {
              this.setAttribute('aria-disabled', 'false'),
                this.classList.remove('disabled', 'aui-dropdown2-disabled');
            },
            isEnabled: function () {
              return (
                'true' !== this.getAttribute('aria-disabled') &&
                !1 === this.classList.contains('aui-dropdown2-disabled')
              );
            },
            hasSubmenu: function () {
              return this.classList.contains('aui-dropdown2-sub-trigger');
            },
          },
        }),
        J('aui-dropdown2-sub-trigger', {
          type: J.type.CLASSNAME,
          created: function (t) {
            t.classList.add('aui-dropdown2-trigger'), J.init(t);
          },
        }),
        ['checkbox', 'radio'].map(t =>
          J('aui-dropdown2-'.concat(t), {
            type: J.type.CLASSNAME,
            created: function (e) {
              const i =
                'true' === e.getAttribute('aria-checked') ||
                e.classList.contains('checked') ||
                e.classList.contains('aui-dropdown2-checked');
              e.classList[i ? 'add' : 'remove']('checked', 'aui-dropdown2-checked'),
                e.setAttribute('aria-checked', i),
                e.setAttribute('tabindex', '0'),
                fe && e.setAttribute('role', t);
            },
            prototype: {
              isEnabled: function () {
                return 'true' !== this.getAttribute('aria-disabled');
              },
              isChecked: function () {
                return 'true' === this.getAttribute('aria-checked');
              },
              isInteractive: function () {
                return this.classList.contains('aui-dropdown2-interactive');
              },
              uncheck: function () {
                this.parentNode.tagName.toLowerCase() === 'aui-item-'.concat(t) &&
                  this.parentNode.removeAttribute('checked'),
                  r(this)
                    .attr('aria-checked', 'false')
                    .removeClass('checked aui-dropdown2-checked')
                    .trigger('aui-dropdown2-item-uncheck');
              },
              check: function () {
                this.parentNode.tagName.toLowerCase() === 'aui-item-'.concat(t) &&
                  this.parentNode.setAttribute('checked', ''),
                  r(this)
                    .attr('aria-checked', 'true')
                    .addClass('checked aui-dropdown2-checked')
                    .trigger('aui-dropdown2-item-check');
              },
            },
          })
        );
      i(58);
      var wn = r(document),
        _n = function (t) {
          var e = {};
          return (
            (e.$trigger = r(t.currentTarget)),
            (e.$content = wn.find('#' + e.$trigger.attr('aria-controls'))),
            (e.triggerIsParent = 0 !== e.$content.parent().filter(e.$trigger).length),
            (e.$shortContent = e.triggerIsParent
              ? e.$trigger.find('.aui-expander-short-content')
              : null),
            (e.height = e.$content.css('min-height')),
            (e.isCollapsible = !1 !== e.$trigger.data('collapsible')),
            (e.replaceText = e.$trigger.attr('data-replace-text')),
            (e.replaceSelector = e.$trigger.data('replace-selector')),
            e
          );
        },
        xn = function (t) {
          if (t.replaceText) {
            var e = t.replaceSelector ? t.$trigger.find(t.replaceSelector) : t.$trigger;
            t.$trigger.attr('data-replace-text', e.text()), e.text(t.replaceText);
          }
        },
        kn = {
          'aui-expander-invoke': function (t) {
            var e = r(t.currentTarget),
              i = wn.find('#' + e.attr('aria-controls')),
              n = !1 !== e.data('collapsible');
            'true' === i.attr('aria-expanded') && n
              ? e.trigger('aui-expander-collapse')
              : e.trigger('aui-expander-expand');
          },
          'aui-expander-expand': function (t) {
            var e = _n(t);
            'true' !== e.$content.attr('aria-expanded') &&
              (e.$content.attr('aria-expanded', 'true'),
              e.$trigger.attr('aria-expanded', 'true'),
              e.$content.get(0).removeAttribute('hidden'),
              xn(e),
              e.triggerIsParent && e.$shortContent.hide(),
              e.$trigger.trigger('aui-expander-expanded'));
          },
          'aui-expander-collapse': function (t) {
            var e = _n(t);
            'true' === e.$content.attr('aria-expanded') &&
              (xn(e),
              e.$content.attr('aria-expanded', 'false'),
              e.$trigger.attr('aria-expanded', 'false'),
              e.triggerIsParent && e.$shortContent.show(),
              0 === e.$content.outerHeight() &&
                e.$content.get(0).setAttribute('hidden', ''),
              e.$trigger.trigger('aui-expander-collapsed'));
          },
          'click.aui-expander': function (t) {
            r(t.currentTarget).trigger('aui-expander-invoke', t.currentTarget);
          },
        };
      wn.on(kn, '.aui-expander-trigger');
      var Cn = 500,
        En = 5e3,
        Tn = 100;
      function Dn(t) {
        In[t] = function (e, i) {
          i || ((i = e), (e = '#aui-message-bar')),
            (i.closeable = null !== i.closeable && !1 !== i.closeable),
            (i.title = (i.title || '').toString().trim());
          let n = (function (t, e) {
            let {id: i, closeable: n, fadeout: s, title: a, body: o} = t;
            const l = a ? '<p class="title"><strong>'.concat(T(a), '</strong></p>') : '',
              c = '<div class="aui-message">'.concat(l, '</div>'),
              u = r(c)
                .append(r.parseHTML(o || ''))
                .addClass(n ? 'closeable' : '')
                .addClass(s ? 'fadeout' : '')
                .addClass('aui-message-'.concat(e));
            i &&
              (/[#\'\"\.\s]/g.test(i)
                ? p(
                    'Messages error: ID rejected, must not include spaces, hashes, dots or quotes.'
                  )
                : u.attr('id', i));
            return u;
          })(i, t);
          return (
            (function (t, e, i) {
              'prepend' === e
                ? t.prependTo(i)
                : 'before' === e
                ? t.insertBefore(i)
                : 'after' === e
                ? t.insertAfter(i)
                : t.appendTo(i);
            })(n, i.insert, e),
            i.closeable && Sn(n),
            i.fadeout && An(n, i.delay, i.duration),
            n
          );
        };
      }
      function Sn(t) {
        r(t || 'div.aui-message.closeable').each(function () {
          var t = r(this),
            e = t.find(ie),
            i = e.length > 0 ? e.first() : r(ne);
          t.addClass('closeable'),
            t.append(i),
            (function (t) {
              t.unbind('click.aui-message').unbind('keydown.aui-message'),
                t
                  .on('click.aui-message', ie, function (t) {
                    r(t.target).closest('.aui-message').closeMessage();
                  })
                  .on('keydown.aui-message', ie, function (t) {
                    (t.which !== Y.ENTER && t.which !== Y.SPACE) ||
                      (r(t.target).closest('.aui-message').closeMessage(),
                      t.preventDefault());
                  });
            })(t);
        });
      }
      function An(t, e, i) {
        (e = void 0 !== e ? e : En),
          (i = void 0 !== i ? i : Cn),
          r(t || 'div.aui-message.fadeout').each(function () {
            var t = r(this),
              n = !1,
              s = !1;
            function a() {
              t.stop(!0, !1)
                .delay(e)
                .fadeOut(i, function () {
                  t.closeMessage();
                });
            }
            function o() {
              t.stop(!0, !1).fadeTo(Tn, 1);
            }
            function l() {
              return !n && !s;
            }
            t
              .focusin(function () {
                (n = !0), o();
              })
              .focusout(function () {
                (n = !1), l() && a();
              })
              .hover(
                function () {
                  (s = !0), o();
                },
                function () {
                  (s = !1), l() && a();
                }
              ),
              a();
          });
      }
      var In = {
        setup: function () {
          Sn(), An();
        },
        makeCloseable: Sn,
        makeFadeout: An,
        createMessage: Dn,
      };
      (r.fn.closeMessage = function () {
        var t = r(this);
        t.hasClass('aui-message') &&
          t.hasClass('closeable') &&
          (t.stop(!0),
          t.trigger('messageClose', [this]),
          t.remove(),
          r(document).trigger('aui-message-close', [this]));
      }),
        Dn('generic'),
        Dn('error'),
        Dn('warning'),
        Dn('info'),
        Dn('confirmation'),
        Dn('change'),
        Dn('success'),
        Dn('hint');
      const On = J('aui-message', {
        created: function (t) {
          var e = t.innerHTML,
            i = t.getAttribute('type') || 'info';
          (t.innerHTML = ''),
            In[i](t, {
              body: e,
              closeable: t.getAttribute('closeable'),
              delay: t.getAttribute('delay'),
              duration: t.getAttribute('duration'),
              fadeout: t.getAttribute('fadeout'),
              title: t.getAttribute('title'),
            });
        },
      });
      r(function () {
        In.setup();
      }),
        L(In, 'makeCloseable', {
          extraInfo:
            'Use the "closeable" option in the constructor instead. Docs: https://aui.atlassian.com/latest/docs/messages.html',
        }),
        L(In, 'createMessage', {
          extraInfo:
            'Use the provided convenience methods instead e.g. messages.info(). Docs: https://aui.atlassian.com/latest/docs/messages.html',
        }),
        L(In, 'makeFadeout', {
          extraInfo:
            'Use the "fadeout" option in the constructor instead. Docs: https://aui.atlassian.com/latest/docs/messages.html',
        }),
        L(In, 'generic', {
          extraInfo:
            'use the messages.info() method instead. Docs: https://aui.atlassian.com/latest/docs/messages.html',
        }),
        L(In, 'hint', {
          extraInfo:
            'use the messages.info() method instead. Docs: https://aui.atlassian.com/latest/docs/messages.html',
        }),
        L(In, 'success', {
          extraInfo:
            'use the messages.confirmation() method instead. Docs: https://aui.atlassian.com/latest/docs/messages.html',
        }),
        o('messages', In);
      i(59);
      var Nn = 5e3,
        Mn = 'aui-flag-container',
        Pn = {body: '', close: 'manual', title: '', type: 'info'};
      function Ln(t) {
        (t = r.extend({}, Pn, t)).title = (t.title || '').toString().trim();
        var e = (function (t) {
          let {body: e, title: i, close: n, type: s} = t;
          const a = i ? '<p class="title"><strong>'.concat(T(i), '</strong></p>') : '',
            o = '<div class="aui-message">'.concat(a, '</div>'),
            l = r(o)
              .append(r.parseHTML(e || ''))
              .addClass('never' === n ? '' : 'closeable')
              .addClass('aui-message-'.concat(s));
          return r('<div class="aui-flag" aria-live="polite"></div>').append(l);
        })(t);
        return (
          (function (t) {
            t[0].close = function () {
              $n(t);
            };
          })(e),
          'auto' === t.close
            ? (Rn(e),
              (function (t) {
                t.find('.aui-message').addClass('aui-will-close'),
                  setTimeout(function () {
                    t[0].close();
                  }, Nn);
              })(e))
            : 'manual' === t.close && Rn(e),
          (function () {
            const t = jn();
            if (t) {
              const e = t.querySelectorAll('.aui-flag:not([open])');
              Array.from(e).map(t => t.parentNode.removeChild(t));
            } else r('body').prepend('<div id="' + Mn + '"></div>');
          })(),
          (function (t) {
            const e = jn();
            t.appendTo(e), H(t), t.removeAttr('hidden').attr('open', '');
          })(e),
          e.get(0)
        );
      }
      function Rn(t) {
        var e = r(ne);
        return (
          e.on('click', function () {
            $n(t);
          }),
          e.on('keypress', function (e) {
            (e.which !== Y.ENTER && e.which !== Y.SPACE) || ($n(t), e.preventDefault());
          }),
          t.find('.aui-message').append(e)[0]
        );
      }
      function $n(t) {
        var e = t.get(0);
        return (
          e.removeAttribute('open'),
          e.dispatchEvent(new ft('aui-flag-close', {bubbles: !0})),
          e
        );
      }
      function jn() {
        return document.getElementById(Mn);
      }
      K('aui/flag', Ln), o('flag', Ln);
      var Fn = Ln;
      i(60), i(61);
      const Hn = 'aui-tooltip';
      (r.fn.tooltip = function (t) {
        const e = r.extend({}, r.fn.tooltip.defaults, 'string' == typeof t ? {} : t),
          {className: i} = e;
        function n() {
          const i = r(this);
          return (
            'string' == typeof t
              ? (function (t, e) {
                  t.tipsy(e);
                })(i, t)
              : (function (t, e) {
                  t.tipsy(e);
                  const i =
                    'hover' === e.trigger ||
                    (!e.trigger && 'hover' === t.tipsy.defaults.trigger);
                  if (e && e.hideOnClick && i) {
                    const i = function () {
                      r(this).tipsy('hide');
                    };
                    e.live ? t.on('click.tipsy', e.live, i) : t.on('click.tipsy', i);
                  }
                })(i, e),
            i
          );
        }
        return (
          (e.className =
            'string' == typeof i
              ? ''.concat(Hn, ' ').concat(i)
              : 'function' == typeof i
              ? function () {
                  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                  return ''.concat(Hn, ' ').concat(i.apply(void 0, e));
                }
              : Hn),
          e.live ? n.call(this) : this.each(n)
        );
      }),
        (r.fn.tooltip.defaults = {
          opacity: 1,
          offset: 1,
          delayIn: 500,
          hoverable: !0,
          hideOnClick: !0,
          aria: !0,
        });
      var Bn = {
        dropdown: function (t) {
          function e() {
            return r('<div class="aui-dropdown2-section">');
          }
          var i = e();
          r('<button />')
            .attr({
              type: 'button',
              'data-aui-checkbox-multiselect-clear': '',
              class: 'aui-button aui-button-link',
            })
            .text(Ht.getText('aui.checkboxmultiselect.clear.selected'))
            .appendTo(i);
          var n = e(),
            s = r('<ul />').appendTo(n);
          return (
            r.each(t, function (t, e) {
              var i = r('<li />')
                  .attr({class: e.styleClass || ''})
                  .appendTo(s),
                n = r('<a />')
                  .text(e.label)
                  .attr('data-value', e.value)
                  .addClass('aui-dropdown2-checkbox aui-dropdown2-interactive')
                  .appendTo(i);
              e.icon &&
                r('<span />')
                  .addClass('aui-icon')
                  .css('backgroundImage', 'url(' + e.icon + ')")')
                  .appendTo(n),
                e.selected && n.addClass('aui-dropdown2-checked');
            }),
            r('<div />').append(i).append(n).html()
          );
        },
        furniture: function (t, e) {
          var i = t + '-dropdown',
            n = r('<select />').attr({name: t, multiple: 'multiple'}).html(e),
            s = r('<div>').attr({
              id: i,
              class: 'aui-checkbox-multiselect-dropdown aui-dropdown2',
            }),
            a = r('<button />').attr({
              class: 'aui-checkbox-multiselect-btn aui-button aui-dropdown2-trigger',
              type: 'button',
              'aria-owns': i,
              'aria-haspopup': !0,
            });
          return r('<div />').append(n).append(a).append(s).html();
        },
      };
      function Wn(t) {
        var e = r(t.target);
        Un(this, e.attr('data-value'), e.hasClass('aui-dropdown2-checked'));
      }
      function Un(t, e, i) {
        var n = t.$select.find('option').filter(function () {
          var t = r(this);
          return t.attr('value') === e && t.prop('selected') !== i;
        });
        n.length && (n.prop('selected', i), t.$select.trigger('change'));
      }
      function Vn(t) {
        t.$dropdown
          .find('[data-aui-checkbox-multiselect-clear]')
          .prop('disabled', function () {
            return Kn(t).length < 1;
          });
      }
      function zn(t) {
        return t.map(function () {
          var t = r(this);
          return {
            value: t.val(),
            label: t.text(),
            icon: t.data('icon'),
            styleClass: t.data('styleClass'),
            title: t.attr('title'),
            disabled: t.attr('disabled'),
            selected: t.prop('selected'),
          };
        });
      }
      function qn(t) {
        t.$dropdown.html(
          Bn.dropdown(
            (function (t) {
              return zn(t.getOptions());
            })(t)
          )
        ),
          Vn(t);
      }
      function Yn(t) {
        var e = Jn(t),
          i = (function (t) {
            return 0 === Kn(t).length;
          })(t)
            ? (function (t) {
                return r(t).data('allLabel') || 'All';
              })(t)
            : e.join(', ');
        t.$btn.text(i);
      }
      function Kn(t) {
        return zn(t.getSelectedOptions());
      }
      function Jn(t) {
        return r.map(Kn(t), function (t) {
          return t.label;
        });
      }
      const Gn = J('aui-checkbox-multiselect', {
        attached: function (t) {
          var e = t.getAttribute('name') || Hi('aui-checkbox-multiselect-');
          (t.innerHTML = Bn.furniture(e, t.innerHTML)),
            (t.$select = r('select', t).on('change', function () {
              Yn(t), Vn(t);
            })),
            (t.$dropdown = r('.aui-checkbox-multiselect-dropdown', t)
              .on('aui-dropdown2-item-check', Wn.bind(t))
              .on('aui-dropdown2-item-uncheck', Wn.bind(t))
              .on(
                'click',
                'button[data-aui-checkbox-multiselect-clear]',
                t.deselectAllOptions.bind(t)
              )),
            (t.$btn = r('.aui-checkbox-multiselect-btn', t).tooltip({
              title: function () {
                return (function (t) {
                  return t.$dropdown[0].hasAttribute('hidden') ? '' : Jn(t).join(', ');
                })(t);
              },
            })),
            Yn(t),
            qn(t);
        },
        prototype: {
          getOptions: function () {
            return this.$select.find('option');
          },
          getSelectedOptions: function () {
            return this.$select.find('option:selected');
          },
          selectOption: function (t) {
            Un(this, t, !0);
          },
          unselectOption: function (t) {
            Un(this, t, !1);
          },
          getValue: function () {
            return this.$select.val();
          },
          deselectAllOptions: function () {
            this.$select.val([]).trigger('change'),
              this.$dropdown
                .find('.aui-dropdown2-checked,.checked')
                .removeClass('aui-dropdown2-checked checked');
          },
          addOption: function (t) {
            r('<option />')
              .attr({
                value: t.value,
                icon: t.icon,
                disabled: t.disabled,
                selected: t.selected,
                title: t.title,
              })
              .text(t.label)
              .appendTo(this.$select),
              Yn(this),
              qn(this);
          },
          removeOption: function (t) {
            this.$select.find("[value='" + t + "']").remove(), Yn(this), qn(this);
          },
        },
      });
      K('aui/checkbox-multiselect', Gn);
      var Qn = Gn,
        Xn = (i(62), i(63), i(19)),
        Zn = i.n(Xn).a;
      var ts = function (t) {
        function e(e) {
          return n(function () {
            return t.hasAttribute(e);
          }, e + " wasn't defined");
        }
        function i(i) {
          if (!e(i)) return !1;
          var s = t.getAttribute(i);
          return n(function () {
            return document.getElementById(s);
          }, 'an element with id set to "' + s + '" was not found');
        }
        function n(e, i) {
          return !!e() || (t ? f(i, t) : f(i), !1);
        }
        return {
          attributeExists: e,
          refersTo: i,
          satisfiesRules: n,
          ariaControls: function () {
            return i('aria-controls');
          },
          ariaOwns: function () {
            return i('aria-owns');
          },
        };
      };
      const es = '-input';
      function is(t) {
        return t.querySelector('label');
      }
      var ns = J('aui-label', {
          template: he()('<label><content></content></label>'),
          created: function (t) {
            t._label = is(t);
          },
          attached: function (t) {
            ts(t).attributeExists('for');
          },
          attributes: {
            for: function (t, e) {
              t.hasAttribute('for')
                ? is(t).setAttribute('for', ''.concat(e.newValue).concat(es))
                : is(t).removeAttribute('for');
            },
            form: function (t, e) {
              t.hasAttribute('form')
                ? is(t).setAttribute('form', e.newValue)
                : is(t).removeAttribute('form');
            },
          },
          prototype: {
            get disabled() {
              return this.hasAttribute('disabled');
            },
            set disabled(t) {
              t ? this.setAttribute('disabled', '') : this.removeAttribute('disabled');
            },
          },
          events: {
            click: function (t, e) {
              t.disabled && e.preventDefault();
            },
          },
        }),
        ss = (i(64), i(65), i(66), r.fn.select2);
      r.fn.auiSelect2 = function (t) {
        var e;
        if (r.isPlainObject(t)) {
          var i = r.extend({}, t),
            n = i.hasAvatar ? ' aui-has-avatar' : '';
          (i.containerCssClass =
            'aui-select2-container' +
            n +
            (i.containerCssClass ? ' ' + i.containerCssClass : '')),
            (i.dropdownCssClass =
              'aui-select2-drop aui-dropdown2' +
              n +
              (i.dropdownCssClass ? ' ' + i.dropdownCssClass : '')),
            (e = Array.prototype.slice.call(arguments, 1)).unshift(i);
        } else
          e = arguments.length
            ? arguments
            : [
                {
                  containerCssClass: 'aui-select2-container',
                  dropdownCssClass: 'aui-select2-drop aui-dropdown2',
                },
              ];
        return ss.apply(this, e);
      };
      i(67);
      (r.fn.spin = N(
        function (t, e) {
          let i = {size: 'small'};
          return (
            'object' == typeof e && (i = r.extend(i, e)),
            'object' == typeof t && (i = r.extend(i, t)),
            'string' == typeof t && (i.size = t),
            'boolean' == typeof t && !1 === t
              ? this.spinStop()
              : this.each(function () {
                  if (!this || !this.nodeType) return;
                  const t = r(this),
                    e = t.data();
                  if (e) {
                    const n = r('<aui-spinner filled></aui-spinner>');
                    n.attr('size', i.size),
                      n.css('color', i.color),
                      t.spinStop(),
                      t.append(n),
                      J.init(this),
                      (e.spinner = n);
                  }
                })
          );
        },
        'jQuery.fn.spin',
        {
          sinceVersion: '7.9.4',
          removeInVersion: '10.0.0',
          alternativeName: '<aui-spinner>',
        }
      )),
        (r.fn.spinStop = N(
          function () {
            return this.each(function () {
              if (!this || !this.nodeType) return;
              const t = r(this).data();
              t && t.spinner && (t.spinner.remove(), delete t.spinner);
            });
          },
          'jQuery.fn.spinStop',
          {
            sinceVersion: '7.9.4',
            removeInVersion: '10.0.0',
            alternativeName: '<aui-spinner>',
          }
        ));
      var rs = J('aui-option', {
          created: function (t) {
            Object.defineProperty(t, 'value', {
              get: function () {
                return t.getAttribute('value') || T(this.textContent);
              },
              set: function (e) {
                t.setAttribute('value', e);
              },
            });
          },
          prototype: {
            serialize: function () {
              var t = {};
              return (
                this.hasAttribute('img-src') &&
                  (t['img-src'] = encodeURI(this.getAttribute('img-src'))),
                (t.value = this.value),
                (t.label = T(this.textContent)),
                t
              );
            },
          },
        }),
        as = i(0),
        os = i.n(as),
        ls = os.a.Collection.extend({
          initialize: function (t, e) {
            e || (e = {}),
              e.matcher && (this.matcher = e.matcher),
              e.model && (this.model = e.model),
              (this._idAttribute = new this.model().idAttribute),
              (this._maxResults = e.maxResults || 5),
              (this._queryData = e.queryData || {}),
              (this._queryParamKey = e.queryParamKey || 'q'),
              (this._queryEndpoint = e.queryEndpoint || ''),
              (this.value = null),
              (this.queryCache = {}),
              (this.activeQueryCount = 0),
              Object(zt.bindAll)(this, 'query', 'respond');
          },
          url: function () {
            return this._queryEndpoint;
          },
          query: function (t) {
            var e, i;
            (this.value = t),
              (i = this.getFilteredResults(t)),
              this.respond(t, i),
              t &&
                this._queryEndpoint &&
                !this.hasQueryCache(t) &&
                this.shouldGetMoreResults(i) &&
                ((e = this.fetch(t)),
                this.activeQueryCount++,
                this.trigger('activity', {activity: !0}),
                e.always(() => {
                  this.activeQueryCount--,
                    this.trigger('activity', {activity: !!this.activeQueryCount});
                }),
                e.done((e, i, n) => {
                  this.addQueryCache(t, e, n);
                }),
                e.done(() => {
                  (t = this.value), (i = this.getFilteredResults(t)), this.respond(t, i);
                }));
          },
          getQueryData: function (t) {
            var e = Object(zt.isFunction)(this._queryData)
                ? this._queryData(t)
                : this._queryData,
              i = Object(zt.extend)({}, e);
            return (i[this._queryParamKey] = t), i;
          },
          fetch: function (t) {
            var e = {add: !0, update: !0, remove: !1, data: this.getQueryData(t)};
            return os.a.Collection.prototype.fetch.call(this, e);
          },
          respond: function (t, e) {
            return this.trigger('respond', {query: t, results: e}), e;
          },
          matcher: function (t, e) {},
          getFilteredResults: function (t) {
            var e = [];
            return t
              ? ((e = this.filter(function (e) {
                  return !!this.matcher(e, t);
                }, this)),
                this._maxResults && (e = Object(zt.first)(e, this._maxResults)),
                e)
              : e;
          },
          addQueryCache: function (t, e, i) {
            var n = this.queryCache,
              s = this.parse(e, i);
            n[t] = Object(zt.pluck)(s, this._idAttribute);
          },
          hasQueryCache: function (t) {
            return this.queryCache.hasOwnProperty(t);
          },
          findQueryCache: function (t) {
            return this.queryCache[t];
          },
          shouldGetMoreResults: function (t) {
            return t.length < this._maxResults;
          },
          setMaxResults: function (t) {
            (this._maxResults = t),
              this.value && this.respond(this.value, this.getFilteredResults(this.value));
          },
        });
      o('ProgressiveDataSet', ls);
      var cs = ls,
        us = os.a.Model.extend({
          idAttribute: 'label',
          getLabel: function () {
            return this.get('label') || this.get('value');
          },
        });
      function ds() {
        (this._suggestions = []), (this._activeIndex = -1);
      }
      ds.prototype = {
        onChange: function () {},
        onHighlightChange: function () {},
        get: function (t) {
          return this._suggestions[t];
        },
        set: function (t) {
          var e = this._suggestions;
          return (this._suggestions = t || []), this.onChange(e), this;
        },
        getNumberOfResults: function () {
          return this._suggestions.length;
        },
        setHighlighted: function (t) {
          if (t)
            for (var e = 0; e < this._suggestions.length; e++)
              this._suggestions[e].id === t.id && this.highlight(e);
          return this;
        },
        highlight: function (t) {
          return (this._activeIndex = t), this.onHighlightChange(), this;
        },
        highlightPrevious: function () {
          var t = this._activeIndex,
            e = 0 === t ? t : t - 1;
          return this.highlight(e), this;
        },
        highlightNext: function () {
          var t = this._activeIndex,
            e = t === this._suggestions.length - 1 ? t : t + 1;
          return this.highlight(e), this;
        },
        highlighted: function () {
          return this.get(this._activeIndex);
        },
        highlightedIndex: function () {
          return this._activeIndex;
        },
      };
      var hs = ds;
      function ps(t, e) {
        return t + '-' + e;
      }
      function fs(t, e) {
        (this.el = t), (this.anchor = e);
      }
      function gs(t) {
        r(t).find('.aui-select-active').removeClass('aui-select-active');
      }
      fs.prototype = {
        render: function (t, e, i) {
          this.currListId = i;
          var n = '';
          if (t.length) {
            var s = e;
            t.forEach(function (t) {
              var e = t.getLabel(),
                r = t.get('img-src'),
                a = r ? '<img src="'.concat(encodeURI(r), '"/>') : '',
                o = t.get('new-value')
                  ? ' (<em>'.concat(Ht.getText('aui.select.new.value'), '</em>)')
                  : '';
              (n += '<li role="option" class="aui-select-suggestion" id="'
                .concat(ps(i, s), '">')
                .concat(a)
                .concat(e)
                .concat(o, '</li>')),
                s++;
            }),
              e
                ? (this.el.querySelector('ul').innerHTML += n)
                : (this.el.querySelector('ul').innerHTML = n);
          } else
            e ||
              (this.el.querySelector('ul').innerHTML =
                '<li role="option" class="aui-select-no-suggestions">'.concat(
                  Ht.getText('aui.select.no.suggestions'),
                  '</li>'
                ));
          return this;
        },
        setActive: function (t) {
          gs(this.el),
            r(this.el)
              .find('#' + ps(this.currListId, t))
              .addClass('aui-select-active');
        },
        getActive: function () {
          return this.el.querySelector('.aui-select-active');
        },
        show: function () {
          !(function (t) {
            r(t.el).css('min-width', r(t.anchor).outerWidth());
          })(this),
            Nt(this.el).show(),
            (function (t) {
              t.anchor &&
                !t._auiAlignment &&
                (t._auiAlignment = new Mi(t.el, t.anchor, {
                  flipContainer: 'scrollParent',
                  positionFixed: !0,
                  preventOverflow: !1,
                  flip: !1,
                })),
                t._auiAlignment &&
                  (t._auiAlignment.enable(), t._auiAlignment.scheduleUpdate());
            })(this);
        },
        hide: function () {
          gs(this.el),
            Nt(this.el).hide(),
            (function (t) {
              t._auiAlignment && t._auiAlignment.disable();
            })(this);
        },
        destroy: function () {
          this.hide(),
            (function (t) {
              t._auiAlignment && (t._auiAlignment.destroy(), delete t._auiAlignment);
            })(this),
            delete this.currListId;
        },
        isVisible: function () {
          return r(this.el).is(':visible');
        },
      };
      var ms = fs,
        vs = he()(
          '\n    <input type="text" class="text" autocomplete="off" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">\n    <select></select>\n    <datalist>\n        <content select="aui-option"></content>\n    </datalist>\n    <button class="aui-button" role="button" tabindex="-1" type="button"></button>\n    <div class="aui-popover" role="listbox" data-aui-alignment="bottom left" hidden>\n        <ul class="aui-optionlist" role="presentation"></ul>\n    </div>\n    <div class="aui-select-status assistive" aria-live="polite" role="status"></div>\n'
        ),
        bs = -1,
        ys = -1,
        ws = 20;
      function _s(t) {
        (t._select.selectedIndex = bs),
          (function (t) {
            t._input.removeAttribute('style'),
              r(t._input).removeClass('aui-select-has-inline-image');
          })(t);
      }
      function xs(t) {
        return t._suggestionModel.getNumberOfResults();
      }
      function ks(t, e) {
        return 0 === t.get('label').toLowerCase().indexOf(e.toLowerCase());
      }
      function Cs(t) {
        t._suggestionsView.hide(), t._input.setAttribute('aria-expanded', 'false');
      }
      function Es(t) {
        var e = xs(t) ? 0 : ys;
        t._suggestionModel.highlight(e), Cs(t);
      }
      function Ts(t, e, i) {
        (t._autoHighlight = e),
          void 0 === i && (i = t._input.value),
          t._progressiveDataSet.query(i);
      }
      function Ds(t) {
        var e =
          t._suggestionModel.highlighted() &&
          t._suggestionModel.highlighted().get('img-src');
        e &&
          (function (t, e) {
            r(t._input).addClass('aui-select-has-inline-image'),
              t._input.setAttribute(
                'style',
                'background-image: url(' + encodeURI(e) + ')'
              );
          })(t, e);
      }
      function Ss(t, e) {
        if (e) {
          var i = document.createElement('option'),
            n = t._select,
            s = e.get('value') || e.get('label'),
            r = (function (t) {
              return new DOMParser().parseFromString(t, 'text/html').documentElement
                .textContent;
            })(e.getLabel());
          i.setAttribute('selected', ''),
            i.setAttribute('value', s),
            (i.textContent = r),
            (t._input.value = r),
            (n.innerHTML = ''),
            n.options.add(i),
            n.dispatchEvent(new ft('change', {bubbles: !0}));
        }
      }
      function As(t) {
        Ss(t, t._suggestionModel.highlighted()), Ds(t), Es(t);
      }
      function Is(t) {
        return new us(t.serialize());
      }
      function Os(t) {
        for (var e = [], i = 0; i < t._datalist.children.length; i++) {
          var n = t._datalist.children[i];
          e.push(Is(n));
        }
        return e;
      }
      function Ns(t) {
        var e = t._dropdown.querySelector('.aui-select-active');
        return e && e.id;
      }
      function Ms(t, e) {
        return r
          .map(e, function (t) {
            return t.id;
          })
          .indexOf(t);
      }
      function Ps(t) {
        (t._progressiveDataSet = new cs(Os(t), {
          model: us,
          matcher: ks,
          queryEndpoint: t._queryEndpoint,
          maxResults: ws,
        })),
          (t._isSync = !t._queryEndpoint),
          t._progressiveDataSet.on('activity', function () {
            t._progressiveDataSet.activeQueryCount && !t._isSync
              ? (!(function (t) {
                  t._button.isBusy() ||
                    (t._button.busy(),
                    t._input.setAttribute('aria-busy', 'true'),
                    t._dropdown.setAttribute('aria-busy', 'true'));
                })(t),
                G(t).set('should-flag-new-suggestions', !1))
              : (!(function (t) {
                  t._button.idle(),
                    t._input.setAttribute('aria-busy', 'false'),
                    t._dropdown.setAttribute('aria-busy', 'false');
                })(t),
                G(t).set('should-flag-new-suggestions', !0));
          }),
          t._progressiveDataSet.on('respond', function (e) {
            if (e.query && !t._input.value) return;
            if (G(t).get('should-cancel-response'))
              return void (
                t._progressiveDataSet.activeQueryCount ||
                G(t).set('should-cancel-response', !1)
              );
            e.query || (e.results = Os(t));
            var i = -1 !== Ms(t._input.value, e.results),
              n = !t._input.value;
            if (
              (!t.hasAttribute('can-create-values') ||
                i ||
                n ||
                e.results.push(
                  (function (t) {
                    var e = new rs();
                    e.setAttribute('value', t._input.value);
                    var i = Is(e);
                    return i.set('new-value', !0), i;
                  })(t)
                ),
              !G(t).get('should-include-selected'))
            ) {
              var s = Ms(t.value, e.results);
              s >= 0 && e.results.splice(s, 1);
            }
            const r = (function (t, e) {
                const i = t._suggestionModel.getNumberOfResults();
                return (
                  t._suggestionModel.set(),
                  t._suggestionModel.set(e.results),
                  i !== t._suggestionModel.getNumberOfResults()
                );
              })(t, e),
              a = t._suggestionModel.highlighted() || e.results[0];
            t._autoHighlight &&
              (t._suggestionModel.setHighlighted(a),
              (function (t) {
                setTimeout(t, 50);
              })(function () {
                t._input.setAttribute('aria-activedescendant', Ns(t));
              })),
              t._input.setAttribute('aria-expanded', 'true'),
              !t._isSync &&
                r &&
                t._suggestionsView.getActive() &&
                G(t).get('should-flag-new-suggestions') &&
                (t.querySelector('.aui-select-status').innerHTML = Ht.getText(
                  'aui.select.new.suggestions'
                )),
              t._suggestionsView.show();
          });
      }
      function Ls(t) {
        var e = t.value ? '' : t._input.value,
          i = '' === t._input.value;
        G(t).set('should-include-selected', i), Ts(t, !0, e);
      }
      function Rs(t) {
        (function (t) {
          return t._progressiveDataSet.activeQueryCount > 0;
        })(t) && G(t).set('should-cancel-response', !0);
      }
      function $s(t) {
        if (t._select.selectedIndex >= 0)
          return t._select.options[t._select.selectedIndex].textContent;
      }
      function js(t) {
        Rs(t),
          (function (t) {
            var e = !t.hasAttribute('no-empty-values'),
              i = !t._input.value,
              n = t._input.value !== $s(t);
            if (i || n)
              if (e) _s(t);
              else {
                var s = $s(t);
                void 0 === s ? _s(t) : (t._input.value = s);
              }
          })(t),
          (function (t) {
            t._suggestionModel.highlight(ys);
          })(t),
          Cs(t);
      }
      const Fs = J('aui-select', {
        template: vs,
        created: function (t) {
          (t._listId = Hi()),
            (t._input = t.querySelector('input')),
            (t._select = t.querySelector('select')),
            (t._dropdown = t.querySelector('.aui-popover')),
            (t._datalist = t.querySelector('datalist')),
            (t._button = t.querySelector('button')),
            (t._suggestionsView = new ms(t._dropdown, t._input)),
            (t._suggestionModel = new hs()),
            (t._suggestionModel.onChange = function (e) {
              var i = [];
              t._suggestionModel._suggestions.forEach(function (t) {
                e.some(function (e) {
                  return t.id === e.id;
                }) || i.push(t);
              }),
                t._suggestionsView.render(i, e.length, t._listId);
            }),
            (t._suggestionModel.onHighlightChange = function () {
              var e = t._suggestionModel.highlightedIndex();
              t._suggestionsView.setActive(e),
                t._input.setAttribute('aria-activedescendant', Ns(t));
            });
        },
        attached: function (t) {
          J.init(t),
            Ps(t),
            (function (t) {
              (t._dropdown.id = t._listId),
                t.querySelector('button').setAttribute('aria-controls', t._listId);
            })(t),
            t._input.setAttribute('aria-controls', t._listId),
            t.setAttribute('tabindex', '-1'),
            (function (t) {
              r(t._dropdown).on('mouseover', 'li', function (e) {
                xs(t) && t._suggestionModel.highlight(r(e.target).index());
              });
            })(t),
            (function (t) {
              let e = !1;
              r(document).on('aui-close-layers-on-outer-click.single-select', t => {
                e && (t.preventDefault(), (e = !1));
              }),
                r(t._dropdown).on('mousedown', 'li', function (i) {
                  if (!xs(t)) return !1;
                  t._suggestionModel.highlight(r(i.target).index()),
                    As(t),
                    t._suggestionsView.hide(),
                    r(t).closest('.aui-layer').length > 0 && (e = !0),
                    t._input.removeAttribute('aria-activedescendant');
                });
            })(t),
            (function (t) {
              var e = t._datalist.querySelector('aui-option[selected]');
              e && Ss(t, Is(e));
            })(t),
            Es(t),
            Ds(t);
        },
        detached: function (t) {
          r(document).off('aui-close-layers-on-outer-click'),
            Li(t).then(() => {
              Cs(t), t._suggestionsView.destroy();
            });
        },
        attributes: {
          id(t, e) {
            t.id && (t.querySelector('input').id = e.newValue + es);
          },
          name(t, e) {
            t.querySelector('select').setAttribute('name', e.newValue);
          },
          placeholder(t, e) {
            t.querySelector('input').setAttribute('placeholder', e.newValue);
          },
          src(t, e) {
            t._queryEndpoint = e.newValue;
          },
        },
        events: {
          'blur input': function (t) {
            js(t);
          },
          'mousedown button': function (t) {
            document.activeElement !== t._input ||
              t._dropdown.hasAttribute('hidden') ||
              G(t).set('prevent-open-on-button-click', !0);
          },
          'click input': function (t) {
            Ls(t);
          },
          'click button': function (t) {
            var e = G(t);
            e.get('prevent-open-on-button-click')
              ? e.set('prevent-open-on-button-click', !1)
              : (G(t).set('button-clicked-prevent-dropdown-hide', !0), t.focus());
          },
          input: function (t) {
            t._input.value
              ? (G(t).set('should-include-selected', !0), Ts(t, !0))
              : G(t).get('button-clicked-prevent-dropdown-hide')
              ? G(t).set('button-clicked-prevent-dropdown-hide', !1)
              : Cs(t);
          },
          'keydown input': function (t, e) {
            var i = t._input.value,
              n = !1;
            if (e.keyCode === Y.ESCAPE) return Rs(t), void Cs(t);
            t._suggestionsView.isVisible() && xs(t)
              ? e.keyCode === Y.ENTER
                ? (Rs(t), As(t), e.preventDefault())
                : e.keyCode === Y.TAB
                ? (!(function (t) {
                    t._suggestionsView.isVisible() && As(t);
                  })(t),
                  (n = !0))
                : e.keyCode === Y.UP
                ? (t._suggestionModel.highlightPrevious(), e.preventDefault())
                : e.keyCode === Y.DOWN &&
                  (t._suggestionModel.highlightNext(), e.preventDefault())
              : (e.keyCode !== Y.UP && e.keyCode !== Y.DOWN) ||
                (Ls(t), e.preventDefault()),
              (n = n || e.defaultPrevented),
              setTimeout(function () {
                t._input.value === i ||
                  n ||
                  t.dispatchEvent(new ft('input', {bubbles: !0}));
              }, 0);
          },
        },
        prototype: {
          get value() {
            var t = this._select.options[this._select.selectedIndex];
            return t ? t.value : '';
          },
          set value(t) {
            if ('' === t)
              !(function (t) {
                (t._input.value = ''), (t._select.innerHTML = '');
              })(this);
            else if (t) {
              var e = this._progressiveDataSet,
                i = e.findWhere({value: t}) || e.findWhere({label: t});
              !i &&
                this.hasAttribute('can-create-values') &&
                (i = new us({value: t, label: t})),
                Ss(this, i);
            }
            return this;
          },
          get displayValue() {
            return this._input.value;
          },
          blur: function () {
            return this._input.blur(), js(this), this;
          },
          focus: function () {
            return this._input.focus(), Ls(this), this;
          },
        },
      });
      K('aui/select', Fs), o('select', Fs);
      var Hs = Fs;
      i(68);
      function Bs(t, e, i) {
        i ? t.setAttribute(e, '') : t.removeAttribute(e);
      }
      var Ws = {
        computeBooleanValue: function (t) {
          return null !== t;
        },
        setBooleanAttribute: Bs,
        computeEnumValue: function (t, e) {
          const i = t => t.toLowerCase() === e.toLowerCase(),
            n = null === e,
            s = !n && !t.values.filter(i).length;
          return n
            ? t.hasOwnProperty('missingDefault')
              ? t.missingDefault
              : null
            : s
            ? t.hasOwnProperty('invalidDefault')
              ? t.invalidDefault
              : t.hasOwnProperty('missingDefault')
              ? t.missingDefault
              : null
            : t.values.length
            ? t.values.filter(i)[0]
            : null;
        },
        setEnumAttribute: function (t, e, i) {
          t.setAttribute(e.attribute, i);
        },
      };
      function Us(t) {
        return t._input || (t._input = t.querySelector('input'));
      }
      function Vs(t) {
        return t._spinner || (t._spinner = new Zt());
      }
      function zs(t, e) {
        Us(e).removeAttribute(t);
      }
      function qs(t, e, i) {
        Us(e).setAttribute(t, i.newValue);
      }
      function Ys(t) {
        return {removed: zs.bind(this, t), fallback: qs.bind(this, t)};
      }
      const Ks = {
        removed: function (t) {
          zs.call(this, 'form', t), (t._formId = null);
        },
        fallback: function (t, e) {
          qs.call(this, 'form', t, e), (t._formId = e.newValue);
        },
      };
      var Js = {
          removed: zs.bind(void 0, 'id'),
          fallback: function (t, e) {
            const i = ''.concat(e.newValue).concat(es);
            Us(t).setAttribute('id', i);
          },
        },
        Gs = {
          removed: function (t) {
            zs.call(this, 'value', t), (Us(t).value = 'on');
          },
          fallback: function (t, e) {
            qs.call(this, 'value', t, e);
          },
        },
        Qs = {
          removed: function (t) {
            Us(t).checked = !1;
          },
          fallback: function (t) {
            Us(t).checked = !0;
          },
        },
        Xs = {
          removed: function (t) {
            Us(t).removeAttribute('aria-label');
          },
          fallback: function (t, e) {
            Us(t).setAttribute('aria-label', e.newValue);
          },
        };
      function Zs(t) {
        Us(t).addEventListener('keydown', function (e) {
          t.busy && e.keyCode === Y.SPACE && e.preventDefault();
        }),
          navigator.userAgent.toLowerCase().indexOf('firefox') > -1 &&
            Us(t).addEventListener('click', function (e) {
              t.busy && e.preventDefault();
            }),
          (function () {
            if (void 0 === ce)
              try {
                document.querySelector(':focus-within'), (ce = !0);
              } catch (t) {
                ce = !1;
              }
            return ce;
          })() ||
            (t._input.addEventListener('focus', () => t.classList.add('active')),
            t._input.addEventListener('blur', () => t.classList.remove('active')));
      }
      var tr = J('aui-toggle', {
        template: he()(
          '<input type="checkbox" class="aui-toggle-input assistive">',
          '<span class="aui-toggle-view">',
          '<span class="aui-toggle-tick aui-icon aui-icon-small aui-iconfont-success"></span>',
          '<span class="aui-toggle-cross aui-icon aui-icon-small aui-iconfont-close-dialog"></span>',
          '</span>'
        ),
        created: function (t) {
          Us(t),
            Vs(t).setAttribute('size', qt.SMALL.name),
            r(Us(t)).tooltip({
              title: function () {
                return this.checked
                  ? this.getAttribute('tooltip-on')
                  : this.getAttribute('tooltip-off');
              },
              gravity: 's',
              hoverable: !1,
            }),
            Zs(t),
            t.hasAttribute('checked') && Us(t).setAttribute('checked', ''),
            (t._canFireEventsNow = !0);
        },
        attached: function (t) {
          ts(t).attributeExists('label');
        },
        events: {
          click: function (t, e) {
            var i = Us(t);
            t.disabled ||
              t.busy ||
              e.target === i ||
              ((i.checked = !i.checked),
              (function (t) {
                t._canFireEventsNow && t.dispatchEvent(new ft('change', {bubbles: !0}));
              })(t)),
              Bs(t, 'checked', i.checked);
          },
        },
        attributes: {
          id: Js,
          checked: Qs,
          disabled: Ys('disabled'),
          form: Ks,
          name: Ys('name'),
          value: Gs,
          'tooltip-on': {
            value: Ht.getText('aui.toggle.on'),
            fallback: function (t, e) {
              Us(t).setAttribute('tooltip-on', e.newValue || Ht.getText('aui.toggle.on'));
            },
          },
          'tooltip-off': {
            value: Ht.getText('aui.toggle.off'),
            fallback: function (t, e) {
              Us(t).setAttribute(
                'tooltip-off',
                e.newValue || Ht.getText('aui.toggle.off')
              );
            },
          },
          label: Xs,
        },
        prototype: {
          focus: function () {
            return Us(this).focus(), this;
          },
          get checked() {
            return Us(this).checked;
          },
          set checked(t) {
            Us(this).checked !== t && ((Us(this).checked = t), Bs(this, 'checked', t));
          },
          get disabled() {
            return Us(this).disabled;
          },
          set disabled(t) {
            return Bs(this, 'disabled', t);
          },
          get form() {
            return document.getElementById(this._formId);
          },
          set form(t) {
            return Ks.fallback.call(this, this, {newValue: t || null}), this.form;
          },
          get name() {
            return Us(this).name;
          },
          set name(t) {
            return this.setAttribute('name', t), t;
          },
          get value() {
            return Us(this).value;
          },
          set value(t) {
            let e = null === t ? '' : t;
            return this.setAttribute('value', e), e;
          },
          get busy() {
            return 'true' === Us(this).getAttribute('aria-busy');
          },
          set busy(t) {
            const e = Us(this),
              i = Vs(this);
            return (
              Bs(this, 'busy', t),
              t
                ? (e.setAttribute('aria-busy', 'true'),
                  (e.indeterminate = !0),
                  this.checked
                    ? (e.classList.add('indeterminate-checked'),
                      r(this.querySelector('.aui-toggle-tick')).append(i))
                    : r(this.querySelector('.aui-toggle-cross')).append(i))
                : (e.classList.remove('indeterminate-checked'),
                  (e.indeterminate = !1),
                  e.removeAttribute('aria-busy'),
                  i.parentNode && i.parentNode.removeChild(this._spinner)),
              (function (t, e) {
                t.id &&
                  Array.prototype.forEach.call(
                    document.querySelectorAll('aui-label[for="'.concat(t.id, '"]')),
                    function (t) {
                      t.disabled = e;
                    }
                  );
              })(this, !!t),
              t
            );
          },
        },
      });
      function er(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function ir(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? er(Object(i), !0).forEach(function (e) {
                nr(t, e, i[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : er(Object(i)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
              });
        }
        return t;
      }
      function nr(t, e, i) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = i),
          t
        );
      }
      const sr = 1e3;
      function rr(t, e) {
        Z(t, function (i) {
          i.setAttribute('aria-expanded', 'false'),
            e.setAttribute('aria-expanded', t.open);
        }),
          X(t, e);
      }
      function ar(t, e) {
        if (t._auiAlignment) t._auiAlignment.changeTarget(e), t._auiAlignment.enable();
        else {
          let i = {
            overflowContainer:
              'viewport' === t.getAttribute('contained-by') ? 'viewport' : 'window',
            positionFixed: !1,
            eventsEnabled: !0,
          };
          (i = ir(ir({}, i), {
            onCreate: () => {
              br(t) && dt().enter(r(t), r(e));
            },
            onEvents: {
              enabled: () => {
                br(t) && dt().enter(r(t));
              },
              disabled: () => {
                br(t) && dt().exit(r(t));
              },
            },
          })),
            (t._auiAlignment = new Mi(t, e, i));
        }
      }
      function or(t) {
        t._auiAlignment && (t._auiAlignment.destroy(), delete t._auiAlignment);
      }
      function lr(t, e) {
        var i = e.currentTarget;
        i && (rr(t, i), ar(t, i)),
          t.open || (t.open = !0),
          clearTimeout(t._closingTimeout);
      }
      function cr() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return function (e) {
          e.open &&
            !Nt(e).isPersistent() &&
            (clearTimeout(e._closingTimeout),
            (e._closingTimeout = setTimeout(function () {
              (function (t) {
                return G(t).get('mouse-inside') || t.contains(document.activeElement);
              })(e) || (e.open = !1),
                (e._closingTimeout = null);
            }, t)));
        };
      }
      const ur = {
        click(t, e) {
          t.open && !Nt(t).isPersistent()
            ? (t.open = !1)
            : (rr(t, e.currentTarget), (t.open = !0)),
            clearTimeout(t._closingTimeout);
        },
        mouseenter: lr,
        mouseleave: cr(sr),
        focus: lr,
        blur: cr(0),
      };
      function dr(t) {
        var e = t.currentTarget;
        G(e).set('mouse-inside', !0), e.message({type: 'mouseenter'});
      }
      function hr(t) {
        var e = t.currentTarget;
        G(e).set('mouse-inside', !1), e.message({type: 'mouseleave'});
      }
      function pr(t) {
        var e = t.currentTarget;
        'hover' === e.respondsTo && cr(sr)(e);
      }
      function fr(t) {
        G(t).set('mouse-inside', void 0),
          t.removeEventListener('mouseenter', dr),
          t.removeEventListener('mouseleave', hr),
          t.removeEventListener('blur', pr),
          'hover' === t.respondsTo &&
            (G(t).set('mouse-inside', !1),
            t.addEventListener('mouseenter', dr),
            t.addEventListener('mouseleave', hr),
            t.addEventListener('blur', pr));
      }
      function gr(t, e) {
        return ''.concat(t, '.nested-layer-').concat(e);
      }
      function mr(t) {
        return Nt(t).show(), !0 === Nt(t).isVisible();
      }
      function vr(t) {
        return Nt(t).hide(), !1 === Nt(t).isVisible();
      }
      function br(t) {
        return 'hover' !== t.respondsTo;
      }
      function yr(t) {
        t.__initialised ||
          (Nt(t),
          r(t).on({
            [''.concat(gt, 'show')]: function () {
              const t = this;
              !(function (t) {
                let e = r(t);
                const i = t.id,
                  n = t => e.find(Q(t.target)).length < 1;
                r(document)
                  .on(gr('aui-layer-show', i), t => {
                    n(t) || e.attr('persistent', '');
                  })
                  .on(gr('aui-layer-hide', i), t => {
                    n(t) || e.removeAttr('persistent');
                  })
                  .on(gr('select2-opening', i), () => {
                    e.attr('persistent', '');
                  })
                  .on(gr('select2-close', i), () => {
                    setTimeout(() => {
                      e.removeAttr('persistent');
                    }, 150);
                  });
              })(t),
                Z(t, function (e) {
                  ar(t, e), e.setAttribute('aria-expanded', 'true');
                });
            },
            [''.concat(gt, 'hide')]: function () {
              const t = this;
              !(function (t) {
                const e = t.id;
                r(document)
                  .off(gr('aui-layer-hide', e))
                  .off(gr('aui-layer-show', e))
                  .off(gr('select2-opening', e))
                  .off(gr('select2-close', e));
              })(t.id),
                t.ownerDocument.body.contains(t)
                  ? (function (t) {
                      t._auiAlignment && t._auiAlignment.disable();
                    })(t)
                  : or(t),
                Z(t, function (t) {
                  t.setAttribute('aria-expanded', 'false');
                }),
                X(t, null);
            },
          }),
          (t.__initialised = !0));
      }
      const wr = {
          attribute: 'responds-to',
          values: ['toggle', 'hover'],
          missingDefault: 'toggle',
          invalidDefault: 'toggle',
        },
        _r = J('aui-inline-dialog', {
          prototype: {
            get open() {
              return Nt(this).isVisible();
            },
            set open(t) {
              (this.__propUpdate = !0), t ? mr(this) : vr(this);
            },
            get persistent() {
              return this.hasAttribute('persistent');
            },
            set persistent(t) {
              Ws.setBooleanAttribute(this, 'persistent', t);
            },
            get respondsTo() {
              var t = wr.attribute;
              return Ws.computeEnumValue(wr, this.getAttribute(t));
            },
            set respondsTo(t) {
              const e = this.respondsTo;
              Ws.setEnumAttribute(this, wr, t), e !== this.respondsTo && fr(this);
            },
            message: function (t) {
              return (
                (function (t, e) {
                  var i = {
                    toggle: ['click'],
                    hover: ['mouseenter', 'mouseleave', 'focus', 'blur'],
                  }[t.respondsTo];
                  i && i.indexOf(e.type) > -1 && ur[e.type](t, e);
                })(this, t),
                this
              );
            },
          },
          attributes: {
            open: function (t, e) {
              if ((yr(t), t.__propUpdate)) delete t.__propUpdate;
              else {
                if ('created' === e.type) {
                  mr(t) || Bs(t, 'open', !1);
                }
                if ('removed' === e.type) {
                  vr(t) || Bs(t, 'open', !0);
                }
              }
            },
            'responds-to': function (t, e) {
              Ws.computeEnumValue(wr, e.oldValue) !==
                Ws.computeEnumValue(wr, e.newValue) && fr(t);
            },
          },
          created: yr,
          attached: function (t) {
            ts(t).attributeExists('id'),
              t.setAttribute('tabindex', 0),
              t.setAttribute('role', 'dialog'),
              Z(t, function (e) {
                e.setAttribute('aria-expanded', t.open);
              }),
              tt(t, function (t) {
                t.setAttribute('aria-haspopup', 'true');
              }),
              fr(t);
          },
          detached: function (t) {
            Li(t).then(() => {
              or(t),
                tt(t, function (t) {
                  t.removeAttribute('aria-haspopup'), t.removeAttribute('aria-expanded');
                });
            });
          },
          template: function (t) {
            r('<div class="aui-inline-dialog-contents"></div>')
              .append(t.childNodes)
              .appendTo(t);
          },
        });
      K('aui/inline-dialog2', _r), o('InlineDialog2', _r);
      var xr = _r;
      function kr(t) {
        if (((this.$el = r(t).closest('.aui-nav')), this.$el.length > 1))
          return this.$el.map(function (t, e) {
            return new kr(e);
          })[0];
        if (this.$el.data('aui-navigation')) return this.$el.data('aui-navigation');
        this.$el.data('aui-navigation', this),
          (this.$treeParent = this.$el.parent('li[aria-expanded]')),
          (this.$subtreeToggleIcon = this.$treeParent
            .children('.aui-nav-subtree-toggle')
            .children('span.aui-icon')),
          this.hideMoreItems(),
          this.$el
            .children('li:has(.aui-nav-selected)')
            .addClass('aui-nav-child-selected');
        var e = this.$el.children('.aui-nav-selected');
        e.parents('.aui-nav > [aria-expanded=false]')
          .add(e.filter('[aria-expanded=false]'))
          .each(function () {
            Cr(r(this).children('.aui-nav')).expand();
          });
        var i = this.$el.find('> li[aria-expanded] > .aui-nav-subtree-toggle');
        return (
          i.on('click', function () {
            Cr(r(this).siblings('.aui-nav')).toggle();
          }),
          i.each(function () {
            var t = r(this).parent('li[aria-expanded]'),
              e = r(this).find('.aui-icon'),
              i = 'true' === t.attr('aria-expanded');
            e.text(i ? Ht.getText('aui.words.collapse') : Ht.getText('aui.words.expand'));
          }),
          this
        );
      }
      (kr.prototype.isNested = function () {
        return 1 === this.$treeParent.length;
      }),
        (kr.prototype.isCollapsed = function () {
          return 'false' === this.$treeParent.attr('aria-expanded');
        }),
        (kr.prototype.expand = function () {
          return (
            this.$treeParent.attr('aria-expanded', 'true'),
            this.$subtreeToggleIcon
              .removeClass('aui-iconfont-collapsed')
              .addClass('aui-iconfont-expanded')
              .text(Ht.getText('aui.words.collapse')),
            this.hideMoreItems(),
            this
          );
        }),
        (kr.prototype.collapse = function () {
          return (
            this.$treeParent.attr('aria-expanded', 'false'),
            this.$subtreeToggleIcon
              .removeClass('aui-iconfont-expanded')
              .addClass('aui-iconfont-collapsed')
              .text(Ht.getText('aui.words.expand')),
            this
          );
        }),
        (kr.prototype.toggle = function () {
          return this.isCollapsed() ? this.expand() : this.collapse(), this;
        }),
        (kr.prototype.hideMoreItems = function () {
          if (this.$el.is('[data-more]') && !this.$el.is('[aria-expanded=false]')) {
            var t = this.$el.attr('data-more') || Ht.getText('aui.words.moreitem'),
              e = Math.abs(parseInt(this.$el.attr('data-more-limit'))) || 5,
              i = this.$el.children('li'),
              n = i.length <= e + 1,
              s = i.filter('.aui-nav-selected').length,
              a = i.filter('.aui-nav-more').length;
            if (n || s || a) return this;
            r('<li>', {class: 'aui-nav-more'})
              .append(
                r('<a>', {
                  href: '#',
                  class: 'aui-nav-item',
                  text: t,
                  click: function (t) {
                    t.preventDefault(), r(this).parent().remove();
                  },
                })
              )
              .insertAfter(i.eq(e - 1));
          }
          return this;
        });
      const Cr = ht('navigation', kr),
        Er = J('aui-nav', {
          type: J.type.CLASSNAME,
          attached: function (t) {
            new kr(t);
          },
          detached: function (t) {
            r(t).removeData();
          },
        });
      o('navigation', Cr);
      var Tr = Cr;
      i(69);
      const Dr = 'aui-progress-indicator-after-update',
        Sr = 'aui-progress-indicator-before-update',
        Ar = 'transitionend webkitTransitionEnd';
      function Ir(t, e, i) {
        let {currentProgress: n, value: s} = i;
        const a = r(t),
          o = r(e);
        'number' == typeof s &&
          s <= 1 &&
          s >= 0 &&
          (o.trigger(Sr, [n, s]),
          a.one(Ar, function () {
            o.trigger(Dr, [n, s]);
          }),
          (function (t, e, i) {
            H(t), t.css('width', 100 * i + '%'), e.attr('data-value', i);
          })(a, o, s));
      }
      function Or(t) {
        var e = r(t).first(),
          i = e.children('.aui-progress-indicator-value');
        e.removeAttr('data-value'), H(e), i.css('width', '');
      }
      const Nr = {indeterminate: !1, max: 1, val: 0};
      function Mr(t) {
        return Object(zt.isNumber)(t) && Object(zt.isFinite)(t) && !Object(zt.isNaN)(t);
      }
      function Pr(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const i = parseFloat(t);
        return Mr(i) ? i : Number(e);
      }
      function Lr(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return Number(parseFloat(t).toFixed(e));
      }
      function Rr(t) {
        const {val: e, max: i} = t,
          n = (function (t) {
            return t > 0 ? t : Nr.max;
          })(i),
          s = (function (t, e) {
            return Math.max(0, Math.min(t, e));
          })(e, n),
          r = Lr(s / n, 6);
        return {max: n, val: s, valAsFraction: r, valAsPercent: Lr(100 * r, 2)};
      }
      function $r(t) {
        const {val: e, valAsFraction: i, max: n} = Rr(t._data),
          s = t.querySelector('.aui-progress-indicator'),
          r = s.getAttribute('data-value');
        t.indeterminate
          ? (s.removeAttribute('aria-valuenow'), Or(s))
          : (s.setAttribute('aria-valuenow', e),
            s.setAttribute('aria-valuemax', n),
            Ir(s.querySelector('.aui-progress-indicator-value'), s, {
              currentProgress: r,
              value: i,
            }));
      }
      function jr(t, e) {
        (t._data.val = Pr(e.newValue, e.oldValue || Nr.val)), $r(t);
      }
      function Fr(t, e) {
        (t._data.max = Pr(e.newValue, e.oldValue || Nr.max)), $r(t);
      }
      const Hr = J('aui-progressbar', {
          template(t) {
            (t._data.max = Pr(t.getAttribute('max'), Nr.max)),
              (t._data.val = Pr(t.getAttribute('value'), Nr.val)),
              (t._data.indeterminate = t.hasAttribute('indeterminate'));
            const {val: e, max: i, valAsFraction: n, valAsPercent: s} = Rr(t._data),
              r = t._data.indeterminate ? '' : 'data-value="'.concat(n, '"');
            t.innerHTML = '<div class="aui-progress-indicator"\n         '
              .concat(
                r,
                '\n         role="progressbar"\n         aria-valuemin="0"\n         aria-valuenow="'
              )
              .concat(e, '"\n         aria-valuemax="')
              .concat(
                i,
                '"\n         tabindex="0"\n     >\n        <span class="aui-progress-indicator-value" style="width: '
              )
              .concat(s, '%"></span>\n    </div>');
          },
          attached(t) {
            $r(t);
          },
          attributes: {
            indeterminate: {
              created: function (t) {
                t.indeterminate = !0;
              },
              removed: function (t) {
                t.indeterminate = !1;
              },
            },
            value: {
              value: Nr.val,
              fallback: function (t, e) {
                if (t._updating) return !1;
                jr(t, e);
              },
            },
            max: {
              value: Nr.max,
              fallback: function (t, e) {
                if (t._updating) return !1;
                Fr(t, e);
              },
            },
          },
          prototype: {
            get _data() {
              return this.__data || (this._data = Object(zt.defaults)({}, Nr));
            },
            set _data(t) {
              return (this.__data = t);
            },
            get indeterminate() {
              return this._data.indeterminate;
            },
            set indeterminate(t) {
              (this._data.indeterminate = !!t), $r(this);
            },
            get value() {
              const {val: t} = Rr(this._data);
              return t;
            },
            set value(t) {
              if (!Mr(t)) return !1;
              const e = {newValue: Lr(t, 6)};
              (this._updating = !0),
                this.setAttribute('value', e.newValue),
                (this._updating = !1),
                jr(this, e);
            },
            get max() {
              const {max: t} = Rr(this._data);
              return t;
            },
            set max(t) {
              if (!Mr(t)) return !1;
              const e = {newValue: Lr(t, 6)};
              (this._updating = !0),
                this.setAttribute('max', e.newValue),
                (this._updating = !1),
                Fr(this, e);
            },
          },
        }),
        Br = {
          update: N(
            function (t, e) {
              if ('string' == typeof t) {
                let e = document.getElementById(t);
                e && (t = e);
              }
              var i = r(t).first(),
                n = i.children('.aui-progress-indicator-value'),
                s = i.attr('data-value'),
                a = !s,
                o = parseFloat(s) || 0,
                l = s && o === e;
              l && (l = o === 100 * (parseFloat(n.get(0).style.width) || 0));
              if (!l)
                return (
                  a && n.css('width', 0), Ir(n, i, {currentProgress: o, value: e}), i
                );
            },
            'AJS.progressBars.update',
            {
              sinceVersion: '7.7.0',
              removeInVersion: '10.0.0',
              extraInfo: 'Use the <aui-progressbar> web component instead',
            }
          ),
          setIndeterminate: N(Or, 'AJS.progressBars.setIndeterminate', {
            sinceVersion: '7.7.0',
            removeInVersion: '10.0.0',
            extraInfo: 'Use the <aui-progressbar> web component instead',
          }),
        };
      o('progressBars', Br);
      var Wr = Br,
        Ur = (i(70), i(71), {sortMultiSortKey: '', headers: {}, debug: !1, tabIndex: !1});
      function Vr(t) {
        var e = Ur;
        t.find('th').each(function (t, i) {
          var n = r(i);
          (e.headers[t] = {}),
            n.hasClass('aui-table-column-unsortable')
              ? (e.headers[t].sorter = !1)
              : (n.attr('tabindex', '0'),
                n.wrapInner("<span class='aui-table-header-content'/>"),
                n.hasClass('aui-table-column-issue-key') &&
                  (e.headers[t].sorter = 'issue-key'));
        }),
          t.tablesorter(e);
      }
      var zr = {
        setup: function () {
          r.tablesorter.addParser({
            id: 'issue-key',
            is: function () {
              return !1;
            },
            format: function (t) {
              var e = t.split('-'),
                i = e[0],
                n = e[1],
                s = (i + '..........').slice(0, '..........'.length);
              return (s += ('000000' + n).slice(-'000000'.length));
            },
            type: 'text',
          }),
            r.tablesorter.addParser({
              id: 'textSortAttributeParser',
              is: function (t, e, i) {
                return (
                  i.hasAttribute('data-sort-value') &&
                  (!i.hasAttribute('data-sort-type') ||
                    'text' === i.getAttribute('data-sort-type'))
                );
              },
              format: function (t, e, i) {
                return i.getAttribute('data-sort-value');
              },
              type: 'text',
            }),
            r.tablesorter.addParser({
              id: 'numericSortAttributeParser',
              is: function (t, e, i) {
                return (
                  'numeric' === i.getAttribute('data-sort-type') &&
                  i.hasAttribute('data-sort-value')
                );
              },
              format: function (t, e, i) {
                return i.getAttribute('data-sort-value');
              },
              type: 'numeric',
            }),
            r('.aui-table-sortable').each(function () {
              Vr(r(this));
            });
        },
        setTableSortable: function (t) {
          Vr(t);
        },
      };
      r(zr.setup), o('tablessortable', zr);
      function qr(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
        var i = r(t),
          n = e || !1;
        i.each(function () {
          var t = r(this);
          t.attr('id') || t.attr('id', Hi(n));
        });
      }
      o('_addID', qr);
      var Yr = qr;
      function Kr(t) {
        return (t = r(t)).prop('scrollWidth') > t.prop('clientWidth');
      }
      o('isClipped', Kr);
      var Jr = Kr,
        Gr = window.skateTemplateHtml,
        Qr = '_internal-aui-tabs-',
        Xr =
          '.aui-tabs.horizontal-tabs[data-aui-responsive]:not([data-aui-responsive="false"]), aui-tabs[responsive]:not([responsive="false"])';
      function Zr(t) {
        let e = r(t),
          i = String(e.attr('href') || '').trim();
        return 0 === i.indexOf('#') ? i.substr(1) : null;
      }
      function ta(t) {
        let e = Zr(t);
        return e ? document.getElementById(e) : null;
      }
      var ea = {
        totalTabsWidth: function (t, e) {
          var i = this.totalVisibleTabWidth(t),
            n = 0;
          return (
            e.find('li').each(function (t, e) {
              n += parseInt(e.getAttribute('data-aui-tab-width'));
            }),
            i + n
          );
        },
        totalVisibleTabWidth: function (t) {
          var e = 0;
          return (
            t.each(function (t, i) {
              e += r(i).outerWidth();
            }),
            e
          );
        },
        removeResponsiveDropdown: function (t, e) {
          t.remove(), e.remove();
        },
        createResponsiveDropdownTrigger: function (t, e) {
          var i =
            '<li class="menu-item aui-tabs-responsive-trigger-item">\n            <a\n                class="aui-dropdown2-trigger aui-tabs-responsive-trigger aui-dropdown2-trigger-arrowless"\n                id="aui-tabs-responsive-trigger-'
              .concat(
                e,
                '"\n                aria-haspopup="true"\n                aria-controls="aui-tabs-responsive-dropdown-'
              )
              .concat(e, '"\n                href="#aui-tabs-responsive-dropdown-')
              .concat(e, '">...</a>\n            </li>');
          return t.append(i), t.find('.aui-tabs-responsive-trigger-item');
        },
        createResponsiveDropdown: function (t, e) {
          var i =
            '<div class="aui-dropdown2 aui-tabs-responsive-dropdown" id="aui-tabs-responsive-dropdown-' +
            e +
            '"><ul></ul></div>';
          return t.append(i), t.find('#aui-tabs-responsive-dropdown-' + e);
        },
        findNewVisibleTabs: function (t, e, i) {
          function n(t, e, i) {
            return t + e <= i;
          }
          for (var s = 0, a = 0; n(s, i, e) && a < t.length; a++) {
            s += r(t[a]).outerWidth(!0);
          }
          return t.slice(0, a - 1);
        },
        moveVisibleTabs: function (t, e, i) {
          for (
            var n = i.find('a').attr('aria-controls'),
              s = r('#' + n),
              a = this.findNewVisibleTabs(t, e.outerWidth(), i.parent().outerWidth(!0)),
              o = a.length - 1,
              l = t.length - 1;
            l >= o;
            l--
          ) {
            var c = r(t[l]);
            this.moveTabToResponsiveDropdown(c, s, i);
          }
          return r(a);
        },
        moveTabToResponsiveDropdown: function (t, e, i) {
          var n = t.find('a');
          t.attr('data-aui-tab-width', t.outerWidth(!0)),
            n.addClass('aui-dropdown2-radio aui-tabs-responsive-item'),
            t.hasClass('active-tab') &&
              (n.addClass('aui-dropdown2-checked'), i.addClass('active-tab')),
            e.find('ul').prepend(t);
        },
        moveInvisibleTabs: function (t, e, i) {
          function n(t) {
            return t > 0;
          }
          for (var s = 0; n(e) && s < t.length; s++) {
            var a = r(t[s]),
              o = parseInt(a.attr('data-aui-tab-width'), 10);
            o < e && this.moveTabOutOfDropdown(a, i), (e -= o);
          }
        },
        moveTabOutOfDropdown: function (t, e) {
          t.find('a').hasClass('aui-dropdown2-checked') &&
            (t.addClass('active-tab'), e.removeClass('active-tab')),
            t
              .children('a')
              .removeClass(
                'aui-dropdown2-radio aui-tabs-responsive-item aui-dropdown2-checked'
              ),
            e.before(t);
        },
      };
      function ia(t) {
        var e = r(t);
        if (!e.hasClass('aui-tabs-responsive-trigger')) {
          var i = ta(e);
          if (i) {
            var n = r(i);
            n.addClass('active-pane').siblings('.tabs-pane').removeClass('active-pane');
            var s = e
                .parents('.aui-tabs')
                .find('.aui-tabs-responsive-trigger-item a')
                .attr('aria-controls'),
              a = r(document.getElementById(s));
            if (
              (a
                .find('li a')
                .attr('aria-checked', !1)
                .removeClass('checked aui-dropdown2-checked'),
              a.find('li').removeClass('active-tab'),
              e
                .parent('li.menu-item')
                .addClass('active-tab')
                .siblings('.menu-item')
                .removeClass('active-tab'),
              e.hasClass('aui-tabs-responsive-item'))
            ) {
              var o = n
                .parent('.aui-tabs')
                .find('li.menu-item:not(.aui-tabs-responsive-trigger-item)');
              o.removeClass('active-tab'),
                o.find('a').removeClass('checked').removeAttr('aria-checked');
            }
            e.hasClass('aui-tabs-responsive-item') &&
              n
                .parent('.aui-tabs')
                .find('li.menu-item.aui-tabs-responsive-trigger-item')
                .addClass('active-tab'),
              e.closest('.tabs-menu').find('a').attr('aria-selected', 'false'),
              e.attr('aria-selected', 'true'),
              e.trigger('tabSelect', {tab: e, pane: n});
          } else
            f(
              'Cannot switch to tab panel because it does not exist. Check whether the tab link href is correct.',
              t
            );
        }
      }
      function na(t) {
        return (
          void 0 !== t.attr('data-aui-persist') && 'false' !== t.attr('data-aui-persist')
        );
      }
      function sa(t) {
        var e = t.attr('id'),
          i = t.attr('data-aui-persist');
        return Qr + (e || '') + (i && 'true' !== i ? '-' + i : '');
      }
      function ra(t) {
        da.change(r(t.target).closest('a')), t && t.preventDefault();
      }
      function aa(t) {
        t.forEach(function (t, e) {
          !(function (t, e) {
            var i = r(t),
              n = i.find('.tabs-menu').first(),
              s = n.find('li:not(.aui-tabs-responsive-trigger-item)'),
              a = n.find('.aui-tabs-responsive-trigger').parent(),
              o = a.find('a'),
              l = o.attr('aria-controls'),
              c = r(document.getElementById(l)).attr('aria-checked', !1),
              u = c.length > 0,
              d = ea.totalTabsWidth(s, c) > i.outerWidth();
            if (
              (!u &&
                d &&
                ((a = ea.createResponsiveDropdownTrigger(n, e)),
                (c = ea.createResponsiveDropdown(i, e))),
              o.attr('aria-controls', 'aui-tabs-responsive-dropdown-' + e),
              o.attr('id', 'aui-tabs-responsive-trigger-' + e),
              o.attr('href', '#aui-tabs-responsive-trigger-' + e),
              c.attr('id', 'aui-tabs-responsive-dropdown-' + e),
              d)
            ) {
              var h = ea.moveVisibleTabs(s.toArray(), i, a),
                p = ea.totalVisibleTabWidth(h),
                f = i.outerWidth() - p - a.outerWidth(!0);
              if (f > 0) {
                var g = c.find('li');
                ea.moveInvisibleTabs(g.toArray(), f, a);
              }
              i.hasClass('aui-tabs-disabled') || c.on('click', 'a', ra),
                n.is(':visible') && n.hide().show();
            }
            u &&
              !d &&
              (c.find('li').each(function () {
                ea.moveTabOutOfDropdown(r(this), a);
              }),
              ea.removeResponsiveDropdown(c, a));
          })(t, e);
        });
      }
      function oa() {
        return r(Xr).toArray();
      }
      function la(t) {
        var e = r(t);
        if ((t.setAttribute('role', 'application'), !e.data('aui-tab-events-bound'))) {
          var i = e.children('ul.tabs-menu');
          i.attr('role', 'tablist'),
            i.children('li').attr('role', 'presentation'),
            i.find('> .menu-item a').each(function () {
              !(function (t) {
                var e = r(t),
                  i = ta(e);
                Zr(t) ||
                  f(
                    'A tab link must use an anchor link (e.g., <a href="#a-valid-id"></a>) to work correctly.',
                    t
                  ),
                  i
                    ? (Yr(e),
                      e.attr('role', 'tab'),
                      r(i).attr('aria-labelledby', e.attr('id')),
                      e.parent().hasClass('active-tab')
                        ? e.attr('aria-selected', 'true')
                        : e.attr('aria-selected', 'false'))
                    : p(
                        "A tab panel could not be found with the tab link's configured href. Check whether the tab link href is correct.",
                        t
                      );
              })(this);
            }),
            i.on('click', 'a', ra),
            e.data('aui-tab-events-bound', !0),
            (function (t) {
              [].slice.call(t.querySelectorAll('.tabs-pane')).forEach(ua);
            })(t);
        }
      }
      function ca() {
        var t = r('.aui-tabs:not(.aui-tabs-disabled)');
        t.each(function () {
          la(this);
        }),
          (function (t) {
            for (var e = 0, i = t.length; e < i; e++) {
              var n = t.eq(e),
                s = t.get(e);
              if (na(n) && window.localStorage)
                if (n.attr('id')) {
                  var r = window.localStorage.getItem(sa(n));
                  if (r) {
                    var a = s.querySelector('a[href$="'.concat(r, '"]'));
                    a && ia(a);
                  }
                } else
                  p(
                    'A tab group must specify an id attribute if it specifies data-aui-persist.'
                  );
            }
          })(t);
      }
      function ua(t) {
        t.setAttribute('role', 'tabpanel');
      }
      var da = {
        setup: function () {
          !(function () {
            const t = Object(zt.debounce)(aa, 200);
            t(oa()), r(window).on('resize', () => t(oa()));
          })(),
            ca(),
            r('.aui-tabs.vertical-tabs')
              .find('a')
              .each(function () {
                var t = r(this);
                t.attr('title') || (Jr(t) && t.attr('title', t.text()));
              });
        },
        change: function (t) {
          var e = r(t),
            i = e.closest('.aui-tabs');
          ia(e),
            na(i) &&
              window.localStorage &&
              (function (t) {
                var e = t.closest('.aui-tabs');
                if (e.attr('id')) {
                  var i = Zr(t);
                  i && window.localStorage.setItem(sa(e), '#' + i);
                } else
                  p(
                    'A tab group must specify an id attribute if it specifies data-aui-persist.'
                  );
              })(e);
        },
      };
      r(da.setup);
      const ha = J('aui-tabs', {
          created: function (t) {
            r(t).addClass('aui-tabs horizontal-tabs'), J.init(t), la(t);
          },
          template: Gr(
            '<ul class="tabs-menu">',
            '<content select="li[is=aui-tabs-tab]"></content>',
            '</ul>',
            '<content select="aui-tabs-pane"></content>'
          ),
          prototype: {
            select: function (t) {
              var e = r(
                (function (t) {
                  return t.querySelectorAll('aui-tabs-pane');
                })(this)
              ).index(t);
              return (
                e > -1 &&
                  da.change(
                    (function (t) {
                      return t.querySelectorAll('li[is=aui-tabs-tab]');
                    })(this)[e].children[0]
                  ),
                this
              );
            },
          },
        }),
        pa = J('aui-tabs-tab', {
          extends: 'li',
          created: function (t) {
            r(t).addClass('menu-item');
          },
          template: Gr(
            '<a href="#">',
            '<strong>',
            '<content></content>',
            '</strong>',
            '</a>'
          ),
        }),
        fa = J('aui-tabs-pane', {
          attached: function (t) {
            var e = r(
                (function (t) {
                  return r(t).closest('aui-tabs').get(0);
                })(t)
              ),
              i = r(t),
              n = e.find('aui-tabs-pane').index(i),
              s = new pa(),
              a = r(s);
            i.addClass('tabs-pane'),
              s.firstChild.setAttribute('href', '#' + t.id),
              (Gr.wrap(s).textContent = i.attr('title')),
              0 === n && i.addClass('active-pane'),
              i.hasClass('active-pane') && a.addClass('active-tab'),
              i.siblings('ul').append(s);
          },
          template: Gr('<content></content>'),
        });
      o('tabs', da);
      i(72), i(73), i(74);
      const ga = '_aui-form-notification-initialised',
        ma = 'data-aui-notification-wait',
        va = 'data-aui-notification-info',
        ba = 'data-aui-notification-error',
        ya = [ba, 'data-aui-notification-success', ma, va];
      function wa(t) {
        _a(t) ||
          (!(function (t) {
            t.addClass(ga), xa(t);
          })(t),
          Ea(t));
      }
      function _a(t) {
        return t.hasClass(ga);
      }
      function xa(t, e) {
        (e = e || ka(t)),
          Ca(t) === va &&
            t.after(
              (function (t) {
                if (t.length > 1) {
                  let e = t.map(t => '<li>'.concat(t, '</li>')).join('');
                  return '<div class="description"><ul>'.concat(e, '</ul></div>');
                }
                return '<div class="description">'.concat(t, '</div>');
              })(e)
            );
      }
      function ka(t) {
        var e = Ca(t),
          i = e ? t.attr(e) : '';
        return '' === i
          ? i
          : (function (t) {
              var e;
              try {
                e = JSON.parse(t);
              } catch (i) {
                e = [t];
              }
              return e;
            })(i);
      }
      function Ca(t) {
        var e;
        return (
          ya.some(function (i) {
            if (t.is('[' + i + ']')) return (e = i), !0;
          }),
          e
        );
      }
      function Ea(t) {
        const e = r(t);
        if (!_a(e)) return;
        const i = Ca(e);
        Sa(e, i === ma);
        const n = ka(e);
        n && i === ba
          ? Ta(e, n)
          : (function (t) {
              return t.constructor.prototype.hasOwnProperty('jquery');
            })(t) ||
            t.hasAttribute(ba) ||
            e.parent().find('.error').remove();
      }
      function Ta(t, e) {
        let i = Da(t, 'error');
        i.length > 0 && i.remove(),
          t.after(
            (function (t) {
              let e = t
                .map(t =>
                  '<li><span class="aui-icon aui-icon-small aui-iconfont-error aui-icon-notification">'
                    .concat(t, '</span>')
                    .concat(t, '</li>')
                )
                .join('');
              return '<div class="error"><ul>'.concat(e, '</ul></div>');
            })(e)
          );
      }
      function Da(t, e) {
        return t.parent().find('.'.concat(e));
      }
      function Sa(t, e) {
        e &&
        !(function (t) {
          return t.next('aui-spinner').length > 0;
        })(t)
          ? t.after(
              '<aui-spinner class="form-notification-spinner" size="small"></aui-spinner>'
            )
          : t.parent().find('aui-spinner').remove();
      }
      const Aa = I('data-aui-notification-field attribute', {
        deprecationType: 'ATTRIBUTE',
        alternativeName: 'HTML markup',
      });
      J('data-aui-notification-field', {
        attached: function (t) {
          Aa(), wa(r(t));
        },
        attributes: (function () {
          const t = {};
          return (
            ya.forEach(function (e) {
              t[e] = Ea;
            }),
            t
          );
        })(),
        type: J.type.ATTRIBUTE,
      }),
        K('aui/form-notification');
      var Ia = ['displayfield', 'watchfield', 'when', 'novalidate', 'state'],
        Oa = [];
      var Na = {
        register: function (t, e) {
          var i;
          if ('string' == typeof t) i = t;
          else {
            var n = (function (t) {
              var e = !1;
              return (
                t.some(function (t) {
                  var i = -1 !== r.inArray(t, Ia);
                  return i && (e = t), i;
                }),
                e
              );
            })(t);
            if (n)
              return (
                p(
                  'Validators cannot be registered with the argument "' +
                    n +
                    '", as it is a reserved argument.'
                ),
                !1
              );
            i = '[data-aui-validation-' + t.join('],[data-aui-validation-') + ']';
          }
          var s = {validatorFunction: e, validatorTrigger: i};
          return Oa.push(s), s;
        },
        validators: function () {
          return Oa;
        },
      };
      K('aui/form-validation/validator-register', Na);
      var Ma = Na;
      function Pa(t) {
        var e = t.el.value.length;
        let i = 0 === e;
        var n = parseInt(t.args('minlength'), 10),
          s = parseInt(t.args('maxlength'), 10);
        if (n && s && n === s && !i && e !== n) {
          const e = Ha('exactlength', t.args, [n]);
          t.invalidate(e);
        } else if (n && e < n && !i) {
          const e = Ha('minlength', t.args);
          t.invalidate(e);
        } else if (s && e > s) {
          const e = Ha('maxlength', t.args);
          t.invalidate(e);
        } else t.validate();
      }
      function La(t) {
        return 'password' === t.getAttribute('type');
      }
      function Ra(t, e) {
        var i = t.match(e);
        return !!i && t === i[0];
      }
      function $a(t) {
        var e = Ha('pattern', t.args);
        Ra(t.el.value, new RegExp(t.args('pattern'))) ? t.validate() : t.invalidate(e);
      }
      function ja(t) {
        var e = Ha('required', t.args);
        t.el.value ? t.validate() : t.invalidate(e);
      }
      function Fa(t) {
        var e = Ha('validnumber', t.args),
          i = parseInt(t.el.value, 10);
        if (isNaN(i)) t.invalidate(e);
        else {
          var n = t.args('min'),
            s = t.args('max');
          n && i < parseInt(n, 10)
            ? t.invalidate(Ha('min', t.args))
            : s && i > parseInt(s, 10)
            ? t.invalidate(Ha('max', t.args))
            : t.validate();
        }
      }
      function Ha(t, e, i) {
        var n;
        n = void 0 !== Ht.keys ? Ht.keys['aui.validation.message.' + t] : Ba[t];
        var s = i;
        i || (s = [e(t)]);
        var r,
          a = e(t + '-msg');
        return (r = a ? [a].concat(s) : [n].concat(s)), AJS.format.apply(null, r);
      }
      Ma.register(['maxlength', 'minlength'], Pa),
        Ma.register('[maxlength],[minlength]', Pa),
        Ma.register(['matchingfield'], function (t) {
          var e = t.el.value,
            i = document.getElementById(t.args('matchingfield')),
            n = i.value,
            s = Ha('matchingfield', t.args, [e, n]);
          (La(t.el) || La(i)) && (s = Ha('matchingfield-novalue', t.args)),
            e && n && n !== e ? t.invalidate(s) : t.validate();
        }),
        Ma.register(['doesnotcontain'], function (t) {
          var e = Ha('doesnotcontain', t.args);
          -1 === t.el.value.indexOf(t.args('doesnotcontain'))
            ? t.validate()
            : t.invalidate(e);
        }),
        Ma.register(['pattern'], $a),
        Ma.register('[pattern]', $a),
        Ma.register(['required'], ja),
        Ma.register('[required]', ja),
        Ma.register(['min', 'max'], Fa),
        Ma.register('[min],[max]', Fa),
        Ma.register(['dateformat'], function (t) {
          var e = t.args('dateformat'),
            i = Ha('dateformat', t.args),
            n = {
              Y: '[0-9]{4}',
              y: '[0-9]{2}',
              m: '(0?[1-9]|10|11|12)',
              M: '[Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec]',
              D: '[Mon|Tue|Wed|Thu|Fri|Sat|Sun]',
              d: '([0-2]?[1-9]|10|20|30|31)',
            },
            s = '';
          e.split('').forEach(function (t) {
            var e = n.hasOwnProperty(t);
            s += e ? n[t] : t;
          });
          var r = new RegExp(s + '$', 'i');
          Ra(t.el.value, r) ? t.validate() : t.invalidate(i);
        }),
        Ma.register(['minchecked', 'maxchecked'], function (t) {
          var e = r(t.el).find(':checked').length,
            i = !t.args('minchecked') || e >= t.args('minchecked'),
            n = !t.args('maxchecked') || e <= t.args('maxchecked'),
            s = Ha('minchecked', t.args),
            a = Ha('maxchecked', t.args);
          i && n ? t.validate() : i ? n || t.invalidate(a) : t.invalidate(s);
        });
      var Ba = {
        minlength: Ht.getText('aui.validation.message.minlength'),
        maxlength: Ht.getText('aui.validation.message.maxlength'),
        exactlength: Ht.getText('aui.validation.message.exactlength'),
        matchingfield: Ht.getText('aui.validation.message.matchingfield'),
        'matchingfield-novalue': Ht.getText(
          'aui.validation.message.matchingfield-novalue'
        ),
        doesnotcontain: Ht.getText('aui.validation.message.doesnotcontain'),
        pattern: Ht.getText('aui.validation.message.pattern'),
        required: Ht.getText('aui.validation.message.required'),
        validnumber: Ht.getText('aui.validation.message.validnumber'),
        min: Ht.getText('aui.validation.message.min'),
        max: Ht.getText('aui.validation.message.max'),
        dateformat: Ht.getText('aui.validation.message.dateformat'),
        minchecked: Ht.getText('aui.validation.message.minchecked'),
        maxchecked: Ht.getText('aui.validation.message.maxchecked'),
      };
      K('aui/form-validation/basic-validators');
      const Wa = 'aui-validation-',
        Ua = 'data-aui-notification-',
        Va = 'aui-validation-state',
        za = 'invalid',
        qa = 'valid',
        Ya = 'validating',
        Ka = 'unvalidated',
        Ja = '_aui-form-validation-initialised',
        Ga = '_aui-internal-field-state-changed';
      function Qa(t) {
        (function (t) {
          return t.hasClass(Ja);
        })(t) ||
          (!(function (t) {
            t.addClass(Ja), xa(t);
          })(t),
          (function (t) {
            (function (t) {
              var e,
                i = function () {
                  t.trigger('aui-stop-typing');
                };
              t.on('keyup', function () {
                clearTimeout(e), (e = setTimeout(i, 1500));
              });
            })(t),
              (function (t) {
                var e = Za(t, 'when'),
                  i = Za(t, 'watchfield');
                (i ? t.add('#' + i) : t).on(e, function () {
                  Xa(t);
                });
              })(t);
          })(t),
          eo(t, Ka));
      }
      function Xa(t) {
        if (!Za(t, 'novalidate'))
          return (function (t) {
            !(function (t) {
              io(so(t), 'none');
            })(t);
            var e = (function (t) {
              var e = [];
              return (
                to().forEach(function (i, n) {
                  var s = i.validatorTrigger;
                  t.is(s) && e.push(n);
                }),
                e
              );
            })(t);
            eo(t, Ya);
            var i = (function (t, e) {
                var i = [];
                return (
                  e.forEach(function (e) {
                    var n = to()[e].validatorFunction,
                      s = new r.Deferred();
                    n(
                      (function (t, e) {
                        var i = {
                          validate: function () {
                            e.resolve();
                          },
                          invalidate: function (i) {
                            eo(t, za, i), e.reject();
                          },
                          args: (function (t) {
                            return function (e) {
                              return t.attr('data-' + Wa + e) || t.attr(e);
                            };
                          })(t),
                          el: t[0],
                          $el: t,
                        };
                        return (
                          L(i, '$el', {
                            sinceVersion: '5.9.0',
                            removeInVersion: '10.0.0',
                            alternativeName: 'el',
                            extraInfo:
                              'See https://ecosystem.atlassian.net/browse/AUI-3263.',
                          }),
                          i
                        );
                      })(t, s)
                    ),
                      i.push(s);
                  }),
                  i
                );
              })(t, e),
              n = r.when.apply(r, i);
            return (
              n.done(function () {
                eo(t, qa);
              }),
              n
            );
          })(t);
        eo(t, qa);
      }
      function Za(t, e) {
        var i = t.attr('data-' + Wa + e);
        return i || (i = {when: 'change'}[e]), i;
      }
      function to() {
        return Ma.validators();
      }
      function eo(t, e, i) {
        if ((t.attr('data-' + Va, e), e !== Ka)) {
          t.trigger(r.Event(Ga));
          var n = so(t),
            s = {};
          (s[Ya] = 'wait'), (s[za] = 'error'), (s[qa] = 'success');
          var a = s[e];
          e === Ya
            ? (function (t) {
                setTimeout(function () {
                  let e = ro(t) === Ya;
                  e && (io(t, 'wait'), Sa(t, !0));
                }, 500);
              })(t)
            : io(n, a, i);
        }
      }
      function io(t, e, i) {
        const n = (function (t) {
          return t.is('[' + Ua + 'wait]');
        })(t);
        if (
          ((function (t) {
            no(t, 'wait'), Sa(t, !1), no(t, 'success');
          })(t),
          !('success' === e && !n))
        )
          if ('none' === e) no(t, 'error');
          else {
            const n = t.attr(Ua + e) || '[]',
              s = i
                ? (function (t, e) {
                    return JSON.parse(e).concat([t]);
                  })(i, n)
                : [];
            t.attr(Ua + e, JSON.stringify(s)), 'error' === e && Ta(t, s);
          }
      }
      function no(t, e) {
        t.removeAttr(Ua + e), 'error' === e && Da(t, e).remove();
      }
      function so(t) {
        var e = Za(t, 'displayfield');
        return void 0 === e ? t : r('#' + e);
      }
      function ro(t) {
        return t.attr('data-' + Va);
      }
      function ao(t, e) {
        e.preventDefault(),
          t.one(Ga, function () {
            t.trigger('submit');
          });
      }
      function oo(t, e) {
        var i = '[data-' + Va + '=' + e + ']';
        return t.find(i);
      }
      r(document).on('submit', function (t) {
        var e = t.target,
          i = r(e),
          n = (function (t) {
            return (function (t) {
              var e = -1 !== t.indexOf(za),
                i = -1 !== t.indexOf(Ka),
                n = -1 !== t.indexOf(Ya);
              return e ? za : i ? Ka : n ? Ya : qa;
            })(
              (function (t) {
                return r.map(t, function (t) {
                  return ro(r(t));
                });
              })(t.find('.' + Ja))
            );
          })(i);
        if (n === Ka)
          ao(i, t),
            (function (t) {
              oo(t, Ka).each(function (t, e) {
                lo.validate(r(e));
              });
            })(i);
        else if (n === Ya) ao(i, t);
        else if (n === za)
          t.preventDefault(),
            (function (t) {
              oo(t, za).first().focus();
            })(i);
        else if (n === qa) {
          var s = r.Event('aui-valid-submit');
          i.trigger(s), s.isDefaultPrevented() && t.preventDefault();
        }
      });
      const lo = {
        register: Ma.register,
        validate: function (t) {
          Xa((t = r(t)));
        },
      };
      J('data-aui-validation-field', {
        attached: function (t) {
          t.form && t.form.setAttribute('novalidate', 'novalidate'), Qa(r(t)), J.init(t);
        },
        type: J.type.ATTRIBUTE,
      }),
        K('aui/form-validation', lo),
        o('formValidation', lo);
      i(75), i(76), i(77);
      var co = N(
          function (t, e) {
            var i, n;
            return function () {
              var s = arguments,
                r = this;
              return (
                clearTimeout(i),
                (i = setTimeout(function () {
                  (n = t.apply(r, s)), (r = s = null);
                }, e)),
                n
              );
            };
          },
          'AJS.debounce',
          {
            removeInVersion: '10.0.0',
            sinceVersion: '8.0.0',
            extraInfo:
              'Use equivalent functions from libraries like lodash / underscore instead',
          }
        ),
        uo = co;
      o('debounce', co),
        o(
          'debounceImmediate',
          N(
            function (t, e) {
              var i,
                n = null;
              return function () {
                var s = this,
                  r = arguments;
                return (
                  null === n && (i = t.apply(s, r)),
                  clearTimeout(n),
                  (n = setTimeout(function () {
                    n = s = r = null;
                  }, e)),
                  i
                );
              };
            },
            'AJS.debounceImmediate',
            {
              removeInVersion: '10.0.0',
              sinceVersion: '8.0.0',
              extraInfo:
                'Use equivalent functions from libraries like lodash / underscore instead',
            }
          )
        );
      const ho = r(window);
      function po(t) {
        var e = this;
        (this.element = t),
          (this.$element = r(t)),
          (this.index = r('aui-header, .aui-header').index(t)),
          (this.$secondaryNav = this.$element
            .find('.aui-header-secondary .aui-nav')
            .first()),
          (this.menuItems = []),
          (this.totalWidth = 0),
          (this.$moreMenu = void 0),
          (this.rightMostNavItemIndex = void 0),
          (this.$applicationLogo = this.$element.find('#logo')),
          (this.moreMenuWidth = 0),
          (this.primaryButtonsWidth = 0),
          (this.$headerFind = (function () {
            var t = r(e.$element[0].querySelector('.aui-header-primary'));
            return function (e) {
              return t.find(e);
            };
          })());
      }
      po.prototype = {
        init: function () {
          var t = this;
          this.element.setAttribute('data-aui-responsive', 'true'),
            this.$headerFind('.aui-button')
              .parent()
              .each(function () {
                t.primaryButtonsWidth += r(this).outerWidth(!0);
              }),
            this.$headerFind('.aui-nav > li > a:not(.aui-button)').each(function () {
              var e = r(this).parent(),
                i = e.outerWidth(!0);
              (t.totalWidth += i), t.menuItems.push({$element: e, outerWidth: i});
            }),
            (this.rightMostNavItemIndex = this.menuItems.length - 1),
            ho.on(
              'resize',
              (this._resizeHandler = uo(function () {
                t.constructResponsiveDropdown();
              }, 100))
            );
          var e = this.$applicationLogo.find('img');
          0 !== e.length &&
            (e.attr('data-aui-responsive-header-index', this.index),
            e.on('load', function () {
              t.constructResponsiveDropdown();
            })),
            this.constructResponsiveDropdown(),
            this.$headerFind('.aui-nav').css('width', 'auto');
        },
        destroy: function () {
          ho.off('resize', this._resizeHandler);
        },
        calculateAvailableWidth: function () {
          return (
            (this.$secondaryNav.is(':visible')
              ? this.$secondaryNav.offset().left
              : this.$element.outerWidth()) -
            (this.$applicationLogo.offset().left +
              this.$applicationLogo.outerWidth(!0) +
              this.primaryButtonsWidth)
          );
        },
        showResponsiveDropdown: function () {
          void 0 === this.$moreMenu &&
            (this.$moreMenu = this.createResponsiveDropdownTrigger()),
            this.$moreMenu.css('display', '');
        },
        hideResponsiveDropdown: function () {
          void 0 !== this.$moreMenu && this.$moreMenu.css('display', 'none');
        },
        constructResponsiveDropdown: function () {
          if (this.menuItems.length) {
            var t,
              e = this.calculateAvailableWidth(this.$element, this.primaryButtonsWidth);
            if (e > this.totalWidth) this.showAll();
            else {
              this.showResponsiveDropdown(), (t = e - this.moreMenuWidth);
              for (var i = -1; t - this.menuItems[i + 1].outerWidth >= 0; )
                (t -= this.menuItems[i + 1].outerWidth), i++;
              i < this.rightMostNavItemIndex
                ? this.moveToResponsiveDropdown(this.rightMostNavItemIndex - i)
                : this.rightMostNavItemIndex < i &&
                  this.moveOutOfResponsiveDropdown(i - this.rightMostNavItemIndex);
            }
          }
        },
        createResponsiveDropdownTrigger: function () {
          var t = document.createElement('li'),
            e = document.createElement('aui-dropdown-menu');
          (e.id = 'aui-responsive-header-dropdown-'.concat(this.index)), J.init(e);
          var i = document.createElement('aui-section');
          (i.id = 'aui-responsive-header-dropdown-list-'.concat(this.index)),
            J.init(i),
            e.appendChild(i);
          var n = (function (t) {
            var e = document.createElement('a');
            return (
              e.setAttribute('class', 'aui-dropdown2-trigger'),
              e.setAttribute('href', '#'),
              (e.id = t.id + '-trigger'),
              e.setAttribute('aria-controls', t.id),
              (e.innerHTML = Ht.getText('aui.words.more')),
              e
            );
          })(e);
          return (
            t.appendChild(n),
            t.appendChild(e),
            0 === this.primaryButtonsWidth
              ? this.$headerFind('.aui-nav').append(t)
              : this.$headerFind('.aui-nav > li > .aui-button:first').parent().before(t),
            (this.moreMenuWidth = r(t).outerWidth(!0)),
            r(t)
          );
        },
        moveOutOfResponsiveDropdown: function (t) {
          if (!(t <= 0)) {
            for (
              var e = r('#aui-responsive-header-dropdown-'.concat(this.index)),
                i = this.rightMostNavItemIndex + 1,
                n = this.rightMostNavItemIndex + t,
                s = i;
              s <= n;
              s++
            ) {
              var a = this.menuItems[s].$element,
                o = a.children('a');
              if (o.attr('aria-controls')) {
                var l = r(document.getElementById(o.attr('aria-controls')));
                l.removeClass('aui-dropdown2-sub-menu'), a.append(l);
              }
              e.find('aui-item-link:first').remove(), a.insertBefore(this.$moreMenu);
            }
            this.rightMostNavItemIndex += t;
          }
        },
        moveToResponsiveDropdown: function (t) {
          if (!(t <= 0)) {
            for (
              var e = he.a.wrap(this.$moreMenu[0].querySelector('aui-section')),
                i = this.rightMostNavItemIndex,
                n = this.rightMostNavItemIndex - t + 1,
                s = i;
              s >= n;
              s--
            ) {
              var a = this.menuItems[s].$element,
                o = a.children('a');
              J.init(o);
              var l = document.createElement('aui-item-link');
              if ((l.setAttribute('href', o.attr('href')), o.attr('aria-controls'))) {
                var c = r(document.getElementById(o.attr('aria-controls')));
                l.setAttribute('for', o.attr('aria-controls')),
                  c.addClass('aui-dropdown2-sub-menu'),
                  c.appendTo('body');
              }
              J.init(l),
                (he.a.wrap(l).textContent = o.text()),
                a.detach(),
                e.insertBefore(l, e.firstChild),
                this.element.dispatchEvent(
                  new ft('aui-responsive-menu-item-created', {
                    bubbles: !0,
                    detail: {originalItem: a[0], newItem: l},
                  })
                );
            }
            this.rightMostNavItemIndex -= t;
          }
        },
        showAll: function () {
          this.moveOutOfResponsiveDropdown(
            this.menuItems.length - 1 - this.rightMostNavItemIndex
          ),
            this.hideResponsiveDropdown();
        },
      };
      var fo = function (t) {
        let e = t._header;
        return e instanceof po || ((e = new po(t)).init(), (t._header = e)), e;
      };
      function go() {
        r('.aui-header').each(function () {
          fo(this);
        });
      }
      r(go);
      const mo = {};
      (mo.setup = N(go, 'responsiveheader.setup', {
        removeInVersion: '10.0.0',
        sinceVersion: '5.8.0',
        extraInfo:
          'No need to manually initialise anymore as this is now a web component.',
      })),
        o('responsiveheader', mo);
      var vo = J('aui-header', {
          type: J.type.CLASSNAME,
          created: function (t) {
            fo(t);
          },
        }),
        bo = (i(78), i(20)),
        yo = i.n(bo);
      const wo = t => {
          let {dateFormat: e, $field: i, onSelect: n, hide: s, onChangeMonthYear: r} = t;
          return {
            dateFormat: e,
            defaultDate: i.val(),
            maxDate: i.attr('max'),
            minDate: i.attr('min'),
            nextText: '>',
            onSelect: function (t) {
              i.val(t), i.trigger('change'), s(), n && n.call(this, t);
            },
            onChangeMonthYear: r,
            prevText: '<',
          };
        },
        _o = (t, e) => {
          let i,
            n,
            s,
            a = !1;
          const o = r('body'),
            l = e => {
              let i = r(e.target),
                s = i.closest(n).length || i.is(t),
                o = i.closest('.ui-datepicker-header').length;
              if ((!s && !o) || e.keyCode === Y.ESCAPE) return h(), void (a = !1);
              i.get(0) !== t.get(0) && e.preventDefault();
            },
            c = () => {
              a || (o.on('focus blur click mousedown', '*', l), (a = !0));
            },
            u = () => {
              i.get(0).open || d();
            },
            d = () => {
              i.get(0).open = !0;
            },
            h = () => {
              i.get(0).open = !1;
            };
          return {
            calendarContainerSelector: null,
            getPopupContents: t => {
              let {$field: c} = t;
              return (
                (i = (t => {
                  let {horizontalAlignment: e, datePickerUUID: i} = t;
                  const n = new xr();
                  n.id = i;
                  const s = r(n);
                  return (
                    s.attr('persistent', ''),
                    s.attr('data-aui-focus', 'false'),
                    s.attr('alignment', 'bottom '.concat(e)),
                    s.addClass('aui-datepicker-dialog'),
                    s
                  );
                })({
                  horizontalAlignment: (t =>
                    t.offset().left < window.innerWidth / 2 ? 'left' : 'right')(c),
                  datePickerUUID: e,
                })),
                (s = c.closest('aui-inline-dialog').get(0)) &&
                  ((s._datePickerPopup = i),
                  r(s).on('aui-hide', t => {
                    a && t.preventDefault(),
                      o.off('focus blur', '*', l),
                      s && s._datePickerPopup && delete s._datePickerPopup;
                  })),
                o.append(i),
                (n = i),
                i
              );
            },
            handleFieldFocus: u,
            showDatePicker: d,
            hideDatePicker: h,
            handleChangeMonthYear: () => {
              setTimeout(i.refresh, 0);
            },
            getCalendarNode: () => i.get(0).childNodes[0],
            destroyPolyfill: () => {
              h(),
                t.off('focus click', u),
                t.off('focusout keydown', c),
                o.off('keydown', c),
                o.off('focus blur click mousedown keydown', l);
            },
            createPolyfill: function () {
              o.on('keydown', l), t.on('focusout keydown', c);
            },
          };
        },
        xo = function (t) {
          const e = t.getField(),
            i = t.getOptions(),
            n = t.getUUID();
          let s;
          const {
              getPopupContents: a,
              handleFieldFocus: o,
              showDatePicker: l,
              hideDatePicker: c,
              handleChangeMonthYear: u,
              getCalendarNode: d,
              destroyPolyfill: p,
              createPolyfill: f,
            } = _o(e, n),
            g = t => {
              r(t.currentTarget).val() && s.datepicker('setDate', e.val());
            },
            m = e.attr('placeholder'),
            v = e.prop('type');
          let b;
          {
            const i = t => e => {
                if (void 0 !== s) return t(e);
              },
              n = i(() => {
                s.datepicker('destroy');
              });
            (t.show = l),
              (t.hide = c),
              (t.destroyPolyfill = () => {
                p(),
                  e.off('propertychange keyup input paste', g),
                  b && (b.disconnect(), (b = null)),
                  m && e.attr('placeholder', m),
                  v && e.prop('type', v),
                  e.removeAttr('data-aui-dp-uuid'),
                  n(),
                  delete t.destroyPolyfill,
                  delete t.show,
                  delete t.hide;
              }),
              (t.setDate = i(t => {
                s.datepicker('setDate', t);
              })),
              (t.getDate = i(() => s.datepicker('getDate'))),
              (t.setMin = i(t => s.datepicker('option', 'minDate', t))),
              (t.setMax = i(t => s.datepicker('option', 'maxDate', t)));
          }
          i.languageCode in ko.prototype.localisations || (i.languageCode = '');
          const y = ko.prototype.localisations;
          if ((e.attr('aria-controls', n), void 0 === s)) {
            void 0 !== e.attr('step') &&
              h(
                'WARNING: The date picker polyfill currently does not support the step attribute!'
              );
            const n = wo({
                dateFormat: i.dateFormat,
                $field: e,
                onSelect: i.onSelect,
                hide: t.hide,
                onChangeMonthYear: u,
              }),
              o = r.extend(void 0, n, y);
            i.firstDay > -1 && (o.firstDay = i.firstDay),
              (s = (t => {
                let {config: e, popupContents: i, getCalendarNode: n, hint: s} = t;
                const a = r(n());
                let o;
                return (
                  a.datepicker(e),
                  s &&
                    ((o = r('<div/>').addClass('aui-datepicker-hint'))
                      .append('<span/>')
                      .text(s),
                    i.append(o)),
                  a
                );
              })({
                config: o,
                popupContents: a({$field: e}),
                getCalendarNode: d,
                hint: i.hint,
              })),
              f(),
              e.on('propertychange keyup input paste', g),
              (b = new MutationObserver(function (e) {
                e.forEach(function (e) {
                  'min' === e.attributeName
                    ? t.setMin(e.target.getAttribute('min'))
                    : 'max' === e.attributeName && t.setMax(e.target.getAttribute('max'));
                });
              })).observe(e.get(0), {attributes: !0});
          }
          e.on('focus click', o),
            e.attr('placeholder', i.placeholder),
            e.prop('type', 'text'),
            e.attr('data-aui-dp-uuid', n);
        };
      function ko(t, e) {
        let i = {};
        const n = Hi('date-picker'),
          s = r(t),
          a = {
            getUUID: () => n,
            getField: () => s,
            getOptions: () => i,
            destroy: () => {
              'function' == typeof a.destroyPolyfill && a.destroyPolyfill();
            },
            reset: () => {
              a.destroy();
              const t = !ko.prototype.browserSupportsDateField,
                e = !1 !== i.overrideBrowserDefault;
              (t || e) && xo(a);
            },
            reconfigure: t => {
              (i = r.extend(void 0, ko.prototype.defaultOptions, t)), a.reset();
            },
          };
        return a.reconfigure(e), a;
      }
      function Co(t, e) {
        const i = r.extend({nextText: '>', prevText: '<'}, e),
          n = r(t)
            .addClass('aui-datepicker-dialog')
            .addClass('aui-calendar-widget')
            .datepicker(i);
        if (i.hint) {
          const t = r('<div/>').addClass('aui-datepicker-hint');
          t.append('<span/>').text(i.hint), n.append(t);
        }
        return (
          (n.reconfigure = t => {
            n.datepicker('destroy'), n.datepicker(t);
          }),
          (n.destroy = () => {
            n.datepicker('destroy');
          }),
          n
        );
      }
      (ko.prototype.browserSupportsDateField = (function () {
        if (void 0 === le) {
          var t = document.createElement('input');
          t.setAttribute('type', 'date'), (le = 'date' === t.type);
        }
        return le;
      })()),
        (ko.prototype.defaultOptions = {
          overrideBrowserDefault: !1,
          firstDay: -1,
          languageCode: r('html').attr('lang') || 'en-AU',
          dateFormat: yo.a.W3C,
        }),
        (ko.prototype.localisations = {
          dayNames: [
            Ht.getText('ajs.datepicker.localisations.day-names.sunday'),
            Ht.getText('ajs.datepicker.localisations.day-names.monday'),
            Ht.getText('ajs.datepicker.localisations.day-names.tuesday'),
            Ht.getText('ajs.datepicker.localisations.day-names.wednesday'),
            Ht.getText('ajs.datepicker.localisations.day-names.thursday'),
            Ht.getText('ajs.datepicker.localisations.day-names.friday'),
            Ht.getText('ajs.datepicker.localisations.day-names.saturday'),
          ],
          dayNamesMin: [
            Ht.getText('ajs.datepicker.localisations.day-names-min.sunday'),
            Ht.getText('ajs.datepicker.localisations.day-names-min.monday'),
            Ht.getText('ajs.datepicker.localisations.day-names-min.tuesday'),
            Ht.getText('ajs.datepicker.localisations.day-names-min.wednesday'),
            Ht.getText('ajs.datepicker.localisations.day-names-min.thursday'),
            Ht.getText('ajs.datepicker.localisations.day-names-min.friday'),
            Ht.getText('ajs.datepicker.localisations.day-names-min.saturday'),
          ],
          firstDay: Ht.getText('ajs.datepicker.localisations.first-day'),
          isRTL: 'true' === Ht.getText('ajs.datepicker.localisations.is-RTL'),
          monthNames: [
            Ht.getText('ajs.datepicker.localisations.month-names.january'),
            Ht.getText('ajs.datepicker.localisations.month-names.february'),
            Ht.getText('ajs.datepicker.localisations.month-names.march'),
            Ht.getText('ajs.datepicker.localisations.month-names.april'),
            Ht.getText('ajs.datepicker.localisations.month-names.may'),
            Ht.getText('ajs.datepicker.localisations.month-names.june'),
            Ht.getText('ajs.datepicker.localisations.month-names.july'),
            Ht.getText('ajs.datepicker.localisations.month-names.august'),
            Ht.getText('ajs.datepicker.localisations.month-names.september'),
            Ht.getText('ajs.datepicker.localisations.month-names.october'),
            Ht.getText('ajs.datepicker.localisations.month-names.november'),
            Ht.getText('ajs.datepicker.localisations.month-names.december'),
          ],
          showMonthAfterYear:
            'true' === Ht.getText('ajs.datepicker.localisations.show-month-after-year'),
          yearSuffix: Ht.getText('ajs.datepicker.localisations.year-suffix'),
        });
      const Eo = t =>
        function (e) {
          let i = this.data('aui-datepicker');
          return (
            i
              ? 'object' == typeof e
                ? i.reconfigure(e)
                : 'destroy' === e && i.destroy()
              : ((i = new t(this, e)), this.data('aui-datepicker', i)),
            i
          );
        };
      (r.fn.datePicker = Eo(ko)),
        o('DatePicker', ko),
        (r.fn.calendarWidget = Eo(Co)),
        o('CalendarWidget', Co);
      var To = ko,
        Do =
          (i(80),
          i(81),
          i(8),
          i(9),
          i(82),
          i(86),
          {
            NO_VALUE: 'aui-restfultable-editable-no-value',
            NO_ENTRIES: 'aui-restfultable-no-entires',
            RESTFUL_TABLE: 'aui-restfultable',
            ROW: 'aui-restfultable-row',
            READ_ONLY: 'aui-restfultable-readonly',
            ACTIVE: 'aui-restfultable-active',
            ALLOW_HOVER: 'aui-restfultable-allowhover',
            FOCUSED: 'aui-restfultable-focused',
            MOVEABLE: 'aui-restfultable-movable',
            DISABLED: 'aui-restfultable-disabled',
            SUBMIT: 'aui-restfultable-submit',
            CANCEL: 'aui-restfultable-cancel',
            EDIT_ROW: 'aui-restfultable-editrow',
            CREATE: 'aui-restfultable-create',
            DRAG_HANDLE: 'aui-restfultable-draghandle',
            ORDER: 'aui-restfultable-order',
            EDITABLE: 'aui-restfultable-editable',
            ERROR: 'error',
            DELETE: 'aui-restfultable-delete',
            STATUS: 'aui-restfultable-status',
          }),
        So = os.a.View,
        Ao = os.a.View,
        Io = os.a.View,
        Oo = {ENABLED_SUBMIT: 'enabledSubmit', ROW_VIEW: 'RestfulTable_Row_View'},
        No =
          (i(87),
          {
            REORDER_SUCCESS: 'RestfulTable.reorderSuccess',
            ROW_ADDED: 'RestfulTable.rowAdded',
            ROW_REMOVED: 'RestfulTable.rowRemoved',
            EDIT_ROW: 'RestfulTable.switchedToEditMode',
            SERVER_ERROR: 'RestfulTable.serverError',
            CREATED: 'created',
            UPDATED: 'updated',
            FOCUS: 'focus',
            BLUR: 'blur',
            SUBMIT: 'submit',
            SAVE: 'save',
            MODAL: 'modal',
            MODELESS: 'modeless',
            CANCEL: 'cancel',
            CONTENT_REFRESHED: 'contentRefreshed',
            RENDER: 'render',
            FINISHED_EDITING: 'finishedEditing',
            VALIDATION_ERROR: 'validationError',
            SUBMIT_STARTED: 'submitStarted',
            SUBMIT_FINISHED: 'submitFinished',
            INITIALIZED: 'initialized',
            ROW_INITIALIZED: 'rowInitialized',
            ROW_EDIT: 'editRow',
          });
      const Mo = '<aui-spinner size="small"></aui-spinner>',
        Po = 'aui-spinner';
      function Lo(t) {
        0 === t.find(Po).length && t.find('.'.concat(Do.STATUS)).append(Mo);
      }
      function Ro(t) {
        t.find('.'.concat(Do.STATUS, ' ').concat(Po)).remove();
      }
      var $o = -1 !== navigator.userAgent.toLowerCase().indexOf('firefox'),
        jo = os.a.View.extend({
          tagName: 'tr',
          events: {focusin: '_focus', click: '_focus', keyup: '_handleKeyUpEvent'},
          initialize: function (t) {
            (this.$el = r(this.el)),
              (this._event = No),
              (this.classNames = Do),
              (this.dataKeys = Oo),
              (this.columns = t.columns),
              (this.isCreateRow = t.isCreateRow),
              (this.allowReorder = t.allowReorder),
              (this.events['click .' + this.classNames.CANCEL] = '_cancel'),
              this.delegateEvents(),
              t.isUpdateMode
                ? (this.isUpdateMode = !0)
                : ((this._modelClass = t.model), (this.model = new this._modelClass())),
              (this.fieldFocusSelector = t.fieldFocusSelector),
              this.on(this._event.CANCEL, () => {
                this.isCreateRow || (this.disabled = !0);
              })
                .on(this._event.SAVE, t => !this.disabled && this.submit(t))
                .on(this._event.FOCUS, t => this.focus(t))
                .on(this._event.BLUR, () => {
                  this.$el.removeClass(this.classNames.FOCUSED), this.disable();
                })
                .on(this._event.SUBMIT_STARTED, () => this._submitStarted())
                .on(this._event.SUBMIT_FINISHED, () => this._submitFinished());
          },
          defaultColumnRenderer: function (t) {
            return !1 !== t.allowEdit
              ? r("<input type='text' />")
                  .addClass('text')
                  .attr({name: t.name, value: t.value, 'aria-label': t.ariaLabel})
              : t.value
              ? document.createTextNode(t.value)
              : void 0;
          },
          renderDragHandle: function () {
            return '<span class="' + this.classNames.DRAG_HANDLE + '"></span></td>';
          },
          _handleKeyUpEvent: function (t) {
            27 === t.keyCode && this.trigger(this._event.CANCEL);
          },
          _cancel: function (t) {
            return this.trigger(this._event.CANCEL), t.preventDefault(), this;
          },
          _submitStarted: function () {
            return (
              (this.submitting = !0),
              this.showLoading().disable().delegateEvents({}),
              this
            );
          },
          _submitFinished: function () {
            return (
              (this.submitting = !1),
              this.hideLoading().enable().delegateEvents(this.events),
              this
            );
          },
          _focus: function (t) {
            return (
              this.hasFocus() || this.trigger(this._event.FOCUS, t.target.name), this
            );
          },
          hasFocus: function () {
            return this.$el.hasClass(this.classNames.FOCUSED);
          },
          focus: function (t) {
            var e, i;
            return (
              this.enable(),
              (e = t
                ? this.$el.find(this.fieldFocusSelector(t))
                : 0 === (i = this.$el.find(this.classNames.ERROR + ':first')).length
                ? this.$el.find(':input:text:first')
                : i.parent().find(':input')),
              this.$el.addClass(this.classNames.FOCUSED),
              e.focus().trigger('select'),
              this
            );
          },
          disable: function () {
            var t, e;
            return (
              $o &&
                (e = this.$el.find(':submit')).length &&
                ((t = r("<input type='submit' class='" + this.classNames.SUBMIT + "' />")
                  .addClass(e.attr('class'))
                  .val(e.val())
                  .data(this.dataKeys.ENABLED_SUBMIT, e)),
                e.replaceWith(t)),
              this.$el
                .addClass(this.classNames.DISABLED)
                .find(':submit')
                .attr('disabled', 'disabled'),
              this
            );
          },
          enable: function () {
            var t, e;
            return (
              $o &&
                (e = (t = this.$el.find(this.classNames.SUBMIT)).data(
                  this.dataKeys.ENABLED_SUBMIT
                )) &&
                t.length &&
                t.replaceWith(e),
              this.$el
                .removeClass(this.classNames.DISABLED)
                .find(':submit')
                .removeAttr('disabled'),
              this
            );
          },
          showLoading: function () {
            return Lo(this.$el), this;
          },
          hideLoading: function () {
            return Ro(this.$el), this;
          },
          hasUpdates: function () {
            return !!this.mapSubmitParams(this.serializeObject());
          },
          serializeObject: function () {
            var t = this.$el;
            return t.serializeObject ? t.serializeObject() : t.serialize();
          },
          mapSubmitParams: function (t) {
            return this.model.changedAttributes(t);
          },
          submit: function (t) {
            var e,
              i = this;
            if (
              (document.activeElement !== window && r(document.activeElement).blur(),
              this.isUpdateMode)
            ) {
              if (!(e = this.mapSubmitParams(this.serializeObject())))
                return i.trigger(i._event.CANCEL);
            } else this.model.clear(), (e = this.mapSubmitParams(this.serializeObject()));
            return (
              this.trigger(this._event.SUBMIT_STARTED),
              this.model.save(e, {
                success: function () {
                  i.isUpdateMode
                    ? i.trigger(i._event.UPDATED, i.model, t)
                    : (i.trigger(i._event.CREATED, i.model.toJSON()),
                      (i.model = new i._modelClass()),
                      i.render({errors: {}, values: {}}),
                      i.trigger(i._event.FOCUS)),
                    i.trigger(i._event.SUBMIT_FINISHED);
                },
                error: function (t, e, n) {
                  400 === n.status &&
                    (i.renderErrors(e.errors),
                    i.trigger(i._event.VALIDATION_ERROR, e.errors)),
                    i.trigger(i._event.SUBMIT_FINISHED);
                },
                silent: !0,
              }),
              this
            );
          },
          renderError: function (t, e) {
            return r('<div />')
              .attr('data-field', t)
              .addClass(this.classNames.ERROR)
              .text(e);
          },
          renderErrors: function (t) {
            var e = this;
            return (
              this.$('.' + this.classNames.ERROR).remove(),
              t &&
                r.each(t, function (t, i) {
                  e.$el
                    .find("[name='" + t + "']")
                    .closest('td')
                    .append(e.renderError(t, i));
                }),
              this
            );
          },
          render: function (t) {
            var e = this;
            return (
              this.$el.empty(),
              this.allowReorder &&
                r('<td  class="' + this.classNames.ORDER + '" />')
                  .append(this.renderDragHandle())
                  .appendTo(e.$el),
              r.each(this.columns, function (i, n) {
                var s,
                  a,
                  o = t.values[n.id],
                  l = [
                    {
                      name: n.id,
                      ariaLabel: n.inputAriaLabel ? n.inputAriaLabel : n.header,
                      value: o,
                      allowEdit: n.allowEdit,
                    },
                    t.values,
                    e.model,
                  ];
                o && e.$el.attr('data-' + n.id, o),
                  (s =
                    e.isCreateRow && n.createView
                      ? new n.createView({model: e.model}).render(l[0])
                      : n.editView
                      ? new n.editView({model: e.model}).render(l[0])
                      : e.defaultColumnRenderer.apply(e, l)),
                  (a = r('<td />')),
                  'object' == typeof s && s.done
                    ? s.done(function (t) {
                        a.append(t);
                      })
                    : a.append(s),
                  n.styleClass && a.addClass(n.styleClass),
                  a.appendTo(e.$el);
              }),
              this.$el
                .append(this.renderOperations(t.update, t.values))
                .addClass(this.classNames.ROW + ' ' + this.classNames.EDIT_ROW),
              this.trigger(this._event.RENDER, this.$el, t.values),
              this.$el.trigger(this._event.CONTENT_REFRESHED, [this.$el]),
              this
            );
          },
          renderOperations: function (t) {
            var e = r('<td class="aui-restfultable-operations" />');
            return (
              t
                ? e
                    .append(
                      r(
                        '<input class="aui-button aui-button-primary" type="submit" />'
                      ).attr({
                        accesskey: this.submitAccessKey,
                        value: Ht.getText('aui.words.update'),
                      })
                    )
                    .append(
                      r('<a class="aui-button aui-button-link" href="#" />')
                        .addClass(this.classNames.CANCEL)
                        .text(Ht.getText('aui.words.cancel'))
                        .attr({accesskey: this.cancelAccessKey})
                    )
                : e.append(
                    r(
                      '<input class="aui-button aui-button-primary" type="submit" />'
                    ).attr({
                      accesskey: this.submitAccessKey,
                      value: Ht.getText('aui.words.add'),
                    })
                  ),
              e.add(r('<td class="'.concat(this.classNames.STATUS, '" />')))
            );
          },
        });
      const Fo = document || {},
        Ho = r(Fo);
      function Bo(t, e) {
        Ho.trigger(t, e);
      }
      function Wo(t, e, i) {
        r(e).trigger(t, i), Bo(t, i), e.id && Bo(e.id + '-' + t, i);
      }
      var Uo = os.a.Model.extend({
          sync: function (t, e, i) {
            var n = this,
              s = i.error;
            return (
              (i.error = function (t) {
                n._serverErrorHandler(t, this), s && s.apply(this, arguments);
              }),
              os.a.sync.apply(os.a, arguments)
            );
          },
          save: function (t, e) {
            var i,
              n = this,
              s = (e = e || {}).error,
              a = e.success;
            (e.error = function (t, e) {
              var i = r.parseJSON(e.responseText || e.data);
              s && s.call(n, n, i, e);
            }),
              this.isNew()
                ? os.a.Model.prototype.save.call(this, t, e)
                : t &&
                  (((i = new (Uo.extend({url: this.url()}))({id: this.id})).save =
                    os.a.Model.prototype.save),
                  (e.success = function (t, e) {
                    n.clear().set(t.toJSON()), a && a.call(n, n, e);
                  }),
                  i.save(t, e));
          },
          destroy: function (t) {
            t = t || {};
            var e = this,
              i = this.url();
            return (
              r.ajax({
                url: i,
                type: 'DELETE',
                dataType: 'json',
                data: t.data || {},
                contentType: 'application/json',
                success(i) {
                  e.collection && e.collection.remove(e),
                    t.success && t.success.call(e, i);
                },
                error(i) {
                  e._serverErrorHandler(i, this), t.error && t.error.call(e, i);
                },
              }),
              this
            );
          },
          changedAttributes: function (t) {
            var e = {},
              i = this.toJSON();
            if (
              (r.each(t, function (t, n) {
                i[t]
                  ? i[t] &&
                    i[t] !== n &&
                    (('object' == typeof n && Object(zt.isEqual)(n, i[t])) || (e[t] = n))
                  : 'string' == typeof n
                  ? '' !== r.trim(n) && (e[t] = n)
                  : r.isArray(n)
                  ? 0 !== n.length && (e[t] = n)
                  : (e[t] = n);
              }),
              !Object(zt.isEmpty)(e))
            )
              return this.addExpand(e), e;
          },
          addExpand: function (t) {},
          _serverErrorHandler: function (t, e) {
            var i;
            400 !== t.status &&
              ((i = r.parseJSON(t.responseText || t.data)),
              Wo(No.SERVER_ERROR, this, [i, t, e]));
          },
          fetch: function (t) {
            (t = t || {}), this.clear(), os.a.Model.prototype.fetch.call(this, t);
          },
        }),
        Vo = Uo,
        zo = os.a.View.extend({
          tagName: 'tr',
          events: {'click .aui-restfultable-editable': 'edit'},
          initialize: function (t) {
            if (
              ((t = t || {}),
              (this._event = No),
              (this.classNames = Do),
              (this.dataKeys = Oo),
              (this.columns = t.columns),
              (this.allowEdit = t.allowEdit),
              (this.allowDelete = t.allowDelete),
              !this.events['click .aui-restfultable-editable'])
            )
              throw new Error(
                'It appears you have overridden the events property. To add events you will need to usea work around. https://github.com/documentcloud/backbone/issues/244'
              );
            (this.index = t.index || 0),
              (this.deleteConfirmationCallback = t.deleteConfirmationCallback),
              (this.allowReorder = t.allowReorder),
              (this.$el = r(this.el)),
              this.on(this._event.CANCEL, () => (this.disabled = !0))
                .on(this._event.FOCUS, t => this.focus(t))
                .on(this._event.BLUR, () => this.unfocus())
                .on(this._event.MODAL, () => this.$el.addClass(this.classNames.ACTIVE))
                .on(this._event.MODELESS, () =>
                  this.$el.removeClass(this.classNames.ACTIVE)
                );
          },
          renderDragHandle: function () {
            return '<span class="' + this.classNames.DRAG_HANDLE + '"></span></td>';
          },
          defaultColumnRenderer: function (t) {
            if (t.value) return document.createTextNode(t.value.toString());
          },
          sync: function (t) {
            var e = this;
            return (
              this.model.addExpand(t),
              this.showLoading(),
              this.model.save(t, {
                success: function () {
                  e.hideLoading().render(), e.trigger(e._event.UPDATED);
                },
                error: function () {
                  e.hideLoading();
                },
              }),
              this
            );
          },
          refresh: function (t, e) {
            var i = this;
            return (
              this.showLoading(),
              this.model.fetch({
                success: function () {
                  i.hideLoading().render(), t && t.apply(this, arguments);
                },
                error: function () {
                  i.hideLoading(), e && e.apply(this, arguments);
                },
              }),
              this
            );
          },
          hasFocus: function () {
            return this.$el.hasClass(this.classNames.FOCUSED);
          },
          focus: function () {
            return r(this.el).addClass(this.classNames.FOCUSED), this;
          },
          unfocus: function () {
            return r(this.el).removeClass(this.classNames.FOCUSED), this;
          },
          showLoading: function () {
            return Lo(this.$el), this;
          },
          hideLoading: function () {
            return Ro(this.$el), this;
          },
          edit: function (t) {
            var e;
            return (
              (e = r(t.target).is('.' + this.classNames.EDITABLE)
                ? r(t.target).attr('data-field-name')
                : r(t.target)
                    .closest('.' + this.classNames.EDITABLE)
                    .attr('data-field-name')),
              this.trigger(this._event.ROW_EDIT, e),
              this
            );
          },
          renderOperations: function () {
            var t = this;
            if (!1 !== this.allowDelete)
              return r("<a href='#' class='aui-button' />")
                .addClass(this.classNames.DELETE)
                .text(Ht.getText('aui.words.delete'))
                .on('click', function (e) {
                  e.preventDefault(), t.destroy();
                });
          },
          destroy: function () {
            if (this.deleteConfirmationCallback) {
              let t = this.deleteConfirmationCallback(this.model.toJSON());
              if (!t || !t.then)
                throw new Error('deleteConfirmationCallback needs to return a Promise');
              t.then(
                () => this.model.destroy(),
                () => {}
              );
            } else this.model.destroy();
          },
          render: function () {
            var t = this,
              e = this.model.toJSON(),
              i = r("<td class='aui-restfultable-operations' />").append(
                this.renderOperations({}, e)
              ),
              n = r('<td class="'.concat(this.classNames.STATUS, '" />'));
            return (
              this.$el
                .removeClass(
                  this.classNames.DISABLED +
                    ' ' +
                    this.classNames.FOCUSED +
                    ' ' +
                    this.classNames.EDIT_ROW
                )
                .addClass(this.classNames.READ_ONLY)
                .empty(),
              this.allowReorder &&
                r('<td  class="' + this.classNames.ORDER + '" />')
                  .append(this.renderDragHandle())
                  .appendTo(t.$el),
              this.$el.attr('data-id', this.model.id),
              r.each(this.columns, function (i, n) {
                var s,
                  a = r('<td />'),
                  o = e[n.id],
                  l = n.fieldName || n.id,
                  c = [{name: l, value: o, allowEdit: n.allowEdit}, e, t.model];
                if (
                  (o && t.$el.attr('data-' + n.id, o),
                  (s = n.readView
                    ? new n.readView({model: t.model}).render(c[0])
                    : t.defaultColumnRenderer.apply(t, c)),
                  !1 !== t.allowEdit && !1 !== n.allowEdit)
                ) {
                  var u = r('<span />')
                    .addClass(t.classNames.EDITABLE)
                    .append(
                      '<span class="aui-icon aui-icon-small aui-iconfont-edit"></span>'
                    )
                    .append(s)
                    .attr('data-field-name', l);
                  (a = r('<td />').append(u).appendTo(t.$el)),
                    (s && r.trim(s)) ||
                      (a.addClass(t.classNames.NO_VALUE),
                      u.html(
                        r('<em />').text(this.emptyText || Ht.getText('aui.enter.value'))
                      ));
                } else a.append(s);
                n.styleClass && a.addClass(n.styleClass), a.appendTo(t.$el);
              }),
              this.$el
                .append(i)
                .append(n)
                .addClass(this.classNames.ROW + ' ' + this.classNames.READ_ONLY),
              this.trigger(this._event.RENDER, this.$el, e),
              this.$el.trigger(this._event.CONTENT_REFRESHED, [this.$el]),
              this
            );
          },
        }),
        qo = os.a.View.extend({
          initialize: function (t) {
            var e = this;
            if (
              ((e.options = r.extend(!0, e._getDefaultOptions(t), t)),
              (e.id = this.options.id),
              (e._event = No),
              (e.classNames = Do),
              (e.dataKeys = Oo),
              (this.$table = r(t.el)
                .addClass(this.classNames.RESTFUL_TABLE)
                .addClass(this.classNames.ALLOW_HOVER)
                .addClass('aui')),
              this.$table.wrapAll("<form class='aui' action='#' />"),
              (this.$thead = r('<thead/>')),
              (this.$theadRow = r('<tr />').appendTo(this.$thead)),
              (this.$tbody = r('<tbody/>')),
              !this.$table.length)
            )
              throw new Error(
                'RestfulTable: Init failed! The table you have specified [' +
                  this.$table.selector +
                  '] cannot be found.'
              );
            if (!this.options.columns)
              throw new Error(
                "RestfulTable: Init failed! You haven't provided any columns to render."
              );
            if (
              this.options.deleteConfirmationCallback &&
              !(this.options.deleteConfirmationCallback instanceof Function)
            )
              throw new Error(
                'RestfulTable: Init failed! deleteConfirmationCallback is not a function'
              );
            this.showGlobalLoading(),
              this.options.columns.forEach(function (t) {
                var i = r.isFunction(t.header) ? t.header() : t.header;
                void 0 === i &&
                  (p(
                    'You have not specified [header] for column [' +
                      t.id +
                      ']. Using id for now...'
                  ),
                  (i = t.id)),
                  e.$theadRow.append('<th>' + i + '</th>');
              }),
              e.$theadRow.append('<th></th><th></th>'),
              (this._models = this._createCollection()),
              (this._rowClass = this.options.views.row),
              (this.editRows = []),
              this.$table.closest('form').submit(function (t) {
                e.focusedRow && e.focusedRow.trigger(e._event.SAVE), t.preventDefault();
              }),
              this.options.allowReorder &&
                (this.$theadRow.prepend('<th />'),
                this.$tbody.sortable({
                  handle: '.' + this.classNames.DRAG_HANDLE,
                  helper: function (t, i) {
                    var n = r('<div/>')
                      .attr('class', i.attr('class'))
                      .addClass(e.classNames.MOVEABLE);
                    return (
                      i.children().each(function () {
                        var t = r(this),
                          e = parseInt(0 + t.css('border-left-width'), 10),
                          i = parseInt(0 + t.css('border-right-width'), 10),
                          s = t[0].clientWidth + e + i;
                        n.append(
                          r('<div/>')
                            .html(t.html())
                            .attr('class', t.attr('class'))
                            .width(s)
                        );
                      }),
                      (n = r("<div class='aui-restfultable-readonly'/>").append(n)),
                      n.css({left: i.offset().left}),
                      n.appendTo(document.body),
                      n
                    );
                  },
                  start: function (t, i) {
                    var n = i.helper[0].clientHeight,
                      s = i.placeholder.find('td');
                    i.item
                      .addClass(e.classNames.MOVEABLE)
                      .children()
                      .each(function (t) {
                        r(this).width(s.eq(t).width());
                      });
                    var a = '<td colspan="' + e.getColumnCount() + '">&nbsp;</td>';
                    i.placeholder.html(a).css({height: n, visibility: 'visible'}),
                      e.getRowFromElement(i.item[0]).trigger(e._event.MODAL);
                  },
                  stop: function (t, i) {
                    r(i.item[0]).is(':visible') &&
                      (i.item
                        .removeClass(e.classNames.MOVEABLE)
                        .children()
                        .attr('style', ''),
                      i.placeholder.removeClass(e.classNames.ROW),
                      e.getRowFromElement(i.item[0]).trigger(e._event.MODELESS));
                  },
                  update: function (t, i) {
                    var n = {
                      row: e.getRowFromElement(i.item[0]),
                      item: i.item,
                      nextItem: i.item.next(),
                      prevItem: i.item.prev(),
                    };
                    e.move(n);
                  },
                  axis: 'y',
                  delay: 0,
                  containment: 'document',
                  cursor: 'move',
                  scroll: !0,
                  zIndex: 8e3,
                }),
                this.$tbody.on('selectstart mousedown', function (t) {
                  return !r(t.target).is('.' + e.classNames.DRAG_HANDLE);
                })),
              !1 !== this.options.allowCreate &&
                ((this._createRow = new this.options.views.editRow({
                  columns: this.options.columns,
                  isCreateRow: !0,
                  model: this.options.model.extend({
                    url: function () {
                      return e.options.resources.self;
                    },
                  }),
                  cancelAccessKey: this.options.cancelAccessKey,
                  submitAccessKey: this.options.submitAccessKey,
                  allowReorder: this.options.allowReorder,
                  fieldFocusSelector: this.options.fieldFocusSelector,
                })),
                this._createRow.on(this._event.CREATED, function (t) {
                  (void 0 === e.options.addPosition &&
                    'bottom' === e.options.createPosition) ||
                  'bottom' === e.options.addPosition
                    ? e.addRow(t)
                    : e.addRow(t, 0);
                }),
                this._createRow.on(this._event.VALIDATION_ERROR, function () {
                  this.trigger(e._event.FOCUS);
                }),
                this._createRow.render({errors: {}, values: {}}),
                (this.$create = r(
                  '<tbody class="' + this.classNames.CREATE + '" />'
                ).append(this._createRow.el)),
                this._applyFocusCoordinator(this._createRow),
                this._createRow.trigger(this._event.FOCUS)),
              this._models.on('remove', function (t) {
                e.getRows().forEach(function (i) {
                  i.model === t &&
                    (i.hasFocus() && e._createRow && e._createRow.trigger(e._event.FOCUS),
                    e.removeRow(i));
                });
              }),
              this.fetchInitialResources();
          },
          fetchInitialResources: function () {
            var t = this;
            r.isFunction(this.options.resources.all)
              ? this.options.resources.all(function (e) {
                  t.populate(e);
                })
              : r.get(this.options.resources.all, function (e) {
                  t.populate(e);
                });
          },
          move: function (t) {
            var e = this,
              i = function (t) {
                return t.length
                  ? {after: e.getRowFromElement(t).model.url()}
                  : {position: 'First'};
              };
            if (t.row) {
              var n = e.options.reverseOrder ? i(t.nextItem) : i(t.prevItem);
              r.ajax({
                url: t.row.model.url() + '/move',
                type: 'POST',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(n),
                complete: function () {
                  t.row.hideLoading();
                },
                success: function (t) {
                  Wo(e._event.REORDER_SUCCESS, e, [t]);
                },
                error: function (t) {
                  var i = r.parseJSON(t.responseText || t.data);
                  Wo(e._event.SERVER_ERROR, e, [i, t, this]);
                },
              }),
                t.row.showLoading();
            }
          },
          _createCollection: function () {
            var t = this;
            return new (this.options.Collection.extend({
              sort: function (e) {
                if ((e || (e = {}), !this.comparator))
                  throw new Error('Cannot sort a set without a comparator');
                return (
                  (this.tableRows = t.getRows()),
                  (this.models = this.sortBy(this.comparator, this)),
                  (this.tableRows = void 0),
                  e.silent || this.trigger('refresh', this, e),
                  this
                );
              },
              remove: function () {
                this.tableRows = t.getRows();
                for (var e = arguments.length, i = new Array(e), n = 0; n < e; n++)
                  i[n] = arguments[n];
                return (
                  os.a.Collection.prototype.remove.apply(this, i),
                  (this.tableRows = void 0),
                  this
                );
              },
            }))([], {
              comparator: function (e) {
                var i;
                return (
                  (this && void 0 !== this.tableRows ? this.tableRows : t.getRows()).some(
                    function (t, n) {
                      if (t.model.id === e.id) return (i = n), !0;
                    }
                  ),
                  i
                );
              },
            });
          },
          populate: function (t) {
            this.options.reverseOrder && t.reverse(),
              this.hideGlobalLoading(),
              t && t.length
                ? (this._models.reset([], {silent: !0}),
                  this.renderRows(t),
                  this.isEmpty() && this.showNoEntriesMsg())
                : this.showNoEntriesMsg(),
              this.$table.append(this.$thead),
              'bottom' === this.options.createPosition
                ? this.$table.append(this.$tbody).append(this.$create)
                : this.$table.append(this.$create).append(this.$tbody),
              this.$table.trigger(this._event.INITIALIZED, [this]),
              Wo(this._event.INITIALIZED, this, [this]),
              this.options.autoFocus && this.$table.find(':input:text:first').focus();
          },
          showGlobalLoading: function () {
            return (
              this.$loading ||
                (this.$loading = r(
                  '<div class="aui-restfultable-init"><span class="aui-restfultable-loading">' +
                    Mo +
                    this.options.loadingMsg +
                    '</span></div>'
                )),
              this.$loading.is(':visible') || this.$loading.insertAfter(this.$table),
              this
            );
          },
          hideGlobalLoading: function () {
            return this.$loading && this.$loading.remove(), this;
          },
          addRow: function (t, e) {
            var i, n;
            if (!t.id)
              throw new Error(
                'RestfulTable.addRow: to add a row values object must contain an id. Maybe you are not returning it from your restend point?Recieved:' +
                  JSON.stringify(t)
              );
            return (
              (n = new this.options.model(t)),
              (i = this._renderRow(n, e)),
              this._models.add(n),
              this.removeNoEntriesMsg(),
              Wo(this._event.ROW_ADDED, this, [i, this]),
              this
            );
          },
          removeRow: function (t) {
            this._models.remove(t.model),
              t.remove(),
              this.isEmpty() && this.showNoEntriesMsg(),
              Wo(this._event.ROW_REMOVED, this, [t, this]);
          },
          isEmpty: function () {
            return 0 === this._models.length;
          },
          getModels: function () {
            return this._models;
          },
          getTable: function () {
            return this.$table;
          },
          getTableBody: function () {
            return this.$tbody;
          },
          getCreateRow: function () {
            return this._createRow;
          },
          getColumnCount: function () {
            var t = 2;
            return this.allowReorder && ++t, this.options.columns.length + t;
          },
          getRowFromElement: function (t) {
            return r(t).data(this.dataKeys.ROW_VIEW);
          },
          showNoEntriesMsg: function () {
            return (
              this.$noEntries && this.$noEntries.remove(),
              (this.$noEntries = r('<tr>')
                .addClass(this.classNames.NO_ENTRIES)
                .append(
                  r('<td>')
                    .attr('colspan', this.getColumnCount())
                    .text(this.options.noEntriesMsg)
                )
                .appendTo(this.$tbody)),
              this
            );
          },
          removeNoEntriesMsg: function () {
            return (
              this.$noEntries && this._models.length > 0 && this.$noEntries.remove(), this
            );
          },
          getRows: function () {
            var t = this,
              e = [];
            return (
              this.$tbody.find('.' + this.classNames.READ_ONLY).each(function () {
                var i = r(this).data(t.dataKeys.ROW_VIEW);
                i && e.push(i);
              }),
              e
            );
          },
          _renderRow: function (t, e) {
            var i,
              n,
              s = this,
              r = this.$tbody.find('.' + this.classNames.READ_ONLY);
            return (
              (n = new this._rowClass({
                model: t,
                columns: this.options.columns,
                allowEdit: this.options.allowEdit,
                allowDelete: this.options.allowDelete,
                allowReorder: this.options.allowReorder,
                deleteConfirmationCallback: this.options.deleteConfirmationCallback,
              })),
              this.removeNoEntriesMsg(),
              n.on(this._event.ROW_EDIT, function (t) {
                Wo(this._event.EDIT_ROW, {}, [this, s]), s.edit(this, t);
              }),
              (i = n.render().$el),
              -1 !== e &&
                ('number' == typeof e && 0 !== r.length
                  ? i.insertBefore(r[e])
                  : this.$tbody.append(i)),
              i.data(this.dataKeys.ROW_VIEW, n),
              n.on(this._event.MODAL, function () {
                s.$table.removeClass(s.classNames.ALLOW_HOVER),
                  s.$tbody.sortable('disable'),
                  s.getRows().forEach(function (t) {
                    s.isRowBeingEdited(t) || t.delegateEvents({});
                  });
              }),
              n.on(this._event.MODELESS, function () {
                s.$table.addClass(s.classNames.ALLOW_HOVER),
                  s.$tbody.sortable('enable'),
                  s.getRows().forEach(function (t) {
                    s.isRowBeingEdited(t) || t.delegateEvents();
                  });
              }),
              this._applyFocusCoordinator(n),
              this.trigger(this._event.ROW_INITIALIZED, n),
              n
            );
          },
          isRowBeingEdited: function (t) {
            var e = !1;
            return (
              this.editRows.some(function (i) {
                if (i.el === t.el) return (e = !0), !0;
              }),
              e
            );
          },
          _applyFocusCoordinator: function (t) {
            var e = this;
            return (
              t.hasFocusBound ||
                ((t.hasFocusBound = !0),
                t.on(this._event.FOCUS, function () {
                  e.focusedRow &&
                    e.focusedRow !== t &&
                    e.focusedRow.trigger(e._event.BLUR),
                    (e.focusedRow = t),
                    t instanceof zo && e._createRow && e._createRow.enable();
                })),
              this
            );
          },
          _removeEditRow: function (t) {
            var e = r.inArray(t, this.editRows);
            return this.editRows.splice(e, 1), this;
          },
          _shiftFocusAfterEdit: function () {
            return (
              this.editRows.length > 0
                ? this.editRows[this.editRows.length - 1].trigger(this._event.FOCUS)
                : this._createRow && this._createRow.trigger(this._event.FOCUS),
              this
            );
          },
          _saveEditRowOnBlur: function () {
            return this.editRows.length <= 1;
          },
          dismissEditRows: function () {
            this.editRows.forEach(function (t) {
              t.hasUpdates() || t.trigger(this._event.FINISHED_EDITING);
            }, this);
          },
          edit: function (t, e) {
            var i = this,
              n = new this.options.views.editRow({
                el: t.el,
                columns: this.options.columns,
                isUpdateMode: !0,
                allowReorder: this.options.allowReorder,
                fieldFocusSelector: this.options.fieldFocusSelector,
                model: t.model,
                cancelAccessKey: this.options.cancelAccessKey,
                submitAccessKey: this.options.submitAccessKey,
              }),
              s = t.model.toJSON();
            return (
              (s.update = !0),
              n
                .render({errors: {}, update: !0, values: s})
                .on(i._event.UPDATED, function (e, n) {
                  i._removeEditRow(this),
                    this.off(),
                    t.render().delegateEvents(),
                    t.trigger(i._event.UPDATED),
                    !1 !== n && i._shiftFocusAfterEdit();
                })
                .on(i._event.VALIDATION_ERROR, function () {
                  this.trigger(i._event.FOCUS);
                })
                .on(i._event.FINISHED_EDITING, function () {
                  i._removeEditRow(this), t.render().delegateEvents(), this.off();
                })
                .on(i._event.CANCEL, function () {
                  i._removeEditRow(this),
                    this.off(),
                    t.render().delegateEvents(),
                    i._shiftFocusAfterEdit();
                })
                .on(i._event.BLUR, function () {
                  i.dismissEditRows(),
                    i._saveEditRowOnBlur() && this.trigger(i._event.SAVE, !1);
                }),
              this._applyFocusCoordinator(n),
              n.trigger(i._event.FOCUS, e),
              i._createRow && i._createRow.disable(),
              this.editRows.push(n),
              n
            );
          },
          renderRows: function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            var e = this._models.comparator,
              i = [];
            this._models.comparator = void 0;
            var n = t.map(t => {
              var e = new this.options.model(t);
              return i.push(this._renderRow(e, -1).el), e;
            });
            return (
              this._models.add(n, {silent: !0}),
              (this._models.comparator = e),
              this.removeNoEntriesMsg(),
              this.$tbody.append(i),
              this
            );
          },
          _getDefaultOptions: function (t) {
            return {
              model: t.model || Vo,
              allowEdit: !0,
              views: {editRow: jo, row: zo},
              Collection: os.a.Collection.extend({
                url: t.resources.self,
                model: t.model || Vo,
              }),
              allowReorder: !1,
              fieldFocusSelector: function (t) {
                return ':input[name=' + t + '], #' + t;
              },
              loadingMsg: t.loadingMsg || Ht.getText('aui.words.loading'),
            };
          },
        });
      (qo.ClassNames = Do),
        (qo.CustomCreateView = So),
        (qo.CustomEditView = Ao),
        (qo.CustomReadView = Io),
        (qo.DataKeys = Oo),
        (qo.EditRow = jo),
        (qo.EntryModel = Vo),
        (qo.Events = No),
        (qo.Row = zo),
        o('RestfulTable', qo);
      var Yo = qo;
      i(88);
      function Ko(t) {
        return r(t).clone().removeAttr('id');
      }
      o('clone', Ko);
      var Jo = Ko,
        Go = window.DocumentTouch,
        Qo = 'ontouchstart' in window || (Go && document instanceof Go),
        Xo = function (t) {
          return 'value' in t || t.isContentEditable;
        };
      function Zo(t, e, i, n) {
        t.find('['.concat(n, ']')).attr(n, (t, n) => (e === n ? i : void 0));
      }
      function tl(t, e) {
        let i = r('<div></div>');
        i.append(t),
          i.find('[id]').each((t, n) => {
            const s = e(''.concat(n.id, '-'));
            !(function (t, e, i) {
              Zo(t, e, i, 'aria-controls'), Zo(t, e, i, 'aria-owns');
            })(i, n.id, s),
              (n.id = s);
          });
      }
      function el(t) {
        return t.offset().top;
      }
      function il(t) {
        (this.$el = r(t)),
          this.$el.length &&
            ((this.$body = r('body')),
            (this.$wrapper = this.$el.children('.aui-sidebar-wrapper')),
            this.$body.addClass('aui-page-sidebar'),
            (this._previousScrollTop = null),
            (this._previousViewportHeight = null),
            (this._previousViewportWidth = null),
            (this._previousOffsetTop = null),
            (this.submenus = new al()),
            (function (t) {
              if (!r('.aui-sidebar').length) return;
              (function (t) {
                t.$el.on(
                  'mouseenter mouseleave click focus',
                  t.collapsedTriggersSelector,
                  function (e) {
                    const i = r(e.target);
                    dl(t, i);
                  }
                );
              })(t),
                Qo &&
                  (function (t) {
                    if (window.matchMedia) return window.matchMedia(t).matches;
                    var e = document.createElement('style');
                    (e.type = 'text/css'),
                      (e.id = 'testMedia'),
                      (e.innerText = '@media '.concat(
                        t,
                        ' { #testMedia { width: 1px; } }'
                      )),
                      document.head.appendChild(e);
                    var i = '1px' === window.getComputedStyle(e, null).width;
                    return e.parentNode.removeChild(e), i;
                  })('only screen and (max-device-width:1024px)') &&
                  r('body').addClass('aui-page-sidebar-touch');
              var e = null,
                i = function () {
                  null === e &&
                    (e = requestAnimationFrame(function () {
                      t.reflow(), (e = null);
                    }));
                };
              r(window).on('scroll resize', i),
                i(),
                t.isAnimated() &&
                  t.$el.on('transitionend webkitTransitionEnd', function () {
                    t.$el.trigger(
                      r.Event(nl + (t.isCollapsed() ? 'collapse-end' : 'expand-end'))
                    );
                  });
              t.$el.on('click', '.aui-sidebar-toggle', function (e) {
                e.preventDefault(), t.toggle();
              }),
                r('.aui-page-panel').on('click', function () {
                  !t.isCollapsed() && t.isViewportNarrow() && t.collapse();
                });
              var n = function (e) {
                (function (t) {
                  return !(
                    t.which !== Y.LEFT_SQUARE_BRACKET ||
                    t.shiftKey ||
                    t.ctrlKey ||
                    t.metaKey ||
                    Xo(t.target)
                  );
                })(e) && t.toggle();
              };
              function s(t) {
                return t.keyCode === Y.TAB && !t.shiftKey && !t.altKey;
              }
              r(document).on('keypress', n),
                (t._remove = function () {
                  this._removeAllTooltips(),
                    r(this.inlineDialogSelector).remove(),
                    this.$el.off(),
                    this.$el.remove(),
                    r(document).off('keypress', n),
                    r(window).off('scroll resize', i);
                }),
                t.$el.on('touchend', function (e) {
                  t.isCollapsed() && (t.expand(), e.preventDefault());
                }),
                t.$el.on('mouseenter focus', t.collapsedTriggersSelector, function () {
                  if (t.isCollapsed()) {
                    var e = r(this);
                    cl(e) || fl(e);
                  }
                }),
                t.$el.on(
                  'click blur mouseleave',
                  t.collapsedTriggersSelector,
                  function () {
                    t.isCollapsed() && gl(r(this));
                  }
                ),
                t.$el.on('mouseenter focus', t.toggleSelector, function () {
                  var e = r(this);
                  t.isCollapsed()
                    ? e.data('tooltip', Ht.getText('aui.sidebar.expand.tooltip'))
                    : e.data('tooltip', Ht.getText('aui.sidebar.collapse.tooltip')),
                    fl(e);
                }),
                t.$el.on('click blur mouseleave', t.toggleSelector, function () {
                  gl(r(this));
                }),
                t.$el.on('keydown', t.collapsedTriggersSelector, function (e) {
                  if (t.isCollapsed()) {
                    var i = e.target,
                      n = ll(i);
                    if (!n) return;
                    var a = r(n);
                    s(e) &&
                      n.open &&
                      (e.preventDefault(),
                      (function (t) {
                        t.attr('persistent', ''),
                          t.find(':aui-tabbable').first().focus(),
                          setTimeout(function () {
                            t.removeAttr('persistent');
                          }, 100);
                      })(a),
                      a.on('keydown', function (t) {
                        (((function (t) {
                          return t.keyCode === Y.TAB && t.shiftKey;
                        })(t) &&
                          (function (t, e) {
                            return t === e.find(':aui-tabbable')[0];
                          })(t.target, a)) ||
                          (s(t) &&
                            (function (t, e) {
                              return t === e.find(':aui-tabbable').last()[0];
                            })(t.target, a))) &&
                          (i.focus(), r(this).off('keydown'), ul());
                      }));
                  }
                });
            })(this),
            (function (t) {
              r(t.collapsedTriggersSelector).each(function () {
                var e = r(this);
                dl(t, e);
              });
            })(this));
      }
      var nl = '_aui-internal-sidebar-';
      function sl(t) {
        return r
          .map(t.split(' '), function (t) {
            return nl + t;
          })
          .join(' ');
      }
      function rl() {
        return document.querySelectorAll(il.prototype.inlineDialogSelector);
      }
      function al() {
        this.inlineDialog = null;
      }
      function ol(t) {
        return t.is('a') ? t.next('.aui-nav') : t.children('.aui-nav, hr');
      }
      function ll(t) {
        var e = t.getAttribute('aria-controls');
        return document.getElementById(e);
      }
      function cl(t) {
        return 0 !== ol(t).length;
      }
      function ul() {
        var t = rl();
        Array.prototype.forEach.call(t, function (t) {
          t.open = !1;
        });
      }
      function dl(t, e) {
        if (
          !e.data('_aui-sidebar-submenu-constructed') &&
          (e.data('_aui-sidebar-submenu-constructed', !0), cl(e))
        ) {
          var i = document.createElement('aui-inline-dialog'),
            n = Hi('sidebar-submenu');
          return (
            e.attr('aria-controls', n),
            e.attr('data-aui-trigger', ''),
            J.init(e),
            i.setAttribute('id', n),
            i.setAttribute('alignment', 'right top'),
            i.setAttribute('hidden', ''),
            i.setAttribute('contained-by', 'viewport'),
            t.isCollapsed() && i.setAttribute('responds-to', 'hover'),
            r(i).addClass(il.prototype.inlineDialogClass),
            document.body.appendChild(i),
            J.init(i),
            (function (t, e, i) {
              i.addEventListener('aui-layer-show', function (n) {
                if (t.isCollapsed()) {
                  if (
                    !(function (t) {
                      return 'AUI-INLINE-DIALOG' !== t.target.tagName;
                    })(n) &&
                    !(function (t) {
                      return !t.target.classList.contains('aui-sidebar-submenu-dialog');
                    })(n)
                  ) {
                    var s = r.Event('aui-sidebar-submenu-before-show');
                    e.trigger(s, i),
                      s.isDefaultPrevented()
                        ? n.preventDefault()
                        : (function (t, e) {
                            t.addClass('active'), (e.innerHTML = hl);
                            var i = t.is('a')
                                ? t.text()
                                : t.children('.aui-nav-heading').text(),
                              n = r(e).find('.aui-navgroup-inner');
                            n
                              .children('.aui-nav-heading')
                              .attr('title', i)
                              .children('strong')
                              .text(i),
                              (function (t) {
                                const e = Jo(t);
                                tl(e, Hi),
                                  e.hasClass('aui-expander-content') &&
                                    (e.find('.aui-expander-cutoff').remove(),
                                    e.removeClass('aui-expander-content'));
                                return e;
                              })(ol(t)).appendTo(n);
                          })(e, i);
                  }
                } else n.preventDefault();
              }),
                i.addEventListener('aui-layer-hide', function () {
                  !(function (t) {
                    t.removeClass('active');
                  })(e);
                });
            })(t, e, i),
            i
          );
        }
      }
      (il.prototype.on = function () {
        var t = arguments[0],
          e = Array.prototype.slice.call(arguments, 1),
          i = sl(t);
        return this.$el.on.apply(this.$el, [i].concat(e)), this;
      }),
        (il.prototype.off = function () {
          var t = arguments[0],
            e = Array.prototype.slice.call(arguments, 1),
            i = sl(t);
          return this.$el.off.apply(this.$el, [i].concat(e)), this;
        }),
        (il.prototype.setHeight = function (t, e, i) {
          var n = Math.max(0, i - t);
          return this.$wrapper.height(e - n), this;
        }),
        (il.prototype.setTopPosition = function () {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : window.pageYOffset;
          return this.$wrapper.toggleClass('aui-is-docked', t > el(this.$el)), this;
        }),
        (il.prototype.setPosition = N(
          il.prototype.setTopPosition,
          'Sidebar.setPosition',
          {
            removeInVersion: '10.0.0',
            sinceVersion: '7.6.1',
            alternativeName: 'Sidebar.setTopPosition',
          }
        )),
        (il.prototype.setLeftPosition = function () {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : window.pageXOffset;
          return (
            this.$wrapper.hasClass('aui-is-docked') && this.$wrapper.css({left: -t}), this
          );
        }),
        (il.prototype.setCollapsedState = function (t) {
          var e = {collapsed: {}, expanded: {}};
          (e.collapsed.narrow = {
            narrow: r.noop,
            wide: function (e) {
              e._expand(t, !0);
            },
          }),
            (e.collapsed.wide = {narrow: r.noop, wide: r.noop}),
            (e.expanded.narrow = {
              narrow: r.noop,
              wide: function (t) {
                t.$body.removeClass('aui-sidebar-collapsed'),
                  t.$el.removeClass('aui-sidebar-fly-out');
              },
            }),
            (e.expanded.wide = {
              narrow: function (t) {
                t._collapse(!0);
              },
              wide: r.noop,
            });
          var i = this.isCollapsed() ? 'collapsed' : 'expanded',
            n = this.isViewportNarrow(this._previousViewportWidth) ? 'narrow' : 'wide',
            s = this.isViewportNarrow(t) ? 'narrow' : 'wide';
          return e[i][n][s](this), this;
        }),
        (il.prototype._collapse = function (t) {
          if (this.isCollapsed()) return this;
          var e = r.Event(nl + 'collapse-start', {isResponsive: t});
          return (
            this.$el.trigger(e),
            e.isDefaultPrevented()
              ? this
              : (this.$body.addClass('aui-sidebar-collapsed'),
                this.$el.attr('aria-expanded', 'false'),
                this.$el.removeClass('aui-sidebar-fly-out'),
                this.$el.find(this.submenuTriggersSelector).attr('tabindex', 0),
                r(this.inlineDialogSelector).attr('responds-to', 'hover'),
                this.isAnimated() ||
                  this.$el.trigger(r.Event(nl + 'collapse-end', {isResponsive: t})),
                this)
          );
        }),
        (il.prototype.collapse = function () {
          return this._collapse(!1);
        }),
        (il.prototype._expand = function (t, e) {
          var i = r.Event(nl + 'expand-start', {isResponsive: e});
          if ((this.$el.trigger(i), i.isDefaultPrevented())) return this;
          var n = this.isViewportNarrow(t);
          return (
            this.$el.attr('aria-expanded', 'true'),
            this.$body.toggleClass('aui-sidebar-collapsed', n),
            this.$el.toggleClass('aui-sidebar-fly-out', n),
            this.$el.find(this.submenuTriggersSelector).removeAttr('tabindex'),
            r(this.inlineDialogSelector).removeAttr('responds-to'),
            this.isAnimated() ||
              this.$el.trigger(r.Event(nl + 'expand-end', {isResponsive: e})),
            this
          );
        }),
        (il.prototype.expand = function () {
          return (
            this.isCollapsed() && this._expand(this._previousViewportWidth, !1), this
          );
        }),
        (il.prototype.isAnimated = function () {
          return this.$el.hasClass('aui-is-animated');
        }),
        (il.prototype.isCollapsed = function () {
          return 'false' === this.$el.attr('aria-expanded');
        }),
        (il.prototype.isViewportNarrow = function (t) {
          return (t = void 0 === t ? this._previousViewportWidth : t) < 1240;
        }),
        (il.prototype._removeAllTooltips = function () {
          r(this.tooltipSelector).remove();
        }),
        (il.prototype.responsiveReflow = function (t, e) {
          if (t) {
            if (!this.isCollapsed() && this.isViewportNarrow(e)) {
              var i = this.isAnimated();
              i && this.$el.removeClass('aui-is-animated'),
                this.collapse(),
                i && (this.$el[0].offsetHeight, this.$el.addClass('aui-is-animated'));
            }
          } else e !== this._previousViewportWidth && this.setCollapsedState(e);
        }),
        (il.prototype.reflow = function () {
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : window.pageYOffset,
            e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : document.documentElement.clientHeight,
            i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : window.innerWidth,
            n =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : document.documentElement.scrollHeight,
            s =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : window.pageXOffset;
          var r = el(this.$el),
            a = null === this._previousViewportWidth;
          if (
            t !== this._previousScrollTop ||
            e !== this._previousViewportHeight ||
            r !== this._previousOffsetTop
          ) {
            this.isCollapsed() &&
              !a &&
              t !== this._previousScrollTop &&
              this._removeAllTooltips();
            var o = this.$body.hasClass('aui-page-sidebar-touch'),
              l = t !== this._previousScrollTop && (t < 0 || t + e > n);
            o || (!a && l) || (this.setHeight(t, e, r), this.setTopPosition(t));
          }
          if (
            (s !== this._previousScrollLeft && this.setLeftPosition(s),
            'false' !== this.$el.attr('data-aui-responsive'))
          )
            this.responsiveReflow(a, i);
          else {
            var c = !this.isCollapsed() && this.isViewportNarrow(i);
            this.$el.toggleClass('aui-sidebar-fly-out', c);
          }
          return (
            (this._previousScrollTop = t),
            (this._previousViewportHeight = e),
            (this._previousViewportWidth = i),
            (this._previousOffsetTop = r),
            (this._previousScrollLeft = s),
            this
          );
        }),
        (il.prototype.toggle = function () {
          return (
            this.isCollapsed()
              ? (this.expand(), this._removeAllTooltips())
              : this.collapse(),
            this
          );
        }),
        (il.prototype.submenuTriggersSelector =
          '.aui-sidebar-group:not(.aui-sidebar-group-tier-one)'),
        (il.prototype.collapsedTriggersSelector = [
          il.prototype.submenuTriggersSelector,
          '.aui-sidebar-group.aui-sidebar-group-tier-one > .aui-nav > li > a',
          '.aui-sidebar-footer > .aui-sidebar-settings-button',
        ].join(', ')),
        (il.prototype.toggleSelector = '.aui-sidebar-footer > .aui-sidebar-toggle'),
        (il.prototype.tooltipSelector = '.aui-sidebar-section-tooltip'),
        (il.prototype.inlineDialogClass = 'aui-sidebar-submenu-dialog'),
        (il.prototype.inlineDialogSelector = '.' + il.prototype.inlineDialogClass),
        (al.prototype.submenu = function (t) {
          return vl(), ol(t);
        }),
        (al.prototype.hasSubmenu = function (t) {
          return vl(), cl(t);
        }),
        (al.prototype.submenuHeadingHeight = function () {
          return vl(), 34;
        }),
        (al.prototype.isShowing = function () {
          return vl(), il.prototype.isSubmenuVisible();
        }),
        (al.prototype.show = function (t, e) {
          vl(),
            (function (t) {
              ll(t).open = !0;
            })(e);
        }),
        (al.prototype.hide = function () {
          vl(), ul();
        }),
        (al.prototype.inlineDialogShowHandler = function () {
          vl();
        }),
        (al.prototype.inlineDialogHideHandler = function () {
          vl();
        }),
        (al.prototype.moveSubmenuToInlineDialog = function () {
          vl();
        }),
        (al.prototype.restoreSubmenu = function () {
          vl();
        }),
        (il.prototype.getVisibleSubmenus = function () {
          return Array.prototype.filter.call(rl(), function (t) {
            return t.open;
          });
        }),
        (il.prototype.isSubmenuVisible = function () {
          return this.getVisibleSubmenus().length > 0;
        });
      const hl =
        '<div class="aui-inline-dialog-contents"><div class="aui-sidebar-submenu" ><div class="aui-navgroup aui-navgroup-vertical"><div class="aui-navgroup-inner"><div class="aui-nav-heading"><strong></strong></div></div></div></div></div>';
      var pl = {
        trigger: 'manual',
        gravity: 'w',
        className: 'aui-sidebar-section-tooltip',
        title: function () {
          var t = r(this);
          return t.is('a') || t.is('button')
            ? t.attr('title') || t.find('.aui-nav-item-label').text() || t.data('tooltip')
            : t.children('.aui-nav').attr('title') ||
                t.children('.aui-nav-heading').text();
        },
      };
      function fl(t) {
        t.tooltip(pl).tooltip('show');
        var e = t.data('tipsy') && t.data('tipsy').$tip;
        e && e.css({opacity: ''}).addClass('tooltip-shown');
      }
      function gl(t) {
        var e = t.data('tipsy') && t.data('tipsy').$tip;
        if (e) {
          var i = e.css('transition-duration');
          if (i) {
            var n =
              i.indexOf('ms') >= 0
                ? parseInt(i.substring(0, i.length - 2), 10)
                : 1e3 * parseInt(i.substring(0, i.length - 1), 10);
            setTimeout(function () {
              e.hasClass('tooltip-shown') &&
                (t.tooltip('hide'), e.removeClass('tooltip-shown'));
            }, n);
          } else e.removeClass('tooltip-shown');
        }
      }
      var ml = ht('sidebar', il);
      r(function () {
        ml('.aui-sidebar');
      });
      var vl = I('Sidebar.submenus', {removeInVersion: '10.0.0', sinceVersion: '5.8.0'});
      o('sidebar', ml);
      var bl = ml;
      i(89), i(90);
      const yl = 2600;
      function wl(t) {
        var e = {
          width: 800,
          height: 600,
          closeOnOutsideClick: !1,
          keypressListener: function (t) {
            t.keyCode === Y.ESCAPE && i.is(':visible') && l.hide();
          },
        };
        'object' != typeof t &&
          ((t = {width: arguments[0], height: arguments[1], id: arguments[2]}),
          (t = r.extend({}, t, arguments[3]))),
          (t = r.extend({}, e, t));
        var i = r('<div></div>').addClass('aui-popup');
        t.id && i.attr('id', t.id);
        var n = yl;
        r('.aui-dialog').each(function () {
          var t = r(this);
          n = t.css('z-index') > n ? t.css('z-index') : n;
        });
        var s = (function e(s, r) {
          return (
            (t.width = s = s || t.width),
            (t.height = r = r || t.height),
            i.css({
              marginTop: -Math.round(r / 2) + 'px',
              marginLeft: -Math.round(s / 2) + 'px',
              width: s,
              height: r,
              'z-index': parseInt(n, 10) + 2,
            }),
            e
          );
        })(t.width, t.height);
        r('body').append(i), i.hide(), u(i);
        var a = r('.aui-blanket'),
          o = function (t, e) {
            var i = r(t, e);
            return !!i.length && (i.focus(), !0);
          },
          l = {
            changeSize: function (e, i) {
              ((e && e != t.width) || (i && i != t.height)) && s(e, i), this.show();
            },
            show: function () {
              var e = function () {
                r(document)
                  .off('keydown', t.keypressListener)
                  .on('keydown', t.keypressListener),
                  U(),
                  0 !== (a = r('.aui-blanket')).length &&
                    t.closeOnOutsideClick &&
                    a.on('click', function () {
                      i.is(':visible') && l.hide();
                    }),
                  i.show(),
                  (wl.current = this),
                  (function (e) {
                    if (0 === r('.dialog-page-body', e).find(':focus').length) {
                      if (t.focusSelector) return o(t.focusSelector, e);
                      o(':input:visible:enabled:first', r('.dialog-page-body', e)) ||
                        o(':input:visible:enabled:first', r('.dialog-button-panel', e)) ||
                        o(':input:visible:enabled:first', r('.dialog-page-menu', e));
                    }
                  })(i),
                  r(document).trigger('showLayer', ['popup', this]);
              };
              e.call(this), (this.show = e);
            },
            hide: function () {
              r(document).unbind('keydown', t.keypressListener),
                a.unbind(),
                this.element.hide(),
                0 === r('.aui-dialog:visible').length && V();
              var e = document.activeElement;
              this.element.has(e).length && e.blur(),
                r(document).trigger('hideLayer', ['popup', this]),
                (wl.current = null),
                this.enable();
            },
            element: i,
            remove: function () {
              i.remove(), (this.element = null);
            },
            disable: function () {
              this.disabled ||
                ((this.popupBlanket = r("<div class='dialog-blanket'> </div>").css({
                  height: i.height(),
                  width: i.width(),
                })),
                i.append(this.popupBlanket),
                (this.disabled = !0));
            },
            enable: function () {
              this.disabled &&
                ((this.disabled = !1),
                this.popupBlanket.remove(),
                (this.popupBlanket = null));
            },
          };
        return l;
      }
      var _l = (function () {
        function t(t, e, i, n) {
          t.buttonpanel || t.addButtonPanel(),
            (this.page = t),
            (this.onclick = i),
            (this._onclick = function (e) {
              return !0 === i.call(this, t.dialog, t, e);
            }),
            (this.item = r('<button></button>').html(e).addClass('button-panel-button')),
            n && this.item.addClass(n),
            'function' == typeof i && this.item.on('click', this._onclick),
            t.buttonpanel.append(this.item),
            (this.id = t.button.length),
            (t.button[this.id] = this);
        }
        function e(t, e) {
          var i = 'left' == t ? -1 : 1;
          return function (t) {
            var n = this.page[e];
            if (this.id != (1 == i ? n.length - 1 : 0)) {
              (i *= t || 1),
                n[this.id + i].item[i < 0 ? 'before' : 'after'](this.item),
                n.splice(this.id, 1),
                n.splice(this.id + i, 0, this);
              for (var s = 0, r = n.length; s < r; s++)
                'panel' == e && this.page.curtab == n[s].id && (this.page.curtab = s),
                  (n[s].id = s);
            }
            return this;
          };
        }
        function i(t) {
          return function () {
            this.page[t].splice(this.id, 1);
            for (var e = 0, i = this.page[t].length; e < i; e++) this.page[t][e].id = e;
            this.item.remove();
          };
        }
        (t.prototype.moveUp = t.prototype.moveLeft = e('left', 'button')),
          (t.prototype.moveDown = t.prototype.moveRight = e('right', 'button')),
          (t.prototype.remove = i('button')),
          (t.prototype.html = function (t) {
            return this.item.html(t);
          }),
          (t.prototype.onclick = function (t) {
            let e = this;
            if (void 0 === t) return this.onclick;
            this.item.unbind('click', this._onclick),
              (this._onclick = function (i) {
                return !0 === t.call(this, e.page.dialog, e.page, i);
              }),
              'function' == typeof t && this.item.click(this._onclick);
          });
        var n = function (t, e, i, n, s) {
          i instanceof r || (i = r(i)),
            (this.dialog = t.dialog),
            (this.page = t),
            (this.id = t.panel.length),
            (this.button = r('<button></button>').html(e).addClass('item-button')),
            s && (this.button[0].id = s),
            (this.item = r('<li></li>').append(this.button).addClass('page-menu-item')),
            (this.body = r('<div></div>')
              .append(i)
              .addClass('dialog-panel-body')
              .css('height', t.dialog.height + 'px')),
            (this.padding = 20),
            n && this.body.addClass(n);
          var a = t.panel.length,
            o = this;
          t.menu.append(this.item), t.body.append(this.body), (t.panel[a] = this);
          var l = function () {
            var e;
            t.curtab + 1 &&
              ((e = t.panel[t.curtab]).body.hide(),
              e.item.removeClass('selected'),
              'function' == typeof e.onblur && e.onblur()),
              (t.curtab = o.id),
              o.body.show(),
              o.item.addClass('selected'),
              'function' == typeof o.onselect && o.onselect(),
              'function' == typeof t.ontabchange && t.ontabchange(o, e);
          };
          this.button.click
            ? this.button.click(l)
            : (h('atlassian-dialog:Panel:constructor - this.button.click false'),
              (this.button.onclick = l)),
            l(),
            0 == a ? t.menu.css('display', 'none') : t.menu.show();
        };
        (n.prototype.select = function () {
          this.button.click();
        }),
          (n.prototype.moveUp = n.prototype.moveLeft = e('left', 'panel')),
          (n.prototype.moveDown = n.prototype.moveRight = e('right', 'panel')),
          (n.prototype.remove = i('panel')),
          (n.prototype.html = function (t) {
            return t ? (this.body.html(t), this) : this.body.html();
          }),
          (n.prototype.setPadding = function (t) {
            return (
              isNaN(+t) ||
                (this.body.css('padding', +t),
                (this.padding = +t),
                this.page.recalcSize()),
              this
            );
          });
        var s = function (t, e) {
          (this.dialog = t),
            (this.id = t.page.length),
            (this.element = r('<div></div>').addClass('dialog-components')),
            (this.body = r('<div></div>').addClass('dialog-page-body')),
            (this.menu = r('<ul></ul>')
              .addClass('dialog-page-menu')
              .css('height', t.height + 'px')),
            this.body.append(this.menu),
            this.curtab,
            (this.panel = []),
            (this.button = []),
            e && this.body.addClass(e),
            t.popup.element.append(this.element.append(this.menu).append(this.body)),
            (t.page[t.page.length] = this);
        };
        function a(t, e, i) {
          var n = {};
          +t || ((t = (n = Object(t)).width), (e = n.height), (i = n.id)),
            (this.height = e || 480),
            (this.width = t || 640),
            (this.id = i),
            (n = r.extend({}, n, {width: this.width, height: this.height, id: this.id})),
            (this.popup = wl(n)),
            this.popup.element.addClass('aui-dialog'),
            (this.page = []),
            (this.curpage = 0),
            new s(this);
        }
        return (
          (s.prototype.recalcSize = function () {
            for (
              var t = this.header ? 62 : 0,
                e = this.buttonpanel ? 52 : 0,
                i = this.panel.length;
              i--;

            ) {
              var n = this.dialog.height - t - e;
              this.panel[i].body.css('height', n), this.menu.css('height', n);
            }
          }),
          (s.prototype.addButtonPanel = function () {
            (this.buttonpanel = r('<div></div>').addClass('dialog-button-panel')),
              this.element.append(this.buttonpanel);
          }),
          (s.prototype.addPanel = function (t, e, i, s) {
            return new n(this, t, e, i, s), this.recalcSize(), this;
          }),
          (s.prototype.addHeader = function (t, e) {
            return (
              this.header && this.header.remove(),
              (this.header = r('<h2></h2>')
                .text(t || '')
                .addClass('dialog-title')),
              e && this.header.addClass(e),
              this.element.prepend(this.header),
              this.recalcSize(),
              this
            );
          }),
          (s.prototype.addButton = function (e, i, n) {
            return new t(this, e, i, n), this.recalcSize(), this;
          }),
          (s.prototype.addLink = function (t, e, i, n) {
            return (
              new (function (t, e, i, n, s) {
                t.buttonpanel || t.addButtonPanel(),
                  s || (s = '#'),
                  (this.page = t),
                  (this.onclick = i),
                  (this._onclick = function (e) {
                    return !0 === i.call(this, t.dialog, t, e);
                  }),
                  (this.item = r('<a></a>')
                    .html(e)
                    .attr('href', s)
                    .addClass('button-panel-link')),
                  n && this.item.addClass(n),
                  'function' == typeof i && this.item.click(this._onclick),
                  t.buttonpanel.append(this.item),
                  (this.id = t.button.length),
                  (t.button[this.id] = this);
              })(this, t, e, i, n),
              this.recalcSize(),
              this
            );
          }),
          (s.prototype.gotoPanel = function (t) {
            this.panel[t.id || t].select();
          }),
          (s.prototype.getCurrentPanel = function () {
            return this.panel[this.curtab];
          }),
          (s.prototype.hide = function () {
            this.element.hide();
          }),
          (s.prototype.show = function () {
            this.element.show();
          }),
          (s.prototype.remove = function () {
            this.element.remove();
          }),
          (a.prototype.addHeader = function (t, e) {
            return this.page[this.curpage].addHeader(t, e), this;
          }),
          (a.prototype.addButton = function (t, e, i) {
            return this.page[this.curpage].addButton(t, e, i), this;
          }),
          (a.prototype.addLink = function (t, e, i, n) {
            return this.page[this.curpage].addLink(t, e, i, n), this;
          }),
          (a.prototype.addSubmit = function (t, e) {
            return (
              this.page[this.curpage].addButton(t, e, 'button-panel-submit-button'), this
            );
          }),
          (a.prototype.addCancel = function (t, e) {
            return (
              this.page[this.curpage].addLink(t, e, 'button-panel-cancel-link'), this
            );
          }),
          (a.prototype.addButtonPanel = function () {
            return this.page[this.curpage].addButtonPanel(), this;
          }),
          (a.prototype.addPanel = function (t, e, i, n) {
            return this.page[this.curpage].addPanel(t, e, i, n), this;
          }),
          (a.prototype.addPage = function (t) {
            return (
              new s(this, t),
              this.page[this.curpage].hide(),
              (this.curpage = this.page.length - 1),
              this
            );
          }),
          (a.prototype.nextPage = function () {
            return (
              this.page[this.curpage++].hide(),
              this.curpage >= this.page.length && (this.curpage = 0),
              this.page[this.curpage].show(),
              this
            );
          }),
          (a.prototype.prevPage = function () {
            return (
              this.page[this.curpage--].hide(),
              this.curpage < 0 && (this.curpage = this.page.length - 1),
              this.page[this.curpage].show(),
              this
            );
          }),
          (a.prototype.gotoPage = function (t) {
            return (
              this.page[this.curpage].hide(),
              (this.curpage = t),
              this.curpage < 0
                ? (this.curpage = this.page.length - 1)
                : this.curpage >= this.page.length && (this.curpage = 0),
              this.page[this.curpage].show(),
              this
            );
          }),
          (a.prototype.getPanel = function (t, e) {
            var i = null == e ? this.curpage : t;
            return null == e && (e = t), this.page[i].panel[e];
          }),
          (a.prototype.getPage = function (t) {
            return this.page[t];
          }),
          (a.prototype.getCurrentPanel = function () {
            return this.page[this.curpage].getCurrentPanel();
          }),
          (a.prototype.gotoPanel = function (t, e) {
            if (null != e) {
              var i = t.id || t;
              this.gotoPage(i);
            }
            this.page[this.curpage].gotoPanel(void 0 === e ? t : e);
          }),
          (a.prototype.show = function () {
            return this.popup.show(), x('show.dialog', {dialog: this}), this;
          }),
          (a.prototype.hide = function () {
            return this.popup.hide(), x('hide.dialog', {dialog: this}), this;
          }),
          (a.prototype.remove = function () {
            this.popup.hide(), this.popup.remove(), x('remove.dialog', {dialog: this});
          }),
          (a.prototype.disable = function () {
            return this.popup.disable(), this;
          }),
          (a.prototype.enable = function () {
            return this.popup.enable(), this;
          }),
          (a.prototype.get = function (t) {
            var e = [],
              i = this,
              n =
                '(?:(page|panel|button|header)(?:#([^"][^ ]*|"[^"]*")|:(\\d+))?|#([^"][^ ]*|"[^"]*"))',
              s = new RegExp('(?:^|,)\\s*' + n + '(?:\\s+' + n + ')?\\s*(?=,|$)', 'ig');
            (t + '').replace(s, function (t, n, s, r, a, o, l, c, u) {
              var d = [];
              if (
                ('page' == (n = n && n.toLowerCase()) && i.page[r]
                  ? (d.push(i.page[r]),
                    (n = (n = o) && n.toLowerCase()),
                    (s = l),
                    (r = c),
                    (a = u))
                  : (d = i.page),
                (s = s && (s + '').replace(/"/g, '')),
                (l = l && (l + '').replace(/"/g, '')),
                (a = a && (a + '').replace(/"/g, '')),
                (u = u && (u + '').replace(/"/g, '')),
                n || a)
              )
                for (var h = d.length; h--; ) {
                  if (a || ('panel' == n && (s || (!s && null == r))))
                    for (var p = d[h].panel.length; p--; )
                      (d[h].panel[p].button.html() == a ||
                        d[h].panel[p].button.html() == s ||
                        ('panel' == n && !s && null == r)) &&
                        e.push(d[h].panel[p]);
                  if (a || ('button' == n && (s || (!s && null == r))))
                    for (p = d[h].button.length; p--; )
                      (d[h].button[p].item.html() == a ||
                        d[h].button[p].item.html() == s ||
                        ('button' == n && !s && null == r)) &&
                        e.push(d[h].button[p]);
                  d[h][n] && d[h][n][r] && e.push(d[h][n][r]),
                    'header' == n && d[h].header && e.push(d[h].header);
                }
              else e = e.concat(d);
            });
            for (var r = {length: e.length}, a = e.length; a--; )
              for (var o in ((r[a] = e[a]), e[a]))
                o in r ||
                  (function (t) {
                    r[t] = function () {
                      for (var e = this.length; e--; )
                        'function' == typeof this[e][t] &&
                          this[e][t].apply(this[e], arguments);
                    };
                  })(o);
            return r;
          }),
          (a.prototype.updateHeight = function () {
            for (
              var t = 0, e = r(window).height() - 62 - 52 - 100, i = 0;
              this.getPanel(i);
              i++
            )
              this.getPanel(i)
                .body.css({height: 'auto', display: 'block'})
                .outerHeight() > t &&
                (t = Math.min(e, this.getPanel(i).body.outerHeight())),
                i !== this.page[this.curpage].curtab &&
                  this.getPanel(i).body.css({display: 'none'});
            for (i = 0; this.getPanel(i); i++)
              this.getPanel(i).body.css({height: t || this.height});
            this.page[0].menu.height(t),
              (this.height = t + 62 + 52 + 1),
              this.popup.changeSize(void 0, this.height);
          }),
          (a.prototype.isMaximised = function () {
            return this.popup.element.outerHeight() >= r(window).height() - 100;
          }),
          (a.prototype.getCurPanel = function () {
            return this.getPanel(this.page[this.curpage].curtab);
          }),
          (a.prototype.getCurPanelButton = function () {
            return this.getCurPanel().button;
          }),
          a
        );
      })();
      (_l = M(_l, 'Dialog constructor', {alternativeName: 'Dialog2'})),
        (wl = M(wl, 'Dialog popup constructor', {alternatveName: 'Dialog2'})),
        o('Dialog', _l),
        o('popup', wl);
      const xl = !1;
      var kl = -1 !== navigator.platform.indexOf('Mac'),
        Cl = -1 !== navigator.userAgent.indexOf('Safari'),
        El =
          /^(backspace|tab|r(ight|eturn)|s(hift|pace|croll)|c(trl|apslock)|alt|pa(use|ge(up|down))|e(sc|nd)|home|left|up|d(el|own)|insert|f\d\d?|numlock|meta)/i;
      const Tl = t => {
        const e = t[0];
        if (e) {
          const t = !0,
            i = !0,
            n = document.createEvent('MouseEvent');
          n.initMouseEvent('click', t, i, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null),
            e.dispatchEvent(n);
        }
      };
      function Dl(t) {
        var e = [],
          i = r.Callbacks();
        function n(t) {
          !wl.current && i && i.fire(t);
        }
        function s(t) {
          t.preventDefault();
        }
        function a(t) {
          (t && t.split ? r.trim(t).split(' ') : [t]).forEach(function (t) {
            !(function (t) {
              var i =
                  t instanceof Array
                    ? t
                    : (function (t) {
                        var e = [],
                          i = '';
                        for (; t.length; ) {
                          var n = t.match(/^(ctrl|meta|shift|alt)\+/i),
                            s = t.match(El);
                          n
                            ? ((i += n[0]), (t = t.substring(n[0].length)))
                            : s
                            ? (e.push(i + s[0]), (t = t.substring(s[0].length)), (i = ''))
                            : (e.push(i + t[0]), (t = t.substring(1)), (i = ''));
                        }
                        return e;
                      })(t.toString()),
                a = (function (t) {
                  var e = t.length;
                  for (; e--; ) if (t[e].length > 1 && 'space' !== t[e]) return !0;
                  return !1;
                })(i)
                  ? 'keydown'
                  : 'keypress';
              e.push(i),
                r(document).on(a, xl, i, n),
                r(document).on(a + ' keyup', xl, i, s);
            })(t);
          });
        }
        function o(t, e, i) {
          return (
            i
              ? (e += ' (' + Ht.getText('aui.keyboard.shortcut.type.x', t.shift()))
              : ((e = e.replace(/\)$/, '')),
                (e += Ht.getText('aui.keyboard.shortcut.or.x', t.shift()))),
            t.forEach(function (t) {
              e += ' ' + Ht.getText('aui.keyboard.shortcut.then.x', t);
            }),
            (e += ')')
          );
        }
        return (
          a(t),
          Dl.makeShortcut({
            executor: i,
            bindKeys: a,
            addShortcutsToTitle: function (t) {
              for (
                var i = r(t),
                  n = i.attr('title') || '',
                  s = e.slice(),
                  a = i.data('boundKeyCombos') || [],
                  l = i.data('kbShortcutAppended') || '',
                  c = !l,
                  u = c ? n : n.substring(0, n.length - l.length);
                s.length;

              ) {
                var d = s.shift();
                a.some(function (t) {
                  return Object(zt.isEqual)(d, t);
                }) || ((l = o(d.slice(), l, c)), (c = !1));
              }
              kl && (l = l.replace(/Meta/gi, '⌘').replace(/Shift/gi, '⇧')),
                i.attr('title', u + l),
                i.data('kbShortcutAppended', l),
                i.data('boundKeyCombos', a.concat(e));
            },
            removeShortcutsFromTitle: function (t) {
              var e = r(t),
                i = e.data('kbShortcutAppended');
              if (i) {
                var n = e.attr('title');
                e.attr('title', n.replace(i, '')),
                  e.removeData('kbShortcutAppended'),
                  e.removeData('boundKeyCombos');
              }
            },
            keypressHandler: n,
            defaultPreventionHandler: s,
          })
        );
      }
      (Dl.makeShortcut = function (t) {
        var e = t.executor,
          i = t.bindKeys,
          n = t.addShortcutsToTitle,
          s = t.removeShortcutsFromTitle,
          a = t.keypressHandler,
          o = t.defaultPreventionHandler,
          l = [];
        function c(t) {
          return function (i, n) {
            var s = (n = n || {}).focusedClass || 'focused',
              a = !n.hasOwnProperty('wrapAround') || n.wrapAround,
              o = !n.hasOwnProperty('escToCancel') || n.escToCancel;
            return (
              e.add(function () {
                const e = r(i);
                let n = e.filter('.' + s);
                const l = 0 === n.length ? void 0 : {transition: !0};
                o &&
                  r(document).one('keydown', function (t) {
                    t.keyCode === Y.ESCAPE && n && n.removeClass(s);
                  }),
                  n.length && n.removeClass(s),
                  (n = t(n, e, a)) &&
                    n.length > 0 &&
                    (n.addClass(s),
                    n.moveTo(l),
                    n.is('a') ? n.focus() : n.find('a:first').focus());
              }),
              this
            );
          };
        }
        return {
          moveToNextItem: c(function (t, e, i) {
            var n;
            return i && 0 === t.length
              ? e.eq(0)
              : (n = r.inArray(t.get(0), e)) < e.length - 1
              ? ((n += 1), e.eq(n))
              : i
              ? e.eq(0)
              : t;
          }),
          moveToPrevItem: c(function (t, e, i) {
            var n;
            return i && 0 === t.length
              ? e.filter(':last')
              : (n = r.inArray(t.get(0), e)) > 0
              ? ((n -= 1), e.eq(n))
              : i
              ? e.filter(':last')
              : t;
          }),
          click: function (t) {
            return (
              l.push(t),
              n(t),
              e.add(function () {
                const e = r(t);
                Tl(e);
              }),
              this
            );
          },
          goTo: function (t) {
            return (
              e.add(function () {
                window.location.href = t;
              }),
              this
            );
          },
          followLink: function (t) {
            return (
              l.push(t),
              n(t),
              e.add(function () {
                var e = r(t)[0];
                e &&
                  {a: !0, link: !0}[e.nodeName.toLowerCase()] &&
                  (window.location.href = e.href);
              }),
              this
            );
          },
          execute: function (t) {
            var i = this;
            return (
              e.add(function () {
                t.apply(i, arguments);
              }),
              this
            );
          },
          evaluate: function (t) {
            t.call(this);
          },
          moveToAndClick: function (t) {
            return (
              l.push(t),
              n(t),
              e.add(function () {
                const e = r(t);
                e.length > 0 && (Tl(e), e.moveTo());
              }),
              this
            );
          },
          moveToAndFocus: function (t) {
            return (
              l.push(t),
              n(t),
              e.add(function (e) {
                var i = r(t);
                i.length > 0 &&
                  (i.focus(),
                  i.moveTo && i.moveTo(),
                  i.is(':input') && e.preventDefault());
              }),
              this
            );
          },
          or: function (t) {
            return i(t), this;
          },
          unbind: function () {
            r(document).unbind('keydown keypress', a).unbind('keydown keypress keyup', o);
            for (var t = 0, e = l.length; t < e; t++) s(l[t]);
            l = [];
          },
        };
      }),
        (Dl.fromJSON = function (t, e) {
          var i = [];
          return (
            t &&
              r.each(t, function (t, n) {
                const s = n.op,
                  a = n.param;
                let o;
                if ('execute' === s || 'evaluate' === s) o = [new Function(a)];
                else if (/^\[[^\]\[]*,[^\]\[]*\]$/.test(a)) {
                  try {
                    o = JSON.parse(a);
                  } catch (t) {
                    f(
                      'When using a parameter array, array must be in strict JSON format: ' +
                        a
                    );
                  }
                  r.isArray(o) ||
                    f(
                      'Badly formatted shortcut parameter. String or JSON Array of parameters required: ' +
                        a
                    );
                } else o = [a];
                r.each(n.keys, function () {
                  var t = this;
                  e &&
                    kl &&
                    (t = r.map(t, function (t) {
                      return t.replace(/ctrl/i, 'meta');
                    }));
                  var n = Dl(t);
                  n[s].apply(n, o), i.push(n);
                });
              }),
            i
          );
        }),
        r(document).on('iframeAppended', function (t, e) {
          r(e).load(function () {
            r(e)
              .contents()
              .on('keyup keydown keypress', function (t) {
                (Cl && 'keypress' === t.type) ||
                  r(t.target).is(':input') ||
                  r.event.trigger(t, arguments, document, !0);
              });
          });
        }),
        o('whenIType', Dl);
      var Sl = Dl;
      const {
          FocusManager: Al,
          InlineDialog2: Il,
          LayerManager: Ol,
          ProgressiveDataSet: Nl,
          clone: Ml,
          debounce: Pl,
          debounceImmediate: Ll,
          dim: Rl,
          escapeHtml: $l,
          formValidation: jl,
          id: Fl,
          isClipped: Hl,
          keyCode: Bl,
          layer: Wl,
          messages: Ul,
          populateParameters: Vl,
          params: zl,
          responsiveheader: ql,
          select: Yl,
          tablessortable: Kl,
          tabs: Jl,
          undim: Gl,
          _addID: Ql,
        } = window.AJS,
        {contextPath: Xl} = window.AJS;
    },
  ]);
});
//# sourceMappingURL=aui-prototyping.js.map
