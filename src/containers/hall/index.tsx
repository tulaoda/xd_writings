import * as React from "react";
import { NavBar, Icon } from "antd-mobile";
import "./style.scss";
import { SearchBar, Button, WhiteSpace, WingBlank } from "antd-mobile";

export class Hall extends React.Component<any, any> {
  render() {
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log("onLeftClick")}
          rightContent={[<i key="1" className="iconfont icon-wode-xian" />]}
        >
          投稿
        </NavBar>

        <SearchBar placeholder="Search" maxLength={8} />
        <div>测试</div>
      </div>
    );
  }
}
