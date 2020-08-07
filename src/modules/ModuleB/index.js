import ModuleB from "./ModuleBContainer";

const menu = {
  setting: false,
  icon: "fa-tachometer-alt",
  label: "Module B",
  name: "moduleB",
  items: [
    {
      name: "statements",
      label: "Statements",
      path: "/ModuleB",
    },
    {
      name: "reports",
      label: "Reports",
      path: "/ModuleB/2",
    },
  ],
};
export default {
  routeProps: {
    path: "/ModuleB",
    exact: false,
    component: ModuleB,
  },
  moduleName: "ModuleB",
  menu: menu,
};
