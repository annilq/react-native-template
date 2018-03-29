import axios from "axios";

axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    config.timeout = config.timeout || 7000;
    return config;
  },
  function(error) {
    // Do something with request error
    console.log(error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return parseRes(response);
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error.message);
  }
);
// data service,add cache feature to get Method
function parseRes(response) {
  if (response.data) {
    if (response.data.code === -1) {
      // 过期code
      Request.logout();
      return Promise.reject(response.data.message);
      // 外部服务用status和result表示状态以及结果
    } else if (response.data.code === 0) {
      // 正常code
      console.log(response.data);
      return Promise.resolve(response.data.data);
    } else {
      // 其他code
      return Promise.reject(response.data.message);
    }
  }
  return response;
}

class Request {
  get = (url, param = {}, cache = false) => {
    return axios.get(url, { params: param });
  };

  post = (url, data = {}) => {
    return axios.post(url, data);
  };
  postFormData = (url, data = {}) => {
    let formData = this.transFormData(data);
    return axios.post(url, formData);
  };
  delete = url => {
    return axios.delete(url);
  };
  put = (url, data = {}) => {
    return axios.put(url, data);
  };
  transFormData = data => {
    var params = new URLSearchParams();
    for (let item in data) {
      params.append(item, data[item]);
    }
    return params.toString();
  };
  static logout = () => {
    console.log("logout");
  };
}

export default new Request();
