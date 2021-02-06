import React from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import PlaceItem from "../components/PlaceItem";

export default function PlacesListScreen({ navigation }) {
  const state = useSelector((state) => state.places);

  return (
    <FlatList
      data={state.places}
      keyExtractor={(item) => item.itemData.id}
      renderItem={({ item }) => {
        return (
          <PlaceItem
            image={item.itemData.image}
            title={item.itemData.title}
            address={null}
            onSelect={() =>
              navigation.navigate("PlaceDetail", {
                placeTitle: item.itemData.title,
                placeId: item.itemData.id,
              })
            }
          />
        );
      }}
    />
  );
}

const styles = StyleSheet.create({});
