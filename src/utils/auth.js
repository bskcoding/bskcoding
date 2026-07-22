// Simple client-side auth helper for session handling and logout.
import { logout as firebaseLogout } from "../utils/firebaseAuth";

const CURRENT_KEY = "bsk_current_user";

export async function logout() {
  try {
    await firebaseLogout();
  } catch (err) {
    // ignore firebase signout errors and continue clearing local session
  }
  localStorage.removeItem(CURRENT_KEY);
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem(CURRENT_KEY) || "null");
}

export function isAuthenticated() {
  return !!getCurrentUser();
}

export default {
  logout,
  getCurrentUser,
  isAuthenticated,
};
