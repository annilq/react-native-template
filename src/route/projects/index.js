import React from "react";
import { Button, View, Text, AsyncStorage } from "react-native";
import { StackNavigator } from "react-navigation";
import navigationOptions from "../config/router";
import ProjectDetail from "./detail";
class ProjectList extends React.Component {
  static navigationOptions = {
    headerTitle: "项目列表"
  };
  render() {
    return (
      <View>
        <Button
          title="GO详情"
          color="#841584"
          onPress={() =>
            this.props.navigation.navigate("projectsDetails", {
              itemId: 86,
              otherParam: "详情param"
            })
          }
        />
      </View>
    );
  }
}

const ProjectStack = StackNavigator(
  {
    projects: {
      screen: ProjectList
    },
    projectsDetails: {
      screen: ProjectDetail
    }
  },
  {
    navigationOptions: navigationOptions
  }
);
export default ProjectStack;
