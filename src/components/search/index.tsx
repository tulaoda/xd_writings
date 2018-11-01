import * as React from "react";
import "./style.scss";
import searchIcon from "../../assets/img/input.png";

export class Search extends React.Component<any, any> {
  render() {
    return (
      <div className="searchInput">
        <div className="search-icon">
          <img src={searchIcon} alt="" />
        </div>
        <input type="text" name="" className="input-content" id="" placeholder="输入你想要搜索的内容" />
      </div>
    );
  }
}
