import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function MaterialChipBasic1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.passwrod3}>Passwrod</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    paddingLeft: 12,
    paddingRight: 12,
    borderWidth: 1,
    borderColor: "#000000"
  },
  passwrod3: {
    fontSize: 13,
    color: "rgba(0,0,0,0.87)"
  }
});

export default MaterialChipBasic1;
