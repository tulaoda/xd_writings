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
  componentDidMount() {
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
      </div>
    );
  }
}
