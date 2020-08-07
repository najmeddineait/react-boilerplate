/*
  path: /redux/store.js
  description: redux store
*/

//---------- required packages ----------//
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//---------- required files ----------//
import mainReducer from "./mainReducer";

const initialState = {};
const middleware = [thunk];

// create the Redux Store
const store = createStore(
  mainReducer,
  initialState,
  compose(
    // apply the thunk middleware
    applyMiddleware(...middleware),
    //apply this Middleware for the Chrome Redux extention
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
