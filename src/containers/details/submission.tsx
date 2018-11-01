import * as React from "react";
import Store from "../../store";
import { inject, observer } from "mobx-react";
import "./style.scss";
import { NavBar } from "../../components";
export class Submission extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <NavBar title="投稿" />
        <div className="edit">
          <div className="edit-item">
            <div className="title-dec">题目</div>
            <div className="edit-input">
              <textarea
                className="edit-input-child"
                placeholder="请输入你的题目"
              ></textarea>
            </div>
          </div>

          <div className="edit-item">
            <div className="title-dec">简介</div>
            <div className="edit-input">
              <textarea
                className="edit-input-child"
                placeholder="请输入你的简介"
              ></textarea>
            </div>
          </div>
          <div className="edit-item">
            <div className="title-dec zhengwen">正文</div>
            <div className="edit-input">
              <textarea
                className="edit-input-child jiejian"
                placeholder="请输入你的正文"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="footer-btn">
          <a className="btn-publish">投稿</a>
        </div>
      </div>
    );
  }
}
