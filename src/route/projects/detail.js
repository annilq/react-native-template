import React from "react";
import { View, Text, Button } from "react-native";
class DetailsScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "知乎详情"
  };
  render() {
    /* 2. Read the params from the navigation state */
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;

    return (
      <View>
        <Text>知乎详情</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
export default DetailsScreen;
