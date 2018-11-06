import axios from "axios";
export class HttpBasics {
  constructor() {
    axios.defaults.baseURL = "http://api.tjise.stonemonth.com";
    let token = sessionStorage.getItem("access_token");
    if (token == null) {
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
        });
    }
    axios.interceptors.request.use(
      function (config) {
        let token = sessionStorage.getItem("access_token");
        config.headers.common["Authorization"] = "Bearer " + token;
        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      }
    );
  }

  get(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          params: params
        })
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  post(url, data) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, JSON.stringify(data), {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export const Http = new HttpBasics();
