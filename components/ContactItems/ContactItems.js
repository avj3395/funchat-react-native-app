import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ContactItems = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <View style={styles.ItemWarp}>
        <Image
          style={styles.ImageTag}
          source={require("../../assets/avathar-icon.jpg")}
        />
        <View style={styles.TextWarp}>
          <Text style={styles.TextName}>{item?.name}</Text>
          <Text style={styles.TextMessage}>{item?.email} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth - 30,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
    backgroundColor: "transparent",
    borderRadius: 16,
  },
  ImageTag: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  ItemWarp: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    padding: 15,
  },
  TextWarp: {
    marginLeft: 10,
    marginTop: 15,
  },
  TextName: {
    fontFamily: "lusitana-bold",
    fontSize: 15,
    color: "black",
  },
  TextMessage: {
    fontFamily: "lusitana-regular",
    fontSize: 10,
    color: "gray",
    marginLeft: 3,
  },
  borderWarp: {},
});

export default ContactItems;
