import React from "react";
import { Text } from "react-native";
import { TabNavigator, TabBarBottom } from "react-navigation";
import Task from "./task";
import Order from "./order";
import ProjectStack from "./projects";
import User from "./user";
import NotificationList from "./notification";

const RootNavigator = TabNavigator(
  {
    projectStack: {
      screen: ProjectStack,
      navigationOptions: {
        title: "知乎"
      }
    },
    tasks: {
      screen: Task,
      navigationOptions: {
        title: "知乎"
      }
    },
    orders: {
      screen: Order,
      navigationOptions: {
        title: "知乎"
      }
    },
    user: {
      screen: User,
      navigationOptions: {
        title: "知乎"
      }
    },
    notification: {
      screen: NotificationList
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        console.log(navigation.state);
        return (
          <Text
            style={{
              color: "#000",
              overflow: "hidden",
              alignItems: "center"
            }}
          >
            {routeName}
          </Text>
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
      //showLabel:false,
      style: {
        backgroundColor: "#fff"
      }
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    animationEnabled: false,
    swipeEnabled: false
  }
);

export default class App extends React.Component {
  render() {
    return <RootNavigator />;
  }
}
