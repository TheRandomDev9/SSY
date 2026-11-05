/* SSY guide – client behaviours for the static multi-page site */
(function () {
  'use strict';
  var root = document.documentElement;
  var body = document.body;
  var THEME_KEY = 'ssy-theme', LANG_KEY = 'ssy-lang';
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }

  /* ---- language preference ---- */
  var lang = root.getAttribute('data-lang') || 'te';
  var page = body.getAttribute('data-page');
  try {
    var pref = localStorage.getItem(LANG_KEY);
    if (page === 'index' && lang === 'te' && pref === 'en' && !sessionStorage.getItem('ssy-stay')) {
      location.replace('en/index.html'); return;
    }
  } catch (e) {}
  $$('.lang-toggle a').forEach(function (a) {
    a.addEventListener('click', function () {
      try { localStorage.setItem(LANG_KEY, a.getAttribute('data-lang')); sessionStorage.setItem('ssy-stay', '1'); } catch (e) {}
    });
  });

  /* ---- theme ---- */
  function isDark() {
    var t = root.getAttribute('data-theme');
    if (t) return t === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function setTheme(t) {
    root.setAttribute('data-theme', t);
    try { localStorage.setItem(THEME_KEY, t); } catch (e) {}
    var m = $('meta[name="theme-color"]'); if (m) m.setAttribute('content', t === 'dark' ? '#14130f' : '#fbf7f0');
  }
  var themeBtn = $('.theme-btn');
  if (themeBtn) themeBtn.addEventListener('click', function () { setTheme(isDark() ? 'light' : 'dark'); });

  /* ---- drawer menu ---- */
  var menuBtn = $('.menu-btn');
  function closeMenu() { body.classList.remove('menu-open'); if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false'); }
  if (menuBtn) menuBtn.addEventListener('click', function () {
    closeSearch();
    var open = body.classList.toggle('menu-open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  /* ---- top nav dropdowns (click for touch; hover handled in CSS) ---- */
  function closeDropdowns() {
    $$('.nav-dd.open').forEach(function (d) { d.classList.remove('open'); d.querySelector('.nav-dd-btn').setAttribute('aria-expanded', 'false'); });
  }
  $$('.nav-dd-btn').forEach(function (b) {
    b.addEventListener('click', function (e) {
      e.stopPropagation();
      var dd = b.parentNode, open = dd.classList.contains('open');
      closeDropdowns();
      if (!open) { dd.classList.add('open'); b.setAttribute('aria-expanded', 'true'); }
    });
  });
  document.addEventListener('click', closeDropdowns);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeMenu(); closeSearch(); closeDropdowns(); } });

  /* ---- scroll: progress, to-top, scrollspy ---- */
  var toTop = $('.to-top'), bar = $('.progress');
  function onScroll() {
    var y = window.scrollY;
    if (toTop) toTop.classList.toggle('show', y > 600);
    var h = root.scrollHeight - window.innerHeight;
    if (bar) bar.style.width = (h > 0 ? Math.min(100, (y / h) * 100) : 0) + '%';
  }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  if (toTop) toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

  var spyLinks = $$('.toc a[data-sec]');
  if (spyLinks.length && 'IntersectionObserver' in window) {
    var targets = spyLinks.map(function (a) { return document.getElementById(a.getAttribute('data-sec')); }).filter(Boolean);
    var current = null;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { current = en.target.id; } });
      if (current) spyLinks.forEach(function (a) { a.classList.toggle('active', a.getAttribute('data-sec') === current); });
    }, { rootMargin: '-15% 0px -75% 0px', threshold: 0 });
    targets.forEach(function (t) { io.observe(t); });
  }
  /* close drawer / mobile toc on in-page link */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]'); if (!a) return;
    closeMenu();
    var mt = e.target.closest('.mobile-toc'); if (mt) mt.removeAttribute('open');
  });

  /* ---- site search ---- */
  var panel = $('#search-panel'), input = $('#site-search'), results = $('#search-results'), searchBtn = $('.search-btn');
  var index = null, loading = false;
  function openSearch() { if (!panel) return; closeMenu(); panel.hidden = false; body.classList.add('search-open'); setTimeout(function () { input.focus(); }, 30); loadIndex(); }
  function closeSearch() { if (!panel) return; panel.hidden = true; body.classList.remove('search-open'); }
  if (searchBtn) searchBtn.addEventListener('click', function () { panel.hidden ? openSearch() : closeSearch(); });
  var sc = $('.search-close'); if (sc) sc.addEventListener('click', closeSearch);
  document.addEventListener('keydown', function (e) {
    var typing = document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA');
    if (!typing && (e.key === '/' || (e.key === 'k' && (e.ctrlKey || e.metaKey)))) { e.preventDefault(); openSearch(); }
  });
  function loadIndex() {
    if (index || loading || !input) return; loading = true;
    fetch(input.getAttribute('data-index')).then(function (r) { return r.json(); }).then(function (j) { index = j; loading = false; if (input.value) runSearch(); }).catch(function () { loading = false; });
  }
  function escHtml(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function escRe(s) { return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); }
  function snippet(text, terms) {
    var lower = text.toLowerCase(), pos = -1;
    for (var i = 0; i < terms.length; i++) { pos = lower.indexOf(terms[i]); if (pos >= 0) break; }
    var start = Math.max(0, pos - 60), end = Math.min(text.length, (pos < 0 ? 0 : pos) + 120);
    var s = (start > 0 ? '…' : '') + text.slice(start, end) + (end < text.length ? '…' : '');
    s = escHtml(s);
    terms.forEach(function (t) { if (!t) return; var re = new RegExp(escRe(t), 'gi'); s = s.replace(re, function (m) { return '<mark>' + m + '</mark>'; }); });
    return s;
  }
  function runSearch() {
    if (!results) return;
    var q = input.value.trim().toLowerCase();
    if (q.length < 2) { results.innerHTML = ''; return; }
    if (!index) { results.innerHTML = '<p class="search-msg">…</p>'; return; }
    var terms = q.split(/\s+/).filter(Boolean);
    var hits = [];
    index.forEach(function (e) {
      var hay = (e.p + ' ' + e.h + ' ' + e.t).toLowerCase();
      var score = 0;
      for (var i = 0; i < terms.length; i++) {
        if (hay.indexOf(terms[i]) < 0) { score = 0; break; }
        score += (e.h.toLowerCase().indexOf(terms[i]) >= 0 ? 3 : 0) + (e.p.toLowerCase().indexOf(terms[i]) >= 0 ? 2 : 0) + 1;
      }
      if (score) hits.push({ e: e, s: score });
    });
    hits.sort(function (a, b) { return b.s - a.s; });
    hits = hits.slice(0, 30);
    if (!hits.length) { results.innerHTML = '<p class="search-msg">' + escHtml(results.getAttribute('data-none') || 'No results') + '</p>'; return; }
    results.innerHTML = '<ul class="search-list">' + hits.map(function (h) {
      return '<li><a href="' + h.e.u + '"><span class="sp">' + escHtml(h.e.p) + (h.e.h ? ' › ' + escHtml(h.e.h) : '') + '</span><span class="ss">' + snippet(h.e.t, terms) + '</span></a></li>';
    }).join('') + '</ul>';
  }
  if (input) { input.addEventListener('input', runSearch); input.addEventListener('focus', loadIndex); }
  if (results) results.addEventListener('click', function (e) { if (e.target.closest('a')) closeSearch(); });

  /* ---- dictionary filter ---- */
  var dict = $('[data-dict]');
  if (dict) {
    var dInput = $('#dict-search'), dCount = $('[data-dict-count]'), dEmpty = $('.dict-empty', dict);
    var entries = $$('.gloss li', dict), groups = $$('.dict-group', dict);
    var total = entries.length;
    if (dCount) dCount.textContent = total;
    var filterDict = function () {
      var q = dInput.value.trim().toLowerCase();
      var shown = 0;
      entries.forEach(function (li) {
        var ok = !q || li.getAttribute('data-term').indexOf(q) >= 0 || li.textContent.toLowerCase().indexOf(q) >= 0;
        li.hidden = !ok; if (ok) shown++;
      });
      groups.forEach(function (g) { g.hidden = !$$('.gloss li', g).some(function (li) { return !li.hidden; }); });
      if (dCount) dCount.textContent = shown + (q ? ' / ' + total : '');
      if (dEmpty) dEmpty.hidden = shown > 0;
    };
    if (dInput) dInput.addEventListener('input', filterDict);
  }

  /* ---- deep-link into accordion ---- */
  function openHashTarget() {
    if (!location.hash) return;
    var t = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (!t) return;
    var d = t.closest('details'); if (d) d.open = true;
  }
  openHashTarget(); window.addEventListener('hashchange', openHashTarget);
})();
