'use strict';
(self.webpackChunkreact_redux_realworld_example_app =
  self.webpackChunkreact_redux_realworld_example_app || []).push([
  [951],
  {
    5611: function (e, a, r) {
      r.r(a),
        r.d(a, {
          default: function () {
            return b;
          },
        });
      var t = r(2791),
        s = r(9434),
        n = r(7689),
        c = r(8387),
        i = r(5815),
        l = r.n(i),
        o = r(9884),
        d = r(8267),
        u = r(1087),
        m = r(2664),
        h = r(7361),
        x = r(184);
      function j() {
        var e = (0, n.UO)().slug,
          a = (0, s.I0)(),
          r = (0, n.s0)();
        return (0, x.jsxs)('span', {
          children: [
            (0, x.jsxs)(u.rU, {
              to: '/editor/'.concat(e),
              className: 'btn btn-outline-secondary btn-sm',
              children: [
                (0, x.jsx)('i', { className: 'ion-edit' }),
                ' Edit Article',
              ],
            }),
            (0, x.jsxs)('button', {
              className: 'btn btn-outline-danger btn-sm',
              onClick: function () {
                a((0, h.jX)(e)), r('/');
              },
              children: [
                (0, x.jsx)('i', { className: 'ion-trash-a' }),
                ' Delete Article',
              ],
            }),
          ],
        });
      }
      var v = (0, t.memo)(j);
      function f() {
        var e,
          a = (0, s.v9)(m.dy),
          r = (0, s.v9)(function (e) {
            return e.article.article;
          }),
          t =
            (null === a || void 0 === a ? void 0 : a.username) ===
            (null === r || void 0 === r ? void 0 : r.author.username);
        return r
          ? (0, x.jsxs)('div', {
              className: 'article-meta',
              children: [
                (0, x.jsx)(u.rU, {
                  to: '/'.concat(r.author.username),
                  children: (0, x.jsx)('img', {
                    src:
                      null !== (e = r.author.image) && void 0 !== e
                        ? e
                        : 'https://static.productionready.io/images/smiley-cyrus.jpg',
                    alt: r.author.username,
                  }),
                }),
                (0, x.jsxs)('div', {
                  className: 'info',
                  children: [
                    (0, x.jsx)(u.rU, {
                      to: '/'.concat(r.author.username),
                      className: 'author',
                      children: r.author.username,
                    }),
                    (0, x.jsx)('time', {
                      className: 'date',
                      dateTime: r.createdAt,
                      children: new Date(r.createdAt).toDateString(),
                    }),
                  ],
                }),
                t ? (0, x.jsx)(v, {}) : null,
              ],
            })
          : null;
      }
      var g = (0, t.memo)(f),
        p = (0, t.lazy)(function () {
          return r.e(571).then(r.bind(r, 623));
        });
      function N(e) {
        var a,
          r = e.match,
          i = (0, s.I0)(),
          m = (0, s.v9)(function (e) {
            return e.article.article;
          }),
          h = (0, s.v9)(function (e) {
            return e.article.inProgress;
          }),
          j = (0, n.UO)().slug;
        return (
          (0, t.useEffect)(
            function () {
              var e = i((0, d.fq)(j));
              return function () {
                e.abort();
              };
            },
            [r]
          ),
          (0, t.useEffect)(function () {
            return function () {
              return i((0, d.gt)());
            };
          }, []),
          m
            ? (0, x.jsxs)('div', {
                className: 'article-page',
                children: [
                  (0, x.jsx)('div', {
                    className: 'banner',
                    children: (0, x.jsxs)('div', {
                      className: 'container',
                      children: [
                        (0, x.jsx)('h1', { children: m.title }),
                        (0, x.jsx)(g, {}),
                      ],
                    }),
                  }),
                  (0, x.jsxs)('div', {
                    className: 'container page',
                    children: [
                      (0, x.jsx)('div', {
                        className: 'row article-content',
                        children: (0, x.jsxs)('div', {
                          className: 'col-xs-12',
                          children: [
                            (0, x.jsx)('article', {
                              dangerouslySetInnerHTML: {
                                __html: l()((0, c.Z)(m.body)),
                              },
                            }),
                            (0, x.jsx)(o.Z, { tags: m.tagList }),
                          ],
                        }),
                      }),
                      (0, x.jsx)('hr', {}),
                      (0, x.jsxs)('div', {
                        className: 'article-meta',
                        children: [
                          (0, x.jsx)(u.rU, {
                            to: '/'.concat(m.author.username),
                            children: (0, x.jsx)('img', {
                              src:
                                null !== (a = m.author.image) && void 0 !== a
                                  ? a
                                  : 'https://static.productionready.io/images/smiley-cyrus.jpg',
                              alt: m.author.username,
                            }),
                          }),
                          (0, x.jsxs)('div', {
                            className: 'info',
                            children: [
                              (0, x.jsx)(u.rU, {
                                to: '/'.concat(m.author.username),
                                className: 'author',
                                children: m.author.username,
                              }),
                              (0, x.jsx)('time', {
                                className: 'date',
                                dateTime: m.createdAt,
                                children: new Date(m.createdAt).toDateString(),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, x.jsx)(t.Suspense, {
                        fallback: (0, x.jsx)('p', {
                          children: 'Loading comments',
                        }),
                        children: (0, x.jsx)(p, {}),
                      }),
                    ],
                  }),
                ],
              })
            : (0, x.jsx)('div', {
                className: 'article-page',
                children: (0, x.jsx)('div', {
                  className: 'container page',
                  children: (0, x.jsx)('div', {
                    className: 'row article-content',
                    children: (0, x.jsx)('div', {
                      className: 'col-xs-12',
                      children:
                        h &&
                        (0, x.jsx)('h1', {
                          role: 'alert',
                          children: 'Article is loading',
                        }),
                    }),
                  }),
                }),
              })
        );
      }
      var b = (0, t.memo)(N);
    },
  },
]);
//# sourceMappingURL=Article.297d18e4.chunk.js.map
