const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuoteBtn = document.querySelector("#new-quote");
const tweetQuoteBtn = document.getElementById("tweet-quote");
const API_URL = "http://api.quotable.io/random";

async function getQuote(url) {
  const res = await fetch(url);
  const data = await res.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

function tweet() {
  window.open(
    `https://twitter.com/intent/tweet?text=${quote.innerHTML}` +
      `---- by ${author.innerHTML}`,
    "Tweet Window",
    "width=600, height=350"
  );
}

newQuoteBtn.addEventListener("click", () => {
  getQuote(API_URL);
});
tweetQuoteBtn.addEventListener("click", tweet);
document.addEventListener("DOMContentLoaded", getQuote(API_URL));
