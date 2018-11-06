import { configure } from "mobx";
import hall from "./hall";
import detail from "./detail";
// configure({ enforceActions: false });
configure({ enforceActions: true });

class store {
  constructor() {
    this.ready();
    this.init();
  }
  Hall = new hall();
  Detail = new detail();
  /**
   * 定义全局 变量 枚举 ===
   */
  ready() {
    console.log("-----------ready Store------------", this);
  }
  init() {}
}
export default new store();
