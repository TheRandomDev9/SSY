/* home – hub page */
const sections = require('../../../lib/home.js');
module.exports = {
  id: 'index',
  title: 'Home',
  short: 'Home',
  lead: 'Siddha Samadhi Yoga (SSY) from 0 to 100 – the student path, the teacher path, an A–Z dictionary, Guruji\'s sayings, history, media and centres.',
  hero: {
    kicker: 'A single point of entry for SSY – from 0 to 100',
    title: 'Siddha Samadhi Yoga (SSY)',
    titleAlt: 'సిద్ధ సమాధి యోగ – the path of Samadhi given by Guruji Shri Rishi Prabhakar: the complete guide & dictionary',
    subtitle: 'What SSY is, who Guruji was, every phase from the basic course through AMC, BST and the five steps of Teacher Training (TTC), the practices, the diet, the benefits, the research, 51 audio talks, videos, centres and a 177-entry dictionary – all in one place, in detail.',
    primary: { label: 'The student path →', href: 'student.html' },
    secondary: { label: 'The teacher path →', href: 'teacher.html' },
    stats: [
      { value: '1948', label: 'Guruji born – Chikkaballapur / Bengaluru (Krishna Janmashtami)' },
      { value: '1982', label: 'Rishi Samskruti Vidya Kendra (RSVK) trust – Bengaluru, 18 February' },
      { value: '1 million+', label: 'People who had done SSY worldwide by 2007 (organisation\'s figure)' },
      { value: '177', label: 'SSY terms, names and abbreviations in this site\'s dictionary' }
    ]
  },
  blocks: [
    { type: 'h2', text: 'Two paths – which one is yours?' },
    { type: 'cards', items: [
      { icon: '🧭', title: 'The student (sadhaka)', href: 'student.html', text: 'Hearing about SSY for the first time, done the course, or has your practice stopped? Intro talk → the 14-session basic course → the AMC silence retreat → daily sadhana → BST-1, BST-2 → seva. Eligibility, duration, frequency and venue for every step.' },
      { icon: '🧑‍🏫', title: 'The teacher (Acharya)', href: 'teacher.html', text: 'Want to become an SSY teacher? Teachers Training Course (TTC) Phases 1 → 2A → 2B → 3 → 4 – the official requirements of each phase, the oath, commune living, the padayatra, Nobody sadhana and how to run a batch.' }
    ] },

    { type: 'h2', text: 'Start here – a reading order' },
    { type: 'steps', items: [
      { meta: '5 minutes', title: '[What is SSY?](intro.html)', text: 'The meaning of the name, "non-doing", who it is for, key facts.' },
      { meta: '10 minutes', title: '[Guruji Shri Rishi Prabhakar](guruji.html)', text: 'From engineer to Yoga Brahma – life, gurus, family, legacy. The full timeline: [History](history.html).' },
      { meta: '15 minutes', title: '[The basic course](course.html) → [AMC](amc.html)', text: 'The 14 session themes, what a session looks like, the rules, then the silence retreat.' },
      { meta: '10 minutes', title: '[Practices](techniques.html) & [Diet](diet.html)', text: 'Pranayama, Samadhi meditation, silence; Amrut Ahar and the pranic classification of food.' },
      { meta: 'For life', title: '[Daily sadhana](sadhana.html)', text: 'The day, week and quarter after the course – tips to keep the practice going.' },
      { meta: 'Next', title: '[BST](bst.html) → [The teacher path](teacher.html)', text: 'Truth and dharma – then teacher training if you wish.' },
      { meta: 'Any time', title: '[Rishi Vani](teachings.html) · [Dictionary](dictionary.html) · [FAQ](faq.html)', text: 'Guruji\'s sayings by theme; the meaning of every term; straight answers.' }
    ] },

    { type: 'h2', text: 'The SSY ladder at a glance' },
    { type: 'ladder', items: [
      { n: '1', title: 'SSY basic course', meta: '14 sessions × 2–3 hours', href: 'course.html', text: 'Pranayama, knowledge sessions, food, initiation into Samadhi meditation.' },
      { n: '2', title: 'AMC – silence retreat ("Nitya Samadhi")', meta: '3½–5 days · every 3 months', href: 'amc.html', text: 'A break from talking, (partly) food and goal-orientation – in a group, with the eyes open.' },
      { n: '3', title: 'BST-1 (Truth) · BST-2 (Dharma)', meta: '4 + 4 days (RSVK: 8 + 1 month of preparation)', href: 'bst.html', text: 'Satya Narayana Vrat; "truth without love has hidden untruth".' },
      { n: '4', title: 'Seva & special camps', meta: 'Kaya Kalpa Kriya, Brahmacharya, padayatra, health camps', href: 'programs.html', text: 'The complete catalogue of programmes.' },
      { n: '5', title: 'TTC – Teacher training', meta: 'Phases 1 → 2A → 2B → 3 → 4 · Katarkhadak, Pune', href: 'teacher.html', text: '"Everyone can be a teacher."' }
    ] },
    { type: 'quote', text: 'Everyone who is \'doing\' something is only making a greater mess… Our philosophy is to discover the unbounded happiness within, which does not depend on any doing whatever, and all doings will naturally blossom.', by: 'Guruji Shri Rishi Prabhakar, 1996 – more in [Rishi Vani](teachings.html)' },

    { type: 'h2', text: 'Every section of this guide' },
    ...sections('en'),

    { type: 'note', kind: 'info', title: 'About this site', text: 'This is an **independent, unofficial** guide that brings everything about SSY together in one place – built from the official RSVK, ssy.life and RPIF pages, Guruji\'s interviews and writings, press reports, published research and practitioners\' accounts. The full list is on the [Sources](sources.html) page. Course dates and fees change – see [Centres](centres.html) and contact them directly. Use the 🔍 button in the header to search the whole site.' }
  ]
};
