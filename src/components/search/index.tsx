import * as React from "react";
import "./style.scss";
import searchIcon from "../../assets/img/input.png";
import Store from "../../store";

export class Search extends React.Component<any, any> {
  state = {
    search: ''
  }


  handleInput = e => {
  
    this.setState({
      search: e.target.value
    })
  }

  handleKeyPress = e => {
    // if (e.target.value !== '') {
      if (e.key === 'Enter') {
        Store.Hall.getSearchData(this.state.search)
      }
    // }
  }
  render() {
    return (
      <div className="searchInput">
        <div className="search-icon">
          <img src={searchIcon} alt="" />
        </div>
        <input type="text" name="" className="input-content" id="" placeholder="输入你想要搜索的内容" onChange={this.handleInput} onKeyPress={this.handleKeyPress} />
      </div>
    );
  }
}
