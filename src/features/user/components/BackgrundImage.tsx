import React from "react";
import { Children, ReactNode } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";

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
        {children}
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
});
