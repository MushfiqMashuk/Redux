import { connect } from "react-redux";
import { countryAction } from "./Redux/country/countryAction";
import { planetAction } from "./Redux/planet/planetAction";

const Thanos = ({ item, dispatchFunc }) => {
  return (
    <div>
      <h2>Item {item}</h2>
      <button onClick={dispatchFunc}>Destroy Something</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  // If thanos has the Gauntlet [If a props named 'gauntlet' passed to this Thanos component]
  const itemState = ownProps.gauntlet
    ? state.destroyPlanet.planet
    : state.destroyCountry.country;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.gauntlet
    ? () => dispatch(planetAction())
    : () => dispatch(countryAction());

  return {
    dispatchFunc: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Thanos);
