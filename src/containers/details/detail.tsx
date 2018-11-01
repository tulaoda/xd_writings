import * as React from "react";
import { NavBar } from "../../components";
import imgSZ from "../../assets/img/圆角矩形 1 拷贝 8.png";
import imgXN from "../../assets/img/工资-2.png";
import Store from "../../store";
import { inject, observer } from "mobx-react";
import "./style.scss";
import { Help } from "../../../utils/Help";
import { Link } from "react-router-dom";

@inject("Detail")
@observer
export class Details extends React.Component<any, any> {
  componentDidMount() {
    Store.Detail.getArticle(this.props.match.params.id);
  }
  render() {
    const { Detail } = this.props;
    const { detail } = Detail;
    return (
      <div>
        <NavBar title="投稿详情" />
        <div className="content">
          <div className="content-detail">
            <div className="content-type">投稿描述</div>
            <div className="content-body">{detail.description}</div>
          </div>
          <div className="content-detail">
            <div className="content-type">投稿要求</div>
            <div className="content-body">{detail.demand}</div>
          </div>{" "}
          <div className="content-detail">
            <div className="content-type">截止日期</div>
            <div className="content-body endTime">
              {Help.DateFormat(detail.endDate, "yyyy/MM/dd hh:ss")}
            </div>
          </div>
          <div className="stripes" />
          <div className="content-footer">
            <div className="footer-title">
              参加征文投稿活动可以获得思政分和虚拟工资
            </div>
            <div className="footer-items">
              <div className="footer-item">
                <div>
                  <div className="item-img">
                    <img src={imgSZ} alt="" />
                    <span>思政分数</span>
                  </div>
                  <ul className="reward-num">
                    <li>
                      <span>通过</span>
                      <span>{detail.passPoliticalScore}</span>
                    </li>
                    <li>
                      <span>展示</span>
                      <span>{detail.showPoliticalScore}</span>
                    </li>
                    <li>
                      <span>采纳</span>
                      <span>{detail.adoptPoliticalScore}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-item">
                <div>
                  <div className="item-img">
                    <img src={imgXN} alt="" />
                    <span>虚拟工资</span>
                  </div>
                  <ul className="reward-num">
                    <li>
                      <span>通过</span>
                      <span>{detail.passVirtualSallary}</span>
                    </li>
                    <li>
                      <span>展示</span>
                      <span>{detail.showVirtualSallary}</span>
                    </li>
                    <li>
                      <span>采纳</span>
                      <span>{detail.adoptVirtualSallary}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-btn">
            <Link
              to={"/submisson/" + this.props.match.params.id}
              className="btn-publish"
            >
              投稿
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
