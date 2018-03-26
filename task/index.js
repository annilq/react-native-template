import React from "react";
import { View, Text } from "react-native";

class TaskList extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>任务列表</Text>
      </View>
    );
  }
}

export default TaskList