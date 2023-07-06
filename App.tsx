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

export default function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
          <Searchbar
            style={styles.searchBar}
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            mode="view"
          />
        </View>
        <View style={styles.listContainer}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatBar.currentHeight : 0,
  },
  searchContainer: {
    padding: 15,
    backgroundColor: "green",
    justifyContent: "center",
  },
  listContainer: {
    flex: 1,
    backgroundColor: "blue",
  },
  searchBar: {
    backgroundColor: "white",
  },
});
