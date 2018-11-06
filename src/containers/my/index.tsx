import * as React from 'react';
import './style.scss'
import { ListView, NavBar } from "../../components";
import { Help } from "../../../utils/Help";
import { Link } from "react-router-dom";
import imgClock from '../../assets/img/时间-3 拷贝 9.png'
import Store from '../../store/';
import { inject, observer } from "mobx-react";
import { observable } from 'mobx';
@inject("Detail")
@observer
export class My extends React.Component<any, any>{
    constructor(props) {
        super(props)
    }
    state = {

    }

    componentWillMount() {
        Store.Detail.getMyArticle();
    }
    render() {
        const { Detail } = this.props;
        const { myContribute } = Detail;
        return (<div>
            <NavBar title="我的投稿" />
            {
                myContribute.map((item, key) => {
                    return <Item key={key} item={item} />;
                })
            }

        </div>)
    }
}
//数据列表
class Item extends React.Component<any, any>{

    status = [
        { class: "color-ds", text: "待评判" },
        { class: "color-wtg", text: "已退回" },
        { class: "color-tg", text: "已通过" },
        { class: "color-ca", text: "已采纳" },
        { class: "color-yzs", text: "已展示" },
    ]
    constructor(props) {
        super(props);
    }



    render() {
        const { item } = this.props
        const status = this.status[item.status];
        return (
            <Link to={"/mydetail/" + item.id} className="article-item">
                <div className="article-title">{item.title}</div>
                <div className="article-msg">
                    <div className="article-type1">
                        {item.articleType == 1 ? "升旗" : "阅读"}
                    </div>
                    <div className="article-date">
                        <img src={imgClock} />
                        <span>
                            {Help.DateFormat(item.createTime, "yyyy/MM/dd")}
                        </span>
                    </div>
                </div>
                <div className="artice-state">
                    <span className={status.class}>{status.text}</span>
                </div>

            </Link>
        );
    }
}