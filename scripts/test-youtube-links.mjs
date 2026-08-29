// Verify the YouTube URL parsing logic used by YouTubeLinkHandler.
const YT_HOSTS = [
  "youtube.com",
  "www.youtube.com",
  "m.youtube.com",
  "youtu.be",
  "www.youtube-nocookie.com",
  "music.youtube.com",
];
const KNOWN_CHANNEL_UPLOADS = {
  bskcoding: "UUTirDqmh7EyUCB8661XdwYw",
  bsktrending: "UUTirDqmh7EyUCB8661XdwYw",
};

function parseYouTubeUrl(rawUrl) {
  if (!rawUrl) return null;
  let url;
  try {
    url = new URL(rawUrl, "https://app.local");
  } catch {
    return null;
  }
  if (!YT_HOSTS.includes(url.hostname.toLowerCase())) return null;

  const v = url.searchParams.get("v");
  if (v && /^[\w-]{11}$/.test(v)) return { videoId: v };

  const list = url.searchParams.get("list");
  if (list && !list.startsWith("RD")) return { listId: list };

  const m = url.pathname.match(
    /^\/(?:shorts|embed|live|v)\/([\w-]{11})|^\/([\w-]{11})$/,
  );
  if (m) return { videoId: m[1] || m[2] };

  const ch = url.pathname.match(/^\/channel\/(UC[\w-]{22})/);
  if (ch) return { listId: `UU${ch[1].slice(2)}` };

  const h = url.pathname.match(/^\/@([\w.-]+)/);
  if (h) {
    const uploads = KNOWN_CHANNEL_UPLOADS[h[1].toLowerCase()];
    if (uploads) return { listId: uploads };
  }
  return null;
}

const cases = [
  ["https://www.youtube.com/@bskcoding", { listId: "UUTirDqmh7EyUCB8661XdwYw" }],
  ["https://youtube.com/@bsktrending", { listId: "UUTirDqmh7EyUCB8661XdwYw" }],
  ["https://www.youtube.com/channel/UCTirDqmh7EyUCB8661XdwYw", { listId: "UUTirDqmh7EyUCB8661XdwYw" }],
  ["https://www.youtube.com/watch?v=VU_uIvmr_3A", { videoId: "VU_uIvmr_3A" }],
  ["https://youtu.be/m0S378ecdUU", { videoId: "m0S378ecdUU" }],
  ["https://www.youtube.com/shorts/abc12345678", { videoId: "abc12345678" }],
  ["https://www.youtube.com/playlist?list=PLxyz123", { listId: "PLxyz123" }],
  ["https://www.google.com/not-youtube", null],
  ["https://www.youtube.com/@unknownhandle", null],
  ["/maang", null],
  [null, null],
];

let failed = 0;
for (const [input, expected] of cases) {
  const got = parseYouTubeUrl(input);
  const ok = JSON.stringify(got) === JSON.stringify(expected);
  if (!ok) failed++;
  console.log(`${ok ? "✅" : "❌"} ${input} → ${JSON.stringify(got)}`);
}
console.log(failed === 0 ? "ALL PASSED" : `${failed} FAILED`);
process.exit(failed === 0 ? 0 : 1);
