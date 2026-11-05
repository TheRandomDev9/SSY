/* SSY guide – renderer, i18n, theme, navigation */
(function () {
  'use strict';

  var LANG_KEY = 'ssy-lang';
  var THEME_KEY = 'ssy-theme';
  var root = document.documentElement;
  var CONTENT = window.SSY_CONTENT || {};

  /* ---------- helpers ---------- */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  /* tiny inline markup: **bold**, *italic*, [text](#id) links, `code` */
  function md(s) {
    var out = esc(s);
    out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    out = out.replace(/\*([^*\n]+)\*/g, '<em>$1</em>');
    out = out.replace(/`([^`]+)`/g, '<code>$1</code>');
    out = out.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, function (m, t, h) {
      var ext = /^https?:\/\//.test(h);
      return '<a href="' + h + '"' + (ext ? ' target="_blank" rel="noopener noreferrer"' : '') + '>' + t + '</a>';
    });
    return out;
  }
  function list(items, tag) {
    tag = tag || 'ul';
    return '<' + tag + '>' + items.map(function (i) {
      if (typeof i === 'string') return '<li>' + md(i) + '</li>';
      /* nested: {text, items} */
      return '<li>' + md(i.text) + (i.items ? list(i.items, i.ordered ? 'ol' : 'ul') : '') + '</li>';
    }).join('') + '</' + tag + '>';
  }

  /* ---------- block renderers ---------- */
  var R = {
    p: function (b) { return '<p>' + md(b.text) + '</p>'; },
    h3: function (b) { return '<h3' + (b.id ? ' id="' + esc(b.id) + '"' : '') + '>' + md(b.text) + '</h3>'; },
    h4: function (b) { return '<h4>' + md(b.text) + '</h4>'; },
    ul: function (b) { return list(b.items, 'ul'); },
    ol: function (b) { return list(b.items, 'ol'); },
    quote: function (b) { return '<blockquote class="quote"><p>' + md(b.text) + '</p>' + (b.by ? '<cite>— ' + md(b.by) + '</cite>' : '') + '</blockquote>'; },
    note: function (b) {
      var kind = b.kind || 'info';
      var icon = { info: 'ℹ️', tip: '✅', warn: '⚠️' }[kind] || 'ℹ️';
      return '<div class="note note-' + kind + '"><span class="ic" aria-hidden="true">' + icon + '</span><div>' + (b.title ? '<p><strong>' + md(b.title) + '</strong></p>' : '') + '<p>' + md(b.text) + '</p></div></div>';
    },
    chips: function (b) { return '<div class="chips">' + b.items.map(function (c) { return '<span class="chip">' + md(c) + '</span>'; }).join('') + '</div>'; },
    cards: function (b) {
      return '<div class="cards' + (b.cols === 3 ? ' three' : '') + '">' + b.items.map(function (c) {
        return '<div class="card">' + (c.icon ? '<div class="ic" aria-hidden="true">' + c.icon + '</div>' : '') +
          '<h4>' + md(c.title) + '</h4>' + (c.text ? '<p>' + md(c.text) + '</p>' : '') + (c.items ? list(c.items) : '') + '</div>';
      }).join('') + '</div>';
    },
    timeline: function (b) {
      return '<ol class="timeline">' + b.items.map(function (t) {
        return '<li><span class="y">' + esc(t.year) + '</span><span class="t">' + md(t.title) + '</span>' + (t.text ? '<p>' + md(t.text) + '</p>' : '') + '</li>';
      }).join('') + '</ol>';
    },
    steps: function (b) {
      return '<ol class="steps">' + b.items.map(function (s) {
        return '<li><div>' + (s.meta ? '<span class="m">' + md(s.meta) + '</span>' : '') + '<span class="t">' + md(s.title) + '</span>' + (s.text ? '<p>' + md(s.text) + '</p>' : '') + (s.items ? list(s.items) : '') + '</div></li>';
      }).join('') + '</ol>';
    },
    ladder: function (b) {
      return '<ol class="ladder">' + b.items.map(function (s, i) {
        return '<li><span class="dot" aria-hidden="true">' + (i + 1) + '</span><div class="box"><span class="t">' + md(s.title) + '</span>' + (s.meta ? ' <span class="m">· ' + md(s.meta) + '</span>' : '') + (s.text ? '<p>' + md(s.text) + '</p>' : '') + '</div></li>';
      }).join('') + '</ol>';
    },
    accordion: function (b) {
      return b.items.map(function (a) {
        var body = Array.isArray(a.a) ? a.a.map(function (p) { return '<p>' + md(p) + '</p>'; }).join('') : '<p>' + md(a.a) + '</p>';
        return '<details class="acc"' + (a.open ? ' open' : '') + '><summary>' + md(a.q) + '</summary><div class="body">' + body + (a.items ? list(a.items) : '') + '</div></details>';
      }).join('');
    },
    table: function (b) {
      return '<div class="table-wrap"><table>' +
        (b.head ? '<thead><tr>' + b.head.map(function (h) { return '<th>' + md(h) + '</th>'; }).join('') + '</tr></thead>' : '') +
        '<tbody>' + b.rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + md(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
    },
    kv: function (b) {
      return '<div class="kv">' + b.items.map(function (i) { return '<div><span class="k">' + md(i[0]) + '</span><span>' + md(i[1]) + '</span></div>'; }).join('') + '</div>';
    },
    glossary: function (b) {
      return '<ul class="gloss">' + b.items.map(function (g) {
        return '<li><dfn>' + md(g.term) + '</dfn>' + (g.sa ? '<span class="sa">' + esc(g.sa) + '</span>' : '') + ' — ' + md(g.def) + '</li>';
      }).join('') + '</ul>';
    },
    figure: function (b) {
      return '<figure class="figure">' + (b.svg || '') + (b.caption ? '<figcaption>' + md(b.caption) + '</figcaption>' : '') + '</figure>';
    },
    hr: function () { return '<hr>'; }
  };

  function renderBlocks(blocks) {
    return (blocks || []).map(function (b) {
      var fn = R[b.type];
      return fn ? fn(b) : '';
    }).join('');
  }

  /* ---------- page render ---------- */
  function render(lang) {
    var c = CONTENT[lang];
    if (!c) return;
    root.setAttribute('lang', c.htmlLang || lang);
    root.setAttribute('data-lang', lang);
    document.title = c.meta.title;
    var m = $('meta[name="description"]'); if (m) m.setAttribute('content', c.meta.description);
    var og = $('meta[property="og:title"]'); if (og) og.setAttribute('content', c.meta.title);
    var ogd = $('meta[property="og:description"]'); if (ogd) ogd.setAttribute('content', c.meta.description);

    /* header */
    $('.brand-title').textContent = c.ui.brand;
    $('.brand-sub').textContent = c.ui.brandSub;
    $('.theme-btn').setAttribute('aria-label', c.ui.theme);
    $('.theme-btn').setAttribute('title', c.ui.theme);
    $('.menu-btn').setAttribute('aria-label', c.ui.menu);
    $('.to-top').setAttribute('aria-label', c.ui.backToTop);
    $('.skip-link').textContent = c.ui.skip;
    $$('.lang-toggle button').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false'); });

    /* hero */
    var h = c.hero;
    $('.hero-inner').innerHTML =
      '<span class="hero-kicker">' + md(h.kicker) + '</span>' +
      '<h1>' + md(h.title) + (h.titleAlt ? '<span class="en">' + md(h.titleAlt) + '</span>' : '') + '</h1>' +
      '<p class="hero-sub">' + md(h.subtitle) + '</p>' +
      '<div class="hero-cta"><a class="btn btn-primary" href="' + esc(h.primary.href) + '">' + md(h.primary.label) + ' <span aria-hidden="true">↓</span></a>' +
      '<a class="btn btn-ghost" href="' + esc(h.secondary.href) + '">' + md(h.secondary.label) + '</a></div>' +
      '<div class="stats">' + h.stats.map(function (s) { return '<div class="stat"><div class="v">' + esc(s.value) + '</div><div class="l">' + md(s.label) + '</div></div>'; }).join('') + '</div>';

    /* toc + nav */
    var tocItems = c.sections.map(function (s, i) {
      return '<li><a href="#' + esc(s.id) + '" data-sec="' + esc(s.id) + '"><span class="n">' + (i + 1) + '</span><span>' + md(s.short || s.title) + '</span></a></li>';
    }).join('');
    $('.toc').innerHTML = '<p class="toc-title">' + esc(c.ui.contents) + '</p><ol>' + tocItems + '</ol>';
    $('.drawer').innerHTML = '<p class="drawer-title">' + esc(c.ui.contents) + '</p><ol>' + tocItems + '</ol>';
    $('.mobile-toc').innerHTML = '<summary><span aria-hidden="true">☰</span> ' + esc(c.ui.contents) + ' <span style="color:var(--text-faint);font-weight:400;font-size:.85rem">(' + c.sections.length + ')</span></summary><ol>' + tocItems + '</ol>';
    $('.top-nav').innerHTML = c.sections.filter(function (s) { return s.nav; }).map(function (s) {
      return '<a href="#' + esc(s.id) + '" data-sec="' + esc(s.id) + '">' + md(s.nav) + '</a>';
    }).join('');

    /* sections */
    $('.sections').innerHTML = c.sections.map(function (s, i) {
      return '<section class="sec" id="' + esc(s.id) + '" aria-labelledby="h-' + esc(s.id) + '">' +
        '<div class="sec-head"><span class="sec-num" aria-hidden="true">' + (i + 1) + '</span><h2 id="h-' + esc(s.id) + '">' + md(s.title) + '</h2></div>' +
        (s.lead ? '<p class="lead">' + md(s.lead) + '</p>' : '') +
        renderBlocks(s.blocks) + '</section>';
    }).join('');

    /* footer */
    var f = c.footer;
    $('.footer-inner').innerHTML =
      '<div><h4>' + md(f.aboutTitle) + '</h4><p>' + md(f.about) + '</p><p>' + md(f.disclaimer) + '</p></div>' +
      '<div><h4>' + md(f.linksTitle) + '</h4><ul>' + f.links.map(function (l) { return '<li><a href="' + esc(l.href) + '" target="_blank" rel="noopener noreferrer">' + md(l.label) + '</a></li>'; }).join('') + '</ul></div>' +
      '<div><h4>' + md(f.quickTitle) + '</h4><ul>' + c.sections.slice(0, 6).map(function (s) { return '<li><a href="#' + esc(s.id) + '">' + md(s.short || s.title) + '</a></li>'; }).join('') + '</ul></div>' +
      '<div class="footer-bottom">' + md(f.credit) + '</div>';

    setupScrollSpy();
  }

  /* ---------- language ---------- */
  function getLang() {
    var saved = null;
    try { saved = localStorage.getItem(LANG_KEY); } catch (e) {}
    var q = new URLSearchParams(location.search).get('lang');
    var l = q || saved || 'te';
    return CONTENT[l] ? l : 'te';
  }
  function setLang(lang) {
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    var y = window.scrollY;
    render(lang);
    window.scrollTo(0, y);
  }

  /* ---------- theme ---------- */
  function setTheme(t) {
    if (t) root.setAttribute('data-theme', t); else root.removeAttribute('data-theme');
    try { if (t) localStorage.setItem(THEME_KEY, t); else localStorage.removeItem(THEME_KEY); } catch (e) {}
    var meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', isDark() ? '#14130f' : '#fbf7f0');
  }
  function isDark() {
    var t = root.getAttribute('data-theme');
    if (t) return t === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  /* ---------- scroll spy ---------- */
  var spyObserver = null;
  function setupScrollSpy() {
    if (spyObserver) spyObserver.disconnect();
    var links = $$('[data-sec]');
    var secs = $$('section.sec');
    if (!('IntersectionObserver' in window) || !secs.length) return;
    var current = null;
    function mark(id) {
      if (id === current) return;
      current = id;
      links.forEach(function (a) { a.classList.toggle('active', a.getAttribute('data-sec') === id); });
    }
    spyObserver = new IntersectionObserver(function (entries) {
      var visible = entries.filter(function (e) { return e.isIntersecting; })
        .sort(function (a, b) { return a.boundingClientRect.top - b.boundingClientRect.top; });
      if (visible.length) mark(visible[0].target.id);
    }, { rootMargin: '-25% 0px -65% 0px', threshold: [0, 0.1] });
    secs.forEach(function (s) { spyObserver.observe(s); });
  }

  /* ---------- init ---------- */
  function init() {
    var saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch (e) {}
    if (saved) root.setAttribute('data-theme', saved);
    setTheme(saved || null);

    render(getLang());

    $$('.lang-toggle button').forEach(function (b) {
      b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); closeMenu(); });
    });
    $('.theme-btn').addEventListener('click', function () { setTheme(isDark() ? 'light' : 'dark'); });

    var body = document.body;
    function closeMenu() { body.classList.remove('menu-open'); $('.menu-btn').setAttribute('aria-expanded', 'false'); }
    $('.menu-btn').addEventListener('click', function () {
      var open = body.classList.toggle('menu-open');
      $('.menu-btn').setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (!a) return;
      closeMenu();
      var mt = e.target.closest('.mobile-toc');
      if (mt) mt.removeAttribute('open');
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

    var toTop = $('.to-top');
    var bar = $('.progress');
    function onScroll() {
      var y = window.scrollY;
      toTop.classList.toggle('show', y > 600);
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? Math.min(100, (y / h) * 100) : 0) + '%';
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

    /* open accordion when deep-linked */
    if (location.hash) {
      var t = document.getElementById(location.hash.slice(1));
      if (t) setTimeout(function () { t.scrollIntoView(); }, 50);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
