/*
  path: /modules/Layout/components/Header.js
  description: main header
*/
//---------- required packages ----------//
import React from "react";

//---------- required files ----------//
import userIcon from "../../../assets/img/user.png";

export default function Header(props) {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars"></i>
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="#" className="nav-link">
            Contact
          </a>
        </li>
      </ul>

      <form className="form-inline ml-3">
        <div className="input-group input-group-sm">
          <input
            className="form-control form-control-navbar"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div className="input-group-append">
            <button className="btn btn-navbar" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </form>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown user-menu">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
          >
            <img
              src={userIcon}
              className="user-image img-circle elevation-2"
              alt="User Image"
            />
            <span className="d-none d-md-inline">
              {props.firstname + " " + props.lastname}
            </span>
          </a>
          <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <li className="user-header bg-primary">
              <img
                src={userIcon}
                className="img-circle elevation-2"
                alt="User Image"
              />

              <p>
                {props.firstname + " " + props.lastname}
                <small>Administrator</small>
              </p>
            </li>

            <li className="user-footer">
              <a href="#" className="btn btn-default btn-flat">
                Profile
              </a>
              <a
                className="btn btn-default btn-flat float-right"
                onClick={props.logout}
              >
                Sign out
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
