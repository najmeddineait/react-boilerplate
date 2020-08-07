/*
  path: /modules/Users/index.js
  description:  - entry point of the Users Module
                - here we can manage all user related actions(signin/adding/permissions)
*/

//---------- required files ----------//
import Users from "./UsersContainer";
import reducer from "./redux/usersReducer";
import * as actions from "./redux/usersActions";

const menu = {
  setting: true,
  icon: "fa-users",
  label: "Users Management",
  name: "users",
};
export default {
  reducer: reducer,
  actions: actions,
  moduleName: "Users",
  routeProps: {
    path: "/users",
    exact: true,
    component: Users,
  },
  menu: menu,
};
