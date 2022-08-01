const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const btnQuote = document.querySelector(".btnQuote");
const btnText = document.querySelector(".btnText");
const loader = document.querySelector(".loader");
const soundBtn = document.querySelector(".soundBtn");
const copyBtn = document.querySelector(".copyBtn");
const twitterBtn = document.querySelector(".twitterBtn");
const copiedMsg = document.querySelector(".copiedMsg");

const generateQuote = () => {
  btnText.innerHTML = "Fetching...";
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      quote.innerText = result.content;
      author.innerText = result.author;
      btnText.innerText = "New Quote";
    });
};

soundBtn.addEventListener("click", () => {
  utterance = new SpeechSynthesisUtterance(
    `${quote.innerText} by ${author.innerText}`
  );
  speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(quote.innerText);
  copiedMsg.classList.remove("hidden");
  setTimeout(function () {
    copiedMsg.classList.add("hidden");
  }, 1500);
});

twitterBtn.addEventListener("click", () => {
  let url = `https://twitter.com/intent/tweet?url=${quote.innerText}`;
  window.open(url, "_blank");
});

btnQuote.addEventListener("click", generateQuote);
