import React from "react";
import { Text } from "react-native";
import { TabNavigator, TabBarBottom } from "react-navigation";
import Task from "./task";
import Order from "./order";
import ProjectStack from "./projects";
import User from "./user";
import NotificationList from "./notification";
const AppRoutesInfo = {
  projects: {
    title: "思考",
    iconName: "projects"
  },
  tasks: {
    title: "讨论",
    iconName: "tasks"
  },
  orders: {
    title: "想法",
    iconName: "orders"
  },
  user: {
    title: "动态",
    iconName: "user"
  },
  notifications: {
    title: "我的",
    iconName: "notify"
  }
};

const AppRoutes = {
  projects: ProjectStack,
  tasks: Task,
  orders: Order,
  user: User,
  notifications: NotificationList
};

const RootNavigator = TabNavigator(AppRoutes, {
  navigationOptions: ({ navigation }) => {
    const { routeName } = navigation.state;
    const { iconName, title } = AppRoutesInfo[routeName];
    return {
      tabBarIcon: ({ focused, tintColor }) => {
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
      title: title
    };
  },
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
});

export default RootNavigator;
