export const tokenKey = "@tokenKey";
export const isAuthenticated = () => localStorage.getItem(tokenKey) !== null;
export const getToken = () => localStorage.getItem(tokenKey);
export const login = token => {
  localStorage.setItem(tokenKey, token);
};
export const logout = () => {
  localStorage.removeItem(tokenKey);
};
