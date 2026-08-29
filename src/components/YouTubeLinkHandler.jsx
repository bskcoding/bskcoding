import { useCallback, useEffect, useState } from "react";
import VideoPlayerModal from "./VideoPlayerModal";

/**
 * YouTubeLinkHandler — global click interceptor.
 *
 * Any click on a link pointing to YouTube ANYWHERE in the app (navbar
 * "▶ YouTube", DSA page "Intro Video", Roadmap channel button, data-file
 * links, …) is captured and opened INSIDE the app via VideoPlayerModal
 * instead of navigating to youtube.com in a new tab.
 *
 * Supported link shapes:
 *   https://www.youtube.com/watch?v=VIDEO_ID  → single video embed
 *   https://youtu.be/VIDEO_ID                 → single video embed
 *   https://www.youtube.com/shorts/VIDEO_ID   → single video embed
 *   https://www.youtube.com/playlist?list=ID  → playlist embed
 *   https://www.youtube.com/channel/UCxxxx    → channel uploads embed (UC→UU)
 *   https://www.youtube.com/@handle           → uploads embed for known handles
 *                                               (unknown handles open normally)
 *
 * Mount ONCE in App.jsx — covers every page/route.
 */

// Known channel handles → their uploads playlist (channel id with UC→UU).
// UCTirDqmh7EyUCB8661XdwYw is the BSK CODING channel (youtube.com/@bskcoding;
// the old @bsktrending handle resolves to the same channel).
const KNOWN_CHANNEL_UPLOADS = {
  bskcoding: "UUTirDqmh7EyUCB8661XdwYw",
  bsktrending: "UUTirDqmh7EyUCB8661XdwYw",
};

const YT_HOSTS = [
  "youtube.com",
  "www.youtube.com",
  "m.youtube.com",
  "youtu.be",
  "www.youtube-nocookie.com",
  "music.youtube.com",
];

function parseYouTubeUrl(rawUrl) {
  if (!rawUrl) return null;
  let url;
  try {
    url = new URL(rawUrl, window.location.origin);
  } catch {
    return null;
  }
  if (!YT_HOSTS.includes(url.hostname.toLowerCase())) return null;

  const v = url.searchParams.get("v");
  if (v && /^[\w-]{11}$/.test(v)) return { videoId: v };

  const list = url.searchParams.get("list");
  if (list && !list.startsWith("RD")) return { listId: list };

  // youtu.be/<id> and /shorts/<id> and /embed/<id>
  const m = url.pathname.match(
    /^\/(?:shorts|embed|live|v)\/([\w-]{11})|^\/([\w-]{11})$/,
  );
  if (m) return { videoId: m[1] || m[2] };

  // /channel/UCxxxx → uploads playlist = UC→UU
  const ch = url.pathname.match(/^\/channel\/(UC[\w-]{22})/);
  if (ch) return { listId: `UU${ch[1].slice(2)}` };

  // /@handle → uploads playlist for known handles
  const h = url.pathname.match(/^\/@([\w.-]+)/);
  if (h) {
    const uploads = KNOWN_CHANNEL_UPLOADS[h[1].toLowerCase()];
    if (uploads) return { listId: uploads };
  }

  return null;
}

function YouTubeLinkHandler() {
  const [video, setVideo] = useState(null); // { url, title }
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback((e) => {
    // Find the anchor that was clicked (works for <span>/<svg> inside links)
    const anchor = e.target && e.target.closest ? e.target.closest("a[href]") : null;
    if (!anchor || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }
    const parsed = parseYouTubeUrl(anchor.getAttribute("href"));
    if (!parsed) return;

    // Keep the user inside the app — play it in the global modal.
    e.preventDefault();
    const url = parsed.videoId
      ? `https://www.youtube.com/watch?v=${parsed.videoId}`
      : `https://www.youtube.com/playlist?list=${parsed.listId}`;
    // Friendlier headings for channel/playlist links than the raw link text.
    const channelUploads = Object.values(KNOWN_CHANNEL_UPLOADS);
    let title = anchor.textContent?.trim() || "";
    if (!parsed.videoId && channelUploads.includes(parsed.listId)) {
      title = "BSK CODING — Latest Videos";
    } else if (!parsed.videoId && !title) {
      title = "Playlist";
    }
    setVideo({ url, title: title || undefined });
    setIsOpen(true);
  }, []);

  useEffect(() => {
    // Capture phase so we win before the browser follows the link.
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [handleClick]);

  return (
    <VideoPlayerModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      videoUrl={video?.url || ""}
      title={video?.title || undefined}
    />
  );
}

export default YouTubeLinkHandler;