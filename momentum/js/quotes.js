const quotes = [
  {
    quote: "명언1",
    author: "000의 엄",
  },
  {
    quote: "명언2",
    author: "000의 엄",
  },
  {
    quote: "명언3",
    author: "000의 엄",
  },
  {
    quote: "명언4",
    author: "000의 엄",
  },
  {
    quote: "명언5",
    author: "000의 엄",
  },
  {
    quote: "명언6",
    author: "000의 엄",
  },
  {
    quote: "명언7",
    author: "000의 엄",
  },
  {
    quote: "명언8",
    author: "000의 엄",
  },
  {
    quote: "명언9",
    author: "000의 엄",
  },
  {
    quote: "명언10",
    author: "000의 엄",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

console.log(todaysQuote.quote);
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
