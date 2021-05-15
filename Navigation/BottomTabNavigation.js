import React from "react";
import { View, Text } from "react-native";
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
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 10,
          marginTop: 5,
          backgroundColor: "#f0f0f0",
          borderRadius: 30,
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
