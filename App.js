import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import api from "./api/api";
import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));

export default function App() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     api
  //       .get("/api/user/")
  //       .then((res) => {
  //         console.log("res===", res);
  //       })
  //       .catch((error) => {
  //         console.log("err==", error);
  //       });
  //   };
  //   fetchData();
  // }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
