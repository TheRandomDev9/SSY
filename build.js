#!/usr/bin/env node
/* Static site builder: content/<lang>/site.js + content/<lang>/pages/*.js  ->  dist/ (te at root, en under /en/) */
'use strict';
const fs = require('fs');
const path = require('path');
const { esc, md, renderBlocks, tocOf, textOf } = require('./lib/render.js');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');
const LANGS = [
  { code: 'te', dir: '', base: './', htmlLang: 'te' },
  { code: 'en', dir: 'en', base: '../', htmlLang: 'en' }
];
const SITE_URL = 'https://therandomdev9.github.io/SSY/';
const BUILD_DATE = new Date().toISOString().slice(0, 10);

function rmrf(p) { fs.rmSync(p, { recursive: true, force: true }); }
function mkdirp(p) { fs.mkdirSync(p, { recursive: true }); }
function copyDir(src, dst) {
  mkdirp(dst);
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, e.name), d = path.join(dst, e.name);
    e.isDirectory() ? copyDir(s, d) : fs.copyFileSync(s, d);
  }
}
function loadLang(code) {
  const site = require(path.join(ROOT, 'content', code, 'site.js'));
  const pagesDir = path.join(ROOT, 'content', code, 'pages');
  const pages = {};
  for (const f of fs.readdirSync(pagesDir).filter(f => f.endsWith('.js'))) {
    const p = require(path.join(pagesDir, f));
    pages[p.id] = p;
  }
  return { site, pages };
}

/* ---------- templates ---------- */
const ICONS = {
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  burger: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>',
  up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>'
};

function navHtml(site, pages, current, cls) {
  return `<ul class="${cls}">` + site.nav.map(g => {
    const items = g.items.map(id => {
      const p = pages[id]; if (!p) return '';
      const href = id === 'index' ? 'index.html' : id + '.html';
      return `<li><a href="${href}"${id === current ? ' class="active" aria-current="page"' : ''}>${esc(p.short || p.title)}</a></li>`;
    }).join('');
    return `<li class="nav-group"><span class="nav-group-title">${esc(g.title)}</span><ul>${items}</ul></li>`;
  }).join('') + '</ul>';
}

function orderedIds(site) { return site.nav.flatMap(g => g.items); }

