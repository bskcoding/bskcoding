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
 *      https://www.youtube.com/playlist?list=LIST_ID   (channel/playlist embed)
 *  - title     : string   — optional heading shown above the player
 *  - description: string  — optional problem description shown below the player
 *  - example   : string   — optional example input/output shown below the player
 *  - explanation: string  — optional detailed explanation shown below the player
 */
function VideoPlayerModal({
  isOpen,
  onClose,
  videoUrl,
  title,
  description,
  example,
  explanation,
}) {
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

  // Extract a playlist id (incl. channel-uploads "UU…" lists) from URL forms:
  //   https://www.youtube.com/playlist?list=LIST_ID
  //   https://www.youtube.com/watch?...&list=LIST_ID
  //   https://www.youtube.com/embed/videoseries?list=LIST_ID
  const extractListId = (url) => {
    if (!url) return null;
    const m = url.match(/[?&]list=([\w-]+)/);
    return m ? m[1] : null;
  };

  const videoId = extractVideoId(videoUrl);
  const listId = videoId ? null : extractListId(videoUrl);
  const embedUrl = videoId
    ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`
    : listId
      ? `https://www.youtube-nocookie.com/embed/videoseries?list=${listId}&rel=0&modestbranding=1`
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

        {description && (
          <div className="vpm-section">
            <h3 className="vpm-section-title">Problem</h3>
            <p className="vpm-text">{description}</p>
          </div>
        )}

        {example && (
          <div className="vpm-section vpm-example">
            <h3 className="vpm-section-title">Example</h3>
            <pre className="vpm-example-text">{example}</pre>
          </div>
        )}

        {explanation && (
          <div className="vpm-section">
            <h3 className="vpm-section-title">Explanation</h3>
            <p className="vpm-text">{explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoPlayerModal;
