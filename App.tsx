import { StatusBar } from "expo-status-bar";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar as StatBar,
  View,
} from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
          <Text>Search</Text>
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
    flex: 0.075,
    backgroundColor: "green",
    justifyContent: "center",
  },
  listContainer: {
    flex: 0.925,
    backgroundColor: "blue",
  },
});
