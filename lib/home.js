/* Builds the "all sections" part of the home page from the site navigation, so it never drifts. */
'use strict';
const fs = require('fs');
const path = require('path');
const ICON = { intro: '🧘', philosophy: '🕉️', teachings: '📜', benefits: '🌿', faq: '❓', guruji: '🙏', history: '🗓️', books: '📚', media: '🎧', student: '🧭', course: '🪷', amc: '🤫', bst: '❤️', techniques: '🌬️', diet: '🥗', sadhana: '🌅', phases: '🪜', teacher: '🧑‍🏫', programs: '📋', children: '🧒', rsvk: '🏛️', centres: '📍', events: '🎉', resources: '🔗', sources: '📑', dictionary: '🔤', glossary: '📖' };
function plain(s) { return String(s || '').replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\s+/g, ' ').trim(); }
function clip(s, n) { s = plain(s); return s.length > n ? s.slice(0, n).replace(/\s+\S*$/, '') + '…' : s; }
module.exports = function sectionBlocks(lang) {
  const site = require(path.join(__dirname, '..', 'content', lang, 'site.js'));
  const dir = path.join(__dirname, '..', 'content', lang, 'pages');
  const blocks = [];
  for (const g of site.nav) {
    const items = g.items.filter(id => id !== 'index' && fs.existsSync(path.join(dir, id + '.js'))).map(id => {
      const p = require(path.join(dir, id + '.js'));
      return { icon: ICON[id] || '📄', title: p.short || p.title, text: clip(p.lead, 150), href: id + '.html' };
    });
    if (!items.length) continue;
    blocks.push({ type: 'h3', text: g.title });
    blocks.push({ type: 'cards', cols: 3, items });
  }
  return blocks;
};
