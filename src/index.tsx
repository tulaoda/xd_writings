import * as React from "react";
import ReactDOM from "react-dom";
import "antd-mobile/dist/antd-mobile.css";
import "./style.scss";
import "./assets/reset.css";
import Routers from "./routers";

export default class App extends React.Component<any, any> {
  render() {
    return (
        <Routers />
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
