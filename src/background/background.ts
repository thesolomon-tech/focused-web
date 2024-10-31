import { checkIfTimeUp, establish_sitecheck_listeners } from "./Listeners";

chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.create({
    url: chrome.runtime.getURL("page.html"),
  });
});

establish_sitecheck_listeners();
