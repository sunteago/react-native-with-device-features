import { ADD_PLACE, SET_PLACES } from "./places-actions";
import Place from "../models/Place";

const initialState = {
  places: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          itemData: new Place(
            action.placeData.id.toString(),
            action.placeData.title,
            action.placeData.image
          ),
        }),
      };
    case SET_PLACES:
      return {
        ...state,
        places: action.places.map((place) => ({
          itemData: new Place(
            place["place_id"],
            place.title,
            place["image_uri"]
          ),
        })),
      };
    default:
      return state;
  }
};
