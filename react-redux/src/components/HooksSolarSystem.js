import { useDispatch, useSelector } from "react-redux";
import { planetAction } from "./Redux";

function HooksSolarSystem() {
  const planet = useSelector((state) => state.destroyPlanet.planet);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Solar System</h2>
      <p>{planet}</p>
      <button onClick={() => dispatch(planetAction())}>Destroy Planet</button>
    </div>
  );
}

export default HooksSolarSystem;
