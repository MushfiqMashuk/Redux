import { connect } from "react-redux";

const Thanos = ({ item }) => {
  return (
    <div>
      <h2>Item {item}</h2>
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



export default connect(mapStateToProps)(Thanos);
