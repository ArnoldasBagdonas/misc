import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function MaterialChipBasic2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.name}>Name</Text>
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
  name: {
    fontSize: 13,
    color: "rgba(0,0,0,0.87)"
  }
});

export default MaterialChipBasic2;
