import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Message from "../Screen/Message";
import Contact from "../Screen/Contact";
import Request from "../Screen/Request";
const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <BottomTab.Navigator
      initialRouteName="Message"
      tabBarOptions={{
        activeTintColor: "#100933",
        inactiveTintColor: "#595959",
        showLabel: false,
        style: {
          backgroundColor: "#f0f0f0",
          borderRadius: 30,
          position: "absolute",
          bottom: 20,
          left: 10,
          right: 10,
          ...styles.bottomNavStyle,
        },
      }}
    >
      <BottomTab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="contacts" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="message1" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Request"
        component={Request}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="persons" size={24} color={color} />
          ),
          tabBarBadge: 3,
        }}
      />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomNavStyle: {
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
  },
});
