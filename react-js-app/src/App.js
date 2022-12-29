import "./App.css";
import Greet from "./components/Greet";
import { Hello } from "./components/Hello";
import Wel from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Greet />
      <Wel />
      <Hello />
    </div>
  );
}

export default App;
