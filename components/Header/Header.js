import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.headerWarp}>
        <View>
          <Text style={styles.headerText}>{title}</Text>
          <View style={styles.headerLine} />
        </View>
        <TouchableOpacity style={styles.headerIcon}>
          <AntDesign name="search1" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomHeader}>
        <View style={styles.bottomInnerWarp} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 85,
  },
  headerWarp: {
    backgroundColor: "#100933",
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 10,
  },
  headerText: {
    color: "#fff",
    fontFamily: "lusitana-bold",
    fontSize: 20,
    marginLeft: 8,
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
    width: 100,
  },
  headerIcon: {
    marginRight: 20,
    marginTop: 10,
  },
});
