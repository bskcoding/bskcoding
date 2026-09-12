import "../api-design/ApiDesignPage.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../acid/AcidPage.css";

/**
 * Security page (Route: /maang/system-design/security).
 *
 * Covers Authentication, Authorization, OAuth2, JWT and Encryption — the
 * security fundamentals asked in every backend interview.
 * Reuses the ACID page styling (same card grid + modal detail panel).
 */

const TOPICS = [
  {
    id: "AUTHN",
    name: "Authentication",
    icon: "🪪",
    tagline: "Who are you?",
    accent: "#1d4ed8",
    meaning:
      "Authentication (AuthN) verifies identity: proving the user is who they claim to be. Methods: password + hash (bcrypt/argon2), multi-factor (OTP/TOTP/WebAuthn), passkeys, certificates for machines. AuthN happens BEFORE authorization — first establish who, then decide what they may do.",
    analogy:
      "Airport security: showing your passport + boarding pass with ID check = authentication. Once through, your boarding class decides which lounge you can enter — that's authorization.",
    sql: `// Password login done right
// 1. store hashes, never passwords
hash = argon2id(password, salt)

// 2. constant-time compare
if (verify(hash, input)) -> issue session/JWT

// 3. add MFA
totp = TOTP(secret, 30s window)
if (!match(totp)) reject

// 4. protect against brute force
- rate limit login attempts
- generic error messages (no user
  enumeration), lockout / captcha

// Session vs token: cookie+session id
// (server state) vs stateless JWT (below).`,
  },
  {
    id: "AUTHZ",
    name: "Authorization",
    icon: "🔑",
    tagline: "What are you allowed to do?",
    accent: "#c2410c",
    meaning:
      "Authorization (AuthZ) decides what an authenticated identity may do. Models: RBAC (role-based — admin/editor/viewer), ABAC (attribute-based — 'own department AND business hours'), ACL (per-resource lists), ReBAC (relationship-based, e.g. Google Zanzibar). Enforce on the server for every request — never trust the UI alone.",
    analogy:
      "A hotel key card: it authenticates you at the door, but a standard room card won't open the staff-only kitchen. The card encodes what rooms you may enter — that's authorization.",
    sql: `# RBAC
user -> role -> permission
alice(editor) can article:edit

# ABAC (context-aware rules)
allow if user.department == doc.department
    and now() in business_hours

# Always fail closed
if (!allowed(user, action, resource)) {
  return 403;   // deny by default
}

# Defend in depth: check in UI (UX only),
# at the gateway (coarse), and in the
# service (authoritative).`,
  },
  {
    id: "OAUTH",
    name: "OAuth 2.0",
    icon: "🎫",
    tagline: "Delegated access without sharing passwords",
    accent: "#15803d",
    meaning:
      "OAuth 2.0 is an authorization framework: a user grants a third-party app limited access to their resources without sharing their password. Roles: resource owner, client, authorization server, resource server. Flows: Authorization Code (+PKCE) for web/mobile, Client Credentials for machine-to-machine. OIDC adds authentication (who) on top of OAuth (what).",
    analogy:
      "A hotel valet key: you hand the valet a special key that starts the car but doesn't open the glovebox or the trunk, and it expires tomorrow. You never gave away your master key.",
    sql: `# Authorization Code + PKCE (web/mobile)
1. app -> auth server: /authorize
     ?client_id&redirect_uri&scope=orders
     &code_challenge (PKCE)
2. user logs in & approves
3. redirect back with ?code=xyz
4. app -> POST /token (code + verifier)
5. receive access_token (JWT) + refresh_token

# Machine-to-machine (no user)
POST /token  grant_type=client_credentials
-> access_token

# OAuth2 = authorization (what you may do)
# OIDC   = authentication (who you are) —
#   adds id_token on top`,
  },
  {
    id: "JWT",
    name: "JWT",
    icon: "🪙",
    tagline: "Signed, self-contained tokens",
    accent: "#7c3aed",
    meaning:
      "A JSON Web Token is a signed, self-contained credential: header.payload.signature. The server can verify claims (user id, roles, expiry) without a DB lookup — stateless auth. Signed with HMAC (shared secret) or RSA/ECDSA (public key). Caveats: can't be revoked before expiry, so keep them short-lived and use refresh tokens.",
    analogy:
      "A tamper-proof wristband at a festival: it states your VIP status, signed by the organiser. Gate staff verify it instantly without calling the office — but if you lose the wristband, it's valid until it expires. No calling it in.",
    sql: `# Structure: xxxxx.yyyyy.zzzzz
header    : {"alg":"RS256","typ":"JWT"}
payload   : {"sub":"u991","role":"editor",
             "exp":1735689600}
signature : HMAC/RSA(header + "." + payload,
                     secret-or-private-key)

# Flow
login -> server signs JWT -> client stores it
each request: Authorization: Bearer <jwt>
server verifies signature + exp ONLY
  (no session store / DB hit)

# Pitfalls
- never put secrets in payload (base64,
  not encrypted!)
- short expiry (15m) + refresh token
- revocation needs a denylist / versioning`,
  },
  {
    id: "ENCR",
    name: "Encryption",
    icon: "🔒",
    tagline: "Protect data at rest & in transit",
    accent: "#b45309",
    meaning:
      "Encryption scrambles data so only key-holders can read it. In transit: TLS 1.2/1.3 everywhere (HTTPS, mTLS between services). At rest: AES-256 for databases, disks, and backups. Hashing (SHA-256, bcrypt) is one-way — for passwords and integrity — not the same as encryption. Never roll your own crypto; use managed KMS and rotate keys.",
    analogy:
      "Sending a diary in a locked box (encryption at rest) via an armoured truck (TLS in transit). A fingerprint comparison (hashing) can confirm identity but can't reconstruct the person.",
    sql: `# In transit
client --TLS 1.3--> gateway --mTLS--> services
  (mTLS = both sides present certificates,
   zero-trust inside the cluster)

# At rest
- DB encryption: AES-256 (KMS-managed keys)
- field-level: encrypt card/PII columns
- backups: encrypted too!

# Hashing (one-way — NOT encryption)
password -> bcrypt/argon2 -> stored hash
integrity -> SHA-256 checksum

# Key management
KMS stores keys separately from data;
rotate annually & on compromise.`,
  },
];

