import { combineReducers } from "redux";
import countryReducer from "./country/countryReducer";
import planetReducer from "./planet/planetReducer";
import usersReducer from "./users/usersReducer";

const rootReducer = combineReducers({
  destroyCountry: countryReducer,
  destroyPlanet: planetReducer,
  users: usersReducer,
});

export default rootReducer;
