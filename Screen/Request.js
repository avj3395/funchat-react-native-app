import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header/Header";

const Request = () => {
  return (
    <View style={styles.container}>
      <Header title={"Requests"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Request;
