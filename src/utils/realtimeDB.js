import { ref, set, get, onValue, remove } from "firebase/database";
import { rtdb } from "../firebase";

export async function setValue(path, value) {
  try {
    await set(ref(rtdb, path), value);
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err };
  }
}

export async function getValue(path) {
  try {
    const snap = await get(ref(rtdb, path));
    return { ok: true, value: snap.exists() ? snap.val() : null };
  } catch (err) {
    return { ok: false, error: err };
  }
}

export function subscribeValue(path, callback) {
  const unsub = onValue(ref(rtdb, path), (snapshot) => {
    callback(snapshot.exists() ? snapshot.val() : null);
  });
  return () => unsub();
}

export async function removeValue(path) {
  try {
    await remove(ref(rtdb, path));
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err };
  }
}
