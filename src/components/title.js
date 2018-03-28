import React from "react";
import { View, Text } from "react-native";

class Title extends React.Component {
  render() {
    return (
      <Text
        style={{
          color: "#fff",
          fontWeight: "bold"
        }}
      >
        自定义title {this.props.children}
      </Text>
    );
  }
}

export default Title;
