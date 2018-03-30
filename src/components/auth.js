import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  AsyncStorage
} from "react-native";
import { inject, observer } from "mobx-react";
@inject(["store"])
@observer
class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("userToken");
    console.log("userToken", userToken);
    this.props.navigation.navigate(userToken ? "App" : "Login");
  };

  // Render any loading content that you like here
  render() {
    console.log("authLogin",this.props.store.isLogin);
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default AuthLoadingScreen;
