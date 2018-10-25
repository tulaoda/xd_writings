import * as React from "react";
import { NavBar, Icon } from "antd-mobile";

export class Details extends React.Component<any, any> {
  render() {    
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log("onLeftClick")}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: "16px" }} />,
            <Icon key="1" type="ellipsis" />
          ]}
        >
          NavBar
        </NavBar>
      </div>
    );
  }
}
