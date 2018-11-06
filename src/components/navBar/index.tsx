import * as React from "react";
import "./style.scss";

export class NavBar extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }
  back2history() {
    if( this.props.toprops){
      this.props.toprops.history.replace("/")
    }else{
      history.back();
    }
  }
  rightLink() {
    const flag = this.props.ifMyCom | 0;
    if (flag) {
      this.props.toprops.history.push("/my")
    }
  }
  render() {
    return (
      <div className="narbar">
        <div className="left-icon" onClick={this.back2history.bind(this)}>
          <i className="iconfont icon-daohangfanhui" />
        </div>
        <span>{this.props.title}</span>
        <div className="right-icon" onClick={this.rightLink.bind(this)}>
          <img src={this.props.img} alt="" className="right-icon-img" />
        </div>
      </div>
    );
  }
}
