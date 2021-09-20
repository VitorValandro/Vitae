export const TOKEN_KEY = "@user-Token";
export const USER_KEY = "@user-Name";
export const USER_ID = "@user-Identifier";
export const TOKEN_CHECKIN = "@team-Token-CheckInDate";

export const isAuthenticated = () => {
  var OneDayFromNow = new Date().getTime() + (1 * 24 * 60 * 60 * 1000)
  return localStorage.getItem(TOKEN_KEY) !== null && localStorage.getItem(TOKEN_CHECKIN) < OneDayFromNow;
}
export const getUserThatIsAuthenticated = () => localStorage.getItem(USER_KEY);
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getUserId = () => localStorage.getItem(USER_ID);

export const login = (token, username, id) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, username);
  localStorage.setItem(USER_ID, id);
  localStorage.setItem(TOKEN_CHECKIN, Date.now());
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  localStorage.removeItem(USER_ID);
  localStorage.removeItem(TOKEN_CHECKIN);
};