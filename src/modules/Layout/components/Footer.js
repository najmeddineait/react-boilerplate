/*
  path: /modules/Layout/components/Footer.js
  description: Main Footer
*/
//---------- required packages ----------//
import React from "react";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="float-right d-none d-sm-block">
        <b>Version</b> 1.0.0
      </div>
      <strong>
        Copyright &copy; 2020 <a href="http://3st.ma">3st.ma</a>.
      </strong>{" "}
      All rights reserved.
    </footer>
  );
}
