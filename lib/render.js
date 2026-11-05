/* Shared block renderer – used by build.js (Node). Content is trusted (authored in this repo). */
'use strict';

function esc(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
/* inline markup: **bold**, *italic*, `code`, [text](href) */
function md(s) {
  let out = esc(s);
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  out = out.replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, '$1<em>$2</em>');
  out = out.replace(/`([^`]+)`/g, '<code>$1</code>');
  out = out.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, t, h) => {
    const ext = /^https?:\/\//.test(h);
    return `<a href="${h}"${ext ? ' target="_blank" rel="noopener noreferrer"' : ''}>${t}</a>`;
  });
  return out;
}
function list(items, tag) {
  tag = tag || 'ul';
  return `<${tag}>` + items.map(i => {
    if (typeof i === 'string') return `<li>${md(i)}</li>`;
    return `<li>${md(i.text)}${i.items ? list(i.items, i.ordered ? 'ol' : 'ul') : ''}</li>`;
  }).join('') + `</${tag}>`;
}
function slug(s, i) { return 's-' + (i + 1); }

const R = {
  p: b => `<p>${md(b.text)}</p>`,
  h2: (b, ctx) => `<h2 id="${b.id || ctx.hid()}" class="in-h2">${md(b.text)}</h2>`,
  h3: (b, ctx) => `<h3 id="${b.id || ctx.hid()}">${md(b.text)}</h3>`,
  h4: b => `<h4>${md(b.text)}</h4>`,
  ul: b => list(b.items, 'ul'),
  ol: b => list(b.items, 'ol'),
  quote: b => `<blockquote class="quote"><p>${md(b.text)}</p>${b.by ? `<cite>— ${md(b.by)}</cite>` : ''}</blockquote>`,
  note: b => {
    const kind = b.kind || 'info';
    const icon = { info: 'ℹ️', tip: '✅', warn: '⚠️' }[kind] || 'ℹ️';
    return `<div class="note note-${kind}"><span class="ic" aria-hidden="true">${icon}</span><div>${b.title ? `<p><strong>${md(b.title)}</strong></p>` : ''}<p>${md(b.text)}</p></div></div>`;
  },
  chips: b => `<div class="chips">${b.items.map(c => `<span class="chip">${md(c)}</span>`).join('')}</div>`,
  cards: b => `<div class="cards${b.cols === 3 ? ' three' : ''}">` + b.items.map(c =>
    `<div class="card">${c.icon ? `<div class="ic" aria-hidden="true">${c.icon}</div>` : ''}<h4>${c.href ? `<a href="${esc(c.href)}">${md(c.title)}</a>` : md(c.title)}</h4>${c.text ? `<p>${md(c.text)}</p>` : ''}${c.items ? list(c.items) : ''}</div>`
  ).join('') + '</div>',
  timeline: b => `<ol class="timeline">` + b.items.map(t =>
    `<li><span class="y">${esc(t.year)}</span><span class="t">${md(t.title)}</span>${t.text ? `<p>${md(t.text)}</p>` : ''}${t.items ? list(t.items) : ''}</li>`
  ).join('') + '</ol>',
  steps: b => `<ol class="steps">` + b.items.map(s =>
    `<li><div>${s.meta ? `<span class="m">${md(s.meta)}</span>` : ''}<span class="t">${md(s.title)}</span>${s.text ? `<p>${md(s.text)}</p>` : ''}${s.items ? list(s.items) : ''}</div></li>`
  ).join('') + '</ol>',
  ladder: b => `<ol class="ladder">` + b.items.map((s, i) =>
    `<li><span class="dot" aria-hidden="true">${s.n || (i + 1)}</span><div class="box"><span class="t">${s.href ? `<a href="${esc(s.href)}">${md(s.title)}</a>` : md(s.title)}</span>${s.meta ? ` <span class="m">· ${md(s.meta)}</span>` : ''}${s.text ? `<p>${md(s.text)}</p>` : ''}${s.items ? list(s.items) : ''}</div></li>`
  ).join('') + '</ol>',
  accordion: b => b.items.map(a => {
    const body = Array.isArray(a.a) ? a.a.map(p => `<p>${md(p)}</p>`).join('') : `<p>${md(a.a)}</p>`;
    return `<details class="acc"${a.open ? ' open' : ''}><summary>${md(a.q)}</summary><div class="body">${body}${a.items ? list(a.items) : ''}</div></details>`;
  }).join(''),
  table: b => `<div class="table-wrap"><table${b.compact ? ' class="compact"' : ''}>` +
    (b.head ? `<thead><tr>${b.head.map(h => `<th>${md(h)}</th>`).join('')}</tr></thead>` : '') +
    `<tbody>${b.rows.map(r => `<tr>${r.map(c => `<td>${md(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`,
  kv: b => `<div class="kv">${b.items.map(i => `<div><span class="k">${md(i[0])}</span><span>${md(i[1])}</span></div>`).join('')}</div>`,
  glossary: b => `<ul class="gloss">${b.items.map(g =>
    `<li data-term="${esc((g.term + ' ' + (g.sa || '') + ' ' + (g.alt || '')).toLowerCase())}"${g.id ? ` id="${esc(g.id)}"` : ''}><dfn>${md(g.term)}</dfn>${g.sa ? `<span class="sa">${esc(g.sa)}</span>` : ''} — ${md(g.def)}${g.see ? ` <span class="see">→ ${md(g.see)}</span>` : ''}</li>`
  ).join('')}</ul>`,
  dictionary: b => {
    /* alphabetical groups: items [{letter, entries:[{term,sa,def,see,id}]}] */
    return `<div class="dict" data-dict>` +
      `<div class="dict-tools"><input type="search" class="dict-search" id="dict-search" placeholder="${esc(b.placeholder || 'Search…')}" aria-label="${esc(b.placeholder || 'Search')}"><span class="dict-count" data-dict-count></span></div>` +
      `<nav class="dict-letters" aria-label="Index">${b.groups.map(g => `<a href="#dict-${esc(g.key)}">${esc(g.letter)}</a>`).join('')}</nav>` +
      b.groups.map(g => `<section class="dict-group" id="dict-${esc(g.key)}"><h3 class="dict-letter">${esc(g.letter)}</h3>${R.glossary({ items: g.entries })}</section>`).join('') +
      `<p class="dict-empty" hidden>${esc(b.empty || 'No matches')}</p></div>`;
  },
  figure: b => `<figure class="figure">${b.svg || ''}${b.caption ? `<figcaption>${md(b.caption)}</figcaption>` : ''}</figure>`,
  links: b => `<ul class="linklist">${b.items.map(l => `<li><a href="${esc(l.href)}"${/^https?:/.test(l.href) ? ' target="_blank" rel="noopener noreferrer"' : ''}>${md(l.label)}</a>${l.text ? ` — ${md(l.text)}` : ''}</li>`).join('')}</ul>`,
  hr: () => '<hr>',
  verse: b => `<figure class="verse">${b.title ? `<figcaption class="verse-title">${md(b.title)}</figcaption>` : ''}${(b.scripts || []).map(sc => `<div class="verse-block"${sc.lang ? ` lang="${esc(sc.lang)}"` : ''}>${sc.label ? `<span class="verse-label">${esc(sc.label)}</span>` : ''}${sc.lines.map(l => `<p>${md(l)}</p>`).join('')}</div>`).join('')}${b.meaning ? `<div class="verse-meaning"><p>${md(b.meaning)}</p></div>` : ''}${b.source ? `<p class="verse-source">${md(b.source)}</p>` : ''}</figure>`,
  html: b => b.html
};

function renderBlocks(blocks, ctx) {
  ctx = ctx || { n: 0, hid() { return 's-' + (++this.n); } };
  return (blocks || []).map(b => { const fn = R[b.type]; return fn ? fn(b, ctx) : ''; }).join('');
}
/* in-page TOC from h2/h3 blocks (ids must match renderBlocks numbering) */
function tocOf(blocks) {
  let n = 0; const out = [];
  (blocks || []).forEach(b => {
    if (b.type === 'h2' || b.type === 'h3') { n++; out.push({ id: b.id || ('s-' + n), text: b.text, level: b.type }); }
  });
  const hasH2 = out.some(o => o.level === 'h2');
  return hasH2 ? out.filter(o => o.level === 'h2') : out;
}
/* plain text for search index */
function textOf(blocks) {
  const html = renderBlocks(blocks);
  return html.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();
}

module.exports = { esc, md, renderBlocks, tocOf, textOf, R };
