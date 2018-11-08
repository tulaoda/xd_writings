import axios from "axios";
export class HttpBasics {
  constructor() {
    axios.defaults.baseURL = "http://api.tjise.stonemonth.com";
    let token = sessionStorage.getItem("access_token");
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
