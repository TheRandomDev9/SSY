# సిద్ధ సమాధి యోగ (SSY) – సంపూర్ణ మార్గదర్శి / Siddha Samadhi Yoga – The Complete Guide

A single-page, mobile-first guide to **Siddha Samadhi Yoga (SSY)**, the programme founded by
**Guruji Shri Rishi Prabhakar** and run by Rishi Samskruti Vidya Kendra (RSVK).
Telugu is the primary language, with a full English mirror.

**Live site:** https://therandomdev9.github.io/SSY/

## What is covered (16 sections)

1. What is SSY – meaning of the name, who it is for, key facts
2. The founder – biography, timeline, titles, family, legacy
3. Philosophy and core principles – non-doing, "Yoga starts with Samadhi", pancha kosha shuddhi, responsibility
4. The basic course – formats over time, timings, fees, a typical session, all 14 sessions, course rules
5. Practices – pranayama, Samadhi meditation, silence, shatkriyas, games and processes
6. Diet – Amrut Ahar, pranic food classification, course food rules
7. Phases – SSY → AMC → BST‑1/2 → TTC (4 phases), special camps, a typical journey
8. Benefits – at five levels, published research, testimonials, precautions
9. Daily sadhana after the course
10. Children and education – ISP, Children's SSY, 100% Memory, Rishi Gurukulam, ILRD
11. The organisation – RSVK, ashrams, centres, seva projects
12. Annual events
13. Books and publications
14. FAQ – including criticism and precautions
15. Glossary
16. Resources and how to join a course

## Features

- **Telugu / English switch** in the header (choice remembered in the browser)
- **Light / dark theme** toggle (follows the system setting by default, choice remembered)
- Mobile-first responsive layout, sticky table of contents on desktop, slide-down menu on phones
- Reading progress bar, scroll-spy, deep links to every section, print styles
- No build step, no framework – plain HTML, CSS and JavaScript

## Project structure

```
index.html              page shell
assets/css/style.css    styles, theme tokens (light/dark)
assets/js/app.js        renderer, language and theme switching, navigation
assets/js/content.te.js Telugu content (primary)
assets/js/content.en.js English content (mirror)
assets/img/favicon.svg  icon
.github/workflows/pages.yml  publishes the site to the gh-pages branch on every push to main
```

Content is data: each language file exports an object with `hero`, `sections[]` (blocks of type
`p`, `h3`, `ul`, `cards`, `timeline`, `steps`, `ladder`, `accordion`, `table`, `kv`, `glossary`,
`quote`, `note`, `chips`) and `footer`. To edit the site, edit the content files.

## Running locally

```
python3 -m http.server 8000
# open http://localhost:8000/
```

## Deployment

Pushing to `main` runs the GitHub Actions workflow, which copies the site into the `gh-pages`
branch. GitHub Pages serves that branch (Settings → Pages → Source: "Deploy from a branch",
branch `gh-pages`, folder `/ (root)`).

## Disclaimer

This is an independent, unofficial information project and is not affiliated with RSVK or any
SSY organisation. Course details change over time; consult the official sites
(rsvk.org, ssy.life, rpif.org.in). Take medical advice before starting any practice.
