import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Constants from "expo-constants";

const { googleApiKey } = Constants.manifest.extra;

export default function MapPreview(props) {
  let imagePreviewUrl;

  if (props.location) {
    const { lat, lng } = props.location;

    imagePreviewUrl =
      "https://maps.googleapis.com/maps/api/staticmap?" +
      `center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap` +
      `&markers=color:blue%7Clabel:A%7C${lat},${lng}` +
      `&key=${googleApiKey}`;
  }

  return (
    <View style={[styles.mapPreview, props.style]}>
      {props.location ? (
        <Image style={styles.mapImage} source={{ uri: imagePreviewUrl }} />
      ) : (
        props.children
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: "center",
    alignItems: "center",
  },
  mapImage: {
    width: "100%",
    height: "100%",
  },
});
