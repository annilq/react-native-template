import React from "react";
import { View, Text } from "react-native";

class UserInfo extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>个人信息</Text>
      </View>
    );
  }
}

export default UserInfo;
