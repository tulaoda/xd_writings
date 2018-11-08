// import { ColumnProps } from "antd/lib/table";
import { action, observable, runInAction, toJS } from "mobx";
// import { HttpBasics } from 'core/HttpBasics';
// import { message } from 'antd';
import axios from 'axios';
// const Http = new HttpBasics('/user/');
export default class Store {
    constructor() {
    }
    @observable loding = true;
    @observable isLogin = false;
    @observable User = {

    };
    @action.bound
    Login() {
        // this.User = params;
        var params = new URLSearchParams();
        params.append("client_id", "DDE1F5ACAF194674B13167269861FB7D");
        params.append("grant_type", "password");
        params.append("username", "13602166357");
        params.append("password", "000000");
        axios
            .post("http://api.stonemonth.com/usercenter/connect/token", params)
            .then(res => {
                console.log(res);
                sessionStorage.setItem("access_token", res.data.access_token);
                runInAction(() => {
                    this.isLogin = true;
                });
            });
        
     
    }
    @action.bound
    async outLogin() {
        this.isLogin = false;
    }

}
