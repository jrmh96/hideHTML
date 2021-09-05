// This file controls the button html only, not the web page
// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

// let originalBlock = document.body.getElementById("hot-network-questions");
// let obparent = originalBlock.parentNode;

// When the button is clicked, change block status
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  chrome.storage.sync.get("block", data => {
    const block = data["block"];
    let block1 = !block;

    chrome.storage.sync.set({"block": block1}, () => {
      if(block1) {
        changeColor.style.backgroundColor = "#e8453c";
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: setBlock,
        });
      } else {
        changeColor.style.backgroundColor = "#3aa757";
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: resetBlock,
        });
      }
    });
  });
});

// redundant - used for setting up before first click
chrome.storage.sync.get("block", ({ block }) => {
  if(block) {
    changeColor.style.backgroundColor = "#e8453c";
  } else {
    changeColor.style.backgroundColor = "#3aa757";
  }
});
  
// The body of this function will be executed as a content script inside the
// current page
function setBlock() {
    originalBlock = document.getElementById("hot-network-questions"); // this part works
    if(originalBlock) { originalBlock.style.display = 'none'; } // do we need to refresh?
}

function resetBlock() {
    originalBlock = document.getElementById("hot-network-questions");
    if(originalBlock) { originalBlock.style.display = 'block'; }
}