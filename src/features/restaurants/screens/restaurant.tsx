import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar as StatBar,
  View,
} from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfo from "../components/RestaurantCard";
import { space } from "../../../utils/Infrastructure";

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
      <View style={styles.listContainer}>
        <RestaurantInfo
          restaurant={{
            name: "Some Restaurant",
            icon: "nes",
            photos: [
              "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
            ],
            address: "100 some random street",
            isOpenNow: true,
            rating: 4,
            isClosedTemporarily: false,
          }}
        />
      </View>
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
});
