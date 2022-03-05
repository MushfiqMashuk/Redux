import { connect } from "react-redux";
import { planetAction } from "./Redux";

function SolarSystem({planet, planetAction}) {
  return (
    <div>
        <h2>
            Solar System
        </h2>
        <p>{planet}</p>
        <button onClick={planetAction}>Destroy Planet</button>
    </div>
  )
}

const mapStateToProps = state => ({planet: state.planet});

const mapDispatchToProps = dispatch => {
  return {
    planetAction: () => dispatch(planetAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SolarSystem);