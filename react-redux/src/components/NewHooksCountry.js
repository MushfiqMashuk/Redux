import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {countryAction} from "./Redux/country/countryAction";

function NewHooksCountry() {
  const [number, setNumber] = useState(1);
  const country = useSelector((state) => state.destroyCountry.country);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Total Country</h2>
      <p>{country}</p>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(countryAction(number))}>
        Destroy {number} Country
      </button>
    </div>
  );
}

export default NewHooksCountry;
