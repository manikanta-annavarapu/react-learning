import "./App.css";
import Greet from "./components/Greet";
import GreetProps from "./props/GreetProps";
import { Hello } from "./components/Hello";
import Wel from "./components/Welcome";
import WelcomeProps from "./props/WelcomeProps";

function App() {
  const name = "Mani";
  return (
    <div className="App">
      <Greet />
      <Wel />
      <Hello />

      <GreetProps name={name}>
        <h3>and welcome him.</h3>
      </GreetProps>

      <WelcomeProps name={name}>
        <h3>How are you?</h3>
      </WelcomeProps>
    </div>
  );
}

export default App;