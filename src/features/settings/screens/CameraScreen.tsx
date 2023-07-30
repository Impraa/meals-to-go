import React, { useContext, useEffect, useRef } from "react";
import { Camera, CameraType } from "expo-camera";
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "../../../../context/UserContext";

export const CameraScreen = ({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) => {
  const cameraRef = useRef<Camera>(null);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const { user } = useContext(UserContext);

  const snap = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user?.email}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission?.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <Camera ref={cameraRef} style={styles.camera} type={CameraType.front}>
      <TouchableOpacity style={styles.container} onPress={snap} />
    </Camera>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
});
