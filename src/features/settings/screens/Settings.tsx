import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Button, List } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { colors } from "../../../utils/Infrastructure";
import { UserContext } from "../../../../context/UserContext";
import {
  NavigationProp,
  ParamListBase,
  useFocusEffect,
} from "@react-navigation/native";
import { FadeInView } from "../../../components/animations/FadeAnimation";

const Settings = ({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) => {
  const { user, setUser } = useContext(UserContext);
  const [photo, setPhoto] = useState<string | null>(null);

  const getProfilePicture = async (user) => {
    const photo = await AsyncStorage.getItem(`${user?.email}-photo`);
    setPhoto(photo);
  };

  useFocusEffect(() => {
    getProfilePicture(user);
  });

  return (
    <FadeInView duration={1000}>
      <SafeAreaView>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={() => navigation.navigate("Camera")}
          >
            {!photo ? (
              <Avatar.Icon
                size={75}
                icon="human"
                style={{ backgroundColor: "#696AC3" }}
              />
            ) : (
              <Avatar.Image
                size={75}
                source={{ uri: photo }}
                style={{ backgroundColor: "#696AC3" }}
              />
            )}
            <Text
              style={{ marginVertical: 20, fontWeight: "bold", fontSize: 17.5 }}
            >
              {user?.email}
            </Text>
          </TouchableOpacity>
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
