import React, { useContext, useEffect, useState } from "react";
import { BackgroundImage } from "../components/BackgrundImage";
import { ActivityIndicator, Button, TextInput } from "react-native-paper";
import { View, StyleSheet, Text } from "react-native";
import { colors } from "../../../utils/Infrastructure";
import axios from "axios";
import { UserType } from "../../../utils/Interfaces";
import { UserContext } from "../../../../context/UserContext";

export const RegisterScreen = () => {
  const [accInfo, setAccInfo] = useState<UserType>({
    email: "",
    password: "",
    username: "",
  });

  const [confirmPassword, setConfirmPassword] = useState<string | undefined>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [error, setError] = useState<string | null>();

  const { setUser } = useContext(UserContext);

  useEffect(() => {
    setTimeout(() => {
      setError(null);
    }, 2500);
  }, [error]);

  const logInUser = (accInfo: UserType) => {
    if (accInfo.password !== confirmPassword) {
      return setError("Passwords are not matching");
    }

    axios
      .post("http://192.168.1.3:3000/user/register", accInfo, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        withCredentials: true,
      })
      .then((response) => setUser(response.data))
      .catch((error) => setError("There was an error or fields are empty"));
  };

  return (
    <BackgroundImage>
      <View style={styles.loginContainer}>
        {error && (
          <View style={styles.errorContainer}>
            <Text>{error}</Text>
          </View>
        )}
        <TextInput
          label="Username"
          mode="outlined"
          value={accInfo.username}
          onChangeText={(text) =>
            setAccInfo((prevAccInfo) => ({ ...prevAccInfo, username: text }))
          }
        />
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
        <TextInput
          label="Confrim Password"
          mode="outlined"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        {isLoading ? (
          <ActivityIndicator
            size={"large"}
            animating={true}
            color={colors.brand.primary}
          />
        ) : (
          <Button
            rippleColor="#FFF"
            icon="login"
            mode="contained"
            style={styles.button}
            onPressOut={() => logInUser(accInfo)}
          >
            Register
          </Button>
        )}
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
  errorContainer: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginBottom: 10,
  },
});
