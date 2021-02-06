import React from "react";
import AppNavigation from "./navigation/AppNavigation";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import placesReducer from "./store/places-reducer";
import { init } from "./helpers/db";

init()
  .then(() => {
    console.log("Initializing Database");
  })
  .catch((err) => {
    console.log("Initializing DB Failed", err);
  });

const rootReducer = combineReducers({
  places: placesReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
