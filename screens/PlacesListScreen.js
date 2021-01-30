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
      renderItem={(item) => {
        return (
          <PlaceItem
            image={null}
            title={item.item.title}
            address={null}
            onSelect={() =>
              props.navigation.navigate("PlaceDetail", {
                placeTitle: item.item.title,
                placeId: item.item.id,
              })
            }
          />
        );
      }}
    />
  );
}

const styles = StyleSheet.create({});
