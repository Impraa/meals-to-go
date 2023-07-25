import React from "react";
import { Children, ReactNode } from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";

const backgroundImage = require("../../../../assets/home_bg.jpg");

export const BackgroundImage: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <SafeAreaView style={styles.conatiner}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.childContainer}>{children}</View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  childContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.452)",
  },
});
