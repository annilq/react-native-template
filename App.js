import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Root from "./root";
import Login from "./login";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Root /> */}
        <Login/>
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
