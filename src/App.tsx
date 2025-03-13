import { Clock } from "./components/Clock/Clock";
import { CountDown } from "./components/CountDown/CountDown";
import "./App.css";
import "./style/index.css";

function App() {
  return (
    <div className="app">
      <Clock />
      <CountDown />
    </div>
  );
}

export default App;
