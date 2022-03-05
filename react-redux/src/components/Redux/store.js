import { createStore } from "redux";
import planetReducer from "./planet/planetReducer";

const store = createStore(planetReducer);

export default store;