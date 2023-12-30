import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import MaterialChipBasic from "../components/MaterialChipBasic";
import MaterialChipBasic1 from "../components/MaterialChipBasic1";

function Login(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        resizeMode="contain"
        style={styles.image1}
      ></Image>
      <MaterialButtonViolet
        style={styles.materialButtonViolet1}
      ></MaterialButtonViolet>
      <Text style={styles.react1}>Forgot your passwrod ?</Text>
      <Text style={styles.hello}>Hello.</Text>
      <MaterialChipBasic style={styles.materialChipBasic}></MaterialChipBasic>
      <MaterialChipBasic1
        style={styles.materialChipBasic1}
      ></MaterialChipBasic1>
      <Text style={styles.loremIpsum}>You do not have an account ?</Text>
      <Text style={styles.create}>Create !</Text>
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
  materialButtonViolet1: {
    height: 36,
    width: 300,
    marginTop: 288,
    marginLeft: 38
  },
  react1: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 16,
    lineHeight: 10,
    marginTop: -79,
    marginLeft: 169
  },
  hello: {
    fontFamily: "roboto-700",
    color: "rgba(18,18,18,1)",
    fontSize: 28,
    lineHeight: 10,
    marginTop: -198,
    alignSelf: "center"
  },
  materialChipBasic: {
    width: 300,
    height: 36,
    marginTop: 37,
    marginLeft: 38
  },
  materialChipBasic1: {
    width: 300,
    height: 36,
    marginTop: 36,
    marginLeft: 38
  },
  loremIpsum: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 16,
    marginTop: 136,
    alignSelf: "center"
  },
  create: {
    fontFamily: "roboto-700",
    color: "rgba(255,200,0,1)",
    fontSize: 16,
    marginTop: 25,
    alignSelf: "center"
  }
});

export default Login;
