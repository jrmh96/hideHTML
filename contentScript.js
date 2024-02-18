// Content Script checks the persisted state of the "block" status (can be true / false)
// upon page load, so that elements are appropriately blocked even when the popup isn't up

// You will need to update "matches" at manifest.json for different sites
let idBlockList = [
	["hot-network-questions", "stackoverflow"],
	["related", "youtube"]
];

// TODO: Consolidate this function with the ones in popup.js
// e.g. setBlock(display: string)
let checkBlock = (shouldBlock) => {
	console.log("calling content script")
	for (var idStrs of idBlockList) {
		let originalBlock = document.getElementById(idStrs[0]);
		if (originalBlock && shouldBlock) {
			originalBlock.style.display = 'none';
		}
	}
}

chrome.storage.sync.get("block", ({ block }) => {
	checkBlock(block);
});
