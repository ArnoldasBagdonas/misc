import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import MaterialChipBasic1 from "../components/MaterialChipBasic1";
import MaterialChipBasic from "../components/MaterialChipBasic";
import MaterialChipBasic2 from "../components/MaterialChipBasic2";
import MaterialButtonViolet1 from "../components/MaterialButtonViolet1";

function CreateUser(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        resizeMode="contain"
        style={styles.image1}
      ></Image>
      <MaterialChipBasic1
        style={styles.materialChipBasic1}
      ></MaterialChipBasic1>
      <MaterialChipBasic style={styles.materialChipBasic2}></MaterialChipBasic>
      <Text style={styles.logIn}>Log in !</Text>
      <Text style={styles.loremIpsum1}>I already have an account !</Text>
      <Text style={styles.welcome}>Welcome.</Text>
      <MaterialChipBasic2
        style={styles.materialChipBasic2}
      ></MaterialChipBasic2>
      <MaterialButtonViolet1
        style={styles.materialButtonViolet1}
      ></MaterialButtonViolet1>
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
  materialChipBasic1: {
    width: 300,
    height: 36,
    marginTop: 249,
    marginLeft: 38
  },
  materialChipBasic2: {
    width: 300,
    height: 36,
    marginTop: 37,
    alignSelf: "center"
  },
  logIn: {
    fontFamily: "roboto-700",
    color: "rgba(255,200,0,1)",
    fontSize: 16,
    marginTop: 216,
    marginLeft: 160
  },
  loremIpsum1: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 16,
    marginTop: -63,
    alignSelf: "center"
  },
  welcome: {
    fontFamily: "roboto-700",
    color: "rgba(18,18,18,1)",
    fontSize: 28,
    lineHeight: 10,
    marginTop: -346,
    alignSelf: "center"
  },
  materialButtonViolet1: {
    height: 36,
    width: 300,
    marginTop: 179,
    alignSelf: "center"
  }
});

export default CreateUser;
