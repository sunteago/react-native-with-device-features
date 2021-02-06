import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Colors from "../constants/Colors";
import { useDispatch, useSelector } from "react-redux";
import { addPlace } from "../store/places-actions";
import ImagePicker from "../components/ImagePicker";

export default function NewPlaceScreen(props) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();

  const dispatch = useDispatch();

  const onTitleChangeHandler = (value) => {
    setTitle(value);
  };

  const savePlaceHandler = () => {
    dispatch(addPlace(title, image));
    props.navigation.goBack();
  };

  const imageTakenHandler = (imagePath) => {
    setImage(imagePath);
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={onTitleChangeHandler}
          value={title}
        />
        <ImagePicker onImageTaken={imageTakenHandler} />
        <Button
          title="Save place"
          color={Colors.primary}
          onPress={savePlaceHandler}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
});
