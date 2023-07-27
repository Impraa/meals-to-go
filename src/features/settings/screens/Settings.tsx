import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../../utils/Infrastructure";
import { UserContext } from "../../../../context/UserContext";

const Settings = () => {
  const { setUser } = useContext(UserContext);

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Settings!</Text>
      <Button
        rippleColor="#FFF"
        icon="logout"
        mode="contained"
        style={styles.button}
        onPressOut={() => setUser(null)}
      >
        Logout
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 30,
    backgroundColor: colors.brand.primary,
    marginBottom: 20,
  },
});

export default Settings;
