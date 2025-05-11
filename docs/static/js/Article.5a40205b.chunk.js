'use strict';
(self.webpackChunkreact_redux_realworld_example_app =
  self.webpackChunkreact_redux_realworld_example_app || []).push([
  [951],
  {
    5611: function (e, n, a) {
      a.r(n),
        a.d(n, {
          default: function () {
            return b;
          },
        });
      var r = a(2791),
        s = a(9434),
        t = a(7689),
        c = a(8387),
        i = a(5815),
        l = a.n(i),
        o = a(9884),
        d = a(8267),
        u = a(1087),
        m = a(2664),
        h = a(7361),
        x = a(184);
      function j() {
        var e = (0, t.UO)().slug,
          n = (0, s.I0)(),
          a = (0, t.s0)();
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
                n((0, h.jX)(e)), a('/');
              },
              children: [
                (0, x.jsx)('i', { className: 'ion-trash-a' }),
                ' Delete Article',
              ],
            }),
          ],
        });
      }
      var v = (0, r.memo)(j);
      function f() {
        var e,
          n = (0, s.v9)(m.dy),
          a = (0, s.v9)(function (e) {
            return e.article.article;
          }),
          r =
            (null === n || void 0 === n ? void 0 : n.username) ===
            (null === a || void 0 === a ? void 0 : a.author.username);
        return a
          ? (0, x.jsxs)('div', {
              className: 'article-meta',
              children: [
                (0, x.jsx)(u.rU, {
                  to: '/'.concat(a.author.username),
                  children: (0, x.jsx)('img', {
                    src:
                      null !== (e = a.author.image) && void 0 !== e
                        ? e
                        : 'https://static.productionready.io/images/smiley-cyrus.jpg',
                    alt: a.author.username,
                  }),
                }),
                (0, x.jsxs)('div', {
                  className: 'info',
                  children: [
                    (0, x.jsx)(u.rU, {
                      to: '/'.concat(a.author.username),
                      className: 'author',
                      children: a.author.username,
                    }),
                    (0, x.jsx)('time', {
                      className: 'date',
                      dateTime: a.createdAt,
                      children: new Date(a.createdAt).toDateString(),
                    }),
                  ],
                }),
                r ? (0, x.jsx)(v, {}) : null,
              ],
            })
          : null;
      }
      var g = (0, r.memo)(f),
        p = (0, r.lazy)(function () {
          return a.e(571).then(a.bind(a, 623));
        });
      function N(e) {
        var n = e.match,
          a = (0, s.I0)(),
          i = (0, s.v9)(function (e) {
            return e.article.article;
          }),
          u = (0, s.v9)(function (e) {
            return e.article.inProgress;
          }),
          m = (0, t.UO)().slug;
        return (
          (0, r.useEffect)(
            function () {
              var e = a((0, d.fq)(m));
              return function () {
                e.abort();
              };
            },
            [n]
          ),
          (0, r.useEffect)(function () {
            return function () {
              return a((0, d.gt)());
            };
          }, []),
          i
            ? (0, x.jsxs)('div', {
                className: 'article-page',
                children: [
                  (0, x.jsx)('div', {
                    className: 'banner',
                    children: (0, x.jsxs)('div', {
                      className: 'container',
                      children: [
                        (0, x.jsx)('h1', { children: i.title }),
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
                                __html: l()((0, c.Z)(i.body)),
                              },
                            }),
                            (0, x.jsx)(o.Z, { tags: i.tagList }),
                          ],
                        }),
                      }),
                      (0, x.jsx)('hr', {}),
                      (0, x.jsx)(r.Suspense, {
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
                        u &&
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
      var b = (0, r.memo)(N);
    },
  },
]);
//# sourceMappingURL=Article.5a40205b.chunk.js.map
