import { Http } from "../../utils/HttpBasics";
import { action, observable, runInAction, toJS } from "mobx";

export default class Store {


  //投稿要求详情
  @observable
  detail: any = {};

  //我的投稿列表
  @observable
  myContribute = []


  //我的投稿详情
  @observable
  myDetail: any = {};

  @action.bound
  async getArticle(articleId) {
    let that = this;
    Http.get("/api/v1/Article/GetArticleCollectInfo", {
      articleCollectId: articleId
    }).then((res: any) => {
      runInAction(() => {
        that.detail = res.data;
      });
    });
  }
  @action.bound
  async getMyDetail(articleContributeId) {
    let that = this;
    Http.get("/api/v1/Article/GetMyContributeInfo", {
      articleContributeId: articleContributeId
    }).then((res: any) => {
      runInAction(() => {
        that.myDetail = res.data;
      });
    });
  }

  @action.bound
  async getMyArticle() {
    let that = this;
    Http.get("/api/v1/Article/GetMyContribute?page=1&pageSize=10", {
    }).then((res: any) => {
      runInAction(() => {
        that.myContribute = res.data.list;
      });
    });
  }

  async submitArtice(params) {
    let that = this;
    Http.post("/api/v1/Article/Contribute", params
    ).then((res: any) => {
      return res;
    });
  }
}
