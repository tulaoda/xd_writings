import * as React from "react";
import ReactDOM from "react-dom";
import "antd-mobile/dist/antd-mobile.css";
import "./style.scss";
import "./assets/reset.css";
import Routers from "./routers";
import { observer, Provider } from "mobx-react";
import store from "./store";
import { Login } from "./containers";

@observer
export default class App extends React.Component<any, any> {

  render() {
    console.log(store.User.isLogin)
    // if (store.User.isLogin) {
      return (
        <Provider
          {...store}
        >
        <Routers />
        </Provider>
      );
    // }
    // return <Login visible={!store.User.isLogin} />

  }
}
ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
