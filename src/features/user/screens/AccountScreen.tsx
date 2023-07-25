import React from "react";
import { BackgroundImage } from "../components/BackgrundImage";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../../utils/Infrastructure";
import { Button } from "react-native-paper";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

export const AccountScreen = ({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) => {
  return (
    <BackgroundImage>
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
});
