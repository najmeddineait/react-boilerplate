import ModuleA from "./ModuleAContainer";

const menu = {
  setting: false,
  icon: "fa-tachometer-alt",
  label: "Module A",
  name: "moduleA",
};
export default {
  routeProps: {
    path: "/ModuleA",
    exact: true,
    component: ModuleA,
  },
  moduleName: "ModuleA",
  menu: menu,
};
