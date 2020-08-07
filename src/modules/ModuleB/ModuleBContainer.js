import React, { Component } from "react";
import { Route } from "react-router-dom";
export default class ModuleBContainer extends Component {
  render() {
    return (
      <>
        <Route exact path="/ModuleB" component={() => <p>Module B 1</p>} />
        <Route exact path="/ModuleB/2" component={() => <p>Module B 2</p>} />
      </>
    );
  }
}
