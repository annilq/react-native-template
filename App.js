import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SwitchNavigator } from "react-navigation";
import App from "./root";
import Login from "./login";

export default SwitchNavigator(
  {
    App: App,
    Login: Login
  },
  {
    initialRouteName: "App"
  }
);
