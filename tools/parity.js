#!/usr/bin/env node
/* Structural parity check between Telugu and English page modules.
   Usage: node tools/parity.js <pageId> [<pageId> ...]   (run from repo root)
   Exits 1 and prints the first differences when the structures differ. */
'use strict';
const path = require('path');
const KEEP = new Set(['type', 'id', 'href', 'key', 'letter', 'kind', 'cols', 'n']);
function links(s) { return (String(s).match(/\]\(([^)\s]+)\)/g) || []).map(m => m.slice(2, -1)); }
function sig(v, key) {
  if (Array.isArray(v)) return v.map(x => sig(x));
  if (v && typeof v === 'object') { const o = {}; for (const k of Object.keys(v).sort()) o[k] = sig(v[k], k); return o; }
  if (typeof v === 'string') return KEEP.has(key) ? v : { links: links(v) };
  return v;
}
function diff(a, b, p, out) {
  if (out.length > 12) return;
  const ta = Array.isArray(a) ? 'array' : typeof a, tb = Array.isArray(b) ? 'array' : typeof b;
  if (ta !== tb) { out.push(`${p}: te=${ta} en=${tb}`); return; }
  if (ta === 'array') { if (a.length !== b.length) out.push(`${p}: length te=${a.length} en=${b.length}`); for (let i = 0; i < Math.min(a.length, b.length); i++) diff(a[i], b[i], `${p}[${i}]`, out); return; }
  if (ta === 'object' && a) { const ks = new Set([...Object.keys(a), ...Object.keys(b)]); for (const k of ks) { if (!(k in a) || !(k in b)) { out.push(`${p}.${k}: missing in ${k in a ? 'en' : 'te'}`); continue; } diff(a[k], b[k], `${p}.${k}`, out); } return; }
  if (JSON.stringify(a) !== JSON.stringify(b)) out.push(`${p}: te=${JSON.stringify(a)} en=${JSON.stringify(b)}`);
}
let bad = 0;
for (const id of process.argv.slice(2)) {
  const te = require(path.resolve('content/te/pages', id + '.js'));
  let en; try { en = require(path.resolve('content/en/pages', id + '.js')); } catch (e) { console.log(`${id}: EN MISSING or BROKEN – ${e.message.split('\n')[0]}`); bad++; continue; }
  const out = []; diff(sig({ id: te.id, blocks: te.blocks }), sig({ id: en.id, blocks: en.blocks }), id, out);
  if (!en.title || !en.short || !('lead' in en)) out.push(`${id}: en needs title, short and lead`);
  const telugu = JSON.stringify(en).match(/[ఀ-౿]+/g);
  if (telugu && telugu.length > 40) out.push(`${id}: en still contains ${telugu.length} Telugu-script runs (some are fine, e.g. a Telugu term in parentheses)`);
  if (out.length) { bad++; console.log(`${id}: DIFFERS\n  ` + out.join('\n  ')); } else console.log(`${id}: OK`);
}
process.exit(bad ? 1 : 0);
