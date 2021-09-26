import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";

const Drawer = createDrawerNavigator();

function DrawerNavigator(props) {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default DrawerNavigator;
