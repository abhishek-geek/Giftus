import jwtDecode from "jwt-decode";

export function getToken() {
  return localStorage.getItem("token");
}

export function setToken(authToken) {
  return localStorage.setItem("token", authToken);
}

export function logout() {
  localStorage.removeItem("token");
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export default {
  logout,
  getCurrentUser,
  getToken,
  setToken,
};
