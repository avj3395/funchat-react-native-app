import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const RequestItems = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.ItemWarp}>
        <Image
          style={styles.ImageTag}
          source={require("../../assets/avathar-icon.jpg")}
        />
        <View style={styles.TextWarp}>
          <TouchableOpacity>
            <Text style={styles.TextName}>{item?.name}</Text>
          </TouchableOpacity>
          <Text style={styles.TextMessage}>{item?.date} </Text>
        </View>
        <View style={styles.iconWarp}>
          <TouchableOpacity style={styles.iconItem}>
            <AntDesign name="closecircleo" size={24} color="#100933" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconItem}>
            <AntDesign name="checkcircleo" size={24} color="#100933" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
  iconWarp: {
    flexDirection: "row",
    marginTop: 18,
    position: "absolute",
    right: 20,
    top: 18,
  },
  iconItem: {
    marginRight: 10,
  },
});

export default RequestItems;
