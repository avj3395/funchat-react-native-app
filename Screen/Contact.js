import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ContactItems from "../components/ContactItems/ContactItems";
import Header from "../components/Header/Header";

const Contact = () => {
  const data = [
    {
      name: "Akshay V J",
      email: "example@test.com",
      id: 1,
    },
    {
      name: "Amal Babu",
      email: "example@test.com",
      id: 2,
    },
    {
      name: "Aravind Babu",
      email: "example@test.com",
      id: 3,
    },
    {
      name: "Anandhu Chandran",
      email: "example@test.com",
      id: 4,
    },
  ];
  return (
    <View style={styles.container}>
      <Header title={"Contacts"} />
      <FlatList
        data={data}
        keyExtractor={(item, index) => "name-" + item.id + "-" + index}
        renderItem={({ item }) => <ContactItems item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: 70,
  },
});
export default Contact;
