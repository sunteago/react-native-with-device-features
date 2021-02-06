import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import PlacesListScreen from "../screens/PlacesListScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import MapScreen from "../screens/MapScreen";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Colors from "../constants/Colors";
import HeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const RootStack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
          headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primary : "",
          },
        }}
      >
        <RootStack.Screen
          name="PlacesList"
          component={PlacesListScreen}
          options={(navData) => ({
            headerTitle: "All places",
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Add Place"
                  iconName={Platform.OS === "andrwoid" ? "md-add" : "ios-add"}
                  onPress={() => {
                    navData.navigation.navigate("NewPlace");
                  }}
                />
              </HeaderButtons>
            ),
          })}
        />
        <RootStack.Screen
          name="PlaceDetail"
          component={PlaceDetailScreen}
          options={(navData) => ({
            headerTitle: navData.route.params.placeTitle,
          })}
        />
        <RootStack.Screen
          name="NewPlace"
          component={NewPlaceScreen}
          options={{ headerTitle: "Add place" }}
        />
        <RootStack.Screen name="Map" component={MapScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
