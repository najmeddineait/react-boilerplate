/*
  path: /App.js
  description:  - this is the root component
`               - here we connect the the redux store
                - we need the Sign-in page imported her from the user module 
                  to manipulate deperent routes for the main layout and 
                  the sign-in layout
*/

//---------- required packages ----------//
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";

//---------- required files ----------//
import store from "./redux/store";
import SignIn from "./modules/Users/components/SignIn";
import Layout from "./modules/Layout";
import Users from "./modules/Users";
import setAuthToken from "./utils/setAuthToken";

// Check for token and logout if its not valid
if (localStorage.token) {
  // Set auth token header auth
  setAuthToken(localStorage.token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.token);
  // Set user and isAuthenticated
  store.dispatch(Users.actions.setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(Users.actions.UserLogOut());
    // TODO: Clear current shops list

    // Redirect to the HomePage
    window.location.href = "/login";
  }
}
export default class App extends Component {
  render() {
    return (
      // connect to the redux store
      <Provider store={store}>
        {/*wrape all the app(routes) with BrowserRouter*/}
        <Router>
          <Switch>
            <Route exact path="/login" component={SignIn} />
            <Route path="/" component={Layout.container} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
