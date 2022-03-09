import { useDispatch, useSelector } from "react-redux";
import { countryAction } from "./Redux";

function HooksCountry() {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.destroyCountry.country);
  return (
    <div>
      <h2>Total Country</h2>
      <p>{country}</p>
      <button onClick={() => dispatch(countryAction())}>Destroy Country</button>
    </div>
  );
}

export default HooksCountry;

const state = {
  destroyCountry: {
    country: 110,
  },
  destroyPlanet: {
    planet: 12,
  },
};

export { state };
