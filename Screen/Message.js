import React from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import Header from "../components/Header/Header";
import MessageItems from "../components/MessageItems/MessageItems";

const Message = () => {
  const data = [
    {
      name: "Akshay V J",
      message: "Hello friends its a testing msg",
      id: 1,
    },
    {
      name: "Amal Babu",
      message: "Hello friends its a testing msg",
      id: 2,
    },
    {
      name: "Aravind Babu",
      message: "Hello friends its a testing msg",
      id: 3,
    },
    {
      name: "Anandhu Chandran",
      message: "Hello friends its a testing msg",
      id: 4,
    },
    {
      name: "Akhil S",
      message: "Hello friends its a testing msg",
      id: 5,
    },
    {
      name: "David Jon",
      message: "Hello friends its a testing msg",
      id: 6,
    },
    {
      name: "Rahul C",
      message: "Hello friends its a testing msg",
      id: 7,
    },
  ];
  return (
    <View style={styles.container}>
      <Header title={"Messages"} />
      <FlatList
        data={data}
        keyExtractor={(item, index) => "name-" + item.id + "-" + index}
        renderItem={({ item }) => <MessageItems item={item} />}
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
export default Message;
