import { Clock } from "./components/Clock/Clock";
import { CountDown } from "./components/CountDown/CountDown";
import "./App.css";
import "./style/index.css";
import { NetContainer } from "./components/NetContainer/NetContainer";

function App() {
  return (
    <div className="app">
      <Clock />
      <CountDown />
      <NetContainer />
    </div>
  );
}

export default App;
