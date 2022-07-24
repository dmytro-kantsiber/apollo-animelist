export const logoutAC = () => {
  return { type: "LOGOUT" };
};

export const loginAC = (payload) => {
  return { type: "LOGIN", payload };
};

export const setIsModalAC = (payload) => {
  return { type: "SET_IS_MODAL", payload };
};

export const setUserAC = (payload) => {
  return { type: "SET_USER", payload };
};
