import { useEffect, useState } from "react";
import "./App.css";
// import Demo from "./Demo";
import ThemeSwitch from "./components/ThemeSwitch";
// import Checkout from "./containers/Checkout";
// import ProductList from "./containers/ProductList";
import { ThemeContext } from "./context";
import AppRouter from "./AppRouter";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import Currency from "./components/Currency";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme") || "light");
    }
  }, []);
  return (
    <div className="App">
      {/* <Demo /> */}
      {/* <Checkout /> */}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <ThemeContext.Provider value={theme}>
              <Menu />
              <Currency />
              <ThemeSwitch
                changeTheme={(t) => {
                  setTheme(t);
                  localStorage.setItem("theme", t);
                }}
              />
              <AppRouter />
            </ThemeContext.Provider>
          </BrowserRouter>
        </PersistGate>
      </Provider>

      {/* <button onClick={}>Click me</button> */}
    </div>
  );
}

export default App;
