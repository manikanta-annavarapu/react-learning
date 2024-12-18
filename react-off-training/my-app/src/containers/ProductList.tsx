import { memo, useEffect } from "react";
import Product from "../components/Product";
import useProducts from "../hooks/useProducts";
import { useNavigate, useSearchParams } from "react-router-dom";
import Paginator from "../components/Paginator";

function ProductList() {
  // let productList: ProductType[] = [];
  const productList = useProducts();
  const navigate = useNavigate();
  const [queryParams, setQueryParams] = useSearchParams({ page: "1" });

  useEffect(() => {
    console.log("Query params", queryParams.get("page"));
  }, [queryParams]);
  const start = (Number(queryParams.get("page")) - 1) * 10;
  const end = Number(queryParams.get("page") || 1) * 10;
  return (
    <div>
      <button onClick={() => setQueryParams({ page: "5" })}>Page 5</button>
      {productList.slice(start, end).map((product) => {
        return (
          <Product
            key={product.productId}
            data={product}
            btnClick={(id: number) => {
              console.log("Add to cart", id);
              navigate("/checkout");
            }}
          />
        );
      })}
      <Paginator changePage={setQueryParams} />
    </div>
  );
}

export default memo(ProductList);
