import { StatusBar } from "expo-status-bar";
import { useState } from "react";
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

const restaurantData: RestaurantType[] = [
  {
    name: "Some Restaurant",
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos: [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address: "100 some random street",
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: false,
  },
  {
    name: "Some Restaurant2",
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos: [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address: "100 some random street",
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: false,
  },
  {
    name: "Some Restaurant3",
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos: [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address: "100 some random street",
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: false,
  },
  {
    name: "Some Restaurant4",
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos: [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address: "100 some random street",
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: false,
  },
];

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

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
        data={restaurantData}
        renderItem={({ item }) => {
          return <RestaurantInfo restaurant={item} />;
        }}
        keyExtractor={(item) => item.name}
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
