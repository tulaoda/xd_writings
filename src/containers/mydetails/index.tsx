import * as React from "react";
import { NavBar } from "../../components";
import imgSZ from "../../assets/img/圆角矩形 1 拷贝 8.png";
import imgXN from "../../assets/img/工资-2.png";
import Store from "../../store";
import { inject, observer } from "mobx-react";
import "./style.scss";
import { Help } from "../../../utils/Help";
import { Link } from "react-router-dom";
import { Steps, WingBlank, WhiteSpace } from 'antd-mobile';

const Step = Steps.Step;
@inject("Detail")
@observer
export class MyDetails extends React.Component<any, any> {

  componentWillMount() {
    Store.Detail.getMyDetail(this.props.match.params.id);
  }
  render() {
    const { Detail } = this.props;
    const { myDetail } = Detail;
    return (
      <div>
        <NavBar title="投稿详情" />
        <div className="content">
          <div className="content-detail">
            <div className="content-type">简介</div>
            <div className="content-body">{myDetail.title}</div>
          </div>
          <div className="content-detail">
            <div className="content-type">征文内容</div>
            <div className="content-body">{myDetail.content}</div>
          </div>
          <div className="content-detail">
            <div className="content-type">审批进度</div>
            <div className="content-body">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
@inject("Detail")
@observer
class Footer extends React.Component<any, any>{
  type = [
    { class: "color-ds", text: "待评判" },
    { class: "color-tg", text: "已通过" },
    { class: "color-ca", text: "已采纳" },
    { class: "color-wtg", text: "未通过" },
    { class: "color-yzs", text: "已展示" },
  ]
  render() {
    const { Detail } = this.props;
    const { myDetail } = Detail;
    return (
      <div className="footer">
        <ul className="footer-judge">
          <li>
            <span></span>
            <div className="status">待评判</div>
            <div className="time">2018-08-01 10:00</div>
          </li>
          <li>
            <span></span>
            <div className="status">待评判</div>
            <div className="time">2018-08-01 10:00</div>
          </li>
        </ul>
      </div>
    )




  }
}
