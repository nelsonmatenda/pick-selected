console.log("from content.js");

const wordSelected = (sendResponse) => {
  const selectedText = window.getSelection().toString().trim();
  if (!selectedText) return;
  console.log("thats the word: ", selectedText);
  sendResponse(selectedText);
};

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  window.addEventListener("mouseup", wordSelected(sendResponse));
});