function pageHtml(lang, site, pages, page) {
  const base = lang.base;
  const ids = orderedIds(site);
  const idx = ids.indexOf(page.id);
  const prev = idx > 0 ? pages[ids[idx - 1]] : null;
  const next = idx >= 0 && idx < ids.length - 1 ? pages[ids[idx + 1]] : null;
  const href = id => (id === 'index' ? 'index.html' : id + '.html');
  const other = LANGS.find(l => l.code !== lang.code);
  const otherHref = (lang.code === 'te' ? 'en/' : '../') + href(page.id);
  const toc = page.hero ? [] : tocOf(page.blocks);
  const title = page.id === 'index' ? site.meta.title : `${page.title} | ${site.meta.siteName}`;
  const desc = page.description || page.lead || site.meta.description;
  const canonical = SITE_URL + (lang.dir ? lang.dir + '/' : '') + href(page.id);
  const ui = site.ui;
  const grp = site.nav.find(g => g.items.includes(page.id));
  page.group = page.group || (grp ? grp.title : '');

  const hero = page.hero ? `
  <div class="hero"><div class="hero-inner">
    <span class="hero-kicker">${md(page.hero.kicker)}</span>
    <h1>${md(page.hero.title)}${page.hero.titleAlt ? `<span class="en">${md(page.hero.titleAlt)}</span>` : ''}</h1>
    <p class="hero-sub">${md(page.hero.subtitle)}</p>
    <div class="hero-cta"><a class="btn btn-primary" href="${esc(page.hero.primary.href)}">${md(page.hero.primary.label)}</a><a class="btn btn-ghost" href="${esc(page.hero.secondary.href)}">${md(page.hero.secondary.label)}</a></div>
    ${page.hero.stats ? `<div class="stats">${page.hero.stats.map(s => `<div class="stat"><div class="v">${esc(s.value)}</div><div class="l">${md(s.label)}</div></div>`).join('')}</div>` : ''}
  </div></div>` : '';

  const pageHead = page.hero ? '' : `
      <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">${esc(ui.home)}</a> <span aria-hidden="true">›</span> <span>${esc(page.group || '')}</span></nav>
      <h1 class="page-title">${md(page.title)}</h1>
      ${page.lead ? `<p class="lead">${md(page.lead)}</p>` : ''}
      ${toc.length > 2 ? `<details class="mobile-toc page-toc"><summary><span aria-hidden="true">☰</span> ${esc(ui.onThisPage)} <span class="cnt">(${toc.length})</span></summary><ol>${toc.map((t, i) => `<li><a href="#${t.id}"><span class="n">${i + 1}</span><span>${md(t.text)}</span></a></li>`).join('')}</ol></details>` : ''}`;

  const sideToc = toc.length > 2 ? `<aside class="toc" aria-label="${esc(ui.onThisPage)}"><p class="toc-title">${esc(ui.onThisPage)}</p><ol>${toc.map((t, i) => `<li><a href="#${t.id}" data-sec="${t.id}"><span class="n">${i + 1}</span><span>${md(t.text)}</span></a></li>`).join('')}</ol></aside>` : '<aside class="toc toc-empty" aria-hidden="true"></aside>';

  const pager = (prev || next) ? `<nav class="pager" aria-label="${esc(ui.pager)}">
      ${prev ? `<a class="pager-prev" href="${href(prev.id)}"><span class="pl">← ${esc(ui.prev)}</span><span class="pt">${esc(prev.short || prev.title)}</span></a>` : '<span></span>'}
      ${next ? `<a class="pager-next" href="${href(next.id)}"><span class="pl">${esc(ui.next)} →</span><span class="pt">${esc(next.short || next.title)}</span></a>` : ''}
    </nav>` : '';

  return `<!doctype html>
<html lang="${lang.htmlLang}" data-lang="${lang.code}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(desc).slice(0, 300)}">
  <meta name="theme-color" content="#fbf7f0">
  <link rel="canonical" href="${canonical}">
  ${LANGS.map(l => `<link rel="alternate" hreflang="${l.htmlLang}" href="${SITE_URL}${l.dir ? l.dir + '/' : ''}${href(page.id)}">`).join('\n  ')}
  <meta property="og:type" content="website">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(desc).slice(0, 200)}">
  <meta property="og:url" content="${canonical}">
  <link rel="icon" href="${base}assets/img/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+Telugu:wght@400;500;600;700&family=Noto+Serif+Telugu:wght@600;700&display=swap">
  <link rel="stylesheet" href="${base}assets/css/style.css?v=${BUILD_DATE}">
  <script>(function(){try{var t=localStorage.getItem('ssy-theme');if(t)document.documentElement.setAttribute('data-theme',t);}catch(e){}})();</script>
</head>
<body data-page="${esc(page.id)}" data-base="${base}">
  <a class="skip-link" href="#main">${esc(ui.skip)}</a>
  <div class="progress" aria-hidden="true"></div>
  <header class="site-header">
    <div class="header-inner">
      <a class="brand" href="index.html">
        <span class="brand-mark" aria-hidden="true">SSY</span>
        <span class="brand-text"><span class="brand-title">${esc(ui.brand)}</span><span class="brand-sub">${esc(ui.brandSub)}</span></span>
      </a>
      <nav class="top-nav" aria-label="${esc(ui.menu)}">${site.nav.map(g => `<div class="nav-dd"><button type="button" class="nav-dd-btn" aria-expanded="false">${esc(g.title)} <span class="caret" aria-hidden="true">▾</span></button><ul class="nav-dd-menu">${g.items.map(id => pages[id] ? `<li><a href="${href(id)}"${id === page.id ? ' class="active"' : ''}>${esc(pages[id].short || pages[id].title)}</a></li>` : '').join('')}</ul></div>`).join('')}</nav>
      <div class="controls">
        <button type="button" class="icon-btn search-btn" aria-label="${esc(ui.search)}" title="${esc(ui.search)}">${ICONS.search}</button>
        <div class="lang-toggle" role="group" aria-label="Language / భాష">
          <a href="${lang.code === 'te' ? href(page.id) : otherHref}" lang="te" data-lang="te"${lang.code === 'te' ? ' class="on" aria-current="true"' : ''}>తెలుగు</a>
          <a href="${lang.code === 'en' ? href(page.id) : otherHref}" lang="en" data-lang="en"${lang.code === 'en' ? ' class="on" aria-current="true"' : ''}>English</a>
        </div>
        <button type="button" class="icon-btn theme-btn" aria-label="${esc(ui.theme)}" title="${esc(ui.theme)}"><span class="moon">${ICONS.moon}</span><span class="sun">${ICONS.sun}</span></button>
        <button type="button" class="icon-btn menu-btn" aria-label="${esc(ui.menu)}" aria-expanded="false" aria-controls="drawer"><span class="burger">${ICONS.burger}</span><span class="x">${ICONS.x}</span></button>
      </div>
    </div>
  </header>
  <nav class="drawer" id="drawer" aria-label="${esc(ui.menu)}">${navHtml(site, pages, page.id, 'drawer-nav')}</nav>
  <div class="search-panel" id="search-panel" hidden>
    <div class="search-inner">
      <input type="search" id="site-search" placeholder="${esc(ui.searchPlaceholder)}" aria-label="${esc(ui.search)}" autocomplete="off" data-index="${base}search-${lang.code}.json">
      <button type="button" class="icon-btn search-close" aria-label="${esc(ui.close)}">${ICONS.x}</button>
    </div>
    <div class="search-results" id="search-results" aria-live="polite"></div>
  </div>
  <main id="main">
    ${hero}
    <div class="layout${page.hero ? ' layout-home' : ''}">
      <aside class="sidenav" aria-label="${esc(ui.menu)}">${navHtml(site, pages, page.id, 'side-nav')}</aside>
      <article class="content">${pageHead}
        ${renderBlocks(page.blocks)}
        ${pager}
        <p class="updated">${esc(ui.updated)}: ${BUILD_DATE}</p>
      </article>
      ${sideToc}
    </div>
  </main>
  <footer class="site-footer"><div class="footer-inner">
    <div><h4>${md(site.footer.aboutTitle)}</h4><p>${md(site.footer.about)}</p><p>${md(site.footer.disclaimer)}</p></div>
    <div><h4>${md(site.footer.linksTitle)}</h4><ul>${site.footer.links.map(l => `<li><a href="${esc(l.href)}" target="_blank" rel="noopener noreferrer">${md(l.label)}</a></li>`).join('')}</ul></div>
    <div><h4>${md(site.footer.quickTitle)}</h4><ul>${site.footer.quick.map(id => pages[id] ? `<li><a href="${href(id)}">${esc(pages[id].short || pages[id].title)}</a></li>` : '').join('')}</ul></div>
    <div class="footer-bottom">${md(site.footer.credit)}</div>
  </div></footer>
  <button type="button" class="to-top" aria-label="${esc(ui.backToTop)}">${ICONS.up}</button>
  <script src="${base}assets/js/site.js?v=${BUILD_DATE}"></script>
</body>
</html>`;
}

