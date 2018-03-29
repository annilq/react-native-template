import React from "react";
import { StackNavigator } from "react-navigation";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Request, Api } from "../util";
class NotificationList extends React.Component {
  static navigationOptions = {
    headerTitle: "提醒"
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
  componentDidMount = () => {
    Request.get(Api.notify).then(data => {
      this.setState({ data });
    });
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
const NotifyNavigator = StackNavigator(
  {
    NotificationList: NotificationList
  },
  {
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
export default NotifyNavigator;
