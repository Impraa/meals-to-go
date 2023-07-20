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
  Pressable,
  TouchableOpacity,
} from "react-native";
import { ActivityIndicator, Searchbar } from "react-native-paper";
import RestaurantInfo from "../components/RestaurantCard";
import { colors, space } from "../../../utils/Infrastructure";
import { RestaurantType } from "../../../utils/Interfaces";
import React from "react";
import { RestaurantContext } from "../../../../context/RestaurantContext";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { FavouritesContext } from "../../../../context/FavouritesContext";
import { FavouritesBar } from "../../../components/FavouritesBar";

export const RestaurantScreen = ({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { restaurant, isLoading } = useContext(RestaurantContext);

  const { favourites } = useContext(FavouritesContext);

  const [isToggled, setIsToggled] = useState<boolean>(false);

  const [filteredRestaurants, setFilteredRestaurants] = useState<
    RestaurantType[] | null
  >(restaurant);

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    if (restaurant)
      setFilteredRestaurants(
        restaurant.filter((res) => {
          return res.name
            .toLocaleLowerCase()
            .includes(searchQuery.toLocaleLowerCase());
        })
      );
  }, [restaurant, searchQuery]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar
          icon={"heart"}
          onIconPress={() => setIsToggled(!isToggled)}
          elevation={5}
          style={styles.searchBar}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          mode="view"
        />
        {isToggled && <FavouritesBar navigation={navigation} />}
      </View>
      {isLoading || filteredRestaurants?.length === 0 ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            size={"large"}
            animating={true}
            color={colors.brand.primary}
          />
        </View>
      ) : (
        <FlatList
          data={filteredRestaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { item })
                }
              >
                <RestaurantInfo restaurant={item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => (item ? item._id : index.toString())}
          contentContainerStyle={styles.containerStyle}
        />
      )}
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
  loadingContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  containerStyle: { paddingHorizontal: 15, marginVertical: 10 },
});
