// quotes Array
const quotes = [
  {
    quote:
      "When you go through hardships and decide not to surrender, that is strength.",
    author: "Arnold Schwarzenegger",
  },
  {
    quote: "Tough times never last, but tough people do.",
    author: "Robert H. Schuller",
  },
  {
    quote:
      "Be a king in your mind but do the work of a servant, with a purpose, on a mission, you get to what you deserving.",
    author: "Demian Lillard",
  },
  {
    quote: "Ancora imparo",
    author: "Michelangelo",
  },
  {
    quote: "You cannot change what you are, only what you do.",
    author: "Philip Pullman",
  },
  {
    quote:
      "If you run you stand a chance of losing, but if you don’t run you’ve already lost.",
    author: "Barack Obama",
  },
  {
    quote:
      "It is hard to fail, but it is worse never to have tried to succeed.",
    author: "John F. Kenney",
  },
  {
    quote: "Don't depend on forces outside of yourself to get ahead.",
    author: "Oprah Winfrey",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// random quetos
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

// paint quotes
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
