/* SSY guide – English content (mirror of the Telugu primary) */
window.SSY_CONTENT = window.SSY_CONTENT || {};
window.SSY_CONTENT.en = {
  code: 'en',
  htmlLang: 'en',
  meta: {
    title: 'Siddha Samadhi Yoga (SSY) – The Complete Guide | Guruji Shri Rishi Prabhakar',
    description: 'Everything about Siddha Samadhi Yoga (SSY), founded by Guruji Shri Rishi Prabhakar: what SSY is, benefits, course structure, every phase from basic course to teacher training, practices, diet, organisation, biography and FAQ.'
  },
  ui: {
    brand: 'Siddha Samadhi Yoga',
    brandSub: 'SSY · Guruji Shri Rishi Prabhakar',
    contents: 'Contents',
    menu: 'Menu',
    theme: 'Toggle theme (light / dark)',
    backToTop: 'Back to top',
    skip: 'Skip to main content'
  },
  hero: {
    kicker: 'A single point of entry for SSY – A to Z',
    title: 'Siddha Samadhi Yoga (SSY)',
    titleAlt: 'సిద్ధ సమాధి యోగ – the path of Samadhi taught by Guruji Shri Rishi Prabhakar',
    subtitle: 'What SSY is, who created it and why, every step from the basic course to the advanced phases, the practices, the diet, the benefits, the organisation, the books and the frequently asked questions – all in one place, in detail.',
    primary: { label: 'Start reading', href: '#intro' },
    secondary: { label: 'See the course phases', href: '#phases' },
    stats: [
      { value: '1948', label: 'Birth of Guruji (Chikkaballapur / Bengaluru, Karnataka)' },
      { value: '1979', label: 'SSY basic course begins (per the organisation\'s own accounts)' },
      { value: '1982', label: 'Rishi Samskruti Vidya Kendra (RSVK) trust founded in Bengaluru' },
      { value: '1 million+', label: 'Participants worldwide by 2007 (organisation\'s figure)' }
    ]
  },
  sections: [

  /* ------------------------------------------------------------ 1. INTRO */
  {
    id: 'intro',
    nav: 'What is SSY?',
    short: 'What is SSY?',
    title: 'What is Siddha Samadhi Yoga (SSY)?',
    lead: 'Siddha Samadhi Yoga – **SSY** for short – is an experiential programme of breathing, meditation, knowledge and lifestyle created by Guruji Shri Rishi Prabhakar. Its core message is simple: **Samadhi is not a distant goal to be reached; it is our natural state. It does not have to be "done" – it only needs the doing to stop.**',
    blocks: [
      { type: 'h3', text: 'The three words in the name' },
      { type: 'cards', cols: 3, items: [
        { icon: '🔱', title: 'Siddha', text: 'Proven, perfected, already accomplished knowledge. In the organisation\'s words, "Siddha" is knowledge that has been tested and established by the rishis – not an experiment but a proven science.' },
        { icon: '🧘', title: 'Samadhi', text: 'The state in which the mind is undisturbed, equanimous and still. In SSY, Samadhi is "sama + dhi" – a balanced intellect, beyond dualities, fully in the present moment.' },
        { icon: '🕉️', title: 'Yoga', text: 'Union – the individual merging with the whole. Guruji\'s famous reversal: **"Yoga starts with Samadhi"** – Samadhi is the first step, not the last.' }
      ] },
      { type: 'p', text: 'So **Siddha Samadhi Yoga** means living life from the state of Samadhi, through proven knowledge. It is not a yoga of postures. It is an integrated programme that combines five elements: breath (pranayama), meditation (samadhi), knowledge (satsang and discussions), food (Amrut Ahar) and life values.' },

      { type: 'h3', text: 'SSY in one sentence' },
      { type: 'quote', text: 'Everyone who is "doing" something is only making a greater mess. Life is not in doing – it is in being.', by: 'Guruji Shri Rishi Prabhakar (Life Positive interview, 1996)' },
      { type: 'p', text: 'SSY differs from other meditation programmes because it rests on the principle of **"non-doing"** (Akarma). There is no forcing of a mantra, no fighting the mind for control, no straining for concentration. Purify the body with pranayama, let the mind relax naturally, and Samadhi arrives on its own – that is the SSY experience.' },

      { type: 'h3', text: 'Who is SSY for?' },
      { type: 'ul', items: [
        '**Students** – concentration, memory, freedom from exam stress.',
        '**Employees, business owners, professionals** – stress-free leadership, clear decisions, energetic work.',
        '**Homemakers and parents** – love, patience and health in family relationships.',
        '**Elderly people** – relief in sleep, blood pressure and breathing problems; peace of mind.',
        '**Children and youth** – dedicated "Children\'s SSY" and the "Infant Siddha Program" (see [Children & education](#children)).',
        '**Spiritual seekers** – anyone, regardless of religion, caste or language. SSY is not a religion; people of every faith take part.'
      ] },

      { type: 'h3', text: 'Key facts at a glance' },
      { type: 'kv', items: [
        ['Full name', 'Siddha Samadhi Yoga. Some people say "Siddhi Samadhi Yoga", but the official name is **Siddha** Samadhi Yoga.'],
        ['Founder', 'Guruji Shri Rishi Prabhakar (1948 – 2014), Bengaluru, Karnataka'],
        ['Organisation', 'Rishi Samskruti Vidya Kendra (RSVK), Bengaluru – a public charitable trust registered in 1982'],
        ['Beginnings', 'Around 1979 (sources give years between 1974 and 1982; the "silver jubilee" was celebrated in 2007)'],
        ['Basic course', 'Currently **14 sessions** (2–3 hours each) plus a **3½–4 day residential silence retreat (AMC)**; earlier formats ran 10–13 days'],
        ['Main components', 'Pranayama · Samadhi meditation · Mudras · Amrut Ahar (raw / fruit diet) · Knowledge satsangs · Silence'],
        ['Core principle', '"Non-doing" – Samadhi is the natural state; yoga starts with Samadhi'],
        ['Main ashrams', 'Doddamaralavadi (Bengaluru) · Katarkhadak (Mulshi, Pune) · Deheri (Mumbai) · Visakhapatnam'],
        ['Language / religion', 'Taught in all languages; belongs to no religion']
      ] },
      { type: 'note', kind: 'info', title: 'About this site', text: 'This is an **independent, unofficial** guide created to bring together everything about SSY in one place (Telugu first, with this English mirror). It is compiled from the official RSVK website, Guruji\'s interviews, press reports and the experiences of past participants. Course details (days, timings, fees) vary by centre – check the [official resources](#resources) for the latest information.' }
    ]
  },

  /* ------------------------------------------------------------ 2. GURUJI */
  {
    id: 'guruji',
    nav: 'Guruji',
    short: 'Guruji Shri Rishi Prabhakar',
    title: 'The founder: Guruji Shri Rishi Prabhakar',
    lead: 'Engineer, management graduate, computer scientist in Canada – then a disciple of Maharishi Mahesh Yogi, and finally a guru who showed the path of Samadhi to lakhs of people. This is the life of "Parama Poojya Yoga Brahma Shri Rishi Prabhakar Guruji".',
    blocks: [
      { type: 'h3', text: 'Birth, family, childhood' },
      { type: 'p', text: 'Guruji was born **Prabhakar Raghavendra Rao** on **30 August 1948** in the Chikkaballapur region of Karnataka (RSVK\'s official page says he was born in Bengaluru in 1948 on Krishna Janmashtami, which is why the organisation celebrates his birthday on Janmashtami). The family lived in Bengaluru.' },
      { type: 'p', text: 'His mother, **Smt. Ramadevi Amma** (C.A. Rama Devi), is known in the SSY family as **"Gurumatha"**. RSVK describes her as Guruji\'s **"first student"**; she was one of the founding trustees. Gurumatha passed away in April 2021 at the age of 93; her Aradhana is observed every March/April and her Jayanthi on 4 July.' },

      { type: 'h3', text: 'Education and career' },
      { type: 'ul', items: [
        'Engineering at **UVCE** (University Visvesvaraya College of Engineering), Bengaluru – aeronautical engineering according to some sources, on a government scholarship.',
        'Higher studies in North America: a master\'s in engineering (some sources say the University of Ottawa; RSVK says "MS in the USA") and an **MBA (Finance) from the University of Western Ontario**, Canada – on a full scholarship.',
        'A successful career as a **computer scientist** in Canada in the early 1970s, consulting for Canadian government departments; he acquired Canadian citizenship.'
      ] },

      { type: 'h3', text: 'The spiritual turn' },
      { type: 'p', text: 'In his third year of engineering he was moved by the writings of Paramahansa Yogananda; in 1968 he visited Dakshineswar (Kolkata). In **July 1974**, while in Canada, he learned **Transcendental Meditation (TM)** and joined the movement of **Maharishi Mahesh Yogi**, serving at its headquarters in Switzerland. Although he rose high in the movement, he felt that "even TM involved some *doing*" and returned to India.' },
      { type: 'p', text: 'In Bengaluru his guru was **Sri Bhagwan Visveswaraya ("Nada Brahma")**. Between 1979 and 1981 he went through a period of intense solitary meditation – according to RSVK, locked in a room and emerging only once every 10–15 days. Out of this deep practice he designed a pranayama-and-samadhi routine that **"anyone could do easily"** – that became SSY. In 1980 he also attended Werner Erhard\'s "est" training in the USA; he himself said this inspired him to present SSY in a modern, contemporary workshop format.' },
      { type: 'quote', text: 'The SSY programme came about as a by-product of my quest to transform India.', by: 'Guruji Rishi Prabhakar, Life Positive, 1996' },

      { type: 'h3', text: 'Life timeline' },
      { type: 'timeline', items: [
        { year: '1948', title: 'Birth', text: '30 August – Chikkaballapur / Bengaluru, Karnataka. Birth name Prabhakar Raghavendra Rao.' },
        { year: '1968', title: 'Visit to Dakshineswar', text: 'Inspired by Yogananda, he visited the shrine of Sri Ramakrishna Paramahamsa.' },
        { year: '1969–74', title: 'Higher studies & career in Canada', text: 'Master\'s in engineering, MBA; worked as a computer scientist in Canada.' },
        { year: '1974', title: 'Transcendental Meditation', text: 'Learned TM in July and joined Maharishi Mahesh Yogi\'s movement; served in Switzerland.' },
        { year: '1979', title: 'SSY begins', text: 'Returned to India and, after intense sadhana, started the Siddha Samadhi Yoga course (sources differ on the year, from 1974 to 1982).' },
        { year: '1982', title: 'RSVK founded', text: 'On 18 February, "Rishi Samskruti Vidya Kendra" was registered in Bengaluru as a public charitable trust; a school opened at Doddamaralavadi the same year.' },
        { year: '1984', title: 'Training disciples', text: 'Teacher training at Gommatagiri near Mysuru – press reports say Jaggi Vasudev (later "Sadhguru") was in that batch.' },
        { year: '1986–90', title: 'Social movements', text: '"Fun Club International" in Davangere (1986), the "Clean India" campaign, the concept of "Total Sufficiency" (1987).' },
        { year: '1996', title: 'Nationwide spread', text: 'Over 2 lakh participants, 500+ volunteer teachers, ~300 centres in India plus North America; Symbiosis (Pune) made SSY compulsory for its management students. "Global Religious Harmony" programme.' },
        { year: '1997', title: 'Memory experiments & USA', text: 'Courses in Silicon Valley; "100% Memory" teaching experiments begin (school results by 2003; a year\'s syllabus in 21–30 days by 2008).' },
        { year: '1998', title: '"Yoga Brahma" title', text: 'A council of pandits in Guntur is said to have conferred the title "Yoga Brahma"; RSVK says Vedic scholars acknowledged him as a "Brahmarshi".' },
        { year: '2004–11', title: 'Puducherry & Pune', text: 'About seven years in Puducherry – the period in which "Kaya Kalpa Kriya" was developed; later Pune.' },
        { year: '2007', title: 'Silver jubilee', text: 'SSY silver jubilee with a 9-day "Silence and Sadhana" camp in Bengaluru; over one million participants, 100+ batches in Dubai, a course in China.' },
        { year: '2014', title: 'Mahasamadhi', text: 'Sunday 16 February, 6:26 a.m., in Bengaluru, aged 65. "Guruji Aradhana" is held at Doddamaralavadi every February.' }
      ] },

      { type: 'h3', text: 'Recognition and titles' },
      { type: 'ul', items: [
        '**Yoga Brahma** – the organisation addresses him as "Parama Poojya Yoga Brahma Shri Rishi Prabhakar Guruji".',
        '**Brahmarshi** – recognition by Vedic scholars (per RSVK).',
        'Member of the **Elijah Board of World Religious Leaders** – this international interfaith body described him as a spiritual leader who "helped eliminate tobacco and alcohol addiction in several villages" of Karnataka.',
        'According to the organisation he lived without a personal bank account or property – "Living Life King Size on an Empty Wallet" is also the title of one of his books.'
      ] },

      { type: 'h3', text: 'Family and legacy' },
      { type: 'p', text: 'Guruji\'s wife is **Arundhati Rishi Prabhakar ("Arundhati Ma")**; their son is **Siddhant Rishi Prabhakar** (born 2000). After Guruji\'s Mahasamadhi, RSVK has been run as a "core team" of family members and senior disciples (for example the Mumbai-based educationist **Manoj Lekhi**, who guides Rishi Gurukulam). In 2019 the family started the **Rishi Prabhakar International Foundation (RPIF)** in Bengaluru, and in 2020 **Digital RCRT** (online 100% Memory training) in Pune. Arundhati Ma\'s book "Divine Satsang" (2015) records Guruji\'s satsangs.' },
      { type: 'p', text: 'Many teachers and organisations trace inspiration to SSY. According to press reports, **Jaggi Vasudev (Sadhguru)** learned SSY from Guruji in 1984, taught it in Hyderabad, Bengaluru and Mysuru, moved to Coimbatore around 1989 and later started his own path (Isha Yoga). (Accounts of this differ on both sides.)' },
      { type: 'note', kind: 'info', title: 'A note', text: 'Sources disagree on some details – Guruji\'s educational institutions, the exact year SSY began, and so on. This guide gives priority to the official RSVK website and states the disagreements openly.' }
    ]
  },

  /* ------------------------------------------------------------ 3. PHILOSOPHY */
  {
    id: 'philosophy',
    short: 'Philosophy & core principles',
    title: 'The philosophy and core principles of SSY',
    lead: 'SSY is not just a method – it is a way of seeing life. These are the principles that recur throughout Guruji\'s teaching.',
    blocks: [
      { type: 'h3', text: '1. Yoga starts with Samadhi' },
      { type: 'p', text: 'In Patanjali\'s eight limbs of yoga – yama, niyama, asana, pranayama, pratyahara, dharana, dhyana – **Samadhi** comes last. Guruji turned this upside down: **"Samadhi is not the last step; it is the first."** Once the mind tastes its natural stillness, yama and niyama (truth, non-violence, purity, contentment) blossom as natural qualities rather than rules. His book is titled exactly that: **"Yoga Starts with Samadhi"**.' },

      { type: 'h3', text: '2. Non-doing – the art of not doing' },
      { type: 'p', text: 'We try to solve problems by "doing something". In Guruji\'s view, our over-effort, anxiety and control are the root of most problems. Samadhi is **"being"** – doing nothing, completely at rest. Work done from this state is effortless, natural and creative. His **"Naishkarmayopanishad"** is devoted to this "state of non-action" – a modern commentary on the Bhagavad Gita\'s "naishkarmya siddhi". In RSVK\'s words: "Doing unwillingly is work; non-doing is play and worship."' },
      { type: 'quote', text: 'To free the mind from all conditioning, you must see the totality of it without thought.', by: 'Guruji Rishi Prabhakar (RPIF collection)' },

      { type: 'h3', text: '3. Pancha kosha shuddhi – purifying all five sheaths' },
      { type: 'p', text: 'According to the Taittiriya Upanishad a human being has five koshas (sheaths). SSY touches all five at once – which is why it is called an "integrated" programme:' },
      { type: 'table', head: ['Kosha', 'Meaning', 'How SSY purifies it'], rows: [
        ['Annamaya kosha', 'The physical body (made of food)', 'Amrut Ahar – fruit, raw natural food, fasting'],
        ['Pranamaya kosha', 'Life energy, breath', 'Pranayama, mudras'],
        ['Manomaya kosha', 'Mind, emotions', 'Samadhi meditation, silence, Bhava Samadhi'],
        ['Vijnanamaya kosha', 'Intellect, discrimination', 'Knowledge satsangs – discussions on responsibility, leadership, relationships'],
        ['Anandamaya kosha', 'Bliss', 'Devotion, gratitude, service, bhajans – the experience that "joy is our nature"']
      ] },

      { type: 'h3', text: '4. Total responsibility and leadership' },
      { type: 'p', text: 'The most important theme in SSY\'s knowledge sessions is **responsibility**. The stance "I am the cause of my life and the world around me" frees us from blame, complaint and victimhood. In Guruji\'s view **"management starts from self"** – someone who cannot manage themselves cannot lead others. His **"Nayakatvopanishad"** is on exactly this.' },

      { type: 'h3', text: '5. Total Sufficiency – "king size on an empty wallet"' },
      { type: 'p', text: 'In 1987 Guruji proposed the idea of **"Total Sufficiency"**: nature has already provided everything; scarcity is a creation of the mind. His own life was the example – no bank account, no property, yet travelling the world and running hundreds of centres. That experience became the books **"Living Life King Size on an Empty Wallet"** and **"Aishwaryopanishad"**.' },

      { type: 'h3', text: '6. "Vision is dangerous" – living in the present' },
      { type: 'p', text: 'Modern management talks about "vision" and "goals". In **"Vision is Dangerous"** Guruji said the opposite: a mind chasing a picture of the future loses this moment; a mind fully present knows the right action by itself. That is Samadhi – **being completely here, now**.' },

      { type: 'h3', text: '7. Food is medicine – Amrut Ahar' },
      { type: 'p', text: 'If the body is not pure the mind cannot be still. During the SSY course participants eat only **fruit, juices and raw food** for a number of days. Guruji\'s book **"Amrut Ahar"** explains natural food, fasting and the body\'s self-healing capacity. Details in the [Diet](#diet) section.' },

      { type: 'h3', text: '8. Unity, love and brotherhood are the only religion' },
      { type: 'p', text: 'SSY belongs to no religion. In Guruji\'s words, **"unity, love and brotherhood are the only true religions."** In 1996 he ran "Global Religious Harmony" programmes at about 200 centres and served on the Elijah Board of World Religious Leaders. Hindus, Muslims, Christians, Jains and Sikhs sit together in the course.' },

      { type: 'h3', text: '9. Everyone can be a teacher' },
      { type: 'p', text: '**"Everyone can be a teacher"** – SSY teachers are not professional gurus; ordinary homemakers, engineers, doctors and students who completed the course and the teacher training conduct courses **voluntarily**. By 1996 there were already more than 500 volunteer teachers. This is how SSY spread so fast and at such low cost.' },

      { type: 'h3', text: '10. Brahmopadesam – in a modern form' },
      { type: 'p', text: 'In the ancient Indian tradition the initiation in which a guru transmits the knowledge of Brahman is called **Brahmopadesam**. The organisation says SSY offers this in a form suited to today – without distinction of caste, gender, age or religion. That is why SSY is also called "today\'s Brahmopadesam".' },

      { type: 'chips', items: ['Non-doing', 'Samadhi first, yoga follows', 'Five-sheath purification', 'Total responsibility', 'Total sufficiency', 'Living in the present', 'Amrut Ahar', 'Religious harmony', 'Volunteer teachers', 'Prana is life'] }
    ]
  },

  /* ------------------------------------------------------------ 4. COURSE */
  {
    id: 'course',
    nav: 'Basic course',
    short: 'The SSY basic course',
    title: 'The SSY basic course – structure, daily format, the 14 sessions',
    lead: 'The SSY journey begins with the basic course. Its current official form: **14 sessions (2–3 hours each)**, ending with a **3½–4 day residential silence retreat (AMC)**. Here is how the course runs, from the first session to the last.',
    blocks: [
      { type: 'h3', text: 'How the format has changed over time' },
      { type: 'p', text: 'The core elements of the basic course (pranayama, Samadhi meditation, knowledge sessions, diet, silence) have stayed the same for 40 years, but the number of days and the timings have varied by centre and era:' },
      { type: 'table', head: ['Period / centre', 'Format', 'Source'], rows: [
        ['1996 (nationwide)', '13-day intensive course + 4-day residential retreat', 'Life Positive interview'],
        ['1997 (USA)', '12-day programme', 'Participant\'s letter'],
        ['2004 (Ludhiana, corporate)', '15-day camp', 'The Tribune'],
        ['2007 (Dubai)', '10-day course', 'Khaleej Times'],
        ['2008 (Mumbai)', 'One week of evening classes + 6+ hours over the weekend + 3 days of silence at Deheri ashram', 'Life Positive first-person account'],
        ['2009 (Mumbai, corporate)', '10 days from 5 a.m. + a 2-day silent retreat', 'Participant blog'],
        ['Now (RSVK official)', '**14 sessions × 2–3 hours + a 3½–4 day residential silence retreat (AMC)**; offline and online via Zoom', 'rsvk.org']
      ] },
      { type: 'note', kind: 'info', text: 'Whether your city calls it a "10-day course" or "14 sessions", it is the same course. Some centres run one session a day; others run two sessions on weekends.' },

      { type: 'h3', text: 'Timings, fees, eligibility' },
      { type: 'kv', items: [
        ['Timings', 'Usually a morning batch (e.g. Hyderabad: first session Sunday 6:00–8:30 p.m., then daily 5:00–8:00 a.m.) or an evening batch (6:00–9:00 p.m.). Each session is 2–3 hours.'],
        ['Attendance', 'Attendance at every session is compulsory; latecomers are not admitted ("no latecomers") – discipline is part of the course.'],
        ['Fee', 'RSVK\'s official site currently lists ₹6,000 (online/offline). In earlier years many centres ran on donations, charging only for food and transport to the retreat. It varies by centre.'],
        ['Age', 'Adult SSY: generally 14+ (some centres run separate batches for 14–21, 22–50 and 50+). Children have their own "Children\'s SSY" (ages 7–12).'],
        ['Language', 'In the local language (Telugu, Kannada, Marathi, Hindi, English…) depending on the teacher.'],
        ['What to bring', 'Some fruit and vegetables on day one (for the food class), a notebook, a mat or blanket to sit on, loose clothing.']
      ] },

      { type: 'h3', text: 'What a session looks like (typical format)' },
      { type: 'steps', items: [
        { meta: '≈ 45 minutes', title: 'Pranayama series & mudras', text: 'Seated in vajrasana, SSY\'s own pranayama sequence with yoga mudras such as chin mudra and chinmaya mudra. The whole set takes no more than 45 minutes. Some centres add light yogasanas.' },
        { meta: '≈ 60–90 minutes', title: 'Knowledge session – the day\'s theme', text: 'The teacher opens the theme of the day (responsibility, happiness, food, leadership…) with questions, games and small experiments. "When were you really happy? Why can\'t you be happy now?" It is a participatory discussion, not a lecture.' },
        { meta: '≈ 15 minutes', title: 'Samadhi meditation', text: 'About 15 minutes of Samadhi meditation at the end of the session – no effort, letting the mind go. Guided in the early days (sometimes with mantra sounds or images); later independent.' },
        { meta: 'Closing', title: 'Prayer, bhajan & homework', text: 'A closing prayer or bhajan; a small daily assignment (e.g. "write about your ideal world", "whom did you thank today?"); food guidance for the next day.' }
      ] },

      { type: 'h3', text: 'The 14 sessions – in order' },
      { type: 'p', text: 'No official day-by-day syllabus has been published; the sequence below is compiled from SSY teachers\' session outlines, the TTC guidelines (the first three sessions are "Introduction, Rules and Responsibility") and participants\' accounts. The order may vary slightly by centre.' },
      { type: 'steps', items: [
        { meta: 'Session 1', title: 'Introduction & Samadhi', text: 'What SSY is; Samadhi – the foundation of Indian culture and of a joyful life. First introduction to pranayama. Participants introduce themselves.' },
        { meta: 'Session 2', title: 'Rules', text: 'The course rules – like the rules of a game, not to limit freedom but to make the game possible. Food, punctuality, a break from tea/coffee, TV and newspapers.' },
        { meta: 'Session 3', title: 'Responsibility', text: 'Where does responsibility come from? From blame and complaint to "I am the cause". Gandhi\'s concept of trusteeship.' },
        { meta: 'Session 4', title: 'Food', text: '"We are what we eat." Food is more than nutrients and calories – classification by prana, raw food, fasting. Introduction to the shatkriyas (cleansing practices).' },
        { meta: 'Session 5', title: 'The Joyful Leader', text: 'Leadership is a state, not a position. Leading joyfully, without stress; "management starts from self".' },
        { meta: 'Session 6', title: 'Happiness', text: '"Do you actually accept what you think you accept?" – acceptance, frustration and the roots of stress. Childlike acceptance.' },
        { meta: 'Session 7', title: 'Enlightenment', text: 'Myths about enlightenment. "Would you still seek liberation if life were full of joy?"' },
        { meta: 'Session 8', title: 'Who are you?', text: 'Beyond body, mind, roles and name – who is "I"? The five koshas; swasthya as health at all five levels.' },
        { meta: 'Session 9', title: 'Samadhi meditation (full initiation)', text: '"The deepest meditation one can learn – it cannot be described, it must be experienced." Initiation into the full Samadhi meditation; independent practice from here on.' },
        { meta: 'Session 10', title: 'Thoughts & desires', text: 'The Buddha did not teach being free of desire – what should our relationship with desire be? Watching thoughts without suppressing them.' },
        { meta: 'Session 11', title: 'Vision', text: 'Principles for writing a vision statement – and Guruji\'s warning that "vision is dangerous": the goal must not swallow this moment.' },
        { meta: 'Session 12', title: 'Karma Yoga', text: 'Action without clinging to results – action from the state of non-doing. Done unwillingly it is "work"; in non-doing it becomes "play and worship".' },
        { meta: 'Sessions 13–14', title: 'Review, gratitude, the way forward', text: 'Sharing experiences, expressing gratitude, a daily sadhana plan, introduction to the next steps (AMC, BST), seva opportunities.' },
        { meta: 'Retreat', title: 'Residential silence retreat (AMC) – 3½ to 4 days', text: 'Group silence at an ashram – a break from talking, (partly) from food and from goal-orientation. "Silence with the eyes open". This is the peak of the basic course. Details in [SSY phases](#phases).' }
      ] },

      { type: 'h3', text: 'Rules to follow during the course' },
      { type: 'cards', items: [
        { icon: '🥗', title: 'Raw / sattvic food', text: 'Salads, soups, juices, fruit and sprouts through the day. Minimal cooked food. Vegetarian, without exception.' },
        { icon: '🍵', title: 'Herbal drinks instead of tea and coffee', text: 'Ginger, lemongrass and similar infusions; double the usual water intake.' },
        { icon: '🚭', title: 'No alcohol, no tobacco', text: 'Completely avoided for the whole course – for many people this becomes the moment they quit for good.' },
        { icon: '📵', title: 'A break from TV, newspapers and social media', text: 'Less noise entering the mind, so that the silence within can be heard.' },
        { icon: '⏰', title: 'Punctuality & full attendance', text: 'On time for every session; not a single session to be missed.' },
        { icon: '📓', title: 'Daily assignments', text: 'Writing on the ideal world, happiness, gratitude; experiments at home.' }
      ] },
      { type: 'note', kind: 'tip', title: 'Before the course', text: 'Cutting down tea and coffee and sleeping early for a week before the course makes the morning batch much easier. If you have a chronic illness, are pregnant or are under psychiatric treatment, tell the teacher at registration and consult your doctor.' }
    ]
  },

  /* ------------------------------------------------------------ 5. TECHNIQUES */
  {
    id: 'techniques',
    nav: 'Practices',
    short: 'Practices & processes',
    title: 'SSY practices and processes – from pranayama to silence',
    lead: 'The organisation says SSY is a programme of "experiences" rather than "techniques". Still, these are the main practices and processes taught in the course. (The exact pranayama sequence and the meditation initiation are given only in person by a teacher – here we describe their nature and purpose.)',
    blocks: [
      { type: 'h3', text: '1. Pranayama – "extending the field of prana"' },
      { type: 'p', text: 'In SSY, pranayama is not merely a breathing exercise – it is **"extending the field of prana"**. Prana is "the energy behind all motion". The course teaches a series of pranayamas in a fixed sequence (the organisation also calls it "Rajyoga pranayama"):' },
      { type: 'ul', items: [
        '**Posture:** usually vajrasana (kneeling) or sukhasana; spine upright.',
        '**Mudras:** yoga mudras such as chin mudra (thumb and index finger joined, palms up) and chinmaya mudra (remaining fingers folded) – to hold the flow of prana within the body.',
        '**Sequence:** starting from deep abdominal breathing, a series of rhythmic, rapid and slow breathing patterns; the whole set takes about **45 minutes**.',
        '**Purpose:** purification of the pranamaya kosha – energy blocks in the body dissolve and the mind becomes still on its own. After pranayama, Samadhi meditation is not "done"; it "happens".'
      ] },
      { type: 'note', kind: 'warn', text: 'Guruji designed this so that "anyone can do it easily", but rapid breathing patterns need care in conditions such as high blood pressure, heart disease, epilepsy and pregnancy. Follow your teacher\'s instructions; do not try to learn from internet videos on your own.' },

      { type: 'h3', text: '2. Samadhi meditation – the experience of "nobody-ness"' },
      { type: 'p', text: 'This is the heart of SSY. About **15 minutes**, eyes closed, sitting without any effort. No forcing of a mantra, no "job" of watching the breath – just letting the mind go completely. The organisation says this **"profound rest is deeper than even deep sleep"**. Guruji called it the experience of "nobody-ness" – name, role and thought dissolve and only "being" remains.' },
      { type: 'ul', items: [
        'Guided by the teacher in the first days (sometimes with mantra sounds or images); full initiation by session 9.',
        'After the course, 15 minutes daily – up to three times a day (morning, midday, evening), as disciples recommend.',
        'Samadhi is not a "trance"; it is alert, living stillness. "If thoughts come, they come – without fighting them."',
        'Samadhi is not limited to the meditation period – working, speaking and eating from that state is "living in Samadhi" (Samadhi in action).'
      ] },
      { type: 'quote', text: 'No amount of doing can ever take one into the state of "non-doing".', by: 'From the introduction to Yoga Starts with Samadhi' },

      { type: 'h3', text: '3. Silence (Mouna) – Nitya Samadhi' },
      { type: 'p', text: 'In SSY silence is not a lesson but a "retreat". At the AMC camp there is a **withdrawal from three stimuli**: talking, (partly) food, and goal-orientation. Its special feature: it is **silence kept with the eyes open, in a group** ("inclusive silence") – not hiding in solitude, but being with everyone without words. In Guruji\'s words: **"Silence leads to truth; truth to courage and strength."**' },

      { type: 'h3', text: '4. Shatkriyas & food purification' },
      { type: 'p', text: 'For purifying the annamaya kosha (the physical body), the food class introduces the hatha-yoga **shatkriyas** (six cleansing practices – simple forms such as jala neti and kapalabhati). Raw food, fasting and herbal drinks are part of this purification. Details in the [Diet](#diet) section.' },

      { type: 'h3', text: '5. Yogasanas & physical movement' },
      { type: 'p', text: 'SSY is not posture-centred yoga, but some simple asanas, stretches and "yoga exercises and physical movement" are part of the course – mainly to sit comfortably for longer and to help the flow of prana.' },

      { type: 'h3', text: '6. Experiential processes & games' },
      { type: 'p', text: 'Drawing inspiration from modern experiential trainings such as est, Guruji designed games and processes so that knowledge is "experienced" rather than "told":' },
      { type: 'ul', items: [
        '**Passing-the-apple game**, **animal imitations**, **acting out a crowd** – to dissolve the ego and drop shyness and fear.',
        '**The blindfolded trust walk** – an experience of trust and surrender.',
        '**Emotional workshops** – suppressed feelings surface; crying and laughing are both natural.',
        '**Pair and group sharing** – on questions such as "When was I really happy?"',
        '**Written assignments** – the ideal world, happiness, a vision statement.'
      ] },

      { type: 'h3', text: '7. Bhajans, prayer, gratitude' },
      { type: 'p', text: 'Every session ends with a prayer or bhajan; towards the end of the course there is an expression of gratitude – to parents, to the guru, to life. Although SSY belongs to no religion, devotion (the anandamaya kosha) is a natural part of the programme; everyone participates according to their own faith.' },

      { type: 'h3', text: '8. Kaya Kalpa Kriya (KKK) – an advanced practice' },
      { type: 'p', text: 'A body-and-prana rejuvenation kriya that Guruji developed during his years in Puducherry (after 2004). It is not part of the basic course; it is taught in special camps. Details in [SSY phases](#phases).' }
    ]
  },

  /* ------------------------------------------------------------ 6. DIET */
  {
    id: 'diet',
    short: 'Diet – Amrut Ahar',
    title: 'The SSY philosophy of food – Amrut Ahar, pranic food, fasting',
    lead: '"We are what we eat." In SSY food is not a side topic – it is the main tool for purifying the annamaya kosha. Raw, natural food for the whole course; Guruji\'s book **"Amrut Ahar"** is the foundation of this philosophy.',
    blocks: [
      { type: 'h3', text: 'Classifying food by prana' },
      { type: 'p', text: 'SSY looks at food through the lens of **prana** (life energy) rather than calories and nutrients. What matters is whether a food increases sattva, rajas or tamas:' },
      { type: 'table', head: ['Category', 'Examples', 'Effect'], rows: [
        ['**Positive pranic food**', 'Fresh fruit, nuts, sprouts, greens, most vegetables – ash gourd is said to have the highest prana; honey, tender coconut water', 'Energy, lightness, a still mind – conducive to meditation'],
        ['**Zero pranic food**', 'Potato, tomato and the like', 'Neither gives nor takes energy – in moderation'],
        ['**Negative pranic food**', 'Non-vegetarian food, fried food, garlic, onion, chillies, asafoetida, brinjal; alcohol, tobacco, tea, coffee; unnecessary antibiotics', 'Dullness, agitation, an obstacle to meditation – avoided completely during the course']
      ] },
      { type: 'note', kind: 'info', text: 'This classification is the SSY / yogic traditional view – it differs from modern nutrition science in places. In the course\'s "food class" the teacher presents it with a scientific explanation.' },

      { type: 'h3', text: 'Food rules during the course' },
      { type: 'cards', items: [
        { icon: '🥗', title: 'Raw food all day', text: 'Salads, grated raw vegetables, fruit, sprouts, soups, fresh juices. Minimal or no cooked food.' },
        { icon: '🍵', title: 'Herbal drinks', text: 'Ginger, lemongrass and tulsi infusions in place of tea and coffee; twice the usual water.' },
        { icon: '🕐', title: 'Only at set times', text: 'Meals only at the designated times; no snacking in between – rest for the digestive system.' },
        { icon: '🌱', title: 'Vegetarian, sattvic', text: 'No meat, egg, onion or garlic, no excess chilli, no fried food.' },
        { icon: '🚫', title: 'No alcohol or tobacco', text: 'Negative pranic substances; many people give them up permanently after the course.' },
        { icon: '🌙', title: 'Fasting / partial fasting', text: 'A partial withdrawal from food during the AMC retreat – "the highest things happen when you are in fast", said Guruji.' }
      ] },

      { type: 'h3', text: 'Why this diet?' },
      { type: 'ul', items: [
        '**Less load on digestion** increases the body\'s capacity to cleanse and heal itself ("the body is the doctor").',
        '**A still mind** – meditation is hard after heavy, cooked, spicy food; after raw food it is naturally easy.',
        '**Freedom from addictions** – a 10–14 day break from tea, coffee, tobacco and alcohol leads many people to permanent freedom.',
        '**An experiential lesson** – observing for yourself how food changes the mind; deciding for yourself what to eat after the course.'
      ] },
      { type: 'p', text: 'In 2003 researchers from Andhra Pradesh published a study of the nutritional adequacy of the SSY camp diet in the Indian Journal of Nutrition and Dietetics – the SSY diet has also been a subject of academic research.' },

      { type: 'h3', text: 'Food after the course' },
      { type: 'p', text: 'There is no rule to eat raw food permanently after the course. The recommendation: **vegetarian food, as much raw food as possible (up to half), less onion, garlic and chilli, herbal drinks instead of tea and coffee, and one day a week on fruit or juices**. The book "Amrut Ahar" is the complete guide to this lifestyle.' },
      { type: 'note', kind: 'warn', title: 'Health warning', text: 'People with diabetes or low blood pressure, pregnant and breastfeeding women, children and anyone with a serious illness should consult a doctor before starting a raw-food diet or fasting. The SSY diet is not a substitute for medicines; never stop medication without medical advice.' }
    ]
  },

  /* ------------------------------------------------------------ 7. PHASES */
  {
    id: 'phases',
    nav: 'Phases',
    short: 'SSY phases – start to finish',
    title: 'The SSY journey phase by phase – from the basic course to teacher training',
    lead: 'SSY is not one course – it is a ladder. Each phase builds on the one before. The official sequence: **SSY → AMC (repeated) → BST-1 / BST-2 → TTC (4 phases)**. Alongside these there are special camps (Kaya Kalpa Kriya, 100% Memory, Upanayana camp) and the path of seva.',
    blocks: [
      { type: 'h3', text: 'The main ladder at a glance' },
      { type: 'ladder', items: [
        { title: 'SSY basic course', meta: '14 sessions + a 3½–4 day silence retreat', text: 'The entry point. Pranayama, Samadhi meditation, knowledge sessions, diet, the first experience of silence.' },
        { title: 'AMC – Advanced Meditation Course ("Nitya Samadhi")', meta: '4–5 day residential silence retreat · every 3 months', text: 'Group silence, partial fasting, goal-free living. The "recharge" camp that SSY graduates return to again and again.' },
        { title: 'BST-1 – Bhava Samadhi Training (Truth)', meta: '4 days (RSVK: 8 days + 1 month of preparation)', text: 'Based on the "Satya Narayana Vrat" – the vow of truth; transformation of personality and outlook through the power of truth.' },
        { title: 'BST-2 – Bhava Samadhi Training (Dharma)', meta: '4-day residential programme', text: 'The power of dharma; "truth without love has hidden untruth". For those who completed BST-1.' },
        { title: 'TTC – Teachers Training Course (4 phases)', meta: 'Katarkhadak ashram, Pune', text: 'Becoming an SSY teacher – seva, sadhana, "Nobody sadhana", padayatra, living on minimal means.' }
      ] },

      { type: 'h3', text: 'Phase 1: the SSY basic course' },
      { type: 'p', text: 'Full details are in the [Basic course](#course) section above. In short: 14 sessions (2–3 hours each) plus a 3½–4 day residential silence retreat at the end. Without completing it there is no eligibility for any later phase.' },

      { type: 'h3', text: 'Phase 2: AMC – Advanced Meditation Course' },
      { type: 'kv', items: [
        ['Other names', 'Nitya Samadhi; silence retreat; "Retreat"'],
        ['Duration', 'RSVK: a 4-day residential silence retreat; Mumbai (ssy.life): 5 days; a monthly 2-day weekend retreat for senior executives'],
        ['Where', 'At the ashrams – Doddamaralavadi (Bengaluru), Katarkhadak (Pune), Deheri (Mumbai) and others'],
        ['What happens', 'Withdrawal from three stimuli: talking, (partly) food, and goal-orientation. Silence with the eyes open, in a group. Pranayama, long Samadhi meditations, walks in nature, satsang (listening only), seva. "All judgements stop."'],
        ['How often', 'RSVK recommends at least once every 3 months; every 2 months for chronic patients; monthly for cancer patients. "After an AMC you are fully charged for a few weeks."'],
        ['Eligibility', 'Anyone who has completed the SSY basic course']
      ] },
      { type: 'quote', text: 'Silence is taking time not to be involved in producing any results. Nothing but silence within will enhance our stability outside.', by: 'Guruji Rishi Prabhakar – Rishi Vani' },

      { type: 'h3', text: 'Phase 3: BST – Bhava Samadhi Training' },
      { type: 'p', text: '"Bhava" means emotion, the state of the heart. Once Samadhi is established in the intellect, BST brings it into the heart, into relationships and into life values. Its tagline: **"Discovering the power of Truth and the power of Dharma."**' },
      { type: 'cards', items: [
        { icon: '🕊️', title: 'BST-1 – Truth', text: 'A 4-day training based on the "Satya Narayana Vrat" (the vow of truth) – experiencing how much power comes from living in complete honesty. "Changes one\'s power and outlook in just four days" (ssy.life). RSVK\'s form: at least one month of preparation followed by an 8-day experience; repeated every 6 months.' },
        { icon: '⚖️', title: 'BST-2 – Dharma', text: 'A 4-day residential programme on dharma (right action). "Truth without love has hidden untruth" – living truth with love. Only for those who have completed BST-1.' }
      ] },
      { type: 'note', kind: 'warn', text: 'The organisation itself says: **"Only mentally stable people"** who have completed the preliminary programmes (SSY, AMC) should undergo BST. It is a training with intense emotional processes.' },

      { type: 'h3', text: 'Phase 4: TTC – Teachers Training Course (4 phases)' },
      { type: 'p', text: 'This is where Guruji\'s vision that "everyone can be a teacher" is put into practice. TTC is held in four phases at the Katarkhadak ashram near Pune:' },
      { type: 'steps', items: [
        { meta: 'TTC Phase 1', title: 'Entry requirements & oath', text: 'SSY + AMC completed; one 10-day residential Children\'s SSY camp; a puja-chanting test; one "Being with Guruji" programme; volunteering at 2 SSY classes and 2 AMCs. Unmarried youngsters stay one month at the Maralwadi ashram and learn Japanese or Spanish. Oath-taking in satsang.' },
        { meta: 'TTC Phase 2', title: 'Self-sufficiency & conducting classes', text: 'Financially self-sufficient; two Children\'s SSY classes conducted; BST-1 and 2 completed in the past year; willingness to join an RSVK commune.' },
        { meta: 'TTC Phase 3', title: 'Padayatra & Nobody sadhana', text: 'Leading a 5-day padayatra (walking pilgrimage) for at least 30 people; "living on minimal means"; "Nobody sadhana" – the practice of living without name or position.' },
        { meta: 'TTC Phase 4', title: 'Full teacher – training others', text: 'Training Phase-2 trainees; running full batches independently. Conducting courses as an SSY "Acharya".' }
      ] },
      { type: 'p', text: 'SSY teachers draw no salary – they teach as seva; donations from courses go to the organisation\'s programmes. There were 500+ volunteer teachers by 1996 and about 2,000 volunteers by 2008.' },

      { type: 'h3', text: 'Special advanced camps' },
      { type: 'cards', items: [
        { icon: '🔄', title: 'Kaya Kalpa Kriya (KKK)', text: 'A body-and-prana rejuvenation kriya that Guruji developed during his Puducherry years. The organisation describes it as a practice that reverses ageing and restores health (these claims are not scientifically established). Taught only in special camps.' },
        { icon: '🧠', title: '100% Memory Program (HMP / RCRT)', text: 'A 30-day residential summer camp for students of classes 7–10 (April–May in India). The shravana–manana–nididhyasana method, mind maps, speed reading (200–300 pages an hour) – the aim is to complete a year\'s syllabus in 21–30 days. Experiments since 1997; now also an online "Digital RCRT".' },
        { icon: '🪔', title: 'Upanayana camp – Gayatri Upadesha', text: 'A 15–16 day residential camp for boys and girls aged 7+; initiation into the Gayatri mantra, 4,000 japas a day – described by the organisation as "a 16-day process for keeping the right brain open". Open to all, regardless of caste or gender.' },
        { icon: '🏢', title: 'Corporate SSY & manager retreats', text: 'Dedicated SSY batches for organisations (in person + online guidance); weekend silence retreats for managers; monthly 2-day AMCs for executives. Examples: compulsory for Symbiosis (Pune) management students in 1996, the Vardhman Group (2004), the Apparel Group in Dubai.' },
        { icon: '🩺', title: 'Health programmes', text: 'Arogya Shibir, reversal of heart disease, a diabetes programme, cancer rehabilitation (after surgery/chemo: a 15-day naturopathy detox + 30 days of "Joy Therapy" + a 30-day padayatra), "From Medication to Meditation". These complement medical treatment – they are not a substitute.' },
        { icon: '🎭', title: 'SSY Expression & Being with Guruji', text: 'An expression programme run in five or six one-day segments (Mumbai); during Guruji\'s lifetime, "Being with Guruji" satsang camps – now community gatherings such as the Aradhana, Brahmotsav and Vishwa Hrudaya Sammelana.' }
      ] },

      { type: 'h3', text: 'A typical practitioner\'s journey (example)' },
      { type: 'timeline', items: [
        { year: 'Month 0', title: 'Intro satsang → SSY basic course', text: '14 sessions, then the 3½–4 day silence retreat.' },
        { year: 'Months 1–3', title: 'Daily sadhana + weekly follow-up satsang', text: 'Pranayama, 15 minutes of Samadhi meditation, dietary changes; weekend group meditation at the local centre.' },
        { year: 'Month 3', title: 'First AMC', text: '4–5 days of silence. "This is where the real depth of SSY becomes clear," say many practitioners.' },
        { year: 'Months 6–12', title: 'BST-1, then BST-2', text: 'Truth and dharma – Samadhi brought into life.' },
        { year: 'Year 1+', title: 'Seva → TTC', text: 'Volunteering at classes, running Children\'s SSY, then teacher training if desired. AMC every 3 months and BST yearly continue.' }
      ] },
      { type: 'note', kind: 'info', text: 'After Guruji\'s Mahasamadhi (2014), branches such as RSVK (Bengaluru), ssy.life (Mumbai) and SSY USA run some programmes with different durations (AMC 4 vs 5 days, BST 4 vs 8 days). What your own centre tells you is final.' }
    ]
  },

  /* ------------------------------------------------------------ 8. BENEFITS */
  {
    id: 'benefits',
    nav: 'Benefits',
    short: 'Benefits of SSY',
    title: 'The benefits of SSY – physical, mental, emotional, social, spiritual',
    lead: 'SSY\'s motto: **"A journey from illness to health, and from anxiety to happiness."** What the organisation claims, what research says and what practitioners report – all three, separately and honestly.',
    blocks: [
      { type: 'h3', text: 'Benefits at five levels' },
      { type: 'cards', items: [
        { icon: '💪', title: 'Physical', items: ['Profound rest – "deeper than sleep" – less fatigue', 'Better sleep, digestion and energy levels', 'Relief in stress-related conditions: headache/migraine, asthma, ulcers, hypertension, diabetes, arthritis (organisation\'s claim)', 'Freedom from tea, coffee, tobacco and alcohol habits', 'Weight control and skin health (through dietary change)'] },
        { icon: '🧠', title: 'Mental', items: ['Reduced stress and anxiety (confirmed in research – see below)', 'Better concentration, memory and clarity', 'Better decision-making', 'Fewer negative thoughts – "the fight with thoughts stops"', 'Creativity'] },
        { icon: '❤️', title: 'Emotional', items: ['Acceptance – the state of "everything is OK as it is"', 'Release from fear, anger and guilt', 'Self-confidence and courage ("truth leads to courage")', 'Gratitude and a happiness that does not depend on outer causes'] },
        { icon: '🤝', title: 'Social / relationships', items: ['Patience and love in the family; a better relationship with parents', 'Less blame and complaint, more responsibility', 'Leadership – guiding a team without stress', 'A shift "from taking to giving" – the spirit of seva', 'Religious harmony, a sense of community'] },
        { icon: '✨', title: 'Spiritual', items: ['Direct experience of Samadhi – the mind\'s natural still state', 'Towards an experiential answer to "Who am I?"', 'Non-doing – effortless living', 'A universal spirituality bound to no religion', 'In the organisation\'s words: Serenity, Transformation, Healing, Liberation'] }
      ] },

      { type: 'h3', text: 'What does research say?' },
      { type: 'p', text: 'There are only a few published peer-reviewed studies on SSY, but they are positive:' },
      { type: 'ul', items: [
        '**Kozasa et al., Psychological Reports (2008), 103(1): 271–274** – a study of 22 volunteers with anxiety in Brazil (14 in SSY, 8 on a waiting-list control). After one month the SSY group showed **significantly reduced anxiety, depression and tension and increased well-being** compared with the control group. The researchers described SSY as "meditation associated with pranayama".',
        '**Indian Journal of Nutrition and Dietetics (2003), 40(8): 297–302** – a study by researchers in Andhra Pradesh of the nutritional adequacy of the SSY camp diet.',
        'According to RSVK, doctors such as Dr Jagdish Hiremath and Dr Sachin Deshmukh studied the effects of SSY on heart and diabetes patients (publication details are not available).'
      ] },
      { type: 'note', kind: 'info', text: 'Hundreds of studies show that pranayama and meditation in general have positive effects on stress, anxiety, blood pressure and sleep. SSY combines both with dietary change, so those benefits naturally apply. But claims such as "cures cancer" or "all diseases disappear" have no scientific basis.' },

      { type: 'h3', text: 'Practitioners\' experiences (from published accounts)' },
      { type: 'ul', items: [
        'A 69-year-old with an enlarged heart, ulcers and asthma: "In 18 months my heart came back to normal size and my BP and pulse became normal" (RSVK site).',
        'Dubai participants (Khaleej Times, 2007): weight loss, quitting smoking and drinking, diabetes and blood pressure under control, better sleep, relief from migraine.',
        'A Mumbai writer (Life Positive, 2008): "a drastic reduction of negative thoughts and unhappiness."',
        'A corporate employee (blog, 2009): "I feel lighter; I can work longer hours without stress" – but also wrote honestly that the effect faded once the practice stopped.',
        'The Rajkot centre: reduced anxiety, better focus, calmer relationships.'
      ] },

      { type: 'h3', text: 'For the benefits to last' },
      { type: 'p', text: 'The clear lesson from practitioners\' accounts: **the benefits last not because of the course but because of the practice after it.** Daily pranayama and meditation, the food guidelines and an AMC every 3 months – keep these up and the benefits grow; stop and they gradually fade. Details in the [Daily sadhana](#sadhana) section.' },

      { type: 'h3', text: 'Precautions – who should consult a doctor first' },
      { type: 'ul', items: [
        'Serious heart disease, uncontrolled blood pressure, epilepsy, recent surgery – rapid pranayamas need care; tell the teacher.',
        'Pregnancy – some pranayamas and fasting are unsuitable; ask for modifications.',
        'Diabetes (insulin/medication) – raw food and fasting affect blood sugar; adjust medication only with a doctor\'s advice.',
        'Mental-health treatment (depression, bipolar disorder, psychosis) – deep emotional processes and long silence can be hard for some; the organisation itself restricts BST to "mentally stable people". **Never stop medication without medical advice.**',
        'SSY is a **complement** to medical treatment – not an alternative. The organisation itself places its cancer rehabilitation programme *after* surgery, chemotherapy or radiation.'
      ] }
    ]
  },

  /* ------------------------------------------------------------ 9. SADHANA */
  {
    id: 'sadhana',
    short: 'Daily sadhana',
    title: 'Daily sadhana after the course – living in Samadhi',
    lead: 'The course is 14 sessions; the practice is for life. This is the daily, weekly and quarterly rhythm that SSY practitioners follow at home (based on disciples\' recommendations and RSVK\'s advice – no single official plan has been published; your teacher\'s guidance is authoritative).',
    blocks: [
      { type: 'h3', text: 'One day' },
      { type: 'table', head: ['Time', 'Practice', 'Duration'], rows: [
        ['Morning (ideally before sunrise – brahma muhurta)', 'The pranayama series learned in the course (with mudras) → Samadhi meditation', '30–45 minutes + 15 minutes'],
        ['Morning', 'A light breakfast – fruit / sprouts / juice; a herbal drink instead of tea or coffee', '–'],
        ['Midday (before lunch / during a work break)', 'Second Samadhi meditation – right where you sit, eyes closed', '15 minutes'],
        ['Lunch', 'Half raw (salad), half cooked sattvic food; at a fixed time', '–'],
        ['Evening / before bed', 'Third Samadhi meditation; ending the day with gratitude', '15 minutes'],
        ['Night', 'A light, early dinner; fewer screens and an early night', '–']
      ] },
      { type: 'p', text: 'In the words of a disciple, the SSY practice in a nutshell: **"meditation for 15 minutes three times a day, combined with pranayama and physical exercise, and vegetarian food with a larger portion of raw food."** Guruji himself ate "simple, vegetarian, largely sun-cooked food – fresh fruit and raw vegetables".' },

      { type: 'h3', text: 'Week, month, year' },
      { type: 'cards', items: [
        { icon: '📅', title: 'Every week', text: 'A follow-up satsang at the local centre – group pranayama, meditation, a discourse by Guruji (audio/video), sharing of experiences. One day a week on fruit or juices (optional).' },
        { icon: '🌙', title: 'Every 3 months', text: 'An AMC (4–5 day silence retreat) – RSVK\'s recommendation. "After an AMC you are fully charged for a few weeks."' },
        { icon: '🔁', title: 'Every 6–12 months', text: 'Repeating BST-1 / BST-2; attending community events such as Guruji Aradhana (February) and Jayanthi (Janmashtami).' },
        { icon: '🙌', title: 'Continuously – seva', text: 'Volunteering at new batches, Children\'s SSY, annadanam, padayatras. In SSY, seva is a sadhana – "from taking to giving".' }
      ] },

      { type: 'h3', text: 'Tips to keep the practice going' },
      { type: 'ul', items: [
        '**Same time, same place** – done right after waking, it is hard to drop.',
        '**Never skip pranayama** – even on a day when meditation does not come, do the pranayama; meditation follows by itself.',
        '**No pressure to "meditate well"** – even if thoughts come, sitting for 15 minutes is the practice. Remember non-doing.',
        '**The strength of satsang** – practice survives better in a group than alone; do not miss the weekly follow-up.',
        '**Food is half the sadhana** – when the diet slips, meditation becomes heavy.',
        '**Read Rishi Vani / Guruvani** – one saying of Guruji a day (the app, books, the organisation\'s social media).',
        '**If you stop, start again** – even after months away you can go to an AMC and restart; no guilt needed.'
      ] },
      { type: 'quote', text: 'Samadhi is not the 15 minutes spent sitting in meditation – it is living the other 23 hours and 45 minutes from that state.', by: 'A summary from SSY practitioners' }
    ]
  },

  /* ------------------------------------------------------------ 10. CHILDREN */
  {
    id: 'children',
    short: 'Children & education',
    title: 'Children, youth and education – from Children\'s SSY to Rishi Gurukulam',
    lead: 'In Guruji\'s view, education is not filling children with information – it is bringing out the "siddha" (perfect) nature already within them. That is why the SSY family has programmes for children from birth to college.',
    blocks: [
      { type: 'cards', items: [
        { icon: '👶', title: 'Infant Siddha Program (ISP)', text: 'For **parents** of children from birth (from conception) to 8 years; pregnant women are eligible too. Methods for teaching babies reading, mathematics, languages and physical skills at an early age (crawling from day one, running), and developing "eight intelligences". Offered in the USA as the "Joyful Parenting Program".' },
        { icon: '🧒', title: 'Children\'s SSY (Ch.SSY)', text: 'A 10-day programme for children aged **7–12** (Mumbai: 8–12), 1–2 hours a day. Games, stories, chart-making, prayer-meditation and "Rajyoga pranayama". Benefits: creativity, memory, concentration, confidence, health. Can be extended into a yearly school curriculum – in 1996 three Mumbai schools introduced two daily meditation periods.' },
        { icon: '🧑‍🎓', title: 'Youth / students', text: 'Some centres run dedicated SSY batches for ages 14–21; seminars on "How to overcome fear of exams and competition"; 100% Memory camps; SSY in colleges (the Symbiosis example).' },
        { icon: '🪔', title: 'Upanayana camp', text: 'A 15–16 day residential camp for boys and girls aged 7+ – Gayatri Upadesha, 4,000 japas a day, discipline, culture. Regardless of gender or caste.' },
        { icon: '🧠', title: '100% Memory Program (HMP/RCRT)', text: 'A 30-day residential summer camp for students of classes 7–10; "speed reading, mind maps, shravana–manana–nididhyasana" to finish a year\'s syllabus in 21–30 days. Now also Digital RCRT online (Pune, since 2020).' },
        { icon: '🏫', title: 'Matrumandir', text: '"Play homes" at nursery, LKG and UKG level – early education with SSY values.' }
      ] },

      { type: 'h3', text: 'Rishi Gurukulam – "the world\'s first 100% memory school"' },
      { type: 'p', text: 'The full form of Guruji\'s vision is **Rishi Gurukulam** – a residential gurukul education system with the CBSE curriculum (classes 1–10; Pune also 11–12). The organisation calls it "the world\'s first 100% memory school". Its mission: **"To create world leaders with the humility of a saint, the knowledge of the learned and the wisdom of a guru."**' },
      { type: 'kv', items: [
        ['Bengaluru (Doddamaralavadi)', 'Rishi Sanskruti Vidya – founded 1982, CBSE'],
        ['Visakhapatnam (Boduvalasa)', 'Rishi Vidyalaya Gurukulam – founded 1997, CBSE, hostel, ~250 students'],
        ['Pune (Katarkhadak, Mulshi)', 'Rishi Gurukulam – "Dyaneshwar Bhoomi", community living; guided by Manoj Lekhi; also the TTC venue']
      ] },
      { type: 'h3', text: 'A day at the gurukulam (published daily routine of Rishi Gurukulam, Pune)' },
      { type: 'table', head: ['Time', 'Activity'], rows: [
        ['5:45', 'Morning gathering, music'],
        ['6:15', 'Run, exercise'],
        ['7:15', 'Breakfast'],
        ['8:40', 'Meditation, assembly'],
        ['9:15', 'Outdoor classes'],
        ['11:00', 'Fruit break'],
        ['11:15', 'Class work'],
        ['12:30', 'Midday meditation'],
        ['12:50', 'Lunch on banana leaves'],
        ['1:30', 'Arts – "Sadhana Hall"'],
        ['4:30', 'Snacks'],
        ['5:00', 'Sports'],
        ['6:30', 'Freshen up'],
        ['7:00', 'Evening meditation'],
        ['7:30', 'Dinner']
      ] },
      { type: 'p', text: 'Meditation three times a day; fresh vegetarian food cooked for every meal; living in villas with a "cultural parent"; conversational Sanskrit, Spanish and Japanese; carpentry and agriculture projects; a resident doctor; a weekly film. Education is built on the five elements (pancha bhutas) – the "Fundamental Educations".' },

      { type: 'h3', text: 'ILRD – Inspirational Leadership in Rural Development' },
      { type: 'p', text: 'A 3-year BA degree designed by Guruji together with the social activist **Anna Hazare** (affiliated to Karnatak University, Dharwad) – "Inspirational Leadership in Rural Development". Run in the gurukul ashram system at the Indian Institute of Inspirational Leadership, Surshetty Kopa near Dharwad; 4 theory papers + 4 field projects a year. The syllabus includes SSY training (pranayama, asanas, Samadhi), pranic food, building a "Satya Sainya", teaching SSY to adults and children, and Anna Hazare\'s model of village development. The goal: not job-seekers but **rural leaders who create hundreds of jobs**.' },
      { type: 'note', kind: 'info', text: 'Claims such as "100% memory" and "super kids" are the organisation\'s own; no independent scientific evaluation is available. Before enrolling children, parents would do well to visit the centre and talk to other parents.' }
    ]
  },

  /* ------------------------------------------------------------ 11. RSVK */
  {
    id: 'rsvk',
    short: 'Organisation – RSVK & ashrams',
    title: 'The organisation: Rishi Samskruti Vidya Kendra (RSVK), ashrams, centres, seva projects',
    lead: 'SSY is run by its parent body, **Rishi Samskruti Vidya Kendra (RSVK)**. Founded "to train gurus for every street", this trust has run for four decades on the strength of volunteers.',
    blocks: [
      { type: 'h3', text: 'RSVK – basic facts' },
      { type: 'kv', items: [
        ['Founded', '18 February 1982, Bengaluru – a public charitable trust (12A registration from 30 December 1982; 80G certified)'],
        ['Founding trustees', 'Guruji Rishi Prabhakar, his mother Ramadevi Amma and a few others'],
        ['Head office', 'No. 34, First Floor, Geetha Education Society, 11th Main Road, 4th Block, Jayanagar, Bengaluru – 560011'],
        ['Contact', 'Phone: +91 99000 23241 / 23256 / 23275 · Email: ssyrsvkho@gmail.com'],
        ['Social media', 'YouTube: @rishisamskrutividyakendra · Facebook: mataannapoorneshwari · Instagram: rsvkbengaluru'],
        ['Current leadership', 'A "core" group of family members and senior disciples; Sri Satish Guruji as Trustee-Secretary (per a 2025 announcement)'],
        ['Purpose', '"To bring out the greatness in everyone." First principle: "We start by knowing that everyone is doing their best."'],
        ['Themes', 'Self-development to national development · Global religious harmony · Clean and green India']
      ] },
      { type: 'p', text: 'Internationally SSY is described as the flagship programme of the "Life Yessence Academy (LiYA)", with RSVK as its Indian chapter. Mumbai/Maharashtra programmes run through ssy.life (Shanta House, JB Nagar, Andheri East, Mumbai – 400059; +91 81088 44444; Admin@ssy.life); US programmes through SSY USA.' },

      { type: 'h3', text: 'Ashrams & gurukulams' },
      { type: 'cards', items: [
        { icon: '🛕', title: 'Doddamaralavadi (Maralwadi), Bengaluru', text: 'Kanakapura taluk, Huyalappanahalli, Karnataka – 562121. **"Sri Matha Annapoorneshwari Rishi Thapokshetra (SMART)"** – the 32-acre main ashram; temple, the site of Guruji\'s Aradhana, the Rishi Sanskruti Vidya school. Guruji lived here in his final years.' },
        { icon: '⛰️', title: 'Katarkhadak, Mulshi, Pune', text: '"Dyaneshwar Bhoomi" – Katarkhadak Hills, 412115. Rishi Gurukulam, the venue for Teacher Training (TTC), "community living".' },
        { icon: '🌊', title: 'Deheri, near Mumbai', text: 'Silence retreats (AMC), weekend retreats; the main camp site for Mumbai practitioners.' },
        { icon: '🏫', title: 'Boduvalasa, Visakhapatnam', text: 'Rishi Vidyalaya Gurukulam (1997) – SSY\'s residential school in Andhra Pradesh, with a hostel.' },
        { icon: '🌾', title: 'Surshetty Kopa, Dharwad', text: 'Campus of the ILRD rural leadership degree – with Anna Hazare.' },
        { icon: '📍', title: 'Others', text: 'The Aurangabad ashram, Puducherry (the Kaya Kalpa Kriya period), Gommatagiri (Mysuru – the 1984 training site). The organisation describes its ashrams as housing sadhana halls, residential education for children, dwellings for families and eco-friendly industries.' }
      ] },

      { type: 'h3', text: 'Centres & reach' },
      { type: 'ul', items: [
        '**India:** ~300 centres by 1996 (strongest in Andhra Pradesh and Karnataka; later Maharashtra, Tamil Nadu, Gujarat); 11 centres in Mumbai alone and ~2,000 volunteers by 2008. A 2006 Business Today report spoke of "100+ ashrams and 700 centres". Active centres in the Telugu states include Hyderabad, Visakhapatnam, Vijayawada and Guntur.',
        '**UAE:** Dubai, Sharjah, Abu Dhabi – ~7,000 people trained by 2007 and the 103rd batch in Dubai; the largest branch outside India.',
        '**USA & other countries:** courses in Silicon Valley since 1997; SSY USA; an "SSY Global Teachers\' Forum"; Canada (Toronto, Ottawa), Japan (Tokyo), Australia, Singapore, China (a course in Shaoxing in 2007), Kenya, Brazil (where research on SSY was also published).'
      ] },

      { type: 'h3', text: 'Seva projects & social programmes' },
      { type: 'cards', items: [
        { icon: '🧹', title: 'Clean & Green India', text: 'From the late 1980s – practitioners adopting and cleaning their neighbourhoods; the organisation says this movement was a forerunner of later national cleanliness campaigns.' },
        { icon: '🏘️', title: 'Village development', text: 'SSY volunteers supporting Anna Hazare\'s 300-model-villages programme in 1996; eliminating tobacco and alcohol addiction in Karnataka villages; the ILRD degree.' },
        { icon: '🕊️', title: 'Religious harmony', text: '"Global Religious Harmony" at ~200 centres in 1996 – a pledge to visit a mosque on Fridays, a church on Sundays and a temple once a week.' },
        { icon: '🍲', title: 'Annaprasada centres & Kumbh Mela seva', text: 'Free-food centres; an RSVK seva camp at the 2025 Prayagraj Maha Kumbh – "Sarve Bhavantu Sukhinah".' },
        { icon: '🎉', title: 'Fun Club International', text: 'Started in Davangere in 1986 – spirituality through joy and play; the idea of "Fun and Yoga".' },
        { icon: '🩺', title: 'Health seva', text: 'Health camps, cancer rehabilitation, "From Medication to Meditation" programmes.' }
      ] },

      { type: 'h3', text: 'How the organisation runs – the volunteer model' },
      { type: 'ul', items: [
        'Courses spread through **volunteers**; each batch is led by an "Acharya" (teacher) with past participants assisting as volunteers.',
        'Teachers are unpaid; under the TTC they must be financially self-sufficient and "live on minimal means".',
        'In earlier years the course was free at many centres (only food and transport for the retreat were charged); RSVK now lists a fixed fee (₹6,000); donations ("Support Now") fund the organisation\'s projects.',
        'The organisation says its gurukulams provide "free and joyful education".'
      ] },
      { type: 'note', kind: 'info', text: 'After Guruji\'s Mahasamadhi, branches such as RSVK (Bengaluru), ssy.life (Mumbai – led by Manoj Lekhi), RPIF (Guruji\'s family) and SSY USA operate with separate web presences. All belong to the same guru lineage; programme details vary slightly by branch.' }
    ]
  },

  /* ------------------------------------------------------------ 12. EVENTS */
  {
    id: 'events',
    short: 'Annual events',
    title: 'Annual festivals and special days in the SSY family',
    lead: 'The occasions on which SSY practitioners gather like a family. Most are held at the Doddamaralavadi ashram (SMART) near Bengaluru; local centres also celebrate them at their own level.',
    blocks: [
      { type: 'table', head: ['Occasion', 'When', 'What happens'], rows: [
        ['Guruji Aradhana', 'February (around the Mahasamadhi day, 16 February)', 'Remembrance of Guruji, group Samadhi meditation, bhajans, annadanam – at Doddamaralavadi, "where Guruji\'s body lay"'],
        ['Guruji Jayanthi – Krishnashtami', 'Sri Krishna Janmashtami (August/September; e.g. 15 August in 2025)', 'Guruji\'s birthday – satsang, seva, the start of new batches'],
        ['RSVK anniversary', '18 February', 'The day the trust was founded in 1982'],
        ['Bhagwan Visveswaraya Aradhana', '5 March', 'Remembrance of Guruji\'s guru, "Nada Brahma" Sri Bhagwan Visveswaraya'],
        ['Gurumatha Aradhana', 'Late March / April (e.g. 4 April 2025; 25 March 2026)', 'Remembrance of Guruji\'s mother and "first student" Ramadevi Amma (she passed away on 19 April 2021, aged 93)'],
        ['"Guru Poornima" (ashram form)', 'April (per the RSVK calendar – the day the temple was established)', 'Anniversary of the SMART temple; centres also mark the traditional Ashadha Guru Purnima (July) with satsang'],
        ['Gurumatha Jayanthi', '4 July', 'Gurumatha\'s birthday'],
        ['Chaturmasya', '10 July – 15 September (approx.)', 'A four-month period of special sadhana and satsang'],
        ['Sharannavaratri music festival', 'September / October', 'A festival of music and devotion at the ashram (e.g. October 2026)'],
        ['Vishwa Hrudaya Sammelana (VHS)', 'At a set time each year', 'The worldwide gathering of the SSY family – satsang, cultural programmes'],
        ['Sri Raghavendra Swamy Aradhana Seva', 'Shravana month (August)', 'A seva programme at the ashram'],
        ['Silence camps (AMC) & BST', 'Through the year, especially in holidays', '4–5 day residential camps at the ashrams'],
        ['Kumbh Mela seva', 'During Kumbh Melas (e.g. Prayagraj 2025)', 'Annadanam and camp management by RSVK volunteer teams']
      ] },
      { type: 'note', kind: 'tip', text: 'For newcomers these events are a good way to see the SSY family and the ashram atmosphere up close. Dates change every year – see the [RSVK events page](https://www.rsvk.org/events-1).' }
    ]
  },

  /* ------------------------------------------------------------ 13. BOOKS */
  {
    id: 'books',
    short: 'Books & publications',
    title: 'Guruji\'s writings, books and publications',
    lead: 'Guruji\'s teachings are available as books, audio discourses and short "Upanishad" titles. They are distributed through RSVK\'s publications wing (at ashrams and course centres).',
    blocks: [
      { type: 'h3', text: 'Main books' },
      { type: 'cards', items: [
        { icon: '📘', title: 'Yoga Starts with Samadhi', text: 'The core philosophy of SSY – the idea that Samadhi is the first step. A book worth reading for everyone who has done SSY.' },
        { icon: '🍎', title: 'Amrut Ahar', text: 'Natural food, the fruit diet, fasting, the body\'s self-healing – the basis of SSY\'s philosophy of food.' },
        { icon: '👑', title: 'Living Life King Size on an Empty Wallet', text: 'Living abundantly without money – the experience of "total sufficiency" (published 2012).' },
        { icon: '👁️', title: 'Vision is Dangerous', text: 'On living in the present rather than running after future goals.' },
        { icon: '🔥', title: 'Transcending Sex to Spirituality', text: 'The transformation from desire to spirituality – on the upward movement of energy.' },
        { icon: '🌌', title: 'Viswaroop Darshan', text: 'The vision of the universal form – wholeness of vision, oneness with the universe.' }
      ] },
      { type: 'h3', text: 'The "Upanishad" series' },
      { type: 'p', text: 'Short books Guruji wrote in the style of the ancient Upanishads on themes of modern life:' },
      { type: 'ul', items: [
        '**Naishkarmayopanishad** – the state of non-action, non-doing.',
        '**Aishwaryopanishad** – wealth and abundance.',
        '**Sanyasopanishad** – what true renunciation is.',
        '**Nayakatvopanishad** – leadership.',
        '**Vivahopanishad** – marriage and married life.',
        '**Srujanatmaktvopanishad** – creativity.',
        '**Shishyopanishad** – discipleship, the guru–disciple relationship.'
      ] },
      { type: 'h3', text: 'Other publications' },
      { type: 'ul', items: [
        'About **50 audio discourses** (originally cassettes, now digital) – satsangs and guided meditations, including "From Medication to Meditation", "Enlightened Students and Managers" and "Food, Fasting and Natural Cosmetics".',
        '**Divine Satsang** (2015) – Guruji\'s satsangs compiled by Arundhati Rishi Prabhakar.',
        '**SSY Guruvani** – a mobile app of Guruji\'s sayings (built by a third party).',
        'Course manuals and "100% Memory" textbooks (RCRT) for Rishi Gurukulam students.'
      ] },
      { type: 'note', kind: 'info', text: 'Books are available from the RSVK publications page ([rsvk.org/publications](https://www.rsvk.org/publications)) and at course centres. Some Telugu, Kannada, Marathi and Hindi translations are available at local centres.' }
    ]
  },

  /* ------------------------------------------------------------ 14. FAQ */
  {
    id: 'faq',
    nav: 'FAQ',
    short: 'Frequently asked questions',
    title: 'Frequently asked questions (FAQ)',
    lead: 'The questions newcomers and course graduates ask most often about SSY – with straight answers.',
    blocks: [
      { type: 'h3', text: 'Basic questions' },
      { type: 'accordion', items: [
        { q: 'Is SSY a religion? Can non-Hindus do it?', a: 'SSY belongs to no religion. It is a programme of breath, meditation, food and life values. Muslims, Christians, Jains, Sikhs and atheists have done it and do it. Because it comes from the Indian yoga tradition there are Sanskrit terms, bhajans and prayers; whether to join in those is each person\'s own decision according to their faith. Guruji himself said "unity, love and brotherhood are the only true religions" and in 1996 ran a religious-harmony pledge programme.' },
        { q: 'Some people say "Siddhi Samadhi Yoga" – which is correct?', a: 'The official name is **Siddha Samadhi Yoga**. "Siddha" means proven, perfected; "siddhi" means supernatural powers. SSY is not about siddhis (powers) – it is about Samadhi (the natural state of stillness). You will hear "Siddhi Samadhi" in casual use, but it is not the correct name.' },
        { q: 'How is SSY different from Art of Living (Sudarshan Kriya), Isha Yoga or Vipassana?', a: ['All are breath-and-meditation based programmes, but the focus differs. **SSY**: "non-doing" – allowing the state of Samadhi naturally without forcing any technique; an integrated programme that combines food purification, knowledge discussions and silence; volunteer teachers; low cost.', '**Vipassana**: 10 days of complete silence, observation of bodily sensations – a rigorous solitary practice. **Art of Living**: centred on Sudarshan Kriya, a rhythmic breathing process. **Isha**: kriyas such as Shambhavi Mahamudra; according to press reports Isha\'s founder was an SSY teacher in 1984 (a contested point). Which is "best" depends on the person – many people have done more than one.'] },
        { q: 'I know nothing about meditation – can I do SSY?', a: 'Yes – SSY was designed precisely so that "anyone can do it easily". No prior experience or knowledge of yoga postures is needed. For many people it is their first experience of meditation.' },
        { q: 'Is there an age limit?', a: 'Adult SSY is generally for ages 14 and above, with no upper limit – people in their 70s and 80s do it (with pranayama modifications if needed). Children aged 7–12 have Children\'s SSY; parents of children aged 0–8 have the Infant Siddha Program.' },
        { q: 'How many days is the course? How much time each day?', a: 'The current official form is 14 sessions (2–3 hours each) plus a 3½–4 day residential silence retreat. Depending on the centre it may be described as "10 days" or "12 days" – a morning batch (e.g. 5:00–8:00 a.m.) or an evening batch.' },
        { q: 'What is the fee? Is it free?', a: 'RSVK\'s official site currently lists ₹6,000 (online/offline). In earlier years the course was free at many centres – only food and transport for the retreat were charged. It varies by centre and country; concessions exist for students and those in need. Teachers draw no salary.' },
        { q: 'Can I do it online?', a: 'Yes – RSVK lists "online via Zoom and offline"; some centres (e.g. Hyderabad) run online classes. But the silence retreat (AMC) is in person, and practitioners report that the in-person course is a deeper experience.' }
      ] },

      { type: 'h3', text: 'About the course experience' },
      { type: 'accordion', items: [
        { q: 'Do I have to fast completely during the course?', a: 'No. In the basic course you eat raw, sattvic food (fruit, salads, juices, sprouts) at set times – a change of diet, not a fast. Food is partly reduced during the AMC silence retreat. If you have conditions such as diabetes the teacher will suggest modifications.' },
        { q: 'Do I have to give up tea and coffee completely?', a: 'During the course, yes – replaced by herbal drinks such as ginger or lemongrass. You may get a headache for the first 2–3 days; after that most people lose the craving. After the course the decision is yours.' },
        { q: 'I feel dizzy / tingling during pranayama – is that normal?', a: 'Mild dizziness or tingling in the hands is common at first with rapid breathing patterns – tell the teacher at once, slow down or take a break. Do not force it. If there is severe discomfort or chest pain, stop and consult a doctor.' },
        { q: 'My thoughts will not stop during meditation – have I failed?', a: 'No. SSY does not ask you to stop thoughts – it asks you not to fight them. Noticing "thoughts are coming" is itself the path to Samadhi. If you sat for 15 minutes, the practice happened. That is non-doing.' },
        { q: 'They say people cry and emotions come out in the course – is that true?', a: 'Yes. In the emotional workshops and sharing sessions, suppressed feelings (grief, anger, gratitude) surface for many people – this is natural and healthy. Nobody is forced; you share only as much as you wish. People under mental-health treatment should inform the teacher and their doctor beforehand.' },
        { q: 'Is the silence retreat (AMC) compulsory?', a: 'The 3½–4 day retreat that is part of the basic course is the peak of the course – go if you possibly can; many say "that is where SSY really made sense". After that an AMC every 3 months is recommended – not compulsory, but very helpful for keeping the practice alive.' },
        { q: 'What if I miss a session?', a: 'Because each session builds on the previous one, full attendance is the rule. If it is unavoidable, talk to the teacher – some centres allow you to complete that session in the next batch.' }
      ] },

      { type: 'h3', text: 'After the course' },
      { type: 'accordion', items: [
        { q: 'How much daily practice is needed after the course?', a: 'The recommendation: morning pranayama (30–45 minutes) plus 15 minutes of Samadhi meditation one to three times a day. If time is short, shorten the pranayama and keep the meditation. Details in the [Daily sadhana](#sadhana) section.' },
        { q: 'Can I do the course again?', a: 'Yes. Many people repeat SSY (as "repeaters") or help new batches as volunteers – both strengthen the practice. The repeat policy depends on the centre.' },
        { q: 'How do I become an SSY teacher?', a: 'After completing SSY and AMC, volunteering at classes, running a Children\'s SSY camp and completing BST-1 and 2, you can take the 4-phase Teachers Training Course (TTC) at the Katarkhadak ashram, Pune. Details in the [SSY phases](#phases) section. Teachers are unpaid – it is a path of seva.' },
        { q: 'What about SSY for my children?', a: 'A 10-day Children\'s SSY for ages 7–12 (1–2 hours a day); the Infant Siddha Program for parents of young children; a 30-day 100% Memory summer camp for classes 7–10. Details in the [Children & education](#children) section.' }
      ] },

      { type: 'h3', text: 'Doubts & criticism' },
      { type: 'accordion', items: [
        { q: 'They say SSY "cures all diseases" – is that true?', a: 'The benefits of pranayama, meditation and dietary change for stress-related problems such as anxiety, sleep and blood pressure are confirmed by research (including a 2008 study on SSY in Psychological Reports). But claims such as "cures cancer" or "reverses ageing" (Kaya Kalpa Kriya) have no independent scientific support. The organisation itself places its cancer rehabilitation *after* medical treatment. See SSY as a complement to medicine, not a substitute.' },
        { q: 'Is there any criticism of SSY?', a: ['Honestly, yes – as with any large organisation:', '• Some participants wrote that the course at first felt "trite and cliché" and the rules strict – yet said they benefited in the end.', '• Claims such as 100% memory, super kids and Kaya Kalpa have not been independently verified.', '• In 2010 newspapers (Deccan Herald, India Today) reported that Guruji\'s wife filed complaints under the Domestic Violence Act in an Aurangabad court; some secondary sources say they were later withdrawn after a reconciliation; she published a book of Guruji\'s satsangs in 2015 and runs the family foundation. No court outcome is publicly documented.', '• The dispute over Sadhguru (Isha) having left SSY and the similarity of teachings.', '• Inconsistency in programme details because branches have worked separately since Guruji\'s Mahasamadhi.', 'The purpose of this site is not to praise SSY but to show it fully – the decision is yours.'] },
        { q: 'Is SSY like a cult? Will I be tied down?', a: 'The SSY basic course is a two-week public programme; there is no obligation after it – lakhs of people have done the course and gone on with their lives. Teacher training (TTC) does ask for deep commitment (community living, minimal means) – that is voluntary, and a very advanced stage. As with any organisation: keep your own judgement, financial independence and family relationships; you are always free to stop if something feels wrong.' },
        { q: 'How does SSY run now, without Guruji?', a: 'Since Guruji\'s Mahasamadhi in 2014, RSVK has been led by a "core" group of family members and senior disciples, with Sri Satish Guruji as Trustee-Secretary. Courses continue as before through volunteer teachers; the 2025 Kumbh Mela seva and the 2026 festival calendar show that the organisation is active. Guruji\'s discourses are played in audio/video form at satsangs.' }
      ] }
    ]
  },

  /* ------------------------------------------------------------ 15. GLOSSARY */
  {
    id: 'glossary',
    short: 'Glossary',
    title: 'SSY glossary – words you will hear in the course',
    lead: 'The Sanskrit and English terms that come up often in SSY satsangs and publications – with simple meanings.',
    blocks: [
      { type: 'glossary', items: [
        { term: 'Siddha', sa: 'सिद्ध', def: 'Proven, perfected, already accomplished (knowledge). Not "siddhi" (powers).' },
        { term: 'Samadhi', sa: 'समाधि', def: 'The natural state in which the mind is equanimous, still and beyond dualities – the "first step" in SSY.' },
        { term: 'Yoga', sa: 'योग', def: 'Union – the individual becoming one with their higher nature, with the whole.' },
        { term: 'Non-doing / Akarma', sa: 'अकर्म', def: 'The state of not "doing"; effortless being – SSY\'s core principle. "Doing unwillingly is work; non-doing is play and worship."' },
        { term: 'Naishkarmya', sa: 'नैष्कर्म्य', def: 'The state free of the bondage of action (Bhagavad Gita) – the theme of Guruji\'s "Naishkarmayopanishad".' },
        { term: 'Brahmopadesam', sa: 'ब्रह्मोपदेश', def: 'Initiation into the knowledge of Brahman – the rishis\' instruction in the science of silence/non-doing; the organisation calls SSY its modern form.' },
        { term: 'Pancha kosha', sa: 'पञ्चकोश', def: 'The five sheaths: annamaya (body), pranamaya (life energy), manomaya (mind), vijnanamaya (intellect), anandamaya (bliss). "Pancha kosha shuddhi" – purification of all five.' },
        { term: 'Swasthya', sa: 'स्वास्थ्य', def: 'Being established in "swa" (oneself) – health at all five koshas.' },
        { term: 'Prana', sa: 'प्राण', def: '"The energy behind all motion" – life force.' },
        { term: 'Pranayama', sa: 'प्राणायाम', def: 'SSY\'s definition: "extending the field of prana" – not merely a breathing exercise.' },
        { term: 'Chin / Chinmaya mudra', sa: 'चिन्मुद्रा', def: 'Hand gestures used in pranayama – thumb and index finger joined (chin); the other fingers folded (chinmaya).' },
        { term: 'Vajrasana', sa: 'वज्रासन', def: 'The kneeling posture – the usual seat for SSY pranayama.' },
        { term: 'Shatkriyas', sa: 'षट्क्रिया', def: 'The six cleansing practices of hatha yoga – introduced in the food class.' },
        { term: 'Sattvic / Rajasic / Tamasic', sa: 'सात्त्विक / राजसिक / तामसिक', def: 'The qualities of food, body and mind – stillness / agitation / dullness.' },
        { term: 'Pranic food', sa: '', def: 'Classification of food by life energy – positive (fruit, sprouts), zero (potato), negative (meat, onion, garlic, alcohol…).' },
        { term: 'Amrut Ahar', sa: 'अमृत आहार', def: '"Nectar food" – Guruji\'s philosophy of food, and his book.' },
        { term: 'Mouna', sa: 'मौन', def: 'Withdrawal from talking, (partly) food and goal-orientation – in SSY an "inclusive silence" kept in a group with the eyes open.' },
        { term: 'AMC / Nitya Samadhi', sa: '', def: 'Advanced Meditation Course – a 4–5 day residential silence retreat; recommended every 3 months.' },
        { term: 'Bhava', sa: 'भाव', def: 'Emotion, the state of the heart. "Bhava Samadhi" – Samadhi in the heart.' },
        { term: 'BST', sa: '', def: 'Bhava Samadhi Training – BST-1 (truth), BST-2 (dharma); 4-day residential programmes.' },
        { term: 'Satya Narayana Vrat', sa: 'सत्यनारायण व्रत', def: 'In SSY, "the vow of truth" – the pledge to live in complete honesty (the basis of BST-1).' },
        { term: 'Dharma', sa: 'धर्म', def: 'Right action, the order of life – the theme of BST-2.' },
        { term: 'TTC', sa: '', def: 'Teachers Training Course – the 4-phase SSY teacher training at the Katarkhadak ashram, Pune.' },
        { term: 'Acharya', sa: 'आचार्य', def: 'The teacher who leads an SSY batch.' },
        { term: 'Sevak / volunteer', sa: 'सेवक', def: 'A past participant who serves voluntarily at courses.' },
        { term: 'Nobody-ness / Nobody sadhana', sa: '', def: '"Being nobody" – the Samadhi experience without name, position or ego; the TTC Phase-3 practice.' },
        { term: 'Satsang', sa: 'सत्संग', def: '"Company of truth" – a gathering for group meditation, discourse and discussion; weekly after the course.' },
        { term: 'Rishi Vani / Guruvani', sa: '', def: 'Guruji\'s sayings and teachings – publications and the app.' },
        { term: 'Kaya Kalpa Kriya (KKK)', sa: 'कायकल्प क्रिया', def: 'A body-rejuvenation kriya – the advanced practice Guruji developed in Puducherry.' },
        { term: 'HMP / RCRT', sa: '', def: '100% Memory Program / Rapid Comprehension & Review Technique – the memory and speed-reading camp for students.' },
        { term: 'ISP', sa: '', def: 'Infant Siddha Program – the programme for parents of children aged 0–8.' },
        { term: 'Ch.SSY', sa: '', def: 'Children\'s SSY – the 10-day SSY for ages 7–12.' },
        { term: 'ILRD', sa: '', def: 'Inspirational Leadership in Rural Development – the 3-year BA degree designed with Anna Hazare.' },
        { term: 'RSVK', sa: '', def: 'Rishi Samskruti Vidya Kendra – SSY\'s parent trust (Bengaluru, 1982).' },
        { term: 'SMART', sa: '', def: 'Sri Matha Annapoorneshwari Rishi Thapokshetra – the main ashram and temple at Doddamaralavadi.' },
        { term: 'Aradhana', sa: 'आराधना', def: 'The annual day of remembrance of a guru (Guruji – February; Gurumatha – March/April).' },
        { term: 'Mahasamadhi', sa: 'महासमाधि', def: 'A yogi\'s conscious departure from the body – Guruji, 16 February 2014.' },
        { term: 'Yoga Brahma / Brahmarshi', sa: 'योगब्रह्म / ब्रह्मर्षि', def: 'Titles conferred on Guruji by scholars.' },
        { term: 'Trusteeship', sa: '', def: 'Gandhi\'s idea – everything we have, we hold as trustees on behalf of society; taught in the SSY responsibility session.' },
        { term: 'Total Sufficiency', sa: '', def: 'The idea Guruji proposed in 1987 – nature has given everything; scarcity is a creation of the mind.' },
        { term: 'Vishwa Hrudaya Sammelana (VHS)', sa: 'विश्व हृदय सम्मेलन', def: 'The annual worldwide gathering of the SSY family.' },
        { term: 'Padayatra', sa: 'पदयात्रा', def: 'A walking pilgrimage – part of TTC Phase 3 (5 days with 30 people) and of cancer rehabilitation (30 days).' }
      ] }
    ]
  },

  /* ------------------------------------------------------------ 16. RESOURCES */
  {
    id: 'resources',
    short: 'Resources & joining a course',
    title: 'How to join a course – official resources & links',
    lead: 'These official resources help you learn more about SSY and find the details of a course near you.',
    blocks: [
      { type: 'h3', text: 'How to join a course' },
      { type: 'steps', items: [
        { title: 'Find a centre near you', text: 'Through the RSVK website, SSY Facebook pages or local SSY teachers, find the next batch in your city (Hyderabad, Vijayawada, Visakhapatnam, Bengaluru, Chennai, Pune, Mumbai, Dubai, the USA…).' },
        { title: 'Attend an introductory satsang', text: 'Most centres hold a free introductory talk before the course – you can ask questions there.' },
        { title: 'Register', text: 'Give your name, age and health details and register. The course donation/fee varies by centre; concessions are available for students.' },
        { title: 'Attend all 14 sessions', text: 'Attendance at every session matters – each day builds on the previous one.' },
        { title: 'Continue the practice & come to follow-ups', text: 'Daily sadhana after the course, a weekly group satsang (follow-up), then the next steps such as BST and AMC.' }
      ] },
      { type: 'h3', text: 'Official websites' },
      { type: 'ul', items: [
        '[rsvk.org](https://www.rsvk.org/) – the official website of Rishi Samskruti Vidya Kendra (about Guruji, programmes, events, publications, Rishi Gurukulam).',
        '[ssy.life](https://www.ssy.life/) – the SSY (Mumbai/Maharashtra) website – ashrams, course details.',
        '[rpif.org.in](https://rpif.org.in/) – the Rishi Prabhakar International Foundation (run by Guruji\'s family; sayings, Digital RCRT).',
        '[ssy.org](https://ssy.org/) – the international SSY portal (sometimes unavailable).',
        '[Wikipedia – Rishi Prabhakar](https://en.wikipedia.org/wiki/Rishi_Prabhakar) – a short biography.'
      ] },
      { type: 'h3', text: 'Main sources used in this guide' },
      { type: 'ul', items: [
        'Official RSVK pages – About Us, Programs, Projects, Rishi Gurukulam, Publications, Events.',
        'Life Positive magazine – the Guruji interview "The Spirit of Change" (1996) and "Steeped in Gratitude".',
        'Khaleej Times (2007) – report on the SSY silver jubilee and the Dubai centre.',
        'The Tribune (2004) – the corporate SSY camp in Ludhiana.',
        'Elijah Interfaith Institute – the Board of World Religious Leaders profile.',
        'Newslaundry (2021), Deccan Herald, Wikipedia – historical and critical reporting.',
        'Blogs and accounts of past practitioners – for the day-to-day details of the course.'
      ] },
      { type: 'note', kind: 'warn', title: 'Important note', text: 'This website is **not** the official site of RSVK or the SSY organisation; it is an independent, voluntary information guide. Course dates, fees and centre addresses change over time – consult the official resources before making decisions. Anyone with health conditions should take medical advice before starting any practice.' }
    ]
  }
  ],
  footer: {
    aboutTitle: 'About this site',
    about: 'An independent guide created to bring together comprehensive information about Siddha Samadhi Yoga (SSY) in one place, in Telugu and English. Compiled from the official RSVK website, Guruji\'s interviews, press reports, published research and practitioners\' experiences.',
    disclaimer: 'This is not the official website of RSVK / SSY. Course details may change; take medical advice on health matters.',
    linksTitle: 'Official links',
    links: [
      { label: 'RSVK – rsvk.org', href: 'https://www.rsvk.org/' },
      { label: 'SSY Life (Mumbai) – ssy.life', href: 'https://www.ssy.life/' },
      { label: 'Rishi Prabhakar International Foundation', href: 'https://rpif.org.in/' },
      { label: 'RSVK YouTube', href: 'https://www.youtube.com/@rishisamskrutividyakendra' },
      { label: 'Wikipedia – Rishi Prabhakar', href: 'https://en.wikipedia.org/wiki/Rishi_Prabhakar' }
    ],
    quickTitle: 'Quick links',
    credit: '© 2026 · Siddha Samadhi Yoga guide · a voluntary information project · last updated November 2026 · source code on [GitHub](https://github.com/TheRandomDev9/SSY).'
  }
};
