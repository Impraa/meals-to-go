import { StatusBar } from "expo-status-bar";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar as StatBar,
  View,
  FlatList,
} from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfo from "../components/RestaurantCard";
import { space } from "../../../utils/Infrastructure";
import { RestaurantType } from "../../../utils/Interfaces";
import React from "react";
import { RestaurantContext } from "../../../../context/RestaurantContext";

export const RestaurantScreen = () => {
  useEffect(() => {
    const FetchRestaurantData = async () => {
      axios
        .get("http://192.168.1.3:3000/restaurant/", {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((response) => response.data)
        .then((data) => {
          setRestaurant(data as unknown as RestaurantType[]);
        })
        .catch((error) => console.log(error));
    };

    FetchRestaurantData();
  }, []);

  const [searchQuery, setSearchQuery] = useState<string>("");

  const { restaurant, setRestaurant } = useContext(RestaurantContext);

  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar
          elevation={5}
          style={styles.searchBar}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          mode="view"
        />
      </View>
      <FlatList
        data={restaurant}
        renderItem={({ item }) => {
          return <RestaurantInfo restaurant={item} />;
        }}
        keyExtractor={(item) => item._id}
        contentContainerStyle={styles.containerStyle}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatBar.currentHeight : 0,
  },
  searchContainer: {
    padding: space[3],
    justifyContent: "center",
  },
  listContainer: {
    flex: 1,
  },
  searchBar: {
    backgroundColor: "white",
  },
  containerStyle: { paddingHorizontal: 5, marginVertical: 12 },
});
