import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SwitchNavigator } from "react-navigation";
import Root from "./root";
import Login from "./login";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Root />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
export default SwitchNavigator(
  {
    App: App,
    Login: Login
  },
  {
    initialRouteName: "App"
  }
);
