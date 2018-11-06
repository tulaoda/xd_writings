import * as React from "react";
import "./style.scss";
import { Help } from "../../../utils/Help";
import { Link } from "react-router-dom";

export class ListView extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Link to={"/details/" + this.props.item.id} className="article-item">
        <div className="article-title2">{this.props.item.subject}</div>
        <div className="article-msg">
          <div className="article-type">
            {this.props.item.articleType == 1 ? "升旗" : "晨跑"}
          </div>
          <div className="article-date">
            截止时间：
            <span>
              {Help.DateFormat(this.props.item.endDate, "yyyy/MM/dd hh:ss")}
            </span>
          </div>
        </div>
      </Link>
    );
  }
}
