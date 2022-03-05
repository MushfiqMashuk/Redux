import { Provider } from "react-redux";
import './App.css';
import store from "./components/Redux/store";
import SolarSystem from './components/SolarSystem';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SolarSystem />
      </div>
    </Provider>
  );
}

export default App;
