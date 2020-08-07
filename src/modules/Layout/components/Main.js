/*
  path: /modules/Layout/components/Main.js
  description:  - the main content area
*/
//---------- required packages ----------//
import React from "react";
import { Route } from "react-router-dom";

//---------- required files ----------//
import modules from "../../";
export default function Main() {
  return (
    <div className="content-wrapper">
      {modules.map((module) => (
        <Route {...module.routeProps} key={module.moduleName} />
      ))}
    </div>
  );
}
