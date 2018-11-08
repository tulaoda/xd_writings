import * as React from "react";
import Store from "../../store";
import { inject, observer } from "mobx-react";
import "./style.scss";
import { Modal, TextareaItem, Toast } from "antd-mobile";
import imgSuccess from "../../assets/img/图层 8 拷贝.png";
import { NavBar } from "../../components";
import { createForm, formShape } from 'rc-form';
import { observable } from "mobx";
@createForm()
export class Submission extends React.Component<any, any> {
  static propTypes = {
    form: formShape,
  };
  state = {
    visible: false
  };
  constructor(props) {
    super(props);
  }

  onClose() {
    this.props.history.replace("/")
    this.setState({ visible: false })
  }
  onSubmit(e) {
    let that = this;
    e.preventDefault();
    this.props.form.validateFields((error, value) => {
      if (error) {
        Toast.fail('请填写完成提交', 2, () => { }, false);
        console.log(error, value);
      } else {
        const res = Store.Detail.submitArtice({
          articleCollectId: this.props.match.params.id,
          title: value.title,
          abstract: value.abstract,
          content: value.content
        })
        if (res) {
          this.setState({ visible: true });


        }
      }
    });


  }
  render() {
    let errors;
    const { getFieldProps, getFieldError } = this.props.form;
    return (
      <div>
        <NavBar title="投稿" />
        <div className="edit">
          <div className="edit-item">
            <div className="title-dec">题目</div>
            <div className="edit-input">
              <textarea
                {...getFieldProps('title', {
                  rules: [{ required: true, message: "请输入你的题目" }],
                })}
                className="edit-input-child"
                placeholder="请输入你的题目"
              />
            </div>
          </div>

          <div className="edit-item">
            <div className="title-dec">简介</div>
            <div className="edit-input">
              <textarea
                {...getFieldProps('abstract', {
                  rules: [{ required: true, message: "请输入你的简介" }],
                })}
                className="edit-input-child"
                placeholder="请输入你的简介"
              />
            </div>
          </div>
          <div className="edit-item">
            <div className="title-dec zhengwen">正文</div>
            <div className="edit-input">
              <textarea
                {...getFieldProps('content', {
                  rules: [{ required: true, message: "请输入你的正文" }],
                })}
                className="edit-input-child jiejian"
                placeholder="请输入你的正文"
              />
            </div>
          </div>
        </div>
        <div className="footer-btn">
          <a className="btn-publish" onClick={this.onSubmit.bind(this)}>投稿</a>
        </div>
        <Modal
          visible={this.state.visible}
          transparent
          maskClosable={false}
          onClose={() => {
            this.setState({
              visible: false
            });
          }}
          footer={[
            {
              text: "确定",
              onPress: this.onClose.bind(this)
            }
          ]}
          wrapClassName="edit-model"
        >
          <img src={imgSuccess} />
          <span>提交成功</span>
        </Modal>
      </div>
    );
  }
}
