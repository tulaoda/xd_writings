import { Http } from "../../utils/HttpBasics";
import { action, observable, runInAction, toJS } from "mobx";

export default class Store {
  @observable
  detail: any = {};
  @action.bound
  async getArticle(articleId) {
    // console.log(articleId);
    let that = this;
    Http.get("/api/v1/Article/GetArticleCollectInfo", {
      articleCollectId: articleId
    }).then((res:any) => {
      runInAction(() => {
        that.detail = res.data;
        // console.log(res.data);
      });
    });
  }
}
