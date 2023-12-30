import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonGrey(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.createAnAccount}>CREATE AN ACCOUNT</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,1)"
  },
  createAnAccount: {
    color: "#000000",
    fontSize: 14,
    fontFamily: "roboto-700"
  }
});

export default MaterialButtonGrey;
