'use strict';
(self.webpackChunkreact_redux_realworld_example_app =
  self.webpackChunkreact_redux_realworld_example_app || []).push([
  [196],
  {
    3810: function (e, t, r) {
      r.r(t);
      var n = r(3433),
        a = r(9439),
        s = r(2791),
        l = r(9434),
        c = r(8676),
        o = r(8267),
        i = r(7689),
        u = r(184);
      function f(e) {
        e.match;
        var t = (0, l.I0)(),
          r = (0, l.v9)(function (e) {
            return e.article;
          }),
          f = r.article,
          d = r.errors,
          m = r.inProgress,
          p = (0, i.UO)().slug,
          h = (0, s.useState)(''),
          x = (0, a.Z)(h, 2),
          g = x[0],
          j = x[1],
          v = (0, s.useState)(''),
          N = (0, a.Z)(v, 2),
          b = N[0],
          y = N[1],
          k = (0, s.useState)(''),
          Z = (0, a.Z)(k, 2),
          C = Z[0],
          _ = Z[1],
          w = (0, s.useState)(''),
          E = (0, a.Z)(w, 2),
          S = E[0],
          O = E[1],
          A = (0, s.useState)([]),
          D = (0, a.Z)(A, 2),
          L = D[0],
          P = D[1],
          U = (0, i.s0)(),
          W = function () {
            p && f
              ? (j(f.title), y(f.description), _(f.body), P(f.tagList))
              : (j(''), y(''), _(''), O(''), P([]));
          },
          q = function (e) {
            return function () {
              P(
                L.filter(function (t) {
                  return t !== e;
                })
              );
            };
          };
        return (
          (0, s.useEffect)(
            function () {
              W(), p && t((0, o.fq)(p));
            },
            [p]
          ),
          (0, s.useEffect)(W, [f]),
          (0, s.useEffect)(function () {
            return function () {
              return t((0, o.gt)());
            };
          }, []),
          (0, u.jsx)('div', {
            className: 'editor-page',
            children: (0, u.jsx)('div', {
              className: 'container page',
              children: (0, u.jsx)('div', {
                className: 'row',
                children: (0, u.jsxs)('div', {
                  className: 'col-md-10 offset-md-1 col-xs-12',
                  children: [
                    (0, u.jsx)(c.Z, { errors: d }),
                    (0, u.jsx)('form', {
                      children: (0, u.jsxs)('fieldset', {
                        children: [
                          (0, u.jsx)('fieldset', {
                            className: 'form-group',
                            children: (0, u.jsx)('input', {
                              className: 'form-control form-control-lg',
                              type: 'text',
                              placeholder: 'Article Title',
                              value: g,
                              onChange: function (e) {
                                j(e.target.value);
                              },
                            }),
                          }),
                          (0, u.jsx)('fieldset', {
                            className: 'form-group',
                            children: (0, u.jsx)('input', {
                              className: 'form-control',
                              type: 'text',
                              placeholder: "What's this article about?",
                              value: b,
                              onChange: function (e) {
                                y(e.target.value);
                              },
                            }),
                          }),
                          (0, u.jsx)('fieldset', {
                            className: 'form-group',
                            children: (0, u.jsx)('textarea', {
                              className: 'form-control',
                              rows: '8',
                              placeholder: 'Write your article (in markdown)',
                              value: C,
                              onChange: function (e) {
                                _(e.target.value);
                              },
                            }),
                          }),
                          (0, u.jsxs)('fieldset', {
                            className: 'form-group',
                            children: [
                              (0, u.jsx)('input', {
                                className: 'form-control',
                                type: 'text',
                                placeholder: 'Enter tags',
                                value: S,
                                onChange: function (e) {
                                  O(e.target.value);
                                },
                                onKeyUp: function (e) {
                                  'Enter' === e.key &&
                                    (e.preventDefault(),
                                    S &&
                                      !L.includes(S) &&
                                      P([].concat((0, n.Z)(L), [S])),
                                    O(''));
                                },
                              }),
                              (0, u.jsx)('div', {
                                className: 'tag-list',
                                children: L.map(function (e) {
                                  return (0,
                                  u.jsxs)('span', { className: 'tag-default tag-pill', children: [(0, u.jsx)('i', { className: 'ion-close-round', onClick: q(e) }), e] }, e);
                                }),
                              }),
                            ],
                          }),
                          (0, u.jsx)('button', {
                            className: 'btn btn-lg pull-xs-right btn-primary',
                            type: 'button',
                            disabled: m,
                            onClick: function (e) {
                              e.preventDefault();
                              var r = {
                                slug: p,
                                title: g,
                                description: b,
                                body: C,
                                tagList: L,
                              };
                              t(p ? (0, o.Xc)(r) : (0, o.tu)(r)), U('/');
                            },
                            children: 'Publish Article',
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          })
        );
      }
      t.default = (0, s.memo)(f);
    },
    8676: function (e, t, r) {
      var n = r(9439),
        a = r(2791),
        s = r(184);
      function l(e) {
        var t = e.errors;
        if (!t || 0 === Object.keys(t).length) return null;
        var r = Object.entries(t).flatMap(function (e) {
          var t = (0, n.Z)(e, 2),
            r = t[0];
          return t[1].map(function (e) {
            return ''.concat(r, ' ').concat(e);
          });
        });
        return (0, s.jsx)('ul', {
          className: 'error-messages',
          children: r.map(function (e) {
            return (0, s.jsx)('li', { children: e }, e);
          }),
        });
      }
      t.Z = (0, a.memo)(l);
    },
  },
]);
//# sourceMappingURL=Editor.879133e2.chunk.js.map
