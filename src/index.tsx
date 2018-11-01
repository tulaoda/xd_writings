import * as React from "react";
import ReactDOM from "react-dom";
import "antd-mobile/dist/antd-mobile.css";
import "./style.scss";
import "./assets/reset.css";
import Routers from "./routers";
import { observer, Provider } from "mobx-react";
import store from "./store";

@observer
export default class App extends React.Component<any, any> {
  render() {
    return <Routers />;
  }
}
ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
