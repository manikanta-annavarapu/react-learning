import { useState } from "react";
import "./App.css";
// import Demo from "./Demo";
import ThemeSwitch from "./components/ThemeSwitch";
// import Checkout from "./containers/Checkout";
import ProductList from "./containers/ProductList";
import { ThemeContext } from "./context";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className="App">
      {/* <Demo /> */}
      {/* <Checkout /> */}
      <ThemeSwitch changeTheme={(t) => setTheme(t)} />
      <ThemeContext.Provider value={theme}>
        <ProductList />
      </ThemeContext.Provider>
      {/* <button onClick={}>Click me</button> */}
    </div>
  );
}

export default App;
