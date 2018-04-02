import React from "react";
import { Button, View, Text, AsyncStorage } from "react-native";
import { StackNavigator } from "react-navigation";
import { connect } from "react-redux";
import ProjectDetail from "./detail";
// import { inject, observer } from "mobx-react";
// @inject(["store"])
// @observer
const mapStateToProps = state => ({
  isLogin: state.auth.isLogin
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: "Logout" })
});

@connect(mapStateToProps, mapDispatchToProps)
class ProjectList extends React.Component {
  static navigationOptions = {
    headerTitle: "知乎首页"
  };
  logoutqq = async () => {
    await AsyncStorage.removeItem("userToken");
    // if (this.props.store.isLogin) {
    this.props.logout();
    // } else {
    //   this.props.store.login();
    // }
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
        <Button title={"logout"} onPress={this.logoutqq} />
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
