import { DESTROY_PLANET } from "./actionTypes";

const initialState = {
  planet: 10,
};

export default function planetReducer(state = initialState, action) {
  switch (action.type) {
    case DESTROY_PLANET:
      return {
        ...state,
        planet: state.planet - 1,
      };
    default:
      return state;
  }
}
