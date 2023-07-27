import React from "react";
import { BackgroundImage } from "../components/BackgrundImage";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../../utils/Infrastructure";
import { Button } from "react-native-paper";
import LottieView from "lottie-react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

export const AccountScreen = ({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) => {
  return (
    <BackgroundImage>
      <LottieView
        autoPlay
        loop
        resizeMode="cover"
        source={require("../../../../assets/watermelon.json")}
        style={styles.watermelon}
      />
      <Text style={styles.title}>Meals to Go</Text>
      <Button
        rippleColor="#FFF"
        icon="login"
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        Login
      </Button>
      <Button
        rippleColor="#FFF"
        icon="account-plus"
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate("Register")}
      >
        Register
      </Button>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.brand.primary,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  watermelon: {
    width: "100%",
    height: "60%",
    position: "absolute",
    top: 50,
    backgroundColor: "trasnparent",
  },
});
