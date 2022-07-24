export const AppReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("access_token", action.payload);
      return {
        ...state,
        isAuth: true,
      };
    case "LOGOUT":
      localStorage.removeItem("access_token");

      return {
        ...state,
        isAuth: false,
        user: null,
      };
    case "SET_IS_MODAL":
      return {
        ...state,
        isModal: action.payload,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
