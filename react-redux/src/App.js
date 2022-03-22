import { Provider } from "react-redux";
import "./App.css";
import HooksCountry from "./components/HooksCountry";
import HooksSolarSystem from "./components/HooksSolarSystem";
import NewHooksCountry from "./components/NewHooksCountry";
import store from "./components/Redux/store";
import SolarSystem from "./components/SolarSystem";
import Thanos from "./components/Thanos";
import Users from "./components/Users";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Thanos/>
        <SolarSystem />
        <HooksSolarSystem />
        <HooksCountry />
        <NewHooksCountry /> */}
        <Users/>
      </div>
    </Provider>
  );
}

export default App;
