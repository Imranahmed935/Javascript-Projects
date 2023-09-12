const newQuote = document.getElementById("quote");
const author = document.getElementById("author");

const api_url = "https://api.quotable.io/random";

async function getQuote(url) {
  const res = await fetch(url);
  var data = await res.json();
  newQuote.innerHTML = data.content;
  author.innerHTML = data.author;
}
getQuote(api_url);

function tweet() {
  window.open(
    (href = "https://twitter.com/intent/tweet?text=" + newQuote.innerHTML) +
      "--- by" +
      author.innerHTML,
    "tweet window",
    "width=600px, hight=300px"
  );
}
