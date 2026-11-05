/* dictionary – SSY dictionary A–Z */
const G = (letter, entries) => ({ letter, key: letter.toLowerCase(), entries });
module.exports = {
  id: 'dictionary',
  title: 'SSY Dictionary A–Z – every term, name and abbreviation in the world of Siddha Samadhi Yoga',
  short: 'Dictionary A–Z (searchable)',
  lead: 'More than 150 terms related to SSY – programmes, practices, philosophical concepts, Sanskrit words, people, places, organisations, festivals, food and education – in English alphabetical order (by the English/Sanskrit name used in the SSY family), with a plain-English meaning. Type in the search box to find a term.',
  blocks: [
    { type: 'dictionary', placeholder: 'Search for a term… (e.g. Samadhi, AMC, Katarkhadak, Pranayama)', empty: 'Term not found – try a different spelling or use the site search.', groups: [
      G('A', [
        { term: 'Acharya', sa: 'आचार्य', def: 'A full teacher who leads an SSY batch (has completed TTC Phase 4). E.g. "Acharya Tarsem Bhai" (Ludhiana).', see: '[Teacher path](teacher.html)' },
        { term: 'Advisory Committee of Elders (ACE)', sa: 'ACE / Government of Wisdom', def: 'The "Government of Wisdom" experiment Guruji started in Karnataka in 1996 – an advisory council of elders such as former CJI M.N. Venkatachaliah, Justice Rama Jois and the Pejawar Swami, to show the government the direction of truth and honesty.' },
        { term: 'Akarma', sa: 'अकर्म', def: 'The Sanskrit word for "non-doing" – RSVK: "SSY teaches the science of akarma." Shankara\'s "akarmaiva mokshah".', see: 'Non-doing' },
        { term: 'Akasha tattva', sa: 'आकाश तत्त्व', def: 'Emptiness/space among the five elements; Guruji: "In meditation you become the akasha tattva – the highest prana comes from the emptiness of akasha"; in gurukul education akasha = freedom & silence.' },
        { term: 'AMC – Advanced Meditation Course', sa: 'Nitya Samadhi', def: 'A 4–5 day residential silence camp after SSY; "a break from the three stimuli" (food partly, talking, goal-oriented thinking); recommended every 3 months.', see: '[AMC page](amc.html)' },
        { term: 'Amrut Ahar', sa: 'Amrutaharam', def: '"Nectar-like food" – raw, natural, sattvic food; the title of Guruji\'s book; in Telangana research, "Amrutaharam (vegetarian diet)".', see: '[Diet](diet.html)' },
        { term: 'Ananda Rishi Foundation', sa: '', def: 'An organisation in Visakhapatnam inspired by Guruji\'s teachings (anandarishi.com).' },
        { term: 'Anandamaya kosha', sa: 'आनन्दमय कोश', def: 'The fifth sheath – the nature of bliss; ssy.life: "Ananda is a state with neither pleasure nor pain – a unified experience without swinging"; a 1996 article also calls it the "ego body".' },
        { term: 'Annamaya kosha', sa: 'अन्नमय कोश', def: 'The first sheath – the physical body made of food; it can be sattvic, rajasic or tamasic; it becomes sattvic through the SSY food class and the shatkriyas.' },
        { term: 'Annaprasada Kshetra', sa: 'Anna Prasad Kshetra', def: 'RSVK\'s free food-offering (annadana) centres; one of the programmes into which TTC Phase 4 teachers must enrol practitioners; annaprasad for 2,500+ people at the Kumbh Mela 2025.' },
        { term: 'Anna Hazare', sa: '', def: 'Social activist (Ralegan Siddhi); in 1996 SSY volunteers helped with his 300 model villages; designed the ILRD degree together with Guruji; spoke at an SSY USA gathering in Southern California in 2013.' },
        { term: 'Anuloma-Viloma', sa: 'Nadi Shodhana', def: 'Pranayama done by alternating the nostrils; one of the SSY pranayama series (disciples\' blog); Guruji: when silence is lost, "a few minutes of anuloma-viloma".' },
        { term: 'Aradhana', sa: 'आराधना', def: 'A day of remembrance of a guru – Guruji\'s Aradhana (February, Doddamaralavadi), Gurumatha\'s Aradhana (March/April), Bhagwan Visveswaraya\'s Aradhana (5 March), the Raghavendra Swamy Aradhana Seva (August, Mantralayam).', see: '[Annual events](events.html)' },
        { term: 'Arogya Shibir', sa: 'आरोग्य शिबिर', def: 'RSVK health camp – one of the SSY health programmes; RSVK Social village health camps.' },
        { term: 'Arundhati Ma', sa: 'Arundhati Rishi Prabhakar', def: 'Guruji\'s wife (formerly Smita Ubale; married 1999/2000, they met at the Aurangabad ashram); author of "Divine Satsang" (2015); director of RPIF; also a hypnotherapist and NLP coach.' },
        { term: 'Avidya & Vidya', sa: 'अविद्या & विद्या', def: 'Guruji\'s philosophy of education: avidya = knowledge of the outer world (gained by repetition and practice); vidya = what is learned by going within. "Through avidya one conquers death; through vidya, immortality" – the gurukul teaches both.' }
      ]),
      G('B', [
        { term: 'Being with Guruji', sa: '', def: 'Satsang programmes held in Guruji\'s presence during his lifetime; now annual national programmes (Brahmotsav – Maralwadi; Aradhana – Mantralayam; VHS – November/December); attendance is compulsory in the TTC phases.' },
        { term: 'Bhagwan Visveswaraya ("Nada Brahma")', sa: 'Sri Bhagwan Visveswaraya', def: 'Guruji\'s guru in Bengaluru – Guruji did sadhana with him from 2 a.m.; his Aradhana is held on 5 March at his residence.' },
        { term: 'Bhajans', sa: 'भजन', def: 'The devotional songs of SSY satsangs – "Aao Gurudeva", "Guru Brahma Guru Vishnu" and others; RSVK has 17 albums (Amrutadhara – Telugu).', see: '[Media](media.html)' },
        { term: 'Bhamashetti account', sa: 'Anand Bhamashetti', def: 'The 2011 experience of Anand Bhamashetti (Chadachan, Karnataka) – a 13-day course + AMC at the Vijayapur unit: "In 17 days all my problems were gone."' },
        { term: 'Bhava', sa: 'भाव', def: 'Emotion, the state of the heart; ssy.life: "BST means gaining the ability to experience bhavas (emotions)."' },
        { term: 'Bhava Samadhi Training (BST)', sa: 'भाव समाधि', def: 'BST-1 (truth – the Satya Narayana Vrat, 4 days), BST-2 (dharma, 4 days); RSVK: 8 days + 1 month of preparation; the experience of "everybodiness"; only for the mentally stable.', see: '[BST page](bst.html)' },
        { term: 'Boduvalasa', sa: 'Bodduvalasa', def: 'The village near Visakhapatnam where the Rishi Vidyalaya Gurukulam (1997, CBSE) is located.' },
        { term: 'Brahmacharya Programme', sa: 'ब्रह्मचर्य', def: 'An RSVK programme for young people – an alternative qualification to Phase 1 for admission to TTC Phase 2; Guruji\'s audio "Brahmacharya".' },
        { term: 'Brahmopadesam', sa: 'ब्रह्मोपदेश', def: 'The initiation into the knowledge of Brahman given by the rishis – "instruction in the science of non-doing, the experience of stillness within and abundance without"; SSY is its modern form; Guruji: the knowledge given at the age of 12 that "steadies the mind and opens the intellect" (Gayatri upadesha).' },
        { term: 'Brahmarshi', sa: 'ब्रह्मर्षि', def: 'A recognition given to Guruji by Vedic scholars (RSVK); disciples: "a Brahmarshi who created many like himself".' },
        { term: 'Brahmotsav', sa: 'ब्रह्मोत्सव', def: 'The annual Being with Guruji festival at the Maralwadi (Doddamaralavadi) ashram – compulsory for TTC teachers.' }
      ]),
      G('C', [
        { term: 'Cancer Rehabilitation', sa: '', def: 'An RSVK programme – after medical treatment, 15 days of detox + 30 days of Joy Therapy + a 30-day padayatra + a monthly 3-day Level II retreat; Guruji\'s audio "Cure for Cancer".' },
        { term: 'Chaturmasya', sa: 'चातुर्मास्य', def: 'Traditionally a four-month sacred period of sadhana; RSVK observes it from about 10 July to 15 September; opened at the SMART ashram by Sri Srikanta Guruji (Avadhoota Sri Srikantananda Saraswati Maharaj) (Guru Purnima 2025).' },
        { term: 'Children\'s SSY (Ch.SSY)', sa: '', def: 'A 10-day programme for children aged 7–12 (games, stories, charts, prayer–meditation, Rajyoga pranayama); also as a residential camp (6 days, Katarkhadak/Deheri); attending one is required for TTC Phase 1, conducting them for Phase 2.', see: '[Children & education](children.html)' },
        { term: 'Chin / Chinmaya mudra', sa: 'चिन्मुद्रा / चिन्मय मुद्रा', def: 'Hand gestures in pranayama – thumb and index finger joined (chin); the other fingers folded (chinmaya); the SSY mudras also include the nasarga, brahma, adi, vishnu and jihva mudras (disciples\' blog).' },
        { term: 'Clean India Movement', sa: '', def: 'A cleanliness movement Guruji started in the late 1980s/early 1990s – centres adopting their surroundings; RPIF: "the foundation of the programme now taken up by Prime Minister Modi" (the organisation\'s claim).' },
        { term: 'Commune', sa: 'Community living', def: 'Shared living of spiritually connected families – "one kitchen, two rooms for each family"; at the Katarkhadak, Bengaluru and Vizag gurukulams; joined in TTC Phases 2–3; Guruji: "the nuclear family is a failed experiment".' },
        { term: 'Corporate SSY', sa: '', def: 'SSY for the employees of organisations (Vardhman 2004, Symbiosis 1996, Apparel Group Dubai 2007, Mumbai 2009); weekend retreats for managers.' }
      ]),
      G('D', [
        { term: 'Deheri Ashram', sa: 'Dehri', def: 'An SSY ashram about 2 hours from Mumbai – AMCs and children\'s camps for Mumbai practitioners.' },
        { term: 'Dharma', sa: 'धर्म', def: 'Right duty, the order of life – the theme of BST-2 ("not limited to religion – duties towards one another and towards society"); RSVK: "Our dharma is to see that everyone is okay".' },
        { term: 'Dharma, Artha, Kama, Moksha', sa: 'धर्म, अर्थ, काम, मोक्ष', def: 'The four purusharthas (aims of life) – the title of an audio discourse by Guruji.' },
        { term: 'Digital RCRT', sa: '', def: 'The online form of the 100% Memory (RCRT) technique – Pune, 2020 (Guruji\'s family / The House of Rishi Prabhakar).' },
        { term: 'Divisional Head', sa: '', def: 'A regional coordinating teacher – the senior who signs TTC trainees\' monthly reports.' },
        { term: 'Doddamaralavadi', sa: 'Maralwadi', def: 'RSVK\'s main ashram in Bengaluru Rural (Kanakapura taluk, Huyalappanahalli, 562121) – the SMART temple, 32 acres, Rishi Gurukulam, the place of Guruji\'s Aradhana and Guruji\'s last residence.', see: '[Centres](centres.html)' },
        { term: 'Divine Satsang', sa: '', def: 'Book by Arundhati Rishi Prabhakar (2015) – "My Divine Encounter with Guruji Rishi Prabhakarji".' },
        { term: 'Drishti', sa: 'दृष्टि', def: 'Guruji: "If you see demons all around you, your joy decreases; if you see gods, it increases – it is only a change in your vision."' }
      ]),
      G('E', [
        { term: 'ELT – Effortless Learning Technique', sa: '', def: 'The new name Rishi Gurukulam (Pune) uses for the RCRT/100% Memory method – from class 8; "a year\'s syllabus completed in a month".' },
        { term: 'Elijah Board', sa: 'Elijah Board of World Religious Leaders', def: 'An international interfaith forum – Guruji was a member; recognised for "eradicating tobacco and alcohol addiction in Karnataka villages".' },
        { term: 'Enlightened Management', sa: '', def: 'Guruji\'s concept: "being one with everyone and offering a vision in such a way that others own it"; a return to guru–shishya principles.' },
        { term: 'est (Erhard Seminars Training)', sa: 'est – Werner Erhard', def: 'The experiential training Guruji did in California in 1980 – "it opened my awareness to a whole new possibility, samadhi in action"; the inspiration for the SSY workshop format.' },
        { term: 'Everybodiness', sa: '', def: 'RSVK\'s description of BST: "Participants are transformed and experience \'everybodiness\' – oneself in everyone."' },
        { term: 'Everything is Okay', sa: '', def: 'The title of a discourse by Guruji and SSY\'s basic outlook – "Before changing anything, accept that \'everything is okay – as it is\'."' }
      ]),
      G('F', [
        { term: 'Food Class', sa: '', def: 'SSY session 4 – "we are what we eat"; the pranic classification of food, the shatkriyas; bringing fruit and vegetables on the first day.' },
        { term: 'Fun Club International', sa: '', def: 'A programme based on joy and play that Guruji started in Davangere in 1986; RSVK Social village "Fun Clubs".' },
        { term: 'Fundamental Premise', sa: 'Fundamental Premise of RSVK', def: 'Four principles: everyone is doing their best; make a suggestion and leave it; enrol people – do not force them; seeing that everyone is okay is dharma.', see: '[Rishi Vani](teachings.html)' }
      ]),
      G('G', [
        { term: 'Gayatri Upadesha', sa: 'गायत्री उपदेश', def: 'A 16-day process at the Upanayana camp – 4,000 japas a day; Guruji: "a process that keeps the right brain open"; the meaning of the Gayatri mantra: "expand my intellect and make me a genius".' },
        { term: 'Global Religious Harmony', sa: '', def: 'A pledge of interfaith harmony at ~200 centres in 1996 – the mosque on Friday, the church on Sunday, the temple once a week.' },
        { term: 'Gommatagiri', sa: '', def: 'A village near Mysuru – the venue of SSY teacher training in 1984–86 (the batch of Jaggi Vasudev and Raviji).' },
        { term: 'Guru Puja', sa: 'गुरु पूजा', def: 'The worship of the guru lineage performed at SSY satsangs (chanting of shlokas); passing the "puja test" is compulsory for TTC Phase 1; RSVK bhajan album "Guru Pooja"; a Telugu Guru Puja video exists.' },
        { term: 'Guru Purnima', sa: 'Guru Poornima', def: 'An annual festival at the SMART ashram (2025: 9–12 July – inauguration of the Rishi Sadana building); RSVK\'s events page also lists a "Guru Poornima" in April, marking the day the SMART temple was established.' },
        { term: 'Gurumatha C.A. Ramadevi Amma', sa: 'C.A. Rama Devi', def: 'Guruji\'s mother (1928 – 19 April 2021, aged 93) – founder-secretary of RSVK, his "first student"; widowed young, she stood by her son "like an elder sister"; she recovered from a swollen-legs illness by doing pranayama lying down; Aradhana in March/April, Jayanthi on 4 July.' },
        { term: 'Guruvani / Rishi Vani', sa: '', def: 'Guruji\'s sayings – the name of the RSVK blog, the ssy.life monthly magazine ("Samskruti Rishi Vani") and the SSY Guruvani app.', see: '[Rishi Vani](teachings.html)' },
        { term: 'Gurukulam', sa: 'गुरुकुल', def: 'The residential gurukul system of education – Rishi Gurukulam (Bengaluru 1982, Vizag 1997, Pune); "the world\'s first 100% Memory school"; aim: "world leaders with the humility of a saint, the knowledge of a scholar and the wisdom of a guru".', see: '[Children & education](children.html)' }
      ]),
      G('H', [
        { term: 'Harohalli', sa: '', def: 'An SSY centre in Ramanagara district (on the Bengaluru–Kanakapura road) – on the way to the SMART ashram.' },
        { term: 'HMP – Hundred Percent Memory Programme', sa: '100% Memory Program (HMP)', def: 'A 30-day residential summer camp for classes 7–10 (₹45,000; 2026 batches in April–May); the RCRT technique; "a genius understands and remembers forever".', see: 'RCRT' },
        { term: 'The House of Rishi Prabhakar', sa: '', def: 'The YouTube channel of Guruji\'s family (Arundhati, Siddhant) and an organisation registered in Pune in 2025 – Guruji\'s archived discourses, RPIF, Digital RCRT, the Zeest brand.' },
        { term: 'Hyderabad centre', sa: '', def: 'The RSVK centre started in 1984–86 by Guruji\'s disciples (Raviji, Jaggi Vasudev); batches today at Panjagutta/Dwarakapuri Colony, Dilsukhnagar and Nizampet.', see: '[Centres](centres.html)' }
      ]),
      G('I', [
        { term: 'ILRD', sa: 'Inspirational Leadership in Rural Development', def: 'A 3-year (36-month) BA degree designed by Guruji and Anna Hazare – Indian Institute of Inspirational Leadership, Surashetti Koppa, Dharwad; affiliated to Karnatak University; 4 theory + 4 field projects every year (800 marks); an alternative entry qualification for TTC.' },
        { term: 'Inclusive Silence', sa: 'Group silence', def: 'The special feature of the AMC – unlike the traditional solitary ("exclusive") silence, a silence kept in a group, with the eyes open; "anything done in a group has an exponential effect".' },
        { term: 'Infant Siddha Program (ISP)', sa: '', def: 'Training for the parents of children from conception to age 8 – reading, binary maths, languages, 8 kinds of intelligence, crawling and running; "Joyful Parenting" in America; the basis of the gurukul pre-primary.' },
        { term: 'Intro talk', sa: 'Introductory satsang', def: 'A free introductory meeting before every SSY batch – e.g. Hyderabad, Sunday evenings 6–8:30; Pune, 12 June 2010.' },
        { term: 'Isha Yoga connection', sa: '', def: 'According to press reports, Jaggi Vasudev (Sadhguru) did SSY teacher training with Guruji in 1984, taught in Hyderabad/Bengaluru/Mysuru, was sent to the Coimbatore centre c.1989 and later started his own path; his early 13-day "Sahaja Sthiti Yoga" course also had the abbreviation SSY; Guruji never spoke about this publicly. Disputed.' }
      ]),
      G('J', [
        { term: 'Jayanagar', sa: '', def: 'The area of Bengaluru with RSVK\'s head office (4th Block, 11th Main); Guruji\'s house also served as the Jayanagar branch.' },
        { term: 'Joy Therapy', sa: '', def: 'The 30-day phase of cancer rehabilitation – asanas, pranayama, meditation, "lots of play and fun"; one of RSVK\'s health programmes.' },
        { term: 'Joyful Parenting Program (JPP)', sa: '', def: 'The name of ISP in SSY USA.' }
      ]),
      G('K', [
        { term: 'Karna Syndrome', sa: '', def: 'Guruji\'s analogy – just as Karna forgot his mantra under the pressure of battle, children forget what they know in the exam hall; the remedy is 10 minutes of samadhi silence before the exam.' },
        { term: 'Katarkhadak ("Dyaneshwar Bhoomi")', sa: 'Katarkhadak Ashram', def: 'An ashram in the hills of Pune (Mulshi taluk, 412115) – Rishi Gurukulam, the TTC venue, community living, a goshala of 60 cows, Children\'s SSY summer camps; guided by Manoj Lekhi.' },
        { term: 'Kaya Kalpa Kriya (KKK)', sa: 'कायकल्प क्रिया', def: 'A yogic breathing kriya "to regain life" that Guruji designed in Puducherry (after 2004) – also called Yog Samruddhi Sadhana (YSS) / Life Longevity Programme (LLP); a practice that "reconnects to the source"; the claims about preventing ageing are unproven.' },
        { term: 'Kozasa study', sa: 'Kozasa et al. 2008', def: 'Research from Brazil (UNIFESP) – Psychological Reports 103(1); anxiety and depression fell significantly after 2 weeks of SSY; the only PubMed paper on SSY.', see: '[Media – research](media.html)' },
        { term: 'Krishnashtami', sa: 'Janmashtami', def: 'Guruji\'s birthday (according to RSVK, Janmashtami 1948) – celebrated every year as "Guruji Jayanthi".' },
        { term: 'Kumbh Mela Seva 2025', sa: '', def: 'The Maha Kumbh Mela at Prayagraj (13 January – 26 February 2025) – a 150×150 ft RSVK camp (Sector 23, Arail), food and lodging for 2,500+ people, a special railway coach from Karnataka.' },
        { term: 'Kundalini', sa: 'कुण्डलिनी', def: 'Guruji: "Kundalini is this very Brahma-tattva – we call it by different names. In SSY the kundalini opens automatically – you have to do nothing."' }
      ]),
      G('L', [
        { term: 'Level II Retreat', sa: '', def: 'A 3-day retreat "once a month for many years" for cancer rehabilitation patients.' },
        { term: 'LiYA – Life Yessence Academy', sa: '', def: 'The international brand of SSY (LiYA USA = SSY USA; the Liya app; RSVK as its Indian branch; RSVK Social "LiYA programmes").' },
        { term: 'Living Life King Size', sa: 'Living Life King Size on an Empty Wallet', def: 'Guruji\'s book (2012) – abundance without money; "those who live royally with an empty pocket are immortal".' }
      ]),
      G('M', [
        { term: 'Mahasamadhi', sa: 'महासमाधि', def: 'A yogi\'s conscious leaving of the body – Guruji: Sunday 16 February 2014, 6:26 a.m., Bengaluru (aplastic anaemia; he refused medication).' },
        { term: 'Manoj Lekhi', sa: 'Manoj J. Lekhi', def: 'Mumbai educationist, author and corporate trainer – a principal disciple of Guruji; the "guiding force" of Rishi Gurukulam (Pune), co-founder of MET Rishikul Vidyalaya; SSY Expression, the Liya app; "Design Your Life" on YouTube in Hindi.' },
        { term: 'Manomaya kosha', sa: 'मनोमय कोश', def: 'The third sheath – the mind; "the mind is part of the universal mind – just as the light in a bulb comes from the powerhouse"; gone beyond through Samadhi meditation and sakshi bhava (witnessing).' },
        { term: 'Mantralayam', sa: '', def: 'The shrine of Sri Raghavendra Swamy in Andhra Pradesh – RSVK\'s annual Aradhana Seva (10–12 August 2025; volunteers over 60 not permitted); TTC attendance at "Aradhana – Mantralayam".' },
        { term: 'Matrumandir (RVM)', sa: 'Mathru Mandira', def: 'Nursery–UKG play homes – "mother and child celebrate life through music and dance"; the ISP teachings in practice.' },
        { term: 'Meditation with Mudras', sa: '', def: 'The title of an SSY USA video – the role of mudras in pranayama and meditation.' },
        { term: 'Medication to Meditation', sa: 'From Medication to Meditation', def: 'The title of a Guruji audio and RSVK\'s outlook on health – "the body is the doctor; rest is the cure".' },
        { term: 'Moksha', sa: 'मोक्ष', def: 'Guruji: "Moksha is a state of freedom… a state in which no dislike is experienced; moksha is right then and there – not later."' },
        { term: 'Mouna', sa: 'Silence / मौन', def: 'The central practice of SSY – "taking time not to be involved in producing any results"; the inclusive silence of the AMC; Guruji\'s essay "SILENCE" (4 levels of losing silence, 4 signs of being in silence).' }
      ]),
      G('N', [
        { term: 'Nada Brahma', sa: 'नाद ब्रह्म', def: 'The title of Guruji\'s guru, Bhagwan Visveswaraya.' },
        { term: 'Naishkarmya', sa: 'नैष्कर्म्य', def: 'The state free of the bondage of karma (Gita) – "Naishkarmayopanishad – a book on non-doing".' },
        { term: 'National events (six)', sa: 'Six National Events', def: 'RSVK: "Guruji designed six major national programmes" – Guruji Aradhana, Guru Purnima, Raghavendra Swamy Aradhana Seva, Vishwa Hrudaya Sammelana, (Brahmotsav, Krishnashtami/Jayanthi).', see: '[Annual events](events.html)' },
        { term: 'Nitya Samadhi', sa: 'नित्य समाधि', def: 'The ssy.life name for the AMC – "continuous samadhi".' },
        { term: 'Nobody-ness / Nobody sadhana', sa: '', def: 'The experience in Samadhi meditation of "being nobody"; on the teacher path, the practice of serving without seeking name, position or recognition (a TTC Phase 2 commitment).' },
        { term: 'Non-doing', sa: 'Akarma', def: 'SSY\'s core principle – "Silence within; it originates from the fullness within; non-participatory awareness; play and worship. Doing unwillingly is work. When nothing needs to happen, you are in non-doing." (Guruji\'s Golden Words)', see: '[Philosophy](philosophy.html)' },
        { term: 'No complaint', sa: '', def: 'A practice of SSY (Mumbai) – "we show what happens in the brain when you complain and how it poisons the system"; a twin practice to gratitude and responsibility.' }
      ]),
      G('O', [
        { term: 'Om – The Mystic Mantra', sa: 'AUM – The Mystic Mantra', def: 'The title of an audio discourse by Guruji; the Omkara in SSY prayers.' },
        { term: 'Our Pledge', sa: '12 May 1983', def: 'The RSVK pledge written by Guruji – "We pledge to give only our best… I represent life… I will not make anyone my slave, nor submit as a slave to anyone."', see: '[Rishi Vani](teachings.html)' }
      ]),
      G('P', [
        { term: 'Padayatra', sa: 'पदयात्रा', def: 'The sadhana of a walking pilgrimage – TTC Phase 3 (5 days with 30 people), cancer rehabilitation (30 days) – "the experience of the blessings of the universe", total sufficiency.' },
        { term: 'Pancha kosha / Pancha kosha shuddhi', sa: 'पञ्चकोश शुद्धि', def: 'The five layers – annamaya (food/shatkriyas), pranamaya (pranayama), manomaya (meditation), vijnanamaya (samadhi – "from the limited to the unlimited"), anandamaya; SSY as "a process of purifying the five koshas".' },
        { term: 'Panjagutta centre', sa: 'Panjagutta / Dwarakapuri Colony', def: 'The main SSY centre in Hyderabad (Uma Reddy, Suryateja, teacher Prashant); morning batches 5–7.' },
        { term: 'Parent Teacher', sa: '', def: 'The senior Acharya who guides a new teacher through the first batches in TTC Phase 4.' },
        { term: 'Patriji tribute', sa: 'Patriji (PSS Movement)', def: 'A Telugu tribute by Patriji, founder of the Pyramid Spiritual Societies Movement – "the great guru of gurus, Sri Rishi Prabhakar ji"; he says Guruji lit the lamps of "spirituality, natural living, sattvic food and Vasudhaiva Kutumbakam" in Andhra.' },
        { term: 'Prana', sa: 'प्राण', def: '"The energy behind every movement" – part of the cosmic life force; "prana means movement, vibration"; the highest prana comes from akasha (emptiness).' },
        { term: 'Pranayama', sa: 'प्राणायाम', def: '"Extending the field of prana" (prana + ayama = field); in SSY a series of ~45 minutes, in vajrasana, with mudras; Kozasa study: 11 pranayamas (mainly ujjayi), 5 cycles each, rhythm 4 inhale – 2 hold – 5 exhale – 2 empty; disciples\' blog: anuloma-viloma, ujjayi, kapalabhati, suryabhedana.', see: '[Practices & processes](techniques.html)' },
        { term: 'Pranamaya kosha', sa: 'प्राणमय कोश', def: 'The second sheath – life energy (the "pranic/aura body"); pranayama infuses prana "into every cell and nerve" and purifies it.' },
        { term: 'Pranic food', sa: '', def: 'Classification of food – positive (fruit, nuts, sprouts, leafy greens; ash gourd the highest; also pepper), zero (potato, tomato), negative (meat, fried food, garlic, onion, chilli, asafoetida, brinjal; alcohol, tobacco, tea, coffee, antibiotics).' },
        { term: 'Pranayoga', sa: 'प्राणयोग', def: 'Guruji: "Where you know that you cannot know, the vijnanamaya kosha opens and prana enters – this is called pranayoga."' },
        { term: 'Prabhakar Raghavendra Rao', sa: '', def: 'Guruji\'s birth name (30 August 1948, Chikkaballapur/Bengaluru).', see: '[Guruji](guruji.html)' },
        { term: 'Puducherry period', sa: '', def: 'Guruji\'s residence for ~7 years from 2004 – the period in which he designed Kaya Kalpa Kriya.' },
        { term: 'Puja test', sa: '', def: 'For admission to TTC Phase 1: learning the Guru Puja shloka chanting fully and passing the test.' }
      ]),
      G('R', [
        { term: 'Rajyoga Pranayama', sa: '', def: 'The pranayama taught in Children\'s SSY, "very simple but powerful, with prayer and meditation" (RSVK).' },
        { term: 'Raviji', sa: '', def: 'An SSY teacher who trained under Guruji in 1984–86 together with Jaggi Vasudev and started the Hyderabad centre; the audio "Freedom (by Ravi ji)"; known for the remark "There is no guru – the disciples make the guru".' },
        { term: 'RCRT – Rapid Comprehension & Review Technique', sa: 'Rapid Comprehension and Review Technique', def: 'The 100% Memory method – understanding → detailed mind maps → revision "hundreds of times" → permanent storage in the subconscious; shravana–manana–nididhyasana; "40 days of RCRT"; ~30 days for classes 7–10; now also called ELT.' },
        { term: 'Recommending Teacher', sa: '', def: 'The practitioner\'s local Acharya who recommends a TTC application; gave the special letter for those aged 50+.' },
        { term: 'Rishi Gurukulam (RVG)', sa: 'Rishi Gurukulam / Rishi Vidyalaya Gurukulam', def: 'See: Gurukulam. RVG = Rishi Vidyalaya Gurukulam (Visakhapatnam – Boduvalasa); RSVS = Rishi Samskruti Vidya Samsthe (the Bengaluru gurukulam).' },
        { term: 'Rishi Prabhakar International Foundation (RPIF)', sa: '', def: 'An organisation founded by Guruji\'s family in Bengaluru on 10 January 2019 – "Act Mindfully · Create Consciously · Evolve Spiritually"; e-books, RPIF Music, Zeest magazine, Discovery Series workshops; the goal of "Peace Homes, Peace Villages".' },
        { term: 'Rishi Sadhana Bhavan', sa: 'Rishi Sadana', def: 'The sadhana hall inaugurated at the SMART ashram on Guru Purnima 2025 (9–12 July).' },
        { term: 'Rishi Samskruti', sa: 'ऋषि संस्कृति', def: '"The culture of the rishis" – part of RSVK\'s name; the ashram industries run "on Rishi Samskruti – quality based on love and sadhana".' },
        { term: 'RSVK – Rishi Samskruti Vidya Kendra', sa: 'Rishi Samskruti (Samskruthi) Vidya Kendra Trust', def: 'The parent trust of SSY – 18 February 1982, Bengaluru; 12A (30 December 1982), 80G; head office in Jayanagar; "a guru for every street"; Trustee-Secretary Sri Satish Guruji (Satyanarayana K).', see: '[Organisation – RSVK](rsvk.html)' },
        { term: 'RSVK Social', sa: '', def: 'The rural service wing of Rishi Gurukulam (Pune) – "making India\'s 6,38,000+ villages clean, green, healthy, wealthy and happy"; adoption of villages near Katarkhadak (rsvksocial.org).' },
        { term: 'Rishi Vachan Trust', sa: '', def: 'Mumbai – the organisation that published Guruji\'s audio cassettes (E, B, C, H series) in the 1990s (Discogs).' },
        { term: 'Rishi Gyan Kendra Trust', sa: '', def: 'The local SSY trust in Ludhiana (Punjab) – organised the 2004 Vardhman camp.' }
      ]),
      G('S', [
        { term: 'Sadhguru (Jaggi Vasudev)', sa: '', def: 'See: Isha Yoga connection.' },
        { term: 'Sadhana', sa: 'साधना', def: 'Spiritual practice – Guruji: "raising oneself to higher levels by entering the higher states of non-doing (samadhis)".', see: '[Daily sadhana](sadhana.html)' },
        { term: 'Sakshi Bhava', sa: 'साक्षी भाव', def: 'Seeing as a witness – the way beyond the manomaya kosha; "not by focusing on the content of the mind, but by separating from the mind."' },
        { term: 'Samadhi', sa: 'समाधि', def: 'The natural state in which the mind is in equanimity and still; ssy.life: "a state of intense concentration (sama) attained through meditation"; in SSY the "first step" (Yoga Starts with Samadhi); "The practice of samadhi changes the way you think".' },
        { term: 'Samadhi in action', sa: '', def: 'The concept of advanced training Guruji developed in 1981–83 – "samadhi in action", inspired by est.' },
        { term: 'Samadhi meditation', sa: '', def: 'The heart of SSY – 15 minutes (20 in the research), effortless, observing thoughts with a personal mantra (TM-like); initiation in session 9; "rest deeper than deep sleep"; "15 minutes of meditative rest equals 2–3 hours of deep sleep" (Gurukulam).' },
        { term: 'Sankalpa Shakti', sa: 'सङ्कल्प शक्ति', def: 'The power of intention – "human beings are evolving into creators; situations are created by their sankalpa shakti" (Guruji); the gurukul satsang "Understanding the power of intention".' },
        { term: 'Samskruti Rishi Vani', sa: '', def: 'The ssy.life monthly magazine (issues from July 2023 to March 2024 online as flipbooks).' },
        { term: 'Sandhya Vandana', sa: 'सन्ध्यावन्दन', def: 'The twilight worship with Gayatri japa that children do daily after the Upanayana camp – part of the gurukul daily routine.' },
        { term: 'Satsang', sa: 'सत्संग', def: '"Company of truth" – group meditation, discourse and discussion; a weekly follow-up after the course; the TTC oath is taken in a satsang; SSY USA\'s monthly global satsang online.' },
        { term: 'Sathya Sena', sa: 'Satya Sainya', def: 'One of RSVK\'s community projects; "building a Satya Sainya (army of truth)" in the ILRD syllabus – the idea of a team that stands up for truth.' },
        { term: 'Satya Narayana Vrat', sa: 'सत्यनारायण व्रत', def: 'The basis of BST-1 – the vow that "truth is Narayana"; "as Gandhiji practised it; through it he could send the British away non-violently"; "forgiveness happens easily and karma is released in a moment".' },
        { term: 'Sri Satish Guruji', sa: 'Satyanarayana K', def: 'Guruji\'s disciple and present Trustee-Secretary of RSVK (birthday 19 February); spoke at VHS 2025.' },
        { term: 'Science of Silence Yoga', sa: '', def: 'An alternative expansion of the abbreviation SSY (the ssy.life brand; RSVK slogan "Learn the Science of Silence Yoga").' },
        { term: 'Seva / Sevak', sa: 'सेवा / सेवक', def: '"An offering beyond the expected duty – without expecting results; the more you serve, the more you break through your own boundaries"; sevak = a volunteer at courses.' },
        { term: 'Shatkriyas', sa: 'षट्क्रिया', def: 'The six cleansing practices of hatha yoga – introduced in the SSY food class for purifying the annamaya kosha.' },
        { term: 'Shravana, Manana, Nididhyasana', sa: 'श्रवण, मनन, निदिध्यासन', def: 'The Vedantic triad of study (hearing, reflection, deep meditation) – the basis of the RCRT/100% Memory process ("the method by which Vedic scholars remember the Vedas forever").' },
        { term: 'Sri Vidya', sa: 'श्रीविद्या', def: 'Guruji\'s 2010 letter: "Now I am learning Srividya – the knowledge of reaching God through wealth; we can make everyone around us prosperous."' },
        { term: 'Siddha', sa: 'सिद्ध', def: '"Perfection or accomplishment (proven)" – ssy.life; proven knowledge; not "siddhi" (powers).' },
        { term: 'Siddha Samadhi Yoga (SSY)', sa: 'सिद्ध समाधि योग', def: 'The core programme designed by Guruji – 14 sessions + a 3½–4 day AMC; "the science of non-doing"; "from illness to health, from anxiety to bliss".', see: '[What is SSY?](intro.html)' },
        { term: 'Siddhant Rishi Prabhakar', sa: '', def: 'Guruji\'s son (born 2000), founding director of RPIF, FLAME University; his "Pattabhishekam" at the Maralwadi ashram on Vijayadashami 2018; the "Zeest" project.' },
        { term: 'Symbiosis', sa: 'Symbiosis, Pune', def: 'The Pune educational institution that made SSY compulsory for all its management students in 1996.' },
        { term: 'Sirvoi Ashram', sa: 'Sirvoi Ashram, Goa', def: 'RSVK ashram in Goa (Quepem) – the venue of VHS 2025 (12–14 December).' },
        { term: 'SMART', sa: 'Sri Matha Annapoorneshwari Rishi Thapokshetra', def: 'The full name of the main ashram and temple at Doddamaralavadi ("Sri Matha Annapoorneshwari Rishi Thapokshetra").' },
        { term: 'SSY Expression', sa: '', def: 'A programme of 5–6 one-day modules from Mumbai (Manoj Lekhi) – "not lectures, practical tools".' },
        { term: 'SSY Guruvani app', sa: '', def: 'An Android app of Guruji\'s sayings by Rachit Technology (2014); also an Alexa skill.' },
        { term: 'SSY class audios', sa: '', def: 'Session audios recorded by Guruji – TTC Phase 3: "listen to the English version 2–3 times"; given to Phase 4 teachers for their independent batches.' },
        { term: 'SSY Global Teachers Forum', sa: '', def: 'A worldwide forum of SSY teachers (mentioned in the SSY USA tribute).' },
        { term: 'SSY Life Foundation', sa: 'SSY.life Foundation', def: 'The Mumbai branch (Shanta House, Andheri East) – the ssy.life website; the AMC is free (the cost of ₹2,222 per participant is met by donors); a goshala of 60 cows.' },
        { term: 'SSY USA / LiYA USA', sa: '', def: 'The American branch (Dublin, California) – ssyusa.org, YouTube @SSYUSA; teachers such as Vishakha "Anando" and Shravan Panyam.' },
        { term: 'Swasthya', sa: 'स्वास्थ्य', def: 'Being in "swa" (oneself) = health – at all five koshas; "being physically strong but full of anger and jealousy is not health".' }
      ]),
      G('T', [
        { term: 'Teachers Training Course (TTC)', sa: '', def: 'SSY teacher training – Phases 1 → 2A → 2B → 3 → 4 (RSVK About: "TTC Phase 1-5"); Katarkhadak ashram, Pune.', see: '[Teacher path](teacher.html)' },
        { term: 'Total Sufficiency', sa: '', def: 'Guruji\'s 1987 experience of "total sufficiency through effortless meditation" – nature has given everything; scarcity is a creation of the mind.' },
        { term: 'Transcendental Meditation (TM)', sa: '', def: 'The method of Maharishi Mahesh Yogi – Guruji learned it in 1974 and served in Switzerland (as International Director – RPIF); "TM gave me a new vision in which nobody needs to do anything"; SSY\'s Samadhi meditation is a TM-like mantra method (Kozasa).' },
        { term: 'Trusteeship', sa: '', def: 'Gandhiji\'s idea – the resolution of the paradox "everything is yours / nothing is yours"; we are trustees, managing what we have on behalf of society.' }
      ]),
      G('U', [
        { term: 'Upanayana Camp', sa: 'उपनयन', def: 'A 14–16 day residential camp for boys and girls aged 7+ – Gayatri upadesha, 4,000 japas a day; four batches in 2026 (4 April – 30 May), SMART ashram.' },
        { term: 'Upanishad series', sa: 'Rishi Upanishads', def: 'Guruji\'s seven "Upanishad" books – Naishkarmya, Aishwarya, Sanyasa, Nayakatva, Vivaha, Srujanatmaktva and Shishya (non-doing, wealth, renunciation, leadership, marriage, creativity, discipleship) – "Upanishad means sitting at the feet of the guru".' },
        { term: 'Uttambhai Babla', sa: '', def: 'The testimonial on every page of the RSVK site – a 69-year-old resident of Mumbai: "an ulcer for 18 years, asthma for 10 years, an enlarged heart; a bypass recommended in America; within 18 months of joining SSY the heart was back to normal size."' },
        { term: 'UVCE', sa: 'University Visvesvaraya College of Engineering', def: 'Guruji\'s engineering college in Bengaluru (RSVK).' }
      ]),
      G('V', [
        { term: 'Vajrasana', sa: 'वज्रासन', def: 'The kneeling posture – the usual seat for SSY pranayama ("vajrasana on a thin mat").' },
        { term: 'Vasudhaiva Kutumbakam', sa: 'वसुधैव कुटुम्बकम्', def: '"The whole world is one family" – RSVK\'s philosophy; Guruji\'s teaching, according to Patriji\'s tribute.' },
        { term: 'VHS – Vishwa Hrudaya Sammelana', sa: '', def: 'The annual world gathering of the SSY family (November/December) – 2025: 12–14 December, Sirvoi, Goa (videos of all 3 days on YouTube); compulsory for TTC teachers.' },
        { term: 'Vijnanamaya kosha', sa: 'विज्ञानमय कोश', def: 'The fourth sheath – intellect/mental consciousness; "the thread between the individual mind and the universal mind"; "through Samadhi meditation the intellect opens, from the limited to the unlimited"; "it opens where you know that you cannot know".' },
        { term: 'Vijayapur unit', sa: 'Vijayapur (Bijapur) unit', def: 'An RSVK centre in Karnataka – evening batches 6–9 + AMC (2011 account).' },
        { term: 'Vision is Dangerous', sa: '', def: 'Guruji\'s book – "driven by vision, from greed to more greed; life is not a mission – it is a joyful visit".' },
        { term: 'Vishakha "Anando"', sa: 'Vishakha Purandare ("Anando")', def: 'SSY USA teacher (SSY in Pune, 1995) – a tribute to Gurumatha and BST experiences on her blog anando.me; writes on behalf of the "SSY Global Teachers Forum".' }
      ]),
      G('W', [
        { term: 'Wealth Consciousness', sa: '', def: 'Guruji\'s discourse series (The House of Rishi Prabhakar channel) – wealth at the levels of shudra, vaishya, kshatriya and brahmin consciousness; "Japan is a kshatriya, America a vaishya, India a brahmin".' },
        { term: 'Werner Erhard', sa: '', def: 'Founder of est – Guruji: "I am deeply indebted to Werner for his great teachings."' }
      ]),
      G('Y', [
        { term: 'Yoga', sa: 'Yoga / Yog', def: '"Union with the one (merging within)" – ssy.life; "union with one\'s higher nature" – Khaleej Times; in SSY, "yoga starts with samadhi".' },
        { term: 'Yoga Brahma', sa: '', def: 'The title given to Guruji in 1998 by a council of scholars in Guntur – "Parama Pujya Yoga Brahma Sri Rishi Prabhakar Guruji".' },
        { term: 'Yog Samruddhi Sadhana (YSS)', sa: '', def: 'Another name for Kaya Kalpa Kriya (secondary sources).' }
      ]),
      G('Z', [
        { term: 'Zeest', sa: '', def: 'RPIF\'s quarterly spiritual-lifestyle magazine (Persian for "life"); an RPIF Music song; the 2026 "Zeest" project.' },
        { term: 'Zero power (Shunya)', sa: 'Shunya / शून्य', def: 'Guruji: "In meditation zero power takes over you – the highest, purest prana"; critics say Sadhguru\'s "Shunya" meditation is an SSY/TM-like 15-minute non-doing process.' }
      ])
    ] },
    { type: 'note', kind: 'info', text: 'This dictionary collects the terms and names in use in the SSY family – in alphabetical order of their English/Sanskrit names. If a term does not appear, use the search box above or the site search (🔍) in the header. The older "Glossary" page ([glossary.html](glossary.html)) is a shorter version for course terms.' }
  ]
};
