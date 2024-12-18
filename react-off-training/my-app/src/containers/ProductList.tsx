import { memo } from "react";
import Product from "../components/Product";
import useProducts from "../hooks/useProducts";

function ProductList() {
  // let productList: ProductType[] = [];
  const productList = useProducts();

  return (
    <div>
      {productList.map((product) => {
        return (
          <Product
            key={product.productId}
            data={product}
            btnClick={(id: number) => console.log("Add to cart", id)}
          />
        );
      })}
    </div>
  );
}

export default memo(ProductList);
