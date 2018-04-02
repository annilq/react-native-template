import React from "react";
import { StackNavigator } from "react-navigation";
import { View, Text } from "react-native";
import navigationOptions from "../config/router";

class OrderList extends React.Component {
  static navigationOptions = {
    headerTitle: "订单详情"
  };
  render() {
    return (
      <View>
        <Text>订单详情</Text>
      </View>
    );
  }
}
const OrderStack = StackNavigator(
  {
    orderList: {
      screen: OrderList
    }
  },
  {
    navigationOptions: navigationOptions
  }
);
export default OrderStack;
