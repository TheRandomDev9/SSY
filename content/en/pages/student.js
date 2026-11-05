/* student – the student path (overview) */
module.exports = {
  id: 'student',
  title: 'The student path – from day one as an SSY student to senior practitioner',
  short: 'Student path (overview)',
  lead: 'There are two paths in SSY: the **student (sadhaka) path** – bringing Samadhi into one\'s own life; and the **teacher path** – passing it on to others. This page is the complete map of the first path: every step from first hearing about SSY to becoming a senior practitioner, with its eligibility, duration, frequency and venue. Each step links to its detailed page.',
  blocks: [
    { type: 'h2', text: 'The full map – from 0 to 100' },
    { type: 'ladder', items: [
      { n: '0', title: 'Introduction – intro talk / satsang', meta: 'free · 1–2 hours', text: 'Hearing what SSY is, a taste of pranayama, questions. The decision to register.', href: 'resources.html' },
      { n: '1', title: 'The SSY basic course', meta: '14 sessions × 2–3 hours', text: 'Pranayama, knowledge sessions, the food class, Samadhi meditation initiation (session 9).', href: 'course.html' },
      { n: '2', title: 'The first silence retreat (AMC / retreat)', meta: '3½–4 days · residential', text: 'The peak of the basic course – group silence at an ashram.', href: 'amc.html' },
      { n: '3', title: 'Daily sadhana + weekly follow-up', meta: 'for life', text: 'Pranayama, 15 minutes of meditation 1–3 times a day, the diet; one satsang a week.', href: 'sadhana.html' },
      { n: '4', title: 'Repeating the AMC', meta: 'every 3 months (chronic patients: every 2)', text: '"Nitya Samadhi" – each camp deepens the practice.', href: 'amc.html' },
      { n: '5', title: 'BST-1 – Bhava Samadhi Training (Truth)', meta: '4 days (RSVK: 8 days + 1 month of preparation)', text: 'The vow of truth – Samadhi in the heart.', href: 'bst.html' },
      { n: '6', title: 'BST-2 – Bhava Samadhi Training (Dharma)', meta: '4 days · after BST-1', text: 'The power of dharma; repeating BST every 6 months is recommended.', href: 'bst.html' },
      { n: '7', title: 'Seva – volunteering (sevak)', meta: 'new batches, AMCs, festivals', text: '"From taking to giving" – part of the practice; the door to the teacher path.', href: 'teacher.html' },
      { n: '8', title: 'Special camps', meta: 'Kaya Kalpa Kriya, the Brahmacharya programme, health camps, padayatra', text: 'For senior practitioners; eligibility depends on the camp.', href: 'programs.html' },
      { n: '9', title: 'Annual community gatherings', meta: 'Aradhana, Brahmotsav, VHS, Guru Purnima', text: 'Together with the SSY family – the "Being with Guruji" tradition.', href: 'events.html' },
      { n: '10', title: 'The teacher path (optional)', meta: 'TTC phases 1 → 2A → 2B → 3 → 4', text: 'Passing SSY on to others – see the dedicated page.', href: 'teacher.html' }
    ] },

    { type: 'h2', text: 'Each step – eligibility, duration, frequency, venue' },
    { type: 'table', head: ['Step', 'Eligibility', 'Duration', 'How often', 'Where'], rows: [
      ['Intro talk', 'Anyone', '1–2 hours', 'Before every batch', 'Local centre / online'],
      ['SSY basic course', 'Age 14+ (children: Ch.SSY)', '14 sessions (≈2 weeks)', 'Once; repeats allowed', 'Local centre / Zoom'],
      ['AMC (first)', 'Part of the course', '3½–4 days (Mumbai: 5)', 'End of the course', 'Ashram'],
      ['AMC (repeat)', 'SSY completed', '4–5 days; 2 days for executives', 'Every 3 months', 'Ashram'],
      ['BST-1', 'SSY + AMC; mental stability', '4 days (RSVK: 8 + 1 month)', 'Every 6 months', 'Ashram (residential)'],
      ['BST-2', 'BST-1', '4 days', 'Every 6 months', 'Ashram (residential)'],
      ['Seva', 'SSY completed', 'A whole batch', 'Continuous', 'Local centre'],
      ['Kaya Kalpa Kriya', 'Senior practitioners', 'Depends on the camp', 'Announced specially', 'Ashram'],
      ['Padayatra', 'Senior practitioners / TTC', '5 days (TTC); 30 days (rehabilitation)', 'Special', 'Villages'],
      ['TTC Phase 1', 'See below', '—', '—', 'Katarkhadak, Pune']
    ] },

    { type: 'h2', text: 'Student path vs teacher path' },
    { type: 'table', head: ['Aspect', 'Student (sadhaka)', 'Teacher (Acharya)'], rows: [
      ['Goal', 'Keeping the state of Samadhi in one\'s own life', 'Passing Samadhi on to others'],
      ['Commitment', 'Daily sadhana; AMC every 3 months; BST yearly', 'All of that plus seva, training, reports, readiness for the commune'],
      ['Cost', 'Course / camp fee or donation', 'No salary for teaching; financial self-sufficiency required'],
      ['Family', 'A personal decision', 'The spouse attends Being with Guruji'],
      ['Time', 'Months → a lifetime', 'Years (Phase 1 → 4)'],
      ['Who?', 'Anyone aged 14+', 'SSY + AMC + seva + a Ch.SSY camp + the puja test + languages']
    ] },

    { type: 'h2', text: '"Where am I?" – a self-check' },
    { type: 'accordion', items: [
      { q: 'I have heard of SSY but not done the course yet', a: 'Go to the nearest intro talk; read [What is SSY](intro.html), [The basic course](course.html) and the [FAQ](faq.html); cut down tea and coffee a week before the course.' },
      { q: 'I did the course, but my practice has stopped', a: 'No guilt – see the [Daily sadhana](sadhana.html) page and restart tomorrow morning with pranayama plus 15 minutes; go to the weekend satsang; sign up for the next AMC. The AMC exists for exactly this "recharge".' },
      { q: 'I did the course and an AMC, my practice is good – what next?', a: 'BST-1 (Truth). It changes your relationships and your honesty. Then BST-2. In between, volunteer at a new batch – many say "I understood the course only when I served at one".' },
      { q: 'I have done BST 1 & 2 and I volunteer – should I become a teacher?', a: 'See the Phase 1 requirements on the [Teacher path](teacher.html) page: a Children\'s SSY camp, the puja test, Being with Guruji, seva at two classes and two AMCs. Talk to your Acharya – the recommendation comes through them.' },
      { q: 'I want to do SSY for a health problem', a: 'First read [Benefits & precautions](benefits.html); talk to your doctor; inform the teacher at registration. RSVK recommends an AMC every 2 months for chronic patients and monthly for cancer patients – as a complement to medical treatment.' }
    ] },

    { type: 'h2', text: 'A practitioner\'s first year – a sample calendar' },
    { type: 'timeline', items: [
      { year: 'Month 1', title: 'SSY basic course + AMC', text: '14 sessions; 3½–4 days of silence at the end.' },
      { year: 'Months 1–3', title: 'Daily sadhana; weekend satsang', text: 'Pranayama + meditation; dietary changes settling in.' },
      { year: 'Month 4', title: 'Second AMC', text: 'For many, this is where "the real depth" appears.' },
      { year: 'Months 4–6', title: 'Seva at a new batch', text: 'As a volunteer – registration, the food class, camp help.' },
      { year: 'Months 6–7', title: 'BST-1', text: 'The vow of truth; then a third AMC.' },
      { year: 'Months 8–10', title: 'Being with Guruji / Brahmotsav / VHS', text: 'One of the annual community gatherings.' },
      { year: 'Months 10–12', title: 'BST-2 + fourth AMC', text: 'By the end of the year: 1 course, 4 AMCs, BST 1 & 2, seva – the foundation of a senior practitioner; towards TTC Phase 1 if desired.' }
    ] },
    { type: 'note', kind: 'info', text: 'This is only a sample – everyone has their own pace. There is no race to "move ahead fast" in SSY; in Guruji\'s words, "everyone who is doing something is only making a greater mess." The practice lasting is the success.' }
  ]
};
