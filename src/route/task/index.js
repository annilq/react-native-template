import React from "react";
import { StackNavigator } from "react-navigation";
import { View, Text } from "react-native";
import navigationOptions from "../config/router";

class TaskList extends React.Component {
  static navigationOptions = {
    headerTitle: "任务列表"
  };
  render() {
    return (
      <View>
        <Text>任务列表</Text>
      </View>
    );
  }
}

const TaskStack = StackNavigator(
  {
    taskList: {
      screen: TaskList
    }
  },
  {
    navigationOptions: navigationOptions
  }
);
export default TaskStack;
