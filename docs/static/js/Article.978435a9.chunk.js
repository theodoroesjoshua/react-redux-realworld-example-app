'use strict';
(self.webpackChunkreact_redux_realworld_example_app =
  self.webpackChunkreact_redux_realworld_example_app || []).push([
  [951, 97],
  {
    9819: function (e, n, s) {
      s.r(n),
        s.d(n, {
          default: function () {
            return _;
          },
        });
      var r = s(2791),
        a = s(9434),
        t = s(7689),
        i = s(8387),
        c = s(5815),
        l = s.n(c),
        o = s(9884),
        u = s(8267),
        d = s(1087),
        m = s(2664),
        v = s(7361),
        x = s(184);
      function j() {
        var e = (0, t.UO)().slug,
          n = (0, a.I0)(),
          s = (0, t.s0)();
        return (0, x.jsxs)('span', {
          children: [
            (0, x.jsxs)(d.rU, {
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
                n((0, v.jX)(e)), s('/');
              },
              children: [
                (0, x.jsx)('i', { className: 'ion-trash-a' }),
                ' Delete Article',
              ],
            }),
          ],
        });
      }
      var h = (0, r.memo)(j),
        f = s(6194),
        g = s(1858);
      function N(e) {
        var n = e.article,
          s = e.currentUser,
          r = (0, t.s0)(),
          i = (0, a.I0)(),
          c = 'btn btn-sm action-btn';
        n.favorited ? (c += ' btn-secondary') : (c += ' btn-outline-secondary');
        return (0, x.jsxs)('button', {
          className: c,
          onClick: function () {
            s
              ? n.favorited
                ? i((0, g.tj)(n.slug))
                : i((0, g.TD)(n.slug))
              : r('/login');
          },
          children: [
            (0, x.jsx)('i', { className: 'ion-heart' }),
            'Favorite Article',
            ' (',
            n.favoritesCount,
            ')',
          ],
        });
      }
      function b(e) {
        var n = e.article,
          s = e.currentUser;
        return (0, x.jsxs)('span', {
          children: [
            (0, x.jsx)(f.FollowUserButton, {
              username: n.author.username,
              following: n.author.following,
            }),
            (0, x.jsx)(N, { article: n, currentUser: s }),
          ],
        });
      }
      var p = (0, r.memo)(b);
      function y() {
        var e,
          n = (0, a.v9)(m.dy),
          s = (0, a.v9)(function (e) {
            return e.article.article;
          }),
          r =
            (null === n || void 0 === n ? void 0 : n.username) ===
            (null === s || void 0 === s ? void 0 : s.author.username);
        return s
          ? (0, x.jsxs)('div', {
              className: 'article-meta',
              children: [
                (0, x.jsx)(d.rU, {
                  to: '/'.concat(s.author.username),
                  children: (0, x.jsx)('img', {
                    src:
                      null !== (e = s.author.image) && void 0 !== e
                        ? e
                        : 'https://static.productionready.io/images/smiley-cyrus.jpg',
                    alt: s.author.username,
                  }),
                }),
                (0, x.jsxs)('div', {
                  className: 'info',
                  children: [
                    (0, x.jsx)(d.rU, {
                      to: '/'.concat(s.author.username),
                      className: 'author',
                      children: s.author.username,
                    }),
                    (0, x.jsx)('time', {
                      className: 'date',
                      dateTime: s.createdAt,
                      children: new Date(s.createdAt).toDateString(),
                    }),
                  ],
                }),
                r
                  ? (0, x.jsx)(h, {})
                  : (0, x.jsx)(p, { article: s, currentUser: n }),
              ],
            })
          : null;
      }
      var w = (0, r.memo)(y),
        U = (0, r.lazy)(function () {
          return s.e(571).then(s.bind(s, 623));
        });
      function k(e) {
        var n = e.match,
          s = (0, a.I0)(),
          c = (0, a.v9)(function (e) {
            return e.article.article;
          }),
          d = (0, a.v9)(function (e) {
            return e.article.inProgress;
          }),
          m = (0, t.UO)().slug;
        return (
          (0, r.useEffect)(
            function () {
              var e = s((0, u.fq)(m));
              return function () {
                e.abort();
              };
            },
            [n]
          ),
          (0, r.useEffect)(function () {
            return function () {
              return s((0, u.gt)());
            };
          }, []),
          c
            ? (0, x.jsxs)('div', {
                className: 'article-page',
                children: [
                  (0, x.jsx)('div', {
                    className: 'banner',
                    children: (0, x.jsxs)('div', {
                      className: 'container',
                      children: [
                        (0, x.jsx)('h1', { children: c.title }),
                        (0, x.jsx)(w, {}),
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
                                __html: l()((0, i.Z)(c.body)),
                              },
                            }),
                            (0, x.jsx)(o.Z, { tags: c.tagList }),
                          ],
                        }),
                      }),
                      (0, x.jsx)('hr', {}),
                      (0, x.jsx)(w, {}),
                      (0, x.jsx)(r.Suspense, {
                        fallback: (0, x.jsx)('p', {
                          children: 'Loading comments',
                        }),
                        children: (0, x.jsx)(U, {}),
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
                        d &&
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
      var _ = (0, r.memo)(k);
    },
    6194: function (e, n, s) {
      s.r(n),
        s.d(n, {
          FollowUserButton: function () {
            return v;
          },
        });
      var r = s(2791),
        a = s(1087),
        t = s(7689),
        i = s(9434),
        c = s(143),
        l = s(1858),
        o = s(8734),
        u = s(2664),
        d = s(184);
      function m() {
        return (0, d.jsxs)(a.rU, {
          to: '/settings',
          className: 'btn btn-sm btn-outline-secondary action-btn',
          children: [
            (0, d.jsx)('i', { className: 'ion-gear-a' }),
            ' Edit Profile Settings',
          ],
        });
      }
      function v(e) {
        var n,
          s = e.username,
          r = e.following,
          a = (0, t.s0)(),
          c = (0, i.I0)(),
          l = (0, i.v9)(u.dy),
          m = 'btn btn-sm action-btn';
        r
          ? ((m += ' btn-secondary'), (n = 'Unfollow '.concat(s)))
          : ((m += ' btn-outline-secondary'), (n = 'Follow '.concat(s)));
        return (0, d.jsxs)('button', {
          className: m,
          onClick: function () {
            l ? c(r ? (0, o.fv)(s) : (0, o.ZN)(s)) : a('/login');
          },
          children: [
            (0, d.jsx)('i', { className: 'ion-plus-round' }),
            '\xa0',
            n,
          ],
        });
      }
      function x(e) {
        var n = e.profile,
          s = (0, i.v9)(u.dy),
          r = n.username === (null === s || void 0 === s ? void 0 : s.username);
        return (0, d.jsx)('div', {
          className: 'user-info',
          children: (0, d.jsx)('div', {
            className: 'container',
            children: (0, d.jsx)('div', {
              className: 'row',
              children: (0, d.jsxs)('div', {
                className: 'col-xs-12 col-md-10 offset-md-1',
                children: [
                  (0, d.jsx)('img', {
                    src:
                      n.image ||
                      'https://static.productionready.io/images/smiley-cyrus.jpg',
                    className: 'user-img',
                    alt: n.username,
                  }),
                  (0, d.jsx)('h4', { children: n.username }),
                  (0, d.jsx)('p', { children: n.bio }),
                  r
                    ? (0, d.jsx)(m, {})
                    : (0, d.jsx)(v, {
                        username: n.username,
                        following: n.following,
                      }),
                ],
              }),
            }),
          }),
        });
      }
      function j(e) {
        var n = e.username,
          s = e.isFavorites;
        return (0, d.jsx)('div', {
          className: 'articles-toggle',
          children: (0, d.jsxs)('ul', {
            className: 'nav nav-pills outline-active',
            children: [
              (0, d.jsx)('li', {
                className: 'nav-item',
                children: (0, d.jsx)(a.rU, {
                  className: s ? 'nav-link' : 'nav-link active',
                  to: '/'.concat(n),
                  children: 'My Articles',
                }),
              }),
              (0, d.jsx)('li', {
                className: 'nav-item',
                children: (0, d.jsx)(a.rU, {
                  className: s ? 'nav-link active' : 'nav-link',
                  to: '/'.concat(n, '/favorites'),
                  children: 'Favorited Articles',
                }),
              }),
            ],
          }),
        });
      }
      function h(e) {
        e.location;
        var n = e.isFavoritePage,
          s = (0, i.I0)(),
          a = (0, i.v9)(function (e) {
            return e.profile;
          }),
          u = (0, t.UO)().username;
        return (
          (0, r.useEffect)(
            function () {
              var e = s((0, o.Ai)(u)),
                r = s(
                  n ? (0, l.yj)({ username: u }) : (0, l.ek)({ author: u })
                );
              return function () {
                e.abort(), r.abort();
              };
            },
            [u, n]
          ),
          (0, r.useEffect)(function () {
            return function () {
              return s((0, o.mh)());
            };
          }, []),
          a
            ? (0, d.jsxs)('div', {
                className: 'profile-page',
                children: [
                  (0, d.jsx)(x, { profile: a }),
                  (0, d.jsx)('div', {
                    className: 'container page',
                    children: (0, d.jsx)('div', {
                      className: 'row',
                      children: (0, d.jsxs)('div', {
                        className: 'col-xs-12 col-md-10 offset-md-1',
                        children: [
                          (0, d.jsx)(j, {
                            username: a.username,
                            isFavorites: n,
                          }),
                          (0, d.jsx)(c.Z, {}),
                        ],
                      }),
                    }),
                  }),
                ],
              })
            : null
        );
      }
      n.default = (0, r.memo)(h);
    },
  },
]);
//# sourceMappingURL=Article.978435a9.chunk.js.map
