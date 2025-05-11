'use strict';
(self.webpackChunkreact_redux_realworld_example_app =
  self.webpackChunkreact_redux_realworld_example_app || []).push([
  [571],
  {
    8676: function (e, r, t) {
      var s = t(9439),
        a = t(2791),
        n = t(184);
      function c(e) {
        var r = e.errors;
        if (!r || 0 === Object.keys(r).length) return null;
        var t = Object.entries(r).flatMap(function (e) {
          var r = (0, s.Z)(e, 2),
            t = r[0];
          return r[1].map(function (e) {
            return ''.concat(t, ' ').concat(e);
          });
        });
        return (0, n.jsx)('ul', {
          className: 'error-messages',
          children: t.map(function (e) {
            return (0, n.jsx)('li', { children: e }, e);
          }),
        });
      }
      r.Z = (0, a.memo)(c);
    },
    623: function (e, r, t) {
      t.r(r),
        t.d(r, {
          default: function () {
            return p;
          },
        });
      var s = t(9439),
        a = t(2791),
        n = t(9434),
        c = t(1087),
        o = t(7689),
        i = t(8676),
        m = t(2664),
        l = t(8839),
        d = t(184);
      function u(e) {
        var r = e.commentId,
          t = (0, n.I0)(),
          s = (0, n.v9)(l.xU),
          a = (0, o.UO)().slug;
        return (0, d.jsxs)('button', {
          className: 'btn btn-sm btn-link mod-options',
          disabled: s,
          onClick: function () {
            t((0, l.PN)({ articleSlug: a, commentId: r }));
          },
          children: [
            (0, d.jsx)('i', { className: 'ion-trash-a' }),
            (0, d.jsx)('span', {
              className: 'sr-only',
              children: 'Delete comment',
            }),
          ],
        });
      }
      function x(e) {
        var r,
          t = e.comment,
          s = (0, n.v9)((0, l.$z)(t.id));
        return (0, d.jsxs)('div', {
          className: 'card',
          'data-testid': 'comment',
          children: [
            (0, d.jsx)('div', {
              className: 'card-block',
              children: (0, d.jsx)('p', {
                className: 'card-text',
                children: t.body,
              }),
            }),
            (0, d.jsxs)('div', {
              className: 'card-footer',
              children: [
                (0, d.jsx)(c.rU, {
                  to: '/'.concat(t.author.username),
                  className: 'comment-author',
                  children: (0, d.jsx)('img', {
                    className: 'comment-author-img',
                    alt: t.author.username,
                    src:
                      null !== (r = t.author.image) && void 0 !== r
                        ? r
                        : 'https://static.productionready.io/images/smiley-cyrus.jpg',
                  }),
                }),
                '\xa0',
                (0, d.jsx)(c.rU, {
                  to: '/'.concat(t.author.username),
                  className: 'comment-author',
                  children: t.author.username,
                }),
                (0, d.jsx)('time', {
                  className: 'date-posted',
                  dateTime: t.createdAt,
                  children: new Date(t.createdAt).toDateString(),
                }),
                s ? (0, d.jsx)(u, { commentId: t.id }) : null,
              ],
            }),
          ],
        });
      }
      function h() {
        var e = (0, n.I0)(),
          r = (0, n.v9)(l.rr),
          t = (0, n.v9)(l.xU),
          s = (0, o.UO)().slug;
        return (
          (0, a.useEffect)(
            function () {
              var r = e((0, l.f9)(s));
              return function () {
                r.abort();
              };
            },
            [s]
          ),
          t
            ? (0, d.jsx)('p', { children: 'Loading comments' })
            : (0, d.jsx)(d.Fragment, {
                children: r.map(function (e) {
                  return (0, d.jsx)(x, { comment: e }, e.id);
                }),
              })
        );
      }
      var j = (0, a.memo)(h);
      function f() {
        var e,
          r = (0, n.I0)(),
          t = (0, n.v9)(m.dy),
          c = (0, o.UO)().slug,
          i = (0, a.useState)(''),
          u = (0, s.Z)(i, 2),
          x = u[0],
          h = u[1];
        return (0, d.jsxs)('form', {
          className: 'card comment-form',
          onSubmit: function (e) {
            e.preventDefault(),
              r((0, l.Yr)({ articleSlug: c, comment: { body: x } })),
              h('');
          },
          children: [
            (0, d.jsx)('div', {
              className: 'card-block',
              children: (0, d.jsx)('textarea', {
                className: 'form-control',
                placeholder: 'Write a comment...',
                rows: 3,
                value: x,
                onChange: function (e) {
                  h(e.target.value);
                },
              }),
            }),
            (0, d.jsxs)('div', {
              className: 'card-footer',
              children: [
                (0, d.jsx)('img', {
                  className: 'comment-author-img',
                  alt: t.username,
                  src:
                    null !== (e = t.image) && void 0 !== e
                      ? e
                      : 'https://static.productionready.io/images/smiley-cyrus.jpg',
                }),
                (0, d.jsx)('button', {
                  className: 'btn btn-sm btn-primary',
                  type: 'submit',
                  children: 'Post Comment',
                }),
              ],
            }),
          ],
        });
      }
      function v() {
        var e = (0, n.v9)(m.vN),
          r = (0, n.v9)(l.i2);
        return (0, d.jsx)('div', {
          className: 'row',
          children: e
            ? (0, d.jsxs)('div', {
                className: 'col-xs-12 col-md-8 offset-md-2',
                children: [
                  (0, d.jsx)(i.Z, { errors: r }),
                  (0, d.jsx)(f, {}),
                  (0, d.jsx)(j, {}),
                ],
              })
            : (0, d.jsxs)('div', {
                className: 'col-xs-12 col-md-8 offset-md-2',
                children: [
                  (0, d.jsxs)('p', {
                    children: [
                      (0, d.jsx)(c.rU, { to: '/login', children: 'Sign in' }),
                      '\xa0or\xa0',
                      (0, d.jsx)(c.rU, {
                        to: '/register',
                        children: 'sign up',
                      }),
                      '\xa0to add comments on this article.',
                    ],
                  }),
                  (0, d.jsx)(j, {}),
                ],
              }),
        });
      }
      var p = (0, a.memo)(v);
    },
  },
]);
//# sourceMappingURL=CommentSection.3181d803.chunk.js.map
