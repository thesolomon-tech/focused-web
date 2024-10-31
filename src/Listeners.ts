import { get_from_storage } from "./communications";

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

const checkIfTimeUp = async (url: string, tabId: number) => {
  const stored_urls = await get_from_storage();
  if (stored_urls) {
    const matching_url = stored_urls.blocked_pages.find(
      (blocked_page) => blocked_page.url == url
    );
    if (matching_url) {
      if (matching_url.allocated_time <= matching_url.time_remaining) {
        open_times_up_page(url, tabId);
      }
    }
  }
};

const open_times_up_page = (url: string, tabId: number) => {
  chrome.tabs.update(tabId, {
    url: chrome.runtime.getURL("outOfTime.html"),
  });
};

function formatURL(url: string) {
  // Remove leading/trailing whitespace
  url = url.trim();

  // Check if URL already has a protocol
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  // Add https://www. if the URL doesn't start with www.
  if (!url.startsWith("www.")) {
    return `https://www.${url}`;
  }

  // Add https:// if the URL starts with www.
  return `https://${url}`;
}
