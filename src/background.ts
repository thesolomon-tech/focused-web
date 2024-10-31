import { checkIfTimeUp } from "./Listeners";

chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.create({
    url: chrome.runtime.getURL("page.html"),
  });
});

const establish_listeners = () => {
  // 1. Before navigation starts - earliest point to intercept
  chrome.webNavigation.onBeforeNavigate.addListener((details) => {
    if (details.frameId !== 0) return;
    checkIfTimeUp(details.url, details.tabId);
  });

  // 2. When the DOM starts loading
  chrome.webNavigation.onCommitted.addListener((details) => {
    if (details.frameId !== 0) return;
    checkIfTimeUp(details.url, details.tabId);
  });

  // 3. When the page completes loading
  chrome.webNavigation.onCompleted.addListener((details) => {
    if (details.frameId !== 0) return;
    checkIfTimeUp(details.url, details.tabId);
  });

  // 4. When history state updates (for single page apps)
  chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
    if (details.frameId !== 0) return;
    checkIfTimeUp(details.url, details.tabId);
  });

  // 5. When the URL hash changes
  chrome.webNavigation.onReferenceFragmentUpdated.addListener((details) => {
    if (details.frameId !== 0) return;
    checkIfTimeUp(details.url, details.tabId);
  });

  // 6. Tab URL changes
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url) {
      checkIfTimeUp(changeInfo.url, tabId);
    }
  });
};
establish_listeners();
