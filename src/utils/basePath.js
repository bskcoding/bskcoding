// Detect the deployment base path so the app works on both:
//   - Custom domain: https://bskcoding.com        → base "/"
//   - GitHub Pages:  https://<user>.github.io/<repo>/ → base "/<repo>"
export function getBasePath() {
  if (typeof window === "undefined") {
    return "/";
  }
  const host = window.location.hostname;
  if (host.includes("github.io")) {
    const segments = window.location.pathname.split("/").filter(Boolean);
    if (segments.length > 0) {
      return "/" + segments[0];
    }
  }
  return "/";
}

export const BASENAME = getBasePath();
