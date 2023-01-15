console.log("from extension popup");
const myWord = document.querySelector(".myword");

(async () => {
  const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });
  const response = await chrome.tabs.sendMessage(tab.id, {
    command: "selection",
  });
  myWord.innerHTML = response;
})();
