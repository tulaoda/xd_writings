import * as React from "react";
import "./style.scss";

export class NavBar extends React.Component<any, any> {
  constructor(props) {
    super(props);
  } 
  back2history() {
    history.back();
  }
  render() {
    return (
      <div className="narbar">
        <div className="left-icon" onClick={this.back2history.bind(this)}>
          <i className="iconfont icon-daohangfanhui" />
        </div>
        <span>{this.props.title}</span>
        <div className="right-icon">
          <img src={this.props.img} alt="" className="right-icon-img" />
        </div>
      </div>
    );
  }
}
