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
    projects: {
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
    notifications: {
      screen: NotificationList
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName = "";
        switch (routeName) {
          case "projects":
            iconName = "pro";
            break;
          case "tasks":
            iconName = "tasks";
            break;
          case "orders":
            iconName = "orders";
            break;
          case "user":
            iconName = "user";
            break;
          case "notifications":
            iconName = "notify";
            break;
        }
        return (
          <Text
            style={{
              color: "#000",
              overflow: "hidden",
              alignItems: "center"
            }}
          >
            {iconName}
          </Text>
        );
      },
      title:"11"
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

export default RootNavigator
