/*
  path: /redux/mainReducer.js
  description:  - the redux main reducer
                - combine  reducers from all modules of the app
*/
//---------- required packages ----------//
import { combineReducers } from "redux";

//---------- required files ----------//
import Users from "../modules/Users";

export default combineReducers({
  users: Users.reducer,
});
