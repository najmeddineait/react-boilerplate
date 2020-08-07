/*
  path: /modules/index.js
  description:  - combine the exports of every module of the application
                - you can use it to fetch all modules exports(for the Menu as example)
                - don't import the Layout module here
*/

//---------- required files ----------//
import ModuleA from "./ModuleA";
import ModuleB from "./ModuleB";
import Users from "./Users";

export default [Users, ModuleA, ModuleB];
