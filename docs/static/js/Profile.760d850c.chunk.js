'use strict';
(self.webpackChunkreact_redux_realworld_example_app =
  self.webpackChunkreact_redux_realworld_example_app || []).push([
  [97],
  {
    6194: function (e, s, n) {
      n.r(s);
      var a = n(2791),
        i = n(1087),
        r = n(7689),
        c = n(9434),
        l = n(143),
        t = n(1858),
        o = n(8734),
        u = n(2664),
        m = n(184);
      function d() {
        return (0, m.jsxs)(i.rU, {
          to: '/settings',
          className: 'btn btn-sm btn-outline-secondary action-btn',
          children: [
            (0, m.jsx)('i', { className: 'ion-gear-a' }),
            ' Edit Profile Settings',
          ],
        });
      }
      function v(e) {
        var s,
          n = e.username,
          a = e.following,
          i = (0, r.s0)(),
          l = (0, c.I0)(),
          t = (0, c.v9)(u.dy),
          d = 'btn btn-sm action-btn';
        a
          ? ((d += ' btn-secondary'), (s = 'Unfollow '.concat(n)))
          : ((d += ' btn-outline-secondary'), (s = 'Follow '.concat(n)));
        return (0, m.jsxs)('button', {
          className: d,
          onClick: function () {
            t
              ? l(a ? (0, o.fv)(n) : (0, o.ZN)(n))
              : i.push('/register?redirectTo='.concat(location.pathname));
          },
          children: [
            (0, m.jsx)('i', { className: 'ion-plus-round' }),
            '\xa0',
            s,
          ],
        });
      }
      function f(e) {
        var s = e.profile,
          n = (0, c.v9)(u.dy),
          a = s.username === (null === n || void 0 === n ? void 0 : n.username);
        return (0, m.jsx)('div', {
          className: 'user-info',
          children: (0, m.jsx)('div', {
            className: 'container',
            children: (0, m.jsx)('div', {
              className: 'row',
              children: (0, m.jsxs)('div', {
                className: 'col-xs-12 col-md-10 offset-md-1',
                children: [
                  (0, m.jsx)('img', {
                    src:
                      s.image ||
                      'https://static.productionready.io/images/smiley-cyrus.jpg',
                    className: 'user-img',
                    alt: s.username,
                  }),
                  (0, m.jsx)('h4', { children: s.username }),
                  (0, m.jsx)('p', { children: s.bio }),
                  a
                    ? (0, m.jsx)(d, {})
                    : (0, m.jsx)(v, {
                        username: s.username,
                        following: s.following,
                      }),
                ],
              }),
            }),
          }),
        });
      }
      function x(e) {
        var s = e.username,
          n = e.isFavorites;
        return (0, m.jsx)('div', {
          className: 'articles-toggle',
          children: (0, m.jsxs)('ul', {
            className: 'nav nav-pills outline-active',
            children: [
              (0, m.jsx)('li', {
                className: 'nav-item',
                children: (0, m.jsx)(i.rU, {
                  className: n ? 'nav-link' : 'nav-link active',
                  to: '/@'.concat(s),
                  children: 'My Articles',
                }),
              }),
              (0, m.jsx)('li', {
                className: 'nav-item',
                children: (0, m.jsx)(i.rU, {
                  className: n ? 'nav-link active' : 'nav-link',
                  to: '/@'.concat(s, '/favorites'),
                  children: 'Favorited Articles',
                }),
              }),
            ],
          }),
        });
      }
      function j(e) {
        e.location;
        var s = e.isFavoritePage,
          n = (0, c.I0)(),
          i = (0, c.v9)(function (e) {
            return e.profile;
          }),
          u = (0, r.UO)().username;
        return (
          (0, a.useEffect)(
            function () {
              var e = n((0, o.Ai)(u)),
                a = n(
                  s ? (0, t.yj)({ username: u }) : (0, t.ek)({ author: u })
                );
              return function () {
                e.abort(), a.abort();
              };
            },
            [u, s]
          ),
          (0, a.useEffect)(function () {
            return function () {
              return n((0, o.mh)());
            };
          }, []),
          i
            ? (0, m.jsxs)('div', {
                className: 'profile-page',
                children: [
                  (0, m.jsx)(f, { profile: i }),
                  (0, m.jsx)('div', {
                    className: 'container page',
                    children: (0, m.jsx)('div', {
                      className: 'row',
                      children: (0, m.jsxs)('div', {
                        className: 'col-xs-12 col-md-10 offset-md-1',
                        children: [
                          (0, m.jsx)(x, {
                            username: i.username,
                            isFavorites: s,
                          }),
                          (0, m.jsx)(l.Z, {}),
                        ],
                      }),
                    }),
                  }),
                ],
              })
            : null
        );
      }
      s.default = (0, a.memo)(j);
    },
  },
]);
//# sourceMappingURL=Profile.760d850c.chunk.js.map
