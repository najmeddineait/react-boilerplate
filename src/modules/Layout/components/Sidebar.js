/*
  path: /modules/Layout/components/Sidebar.js
  description: Sidebar Menu
*/

//---------- required packages ----------//
import React from "react";

//---------- required files ----------//
import stIcon from "../../../assets/img/icon.png";
import Menu from "./Menu";

export default function Sidebar() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="/" className="brand-link">
        <img
          src={stIcon}
          alt="3ST Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: 0.8 }} //"opacity: .8"
        />
        <span className="brand-text font-weight-light">3ST Suite</span>
      </a>
      <Menu />
    </aside>
  );
}
