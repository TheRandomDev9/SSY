/* contents – what is inside every book, talk and bhajan album (summaries, short quotes, where to read/listen) */
const lang = 'en';
module.exports = {
  id: 'contents',
  title: 'Contents – what is inside every book, talk and bhajan album',
  short: 'Contents of books, talks, bhajans',
  lead: 'The **13 books, 51 audio talks and 17 bhajan albums** on the RSVK list – what each one contains and where on the internet it can be read or heard, in one place. For every item: its online status, a summary in this site\'s words, short quotes of Guruji\'s words (with a source link), and read/listen links. The prayers (public-domain texts) are given in full.',
  blocks: [
    { type: 'kv', items: [
      ['What was found', '**Books:** none of the 13 is online in full – blurbs, previews, tables of contents and Guruji\'s writings on the same subjects were found. **Talks:** 1 full recording ("The Art of Learning"); for about 40, Guruji\'s words on the same subject (Rishi Vani magazine, blog texts, YouTube). **Bhajans:** a tracklist for 1 album (Discogs), listener uploads for a few, and the "Guru Bhaktiras" series on YouTube.'],
      ['Where to buy', 'Full books and cassettes/CDs: RSVK – **99000 23241 / 99000 23275**, ashrams and course centres. The full list: [Publications list](publications.html).'],
      ['Copyright', 'The books, talks, magazines and albums are copyright of RSVK / SSY.life / the artists. What is here: summaries (in our words), short quotes and links to the original sources. Full text is given only for the ancient prayers.'],
      ['Checked', 'Internet search, 5 November 2026. YouTube and blog links may be taken down at any time.']
    ] },
    { type: 'chips', items: ['[📚 Books – 13 + 6](#books)', '[🎙️ Talks – 51](#talks)', '[🎵 Bhajans – 17](#bhajans)', '[🙏 Prayers](#prayers)'] },
    ...require('../../parts/books.js')(lang),
    ...require('../../parts/talks.js')(lang),
    ...require('../../parts/bhajans.js')(lang)
  ]
};
