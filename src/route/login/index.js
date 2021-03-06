import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  AsyncStorage
} from "react-native";
import { Request, Api } from "../../util";

class Login extends React.Component {
  state = { username: "", password: "" };
  forgetPwd = () => {
    console.log("forgetPwd");
  };
  register = () => {
    console.log("register");
  };
  login = async () => {
    let data = await Request.get(Api.login);
    await AsyncStorage.setItem("userToken", `userToken-${Date.now()}`);
    this.props.navigation.dispatch({ type: "Login" });
  };
  render() {
    return (
      <View style={styles.loginWrapper}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>Logo</Text>
        </View>
        <View>
          <TextInput
            placeholder="用户名"
            // autoFocus={true}
            style={styles.inputStyle}
            returnKeyType="next"
            onSubmitEditing={() => {
              this.passwordInput.focus();
            }}
            onChangeText={text => this.setState({ username: text })}
            value={this.state.text}
          />
        </View>

        <View>
          <TextInput
            placeholder="密码"
            secureTextEntry={true}
            style={styles.inputStyle}
            returnKeyType="done"
            ref={input => {
              this.passwordInput = input;
            }}
            onChangeText={text => this.setState({ password: text })}
          />
        </View>
        <View style={styles.submitBtn}>
          <Button onPress={this.login} title="登录" color="#841584" />
        </View>
        <View style={styles.btn}>
          <Text
            style={styles.btnText}
            suppressHighlighting={true}
            onPress={this.forgetPwd}
          >
            注册帐号
          </Text>
          <Text
            style={styles.btnText}
            suppressHighlighting={true}
            onPress={this.register}
          >
            忘记密码
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  loginWrapper: {
    paddingHorizontal: 30
  },
  logo: {
    marginVertical: 100,
    alignItems: "center"
  },
  logoText: {
    fontSize: 30
  },
  inputStyle: { height: 40, borderColor: "gray", borderBottomWidth: 1 },
  submitBtn: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#841584"
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 50
  },
  btnText: {
    lineHeight: 40
  }
});
export default Login;
