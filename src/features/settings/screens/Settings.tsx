import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Button, List } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../../utils/Infrastructure";
import { UserContext } from "../../../../context/UserContext";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { FadeInView } from "../../../components/animations/FadeAnimation";

const Settings = ({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) => {
  const { user, setUser } = useContext(UserContext);

  return (
    <FadeInView duration={1000}>
      <SafeAreaView>
        <View style={{ alignItems: "center" }}>
          <Avatar.Icon
            size={75}
            icon="human"
            style={{ backgroundColor: "#2182BD" }}
          />
          <Text
            style={{ marginVertical: 20, fontWeight: "bold", fontSize: 17.5 }}
          >
            {user?.email}
          </Text>
        </View>
        <List.Section>
          <List.Item
            title="Favourites"
            description="View Your Favourites"
            style={styles.item}
            onPressOut={() => navigation.navigate("Favourites")}
            left={(props) => (
              <List.Icon {...props} color="black" icon="heart" />
            )}
          />
          <List.Item
            title="Logout"
            style={styles.item}
            onPressOut={() => setUser(null)}
            left={(props) => (
              <List.Icon {...props} color="black" icon="logout" />
            )}
          />
        </List.Section>
      </SafeAreaView>
    </FadeInView>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
  },
});

export default Settings;
