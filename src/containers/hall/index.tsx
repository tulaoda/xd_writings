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

    this.state = {
      list: []
    };
  }
  componentDidMount() {
    let that = this;

    // Store.Hall.getPageData();
    Http.get(
      "/api/v1/Article/GetArticleCollect?page=1&pageSize=10&search=",
      ""
    ).then(function(res:any) {
      // console.log(res.data.list);
      that.setState({
        list: res.data.list
      });
      // console.log(map);
    });
  }
  render() {
    // const { Hall } = Store;
    // const { pageData } = Hall;
    // const { data } = pageData;
    // console.log(pageData);
    // if (pageData.data) {
    //   const { list } = data;
    //   console.log(data);
    //   console.log(list);
    // const { Hall } = this.props;
    // }
    return (
      <div className="hall">
        <NavBar title="投稿" img={myImg} />
        <Search />
        {this.state.list.map((item, key) => {
          return <ListView key={key} item={item} />;
        })}
      </div>
    );
  }
}
