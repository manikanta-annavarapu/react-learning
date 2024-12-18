import { Route, Routes } from "react-router-dom";
import Demo from "./Demo";
import ProductList from "./containers/ProductList";
import Checkout from "./containers/Checkout";
import ErrorPage from "./containers/ErrorPage";
import PrivateRoute from "./components/PrivateRoute";
import ProductDetail from "./components/ProductDetail";
import { lazy, Suspense } from "react";

const LazyProductList = lazy(() => import("./containers/ProductList"));

export default function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Demo />} />
        <Route path="/products" element={<LazyProductList />} />
        <Route path="/detail/:pid" element={<ProductDetail />} />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}
