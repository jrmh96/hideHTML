let block = true;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ block });
});

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}