// To scale this up, we will need to replace original block with a list
// of elements

chrome.storage.sync.get("block", ({ block }) => {
    let originalBlock = document.getElementById("hot-network-questions");
    // console.log(originalBlock);
    if (block && originalBlock) {
        // hide element
        originalBlock.style.display = 'none';
    } else {
        // set element
        if(originalBlock) {
            originalBlock.style.display = 'block';
        }
    }
});

// console.log("exiting");

