# సిద్ధ సమాధి యోగ (SSY) – సంపూర్ణ మార్గదర్శి & నిఘంటువు / Siddha Samadhi Yoga – The Complete Guide & Dictionary

An encyclopedic, mobile-first website about **Siddha Samadhi Yoga (SSY)**, the programme founded by
**Guruji Shri Rishi Prabhakar** and run by Rishi Samskruti Vidya Kendra (RSVK).
Telugu is the primary language (site root); English is a full mirror under `/en/`.

**Live site:** https://therandomdev9.github.io/SSY/ · English: https://therandomdev9.github.io/SSY/en/

## What is covered (30 pages)

| Group | Pages |
|---|---|
| About SSY | Home (hub), What is SSY, Philosophy, Rishi Vani (Guruji's sayings by theme), Benefits & research, FAQ |
| Guruji & history | Guruji's biography, History timeline 1948–2026, Books, Publications list (all 51 audio cassettes, 13 books and 17 bhajan albums from rsvk.org/publications, with references), Contents (what is inside each book, talk and bhajan album – summaries, short quotes, read/listen links, and the public-domain prayers in full), Media library (books, 51 audio talks, bhajans, videos, apps, research papers) |
| Student path | Student path overview, Basic course (14 sessions), AMC silence retreat, BST 1 & 2, Practices, Diet, Daily sadhana, Phases |
| Teacher path | TTC Phases 1 → 2A → 2B → 3 → 4 with the official requirements of each phase |
| Programmes & organisation | Complete programme catalogue, Children & education, RSVK & ashrams, Centres directory, Annual events, Joining a course, Sources |
| Dictionary | Searchable A–Z dictionary (177 entries), course glossary |

## Features

- Telugu / English switch on every page (stays on the same page; choice remembered)
- Light / dark theme (follows the system by default; choice remembered)
- Full-text site search (header 🔍, or press `/`) and a live-filter A–Z dictionary
- Grouped navigation: dropdowns on desktop, side navigation, slide-down menu on phones, "on this page" contents, previous/next links
- Mobile-first layout, safe-area aware, no horizontal scroll; sitemap.xml and per-page SEO metadata

## Project structure

```
build.js                     static site generator: content → dist/ (te at root, en under /en/)
lib/render.js                block renderer (p, h2, h3, ul, ol, cards, table, kv, steps, ladder,
                             timeline, accordion, glossary, dictionary, quote, note, chips, links)
lib/home.js                  builds the home page's section index from the navigation
content/<lang>/site.js       navigation, UI strings, footer
content/<lang>/pages/*.js    one module per page: { id, title, short, lead, blocks: [...] }
content/parts/*.js           shared bilingual sections (books, talks, bhajans) used by the contents page
assets/css/style.css         styles and light/dark tokens
assets/js/site.js            theme, menus, search, dictionary filter, scroll-spy
tools/parity.js              checks that a Telugu page and its English mirror have the same structure
.github/workflows/pages.yml  builds and deploys to GitHub Pages on every push to main
```

## Editing

1. Edit `content/te/pages/<page>.js` and its mirror `content/en/pages/<page>.js`.
2. `node tools/parity.js <page>` – confirms both languages have the same blocks, items and links.
3. `node build.js` and preview with `python3 -m http.server 8000 --directory dist`.
4. Push to `main`; GitHub Actions deploys (Settings → Pages → Source: **GitHub Actions**).

## Disclaimer

An independent, unofficial, non-commercial information project; not affiliated with RSVK or any SSY organisation.
Course details change over time – consult the official sites (rsvk.org, ssy.life, rpif.org.in).
Take medical advice before starting any practice.
