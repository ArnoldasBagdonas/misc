import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import MaterialButtonGrey1 from "../components/MaterialButtonGrey1";

function Dashboard(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        resizeMode="contain"
        style={styles.image1}
      ></Image>
      <Text style={styles.welcome}>Welcome 💫</Text>
      <Text style={styles.loremIpsum1}>
        Congratulations your are logged in.
      </Text>
      <MaterialButtonGrey1
        style={styles.materialButtonGrey1}
      ></MaterialButtonGrey1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image1: {
    width: 200,
    height: 200,
    marginTop: 113,
    alignSelf: "center"
  },
  welcome: {
    fontFamily: "roboto-700",
    color: "rgba(18,18,18,1)",
    fontSize: 28,
    lineHeight: 10,
    marginTop: 57,
    alignSelf: "center"
  },
  loremIpsum1: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 16,
    marginTop: 37,
    alignSelf: "center"
  },
  materialButtonGrey1: {
    height: 36,
    width: 300,
    marginTop: 75,
    marginLeft: 38
  }
});

export default Dashboard;
