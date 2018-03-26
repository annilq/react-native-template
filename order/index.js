import React from "react";
import { View, Text } from "react-native";

class OrderList extends React.Component {
  static navigationOptions = {
    title: "知乎首页"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>知乎详情</Text>
      </View>
    );
  }
}

export default OrderList