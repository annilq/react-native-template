import React from "react";
import { StackNavigator } from "react-navigation";
import { View, Text, Button, AsyncStorage } from "react-native";
import navigationOptions from "../config/router";

class UserInfo extends React.Component {
  static navigationOptions = {
    headerTitle: "我的"
  };
  logout = async () => {
    await AsyncStorage.removeItem("userToken");
    this.props.navigation.dispatch({ type: "Logout" });
  };
  render() {
    return (
      <View>
        <Text>个人信息</Text>
        <Button title={"退出登录"} onPress={this.logout} />
      </View>
    );
  }
}
const UserStack = StackNavigator(
  {
    user: {
      screen: UserInfo
    }
  },
  {
    navigationOptions: navigationOptions
  }
);
export default UserStack;
