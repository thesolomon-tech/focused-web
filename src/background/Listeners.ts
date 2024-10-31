import { get_from_storage } from "../communications";

export const establish_sitecheck_listeners = () => {
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

export const checkIfTimeUp = async (url: string, tabId: number) => {
  const stored_urls = await get_from_storage();
  if (stored_urls) {
    // console.log("Current URL:", url);
    // console.log("Formatted Current URL:", formatURL(url));
    // console.log("Stored URLs:", formatURL(stored_urls.blocked_pages[0].url));

    const matching_url = stored_urls.blocked_pages.find(
      (blocked_page) => formatURL(blocked_page.url) === formatURL(url)
    );
    if (matching_url) {
      console.log("matching");
      if (matching_url.allocated_time <= matching_url.time_remaining) {
        open_times_up_page(url, tabId);
        console.log("triggered");
        return;
      }
    }
    // console.log("not matching");
    // console.log("Attempted to match:", matching_url);
  }
};

const open_times_up_page = (url: string, tabId: number) => {
  const urlParams = new URLSearchParams();
  urlParams.set("originalUrl", url);

  chrome.tabs.update(tabId, {
    url: `${chrome.runtime.getURL("outOfTime.html")}?${urlParams.toString()}`,
  });
  console.log(
    `${chrome.runtime.getURL("outOfTime.html")}?${urlParams.toString()}`
  );
};

function formatURL(url: string) {
  // Remove leading/trailing whitespace
  url = url.trim().toLowerCase();
  url = url.replace(/\/+$/, "");

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
