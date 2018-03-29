//referrence: https://medium.com/@kelleyannerose/react-native-activityindicator-for-a-quick-easy-loading-animation-593c06c044dc
import React, { Component } from "react";
import { StyleSheet, View, Modal, ActivityIndicator } from "react-native";
import { inject, observer } from "mobx-react";
@inject(["store"])
@observer
class Loader extends React.Component {
  render() {
    const { store, ...attributes } = this.props;
    console.log(store.loaderVisible);
    
    return (
      <Modal
        transparent={true}
        animationType={"none"}
        visible={store.loaderVisible}
        onRequestClose={() => {
          console.log("close modal");
        }}
      >
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            <ActivityIndicator animating={store.loaderVisible} />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around"
    // backgroundColor: "#00000040"
  },
  activityIndicatorWrapper: {
    // backgroundColor: "#FFFFFF",
    height: 100,
    width: 100,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  }
});

export default Loader;
