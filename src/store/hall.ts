import { Http } from "./../../utils/HttpBasics";
import { action, observable, runInAction, toJS } from "mobx";

export default class Store {

  @observable
  pageData = []

  @action.bound
  async getPageData() {
    let that = this;
    Http.get("/api/v1/Article/GetArticleCollect?page=1&pageSize=10&search=", {
    }).then((res: any) => {
      runInAction(() => {
        that.pageData = res.data.list;
      });
    });
  }

}
