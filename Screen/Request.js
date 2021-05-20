import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Header from "../components/Header/Header";
import RequestItems from "../components/RequestItems/RequestItems";

const Request = () => {
  const data = [
    {
      name: "Akshay V J",
      date: "12-05-December",
      id: 1,
    },
    {
      name: "Amal Babu",
      date: "12-05-December",
      id: 2,
    },
    {
      name: "Aravind Babu",
      date: "12-05-December",
      id: 3,
    },
    {
      name: "Anandhu Chandran",
      date: "12-05-December",
      id: 4,
    },
  ];
  return (
    <View style={styles.container}>
      <Header title={"Requests"} />
      <FlatList
        data={data}
        keyExtractor={(item, index) => "name-" + item.id + "-" + index}
        renderItem={({ item }) => <RequestItems item={item} />}
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
export default Request;
