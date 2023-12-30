import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import MaterialChipBasic from "../components/MaterialChipBasic";
import MaterialButtonViolet2 from "../components/MaterialButtonViolet2";

function ResetPassword(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        resizeMode="contain"
        style={styles.image1}
      ></Image>
      <Text style={styles.resetYourPassword}>Reset your password</Text>
      <MaterialChipBasic style={styles.materialChipBasic1}></MaterialChipBasic>
      <Text style={styles.loremIpsum1}>
        You will receive and email with the reset link.
      </Text>
      <MaterialButtonViolet2
        style={styles.materialButtonViolet2}
      ></MaterialButtonViolet2>
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
  resetYourPassword: {
    fontFamily: "roboto-700",
    color: "rgba(18,18,18,1)",
    fontSize: 28,
    lineHeight: 10,
    marginTop: 57,
    alignSelf: "center"
  },
  materialChipBasic1: {
    width: 300,
    height: 36,
    marginTop: 36,
    alignSelf: "center"
  },
  loremIpsum1: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 12,
    marginTop: 24,
    marginLeft: 38
  },
  materialButtonViolet2: {
    height: 36,
    width: 300,
    marginTop: 23,
    alignSelf: "center"
  }
});

export default ResetPassword;
