console.log("from extension popup");
const myWord = document.querySelector(".myword");
const wordDefinition = document.querySelector(".definition");
(async () => {
  const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });
  const response = await chrome.tabs.sendMessage(tab.id, {
    command: "selection",
  });
  let url = `https://api.wordnik.com/v4/word.json/${response}/definitions?limit=1&includeRelated=false&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=YourAPIkey`;
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.send();

  request.addEventListener("load", function () {
    const data = JSON.parse(this.responseText);
    // console.log(this.responseText);
    wordDefinition.innerHTML = data[0].text;
  });

  myWord.innerHTML = response;
})();
