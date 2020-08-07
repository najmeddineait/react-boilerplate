/*
  path: /modules/Users/redux/usersActions.js
  description: actions of the Users module
*/

//---------- required packages ----------//
import axios from "axios";
import jwt_decode from "jwt-decode";

//---------- required files ----------//
import { Set_Current_User, Get_Errors } from "./types";
import setAuthToken from "../../../utils/setAuthToken";

export const userLogin = (userData) => (dispatch) => {
  axios
    .post("/users/login", userData)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem("token", token);
      setAuthToken(token);
      const currentUser = jwt_decode(token);
      dispatch(setCurrentUser(currentUser));
    })
    .catch((err) => {
      dispatch({
        type: Get_Errors,
        payload: err,
      });
    });
};

export const UserLogOut = () => (dispatch) => {
  localStorage.removeItem("token");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser());
  // push to the login page
  window.location.href = "/";
};

export const setCurrentUser = (currentUser) => {
  return {
    type: Set_Current_User,
    payload: currentUser,
  };
};
