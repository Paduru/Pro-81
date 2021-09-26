import React from "react";
import { View, StyleSheet, Text } from "react-native";

import TabNavigator from "./navigation/TabNavigator";
import DrawerNavigator from "./navigation/DrawerNavigator";

export default function App() {
  return <DrawerNavigator />;
}
