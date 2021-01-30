import React, { useState } from "react";
import { View, Button, Text, StyleSheet, Image, Alert } from "react-native";
import Colors from "../constants/Colors";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

const ImgPicker = (props) => {
  const [image, setImage] = useState();

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA);

    if (result.status !== "granted") {
      Alert.alert("Insufficient permissions", "You need to grant permissions", [
        {
          text: "OK",
        },
      ]);

      return false;
    }

    return true;
  };

  const takeImgHandler = async () => {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    setImage(image.uri);
  };

  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        {!image ? (
          <Text> NO image picked yet</Text>
        ) : (
          <Image
            style={styles.image}
            source={{
              uri: image,
            }}
          />
        )}
        <Button
          title="Take Image"
          color={Colors.primary}
          onPress={takeImgHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: "center",
  },
  imagePreview: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ImgPicker;
