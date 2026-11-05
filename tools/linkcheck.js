#!/usr/bin/env node
/* Checks every internal href/src in dist/*.html resolves to a file (and #anchors to an id). */
'use strict';
const fs = require('fs'), path = require('path');
const DIST = path.join(__dirname, '..', 'dist');
const files = []; (function walk(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); e.isDirectory() ? walk(p) : p.endsWith('.html') && files.push(p); } })(DIST);
const ids = {}; for (const f of files) ids[f] = new Set([...fs.readFileSync(f, 'utf8').matchAll(/\sid="([^"]+)"/g)].map(m => m[1]));
let bad = 0, checked = 0;
for (const f of files) {
  if (f.endsWith('404.html')) continue;
  const html = fs.readFileSync(f, 'utf8');
  for (const m of html.matchAll(/\s(?:href|src|data-index)="([^"]+)"/g)) {
    const u = m[1];
    if (/^(https?:|mailto:|tel:|data:|\/\/)/.test(u)) continue;
    checked++;
    const [p, hash] = u.split('#');
    const target = p ? path.resolve(path.dirname(f), p.split('?')[0]) : f;
    if (!fs.existsSync(target)) { bad++; console.log(`MISSING  ${path.relative(DIST, f)} -> ${u}`); continue; }
    if (hash && target.endsWith('.html') && !(ids[target] || new Set()).has(decodeURIComponent(hash))) { bad++; console.log(`NO-ANCHOR ${path.relative(DIST, f)} -> ${u}`); }
  }
}
console.log(`${files.length} pages, ${checked} internal links checked, ${bad} broken`);
process.exit(bad ? 1 : 0);
