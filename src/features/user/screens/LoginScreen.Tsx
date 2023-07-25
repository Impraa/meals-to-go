import React, { useState } from "react";
import { BackgroundImage } from "../components/BackgrundImage";
import { Button, TextInput } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { colors } from "../../../utils/Infrastructure";
import { UserType } from "../../../utils/Interfaces";

export const LoginScreen = () => {
  const [accInfo, setAccInfo] = useState<UserType>({
    email: "",
    password: "",
    username: "",
  });

  return (
    <BackgroundImage>
      <View style={styles.loginContainer}>
        <TextInput
          label="Email"
          mode="outlined"
          value={accInfo.email}
          onChangeText={(text) =>
            setAccInfo((prevAccInfo) => ({ ...prevAccInfo, email: text }))
          }
        />
        <TextInput
          label="Password"
          mode="outlined"
          value={accInfo.password}
          onChangeText={(text) =>
            setAccInfo((prevAccInfo) => ({ ...prevAccInfo, password: text }))
          }
        />
        <Button
          rippleColor="#FFF"
          icon="login"
          mode="contained"
          style={styles.button}
        >
          Login
        </Button>
      </View>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    width: "65%",
  },
  button: {
    marginVertical: 30,
    backgroundColor: colors.brand.primary,
    marginBottom: 20,
  },
});
