import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";

const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === "Feed") {
            iconName = focused ? "book" : "book-outline";
          } else if (route.name === "CreatePost") {
            iconName = focused ? "create" : "create-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
      })}
    >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="CreatePost" component={CreatePost} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
