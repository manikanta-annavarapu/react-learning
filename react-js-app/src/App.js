import "./App.css";
import Greet from "./components/Greet";
import GreetProps from "./props/GreetProps";
import { Hello } from "./components/Hello";
import Wel from "./components/Welcome";
import WelcomeProps from "./props/WelcomeProps";
import Subscription from "./state/Subscription";
import Counter from "./state/Counter";
import {
  default as RenamedWishes,
  Wish as OreoWish,
} from "./destructuring/Wishes";

import N from "./destructuring/Namaste";
import FunctionClick from "./eventHandling/FunctionClick";
import ClassClick from "./eventHandling/ClassClick";
import ClassEventBinding from "./eventHandling/ClassEventBinding";

function App() {
  const name = "Mani";
  const agentCodes = [707, 112];
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

      <Subscription name={name}></Subscription>

      <Counter id="counter"></Counter>
      <div style={{ backgroundColor: "#a1a1a1" }}>
        <h2>Below section is for Destructuring</h2>
        <RenamedWishes name={name} partOfDay="Morning"></RenamedWishes>
        <OreoWish name={name} partOfDay="Evening"></OreoWish>
        <N name={name} agentCodes={agentCodes}></N>
      </div>

      <div>
        <FunctionClick></FunctionClick>
        <ClassClick></ClassClick>
        <ClassEventBinding></ClassEventBinding>
      </div>
    </div>
  );
}

export default App;
