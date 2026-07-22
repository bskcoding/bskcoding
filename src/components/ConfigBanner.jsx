import { useEffect, useState } from "react";
import { validateFirebaseConfig } from "../utils/firebaseAuth";

export default function ConfigBanner() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    try {
      const res = validateFirebaseConfig();
      setInfo(res);
    } catch (err) {
      setInfo({ ok: false, error: err.message || String(err) });
    }
  }, []);

  if (!info) return null;
  if (info.ok) return null;

  const missing = info.missing
    ? `Missing fields: ${info.missing.join(", ")}`
    : info.error || "Configuration invalid";

  return (
    <div
      style={{
        background: "#ffefef",
        color: "#5a0000",
        padding: "8px 12px",
        textAlign: "center",
      }}
    >
      <strong>Firebase config warning:</strong> {missing}.<br />
      Ensure `src/firebase.js` matches your Firebase Project settings and enable
      Email/Password in Authentication.
    </div>
  );
}
