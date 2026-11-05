/* programs – catalogue of all programmes */
module.exports = {
  id: 'programs',
  title: 'The complete catalogue of SSY / RSVK programmes – every programme: for whom, how many days, eligibility, where',
  short: 'Programme catalogue (all)',
  lead: 'Every programme Guruji designed, in one place – following RSVK\'s official classification (Foundational · Education · Health · Management · Teacher Training), plus the other special camps and community projects. For each: who it is for, duration, whether it is residential, eligibility, how often, fee (as far as known) and where.',
  blocks: [
    { type: 'h2', text: 'At a glance – table of all programmes' },
    { type: 'table', head: ['Programme', 'For whom', 'Duration', 'Residential?', 'Eligibility', 'How often', 'Fee (as far as known)'], rows: [
      ['**SSY** – Siddha Samadhi Yoga', 'Adults 14+', '14 sessions × 2–3 h + 3½-day AMC', 'No (+ residential AMC)', 'Anyone', 'Once; repeats allowed', '₹6,000 (RSVK, online/offline)'],
      ['**AMC** – Advanced Meditation Course', 'Those who have completed SSY', '4 days (Mumbai: 5)', 'Yes', 'SSY', 'Every 3 months', 'Depends on the centre'],
      ['**BST 1 & 2** – Bhava Samadhi Training', 'SSY + AMC; mentally stable', '4 + 4 days (RSVK: 8 days + 1 month of preparation)', 'Yes', 'SSY, AMC', 'Every 6 months', 'Depends on the centre'],
      ['**TTC** – Teachers Training Course (Phases 1–5)', 'Senior practitioners', 'Years (phase by phase)', 'Partly (ashram camps)', 'SSY, AMC, seva, Ch.SSY, puja test…', 'Phase by phase', 'Not published'],
      ['**ISP** – Infant Siddha Program', 'Parents of children aged 0–8, expectant mothers, those planning a child', 'Not published', 'No', 'Anyone', 'Once', 'Not published'],
      ['**Ch.SSY** – Children\'s SSY', 'Children aged 7–12', '10 days × 1–2 h', 'No / also as a residential camp', 'Anyone', 'Once; extendable as a school curriculum', 'Depends on the centre'],
      ['**HMP / RCRT** – 100% Memory Program', 'Students of classes 7–10', '30 days (4-week batches)', 'Yes', 'Anyone', 'Summer (April–May; international: June–July)', '₹45,000 (RSVK 2026)'],
      ['**Upanayana camp** – Gayatri upadesha', 'Girls and boys aged 7+', '14–16 days', 'Yes', 'Anyone', 'Summer batches', 'The site shows "$20,000" – possibly a currency error; ask the organisation'],
      ['**Rishi Gurukulam** (RVG)', 'Classes 1–10 (Pune: 11–12)', 'Full academic years', 'Yes (residential school)', 'Entrance test/interview', '—', 'Free education according to the organisation; verify'],
      ['**ILRD** – BA in rural leadership', 'Those who have passed Intermediate/class 12', '36 months', 'Yes (gurukul ashram)', 'University admission rules', '—', 'Not published'],
      ['**Matrumandir** (RVM)', 'Nursery–UKG children & mothers', 'Full year', 'No', '—', '—', 'Not published'],
      ['**Exam-fear seminar**', 'Students', 'One seminar', 'No', 'Anyone', 'Before exams', 'Not published'],
      ['**Arogya Shibir**', 'Patients, those seeking health', 'Depends on the camp', 'Usually yes', '—', 'As announced', '—'],
      ['**Heart disease reversal / diabetes programme**', 'Heart and diabetes patients', 'Not published', '—', 'Alongside medical treatment', '—', '—'],
      ['**Cancer rehabilitation**', 'Patients who have completed surgery/chemo/radiation', '15 + 30 + 30 days; then a 3-day "Level II" retreat once a month', 'Yes', 'Medical treatment completed', 'Once + monthly retreats', '—'],
      ['**Joy Therapy**', 'Cancer rehabilitation, others', '30 days', 'Yes', '—', '—', '—'],
      ['**Corporate SSY**', 'Employees of organisations', '10–15 days (e.g. Vardhman: 15; Dubai: 10)', 'No (+ 2-day retreat)', 'Through the organisation', 'By agreement', 'Agreement with the organisation'],
      ['**Manager retreat**', 'Managers, executives', 'Weekend / 2 days', 'Yes', 'SSY (usually)', 'Once a month', '—'],
      ['**KKK** – Kaya Kalpa Kriya (YSS / LLP)', 'Senior practitioners', 'Depends on the camp', 'Yes', 'SSY+', 'Announced specially', '—'],
      ['**Brahmacharya Programme**', 'Youth (an alternative entry route to TTC)', 'Not published', 'Yes', '—', '—', '—'],
      ['**SSY Expression**', 'Those who have completed SSY (Mumbai)', '5–6 one-day segments', 'No', 'SSY', '—', '—'],
      ['**Being with Guruji / Brahmotsav / VHS**', 'All practitioners', '2–4 days', 'Yes', 'SSY', 'Yearly', 'Donation'],
      ['**Padayatra**', 'TTC Phase 3; cancer rehabilitation', '5 days / 30 days', 'On the road', '—', 'Special', '—']
    ] },
    { type: 'note', kind: 'info', text: 'Fees are from the RSVK booking page (2026); most programmes show "This service is not available, please contact for more information"; in Mumbai (ssy.life) enrolment is through an enquiry form. In the past the course was free at many centres – only the camp food and transport costs.' },

    { type: 'h2', text: 'Foundational programmes' },
    { type: 'cards', items: [
      { icon: '🧘', title: 'Siddha Samadhi Yoga (SSY)', text: 'RSVK: "A residential or non-residential program wherein the participant is initiated into a life of self realisation." 14 sessions + a 3½-day AMC. Motto: "Take a Journey from Illness to Health, and from Anxiety to Happiness." → [The basic course](course.html)' },
      { icon: '🤫', title: 'Advanced Meditation Course (AMC)', text: 'RSVK: "A journey into realising godliness in everyone and merging in nature in total silence." A 4-day residential silence retreat; "a stepping stone into the world of Gods"; "a shift from reactive responses to the state of creativity". → [AMC](amc.html)' },
      { icon: '❤️', title: 'Bhava Samadhi Training (BST)', text: 'RSVK: "Bhava Samadhi Training is an experience of ecstasy… the participants undergo a metamorphosis and experience \'everybodiness\' (oneself in everyone)… a new level of deep love towards all." 8 days + 1 month of preparation; "discover the power of Sri Satyanarayana Vratha"; "like seeing yourself naked without any barriers of Ego coming in the way"; participants "rise from leadership to wisdom" and become capable of taking up large responsibilities such as earthquake relief, taking care of destitutes and setting up food distribution centres. → [BST](bst.html)' }
    ] },

    { type: 'h2', text: 'SSY in Education' },
    { type: 'cards', items: [
      { icon: '👶', title: 'Infant Siddha Program (ISP)', text: '"Parents trained to teach babies to read, do maths and encyclopedic knowledge and become physically superb." Developing the baby\'s intelligence in the womb itself; the brain grows to 50% in the first 4 years; a 3-year-old can read like an adult and do binary maths; 10+ languages before the age of 4 – these are the organisation\'s claims. Purpose: developing both sides of the brain, the "Love of Learning", a happy child, the bond between mother, father and child. Eligibility: those planning a child, expectant mothers, parents of children under 8, and those who wish to contribute to children\'s development.' },
      { icon: '🧒', title: 'Children\'s SSY (Ch.SSY)', text: '"Children learn about inner silence and greatness of living through the science of non-doing, and become happy self disciplined bundles of energy." The premise: "they are already reaching for their greatness… Their heart is already open and what they need to learn is to express the greatness in terms that the intellect can perceive." 10 days, 1–2 h, ages 7–12; games, stories, charts, prayer–meditation, Rajyoga Pranayama. Changes: creativity, memory, concentration, confidence, responsibility, a balanced personality, health.' },
      { icon: '🧠', title: '100% Memory Program (HMP / RCRT)', text: 'Motto: **"Genius understands and remembers forever. Good students understand and forget. Poor students memorise without understanding."** With Samadhi and Vedic study methods, what is studied is stored in the subconscious memory for life. Two kinds of memory: conscious (like a computer\'s RAM – limited) and subconscious (the hard disk – infinite). The "Karna syndrome": just as Karna forgot the mantra in the tension of the war, children forget in the exam hall – hence 10 minutes of silence/Samadhi before an exam. Benefits: speed reading of 200–300 pages an hour, revision in minutes, never forgetting. A 30-day residential summer camp; 2026 batches: 4 April–2 May, 3–31 May; ₹45,000; Geography, Biology, Chemistry, Physics and Mathematics in 4 weeks. Development: experiments from 1997 → success with average students in 2003 → a year\'s syllabus in 21–30 days in 2008. Now also Digital RCRT online.' },
      { icon: '🪔', title: 'Upanayana camp (Ch.SSY & Upanayana Camp)', text: '"At the age of 7 upwards, this Upadesha is done for the period of 16 days. Children perform 4,000 japas a day in a systematic manner as per prescribed ancient norms." For both girls and boys – "the best essential VIDYA to grow as real leaders in life as a Universal citizen"; everyday practice of Sandhya Vandana & sadhana. "Competition changes to co-operation." 2026 batches: 4–18 April, 18 April–2 May, 2–16 May, 16–30 May – SMART ashram, Doddamaralavadi. Registration through a Google form.' },
      { icon: '🏫', title: 'Rishi Gurukulam (RVG) – "World\'s first 100% memory school"', text: 'CBSE-recognised, classes 1–10; the gurukul system + modern education; SSY principles, the HMP technique, meditation three times a day; branches: Bengaluru (Doddamaralavadi, 1982), Visakhapatnam (Bodduvalasa, 1997), Pune (Katarkhadak). → [Children & education](children.html)' },
      { icon: '🌾', title: 'ILRD – Inspirational Leadership in Rural Development', text: 'A joint vision of Guruji and Anna Hazare; the Indian Institute of Inspirational Leadership, Surshetty Kopa, Dharwad; a 3-year degree affiliated to Karnataka University; 36 months, with a week\'s vacation every 6 months; each year 4 theory papers (40 h) + 4 field projects (150 h); 800 marks a year, 2400 in all. Aim: individuals "who create job opportunities rather than seek employment"; senior students mentor juniors; the syllabus is updated to rural needs.' },
      { icon: '🎶', title: 'Matrumandir (Mathru Mandira / RVM)', text: '"Mother and child celebrate life and new learnings everyday through music and dance. Teachings of the infant program are practiced here." Play homes for Nursery, LKG and UKG.' },
      { icon: '📝', title: 'How to Overcome Fear of Exams and Competition – seminar', text: '"A must for all students, in this seminar, the mind can be charged with calmness and clarity by infusing prana, loosening the body, meditating and gaining the right understanding."' }
    ] },

    { type: 'h2', text: 'SSY in Health' },
    { type: 'p', text: 'RSVK\'s health programmes: **Arogya Shibir**, **Reversal of Heart Disease**, **Cure for Diabetes**, **Cancer Rehabilitation** and **Joy Therapy**. Of these, the one published in detail is the cancer rehabilitation protocol:' },
    { type: 'steps', items: [
      { meta: 'Before', title: 'Medical treatment completed', text: 'RSVK: "In India, Cancer is detected very late… Detection is usually at the third stage. This invariably requires surgery or chemotherapy or radiation. After this treatment, we start our intervention at our centre." Only after treatment by qualified cancer specialists.' },
      { meta: '15 days', title: 'Detoxification', text: 'Under naturopathy and Ayurveda treatment; healthy eating and exercise.' },
      { meta: '30 days', title: 'SSY Joy Therapy', text: 'Asanas, pranayama, meditation and "lots of fun and play" – "A surge of enchantment to live begins to happen immaterial of past conditions. Regression begins to happen."' },
      { meta: '30 days', title: 'Padayatra', text: '"To experience pure blessings from the universe"; independence from the previous struts (including family) that caused the disease – the confidence to change one\'s style of living.' },
      { meta: 'Then', title: 'Placement in a seva environment + monthly retreat', text: 'Placement in "a supportive environment" where life is useful and joyful; "3-day Level II retreats once a month for many years to keep their enthusiasm for life alive".' }
    ] },
    { type: 'note', kind: 'warn', text: 'RSVK describes cancer as caused by "unbearable physical or mental load on a good person who feels cheated by society or circumstances" – this is the organisation\'s philosophical view, not a medical finding. These programmes are only a **complement** to medical treatment. There is no independent evidence for "cancer cure" claims.' },

    { type: 'h2', text: 'SSY in Management' },
    { type: 'cards', items: [
      { icon: '🏢', title: 'Corporate SSY', text: 'Dedicated batches for the employees of organisations – in person + online guidance (ssy.life). Examples: the Vardhman Group, Ludhiana (2004) – a 15-day camp for 30+ executives ("shifting the consciousness from taking to giving"); Symbiosis, Pune – compulsory for management students (1996); 25 employees of the Apparel Group in Dubai and 80 construction workers at DUCTFAB (2007); in Mumbai, a corporate batch by "Najoo & Manoj" at 5 a.m. + a 2-day silent retreat at Manor (2009).' },
      { icon: '🏔️', title: 'Retreat – a weekend silence camp for managers', text: 'RSVK: "A weekend silence retreat for managers"; "For senior executives, we have a 2-days silence retreat once in a month to guarantee their high energy level and productivity."' },
      { icon: '📚', title: 'Enlightened management – Guruji\'s view', text: '1996 interview: "Management technology will revert to the Indian guru-shishya tenets. There will be no more carrot-and-stick manipulation." His definition: "simply being one with everyone and transmitting the vision for others to own, which makes them automatically \'do things\'." Audio: "Enlightened Students and Managers", "Developing Super Leaders"; book: "Nayakatvopanishad".' }
    ] },

    { type: 'h2', text: 'Teacher Training' },
    { type: 'p', text: 'RSVK: **"Culturing into the life of wisdom, freedom and prosperity – a training in four phases"**; the organisation\'s About page says "TTC Phase 1-5" and the projects page says "four phases" (Phase 2 has two parts: 2A and 2B). Full details → [Teacher path](teacher.html).' },

    { type: 'h2', text: 'Other special programmes' },
    { type: 'cards', items: [
      { icon: '🔄', title: 'Kaya Kalpa Kriya (KKK) – Yog Samruddhi Sadhana (YSS) / Life Longevity Programme (LLP)', text: 'The "Life Regaining Program" Guruji designed in Puducherry – "a type of Yogic Breathing Exercise – created specially to reconnect us to our source." In his essay "SILENCE" Guruji suggests, as the remedy when silence is lost: "Do alternate nostril breathing for a few minutes… do Kaya Kalpa Kriya". The essay "Creativity and Ecstasy": "Practice of Kaya Kalpa Kriya brings you to experience this great joy." Secondary sources describe it as a kriya that "reverses ageing and cures all diseases" – this is not proven.' },
      { icon: '🕉️', title: 'Brahmacharya Programme', text: 'Named as an alternative to Phase 1 for admission to TTC Phase 2; Guruji\'s audio "Brahmacharya" and his book "Transcending Sex to Spirituality" are its philosophical basis. Details not published.' },
      { icon: '🎭', title: 'SSY Expression & the Liya app', text: 'Mumbai (Manoj Lekhi): a programme of 5–6 one-day segments – "We don\'t give talks but provide practical tools"; "low vibration vs high vibration"; practices of "no complaint", gratitude and responsibility. Liya = the Life Yessence Academy app.' },
      { icon: '🙏', title: 'Being with Guruji – six national events', text: 'RSVK: "Guruji has devised six main national events and other Being with Guruji programs for all sadhaks to come together in sadhana, offer seva and seek furtherance in their knowledge by serving others." → [Annual events](events.html)' },
      { icon: '🚶', title: 'Padayatra', text: 'In TTC Phase 3, 5 days with 30 people; in cancer rehabilitation, 30 days – "to experience pure blessings from the universe", a practice of total sufficiency.' },
      { icon: '🏕️', title: 'Level II retreat (3 days)', text: 'For cancer rehabilitation patients "once a month for many years" – to keep their enthusiasm alive; a short form of the AMC.' }
    ] },

    { type: 'h2', text: 'Community projects' },
    { type: 'chips', items: ['Annaprasada Kshetra', 'Clean India Movement', 'Green India Movement', 'Eye Care Camp', 'Sathya Sena', 'Jaipur Foot (artificial limb) Camp', 'Blood Donation Camp', 'Kumbh Mela seva camp', 'Village development (Anna Hazare)', 'Inter-religious harmony', 'Fun Club International', 'Advisory Committee of Elders (ACE – 1996)'] },
    { type: 'p', text: 'RSVK\'s "Community Projects" page gives only these names (the descriptions have not been filled in yet). "Sathya Sena" – the idea of a social satyagraha group, linked to the ILRD syllabus topic of "building a Satya Sainya". The 2025 Prayagraj Maha Kumbh Mela camp: a 150×150 ft RSVK Seva Shibir (Plot SMLM 36, Sector 23, Arail, Naini – near the Triveni Sangam), 45 days, meals and stay for 2,500+ people at any given time, and a special railway bogie arranged from Karnataka.' },
    { type: 'p', text: 'Related pages: [Student path](student.html) · [Teacher path](teacher.html) · [Children & education](children.html) · [The organisation](rsvk.html).' }
  ]
};
