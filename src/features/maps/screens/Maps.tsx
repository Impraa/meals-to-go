import React from "react";
import MapView from "react-native-maps";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Maps = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Maps!</Text>
    </SafeAreaView>
  );
};

export default Maps;
