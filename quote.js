const sample = require("lodash.sample");

const quotes = [
  "Sometimes, I just don't understand human behavior.",
  "It's against my programming to impersonate a deity.",
  "I suggest a new strategy, R2. Let the Wookiee win.",
  "R2-D2, you know better than to trust a strange computer.",
  "The Great Jabba the Hutt has decreed that you are to be terminated immediately.",
];

exports.getQuote = () => {
  const randomQuote = sample(quotes);

  return randomQuote;
};
