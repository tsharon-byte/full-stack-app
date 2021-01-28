export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const REGISTER = "REGISTER";

export const login = (data) => {
  return { type: LOGIN, data };
};

export const register = (data) => {
  return { type: REGISTER, data };
};

export const logout = () => {
  return { type: LOGOUT };
};
