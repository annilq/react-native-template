import React from "react";
import { StackNavigator } from "react-navigation";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Request, Api } from "../../util";
import navigationOptions from "../config/router";

class ImList extends React.Component {
  static navigationOptions = {
    headerTitle: "聊天"
  };
  state = { data: [] };
  notifyItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <View style={{ flex: 1 }}>
          <Text style={styles.text}>{item.title}</Text>
          <Text style={styles.text}>{item.detail}</Text>
        </View>
        <View style={styles.arrow}>
          <Text>{">"}</Text>
        </View>
      </View>
    );
  };
  componentDidMount = async () => {
    let data = await Request.get(Api.notify);
    if (data) {
      this.setState({ data });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={item => item.title}
          data={this.state.data}
          renderItem={this.notifyItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    margin: 5,
    borderColor: "#aaa",
    borderWidth: 1
  },
  text: {
    lineHeight: 20,
    fontSize: 16
  },
  arrow: {
    width: 20
  }
});
const ImNavigator = StackNavigator(
  {
    imList: ImList
  },
  {
    navigationOptions: navigationOptions
  }
);
export default ImNavigator;
