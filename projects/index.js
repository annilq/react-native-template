import React from "react";
import { Button, View, Text } from "react-native";
import { StackNavigator } from "react-navigation";
import Title from "../components/title";
import ProjectDetail from "./detail";

class ProjectList extends React.Component {
  static navigationOptions = {
    headerTitle: <Title>知乎首页</Title>
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>知乎首页</Text>
        <Button
          title="知乎"
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
    initialRouteName: "projects",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);
export default ProjectStack;
