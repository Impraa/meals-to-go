import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Avatar, Button, TextInput } from "react-native-paper";
import { CreditCardInput } from "../components/CreditCardInput";
import { SafeAreaView } from "react-native-safe-area-context";
import { CartContext } from "../../../../context/CartContext";
import { payRequest } from "../../../utils/Stripe";

export const SuccessScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Main");
    }, 2500);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Avatar.Icon size={100} icon="check-bold" style={styles.icon} />
        <Text style={styles.text}>Payment was successful!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    backgroundColor: "#21bd50",
    marginBottom: 15,
  },
  text: {
    fontSize: 17.5,
    fontWeight: "bold",
  },
});
