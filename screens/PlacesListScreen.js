import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import PlaceItem from "../components/PlaceItem";
import { loadPlaces } from "../store/places-actions";

export default function PlacesListScreen({ navigation }) {
  const state = useSelector((state) => state.places);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPlaces());
  }, [dispatch]);

  return (
    <FlatList
      data={state.places}
      keyExtractor={(item) => item.itemData.id.toString()}
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
