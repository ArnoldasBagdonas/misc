import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import MaterialButtonGrey from "../components/MaterialButtonGrey";

function Welcome(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <Image
          source={require("../assets/images/logo.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Text style={styles.loremIpsum8}>Lorem Ipsum</Text>
      </View>
      <Text style={styles.loremIpsum}></Text>
      <MaterialButtonViolet
        style={styles.materialButtonViolet}
      ></MaterialButtonViolet>
      <MaterialButtonGrey
        style={styles.materialButtonGrey}
      ></MaterialButtonGrey>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    top: 0,
    width: 200,
    height: 200,
    position: "absolute",
    left: 0
  },
  loremIpsum8: {
    top: 174,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 28,
    left: 17
  },
  imageStack: {
    width: 200,
    height: 208,
    marginTop: 113,
    marginLeft: 88
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 59,
    marginLeft: 115
  },
  materialButtonViolet: {
    height: 36,
    width: 300,
    marginTop: 113,
    marginLeft: 38
  },
  materialButtonGrey: {
    height: 36,
    width: 300,
    marginTop: 35,
    marginLeft: 38
  }
});

export default Welcome;
