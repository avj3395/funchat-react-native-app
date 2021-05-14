import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contact</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "lusitana-bold",
    fontSize: 20,
    fontWeight: "100",
  },
});
export default Contact;
