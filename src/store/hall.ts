import { Http } from "./../../utils/HttpBasics";
import { action, observable, runInAction, toJS } from "mobx";

export default class Store {

  @observable
  pageData = []

  @observable
  tmpPageData = []


  @observable
  visible = false

  @observable params = {
    page: 1,
    pageSize: 10
  }
  @action.bound
  async getPageData() {
    let that = this;
    Http.get("/api/v1/Article/GetArticleCollect", {
      page: this.params.page,
      pageSize: this.params.pageSize,
      search: ''
    }).then((res: any) => {
      runInAction(() => {
        if (!res.data.list) {
          that.visible = true;
        }
        that.tmpPageData = res.data.list;//数据结构一致
        that.pageData = [...that.pageData, ...that.tmpPageData];
      });
    });
  }



  @action.bound
  async getSearchData(searchName) {
    let that = this;
    Http.get("/api/v1/Article/GetArticleCollect?page=1&pageSize=10", {
      searchName: searchName
    }).then((res: any) => {
      runInAction(() => {
        that.pageData = res.data.list;
      });
    });
  }




}
