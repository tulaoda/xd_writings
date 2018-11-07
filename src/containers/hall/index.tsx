import * as React from "react";
import { ListView, NavBar, Search } from "../../components";
import "./style.scss";
import myImg from "../../assets/img/矢量智能对象.png";
import { Http } from "../../../utils/HttpBasics";
import Store from "../../store";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";

@inject("Hall")
@observer
export class Hall extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }


  onScrollHandle(event) {
    var wScrollY = window.scrollY; // 当前滚动条位置  
    var wInnerH = window.innerHeight; // 设备窗口的高度（不会变）  
    var bScrollH = document.body.scrollHeight; // 滚动条总高度      
    if (wScrollY + wInnerH >= bScrollH) {
      // setTimeout(() => {
      Store.Hall.params.page++;
      Store.Hall.getPageData()
      // }, 1000)

    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScrollHandle.bind(this));
    Store.Hall.getPageData()
  }
  render() {
    const { Hall } = this.props;
    const { pageData } = Hall;
    return (
      <div className="hall">
        <NavBar title="投稿" img={myImg} ifMyCom="1" toprops={this.props} />
        <Search />
        {pageData.map((item, key) => {
          return <ListView key={key} item={item} />;
        })}
        <div className={Hall.visible == true ? "bottom" : "visible bottom"}>
          <span>我也是有底线的</span>
        </div>
      </div >
    );
  }
}
