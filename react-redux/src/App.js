import { Provider } from "react-redux";
import "./App.css";
import HooksCountry from "./components/HooksCountry";
import HooksSolarSystem from "./components/HooksSolarSystem";
import store from "./components/Redux/store";
import SolarSystem from "./components/SolarSystem";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SolarSystem />
        <HooksSolarSystem/>
        <HooksCountry/>
      </div>
    </Provider>
  );
}

export default App;
