import { useEffect, useCallback } from "react";
import "./VideoPlayerModal.css";

/**
 * VideoPlayerModal — Global reusable YouTube video player modal.
 *
 * Plays a YouTube video inside the app (embedded iframe) instead of
 * redirecting to youtube.com. Reusable across all pages.
 *
 * Props:
 *  - isOpen    : boolean  — whether the modal is visible
 *  - onClose   : function — called when the user closes the modal
 *  - videoUrl  : string   — any YouTube URL form:
 *      https://www.youtube.com/watch?v=VIDEO_ID
 *      https://youtu.be/VIDEO_ID
 *      https://www.youtube.com/embed/VIDEO_ID
 *  - title     : string   — optional heading shown above the player
 */
function VideoPlayerModal({ isOpen, onClose, videoUrl, title }) {
  // Extract the 11-char YouTube video id from common URL formats.
  const extractVideoId = (url) => {
    if (!url) return null;
    const patterns = [
      /(?:youtube\.com\/watch\?(?:.*&)?v=)([\w-]{11})/,
      /(?:youtu\.be\/)([\w-]{11})/,
      /(?:youtube\.com\/embed\/)([\w-]{11})/,
      /(?:youtube\.com\/shorts\/)([\w-]{11})/,
    ];
    for (const p of patterns) {
      const m = url.match(p);
      if (m) return m[1];
    }
    return null;
  };

  const videoId = extractVideoId(videoUrl);
  const embedUrl = videoId
    ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`
    : null;

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!isOpen) return undefined;
    document.addEventListener("keydown", handleKeyDown);
    // Prevent background scroll while the modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="vpm-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title || "Video player"}
    >
      <div className="vpm-modal" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="vpm-close"
          onClick={onClose}
          aria-label="Close video"
        >
          ✕
        </button>

        {title && <h2 className="vpm-title">{title}</h2>}

        <div className="vpm-player-wrap">
          {embedUrl ? (
            <iframe
              className="vpm-iframe"
              src={embedUrl}
              title={title || "YouTube video player"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <div className="vpm-error">
              ⚠️ Unable to load this video. Invalid or missing video link.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VideoPlayerModal;
