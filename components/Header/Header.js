import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.headerWarp}>
        <StatusBar hidden />
        <Text style={styles.headerText}>Messages</Text>
        <View style={styles.headerLine} />
      </View>
      <View style={styles.bottomHeader}>
        <View style={styles.bottomInnerWarp} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
  },
  headerWarp: {
    backgroundColor: "#100933",
    paddingTop: 30,
    paddingLeft: 20,

    marginRight: 10,
  },
  headerText: {
    color: "#fff",
    fontFamily: "lusitana-bold",
    fontSize: 20,
  },
  bottomHeader: {
    height: 30,
    backgroundColor: "#100933",
    borderBottomRightRadius: 70,
    marginRight: 10,
  },
  headerLine: {
    height: 2,
    backgroundColor: "#fff",
    marginRight: 25,
  },
});
