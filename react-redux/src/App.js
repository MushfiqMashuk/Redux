import { Provider } from "react-redux";
import "./App.css";
import HooksCountry from "./components/HooksCountry";
import HooksSolarSystem from "./components/HooksSolarSystem";
import store from "./components/Redux/store";
import SolarSystem from "./components/SolarSystem";
import NewHooksCountry from "./components/NewHooksCountry";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SolarSystem />
        <HooksSolarSystem/>
        <HooksCountry/>
        <NewHooksCountry/>
      </div>
    </Provider>
  );
}

export default App;
