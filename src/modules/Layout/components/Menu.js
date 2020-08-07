/*
  path: /modules/Layout/components/Menu.js
  description: automaticly build menu for the sidebar
*/
//---------- required packages ----------//
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

//---------- required files ----------//
import modules from "../..";

export default function Menu() {
  const [currentTab, setCurrentTab] = useState("");
  const menu = [];
  modules.map((module) => menu.push(module));
  return (
    <div className="sidebar">
      <nav className="mt-2">
        <ul
          className="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          {/* here is the menu for the other modules 
            we build the first stage and the second stage */}

          {menu.map((menuItem) => {
            if (!menuItem.menu.setting) {
              // here if we have sub menus
              if (menuItem.menu.items && menuItem.menu.items.length > 0) {
                return (
                  <li
                    className="nav-item has-treeview"
                    key={menuItem.moduleName}
                  >
                    <a href="#" className="nav-link">
                      <i className={"nav-icon fas " + menuItem.menu.icon}></i>
                      <p>
                        {menuItem.menu.label}
                        <i className="right fas fa-angle-left"></i>
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      {menuItem.menu.items.map((subMenuItem) => {
                        return (
                          <li className="nav-item" key={subMenuItem.name}>
                            <Link
                              to={subMenuItem.path}
                              onClick={() => setCurrentTab(subMenuItem.name)}
                              className={
                                currentTab === subMenuItem.name
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                            >
                              <i
                                className="nav-icon fas fa-long-arrow-alt-right"
                                style={{ marginLeft: "0.8rem" }}
                              ></i>
                              <p>{subMenuItem.label}</p>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              } else {
                //here if we dont have sub menus
                return (
                  <li className="nav-item" key={menuItem.moduleName}>
                    <Link
                      to={menuItem.routeProps.path}
                      onClick={() => setCurrentTab(menuItem.moduleName)}
                      className={
                        currentTab === menuItem.moduleName
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      <i className={"nav-icon fas " + menuItem.menu.icon}></i>
                      <p>{menuItem.menu.label}</p>
                    </Link>
                  </li>
                );
              }
            }
          })}
          {/* here is the menu that belong to settings */}
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Settings
                <i className="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul className="nav nav-treeview">
              {menu.map((menuItem) => {
                if (menuItem.menu.setting) {
                  return (
                    <li className="nav-item" key={menuItem.moduleName}>
                      <Link
                        to={menuItem.routeProps.path}
                        onClick={() => setCurrentTab(menuItem.moduleName)}
                        className={
                          currentTab === menuItem.moduleName
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        <i
                          className={"nav-icon fas " + menuItem.menu.icon}
                          //here whe add the stype to move the sub menu to the right
                          style={{ marginLeft: "0.8rem" }}
                        ></i>
                        <p>{menuItem.menu.label}</p>
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
