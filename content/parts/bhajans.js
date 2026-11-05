/* Bhajan albums + prayers section of the "contents" page, both languages. Data from a web search on 5 Nov 2026. */
const Y = id => `https://www.youtube.com/watch?v=${id}`;
const DISCOGS_ML = 'https://www.discogs.com/release/21943777';
const NF = { te: 'ఆన్‌లైన్‌లో దొరకలేదు', en: 'Not found online' };
const L = (te, en) => ({ te, en });
// album rows: [title, te-desc, en-desc, te-paragraphs, en-paragraphs, links[[te,en,href,teNote,enNote]]]
const albums = [
  ['Guru Pooja', 'గురు పూజ', 'Guru Pooja',
    ['ఈ ఆల్బమ్ యథాతథంగా ఆన్‌లైన్‌లో దొరకలేదు. SSY టీచర్లు తప్పనిసరిగా నేర్చుకోవాల్సిన "పూజ చాంటింగ్" (TTC దశ 1 – "పూజ పరీక్ష") ఇదే కావచ్చు – కానీ ధృవీకరించలేదు. గురు పూజ పాఠం ఎక్కడా ప్రచురించలేదు; కింది వీడియోలలో సాధకులు రికార్డ్ చేసిన గురు పూజ వినవచ్చు.'],
    ['The album itself was not found online. It may be the "puja chanting" every SSY teacher must learn (TTC Phase 1 "puja test"), but that is not confirmed. The Guru Pooja text is not published anywhere; the videos below are recordings posted by practitioners.'],
    [['గురు పూజ – SSY టీచర్లు, ట్రైనీల కోసం, సంస్కృత / ఇంగ్లీష్ ఉపశీర్షికలతో (5:04)', 'Guru Pooja for SSY Teachers and Trainees, with Sanskrit / English subtitles (5:04)', Y('stycCX2GxaM'), 'సాధకుడు సుహాస్ ఫన్సాల్కర్ అప్‌లోడ్ చేసినది', 'posted by practitioner Suhas Phansalkar'],
     ['అదే గురు పూజ – సంస్కృత / గుజరాతీ ఉపశీర్షికలతో (5:04)', 'The same Guru Pooja with Sanskrit / Gujarati subtitles (5:04)', Y('xNB8Z_moq3o')],
     ['సిద్ధ సమాధి యోగ / గురు పూజ (తెలుగు) – చిన్న క్లిప్ (1:34)', 'Siddha Samadhi Yoga / Guru Pooja (Telugu) – short clip (1:34)', Y('IB2aEF8ymFY'), 'శ్రోత అప్‌లోడ్', 'posted by a listener']]],
  ['Guru Priya', 'గురూజీకి ఇష్టమైన భజనలు', "Guruji's Favourite Bhajans",
    ['గురూజీకి ఇష్టమైన గురు, భక్తి భజనలు – సుమారు 50 నిమిషాల క్యాసెట్. తెలుగు శ్రోతలు పూర్తి ఆల్బమ్‌ను YouTubeలో పెట్టారు (RSVK అధికారిక అప్‌లోడ్ కాదు). ట్రాక్ జాబితా ఎక్కడా లేదు.', 'అదే వీడియోల కింద 2001 బ్యాచ్ SSY సాధకులు తమకు ఇష్టమైన SSY పాటలుగా "వేదాంత వీధుల్లో విహరించు గిరిధారి", "చిన్ని చిన్ని కృష్ణయ్య", "నారాయణ నారాయణ జై జై గోవింద హరే" పేర్కొన్నారు – ఇవి ఈ ఆల్బమ్‌లోనివో కాదో ధృవీకరించలేదు.'],
    ['Guru and devotional bhajans that Guruji loved – a cassette of about 50 minutes. Telugu listeners have posted the full album on YouTube (not official RSVK uploads). No tracklist exists online.', 'Under the same videos, SSY meditators from the 2001 batch name "Vedanta veedhullo viharinchu Giridhari", "Chinni chinni Krishnayya" and "Narayana Narayana jai jai Govinda Hare" as favourite SSY songs – it is not confirmed which album they are on.'],
    [['SSY Songs – Gurupriya Bhajans (51:18)', 'SSY Songs – Gurupriya Bhajans (51:18)', Y('ATjvpPplxCc'), 'శ్రోత అప్‌లోడ్', 'posted by a listener'],
     ['Guru Priya SSY Bhajans (51:18)', 'Guru Priya SSY Bhajans (51:18)', Y('f69oO2UOZzU')],
     ['Guru Priya SSY Songs – సిద్ధ సమాధి యోగ వారి గురు ప్రియ భజన పాటలు (53:11)', 'Guru Priya SSY Songs (53:11)', Y('qSPDfR69bBg')]]],
  ['Nirantar', 'అన్ని SSY భజనలు', 'all SSY Bhajans', null, null, []],
  ['Madhuriya Laasya', 'ధ్యానం, నృత్యం కోసం సంగీతం', 'Music for Meditation and Dance',
    ['Discogs కేటలాగ్ రికార్డు: ఋషి వచన్ ట్రస్ట్ క్యాసెట్ B-4, భారతదేశం, 1993. **సైడ్ A – "మాధుర్య"**, **సైడ్ B – "లాస్య"**; గమనిక: "Music for meditation and dance". గాయకుల వివరాలు, నిడివి లేవు. ఆడియో ఆన్‌లైన్‌లో దొరకలేదు.', 'పేర్ల అర్థం: మాధుర్యం = మాధుర్యం, మధురత (ధ్యానానికి); లాస్యం = పార్వతీదేవికి సంబంధించిన సున్నితమైన, లలితమైన నృత్యం.'],
    ['Discogs catalogue record: Rishi Vachan Trust cassette B-4, India, 1993. **Side A – "Madhuriya"**, **Side B – "Laasya"**; note: "Music for meditation and dance". No performer credits or durations. The audio was not found online.', 'The names: madhurya = sweetness (for meditation); lasya = the gentle, graceful dance associated with Parvati.'],
    [['Discogs – Madhuriya : Laasya (B-4, 1993)', 'Discogs – Madhuriya : Laasya (B-4, 1993)', DISCOGS_ML]]],
  ['Bhakti Mantra', '—', '—', null, null, []],
  ['Sadguru Vandna', '—', '—', null, null, []],
  ['Sandhya Kinara', 'ప్రాణాయామ, ధ్యాన సంగీతం', 'Pranayama and Meditation Music',
    ['ఈ పేరుతో ఆల్బమ్ ఆన్‌లైన్‌లో దొరకలేదు. SSY ప్రాణాయామ సమయంలో వినిపించే నేపథ్య సంగీతం అని RSVK వర్ణన.', 'సంబంధం ఉండవచ్చు (ధృవీకరించలేదు): ఋషి వచన్ ట్రస్ట్ "సంధ్య" CDలు – పండిత్ మణి ప్రసాద్ (కిరానా ఘరానా) గానం: C-3 – రాగ్ భీమ్‌పలాసి, రాగ్ పూరియా ధనశ్రీ; C-7 – రాగ్ కౌశిక్ ధ్వని, రాగ్ భైరవి.'],
    ['No album under this title was found online. RSVK describes it as background music played during SSY pranayama.', 'Possibly related (not confirmed): the Rishi Vachan Trust "Sandhya" CDs sung by Pt. Mani Prasad (Kirana gharana): C-3 – Raag Bhim Palasi, Raag Puria Dhanashree; C-7 – Raag Kaushik Dhwani, Raag Bhairavi.'],
    [['Discogs – Sandhya, Pt. Mani Prasad (C-3)', 'Discogs – Sandhya, Pt. Mani Prasad (C-3)', 'https://www.discogs.com/release/14340382'],
     ['Discogs – Sandhya, Pt. Mani Prasad (C-7)', 'Discogs – Sandhya, Pt. Mani Prasad (C-7)', 'https://www.discogs.com/release/14340441']]],
  ['Shruti Stuti', 'కన్నడ భజనలు', 'Kannada Bhajans', null, null, []],
  ['Paramavasya', 'గోపాల, కృష్ణ, శివ భజనలు', 'Gopala, Krishna, Shiv Bhajans', null, null, []],
  ['Ravi Jule - Live at Mumbai', 'రవి జూలే – ముంబై ప్రత్యక్ష కచేరీ', 'Ravi Jule – live concert in Mumbai',
    ['ఈ ఆల్బమ్ ఆన్‌లైన్‌లో దొరకలేదు. రవి జూలే పండిత్ మణి ప్రసాద్ శిష్యుడు (ఋషి వచన్ ట్రస్ట్ CD కవర్‌పై పేర్కొన్నట్లు) – గాయకుడు, స్వరకర్త. ఆయన సొంత YouTube ఛానల్‌లో కొన్ని భజనలు ఉన్నాయి (ఇవి RSVK ఆల్బమ్‌లోనివని పేర్కొనలేదు).'],
    ['This album was not found online. Ravi Jule is a disciple of Pt. Mani Prasad (as printed on a Rishi Vachan Trust CD cover), a singer and composer. His own YouTube channel has some bhajans (not stated to be from the RSVK album).'],
    [['Ravi Jule – Jai Govinda (3:07)', 'Ravi Jule – Jai Govinda (3:07)', Y('1oEgONgGH0Y'), 'గాయకుడి అధికారిక ఛానల్', "the singer's own channel"],
     ['Ravi Jule – Na Baba Saath Jayega (5:17)', 'Ravi Jule – Na Baba Saath Jayega (5:17)', Y('6GDbZW6J5sc')],
     ['Ravi Jule – Mati Kahe Kumhar Se (6:44)', 'Ravi Jule – Mati Kahe Kumhar Se (6:44)', Y('iwF-eQA2UCo')]]],
  ['Annapurna Bhajans', 'అన్నపూర్ణ భజనలు', 'Annapurna bhajans',
    ['ఆన్‌లైన్‌లో దొరకలేదు. దొడ్డమరళవాడి ప్రధాన ఆశ్రమ ఆలయం "శ్రీ మాత అన్నపూర్ణేశ్వరి"కి అంకితం.'],
    ['Not found online. The temple at the main Doddamaralavadi ashram is dedicated to Sri Matha Annapoorneshwari.'], []],
  ['Devotional Bliss', '—', '—', null, null, []],
  ['Amrutaadhara', 'తెలుగు భజనల ఆల్బమ్', 'Telugu bhajan album',
    ['ఈ పేరుతో ఆల్బమ్ ఆన్‌లైన్‌లో దొరకలేదు. తెలుగు శ్రోతలు "SSY భజనలు" అని పెట్టిన కొన్ని తెలుగు పాటలు YouTubeలో ఉన్నాయి – ఏ ఆల్బమ్‌లోనివో తెలియదు.'],
    ['No album under this title was found online. Telugu listeners have posted some Telugu songs labelled "SSY bhajans" on YouTube – which album they come from is not known.'],
    [['శ్రీ రాముని స్పెషల్ పాటలు – SSY వారి (14:31)', 'Sri Rama songs – SSY (14:31)', Y('jBP4Yh8__cs'), 'శ్రోత అప్‌లోడ్', 'posted by a listener'],
     ['SSY భజన పాట – నందలాల (4:58)', 'SSY bhajan – Nandalala (4:58)', Y('lXWUlDPU3zM')],
     ['శ్రీ రామ రామ పాహి – SSY భజన పాట (4:43)', 'Sri Rama Rama Pahi – SSY bhajan (4:43)', Y('ZuVyLtgn9UM')]]],
  ['Bhakti Ras', 'గాయకుడు: రవి జూలే', 'Ravi Jule', null, null, []],
  ['Hari Darshan', 'గాయని: మీటా మెహతా', 'Meeta Mehta', null, null, []],
  ['Shree Hari Smaran', '—', '—', null, null, []],
  ['Chinni Chinni Krishnaiah', 'కన్నడ / హిందీ', 'Kannada / Hindi',
    ['బాల కృష్ణుని పాటల ఆల్బమ్. శ్రోతలు YouTubeలో పెట్టిన 31 నిమిషాల వీడియో పూర్తి ఆల్బమ్ కావచ్చు; శీర్షిక పాట మొదటి వరుస: **"చిన్ని చిన్ని కృష్ణయ్య, చిన్నారి కృష్ణయ్య"** (తెలుగు). RSVK దీన్ని "కన్నడ / హిందీ" అని పేర్కొంటుంది – బహుభాషా ఆల్బమ్ కావచ్చు; తేల్చలేదు.'],
    ['Songs about the child Krishna. A 31-minute video posted by listeners is likely the full album; the title song opens **"Chinni chinni Krishnayya, chinnari Krishnayya"** (Telugu). RSVK labels the album "Kannada / Hindi" – it may be multilingual; this is unresolved.'],
    [['శ్రీకృష్ణ స్పెషల్ సాంగ్స్ – చిన్ని చిన్ని కృష్ణయ్య – SSY వారి సాంగ్స్ (31:29)', 'Sri Krishna songs – Chinni Chinni Krishnayya – SSY songs (31:29)', Y('mJG9VwosvO0'), 'శ్రోత అప్‌లోడ్', 'posted by a listener'],
     ['చిన్ని చిన్ని కృష్ణయ్య – SSY Song (6:40)', 'Chinni Chinni Krishnayya – SSY song (6:40)', Y('ureOW-ljGgY')]]]
];
const bhaktiras = [['Aao Gurudeva', 'Z5blyaHIn7A', '3:56', 'Vijendra'], ['Guru Hamare Man Mandirme', 'XF1_ez2gNuY', '3:57', 'Sarika Bhat'], ['GuruDev Ram GuruDev Shyam', 'En3z1Ao3j9g', '3:54', 'Chetan'], ['Yelloh Hudukide', 'BkBTzWZTghw', '4:48', 'Kiran Bhat'], ['Guru Brahma Guru Vishnu', 'Dhj0-RC7W04', '2:32', 'Sarika Bhat'], ['Guru Mahima', 'TnsJ1iDMzbU', '2:40', 'Sarika Bhat'], ['Guru Brahma Roop Jaano', 'Rtxq_2UPf1w', '3:14', 'Sahana'], ['Guru Maharaj Guru Maharaj', 'aycBmM99j3Y', '4:32', 'Vijendra'], ['Guru Mahima Gaavo', 'N2FR9wbwPHc', '2:43', 'Guru Maharaj'], ['Guru Deva Guru Govinda', 'GjdtpP4ZRMo', '1:52', 'Vijendra']];
const bhNote = {
  te: { 0: 'గురూజీకి "ఎప్పటికీ ఇష్టమైన గురు భజన"', 3: 'కన్నడ భావగీతం – "గురూజీకి అత్యంత ఇష్టమైన పాట"', 4: '"గురుర్బ్రహ్మా" శ్లోక భావంపై', 8: 'గురూజీ స్మరణలో భక్తి కథ' },
  en: { 0: '"an all-time favourite guru bhajan"', 3: 'Kannada bhavageete – "Guruji\'s favourite song of all time"', 4: 'built on the "Gurur Brahma" verse', 8: 'a devotional story in remembrance of Guruji' }
};
const verses = [
  { te: 'అసతో మా సద్గమయ – SSY తరగతిలో నేర్పే ప్రార్థన', en: 'Asato ma sadgamaya – the prayer taught in the SSY class',
    deva: ['ॐ असतो मा सद्गमय ।', 'तमसो मा ज्योतिर्गमय ।', 'मृत्योर्मा अमृतं गमय ।', 'ॐ शान्तिः शान्तिः शान्तिः ॥'],
    tel: ['ఓం అసతో మా సద్గమయ ।', 'తమసో మా జ్యోతిర్గమయ ।', 'మృత్యోర్మా అమృతం గమయ ।', 'ఓం శాంతిః శాంతిః శాంతిః ॥'],
    iast: ['oṃ asato mā sad gamaya |', 'tamaso mā jyotir gamaya |', 'mṛtyor mā amṛtaṃ gamaya |', 'oṃ śāntiḥ śāntiḥ śāntiḥ ||'],
    mte: 'అసత్యం నుండి సత్యానికి నన్ను నడిపించు. చీకటి నుండి వెలుగుకు నన్ను నడిపించు. మృత్యువు నుండి అమరత్వానికి నన్ను నడిపించు. ఓం శాంతి, శాంతి, శాంతి.',
    men: 'From the unreal lead me to the real. From darkness lead me to light. From death lead me to immortality. Om, peace, peace, peace.',
    ste: 'మూలం: బృహదారణ్యక ఉపనిషత్ 1.3.28. SSYలో వాడకం: SSY USA సాధకురాలు విశాఖ "ఆనందో" – "ఈ మంత్రాన్ని నా SSY తరగతిలో నేర్చుకున్నాను; దాని అర్థం తరగతిలోనే అర్థమైంది" ([anando.me](https://anando.me/2017/02/16/my-guruji-is-an-immortal-being/)).',
    sen: 'Source: Brihadaranyaka Upanishad 1.3.28. Use in SSY: SSY USA meditator Vishakha "Anando" – "I learnt this mantra in my SSY class… I understood the meaning of it in the class" ([anando.me](https://anando.me/2017/02/16/my-guruji-is-an-immortal-being/)).' },
  { te: 'గురుర్బ్రహ్మా – గురు వందనం', en: 'Gurur Brahma – salutation to the Guru',
    deva: ['गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः ।', 'गुरुः साक्षात् परं ब्रह्म तस्मै श्रीगुरवे नमः ॥'],
    tel: ['గురుర్బ్రహ్మా గురుర్విష్ణుః గురుర్దేవో మహేశ్వరః ।', 'గురుః సాక్షాత్ పరం బ్రహ్మ తస్మై శ్రీగురవే నమః ॥'],
    iast: ['gurur brahmā gurur viṣṇuḥ gurur devo maheśvaraḥ |', 'guruḥ sākṣāt paraṃ brahma tasmai śrī-gurave namaḥ ||'],
    mte: 'గురువే బ్రహ్మ, గురువే విష్ణువు, గురువే మహేశ్వరుడు. గురువే సాక్షాత్ పరబ్రహ్మ – ఆ శ్రీ గురువుకు నమస్కారం.',
    men: 'The Guru is Brahma, the Guru is Vishnu, the Guru is the god Maheshvara (Shiva). The Guru is truly the supreme Brahman; to that revered Guru, salutation.',
    ste: `మూలం: గురుగీత. SSYలో వాడకం: RPIF అధికారిక "Guru Brahma Guru Vishnu" ([వీడియో](${Y('Dhj0-RC7W04')})), SSY Life "GURUR BRAMHA" ([వీడియో](${Y('COyiMI8lt7E')})).`,
    sen: `Source: Guru Gita. Use in SSY: RPIF's official "Guru Brahma Guru Vishnu" ([video](${Y('Dhj0-RC7W04')})) and SSY Life's "GURUR BRAMHA" ([video](${Y('COyiMI8lt7E')})).` },
  { te: 'ధ్యానమూలం గురోర్మూర్తిః', en: 'Dhyana-mulam guror murtih',
    deva: ['ध्यानमूलं गुरोर्मूर्तिः पूजामूलं गुरोः पदम् ।', 'मन्त्रमूलं गुरोर्वाक्यं मोक्षमूलं गुरोः कृपा ॥'],
    tel: ['ధ్యానమూలం గురోర్మూర్తిః పూజామూలం గురోః పదమ్ ।', 'మంత్రమూలం గురోర్వాక్యం మోక్షమూలం గురోః కృపా ॥'],
    iast: ['dhyāna-mūlaṃ guror mūrtiḥ pūjā-mūlaṃ guroḥ padam |', 'mantra-mūlaṃ guror vākyaṃ mokṣa-mūlaṃ guroḥ kṛpā ||'],
    mte: 'ధ్యానానికి మూలం గురువు రూపం; పూజకు మూలం గురువు పాదం; మంత్రానికి మూలం గురువు వాక్యం; మోక్షానికి మూలం గురువు కృప.',
    men: "The root of meditation is the Guru's form; the root of worship is the Guru's feet; the root of mantra is the Guru's word; the root of liberation is the Guru's grace.",
    ste: 'మూలం: గురుగీత. SSYలో వాడకం: గురు పూర్ణిమ 2025 నాడు గురూజీకి సాధకుల నివాళి ([anando.me](https://anando.me/2025/07/19/jai-gurudev-%f0%9f%99%8f%f0%9f%8f%bc/)).',
    sen: "Source: Guru Gita. Use in SSY: a meditator's Guru Purnima 2025 tribute to Guruji ([anando.me](https://anando.me/2025/07/19/jai-gurudev-%f0%9f%99%8f%f0%9f%8f%bc/))." },
  { te: 'గాయత్రీ మంత్రం – ఉపనయన శిబిరం, గురుకుల సంధ్యావందనం', en: 'Gayatri mantra – Upanayana camp and Gurukulam sandhya vandana',
    deva: ['ॐ भूर्भुवः स्वः ।', 'तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।', 'धियो यो नः प्रचोदयात् ॥'],
    tel: ['ఓం భూర్భువః స్వః ।', 'తత్సవితుర్వరేణ్యం భర్గో దేవస్య ధీమహి ।', 'ధియో యో నః ప్రచోదయాత్ ॥'],
    iast: ['oṃ bhūr bhuvaḥ svaḥ |', 'tat savitur vareṇyaṃ bhargo devasya dhīmahi |', 'dhiyo yo naḥ pracodayāt ||'],
    mte: 'ఓం. భూమి, అంతరిక్షం, స్వర్గం. సవితృ దేవుని శ్రేష్ఠమైన తేజస్సును ధ్యానిస్తున్నాం; ఆయన మా బుద్ధులను ప్రేరేపించుగాక. గురూజీ వివరణ: "భగవంతుడు నా బుద్ధిని విస్తరించి నన్ను మేధావిని చేయుగాక".',
    men: 'Om. Earth, mid-air, heaven. We meditate on that most excellent radiance of the god Savitr; may he stir our thoughts. Guruji\'s gloss: "May God expand my intellect and make me intelligent".',
    ste: `మూలం: ఋగ్వేదం 3.62.10 (ఋషి విశ్వామిత్రుడు). SSYలో వాడకం: 16 రోజుల గాయత్రీ ఉపదేశం, రోజుకు 4,000 జపాలు ([rsvk.org](https://www.rsvk.org/upanayana-camp)); గురుకులంలో రోజువారీ సంధ్యావందనం ([rsvs-rishigurukulam.org](http://rsvs-rishigurukulam.org/activities.html)); గురూజీ వీడియో "Guruji speaks about Gayatri Mantra" ([YouTube](${Y('tyrZBRsz-f4')})).`,
    sen: `Source: Rigveda 3.62.10 (seer Vishvamitra). Use in SSY: the 16-day Gayatri Upadesha with 4,000 japas a day ([rsvk.org](https://www.rsvk.org/upanayana-camp)); daily sandhya vandana at the Gurukulam ([rsvs-rishigurukulam.org](http://rsvs-rishigurukulam.org/activities.html)); Guruji's video "Guruji speaks about Gayatri Mantra" ([YouTube](${Y('tyrZBRsz-f4')})).` }
];
module.exports = function bhajanBlocks(lang) {
  const te = lang === 'te', nf = NF[lang];
  const blocks = [];
  blocks.push({ type: 'h2', id: 'bhajans', text: te ? 'భజన ఆల్బమ్‌లు – 17 (ఒక్కొక్క ఆల్బమ్‌లో ఏముంది, ఎక్కడ వినవచ్చు)' : 'Bhajan albums – 17 (what is on each album and where to listen)' });
  blocks.push({ type: 'p', text: te ? 'RSVK ఈ 17 ఆల్బమ్‌ల పేర్లు మాత్రమే ప్రచురించింది – ట్రాక్ జాబితాలు, గాయకుల వివరాలు ఇవ్వలేదు. ఇంటర్నెట్‌లో దొరికిన ప్రతిదీ కింద ఉంది: 1 ఆల్బమ్‌కు Discogs ట్రాక్ జాబితా, 3 ఆల్బమ్‌లు శ్రోతలు YouTubeలో పెట్టినవి; 11 ఆల్బమ్‌లకు ఆన్‌లైన్‌లో ఏ జాడా లేదు. ప్రతి ఆల్బమ్‌ను నొక్కి వివరాలు చూడండి.' : 'RSVK has published only the names of these 17 albums – no tracklists or singer credits. Everything found on the internet is below: a Discogs tracklist for 1 album and 3 albums posted on YouTube by listeners; 11 albums have no trace online. Tap an album to see its details.' });
  blocks.push({ type: 'accordion', items: albums.map(([name, dte, den, pte, pen, links], i) => {
    const desc = te ? dte : den;
    const paras = (te ? pte : pen) || [nf + (te ? ' – RSVK నుండి నేరుగా కొనాలి (99000 23241 / 99000 23275).' : ' – available only from RSVK directly (99000 23241 / 99000 23275).')];
    const item = { q: `${i + 1}. **${name}**${desc && desc !== '—' ? ' – ' + desc : ''}${links.length ? ' 🔊' : ''}`, a: paras };
    if (links.length) item.items = links.map(([lte, len, href, nte, nen]) => `[${te ? lte : len}](${href})${(te ? nte : nen) ? ' – ' + (te ? nte : nen) : ''}`);
    return item;
  }) });
  blocks.push({ type: 'h3', text: te ? '"గురు భక్తిరస్" – 10 భజనలు (గురూజీ కుటుంబం / RPIF అధికారిక సిరీస్)' : '"Guru Bhaktiras" – 10 bhajans (official series by Guruji\'s family / RPIF)' });
  blocks.push({ type: 'p', text: te ? 'గురు పూర్ణిమ 2022 (జూలై 13) నాడు "The House of Rishi Prabhakar" YouTube ఛానల్‌లో విడుదల. నిర్మాత: అరుంధతి ఋషి ప్రభాకర్; స్వరకల్పన: కిరణ్ శంకర్ బృందం. పూర్తి ప్లేలిస్ట్: [YouTube](https://www.youtube.com/playlist?list=PLawEB4MRHxartsk-P--ZcbcYNF1tX1lp0).' : 'Released on Guru Purnima 2022 (13 July) on the "The House of Rishi Prabhakar" YouTube channel. Producer: Arundhati Rishi Prabhakar; music: Kiran Shankar and group. Full playlist: [YouTube](https://www.youtube.com/playlist?list=PLawEB4MRHxartsk-P--ZcbcYNF1tX1lp0).' });
  blocks.push({ type: 'table', compact: true, head: te ? ['#', 'భజన (వినండి)', 'గాయకులు · నిడివి · గమనిక'] : ['#', 'Bhajan (listen)', 'Singer · length · note'], rows: bhaktiras.map(([t, id, d, s], i) => [String(i + 1), `[${t}](${Y(id)})`, `${s} · ${d}${bhNote[lang][i] ? ' · ' + bhNote[lang][i] : ''}`]) });
  blocks.push({ type: 'h3', text: te ? 'ఇతర SSY సంగీతం ఆన్‌లైన్‌లో' : 'Other SSY music online' });
  blocks.push({ type: 'links', items: te ? [
    { label: '"బైరాగి" – మీరాబాయి, కబీర్ కవితల ఆల్బమ్ ("సిద్ధ సమాధి యోగ నిర్మాణం, గురూజీ ఆశీస్సులతో") – "Daras Bina", డా. శారికా మీనన్ (4:29)', href: Y('AP8jEMjU_R4') },
    { label: 'GURUR BRAMHA – SSY Life అధికారిక ఛానల్ (7:19)', href: Y('COyiMI8lt7E') },
    { label: 'ఓం గురుదేవ జయ గురుదేవ (SSY భజన) – గాయని రజని (3:10)', href: Y('mOjqa5zIxYo'), text: 'సాధకులు అప్‌లోడ్ చేసినది' },
    { label: 'RPIF Music – Khushi, Azaadi, Zeest', href: 'https://rpif.org.in/rpif-music/' }
  ] : [
    { label: '"Bairagi" – an album of Mirabai and Kabir poems ("produced by Siddha Samadhi Yoga with the blessings of Guruji") – "Daras Bina", Dr Sharika Menon (4:29)', href: Y('AP8jEMjU_R4') },
    { label: 'GURUR BRAMHA – SSY Life official channel (7:19)', href: Y('COyiMI8lt7E') },
    { label: 'Om Gurudeva Jaya Gurudeva (SSY bhajan) – singer Rajani (3:10)', href: Y('mOjqa5zIxYo'), text: 'posted by practitioners' },
    { label: 'RPIF Music – Khushi, Azaadi, Zeest', href: 'https://rpif.org.in/rpif-music/' }
  ] });
  blocks.push({ type: 'h2', id: 'prayers', text: te ? 'SSYలో వాడే ప్రార్థనలు – పూర్తి పాఠం, అర్థంతో' : 'Prayers used in SSY – full text with meaning' });
  blocks.push({ type: 'p', text: te ? 'ఇవి వేదాలు, ఉపనిషత్తులు, గురుగీత నుండి వచ్చిన సంప్రదాయ (కాపీరైట్ లేని) శ్లోకాలు – కాబట్టి పూర్తి పాఠం ఇక్కడ ఇవ్వగలం. ప్రతి దానికి SSYలో వాడకానికి ఆధారం కింద ఉంది.' : 'These are traditional verses from the Vedas, Upanishads and the Guru Gita, free of copyright – so their full text can be given here. The evidence for each one\'s use in SSY is underneath.' });
  for (const v of verses) blocks.push({ type: 'verse', title: te ? v.te : v.en, scripts: te ? [{ label: 'తెలుగు లిపి', lang: 'sa-Telu', lines: v.tel }, { label: 'దేవనాగరి', lang: 'sa', lines: v.deva }] : [{ label: 'Devanagari', lang: 'sa', lines: v.deva }, { label: 'Transliteration (IAST)', lang: 'sa-Latn', lines: v.iast }], meaning: (te ? '**అర్థం:** ' + v.mte : '**Meaning:** ' + v.men), source: te ? v.ste : v.sen });
  blocks.push({ type: 'note', kind: 'info', title: te ? 'SSY గురు పూజ పాఠం గురించి' : 'About the SSY Guru Pooja text', text: te ? 'SSY టీచర్లు "పూజ చాంటింగ్" పూర్తిగా నేర్చుకోవాలి (TTC దశ 1). దాని పాఠం ఆన్‌లైన్‌లో ఎక్కడా ప్రచురించలేదు; సాధకులు రికార్డ్ చేసిన వీడియోలు పై "Guru Pooja" ఆల్బమ్‌లో ఉన్నాయి. ఏ పాఠమో ధృవీకరించకుండా "SSY గురు పూజ" అని ఇక్కడ ఏ పాఠాన్నీ ప్రచురించడం లేదు. "జై గురు దేవ" – SSYలో సాధారణ నమస్కారం (1993 RSVK క్యాసెట్ కవర్‌పై కూడా ముద్రించినది).' : 'SSY teachers must learn the "puja chanting" completely (TTC Phase 1). Its text is not published anywhere online; practitioners\' recordings are listed under the "Guru Pooja" album above. No text is printed here as "the SSY Guru Pooja" without confirmation of which text it is. "Jai Guru Deva" is the usual SSY salutation (it is also printed on a 1993 RSVK cassette inlay).' });
  return blocks;
};
