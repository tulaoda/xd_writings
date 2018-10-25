import * as React from "react";
import * as containers from "./containers";
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
export default class Routes extends React.Component<any, any> {
  routes: any[] = [
    {
      path: "/",
      exact: true,
      component: containers.Hall
    },
    {
      path: "/details",
      component: containers.Details
    }
  ];
  render() {
    return <BrowserRouter>{renderRoutes(this.routes)}</BrowserRouter>;
  }
}
