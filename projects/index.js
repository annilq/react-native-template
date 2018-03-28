import React from "react";
import { Button, View, Text } from "react-native";
import { StackNavigator, NavigationActions } from "react-navigation";
import Title from "../components/title";
import ProjectDetail from "./detail";

class ProjectList extends React.Component {
  static navigationOptions = {
    headerTitle: "知乎首页"
  };
  logout = () => {
    this.props.navigation.navigate("Login");
  };
  render() {
    return (
      <View>
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
        <Button title="logout" onPress={this.logout} />
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
