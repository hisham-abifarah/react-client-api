// define thunk ation, just a function that returns another function
import { USER_LOGGED_IN } from "../types";
import api from "../api";

export const userLoggedIn = user => ({
    type:USER_LOGGED_IN,
    user
});

// export const login =  (credentials) => dispatch =>
// api.user.login(credentials).then(dispatch(userLoggedIn(user)));
// //  api.user.login(credentials).then(res => dispatch(userLoggedIn(user)));

export const login = (credentials) => dispatch =>
  api.user.login(credentials).then(user => {
    dispatch(userLoggedIn(user));
  });