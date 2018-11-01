// axios.interceptors.request.use(
//   function(config) {
//     // Do something before request is sent
//     let token = sessionStorage.getItem("access_token");
//     config.headers.common["Authorization"] = "Bearer " + token;

//     return config;
//   },
//   function(error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );
// var params = new URLSearchParams();
// params.append("client_id", "DDE1F5ACAF194674B13167269861FB7D");
// params.append("grant_type", "password");
// params.append("username", "13602166357");
// params.append("password", "000000");
// axios
//   .post("http://api.stonemonth.com/usercenter/connect/token", params)
//   .then(res => {
//     co999999999999999999999999999999999999999999999999999999999999999999999999999999999999nsole.log(res);
//     sessionStorage.setItem("access_token", res.data.access_token);
//   });

// axios.interceptors.request.use(
//   function(config) {
//     // Do something before request is sent
//     let token = sessionStorage.getItem("access_token");
//     config.headers.common["Authorization"] = "Bearer " + token;

//     return config;
//   },
//   function(error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );
