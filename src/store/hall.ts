import { Http } from "./../../utils/HttpBasics";
import { action, observable, runInAction, toJS } from "mobx";

export default class Store {
  // constructor(public map = data => data.list) {
  //   if (map == null) {
  //     this.map = data => data.list
  // }
  // }
  @observable
  pageData: any = {};
  @action.bound
  async getPageData() {
    Http.get(
      "/api/v1/Article/GetArticleCollect?page=1&pageSize=10&search=",
      ""
    ).then(map => {
      runInAction(() => {
        this.pageData = map;
        // console.log(map);
      });
    });
  }
  //   @action.bound
  //   async outLogin() {
  //     this.isLogin = false;
  //   }
}
