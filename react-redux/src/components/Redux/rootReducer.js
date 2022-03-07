import { combineReducers } from "redux";
import countryReducer from "./country/countryReducer";
import planetReducer from "./planet/planetReducer";

const rootReducer = combineReducers({
  destroyCountry: countryReducer,
  destroyPlanet: planetReducer,
});

export default rootReducer;
