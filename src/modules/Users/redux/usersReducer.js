/*
  path: /modules/Users/redux/usersReducer.js
  description: the Users module Reducer
*/

//---------- required files ----------//
import { Set_Current_User } from "./types";

const initialState = {
  isAuthenticated: false,
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Set_Current_User:
      return {
        ...state,
        isAuthenticated: !!action.payload,
        user: action.payload,
      };
    default:
      return state;
  }
}
