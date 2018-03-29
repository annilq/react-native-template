import React from "react";
import { View } from "react-native";
import Loader from "./components/loader";
import App from "./route"
import "./mock";
// 最后的程序组件，包含app组件，与功能组件
class Root extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <App />
        <Loader />
      </View>
    );
  }
}

export default Root;
