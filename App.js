import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import getFonts from "./constants/Font";
import api from "./api/api";
import Home from "./Screen/Home";

import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));

export default function App() {
  const [fontLoading, setFontLoading] = useState(false);
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
  if (fontLoading) {
    return <Home />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontLoading(true)}
        onError={console.warn}
      />
    );
  }
}
