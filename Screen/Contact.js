import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header/Header";

const Contact = () => {
  return (
    <View style={styles.container}>
      <Header title={"Contacts"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Contact;
