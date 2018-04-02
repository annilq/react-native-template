import React from "react";
import { View } from "react-native";
import { Provider } from 'react-redux';
import { Loader } from "./components";
import store from "./store";
import App from "./route";
import "./mock";

// 最后的程序组件，包含app组件，与功能组件
class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View
          style={{
            flex: 1
          }}
        >
          <App />
          <Loader />
        </View>
      </Provider>
    );
  }
}

export default Root;
