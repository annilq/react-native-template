import { Alert } from "react-native";
import axios from "axios";
import AppStore from "../store";

axios.interceptors.request.use(
  function(config) {
    AppStore.dispatch({ type: "showloader" });
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
    AppStore.dispatch({ type: "hideloader" });
    // Do something with response data
    return parseRes(response);
  },
  function(error) {
    AppStore.dispatch({ type: "hideloader" });
    // Do something with response error
    return Promise.reject(error);
  }
);
// data service,add cache feature to get Method
function parseRes(response) {
  if (response.data) {
    if (response.data.code === -1) {
      // 过期code
      Alert.alert(
        "提醒",
        response.data.message || "当前会话过期,请重新登录",
        [{ text: "确定", onPress: () => Request.logout() }],
        { cancelable: false }
      );
      return Promise.reject(response.data);
      // 外部服务用status和result表示状态以及结果
    } else if (response.data.code === 0) {
      // 正常code
      console.log(response.data);
      return Promise.resolve(response.data.data);
    } else {
      // 其他code
      return Promise.reject(response.data);
    }
  }
  return response;
}

class Request {
  get = (url, param = {}, cache = false) => {
    return axios.get(url, { params: param }).catch(function(error) {
      console.log(error);
    });
  };

  post = (url, data = {}) => {
    return axios.post(url, data).catch(function(error) {
      console.log(error);
    });
  };
  postFormData = (url, data = {}) => {
    let formData = this.transFormData(data);
    return this.post(url, formData);
  };
  delete = url => {
    return axios.delete(url).catch(function(error) {
      console.log(error);
    });
  };
  put = (url, data = {}) => {
    return axios.put(url, data).catch(function(error) {
      console.log(error);
    });
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
    AppStore.dispatch({ type: "Logout" });
  };
}

export default new Request();
