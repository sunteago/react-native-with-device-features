import React, { useState } from "react";
import {
  View,
  Button,
  Alert,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import Colors from "../constants/Colors";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import MapPreview from "./MapPreview";

export default function getLocationHandler() {
  const [pickedLocation, setPickedLocation] = useState();
  const [isLoading, setLoading] = useState(false);

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.LOCATION);

    if (result.status !== "granted") {
      Alert.alert(
        "Insufficient permissions",
        "You need to grant permissions for location",
        [
          {
            text: "OK",
          },
        ]
      );

      return false;
    }

    return true;
  };

  const getLocationHandler = async (e) => {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    setLoading(true);

    try {
      const location = await Location.getCurrentPositionAsync({
        timeout: 5000,
      });

      const { latitude, longitude } = location.coords;
      setPickedLocation({
        lat: latitude,
        lng: longitude,
      });
    } catch (err) {
      Alert.alert(
        "Error getting location",
        "Could not get current location. Please try again later",
        [
          {
            text: "Okay",
          },
        ]
      );
    }
    setLoading(false);
  };

  return (
    <View style={styles.locationPicker}>
      <MapPreview style={styles.mapPreview} location={pickedLocation}>
        <View style={styles.mapPreview}>
          {isLoading ? (
            <ActivityIndicator size="large" color={Colors.primary} />
          ) : (
            <Text> No location chosen yet!</Text>
          )}
        </View>
      </MapPreview>
      <Button
        title="Get location"
        color={Colors.primary}
        onPress={getLocationHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  locationPicker: {
    marginBottom: 15,
  },
  mapPreview: {
    marginBottom: 10,
    width: "100%",
    height: 150,
    borderColor: "#ccc",
    borderWidth: 1,
  },
});
