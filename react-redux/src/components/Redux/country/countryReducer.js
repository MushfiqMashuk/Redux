import { DESTROY_COUNTRY } from "./actionTypes";

const initialState = {
  country: 110,
};

function countryReducer(state = initialState, action) {
  switch (action.type) {
    case DESTROY_COUNTRY:
      return {
        ...state,
        country: state.country - 1,
      };

    default:
      return state;
  }
}

export default countryReducer;
