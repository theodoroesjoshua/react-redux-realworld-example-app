'use strict';
(self.webpackChunkreact_redux_realworld_example_app =
  self.webpackChunkreact_redux_realworld_example_app || []).push([
  [97],
  {
    6194: function (e, n, s) {
      s.r(n),
        s.d(n, {
          FollowUserButton: function () {
            return v;
          },
        });
      var a = s(2791),
        i = s(1087),
        r = s(7689),
        l = s(9434),
        c = s(143),
        t = s(1858),
        o = s(8734),
        u = s(2664),
        d = s(184);
      function m() {
        return (0, d.jsxs)(i.rU, {
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
          a = e.following,
          i = (0, r.s0)(),
          c = (0, l.I0)(),
          t = (0, l.v9)(u.dy),
          m = 'btn btn-sm action-btn';
        a
          ? ((m += ' btn-secondary'), (n = 'Unfollow '.concat(s)))
          : ((m += ' btn-outline-secondary'), (n = 'Follow '.concat(s)));
        return (0, d.jsxs)('button', {
          className: m,
          onClick: function () {
            t ? c(a ? (0, o.fv)(s) : (0, o.ZN)(s)) : i('/login');
          },
          children: [
            (0, d.jsx)('i', { className: 'ion-plus-round' }),
            '\xa0',
            n,
          ],
        });
      }
      function f(e) {
        var n = e.profile,
          s = (0, l.v9)(u.dy),
          a = n.username === (null === s || void 0 === s ? void 0 : s.username);
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
                  a
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
      function x(e) {
        var n = e.username,
          s = e.isFavorites;
        return (0, d.jsx)('div', {
          className: 'articles-toggle',
          children: (0, d.jsxs)('ul', {
            className: 'nav nav-pills outline-active',
            children: [
              (0, d.jsx)('li', {
                className: 'nav-item',
                children: (0, d.jsx)(i.rU, {
                  className: s ? 'nav-link' : 'nav-link active',
                  to: '/'.concat(n),
                  children: 'My Articles',
                }),
              }),
              (0, d.jsx)('li', {
                className: 'nav-item',
                children: (0, d.jsx)(i.rU, {
                  className: s ? 'nav-link active' : 'nav-link',
                  to: '/'.concat(n, '/favorites'),
                  children: 'Favorited Articles',
                }),
              }),
            ],
          }),
        });
      }
      function j(e) {
        e.location;
        var n = e.isFavoritePage,
          s = (0, l.I0)(),
          i = (0, l.v9)(function (e) {
            return e.profile;
          }),
          u = (0, r.UO)().username;
        return (
          (0, a.useEffect)(
            function () {
              var e = s((0, o.Ai)(u)),
                a = s(
                  n ? (0, t.yj)({ username: u }) : (0, t.ek)({ author: u })
                );
              return function () {
                e.abort(), a.abort();
              };
            },
            [u, n]
          ),
          (0, a.useEffect)(function () {
            return function () {
              return s((0, o.mh)());
            };
          }, []),
          i
            ? (0, d.jsxs)('div', {
                className: 'profile-page',
                children: [
                  (0, d.jsx)(f, { profile: i }),
                  (0, d.jsx)('div', {
                    className: 'container page',
                    children: (0, d.jsx)('div', {
                      className: 'row',
                      children: (0, d.jsxs)('div', {
                        className: 'col-xs-12 col-md-10 offset-md-1',
                        children: [
                          (0, d.jsx)(x, {
                            username: i.username,
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
      n.default = (0, a.memo)(j);
    },
  },
]);
//# sourceMappingURL=Profile.f36724ad.chunk.js.map
