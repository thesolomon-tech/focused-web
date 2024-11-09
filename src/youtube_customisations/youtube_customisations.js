import { get_from_storage } from "../communications";
import { cleanUpFYClasses } from "./dom";
import { initHomePage } from "./pages/homepage";
import { enableTheaterMode } from "./theater_customisations";

//Credits to makaroni4 for much of the code and process

/**
 * Retrieves the config, checks storage and activates the filter
 */
export default async function focused_youtube() {
  if (!window.location.href.includes("youtube.com")) {
    return;
  }
  cleanUpFYClasses();

  enableTheaterMode();

  const config = await get_from_storage();
  if (!config) {
    return;
  }
  const youtube_settings = config.youtube_settings;
  if (!youtube_settings.enabled) {
    return;
  }
  make_youtube_focused(youtube_settings.hide_comments);
}

/**
 *the actual function to make the youtube page focused
 * @param show_comments true if you want comments to be hidden
 */
const make_youtube_focused = (hide_comments) => {
  const pathname = window.location.pathname;
  if (pathname === "/") {
    initHomePage();
  } else if (pathname === "/results") {
    initSearchPage();
  } else if (pathname === "/watch" || pathname.match(/\/live\/[\w-]+/)) {
    initVideoPage();
  } else if (pathname === "/feed/history") {
    initHistoryPage();
  } else if (pathname === "/playlist") {
    initPlaylistPage();
  } else if (pathname === "/feed/playlists") {
    initPlaylistsPage();
  } else if (pathname.startsWith("/@") || pathname.startsWith("/channel")) {
    // channel begins with /@ or /channel
    initChannelPage();
  }
};
