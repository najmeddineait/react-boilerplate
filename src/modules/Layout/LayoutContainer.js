/*
  path: /modules/Layout/LayoutContainer.js
  description:  - the main component of the Layout module
*/
//---------- required packages ----------//
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

//---------- required files ----------//
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
//import { UserLogOut } from "../Users/redux/usersActions";
import Users from "../Users";
const UserLogOut = Users.actions.UserLogOut;

class LayoutContainer extends Component {
  logout = (event) => {
    event.preventDefault();
    this.props.UserLogOut();
  };
  render() {
    // checking if the user is authenticated and redirect in
    // to the login page if not
    if (!this.props.users.isAuthenticated) {
      return <Redirect to="/login" />;
    }

    // add the main adminLTE classes to the body
    // and remove the login class if exist
    document.body.classList.remove("login-page");
    document.body.classList.add("sidebar-mini");

    // get the user info
    const { user } = this.props.users;
    return (
      <div className="wrapper">
        <Header
          firstname={user.firstname}
          lastname={user.lastname}
          logout={this.logout}
        />
        <Sidebar />
        <Main />
        <Footer />
      </div>
    );
  }
}

//connect to the users object in the redux store
const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, { UserLogOut })(LayoutContainer);