/* ---------- build ---------- */
rmrf(DIST); mkdirp(DIST);
copyDir(path.join(ROOT, 'assets'), path.join(DIST, 'assets'));
fs.writeFileSync(path.join(DIST, '.nojekyll'), '');
const sitemap = [];
for (const lang of LANGS) {
  const { site, pages } = loadLang(lang.code);
  const outDir = path.join(DIST, lang.dir); mkdirp(outDir);
  const searchIndex = [];
  for (const id of Object.keys(pages)) {
    const page = pages[id];
    const html = pageHtml(lang, site, pages, page);
    const file = id === 'index' ? 'index.html' : id + '.html';
    fs.writeFileSync(path.join(outDir, file), html);
    sitemap.push(SITE_URL + (lang.dir ? lang.dir + '/' : '') + file);
    /* search index: one entry per heading section */
    let cur = { h: '', id: '', blocks: [] };
    const sections = [cur];
    (page.blocks || []).forEach((b, i) => {
      if (b.type === 'h2' || b.type === 'h3') { cur = { h: b.text, id: b.id || null, n: null, blocks: [] }; sections.push(cur); }
      cur.blocks.push(b);
    });
    /* recompute ids same as renderer */
    let n = 0;
    sections.forEach(s => { if (s.h) { n++; s.id = s.id || ('s-' + n); } });
    sections.forEach(s => {
      const text = textOf(s.blocks);
      if (!text) return;
      searchIndex.push({ p: page.short || page.title, h: s.h, u: file + (s.id ? '#' + s.id : ''), t: text.slice(0, 4000) });
    });
    if (page.lead) searchIndex.push({ p: page.short || page.title, h: '', u: file, t: page.lead });
  }
  fs.writeFileSync(path.join(outDir, `search-${lang.code}.json`), JSON.stringify(searchIndex));
  if (lang.code === 'te') {
    fs.writeFileSync(path.join(DIST, '404.html'), pageHtml(lang, site, pages, { id: '404', title: site.ui.notFoundTitle, short: site.ui.notFoundTitle, group: '', lead: site.ui.notFoundText, blocks: [{ type: 'p', text: `[${site.ui.home}](index.html)` }] }).replace(/href="(?!https?:|#|\.\.)/g, `href="${SITE_URL}`).replace(/src="(?!https?:)/g, `src="${SITE_URL}`).replace(/data-index="\.\//, `data-index="${SITE_URL}`));
  }
  console.log(`[${lang.code}] ${Object.keys(pages).length} pages, ${searchIndex.length} search entries`);
}
fs.writeFileSync(path.join(DIST, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap.map(u => `  <url><loc>${u}</loc><lastmod>${BUILD_DATE}</lastmod></url>`).join('\n')}\n</urlset>\n`);
fs.writeFileSync(path.join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}sitemap.xml\n`);
console.log('built', DIST);
