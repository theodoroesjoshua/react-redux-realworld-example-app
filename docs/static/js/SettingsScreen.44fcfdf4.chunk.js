'use strict';
(self.webpackChunkreact_redux_realworld_example_app =
  self.webpackChunkreact_redux_realworld_example_app || []).push([
  [546],
  {
    8676: function (e, r, t) {
      var a = t(9439),
        n = t(2791),
        l = t(184);
      function o(e) {
        var r = e.errors;
        if (!r || 0 === Object.keys(r).length) return null;
        var t = Object.entries(r).flatMap(function (e) {
          var r = (0, a.Z)(e, 2),
            t = r[0];
          return r[1].map(function (e) {
            return ''.concat(t, ' ').concat(e);
          });
        });
        return (0, l.jsx)('ul', {
          className: 'error-messages',
          children: t.map(function (e) {
            return (0, l.jsx)('li', { children: e }, e);
          }),
        });
      }
      r.Z = (0, n.memo)(o);
    },
    6389: function (e, r, t) {
      t.r(r);
      var a = t(9439),
        n = t(2791),
        l = t(9434),
        o = t(7689),
        s = t(8676),
        i = t(2664),
        c = t(184);
      function u(e) {
        var r,
          t,
          o,
          s,
          u = e.currentUser,
          m = e.onSaveSettings,
          d = (0, n.useState)(
            null !== (r = null === u || void 0 === u ? void 0 : u.image) &&
              void 0 !== r
              ? r
              : 'https://static.productionready.io/images/smiley-cyrus.jpg'
          ),
          p = (0, a.Z)(d, 2),
          f = p[0],
          v = p[1],
          g = (0, n.useState)(
            null !== (t = null === u || void 0 === u ? void 0 : u.username) &&
              void 0 !== t
              ? t
              : ''
          ),
          x = (0, a.Z)(g, 2),
          h = x[0],
          j = x[1],
          N = (0, n.useState)(
            null !== (o = null === u || void 0 === u ? void 0 : u.bio) &&
              void 0 !== o
              ? o
              : ''
          ),
          b = (0, a.Z)(N, 2),
          S = b[0],
          w = b[1],
          y = (0, n.useState)(
            null !== (s = null === u || void 0 === u ? void 0 : u.email) &&
              void 0 !== s
              ? s
              : ''
          ),
          C = (0, a.Z)(y, 2),
          k = C[0],
          Z = C[1],
          _ = (0, n.useState)(''),
          U = (0, a.Z)(_, 2),
          O = U[0],
          q = U[1],
          D = (0, l.v9)(i.xU);
        return (0, c.jsx)('form', {
          onSubmit: function (e) {
            e.preventDefault();
            var r = { image: f, username: h, bio: S, email: k };
            O && (r.password = O), m(r);
          },
          children: (0, c.jsxs)('fieldset', {
            disabled: D,
            children: [
              (0, c.jsx)('fieldset', {
                className: 'form-group',
                children: (0, c.jsx)('input', {
                  className: 'form-control',
                  type: 'text',
                  placeholder: 'URL of profile picture',
                  name: 'image',
                  value: f,
                  onChange: function (e) {
                    v(e.target.value);
                  },
                }),
              }),
              (0, c.jsx)('fieldset', {
                className: 'form-group',
                children: (0, c.jsx)('input', {
                  className: 'form-control form-control-lg',
                  type: 'text',
                  placeholder: 'Username',
                  name: 'username',
                  value: h,
                  onChange: function (e) {
                    j(e.target.value);
                  },
                }),
              }),
              (0, c.jsx)('fieldset', {
                className: 'form-group',
                children: (0, c.jsx)('textarea', {
                  className: 'form-control form-control-lg',
                  rows: 8,
                  placeholder: 'Short bio about you',
                  name: 'bio',
                  value: S,
                  onChange: function (e) {
                    w(e.target.value);
                  },
                }),
              }),
              (0, c.jsx)('fieldset', {
                className: 'form-group',
                children: (0, c.jsx)('input', {
                  className: 'form-control form-control-lg',
                  autoComplete: 'current-email',
                  type: 'email',
                  placeholder: 'Email',
                  name: 'email',
                  value: k,
                  onChange: function (e) {
                    Z(e.target.value);
                  },
                }),
              }),
              (0, c.jsx)('fieldset', {
                className: 'form-group',
                children: (0, c.jsx)('input', {
                  className: 'form-control form-control-lg',
                  type: 'password',
                  autoComplete: 'current-password',
                  placeholder: 'New Password',
                  name: 'password',
                  value: O,
                  onChange: function (e) {
                    q(e.target.value);
                  },
                }),
              }),
              (0, c.jsx)('button', {
                className: 'btn btn-lg btn-primary pull-xs-right',
                type: 'submit',
                children: 'Update Settings',
              }),
            ],
          }),
        });
      }
      function m() {
        var e = (0, l.I0)(),
          r = (0, l.v9)(i.dy),
          t = (0, l.v9)(i.i2);
        return (0, l.v9)(i.vN)
          ? (0, c.jsx)('div', {
              className: 'settings-page',
              children: (0, c.jsx)('div', {
                className: 'container page',
                children: (0, c.jsx)('div', {
                  className: 'row',
                  children: (0, c.jsxs)('div', {
                    className: 'col-md-6 offset-md-3 col-xs-12',
                    children: [
                      (0, c.jsx)('h1', {
                        className: 'text-xs-center',
                        children: 'Your Settings',
                      }),
                      (0, c.jsx)(s.Z, { errors: t }),
                      (0, c.jsx)(u, {
                        currentUser: r,
                        onSaveSettings: function (r) {
                          e((0, i.Nq)(r));
                        },
                      }),
                      (0, c.jsx)('hr', {}),
                      (0, c.jsx)('button', {
                        className: 'btn btn-outline-danger',
                        onClick: function () {
                          e((0, i.kS)());
                        },
                        children: 'Or click here to logout.',
                      }),
                    ],
                  }),
                }),
              }),
            })
          : (0, c.jsx)(o.Fg, { to: '/' });
      }
      r.default = (0, n.memo)(m);
    },
  },
]);
//# sourceMappingURL=SettingsScreen.44fcfdf4.chunk.js.map
