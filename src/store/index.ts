import { configure } from "mobx";
import hall from "./hall";
import detail from "./detail";
import user from "./user";
// configure({ enforceActions: false });
configure({ enforceActions: true });

class store {
  constructor() {
    this.ready();
    this.init();
    this.User.Login()
  }
  Hall = new hall();
  Detail = new detail();
  User = new user();
  /**
   * 定义全局 变量 枚举 ===
   */
  ready() {
    console.log("-----------ready Store------------", this);
  }
  init() { }
}
export default new store();
