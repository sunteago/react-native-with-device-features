import { ADD_PLACE } from "./places-actions";
import Place from "../models/Place";

const initialState = {
  places: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat(
          new Place(Math.random(), action.placeData.title)
        ),
      };
    default:
      return state;
  }
};
