(self.webpackChunkreact_redux_realworld_example_app =
  self.webpackChunkreact_redux_realworld_example_app || []).push([
  [644],
  {
    4557: function (t, e, r) {
      var i = r(5932),
        n = r(559);
      r(3839);
      function o(t) {
        return void 0 === t || null === t;
      }
      function a(t) {
        ((t = (function (t) {
          var e = {};
          for (var r in t) e[r] = t[r];
          return e;
        })(t || {})).whiteList = t.whiteList || i.whiteList),
          (t.onAttr = t.onAttr || i.onAttr),
          (t.onIgnoreAttr = t.onIgnoreAttr || i.onIgnoreAttr),
          (t.safeAttrValue = t.safeAttrValue || i.safeAttrValue),
          (this.options = t);
      }
      (a.prototype.process = function (t) {
        if (!(t = (t = t || '').toString())) return '';
        var e = this.options,
          r = e.whiteList,
          i = e.onAttr,
          a = e.onIgnoreAttr,
          s = e.safeAttrValue;
        return n(t, function (t, e, n, l, c) {
          var u = r[n],
            g = !1;
          if (
            (!0 === u
              ? (g = u)
              : 'function' === typeof u
              ? (g = u(l))
              : u instanceof RegExp && (g = u.test(l)),
            !0 !== g && (g = !1),
            (l = s(n, l)))
          ) {
            var f,
              p = { position: e, sourcePosition: t, source: c, isWhite: g };
            return g
              ? o((f = i(n, l, p)))
                ? n + ':' + l
                : f
              : o((f = a(n, l, p)))
              ? void 0
              : f;
          }
        });
      }),
        (t.exports = a);
    },
    5932: function (t, e) {
      function r() {
        var t = {
          'align-content': !1,
          'align-items': !1,
          'align-self': !1,
          'alignment-adjust': !1,
          'alignment-baseline': !1,
          all: !1,
          'anchor-point': !1,
          animation: !1,
          'animation-delay': !1,
          'animation-direction': !1,
          'animation-duration': !1,
          'animation-fill-mode': !1,
          'animation-iteration-count': !1,
          'animation-name': !1,
          'animation-play-state': !1,
          'animation-timing-function': !1,
          azimuth: !1,
          'backface-visibility': !1,
          background: !0,
          'background-attachment': !0,
          'background-clip': !0,
          'background-color': !0,
          'background-image': !0,
          'background-origin': !0,
          'background-position': !0,
          'background-repeat': !0,
          'background-size': !0,
          'baseline-shift': !1,
          binding: !1,
          bleed: !1,
          'bookmark-label': !1,
          'bookmark-level': !1,
          'bookmark-state': !1,
          border: !0,
          'border-bottom': !0,
          'border-bottom-color': !0,
          'border-bottom-left-radius': !0,
          'border-bottom-right-radius': !0,
          'border-bottom-style': !0,
          'border-bottom-width': !0,
          'border-collapse': !0,
          'border-color': !0,
          'border-image': !0,
          'border-image-outset': !0,
          'border-image-repeat': !0,
          'border-image-slice': !0,
          'border-image-source': !0,
          'border-image-width': !0,
          'border-left': !0,
          'border-left-color': !0,
          'border-left-style': !0,
          'border-left-width': !0,
          'border-radius': !0,
          'border-right': !0,
          'border-right-color': !0,
          'border-right-style': !0,
          'border-right-width': !0,
          'border-spacing': !0,
          'border-style': !0,
          'border-top': !0,
          'border-top-color': !0,
          'border-top-left-radius': !0,
          'border-top-right-radius': !0,
          'border-top-style': !0,
          'border-top-width': !0,
          'border-width': !0,
          bottom: !1,
          'box-decoration-break': !0,
          'box-shadow': !0,
          'box-sizing': !0,
          'box-snap': !0,
          'box-suppress': !0,
          'break-after': !0,
          'break-before': !0,
          'break-inside': !0,
          'caption-side': !1,
          chains: !1,
          clear: !0,
          clip: !1,
          'clip-path': !1,
          'clip-rule': !1,
          color: !0,
          'color-interpolation-filters': !0,
          'column-count': !1,
          'column-fill': !1,
          'column-gap': !1,
          'column-rule': !1,
          'column-rule-color': !1,
          'column-rule-style': !1,
          'column-rule-width': !1,
          'column-span': !1,
          'column-width': !1,
          columns: !1,
          contain: !1,
          content: !1,
          'counter-increment': !1,
          'counter-reset': !1,
          'counter-set': !1,
          crop: !1,
          cue: !1,
          'cue-after': !1,
          'cue-before': !1,
          cursor: !1,
          direction: !1,
          display: !0,
          'display-inside': !0,
          'display-list': !0,
          'display-outside': !0,
          'dominant-baseline': !1,
          elevation: !1,
          'empty-cells': !1,
          filter: !1,
          flex: !1,
          'flex-basis': !1,
          'flex-direction': !1,
          'flex-flow': !1,
          'flex-grow': !1,
          'flex-shrink': !1,
          'flex-wrap': !1,
          float: !1,
          'float-offset': !1,
          'flood-color': !1,
          'flood-opacity': !1,
          'flow-from': !1,
          'flow-into': !1,
          font: !0,
          'font-family': !0,
          'font-feature-settings': !0,
          'font-kerning': !0,
          'font-language-override': !0,
          'font-size': !0,
          'font-size-adjust': !0,
          'font-stretch': !0,
          'font-style': !0,
          'font-synthesis': !0,
          'font-variant': !0,
          'font-variant-alternates': !0,
          'font-variant-caps': !0,
          'font-variant-east-asian': !0,
          'font-variant-ligatures': !0,
          'font-variant-numeric': !0,
          'font-variant-position': !0,
          'font-weight': !0,
          grid: !1,
          'grid-area': !1,
          'grid-auto-columns': !1,
          'grid-auto-flow': !1,
          'grid-auto-rows': !1,
          'grid-column': !1,
          'grid-column-end': !1,
          'grid-column-start': !1,
          'grid-row': !1,
          'grid-row-end': !1,
          'grid-row-start': !1,
          'grid-template': !1,
          'grid-template-areas': !1,
          'grid-template-columns': !1,
          'grid-template-rows': !1,
          'hanging-punctuation': !1,
          height: !0,
          hyphens: !1,
          icon: !1,
          'image-orientation': !1,
          'image-resolution': !1,
          'ime-mode': !1,
          'initial-letters': !1,
          'inline-box-align': !1,
          'justify-content': !1,
          'justify-items': !1,
          'justify-self': !1,
          left: !1,
          'letter-spacing': !0,
          'lighting-color': !0,
          'line-box-contain': !1,
          'line-break': !1,
          'line-grid': !1,
          'line-height': !1,
          'line-snap': !1,
          'line-stacking': !1,
          'line-stacking-ruby': !1,
          'line-stacking-shift': !1,
          'line-stacking-strategy': !1,
          'list-style': !0,
          'list-style-image': !0,
          'list-style-position': !0,
          'list-style-type': !0,
          margin: !0,
          'margin-bottom': !0,
          'margin-left': !0,
          'margin-right': !0,
          'margin-top': !0,
          'marker-offset': !1,
          'marker-side': !1,
          marks: !1,
          mask: !1,
          'mask-box': !1,
          'mask-box-outset': !1,
          'mask-box-repeat': !1,
          'mask-box-slice': !1,
          'mask-box-source': !1,
          'mask-box-width': !1,
          'mask-clip': !1,
          'mask-image': !1,
          'mask-origin': !1,
          'mask-position': !1,
          'mask-repeat': !1,
          'mask-size': !1,
          'mask-source-type': !1,
          'mask-type': !1,
          'max-height': !0,
          'max-lines': !1,
          'max-width': !0,
          'min-height': !0,
          'min-width': !0,
          'move-to': !1,
          'nav-down': !1,
          'nav-index': !1,
          'nav-left': !1,
          'nav-right': !1,
          'nav-up': !1,
          'object-fit': !1,
          'object-position': !1,
          opacity: !1,
          order: !1,
          orphans: !1,
          outline: !1,
          'outline-color': !1,
          'outline-offset': !1,
          'outline-style': !1,
          'outline-width': !1,
          overflow: !1,
          'overflow-wrap': !1,
          'overflow-x': !1,
          'overflow-y': !1,
          padding: !0,
          'padding-bottom': !0,
          'padding-left': !0,
          'padding-right': !0,
          'padding-top': !0,
          page: !1,
          'page-break-after': !1,
          'page-break-before': !1,
          'page-break-inside': !1,
          'page-policy': !1,
          pause: !1,
          'pause-after': !1,
          'pause-before': !1,
          perspective: !1,
          'perspective-origin': !1,
          pitch: !1,
          'pitch-range': !1,
          'play-during': !1,
          position: !1,
          'presentation-level': !1,
          quotes: !1,
          'region-fragment': !1,
          resize: !1,
          rest: !1,
          'rest-after': !1,
          'rest-before': !1,
          richness: !1,
          right: !1,
          rotation: !1,
          'rotation-point': !1,
          'ruby-align': !1,
          'ruby-merge': !1,
          'ruby-position': !1,
          'shape-image-threshold': !1,
          'shape-outside': !1,
          'shape-margin': !1,
          size: !1,
          speak: !1,
          'speak-as': !1,
          'speak-header': !1,
          'speak-numeral': !1,
          'speak-punctuation': !1,
          'speech-rate': !1,
          stress: !1,
          'string-set': !1,
          'tab-size': !1,
          'table-layout': !1,
          'text-align': !0,
          'text-align-last': !0,
          'text-combine-upright': !0,
          'text-decoration': !0,
          'text-decoration-color': !0,
          'text-decoration-line': !0,
          'text-decoration-skip': !0,
          'text-decoration-style': !0,
          'text-emphasis': !0,
          'text-emphasis-color': !0,
          'text-emphasis-position': !0,
          'text-emphasis-style': !0,
          'text-height': !0,
          'text-indent': !0,
          'text-justify': !0,
          'text-orientation': !0,
          'text-overflow': !0,
          'text-shadow': !0,
          'text-space-collapse': !0,
          'text-transform': !0,
          'text-underline-position': !0,
          'text-wrap': !0,
          top: !1,
          transform: !1,
          'transform-origin': !1,
          'transform-style': !1,
          transition: !1,
          'transition-delay': !1,
          'transition-duration': !1,
          'transition-property': !1,
          'transition-timing-function': !1,
          'unicode-bidi': !1,
          'vertical-align': !1,
          visibility: !1,
          'voice-balance': !1,
          'voice-duration': !1,
          'voice-family': !1,
          'voice-pitch': !1,
          'voice-range': !1,
          'voice-rate': !1,
          'voice-stress': !1,
          'voice-volume': !1,
          volume: !1,
          'white-space': !1,
          widows: !1,
          width: !0,
          'will-change': !1,
          'word-break': !0,
          'word-spacing': !0,
          'word-wrap': !0,
          'wrap-flow': !1,
          'wrap-through': !1,
          'writing-mode': !1,
          'z-index': !1,
        };
        return t;
      }
      var i = /javascript\s*\:/gim;
      (e.whiteList = r()),
        (e.getDefaultWhiteList = r),
        (e.onAttr = function (t, e, r) {}),
        (e.onIgnoreAttr = function (t, e, r) {}),
        (e.safeAttrValue = function (t, e) {
          return i.test(e) ? '' : e;
        });
    },
    6406: function (t, e, r) {
      var i = r(5932),
        n = r(4557);
      for (var o in (((e = t.exports =
        function (t, e) {
          return new n(e).process(t);
        }).FilterCSS = n),
      i))
        e[o] = i[o];
      'undefined' !== typeof window && (window.filterCSS = t.exports);
    },
    559: function (t, e, r) {
      var i = r(3839);
      t.exports = function (t, e) {
        ';' !== (t = i.trimRight(t))[t.length - 1] && (t += ';');
        var r = t.length,
          n = !1,
          o = 0,
          a = 0,
          s = '';
        function l() {
          if (!n) {
            var r = i.trim(t.slice(o, a)),
              l = r.indexOf(':');
            if (-1 !== l) {
              var c = i.trim(r.slice(0, l)),
                u = i.trim(r.slice(l + 1));
              if (c) {
                var g = e(o, s.length, c, u, r);
                g && (s += g + '; ');
              }
            }
          }
          o = a + 1;
        }
        for (; a < r; a++) {
          var c = t[a];
          if ('/' === c && '*' === t[a + 1]) {
            var u = t.indexOf('*/', a + 2);
            if (-1 === u) break;
            (o = (a = u + 1) + 1), (n = !1);
          } else
            '(' === c
              ? (n = !0)
              : ')' === c
              ? (n = !1)
              : ';' === c
              ? n || l()
              : '\n' === c && l();
        }
        return i.trim(s);
      };
    },
    3839: function (t) {
      t.exports = {
        indexOf: function (t, e) {
          var r, i;
          if (Array.prototype.indexOf) return t.indexOf(e);
          for (r = 0, i = t.length; r < i; r++) if (t[r] === e) return r;
          return -1;
        },
        forEach: function (t, e, r) {
          var i, n;
          if (Array.prototype.forEach) return t.forEach(e, r);
          for (i = 0, n = t.length; i < n; i++) e.call(r, t[i], i, t);
        },
        trim: function (t) {
          return String.prototype.trim
            ? t.trim()
            : t.replace(/(^\s*)|(\s*$)/g, '');
        },
        trimRight: function (t) {
          return String.prototype.trimRight
            ? t.trimRight()
            : t.replace(/(\s*$)/g, '');
        },
      };
    },
    8387: function (t, e, r) {
      'use strict';
      r.d(e, {
        Z: function () {
          return a;
        },
      });
      var i = {
        '': ['<em>', '</em>'],
        _: ['<strong>', '</strong>'],
        '*': ['<strong>', '</strong>'],
        '~': ['<s>', '</s>'],
        '\n': ['<br />'],
        ' ': ['<br />'],
        '-': ['<hr />'],
      };
      function n(t) {
        return t.replace(
          RegExp('^' + (t.match(/^(\t| )+/) || '')[0], 'gm'),
          ''
        );
      }
      function o(t) {
        return (t + '')
          .replace(/"/g, '&quot;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      function a(t, e) {
        var r,
          s,
          l,
          c,
          u,
          g =
            /((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,
          f = [],
          p = '',
          d = e || {},
          h = 0;
        function m(t) {
          var e = i[t[1] || ''],
            r = f[f.length - 1] == t;
          return e ? (e[1] ? (r ? f.pop() : f.push(t), e[0 | r]) : e[0]) : t;
        }
        function b() {
          for (var t = ''; f.length; ) t += m(f[f.length - 1]);
          return t;
        }
        for (
          t = t
            .replace(/^\[(.+?)\]:\s*(.+)$/gm, function (t, e, r) {
              return (d[e.toLowerCase()] = r), '';
            })
            .replace(/^\n+|\n+$/g, '');
          (l = g.exec(t));

        )
          (s = t.substring(h, l.index)),
            (h = g.lastIndex),
            (r = l[0]),
            s.match(/[^\\](\\\\)*\\$/) ||
              ((u = l[3] || l[4])
                ? (r =
                    '<pre class="code ' +
                    (l[4] ? 'poetry' : l[2].toLowerCase()) +
                    '"><code' +
                    (l[2]
                      ? ' class="language-' + l[2].toLowerCase() + '"'
                      : '') +
                    '>' +
                    n(o(u).replace(/^\n+|\n+$/g, '')) +
                    '</code></pre>')
                : (u = l[6])
                ? (u.match(/\./) && (l[5] = l[5].replace(/^\d+/gm, '')),
                  (c = a(n(l[5].replace(/^\s*[>*+.-]/gm, '')))),
                  '>' == u
                    ? (u = 'blockquote')
                    : ((u = u.match(/\./) ? 'ol' : 'ul'),
                      (c = c.replace(/^(.*)(\n|$)/gm, '<li>$1</li>'))),
                  (r = '<' + u + '>' + c + '</' + u + '>'))
                : l[8]
                ? (r = '<img src="' + o(l[8]) + '" alt="' + o(l[7]) + '">')
                : l[10]
                ? ((p = p.replace(
                    '<a>',
                    '<a href="' + o(l[11] || d[s.toLowerCase()]) + '">'
                  )),
                  (r = b() + '</a>'))
                : l[9]
                ? (r = '<a>')
                : l[12] || l[14]
                ? (r =
                    '<' +
                    (u = 'h' + (l[14] ? l[14].length : l[13] > '=' ? 1 : 2)) +
                    '>' +
                    a(l[12] || l[15], d) +
                    '</' +
                    u +
                    '>')
                : l[16]
                ? (r = '<code>' + o(l[16]) + '</code>')
                : (l[17] || l[1]) && (r = m(l[17] || '--'))),
            (p += s),
            (p += r);
        return (p + t.substring(h) + b()).replace(/^\n+|\n+$/g, '');
      }
    },
    922: function (t, e, r) {
      var i = r(6406).FilterCSS,
        n = r(6406).getDefaultWhiteList,
        o = r(6109);
      function a() {
        return {
          a: ['target', 'href', 'title'],
          abbr: ['title'],
          address: [],
          area: ['shape', 'coords', 'href', 'alt'],
          article: [],
          aside: [],
          audio: [
            'autoplay',
            'controls',
            'crossorigin',
            'loop',
            'muted',
            'preload',
            'src',
          ],
          b: [],
          bdi: ['dir'],
          bdo: ['dir'],
          big: [],
          blockquote: ['cite'],
          br: [],
          caption: [],
          center: [],
          cite: [],
          code: [],
          col: ['align', 'valign', 'span', 'width'],
          colgroup: ['align', 'valign', 'span', 'width'],
          dd: [],
          del: ['datetime'],
          details: ['open'],
          div: [],
          dl: [],
          dt: [],
          em: [],
          figcaption: [],
          figure: [],
          font: ['color', 'size', 'face'],
          footer: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          header: [],
          hr: [],
          i: [],
          img: ['src', 'alt', 'title', 'width', 'height'],
          ins: ['datetime'],
          li: [],
          mark: [],
          nav: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          section: [],
          small: [],
          span: [],
          sub: [],
          summary: [],
          sup: [],
          strong: [],
          strike: [],
          table: ['width', 'border', 'align', 'valign'],
          tbody: ['align', 'valign'],
          td: ['width', 'rowspan', 'colspan', 'align', 'valign'],
          tfoot: ['align', 'valign'],
          th: ['width', 'rowspan', 'colspan', 'align', 'valign'],
          thead: ['align', 'valign'],
          tr: ['rowspan', 'align', 'valign'],
          tt: [],
          u: [],
          ul: [],
          video: [
            'autoplay',
            'controls',
            'crossorigin',
            'loop',
            'muted',
            'playsinline',
            'poster',
            'preload',
            'src',
            'height',
            'width',
          ],
        };
      }
      var s = new i();
      function l(t) {
        return t.replace(c, '&lt;').replace(u, '&gt;');
      }
      var c = /</g,
        u = />/g,
        g = /"/g,
        f = /&quot;/g,
        p = /&#([a-zA-Z0-9]*);?/gim,
        d = /&colon;?/gim,
        h = /&newline;?/gim,
        m =
          /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi,
        b = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,
        v = /u\s*r\s*l\s*\(.*/gi;
      function w(t) {
        return t.replace(g, '&quot;');
      }
      function x(t) {
        return t.replace(f, '"');
      }
      function y(t) {
        return t.replace(p, function (t, e) {
          return 'x' === e[0] || 'X' === e[0]
            ? String.fromCharCode(parseInt(e.substr(1), 16))
            : String.fromCharCode(parseInt(e, 10));
        });
      }
      function k(t) {
        return t.replace(d, ':').replace(h, ' ');
      }
      function A(t) {
        for (var e = '', r = 0, i = t.length; r < i; r++)
          e += t.charCodeAt(r) < 32 ? ' ' : t.charAt(r);
        return o.trim(e);
      }
      function T(t) {
        return (t = A((t = k((t = y((t = x(t))))))));
      }
      function I(t) {
        return (t = l((t = w(t))));
      }
      (e.whiteList = {
        a: ['target', 'href', 'title'],
        abbr: ['title'],
        address: [],
        area: ['shape', 'coords', 'href', 'alt'],
        article: [],
        aside: [],
        audio: [
          'autoplay',
          'controls',
          'crossorigin',
          'loop',
          'muted',
          'preload',
          'src',
        ],
        b: [],
        bdi: ['dir'],
        bdo: ['dir'],
        big: [],
        blockquote: ['cite'],
        br: [],
        caption: [],
        center: [],
        cite: [],
        code: [],
        col: ['align', 'valign', 'span', 'width'],
        colgroup: ['align', 'valign', 'span', 'width'],
        dd: [],
        del: ['datetime'],
        details: ['open'],
        div: [],
        dl: [],
        dt: [],
        em: [],
        figcaption: [],
        figure: [],
        font: ['color', 'size', 'face'],
        footer: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        header: [],
        hr: [],
        i: [],
        img: ['src', 'alt', 'title', 'width', 'height'],
        ins: ['datetime'],
        li: [],
        mark: [],
        nav: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        section: [],
        small: [],
        span: [],
        sub: [],
        summary: [],
        sup: [],
        strong: [],
        strike: [],
        table: ['width', 'border', 'align', 'valign'],
        tbody: ['align', 'valign'],
        td: ['width', 'rowspan', 'colspan', 'align', 'valign'],
        tfoot: ['align', 'valign'],
        th: ['width', 'rowspan', 'colspan', 'align', 'valign'],
        thead: ['align', 'valign'],
        tr: ['rowspan', 'align', 'valign'],
        tt: [],
        u: [],
        ul: [],
        video: [
          'autoplay',
          'controls',
          'crossorigin',
          'loop',
          'muted',
          'playsinline',
          'poster',
          'preload',
          'src',
          'height',
          'width',
        ],
      }),
        (e.getDefaultWhiteList = a),
        (e.onTag = function (t, e, r) {}),
        (e.onIgnoreTag = function (t, e, r) {}),
        (e.onTagAttr = function (t, e, r) {}),
        (e.onIgnoreTagAttr = function (t, e, r) {}),
        (e.safeAttrValue = function (t, e, r, i) {
          if (((r = T(r)), 'href' === e || 'src' === e)) {
            if ('#' === (r = o.trim(r))) return '#';
            if (
              'http://' !== r.substr(0, 7) &&
              'https://' !== r.substr(0, 8) &&
              'mailto:' !== r.substr(0, 7) &&
              'tel:' !== r.substr(0, 4) &&
              'data:image/' !== r.substr(0, 11) &&
              'ftp://' !== r.substr(0, 6) &&
              './' !== r.substr(0, 2) &&
              '../' !== r.substr(0, 3) &&
              '#' !== r[0] &&
              '/' !== r[0]
            )
              return '';
          } else if ('background' === e) {
            if (((m.lastIndex = 0), m.test(r))) return '';
          } else if ('style' === e) {
            if (((b.lastIndex = 0), b.test(r))) return '';
            if (
              ((v.lastIndex = 0), v.test(r) && ((m.lastIndex = 0), m.test(r)))
            )
              return '';
            !1 !== i && (r = (i = i || s).process(r));
          }
          return (r = I(r));
        }),
        (e.escapeHtml = l),
        (e.escapeQuote = w),
        (e.unescapeQuote = x),
        (e.escapeHtmlEntities = y),
        (e.escapeDangerHtml5Entities = k),
        (e.clearNonPrintableCharacter = A),
        (e.friendlyAttrValue = T),
        (e.escapeAttrValue = I),
        (e.onIgnoreTagStripAll = function () {
          return '';
        }),
        (e.StripTagBody = function (t, e) {
          'function' !== typeof e && (e = function () {});
          var r = !Array.isArray(t),
            i = [],
            n = !1;
          return {
            onIgnoreTag: function (a, s, l) {
              if (
                (function (e) {
                  return !!r || -1 !== o.indexOf(t, e);
                })(a)
              ) {
                if (l.isClosing) {
                  var c = '[/removed]',
                    u = l.position + c.length;
                  return i.push([!1 !== n ? n : l.position, u]), (n = !1), c;
                }
                return n || (n = l.position), '[removed]';
              }
              return e(a, s, l);
            },
            remove: function (t) {
              var e = '',
                r = 0;
              return (
                o.forEach(i, function (i) {
                  (e += t.slice(r, i[0])), (r = i[1]);
                }),
                (e += t.slice(r))
              );
            },
          };
        }),
        (e.stripCommentTag = function (t) {
          for (var e = '', r = 0; r < t.length; ) {
            var i = t.indexOf('\x3c!--', r);
            if (-1 === i) {
              e += t.slice(r);
              break;
            }
            e += t.slice(r, i);
            var n = t.indexOf('--\x3e', i);
            if (-1 === n) break;
            r = n + 3;
          }
          return e;
        }),
        (e.stripBlankChar = function (t) {
          var e = t.split('');
          return (e = e.filter(function (t) {
            var e = t.charCodeAt(0);
            return 127 !== e && (!(e <= 31) || 10 === e || 13 === e);
          })).join('');
        }),
        (e.cssFilter = s),
        (e.getDefaultCSSWhiteList = n);
    },
    5815: function (t, e, r) {
      var i = r(922),
        n = r(4179),
        o = r(1511);
      function a(t, e) {
        return new o(e).process(t);
      }
      ((e = t.exports = a).filterXSS = a),
        (e.FilterXSS = o),
        (function () {
          for (var t in i) e[t] = i[t];
          for (var r in n) e[r] = n[r];
        })(),
        'undefined' !== typeof window && (window.filterXSS = t.exports),
        'undefined' !== typeof self &&
          'undefined' !== typeof DedicatedWorkerGlobalScope &&
          self instanceof DedicatedWorkerGlobalScope &&
          (self.filterXSS = t.exports);
    },
    4179: function (t, e, r) {
      var i = r(6109);
      function n(t) {
        var e,
          r = i.spaceIndex(t);
        return (
          (e = -1 === r ? t.slice(1, -1) : t.slice(1, r + 1)),
          '/' === (e = i.trim(e).toLowerCase()).slice(0, 1) && (e = e.slice(1)),
          '/' === e.slice(-1) && (e = e.slice(0, -1)),
          e
        );
      }
      function o(t) {
        return '</' === t.slice(0, 2);
      }
      var a = /[^a-zA-Z0-9\\_:.-]/gim;
      function s(t, e) {
        for (; e < t.length; e++) {
          var r = t[e];
          if (' ' !== r) return '=' === r ? e : -1;
        }
      }
      function l(t, e) {
        for (; e < t.length; e++) {
          var r = t[e];
          if (' ' !== r) return "'" === r || '"' === r ? e : -1;
        }
      }
      function c(t, e) {
        for (; e > 0; e--) {
          var r = t[e];
          if (' ' !== r) return '=' === r ? e : -1;
        }
      }
      function u(t) {
        return (function (t) {
          return (
            ('"' === t[0] && '"' === t[t.length - 1]) ||
            ("'" === t[0] && "'" === t[t.length - 1])
          );
        })(t)
          ? t.substr(1, t.length - 2)
          : t;
      }
      (e.parseTag = function (t, e, r) {
        'use strict';
        var i = '',
          a = 0,
          s = !1,
          l = !1,
          c = 0,
          u = t.length,
          g = '',
          f = '';
        t: for (c = 0; c < u; c++) {
          var p = t.charAt(c);
          if (!1 === s) {
            if ('<' === p) {
              s = c;
              continue;
            }
          } else if (!1 === l) {
            if ('<' === p) {
              (i += r(t.slice(a, c))), (s = c), (a = c);
              continue;
            }
            if ('>' === p || c === u - 1) {
              (i += r(t.slice(a, s))),
                (g = n((f = t.slice(s, c + 1)))),
                (i += e(s, i.length, g, f, o(f))),
                (a = c + 1),
                (s = !1);
              continue;
            }
            if ('"' === p || "'" === p)
              for (
                var d = 1, h = t.charAt(c - d);
                '' === h.trim() || '=' === h;

              ) {
                if ('=' === h) {
                  l = p;
                  continue t;
                }
                h = t.charAt(c - ++d);
              }
          } else if (p === l) {
            l = !1;
            continue;
          }
        }
        return a < u && (i += r(t.substr(a))), i;
      }),
        (e.parseAttr = function (t, e) {
          'use strict';
          var r = 0,
            n = 0,
            o = [],
            g = !1,
            f = t.length;
          function p(t, r) {
            if (
              !((t = (t = i.trim(t)).replace(a, '').toLowerCase()).length < 1)
            ) {
              var n = e(t, r || '');
              n && o.push(n);
            }
          }
          for (var d = 0; d < f; d++) {
            var h,
              m = t.charAt(d);
            if (!1 !== g || '=' !== m)
              if (!1 === g || d !== n)
                if (/\s|\n|\t/.test(m)) {
                  if (((t = t.replace(/\s|\n|\t/g, ' ')), !1 === g)) {
                    if (-1 === (h = s(t, d))) {
                      p(i.trim(t.slice(r, d))), (g = !1), (r = d + 1);
                      continue;
                    }
                    d = h - 1;
                    continue;
                  }
                  if (-1 === (h = c(t, d - 1))) {
                    p(g, u(i.trim(t.slice(r, d)))), (g = !1), (r = d + 1);
                    continue;
                  }
                } else;
              else {
                if (-1 === (h = t.indexOf(m, d + 1))) break;
                p(g, i.trim(t.slice(n + 1, h))), (g = !1), (r = (d = h) + 1);
              }
            else
              (g = t.slice(r, d)),
                (r = d + 1),
                (n =
                  '"' === t.charAt(r) || "'" === t.charAt(r) ? r : l(t, d + 1));
          }
          return (
            r < t.length &&
              (!1 === g ? p(t.slice(r)) : p(g, u(i.trim(t.slice(r))))),
            i.trim(o.join(' '))
          );
        });
    },
    6109: function (t) {
      t.exports = {
        indexOf: function (t, e) {
          var r, i;
          if (Array.prototype.indexOf) return t.indexOf(e);
          for (r = 0, i = t.length; r < i; r++) if (t[r] === e) return r;
          return -1;
        },
        forEach: function (t, e, r) {
          var i, n;
          if (Array.prototype.forEach) return t.forEach(e, r);
          for (i = 0, n = t.length; i < n; i++) e.call(r, t[i], i, t);
        },
        trim: function (t) {
          return String.prototype.trim
            ? t.trim()
            : t.replace(/(^\s*)|(\s*$)/g, '');
        },
        spaceIndex: function (t) {
          var e = /\s|\n|\t/.exec(t);
          return e ? e.index : -1;
        },
      };
    },
    1511: function (t, e, r) {
      var i = r(6406).FilterCSS,
        n = r(922),
        o = r(4179),
        a = o.parseTag,
        s = o.parseAttr,
        l = r(6109);
      function c(t) {
        return void 0 === t || null === t;
      }
      function u(t) {
        (t = (function (t) {
          var e = {};
          for (var r in t) e[r] = t[r];
          return e;
        })(t || {})).stripIgnoreTag &&
          (t.onIgnoreTag &&
            console.error(
              'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
            ),
          (t.onIgnoreTag = n.onIgnoreTagStripAll)),
          t.whiteList || t.allowList
            ? (t.whiteList = (function (t) {
                var e = {};
                for (var r in t)
                  Array.isArray(t[r])
                    ? (e[r.toLowerCase()] = t[r].map(function (t) {
                        return t.toLowerCase();
                      }))
                    : (e[r.toLowerCase()] = t[r]);
                return e;
              })(t.whiteList || t.allowList))
            : (t.whiteList = n.whiteList),
          (t.onTag = t.onTag || n.onTag),
          (t.onTagAttr = t.onTagAttr || n.onTagAttr),
          (t.onIgnoreTag = t.onIgnoreTag || n.onIgnoreTag),
          (t.onIgnoreTagAttr = t.onIgnoreTagAttr || n.onIgnoreTagAttr),
          (t.safeAttrValue = t.safeAttrValue || n.safeAttrValue),
          (t.escapeHtml = t.escapeHtml || n.escapeHtml),
          (this.options = t),
          !1 === t.css
            ? (this.cssFilter = !1)
            : ((t.css = t.css || {}), (this.cssFilter = new i(t.css)));
      }
      (u.prototype.process = function (t) {
        if (!(t = (t = t || '').toString())) return '';
        var e = this.options,
          r = e.whiteList,
          i = e.onTag,
          o = e.onIgnoreTag,
          u = e.onTagAttr,
          g = e.onIgnoreTagAttr,
          f = e.safeAttrValue,
          p = e.escapeHtml,
          d = this.cssFilter;
        e.stripBlankChar && (t = n.stripBlankChar(t)),
          e.allowCommentTag || (t = n.stripCommentTag(t));
        var h = !1;
        e.stripIgnoreTagBody &&
          ((h = n.StripTagBody(e.stripIgnoreTagBody, o)), (o = h.onIgnoreTag));
        var m = a(
          t,
          function (t, e, n, a, h) {
            var m = {
                sourcePosition: t,
                position: e,
                isClosing: h,
                isWhite: Object.prototype.hasOwnProperty.call(r, n),
              },
              b = i(n, a, m);
            if (!c(b)) return b;
            if (m.isWhite) {
              if (m.isClosing) return '</' + n + '>';
              var v = (function (t) {
                  var e = l.spaceIndex(t);
                  if (-1 === e)
                    return { html: '', closing: '/' === t[t.length - 2] };
                  var r =
                    '/' === (t = l.trim(t.slice(e + 1, -1)))[t.length - 1];
                  return (
                    r && (t = l.trim(t.slice(0, -1))), { html: t, closing: r }
                  );
                })(a),
                w = r[n],
                x = s(v.html, function (t, e) {
                  var r = -1 !== l.indexOf(w, t),
                    i = u(n, t, e, r);
                  return c(i)
                    ? r
                      ? (e = f(n, t, e, d))
                        ? t + '="' + e + '"'
                        : t
                      : c((i = g(n, t, e, r)))
                      ? void 0
                      : i
                    : i;
                });
              return (
                (a = '<' + n),
                x && (a += ' ' + x),
                v.closing && (a += ' /'),
                (a += '>')
              );
            }
            return c((b = o(n, a, m))) ? p(a) : b;
          },
          p
        );
        return h && (m = h.remove(m)), m;
      }),
        (t.exports = u);
    },
  },
]);
//# sourceMappingURL=644.f257085e.chunk.js.map
