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
        places: state.places.concat({
          itemData: new Place(
            action.placeData.id.toString(),
            action.placeData.title,
            action.placeData.image
          ),
        }),
      };
    default:
      return state;
  }
};
