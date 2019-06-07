const loremTextGenerator = require("lorem-ipsum").loremIpsum;




const getPost = () => {
    const title = loremTextGenerator({
        count: 3,                // Number of "words", "sentences", or "paragraphs"
        format: "plain",         // "plain" or "html"
        paragraphLowerBound: 1,  // Min. number of sentences per paragraph.
        paragraphUpperBound: 1,  // Max. number of sentences per paragarph.
        random: Math.random,     // A PRNG function
        sentenceLowerBound: 3,   // Min. number of words per sentence.
        sentenceUpperBound: 8,  // Max. number of words per sentence.
        units: "words",      // paragraph(s), "sentence(s)", or "word(s)"
    })

    const intro = loremTextGenerator({
        count: 30,               // Number of "words", "sentences", or "paragraphs"
        format: "plain",         // "plain" or "html"
        paragraphLowerBound: 2,  // Min. number of sentences per paragraph.
        paragraphUpperBound: 2,  // Max. number of sentences per paragarph.
        random: Math.random,     // A PRNG function
        sentenceLowerBound: 5,   // Min. number of words per sentence.
        sentenceUpperBound: 8,  // Max. number of words per sentence.
        units: "sentences",      // paragraph(s), "sentence(s)", or "word(s)"
    })

    return {
        title,
        infoUser: intro,
        id: Math.floor(Math.random() * 100)
    };
};


module.exports = { getPost };