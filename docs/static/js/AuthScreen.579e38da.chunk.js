'use strict';
(self.webpackChunkreact_redux_realworld_example_app =
  self.webpackChunkreact_redux_realworld_example_app || []).push([
  [610],
  {
    8676: function (e, r, a) {
      var n = a(9439),
        s = a(2791),
        t = a(184);
      function l(e) {
        var r = e.errors;
        if (!r || 0 === Object.keys(r).length) return null;
        var a = Object.entries(r).flatMap(function (e) {
          var r = (0, n.Z)(e, 2),
            a = r[0];
          return r[1].map(function (e) {
            return ''.concat(a, ' ').concat(e);
          });
        });
        return (0, t.jsx)('ul', {
          className: 'error-messages',
          children: a.map(function (e) {
            return (0, t.jsx)('li', { children: e }, e);
          }),
        });
      }
      r.Z = (0, s.memo)(l);
    },
    4800: function (e, r, a) {
      a.r(r);
      var n = a(9439),
        s = a(2791),
        t = a(1087),
        l = a(7689),
        o = a(9434),
        c = a(8676),
        i = a(2664),
        u = a(184);
      function m(e) {
        var r = e.isRegisterScreen,
          a = (0, s.useState)(''),
          m = (0, n.Z)(a, 2),
          d = m[0],
          p = m[1],
          f = (0, s.useState)(''),
          x = (0, n.Z)(f, 2),
          h = x[0],
          g = x[1],
          j = (0, s.useState)(''),
          v = (0, n.Z)(j, 2),
          N = v[0],
          w = v[1],
          b = (0, o.I0)(),
          S = (0, o.v9)(i.i2),
          C = (0, o.v9)(i.xU),
          _ = (0, l.s0)();
        return (0, u.jsx)('div', {
          className: 'auth-page',
          children: (0, u.jsx)('div', {
            className: 'container page',
            children: (0, u.jsx)('div', {
              className: 'row',
              children: (0, u.jsxs)('div', {
                className: 'col-md-6 offset-md-3 col-xs-12',
                children: [
                  (0, u.jsx)('h1', {
                    className: 'text-xs-center',
                    children: r ? 'Sign Up' : 'Sign In',
                  }),
                  (0, u.jsx)('p', {
                    className: 'text-xs-center',
                    children: r
                      ? (0, u.jsx)(t.rU, {
                          to: '/login',
                          children: 'Have an account?',
                        })
                      : (0, u.jsx)(t.rU, {
                          to: '/register',
                          children: 'Need an account?',
                        }),
                  }),
                  (0, u.jsx)(c.Z, { errors: S }),
                  (0, u.jsx)('form', {
                    onSubmit: function (e) {
                      e.preventDefault(),
                        b(
                          r
                            ? (0, i.z2)({ username: d, email: N, password: h })
                            : (0, i.x4)({ email: N, password: h })
                        ).then(function (e) {
                          'rejected' !== e.meta.requestStatus &&
                            _(r ? '/login' : '/');
                        });
                    },
                    children: (0, u.jsxs)('fieldset', {
                      disabled: C,
                      children: [
                        r
                          ? (0, u.jsx)('fieldset', {
                              className: 'form-group',
                              children: (0, u.jsx)('input', {
                                className: 'form-control form-control-lg',
                                type: 'text',
                                placeholder: 'Username',
                                autoComplete: 'username',
                                name: 'username',
                                value: d,
                                onChange: function (e) {
                                  p(e.target.value);
                                },
                              }),
                            })
                          : null,
                        (0, u.jsx)('fieldset', {
                          className: 'form-group',
                          children: (0, u.jsx)('input', {
                            className: 'form-control form-control-lg',
                            type: 'email',
                            placeholder: 'Email',
                            autoComplete: 'email',
                            value: N,
                            onChange: function (e) {
                              w(e.target.value);
                            },
                          }),
                        }),
                        (0, u.jsx)('fieldset', {
                          className: 'form-group',
                          children: (0, u.jsx)('input', {
                            className: 'form-control form-control-lg',
                            type: 'password',
                            autoComplete: 'new-password',
                            placeholder: 'Password',
                            name: 'password',
                            value: h,
                            onChange: function (e) {
                              g(e.target.value);
                            },
                          }),
                        }),
                        (0, u.jsx)('button', {
                          className: 'btn btn-lg btn-primary pull-xs-right',
                          type: 'submit',
                          children: r ? 'Sign up' : 'Sign in',
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      }
      r.default = (0, s.memo)(m);
    },
  },
]);
//# sourceMappingURL=AuthScreen.579e38da.chunk.js.map