export default function SecurityPage() {
  const [active, setActive] = useState(null);

  return (
    <div className="acid-page">
      <header className="acid-header">
        <Link to="/maang/system-design" className="acid-back">
          ← Back to System Design
        </Link>
        <h1>🔐 Security</h1>
        <p className="acid-subtitle">
          Authentication, authorization, OAuth2, JWT and encryption — the
          security must-knows.
        </p>
      </header>

      <div className="acid-grid">
        {TOPICS.map((t) => (
          <button
            key={t.id}
            className="acid-card"
            style={{ borderTopColor: t.accent }}
            onClick={() => setActive(t)}
          >
            <span className="acid-icon">{t.icon}</span>
            <h2>{t.name}</h2>
            <p>{t.tagline}</p>
            <span className="acid-learn">Learn more →</span>
          </button>
        ))}
      </div>

      {active && (
        <div className="acid-modal-backdrop" onClick={() => setActive(null)}>
          <div className="acid-modal" onClick={(e) => e.stopPropagation()}>
            <button className="acid-close" onClick={() => setActive(null)}>
              ✕
            </button>
            <h2 style={{ color: active.accent }}>
              {active.icon} {active.name}
            </h2>
            <p className="acid-tagline">{active.tagline}</p>

            <h3>What is it?</h3>
            <p>{active.meaning}</p>

            <h3>Real-world analogy</h3>
            <p className="acid-analogy">{active.analogy}</p>

            <h3>How it works</h3>
            <pre className="acid-code">{active.sql}</pre>
          </div>
        </div>
      )}
    </div>
  );
}
