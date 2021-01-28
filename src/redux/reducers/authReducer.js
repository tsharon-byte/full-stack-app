import { LOGIN, LOGOUT, REGISTER } from "../actions/auth";
const defaultState = {
  loggedIn: false,
};
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
    case REGISTER:
      return { ...state, loggedIn: true, data: action.data };
    case LOGOUT:
      return { ...state, loggedIn: false, data: {} };
    default:
      return state;
  }
};
export default reducer;
