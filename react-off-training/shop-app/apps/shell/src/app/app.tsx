import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';
import { useEventBus } from '@shop-app/event-bus';

const Product = React.lazy(() => import('product/Module'));
const Checkout = React.lazy(() => import('checkout/Module'));
const Cart = React.lazy(() => import('cart/Module'));

export function App() {
  useEventBus('my-event', (data) => {
    console.log('Received event in shell', data);
  });

  window.addEventListener('product_mfe_event', (event) => {
    console.log('Received event in shell from product mfe', event);
  });
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />
        <Route path="/product" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
