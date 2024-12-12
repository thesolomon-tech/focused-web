import remove_yt_items from "./removers";

document.addEventListener("DOMContentLoaded", remove_yt_items);
window.addEventListener("load", remove_yt_items);
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    remove_yt_items();
  }
});
const observer = new MutationObserver(() => {
  remove_yt_items();
});

// Start observing
observer.observe(document.documentElement || document.body, {
  childList: true,
  subtree: true,
});
