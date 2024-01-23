const { quotes, characterStrengths, descriptionStrengths } = require('./api')

function getRandomVirtue(obj) {
    const listKeys = Object.keys(obj);
    const index = generateRandomNumber(listKeys.length);
    const virtue = listKeys[index];
    return virtue;
}

function getRandomStrength(obj, virtue) {
    const strengthsList = obj[virtue];
    const index = generateRandomNumber(strengthsList.length);
    const strength = strengthsList[index];
    return strength;
}

function getStrengthDescription(strength) {
    return descriptionStrengths[strength];
}

function getQuote(quotes) {
    const indexNumber = generateRandomNumber(quotes.length);
    const quote = quotes[indexNumber];
    return quote;
}

function outputMessage() {
    const virtue = getRandomVirtue(characterStrengths);
    const strength = getRandomStrength(characterStrengths, virtue);
    const description = getStrengthDescription(strength);
    const quote = getQuote(quotes);
    const message = `\nThis is a random message generator describing one of the many character strengths we have in our possession, some in a greater extent than others.\n\n\n"${strength}".\nWhich virtue is this character strength? -> ${strength} is a strength within the virtue category of ${virtue.toLowerCase()}.\nWhat is ${strength}? -> ${description}\n\n`;

    console.log(message);
    console.log(`Inspirational quote: "${quote}"\n\n`);
    console.log(`Virtues, strengths and descriptions of character strengths have been provided by https://www.viacharacter.org\n`)
}

// Helper function to get a random number
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

outputMessage();