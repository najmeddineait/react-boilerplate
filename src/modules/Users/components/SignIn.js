/*
  path: /modules/Users/components/SignIn.js
  description:  - this is component work independently from the modules 
                - this component get called directly from the App component
                - here we have the view of sign in and the logic of that
*/

//---------- required packages ----------//
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";

//---------- required files ----------//
import { userLogin } from "../redux/usersActions";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };
  componentDidMount() {
    //check if the user is autenticated and push it to main page if he is
    if (this.props.users.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  handleChange = (prop) => (event) => {
    this.setState({ [prop]: event.target.value });
  };

  loginSubmit = (event) => {
    event.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.userLogin(user);
  };
  render() {
    if (this.props.users.isAuthenticated) {
      return <Redirect to="/" />;
    }
    // add the main adminLTE classes to the body for the Signin
    // layout and remove the main layout class if exist
    document.body.classList.remove("sidebar-mini");
    document.body.classList.add("login-page");
    return (
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html">
            <b>3ST</b>Suite
          </a>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>

            <form onSubmit={this.loginSubmit}>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={this.handleChange("email")}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={this.handleChange("password")}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign In
                  </button>
                </div>
              </div>
            </form>

            <p className="text-center mb-3">- OR -</p>

            <p className="text-center mb-1">
              call an Administrator the reset the password
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});
export default connect(mapStateToProps, { userLogin })(withRouter(SignIn));
