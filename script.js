const quotes = [
    "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    "Some people look for a beautiful place. Others make a place beautiful.",
    "Happiness is not by chance, but by choice.",
    "If I cannot do great things, I can do small things in a great way.",
    "The bad news is time flies. The good news is you're the pilot.",
    "You make a life out of what you have, not what you're missing.",
    "It's how you deal with failure that determines how you achieve success."
]

function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

function outputQuote(quotes) {
    const indexNumber = generateRandomNumber(quotes.length);
    const quote = quotes[indexNumber];
    console.log(quote);
}

outputQuote(quotes);

const characterStrengths = {
    'Wisdom': ['Creativity', 'Curiosity', 'Judgment', 'Love of learning', 'Perspective'],
    'Courage': ['Bravery', 'Honesty', 'Perseverance', 'Zest'],
    'Humanity': ['Kindness', 'Love', 'Social Intelligence'],
    'Justice': ['Fairness', 'Leadership', 'Teamwork'],
    'Temperance': ['Forgiveness', 'Humility', 'Prudence', 'Self-Regulation'],
    'Transcendence': ['Appreciation of Beauty and Excellence', 'Gratitude', 'Hope', 'Humor', 'Spirituality'],
}

console.log(Object.keys(characterStrengths).length);
