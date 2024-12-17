import "./App.css";
import Demo from "./Demo";
import Checkout from "./containers/Checkout";
import ProductList from "./containers/ProductList";

function App() {
  return (
    <div className="App">
      {/* <Demo /> */}
      <Checkout />
      <ProductList />
      {/* <button onClick={}>Click me</button> */}
    </div>
  );
}

export default App;
